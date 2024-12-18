import React from 'react'
import Calculator from './components/Calculator'

const App = () => {
  return (
    
    
    <div className='min-h-screen text-white flex flex-col items-center justify-center'>
    {/* //Heading  */}
    <h1 className="text-white text-2xl font-bold text-center mb-10">
    Simple Calculator
    </h1>
      <Calculator/>
      <p className="mt-10 font-medium text-white">
      Developed by 🧑‍💻 <span className=" font-semibold text-[#00ff62]">Akram Hasan</span>
      </p>

    </div>
  )
}

export default App