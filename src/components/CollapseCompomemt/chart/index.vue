<template>
  <div class="chart"></div>
</template>
<script>
import { debounce } from "@/utils";
import Bus from "@/utils/bus.js";

export default {
  name: "lineChart",
  data() {
    return {
      autoResize: {
        type: Boolean,
        default: true,
      },
      chart: null,
      sidebarElm: null,
      chartData: {},
    };
  },

  mounted() {
    // Bus.$on("ControlPressureCurveTo", (e) => {
    //   if (
    //     !!e.Down.length ||
    //     !!e.Up.length ||
    //     !!e.Forecast.length ||
    //     !!e.Real.length
    //   ) {
    //     console.log("ControlPressureCurveTo",e)
    //     //!!e.Waterworks.length
    //     let Down = [];
    //     let Up = [];
    //     let Forecast = [];
    //     let Real = [];
    //     let Time = [];
    //     let Max = e.Max;
    //     let Min = e.Min;
    //     let Now = e.Now;
    //     let WarningTime = e.WarningTime;

    //     e.Forecast.Data.forEach((ele) => {
    //       Forecast.push(ele.Data);
    //       Time.push(ele.Time);
    //     });
    //     e.Real.Data.forEach((ele) => {
    //       Real.push(ele.Data);
    //     });
    //    e.Down.Data.forEach((ele) => {
    //       Down.push(ele.Data);
    //     });
    //       e.Up.Data.forEach((ele) => {
    //       Up.push(ele.Data);
    //     });
    //     var a = {
    //       Forecast,
    //       Real,
    //       Down,
    //       Up,
    //       Time,
    //       Max,
    //       Min,
    //       Now,
    //       WarningTime,

    //     };
    //     this.chartData = a;
    //     this.$nextTick(() => {
    //       this.initChart();
    //     });
    //   } else {
    //     this.chart = this.$echarts.init(this.$el, "macarons");
    //     this.chart.clear();
    //   }
    // });
    /////
    let Time=[0,1,2,3,4,5]
    let Max=1600
    let Min=0
     let PresureMaxData=16.6
    let PresureMinData=0
    let DispatchList=[130,110,663,836,662,264]
    let Forecast=[100,130,963,236,562,364]
    let PressureList=[3,1.3,9.63,2.36,6.2,3.64]
    var a = {
      Forecast,
      DispatchList,
      PressureList,
      Time,
      Max,
      Min,
      PresureMaxData,
      PresureMinData,
    };
    this.chartData = a;
    this.$nextTick(() => {
      this.initChart();
    });
    /////
    this.resetSizefun();
    // this.MutationObserverStyleFun();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    if (this.autoResize) {
      window.removeEventListener("resize", this.__resizeHandler);
    }

    this.sidebarElm &&
      this.sidebarElm.removeEventListener(
        "transitionend",
        this.sidebarResizeHandler
      );

    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(this.$el, "macarons");
      this.chart.clear();
      this.setOptions(this.chartData);
    },
    setOptions(chartData) {
      this.chart.setOption({
        grid: [
          {
            left: 60,
            right: 50,
            top: 55,
            bottom: 30,
            backgroundColor: "#F0F0F0",
            show: false,
          },
        ],
        title: [
          {
            text: "m³/h",
            left: 20,
            top: 25,
            textStyle: {
              color: " #6E737F",
              fontSize: 12,
            },
          },
          {
            text: "Mpa",
            right: 10,
            top: 25,
            textStyle: {
              color: " #6E737F",
              fontSize: 12,
            },
          },
        ],
        legend: {
          data: ["出厂流量", "出厂压力"],
          left: "center",
          top: 15,
          textStyle: {
            color: " #6E737F",
            fontSize: 12,
          },
        },
        tooltip: {
          trigger: "axis",
        },

        xAxis: [
          {
            data: chartData.Time,
            boundaryGap: false,
            axisPointer: {
              type: "line",
            },
            axisLabel: {
              inside: false,
              //interval: 5,

              //rotate: 45,
              textStyle: {
                color: "#6E737F",
                fontSize: 12,
              },
              // formatter: (value) => {
              //   return this.$echarts.format.formatTime("h", value);
              // },
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            z: 10,
          },
        ],
        yAxis: [
          {
            type: "value",
            max: 6500,
            max: chartData.Max,
            min: chartData.Min,
            splitLine: {
              show: false,
              lineStyle: {
                type: "solid",
                color: "#6E737F",
                opacity: 0.5,
              },
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#6E737F",
                opacity: 0,
              },
            },
            axisTick: {
              show: false,
            },

            axisLabel: {
              show: true,
              //formatter: '{value} m³/h',
              textStyle: {
                color: "#6E737F",
                fontSize: 12,
              },
            },
          },
          {
            type: "value",
            max: 0.6,
            max: chartData.PresureMaxData,
            min: chartData.PresureMinData,
            splitLine: {
              show: false,
              lineStyle: {
                type: "solid",
                color: "#6E737F",
                opacity: 0.5,
              },
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#6E737F",
              },
            },
            axisTick: {
              show: false,
            },

            axisLabel: {
              show: true,
              //formatter: '{value} m³/h',
              textStyle: {
                color: "#6E737F",
                fontSize: 12,
              },
            },
          },
        ],
        graphic: [
          {
            type: "image", // 图形元素类型
            id: "logo", // 更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。
            left: 60, // 根据父元素进行定位 （居中）
            bottom: 30, // 根据父元素进行定位   （0%）, 如果bottom的值是 0，也可以删除该bottom属性值。
            z: 0, // 层叠
            bounding: "all", // 决定此图形元素在定位时，对自身的包围盒计算方式
            style: {
              image: require("../../../assets/img/编组 24.png"), // 这里一定要注意、注意，必须是https开头的图片路径地址
              width: 1092,
              height: 78,
              lineWidth: 0,
            },
          },
        ],

        series: [
          {
            name: "预测流量",
            type: "bar",
            axisPointer: {
              show: false,
            },
            z: 9,
            barWidth: 2,
            data: chartData.DispatchList,

            // markLine: {
            //   symbol: "none",

            //   data: [
            //     {
            //       xAxis: chartData.makelinedatax,
            //       lineStyle: {
            //         normal: {
            //           color: "#F27070",
            //           type: "dashed",
            //         },
            //       },
            //       label: {
            //         normal: {
            //           formatter: "",
            //         },
            //       },
            //     },
            //   ],
            // },
          },
          {
            name: "出厂流量",
            type: "line",
            symbol: "none",
            connectNulls: true,
            z: 8,
            label: {
              show: false,
              position: "top",
              color: "#FF6C48",
              fontSize: 20,
            },
            data: chartData.Forecast,
            symbol: "none",
            lineStyle: {
              color: "#FF6C48",
              width: 2,
            },
            itemStyle: {
              normal: {
                color: "#FF6C48",
                fontSize: 20,
              },
            },
            // areaStyle: {
            //   normal: {
            //     color: "rgba(69, 152, 235, 1)",
            //     opacity: 0.2,
            //   },
            // },
          },
          {
            name: "出厂压力",
            type: "line",
            symbol: "none",
            yAxisIndex: 1,
            z: 7,
            connectNulls: true,
            label: {
              show: false,
              position: "top",
              color: "#38F0F0",
              fontSize: 20,
            },
            data: chartData.PressureList,
            symbol: "none",
            lineStyle: {
              color: "#38F0F0",
              width: 2,
            },
            itemStyle: {
              normal: {
                color: "#38F0F0",
                fontSize: 20,
              },
            },
            // areaStyle: {
            //   normal: {
            //     color: "rgba(69, 152, 235, 1)",
            //     opacity: 0.2,
            //   },
            // },
          },
        ],
      });
    },
    sidebarResizeHandler(e) {
      if (e.propertyName === "width") {
        this.__resizeHandler();
      }
    },
    //窗口改变执行方法
    resetSizefun() {
      if (this.autoResize) {
        this.__resizeHandler = debounce(() => {
          if (this.chart) {
            this.chart.resize();
          }
        }, 100);
        window.addEventListener("resize", this.__resizeHandler);
      }

      // 监听侧边栏的变化
      this.sidebarElm = document.getElementsByClassName("sidebar-container")[0];
      this.sidebarElm &&
        this.sidebarElm.addEventListener(
          "transitionend",
          this.sidebarResizeHandler
        );
    },
    //div--style样式变化
    MutationObserverStyleFun() {
      var observer = new MutationObserver((mutations, observer) => {
        mutations.forEach((mutation) => {
          // console.log(mutation);
          if (this.chart) {
            this.chart.resize();
          }
        });
      });
      var config = {
        attributes: true,
        attributeOldValue: true,
        attributeFilter: ["style"],
      };
      var el = document.getElementsByClassName(
        "PipeNetworkDiagnosisPages_rightoutbox"
      )[0];
      observer.observe(el, config);
    },
  },
};
</script>
<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 148px;
}
</style>



