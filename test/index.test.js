"use strict" /* global describe, it, before */;
global._$jscoverage = {};
var should = require("should");
var writtenNumber = require("..");

describe("written-number", function () {

  describe("writtenNumber(n, { lang: 'zzz', ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "";
    });

    it("gets exposed", function () {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it("defaults to english on wrong language", function () {
      writtenNumber(1, { lang: 'zzz' }).should.equal("one");
    });
  });

  describe("writtenNumber(n, { lang: 'en', ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "en";
    });

    it("gets exposed", function () {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it("negative numbers return \"\"", function () {
      writtenNumber(-3).should.equal("");
      writtenNumber(-5).should.equal("");
    });

    it("doesn't blow up weirdly with invalid input", function () {
      writtenNumber("asdfasdfasdf").should.equal("");
      writtenNumber("0.as").should.equal("");
      writtenNumber("0.123").should.equal("zero");
      writtenNumber("0.8").should.equal("one");
      writtenNumber("2.8").should.equal("three");
      writtenNumber("asdf.8").should.equal("");
      writtenNumber("120391938123..").should.equal("");
      writtenNumber("1000000000.123").should.equal("one billion");
      writtenNumber("1/3").should.equal("");
      writtenNumber(1 / 3).should.equal("zero");
      writtenNumber("1/2").should.equal("");
      writtenNumber("1.123/2").should.equal("");
    });

    it("correctly converts numbers < 10", function () {
      writtenNumber(1000000000).should.equal("one billion");
      writtenNumber(3).should.equal("three");
      writtenNumber(8).should.equal("eight");
    });

    it("correctly converts numbers < 20", function () {
      writtenNumber(13).should.equal("thirteen");
      writtenNumber(19).should.equal("nineteen");
    });

    it("correctly converts numbers < 100", function () {
      writtenNumber(20).should.equal("twenty");
      writtenNumber(25).should.equal("twenty-five");
      writtenNumber(88).should.equal("eighty-eight");
      writtenNumber(73).should.equal("seventy-three");
    });

    it("correctly converts numbers < 1000", function () {
      writtenNumber(200).should.equal("two hundred");
      writtenNumber(242).should.equal("two hundred and forty-two");
      writtenNumber(1234).should.equal(
        "one thousand two hundred and thirty-four"
      );
      writtenNumber(4323).should.equal(
        "four thousand three hundred and twenty-three"
      );
    });

    it("correctly converts numbers > 1000", function () {
      writtenNumber(4323000).should.equal(
        "four million three hundred twenty-three thousand"
      );
      writtenNumber(4323055).should.equal(
        "four million three hundred twenty-three thousand and fifty-five"
      );
      writtenNumber(1570025).should.equal(
        "one million five hundred seventy thousand and twenty-five"
      );
    });

    it("correctly converts numbers > 1 000 000 000", function () {
      writtenNumber(1000000000).should.equal("one billion");
      writtenNumber(2580000000).should.equal(
        "two billion five hundred eighty million"
      );
      writtenNumber(1000000000000).should.equal("one trillion");
      writtenNumber(3627000000000).should.equal(
        "three trillion six hundred twenty-seven billion"
      );
    });
  });

  // DE cardinal numbers
  describe("writtenNumber(n, { lang: 'de', ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "de";
    });

    it("gets exposed", function () {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it("correctly converts numbers < 10", function () {
      writtenNumber(1).should.equal("eins");
      writtenNumber(3).should.equal("drei");
      writtenNumber(8).should.equal("acht");
    });

    it("correctly converts numbers < 20", function () {
      writtenNumber(13).should.equal("dreizehn");
      writtenNumber(16).should.equal("sechzehn");
      writtenNumber(19).should.equal("neunzehn");
    });

    it("correctly converts numbers < 100", function () {
      writtenNumber(20).should.equal("zwanzig");
      writtenNumber(25).should.equal("fünfundzwanzig");
      writtenNumber(73).should.equal("dreiundsiebzig");
      writtenNumber(88).should.equal("achtundachtzig");
    });

    it("correctly converts numbers < 1000", function () {
      writtenNumber(144).should.equal("einhundertvierundvierzig");
      writtenNumber(200).should.equal("zweihundert");
      writtenNumber(1234).should.equal("eintausendzweihundertvierunddreißig");
      writtenNumber(4323).should.equal("viertausenddreihundertdreiundzwanzig");
      writtenNumber(242).should.equal("zweihundertzweiundvierzig");
      writtenNumber(2100).should.equal("zweitausendeinhundert");
      writtenNumber(1100).should.equal("eintausendeinhundert");
      writtenNumber(1101).should.equal("eintausendeinhunderteins");
      writtenNumber(2020).should.equal("zweitausendzwanzig");
      writtenNumber(2000).should.equal("zweitausend");
      writtenNumber(2003).should.equal("zweitausenddrei");
      writtenNumber(2013).should.equal("zweitausenddreizehn");
    });

    it("correctly converts numbers > 1000", function () {
      writtenNumber(4323000).should.equal(
        "vier Millionen dreihundertdreiundzwanzigtausend"
      );
      writtenNumber(4323055).should.equal(
        "vier Millionen dreihundertdreiundzwanzigtausendfünfundfünfzig"
      );
    });
  });

  describe("writtenNumber(n, { lang: 'es', ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "es";
    });

    it("gets exposed", function () {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it("correctly converts numbers < 10", function () {
      writtenNumber(1).should.equal("uno");
      writtenNumber(3).should.equal("tres");
      writtenNumber(8).should.equal("ocho");
    });

    it("correctly converts numbers < 20", function () {
      writtenNumber(13).should.equal("trece");
      writtenNumber(16).should.equal("dieciséis");
      writtenNumber(19).should.equal("diecinueve");
    });

    it("correctly converts numbers < 100", function () {
      writtenNumber(20).should.equal("veinte");
      writtenNumber(25).should.equal("veinticinco");
      writtenNumber(88).should.equal("ochenta y ocho");
      writtenNumber(73).should.equal("setenta y tres");
    });

    it("correctly converts numbers < 1000", function () {
      writtenNumber(144).should.equal("ciento cuarenta y cuatro");
      writtenNumber(200).should.equal("doscientos");
      writtenNumber(1234).should.equal("mil doscientos treinta y cuatro");
      writtenNumber(4323).should.equal("cuatro mil trescientos veintitrés");
      writtenNumber(242).should.equal("doscientos cuarenta y dos");
      writtenNumber(2100).should.equal("dos mil cien");
      writtenNumber(1100).should.equal("mil cien");
      writtenNumber(1101).should.equal("mil ciento uno");
    });

    it("correctly converts numbers > 1000", function () {
      writtenNumber(4323000).should.equal(
        "cuatro millones trescientos veintitrés mil"
      );
      writtenNumber(4323055).should.equal(
        "cuatro millones trescientos veintitrés mil cincuenta y cinco"
      );
      writtenNumber(1570025).should.equal(
        "uno millón quinientos setenta mil veinticinco"
      );
    });

    it("correctly converts numbers > 1 000 000 000", function () {
      writtenNumber(1000000000).should.equal("mil millones");
      writtenNumber(2580000000).should.equal(
        "dos mil quinientos ochenta millones"
      );
      writtenNumber(1000000000000).should.equal("un billón");
      writtenNumber(3627000000000).should.equal(
        "tres billones seiscientos veintisiete mil millones"
      );
    });
  });

  // ES feminine numbers
  describe("writtenNumber(n, { lang: 'es' })", function () {
    before(function () {
      writtenNumber.defaults.lang = "es";
      writtenNumber.defaults.alternativeBase = "feminine";
    });

    after(function () {
      writtenNumber.defaults.alternativeBase = null;
    });

    it("correctly converts feminine numbers", function () {
      writtenNumber(1).should.equal("una");
      writtenNumber(200).should.equal("doscientas");
      writtenNumber(300).should.equal("trescientas");
      writtenNumber(400).should.equal("cuatrocientas");
      writtenNumber(500).should.equal("quinientas");
      writtenNumber(600).should.equal("seiscientas");
      writtenNumber(700).should.equal("setecientas");
      writtenNumber(800).should.equal("ochocientas");
      writtenNumber(900).should.equal("novecientas");
    });
  });

    // ES masculine numbers
    describe("writtenNumber(n, { lang: 'es' })", function () {
      before(function () {
        writtenNumber.defaults.lang = "es";
        writtenNumber.defaults.alternativeBase = "masculine";
      });
  
      after(function () {
        writtenNumber.defaults.alternativeBase = null;
      });
  
      it("correctly converts masculine form of uno", function () {
        writtenNumber(1).should.equal("un");
      });
    });

      // PT feminine numbers
      describe("writtenNumber(n, { lang: 'pt' })", function () {
        before(function () {
          writtenNumber.defaults.lang = "pt";
          writtenNumber.defaults.alternativeBase = "feminine";
        });
    
        after(function () {
          writtenNumber.defaults.alternativeBase = null;
        });
    
        it("correctly converts feminine forms", function () {
          writtenNumber(1).should.equal("uma");
          writtenNumber(2).should.equal("duas");
          writtenNumber(200).should.equal("duzentas");
          writtenNumber(300).should.equal("trezentas");
          writtenNumber(400).should.equal("quatrocentas");
          writtenNumber(500).should.equal("quinhentas");
          writtenNumber(600).should.equal("seiscentas");
          writtenNumber(700).should.equal("setecentas");
          writtenNumber(800).should.equal("oitocentas");
          writtenNumber(900).should.equal("novecentas");
        });
      });

  // ES ordinals
  describe("writtenNumber(n, { lang: 'es', asOrdinal: true, ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "es";
      writtenNumber.defaults.asOrdinal = true;
    });

    after(function () {
      writtenNumber.defaults.asOrdinal = false;
    });

    it("correctly converts ordinal numbers < 10", function () {
      writtenNumber(1).should.equal("primero");
      writtenNumber(3).should.equal("tercero");
      writtenNumber(8).should.equal("octavo");
    });

    it("correctly converts ordinal numbers < 20", function () {
      writtenNumber(13).should.equal("decimotercero");
      writtenNumber(19).should.equal("decimonoveno");
    });

    it("correctly converts ordinal numbers < 100", function () {
      writtenNumber(20).should.equal("vigésimo");
      writtenNumber(25).should.equal("vigésimo quinto");
      writtenNumber(56).should.equal("quincuagésimo sexto");
      writtenNumber(88).should.equal("octogésimo octavo");
    });

    it("correctly converts ordinal numbers <= 1000", function () {
      writtenNumber(100).should.equal("centésimo");
      writtenNumber(200).should.equal("ducentésimo");
      writtenNumber(900).should.equal("noningentésimo");
      writtenNumber(1000).should.equal("milésimo");
    });
  });

  // Italian ordinals
   describe("writtenNumber(n, { lang: 'it', asOrdinal: true, ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "it";
      writtenNumber.defaults.asOrdinal = true;
    });

    after(function () {
      writtenNumber.defaults.asOrdinal = false;
    });

    it("correctly converts IT ordinal numbers < 10", function () {
      writtenNumber(1).should.equal("primo");
      writtenNumber(3).should.equal("terzo");
      writtenNumber(8).should.equal("ottavo");
    });

    it("correctly converts IT ordinal numbers < 20", function () {
      writtenNumber(13).should.equal("tredicesimo");
      writtenNumber(19).should.equal("diciannovesimo");
    });

    it("correctly converts IT ordinal numbers < 100", function () {
      writtenNumber(20).should.equal("ventesimo");
      writtenNumber(25).should.equal("venticinquesimo");
      writtenNumber(56).should.equal("cinquantaseiesimo");
      writtenNumber(88).should.equal("ottantottesimo");
    });

    it("correctly converts IT ordinal numbers <= 1000", function () {
      writtenNumber(100).should.equal("centesimo");
      writtenNumber(200).should.equal("duecentesimo");
      writtenNumber(900).should.equal("novecentesimo");
      writtenNumber(1000).should.equal("millesimo");
    });
  });

  describe("writtenNumber(n, { lang: 'pt', ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "pt";
      writtenNumber.defaults.alternativeBase = null;
    });

    it("gets exposed", function () {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it("correctly converts numbers < 10", function () {
      writtenNumber(3).should.equal("três");
      writtenNumber(8).should.equal("oito");
    });

    it("correctly converts numbers < 20", function () {
      writtenNumber(13).should.equal("treze");
      writtenNumber(19).should.equal("dezenove");
    });

    it("correctly converts numbers < 100", function () {
      writtenNumber(20).should.equal("vinte");
      writtenNumber(25).should.equal("vinte e cinco");
      writtenNumber(88).should.equal("oitenta e oito");
      writtenNumber(73).should.equal("setenta e três");
    });

    it("correctly converts numbers < 1000", function () {
      writtenNumber(144).should.equal("cento e quarenta e quatro");
      writtenNumber(200).should.equal("duzentos");
      writtenNumber(1234).should.equal("mil duzentos e trinta e quatro");
      writtenNumber(4323).should.equal("quatro mil trezentos e vinte e três");
      writtenNumber(242).should.equal("duzentos e quarenta e dois");
    });

    it("correctly converts numbers > 1000", function () {
      writtenNumber(4323000).should.equal(
        "quatro milhões trezentos e vinte e três mil"
      );
      writtenNumber(4323055).should.equal(
        "quatro milhões trezentos e vinte e três mil e cinquenta e cinco"
      );
      writtenNumber(1570025).should.equal(
        "um milhão quinhentos e setenta mil e vinte e cinco"
      );
    });

    it("works for 14101 (https://github.com/yamadapc/js-written-number/issues/38)", function () {
      writtenNumber(14101).should.equal("catorze mil cento e um");
    });

    it("works for 14201 (https://github.com/yamadapc/js-written-number/issues/38)", function () {
      writtenNumber(14201).should.equal("catorze mil duzentos e um");
    });

    it("works for 1001000 (https://github.com/yamadapc/js-written-number/issues/38)", function () {
      writtenNumber(1001000).should.equal("um milhão e mil");
    });

    it("works for 1001200 (https://github.com/yamadapc/js-written-number/issues/38)", function () {
      writtenNumber(1001200).should.equal("um milhão mil e duzentos");
    });

    it("works for 14200 (https://github.com/yamadapc/js-written-number/issues/38)", function () {
      writtenNumber(14200).should.equal("catorze mil e duzentos");
    });

    it("works for 14100 (https://github.com/yamadapc/js-written-number/issues/38)", function () {
      writtenNumber(14100).should.equal("catorze mil e cem");
    });

    it("correctly converts numbers > 1 000 000 000", function () {
      writtenNumber(1000000000).should.equal("um bilhão");
      writtenNumber(2580000000).should.equal(
        "dois bilhões quinhentos e oitenta milhões"
      );
      writtenNumber(1000000000000000).should.equal("um quadrilhão");
      writtenNumber(3627000000000).should.equal(
        "três trilhões seiscentos e vinte e sete bilhões"
      );
    });
  });

  describe("writtenNumber(n, { lang: 'ptPT', ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "ptPT";
    });

    it("gets exposed", function () {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it("correctly converts numbers < 10", function () {
      writtenNumber(3).should.equal("três");
      writtenNumber(8).should.equal("oito");
    });

    it("correctly converts numbers < 20", function () {
      writtenNumber(13).should.equal("treze");
      writtenNumber(19).should.equal("dezanove");
    });

    it("correctly converts numbers < 100", function () {
      writtenNumber(20).should.equal("vinte");
      writtenNumber(25).should.equal("vinte e cinco");
      writtenNumber(88).should.equal("oitenta e oito");
      writtenNumber(73).should.equal("setenta e três");
    });

    it("correctly converts numbers < 1000", function () {
      writtenNumber(144).should.equal("cento e quarenta e quatro");
      writtenNumber(200).should.equal("duzentos");
      writtenNumber(1234).should.equal("mil duzentos e trinta e quatro");
      writtenNumber(4323).should.equal("quatro mil trezentos e vinte e três");
      writtenNumber(242).should.equal("duzentos e quarenta e dois");
    });

    it("correctly converts numbers > 1000", function () {
      writtenNumber(4323000).should.equal(
        "quatro milhões trezentos e vinte e três mil"
      );
      writtenNumber(4323055).should.equal(
        "quatro milhões trezentos e vinte e três mil e cinquenta e cinco"
      );
      writtenNumber(1570025).should.equal(
        "um milhão quinhentos e setenta mil e vinte e cinco"
      );
    });

    it("works for 14101 (https://github.com/yamadapc/js-written-number/issues/38)", function () {
      writtenNumber(14101).should.equal("catorze mil cento e um");
    });

    it("works for 14201 (https://github.com/yamadapc/js-written-number/issues/38)", function () {
      writtenNumber(14201).should.equal("catorze mil duzentos e um");
    });

    it("works for 1001000 (https://github.com/yamadapc/js-written-number/issues/38)", function () {
      writtenNumber(1001000).should.equal("um milhão e mil");
    });

    it("works for 1001200 (https://github.com/yamadapc/js-written-number/issues/38)", function () {
      writtenNumber(1001200).should.equal("um milhão mil e duzentos");
    });

    it("works for 14200 (https://github.com/yamadapc/js-written-number/issues/38)", function () {
      writtenNumber(14200).should.equal("catorze mil e duzentos");
    });

    it("works for 14100 (https://github.com/yamadapc/js-written-number/issues/38)", function () {
      writtenNumber(14100).should.equal("catorze mil e cem");
    });

    it("correctly converts numbers > 1 000 000 000", function () {
      writtenNumber(1000000000).should.equal("mil milhões");
      writtenNumber(2580000000).should.equal(
        "dois mil quinhentos e oitenta milhões"
      );
      writtenNumber(1000000000000000).should.equal("mil biliões");
      writtenNumber(3627000000000).should.equal(
        "três biliões seiscentos e vinte e sete mil milhões"
      );
    });
  });

  // PT ordinals
  describe("writtenNumber(n, { lang: 'pt', asOrdinal: true, ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "pt";
      writtenNumber.defaults.asOrdinal = true;
    });

    after(function () {
      writtenNumber.defaults.asOrdinal = false;
    });

    it("correctly converts ordinal numbers < 10", function () {
      writtenNumber(1).should.equal("primeiro");
      writtenNumber(3).should.equal("terceiro");
      writtenNumber(8).should.equal("oitavo");
    });

    it("correctly converts ordinal numbers < 20", function () {
      writtenNumber(13).should.equal("décimo terceiro");
      writtenNumber(19).should.equal("décimo nono");
    });

    it("correctly converts ordinal numbers < 100", function () {
      writtenNumber(20).should.equal("vigésimo");
      writtenNumber(25).should.equal("vigésimo quinto");
      writtenNumber(56).should.equal("quinquagésimo sexto");
      writtenNumber(88).should.equal("octogésimo oitavo");
    });

    it("correctly converts ordinal numbers <= 1000", function () {
      writtenNumber(100).should.equal("centésimo");
      writtenNumber(200).should.equal("ducentésimo");
      writtenNumber(900).should.equal("nongentésimo");
      writtenNumber(1000).should.equal("milésimo");
    });
  });

  // DE ordinals, masculine form
  describe("writtenNumber(n, { lang: 'de', asOrdinal: true, ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "de";
      writtenNumber.defaults.asOrdinal = true;
    });

    after(function () {
      writtenNumber.defaults.asOrdinal = false;
    });

    it("correctly converts ordinal numbers < 10", function () {
      writtenNumber(1).should.equal("erster");
      writtenNumber(3).should.equal("dritter");
      writtenNumber(8).should.equal("achter");
    });

    it("correctly converts ordinal numbers < 20", function () {
      writtenNumber(13).should.equal("dreizehnter");
      writtenNumber(19).should.equal("neunzehnter");
    });

    it("correctly converts ordinal numbers < 100", function () {
      writtenNumber(20).should.equal("zwanzigster");
      writtenNumber(25).should.equal("fünfundzwanzigster");
      writtenNumber(56).should.equal("sechsundfünfzigster");
      writtenNumber(88).should.equal("achtundachtzigster");
    });

    it("correctly converts ordinal numbers <= 1000", function () {
      writtenNumber(100).should.equal("hundertster");
      writtenNumber(200).should.equal("zweihundertster");
      writtenNumber(900).should.equal("neunhundertster");
      writtenNumber(1000).should.equal("tausendster");
    });
  });

   // DE ordinals, feminine form
   describe("writtenNumber(n, { lang: 'de', asOrdinal: true, ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "de";
      writtenNumber.defaults.asOrdinal = true;
      writtenNumber.defaults.alternativeBase = "feminine";
    });

    after(function () {
      writtenNumber.defaults.asOrdinal = false;
      writtenNumber.defaults.alternativeBase = null;
    });

    it("correctly converts ordinal numbers < 10", function () {
      writtenNumber(1).should.equal("erste");
      writtenNumber(3).should.equal("dritte");
      writtenNumber(8).should.equal("achte");
    });

    it("correctly converts ordinal numbers < 20", function () {
      writtenNumber(13).should.equal("dreizehnte");
      writtenNumber(19).should.equal("neunzehnte");
    });

    it("correctly converts ordinal numbers < 100", function () {
      writtenNumber(20).should.equal("zwanzigste");
      writtenNumber(25).should.equal("fünfundzwanzigste");
      writtenNumber(56).should.equal("sechsundfünfzigste");
      writtenNumber(88).should.equal("achtundachtzigste");
    });

    it("correctly converts ordinal numbers <= 1000", function () {
      writtenNumber(100).should.equal("hundertste");
      writtenNumber(200).should.equal("zweihundertste");
      writtenNumber(900).should.equal("neunhundertste");
      writtenNumber(1000).should.equal("tausendste");
    });
  });

    // DE ordinals, neuter form
    describe("writtenNumber(n, { lang: 'de', asOrdinal: true, ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "de";
      writtenNumber.defaults.asOrdinal = true;
      writtenNumber.defaults.alternativeBase = "neuter";
    });

    after(function () {
      writtenNumber.defaults.asOrdinal = false;
      writtenNumber.defaults.alternativeBase = null;
    });

    it("correctly converts ordinal numbers < 10", function () {
      writtenNumber(1).should.equal("erstes");
      writtenNumber(3).should.equal("drittes");
      writtenNumber(8).should.equal("achtes");
    });

    it("correctly converts ordinal numbers < 20", function () {
      writtenNumber(13).should.equal("dreizehntes");
      writtenNumber(19).should.equal("neunzehntes");
    });

    it("correctly converts ordinal numbers < 100", function () {
      writtenNumber(20).should.equal("zwanzigstes");
      writtenNumber(25).should.equal("fünfundzwanzigstes");
      writtenNumber(56).should.equal("sechsundfünfzigstes");
      writtenNumber(88).should.equal("achtundachtzigstes");
    });

    it("correctly converts ordinal numbers <= 1000", function () {
      writtenNumber(100).should.equal("hundertstes");
      writtenNumber(200).should.equal("zweihundertstes");
      writtenNumber(900).should.equal("neunhundertstes");
      writtenNumber(1000).should.equal("tausendstes");
    });
  });

  // FR ordinals
    describe("writtenNumber(n, { lang: 'fr', asOrdinal: true, ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "fr";
      writtenNumber.defaults.asOrdinal = true;
    });

    after(function () {
      writtenNumber.defaults.asOrdinal = false;
    });

    it("correctly converts ordinal numbers < 10", function () {
      writtenNumber(1).should.equal("premier");
      writtenNumber(3).should.equal("troisième");
      writtenNumber(8).should.equal("huitième");
    });

    it("correctly converts ordinal numbers < 20", function () {
      writtenNumber(13).should.equal("treizième");
      writtenNumber(19).should.equal("dix-neuvième");
    });

    it("correctly converts ordinal numbers < 100", function () {
      writtenNumber(20).should.equal("vingtième");
      writtenNumber(25).should.equal("vingt-cinquième");
      writtenNumber(50).should.equal("cinquantième");
      writtenNumber(56).should.equal("cinquante-sixième");
      writtenNumber(60).should.equal("soixantième");
      writtenNumber(61).should.equal("soixante et unième");
      writtenNumber(63).should.equal("soixante-troisième");
      writtenNumber(65).should.equal("soixante-cinquième");

      writtenNumber(70).should.equal("soixante-dixième");
      writtenNumber(71).should.equal("soixante et onzième");
      writtenNumber(73).should.equal("soixante-treizième");
      writtenNumber(75).should.equal("soixante-quinzième");

      writtenNumber(80).should.equal("quatre-vingtième");
      writtenNumber(81).should.equal("quatre-vingt-unième");
      writtenNumber(83).should.equal("quatre-vingt-troisième");
      writtenNumber(85).should.equal("quatre-vingt-cinquième");
      writtenNumber(88).should.equal("quatre-vingt-huitième");

      writtenNumber(90).should.equal("quatre-vingt-dixième");
      writtenNumber(91).should.equal("quatre-vingt-onzième");
      writtenNumber(93).should.equal("quatre-vingt-treizième");
      writtenNumber(95).should.equal("quatre-vingt-quinzième");
      writtenNumber(98).should.equal("quatre-vingt-dix-huitième");
    });

    it("correctly converts ordinal numbers <= 1000", function () {
      writtenNumber(100).should.equal("centième");
      writtenNumber(200).should.equal("deux centième");
      writtenNumber(900).should.equal("neuf centième");
      writtenNumber(1000).should.equal("millième");
    });
  });

  describe("writtenNumber(n, { lang: 'fr', ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "fr";
    });

    it("gets exposed", function () {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it("correctly converts numbers < 10", function () {
      writtenNumber(0).should.equal("zéro");
      writtenNumber(3).should.equal("trois");
      writtenNumber(8).should.equal("huit");
    });

    it("correctly converts numbers < 20", function () {
      writtenNumber(13).should.equal("treize");
      writtenNumber(19).should.equal("dix-neuf");
    });

    it("correctly converts numbers < 100", function () {
      writtenNumber(20).should.equal("vingt");
      writtenNumber(25).should.equal("vingt-cinq");
      writtenNumber(73).should.equal("soixante-treize");
      writtenNumber(80).should.equal("quatre-vingts");
      writtenNumber(88).should.equal("quatre-vingts-huit");
      writtenNumber(90).should.equal("quatre-vingt-dix");
      writtenNumber(91).should.equal("quatre-vingt-onze");
    });

    it("correctly converts numbers < 1000", function () {
      writtenNumber(100).should.equal("cent");
      writtenNumber(110).should.equal("cent dix");
      writtenNumber(200).should.equal("deux cents");
      writtenNumber(242).should.equal("deux cent quarante-deux");
    });

    it("correctly converts french numbers", function () {
      writtenNumber(2020).should.equal("deux mille vingt");
      writtenNumber(1999).should.equal("mille neuf cent quatre-vingt-dix-neuf");
      writtenNumber(1500).should.equal("mille cinq cents");
      writtenNumber(2008).should.equal("deux mille huit");
    });

    it("correctly converts numbers > 1000", function () {
      writtenNumber(1234).should.equal("mille deux cent trente-quatre");
      writtenNumber(4000).should.equal("quatre mille");
      writtenNumber(4323).should.equal("quatre mille trois cent vingt-trois");
      writtenNumber(1000000).should.equal("un million");
      writtenNumber(2000000).should.equal("deux millions");
      writtenNumber(2000001).should.equal("deux millions un");
      writtenNumber(4323000).should.equal(
        "quatre millions trois cent vingt-trois mille"
      );
      writtenNumber(4323055).should.equal(
        "quatre millions trois cent vingt-trois mille cinquante-cinq"
      );
      writtenNumber(1570025).should.equal(
        "un million cinq cent soixante-dix mille vingt-cinq"
      );
    });

    it("correctly converts numbers > 1 000 000 000", function () {
      writtenNumber(1000000000).should.equal("un milliard");
      writtenNumber(2580000000).should.equal(
        "deux milliards cinq cent quatre-vingts millions"
      );
      writtenNumber(1000000000000).should.equal("un billion");
      writtenNumber(3627000000000).should.equal(
        "trois billions six cent vingt-sept milliards"
      );
    });
  });

  describe("writtenNumber(n, { lang: 'it', ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "it";
      writtenNumber.defaults.asOrdinal = false;
    });

    it("gets exposed", function () {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it("correctly converts numbers < 10", function () {
      writtenNumber(3).should.equal("tre");
      writtenNumber(8).should.equal("otto");
    });

    it("correctly converts numbers < 20", function () {
      writtenNumber(13).should.equal("tredici");
      writtenNumber(19).should.equal("diciannove");
    });

    it("correctly converts numbers < 100", function () {
      writtenNumber(20).should.equal("venti");
      writtenNumber(23).should.equal("ventitré");
      writtenNumber(73).should.equal("settantatré");
      writtenNumber(80).should.equal("ottanta");
      writtenNumber(88).should.equal("ottantotto");
      writtenNumber(90).should.equal("novanta");
      writtenNumber(91).should.equal("novantuno");
    });

    it("correctly converts numbers < 1000", function () {
      writtenNumber(100).should.equal("cento");
      writtenNumber(101).should.equal("centuno");
      writtenNumber(201).should.equal("duecentuno");
      writtenNumber(242).should.equal("due cento quarantadue");
    });

    it("correctly converts numbers > 1000", function () {
      writtenNumber(1234).should.equal("mille due cento trentaquattro");
      writtenNumber(4000).should.equal("quattro mila");
      writtenNumber(4323).should.equal("quattro mila tre cento ventitré");
      writtenNumber(1000000).should.equal("un milione");
      writtenNumber(2000000).should.equal("due milioni");
      writtenNumber(2000001).should.equal("due milioni un");
      writtenNumber(4323000).should.equal(
        "quattro milioni tre cento ventitré mila"
      );
      writtenNumber(4323055).should.equal(
        "quattro milioni tre cento ventitré mila cinquantacinque"
      );
      writtenNumber(1570025).should.equal(
        "un milione cinque cento settanta mila venticinque"
      );
    });

    it("correctly converts numbers > 1 000 000 000", function () {
      writtenNumber(1000000000).should.equal("un miliardo");
      writtenNumber(2580000000).should.equal(
        "due miliardi cinque cento ottanta milioni"
      );
      writtenNumber(1000000000000).should.equal("un bilione");
      writtenNumber(3627000000000).should.equal(
        "tre bilioni sei cento ventisette miliardi"
      );
    });
  });

  describe("writtenNumber(n, { lang: 'enIndian', ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "enIndian";
    });

    it("gets exposed", function () {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it("doesn't blow up weirdly with invalid input", function () {
      writtenNumber("asdfasdfasdf").should.equal("");
      writtenNumber("0.as").should.equal("");
      writtenNumber("0.123").should.equal("zero");
      writtenNumber("0.8").should.equal("one");
      writtenNumber("2.8").should.equal("three");
      writtenNumber("asdf.8").should.equal("");
      writtenNumber("120391938123..").should.equal("");
      writtenNumber(1000000000).should.equal("one hundred crore");
      writtenNumber("1/3").should.equal("");
      writtenNumber(1 / 3).should.equal("zero");
      writtenNumber("1/2").should.equal("");
      writtenNumber("1.123/2").should.equal("");
    });

    it("correctly converts numbers < 10", function () {
      writtenNumber(1000000000).should.equal("one hundred crore");
      writtenNumber(3).should.equal("three");
      writtenNumber(8).should.equal("eight");
    });

    it("correctly converts numbers < 20", function () {
      writtenNumber(13).should.equal("thirteen");
      writtenNumber(19).should.equal("nineteen");
    });

    it("correctly converts numbers < 100", function () {
      writtenNumber(20).should.equal("twenty");
      writtenNumber(25).should.equal("twenty-five");
      writtenNumber(88).should.equal("eighty-eight");
      writtenNumber(73).should.equal("seventy-three");
    });

    it("correctly converts numbers < 1000", function () {
      writtenNumber(200).should.equal("two hundred");
      writtenNumber(242).should.equal("two hundred and forty-two");
      writtenNumber(1234).should.equal(
        "one thousand two hundred and thirty-four"
      );
      writtenNumber(4323).should.equal(
        "four thousand three hundred and twenty-three"
      );
    });

    it("correctly converts numbers > 1000", function () {
      writtenNumber(4323000).should.equal(
        "forty-three lakh twenty-three thousand"
      );
      writtenNumber(4323055).should.equal(
        "forty-three lakh twenty-three thousand and fifty-five"
      );
      writtenNumber(1570025).should.equal(
        "fifteen lakh seventy thousand and twenty-five"
      );
    });

    it("correctly converts numbers > 1 000 000 000", function () {
      writtenNumber(1000000000).should.equal("one hundred crore");
      writtenNumber(2580000000).should.equal("two hundred fifty-eight crore");
      writtenNumber(1000000000000).should.equal("one lakh crore");
      writtenNumber(3627000000000).should.equal(
        "three lakh sixty-two thousand seven hundred crore"
      );
    });
  });

  describe("writtenNumber(n, { lang: 'tr', ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "tr";
    });

    it("gets exposed", function () {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it("doesn't blow up weirdly with invalid input", function () {
      writtenNumber("asdfasdfasdf").should.equal("");
      writtenNumber("0.as").should.equal("");
      writtenNumber("0.123").should.equal("sıfır");
      writtenNumber("0.8").should.equal("bir");
      writtenNumber("2.8").should.equal("üç");
      writtenNumber("asdf.8").should.equal("");
      writtenNumber("120391938123..").should.equal("");
      writtenNumber("1/3").should.equal("");
      writtenNumber(1 / 3).should.equal("sıfır");
      writtenNumber("1/2").should.equal("");
      writtenNumber("1.123/2").should.equal("");
    });

    it("correctly converts numbers < 10", function () {
      writtenNumber(0).should.equal("sıfır");
      writtenNumber(3).should.equal("üç");
      writtenNumber(6).should.equal("altı");
    });

    it("correctly converts numbers < 20", function () {
      writtenNumber(13).should.equal("on üç");
      writtenNumber(19).should.equal("on dokuz");
    });

    it("correctly converts numbers < 100", function () {
      writtenNumber(20).should.equal("yirmi");
      writtenNumber(25).should.equal("yirmi beş");
      writtenNumber(40).should.equal("kırk");
      writtenNumber(88).should.equal("seksen sekiz");
      writtenNumber(73).should.equal("yetmiş üç");
    });

    it("correctly converts numbers < 10000", function () {
      writtenNumber(200).should.equal("iki yüz");
      writtenNumber(242).should.equal("iki yüz kırk iki");
      writtenNumber(1234).should.equal(
        "bin iki yüz otuz dört"
      );
      writtenNumber(4323).should.equal(
        "dört bin üç yüz yirmi üç"
      );
    });

    it("correctly converts numbers > 10000", function () {
      writtenNumber(4323000).should.equal(
        "dört milyon üç yüz yirmi üç bin"
      );
      writtenNumber(4323055).should.equal(
        "dört milyon üç yüz yirmi üç bin elli beş"
      );
      writtenNumber(1570025).should.equal(
        "bir milyon beş yüz yetmiş bin yirmi beş"
      );
    });

    it("correctly converts numbers > 1 000 000 000", function () {
      writtenNumber(1000000000).should.equal("bir milyar");
      writtenNumber(2580000000).should.equal(
        "iki milyar beş yüz seksen milyon"
      );
      writtenNumber(1000000000000).should.equal("bir trilyon");
      writtenNumber(3627000000000).should.equal(
        "üç trilyon altı yüz yirmi yedi milyar"
      );
    });
  });

  describe("writtenNumber(n, { lang: 'az', ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "az";
    });

    it("gets exposed", function () {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it("doesn't blow up weirdly with invalid input", function () {
      writtenNumber("asdfasdfasdf").should.equal("");
      writtenNumber("0.as").should.equal("");
      writtenNumber("0.123").should.equal("sıfır");
      writtenNumber("0.8").should.equal("bir");
      writtenNumber("2.8").should.equal("üç");
      writtenNumber("asdf.8").should.equal("");
      writtenNumber("120391938123..").should.equal("");
      writtenNumber("1/3").should.equal("");
      writtenNumber(1 / 3).should.equal("sıfır");
      writtenNumber("1/2").should.equal("");
      writtenNumber("1.123/2").should.equal("");
    });

    it("correctly converts numbers < 10", function () {
      writtenNumber(0).should.equal("sıfır");
      writtenNumber(3).should.equal("üç");
      writtenNumber(6).should.equal("altı");
    });

    it("correctly converts numbers < 20", function () {
      writtenNumber(13).should.equal("on üç");
      writtenNumber(19).should.equal("on doqquz");
    });

    it("correctly converts numbers < 100", function () {
      writtenNumber(20).should.equal("iyirmi");
      writtenNumber(25).should.equal("iyirmi beş");
      writtenNumber(40).should.equal("qırx");
      writtenNumber(88).should.equal("səksən səkkiz");
      writtenNumber(73).should.equal("yetmiş üç");
    });

    it("correctly converts numbers < 10000", function () {
      writtenNumber(200).should.equal("iki yüz");
      writtenNumber(242).should.equal("iki yüz qırx iki");
      writtenNumber(1234).should.equal(
        "min iki yüz otuz dörd"
      );
      writtenNumber(4323).should.equal(
        "dörd min üç yüz iyirmi üç"
      );
    });

    it("correctly converts numbers > 10000", function () {
      writtenNumber(4323000).should.equal(
        "dörd milyon üç yüz iyirmi üç min"
      );
      writtenNumber(4323055).should.equal(
        "dörd milyon üç yüz iyirmi üç min əlli beş"
      );
      writtenNumber(1570025).should.equal(
        "bir milyon beş yüz yetmiş min iyirmi beş"
      );
    });

    it("correctly converts numbers > 1 000 000 000", function () {
      writtenNumber(1000000000).should.equal("bir milyard");
      writtenNumber(2580000000).should.equal(
        "iki milyard beş yüz səksən milyon"
      );
      writtenNumber(1000000000000).should.equal("bir trilyon");
      writtenNumber(3627000000000).should.equal(
        "üç trilyon altı yüz iyirmi yeddi milyard"
      );
    });
  });

  describe("writtenNumber(n, { lang: 'uk', ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "uk";
    });

    it("gets exposed", function () {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });
    it("correctly converts numbers < 10", function () {
      writtenNumber(0).should.equal("нуль");
      writtenNumber(1).should.equal("один");
      writtenNumber(2).should.equal("два");
      writtenNumber(3).should.equal("три");
      writtenNumber(9).should.equal("дев’ять");
    });

    it("correctly converts numbers < 20", function () {
      writtenNumber(11).should.equal("одинадцять");
      writtenNumber(13).should.equal("тринадцять");
      writtenNumber(19).should.equal("дев’ятнадцять");
    });

    it("correctly converts numbers < 100", function () {
      writtenNumber(20).should.equal("двадцять");
      writtenNumber(21).should.equal("двадцять один");
      writtenNumber(25).should.equal("двадцять п’ять");
      writtenNumber(73).should.equal("сімдесят три");
      writtenNumber(80).should.equal("вісімдесят");
      writtenNumber(88).should.equal("вісімдесят вісім");
    });

    it("correctly converts numbers < 1000", function () {
      writtenNumber(100).should.equal("сто");
      writtenNumber(101).should.equal("сто один");
      writtenNumber(110).should.equal("сто десять");
      writtenNumber(111).should.equal("сто одинадцять");
      writtenNumber(146).should.equal("сто сорок шість");
      writtenNumber(200).should.equal("двісті");
      writtenNumber(242).should.equal("двісті сорок два");
    });

    it("correctly converts numbers > 1000", function () {
      writtenNumber(1000).should.equal("одна тисяча");
      writtenNumber(2000).should.equal("дві тисячі");
      writtenNumber(3000).should.equal("три тисячі");
      writtenNumber(4000).should.equal("чотири тисячі");
      writtenNumber(5000).should.equal("п’ять тисяч");
      writtenNumber(1234).should.equal("одна тисяча двісті тридцять чотири");
      writtenNumber(4323).should.equal("чотири тисячі триста двадцять три");
      writtenNumber(1000000).should.equal("один мільйон");
      writtenNumber(2000000).should.equal("два мільйони");
      writtenNumber(2000001).should.equal("два мільйони один");
      writtenNumber(5000000).should.equal("п’ять мільйонів");
      writtenNumber(21000000).should.equal(
        "двадцять один мільйон"
      );
      writtenNumber(111000000).should.equal(
        "сто одинадцять мільйонів"
      );
      writtenNumber(214567891).should.equal(
        "двісті чотирнадцять мільйонів п’ятсот шістдесят сім тисяч вісімсот дев’яносто один"
      );
    });

    it("correctly converts numbers > 1 000 000 000", function () {
      writtenNumber(1000000000).should.equal("один мільярд");
      writtenNumber(2580000000).should.equal(
        "два мільярди п’ятсот вісімдесят мільйонів"
      );
      writtenNumber(1000000000000).should.equal("один трильйон");
      writtenNumber(3627000000000).should.equal(
        "три трильйони шістсот двадцять сім мільярдів"
      );
    });
  });

  describe("writtenNumber(n, { lang: 'ar', ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "ar";
    });

    it("gets exposed", function () {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it("doesn't blow up weirdly with invalid input", function () {
      writtenNumber("asdfasdfasdf").should.equal("");
      writtenNumber("0.as").should.equal("");
      writtenNumber("0.123").should.equal("صفر");
      writtenNumber("0.8").should.equal("واحد");
      writtenNumber("2.8").should.equal("ثلاثة");
      writtenNumber("asdf.8").should.equal("");
      writtenNumber("120391938123..").should.equal("");
      writtenNumber("1/3").should.equal("");
      writtenNumber(1 / 3).should.equal("صفر");
      writtenNumber("1/2").should.equal("");
      writtenNumber("1.123/2").should.equal("");
    });

    it("correctly converts numbers < 10", function () {
      writtenNumber(0).should.equal("صفر");
      writtenNumber(3).should.equal("ثلاثة");
      writtenNumber(6).should.equal("ستة");
    });

    it("correctly converts numbers < 20", function () {
      writtenNumber(11).should.equal("أحد عشر");
      writtenNumber(13).should.equal("ثلاثة عشر");
      writtenNumber(19).should.equal("تسعة عشر");
    });

    it("correctly converts numbers < 100", function () {
      writtenNumber(20).should.equal("عشرون");
      writtenNumber(25).should.equal("خمسة وعشرون");
      writtenNumber(40).should.equal("أربعون");
      writtenNumber(88).should.equal("ثمانية وثمانون");
      writtenNumber(73).should.equal("ثلاثة وسبعون");
      writtenNumber(99).should.equal("تسعة وتسعون");
    });

    it("correctly converts numbers < 10000", function () {
      writtenNumber(200).should.equal("مائتان");
      writtenNumber(310).should.equal("ثلاثمائة وعشرة");
      writtenNumber(242).should.equal("مائتان واثنان وأربعون");
      writtenNumber(1234).should.equal("ألف ومائتان وأربعة وثلاثون");
      writtenNumber(3000).should.equal("ثلاثة آلاف");
      writtenNumber(4323).should.equal("أربعة آلاف وثلاثمائة وثلاثة وعشرون");
    });

    it("correctly converts numbers > 10000", function () {
      writtenNumber(10000).should.equal("عشرة آلاف");
      writtenNumber(11000).should.equal("أحد عشر ألف");
      writtenNumber(4323000).should.equal("أربعة ملايين وثلاثمائة وثلاثة وعشرون ألف");
      writtenNumber(4323055).should.equal("أربعة ملايين وثلاثمائة وثلاثة وعشرون ألف وخمسة وخمسون");
      writtenNumber(1570025).should.equal("مليون وخمسمائة وسبعون ألف وخمسة وعشرون");
    });

    it("correctly converts numbers > 1 000 000 000", function () {
      writtenNumber(1000000000).should.equal("مليار");
      writtenNumber(2580000000).should.equal("ملياران وخمسمائة وثمانون مليون");
      writtenNumber(1000000000000).should.equal("تريليون");
      writtenNumber(3627000000000).should.equal("ثلاثة تريليون وستمائة وسبعة وعشرون مليار");
    });
  });

  describe("writtenNumber(n, { lang: 'id', ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "id";
    });

    it("correctly converts numbers < 10", function () {
      writtenNumber(1).should.equal("satu");
      writtenNumber(3).should.equal("tiga");
      writtenNumber(8).should.equal("delapan");
    });

    it("correctly converts numbers < 20", function () {
      writtenNumber(11).should.equal("sebelas");
      writtenNumber(13).should.equal("tiga belas");
      writtenNumber(19).should.equal("sembilan belas");
    });

    it("correctly converts numbers < 100", function () {
      writtenNumber(20).should.equal("dua puluh");
      writtenNumber(25).should.equal("dua puluh lima");
      writtenNumber(88).should.equal("delapan puluh delapan");
      writtenNumber(73).should.equal("tujuh puluh tiga");
    });

    it("correctly converts numbers < 1000", function () {
      writtenNumber(144).should.equal("seratus empat puluh empat");
      writtenNumber(200).should.equal("dua ratus");
      writtenNumber(242).should.equal("dua ratus empat puluh dua");
    });

    it("correctly converts numbers > 1000", function () {
      writtenNumber(1111).should.equal("seribu seratus sebelas");
      writtenNumber(1234).should.equal("seribu dua ratus tiga puluh empat");
      writtenNumber(111234).should.equal(
        "seratus sebelas ribu dua ratus tiga puluh empat"
      );
      writtenNumber(432055).should.equal(
        "empat ratus tiga puluh dua ribu lima puluh lima"
      );
      writtenNumber(1111234).should.equal(
        "satu juta seratus sebelas ribu dua ratus tiga puluh empat"
      );

    });

    it("correctly converts numbers > 1 000 000 000", function () {
      writtenNumber(1000000000).should.equal("satu miliar");
      writtenNumber(2580000000).should.equal(
        "dua miliar lima ratus delapan puluh juta"
      );
      writtenNumber(1000000000000).should.equal("satu triliun");
      writtenNumber(3627000000000).should.equal(
        "tiga triliun enam ratus dua puluh tujuh miliar"
      );
    });
  });

  describe("writtenNumber(n, { lang: 'ru', ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "ru";
    });

    it("gets exposed", function () {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it("negative numbers return \"\"", function () {
      writtenNumber(-3).should.equal("");
      writtenNumber(-5).should.equal("");
    });

    it("doesn't blow up weirdly with invalid input", function () {
      writtenNumber("asdfasdfasdf").should.equal("");
      writtenNumber("0.as").should.equal("");
      writtenNumber("0.123").should.equal("ноль");
      writtenNumber("0.8").should.equal("один");
      writtenNumber("2.8").should.equal("три");
      writtenNumber("asdf.8").should.equal("");
      writtenNumber("120391938123..").should.equal("");
      writtenNumber("1000000000.123").should.equal("один миллиард");
      writtenNumber("1/3").should.equal("");
      writtenNumber(1 / 3).should.equal("ноль");
      writtenNumber("1/2").should.equal("");
      writtenNumber("1.123/2").should.equal("");
    });

    it("correctly converts numbers < 10", function () {
      writtenNumber(1000000000).should.equal("один миллиард");
      writtenNumber(3).should.equal("три");
      writtenNumber(8).should.equal("восемь");
    });

    it("correctly converts numbers < 20", function () {
      writtenNumber(13).should.equal("тринадцать");
      writtenNumber(19).should.equal("девятнадцать");
    });

    it("correctly converts numbers < 100", function () {
      writtenNumber(20).should.equal("двадцать");
      writtenNumber(25).should.equal("двадцать пять");
      writtenNumber(88).should.equal("восемьдесят восемь");
      writtenNumber(73).should.equal("семьдесят три");
    });

    it("correctly converts numbers < 1000", function () {
      writtenNumber(200).should.equal("двести");
      writtenNumber(242).should.equal("двести сорок два");
      writtenNumber(1234).should.equal(
        "одна тысяча двести тридцать четыре"
      );
      writtenNumber(4323).should.equal(
        "четыре тысячи триста двадцать три"
      );
    });

    it("correctly converts numbers > 1000", function () {
      writtenNumber(4323000).should.equal(
        "четыре миллиона триста двадцать три тысячи"
      );
      writtenNumber(4323055).should.equal(
        "четыре миллиона триста двадцать три тысячи пятьдесят пять"
      );
      writtenNumber(1570025).should.equal(
        "один миллион пятьсот семьдесят тысяч двадцать пять"
      );
    });

    it("correctly converts numbers > 1 000 000 000", function () {
      writtenNumber(1000000000).should.equal("один миллиард");
      writtenNumber(2580000000).should.equal(
        "два миллиарда пятьсот восемьдесят миллионов"
      );
      writtenNumber(1000000000000).should.equal("один триллион");
      writtenNumber(3627000000000).should.equal(
        "три триллиона шестьсот двадцать семь миллиардов"
      );
    });
  });
});
