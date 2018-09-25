console.log(module);
console.log('Suscribete al canal');
/*function saludar(){
    console.log('Suscribete al canal Code');
}*/
let subscriptores = 22000;

/*module.exports.saludar = function (){
    console.log('Suscribete al canal Code');
}

module.exports.sub = subscriptores;*/

module.exports = {
    sub : subscriptores,
    saludar : function(){
        console.log('Hola Coder');
    }
}