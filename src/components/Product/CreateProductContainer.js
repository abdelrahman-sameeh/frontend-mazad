import React from "react";
import SubTitle from "../../components/utils/SubTitle";
import AddProductHook from "../../customHooks/product/AddProductHook";
import HomeCategoryHook from "../../customHooks/home/HomeCategoryHook";
import { Spinner } from "react-bootstrap";

const CreateProductContainer = () => {
  const [catLoading, catIsPress, categories] = HomeCategoryHook();

  const [
    loading,
    isPress,
    title,
    selectedImage,
    image,
    description,
    category,
    startPrice,
    leastIncreasePrice,
    startTime,
    endTime,
    phoneNumber,
    handleChangeTitle,
    handleChangeSelectedFile,
    handleChangeDescription,
    handleChangeCategory,
    handleChangeStartPrice,
    handleChangeLeastIncreasePrice,
    handleChangeStartTime,
    handleChangeEndTime,
    handleChangePhone,
    handleClearSelected,
    submit,
  ] = AddProductHook();

  return (
    <div>
      <div className="container pt-3">
        <SubTitle pageName={"اضافة منتج جديد"} />
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
              onChange={handleChangeSelectedFile}
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
            <label className="fw-bold" htmlFor="title">
              اسم المنتج
            </label>
            <input
              type="text"
              className="form-control mt-1"
              id="title"
              placeholder="اسم المنتج"
              value={title}
              onChange={handleChangeTitle}
            />
          </div>
          <div className="mt-2">
            <label className="fw-bold" htmlFor="desc">
              وصف المنتج
            </label>
            <textarea
              className="form-control mt-1"
              id="desc"
              cols="10"
              rows="3"
              placeholder="وصف المنتج"
              value={description}
              onChange={handleChangeDescription}
            ></textarea>
          </div>

          <div className="mt-2">
            <label className="fw-bold" htmlFor="category">
              {" "}
              التصنيف{" "}
            </label>
            <select
              value={category}
              onChange={handleChangeCategory}
              className="form-control"
              id="category"
            >
              <option value="0"> من فضلك اختر تصنيف </option>
              {categories && categories.length
                ? categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {" "}
                      {category.title}{" "}
                    </option>
                  ))
                : null}
            </select>
          </div>

          <div className="mt-2">
            <label className="fw-bold" htmlFor="start-price">
              السعر المبدئى
            </label>
            <input
              type="text"
              className="form-control mt-1"
              id="start-price"
              placeholder="السعر المبدئى"
              value={startPrice}
              onChange={handleChangeStartPrice}
            />
          </div>

          <div className="mt-2">
            <label className="fw-bold" htmlFor="least-increase-value">
              اقل قيمة للمزايدة
            </label>
            <input
              type="text"
              className="form-control mt-1"
              id="least-increase-value"
              placeholder="اقل قيمة للمزايدة"
              value={leastIncreasePrice}
              onChange={handleChangeLeastIncreasePrice}
            />
          </div>
          <div className="mt-2">
            <label className="fw-bold" htmlFor="start-date">
              وقت بدأ المزايدة
            </label>
            <input
              type="date"
              className="form-control mt-1"
              id="start-date"
              placeholder="وقت بدأ المزايدة"
              value={startTime}
              onChange={handleChangeStartTime}
            />
          </div>
          <div className="mt-2">
            <label className="fw-bold" htmlFor="endDate">
              وقت انتهاء المزايدة
            </label>
            <input
              type="date"
              className="form-control mt-1"
              id="endDate"
              placeholder="وقت انتهاء المزايدة"
              value={endTime}
              onChange={handleChangeEndTime}
            />
          </div>

          <div className="mt-2">
            <label className="fw-bold" htmlFor="phone">
              رقم التواصل
            </label>
            <input
              type="text"
              className="form-control mt-1"
              id="phone"
              placeholder="رقم التواصل"
              value={phoneNumber}
              onChange={handleChangePhone}
            />
          </div>

          <button
            onClick={submit}
            className="btn main-btn mt-2 d-flex align-items-center gap-2"
          >
            <span>اضافة</span>
            {loading && isPress ? (
              <Spinner variant="light" animation="border" />
            ) : null}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProductContainer;
