<template>
    <ion-searchbar placeholder="craving for some kimbap, eel and bread?"></ion-searchbar>

    <ion-grid>
        <ion-row>
            <ion-col size="12" size-sm="6" size-md="4" size-lg="3" v-for="food in store.state.foodData" :key="food.id">
                <ion-card color="tertiary" :router-link="`/order/${food.id}`">
                    <img :alt="food.title" :src="food.image" />

                    <ion-card-header>
                        <ion-card-title>{{ food.title }}</ion-card-title>
                        <ion-card-subtitle>Rating: {{ food.rating }}</ion-card-subtitle>
                    </ion-card-header>
                </ion-card>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>


<script setup lang="ts">
import { IonSearchbar, IonGrid, IonRow, IonCol, IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCardContent } from "@ionic/vue"
import store from "@/store";
console.log(store.state.foodData);
</script>