// 一些全局的config配置
const modeUrlObj = {
  // 生产环境
  'production': {
    baseURL: 'https://ihealth.inspurhealth.com',
    authBaseURL: 'https://ihealth.inspurhealth.com'
  },
  // 开发环境
  'development': {
    baseURL: 'https://dev.inspurhealth.com',
    authBaseURL: 'https://dev.inspurhealth.com'
  },
  // 测试环境
  'test': {
    baseURL: 'https://test.inspurhealth.com',
    authBaseURL: 'https://dev.inspurhealth.com'
  }
}
export default modeUrlObj[process.env.NODE_ENV]
