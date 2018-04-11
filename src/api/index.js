const originAddress="https://www.vue-js.com/api/v1/";
export default {
getHome(page,tab,limit){
    return `${originAddress}/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=true`;
  }
}
