module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? process.env.BASE_URL
    : '/',

  pluginOptions: {
    i18n: {
      locale: 'fr',
      fallbackLocale: 'fr',
      localeDir: 'locales',
      enableInSFC: false,
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true
    },
    electronBuilder: {
      builderOptions: {
        appId: 'com.hakouabh.fireshop',
        productName: 'Fireshop',
        releaseInfo: {
          releaseNotesFile: 'src/releaseNotes.md'
        },
        publish: [
          {
            provider: 'github',
            owner: 'hakouabh',
            repo: 'fireshop-landing',
            token: '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'
          }
        ],
        directories: {
          output: 'dist'
        },
        mac: {
          target: [
            'dmg'
          ],
          icon: './public/favicon.png',
          category: 'public.app-category.business'
        },
        win: {
          icon: './public/favicon.png',
          target: [
            {
              target: 'nsis',
              arch: [
                'x64',
                'ia32'
              ]
            }
          ]
        },
        nsis: {
          allowToChangeInstallationDirectory: true,
          shortcutName: 'Fireshop',
          oneClick: false,
          perMachine: true,
          menuCategory: true,
          artifactName: 'FireshopSetup.exe'
        }
      }
    }
  }
}
