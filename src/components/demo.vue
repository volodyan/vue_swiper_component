<template>
  <div class="outbox">
    <div class="Swiperoutbox">
      <component :is="'SwiperComponent'"></component>
    </div>
    <div class="CollapseOutbox">
      <component :is="'CollapseCompomemt'"></component>
    </div>
  </div>
</template>
<script>
import Bus from "@/bus.js";
import UrlClass from "@/http/Urlclass";
import SwiperComponent from "@/components/SwiperComponent/index";
import CollapseCompomemt from "./CollapseCompomemt/index.vue";
export default {
  name: "demo",
  components: {
    SwiperComponent,
    CollapseCompomemt,
  },

  mounted() {
    this.$nextTick(() => {
      this.SelectDayCardDatamouted();
    });
  },
  methods: {
    SelectDayCardDatamouted() {
      var SelectDayCardData = {};
      SelectDayCardData.Customer = "shaoxing";

      this.$axios
        .post(
          UrlClass.axiosUrlRC + "getUserList",
          JSON.stringify(SelectDayCardData),
          {
            headers: { "Content-Type": "application/json;" },
          }
        )
        .then((res) => {
          Bus.$emit("SelectDayCardDatares", res);
        })
        .catch((error) => {
          /*  console.log(error); */
        });
    },
  },
};
</script>
<style lang='scss' scoped>
.outbox {
  width: 70%;

  margin-left: 100px;
  .Swiperoutbox {
    width: 100%;
    height: 172px;
    cursor: pointer;
      background: #b1babd;
  }
  .CollapseOutbox {
    width: 100%;
    height: 706px;
    overflow-x: hidden;
    overflow-y: auto;
    margin-top: 60px;
    background: #fff;
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
  }
}
</style>

