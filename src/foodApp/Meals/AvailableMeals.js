
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS= [
  {
    id:"m1" ,
    name:"Idli" ,
    description:"Hot Idly with Coconut chutney" ,
    price: 25,
  },
  {
    id:"m2" ,
    name:"Dosa" ,
    description:"Crunchy and Crispy Dosa with South Indian Sambar" ,
    price: 50,
  }, {
    id:"m3" ,
    name:"Masala Vada" ,
    description: "Vada with Natu Kodi Curry",
    price:40 ,
  }, {
    id:"m4" ,
    name:"Bonda" ,
    description: "Tasty Bonda with Podi",
    price:20 ,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;