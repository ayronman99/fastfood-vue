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
                    <ion-label></ion-label>

                    <div class="w-full flex flex-col">
                        <div class="ps-0 pe-2 flex justify-between p-2">
                            <ion-text>
                                <p>{{ itemName ?? "Item Name" }}</p>
                            </ion-text>
                            <ion-checkbox justify="end"></ion-checkbox>
                        </div>

                        <div class="w-full p-2 flex justify-between">
                            <ion-text>
                                <p>&#8369; {{ price ?? 0 }}</p>
                            </ion-text>
                            <div>
                                <p><span>+</span>{{ qty ?? 1 }}<span>-</span></p>
                            </div>
                        </div>
                    </div>

                </ion-item>
            </ion-item>
        </div>
    </ion-item>
</template>

<script setup lang="ts">

import { IonItem, IonText, IonThumbnail, IonCheckbox, IonLabel } from "@ionic/vue";

const props = defineProps({
    imgSrc: String,
    itemName: String,
    price: Number,
    qty: Number
})
</script>

