import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuhtProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const AddToys = () => {
  const { user } = useContext(AuthContext);
 useTitle("Add Toys")
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);

  };

  
  const addToy = (event) => {
    
    event.preventDefault();
    const form = event.target;
    const sellerName = user?.displayName;
    const sellerEmail = user.email;
    const photo = form.photo.value;
    const toyName = form.toyName.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const data = {
      sellerName,
      sellerEmail,
      photo,
      toyName,
      price,
      rating,
      quantity,
      description,
      selectedCategory
    };
    // console.log(data)
    fetch("https://the-toy-box-server.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire("Congratulation!", "Toy added successfully.", "success");
          form.reset();
        }
      });
  };

  return (
    <div>
      <div className=" w-3/4 my-5  m-auto">
        <form onSubmit={addToy}>
          <h1 className=" text-center text-2xl font-bold">Add your toys</h1>
          <div className="rounded-lg shadow-2xl bg-base-100 p-5 grid grid-cols-6 gap-2">
            <div className=" form-control col-span-3">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                placeholder={user?.displayName}
                className="input input-bordered"
                name="sellerName"
                disabled
              />
            </div>

            <div className="form-control col-span-3 ">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                type="email"
                placeholder={user?.email}
                className="input input-bordered"
                name="email"
                disabled
              />
            </div>
            <div className="form-control col-span-3">
              <label className="label">
                <span className="label-text">Toy name</span>
              </label>
              <input
                type="text"
                placeholder="Toy Name"
                className="input input-bordered"
                required
                name="toyName"
              />
            </div>
            <div className="form-control col-span-3">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="Photo Url"
                className="input input-bordered"
                name="photo"
              />
            </div>
            <div className="form-control col-span-2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="price"
                className="input input-bordered"
                required
                name="price"
              />
            </div>
            <div className="form-control col-span-2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                placeholder="Rating"
                className="input input-bordered"
                required
                name="rating"
              />
            </div>
            <div className="form-control col-span-2">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Quantity"
                className="input input-bordered"
                required
                name="quantity"
              />
            </div>
            <div className="form-control col-span-6">
              <label className="label">
                <span className="label-text">Select Category</span>
              </label>
              <select className="select select-bordered w-full " value={selectedCategory} onChange={handleCategoryChange}>
                <option>-- Select --</option>
                <option>Sports car</option>
                <option>Truck</option>
                <option>Regular car</option>
                <option>Mini fire truck</option>
                <option>Mini police car</option>
              </select>
            </div>

            <div className="form-control col-span-6">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Description"
                name="description"
                required
              ></textarea>
            </div>

            <div className=" col-span-6">
              
              <div className="form-control mt-6">
                <button
                  className="btn btn-primary"
                  
                  type="submit"
                >
                  Add Toy
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToys;
