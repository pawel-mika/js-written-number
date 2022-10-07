(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.writtenNumber = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "useLongScale": false,
  "baseSeparator": "",
  "unitSeparator": "",
  "allSeparator": "و",
  "base": {
    "0": "صفر",
    "1": "واحد",
    "2": "اثنان",
    "3": "ثلاثة",
    "4": "أربعة",
    "5": "خمسة",
    "6": "ستة",
    "7": "سبعة",
    "8": "ثمانية",
    "9": "تسعة",

    "10": "عشرة",
    "11": "أحد عشر",
    "12": "إثنا عشر",
    "13": "ثلاثة عشر",
    "14": "أربعة عشر",
    "15": "خمسة عشر",
    "16": "ستة عشر",
    "17": "سبعة عشر",
    "18": "ثمانية عشر",
    "19": "تسعة عشر",

    "20": "عشرون",
    "21": "واحد وعشرون",
    "22": "اثنان وعشرون",
    "23": "ثلاثة وعشرون",
    "24": "أربعة وعشرون",
    "25": "خمسة وعشرون",
    "26": "ستة وعشرون",
    "27": "سبعة وعشرون",
    "28": "ثمانية وعشرون",
    "29": "تسعة وعشرون",
    
    "30": "ثلاثون",    
    "31": "واحد وثلاثون",
    "32": "اثنان وثلاثون",
    "33": "ثلاثة وثلاثون",
    "34": "أربعة وثلاثون",
    "35": "خمسة وثلاثون",
    "36": "ستة وثلاثون",
    "37": "سبعة وثلاثون",
    "38": "ثمانية وثلاثون",
    "39": "تسعة وثلاثون",

    "40": "أربعون",
    "41": "واحد وأربعون",
    "42": "اثنان وأربعون",
    "43": "ثلاثة وأربعون",
    "44": "أربعة وأربعون",
    "45": "خمسة وأربعون",
    "46": "ستة وأربعون",
    "47": "سبعة وأربعون",
    "48": "ثمانية وأربعون",
    "49": "تسعة وأربعون",

    "50": "خمسون",
    "51": "واحد وخمسون",
    "52": "اثنان وخمسون",
    "53": "ثلاثة وخمسون",
    "54": "أربعة وخمسون",
    "55": "خمسة وخمسون",
    "56": "ستة وخمسون",
    "57": "سبعة وخمسون",
    "58": "ثمانية وخمسون",
    "59": "تسعة وخمسون",

    "60": "ستون",
    "61": "واحد وستون",
    "62": "اثنان وستون",
    "63": "ثلاثة وستون",
    "64": "أربعة وستون",
    "65": "خمسة وستون",
    "66": "ستة وستون",
    "67": "سبعة وستون",
    "68": "ثمانية وستون",
    "69": "تسعة وستون",

    "70": "سبعون",
    "71": "واحد وسبعون",
    "72": "اثنان وسبعون",
    "73": "ثلاثة وسبعون",
    "74": "أربعة وسبعون",
    "75": "خمسة وسبعون",
    "76": "ستة وسبعون",
    "77": "سبعة وسبعون",
    "78": "ثمانية وسبعون",
    "79": "تسعة وسبعون",

    "80": "ثمانون",
    "81": "واحد وثمانون",
    "82": "اثنان وثمانون",
    "83": "ثلاثة وثمانون",
    "84": "أربعة وثمانون",
    "85": "خمسة وثمانون",
    "86": "ستة وثمانون",
    "87": "سبعة وثمانون",
    "88": "ثمانية وثمانون",
    "89": "تسعة وثمانون",
    
    "90": "تسعون",
    "91": "واحد وتسعون",
    "92": "اثنان وتسعون",
    "93": "ثلاثة وتسعون",
    "94": "أربعة وتسعون",
    "95": "خمسة وتسعون",
    "96": "ستة وتسعون",
    "97": "سبعة وتسعون",
    "98": "ثمانية وتسعون",
    "99": "تسعة وتسعون",

    "200": "مائتان",
    "300": "ثلاثمائة",
    "400": "أربعمائة",
    "500": "خمسمائة",
    "600": "ستمائة",
    "700": "سبعمائة",
    "800": "ثمانمائة",
    "900": "تسعمائة"
  },
  "units" : [
    {"singular":"مائة", "useBaseInstead": true, "useBaseException": [1]},
    {"singular":"ألف", "dual":"ألفان", "plural":"آلاف", "restrictedPlural": true, "avoidPrefixException": [1, 2]},
    {"singular":"مليون", "dual":"مليونان", "plural":"ملايين", "restrictedPlural": true, "avoidPrefixException": [1, 2]},
    {"singular":"مليار", "dual":"ملياران", "plural":"ملايير", "restrictedPlural": true, "avoidPrefixException": [1, 2]},

    {"singular":"تريليون", "avoidPrefixException": [1]},
    {"singular":"كوادريليون", "avoidPrefixException": [1]},
    {"singular":"كوينتليون", "avoidPrefixException": [1]},
    {"singular":"سكستليون", "avoidPrefixException": [1]},
    {"singular":"سبتيلليون", "avoidPrefixException": [1]},
    {"singular":"أوكتيليون", "avoidPrefixException": [1]},
    {"singular":"نونيلليون", "avoidPrefixException": [1]},
    {"singular":"دشيليون", "avoidPrefixException": [1]},
    {"singular":"أوندشيلليون", "avoidPrefixException": [1]},
    {"singular":"دودشيليون", "avoidPrefixException": [1]},
    {"singular":"تريدشيليون", "avoidPrefixException": [1]},
    {"singular":"كواتوردشيليون", "avoidPrefixException": [1]},
    {"singular":"كويندشيليون" , "avoidPrefixException": [1]}
  ],
  "unitExceptions": {}
}
},{}],2:[function(require,module,exports){
module.exports={
    "useLongScale": false,
    "baseSeparator": " ",
    "unitSeparator": "",
    "base": {
      "0": "sıfır",
      "1": "bir",
      "2": "iki",
      "3": "üç",
      "4": "dörd",
      "5": "beş",
      "6": "altı",
      "7": "yeddi",
      "8": "səkkiz",
      "9": "doqquz",
      "10": "on",
      "20": "iyirmi",
      "30": "otuz",
      "40": "qırx",
      "50": "əlli",
      "60": "altmış",
      "70": "yetmiş",
      "80": "səksən",
      "90": "doxsan"
    },
    "units" : [
      { 
        "singular": "yüz",
        "avoidPrefixException": [1]
      },
      { 
        "singular": "min",
        "avoidPrefixException": [1]
      },
      "milyon",
      "milyard",
      "trilyon",
      "kvadrilyon",
      "kentilyon",
      "sekstilyon",
      "septilyon",
      "oktilyon",
      "nonilyon",
      "desilyon",
      "andesilyon",
      "dodesilyon",
      "tredesilyon",
      "katordesilyon",
      "kendesilyon"
    ],
    "unitExceptions": []
  }
},{}],3:[function(require,module,exports){
module.exports={
  "useLongScale": true,
  "baseSeparator": "",
  "unitSeparator": "",
  "joinSeparator": true,
  "base": {
    "1": "erster",
    "2": "zweiter",
    "3": "dritter",
    "4": "vierter",
    "5": "fünfter",
    "6": "sechster",
    "7": "siebter",
    "8": "achter",
    "9": "neunter",
    "10": "zehnter",
    "11": "elfter",
    "12": "zwölfter",
    "13": "dreizehnter",
    "14": "vierzehnter",
    "15": "fünfzehnter",
    "16": "sechzehnter",
    "17": "siebzehnter",
    "18": "achtzehnter",
    "19": "neunzehnter",
    "20": "zwanzigster",
    "21": "einundzwanzigster",
    "22": "zweiundzwanzigster",
    "23": "dreiundzwanzigster",
    "24": "vierundzwanzigster",
    "25": "fünfundzwanzigster",
    "26": "sechsundzwanzigster",
    "27": "siebenundzwanzigster",
    "28": "achtundzwanzigster",
    "29": "neunundzwanzigster",
    "30": "dreißigster",
    "31": "einunddreißigster",
    "32": "zweiunddreißigster",
    "33": "dreiunddreißigster",
    "34": "vierunddreißigster",
    "35": "fünfunddreißigster",
    "36": "sechsunddreißigster",
    "37": "siebenunddreißigster",
    "38": "achtunddreißigster",
    "39": "neununddreißigster",
    "40": "vierzigster",
    "41": "einundvierzigster",
    "42": "zweiundvierzigster",
    "43": "dreiundvierzigster",
    "44": "vierundvierzigster",
    "45": "fünfundvierzigster",
    "46": "sechsundvierzigster",
    "47": "siebenundvierzigster",
    "48": "achtundvierzigster",
    "49": "neunundvierzigster",
    "50": "fünfzigster",
    "51": "einundfünfzigster",
    "52": "zweiundfünfzigster",
    "53": "dreiundfünfzigster",
    "54": "vierundfünfzigster",
    "55": "fünfundfünfzigster",
    "56": "sechsundfünfzigster",
    "57": "siebenundfünfzigster",
    "58": "achtundfünfzigster",
    "59": "neunundfünfzigster",
    "60": "sechzigster",
    "61": "einundsechzigster",
    "62": "zweiundsechzigster",
    "63": "dreiundsechzigster",
    "64": "vierundsechzigster",
    "65": "fünfundsechzigster",
    "66": "sechsundsechzigster",
    "67": "siebenundsechzigster",
    "68": "achtundsechzigster",
    "69": "neunundsechzigster",
    "70": "siebzigster",
    "71": "einundsiebzigster",
    "72": "zweiundsiebzigster",
    "73": "dreiundsiebzigster",
    "74": "vierundsiebzigster",
    "75": "fünfundsiebzigster",
    "76": "sechsundsiebzigster",
    "77": "siebenundsiebzigster",
    "78": "achtundsiebzigster",
    "79": "neunundsiebzigster",
    "80": "achtzigster",
    "81": "einundachtzigster",
    "82": "zweiundachtzigster",
    "83": "dreiundachtzigster",
    "84": "vierundachtzigster",
    "85": "fünfundachtzigster",
    "86": "sechsundachtzigster",
    "87": "siebenundachtzigster",
    "88": "achtundachtzigster",
    "89": "neunundachtzigster",
    "90": "neunzigster",
    "91": "einundneunzigster",
    "92": "zweiundneunzigster",
    "93": "dreiundneunzigster",
    "94": "vierundneunzigster",
    "95": "fünfundneunzigster",
    "96": "sechsundneunzigster",
    "97": "siebenundneunzigster",
    "98": "achtundneunzigster",
    "99": "neunundneunzigster",
    "100": "hundertster",
    "200": "zweihundertster",
    "300": "dreihundertster",
    "400": "vierhundertster",
    "500": "fünfhundertster",
    "600": "sechshundertster",
    "700": "siebenhundertster",
    "800": "achthundertster",
    "900": "neunhundertster",
    "1000": "tausendster"
  },
  "unitExceptions": {},
  "alternativeBase": {
    "feminine": {
      "1": "erste",
      "2": "zweite",
      "3": "dritte",
      "4": "vierte",
      "5": "fünfte",
      "6": "sechste",
      "7": "siebte",
      "8": "achte",
      "9": "neunte",
      "10": "zehnte",
      "11": "elfte",
      "12": "zwölfte",
      "13": "dreizehnte",
      "14": "vierzehnte",
      "15": "fünfzehnte",
      "16": "sechzehnte",
      "17": "siebzehnte",
      "18": "achtzehnte",
      "19": "neunzehnte",
      "20": "zwanzigste",
      "21": "einundzwanzigste",
      "22": "zweiundzwanzigste",
      "23": "dreiundzwanzigste",
      "24": "vierundzwanzigste",
      "25": "fünfundzwanzigste",
      "26": "sechsundzwanzigste",
      "27": "siebenundzwanzigste",
      "28": "achtundzwanzigste",
      "29": "neunundzwanzigste",
      "30": "dreißigste",
      "31": "einunddreißigste",
      "32": "zweiunddreißigste",
      "33": "dreiunddreißigste",
      "34": "vierunddreißigste",
      "35": "fünfunddreißigste",
      "36": "sechsunddreißigste",
      "37": "siebenunddreißigste",
      "38": "achtunddreißigste",
      "39": "neununddreißigste",
      "40": "vierzigste",
      "41": "einundvierzigste",
      "42": "zweiundvierzigste",
      "43": "dreiundvierzigste",
      "44": "vierundvierzigste",
      "45": "fünfundvierzigste",
      "46": "sechsundvierzigste",
      "47": "siebenundvierzigste",
      "48": "achtundvierzigste",
      "49": "neunundvierzigste",
      "50": "fünfzigste",
      "51": "einundfünfzigste",
      "52": "zweiundfünfzigste",
      "53": "dreiundfünfzigste",
      "54": "vierundfünfzigste",
      "55": "fünfundfünfzigste",
      "56": "sechsundfünfzigste",
      "57": "siebenundfünfzigste",
      "58": "achtundfünfzigste",
      "59": "neunundfünfzigste",
      "60": "sechzigste",
      "61": "einundsechzigste",
      "62": "zweiundsechzigste",
      "63": "dreiundsechzigste",
      "64": "vierundsechzigste",
      "65": "fünfundsechzigste",
      "66": "sechsundsechzigste",
      "67": "siebenundsechzigste",
      "68": "achtundsechzigste",
      "69": "neunundsechzigste",
      "70": "siebzigste",
      "71": "einundsiebzigste",
      "72": "zweiundsiebzigste",
      "73": "dreiundsiebzigste",
      "74": "vierundsiebzigste",
      "75": "fünfundsiebzigste",
      "76": "sechsundsiebzigste",
      "77": "siebenundsiebzigste",
      "78": "achtundsiebzigste",
      "79": "neunundsiebzigste",
      "80": "achtzigste",
      "81": "einundachtzigste",
      "82": "zweiundachtzigste",
      "83": "dreiundachtzigste",
      "84": "vierundachtzigste",
      "85": "fünfundachtzigste",
      "86": "sechsundachtzigste",
      "87": "siebenundachtzigste",
      "88": "achtundachtzigste",
      "89": "neunundachtzigste",
      "90": "neunzigste",
      "91": "einundneunzigste",
      "92": "zweiundneunzigste",
      "93": "dreiundneunzigste",
      "94": "vierundneunzigste",
      "95": "fünfundneunzigste",
      "96": "sechsundneunzigste",
      "97": "siebenundneunzigste",
      "98": "achtundneunzigste",
      "99": "neunundneunzigste",
      "100": "hundertste",
      "200": "zweihundertste",
      "300": "dreihundertste",
      "400": "vierhundertste",
      "500": "fünfhundertste",
      "600": "sechshundertste",
      "700": "siebenhundertste",
      "800": "achthundertste",
      "900": "neunhundertste",
      "1000": "tausendste"
    },

    "neuter": {
      "1": "erstes",
      "2": "zweites",
      "3": "drittes",
      "4": "viertes",
      "5": "fünftes",
      "6": "sechstes",
      "7": "siebtes",
      "8": "achtes",
      "9": "neuntes",
      "10": "zehntes",
      "11": "elftes",
      "12": "zwölftes",
      "13": "dreizehntes",
      "14": "vierzehntes",
      "15": "fünfzehntes",
      "16": "sechzehntes",
      "17": "siebzehntes",
      "18": "achzehntes",
      "19": "neunzehntes",
      "20": "zwanzigstes",
      "21": "einundzwanzigstes",
      "22": "zweiundzwanzigstes",
      "23": "dreiundzwanzigstes",
      "24": "vierundzwanzigstes",
      "25": "fünfundzwanzigstes",
      "26": "sechsundzwanzigstes",
      "27": "siebenundzwanzigstes",
      "28": "achtundzwanzigstes",
      "29": "neunundzwanzigstes",
      "30": "dreißigstes",
      "31": "einunddreißigstes",
      "32": "zweiunddreißigstes",
      "33": "dreiunddreißigstes",
      "34": "vierunddreißigstes",
      "35": "fünfunddreißigstes",
      "36": "sechsunddreißigstes",
      "37": "siebenunddreißigstes",
      "38": "achtunddreißigstes",
      "39": "neununddreißigstes",
      "40": "vierzigstes",
      "41": "einundvierzigstes",
      "42": "zweiundvierzigstes",
      "43": "dreiundvierzigstes",
      "44": "vierundvierzigstes",
      "45": "fünfundvierzigstes",
      "46": "sechsundvierzigstes",
      "47": "siebenundvierzigstes",
      "48": "achtundvierzigstes",
      "49": "neunundvierzigstes",
      "50": "fünfzigstes",
      "51": "einundfünfzigstes",
      "52": "zweiundfünfzigstes",
      "53": "dreiundfünfzigstes",
      "54": "vierundfünfzigstes",
      "55": "fünfundfünfzigstes",
      "56": "sechsundfünfzigstes",
      "57": "siebenundfünfzigstes",
      "58": "achtundfünfzigstes",
      "59": "neunundfünfzigstes",
      "60": "sechzigstes",
      "61": "einundsechzigstes",
      "62": "zweiundsechzigstes",
      "63": "dreiundsechzigstes",
      "64": "vierundsechzigstes",
      "65": "fünfundsechzigstes",
      "66": "sechsundsechzigstes",
      "67": "siebenundsechzigstes",
      "68": "achtundsechzigstes",
      "69": "neunundsechzigstes",
      "70": "siebzigstes",
      "71": "einundsiebzigstes",
      "72": "zweiundsiebzigstes",
      "73": "dreiundsiebzigstes",
      "74": "vierundsiebzigstes",
      "75": "fünfundsiebzigstes",
      "76": "sechsundsiebzigstes",
      "77": "siebenundsiebzigstes",
      "78": "achtundsiebzigstes",
      "79": "neunundsiebzigstes",
      "80": "achtzigstes",
      "81": "einundachtzigstes",
      "82": "zweiundachtzigstes",
      "83": "dreiundachtzigstes",
      "84": "vierundachtzigstes",
      "85": "fünfundachtzigstes",
      "86": "sechsundachtzigstes",
      "87": "siebenundachtzigstes",
      "88": "achtundachtzigstes",
      "89": "neunundachtzigstes",
      "90": "neunzigstes",
      "91": "einundneunzigstes",
      "92": "zweiundneunzigstes",
      "93": "dreiundneunzigstes",
      "94": "vierundneunzigstes",
      "95": "fünfundneunzigstes",
      "96": "sechsundneunzigstes",
      "97": "siebenundneunzigstes",
      "98": "achtundneunzigstes",
      "99": "neunundneunzigstes",
      "100": "hundertstes",
      "200": "zweihundertstes",
      "300": "dreihundertstes",
      "400": "vierhundertstes",
      "500": "fünfhundertstes",
      "600": "sechshundertstes",
      "700": "siebenhundertstes",
      "800": "achthundertstes",
      "900": "neunhundertstes",
      "1000": "tausendstes"
    }
  },
  "units": [
    "hundertster",
    "tausendster",
    "millionster"
  ]
}

},{}],4:[function(require,module,exports){
module.exports={
    "useLongScale": true,
    "baseSeparator": "",
    "unitSeparator": "",
    "joinSeparator": true,
    "base": {
      "0": "null",
      "1": "eins",
      "2": "zwei",
      "3": "drei",
      "4": "vier",
      "5": "fünf",
      "6": "sechs",
      "7": "sieben",
      "8": "acht",
      "9": "neun",
      "10": "zehn",
      "11": "elf",
      "12": "zwölf",
      "13": "dreizehn",
      "14": "vierzehn",
      "15": "fünfzehn",
      "16": "sechzehn",
      "17": "siebzehn",
      "18": "achtzehn",
      "19": "neunzehn",
      "20": "zwanzig",
      "21": "einundzwanzig",
      "22": "zweiundzwanzig",
      "23": "dreiundzwanzig",
      "24": "vierundzwanzig",
      "25": "fünfundzwanzig",
      "26": "sechsundzwanzig",
      "27": "siebenundzwanzig",
      "28": "achtundzwanzig",
      "29": "neunundzwanzig",
      "30": "dreißig",
      "31": "einunddreißig",
      "32": "zweiunddreißig",
      "33": "dreiunddreißig",
      "34": "vierunddreißig",
      "35": "fünfunddreißig",
      "36": "sechsunddreißig",
      "37": "siebenunddreißig",
      "38": "achtunddreißig",
      "39": "neununddreißig",
      "40": "vierzig",
      "41": "einundvierzig",
      "42": "zweiundvierzig",
      "43": "dreiundvierzig",
      "44": "vierundvierzig",
      "45": "fünfundvierzig",
      "46": "sechsundvierzig",
      "47": "siebenundvierzig",
      "48": "achtundvierzig",
      "49": "neunundvierzig",
      "50": "fünfzig",
      "51": "einundfünfzig",
      "52": "zweiundfünfzig",
      "53": "dreiundfünfzig",
      "54": "vierundfünfzig",
      "55": "fünfundfünfzig",
      "56": "sechsundfünfzig",
      "57": "siebenundfünfzig",
      "58": "achtundfünfzig",
      "59": "neunundfünfzig",
      "60": "sechzig",
      "61": "einundsechzig",
      "62": "zweiundsechzig",
      "63": "dreiundsechzig",
      "64": "vierundsechzig",
      "65": "fünfundsechzig",
      "66": "sechsundsechzig",
      "67": "siebenundsechzig",
      "68": "achtundsechzig",
      "69": "neunundsechzig",
      "70": "siebzig",
      "71": "einundsiebzig",
      "72": "zweiundsiebzig",
      "73": "dreiundsiebzig",
      "74": "vierundsiebzig",
      "75": "fünfundsiebzig",
      "76": "sechsundsiebzig",
      "77": "siebenundsiebzig",
      "78": "achtundsiebzig",
      "79": "neunundsiebzig",
      "80": "achtzig",
      "81": "einundachtzig",
      "82": "zweiundachtzig",
      "83": "dreiundachtzig",
      "84": "vierundachtzig",
      "85": "fünfundachtzig",
      "86": "sechsundachtzig",
      "87": "siebenundachtzig",
      "88": "achtundachtzig",
      "89": "neunundachtzig",
      "90": "neunzig",
      "91": "einundneunzig",
      "92": "zweiundneunzig",
      "93": "dreiundneunzig",
      "94": "vierundneunzig",
      "95": "fünfundneunzig",
      "96": "sechsundneunzig",
      "97": "siebenundneunzig",
      "98": "achtundneunzig",
      "99": "neunundneunzig",
      "100": "einhundert",
      "200": "zweihundert",
      "300": "dreihundert",
      "1000": "eintausend"
    },
    "alternativeBase": {
      "feminine": {
        "1": "eine"
      },
      "masculine": {
        "1": "ein",
        "1000": "eintausend",
        "2000": "zweitausend",
        "3000": "dreitausend",
        "4000": "viertausend",
        "5000": "fünftausend",
        "6000": "sechstausend",
        "7000": "siebentausend",
        "8000": "achttausend",
        "9000": "neuntausend"
      },
      "neuter": {
        "1": "ein"
      }
    },
    "units": [
      {
        "singular": "einhundert",
        "useBaseInstead": true,
        "useBaseException": [1],
        "useBaseExceptionWhenNoTrailingNumbers": true
      },
      {
        "singular": "tausend",
        "useAlternativeBase": "masculine"
      },
      {
        "singular": "eine Million-",
        "plural": " Millionen-",
        "avoidPrefixException": [1]
      },
      {
        "singular": "eine Millarde-",
        "plural": "Millarden-",
        "avoidPrefixException": [1]
      }
    ],
      "unitExceptions": {}
  }
  
},{}],5:[function(require,module,exports){
module.exports={
  "useLongScale": false,
  "baseSeparator": "-",
  "unitSeparator": "and ",
  "base": {
    "0": "zero",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
    "13": "thirteen",
    "14": "fourteen",
    "15": "fifteen",
    "16": "sixteen",
    "17": "seventeen",
    "18": "eighteen",
    "19": "nineteen",
    "20": "twenty",
    "30": "thirty",
    "40": "forty",
    "50": "fifty",
    "60": "sixty",
    "70": "seventy",
    "80": "eighty",
    "90": "ninety"
  },
  "units" : {
    "2": "hundred",
    "3": "thousand",
    "5": "lakh",
    "7": "crore"
  },
  "unitExceptions": []
}
},{}],6:[function(require,module,exports){
module.exports={
  "useLongScale": false,
  "baseSeparator": "-",
  "unitSeparator": "and ",
  "base": {
    "0": "zero",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
    "13": "thirteen",
    "14": "fourteen",
    "15": "fifteen",
    "16": "sixteen",
    "17": "seventeen",
    "18": "eighteen",
    "19": "nineteen",
    "20": "twenty",
    "30": "thirty",
    "40": "forty",
    "50": "fifty",
    "60": "sixty",
    "70": "seventy",
    "80": "eighty",
    "90": "ninety"
  },
  "units" : [
    "hundred",
    "thousand",
    "million",
    "billion",
    "trillion",
    "quadrillion",
    "quintillion",
    "sextillion",
    "septillion",
    "octillion",
    "nonillion",
    "decillion",
    "undecillion",
    "duodecillion",
    "tredecillion",
    "quattuordecillion",
    "quindecillion"
  ],
  "unitExceptions": []
}
},{}],7:[function(require,module,exports){
module.exports={
  "useLongScale": false,
  "baseSeparator": " ",
  "unitSeparator": "",
  "base": {
    "0": "nulo",
    "1": "unu",
    "2": "du",
    "3": "tri",
    "4": "kvar",
    "5": "kvin",
    "6": "ses",
    "7": "sep",
    "8": "ok",
    "9": "naŭ",
    "10": "dek",
    "20": "dudek",
    "30": "tridek",
    "40": "kvardek",
    "50": "kvindek",
    "60": "sesdek",
    "70": "sepdek",
    "80": "okdek",
    "90": "naŭdek",
    "100": "cent",
    "200": "ducent",
    "300": "tricent",
    "400": "kvarcent",
    "500": "kvincent",
    "600": "sescent",
    "700": "sepcent",
    "800": "okcent",
    "900": "naŭcent"
  },
  "units" : [
    {
      "useBaseInstead": true,
      "useBaseException": []
    },
    {
      "singular": "mil",
      "avoidPrefixException": [1]
    },
    {
      "singular": "miliono",
      "plural": "milionoj",
      "avoidPrefixException": [1]
    },
    {
      "singular": "miliardo",
      "plural": "miliardoj",
      "avoidPrefixException": [1]
    },
    {
      "singular": "biliono",
      "plural": "bilionoj",
      "avoidPrefixException": [1]
    }
  ],
  "unitExceptions": []
}

},{}],8:[function(require,module,exports){
module.exports={
  "useLongScale": true,
  "baseSeparator": " ",
  "unitSeparator": "",
  "base": {
    "1": "primero",
    "2": "segundo",
    "3": "tercero",
    "4": "cuarto",
    "5": "quinto",
    "6": "sexto",
    "7": "séptimo",
    "8": "octavo",
    "9": "noveno",
    "10": "décimo",
    "11": "undécimo",
    "12": "duodécimo",
    "13": "decimotercero",
    "14": "decimocuarto",
    "15": "decimoquinto",
    "16": "decimosexto",
    "17": "decimoséptimo",
    "18": "decimoctavo",
    "19": "decimonoveno",
    "20": "vigésimo",
    "21": "vigésimo primero",
    "22": "vigésimo segundo",
    "23": "vigésimo tercero",
    "24": "vigésimo cuarto",
    "25": "vigésimo quinto",
    "26": "vigésimo sexto",
    "27": "vigésimo séptimo",
    "28": "vigésimo octavo",
    "29": "vigésimo noveno",
    "30": "trigésimo",
    "40": "cuadragésimo",
    "50": "quincuagésimo",
    "60": "sexagésimo",
    "70": "septuagésimo",
    "80": "octogésimo",
    "90": "nonagésimo",
    "100": "centésimo",
    "200": "ducentésimo",
    "300": "tricentésimo",
    "400": "cuadringentésimo",
    "500": "quingentésimo",
    "600": "sexcentésimo",
    "700": "septingentésimo",
    "800": "octingésimo",
    "900": "noningentésimo",
    "1000": "milésimo"
  },
  "unitExceptions": {},
  "alternativeBase": {
    "feminine": {
      "1": "primera",
      "2": "segunda",
      "3": "tercera",
      "4": "cuarta",
      "5": "quinta",
      "6": "sexta",
      "7": "séptima",
      "8": "octava",
      "9": "novena",
      "10": "décima",
      "11": "undécima",
      "12": "duodécima",
      "13": "decimotercera",
      "14": "decimocuarta",
      "15": "decimoquinta",
      "16": "decimosexta",
      "17": "decimoséptima",
      "18": "decimoctava",
      "19": "decimonovena",
      "20": "vigésima",
      "21": "vigésima primera",
      "22": "vigésima segunda",
      "23": "vigésima tercera",
      "24": "vigésima cuarta",
      "25": "vigésima quinta",
      "26": "vigésima sexta",
      "27": "vigésima séptima",
      "28": "vigésima octava",
      "29": "vigésima novena",
      "30": "trigésima",
      "40": "cuadragésima",
      "50": "quincuagésima",
      "60": "sexagésima",
      "70": "septuagésima",
      "80": "octogésima",
      "90": "nonagésima",
      "100": "centésima",
      "200": "ducentésima",
      "300": "tricentésima",
      "400": "cuadringentésima",
      "500": "quingentésima",
      "600": "sexcentésima",
      "700": "septingentésima",
      "800": "octingésima",
      "900": "noningentésima",
      "1000": "milésima"
    },
    "masculine": {
      "1": "primer",
      "3": "tercer"
    }
  },
  "units": [
    "centésimo",
    "milésimo",
    "millonésimo"
  ]
}

},{}],9:[function(require,module,exports){
module.exports={
  "useLongScale": true,
  "baseSeparator": " y ",
  "unitSeparator": "",
  "base": {
    "0": "cero",
    "1": "uno",
    "2": "dos",
    "3": "tres",
    "4": "cuatro",
    "5": "cinco",
    "6": "seis",
    "7": "siete",
    "8": "ocho",
    "9": "nueve",
    "10": "diez",
    "11": "once",
    "12": "doce",
    "13": "trece",
    "14": "catorce",
    "15": "quince",
    "16": "dieciséis",
    "17": "diecisiete",
    "18": "dieciocho",
    "19": "diecinueve",
    "20": "veinte",
    "21": "veintiuno",
    "22": "veintidós",
    "23": "veintitrés",
    "24": "veinticuatro",
    "25": "veinticinco",
    "26": "veintiséis",
    "27": "veintisiete",
    "28": "veintiocho",
    "29": "veintinueve",
    "30": "treinta",
    "40": "cuarenta",
    "50": "cincuenta",
    "60": "sesenta",
    "70": "setenta",
    "80": "ochenta",
    "90": "noventa",
    "100": "cien",
    "200": "doscientos",
    "300": "trescientos",
    "400": "cuatrocientos",
    "500": "quinientos",
    "600": "seiscientos",
    "700": "setecientos",
    "800": "ochocientos",
    "900": "novecientos",
    "1000": "mil"
  },
  "alternativeBase": {
    "feminine": {
      "1": "una",
      "200": "doscientas",
      "300": "trescientas",
      "400": "cuatrocientas",
      "500": "quinientas",
      "600": "seiscientas",
      "700": "setecientas",
      "800": "ochocientas",
      "900": "novecientas"
    },
    "masculine": {
      "1": "un"
    }
  },
  "unitExceptions": {
    "1000000": "un millón",
    "1000000000000": "un billón",
    "1000000000000000000": "un trillón",
    "1000000000000000000000000": "un cuatrillones",
    "1000000000000000000000000000000": "un quintillón",
    "1000000000000000000000000000000000000": "un sextillón",
    "1000000000000000000000000000000000000000000": "un septillón",
    "1000000000000000000000000000000000000000000000000": "un octillón",
    "1000000000000000000000000000000000000000000000000000000": "un nonillón",
    "1000000000000000000000000000000000000000000000000000000000000": "un decillón",
    "1000000000000000000000000000000000000000000000000000000000000000000": "un undecillón",
    "1000000000000000000000000000000000000000000000000000000000000000000000000": "un duodecillón",
    "1000000000000000000000000000000000000000000000000000000000000000000000000000000": "un tredecillón",
    "1000000000000000000000000000000000000000000000000000000000000000000000000000000000000": "un cuatordecillón",
    "1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000": "un quindecillón"
  },
  "units": [
    {
      "singular": "ciento",
      "useBaseInstead": true,
      "useBaseException": [1],
      "useBaseExceptionWhenNoTrailingNumbers": true
    },
    {
      "singular": "mil",
      "avoidPrefixException": [1]
    },
    {
      "singular": "millón",
      "plural": "millones"
    },
    {
      "singular": "billón",
      "plural": "billones"
    },
    {
      "singular": "trillón",
      "plural": "trillones"
    },
    {
      "singular": "cuatrillón",
      "plural": "cuatrillones"
    },
    {
      "singular": "quintillón",
      "plural": "quintillones"
    },
    {
      "singular": "sextillón",
      "plural": "sextillones"
    },
    {
      "singular": "septillón",
      "plural": "septillones"
    },
    {
      "singular": "octillón",
      "plural": "octillones"
    },
    {
      "singular": "nonillón",
      "plural": "nonillones"
    },
    {
      "singular": "decillón",
      "plural": "decillones"
    },
    {
      "singular": "undecillón",
      "plural": "undecillones"
    },
    {
      "singular": "duodecillón",
      "plural": "duodecillones"
    },
    {
      "singular": "tredecillón",
      "plural": "tredecillones"
    },
    {
      "singular": "cuatrodecillón",
      "plural": "cuatrodecillones"
    },
    {
      "singular": "quindecillón",
      "plural": "quindecillones"
    }
  ]
}

},{}],10:[function(require,module,exports){
module.exports={
  "useLongScale": true,
  "baseSeparator": "-",
  "unitSeparator": "",
  "base": {
    "1": "premier",
    "2": "deuxième",
    "3": "troisième",
    "4": "quatrième",
    "5": "cinquième",
    "6": "sixième",
    "7": "septième",
    "8": "huitième",
    "9": "neuvième",
    "10": "dixième",
    "11": "onzième",
    "12": "douzième",
    "13": "treizième",
    "14": "quatorzième",
    "15": "quinzième",
    "16": "seizième",
    "17": "dix-septième",
    "18": "dix-huitième",
    "19": "dix-neuvième",
    "20": "vingtième",
    "21": "vingt et unième",
    "22": "vingt-deuxième",
    "23": "vingt-troisième",
    "24": "vingt-quatrième",
    "25": "vingt-cinquième",
    "26": "vingt-sixième",
    "27": "vingt-septième",
    "28": "vingt-huitième",
    "29": "vingt-neuvième",
    "30": "trente",
    "31": "trente et unième",
    "40": "quarante",
    "41": "quarante et unième",
    "50": "cinquante",
    "51": "cinquante et unième",
    "60": "soixante",
    "61": "soixante et unième",
    "70": "soixante",
    "71": "soixante et onzième",
    "72": "soixante-douzième",
    "73": "soixante-treizième",
    "74": "soixante-quatorzième",
    "75": "soixante-quinzième",
    "76": "soixante-seizième",
    "77": "soixante-dix-septième",
    "78": "soixante-dix-huitième",
    "79": "soixante-dix-neuvième",
    "80": "quatre-vingt",
    "81": "quatre-vingt-unième",
    "87": "quatre-vingt-septième",
    "90": "quatre-vingt",
    "91": "quatre-vingt-onzième",
    "92": "quatre-vingt-douzième",
    "93": "quatre-vingt-treizième",
    "94": "quatre-vingt-quatorzième",
    "95": "quatre-vingt-quinzième",
    "96": "quatre-vingt-seizième",
    "97": "quatre-vingt-dix-septième",
    "98": "quatre-vingt-dix-huitième",
    "99": "quatre-vingt-dix-neuvième",
    "100": "centième",
    "200": "deux centième",
    "300": "trois centième",
    "400": "quatre centième",
    "500": "cinq centième",
    "600": "six centième",
    "700": "sept centième",
    "800": "huit centième",
    "900": "neuf centième",
    "1000": "millième",
    "2000": "deux millième",
    "3000": "trois millième",
    "4000": "quatre millième",
    "5000": "cinq millième",
    "6000": "six millième",
    "7000": "sept millième",
    "8000": "huit millième",
    "9000": "neuf millième"
  },
  "unitExceptions": {
    "20": "vingtième",
    "30": "trentième",
    "40": "quarantième",
    "50": "cinquantième",
    "60": "soixantième",
    "70": "soixante-dixième",
    "80": "quatre-vingtième",
    "90": "quatre-vingt-dixième"
  },
  "alternativeBase": {
    "feminine": {
      "1": "première"
    }
  },
  "units": [
    "centième",
    "millième",
    "millionième"
  ]
}

},{}],11:[function(require,module,exports){
module.exports={
  "useLongScale": false,
  "baseSeparator": "-",
  "unitSeparator": "",
  "base": {
    "0": "zéro",
    "1": "un",
    "2": "deux",
    "3": "trois",
    "4": "quatre",
    "5": "cinq",
    "6": "six",
    "7": "sept",
    "8": "huit",
    "9": "neuf",
    "10": "dix",
    "11": "onze",
    "12": "douze",
    "13": "treize",
    "14": "quatorze",
    "15": "quinze",
    "16": "seize",
    "17": "dix-sept",
    "18": "dix-huit",
    "19": "dix-neuf",
    "20": "vingt",
    "30": "trente",
    "40": "quarante",
    "50": "cinquante",
    "60": "soixante",
    "70": "soixante-dix",
    "80": "quatre-vingts",
    "90": "quatre-vingt-dix"
  },
  "alternativeBase": {
    "feminine": {
      "1": "une"
    }
  },
  "units" : [
    {
      "singular": "cent",
      "plural": "cents",
      "avoidInNumberPlural": true,
      "avoidPrefixException": [1]
    },
    {
      "singular": "mille",
      "avoidPrefixException": [1]
    },
    {
      "singular": "million",
      "plural": "millions"
    },
    {
      "singular": "milliard",
      "plural": "milliards"
    },
    {
      "singular": "billion",
      "plural": "billions"
    },
    {
      "singular": "billiard",
      "plural": "billiards"
    },
    {
      "singular": "trillion",
      "plural": "trillions"
    },
    {
      "singular": "trilliard",
      "plural": "trilliards"
    },
    {
      "singular": "quadrillion",
      "plural": "quadrillions"
    },
    {
      "singular": "quadrilliard",
      "plural": "quadrilliards"
    },
    {
      "singular": "quintillion",
      "plural": "quintillions"
    },
    {
      "singular": "quintilliard",
      "plural": "quintilliards"
    },
    {
      "singular": "sextillion",
      "plural": "sextillions"
    },
    {
      "singular": "sextilliard",
      "plural": "sextilliards"
    },
    {
      "singular": "septillion",
      "plural": "septillions"
    },
    {
      "singular": "septilliard",
      "plural": "septilliards"
    },
    {
      "singular": "octillion",
      "plural": "octillions"
    }
  ],
  "unitExceptions": {
    "21": "vingt et un",
    "31": "trente et un",
    "41": "quarante et un",
    "51": "cinquante et un",
    "61": "soixante et un",
    "71": "soixante et onze",
    "72": "soixante-douze",
    "73": "soixante-treize",
    "74": "soixante-quatorze",
    "75": "soixante-quinze",
    "76": "soixante-seize",
    "77": "soixante-dix-sept",
    "78": "soixante-dix-huit",
    "79": "soixante-dix-neuf",
    "80": "quatre-vingts",
    "91": "quatre-vingt-onze",
    "92": "quatre-vingt-douze",
    "93": "quatre-vingt-treize",
    "94": "quatre-vingt-quatorze",
    "95": "quatre-vingt-quinze",
    "96": "quatre-vingt-seize",
    "97": "quatre-vingt-dix-sept",
    "98": "quatre-vingt-dix-huit",
    "99": "quatre-vingt-dix-neuf"
  }
}

},{}],12:[function(require,module,exports){
module.exports={
  "useLongScale": true,
  "baseSeparator": "",
  "unitSeparator": "és ",
  "base": {
    "0": "nulla",
    "1": "egy",
    "2": "kettő",
    "3": "három",
    "4": "négy",
    "5": "öt",
    "6": "hat",
    "7": "hét",
    "8": "nyolc",
    "9": "kilenc",
    "10": "tíz",
    "11": "tizenegy",
    "12": "tizenkettő",
    "13": "tizenhárom",
    "14": "tizennégy",
    "15": "tizenöt",
    "16": "tizenhat",
    "17": "tizenhét",
    "18": "tizennyolc",
    "19": "tizenkilenc",
    "20": "húsz",
    "21": "huszonegy",
    "22": "huszonkettő",
    "23": "huszonhárom",
    "24": "huszonnégy",
    "25": "huszonöt",
    "26": "huszonhat",
    "27": "huszonhét",
    "28": "huszonnyolc",
    "29": "huszonkilenc",
    "30": "harminc",
    "40": "negyven",
    "50": "ötven",
    "60": "hatvan",
    "70": "hetven",
    "80": "nyolcvan",
    "90": "kilencven",
    "100": "száz",
    "200": "kétszáz",
    "300": "háromszáz",
    "400": "négyszáz",
    "500": "ötszáz",
    "600": "hatszáz",
    "700": "hétszáz",
    "800": "nyolcszáz",
    "900": "kilencszáz",
    "1000": "ezer"
  },
  "unitExceptions": {
    "1": "egy"
  },
  "units" : [
    {
      "singular": "száz",
      "useBaseInstead": true,
      "useBaseException": [1]
    },
    {
      "singular": "ezer",
      "avoidPrefixException": [1]
    },
    {
      "singular": "millió",
      "avoidPrefixException": [1]
    },
    {
      "singular": "milliárd",
      "avoidPrefixException": [1]
    },
    {
      "singular": "-billió",
      "avoidPrefixException": [1]
    },
    {
      "singular": "billiárd",
      "avoidPrefixException": [1]
    },
    {
      "singular": "trillió",
      "avoidPrefixException": [1]
    },
    {
      "singular": "trilliárd",
      "avoidPrefixException": [1]
    },
    {
      "singular": "kvadrillió",
      "avoidPrefixException": [1]
    },
    {
      "singular": "kvadrilliárd",
      "avoidPrefixException": [1]
    },
    {
      "singular": "kvintillió",
      "avoidPrefixException": [1]
    },
    {
      "singular": "kvintilliárd",
      "avoidPrefixException": [1]
    },
    {
      "singular": "szextillió",
      "avoidPrefixException": [1]
    },
    {
      "singular": "szeptillió",
      "avoidPrefixException": [1]
    },
    {
      "singular": "oktillió",
      "avoidPrefixException": [1]
    },
    {
      "singular": "nonillió",
      "avoidPrefixException": [1]
    }
  ]
}

},{}],13:[function(require,module,exports){
module.exports={
  "useLongScale": false,
  "baseSeparator": " ",
  "unitSeparator": "",
  "base": {
    "0": "nol",
    "1": "satu",
    "2": "dua",
    "3": "tiga",
    "4": "empat",
    "5": "lima",
    "6": "enam",
    "7": "tujuh",
    "8": "delapan",
    "9": "sembilan",
    "10": "sepuluh",
    "11": "sebelas",
    "12": "dua belas",
    "13": "tiga belas",
    "14": "empat belas",
    "15": "lima belas",
    "16": "enam belas",
    "17": "tujuh belas",
    "18": "delapan belas",
    "19": "sembilan belas",
    "20": "dua puluh",
    "30": "tiga puluh",
    "40": "empat puluh",
    "50": "lima puluh",
    "60": "enam puluh",
    "70": "tujuh puluh",
    "80": "delapan puluh",
    "90": "sembilan puluh"
  },
  "units" : [
    {
        "singular": "seratus",
        "plural": "ratus",
        "avoidPrefixException": [1]
    },
    {
        "singular": "seribu",
        "plural": "ribu",
        "avoidPrefixException": [1]
    },
    "juta",
    "miliar",
    "triliun",
    "kuadiliun"
  ],
  "unitExceptions": []
}

},{}],14:[function(require,module,exports){
module.exports={
    "useLongScale": true,
    "baseSeparator": " ",
    "unitSeparator": "",
    "base": {
      "1": "primo",
      "2": "secondo",
      "3": "terzo",
      "4": "quarto",
      "5": "quinto",
      "6": "sesto",
      "7": "settimo",
      "8": "ottavo",
      "9": "nono",
      "10": "decimo",
      "11": "undicesimo",
      "12": "dodicesimo",
      "13": "tredicesimo",
      "14": "quattordicesimo",
      "15": "quindicesimo",
      "16": "sedicesimo",
      "17": "diciassettesimo",
      "18": "diciottesimo",
      "19": "diciannovesimo",
      "20": "ventesimo",
      "21": "ventunesimo",
      "22": "ventiduesimo",
      "23": "ventitreesimo",
      "24": "ventiquattresimo",
      "25": "venticinquesimo",
      "26": "ventiseiesimo",
      "27": "ventisettesimo",
      "28": "ventottesimo",
      "29": "ventinovesimo",
      "30": "trentesimo",
      "31": "trentunesimo",
      "32": "trentaduesimo",
      "33": "trentatreesimo",
      "34": "trentaquattresimo",
      "35": "trentacinquesimo",
      "36": "trentaseiesimo",
      "37": "trentasettesimo",
      "38": "trentottesimo",
      "39": "trentanovesimo",
      "40": "quarantesimo",
      "41": "quarantunesimo",
      "42": "quarantaduesimo",
      "43": "quarantatreesimo",
      "44": "quarantaquattresimo",
      "45": "quarantacinquesimo",
      "46": "quarantaseiesimo",
      "47": "quarantasettesimo",
      "48": "quarantottesimo",
      "49": "quarantanovesimo",
      "50": "cinquantesimo",
      "51": "cinquantunesimo",
      "52": "cinquantaduesimo",
      "53": "cinquantatreesimo",
      "54": "cinquantaquattresimo",
      "55": "cinquantacinquesimo",
      "56": "cinquantaseiesimo",
      "57": "cinquantasettesimo",
      "58": "cinquantottesimo",
      "59": "cinquantanovesimo",
      "60": "sessantesimo",
      "61": "sessantunesimo",
      "62": "sessantaduesimo",
      "63": "sessantatreesimo",
      "64": "sessantaquattresimo",
      "65": "sessantacinquesimo",
      "66": "sessantaseiesimo",
      "67": "sessantasettesimo",
      "68": "sessantottesimo",
      "69": "sessantanovesimo",
      "70": "settantesimo",
      "71": "settantunesimo",
      "72": "settantaduesimo",
      "73": "settantatreesimo",
      "74": "settantaquattresimo",
      "75": "settantacinquesimo",
      "76": "settantaseiesimo",
      "77": "settantasettesimo",
      "78": "settantottesimo",
      "79": "settantanovesimo",
      "80": "ottantesimo",
      "81": "ottantunesimo",
      "82": "ottantaduesimo",
      "83": "ottantatreesimo",
      "84": "ottantaquattresimo",
      "85": "ottantacinquesimo",
      "86": "ottantaseiesimo",
      "87": "ottantasettesimo",
      "88": "ottantottesimo",
      "89": "ottantanovesimo",
      "90": "novantesimo",
      "91": "novantunesimo",
      "92": "novantaduesimo",
      "93": "novantatreesimo",
      "94": "novantaquattresimo",
      "95": "novantacinquesimo",
      "96": "novantaseiesimo",
      "97": "novantasettesimo",
      "98": "novantottesimo",
      "99": "novantanovesimo",
      "100": "centesimo",
      "200": "duecentesimo",
      "300": "trecentesimo",
      "400": "quattrocentesimo",
      "500": "cinquecentesimo",
      "600": "seicentesimo",
      "700": "settecentesimo",
      "800": "ottocentesimo",
      "900": "novecentesimo",
      "1000": "millesimo"
    },
    "unitExceptions": {},
    "alternativeBase": {
      "feminine": {
        "1": "prima",
        "2": "seconda",
        "3": "terza",
        "4": "quarta",
        "5": "quinta",
        "6": "sesta",
        "7": "settima",
        "8": "ottava",
        "9": "nona",
        "10": "decima",
        "11": "undicesima",
        "12": "dodicesima",
        "13": "tredicesima",
        "14": "quattordicesima",
        "15": "quindicesima",
        "16": "sedicesima",
        "17": "diciassettesima",
        "18": "diciottesima",
        "19": "diciannovesima",
        "20": "ventesima",
        "21": "ventunesima",
        "22": "ventiduesima",
        "23": "ventitreesima",
        "24": "ventiquattresima",
        "25": "venticinquesima",
        "26": "ventiseiesima",
        "27": "ventisettesima",
        "28": "ventottesima",
        "29": "ventinovesima",
        "30": "trentesima",
        "31": "trentunesima",
        "32": "trentaduesima",
        "33": "trentatreesima",
        "34": "trentaquattresima",
        "35": "trentacinquesima",
        "36": "trentaseiesima",
        "37": "trentasettesima",
        "38": "trentottesima",
        "39": "trentanovesima",
        "40": "quarantesima",
        "41": "quarantunesima",
        "42": "quarantaduesima",
        "43": "quarantatreesima",
        "44": "quarantaquattresima",
        "45": "quarantacinquesima",
        "46": "quarantaseiesima",
        "47": "quarantasettesima",
        "48": "quarantottesima",
        "49": "quarantanovesima",
        "50": "cinquantesima",
        "51": "cinquantunesima",
        "52": "cinquantaduesima",
        "53": "cinquantatreesima",
        "54": "cinquantaquattresima",
        "55": "cinquantacinquesima",
        "56": "cinquantaseiesima",
        "57": "cinquantasettesima",
        "58": "cinquantottesima",
        "59": "cinquantanovesima",
        "60": "sessantesima",
        "61": "sessantunesima",
        "62": "sessantaduesima",
        "63": "sessantatreesima",
        "64": "sessantaquattresima",
        "65": "sessantacinquesima",
        "66": "sessantaseiesima",
        "67": "sessantasettesima",
        "68": "sessantottesima",
        "69": "sessantanovesima",
        "70": "settantesima",
        "71": "settantunesima",
        "72": "settantaduesima",
        "73": "settantatreesima",
        "74": "settantaquattresima",
        "75": "settantacinquesima",
        "76": "settantaseiesima",
        "77": "settantasettesima",
        "78": "settantottesima",
        "79": "settantanovesima",
        "80": "ottantesima",
        "81": "ottantunesima",
        "82": "ottantaduesima",
        "83": "ottantatreesima",
        "84": "ottantaquattresima",
        "85": "ottantacinquesima",
        "86": "ottantaseiesima",
        "87": "ottantasettesima",
        "88": "ottantottesima",
        "89": "ottantanovesima",
        "90": "novantesima",
        "91": "novantunesima",
        "92": "novantaduesima",
        "93": "novantatreesima",
        "94": "novantaquattresima",
        "95": "novantacinquesima",
        "96": "novantaseiesima",
        "97": "novantasettesima",
        "98": "novantottesima",
        "99": "novantanovesima",
        "100": "centesima",
        "200": "duecentesima",
        "300": "trecentesima",
        "400": "quattrocentesima",
        "500": "cinquecentesima",
        "600": "seicentesima",
        "700": "settecentesima",
        "800": "ottocentesima",
        "900": "novecentesima",
        "1000": "millesima"
      }
    },
    "units": [
      {
        "singular": "centesimo",
        "useBaseInstead": true,
        "useBaseException": [1],
        "useBaseExceptionWhenNoTrailingNumbers": true
      },
      {
        "singular": "millesimo",
        "avoidPrefixException": [1]
      },
      {
        "singular": "milionesimo",
        "plural": "milionesimi"
      }
    ]
  }
  
},{}],15:[function(require,module,exports){
module.exports={
    "useLongScale": false,
    "baseSeparator": "",
    "unitSeparator": "",
    "generalSeparator": "",
    "wordSeparator": "",
    "base": {
        "0": "zero",
        "1": "uno",
        "2": "due",
        "3": "tre",
        "4": "quattro",
        "5": "cinque",
        "6": "sei",
        "7": "sette",
        "8": "otto",
        "9": "nove",
        "10": "dieci",
        "11": "undici",
        "12": "dodici",
        "13": "tredici",
        "14": "quattordici",
        "15": "quindici",
        "16": "sedici",
        "17": "diciassette",
        "18": "diciotto",
        "19": "diciannove",
        "20": "venti",
        "21": "ventuno",
        "23": "ventitré",
        "28": "ventotto",
        "30": "trenta",
        "31": "trentuno",
        "33": "trentatré",
        "38": "trentotto",
        "40": "quaranta",
        "41": "quarantuno",
        "43": "quaranta­tré",
        "48": "quarantotto",
        "50": "cinquanta",
        "51": "cinquantuno",
        "53": "cinquantatré",
        "58": "cinquantotto",
        "60": "sessanta",
        "61": "sessantuno",
        "63": "sessanta­tré",
        "68": "sessantotto",
        "70": "settanta",
        "71": "settantuno",
        "73": "settantatré",
        "78": "settantotto",
        "80": "ottanta",
        "81": "ottantuno",
        "83": "ottantatré",
        "88": "ottantotto",
        "90": "novanta",
        "91": "novantuno",
        "93": "novantatré",
        "98": "novantotto",
        "100": "cento",
        "101": "centuno",
        "108": "centootto",
        "180": "centottanta",
        "201": "duecentuno",
        "301": "trecentuno",
        "401": "quattrocentuno",
        "501": "cinquecentuno",
        "601": "seicentuno",
        "701": "settecentuno",
        "801": "ottocentuno",
        "901": "novecentuno"
    }, 
    "alternativeBase": {
        "feminine": {
          "1": "una"
        },
        "masculine": {
          "1": "uno"
        }
      },
    "unitExceptions": {
        "1": "un"
    },
    "units": [
        {
            "singular": "cento",
            "avoidPrefixException": [
                1
            ]
        },
        {
            "singular": "mille",
            "plural": "mila",
            "avoidPrefixException": [
                1
            ]
        },
        {
            "singular": "milione",
            "plural": "milioni"
        },
        {
            "singular": "miliardo",
            "plural": "miliardi"
        },
        {
            "singular": "bilione",
            "plural": "bilioni"
        },
        {
            "singular": "biliardo",
            "plural": "biliardi"
        },
        {
            "singular": "trilione",
            "plural": "trilioni"
        },
        {
            "singular": "triliardo",
            "plural": "triliardi"
        },
        {
            "singular": "quadrilione",
            "plural": "quadrilioni"
        },
        {
            "singular": "quadriliardo",
            "plural": "quadriliardi"
        }
    ]
}
},{}],16:[function(require,module,exports){
module.exports={
  "useLongScale": true,
  "baseSeparator": " e ",
  "unitSeparator": "e ",
  "andWhenTrailing": true,
  "base": {
    "0": "zero",
    "1": "um",
    "2": "dois",
    "3": "três",
    "4": "quatro",
    "5": "cinco",
    "6": "seis",
    "7": "sete",
    "8": "oito",
    "9": "nove",
    "10": "dez",
    "11": "onze",
    "12": "doze",
    "13": "treze",
    "14": "catorze",
    "15": "quinze",
    "16": "dezasseis",
    "17": "dezassete",
    "18": "dezoito",
    "19": "dezanove",
    "20": "vinte",
    "30": "trinta",
    "40": "quarenta",
    "50": "cinquenta",
    "60": "sessenta",
    "70": "setenta",
    "80": "oitenta",
    "90": "noventa",
    "100": "cem",
    "200": "duzentos",
    "300": "trezentos",
    "400": "quatrocentos",
    "500": "quinhentos",
    "600": "seiscentos",
    "700": "setecentos",
    "800": "oitocentos",
    "900": "novecentos",
    "1000": "mil"
  },
  "unitExceptions": {
    "1": "um"
  },
  "units" : [
    {
      "singular": "cento",
      "useBaseInstead": true,
      "useBaseException": [
        1
      ],
      "useBaseExceptionWhenNoTrailingNumbers": true,
      "andException": true
    },
    {
      "singular": "mil",
      "avoidPrefixException": [1],
      "andException": true
    },
    {
      "singular": "milhão",
      "plural": "milhões"
    },
    {
      "singular": "bilião",
      "plural": "biliões"
    },
    {
      "singular": "trilião",
      "plural": "triliões"
    },
    {
      "singular": "quadrilião",
      "plural": "quadriliões"
    },
    {
      "singular": "quintilião",
      "plural": "quintiliões"
    },
    {
      "singular": "sextilião",
      "plural": "sextiliões"
    },
    {
      "singular": "septilião",
      "plural": "septiliões"
    },
    {
      "singular": "octilião",
      "plural": "octiliões"
    },
    {
      "singular": "nonilião",
      "plural": "noniliões"
    },
    {
      "singular": "decilião",
      "plural": "deciliões"
    }
  ]
}

},{}],17:[function(require,module,exports){
module.exports={
  "useLongScale": true,
  "baseSeparator": " ",
  "unitSeparator": "",
  "base": {
    "1": "primeiro",
    "2": "segundo",
    "3": "terceiro",
    "4": "quarto",
    "5": "quinto",
    "6": "sexto",
    "7": "sétimo",
    "8": "oitavo",
    "9": "nono",
    "10": "décimo",
    "11": "décimo primeiro",
    "12": "décimo segundo",
    "13": "décimo terceiro",
    "14": "décimo quarto",
    "15": "décimo quinto",
    "16": "décimo sexto",
    "17": "décimo sétimo",
    "18": "décimo oitavo",
    "19": "décimo nono",
    "20": "vigésimo",
    "21": "vigésimo primeiro",
    "22": "vigésimo segundo",
    "23": "vigésimo terceiro",
    "24": "vigésimo quarto",
    "25": "vigésimo quinto",
    "26": "vigésimo sexto",
    "27": "vigésimo sétimo",
    "28": "vigésimo oitavo",
    "29": "vigésimo nono",
    "30": "trigésimo",
    "40": "quadragésimo",
    "50": "quinquagésimo",
    "60": "sexagésimo",
    "70": "septuagésimo",
    "80": "octogésimo",
    "90": "nonagésimo",
    "100": "centésimo",
    "200": "ducentésimo",
    "300": "trecentésimo",
    "400": "quadrigentésimo",
    "500": "quingentésimo",
    "600": "sexcentésimo",
    "700": "setingentésimo",
    "800": "octingentésimo",
    "900": "nongentésimo",
    "1000": "milésimo"
  },
  "unitExceptions": {},
  "alternativeBase": {
    "feminine": {
      "1": "primeira",
      "2": "segunda",
      "3": "terceira",
      "4": "quarta",
      "5": "quinta",
      "6": "sexta",
      "7": "sétima",
      "8": "oitava",
      "9": "nona",
      "10": "décima",
      "11": "décima primeira",
      "12": "décima segunda",
      "13": "décima terceira",
      "14": "décima quarta",
      "15": "décima quinta",
      "16": "décima sexta",
      "17": "décima sétima",
      "18": "décima oitava",
      "19": "décima nona",
      "20": "vigésima",
      "21": "vigésima primeira",
      "22": "vigésima segunda",
      "23": "vigésima terceira",
      "24": "vigésima quarta",
      "25": "vigésima quinta",
      "26": "vigésima sexta",
      "27": "vigésima sétima",
      "28": "vigésima oitava",
      "29": "vigésima nona",
      "30": "trigésima",
      "40": "quadragésima",
      "50": "quinquagésima",
      "60": "sexagésima",
      "70": "septuagésima",
      "80": "octogésima",
      "90": "nonagésima",
      "100": "centésima",
      "200": "ducentésima",
      "300": "trecentésima",
      "400": "quadrigentésima",
      "500": "quingentésima",
      "600": "sexcentésima",
      "700": "setingentésima",
      "800": "octingentésima",
      "900": "nongentésima",
      "1000": "milésima"
    }
  },
  "units": [
    "centésimo",
    "milésimo",
    "milionésimo"
  ]
}

},{}],18:[function(require,module,exports){
module.exports={
  "useLongScale": false,
  "baseSeparator": " e ",
  "unitSeparator": "e ",
  "andWhenTrailing": true,
  "base": {
    "0": "zero",
    "1": "um",
    "2": "dois",
    "3": "três",
    "4": "quatro",
    "5": "cinco",
    "6": "seis",
    "7": "sete",
    "8": "oito",
    "9": "nove",
    "10": "dez",
    "11": "onze",
    "12": "doze",
    "13": "treze",
    "14": "catorze",
    "15": "quinze",
    "16": "dezesseis",
    "17": "dezessete",
    "18": "dezoito",
    "19": "dezenove",
    "20": "vinte",
    "30": "trinta",
    "40": "quarenta",
    "50": "cinquenta",
    "60": "sessenta",
    "70": "setenta",
    "80": "oitenta",
    "90": "noventa",
    "100": "cem",
    "200": "duzentos",
    "300": "trezentos",
    "400": "quatrocentos",
    "500": "quinhentos",
    "600": "seiscentos",
    "700": "setecentos",
    "800": "oitocentos",
    "900": "novecentos",
    "1000": "mil"
  },
  "alternativeBase": {
    "feminine": {
      "1": "uma",
      "2": "duas",
      "200": "duzentas",
      "300": "trezentas",
      "400": "quatrocentas",
      "500": "quinhentas",
      "600": "seiscentas",
      "700": "setecentas",
      "800": "oitocentas",
      "900": "novecentas"
    }
  },
  "unitExceptions": {
    "1": "um"
  },
  "units": [
    {
      "singular": "cento",
      "useBaseInstead": true,
      "useBaseException": [1],
      "useBaseExceptionWhenNoTrailingNumbers": true,
      "andException": true
    },
    {
      "singular": "mil",
      "avoidPrefixException": [1],
      "andException": true
    },
    {
      "singular": "milhão",
      "plural": "milhões"
    },
    {
      "singular": "bilhão",
      "plural": "bilhões"
    },
    {
      "singular": "trilhão",
      "plural": "trilhões"
    },
    {
      "singular": "quadrilhão",
      "plural": "quadrilhão"
    },
    {
      "singular": "quintilhão",
      "plural": "quintilhões"
    },
    {
      "singular": "sextilhão",
      "plural": "sextilhões"
    },
    {
      "singular": "septilhão",
      "plural": "septilhões"
    },
    {
      "singular": "octilhão",
      "plural": "octilhões"
    },
    {
      "singular": "nonilhão",
      "plural": "nonilhões"
    },
    {
      "singular": "decilhão",
      "plural": "decilhões"
    },
    {
      "singular": "undecilhão",
      "plural": "undecilhões"
    },
    {
      "singular": "doudecilhão",
      "plural": "doudecilhões"
    },
    {
      "singular": "tredecilhão",
      "plural": "tredecilhões"
    }
  ]
}

},{}],19:[function(require,module,exports){
module.exports={
    "useLongScale": false,
    "baseSeparator": " ",
    "unitSeparator": "",
    "base": {
        "0": "ноль",
        "1": "один",
        "2": "два",
        "3": "три",
        "4": "четыре",
        "5": "пять",
        "6": "шесть",
        "7": "семь",
        "8": "восемь",
        "9": "девять",
        "10": "десять",
        "11": "одинадцать",
        "12": "двенадцать",
        "13": "тринадцать",
        "14": "четырнадцать",
        "15": "пятнадцать",
        "16": "шестнадцать",
        "17": "семнадцать",
        "18": "восемнадцать",
        "19": "девятнадцать",
        "20": "двадцать",
        "30": "тридцать",
        "40": "сорок",
        "50": "пятьдесят",
        "60": "шестьдесят",
        "70": "семьдесят",
        "80": "восемьдесят",
        "90": "девяносто",
        "100": "сто",
        "200": "двести",
        "300": "триста",
        "400": "четыреста",
        "500": "пятьсот",
        "600": "шестьсот",
        "700": "семьсот",
        "800": "восемьсот",
        "900": "девятьсот"
    },
    "alternativeBase": {
        "feminine": {
            "1": "одна",
            "2": "две"
        }
    },
    "units": [
        {
            "useBaseInstead": true,
            "useBaseException": []
        },
        {
            "singular": "тысяча",
            "few": "тысячи",
            "plural": "тысяч",
            "useAlternativeBase": "feminine",
            "useSingularEnding": true,
            "useFewEnding": true,
            "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
            "singular": "миллион",
            "few": "миллиона",
            "plural": "миллионов",
            "useSingularEnding": true,
            "useFewEnding": true,
            "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
            "singular": "миллиард",
            "few": "миллиарда",
            "plural": "миллиардов",
            "useSingularEnding": true,
            "useFewEnding": true,
            "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
            "singular": "триллион",
            "few": "триллиона",
            "plural": "триллионов",
            "useSingularEnding": true,
            "useFewEnding": true,
            "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
            "singular": "квадрильон",
            "few": "квадриллион",
            "plural": "квадрилон",
            "useSingularEnding": true,
            "useFewEnding": true,
            "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
            "singular": "квинтиллион",
            "few": "квинтиллиона",
            "plural": "квинтильонов",
            "useSingularEnding": true,
            "useFewEnding": true,
            "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
            "singular": "секстиллионов",
            "few": "секстильона",
            "plural": "секстиллионов",
            "useSingularEnding": true,
            "useFewEnding": true,
            "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
            "singular": "септиллион",
            "few": "септиллиона",
            "plural": "септиллионов",
            "useSingularEnding": true,
            "useFewEnding": true,
            "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
            "singular": "октиллион",
            "few": "октиллиона",
            "plural": "октиллионов",
            "useSingularEnding": true,
            "useFewEnding": true,
            "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
            "singular": "нониллион",
            "few": "нониллиона",
            "plural": "нониллионов",
            "useSingularEnding": true,
            "useFewEnding": true,
            "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
            "singular": "дециллион",
            "few": "дециллиона",
            "plural": "дециллионов",
            "useSingularEnding": true,
            "useFewEnding": true,
            "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
            "singular": "ундециллион",
            "few": "ундециллиона",
            "plural": "ундециллионив",
            "useSingularEnding": true,
            "useFewEnding": true,
            "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
            "singular": "дуодециллион",
            "few": "дуодециллиона",
            "plural": "дуодециллионив",
            "useSingularEnding": true,
            "useFewEnding": true,
            "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
            "singular": "тредециллион",
            "few": "тредециллиона",
            "plural": "тредециллионив",
            "useSingularEnding": true,
            "useFewEnding": true,
            "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
            "singular": "кватуордециллион",
            "few": "кватуордециллиона",
            "plural": "кватуордециллионив",
            "useSingularEnding": true,
            "useFewEnding": true,
            "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
            "singular": "квиндециллион",
            "few": "квиндециллиона",
            "plural": "квиндециллионив",
            "useSingularEnding": true,
            "useFewEnding": true,
            "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        }
    ],
    "unitExceptions": []
}
},{}],20:[function(require,module,exports){
module.exports={
  "useLongScale": false,
  "baseSeparator": " ",
  "unitSeparator": "",
  "base": {
    "0": "sıfır",
    "1": "bir",
    "2": "iki",
    "3": "üç",
    "4": "dört",
    "5": "beş",
    "6": "altı",
    "7": "yedi",
    "8": "sekiz",
    "9": "dokuz",
    "10": "on",
    "20": "yirmi",
    "30": "otuz",
    "40": "kırk",
    "50": "elli",
    "60": "altmış",
    "70": "yetmiş",
    "80": "seksen",
    "90": "doksan"
  },
  "units" : [
    { 
      "singular": "yüz",
      "avoidPrefixException": [1]
    },
    { 
      "singular": "bin",
      "avoidPrefixException": [1]
    },
    "milyon",
    "milyar",
    "trilyon",
    "katrilyon",
    "kentilyon",
    "sekstilyon",
    "septilyon",
    "oktilyon",
    "nonilyon",
    "desilyon",
    "andesilyon",
    "dodesilyon",
    "tredesilyon",
    "katordesilyon",
    "kendesilyon"
  ],
  "unitExceptions": []
}
},{}],21:[function(require,module,exports){
module.exports={
  "useLongScale": false,
  "baseSeparator": " ",
  "unitSeparator": "",
  "base": {
    "0": "нуль",
    "1": "один",
    "2": "два",
    "3": "три",
    "4": "чотири",
    "5": "п’ять",
    "6": "шість",
    "7": "сім",
    "8": "вісім",
    "9": "дев’ять",
    "10": "десять",
    "11": "одинадцять",
    "12": "дванадцять",
    "13": "тринадцять",
    "14": "чотирнадцять",
    "15": "п’ятнадцять",
    "16": "шістнадцять",
    "17": "сімнадцять",
    "18": "вісімнадцять",
    "19": "дев’ятнадцять",
    "20": "двадцять",
    "30": "тридцять",
    "40": "сорок",
    "50": "п’ятдесят",
    "60": "шістдесят",
    "70": "сімдесят",
    "80": "вісімдесят",
    "90": "дев’яносто",
    "100": "сто",
    "200": "двісті",
    "300": "триста",
    "400": "чотириста",
    "500": "п’ятсот",
    "600": "шістсот",
    "700": "сімсот",
    "800": "вісімсот",
    "900": "дев’ятсот"
  },
  "alternativeBase": {
    "feminine": {
      "1": "одна",
      "2": "дві"
    }
  },
  "units" : [
    {
      "useBaseInstead": true,
      "useBaseException": []
    },
    {
      "singular": "тисяча",
      "few": "тисячі",
      "plural": "тисяч",
      "useAlternativeBase": "feminine",
      "useSingularEnding": true,
      "useFewEnding": true,
      "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
    },
    {
      "singular": "мільйон",
      "few": "мільйони",
      "plural": "мільйонів",
      "useSingularEnding": true,
      "useFewEnding": true,
      "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
    },
    {
      "singular": "мільярд",
      "few": "мільярди",
      "plural": "мільярдів",
      "useSingularEnding": true,
      "useFewEnding": true,
      "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
    },
    {
      "singular": "трильйон",
      "few": "трильйони",
      "plural": "трильйонів",
      "useSingularEnding": true,
      "useFewEnding": true,
      "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
    },
    {
      "singular": "квадрильйон",
      "few": "квадрильйони",
      "plural": "квадрильйонів",
      "useSingularEnding": true,
      "useFewEnding": true,
      "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
    },
    {
      "singular": "квінтильйон",
      "few": "квінтильйони",
      "plural": "квінтильйонів",
      "useSingularEnding": true,
      "useFewEnding": true,
      "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
    },
    {
      "singular": "секстильйон",
      "few": "секстильйони",
      "plural": "секстильйонів",
      "useSingularEnding": true,
      "useFewEnding": true,
      "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
    },
    {
      "singular": "септілліон",
      "few": "септілліони",
      "plural": "септілліонів",
      "useSingularEnding": true,
      "useFewEnding": true,
      "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
    },
    {
      "singular": "октілліон",
      "few": "октілліони",
      "plural": "октілліонів",
      "useSingularEnding": true,
      "useFewEnding": true,
      "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
    },
    {
      "singular": "нонілліон",
      "few": "нонілліони",
      "plural": "нонілліонів",
      "useSingularEnding": true,
      "useFewEnding": true,
      "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
    },
    {
      "singular": "децілліон",
      "few": "децілліони",
      "plural": "децілліонів",
      "useSingularEnding": true,
      "useFewEnding": true,
      "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
    },
    {
      "singular": "ундецілліон",
      "few": "ундецілліони",
      "plural": "ундецілліонів",
      "useSingularEnding": true,
      "useFewEnding": true,
      "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
    },
    {
      "singular": "дуодецілліон",
      "few": "дуодецілліони",
      "plural": "дуодецілліонів",
      "useSingularEnding": true,
      "useFewEnding": true,
      "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
    },
    {
      "singular": "тредецілліон",
      "few": "тредецілліони",
      "plural": "тредецілліонів",
      "useSingularEnding": true,
      "useFewEnding": true,
      "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
    },
    {
      "singular": "кватуордецілліон",
      "few": "кватуордецілліони",
      "plural": "кватуордецілліонів",
      "useSingularEnding": true,
      "useFewEnding": true,
      "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
    },
    {
      "singular": "квіндецілліон",
      "few": "квіндецілліони",
      "plural": "квіндецілліонів",
      "useSingularEnding": true,
      "useFewEnding": true,
      "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
    }
  ],
  "unitExceptions": []
}

},{}],22:[function(require,module,exports){
module.exports={
  "useLongScale": false,
  "baseSeparator": " ",
  "unitSeparator": "và ",
  "base": {
    "0": "không",
    "1": "một",
    "2": "hai",
    "3": "ba",
    "4": "bốn",
    "5": "năm",
    "6": "sáu",
    "7": "bảy",
    "8": "tám",
    "9": "chín",
    "10": "mười",
    "15": "mười lăm",
    "20": "hai mươi",
    "21": "hai mươi mốt",
    "25": "hai mươi lăm",
    "30": "ba mươi",
    "31": "ba mươi mốt",
    "40": "bốn mươi",
    "41": "bốn mươi mốt",
    "45": "bốn mươi lăm",
    "50": "năm mươi",
    "51": "năm mươi mốt",
    "55": "năm mươi lăm",
    "60": "sáu mươi",
    "61": "sáu mươi mốt",
    "65": "sáu mươi lăm",
    "70": "bảy mươi",
    "71": "bảy mươi mốt",
    "75": "bảy mươi lăm",
    "80": "tám mươi",
    "81": "tám mươi mốt",
    "85": "tám mươi lăm",
    "90": "chín mươi",
    "91": "chín mươi mốt",
    "95": "chín mươi lăm"
  },
  "units" : [
    "trăm",
    "ngàn",
    "triệu",
    "tỷ",
    "nghìn tỷ"
  ],
  "unitExceptions": []
}
},{}],23:[function(require,module,exports){
"use strict";
exports = module.exports = writtenNumber;
var util = require("./util");

var languages = ["en", "es", "ar", "az", "pt", "fr", "eo", "it", "vi", "tr", "uk", "ru", "id", 'de'];
var i18n = {
  en: require("./i18n/en.json"),
  es: require("./i18n/es.json"),
  ar: require("./i18n/ar.json"),
  az: require("./i18n/az.json"),
  pt: require("./i18n/pt.json"),
  ptPT: require("./i18n/pt-PT.json"),
  fr: require("./i18n/fr.json"),
  eo: require("./i18n/eo.json"),
  it: require("./i18n/it.json"),
  vi: require("./i18n/vi.json"),
  tr: require("./i18n/tr.json"),
  hu: require("./i18n/hu.json"),
  enIndian: require("./i18n/en-indian.json"),
  uk: require("./i18n/uk.json"),
  ru: require("./i18n/ru.json"),
  id: require("./i18n/id.json"),
  de: require("./i18n/de.json"),
  ordinals: {
    es: require("./i18n/es-ordinal.json"),
    pt: require("./i18n/pt-ordinal.json"),
    it: require("./i18n/it-ordinal.json"),
    fr: require("./i18n/fr-ordinal.json"),
    de: require("./i18n/de-ordinal.json"),
  }
};
exports.i18n = i18n;

var shortScale = [100];
for (var i = 1; i <= 16; i++) {
  shortScale.push(Math.pow(10, i * 3));
}

var longScale = [100, 1000];
for (i = 1; i <= 15; i++) {
  longScale.push(Math.pow(10, i * 6));
}

writtenNumber.defaults = {
  noAnd: false,
  alternativeBase: null,
  lang: "en",
  asOrdinal: false
};

/**
 * Converts numbers to their written form.
 *
 * @param {Number} n The number to convert
 * @param {Object} [options] An object representation of the options
 * @return {String} writtenN The written form of `n`
 */

function writtenNumber(n, options) {
  options = options || {};
  options = util.defaults(options, writtenNumber.defaults);

  if (n < 0) {
    return "";
  }

  n = Math.round(+n);

  var language = typeof options.lang === "string"
    ? (options.asOrdinal ? i18n.ordinals : i18n)[options.lang]
    : options.lang;

  if (!language) {
    if (languages.indexOf(writtenNumber.defaults.lang) < 0) {
      writtenNumber.defaults.lang = "en";
    }

    language = i18n[writtenNumber.defaults.lang];
  }

  var scale = language.useLongScale ? longScale : shortScale;
  var units = language.units;
  var unit;

  if (!(units instanceof Array)) {
    var rawUnits = units;

    units = [];
    scale = Object.keys(rawUnits);

    for (var i in scale) {
      units.push(rawUnits[scale[i]]);
      scale[i] = Math.pow(10, parseInt(scale[i]));
    }
  }

  var baseCardinals = language.base;
  var alternativeBaseCardinals = options.alternativeBase
    ? language.alternativeBase[options.alternativeBase]
    : {};

  if (alternativeBaseCardinals[n]) return alternativeBaseCardinals[n];
  if (language.unitExceptions[n]) return language.unitExceptions[n];
  if (baseCardinals[n]) return baseCardinals[n];
  if (n < 100)
    return handleSmallerThan100(n, language, unit, baseCardinals, alternativeBaseCardinals, options);

  var m = n % 100;
  var ret = [];

  if (m) {
    if (
      options.noAnd &&
      !(language.andException && language.andException[10])
    ) {
      ret.push(writtenNumber(m, options));
    } else {
      ret.push(language.unitSeparator + writtenNumber(m, options));
    }
  }

  var firstSignificant;

  for (var i = 0, len = units.length; i < len; i++) {
    var r = Math.floor(n / scale[i]);
    var divideBy;

    if (i === len - 1) divideBy = 1000000;
    else divideBy = scale[i + 1] / scale[i];

    r %= divideBy;

    unit = units[i];

    if (!r) continue;
    firstSignificant = scale[i];

    if (unit.useBaseInstead) {
      var shouldUseBaseException =
        unit.useBaseException.indexOf(r) > -1 &&
        (unit.useBaseExceptionWhenNoTrailingNumbers
          ? i === 0 && ret.length
          : true);
      if (!shouldUseBaseException) {
        ret.push(alternativeBaseCardinals[r * scale[i]] || baseCardinals[r * scale[i]]);
      } else {
        ret.push(r > 1 && unit.plural ? unit.plural : unit.singular);
      }
      continue;
    }

    var str;
    if (typeof unit === "string") {
      str = unit;
    } else if (r === 1 || unit.useSingularEnding && r % 10 === 1
      && (!unit.avoidEndingRules || unit.avoidEndingRules.indexOf(r) < 0)) {
      str = unit.singular;
    } else if (unit.few && (r > 1 && r < 5 || unit.useFewEnding && r % 10 > 1 && r % 10 < 5
      && (!unit.avoidEndingRules || unit.avoidEndingRules.indexOf(r) < 0))) {
      str = unit.few;
    } else {
      str = unit.plural && (!unit.avoidInNumberPlural || !m)
        ? unit.plural
        : unit.singular;

      // Languages with dual
      str = (r === 2 && unit.dual) ? unit.dual : str;

      // "restrictedPlural" : use plural only for 3 to 10
      str = (r > 10 && unit.restrictedPlural) ? unit.singular : str;
    }

    if (
      unit.avoidPrefixException &&
      unit.avoidPrefixException.indexOf(r) > -1
    ) {
      ret.push(str);
      continue;
    }

    var exception = language.unitExceptions[r];
    var number =
      exception ||
      writtenNumber(
        r,
        util.defaults(
          {
            // Languages with and exceptions need to set `noAnd` to false
            noAnd: !((language.andException && language.andException[r]) ||
              unit.andException) && true,
            alternativeBase: unit.useAlternativeBase
          },
          options
        )
      );
    n -= r * scale[i];
    if (language.joinSeparator) {
      ret.push(number.replace(/ /g, '') + "" + str);
    } else {
      ret.push(number + " " + str);
    }
  }

  var firstSignificantN = firstSignificant * Math.floor(n / firstSignificant);
  var rest = n - firstSignificantN;

  if (
    language.andWhenTrailing &&
    firstSignificant &&
    0 < rest &&
    ret[0].indexOf(language.unitSeparator) !== 0
  ) {
    ret = [ret[0], language.unitSeparator.replace(/\s+$/, "")].concat(
      ret.slice(1)
    );
  }

  // Languages that have separators for all cardinals.
  if (language.allSeparator) {
    for (var j = 0; j < ret.length-1; j++) {
      ret[j] = language.allSeparator + ret[j];
    }
  }
  var result;
  if (language.joinSeparator) {
   return result = ret.reverse().join("").replace(/-/g, ' ');
  }
  
  result = ret.reverse().join(" ");
  return result;
}

function handleSmallerThan100(n, language, unit, baseCardinals, alternativeBaseCardinals, options) {
  var dec = Math.floor(n / 10) * 10;
  unit = n - dec;
  if (unit) {
    return (
      alternativeBaseCardinals[dec] || baseCardinals[dec] + language.baseSeparator + writtenNumber(unit, options)
    );
  }
  return alternativeBaseCardinals[dec] || baseCardinals[dec];
}

},{"./i18n/ar.json":1,"./i18n/az.json":2,"./i18n/de-ordinal.json":3,"./i18n/de.json":4,"./i18n/en-indian.json":5,"./i18n/en.json":6,"./i18n/eo.json":7,"./i18n/es-ordinal.json":8,"./i18n/es.json":9,"./i18n/fr-ordinal.json":10,"./i18n/fr.json":11,"./i18n/hu.json":12,"./i18n/id.json":13,"./i18n/it-ordinal.json":14,"./i18n/it.json":15,"./i18n/pt-PT.json":16,"./i18n/pt-ordinal.json":17,"./i18n/pt.json":18,"./i18n/ru.json":19,"./i18n/tr.json":20,"./i18n/uk.json":21,"./i18n/vi.json":22,"./util":24}],24:[function(require,module,exports){
"use strict";
/**
 * Merges a set of default keys with a target object
 * (Like _.defaults, but will also extend onto null/undefined)
 *
 * @param {Object} [target] The object to extend
 * @param {Object} defaults The object to default to
 * @return {Object} extendedTarget
 */

function defaults(target, defs) {
  if (target == null) target = {};
  var ret = {};
  var keys = Object.keys(defs);
  for (var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    ret[key] = target[key] || defs[key];
  }
  return ret;
}
exports.defaults = defaults;

},{}]},{},[23])(23)
});
