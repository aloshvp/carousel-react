import React, { useEffect, useRef, useState } from 'react'

const Carousel = ({
    images = [],
    isLoading = false,
    imgPerSlide = 3,
    imageLimit = images?.length,
    customPrevButton,
    customNextButton
}) => {

    const imgRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imgWidth, setImgWidth] = useState(0)
    console.log(currentIndex);

    useEffect(() => {
        setCurrentIndex(0);
    }, [images])

    const goToPrev = () => {
        setCurrentIndex((prev) => prev === 0 ? images.length - 1 : prev - 1)
    }
    const goToNext = () => {
        setCurrentIndex((prev) => prev === images.length - 1 ? 0 : prev + 1)
    }

    console.log(imgRef?.current?.offsetWidth);

    return isLoading ? (
        <div> loading</div>
    ) : (
        <div className="carousel" style={{ width: imgPerSlide * imgWidth }}>
            < div className='image-container'
                style={{ transform: `translateX(-${currentIndex * imgWidth}px)` }}
            >
                {images
                    ?.slice(0, imageLimit > images.length ? images.length : imageLimit)
                    ?.map((image) =>
                        <img
                            onLoad={() => setImgWidth(imgRef?.current?.offsetWidth)}
                            ref={imgRef}
                            key={image.id}
                            src={image.download_url}
                            alt={image.author}
                        />
                    )
                }
            </div >
            <button className='btn prev' onClick={goToPrev}>Prev</button>
            <button className='btn next' onClick={goToNext}>Next</button>
        </div >
    )
}

export default Carousel