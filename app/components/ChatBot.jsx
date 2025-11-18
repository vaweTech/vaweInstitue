"use client";
import { useState } from "react";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;

    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();

    const botMsg = { from: "bot", text: data.reply };
    setMessages((prev) => [...prev, botMsg]);

    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg"
      >
        Open Bot
      </button>

      {open && (
        <div className="fixed bottom-20 right-5 w-80 bg-white rounded-xl shadow-xl border">
          <div className="bg-blue-600 text-white p-3 flex justify-between rounded-t-xl">
            <h3 className="text-lg">VAWE BOT</h3>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          <div className="p-3 h-80 overflow-y-auto">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`my-2 p-2 rounded-lg ${
                  msg.from === "user"
                    ? "bg-blue-100 text-right"
                    : "bg-gray-200"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-3 flex gap-2">
            <input
              className="border w-full p-2 rounded"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type message..."
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-3 rounded"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}


// "use client";
// import { useState } from "react";

// export default function Bot() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   async function sendMessage() {
//     if (!input.trim()) return;

//     const userMsg = { sender: "user", text: input };
//     setMessages((prev) => [...prev, userMsg]);

//     const res = await fetch("/api/chat", {
//       method: "POST",
//       body: JSON.stringify({ message: input }),
//     });

//     const data = await res.json();

//     const botMsg = { sender: "bot", text: data.reply };
//     setMessages((prev) => [...prev, botMsg]);

//     setInput("");
//   }

//   return (
//     <div className="border rounded p-4 max-w-lg mx-auto mt-10 shadow">
//       <h2 className="text-xl font-bold mb-4">VAWE Institute Bot</h2>

//       <div className="h-80 overflow-y-auto border p-2 mb-4">
//         {messages.map((m, i) => (
//           <div
//             key={i}
//             className={`mb-2 ${
//               m.sender === "user" ? "text-right" : "text-left"
//             }`}
//           >
//             <span
//               className={`inline-block px-3 py-2 rounded ${
//                 m.sender === "user"
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-200"
//               }`}
//             >
//               {m.text}
//             </span>
//           </div>
//         ))}
//       </div>

//       <div className="flex gap-2">
//         <input
//           className="border p-2 rounded w-full"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ask the bot..."
//         />
//         <button
//           onClick={sendMessage}
//           className="bg-blue-600 text-white px-4 rounded"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }
