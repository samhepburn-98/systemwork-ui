export type Address = {
    addressLine1: string;
    addressLine2: string;
    city: string;
    postcode: string;
}

export type PrimaryContact = {
    name: string;
    landline: string;
    mobile: string;
    email: string;
}

export type Contract = {
    desktopSupport: number;
    serverSupport: number;
    switches: number;
    phones: number;
    mobile: number;
};

export type Summary = {
    domainRegistrar: string;
    nameServers: string;
    email: string;
    fileStorage: string;
    securityProvider: string;
}
