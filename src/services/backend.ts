import {
    Contract,
    Customer,
    CustomerDevice,
    CustomerProvider,
    CustomerUser,
    PrimaryContact,
    SiteNote,
    Summary
} from "src/types/profile.ts";

const MOCK_CUSTOMER: Customer = {
    name: "Google Inc.",
    address: {
        addressLine1: "1 Innovation Square",
        addressLine2: "Featherstone",
        city: "Pontefract",
        postcode: "WF7 6NX"
    }
};
export const fetchCustomerDetails = async (_customerId?: number): Promise<Customer> => MOCK_CUSTOMER;

const MOCK_PRIMARY_CONTACT: PrimaryContact = {
    name: "John Smith",
    landline: "01234 567 890",
    mobile: "07123456789",
    email: "test@test.com"
};
export const fetchPrimaryContact = async (_customerId?: number): Promise<PrimaryContact> => MOCK_PRIMARY_CONTACT;

const MOCK_CONTRACT_DETAILS: Contract = {
    desktopSupport: 1,
    serverSupport: 2,
    switches: 3,
    phones: 4,
    mobile: 5
};

export const fetchContractDetails = async (_customerId?: number): Promise<Contract> => MOCK_CONTRACT_DETAILS;

const MOCK_CUSTOMER_SUMMARY: Summary = {
    domainRegistrar: "123 Reg",
    nameServers: "Cloudflare",
    email: "Office 365",
    fileStorage: "Sharepoint",
    securityProvider: "Eset"
};
export const fetchCustomerSummary = async (_customerId?: number): Promise<Summary> => MOCK_CUSTOMER_SUMMARY;

const MOCK_CUSTOMER_PROVIDERS: CustomerProvider[] = [
    {
        company: "Sage",
        service: "Accounts",
        number: "01133 684 254",
        email: "support@sage.co.uk",
    }
];
export const fetchCustomerProviders = async (_customerId?: number): Promise<CustomerProvider[]> => MOCK_CUSTOMER_PROVIDERS;

const MOCK_SITE_NOTES: SiteNote[] = [
    {
        note: "Server",
        description: "Server Location",
        detail: "Server is situated in meter room behind the kitchen",
    }
];
export const fetchCustomerSiteNotes = async (_customerId?: number): Promise<SiteNote[]> => MOCK_SITE_NOTES;


const MOCK_CUSTOMER_USERS: CustomerUser[] = [
    {
        name: "Katie Taylor",
        email: "katie@rli.co.uk",
        mobile: "07888 456987",
        landline: "01924 287456"
    }
];
export const fetchCustomerUsers = async (_customerId?: number): Promise<CustomerUser[]> => MOCK_CUSTOMER_USERS;

const MOCK_CUSTOMER_DEVICES: CustomerDevice[] = [
    {
        model: "ML350",
        ipAddress: "192.168.0.1",
        serial: "AB3568CX",
        type: "Server"
    }
];
export const fetchCustomerDevices = async (_customerId?: number): Promise<CustomerDevice[]> => MOCK_CUSTOMER_DEVICES;
