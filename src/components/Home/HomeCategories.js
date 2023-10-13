import React from "react";
import { Link } from "react-router-dom";
import HomeCategoryHook from "../../customHooks/home/HomeCategoryHook";
import LoadingInComp from "../utils/LoadingInComp";

const HomeCategories = () => {
  const [loading, isPress, categories] = HomeCategoryHook();

  return (
    <div className="mt-3 position-relative">
      {loading && isPress ? <LoadingInComp /> : null}
      <h3 className="fw-bold"> التصنيفات </h3>
      <div
        style={{ overflow: "auto" }}
        className="d-flex rounded gap-2 align-items-center pb-2"
      >
        {categories && categories.length
          ? categories.map((category) => (
              <Link
                key={category._id}
                to={`/category/${category._id}`}
                className="category pointer d-flex gap-1 align-items-center bg-light px-2 py-1 rounded"
              >
                <div className="title">{category.title}</div>
                <img
                  style={{ width: "30px", height: "30px", objectFit: "cover" }}
                  className="rounded"
                  src={category.image}
                  alt=""
                />
              </Link>
            ))
          : null}
        {categories.length === 6 && (
          <Link
            to={`/categories`}
            className="category pointer d-flex gap-1 align-items-center bg-light px-2 py-1 rounded"
          >
            المزيد
          </Link>
        )}
      </div>
    </div>
  );
};

export default HomeCategories;
