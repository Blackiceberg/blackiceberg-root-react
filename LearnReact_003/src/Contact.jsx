export default function Contact(props) {
  return (
      <article className="contact-card">
        <img
         src={props.img}
          alt="Mr. Whiskerson" 
        />
        <h3>{props.name}</h3>
        <div className="info-group">
          <img
           src="https://urlr.me/5jGbnc"
           alt="phone icon"
            />
          <p>{props.phone}</p>
        </div>
        <div className="info-group">
            <img 
            src="https://urlr.me/ZnjSrd"
            alt="mail icon"
            />
            <p>{props.email}</p>
        </div>
      </article>
  );
}

