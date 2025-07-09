
export function getRandomWord(words: { label: string; value: string }[]): { label: string; value: string } {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}
