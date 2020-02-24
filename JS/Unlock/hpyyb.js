/*
很皮语音包 Unlock by @Sfly
关于Sfly:https://www.wpfphp.top
app下载地址:AppStore 很皮语音包

注意⚠️:仅供学习交流，切勿用作商业用途

[rewrite_local]
Surge4：
http-response https:\/\/api3\.henpi\.vip\/app\/(user\/get_userinfo|label\/music_type_list) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/shaGuar-svg/Ru1e/master/JS/Unlock/hpyyb.js

QX：
^https:\/\/api3\.henpi\.vip\/app\/(user\/get_userinfo|label\/music_type_list) url script-response-body hpyyb.js

Surge & QX MITM = api3.henpi.vip

*/



let obj = JSON.parse($response.body);
let url = $request.url;
const user = '/app/user/get_userinfo';
const vip = '/app/label/music_type_list';

if (url.indexOf(user) != -1) {
    obj.data["userinfo"]["is_inspector"] = "yes";
    obj.data["userinfo"]["is_music_pay_member"] = "yes";
    obj.data["userinfo"]["nickname"] = "Sfly";
    obj.data["userinfo"]["imgphoto"] = "https://qiniu.henpi.vip/img/henpi/imgphoto/158253940871375.jpg_180.180";
} 
if (url.indexOf(vip) != -1) {
    obj.data["list"]["hasPayThisMusicType"] = "yes";
}
$done({body: JSON.stringify(obj)});