<template>
  <div class="container1">
    <div class="navbar-header" id="mobile_search_bar">
      <button class="navbar-toggle" id="header-responsive-button" data-toggle="collapse" data-target=".navbar-collapse" data-canvas="body" type="button" onclick="$('.search-bar.toggle').css('display', 'none');">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <span class="jslogo logo-my jslogo-mobile visible-xs"></span>
    </div>
    <nav class="visible-lg visible-md visible-sm">
      <div class="header-wrapper">
        <ul>
          <li><a class="active" href="#home">Home</a></li>
          <li><a href="#news">Search Jobs</a></li>
          <li><a href="#contact">MyJobStreet</a></li>
          <li><a href="#about">Company Profiles</a></li>
          <li><a href="#about">Career Insights</a></li>
          <li><a href="#about">Education</a></li>
          <li><a href="#about">More</a></li>
        </ul>
      </div>
    </nav>
    <v-flex d-flex class="sub-menu header-wrapper visible-lg visible-md visible-sm">
      <a href="#" class="jslogo logo-my"></a>
      <div class="employers">
        <a class="color-green" href="https://www.jobstreet.com.my/en/cms/employer/">Employers</a>
      </div>
    </v-flex>
  </div>
</template>


<script>
  export default {
    name: 'sampleHeader'
  }
</script>

