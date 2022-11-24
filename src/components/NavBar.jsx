
import CartWidget from './CartWidget.jsx'
import './NavBar.css'

const NavBar = () => {
  return (
    <section className="container ">
      
        <img src="https://img.freepik.com/vector-premium/tienda-juguetes-clasicos-vintage-horse-retro-label-badge-diseno-logotipo_560919-82.jpg?w=2000" alt="" />
      

      <div>
       <ul className="Category">
          <li><a href="#">Juguetes para niño</a></li>
          <li><a href="#">Juguetes para niña</a></li>
          <li><a href="#">Ofertas hasta un 40%</a></li>
          <li><a href="#">proximos lansamientos</a></li>
        </ul>
        
      </div>
      
      <CartWidget items={0}/>

    </section>
  )
}

export default NavBar
