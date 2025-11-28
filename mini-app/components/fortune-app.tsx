'use client';
import { FC, useState } from 'react';
import { FortuneCookie } from '@/components/fortune-cookie';
import { FortunePopup } from '@/components/fortune-popup';
import { FortuneButton } from '@/components/fortune-button';
import { title, description } from '@/lib/metadata';

export const FortuneApp: FC = () => {
  const fortunes: { text: string; type: "lucky" | "unlucky" }[] = [
    { text: "You will find a pleasant surprise today. Take a moment to enjoy a small treat or a friendly chat; it will brighten your day.", type: "lucky" },
    { text: "A new opportunity is on the horizon. Keep an eye out for a project that aligns with your passions; it could lead to growth.", type: "lucky" },
    { text: "Laughter is the best medicine. Share a joke or watch a funny clip; it will lift your spirits and energize you.", type: "lucky" },
    { text: "Your creativity will shine. Try a new hobby or brainstorm ideas; your fresh perspective will impress others.", type: "lucky" },
    { text: "A small act of kindness will be rewarded. Offer help to a colleague or neighbor; the gratitude you receive will be worth it.", type: "lucky" },
    { text: "Good fortune is coming your way. Stay open to unexpected invitations; they may bring valuable connections.", type: "lucky" },
    { text: "You will achieve something great. Focus on your goals and break them into steps; progress will feel rewarding.", type: "lucky" },
    { text: "A bright future awaits you. Visualize your success and stay persistent; the path will unfold.", type: "lucky" },
    { text: "Your smile will brighten someone's day. Share it freely; it will create a ripple of positivity.", type: "lucky" },
    { text: "Believe in yourself and succeed. Trust your abilities and take the next step; confidence fuels achievement.", type: "lucky" },
    { text: "You will face a challenging obstacle today. Approach it methodically, break it into smaller tasks, and seek support if needed.", type: "unlucky" },
    { text: "An unexpected setback may occur. Stay calm, reassess your plan, and adapt; resilience turns setbacks into learning.", type: "unlucky" },
    { text: "You might encounter a small misfortune. Keep a backup plan ready; a quick adjustment can keep you on track.", type: "unlucky" }
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
