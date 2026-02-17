"use client";

import { useState, useEffect } from "react";
import FlashcardComponent from "@/components/Flashcard";
import { vocab9 } from "@/data/vocab9";

export default function Vocab9vocab9Page() {
  const [cards, setCards] = useState(vocab9);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  // 🔀 Shuffle function (no repeat)
  const shuffleCards = () => {
    const shuffled = [...vocab9].sort(() => Math.random() - 0.5);
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
    <div className="flex flex-col items-center justify-center min-h-[80vh] gap-8">
      <h1 className="text-4xl font-bold">
        Vocab Version 9
      </h1>

      {/* Progress Bar */}
      <div className="w-80">
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
      <div className="flex gap-6">
        <button
          onClick={prevCard}
          className="px-6 py-3 bg-white rounded-xl shadow hover:bg-blue-50"
        >
          Previous
        </button>

        <button
          onClick={shuffleCards}
          className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow hover:bg-purple-700"
        >
          Shuffle
        </button>

        <button
          onClick={nextCard}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
}
