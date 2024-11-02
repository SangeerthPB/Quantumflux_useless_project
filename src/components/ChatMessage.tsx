import React from 'react';

type ChatMessageProps = {
  message: string;
  isBot: boolean;
};

export default function ChatMessage({ message, isBot }: ChatMessageProps) {
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} gap-3 items-end`}>
      {isBot && (
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>
      )}
      <div
        className={`max-w-[70%] p-4 rounded-2xl ${
          isBot
            ? 'bg-white text-navy-900'
            : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
        }`}
      >
        <p className="text-lg">{message}</p>
      </div>
      {!isBot && (
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>
      )}
    </div>
  );
}