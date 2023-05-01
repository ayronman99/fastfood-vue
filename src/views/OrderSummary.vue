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
                        <ion-card-content class="flex justify-between">
                            <div class="w-10/12">
                                <span class="font-semibold">
                                    No. 21 St. Agustin Street, Brgy. De Jose, Delgado City 2234 Philippines
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
                            <div class="w-10/12">
                                <span class="font-medium">
                                    3rd flr Anyeong Bldg. Seareal St., Joaqin City 3456 Philippines
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

                            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                        </ion-card-header>

                        <ion-card-content>
                            <ion-card-title>Steak Fries Veggies</ion-card-title>
                            <ion-list class="flex flex-col">
                                <ion-note>1x Tomato Sauce</ion-note>
                                <ion-note>1x Regular Coke</ion-note>
                                <ion-note>1x Fried Chicken</ion-note>
                            </ion-list>
                            <ion-list class="flex justify-between items-center">
                                <div>
                                    <ion-text>
                                        <span class="text-2xl text-[#D71921] font-extrabold"><span>&#8369;{{ price
                                        }}</span>&nbsp;
                                        </span>
                                    </ion-text>
                                </div>
                                <div class="flex items-center">
                                    <ion-button class="z-5 font-extrabold" color="danger"
                                        @click.stop="increase">+</ion-button>
                                    <span class="p-2 text-2xl font-bold">{{ qty }}</span>
                                    <ion-button class="z-5 font-extrabold" color="danger"
                                        @click.stop="decrease">-</ion-button>
                                </div>
                            </ion-list>

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
                        <h4>Subtotal</h4> <span>&#8369; {{ subTotal }}</span>
                    </ion-text>
                    <ion-text class="flex justify-between items-center">
                        <h4>Delivery Charge</h4> <span>&#8369; {{ delFee }}</span>
                    </ion-text>
                </div>
            </ion-item>

            <div class="sticky bottom-0 w-full flex justify-between items-center p-2 bg-slate-700 rounded-sm z-5">
                <p>Total: &#8369; {{ subTotal === 0 ? 0 : netTotal }}</p>
                <ion-button @click="modalHandler">
                    Place Order
                </ion-button>
            </div>

            <ion-modal :is-open="setOpen" :can-dismiss="canDismiss">
                <ion-content type="div">
                    <div class="flex flex-col h-full justify-center items-center p-10">
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
                                setOpen = false
                            }">Back To Home</ion-button>
                    </div>
                </ion-content>
            </ion-modal>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

/*Ionic Components Import */
import { IonButtons, IonContent, IonHeader, IonBackButton, IonTitle, IonToolbar, IonPage, IonNote, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonListHeader, IonItem, IonLabel, IonRadio, IonRadioGroup, IonText, IonButton, IonModal, IonCheckbox } from '@ionic/vue';

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

const qty = ref(1);
const price = ref(185);
const subTotal = ref(0);
const netTotal = ref(0);
const delFee = ref(10);

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

const subTotalHandler = () => {
    return subTotal.value = qty.value * price.value;
}
const netTotalHandler = () => {
    return netTotal.value = subTotal.value + delFee.value;
}

onMounted(() => {
    subTotalHandler()
    netTotalHandler()
})

watch(qty, subTotalHandler);
watch(subTotal, netTotalHandler);
</script>


<style scoped>
ion-button {
    --background: #D71921;
    --padding-top: 10px;
    --padding-bottom: 10px;
}

ion-button.go-home {
    --background: transparent;
}
</style>