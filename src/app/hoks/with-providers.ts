import compose from 'compose-function'

import { withThemeProvider } from 'app/hoks/with-theme-provider'

export const withProviders = compose(withThemeProvider)
