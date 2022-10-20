const CardPost = ({
  id,
  author,
  authorEmail,
  title,
  article,
  date,
  imageUrl,
  itemNmbr,
  openArticle,
}) => {
  const headlineText =
    article.replace(/(<([^>]+)>)/gi, "").slice(0, 121) + " ...";
  const headlineTitle =
    title.replace(/(<([^>]+)>)/gi, "").length > 21
      ? title.replace(/(<([^>]+)>)/gi, "").slice(0, 21) + "..."
      : title.replace(/(<([^>]+)>)/gi, "");
  let cardClass = "card";

  if ((itemNmbr + 1) % 3 === 0) {
    cardClass += " card--big";
  }
  if ((itemNmbr - (itemNmbr % 3)) % 2 === 1) {
    cardClass += " card--reverse";
  }
  return (
    <div className={cardClass} key={id} onClick={() => openArticle(id)}>
      <img src={imageUrl} alt={title} className="card__image" />
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

export default CardPost;
