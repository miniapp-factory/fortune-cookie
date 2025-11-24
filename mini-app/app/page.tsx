import { useState } from "react";
import { description, title } from "@/lib/metadata";
import { generateMetadata } from "@/lib/farcaster-embed";
import { FortuneCookie } from "@/components/fortune-cookie";
import { FortunePopup } from "@/components/fortune-popup";
import { FortuneButton } from "@/components/fortune-button";

export { generateMetadata };

export default function Home() {
  const fortunes = [
    "You will find a pleasant surprise today.",
    "A new opportunity is on the horizon.",
    "Laughter is the best medicine.",
    "Your creativity will shine.",
    "A small act of kindness will be rewarded.",
    "Good fortune is coming your way.",
    "You will achieve something great.",
    "A bright future awaits you.",
    "Your smile will brighten someone's day.",
    "Believe in yourself and succeed."
  ];

  const [fortune, setFortune] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const getRandomFortune = () => {
    const random = fortunes[Math.floor(Math.random() * fortunes.length)];
    setFortune(random);
    setShowPopup(true);
  };

  return (
    <main className="flex flex-col gap-6 place-items-center place-content-center px-4 grow min-h-screen bg-gradient-to-b from-yellow-100 to-orange-200">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
      <FortuneCookie onClick={getRandomFortune} />
      {showPopup && fortune && (
        <FortunePopup fortune={fortune} onClose={() => setShowPopup(false)} />
      )}
      <FortuneButton onClick={getRandomFortune} />
    </main>
  );
}
