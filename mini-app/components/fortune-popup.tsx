'use client';
import { FC } from 'react';

export interface FortunePopupProps {
  fortune: string;
  onClose: () => void;
}

export const FortunePopup: FC<FortunePopupProps> = ({ fortune, onClose }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs text-center border-2 border-yellow-400">
    <p className="text-lg font-semibold">{fortune}</p>
    <button
      className="mt-4 px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition-colors"
      onClick={onClose}
    >
      Close
    </button>
  </div>
);
