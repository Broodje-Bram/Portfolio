<template>
  <section class="scene" id="ending">
    <div class="static-container">

      <div class="std">
        <div class="madeof">
          <p class="-comment">// Made with</p>

          <div class="cols">
            <ul class="col">
              <li class="ico">&lt;/&gt;</li>
              <li>Vue.js</li>
              <li>GSAP</li>
              <li>ScrollMagic</li>
            </ul>
            <ul class="col">
              <li class="ico">~</li>
              <li>+Enough cups of coffee to kill a buffalo</li>
            </ul>
          </div>

        </div>

        <p>
          Thanks for checking my website!<br>
          <span class="-comment">// It's still a work in progress!</span>
        </p>
        <p class="-big">
          Check out my
          <router-link to="/work" title="Work" class="-pink">selected works</router-link>
          for more details.
        </p>
        <p style="font-size: 10px">
            I am available for new projects and a coffee <span class="-pink">;)</span>
        </p>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'ending'
}
</script>