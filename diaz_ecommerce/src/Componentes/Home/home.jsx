import Titulo from "../Titulo/titulo"
import Formulario from "../Formulario/formulario"

const Home = ( { saludo } ) => {
    
    const tituloApp = 'Bienvenidos'
    const subTituloApp = 'Tienda Online'
   

    return (
        <div>
            <Titulo titulo={tituloApp} subTitulo={subTituloApp}/>
            <Formulario />
            <p>{saludo}</p>
        </div>
    )
}

export default home