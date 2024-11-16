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
export default function FoodList(){
    return (
        <section>
            <ul>
                {
                    foods.map(food => {
                        return <li>{food}</li>
                    })
                }
            </ul>
        </section>
    )
}