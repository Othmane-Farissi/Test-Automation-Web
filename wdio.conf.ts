import { config as dotenvConfig } from 'dotenv'
dotenvConfig()

export const config: WebdriverIO.Config = {
  runner: 'local',

  specs: ['/home/ofarissi/Desktop/Test-Automation-Web/ui-test/features/*.feature'],

  framework: 'cucumber',

  services: ['devtools'],

  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        debuggerAddress: 'localhost:41939',
      }
    }
  ],

  reporters: ['spec'],

  cucumberOpts: {
    require: ['/home/ofarissi/Desktop/Test-Automation-Web/ui-test/steps/*.ts'],
    requireModule: ['ts-node/register'],
    timeout: 60000
  },

  before: async () => {
    await browser.setWindowSize(1440, 900)
  }
}
