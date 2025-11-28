# Update Documentation

## Table of Contents

- [Overview](#overview)
- [update.proto](#update)
  - [Messages](#messages)
    - [Subscribe](#subscribe)
    - [Subscription](#subscription)
  - [Enums](#enums)
    - [Action](#action)
    - [Method](#method)
- [Version Information](#version-information)
- [Support](#support)

## Overview

The Update provides a comprehensive data structure for managing update within the system. This model supports identification: provides unique identifiers for update, metadata and audit: includes metadata and audit trails for tracking changes, organizational context: links items to organizations via organizationid, and more. 

Key features of the update model include:
- **Identification**: Provides unique identifiers for update
- **Metadata and Audit**: Includes metadata and audit trails for tracking changes
- **Organizational Context**: Links items to organizations via OrganizationID

## update.proto

### Package Information

- **Package Name**: `update`
- **Go Package Path**: `github.com/sologenic/com-fs-update-model;update`

### Overview

The `update.proto` file defines the core update model for update management. It provides message types for representing update data and operations. The file integrates with external utility libraries: `metadata.proto`.

### Messages

#### Subscribe {#subscribe}

The `Subscribe` message provides subscribe data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Action | `Action` | Required | Action field |
| Subscription | `Subscription` | Required | Subscription field |

**Use Cases:**
- Creating new subscribe records
- Retrieving subscribe information
- Updating subscribe data

**Important Notes:**
- This message provides the subscribe representation

#### Subscription {#subscription}

The `Subscription` message provides subscription data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Method | `Method` | Required | Method field |
| ID | `string` | Required | Unique identifier for the  |
| Network | `metadata.Network` | Required | Metadata information including network and version details |
| OrganizationID | `string` | Required | UUID of the organization this item belongs to |
| Content | `string` | Optional | Content value |

**Use Cases:**
- Creating new subscription records
- Retrieving subscription information
- Updating subscription data
- Associating items with specific organizations

**Important Notes:**
- The `ID` field must match a valid identifier format
- The `OrganizationID` must be a valid UUID format

### Enums

#### Action {#action}

The `Action` enum defines the possible states or types for update, allowing for classification and state management.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| SUBSCRIBE | 0 | Default/unused value (protobuf convention) |
| UNSUBSCRIBE | 1 | Unsubscribe state or type |
| CLOSE | 2 | Close state or type |
| RESPONSE | 3 | Response state or type |
| PING | 4 | Ping state or type |

**Use Cases:**
- Setting action for items
- Filtering items by action in queries
- Enforcing business logic based on action

**Important Notes:**
- Values with `NOT_USED` prefix or number 0 follow protobuf conventions for default enum values and should not be actively used
- Only valid action values should be used in production code
- Action changes should be tracked in audit trails for compliance purposes

#### Method {#method}

The `Method` enum defines the possible states or types for update, allowing for classification and state management.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| NOT_USED | 0 | Default/unused value (protobuf convention) |
| NOTIFICATION | 1 | Notification state or type |
| NEW_KYC_STUCK | 2 | New Kyc Stuck state or type |
| AED | 3 | Aed state or type |
| ALPACA_FEED | 4 | Alpaca Feed state or type |
| SIGNING | 5 | Signing state or type |

**Use Cases:**
- Setting method for items
- Filtering items by method in queries
- Enforcing business logic based on method

**Important Notes:**
- Values with `NOT_USED` prefix or number 0 follow protobuf conventions for default enum values and should not be actively used
- Only valid method values should be used in production code
- Method changes should be tracked in audit trails for compliance purposes

## Version Information

This documentation corresponds to the Protocol Buffer definitions in `update.proto`. The proto file(s) use `proto3` syntax. When referencing this documentation, ensure that the version of the proto files matches the version of the generated code and API implementations you are using.

## Support

For additional information and support:
- See `README.md` for project setup, installation, and usage instructions
- Refer to the Protocol Buffer definitions in `update.proto` for the authoritative source of truth
- Check the imported utility libraries for details on related types:
  - `sologenic/com-fs-utils-lib/models/metadata/metadata.proto`
