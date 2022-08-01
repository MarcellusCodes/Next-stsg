import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { getBattle } from "../../src/queries/index";
import { PostVote } from "../../src/mutations/index";
import { client } from "../../src/lib/index";
import { compareDates } from "../../src/utils/index";

interface ResponseProps {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseProps>
) {
  if (req.method !== "POST") {
    return;
  }

  const { battleId, hero } = await req.body;

  const session = await getSession({ req: req });

  if (!session) {
    res.status(401).json({
      message: "You need to login!",
    });
    return;
  }

  const { data } = await client.query({
    variables: { battleId: battleId },
    query: getBattle,
  });

  const battleQuery = await data;

  if (!battleQuery) {
    res.status(401).json({
      message:
        "This Battle doesnt exist or the time to vote on that is expired!",
    });
    return;
  }
  const checkActiveVoting = compareDates(battleQuery.Battle.active_voting);

  if (!checkActiveVoting) {
    res.status(409).json({
      message: "The time for voting has expired",
    });
    return;
  }

  const checkExistingVote = await battleQuery.allVote.filter(
    (vote: { user_id: string }) => vote.user_id === session.user_id
  );

  if (checkExistingVote.length > 0) {
    res.status(409).json({
      message: "You already voted for this battle!",
    });
    return;
  }

  const voteQuery = await PostVote(session.user_id, hero, battleId);

  if (!voteQuery) {
    res.status(400).json({
      message: "Error sending vote!",
    });
  }

  res.status(200).json({
    message: "Successfully Voted!",
  });
}
