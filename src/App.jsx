import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/NavBar';
import ItemListContainer from './contenedor/ItemListContainer.jsx';
import './components/NavBar.css'
import './contenedor/ItemListContainer.css';



ReactDOM.createRoot(document.getElementById('root')).render(

<>
    <NavBar />
    
    <ItemListContainer greeting={'JUGUETONES'} />
    
</>    
    
)
