// Quiz.tsx
import { useState } from 'react';

export function Quiz({
  quizData,
  socket,
  userId,
  problemId,
  roomId,
}: {
  quizData: {
    title: string;
    options: string[];
  };
  socket: any;
  roomId: string;
  userId: string;
  problemId: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submission, setSubmission] = useState(0);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <SingleQuiz
          choices={quizData.options.map((x) => x.title)}
          title={quizData.title}
          imageURL={''}
          setSelected={setSubmission}
        />
        <div className="flex justify-end mt-6">
          <button
            className={`py-3 px-10 bg-blue-600 rounded-lg text-white ${
              submitted ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
            }`}
            disabled={submitted}
            onClick={() => {
              setSubmitted(true);
              socket.emit('submit', {
                userId,
                problemId,
                submission: Number(submission),
                roomId,
              });
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

// SingleQuiz.tsx
type SingleQuizProps = {
  title: string;
  choices: string[];
  imageURL?: string;
  setSelected: any;
};

function SingleQuiz({ title, choices, imageURL, setSelected }: SingleQuizProps) {
  return (
    <article>
      <h4 className="text-xl font-semibold mt-4 mb-6">{title}</h4>
      {imageURL && <img src={imageURL} alt="" className="mb-4 rounded-md" />}
      {choices.length &&
        choices.map((choice, index) => (
          <div
            key={index}
            className="flex items-center w-full py-2 pl-4 my-2 space-x-2 bg-gray-100/50 rounded-lg cursor-pointer hover:bg-gray-200 transition duration-300"
            onClick={() => {
              setSelected(index);
            }}
          >
            <input type="radio" name="option" value={choice} className="w-5 h-5" />
            <p className="ml-2 text-sm">{choice}</p>
          </div>
        ))}
    </article>
  );
}

export default SingleQuiz;
