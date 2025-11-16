"use client";

import { useEffect, useState } from "react";
import CheckInButton from "@/components/CheckInButton";
import XPBar from "@/components/XPBar";
import WarriorAvatar from "@/components/WarriorAvatar";
import StatsCard from "@/components/StatsCard";
import { loadData, saveData } from "@/lib/storage";
import { calculateLevel } from "@/lib/levels";
import { updateStreak } from "@/lib/streak";

export default function Home() {
  const [data, setData] = useState<any>(null);
  const today = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    const saved = loadData();
    setData(saved);
  }, []);

  const handleCheckIn = () => {
    if (!data) return;

    if (data.lastCheckIn === today) return;

    const newXP = data.xp + 50;
    const level = calculateLevel(newXP);
    const streak = updateStreak(data.lastCheckIn);

    const updated = {
      ...data,
      xp: newXP,
      level,
      lastCheckIn: today,
      checkins: [...data.checkins, today],
      streak,
    };

    setData(updated);
    saveData(updated);
  };

  if (!data) return null;

  return (
    <main className="min-h-screen p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        Code Streak Warrior
      </h1>

      <div className="flex flex-col items-center gap-4">
        <WarriorAvatar level={data.level} />
        <XPBar xp={data.xp} />
        <StatsCard streak={data.streak} lastCheckIn={data.lastCheckIn} total={data.checkins.length} />
        <CheckInButton lastCheckIn={data.lastCheckIn} onCheckIn={handleCheckIn} />
      </div>
    </main>
  );
}
