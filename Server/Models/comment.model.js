import articles from './article.model';

const comments = [
  {
    id: 1,
    articleTitle: articles[0].title,
    article: articles[0].article,
    authorId: 'eric6@gmail.com',
    comment: 'jdfjdff',
    createdOn: new Date(),
  },
  {
    id: 2,
    title: articles[1].title,
    articleTitle: articles[1].article,
    authorId: 'eric2gmail.com',
    comment: 'jdfjdffvcgfd',
    createdOn: new Date()
  }
];
export default comments;