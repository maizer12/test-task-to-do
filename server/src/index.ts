import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import connectDB from './config/db';
import dotenv from 'dotenv';
import typeDefs from './graphql/schemas/index';
import resolvers from './graphql/resolvers/index';

dotenv.config();

const app = express();

connectDB();

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const startServer = async () => {
	await server.start();
	// @ts-ignore
	server.applyMiddleware({ app });

	const PORT = process.env.PORT || 5000;
	app.listen(PORT, () => {
		console.log(`Server running on http://localhost:${PORT}${server.graphqlPath}`);
	});
};

startServer();
