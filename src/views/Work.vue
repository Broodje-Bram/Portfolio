<template>
  <div id="work" class="wrapper">

    <div class="static-container">
      <h1 class="title">
        work<br v-if="viewport.is568">(<span class="params">'selected'</span>)
      </h1>

      <div class="std">
        <p class="-gray">// Some special projects explained in details.</p>

        <ul class="work-list">
          <li>
            <router-link to="https://gardenambiance.nl/" title="Garden Ambiance">
              <img src="../img/Garden.png" alt="">
              <div class="details">
                <strong>Garden Ambiance</strong><br>
                <span class="-comment">// 2021 - Present </span><br>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/work/casino" title="Online Casino Informatie">
              <img src="../img/OnlineCasino.png" alt="">
              <div class="details">
                <strong>Online Casino</strong><br>
                <span class="-comment">// 2020 - Present </span><br>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/work/memorygame" title="Memory Game">
              <img src="../img/Memorygame.png" alt="">
              <div class="details">
                <strong>Memory Game</strong><br>
                <span class="-comment">// 2020 - Present</span><br>
                A Memory game
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/work/spoedteststraat" title="SpoedtestStraat">
              <img src="../img/Spoedtest.png" alt="">
              <div class="details">
                <strong>Spoedteststraat</strong><br>
                <span class="-comment">// 2020 - Present</span><br>
                A Test Location website
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
// styles
import '@/styles/work.css';
// GSAP + ScrollMagic
import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax, Power3 } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

export default {
  name: 'work',
  props: {
    viewport: Object,
  },
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
          rotationX: 70,
          transformOrigin: '50% 50% -100px',
          ease: Power3.easeOut,
        }, 'enter')
        .from('.std', 2, {
          autoAlpha: 0,
          x: -32,
          ease: Power3.easeOut,
        }, 'enter+=1.5');

  },
};
</script>
