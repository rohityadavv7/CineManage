import React,{useEffect, useState} from 'react'
import img1 from "../../assets/carousel-1.jpg"
import img2 from "../../assets/carousel-2.jpg"
import img3 from "../../assets/carousel-3.jpg"
import img4 from "../../assets/carousel-4.jpg"
import img5 from "../../assets/carousel-5.jpg"
import Heading from './Heading'
import Button from './Button'


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
        <div id="slide1" className="carousel-item  glass relative 
        hover:bg-gradient-to-r from-NewBlue to-bl  transition-all duration-500
        w-full -z-0 overflow-hidden">
            <div className=''>
                <img
                src={img5}
                className="w-full  object-cover  " />
                <div className="absolute left-5 right-5 top-[50%] flex -translate-y-1/2 transform justify-between">
                <a href="#slide5" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div className='absolute -bottom-5 z-[100] shadow-2xl left-5'>
                <div
                    class="overflow-hidden before:ease-in-out after:ease-in-out bg-black group cursor-pointer relative flex flex-col gap-4 justify-between rounded-2xl border hover:after:w-full border-white-222 hover:border-[#11BE86] duration-300 p-4 md:p-6 px-8 before:h-full before:w-2 hover:before:w-full after:absolute after:top-0 after:left-0 after:h-full after:w-0 after:duration-300 after:opacity-5 after:bg-[url('https://s3-alpha-sig.figma.com/img/6956/4aec/59afa93303a34a23ecc13368dc4094db?Expires=1717977600&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&amp;Signature=PFrwNwC7QeqlIUsWFsC-jbQzlVTUSh7T5VfJ9vMNaAEsoOS92kRDH-OjWcAX~dmuZ77fPWjZJX0v1kXaZENeqa--USg1BcCN8z~Z1id5y5RQT1ZTU5OR4PRrLISHbowyTAu65h2jCKOSYXCrXN3F6fH8epD-Pm9TCGCYvD9svkhnbTSZxPKZhn8okHm7W~3wWyIhJBaZyQ30qWwD~JAh5r0BRE6XIfIpgTlUWeLq9wwCbwFZQR5RWInuHUfLrfhvAnxmzVVoTO1TxyjHOeXVb68Tc~nJuypwlDmcd0Sg02sJu3-uj7vFXRul6qw0LRfsQrWS5c5RJ~P-z5-eS~1jTA__')] before:duration-300 before:-z-1 before:bg-[#11BE86] before:absolute before:top-0 before:left-0"
                    >
                    <h1
                        class="font-medium text-[60px] duration-300 group-hover:text-white group-hover:z-[5]"
                    >
                        The Batman
                    </h1>
                    <a
                        class="text-bl group-hover:z-[5] font-medium duration-300 group-hover:text-white mt-auto flex items-center gap-2 text-sm xl:text-base"
                    >
                        More about
                        <svg
                        class="w-4 h-4"
                        stroke="currentColor"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                        ></path>
                        </svg>
                    </a>
                </div>

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
            <div className='absolute -bottom-5 z-[100] shadow-2xl left-5'>
                <div
                    class="overflow-hidden before:ease-in-out after:ease-in-out bg-black group cursor-pointer relative flex flex-col gap-4 justify-between rounded-2xl border hover:after:w-full border-white-222 hover:border-[#11BE86] duration-300 p-4 md:p-6 px-8 before:h-full before:w-2 hover:before:w-full after:absolute after:top-0 after:left-0 after:h-full after:w-0 after:duration-300 after:opacity-5 after:bg-[url('https://s3-alpha-sig.figma.com/img/6956/4aec/59afa93303a34a23ecc13368dc4094db?Expires=1717977600&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&amp;Signature=PFrwNwC7QeqlIUsWFsC-jbQzlVTUSh7T5VfJ9vMNaAEsoOS92kRDH-OjWcAX~dmuZ77fPWjZJX0v1kXaZENeqa--USg1BcCN8z~Z1id5y5RQT1ZTU5OR4PRrLISHbowyTAu65h2jCKOSYXCrXN3F6fH8epD-Pm9TCGCYvD9svkhnbTSZxPKZhn8okHm7W~3wWyIhJBaZyQ30qWwD~JAh5r0BRE6XIfIpgTlUWeLq9wwCbwFZQR5RWInuHUfLrfhvAnxmzVVoTO1TxyjHOeXVb68Tc~nJuypwlDmcd0Sg02sJu3-uj7vFXRul6qw0LRfsQrWS5c5RJ~P-z5-eS~1jTA__')] before:duration-300 before:-z-1 before:bg-[#11BE86] before:absolute before:top-0 before:left-0"
                    >
                    <h1
                        class="font-medium text-[60px] duration-300 group-hover:text-white group-hover:z-[5]"
                    >
                        Kung fu Panda
                    </h1>
                    <a
                        class="text-bl group-hover:z-[5] font-medium duration-300 group-hover:text-white mt-auto flex items-center gap-2 text-sm xl:text-base"
                    >
                        More about
                        <svg
                        class="w-4 h-4"
                        stroke="currentColor"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                        ></path>
                        </svg>
                    </a>
                </div>

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

            <div className='absolute -bottom-5 z-[100] shadow-2xl left-5'>
                <div
                    class="overflow-hidden before:ease-in-out after:ease-in-out bg-black group cursor-pointer relative flex flex-col gap-4 justify-between rounded-2xl border hover:after:w-full border-white-222 hover:border-[#11BE86] duration-300 p-4 md:p-6 px-8 before:h-full before:w-2 hover:before:w-full after:absolute after:top-0 after:left-0 after:h-full after:w-0 after:duration-300 after:opacity-5 after:bg-[url('https://s3-alpha-sig.figma.com/img/6956/4aec/59afa93303a34a23ecc13368dc4094db?Expires=1717977600&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&amp;Signature=PFrwNwC7QeqlIUsWFsC-jbQzlVTUSh7T5VfJ9vMNaAEsoOS92kRDH-OjWcAX~dmuZ77fPWjZJX0v1kXaZENeqa--USg1BcCN8z~Z1id5y5RQT1ZTU5OR4PRrLISHbowyTAu65h2jCKOSYXCrXN3F6fH8epD-Pm9TCGCYvD9svkhnbTSZxPKZhn8okHm7W~3wWyIhJBaZyQ30qWwD~JAh5r0BRE6XIfIpgTlUWeLq9wwCbwFZQR5RWInuHUfLrfhvAnxmzVVoTO1TxyjHOeXVb68Tc~nJuypwlDmcd0Sg02sJu3-uj7vFXRul6qw0LRfsQrWS5c5RJ~P-z5-eS~1jTA__')] before:duration-300 before:-z-1 before:bg-[#11BE86] before:absolute before:top-0 before:left-0"
                    >
                    <h1
                        class="font-medium text-[60px] duration-300 group-hover:text-white group-hover:z-[5]"
                    >
                        Cars 4
                    </h1>
                    <a
                        class="text-bl group-hover:z-[5] font-medium duration-300 group-hover:text-white mt-auto flex items-center gap-2 text-sm xl:text-base"
                    >
                        More about
                        <svg
                        class="w-4 h-4"
                        stroke="currentColor"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                        ></path>
                        </svg>
                    </a>
                </div>

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

            <div className='absolute -bottom-5 z-[100] shadow-2xl left-5'>
                <div
                    class="overflow-hidden before:ease-in-out after:ease-in-out bg-black group cursor-pointer relative flex flex-col gap-4 justify-between rounded-2xl border hover:after:w-full border-white-222 hover:border-[#11BE86] duration-300 p-4 md:p-6 px-8 before:h-full before:w-2 hover:before:w-full after:absolute after:top-0 after:left-0 after:h-full after:w-0 after:duration-300 after:opacity-5 after:bg-[url('https://s3-alpha-sig.figma.com/img/6956/4aec/59afa93303a34a23ecc13368dc4094db?Expires=1717977600&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&amp;Signature=PFrwNwC7QeqlIUsWFsC-jbQzlVTUSh7T5VfJ9vMNaAEsoOS92kRDH-OjWcAX~dmuZ77fPWjZJX0v1kXaZENeqa--USg1BcCN8z~Z1id5y5RQT1ZTU5OR4PRrLISHbowyTAu65h2jCKOSYXCrXN3F6fH8epD-Pm9TCGCYvD9svkhnbTSZxPKZhn8okHm7W~3wWyIhJBaZyQ30qWwD~JAh5r0BRE6XIfIpgTlUWeLq9wwCbwFZQR5RWInuHUfLrfhvAnxmzVVoTO1TxyjHOeXVb68Tc~nJuypwlDmcd0Sg02sJu3-uj7vFXRul6qw0LRfsQrWS5c5RJ~P-z5-eS~1jTA__')] before:duration-300 before:-z-1 before:bg-[#11BE86] before:absolute before:top-0 before:left-0"
                    >
                    <h1
                        class="font-medium text-[60px] duration-300 group-hover:text-white group-hover:z-[5]"
                    >
                        Thor
                    </h1>
                    <a
                        class="text-bl group-hover:z-[5] font-medium duration-300 group-hover:text-white mt-auto flex items-center gap-2 text-sm xl:text-base"
                    >
                        More about
                        <svg
                        class="w-4 h-4"
                        stroke="currentColor"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                        ></path>
                        </svg>
                    </a>
                </div>

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

            <div className='absolute -bottom-5 z-[100] shadow-2xl left-5'>
                <div
                    class="overflow-hidden before:ease-in-out after:ease-in-out bg-black group cursor-pointer relative flex flex-col gap-4 justify-between rounded-2xl border hover:after:w-full border-white-222 hover:border-[#11BE86] duration-300 p-4 md:p-6 px-8 before:h-full before:w-2 hover:before:w-full after:absolute after:top-0 after:left-0 after:h-full after:w-0 after:duration-300 after:opacity-5 after:bg-[url('https://s3-alpha-sig.figma.com/img/6956/4aec/59afa93303a34a23ecc13368dc4094db?Expires=1717977600&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&amp;Signature=PFrwNwC7QeqlIUsWFsC-jbQzlVTUSh7T5VfJ9vMNaAEsoOS92kRDH-OjWcAX~dmuZ77fPWjZJX0v1kXaZENeqa--USg1BcCN8z~Z1id5y5RQT1ZTU5OR4PRrLISHbowyTAu65h2jCKOSYXCrXN3F6fH8epD-Pm9TCGCYvD9svkhnbTSZxPKZhn8okHm7W~3wWyIhJBaZyQ30qWwD~JAh5r0BRE6XIfIpgTlUWeLq9wwCbwFZQR5RWInuHUfLrfhvAnxmzVVoTO1TxyjHOeXVb68Tc~nJuypwlDmcd0Sg02sJu3-uj7vFXRul6qw0LRfsQrWS5c5RJ~P-z5-eS~1jTA__')] before:duration-300 before:-z-1 before:bg-[#11BE86] before:absolute before:top-0 before:left-0"
                    >
                    <h1
                        class="font-medium text-[60px] duration-300 group-hover:text-white group-hover:z-[5]"
                    >
                        Avengers:Endgame
                    </h1>
                    <a
                        class="text-bl group-hover:z-[5] font-medium duration-300 group-hover:text-white mt-auto flex items-center gap-2 text-sm xl:text-base"
                    >
                        More about
                        <svg
                        class="w-4 h-4"
                        stroke="currentColor"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                        ></path>
                        </svg>
                    </a>
                </div>

            </div>
        </div>

       
    </div>
  )
}

export default Carousel

