<template>
    <h5>Select View</h5>
    <div class="calendar-view-filter">
        <div v-for="view in views" :key="view" :view="view" @click="setView($event)" class="filter-item view-filter" :class="{'active': view === activeView}">{{ view }}</div>
    </div>
</template>
<script>
export default {
    emits: ['getView'],
    data() {
        return {
            views: ['day','month'],
            activeView: 'month'
        }
    },
    methods: {
        setView: function(e){
            const selectedView = e.target.getAttribute('view');
            this.$emit('getView',selectedView);
            this.activeView = selectedView;
        },
    }
}
</script>