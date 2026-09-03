---
title: Change Log
author: SharePoint Designs
version: 1
updated: October 2025
description: Change Log settings and customization guide for each web part.
sidebar_position: 5
---
## Version 1.0.0.9

### Feature

#### Site setup

* Added Trial expiry notification
* Added custom push notifications (Handled by SharePoint Designs)

## Version 1.0.0.8
* ### Exit Setup
   * Fixed the Exit Setup option to properly close the setup wizard after installation.
* ### Wizard Visibility
   * Upgraded The setup wizard is now visible only to Site Collection Administrators.
* ### Header Theme Support
   * Updated the wizard header to use the current SharePoint theme instead of a hardcoded color.
* ### Site Theme Creation
   * Added support to create and apply Site Themes directly through the setup wizard.

## Version 1.0.0.7
* ### Implemented New Extension  setup 
   * Implemented the new extension setup For Design 2. 

* ### Implemented exit Setup
   * If existing user comes in we can exit without again setting up the site .

* ### Full Width Loader Alignment Fix
   * The loader behavior has been updated for the Full Width layout configuration.

* ### Footer Styling and Default Content Enhancement

  * The footer section has been updated with refined color styling and improved default content configuration, ensuring a more consistent visual appearance and providing meaningful initial content during page setup.

* ### Live Preview Panel

  * The Branding screen has been redesigned with a split layout. The right section includes a live preview panel that dynamically displays how the page will appear based on the selected branding configurations, providing real-time visual feedback during customization.

* ### Footer Integration

  * The footer section has been included within the Home Page layout, ensuring a complete page structure and a consistent user experience.

* ### Full Width Implementation

  * The Extension Setup screen has been enhanced with a full-width implementation option, allowing the extension to utilize the complete page width for a more immersive layout. This provides improved content visibility and a seamless user experience across different screen sizes

* ### Redesigned Wizard Experience

  * The wizard has been rebuilt with a cleaner layout, improved header, close button, and footer. It now walks you through a structured flow.

* ### Jump Between Steps

  * Click on any previously completed step to go back and make changes — no need to step through the wizard sequentially.

* ### Progress Saved Automatically

  * The wizard keeps track of where you are across steps, so your setup progress isn't lost if you close and reopen it.

* ### Extension Icon Visibility Validation

  * Added validation to ensure the extension icon is displayed only for Site Collection Administrators, improving access control and preventing visibility for unauthorized users.
* ### Site Branding Background Color Support

  * Added functionality to customize and apply background colors dynamically within Site Branding settings for better visual customization and branding flexibility.

## Version 1.0.0.6

- **Site Branding from Your Logo**
  - Upload your site logo through the Setup Wizard and the intranet automatically extracts your brand colors, generating a theme palette that's applied across the entire site — no manual color configuration needed.

- ### Custom Favicon
  - Give your intranet a fully branded presence in every browser tab. You can now upload your own favicon directly from the Setup Wizard's branding screen.

- ### Two Ways to Manage Your Data
  - Web part content no longer has to come from a SharePoint list. **Top Navigation**, **Common Tools**, and **Holidays** now support **Collection Data** as a data source — meaning you can enter and manage content directly in the web part settings panel, without creating or maintaining a separate list.

---

## Version 1.0.0.5

- ### Setup Wizard — Now Available Sitewide
  - The Setup Wizard has moved out of a single page web part and into the **site header**, so you can launch it from any page, at any time — no more hunting for the right page to configure your intranet.

- ### Redesigned Wizard Experience
  - The wizard has been rebuilt with a cleaner layout, improved header, close button, and footer. It now walks you through a structured flow:

- ### Jump Between Steps
  - Click on any previously completed step to go back and make changes — no need to step through the wizard sequentially.

- ### Progress Saved Automatically
  - The wizard keeps track of where you are across steps, so your setup progress isn't lost if you close and reopen it.

- ### Manage List Content Without Leaving the Page
  - **Quick Links**, **Common Tools**, **Holidays**, and **Top Navigation** now let you add or edit items in a pop-up panel directly on the page — no navigation required.

