---
title: Search & Discovery
sidebar_position: 5
---

# DocVault — Search & Discovery

The Search screen answers three different kinds of question, and it picks the right engine for each.

## Copilot grounded answers

With the **Copilot AI** toggle on, your question goes to the Microsoft 365 Copilot Retrieval API, which searches the semantic index of the documents in this site — the words inside the files, not just their titles. DocVault composes a short answer from the strongest passages, streams it into view, then lists each source document with a relevance percentage and a two-line extract. Every source respects your own permissions.

:::info[Required]
Copilot answers require the `Files.Read.All` and `Sites.Read.All` Microsoft Graph permissions to be approved in the SharePoint admin centre (API access), and a Microsoft 365 Copilot licence for the signed-in user. Without them the screen explains what is missing.
:::

<details>
<summary>📸 Screenshot: Copilot grounded answer with cited sources</summary>

**Capture:** Search screen after asking a content question such as "what is our document control policy?". Wait for the answer to finish streaming so the citation list is fully rendered.\
**Suggested callouts:** (1) Question in the search bar (2) Copilot AI toggle (on) (3) Streamed grounded answer (4) "Grounded in N sources" header (5) Numbered source with % match (6) Extract snippet\
**Recommended size:** 1600 × 1100 px

*Screenshot to be added.*

</details>

- - -

## Full-text content search

Turn Copilot AI off and the same box runs a SharePoint full-text search across document bodies. Results merge content matches (with highlighted snippets) and metadata matches into one list, de-duplicated. If you prefer them separated, switch on **Group by source** in the left panel.

:::tip
Newly uploaded files can take a few minutes to appear — the SharePoint index has to catch up.
:::

- - -

## Expiry and review questions

Questions about dates are answered from the metadata, not from document text, because no content index can reason about an expiry column. DocVault recognises phrasings such as:

- documents expiring this quarter
- what has already expired
- due for review in the next 30 days
- contracts expiring next year

The answer names how many documents fall in the window, lists the first few with their expiry dates and statuses, and offers a clickable chip for each.

<details>
<summary>📸 Screenshot: Expiry & review answer</summary>

**Capture:** Search screen after asking "documents expiring this quarter", fully streamed, with the citation chips showing document numbers and expiry dates.\
**Suggested callouts:** (1) Expiry & review answer header (2) Streamed metadata answer (3) Clickable expiry chips\
**Recommended size:** 1600 × 900 px

*Screenshot to be added.*

</details>

- - -

## Advanced metadata filters

The left panel narrows any result set by Document type, Department, Status and Classification. Each dropdown lists only values that exist in the data. Selected filters show a live match count, and **Clear** resets them all.

<details>
<summary>📸 Screenshot: Advanced metadata panel</summary>

**Capture:** Left-hand Advanced metadata panel with one dropdown open and two facets already applied, so the "N documents match these filters" line and the Clear link are both visible.\
**Recommended size:** 700 × 900 px (panel crop)

*Screenshot to be added.*

</details>

- - -

_For questions or support, contact SharePoint Designs at [sharepointdesigns.com](https://www.sharepointdesigns.com)._
