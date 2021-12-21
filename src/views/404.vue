<template>
  <div id="err404" class="wrapper">

    <div class="static-container">
      <h1 class="title">
        err(<span class="params">404</span>)
      </h1>

      <div class="std">
        <p class="-big">Lost?</p>

        <p>The page you requested could not be found.</p>
        <router-link to="/" title="Back home" class="bt">
          <svg class="nav-ico -prev" viewBox="0 0 16 16"><path d="M5,1h10v10 M5.5,10.5l0.8-0.8"/></svg>
          Back home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// styles
import '@/styles/err404.css';
// GSAP + ScrollMagic
import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax, Power3 } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

export default {
  name: '404',
  data() {
    return {
      intro: new TimelineMax()
    }
  },
  methods: {},
  mounted() {

    /**
     * @desc
     * Intro scene
     */
    this.intro
        .addLabel('enter', 1)
        .from('.title', 2, {
          autoAlpha: 0,
          rotationX: 90,
          transformOrigin: '50% 50% -100px',
          ease: Power3.easeOut,
        }, 'enter')
        .from('.std', 2, {
          autoAlpha: 0,
          x: -32,
          ease: Power3.easeOut,
        }, 'enter+=1.5');
  },
  beforeDestroy() {

    // garbage
    this.intro.destroy();

  }
};
</script>
