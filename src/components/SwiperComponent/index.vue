
<template>
  <div class="SwiperComponent">
    <swiper :options="swiperOption" class="swiper-container" ref="mySwiper">
      <swiper-slide
        class="swiper-item"
        v-for="(slide, index) in RData"
        :key="index"
      >
        <div class="lunbooutbox" @click="swiperitemtSelect(slide, index)">
            <component :is='"SwiperComponentShowContent"' :slideData="slide" :slideIndex="index"></component>
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev"   slot="button-prev">
      <span
        class="iconfont icon-xiangzuo2 iconfont_left"
        @mouseenter="on_prev_enter"
        @mouseleave="on_prev_leave"
      ></span>
    </div>
    <div class="swiper-button-next" slot="button-next">
      <span
        class="iconfont icon-xiangzuo2 iconfont_right"
        @mouseenter="on_top_enter"
        @mouseleave="on_top_leave"
      ></span>
    </div>
  </div>
</template>

<script>
import Bus from "@/bus.js";
import SwiperComponentShowContent from './SwiperComponentShowContent/index.vue'
export default {
  name: "SwiperComponent",
  components:{
      SwiperComponentShowContent
  },
  data() {
    return {
      RData: [],
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        freeModeMomentum: false,
        setWrapperSize: true,
        grabCursor: true,
        roundLengths: true,
        autoHeight: true, //高度随内容变化
        freeModeMomentumRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeMode: false,
        freeModeMomentumBounce: false,
        freeModeSticky: true,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        resistance: true,
        resistanceRatio: 0,
        breakpoints: {
          //当宽度小于等于1366
          1366: {
            slidesPerView: "auto",
            spaceBetween: 6,
          },
          //当宽度小于等于1440
          1440: {
            slidesPerView: "auto",
            spaceBetween: 6,
          },
          //当宽度小于等于1680
          1680: {
            slidesPerView: "auto",
            spaceBetween: 6,
          },
          //当宽度小于等于1920
          1920: {
            slidesPerView: "auto",
            spaceBetween: 6,
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // 设置自动轮播
        /*   autoplay: {
          delay: 0,
          disableOnInteraction: true
        }, */

        autoplay: false,
        // 设置轮播可循环
        loop: true,
        loopAdditionalSlides: 0,
        //loopedSlides :8,
      },
    };
  },
  filters: {
    capitalize: (value) => {
      if (Number(value) < 10) {
        return "0" + value;
      } else {
        return value;
      }
    },
  },
//   created() {
//     var ClienWidth = document.documentElement.clientWidth;
//     if (ClienWidth == 1366) {
//       this.swiperOption.slidesPerView = 19;
//     }
//     if (ClienWidth == 1440) {
//       this.swiperOption.slidesPerView = 20;
//     }
//     if (ClienWidth == 1680) {
//       this.swiperOption.slidesPerView = 23;
//     }
//     console.log(ClienWidth);
//   },
  mounted() {
    Bus.$on("SelectDayCardDatares", (e) => {
      this.RData = e.data.RData;
    });
  },
  methods: {
    swiperitemtSelect(slide, index) {},
    //通过获得的swiper对象来暂停自动播放
    on_top_enter() {
      /*     this.mySwiper.autoplay.start(); */

      this.mySwiper.slideTo(this.RData.length - 1, 20000, false);
    },
    on_top_leave() {
      this.mySwiper.autoplay.stop();
   
    },
    on_prev_enter() {
      this.mySwiper.slideTo(0, 20000, false);
    },
    on_prev_leave() {
      this.mySwiper.autoplay.stop();
      
    },
  
  },
  //计算属性，获得可以操作的swiper对象
  computed: {
    mySwiper() {
      // mySwiper 是要绑定到标签中的ref属性
      return this.$refs.mySwiper.swiper;
    },
  },
};
</script>
<style lang='scss' scoped>
/* 修改swiper轮播组件样式 */
.SwiperComponent {
  width: 100% !important;
  position: relative;

  /deep/ .swiper-container {
    width: 100% !important;
    .swiper-wrapper {
      display: flex !important;
      flex-flow: row nowrap;
      width: 100% !important;
      margin-right: 0px !important;
      .swiper-item {
        width: 240px !important;

        margin-right: 6px !important;
        &:first {
          margin-left: 0 !important;
        }
        &:last-child {
          margin-right: 0px !important;
        }
        .lunbooutbox {
          width: 240px !important;
         
          background-color: #f4f4f4;
          pointer-events: all;
        }
      }
    }
  }

  .swiper-button-prev {
    opacity: 1;
    background-image: none !important;
    position: absolute !important;
    top: 22px !important;
    left: -56px !important;
    z-index: 5 !important;
    background: #b1babd !important;
    outline: none !important;
    width: 56px !important;
    height: 172px !important;
    line-height: 172px;
    text-align: center;
    background: linear-gradient(270deg, #bcc6c9 0%, #828c8f 100%);
    border: 2px solid #666d78;
    box-sizing: border-box;
    .iconfont_left {
      font-size: 46px;
    }
  }

  .swiper-button-next {
    opacity: 1;
    background-image: none !important;
    position: absolute !important;
    top: 22px !important;
    right: -56px !important;
    z-index: 5 !important;
    background: #b1babd !important;
    outline: none !important;
    width: 56px !important;
    height: 172px !important;
    line-height: 172px;
    text-align: center;
    background: linear-gradient(270deg, #bcc6c9 0%, #828c8f 100%);
    border: 2px solid #666d78;
    box-sizing: border-box;
    transform: rotate(180deg);
    .iconfont_right {
      font-size: 46px;
    }
  }
}
</style>
