// Card.tsx
export default function Card({ sno, name, points }: {
    sno: number;
    name: string;
    points: number;
}) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center">
                <div className="w-10 mr-4 text-gray-600">{sno}</div>
                <div className="ml-4">
                    <div className="font-semibold">{name}</div>
                    <div className="text-gray-500">{points} Points</div>
                </div>
            </div>
        </div>
    );
}
