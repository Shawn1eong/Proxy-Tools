const me = "/v4/users/me";
const shop = "/v4/shop";
const search = "/v4/search/products";
var url = $request.url;

if ($request.method == 'OPTIONS'){
 $done({});
}else{
var body = $response.body;
 if (url.indexOf(me) != -1) {
  body = body.replace(/memberships":\\[\\]/g, 'memberships":[{"endAt":2493043200,"id":"1","name":"普通会员","ownership":"temporary","startAt":1587425677,"usageType":"unlimited"}]');
}
if (url.indexOf(shop) != -1) {
  body = body.replace(/ownership":"\w+"/g, 'ownership":"free"').replace(/usageType":"\w+"/g, 'usageType":"unlimited"').replace(/remark":"[^"]+"/g, 'remark":"使用期限：永久"');
}
if (url.indexOf(search) != -1) {
 body = body.replace(/"enable":false/g, '"enable":true').replace(/"style":"membership_only"/, '"style":"none"');
}
$done({ body });
}