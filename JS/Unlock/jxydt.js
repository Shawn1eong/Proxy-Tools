# #js写法格式
/*
[rewrite_local]
Surge4：
http-response https:\/\/vipapi\.jxedt\.com\/vip\/check requires-body=1,max-size=0,script-path=jxydt.js

QX：
^https:\/\/vipapi\.jxedt\.com\/vip\/check url script-response-body jxydt.js

MITM = vipapi.jxedt.com
*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const pro = '/vip/check';


if (url.indexOf(pro) != -1) {
    obj.vipstatus = 1;
    obj.isexpert = true;
    obj.endtime = 2022-11-02;
    obj.isexpert = true;
    obj.vipResidualDay = 999
    body = JSON.stringify(obj);
} 
$done({body});