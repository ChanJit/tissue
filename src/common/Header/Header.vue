<template>
  <div class="container1">
    <nav>
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
    <v-flex d-flex class="sub-menu header-wrapper">
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
</style>
