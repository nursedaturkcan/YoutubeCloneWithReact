import { useContext } from 'react';
import SideNav from '../components/SideNav';
import { YoutubeContext } from '../context/YoutubeContext.jsx';
import VideoCard from '../components/VideoCard';


const Feed = () => {
  const { searchResult } = useContext(YoutubeContext);
  return (
    <div className="flex">
      <SideNav />
     <div className='videos'>
      {!searchResult ? (<p>Loading...</p>):
      (searchResult.map((video)=>{
        // eğerki elemeanın tipi video değilse hiçbir şey yapma
        if(video.type!=="video" ) return;
        //Elemanın tipi video ise ekrana bir tane video kartı bas
return <VideoCard videoInfo={video} />
})
)}
     </div>
      
    </div>
  );
};

export default Feed;