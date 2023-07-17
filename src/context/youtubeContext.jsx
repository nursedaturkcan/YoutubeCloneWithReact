import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import { options } from '../utils/constants.jsx';

// context yapısnın temelini oluştuma
export const YoutubeContext = createContext();

// context'te tutlan verileri bütün uygulamay sağlaycak sağlayıcı
export const ContextProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [searchResult, setSearchResult] = useState(null);

  // selectedCategory state'inin değişimini izleme
  useEffect(() => {
    // her kategori değiştiğinde null yapsın bu sayede loading koyabiliriz
    setSearchResult(null);
    // video verisini çek
    fetchCategory(selectedCategory);
  }, [selectedCategory]);

  //yotubedan verileri çekmeye yarayan fonksiyon
  const fetchCategory = (category) => {
    axios
      .get(
        `https://youtube138.p.rapidapi.com/search/?q=${category}`,
        options
      )
      .then((res) => setSearchResult(res.data.contents));
  };

  return (
    <YoutubeContext.Provider
      value={{ selectedCategory, setSelectedCategory, searchResult }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};