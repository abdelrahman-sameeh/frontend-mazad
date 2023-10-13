import React from "react";
import LoadingOnPage from "../utils/LoadingOnPage";
import { Col, Row } from "react-bootstrap";
import ProductComp from "../Product/ProductComp";
import GetLoggedUserSales from "../../customHooks/sales/GetLoggedUserSales";
import PaginationComponent from "../utils/PaginationComponent";

const MySalesContainer = () => {
  const [loading, isPress, products, handleChangePagination] =
    GetLoggedUserSales();
  const pagination = localStorage.salesPagePagination
    ? JSON.parse(localStorage.salesPagePagination)
    : null;
  return (
    <div>
      <div className="container">
        {loading && isPress ? <LoadingOnPage /> : null}
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
            لا يوجد مشتريات حتى الان{" "}
          </h2>
        )}
        {pagination && pagination.numberOfPages > 1 ? (
          <PaginationComponent
            onPress={handleChangePagination}
            pageCount={pagination.numberOfPages}
          />
        ) : null}
      </div>
    </div>
  );
};

export default MySalesContainer;
