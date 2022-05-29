import { gql } from '@apollo/client';

export const QUERY_CATEGORIES = gql`
  query queryCategory {
    categories {
      id
      name
      href
      icons {
        height
        url
        width
      }
    }
  }
`;
