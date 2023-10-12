import React, { useRef } from "react";
import one from "../../images/home-section-1.svg";
import two from "../../images/home-section-2.svg";
import three from "../../images/home-section-3.svg";

const HomeSectionStaticComp = () => {
  const answer = useRef();
  const plus = useRef();
  const minus = useRef();

  const handleCollapse = () => {
    answer.current.classList.toggle("d-none");
    plus.current.classList.toggle("d-none");
    minus.current.classList.toggle("d-none");
  };

  return (
    <div className="mt-4 mb-2">
      <h2 className="fw-bold"> زاود، وكن الفائز </h2>
      <span className="text-black-50">خطوات سهلة للتأهل للمشاركة</span>

      <div className="center flex-wrap">
        <div style={{ width: "300px" }} className="box p-2 ">
          <img className="w-100" src={one} alt="" />
          <h2 className="fw-bold text-center my-1"> 1 </h2>
          <h5 className="text-center"> التسجيل فى المنصة </h5>
        </div>
        <div style={{ width: "300px" }} className="box p-2 ">
          <img className="w-100" src={three} alt="" />
          <h2 className="fw-bold text-center my-1"> 2 </h2>
          <h5 className="text-center"> المزايدة والفوز </h5>
        </div>
        <div style={{ width: "300px" }} className="box p-2 ">
          <img className="w-100" src={two} alt="" />
          <h2 className="fw-bold text-center my-1"> 3 </h2>
          <h5 className="text-center"> شحن مبلغ المزايدة </h5>
        </div>
      </div>

      {/* section asks */}
      <div className="d-flex flex-wrap mt-5 mb-5 gap-3">
        <div
          className="section-title d-flex flex-column"
          style={{ flex: "1", minWidth: "300px" }}
        >
          <span className="fs-5 fw-bold">الأسئلة الشائعة</span>
          <span className="text-black-50">
            تصفح قسم الأسئلة الشائعة للإجابات على أسئلتك الشائعة.
          </span>
        </div>
        <div className="asks" style={{ flex: "2", minWidth: "300px" }}>
          <div className="ask border rounded p-2">
            <div
              style={{ cursor: "pointer" }}
              className="d-flex between border-bottom p-2 mb-2"
              onClick={handleCollapse}
            >
              <span> لماذا يتم البيع بالمزاد ؟ </span>
              <span ref={plus} className="btn main-btn fw-bold">
                {" "}
                +{" "}
              </span>
              <span ref={minus} className="btn main-btn fw-bold d-none">
                {" "}
                -{" "}
              </span>
            </div>
            <div className="answer d-none" ref={answer}>
              <span className="fw-bold">
                تعد المزادات من أفضل وسائل البيع لعدة أسباب منها
              </span>
              : تحقق المزادات مبدأ العدالة من خلال تمكين المتنافسين من المشاركة
              في المزاد دون تمييز . تسهم المزادات في توفير الجهد والوقت على
              البائع و المشتري حيث تتم المزايدة خلال وقت محدد للوصول لسعر البيع
              الأعلى.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionStaticComp;
