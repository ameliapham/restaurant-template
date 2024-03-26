import nem from "../../assets/food-nem.webp"

export type FoodItem = {
    id: number;
    nameOfDish: string;
    price: string;
    details: string;
    illustration: string;
}

export const foodItems: FoodItem[] = [
    {
        id: 1,
        nameOfDish: "Nem",
        price: "€10",
        details: "4 fried spring rolls (nem) of your choice: pork, chicken, shrimp, vegetarian.",
        illustration: nem
    },
    {
        id: 2,
        nameOfDish: "Nem",
        price: "€10",
        details: "4 fried spring rolls (nem) of your choice: pork, chicken, shrimp, vegetarian.",
        illustration: nem
    },
    {
        id: 3,
        nameOfDish: "Nem",
        price: "€10",
        details: "4 fried spring rolls (nem) of your choice: pork, chicken, shrimp, vegetarian.",
        illustration: nem
    }
]