import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import {options} from "../utils/constants.jsx"
import SideNav from "../components/SideNav.jsx";
import VideoCard from "../components/VideoCard.jsx";
import loadinggif from "../assets/loadinggif.gif"

const SearchResults = () => {
   
    const [videos,setVideos]=useState(null);
    //url den arama terimini almak
    const [searchParams,setSearchParams] =useSearchParams();
    // get metodu yardımıyla arama terimini bulmak
    const query=searchParams.get('search_query');
    

    useEffect(()=>{
        // her aramanın başında videolara null değerini atadık.
        //aşağıdaki sorgu sayesinde null iken loading basıldı
        setVideos(null);
        axios.get(`https://youtube138.p.rapidapi.com/search/?q=${query}`,options)
        .then((res)=>setVideos(res.data.contents));
    },[query])
   console.log(videos);
   return (
    <div className="flex">
      <SideNav />
      <div className="flex  justify-center p-5  w-full">
        {/* videolar yoksa ekran loading basma */}
        {!videos && (
          <img className="mx-auto mt-[200px]" src={loadinggif} />
        )}
        <div className="flex flex-col gap-20 max-w-[500px]">
          {videos?.map((content, i) => {
            if (content.type !== 'video') return;
            return <VideoCard key={i} videoInfo={content} />;
          })}
        </div>
      </div>
    </div>
  );
};



export default SearchResults