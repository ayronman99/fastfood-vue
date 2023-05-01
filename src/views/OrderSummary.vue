<template>
    <ion-page>
        <ion-content>
            <ion-header :translucent="true">
                <ion-toolbar>
                    <ion-buttons slot="start">
                        <ion-back-button default-href="/home"></ion-back-button>
                    </ion-buttons>
                    <ion-title>
                        Order Summary
                    </ion-title>
                </ion-toolbar>
            </ion-header>

            <ion-card>
                <ion-card-header>
                    <ion-card-title>Hirai Momo</ion-card-title>
                    <ion-note>+63 912 345 6789</ion-note>
                    <ion-note>hirai@momo.com</ion-note>
                </ion-card-header>
            </ion-card>

            <ion-list>
                <ion-item>
                    <ion-card class="w-full">
                        <ion-label></ion-label>
                        <ion-card-header>
                            <ion-card-title class="font-bold">Home Address</ion-card-title>
                        </ion-card-header>
                        <!-- class="border-2 border-green-500" -->
                        <ion-card-content class="flex justify-between">
                            <div>
                                <span class="font-semibold">
                                    No. 21 St. Agustin Street, Brgy. De Jose Delgado City 2234 Philippines
                                </span>
                            </div>
                            <ion-checkbox></ion-checkbox>
                        </ion-card-content>
                    </ion-card>
                </ion-item>

                <ion-item>
                    <ion-card class="w-full">
                        <ion-label></ion-label>
                        <ion-card-header>
                            <ion-card-title class="font-bold">Work Address</ion-card-title>
                        </ion-card-header>

                        <ion-card-content class="flex justify-between">
                            <div>
                                <span class="font-medium">
                                    3rd flr Anyeong Bldg. Seareal St. Joaqin City 3456 Philippines
                                </span>
                            </div>
                            <ion-checkbox></ion-checkbox>
                        </ion-card-content>
                    </ion-card>
                </ion-item>
            </ion-list>

            <ion-list>
                <ion-list-header>
                    <ion-label>
                        <h2>Orders</h2>
                    </ion-label>
                </ion-list-header>
                <ion-item>
                    <ion-card class="w-full">
                        <ion-card-header>
                            <ion-card-title>Item Name</ion-card-title>
                            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                        </ion-card-header>

                        <ion-card-content>
                            Order data here
                        </ion-card-content>
                    </ion-card>
                </ion-item>
            </ion-list>

            <ion-list>
                <ion-list-header>
                    <ion-text>
                        <h2>Payment Options</h2>
                    </ion-text>
                </ion-list-header>

                <ion-radio-group :allow-empty-selection="true">
                    <ion-radio v-for="payment in paymentMethods" :key="payment.method.toLowerCase()" aria-label="Success"
                        color="success" labelPlacement="start" :value="payment.method.toLowerCase()"
                        class="w-11/12 sm:w-2/6 h-[70px] rounded-lg my-2 ms-5 pe-2 bg-slate-800 border-1 border-cyan-500">
                        <div class="p-2">
                            <img v-if="payment.img" class="object-contain" :alt="payment.method" :src="payment.img" />
                            <h4 v-else>{{ payment.method }} (0 points)</h4>

                            <ion-text>
                                <p class="text-sm font-medium break-words">{{ payment.desc }}</p>
                            </ion-text>
                        </div>
                    </ion-radio>
                </ion-radio-group>
            </ion-list>

            <ion-item>
                <div class="w-full">
                    <ion-text class="flex justify-between items-center">
                        <h4>Subtotal</h4> <span>&#8369; 300</span>
                    </ion-text>
                    <ion-text class="flex justify-between items-center">
                        <h4>Delivery Charge</h4> <span>&#8369; 10</span>
                    </ion-text>
                </div>
            </ion-item>

            <div class="sticky bottom-0 w-full flex justify-between items-center p-2 bg-slate-700 rounded-sm z-5">
                <p>Total: &#8369; 500</p>
                <ion-button @click="modalHandler">
                    Place Order
                </ion-button>
            </div>

            <ion-modal :is-open="setOpen" :can-dismiss="canDismiss">
                <ion-content type="div">
                    <div class="flex flex-col h-full justify-center items-center p-24">
                        <img alt="order placed" :src="Success" />
                        <ion-text>
                            <h2 class="font-semibold text-3xl">Order Received!</h2>
                        </ion-text>
                        <ion-text>
                            <p>
                                Your order <span class="font-semibold text-red-600 text-lg">No. 19049585</span> has
                                successfully take and now being processed. Kindly wait for our notification regarding your
                                order.
                            </p>
                        </ion-text>
                        <ion-button>Track Order</ion-button>
                        <ion-button class="go-home" fill="clear" @click="() => {
                            $router.push('/home')
                            canDismiss = true
                            setOpen = false
                        }">Back To Home</ion-button>
                    </div>
                </ion-content>
            </ion-modal>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

/*Ionic Components Import */
import { IonButtons, IonContent, IonHeader, IonBackButton, IonTitle, IonToolbar, IonPage, IonNote, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonListHeader, IonItem, IonLabel, IonRadio, IonRadioGroup, IonText, IonButton, IonModal } from '@ionic/vue';

/* Images import  */
import Paypal from '@/imgs/payments/paypal.png';
import Paynamics from '@/imgs/payments/paynamics.png';
import Paymaya from '@/imgs/payments/maya2.png';
/*Icons Import */
import Success from "@/icons/success.svg";


const setOpen = ref(false)
const canDismiss = ref(false)

const modalHandler = () => {
    setOpen.value = true;
}
const paymentMethods = [
    {
        method: "Loyalty Points",
        desc: "Pay  using your earned loyalty points",
        img: null
    },
    {
        method: "Paypal",
        desc: "A new tab will open to access your account",
        img: Paypal
    },
    {
        method: "Paynamics",
        desc: "Choose paynamics services available from you",
        img: Paynamics
    },
    {
        method: "Paynmaya",
        desc: "Pay easily with Maya",
        img: Paymaya
    },
]
</script>


<style scoped>
ion-button {
    --background: #D71921;
    --padding-top: 10px;
    --padding-bottom: 10px;
}
ion-button.go-home{
    --background: transparent;
}
</style>