import React from "react";
import PaginationComponent from "../utils/PaginationComponent";
import ShowTraderProductsHook from "../../customHooks/trader/ShowTraderProductsHook";
import ProductComp from "../Product/ProductComp";
import { Col, Row } from "react-bootstrap";
import FilterTraderProductsHook from "../../customHooks/trader/FilterTraderProductHook";

const TraderProductsContainer = () => {
  const [loading, isPress, products] = ShowTraderProductsHook();

  const [
    filterLoading,
    filterIsPress,
    handleFilterProducts,
    handleChangePagination,
  ] = FilterTraderProductsHook();

  let pagination = {};
  if (localStorage.productsPagination) {
    pagination = JSON.parse(localStorage.productsPagination);
  }

  return (
    <div>
      <div className="container">
        <div className="d-flex start gap-1 mt-3 border-bottom pb-2">
          <button
            onClick={handleFilterProducts}
            data-filter={"all"}
            className="btn main-btn"
          >
            الكل
          </button>
          <button
            onClick={handleFilterProducts}
            data-filter={"present"}
            className="btn main-btn"
          >
            جارى
          </button>
          <button
            onClick={handleFilterProducts}
            data-filter={"future"}
            className="btn main-btn"
          >
            قادم
          </button>
          <button
            onClick={handleFilterProducts}
            data-filter={"past"}
            className="btn main-btn"
          >
            منتهى
          </button>
        </div>
        {products && products.length ? (
          <>
            <Row className="row-product-page">
              {products && products.length
                ? products.map((product) => {
                    return (
                      <Col
                        style={{ height: "450px" }}
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
          </>
        ) : (
          <h2 className="text-center fw-bold"> لا يوجد عناصر </h2>
        )}
      </div>
      {pagination && pagination.numberOfPages > 1 && (
        <PaginationComponent
          pageCount={pagination.numberOfPages}
          onPress={handleChangePagination}
        />
      )}
    </div>
  );
};

export default TraderProductsContainer;
