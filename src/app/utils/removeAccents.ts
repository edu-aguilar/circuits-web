export function removeAccents(str: string): string {
  const accents: { [key: string]: string } = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    Á: "A",
    É: "E",
    Í: "I",
    Ó: "O",
    Ú: "U",
    ñ: "n",
    Ñ: "N",
  };

  return str
    .split("")
    .map((char) => accents[char] || char)
    .join("");
}
