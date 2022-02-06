<template>
    <div>
        <calendar-filters @getFilterOptions="getFilterOptions($event)" :selectedMonthDays="selectedMonthDays"></calendar-filters>
        <div v-if="totalCalendarData.selectedView == 'month'" class="calendar-cells" >
            <calendar-cell  :days="selectedMonthDays" :weekdays="weekdays" :name="totalCalendarData.selectedMonth" :year="totalCalendarData.selectedYear" ></calendar-cell>
        </div>
        <div v-if="totalCalendarData.selectedView == 'day'" class="calendar-day">
            <calendar-day :day="totalCalendarData.selectedDay" :month="totalCalendarData.selectedMonth" :year="totalCalendarData.selectedYear"></calendar-day>
        </div>
    </div>
</template>
<style scoped>
.calendar-cells {
    padding: 20px 20px 100px 20px;
}
</style>
<script>
import  calendarCell  from './calendar-cell.vue';
import  calendarDay  from './calendar-day.vue';
import  calendarFilters  from '../filters/calendar-filters.vue';
export default {
    components: {
        calendarCell,
        calendarDay,
        calendarFilters
    },
    emits: ['getFilterOptions'],
    data(){
        return {
            weekdays: [
                {id:0, name:'Sun'},
                {id:1, name:'Mon'},
                {id:2, name:'Thus'},
                {id:3, name:'Wed'},
                {id:4, name:'Thu'},
                {id:5, name:'Fri'},
                {id:6, name:'Sat'},
            ],
            totalCalendarData : {
                selectedYear: (new Date).getFullYear(),
                selectedMonth: (new Date).toLocaleString("en-US", { month: "long" }),
                selectedView: 'month',
                selectedDay: new Date().getDate(),
            }
        }
    },
    methods: {
        getFilterOptions: function(totalCalendarData){
            this.totalCalendarData = totalCalendarData;
        }
    },
    computed: {
        selectedMonthDays: function(){
            const monthNumber =  new Date(this.totalCalendarData.selectedMonth +'1, '+this.totalCalendarData.selectedYear).getMonth();
            return new Date(this.totalCalendarData.selectedYear, monthNumber+1 ,0).getDate();
        }
    }
}
</script>