import { gql } from '@apollo/client';


export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ownerName
          name
          description
          language
          ownerAvatarUrl
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`;

export const GET_LOGGED_IN_USER = gql`
  {
    me {
      id
      username
    }
  }
`






// other queries...