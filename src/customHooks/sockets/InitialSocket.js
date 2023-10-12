import io from "socket.io-client";
export const socket = io.connect(`http://localhost:3001`);

const InitialSocket = () => {
  const handleGoToMazadChat = (chatId) => {
    socket.emit("joinMazadChat", chatId);
  };
  return [handleGoToMazadChat]
};

export default InitialSocket;
