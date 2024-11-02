import React from 'react';

type HeaderProps = {
  userName: string;
};

export default function Header({ userName }: HeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm rounded-t-2xl">
      <div className="flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-pink-500"></div>
          <div className="w-3 h-3 rounded-full bg-teal-500"></div>
        </div>
        <span className="font-bold text-navy-900 text-xl">CHAT</span>
      </div>
      <div className="flex-1 max-w-[200px] mx-4">
        <div className="text-center py-2 px-4 rounded-full bg-white/90 text-navy-900 font-semibold">
          {userName ? `Chatting with ${userName}` : 'BOT'}
        </div>
      </div>
      <button className="bg-pink-500 text-white px-6 py-2 rounded-full font-bold hover:bg-pink-600 transition-colors">
        GAME
      </button>
    </div>
  );
}