# Ru1e
Surge&amp;Quantumult X

# Scritp Policy
Surge 代理服务器将由脚本处理，且可具有多个 IP 地址。

 ## 样例
配置：
```
[Proxy]
HTTP = http, custom.com, 443, username, password
 [Host]
custom.com = script:server
 [Script]
dns server script-path=example.js
```
脚本：
```
var server = [
  "123.123.123.0", // HK
  "123.123.123.1", // KR
  "123.123.123.2" // JP
];
$done({addresses: server, ttl: 600});
```
### 改进
一、代理服务器并发
Surge 会直接并发向所有代理服务器进行 TCP 握手，并选择最快完成握手的连接进行后续请求。

 二、自定义 TTL 时间
让代理服务器获得更长久的生存时间，节省 DNS 查询浪费的时间。

 三、节点异常处理
如果节点出现问题会尝试连接其他地址，且遇到问题节点能直接绕过。

 四、配置更加灵活
可以把 Scritp Policy 当作是内置延迟测试策略组，可进行多层嵌套。

 五、简化代理配置
同一个国家只需要写一个代理声明，再把同一个国家的代理服务器写进脚本。

 #### 拓展
- 脚本中只能填入 IP 地址，可先测速后到 DNS 结果处查看。
- 使用 Scritp Policy 需除代理服务器外，其他参数都一致。

 ```
[Proxy]
HK = http, custom.hk, 443, username, password
KR = http, custom.kr, 443, username, password
JP = http, custom.jp, 443, username, password
 [Proxy Group]
Proxy = select, HK, KR, JP
Auto = url-test, HK, KR, JP, url = http://www.gstatic.com/generate_204
Fallback = fallback, HK, KR, JP, url = http://www.gstatic.com/generate_204
 [Host]
custom.hk = script:hk
custom.kr = script:kr
custom.jp = script:hk
 [Script]
dns hk script-path=HK.js
dns kr script-path=KR.js
dns jp script-path=JP.js

## Scripting
脚本功能需要 Surge iOS TF/Surge Mac 3.3.0 版本。

 ### 抖音
- 移除插播广告
- 移除电商推广
- 移除视频投票
- 下载权限视频
- 视频去水印保存

 ```
[Script]
http-response ^https://aweme(-eagle)?.snssdk.com/aweme/v\d/(.*/)?(feed|post)/ requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/shaGuar-svg/Ru1e/master/JS/Unlock/Aweme.js
 [MITM]
hostname = aweme*.snssdk.com
```

 ### 皮皮虾
- 去除应用内广告

 ```
[Script]
http-response ^https?://[a-z]+.snssdk.com/bds/feed/stream/ requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/shaGuar-svg/Ru1e/master/JS/Unlock/Super.js
 [MITM]
hostname = ??.snssdk.com
```

 ### 人人视频
- 点亮活动勋章
- 激活原画权限
- 拦截启动广告
- 屏蔽版本检测

 ```
[Rule]
URL-REGEX,^https?:\/\/api\.rr\.tv\/(ad|getLastest),REJECT
 [Script]
http-response ^https://api.rr.tv/.*(profile|Piece)$ requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/shaGuar-svg/Ru1e/master/JS/Unlock/RRtv.js
 [MITM]
hostname = api.rr.tv
```
### 南瓜电影
- 激活会员权限
- 拦截启动广告
- 去除应用内横幅

 ```
[Script]
http-response ^https://p.doras.api.vcinema.cn/v5.0/(user|splash|activity)/\w+(/)?$ requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/shaGuar-svg/Ru1e/master/JS/Unlock/Vcinema.js
 [MITM]
hostname = p.doras.api.vcinema.cn
```
### 微信公众号
- 移除文章底部推广

 ```
[Script]
http-response ^https://mp.weixin.qq.com/mp/getappmsgad requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/shaGuar-svg/Ru1e/master/JS/Unlock/WeChat.js
 [MITM]
hostname = mp.weixin.qq.com
```

 ### DNS 污染
- 缓解 DNS 污染问题

 ```
[Rule]
SCRIPT,falied,PROXY,requires-resolve
 [Script]
rule falied script-path=https://raw.githubusercontent.com/shaGuar-svg/Ru1e/master/JS/Unlock/failed.js
```

 ### App Store
- 解决应用下载异常缓慢问题

 ```
[Host]
iosapps.itunes.apple.com = script:stored
 [Script]
dns stored script-path=https://raw.githubusercontent.com/shaGuar-svg/Ru1e/master/JS/Unlock/stored.js

### 短视频去水印

抖音去水印 `api.amemv.com`   
TikTok 去水印 `api*.musical.ly` `api*.tiktokv.com`
```
http-request ^https:\/\/[\s\S]*/aweme\/v1\/play\/\?video script-path=https://raw.githubusercontent.com/shaGuar-svg/Ru1e/master/JS/Unlock/Amark.js
```

 火山去水印 `api.huoshan.com`
```
http-request ^https:\/\/api\.huoshan\.com\/hotsoon\/item\/video\/_source\/\?video script-path=https://raw.githubusercontent.com/shaGuar-svg/Ru1e/master/JS/Unlock/Amark.js
```

 微视去水印 `null`
```
http-request ^http:\/\/v\.weishi\.qq\.com/\w+\.f7\d{2}\.mp4 script-path=https://raw.githubusercontent.com/shaGuar-svg/Ru1e/master/JS/Unlock/Amark.js
```

 ### 抖音短视频


 ```
[Script]
http-response ^https:\/\/[\s\S]*\/v1\/(aweme\/)?(feed|post)\/ script-path=https://raw.githubusercontent.com/shaGuar-svg/Ru1e/master/JS/Unlock/Aweme.js,requires-body=true,max-size=524288
 [MITM]
hostname = aweme*.snssdk.com
```

 ### 人人视频

 ```
[Script]
http-response ^https:\/\/api\.rr\.tv\/.*(profile|Medal) script-path=https://raw.githubusercontent.com/shaGuar-svg/Ru1e/master/JS/Unlock/RRtv.js,requires-body=true
http-response ^https:\/\/api\.rr\.tv\/.*(channel|Choice|Feed) script-path=https://raw.githubusercontent.com/shaGuar-svg/Ru1e/master/JS/Unlock/RRtv-ad.js,requires-body=true,max-size=524288
 [MITM]
hostname = api.rr.tv
```

 ### 微信公众号
```
[Script]
http-response ^https:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad script-path=https://raw.githubusercontent.com/shaGuar-svg/Ru1e/master/JS/Unlock/WeChat.js,requires-body=true
 [MITM]
hostname = mp.weixin.qq.com