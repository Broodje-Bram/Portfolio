<template>
  <div>
    <Titles :viewport="viewport" scene="schoolTitle">
      <h2 class="title">
        Windesheim(<span class="params">2022, Present</span>)
      </h2>
      <div class="std">
        <p class="-gray">(<span class="-pink">'HBO-ICT'</span>)</p>
      </div>
    </Titles>

    <section class="scene" id="roc1">
      <div class="static-container">
        <h2 class="title">
          Roc(<span class="params">2020, 2022</span>)
        </h2> <br><br>
        <div class="std">
          <p class="-big">
            For 2 years, I were <b class="-pink">a student at Roc Flevoland</b> @ <a href="https://www.rocvanflevoland.nl/" target="_blank" rel="noopener" title="Visit Roc's website" class="-pink">Roc</a>.
          </p>
          <p>
           "A School that makes use of your Talent."
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