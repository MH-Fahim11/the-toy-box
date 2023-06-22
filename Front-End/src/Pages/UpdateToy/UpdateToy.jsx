import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const UpdateToy = () => {
  const loadToy = useLoaderData();
  useTitle("Update Toys")
  const [selectedCategory, setSelectedCategory] = useState("");

  const {
    sellerName,
    sellerEmail,
    photo,
    toyName,
    price,
    rating,
    quantity,
    description,
  } = loadToy;
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    // const sellerName = form.sellerName.value;
    // const sellerEmail = user.email;
    const photo = form.photo.value;
    const toyName = form.toyName.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const data = {
      photo,
      toyName,
      price,
      rating,
      quantity,
      description,
      selectedCategory,
    };
    fetch(`https://the-toy-box-server.vercel.app/toys/${loadToy._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire(
            'Updated!',
            'Your toy has been Updated.',
            'success'
          )
          // setRedirect(true)
          // redirect("/")
          // form.reset();
        }
      });
  };

  return (
    <div>
      <div className=" w-3/4 my-5  m-auto">
        <form onSubmit={handleUpdate}>
          <h1 className=" text-center text-2xl font-bold">Update your toy</h1>
          <div className="rounded-lg shadow-2xl bg-base-100 p-5 grid grid-cols-6 gap-2">
            <div className=" form-control col-span-3">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                required
                name="sellerName"
                defaultValue={sellerName}
                disabled
              />
            </div>

            <div className="form-control col-span-3 ">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered"
                name="email"
                defaultValue={sellerEmail}
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
                defaultValue={toyName}
                disabled
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
                defaultValue={photo}
                disabled
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
                defaultValue={price}
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
                defaultValue={rating}
                disabled
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
                defaultValue={quantity}
              />
            </div>
            <div className="form-control col-span-6" >
              <label className="label">
                <span className="label-text">Select Category</span>
              </label>
              <select
                className="select select-bordered w-full "
                defaultValue={loadToy.selectedCategory}
                onChange={handleCategoryChange}
                disabled
              >
                <option>-- Select --</option>
                <option>Sports car</option>
                <option>Truck</option>
                <option>Regular car</option>
                <option>Mini fire truck</option>
                <option>mini police car</option>
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
                defaultValue={description}
              ></textarea>
            </div>

            <div className=" col-span-6">
              <div className="form-control"></div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="put">
                  Update Toy
                </button>
                
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToy;
