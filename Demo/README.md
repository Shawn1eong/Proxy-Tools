by 微信公众号<iosplay>

# > 常识·数据类型
```
var a = "iPhone X";
var b = 'Huawei 5G';
var c = '1234';
var d = 1234;
var e = true;
var f = ["apple", false, 10086];
var g = 
{"name":"masaka", "user":{"id":1314159, "vip":[{"isPro":false, "time":"1995"}]}}
```

*JavaScript*，或者说EMCAScript的数据类型有`String字符串`，像是a、b、c，英式双引号或单引号为边界的便是字符串；

`Number数值`，d；`Boolean布尔值`，只有true和false；Undefined未定义值和null空对象，这两个可以先不用管。

最重要的一个概念是`Object对象`，`g`是普通对象，无序，只能用点符号或属性名索引，比如`g.name`或`g["name"]`都能获得"masaka"。


`g`其实就是我们常遇见的响应消息体`json`格式的字典形式，包含**key:value**这样成双成对的键值，只不过JS里被当成对象处理，内里是叫做属性和属性值（称谓不一样而已）。

**F**是数组对象(我们一般只说数组Array)，有序，以方括号[起始于0的数字位置]索引，例如f[0]、f[2]分别得到"apple"、10086。              
你从上面的示例图发现了吧，`"user"`键的值是一整个字典，而字典里又有数组作为值，数组里又包含字典。



未知的响应体若以字典形式的，可能就会这样不断地多层次地数组字典互为嵌套下去直到恐怖的尽头，形成非常复杂的情况，那么真的有可能写出通用的代码来识别它们吗，然后还以这种索引的方式去调试？

```
function key() {
 var obj = JSON.parse($response.body);
 // 判断语句格式 if(条件) {执行内容}
 // 这里是判断传入key()里的第一个参数有没有包含 @ 有就继续执行内部语句
 if (arguments[0].includes("@")) { 
   let ark = arguments[0].split("@");
//  声明变量有var、let、const，这里的let声明一个局部变量ark，它将无法被函数外部访问
//  split()方法将会对第一个参数作拆分，这里就以@拆分出来所有键，并且会作为数组赋值给ark
 
// 循环语句 for(初始化变量; 表达式条件; 符合表达式条件则循环){执行内容}
// ark.length可以判断ark里有多少个键，i++则递增，一开始是0，循环一次会增加 1
   for (i = 0; i < ark.length; i++) {
     obj[ark[i]] = arguments[1][i];
// 从ark[0]开始索引第一个键并来作为属性名索引对象obj内相应的属性值（也就是键值，js内称谓不一样而已），并重新以第二个参数的索引值来赋值          
   }
 } else {
   // 否则的情况，就只有一个键一个值的情况，用户不用输入 @
   obj[arguments[0]] = arguments[1];
 }
 $done({body:JSON.stringify(obj)});
}
// 最终只需用户在结尾按格式录入key("键1@键2……", [值1，值2……])
key("subscribed@subscriptionStatus@eligibleForFreeTrial", [true, "YEARLY_SUBSCRIBED", true])
```

这是 上节教程 最后给出的，在单层无嵌套字典里适用的代码，除掉注释行满打满算也就十行代码而已，虽然我说按照这个函数去添加多个判断和循环等结构就能造出普适的更通用的代码，但少说也得两百五十行以上。

并且，设计出最终让用户去录入的形式里，也肯定包含有让他们识别什么是字典数组嵌套的情形，存在这样高的学习成本不就本末倒置了吗？

而且，响应消息体难道只有字典的格式吗？



我们以  Instapaper^^高级体验 这个app为例，打开圈X的调试开关（平时可以关闭），并启动去抓一下它。

（由于走的是https，需要在配置文件编辑下[mitm]先添加其域名，你可以在hostname添加一个` *.*.*`,这样就能预先捕获所有https流量）



如果你还是用之前字典形式去调试就会以失败告终，因为它内里根本就不是key:value这样成对键值的情况。



它的文本载体其实是html格式的，内部也如你所见并非键值，而我们这里所需要调试的只有ipsubexp= （时效）和ipsub=0 （订阅）。



我们先回过头来看一下这个，我新添加了一个变量，看出g和gg的区别了吗，用typeof()方法进行类型识别，g是object对象，gg是string字符串。

由于gg内部已经使用了双引号，为了不容易混淆，我就用单引号作为边界把它框起来，使之变成了一个整体的字符串。

我想这里讲清楚一些什么呢？



我们在圈叉脚本里经常用到的这两句之意义，变量body实际上就等同于gg，是整整的一个字符串，而JSON.parse(body)又将这个字符串转变成了g的对象形式，前提是body在表面之下确实是以json字典的格式存储键值的。

那么我们为什么不直接操作字符串body，避开字典转换的步骤呢？

如果是为了唯一之精确，字典键值以层层索引的方式确实最不可能出错，但响应消息体格式如果并非json式样的，像上例 Instapaper^^高级体验 以及我们要为之编程一段普遍通用的功能代码的话，那就应该跳过JSON.parse()的步骤。

