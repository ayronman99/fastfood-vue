import { createStore } from 'vuex';

import tData from "../../data.json";
type TDataType = {
    id: string;
    title: string;
    difficulty: string;
    image: string;
    rating: number;
    price: Number
}

let foodData: TDataType[] = [];
let priceArray: any = [];

const fetchData = async () => {
    const res = await fetch("https://fakerapi.it/api/v1/products?_quantity=50")
        .then(res => res.json())
        .then(data => data.data)
        .catch(e => console.error(e))
    return res;
}

priceArray.push(await fetchData());
const tDataRater = () => {
    for (let i = 0; i < 50; i++){
        foodData.push({...tData[i], rating: Number((Math.random() * 10).toFixed(2)), price: priceArray[0][i]?.price})
    }
}

tDataRater();


const store = createStore({
    state() {
        return {
            foodData
        }
    }
})

export default store;