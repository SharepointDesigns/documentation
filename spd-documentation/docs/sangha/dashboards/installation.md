# Dashboard Suite — Installation Guide

This guide walks administrators through deploying both the Intelligence Dashboard and Personal Dashboard to a Microsoft 365 tenant, approving the required Microsoft Graph API permissions, and adding each web part to a SharePoint page.

Both web parts are installed separately using their own `.sppkg` package files. Follow the steps for each package you are deploying.

---

## Prerequisites

Before you begin, make sure the following are in place:

| Requirement | Details |
|---|---|
| **Microsoft 365 Tenant** | A Microsoft 365 tenant with SharePoint Online and Exchange Online enabled |
| **SharePoint Administrator role** | Required to upload packages to the App Catalog and approve API permissions |
| **Tenant-level App Catalog** | A SharePoint App Catalog must exist at the tenant level. If one does not exist, a Global Admin can create it from the SharePoint Admin Centre |
| **Microsoft Graph API access** | The tenant must allow Microsoft Graph API permissions to be granted to SharePoint Framework solutions |
| **Modern SharePoint pages** | Target pages must use the modern SharePoint experience |
| **Microsoft Planner** | Required for the Personal Dashboard Tasks card |
| **Viva Learning (optional)** | Required only for the Personal Dashboard Training card |
| **Microsoft 365 Copilot licences (optional)** | Required for the Intelligence Dashboard's AI suggestions and auto-draft features |
| **.sppkg package files** | `spd-intelligence-dashboard.sppkg` and/or `spd-personaldashboard.sppkg` from SharePoint Designs |

---

## Step 1 — Upload Packages to the App Catalog

Repeat these steps for each `.sppkg` file you are deploying.

1. Open the **SharePoint Admin Centre** (`https://[yourtenant]-admin.sharepoint.com`)
2. In the left navigation, select **More features**
3. Under **Apps**, click **Open**
4. Click **App Catalog** to open the tenant-level App Catalog site
5. In the left navigation, click **Apps for SharePoint**
6. Click **Upload** and select the `.sppkg` file
7. When prompted, click **Deploy** to make the app available across the tenant

> **Note:** Both solutions use `skipFeatureDeployment: true`, so web parts become available on all site collections automatically without needing to be added site by site.

📸 View App Catalog Upload Screenshots

---

## Step 2 — Approve Microsoft Graph API Permissions

Both web parts require Microsoft Graph API permissions. A SharePoint Administrator must approve these after each package is deployed.

1. Open the **SharePoint Admin Centre**
2. In the left navigation, select **Advanced**, then **API access**
3. Under **Pending approvals**, you will see permission requests from the web parts just deployed
4. Select each permission and click **Approve**

### Intelligence Dashboard Permissions

| Permission | What It Is Used For |
|---|---|
| **Sites.Read.All** | Reads SharePoint site content and page data for analytics and content health analysis |
| **User.Read.All** | Reads user profiles from Azure Active Directory to power auto-generated birthday and work anniversary article drafts |
| **Analytics.Read** | Reads site usage analytics including total page views and unique visitor counts |
| **Files.Read.All** | Reads files and documents stored in SharePoint to support content analysis and identify stale pages |

### Personal Dashboard Permissions

| Permission | What It Is Used For |
|---|---|
| **Calendars.Read** | Reads the signed-in user's Outlook calendar to display today's meetings and join links |
| **Tasks.ReadWrite** | Reads and writes the user's Microsoft Planner tasks — view tasks, create new ones, and mark them complete |
| **Presence.Read.All** | Reads real-time presence and availability status for team members |
| **User.Read.All** | Reads user profiles from Azure Active Directory for team member names, photos, and birthday information |
| **LearningAssignedCourse.Read.All** | Reads Viva Learning training courses assigned to the user by the organisation |
| **LearningSelfInitiatedCourse.Read.All** | Reads self-initiated Viva Learning courses |
| **LearningContent.Read.All** | Reads content metadata for Viva Learning items such as titles, thumbnails, and descriptions |
| **LearningProvider.Read** | Reads Viva Learning provider information to correctly attribute training content |

> **Note:** If your organisation does not use Viva Learning, the four `Learning*` permissions can be left unapproved — the Training card will simply not display data. All other permissions are recommended for the full experience of each web part.

> **Note:** `User.Read.All` appears in both packages. You only need to approve it once — it applies to both web parts automatically.

📸 View API Permissions Approval Screenshots

---

## Step 3 — Add Web Parts to a SharePoint Page

