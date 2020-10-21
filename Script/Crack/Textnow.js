/*
^https:\/\/api\.textnow\.me\/api2.0\/users\/.* 
[MITM]
hostname = api.textnow.me
*/
var obj = JSON.parse($response.body); 
obj['show_ads'] = false;
obj['premium_calling'] = true;
$done({body: JSON.stringify(obj)});



