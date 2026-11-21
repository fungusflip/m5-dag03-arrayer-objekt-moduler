// Egen modul: bara det som står efter `export` kan importeras av andra filer.
export function studentPris(pris: number): number {
  return pris * 0.9;
}
