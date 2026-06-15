# DIY Sangha Employee Directory — Installation

## Prerequisites

| Requirement | Details |
|---|---|
| SharePoint Online tenant | Microsoft 365 subscription with SharePoint Online |
| App Catalog | A tenant-level or site-collection App Catalog must exist |
| Admin access | Global Admin or SharePoint Admin role to upload, deploy, and approve the Graph permission |
| Site Owner access | Site Owner role on the target site to add web parts to pages |
| Microsoft Graph permission | An admin must approve **User.Read.All** after deployment (see below) |

---

## Step 1 — Upload the Package to the App Catalog

1. Download the solution package: `spd-employee-directory.sppkg`
2. Go to your SharePoint **App Catalog** site.
3. Click **Apps for SharePoint** in the left navigation.
4. Click **Upload** and select the `.sppkg` file.
5. When prompted, click **Deploy** to make it available across the tenant.

---

## Step 2 — Approve the Microsoft Graph Permission

After deploying, a Global Admin or SharePoint Admin must approve the API permission request. Without this approval, the directory will not be able to read user profiles.

1. Go to the **SharePoint Admin Centre** → **Advanced** → **API access**.
2. Find the pending request and approve it:

| Permission | Purpose |
|---|---|
| User.Read.All | Allows the Employee Directory web part to read all user profiles from Microsoft 365 |

---

## Step 3 — Add the App to Your Site

1. Go to the SharePoint site where you want the Employee Directory.
2. Click the **Settings gear** → **Add an app**.
3. Find **Intranet Employee Directory For Sangha** and click **Add**.

---

## Step 4 — Add Web Parts to Your Page

1. Edit the page where you want the directory.
2. Click the **+** button and search for each web part:
   - **Employee Welcome Banner**
   - **Employee Directory**
3. Add each web part and open its settings panel (pencil icon) to configure it.

---

## Recommended Page Layout

| Position | Web Part | Purpose |
|---|---|---|
| Top | Employee Welcome Banner | Sets the page identity with a branded banner |
| Below | Employee Directory | The full searchable staff list |

---

## Troubleshooting

| Issue | Solution |
|---|---|
| Web part shows "License not valid" | Contact SharePoint Designs to activate your licence key |
| Directory shows no users | Verify the User.Read.All permission is approved in the SharePoint Admin Centre → API access |
| Graph permission pending | Go to SharePoint Admin Centre → Advanced → API access and approve User.Read.All |
| Service accounts appear in the directory | Open the Employee Directory settings panel and use the "Exclude Users" picker to hide specific accounts |
| Banner shows no image | Use the image picker in the banner settings to select or upload a background image |
