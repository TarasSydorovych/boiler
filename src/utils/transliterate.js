export function transliterate(text) {
  const uaToEnMap = {
    а: "a",
    б: "b",
    в: "v",
    г: "h",
    ґ: "g",
    д: "d",
    е: "e",
    є: "ie",
    ж: "zh",
    з: "z",
    и: "y",
    і: "i",
    ї: "yi",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "kh",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "shch",
    ю: "yu",
    я: "ya",
    ь: "_",
    "'": "",
    " ": "-",
    "–": "-",
    "—": "-",
    _: "-",
    "-": "-",
    ё: "yo",
    э: "e",
    ы: "y",
    "’": "",
  };

  const transliterated = text
    .toLowerCase()
    .split("")
    .map((char) => uaToEnMap[char] || char)
    .join("");

  return transliterated.replace(/[^a-z0-9-_]/g, "").replace(/--+/g, "-");
}
