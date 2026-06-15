---
title: Change Log
sidebar_position: 5
---


## Version 1.0.0.3


* ### Exit Setup
   * Fixed the Exit Setup option to properly close the setup wizard after installation.
* ### Wizard Visibility
   * Upgraded The setup wizard is now visible only to Site Collection Administrators.
* ### Header Theme Support
   * Updated the wizard header to use the current SharePoint theme instead of a hardcoded color.
* ### Site Theme Creation
   * Added support to create and apply Site Themes directly through the setup wizard.

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

##  Version 1.0.0.2 

**Release Date:** April 24, 2026  
**Summary:** 13 new features · 14 bug fixes · 7 components improved

---

## 👋 Welcome Banner

**5 new features · 4 fixes**

### What's New

- **[New Feature]** You can now upload images directly from the settings panel without needing to browse SharePoint libraries — making it faster to customize your banner.

- **[New Feature]** Adjust how tall your announcement section appears using a simple slider — perfect for fitting longer messages without cutting them off.

- **[New Feature]** Add content directly in the settings panel instead of creating separate SharePoint lists — saves time and simplifies content management. `Supports Collection Data mode`

- **[New Feature]** Left and right arrows now appear on the banner carousel so visitors can manually browse through announcements at their own pace.

- **[New Feature]** Choose custom colors for your welcome message, date, and time displays using color pickers in the settings panel.

### Fixes & Improvements

- **[Fixed]** The banner now correctly uses your site's secondary brand color instead of always showing the same hardcoded color.

- **[Fixed]** Title and description fields now only show up after you select "Normal Layout" mode — preventing confusion during setup.

- **[Fixed]** The "Select Background Image" option now appears correctly when using Normal Layout mode.

- **[Fixed]** Mobile users now see the complete banner content instead of just half of it — much better experience on phones and tablets.

---

## 📅 Calendar

**1 new feature · 1 fix**

### What's New

- **[New Feature]** Clicking "Add to Outlook" now opens Outlook directly in your browser instead of downloading a file — one less step for users.

### Fixes & Improvements

- **[Fixed]** Calendar colors now match your site's custom theme colors instead of using default colors.

---

## 📰 Company News & Announcements

**1 new feature · 3 fixes**

### What's New

- **[New Feature]** The "Learn More" button now has a visual hover effect to grab attention and encourage clicks.

### Fixes & Improvements

- **[Fixed]** News section now uses your custom site theme colors instead of default colors.

- **[Fixed]** The "Learn More" button now displays in your site's secondary brand color as intended.

- **[Fixed]** News cards no longer overlap or look cramped on mobile devices — they now arrange properly on small screens.

---

## 🔗 Quick Links

**1 new feature · 3 fixes**

### What's New

- **[New Feature]** Control how many quick links display and add a scroll bar when you have more links than fit on screen — keeps the layout clean.

### Fixes & Improvements

- **[Fixed]** The "Hide space above header" toggle now works properly — spacing disappears when you turn it on.

- **[Fixed]** No more extra gap appearing above the header when toggling settings on and off.

- **[Fixed]** Link icons now show the correct color when you hover over them.

---

## 🎨 Site Branding & Setup Wizard

**3 new features**

### What's New

- **[New Feature]** Complete Setup Wizard redesign with multiple setup screens and visual page previews — making it easier to see what you're creating before you publish.
- **[New Feature]** Configure both primary AND secondary brand colors from the branding screen — complete control over your site's color scheme.

- **[New Feature]** The "Review & Apply" button now works on its own — you don't need to click "Apply Theme" separately anymore. `Streamlined workflow`

---

## 📄 Documents

**1 update**

- **[Updated]** Sample documents refreshed with more realistic demo data for testing and presentations.

---

## 🎭 Welcome Screen (Setup)

**2 improvements · 1 cleanup**

### What's New

- **[Improved]** Industry and Employee fields are now optional — skip them if they don't apply to your organization.

### Cleanup

- **[Removed]** Vision and Mission fields removed from the welcome setup screen — fewer fields to fill out during initial setup.

---

## 🐛 General Fixes

- **[Fixed]** Icons no longer disappear when you hover over them — visual bug corrected.

- **[Fixed]** Removed unwanted gaps between web parts — pages now look cleaner and more professional.

---

## 📦 Technical Details

**Package:** SPFx v1.0.0.2  
**Compatibility:** SharePoint Online  
**Components Updated:** 7  
**Breaking Changes:** None

---

## 🎯 Impact Summary

**For Content Editors:**

- Faster content updates with Collection Data support
- Easier image uploads without library navigation
- More control over colors and spacing

**For Site Owners:**

- Complete branding control with primary + secondary colors
- Simplified setup wizard workflow
- Better mobile experience for all visitors

**For End Users:**

- Cleaner mobile layouts across all components
- Smoother "Add to Outlook" experience
- Visual improvements with hover effects and proper colors

---

## 💬 Need Help?

- **Documentation:** [Design 5 Documentation](https://documentation.sharepointdesigns.com//docs/design-5/)
- **Support:** support@sharepointdesigns.com
- **Website:** www.sharepointdesigns.com
