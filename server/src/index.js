const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const app = express();
// Load schema & resolvers 
const typeDefs = require('./schema/schema')
const resolvers = require('./resolver/resolver')
let apolloServer = null;
const startServer = async () => {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();
const port = 4000;
app.listen(port, () => {
    console.log(`Server ready at http://localhost:${port}${apolloServer.graphqlPath}`);
})


