//Script event auto linked ipv4 nextdns: network-change

 $httpClient.get('https://link-ip.nextdns.io/d49521/c274ce33ad2401ca', function(error, response, data){
  if (error) {
$notification.post('NEXT DNS ', 'Internet error','');
//$notification.post('NEXT DNS ', 'Internet error','');
    $done({});
  } else {
$notification.post('NEXT DNS ', 'IPv4 (with linked IP)', 'ip :' + data);
