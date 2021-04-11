/*
利用 GitHub Education 解锁 Working Copy

<<<<<<< HEAD
启用此脚本后再 Safari 打开 https://workingcopy.app/education/ 点击「tap here to access all pro features.」中的 here 跳转到 Working Copy，登录自己的 GitHub 账号即可解锁

Workingcopy = type=http-response,pattern=^https:\/\/education\.github\.com\/api\/user$,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ShaGuar-svg/Proxy-Tools/master/Script/Crack/workingcopy.js,script-update-interval=0
=======
启用此脚本后再 Safari 打开   https://workingcopy.app/education/ 点击「tap here to access all pro features.」中的 here 跳转到 Working Copy，登录自己的 GitHub 账号即可解锁

http-response ^https:\/\/education\.github\.com\/api\/user$ requires-body=1,max-size=0,script-path=scripts/WorkingCopy.js
>>>>>>> 7a0cf995eb46d1be01b212f07952055137d1ab09

MitM = education.github.com

作者 @ImSingee，请勿外传
*/

<<<<<<< HEAD
$done({body: '{"student": true}'})
=======
$done({body: '{"student": true}'})
>>>>>>> 7a0cf995eb46d1be01b212f07952055137d1ab09
