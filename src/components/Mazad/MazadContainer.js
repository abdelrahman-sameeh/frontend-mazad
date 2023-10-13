import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import SendMazadMessageSocket from "../../customHooks/sockets/SendMazadMessageSocket";
import GetAllMessagesInSpecificChatHook from "../../customHooks/mazad/GetAllMessagesInSpecificChat";
import GetProductInMazad from "../../customHooks/product/GetProductInMazadHook";
import LoadingInComp from "../utils/LoadingInComp";
import LoadingOnPage from "../utils/LoadingOnPage";
import CompletePayHook from "../../customHooks/mazad/CompletePayHook";
import GetOneOrderHook from "../../customHooks/mazad/GetOneOrderHook";

const MazadContainer = () => {
  const myId = localStorage.user ? JSON.parse(localStorage.user)._id : null;

  const [loading, isPress, messages] = GetAllMessagesInSpecificChatHook();

  const [getSpecificLoading, getSpecificIsPress, product] = GetProductInMazad();

  const [
    mazadValue,
    sendBtn,
    ended,
    isWon,
    handleChangeMazadValue,
    handleSendDataToServer,
  ] = SendMazadMessageSocket(product);

  const [payLoading, payIsPress, handleCompletePay] = CompletePayHook(product);

  const [isPaid] = GetOneOrderHook(product);

  return (
    <div>
      <div className="container">
        {getSpecificLoading && getSpecificIsPress && <LoadingOnPage />}
        <Row className="row-mazad-page mt-3">
          <Col
            className="chat p-2 bg-light rounded position-relative"
            style={{ height: "74vh" }}
            sm="12"
            md="8"
            lg="8"
          >
            <div className="border-bottom py-2 w-100 fs-5 fw-bold text-center">
              {" "}
              زاود واربح ✨{" "}
            </div>

            {/* messages */}
            <div className="messages position-relative">
              {loading && isPress ? <LoadingInComp /> : null}
              {messages && messages.length
                ? messages.map((message) => (
                    <div
                      key={message._id}
                      className={`message ${
                        myId === message.sender._id ? "me" : "other"
                      }`}
                    >
                      <div className="sender"> {message.sender.name} </div>
                      <div className="content"> {message.content} </div>
                    </div>
                  ))
                : null}
            </div>
            {!ended ? (
              <form
                style={{ bottom: "10px", width: "97%" }}
                className="position-absolute d-flex gap-1 "
              >
                <input
                  value={mazadValue}
                  onChange={handleChangeMazadValue}
                  id="mazadValue"
                  type="number"
                  style={{ flex: 1 }}
                  className="form-control flex-1"
                  placeholder="زايد الان"
                />
                <button
                  onClick={handleSendDataToServer}
                  ref= {sendBtn}
                  id="sendMazad"
                  className="btn main-btn sendMazad d-flex center gap-2"
                >
                  {" "}
                  مزايدة{" "}
                </button>
              </form>
            ) : (
              <div className="text-center alert alert-success">
                {" "}
                تم انتهاء المزايدة{" "}
              </div>
            )}
          </Col>
          <Col className="details p-4" sm="12" md="4" lg="4">
            {product && product._id ? (
              <>
                {isWon &&
                product.biggestValue &&
                product.biggestValue.sender &&
                product.biggestValue.sender._id === myId ? (
                  <div className="text-center text-success fw-bold mb-3">
                    {" "}
                    انت الفائز 🥰{" "}
                  </div>
                ) : null}
                <div>
                  <span> سعر البدأ - </span>
                  <span className="fw-bold"> {product.firstPrice} L.E</span>
                </div>
                <div>
                  <span> اقل قيمة للمزايدة - </span>
                  <span className="fw-bold">
                    {" "}
                    {product.leastIncreasePrice} L.E
                  </span>
                </div>
                {product.biggestValue ? (
                  <div>
                    <span> اعلى سعر الى الان - </span>
                    <span className="fw-bold">
                      {" "}
                      {product.biggestValue.content} L.E
                    </span>
                  </div>
                ) : null}
                {product.biggestValue && product.biggestValue.sender ? (
                  <div>
                    <span> صاحب اعلى سعر - </span>
                    <span className="fw-bold">
                      {" "}
                      {product.biggestValue.sender.name}{" "}
                    </span>
                  </div>
                ) : null}
                {isWon &&
                product.biggestValue &&
                product.biggestValue.sender &&
                product.biggestValue.sender._id === myId &&
                !isPaid ? (
                  <button
                    onClick={handleCompletePay}
                    className="btn main-btn fw-bold w-100 mt-2 d-flex center gap-2"
                  >
                    اتمام الشراء{" "}
                    {payLoading && payIsPress ? (
                      <Spinner variant="light" animation="border" />
                    ) : null}
                  </button>
                ) : null}
                {isPaid ? (
                  <div className="alert alert-success text-center"> تم البيع </div>
                ) : null}
              </>
            ) : null}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MazadContainer;
