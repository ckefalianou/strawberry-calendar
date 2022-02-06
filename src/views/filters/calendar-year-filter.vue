
<template>
    <h5>Select Year</h5>
    <div class="calendar-year-filter">
        <span class="range-min">1900</span>
        <input @input="setYear($event)" type="range" v-model="activeYear"  min="1900" max="2300">
        <span class="range-max">2300</span>
    </div>
    <input @input="setYear($event)" class="activeYear" v-model="activeYear">
</template>

<style>
    .activeYear {
        color: rgb(102, 0, 39);
        font-size: 25px;
        font-weight: bold;
        width: 80px;
        display: inline-block;
        border: 1px solid rgb(102, 0, 39);
        vertical-align: middle;
        margin-left: 10px;
        padding: 10px;

    }
    .calendar-year-filter{
        position: relative;
        display: inline-block;
        width: calc(100% - 95px);
        vertical-align: middle;
    }
    .range-min {
        position: absolute;
        left: 0;
        top:-10px;
        font-size: 13px;
    }
    .range-max {
        position: absolute;
        right: 0;
        top:-10px;
        font-size: 13px;
    }
    input[type=range] {
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 9px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: rgba(102, 0, 39,.4);
  border-radius: 0px;
  border: 0px solid #000000;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 1px rgb(102, 0, 39);
  border: 1px solid rgb(102, 0, 39);
  height: 18px;
  width: 18px;
  border-radius: 31px;
  background: rgb(102, 0, 39);
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -5px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: rgba(102, 0, 39,.4);
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 9px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: rgba(102, 0, 39,.4);
  border-radius: 0px;
  border: 0px solid #000000;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 1px rgb(102, 0, 39);
  border: 1px solid rgb(102, 0, 39);
  height: 18px;
  width: 18px;
  border-radius: 31px;
  background: rgb(102, 0, 39);
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 9px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: rgba(102, 0, 39,.4);
  border: 0px solid #000000;
  border-radius: 0px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-fill-upper {
  background: rgba(102, 0, 39,.4);
  border: 0px solid #000000;
  border-radius: 0px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-thumb {
  box-shadow: 0px 0px 1px rgb(102, 0, 39);
  border: 1px solid rgb(102, 0, 39);
  height: 18px;
  width: 18px;
  border-radius: 31px;
  background: rgb(102, 0, 39);
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: rgba(102, 0, 39,.4);
}
input[type=range]:focus::-ms-fill-upper {
  background: rgba(102, 0, 39,.4);
}
</style>

<script>
export default {
    emits: ['getYear'],
    data() {
        return {
            activeYear: (new Date()).getFullYear()
        }
    },
    methods: {
        setYear: function(e){
            const selectedYear = Number(e.target.value);
            this.$emit('getYear',selectedYear);
            this.activeYear = selectedYear;
        }
    }
}
</script>