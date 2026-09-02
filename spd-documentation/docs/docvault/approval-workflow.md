---
title: The Approval Workflow
sidebar_position: 7
---

# DocVault — The Approval Workflow

Every controlled document moves through the same two-stage sequential approval. Routing is driven entirely by a lookup table — there is no per-document configuration.

## The six statuses

| Status | Meaning | Who acts next |
| --- | --- | --- |
| Draft | Being authored or revised | The owner |
| Pending Manager Approval | Stage 1 — awaiting the department manager | The manager for that department |
| Pending QA Review | Stage 2 — awaiting the QA reviewer | The QA reviewer for that department |
| Published | Signed off and effective | Nobody — the document is current |
| Rejected | Sent back for changes | The owner |
| Archived | Superseded or withdrawn | Nobody |

- - -

## Moving a document through the stages

All approval actions happen on the document's detail page. The buttons change with the status:

| Current status | Buttons available | Result |
| --- | --- | --- |
| Draft or Rejected | Submit for Manager Approval | Status → Pending Manager Approval; the department's manager becomes the current approver |
| Pending Manager Approval | Approve → QA Review / Reject | Approve routes to the QA reviewer; Reject returns the document to Rejected and clears the approver |
| Pending QA Review | Approve & Publish / Reject | Approve stamps the approver and publishes; Reject returns it to Rejected |

Each time a document lands on someone's desk, DocVault sends them a Microsoft Teams message with the document name, number, department and a direct link. This is best-effort — if the Teams message cannot be sent, the status change still succeeds.

- - -

## Who approves what

Routing comes from a SharePoint list called **DVault Department Approvers**, created for you during setup. It holds one row per department:

| Column | Type | Purpose |
| --- | --- | --- |
| Department (Title) | Text | Must match the department value on the library exactly |
| Manager | Person | Approves stage 1 for this department |
| QAReviewer | Person | Approves stage 2. May be the same person across every row |

:::warning[Important]
If a department has no manager or QA reviewer configured, the submit or approve action fails with a message naming the department. Fill in the list before going live.
:::

- - -

## The Approval Pipeline board

The Pipeline screen is the document controller's overview: four columns — **In Draft**, **Pending Manager Approval**, **Pending QA Review** and **Published** — with a card per document showing its type, number, priority and owner. The counters at the top of the hero show the size of each queue. Select any card to open the document and act on it.

<details>
<summary>📸 Screenshot: Approval Pipeline board</summary>

**Capture:** The full Pipeline screen with cards in all four columns and the four hero counters visible.\
**Suggested callouts:** (1) Hero counters (2) Four stage columns with counts (3) Document card with priority bars (4) Bottleneck flag on the oldest manager-queue card\
**Recommended size:** 1600 × 1200 px

*Screenshot to be added.*

</details>

- - -

_For questions or support, contact SharePoint Designs at [sharepointdesigns.com](https://www.sharepointdesigns.com)._
