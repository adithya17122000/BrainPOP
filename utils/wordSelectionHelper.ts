// import * as readline from 'readline';

// export async function askUserToSelectWord(words: string[]): Promise<string> {
//     return new Promise((resolve) => {
//         const rl = readline.createInterface({
//             input: process.stdin,
//             output: process.stdout
//         });

//         console.log('\n📚 Available Words:');
//         words.forEach((word, i) => console.log(`  ${i + 1}. ${word}`));

//         rl.question('\n👉 Enter the number of the word you want to select: ', (answer) => {
//             const index = parseInt(answer) - 1;
//             const selected = words[index];
//             rl.close();
//             if (!selected) {
//                 console.log('❌ Invalid selection. Defaulting to first word.');
//                 resolve(words[0]);
//             } else {
//                 resolve(selected);
//             }
//         });
//     });
// }


export function getRandomWord(words: { label: string; value: string }[]): { label: string; value: string } {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}
