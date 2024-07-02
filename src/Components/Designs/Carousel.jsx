import React,{useEffect, useState} from 'react'
import img1 from "../../assets/carousel-1.jpg"
import img2 from "../../assets/carousel-2.jpg"
import img3 from "../../assets/carousel-3.jpg"
import img4 from "../../assets/carousel-4.jpg"
import img5 from "../../assets/carousel-5.jpg"


function Carousel() {
     const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1));
        }, 3000);
        return () => clearInterval(timer);
    }, []);

  return (
    <div className="carousel relative w-full z-0 h-[600px] rounded-lg">
        <div id="slide1" className="carousel-item relative w-full -z-0 overflow-hidden">
            <div>
                <img
                src={img5}
                className="w-full  object-cover  " />
                <div className="absolute left-5 right-5 top-[50%] flex -translate-y-1/2 transform justify-between">
                <a href="#slide5" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div className='absolute top-0'>
                Hello
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full -z-0 overflow-hidden">
            <div>
                <img
                src={img2}
                className="w-full  object-cover overflow-hidden"/>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div className='absolute top-0'>
                Hello
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full -z-0 overflow-hidden">
            <div>
                <img
                src={img1}
                className="w-full  object-cover "/>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div className='absolute top-0'>
                Hello
            </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full -z-0 overflow-hidden">
            <div>
                <img
                src={img3}
                className="w-full  object-cover overflow-hidden"/>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div className='absolute top-0'>
                Hello
            </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full -z-0 overflow-hidden">
            <div>
                <img
                src={img4}
                className="w-full  object-cover overflow-hidden"/>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div className='absolute top-0'>
                Hello
            </div>
        </div>

        <div className='absolute bottom-0 text-white'>
            Hello
        </div>
    </div>
  )
}

export default Carousel

