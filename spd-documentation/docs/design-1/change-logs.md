---
title: Change Log
sidebar_position: 5
---

## Version - 1.0.0.5
  
---
* ### Full Width Loader Alignment Fix
   * The loader behavior has been updated for the Full Width layout configuration.

* ### Footer Styling and Default Content Enhancement

  * The footer section has been updated with refined color styling and improved default content configuration, ensuring a more consistent visual appearance and providing meaningful initial content during page setup.

## Version - 1.0.0.4

---

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

## Version - 1.0.0.3

---


## Release Summary

This release includes major improvements to the Design 1. The solution has also been upgraded to SPFx v1.22.2, bringing improved performance, updated dependencies, and compatibility with the latest SharePoint features.

Several web parts have been enhanced with new capabilities and usability improvements, including:
- Collection Data support in Quick Links, Breaking News, and FAQ web parts
- Improved “See All” navigation experience for RSS Feed and FAQ
- Documentation and usability enhancements in the License Module
- Add to Outlook functionality in the Calendar Web Part
- Meaningful FAQ content replacing placeholder data
- Breaking News documentation updates for improved configuration clarity

Overall, this release focuses on improved setup experience, modernized platform support, enhanced configurability, and better end-user usability across the solution.

### Design 1 Site Setup

- 🆕 Upgraded with new Wizard Configuration has Welcome Screen, Organizational Details Screen, Branding Screen(which has Regional Settings update, Brand Center Update, site logo) and Review with apply template

### SPFx Upgrade (v1.22.2)

- 🆕 Upgraded SharePoint Framework to v1.22 for improved performance and latest feature support
- 🚀 Updated project dependencies and packages to align with SPFx 1.22.
- 🧹 Cleaned up deprecated/unused configurations as part of upgrade.

---

### Enhancements & Fixes

### License Module

- 🆕 Added documentation link near the Activate button in the License modal for better user guidance

### Quick Links

- 🆕 Added support for Collection Data as a data source, configurable through the Property Pane.

### Breaking News

- 🆕 Added support for Collection Data as a data source, configurable through the Property Pane.
- In Breaking News documentation, change the column type from URL → Hyperlink. - completed

### RSS Feed

- 🔄 Updated “See All” functionality to navigate to a Site Page where all RSS News are available

### FAQ

- 🆕 Added support for Collection Data as a data source, configurable through the Property Pane.
- 🔄 Updated “See All” functionality to navigate to a Site Page where all FAQs are available
- 🆕 Replaced placeholder/mock questions with meaningful content.

### Calendar Web Part

- 🆕 Implemented Add to Outlook functionality for events
