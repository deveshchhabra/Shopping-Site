import React from 'react'
import { useTheme } from '../Context/ThemeContext'
const Mode = () => {
    const {theme,toggleTheme}=useTheme();
  return (
    <div className="flex border border-white/20 outline
     rounded-full p-1 justify-center  max-w-max m-2 sm:m-4">
 <button
        onClick={() => toggleTheme('dark')}
        className={`px-4 py-1 rounded-full flex items-center gap-1 ${
          theme === 'dark' ? 'bg-gray-200  text-gray-500 ' : ' text-gray-100'
        }`}
      > 🌞 Light</button>
<button
        onClick={() => toggleTheme("light")}
        className={`px-4 py-2 rounded-full flex items-center gap-[0.1rem] ${
          theme === "light" ? " bg-gray-500" : "text-black"
        }`}
      >🌙 Dark   </button>
        

    </div>
  )
}

export default Mode