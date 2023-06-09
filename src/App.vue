<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list id="inbox-list">
            <ion-avatar class="sp-user-avatar">
              <ion-img alt="Silhouette of a person's head"
                :src="Momo ?? 'https://ionicframework.com/docs/img/demos/avatar.svg'" />
            </ion-avatar>
            <ion-list-header>Hirai Momo</ion-list-header>
            <ion-note>+63 912 345 6789</ion-note>
            <ion-button class="hidden lg:inline-block" :router-link="'/points'">
              0 Points
            </ion-button>
            <ion-menu-toggle>
              <ion-button :router-link="'/points'">
                0 Points
              </ion-button>
            </ion-menu-toggle>
            <ion-menu-toggle :auto-hide="false" v-for="(p, i) in appPages" :key="i">
              <ion-item @click="selectedIndex = i" router-direction="root" :router-link="p.url" lines="none"
                :detail="false" class="hydrated" :class="{ selected: selectedIndex === i }">
                <ion-icon aria-hidden="true" slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
          <ion-list id="labels-list">
            <ion-item v-for="label in otherOpts" lines="none" :key="label.title">
              <ion-icon aria-hidden="true" slot="start" :ios="label.iosIcon" :md="label.mdIcon"></ion-icon>
              <ion-label>{{ label.title }}</ion-label>
            </ion-item>
          </ion-list>
          <ion-fab slot="fixed" horizontal="start" vertical="bottom">
            <ion-menu-toggle>
              <ion-button expand="block" color="danger" v-on:click="logOut">
                Logout
              </ion-button>
            </ion-menu-toggle>
          </ion-fab>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import {
  IonAvatar,
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane,
  IonImg,
  IonFab,
  IonButton
} from '@ionic/vue';
import {
  personOutline,
  locationOutline,
  timerOutline,
  helpOutline,
  reorderFourOutline,
  notificationsOutline,
  storefrontOutline,
  fastFoodOutline,
  fastFoodSharp,
  notificationsSharp,
  storefrontSharp,
  helpSharp,
  reorderFourSharp,
  locationSharp,
  timerSharp,
  personSharp,
} from 'ionicons/icons';
import Momo from '@/imgs/user/momo.jpg'
import FoodApp from '@/icons/FoodApp.svg'
const selectedIndex = ref(0);
const appPages = [
  {
    title: 'Home',
    url: '/home',
    iosIcon: FoodApp,
    mdIcon: FoodApp,
  },
  {
    title: 'Order Now!',
    url: '/order',
    iosIcon: fastFoodOutline,
    mdIcon: fastFoodSharp,
  },
  {
    title: 'Notifications',
    url: '/folder/notifications',
    iosIcon: notificationsOutline,
    mdIcon: notificationsSharp,
  },
  {
    title: 'Store Locator',
    url: '/folder/store',
    iosIcon: storefrontOutline,
    mdIcon: storefrontSharp,
  },
  {
    title: 'FAQ\'s',
    url: '/folder/faqs',
    iosIcon: helpOutline,
    mdIcon: helpSharp,
  }
];
const otherOpts = [
  {
    title: 'My Orders',
    iosIcon: reorderFourOutline,
    mdIcon: reorderFourSharp,
  },
  {
    title: 'My Account',
    iosIcon: personOutline,
    mdIcon: personSharp,
  },
  {
    title: 'My Favorites',
    iosIcon: notificationsOutline,
    mdIcon: notificationsSharp,
  },
  {
    title: 'Order Tracker',
    iosIcon: locationOutline,
    mdIcon: locationSharp,
  },
  {
    title: 'Order History',
    iosIcon: timerOutline,
    mdIcon: timerSharp,
  }
];

const path = window.location.pathname.split('folder/')[1];
if (path !== undefined) {
  selectedIndex.value = appPages.findIndex((page) => page.title.toLowerCase() === path.toLowerCase());
}

const logOut = () => {
  alert("Successfully logged out!")
}
</script>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}

.sp-user-avatar {
  width: 50px;
  height: 50px;
}
</style>
