import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Calendar from '../views/calendar-views/calendar.vue';
import calendarDay from '../views/calendar-views/calendar-day.vue';
import { AndroidShortcuts } from 'capacitor-android-shortcuts';

AndroidShortcuts.isDynamicSupported().then(({ result }) => {
    if (result) {
        AndroidShortcuts.addDynamic({
            items: [
                {
                    id: "calendar",
                    shortLabel: "Calendar",
                    longLabel: "Calendar",
                    data: JSON.stringify({
                        id: "calendar"
                    }),
                },
                {
                    id: "calendar-day",
                    shortLabel: "Calendar Day",
                    longLabel: "Calendar Day",
                    data: JSON.stringify({
                        id: "calendar-day"
                    }),
                }
            ],
        });
    }
});

const routes: Array<RouteRecordRaw> = []

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
        path: '/calendar',
        component: Calendar,
        name: 'calendar'
    },
    {
        path: '/calendar-day',
        component: calendarDay,
        name: 'calendar-day'
    }
]

});

AndroidShortcuts.addListener('shortcut', (response) => {
    const dataObj = JSON.parse(response.data);
    router.push({ path: '/'+dataObj.id})
});

export default router
