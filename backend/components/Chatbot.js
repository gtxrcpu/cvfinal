"use client";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FiMessageSquare } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export default function Chatbot({ darkMode }) {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    fetchHistory();
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const fetchHistory = async () => {
    try {
      const res = await axios.get("http://localhost:5000/chatbot/history");
      const data = res.data.reverse();
      // Gabungkan userMessage & botReply berpasangan
      const formattedHistory = data.flatMap((msg) => [
        { sender: "user", text: msg.userMessage },
        { sender: "bot", text: msg.botReply },
      ]);
      setMessages(formattedHistory);
    } catch (err) {
      console.error("Error fetching chat history:", err);
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      const res = await axios.post("http://localhost:5000/chatbot/ask", {
        message: userMsg.text,
      });
      const botReply = { sender: "bot", text: res.data.botReply };
      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      console.error("Error sending chat:", err);
    }
  };

  return (
    <>
      {!showChat && (
        <div
          onClick={() => setShowChat(true)}
          className="fixed bottom-6 right-6 cursor-pointer bg-blue-500 p-4 rounded-full shadow-xl hover:bg-blue-600 text-white text-3xl z-50"
        >
          <FiMessageSquare />
        </div>
      )}

      {showChat && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className={`fixed bottom-20 right-6 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 w-80 h-[500px] flex flex-col z-50`}
        >
          <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
            <h2 className="font-semibold text-lg text-gray-800 dark:text-white">
              AI Chatbot
            </h2>
            <button
              onClick={() => setShowChat(false)}
              className="text-gray-500 hover:text-red-500"
            >
              <IoClose size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 text-sm rounded-md max-w-[80%] break-words ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white ml-auto"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white mr-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div className="flex border-t dark:border-gray-700 p-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-grow px-3 py-2 rounded-l-md border dark:border-gray-700 focus:outline-none dark:bg-gray-700 dark:text-white"
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
