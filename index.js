import express from 'express';
import knex from 'knex';
import { ApolloServer, gql } from 'apollo-server-express';
import knexConfig from './knexfile';

const environment = process.env.NODE_ENV || 'development';
const configuration = knexConfig[environment];
const database = knex(configuration);

const typeDefs = gql`
  type Query {
    todos: [Todo!]!
    hello: String
  }
  type Todo {
    id: Int!
    name: String
    content: String
  }
`;

const resolvers = {
  Query: {
    todos(parent, args, db) {
      return database('todos').select('*');
    },
    hello: () => 'hello world!'
  },
};

const server = new ApolloServer({ typeDefs, resolvers, context: () => database });

const app = express();
server.applyMiddleware({ app });

const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`Now browse to http://localhost:${port}${server.graphqlPath}`));
