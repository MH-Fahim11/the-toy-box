

const Header = () => {
  
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.ibb.co/YQ17GbF/banner.webp")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md" data-aos=" fade-up" data-aos-duration="1000">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
