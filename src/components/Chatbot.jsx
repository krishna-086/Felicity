import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const faqData = [
  { 
    question: "What is Virtual Labs?", 
    answer: "Virtual Labs project is an initiative of Ministry of Education (MoE), Government of India under the aegis of National Mission on Education through Information and Communication Technology (NMEICT). This project is a consortium activity of twelve participating institutes, with IIT Delhi as the coordinating institute. It represents a paradigm shift in ICT-based education and introduces remote-experimentation for the first time.Under the Virtual Labs project, over 100 Virtual Labs consisting of approximately 700+ web-enabled experiments were designed for remote-operation and viewing.",
    keywords: ["tell me about virtual labs", "what is vlab ", "what is virtual lab", ]
  },
  { 
    question: "How can I access the Virtual Labs?", 
    answer: "You can access Virtual Labs through https://www.vlab.co.in/ with a PC or smartphone and internet.",
    keywords: ["access", "how", "visit", "open","how can i use virtual lab","labs","vlabs", "virtual labs","virtual lab"]
  },
  
    { 
      "question": "Where can I find different domains like Computer Science or Electronics in Virtual Labs?", 
      "answer": "You can find different domains in Virtual Labs by clicking on the dedicated 'Virtual Labs' tab, which will display various domain cards such as Electronics & Communication, Computer Science, and more.",
      "keywords": ["domains", "departments", "category", "fields", "computer science", "electronics", "mechanical", "civil", "virtual labs", "engineering", "subject", "topics"]
    },
    { 
      "question": "How do I access a specific lab, such as the Data Structures Lab?", 
      "answer": "To access a specific lab, click on the relevant domain card, then choose the lab from the displayed list.",
      "keywords": ["specific lab", "data structures", "access", "find", "search", "AI lab", "computer science lab", "open", "navigate", "select", "list", "category"]
    },
    { 
      "question": "Where can I find the list of available experiments in a lab?", 
      "answer": "After selecting a lab, you can find the list of available experiments in the left sidebar on desktop or in the mobile navigation menu.",
      "keywords": ["experiments", "list", "available", "where", "find", "view", "check", "all", "topics", "modules", "labs", "virtual lab", "subjects"]
    },
    { 
      "question": "How can I quickly access the Demo and Practice sections of an experiment like Bubble Sort?", 
      "answer": "You can quickly access the Demo and Practice sections through direct buttons or by selecting them from the experiment’s main page.",
      "keywords": ["quickly", "demo", "practice", "experiment", "how", "access", "shortcut", "fast", "Bubble Sort", "direct", "open", "steps"]
    },
    { 
      "question": "Why do I have to click multiple times to access the Bubble Sort Practice section? Is there an easier way?", 
      "answer": "We are improving navigation by making Demo and Practice sections more accessible via quick links and bottom navigation bars.",
      "keywords": ["multiple clicks", "too many steps", "difficult", "trouble", "Bubble Sort", "practice", "shortcut", "navigation", "direct", "easy", "one-click", "improve"]
    },
    { 
      "question": "How can I find frequently used experiments or high-rated labs?", 
      "answer": "You can use the filter options to sort labs based on 'Most Popular' or 'Most Rated' to quickly find frequently used experiments.",
      "keywords": ["filter", "most popular", "most rated", "best", "top labs", "frequently used", "search", "rank", "rating", "recommendation"]
    },
    { 
      "question": "Is there a way to make the navigation menu more visible on mobile devices?", 
      "answer": "Yes, we are optimizing the mobile interface by using a bottom navigation bar or visible tabs instead of a hidden menu.",
      "keywords": ["mobile", "navigation", "menu", "visible", "easy access", "hidden", "hamburger menu", "problem", "tab", "UI", "user interface"]
    },
    { 
      "question": "Can I access Virtual Labs without opening a hamburger menu on mobile?", 
      "answer": "Yes, the new design includes a persistent navigation bar or swipeable tabs for easier access without opening the hamburger menu.",
      "keywords": ["hamburger menu", "mobile", "navigation", "without", "how", "problem", "access", "direct", "menu", "tabs", "easier", "UI"]
    },
    { 
      "question": "How can my college enroll as a Nodal Centre for Virtual Labs?", 
      "answer": "Your college can apply to become a Nodal Centre for Virtual Labs by visiting https://www.vlab.co.in/ and following the registration process.",
      "keywords": ["Nodal Centre", "enroll", "college", "how", "apply", "virtual labs", "institution", "registration", "eligibility", "process", "join", "partnership"]
    },
    { 
      "question": "How can i access the bubble sort experiment?", 
      "answer": "Click on this link to go to bubble sort experiment: http://localhost:5173/exp/bubble-sort/practice",
      "keywords": ["Bubble sort", "sort", "practice bubble sort", "i want to practice bubble sort"]
    },
  
  
  { 
    question: "Is it free to use?", 
    answer: "Yes, Virtual Labs are free of cost.",
    keywords: ["free", "cost", "charge", "payment","is it free"]
  },
  { 
    question: "What are the software requirements?", 
    answer: "No specific software is required. Some labs may provide free downloadable software links.",
    keywords: ["software", "requirements", "download"]
  },
  { 
    question: "When can we use the Virtual Labs?", 
    answer: "Virtual Labs are available 24x7, including weekends.",
    keywords: ["when", "available", "time", "hours"]
  },
  { 
    question: "How do I register for Virtual Labs?", 
    answer: "Most labs don't require registration. Some may need a one-time sign-up on their respective websites.",
    keywords: ["register", "sign up", "account"]
  },
  { 
    question: "What do I do if I am stuck?", 
    answer: "You can email your queries to support@vlab.co.in.",
    keywords: ["help", "stuck", "support"]
  },
  { 
    question: "How do I find a lab of my interest?", 
    answer: "You can search by name or discipline on the Virtual Labs homepage.",
    keywords: ["find", "search", "interest"]
  },
  { 
    question: "How can my college enroll as a Nodal Centre?", 
    answer: "Your institute can submit an Expression of Interest (EOI) form on www.vlab.co.in.",
    keywords: ["enroll", "college", "nodal centre"]
  }
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
    
    // Check for keyword matches
    const matchedFaq = faqData.find((faq) => 
      faq.keywords.some(keyword => lowerInput.includes(keyword))
    );

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
        className="text-white p-4 rounded-full shadow-lg transition-all flex items-center justify-center fixed bottom-15 right-5"
        onClick={toggleChat}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-96 bg-white rounded-lg shadow-lg flex flex-col fixed bottom-28 right-5">
          {/* Chat Header */}
          <div style={{ backgroundColor: "#085d90" }} className="text-white p-3 flex justify-between items-center rounded-t-lg">
            <span className="font-bold">VirtuBot</span>
            <button className="text-lg" onClick={toggleChat}>
              <X size={20} />
            </button>
          </div>

          {/* Chat Messages */}
<div className="flex-1 p-3 overflow-y-auto space-y-2">
  {messages.map((msg, index) => {
    // Regex to detect URLs in the message
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    
    // Splitting text into parts, replacing links with anchor tags
    const formattedText = msg.text.split(urlRegex).map((part, i) => 
      urlRegex.test(part) ? (
        <a 
          key={i} 
          href={part} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 underline"
        >
          {part}
        </a>
      ) : (
        part
      )
    );

    return (
      <div
        key={index}
        className="p-2 rounded-lg max-w-xs"
        style={{
          backgroundColor: msg.sender === "bot" ? "#E5E7EB" : "#288ecb",
          color: msg.sender === "bot" ? "black" : "white",
          alignSelf: msg.sender === "bot" ? "flex-start" : "flex-end"
        }}
      >
        {formattedText}
      </div>
    );
  })}
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
              className="ml-2 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all flex items-center"
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
