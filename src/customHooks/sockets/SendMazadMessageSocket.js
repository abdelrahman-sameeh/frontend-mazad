import { useEffect, useRef, useState } from "react";
import { socket } from "./InitialSocket";
import { useParams } from "react-router-dom";
import { getProductInMazad } from "../../redux/actions/productAction";
import { useDispatch } from "react-redux";
import { notify } from "../../components/utils/NotifyComponent";

const myId = localStorage.user ? JSON.parse(localStorage.user)._id : null;

const SendMazadMessageSocket = (product) => {
  const chatId = useParams().id;
  const [mazadValue, setMazadValue] = useState("");
  const dispatch = useDispatch();
  const sendBtn = useRef('')
  const handleChangeMazadValue = (e) => setMazadValue(e.target.value);

  const data = {
    sender: myId,
    content: mazadValue,
    chatId,
  };

  useEffect(() => {
    socket.on("receivedMazadValue", async () => {
      console.log('test');
      await dispatch(getProductInMazad(chatId));
    });
  }, []); 

  let isWon = false,
    ended = false;
  if (new Date(product.endTime).getTime() < new Date(Date.now()).getTime()) {
    ended = true;
    if (
      product &&
      product.biggestValue &&
      product.biggestValue.sender &&
      product.biggestValue.sender._id === myId
    ) {
      isWon = true;
    }
  }

  const handleSendDataToServer = (e) => {
    e.preventDefault();

    if (+mazadValue < +product.leastIncreasePrice) {
      return notify(
        `يجب ان تكون اقل قيمة للمزايد ${product.leastIncreasePrice}`,
        "warn"
      );
    }
    setMazadValue("");
    sendBtn.current.innerHTML += `<div class="my-spinner spinner-border text-light" role="status"></div>`
    
    socket.emit("sendMazadValue", data);
    // set user won in product
    socket.emit("setIsWonInProduct", myId);
  };

  return [
    mazadValue,
    sendBtn,
    ended,
    isWon,
    handleChangeMazadValue,
    handleSendDataToServer,
  ];
};

export default SendMazadMessageSocket;
