import classes from './MealCardContainer.module.css';

function MealCardContainer({
  title,
  description,
  price,
  imgUrl,
  alt,
  openPopUp,
  id,
}) {


  return (
    <div
      className={classes.mealCard}
      onClick={openPopUp}
    >
      <div className={classes.mealInformation}>
        <p> {title}</p>
        <p> {description}</p>
        <p className={classes.price}>${price.toFixed(2)}</p>
      </div>
      <div className={classes.mealPhoto}>
        <img src={imgUrl} alt={alt} />
      </div>
    </div>
  );
}
export default MealCardContainer;
