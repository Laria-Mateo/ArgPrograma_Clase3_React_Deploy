import '../header/Header.css'
import OIG from '../header/OIG.jpg'

export default function Header() {

    return (

        <div className="header col-md-12 ">

            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
                integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
                crossorigin="anonymous"
                referrerpolicy="no-referrer"
            />
            <div className='titulonombre'>
                <div className='foto'>
                    <img src={OIG} />
                </div>
                <div className='nombre'>
                    <h1 className='titulo'>Sara Online</h1>
                    <p>50 Años Brindando lo mejor a nuestros clientes</p>
                </div>
                <div className="buscadorcontainer">
                    <input className='inputBuscar' type="text" placeholder="Buscar Producto..." required />
                    <div className='boton'>
                        <i class="fas fa-search icon"></i>
                    </div>

                </div>

                <div className='botonCompras'>
                <i class="fa-solid fa-cart-shopping"></i>
                </div>
            </div>

            <ul className='navbar container'>
                <li><a href='#'>Categorias</a></li>
                <li><a href='#'>Ofertas</a></li>
                <li><a href='#'>Moda</a></li>
                <li><a href='#'>Ultimos Ingresos</a></li>
                <li><a href='#'>Ayuda</a></li>
            </ul>



        </div>
    )


}
