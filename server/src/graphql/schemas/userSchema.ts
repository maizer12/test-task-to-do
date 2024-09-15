import { gql } from 'apollo-server-express';

const userSchema = gql`
	type User {
		id: ID!
		username: String!
		email: String!
		createdAt: String
	}
`;

export default userSchema;
