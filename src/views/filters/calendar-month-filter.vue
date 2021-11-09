
<template>
    <h5>Select Month</h5>
    <div class="calendar-month-filter">
        <div v-for="month in months" :key="month" :month="month"  @click="setMonth($event)" class="filter-item month-filter" :class="{'active': month === activeMonth}">{{ month }}</div>
    </div>
</template>
<script>
export default {
    props: {
        year: {type: Number, default: 2024}
    },
    emits: ['getMonth'],
    data() {
        return {
            months: ['January' ,'February','March','April','May','June','July','August','September','October','November','December'],
            activeMonth: (new Date).toLocaleString("en-US", { month: "long" })
        }
    },

    methods: {
        setMonth: function(e){
            const selectedMonth = e.target.getAttribute('month');
            this.$emit('getMonth',selectedMonth);
            this.activeMonth = selectedMonth;
        }
    }
}
</script>