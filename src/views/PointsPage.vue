<template>
    <ion-content>
        <div class="w-full p-4">
            <div id="first-half">
                <div class="w-full p-4">
                    <ion-text class="w-full">
                        <p class="flex justify-between items-center"> <span class="font-bold text-2xl">Beginner Tier</span>
                            <span class="flex justify-between items-center">View All<ion-icon aria-hidden="true"
                                    :icon="chevronForwardOutline"></ion-icon></span>
                        </p>
                    </ion-text>
                    <ion-text>
                        <p class="font-thin text-base text-slate-400">Earn points by purchasing from our store. Vestibulum
                            ante ipsum primis in faucibus orci
                            luctus
                            et.</p>
                    </ion-text>
                </div>
                <div>
                    <CircleProgressBar class="py-5" :value="value" :max="max" strokeWidth="10px" rounded>
                        {{ value }} / {{ max }}
                    </CircleProgressBar>
                </div>
            </div>
            <div id="second-half">
                <ion-text class="w-full">
                            <p class="flex justify-between items-center">
                                <span class="font-bold text-2xl">Rewards</span>
                                <span class="flex justify-between items-center text-red-500">How it Works
                                    <ion-icon aria-hidden="true" :icon="chevronForwardOutline"></ion-icon>
                                </span>
                            </p>
                        </ion-text>

                    <div class="flex space-x-5 p-4 overflow-x-scroll sm:overflow-x-none">
                        <div class="radio-handler" v-for="tier in rewardTierList" :key="tier">
                            <input class="reward-radio" type="radio" :value="tier" name="radioRewards" :id="tier" />
                            <label class="lbl-btn-radio z-5" :for="tier">{{ tier }}</label>
                        </div>
                    </div>

                    <div class="py-5">
                        <ion-card class="flex">
                            <ion-img alt="Steak" :src="Steak" />

                            <ion-card-content>
                                <ion-card-title>Steak Fries Veggies</ion-card-title>
                                <ion-card-subtitle>Meat</ion-card-subtitle>
                                <div>
                                    <span class="font-thin text-red-500">20 Points</span>
                                </div>
                            </ion-card-content>
                        </ion-card>
                    </div>
            </div>
        </div>
    </ion-content>
</template>


<script setup lang="ts">
import { IonContent, IonIcon, IonText, IonList, IonListHeader } from '@ionic/vue';
import { chevronForwardOutline } from 'ionicons/icons';
import { CircleProgressBar } from 'vue3-m-circle-progress-bar';
import Steak from '@/imgs/rewards/steak.png'
import { ref } from 'vue';
const value = 69;
const max = 160;

const rewardTierList = ref(["All", "Beginner", "Intermediate", "Loyal", "Disciple"])
</script>

<style scoped>
.reward-radio {
    display: none;
    /* visibility: hidden; */
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

/* .lbl-btn-radio {
    border: 2px solid red;
    padding: 10px;
} */
</style>