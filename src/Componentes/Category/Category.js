import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Category = ({greeting}) =>{

    return(
        <>
            <Navbar/>
            <div className="mx-3 mb-5">
                <div className="bg-opacity-10 rounded-4 mb-5">
                    <h2 className="text-body">{greeting}</h2>
                </div>
                <div className="card mx-4 my-1 text-uppercase">
                    <div className="card-body">
                        <Link className='text-decoration-none' to='/category/ROCK CLÁSICO'>ROCK CLÁSICO</Link>
                    </div>
                </div> 
                <div className="card mx-4 my-1 text-uppercase">
                    <div className="card-body">
                        <Link className='text-decoration-none' to='/category/POP'>POP</Link>
                    </div>
                </div> 
                <div className="card mx-4 my-1 text-uppercase">
                    <div className="card-body">
                        <Link className='text-decoration-none' to='/category/ROCK PESADO'>ROCK PESADO</Link>
                    </div>
                </div>
                <div className="card mx-4 my-1 text-uppercase">
                    <div className="card-body">
                        <Link className='text-decoration-none' to='/category/ALTERNATIVO & INDIE'>ALTERNATIVO & INDIE</Link>
                    </div>
                </div>
                <div className="card mx-4 my-1 text-uppercase">
                    <div className="card-body">
                        <Link className='text-decoration-none' to='/category/EN ESPAÑOL'>EN ESPAÑOL</Link>
                    </div>
                </div>
                <div className="card mx-4 my-1 text-uppercase">
                    <div className="card-body">
                        <Link className='text-decoration-none' to='/category/REGGAE'>REGGAE</Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Category