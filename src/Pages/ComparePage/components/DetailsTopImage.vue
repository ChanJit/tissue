<template>
    <div class="locationdetails_container" :class="this.componentId" >
        <div class="locationdetails" :class="this.float">
            <div class="locationdetails-center">
                <div class="descrip">
                    <img class="icon" src="../../../assets/map-markers.png" height="30" width="30"/>
                    <label>{{location.name}}</label>
                </div>
                <div class="descrip">
                    <img class="icon" src="../../../assets/temperature.png" height="30" width="30"/>
                    <label>{{temperature.highest}}℃  |  {{temperature.lowest}}℃</label>
                </div>
                <div class="descrip">
                    <img class="icon" src="../../../assets/pollution.png" height="30" width="30"/>
                    <label>{{pollution}}</label>
                </div>
                <div class="descrip">
                    <img class="icon" src="../../../assets/traffic-light.png" height="30" width="30"/>
                    <label>{{traffic}}</label>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        props: ['float', 'componentId'],
        data () {
            return {
                location: {name: "Kuala Lumpur", value: "kl"},
                temperature: {highest:30, lowest:20},
                pollution: 40,
                traffic: 60,
            }
        },
        methods: {}
    }
</script>

<style scoped>
    .locationdetails_container {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height:600px;
        color: #fff;
    }

    .locationdetails {
        padding:20px;
        margin: 0 70px;
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
        font-size: 30px;
        vertical-align: middle;
    }

    .descrip {
        margin:50px 0;
        z-index: 2;
    }
    .icon {
        margin-right:10px;
        vertical-align: middle;
    }

    .bgImage{
        position: absolute;


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