export function getMonthsDiff(date1: Date, date2: Date) {
  const diff = date2.getTime() - date1.getTime();
  return diff / (1000 * 3600 * 24 * 30);
}