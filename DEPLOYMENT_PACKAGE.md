# 🚀 VECTOMIND AURA-CHECK DEPLOYMENT PACKAGE

## MISSION: Fix `/aura` 404 and enable Discord preview cards

---

## 📦 FILES TO CREATE/UPDATE

### 1. **`vercel.json`** (ROOT DIRECTORY)

**Location:** `/vercel.json` (same level as `package.json`)

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Why:** This tells Vercel to route ALL paths (`/aura`, `/anything`) to `index.html`, allowing React to handle routing instead of returning 404s.

---

### 2. **`index.html`** (ROOT DIRECTORY)

**Location:** `/index.html` (REPLACE ENTIRE FILE)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Primary Meta Tags -->
    <title>[AUDIT PENDING] – Are you a High-Functioning Ghost?</title>
    <meta name="title" content="[AUDIT PENDING] – Are you a High-Functioning Ghost?" />
    <meta name="description" content="Yale is failing. UConn is surging. Input your identity to verify your Executive Aura magnitude." />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://vectomind.vercel.app/aura" />
    <meta property="og:title" content="[AUDIT PENDING] – Are you a High-Functioning Ghost?" />
    <meta property="og:description" content="Yale is failing. UConn is surging. Input your identity to verify your Executive Aura magnitude." />
    <meta property="og:image" content="https://vectomind.vercel.app/aura-og.svg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://vectomind.vercel.app/aura" />
    <meta property="twitter:title" content="[AUDIT PENDING] – Are you a High-Functioning Ghost?" />
    <meta property="twitter:description" content="Yale is failing. UConn is surging. Input your identity to verify your Executive Aura magnitude." />
    <meta property="twitter:image" content="https://vectomind.vercel.app/aura-og.svg" />
    
    <!-- Discord Embed Color -->
    <meta name="theme-color" content="#00ff41" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

**Why:** Discord/Twitter/Facebook bots scrape these OG meta tags to generate preview cards.

---

### 3. **`public/aura-og.svg`** (PUBLIC DIRECTORY)

**Location:** `/public/aura-og.svg` (CREATE NEW FILE)

```svg
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="1200" height="630" fill="#050505"/>
  
  <!-- Grid overlay -->
  <g opacity="0.1">
    <line x1="0" y1="157.5" x2="1200" y2="157.5" stroke="#00ff41" stroke-width="1"/>
    <line x1="0" y1="315" x2="1200" y2="315" stroke="#00ff41" stroke-width="1"/>
    <line x1="0" y1="472.5" x2="1200" y2="472.5" stroke="#00ff41" stroke-width="1"/>
    <line x1="300" y1="0" x2="300" y2="630" stroke="#00ff41" stroke-width="1"/>
    <line x1="600" y1="0" x2="600" y2="630" stroke="#00ff41" stroke-width="1"/>
    <line x1="900" y1="0" x2="900" y2="630" stroke="#00ff41" stroke-width="1"/>
  </g>
  
  <!-- Top border accent -->
  <rect x="0" y="0" width="1200" height="4" fill="#00ff41"/>
  
  <!-- Classification header -->
  <text x="80" y="100" fill="#00ff41" font-family="'Courier New', monospace" font-size="22" letter-spacing="8">
    [AUDIT PENDING]
  </text>
  
  <!-- Main title -->
  <text x="80" y="180" fill="#ffffff" font-family="'Courier New', monospace" font-size="68" font-weight="bold" letter-spacing="-2">
    ARE YOU A
  </text>
  <text x="80" y="260" fill="#00ff41" font-family="'Courier New', monospace" font-size="68" font-weight="bold" letter-spacing="-2">
    HIGH-FUNCTIONING
  </text>
  <text x="80" y="340" fill="#c5a059" font-family="'Courier New', monospace" font-size="68" font-weight="bold" letter-spacing="-2">
    GHOST?
  </text>
  
  <!-- University rivalry line -->
  <line x1="80" y1="390" x2="1120" y2="390" stroke="#00ff41" stroke-width="2" opacity="0.3"/>
  
  <!-- Stats comparison -->
  <g>
    <!-- Yale -->
    <text x="80" y="450" fill="#ff0033" font-family="'Courier New', monospace" font-size="32" font-weight="bold">
      YALE: 40%
    </text>
    <text x="80" y="485" fill="#888888" font-family="'Courier New', monospace" font-size="18" letter-spacing="4">
      [DISTRACTED]
    </text>
    
    <!-- UConn -->
    <text x="600" y="450" fill="#00ff41" font-family="'Courier New', monospace" font-size="32" font-weight="bold">
      UCONN: 90%
    </text>
    <text x="600" y="485" fill="#888888" font-family="'Courier New', monospace" font-size="18" letter-spacing="4">
      [IMMUNE]
    </text>
  </g>
  
  <!-- Call to action -->
  <text x="80" y="560" fill="#666666" font-family="'Courier New', monospace" font-size="20" letter-spacing="3">
    → INPUT YOUR IDENTITY TO VERIFY EXECUTIVE AURA MAGNITUDE
  </text>
  
  <!-- Bottom branding -->
  <text x="1040" y="610" fill="#00ff41" font-family="'Courier New', monospace" font-size="16" letter-spacing="2">
    VECTOMIND
  </text>
  
  <!-- Corner accent -->
  <rect x="0" y="626" width="1200" height="4" fill="#00ff41"/>
</svg>
```

