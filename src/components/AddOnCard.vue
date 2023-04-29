<template>
    <ion-item class="relative">
        <ion-label></ion-label>
        <div class="w-full">
            <ion-item class="w-full rounded-md border-2 border-l-zinc-600">
                
                <ion-thumbnail class="object-scale-down">
                    <img
                        :src="imgSrc ??
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/640px-No_image_available.svg.png'" />
                </ion-thumbnail>
                <ion-item class="w-full bg-blue-400">
                    <div class="w-full flex flex-col">
                        <div class="flex justify-between p-3 ">
                            <ion-text>
                                <p>{{ itemName ?? "Item Name" }}</p>
                            </ion-text>
                         
                        </div>

                        <div class="w-full p-3 flex justify-between">
                            <ion-text>
                                <p>&#8369; {{ price ?? 0 }}</p>
                            </ion-text>
                            <div>
                                <p><span>+</span>1<span>-</span></p>
                            </div>
                        </div>
                    </div>
                    <ion-checkbox justify="end" class="absolute -left-5 -top-6"></ion-checkbox>
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