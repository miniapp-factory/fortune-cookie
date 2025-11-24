'use client';
import { FC } from 'react';

export interface FortuneButtonProps {
  onClick: () => void;
}

export const FortuneButton: FC<FortuneButtonProps> = ({ onClick }) => (
  <button
    className="px-6 py-3 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition-colors"
    onClick={onClick}
  >
    New Fortune
  </button>
);
