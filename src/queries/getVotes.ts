import { gql } from "@apollo/client";

export default gql`
  query Votes($userId: String!) {
    allBattle(sort: { _createdAt: DESC }) {
      _id
      hero_one
      hero_one_img {
        asset {
          url
        }
      }
      hero_two
      hero_two_img {
        asset {
          url
        }
      }
      active_voting
    }
    allVote(where: { user_id: { eq: $userId } }) {
      _id
      hero
      user_id
      battle {
        _id
      }
    }
  }
`;
