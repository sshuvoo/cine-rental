import trending from './../assets/icons/trending.svg';
import newRelease from './../assets/icons/newRelease.svg';
import commingSoon from './../assets/icons/commingSoon.svg';
import favourite from './../assets/icons/favourite.svg';
import watchLater from './../assets/icons/watchLater.svg';

export default function Sidebar() {
   return (
      <aside>
         <ul className="space-y-2">
            <li>
               <a
                  className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
                  href="#"
               >
                  <img src={trending} width="24" height="24" alt="trending" />
                  <span>Trending</span>
               </a>
            </li>
            <li>
               <a
                  className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                  href="#"
               >
                  <img
                     src={newRelease}
                     width="24"
                     height="24"
                     alt="new-release"
                  />
                  <span>New Releases</span>
               </a>
            </li>
            <li>
               <a
                  className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                  href="#"
               >
                  <img
                     src={commingSoon}
                     width="24"
                     height="24"
                     alt="commingSoon"
                  />
                  <span>Coming Soon</span>
               </a>
            </li>
            <li>
               <a
                  className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                  href="#"
               >
                  <img src={favourite} width="24" height="24" alt="favourite" />
                  <span>Favourites</span>
               </a>
            </li>
            <li>
               <a
                  className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                  href="#"
               >
                  <img
                     src={watchLater}
                     width="24"
                     height="24"
                     alt="watchLater"
                  />
                  <span>Watch Later</span>
               </a>
            </li>
         </ul>
      </aside>
   );
}
