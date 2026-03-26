---
title: Configuration
---
### Note:

The Home page should be configured using the "Healthcare 2 Setup" web part to ensure that the required lists and libraries are created automatically. Without this configuration, users will need to manually create dedicated lists or libraries for the respective web parts.

Configuration settings for each web part.

## 🧪1. Site config (Application customizer)

## Steps to Test and Apply Template

1. On the SharePoint site, locate the new icon in the top suite bar (on the right side of the header bar). This icon opens the design template panel.

   ![](assets/addapp.png)
2. Click the icon to open the Page creation Panel.

   ![](assets/pagecreationpannel.png)
3. In the panel:

   * Select the **"Home Page"** template
   * Click the **Create Page** button

     ![](assets/createpagebtn.png)
4. Do not close or refresh the browser. A pop-up will appear to create the required lists and libraries:

* `Employee Spotlight` list
* `Document Content` library
* `Take a Breath` library
* `Gallery` library
  (_Mock items are added automatically for Employee Spotlight, Document Content, Take a Breath, Gallery, News)

5. After the items are created, the site page will **refresh automatically**, and it will continue to creating page and adding webparts.
6. Once setup is complete, a button will appear to open the newly created homepage. Click it to view the result.

   ![](assets/sucess.png)

- - -

# Healthcare 2 – Web Parts Configuration

Below are the configuration details for each web part included in the Healthcare 2 solution.
> **Note:** Images are referenced from your Figma file. Replace Figma links with exported static images in production documentation.

---

## 🟦 2. Employee Spotlight

Showcase employees’ birthdays, anniversaries, and new joiners in a modern carousel style with flexible filtering, color modes, and background options.

![Employee Spotlight](figma-link-for-employee-spotlight)

### Configuration Options

| Name                                | Purpose                                                         | Example/Options                         |
|------------------------------------- |-----------------------------------------------------------------|------------------------------------------|
| **Show Header**                     | Show/hide the section header                                    | Yes / No                                 |
| **Web Part Title**                  | Set the web part title                                          | Employee Spotlight                       |
| **Heading Level**                   | Choose title heading (h1–h6/custom px)                          | `h3`, `custom: 24px`                     |
| **Custom Font Size**                | Font size if heading is "custom"                                | 12–72 px                                 |
| **Select List**                     | Select SharePoint list as data source                           | List Picker                              |
| **Filter the Period**               | Filter spotlights by date period                                | Today, This Week, This Month, etc.       |
| **Show Category Filter**            | Show/hide filter by event type                                  | Yes / No                                 |
| **Filter by Category**              | Filter employees by event type                                  | All, Birthday, Anniversary, New Joiner   |
| **Category Filter Alignment**       | Align category filter buttons                                   | Left, Center, Right                      |
| **Show Border**                     | Add border around cards                                         | Enable / Disable                         |
| **Show Shadow on Border**           | Shadow effect on card border                                    | Enable / Disable                         |
| **Border Radius**                   | Set card border radius (px)                                     | 8–25 px                                  |
| **Enable Background Image 1**       | Show a background image                                         | Enable / Disable                         |
| **Background Image 1**              | Choose/upload first background image                            | Image Picker                             |
| **Enable Top Flag Image**           | Show a second, “flag” style image above                         | Enable / Disable                         |
| **Top Flag Image**                  | Choose/upload flag image                                        | Image Picker                             |
| **Color Mode**                      | Pick coloring system                                            | Theme, Manual, Branding                  |
| **Custom Colors**                   | Set title, elements, category colors (based on color mode)      | Color Picker/Theme Dropdown              |
| **Carousel Auto-Play**              | Items auto-advance                                              | Enable / Disable                         |
| **Auto Play Speed**                 | How many seconds between advances                               | 1–60 seconds                             |
| **Show Navigation Arrows**          | Show/hide carousel arrow controls                               | Yes / No                                 |
| **Show Admin Menu**                 | Restrict advanced settings to chosen admins                     | Yes / No                                 |
| **Admins**                          | Choose web part admins                                          | People Picker                            |

---

## 🟦 3. Announcement

Display and rotate important company announcements in a banner with icon, expiry date, and carousel features.

![Announcement Bar](figma-link-for-announcement)

### Configuration Options

