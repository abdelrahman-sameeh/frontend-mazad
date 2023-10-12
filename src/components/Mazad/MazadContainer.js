import React from "react";
import { Col, Row } from "react-bootstrap";
import SendMazadMessageSocket from "../../customHooks/sockets/SendMazadMessageSocket";
import GetAllMessagesInSpecificChatHook from "../../customHooks/mazad/GetAllMessagesInSpecificChat";
import GetProductInMazad from "../../customHooks/product/GetProductInMazadHook";

const MazadContainer = () => {
  const myId = localStorage.user ? JSON.parse(localStorage.user)._id : null;

  const [loading, isPress, messages] = GetAllMessagesInSpecificChatHook();

  const [getSpecificLoading, getSpecificIsPress, product] = GetProductInMazad();

  const [
    mazadValue,
    ended,
    isWon,
    handleChangeMazadValue,
    handleSendDataToServer,
  ] = SendMazadMessageSocket(product);

  return (
    <div>
      <div className="container">
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
            <div className="messages">
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
                  id="sendMazad"
                  className="btn main-btn sendMazad"
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
                product.biggestValue.sender._id === myId ? (
                  <button className="btn main-btn fw-bold w-100 mt-2">
                    اتمام الشراء{" "}
                  </button>
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
