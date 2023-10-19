export interface ClientCredentials {
    name: string;
    phone: string;
    email: string;
    institution: string;
    role: string;
    institutionId: string;
}

export interface ClientNetworkCredentials {
    token: string | null;
    deviceId: string;
    baseApiUrl: string;
}
