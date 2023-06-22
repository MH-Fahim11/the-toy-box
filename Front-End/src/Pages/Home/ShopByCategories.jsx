import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FidgetSpinner } from "react-loader-spinner";

import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
import "./Tabs.css"

const ShopByCategories = () => {
  const [toys, setToys] = useState([]);
  let [loading, setLoading] = useState(true);
  const url = `https://the-toy-box-server.vercel.app/toys`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (loading) {
    return (
      <div className=" md:flex justify-center">
        <FidgetSpinner
          visible={true}
          height="300"
          width="250"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          ballColors={["#ff0000", "#00ff00", "#0000ff"]}
          backgroundColor="#031c36"
        />
      </div>
    );
  }

  return (
    <div className=" py-10 px-10 bg-emerald-300 text-center">
      <h1 className=" font-bold text-2xl">Shop By Categories</h1>
      <Tabs >
        <TabList>
          <Tab>Sports car</Tab>
          <Tab>Truck</Tab>
          <Tab>Regular car</Tab>
          <Tab>Mini fire truck</Tab>
          <Tab>Mini police car</Tab>
        </TabList>

        <TabPanel>
          <div className=" md:md:flex">
            {toys
              .filter((toy) => toy.selectedCategory === "Sports car")
              ?.map((ftoy) => (
                <div
                  key={ftoy._id}
                  className="my-2 md:my-0 card card-compact md:w-60 mx-5 glass shadow-xl"
                >
                  <figure>
                    <img className="h-40" src={ftoy.photo} alt="Toy image" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{ftoy.toyName}</h2>
                    <Link
                      className="btn btn-primary"
                      to={`/viewDetails/${ftoy._id}`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" md:md:flex">
            {toys
              .filter((toy) => toy.selectedCategory === "Truck")
              ?.map((ftoy) => (
                <div
                  key={ftoy._id}
                  className="my-2 md:my-0 card card-compact md:w-60 mx-5 bg-slate-200 shadow-xl"
                >
                  <figure>
                    <img className="h-40" src={ftoy.photo} alt="Toy image" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{ftoy.toyName}</h2>
                    <Link
                      className="btn btn-primary"
                      to={`/viewDetails/${ftoy._id}`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" md:md:flex">
            {toys
              .filter((toy) => toy.selectedCategory === "Regular car")
              ?.map((ftoy) => (
                <div
                  key={ftoy._id}
                  className="my-2 md:my-0 card card-compact md:w-60 mx-5 bg-slate-200 shadow-xl"
                >
                  <figure>
                    <img className="h-40" src={ftoy.photo} alt="Toy image" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{ftoy.toyName}</h2>
                    <Link
                      className="btn btn-primary"
                      to={`/viewDetails/${ftoy._id}`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" md:md:flex">
            {toys
              .filter((toy) => toy.selectedCategory === "Mini fire truck")
              ?.map((ftoy) => (
                <div
                  key={ftoy._id}
                  className="my-2 md:my-0 card card-compact md:w-60 mx-5 bg-slate-200 shadow-xl"
                >
                  <figure>
                    <img className="h-40" src={ftoy.photo} alt="Toy image" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{ftoy.toyName}</h2>
                    <Link
                      className="btn btn-primary"
                      to={`/viewDetails/${ftoy._id}`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" md:flex">
            {toys
              .filter((toy) => toy.selectedCategory === "Mini police car")
              ?.map((ftoy) => (
                <div
                  key={ftoy._id}
                  className="my-2 md:my-0 card card-compact md:w-60 mx-5 bg-slate-200 shadow-xl"
                >
                  <figure>
                    <img className="h-40" src={ftoy.photo} alt="Toy image" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{ftoy.toyName}</h2>
                    <Link
                      className="btn btn-primary"
                      to={`/viewDetails/${ftoy._id}`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>

      </Tabs>
    </div>
  );
};

export default ShopByCategories;
