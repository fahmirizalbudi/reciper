import React, { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Time02Icon, Bookmark02Icon, Image01Icon } from "hugeicons-react";
import { cn } from "./Button"; // Resuing the cn utility

export interface RecipeCardProps {
  title: string;
  imageUrl: string;
  time: string;
  difficulty: "Easy" | "Medium" | "Hard";
  className?: string;
}

const difficultyColors = {
  Easy: "text-green-600 font-medium",
  Medium: "text-yellow-600 font-medium",
  Hard: "text-red-600 font-medium",
};

export const RecipeCard: React.FC<RecipeCardProps> = ({
  title,
  imageUrl,
  time,
  difficulty,
  className,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={twMerge("group flex flex-col gap-4 appearance-none outline-none", className)}>
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-surface-muted shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group-hover:-translate-y-1">
        {isLoading && (
          <div className="absolute inset-0 animate-pulse bg-stone-200" />
        )}

        {/* Fallback pattern when image fails or isn't provided */}
        {!imageUrl || hasError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-stone-100 text-stone-400">
            <Image01Icon size={32} strokeWidth={1.5} className="opacity-50" />
          </div>
        ) : (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className={twMerge(
              "object-cover transition-transform duration-700 ease-out group-hover:scale-105",
              isLoading ? "opacity-0" : "opacity-100"
            )}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setHasError(true);
            }}
          />
        )}

        {/* Bookmark Button Hover State */}
        <button
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-[0_4px_15px_rgb(0,0,0,0.06)] flex items-center justify-center text-text-muted hover:text-primary-base transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 outline-none focus:ring-2 focus:ring-primary-base focus:ring-offset-2"
          aria-label="Save recipe"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 px-1">
        <h3 className="font-serif text-xl sm:text-2xl text-text-primary leading-tight group-hover:text-primary-base transition-colors line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center gap-3 text-sm font-medium text-text-muted">
          <span className="flex items-center gap-1.5">
            <Time02Icon size={16} strokeWidth={2} className="opacity-70" />
            {time}
          </span>
          <span className="w-1 h-1 rounded-full bg-stone-300" />
          <span className={difficultyColors[difficulty]}>
            {difficulty}
          </span>
        </div>
      </div>
    </div>
  );
};
