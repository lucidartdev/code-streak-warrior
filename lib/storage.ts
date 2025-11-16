export function loadData() {
    if (typeof window === "undefined") return null;
  
    const raw = localStorage.getItem("streakwarrior");
    if (raw) return JSON.parse(raw);
  
    const initial = {
      xp: 0,
      level: 1,
      lastCheckIn: "",
      checkins: [],
      streak: 0,
    };
  
    localStorage.setItem("streakwarrior", JSON.stringify(initial));
    return initial;
  }
  
  export function saveData(data: any) {
    localStorage.setItem("streakwarrior", JSON.stringify(data));
  }
  