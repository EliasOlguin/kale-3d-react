import React from 'react'

import './NavBar.css'
import { CartWidget } from './CartWidget';
import { Link, NavLink } from 'react-router-dom';



export const NavBar = () => {
  const categories = [
    { id: 1 , nombre:"Lamparas", route:"/categories/lamparas"  },
    { id: 2 , nombre:"Mates", route:"/categories/mates"  },
    { id: 3 , nombre:"Llaveros", route:"/categories/llaveros"  },
    { id: 4 , nombre:"Figuras", route:"/categories/figuras"  }
  ]
  return (
      <header className='nav'>
        <div>
          <Link to="/"><img src="https://firebasestorage.googleapis.com/v0/b/kale3dreact.appspot.com/o/img%2Fkale3dlogo.jpg?alt=media&token=3165f4a0-f5b1-41a5-90bf-f427b79839e4" alt='logo-kale3d' className='logo' /></Link>
        </div>

        <nav className='nav-categories'>
        {categories.map((cate)=> <NavLink id={cate.id} to={cate.route} className='categories' key={cate.id}>  {cate.nombre} </NavLink> )}
        </nav>
        

        <Link to="/cart"> <CartWidget /> </Link>
      </header>
  )
}
