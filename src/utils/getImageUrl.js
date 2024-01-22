export default function getImageUrl(imgName) {
   return new URL(`../assets/movie-covers/${imgName}`, import.meta.url).href;
}
