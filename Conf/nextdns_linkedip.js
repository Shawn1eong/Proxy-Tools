//Script event auto linked ipv4 nextdns: network-change

async function launch() {
    await linkedip();
}
launch()
function linkedip(){ 
$httpClient.post('https://link-ip.nextdns.io/d49521/c274ce33ad2401ca', function(error, response, data){
  if (error) {
console.log('‼️');
  } else {
console.log('🟢 '+ data);
  }
  $done();
});
}