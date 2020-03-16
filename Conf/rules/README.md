//Script event auto linked ipv4 nextdns: network-change

$httpClient.get('https://link-ip.nextdns.io/a9eae90f59d1b7af', function(error, response, data){
  if (error) {
$notification.post('NEXT DNS ', 'Internet error','');
    $done({});
  } else {
$notification.post('NEXT DNS ', 'IPv4 (with linked IP)', 'ip :' + data);
    $done({});
  }
});




//Script event auto linked ipv4 nextdns: network-change

$httpClient.get('https://link-ip.nextdns.io/a9eae90f59d1b7af', function(error, response, data){
  if (error) {
console.log(error + '‼️');
  } else {
console.log(data);
$done();
  }
});