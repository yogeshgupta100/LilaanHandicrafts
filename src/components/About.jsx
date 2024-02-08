import "../components/About.scss";

const About = () => {
  return (
    <div className="about">
      <h1 className="aboutUs">About Us</h1>
      <div className="about-wrapper">
        <div className="about-img">
          <img
            src="https://images.unsplash.com/photo-1682687980961-78fa83781450?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="about-img"
          />
        </div>
        <div className="about-text">
          <p>
            Welcome to <strong>LILAANHANDICRAFT</strong> , where we specialize in creating
            beautiful handicrafts for your home. Our focus on mud, metal, and
            wood products means that we have a unique selection of home decor
            items that you won't find anywhere else.
          </p>
          <p>
            Our skilled artisans take great care in creating each and every
            piece in our collection. From rustic wooden wall art to stunning
            metal sculptures, every item we offer is made with the highest
            quality materials and designed to add warmth and personality to your
            home.
          </p>
        </div>
      </div>
      <p className="about-text-bottom">
        At <strong>LILAANHANDICRAFT</strong> , we are passionate about helping our customers
        turn their houses into homes. Our products make great additions to any
        room and our friendly team is always here to help answer any questions
        you may have. Thank you for considering us for your home decor needs. We
        can't wait to help you find the perfect piece to complete your space.
      </p>

      <h1>Return Policy </h1>
      <p className="about-text-bottom">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        voluptatum aspernatur corporis ipsa explicabo pariatur. Eos autem sed
        rerum, architecto ducimus facere maiores earum quaerat officia
        exercitationem, perspiciatis quas illo. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Doloremque voluptatum aspernatur corporis
        ipsa explicabo pariatur. Eos autem sed rerum, architecto ducimus facere
        maiores earum quaerat officia exercitationem, perspiciatis quas illo.
      </p>
    </div>
  );
};

export default About;
