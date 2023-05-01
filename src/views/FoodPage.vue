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

            <div class="flex flex-col justify-center items-center">
                <div class="w-full">
                    <div class="flex justify-center">
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
                            <p class="text-2xl text-[#D71921] font-bold"><span>&#8369;</span>&nbsp; {{food?.price}}</p>
                            <div class="flex items-center">
                                <ion-button class="z-5 font-extrabold" color="danger" @click.stop="increase">+</ion-button>
                                <span class="p-2 text-2xl font-bold">{{qty}}</span>
                                <ion-button class="z-5 font-extrabold" color="danger" @click.stop="decrease">-</ion-button>
                            </div>
                        </div>
                    </div>

                    <div class="px-2">
                        <ion-text>
                            <h3 class="font-semibold text-lg">Beverages</h3>
                        </ion-text>

                        <ion-item class="rounded-lg">
                            <ion-select aria-label="fruit" placeholder="Select a Drink">
                                <ion-select-option v-for="drink in drinks" :value="drink">{{ drink
                                }}</ion-select-option>
                            </ion-select>
                        </ion-item>
                    </div>

                    <div class="flex justify-evenly p-2 my-3">
                        <div class="radio-handler" v-for="size in sizes" :key="size">
                            <input class="reward-radio" type="radio" :value="size" name="drinkSize" :id="size" />
                            <label class="lbl-btn-radio font-bold text-lg" :for="size">{{ size }}</label>
                        </div>
                    </div>

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
        size: "auto",
        alignment: "center",
        dismissOnSelect: true
    });
    await popover.present();
}

const qty = ref(0);

const increase = () => {
    if (qty.value >= 0) {
        qty.value++
    }
}
const decrease = () => {
    if (qty.value > 0) {
        qty.value--
    }
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
.reward-radio {
    display: none;
}

.lbl-btn-radio {
    padding: 10px;
    background-color: antiquewhite;
    border-radius: 20px;
    color: #010101;
    cursor: pointer;
}

.reward-radio:checked+.lbl-btn-radio {
    background-color: rgb(217, 127, 10);
    color: #d8c6c6;
}

</style>