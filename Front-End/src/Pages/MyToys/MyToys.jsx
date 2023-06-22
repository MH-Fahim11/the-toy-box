import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuhtProvider";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FidgetSpinner } from "react-loader-spinner";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  useTitle("My Toys")
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  let [loading, setLoading] = useState(true);
  let [key,setKey] = useState(0)
  const url = `https://the-toy-box-server.vercel.app/toys?email=${user?.email}&key=${key}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  const sorting =(key) =>{
    setKey(key)
  }
  const handeldelete = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`https://the-toy-box-server.vercel.app/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your toy has been deleted.',
                'success'
              )

              const remaining = toys.filter((toy) => toy._id !== id);
              setToys(remaining);
            }
          });
      }
    });

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
    <div className=" my-4">
      <h1 className=" text-center text-2xl font-bold my-5">My toys</h1>
      <div className="overflow-x-auto">
        <table className="table w-full z-0">
          {/* head */}
          <thead>
            <tr>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Rating</th>
              <th>Details</th>
              <th><button className="mx-2 bg-green-500 p-1 text-white rounded " onClick={()=>sorting(1)}>Ascending</button> 
              <button className=" bg-red-500 p-1 text-white rounded " onClick={()=>sorting(-1)}>Descending</button> </th>
            </tr>
          </thead>
          <tbody>
            {toys?.map((toy) => (
              <tr key={toy._id}>
                <td>{toy.toyName}</td>
                <td>{toy.selectedCategory}</td>
                <td>{toy.price}</td>
                <td>{toy.quantity}</td>
                <td>{toy.rating}</td>
                <td>
                  <Link
                    to={`/viewDetails/${toy._id}`}
                    className="link text-blue-600"
                  >
                    View Details
                  </Link>
                </td>
                <td>
                  <Link to={`/update/${toy._id}`}>
                    <button className="mx-2 text-lg bg-green-600 p-1 rounded-lg text-white">
                      <BiEdit></BiEdit>
                    </button>
                  </Link>
                  <button
                    className="text-lg bg-red-600 p-1 rounded-lg text-white"
                    onClick={() => handeldelete(toy._id)}
                  >
                    <MdOutlineDeleteForever></MdOutlineDeleteForever>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
