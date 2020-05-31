let CreditCard = {
  visa: {
    length: [13, 16, 19],
    prefixes: [4],
  },
  mastercard: {
    length: [16],
    prefixes: [
      23,
      24,
      25,
      26,
      51,
      52,
      53,
      54,
      55,
      223,
      224,
      225,
      226,
      227,
      228,
      229,
      271,
      2221,
      2222,
      2223,
      2224,
      2225,
      2226,
      2227,
      2228,
      2229,
      2720,
    ],
  },
  amex: {
    length: [15],
    prefixes: [34, 37],
  },
  diners: {
    length: [14],
    prefixes: [36, 38, 30, 300, 301, 302, 303, 304, 305],
  },
  jcb: {
    length: [15, 16],
    prefixes: [35, 3528, 3529, 353, 354, 355, 356, 357, 358],
  },
  maestro: {
    length: [12, 13, 14, 15, 16, 17, 18, 19],
    prefixes: [
      50,
      56,
      57,
      58,
      59,
      64,
      500,
      502,
      503,
      504,
      505,
      506,
      507,
      508,
      509,
      602,
      603,
      604,
      605,
      679,
      670,
      671,
      672,
      673,
      674,
      675,
      677,
      639,
      5010,
      5011,
      5012,
      5013,
      5014,
      5015,
      5016,
      5017,
      5018,
      6010,
      6012,
      6013,
      6014,
      6015,
      6016,
      6017,
      6018,
      6019,
      6060,
      6220,
      6271,
      6272,
      6273,
      6274,
      6275,
      6276,
      6277,
      6278,
      6279,
      6280,
      6281,
      6294,
      6301,
      6361,
      6760,
      6761,
      6762,
      6763,
      6764,
      6765,
      6766,
      6768,
      6769,
      6771,
      62183,
      62186,
      62188,
      62198,
      62199,
      63609,
      636392,
      636708,
      637043,
      637102,
      637118,
      637187,
      637529,
      622110,
      627089,
      630490,
      633857,
      616788,
      62709601,
    ],
  },
  unionpay: {
    length: [16, 17, 18, 19],
    prefixes: [
      62,
      620,
      623,
      624,
      625,
      626,
      6210,
      6212,
      6213,
      6214,
      6215,
      6216,
      6217,
      6223,
      6224,
      6225,
      6226,
      6227,
      6228,
      6229,
      6282,
      6283,
      6284,
      6291,
      6292,
      69075,
      62213,
      62214,
      62215,
      62216,
      62217,
      62218,
      62220,
      62221,
      62222,
      62223,
      62224,
      62225,
      62226,
      62227,
      62228,
      62229,
      62702,
      62704,
      62706,
      62707,
      621977,
      622126,
      622127,
      622128,
      622129,
      632062,
      685800,
    ],
  },
  discover: {
    length: [16, 19],
    prefixes: [6011, 644, 645, 646, 647, 648, 649, 65],
  },
};

export default CreditCard;
