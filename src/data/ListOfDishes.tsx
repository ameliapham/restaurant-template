import { LocalizedString } from "i18n"

import nemRan from "assets/food-nemRan.webp"
import bao from "assets/food-bao.webp"
import beer from "assets/food-beer.webp"
import bunDau from "assets/food-bunDau.webp"
import comGa from "assets/food-comGa.webp"
import comTom from "assets/food-comTom.webp"
import dimsum from "assets/food-dimsum.webp"
import phoBeef from "assets/food-phoBeef.webp"
import phoGa from "assets/food-phoGa.webp"
import riceMango from "assets/food-riceMango.webp"
import springRoll from "assets/food-springRolls.webp"
import cafe from "assets/food-cafe.webp"
import pudding from "assets/food-pudding.webp"
import boBun from "assets/food-boBun.webp"



export type ListOfDishes = {
    nameOfDish: LocalizedString;
    price: string;
    details?: LocalizedString;
    illustration: string;
}

export const starters: ListOfDishes[] = [
    {
        nameOfDish: "Nem",
        price: "€6",
        details: {
            en: "4 fried spring rolls (nem) of your choice: pork, chicken, shrimp, vegetarian.",
            fr: "4 nems frits de votre choix : porc, poulet, crevette, végétarien.",
        },    
        illustration: nemRan
    },
    {
        nameOfDish: {
            en: "Spring rolls",
            fr: "Rouleaux printemps",
        },
        price: "€4",
        details: {
            en: "2 spring rolls of your choice: shrimp/beef/chicken/tofu.",
            fr: "2 rouleaux printemps de votre choix : crevette/bœuf/poulet/tofu.",
        },
        illustration: springRoll
    },
    {
        nameOfDish: "Dim sum",
        price: "€4",
        details: {
            en: "Basket of dim sum contains 3 of the same filling.",
            fr: "Panier de dim sum contient 3 de la même farce.",
        },
        illustration: dimsum
    }
]

export const mains: ListOfDishes[] = [
    {
        nameOfDish: "Baozi",
        price: "€10",
        details: {
            en: "Basket of baozi contains 4 of the same filling.",
            fr: "Panier de baozi contient 4 de la même farce.",
        },
        illustration: bao
    },
    {
        nameOfDish: {
            en: "Hanoi Style Beef Phở",
            fr: "Phở Bœuf Style Hanoï",
        },
        price: "€12.5",
        details: {
            en: "Rice noodles, beef bone broth for 24 hours, spring onion, coriander, onion...",
            fr: "Riz vermicelle, bouillon d'os de bœuf pendant 24 heures, oignon, coriandre, oignon...",
        },
        illustration: phoBeef
    },
    {
        nameOfDish: {
            en: "Hanoi Style Chicken Phở",
            fr: "Phở Poulet Style Hanoï",
        },
        price: "€12",
        details: {
            en: "Rice noodles, chicken, chicken bone broth, spring onion, coriander, parsley, lemon leaves...",
            fr: "Riz vermicelle, poulet, bouillon d'os de poulet, oignon, coriandre, persil, feuilles de citron...",
        },
        illustration: phoGa
    },
    {
        nameOfDish: "Bun Dau Mam Tom",
        price: "€16",
        details: {
            en: "Rice vermicelli, deep fried tofu, pork nem, green sticky rice patties, pork shank meat...",
            fr: "Vermicelle de riz, tofu frit, nem de porc, galettes de riz gluant vert, viande de jarret de porc...",
        },
        illustration: bunDau
    },
    {
        nameOfDish: "Bo Bun",
        price: "€14",
        details: {
            en: "Rice vermicelli, beef, cucumber, carrot, salad, mint, coriander, peanuts, fish sauce...",
            fr: "Vermicelle de riz, bœuf, concombre, carotte, salade, menthe, coriandre, cacahuètes, sauce de poisson...",
        },
        illustration: boBun
    },
    {
        nameOfDish: {
            en: "Chicken Rice",
            fr: "Riz Poulet",
        },
        price: "€11",
        details: {
            en: "Rice, chicken, cucumber, fried onion, mango salad (mango, lettuce, coriander, marinated carrots, laksa leaves, fish sauce...)",
            fr: "Riz, poulet, concombre, oignon frit, salade de mangue (mangue, laitue, coriandre, carottes marinées, feuilles de laksa, sauce de poisson...)",
        },
        illustration: comGa
    },
    {
        nameOfDish: {
            en: "Shrimp Rice",
            fr: "Riz Crevettes",},
        price: "€11",
        details: {
            en: "Rice, shrimp, cucumber, fried onion, onion, mango salad (mango, lettuce, coriander, marinated carrots, laksa leaves, fish sauce...)",
            fr: "Riz, crevettes, concombre, oignon frit, oignon, salade de mangue (mangue, laitue, coriandre, carottes marinées, feuilles de laksa, sauce de poisson...)",
        },
        illustration: comTom
    }
]

export const desserts: ListOfDishes[] = [
    {
        nameOfDish: {
            en: "Mango Pudding",
            fr: "Pudding à la Mangue",},
        price: "€6",
        illustration: pudding
    },
    {
        nameOfDish: {
            en: "Sticky Rice with Mango",
            fr: "Riz Gluant à la Mangue",
        },
        price: "€4",
        details: {
            en: "Sticky rice, mango, coconut milk.",
            fr: "Riz gluant, mangue, lait de coco.",},
        illustration: riceMango
    },
]

export const drinks: ListOfDishes[] = [
    {
        nameOfDish: {
            en: "Vietnamese Coffee",
            fr: "Café Vietnamien",
        },
        price: "€6",
        illustration: cafe
    },
    {
        nameOfDish: {
            en: "Hanoi Beer",
            fr: "Bière Hanoï",
        },
        price: "€4",
        illustration: beer
    },
]