import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMessagesInSpecificChat } from "../../redux/actions/mazadAction";

const GetAllMessagesInSpecificChat = () => {
  const chatId = useParams().id;
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();
  const run = async () => {
    setLoading(true);
    setIsPress(true);
    await dispatch(getMessagesInSpecificChat(chatId));
    setLoading(false);
    setIsPress(false);
  };

  useEffect(() => {
    run();
  }, []);

  const response = useSelector((state) => state.chat.getMessagesInSpecificChat);

  let messages = []
  if(response && response.status===200){
    messages = response.data.data
  }
  
  return [loading, isPress, messages];
};

export default GetAllMessagesInSpecificChat;
