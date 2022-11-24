
import '../components/CartWidget.css'

const CartWidget = ({items}) => {
  
  return (
   <section className='carrito'>
     <span className="material-symbols-outlined">
         shopping_cart_checkout
     </span>

     <div className='counter'>
       {items}
     </div>
     
   </section>
   
   
  )
}

export default CartWidget
