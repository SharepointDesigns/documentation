# DIY Sangha Employee Onboarding — Installation

## Prerequisites

| Requirement | Details |
|---|---|
| SharePoint Online tenant | Microsoft 365 subscription with SharePoint Online |
| App Catalog | A tenant-level or site-collection App Catalog must exist |
| Admin access | Global Admin or SharePoint Admin role to upload, deploy, and approve the Graph permission |
| Site Owner access | Site Owner role on the target site to add web parts and create lists |
| SharePoint Lists | Three lists must exist on the site before configuring the web part (see Step 3) |
| Microsoft Graph permission | An admin must approve **User.Read.All** after deployment (see below) |

---

## Step 1 — Upload the Package to the App Catalog

1. Download the solution package: `spd-employee-onboarding.sppkg`
2. Go to your SharePoint **App Catalog** site.
3. Click **Apps for SharePoint** in the left navigation.
4. Click **Upload** and select the `.sppkg` file.
5. When prompted, click **Deploy** to make it available across the tenant.

---

## Step 2 — Approve the Microsoft Graph Permission

After deploying, a Global Admin or SharePoint Admin must approve the API permission request.

1. Go to the **SharePoint Admin Centre** → **Advanced** → **API access**.
2. Find the pending request and approve it:

| Permission | Purpose |
|---|---|
| User.Read.All | Allows the Employee Onboarding web part to read Microsoft 365 user profiles to match employees to their onboarding records |

---

## Step 3 — Prepare the Required SharePoint Lists

The Employee Onboarding web part requires three SharePoint lists on the same site. Create these before adding the web part to a page.

| List | Purpose |
|---|---|
| Onboarding Task List | Stores all onboarding task items (e.g., "Complete IT setup", "Read the employee handbook") |
| Employee List | Stores records of new employees currently in their onboarding period |
| Onboarding Template | Defines the task template — the set of default tasks assigned to each new employee |

> **Tip:** Use SharePoint's standard list creation to set up these lists. Your SharePoint Designs implementation guide includes recommended column structures for each list.

---

## Step 4 — Add the App to Your Site

1. Go to the SharePoint site where you want the Onboarding page.
2. Click the **Settings gear** → **Add an app**.
3. Find **Intranet Employee Onboarding For Sangha** and click **Add**.

---

## Step 5 — Add Web Parts to Your Page

1. Edit the page where you want the onboarding experience.
2. Click the **+** button and search for each web part:
   - **Employee Welcome**
   - **Employee Onboarding**
3. Add each web part and open its settings panel (pencil icon) to configure it.

---

## Recommended Page Layout

| Position | Web Part | Purpose |
|---|---|---|
| Top | Employee Welcome | Sets a welcoming tone with a branded banner |
| Below | Employee Onboarding | The main onboarding checklist and progress tracker |

---

## Troubleshooting

| Issue | Solution |
|---|---|
| Web part shows "License not valid" | Contact SharePoint Designs to activate your licence key |
| Onboarding web part shows no tasks | Check that the Onboarding Task List and Onboarding Template list exist and have items |
| Employee does not see their checklist | Verify the employee record exists in the Employee List with the correct email or user identifier |
| Graph permission pending | Go to SharePoint Admin Centre → Advanced → API access and approve User.Read.All |
| Banner shows no image | Use the image picker in the banner settings to select or upload a background image |
