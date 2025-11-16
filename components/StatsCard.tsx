export default function StatsCard({ streak, lastCheckIn, total }: any) {
    return (
      <div className="w-full border p-4 rounded-lg shadow-sm">
        <p><strong>Streak:</strong> {streak} days</p>
        <p><strong>Last Check-in:</strong> {lastCheckIn}</p>
        <p><strong>Total Check-ins:</strong> {total}</p>
      </div>
    );
  }
  