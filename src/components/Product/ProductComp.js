import { Link } from "react-router-dom";
import waitWatch from "../../images/wait-watch.png";
import HandleChangeProductTimeHook from "../../customHooks/product/HandleChangeProductTimeHook";
import favOn from "../../images/fav-on.png";
import favOff from "../../images/fav-off.png";
import DeleteFromFavoritesHook from "../../customHooks/favorite/DeleteFromFavoritesHook";
import AddToFavoritesHook from "../../customHooks/favorite/AddToFavoritesHook";
import InitialSocket from "../../customHooks/sockets/InitialSocket";

const ProductComp = ({ product }) => {
  const role = localStorage.user ? JSON.parse(localStorage.user).role : null;

  const [
    days,
    hours,
    minutes,
    seconds,
    productStatusValue,
    canParticipate,
    user,
  ] = HandleChangeProductTimeHook(product);

  const [addToFavLoading, addToFavIsPress, addToFavorite] =
    AddToFavoritesHook();
  const [deleteFromFavLoading, deleteFromFavIsPress, deleteFromFavorite] =
    DeleteFromFavoritesHook();

  const [handleGoToMazadChat] = InitialSocket();

  return (
    <div className="bg-light rounded p-2 d-flex flex-column justify-content-between h-100">
      {/* image */}
      <div className="image h-50">
        <img
          src={product.image}
          alt=""
          className="rounded-top w-100 h-100"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="center mt-2 fw-bold">
        {" "}
        {productStatusValue}
        <img className="" style={{ width: "20px" }} src={waitWatch} alt="" />
      </div>
      {productStatusValue && productStatusValue !== "انتهى" && (
        <div className="time d-flex justify-content-around">
          <div className="center flex-column border-start ps-2">
            <span className="seconds"> {seconds} </span>
            <span className="text-black-50"> ثانية </span>
          </div>
          <div className="center flex-column border-start ps-2">
            <span className="minutes"> {minutes} </span>
            <span className="text-black-50"> دقيقة </span>
          </div>
          <div className="center flex-column border-start ps-2">
            <span className="hours"> {hours} </span>
            <span className="text-black-50"> ساعة </span>
          </div>
          <div className="center flex-column">
            <span className="days"> {days} </span>
            <span className="text-black-50"> يوم </span>
          </div>
        </div>
      )}
      <div className="d-flex between px-3">
        <div className="title mt-2 fw-bold fs-5 text-center">
          {" "}
          {product.title}{" "}
        </div>

        {user && user.role === "user" && (
          <>
            {user.favorites && user.favorites.includes(product._id) ? (
              <div onClick={deleteFromFavorite} className="favOn pointer">
                <img
                  data-id={product._id}
                  style={{ width: "31px" }}
                  src={favOn}
                  alt=""
                />
              </div>
            ) : (
              <div onClick={addToFavorite} className="favOff pointer">
                <img
                  data-id={product._id}
                  style={{ width: "31px" }}
                  src={favOff}
                  alt=""
                />
              </div>
            )}
          </>
        )}
      </div>
      <div className="d-flex gap-1 center">
        {role === "user" &&
        (canParticipate || productStatusValue === "انتهى") ? (
          <Link
            to={`/mazad/${product.chatId}`}
            onClick={() => {
              handleGoToMazadChat(product.chatId);
            }}
            className="btn main-btn fw-bold"
          >
            {productStatusValue === "انتهى" ? "عرض النتيجة" : "مزايدة"}
          </Link>
        ) : null}

        <Link
          to={`/productDetails/${product._id}`}
          className="btn main-btn fw-bold"
        >
          {" "}
          التفاصيل{" "}
        </Link>
      </div>
    </div>
  );
};

export default ProductComp;
