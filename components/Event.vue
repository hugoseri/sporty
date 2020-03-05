<template>
  <div class="event">
    <div class="event-img">
      <i :class="`ui-icon fa fa-${icon}`"></i>
    </div>
    <div class="event-content">
      <h2>{{title}}</h2>
      <p>{{date}}</p>
      <p>{{text}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {type: String, default: 'Spartan Race'},
      date: {type: String, default: 'Next Monday - 9:00'},
      icon: {type: String, default: 'image'},
      text: {
        type: String,
        default: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla non ornare mi. Quisque at sem mi.'
      }
    },
  }
</script>

<style>
  .event {
    border-radius: 20px;
    background: #FFFFFF;
    color: #474747;
    margin: 20px 10px;
    overflow: hidden;
  }

  .event h2 {
    text-align: left;
    font-weight: bold;
  }

  .event i {
    font-size: 100px;
    padding: 40px 20px;
  }

  .event-img {
    float: left;
    width: 40%;
    background: #7f828b;
    height: 100%;
  }

  .event-content {
    float: left;
    width: 60%;
    padding: 10px 0;
  }

  p {
    color: #474747;
  }

</style>
