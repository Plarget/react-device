import compose from 'compose-function'
import { withStore } from './withStore'
import { withRouter } from './withRouter'
import { withQuery } from './withQuery'

export const withProviders = compose(withRouter, withStore, withQuery)
