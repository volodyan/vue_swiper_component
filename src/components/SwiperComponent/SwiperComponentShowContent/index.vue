<template>
  <div class="SwiperComponentShowContent">
    <div class="PartOne">
      <div class="PartOne_LeftPart">立新水厂</div>
      <div class="PartOne_RightPart">21:35:32</div>
    </div>
    <div class="PartTwo">
      <div class="PartTwo_ScrollOutbox">
        <div class="PresurePart">
          <div v-for="(item, index) in 3" :key="index" class="Itembox">
            <div class="Itembox_left">出厂压力：</div>
            <div class="Itembox_right">0.56 MPa</div>
          </div>
        </div>
        <div class="FlowPart">
          <div v-for="(item, index) in 3" :key="index" class="Itembox">
            <div class="Itembox_left">出厂流量：</div>
            <div class="Itembox_right">0.56 m³/h</div>
          </div>
        </div>
        <div class="LevelPart">
          <div v-for="(item, index) in 3" :key="index" class="Itembox">
            <div class="Itembox_left">液位：</div>
            <div class="Itembox_right">0.56 m</div>
          </div>
        </div>
        <div class="PumpPart">
          <div class="PumpPart_left">水泵</div>
          <div class="PumpPart_right">
            <div v-for="(item, index) in 22" :key="index" class="Itembox">
              {{ index+1 }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="PartThree">
      <component
        :is="'SwiperComponentChild'"
        :ChildRData="6"
        :slideIndex="slideIndex"
      ></component>
    </div>
  </div>
</template>
<script>
import SwiperComponentChild from "./SwiperComponentChild/index.vue";
export default {
  name: "SwiperComponentShowContent",
  components: {
    SwiperComponentChild,
  },
  props: ["slideData", "slideIndex"],
};
</script>
<style lang="scss" scoped>
.SwiperComponentShowContent {
  width: 100%;
  background: #d6dbde;
  margin-top: 8px;
  .PartOne {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 28px;
    background: #73868c;
    font-size: 12px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    .PartOne_LeftPart {
      margin-left: 6px;
    }
    .PartOne_RightPart {
      margin-right: 13px;
    }
  }
  .PartTwo {
    width: 100%;
    height: 100px;
    overflow-x: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 1px;
      height: 1px;
      background-color: #f5f5f5;
      background-color: transparent;
    }
    /*定义滚动条轨道 内阴影+圆角*/
    &::-webkit-scrollbar-track {
      //  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 2px;
      background-color: #f5f5f5;
      background-color: transparent;
    }
    /*定义滑块 内阴影+圆角*/
    &::-webkit-scrollbar-thumb {
      border-radius: 20px;
      // -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
      background-color: #a2a1a6;
      //background-color: transparent;
    }
    .PartTwo_ScrollOutbox {
      width: calc(100% - 20px);
      margin-left: 10px;
      .PresurePart {
        width: 100%;
        margin-top: 10px;
        .Itembox {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 17px;
          margin-top: 5px;
          &:first-child {
            margin-top: 0;
          }
          .Itembox_left {
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #484b54;
          }
          .Itembox_right {
            font-size: 12px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #484b54;
          }
        }
      }
      .FlowPart {
        width: 100%;
        margin-top: 5px;
        .Itembox {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 17px;
          margin-top: 5px;
          &:first-child {
            margin-top: 0;
          }
          .Itembox_left {
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #484b54;
          }
          .Itembox_right {
            font-size: 12px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #484b54;
          }
        }
      }
      .LevelPart {
        width: 100%;
        margin-top: 5px;
        .Itembox {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 17px;
          margin-top: 5px;
          &:first-child {
            margin-top: 0;
          }
          .Itembox_left {
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #484b54;
          }
          .Itembox_right {
            font-size: 12px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #484b54;
          }
        }
      }
      .PumpPart {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        width: 100%;
        margin-top: 5px;
        margin-bottom: 10px;
        .PumpPart_left {
          width: 30%;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #484b54;
          text-align: start;
        }
        .PumpPart_right {
          display: flex;
          flex-flow: row wrap;
          justify-content: flex-end;
          width: 70%;
          margin-top: 3px;
          .Itembox {
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            width: 16px;
            height: 16px;
            background: #abe931;
            border: 1px solid #262b32;
            box-sizing: border-box;
            border-radius: 50%;
            margin-left: 6px;
            margin-bottom: 3px;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #000000;
            &:first-child {
              //margin-left: 0;
            }
          }
        }
      }
    }
  }
  .PartThree {
    width: 100%;
    height: 28px;
  }
}
</style>