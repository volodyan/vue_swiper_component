// 引入mockjs
const Mock = require('mockjs');
// mock一组数据
const getUserList = require("./data/getUserList.json"); //日常调度表格

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock("Mock/getUserList", "post", getUserList);