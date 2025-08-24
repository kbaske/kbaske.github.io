// --- 1) Practical default mapping ---
// This mapping is intentionally conservative and editable in the UI.

// Special modifications as per P.O. Bodding
// Exceptions mapping (multi-character first)
const exceptions = {
  // add more here...
  // Six letters combinations...
  ᱵᱮᱵᱷᱟᱨ: "be̠bhar",
  ᱵᱮᱣᱦᱟᱨ: "be̠ohar",
  // Five letters combinations...
  //"ᱟᱣᱤᱭᱟ": "aoia",
  // Four letters combinations...
  //"ᱡᱤᱭᱳ": "Jio",
  // Three letters combinations...
  //"ᱟᱭᱮ": "ae",
  // Two letters combinations...
  //"ᱟᱣ": "ao", //"": "",
  // One letters combinations...
  ᱮᱹ: "e", //, "": "",
};

// It handles single letters and common two-char aspirates (consonant + ᱷ).
const DEFAULT_MAP = {
  // Independent & vowel signs (simple ASCII forms)
  ᱚ: "o̠", // O̠ (indep.)
  ᱟ: "a", // A
  ᱤ: "i", // I (indep.)
  ᱩ: "u", // U (indep.)
  ᱮ: "e", // E (indep.)
  ᱳ: "o", // OO (indep.)

  // Core consonants
  ᱛ: "t",
  ᱜ: "g",
  ᱝ: "ṅ",
  ᱞ: "l",
  ᱠ: "k",
  ᱡ: "j",
  ᱢ: "m",
  ᱣ: "w",
  ᱥ: "s",
  ᱦ: "h",
  ᱧ: "ń",
  ᱨ: "r",
  ᱪ: "c",
  ᱫ: "d",
  ᱬ: "ṇ",
  ᱭ: "y",
  ᱯ: "p",
  ᱰ: "ḍ",
  ᱱ: "n",
  ᱲ: "ṛ",
  ᱴ: "ṭ",
  ᱵ: "b",
  ᱶ: "̃o",
  ᱷ: "h",

  // Common two-character aspirates (consonant + ᱷ)
  ᱠᱷ: "kh",
  ᱜᱷ: "gh",
  ᱪᱷ: "ch",
  ᱡᱷ: "jh",
  ᱴᱷ: "ṭh",
  ᱰᱷ: "ḍh",
  ᱛᱷ: "th",
  ᱫᱷ: "dh",
  ᱯᱷ: "ph",
  ᱵᱷ: "bh",
  ᱱᱷ: "nh",
  ᱲᱷ: "ṛh",
  ᱭᱷ: "yh",

  // Numbers
  "᱑": "1",
  "᱒": "2",
  "᱓": "3",
  "᱔": "4",
  "᱕": "5",
  "᱖": "6",
  "᱗": "7",
  "᱘": "8",
  "᱙": "9",
  "᱐": "0",

  // Diacritics sometimes typed as letters in plain text; keep practical values
  ᱸ: "̃", // nasal/length mark often used as o-like
  ᱹ: "̣", // vowel sign-like usage in plain text
  ᱺ: "̣̃", // mu-gahla at A
  ᱻ: "", // ai mark in plain text
  ᱽ: "", // ohod
  ᱼ: "", // farka
  "᱾": ".", // full stop mark
  "᱿": ".", // double full stop mark

  // Space-like marks (map to space)
  "\u200c": "", // ZWNJ
  "\u200d": "", // ZWJ
};

const FOLLOWER_SET = new Set(["ᱚ", "ᱟ", "ᱤ", "ᱩ", "ᱮ", "ᱳ", "ᱽ", "ᱷ"]);

// NOTE: If you need a stricter academic scheme (e.g., ISO-like with diacritics),
// simply edit the mapping in the UI below and click "Apply changes".
// --- 2) Conversion engine ---
function transliterate(text, map) {
  let out = "";

  // Apply exceptions first
  for (let key in exceptions) {
    const regex = new RegExp(key, "g");
    text = text.replace(regex, exceptions[key]);
  }

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const next = text[i + 1];

    // ✨ Special rule
    if (
      (ch === "ᱜ" || ch === "ᱡ" || ch === "ᱫ" || ch === "ᱵ") &&
      !FOLLOWER_SET.has(next)
    ) {
      if (ch === "ᱜ") out += "ḱ";
      else if (ch === "ᱡ") out += "ć";
      else if (ch === "ᱫ") out += "t́";
      else if (ch === "ᱵ") out += "ṕ";
    } else {
      // Default mapping
      out += DEFAULT_MAP[ch] !== undefined ? DEFAULT_MAP[ch] : ch;
    }
  }

  // Remove spaces before punctuation marks: . ! ? ᱾ ᱿
  out = out.replace(/\s+(?=[.!?᱾᱿])/g, "");

  return out;
}

