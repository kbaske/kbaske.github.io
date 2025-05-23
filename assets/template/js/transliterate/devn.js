(function () {
  const substitutions = {
    अ: "ᱟ",
    आ: "ᱟ",
    इ: "ᱤ",
    ई: "ᱤ",
    उ: "ᱩ",
    ऊ: "ᱩ",
    ए: "ᱮ",
    ऐ: "ᱮ",
    ओ: "ᱳ",
    औ: "ᱳᱣ",
    अं: "ᱟᱸ",
    आ़: "ᱟᱹ",
    ए़: "ᱮ",
    ओ़: "ᱚ",
    ओ़़: "ᱚ",
    ऑ: "ᱳ",

    आं: "ᱟᱸ",
    ओं: "ᱳᱸ",
    इं: "ᱤᱸ",
    ईं: "ᱤᱸ",
    उं: "ᱩᱸ",
    ऊं: "ᱩᱸ",
    एं: "ᱮᱸ",
    ऐं: "ᱮᱸ",
    ओ़ं: "ᱚᱸ",
    ओ़़ं: "ᱚᱸ",
    औं: "ᱳᱶ",
    "अ:": "ᱜ",
    आ़उ: "ᱟᱹᱣ",
    इंञ: "ᱤᱧ",

    "ा": "ᱟ",
    "ि": "ᱤ",
    "ी": "ᱤ",
    "ु": "ᱩ",
    "ू": "ᱩ",
    "े": "ᱮ",
    "ै": "ᱮ",
    "ो़": "ᱚ",
    "ॉ": "ᱳ",
    "ौ": "ᱳᱣ",

    "ं": "ᱸ",
    "ँ": "ᱸ",
    "ें": "ᱮᱸ",
    "ैं": "ᱮᱸ",
    "ो": "ᱳ",
    "ों": "ᱳᱸ",
    "ौं": "ᱳᱸ",
    "िं": "ᱤᱸ",
    "ीं": "ᱤᱸ",
    "ुं": "ᱩᱸ",
    " ूं": "ᱩᱸ",
    आँ: "ᱸ",
    आङ: "ᱵᱟᱝ",
    "ोआ": "ᱳᱣᱟ",

    "ुइ": "ᱩᱭ",
    "ुई": "ᱩᱭ",
    "ूइ": "ᱩᱭ",
    "ूई": "ᱩᱭ",
    "ा़": "ᱟᱹ",
    आ़़: "ᱟᱹ",
    "ुआ": "ᱩᱣᱟ",
    "ुआ़़": "ᱩᱣᱟᱹ",
    "ूआ": "ᱩᱣᱟ",
    "ूआ़़": "ᱩᱣᱟᱹ",
    "ा़उ": "ᱟᱹᱣ",
    "ा़ऊ": "ᱟᱹᱣ",
    "ुआ़": "ᱩᱣᱟᱹ",
    "ूआ़": "ᱩᱣᱟᱹ",
    "ुंा": "ᱩᱶᱟ",
    "ुंां": "ᱩᱶᱟᱸ",
    "ुंा़ं": "ᱩᱶᱟᱺ",
    कुंआ़र: "ᱠᱩᱶᱟᱨ",
    कुंआंर: "ᱠᱩᱶᱟᱸᱨ",
    "ाएन": "ᱟᱭᱮᱱ",
    "ुएन": "ᱩᱭᱮᱱ",
    "ोएन": "ᱳᱭᱮᱱ",
    "ेएन": "ᱮᱭᱮᱱ",
    "ा़एन": "ᱟᱹᱭᱮᱱ",
    अ्: "ᱜ",
    "ाउ": "ᱟᱣ",
    "ाऊ": "ᱟᱣ",
    "ाइ": "ᱟᱭ",
    "ाई": "ᱟᱭ",
    "ाएत्": "ᱟᱭᱮᱫ",
    लन्दा: "ᱞᱟᱱᱫᱟ",
    लंदा: "ᱞᱟᱱᱫᱟ",
    गंदा: "ᱜᱟᱱᱫᱟ",
    चंदा: "ᱪᱟᱱᱫᱟ",
    गन्दा: "ᱜᱟᱱᱫᱟ",
    चन्दा: "ᱪᱟᱱᱫᱟ",
    रंडा: "ᱨᱟᱱᱰᱟ",
    रनडा: "ᱨᱟᱱᱰᱟ",
    रन्डा: "ᱨᱟᱱᱰᱟ",
    अंडा: "ᱟᱱᱰᱟ",
    अन्ड: "ᱟᱱᱰ",
    अंड: "ᱟᱱᱰ",
    "ागर": "ᱟᱜᱟᱨ",
    कुडी़: "ᱠᱩᱲᱤ",
    "ेआ": "ᱮᱭᱟ",
    एआ: "ᱮᱭᱟ",
    ओआ: "ᱳᱣᱟ",
    ओ़आ: "ᱚᱣᱟ",
    "ो़आ": "ᱚᱣᱟ",

    "-": "ᱼ",
    _: "ᱼ",
    "~": "ᱻ",
    "।": "᱾",
    "।।": "᱿",
    "१": "᱑",
    "२": "᱒",
    "३": "᱓",
    "४": "᱔",
    "५": "᱕",
    "६": "᱖",
    "७": "᱗",
    "८": "᱘",
    "९": "᱙",
    "०": "᱐",
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

    क: "ᱠ",
    ख: "ᱠᱷ",
    ग: "ᱜᱽ",
    घ: "ᱜᱷ",
    ङ: "ᱝ",
    च: "ᱪ",
    छ: "ᱪᱷ",
    ज: "ᱡᱽ",
    झ: "ᱡᱷ",
    ञ: "ᱧ",
    ट: "ᱴ",
    ठ: "ᱴᱷ",

    ड: "ᱰ",
    ढ: "ᱰᱷ",
    ण: "ᱬ",
    त: "ᱛ",
    थ: "ᱛᱷ",
    द: "ᱫᱽ",
    ध: "ᱫᱷ",
    न: "ᱱ",
    प: "ᱯ",
    फ: "ᱯᱷ",
    ब: "ᱵᱽ",
    भ: "ᱵᱷ",
    म: "ᱢ",
    य: "ᱭ",
    र: "ᱨ",
    ल: "ᱞ",
    व: "ᱣ",
    श: "ᱥ",
    स: "ᱥ",
    ष: "ᱥ",
    ह: "ᱦ",
    क्ष: "ᱠᱪᱷ",
    त्र: "ᱛᱨ",
    ज्ञ: "ᱜᱽᱭ",
    ड़: "ᱲ",
    ढ़: "ᱲᱷ",

    क्: "ᱜ",
    च्: "ᱡ",
    त्: "ᱫ",
    प्: "ᱵ",

    का: "ᱠᱟ",
    कि: "ᱠᱤ",
    की: "ᱠᱤ",
    कु: "ᱠᱩ",
    कू: "ᱠᱩ",
    के: "ᱠᱮ",
    कै: "ᱠᱮᱭ",
    को: "ᱠᱳ",
    कौ: "ᱠᱳᱣ",

    के़: "ᱠᱮ",
    को़: "ᱠᱚ",
    कॉ: "ᱠᱳ",
    कं: "ᱠᱟᱸ",
    कां: "ᱠᱟᱸ",
    किं: "ᱠᱤᱸ",
    कीं: "ᱠᱤᱸ",
    कुं: "ᱠᱩᱸ",
    कूं: "ᱠᱩᱸ",
    कें: "ᱠᱮᱸ",
    के़ं: "ᱠᱮᱸ",
    कैं: "ᱠᱮᱸᱭ",
    को़ं: "ᱠᱚᱸ",
    कौं: "ᱠᱳᱶ",
    कँ: "ᱠᱟᱸ",
    काँ: "ᱠᱟᱸ",
    श्र: "ᱥᱨ",
    श्रा: "ᱥᱨᱟ",

    क़: "ᱠ",
    ख़: "ᱠᱷ",
    ग़: "ᱜᱽ",
    घ़: "ᱜᱷ",
    ङ़: "ᱝ",
    च़: "ᱪ",
    छ़: "ᱪᱷ",
    ज़: "ᱡᱽ",
    झ़: "ᱡᱷ",
    ञ़: "ᱧ",
    ट़: "ᱴ",
    ठ़: "ᱴᱷ",
    ड़: "ᱲ",
    ढ़: "ᱲᱷ",
    ण़: "ᱬ",
    त़: "ᱛ",
    थ़: "ᱛᱷ",
    द़: "ᱫ",
    ध़: "ᱫᱷ",
    ऩ: "ᱱ",
    प़: "ᱯ",
    फ़: "ᱯᱷ",
    ब़: "ᱵᱽ",
    भ़: "ᱵᱷ",
    म़: "ᱢ",
    य़: "ᱭ",
    ऱ: "ᱨ",
    ल़: "ᱞ",
    व़: "ᱣ",
    श़: "ᱥ",
    ष़: "ᱥ",
    स़: "ᱥ",
    ह़: "ᱦ",
    ज्ञ़: "ᱜᱽᱭ",
    क्ष़: "ᱠᱪᱷ",
    श्ऱ: "ᱥᱨ",
    ऋ़: "ᱨ",
    ळ: "ᱲ",
    ऴ: "ᱲ",
    क्त़: "ᱠᱛ",

    ग्क: "ᱜᱽᱠ",
    ग्ख: "ᱜᱽᱠᱷ",
    ग्ग: "ᱜᱽᱜᱽ",
    ग्घ: "ᱜᱽᱜᱷ",
    ग्ङ: "ᱜᱽᱝ",
    ग्च: "ᱜᱽᱪ",
    ग्छ: "ᱜᱽᱪᱷ",
    ग्ज: "ᱜᱽᱡᱽ",
    ग्झ: "ᱜᱽᱡᱷ",
    ग्ञ: "ᱜᱽᱧ",
    ग्ट: "ᱜᱽᱴ",
    ग्ठ: "ᱜᱽᱴᱷ",
    ग्ड: "ᱜᱽᱰ",
    ग्ढ: "ᱜᱽᱰᱷ",
    ग्ण: "ᱜᱽᱬ",
    ग्त: "ᱜᱽᱛ",
    ग्थ: "ᱜᱽᱛᱷ",
    ग्द: "ᱜᱽᱫᱽ",
    ग्ध: "ᱜᱽᱫᱷ",
    ग्न: "ᱜᱽᱱ",
    ग्प: "ᱜᱽᱯ",
    ग्फ: "ᱜᱽᱯᱷ",
    ग्ब: "ᱜᱽᱵᱽ",
    ग्भ: "ᱜᱽᱵᱷ",
    ग्म: "ᱜᱽᱢ",
    ग्य: "ᱜᱽᱭ",
    ग्र: "ᱜᱽᱨ",
    ग्ल: "ᱜᱽᱞ",
    ग्व: "ᱜᱽᱣ",
    ग्श: "ᱜᱽᱥ",
    ग्ष: "ᱜᱽᱥ",
    ग्स: "ᱜᱽᱥ",
    ग्ह: "ᱜᱽᱦ",
    ग्ज्ञ: "ᱜᱽᱭ",
    ग्क्ष: "ᱜᱽᱠᱪᱷ",
    ग्श्र: "ᱜᱽᱥᱨ",

    ज्क: "ᱡᱽᱠ",
    ज्ख: "ᱡᱽᱠᱷ",
    ज्ग: "ᱡᱽᱜᱽ",
    ज्घ: "ᱡᱽᱜᱷ",
    ज्ङ: "ᱡᱽᱝ",
    ज्च: "ᱡᱽᱪ",
    ज्छ: "ᱡᱽᱪᱷ",
    ज्ज: "ᱡᱽᱡᱽ",
    ज्झ: "ᱡᱽᱡᱷ",

    ज्ट: "ᱡᱽᱴ",
    ज्ठ: "ᱡᱽᱴᱷ",
    ज्ड: "ᱡᱽᱰ",
    ज्ढ: "ᱡᱽᱰᱷ",
    ज्ण: "ᱡᱽᱬ",
    ज्त: "ᱡᱽᱛ",
    ज्थ: "ᱡᱽᱛᱷ",
    ज्द: "ᱡᱽᱫᱽ",
    ज्ध: "ᱡᱽᱫᱷ",
    ज्न: "ᱡᱽᱱ",
    ज्प: "ᱡᱽᱯ",
    ज्फ: "ᱡᱽᱯᱷ",
    ज्ब: "ᱡᱽᱵᱽ",
    ज्भ: "ᱡᱽᱵᱷ",
    ज्म: "ᱡᱽᱢ",
    ज्य: "ᱡᱽᱭ",
    ज्र: "ᱡᱽᱨ",
    ज्ल: "ᱡᱽᱞ",
    ज्व: "ᱡᱽᱣ",
    ज्श: "ᱡᱽᱥ",
    ज्ष: "ᱡᱽᱥ",
    ज्स: "ᱡᱽᱥ",
    ज्ह: "ᱡᱽᱦ",
    ज्ज्ञ: "ᱡᱽᱜᱽᱭ",
    ज्क्ष: "ᱡᱽᱠᱪᱷ",
    ज्श्र: "ᱡᱽᱥᱨ",

    द्क: "ᱫᱽᱠ",
    द्ख: "ᱫᱽᱠᱷ",
    द्ग: "ᱫᱽᱜᱽ",
    द्घ: "ᱫᱽᱜᱷ",
    द्ङ: "ᱫᱽᱝ",
    द्च: "ᱫᱽᱪ",
    द्छ: "ᱫᱽᱪᱷ",
    द्ज: "ᱫᱽᱡᱽ",
    द्झ: "ᱫᱽᱡᱷ",
    द्ञ: "ᱫᱽᱧ",
    द्ट: "ᱫᱽᱴ",
    द्ठ: "ᱫᱽᱴᱷ",
    द्ड: "ᱫᱽᱰ",
    द्ढ: "ᱫᱽᱰᱷ",
    द्ण: "ᱫᱽᱬ",
    द्त: "ᱫᱽᱛ",
    द्थ: "ᱫᱽᱛᱷ",
    द्द: "ᱫᱽᱫᱽ",
    द्ध: "ᱫᱽᱫᱷ",
    द्न: "ᱫᱽᱱ",
    द्प: "ᱫᱽᱯ",
    द्फ: "ᱫᱽᱯᱷ",
    द्ब: "ᱫᱽᱵᱽ",
    द्भ: "ᱫᱽᱵᱷ",
    द्म: "ᱫᱽᱢ",
    द्य: "ᱫᱽᱭ",
    द्र: "ᱫᱽᱨ",
    द्ल: "ᱫᱽᱞ",
    द्व: "ᱫᱽᱣ",
    द्श: "ᱫᱽᱥ",
    द्ष: "ᱫᱽᱥ",
    द्स: "ᱫᱽᱥ",
    द्ह: "ᱫᱽᱦ",
    द्ज्ञ: "ᱫᱽᱭ",
    द्क्ष: "ᱫᱽᱠᱪᱷ",
    द्श्र: "ᱫᱽᱥᱨ",

    ब्क: "ᱵᱽᱠ",
    ब्ख: "ᱵᱽᱠᱷ",
    ब्ग: "ᱵᱽᱜᱽ",
    ब्घ: "ᱵᱽᱜᱷ",
    ब्ङ: "ᱵᱽᱝ",
    ब्च: "ᱵᱽᱪ",
    ब्छ: "ᱵᱽᱪᱷ",
    ब्ज: "ᱵᱽᱡᱽ",
    ब्झ: "ᱵᱽᱡᱷ",
    ब्ञ: "ᱵᱽᱧ",
    ब्ट: "ᱵᱽᱴ",
    ब्ठ: "ᱵᱽᱴᱷ",
    ब्ड: "ᱵᱽᱰ",
    ब्ढ: "ᱵᱽᱰᱷ",
    ब्ण: "ᱵᱽᱬ",
    ब्त: "ᱵᱽᱛ",
    ब्थ: "ᱵᱽᱛᱷ",
    ब्द: "ᱵᱽᱫᱽ",
    ब्ध: "ᱵᱽᱫᱷ",
    ब्न: "ᱵᱽᱱ",
    ब्प: "ᱵᱽᱯ",
    ब्फ: "ᱵᱽᱯᱷ",
    ब्ब: "ᱵᱽᱵᱽ",
    ब्भ: "ᱵᱽᱵᱷ",
    ब्म: "ᱵᱽᱢ",
    ब्य: "ᱵᱽᱭ",
    ब्र: "ᱵᱽᱨ",
    ब्ल: "ᱵᱽᱞ",
    ब्व: "ᱵᱽᱣ",
    ब्श: "ᱵᱽᱥ",
    ब्ष: "ᱵᱽᱥ",
    ब्स: "ᱵᱽᱥ",
    ब्ह: "ᱵᱽᱦ",
    ब्ज्ञ: "ᱵᱽᱭ",
    ब्क्ष: "ᱵᱽᱠᱪᱷ",
    ब्श्र: "ᱵᱽᱥᱨ",

    क्क: "ᱠᱠ",
    क्ख: "ᱠᱠᱷ",
    क्ग: "ᱠᱜᱽ",
    क्घ: "ᱠᱜᱷ",
    क्ङ: "ᱠᱝ",
    क्च: "ᱠᱪ",
    क्छ: "ᱠᱪᱷ",
    क्ज: "ᱠᱡᱽ",
    क्झ: "ᱠᱡᱷ",
    क्ञ: "ᱠᱧ",
    क्ट: "ᱠᱴ",
    क्ठ: "ᱠᱴᱷ",
    क्ड: "ᱠᱰ",
    क्ढ: "ᱠᱰᱷ",
    क्ण: "ᱠᱬ",
    क्त: "ᱠᱛ",
    क्थ: "ᱠᱛᱷ",
    क्द: "ᱠᱫᱽ",
    क्ध: "ᱠᱫᱷ",
    क्न: "ᱠᱱ",
    क्प: "ᱠᱯ",
    क्फ: "ᱠᱯᱷ",
    क्ब: "ᱠᱵᱽ",
    क्भ: "ᱠᱵᱷ",
    क्म: "ᱠᱢ",
    क्य: "ᱠᱭ",
    क्र: "ᱠᱨ",
    क्ल: "ᱠᱞ",
    क्व: "ᱠᱣ",
    क्श: "ᱠᱥ",
    क्ष: "ᱠᱥ",
    क्स: "ᱠᱥ",
    क्ह: "ᱠᱦ",
    क्ज्ञ: "ᱠᱜᱽᱭ",
    क्क्ष: "ᱠᱠᱪᱷ",
    क्श्र: "ᱠᱥᱨ",

    च्क: "ᱪᱠ",
    च्ख: "ᱪᱠᱷ",
    च्ग: "ᱪᱜᱽ",
    च्घ: "ᱪᱜᱷ",
    च्ङ: "ᱪᱝ",
    च्च: "ᱪᱪ",
    च्छ: "ᱪᱪᱷ",
    च्ज: "ᱪᱡᱽ",
    च्झ: "ᱪᱡᱷ",
    च्ञ: "ᱪᱧ",
    च्ट: "ᱪᱴ",
    च्ठ: "ᱪᱴᱷ",
    च्ड: "ᱪᱰ",
    च्ढ: "ᱪᱰᱷ",
    च्ण: "ᱪᱬ",
    च्त: "ᱪᱛ",
    च्थ: "ᱪᱛᱷ",
    च्द: "ᱪᱫᱽ",
    च्ध: "ᱪᱫᱷ",
    च्न: "ᱪᱱ",
    च्प: "ᱪᱯ",
    च्फ: "ᱪᱯᱷ",
    च्ब: "ᱪᱵᱽ",
    च्भ: "ᱪᱵᱷ",
    च्म: "ᱪᱢ",
    च्य: "ᱪᱭ",
    च्र: "ᱪᱨ",
    च्ल: "ᱪᱞ",
    च्व: "ᱪᱣ",
    च्श: "ᱪᱥ",
    च्ष: "ᱪᱥ",
    च्स: "ᱪᱥ",
    च्ह: "ᱪᱦ",
    च्त्र: "ᱪᱛᱨ",
    च्क्ष: "ᱪᱠᱪᱷ",
    च्ज्ञ: "ᱪᱟᱜᱽᱭ",
    च्श्र: "ᱪᱥᱨ",

    त्क: "ᱛᱠ",
    त्ख: "ᱛᱠᱷ",
    त्ग: "ᱛᱜᱽ",
    त्घ: "ᱛᱜᱷ",
    त्ङ: "ᱛᱝ",
    त्च: "ᱛᱪ",
    त्छ: "ᱛᱪᱷ",
    त्ज: "ᱛᱡᱽ",
    त्झ: "ᱛᱡᱷ",
    त्ञ: "ᱛᱧ",
    त्ट: "ᱛᱴ",
    त्ठ: "ᱛᱴᱷ",
    त्ड: "ᱛᱰ",
    त्ढ: "ᱛᱰᱷ",
    त्ण: "ᱛᱬ",
    त्त: "ᱛᱛ",
    त्थ: "ᱛᱛᱷ",
    त्द: "ᱛᱫᱽ",
    त्ध: "ᱛᱫᱷ",
    त्न: "ᱛᱱ",
    त्प: "ᱛᱯ",
    त्फ: "ᱛᱯᱷ",
    त्ब: "ᱛᱵᱽ",
    त्भ: "ᱛᱵᱷ",
    त्म: "ᱛᱢ",
    त्य: "ᱛᱭ",

    त्ल: "ᱛᱞ",
    त्व: "ᱛᱣ",
    त्श: "ᱛᱥ",
    त्ष: "ᱛᱥ",
    त्स: "ᱛᱥ",
    त्ह: "ᱛᱦ",
    त्ज्ञ: "ᱛᱜᱽᱭ",
    त्श्र: "ᱛᱥᱨ",

    प्क: "ᱯᱠ",
    प्ख: "ᱯᱠᱷ",
    प्ग: "ᱯᱜᱽ",
    प्घ: "ᱯᱜᱷ",
    प्ङ: "ᱯᱝ",
    प्च: "ᱯᱪ",
    प्छ: "ᱯᱪᱷ",
    प्ज: "ᱯᱡᱽ",
    प्झ: "ᱯᱡᱷ",
    प्ञ: "ᱯᱧ",
    प्ट: "ᱯᱴ",
    प्ठ: "ᱯᱴᱷ",
    प्ड: "ᱯᱰ",
    प्ढ: "ᱯᱰᱷ",
    प्ण: "ᱯᱬ",
    प्त: "ᱯᱛ",
    प्थ: "ᱯᱛᱷ",
    प्द: "ᱯᱫᱽ",
    प्ध: "ᱯᱫᱷ",
    प्न: "ᱯᱱ",
    प्प: "ᱯᱯ",
    प्फ: "ᱯᱯᱷ",
    प्ब: "ᱯᱵᱽ",
    प्भ: "ᱯᱵᱷ",
    प्म: "ᱯᱢ",
    प्य: "ᱯᱭ",
    प्र: "ᱯᱨ",
    प्ल: "ᱯᱞ",
    प्व: "ᱯᱣ",
    प्श: "ᱯᱥ",
    प्ष: "ᱯᱥ",
    प्स: "ᱯᱥ",
    प्क्ष: "ᱯᱠᱪᱷ",
    प्ह: "ᱯᱦ",
    प्ज्ञ: "ᱯᱜᱽᱭ",
    प्श्र: "ᱯᱥᱨ",

    "ा़इ": "ᱟᱹᱭ",
    "ा़ई": "ᱟᱹᱭ",
    "ा़य": "ᱟᱹᱭ",
    " आ़इ": "ᱟᱹᱭ",
    आ़ई: "ᱟᱹᱭ",
    आ़य: "ᱟᱹᱭ",
    ला़य: "ᱞᱟᱹᱭ",

    "ाव": "ᱟᱣ",
    "ा़व": "ᱟᱹᱣ",
    आव: "ᱟᱣ",
    आ़व: "ᱟᱹᱣ",
    बा़यसी: "ᱵᱟᱹᱭᱥᱤ",
    बा़ईसी: "ᱵᱟᱹᱭᱥᱤ",
    बा़यसि: "ᱵᱟᱹᱭᱥᱤ",
    बैसी: "ᱵᱟᱹᱭᱥᱤ",

    "ांउ": "ᱟᱶ",
    "ांव": "ᱟᱶ",
    "ा़ंउ": "ᱟᱹᱶ",
    "ाँउ": "ᱟᱶ",
    "ाँव": "ᱟᱶ",
    सांव: "ᱥᱟᱶ",
    साँवता: "ᱥᱟᱶᱛᱟ",
    साउथ: "ᱥᱟᱣᱩᱛᱷ",

    सांगात: "ᱥᱟᱝᱜᱟᱛ",
    बिजेंद्र: "ᱵᱤᱡᱮᱱᱫᱽᱨᱟ",
    हाँसदा: "ᱦᱟᱸᱥᱫᱟᱜ",
    हांसदा: "ᱦᱟᱸᱥᱫᱟᱜ",
    हांसदाक्: "ᱦᱟᱸᱥᱫᱟᱜ",
    "हांसदा:": "ᱦᱟᱸᱥᱫᱟᱜ",

    तेहेञ: "ᱛᱮᱹᱦᱮᱹᱧ",
    तेञ: "ᱛᱮᱹᱧ",
    खंड: "ᱠᱷᱟᱱᱰ",
    खण्ड: "ᱠᱷᱟᱱᱰ",
    खांड: "ᱠᱷᱟᱱᱰ",

    सोहन: "ᱥᱚᱦᱟᱱ",
    उरांव: "ᱳᱨᱟᱶ",
    टा़ंडी: "ᱴᱟᱹᱱᱰᱤ",
    चांदो: "ᱪᱟᱱᱫᱳ",
    चाँदो: "ᱪᱟᱱᱫᱳ",
    चांदो़: "ᱪᱟᱱᱫᱚ",
    बाङ: "ᱵᱟᱝ",
    "ाङ": "ᱟᱝ",

    "ुंगी": "ᱩᱝᱜᱤ",
    "ा़ंगी": "ᱟᱹᱝᱜᱤ",
    "ांगे": "ᱟᱝᱜᱮ",
    "ांगा": "ᱟᱝᱜᱟ",
    "ेंगा": "ᱮᱝᱜᱟ",
    "ो़ंगा": "ᱚᱝᱜᱟ",
    "ोंगा": "ᱳᱝᱜᱟ",
    "ुंगा": "ᱩᱝᱜᱟ",
    ओण्डे: "ᱳᱱᱰᱮ",
    ओ़ण्डे: "ᱚᱱᱰᱮ",
    "ा़ंड़": "ᱟᱹᱬ",

    क्आ: "ᱜᱼᱟ",
    त्आ: "ᱫᱼᱟ",
    च्आ: "ᱡᱼᱟ",
    प्आ: "ᱵᱼᱟ ",
    क्ओ़: "ᱜᱼᱚ",
    क्इ: "ᱜᱼᱤ",
    क्ओ: "ᱜᱼᱳ",
    क्ए: "ᱜᱼᱮ",
    च्ओ़: "ᱡᱼᱚ",
    च्ओ: "ᱡᱼᱳ",
    च्इ: "ᱡᱼᱤ",
    च्ए: "ᱡᱼᱮ",
    त्ओ़: "ᱫᱼᱚ",
    त्ओ: "ᱫᱼᱳ",
    त्ए: "ᱫᱼᱮ",
    त्इ: "ᱫᱼᱤ",
    प्ओ़: "ᱵᱼᱚ",
    प्ओ: "ᱵᱼᱳ",
    प्इ: "ᱵᱼᱤ",
    प्ए: "ᱵᱼᱮ",
    क्ओ़ं: "ᱜᱼᱚᱸ",

    नोएल: "ᱱᱚᱭᱮᱞ",
    स्टेशन: "ᱥᱴᱮᱥᱟᱱ",
    विश्वविद्यालय: "ᱣᱤᱥᱣᱟᱣᱤᱫᱽᱭᱟᱞᱟᱭ",
    घंटा: "ᱜᱷᱟᱱᱴᱟ",
    किरण: "ᱠᱤᱨᱟᱱ",
    प्रदीप: "ᱯᱨᱟᱫᱤᱯ",
    सृष्टि: "ᱥᱨᱤᱥᱴᱤ",
    ओकिल: "ᱳᱠᱤᱞ",
    मेनुएल: "ᱢᱮᱱᱩᱣᱮᱞ",
    जेवियर: "ᱡᱮᱣᱤᱭᱟᱨ",
    विजय: "ᱣᱤᱡᱟᱭ",
    बिजय: "ᱵᱤᱡᱟᱭ",
    आर्टिफिशियल: "ᱟᱨᱴᱤᱯᱷᱤᱥᱤᱭᱟᱞ",
    सैम्युएल: "ᱥᱮᱭᱢᱩᱣᱮᱞ",
    जनवरी: "ᱡᱟᱱᱣᱟᱨᱤ",
    अप्रैल: "ᱟᱯᱨᱤᱞ",
    मई: "ᱢᱮᱭ",
    अगस्त: "ᱟᱜᱟᱥᱛ",
    चोड़ें: "ᱪᱚᱬᱮᱸ",
    "रांग बुरु": "ᱨᱟᱝ ᱵᱩᱨᱩ",
    "रांग बुरू": "ᱨᱟᱝ ᱵᱩᱨᱩ",
    डेनियल: "ᱰᱮᱱᱤᱭᱟᱞ",
    डेनिअल: "ᱰᱮᱱᱤᱭᱟᱞ",
    "ुा़": "ᱩᱣᱟᱹ",
    "ुवा़र": "ᱩᱣᱟᱹᱨ",
    दुवा़र: "ᱫᱩᱣᱟᱹᱨ",
    दुआ़र: "ᱫᱩᱣᱟᱹᱨ",
    "ुा़र": "ᱩᱣᱟᱹᱨ",
    टॉवर: "ᱴᱟᱣᱟᱨ",
    "ोआ": "ᱳᱣᱟ",
    "ोय": "ᱳᱭ",
    "ुइ": "ᱩᱭ",
    "ुई": "ᱩᱭ",
    "ुय": "ᱩᱭ",
    "ो़य": "ᱚᱭ",
    "िआ़": "ᱤᱭᱟᱹ",
    "ीआ़": "ᱤᱭᱟᱹ",
    "िया़": "ᱤᱭᱟᱹ",
    "ीया़": "ᱤᱭᱟᱹ",
    "िआ": "ᱤᱭᱟ",
    "िया": "ᱤᱭᱟ",
    खोरठा: "ᱠᱷᱚᱨᱴᱷᱟ",
    चंदन: "ᱪᱟᱱᱫᱟᱱ",
    गूगल: "ᱜᱩᱜᱟᱹᱞ",
    गुगल: "ᱜᱩᱜᱟᱹᱞ",
    साहित्य: "ᱥᱟᱦᱤᱛᱭᱟ",
    पंच: "ᱯᱟᱧᱪ",
    "ांच": "ᱟᱧᱪ",

    ञ्: "ᱧ",
    ख्: "ᱠᱷ",
    घ्: "ᱠᱷ",
    ङ्: "ᱝ",
    छ्: "ᱪᱷ",
    ट्: "ᱴ",
    ढ्: "ᱰᱷ",
    न्: "ᱱ",
    ण्: "ᱱ",
    म्: "ᱢ",
    "्र": "ᱨ",
    र्: "ᱨ",
    ल्: "ᱞ",
    झ्: "ᱡᱷ",
    फ्: "ᱯᱷ",
    भ्: "ᱵᱷ",
    य्: "ᱭ",
    व्: "ᱣ",
    श्: "ᱥ",
    ष्: "ᱥ",
    ह्: "ᱦ",
    ज्ञ्: "ᱜᱽᱭ",
    ऋ: "ᱨ",
    स्: "ᱥ",
    ठ्: "ᱴᱷ",

    ग्: "ᱜᱽ",
    ज्: "ᱡᱽ",
    द्: "ᱫᱽ",
    ब्: "ᱵᱽ",

    कृ: "ᱠᱨᱤ",
    "ृ": "ᱨ",
    ट्र: "ᱴᱨ",
    संता: "ᱥᱟᱱᱛᱟ",
    सनता: "ᱥᱟᱱᱛᱟ",
    सन्ता: "ᱥᱟᱱᱛᱟ",

    धन: "ᱫᱷᱟᱱ",
    गंगा: "ᱜᱟᱝᱜᱟ",
    गलवान: "ᱜᱟᱞᱣᱟᱱ",

    गणेश: "ᱜᱟᱱᱮᱥ",
    गो़णेश: "ᱜᱚᱱᱥᱮ",
    गमला: "ᱜᱟᱢᱞᱟ",
    संग्राम: "ᱥᱟᱝᱜᱽᱨᱟᱢ",
    गोणेश: "ᱜᱳᱱᱮᱥ",
    गणेष: "ᱜᱟᱱᱮᱥ",
    बीरबल: "ᱵᱤᱨᱵᱟᱞ",
    बल: "ᱵᱟᱞ",
    आनंद: "ᱟᱱᱟᱱᱫᱽ",
    आनन्द: "ᱟᱱᱟᱱᱫᱽ",
    प्रियंका: "ᱯᱨᱤᱭᱟᱸᱠᱟ",
    लंका: "ᱞᱟᱝᱠᱟ",
    रमेश: "ᱨᱟᱢᱮᱥ",
    महा: "ᱢᱟᱦᱟ",
    महान: "ᱢᱟᱦᱟᱱ",
    भारत: "ᱵᱷᱟᱨᱟᱛ",
    फुलमनी: "ᱯᱷᱩᱞᱢᱟᱱᱤ",
    रज: "ᱨᱟᱡᱽ",
    सिंग: "ᱥᱤᱝᱜᱽ",
    अजय: "ᱟᱡᱟᱭ",
    बसुदेव: "ᱵᱟᱥᱩᱫᱮᱣ",
    चंद: "ᱪᱟᱱᱫᱽ",
    ललपनिया: "ᱞᱟᱞᱯᱟᱱᱤᱭᱟ",
    करम: "ᱠᱟᱨᱟᱢ",
    बिनोद: "ᱵᱤᱱᱚᱫᱽ",
    मनोज: "ᱢᱟᱱᱚᱡᱽ",
    परगना: "ᱯᱟᱨᱟᱜᱟᱱᱟ",
    सचिन: "ᱥᱟᱪᱤᱱ",
    पंकज: "ᱯᱟᱝᱠᱟᱡᱽ",
    मनीष: "ᱢᱟᱱᱤᱥ",
    प्रकाश: "ᱯᱨᱟᱠᱟᱥ",
    बहादुर: "ᱵᱟᱦᱟᱫᱩᱨ",
    रामप्रसाद: "ᱨᱟᱢᱯᱨᱟᱥᱟᱫᱽ",
    अशोक: "ᱟᱥᱚᱠ",
    दीपक: "ᱫᱤᱯᱟᱠ",
    सिकन्द: "ᱥᱤᱠᱟᱱᱫᱽ",
    कामेश्वर: "ᱠᱟᱢᱮᱥᱣᱟᱨ",
    श्वार: "ᱥᱣᱟᱨ",
    संजय: "ᱥᱟᱹᱧᱡᱟᱹᱭ",
    रोशन: "ᱨᱚᱥᱟᱱ",
    रामगढ़: "ᱨᱟᱢᱜᱟᱲ",
    देवघर: "ᱫᱮᱣᱜᱷᱟᱨ",
    सरायकेला: "ᱥᱟᱹᱨᱟᱹᱭᱠᱮᱞᱟ",
    खरसावां: "ᱠᱷᱟᱨᱥᱟᱣᱟᱸ",
    खरसांवा: "ᱠᱷᱟᱨᱥᱟᱶᱟ",
    खरसांवां: "ᱠᱷᱟᱨᱥᱟᱶᱟᱸ",
    चतरा: "ᱪᱟᱛᱨᱟ",
    कोडरमा: "ᱠᱚᱰᱟᱨᱢᱟ",
    बोकारो: "ᱵᱚᱠᱟᱨᱚ",
    धनबाद: "ᱫᱷᱟᱱᱵᱟᱫᱽ",
    गोड्डा: "ᱜᱚᱰᱰᱟ",
    "साहेब गंज": "ᱥᱟᱦᱮᱵᱽ ᱜᱟᱧᱡᱽ",
    साहेबगंज: "ᱥᱟᱦᱮᱵᱽᱜᱟᱧᱡᱽ",
    साहिबगंज: "ᱥᱟᱦᱤᱵᱽᱜᱟᱧᱡᱽ",
    "साहिब गंज": "ᱥᱟᱦᱤᱵᱽ ᱜᱟᱧᱡᱽ",
    पेटरवार: "ᱯᱮᱴᱟᱨᱣᱟᱨ ",
    चरगी: "ᱪᱟᱨᱜᱤ",
    चड़गी: "ᱪᱟᱲᱜᱤ",
    माधव: "ᱢᱟᱫᱷᱟᱣ",
    पंखा: "ᱯᱟᱝᱠᱷᱟ",
    सकम: "ᱥᱟᱠᱟᱢ",
    अफ्रीका: "ᱟᱹᱯᱷᱨᱤᱠᱟ",
    अंग्रेज: "ᱟᱝᱜᱽᱨᱮᱡᱽ",
    तिलक: "ᱛᱤᱞᱟᱹᱠ",
    स्तम्भ: "ᱥᱛᱟᱢᱵᱷ",
    स्तम: "ᱥᱛᱟᱢ",
    बंदर: "ᱵᱟᱱᱫᱟᱨ",
    बन्दर: "ᱵᱟᱱᱫᱟᱨ",
    गाँधी: "ᱜᱟᱱᱫᱷᱤ",
    गांधी: "ᱜᱟᱱᱫᱷᱤ",
    गधा: "ᱜᱟᱫᱷᱟ",
    अमन: "ᱟᱢᱟᱱ",
    डरबन: "ᱰᱟᱨᱵᱟᱱ",
    "ांगर": "ᱟᱝᱜᱽᱨ",
    शंकर: "ᱥᱟᱝᱠᱟᱨ",
    चरण: "ᱪᱟᱨᱟᱱ",
    वंशीधर: "ᱣᱟᱱᱥᱤᱫᱷᱟᱨ",
    नारायण: "ᱱᱟᱨᱟᱭᱟᱱ",
    नालन्दा: "ᱱᱟᱞᱟᱱᱫᱟ",
    नियत: "ᱱᱤᱭᱟᱛ",
    पश्चिम: "ᱯᱟᱹᱥᱪᱤᱢ",
    पछिम: "ᱯᱟᱹᱪᱷᱤᱢ",
    सामंत: "ᱥᱟᱢᱟᱱᱛ",
    उपनह: "ᱩᱯᱱᱟᱹᱦ",
    महल: "ᱢᱟᱦᱟᱞ",
    पहली: "ᱯᱟᱹᱦᱞᱤ",
    सरकार: "ᱥᱚᱨᱠᱟᱨ",
    भर्ती: "ᱵᱷᱟᱹᱨᱛᱤ",
    पहल: "ᱯᱟᱹᱦᱟᱹᱞ",
    गमछा: "ᱜᱟᱢᱪᱷᱟ",
    स्टेशन: "ᱥᱴᱮᱥᱟᱹᱱ",
    मच्छर: "ᱢᱟᱪᱷᱟᱹᱨ",
    हेंब्रम: "ᱦᱮᱢᱵᱽᱨᱚᱢ",
    सरना: "ᱥᱟᱨᱱᱟ",
    सर: "ᱥᱟᱨ",
    धरना: "ᱫᱷᱟᱨᱱᱟ",
    कमजोर: "ᱠᱚᱢᱡᱚᱨ",
    रतन: "ᱨᱟᱛᱟᱱ",
    बड़: "ᱵᱟᱲ",
    बहाल: "ᱵᱟᱹᱦᱟᱞ",
    झरना: "ᱡᱷᱟᱨᱱᱟ",
    घर: "ᱜᱷᱟᱨ",
    घट: "ᱜᱷᱟᱴ",

    सक्सेस: "ᱥᱟᱠᱟᱮᱥ",
    सेंगेल: "ᱥᱮᱝᱜᱮᱞ",
    फसक्लास: "ᱯᱷᱟᱹᱥᱠᱞᱟᱥ",
    जहां: "ᱡᱟᱦᱟᱸ",
    क्रिसमस: "ᱠᱨᱤᱥᱢᱟᱥ",
    सजाव: "ᱥᱟᱡᱟᱣ",
    सजव: "ᱥᱟᱡᱟᱣ",
    लगाव: "ᱞᱟᱜᱟᱣ",
    सहन: "ᱥᱟᱦᱟᱱ",
    सहान: "ᱥᱟᱦᱟᱱ",
    समय: "ᱥᱚᱢᱚᱭ",
    सागर: "ᱥᱟᱜᱟᱨ",
    सोमय: "ᱥᱚᱢᱟᱭ",
    मगर: "ᱢᱟᱜᱟᱨ",
    मच्छर: "ᱢᱟᱠᱪᱷᱟᱨ",
    सगर: "ᱥᱟᱜᱟᱨ",
    सहार: "ᱥᱟᱦᱟᱨ",
    शहर: "ᱥᱟᱦᱟᱨ",
    षडयंत्र: "ᱥᱟᱰᱭᱟᱱᱛᱨᱟ",
    संतुष्ट: "ᱥᱟᱱᱛᱩᱥᱴ",
    संतोष: "ᱥᱟᱱᱛᱚᱥ",
    सूरज: "ᱥᱩᱨᱟᱹᱡᱽ",
    सुरजन: "ᱥᱩᱨᱡᱟᱹᱱ",
    इंडस्ट्री: "ᱤᱱᱰᱟᱥᱴᱨᱤ",
    नगर: "ᱱᱟᱜᱟᱨ",

    न्द्र: "ᱱᱫᱽᱨᱟ",
    न्द्रा: "ᱱᱫᱽᱨᱟ",
    न्द्रि: "ᱱᱫᱽᱨᱤ",
    न्द्री: "ᱱᱫᱽᱨᱤ",
    न्द्रु: "ᱱᱫᱽᱨᱩ",
    न्द्रू: "ᱱᱫᱽᱨᱩ",
    न्द्रृ: "ᱱᱫᱽᱨᱨᱤ",
    न्द्रे: "ᱱᱫᱽᱨᱮ",
    न्द्रै: "ᱱᱫᱽᱨᱮᱭ",
    न्द्रो: "ᱱᱫᱽᱨᱳ",
    न्द्रौ: "ᱱᱫᱽᱨᱳᱣ",
    न्द्रो़: "ᱱᱫᱽᱨᱚ",
    न्द्रे़: "ᱱᱫᱽᱨ",

    "ंद्र": "ᱱᱫᱽᱨᱟ",
    "ंद्रा": "ᱱᱫᱽᱨᱟ",
    "ंद्रि": "ᱱᱫᱽᱨᱤ",
    "ंद्री": "ᱱᱫᱽᱨᱤ",
    "ंद्रु": "ᱱᱫᱽᱨᱩ",
    "ंद्रू": "ᱱᱫᱽᱨᱩ",
    "ंद्रृ": "ᱱᱫᱽᱨᱨᱤ",
    "ंद्रे": "ᱱᱫᱽᱨᱮ",
    "ंद्रै": "ᱱᱫᱽᱨᱮᱭ",
    "ंद्रो": "ᱱᱫᱽᱨᱳ",
    "ंद्रौ": "ᱱᱫᱽᱨᱳᱣ",
    "ंद्रो़": "ᱱᱫᱽᱨᱚ",
    "ंद्रे़": "ᱱᱫᱽᱨᱮ",

    हजार: "ᱦᱟᱡᱟᱨ",
    बजार: "ᱵᱟᱡᱟᱨ",
    गजर: "ᱜᱟᱡᱟᱨ",
    गाजर: "ᱜᱟᱡᱟᱨ",
    अजर: "ᱟᱡᱟᱨ",
    औजार: "ᱳᱣᱡᱟᱨ",
    औजर: "ᱳᱣᱡᱟᱨ",
    सोडा: "ᱥᱚᱰᱟ",

    // Miscellaneous goes here...
    गुजर: "ᱜᱩᱡᱟᱹᱨ",

    // Miscellaneous end here...
  };

  const remove_sub_char = ["ᱚ", "ᱟ", "ᱤ", "ᱩ", "ᱮ", "ᱳ"];
  // const add_sub_char = ["ᱜ", "ᱡ", "ᱫ", "ᱵ"];

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
    // if (outputText.length > 0) {
    //  const lastChar = outputText.slice(-1);
    //  if (add_sub_char.includes(lastChar)) {
    //    outputText += "ᱽ";
    //  }
    //}

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
