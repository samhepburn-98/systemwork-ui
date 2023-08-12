export type Customer = {
    name: string;
    address: Address;
}

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

export type CustomerProvider = {
    company: string;
    service: string;
    number: string;
    email: string;
}

export type SiteNote = {
    note: string;
    description: string;
    detail: string;
}

export type CustomerUser = {
    name: string;
    email: string;
    mobile: string;
    landline: string;
}

export type CustomerDevice = {
    type: string;
    serial: string;
    model: string;
    ipAddress: string;
}
