(function () {
  const substitutions = {
    // Add your substitution rules here
    // variations of a
    a: "ᱟ",
    ạ: "ᱟᱹ",
    ạ: "ᱟᱹ", // not applied everywhere
    ạ̣: "ᱟᱹ", // not applied everywhere
    a̠: "ᱟᱹ", // not applied everywhere
    ä: "ᱟᱹ", // not applied everywhere
    ã: "ᱟᱸ", // not applied everywhere
    ã: "ᱟᱸ",
    ã̃: "ᱟᱸ", // not applied everywhere
    á: "ᱟᱸ", // not applied everywhere
    ạ̃: "ᱟᱺ",
    ạ̃: "ᱟᱺ", // not applied everywhere
    ạ̃: "ᱟᱺ", // not applied everywhere
    ã̠: "ᱟᱺ", // not applied everywhere
    ae: "ᱟᱭ",
    ạe: "ᱟᱹᱭ",
    ãe: "ᱟᱸᱭ",
    ạ̃e: "ᱟᱺᱭ",
    aẽ: "ᱟᱸᱭ",
    aẹ: "ᱟᱭ",
    ae̱: "ᱟᱭ",
    ae̠: "ᱟᱭ",
    aẽ̱: "ᱟᱭ",
    aẽ̱: "ᱟᱭ",
    ạẽ: "ᱟᱹᱭ",
    ạẹ: "ᱟᱹᱭ",
    ạe̱: "ᱟᱹᱭ",
    ạe̠: "ᱟᱹᱭ",
    ạẽ̱: "ᱟᱹᱭ",
    ạẽ̱: "ᱟᱹᱭ",
    ãẽ: "ᱟᱸᱭ",
    ãẹ: "ᱟᱸᱭ",
    ãe̱: "ᱟᱸᱭ",
    ãe̠: "ᱟᱸᱭ",
    ãẽ̱: "ᱟᱸᱭ",
    ãẽ̱: "ᱟᱸᱭ",
    ạ̃ẽ: "ᱟᱺᱭ",
    ạ̃ẹ: "ᱟᱺᱭ",
    ạ̃e̱: "ᱟᱺᱭ",
    ạ̃e̠: "ᱟᱺᱭ",
    ạ̃ẽ̱: "ᱟᱺᱭ",
    ạ̃ẽ̱: "ᱟᱺᱭ",
    aẽ̠: "ᱟᱭ",
    ạẽ̠: "ᱟᱹᱭ",
    ãẽ̠: "ᱟᱸᱭ",
    ạ̃ẽ̠: "ᱟᱺᱭ",
    ai: "ᱟᱭ",
    ại: "ᱟᱹᱭ",
    ãi: "ᱟᱸᱭ",
    ạ̃i: "ᱟᱺᱭ",
    aĩ: "ᱟᱸᱭ",
    ạĩ: "ᱟᱺᱭ",
    ãĩ: "ᱟᱸᱭ",
    ạ̃ĩ: "ᱟᱺᱭ",
    ại: "ᱟᱹᱭ",
    a̠i: "ᱟᱹᱭ",
    ãi: "ᱟᱸᱭ",
    ã̃i: "ᱟᱸᱭ",
    ái: "ᱟᱸᱭ",
    ạ̃i: "ᱟᱺᱭ",
    ạ̃i: "ᱟᱺᱭ",
    ao: "ᱟᱣ",
    ạo: "ᱟᱹᱣ",
    ão: "ᱟᱶ",
    ạ̃o: "ᱟᱹᱶ",
    aõ: "ᱟᱶ",
    ạõ: "ᱟᱹᱶ",
    ãõ: "ᱟᱶ",
    ạ̃õ: "ᱟᱹᱶ",
    ao̱: "ᱟᱣ",
    ạo̱: "ᱟᱹᱣ",
    ão̱: "ᱟᱶ",
    ạ̃o̱: "ᱟᱹᱶ",
    ao̠: "ᱟᱣ",
    ạo̠: "ᱟᱹᱣ",
    ão̠: "ᱟᱶ",
    ạ̃o̠: "ᱟᱹᱶ",
    aọ: "ᱟᱣ",
    ạọ: "ᱟᱹᱣ",
    ãọ: "ᱟᱶ",
    ạ̃ọ: "ᱟᱹᱶ",
    aõ̱: "ᱟᱶ",
    ạõ̱: "ᱟᱹᱶ",
    ãõ̱: "ᱟᱶ",
    ạ̃õ̱: "ᱟᱹᱶ",
    aõ̱: "ᱟᱶ",
    ạõ̱: "ᱟᱹᱶ",
    ãõ̱: "ᱟᱶ",
    ạ̃õ̱: "ᱟᱹᱶ",
    aõ̠: "ᱟᱶ",
    ạõ̠: "ᱟᱹᱶ",
    ãõ̠: "ᱟᱶ",
    ạ̃õ̠: "ᱟᱹᱶ",
    au: "ᱟᱣ",
    ãu: "ᱟᱶ",
    ạu: "ᱟᱹᱣ",
    ạu: "ᱟᱹᱣ",
    ạ̃u: "ᱟᱹᱶ",
    aũ: "ᱟᱶ",
    ãũ: "ᱟᱶ",
    ạũ: "ᱟᱹᱶ",
    ạũ: "ᱟᱹᱶ",
    ạ̃ũ: "ᱟᱹᱶ",
    ãṛ: "ᱟᱬ",
    ạ̃ṛ: "ᱟᱹᱬ",

    aea: "ᱟᱭᱟ",
    ạea: "ᱟᱹᱭᱟ",
    aeae: "ᱟᱭᱟᱭ",
    ạeae: "ᱟᱹᱭᱟᱭ",
    ạeạe: "ᱟᱹᱭᱟᱹᱭ",
    aoae: "ᱟᱣᱟᱭ",
    aoiạ: "ᱟᱣᱤᱭᱟᱹ",
    aeo: "ᱟᱭᱳ",
    aeo̱: "ᱟᱭᱚ",
    aeo̠: "ᱟᱭᱚ",
    aet́: "ᱟᱭᱮᱫ",
    ạeć: "ᱟᱹᱭᱮᱡ",
    aoe: "ᱟᱣᱮ",
    ạue̠: "ᱟᱹᱣᱮ",
    ạue: "ᱟᱹᱣᱮ",
    aue: "ᱟᱣᱮ",
    aen: "ᱟᱭᱮᱱ",

    // variations of b
    bh: "ᱵᱷ",
    b: "ᱵᱽ",
    b̃: "ᱵᱽ",
    b̃h: "ᱵᱷ",
    bile: "ᱵᱟᱭᱤᱞ",
    baṇṭa: "ᱵᱟᱱᱴᱟ",
    // variations of c
    c: "ᱪ",
    ch: "ᱪᱷ",
    c̕: "ᱡ",
    ć: "ᱡ",
    "c’": "ᱡ",
    cʼ: "ᱡ",
    "c‘": "ᱡ",
    "c'": "ᱡ",
    c̕̕: "ᱡ", // not yet implemented properly
    ć: "ᱡ",
    c̕a: "ᱡᱼᱟ",
    ća: "ᱡᱼᱟ",
    "c’a": "ᱡᱼᱟ",
    cʼa: "ᱡᱼᱟ",
    "c‘a": "ᱡᱼᱟ",
    "c'a": "ᱡᱼᱟ",
    c̕ạ: "ᱡᱼᱟᱹ",
    ćạ: "ᱡᱼᱟᱹ",
    "c’ạ": "ᱡᱼᱟᱹ",
    cʼạ: "ᱡᱼᱟᱹ",
    "c‘ạ": "ᱡᱼᱟᱹ",
    "c'ạ": "ᱡᱼᱟᱹ",
    c̕ã: "ᱡᱼᱟᱸ",
    ćã: "ᱡᱼᱟᱸ",
    "c’ã": "ᱡᱼᱟᱸ",
    cʼã: "ᱡᱼᱟᱸ",
    "c‘ã": "ᱡᱼᱟᱸ",
    "c'ã": "ᱡᱼᱟᱸ",
    c̕ạ̃: "ᱡᱼᱟᱺ",
    ćạ̃: "ᱡᱼᱟᱺ",
    "c’ạ̃": "ᱡᱼᱟᱺ",
    cʼạ̃: "ᱡᱼᱟᱺ",
    "c‘ạ̃": "ᱡᱼᱟᱺ",
    "c'ạ̃": "ᱡᱼᱟᱺ",
    c̕e: "ᱡᱼᱮ",
    će: "ᱡᱼᱮ",
    "c’e": "ᱡᱼᱮ",
    cʼe: "ᱡᱼᱮ",
    "c‘e": "ᱡᱼᱮ",
    "c'e": "ᱡᱼᱮ",
    c̕ẽ: "ᱡᱼᱮᱸ",
    ćẽ: "ᱡᱼᱮᱸ",
    "c’ẽ": "ᱡᱼᱮᱸ",
    cʼẽ: "ᱡᱼᱮᱸ",
    "c‘ẽ": "ᱡᱼᱮᱸ",
    "c'ẽ": "ᱡᱼᱮᱸ",
    c̕ẹ: "ᱡᱼᱮᱹ",
    ćẹ: "ᱡᱼᱮᱹ",
    "c’ẹ": "ᱡᱼᱮᱹ",
    cʼẹ: "ᱡᱼᱮᱹ",
    "c‘ẹ": "ᱡᱼᱮᱹ",
    "c'ẹ": "ᱡᱼᱮᱹ",
    c̕e̱: "ᱡᱼᱮ",
    će̱: "ᱡᱼᱮ",
    "c’e̱": "ᱡᱼᱮ",
    cʼe̱: "ᱡᱼᱮ",
    "c‘e̱": "ᱡᱼᱮ",
    "c'e̱": "ᱡᱼᱮ",
    c̕e̠: "ᱡᱼᱮ",
    će̠: "ᱡᱼᱮ",
    "c’e̠": "ᱡᱼᱮ",
    cʼe̠: "ᱡᱼᱮ",
    "c‘e̠": "ᱡᱼᱮ",
    "c'e̠": "ᱡᱼᱮ",
    c̕ẽ̱: "ᱡᱼᱮᱸ",
    ćẽ̱: "ᱡᱼᱮᱸ",
    "c’ẽ̱": "ᱡᱼᱮᱸ",
    cʼẽ̱: "ᱡᱼᱮᱸ",
    "c‘ẽ̱": "ᱡᱼᱮᱸ",
    "c'ẽ̱": "ᱡᱼᱮᱸ",
    c̕ẽ̱: "ᱡᱼᱮᱸ",
    ćẽ̱: "ᱡᱼᱮᱸ",
    "c’ẽ̱": "ᱡᱼᱮᱸ",
    cʼẽ̱: "ᱡᱼᱮᱸ",
    "c‘ẽ̱": "ᱡᱼᱮᱸ",
    "c'ẽ̱": "ᱡᱼᱮᱸ",
    c̕ẽ̠: "ᱡᱼᱮᱸ",
    ćẽ̠: "ᱡᱼᱮᱸ",
    "c’ẽ̠": "ᱡᱼᱮᱸ",
    cʼẽ̠: "ᱡᱼᱮᱸ",
    "c‘ẽ̠": "ᱡᱼᱮᱸ",
    "c'ẽ̠": "ᱡᱼᱮᱸ",
    c̕i: "ᱡᱼᱤ",
    ći: "ᱡᱼᱤ",
    "c’i": "ᱡᱼᱤ",
    cʼi: "ᱡᱼᱤ",
    "c‘i": "ᱡᱼᱤ",
    "c'i": "ᱡᱼᱤ",
    c̕ĩ: "ᱡᱼᱤᱸ",
    ćĩ: "ᱡᱼᱤᱸ",
    "c’ĩ": "ᱡᱼᱤᱸ",
    cʼĩ: "ᱡᱼᱤᱸ",
    "c‘ĩ": "ᱡᱼᱤᱸ",
    "c'ĩ": "ᱡᱼᱤᱸ",
    c̕o: "ᱡᱼᱳ",
    ćo: "ᱡᱼᱳ",
    "c’o": "ᱡᱼᱳ",
    cʼo: "ᱡᱼᱳ",
    "c‘o": "ᱡᱼᱳ",
    "c'o": "ᱡᱼᱳ",
    c̕õ: "ᱡᱼᱳᱸ",
    ćõ: "ᱡᱼᱳᱸ",
    "c’õ": "ᱡᱼᱳᱸ",
    cʼõ: "ᱡᱼᱳᱸ",
    "c‘õ": "ᱡᱼᱳᱸ",
    "c'õ": "ᱡᱼᱳᱸ",
    c̕o̱: "ᱡᱼᱚ",
    ćo̱: "ᱡᱼᱚ",
    "c’o̱": "ᱡᱼᱚ",
    cʼo̱: "ᱡᱼᱚ",
    "c‘o̱": "ᱡᱼᱚ",
    "c'o̱": "ᱡᱼᱚ",
    c̕o̠: "ᱡᱼᱚ",
    ćo̠: "ᱡᱼᱚ",
    "c’o̠": "ᱡᱼᱚ",
    cʼo̠: "ᱡᱼᱚ",
    "c‘o̠": "ᱡᱼᱚ",
    "c'o̠": "ᱡᱼᱚ",
    c̕ọ: "ᱡᱼᱚᱹ",
    ćọ: "ᱡᱼᱚᱹ",
    "c’ọ": "ᱡᱼᱚᱹ",
    cʼọ: "ᱡᱼᱚᱹ",
    "c‘ọ": "ᱡᱼᱚᱹ",
    "c'ọ": "ᱡᱼᱚᱹ",
    c̕õ̱: "ᱡᱼᱚᱸ",
    ćõ̱: "ᱡᱼᱚᱸ",
    "c’õ̱": "ᱡᱼᱚᱸ",
    cʼõ̱: "ᱡᱼᱚᱸ",
    "c‘õ̱": "ᱡᱼᱚᱸ",
    "c'õ̱": "ᱡᱼᱚᱸ",
    c̕õ̱: "ᱡᱼᱚᱸ",
    ćõ̱: "ᱡᱼᱚᱸ",
    "c’õ̱": "ᱡᱼᱚᱸ",
    cʼõ̱: "ᱡᱼᱚᱸ",
    "c‘õ̱": "ᱡᱼᱚᱸ",
    "c'õ̱": "ᱡᱼᱚᱸ",
    c̕õ̠: "ᱡᱼᱚᱸ",
    ćõ̠: "ᱡᱼᱚᱸ",
    "c’õ̠": "ᱡᱼᱚᱸ",
    cʼõ̠: "ᱡᱼᱚᱸ",
    "c‘õ̠": "ᱡᱼᱚᱸ",
    "c'õ̠": "ᱡᱼᱚᱸ",
    c̕u: "ᱡᱼᱩ",
    ću: "ᱡᱼᱩ",
    "c’u": "ᱡᱼᱩ",
    cʼu: "ᱡᱼᱩ",
    "c‘u": "ᱡᱼᱩ",
    "c'u": "ᱡᱼᱩ",
    c̕ũ: "ᱡᱼᱩᱸ",
    ćũ: "ᱡᱼᱩᱸ",
    "c’ũ": "ᱡᱼᱩᱸ",
    cʼũ: "ᱡᱼᱩᱸ",
    "c‘ũ": "ᱡᱼᱩᱸ",
    "c'ũ": "ᱡᱼᱩᱸ",

    // variations of d
    d: "ᱫᱽ",
    dh: "ᱫᱷ",
    ḍ: "ᱰ",
    ḍh: "ᱰᱷ",
    ḍ: "ᱰ",
    ḍh: "ᱰᱷ",
    d̠: "ᱰ",
    d̠h: "ᱰᱷ",
    ḍea: "ᱰᱟᱭᱟ",

    // variations of e
    e: "ᱮ",
    ẽ: "ᱮᱸ",
    ẽ: "ᱮᱸ", // not yet implemented everywhere
    ẹ: "ᱮᱹ",
    ẹ: "ᱮᱹ", // not yet implemented everywhere
    e̱: "ᱮ",
    e̠: "ᱮ",
    e̠̠: "ᱮ", // not yet implemented everywhere
    è: "ᱮ", // not yet implemented everywhere
    ẽ̱: "ᱮᱸ",
    ẽ̱: "ᱮᱸ",
    ẽ̠: "ᱮᱸ",
    ẽ̠: "ᱮᱸ", // not yet implemented everywhere
    ẽ̠: "ᱮᱸ", // not yet implemented everywhere
    ea: "ᱮᱭᱟ",
    ẽa: "ᱮᱸᱭᱟ",
    e̱a: "ᱮᱭᱟ",
    e̠a: "ᱮᱭᱟ",
    ẹa: "ᱮᱹᱭᱟ",
    ẽ̱a: "ᱮᱸᱭᱟ",
    ẽ̱a: "ᱮᱸᱭᱟ",
    ẽ̠a: "ᱮᱸᱭᱟ",
    eạ: "ᱮᱭᱟᱹ",
    ẽạ: "ᱮᱸᱭᱟᱹ",
    e̱ạ: "ᱮᱭᱟᱹ",
    e̠ạ: "ᱮᱭᱟᱹ",
    ẹạ: "ᱮᱹᱭᱟᱹ",
    ẽ̱ạ: "ᱮᱸᱭᱟᱹ",
    ẽ̱ạ: "ᱮᱸᱭᱟᱹ",
    ẽ̠ạ: "ᱮᱸᱭᱟᱹ",
    eã: "ᱮᱸᱭᱟᱹ",
    ẽã: "ᱮᱸᱭᱟᱸ",
    e̱ã: "ᱮᱭᱟᱸ",
    e̠ã: "ᱮᱭᱟᱸ",
    ẹã: "ᱮᱹᱭᱟᱸ",
    ẽ̱ã: "ᱮᱸᱭᱟᱸ",
    ẽ̱ã: "ᱮᱸᱭᱟᱸ",
    ẽ̠ã: "ᱮᱸᱭᱟᱸ",
    eạ̃: "ᱮᱭᱟᱺ",
    ẽạ̃: "ᱮᱸᱭᱟᱺ",
    e̱ạ̃: "ᱮᱭᱟᱺ",
    e̠ạ̃: "ᱮᱭᱟᱺ",
    ẹạ̃: "ᱮᱹᱭᱟᱺ",
    ẽ̱ạ̃: "ᱮᱸᱭᱟᱺ",
    ẽ̱ạ̃: "ᱮᱸᱭᱟᱺ",
    ẽ̠ạ̃: "ᱮᱸᱭᱟᱺ",
    ee: "ᱤ",
    ei: "ᱮᱭ",
    ẽi: "ᱮᱸᱭ",
    e̱i: "ᱮᱭ",
    e̠i: "ᱮᱭ",
    ẹi: "ᱮᱹᱭ",
    ẽ̱i: "ᱮᱸᱭ",
    ẽ̱i: "ᱮᱸᱭ",
    ẽ̠i: "ᱮᱸᱭ",
    eĩ: "ᱮᱸᱭ",
    ẽĩ: "ᱮᱸᱭ",
    e̱ĩ: "ᱮᱸᱭ",
    e̠ĩ: "ᱮᱸᱭ",
    ẹĩ: "ᱮᱸᱭ",
    ẽ̱ĩ: "ᱮᱸᱭ",
    ẽ̱ĩ: "ᱮᱸᱭ",
    ẽ̠ĩ: "ᱮᱸᱭ",
    eo: "ᱮᱣ",
    ẽo: "ᱮᱶ",
    e̠o: "ᱮᱣ",
    e̱o: "ᱮᱣ",
    ẹo: "ᱮᱹᱣ",
    ẽ̱o: "ᱮᱶ",
    ẽ̱o: "ᱮᱶ",
    ẽ̠o: "ᱮᱶ",
    eõ: "ᱮᱶ",
    ẽõ: "ᱮᱶ",
    e̠õ: "ᱮᱶ",
    e̱õ: "ᱮᱶ",
    e̠õ: "ᱮᱶ",
    ẽ̱õ: "ᱮᱶ",
    ẽ̱õ: "ᱮᱶ",
    ẽ̠õ: "ᱮᱶ",
    eọ: "ᱮᱣ",
    ẽọ: "ᱮᱣ",
    e̠ọ: "ᱮᱣ",
    e̱ọ: "ᱮᱣ",
    ẹọ: "ᱮᱹᱣ",
    ẽ̱ọ: "ᱮᱶ",
    ẽ̱ọ: "ᱮᱶ",
    ẽ̠ọ: "ᱮᱶ",
    eo̱: "ᱮᱣ",
    ẽo̱: "ᱮᱶ",
    e̠o̱: "ᱮᱣ",
    e̱o̱: "ᱮᱣ",
    ẹo̱: "ᱮᱹᱣ",
    ẽ̱o̱: "ᱮᱶ",
    ẽ̱o̱: "ᱮᱶ",
    ẽ̠o̱: "ᱮᱶ",
    eo̠: "ᱮᱣ",
    ẽo̠: "ᱮᱶ",
    e̠o̠: "ᱮᱣ",
    e̱o̠: "ᱮᱣ",
    ẹo̠: "ᱮᱹᱣ",
    ẽ̱o̠: "ᱮᱶ",
    ẽ̱o̠: "ᱮᱶ",
    ẽ̠o̠: "ᱮᱶ",
    eõ̱: "ᱮᱶ",
    ẽõ̱: "ᱮᱶ",
    e̠õ̱: "ᱮᱶ",
    e̱õ̱: "ᱮᱶ",
    ẹõ̱: "ᱮᱹᱶ",
    ẽ̱õ̱: "ᱮᱶ",
    ẽ̱õ̱: "ᱮᱶ",
    ẽ̠õ̱: "ᱮᱶ",
    eõ̱: "ᱮᱶ",
    ẽõ̱: "ᱮᱶ",
    e̠õ̱: "ᱮᱶ",
    e̱õ̱: "ᱮᱶ",
    ẹõ̱: "ᱮᱶ",
    ẽ̱õ̱: "ᱮᱶ",
    ẽ̱õ̱: "ᱮᱶ",
    ẽ̠õ̱: "ᱮᱶ",
    eõ̠: "ᱮᱶ",
    ẽõ̠: "ᱮᱶ",
    ẹõ̠: "ᱮᱹᱶ",
    e̱õ̠: "ᱮᱶ",
    e̠õ̠: "ᱮᱶ",
    ẽ̱õ̠: "ᱮᱶ",
    ẽ̱õ̠: "ᱮᱶ",
    ẽ̠õ̠: "ᱮᱶ",
    eu: "ᱮᱣ",
    ẽu: "ᱮᱶ",
    e̱u: "ᱮᱣ",
    e̠u: "ᱮᱣ",
    ẹu: "ᱮᱹᱣ",
    ẽ̱u: "ᱮᱶ",
    ẽ̱u: "ᱮᱶ",
    ẽ̠u: "ᱮᱶ",
    eũ: "ᱮᱶ",
    ẽũ: "ᱮᱶ",
    e̱ũ: "ᱮᱶ",
    e̠ũ: "ᱮᱶ",
    ẹũ: "ᱮᱹᱶ",
    ẽ̱ũ: "ᱮᱶ",
    ẽ̱ũ: "ᱮᱶ",
    ẽ̠ũ: "ᱮᱶ",

    // ᱬ ᱨᱮᱭᱟᱜ ᱵᱚᱱᱚᱫᱚᱞ (ᱲ ᱠᱷᱚᱱ)
    ẽṛ: "ᱮᱬ",
    ẽ̱ṛ: "ᱮᱬ",
    ẽ̱ṛ: "ᱮᱬ",
    ẽ̠ṛ: "ᱮᱬ",

    // ᱯᱮ ᱪᱤᱠᱤᱭᱟᱜ ᱬ ᱵᱚᱱᱚᱫᱚᱞ
    ẽṛẽ: "ᱮᱬᱮ",
    ẽ̱ṛẽ: "ᱮᱬᱮ",
    ẽ̱ṛẽ: "ᱮᱬᱮ",
    ẽ̠ṛẽ: "ᱮᱬᱮ", // ᱢᱚᱪᱟᱹᱫ
    ẽṛẽ̱: "ᱮᱬᱮ",
    ẽ̱ṛẽ̱: "ᱮᱬᱮ",
    ẽ̱ṛẽ̱: "ᱮᱬᱮ",
    ẽ̠ṛẽ̱: "ᱮᱬᱮ", // ᱢᱚᱪᱟᱹᱫ
    ẽṛẽ̱: "ᱮᱬᱮ",
    ẽ̱ṛẽ̱: "ᱮᱬᱮ",
    ẽ̱ṛẽ̱: "ᱮᱬᱮ",
    ẽ̠ṛẽ̱: "ᱮᱬᱮ", // ᱢᱚᱪᱟᱹᱫ
    ẽṛẽ̠: "ᱮᱬᱮ",
    ẽ̱ṛẽ̠: "ᱮᱬᱮ",
    ẽ̱ṛẽ̠: "ᱮᱬᱮ",
    ẽ̠ṛẽ̠: "ᱮᱬᱮ", // ᱢᱚᱪᱟᱹᱫ
    // ᱯᱮ ᱪᱤᱠᱤᱭᱟᱱᱛᱮ ᱬ ᱵᱚᱱᱚᱫᱚᱞ ᱨᱮᱭᱟᱜ ᱢᱩᱪᱟᱹᱫ

    // recently added
    ẽ̠ṛẽ̠: "ᱮᱬᱮ",
    // ᱬ ᱵᱚᱱᱚᱫᱚᱞ ᱨᱮᱭᱟᱜ ᱢᱩᱪᱟᱹᱫ

    eae: "ᱮᱭᱟᱭ",
    eao: "ᱮᱭᱟᱣ",
    eoae: "ᱮᱣᱟᱭᱮ",
    earch: "ᱟᱨᱪ",
    // variations of f
    f: "ᱯᱷ",
    // variations of g
    g: "ᱜᱽ",
    gh: "ᱜᱷ",
    g̣: "ᱜᱽ",
    gʼa: "ᱜᱼᱟ", // Extra if used...
    gʼe: "ᱜᱼᱮ",
    gʼi: "ᱜᱼᱤ",
    gʼo: "ᱜᱼᱚ",
    gʼu: "ᱜᱼᱩ",

    // variations of h
    h: "ᱦ",
    h̕: "ᱦ",
    ḥ: "ᱷ",
    // variations of i
    i: "ᱤ",
    ĩ: "ᱤᱸ",
    ĩ: "ᱤᱸ", // not iplemented yet
    í: "ᱤᱸ", // not iplemented yet
    í́: "ᱤᱸ", // not iplemented yet
    ia: "ᱤᱭᱟ",
    iạ: "ᱤᱭᱟᱹ",
    iã: "ᱤᱭᱟᱸ",
    iạ̃: "ᱤᱭᱟᱺ",
    ĩa: "ᱤᱸᱭᱟ",
    ĩạ: "ᱤᱸᱭᱟᱹ",
    ĩã: "ᱤᱸᱭᱟ",
    ĩạ̃: "ᱤᱸᱭᱟᱺ",
    ie: "ᱤᱭ",
    iẽ: "ᱤᱸᱭ",
    iẹ: "ᱤᱭ",
    ie̱: "ᱤᱭ",
    ie̠: "ᱤᱭ",
    iẽ̱: "ᱤᱸᱭ",
    iẽ̱: "ᱤᱸᱭ",
    ĩe: "ᱤᱸᱭ",
    ĩẽ: "ᱤᱸᱭ",
    ĩẹ: "ᱤᱸᱭ",
    ĩe̱: "ᱤᱸᱭ",
    ĩe̠: "ᱤᱸᱭ",
    ĩẽ̱: "ᱤᱸᱭ",
    ĩẽ̱: "ᱤᱸᱭ",
    iẽ̠: "ᱤᱸᱭ",
    ĩẽ̠: "ᱤᱸᱭ",
    ii: "ᱤ",
    io: "ᱤᱭᱳ",
    iõ: "ᱤᱶ",
    io̱: "ᱤᱭᱚ",
    io̠: "ᱤᱭᱚ",
    iọ: "ᱤᱭᱟᱹ",
    iõ̱: "ᱤᱶ",
    iõ̱: "ᱤᱶ",
    ĩo: "ᱤᱶ",
    ĩõ: "ᱤᱶ",
    ĩo̱: "ᱤᱶ",
    ĩo̠: "ᱤᱶ",
    ĩọ: "ᱤᱶ",
    ĩõ̱: "ᱤᱶ",
    ĩõ̱: "ᱤᱶ",
    iõ̠: "ᱤᱶ",
    ĩõ̠: "ᱤᱶ",
    iu: "ᱤᱣ",
    iũ: "ᱤᱶ",
    ĩu: "ᱤᱶ",
    ĩũ: "ᱤᱶ",
    ĩṛ: "ᱤᱬ",
    iạu: "ᱤᱭᱟᱹᱣ",
    iaeae: "ᱤᱭᱟᱭᱟᱭ",
    iaoae: "ᱤᱭᱟᱣᱟᱭ",
    iạoae: "ᱤᱭᱟᱹᱣᱟᱭ",
    // variations of j
    j: "ᱡᱽ",
    jh: "ᱡᱷ",

    johar: "ᱡᱚᱦᱟᱨ",
    jharkhand: "ᱡᱷᱟᱨᱠᱷᱟᱸᱰ",
    Jharkhõ̱ṇḍ: "ᱡᱷᱟᱨᱠᱷᱚᱱᱰ",
    Jharkho̠ṇḍ: "ᱡᱷᱟᱨᱠᱷᱚᱱᱰ",

    jʼa: "ᱡᱼᱟ", // Extra if used
    jʼe: "ᱡᱼᱮ",
    jʼi: "ᱡᱼᱤ",
    jʼo: "ᱡᱼᱚ",
    jʼu: "ᱡᱼᱩ",

    // variations of k
    k: "ᱠ",
    kh: "ᱠᱷ",
    k̠: "ᱠ",
    k̠h: "ᱠᱷ",
    k̕: "ᱜ",
    ḱ: "ᱜ",
    "k’": "ᱜ",
    kʼ: "ᱜ",
    "k‘": "ᱜ",
    "k'": "ᱜ",
    ḱ: "ᱜ", // not implemented properly
    ḱ́: "ᱜ", // not implemented properly
    ḱ́: "ᱜ", // not implemented properly
    ǩ: "ᱜ", // not implemented properly
    k̕a: "ᱜᱼᱟ",
    ḱa: "ᱜᱼᱟ",
    "k’a": "ᱜᱼᱟ",
    kʼa: "ᱜᱼᱟ",
    "k‘a": "ᱜᱼᱟ",
    "k'a": "ᱜᱼᱟ",
    ḱa: "ᱜᱼᱟ",
    k̕ạ: "ᱜᱼᱟᱹ",
    ḱạ: "ᱜᱼᱟᱹ",
    "k’ạ": "ᱜᱼᱟᱹ",
    kʼạ: "ᱜᱼᱟᱹ",
    "k‘ạ": "ᱜᱼᱟᱹ",
    "k'ạ": "ᱜᱼᱟᱹ",
    ḱạ: "ᱜᱼᱟᱹ",
    k̕ã: "ᱜᱼᱟᱸ",
    ḱã: "ᱜᱼᱟᱸ",
    "k’ã": "ᱜᱼᱟᱸ",
    kʼã: "ᱜᱼᱟᱸ",
    "k‘ã": "ᱜᱼᱟᱸ",
    "k'ã": "ᱜᱼᱟᱸ",
    ḱã: "ᱜᱼᱟᱸ",
    ḱã: "ᱜᱼᱟᱸ",
    k̕ạ̃: "ᱜᱼᱟᱺ",
    ḱạ̃: "ᱜᱼᱟᱺ",
    "k’ạ̃": "ᱜᱼᱟᱺ",
    kʼạ̃: "ᱜᱼᱟᱺ",
    "k‘ạ̃": "ᱜᱼᱟᱺ",
    "k'ạ̃": "ᱜᱼᱟᱺ",
    ḱạ̃: "ᱜᱼᱟᱺ",
    k̕e: "ᱜᱼᱮ",
    ḱe: "ᱜᱼᱮ",
    "k’e": "ᱜᱼᱮ",
    kʼe: "ᱜᱼᱮ",
    "k‘e": "ᱜᱼᱮ",
    "k'e": "ᱜᱼᱮ",
    ḱe: "ᱜᱼᱮ",
    k̕ẽ: "ᱜᱼᱮᱸ",
    ḱẽ: "ᱜᱼᱮᱸ",
    "k’ẽ": "ᱜᱼᱮᱸ",
    kʼẽ: "ᱜᱼᱮᱸ",
    "k‘ẽ": "ᱜᱼᱮᱸ",
    "k'ẽ": "ᱜᱼᱮᱸ",
    ḱẽ: "ᱜᱼᱮᱸ",
    k̕ẹ: "ᱜᱼᱮᱹ",
    ḱẹ: "ᱜᱼᱮᱹ",
    "k’ẹ": "ᱜᱼᱮᱹ",
    kʼẹ: "ᱜᱼᱮᱹ",
    "k‘ẹ": "ᱜᱼᱮᱹ",
    "k'ẹ": "ᱜᱼᱮᱹ",
    ḱẹ: "ᱜᱼᱮᱹ",
    k̕e̱: "ᱜᱼᱮ",
    ḱe̱: "ᱜᱼᱮ",
    "k’e̱": "ᱜᱼᱮ",
    kʼe̱: "ᱜᱼᱮ",
    "k‘e̱": "ᱜᱼᱮ",
    "k'e̱": "ᱜᱼᱮ",
    ḱe̱: "ᱜᱼᱮ",
    k̕e̠: "ᱜᱼᱮ",
    ḱe̠: "ᱜᱼᱮ",
    "k’e̠": "ᱜᱼᱮ",
    kʼe̠: "ᱜᱼᱮ",
    "k‘e̠": "ᱜᱼᱮ",
    "k'e̠": "ᱜᱼᱮ",
    ḱe̠: "ᱜᱼᱮ",
    k̕ẽ̱: "ᱜᱼᱮᱸ",
    ḱẽ̱: "ᱜᱼᱮᱸ",
    "k’ẽ̱": "ᱜᱼᱮᱸ",
    kʼẽ̱: "ᱜᱼᱮᱸ",
    "k‘ẽ̱": "ᱜᱼᱮᱸ",
    "k'ẽ̱": "ᱜᱼᱮᱸ",
    ḱẽ̱: "ᱜᱼᱮᱸ",
    k̕ẽ̱: "ᱜᱼᱮᱸ",
    ḱẽ̱: "ᱜᱼᱮᱸ",
    "k’ẽ̱": "ᱜᱼᱮᱸ",
    kʼẽ̱: "ᱜᱼᱮᱸ",
    "k‘ẽ̱": "ᱜᱼᱮᱸ",
    "k'ẽ̱": "ᱜᱼᱮᱸ",
    ḱẽ̱: "ᱜᱼᱮᱸ",
    k̕ẽ̠: "ᱜᱼᱮᱸ",
    ḱẽ̠: "ᱜᱼᱮᱸ",
    "k’ẽ̠": "ᱜᱼᱮᱸ",
    kʼẽ̠: "ᱜᱼᱮᱸ",
    "k‘ẽ̠": "ᱜᱼᱮᱸ",
    "k'ẽ̠": "ᱜᱼᱮᱸ",
    ḱẽ̠: "ᱜᱼᱮᱸ",
    k̕i: "ᱜᱼᱤ",
    ḱi: "ᱜᱼᱤ",
    "k’i": "ᱜᱼᱤ",
    kʼi: "ᱜᱼᱤ",
    "k‘i": "ᱜᱼᱤ",
    "k'i": "ᱜᱼᱤ",
    ḱi: "ᱜᱼᱤ",
    k̕ĩ: "ᱜᱼᱤᱸ",
    ḱĩ: "ᱜᱼᱤᱸ",
    "k’ĩ": "ᱜᱼᱤᱸ",
    kʼĩ: "ᱜᱼᱤᱸ",
    "k‘ĩ": "ᱜᱼᱤᱸ",
    "k'ĩ": "ᱜᱼᱤᱸ",
    ḱĩ: "ᱜᱼᱤᱸ",
    k̕o: "ᱜᱼᱳ",
    ḱo: "ᱜᱼᱳ",
    "k’o": "ᱜᱼᱳ",
    kʼo: "ᱜᱼᱳ",
    "k‘o": "ᱜᱼᱳ",
    "k'o": "ᱜᱼᱳ",
    ḱo: "ᱜᱼᱳ",
    k̕õ: "ᱜᱼᱳᱸ",
    ḱõ: "ᱜᱼᱳᱸ",
    "k’õ": "ᱜᱼᱳᱸ",
    kʼõ: "ᱜᱼᱳᱸ",
    "k‘õ": "ᱜᱼᱳᱸ",
    "k'õ": "ᱜᱼᱳᱸ",
    ḱõ: "ᱜᱼᱳᱸ",
    k̕o̱: "ᱜᱼᱚ",
    ḱo̱: "ᱜᱼᱚ",
    "k’o̱": "ᱜᱼᱚ",
    kʼo̱: "ᱜᱼᱚ",
    "k‘o̱": "ᱜᱼᱚ",
    "k'o̱": "ᱜᱼᱚ",
    ḱo̱: "ᱜᱼᱚ",
    k̕o̠: "ᱜᱼᱚ",
    ḱo̠: "ᱜᱼᱚ",
    "k’o̠": "ᱜᱼᱚ",
    kʼo̠: "ᱜᱼᱚ",
    "k‘o̠": "ᱜᱼᱚ",
    "k'o̠": "ᱜᱼᱚ",
    ḱo̠: "ᱜᱼᱚ",
    k̕ọ: "ᱜᱼᱚᱹ",
    ḱọ: "ᱜᱼᱚᱹ",
    "k’ọ": "ᱜᱼᱚᱹ",
    kʼọ: "ᱜᱼᱚᱹ",
    "k‘ọ": "ᱜᱼᱚᱹ",
    "k'ọ": "ᱜᱼᱚᱹ",
    ḱọ: "ᱜᱼᱚᱹ",
    k̕õ̱: "ᱜᱼᱚᱸ",
    ḱõ̱: "ᱜᱼᱚᱸ",
    "k’õ̱": "ᱜᱼᱚᱸ",
    kʼõ̱: "ᱜᱼᱚᱸ",
    "k‘õ̱": "ᱜᱼᱚᱸ",
    "k'õ̱": "ᱜᱼᱚᱸ",
    ḱõ̱: "ᱜᱼᱚᱸ",
    k̕õ̱: "ᱜᱼᱚᱸ",
    ḱõ̱: "ᱜᱼᱚᱸ",
    "k’õ̱": "ᱜᱼᱚᱸ",
    kʼõ̱: "ᱜᱼᱚᱸ",
    "k‘õ̱": "ᱜᱼᱚᱸ",
    "k'õ̱": "ᱜᱼᱚᱸ",
    ḱõ̱: "ᱜᱼᱚᱸ",
    k̕õ̠: "ᱜᱼᱚᱸ",
    ḱõ̠: "ᱜᱼᱚᱸ",
    "k’õ̠": "ᱜᱼᱚᱸ",
    kʼõ̠: "ᱜᱼᱚᱸ",
    "k‘õ̠": "ᱜᱼᱚᱸ",
    "k'õ̠": "ᱜᱼᱚᱸ",
    ḱõ̠: "ᱜᱼᱚᱸ",
    k̕u: "ᱜᱼᱩ",
    ḱu: "ᱜᱼᱩ",
    "k’u": "ᱜᱼᱩ",
    kʼu: "ᱜᱼᱩ",
    "k‘u": "ᱜᱼᱩ",
    "k'u": "ᱜᱼᱩ",
    ḱu: "ᱜᱼᱩ",
    k̕ũ: "ᱜᱼᱩᱸ",
    ḱũ: "ᱜᱼᱩᱸ",
    "k’ũ": "ᱜᱼᱩᱸ",
    kʼũ: "ᱜᱼᱩᱸ",
    "k‘ũ": "ᱜᱼᱩᱸ",
    "k'ũ": "ᱜᱼᱩᱸ",
    ḱũ: "ᱜᱼᱩᱸ",

    // variations of l
    l: "ᱞ",

    lie: "ᱞᱤᱭᱮ",
    // variations of m
    m: "ᱢ",
    // variations of n
    ṇ: "ᱬ",
    ṇ: "ᱬ", // not implemented everywhere
    ṅ: "ᱝ",
    ṅ: "ᱝ",
    ṅ̇: "ᱝ", // not implemented everywhere
    ń: "ᱧ",
    ń: "ᱧ",
    ñ: "ᱧ",
    ñ: "ᱧ",
    n: "ᱱ",

    // ᱢᱩᱸ ᱴᱩᱰᱟᱹᱜᱼᱮ ᱚᱪᱚᱜᱼᱟᱠᱟᱱᱟ ᱨᱮᱭᱟᱜ ᱮᱛᱚᱦᱚᱵ
    ṇã: "ᱬᱟ", // ᱮᱛᱚᱦᱚᱵ ᱬ ᱞᱟᱹᱜᱤᱫ ᱠᱟᱱᱟ
    ṇã: "ᱬᱟ",
    ṇã̃: "ᱬᱟ",
    ṇá: "ᱬᱟ",
    ṇạ̃: "ᱬᱟᱹ",
    ṇạ̃: "ᱬᱟᱹ",
    ṇạ̃: "ᱬᱟᱹ",
    ṇã̠: "ᱬᱟᱹ",
    ṇẽ: "ᱬᱮ",
    ṇẽ: "ᱬᱮ",
    ṇẽ̱: "ᱬᱮ",
    ṇẽ̱: "ᱬᱮ",
    ṇẽ̠: "ᱬᱮ",
    ṇẽ̠: "ᱬᱮ",
    ṇẽ̠: "ᱬᱮ",
    ṇĩ: "ᱬᱤ",
    ṇĩ: "ᱬᱤ",
    ṇí: "ᱬᱤ",
    ṇí́: "ᱬᱤ",
    ṇõ: "ᱬᱳ",
    ṇõ: "ᱬᱳ",
    ṇọ̃: "ᱬᱚ",
    ṇõ̱: "ᱬᱚ",
    ṇõ̱: "ᱬᱚ",
    ṇõ̠: "ᱬᱚ",
    ṇõ̠: "ᱬᱚ",
    ṇõ̠: "ᱬᱚ",
    ṇõ̠̃: "ᱬᱚ",
    ṇũ: "ᱬᱩ",
    ṇũ: "ᱬᱩ",
    ṇã: "ᱬᱟ", // ᱫᱚᱥᱟᱨ ᱬ ᱞᱟᱹᱜᱤᱫ ᱠᱟᱱᱟ
    ṇã: "ᱬᱟ",
    ṇã̃: "ᱬᱟ",
    ṇá: "ᱬᱟ",
    ṇạ̃: "ᱬᱟᱹ",
    ṇạ̃: "ᱬᱟᱹ",
    ṇạ̃: "ᱬᱟᱹ",
    ṇã̠: "ᱬᱟᱹ",
    ṇẽ: "ᱬᱮ",
    ṇẽ: "ᱬᱮ",
    ṇẽ̱: "ᱬᱮ",
    ṇẽ̱: "ᱬᱮ",
    ṇẽ̠: "ᱬᱮ",
    ṇẽ̠: "ᱬᱮ",
    ṇẽ̠: "ᱬᱮ",
    ṇĩ: "ᱬᱤ",
    ṇĩ: "ᱬᱤ",
    ṇí: "ᱬᱤ",
    ṇí́: "ᱬᱤ",
    ṇõ: "ᱬᱳ",
    ṇõ: "ᱬᱳ",
    ṇọ̃: "ᱬᱚ",
    ṇõ̱: "ᱬᱚ",
    ṇõ̱: "ᱬᱚ",
    ṇõ̠: "ᱬᱚ",
    ṇõ̠: "ᱬᱚ",
    ṇõ̠: "ᱬᱚ",
    ṇõ̠̃: "ᱬᱚ",
    ṇũ: "ᱬᱩ",
    ṇũ: "ᱬᱩ",

    // // ᱢᱩᱸ ᱴᱩᱰᱟᱹᱜᱼᱮ ᱚᱪᱚᱜᱼᱟᱠᱟᱱᱟ ᱯᱮ ᱪᱤᱠᱤ ᱛᱮ
    ãṇã: "ᱟᱬᱟ",
    ãṇã: "ᱟᱬᱟ",
    ã̃ṇã: "ᱟᱬᱟ",
    áṇã: "ᱟᱬᱟ",
    ạ̃ṇã: "ᱟᱬᱟ",
    ạ̃ṇã: "ᱟᱬᱟ",
    ạ̃ṇã: "ᱟᱬᱟ",
    ã̠ṇã: "ᱟᱬᱟ", // ᱪᱟᱵᱟ
    ãṇã: "ᱟᱬᱟ",
    ãṇã: "ᱟᱬᱟ",
    ã̃ṇã: "ᱟᱬᱟ",
    áṇã: "ᱟᱬᱟ",
    ạ̃ṇã: "ᱟᱬᱟ",
    ạ̃ṇã: "ᱟᱬᱟ",
    ạ̃ṇã: "ᱟᱬᱟ",
    ã̠ṇã: "ᱟᱬᱟ", // ᱪᱟᱵᱟ
    ãṇã̃: "ᱟᱬᱟ",
    ãṇã̃: "ᱟᱬᱟ",
    ã̃ṇã̃: "ᱟᱬᱟ",
    áṇã̃: "ᱟᱬᱟ",
    ạ̃ṇã̃: "ᱟᱬᱟ",
    ạ̃ṇã̃: "ᱟᱬᱟ",
    ạ̃ṇã̃: "ᱟᱬᱟ",
    ã̠ṇã̃: "ᱟᱬᱟ", // ᱪᱟᱵᱟ

    // ᱢᱩᱸ ᱴᱩᱰᱟᱹᱜᱼᱮ ᱚᱪᱚᱜᱼᱟᱠᱟᱱᱟ ᱨᱮᱭᱟᱜ

    noṇḍoṅ: "ᱱᱳᱬᱳᱝ",
    ṇḍ: "ᱱᱰ",
    ṇḍ: "ᱱᱰ",

    // variations of o
    o: "ᱳ",
    õ: "ᱳᱸ",
    õ: "ᱳᱸ", // not applied everywhere
    o̱: "ᱚ",
    o̠: "ᱚ",
    ọ: "ᱚᱹ",
    ọ: "ᱚᱹ", // not applied everywhere
    ọ̃: "ᱚᱸ", // not applied everywhere
    õ̱: "ᱚᱸ",
    õ̱: "ᱚᱸ",
    õ̠: "ᱚᱸ",
    õ̠: "ᱚᱸ", // not applied everywhere
    õ̠: "ᱚᱸ", // not applied everywhere
    õ̠̃: "ᱚᱸ", // not applied everywhere
    oa: "ᱳᱣᱟ",
    õa: "ᱳᱶᱟ",
    o̱a: "ᱚᱣᱟ",
    o̠a: "ᱚᱣᱟ",
    ọa: "ᱚᱹᱣᱟ",
    õ̱a: "ᱚᱶᱟ",
    õ̱a: "ᱚᱶᱟ",
    õ̠a: "ᱚᱶᱟ",
    oạ: "ᱳᱣᱟᱹ",
    õạ: "ᱳᱶᱟᱹ",
    o̱ạ: "ᱚᱣᱟᱹ",
    o̠ạ: "ᱚᱣᱟᱹ",
    ọạ: "ᱚᱹᱣᱟᱹ",
    õ̱ạ: "ᱚᱶᱟᱹ",
    õ̱ạ: "ᱚᱶᱟᱹ",
    õ̠ạ: "ᱚᱶᱟᱹ",
    oã: "ᱳᱶᱟ",
    õã: "ᱳᱶᱟ",
    o̱ã: "ᱚᱶᱟ",
    o̠ã: "ᱚᱶᱟ",
    ọã: "ᱚᱹᱶᱟ",
    õ̱ã: "ᱚᱶᱟ",
    õ̱ã: "ᱚᱶᱟ",
    õ̠ã: "ᱚᱶᱟ",
    oạ̃: "ᱳᱶᱟᱹ",
    õạ̃: "ᱳᱶᱟᱹ",
    o̱ạ̃: "ᱚᱶᱟᱹ",
    o̠ạ̃: "ᱚᱶᱟᱹ",
    ọạ̃: "ᱚᱹᱶᱟᱹ",
    õ̱ạ̃: "ᱚᱶᱟᱹ",
    õ̱ạ̃: "ᱚᱶᱟᱹ",
    õ̠ạ̃: "ᱚᱶᱟᱹ",
    oe: "ᱳᱭ",
    õe: "ᱳᱸᱭ",
    o̠e: "ᱚᱭ",
    o̱e: "ᱚᱭ",
    õ̱e: "ᱚᱸᱭ",
    õ̱e: "ᱚᱸᱭ",
    õ̠e: "ᱚᱸᱭ",
    oẽ: "ᱳᱭ",
    õẽ: "ᱳᱸᱭ",
    o̠ẽ: "ᱚᱭ",
    o̱ẽ: "ᱚᱭ",
    õ̱ẽ: "ᱚᱸᱭ",
    õ̱ẽ: "ᱚᱸᱭ",
    õ̠ẽ: "ᱚᱸᱭ",
    oẹ: "ᱳᱭ",
    õẹ: "ᱳᱸᱭ",
    o̠ẹ: "ᱚᱭ",
    o̱ẹ: "ᱚᱭ",
    õ̱ẹ: "ᱚᱸᱭ",
    õ̱ẹ: "ᱚᱸᱭ",
    õ̠ẹ: "ᱚᱸᱭ",
    oe̱: "ᱳᱭ",
    õe̱: "ᱳᱸᱭ",
    o̠e̱: "ᱚᱭ",
    o̱e̱: "ᱚᱭ",
    õ̱e̱: "ᱚᱸᱭ",
    õ̱e̱: "ᱚᱸᱭ",
    õ̠e̱: "ᱚᱸᱭ",
    oe̠: "ᱳᱭ",
    õe̠: "ᱳᱸᱭ",
    o̠e̠: "ᱚᱭ",
    o̱e̠: "ᱚᱭ",
    õ̱e̠: "ᱚᱸᱭ",
    õ̱e̠: "ᱚᱸᱭ",
    õ̠e̠: "ᱚᱸᱭ",
    oẽ̱: "ᱳᱭ",
    õẽ̱: "ᱳᱸᱭ",
    o̠ẽ̱: "ᱚᱭ",
    o̱ẽ̱: "ᱚᱭ",
    õ̱ẽ̱: "ᱚᱸᱭ",
    õ̱ẽ̱: "ᱚᱸᱭ",
    õ̠ẽ̱: "ᱚᱸᱭ",
    oẽ̱: "ᱳᱭ",
    õẽ̱: "ᱳᱸᱭ",
    o̠ẽ̱: "ᱚᱭ",
    o̱ẽ̱: "ᱚᱭ",
    õ̱ẽ̱: "ᱚᱸᱭ",
    õ̱ẽ̱: "ᱚᱸᱭ",
    õ̠ẽ̱: "ᱚᱸᱭ",
    oẽ̠: "ᱳᱸᱭ",
    õẽ̠: "ᱳᱸᱭ",
    o̱ẽ̠: "ᱚᱸᱭ",
    o̠ẽ̠: "ᱚᱸᱭ",
    ọẽ̠: "ᱚᱺᱭ",
    õ̱ẽ̠: "ᱚᱸᱭ",
    õ̱ẽ̠: "ᱚᱸᱭ",
    õ̠ẽ̠: "ᱚᱸᱭ",
    oi: "ᱳᱭ",
    õi: "ᱳᱸᱭ",
    o̱i: "ᱚᱭ",
    o̠i: "ᱚᱭ",
    ọi: "ᱚᱹᱭ",
    õ̱i: "ᱚᱸᱭ",
    õ̱i: "ᱚᱸᱭ",
    õ̠i: "ᱚᱸᱭ",
    oĩ: "ᱳᱸᱭ",
    õĩ: "ᱳᱸᱭ",
    o̱ĩ: "ᱚᱸᱭ",
    o̠ĩ: "ᱚᱸᱭ",
    ọĩ: "ᱚᱺᱭ",
    õ̱ĩ: "ᱚᱸᱭ",
    õ̱ĩ: "ᱚᱸᱭ",
    õ̠ĩ: "ᱚᱸᱭ",
    oo: "ᱩ",
    ou: "ᱳᱣ",
    õu: "ᱳᱶ",
    o̱u: "ᱚᱣ",
    o̠u: "ᱚᱣ",
    ọu: "ᱚᱹᱣ",
    õ̱u: "ᱚᱶ",
    õ̱u: "ᱚᱶ",
    õ̠u: "ᱚᱶ",
    oũ: "ᱳᱶ",
    õũ: "ᱳᱶ",
    o̱ũ: "ᱚᱶ",
    o̠ũ: "ᱚᱶ",
    ọũ: "ᱚᱹᱶ",
    õ̱ũ: "ᱚᱶ",
    õ̱ũ: "ᱚᱶ",
    õ̠ũ: "ᱚᱶ",
    õṛ: "ᱳᱬ",
    õ̱ṛ: "ᱚᱬ",
    õ̱ṛ: "ᱚᱬ",
    õ̠ṛ: "ᱚᱬ",
    o̠ae: "ᱚᱣᱟᱭ",
    oae: "ᱳᱣᱟᱭ",
    oen: "ᱳᱭᱮᱱ",
    o̠en: "ᱚᱭᱮᱱ",
    // variations of p
    p: "ᱯ",
    ph: "ᱯᱷ",
    p̕: "ᱵ",
    ṕ: "ᱵ",
    ṕ: "ᱵ", // not implemented everywhere
    "p’": "ᱵ",
    pʼ: "ᱵ",
    "p‘": "ᱵ",
    "p'": "ᱵ",
    p̕a: "ᱵᱼᱟ",
    ṕa: "ᱵᱼᱟ",
    "p’a": "ᱵᱼᱟ",
    pʼa: "ᱵᱼᱟ",
    "p‘a": "ᱵᱼᱟ",
    "p'a": "ᱵᱼᱟ",
    p̕ạ: "ᱵᱼᱟᱹ",
    ṕạ: "ᱵᱼᱟᱹ",
    "p’ạ": "ᱵᱼᱟᱹ",
    pʼạ: "ᱵᱼᱟᱹ",
    "p‘ạ": "ᱵᱼᱟᱹ",
    "p'ạ": "ᱵᱼᱟᱹ",
    p̕ã: "ᱵᱼᱟᱸ",
    ṕã: "ᱵᱼᱟᱸ",
    "p’ã": "ᱵᱼᱟᱸ",
    pʼã: "ᱵᱼᱟᱸ",
    "p‘ã": "ᱵᱼᱟᱸ",
    "p'ã": "ᱵᱼᱟᱸ",
    p̕ạ̃: "ᱵᱼᱟᱺ",
    ṕạ̃: "ᱵᱼᱟᱺ",
    "p’ạ̃": "ᱵᱼᱟᱺ",
    pʼạ̃: "ᱵᱼᱟᱺ",
    "p‘ạ̃": "ᱵᱼᱟᱺ",
    "p'ạ̃": "ᱵᱼᱟᱺ",
    p̕e: "ᱵᱼᱮ",
    ṕe: "ᱵᱼᱮ",
    "p’e": "ᱵᱼᱮ",
    pʼe: "ᱵᱼᱮ",
    "p‘e": "ᱵᱼᱮ",
    "p'e": "ᱵᱼᱮ",
    p̕ẽ: "ᱵᱼᱮᱸ",
    ṕẽ: "ᱵᱼᱮᱸ",
    "p’ẽ": "ᱵᱼᱮᱸ",
    pʼẽ: "ᱵᱼᱮᱸ",
    "p‘ẽ": "ᱵᱼᱮᱸ",
    "p'ẽ": "ᱵᱼᱮᱸ",
    p̕ẹ: "ᱵᱼᱮᱹ",
    ṕẹ: "ᱵᱼᱮᱹ",
    "p’ẹ": "ᱵᱼᱮᱹ",
    pʼẹ: "ᱵᱼᱮᱹ",
    "p‘ẹ": "ᱵᱼᱮᱹ",
    "p'ẹ": "ᱵᱼᱮᱹ",
    p̕e̱: "ᱵᱼᱮ",
    ṕe̱: "ᱵᱼᱮ",
    "p’e̱": "ᱵᱼᱮ",
    pʼe̱: "ᱵᱼᱮ",
    "p‘e̱": "ᱵᱼᱮ",
    "p'e̱": "ᱵᱼᱮ",
    p̕e̠: "ᱵᱼᱮ",
    ṕe̠: "ᱵᱼᱮ",
    "p’e̠": "ᱵᱼᱮ",
    pʼe̠: "ᱵᱼᱮ",
    "p‘e̠": "ᱵᱼᱮ",
    "p'e̠": "ᱵᱼᱮ",
    p̕ẽ̱: "ᱵᱼᱮᱸ",
    ṕẽ̱: "ᱵᱼᱮᱸ",
    "p’ẽ̱": "ᱵᱼᱮᱸ",
    pʼẽ̱: "ᱵᱼᱮᱸ",
    "p‘ẽ̱": "ᱵᱼᱮᱸ",
    "p'ẽ̱": "ᱵᱼᱮᱸ",
    p̕ẽ̱: "ᱵᱼᱮᱸ",
    ṕẽ̱: "ᱵᱼᱮᱸ",
    "p’ẽ̱": "ᱵᱼᱮᱸ",
    pʼẽ̱: "ᱵᱼᱮᱸ",
    "p‘ẽ̱": "ᱵᱼᱮᱸ",
    "p'ẽ̱": "ᱵᱼᱮᱸ",
    p̕ẽ̠: "ᱵᱼᱮᱸ",
    ṕẽ̠: "ᱵᱼᱮᱸ",
    "p’ẽ̠": "ᱵᱼᱮᱸ",
    pʼẽ̠: "ᱵᱼᱮᱸ",
    "p‘ẽ̠": "ᱵᱼᱮᱸ",
    "p'ẽ̠": "ᱵᱼᱮᱸ",
    p̕i: "ᱵᱼᱤ",
    ṕi: "ᱵᱼᱤ",
    "p’i": "ᱵᱼᱤ",
    pʼi: "ᱵᱼᱤ",
    "p‘i": "ᱵᱼᱤ",
    "p'i": "ᱵᱼᱤ",
    p̕ĩ: "ᱵᱼᱤᱸ",
    ṕĩ: "ᱵᱼᱤᱸ",
    "p’ĩ": "ᱵᱼᱤᱸ",
    pʼĩ: "ᱵᱼᱤᱸ",
    "p‘ĩ": "ᱵᱼᱤᱸ",
    "p'ĩ": "ᱵᱼᱤᱸ",
    p̕o: "ᱵᱼᱳ",
    ṕo: "ᱵᱼᱳ",
    "p’o": "ᱵᱼᱳ",
    pʼo: "ᱵᱼᱳ",
    "p‘o": "ᱵᱼᱳ",
    "p'o": "ᱵᱼᱳ",
    p̕õ: "ᱵᱼᱳᱸ",
    ṕõ: "ᱵᱼᱳᱸ",
    "p’õ": "ᱵᱼᱳᱸ",
    pʼõ: "ᱵᱼᱳᱸ",
    "p‘õ": "ᱵᱼᱳᱸ",
    "p'õ": "ᱵᱼᱳᱸ",
    p̕o̱: "ᱵᱼᱚ",
    ṕo̱: "ᱵᱼᱚ",
    "p’o̱": "ᱵᱼᱚ",
    pʼo̱: "ᱵᱼᱚ",
    "p‘o̱": "ᱵᱼᱚ",
    "p'o̱": "ᱵᱼᱚ",
    p̕o̠: "ᱵᱼᱚ",
    ṕo̠: "ᱵᱼᱚ",
    "p’o̠": "ᱵᱼᱚ",
    pʼo̠: "ᱵᱼᱚ",
    "p‘o̠": "ᱵᱼᱚ",
    "p'o̠": "ᱵᱼᱚ",
    p̕ọ: "ᱵᱼᱚᱹ",
    ṕọ: "ᱵᱼᱚᱹ",
    "p’ọ": "ᱵᱼᱚᱹ",
    pʼọ: "ᱵᱼᱚᱹ",
    "p‘ọ": "ᱵᱼᱚᱹ",
    "p'ọ": "ᱵᱼᱚᱹ",
    p̕õ̱: "ᱵᱼᱚᱸ",
    ṕõ̱: "ᱵᱼᱚᱸ",
    "p’õ̱": "ᱵᱼᱚᱸ",
    pʼõ̱: "ᱵᱼᱚᱸ",
    "p‘õ̱": "ᱵᱼᱚᱸ",
    "p'õ̱": "ᱵᱼᱚᱸ",
    p̕õ̱: "ᱵᱼᱚᱸ",
    ṕõ̱: "ᱵᱼᱚᱸ",
    "p’õ̱": "ᱵᱼᱚᱸ",
    pʼõ̱: "ᱵᱼᱚᱸ",
    "p‘õ̱": "ᱵᱼᱚᱸ",
    "p'õ̱": "ᱵᱼᱚᱸ",
    p̕õ̠: "ᱵᱼᱚᱸ",
    ṕõ̠: "ᱵᱼᱚᱸ",
    "p’õ̠": "ᱵᱼᱚᱸ",
    pʼõ̠: "ᱵᱼᱚᱸ",
    "p‘õ̠": "ᱵᱼᱚᱸ",
    "p'õ̠": "ᱵᱼᱚᱸ",
    p̕u: "ᱵᱼᱩ",
    ṕu: "ᱵᱼᱩ",
    "p’u": "ᱵᱼᱩ",
    pʼu: "ᱵᱼᱩ",
    "p‘u": "ᱵᱼᱩ",
    "p'u": "ᱵᱼᱩ",
    p̕ũ: "ᱵᱼᱩᱸ",
    ṕũ: "ᱵᱼᱩᱸ",
    "p’ũ": "ᱵᱼᱩᱸ",
    pʼũ: "ᱵᱼᱩᱸ",
    "p‘ũ": "ᱵᱼᱩᱸ",
    "p'ũ": "ᱵᱼᱩᱸ",

    poṇḍge: "ᱯᱳᱬᱜᱮ",

    // variations of q
    q: "ᱠ",
    // variations of r
    r: "ᱨ",
    ṛ: "ᱲ",
    ṛ: "ᱲ",
    ṛ̣: "ᱲ", // not implemented everywhere
    r̠: "ᱲ", // not implemented everywhere
    ṛ̃: "ᱬ",

    rie: "ᱨᱤᱭᱮ",
    // variations of s
    s: "ᱥ",
    sh: "ᱥ",
    ṣ: "ᱥ",
    ś: "ᱥ",
    s̠: "ᱥ", // not implemented everywhere
    saḍea: "ᱥᱟᱰᱮᱭᱟ",
    // variations of t
    t: "ᱛ",
    th: "ᱛᱷ",
    ṭ: "ᱴ",
    ṭh: "ᱴᱷ",
    ț: "ᱴ",
    țh: "ᱴᱷ",
    ṭ: "ᱴ",
    ṭh: "ᱴᱷ",
    t̠: "ᱴ",
    t̠h: "ᱴᱷ",
    ṭ̣: "ᱴ",
    ṭ̣h: "ᱴᱷ",
    t̕: "ᱫ",
    t́: "ᱫ",
    "t’": "ᱫ",
    tʼ: "ᱫ",
    "t‘": "ᱫ",
    "t'": "ᱫ",
    t́́: "ᱫ", // not implemented everywhere
    "t'": "ᱫ", // not implemented everywhere
    t̕a: "ᱫᱼᱟ",
    t́a: "ᱫᱼᱟ",
    "t’a": "ᱫᱼᱟ",
    tʼa: "ᱫᱼᱟ",
    "t‘a": "ᱫᱼᱟ",
    "t'a": "ᱫᱼᱟ",
    t̕ạ: "ᱫᱼᱟᱹ",
    t́ạ: "ᱫᱼᱟᱹ",
    "t’ạ": "ᱫᱼᱟᱹ",
    tʼạ: "ᱫᱼᱟᱹ",
    "t‘ạ": "ᱫᱼᱟᱹ",
    "t'ạ": "ᱫᱼᱟᱹ",
    t̕ã: "ᱫᱼᱟᱸ",
    t́ã: "ᱫᱼᱟᱸ",
    "t’ã": "ᱫᱼᱟᱸ",
    tʼã: "ᱫᱼᱟᱸ",
    "t‘ã": "ᱫᱼᱟᱸ",
    "t'ã": "ᱫᱼᱟᱸ",
    t̕ạ̃: "ᱫᱼᱟᱺ",
    t́ạ̃: "ᱫᱼᱟᱺ",
    "t’ạ̃": "ᱫᱼᱟᱺ",
    tʼạ̃: "ᱫᱼᱟᱺ",
    "t‘ạ̃": "ᱫᱼᱟᱺ",
    "t'ạ̃": "ᱫᱼᱟᱺ",
    t̕e: "ᱫᱼᱮ",
    t́e: "ᱫᱼᱮ",
    "t’e": "ᱫᱼᱮ",
    tʼe: "ᱫᱼᱮ",
    "t‘e": "ᱫᱼᱮ",
    "t'e": "ᱫᱼᱮ",
    t̕ẽ: "ᱫᱼᱮᱸ",
    t́ẽ: "ᱫᱼᱮᱸ",
    "t’ẽ": "ᱫᱼᱮᱸ",
    tʼẽ: "ᱫᱼᱮᱸ",
    "t‘ẽ": "ᱫᱼᱮᱸ",
    "t'ẽ": "ᱫᱼᱮᱸ",
    t̕ẹ: "ᱫᱼᱮᱹ",
    t́ẹ: "ᱫᱼᱮᱹ",
    "t’ẹ": "ᱫᱼᱮᱹ",
    tʼẹ: "ᱫᱼᱮᱹ",
    "t‘ẹ": "ᱫᱼᱮᱹ",
    "t'ẹ": "ᱫᱼᱮᱹ",
    t̕e̱: "ᱫᱼᱮ",
    t́e̱: "ᱫᱼᱮ",
    "t’e̱": "ᱫᱼᱮ",
    tʼe̱: "ᱫᱼᱮ",
    "t‘e̱": "ᱫᱼᱮ",
    "t'e̱": "ᱫᱼᱮ",
    t̕e̠: "ᱫᱼᱮ",
    t́e̠: "ᱫᱼᱮ",
    "t’e̠": "ᱫᱼᱮ",
    tʼe̠: "ᱫᱼᱮ",
    "t‘e̠": "ᱫᱼᱮ",
    "t'e̠": "ᱫᱼᱮ",
    t̕ẽ̱: "ᱫᱼᱮᱸ",
    t́ẽ̱: "ᱫᱼᱮᱸ",
    "t’ẽ̱": "ᱫᱼᱮᱸ",
    tʼẽ̱: "ᱫᱼᱮᱸ",
    "t‘ẽ̱": "ᱫᱼᱮᱸ",
    "t'ẽ̱": "ᱫᱼᱮᱸ",
    t̕ẽ̱: "ᱫᱼᱮᱸ",
    t́ẽ̱: "ᱫᱼᱮᱸ",
    "t’ẽ̱": "ᱫᱼᱮᱸ",
    tʼẽ̱: "ᱫᱼᱮᱸ",
    "t‘ẽ̱": "ᱫᱼᱮᱸ",
    "t'ẽ̱": "ᱫᱼᱮᱸ",
    t̕ẽ̠: "ᱫᱼᱮᱸ",
    t́ẽ̠: "ᱫᱼᱮᱸ",
    "t’ẽ̠": "ᱫᱼᱮᱸ",
    tʼẽ̠: "ᱫᱼᱮᱸ",
    "t‘ẽ̠": "ᱫᱼᱮᱸ",
    "t'ẽ̠": "ᱫᱼᱮᱸ",
    t̕i: "ᱫᱼᱤ",
    t́i: "ᱫᱼᱤ",
    "t’i": "ᱫᱼᱤ",
    tʼi: "ᱫᱼᱤ",
    "t‘i": "ᱫᱼᱤ",
    "t'i": "ᱫᱼᱤ",
    t̕ĩ: "ᱫᱼᱤᱸ",
    t́ĩ: "ᱫᱼᱤᱸ",
    "t’ĩ": "ᱫᱼᱤᱸ",
    tʼĩ: "ᱫᱼᱤᱸ",
    "t‘ĩ": "ᱫᱼᱤᱸ",
    "t'ĩ": "ᱫᱼᱤᱸ",
    t̕o: "ᱫᱼᱳ",
    t́o: "ᱫᱼᱳ",
    "t’o": "ᱫᱼᱳ",
    tʼo: "ᱫᱼᱳ",
    "t‘o": "ᱫᱼᱳ",
    "t'o": "ᱫᱼᱳ",
    t̕õ: "ᱫᱼᱳᱸ",
    t́õ: "ᱫᱼᱳᱸ",
    "t’õ": "ᱫᱼᱳᱸ",
    tʼõ: "ᱫᱼᱳᱸ",
    "t‘õ": "ᱫᱼᱳᱸ",
    "t'õ": "ᱫᱼᱳᱸ",
    t̕o̱: "ᱫᱼᱚ",
    t́o̱: "ᱫᱼᱚ",
    "t’o̱": "ᱫᱼᱚ",
    tʼo̱: "ᱫᱼᱚ",
    "t‘o̱": "ᱫᱼᱚ",
    "t'o̱": "ᱫᱼᱚ",
    t̕o̠: "ᱫᱼᱚ",
    t́o̠: "ᱫᱼᱚ",
    "t’o̠": "ᱫᱼᱚ",
    tʼo̠: "ᱫᱼᱚ",
    "t‘o̠": "ᱫᱼᱚ",
    "t'o̠": "ᱫᱼᱚ",
    t̕ọ: "ᱫᱼᱚᱹ",
    t́ọ: "ᱫᱼᱚᱹ",
    "t’ọ": "ᱫᱼᱚᱹ",
    tʼọ: "ᱫᱼᱚᱹ",
    "t‘ọ": "ᱫᱼᱚᱹ",
    "t'ọ": "ᱫᱼᱚᱹ",
    t̕õ̱: "ᱫᱼᱚᱸ",
    t́õ̱: "ᱫᱼᱚᱸ",
    "t’õ̱": "ᱫᱼᱚᱸ",
    tʼõ̱: "ᱫᱼᱚᱸ",
    "t‘õ̱": "ᱫᱼᱚᱸ",
    "t'õ̱": "ᱫᱼᱚᱸ",
    t̕õ̱: "ᱫᱼᱚᱸ",
    t́õ̱: "ᱫᱼᱚᱸ",
    "t’õ̱": "ᱫᱼᱚᱸ",
    tʼõ̱: "ᱫᱼᱚᱸ",
    "t‘õ̱": "ᱫᱼᱚᱸ",
    "t'õ̱": "ᱫᱼᱚᱸ",
    t̕õ̠: "ᱫᱼᱚᱸ",
    t́õ̠: "ᱫᱼᱚᱸ",
    "t’õ̠": "ᱫᱼᱚᱸ",
    tʼõ̠: "ᱫᱼᱚᱸ",
    "t‘õ̠": "ᱫᱼᱚᱸ",
    "t'õ̠": "ᱫᱼᱚᱸ",
    t̕u: "ᱫᱼᱩ",
    t́u: "ᱫᱼᱩ",
    "t’u": "ᱫᱼᱩ",
    tʼu: "ᱫᱼᱩ",
    "t‘u": "ᱫᱼᱩ",
    "t'u": "ᱫᱼᱩ",
    t̕ũ: "ᱫᱼᱩᱸ",
    t́ũ: "ᱫᱼᱩᱸ",
    "t’ũ": "ᱫᱼᱩᱸ",
    tʼũ: "ᱫᱼᱩᱸ",
    "t‘ũ": "ᱫᱼᱩᱸ",
    "t'ũ": "ᱫᱼᱩᱸ",

    // variations of u
    u: "ᱩ",
    ũ: "ᱩᱸ",
    ũ: "ᱩᱸ", // not implemented everywhere
    ua: "ᱩᱣᱟ",
    uạ: "ᱩᱣᱟᱹ",
    uã: "ᱩᱶᱟ",
    uạ̃: "ᱩᱶᱟᱹ",
    ũa: "ᱩᱶᱟ",
    ũạ: "ᱩᱶᱟᱹ",
    ũã: "ᱩᱶᱟ",
    ũạ̃: "ᱩᱶᱟᱹ",
    ue: "ᱩᱭ",
    uẽ: "ᱩᱸᱭ",
    uẹ: "ᱩᱭ",
    ue̱: "ᱩᱭ",
    ue̠: "ᱩᱭ",
    uẽ̱: "ᱩᱸᱭ",
    uẽ̱: "ᱩᱸᱭ",
    ũe: "ᱩᱸᱭ",
    ũẽ: "ᱩᱸᱭ",
    ũẹ: "ᱩᱸᱭ",
    ũe̱: "ᱩᱸᱭ",
    ũe̠: "ᱩᱸᱭ",
    ũẽ̱: "ᱩᱸᱭ",
    ũẽ̱: "ᱩᱸᱭ",
    uẽ̠: "ᱩᱸᱭ",
    ũẽ̠: "ᱩᱸᱭ",
    ui: "ᱩᱭ",
    uĩ: "ᱩᱸᱭ",
    ũi: "ᱩᱸᱭ",
    ũĩ: "ᱩᱸᱭ",
    uo: "ᱩᱣ",
    uõ: "ᱩᱶ",
    uo̱: "ᱩᱣ",
    uo̠: "ᱩᱣ",
    uọ: "ᱩᱣ",
    uõ̱: "ᱩᱶ",
    uõ̱: "ᱩᱶ",
    ũo: "ᱩᱶ",
    ũõ: "ᱩᱶ",
    ũo̱: "ᱩᱶ",
    ũo̠: "ᱩᱶ",
    ũọ: "ᱩᱶ",
    ũõ̱: "ᱩᱶ",
    ũõ̱: "ᱩᱶ",
    uõ̠: "ᱩᱶ",
    ũõ̠: "ᱩᱶ",
    ũṛ: "ᱩᱬ",

    uen: "ᱩᱭᱮᱱ",
    // variations of v
    v: "ᱣ",
    v́: "ᱶ",
    video: "ᱵᱷᱤᱰᱤᱭᱳ",
    viral: "ᱵᱷᱟᱭᱨᱟᱞ",
    // variations of w
    w: "ᱣ",
    w̃: "ᱶ",
    // variations of x
    x: "ᱠᱥ",
    // variations of y
    y: "ᱭ",
    // variations of z
    zh: "ᱡᱷ",
    z: "ᱡᱽ",

    // Numerical goes here...
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

    // Punctuations goes here...
    "\\~": "ᱻ",
    "\\-": "ᱼ",
    "\\.": "᱾",

    // ᱜᱮᱞᱵᱟᱨ ᱯᱟᱹᱨᱤᱥ ᱠᱚ
    // ᱦᱟᱸᱥᱫᱟᱜ ᱯᱟᱹᱨᱤᱥ ᱮᱛᱚᱦᱚᱵ
    hansdah: "ᱦᱟᱸᱥᱫᱟᱜ",
    hansdak: "ᱦᱟᱸᱥᱫᱟᱜ",
    hansdag: "ᱦᱟᱸᱥᱫᱟᱜ",
    hansdak̠: "ᱦᱟᱸᱥᱫᱟᱜ",
    hansdak̕: "ᱦᱟᱸᱥᱫᱟᱜ",
    hansdaḱ: "ᱦᱟᱸᱥᱫᱟᱜ",
    "hansdak’": "ᱦᱟᱸᱥᱫᱟᱜ",
    hansdakʼ: "ᱦᱟᱸᱥᱫᱟᱜ",
    "hansdak‘": "ᱦᱟᱸᱥᱫᱟᱜ",
    "hansdak'": "ᱦᱟᱸᱥᱫᱟᱜ",
    hansdaḱ: "ᱦᱟᱸᱥᱫᱟᱜ",
    hansdaḱ́: "ᱦᱟᱸᱥᱫᱟᱜ",
    hansdaḱ́: "ᱦᱟᱸᱥᱫᱟᱜ",
    hansdaǩ: "ᱦᱟᱸᱥᱫᱟᱜ", // ᱢᱚᱪᱟᱹᱫ
    hasdah: "ᱦᱟᱸᱥᱫᱟᱜ",
    hasdak: "ᱦᱟᱸᱥᱫᱟᱜ",
    hasdag: "ᱦᱟᱸᱥᱫᱟᱜ",
    hasdak̠: "ᱦᱟᱸᱥᱫᱟᱜ",
    hasdak̕: "ᱦᱟᱸᱥᱫᱟᱜ",
    hasdaḱ: "ᱦᱟᱸᱥᱫᱟᱜ",
    "hasdak’": "ᱦᱟᱸᱥᱫᱟᱜ",
    hasdakʼ: "ᱦᱟᱸᱥᱫᱟᱜ",
    "hasdak‘": "ᱦᱟᱸᱥᱫᱟᱜ",
    "hasdak'": "ᱦᱟᱸᱥᱫᱟᱜ",
    hasdaḱ: "ᱦᱟᱸᱥᱫᱟᱜ",
    hasdaḱ́: "ᱦᱟᱸᱥᱫᱟᱜ",
    hasdaḱ́: "ᱦᱟᱸᱥᱫᱟᱜ",
    hasdaǩ: "ᱦᱟᱸᱥᱫᱟᱜ", // ᱢᱚᱪᱟᱹᱫ
    hansda: "ᱦᱟᱸᱥᱫᱟᱜ",
    hasda: "ᱦᱟᱸᱥᱫᱟᱜ",
    // ᱦᱟᱸᱥᱫᱟᱜ ᱯᱟᱹᱨᱤᱥ ᱢᱩᱪᱟᱹᱫ

    // ᱢᱩᱨᱢᱩ ᱯᱟᱹᱨᱤᱥ ᱮᱛᱚᱦᱚᱵ
    murmu: "ᱢᱩᱨᱢᱩ",
    // ᱢᱩᱨᱢᱩ ᱯᱟᱹᱨᱤᱥ ᱢᱩᱪᱟᱹᱫ

    // ᱢᱟᱺᱨᱰᱤ ᱯᱟᱹᱨᱤᱥ ᱮᱛᱚᱦᱚᱵ
    marandi: "ᱢᱟᱺᱨᱰᱤ",
    marndi: "ᱢᱟᱺᱨᱰᱤ",
    mardi: "ᱢᱟᱺᱨᱰᱤ",
    mạrạndi: "ᱢᱟᱺᱨᱰᱤ",
    mạrạnḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạrạnḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạrạnd̠i: "ᱢᱟᱺᱨᱰᱤ",
    mạrndi: "ᱢᱟᱺᱨᱰᱤ",
    mạrnḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạrnḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạrnd̠i: "ᱢᱟᱺᱨᱰᱤ",
    mạrdi: "ᱢᱟᱺᱨᱰᱤᱟᱹ",
    mạrḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạrḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạrd̠i: "ᱢᱟᱺᱨᱰᱤ", // ᱢᱚᱪᱟᱹᱫ
    mạrạndi: "ᱢᱟᱺᱨᱰᱤ",
    mạrạnḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạrạnḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạrạnd̠i: "ᱢᱟᱺᱨᱰᱤ",
    mạrndi: "ᱢᱟᱺᱨᱰᱤ",
    mạrnḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạrnḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạrnd̠i: "ᱢᱟᱺᱨᱰᱤ",
    mạrdi: "ᱢᱟᱺᱨᱰᱤᱟᱹ",
    mạrḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạrḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạrd̠i: "ᱢᱟᱺᱨᱰᱤ", // ᱢᱚᱪᱟᱹᱫ
    mạ̣rạ̣ndi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̣rạ̣nḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̣rạ̣nḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̣rạ̣nd̠i: "ᱢᱟᱺᱨᱰᱤ",
    mạ̣rndi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̣rnḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̣rnḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̣rnd̠i: "ᱢᱟᱺᱨᱰᱤ",
    mạ̣rdi: "ᱢᱟᱺᱨᱰᱤᱟᱹ",
    mạ̣rḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̣rḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̣rd̠i: "ᱢᱟᱺᱨᱰᱤ", // ᱢᱚᱪᱟᱹᱫ
    ma̠ra̠ndi: "ᱢᱟᱺᱨᱰᱤ",
    ma̠ra̠nḍi: "ᱢᱟᱺᱨᱰᱤ",
    ma̠ra̠nḍi: "ᱢᱟᱺᱨᱰᱤ",
    ma̠ra̠nd̠i: "ᱢᱟᱺᱨᱰᱤ",
    ma̠rndi: "ᱢᱟᱺᱨᱰᱤ",
    ma̠rnḍi: "ᱢᱟᱺᱨᱰᱤ",
    ma̠rnḍi: "ᱢᱟᱺᱨᱰᱤ",
    ma̠rnd̠i: "ᱢᱟᱺᱨᱰᱤ",
    ma̠rdi: "ᱢᱟᱺᱨᱰᱤᱟᱹ",
    ma̠rḍi: "ᱢᱟᱺᱨᱰᱤ",
    ma̠rḍi: "ᱢᱟᱺᱨᱰᱤ",
    ma̠rd̠i: "ᱢᱟᱺᱨᱰᱤ", // ᱢᱚᱪᱟᱹᱫ
    märändi: "ᱢᱟᱺᱨᱰᱤ",
    märänḍi: "ᱢᱟᱺᱨᱰᱤ",
    märänḍi: "ᱢᱟᱺᱨᱰᱤ",
    märänd̠i: "ᱢᱟᱺᱨᱰᱤ",
    märndi: "ᱢᱟᱺᱨᱰᱤ",
    märnḍi: "ᱢᱟᱺᱨᱰᱤ",
    märnḍi: "ᱢᱟᱺᱨᱰᱤ",
    märnd̠i: "ᱢᱟᱺᱨᱰᱤ",
    märdi: "ᱢᱟᱺᱨᱰᱤᱟᱹ",
    märḍi: "ᱢᱟᱺᱨᱰᱤ",
    märḍi: "ᱢᱟᱺᱨᱰᱤ",
    märd̠i: "ᱢᱟᱺᱨᱰᱤ", // ᱢᱚᱪᱟᱹᱫ
    mãrãndi: "ᱢᱟᱺᱨᱰᱤ",
    mãrãnḍi: "ᱢᱟᱺᱨᱰᱤ",
    mãrãnḍi: "ᱢᱟᱺᱨᱰᱤ",
    mãrãnd̠i: "ᱢᱟᱺᱨᱰᱤ",
    mãrndi: "ᱢᱟᱺᱨᱰᱤ",
    mãrnḍi: "ᱢᱟᱺᱨᱰᱤ",
    mãrnḍi: "ᱢᱟᱺᱨᱰᱤ",
    mãrnd̠i: "ᱢᱟᱺᱨᱰᱤ",
    mãrdi: "ᱢᱟᱺᱨᱰᱤᱟᱹ",
    mãrḍi: "ᱢᱟᱺᱨᱰᱤ",
    mãrḍi: "ᱢᱟᱺᱨᱰᱤ",
    mãrd̠i: "ᱢᱟᱺᱨᱰᱤ", // ᱢᱚᱪᱟᱹᱫ
    mãrãndi: "ᱢᱟᱺᱨᱰᱤ",
    mãrãnḍi: "ᱢᱟᱺᱨᱰᱤ",
    mãrãnḍi: "ᱢᱟᱺᱨᱰᱤ",
    mãrãnd̠i: "ᱢᱟᱺᱨᱰᱤ",
    mãrndi: "ᱢᱟᱺᱨᱰᱤ",
    mãrnḍi: "ᱢᱟᱺᱨᱰᱤ",
    mãrnḍi: "ᱢᱟᱺᱨᱰᱤ",
    mãrnd̠i: "ᱢᱟᱺᱨᱰᱤ",
    mãrdi: "ᱢᱟᱺᱨᱰᱤᱟᱹ",
    mãrḍi: "ᱢᱟᱺᱨᱰᱤ",
    mãrḍi: "ᱢᱟᱺᱨᱰᱤ",
    mãrd̠i: "ᱢᱟᱺᱨᱰᱤ", // ᱢᱚᱪᱟᱹᱫ
    mã̃rã̃ndi: "ᱢᱟᱺᱨᱰᱤ",
    mã̃rã̃nḍi: "ᱢᱟᱺᱨᱰᱤ",
    mã̃rã̃nḍi: "ᱢᱟᱺᱨᱰᱤ",
    mã̃rã̃nd̠i: "ᱢᱟᱺᱨᱰᱤ",
    mã̃rndi: "ᱢᱟᱺᱨᱰᱤ",
    mã̃rnḍi: "ᱢᱟᱺᱨᱰᱤ",
    mã̃rnḍi: "ᱢᱟᱺᱨᱰᱤ",
    mã̃rnd̠i: "ᱢᱟᱺᱨᱰᱤ",
    mã̃rdi: "ᱢᱟᱺᱨᱰᱤᱟᱹ",
    mã̃rḍi: "ᱢᱟᱺᱨᱰᱤ",
    mã̃rḍi: "ᱢᱟᱺᱨᱰᱤ",
    mã̃rd̠i: "ᱢᱟᱺᱨᱰᱤ", // ᱢᱚᱪᱟᱹᱫ
    márándi: "ᱢᱟᱺᱨᱰᱤ",
    máránḍi: "ᱢᱟᱺᱨᱰᱤ",
    máránḍi: "ᱢᱟᱺᱨᱰᱤ",
    máránd̠i: "ᱢᱟᱺᱨᱰᱤ",
    márndi: "ᱢᱟᱺᱨᱰᱤ",
    márnḍi: "ᱢᱟᱺᱨᱰᱤ",
    márnḍi: "ᱢᱟᱺᱨᱰᱤ",
    márnd̠i: "ᱢᱟᱺᱨᱰᱤ",
    márdi: "ᱢᱟᱺᱨᱰᱤᱟᱹ",
    márḍi: "ᱢᱟᱺᱨᱰᱤ",
    márḍi: "ᱢᱟᱺᱨᱰᱤ",
    márd̠i: "ᱢᱟᱺᱨᱰᱤ", // ᱢᱚᱪᱟᱹᱫ
    mạ̃rạ̃ndi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rạ̃nḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rạ̃nḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rạ̃nd̠i: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rndi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rnḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rnḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rnd̠i: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rdi: "ᱢᱟᱺᱨᱰᱤᱟᱹ",
    mạ̃rḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rd̠i: "ᱢᱟᱺᱨᱰᱤ", // ᱢᱚᱪᱟᱹᱫ
    mạ̃rạ̃ndi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rạ̃nḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rạ̃nḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rạ̃nd̠i: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rndi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rnḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rnḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rnd̠i: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rdi: "ᱢᱟᱺᱨᱰᱤᱟᱹ",
    mạ̃rḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rd̠i: "ᱢᱟᱺᱨᱰᱤ", // ᱢᱚᱪᱟᱹᱫ
    mạ̃rạ̃ndi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rạ̃nḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rạ̃nḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rạ̃nd̠i: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rndi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rnḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rnḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rnd̠i: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rdi: "ᱢᱟᱺᱨᱰᱤᱟᱹ",
    mạ̃rḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rḍi: "ᱢᱟᱺᱨᱰᱤ",
    mạ̃rd̠i: "ᱢᱟᱺᱨᱰᱤ", // ᱢᱚᱪᱟᱹᱫ
    mã̠rã̠ndi: "ᱢᱟᱺᱨᱰᱤ",
    mã̠rã̠nḍi: "ᱢᱟᱺᱨᱰᱤ",
    mã̠rã̠nḍi: "ᱢᱟᱺᱨᱰᱤ",
    mã̠rã̠nd̠i: "ᱢᱟᱺᱨᱰᱤ",
    mã̠rndi: "ᱢᱟᱺᱨᱰᱤ",
    mã̠rnḍi: "ᱢᱟᱺᱨᱰᱤ",
    mã̠rnḍi: "ᱢᱟᱺᱨᱰᱤ",
    mã̠rnd̠i: "ᱢᱟᱺᱨᱰᱤ",
    mã̠rdi: "ᱢᱟᱺᱨᱰᱤᱟᱹ",
    mã̠rḍi: "ᱢᱟᱺᱨᱰᱤ",
    mã̠rḍi: "ᱢᱟᱺᱨᱰᱤ",
    mã̠rd̠i: "ᱢᱟᱺᱨᱰᱤ", // ᱢᱚᱪᱟᱹᱫ
    // ᱢᱟᱺᱨᱰᱤ ᱯᱟᱹᱨᱤᱥ ᱢᱩᱪᱟᱹᱫ

    // ᱠᱤᱥᱠᱩ ᱯᱟᱹᱨᱤᱥ ᱮᱛᱚᱦᱚᱵ
    kisku: "ᱠᱤᱥᱠᱩ",
    // ᱠᱤᱥᱠᱩ ᱯᱟᱹᱨᱤᱥ ᱢᱩᱪᱟᱹᱫ

    // ᱥᱚᱨᱮᱱ ᱯᱟᱹᱨᱤᱥ ᱮᱛᱚᱦᱚᱵ
    soren: "ᱥᱚᱨᱮᱱ",
    saren: "ᱥᱚᱨᱮᱱ",
    // ᱥᱚᱨᱮᱱ ᱯᱟᱹᱨᱤᱥ ᱢᱩᱪᱟᱹᱫ

    // ᱦᱮᱢᱵᱽᱨᱚᱢ ᱯᱟᱹᱨᱤᱥ ᱮᱛᱚᱦᱚᱵ
    hembram: "ᱦᱮᱢᱵᱽᱨᱚᱢ",
    hembrom: "ᱦᱮᱢᱵᱽᱨᱚᱢ",
    hemram: "ᱦᱮᱢᱵᱽᱨᱚᱢ",
    hemrom: "ᱦᱮᱢᱵᱽᱨᱚᱢ",
    // ᱦᱮᱢᱵᱽᱨᱚᱢ ᱯᱟᱹᱨᱤᱥ ᱢᱩᱪᱟᱹᱫ

    // ᱴᱩᱰᱩ ᱯᱟᱹᱨᱤᱥ ᱮᱛᱚᱦᱚᱵ
    tudu: "ᱴᱩᱰᱩ",
    ṭudu: "ᱴᱩᱰᱩ",
    țudu: "ᱴᱩᱰᱩ",
    ṭudu: "ᱴᱩᱰᱩ",
    t̠udu: "ᱴᱩᱰᱩ",
    ṭ̣udu: "ᱴᱩᱰᱩ",
    // ᱴᱩᱰᱩ ᱯᱟᱹᱨᱤᱥ ᱢᱩᱪᱟᱹᱫ

    // ᱵᱟᱥᱠᱮ ᱯᱟᱹᱨᱤᱥ ᱮᱛᱚᱦᱚᱵ
    baskey: "ᱵᱟᱥᱠᱮ",
    baske: "ᱵᱟᱥᱠᱮ",
    baski: "ᱵᱟᱥᱠᱮ",
    // ᱵᱟᱥᱠᱮ ᱯᱟᱹᱨᱤᱥ ᱢᱩᱪᱟᱹᱫ

    // ᱵᱮᱥᱨᱟ ᱯᱟᱹᱨᱤᱥ ᱮᱛᱚᱦᱚᱵ
    beshra: "ᱵᱮᱥᱨᱟ",
    besra: "ᱵᱮᱥᱨᱟ",
    // ᱵᱮᱥᱨᱟ ᱯᱟᱹᱨᱤᱥ ᱢᱩᱪᱟᱹᱫ

    // ᱪᱚᱬᱮ ᱯᱟᱹᱨᱤᱥ ᱮᱛᱚᱦᱚᱵ
    chorey: "ᱪᱚᱬᱮ",
    chonre: "ᱪᱚᱬᱮ",
    chonrey: "ᱪᱚᱬᱮ",
    conrey: "ᱪᱚᱬᱮ",
    conre: "ᱪᱚᱬᱮ",
    chore: "ᱪᱚᱬᱮ",
    corey: "ᱪᱚᱬᱮ",
    core: "ᱪᱚᱬᱮ",
    // ᱪᱚᱬᱮ ᱯᱟᱹᱨᱤᱥ ᱢᱩᱪᱟᱹᱫ

    // ᱯᱟᱹᱣᱨᱤᱭᱟᱹ ᱯᱟᱹᱨᱤᱥ ᱮᱛᱚᱦᱚᱵ
    pauria: "ᱯᱟᱹᱣᱨᱤᱭᱟᱹ",
    pawria: "ᱯᱟᱹᱣᱨᱤᱭᱟᱹ",
    // ᱯᱟᱹᱣᱨᱤᱭᱟᱹ ᱯᱟᱹᱨᱤᱥ ᱢᱩᱪᱟᱹᱫ

    // ᱵᱟᱰᱮᱭᱟ ᱯᱟᱹᱨᱤᱥ ᱮᱛᱚᱦᱚᱵ
    badiya: "ᱵᱟᱰᱮᱭᱟ",
    badeya: "ᱵᱟᱰᱮᱭᱟ",
    badea: "ᱵᱟᱰᱮᱭᱟ",
    badia: "ᱵᱟᱰᱮᱭᱟ",
    // ᱵᱟᱰᱮᱭᱟ ᱯᱟᱹᱨᱤᱥ ᱢᱩᱪᱟᱹᱫ

    // ᱪᱚᱯᱮᱭᱟᱨ ᱯᱟᱹᱨᱤᱥ ᱮᱛᱚᱦᱚᱵ
    chapeyar: "ᱪᱚᱯᱮᱭᱟᱨ",
    capeyar: "ᱪᱚᱯᱮᱭᱟᱨ",
    chopeyar: "ᱪᱚᱯᱮᱭᱟᱨ",
    copeyar: "ᱪᱚᱯᱮᱭᱟᱨ",
    // ᱪᱚᱯᱮᱭᱟᱨ ᱯᱟᱹᱨᱤᱥ ᱢᱩᱪᱟᱹᱫ
  };

  const remove_sub_char = ["ᱚ", "ᱟ", "ᱤ", "ᱩ", "ᱮ", "ᱳ"];

  function transliterate(inputText) {
    inputText = inputText.toLowerCase();
    let outputText = inputText;

    // Handle specific pair substitutions first
    // outputText = outputText.replace(/ia/g, "ᱤᱭᱟ");
    // outputText = outputText.replace(/ea/g, "ᱮᱭᱟ");

    // outputText = outputText.replace(/oa/g, "ᱳᱣᱟ");
    // outputText = outputText.replace(/o̠a/g, "ᱚᱣᱟ");
    // outputText = outputText.replace(/o̱a/g, "ᱚᱣᱟ");
    // outputText = outputText.replace(/aa/g, "ᱟᱣᱟ");
    // outputText = outputText.replace(/ạa/g, "ᱟᱹᱣᱟ");
    // outputText = outputText.replace(/ua/g, "ᱩᱣᱟ");

    // Sort keys by length in descending order to handle longer matches first
    const sortedKeys = Object.keys(substitutions).sort(
      (a, b) => b.length - a.length
    );

    for (const key of sortedKeys) {
      const regex = new RegExp(key, "g");
      outputText = outputText.replace(regex, substitutions[key]);
    }
    // Remove ᱽ before specific characters
    for (const char of remove_sub_char) {
      outputText = outputText.replace(new RegExp(`ᱽ${char}`, "g"), char);
    }

    return outputText;
  }

  window.performTransliteration = function () {
    const input = document.getElementById("input").value;
    const outputText = transliterate(input);
    document.getElementById("output").textContent = outputText;
  };

  window.copyToClipboard = function () {
    const output = document.getElementById("output").textContent;
    navigator.clipboard
      .writeText(output)
      .then(() => alert("ᱚᱨᱡᱚ ᱨᱮᱴᱟᱵ ᱵᱚᱰᱨᱮ ᱦᱟᱞᱟᱝᱮᱱᱟ!"))
      .catch((err) => console.error("ᱦᱟᱞᱟᱝ ᱦᱩᱲᱟᱹᱜᱼᱮᱱᱟ: ", err));
  };

  window.resetInput = function () {
    document.getElementById("input").value = "";
    document.getElementById("output").textContent =
      "ᱟᱢᱟᱜ ᱪᱤᱠᱤ ᱵᱚᱱᱚᱫᱚᱞᱚᱜ ᱚᱱᱚᱞ ᱠᱚ ᱱᱚᱸᱰᱮᱭ ᱩᱫᱩᱜᱟ...";
  };
})();
