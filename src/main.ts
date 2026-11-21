// Dag 3, del 1: Arrayer och objekt i Console.
import { meny } from "./data";
import { studentPris } from "./rabatt";
import { formateraPris } from "./pris";

// UPPGIFT 1: arrayer
// a) skapa const drycker: string[] = ["Bryggkaffe", "Latte", "Te"];
// b) lägg till "Chai" sist med push. Skriv ut listan och längden.
// c) ta bort sista med pop och skriv ut vad som togs bort.
// d) skriv ut platsen för "Latte" (indexOf) och om "Cola" finns (includes).
// e) skriv ut hela listan som en text: drycker.join(", ")
const drycker: string[] = ["Bryggkaffe", "Latte", "Te"];
drycker.push("Chai");
console.log(drycker, drycker.length);
const borttagen = drycker.pop();
console.log("Borttagen:", borttagen);
console.log(drycker.indexOf("Latte"), drycker.includes("Cola")); // 1 false
console.log(drycker.join(", "));


// UPPGIFT 2: objekt
// a) skapa const kopp = { namn: "Latte", pris: 45, vegetarisk: true };
// b) skriv ut kopp.namn och kopp["pris"]
// c) ändra priset till 48, och lägg till egenskapen storlek: "stor"
//    TypeScript klagar på storlek. Beskriv objektet med en interface där storlek är valfri (storlek?: string).
// d) skriv ut Object.keys(kopp)
interface Kopp {
  namn: string;
  pris: number;
  vegetarisk: boolean;
  storlek?: string; // valfri, så att vi får lägga till den efteråt
}
const kopp: Kopp = { namn: "Latte", pris: 45, vegetarisk: true };
// Punkt när jag vet egenskapens namn i förväg (kopp.namn).
// Hakparentes när namnet ligger i en variabel eller är en text jag bygger (kopp["pris"]).
console.log(kopp.namn, kopp["pris"]);
const egenskap = "pris";
console.log(kopp[egenskap]); // hakparentes behövs när namnet är en variabel
kopp.pris = 48;
kopp.storlek = "stor";
console.log(Object.keys(kopp)); // ["namn", "pris", "vegetarisk", "storlek"]


// UPPGIFT 3: arrayer av objekt
// a) skriv ut hur många rätter menyn har och namnet på den första
// b) loopa med for...of och skriv ut "namn – pris kr" för varje rätt
// c) skriv ut namnet på den sista rätten utan att veta antalet (tips: length - 1)
console.log(`Menyn har ${meny.length} rätter. Första: ${meny[0].namn}`);
for (const ratt of meny) {
  console.log(`${ratt.namn} – ${ratt.pris} kr`);
}
console.log("Sista:", meny[meny.length - 1].namn);

// UPPGIFT 10: moduler. studentPris kommer från rabatt.ts.
for (const ratt of meny) {
  console.log(`${ratt.namn}: ${formateraPris(studentPris(ratt.pris))} (studentpris)`);
}
// De tre felen med flit (Filip provar själv och skriver vad de betydde):
//  1. ta bort type="module" i index.html
//  2. fel filnamn i import
//  3. dubbelklicka på index.html (utan servern)
// Min förklaring: FILIP FYLLER I
