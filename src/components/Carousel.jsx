import React from 'react'

const Carousel = ({
    images = [],
    isLoading = false,
    imgPerSlide = 1,
    imageLimit = images?.length,
    customPrevButton,
    customNextButton
}) => {
    return isLoading ? (
        <div> loading</div>
    ) : (
        <div className="carousel">
            < div className='image-container' >
                {images
                    ?.slice(0, imageLimit > images.length ? images.length : imageLimit)
                    ?.map((image) =>
                        <img key={image.id} src={image.download_url} alt={image.author} width={350} height={350} />
                    )
                }
            </div >
        </div>
    )
}

export default Carousel