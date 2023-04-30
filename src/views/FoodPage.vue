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

            <div class="flex flex-col justify-center items-center border-2 border-yellow-900">
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
                    <ion-button id="addtobag" expand="block" class="sticky bottom-0 z-10" @click="openPopover">
                        Add To Bag
                    </ion-button>
                    
                </div>

            </div>
        </ion-content>
        <!-- <ItemAdded triggerID="addtobag" /> -->
    </ion-page>
</template>



<script setup lang="ts">
import { IonListHeader, IonImg, IonButtons, IonItem, IonContent, IonHeader, IonBackButton, IonTitle, IonToolbar, IonText, IonPage, IonList, IonSelect, IonSelectOption, IonRadioGroup, IonRadio, IonButton, popoverController } from '@ionic/vue';
import { useRoute } from "vue-router";
import { ref } from 'vue';
import store from "@/store";
import AddOnCard from '@/components/AddOnCard.vue';
import ItemAdded from '@/components/ItemAdded.vue';

const route = useRoute();
const paramsId = route.params.id;
const food = store.state.foodData.find(data => data.id === paramsId);

const drinks = ref(["Coke", "Sprite", "Royal"]);
const sizes = ref(["Regular", "Medium", "Large"]);

const openPopover = async (ev: Event) => {
        const popover = await popoverController.create({
          component: ItemAdded,
            event: ev,
            size:"auto",
            alignment: "center",
            dismissOnSelect: true
        });
        await popover.present();
}

const addMore = () => {
    
}
</script>


<style scoped>
ion-img::part(image) {
    border-radius: 25px !important;
}

ion-button {
    --background: #D71921;
    --padding-top: 10px;
    --padding-bottom: 10px;
}

ion-button:hover {
    --background: #25c977;
    color: black;
}
</style>