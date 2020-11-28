/*

#Surge4.0
^https?:XXXX.COM requires-body=1,max-size=0,script-path=xx.js


MITM = XXX
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body); //从一个字符串中解析出JASON对象;也就是我们要修改的对象;

//地址命名随意
const 地址1 = '域名1';
const 地址2 = '域名2';

if (url.indexOf(地址1) != -1) {
   //拿取关键字段的写法
   //方法1： 
   obj["字段1"]["字段2"]["字段3"] = "要修改的值";
   //如果有另外的值需要修改可增加obj拿去字段
   //方法2：
   obj.字段1 = "要修改的值";
   body = JSON.stringify(obj); // 从一个对象中解析出字符串;也就是从我们要修改的地址中拿到修改的值;
   }
   

if (url.indexOf(地址2) != -1) {
    //同域名多个字段修改写法
   //方法1： 
   obj["字段1"]["字段2"]["字段3"] = "要修改的值";
   //单个字段写法
   //方法2：
   obj.字段1 = "要修改的值";
   body = JSON.stringify(obj);
   }
}
$done({body});
