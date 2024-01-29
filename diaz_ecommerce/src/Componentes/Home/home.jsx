import titulo from '../Titulo/titulo';

const Home = ( { saludo } ) => {
    
    const tituloApp = 'Hola! Bienvenidos'
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