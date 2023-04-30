<template>
  <!-- <ion-popover :trigger="triggerID" trigger-action="click" size="auto" alignment="center">
   
  </ion-popover> -->
  <ion-content>
      <div class="flex flex-col items-center justify-center rounded-lg p-2 border-2 border-red-500">
        <IonThumbnail>
          <img :src="Success" alt="success" />
        </IonThumbnail>
        <ion-text>
          <h2>Successfully Added!</h2>
        </ion-text>
        <ion-button>
          Proceed to Checkout
        </ion-button>
        <ion-button fill="clear" @click="$router.push('/order')">
          Add More
        </ion-button>
      </div>
    </ion-content>
</template>


<script setup lang="ts">
import { IonText, IonContent, IonButton, IonPopover, IonThumbnail } from '@ionic/vue';
import Success from "@/icons/success.svg"
import { Router } from 'vue-router'
const prop = defineProps({
  triggerID: String
})
</script>

<style>
ion-popover {
  --backdrop-opacity: 0.75;
  --offset-y: -50%;
  --min-width: 200px;
}
</style>