## sidebar_position: 3

# Configuration

Configuration settings for each web part.

## 🧭 1. Top Navigation

### 📋 Details

- **Intuitive Access**: Minimalist top navigation for easy access to essential
  intranet areas.
- **Customizable Menus**: Simplify menus to suit your organization's needs
  without unnecessary clutter.

![Top Navigation](assets/TopNavigation.png)

### List Config

Note: For the **Top Navigation** section, create a list with the following columns

| 🏷️ Column Name (Case Sensitive) | 🔣 Column Type              |
| ------------------------------- | --------------------------- |
| **Icon**                        | 🖼️ Image                    |
| **URL**                         | 🔗 Hyperlink                |
| **Order**                       | 🔢 Number                   |
| **TargetWindow**                | 📁 Choice (Choices- Yes,No) |

---

### 📄 Top Navigation Web Part - Property Pane Configuration

![alt text](assets/Topnavigationpropertypane1.png)
![Top Navigation](assets/Topnavigationpropertypane2.png)

#### 📌 Header Settings

| 🏷️ Name       | 🎯 Purpose                               | 💡 Select Option |
| ------------- | ---------------------------------------- | ---------------- |
| WebPart Title | Title displayed for the web part         | TOP NAVIGATION   |
| Hide Title    | Toggle to show or hide the WebPart title | Show / Hide      |

#### 🎨 Appearance Settings

| 🏷️ Name                | 🎯 Purpose                                        | 💡 Select Option      |
| ---------------------- | ------------------------------------------------- | --------------------- |
| Layouts                | Defines the layout of the navigation items        | Horizontal            |
| Alignment              | Aligns the navigation content                     | Left / Center / Right |
| Show Gradient on hover | Toggle to show or hide gradient effect on hover   | Show / Hide           |
| Show Border            | Toggle to show or hide border around the web part | Show / Hide           |
| Border color           | Sets the color of the border around the web part  | Color Picker          |

#### ⚙️ General Settings

| 🏷️ Name                    | 🎯 Purpose                                         | 💡 Select Option |
| -------------------------- | -------------------------------------------------- | ---------------- |
| Select top navigation list | Selects the SharePoint list for navigation content | TopNavigation    |

#### 🔐 Admin Settings

| 🏷️ Name         | 🎯 Purpose                                | 💡 Select Option |
| --------------- | ----------------------------------------- | ---------------- |
| Show Admin Menu | Toggle to show admin-only features        | Show / Hide      |
| Admin Users     | Specifies users who can access admin menu | xyz              |

#### ℹ️ About Section

| 🏷️ Name                     | 🎯 Purpose                                                                           |
| --------------------------- | ------------------------------------------------------------------------------------ |
| **Developer Info**          | Indicates the web part is developed by**SharePoint Designs**.                        |
| **Documentation Link**      | Provides access to user and admin documentation for further guidance.                |
| **Activate License Button** | A button to activate the premium or licensed version of the web part, if applicable. |

## 📰 2. Welcome Banner

### 📋 Details

- **Personalized Welcome Banner** – Greets the user by name with the current date and time, creating a friendly and engaging intranet experience.
- **Inspirational Messaging** - A sleek banner featuring a slider 4ha4 highlights
  your organization's Vision, Mission, and Values.

![Welcome Banner](assets/WelcomeBanner.png)

---

### 🏷️ Welcome Banner Web Part – Property Pane Configuration

The **Welcome Banner** web part delivers inspirational messaging through a configurable banner slider that emphasizes the organization's **Vision**, **Mission**, and **Values**.

![](assets/WelcomeBannerPropPanel.png) ![alt text](assets/WBPropPanel2.png)

#### ⚙️ General Settings

This section allows customization of the **Welcome Banner** for a department or contact information display. The following configurable options are available:

| 🏷️ Name                  | 🎯 Purpose                                                                                                                                                                                    | 💡 Select Option                                                     |
| :----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Welcome message**      | Text displayed as a greeting to the user.<br /><br />You can personalize the message using: `{firstName}`, `{lastName}`, or `{fullName}`. -- Eg: Welcome `{firstName}`, to SharePoint Designs | "Hello`{firstName}`"                                                 |
| **Format Date and Time** | A date-time picker to display the current date and time in a formatted manner.                                                                                                                | "Thursday 14th Jul, 2022, 4:27 PM"                                   |
| **Title**                | Heading or main focus of the banner.                                                                                                                                                          | "VISION"                                                             |
| **Description**          | A short, impactful message summarizing the theme of the banner.                                                                                                                               | "Maximizing SharePoint, Automation And AI, Making Work Fun."         |
| **Sub text**             | A supporting statement that expands on the main description.                                                                                                                                  | "To deliver innovative, aesthetically pleasing, flawless intranets." |
| **Text color**           | Change the text color of the paragraph                                                                                                                                                        | Color Picker                                                         |
| **Badge font size**      | Change the font size of the badge text.                                                                                                                                                       | Slider                                                               |
| **Heading font size**    | Change the font size of the heading text.                                                                                                                                                     | Slider                                                               |
| **Paragraph font size**  | Change the font size of the paragraph text.                                                                                                                                                   | Slider                                                               |
| **Change background**    | Option to upload a custom background image for the banner.                                                                                                                                    | Select an image using the "Select Image" control.                    |

