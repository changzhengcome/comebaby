// 一些全局的config配置
const modeUrlObj = {
  // 生产环境
  'production': {
    baseURL: 'https://ihealth.inspurhealth.com',
    authBaseURL: ''
  },
  // 开发环境
  'development': {
    baseURL: 'https://dev.inspurhealth.com',
    authBaseURL: ''
  },
  // 测试环境
  'test': {
    baseURL: 'https://test.inspurhealth.com',
    authBaseURL: ''
  }
}
export default modeUrlObj[process.env.NODE_ENV]
