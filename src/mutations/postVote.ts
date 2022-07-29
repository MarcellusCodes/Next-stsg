import axios from "axios";

const PostVote = async (userId: string, hero: string, battleId: string) => {
  const response = await axios
    .post(
      `https://ednbm2hl.api.sanity.io/v2021-06-07/data/mutate/production`,
      {
        mutations: [
          {
            create: {
              _type: "vote",
              user_id: userId,
              hero: hero,
              battle: {
                _type: "reference",
                _ref: battleId,
              },
            },
          },
        ],
      },
      {
        headers: {
          Authorization:
            "Bearer skesdZqR4JchA06NxjTXYUnMIUEyo1MwVZ40LSrLlWfmi0gh8QMi1Tr7Bwy3S2UmD6jgptshzMVAZH38a",
        },
      }
    )
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  return response;
};

export default PostVote;
