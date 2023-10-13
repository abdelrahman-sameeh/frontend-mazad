import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import image from "../../images/pc.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import favOn from "../../images/fav-on.png";
import favOff from "../../images/fav-off.png";
import ProductDetailsHook from "../../customHooks/product/ProductDetailsHook";
import { Link } from "react-router-dom";
import GetLoggedUser from "../../customHooks/auth/GetLoggedUser";
import AddToFavoritesHook from "../../customHooks/favorite/AddToFavoritesHook";
import DeleteFromFavoritesHook from "../../customHooks/favorite/DeleteFromFavoritesHook";
import LoadingOnPage from "../utils/LoadingOnPage";
import LoadingInComp from "../utils/LoadingInComp";

const ProductDetailsContainer = () => {
  const [user] = GetLoggedUser();

  const [loading, isPress, product, mazadDays, canParticipate] =
    ProductDetailsHook();

  const [addToFavLoading, addToFavIsPress, addToFavorite] =
    AddToFavoritesHook();
  const [deleteFromFavLoading, deleteFromFavIsPress, deleteFromFavorite] =
    DeleteFromFavoritesHook();

  return (
    <div>
      {loading && isPress ? <LoadingOnPage /> : null}
      <div className="container mt-3">
        <Row className="gap-2 product-details-grid">
          {/* start product details */}
          <Col className="position-relative" sm="12" md="7" lg="7">
            {(addToFavLoading && addToFavIsPress) ||
            (deleteFromFavLoading && deleteFromFavIsPress) ? (
              <LoadingInComp />
            ) : null}
            <div className="rounded p-2 bg-light">
              <img
                src={product.image}
                className="w-100 rounded"
                style={{ height: "200px", objectFit: "cover" }}
                alt=""
              />
              <div className="d-flex between px-3">
                <div className="title mt-2 fw-bold fs-5 text-center">
                  {" "}
                  {product.title}{" "}
                </div>

                {user && user.role === "user" && (
                  <>
                    {user.favorites && user.favorites.includes(product._id) ? (
                      <div
                        onClick={deleteFromFavorite}
                        className="favOn pointer"
                      >
                        <img style={{ width: "31px" }} src={favOn} alt="" />
                      </div>
                    ) : (
                      <div onClick={addToFavorite} className="favOff pointer">
                        <img style={{ width: "31px" }} src={favOff} alt="" />
                      </div>
                    )}
                  </>
                )}
              </div>

              <div className="point start-price">
                <span className="fw-bold"> يبدأ مبلغ الدخول من </span>
                {product.firstPrice} L.E.
              </div>

              <div className="point start-time">
                <span className="fw-bold"> يبدأ فى </span>
                {product.startTime && product.startTime.split("T")[0]}
              </div>
              <div className="point end-time">
                <span className="fw-bold"> ينتهى فى </span>
                {product.endTime && product.endTime.split("T")[0]}
              </div>
              <div className="point end-time">
                <span className="fw-bold"> ايام المزاد </span>
                {mazadDays}
              </div>

              <div className="description my-2">{product.description}</div>
            </div>
          </Col>
          {/* start contact */}
          <Col sm="12" md="4" lg="4">
            <div className="contact p-2 bg-light rounded">
              {/* trader name */}
              <div className="">
                <span className="fw-bold">اسم التاجر -</span>
                <span> {product && product.user && product.user.name} </span>
              </div>
              <div className="phone d-flex start align-items-center gap-2">
                {" "}
                <FontAwesomeIcon
                  className="p-2 rounded-full fs-4"
                  style={{
                    backgroundColor: "var(--main-color)",
                    color: "white",
                  }}
                  icon={faWhatsapp}
                />
                <span className="fw-bold"> {product.phoneNumber} </span>
              </div>
              {canParticipate ? (
                <Link
                  to={"/productChat/121212"}
                  className="btn main-btn fw-bold mt-2 w-100 text-center"
                >
                  {" "}
                  مزايدة{" "}
                </Link>
              ) : null}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductDetailsContainer;
