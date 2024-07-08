"use client";

import { useState } from "react";
import ChatBubble from "@/components/ChatBubble";
import { ChatBox } from "@/components/ChatBox";
import WeeklyCalendar from "@/components/WeeklyCalendar";
import { AiCompanion } from "@/components/AiCompanion";

const initialMessages = [
  { text: "Hi there! How are you?", isSender: false },
  { text: "Great", isSender: true },
  { text: "Congratulations on your workout!", isSender: false },
  {
    text: "Thank you! But I would like to remove one session this week.",
    isSender: true,
  },
  { text: "Hi there! How are you?", isSender: false },
];

export default function Home() {
  const [messages, setMessages] = useState(initialMessages);
  const handleSendMessage = (message: string) => {
    setMessages([...messages, { text: message, isSender: true }]);
  };

  const lastMessage =
    messages.length > 0 ? messages[messages.length - 1] : null;

  return (
    <div className="h-screen flex flex-col justify-center items-center p-4 space-y-4">
      <div className="flex-1 flex flex-col justify-center items-center">
        {lastMessage && (
          <ChatBubble text={lastMessage.text} isSender={lastMessage.isSender} />
        )}
        <div className="flex-1 flex justify-center items-center">
          <AiCompanion />
        </div>
        <div className="flex-1 flex justify-center items-center">
          <WeeklyCalendar />
        </div>
        <div className="flex-1 flex justify-center items-center">
          <ChatBox onSend={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}
