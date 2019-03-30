import {KeycloakService,
        KeycloakEventType} from 'keycloak-angular';
import {InjectableRxStompConfig,
        RxStompService} from '@stomp/ng2-stompjs';

export function keycloakStompServiceInitializer(keycloakService: KeycloakService,
                                                injectableRxStompConfig: InjectableRxStompConfig,
                                                rxStompService: RxStompService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        keycloakService.keycloakEvents$.subscribe(event => {

          switch (event.type) {
            case KeycloakEventType.OnAuthSuccess:
              keycloakService.getToken().then (
                (token: string) => {
                  injectableRxStompConfig.connectHeaders = {"Authorization": "Bearer " + token};
                  rxStompService.configure(injectableRxStompConfig);
                  rxStompService.activate();
                }
              )
              break;
            default:
              break;
          }
        });

        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
}
