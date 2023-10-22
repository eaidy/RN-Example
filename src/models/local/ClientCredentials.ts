export type ClientCredentials = {
    name: string;
    phone: string;
    email: string;
    institution: string;
    role: string;
    institutionId: string;
} | undefined | null

export type ClientNetworkCredentials = {
    token: string | null;
    deviceId: string;
    baseApiUrl: string;
} | undefined | null