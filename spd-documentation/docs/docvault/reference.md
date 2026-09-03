---
title: Reference
sidebar_position: 10
---

# DocVault — Reference

## Metadata schema

DocVault adds nine custom columns to every department library. Title is the built-in SharePoint field and the version is SharePoint's own, so it increments automatically on every check-in.

| Display name | Internal name | Type |
| --- | --- | --- |
| Document Title | `Title` | Text (built-in) |
| Document Number | `DVaultDocNumber` | Text — generated |
| Document Type | `DVaultDocType` | Choice, required |
| Department | `DVaultDepartment` | Choice, required, accepts custom values |
| Document Owner | `DVaultOwner` | Person |
| Approval Status | `DVaultApprovalStatus` | Choice, required, defaults to Draft |
| Approved By | `DVaultApprovedBy` | Person |
| Current Approver | `DVaultCurrentApprover` | Person — cleared on Published / Rejected / Archived |
| Effective Date | `DVaultEffectiveDate` | Date |
| Expiry Date | `DVaultExpiryDate` | Date — drives review reminders and expiry search |
| Confidentiality Level | `DVaultConfidentiality` | Choice, required, defaults to Internal |

- - -

## Document numbering

Numbers follow `[DEPARTMENT]-[TYPE]-[NNNN]`. The department code is set in the Setup Wizard; the type code is fixed:

| Document type | Code |
| --- | --- |
| Standard Operating Procedure | SOP |
| Policy | POL |
| Work Instruction | WI |
| Form | FORM |
| Template | TMPL |
| Report | REP |
| Contract | CON |
| Other | OTH |

- - -

## Troubleshooting

| Symptom | Cause and fix |
| --- | --- |
| DEV MODE badge will not go away | Setup has not been completed, or the mode is still Dev. Admin → Data source & setup → toggle to Live, then reload. |
| Copilot answer shows a permissions error | `Files.Read.All` and `Sites.Read.All` are not approved in SharePoint admin centre → API access, or the user has no Copilot licence. |
| Approval fails: "No manager is configured" | Add a row for that department to the DVault Department Approvers list, with both Manager and QAReviewer filled in. |
| Approver did not receive a Teams message | `Chat.ReadWrite` is not approved. The status change still succeeded — the notification is best-effort. |
| A newly uploaded file is missing from content search | The SharePoint index takes a few minutes. Metadata search finds it immediately. |
| Upload / template buttons are disabled | Live Mode with completed setup is required. |
| "Could not save branding" | Only site administrators can save branding. |
| The licence key is rejected | Keys are tenant-bound. Confirm the Tenant ID you sent the vendor matches the one on the activation screen, and that the key was pasted in full. |

- - -

## Getting help

«Support e-mail» · «Support portal URL» · «Hours of coverage and target response time»

- - -

_For questions or support, contact SharePoint Designs at [sharepointdesigns.com](https://www.sharepointdesigns.com)._
