<template>
  <div id="home" class="wrapper">
    <!--intro-->
    <Intro/>

    <div class="gap"></div>
    <!--Title: CurriculumVitae()-->
    <Titles :viewport="viewport" scene="curriculum">
      <h2 class="title" v-if="viewport.is768">
        Curriculum<br>
        .vitae(<span class="params">'/.*$/g'</span>)
      </h2>
      <h2 class="title" v-else>
        CurriculumVitae(<span class="params">'/.*$/g'</span>)
      </h2>
      <div class="std">
        <p class="-gray">&lt;A life+work showcase&gt;</p>
      </div>
    </Titles>
    <div class="gap"></div>
    <!--School-->
    <school :viewport="viewport" />

    <Titles :viewport="viewport" scene="hobbys">
      <h2 class="title">
        <p class="-pink">${<span class="-white">Coding</span>}</p>
        <p class="-pink">${<span class="-white">Fitness</span>}</p>
        <p class="-pink">${<span class="-white">Learning</span>}</p>
      </h2>
    </Titles>

    <div class="gap"></div>
    <!--Ending-->
    <ending />

  </div>
</template>

<script>
// GSAP + ScrollMagic
import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax, Power3, TweenLite, Power0 } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

// Components
import Intro from '@/components/home/intro';
import Titles from "@/components/home/Titles";
import School from "@/components/home/school";
import Ending from "@/components/home/ending";

export default {
  name: 'home',
  components: {
    Ending,
    Intro,
    Titles,
    School,
  },
  props: {
    viewport: Object,
  },
  data() {
    return {
      intro: new TimelineMax(),
      scroller: new ScrollMagic.Controller(),
      scenes: [],
      timeLines: [],
      tweeners: [],
    }
  },
  created() {
    // before leaving the page, in case of refresh
    window.addEventListener("beforeunload", () => window.scroll(0, 0));
  },
  mounted() {
    // 01. play Intro
    this.playIntro();
    // 02. setup time lines and scenes
    this.setupScenes();
    // 03. setup CurriculumVitae
    this.sceneCurriculumVitae();
    // School(2022,Present)
    this.sceneSchoolTitle();
    // Hobby's
    this.sceneHobbys();

  }, beforeDestroy() {
    // Kill time line
    this.timeLines.map(tl => tl.kill());
    //destroy Scrollmagic controller
    this.scroller.destroy();
  },
  methods: {
    setupScenes() {
      const scenesElements = document.querySelectorAll(".scene");
      for (let [i, scenesElement] of Array.from(scenesElements).entries()) {
        // tweeners, to animate the time lines' progress, to add momentum
        this.tweeners[i] = new TimelineMax();
        // time lines
        this.timeLines[i] = new TimelineMax({paused: true});
        // create scenes on ScrollMagic
        this.scenes[i] = new ScrollMagic.Scene({
          // trigger on the scene element
          triggerElement: scenesElement,
          // // start half screen before
          // offset: -this.viewport.h / 2,
          // lasts for the scene element height
          duration: scenesElement.offsetHeight
        })
            .setTween(this.tweeners[i])
            .addTo(this.scroller)
            .reverse(true)
            .setClassToggle(scenesElement, "active");
        // animate the progress in the time lines
        this.tweeners[i]
            .to(scenesElement, 1, {autoAlpha: 1})
            .eventCallback('onUpdate', () => {
              TweenLite.to(this.timeLines[i], .5, {
                progress: this.tweeners[i].progress(),
                ease: Power0.easeNone
              });
            });
      }
    },
    playIntro() {
      this.intro
          .addLabel('enter', 1)
          .from('#intro .title', 2, {
            autoAlpha: 0,
            rotationX: 90,
            transformOrigin: '50% 50% -100px',
            ease: Power3.easeOut,
          }, 'enter')
          .from('#intro .std', 2, {
            autoAlpha: 0,
            x: -32,
            ease: Power3.easeOut,
          }, 'enter+=1.5');
    },
    sceneCurriculumVitae(){
      /**
       * @desc
       * Scrolling animations time lines
       */
      // CurriculumVitae()
      this.timeLines[0]
          .set('#curriculum .title-container', {autoAlpha: 1}) // show animations
          .addLabel('start', 0)
          .from('#curriculum .title', 2, {
            yPercent: -50,
            autoAlpha: 0,
            rotationX: 90,
            transformOrigin: '50% 50% -100px',
            ease: Power3.easeOut,
          }, 'start')
          .from('#curriculum .std', 2, {
            yPercent: 50,
            autoAlpha: 0,
            rotationX: -90,
            transformOrigin: '50% 50% -100px',
            ease: Power3.easeOut,
          }, 'start')
          .to('#curriculum .title, #curriculum .std', 2, {
            autoAlpha: 0,
            yPercent: -100
          });
    },
    sceneSchoolTitle(){
      // school()
      this.timeLines[1]
          // this scene
          .set('#schoolTitle .title-container, #roc1 .container', {autoAlpha: 1})
          .addLabel('start', 0)
          .from('#schoolTitle .title', 6, {
            yPercent: -50,
            autoAlpha: 0,
            rotationX: 90,
            transformOrigin: '50% 50% -100px',
            ease: Power3.easeOut,
          }, 'start')
          .from('#schoolTitle .std', 6, {
            yPercent: 50,
            autoAlpha: 0,
            rotationX: -90,
            transformOrigin: '50% 50% -100px',
            ease: Power3.easeOut,
          }, 'start')
          .to('#schoolTitle .title, #schoolTitle .std', 6, {
            autoAlpha: 0,
            yPercent: -100,
          })
          .staggerFrom('#smart, #open', 6, {
            autoAlpha: 0,
            scale: 0,
            ease: Power3.easeOut,
          }, .2, 'start+=2')
    },
    sceneHobbys(){
      // Hobbys()
      this.timeLines[4]
          .set('#hobbys .title-container', {autoAlpha: 1}) // show animations
          .addLabel('start', 0)
          .from('#hobbys .title', 8, {
            yPercent: -50,
            autoAlpha: 0,
            rotationX: 90,
            transformOrigin: '50% 50% -100px',
            ease: Power3.easeOut,
          }, 'start')
          .to('#hobbys .title, #hobbys .std', 8, {
            autoAlpha: 0,
            yPercent: -100
          })
          .staggerFrom('#smart, #open', 8, {
            autoAlpha: 0,
            scale: 0,
            ease: Power3.easeOut,
          }, .2, 'start+=2')
    },
    components: {
      Intro,
      Titles,
      School,
    }
  }
};

</script>