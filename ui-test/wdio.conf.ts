import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
  runner: 'local',
  framework: 'cucumber',

  specs: ['./features/**/*.feature'],

  cucumberOpts: {
    require: ['./features/step-definitions/**/*.ts'],
    timeout: 60000
  },

  injectGlobals: true,
};
