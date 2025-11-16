export default function CheckInButton({ lastCheckIn, onCheckIn }: any) {
    const today = new Date().toISOString().slice(0, 10);
    const disabled = lastCheckIn === today;
  
    return (
      <button
        onClick={onCheckIn}
        disabled={disabled}
        className={`w-full py-3 text-white rounded-lg ${
          disabled ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {disabled ? "Already Checked In Today" : "Check In"}
      </button>
    );
  }
  