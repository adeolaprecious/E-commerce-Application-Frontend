import React, { useState } from "react";
import axios from "axios";
import logo1 from '../assets/images/logo1.png';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    try {
      const res = await axios.post("https://e-commerce-application-backend-u42p.onrender.com/api/chat", { message: input });
      const { reply, products } = res.data;

      let updatedMessages = [...newMessages, { sender: "bot", text: reply }];

      if (products && products.length > 0) {
        updatedMessages.push({
          sender: "bot",
          products: products
        });
      }

      setMessages(updatedMessages);
    } catch (err) {
      console.error(err);
      setMessages([...newMessages, { sender: "bot", text: "Sorry, I can’t respond right now." }]);
    }

    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 shadow-lg rounded-2xl w-96 p-4">
      <h2 className="text-amber-500 font-bold text-lg mb-2"><img src={{logo1}} alt="" /> Diva Assistant</h2>
      <div className="h-80 overflow-y-auto mb-2 p-2 border rounded-md bg-gray-50">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-3 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
            {msg.text && (
              <p
                className={`inline-block px-3 py-2 rounded-lg ${
                  msg.sender === "user" ? "bg-amber-400 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </p>
            )}

            {msg.products && (
              <div className="grid grid-cols-2 gap-2 mt-2">
                {msg.products.map((p, index) => (
                  <div key={index} className="bg-white rounded-xl border p-2 text-center">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-24 object-cover rounded-md mb-1"
                    />
                    <p className="text-xs font-bold">{p.name}</p>
                    <p className="text-xs text-amber-600 font-semibold">₦{p.price}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          className="flex-grow border rounded-l-lg p-2 text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me something..."
        />
        <button
          onClick={sendMessage}
          className="bg-amber-500 text-white px-4 rounded-r-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
