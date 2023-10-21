import { NetworkRequests } from "@services";
import { ClientNetworkCredentials, ILogin, ISignUpPostBody } from "@models"


export class NetworkHandler extends NetworkRequests {

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

    public async networkAction(actionName: string, body: any, headers?: object){

      if(this.clientNetworkCredentials){
        throw Error("Client's network credentials state is null!")
      }
        
      switch(actionName){

        case this.NHActions.LOGIN: {
          const loginBody: ILogin = body
          const loginResponse = await this.loginRequest(loginBody)
          return loginResponse
        }

        case this.NHActions.SIGN_UP: {
          const signUpBody: ISignUpPostBody = body
          const signUpResponse = await this.signUpRequest(signUpBody)
          return signUpResponse
        }

        default: {
          throw Error("No Network Action recieved!")
        }
      }
    }

    public setNetworkState(networkCredentials: ClientNetworkCredentials){
      this.clientNetworkCredentials = networkCredentials
    }

    public neutralizeNetworkState(){
      this.clientNetworkCredentials = null
    }
  }
  

