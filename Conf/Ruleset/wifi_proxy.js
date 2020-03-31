var wifiname = $network.wifi.ssid;
var proxywifi = ["wifi_1","wifi_2"];
for (var i = 0; i < proxywifi.length; i++) {
	if (wifiname==proxywifi[i]){
		$surge.setOutboundMode("direct");
		
		setTimeout(function(){$notification.post("Meeta_Remind","您目前处于WIFI-Proxy"+"SSID: "+wifiname,"Surge已自动变为直连模式");}, 3000);
		break;
		
	};
	if (i==proxywifi.length-1){
		$surge.setOutboundMode("rule");
		
		setTimeout(function(){$notification.post("Meeta_Remind","Surge已自动变为规则模式","");}, 3000);
	
	}
	
	
};
$done();