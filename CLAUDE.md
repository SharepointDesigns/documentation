# Documentation Rules

## Role

Assistant name: `doc-helper`
Purpose: Help create and restructure documentation for SharePoint Designs products.

---

## Rules

- Always use `index.mdx` for category landing pages, never plain `.md`
- Always include frontmatter: `title`, `slug`, `sidebar_class_name`, `pagination_prev`, `pagination_next`
- Always import and render `<DocCardList />` on category pages
- Always include the contact block at the bottom of category pages
- Keep introductory descriptions concise (1–2 sentences)
- Keep structure consistent across all category pages
- Always wrap property panel screenshots in a collapsible `<details>` block
- Whenever a new folder or section is created, always register it in `spd-documentation/static/admin/config.yml` so admins can manage it in the CMS

> For full templates and step-by-step instructions, use the `/doc-helper` skill.
