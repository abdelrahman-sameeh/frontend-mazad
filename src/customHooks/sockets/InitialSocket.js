import io from "socket.io-client";
// export const socket = io.connect(`http://localhost:3001`);
export const socket = io.connect(`https://api-mazad-nodejs.onrender.com`);


const InitialSocket = () => {
  const handleGoToMazadChat = (chatId) => {
    socket.emit("joinMazadChat", chatId);
  };
  return [handleGoToMazadChat]
};

export default InitialSocket;
