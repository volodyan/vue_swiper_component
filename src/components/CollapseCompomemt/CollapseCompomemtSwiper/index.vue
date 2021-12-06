
<template>
  <div class="CollapseCompomemtSwiper">
    <!-- swiper -->
    <swiper :options="swiperOption"  class="CollapseCompomemtswiperswiper-containerr swiper-container2">
      <swiper-slide
        class="ChildSwiper-item"
        v-for="(slide, index) in CollapseChildRData"
        :key="index"
      >
        <div class="ChildLunbooutbox" :title="slide" :class="NowIndex===index?'ActiveChildLunbooutbox':''"  @click.stop="swiperitemtSelect(slide, index)"><!-- {{ slide }} -->绿云小区绿云小区绿云小区绿云小区绿云小区绿云小区</div>
      </swiper-slide>
    </swiper>
    <div
      class="CollapseCompomemtswiper-button-prev"
      :class="'CollapseCompomemtSwiper-childslide-prev' + CollapseslideIndex"
      slot="button-prev1"
    >
      <span class="iconfont icon-xiangzuo2 iconfont_left"></span>
    </div>
    <div
      class="CollapseCompomemtswiper-button-next"
      :class="'CollapseCompomemtSwiper-childslide-next' + CollapseslideIndex"
      slot="button-next1"
    >
      <span class="iconfont icon-xiangzuo2 iconfont_right"></span>
    </div>
  </div>
</template>

<script>
import Bus from "@/bus.js";

export default {
  name: "CollapseCompomemtSwiper",
  props: ["CollapseChildRData", "CollapseslideIndex"],
  data() {
    return {
      NowIndex:null,
      swiperOption: {
        nested: true,
        control:null,
        slidesPerView: "auto",
        spaceBetween: 2,
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
            spaceBetween: 2,
          },
          //当宽度小于等于1440
          1440: {
            slidesPerView: "auto",
            spaceBetween: 2,
          },
          //当宽度小于等于1680
          1680: {
            slidesPerView: "auto",
            spaceBetween: 2,
          },
          //当宽度小于等于1920
          1920: {
            slidesPerView: "auto",
            spaceBetween: 2,
          },
        },
        slideNextClass : 'CollapseCompomemtSwiper-childslide-next',
        slidePrevClass : 'CollapseCompomemtSwiper-childslide-prev',
        containerModifierClass : 'my-container-',
        navigation: {
          nextEl: ".CollapseCompomemtSwiper-childslide-next" + this.CollapseslideIndex,
          prevEl: ".CollapseCompomemtSwiper-childslide-prev" + this.CollapseslideIndex,
        },
  
        // 设置自动轮播
        /*   autoplay: {
          delay: 0,
          disableOnInteraction: true
        }, */

        autoplay: false,
        // 设置轮播可循环
        loop: false,
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
  methods:{
    swiperitemtSelect(slide, index){
      this.NowIndex=index
    }
  }
};
</script>
<style lang='scss' scoped>
/* 修改swiper轮播组件样式 */
.CollapseCompomemtSwiper {
  width: 100% !important;
  position: relative;

  /deep/ .CollapseCompomemtswiperswiper-containerr {
    width: 100% !important;
    .swiper-wrapper {
      display: flex !important;
      flex-flow: row nowrap;
      width: 100% !important;
      margin-right: 0px !important;
      .ChildSwiper-item {
        width: 102px !important;

        margin-right: 2px !important;
        &:first-child {
          margin-left: 0 !important;
        }
        &:last-child {
          margin-right: 0px !important;
        }
        .ChildLunbooutbox {
          cursor: pointer;
          width: 102px;
          height: 26px;
          background: #d3dcde;
          border: 1px solid #a3abae;
          box-sizing: border-box;
          pointer-events: all;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #484b54;
          line-height: 26px;
          padding: 0 3px;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          &:first-child {
            margin-left: 3px !important;
          }
          &:last-child {
            margin-right: 3px !important;
          }
        }
        .ActiveChildLunbooutbox{
          background: #41555B;
          color: #FFFFFF;
        }
      }
    }
  }

  .CollapseCompomemtswiper-button-prev {
    display: none;
    opacity: 1;
    background-image: none !important;
    position: absolute !important;
    top:-2px !important;
    left: 0px !important;
    z-index: 5 !important;
    background: #d3dcde !important;
    outline: none !important;
    width: 28px !important;
    height: 29px !important;
    line-height: 28px;
    text-align: center;
    background: linear-gradient(270deg, #bcc6c9 0%, #828c8f 100%);
    border: 1px solid #a3abae !important;
    box-sizing: border-box;
    .iconfont_left {
      font-size: 16px;
    }
  }

  .CollapseCompomemtswiper-button-next {
    display: none;
    opacity: 1;
    background-image: none !important;
    position: absolute !important;
    top: -2px !important;
    right: 0px !important;
    z-index: 5 !important;
    background: #d3dcde !important;
    outline: none !important;
    width: 28px !important;
    height: 29px !important;
    line-height: 28px;
    text-align: center;
    background: linear-gradient(270deg, #bcc6c9 0%, #828c8f 100%);
    border: 1px solid #a3abae !important;
    box-sizing: border-box;
    transform: rotate(180deg);
    .iconfont_right {
      font-size: 16px;
    }
  }
  &:hover .CollapseCompomemtswiper-button-prev {
    display: block;
  }
  &:hover .CollapseCompomemtswiper-button-next {
    display: block;
  }
}
</style>
