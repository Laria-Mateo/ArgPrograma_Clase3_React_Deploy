import '../divProducto/DivProducto.css'
import React, { useState } from 'react';
import RML_GlossPump_SpicedNude_open_lg from '../divProducto/RML_GlossPump_SpicedNude_open_lg.jpg'

export default function DivProducto() {

    
    const [cantidadDisponible, setCantidadDisponible] = useState(5);
    const [cantidad, setCantidad] = useState(0);
    const AgregarAlCarro = () => {
        if (cantidadDisponible != 0) {
            setCantidadDisponible(cantidadDisponible - 1);
            setCantidad(cantidad + 1);
        }
    };
    const QuitarDelCarro = () => {
        if (cantidad > 0) {
            setCantidadDisponible(cantidadDisponible + 1);
            setCantidad(cantidad - 1);
        }
    };

    return (
        <>
        
            <div className="product-container ">


                <img src={RML_GlossPump_SpicedNude_open_lg}alt="Producto" />
                <div class="product-info">
                    <h2><b>OH MY GLOSS! PLUMP | RIMMEL LONDON</b></h2>
                    <p className='pPrecio'>$8.200 <br /> en 12x $1646</p>
                    <p className='pDescripcion'>El brillo de labios Oh My Gloss! Plump es un labial líquido que voluminiza tus labios, es de larga duración, tiene brillo tridimensional y color que dura hasta 6 horas.
                        Su fórmula ligera se desliza sobre los labios y se siente cómodo para usar todo el día, gracias a una mezcla de ingredientes acondicionadores, como la Vitamina E y el aceite de Argán. </p>
                    <h3><b>¿Cómo se Usa?</b></h3>
                    <div><strong>Paso 1: </strong>Si buscas un efecto de color más fuerte, primero delineá y rellená tus labios con un delineador de labios.</div>
                    <div><strong>Paso 2: </strong>Comenzando desde el centro de tus labios, aplica el tono elegido y difuminá hacia afuera en el arco de cupido y las comisuras de la boca.</div>
                    <hr />

                    <div className='divContenedor'>

                        <div className='carrito'>
                            <p>Cantidad Disponible: {cantidadDisponible}</p>
                            <p>Cantidad en el Carrito: {cantidad}</p>
                            <button onClick={AgregarAlCarro}>Agregar al Carrito</button>
                            <button onClick={QuitarDelCarro} >Quitar del Carrito</button>
                        </div>
                        <hr />
                        <div className='ingredientes'>
                            <strong className='text-center'>Ingredientes:</strong>
                            <p>POLYBUTENE, PARAFFINUM LIQUIDUM/MINERAL OIL/HUILE MINERALE, TRIOCTYLDODECYL CITRATE, OCTYLDODECANOL, PARFUM/FRAGRANCE, MENTHONE GLYCERIN ACETAL, FLAVOR/AROMA, SILICA DIMETHYL SILYLATE, SYNTHETIC FLUORPHLOGOPITE, ETHYLHEXYL METHOXYCINNAMATE, SILICA, POLYETHYLENE, BENZYL BENZOATE, PHENOXYETHANOL, CALCIUM ALUMINUM BOROSILICATE, LIMONENE, ETHYLHEXYL PALMITATE, ARGANIA SPINOSA KERNEL OIL, TOCOPHERYL ACETATE, EUGENOL, BUTYL METHOXYDIBENZOYLMETHANE, TRIBEHENIN, LINALOOL, BENZYL SALICYLATE, BENZYL CINNAMATE, SORBITAN ISOSTEARATE, CINNAMYL ALCOHOL, TIN OXIDE, CINNAMAL, LACTIC ACID, BHT, BUTYLENE GLYCOL, CAPRYLYL GLYCOL, PALMITOYL TRIPEPTIDE-1, SODIUM HYALURONATE, HEXYLENE GLYCOL .</p>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    )


}