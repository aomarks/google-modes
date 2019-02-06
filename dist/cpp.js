(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^static_assert(?![a-zA-Z¡-￿_0-9])/, /^namespace(?![a-zA-Z¡-￿_0-9])/, /^throw(?![a-zA-Z¡-￿_0-9])/, /^try(?![a-zA-Z¡-￿_0-9])/, /^asm(?![a-zA-Z¡-￿_0-9])/, /^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^goto(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^(?:struct|union)(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^(?:_[A-Z0-9_]+(?![a-zA-Z¡-￿_0-9])|[A-Z][A-Z0-9_]+(?![a-zA-Z¡-￿_0-9]))/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\{)/, /^typename(?![a-zA-Z¡-￿_0-9])/, /^alignas(?![a-zA-Z¡-￿_0-9])/, /^(?:0x[0-9a-fA-F\']+|0b[01\']+|(?:[0-9][0-9\']*(?:\.[0-9\']*)?|\.[0-9][0-9\']*)(?:[eE]\-?[0-9\']*)?)(?:[Ll]+|[Uu][lL]*|F|f)?/, /^class(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^(?:final|explicit)(?![a-zA-Z¡-￿_0-9])/, /^using(?![a-zA-Z¡-￿_0-9])/, /^export(?![a-zA-Z¡-￿_0-9])/, /^template(?![a-zA-Z¡-￿_0-9])/, /^enum(?![a-zA-Z¡-￿_0-9])/, /^auto(?![a-zA-Z¡-￿_0-9])/, /^(?:inline|virtual|explicit|friend|constexpr|mutable|thread_local)(?![a-zA-Z¡-￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z¡-￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z¡-￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z¡-￿_0-9])/, /^(?:int|float|double|char|short)(?![a-zA-Z¡-￿_0-9])/, /^operator(?![a-zA-Z¡-￿_0-9])/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^new(?![a-zA-Z¡-￿_0-9])/, /^delete(?![a-zA-Z¡-￿_0-9])/, /^\~?[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^catch(?![a-zA-Z¡-￿_0-9])/, /^noexcept(?![a-zA-Z¡-￿_0-9])/, /^(?:override|final|new)(?![a-zA-Z¡-￿_0-9])/, /^else(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-)/, /^(?:\-\>|(?!\.\.)\.)/, [1, "\n", "\t", " "], /^[a-zA-Z0-9¡-￿_\.]+/, /^\@[a-zA-Z0-9¡-￿_]+/, [0, /^(?!\*\/|\{?\@[a-zA-Z0-9¡-￿_])/, /^[^]/], /^(?:\.\.\.)?/, /^virtual(?![a-zA-Z¡-￿_0-9])/, /^(?:private|public|protected)(?![a-zA-Z¡-￿_0-9])/, /^this(?![a-zA-Z¡-￿_0-9])/, /^(?:dynamic|static|const|reinterpret)_cast(?![a-zA-Z¡-￿_0-9])/, /^(?:nullptr(?![a-zA-Z¡-￿_0-9])|(?:true|false|null)(?![a-zA-Z¡-￿_0-9]))/, /^(?:sizeof|alignof)(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^(?:\(\)|\[\])/, /^(?:\[\])?/, /^(?!\>)/, /^(?:\.\.\.|\(|\=|\>|\,)/, /^(?:\*|\&\&|\&|\.\.\.)/];
  var nodes = [
    [2, 6, 2, {"name":"preprocessorLine","token":"meta"},
     0, 2],
    [/^[^]/, 0],
    [1, 9, 3],
    [2, 12, 4, {"name":"Statement"}],
    [0, 2,
     0, 1],
    [3, "keyword", e[27], -1,
     3, "keyword", e[12], -1,
     3, "keyword", e[8], -1,
     3, "keyword", e[42], -1,
     3, "keyword", e[5], -1,
     3, "keyword", e[6], -1,
     3, "keyword", e[7], -1,
     3, "keyword", e[10], -1,
     3, "keyword", e[11], -1,
     3, "keyword", e[14], -1,
     3, "keyword", e[15], -1,
     3, "keyword", e[9], -1,
     3, "keyword", e[13], -1,
     3, "keyword", e[55], -1,
     3, "keyword", e[28], -1,
     3, "keyword", e[29], -1,
     3, "keyword", e[30], -1,
     3, "type", e[32], -1,
     3, "type", e[33], -1,
     3, "keyword", e[31], -1,
     3, "atom", e[54], -1,
     3, "meta", e[16], -1,
     1, 107, -1,
     3, "number", e[20], -1,
     2, 114, -1, {"name":"string","token":"string"},
     2, 119, -1, {"name":"prefixOp","token":"operator"},
     3, "operator", e[43], -1,
     3, "operator", e[35], -1,
     2, 120, -1, {"name":"comment","token":"comment"},
     3, "keyword", e[1], -1,
     3, "keyword", e[18], -1,
     3, "keyword", e[36], -1,
     3, "keyword", e[37], -1,
     3, "keyword", e[52], -1,
     3, "keyword", e[3], -1,
     3, "keyword", e[39], -1,
     3, "keyword", e[2], -1,
     3, "keyword", e[40], -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[25], -1,
     3, "keyword", e[26], -1,
     3, "keyword", e[21], -1,
     3, "keyword", e[50], -1,
     3, "keyword", e[51], -1,
     3, "keyword", e[34], -1,
     3, "keyword", e[24], -1,
     3, "keyword", e[19], -1,
     3, "keyword", e[0], -1,
     3, "keyword", e[53], -1,
     3, "keyword", e[41], -1,
     3, "keyword", e[23], -1,
     /^[^]/, -1],
    ["#", 7],
    [2, 120, 7, {"name":"comment","token":"comment"},
     "\\", 8,
     /^./, 7,
     0, -1],
    [/^[^]/, 7],
    [/^[ \t]/, 9,
     "\n", 10,
     2, 120, 9, {"name":"comment","token":"comment"},
     0, -1],
    [/^[ \t]*/, 11],
    [2, 6, 9, {"name":"preprocessorLine","token":"meta"},
     0, 9],
    [1, 125, -1,
     1, 142, -1,
     3, "keyword", e[0], 13,
     3, "keyword", e[1], 17,
     3, "keyword", e[2], 25,
     3, "keyword", e[3], 29,
     3, "keyword", e[4], 33,
     1, 157, -1,
     2, 170, -1, {"name":"Template"},
     [7, "constructorAhead"], 39,
     1, 179, -1,
     3, "keyword", e[5], 42,
     3, "keyword", e[6], 43,
     3, "keyword", e[7], 44,
     3, "keyword", e[8], 68,
     3, "keyword", e[9], 73,
     2, 188, -1, {"name":"Block"},
     3, "keyword", e[10], 77,
     3, "keyword", e[11], 79,
     3, "keyword", e[12], 83,
     3, "keyword", e[13], 87,
     3, "keyword", e[14], 93,
     3, "keyword", e[15], 94,
     [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 192]], 93,
     3, "meta", e[16], 97,
     2, 193, 103, {"name":"DeclType"},
     ";", -1,
     1, 210, 105],
    [1, 9, 14],
    [2, 215, 15, {"name":"ArgList"}],
    [1, 9, 16],
    [";", -1],
    [1, 9, 18],
    [1, 220, 19,
     0, 19],
    [1, 9, 20],
    [3, "operator", "=", 21,
     2, 225, -1, {"name":"NamespaceBlock"}],
    [1, 9, 22],
    [1, 107, 23],
    [1, 9, 24],
    [";", -1],
    [1, 9, 26],
    [1, 210, 27],
    [1, 9, 28],
    [";", -1],
    [1, 9, 30],
    [2, 188, 31, {"name":"Block"}],
    [1, 9, 32],
    [2, 229, -1, {"name":"Catch"}],
    [1, 9, 34],
    ["{", 35],
    [1, 9, 36],
    [2, 114, 37, {"name":"string","token":"string"}],
    [1, 9, 38],
    ["}", -1],
    [1, 220, 40],
    [1, 9, 41],
    [2, 241, -1, {"name":"FunctionDef"}],
    [1, 9, 45],
    [1, 9, 46],
    [1, 9, 47],
    ["(", 48],
    [2, 274, 49, {"name":"CondExpr"}],
    [2, 12, 50, {"name":"Statement"}],
    [1, 9, 51],
    [1, 9, 52],
    [1, 9, 53],
    [2, 12, 54, {"name":"Statement"}],
    [2, 12, -1, {"name":"Statement"}],
    [3, "keyword", e[6], 55],
    [1, 9, 56],
    [1, 9, 57],
    [1, 210, 58,
     0, 58],
    [2, 274, 59, {"name":"CondExpr"}],
    [1, 9, 60],
    [1, 9, 61],
    [";", 62],
    [";", -1],
    [1, 9, 63],
    [1, 210, 64,
     0, 64],
    [1, 9, 65],
    [")", 66],
    [1, 9, 67],
    [2, 12, -1, {"name":"Statement"}],
    [1, 9, 69],
    [2, 274, 70, {"name":"CondExpr"}],
    [1, 9, 71],
    [2, 12, 72, {"name":"Statement"}],
    [2, 282, -1, {"name":"Alternative"}],
    [1, 9, 74],
    [2, 274, 75, {"name":"CondExpr"}],
    [1, 9, 76],
    [2, 188, -1, {"name":"Block"}],
    [1, 9, 78],
    [";", -1],
    [1, 9, 80],
    [e[22], 81],
    [1, 9, 82],
    [";", -1],
    [1, 9, 84],
    [1, 210, 85,
     0, 85],
    [1, 9, 86],
    [";", -1],
    [1, 9, 88],
    [1, 220, 89,
     0, 89],
    [1, 9, 90],
    [2, 286, 91, {"name":"BlockOf"},
     0, 91],
    [1, 9, 92],
    [";", -1],
    [1, 9, 95],
    [1, 9, 96],
    [":", -1],
    [1, 210, 93],
    [1, 9, 98],
    [2, 296, 99, {"name":"ParenTokens"},
     0, 99],
    [1, 9, 100],
    [2, 188, -1, {"name":"Block"},
     0, 101],
    [1, 300, 102,
     0, -1],
    [1, 9, 101],
    [1, 9, 104],
    [1, 323, -1],
    [1, 9, 106],
    [";", -1],
    [0, 108,
     3, "type", e[17], -1,
     2, 338, 113, {"name":"unqualifiedVariableName","token":"variable"}],
    [1, 339, 109],
    [0, 108,
     3, "type qualified", e[17], 110,
     2, 346, 110, {"name":"qualifiedVariableName","token":"qualified"}],
    [2, 347, 111, {"name":"TemplateArgs"},
     0, -1],
    [/^(?=\:\:)/, 112,
     0, -1],
    [1, 107, -1],
    [2, 347, -1, {"name":"TemplateArgs"},
     0, -1],
    [/^R\"(?:(?!\().)*\(/, 115,
     /^(?:(?:L|u8?|U)(?=[\'\"]))?/, 116],
    [[0, [7, "rawStringContinues"], /^[^]/], 115,
     "\"", -1],
    [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
     "\"", 117],
    ["\\", 118,
     [0, /^(?!\")/, /^[^]/], 117,
     "\"", -1],
    [/^[^]/, 117],
    [3, "keyword", e[18], -1,
     /^(?:\+\+?|\-\-?|\!|\~|\&|\*)/, -1],
    [/^\/\*\*(?!\/)/, 121,
     "/*", 124,
     /^\/\/.*/, -1],
    [e[48], 122,
     0, 123],
    [0, 121,
     0, 121],
    [2, 352, 123, {"name":"doccomment.tagGroup"},
     "*/", -1],
    [[0, /^(?!\*\/)/, /^[^]/], 124,
     "*/", -1],
    [3, "keyword", e[19], 127,
     [0, [5, 363], "["], 128],
    [0, 125,
     0, -1],
    [1, 9, 129],
    [1, 9, 130],
    ["(", 131],
    ["[", 132],
    [1, 9, 133],
    [1, 9, 134],
    [3, "number", e[20], 135],
    [1, 367, 136],
    [1, 9, 137],
    [1, 9, 138],
    [")", 139],
    ["]", 140],
    [1, 9, 126],
    [1, 9, 141],
    ["]", 139],
    [3, "keyword", e[21], 143,
     3, "keyword", e[13], 143],
    [1, 9, 144],
    [1, 125, 145,
     0, 145],
    [1, 9, 146],
    [0, 147,
     3, "type def", e[22], 150],
    [1, 389, 148],
    [1, 9, 149],
    [0, 147,
     3, "type qualified", e[22], 150],
    [1, 9, 151],
    [3, "keyword", e[23], 152,
     ":", 153,
     0, 155],
    [1, 9, 151],
    [1, 9, 154],
    [1, 396, 155],
    [1, 9, 156],
    [";", -1,
     2, 410, -1, {"name":"ClassBody"}],
    [3, "keyword", e[24], 158],
    [1, 9, 159],
    [3, "keyword", e[18], 160,
     3, "keyword", e[1], 161,
     0, 161],
    [1, 9, 162],
    [1, 9, 163],
    [1, 414, 164],
    [1, 107, 164],
    [1, 9, 165],
    [3, "operator", "=", 166,
     0, 168],
    [1, 9, 167],
    [1, 414, 168],
    [1, 9, 169],
    [";", -1],
    [3, "keyword", e[25], 171,
     0, 171],
    [1, 9, 172],
    [3, "keyword", e[26], 173],
    [1, 9, 174],
    [2, 427, 175, {"name":"TemplateParams"}],
    [1, 9, 176],
    [1, 9, 177],
    [1, 9, 178],
    [2, 12, -1, {"name":"Statement"}],
    [3, "keyword", e[27], 180],
    [1, 9, 181],
    [3, "keyword", e[21], 182,
     3, "keyword", /^struct(?![a-zA-Z¡-￿_0-9])/, 182,
     0, 182],
    [1, 9, 183],
    [1, 125, 184,
     0, 184],
    [1, 9, 185],
    [3, "type def", e[22], 186,
     0, 186],
    [1, 9, 187],
    [2, 432, -1, {"name":"BlockOf"},
     0, -1],
    ["{", 189],
    [1, 9, 190],
    [2, 12, 191, {"name":"Statement"},
     "}", -1],
    [1, 9, 190],
    [e[45], 192,
     /^\:(?!\:)/, -1],
    [0, 194,
     0, 195,
     3, "keyword", e[28], 206,
     [5, 450], 207],
    [3, "keyword", e[29], 196,
     3, "keyword", e[30], 196,
     3, "keyword", e[31], 196],
    [3, "type", e[32], 197],
    [1, 9, 198],
    [1, 9, 199],
    [0, 194,
     3, "keyword", e[28], 200,
     0, 201,
     1, 455, 200],
    [0, 195,
     3, "type", e[33], 200,
     0, 200],
    [1, 9, 202],
    [3, "type", e[32], 203],
    [1, 460, 204,
     0, -1],
    [0, 201,
     1, 9, 205,
     0, 200],
    [1, 9, 202],
    [3, "type", e[33], 200],
    [1, 9, 208],
    [1, 455, 206],
    [1, 460, 209,
     0, -1],
    [1, 9, 208],
    [1, 467, 211,
     1, 484, 212],
    [1, 9, 210],
    [1, 9, 213],
    [1, 300, 214,
     0, -1],
    [1, 9, 213],
    ["(", 216],
    [1, 9, 217],
    [1, 519, 218],
    [1, 9, 219],
    [")", -1],
    [3, "keyword", e[34], 221,
     0, 223,
     3, "def", e[38], -1],
    [3, "operator", "->*", -1,
     ",", -1,
     3, "operator", e[35], -1,
     2, 119, -1, {"name":"prefixOp","token":"operator"},
     e[57], -1,
     3, "keyword", e[36], 222,
     3, "keyword", e[37], 222],
    [e[58], -1],
    [1, 529, 224],
    [0, 223,
     3, "qualified def", e[38], -1],
    ["{", 226],
    [1, 9, 227],
    [2, 12, 228, {"name":"Statement"},
     "}", -1],
    [1, 9, 227],
    [3, "keyword", e[39], 230,
     0, -1],
    [1, 9, 231],
    ["(", 232],
    [1, 9, 233],
    [1, 414, 234],
    [1, 9, 235],
    [1, 536, 236,
     0, 236],
    [1, 9, 237],
    [")", 238],
    [1, 9, 239],
    [2, 188, 240, {"name":"Block"}],
    [1, 9, 229],
    [2, 548, 242, {"name":"ParamList"}],
    [1, 9, 243],
    [3, "keyword", e[31], 244,
     /^(?:\&\&|\&)?/, 245],
    [1, 9, 243],
    [1, 9, 246],
    [3, "keyword", e[40], 247,
     3, "keyword", e[2], 248,
     0, 259],
    [1, 9, 249],
    [1, 9, 250],
    ["(", 251,
     0, 259],
    ["(", 252],
    [1, 9, 253],
    [1, 9, 254],
    [1, 210, 255],
    [1, 553, 256],
    [1, 9, 257],
    [1, 9, 258],
    [")", 259],
    [")", 259],
    [1, 9, 260],
    [1, 125, 261,
     0, 261],
    [1, 9, 262],
    ["->", 263,
     0, 265],
    [1, 9, 264],
    [1, 414, 265],
    [1, 9, 266],
    [3, "keyword", e[41], 267,
     2, 559, 268, {"name":"InitializerList"},
     0, 268],
    [1, 9, 266],
    [1, 9, 269],
    [";", -1,
     2, 188, -1, {"name":"Block"},
     3, "operator", "=", 270],
    [1, 9, 271],
    [3, "keyword", e[14], 272,
     3, "keyword", e[37], 272],
    [1, 9, 273],
    [";", -1],
    ["(", 275],
    [1, 9, 276],
    [[6, 562], 277,
     1, 210, 280,
     0, 280],
    [2, 193, 278, {"name":"DeclType"}],
    [1, 9, 279],
    [1, 323, 280],
    [1, 9, 281],
    [")", -1],
    [1, 9, 283],
    [3, "keyword", e[42], 284,
     0, -1],
    [1, 9, 285],
    [2, 12, -1, {"name":"Statement"}],
    ["{", 287],
    [1, 9, 288],
    [1, 565, 289,
     0, 294],
    [1, 9, 290],
    [";", 291,
     0, 294],
    [1, 9, 292],
    [1, 565, 293,
     0, 293],
    [1, 9, 290],
    [1, 9, 295],
    ["}", -1],
    ["(", 297],
    [1, 9, 298],
    [1, 576, 299,
     ")", -1],
    [1, 9, 298],
    [2, 581, -1, {"name":"BlockOf"},
     2, 215, 301, {"name":"ArgList"},
     e[44], 303,
     2, 215, -1, {"name":"ArgList"},
     "[", 309,
     3, "operator", e[43], -1,
     e[44], 313,
     3, "operator", e[35], 315,
     "?", 317],
    [1, 9, 302],
    [2, 188, -1, {"name":"Block"},
     0, -1],
    [1, 9, 304],
    [/^\*?/, 305],
    [1, 9, 306],
    [2, 591, 307, {"name":"fieldName","token":"property"}],
    [1, 9, 308],
    [2, 347, -1, {"name":"TemplateArgs"},
     0, -1],
    [1, 9, 310],
    [1, 210, 311],
    [1, 9, 312],
    ["]", -1],
    [1, 9, 314],
    [2, 591, -1, {"name":"fieldName","token":"property"}],
    [1, 9, 316],
    [1, 210, -1,
     0, -1],
    [1, 9, 318],
    [1, 210, 319],
    [1, 9, 320],
    [":", 321],
    [1, 9, 322],
    [1, 210, -1],
    [1, 536, 324],
    [1, 9, 325],
    [3, "meta", e[16], 326,
     [5, 592], 327,
     1, 596, 328,
     0, 328],
    [1, 9, 329],
    [2, 241, -1, {"name":"FunctionDef"}],
    [1, 9, 330],
    [2, 296, 331, {"name":"ParenTokens"},
     0, 331],
    [",", 332,
     ";", -1],
    [1, 9, 333],
    [1, 9, 334],
    [/^\;?/, -1],
    [1, 220, 335],
    [1, 9, 336],
    [1, 596, 337,
     0, 337],
    [1, 9, 330],
    [3, "callee", e[56], -1,
     e[22], -1],
    ["::", 344,
     [5, 599], 340],
    [3, "variable qualifier", e[22], 341],
    [2, 347, 342, {"name":"TemplateArgs"},
     0, 342],
    [1, 9, 343],
    ["::", 344],
    [1, 9, 345],
    [/^\*?/, -1],
    [2, 338, -1, {"name":"unqualifiedVariableName","token":"variable"}],
    ["<", 348],
    [1, 9, 349],
    [1, 603, 350],
    [1, 9, 351],
    [">", -1],
    [3, "tag", /^\@param(?![a-zA-Z0-9¡-￿_])/, 353,
     3, "tag", /^\@(?:throws|exception)(?![a-zA-Z0-9¡-￿_])/, 354,
     3, "tag", e[47], 361,
     "{", 355],
    [e[45], 353,
     3, "def", e[46], 361,
     "<", 356,
     0, 361],
    [e[45], 354,
     3, "type", e[46], 361,
     0, 361],
    [3, "tag", e[47], 357],
    [3, "type def", /^[a-zA-Z0-9¡-￿_]+/, 358],
    [/^[\t ]*/, 359],
    [">", 361],
    [1, 635, 360],
    ["}", 361],
    [e[48], 362,
     0, -1],
    [0, 361,
     0, 361],
    ["[", 364],
    [1, 9, 365],
    [" ", 366,
     "[", -1],
    [1, 9, 365],
    [1, 639, 368,
     3, "meta", e[22], 369,
     0, -1],
    [1, 9, 367],
    [1, 9, 370],
    ["(", 371,
     0, 372],
    [1, 9, 373],
    [1, 9, 374],
    [1, 646, 375,
     ")", 372],
    [e[49], 376],
    [1, 9, 373],
    [1, 9, 377],
    [",", 378,
     0, -1],
    [1, 9, 379],
    [1, 639, 380,
     3, "meta", e[22], 381],
    [1, 9, 379],
    [1, 9, 382],
    ["(", 383,
     0, 384],
    [1, 9, 385],
    [1, 9, 386],
    [1, 646, 387,
     ")", 384],
    [e[49], 388],
    [1, 9, 385],
    [1, 9, 377],
    ["::", 394,
     [5, 656], 390],
    [3, "type qualifier", e[22], 391],
    [2, 347, 392, {"name":"TemplateArgs"},
     0, 392],
    [1, 9, 393],
    ["::", 394],
    [1, 9, 395],
    [/^\*?/, -1],
    [3, "keyword", e[50], 397,
     0, 397,
     0, -1],
    [1, 9, 398],
    [3, "keyword", e[51], 399,
     0, 399],
    [1, 9, 400],
    [1, 414, 401],
    [1, 9, 402],
    [",", 403,
     0, -1],
    [1, 9, 404],
    [3, "keyword", e[50], 405,
     0, 405],
    [1, 9, 406],
    [3, "keyword", e[51], 407,
     0, 407],
    [1, 9, 408],
    [1, 414, 409],
    [1, 9, 402],
    ["{", 411],
    [1, 9, 412],
    [2, 660, 413, {"name":"ClassItem"},
     "}", -1],
    [1, 9, 412],
    [3, "keyword", e[18], 415,
     0, 417],
    [1, 9, 416],
    [1, 414, -1],
    [3, "keyword", e[29], 418,
     3, "keyword", e[30], 418,
     3, "keyword", e[31], 418,
     3, "keyword", e[13], 419,
     0, 419],
    [1, 9, 417],
    [1, 9, 420],
    [3, "keyword", e[28], 421,
     0, 422,
     1, 455, 421],
    [1, 9, 423],
    [3, "type", e[32], 424],
    [1, 460, 425,
     0, -1],
    [0, 422,
     1, 9, 426,
     0, 421],
    [1, 9, 423],
    [3, "type", e[33], 421],
    ["<", 428],
    [1, 9, 429],
    [1, 675, 430],
    [1, 9, 431],
    [">", -1],
    ["{", 433],
    [1, 9, 434],
    [1, 701, 435,
     0, 448],
    [1, 9, 436],
    [3, "operator", "=", 437,
     0, 438],
    [1, 9, 439],
    [1, 9, 440],
    [1, 210, 438],
    [",", 441,
     0, 448],
    [1, 9, 442],
    [1, 701, 443,
     0, 444],
    [1, 9, 445],
    [1, 9, 440],
    [3, "operator", "=", 446,
     0, 444],
    [1, 9, 447],
    [1, 210, 444],
    [1, 9, 449],
    ["}", -1],
    [/^(?!(?:new|delete)(?![a-zA-Z¡-￿_0-9]))/, 451],
    [1, 455, 452],
    [1, 9, 453],
    [1, 460, 454,
     /^[a-zA-Z¡-￿_]/, -1],
    [1, 9, 453],
    [3, "keyword", e[18], 456,
     0, 457],
    [1, 9, 457],
    [0, 458,
     3, "type", e[22], -1],
    [1, 389, 459],
    [0, 458,
     3, "type qualified", e[22], -1],
    [2, 347, -1, {"name":"TemplateArgs"},
     "::", 461,
     1, 125, -1,
     "[", 463,
     /^[\*\&]/, -1,
     3, "keyword", e[31], -1],
    [1, 9, 462],
    [3, "type qualified", e[22], -1],
    [1, 9, 464],
    [1, 210, 465,
     0, 465],
    [1, 9, 466],
    ["]", -1],
    [3, "keyword", e[37], 468,
     3, "keyword", e[36], 472,
     2, 119, -1, {"name":"prefixOp","token":"operator"}],
    [1, 9, 469],
    ["[", 470,
     0, -1],
    [1, 9, 471],
    ["]", -1],
    [1, 9, 473],
    ["[", 474,
     0, 475],
    [1, 9, 476],
    [1, 9, 477],
    ["]", 475],
    ["(", 478,
     0, 479],
    [1, 9, 480],
    [1, 9, 481],
    [1, 210, 482],
    [1, 125, -1,
     0, -1],
    [1, 9, 483],
    [")", 479],
    [3, "keyword", e[52], -1,
     "[", 485,
     3, "keyword", e[53], 492,
     2, 704, -1, {"name":"ArrayInitializer"},
     2, 709, 504, {"name":"ParenExpr"},
     3, "atom", e[54], -1,
     3, "number", e[20], -1,
     2, 114, -1, {"name":"string","token":"string"},
     2, 581, -1, {"name":"BlockOf"},
     3, "keyword", e[55], 507,
     1, 107, -1],
    [1, 9, 486],
    [/^(?!\[)/, 487],
    [1, 714, 488],
    [1, 9, 489],
    ["]", 490],
    [1, 9, 491],
    [2, 241, -1, {"name":"FunctionDef"},
     2, 188, -1, {"name":"Block"}],
    [1, 9, 493],
    ["<", 494],
    [1, 9, 495],
    [1, 414, 496],
    [1, 9, 497],
    [">", 498],
    [1, 9, 499],
    ["(", 500],
    [1, 9, 501],
    [1, 210, 502],
    [1, 9, 503],
    [")", -1],
    [1, 9, 505],
    [/^(?![\[\(\-\+])/, 506,
     0, -1],
    [1, 210, -1],
    [1, 9, 508],
    ["(", 509,
     e[49], 510],
    [1, 9, 511],
    [1, 9, 512],
    [1, 414, 513],
    [1, 210, 514],
    [1, 9, 515],
    [1, 9, 516],
    [")", 514],
    [3, "meta", e[16], 517],
    [1, 9, 518],
    [2, 296, -1, {"name":"ParenTokens"},
     0, -1],
    [1, 210, 520,
     0, -1],
    [1, 9, 521],
    [e[49], 522],
    [1, 9, 523],
    [",", 524,
     0, -1],
    [1, 9, 525],
    [1, 210, 526],
    [1, 9, 527],
    [e[49], 528],
    [1, 9, 523],
    ["::", 534,
     [5, 724], 530],
    [3, "qualifier def", e[22], 531],
    [2, 347, 532, {"name":"TemplateArgs"},
     0, 532],
    [1, 9, 533],
    ["::", 534],
    [1, 9, 535],
    [/^\*?/, -1],
    [0, 537,
     "(", 544],
    [e[61], 538,
     1, 220, 539],
    [1, 9, 537],
    [1, 9, 540],
    ["[", 541,
     0, -1],
    [1, 9, 542],
    ["]", 543],
    [1, 9, 540],
    [1, 9, 545],
    [1, 536, 546],
    [1, 9, 547],
    [")", -1],
    ["(", 549],
    [1, 9, 550],
    [1, 728, 551],
    [1, 9, 552],
    [")", -1],
    [1, 414, 554,
     0, -1],
    [1, 9, 555],
    [",", 556,
     0, -1],
    [1, 9, 557],
    [1, 414, 558],
    [1, 9, 555],
    [":", 560],
    [1, 9, 561],
    [1, 750, -1],
    [e[22], 563],
    [1, 9, 564],
    ["&&", -1],
    [1, 414, 566],
    [1, 9, 567],
    [2, 591, 568, {"name":"fieldName","token":"property"},
     0, 568],
    [1, 9, 569],
    [":", 570,
     "[", 571,
     0, -1],
    [1, 9, 572],
    [1, 9, 573],
    [3, "number", e[20], -1],
    [1, 210, 574,
     0, 574],
    [1, 9, 575],
    ["]", -1],
    [2, 296, -1, {"name":"ParenTokens"},
     2, 756, -1, {"name":"BracketTokens"},
     2, 760, -1, {"name":"BraceTokens"},
     3, "keyword", /^(?:auto|double|int|struct|break|else|long|switch|case|enum|register|typedef|char|extern|return|union|const|float|short|unsigned|continue|for|signed|void|default|goto|sizeof|volatile|do|if|static|while|asm|alignof)(?![a-zA-Z¡-￿_0-9])/, -1,
     3, "keyword", /^(?:alignas|asm|bool|catch|class|compl|concept|constexpr|const_cast|decltype|delete|dynamic_cast|explicit|export|friend|import|module|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|reinterpret_cast|requires|static_assert|static_cast|synchronized|template|this|throw|try|typedef|typeid|using|virtual|wchar_t)(?![a-zA-Z¡-￿_0-9])/, -1,
     3, "atom", e[54], -1,
     3, "number", e[20], -1,
     2, 114, -1, {"name":"string","token":"string"},
     3, "operator", e[35], -1,
     2, 119, -1, {"name":"prefixOp","token":"operator"},
     0, 577,
     2, 338, -1, {"name":"unqualifiedVariableName","token":"variable"},
     /^(?![\)\]\}])./, -1],
    ["::", 578,
     /^(?=[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*\:\:)/, 579],
    [0, 577,
     2, 346, -1, {"name":"qualifiedVariableName","token":"qualified"}],
    [3, "variable qualifier", e[22], 580],
    ["::", 578],
    ["{", 582],
    [1, 9, 583],
    [1, 210, 584,
     0, 589],
    [1, 9, 585],
    [",", 586,
     0, 589],
    [1, 9, 587],
    [1, 210, 588,
     0, 588],
    [1, 9, 585],
    [1, 9, 590],
    ["}", -1],
    [3, "callee", e[56], -1,
     e[22], -1],
    ["(", 593],
    [1, 9, 594],
    [")", -1,
     3, "keyword", e[29], -1,
     3, "keyword", e[30], -1,
     3, "keyword", e[31], -1,
     3, "type", e[32], -1,
     3, "keyword", e[28], -1,
     [5, 450], 595],
    [1, 455, -1],
    [3, "operator", "=", 597,
     2, 581, -1, {"name":"BlockOf"},
     2, 215, -1, {"name":"ArgList"}],
    [1, 9, 598],
    [1, 210, -1],
    [3, "variable qualifier", e[22], 600],
    [1, 764, 601,
     0, 601],
    [1, 9, 602],
    ["::", -1],
    [3, "keyword", e[26], 604,
     0, 605,
     0, 606,
     0, -1],
    [1, 9, 607],
    [1, 9, 608],
    [3, "keyword", e[29], 609,
     3, "keyword", e[30], 609,
     [5, 769], 610,
     1, 772, 611],
    [2, 347, 605, {"name":"TemplateArgs"}],
    [3, "keyword", e[21], 612,
     3, "keyword", e[18], 612],
    [1, 9, 606],
    [1, 414, 613],
    [1, 9, 614],
    [1, 9, 615],
    [1, 9, 616],
    [e[49], 617],
    [1, 414, 617],
    [2, 548, 611, {"name":"ParamList"},
     1, 596, 611,
     0, 611],
    [1, 9, 618],
    [",", 619,
     0, -1],
    [1, 9, 620],
    [3, "keyword", e[26], 621,
     0, 622,
     0, 623],
    [1, 9, 624],
    [1, 9, 625],
    [3, "keyword", e[29], 626,
     3, "keyword", e[30], 626,
     [5, 778], 627,
     1, 772, 628],
    [2, 347, 622, {"name":"TemplateArgs"}],
    [3, "keyword", e[21], 629,
     3, "keyword", e[18], 629],
    [1, 9, 623],
    [1, 414, 630],
    [1, 9, 631],
    [1, 9, 632],
    [1, 9, 633],
    [e[49], 634],
    [1, 414, 634],
    [2, 548, 628, {"name":"ParamList"},
     1, 596, 628,
     0, 628],
    [1, 9, 618],
    [3, "attribute", "{", 636,
     3, "attribute", /^(?:(?!\{|\}|\*\/).)+/, 635,
     "\n", 637,
     0, -1],
    [1, 635, 638],
    [/^[\t ]*(?:\*(?!\/)[\t ]*)?/, 635],
    [/^(?=\*\/)/, 635,
     3, "attribute", "}", 635],
    ["::", 644,
     [5, 781], 640],
    [3, "meta", e[22], 641],
    [2, 347, 642, {"name":"TemplateArgs"},
     0, 642],
    [1, 9, 643],
    ["::", 644],
    [1, 9, 645],
    [/^\*?/, -1],
    [3, "number", e[20], -1,
     2, 114, -1, {"name":"string","token":"string"},
     e[22], -1,
     3, "operator", e[35], -1,
     ",", -1,
     "(", 647,
     "[", 650,
     "{", 653],
    [1, 9, 648],
    [1, 646, 649,
     ")", -1],
    [1, 9, 648],
    [1, 9, 651],
    [1, 646, 652,
     "]", -1],
    [1, 9, 651],
    [1, 9, 654],
    [1, 646, 655,
     "}", -1],
    [1, 9, 654],
    [3, "type qualifier", e[22], 657],
    [1, 764, 658,
     0, 658],
    [1, 9, 659],
    ["::", -1],
    [3, "keyword", e[51], 661,
     2, 170, -1, {"name":"Template"},
     1, 157, -1,
     3, "keyword", e[0], 663,
     1, 179, 667,
     3, "meta", e[16], 669,
     1, 142, 673,
     2, 785, -1, {"name":"ObjectMember"}],
    [1, 9, 662],
    [":", -1],
    [1, 9, 664],
    [2, 215, 665, {"name":"ArgList"}],
    [1, 9, 666],
    [";", -1],
    [1, 9, 668],
    [/^\;?/, -1],
    [1, 9, 670],
    [2, 296, 671, {"name":"ParenTokens"},
     0, 671],
    [1, 9, 672],
    [/^\;?/, -1],
    [1, 9, 674],
    [/^\;?/, -1],
    [1, 808, 676,
     1, 414, 677,
     0, -1],
    [1, 9, 678],
    [1, 9, 679],
    [",", 680,
     0, -1],
    ["...", 681,
     1, 536, 682],
    [1, 9, 683],
    [1, 9, 679],
    [1, 9, 684],
    [1, 808, 685,
     1, 414, 686],
    [2, 548, 687, {"name":"ParamList"},
     0, 687],
    [1, 9, 678],
    [1, 9, 688],
    [1, 9, 689],
    ["...", 690,
     1, 536, 691],
    [3, "keyword", e[29], 692,
     3, "keyword", e[30], 692,
     3, "keyword", e[31], 692,
     3, "operator", "=", 693,
     0, 676],
    [1, 9, 688],
    [1, 9, 694],
    [1, 9, 689],
    [1, 9, 695],
    [2, 548, 696, {"name":"ParamList"},
     0, 696],
    [1, 772, 676],
    [1, 9, 697],
    [3, "keyword", e[29], 698,
     3, "keyword", e[30], 698,
     3, "keyword", e[31], 698,
     3, "operator", "=", 699,
     0, 685],
    [1, 9, 697],
    [1, 9, 700],
    [1, 772, 685],
    [3, "keyword", e[34], 702,
     3, "def property", e[22], -1],
    [3, "operator", "->*", -1,
     ",", -1,
     3, "operator", e[35], -1,
     2, 119, -1, {"name":"prefixOp","token":"operator"},
     e[57], -1,
     3, "keyword", e[36], 703,
     3, "keyword", e[37], 703],
    [e[58], -1],
    ["{", 705],
    [1, 9, 706],
    [1, 819, 707],
    [1, 9, 708],
    ["}", -1],
    ["(", 710],
    [1, 9, 711],
    [1, 210, 712,
     0, 712],
    [1, 9, 713],
    [")", -1],
    [/^\&?/, 715,
     "=", 716,
     3, "keyword", e[52], 716,
     0, -1],
    [1, 9, 717],
    [1, 9, 718],
    [1, 107, 716,
     0, 716],
    [",", 719,
     0, -1],
    [1, 9, 720],
    [/^\&?/, 721,
     "=", 722,
     3, "keyword", e[52], 722],
    [1, 9, 723],
    [1, 9, 718],
    [1, 107, 722,
     0, 722],
    [3, "qualifier def", e[22], 725],
    [1, 764, 726,
     0, 726],
    [1, 9, 727],
    ["::", -1],
    [1, 414, 729,
     0, -1],
    [1, 9, 730],
    [1, 536, 731,
     0, 732],
    [1, 9, 733],
    [1, 9, 734],
    [2, 548, 735, {"name":"ParamList"},
     0, 735],
    [",", 736,
     0, -1],
    [1, 9, 737],
    [1, 9, 738],
    [3, "operator", "=", 739,
     0, 732],
    [1, 414, 740],
    [1, 9, 741],
    [1, 9, 742],
    [1, 210, 732],
    [1, 536, 743,
     0, 744],
    [1, 9, 745],
    [1, 9, 734],
    [2, 548, 746, {"name":"ParamList"},
     0, 746],
    [1, 9, 747],
    [3, "operator", "=", 748,
     0, 744],
    [1, 9, 749],
    [1, 210, 744],
    [1, 825, 751,
     0, -1],
    [1, 9, 752],
    [",", 753,
     0, -1],
    [1, 9, 754],
    [1, 825, 755],
    [1, 9, 752],
    ["[", 757],
    [1, 9, 758],
    [1, 576, 759,
     "]", -1],
    [1, 9, 758],
    ["{", 761],
    [1, 9, 762],
    [1, 576, 763,
     "}", -1],
    [1, 9, 762],
    ["<", 765],
    [1, 9, 766],
    [e[59], 767,
     ">", -1],
    [1, 764, 768,
     2, 114, 768, {"name":"string","token":"string"},
     /^[^]/, 768],
    [1, 9, 766],
    [1, 414, 770],
    [1, 9, 771],
    [e[60], -1],
    [1, 467, 773,
     1, 484, 774],
    [1, 9, 772],
    [1, 9, 775],
    [e[59], 776,
     0, -1],
    [1, 300, 777],
    [1, 9, 775],
    [1, 414, 779],
    [1, 9, 780],
    [e[60], -1],
    [3, "meta", e[22], 782],
    [1, 764, 783,
     0, 783],
    [1, 9, 784],
    ["::", -1],
    [3, "keyword", e[29], 786,
     3, "keyword", e[30], 786,
     3, "keyword", e[31], 786,
     3, "def", [0, [7, "localConstructorAhead"], /^\~?/, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], 794,
     1, 414, 787],
    [1, 9, 785],
    [1, 9, 788],
    [1, 839, 789],
    [1, 9, 790],
    [",", 791,
     0, 794],
    [1, 9, 792],
    [1, 839, 793],
    [1, 9, 790],
    [1, 9, 795],
    [2, 241, -1, {"name":"FunctionDef"},
     1, 596, 796,
     ":", 797,
     "[", 798,
     0, 796,
     3, "meta", e[16], 799],
    [1, 9, 800],
    [1, 9, 801],
    [1, 9, 802],
    [1, 9, 803],
    [";", -1],
    [3, "number", e[20], 796],
    [1, 210, 804,
     0, 804],
    [2, 296, 805, {"name":"ParenTokens"},
     0, 805],
    [1, 9, 806],
    [1, 9, 807],
    ["]", 796],
    [/^\;?/, -1],
    [3, "keyword", e[26], 809,
     0, 811],
    [1, 9, 810],
    [2, 347, 811, {"name":"TemplateArgs"}],
    [1, 9, 812],
    [3, "keyword", e[21], 813,
     3, "keyword", e[18], 813],
    [1, 9, 814],
    [3, "type def", e[22], 815],
    [1, 9, 816],
    [3, "operator", "=", 817,
     0, -1],
    [1, 9, 818],
    [1, 107, -1,
     3, "number", e[20], -1],
    [1, 210, 820,
     0, -1],
    [1, 9, 821],
    [",", 822,
     0, -1],
    [1, 9, 823],
    [1, 210, 824],
    [1, 9, 821],
    [1, 339, 826,
     2, 591, 827, {"name":"fieldName","token":"property"}],
    [1, 9, 825],
    [1, 9, 828],
    [2, 347, 829, {"name":"TemplateArgs"},
     0, 829],
    [1, 9, 830],
    ["(", 831,
     "{", 832],
    [1, 9, 833],
    [1, 9, 834],
    [1, 819, 835],
    [1, 819, 836],
    [1, 9, 837],
    [1, 9, 838],
    [")", -1],
    ["}", -1],
    [0, 840,
     "(", 847],
    [e[61], 841,
     1, 701, 842],
    [1, 9, 840],
    [1, 9, 843],
    ["[", 844,
     0, -1],
    [1, 9, 845],
    ["]", 846],
    [1, 9, 843],
    [1, 9, 848],
    [1, 839, 849],
    [1, 9, 850],
    [")", -1]
  ];
  var start = 0;
  var token = 5;

  var cpp = /*#__PURE__*/Object.freeze({
    nodes: nodes,
    start: start,
    token: token
  });

  function getScope(context, scopes) {
    for (var cx = context; cx; cx = cx.parent)
      { if (scopes.indexOf(cx.name) > -1) { return cx } }
  }
  function isLocal(context, name) {
    for (var cx = context; cx; cx = cx.parent)
      { if (cx.locals && cx.locals.indexOf(name) > -1) { return true } }
    return false
  }
  function isLocalType(context, name) {
    for (var cx = context; cx; cx = cx.parent)
      { if (cx.localTypes && cx.localTypes.indexOf(name) > -1) { return true } }
    return false
  }

  var varRE = /(^|\s)variable($|\s)/;

  function markLocals(type, scopes, stream, state) {
    if (type == "def") {
      var scope = getScope(state.context, scopes), name = stream.current();
      if (scope) {
        if (!scope.locals) { scope.locals = []; }
        if (scope.locals.indexOf(name) == -1) { scope.locals.push(name); }
        if (state.context.name != "funcName") { return "def local" }
      }
    } else if (varRE.test(type) && !/qualified/.test(type) &&
               isLocal(state.context, stream.current())) {
      type = type.replace(varRE, "$1variable-2$2");
    }
    return type
  }

  var typeRE = /(^|\s)type($|\s)/;

  function markTypeLocals(type, scopes, stream, state) {
    if (type == "type def") {
      var scope = getScope(state.context, scopes);
      if (scope) {
        if (!scope.localTypes) { scope.localTypes = []; }
        scope.localTypes.push(stream.current());
      }
    } else if (typeRE.test(type) && !/qualifie[rd]/.test(type) &&
               isLocalType(state.context, stream.current())) {
      type += " local";
    }
    return type
  }

  function hasSubStatement(context) {
    var m = /^(if|for|do|while|try)\b/.exec(context.startLine.slice(context.startPos));
    return m && m[1]
  }

  function isSwitch(context) {
    return context && context.name == "Statement" &&
      /^switch\b/.test(context.startLine.slice(context.startPos))
  }

  function isLabel(text) {
    return text && /^\s*(case|default)\b/.test(text)
  }

  function aligned(cx) {
    return !/^\s*((\/\/.*)?$|.*=>)/.test(cx.startLine.slice(cx.startPos + 1))
  }

  var bracketed = {
    Block: "}", BlockOf: "}", ClassBody: "}", AnnotationTypeBody: "}", ObjectLiteral: "}", ObjectPattern: "}", EnumBody: "}",
    ObjType: "}", ArrayInitializer: "}", NamespaceBlock: "}", BraceTokens: "}",
    ArrayLiteral: "]", BracketTokens: "]", TupleType: "]",
    ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", ForSpec: ")", ParenTokens: ")",
    TypeParams: ">", TypeArgs: ">", TemplateArgs: ">", TemplateParams: ">"
  };

  var blockish = ["Block", "NamespaceBlock", "ClassBody", "AnnotationTypeBody", "BlockOf", "EnumBody"];

  var statementish = ["Statement", "ObjectMember", "ClassItem", "EnumConstant", "AnnotationTypeItem", "ArgExpr", "StatementMaybeOf", "NewExpr"];

  function baseIndent(cx, config) {
    for (var startLine = cx.startLine;; cx = cx.parent) {
      if (cx.name == "CondExpr")
        { return CodeMirror.countColumn(cx.startLine, cx.startPos + 1, config.tabSize) }
      if (statementish.indexOf(cx.name) > -1 && /(^\s*|[\(\{\[])$/.test(cx.startLine.slice(0, cx.startPos)))
        { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) }
      if (!cx.parent || cx.parent.startLine != startLine)
        { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
    }
  }

  function findIndent(cx, textAfter, config) {
    if (!cx) { return 0 }
    if (cx.name == "string" || cx.name == "comment") { return CodeMirror.Pass }

    var brack = bracketed[cx.name];
    var closed = textAfter && textAfter.charAt(0) == brack;
    if (brack && config.align !== false && aligned(cx))
      { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + (closed ? 0 : 1) }

    if (brack && blockish.indexOf(cx.name) > -1) {
      var parent = cx.parent;
      if (parent && parent.name == "Statement" && parent.parent &&
          parent.parent.name == "Statement" && hasSubStatement(parent.parent) && !hasSubStatement(parent))
        { parent = parent.parent; }
      var base$1 = statementIndent(parent, config);

      if (closed || cx.name == "NamespaceBlock") { return base$1 }
      if (/^(public|private|protected)\s*:/.test(textAfter)) { return base$1 + 1 }
      if (isSwitch(cx.parent) && !isLabel(textAfter)) { return base$1 + 2 * config.indentUnit }
      return base$1 + config.indentUnit
    }

    var base = baseIndent(cx, config.tabSize);
    if (brack) {
      if (closed && brack != ")") { return base }
      return base + config.indentUnit * (brack == ")" || brack == ">" ? 2 : 1)
    } else if (statementish.indexOf(cx.name) > -1) {
      if (hasSubStatement(cx)) { return base + config.indentUnit; }
      return base + 2 * config.indentUnit
    } else if (cx.name == "Alternative" || cx.name == "CatchFinally") {
      base = baseIndent(cx.parent, config.tabSize);
      if (!textAfter || /^(else\b|\/[\/\*])/.test(textAfter)) { return base }
      return base + config.indentUnit
    } else if (cx.name == "ArrowRest") {
      return base + config.indentUnit
    } else if (cx.name == "NewExpression" && cx.startLine.length > cx.startPos + 5) {
      return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + 2 * config.indentUnit
    } else if (cx.name == "InitializerList") {
      return base + 2
    } else if (cx.name == "ThrowsClause" && !/throws\s*$/.test(cx.startLine.slice(cx.startPos))) {
      return base + 2 * config.indentUnit
    } else {
      return findIndent(cx.parent, textAfter, config)
    }
  }

  function statementIndent(cx, config) {
    for (;; cx = cx.parent) {
      if (!cx) { return 0 }
      if (statementish.indexOf(cx.name) > -1 || (cx.parent && bracketed[cx.parent.name]))
        { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
    }
  }

  function indent(state, textAfter, line, config) {
    var top = state.context && state.context.name;
    if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "Template")
      { return statementIndent(state.context, config) }

    if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^[@*]/.test(textAfter))
      { return CodeMirror.countColumn(state.context.startLine, null, config.tabSize) + 2 * config.indentUnit }

    return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, config)
  }

  function constructorAhead(line, pos) {
    var match = /^(\w+)::~?(\w+)/.exec(line.slice(pos));
    return match && match[1] == match[2]
  }

  function localConstructorAhead(line, pos, cx) {
    var ahead = /^~?(\w+)\s*\(/.exec(line.slice(pos));
    if (!ahead) { return false }
    while (cx.name != "Statement") { cx = cx.parent; }
    var className = /\bclass\s+(\w+)/.exec(cx.startLine.slice(cx.startPos));
    return className ? className[1] == ahead[1] : false
  }

  var rawStringOpen = /R"(.*?)\(/g;

  function rawStringContinues(line, pos, cx) {
    rawStringOpen.lastIndex = cx.startPos;
    var closing = ")" + rawStringOpen.exec(cx.startLine)[1] + '"';
    return pos < closing.length - 1 || line.slice(pos - closing.length + 1, pos + 1) != closing
  }

  var scopes = ["Block", "FunctionDef"], typeScopes = ["Template"];

  var CppMode = (function (superclass) {
    function CppMode(conf) {
      superclass.call(this, cpp, {
        predicates: {constructorAhead: constructorAhead, localConstructorAhead: localConstructorAhead, rawStringContinues: rawStringContinues}
      });
      this.conf = conf;
    }

    if ( superclass ) CppMode.__proto__ = superclass;
    CppMode.prototype = Object.create( superclass && superclass.prototype );
    CppMode.prototype.constructor = CppMode;

    CppMode.prototype.token = function token$$1 (stream, state) {
      return markTypeLocals(markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state), typeScopes, stream, state)
    };

    CppMode.prototype.indent = function indent$1 (state, textAfter, line) {
      if (textAfter.charAt(0) == "#") { return 0 }
      return indent(state, textAfter, line, this.conf)
    };

    return CppMode;
  }(CodeMirror.GrammarMode));

  CppMode.prototype.electricInput = /^\s*(?:case .*?:|(?:public|private|protected|default):|\{\}?|\})$/;
  CppMode.prototype.blockCommentStart = "/*";
  CppMode.prototype.blockCommentEnd = "*/";
  CppMode.prototype.blockCommentContinue = " * ";
  CppMode.prototype.lineComment = "//";
  CppMode.prototype.fold = "brace";

  CodeMirror.defineMode("google-cpp", function (conf) { return new CppMode(conf); });

})));
