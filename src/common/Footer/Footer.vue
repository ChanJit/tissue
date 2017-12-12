<template>
  <footer>
    <div class="container text-center">
      <ul class="footer-list" id="footer_list">
        <li><a id="footer_international" href="https://www.jobstreet.com" title="www.jobstreet.com">JobStreet International</a></li>
        <li><a id="footer_site_map" href="https://www.jobstreet.com.my/sitemap.htm">Site Map</a></li>
        <li><a id="footer_about_us" href="https://www.jobstreet.com.my/en/about-us/">About Us</a></li>
        <li><a id="footer_work_with_us" href="https://www.jobstreet.com.my/career/JobStreet.htm">Work With Us</a></li>
        <li><a id="footer_term_of_use" href="https://www.jobstreet.com.my/en/about-us/terms-of-use/">Terms of Use</a> </li>
        <li><a id="footer_privacy_policy" href="https://www.jobstreet.com.my/en/about-us/privacy-policy/">Privacy Policy</a></li>
        <li><a id="footer_safe_search_guide" href="https://www.jobstreet.com.my/en/about-us/safe-job-search-guide/">Safe Job Search Guide</a></li>
        <li><a id="footer_help" href="https://www.jobstreet.com.my/en/user/">Help</a></li>
        <li><a id="footer_feedback" href="https://myjobstreet.jobstreet.com.my/home/feedback.php?site=my&amp;sub=feedback" target="_blank">Send Feedback</a></li>
      </ul>
      <div class="footer-copyright" id="footer_copy_right">
        Copyright ©&nbsp;2017&nbsp;JobStreet.com
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'sampleFooter'
  }
</script>

<style scoped>
  footer {
    margin-top: 30px;
    height: 30px
  }

  footer a:focus,footer a:hover {
    color: #142d69;
    text-decoration: underline
  }

  footer .container {
    color: #999
  }

  footer ul {
    text-align: center;
    margin-bottom: 20px
  }

  footer .footer-copyright {
    padding-top: 5px;
    font-size: 12px;
    text-align: right;
    border-top: 1px solid #ccc
  }

  footer .footer-list li {
    display: inline-table
  }

  footer .footer-list {
    padding: 8px 15px;
    list-style: none
  }
  @media only screen and (min-width: 768px) {
    .footer-list>li+li:before {
      padding:0 8px;
      font-family: sans-serif;
      font-size: 1em;
      line-height: 1em;
      color: #999;
      content: "\A0\399\A0"
    }

    .nav>li>a:focus,.nav>li>a:hover {
      color: #ccc!important
    }
  }

  @media only screen and (max-width: 767px) {
    .footer-list li {
      margin-left:10px;
      margin-right: 10px
    }
  }
</style>