## 🔗 3. Common Tools

### 📋 Details

- **Essential Resources**: Provide immedia4e access to frequently used tools
  and documents.
- **Minimalist Icons**: Use clean icons and labels for straightforward
  navigation.

![Common Tools](assets/Quicklinks.png)

### List Config

Note: For the **Common Tools** section, create a list with the following columns

| 🏷️ Column Name (Case Sensitive) | 🔣 Column Type              |
| ------------------------------- | --------------------------- |
| **Icon**                        | 🖼️ Image                    |
| **Link**                        | 🔗 Hyperlink                |
| **OrderBy**                     | 🔢 Number                   |
| **OpenIn**                      | 📁 Choice (Choices- Yes,No) |

### 🏷️ Common Tools Web Part – Property Pane Configuration

- The Common Tool Links web part offers centralized access to frequently used external applications and team tools. It improves efficiency by simplifying access to all essential resources from one place.

![Welcome Banner](assets/QuicklinksPropertypane.png)
![alt text](assets/QuicklinksPropertypane1.png)

#### 📌 Header Settings

| 🏷️ Name           | 🎯 Purpose                                 | 💡 Select Option |
| ----------------- | ------------------------------------------ | ---------------- |
| **WebPart Title** | Title displayed at the top of the web part | COMMON TOOLS     |
| **Hide Title**    | Toggle to show or hide the web part title  | Show / Hide      |

#### ⚙️ General Settings

| 🏷️ Name             | 🎯 Purpose                                                                     | 💡 Select Option        |
| ------------------- | ------------------------------------------------------------------------------ | ----------------------- |
| **Select a list**   | Text displayed as a greeting to the user.                                      | CommonTools             |
| **Add/Update list** | A date-time picker to display the current date and time in a formatted manner. | Action: Add/Update      |
| **Limit**           | Sets the number of quick links to display                                      | 1–50 (Slider set to 16) |

#### 🎨 Appearance Settings

| 🏷️ Name                    | 🎯 Purpose                                                                          | 💡 Select Option |
| -------------------------- | ----------------------------------------------------------------------------------- | ---------------- |
| **Show top border**        | Toggle to show or hide the sharp top border                                         | On / Off         |
| **Show borders**           | Toggle to show or hide border around the web part                                   | On / Off         |
| **Border color**           | Select the color of the top border (will show only when show top border is enabled) | Color Picker     |
| **Show gradient on hover** | Highlight the link background on hover                                              | Color Picker     |
| **Icon background color**  | Change the background color of the icon                                             | Color Picker     |

## 📰 4. News

### 📋 Details

- **Focused Updates**: Keep everyone informed with concise company news.
- **Clear Presentation**: News displayed in an easy to read, minimalist
  format.

![News](assets/News.png)

### 🏷️ Featured News Web Part

The **Featured News** web part by SharePoint Designs is designed to keep everyone informed with concise, visually engaging company news. This component supports clean, minimalist layouts and integrates well with RSS feeds and filtering options for dynamic content display.

![NewsPropertypane](assets/featurednews1.png)
![NewsPropertypane2](assets/featurednews2.png)

#### 📌 Header Settings

| 🏷️ Name              | 🎯 Purpose                                        | 💡 Select Option         |
| -------------------- | ------------------------------------------------- | ------------------------ |
| **Webpart Title**    | Set a custom title for the web part.              | NEWS                     |
| **Hide Title**       | Toggle to show or hide the web part title.        | Show                     |
| **Image Resolution** | Recommended image resolution for optimal display. | 1300x400px or 1300x450px |

#### 🎨 Appearance Settings

| 🏷️ Name                     | 🎯 Purpose                                                                          | 💡 Select Option |
| --------------------------- | ----------------------------------------------------------------------------------- | ---------------- |
| **Choose Layout**           | Select the visual layout for displaying news.                                       | Filmstrip        |
| **Show top border**         | Toggle to show or hide the sharp top border                                         | On / Off         |
| **Show borders**            | Toggle to show or hide border around the web part                                   | On / Off         |
| **Border color**            | Select the color of the top border (will show only when show top border is enabled) | Color Picker     |
| **Items to Show per Slide** | Set how many news items appear in each slide.                                       | 3                |

