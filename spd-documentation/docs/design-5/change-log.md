---
title: Change Log
sidebar_position: 5
---
## Version 1.0.0.7

---

### 🎨 Welcome Banner

* 🔧 Fixed secondary theme color that was previously hardcoded in the Banner webpart.
* 🆕 **Upload custom images** — Added upload button functionality in Banner and Image webpart for custom image uploads.
* 🔧 Fixed title and description functionality appearing in normal layout configurations before layout selection — now displays only after selecting the normal layout option.
* 🔧 Resolved mobile responsiveness issue where only half content was displayed.
* 🆕 **Adjustable announcement height** — Added slider control to adjust announcement section height for better content fitting.
* 🆕 **Collection Data support** — Banner now supports Collection Data as a data source, allowing direct content management without maintaining a separate list.
* 🆕 **Navigation arrows** — Added carousel navigation arrows for improved user experience.

### 📅 Calendar

* 🔧 Fixed secondary theme color that was previously hardcoded in the Calendar webpart.
* 🆕 **Improved "Add to Outlook" functionality** — Now opens Outlook directly instead of downloading an ICS file.

### 📰 News & Featured News

* 🔧 Fixed secondary theme color that was previously hardcoded in the News webpart.
* 🔧 Fixed Learn More button to properly use custom site branding secondary theme color.
* 🆕 **Enhanced Learn More button** — Added hover effects to draw user attention.
* 🔧 Resolved content clustering issue in Featured News mobile responsiveness.

### 🔗 Quick Links

* 🔧 Fixed hide space control that was not functioning properly.
* 🆕 **Scroll control** — Added scroll bar and control in property pane to manage the number of quick links displayed.
* 🔧 Fixed space above header when toggle is enabled or disabled.
* 🔧 Fixed hover icon color styling.

### 🎨 Site Branding & Theme

* 🆕 **Secondary color option** — Added custom site branding secondary color option.
* 🆕 **Welcome message color customization** — Added ability to change welcome message, date, and time colors from property pane color picker.

### ⚙️ Setup Wizard Enhancements

* 🆕 **Streamlined Welcome Screen** — Removed Vision and Mission fields from the Welcome screen.
* 🆕 **Optional fields** — Made Industry and Employee fields optional in Welcome Screen.
* 🆕 **Independent branding controls** — Review and Apply button in Branding Screen now works independently without requiring Apply theme to be clicked first.
* 🔄 **New Setup extension** — Setup wizard upgradation in progress with multiple screens and page creation mockup.

### 🐛 General Fixes

* 🔧 Fixed various issues in Design 5 template.
* 🔧 Resolved mouse hover effect hiding the Moc Icon class.
* 🔧 Fixed extra space between webparts.
* 🔧 Updated mock document data.

---

## Version 1.0.0.6

* **Site Branding from Your Logo**

  * Upload your site logo through the Setup Wizard and the intranet automatically extracts your brand colors, generating a theme palette that's applied across the entire site — no manual color configuration needed.

* ### Custom Favicon

  * Give your intranet a fully branded presence in every browser tab. You can now upload your own favicon directly from the Setup Wizard's branding screen.

* ### Two Ways to Manage Your Data

  * Web part content no longer has to come from a SharePoint list. **Top Navigation**, **Common Tools**, and **Holidays** now support **Collection Data** as a data source — meaning you can enter and manage content directly in the web part settings panel, without creating or maintaining a separate list.

---

## Version 1.0.0.5

* ### Setup Wizard — Now Available Sitewide

  * The Setup Wizard has moved out of a single page web part and into the **site header**, so you can launch it from any page, at any time — no more hunting for the right page to configure your intranet.

* ### Redesigned Wizard Experience

  * The wizard has been rebuilt with a cleaner layout, improved header, close button, and footer. It now walks you through a structured flow:

* ### Jump Between Steps

  * Click on any previously completed step to go back and make changes — no need to step through the wizard sequentially.

