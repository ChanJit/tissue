<template>
    <div class="search_container">
        <div class="search_section">
            <h1>Compare between two locations</h1>
            <form>
                <v-select 
                    v-model="selectedLocation1"
                    class="grey--text text--lighten-1 theme--dark flex search_bar"
                    label="Type in a location to get started"
                    :items="getLocationName"
                    :on-change="checkLocation()"
                    autocomplete
                >
                </v-select>
                <h2>and</h2>
                <v-select
                        v-model="selectedLocation2"
                        class="grey--text text--lighten-1 theme--dark flex search_bar"
                        label="Type in a location to get started"
                        :items="getLocationName"
                        :on-change="checkLocation()"
                        autocomplete
                >
                </v-select>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Search',
        data () {
            return {
                locations: [
                    {name: 'Kuala Lumpur', value: 'kl'},
                    {name: 'Johor Bahru', value: 'jb'},
                    {name: 'Ipoh', value: 'ipoh'},
                    {name: 'Petaling Jaya', value: 'pj'},
                    {name: 'Singapore', value: 'singapore'},
                    {name: 'Sydney', value: 'sydney'},
                ],
                selectedLocation1: "",
                selectedLocation2: ""
            }
        },
        methods: {
            checkLocation: function() {
                if (this.selectedLocation1 && this.selectedLocation2){
                    console.log("Load data");
                }
            }
        },
        computed: {
            getLocationName(){
                console.log(this.locations)
                return this.locations.map(val=>val.name)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    .search_container {
        background-image: url("../../../assets/taiwan-city-life-wallpaper-2.png");
        background-position: center;
        height:450px;
        background-size: 100%;
        background-repeat: no-repeat;
        padding: 10px;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .search_container h1 {
        font-size: 44px;
        font-weight: 700;
        margin-bottom:50px;
    }
    .search_container h3 {
        font-size:24px;
        font-weight: 400;
    }
    .search_section {
        color: #fff;
        vertical-align: middle;
        z-index: 2;
        left:0;
        right:0;
        margin: auto;
        width: inherit;
    }

    .search_section h2 {
        width: auto;
        margin: 0 50px;
        display: inline-block;
        vertical-align: middle;
    }

    .search_bar {
        width: 400px;
        margin:0;
        display: inline-block;
        vertical-align: middle;
    }


</style>