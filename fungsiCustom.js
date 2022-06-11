// TODO: import module bila dibutuhkan di sini
let fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData


// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  let final = []
      fs.readFile(file1,'utf-8',(error, jsondat1) => {
          if(error){
              fnCallback(error, null);
          }
          const obj1 = JSON.parse(jsondat1);
          final.push(obj1.message.slice(5));
          fs.readFile(file2,'utf-8',(error, jsondat2) => {
            if(error){
              fnCallback(error, null);
            }
            const obj2 = JSON.parse(jsondat2);
            final.push(obj2[0].message.slice(5));
            fs.readFile(file3,'utf-8', (error, jsondat3) => {
              if(error){
                fnCallback(error,null);
              }
              const obj3 = JSON.parse(jsondat3);
              final.push(obj3[0].data.message.slice(5));
              fnCallback(null,final);
            })
          })
      })
}  
// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
