'use client';
import { FC, useState } from 'react';
import { FortuneCookie } from '@/components/fortune-cookie';
import { FortunePopup } from '@/components/fortune-popup';
import { FortuneButton } from '@/components/fortune-button';
import { title, description } from '@/lib/metadata';

export const FortuneApp: FC = () => {
  const fortunes = [
    { text: "You will find a pleasant surprise today.", type: "lucky" },
    { text: "A new opportunity is on the horizon.", type: "lucky" },
    { text: "Laughter is the best medicine.", type: "lucky" },
    { text: "Your creativity will shine.", type: "lucky" },
    { text: "A small act of kindness will be rewarded.", type: "lucky" },
    { text: "Good fortune is coming your way.", type: "lucky" },
    { text: "You will achieve something great.", type: "lucky" },
    { text: "A bright future awaits you.", type: "lucky" },
    { text: "Your smile will brighten someone's day.", type: "lucky" },
    { text: "Believe in yourself and succeed.", type: "lucky" },
    { text: "You will face a challenging obstacle today.", type: "unlucky" },
    { text: "An unexpected setback may occur.", type: "unlucky" },
    { text: "You might encounter a small misfortune.", type: "unlucky" }
  ];

  const [fortune, setFortune] = useState<{ text: string; type: 'lucky' | 'unlucky' } | null>(null);
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
      <FortuneCookie onClick={getRandomFortune} fortuneType={fortune?.type ?? 'lucky'} />
      {showPopup && fortune && (
        <FortunePopup fortune={fortune.text} onClose={() => setShowPopup(false)} />
      )}
      <FortuneButton onClick={getRandomFortune} />
    </main>
  );
};
