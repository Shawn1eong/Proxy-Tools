/*
Busuu = type=http-response,pattern=^https:\/\/api\.busuu\.com\/users\/me,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/langkhach270389/Surge-LK/main/scripts/langkhach/busuu.vip.js,script-update-interval=0
[MITM]
hostname = api.busuu.com
*/

var obj = JSON.parse($response.body);
obj.data.is_premium= true;
obj.data.access.tier= "plus";
$done({body: JSON.stringify(obj)});
