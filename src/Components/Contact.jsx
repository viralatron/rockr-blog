const Contact = ({ open, contactClose }) => {
  return (
    <dialog open={open} className="contact">
      <h2 className="contact__title">Contact</h2>
      <button
        type="button"
        className="contact__close"
        onClick={() => contactClose()}
      >
        ❌
      </button>
      <form className="form">
        <label htmlFor="name" className="form__label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Fill your full name"
          className="form__input"
        />
        <label htmlFor="email" className="form__label">
          E-mail
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Fill a valid e-mail"
          className="form__input"
        />
        <label htmlFor="phone" className="form__label">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Fill your phone"
          className="form__input"
        />
        <label htmlFor="post" className="form__label">
          Post
        </label>
        <input
          type="textarea"
          name="post"
          id="post"
          placeholder="Hello..."
          className="form__input"
        />
        <div className="form--center">
          <button type="button" className="form__submit">
            <img src={process.env.PUBLIC_URL + "/icon-submit.png"} />
            Submit
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default Contact;
