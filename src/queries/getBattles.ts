import { gql } from "@apollo/client";

export default gql`
  query Battles($limit: Int) {
    allBattle(limit: $limit, sort: { _createdAt: DESC }) {
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
    allVote {
      _id
      hero
      battle {
        _id
      }
    }
  }
`;
