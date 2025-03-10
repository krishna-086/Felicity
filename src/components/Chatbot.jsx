import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const faqData = [
  { question: "Hi", answer: "Hello, please let me know how can I help you" },
  { question: "How can I access the Virtual Labs?", answer: "You can access Virtual Labs through www.vlab.co.in with a PC or smartphone and internet." },
  { question: "Is it free to use?", answer: "Yes, Virtual Labs are free of cost." },
  { question: "What are the software requirements?", answer: "No specific software is required. Some labs may provide free downloadable software links." },
  { question: "When can we use the Virtual Labs?", answer: "Virtual Labs are available 24x7, including weekends." },
  { question: "How do I register for Virtual Labs?", answer: "Most labs don't require registration. Some may need a one-time sign-up on their respective websites." },
  { question: "What do I do if I am stuck?", answer: "You can email your queries to support@vlab.co.in." },
  { question: "How do I find a lab of my interest?", answer: "You can search by name or discipline on the Virtual Labs homepage." },
  { question: "How can my college enroll as a Nodal Centre?", answer: "Your institute can submit an Expression of Interest (EOI) form on www.vlab.co.in." },
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "Hello! How can I help you?", sender: "bot" }]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleUserMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    const lowerInput = input.toLowerCase();
    const matchedFaq = faqData.find((faq) => lowerInput.includes(faq.question.toLowerCase()));

    setTimeout(() => {
      const botResponse = matchedFaq
        ? { text: matchedFaq.answer, sender: "bot" }
        : { text: "I'm sorry, I don't have an answer for that. Please visit www.vlab.co.in for more info.", sender: "bot" };

      setMessages((prev) => [...prev, botResponse]);
    }, 500);

    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chatbot Button */}
      <button
  style={{ backgroundColor: "#085d90" }}
  className="text-white p-3 rounded-full shadow-lg transition-all flex items-center justify-center"
  onClick={toggleChat}
>
  <MessageCircle size={20} />
</button>


      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-96 bg-white rounded-lg shadow-lg flex flex-col fixed bottom-20 right-5">
          {/* Chat Header */}
          <div style={{ backgroundColor: "#085d90" }} className="text-white p-3 flex justify-between items-center rounded-t-lg">
  <span className="font-bold">VirtuBot</span>
  <button className="text-lg" onClick={toggleChat}>
    <X size={20} />
  </button>
</div>


          {/* Chat Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
          {messages.map((msg, index) => (
  <div
    key={index}
    className="p-2 rounded-lg max-w-xs"
    style={{
      backgroundColor: msg.sender === "bot" ? "#E5E7EB" : "#288ecb",
      color: msg.sender === "bot" ? "black" : "white",
      alignSelf: msg.sender === "bot" ? "flex-start" : "flex-end"
    }}
  >
    {msg.text}
  </div>
))}

          </div>

          {/* Chat Input */}
          <div className="p-3 border-t flex">
            <input
              type="text"
              className="flex-1 p-2 border rounded-lg focus:outline-none"
              placeholder="Ask a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleUserMessage()}
            />
            <button style={{ backgroundColor: "#96CC75" }}
              className="ml-2  text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all flex items-center"
              onClick={handleUserMessage}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
