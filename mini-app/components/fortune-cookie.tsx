'use client';
import { FC } from 'react';

export interface FortuneCookieProps {
  onClick: () => void;
  fortuneType: 'lucky' | 'unlucky';
}

export const FortuneCookie: FC<FortuneCookieProps> = ({ onClick, fortuneType }) => {
  const emoji = fortuneType === 'lucky' ? '🍀' : '🍂';
  return (
    <div
      className="cursor-pointer text-6xl transition-transform duration-200 hover:scale-110"
      onClick={onClick}
    >
      {emoji}
    </div>
  );
};