#### ⚙️ General Settings

| 🏷️ Name                  | 🎯 Purpose                                                                                                               | 💡 Select Option                        |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------- |
| **Search Sites**         | Search and select the site(s) for the news source.                                                                       | current site                            |
| **Enable RSS Feed**      | Toggle to display external RSS news feeds.                                                                               | On                                      |
| **RSS Links**            | Manage external RSS feed links.                                                                                          | [Manage Links]                          |
| **RSS API Key**          | Provide or generate an API key for secure RSS integration.                                                               | 7kmmp5wzpx2dyt4f4p3trgqlpwnxtz91kxcc... |
| **Show Search Box**      | Toggle to include a search box for news items.                                                                           | Off                                     |
| **Show Sort By**         | Enable sorting functionality (e.g., by date or title).                                                                   | On                                      |
| **Show See All Button**  | Toggle to display a “See All” button linking to full news listing.                                                       | On                                      |
| **Show Category Filter** | Note: This should be enabled only if the news is tagged to any category. Toggle to enable filtering content by category. | Off                                     |
| **News Category**        | Select the available choice column to apply filters.                                                                     | choose available choice column          |
| **Apply Filters**        | Select the available options from the News Category selected.                                                            | (Not Selected)                          |
| **View All URL**         | Set the page URL for viewing the full list of news items.                                                                | `{siteUrl}/_layouts/15/news.aspx`       |
| **Target Audience**      | Define audience targeting for news content visibility.                                                                   | (Empty)                                 |
| **Manage News Posts**    | Link to the interface for managing and editing news posts.                                                               | [Manage News Posts]                     |

## 🏢 5. Facilities

### 📋 Details

- **Organizational Facilities**: Highlight various facilities of your organization
  with brief descriptions and images.
- **Visual Engagement**: Use a clean layout to showcase offices,
  departments, or amenities.

![Facilities](assets/Facilities.png)

### List Config

Note: For the **Facilities** section, create a list with the following columns

| 🏷️ Column Name (Case Sensitive) | 🔣 Column Type            |
| ------------------------------- | ------------------------- |
| **Content**                     | 📄 Multiple lines of text |
| **Thumbnail**                   | 🖼️ Image                  |
| **OrderBy**                     | 🔢 Number                 |
| **Address Location**            | 📄 Multiple lines of text |

### 🏷️ Facilities Web Part – Configuration Tables

![FacilitiesPropertypane](assets/FacilitiesPropertypane.png)

#### 📌 Header Settings

| 🏷️ Name           | 🎯 Purpose                                 | 💡 Select Option |
| ----------------- | ------------------------------------------ | ---------------- |
| **WebPart Title** | Title displayed at the top of the web part | FACILITIES       |
| **Hide Title**    | Toggle to show or hide the title           | Show             |

#### ⚙️ General Settings

| 🏷️ Name             | 🎯 Purpose                                     | 💡 Select Option |
| ------------------- | ---------------------------------------------- | ---------------- |
| **Select a list**   | Choose the SharePoint list for displaying data | Facilities       |
| **Add/Update list** | Link or refresh the selected list              | -                |

#### 🎨 Appearance Settings

| 🏷️ Name                  | 🎯 Purpose                                                                          | 💡 Select Option                           |
| ------------------------ | ----------------------------------------------------------------------------------- | ------------------------------------------ |
| **See All**              | URL for the “View All” button                                                       | `{siteUrl}/Lists/Facilities/AllItems.aspx` |
| **Show view all button** | Display button to view all list items                                               | On                                         |
| **Show top border**      | Toggle to show or hide the sharp top border                                         | On / Off                                   |
| **Show borders**         | Toggle to show or hide border around the web part                                   | On / Off                                   |
| **Border color**         | Select the color of the top border (will show only when show top border is enabled) | Color Picker                               |
| **Show all facilities**  | Toggle to show or hide all facilities in carousel                                   | On / Off                                   |
| **Enable auto scroll**   | Toggle to enable automatic scrolling through each facility                          | On / Off                                   |
| **Height**               | WebPart vertical height in pixels                                                   | 388                                        |

## 📅 6. Events Calendar

### 📋 Details

- Unified Scheduling: Display company events, meetings, and important
  dates.
- Simple View: A clear calendar layout without unnecessary embellishmen

![Events Calendar](assets/Calendar.png)

### 🏷️ Events Calendar Web Part

