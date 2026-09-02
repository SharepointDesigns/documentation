---
title: Overview
sidebar_position: 1
---

# DocVault — Overview

**Product:** DocVault DMS by SharePoint Designs\
**Package version:** 1.0.74\
**Audience:** End users, document owners, approvers, administrators\
**Compatible with:** SharePoint Online (Microsoft 365)

- - -

## What is DocVault DMS?

DocVault DMS turns a SharePoint site into an ISO 9001-aligned controlled document management system. Every document carries governed metadata, moves through a two-stage approval workflow, keeps a full version and audit history, and can be found either by metadata facets or by asking a question in natural language.

The product is delivered as nine SharePoint Framework (SPFx) application customizer extensions — one per screen. Each renders edge-to-edge in the page's Top placeholder, so every DocVault screen fills the full width of the browser.

- - -

## The nine screens

| Screen | Page | What it is for |
| --- | --- | --- |
| Home | `DocVault-Home.aspx` | Landing dashboard: greeting, search, your open work, department libraries, recent activity |
| My Workspace | `DocVault-Workspace.aspx` | Your personal queue: items needing attention, assigned reviews, drafts, recently viewed |
| Document Library | `DocVault-Library.aspx` | Browse and filter every controlled document; upload new documents; check documents out |
| Search & Discovery | `DocVault-Search.aspx` | Copilot grounded answers, full-text content search, advanced metadata filters |
| Document Detail | `DocVault-Document.aspx` | One document: metadata, versions, workflow, comments, audit trail, permissions |
| Approval Pipeline | `DocVault-Pipeline.aspx` | Kanban board of every document by approval stage — the document controller's view |
| Templates & Libraries | `DocVault-Templates.aspx` | Approved company templates; create a new document from a template |
| Administration | `DocVault-Admin.aspx` | Data-source mode, branding, status chart, roles, retention rules, audit log |
| Setup Wizard | `DocVault-Setup.aspx` | One-time provisioning of the document backend (administrators only) |

- - -

## Two data modes

DocVault installs in **Dev Mode** and shows a built-in sample set of 24 documents so you can explore every screen before touching real data. A **DEV MODE** badge appears in the top navigation while this is the case. Once an administrator has run the Setup Wizard, switching to **Live Mode** in Administration makes every screen read your real SharePoint libraries.

:::note
Nothing you do in Dev Mode is written to SharePoint. Check-outs, comments and status changes are simulated in the browser only.
:::

<details>
<summary>📸 Screenshot: The DEV MODE badge in the top navigation</summary>

**Capture:** Top navigation bar of any DocVault page while in Dev Mode. Crop to the navigation strip only.\
**Suggested callouts:** (1) DocVault logo (2) Screen tabs (3) DEV MODE badge (4) Advanced search / New document buttons\
**Recommended size:** 1600 × 200 px (banner crop)

*Screenshot to be added.*

</details>

- - -

_For questions or support, contact SharePoint Designs at [sharepointdesigns.com](https://www.sharepointdesigns.com)._
