const { gql } = require("apollo-server-express");
const typeDefs = gql`
# typeDefs viết tắt của type definition. 
    type Book {
        id: ID,
        name: String, 
        genre: String, 
        author: Author,
    }
    type Author {
        id: ID!,
        # Dấu ! để xác định trường đó là bắt buộc
        name: String,
        age: Int,
        books: [Book]
    }

    # ROOT TYPE 
    type Query {
        books: [Book],
        authors: [Author],
        author (id: ID!): Author,
        book (id: ID!): Book
    }
    type Mutation {
        createAuthor(id: ID!, name: String, age: Int): Author,
        createBook(id: ID!, name: String, genre: String, author: ID!): Book
    }
`;
module.exports = typeDefs;