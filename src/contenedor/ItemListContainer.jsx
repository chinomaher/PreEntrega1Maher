import '../contenedor/ItemListContainer.css';

export const saludar = () => console.log('saludo')

const ItemListContainer = ( {greeting} ) => {
  return (
    <div className="section">
      BIENVENIDOS
      <br />
      <label>{ greeting }</label>
      
    </div>
  )
}

export default ItemListContainer
