import hyRequest from '@/services/request';
export function getDetail(houseId) {
  return hyRequest.get({
    url: 'detail/infos',
    params: {
      houseId,
    },
  });
}
