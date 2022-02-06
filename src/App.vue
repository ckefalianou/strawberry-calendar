<template>
  <ion-app>
    <ion-router-outlet />
    <calendar v-if="path == '/' || path=='/calendar'"></calendar> {{path}}
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import Calendar from './views/calendar-views/calendar.vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    Calendar
  },
  data(){
    return {
      path: window.location.pathname
    }
  }
});
</script>