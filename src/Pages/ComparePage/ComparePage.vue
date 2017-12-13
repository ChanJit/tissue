<template>
    <div>
        <div>
            <Search @selectedLocation1="getLocation1" @selectedLocation2="getLocation2"/>
        </div>
        <div v-show=selectedLocation1 class="location left">
            <DetailsTopImage :float="'right'" :selectedLocation="selectedLocation1"/>

        </div>
        <div v-show=selectedLocation2 class="location right">
            <DetailsTopImage :float="'right'" :selectedLocation="selectedLocation2"/>
        </div>
    </div>
</template>


<script>
import Search from './components/Search'
import DetailsTopImage from './components/DetailsTopImage'
export default {
    name: 'ComparePage',
    components: {
        Search,
        DetailsTopImage
    },
    data () {
        return {
            selectedLocation1: "",
            selectedLocation2: ""
        }
    },
    methods: {
        getLocation1(value){
            this.selectedLocation1 = value;
        },
        getLocation2(value){
            this.selectedLocation2 = value;
        }
    }
}
</script>

<style>
    .location {
        display: inline-block;
        width: 50%;
    }

    .left{
        float:left;
    }

    .right {
        float:right
    }
</style>