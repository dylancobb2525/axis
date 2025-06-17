# AXIS Medical Education - Static HTML Version

This is the static HTML/CSS/JavaScript version of the AXIS Medical Education website. It can be hosted on any web server without requiring React or Node.js.

## 📁 Files Structure

- `index.html` - Main website file
- `script.js` - All JavaScript functionality 
- `public/` - Images and assets
- `README-STATIC.md` - This file

## 🚀 How to Deploy

### Option 1: Simple Web Server
1. Upload all files to your web server
2. Point domain to `index.html`
3. Done!

### Option 2: GitHub Pages
1. Create new repository
2. Upload files
3. Enable GitHub Pages in settings
4. Your site will be live at `username.github.io/repo-name`

### Option 3: Netlify
1. Drag and drop the folder to Netlify
2. Your site will be live instantly

### Option 4: Any Hosting Provider
- Works with: Bluehost, GoDaddy, HostGator, etc.
- Just upload files via FTP/File Manager

## ⚙️ Configuration

### Password Protection
- **Password**: `ushaxisdemo$`
- **Location**: Line 15 in `script.js`
- **To change**: Edit the `CORRECT_PASSWORD` variable

```javascript
const CORRECT_PASSWORD = 'your-new-password';
```

### Adding/Editing Activities
- **Location**: Lines 2-100 in `script.js`
- **Format**: Add new objects to the `activities` array

```javascript
{
    id: 10,
    title: "Your Activity Title",
    category: "CATEGORY NAME",
    code: "AXIS 12345",
    chairperson: "Dr. Name",
    institution: "Institution Name",
    location: "City, State",
    supportedBy: "Sponsor Name",
    hasNewBadge: true,
    image: "/activitylogos/cell10.jpg"
}
```

### Styling Changes
- Uses **Tailwind CSS** via CDN
- Custom styles in `<style>` section of `index.html`
- Easy to modify colors, fonts, layouts

## ✨ Features Included

✅ **Password Protection** (client-side)  
✅ **Responsive Design**  
✅ **Interactive Modals**  
✅ **Animated Counters**  
✅ **Form Validation**  
✅ **Smooth Scrolling**  
✅ **Back to Top Button**  
✅ **Activity Details**  
✅ **Professional UI**

## ❌ Features Removed

❌ **Formspree Integration** (can be re-added easily)  
❌ **Server-side Password Protection**  
❌ **React Components**  
❌ **Next.js Features**

## 🔧 Easy Edits

### Change Colors
Find and replace in `index.html`:
- `bg-blue-900` → `bg-purple-900` (Change primary color)
- `bg-orange-500` → `bg-green-500` (Change accent color)

### Update Content
- **Hero Title**: Line ~140 in `index.html`
- **Statistics**: Lines ~170-180 in `index.html`
- **Footer**: Lines ~200+ in `index.html`

### Add Images
1. Upload images to `public/activitylogos/`
2. Reference in activities array: `image: "/activitylogos/your-image.jpg"`

## 📞 Support

This static version maintains all visual and interactive functionality while being extremely easy to host and edit. Perfect for teams who need simple content management without React complexity.

**Password**: `ushaxisdemo$`  
**Ready to deploy**: ✅  
**Mobile responsive**: ✅  
**Easy to edit**: ✅ 