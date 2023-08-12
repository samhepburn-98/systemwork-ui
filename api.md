# API Documentation

## Base URL

The base URL for all API endpoints is: `TBC`

## Authentication

`TBC`

---

## Endpoints

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
  "address": {
      "addressLine1": "1 Innovation Square",
      "addressLine2": "Featherstone",
      "city": "Pontefract",
      "postcode": "WF7 6NX"
  }
}
```

### Get Customer Primary Contact

Get information about the primary contact of a customer.

- **URL:** `/customers/{customerId}/primary-contact`
- **Method:** `GET`
- **Parameters:**
  - `customerId` (number, required): The ID of the customer.

**Response:**

```json
{
    "name": "John Smith",
    "landline": "01234 567 890",
    "mobile": "07123456789",
    "email": "test@test.com"
}
```

### Get Customer Contract Details

Get information about the contract of a customer.

- **URL:** `/customers/{customerId}/contract`
- **Method:** `GET`
- **Parameters:**
  - `customerId` (number, required): The ID of the customer.

**Response:**

```json
{
  "desktopSupport": 1,
  "serverSupport": 2,
  "switches": 3,
  "phones": 4,
  "mobile": 5
}
```

### Get Customer Summary

Get information about the summary details of a customer.

- **URL:** `/customers/{customerId}/summary`
- **Method:** `GET`
- **Parameters:**
  - `customerId` (number, required): The ID of the customer.

**Response:**

```json
{
  "domainRegistrar": "123 Reg",
  "nameServers": "Cloudflare",
  "email": "Office 365",
  "fileStorage": "Sharepoint",
  "securityProvider": "Eset"
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
    "landline": "01924 287456"  },
  {
    "userId": 2,
    "name": "Katie Taylor",
    "email": "katie@rli.co.uk",
    "mobile": "07888 456987",
    "landline": "01924 287456"  }
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
