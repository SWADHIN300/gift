"use client";

import { useState, useRef } from "react";

export default function ValentinePage() {
  const [accepted, setAccepted] = useState(false);
  const [showForYou, setShowForYou] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Function to move the "Nhi" button to a random position on the page
  const moveNoButton = () => {
    const buttonWidth = 120;
    const buttonHeight = 50;
    const padding = 50;

    // Use viewport dimensions
    const maxX = window.innerWidth - buttonWidth - padding;
    const maxY = window.innerHeight - buttonHeight - padding;

    // Random position within viewport bounds
    const newX = padding + Math.random() * Math.max(maxX - padding, 100);
    const newY = padding + Math.random() * Math.max(maxY - padding, 100);

    setNoButtonPos({ x: newX, y: newY });
  };

  // Question Page
  const QuestionPage = () => (
    <div
      ref={containerRef}
      className="relative w-full max-w-md mx-auto bg-white rounded-3xl shadow-2xl p-8 text-center overflow-hidden"
    >
      {/* Decorative hearts */}
      <div className="absolute top-4 left-4 text-pink-300 text-2xl animate-pulse">💕</div>
      <div className="absolute top-4 right-4 text-pink-300 text-2xl animate-pulse delay-150">💕</div>
      <div className="absolute bottom-4 left-4 text-pink-300 text-lg animate-bounce">💗</div>
      <div className="absolute bottom-4 right-4 text-pink-300 text-lg animate-bounce delay-200">💗</div>

      {/* Main content */}
      <div className="relative z-10 pt-4">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-4">
          Hey Babe 💕
        </h1>

        <p className="text-2xl font-cursive text-pink-600 italic mb-2">
          Will you be my
        </p>
        <p className="text-2xl font-cursive text-pink-600 italic mb-6">
          valentine? <span className="text-red-500">❤️</span>
        </p>

        {/* Only Haanji Button inside card */}
        <button
          onClick={() => setAccepted(true)}
          className="px-10 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-full 
                   shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300
                   hover:from-rose-600 hover:to-pink-600 active:scale-95"
        >
          Haanji 😊
        </button>
      </div>
    </div>
  );

  // Celebration Page (1st image)
  const CelebrationPage = () => (
    <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-2xl p-8 text-center relative overflow-hidden">
      {/* Floating hearts animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-400 animate-float-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 12 + 10}px`,
            }}
          >
            {["💕", "💗", "💖", "❤️", "💘"][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-2 left-2 text-pink-300 text-xl">✨</div>
      <div className="absolute top-2 right-2 text-pink-300 text-xl">✨</div>
      <div className="absolute bottom-2 left-2 text-rose-300 text-xl">💐</div>
      <div className="absolute bottom-2 right-2 text-rose-300 text-xl">💐</div>

      {/* Main content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent mb-6">
          I Know It! <span className="text-red-500">❤️</span>
        </h1>

        {/* Cute bunny illustration */}
        <div className="relative w-40 h-40 mx-auto mb-6">
          <div className="absolute inset-0 bg-gradient-to-b from-pink-100 to-pink-200 rounded-full"></div>
          {/* Bunny body */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-20 bg-gray-100 rounded-full shadow-md"></div>
          {/* Bunny head */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-20 h-16 bg-white rounded-full shadow-sm"></div>
          {/* Bunny ears */}
          <div className="absolute bottom-24 left-1/2 -translate-x-8 w-5 h-12 bg-white rounded-full shadow-sm transform -rotate-12"></div>
          <div className="absolute bottom-24 left-1/2 translate-x-3 w-5 h-12 bg-white rounded-full shadow-sm transform rotate-12"></div>
          {/* Inner ears */}
          <div className="absolute left-1/2 -translate-x-7 w-2 h-8 bg-pink-200 rounded-full transform -rotate-12" style={{ bottom: "6.2rem" }}></div>
          <div className="absolute left-1/2 translate-x-5 w-2 h-8 bg-pink-200 rounded-full transform rotate-12" style={{ bottom: "6.2rem" }}></div>
          {/* Bunny eyes */}
          <div className="absolute bottom-16 left-1/2 -translate-x-5 w-2 h-2 bg-gray-800 rounded-full"></div>
          <div className="absolute bottom-16 left-1/2 translate-x-3 w-2 h-2 bg-gray-800 rounded-full"></div>
          {/* Bunny blush */}
          <div className="absolute bottom-14 left-1/2 -translate-x-8 w-4 h-2 bg-pink-300 rounded-full opacity-60"></div>
          <div className="absolute bottom-14 left-1/2 translate-x-4 w-4 h-2 bg-pink-300 rounded-full opacity-60"></div>
          {/* Bunny nose */}
          <div className="absolute bottom-14 left-1/2 -translate-x-1 w-2 h-1.5 bg-pink-400 rounded-full"></div>
          {/* Heart in bunny's hands */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-2xl animate-pulse">💖</div>
        </div>

        {/* Sweet message */}
        <p className="text-gray-600 text-sm mb-2 px-4">
          Mujhe to nahi mil paya mere jaisa koi... �
        </p>
        <p className="text-gray-500 text-xs mb-6 px-4">
          Par aasha karta hu ki tumhe mile apne jaisa koi 🎀
        </p>

        {/* For you button */}
        <button
          onClick={() => setShowForYou(true)}
          className="px-10 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-full 
                   shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300
                   hover:from-rose-600 hover:to-pink-600"
        >
          For you <span className="text-lg">❤️</span>
        </button>
      </div>
    </div>
  );

  // For You Page - Beautiful love letter
  const ForYouPage = () => (
    <div className="w-full max-w-lg mx-auto bg-gradient-to-br from-white via-pink-50 to-rose-50 rounded-3xl shadow-2xl p-8 text-center relative overflow-hidden">
      {/* Sparkle decorations */}
      <div className="absolute top-3 left-3 text-yellow-400 text-xl animate-pulse">✨</div>
      <div className="absolute top-3 right-3 text-yellow-400 text-xl animate-pulse delay-150">✨</div>
      <div className="absolute bottom-3 left-3 text-pink-400 text-xl animate-bounce">💖</div>
      <div className="absolute bottom-3 right-3 text-pink-400 text-xl animate-bounce delay-200">💖</div>

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 animate-float-heart opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              fontSize: `${Math.random() * 10 + 12}px`,
            }}
          >
            {["💕", "💗", "💖", "❤️", "💘"][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Header with heart */}
        <div className="mb-6">
          <span className="text-5xl">💌</span>
        </div>

        <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-red-400 bg-clip-text text-transparent mb-6">
          My Dearest Babe💕
        </h1>

        {/* Love letter content */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-inner border border-pink-100">
          <p className="text-gray-700 text-base leading-relaxed mb-4 font-cursive text-lg">
            "Tumhari muskurahat dekh kar lagta hai,<br />
            Duniya ki saari khushiyan mil gayi..." 🌸
          </p>

          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Tum mere liye sirf ek naam nahi ho, tum meri subah ki pehli dhoop ho,
            raat ki sabse chamakti sitara ho. ⭐
          </p>

          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Har pal tumhare saath, zindagi aur bhi khoobsurat lagti hai.
            Tumhari hasi meri duniya roshan karti hai. 🌷
          </p>

          <p className="text-rose-500 text-base font-semibold">
            Forever & Always... 💝
          </p>
        </div>

        {/* Signature */}
        <div className="text-gray-500 text-sm italic">
          ~ Tumhara hamesha ke liye 🥰
        </div>

        {/* Heart animation */}
        <div className="mt-6 flex justify-center gap-2">
          <span className="text-3xl animate-pulse">💖</span>
          <span className="text-4xl animate-bounce">💕</span>
          <span className="text-3xl animate-pulse delay-150">💖</span>
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-rose-300 flex items-center justify-center p-4">
      {/* Background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating background hearts */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300/40 animate-float-bg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
          >
            {["💕", "💗", "💖", "❤️", "💘", "💝"][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {showForYou ? <ForYouPage /> : accepted ? <CelebrationPage /> : <QuestionPage />}
      </div>

      {/* Nhi Button - Floats around the entire page */}
      {!accepted && (
        <button
          onMouseEnter={moveNoButton}
          onTouchStart={moveNoButton}
          style={{
            position: "fixed",
            left: noButtonPos.x === 0 ? "20px" : `${noButtonPos.x}px`,
            top: noButtonPos.y === 0 ? "20px" : `${noButtonPos.y}px`,
            transition: "all 0.3s ease-out",
            zIndex: 50,
          }}
          className="px-8 py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white font-semibold rounded-full 
                   shadow-lg cursor-not-allowed select-none hover:shadow-xl"
        >
          Nahi ji 🥲
        </button>
      )}
    </main>
  );
}