* ### Progress Saved Automatically

  * The wizard keeps track of where you are across steps, so your setup progress isn't lost if you close and reopen it.

* ### Manage List Content Without Leaving the Page

  * **Quick Links**, **Common Tools**, **Holidays**, and **Top Navigation** now let you add or edit items in a pop-up panel directly on the page — no navigation required.

## Version - 1.0.0.4

---

### Design 2 Setup

* Updated the Holiday list with proper mock data.
* Removed the Description column from the Holiday list.

### Welcome Banner Enhancement

* 🆕 Enabled local image upload for the Welcome Banner.
* Removed the default background color from the greeting message.
* Updated the carousel dot colors.

### Calendar

* 🆕Improved "Add to Outlook" functionality, allowing direct addition to the current user's Outlook calendar.
* Fixed issues related to recurring events.
* Improved the calendar's responsiveness.

### Common Tools

* Improved the default background color.

### Top Navigation

* Improved the default background color.

### News

* Fixed the alignment issue in the command bar.

## Version - 1.0.0.3

---

### Welcome Banner Enhancement

* Changed banner right section from a single announcement to a carousel supporting multiple rotating announcements.
* Ability to set the time interval to rotate the announcements 🆕
* Option to disable/enable gradient in banner and announcements card 🆕
* Added photo scaling for banner background image 🆕
* Added option to set welcome text color and background color 🆕

### Calendar

* Allows to fetch current user's calendar 🆕
* Fixed issue where the event link was not proper for user/shared calendar

### Common Tools

* Fixed where the styling applies to same webparts in a page
* Implements target audience (Can be enabled from the list settings) 🆕

### Top Navigation

* Implements target audience (Can be enabled from the list settings) 🆕
* Fixed and issue where, in vertical layout the hover was not working 

## Version - 1.0.0.2

---

### Updates based on Property Panel Enhancements

#### Design 2 Setup

* Added a new **"Set as Homepage"** checkbox after site creation.
* When enabled, clicking **"Open New Page"** will open the newly created page **and set it as the homepage** .
* If the checkbox is unchecked, the new page opens normally without changing the homepage.
* The homepage update only occurs when the **"Open New Page"** button is clicked

#### 🧭 Top Navigation

* ✖️ **See all** option removed.
* 🆕 **Show gradient on hover** — Added new option.

#### 🏞️ Banner

* 🆕 **Text color** — Added new setting.
* 🆕 **Badge font size** — Added new setting.
* 🆕 **Heading font size** — Added new setting.
* 🆕 **Paragraph font size** — Added new setting.0

#### 🧰 Common Tools

* 🆕 **Show top border** — Added new toggle.
* 🆕 **Border color** — Added new color option.
* 🆕 **Show gradient on hover** — Added new toggle.
* 🆕 **Circle theme color** — Added new setting.

#### 📰 News

* 🆕 **Show top border** — Added new toggle.
* 🆕 **Border color** — Added new color option.

#### 🏢 Facilities

* 🆕 **Show top border** — Added new toggle.
* 🆕 **Border color** — Added new color option.
* 🆕 **Show all facilities** — Added new toggle.
* 🆕 **Enable auto scroll** — Added new option.

#### 📅 Calendar

* 🆕 **Source data (dropdown)** — Added new selection option.
* 🆕 **Show top border** — Added new toggle.
* 🆕 **Border color** — Added new color option.
* 🆕 **Show border** — Added new toggle.

#### 🎉 Holidays

* ❌ **Change bullet/icon style** — Removed.
* 🆕 **Show bullets** — Added new toggle.
* 🆕 **Show top border** — Added new toggle.
* 🆕 **Border color** — Added new color option.
* 🆕 **Show holiday filter** — Added new toggle.

---

## Version - 1.0.0.1

---

### Fixes

* Resolved an issue with the [Top Navigation](/documentation/docs/design-2/configuration#-1-top-navigation) icon colors.

  * Icons with varying original colors will now display using the site's primary theme color, and change to white when hovered.

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
| 1.0.0.7 | Apr 22 2026    |
