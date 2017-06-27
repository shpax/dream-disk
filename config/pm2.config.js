
const service = (folder, name) => ({
  "script": `services/${folder}/index.js`,
  "name": `${name || folder}-service`,
  "watch": [`config`, `services/${folder}`]
});

module.exports = {
  apps: [
    service('web'),
    service('rest', 'REST'),
  ]
};