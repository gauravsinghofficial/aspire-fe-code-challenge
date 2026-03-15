import { useRef } from "react";
import { PaymentCard as PaymentCardType } from "@/types/card";
import { PaymentCard } from "./PaymentCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CardCarouselProps {
  cards: PaymentCardType[];
}

export const CardCarousel: React.FC<CardCarouselProps> = ({ cards }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      const newScrollPosition =
        direction === "left"
          ? carouselRef.current.scrollLeft - scrollAmount
          : carouselRef.current.scrollLeft + scrollAmount;

      carouselRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full bg-gray-50 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Cards</h2>

      <div className="relative">
        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
          style={{ scrollBehavior: "smooth" }}
        >
          {cards.map((card) => (
            <div key={card.id} className="flex-shrink-0">
              <PaymentCard card={card} />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {cards.length > 2 && (
          <>
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition-colors shadow-md"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition-colors shadow-md"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </>
        )}
      </div>

      {/* Empty State */}
      {cards.length === 0 && (
        <div className="flex items-center justify-center h-64 text-gray-500">
          <div className="text-center">
            <p className="text-lg font-medium mb-2">No cards yet</p>
            <p className="text-sm">Add your first card to get started</p>
          </div>
        </div>
      )}
    </div>
  );
};
