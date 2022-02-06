<template>
    <h2>{{ name }}</h2>
    <div class="weekdays">
        <weekd v-for="day in weekdays" :key="day" :day="day.name" class="weekdays"></weekd>
    </div>
    <div class="days" >
        <div class="day empty"  v-for="fd in firstWeekday" :f="fd" :key="fd"></div>
        <div v-for="day in days" :key="day" class="day" :class="[isCurrentDay(day,name,year) ?'current-day':'']">{{ day }}</div>
        <div class="day empty"  v-for="ld in (6-lastWeekday)" :l="ld" :key="ld"></div>
    </div>
</template>
<style scoped>
    .weekdays, .days {
        display: flex;
        flex-wrap: wrap;
    }
    .weekday{
        text-align: center;
    }
    .day:nth-child(7n+1) { 
        border-left: 1px solid #000;
    }

    .day {
        width: 14.2%;
        text-align: right;
        display: inline-block;
        padding: 10px 15px;
        min-height: 100px;
        border-right: 1px solid #000;
        border-bottom: 1px solid #000;
    }
    .day.current-day {
        border: 5px solid rgb(102, 0, 39);
    }
    .day.empty{
        background: rgb(255, 233, 235);
    }
</style>
<script>
import  Weekd  from './weekd.vue';
export default {
    components: {
        Weekd
    },
    props: {
        days: {type: Number},
        name: {type: String},
        weekdays: {type: Array},
        year: {type: Number}
    },
    computed: {
        firstWeekday: function(){ return new Date(this.name+' 1'+' '+this.year).getDay()},
        lastWeekday: function(){ return  new Date(this.name+' '+this.days+' '+this.year).getDay()},
    },
    methods: {
        isCurrentDay: function(day,month,year){
            const today= new Date();
            if(today.getDate() == day && today.toLocaleString("en-US", { month: "long" }) == month && today.getFullYear() == year){
                return true;
            }else{
                return false;
            }
        }
    }
}
</script>