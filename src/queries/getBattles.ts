import { gql } from "@apollo/client";

export default gql`
  query Battles {
    allBattle {
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
