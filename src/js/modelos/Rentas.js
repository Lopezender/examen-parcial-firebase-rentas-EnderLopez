//Importar firebase y su configuracion 
import {db} from '../firebase'; 
  
//Importar getFirestore para leer la base de datos 
import { collection, query, getDocs} from 'firebase/firestore'; 
 
//Leer la coleccion de viviendas 
const Rentas = query(collection(db, "Rentas")); 
 
//Leer los documentos de la coleccion de forma asincrona 
const querySnapshot = await getDocs(Rentas); 
 
let Rentas_contenedor = document.getElementById('Rentas'); 
 
querySnapshot.forEach((doc) => { 
  let Rentas = doc.data() 
    Rentas_contenedor.innerHTML += `<li> 
    <div class="w-80 h-full mx-auto bg-white  mb-10 pb-8 rounded-md inline-flex mt-8 ml-10"> 
    <div class=""> 
        <img src="${Rentas.foto}" alt="${Rentas.nombre}" class="rounded-xl mx-auto pl-4 pr-4 mt-8"> 
        </div> 
        </div> 
        <div class="h-full mx-auto bg-white pb-2 mt-4 rounded-2xl text-black font-serif inline-block ml-20"> 
        
        <div class="text-center">${Rentas.precio} </div>  
        <div class="text-block">${Rentas.baños} baños 
         ${Rentas.camas} camas </div> 
        <div class="text-center">${Rentas.direccion} </div> 
         
        </div> 
       
        <div class="pb-6"></div> 
    </li>`; 
});