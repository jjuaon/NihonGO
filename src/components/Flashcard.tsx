"use client";

export type Flashcard = {
  id: number;
  japanese: string;
  pronounce: string;
  meaning: string;
};

type Props = {
  card: Flashcard;
  flipped: boolean;
  onFlip: () => void;
};

export default function FlashcardComponent({
  card,
  flipped,
  onFlip,
}: Props) {
  return (
    <div
      onClick={onFlip}
      className="w-full sm:w-80 md:w-96 h-48 bg-white shadow-lg rounded-xl flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105 select-none"
    >
      {!flipped ? (
        <div className="text-center">
          <p className="text-xl sm:text-3xl font-bold text-black">
            {card.japanese}
          </p>
          <p className="text-gray-500 text-sm sm:text-base">{card.pronounce}</p>
        </div>
      ) : (
        <p className="text-xl sm:text-2xl font-semibold text-blue-600">
          {card.meaning}
        </p>
      )}
    </div>
  );
}
