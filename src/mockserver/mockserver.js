// 引入mockjs
const Mock = require("mockjs");

import ControlPressureCurve from './data/ControlPressureCurve.json'
import ControlPressureList from './data/ControlPressureList.json'
import getUserList from './data/getUserList.json'
import ConTrolChartData from './data/ConTrolChartData.json'


// Mock.mock( url, post/get , 返回的数据)；
Mock.mock("/api/getUserList", "post", getUserList)
Mock.mock("/api/ControlPressureCurve", "post", ControlPressureCurve);
Mock.mock("/api/ControlPressureList", "post", ControlPressureList);;
Mock.mock("/api/ConTrolChartData", "post", ConTrolChartData);