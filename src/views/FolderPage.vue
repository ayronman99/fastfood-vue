<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title v-if="$route.params.subdir === 'home'">
          <PointsComp />
        </ion-title>
        <ion-title v-else-if="$route.params.subdir === 'order'">Our Foods</ion-title>
        <ion-title v-else>{{ $route.params.id }}</ion-title>
        <ion-avatar class="user-tb-avatar" slot="end">
          <ion-img alt="Silhouette of a person's head" :src="Momo ?? 'https://ionicframework.com/docs/img/demos/avatar.svg'" />
        </ion-avatar>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>

        </ion-toolbar>
      </ion-header>

      <Home v-if="$route.params.subdir === 'home'" />
      <FoodLists v-else-if="$route.params.subdir === 'order'" />
      <PointsPage v-else-if="$route.params.subdir === 'points'" />
      <ComingSoon v-else />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">

import { IonImg, IonAvatar, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import PointsComp from '@/components/PointsComp.vue';
import Home from '@/views/Home.vue';
import FoodLists from '@/views/FoodLists.vue';
import PointsPage from './PointsPage.vue';
import ComingSoon from './ComingSoon.vue';

import Momo from '@/imgs/user/momo.jpg'

</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}

.user-tb-avatar {
  width: 50px;
  height: 50px;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
}
</style>
