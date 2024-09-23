const regex = /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}$/;

const ip1 = "127.0.0.1";
const ip2 = "256.0.0.1";
const ip3 = "192.168.1.1";

console.log(regex.test(ip1)); 
console.log(regex.test(ip2)); 
console.log(regex.test(ip3));
