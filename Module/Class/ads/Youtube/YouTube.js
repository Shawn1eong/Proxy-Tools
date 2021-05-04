/*
[Script]
Youtube_ads = type=http-response,pattern=^https?:\/\/.+?\.googlevideo\.com\/.+&(oad|ctier)=(?!A),requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Shawn1eong/Proxy-Tools/master/Script/Adblock/YouTube.js,script-update-interval=0

[MITM]
hostname = *.googlevideo.com,youtubei.googleapis.com,www.youtube.com,www.googleapis.com,youtubei.googleapis.com,s.youtube.com,play.googleapis.com,
*/

if ($request.url.indexOf("&oad") != -1) {
  $done({ response: {body: ""} });
} else if ($request.url.indexOf("&ctier") != -1) {
  let url = $request.url.replace(/ctier=[A-Z]/, "ctier=A");
  $done({ response: { status: 302, headers: { Location: url } } });
} else {
  $done({})
}