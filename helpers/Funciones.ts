import {Nivel} from "../model/Nivel";

let NIVELES:Array<Nivel> = require("../data/datos.json")

export{NIVELES}

function getNivel(imc:number):Nivel{
    let NIVELESMUTABLE = NIVELES
    let NivelImc = NIVELESMUTABLE.find((masa) => imc >= masa.extremoInferior && imc <= masa.extremoSuperior);
    if (!NivelImc) {
        // Nivel por defecto
        return {
            id: 0,
            categoria: "Desconocido",
            extremoInferior: 0,
            extremoSuperior: 0,
            consejo: "No se pudo determinar el nivel.",
            color: "gris"
        };
    }
    return NivelImc;
    }
export {getNivel}