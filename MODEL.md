# Update Documentation

## Table of Contents

- [Overview](#overview)
- [update.proto](#update)
  - [Messages](#messages)
    - [Subscribe](#subscribe)
    - [Subscription](#subscription)
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

## Version Information

This documentation corresponds to the Protocol Buffer definitions in `update.proto`. The proto file(s) use `proto3` syntax. When referencing this documentation, ensure that the version of the proto files matches the version of the generated code and API implementations you are using.

## Support

For additional information and support:
- See `README.md` for project setup, installation, and usage instructions
- Refer to the Protocol Buffer definitions in `update.proto` for the authoritative source of truth
- Check the imported utility libraries for details on related types:
  - `sologenic/com-fs-utils-lib/models/metadata/metadata.proto`
