<template>
    <ion-content>
        <div class="flex justify-evenly sm:justify-start p-2">
            <img :src="FoodApp" alt="logo" />
            <div class="p-2">
                <ion-text>
                    <p class="text-lg font-medium">
                        Anneoyong, <span class="font-bold">Momo!</span>
                    </p>
                </ion-text>
                <ion-text>
                    <p class="font-bold text-2xl">
                        What do you want to eat?
                    </p>
                </ion-text>
            </div>
        </div>
        <ion-searchbar placeholder="craving for some kimbap, eel and bread?"></ion-searchbar>
        <ion-list>
            <ion-list-header>
                <div class="w-full flex justify-between items-center px-2">
                    <div>
                        <h3 class="text-2xl font-bold">Special Offers!</h3>
                    </div>
                    <div class="flex items-center">
                        <ion-text>
                            View All
                        </ion-text>
                        <ion-icon aria-hidden="true" :icon="chevronForwardOutline"></ion-icon>
                    </div>
                </div>
            </ion-list-header>
            <div class="p-2">
                <div class="flex flex-nowrap justify-start overflow-x-scroll space-x-4">
                    <img :src="Item1" alt="item1" class="object-cover rounded-md w-[300px] h-[160px]" />
                    <img :src="Item2" alt="item2" class="object-cover rounded-md w-[300px] h-[160px]" />
                    <img :src="Item1" alt="item1" class="object-cover rounded-md w-[300px] h-[160px]" />
                    <img :src="Item2" alt="item2" class="object-cover rounded-md w-[300px] h-[160px]" />
                </div>
            </div>

        </ion-list>

        <ion-list>
            <ion-list-header>
                <h3 class="text-2xl font-bold">Category</h3>
            </ion-list-header>
            <div class="p-2">
                <div class="flex flex-nowrap justify-start overflow-x-scroll space-x-4">
                    <img :src="Category1" alt="category1" class="object-cover rounded-md w-[200px] h-[300px]" />
                    <img :src="Category2" alt="category2" class="object-cover rounded-md w-[200px] h-[300px]" />
                    <img :src="Category1" alt="category1" class="object-cover rounded-md w-[200px] h-[300px]" />
                    <img :src="Category2" alt="category2" class="object-cover rounded-md w-[200px] h-[300px]" />
                </div>
            </div>
        </ion-list>

        <ion-list>
            <ion-list-header>
                <h3 class="text-2xl font-bold">What's New?</h3>
            </ion-list-header>
            <ion-item>
                <ion-img :src="WhatsNew" alt="what's new?" class="rounded-md" />
            </ion-item>
        </ion-list>

        <ion-list>
            <ion-list-header>
                <h3>Most Popular</h3>
            </ion-list-header>
            <ion-grid>
                <ion-row>
                    <ion-col size="6" size-sm="4" size-md="4" size-xl="2" v-for="popular in 10"
                        :key="popularFood[popular].id">
                        <ion-card class="h-[270px] w-[170px] sm:h-[275px] sm:w-auto"
                            :router-link="`/order/${popularFood[popular].id}`">
                            <div class="h-2/4">
                                <ion-img class="object-cover h-full w-full" :alt="popularFood[popular].title"
                                    :src="popularFood[popular].image" />
                            </div>

                            <ion-card-header class="h-2/5">
                                <ion-card-title class="h-4/5" :text-wrap="false">
                                    <p
                                        class="text-ellipsis overflow-hidden h-[66px] hover:relative hover:overflow-visible hover:h-auto hover:bg-[#1c1c1d] hover:rounded-md hover:z-5 hover:px-1">
                                        {{ popularFood[popular].title
                                        }}
                                    </p>
                                </ion-card-title>
                                <ion-card-subtitle>
                                    <p>{{ `Price: ${popularFood[popular].price} ` }}</p>
                                    <p>{{ `Rating: ${popularFood[popular].rating}` }}</p>
                                </ion-card-subtitle>
                            </ion-card-header>
                        </ion-card>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-list>

    </ion-content>
</template>


<script setup lang="ts">
import { IonSearchbar, IonContent, IonIcon, IonList, IonListHeader, IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader, IonImg, IonText, IonItem, IonGrid, IonRow, IonCol, } from '@ionic/vue';
import { chevronForwardOutline } from 'ionicons/icons';
import FoodApp from "@/icons/FoodApp.svg"
import store from '@/store';

import Item1 from "@/imgs/specialOffers/item1.jpg"
import Item2 from "@/imgs/specialOffers/item2.png"

import Category1 from "@/imgs/category/category1.jpg"
import Category2 from "@/imgs/category/category2.png"

import WhatsNew from "@/imgs/whatsNew/Whatsnew.jpg"
import { ref } from 'vue';
const rewardTierList = ref(["All", "Beginner", "Intermediate", "Loyal", "Disciple"])


const popularFood = store.state.foodData;

</script>

<style scoped>
ion-img::part(image) {
    border-radius: 10px;
}</style>