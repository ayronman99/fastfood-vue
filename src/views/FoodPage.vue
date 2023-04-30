<template>
    <ion-page>
        <ion-content>
            <ion-header :translucent="true">
                <ion-toolbar>
                    <ion-buttons slot="start">
                        <ion-back-button default-href="/home"></ion-back-button>
                    </ion-buttons>
                    <ion-title>
                        {{ food?.title }}
                    </ion-title>
                </ion-toolbar>
            </ion-header>
            <!--max-[635px]:w-[343px]
            -->

            <div class="flex flex-col justify-center items-center p-9 border-2 border-yellow-900">
                <div class="w-full border-2 border-red-900">
                    <div class="flex justify-center border-2 border-red-900">
                        <ion-img
                            class="w-9/12 max-[635px]:h-[350px] min-[640px]:w-[600px] min-[640px]:h-[550px] object-cover rounded-lg "
                            :alt="food?.title" :src="food?.image" />
                    </div>

                    <div class="p-3">
                        <ion-text class="text-left">
                            <h2>{{ food?.title }}</h2>
                            <span>Rating {{ food?.rating }}</span>
                        </ion-text>
                        <ion-text>
                            <p> Here's a small text description for the card content. Nothing more, nothing less.
                            </p>
                        </ion-text>

                        <div class="flex justify-between items-center pt-2">
                            <p><span>&#8369;</span>&nbsp; 172</p>
                            <div><span>+</span>1<span>-</span></div>
                        </div>
                    </div>

                    <div class="px-2 border-2 border-l-zinc-950">
                        <ion-text>
                            <h3 class="font-semibold text-lg">Beverages</h3>
                        </ion-text>

                        <ion-item class="border-2 border-emerald-500 rounded-lg">
                            <ion-select aria-label="fruit" placeholder="Select a Drink">
                                <ion-select-option v-for="drink in drinks" :value="drink">{{ drink
                                }}</ion-select-option>
                            </ion-select>
                        </ion-item>
                        <!-- <ion-list > </ion-list> -->
                    </div>
                    <ion-radio-group value="strawberries" class="flex justify-evenly">
                        <ion-radio v-for="size in sizes" :value="size">{{ size }}</ion-radio>
                    </ion-radio-group>

                    <ion-list class="mb-5">
                        <ion-list-header class="font-semibold text-lg">Add-Ons</ion-list-header>
                        <AddOnCard :price="14" :itemName="'YumBurjer'" />
                    </ion-list>
                </div>
            </div>
            <ion-fab slot="fixed" horizontal="start" vertical="bottom">
                <ion-fab-button class="w-[95vw] h-[50px]">
                    Add to Bag
                </ion-fab-button>
            </ion-fab>
        </ion-content>

    </ion-page>
</template>



<script setup lang="ts">
import { IonListHeader, IonImg, IonButtons, IonItem, IonContent, IonHeader, IonBackButton, IonTitle, IonToolbar, IonText, IonPage, IonList, IonSelect, IonSelectOption, IonRadioGroup, IonRadio, IonFab, IonFabButton } from '@ionic/vue';
import { useRoute } from "vue-router";
import { ref } from 'vue';
import store from "@/store";
import AddOnCard from '@/components/AddOnCard.vue';
const route = useRoute();
const paramsId = route.params.id;
const food = store.state.foodData.find(data => data.id === paramsId);

const drinks = ref(["Coke", "Sprite", "Royal"]);
const sizes = ref(["Regular", "Medium", "Large"]);
</script>


<style scoped>
ion-img::part(image) {
    border-radius: 25px !important;
}

ion-fab-button::part(native) {
    background-color: #D71921;
    border-radius: 15px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, .3), 0px 1px 3px 1px rgba(0, 0, 0, .15);
    color: #dedede;
}

ion-fab-button::part(native):hover {
    background-color: #6b9456;
    color: black;
}

ion-fab-button::part(native):active::after {
    background-color: #87d361;
}
</style>