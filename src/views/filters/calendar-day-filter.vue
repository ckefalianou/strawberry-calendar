<template>
    <h5>Select day</h5>
    <div class="calendar-days-filter">
        <div v-for="day in days" :key="day" :day="day" @click="setDay($event)" class="filter-item day-filter" :class="{'active': day === activeDay}">{{ day }}</div>
    </div>
</template>
<script>
export default {
    props:{
        days: {type: Number}
    },
    emits: ['getDay'],
    data(){
        return {
            activeDay: (new Date()).getDate()
        }
    },
    methods:{
        setDay: function(e){
            const selectedDay = Number(e.target.getAttribute('day'));
            this.$emit('getDay',selectedDay);
            this.activeDay = selectedDay;
        },
    }
}
</script>