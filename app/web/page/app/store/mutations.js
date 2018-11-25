import { SET_SEO_DATA, SET_CURR_PAGE } from './mutation-type';
const mutations = {
  [SET_SEO_DATA](state, data) {
    state.seoData = data;
  },
  [SET_CURR_PAGE](state, data) {
    state.currPage = data;
  }
};
export default mutations;