import hyRequest from '@/services/request/index';
// type=pend 未完成订单
// type=recent 最近订单
// type=all 全部订单
export function getOrderData(type = 'all') {
  return hyRequest.get({
    url: `/order/list?type=${type}`,
  });
}
