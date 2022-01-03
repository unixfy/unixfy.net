// create Page macro
const pageMacro = (() => {
  let browserPromise

  const pageMacro = async (t, callback) => {
    const { chromium } = require('playwright')

    if (!browserPromise) browserPromise = chromium.launch()

    const browser = await browserPromise
    const page = await browser.newPage()
    page.setDefaultTimeout(1000)
    try {
      await callback(t, page)
    } finally {
      await page.close()
    }
  }

  return pageMacro
})()

/**
 * wait
 * @param {string|number} time
 * @returns {Promise}
 */
const wait = (time) => new Promise((resolve) => setTimeout(resolve, time))

/**
 *
 * @param {string|number} port
 * @param {string|number} timeout
 * @returns {boolean}
 */
async function checkPort(port, timeout) {
  const http = require('http')
  const timestamp = Date.now()
  let portFound = false
  while (!portFound && timestamp + timeout > Date.now()) {
    const req = http.request({ port })
    req.on('response', () => (portFound = true))
    req.on('error', (err) => {})
    req.end()
    await wait(500)
  }
  return portFound
}

/**
 * creates baseUrl
 * @returns {string}
 */
function getBaseUrl() {
  const { port } = require('../../package.json').appConfig
  return `http://127.0.0.1:${port}/`
}

/**
 * returns absolute path from project-relative path
 * @param  {...string} path
 * @returns {string}
 */
function resolve(...path) {
  return require('path').resolve(__dirname, '..', '..', ...path)
}

function getPkgJson() {
  return require(resolve('package.json'))
}

module.exports = {
  baseUrl: getBaseUrl(),
  checkPort,
  wait,
  pageMacro,
  resolve,
  get pkgJson() {
    return getPkgJson()
  },
  get appConfig() {
    return getPkgJson().appConfig
  },
}
