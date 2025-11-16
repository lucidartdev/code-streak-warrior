export default function WarriorAvatar({ level }: any) {
    const stage = Math.min(Math.floor(level / 2) + 1, 4);
  
    return (
      <img
        src={`/warrior${stage}.png`}
        alt="warrior"
        className="w-32 h-32 object-contain"
      />
    );
  }
  