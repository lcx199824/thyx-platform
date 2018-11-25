'use strict';
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';

Vue.use(Vuex);

export default function createStore(initState = {}) {

  const state = {
    seoData: {
    },
    currPage: 1
  };

  return new Vuex.Store({
    state,
    mutations
  });
}
