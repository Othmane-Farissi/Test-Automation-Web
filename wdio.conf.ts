import { config as dotenvConfig } from 'dotenv'
import { browser } from '@wdio/globals'
dotenvConfig({ path: 'ui-test/.env' })

export const config: WebdriverIO.Config = {
  runner: 'local',
  
  specs: [
    './ui-test/features/signup.feature',
    './ui-test/features/login.feature'
  ],
  maxInstances: 1,
  
  framework: 'cucumber',

  baseUrl: process.env.BASE_URL,
  
  capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: [
        '--no-sandbox',
        '--disable-dev-shm-usage',
        '--window-size=1440,900'
      ]
    }
  }],
  
  reporters: ['spec'],
  
  cucumberOpts: {
    require: ['/home/ofarissi/Desktop/Test-Automation-Web/ui-test/steps/*.ts'],
    requireModule: ['ts-node/register/transpile-only'],
    timeout: 60000
  },
  
  before: async () => {
    await browser.setWindowSize(1440, 900)
  }
}