The **Events Calendar** web part allows site administrators to display and manage a calendar of upcoming events from a SharePoint list. This configurable component ensures that team members stay informed about scheduled activities, meetings, and deadlines.
![EventsPropertypane](assets/events1.png)
![EventsPropertypane](assets/events2.png)

#### 🧷 Header Settings

| 🏷️ Name               | 🎯 Purpose                                           | 💡 Select Option                                 |
| --------------------- | ---------------------------------------------------- | ------------------------------------------------ |
| **WebPart Title**     | The title displayed at the top of the web part       | EVENTS CALENDAR                                  |
| **Hide Title**        | Option to show or hide the title                     | Show                                             |
| **Show See All Link** | Display a link that leads to the full events view    | Show                                             |
| **View All URL**      | URL of the page where all calendar events are listed | `{siteUrl}/_layouts/15/Events.aspx?ListGuid=...` |

#### ⚙️ General Settings

| 🏷️ Name                      | 🎯 Purpose                                                                                                                                                                                                                                                                                                                                                      | 💡 Select Option |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| **Select the option events** | Select the option either to fetch the events from SharePoint list or shared mailbox                                                                                                                                                                                                                                                                             | Events           |
| **Show top border**          | Toggle to show or hide the sharp top border                                                                                                                                                                                                                                                                                                                     | On / Off         |
| **Show border**              | Toggle to show or hide border around the web part                                                                                                                                                                                                                                                                                                               | On / Off         |
| **Border color**             | Select the color of the top border (will show only when show top border is enabled)                                                                                                                                                                                                                                                                             | Color Picker     |
| **Show Calendar**            | Toggle to show calendar-style display                                                                                                                                                                                                                                                                                                                           | Yes              |
| **Filter Events**            | Dropdown to filter event types shown in the web part.**Note:** - If set to **"Upcoming Events"** , both the calendar and events section display only upcoming events.- If set to **"Previous 3 months + Upcoming Events"** , the calendar shows both past (last 3 months) and upcoming events, while the events section continues to show only upcoming events. | Upcoming Events  |
| **Add/Edit Events**          | Links to create or update events in the configured list                                                                                                                                                                                                                                                                                                         | Add/Edit Events  |

## 🎉 7. Holidays

### 📋 Details

- Upcoming Breaks: Highlight upcoming public holidays and company
  days off.
- Planning Aid: Assist in scheduling around non-working days.

![Holidays](assets/Holidays.png)

### List Config

Note: For the **Holidays** section, create a list with the following columns

| 🏷️ Column Name (Case Sensitive) | 🔣 Column Type            |
| ------------------------------- | ------------------------- |
| **Description**                 | 📄 Multiple lines of text |
| **HolidayLink**                 | 🔗 Hyperlink              |
| **StartDate**                   | 📅 Date and Time          |
| **Location**                    | 📁 Choice                 |

### 🏷️ Holidays Property Pane Configuration

The **Holidays Property Pane** allows users to configure the display settings of the Holidays web part.

![HolidaysPropertypane](assets/HolidaysPropertypane.png)

#### 📌 Header Settings

| 🏷️ Name        | 🎯 Purpose                                    | 💡 Select Option   |
| -------------- | --------------------------------------------- | ------------------ |
| **Title**      | Specifies the display name of the web part.   | -                  |
| **Hide Title** | Toggles the visibility of the web part title. | **Show**, **Hide** |

#### ⚙️ General Settings

| 🏷️ Name           | 🎯 Purpose                                                                  | 💡 Select Option               |
| ----------------- | --------------------------------------------------------------------------- | ------------------------------ |
| **Select a list** | Allows you to select the SharePoint list from which holidays are retrieved. | List dropdown (e.g., Holidays) |

#### 🎨 Appearance Settings

| 🏷️ Name                        | 🎯 Purpose                                                                          | 💡 Select Option                                           |
| ------------------------------ | ----------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| **Filter Holidays**            | Filters the type of holidays to display.                                            | **All Holidays**, **Upcoming Holidays**, **Past Holidays** |
| **Show bullets**               | Displays holidays with customized bullet icons.                                     | **On**, **Off**                                            |
| **Show top border**            | Toggle to show or hide the sharp top border                                         | On / Off                                                   |
| **Show borders**               | Toggle to show or hide border around the web part                                   | On / Off                                                   |
| **Border color**               | Select the color of the top border (will show only when show top border is enabled) | Color Picker                                               |
| **No. of Holidays to Display** | Sets the maximum number of holidays visible in the web part.                        | **6**                                                      |
| **Height**                     | Adjustable slider to control the height of the web part (in pixels).                | **424**                                                    |
