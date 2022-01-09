import OktaSignIn from '@okta/okta-signin-widget'
import { OktaAuth } from '@okta/okta-auth-js'
import { FRONTEND_BASE_URL } from '@/config'

const oktaSignIn = new OktaSignIn({
  baseUrl: 'https://dev-80022801.okta.com',
  clientId: '0oa3igwin4hVN0Wlp5d7',
  redirectUri: FRONTEND_BASE_URL + '/login/callback',
  authParams: {
    pkce: true,
    issuer: 'https://dev-80022801.okta.com/oauth2/default',
    display: 'page',
    scopes: ['openid', 'profile', 'email']
  }
})

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-80022801.okta.com/oauth2/default',
  clientId: '0oa3igwin4hVN0Wlp5d7',
  redirectUri: window.location.origin + '/login/callback',
  scopes: ['openid', 'profile', 'email']
})

export { oktaAuth, oktaSignIn }
