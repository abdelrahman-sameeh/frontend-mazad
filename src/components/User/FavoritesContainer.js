import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductComp from "../Product/ProductComp";
import ShowFavoritesHook from "../../customHooks/favorite/ShowFavoritesHook";
import LoadingOnPage from "../utils/LoadingOnPage";

const FavoritesContainer = () => {
  const [loading, isPress, products] = ShowFavoritesHook();

  return (
    <div>
      <div className="container">
        {loading && isPress ? <LoadingOnPage /> :null}
        {products && products.length ? (
          <Row className="row-product-page">
            {products && products.length
              ? products.map((product) => {
                  return (
                    <Col
                      style={{ height: "450px", marginTop: "20px" }}
                      key={product._id}
                      sm="12"
                      md="6"
                      lg="4"
                    >
                      <ProductComp product={product} />
                    </Col>
                  );
                })
              : null}
          </Row>
        ) : (
          <h2 className="text-center fw-bold mt-4">
            {" "}
            لا يوجد مزادات فى المفضلة{" "}
          </h2>
        )}
      </div>
    </div>
  );
};

export default FavoritesContainer;
