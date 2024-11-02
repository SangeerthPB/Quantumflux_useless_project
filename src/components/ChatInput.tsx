import React from 'react';
import { Send } from 'lucide-react';

type ChatInputProps = {
  input: string;
  setInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
};

export default function ChatInput({ input, setInput, handleSubmit }: ChatInputProps) {
  return (
    <form onSubmit={handleSubmit} className="mt-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4">
      <div className="flex gap-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type something fun..."
          className="flex-1 p-4 rounded-full border-2 border-pink-200 focus:outline-none focus:border-pink-500 bg-white/50"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-teal-400 to-teal-500 text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <span>SEND</span>
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}