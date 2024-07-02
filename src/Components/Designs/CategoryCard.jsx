import React from 'react'

function CategoryCard({title, image}) {
  return (
    <div
        className="relative drop-shadow-xl w-[250px] h-[350px] overflow-hidden rounded-xl bg-[#3d3c3d]"
        >
         <div className="absolute top-0 left-0 h-full w-full bg-[#fff8dc]">
                <img src={`https://image.tmdb.org/t/p/w500${image}`} alt={title} className='object-cover'/> 
        </div>
        <div
            class="absolute  items-center hidden hover:visible transition-all duration-500 justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]"
        >
            {title}
        </div>
        <div class="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
    </div>

  )
}

export default CategoryCard