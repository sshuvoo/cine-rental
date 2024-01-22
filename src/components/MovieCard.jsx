import tag from './../assets/tag.svg';
import StarRating from './StarRating';
import getImageUrl from '../utils/getImageUrl';
import { useContext, useState } from 'react';
import MovieDetailsCard from './MovieDetailsCard';
import { MovieContext } from '../context/contexts';
import { toast } from 'react-toastify';

export default function MovieCard({ movie }) {
   const { cartProducts, dispatch } = useContext(MovieContext);
   const [isOpen, setIsOpen] = useState(false);
   const { title, genre, price, rating, poster } = movie;

   const handleAddToCart = (event) => {
      event.stopPropagation();
      if (cartProducts.some((product) => product.id === movie.id)) {
         toast.error(`${movie.title} is already added to cart`, {
            position: 'top-center',
         });
      } else {
         dispatch({ type: 'ADD_TO_CART', payload: movie });
         toast.success(`${movie.title} is added to cart successfully`, {
            position: 'top-center',
         });
      }
   };

   return (
      <>
         {isOpen && (
            <MovieDetailsCard
               {...movie}
               onClose={() => setIsOpen(false)}
               onAddToCart={handleAddToCart}
            />
         )}
         <figure
            onClick={() => setIsOpen(true)}
            className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl  cursor-pointer"
         >
            <img
               className="w-full object-cover"
               src={getImageUrl(poster)}
               alt="movie"
            />
            <figcaption className="pt-4">
               <h3 className="text-xl mb-1">{title}</h3>
               <p className="text-[#575A6E] text-sm mb-2">{genre}</p>
               <div className="flex items-center space-x-1 mb-5">
                  <StarRating rating={rating} />
               </div>
               <a
                  onClick={handleAddToCart}
                  className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
               >
                  <img src={tag} alt="tag" />
                  <span>${price} | Add to Cart</span>
               </a>
            </figcaption>
         </figure>
      </>
   );
}
