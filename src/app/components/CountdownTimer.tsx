// import React, {useState, useEffect} from "react"

// const CountdownTimer: React .FC = () =>{
     
// const [time, setTime] = useState(0);
// const [isRunning, setIsRunning] = useState(false);
// const [remainingTime, setRemainingTime] = useState(0);

// useEffect(()=> {
//     let timer: NodeJS.Timeout;
//     if (isRunning && remainingTime > 0){
//         timer = setInterval(()=> {
//             setRemainingTime((prev) => prev -1)
//         }, 1000)
//     }
// else if (remainingTime === 0){
//     setIsRunning(false);

// }
// return()=> clearInterval(timer);

// } , [isRunning, remainingTime])

// const handleStart = () =>{
//     if (time >0){
//         setRemainingTime(time);
//         setIsRunning(true)
//     }
// }

// const handlepause = () =>{
//     setIsRunning(false)
// }

// const handleReset = () =>{
//     setIsRunning(false)
//     setRemainingTime(0)
//     setTime(0)
// }

// return(
//    <div
//      className="flex flex-col min-h-screen items-center justify-center
//      bg-gradient-to-br from-black to grey">
//         <img src="images/hlogo.png" alt="hlogo"
//         className="absolute top-4 right-4 h-auto w-40" 
//         /> 
//         <h1 className="text-4xl font-extrabold uppercase mb-6 ">Countdown Timer</h1>
   
//  <input
//  type="number"
//  className="border-2 border-grey-900 bg-transparent p-3 
//  mb-6 text-white-900 text-xl rounded"
//  placeholder="Enter Time In Second"
//  value={time > 0 ? time : ""}
//     onChange={(e) => setTime(Number(e.target.value))}
//  />
//  <div className="text=3xl font-semibold uppercase mb-6 text-black">
//     {remainingTime} Second remaining 
//  </div>
// <div className="flex spacing=x-6">

// <button
//   onClick={handleStart}
//   className="text-white px-8 py-4 rounded-lg font-normal bg-gradient-to-r from-blue-500 to-teal-600 hover:from-blue-600 hover:to-teal-800 mr-4"
// >
//   Start
// </button>

// <button
//   onClick={handlepause}
//   className="text-white px-8 py-4 rounded-lg font-normal bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-800 mr-4"
// >
//   Pause
// </button>

// <button
//   onClick={handleReset}
//   className="text-white px-8 py-4 rounded-lg font-normal bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600"
// >
//   Reset
// </button>

    
// </div>
// <footer className="mt-10 text-black text-sm">
//     Under The Supervision Of Harisa Saeed
// </footer>











// </div>
// )






// }


// export default CountdownTimer


import React, { useState, useEffect } from "react";

const CountdownTimer: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, remainingTime]);

  const handleStart = () => {
    if (time > 0) {
      setRemainingTime(time);
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setRemainingTime(0);
    setTime(0);
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-gray-500 to-blue-300 text-white p-6">
      {/* Header */}
      <header className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg">
        <img src="images/hlogo.png" alt="Logo" className="h-12 w-auto" />
        <h1 className="text-3xl font-bold uppercase tracking-wider">
          Countdown Timer
        </h1>
      </header>

      {/* Countdown Timer Section */}
    
  
        <main className="flex flex-col items-center mt-10">
  <input
    type="number"
    className="border-2 border-gray-200 bg-transparent p-3 mb-6 text-white text-xl rounded focus:outline-none focus:border-blue-200 placeholder-white"
    placeholder="Enter Time In Seconds"
    value={time > 0 ? time : ""}
    onChange={(e) => setTime(Number(e.target.value))}
  />


        <div className="text-4xl font-semibold mb-6 text-yellow-300">
          {remainingTime > 0 ? `${remainingTime} Seconds Remaining` : "Time's up!"}
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleStart}
            className="text-white px-8 py-4 rounded-lg font-medium bg-gradient-to-r from-blue-500 to-teal-600 hover:from-blue-600 hover:to-teal-800 transform hover:scale-105 transition-all duration-200"
          >
            Start
          </button>

          <button
            onClick={handlePause}
            className="text-white px-8 py-4 rounded-lg font-medium bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-800 transform hover:scale-105 transition-all duration-200"
          >
            Pause
          </button>

          <button
            onClick={handleReset}
            className="text-white px-8 py-4 rounded-lg font-medium bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200"
          >
            Reset
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full mt-auto py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-center text-gray-300 text-sm shadow-inner">
        Under The Supervision Of <span className="text-yellow-400">Harisa Saeed</span>
      </footer>
    </div>
  );
};

export default CountdownTimer;
