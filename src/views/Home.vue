<template>
    <ion-content>
        <div class="head-greeting flex justify-evenly p-2">
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
        <ion-list class="border-2 border-red-500">
            <ion-list-header>
                <div class="flex justify-between items-center">
                    <h3 class="text-2xl font-bold">Special Offers!</h3>
                    <ion-item type="button">
                        <ion-text slot="end">
                            View All
                            <ion-icon aria-hidden="true" :icon="chevronForwardOutline"></ion-icon>
                        </ion-text>
                    </ion-item>
                </div>
            </ion-list-header>
            <ion-item>
                <ion-card>
                    <ion-img />
                </ion-card>
            </ion-item>
        </ion-list>

        <ion-list>
            <ion-list-header>
                <h3 class="text-2xl font-bold">Category</h3>
            </ion-list-header>
            <ion-item>
                <ion-card>
                    <ion-img />
                    <ion-card-content>

                    </ion-card-content>
                </ion-card>
            </ion-item>
        </ion-list>

        <ion-list>
            <ion-list-header>
                <h3 class="text-2xl font-bold">What's New?</h3>
            </ion-list-header>
            <ion-item>
                <ion-card>
                    <ion-img />
                    <ion-card-content>

                    </ion-card-content>
                </ion-card>
            </ion-item>
        </ion-list>

        <ion-list>
            <ion-list-header>
                <h3 class="text-2xl font-bold">Most Popular</h3>
            </ion-list-header>
            <ion-item>
                <ion-card>
                    <ion-img />
                    <ion-card-content>

                    </ion-card-content>
                </ion-card>
            </ion-item>
        </ion-list>
    </ion-content>
</template>


<script setup lang="ts">
import { IonSearchbar, IonContent, IonIcon, IonList, IonListHeader, IonLabel, IonCard, IonCardContent, IonImg, IonText, IonItem, } from '@ionic/vue';
import { chevronForwardOutline } from 'ionicons/icons';
import FoodApp from "@/icons/FoodApp.svg"
</script>