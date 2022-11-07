const Article = ({ author, title, article, date, imageUrl }) => {
  const artTitle = title.replace(/(<([^>]+)>)/gi, "");
  const dateLoc = new Date(date);
  const options = { year: "numeric", month: "short", day: "numeric" };
  return (
    <article className="post">
      <img src={imageUrl} alt={artTitle} className="post__image" />
      <div className="details">
        <small className="details__date">
          {dateLoc.toLocaleDateString("en-US", options)}
        </small>
        <small className="details__author">{author}</small>
        <h2 className="details__title">{artTitle}</h2>
      </div>
      <div
        className="post__text"
        dangerouslySetInnerHTML={{ __html: article }}
      />
    </article>
  );
};

export default Article;
