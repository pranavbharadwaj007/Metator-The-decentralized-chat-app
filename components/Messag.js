import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
function Messag({ messag }) {
  const { user } = useMoralis();
  const isUserMessage = messag.get("ethAddress") === user.get("ethAddress");
  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserMessage && "justify-end"
      }`}
    >
      <div className={`relative h-8 w-8 ${isUserMessage && "order-last"}`}>
        <Avatar username={messag.get("username")} />
      </div>
      <div
        className={`flex space-x-4 p-3 rounded-lg ${
          isUserMessage
            ? "rounded-br-none bg-sky-300"
            : "rounded-bl-none bg-pink-300"
        }`}
      >
        <p>{messag.get("message")}</p>
      </div>
      <p
        className={`absolute -bottom-5 text-xs ${
          isUserMessage ? "text-sky-300" : "text-pink-300"
        }`}
      >
        {messag.get("username")}
      </p>
    </div>
  );
}

export default Messag;
