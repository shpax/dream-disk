const awilix = require('awilix');
const path = require('path');

module.exports = {
  modules: (serviceDir) => [
    // local modules
    path.join(serviceDir, '*/*/index.js'),

    // global modules
    path.join(serviceDir, '../common/*/*/index.js')
  ],
  options: {
    // change /path/to/ModuleName/index.js to moduleName
    formatName: (filename, descriptor) => {
      let name = filename;
      if (filename === 'index') {
        name = descriptor.path.match(/\/([^/]+)\/index\.js/)[1];
      }
      name = name.charAt(0).toLowerCase() + name.substr(1);
      return name;
    },
    registrationOptions: {
      lifetime: awilix.Lifetime.SINGLETON,
    },
  }
};