---
title: Spotlight 01
sidebar_position: 1
---
## Overview

This web part highlights upcoming Birthdays, Work Anniversaries, and New Joiners from your organization, using data stored in a SharePoint list. Users can quickly browse employee milestones and send greetings with ease. It provides an engaging, celebratory experience that keeps your team connected and informed.

![Spotlight 01](assets/screenshot-2025-11-10-164917.png)

## Configuration

### Header Settings

<details>
<summary>📸 View Header Settings Screenshots</summary>

![Header](assets/screenshot-2025-11-10-164757.png)

</details>

| Name                       | Purpose                                                 | Example / Options       |
| -------------------------- | ------------------------------------------------------- | ----------------------- |
| Header Visibility          | Toggle to show or hide the Web Part title               | Show Header/Hide Header |
| WebPart Title              | Specify a title for the Spotlight Web Part.             | “Spotlight”             |
| Choose title heading level | Select the heading level (H1–H4) for the WebPart title. | Heading 3               |

- - -

### General Settings

<details>
<summary>📸 View General Settings Screenshots</summary>

![General](assets/screenshot-2025-11-10-165214.png)

</details>

| Name                         | Purpose                                            | Example / Options   |
| ---------------------------- | -------------------------------------------------- | ------------------- |
| Select List                  | Choose which SharePoint list to display data from. | Employee Spotlights |
| Filter the Period            | Select a filter period for displaying data         | Dropdown            |
| Show Category Filter Buttons | Toggle to show category filter                     | On/Off              |
| Filter by Category           | To display a particular category alone.            | Dropdown            |
| Event Categories             | Collection Data to add new Category                | Collection Data     |

- - -

### Managing Categories

The **Event Categories** control lets you add, rename, or remove the categories shown as filter buttons on the card. Categories aren't limited to Birthday, Anniversary, and New Joiner — you can add any custom category (e.g. Promotions, Certifications, Awards, Employee Achievements, Team Milestones, Life Events & Milestones).

Each row has two fields:

| Field         | Purpose                                                        |
| ------------- | --------------------------------------------------------------- |
| Category Name | The label shown on the filter button and used to tag items.     |
| Category Icon | An emoji shown on the card for items in that category.          |

**Adding a category** automatically adds it as a valid choice on the list's `Category` column — no need to edit the list manually.

**Renaming a category** (editing an existing row's name, without reordering rows) automatically:
- Replaces the old choice with the new one on the list's `Category` column.
- Re-tags every existing item that was using the old name to the new name.

If a rename can't be applied (e.g. a permissions or connectivity issue), an error banner appears explaining what failed — check it before assuming the rename went through. Reordering rows in the same save as a rename isn't reliably detected as a rename, since the control doesn't track a stable row identity — rename one row at a time without reordering for predictable results.

**Which date column each category uses:**

| Category                                             | Date column  | Recurs every year? |
| ----------------------------------------------------- | ------------ | ------------------- |
| Birthday                                               | `DOB`        | Yes                  |
| Anniversary (any name containing "anniversary")        | `DateOfJoin` | Yes                  |
| New Joiner (any name containing "joiner")              | `DateOfJoin` | No — exact date only |
| Any other/custom category                              | `EventDate`  | No — exact date only |

Birthday and Anniversary are treated as recurring annual events, so a period filter like "This Month" matches them by month/day regardless of the year stored. New Joiner and every custom category are treated as one-time events — they only match a period filter in the actual month **and year** they happened.

- - -

### Layout Settings

<details>
<summary>📸 View Layout Settings Screenshots</summary>

![Layout - Grid](assets/screenshot-2026-08-24-173132.png "Layout - Grid")

![Layout - Carousel](assets/screenshot-2026-08-24-173223.png "Layout - Carousel")

</details>

| Name | Purpose | Example / Options |
| ---- | ------- | ----------------- |
| Layout View | To display cards in two layouts | Grid/ Carousel |
| Loading Shimmer & Card Animations | Toggle to Show Shimmer & Animations on card loading | Enabled/Disabled |
| Auto Play | Toggle to autoplay the carousel | Enabled/Disabled |
| Auto Play Speed (seconds) | Slider to control the speed of the autoplay | Slider |
| Navigation Arrows | Toggle to show/hide the navigation arrows | On/Off |
| Navigation Dots | Toggle to show/hide the navigation dots | On/Off |

- - -

### Apperanace Settings

<details>
<summary>📸 View Appearance Settings Screenshots</summary>

![Appearance-1](assets/screenshot-2025-11-10-170733.png)

![Appearance-2](assets/screenshot-2025-11-10-170802.png)

</details>

| Name                             | Purpose                                                                            | Example/Options     |
| -------------------------------- | ---------------------------------------------------------------------------------- | ------------------- |
| Cards to Show                    | Adjust the Slider to show number of cards to be displayed                          | Slider              |
| Category Filter Alignment        | Select the desired alignment for the filter category                               | Choice              |
| Show Border                      | Toggle to show or hide the border                                                  | On/Off              |
| Show Shadow on Border            | Toggle to show or hide the shadow for border                                       | On/Off              |
| Border Radius For Border (in px) | Adjusts the roundness of corners for items.                                        | Slider(8px to 25px) |
| Accent Color                     | Choose the background color applied to the category tag on the card                | Color Picker        |
| Card Color 1                     | Choose the bacckground color applied on the first card                             | Color Picker        |
| Card Color 2                     | Choose the bacckground color applied on the second card                            | Color Picker        |
| Card Color 3                     | Choose the bacckground color applied on the third card                             | Color Picker        |
| Color Mode                       | Select the color mode for Send Greetings button and Category                       | Dropdown            |
| Theme Color                      | Select the theme color to be applied for Send Greetings button and category button | Dropdown            |

- - -

### Admin Settings

<details>
<summary>📸 View Admin Settings Screenshots</summary>

![Admin](assets/screenshot-2025-11-10-135757.png)

</details>

| Name            | Purpose                               | Example/Options |
| --------------- | ------------------------------------- | --------------- |
| Show Admin Menu | Toggle to show or hide the Admin Menu | Show/Hide       |

- - -

### About

<details>
<summary>📸 View About Screenshots</summary>

![About](assets/screenshot-2025-11-10-142145.png)

</details>

| Name                   | Purpose                                                           |
| ---------------------- | ----------------------------------------------------------------- |
| **Developer Info**     | Indicates the web part is built by **SharePoint Designs**.        |
| **Documentation Link** | Links to this documentation for easy reference.                   |
| **Activate License**   | Button to activate the licensed or premium version if applicable. |

- - -
