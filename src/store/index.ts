import { createStore } from 'vuex';
import { ref } from 'vue';

import tData from "../../data.json";
type TDataType = {
    id: string;
    title: string;
    difficulty: string;
    image: string;
    rating: number
}

let tDataWRating: TDataType[] = []

//{...tData, rating: (Math.random()  * 10).toFixed(2)}
const tDataRater = () => {
    for (let i = 0; i < tData.length; i++){
        tDataWRating.push({...tData[i], rating: Number((Math.random() * 10).toFixed(2))})
    }
}
tDataRater();

const store = createStore({
    state() {
        return {
            foodData: tDataWRating
        }
    }
})

export default store;