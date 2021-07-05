/*
京享值PK
cron 15 2,7,18 * * * jd_joyscore.js
更新时间：2021-7-04
活动入口：京东APP-我的-京享值
已支持IOS双京东账号,Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
============Quantumultx===============
[task_local]
#京享值PK
15 2,7,18 * * * https://raw.githubusercontent.com/hyzaw/scripts/main/ddo_pk.js, tag=京享值PK
================Loon==============
[Script]
cron "15 2,7,18 * * *" script-path=https://raw.githubusercontent.com/hyzaw/scripts/main/ddo_pk.js,tag=京享值PK
===============Surge=================
*/

const $ = new Env('京享值PK');
!function (n) { "use strict"; function r(n, r) { var t = (65535 & n) + (65535 & r); return (n >> 16) + (r >> 16) + (t >> 16) << 16 | 65535 & t } function t(n, r) { return n << r | n >>> 32 - r } function u(n, u, e, o, c, f) { return r(t(r(r(u, n), r(o, f)), c), e) } function e(n, r, t, e, o, c, f) { return u(r & t | ~r & e, n, r, o, c, f) } function o(n, r, t, e, o, c, f) { return u(r & e | t & ~e, n, r, o, c, f) } function c(n, r, t, e, o, c, f) { return u(r ^ t ^ e, n, r, o, c, f) } function f(n, r, t, e, o, c, f) { return u(t ^ (r | ~e), n, r, o, c, f) } function i(n, t) { n[t >> 5] |= 128 << t % 32, n[14 + (t + 64 >>> 9 << 4)] = t; var u, i, a, h, g, l = 1732584193, d = -271733879, v = -1732584194, C = 271733878; for (u = 0; u < n.length; u += 16)i = l, a = d, h = v, g = C, d = f(d = f(d = f(d = f(d = c(d = c(d = c(d = c(d = o(d = o(d = o(d = o(d = e(d = e(d = e(d = e(d, v = e(v, C = e(C, l = e(l, d, v, C, n[u], 7, -680876936), d, v, n[u + 1], 12, -389564586), l, d, n[u + 2], 17, 606105819), C, l, n[u + 3], 22, -1044525330), v = e(v, C = e(C, l = e(l, d, v, C, n[u + 4], 7, -176418897), d, v, n[u + 5], 12, 1200080426), l, d, n[u + 6], 17, -1473231341), C, l, n[u + 7], 22, -45705983), v = e(v, C = e(C, l = e(l, d, v, C, n[u + 8], 7, 1770035416), d, v, n[u + 9], 12, -1958414417), l, d, n[u + 10], 17, -42063), C, l, n[u + 11], 22, -1990404162), v = e(v, C = e(C, l = e(l, d, v, C, n[u + 12], 7, 1804603682), d, v, n[u + 13], 12, -40341101), l, d, n[u + 14], 17, -1502002290), C, l, n[u + 15], 22, 1236535329), v = o(v, C = o(C, l = o(l, d, v, C, n[u + 1], 5, -165796510), d, v, n[u + 6], 9, -1069501632), l, d, n[u + 11], 14, 643717713), C, l, n[u], 20, -373897302), v = o(v, C = o(C, l = o(l, d, v, C, n[u + 5], 5, -701558691), d, v, n[u + 10], 9, 38016083), l, d, n[u + 15], 14, -660478335), C, l, n[u + 4], 20, -405537848), v = o(v, C = o(C, l = o(l, d, v, C, n[u + 9], 5, 568446438), d, v, n[u + 14], 9, -1019803690), l, d, n[u + 3], 14, -187363961), C, l, n[u + 8], 20, 1163531501), v = o(v, C = o(C, l = o(l, d, v, C, n[u + 13], 5, -1444681467), d, v, n[u + 2], 9, -51403784), l, d, n[u + 7], 14, 1735328473), C, l, n[u + 12], 20, -1926607734), v = c(v, C = c(C, l = c(l, d, v, C, n[u + 5], 4, -378558), d, v, n[u + 8], 11, -2022574463), l, d, n[u + 11], 16, 1839030562), C, l, n[u + 14], 23, -35309556), v = c(v, C = c(C, l = c(l, d, v, C, n[u + 1], 4, -1530992060), d, v, n[u + 4], 11, 1272893353), l, d, n[u + 7], 16, -155497632), C, l, n[u + 10], 23, -1094730640), v = c(v, C = c(C, l = c(l, d, v, C, n[u + 13], 4, 681279174), d, v, n[u], 11, -358537222), l, d, n[u + 3], 16, -722521979), C, l, n[u + 6], 23, 76029189), v = c(v, C = c(C, l = c(l, d, v, C, n[u + 9], 4, -640364487), d, v, n[u + 12], 11, -421815835), l, d, n[u + 15], 16, 530742520), C, l, n[u + 2], 23, -995338651), v = f(v, C = f(C, l = f(l, d, v, C, n[u], 6, -198630844), d, v, n[u + 7], 10, 1126891415), l, d, n[u + 14], 15, -1416354905), C, l, n[u + 5], 21, -57434055), v = f(v, C = f(C, l = f(l, d, v, C, n[u + 12], 6, 1700485571), d, v, n[u + 3], 10, -1894986606), l, d, n[u + 10], 15, -1051523), C, l, n[u + 1], 21, -2054922799), v = f(v, C = f(C, l = f(l, d, v, C, n[u + 8], 6, 1873313359), d, v, n[u + 15], 10, -30611744), l, d, n[u + 6], 15, -1560198380), C, l, n[u + 13], 21, 1309151649), v = f(v, C = f(C, l = f(l, d, v, C, n[u + 4], 6, -145523070), d, v, n[u + 11], 10, -1120210379), l, d, n[u + 2], 15, 718787259), C, l, n[u + 9], 21, -343485551), l = r(l, i), d = r(d, a), v = r(v, h), C = r(C, g); return [l, d, v, C] } function a(n) { var r, t = "", u = 32 * n.length; for (r = 0; r < u; r += 8)t += String.fromCharCode(n[r >> 5] >>> r % 32 & 255); return t } function h(n) { var r, t = []; for (t[(n.length >> 2) - 1] = void 0, r = 0; r < t.length; r += 1)t[r] = 0; var u = 8 * n.length; for (r = 0; r < u; r += 8)t[r >> 5] |= (255 & n.charCodeAt(r / 8)) << r % 32; return t } function g(n) { return a(i(h(n), 8 * n.length)) } function l(n, r) { var t, u, e = h(n), o = [], c = []; for (o[15] = c[15] = void 0, e.length > 16 && (e = i(e, 8 * n.length)), t = 0; t < 16; t += 1)o[t] = 909522486 ^ e[t], c[t] = 1549556828 ^ e[t]; return u = i(o.concat(h(r)), 512 + 8 * r.length), a(i(c.concat(u), 640)) } function d(n) { var r, t, u = ""; for (t = 0; t < n.length; t += 1)r = n.charCodeAt(t), u += "0123456789abcdef".charAt(r >>> 4 & 15) + "0123456789abcdef".charAt(15 & r); return u } function v(n) { return unescape(encodeURIComponent(n)) } function C(n) { return g(v(n)) } function A(n) { return d(C(n)) } function m(n, r) { return l(v(n), v(r)) } function s(n, r) { return d(m(n, r)) } function b(n, r, t) { return r ? t ? m(r, n) : s(r, n) : t ? C(n) : A(n) } $.md5 = b }();
$.toObj = (t, e = null) => {
    try {
        return JSON.parse(t)
    } catch {
        return e
    }
}
$.toStr = (t, e = null) => {
    try {
        return JSON.stringify(t)
    } catch {
        return e
    }
}

const notify = $.isNode() ? require("./sendNotify") : "";
const jdCookieNode = $.isNode() ? require("./jdCookie.js") : "";
const sck = $.isNode() ? "set-cookie" : "Set-Cookie";
const APPID = "dafbe42d5bff9d82298e5230eb8c3f79";
const md5Key = "34e1e81ae8122ca039ec5738d33b4eee";
let cookiesArr = [],
    cookie = "",
    message;
let minPrize = 1;

let countlaunch = 0;
let countreceive = 0;
let bcomplate = false;

