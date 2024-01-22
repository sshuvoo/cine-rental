import { useReducer, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import Sidebar from './components/Sidebar';
import { MovieContext, ThemeContext } from './context/contexts';
import movies from './database/movies.json';
import cartReducer from './reducers/cartReducer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
   const [cartProducts, dispatch] = useReducer(cartReducer, []);
   const [darkMode, setDarkMode] = useState(true);

   if (darkMode) document.documentElement.classList.add('dark');
   else document.documentElement.classList.remove('dark');

   return (
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
         <MovieContext.Provider value={{ cartProducts, dispatch }}>
            <Header />
            <main>
               <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                  <Sidebar />
                  <div className="content">
                     <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                        {movies.map((movie) => (
                           <MovieCard key={movie.id} movie={movie} />
                        ))}
                     </div>
                  </div>
               </div>
            </main>
            <Footer />
            <ToastContainer />
         </MovieContext.Provider>
      </ThemeContext.Provider>
   );
}
