import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import ProductComp from "../Product/ProductComp";
import HomeProductsHook from "../../customHooks/home/HomeProductsHook";
import LoadingInComp from "../utils/LoadingInComp";

const HomeProductsComp = () => {
  const [loading, isPress, products] = HomeProductsHook();
  
  return (
    <div className="my-3 position-relative container">
      {loading && isPress ? <LoadingInComp /> : null}
      {products && products.length ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            800: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {products.length > 0 &&
            products.map((product) => {
              return (
                <SwiperSlide key={product._id}>
                  <ProductComp product={product} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      ) : null}
    </div>
  );
};

export default HomeProductsComp;
