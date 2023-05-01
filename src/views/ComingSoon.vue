<template>
    <ion-content>
        <div class="flex flex-col justify-center items-center h-full">
            <img class="h-56" :src="ComingSoon" alt="Feature coming soon" />
            <h1 class="text-3xl font-semibold"> Feature Coming Soon!</h1>
            <p class="text-lg font-medium">Stay Tuned</p>
        </div>
    </ion-content>
</template>


<script setup lang="ts">
import ComingSoon from "@/icons/undrawMaintenance.svg";
import { IonContent } from "@ionic/vue";
</script>