---
name: doc-helper
description: Create and restructure documentation with proper folder structure, index pages, and CMS registration.
---

# doc-helper Skill

Use this skill whenever creating new documentation sections, category pages, or restructuring existing docs.

---

## 1. Category Landing Pages

Always create category landing pages as `index.mdx`, never plain `.md`.

### Template

```mdx
---
title: <Category Title>
slug: /category/<slug>
sidebar_class_name: hidden
pagination_prev: null
pagination_next: null
---

import DocCardList from "@theme/DocCardList";

<One or two sentences describing what this category covers and its value to the user.>

---

<DocCardList />

---

📧 sales@sharepointdesigns.com
📞 +91 9884189463
```

### Rules

- Always include all five frontmatter fields: `title`, `slug`, `sidebar_class_name`, `pagination_prev`, `pagination_next`
- Always import and render `<DocCardList />`
- Always include the contact block at the bottom
- Keep the introductory description concise (1–2 sentences)
- Keep structure consistent across all category pages

---

## 2. CMS Registration (config.yml)

Whenever a new folder or section is created, add a corresponding collection entry in:

```
spd-documentation/static/admin/config.yml
```

This ensures the section is visible and manageable in the Decap CMS admin panel. Without this step, admins cannot see or edit the new content.

### Minimum collection entry

```yaml
- name: "<section-slug>"
  label: "<Section Display Name>"
  label_singular: "<Single Item Label>"
  folder: "spd-documentation/docs/<folder-path>"
  create: true
  format: frontmatter
  extension: "mdx"
  slug: "{{slug}}"
  media_folder: "/spd-documentation/docs/<folder-path>/assets"
  public_folder: "assets"
  fields:
    - { label: "Title", name: "title", widget: "string" }
    - { label: "Sidebar Position", name: "sidebar_position", widget: "number", required: false }
    - { label: "Body", name: "body", widget: "markdown" }
```

---

## 3. Property Panel Images

All property panel screenshots must be wrapped in a collapsible `<details>` block:

```mdx
<details>
<summary>Property Panel</summary>

![Alt text](./img/property-panel.png)

</details>
```

- Apply this to every image that shows a property or configuration panel
- Use a descriptive `<summary>` label (e.g., "Web Part Properties", "Layout Settings")
