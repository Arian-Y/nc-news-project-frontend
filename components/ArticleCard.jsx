export default function ArticleCard({ articles }) {
  return (
    <>
      <li id={articles.article_id}>
        <h2>{articles.title}</h2>
        <img src={articles.article_img_url}></img>
        <h3>{articles.author}</h3>
        <p>{articles.comment_count} comments</p>
        <p>Article id: {articles.article_id}</p>
      </li>
    </>
  );
}
