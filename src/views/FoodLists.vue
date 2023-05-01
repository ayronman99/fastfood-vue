<template>
    <ion-searchbar class="sticky top-0 z-5" :value="searchVal" @input="event => searchVal = event.target.value"
        placeholder="craving for some kimbap, eel and bread?" :animated="true"></ion-searchbar>

    <ion-grid>
        <ion-row>
            <ion-col size="6" size-sm="4" size-md="4" size-xl="2" v-for="food in filteredStore" :key="food.id">
                <ion-card class="h-[270px] w-[170px] sm:h-[275px] sm:w-auto" :router-link="`/order/${food.id}`">
                    <div class="h-2/4">
                        <ion-img class="object-cover h-full w-full" :alt="food.title" :src="food.image" />
                    </div>

                    <ion-card-header class="h-2/5">
                        <ion-card-title class="h-4/5">
                            <p
                                class="text-ellipsis overflow-hidden h-[60px] hover:relative hover:overflow-visible hover:h-auto hover:bg-[#1c1c1d] hover:rounded-md hover:z-5 hover:px-1">
                                {{ food.title
                                }}
                            </p>
                        </ion-card-title>
                        <ion-card-subtitle>
                            <p class="text-clip">{{ `Price: ${food.price} ` }}</p>
                            <p>{{ `Rating: ${food.rating}` }}</p>
                        </ion-card-subtitle>
                    </ion-card-header>
                </ion-card>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<script setup lang="ts">
import { IonSearchbar, IonGrid, IonRow, IonCol, IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonImg } from "@ionic/vue"
import store from "@/store";
import { ref, computed } from "vue";

const searchVal = ref("");
const ogStore = store.state.foodData;
const filteredStore = computed(() => ogStore.filter(items => items.title.toLocaleLowerCase().includes(searchVal.value.toLocaleLowerCase())))



</script>