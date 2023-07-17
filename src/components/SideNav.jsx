
import { categories } from "./../utils/constants";
import { useContext } from "react";
import { YoutubeContext } from "../context/youtubeContext";
const SideNav = () => {
  // context'e abone olma
const {selectedCategory, setSelectedCategory} =useContext(YoutubeContext);

  return (
    <nav className="flex flex-col  pt-4">
      {categories.map((item) => (
        <>
        {/* seçilen kategoriyi context'e gönderme */}
         <div onClick={()=>setSelectedCategory(item.name)}
         //eğer seçilen kategorinin ismi ekrana basılan kategori ismi ile eşleşirse arka plan mavi
          className={`${
              selectedCategory === item.name && 'bg-blue-600'
            } flex items-center gap-2 p-2 py-4 text-lg cursor-pointer hover:bg-gray-800 `}>
          {item.icon}
          <span>{item.name}</span>
        </div>
        {/* eğerki objenin divider değeri true ise ekrana hr etiketi */}
        {item.divider && <hr/>}

        </>

      ))}


    </nav>
  )
}

export default SideNav