<template>
    <div>
        <v-app id="search_component">
            <div class="search_container">
                <div class="search_bar">
                    <h1>Cost Of Living</h1>
                    <!--<h3>Enter description here</h3>-->
                    <v-form onsubmit="changeLocation()">
                        <v-select
                                class="grey--text text--lighten-1 theme--dark flex"
                                v-bind:items="states"
                                label="Type in a location to get started"
                                autocomplete
                        ></v-select>
                        <v-btn
                                @click="submit"

                        >Search
                        </v-btn>
                    </v-form>

                </div>
            </div>
        </v-app>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: 'Search Location',
                states:
                    [
                        'Kuala Lumpur','Johor Bahru','Petaling Jaya','George Town',
                        'Ipoh','Singapore','Sydney','Melbourne',
                        'Gold Coast'
                    ]
            }
        },
        methods: {
            changeLocation: function(event) {

                console.log("submitted");


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
        background-image: url("../assets/taiwan-city-life-wallpaper-2.png");
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