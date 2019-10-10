let queries = [
    {
        createUser: `INSERT INTO users (firstName, lastName, email, password, gender, address, jobrole, department) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`,
        isUserExist: `SELECT * FROM users WHERE email=$1`
    },
    {
        createArticle: `INSERT INTO articles (title, article, createdon) VALUES ($1,$2,$3) RETURNING *`,
        isArticleExist: `SELECT * FROM articles WHERE title=$1 and article=$2`
    }
];
export default queries;