## Version - 1.0.0.4

---

### Design 2 Setup

- Updated the Holiday list with proper mock data.
- Removed the Description column from the Holiday list.

### Welcome Banner Enhancement

- 🆕 Enabled local image upload for the Welcome Banner.
- Removed the default background color from the greeting message.
- Updated the carousel dot colors.

### Calendar

- 🆕Improved “Add to Outlook” functionality, allowing direct addition to the current user's Outlook calendar.
- Fixed issues related to recurring events.
- Improved the calendar’s responsiveness.

### Common Tools

- Improved the default background color.

### Top Navigation

- Improved the default background color.

### News

- Fixed the alignment issue in the command bar.

## Version - 1.0.0.3

---

### Welcome Banner Enhancement

- Changed banner right section from a single announcement to a carousel supporting multiple rotating announcements.
- Ability to set the time interval to rotate the announcements 🆕
- Option to disable/enable gradient in banner and announcements card 🆕
- Added photo scaling for banner background image 🆕
- Added option to set welcome text color and background color 🆕

### Calendar

- Allows to fetch current user's calendar 🆕
- Fixed issue where the event link was not proper for user/shared calendar

### Common Tools

- Fixed where the styling applies to same webparts in a page
- Implements target audience (Can be enabled from the list settings) 🆕

### Top Navigation

- Implements target audience (Can be enabled from the list settings) 🆕
- Fixed and issue where, in vertical layout the hover was not working 

## Version - 1.0.0.2

---

### Updates based on Property Panel Enhancements

#### Design 2 Setup

- Added a new **“Set as Homepage”** checkbox after site creation.
- When enabled, clicking **“Open New Page”** will open the newly created page **and set it as the homepage** .
- If the checkbox is unchecked, the new page opens normally without changing the homepage.
- The homepage update only occurs when the **“Open New Page”** button is clicked

#### 🧭 Top Navigation

- ✖️ **See all** option removed.
- 🆕 **Show gradient on hover** — Added new option.

#### 🏞️ Banner

- 🆕 **Text color** — Added new setting.
- 🆕 **Badge font size** — Added new setting.
- 🆕 **Heading font size** — Added new setting.
- 🆕 **Paragraph font size** — Added new setting.0

#### 🧰 Common Tools

- 🆕 **Show top border** — Added new toggle.
- 🆕 **Border color** — Added new color option.
- 🆕 **Show gradient on hover** — Added new toggle.
- 🆕 **Circle theme color** — Added new setting.

#### 📰 News

- 🆕 **Show top border** — Added new toggle.
- 🆕 **Border color** — Added new color option.

#### 🏢 Facilities

- 🆕 **Show top border** — Added new toggle.
- 🆕 **Border color** — Added new color option.
- 🆕 **Show all facilities** — Added new toggle.
- 🆕 **Enable auto scroll** — Added new option.

#### 📅 Calendar

- 🆕 **Source data (dropdown)** — Added new selection option.
- 🆕 **Show top border** — Added new toggle.
- 🆕 **Border color** — Added new color option.
- 🆕 **Show border** — Added new toggle.

#### 🎉 Holidays

- ❌ **Change bullet/icon style** — Removed.
- 🆕 **Show bullets** — Added new toggle.
- 🆕 **Show top border** — Added new toggle.
- 🆕 **Border color** — Added new color option.
- 🆕 **Show holiday filter** — Added new toggle.

---

## Version - 1.0.0.1

---

### Fixes

- Resolved an issue with the [Top Navigation](/docs/design-2/configuration#-1-top-navigation) icon colors.
  - Icons with varying original colors will now display using the site’s primary theme color, and change to white when hovered.

## Version history

| Version | Published Date |
| ------- | -------------- |
| 1.0.0.0 | TBD            |
| 1.0.0.1 | TBD            |
| 1.0.0.2 | TBD            |
| 1.0.0.3 | Dec 2025       |
| 1.0.0.4 | Mar 2026       |
| 1.0.0.5 | Apr 3 2026     |
| 1.0.0.6 | Apr 9 2026     |
