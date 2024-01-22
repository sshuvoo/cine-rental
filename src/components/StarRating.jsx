import star from './../assets/star.svg';

export default function StarRating({ rating }) {
   return Array(rating)
      .fill(star)
      .map((icon, i) => (
         <img key={i} src={icon} width="14" height="14" alt="star" />
      ));
}
