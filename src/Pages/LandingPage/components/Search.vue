<template>
    <div class="search_container">
        <div class="search_bar">
            <h1>Cost Of Living</h1>
            <form>
                <v-select 
                    v-model="selectedLocation"
                    class="grey--text text--lighten-1 theme--dark flex"
                    label="Type in a location to get started"
                    :items="getLocationName"
                    autocomplete
                >
                    <!--<option v-for="state in locations" v-bind:value="state.value">-->
                        <!--{{state.name}}-->
                    <!--</option>-->
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
                msg: 'Search Location',
                states:
                    [
                        'Kuala Lumpur','Johor Bahru','Petaling Jaya','George Town',
                        'Ipoh','Singapore','Sydney','Melbourne',
                        'Gold Coast'
                    ],
                locations: [
                    {name: 'Kuala Lumpur', value: 'kl'}, {name: 'Ipoh', value: 'ipoh'}
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
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
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
    .search_bar {
        color: #fff;
        vertical-align: middle;
        width: 30%;
        z-index: 2;
        left:0;
        right:0;
        margin: auto;
    }
</style>