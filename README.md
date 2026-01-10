# Cultureful Culture Analysis Dashboard

A web-enabled dashboard for visualizing organizational culture analysis results from survey data across v1 and v2 survey versions.

**Status**: ✅ **Ready for GitHub Deployment**

**Location**: This directory contains the final, stable files ready for GitHub Pages deployment.

---

## 🚀 Quick Start

### Upload to GitHub

1. **Upload all files in this directory** to your GitHub repository
2. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)` or the folder containing these files
   - Save
3. **Access your dashboard**:
   ```
   https://[your-username].github.io/[repo-name]/index.html
   ```

---

## 📁 Files in This Directory

### Essential Files (5 files - REQUIRED)

| File | Size | Purpose |
|------|------|---------|
| `index.html` | 68 KB | Main dashboard (defaults to v1+v2 combined) |
| `v2-dashboard.html` | 64 KB | V2-only dashboard (locked to v2) |
| `analytics.html` | 24 KB | Analytics explorer |
| `qualitative-insights.html` | 20 KB | Qualitative insights page |
| `dashboard_data.js` | 128 KB | **CRITICAL** - Contains all analysis data |

**Total**: ~304 KB

### Documentation Files

- `README.md` - This file
- `GITHUB_DEPLOYMENT.md` - Detailed deployment guide
- `STABLE_FILES_FOR_GITHUB.md` - File verification guide
- `DEPLOYMENT_CHECKLIST.md` - Pre/post deployment checklist
- `GITHUB_UPLOAD_MANIFEST.txt` - Simple file list
- `FINAL_CULTURE_ANALYSIS_REPORT.md` - Comprehensive analysis report

---

## ✅ Pre-Deployment Checklist

- [ ] All 5 essential files are in this directory
- [ ] `dashboard_data.js` is in the same directory as HTML files
- [ ] All files use relative paths (already verified ✅)
- [ ] No absolute paths or localhost references

---

## 🔍 Post-Deployment Verification

After uploading to GitHub and enabling Pages:

- [ ] Dashboard loads at GitHub Pages URL
- [ ] Shows "N = 8,671 Combined (v1+v2) Responses" (not "N = 0")
- [ ] Navigation links work between all pages
- [ ] Tables and charts display data
- [ ] No JavaScript console errors (F12)

---

## 📊 Dashboard Pages

1. **index.html** - Main Executive Dashboard
   - Default: All Data (v1+v2) - 8,671 responses
   - Links to: V2 Dashboard, Analytics, Qualitative Insights

2. **v2-dashboard.html** - V2-Only Dashboard
   - Locked to: V2 data only - 4,646 responses
   - Links to: Main Dashboard, Analytics, Qualitative Insights

3. **analytics.html** - Analytics Explorer
   - Default: All Data (v1+v2)
   - Interactive table with sorting and search
   - Links to: Main Dashboard, V2 Dashboard, Qualitative Insights

4. **qualitative-insights.html** - Qualitative Insights
   - 5,838+ English-only responses analyzed
   - Links to: Main Dashboard, V2 Dashboard, Analytics

---

## 🔧 Troubleshooting

### Dashboard shows "N = 0" or no data

**Solution**: Verify `dashboard_data.js` is in the same directory as HTML files and loads successfully (check browser Network tab).

### Navigation links return 404

**Solution**: Ensure all HTML files are in the same directory and GitHub Pages folder setting matches your file structure.

### Tables are empty

**Solution**: Check browser console (F12) for JavaScript errors. Verify `DASHBOARD_DATA` is loaded (type `typeof DASHBOARD_DATA` in console).

---

## 📈 Data Overview

### All Data (v1+v2 Combined) - DEFAULT
- **Responses**: 8,671 (4,025 v1 + 4,646 v2)
- **Questions**: 48 common questions only
- **Use Case**: Maximum statistical power

### V2 Only
- **Responses**: 4,646
- **Questions**: 52 questions (includes v2-only)
- **Use Case**: Latest survey version

---

## 🔗 Navigation Structure

All pages link to each other using relative paths:

```
index.html ↔ v2-dashboard.html ↔ analytics.html ↔ qualitative-insights.html
```

All files load: `dashboard_data.js` (relative path)

---

## 📝 Testing Locally

Before deploying, test locally:

```bash
cd FINAL/GITHUB
python3 -m http.server 8000
# Open: http://localhost:8000/index.html
```

**Note**: Don't open HTML files directly (`file://`). Always use an HTTP server.

---

## ✅ Verification Status

- ✅ All files verified and ready
- ✅ Relative paths confirmed
- ✅ Data structure validated
- ✅ Navigation links functional
- ✅ GitHub Pages ready

**Status**: 🟢 **READY FOR DEPLOYMENT**

---

**Last Updated**: January 10, 2025  
**Dashboard Version**: 3.0  
**Data Version**: Final Validated Set (v1+v2 combined)
