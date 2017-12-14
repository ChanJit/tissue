<template>
    <div class="search_container">
        <div class="search_section">
            <h1>Compare between two locations</h1>
            <form>
                <v-select
                    v-model="selectedLocation1"
                    class="grey--text text--lighten-1 theme--dark flex search_bar"
                    label="Select a location"
                    :items="getLocationName"
                    :on-change="checkLocation()"
                    autocomplete
                >
                </v-select>
                <h2>and</h2>
                <v-select
                    v-model="selectedLocation2"
                    class="grey--text text--lighten-1 theme--dark flex search_bar"
                    label="Select a location"
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
                    {name: "Kuala Lumpur", country: "Malaysia", value: "kl"},
                    {name: "George Town", country: "Malaysia", value:"georgetown"},
                    {name: "Johor Bahru", country: "Malaysia", value: "jb"},
                    {name: "Ipoh", country: "Malaysia", value: "ipoh"},
                    {name: "Petaling Jaya", country: "Malaysia", value: "pj"},
                    {name: "Singapore", country: "Singapore", value: "singapore"},
                    {name: "Sydney", country: "Australia", value: "sydney"},
                    {name: "Gold Coast", country: "Australia", value: "goldcoast"},
                    {name: "Melbourne", country: "Australia", value: "melbourne"}
                ],
                selectedLocation1: "",
                selectedLocation2: ""
            }
        },
        methods: {
            checkLocation: function() {
                if (this.selectedLocation1 && this.selectedLocation2){
                    console.log("Load data");
                    const loc1 = this.locations.find(val=>val.name===this.selectedLocation1);
                    const loc2 = this.locations.find(val=>val.name===this.selectedLocation2);
                    this.$emit('selectedLocation1',loc1.value);
                    this.$emit('selectedLocation2',loc2.value);
                }
            }
        },
        computed: {
            getLocationName(){
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