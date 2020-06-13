const path1 = "/interface/sdk/sdkad.php";
const path2 = "/wbapplua/wbpullad.lua";

let url = $request.url;
let body = $response.body;

if (url.indexOf(path1) != -1) {
  let re = /\{.*\}/;
  body = body.match(re);
  body = JSON.parse(body);
  if (body.background_delay_display_time) body.background_delay_display_time = 60 * 60 * 24 * 365;
  if (body.show_push_splash_ad) body.show_push_splash_ad = false;
  if (body.ads) body.ads = [];
  body = JSON.stringify(body) + 'OK';
}

if (url.indexOf(path2) != -1) {
  body = JSON.parse(body);
  if (body.cached_ad && body.cached_ad.ads) body.cached_ad.ads = [];
  body = JSON.stringify(body);
}

$done({
  body
});
