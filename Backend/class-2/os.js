const os = require('os');
// console.log(os);
// console.log(os.homedir()); //C:\Users\sudha - Root directory
// console.log(os.hostname()); //HEYK
// console.log(os.platform()); //win32
// console.log(os.type()); // Windows_NT
// console.log(os.release()); //10.0.26100
// console.log(os.userInfo()); 
/*
[Object: null prototype] {
  uid: -1,
  gid: -1,
  username: 'sudha',
  homedir: 'C:\\Users\\sudha',
  shell: null
}*/
// console.log(os.freemem()); //6999977984 Byte
const totalmemory = console.log(os.totalmem()); //16893386752 Byte
var calculate = totalmemory/1024*1024*1024;
console.log(calculate);

// console.log(os.networkInterfaces());