1. Navigate to the SharePoint page where you want to add the web part
2. Click the **Edit** button (pencil icon) in the top-right corner of the page
3. Click the **+** icon in a section to open the web part picker
4. Search for **Intelligence Dashboard** or **Personal Dashboard**
5. Click the web part to add it to the page
6. Click **Republish** or **Save as draft** as appropriate

> **Tip — Intelligence Dashboard:** Works best as the primary web part on a full-width or full-page section. Each card needs horizontal space to display its content clearly.

> **Tip — Personal Dashboard:** Works best on a dedicated employee portal or intranet home page. A full-width section or a two-thirds layout gives cards enough room.

📸 View Add to Page Screenshots

---

## Step 4 — Initial Configuration

After adding each web part to the page, open its settings panel to complete the setup:

1. Click on the web part to select it
2. Click the **pencil (edit)** icon that appears on the left side of the web part
3. The settings panel opens on the right
4. Complete the settings described below, then click **Apply**

**Intelligence Dashboard — initial settings to configure:**
- Set the **web part title**
- Optionally upload a **banner background image**
- Expand **Card Order & Visibility** to show, hide, or reorder the five dashboard cards

**Personal Dashboard — initial settings to configure:**
- Set the **web part title** — or toggle the header off
- Choose the **layout** (Standard or Accent Bar)
- Set the **birthday notification window** (30, 60, or 90 days ahead — Default: 60 days)
- Choose the **holiday calendar source** and complete any related fields

### Configuring the Holiday Calendar Source (Personal Dashboard)

Choose the option that matches your organisation's holiday calendar setup:

**Option A — Outlook Holiday Calendar (Default)**
No additional configuration needed. The web part reads from the signed-in user's Outlook holiday calendar automatically.

**Option B — SharePoint Events List**
In the settings panel, set **Holiday calendar source** to **SharePoint Calendar List**, then use the list picker to select the Events list that contains your public holidays.

**Option C — Shared Calendar Mailbox**
In the settings panel, set **Holiday calendar source** to **Shared Calendar**, then enter the email address or UPN of the mailbox that owns the shared holiday calendar (e.g. `holidays@contoso.com`).

---

## Troubleshooting

| Issue | Likely Cause | Resolution |
|---|---|---|
| Web part not appearing in the web part picker | Package not fully deployed | Re-upload the .sppkg and confirm you clicked **Deploy** at the prompt |
| "Permission required" notice on a card | One or more Graph permissions have not been approved | Go to SharePoint Admin Centre → API access and approve all pending permissions |
| **Intelligence Dashboard** — Site Analytics card shows no data | `Analytics.Read` or `Sites.Read.All` not approved | Approve both permissions in the API access panel |
| **Intelligence Dashboard** — Auto Generated Drafts shows no drafts | `User.Read.All` not approved, or user profiles in Azure AD are missing birthday or hire date fields | Approve the permission and verify user profile data in Azure AD |
| **Intelligence Dashboard** — Content Suggestions not loading | Microsoft 365 Copilot is not enabled for the tenant | Confirm the tenant has Copilot licences and that Copilot features are turned on |
| **Intelligence Dashboard** — Trending Topics empty | `Files.Read.All` not approved, or Microsoft Graph Insights is disabled | Approve the permission; verify Microsoft Search and Graph Insights are enabled in the Microsoft 365 Admin Centre |
| **Personal Dashboard** — Meetings card is empty | `Calendars.Read` not approved, or user has no meetings today | Approve the permission; if the user has meetings they should appear immediately |
| **Personal Dashboard** — Tasks card shows nothing or cannot create tasks | `Tasks.ReadWrite` not approved | Approve the permission in the API access panel |
| **Personal Dashboard** — Team Availability shows no team members | User has no direct reports in Azure AD, or `User.Read.All` and `Presence.Read.All` not approved | Approve both permissions; confirm the user's direct reports are set in Azure AD |
| **Personal Dashboard** — Birthdays are not showing | `User.Read.All` not approved, or birthday dates missing in Azure AD | Approve the permission; confirm birthday fields are populated in Azure AD user profiles |
| **Personal Dashboard** — Holidays card is empty | Holiday source not configured, or wrong source selected | Open settings and verify the holiday source setting and any related fields |
| **Personal Dashboard** — SharePoint list not appearing in list picker | List is not using the Events template or is hidden | Confirm the list uses the SharePoint Events template (template 106) and is not hidden |
| **Personal Dashboard** — Training card shows no assignments | Viva Learning permissions not approved, or user has no assignments | Approve all four `Learning*` permissions; confirm Viva Learning is enabled for the tenant |
| Banner image does not save (Intelligence Dashboard) | Insufficient permissions on the site | Ensure the configuring user has at least **Contribute** permissions on the site |
