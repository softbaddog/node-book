var moment = require('moment');

const buf = Buffer.from([0x3F, 0x8C, 0xCC, 0xCC, 0x03, 0x5B, 0xF4, 0x2D, 0x18]);

console.log(buf);

console.log(buf.readFloatBE(0).toFixed(1), buf.readUInt8(4), moment.unix(buf.readUInt32BE(5)).toString());

var a=2.1512131231231321;
console.log(a.toFixed(2))

var t = "18/12/14,03:39:45-32".replace(/^(\d+)/, '20$1').replace(/(\+|\-\d+)/, '').replace(/\//g, '-').replace(/\,/, ' ');
var z = parseInt("18/12/14,03:39:45-32".substr(-3)) / 4;
//var t = "2018-11-20T15:49:44+00:00";
// var d = Date.parse(moment(t).utc());
// console.log(d.toString());
console.log(moment(t+'Z'+z));