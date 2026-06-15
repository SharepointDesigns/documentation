---
title: Installation
sidebar_position: 1
---
# DIY Sangha Home — Installation Guide

This guide walks you through installing DIY Sangha Home on your SharePoint Online tenant. It is intended for SharePoint administrators or IT staff.

---

## Before You Begin

Make sure the following are in place before installing:

| Requirement                 | Details                                                          |
| --------------------------- | ---------------------------------------------------------------- |
| **Microsoft 365 tenant**    | SharePoint Online (modern experience) is required                |
| **SharePoint Admin access** | You need SharePoint Administrator or Global Administrator rights |
| **App Catalog**             | A Tenant App Catalog must exist in your SharePoint Admin Centre  |
| **Modern SharePoint site**  | A communication site or team site to deploy the web parts to     |

---

## Step 1 — Download the Package

Obtain the solution package file:

```
spd-intranetdesignsangha.sppkg
```

This file is provided by SharePoint Designs. Contact your SharePoint Designs representative if you do not have it.

---

## Step 2 — Upload to the App Catalog

1. Go to your **SharePoint Admin Centre** (`https://[yourtenant]-admin.sharepoint.com`).
2. In the left navigation, click **More features** → **Apps** → **Open**.
3. Click **App Catalog** in the left panel.
4. Click **Apps for SharePoint** in the left panel.
5. Click **Upload** and select the `spd-intranetdesignsangha.sppkg` file.
6. When the dialog appears, check **Make this solution available to all sites in the organisation** (this allows tenant-wide deployment without needing to activate per site).
7. Click **Deploy**.

> **Tip:** Tenant-wide deployment means the web parts will be available on all modern SharePoint pages immediately, without any further activation steps per site.

---

## Step 3 — Approve Microsoft Graph Permissions

DIY Sangha Home requires permission to read calendar events, user profiles, and tasks from Microsoft 365. These must be approved by an administrator.

1. In the **SharePoint Admin Centre**, go to **Advanced** → **API access**.
2. You will see a list of pending permission requests. Look for the following and approve each one:

| Permission                        | What it's used for                                             |
| --------------------------------- | -------------------------------------------------------------- |
| `Calendars.Read`                  | Reading the current user's calendar events                     |
| `Calendars.Read.Shared`           | Reading events from shared mailboxes                           |
| `Group.Read.All`                  | Reading group membership for audience targeting                |
| `User.Read.All`                   | Reading user profiles for the org chart and employee spotlight |
| `Mail.Send`                       | Sending notifications (if applicable)                          |
| `Tasks.Read`                      | Showing the user's tasks in the personal dashboard             |
| `LearningAssignedCourse.Read.All` | Showing assigned training in the personal dashboard            |

3. Select each request and click **Approve**.

> **Note:** If you do not approve these permissions, the Org Chart, Employee Spotlight, Upcoming Events (shared mailbox mode), and personal dashboard cards will not function correctly. Other web parts (news, announcements, facilities, quick links) will continue to work.

---

## Step 4 — (Recommended) Use the SetUp Wizard

DIY Sangha Home includes a guided SetUp Wizard that can automatically configure your site in minutes. The wizard:

- Creates any required SharePoint lists.
- Applies your chosen colour theme and logo.
- Places all web parts on the page in a pre-built layout.

To launch the wizard:

1. Navigate to the SharePoint site where the solution is installed.
2. The SetUp Wizard button will appear in the top navigation bar (visible to administrators only).
3. Click the button to begin the guided setup process.
4. Follow the five steps: **Welcome → Branding → Organisation Details → Choose Template → Apply**.

> If the wizard button does not appear, confirm that the solution is deployed tenant-wide and that you are a site owner or administrator on the site.

---

## Step 5 —(Optional) Add Web Parts to a Page

Once the solution is deployed, you can add any of the nine web parts to a modern SharePoint page.

1. Go to the SharePoint site where you want to add the home page.
2. Navigate to the page you want to edit (or create a new page).
3. Click **Edit** in the top-right corner of the page.
4. Click the **+** icon where you want to add a web part.
5. Search for the web part name (e.g., "Welcome Banner", "Featured News", "Common Tools").
6. Click the web part to add it to the page.
7. Click the pencil icon (✏️) on the web part to open its settings and configure it.
8. When done, click **Republish** to save and publish your changes.

---

## Troubleshooting

### The web parts do not appear in the web part picker

- Confirm the `.sppkg` file was deployed successfully in the App Catalog (Step 2).
- Confirm you selected "Make available to all sites" during deployment.
- Wait a few minutes and refresh — propagation to all sites can take up to 10 minutes.

### Calendar events or org chart data are not loading

- Confirm the Microsoft Graph permissions have been approved in Step 3.
- Check your browser's developer console for any specific permission error messages.
- Ensure the user account has an active Microsoft 365 licence.

### The SetUp Wizard button is not visible

- Confirm you are signed in as an administrator.
- Check the SharePoint Admin Centre to confirm the application customizer extension is deployed.

### Images uploaded via file picker are not saving

- Confirm the site has a **Site Assets** document library (most SharePoint sites have this by default).
- Confirm the uploading user has **Contribute** access to the Site Assets library.
