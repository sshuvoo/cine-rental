import ring from './../assets/ring.svg';
import logo from './../assets/logo.svg';
import moon from './../assets/icons/moon.svg';
import sun from './../assets/icons/sun.svg';
import shoppingCart from './../assets/shopping-cart.svg';
import { useContext, useState } from 'react';
import Cart from './Cart';
import { MovieContext, ThemeContext } from '../context/contexts';

export default function Header() {
   const [isOpen, setIsOpen] = useState(false);
   const { cartProducts } = useContext(MovieContext);
   const { darkMode, setDarkMode } = useContext(ThemeContext);
   return (
      <>
         {isOpen && <Cart onClose={() => setIsOpen(false)} />}
         <header>
            <nav className="container flex items-center justify-between space-x-10 py-6">
               <a href="index.html">
                  <img src={logo} width="139" height="26" alt="logo" />
               </a>

               <ul className="flex items-center space-x-5">
                  <li>
                     <a
                        className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                        href="#"
                     >
                        <img src={ring} width="24" height="24" alt="ring" />
                     </a>
                  </li>
                  <li>
                     <a
                        onClick={() => setDarkMode((pre) => !pre)}
                        className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block cursor-pointer"
                     >
                        <img
                           src={darkMode ? sun : moon}
                           width="24"
                           height="24"
                           alt="moon"
                        />
                     </a>
                  </li>
                  <li>
                     <a
                        onClick={() => setIsOpen(true)}
                        className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block cursor-pointer"
                     >
                        <img
                           src={shoppingCart}
                           width="24"
                           height="24"
                           alt="shopping-cart"
                        />
                        {cartProducts.length > 0 && (
                           <span className="bg-primary w-6 h-6 rounded-full absolute flex justify-center items-center top-0 -right-4">
                              {cartProducts.length}
                           </span>
                        )}
                     </a>
                  </li>
               </ul>
            </nav>
         </header>
      </>
   );
}
