import { useEffect, useState } from "react";

import { io } from "socket.io-client";
import { CreateProblem } from "./CreateProblem";

export const Admin = () => {
    const [socket, setSocket] = useState<null | any>(null);
    const [quizId, setQuizId] = useState("");
    const [roomId, setRoomId] = useState("");

    useEffect(() => {
        const socket = io("http://localhost:8080");
        setSocket(socket)

        socket.on("connect", () => {
            console.log(socket.id);
            socket.emit("joinAdmin", {
                password: "ADMIN_PASSWORD"
            })
        });
        
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            {!quizId ? (
              <div>
                <h1 className="text-2xl font-semibold mb-4">Create Quiz Room</h1>
                <input
                  type="text"
                  placeholder="Enter Room ID"
                  className="w-full p-2 border rounded mb-4"
                  onChange={(e) => setRoomId(e.target.value)}
                />
                <button
                  onClick={() => {
                    socket?.emit("createQuiz", {
                      roomId,
                    });
                    setQuizId(roomId);
                  }}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                >
                  Create Room
                </button>
              </div>
            ) : (
              <div>
                <CreateProblem roomId={quizId} socket={socket} />
              </div>
            )}
          </div>
        </div>
      );
}