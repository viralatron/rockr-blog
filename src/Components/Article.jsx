const Article = ({
  id,
  author,
  authorEmail,
  title,
  article,
  date,
  imageUrl,
}) => {
  const dateLoc = new Date(date);
  const options = { year: "numeric", month: "short", day: "numeric" };
  return (
    <article className="post">
      <img src={imageUrl} alt={title} className="post__image" />
      <div className="details">
        <small className="details__date">
          {dateLoc.toLocaleDateString("en-US", options)}
        </small>
        <small className="details__author">{author}</small>
        <h2 className="details__title">{title}</h2>
      </div>
      <div
        className="post__text"
        dangerouslySetInnerHTML={{ __html: article }}
      />
    </article>
  );
};

export default Article;
