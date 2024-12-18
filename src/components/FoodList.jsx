// import FoodCart component to call it in the FoodList fn
import FoodCart from "./FoodCard";

let foods = [
    'ramen',
    'sushi',
    'pasta',
    'pork buns',
    'lasagna',
    'pizza',
    'dumplings',
    'Butter Chicken',
    'Laksa'
];

// create and export the function
// function needs to have the same name as the Component's name
// returns ONLY ONE HTML component itself
// Use curly braces when you want to have JS command in the HTML elements
// .map method used to run a loop in the foods list array
// index parameter on map method to uniquely identify components
export default function FoodList(){
    return (
        <section>
                {
                    foods.map((food, index) => {
                        // Create a key-value pair for the props
                        return <p><FoodCart key={index} foodName={food}/></p>
                    })
                }
        </section>
    )
}