import React from "react"
// Cocción  Refrigeración  Equipamiento Comercial  Hogar  Panadería
/* 
Cocción
  Cocinas 
    Cocinas Semi Industrial 
    Cocinas Industriales 
    Cocinas Eléctricas 
  Hornos 
    Hornos Pizzeros  
    Hornos Pasteleros  
    Hornos Eléctricos  
    Hornos Convectores  
  Purificadores y Extractores de aire  
    Campanas

Refrigeración
  Heladera Exhibidoras 
    Exhibidoras Verticales 
  Freezers         
    Horizontal         
    Vertical     
  Heladeras  

  Equipamiento Comercial
    Balanzas Electrónicas     
    Licuadora Industrial

Hogar
  Electrodomésticos         
    Balanza Digital         
    Sandwicheras         
    Microondas         
    Pavas Electricas         
    Licuadoras         
    Batidoras     
  Televisores         
    Smart TV     
  Termotanques

Panadería
  Sobadora         
    Manual     
  Amasadora     
  Batidoras     
  Hornos         
    Hornos Pasteleros         
    Hornos Convectores     
  Heladeras Exhibidoras  
*/
const tabs = [
    [
        "Cocción",
        <div key={1}>
            <h1 className="hover:underline decoration-red-200 decoration-4 font-bold text-lg">
        Cocinas
            </h1>
            <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Cocinas Semi Industrial
            </h2>
            <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Cocinas Industriales
            </h2>
            <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Cocinas Eléctricas
            </h2>
            <h1 className="hover:underline decoration-red-200 decoration-4 font-bold text-lg">
        Hornos
            </h1>
            <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Hornos Pizzeros
            </h2>
            <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Hornos Pasteleros
            </h2>
            <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Hornos Eléctricos
            </h2>
            <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Hornos Convectores
            </h2>
            <h1 className="hover:underline decoration-red-200 decoration-4 font-bold text-lg">
        Purificadores y Extractores
        de aire
            </h1>
            <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Campanas
            </h2>
        </div>,
    ],
    [
        "Refrigeración",
        <div key={2}>
            <h1 className="hover:underline decoration-red-200 decoration-4  font-bold text-lg">
        Heladera Exhibidoras
            </h1>
            <h2 className="hover:underline decoration-red-200 decoration-4  ">
        Exhibidoras Verticales
            </h2>
            <h1 className="hover:underline decoration-red-200 decoration-4  font-bold text-lg">
        Freezers
            </h1>
            <h2 className="hover:underline decoration-red-200 decoration-4  ">
        Horizontal
            </h2>
            <h2 className="hover:underline decoration-red-200 decoration-4  ">
        Vertical
            </h2>
            <h1 className="hover:underline decoration-red-200 decoration-4  font-bold text-lg">
        Heladeras
            </h1>
        </div>,
    ],
    [
        "Equip. Comercial",
        <div key={3}>
            <h1 className="hover:underline decoration-red-200 decoration-4 font-bold text-lg">
        Balanzas Electrónicas
            </h1>
            <h1 className="hover:underline decoration-red-200 decoration-4 font-bold text-lg">
        Licuadora Industrial
            </h1>
        </div>,
    ],
    [
        "Hogar",
        <div key={4}>
            <h1 className="hover:underline decoration-red-200 decoration-4 font-bold text-lg">
        Electrodomésticos
            </h1>
            <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Balanza Digital
            </h2>
            <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Sandwicheras
            </h2>
            <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Microondas
            </h2>
            <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Pavas Electricas
            </h2>
            <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Licuadoras
            </h2>
            <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Batidoras
            </h2>
            <h1 className="hover:underline decoration-red-200 decoration-4 font-bold text-lg">
        Televisores
            </h1>
            <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Smart TV
            </h2>
            <h1 className="hover:underline decoration-red-200 decoration-4 font-bold text-lg">
        Termotanques
            </h1>
        </div>,
    ],
    [
        "Panadería",
        <div key={5}>
            <h1 className="hover:underline decoration-red-200 decoration-4 font-bold text-lg">
        Sobadora
            </h1>
            <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Manual
            </h2>
            <h1 className="hover:underline decoration-red-200 decoration-4 font-bold text-lg">
        Amasadora
            </h1>
            <h1 className="hover:underline decoration-red-200 decoration-4 font-bold text-lg">
        Batidoras
            </h1>
            <h1 className="hover:underline decoration-red-200 decoration-4 font-bold text-lg">
        Hornos
            </h1>
            <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Hornos Pasteleros
            </h2>
            <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Hornos Convectores
            </h2>
            <h1 className="hover:underline decoration-red-200 decoration-4 font-bold text-lg">
        Heladeras Exhibidoras
            </h1>
        </div>,
    ],
]

export default tabs