JavaScript中的正则表达式
var 变量 = /要匹配的内容支持正则如\d+或.+等/g 这是以字面量的方式定义了一个正则表达式，可选标志g代表全局匹配，还有标志i代表不区分大小写，另一个m表示多行模式，先知道一下就行。



首先要知道的字符串本身是无法被修改的，比如gg是无法被修改的，我们只能为它重新赋值。

replace(正则表达式, 要替换的字符串)，注意'"isPro":true' 是一个整体的字符串（我加了单引号的边界），变量h得到了gg的改变了"isPro":false的字符串副本，然后变量m也得到了h又改变了时间部分的字符串副本，最后再赋值给gg，这才完成。

以这种方式我们来看一下对于 Instapaper^^高级体验 的js调试代码：
```
/* [rewrite_local]
^https://www\.instapaper\.com/api/subscription_status url script-response-body instapaper.js
[mitm]
hostname = www.instapaper.com,
*/
var body = $response.body;
var reg1 = /ipsubexp=/g;
var reg2 = /ipsub=\d/g;
body = body.replace(reg1, 'ipsubexp=1646033923');
body = body.replace(reg2, 'ipsub=1');
$done(body);
```
用我们上篇教程讲过的function等优化一下：
```
var body = $response.body;
function re(reg, str) {
  body = body.replace(reg, str);
}
var reg1 = /ipsubexp=/g;
var reg2 = /ipsub=\d/g;
re(reg1, 'ipsubexp=1646033923');
re(reg2, 'ipsub=1');
$done(body);
```
再进化到底，变成通用代码：
```
function re() {
  var body = $response.body;
  if (arguments[0].includes("@")) {
   var regs = arguments[0].split("@");
   var strs = arguments[1].split("@");
   for (i = 0;i < regs.length;i++) {
    var reg = new RegExp(regs[i],"g");
    // 另一种创建正则表达式的方式用 new RegExp构造函数
    body = body.replace(reg, strs[i]);
  }
 }
  else {
   var reg = new RegExp(arguments[0],"g");
   body = body.replace(reg, arguments[1]);
 }
  $done(body);
}
 re('ipsubexp=@ipsub=\\d', 'ipsubexp=1646033923@ipsub=1')
 // 以设计让用户录入re('匹配1@匹配2@匹配3……', '替1@替2@替3……')，匹配中如果用到\d、\w等正则就以双斜杠出现。只替换一个则re('匹配1', '替1')

```
re('匹配1@匹配2@匹配3...','替1@替2@替3...') 只有一个替换的需要则不用@，直接re('匹配1','替1') 由于带有单反斜杆的字符串在经过split()拆分后会丢失，所以需要用到正则的反斜杠语句时请用双反斜杆，如果是用.+之类的匹配则不用，上面也能进行这样全部内容替换：

re('.+','ipsubnow=1585760627&ipsubexp=1646033923&ipsub=1')

即使是回到json响应体的类型也是通用的，最新马卡龙^^pro体验：      

```
/*
[rewrite_local]
^https://app\.api\.versa-ai\.com/user/base/getSelfUserBaseInfo url script-response-body makalong.js
[mitm]
hostname = app.api.versa-ai.com,
*/ 
function re() {
 var body = $response.body;
 if (arguments[0].includes("@")) {
  var regs = arguments[0].split("@");
  var strs = arguments[1].split("@");
  for (i = 0;i < regs.length;i++) {
   var reg = new RegExp(regs[i],"g");
   body = body.replace(reg, strs[i]);
 }
}
 else {
  var reg = new RegExp(arguments[0],"g");
  body = body.replace(reg, arguments[1]);
}
 $done(body);
}
re('"isVip":\\d@"userType":\\d', '"isVip":1@"userType":2')
// 在这里re('匹配', '替换')匹配有用到正则的反斜杠语句时请用双反斜杆
```

除了zip、rar之类封包文件（这个特殊的以后再讲），顶多十二行代码，它通用于所有响应消息体类型，不再受制于键值嵌套的复杂关系，另外同个域名多个路径的时候也能这样当成公式去套用：

```
/*
[rewrite_local]
^https？://123\.abc\.com(/路径1|/路径2) url script-response-body 命名.js
[mitm]
hostname = 123.abc.com,
*/ 
if ($request.url.indexOf("/路径1") != -1) {
// 判断请求路径存在则调用函数re()调试该路径下的响应体
  re('匹配1@匹配2...', '替1@替2...') 
// 匹配里若需用到正则的反斜杠语句像\d+、\w+时请用双反斜杆\\d+、\\w+
}

if ($request.url.indexOf("/路径2") != -1) {
  re('匹配1', '替1')
}

function re() {
 var body = $response.body;
 if (arguments[0].includes("@")) {
  var regs = arguments[0].split("@");
  var strs = arguments[1].split("@");
  for (i = 0;i < regs.length;i++) {
   var reg = new RegExp(regs[i],"g");
   body = body.replace(reg, strs[i]);
 }
}
 else {
  var reg = new RegExp(arguments[0],"g");
  body = body.replace(reg, arguments[1]);
}
 $done(body);
}
```