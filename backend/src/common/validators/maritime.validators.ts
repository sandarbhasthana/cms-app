export function isValidIMO(imo: string): boolean {
  const digits = (imo || '').replace(/\D/g, '');
  if (!/^\d{7}$/.test(digits)) return false;
  const weights = [7, 6, 5, 4, 3, 2];
  const sum = weights.reduce((acc, w, i) => acc + w * Number(digits[i]), 0);
  return sum % 10 === Number(digits[6]);
}

export function isValidMMSI(mmsi?: string | null): boolean {
  if (!mmsi) return true; // optional
  return /^\d{9}$/.test(mmsi);
}
