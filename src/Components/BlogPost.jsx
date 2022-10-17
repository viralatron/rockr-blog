const BlogPost = ({
  id,
  author,
  authorEmail,
  title,
  article,
  date,
  imageUrl,
}) => {
  const headlineText =
    article.replace(/(<([^>]+)>)/gi, "").slice(0, 121) + " ...";
  const headlineTitle = title.slice(0, 21) + "...";
  return (
    <div className="post" key={id}>
      <img src={imageUrl} alt={title} className="post__image" />
      <div className="details">
        <a href={`mailto:${authorEmail}`} className="details__author">
          {author}
        </a>
        <h2 className="details__title">{headlineTitle}</h2>
        <p className="details__headtext">{headlineText}</p>
        <img
          className="details__readmore"
          src={process.env.PUBLIC_URL + "/icon-readmore.png"}
          alt="Read More"
        />
      </div>
    </div>
  );
};

export default BlogPost;
