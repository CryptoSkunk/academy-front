import request from '@/utils/request'
export default {
    //查询热门名师和课程
  getListBanner() {
    return request({
      url: `/eduservice/indexfront/index`,
      method: 'get'
    })
  }
}