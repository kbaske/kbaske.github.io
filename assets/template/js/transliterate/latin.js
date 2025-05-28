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

    // variations of b
    bh: "ᱵᱷ",
    b: "ᱵᱽ",
    b̃: "ᱵᱽ",
    b̃h: "ᱵᱷ",

    // variations of c
    c: "ᱪ",
    ch: "ᱪᱷ",
    c̕: "ᱡ",
    ć: "ᱡ",
    d: "ᱫᱽ",
    dh: "ᱫᱷ",
    ḍ: "ᱰ",
    ḍh: "ᱰᱷ",
    e: "ᱮ",
    ẽ: "ᱮᱸ",
    ẽ: "ᱮᱸ",
    ẽ̠: "ᱮᱸ",
    ẽ̠: "ᱮᱸ",
    ĩẽ̠: "ᱤᱸᱭ",
    ii: "ᱤ",
    io: "ᱤᱭᱳ",
    l: "ᱞ",
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
  };

  const remove_sub_char = ["ᱚ", "ᱟ", "ᱤ", "ᱩ", "ᱮ", "ᱳ"];

  function transliterate(inputText) {
    // Convert input to lowercase to maintain consistency
    inputText = inputText.toLowerCase();
    let outputText = inputText;

    // Handle specific pair substitutions first
    outputText = outputText.replace(/mr./g, "ᱢᱨᱹ");
    outputText = outputText.replace(/dr./g, "ᱰᱨᱹ");
    outputText = outputText.replace(/er./g, "ᱤᱨᱹ");

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

    // Replace consecutive ᱾ (2 or more) with same number of ᱹ
outputText = outputText.replace(/᱾{2,}/g, match => "ᱹ".repeat(match.length));

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
