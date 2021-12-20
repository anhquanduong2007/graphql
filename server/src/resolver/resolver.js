const { books, authors } = require("../static");
const resolvers = {
    Mutation: {
        createAuthor: (parent, args) => {
            return args;
        },
        createBook: (parent, args) => {
            return args;
        }
    },
    Query: {
        books: () => {
            console.log("Đây là khi không gọi field author")
            return books
        },
        authors: () => {
            return authors
        },
        book: (parent, args) => {
            console.log("Đây là khi không gọi field author")
            // Tham số thứ 2 chính là những gì được truyền từ schema vào
            return books.find((book) => book.id.toString() === args.id);
            /**
             * {
                id: 2,
                name: 'Chi Pheo',
                genre: 'Truyen ngan',
                author: 2
                }
                - Vì ở bên schema chúng ta đã định nghĩa author có kiểu là author nên khi ở đây nếu chúng ta gọi thêm 
                1 trường author ở graphpl thì nó sẽ lấy thêm author và so sánh với author ở schema, ở đây rõ ràng là
                chúng ta đang bị đối lập dữ liệu nên chắc chắn kết quả nhận được là null cho nên ở đây giải pháp là tạo 1
                resolver mới để bất cứ khi nào người dùng người ta hỏi mà ra cái quyển sách là Book bên schema mà nhìn
                thấy cái field là author thì cái resolver của chúng ta sẽ biết cách để trả lại dữ liệu nào đấy thuộc dạng
                author  
             */
        },
        author: (parent, args) => {
            return authors.find((author) => author.id.toString() === args.id);
        }
    },
    Book: {
        author: (parent, args) => {
            console.log("Đây là khi gọi field author")
            // Cái parent đơn giản là kết quả của query cha 
            console.log(parent);
            return authors.find((author) => author.id == parent.authorId);
        }
    },
    Author: {
        books: (parent, args) => {
            console.log(parent)
            return books.filter((book) => book.author == parent.id)
        }
    },

};
module.exports = resolvers;