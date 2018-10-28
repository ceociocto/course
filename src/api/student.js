import request from '@/utils/request'

export function getStudentList() {
  // return request({
  //   url: '/students',
  //   method: 'get'
  // })
  let mockArray = []
  for (let i = 0; i < 20; i++) {
    mockArray.push({
      username: '刘二',
      account: Math.ceil(Math.random()*1000000),
      status: Math.ceil(Math.random()*3)
    })
    
  }
  return mockArray
}
