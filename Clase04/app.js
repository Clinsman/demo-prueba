const os = require('os');
const fs = require('fs');

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();

/*console.log(cpu);
console.log(sistema);
console.log(usuario);*/

let cpu_string = JSON.stringify(cpu);

fs.appendFile('mitocode.txt',`Informacion del cpu : ${cpu_string}`, function(error){
    if(error){
        console.log('Error al crear el archivo');
    }
});