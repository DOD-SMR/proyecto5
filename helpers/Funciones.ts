import { Nivel } from "../model/Nivel";

let NIVELES:Array<Nivel> = require("../data/datos.json")

export{NIVELES}

function getNivel(imc:number):Nivel{
    NIVELES.find((masa) => masa.id === imc)
}