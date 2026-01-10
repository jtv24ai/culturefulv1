# GitHub Deployment Checklist

## ✅ Pre-Upload Verification

### File Structure
- [ ] All HTML files are in the same directory
- [ ] `dashboard_data.js` is in the same directory as HTML files
- [ ] All files use relative paths (no absolute paths)

### Required Files (Minimum)
- [ ] `index.html` (65 KB)
- [ ] `dashboard_data.js` (128 KB)

### Required Files (Full Deployment)
- [ ] `index.html`
- [ ] `v2-dashboard.html`
- [ ] `analytics.html`
- [ ] `qualitative-insights.html`
- [ ] `dashboard_data.js`

### Code Verification
- [ ] All `<script src="dashboard_data.js">` use relative path
- [ ] All `href="*.html"` use relative paths
- [ ] No `file://` or absolute paths
- [ ] No localhost references in code

## 🔍 Post-Upload Verification

### GitHub Repository
- [ ] Files uploaded to repository
- [ ] GitHub Pages enabled (Settings → Pages)
- [ ] Source branch selected (main/master)
- [ ] Folder path configured correctly

### Functionality Testing
- [ ] Main dashboard loads (index.html)
- [ ] Shows "N = 8,671 Combined (v1+v2) Responses"
- [ ] Navigation links work
- [ ] V2 dashboard loads correctly
- [ ] Analytics page loads with data
- [ ] Qualitative insights page loads
- [ ] No JavaScript console errors

## 📝 Quick Test Commands

```bash
# Check file sizes
ls -lh *.html *.js

# Verify dashboard_data.js exists
test -f dashboard_data.js && echo "✅ Found" || echo "❌ Missing"

# Check for absolute paths
grep -r "file://" *.html
grep -r "/Users/" *.html

# Check for relative paths (should be present)
grep -r 'href=".*\.html"' *.html
grep -r 'src="dashboard_data\.js"' *.html
```
