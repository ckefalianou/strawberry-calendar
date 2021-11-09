<template>
    <div class="filters">
        <div @click="filtersSwitcher" :class="{'open' : filtersShow}" class="filters-btn">Filters</div>
        <div class="filters-container" v-if="filtersShow" @click="setFilterOptions()">
            <calendar-view-filter @getView="getView($event)"></calendar-view-filter>
            <calendar-day-filter v-if="selectedView=='day'" @getDay="getDay($event)" :days="selectedMonthDays"></calendar-day-filter>
            <calendar-month-filter @getMonth="getMonth($event)" :year="selectedYear"></calendar-month-filter>
            <calendar-year-filter @getYear="getYear($event)"></calendar-year-filter>
        </div>
    </div>
</template>
<style>
    .filters-container {
        padding: 15px;
    }
    .filters-btn {
        width: 100%;
        padding: 10px;
        text-transform: uppercase;
        text-align: center;
        border: 1px solid rgb(102, 0, 39);
        transition: all .3s ease;
    }
    .filters-btn.open{
        color: #fff;
        background: rgb(102, 0, 39);
        transition: all .3s ease;
    }
    .filter-item {
        border: 1px solid rgb(102, 0, 39);
        padding: 5px 10px;
        margin-right: 10px;
        margin-bottom: 10px;
        display: inline-block;
        transition: all .3s ease;
        text-align: center;
    }
    .filter-item.active {
        color: #fff;
        background: rgb(102, 0, 39);
        transition: all .3s ease;
    }
</style>
<script>
import calendarDayFilter from './calendar-day-filter.vue';
import calendarMonthFilter from './calendar-month-filter.vue';
import calendarYearFilter from './calendar-year-filter.vue';
import calendarViewFilter from './calendar-view-filter.vue';
export default {
    components: {
        calendarDayFilter,
        calendarMonthFilter,
        calendarYearFilter,
        calendarViewFilter
    },
    props:{
        selectedMonthDays: {type: Number}
    },
    emits: ['getDay','getMonth','getYear','getView','getFilterOptions'],
    data(){
        return {
            selectedYear: (new Date).getFullYear(),
            selectedMonth: (new Date).toLocaleString("en-US", { month: "long" }),
            selectedView: 'month',
            selectedDay: new Date().getDate(),
            filtersShow: false
        }
    },
    methods: {
        filtersSwitcher: function(){
            this.filtersShow = !this.filtersShow;
        },
        getYear: function(selectedYear){
            this.selectedYear = selectedYear;
        },
        getMonth: function(selectedMonth){
            this.selectedMonth = selectedMonth;
        },
        getDay: function(selectedDay){
            this.selectedDay = selectedDay;
        },
        getView: function(selectedView){
            this.selectedView = selectedView;
        },
        setFilterOptions: function(){
            const totalCalendarData = {
                selectedYear : this.selectedYear,
                selectedDay : this.selectedDay,
                selectedView : this.selectedView,
                selectedMonth : this.selectedMonth
            }
            this.$emit('getFilterOptions',totalCalendarData);
        }
    }
}
</script>