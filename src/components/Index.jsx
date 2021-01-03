import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import productService from "../services/ProductsService";
import Stars from "../components/Stars";

const Index = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService
      .getProduct()
      .then((res) => {
        setProducts(res.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="container-fluid pt-5 bg-light">
        <div className="row bg-white p-5 mx-5 pb-2">
          <div className="col-md-12">
            <h1 className="text-center">Seller</h1>
          </div>
          <div className="col-md-12">
            <ul
              className="d-flex justify-content-center p-0 m-0"
              style={{ listStyle: "none" }}
            >
              <li className="">
                <a class="nav-link active" aria-current="page" href="#">
                  T-Shirts
                </a>
              </li>
              <li className="">
                <a class="nav-link active" aria-current="page" href="#">
                  Hoodies
                </a>
              </li>
              <li className="">
                <a class="nav-link active" aria-current="page" href="#">
                  Trousers
                </a>
              </li>
              <li className="">
                <a class="nav-link active" aria-current="page" href="#">
                  Albums
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-3 bg-white p-4 mx-5 mb-5">
          {products.map((item, index) => {
            return (
              <div className="col-md-3 ">
                <div
                  class="card d-flex flex-column justify-content-center border-0"
                  style={{ width: "18rem" }}
                >
                  <img
                    src={item.imageUrl}
                    class="card-img-top"
                    alt="Image Error"
                    height="180px"
                  />
                  <div class="card-body d-flex flex-column justify-content-center">
                    <h5 class="card-title text-center">
                      <b className="text-info">{item.name}</b>
                    </h5>
                    <section class="rating-widget mt-2">
                      <div class="rating-stars text-center">
                        <ul id="stars">
                          <li class="star" title="Poor" data-value="1">
                            <i class="fa fa-star fa-fw"></i>
                          </li>
                          <li class="star" title="Fair" data-value="2">
                            <i class="fa fa-star fa-fw"></i>
                          </li>
                          <li class="star" title="Good" data-value="3">
                            <i class="fa fa-star fa-fw"></i>
                          </li>
                          <li class="star" title="Excellent" data-value="4">
                            <i class="fa fa-star fa-fw"></i>
                          </li>
                          <li class="star" title="WOW!!!" data-value="5">
                            <i class="fa fa-star fa-fw"></i>
                          </li>
                        </ul>
                      </div>

                      <div class="success-box d-flex">
                        <div class="clearfix"></div>
                        <img
                          alt="tick image"
                          width="24"
                          src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
                        />
                        <div class="text-message"></div>
                        <div class="clearfix"></div>
                      </div>
                    </section>
                    <p class="card-text text-center">{item.details}</p>
                    <p class="card-text text-center">
                      <b>${item.price}</b>
                    </p>
                    <a href="#" class="btn btn-default text-white bg-dark">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
      <Stars />
    </>
  );
};

export default Index;
