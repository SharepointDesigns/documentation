# DIY Sangha Document Center — Installation

## Prerequisites

| Requirement | Details |
|---|---|
| SharePoint Online tenant | Microsoft 365 subscription with SharePoint Online |
| App Catalog | A tenant-level or site-collection App Catalog must exist |
| Admin access | Global Admin or SharePoint Admin role to upload and deploy the package |
| Site Owner access | Site Owner role on the target site to add web parts to pages |

> **Note:** DIY Sangha Document Center does not require any Microsoft Graph API permissions. No additional admin approval is needed after deployment.

---

## Step 1 — Upload the Package to the App Catalog

1. Download the solution package: `spd-document-center.sppkg`
2. Go to your SharePoint **App Catalog** site.
3. Click **Apps for SharePoint** in the left navigation.
4. Click **Upload** and select the `.sppkg` file.
5. When prompted, click **Deploy** to make it available across the tenant.

---

## Step 2 — Add the App to Your Site

1. Go to the SharePoint site where you want the Document Center.
2. Click the **Settings gear** → **Add an app**.
3. Find **Intranet Document Center Product For Sangha** and click **Add**.

---

## Step 3 — Add Web Parts to Your Page

1. Edit the page where you want the Document Center layout.
2. Click the **+** button and search for each web part by name:
   - **Document Welcome Banner**
   - **Document Contents**
   - **FAQs**
   - **Contact**
3. Add each web part and open its settings panel (pencil icon) to configure it.

---

## Recommended Page Layout

For a complete Document Center page, place the web parts in this order from top to bottom:

| Position | Web Part | Purpose |
|---|---|---|
| Top | Document Welcome Banner | Sets the page identity with a branded banner |
| Middle | Document Contents | The primary document browsing area |
| Middle | FAQs | Answers common questions about the documents or process |
| Bottom | Contact | Points employees to the right person for help |

---

## Troubleshooting

| Issue | Solution |
|---|---|
| Web part shows "License not valid" | Contact SharePoint Designs to activate your licence key |
| Document Contents shows no files | Check that the selected library exists and contains files, and that the source setting is correct |
| FAQs accordion is empty | If using SharePoint list mode, verify the selected list exists and has items; if using custom items mode, add items in the manage panel |
| Contact shows no person | In User Selection mode, pick a person from the people picker; in Collection View mode, add entries via the manage panel |
| Banner shows no image | Use the image picker in settings to select or upload a background image |
