//해당년도 해당학기 계산 함수

export function getCurrentSemester() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;

  let semester = '';

  if (month >= 3 && month <= 6) semester = '1학기';
  else if (month >= 7 && month <= 8) semester = '여름 계절학기';
  else if (month >= 9 && month <= 12) semester = '2학기';
  else semester = '겨울 계절학기';

  return { year, semester };
}