**Why:** This is the brutal Discord preview card image that shows Yale vs UConn rivalry.

---

### 4. **`vite.config.ts`** (ROOT DIRECTORY)

**Location:** `/vite.config.ts` (REPLACE ENTIRE FILE)

```typescript
import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
  },
})
```

**Why:** Additional config for proper SPA handling.

---

## 🛠️ DEPLOYMENT COMMANDS

**Open terminal in your project directory and run:**

```bash
# 1. Verify you're in the right directory
pwd
# Should show: /path/to/vectomind

# 2. Check that files are in place
ls -la vercel.json
ls -la index.html
ls -la vite.config.ts
ls -la public/aura-og.svg

# 3. Stage all changes
git add vercel.json index.html vite.config.ts public/aura-og.svg

# 4. Commit
git commit -m "fix: Add Vercel SPA routing + Discord OG meta tags for /aura"

# 5. Push to main
git push origin main
```

---

## ⚡ WHAT HAPPENS NEXT

1. **GitHub receives push** → Triggers Vercel webhook
2. **Vercel auto-builds** (~60 seconds)
3. **Deployment completes** → New URL goes live
4. **Test immediately:**
   - Visit: `https://vectomind.vercel.app/aura`
   - Should load the Executive Aura-Check (NO 404)
   - Discord preview card should appear when you paste the link

---

## 🧪 VERIFICATION CHECKLIST

After deployment completes:

### ✅ Test `/aura` route works:
```bash
curl -I https://vectomind.vercel.app/aura
# Should return: HTTP/2 200 (not 404)
```

### ✅ Test Discord preview:
1. Open Discord DM to yourself
2. Paste: `https://vectomind.vercel.app/aura`
3. Wait 3-5 seconds
4. You should see:
   - Title: `[AUDIT PENDING] – Are you a High-Functioning Ghost?`
   - Description: `Yale is failing. UConn is surging...`
   - Green border (#00ff41)
   - Yale vs UConn stats

### ✅ Test OG image loads:
Visit: `https://vectomind.vercel.app/aura-og.svg`
- Should show the brutal SVG preview card

---

## 🚨 TROUBLESHOOTING

**If `/aura` still 404s:**
- Check Vercel dashboard → Deployments → Latest build
- Click "View Function Logs"
- Verify `vercel.json` was deployed (check "Source" tab)

**If Discord preview doesn't show:**
- Discord caches previews aggressively
- Try adding `?v=2` to the URL: `vectomind.vercel.app/aura?v=2`
- Or use Discord's cache buster: Right-click link → "Copy Link" → Paste in new channel

**If SVG doesn't render in Discord:**
- Some platforms don't support SVG OG images
- Convert to PNG: Use https://cloudconvert.com/svg-to-png
- Update `og:image` to point to PNG version

---

## 📊 EXPECTED TIMELINE

| Step | Time |
|------|------|
| Copy files to local | 2 min |
| Git commit + push | 1 min |
| Vercel build | 60 sec |
| DNS propagation | 0 sec (same domain) |
| **TOTAL** | **~4 minutes** |

---

## 🎯 POST-DEPLOYMENT: TACTICAL DISCORD DROPS

Once `/aura` is live, use these tactical messages:

**Yale Discord:**
```
just took the Executive Aura-Check and it called me a High-Frequency Ghost 💀
apparently Yale is at 40% focus capacity vs UConn at 90%
check your status: vectomind.vercel.app/aura
(it's brutal but accurate)
```

**UConn Discord:**
```
UConn scored 90% on the Vectomind Aura diagnostic
Yale is at 40% and coping hard
verify your magnitude: vectomind.vercel.app/aura
```

---

## ✅ READY TO EXECUTE

**Copy this entire guide for reference, then:**

1. ✅ Create/update the 4 files above
2. ✅ Run the git commands
3. ✅ Wait 60 seconds for Vercel
4. ✅ Test `vectomind.vercel.app/aura`
5. ✅ Drop the link in Discord

**LET'S FUCKING GO.**
