
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/order/device/vip';


if (url.indexOf(vip) != -1) {
    obj.data["is_vip"] = "Y";
    obj.data["end_time_fmt"] = "2099-12-12";
    body = JSON.stringify(obj);
}

$done({body});
