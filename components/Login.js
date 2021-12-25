
import Image from "next/image"
import { useMoralis } from 'react-moralis';
function Login() {
    const { authenticate}=useMoralis();
    return (
        <div className="bg-black relative text-white">
       
            <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-4 ">
              <div className="bg-sky-200 rounded-full">
              <Image
                   src="/log2b.png"
                  
                   width={200}
                   height={200}
               />
              </div>
        
               <button onClick={authenticate} className="bg-sky-200 rounded-lg p-4 text-black animate-pulse">LOGIN TO METATOR</button>
            </div>

            <div className="w-full h-screen">
                 <Image
                    src="/bg5.jpg"
                    layout="fill"
                    objectFit="cover"

                 />
            </div>
        </div>
    )
}

export default Login
