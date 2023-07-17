import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { options } from "../utils/constants.jsx"
import axios from 'axios';
import ReactPlayer from 'react-player';
import loading from "../assets/loadinggif.gif";
import { AiFillLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import millify from 'millify';
import VideoCard from '../components/VideoCard.jsx';
import StringArea from '../components/StringArea.jsx';

const VideoDetail = () => {
    const [details, setDetails] = useState(null);
    const [relatedContent, setRelatedContent] = useState(null);
    const params = useParams();
    useEffect(() => {
        // kullanıcı alakalı videolardan birine tıklarsa loading gösterebilmek için null'a çekildi
        setDetails(null);
        setRelatedContent(null)
        axios.get(`https://youtube138.p.rapidapi.com/video/details/?id=${params.videoId}`, options)
            .then((res) => setDetails(res.data));
        // videoya benzer diğer içerikleri çekme isteği
        axios.get(`https://youtube138.p.rapidapi.com/video/related-contents/?id=${params.videoId}`, options)
            .then((res) => setRelatedContent(res.data.contents))
            // ! Bağımlılık olarak useParamstan gelen videonun id'si eklendi
            //!alakalı videolardan birine tıklanırsa onun verisini çekmek için
    }, [params.videoId])
    

    return (
        <div >
            {/* details değeri null iken ekrana loading basma */}

            {!details && <img className='m-auto mt-[300px]' src={loading} />}
            {details && (
                <div className='flex flex-col lg:flex-row lg:justify-between justify-between gap-5 p-3 sm:p-5 md:p-12 '>
                    {/* // ana içerik */}

                    <div className='flex flex-col items-center lg:max-w-[900px]'>
                        <ReactPlayer width={"100%"} controls playing={true}
                            url={`https://www.youtube.com/watch?v=${details.videoId}`}
                        />
                        <div className='flex flex-col gap-5 mt-5'>
                            <h2>{details.title}</h2>

                            <div className='flex justify-between'>
                                {/* kanal hakkında bilgiler */}
                                <div className='flex gap-4 items-center'>
                                    <img src={details?.author?.avatar[0]?.url} className='w-[48px] h-[48px] rounded-full' />
                                    <div>
                                        <p>{details.author.title}</p>
                                        <p>{details.author.stats.subscribersText}</p>
                                    </div>
                                    <button className='bg-white text-black rounded-lg p-1'>Abone Ol</button>
                                </div >
                                {/* video hakkında bilgiler */}
                                <div className='flex gap-5'>
                                    <div className='flex items-center gap-3 bg-gray-800 roundend p-3 cursor-pointer hover:bg-gray-700'><AiFillLike />
                                        <span>{millify(details.stats.likes)}</span>
                                    </div>
                                    <div className='flex items-center gap-3 bg-gray-800 roundend p-3 cursor-pointer hover:bg-gray-700'>
                                        <FaShare />
                                        <span>Paylaş</span>
                                    </div>
                                </div>
                            </div>
                            {/* video hakkında kısmı */}
                            <div className='bg-gray-600 rounded p-4'>
                                <p className='flex gap-5 mb-3'>
                                    <span>{millify(details.stats.views)}kez izlendi</span>
                                    <span>{details.publishedDate} tarihinde yayınlandı.</span>
                                </p>
                               <StringArea text={details.description} max={200} />

                            </div>
                        </div>

                    </div>

                    {/* // alakalı içerikler */}
                    <div className='lg:max-w-[300px]'>
                        {!relatedContent && <p>Loading</p>}
                        {relatedContent && relatedContent.map((video,i)=>{
                            if (video.type!=="video") return;
                            return <VideoCard key={i} videoInfo={video} />
                        })}
                    </div>
                </div>


            )}
        </div>
    )
}

export default VideoDetail