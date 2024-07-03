import React from 'react'

function Dock() {
  return (
    <div
        class="flex space-x-2 border-[3px] border-purple-400 rounded-xl select-none"
        >
        <label
            class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
        >
            <input
            type="radio"
            name="radio"
            value="html"
            class="peer hidden"
            checked=""
            />
            <span
            class="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out"
            >
                Watched
            </span>
        </label>

        <label
            class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
        >
            <input type="radio" name="radio" value="react" class="peer hidden" />
            <span
            class="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out"
            >
                Edit
            </span>
        </label>

        <label
            class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
        >
            <input type="radio" name="radio" value="vue" class="peer hidden" />
            <span
            class="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out"
            >
                Delete
            </span>
        </label>
    </div>

  )
}

export default Dock