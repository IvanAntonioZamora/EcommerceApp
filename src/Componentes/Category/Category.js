import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Category = ({greeting}) =>{

    return(
        <>
            <Navbar/>
            <div className="mx-3">
                <div className="bg-opacity-10 rounded-4">
                    <h2 className="text-body">{greeting}</h2>
                </div>
                <ul>
                    <li><Link to='/category/ROCK CLÁSICO'>ROCK CLÁSICO</Link></li>
                    <li><Link to='/category/POP'>POP</Link></li>
                    <li><Link to='/category/ROCK PESADO'>ROCK PESADO</Link></li>
                    <li><Link to='/category/ALTERNATIVO & INDIE'>ALTERNATIVO & INDIE</Link></li>
                    <li><Link to='/category/EN ESPAÑOL'>EN ESPAÑOL</Link></li>
                    <li><Link to='/category/REGGAE'>REGGAE</Link></li>
                </ul>
            </div>
            <Footer/>
        </>
    )
}

export default Category