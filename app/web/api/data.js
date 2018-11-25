import axios from '@/libs/api.request';

function getFormData() {
  if (!process.browser) {
    return new require('form-data')();
  } else {
    return new FormData();
  }
}

// 页头搜索功能
export function search({
  type,
  key
}) {
  const formData = getFormData();

  formData.append('type', type);
  formData.append('key', key);
  return axios.request({
    url: '/Home/Index/search',
    data: formData,
    method: 'post'
  });
}
// 获取首页数据
export function getIndexData() {
  return axios.request({
    url: '/Home/Index/indexye',
    method: 'get'
  });
}
// 获取案例页和设计师页的筛选条件
export function getFilterData() {
  return axios.request({
    url: '/Home/Index/type',
    method: 'get'
  });
}
// 根据筛选条件获取案例信息
export function getCasesData({
  hxid,
  fgid,
  mjid,
  dpid,
  sid,
  page,
  key
}) {
  const formData = getFormData();
  formData.append('hxid', hxid);
  formData.append('fgid', fgid);
  formData.append('mjid', mjid);
  formData.append('dpid', dpid);
  formData.append('sid', sid);
  formData.append('page', page);
  formData.append('key', key);

  return axios.request({
    url: '/Home/Index/example',
    // data:{
    //   hxid, fgid, mjid, dpid, sid, page, key
    // },
    data: formData,
    method: 'post'
  });
}
// 获取案例详情信息
export function getCaseDetail({
  id
}) {
  const formData = getFormData();
  formData.append('id', id);
  return axios.request({
    url: '/Home/Index/exampledetail',
    // data:{ id },
    data: formData,
    method: 'post'
  });
}
// 获取设计师列表
export function getDesigners({
  hxid,
  fgid,
  mjid,
  dpid,
  page,
  key
}) {
  const designerData = getFormData();
  designerData.append('hxid', hxid);
  designerData.append('fgid', fgid);
  designerData.append('mjid', mjid);
  designerData.append('dpid', dpid);
  designerData.append('page', page);
  designerData.append('key', key);

  return axios.request({
    url: '/Home/Index/designer',
    // data:{
    //   hxid, fgid, mjid, dpid, page, key
    // },
    data: designerData,
    method: 'post'
  });
}
// 获取设计师详情信息
export function getDesignerDetail({
  id
}) {
  const formData = getFormData();
  formData.append('id', id);
  return axios.request({
    url: '/Home/Index/designerdetail',
    // data: { id },
    data: formData,
    method: 'post'
  });
}
// 获取家装页的文章列表
export function jzarticle({
  page
}) {
  const formData = getFormData();
  formData.append('page', page);
  return axios.request({
    url: '/Home/Index/jzarticle',
    data: formData,
    method: 'post'
  });
}
// 获取文章内容
export function getArticles({
  id
}) {
  const formData = getFormData();
  formData.append('id', id);
  return axios.request({
    url: '/Home/Index/article',
    // data: { id },
    data: formData,
    method: 'post'
  });
}
// 获取文章详情
export function getArticalDetail({
  id
}) {
  const formData = getFormData();
  formData.append('id', id);
  return axios.request({
    url: '/Home/Index/articledetail',
    data: formData,
    method: 'post'
  });
}
// 提交报价数据
export function quote({
  name,
  mianji,
  phone
}) {
  const formData = getFormData();
  formData.append('name', name);
  formData.append('mianji', mianji);
  formData.append('phone', phone);
  return axios.request({
    url: '/Home/Index/baojia',
    data: formData,
    method: 'post'
  });
}
// 提交预约申请数据
export function apply({
  name,
  address,
  mainji,
  phone
}) {
  const formData = getFormData();
  formData.append('name', name);
  formData.append('address', address);
  formData.append('mianji', mainji);
  formData.append('phone', phone);
  return axios.request({
    url: '/Home/Index/yuyue',
    data: formData,
    method: 'post'
  });
}
// 提交售后申请
export function service({
  name,
  desc,
  phone
}) {
  const formData = getFormData();
  formData.append('name', name);
  formData.append('desc', desc);
  formData.append('phone', phone);
  return axios.request({
    url: '/Home/Index/shouhou',
    data: formData,
    method: 'post'
  });
}
export function getSeo() {
  return axios.request({
    url: '/Home/Index/seo',
    method: 'get'
  });
}
