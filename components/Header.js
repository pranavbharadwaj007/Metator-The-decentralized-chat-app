import { useMoralis } from "react-moralis";
import Image from "next/image";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";
function Header() {
    const {user}=useMoralis();
    return (
        <div className=" sticky top-0 p-5 z-50 bg-gray-900 shadow-sm border-sky-700 border-b-2  text-sky-500">
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                    <Image
                    layout="fill"
                    // objectFit="cover"
                    className=""
                    src="/log2b.png"

                    />
                </div>
                <div className="col-span-4 text-left lg:text-center">
                <div className=" relative h-40 w-40 lg:mx-auto border-sky-500 border-4 rounded-full">
                    <div><Avatar logoutOnPress/></div>
                </div>
                <h1 className="text-2xl">Welcome to Metator</h1>
                <h2 className="text-3xl font-bold truncate">{user.getUsername()}</h2>
                <ChangeUsername/>
                </div>
            </div>
        </div>
    )
}

export default Header;
