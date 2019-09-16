const os = require('os');

const cpuInfos = os.cpus()

debugger
for (var item of cpuInfos) {
    console.log(item);
  }

for (var i in cpuInfos) {
    console.log(cpuInfos[i]);
}

for (var i = 0; i < cpuInfos.length; i++) {
    console.log(cpuInfos[i]);
}

cpuInfos.forEach((element) => {
    console.log(element)
});

let myArray = [{a:1},"b","c","d"];
for (let item of myArray) {
  console.log(item);
}