---
title: "Change Log "
sidebar_position: 5
---


## Version - 1.0.0.2

### Healthcare 03  (Wizard Enhancements & Fixes)


- Redesigned Wizard Experience  The setup wizard has been rebuilt with a cleaner layout, an improved header, a close button, and a footer, walking you through a structured step-by-step flow.
- Jump Between Steps  Click any previously completed step to go back and make changes — no need to move through the wizard in order.
- Progress Saved Automatically   The wizard remembers where you left off across steps, so your setup progress isn't lost if you close and reopen it.
- New Extension Setup  Implemented the new extension-based site setup for Healthcare 03.
- Exit Setup for Existing Users  If your home page is already set up, you can exit the wizard without configuring the site again — your existing page and details are retained.
- Exit Setup Fix  Fixed the Exit Setup option to properly close the setup wizard after installation.
- Wizard Visibility  The setup wizard and its extension icon are now shown only to Site Collection Administrators, preventing access for unauthorized users.
- Header Theme Support  The wizard header now uses the current SharePoint theme instead of a hardcoded color.
- Auto-Filled Organization Details The Organization Name is pre-filled from your Microsoft 365 organization and the Site Title from your current site — both editable, with the Site Title saved automatically as you type.
- Industry Selection Added an Industry picker to identify your organization type during setup.
- Vision Details Added Vision Title and Vision Statement fields captured during setup.
- Common Questions Panel  Added an expandable FAQ panel alongside the setup form to answer common questions from the blob.
- Live Preview Panel  The Branding screen now uses a split layout with a right-side live preview that dynamically reflects your branding choices in real time as you customize.
- Site Theme Creation  Create and apply Site Themes directly through the setup wizard.
- Automatic Brand Colors from Logo  After uploading your site logo, the wizard automatically extracts matching brand colors to build your theme.
- Favicon Upload  Upload the favicon shown in the browser tab, with live preview.
- Regional Settings  Configure time zone, locale, and working hours directly from within the wizard.
- Appearance Settings  Show/hide the tenant logo, site logo, and site title, toggle the header color, adjust web part spacing, enable full-width pages, set footer alignment, and control corner roundness.
- Font Selection  Choose a font package for the whole site, or open the font manager to add and edit fonts.
- Footer Text Visibility-  Improved footer text color for better readability.


## Version - 1.0.0.1

### Healthcare 03 Site Setup (Enhancements & Fixes)

- Updated the Configuration Logs screen UI.
- Removed unnecessary console errors from the extension setup.
- Updated the Organization screen by renaming the **Apply Template** button to **Continue to Home Screen**.

---

### Enhancements & Fixes

#### Footer (Enhancements)

- 🔄 Updated footer alignment from left-aligned to center-aligned for improved layout balance

#### Training Videos (Bug Fixes)

- Resolved issue with the filter functionality to ensure proper video filtering.

#### News Web Part

- Improved image resolution for better visual clarity.
- Increased news description font size for better readability on larger screens.
- Fixed issue where duplicate categories were being created from the category column.
- Added validation to check if a category already exists before creating a new one.