| Name                          | Purpose                                    | Example/Options                                     |
|-------------------------------|--------------------------------------------|-----------------------------------------------------|
| **Header Title**              | Announcement bar title                     | [Text field]                                        |
| **Announcement Icon**         | Choose a key icon for the bar              | Icon Picker                                         |
| **Announcement Items**        | Add, remove, edit (Title, link, expiry date, open in tab)| Collection List                         |
| **Enable Auto Play**          | Announcements cycle automatically          | Yes / No                                            |
| **Auto Play Speed**           | Seconds between rotation                   | 1–20                                                |
| **Enable Infinite Loop**      | Loop from last to first                    | Yes / No                                            |
| **Show Arrows**               | Show/hide carousel navigation              | Yes / No                                            |
| **Accent Color Theme**        | Change color scheme                        | Theme color dropdown + preview                      |
| **Hide If Empty**             | Hide web part if no valid announcements    | Yes / No                                            |

---

## 🟦 4. Document Content

A dynamic display of documents from a selected library, with pagination, navigation, badges, and admin options.

![Document Content](figma-link-for-document-content)

### Configuration Options

| Name                          | Purpose                                    | Example/Options                     |
|-------------------------------|--------------------------------------------|-------------------------------------|
| **Show Webpart Title**        | Show/hide the header                       | Yes / No                            |
| **Title**                     | Display title                              | Document Content                    |
| **Heading Level**             | Title heading (h2–h4/custom px)            | h3 / custom px                      |
| **Custom Font Size**          | If heading is "custom"                     | 12–72 px                            |
| **Select a Library**          | Document library to surface                | Library Picker                      |
| **Goto Library**              | Button to open library in new tab          | (auto, if library selected)         |
| **Enable Notification Badge** | Highlight new or updated files             | On / Off                            |
| **Highlight by**              | Mark changes by upload or update           | Uploaded/Modified                   |
| **Show changes from**         | Recently changed window                    | 7, 30, 365 days                     |
| **Choose layout**             | Choose layout type                         | Document Content                    |
| **Show folder title**         | Show folder title in grid                  | Yes / No                            |
| **Number of folders/row**     | Adjust grid density                        | 1–12                                |
| **Show Navigation**           | Next/prev between pages of files           | On / Off                            |
| **Enable borders**            | Border render on items/cards                | Yes / No                            |
| **Enable shadow**             | Drop shadow effect                         | Yes / No                            |
| **Open files in new tab**     | Link open behavior                         | New tab / Same tab                  |
| **Show Admin**                | Restrict admin options                     | Yes / No                            |
| **Admins**                    | Choose people with admin rights            | People Picker                       |

---

## 🟦 5. Gallery

Display an image gallery from a document library, with categories, pagination, uploading, visual styling, and navigation.

![Gallery](figma-link-for-gallery)

### Configuration Options

| Name                          | Purpose                                    | Example/Options                     |
|-------------------------------|--------------------------------------------|-------------------------------------|
| **Webpart Title**             | Set title                                  | Gallery                             |
| **Heading Level**             | Heading type                               | h1–h6, custom px                    |
| **Custom Font Size**          | px if heading is custom                    | 12–72 px                            |
| **Title Theme Color**         | Pick color for web part title              | Theme color (previewed)             |
| **Select Library**            | Pick image library                         | Library Picker                      |
| **Goto Library**              | Button (auto) if library selected          | Opens SharePoint library            |
| **Show Categories**           | Show/hide category filtering               | On / Off                            |
| **Show Pagination**           | Prev/next controls                         | Yes / No                            |
| **Items Per Row**             | Gallery density                            | 2–10                                |
| **Show Image Titles**         | Show/hide text below images                | Yes / No                            |
| **Show Navigation Arrows**    | Slideshow carousel controls                | Yes / No                            |
| **Show Upload Button**        | Add-to-gallery (if perms allow)            | Yes / No                            |
| **Show Border**               | Add border to images                       | Yes / No                            |
| **Show Shadow**               | Shadow style                               | Yes / No                            |

---

## 🟦 6. Organization Chart

Shows employee hierarchy from your tenant/user profiles, with card layouts, filtering, sizing, and style controls.

![Organization Chart](figma-link-for-org-chart)

### Configuration Options

