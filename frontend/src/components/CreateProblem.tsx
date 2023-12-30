import { useState } from "react"

export const CreateProblem = ({ socket, roomId }: { socket: any; roomId: string; }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [answer, setAnswer] = useState(0);
    const [options, setOptions] = useState([{
        id: 0,
        title: ""
    }, {
        id: 1,
        title: ""
    }, {
        id: 2,
        title: ""
    }, {
        id: 3,
        title: ""
    }])

    return (
        <div className="p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Create Problem</h2>

            <label className="block mb-2">
                Title
                <input
                    type="text"
                    className="w-full p-2 border rounded mt-1"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>

            <label className="block mb-2">
                Description
                <input
                    type="text"
                    className="w-full p-2 border rounded mt-1"
                    onChange={(e) => setDescription(e.target.value)}
                />
            </label>

            <div className="mb-4">
                {options.map((option) => (
                    <div key={option.id} className="mb-2">
                        <input
                            type="radio"
                            checked={option.id === answer}
                            onChange={() => setAnswer(option.id)}
                            className="mr-2"
                        />
                        Option {option.id}
                        <input
                            type="text"
                            onChange={(e) => {
                                setOptions((prevOptions) =>
                                    prevOptions.map((x) =>
                                        x.id === option.id ? { ...x, title: e.target.value } : x
                                    )
                                );
                            }}
                            className="w-full p-2 border rounded mt-1"
                        />
                    </div>
                ))}
            </div>

            <button
                onClick={() => {
                    socket.emit("createProblem", {
                        roomId,
                        problem: {
                            title,
                            description,
                            options,
                            answer,
                        },
                    });
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
            >
                Add Problem
            </button>

            <button onClick={() => {
            socket.emit("next", {
                roomId
            })
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 ml-10"
        >Next problem</button>
        </div>
    );
}