<style scoped>
  .header-wrapper {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  a, a:hover, a:active, a:focus, a:visited {
    text-decoration: none;
  }
  .employers {
    margin-top: 8px;
    font-weight: 700;
    text-align: end;
    padding-right: 15px;
  }

  .color-green {
    color: #00a950!important;
  }

  .sub-menu {
    padding-top: 10px;
  }

  .logo-my {
    background: url("../../assets/jobstreet.png") no-repeat;
    background-size: 200px 36px;
  }
  .jslogo {
    display:block;
    width:200px;
    height:36px;
    margin-top: 3px;
    margin-left: 11px;
  }
  .jslogo-mobile {
    width: 50%
  }
  .jslogo.jslogo-mobile {
    margin: 5px auto 0;
  }

  @media (max-width: 767px) {
    .jslogo {
      display: block;
      width: 200px;
      height: 38px;
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: 50%;
      background-image: url("../../assets/jobstreet-mobile-logo.png");
    }

    .jslogo-mobile {
      width: 50%;
    }
  }

  nav * {
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: 14px;
  }

  nav {
    background-color: #1c3f94;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: #fff;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  /* Change the link color to #111 (black) on hover */
  li a:hover {
    color: #ccc;
  }
  @media (min-width: 768px) {
    .header-wrapper {
      width: 750px;
      margin-right: 15px;
      margin-left: 15px;
    }
  }
  @media (min-width: 992px){
    .header-wrapper {
      width: 970px;
    }
  }
  @media (min-width: 1210px) {
    .header-wrapper {
      width: 1170px;
      margin-right: auto;
      margin-left: auto;
    }
  }
/*mobile*/
  .navbar-toggle {
    position: relative;
    float: right;
    padding: 9px 10px;
    margin-top: 8px;
    margin-right: 15px;
    margin-bottom: 8px;
    background-color: transparent;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px
  }

  .navbar-toggle:focus {
    outline: 0
  }

  .navbar-toggle .icon-bar {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px
  }

  .navbar-toggle .icon-bar+.icon-bar {
    margin-top: 4px
  }
  .navbar-toggle {
    border-color: #ddd
  }
  .navbar-collapse {
    padding-left: 5px;
    padding-right: 5px
  }
  .navbar-toggle {
    float: left
  }


  .navbar-toggle:focus,.navbar-toggle:hover {
    background-color: #ddd
  }

  .navbar-toggle .icon-bar {
    background-color: #888
  }
  .navbar-inverse .navbar-toggle:focus,.navbar-inverse .navbar-toggle:hover {
    background-color: #333
  }

  .navbar-inverse .navbar-toggle .icon-bar {
    background-color: #fff
  }
  .navbar-toggle .icon-bar {
    background-color: #1c3f94
  }
  .navbar-toggle {
    border-color: transparent;
  }
  @media (min-width: 768px) {
    .navbar-toggle {
      display:none
    }
  }

  .navbar-nav {
    margin: 7.5px -15px
  }

  .navbar-nav>li>a {
    padding-top: 10px;
    padding-bottom: 10px;
    line-height: 20px
  }
  @media (max-device-width: 480px) and (orientation:landscape) {
    .navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse {
      max-height:200px
    }
  }

  .container-fluid>.navbar-collapse,.container-fluid>.navbar-header,.container>.navbar-collapse,.container>.navbar-header {
    margin-right: -15px;
    margin-left: -15px
  }

  @media (min-width: 768px) {
    .container-fluid>.navbar-collapse,.container-fluid>.navbar-header,.container>.navbar-collapse,.container>.navbar-header {
      margin-right:0;
      margin-left: 0
    }
  }

  .visible-lg,.visible-lg-block,.visible-lg-inline,.visible-lg-inline-block,.visible-md,.visible-md-block,.visible-md-inline,.visible-md-inline-block,.visible-sm,.visible-sm-block,.visible-sm-inline,.visible-sm-inline-block,.visible-xs,.visible-xs-block,.visible-xs-inline,.visible-xs-inline-block {
    display: none!important
  }

  @media (max-width: 767px) {
    .visible-xs {
      display:block!important
    }

    table.visible-xs {
      display: table
    }

    tr.visible-xs {
      display: table-row!important
    }

    td.visible-xs,th.visible-xs {
      display: table-cell!important
    }
  }

  @media (max-width: 767px) {
    .visible-xs-block {
      display:block!important
    }
  }

  @media (max-width: 767px) {
    .visible-xs-inline {
      display:inline!important
    }
  }

  @media (max-width: 767px) {
    .visible-xs-inline-block {
      display:inline-block!important
    }
  }

  @media (min-width: 768px) and (max-width:991px) {
    .visible-sm {
      display:block!important
    }

    table.visible-sm {
      display: table
    }

    tr.visible-sm {
      display: table-row!important
    }

    td.visible-sm,th.visible-sm {
      display: table-cell!important
    }
  }

  @media (min-width: 768px) and (max-width:991px) {
    .visible-sm-block {
      display:block!important
    }
  }

  @media (min-width: 768px) and (max-width:991px) {
    .visible-sm-inline {
      display:inline!important
    }
  }

  @media (min-width: 768px) and (max-width:991px) {
    .visible-sm-inline-block {
      display:inline-block!important
    }
  }

  @media (min-width: 992px) and (max-width:1199px) {
    .visible-md {
      display:block!important
    }

    table.visible-md {
      display: table
    }

    tr.visible-md {
      display: table-row!important
    }

    td.visible-md,th.visible-md {
      display: table-cell!important
    }
  }

  @media (min-width: 992px) and (max-width:1199px) {
    .visible-md-block {
      display:block!important
    }
  }

  @media (min-width: 992px) and (max-width:1199px) {
    .visible-md-inline {
      display:inline!important
    }
  }

  @media (min-width: 992px) and (max-width:1199px) {
    .visible-md-inline-block {
      display:inline-block!important
    }
  }

  @media (min-width: 1200px) {
    .visible-lg {
      display:block!important
    }

    table.visible-lg {
      display: table
    }

    tr.visible-lg {
      display: table-row!important
    }

    td.visible-lg,th.visible-lg {
      display: table-cell!important
    }
  }

  @media (min-width: 1200px) {
    .visible-lg-block {
      display:block!important
    }
  }

  @media (min-width: 1200px) {
    .visible-lg-inline {
      display:inline!important
    }
  }

  @media (min-width: 1200px) {
    .visible-lg-inline-block {
      display:inline-block!important
    }
  }
</style>
