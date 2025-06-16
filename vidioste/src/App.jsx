import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  return (
    <>
      {/* <video width="320" height="240" controls>
        <source src="http://localhost:3000/video" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-purple-700 mb-4 animate-pulse">🎬 Video Streamer</h1>
        <p className="text-gray-600 mb-6">Enjoy seamless video streaming with Node.js Streams!</p>

        <div className="aspect-video mb-6 border-4 border-purple-300 rounded-xl overflow-hidden shadow-md">
            <video  className="w-full h-auto rounded-lg shadow-lg border border-purple-300"
            controls autoPlay >
                <source src="https://node-stream-backend.onrender.com/video" type="video/mp4" />
                 Your browser does not support the video tag.
            </video>
        </div>

        <footer className="text-sm text-gray-500">Made with 🧠 using React & Express</footer>
      </div>
    </div>
    </>
  )
}

export default App
