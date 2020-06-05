import request from '@/utils/request'
export  const  getUserInfo=()=>{
  return request({
    url: '/userinfo',
    method: 'get'
  })
}
