const BlogPost = ({
  id,
  author,
  authorEmail,
  title,
  article,
  date,
  imageUrl,
  itemNmbr,
}) => {
  const headlineText =
    article.replace(/(<([^>]+)>)/gi, "").slice(0, 121) + " ...";
  const headlineTitle = title.slice(0, 21) + "...";
  let postClass = "post";

  if ((itemNmbr + 1) % 3 === 0) {
    postClass += " post--big";
  }
  if ((itemNmbr - (itemNmbr % 3)) % 2 === 1) {
    postClass += " post--reverse";
  }
  return (
    <div className={postClass} key={id}>
      <img src={imageUrl} alt={title} className="post__image" />
      <div className="details">
        <small className="details__author">{author}</small>
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
