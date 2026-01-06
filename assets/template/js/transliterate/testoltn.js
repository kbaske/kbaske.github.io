/* ================================
   Ol Chiki ↔ Latin Transliterator
   Default: Latin → Ol Chiki
================================ */

const $ = (id) => document.getElementById(id);

/* ================================
   MODE SETTINGS
================================ */
let MODE = "LATIN_TO_OL"; // DEFAULT MODE

/* ================================
   MAPS
================================ */

/* 🔹 Latin → Ol Chiki */
const LATIN_TO_OL_MAP = {
  a: "ᱟ",
  i: "ᱤ",
  u: "ᱩ",
  e: "ᱮ",
  o: "ᱚ",
  ka: "ᱠ",
  kha: "ᱠᱷ",
  ga: "ᱜ",
  gha: "ᱜᱷ",
  ca: "ᱪ",
  cha: "ᱪᱷ",
  ja: "ᱡ",
  jha: "ᱡᱷ",
  ta: "ᱛ",
  tha: "ᱛᱷ",
  da: "ᱫ",
  dha: "ᱫᱷ",
  na: "ᱱ",
  pa: "ᱯ",
  pha: "ᱯᱷ",
  ba: "ᱵ",
  bha: "ᱵᱷ",
  ma: "ᱢ",
  ya: "ᱭ",
  ra: "ᱨ",
  la: "ᱞ",
  wa: "ᱣ",
  sa: "ᱥ",
  ha: "ᱦ",
  ng: "ᱝ",
  ny: "ᱧ",
  rra: "ᱲ",
  0: "᱐",
  1: "᱑",
  2: "᱒",
  3: "᱓",
  4: "᱔",
  5: "᱕",
  6: "᱖",
  7: "᱗",
  8: "᱘",
  9: "᱙",
  ".": "᱾",
};

/* 🔹 Ol Chiki → Latin */
const OL_TO_LATIN_MAP = {
  ᱟ: "a",
  ᱤ: "i",
  ᱩ: "u",
  ᱮ: "e",
  ᱚ: "o",
  ᱠ: "ka",
  ᱠᱷ: "kha",
  ᱜ: "ga",
  ᱜᱷ: "gha",
  ᱪ: "ca",
  ᱪᱷ: "cha",
  ᱡ: "ja",
  ᱡᱷ: "jha",
  ᱛ: "ta",
  ᱛᱷ: "tha",
  ᱫ: "da",
  ᱫᱷ: "dha",
  ᱱ: "na",
  ᱯ: "pa",
  ᱯᱷ: "pha",
  ᱵ: "ba",
  ᱵᱷ: "bha",
  ᱢ: "ma",
  ᱭ: "ya",
  ᱨ: "ra",
  ᱞ: "la",
  ᱣ: "wa",
  ᱥ: "sa",
  ᱦ: "ha",
  ᱝ: "ng",
  ᱧ: "ny",
  ᱲ: "rra",
  "᱐": "0",
  "᱑": "1",
  "᱒": "2",
  "᱓": "3",
  "᱔": "4",
  "᱕": "5",
  "᱖": "6",
  "᱗": "7",
  "᱘": "8",
  "᱙": "9",
  "᱾": ".",
};

/* ================================
   CONVERSION FUNCTIONS
================================ */

function latinToOl(text) {
  let result = text.toLowerCase();
  Object.keys(LATIN_TO_OL_MAP)
    .sort((a, b) => b.length - a.length)
    .forEach((k) => {
      const re = new RegExp(k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
      result = result.replace(re, LATIN_TO_OL_MAP[k]);
    });
  return result;
}

function olToLatin(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const pair = text[i] + (text[i + 1] || "");
    if (OL_TO_LATIN_MAP[pair]) {
      result += OL_TO_LATIN_MAP[pair];
      i++;
    } else result += OL_TO_LATIN_MAP[text[i]] || text[i];
  }
  return result;
}

/* ================================
   CAPITALIZATION
================================ */
function capitalizeSentence(text) {
  return text.replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
}

/* ================================
   MAIN CONVERT FUNCTION
================================ */
function convertNow() {
  let input = $("inputText").value;
  let output = "";

  if (MODE === "LATIN_TO_OL") {
    output = latinToOl(input);
    $("capitalizeWrapper").style.display = "none"; // HIDE
  } else {
    output = olToLatin(input);
    $("capitalizeWrapper").style.display = "block"; // SHOW
    if ($("capitalizeToggle")?.checked) output = capitalizeSentence(output);
  }

  $("outputText").value = output;
}

/* ================================
   SYNC UI
================================ */
function syncUI() {
  if (MODE === "LATIN_TO_OL") {
    $("switchModeBtn").textContent = "Latin → Ol Chiki";
    $("title").textContent = "Latin → Ol Chiki Converter";
    $("inputTitle").textContent = "Input (Latin)";
    $("outputTitle").textContent = "Output (Ol Chiki)";
  } else {
    $("switchModeBtn").textContent = "Ol Chiki → Latin";
    $("title").textContent = "Ol Chiki → Latin Converter";
    $("inputTitle").textContent = "Input (Ol Chiki)";
    $("outputTitle").textContent = "Output (Latin)";
  }
}

/* ================================
   EVENTS
================================ */
$("inputText").addEventListener("input", () => {
  if ($("liveToggle").checked) convertNow();
});
$("switchModeBtn").onclick = () => {
  MODE = MODE === "LATIN_TO_OL" ? "OL_TO_LATIN" : "LATIN_TO_OL";
  syncUI();
  convertNow();
};
$("capitalizeToggle")?.addEventListener("change", convertNow);
$("clearBtn").onclick = () => {
  $("inputText").value = "";
  $("outputText").value = "";
};

/* ================================
   INIT
================================ */
syncUI();
convertNow();
