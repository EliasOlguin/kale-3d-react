import React from 'react'

import logo from '../../assets/kale-3d-logo.jpg'
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
          <Link to="/"><img src={logo} alt='logo-kale3d' className='logo' /></Link>
        </div>

        <nav className='nav-categories'>
        {categories.map((cate)=> <NavLink id={cate.id} to={cate.route} className='categories' key={cate.id}>  {cate.nombre} </NavLink> )}
        </nav>
        

        <Link to="/cart"> <CartWidget /> </Link>
      </header>
  )
}
