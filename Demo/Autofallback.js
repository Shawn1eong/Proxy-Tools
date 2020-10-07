/*

Surge Group 嵌套 Autotest（套娃模式）
https://community.nssurge.com/d/37-group-autotest-urltest-fallback/8
// cron "* * * * *" script-path=autofallback.js

*/

let fallbackGroup = 'GfwProxy';
let primaryPolicy = 'HK';
let secondaryPolicy = 'TW';
let options = {
url: "http://cp.cloudflare.com/generate_204",
 headers: {
  'X-Surge-Policy': primaryPolicy
 }
}
$httpClient.head(options, function(err, res, data) {
 if (err) {
  console.log(${fallbackGroup} fallback to ${secondaryPolicy})
  $surge.setSelectGroupPolicy(fallbackGroup, secondaryPolicy);
  $done()
 } else {
  $surge.setSelectGroupPolicy(fallbackGroup, primaryPolicy);
  $done()
 }
})
