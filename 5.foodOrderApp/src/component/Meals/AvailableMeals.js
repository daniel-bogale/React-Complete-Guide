import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";
// const DUMMY_MEALS = [
// {
//   id: "m1",
//   name: "Sushi",
//   description: "Finest fish and veggies",
//   price: 22.99,
// },
// {
//   id: "m2",
//   name: "Schnitzel",
//   description: "A german specialty!",
//   price: 16.5,
// },
// {
//   id: "m3",
//   name: "Barbecue Burger",
//   description: "American, raw, meaty",
//   price: 12.99,
// },
// {
//   id: "m4",
//   name: "Green Bowl",
//   description: "Healthy...and green...",
//   price: 18.99,
// },
// ];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [loadingMeals, setLoadingMeals] = useState(true);
  useEffect(() => {
    const fetchMeals = async () => {
      setLoadingMeals(true);
      const response = await fetch(
        "https://react-first-38e92-default-rtdb.firebaseio.com/meals.json"
      );

      const responseData = await response.json();
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
    };
    fetchMeals();
    setLoadingMeals(false);
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      name={meal.name}
      key={meal.id}
      id={meal.id}
      price={meal.price}
      description={meal.description}
    >
      {meal.name}
    </MealItem>
  ));
  return (
    <section className={styles.meals}>
      <Card>
        {!loadingMeals && <ul>{mealsList}</ul>}
        {loadingMeals && "loading..."}
      </Card>
    </section>
  );
};

export default AvailableMeals;
