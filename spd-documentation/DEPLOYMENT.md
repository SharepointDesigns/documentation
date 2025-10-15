# Deployment Workflow Guide

## 🌍 Environment Setup

This repository supports two deployment environments:

### 🚀 **Production Environment**

- **Branch:** `main`
- **URL:** https://sharepointdesigns.github.io/documentation/
- **Deployment Branch:** `gh-pages`
- **Config:** `docusaurus.config.ts`

### 🧪 **Staging Environment**

- **Branch:** `test`
- **URL:** https://sharepointdesigns.github.io/documentation-staging/
- **Deployment Branch:** `gh-pages-staging`
- **Config:** `docusaurus.config.staging.ts`

## 📝 Workflow Process

### Automatic Deployments

1. **Staging Deployment:**

   ```bash
   # Push to test branch for staging deployment
   git checkout test
   git push origin test
   ```

2. **Production Deployment:**
   ```bash
   # Push to main branch for production deployment
   git checkout main
   git push origin main
   ```

### Manual Deployments

You can also trigger deployments manually from the GitHub Actions tab:

1. Go to **Actions** → **Deploy Docusaurus**
2. Click **Run workflow**
3. Select environment: `staging` or `production`
4. Click **Run workflow**

## 🔄 Recommended Development Flow

### 1. Feature Development

```bash
# Create feature branch from test
git checkout test
git pull origin test
git checkout -b feature/your-feature-name

# Make your changes
# ...

# Push feature branch
git push origin feature/your-feature-name
```

### 2. Testing Phase

```bash
# Merge to test branch
git checkout test
git merge feature/your-feature-name
git push origin test
```

This automatically deploys to staging: https://sharepointdesigns.github.io/documentation-staging/

### 3. Production Release

```bash
# After testing, merge to main
git checkout main
git merge test
git push origin main
```

This automatically deploys to production: https://sharepointdesigns.github.io/documentation/

## 🎯 Environment Differences

### Staging Environment Features:

- ⚠️ **Warning Banner:** Shows "STAGING ENVIRONMENT" notice
- 🔗 **Links to Production:** Easy navigation to production site
- 📝 **Relaxed Validation:** `onBrokenLinks: "warn"` instead of `throw`
- 📍 **Different Base URL:** `/documentation-staging/`
- 🏷️ **Clear Branding:** "(STAGING)" in title and footer

### Production Environment Features:

- ✅ **Clean Interface:** No staging warnings
- 🔒 **Strict Validation:** `onBrokenLinks: "throw"` for quality control
- 📍 **Standard Base URL:** `/documentation/`
- 🏷️ **Professional Branding:** Clean titles and footer

## 🛠️ Setup Requirements

### GitHub Repository Settings

1. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Set source to "Deploy from a branch"
   - Select `gh-pages` branch for production
   - Optionally set up `gh-pages-staging` for staging

### Required Secrets

- `GITHUB_TOKEN`: Automatically provided by GitHub Actions

### Branch Protection (Recommended)

Consider protecting the `main` branch:

- Require pull request reviews
- Require status checks to pass
- Require up-to-date branches

## 📋 Checklist for New Features

- [ ] Develop on feature branch
- [ ] Merge to `test` branch
- [ ] Verify on staging environment
- [ ] Test all links and functionality
- [ ] Review content and formatting
- [ ] Merge to `main` for production
- [ ] Verify production deployment

## 🆘 Troubleshooting

### Deployment Fails

1. Check GitHub Actions logs
2. Verify all dependencies in package.json
3. Ensure build passes locally
4. Check for TypeScript errors

### Staging Not Updating

1. Verify push to `test` branch
2. Check workflow run status
3. Ensure `gh-pages-staging` branch exists

### Links Broken

1. Check relative vs absolute paths
2. Verify base URL configuration
3. Test locally with both configs
