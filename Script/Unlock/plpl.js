var obj = JSON.parse($response.body);
if ($request.url.indexOf("/v1/user/info") != -1){
obj.response.level = 1;
obj.response.expiry = 1777594638;
obj.response.show_time = 0;
}
$done({body: JSON.stringify(obj)});