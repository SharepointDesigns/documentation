# DIY Sangha Sub Pages — Installation

## Prerequisites

Before installing, make sure the following are in place:

| Requirement | Details |
|---|---|
| SharePoint Online tenant | Microsoft 365 subscription with SharePoint Online |
| App Catalog | A tenant-level or site-collection App Catalog must exist |
| Admin access | Global Admin or SharePoint Admin role to upload and approve the package |
| Site Owner access | Site Owner role on the target SharePoint site to add web parts to pages |
| Microsoft Graph permission | An admin must approve **Group.Read.All** after upload (see below) |

---

## Step 1 — Upload the Package to the App Catalog

1. Download the solution package: `spd-intranetdesignsangha-subpages.sppkg`
2. Go to your SharePoint **App Catalog** site.
3. Click **Apps for SharePoint** in the left navigation.
4. Click **Upload** and select the `.sppkg` file.
5. When prompted, click **Deploy** to make it available across the tenant.

---

## Step 2 — Approve the Microsoft Graph Permission

After deploying the package, an admin must approve the API permission request before the web parts can access group data.

1. Go to the **SharePoint Admin Centre** → **Advanced** → **API access**.
2. Find the pending request and approve it:

| Permission | Purpose |
|---|---|
| Group.Read.All | Allows the Featured News web part to read Microsoft 365 group memberships for audience targeting |

---

## Step 3 — Add the App to Your Site

1. Go to the SharePoint site where you want to use DIY Sangha Sub Pages.
2. Click the **Settings gear** → **Add an app**.
3. Find **Intranet Sangha SubPages by SharePoint Designs** and click **Add**.

---

## Step 4 — Run the Configure Site Sub Pages Wizard

The **Configure Site Sub Pages** web part is the fastest way to set up your sub-pages. It provisions fully structured pages in one click.

1. Add the **Configure Site Sub Pages** web part to any page on your site.
2. The wizard launches automatically and walks you through:

| Step | What It Does |
|---|---|
| Welcome | Introduces the setup process and checks your site |
| Select Pages | Choose which sub-pages to create (Departments, Employee Resources, Policies) |
| Configure | Set basic branding and page options |
| Apply | Provisions the selected pages with all web parts pre-placed |
| Done | Confirms the pages are ready with direct links to each |

3. After the wizard completes, navigate to each provisioned page to customise the web part settings.

> **Note:** You must be a Site Owner to run the wizard. The wizard creates pages only — it does not modify site permissions.

---

## Step 5 — Add Web Parts Manually (Optional)

If you prefer to add web parts to an existing page rather than using the wizard:

1. Edit the page in SharePoint.
2. Click the **+** button where you want to add a web part.
3. Search for the web part name (e.g., "Welcome Banner", "Featured News").
4. Click the web part to add it.
5. Open the settings panel (pencil icon) to configure it.

---

## Troubleshooting

| Issue | Solution |
|---|---|
| Web part shows "License not valid" | Contact SharePoint Designs to activate your licence key |
| Featured News shows no posts | Check that the selected site has published news posts and the Graph permission is approved |
| Document Contents shows empty | Verify the selected library exists and contains files, and that the library is not hidden |
| Newsletter shows blank | Confirm the selected library contains items with a cover image column |
| Configure Sub Pages wizard does not appear | Ensure you have Site Owner permissions and the app has been added to the site |
| Graph permission pending | Go to SharePoint Admin Centre → Advanced → API access and approve Group.Read.All |
