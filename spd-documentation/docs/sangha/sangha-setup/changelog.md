---
title: Changelog
sidebar_position: 5
---

All notable changes to Intranet Sangha are documented here. Versions are listed in reverse chronological order.

---

## 0.0.0.1 — 2026-06-15

This is the initial release of Intranet Sangha by SharePoint Designs.

---

### Added

#### Setup Wizard

- Added a seven-step guided intranet Setup Wizard for SharePoint Administrators
- Added automated validation to ensure required settings are completed before each step progresses
- Added a full-screen wizard experience that opens automatically for Site Collection Administrators
- Added persistent setup state — the wizard saves progress so administrators can close and return without losing configuration
- Added a live preview panel that reflects branding and navigation changes in real time as they are made

#### Plan Selection & Licensing

- Added subscription plan selection with four tiers: Free Trial, Spark, Flame, and Blaze
- Added a plan comparison matrix showing which pages and features are included in each plan
- Added Stripe checkout integration for activating paid plans directly from the wizard
- Added annual and monthly billing options for paid plans
- Added license validation to confirm the active plan before deployment
- Added a Free Trial option providing full access to all pages for 15 days
- Added trial expiration detection with an in-wizard alert and option to request a trial extension
- Added a **Deploy pending pages** button that resumes deployment when a payment was completed but setup was interrupted

#### Organization Details

- Added organization name configuration, pre-filled from the Microsoft 365 tenant name
- Added site title configuration that updates the SharePoint site header in real time
- Added industry selection with 17 categories to personalize intranet defaults

#### Branding Configuration

- Added logo upload with support for PNG, SVG, and JPG formats
- Added automatic brand color extraction that analyzes an uploaded logo and suggests a matching color palette
- Added a custom SharePoint theme generator that creates and applies a brand theme using selected primary and secondary colors
- Added a color picker with hex code input for precise color selection
- Added font package selection using SharePoint's available typography options
- Added two page layout options (Layout 1 and Layout 2)
- Added a full-width page toggle that expands content to fill the full browser width
- Added four border radius options (0px, 12px, 16px, 32px) for controlling the roundness of cards and panels
- Added light and dark mode selection
- Added footer alignment options: Left, Center, or Right
- Added a hide site title toggle to remove the SharePoint site title from the header
- Added favicon upload that applies a custom browser tab icon site-wide
- Added a theme browser for applying existing SharePoint or Brand Center themes

#### Navigation Setup

- Added a visual navigation editor with drag-and-drop reordering of items
- Added support for multi-level navigation hierarchies (parent, child, and grandchild items)
- Added icon selection for navigation items using Fluent UI icons
- Added URL configuration with an open-in-new-tab option for each item
- Added dividers for visually grouping navigation sections
- Added audience targeting per navigation item — items can be restricted to specific Microsoft 365 users, security groups, Site Admins, or Site Owners
- Added AI-assisted navigation generation that suggests a navigation structure based on organization type and selected plan

#### User Access & Permissions

- Added user management with a people picker for searching and adding users by name or email
- Added three user role options: Admin, Owner, and Contributor
- Added three access control modes: All Users, Internal Only, and Specific Groups
- Added a launch notification toggle that sends an announcement email to added users when deployment completes
- Added support for assigning multiple users in a single operation

#### Deployment & Provisioning

- Added automated creation of all SharePoint lists required by each intranet page, including News, Announcements, Events, and Tasks lists
- Added automated creation of the SiteAssets document library for storing logos, images, and media
- Added page provisioning for all pages included in the selected plan
- Added web part installation for each page — packages are downloaded and installed automatically during deployment
- Added department-specific list and library creation for the Departments and Employee Resources pages
- Added Employee Directory list creation and population for the Blaze plan
- Added Document Center library creation for the Blaze plan
- Added Employee Onboarding list and resource creation for the Blaze plan
- Added Personal Dashboard data list creation for all plans
- Added Admin Dashboard intelligence data setup for all plans
- Added a phased deployment progress bar with live status messages
- Added per-page deployment confirmation — a **View [Page Name]** link appears as each page is created
- Added post-deployment reporting of any pending API permissions requested by installed web parts

#### Content Setup

- Added starter content population including sample news posts, announcements, and events
- Added a pre-configured homepage with web parts arranged per the selected layout
- Added pre-configured subpages for each plan tier with relevant sample content

#### Post-Launch Templates

- Added a template gallery for creating additional pages after the initial deployment
- Added page creation from templates — administrators enter a page name and the page is created instantly

---

### Compatibility

- Requires SharePoint Online (modern experience)
- Compatible with Microsoft 365 Communication Sites and Team Sites
- Requires Site Collection Administrator access to run the Setup Wizard
- Microsoft Graph permission `Organization.Read.All` required for automatic organization name detection
