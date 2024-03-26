import nemRan from "../../assets/food-nemRan.png"
import bao from "../../assets/food-bao.png"
import beer from "../../assets/food-beer.png"
import bunDau from "../../assets/food-bunDau.png"
import comGa from "../../assets/food-comGa.png"
import comTom from "../../assets/food-comTom.png"
import dimsum from "../../assets/food-dimsum.png"
import phoBeef from "../../assets/food-phoBeef.png"
import phoGa from "../../assets/food-phoGa.png"
import riceMango from "../../assets/food-riceMango.png"
import springRoll from "../../assets/food-springRolls.png"
import cafe from "../../assets/food-cafe.png"
import pudding from "../../assets/food-pudding.png"
import boBun from "../../assets/food-boBun.png"


export type FoodDetail = {
    id: number;
    nameOfDish: string;
    price: string;
    details?: string;
    illustration: string;
}

export const starters: FoodDetail[] = [
    {
        id: 1,
        nameOfDish: "Nem",
        price: "€6",
        details: "4 fried spring rolls (nem) of your choice: pork, chicken, shrimp, vegetarian.",
        illustration: nemRan
    },
    {
        id: 2,
        nameOfDish: "Spring rolls",
        price: "€4",
        details: "2 spring rolls of your choice: shrimp/beef/chicken/tofu.",
        illustration: springRoll
    },
    {
        id: 3,
        nameOfDish: "Dim sum",
        price: "€4",
        details: "Basket of dim sum contains 3 of the same filling.",
        illustration: dimsum
    }
]

export const mains: FoodDetail[] = [
    {
        id: 4,
        nameOfDish: "Baozi",
        price: "€10",
        details: "Basket of baozi contains 4 of the same filling.",
        illustration: bao
    },
    {
        id: 5,
        nameOfDish: "Hanoi Style Beef Phở",
        price: "€12.5",
        details: "Rice noodles, beef bone broth for 24 hours, spring onion, coriander, onion...",
        illustration: phoBeef
    },
    {
        id: 6,
        nameOfDish: "Hanoi Style Chicken Phở",
        price: "€12",
        details: "Rice noodles, chicken, chicken bone broth, spring onion, coriander, parsley, lemon leaves...",
        illustration: phoGa
    },
    {
        id: 7,
        nameOfDish: "Bun Dau Mam Tom",
        price: "€16",
        details: "Rice vermicelli, deep fried tofu, pork nem, green sticky rice patties, pork shank meat...",
        illustration: bunDau
    },
    {
        id: 8,
        nameOfDish: "Bo Bun",
        price: "€14",
        details: "Rice vermicelli, beef, cucumber, carrot, salad, mint, coriander, peanuts, fish sauce...",
        illustration: boBun
    },
    {
        id: 9,
        nameOfDish: "Chicken Rice",
        price: "€11",
        details: "Rice, chicken, cucumber, fried onion, mango salad (mango, lettuce, coriander, marinated carrots, laksa leaves, fish sauce...)",
        illustration: comGa
    },
    {
        id: 10,
        nameOfDish: "Shrimp Rice",
        price: "€11",
        details: "Rice, shrimp, cucumber, fried onion, onion, mango salad (mango, lettuce, coriander, marinated carrots, laksa leaves, fish sauce...)",
        illustration: comTom
    }
]

export const desserts: FoodDetail[] = [
    {
        id: 11,
        nameOfDish: "Mango Pudding",
        price: "€6",
        illustration: pudding
    },
    {
        id: 12,
        nameOfDish: "Sticky Rice with Mango",
        price: "€4",
        details: "Sticky rice, mango, coconut milk.",
        illustration: riceMango
    },
]

export const drinks: FoodDetail[] = [
    {
        id: 1,
        nameOfDish: "Vietnamese Coffee",
        price: "€6",
        illustration: cafe
    },
    {
        id: 2,
        nameOfDish: "Hanoi Beer",
        price: "€4",
        illustration: beer
    },
]