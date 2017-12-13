<template>
    <div id="detailtopimage_component">
        <div id="locationdetails_container" >
            <div id="locationdetails">
                <div class="locationdetails-center">
                    <div class="descrip">
                        <img class="icon" src="../../../assets/map-markers.png" height="50" width="50"/>
                        <label>{{location.name}}</label>
                    </div>
                    <div class="descrip">
                        <img class="icon" src="../../../assets/temperature.png" height="50" width="50"/>
                        <label>{{temperature.highest}}℃  |  {{temperature.lowest}}℃</label>
                    </div>
                    <div class="descrip">
                        <img class="icon" src="../../../assets/pollution.png" height="50" width="50"/>
                        <label>{{pollution}}</label>
                    </div>
                    <div class="descrip">
                        <img class="icon" src="../../../assets/traffic-light.png" height="50" width="50"/>
                        <label>{{traffic}}</label>
                    </div>
                    <div class="descrip">
                        <label><strong id="jobCount">{{jobCounts}}</strong> jobs available in {{locale.state}}</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getStateTotalJobs } from '../../../data/api';
    export default {
        props: ['float', 'locale'],
        data () {
            return {
                location: {name: "Kuala Lumpur", value: "kl"},
                temperature: {highest:30, lowest:20},
                pollution: 40,
                traffic: 60,
                jobCounts: 0,
            }
        },
        methods: {
            addFloat() {
                const container = document.getElementById("locationdetails");
                container.className += this.float;
            },
            addCityImage() {
                const container = document.getElementById("locationdetails_container");
                container.className += this.location.value;
            },
            getTotalJobsCount(){
                const jobCounts = getStateTotalJobs(this.locale.country, this.locale.state); 
                this.jobCounts = jobCounts;
            }
        },
        mounted() {
            this.addFloat();
            this.addCityImage();
            this.getTotalJobsCount();
        }
    }
</script>

<style scoped>
    #jobCount{

    }

    #locationdetails_container {
        background-position: center;
        background-size: 100%;
        background-repeat: no-repeat;
        height:600px;
        color: #fff;
    }

    #locationdetails {
        padding:20px;
        margin-right: 70px;
        height:inherit;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .locationdetails-center {
        color: #fff;
        text-align: left;
    }

    .locationdetails-center label {
        font-size: 40px;
        vertical-align: middle;
    }

    .descrip {
        margin:20px 0;
    }
    .icon {
        margin-right:10px;
        vertical-align: middle;
    }
    
    .left {
        float: left;
    }

    .right {
        float: right;
    }

    .kl {
        background-image: url("../../../assets/cities/kl.png");
    }

    .ipoh {
        background-image: url("../../../assets/cities/ipoh.png");
    }

    .georgetown {
        background-image: url("../../../assets/cities/george-town.png");
    }

    .jb {
        background-image: url("../../../assets/cities/jb.png");
    }

    .pj {
        background-image: url("../../../assets/cities/pj.png");
    }

    .singapore {
        background-image: url("../../../assets/cities/singapore.png");
    }

    .melbourne {
        background-image: url("../../../assets/cities/melbourne.png");
    }

    .sydney {
        background-image: url("../../../assets/cities/sydney.png");
    }

    .goldcoast {
        background-image: url("../../../assets/cities/gold-coast.png");
    }
</style>