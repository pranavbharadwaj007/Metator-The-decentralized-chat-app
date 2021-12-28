import { useMoralis } from "react-moralis"

function ChangeUsername() {
    const{setUserData,isUserUpdating,userError,user}=useMoralis();
    const setUsername=()=>{
        const username=prompt(`Enter your new username`);
        if(!username)return;
        setUserData({
            username,
        })
    }
    return (
        <div className="text-sm absolute top-4 right-6">
            <button disabled={isUserUpdating} 
            onClick={setUsername}
            className="hover:text-sky-700">
                Change your username
            </button>
        </div>
    )
}

export default ChangeUsername
