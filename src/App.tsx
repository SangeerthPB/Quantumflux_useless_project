import React, { useState } from 'react';
import Header from './components/Header';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';

type Message = {
  text: string;
  isBot: boolean;
};

function App() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hey there! I'm your friendly neighborhood chat buddy! What's your name? 😊", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [userName, setUserName] = useState('');

  const generateResponse = (userInput: string): string => {
    // If we don't have the user's name yet, save it and respond accordingly
    if (!userName) {
      const name = userInput.trim().split(' ')[0];
      setUserName(name);
      return `Nice to meet you, ${name}! 🎉 I can tell we're going to be great friends! Want to hear a joke or just chat?`;
    }

    // Check for specific keywords in user input
    const input = userInput.toLowerCase();
    
    if (input.includes('joke') || input.includes('funny')) {
      const jokes = [
        `Hey ${userName}, why don't programmers like nature? It has too many bugs! 🐛`,
        `${userName}, what did the chatbot say to the coffee machine? "You're brewtiful!" ☕`,
        "Why did the scarecrow win an award? Because he was outstanding in his field! 🌾",
        "What do you call a bear with no teeth? A gummy bear! 🐻",
      ];
      return jokes[Math.floor(Math.random() * jokes.length)];
    }

    if (input.includes('how are you') || input.includes('how do you feel')) {
      const feelings = [
        `Running at optimal happiness levels, ${userName}! My joy processor is at 110%! 😄`,
        "I'm feeling electric today! ⚡ Thanks for asking!",
        `Better now that we're chatting, ${userName}! 🌟`,
      ];
      return feelings[Math.floor(Math.random() * feelings.length)];
    }

    if (input.includes('bye') || input.includes('goodbye')) {
      return `Aww, leaving so soon, ${userName}? Remember, every goodbye is just a "see you later" in disguise! 👋✨`;
    }

    // Default responses for general conversation
    const responses = [
      `${userName}, that's fascinating! Tell me more! 🎯`,
      "That reminds me of the time I tried to download patience.exe - it took forever! 😄",
      `You know what, ${userName}? You're way more fun than my other chat friends (don't tell them I said that!) 🤫`,
      "I'm supposed to be a serious chatbot, but where's the fun in that? 🎪",
      `${userName}, you're making this conversation more entertaining than a cat video marathon! 😺`,
      "Processing your message with my advanced humor algorithms... Beep boop... Just kidding, I'm just naturally funny! 🤖",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, isBot: false }]);
    setInput('');

    // Add bot response after a short delay
    setTimeout(() => {
      const response = generateResponse(input);
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-400 to-teal-400 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl">
          <Header userName={userName} />
          
          <div className="p-6 h-[60vh] overflow-y-auto space-y-6 bg-gradient-to-b from-white/10 to-white/5">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                message={message.text}
                isBot={message.isBot}
              />
            ))}
          </div>

          <div className="p-4">
            <ChatInput
              input={input}
              setInput={setInput}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;