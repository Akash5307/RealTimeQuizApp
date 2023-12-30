// LeaderBoard.tsx
import { motion, AnimatePresence } from "framer-motion";
import Card from "./Card";

export function LeaderBoard({ leaderboardData }: {
    leaderboardData: {
        points: number;
        username: string;
        // Add more fields if needed
    }[];
}) {
    return (
        <div className="h-screen flex items-center justify-center bg-opacity-20 bg-blue-200 backdrop-blur-5 border border-opacity-30 border-solid border-white p-6 rounded-lg shadow-md">
            <div className="w-full max-w-md">

                <h1 className="text-3xl font-semibold text-center my-4 text-blue-600">
                    Leaderboard Results 🚀
                </h1>
                <div className="flex flex-col items-center space-y-4">
                    <AnimatePresence>
                        {leaderboardData.map((el, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.8 }}
                                className="w-full max-w-md"
                            >
                                <Card
                                    sno={index + 1}
                                    name={el.username}
                                    points={el.points}
                                // Add more props for Card if needed
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
