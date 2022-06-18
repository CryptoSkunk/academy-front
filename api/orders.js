import request from '@/utils/request'
export default {
  //生成订单的接口
  createOrders(courseId) {
    return request({
      url: `/orderservice/order/createOrder/${courseId}`,
      method: 'get'
    })
  },
  //获取订单信息的接口
  getOrdersInfo(id) {
    return request({
      url: `/orderservice/order/getOrderInfo/${id}`,
      method: 'get'
    })
  },
  //生成二维码
  createNative(orderNo) {
    return request({
      url: `/orderservice/paylog/createNative/${orderNo}`,
      method: 'get'
    })
  },
  //查询支付后订单状态的方法
  queryPayStatus(orderNo) {
    return request({
      url: `/orderservice/paylog//queryPayStatus/${orderNo}`,
      method: 'get'
    })
  }
}