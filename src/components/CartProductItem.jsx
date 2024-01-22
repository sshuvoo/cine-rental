import { useContext } from 'react';
import { MovieContext } from '../context/contexts';
import getImageUrl from '../utils/getImageUrl';
import deleteIcon from './../assets/delete.svg';
import { toast } from 'react-toastify';

export default function CartProductItem({ title, price, genre, poster, id }) {
   const { dispatch } = useContext(MovieContext);

   const handleRemove = () => {
      dispatch({ type: 'REMOVE_TO_CART', payload: id });
      toast.success(`${title} is removed from cart.`, {
         position: 'top-center',
      });
   };

   return (
      <div className="grid grid-cols-[1fr_auto] gap-4">
         <div className="flex items-center gap-4">
            <img
               className="rounded overflow-hidden h-20"
               src={getImageUrl(poster)}
               alt={title}
            />
            <div>
               <h3 className="text-base md:text-xl font-bold">{title}</h3>
               <p className="max-md:text-xs text-[#575A6E]">{genre}</p>
               <span className="max-md:text-xs">${price}</span>
            </div>
         </div>
         <div className="flex justify-between gap-4 items-center">
            <button
               onClick={handleRemove}
               className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
            >
               <img className="w-5 h-5" src={deleteIcon} alt="deleteIcon" />
               <span className="max-md:hidden">Remove</span>
            </button>
         </div>
      </div>
   );
}
