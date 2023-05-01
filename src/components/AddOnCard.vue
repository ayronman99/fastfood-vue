<template>
    <ion-item class="relative ">
        <div class="w-full">
            <ion-item class="ion-px-0 w-full rounded-md border-2 border-l-zinc-600">

                <ion-thumbnail class="object-scale-down">
                    <img
                        :src="imgSrc ??
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/640px-No_image_available.svg.png'" />
                </ion-thumbnail>
                <ion-item class="ion-px-0 w-full">


                    <div class="w-full flex flex-col">
                        <div class="ps-0 pe-2 flex justify-between p-2">
                            <ion-text>
                                <ion-label class="hidden"></ion-label>

                                <p>{{ itemName ?? "Item Name" }}</p>
                            </ion-text>
                            <ion-checkbox aria-label="Label" justify="end"></ion-checkbox>
                        </div>

                        <div class="w-full p-2 flex justify-between">
                            <ion-text>
                                <p>&#8369; {{ price ?? 0 }}</p>
                            </ion-text>
                            <div class="flex items-center">
                                <ion-button class="z-5 font-extrabold text-base" color="danger" @click.stop="increase">+</ion-button>
                                <span class="p-2">{{qty}}</span>
                                <ion-button class="z-5 font-extrabold text-base" color="danger" @click.stop="decrease">-</ion-button>
                            </div>
                        </div>
                    </div>

                </ion-item>
            </ion-item>
        </div>
    </ion-item>
</template>

<script setup lang="ts">

import { IonItem, IonText, IonThumbnail, IonCheckbox, IonLabel, IonButton } from "@ionic/vue";
import { ref } from "vue";

const props = defineProps({
    imgSrc: String,
    itemName: String,
    price: Number,
    qty: Number
})

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

