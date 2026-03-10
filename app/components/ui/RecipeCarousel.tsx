"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft01Icon, ArrowRight01Icon } from "hugeicons-react";
import { RecipeCard, RecipeCardProps } from "./RecipeCard";

interface RecipeCarouselProps {
  recipes: (RecipeCardProps & { id: string | number })[];
}

export const RecipeCarousel: React.FC<RecipeCarouselProps> = ({ recipes }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      skipSnaps: false,
      dragFree: true,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative group w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4 md:-ml-6 backface-hidden touch-pan-y">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="pl-4 md:pl-6 min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[60%] md:basis-[45%] lg:basis-[30%]"
            >
              <RecipeCard
                title={recipe.title}
                imageUrl={recipe.imageUrl}
                time={recipe.time}
                difficulty={recipe.difficulty}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons - Visible on hover/desktop */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center text-text-primary opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white disabled:opacity-0 z-10 hidden md:flex outline-none focus:ring-2 focus:ring-primary-base"
        aria-label="Previous recipe"
      >
        <ArrowLeft01Icon size={20} strokeWidth={2} />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center text-text-primary opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white disabled:opacity-0 z-10 md:hidden group-hover:md:flex outline-none focus:ring-2 focus:ring-primary-base"
        aria-label="Next recipe"
      >
        <ArrowRight01Icon size={20} strokeWidth={2} />
      </button>

      {/* Fade overlay on the right edge to signify more content */}
      <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  );
};
