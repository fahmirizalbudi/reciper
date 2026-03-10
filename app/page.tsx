import React from "react";
import Image from "next/image";
import { Button } from "./components/ui/Button";
import { RecipeCarousel } from "./components/ui/RecipeCarousel";
import { BookOpen01Icon, Settings01Icon, Link04Icon, Search01Icon } from "hugeicons-react";

// Mock data for the carousel
const FEATURED_RECIPES = [
  {
    id: 1,
    title: "Classic Margherita Pizza with Heirloom Tomatoes",
    time: "45 min",
    difficulty: "Medium" as const,
    imageUrl: "https://images.unsplash.com/photo-1604068549290-dea0e4a30536?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Wild Mushroom Risotto with Truffle Oil",
    time: "1 hr 15 min",
    difficulty: "Hard" as const,
    imageUrl: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Simple Lemon Herb Roasted Chicken",
    time: "1 hr",
    difficulty: "Easy" as const,
    imageUrl: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8dd?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Avocado Toast with Poached Egg and Chili Flakes",
    time: "15 min",
    difficulty: "Easy" as const,
    imageUrl: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Decadent Chocolate Lava Cake",
    time: "30 min",
    difficulty: "Medium" as const,
    imageUrl: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=800&auto=format&fit=crop",
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background relative flex flex-col selection:bg-primary-subtle selection:text-primary-hover">

      {/* --- Ambient Background --- */}
      <div className="absolute top-0 inset-x-0 h-screen overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary-subtle/40 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-stone-200/50 blur-[100px] rounded-full" />
      </div>

      {/* --- Global Navbar --- */}
      <nav className="fixed top-0 inset-x-0 z-50 h-20 bg-white/80 backdrop-blur-xl shadow-[0_4px_20px_rgb(0,0,0,0.06)]">
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="relative w-8 h-8 shadow-[0_4px_10px_rgb(234,88,12,0.3)] rounded-full">
              <Image src="/logo.svg" alt="Culinaire Logo" fill className="object-cover" />
            </div>
            <span className="font-serif text-xl font-semibold text-text-primary tracking-tight">
              Culinaire
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="primary">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <main className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 flex flex-col items-center text-center relative z-10 w-full max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border shadow-sm text-text-primary text-sm font-medium mb-8">
          <span className="text-primary-base">✨</span> Introducing Culinary AI
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-text-primary tracking-tight max-w-4xl mb-8 leading-[1.05]">
          Read recipes, <br className="hidden md:block" />
          <span className="text-primary-base italic">not life stories.</span>
        </h1>

        <p className="text-lg md:text-xl text-text-muted max-w-2xl mb-12 font-sans leading-relaxed">
          The elegant digital cookbook for home chefs. Strip away the clutter, organize your favorites, and cook with absolute clarity.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button variant="primary" size="lg" className="w-full sm:w-auto px-10">
            Start Your Cookbook
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white/50 backdrop-blur-sm">
            View Pricing
          </Button>
        </div>
      </main>

      {/* --- Featured Recipes Carousel --- */}
      <section id="discover" className="w-full max-w-[1400px] mx-auto py-12 md:py-20 overflow-hidden pl-6 md:pl-12">
        <div className="flex items-end justify-between pr-6 md:pr-12 mb-8">
          <div>
            <h2 className="text-3xl font-serif text-text-primary mb-2">Editor's Picks</h2>
            <p className="text-text-muted">Inspiration for your next meal.</p>
          </div>
          <Button variant="ghost" className="hidden sm:flex">View all templates &rarr;</Button>
        </div>

        <RecipeCarousel recipes={FEATURED_RECIPES} />
      </section>

      {/* --- Features Bento Grid --- */}
      <section id="features" className="py-24 bg-background relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-5xl text-text-primary mb-4">Crafted for the kitchen.</h2>
            <p className="text-text-muted text-lg font-medium">Designed to stay out of your way when your hands are covered in flour, and give you extreme power when you're meal planning.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="md:col-span-2 p-8 md:p-12 rounded-[2rem] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] group hover:shadow-[0_20px_40px_rgb(234,88,12,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden relative min-h-[320px]">
              <div className="relative z-10 w-full md:w-2/3">
                <div className="w-12 h-12 rounded-xl bg-white shadow-[0_4px_15px_rgb(0,0,0,0.05)] flex items-center justify-center mb-6 text-text-primary">
                  <BookOpen01Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-text-primary mb-3">Distraction-free reading.</h3>
                <p className="text-text-muted leading-relaxed font-medium">No ads, no popups. Just beautiful typography and step-by-step clarity designed specifically for iPads and kitchen tablets.</p>
              </div>
              {/* Decorative gradient glow */}
              <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary-subtle rounded-full blur-[100px] opacity-0 group-hover:opacity-60 transition-opacity duration-700"></div>
            </div>

            {/* Feature 2 */}
            <div className="p-8 md:p-12 rounded-[2rem] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] group hover:shadow-[0_20px_40px_rgb(234,88,12,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden min-h-[320px] flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-white shadow-[0_4px_15px_rgb(0,0,0,0.05)] flex items-center justify-center mb-6 text-text-primary">
                <Settings01Icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl text-text-primary mb-3">Smart Scaling</h3>
              <p className="text-text-muted font-medium">Instantly scale yields from 2 servings up to 20 with zero manual math.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 md:p-12 rounded-[2rem] bg-primary-base text-white shadow-[0_8px_30px_rgb(234,88,12,0.2)] hover:shadow-[0_20px_40px_rgb(234,88,12,0.3)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group min-h-[320px] flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-primary-hover shadow-[0_4px_15px_rgb(0,0,0,0.1)] flex items-center justify-center mb-6 text-white">
                <Link04Icon size={24} strokeWidth={1.75} />
              </div>
              <h3 className="font-serif text-2xl mb-3">1-Click Import</h3>
              <p className="text-primary-subtle font-medium">Paste any recipe URL and watch it auto-format perfectly into your vault in seconds.</p>
            </div>

            {/* Feature 4 */}
            <div className="md:col-span-2 p-8 md:p-12 rounded-[2rem] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] group hover:shadow-[0_20px_40px_rgb(234,88,12,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden min-h-[320px]">
              <div className="w-12 h-12 rounded-xl bg-white shadow-[0_4px_15px_rgb(0,0,0,0.05)] flex items-center justify-center mb-6 text-text-primary">
                <Search01Icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-text-primary mb-3">Powerful Search & Tags</h3>
              <p className="text-text-muted max-w-md leading-relaxed font-medium">Find that specific "30-minute vegan pasta" you made last month instantly. Stop endlessly scrolling through bookmarks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-background py-16 border-t border-border mt-auto relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-text-primary flex items-center justify-center text-white font-serif font-bold text-sm">
              C
            </div>
            <span className="font-serif font-medium text-text-primary text-lg">Culinaire &copy; 2026</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-text-muted">
            <a href="#" className="hover:text-primary-base transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary-base transition-colors">Terms</a>
            <a href="#" className="hover:text-primary-base transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}