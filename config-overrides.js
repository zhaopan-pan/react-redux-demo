const { injectBabelPlugin } = require('react-app-rewired');
//对 create-react-app 进行自定义配置的社区解决方案
module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
    return config;
  };