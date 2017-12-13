<template>
    <div>
        <div>
            <Search @selectedLocation1="getLocation1" @selectedLocation2="getLocation2"/>
        </div>
        <div class="location left">
            <DetailsTopImage :float="'right'" :componentId="selectedLocation1"/>

        </div>
        <div class="location right">
            <DetailsTopImage :float="'right'" :componentId="selectedLocation2"/>
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