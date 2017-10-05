import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    loading: true,
    projs_info: [
      {
        name: "Proj.1 名片",
        hash: '600361653469553',
        class_id: "1"
      },
      {
        name: "Proj.2 Guideline",
        hash: '602543423251376',
        class_id: "1"
      },
      {
        name: "Proj.3 天氣盒子",
        hash: '614003255438726',
        class_id: "1"
      },
      {
        name: "Proj.4 購物清單",
        hash: '634100173429034',
        class_id: "1"
      },
      {
        name: "Proj.5 bootstrap製作捲動式網頁",
        hash: '676015375904180',
        class_id: "1"
      },
      {
        name: "Proj.1 使用html/css撰寫一份自己的網頁履歷",
        hash: '775644402607943',
        class_id: "2"
      },
      {
        name: "Proj.2 在網頁寫一座美麗城市",
        hash: '777826799056370',
        class_id: "2"
      }
    ]
  },
  mutations: {
    setLoading(state,value){
      state.loading=value
    }
  }
});

export default store