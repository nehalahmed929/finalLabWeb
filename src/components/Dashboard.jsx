import React, { useState } from "react";

import Footer from "./Footer";
import productService from "../services/ProductsService";
const Dashboard = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [details, setDetails] = useState("");

  return (
    <>
      <div className="bg-dark py-2">
        <h2 className="text-white">Easy Shop</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 bg-dark border-top px-0 pt-4">
            <div className="bg-secondary py-2 px-2">
              <h5 className="text-white ">Products</h5>
            </div>
          </div>
          <div className="col-md-6 mt-5 ms-4 pb-4">
            <form
              encType="multipart/form-data"
              onSubmit={(e) => {
                e.preventDefault();
                productService
                  .addProduct({ name, price, category, image, details })
                  .then(() => {
                    props.history.push("/");
                    console.log("success adding product");
                  })
                  .catch(() => {
                    console.log("failed");
                  });
              }}
            >
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={name}
                  name="name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Price
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="price"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Details
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="price"
                  value={details}
                  onChange={(e) => {
                    setDetails(e.target.value);
                  }}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Category
                </label>

                <select
                  class="form-select"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  value={category}
                  name="category"
                  aria-label="Default select example"
                >
                  <option value="select category">Select Category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Smartphones">Smartphones</option>
                  <option value="Headphones">Headphones</option>
                </select>
              </div>
              <div class="mb-3">
                <input
                  type="file"
                  name="image"
                  style={{ display: "none" }}
                  class="form-control"
                  id="imageInput"
                  onChange={(e) => {
                    e.preventDefault();
                    setImage(e.target.files[0]);
                  }}
                />
              </div>
              <button type="submit" class="btn btn-success">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-2 mt-5 me-4 ms-5 d-flex flex-column">
            <div
              className={`border text-center align-middle d=flex justify-content-center align-items-center`}
              style={{ width: "250px", height: "250px" }}
            >
              <img
                src={image ? URL.createObjectURL(image) : ""}
                alt="No Image"
                height="250px"
                width="250px"
              />
            </div>
            <button
              className="btn btn-success mt-2"
              onClick={() => {
                document.getElementById("imageInput").click();
              }}
            >
              Change Picture
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
