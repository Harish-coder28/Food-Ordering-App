import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Biryani",
    description: "Fragrant rice dish with meat or vegetables",
    price: 22.99
  },
  
  {
    id: "m2",
    name: "Butter Chicken",
    description: "Creamy and buttery chicken curry",
    price: 16.5
  },
  
  {
    id: "m3",
    name: "Paneer Tikka",
    description: "Grilled cottage cheese cubes with Indian spices",
    price: 12.99
  },
  
  {
    id: "m4",
    name: "Samosa",
    description: "Deep-fried pastry filled with spiced potatoes and peas",
    price: 18.99
  },
  {
    id: "m5",
    name: "Chole Bhature",
    description: "Spiced chickpeas served with deep-fried bread",
    price: 14.99
  },
  
  {
    id: "m6",
    name: "Masala Dosa",
    description: "Fermented crepe with a spiced potato filling",
    price: 11.99
  },
  
  {
    id: "m7",
    name: "Rogan Josh",
    description: "Aromatic lamb curry with rich spices",
    price: 24.99
  },
  
  {
    id: "m8",
    name: "Tandoori Chicken",
    description: "Marinated and grilled chicken in a tandoor",
    price: 19.5
  },
  
  {
    id: "m9",
    name: "Aloo Gobi",
    description: "Cauliflower and potatoes cooked with Indian spices",
    price: 15.99
  },
  
  {
    id: "m10",
    name: "Pani Puri",
    description: "Hollow and crispy puris filled with spicy tangy water",
    price: 8.99
  },
  
  {
    id: "m11",
    name: "Palak Paneer",
    description: "Cottage cheese in a creamy spinach sauce",
    price: 17.5
  },
  
  {
    id: "m12",
    name: "Dhokla",
    description: "Steamed and fermented gram flour cake",
    price: 10.99
  },
  
  {
    id: "m13",
    name: "Chicken Biryani",
    description: "Fragrant rice dish with spiced chicken",
    price: 23.99
  },
  
  {
    id: "m14",
    name: "Pav Bhaji",
    description: "Spiced vegetable curry served with a soft bread roll",
    price: 16.99
  },
  
  {
    id: "m15",
    name: "Jalebi",
    description: "Deep-fried pretzel-shaped dessert soaked in sugar syrup",
    price: 9.99
  },
  
  {
    id: "m16",
    name: "Rajma Chawal",
    description: "Red kidney beans curry served with rice",
    price: 13.99
  },
  
  {
    id: "m17",
    name: "Hyderabadi Haleem",
    description: "A thick stew made of wheat, barley, and meat",
    price: 20.99
  },
  
  {
    id: "m18",
    name: "Kofta Curry",
    description: "Meat or vegetable balls in a flavorful curry",
    price: 18.5
  },
  
  {
    id: "m19",
    name: "Murg Makhani (Chicken Butter Masala)",
    description: "Creamy and buttery chicken curry",
    price: 22.5
  },
  
  {
    id: "m20",
    name: "Gulab Jamun",
    description: "Deep-fried milk dumplings soaked in sugar syrup",
    price: 12.5
  },
  
  
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
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
