<template>
    <div class="weekday">  {{ day }} </div>
</template>

<style scoped>
    .weekday {
        width: 14.2%;
        text-transform: uppercase;
        color: #fff;
        background: rgb(102, 0, 39);
        padding: 10px;
        display: inline-block;
        text-align: center;
    }
</style>

<script>
export default {
    props: {
        day: { type: String }
    }
}
</script>