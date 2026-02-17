"use client";

import { useState, useEffect } from "react";
import FlashcardComponent from "@/components/Flashcard";
import { vocab1 } from "@/data/vocab1";

export default function Vocab1Page() {
  const [cards, setCards] = useState(vocab1);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  // 🔀 Shuffle function (no repeat)
  const shuffleCards = () => {
    const shuffled = [...vocab1].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setIndex(0);
    setFlipped(false);
  };

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % cards.length);
    setFlipped(false);
  };

  const prevCard = () => {
    setIndex((prev) =>
      prev === 0 ? cards.length - 1 : prev - 1
    );
    setFlipped(false);
  };

  // ⌨️ Keyboard Controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        setFlipped((prev) => !prev);
      }

      if (e.code === "ArrowRight") {
        nextCard();
      }

      if (e.code === "ArrowLeft") {
        prevCard();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [cards]);

  const progress = ((index + 1) / cards.length) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] gap-8 p-4 sm:p-8">
      <h1 className="text-2xl sm:text-4xl font-bold text-center">
        Vocab Version 1
      </h1>

      {/* Progress Bar */}
      <div className="w-full sm:w-80">
        <div className="flex justify-between text-xs text-slate-500 mb-1">
          <span>Progress</span>
          <span>
            {index + 1} / {cards.length}
          </span>
        </div>

        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Flashcard */}
      <FlashcardComponent
        card={cards[index]}
        flipped={flipped}
        onFlip={() => setFlipped(!flipped)}
      />

      {/* Controls */}
      <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
        <button
          onClick={prevCard}
          className="px-4 py-2 sm:px-6 sm:py-3 bg-white rounded-xl shadow hover:bg-blue-50"
        >
          Previous
        </button>

        <button
          onClick={shuffleCards}
          className="px-4 py-2 sm:px-6 sm:py-3 bg-purple-600 text-white rounded-xl shadow hover:bg-purple-700"
        >
          Shuffle
        </button>

        <button
          onClick={nextCard}
          className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
}