if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item]);
    });
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => { };
} else {
    cookiesArr = [
        $.getdata("CookieJD"),
        $.getdata("CookieJD2"),
        ...jsonParse($.getdata("CookiesJD") || "[]").map((item) => item.cookie),
    ].filter((item) => !!item);
}
//采用闭包方式调用
var _0xodo='jsjiami.com.v6',_0x15bf=[_0xodo,'w4nClMOmw4NCw6JTPw==','wpHCsBI=','GcOfFm9r','DMKzLw==','w7PCk8OEw69h','w7vDk8K3w6sM','wqNWC1zDrQ==','wpPChT5kw4U=','wozDlcK9wpgo','wpvCusK+w6vDsg==','w5fCvHkfw7A=','Q3nDgj53eR3DpR3CnsK1w5VdLFBY','dsOpw5DDsMKlwrMk','FzwZIcO5wrU=','GMOPw7M=','bcKBVEBM','wpnDgcKkRQ==','wpbClcKa','wpF8M8KYw74=','bsK4B8Kbwqc=','Ug4SBcO5','w7PChsK6wptU','wqXDnsKlwr/Dgg==','w4cabQ==','w6jDs8Kaw74=','XSAX','w5LCsGNqwr8=','wq3DosKQOMOAw4DDlxY=','wpXDtsKHFsOD','wqbCgsKZw58=','TsKqw6xVwrLDlsK/woo+wrbCvXpMaHQvwqbCoFIYKMO9BMKRS2BjAcOVEcOBYcONwqHCiSPCiiFiwrQvwohywoM=','wrLCrMKHw60=','dn4ywqfCvmhcwqoaUsK7KsOKRg8f','w6PCklsQw6o=','wpA7PcOfwr8=','UsKxw4tRwrM=','5Lq+5LyB57uf5p+B77+5','w7DCoHUWw4E=','IcOVVkJ6','w43Cg11awrs=','w6HChGQNw5M=','dHbDmATCjg==','esOjwqJzw5w=','JEfDucOlwpcK','w6jCu2cyw7Y=','OEbDj8OpwqE=','w7HDpsOWHsO+','w7zClMKm','QHrDvQ==','RSfCqcO7wo0=','KGpbKTU=','HmhtBsOW','w5Zow6coK34FVsO5eMKiwq4QEcO0XsKUwoo1bWXDtsKSTy7CjQTDlMKVcwooccONwpItw73DucOMdnnCkcOYwrnDpQbDv1Y9wrbCgxPCnsKOasOhacK0bgnDvMK4IX/DkcKmw7smw6Udw73ChsO3ccKkw4I2esOkcMKKworDhjYWwo8LfgnCo0ZNQ1gUSjlAf8K4USDCkMK1KSBpM2cQdE5o','wpTDo8KGKMOz','TcOfwr1Hw4Y=','RGHDrhfCrVEkw7FMw7rDocOLP8O7w5PCq8KTwpbDqsORRcKeQTQwXsOFwog0wqUkwpjCgMOnw75kwrjDlip9ccKtV8Omw5LDtsKpd8O7NmE=','w6TCkMKOw5FZw6Jj','WcOewro=','w7/DocK0H8O6','WnDDozBj','woQuM8OYwrQ=','wq/CgsKEw5A=','5b+05YqVwq84V8K+dRXCuO+8gw==','6L+96KKS5Lqj5YqN6YGB6Kybw4DDrg==','55e55omeFMO+wrDDpMO3','6LSA5oup5Yqe5pWV5pi16ai0776c6L2+6KCT5Lu95Ym8BHQ=','5b+f5Yuf5Yuo5pev7725','6Lad5omI5YiD5pes5puG6amL776f6L+X6KKh6KGy5Yutw6km','5Lmm5aWj5Lij6KCR5YmYwrdi5Z2K5bSL55eD5ay6','5LmK5YqN6YKW6K6v5aWq6LaZ772m','5byi5Yuu6IOi5ZyLEw==','5Y+v6LeM5o+f5oia','wp58PsK6w4/CvywKHWrCocKA','6YGR6K6e5omU5Yio6Z++6KWf566e5byU5o6A5pa8woEc776o','5Yyz6LaU6KG/5YiRw5hy6YCb6K275o+O5omb','wpDCnsKuw7LCgzRZYcK5w4XCiSoAwovDtG10KlY=','6I2f5Y2u5YuP5LmhF2jnoL/vvpA=','NsOhw5LDs8KYwoF8AMOIwp9P','wp/Dv8KKOsOBw6Ebw6pu','VsOnw5Q9Azx6G8KccMKxw5V6QX5q','w4vCs3gVwr/DkMKgw7jCjkM=','bHjDvVbDhUDDk8OXEsOyOXfDv0fDrlsIBlFGw69jQh5OdcOPwr1LRcKEYsKjwqbDgMKZw6URfMKUPsOQZcO9w5PCicOEwrtzwqQQwqjDszZ5c8OPw7MgHMKnFsO8J8OzKsOywqtpEyLDqljDocONacOyZMKwwo1Ew4jCtCjChSgwdcOBWEjCqMK+OQTDjMKHw6NJLcKjwrhFXcONL8O9w4Y+J8OQcHo=','C007OzU=','woTDl8Ku','esKHSmJH','MMK1Jg==','w69wwp8=','w45Qw64qKQ==','dEDDtFTDhw==','wqzDvsKB','dH7DqS/CuA==','wq7CiMK5w5FAw6Iw','Gl5Q','wpDCq8K6w7XDjw==','wq3DicK+','wp3DnsKnwpwe','fHzDtA==','wrfChcKDw6hy','JlhZ','f8K5Vw==','w7wjdg==','wqRqwoHDtsOl','McKlG8OEwr8=','wqduLsKmw6LCtgMO','LcKtMknDiQ==','w5xWZAvCkA==','w5hOaw==','w6DDt8KAw7gXUw==','5omB55iM5LiM5LirwrzCnOWIn+WBjsKb','QHDDvBPCkh5lwr1Fw5rDo8KrOcO1','O2tUNws=','HUpx','5omU5p2pwp/DuOavgeaXkOW2r+WtvA==','WSUbDsO+','wpbCs8Khw4tH','Q8K1X31lEcOJwpxLw4A6wrdCWw==','wodQNg==','HcOGUFZdwrY=','W8Oyw4o2Hjc=','w7fCnsK1','w6jCrMOCw4FC','M8OwaHBH','wptAHcObZA==','5b2H5Yit5YuJ5peD77+6','GHTDpMOBwpI=','KsKEBVHDoA==','w7Nqwosa','TXjDoA==','w5hKWDLCiD03','wrjDqMO5woNM','Q8K/Xg==','wr8vAMOUwpQ=','6L6q6KGp6KK95Yuw6YOb6K2LLMKr','f2PDtyTChw==','w7B3BMKUAg==','TXLDoUvDqE/DkcKdV8KoWTzCmWXDqg==','wqB8JcKww4PCuj0fGw==','wpPClMKZw7/Cmgla','woXCsz9uw5Y=','IcOaLHZM','HcOMWQ==','W8KHP8K4wqM=','bF3Djn3DrQ==','w5DCkcKFJ3c=','woNKwoTDk8Ow','R8OWw5QnGw==','L8KYXMOjw5M=','F8KwVMOfwoA=','w4vCvcKlJ0LCsn0VwqZtwoYHOcKMwps=','6Leu5oqN5YqY5pa25puN6aq077yV6L2R6KGD6KOM5YmgG8Km','w77ClsKkGnE=','woVwwqs=','CsKkDcObwprCu2Q=','wo7CjMKz','wp50G8Khw6Q=','5rGd5p6e6I2Y5Y6P5Yqa6KCY5Yua6YCZ6K+y56Gi','w7d0wogLRw==','wrl2wqI=','5YWy5aSm5qOM5rSW5puM5ZG+5Y625Lmj5byS5a+H56664oCx4oOP','RMOCwp10w6E=','wol6JQ==','X8OMwq9ww6HDpQ==','Q23DlwV3Nw==','wpHDhcK+Q8OeSQ==','ZWs4w6zCpH1Lwqc=','D8KFRcOU','wqTDlcO5','w77Dt8KZw74RX0c=','wpXDscK3wpPDp2FiKMKcIMOsYQ==','e2E8','wo7CjsKBw4lo','cmzDngRA','wojCqD5lw54=','WQnCuMO/wqw=','w5cQYg==','T8OcwqFSw4c=','wprDhcKkcMODTMKn','HcOtOMOXwoXCl27Ct8Onw7/Du8KPD09pwrskwpoHw68+AsKtw7Q=','P8KBPsO9woM=','NUPDucOFwp0K','B3vDrHrDuUXDnMOF','FyMbEsO4w6Mnw5XDtg==','MhTDsg==','w5Njw4csCA==','w4TCt2kE','6YKr6Ky+5omi5YmU6LyA5ZuH57iu5pyM7726','NMKrcMOvwqA=','wp7CugVnw54=','BcOtKGxi','ZAvCncOWwpPDlTHChA==','w4o4d8OXwqfCjkdDwozChg==','I8KhU8Ocwp4=','wqF2wpbDhsOv','UsOUwqk=','cgEaIsOv','w6fDocKc','w6Q+TsOxwoE=','RBbCp8OAwrM=','HMOZc3Z/','wozDlcO8woxz','w47CiMKIwrdJ','wpvDssKbDcODw54X','G8O+KULDrU3CqS3DicKoGMOwEiV6w40HE8OnTTDDqzhd','w4LCv8K1woRV','w67DlsO1woNpBXfCtw==','B3vDrGvDhkfDl8KWGg==','woo+JQ==','XATClcOewq8=','Bl5EOA==','VS4EJw==','WSsCEsOF','woTDoMK3wonDkg==','w5d2Nw==','wrjDkcOMwqNKGXXDvg==','6KK85Yqm6YOb6K2+5oud5YqU6L+65Zid57q55p6677+S','w48QVsOoQA==','S8K8w7pMwo0=','wpvDu8Kx','5Y2s6LaM6YCx6K2d6K+b5rOu5aSX6LW3w7w=','wonCkxRsw4Q=','NsK5McOHwqI=','w4NLaCfCgQ==','w5FewrU8cA==','5o+U5Y+y6KK95YuwC8O35o2t5ou4','LcOSKXRTw78S','w4bDmcOQw4lYw6VCcMO8aH04QsOuNcK1wpbDmcO6wrgZwpnDn04=','Il97LQo=','woPCk8Kkw7DDrAQ=','woHCtMKoFlPCuHBN','w5vDjMK7cMOFSsKnwooS','CcKjUG5HWQ==','SMKmVmpi','wrDChsKOw5tCw7E7woHCjHQwwqod','wqEGN8OD','wpzDl8KGwqgt','w4PCucK3Mg==','w6tsw48kNGcIDQ==','wpDDuMKI','M1N9CDo=','w5XCsVV1wq5rw5bCsg==','wo7DisKmwqcQSlDDhFHDhA==','acK/GcKbwrU=','jsWYJjialZmi.coZmxTGNd.vLJe6Nb=='];(function(_0x5d80de,_0x2eb82a,_0x48e127){var _0x3699c1=function(_0x216232,_0x12319a,_0x10cec6,_0x1a4a86,_0x589b38){_0x12319a=_0x12319a>>0x8,_0x589b38='po';var _0x299d36='shift',_0x55f201='push';if(_0x12319a<_0x216232){while(--_0x216232){_0x1a4a86=_0x5d80de[_0x299d36]();if(_0x12319a===_0x216232){_0x12319a=_0x1a4a86;_0x10cec6=_0x5d80de[_0x589b38+'p']();}else if(_0x12319a&&_0x10cec6['replace'](/[WYJlZZxTGNdLJeNb=]/g,'')===_0x12319a){_0x5d80de[_0x55f201](_0x1a4a86);}}_0x5d80de[_0x55f201](_0x5d80de[_0x299d36]());}return 0x955dd;};return _0x3699c1(++_0x2eb82a,_0x48e127)>>_0x2eb82a^_0x48e127;}(_0x15bf,0x130,0x13000));var _0x4099=function(_0x462d12,_0x21ea60){_0x462d12=~~'0x'['concat'](_0x462d12);var _0x477670=_0x15bf[_0x462d12];if(_0x4099['RKgHUR']===undefined){(function(){var _0x400720;try{var _0xb2d11e=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x400720=_0xb2d11e();}catch(_0x41fdb0){_0x400720=window;}var _0x1bfe25='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x400720['atob']||(_0x400720['atob']=function(_0x3d7ff5){var _0x240b5f=String(_0x3d7ff5)['replace'](/=+$/,'');for(var _0x1b07ce=0x0,_0x42f52b,_0x5278b3,_0x526cab=0x0,_0x27b6ff='';_0x5278b3=_0x240b5f['charAt'](_0x526cab++);~_0x5278b3&&(_0x42f52b=_0x1b07ce%0x4?_0x42f52b*0x40+_0x5278b3:_0x5278b3,_0x1b07ce++%0x4)?_0x27b6ff+=String['fromCharCode'](0xff&_0x42f52b>>(-0x2*_0x1b07ce&0x6)):0x0){_0x5278b3=_0x1bfe25['indexOf'](_0x5278b3);}return _0x27b6ff;});}());var _0x372171=function(_0x3a7cb7,_0x21ea60){var _0x400b1c=[],_0x252a55=0x0,_0x160229,_0x24f6de='',_0x3f6d58='';_0x3a7cb7=atob(_0x3a7cb7);for(var _0x222a1e=0x0,_0x3b7e1d=_0x3a7cb7['length'];_0x222a1e<_0x3b7e1d;_0x222a1e++){_0x3f6d58+='%'+('00'+_0x3a7cb7['charCodeAt'](_0x222a1e)['toString'](0x10))['slice'](-0x2);}_0x3a7cb7=decodeURIComponent(_0x3f6d58);for(var _0x1c6e5c=0x0;_0x1c6e5c<0x100;_0x1c6e5c++){_0x400b1c[_0x1c6e5c]=_0x1c6e5c;}for(_0x1c6e5c=0x0;_0x1c6e5c<0x100;_0x1c6e5c++){_0x252a55=(_0x252a55+_0x400b1c[_0x1c6e5c]+_0x21ea60['charCodeAt'](_0x1c6e5c%_0x21ea60['length']))%0x100;_0x160229=_0x400b1c[_0x1c6e5c];_0x400b1c[_0x1c6e5c]=_0x400b1c[_0x252a55];_0x400b1c[_0x252a55]=_0x160229;}_0x1c6e5c=0x0;_0x252a55=0x0;for(var _0xb07ca3=0x0;_0xb07ca3<_0x3a7cb7['length'];_0xb07ca3++){_0x1c6e5c=(_0x1c6e5c+0x1)%0x100;_0x252a55=(_0x252a55+_0x400b1c[_0x1c6e5c])%0x100;_0x160229=_0x400b1c[_0x1c6e5c];_0x400b1c[_0x1c6e5c]=_0x400b1c[_0x252a55];_0x400b1c[_0x252a55]=_0x160229;_0x24f6de+=String['fromCharCode'](_0x3a7cb7['charCodeAt'](_0xb07ca3)^_0x400b1c[(_0x400b1c[_0x1c6e5c]+_0x400b1c[_0x252a55])%0x100]);}return _0x24f6de;};_0x4099['KXwStj']=_0x372171;_0x4099['NRWcxl']={};_0x4099['RKgHUR']=!![];}var _0x4ed902=_0x4099['NRWcxl'][_0x462d12];if(_0x4ed902===undefined){if(_0x4099['qOBWLA']===undefined){_0x4099['qOBWLA']=!![];}_0x477670=_0x4099['KXwStj'](_0x477670,_0x21ea60);_0x4099['NRWcxl'][_0x462d12]=_0x477670;}else{_0x477670=_0x4ed902;}return _0x477670;};!function(_0xb0011d){var _0x492955={'UrNLe':function(_0x12f38c){return _0x12f38c();},'UWskn':function(_0x5cd282,_0x378c85){return _0x5cd282+_0x378c85;},'XksHf':_0x4099('0','hBb$'),'GrAGG':'执行京东检测验证','rHnLG':function(_0x360eb3,_0x26f730,_0x35d4ee){return _0x360eb3(_0x26f730,_0x35d4ee);},'ufnVY':function(_0x5acc64,_0x50c59f,_0x4c9e5c){return _0x5acc64(_0x50c59f,_0x4c9e5c);},'qsDDx':function(_0x46a5c2,_0x4fd11d){return _0x46a5c2(_0x4fd11d);},'WjBpN':function(_0x36b8d5,_0x381113){return _0x36b8d5(_0x381113);},'MqzhP':function(_0x20d44c,_0x46936a){return _0x20d44c>_0x46936a;},'hwhVs':function(_0x47ae1c,_0x11da66,_0x69ebc6){return _0x47ae1c(_0x11da66,_0x69ebc6);},'JNBoP':function(_0xeea17f,_0x2c8858){return _0xeea17f<=_0x2c8858;},'hjkHi':_0x4099('1','F6#y'),'TPLul':function(_0x132ea4,_0x27ac2a){return _0x132ea4>_0x27ac2a;},'UeQMY':function(_0x32bb1f,_0x39f094){return _0x32bb1f(_0x39f094);},'QJlup':function(_0x58e4f2,_0x15b700){return _0x58e4f2<_0x15b700;},'BSVAn':function(_0x38ac51,_0x5c9e5f){return _0x38ac51+_0x5c9e5f;},'wIFtt':_0x4099('2','6L5!'),'rAbdv':function(_0x193288,_0x15197f){return _0x193288(_0x15197f);},'LGmMk':function(_0xab910,_0x35a669){return _0xab910<_0x35a669;},'JXMpy':function(_0x1b086f,_0x3e541f){return _0x1b086f<_0x3e541f;},'WugQB':_0x4099('3','F6#y'),'nLMWw':function(_0x160d74,_0x4939ac,_0x1dbcbc,_0x56a11c){return _0x160d74(_0x4939ac,_0x1dbcbc,_0x56a11c);},'pRgEu':'没有获取到好友','nFDcj':'主动PK次数已完','SvmCY':function(_0x1cb076,_0x586c30){return _0x1cb076>_0x586c30;},'JrTvM':function(_0x282255,_0x27a971){return _0x282255-_0x27a971;},'QWZOK':function(_0x50185e,_0x26600a){return _0x50185e>_0x26600a;},'zitpI':function(_0x3a0f06,_0x505b31){return _0x3a0f06!=_0x505b31;},'xlJND':function(_0x4ae281,_0x59109d){return _0x4ae281==_0x59109d;},'kmqVv':function(_0x5dac5b,_0x1b00b9){return _0x5dac5b(_0x1b00b9);},'pNMsw':function(_0x50b7f1,_0x283102){return _0x50b7f1+_0x283102;},'MJIBD':function(_0x14ba0a,_0x58249a){return _0x14ba0a+_0x58249a;},'VSAam':_0x4099('4','f8$l'),'pApvq':'\x20PK\x20\x20我的分数:','WtwDR':function(_0x3aec6b,_0x23911d){return _0x3aec6b<_0x23911d;},'YNgIr':function(_0x26a996,_0x517c2e,_0x3fa718,_0x20ebd6,_0x281fb3){return _0x26a996(_0x517c2e,_0x3fa718,_0x20ebd6,_0x281fb3);},'liPuH':_0x4099('5','fC$d'),'tkpyX':_0x4099('6','hRCF'),'zySvd':function(_0x5c432e,_0x5d41a8){return _0x5c432e(_0x5d41a8);},'EXpXL':function(_0x126628,_0xae2b9){return _0x126628<_0xae2b9;},'mIldN':'去开宝箱:','LmlwC':'宝箱检测结束……','RXXJC':_0x4099('7','eTUn'),'PvhsS':function(_0x262605,_0x176624){return _0x262605+_0x176624;},'uwKEL':_0x4099('8','[Roi'),'MiwLL':'发起邀请请求失败:','qgoPB':_0x4099('9','wGxs'),'HdZmO':function(_0x9b233,_0x3cceb7,_0x15c330,_0x170063){return _0x9b233(_0x3cceb7,_0x15c330,_0x170063);},'KEuMP':_0x4099('a','Htxl'),'mzMGV':_0x4099('b','6L5!'),'DobJJ':function(_0x22c7f1,_0x48a5d4){return _0x22c7f1(_0x48a5d4);},'UyZzn':_0x4099('c',')OFr'),'cVuRm':_0x4099('d','64zQ'),'xAkmL':'PK结果其他信息','wjdzb':function(_0x34c4cb,_0x280cc2){return _0x34c4cb(_0x280cc2);},'RAMNo':function(_0x285fb2,_0x3df73f,_0x3a3dfd,_0x3b8968){return _0x285fb2(_0x3df73f,_0x3a3dfd,_0x3b8968);},'dmtRo':function(_0x4b5c5e,_0xdcceb8){return _0x4b5c5e==_0xdcceb8;},'ZmvzW':function(_0x5945d6,_0x2c3183,_0x1d035d,_0x2089b6){return _0x5945d6(_0x2c3183,_0x1d035d,_0x2089b6);},'BQmIe':'jdShareRandom','yYjRz':_0x4099('e','N$oC'),'RJsBu':_0x4099('f','%Kwb'),'iahOi':_0x4099('10','sv^*'),'CDFux':_0x4099('11','&h%R'),'ARyhA':_0x4099('12','Q$gE'),'nQmqj':_0x4099('13','QcqU'),'kUAGH':_0x4099('14','eTUn'),'QGfHm':function(_0x4bbc67,_0x18256f){return _0x4bbc67(_0x18256f);},'hYZJf':'api.scriptsjd.cf','YOMqn':function(_0x4b9a67,_0x24678c){return _0x4b9a67(_0x24678c);},'pEVzR':'\x20*/*'};async function _0x2a6026(){let _0x18551b=await _0x492955['UrNLe'](getToken);let _0x20282d=[];let _0x45cf18=[];console[_0x4099('15','N$oC')](_0x492955[_0x4099('16','(Ril')]('当前token：',_0x18551b));if(_0x18551b){let _0x391234;let _0xe7ec4e=await getPin();if(_0xe7ec4e[_0x4099('17','xfFy')]){console[_0x4099('18','0Y(h')](_0x492955[_0x4099('19','FP7[')](_0x492955['UWskn'](_0x492955[_0x4099('1a','QcqU')]('当前pin（pk码）：',_0xe7ec4e[_0x4099('1b','sv^*')]),_0x492955[_0x4099('1c','D[l6')]),_0xe7ec4e[_0x4099('1d','%naN')]));}console[_0x4099('1e','^T$b')](_0x492955['GrAGG']);await _0x492955[_0x4099('1f',')OFr')](_0x41d94e,APPID,_0xe7ec4e[_0x4099('20','SnX$')]);await _0x492955[_0x4099('21','N$oC')](_0x4a960a,APPID,_0xe7ec4e['Pin']);let _0x241c4d=await getUserPkInfo(_0xe7ec4e[_0x4099('22','D[l6')]);let _0x41f439=await _0x492955[_0x4099('23','%naN')](_0x5cc72a,_0xe7ec4e[_0x4099('24','^T$b')],_0xe7ec4e['lkToken']);let _0x119ff4=await getScore(_0xe7ec4e[_0x4099('25','(Ril')]);let _0xe6c039={'PkPin':_0xe7ec4e[_0x4099('26','hRCF')],'PtPin':$['UserName'],'RandomStr':_0x41f439,'Score':_0x119ff4};await _0x492955[_0x4099('27','boFE')](_0x489f87,_0xe6c039);countlaunch=0x0;countreceive=0x0;let _0x193e99=_0x492955[_0x4099('28','NJlS')](_0x1e4d82,$[_0x4099('29','Htxl')]);if(_0x492955[_0x4099('2a','xfFy')](_0x193e99,0x0)){countreceive=_0x193e99;}let _0x53bd35=await _0x492955[_0x4099('2b','OmZ%')](_0x59a79e,0x28,_0x119ff4);console[_0x4099('2c','OmZ%')]('获取Pk列表'+_0x53bd35[_0x4099('2d','f8$l')]+'条数据备用');console[_0x4099('2c','OmZ%')](_0x4099('2e','%Kwb')+_0x119ff4);if(_0x241c4d[_0x4099('2f','D[l6')]<=0x0&&_0x492955[_0x4099('30','eTUn')](_0x241c4d['leftAcceptPkNum'],0x0)){console[_0x4099('31','eTUn')](_0x4099('32','zVo8'));return;}console['log'](_0x492955[_0x4099('33','byu1')]);if(_0x492955[_0x4099('34','%naN')](_0x241c4d[_0x4099('35','(Ril')],0x0)){_0x391234=await _0x492955['UeQMY'](getFriendPinList,_0xe7ec4e[_0x4099('36','6OO]')]);if(_0x492955['TPLul'](_0x391234[_0x4099('37','[Roi')],0x0)){let _0x21904f,_0x3dc8e7;for(let _0x458785=0x0;_0x492955['QJlup'](_0x458785,_0x391234[_0x4099('38','&h%R')]);_0x458785++){_0x21904f=_0x391234[_0x458785];_0x3dc8e7=await getScore(_0x21904f);console[_0x4099('39','p2g4')](_0x492955[_0x4099('3a','rwdk')](_0x492955[_0x4099('3b','[Roi')](_0x492955[_0x4099('3c','6GzH')](_0x492955['wIFtt']+_0x21904f,_0x4099('3d','zVo8'))+_0x3dc8e7,'\x20PK\x20\x20我的分数:'),_0x119ff4));_0x492955['rAbdv'](sleep,0x1f4);if(_0x492955[_0x4099('3e','97GR')](_0x3dc8e7,_0x119ff4)){if(_0x492955[_0x4099('3f','xfFy')](countlaunch,_0x241c4d['leftLunchPkNum'])){_0x20282d[_0x4099('40','0Y(h')](_0x21904f);console[_0x4099('41','QcqU')](_0x492955['WugQB']);await _0x492955['nLMWw'](_0x2e5d63,_0x21904f,_0xe7ec4e['Pin'],_0xe7ec4e[_0x4099('42','OmZ%')]);}}else{continue;}}}else{console[_0x4099('41','QcqU')](_0x492955[_0x4099('43','D4^Z')]);}}else{console[_0x4099('44','(Ril')](_0x492955[_0x4099('45','6L5!')]);}console[_0x4099('41','QcqU')](_0x4099('46','eTUn'));_0x241c4d=await _0x492955['rAbdv'](getUserPkInfo,_0xe7ec4e[_0x4099('20','SnX$')]);if(_0x492955[_0x4099('47','D[l6')](_0x492955[_0x4099('48','Eg8n')](_0x241c4d[_0x4099('49','QcqU')],countreceive),0x0)){if(_0x53bd35){for(let _0x3ba439=0x0;_0x3ba439<_0x53bd35['length'];_0x3ba439++){let _0x21904f=_0x53bd35[_0x3ba439]['PkPin'];let _0x490f1a=_0x53bd35[_0x3ba439][_0x4099('4a','Htxl')];let _0x3dc8e7=_0x53bd35[_0x3ba439]['Score'];let _0x434930=0x1;if(_0x492955['QWZOK'](_0x20282d[_0x4099('4b','64zQ')](_0x21904f),-0x1)){continue;}if(_0x492955['zitpI'](_0x391234,null)&&_0x492955[_0x4099('4c','%rUj')](_0x391234['indexOf'](_0x21904f),-0x1)){_0x434930=0x1;}else{_0x434930=0x2;}_0x492955[_0x4099('4d','V0En')](sleep,0x3e8);console[_0x4099('4e','[Roi')](_0x492955['BSVAn'](_0x492955[_0x4099('4f','kZsd')](_0x492955[_0x4099('50','QcqU')](_0x492955['MJIBD'](_0x492955[_0x4099('51','hBb$')],_0x21904f)+_0x492955[_0x4099('52','boFE')],_0x3dc8e7),_0x492955[_0x4099('53','&h%R')]),_0x119ff4));if(_0x492955[_0x4099('54','QdOi')](_0x3dc8e7,_0x119ff4)){if(_0x492955[_0x4099('55','(AXn')](countreceive,_0x241c4d[_0x4099('56','hBb$')])){console[_0x4099('1e','^T$b')](_0x4099('57','D4^Z'));await _0x492955[_0x4099('58','hBb$')](_0x26a201,_0x490f1a,_0xe7ec4e[_0x4099('59','boFE')],_0xe7ec4e['lkToken'],_0x434930);if(bcomplate){sleep(0x3e8);await _0x578eb3(_0x490f1a,_0xe7ec4e['Pin'],_0xe7ec4e[_0x4099('5a','NJlS')],0x1);}}}else{continue;}}console[_0x4099('5b',')OFr')](_0x492955[_0x4099('5c','Htxl')]);}else{console[_0x4099('2c','OmZ%')](_0x4099('5d','sv^*'));}}else{console[_0x4099('41','QcqU')](_0x492955[_0x4099('5e','0Y(h')]);}console[_0x4099('5f','boFE')](_0x4099('60','OmZ%'));let _0x443fa0=await _0x492955[_0x4099('61','wGxs')](getBoxRewardInfo,_0xe7ec4e[_0x4099('62','6GzH')]);if(_0x443fa0[_0x4099('63','wGxs')]){for(let _0x1d6651=0x0;_0x492955['EXpXL'](_0x1d6651,_0x443fa0[_0x4099('64','TW&6')][_0x4099('65','SnX$')]);_0x1d6651++){let _0x9eec86=_0x443fa0['awards'][_0x1d6651];if(_0x492955['xlJND'](_0x9eec86[_0x4099('66','yNM%')],0x0)){if(_0x443fa0['totalWins']>=_0x9eec86[_0x4099('67','QdOi')]){console[_0x4099('68','D4^Z')](_0x492955['mIldN']+_0x9eec86[_0x4099('69','f8$l')][0x0][_0x4099('6a','a*U0')]);await sendBoxReward(_0x9eec86['id'],_0xe7ec4e['Pin']);}}}}console[_0x4099('6b','yNM%')](_0x492955[_0x4099('6c','%naN')]);}};function _0x2e5d63(_0x13c4b2,_0x37b1a3,_0x5d2503,_0x537b6f=0x2){var _0x239f51={'pFqiJ':_0x492955['RXXJC'],'cepGL':function(_0x4ba80d,_0x432338){return _0x492955[_0x4099('6d','TW&6')](_0x4ba80d,_0x432338);},'OZuLX':_0x492955[_0x4099('6e','%rUj')],'CNjdx':_0x492955[_0x4099('6f','zVo8')],'HtVKq':function(_0xa7cdb1,_0x40d378){return _0x492955[_0x4099('61','wGxs')](_0xa7cdb1,_0x40d378);}};console[_0x4099('70','fC$d')](_0x492955[_0x4099('71','wGxs')]);var _0x45f561=new Date()[_0x4099('72','SnX$')]();let _0x332fa4=_0x4099('73','NJlS')+_0x13c4b2+'\x22,\x22relation\x22:'+_0x537b6f+'}';const _0x513cc9=_0x492955[_0x4099('74','NJlS')](_0x1c899e,APPID,md5Key,_0x332fa4,_0x45f561);const _0xfbfccc=_0x4099('75','97GR')+APPID+_0x4099('76','QcqU')+_0x37b1a3+_0x4099('77','byu1')+_0x5d2503+'&sign='+_0x513cc9+_0x4099('78','zVo8')+_0x45f561;const _0x1551dc=_0x492955[_0x4099('79','FP7[')](getPostRequest,_0x492955['KEuMP'],_0xfbfccc,_0x332fa4);return new Promise(_0x4409f1=>{$['post'](_0x1551dc,(_0x257068,_0x54e20f,_0x5bea80)=>{try{if(_0x5bea80){let _0x2966a0=$['toObj'](_0x5bea80);if(_0x2966a0){_0x2966a0=_0x2966a0[_0x4099('7a','Q$gE')];if(_0x2966a0['msg']){if(_0x2966a0['state']>0x2){console['log'](_0x239f51['pFqiJ']+_0x2966a0['msg']);}}else{if(_0x2966a0['pkResult']){countlaunch++;console[_0x4099('15','N$oC')](_0x239f51['cepGL'](_0x4099('7b','kZsd'),$[_0x4099('7c','(AXn')](_0x2966a0)));console[_0x4099('39','p2g4')](_0x239f51[_0x4099('7d','%rUj')](_0x239f51[_0x4099('7e','V0En')],_0x2966a0[_0x4099('7f','zVo8')][_0x4099('80','hRCF')]));}else{console['log'](_0x239f51[_0x4099('81','(AXn')]('邀请成功需要等待接收PK：',$[_0x4099('82','boFE')](_0x2966a0)));}sleep(0x3e8);}}}else{console[_0x4099('83','wGxs')](_0x239f51[_0x4099('84','byu1')]+_0x5bea80);}}catch(_0x335812){console[_0x4099('85','ICUF')](_0x54e20f);}finally{_0x239f51[_0x4099('86','hRCF')](_0x4409f1,_0x5bea80);}});});};function _0x26a201(_0x34fcfb,_0x9bf8be,_0x2d91a9,_0x508097=0x2){var _0x3e9349={'hdrTR':function(_0x48bfa6,_0x2fc330){return _0x48bfa6>_0x2fc330;},'gXvQf':function(_0x5da696,_0x344d8c){return _0x492955[_0x4099('87','zVo8')](_0x5da696,_0x344d8c);},'mbbiL':function(_0x1a91aa,_0x40b38c){return _0x492955['PvhsS'](_0x1a91aa,_0x40b38c);},'ZhPtt':_0x492955[_0x4099('88','[Roi')],'tLaLV':function(_0x360eb9,_0x23bccd){return _0x492955[_0x4099('89','D4^Z')](_0x360eb9,_0x23bccd);}};console['log'](_0x492955[_0x4099('8a','p2g4')]);var _0x37ced3=new Date()[_0x4099('8b','sv^*')]();let _0x40dd99=_0x4099('8c','xfFy')+_0x34fcfb+'\x22,\x22relation\x22:'+_0x508097+'}';const _0x4c8b04=_0x492955[_0x4099('8d','p2g4')](_0x1c899e,APPID,md5Key,_0x40dd99,_0x37ced3);const _0x245bc5='appId='+APPID+_0x4099('8e','D4^Z')+_0x9bf8be+_0x4099('8f','QcqU')+_0x2d91a9+'&sign='+_0x4c8b04+_0x4099('90','hRCF')+_0x37ced3;const _0x2f0a6d=_0x492955[_0x4099('91','zVo8')](getPostRequest,_0x492955['cVuRm'],_0x245bc5,_0x40dd99);return new Promise(_0x2f9c9a=>{$[_0x4099('92','^T$b')](_0x2f0a6d,(_0x554b06,_0x26face,_0x13f112)=>{try{if(_0x13f112){let _0x5de130=$['toObj'](_0x13f112);if(_0x5de130){_0x5de130=_0x5de130[_0x4099('93','byu1')];if(_0x5de130['msg']){if(_0x3e9349[_0x4099('94','byu1')](_0x5de130[_0x4099('95','a*U0')],0x2)){console[_0x4099('15','N$oC')](_0x3e9349['gXvQf']('被动邀请失败：',_0x5de130[_0x4099('96','Eg8n')]));bcomplate=![];}}else{if(_0x5de130[_0x4099('97','D4^Z')]){countreceive++;console['log'](_0x4099('98','yNM%')+$[_0x4099('99','fC$d')](_0x5de130));}else{bcomplate=!![];console['log'](_0x3e9349[_0x4099('9a','F6#y')](_0x3e9349['ZhPtt'],$['toStr'](_0x5de130)));}}}}else{bcomplate=![];console[_0x4099('9b','a*U0')](_0x4099('9c','rwdk')+_0x13f112);}}catch(_0x5b9741){console[_0x4099('6b','yNM%')](_0x26face);}finally{_0x3e9349[_0x4099('9d','%rUj')](_0x2f9c9a,_0x13f112);}});});};function _0x578eb3(_0x5ca49a,_0x3bd7ff,_0x152bc4,_0x1fe343){var _0x421bb2={'BvkPa':'当前胜场:','VewmR':function(_0x2e9949,_0x39a603){return _0x2e9949+_0x39a603;},'ShKOQ':function(_0xa6d235,_0x5a0efb){return _0xa6d235+_0x5a0efb;},'bBEUd':_0x492955['xAkmL'],'NhuEM':function(_0x4ada6d,_0x3c111c){return _0x492955[_0x4099('9e','NJlS')](_0x4ada6d,_0x3c111c);},'wAYto':'PK结果出错','nZKDW':function(_0x418522,_0x80b5ce){return _0x492955[_0x4099('9f','OmZ%')](_0x418522,_0x80b5ce);},'SzmuQ':function(_0x1ebe9c,_0x3853c1,_0x2ad658,_0x58da3e,_0x43d0d0){return _0x1ebe9c(_0x3853c1,_0x2ad658,_0x58da3e,_0x43d0d0);},'gvocK':function(_0x441625,_0x5ebf2c,_0xf9bb92,_0x31a048){return _0x492955[_0x4099('a0','0Y(h')](_0x441625,_0x5ebf2c,_0xf9bb92,_0x31a048);}};console['log'](_0x4099('a1','eTUn'));return new Promise(_0x4ba7c5=>{var _0x26c44c=new Date()[_0x4099('a2','V0En')]();let _0x56845f=_0x4099('a3','rwdk')+_0x5ca49a+'\x22}';const _0x446cfa=_0x421bb2[_0x4099('a4','eTUn')](_0x1c899e,APPID,md5Key,_0x56845f,_0x26c44c);const _0x1b698c=_0x4099('a5',')OFr')+APPID+_0x4099('a6','hBb$')+_0x3bd7ff+_0x4099('a7','SnX$')+_0x152bc4+_0x4099('a8','(Ril')+_0x446cfa+'&t='+_0x26c44c;const _0x3b0ab1=_0x421bb2[_0x4099('a9','(Ril')](getPostRequest,_0x4099('aa','%naN'),_0x1b698c,_0x56845f);$[_0x4099('ab','6L5!')](_0x3b0ab1,(_0x31cf7a,_0x568385,_0x3a51e7)=>{try{if(_0x3a51e7){let _0xef51ba=$[_0x4099('ac','N$oC')](_0x3a51e7);if(_0xef51ba){_0xef51ba=_0xef51ba[_0x4099('ad','hBb$')];if(_0xef51ba['state']==0x1){if(_0xef51ba[_0x4099('ae','FP7[')]){if(_0x1fe343==0x0){console[_0x4099('af','sv^*')](_0x421bb2[_0x4099('b0','eTUn')]+_0xef51ba[_0x4099('b1','c@TQ')][_0x4099('b2','N$oC')]);}else{console[_0x4099('44','(Ril')](_0x421bb2['VewmR'](_0x421bb2[_0x4099('b3','kZsd')],_0xef51ba[_0x4099('7f','zVo8')][_0x4099('b4','rwdk')]));}}countreceive++;}else{console[_0x4099('b5','%rUj')](_0x421bb2[_0x4099('b6','V0En')](_0x421bb2['bBEUd'],$[_0x4099('7c','(AXn')](_0xef51ba)));}}}}catch(_0x2eeeb7){console[_0x4099('b7','xfFy')](_0x421bb2[_0x4099('b8','rwdk')](_0x421bb2[_0x4099('b9','f8$l')],$[_0x4099('ba','6OO]')](_0x568385)));}finally{_0x421bb2[_0x4099('bb','%rUj')](_0x4ba7c5,_0x3a51e7);}});});}function _0x1c899e(_0x294ec8,_0x8b7467,_0x1a4cac,_0x3cb7a1,_0x1c498f=0x0){let _0x752316;if(_0x492955[_0x4099('bc','N$oC')](_0x1c498f,0x0)){_0x752316=_0x294ec8+'_'+_0x8b7467+'_'+_0x1a4cac+'_'+_0x3cb7a1;}else{_0x752316=_0x294ec8+'_'+_0x8b7467+'__'+_0x3cb7a1;}return $['md5'](_0x752316);}function _0x5cc72a(_0x472903,_0x27ca39){var _0x2364fe={'caxLR':function(_0x5285b4,_0x386cda){return _0x5285b4+_0x386cda;},'EquPs':_0x492955[_0x4099('bd',')OFr')],'nyizj':function(_0xe0ba5,_0x22c7c4){return _0x492955['wjdzb'](_0xe0ba5,_0x22c7c4);},'cAbCn':function(_0x214ccd,_0x3c4969){return _0x492955[_0x4099('be','Q$gE')](_0x214ccd,_0x3c4969);}};return new Promise(_0x2421fe=>{var _0x334380=new Date()['getTime']();const _0x5c82ce=_0x1c899e(APPID,md5Key,'',_0x334380,0x1);const _0x584b23=_0x4099('bf','TW&6')+_0x27ca39+_0x4099('c0','%Kwb')+APPID+'&lkEPin='+_0x472903+_0x4099('c1','byu1')+_0x5c82ce+_0x4099('c2','wGxs')+_0x334380;const _0xdc3c5c=_0x492955['ZmvzW'](getGetRequest,_0x492955[_0x4099('c3','(Ril')],_0x584b23,0x0);$['get'](_0xdc3c5c,(_0x3ad30e,_0x5df35f,_0x1d3cb3)=>{let _0x5f64eb;try{if(_0x1d3cb3){_0x5f64eb=$['toObj'](_0x1d3cb3);_0x5f64eb=_0x5f64eb[_0x4099('c4','SnX$')];if(_0x5f64eb){console[_0x4099('c5','64zQ')](_0x2364fe[_0x4099('c6','Htxl')](_0x2364fe[_0x4099('c7','kZsd')],_0x5f64eb));_0x2364fe['nyizj'](_0x2421fe,_0x5f64eb);}}}catch(_0x25168d){console['log'](_0x5df35f);}finally{_0x2364fe[_0x4099('c8','byu1')](_0x2421fe,_0x5f64eb);}});});}function _0x41d94e(_0x498821,_0xf8e39b){const _0x2aa418='actId=9&appId='+_0x498821+_0x4099('8e','D4^Z')+_0xf8e39b;const _0x364906=_0x492955[_0x4099('c9','p2g4')](getGetRequest,_0x492955[_0x4099('ca','a*U0')],_0x2aa418);return new Promise(_0x22d35b=>{$[_0x4099('cb','F*in')](_0x364906,(_0x41f82b,_0x1dad9e,_0x21054a)=>{let _0x16998a=0x0;try{if(_0x21054a){let _0x5f5db0=$['toObj'](_0x21054a);if(_0x5f5db0){_0x16998a=_0x5f5db0[_0x4099('cc','f8$l')];}}}catch(_0xe94478){console[_0x4099('cd','byu1')](_0x1dad9e);}finally{_0x22d35b(_0x16998a);}});});}function _0x4a960a(_0x2d3f92,_0x30106e){var _0x1c6208={'aMOpy':function(_0x44044c,_0x15983e){return _0x492955[_0x4099('ce','c@TQ')](_0x44044c,_0x15983e);}};const _0x5600a9='actId=9&appId='+_0x2d3f92+_0x4099('cf','ICUF')+_0x30106e;const _0x12394f=getGetRequest(_0x492955[_0x4099('d0','sv^*')],_0x5600a9);return new Promise(_0x5ecf21=>{$['get'](_0x12394f,(_0x16299a,_0x10e5d3,_0x3da15a)=>{let _0xfdbdf9=0x0;try{if(_0x3da15a){let _0x43ea26=$['toObj'](_0x3da15a);if(_0x43ea26){_0xfdbdf9=_0x43ea26[_0x4099('d1','%naN')];}}}catch(_0xf52cb3){console['log'](_0x10e5d3);}finally{_0x1c6208['aMOpy'](_0x5ecf21,_0xfdbdf9);}});});}function _0x489f87(_0x23c3ce){var _0x5e4e41={'myCUC':function(_0x4c2d29,_0x45deb9){return _0x492955['wjdzb'](_0x4c2d29,_0x45deb9);}};const _0x3286d6=_0x4099('d2','F6#y');const _0x44590e=_0x4099('d3',')OFr');const _0x3f57c1={'Host':_0x4099('d4','yNM%'),'Content-Type':_0x492955[_0x4099('d5','Q$gE')],'Connection':_0x492955[_0x4099('d6','6L5!')],'Accept':'\x20*/*','User-Agent':_0x492955['nQmqj'],'Accept-Language':_0x492955['kUAGH']};let _0x22af3f={'url':_0x3286d6,'method':_0x44590e,'headers':_0x3f57c1,'body':$[_0x4099('d7','F6#y')](_0x23c3ce)};return new Promise(_0x268547=>{$['post'](_0x22af3f,(_0x197060,_0xf82e1f,_0x59b42a)=>{try{if(_0x59b42a){console['log'](_0x4099('d8','OmZ%')+_0x59b42a);}}catch(_0x328824){console[_0x4099('68','D4^Z')](_0x328824);}finally{_0x5e4e41['myCUC'](_0x268547,_0x59b42a);}});});};function _0x1e4d82(_0x3a48bf){var _0x411a86={'XcBcP':function(_0x3bdb87,_0x2b05ce){return _0x492955['QGfHm'](_0x3bdb87,_0x2b05ce);},'DXlqY':function(_0x2ad8fe,_0x3a36f4){return _0x492955[_0x4099('d9','Q$gE')](_0x2ad8fe,_0x3a36f4);},'Okgar':function(_0x174e3e,_0x16aebe){return _0x492955[_0x4099('da','[Roi')](_0x174e3e,_0x16aebe);},'HmzWd':_0x492955[_0x4099('db','c@TQ')],'luFeX':_0x492955[_0x4099('dc','Q$gE')]};return new Promise(_0x64e5f2=>{var _0x1d78b2={'KTMOM':function(_0x3cc8f9,_0x30bb58){return _0x411a86[_0x4099('dd','D[l6')](_0x3cc8f9,_0x30bb58);}};let _0x283b1b=_0x411a86[_0x4099('de','wGxs')](_0x411a86['Okgar']('https://api.scriptsjd.cf/api/JoyScore/CheckPin?',_0x4099('df','97GR')),_0x3a48bf);let _0x1cdb2c={'url':_0x283b1b,'headers':{'Host':_0x411a86[_0x4099('e0','Q$gE')],'Connection':_0x411a86[_0x4099('e1','97GR')],'Accept':'\x20*/*','User-Agent':'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/91.0.4433.0\x20Safari/537.36','Accept-Language':_0x4099('e2','ICUF')}};$[_0x4099('e3','p2g4')](_0x1cdb2c,(_0x46839b,_0x420df2,_0x4f571b)=>{try{if(_0x4f571b){_0x1d78b2['KTMOM'](_0x64e5f2,_0x4f571b);}}catch(_0x6c80aa){console[_0x4099('e4','D[l6')](_0x6c80aa);}finally{_0x64e5f2(_0x4f571b);}});});}function _0x59a79e(_0x2f763f,_0x3d7c64){var _0x56a4ff={'htiqY':function(_0x78ada3,_0x299a7f){return _0x492955[_0x4099('e5','zVo8')](_0x78ada3,_0x299a7f);},'sdsEC':function(_0x9db838,_0x1215da){return _0x492955[_0x4099('e6','eTUn')](_0x9db838,_0x1215da);},'zWSGb':_0x492955[_0x4099('e7','^T$b')],'czvnJ':_0x492955['pEVzR'],'QMGlp':_0x4099('e8','FP7[')};return new Promise(_0x4ef044=>{var _0x3fb6e5={'xjUGp':function(_0x2bb9ce,_0xc6ba3){return _0x56a4ff[_0x4099('e9','sv^*')](_0x2bb9ce,_0xc6ba3);},'UGwoJ':function(_0x501738,_0xdf18f5){return _0x56a4ff[_0x4099('ea','wGxs')](_0x501738,_0xdf18f5);}};let _0x48b865=_0x4099('eb','D[l6')+_0x2f763f+_0x4099('ec','%naN')+_0x3d7c64;let _0x3d57a7={'url':_0x48b865,'headers':{'Host':_0x56a4ff['zWSGb'],'Connection':'keep-alive','Accept':_0x56a4ff['czvnJ'],'User-Agent':_0x56a4ff['QMGlp'],'Accept-Language':'zh-cn'}};$[_0x4099('ed','wGxs')](_0x3d57a7,(_0x3e93be,_0x3add2a,_0x37a5f4)=>{try{if(_0x37a5f4){let _0x140216=$[_0x4099('ee','ICUF')](_0x37a5f4);_0x3fb6e5[_0x4099('ef','TW&6')](_0x4ef044,_0x140216);}}catch(_0x4696e3){console['log'](_0x4696e3);}finally{_0x3fb6e5[_0x4099('f0','6L5!')](_0x4ef044,_0x37a5f4);}});});}_0xb0011d[_0x4099('f1','%naN')]=_0x2a6026;}($);;_0xodo='jsjiami.com.v6';

!(async () => {

    if (!cookiesArr[0]) {
        $.msg(
            $.name,
            "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取",
            "https://bean.m.jd.com/", {
            "open-url": "https://bean.m.jd.com/"
        }
        );
        return;
    }
    for (let i = 0; i < cookiesArr.length; i++) {
        if (cookiesArr[i]) {
            cookie = cookiesArr[i];
            $.UserName = decodeURIComponent(
                cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]
            );
            $.index = i + 1;
            message = "";
            console.log(`\n******开始【京东账号${$.index}】${$.UserName}*********\n`);
            //await $.updatefriend();
            await $.main();
        }
    }
})()
    .catch((e) => {
        $.log("", `❌ ${$.name}, 失败! 原因: ${e}!`, "");
    })
    .finally(() => {
        $.done();
    })


//已改


//获取京享值分数
function getScore(fpin) {
    const mquery = `actId=9&appId=${APPID}&lkEPin=${fpin}`;
    const myRequest = getGetRequest('getScore', mquery);
    return new Promise((resolve) => {
        $.get(myRequest, (err, resp, res) => {
            let score = 0;
            try {
                if (res) {
                    let data = $.toObj(res);
                    if (data) {
                        score = data.data;
                    }
                }
            } catch (e) {
                console.log(resp);
            } finally {
                //  console.log("查询"+fpin+"分数  " + score );
                resolve(score);
            }
        });
    });
}



//获取用户PK余量信息
function getUserPkInfo(pin) {
    const mquery = `actId=9&appId=${APPID}&lkEPin=${pin}`;
    const myRequest = getGetRequest('getUserPkInfo', mquery);
    return new Promise((resolve) => {
        $.get(myRequest, (err, resp, res) => {

            try {
                if (res) {
                    let data = $.toObj(res);
                    data = data.data;
                    if (data) {
                        console.log(`${data.nickName}今天剩余主动邀请PK次数：${data.leftLunchPkNum} 被动邀请PK次数：${data.leftAcceptPkNum}`);
                        resolve(data);
                    }
                }
            } catch (e) {
                console.log("getUserPkInfo出错：" + resp);
            } finally {
                resolve();
            }
        });
    });
}
async function getFriendPinList(pin) {
    console.log("开始获取所有好友可以使用Pk列表中……");
    let allFriends = [];
    for (let i = 0; i < 100; i++) {
        let friends = await getUserFriendsPage(pin, i + 1);
        if (friends.length === 0) {
            console.log("好友列表到底了，共获取" + i + "页好友！！")
            break;
        }
        //console.log(`第${i+1}页`);
        for (let j = 0; j < friends.length; j++) {
            let item = friends[j];

            if (item.pkStatus == 2) {
                if (item.leftAcceptPkNum > 0 && item.leftLunchPkNum > 0) {
                    allFriends.push(item.friendPin);
                }
            }
        }
    }
    return allFriends;
}

//获取好友PK列表
function getUserFriendsPage(pin, pageNo) {
    //?actId=9&pageNo=2&pageSize=10&appId=dafbe42d5bff9d82298e5230eb8c3f79&lkEPin=13f5ef448152243c1e8c7a33f3b76dd20f296a206a12473f57d63d95f3be0534
    const mquery = `actId=9&pageNo=${pageNo}&pageSize=10&appId=${APPID}&lkEPin=${pin}`
    const myRequest = getGetRequest('getUserFriendsPage', mquery);
    return new Promise((resolve) => {
        $.get(myRequest, (err, resp, res) => {
            let data;
            try {
                if (res) {
                    data = $.toObj(res);
                    data = data.datas;
                    if (data) {
                        resolve(data);
                        //console.log("获取好友PK列表第" + pageNo + "页");
                    }
                }
            } catch (e) {
                console.log(resp);
            } finally {

                resolve(data);
            }
        });
    });
}


//已改
function getBoxRewardInfo(mypin) {
    return new Promise((resolve) => {
        const mquery = `actId=9&appId=${APPID}&lkEPin=${mypin}`;
        const myRequest = getGetRequest('getBoxRewardInfo', mquery);
        $.get(myRequest, (err, resp, res) => {
            try {

                if (res) {
                    let data = $.toObj(res);
                    if (data.success) {
                        // $.awards = data.data.awards;
                        //console.log($.toStr($.awards));
                        // $.totalWins=data.data.totalWins;
                        console.log("总胜场:" + data.data.totalWins);
                        resolve(data.data);
                    }

                }
            } catch (e) {
                console.log(resp);
            } finally {
                resolve(res);
            }
        });
    });
}

//已修复
function sendBoxReward(rewardConfigId, mypin) {
    return new Promise((resolve) => {
        console.log("进行开宝箱")
        const mquery = `rewardConfigId=${rewardConfigId}&actId=9&appId=${APPID}&lkEPin=${mypin}`
        const myRequest = getGetRequest('sendBoxReward', mquery);
        $.get(myRequest, (err, resp, res) => {
            try {
                console.log(res);
                if (res) {
                    let data = $.toObj(res);
                    if (data.success) {
                        for (let j = 0; j < data.datas.length; j++) {
                            console.log('获得奖励类型:' + data.datas[j].type + "京豆数量：" + data.datas[j].beanNum);
                        }

                    }

                }
            } catch (e) {
                console.log(resp);
            } finally {
                resolve(res);
            }
        });
    });
}

async function getPin() {
    return new Promise((resolve) => {
        let options = {
            "url": `https://jdjoy.jd.com/saas/framework/encrypt/pin?appId=${APPID}`,
            "headers": {
                "Host": "jdjoy.jd.com",
                "Origin": "https://prodev.m.jd.com",
                "Cookie": cookie,
                "Connection": "keep-alive",
                "Accept": "application/json, text/plain, */*",
                "User-Agent": "jdapp;iPhone;9.5.4;13.6;db48e750b34fe9cd5254d970a409af316d8b5cf3;network/wifi;ADID/38EE562E-B8B2-7B58-DFF3-D5A3CED0683A;model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
                "Accept-Language": "zh-cn",
                "Referer": "https://prodev.m.jd.com/"
            }
        };

        $.post(options, (err, resp, res) => {
            try {

                // console.log(res);
                if (res) {
                    let data = $.toObj(res);
                    if (data) {
                        let minfo = { Pin: data.data.lkEPin, lkToken: data.data.lkToken };
                        resolve(minfo);
                        // $.pin = data.data.lkEPin
                        // $.lkToken=data.data.lkToken
                    }
                }
            } catch (e) {
                console.log(e);
            } finally {
                resolve();
            }
        });
    });
};

function getToken() {
    return new Promise((resolve) => {
        let options = {
            "url": `https://jdjoy.jd.com/saas/framework/user/token?appId=${APPID}&client=m&url=pengyougou.m.jd.com`,
            "headers": {
                "Host": "jdjoy.jd.com",
                "Origin": "https://prodev.m.jd.com",
                "Cookie": cookie,
                "Connection": "keep-alive",
                "Accept": "application/json, text/plain, */*",
                "User-Agent": "jdapp;iPhone;9.5.4;13.6;db48e750b34fe9cd5254d970a409af316d8b5cf3;network/wifi;ADID/38EE562E-B8B2-7B58-DFF3-D5A3CED0683A;model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
                "Accept-Language": "zh-cn",
                "Referer": "https://prodev.m.jd.com/"
            }
        };
        $.post(options, (err, resp, res) => {
            let token;
            //console.log(JSON.stringify(res))
            try {
                if (res) {
                    let data = $.toObj(res);
                    if (data) {
                        token = data.data;
                    }

                }
            } catch (e) {
                console.log(e);
            } finally {
                resolve(token);
            }
        });
    });
};
function getGetRequest(type, query, checktype = 1) {
    let url;
    if (checktype == 0) {
        url = `https://pengyougou.m.jd.com/open/api/like/jxz/${type}?${query}`;
    } else {
        url = `https://pengyougou.m.jd.com/like/jxz/${type}?${query}`;
    }

    const method = `GET`;
    const headers = {
        'Accept': `*/*`,
        "Origin": `https://game-cdn.moxigame.cn`,
        'Sec-Fetch-Site': `cross-site`,
        'Sec-Fetch-Mode': `cors`,
        'Sec-Fetch-Dest': `empty`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Referer': `https://game-cdn.moxigame.cn/`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `pengyougou.m.jd.com`,
        "User-Agent": "jdapp;iPhone;9.5.4;13.6;db48e750b34fe9cd5254d970a409af316d8b5cf3;network/wifi;ADID/38EE562E-B8B2-7B58-DFF3-D5A3CED0683A;model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
        'Accept-Language': `zh-cn`
    };
    //console.log(url)
    return { url: url, method: method, headers: headers };
};

function getPostRequest(type, query, body) {
    const url = `https://pengyougou.m.jd.com/open/api/like/jxz/${type}?${query}`;
    const method = `POST`;
    const headers = {
        'Accept': `*/*`,
        'Origin': `https://game-cdn.moxigame.cn`,
        'Sec-Fetch-Site': `cross-site`,
        'Sec-Fetch-Mode': `cors`,
        'Sec-Fetch-Dest': `empty`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Content-Type': `application/json;charset=UTF-8`,
        'Host': `pengyougou.m.jd.com`,
        'Connection': `keep-alive`,
        "User-Agent": "jdapp;iPhone;9.5.4;13.6;db48e750b34fe9cd5254d970a409af316d8b5cf3;network/wifi;ADID/38EE562E-B8B2-7B58-DFF3-D5A3CED0683A;model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
        'Referer': `https://game-cdn.moxigame.cn/`,
        'Accept-Language': `zh-cn`
    };
    //console.log(url)
    return myRequest = { url: url, method: method, headers: headers, body: body };
};


function jsonParse(str) {
    if (typeof str == "string") {
        try {
            return JSON.parse(str);
        } catch (e) {
            console.log(e);
            $.msg($.name, "", "不要在BoxJS手动复制粘贴修改cookie");
            return [];
        }
    }
};

function sleep(timeout) {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};



// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
