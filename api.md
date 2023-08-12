# API Documentation

## Base URL

The base URL for all API endpoints is: `TBC`

## Authentication

`TBC`

---

## Endpoints

### Get All Customers

Get information about all of our customer.

- **URL:** `/customers`
- **Method:** `GET`

**Response:**

```json
[
    {
        "customerId": 1,
        "name": "Google Inc.",
        // Address
        "address": {
            "addressLine1": "1 Innovation Square",
            "addressLine2": "Featherstone",
            "city": "Pontefract",
            "postcode": "WF7 6NX"
        },
        // Primary Contact
        "primary_contact_name": "John Smith",
        "primary_contact_landline": "01234 567 890",
        "primary_contact_mobile": "07123456789",
        "primary_contact_email": "test@test.com",
        //  Summary
        "domainRegistrar": "123 Reg",
        "nameServers": "Cloudflare",
        "email": "Office 365",
        "fileStorage": "Sharepoint",
        "securityProvider": "Eset",
        // Contract
        "desktopSupport": 1,
        "serverSupport": 2,
        "switches": 3,
        "phones": 4,
        "mobile": 5
    },
    {
        "customerId": 2,
        "name": "Google Inc.",
        // Address
        "address": {
            "addressLine1": "1 Innovation Square",
            "addressLine2": "Featherstone",
            "city": "Pontefract",
            "postcode": "WF7 6NX"
        },
        // Primary Contact
        "primary_contact_name": "John Smith",
        "primary_contact_landline": "01234 567 890",
        "primary_contact_mobile": "07123456789",
        "primary_contact_email": "test@test.com",
        //  Summary
        "domainRegistrar": "123 Reg",
        "nameServers": "Cloudflare",
        "email": "Office 365",
        "fileStorage": "Sharepoint",
        "securityProvider": "Eset",
        // Contract
        "desktopSupport": 1,
        "serverSupport": 2,
        "switches": 3,
        "phones": 4,
        "mobile": 5
    }
]
```

### Get Customer Details

Get information about a customer.

- **URL:** `/customers/{customerId}`
- **Method:** `GET`
- **Parameters:**
    - `customerId` (number, required): The ID of the customer.

**Response:**

```json
{
    "customerId": 1,
    "name": "Google Inc.",
    // Address
    "address": {
        "addressLine1": "1 Innovation Square",
        "addressLine2": "Featherstone",
        "city": "Pontefract",
        "postcode": "WF7 6NX"
    },
    // Primary Contact
    "primary_contact_name": "John Smith",
    "primary_contact_landline": "01234 567 890",
    "primary_contact_mobile": "07123456789",
    "primary_contact_email": "test@test.com",
    //  Summary
    "domainRegistrar": "123 Reg",
    "nameServers": "Cloudflare",
    "email": "Office 365",
    "fileStorage": "Sharepoint",
    "securityProvider": "Eset",
    // Contract
    "desktopSupport": 1,
    "serverSupport": 2,
    "switches": 3,
    "phones": 4,
    "mobile": 5
}
```

### Get Customer Providers

Get information about the providers of a customer.

- **URL:** `/customers/{customerId}/providers`
- **Method:** `GET`
- **Parameters:**
    - `customerId` (number, required): The ID of the customer.

**Response:**

```json
[
    {
        "providerId": 1,
        "company": "Sage",
        "service": "Accounts",
        "number": "01133 684 254",
        "email": "support@sage.co.uk"
    },
    {
        "providerId": 2,
        "company": "Sage",
        "service": "Accounts",
        "number": "01133 684 254",
        "email": "support@sage.co.uk"
    }
]
```

### Get Customer Site Notes

Get information about the site notes of a customer.

- **URL:** `/customers/{customerId}/site-notes`
- **Method:** `GET`
- **Parameters:**
    - `customerId` (number, required): The ID of the customer.

**Response:**

```json
[
    {
        "noteId": 1,
        "note": "Server",
        "description": "Server Location",
        "detail": "Server is situated in meter room behind the kitchen"
    },
    {
        "noteId": 2,
        "note": "Server",
        "description": "Server Location",
        "detail": "Server is situated in meter room behind the kitchen"
    }
]
```

### Get Customer Users

Get information about the users of a customer.

- **URL:** `/customers/{customerId}/users`
- **Method:** `GET`
- **Parameters:**
    - `customerId` (number, required): The ID of the customer.

**Response:**

```json
[
    {
        "userId": 1,
        "name": "Katie Taylor",
        "email": "katie@rli.co.uk",
        "mobile": "07888 456987",
        "landline": "01924 287456"
    },
    {
        "userId": 2,
        "name": "Katie Taylor",
        "email": "katie@rli.co.uk",
        "mobile": "07888 456987",
        "landline": "01924 287456"
    }
]
```

### Get Customer Site Notes

Get information about the devices of a customer.

- **URL:** `/customers/{customerId}/devices`
- **Method:** `GET`
- **Parameters:**
    - `customerId` (number, required): The ID of the customer.

**Response:**

```json
[
    {
        "deviceId": 1,
        "model": "ML350",
        "ipAddress": "192.168.0.1",
        "serial": "AB3568CX",
        "type": "Server"
    },
    {
        "deviceId": 2,
        "model": "ML350",
        "ipAddress": "192.168.0.1",
        "serial": "AB3568CX",
        "type": "Server"
    }
]
```
