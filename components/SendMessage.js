import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({endOfMessagesRef}) {
  const { user, Moralis } = useMoralis();
  const [message,setMessage]=useState("");
  const sendMessage=(e)=>{
      e.preventDefault();
      if(!message)return;
      const Messages=Moralis.Object.extend("Messages");
      const messages=new Messages();
      messages
      .save({
          message:message,
          username:user.getUsername(),
          ethAddress:user.get('ethAddress'),
      })
      .then((message)=>{

      },
      (error)=>{
          console.log(error.message);
      })
      endOfMessagesRef.current.scrollIntoView({ behavior:"smooth"});
setMessage("");
  }
  return (
    <form className="flex fixed opacity-80 px-6 py-4 max-w-2xl shadow-xl rounded-xl border-2 border-sky-300 bottom-10 bg-black  w-11/12">
      <input
        className=" flex-grow outline-none pr-5 bg-transparent text-gray-100  placeholder-sky-200"
        type="text"
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        placeholder={`Enter a Message ${user.getUsername()}`}
      />
      <button type="submit" onClick={sendMessage} className="font-bold text-sky-500">Send</button>
    </form>
  );
}

export default SendMessage;
