import { gql } from "@apollo/client";

export default gql`
  query Battles($battleId: ID!) {
    Battle(id: $battleId) {
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
    allVote(where: { battle: { _id: { eq: $battleId } } }) {
      _id
      hero
      user_id
      battle {
        _id
      }
    }
  }
`;
