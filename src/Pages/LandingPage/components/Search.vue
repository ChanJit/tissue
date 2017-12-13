<template>
    <div class="search_container">
        <div class="search_section">
            <h1>Cost Of Living</h1>
            <form>
                <v-select
                    v-model="selectedLocation1"
                    class="grey--text text--lighten-1 theme--dark flex"
                    label="Type in a location to get started"
                    :items="getLocationName"
                    autocomplete
                >
                </v-select>
                <v-btn @click.prevent="changeLocation()">
                    Search
                </v-btn>
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
                selectedLocation: ""
            }
        },
        methods: {
            changeLocation: function() {
                console.log(this.selectedLocation);
            }
        },
        computed: {
            getLocationName(){
                console.log(this.locations);
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
        height:450px;
        background-image: url("../../../assets/taiwan-city-life-wallpaper-2.png");
        background-position: center;
        background-size: cover;
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
        left:0;
        right:0;
        margin: auto;
        width: 30%;
    }
</style>