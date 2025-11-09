---
title: News 01
sidebar_position: 1
---
## Overview

This News web part showcases recent articles and events with eye-catching images and clear categorization by topics like Finance, Industry, HR, and Technology. Users can quickly browse and filter news items, keeping everyone informed and connected on the SharePoint site.

![](assets/screenshot-2025-11-09-232227.png)

## Configuration

### Header Settings

<details>
<summary>📸 View Header Settings Screenshots</summary>

![Header Settings](assets/screenshot-2025-11-09-234316.png)

</details>

| Name                       | Purpose                                                     | Example / Options          |
| -------------------------- | ----------------------------------------------------------- | -------------------------- |
| Webpart title              | Specify a title for the News Web Part.                      | “NEWS”                     |
| Choose title heading level | Select the heading level (H1–H6) for the Web Part title.    | Heading 3                  |
| Hide webpart title         | Toggle to show or hide the Web Part title.                  | Show / Hide                |
| Show see all button        | Display or hide the “See All” link for News navigation. | Show / Hide                |
| See all link              | Provide a URL for the “See All” button to redirect users.  | `{siteUrl}/_layouts/15/news.aspx` |

- - -

### General Settings

<details>
<summary>📸 View General Settings Screenshots</summary>

![General Settings](assets/cal01propertypane1.png)

</details>

| Name                     | Purpose                                                         | Example / Options                     |
| ------------------------ | --------------------------------------------------------------- | ------------------------------------- |
| Layout                   | Choose how events are displayed.                                | Horizontal View / Vertical View       |
| Select the option Events | Select the event source for the Calendar.                       | Events from SharePoint List           |
| Select events list       | Choose the SharePoint list from which events will be displayed. | Dropdown of event lists               |
| Filter Events            | Control which past and upcoming events appear.                  | “Previous 6 months + upcoming events” |

- - -

### Appearance Settings

<details>
<summary>📸 View Appearance Settings Screenshots</summary>

![Appearance Settings](assets/cal01propertypane2.png)

</details>

| Name                     | Purpose                                                        | Example / Options           |
| ------------------------ | -------------------------------------------------------------- | --------------------------- |
| Show Icon/Banner Options | Toggle to show or hide the icon/banner in the calendar header. | Yes / No                    |
| Show Icon                | Display the calendar icon in the header.                       | Checkbox                    |
| Show Banner              | Display a banner background behind the title.                  | Checkbox                    |
| Show Calendar            | Toggle the visibility of the main calendar component.          | Yes / No                    |
| Show Border              | Display a border around the calendar component.                | Yes / No                    |
| Show Top Border          | Add a top border above the web part.                           | Yes / No                    |
| Border Radius            | Adjust the roundness of calendar month corners.                | Slider (e.g., 25)           |
| Background Color         | Set a background color for the calendar section.               | Color Picker                |
| Text Color               | Choose a color for event titles and text.                      | Color Picker (Hex: #992525) |
