/*

Quantumult X
unlock Shapr:3D PRO

[rewrite_local]
# unlock Shapr3D
^https?:\/\/prod\.api\.shapr3d\.com\/user-management\/profile-with-device 

surge
# > Sharp3D Pro
Sharp:3D Pro = type=http-response,pattern=^https:\/\/prod\.api\.shapr3d\.com\/user-management\/profile-with-device,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/langkhach270389/Scripting/master/Sharp%3A3D%20Pro.js,script-update-interval=0

[mitm]
hostname = prod.api.shapr3d.com,

*/

let obj = JSON.parse($response.body);
obj.subscriptionType = "pro_year";
obj.subscriptionExpires = "2100-01-01T00:00:00.000Z";
$done({body: JSON.stringify(obj)});