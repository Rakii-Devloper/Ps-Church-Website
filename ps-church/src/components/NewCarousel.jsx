import React from 'react';

// Sample image data
const images = [
    { src: './assets/pic1.jpg', alt: 'First slide' },
    { src: './assets/pic2.jpg', alt: 'Second slide' },
    { src: './assets/pic3.jpg', alt: 'Third slide' },
    { src: './assets/pic4.jpg', alt: 'Fourth slide' },
    { src: './assets/church1.jpg', alt: 'Fifth slide' },
    { src: './assets/Pastor1.jpg', alt: 'Sixth slide' },
    { src: './assets/pic5.jpg', alt: 'Seventh slide' },
    { src: './assets/pic6.jpg', alt: 'Eighth slide' },
    { src: './assets/pic7.jpg', alt: 'Ninth slide' },
    { src: './assets/pic8.jpg', alt: 'Tenth slide' },
];

const NewCarousel = () => {
    return (
        <div className="relative w-full">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {images.map((_, index) => (
                        <li
                            key={index}
                            data-target="#carouselExampleIndicators"
                            data-slide-to={index}
                            className={`cursor-pointer ${index === 0 ? 'active' : ''}`}
                        />
                    ))}
                </ol>
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img
                                className="block w-full border-2 border-white"
                                src={image.src}
                                alt={image.alt}
                            />
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};

export default NewCarousel;
