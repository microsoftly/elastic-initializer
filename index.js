const apm = require('elastic-apm-node');

apm.start({
  active: true,
  secretToken: process.env.APM_SECRET,
  serverUrl: process.env.APM_SERVER,
  environment: process.env.ENVIRONMENT,
  serviceName: process.env.SERVICE_NAME,
})