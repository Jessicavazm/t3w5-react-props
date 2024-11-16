// Pass the props parameter and define a const variable for the props
export default function FoodCart(props){
    const {foodName} = props;
    return (
        <div>
            <h3>{foodName}</h3>
            <p>Description of the Food</p>
        </div>
    )
}