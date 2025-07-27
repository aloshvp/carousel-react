import { useEffect, useState } from 'react'
import './App.css'
import Carousel from './components/Carousel';


function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState(null);

  useEffect(() => {
    fetchData(10);
  }, [])

  const fetchData = async (imgLimit = 1) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://picsum.photos/v2/list?page=1&limit=${imgLimit}`);
      const data = await response.json();
      console.log(data)
      setImages(data);
    }
    catch (error) {
      console.error("Error fetching images", error);
    }
    finally {
      setIsLoading(false);
    }

  }

  return (
    <div className='carouselContainer'>
      <Carousel
        images={images}
        isLoading={isLoading}
      // imgPerSlide={ }
      // imageLimit={ }
      // customPrevButton={ }
      // customNextButton={ }
      />
    </div>
  )
}

export default App
