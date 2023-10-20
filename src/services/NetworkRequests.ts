import { ILogin, IUserDbModel, ISignUpPostBody, ClientNetworkCredentials } from '@models';
import { NHActions } from '@constants';
import axios from 'axios';

export class NetworkRequests {

    protected clientNetworkCredentials: ClientNetworkCredentials | null
    protected NHActions = NHActions
    protected AUTHORIZED_HEADERS: object = {}

    constructor(networkCredentials: ClientNetworkCredentials){
        this.clientNetworkCredentials = networkCredentials
    }

    private prepareApiUrl(action: string){
        if(this.clientNetworkCredentials?.baseApiUrl.endsWith('/')){
            return this.clientNetworkCredentials?.baseApiUrl + action
        }

        return this.clientNetworkCredentials?.baseApiUrl + '/' + action
    }

    protected loginRequest = async (loginInfo: ILogin): Promise<IUserDbModel | null> => {

        const apiUrl = this.prepareApiUrl(this.NHActions.LOGIN)

        try {
            const response = await axios.post(apiUrl, loginInfo, { headers: {
                'Content-Type': 'application/json'
            }});
            const data: IUserDbModel = response.data;
            console.log(response.data)
            return data;
    
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    protected signUpRequest = async (signUpInfo: ISignUpPostBody): Promise<IUserDbModel | null> => {

        const apiUrl = this.prepareApiUrl(this.NHActions.SIGN_UP)

        try {
            const response = await axios.post(apiUrl, signUpInfo, { headers: {
                'Content-Type': 'application/json'
            }});
    
            const data: IUserDbModel = response.data;
            return response.data;
    
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    protected async getBooksExample(bookId: number){

        const apiUrl = this.prepareApiUrl(this.NHActions.SIGN_UP)

        try {
            const response = await axios.post(apiUrl, bookId, { headers: this.AUTHORIZED_HEADERS });
    
            const data: IUserDbModel = response.data;
            return response.data;
    
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}