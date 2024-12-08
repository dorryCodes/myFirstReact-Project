const Apps = ({ img, name, phone, email }) => {
  return (
    <div className="contacts">
      <article className="contact-card">
        <img className="cats" src={img} alt={name} />
        <h3>{name}</h3>
        <div className="info-group">
          <img src="./src/assets/phone-icon.png" alt="phone logo" />
          <p>{phone}</p>
        </div>
        <div className="info-group">
          <img src="./src/assets/mail-icon.png" alt="mail icon" />
          <p>{email}</p>
        </div>
      </article>
    </div>
  );
};
export default Apps;
