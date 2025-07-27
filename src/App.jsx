import { useEffect, useState } from 'react'
import './App.css'
import Carousel from './components/Carousel';
import { PHOTO_API_URL } from './utils/constant';

function App() {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(PHOTO_API_URL);
      const data = await response.json();
      console.log(data)
    }

    fetchData();
  }, [])

  return (
    <>
      <Carousel
        // images={[]}
        isLoading={isLoading}
      // imgPerSlide={ }
      // imageLimit={ }
      // customPrevButton={ }
      // customNextButton={ }
      />
    </>
  )
}

export default App
