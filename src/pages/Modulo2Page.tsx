import { useState } from "react";
type ContadorProps={
    initial?:number;
    step?:number;
}

export const Modulo2Page= ({initial=0,step=1}:ContadorProps)=> {

    const [count, setCount]=useState <number>(initial)
    const inc =()=>setCount((c)=>c+step)
        const dec =()=>setCount((c)=>c-step)

    //Inferido
    const[tazas,setTazas]=useState<number>(1)

    type Ingredientes="Agua" | "Cafe" | "Azucar";
    type RecetaCafe={
        agua?:number;
        cafe?:number;
        azucar?:number;
    }
    type CafePreparado={
        mensaje:string;
        intensidad:"suave"|"fuerte";
    }
    //explicito -union literar
    const [intensidadUI,setIntesidadUI]=useState<CafePreparado["intensidad"]>("suave");
    //explicito con null
    const [ultimoCafe,setUltimoCafe]=useState<CafePreparado | null > (null);
    // valores que pueden ser undefined 
    const [azucarIn,setAzucarIn]=useState<number | undefined >(undefined);



    //interface
    type CardProps={title:string}
    interface CardProps2{title:string}
    interface Battle {arena:string}
    interface Battle {ki:number}
    const peleaOk:Battle={arena:"Desierto",ki:1500}
    //interface Herencia
    interface RecetaBase{
        agua:number;
        cafe:number;
    }
    //hijo
    interface RecetaAzucar extends RecetaBase {azucar:number}; //extiende del padre al hijo
    interface MaquinaCafe {modelo:string};
    interface MaquinaCafe {aguaMax:number}
    const maquina:MaquinaCafe={modelo:"Kame-500",aguaMax:800}
    
    interface CafePreparado2{mensaje:string;intensidad:"suave"|"fuerte"}

    function prepararCafeI(receta:RecetaAzucar):CafePreparado2{
        const intensidad:CafePreparado2["intensidad"]=receta.cafe>10?"fuerte":"suave"
        return {
     mensaje:
        `Cafe listo con INTERFACES ${receta.agua}ml de agua  y ${receta.
        cafe}g de cafe` +
        (receta.azucar ? `+ ${receta.azucar}g de azucar ` :
        "") + `\n Intensidad: ${intensidad}`,
    intensidad,
    };
    }

    function prepararCafe({agua=0,cafe=0,azucar=0}:RecetaCafe):CafePreparado{
        const intensidad=cafe>5?"fuerte":"suave";
       return {
     mensaje:
        `Cafe listo con ${agua}ml de agua  y ${
        cafe}g de cafe` +
        (azucar ? `+ ${azucar}g de azucar ` :
        "") + `\n Intensidad: ${intensidad}`,
    intensidad,
    };
}

    const onCafeInterface=()=>{
        const resultado=prepararCafeI({agua:10,cafe:6,azucar:2});
        alert(resultado.mensaje);
    }
    const OnCafe=()=>{
        const resultado=prepararCafe({cafe:6,azucar:2});
        alert(resultado.mensaje);
    }

//INTERSECCIONES
    type A={nombre:string}
    type B={edad:number}
    type C={state:boolean}

    type Persona=A&B&C
    const juan: Persona ={nombre:"juan",edad:30,state:true}

    return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased pb-12"> 
      <div className="mx-auto max-w-3xl p-8 space-y-6">
        <header className="mb-8 border-b border-neutral-800 pb-4">
          <h1 className="text-3xl font-semibold text-blue-500 mt-4">
            React + TypeScript – Modulo 2
          </h1>
        </header>
        <section className="mb-8">
          <h2 className="text-xl font-medium text-blue-300 mb-2">
            Types y funciones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-neutral-300 flex-col">
            <button onClick={OnCafe} className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md">
                Preparar Cafe
            </button>            
          </div>
        </section>
        <section className="mb-4">
             <span>
                Interface: {peleaOk.arena +" "+ peleaOk.ki}
            </span>
        </section>
        <section className="mb-8">
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl text-neutral-100 flex flex-col p-4 gap-3">
            <button onClick={onCafeInterface} className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg ">
                Hacer Cafe con Interface
            </button>  
            <span className="text-neutral-400">state tipados
                <div>
                 <span className="text-amber-400 font-bold">{intensidadUI}</span>
                </div>
            </span>   
            <button onClick={()=>setIntesidadUI(intensidadUI === "suave" ? "fuerte" : "suave")} className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-lg border border-neutral-700">cambiar state</button>    
          </div>
          
          </section> 
          
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex items-center gap-4 text-neutral-100">
          <span className="font-medium">Contador:</span>
            <button onClick={dec} className="px-3 py-1 bg-neutral-800 hover:bg-neutral-700 rounded text-white">-</button>    
           <span className="text-amber-400 font-bold text-lg">{count}</span>
            <button onClick={inc} className="px-3 py-1 bg-neutral-800 hover:bg-neutral-700 rounded text-white">+</button>  
            <h2>Intersecciones (&)</h2>
            {juan.nombre}-{juan.edad}
            <pre>{JSON.stringify(juan,null,2)}</pre>
          </div>
      </div>
    </main>
  );
}
    