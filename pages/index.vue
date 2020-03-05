<template>
  <section>
    <section class="upcoming-events">
      <h1>Your upcoming events</h1>
      <carousel-3d height="200px">
        <slide class="slide-element" style="background: transparent; border: none" :index="0" >
          <ui-event/>
        </slide>
        <slide class="slide-element" style="background: transparent; border: none" :index="1">
          <ui-event/>
        </slide>
        <slide class="slide-element" style="background: transparent; border: none" :index="2">
          <ui-event/>
        </slide>
      </carousel-3d>
   </section>

    <section class="search-events">
      <h1>Search for events</h1>
      <ui-event/>
      <ui-event title="Recovery run" date="Next saturday - 8:00" icon="running"/>
      <ui-event title="Basket with friends" date="Next monday - 17:30" icon="basketball-ball"/>
      <ui-event title="Football game" date="08-03-2020 - 8:00" icon="futbol"/>
    </section>
  </section>
</template>

<script>

  export default {
    transition: 'page',
  }
</script>

<style>
  .slide-element {
    backface-visibility: hidden;
  }
</style>
