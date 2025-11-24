'use client';
import { FC } from 'react';

export interface FortuneCookieProps {
  onClick: () => void;
}

export const FortuneCookie: FC<FortuneCookieProps> = ({ onClick }) => (
  <div
    className="cursor-pointer text-6xl transition-transform duration-200 hover:scale-110"
    onClick={onClick}
  >
    🍪
  </div>
);
