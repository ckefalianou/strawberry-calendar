<template>
    <div>
        <div class="day-title">
            <h1>{{month}}, {{day}} {{year}}</h1>
        </div>
        <div class="events">
            <h2>Events</h2>
            <div class="events-list">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        day: {type: Number},
        dayName: {type: String},
        month: {type: String},
        year: {type: Number}
    }
}
</script>