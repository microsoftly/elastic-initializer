const apm = require('elastic-apm-node');

if (!apm.isStarted()) {
  console.log("ELASTIC-INITIALIZER: starting apm")
  apm.start({
    active: true,
    secretToken: process.env.APM_SECRET,
    serverUrl: process.env.APM_SERVER,
    environment: process.env.ENVIRONMENT,
    serviceName: process.env.SERVICE_NAME,
  })
} else {
  console.log("ELASTIC-INITIALIZER: apm already started")
}
