/*
黄油相机

QX1.0.10：
[rewrite_local]
https:\/\/api4\.bybutter\.com\/v4\/* url script-response-body hyxj.js

Surge4:
[Script]
http-response https:\/\/api4\.bybutter\.com\/v4\/* requires-body=1,max-size=0,script-path=hyxj.js

[MITM]
hostname = %APPEND% api4.bybutter.com
*/

body = $response.body.replace(/\"ownership\":\"\w+\"/g, '\"ownership\":"free"').replace(/\"usageType\":\"\w+\"/g, '\"usageType\":"unlimited"').replace(/\"memberships\":\[\]/g, "\"memberships\":[{\"endAt\":1780697166,\"id\":\"1\",\"name\":\"普通会员\",\"ownership\":\"temporary\",\"startAt\":1587654321,\"usageType\":\"unlimited\"}]").replace(/false/g, "true")
$done({body});