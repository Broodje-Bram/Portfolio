<template>
  <div>
    <Titles :viewport="viewport" scene="schoolTitle">
      <h1 class="title">
        Roc(<span class="params">2020, Present</span>)
      </h1>
    </Titles>

    <section class="scene" id="roc1">
      <div class="static-container">
        <div class="std">
          <p class="-big">
            For the past 2 years, I was <b class="-pink">a student at Roc Flevoland</b> @ <a href="https://www.rocvanflevoland.nl/" target="_blank" title="Visit Roc's website" class="-pink">Roc</a>.
          </p>
          <p>
           A School that makes use of youre Talent.
          </p>
        </div>
      </div>
    </section>
    <section class="scene" id="roc2">
      <div class="static-container">
        <div class="std">
          <p>
            <span class="-big">Throughout these years I was involved in <span class="-pink">a few projects</span>,</span>
            including frontend builders, Backend Builders
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Titles from './Titles.vue';

export default {
  name: 'school',
  props: {
    viewport: Object
  },
  components: {
    Titles,
  }
}
</script>