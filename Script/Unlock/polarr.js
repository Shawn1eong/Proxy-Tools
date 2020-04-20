/*
主机名= api.polaxiong.com 
 
^https：//api.polaxiong.com/v1/payments/appleiap/receipts/confirmation url script-response-body pola.js 

*/

var mstatus = "HTTP/1.1 200 OK";
var mheaders = $response.headers;
var mbody = $response.body;
var obj = JSON.parse(mbody);


obj =  {
  "app": "PPE",
  "isUnlimited": true,
  "membershipExpiryDate": "2099-01-01T12:00:00.000Z"
};
  
mbody = JSON.stringify(obj);



$done({body:mbody,headers:mheaders,status:mstatus});


