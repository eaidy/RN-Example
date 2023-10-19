import { NetworkRequests } from "@services";
import { ClientNetworkCredentials } from "@models"


export default class NetworkHandler extends NetworkRequests {

    private static instance: NetworkHandler | null = null;
  
    private constructor(networkCredentials: ClientNetworkCredentials) {
      super(networkCredentials)
    }
  
    public static shared(networkCredentials: ClientNetworkCredentials): NetworkHandler {
      if (!NetworkHandler.instance) {
        NetworkHandler.instance = new NetworkHandler(networkCredentials);
      }
      return NetworkHandler.instance;
    }

    public async networkAction(actionName: string, body?: object, headers?: object){

      if(this.clientNetworkCredentials){
        throw Error("Client's network credentials state is null!")
      }
        
      switch(actionName){

        case this.NHActions.LOGIN:
          return this.loginRequest(body, )
          break

        case this.NHActions.SIGN_UP:
          break

        default:
          throw Error("No Network Action recieved!")
      }
    }



  }
  

