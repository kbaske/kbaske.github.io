(function () {
  const substitutions = {
    // Vowels
    अ: "ᱚ",
    आ: "ᱟ",
    इ: "ᱤ",
    ई: "ᱤ", // Could potentially differentiate based on context, but common is just "ᱤ"
    उ: "ᱩ",
    ऊ: "ᱩ", // Same note as above
    ऋ: "ᱨᱤ", // Approximation -  Ol Chiki doesn't have a perfect equivalent
    ए: "ᱮ",
    ऐ: "ᱮᱭ",
    ओ: "ᱳ",
    औ: "ᱚᱣ",

    "ा": "ᱟ",
    "ि": "ᱤ",
    "ी": "ᱤ",
    "ु": "ᱩ",
    "ू": "ᱩ",
    "े": "ᱮ",
    "ै": "ᱮᱭ",
    "ो": "ᱚ",
    "ौ": "ᱚᱣ",

    // Consonants
    // TODO: क - ङ
    क: "ᱠ", // क
    ख: "ᱠᱷ", // ख
    ग: "ᱜ", // ग
    घ: "ᱜᱷ", // घ
    ङ: "ᱝ", // ङ
    // TODO: च - ञ
    च: "ᱪ", // च
    छ: "ᱪᱷ", // छ
    ज: "ᱡ", // ज
    झ: "ᱡᱷ", // झ
    ञ: "ᱧ", // ञ
    // TODO: ट - ण
    ट: "ᱴ", // ट
    ठ: "ᱴᱷ", // ठ
    ड: "ᱰ", // ड
    ड़: "ᱲ", // ड़
    ढ: "ᱰᱷ", // ढ
    ण: "ᱬ", // ण
    // TODO: त - न
    त: "ᱛ", // त
    थ: "ᱛᱷ", // थ
    द: "ᱫ", // द
    ध: "ᱫᱷ", // ध
    न: "ᱱ", // न
    // TODO: प - म
    प: "ᱯ", // प
    फ: "ᱯᱷ", // फ
    ब: "ᱵ", // ब
    भ: "ᱵᱷ", // भ
    म: "ᱢ", // म
    // TODO: य - ह
    य: "ᱭ", // य
    य़: "ᱭ", // य़
    र: "ᱨ", // र
    ळ: "ᱲ", // ळ
    ल: "ᱞ", // ल
    व: "ᱣ", // व
    वं: "ᱶ", // वं
    श: "ᱥ", // श
    ष: "ᱥ", // ष
    स: "ᱥ", // स
    ह: "ᱦ", // ह
    // TODO: क्ष - ऋ
    क्ष: "ᱠᱷᱭ", // क्ष
    त्र: "ᱛᱨ", // त्र
    श्र: "ᱥᱨ", // श्र
    ज्ञ: "ᱜᱽᱭ", // ज्ञ
    ऋ: "ᱛᱨᱠᱷ", // ऋ

    // Exceptions from क् - प्
    क्: "ᱜ",
    च्: "ᱡ",
    त्: "ᱫ",
    प्: "ᱵ",

    // Exceptions from ग् - ब्
    ग्: "ᱜ",
    ज्: "ᱡ",
    द्: "ᱫ",
    ब्: "ᱵ",

    // Combined
    "क् आ": "ᱜᱼᱟ",
    "ग् आ": "ᱜᱼᱟ",
    "च् आ": "ᱡᱼᱟ",
    "ज् आ": "ᱡᱼᱟ",
    "त् आ": "ᱫᱼᱟ",
    "द् आ": "ᱫᱼᱟ",
    "प् आ": "ᱵᱼᱟ",
    "ब् आ": "ᱵᱼᱟ",

    // Special Characters and numbers
    "ँ": "ᱸ",
    "ं": "ᱸ",
    "ः": "ᱜ",
    "़": "ᱹ", // nukta
    "~": "ᱻ",
    "-": "ᱼ",
    _: "ᱼ",

    // Numricals
    "०": "᱐",
    "१": "᱑",
    "२": "᱒",
    "३": "᱓",
    "४": "᱔",
    "५": "᱕",
    "᱖": "᱖",
    "᱗": "᱗",
    "᱘": "᱘",
    "᱙": "᱙",

    // Punctuations
    "।": " ᱾",
    "॥": " ᱿",

    // Combined / Half Consonants (using a workaround - adding a virama)
    "्क": "ᱠ",
    "्ख": "ᱠᱷ",
    "्ग": "ᱜ",
    "्घ": "ᱜᱷ",
    "्ङ": "ᱝ",
    "्च": "ᱪ",
    "्छ": "ᱪᱷ",
    "्ज": "ᱡ",
    "्झ": "ᱡᱷ",
    "्ञ": "ᱧ",
    "्ट": "ᱴ",
    "्ठ": "ᱴᱷ",
    "्ड": "ᱰ",
    "्ढ": "ᱰᱷ",
    "्ण": "ᱬ",
    ण्: "ᱸ",
    "्त": "ᱛ",
    "्थ": "ᱛᱷ",
    "्द": "ᱫ",
    "्ध": "ᱫᱷ",
    "्न": "ᱱ",
    "्प": "ᱯ",
    "्फ": "ᱯᱷ",
    "्ब": "ᱵ",
    "्भ": "ᱵᱷ",
    "्म": "ᱢ",
    "्य": "ᱭ",
    "्र": "ᱨ",
    "्ल": "ᱞ",
    "्व": "ᱣ",
    "्श": "ᱥ",
    "्ष": "ᱥ",
    "्स": "ᱥ",
    "्ह": "ᱦ",

    // May be used like this
    // One letter combinations
    ऐं: "ᱮᱸ",

    // Two letters combinations
    कञ: "ᱠᱚᱧ",
    बह: "ᱵᱚᱦ",
    वच: "ᱣᱚᱪᱚ",

    // Complex combinations
    ऐआ: "ᱮᱜᱼᱟ",
    ": आ": "ᱜᱼᱟ",
    "ा:": "ᱟᱜ",
    "ो:": "ᱚᱜ",
    "िआ": "ᱤᱜᱼᱟ",
    "ीआ": "ᱤᱜᱼᱟ",
    "ेआ": "ᱮᱜᱼᱟ",
    "ंड़": "ᱬ",
    ण्ड: "ᱸᱰ",

    // Three letters combinations
    कमल: "ᱠᱚᱢᱚᱞ",

    // Complex combinations
    "िदर": "ᱤᱫᱽᱨ",
    "ीदर": "ᱤᱫᱽᱨ",
    मितट: "ᱢᱤᱫᱴ",
    "ंगर": "ᱸᱜᱽᱨ",

    // Four letters combinations
  };

  const remove_sub_char = ["ᱚ", "ᱟ", "ᱤ", "ᱩ", "ᱮ", "ᱳ"];
  const add_sub_char = ["ग", "ᱡ", "ᱫ", "ᱵ"];

  function transliterate(inputText) {
    let outputText = inputText;

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

    // Add ᱽ if ग, ज, द, ब at the end of the word
    if (outputText.length > 0) {
      const lastChar = outputText.slice(-1);
      if (add_sub_char.includes(lastChar)) {
        outputText += "ᱽ";
      }
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
