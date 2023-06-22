import { BiDollarCircle } from "react-icons/bi";
const MostPopular = () => {
  return (
    <div className=" py-10 text-center font-serif bg-cyan-900 text-white">
      <h1 className="  font-bold  text-2xl">Most Popular Toys</h1>
      <p className=" text-gray-400">
        Here is some of our best selling and most wanted toys.
      </p>
      <div className=" py-2 md:py-0 md:px-5 text-left pt-6 grid gap-2 md:grid-cols-3">
        <div className="card card-compact mx-2 md:mx-0 md:w-96 glass shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1511415518647-9e5da4fd803f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="American muscle"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">American Muscle GT-20</h2>
            <p>American muscle cars have always been my passion. Recently I have found a hobby that gets along well with my passion - diecast collecting</p>
            <div className="card-actions justify-end">
            <p className=" pt-3 text-base"><BiDollarCircle className=" inline-block text-lg mb-1 mr-1"></BiDollarCircle>Price: 100$</p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact mx-2 md:mx-0  md:w-96 glass shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1516055000302-a11419b8179f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="1958 Corvette"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">1958 Corvette</h2>
            <p>My older brother is a huge fan of automobiles so he collects miniature cars. This particullar 1958 Corvette is one of his favourites and I wanted to give him a gift so I made a model-car session with the big ones like this and a couple more</p>
            <div className="card-actions justify-end">
            <p className=" pt-3 text-base"><BiDollarCircle className=" inline-block text-lg mb-1 mr-1"></BiDollarCircle>Price: 100$</p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact mx-2 md:mx-0 md:w-96 glass shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1634008548286-3e190703a224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Yamahar 150"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Yamahar 150</h2>
            <p>Yamahar 150 have always been my passion. Recently I have found a hobby that gets along well with my passion - diecast collecting</p>
            <div className="card-actions justify-end">
            <p className=" pt-3 text-base"><BiDollarCircle className=" inline-block text-lg mb-1 mr-1"></BiDollarCircle>Price: 100$</p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
