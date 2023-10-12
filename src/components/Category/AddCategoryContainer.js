import React from "react";
import SubTitle from "../utils/SubTitle";
import AddCategoryHook from "../../customHooks/category/AddCategoryHook";

const AddCategoryContainer = () => {
  const [
    loading,
    isPress,
    image,
    title,
    selectedImage,
    handleChangeImage,
    handleChangeTitle,
    handleClearSelected,
    handleSubmit,
  ] = AddCategoryHook();

  return (
    <div>
      <div className="container pt-3">
        <SubTitle pageName={"اضافة تصنيف جديد"} />
        <form className="mt-3 p-3 rounded bg-light">
          <div className="d-flex align-items-center gap-2">
            <label
              className="fw-bold d-flex align-items-center gap-2"
              htmlFor="image"
            >
              <span>اضف صورة التصنيف</span>
              <img
                src={image}
                style={{ width: "60px", height: "60px", objectFit: "cover" }}
              />
            </label>
            <input
              onChange={handleChangeImage}
              type="file"
              className="d-none"
              id="image"
            />
            {selectedImage && (
              <span
                onClick={handleClearSelected}
                className="px-2 text-light rounded-full bg-danger pointer"
              >
                {" "}
                X{" "}
              </span>
            )}
          </div>

          <div className="mt-2">
            <label className="fw-bold" htmlFor="category-title">
              اسم التصنيف
            </label>
            <input
              value={title}
              onChange={handleChangeTitle}
              type="text"
              className="form-control mt-1"
              id="category-title"
              placeholder="اسم التصنيف"
            />
          </div>

          <button onClick={handleSubmit} className="btn main-btn mt-2">
            {" "}
            اضافة{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryContainer;
