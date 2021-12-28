import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from 'react-moralis';
import Header from '../components/Header';
import Message from '../components/Message';
export default function Home() {
 const { isAuthenticated, logout}=useMoralis();

  if(!isAuthenticated){
    return <Login/>
  }
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-sky-800 overflow-hidden">
      <Head>
        <title>Metator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <div className='="max-w-screen-2xl mx-auto'>
      <Header/>
       <Message/>
    
      </div>


       {/*footer */}
       {/* <button onClick={logout}>Logout</button> */}
    </div>
  )
}
