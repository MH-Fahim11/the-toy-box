import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import useTitle from "../../../hooks/useTitle";

const ViewDetails = () => {
  useTitle("View Details")
  const loadToy = useLoaderData();

  const { sellerEmail, photo, toyName, price, rating, quantity, description } =
    loadToy;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-4xl font-bold">{toyName}</h1>
            <div className="flex mt-1">
              <Rating
                style={{ maxWidth: 120 }}
                value={Math.round(rating || 0)}
                readOnly
              />
              <span className="ms-2 mt-1"> ({rating} Stars)</span>
            </div>
            <div className="py-3">
              <div className=" flex">
                <p>
                  <span className=" font-semibold text-lg">Price:</span> $
                  {price}
                </p>
                <p className=" px-5">
                  <span className=" font-semibold text-lg">Available:</span>{" "}
                  {quantity}
                </p>
              </div>
             <div className=" flex">
             <p>
                <span className=" font-semibold text-lg">Seller</span>{" "}
                {loadToy?.sellerName}
              </p>
              <p className=" px-5">
                <span className=" font-semibold text-lg">Email</span>{" "}
                {sellerEmail}
              </p>
              </div> 
             <p>
                <span className=" font-semibold text-lg">Description:</span>{" "}
                {description}
              </p>
            </div>
            <button className="btn btn-primary">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
