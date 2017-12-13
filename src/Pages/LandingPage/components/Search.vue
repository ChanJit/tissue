<template>
    <div class="search_container">
        <div class="search_section">
            <h1>Cost Of Living</h1>
            <form>
                <v-select
                    label="Select"
                    :items="states"
                    v-model="selectedLocation"
                    class="grey--text text--lighten-1 theme--dark flex"
                    item-text="name"
                    item-value="url"
                    autocomplete
                    >
                    <template slot="item" slot-scope="data">
                        <template>
                        <v-list-tile-content>
                            <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                            <v-list-tile-sub-title v-html="data.item.group"></v-list-tile-sub-title>
                        </v-list-tile-content>
                        </template>
                    </template>
                </v-select>
                <v-btn @click.prevent="changeLocation()">
                    Search
                </v-btn>
            </form>
        </div>
    </div>
</template>

<script>
import * as api from '../../../data/api'
    export default {
        name: 'Search',
        data () {
            return {
                locations: [
                    { header: 'Malaysia'},
                    {name: 'Kuala Lumpur', group: "Malaysia", value: 'kl'},
                    {name: 'Johor Bahru', group: "Malaysia", value: 'jb'},
                    {name: 'Ipoh', group: "Malaysia", value: 'ipoh'},
                    {name: 'Petaling Jaya', group: "Malaysia", value: 'pj'},
                    {name: 'Singapore', group: "Malaysia", value: 'singapore'},
                    { header: 'Australia'},
                    {name: 'Sydney', group: "Australia", value: 'sydney'},
                ],
                states: [],
                countries: [ "Malaysia", "Singapore", "Australia"],
                selectedLocation: ""
            }
        },
        methods: {
            getStates: function(){
                this.countries.forEach(country => {
                    let data = api.getStates(country);
                    this.states.push({header: country});
                    data.forEach(state => {
                        let formmatedState = state.replace(" ", "-").toLowerCase();
                        this.states.push({name: state, group: country, url: `${country.toLowerCase()}/${formmatedState}`});
                    });
                });
                console.log(this.states);
            },
            changeLocation: function(){
                this.$router.push(`/details/${this.selectedLocation}`);
            }
        },
        created(){
            this.getStates();
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