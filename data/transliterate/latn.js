const substitutions = {
  tahẽ̠kana: "ᱛᱟᱦᱮᱸᱠᱟᱱᱟ",
  mo̠ńj: "ᱢᱚᱸᱡᱽ",
  ruạṛ: "ᱨᱩᱣᱟᱹᱲ",
  re̠ń: "ᱨᱤᱱ",
  iạu: "ᱤᱭᱟᱹᱣ",
  ea: "ᱮᱭᱟ",
  Ea: "ᱮᱭᱟ",
  Ae: "ᱟᱭ",
  ại: "ᱟᱹᱭ",
  ai: "ᱟᱭ",
  Ai: "ᱟᱭ",
  AI: "ᱟᱭ",
  Ại: "ᱟᱹᱭ",
  ẠI: "ᱟᱹᱭ",
  ạṛ: "ᱟᱹᱲ",
  ạe: "ᱟᱹᱭ",
  AE: "ᱟᱭ",
  Ao: "ᱟᱣ",
  AO: "ᱟᱣ",
  ão: "ᱟᱶ",
  ÃO: "ᱟᱶ",
  Ão: "ᱟᱶ",
  ÃU: "ᱟᱶ",
  Ãu: "ᱟᱶ",
  ãu: "ᱟᱶ",
  ạu: "ᱟᱹᱣ",
  Ạ̃U: "ᱟᱹᱶ",
  Ạ̃u: "ᱟᱹᱶ",
  ạ̃u: "ᱟᱹᱶ",
  au: "ᱟᱣ",
  AU: "ᱟᱣ",
  Au: "ᱟᱣ",
  Bh: "ᱵᱷ",
  BH: "ᱵᱷ",
  bh: "ᱵᱷ",
  c̕a: "ᱡᱼᱟ",
  c̕e: "ᱡᱼᱮ",
  ch: "ᱪᱷ",
  CH: "ᱪᱷ",
  Da: "ᱫᱟ",
  De: "ᱫᱮ",
  Di: "ᱫᱤ",
  Do: "ᱫᱚ",
  Do̠: "ᱫᱚ",
  Du: "ᱫᱩ",
  ḍh: "ᱰᱷ",
  dh: "ᱫᱷ",
  EA: "ᱮᱭᱟ",
  EI: "ᱮᱭ",
  ei: "ᱮᱭ",
  Ei: "ᱮᱭ",
  EO: "ᱮᱭᱚ",
  Eo: "ᱮᱭᱚ",
  eo: "ᱮᱭᱚ",
  Eu: "ᱮᱣ",
  eu: "ᱮᱣ",
  EẠ: "ᱮᱭᱟᱹ",
  Eạ: "ᱮᱭᱟᱹ",
  eạ: "ᱮᱭᱟᱹ",
  EU: "ᱮᱣ",
  gʼa: "ᱜᱼᱟ",
  gʼe: "ᱜᱼᱮ",
  gʼi: "ᱜᱼᱤ",
  gʼo: "ᱜᱼᱚ",
  gʼu: "ᱜᱼᱩ",
  gh: "ᱜᱷ",
  GH: "ᱜᱷ",
  ia: "ᱤᱭᱟ",
  iạ: "ᱤᱭᱟᱹ",
  IA: "ᱤᱭᱟ",
  IẠ: "ᱤᱭᱟᱹ",
  Iạ: "ᱤᱭᱟᱹ",
  Ia: "ᱤᱭᱟ",
  Ie: "ᱤᱭᱮ",
  ie: "ᱤᱭᱮ",
  IE: "ᱤᱭᱮ",
  IO: "ᱤᱭᱚ",
  Io: "ᱤᱭᱚ",
  io: "ᱤᱭᱚ",
  iu: "ᱤᱣ",
  IU: "ᱤᱣ",
  jʼa: "ᱡᱼᱟ",
  jʼe: "ᱡᱼᱮ",
  jʼi: "ᱡᱼᱤ",
  jʼo: "ᱡᱼᱚ",
  jʼu: "ᱡᱼᱩ",
  Jh: "ᱡᱷ",
  JH: "ᱡᱷ",
  kʼa: "ᱜᱼᱟ",
  "k'a": "ᱜᱼᱟ",
  kʼe: "ᱜᱼᱮ",
  kʼi: "ᱜᱼᱤ",
  kʼo: "ᱜᱼᱚ",
  kʼu: "ᱜᱼᱩ",
  k̕a: "ᱜᱼᱟ",
  k̕e: "ᱜᱼᱮ",
  kh: "ᱠᱷ",
  Oa: "ᱚᱣᱟ",
  OA: "ᱚᱣᱟ",
  OẠ: "ᱚᱣᱟᱹ",
  Oạ: "ᱚᱣᱟᱹ",
  oạ: "ᱚᱣᱟᱹ",
  Oe: "ᱚᱭ",
  OE: "ᱚᱭ",
  o̠e: "ᱚᱭ",
  OI: "ᱚᱭᱤ",
  Oi: "ᱚᱭᱤ",
  oi: "ᱚᱭᱤ",
  ou: "ᱚᱣ",
  OU: "ᱚᱣ",
  Ou: "ᱚᱣ",
  pʼa: "ᱵᱼᱟ",
  pʼe: "ᱵᱼᱮ",
  pʼi: "ᱵᱼᱤ",
  pʼo: "ᱵᱼᱚ",
  pʼu: "ᱵᱼᱩ",
  ṕa: "ᱵᱼᱟ",
  ṕe: "ᱵᱼᱮ",
  ph: "ᱯᱷ",
  PH: "ᱯᱷ",
  tʼa: "ᱫᱼᱟ",
  tʼe: "ᱫᱼᱮ",
  tʼi: "ᱫᱼᱤ",
  tʼo: "ᱫᱼᱚ",
  tʼu: "ᱫᱼᱩ",
  ťạ: "ᱫᱼᱟ",
  ťe: "ᱫᱼᱮ",
  ṭh: "ᱴᱷ",
  th: "ᱛᱷ",
  Ua: "ᱩᱣᱟ",
  UA: "ᱩᱣᱟ",
  uạ: "ᱩᱣᱟᱹ",
  UẠ: "ᱩᱣᱟᱹ",
  Uạ: "ᱩᱣᱟᱹ",
  Ui: "ᱩᱭ",
  ui: "ᱩᱭ",
  UI: "ᱩᱭ",
  UO: "ᱩᱣᱚ",
  Uo: "ᱩᱣᱚ",
  uo: "ᱩᱣᱚ",
  Zh: "ᱡᱷ",
  ZH: "ᱡᱷ",
  f: "ᱯᱷ",
  V: "ᱵᱷ",
  ᱚ̠: "ᱚ",
  A: "ᱟ",
  a: "ᱟ",
  Ã: "ᱟᱸ",
  ã: "ᱟᱸ",
  Ạ: "ᱟᱹ",
  ạ: "ᱟᱹ",
  Ạ̃: "ᱟᱺ",
  ạ̃: "ᱟᱺ",
  b: "ᱵ",
  B: "ᱵ",
  C: "ᱪ",
  c: "ᱪ",
  C̕: "ᱪ",
  c̕: "ᱪ",
  ć: "ᱡ",
  "C’": "ᱪ",
  Cʼ: "ᱡ",
  "c’": "ᱪ",
  cʼ: "ᱡ",
  D: "ᱫ",
  d: "ᱫ",
  Ḍ: "ᱰ",
  ḍ: "ᱰ",
  e: "ᱮ",
  E: "ᱮ",
  Ẽ: "ᱮ",
  ẽ: "ᱮ",
  Ẹ: "ᱮ",
  ẹ: "ᱮ",
  E̱: "ᱮ",
  e̱: "ᱮ",
  Ẽ̱: "ᱮ",
  ẽ̱: "ᱮ",
  g: "ᱜ",
  G: "ᱜ",
  h: "ᱦ",
  H: "ᱦ",
  H̕: "ᱦ",
  h̕: "ᱦ",
  i: "ᱤ",
  I: "ᱤ",
  Ĩ: "ᱤᱸ",
  ĩ: "ᱤᱸ",
  jo: "ᱡᱚ",
  j: "ᱡᱽ",
  K: "ᱠ",
  k: "ᱠ",
  K̕: "ᱜ",
  k̕: "ᱜ",
  ḱ: "ᱜ",
  "k’": "ᱜ",
  l: "ᱞ",
  L: "ᱞ",
  m: "ᱢ",
  M: "ᱢ",
  N: "ᱱ",
  n: "ᱱ",
  Ṇ: "ᱬ",
  ṇ: "ᱬ",
  Ṅ: "ᱝ",
  ṅ: "ᱝ",
  Ń: "ᱧ",
  ń: "ᱧ",
  Ñ: "ᱧ",
  ñ: "ᱧ",
  O̱: "ᱚ",
  o̱: "ᱚ",
  o̠: "ᱚ", //another version of o
  o: "ᱚ",
  O: "ᱚ",
  Õ: "ᱚᱸ",
  õ: "ᱚᱸ",
  Ọ: "ᱚ",
  ọ: "ᱚ",
  Õ̱: "ᱚᱸ",
  õ̱: "ᱚᱸ",
  P: "ᱯ",
  p: "ᱯ",
  P̕: "ᱯ",
  p̕: "ᱯ",
  Ṕ: "ᱵ",
  ṕ: "ᱵ",
  "P’": "ᱵ",
  "p’": "ᱵ",
  Pʼ: "ᱵ",
  pʼ: "ᱵ",
  q: "ᱠ",
  r: "ᱨ",
  R: "ᱨ",
  r: "ᱨ",
  Ṛ: "ᱲ",
  ṛ: "ᱲ",
  S: "ᱥ",
  s: "ᱥ",
  ṛ: "ᱨ",
  t: "ᱛ",
  T: "ᱛ",
  Ṭ: "ᱴ",
  ṭ: "ᱴ",
  T̕: "ᱫ",
  Ť: "ᱫ",
  t̕: "ᱫ",
  t̕: "ᱫ",
  t́: "ᱫ",
  "T’": "ᱫ",
  Tʼ: "ᱫ",
  "t’": "ᱫ",
  tʼ: "ᱫ",
  u: "ᱩ",
  U: "ᱩ",
  Ũ: "ᱩᱸ",
  ũ: "ᱩᱸ",
  v: "ᱣ",
  W: "ᱣ",
  w: "ᱣ",
  W̃: "ᱶ",
  w̃: "ᱶ",
  X: "ᱠᱥ",
  x: "ᱠᱥ",
  Y: "ᱭ",
  y: "ᱭ",
  Z: "ᱡ",
  1: "᱑",
  2: "᱒",
  3: "᱓",
  4: "᱔",
  5: "᱕",
  6: "᱖",
  7: "᱗",
  8: "᱘",
  9: "᱙",
  0: "᱐",
  "\\.": " ᱾",
};
