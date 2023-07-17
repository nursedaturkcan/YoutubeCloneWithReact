
import { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate=useNavigate();
  const [query,setQuery]=useState("");
//   const handleClick=()=>{
// navigate(`/results/?search_query=${query}`)
//   }
  return (
    <header className="flex justify-between items-center p-2 sticky ">
      <Link to={"/"}>
      <div className="flex items-center">
          
          <img className="w-[100px]" src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png"  />
          <h1 className="text-white text-2xl">YouTube</h1>
          </div>
          </Link>
       
       
        <form className="bg-white rounded flex items-center">
            <input type="text" className="px-4 py-1 rounded text-black outline-none " onChange={(e)=>setQuery(e.target.value)} />
            <Link to={`/results?search_query=${query}`}  className=" mr-2"><FiSearch className="text-black" /></Link>
            
        </form>
        <FaBell className="mr-4" />
    </header>
  )
}

export default Header