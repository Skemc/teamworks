let queries = [
    {
        createUser: `INSERT INTO users (firstName, lastName, email, password, gender, address, jobrole, department) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`,
        isUserExist: `SELECT * FROM users WHERE email=$1`
    },
    {
        createArticle: `INSERT INTO articles (title, article, authorid, createdon) VALUES ($1,$2,$3,$4) RETURNING *`,
        isArticleExist: `SELECT * FROM articles WHERE title=$1 and article=$2`,
        editArticle: `UPDATE articles SET title=$1, article=$2 WHERE id=$3 RETURNING *`,
        deleteArticle: `DELETE FROM articles WHERE id=$1`,
        getArticle: `SELECT * FROM articles WHERE id=$1`,
        findArticle: `SELECT * FROM articles WHERE id=$1`,
        getAllArticle: `SELECT * FROM articles`
    }
];
export default queries;