import heroImg from "../src/assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            eveniet ab nulla, consequatur eaque voluptate reprehenderit aut
            impedit sit error consequuntur possimus quaerat aliquam. Tenetur
            dolorem reprehenderit non voluptas et. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Iure laudantium, quae qui iste sequi
            aperiam magni repellat quidem esse eaque.
          </p>
        </div>
        <div className="img-container">
          <img className="img" src={heroImg} alt="hero img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
