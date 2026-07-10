---
title: Document Library
sidebar_position: 4
---

# DocVault — Document Library

The Library is the full controlled repository. The hero shows the current library name and how many controlled documents it holds.

## Filtering

The left rail carries three filter groups, all derived from the documents actually present:

- **Libraries** — All libraries, or one department.
- **Status** — Draft, Pending Manager Approval, Pending QA Review, Published, Rejected, Archived. Each shows a count.
- **Document type** — SOP, Policy, Work Instruction, Form, Template, Report, Contract, Other.

Choosing a library resets the status and type filters. The breadcrumb above the table always reflects where you are.

- - -

## List and grid views

Toggle between a dense list (Document, Type, Version, Status, Owner, Expiry, lock state) and a card grid. The padlock at the end of each list row shows whether the document is checked out, and by whom on hover.

<details>
<summary>📸 Screenshot: Document Library — list view</summary>

**Capture:** The full Library screen in list view, All libraries selected, showing at least eight rows across a mix of statuses. Make sure at least one row shows a red (checked-out) padlock.\
**Suggested callouts:** (1) Filter rail: Libraries / Status / Document type (2) Breadcrumb (3) List / grid toggle (4) Upload document button (5) Status badges (6) Check-out padlock\
**Recommended size:** 1600 × 1200 px

*Screenshot to be added.*

</details>

<details>
<summary>📸 Screenshot: Document Library — grid view</summary>

**Capture:** The same screen with the grid toggle selected, showing two rows of document cards.\
**Recommended size:** 1600 × 900 px

*Screenshot to be added.*

</details>

- - -

## Uploading a document

Select **Upload document**. The dialog collects everything the controlled-document schema requires:

| Field | Notes |
| --- | --- |
| Department library | Which provisioned library the file lands in |
| Document Title | Required. Becomes the SharePoint Title |
| File | The file to upload |
| Document Type | Drives the document-number prefix |
| Approval Status | Defaults to Draft |
| Confidentiality Level | Public, Internal, Confidential or Restricted |
| Effective Date / Expiry Date | Optional; the expiry date drives review reminders and expiry search |

The document number — `DEPT-TYPE-NNNN`, for example `QA-SOP-0007` — is generated automatically on save, the owner is set to you, and SharePoint takes over version numbering from that point. The new file opens in Office for the web so you can start editing straight away.

:::warning[Important]
Uploading requires Live Mode and a completed setup. In Dev Mode the dialog explains this and the Upload button stays disabled.
:::

<details>
<summary>📸 Screenshot: Upload document dialog</summary>

**Capture:** The Upload document modal, fully filled in, with the auto-numbering hint visible at the bottom.\
**Suggested callouts:** (1) Department library picker (2) Document Title (3) File chooser (4) Document Type (5) Approval Status / Confidentiality (6) Effective / Expiry dates (7) Auto-numbering hint\
**Recommended size:** 1200 × 1100 px (modal only, dimmed backdrop included)

*Screenshot to be added.*

</details>

- - -

_For questions or support, contact SharePoint Designs at [sharepointdesigns.com](https://www.sharepointdesigns.com)._
