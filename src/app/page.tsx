"use client";

import { useState, useRef, useMemo } from "react";

// Heart emoji options
const heartEmojis = ["💕", "💗", "💖", "❤️", "💘", "💝"];

export default function ValentinePage() {
  const [accepted, setAccepted] = useState(false);
  const [showForYou, setShowForYou] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [hasEscaped, setHasEscaped] = useState(false); // Track if button has escaped
  const containerRef = useRef<HTMLDivElement>(null);

  // Pre-generate random values to avoid hydration mismatch
  const backgroundHearts = useMemo(() =>
    [...Array(20)].map((_, i) => ({
      left: `${(i * 5 + 2) % 100}%`,
      top: `${(i * 7 + 3) % 100}%`,
      animationDelay: `${(i * 0.5) % 5}s`,
      animationDuration: `${10 + (i % 10)}s`,
      fontSize: `${10 + (i % 20)}px`,
      emoji: heartEmojis[i % 6],
    })), []
  );

  const celebrationHearts = useMemo(() =>
    [...Array(12)].map((_, i) => ({
      left: `${(i * 8 + 4) % 100}%`,
      animationDelay: `${(i * 0.25) % 3}s`,
      fontSize: `${10 + (i % 12)}px`,
      emoji: heartEmojis[i % 5],
    })), []
  );

  const forYouHearts = useMemo(() =>
    [...Array(8)].map((_, i) => ({
      left: `${(i * 12 + 6) % 100}%`,
      animationDelay: `${(i * 0.5) % 4}s`,
      fontSize: `${12 + (i % 10)}px`,
      emoji: heartEmojis[i % 5],
    })), []
  );

  // Function to move the "Nhi" button to a random position on the page
  const moveNoButton = () => {
    setHasEscaped(true); // Mark button as escaped
    const buttonWidth = 100;
    const buttonHeight = 44;
    const padding = 20;

    // Use viewport dimensions - account for mobile
    const maxX = window.innerWidth - buttonWidth - padding;
    const maxY = window.innerHeight - buttonHeight - padding;

    // Random position within viewport bounds
    const newX = padding + Math.random() * Math.max(maxX - padding, 50);
    const newY = padding + Math.random() * Math.max(maxY - padding, 50);

    setNoButtonPos({ x: newX, y: newY });
  };

  // Nhi Button Component - used both inline and floating
  const NhiButton = ({ isFloating = false }: { isFloating?: boolean }) => (
    <button
      onMouseEnter={moveNoButton}
      onTouchStart={moveNoButton}
      style={isFloating ? {
        position: "fixed",
        left: `${noButtonPos.x}px`,
        top: `${noButtonPos.y}px`,
        transition: "all 0.3s ease-out",
        zIndex: 50,
      } : undefined}
      className={`px-10 sm:px-12 py-3 sm:py-3.5 font-semibold rounded-full shadow-lg cursor-not-allowed select-none hover:shadow-xl text-base sm:text-lg
        ${isFloating
          ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white'
          : 'bg-white/90 text-rose-500 hover:bg-white'}`}
    >
      Nahi ji 🥲
    </button>
  );

  // Question Page - Heart Shape
  const QuestionPage = () => (
    <div ref={containerRef} className="heart-shape">
      {/* Heart content */}
      <div className="heart-content">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 drop-shadow-md">
          Hey Babe 💕
        </h1>

        <p className="text-xl sm:text-2xl font-cursive text-white/90 italic mb-1 drop-shadow">
          Will you be my
        </p>
        <p className="text-xl sm:text-2xl font-cursive text-white/90 italic mb-5 sm:mb-6 drop-shadow">
          valentine? <span className="text-yellow-200">❤️</span>
        </p>

        {/* Buttons container - stacked vertically */}
        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={() => setAccepted(true)}
            className="px-10 sm:px-12 py-3 sm:py-3.5 bg-white text-rose-500 font-semibold rounded-full 
                     shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300
                     hover:bg-rose-50 active:scale-95 text-base sm:text-lg"
          >
            Haanji 😊
          </button>

          {/* Nhi button - shown inline only when not escaped */}
          {!hasEscaped && <NhiButton />}
        </div>
      </div>
    </div>
  );

  // Celebration Page (1st image)
  const CelebrationPage = () => (
    <div className="w-full max-w-sm sm:max-w-md mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 text-center relative overflow-hidden">
      {/* Floating hearts animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {celebrationHearts.map((heart, i) => (
          <div
            key={i}
            className="absolute text-pink-400 animate-float-heart"
            style={{
              left: heart.left,
              animationDelay: heart.animationDelay,
              fontSize: heart.fontSize,
            }}
          >
            {heart.emoji}
          </div>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-2 left-2 text-pink-300 text-lg sm:text-xl">✨</div>
      <div className="absolute top-2 right-2 text-pink-300 text-lg sm:text-xl">✨</div>
      <div className="absolute bottom-2 left-2 text-rose-300 text-lg sm:text-xl">💐</div>
      <div className="absolute bottom-2 right-2 text-rose-300 text-lg sm:text-xl">💐</div>

      {/* Main content */}
      <div className="relative z-10">
        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent mb-4 sm:mb-6">
          I Know It! <span className="text-red-500">❤️</span>
        </h1>

        {/* Cute bunny illustration */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 sm:mb-6">
          <div className="absolute inset-0 bg-gradient-to-b from-pink-100 to-pink-200 rounded-full"></div>
          {/* Bunny body */}
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-16 sm:h-20 bg-gray-100 rounded-full shadow-md"></div>
          {/* Bunny head */}
          <div className="absolute bottom-10 sm:bottom-12 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-12 sm:h-16 bg-white rounded-full shadow-sm"></div>
          {/* Bunny ears */}
          <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-7 sm:-translate-x-8 w-4 sm:w-5 h-10 sm:h-12 bg-white rounded-full shadow-sm transform -rotate-12"></div>
          <div className="absolute bottom-20 sm:bottom-24 left-1/2 translate-x-3 w-4 sm:w-5 h-10 sm:h-12 bg-white rounded-full shadow-sm transform rotate-12"></div>
          {/* Inner ears */}
          <div className="absolute left-1/2 -translate-x-6 sm:-translate-x-7 w-1.5 sm:w-2 h-6 sm:h-8 bg-pink-200 rounded-full transform -rotate-12" style={{ bottom: "5rem" }}></div>
          <div className="absolute left-1/2 translate-x-4 sm:translate-x-5 w-1.5 sm:w-2 h-6 sm:h-8 bg-pink-200 rounded-full transform rotate-12" style={{ bottom: "5rem" }}></div>
          {/* Bunny eyes */}
          <div className="absolute bottom-14 sm:bottom-16 left-1/2 -translate-x-4 sm:-translate-x-5 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-800 rounded-full"></div>
          <div className="absolute bottom-14 sm:bottom-16 left-1/2 translate-x-2 sm:translate-x-3 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-800 rounded-full"></div>
          {/* Bunny blush */}
          <div className="absolute bottom-12 sm:bottom-14 left-1/2 -translate-x-7 sm:-translate-x-8 w-3 sm:w-4 h-1.5 sm:h-2 bg-pink-300 rounded-full opacity-60"></div>
          <div className="absolute bottom-12 sm:bottom-14 left-1/2 translate-x-3 sm:translate-x-4 w-3 sm:w-4 h-1.5 sm:h-2 bg-pink-300 rounded-full opacity-60"></div>
          {/* Bunny nose */}
          <div className="absolute bottom-12 sm:bottom-14 left-1/2 -translate-x-1 w-1.5 sm:w-2 h-1 sm:h-1.5 bg-pink-400 rounded-full"></div>
          {/* Heart in bunny's hands */}
          <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 text-xl sm:text-2xl animate-pulse">💖</div>
        </div>

        {/* Sweet message */}
        <p className="text-gray-600 text-xs sm:text-sm mb-2 px-2 sm:px-4">
          Mujhe to nahi mil paya mere jaisa koi... 💭
        </p>
        <p className="text-gray-500 text-xs mb-4 sm:mb-6 px-2 sm:px-4">
          Par aasha karta hu ki tumhe mile apne jaisa koi 🎀
        </p>

        {/* For you button */}
        <button
          onClick={() => setShowForYou(true)}
          className="px-8 sm:px-10 py-2.5 sm:py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-full 
                   shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300
                   hover:from-rose-600 hover:to-pink-600 text-sm sm:text-base"
        >
          For you <span className="text-base sm:text-lg">❤️</span>
        </button>
      </div>
    </div>
  );

  // For You Page - Beautiful love letter
  const ForYouPage = () => (
    <div className="w-full max-w-sm sm:max-w-lg mx-auto bg-gradient-to-br from-white via-pink-50 to-rose-50 rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 text-center relative overflow-hidden">
      {/* Sparkle decorations */}
      <div className="absolute top-2 sm:top-3 left-2 sm:left-3 text-yellow-400 text-lg sm:text-xl animate-pulse">✨</div>
      <div className="absolute top-2 sm:top-3 right-2 sm:right-3 text-yellow-400 text-lg sm:text-xl animate-pulse delay-150">✨</div>
      <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 text-pink-400 text-lg sm:text-xl animate-bounce">💖</div>
      <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 text-pink-400 text-lg sm:text-xl animate-bounce delay-200">💖</div>

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {forYouHearts.map((heart, i) => (
          <div
            key={i}
            className="absolute text-pink-300 animate-float-heart opacity-60"
            style={{
              left: heart.left,
              animationDelay: heart.animationDelay,
              fontSize: heart.fontSize,
            }}
          >
            {heart.emoji}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Header with heart */}
        <div className="mb-4 sm:mb-6">
          <span className="text-4xl sm:text-5xl">💌</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-red-400 bg-clip-text text-transparent mb-4 sm:mb-6">
          My Dearest Babe💕
        </h1>

        {/* Love letter content */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 shadow-inner border border-pink-100">
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 font-cursive sm:text-lg">
            "Tumhari muskurahat dekh kar lagta hai,<br />
            Duniya ki saari khushiyan mil gayi..." 🌸
          </p>

          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
            Tum mere liye sirf ek naam nahi ho, tum meri subah ki pehli dhoop ho,
            raat ki sabse chamakti sitara ho. ⭐
          </p>

          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
            Har pal tumhare saath, zindagi aur bhi khoobsurat lagti hai.
            Tumhari hasi meri duniya roshan karti hai. 🌷
          </p>

          <p className="text-rose-500 text-sm sm:text-base font-semibold">
            Forever & Always... 💝
          </p>
        </div>

        {/* Signature */}
        <div className="text-gray-500 text-xs sm:text-sm italic">
          ~ Tumhara hamesha ke liye 🥰
        </div>

        {/* Heart animation */}
        <div className="mt-4 sm:mt-6 flex justify-center gap-2">
          <span className="text-2xl sm:text-3xl animate-pulse">💖</span>
          <span className="text-3xl sm:text-4xl animate-bounce">💕</span>
          <span className="text-2xl sm:text-3xl animate-pulse delay-150">💖</span>
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-rose-300 flex items-center justify-center p-4">
      {/* Background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating background hearts */}
        {backgroundHearts.map((heart, i) => (
          <div
            key={i}
            className="absolute text-pink-300/40 animate-float-bg"
            style={{
              left: heart.left,
              top: heart.top,
              animationDelay: heart.animationDelay,
              animationDuration: heart.animationDuration,
              fontSize: heart.fontSize,
            }}
          >
            {heart.emoji}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {showForYou ? <ForYouPage /> : accepted ? <CelebrationPage /> : <QuestionPage />}
      </div>

      {/* Nhi Button - Floats around the entire page after escaping */}
      {!accepted && hasEscaped && <NhiButton isFloating />}
    </main>
  );
}
