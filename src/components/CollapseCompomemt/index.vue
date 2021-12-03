<template>
  <div class="CollapseCompomemt">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item
        v-for="(item, index) in 6"
        :key="index"
        :name="index"
        :class="index < 2 ? 'My-collapse-activeitem' : 'My-collapse-item'"
      >
        <template slot="title">
          {{ "绿云小区" }}
        </template>
        <div class="ShowContentOutbox">
          <div class="PartOne">
            <div class="PartOne_leftPart">
              <div class="ContentOutbox">
                <div class="Onebox">
                  <div class="Titlebox">
                    <span>实时压力(MPa)</span>
                  </div>
                  <div class="Numbox">
                    <span>0.56</span>
                  </div>
                </div>
                <div class="Twobox">
                  <div class="Titlebox">
                    <span>上限(MPa)</span>
                  </div>
                  <div class="Numbox">
                    <span>0.56</span>
                  </div>
                </div>
                <div class="Threebox">
                  <div class="Titlebox">
                    <span>下限(MPa)</span>
                  </div>
                  <div class="Numbox">
                    <span>0.56</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="PartOne_rightPart"></div>
          </div>
          <div class="PartTwo">
            <component
              :is="'CollapseCompomemtSwiper'"
              :CollapseChildRData="66"
              :CollapseslideIndex="index"
            ></component>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
import CollapseCompomemtSwiper from "./CollapseCompomemtSwiper/index.vue";
export default {
  name: "CollapseCompomemt",
  components: {
    CollapseCompomemtSwiper,
  },
  data() {
    return {
      activeNames: ["1"],
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
  },
};
</script>
<style lang="scss" scoped>
.CollapseCompomemt {
  width: 100%;
  border: 2px solid #666d78;
  border-bottom: none;
  border-top: none;
  box-sizing: border-box;

  /deep/ .My-collapse-item {
    .el-collapse-item__header {
      display: flex;
      align-items: center;
      height: 40px;
      line-height: 40px;
      background-color: #a5b4b7;
      cursor: pointer;
      border-bottom: 1px solid #666d78;
      font-size: 14px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #333333;
      transition: border-bottom-color 0.3s;
      outline: 0;
      text-indent: 10px;
    }
  }
  /deep/ .My-collapse-activeitem {
    .el-collapse-item__header {
      display: flex;
      align-items: center;
      height: 40px;
      line-height: 40px;
      background-color: #ec4d4d;
      cursor: pointer;
      border-bottom: 1px solid #666d78;
      font-size: 14px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #fff;
      transition: border-bottom-color 0.3s;
      outline: 0;
      text-indent: 10px;
    }
  }
  /deep/ .el-collapse-item__content {
    padding-bottom: 0;
  }
  .ShowContentOutbox {
    width: 100%;

    .PartOne {
      display: flex;
      flex-flow: row nowrap;
      width: 100%;
      border-bottom: 1px solid #cdd3d5;
      .PartOne_leftPart {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        width: 115px;
        height: 147px;
        border-right: 1px solid #cdd3d5;
        .ContentOutbox {
          width: calc(100% - 28px);
          margin-left: 14px;
          text-align: start;
          .Onebox {
            width: 100%;

            .Titlebox {
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #484b54;
              line-height: 14px;
            }
            .Numbox {
              font-size: 18px;
              font-family: PingFangSC-Semibold, PingFang SC;
              font-weight: 600;
              color: #484b54;
              line-height: 32px;
            }
          }
          .Twobox {
            width: 100%;
            .Titlebox {
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #484b54;
              line-height: 14px;
            }
            .Numbox {
              font-size: 18px;
              font-family: PingFangSC-Semibold, PingFang SC;
              font-weight: 600;
              color: #484b54;
              line-height: 32px;
            }
          }
          .Threebox {
            width: 100%;
            .Titlebox {
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #484b54;
              line-height: 14px;
            }
            .Numbox {
              font-size: 18px;
              font-family: PingFangSC-Semibold, PingFang SC;
              font-weight: 600;
              color: #484b54;
              line-height: 32px;
            }
          }
        }
      }
      .PartOne_rightPart {
        width: calc(100% - 115px);
        height: 148px;
      }
    }
    .PartTwo {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      width: 100%;
      height: 31px;
    }
  }
}
</style>