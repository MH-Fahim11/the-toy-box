import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FidgetSpinner } from "react-loader-spinner";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuhtProvider";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  let [loading, setLoading] = useState(true);

  useTitle("All Toys");

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  function handleSearchInputChange(event) {
    setSearchQuery(event.target.value);
  }
  function performSearch() {
    const filteredResults = toys.filter((toy) =>
      toy.toyName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  }

  const url = `https://the-toy-box-server.vercel.app/toys`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setSearchResults(data);
        setLoading(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleClick = () => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have to log in first to view details!",
      });
    }
  };

  if (loading) {
    return (
      <div className=" flex justify-center">
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
    <div className=" py-5 bg-slate-500">
      <h1 className=" text-center text-2xl font-bold my-5">All toys</h1>
      <div className=" px-10 text-center py-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  placeholder="Search..."
                  className=" p-2 rounded"
                />
                <button className=" p-2 bg-amber-400 mx-1 rounded font-bold" onClick={() => performSearch()}>Search</button>
              </div>
      <div className="overflow-x-auto">
        <table className="table w-full z-0">
          {/* head */}
          <thead>
            <tr>
              <th>Seller Name</th>
              <th> Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Rating</th>
              <th>Details</th>
              
            </tr>
          </thead>
          <tbody>
            {searchResults?.map((toy) => (
              <tr key={toy._id}>
                <td>{toy?.sellerName}</td>
                <td>{toy.toyName}</td>
                <td>{toy.selectedCategory}</td>
                <td>{toy.price}</td>
                <td>{toy.quantity}</td>
                <td>{toy.rating}</td>
                <td>
                  <Link
                    to={`/viewDetails/${toy._id}`}
                    className="link text-blue-600"
                    onClick={handleClick}
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div>
        <ul>
          {searchResults.map((item) => (
            <li key={item._id}>{item.toyName}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default AllToys;
