export default function XPBar({ xp }: any) {
    const levelXP = xp % 500;
    const percentage = (levelXP / 500) * 100;
  
    return (
      <div className="w-full">
        <p className="text-sm font-medium mb-1">XP: {xp}</p>
        <div className="w-full h-3 bg-gray-200 rounded-full">
          <div
            className="h-full bg-green-500 rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
  