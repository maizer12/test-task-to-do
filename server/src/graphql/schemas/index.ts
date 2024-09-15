import { gql } from 'apollo-server-express';
import userSchema from './userSchema';

const typeDefs = gql`
	${userSchema}

	type Query {
		users: [User]
		user(id: ID!): User
	}

	type Mutation {
		register(username: String!, email: String!, password: String!): User
		login(email: String!, password: String!): String
	}
`;

export default typeDefs;
