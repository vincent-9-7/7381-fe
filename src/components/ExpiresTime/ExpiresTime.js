export const ExpireOneHour = () => {
  const currentTime = new Date();
  currentTime.setTime(currentTime.getTime() + (60*60*1000)); // 60min过期
  return currentTime;
};

export const ExpireHalfHour = () => {
  const currentTime = new Date();
  currentTime.setTime(currentTime.getTime() + (30*60*1000)); // 30min过期
  return currentTime;
};