// 🔹 Special Y/W vowel adjustment
function adjustYWVowels(s) {
  return s
    .replace(/([aạãạ̃eẽẽ̠ēiĩoõõ̠o̠ōuũạãa.̃ẽēe̱ẽ̱ĩõo̱õ̱ōũ])([yw])/gi, (m, v, w) => {
      if (w.toLowerCase() === "y") return v + "e";
      if (w.toLowerCase() === "w") return v + "o";
      return m;
    })
    .replace(/([yw])([aạãạ̃eẽẽ̠ēiĩoõõ̠o̠ōuũạãa.̃ẽēe̱ẽ̱ĩõo̱õ̱ōũ])/gi, (m, w, v) => {
      if (w.toLowerCase() === "y") return "e" + v;
      if (w.toLowerCase() === "w") return "o" + v;
      return m;
    })
    .replace(/ee/gi, "e")
    .replace(/oo/gi, "o")
    .replace(/ie/gi, "i")
    .replace(/ei/gi, "i");
}

function normalizeSpaces(s) {
  // Collapse multiple spaces, keep newlines; trim edges per line
  return s
    .split(/\n/)
    .map((line) => line.replace(/\s{2,}/g, " ").trim())
    .join("\n");
}

function capitalizeSentences(s) {
  // Capitalize first a-z after start or after ., ?, ! possibly followed by spaces and quotes/brackets
  return s.replace(
    /(^|[.?!]\s+)([\"'“‘\(\[\{]*)([a-z])/g,
    (m, p1, p2, p3) => p1 + p2 + p3.toUpperCase()
  );
}

// --- 3) Wire up UI ---
const $in = document.getElementById("input");
const $out = document.getElementById("output");
const $live = document.getElementById("liveToggle");
const $cap = document.getElementById("capitalizeToggle");
const $trim = document.getElementById("trimSpacesToggle");
const $convert = document.getElementById("convertBtn");
const $clear = document.getElementById("clearBtn");
const $copy = document.getElementById("copyBtn");
const $download = document.getElementById("downloadBtn");
const $mapJson = document.getElementById("mapJson");
const $applyMap = document.getElementById("applyMapBtn");

let currentMap = { ...DEFAULT_MAP };
$mapJson.textContent = `We are Santals.in — a community-driven platform dedicated to preserving and promoting Santali language, culture, and literature.
`;

function convertNow() {
  let text = transliterate($in.value, currentMap);

  // 🔹 Apply Y/W vowel rule
  text = adjustYWVowels(text);

  if ($trim.checked) text = normalizeSpaces(text);
  // lowercase whole text first to ensure stable capitalization result
  text = text.replace(/[A-Z]/g, (ch) => ch.toLowerCase());
  if ($cap.checked) text = capitalizeSentences(text);
  $out.value = text;
}

$convert.addEventListener("click", convertNow);
$in.addEventListener("input", () => {
  if ($live.checked) convertNow();
});
$live.addEventListener("change", () => {
  if ($live.checked) convertNow();
});
$cap.addEventListener("change", convertNow);
$trim.addEventListener("change", convertNow);
$clear.addEventListener("click", () => {
  $in.value = "";
  convertNow();
  $in.focus();
});

$copy.addEventListener("click", async () => {
  await navigator.clipboard.writeText($out.value || "");
  $copy.textContent = "Copied!";
  setTimeout(() => ($copy.textContent = "Copy"), 900);
});

$download.addEventListener("click", () => {
  const blob = new Blob([$out.value || ""], {
    type: "text/plain;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "olchiki-to-latin.txt";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

$applyMap.addEventListener("click", () => {
  window.open("https://santals.in", "_blank");
});

// Initial convert on load
convertNow();
