import { Link } from "react-router-dom";
import {calcularDanio} from "../utils/calcularDanio";
export const Modulo1Page = () => {
    //Valor Inferido por TypeScript, si no se declara el tipo, TypeScript lo infiere a partir del valor asignado.
    let saga = "Saga Sayayin";
    let horarEntrenamientio: number = 3; //Valores anotados, a diferencia de los inferidos son los que se declaran directamente con un nombre descriptivo del tipo de dato
    //Tipos basicos
    let guerrero:string="Goku";
    const ki_number =9001; //Entero o decimal
    const enCombate:boolean=true;
    //arrays
    const equipoZ:string[]=["Goku","Vegeta","Gohan","Piccolo"];
    //Tuplas
    const coordenadas:[number,number,string] = [42,17,"Goku Posicion"];
    //Funciones tipadas (paramtros + return)
   /*  function calcularDanio(base:number,multiplicador:number):number{
        return base*multiplicador;
    } */

    const calcularDanioFlecha = (base:number, multiplicador:number):number => {
        return base * multiplicador;
    };
    //null undefined 
    let transformacion:string | null = null;
    transformacion ="Super Saiyayin";
    let estrategia:string | undefined = undefined;
    estrategia = "Tirar Kamehameha";
    //any y unknown Cualquier tipo de datos
    let variableLibre:any="Semilla del ermitanio";
    variableLibre=2;
    let evento:unknown="Refuerzo"
    let eventoMayus:string | null= null;
    if(typeof evento==="string"){
        eventoMayus=evento.toUpperCase();
    }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <div className="mx-auto max-w-3xl p-8">
        <header className="mb-8 border-b border-neutral-800 pb-4">
            <Link to="/" 
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md">
            Volver a Home
            </Link>
          <h1 className="text-3xl font-semibold text-blue-500 mt-4">
            React + TypeScript – Módulo 1
          </h1>
          <p className="text-sm text-neutral-400">
            Fundamentos: tipos básicos, arrays y tuplas
          </p>
        </header>
        <section className="mb-8">
          <h2 className="text-xl font-medium text-blue-300 mb-2">
            Inferencia y básicos
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-neutral-300">
            <div>Saga: {saga}</div>
            <div>Horas de entrenamiento:  {horarEntrenamientio}</div>
            <div>Guerrero: {guerrero}</div>
            <div>Ki: {ki_number}</div>
            <div>En combate: {enCombate?"Sí":"No"}</div>
          </div>
        </section>
        <section className="mb-8">
            <h2 className="text-xl font-medium text-blue-300 mb-2">
            Arrays
            </h2>
            <div>
                Equipo Z: {equipoZ.join(", ")}
            </div>
             <h2 className="text-xl font-medium text-blue-300 mb-2">
            Tuplas
            </h2>
            <div>
                Coordenadas: [x,y,descripcion] : x={coordenadas[0]}, y={coordenadas[1]}, descripcion={coordenadas[2]}
            </div>
        </section>
        <section className="mb-8">
            <h2 className="text-xl font-medium text-blue-300 mb-2">
            Funciones tipadas
            </h2>
            <div>
                <p> Danio (Base 450 x Multiplicador)</p>
                <span>{calcularDanio(450, 2)}</span>
                <p>Danio Funciones Flecha</p>
                <span>{calcularDanioFlecha(450, 2)}</span>

            </div>
        </section>    
        <section className="mb-8">
          <h2 className="text-xl font-medium text-blue-300 mb-2">
            Any y unknown
            </h2>
            <div>
                <p>Variable libre: {variableLibre}</p>
                <p>Evento: {eventoMayus }</p>
            </div>
        </section>
      </div>
    </main>
  );
};