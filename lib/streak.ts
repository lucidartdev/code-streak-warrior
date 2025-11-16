export function updateStreak(lastCheckIn: string) {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
  
    const last = new Date(lastCheckIn);
  
    if (last.toDateString() === yesterday.toDateString()) {
      return true; // continue streak
    }
  
    return last.toDateString() === today.toDateString() ? true : false;
  }
  