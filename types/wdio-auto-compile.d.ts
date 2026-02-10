declare module '@wdio/types' {
  export namespace Options {
    interface Testrunner {
      /**
       * TypeScript auto-compile options used by the WDIO CLI.
       */
      autoCompileOpts?: {
        autoCompile?: boolean
        tsNodeOpts?: {
          transpileOnly?: boolean
          project?: string
        }
      }
    }
  }
}
