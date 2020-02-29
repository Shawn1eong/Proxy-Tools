//Script event auto linked ipv4 nextdns: network-change

$httpClient.get('https://link-ip.nextdns.io/d49521/c274ce33ad2401ca', function(error, response, data){
  if (error) {
console.log(error + '‼️');
  } else {
console.log(data);
$done();
  }
});
