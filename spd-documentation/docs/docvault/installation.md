---
title: Installation & Setup
sidebar_position: 9
---

# DocVault — Installation & Setup

This page is for administrators provisioning DocVault for the first time.

## Prerequisites

- A SharePoint tenant App Catalog, and SharePoint or site-collection administrator rights.
- For Copilot answers: `Files.Read.All` and `Sites.Read.All` approved in SharePoint admin centre → Advanced → API access, and a Microsoft 365 Copilot licence.
- For Teams approval notifications: `Chat.ReadWrite` approved in the same place.

- - -

## Running the Setup Wizard

Open `…/SitePages/DocVault-Setup.aspx`. The wizard has seven steps and provisions the backend with your own permissions.

| Step | What it asks | Why it matters |
| --- | --- | --- |
| 1. Company | Organisation size | Feeds the architecture recommendation |
| 2. Permissions | Shared, role-based, or per-department isolation | Isolation is the main reason to split departments across sites |
| 3. Departments | Name, 2–4 letter code and review cycle for each department | Each becomes a document library; the code prefixes every document number |
| 4. Architecture | Single site, subsites, or separate site collections | The wizard recommends one; you can override |
| 5. Storage | Whether to seed 24 sample documents | Useful for testing search and the screens before real content arrives |
| 6. Review | Confirm and provision | A live log streams each library, column and list as it is created |
| 7. Done | Switch to Live Mode | Until you do, the screens keep showing sample data |

Provisioning creates, for each department: a document library with the nine controlled-document columns, versioning enabled, the **DVault Department Approvers** routing list, and a shared **DocVault Templates** library. Re-running the wizard is safe — anything that already exists is skipped.

:::warning[Important]
If you choose separate site collections, create the sites in the SharePoint admin centre first (the wizard gives step-by-step instructions), then paste each URL into the wizard.
:::

<details>
<summary>📸 Screenshot: Setup Wizard — Departments step</summary>

**Capture:** Step 3 with three departments configured, showing the stepper across the top and the document-number preview in the helper text.\
**Suggested callouts:** (1) Seven-step stepper (2) Department name / code / review cycle rows (3) Add department (4) Valid-department counter\
**Recommended size:** 1600 × 1000 px

*Screenshot to be added.*

</details>

<details>
<summary>📸 Screenshot: Setup Wizard — Review step, provisioning in progress</summary>

**Capture:** Step 6 mid-run, with the dark provisioning log visible and several lines of output.\
**Suggested callouts:** (1) Configuration summary (2) Live provisioning log (3) Provision backend button\
**Recommended size:** 1600 × 1000 px

*Screenshot to be added.*

</details>

- - -

## Switching to Live Mode

Either select **Switch to Live Mode** on the wizard's final step, or use the Dev / Live toggle in **Administration → Data source & setup**. Reload any DocVault page to apply. The DEV MODE badge disappears and every screen now reads your real libraries.

- - -

## Activating your licence

After 15 days an unlicensed installation is replaced by the activation screen. The same screen can be opened during the trial from the banner. Activation has three steps:

1. Subscribe through the Stripe link shown on the screen, or contact your DocVault vendor.
2. Copy the Tenant ID displayed on the screen and send it to the vendor with your Stripe payment reference. The key is bound to that tenant and will not work on any other.
3. Paste the key — it begins with `DV1.` — and select **Activate DocVault**. The key is verified in the browser, saved to the site's DocVault Settings list, and the page reloads unlocked.

:::note
Saving the key needs edit permission on the site. If you cannot save it, ask a site administrator to paste it for you — activation then applies to everyone.
:::

<details>
<summary>📸 Screenshot: Activation screen</summary>

**Capture:** The activation screen in expired state, showing the three numbered steps, the Tenant ID with its Copy button, and the key field.\
**Suggested callouts:** (1) Subscribe with Stripe (2) Tenant ID and Copy button (3) License key field (4) Activate button\
**Recommended size:** 1400 × 1100 px\
**Note:** Blur or replace the Tenant ID before publishing this screenshot.

*Screenshot to be added.*

</details>

- - -

_For questions or support, contact SharePoint Designs at [sharepointdesigns.com](https://www.sharepointdesigns.com)._
