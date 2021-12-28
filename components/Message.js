import { useRef } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./SendMessage";
import Messag from "./Messag";
const MINS_DURATION = 15;
function Message() {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);
  const { data, loading, error } = useMoralisQuery("Messages", (query) =>
    query
      .ascending("createdAt")
      .greaterThan(
        "createdAt",
        new Date(Date.now() - 1000 * 60 * MINS_DURATION)
      ),
      [],
      {
          live:true
      }
  );

  return (
    <div className="pb-56">
      <div className="space-y-10 p-4">{data.map(messag=>(
          <Messag key={messag.id} messag={messag}/>
      ))}</div>
      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>
      <div ref={endOfMessagesRef} className="text-center m-10 text-sky-300">
        <p>You're up to date {user.getUsername()}</p>
      </div>
    </div>
  );
}

export default Message;
