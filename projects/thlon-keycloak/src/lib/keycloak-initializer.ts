import {KeycloakConfig,
        KeycloakService} from 'keycloak-angular';

export function keycloakServiceInitializer(keycloakConfig: KeycloakConfig,
                                           keycloakService: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await keycloakService.init({
          config: keycloakConfig,
          initOptions: {
//            onLoad: 'login-required',
              onLoad: 'check-sso',
              checkLoginIframe: false
          },
          bearerExcludedUrls: ['/assets']
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
}
