function partir(arreglo, cantidad) {

    let partes=[];
    let parte=[];
    for(i=0;i<arreglo.length;i++){
        parte.push(arreglo[i]);

        if(parent.length===cantidad or i===arreglo.length-1){
            partes.push(parte);
            parte=[];
        }
    }
    return partes;
}

function main(){
    let arreglo=[1,2,3,4,5,6,7,8,9];
    let cantidad=3;
    console.log("Arreglo original: ",arreglo);
    console.log("Cantidad de elementos a separar:",cantidad);
    console.log("\n");
    let resultado = partir(arreglo,cantidad);
    console.log("Resultado",resultado);
}