<template>
  <ion-app>
    <calendar></calendar>
    <calendar-filters></calendar-filters>
  </ion-app>
</template>

<script lang="ts">
import { IonApp } from '@ionic/vue';
import { defineComponent } from 'vue';
import Calendar from './views/calendar-views/calendar.vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    Calendar
  }
});
</script>