# GitHub Deployment Guide

## 🚀 Quick Deployment

### Step 1: Prepare Files

Upload these **5 essential files** to your GitHub repository:

```
✅ index.html              (68 KB)   - Main dashboard
✅ v2-dashboard.html       (64 KB)   - V2-only dashboard  
✅ analytics.html          (24 KB)   - Analytics explorer
✅ qualitative-insights.html (20 KB) - Qualitative insights
✅ dashboard_data.js       (128 KB)  - DATA FILE (CRITICAL)
```

### Step 2: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - **Branch**: `main` (or your default branch)
   - **Folder**: `/ (root)` or `/FINAL/dashboard/` depending on your structure
4. Click **Save**

### Step 3: Access Your Dashboard

After GitHub Pages is enabled, access your dashboard at:

```
https://[your-username].github.io/[repo-name]/index.html
```

Or if you deployed from a subdirectory:

```
https://[your-username].github.io/[repo-name]/FINAL/dashboard/index.html
```

---

## 📁 File Structure

### Recommended Structure for GitHub

```
your-repo/
├── index.html                  # ← Start here
├── v2-dashboard.html
├── analytics.html
├── qualitative-insights.html
├── dashboard_data.js           # ← CRITICAL: Must be in same directory
├── README.md
└── FINAL_CULTURE_ANALYSIS_REPORT.md (optional)
```

**Important**: All HTML files and `dashboard_data.js` must be in the **same directory**.

---

## ✅ Verification Checklist

After uploading, verify:

- [ ] All 5 essential files are uploaded
- [ ] `dashboard_data.js` is in the same directory as HTML files
- [ ] GitHub Pages is enabled in repository settings
- [ ] Dashboard loads at: `https://[username].github.io/[repo]/index.html`
- [ ] Shows "N = 8,671 Combined (v1+v2) Responses" on main dashboard
- [ ] Navigation links work between all pages
- [ ] No JavaScript errors in browser console (F12)

---

## 🔧 Troubleshooting Common Issues

### Issue: Dashboard shows "N = 0" or no data

**Cause**: `dashboard_data.js` not found or not loaded

**Solution**:
1. Verify `dashboard_data.js` is in the same directory as HTML files
2. Check file name is exactly `dashboard_data.js` (case-sensitive)
3. Open browser console (F12) and check for 404 errors
4. Verify file path in Network tab shows successful load

### Issue: Navigation links return 404

**Cause**: Incorrect folder structure or GitHub Pages path

**Solution**:
1. Verify all HTML files are in the same directory
2. Check GitHub Pages folder setting matches your file structure
3. Use relative paths only (e.g., `href="analytics.html"` not `href="/analytics.html"`)

### Issue: Dashboard loads but tables are empty

**Cause**: JavaScript errors preventing data rendering

**Solution**:
1. Open browser console (F12 → Console tab)
2. Look for JavaScript errors
3. Verify `DASHBOARD_DATA` is loaded: type `typeof DASHBOARD_DATA` in console (should return `"object"`)
4. Check Network tab to confirm `dashboard_data.js` loaded successfully

### Issue: Styles look broken

**Cause**: Google Fonts or CSS not loading

**Solution**:
1. Requires internet connection (Google Fonts loaded via CDN)
2. Check browser console for blocked resources
3. Verify external logo URL is accessible (or replace with local image)

---

## 🎯 Default Views

### index.html
- **Default**: All Data (v1+v2 combined) - 8,671 responses
- **Filter Option**: V2 Only (links to `v2-dashboard.html`)

### v2-dashboard.html  
- **Locked to**: V2 Only - 4,646 responses
- **No version switching** (dedicated page)

### analytics.html
- **Default**: All Data (v1+v2 combined)
- **Filter Options**: All Data, V2 Only

### qualitative-insights.html
- **Static page** (no version filtering)

---

## 📊 Data Overview

### All Data (v1+v2 Combined) - DEFAULT
- **Responses**: 8,671 (4,025 v1 + 4,646 v2)
- **Questions**: 48 common questions only
- **Use Case**: Maximum statistical power, cross-version validation

### V2 Only
- **Responses**: 4,646
- **Questions**: 52 questions (includes v2-only: WD101, WD102, WD16, CC03b)
- **Use Case**: Latest survey version analysis

---

## 🔗 Relative Paths Reference

All links use relative paths (GitHub-ready):

```
index.html → v2-dashboard.html
index.html → analytics.html
index.html → qualitative-insights.html

v2-dashboard.html → index.html
v2-dashboard.html → analytics.html
v2-dashboard.html → qualitative-insights.html

analytics.html → index.html
analytics.html → v2-dashboard.html
analytics.html → qualitative-insights.html

qualitative-insights.html → index.html
qualitative-insights.html → v2-dashboard.html
qualitative-insights.html → analytics.html
```

All files load: `dashboard_data.js` (relative path)

---

## 📝 Testing Locally Before GitHub

Test locally with a simple HTTP server:

```bash
# Navigate to dashboard directory
cd FINAL/dashboard

# Python 3
python3 -m http.server 8000

# Or Node.js (if installed)
npx http-server -p 8000

# Open in browser
# http://localhost:8000/index.html
```

**Note**: Don't open HTML files directly (`file://`). Always use an HTTP server.

---

## ✅ Final Verification

Before committing to GitHub, run these checks:

```bash
# Verify all required files exist
ls -lh index.html v2-dashboard.html analytics.html qualitative-insights.html dashboard_data.js

# Check for problematic absolute paths (should find none)
grep -r "file://\|/Users/\|C:\\" *.html

# Verify relative paths are used
grep -o 'href="[^"]*\.html"' *.html | sort -u
grep -o 'src="dashboard_data\.js"' *.html
```

---

## 🎉 Success Criteria

Your dashboard is ready when:

✅ All files uploaded to GitHub  
✅ GitHub Pages enabled and active  
✅ Dashboard accessible via HTTPS URL  
✅ Data loads correctly (N = 8,671 on main dashboard)  
✅ All navigation links work  
✅ No JavaScript console errors  
✅ Tables and charts render with data  

---

**Last Updated**: January 10, 2025  
**Version**: 3.0
