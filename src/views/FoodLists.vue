<template>
    <ion-searchbar placeholder="craving for some kimbap, eel and bread?"></ion-searchbar>

    <ion-grid>
        <ion-row>
            <ion-col size="6" size-md="4" size-xl="2" v-for="food in store.state.foodData" :key="food.id">
                <ion-card class="h-[270px] w-[170px] sm:h-[275px] sm:w-auto" :router-link="`/order/${food.id}`">
                    <div class="h-2/4">
                        <ion-img class="object-cover h-full w-full" :alt="food.title" :src="food.image" />
                    </div>

                    <ion-card-header class="h-2/5">
                        <ion-card-title  class="h-4/5 border-2 border-cyan-500">{{ food.title }}</ion-card-title>
                        <ion-card-subtitle>
                            <p>{{ `Price: ${food.price} ` }}</p>
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
</script>