| Name                          | Purpose                                    | Example/Options                 |
|-------------------------------|--------------------------------------------|---------------------------------|
| **Webpart Title**             | Title for org section                      | Organization Chart              |
| **Heading Level**             | h1–h6 or custom px                         | h3 / 24px                       |
| **Custom Font Size**          | Custom px, if heading = “custom”           | 12–72 px                        |
| **Hide Header**               | Show/hide top section                      | Yes / No                        |
| **Hide Search**               | Show/hide search box                       | Yes / No                        |
| **Show Border**               | Card border                                | Yes / No                        |
| **Show Shadow**               | Card shadow effect                         | Yes / No                        |
| **Height**                    | Height of the whole chart px               | 200–1000 px                     |
| **Card Layout**               | Layout options (rectangle, flexible)       | Layout 1 (more coming)          |
| **Card height/width**         | Adjust card size                           | Rectangle/Flexible px           |
| **Category Filter**           | Show filter                                 | Yes / No                        |
| **Filter Field**              | Field to filter by                         | department/jobTitle/custom      |

---

## 🟦 7. News

News rollup and display from SharePoint sites with category filtering, audience selection, and layout control.

![News](figma-link-for-news)

### Configuration Options

| Name                   | Purpose                                        | Example/Options                |
|------------------------|------------------------------------------------|--------------------------------|
| **Webpart Title**      | Set news section title                         | News                           |
| **Heading Level**      | h1–h6, custom px                               | h3 / custom px                 |
| **Custom Font Size**   | If heading is custom                           | 12–72 px                       |
| **Hide Header**        | Show/hide header                               | Yes / No                       |
| **Show See All Button**| “See all” navigation link                      | Yes / No                       |
| **See All Link**       | URL for “See all”                              | URL                            |
| **Search Sites**       | Which SharePoint sites to roll up from         | Site Picker                    |
| **Target Audience**    | Restrict viewership                            | People Picker                  |
| **News Category**      | Filter by managed category                     | Dropdown                       |
| **Apply Filters**      | Set additional filters                         | Multi-select                   |
| **Items to Show**      | How many items                                 | Numeric                        |
| **Show Border/Shadow** | Visual styling                                 | On / Off                       |
| **Open in New Tab**    | Link click opens in new tab                    | On / Off                       |

---

## 🟦 8. Take a Breath

A “relax and reset” section with a breathing exercise animation and description text, drawn from a list.

![Take a Breath](figma-link-for-take-a-breath)

### Configuration Options

| Name                                 | Purpose                                | Example/Options           |
|-------------------------------------- |----------------------------------------|---------------------------|
| **Webpart Title**                    | Title above breathing animation        | Take a Breath             |
| **Heading Level**                    | Type of heading                        | h2 / 24px                 |
| **Custom Font Size**                 | If custom heading                      | 12–72 px                  |
| **Select Library**                   | Source for description                 | Library Picker            |
| **Goto Library**                     | Open list in new tab (auto, if set)    | Yes / No                  |
| **Descriptions**                     | Add/edit calming exercise descriptions | Collection/Inline Edit    |
| **Carousel Settings**                | Control auto-play, speed, infinite, etc| Toggles/sliders           |
| **Show Border/Shadow**               | Surround the exercise                  | On / Off                  |
| **Theme Color**                      | Title and main accent color            | Theme Picker              |

---

## 🟦 9. Welcome Banner

Greets users, displays personalized and site messages, supports movable cards, custom backgrounds, and quick links.

![Welcome Banner](figma-link-for-welcome-banner)

### Configuration Options

| Name                              | Purpose                                               | Example/Options  |
|----------------------------------- |-------------------------------------------------------|------------------|
| **Welcome Message**               | Main greeting                                         | [Text]           |
| **Show User Card**                | Toggle user’s name/location card                      | Yes / No         |
| **Show Announcements**            | Enable announcement tiles                             | Yes / No         |
| **Background Image**              | Upload/change background                              | Picker           |
| **Enable Dragging**               | Move cards to customize layout                        | On / Off         |
| **Reset Layout**                  | Snap cards to default arrangement                     | Button           |
| **Show Quick Links**              | Quick access tile navigation                          | On / Off         |
| **Quick Link Options**            | Layout, icon size, alignment etc.                     | Toggles/Dropdown |
| **Appearance Settings**           | Control card colors, radius, shadow                   | Theme/Sliders    |
| **About/Admin Area**              | Docs, licensing, contact info                         | Links            |
