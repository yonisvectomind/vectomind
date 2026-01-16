# 🚀 MANUAL DEPLOYMENT PACKAGE

Copy the files below to your GitHub repo to arm the Discord preview card.

---

## FILE 1: `/index.html` (ROOT OF YOUR REPO)

Create this file in the root directory of your repo (same level as package.json):

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

---

## FILE 2: `/public/aura-og.svg` (YALE VS UCONN)

Create a `public` folder in the root of your repo, then create this file inside it:

**Path**: `/public/aura-og.svg`

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

---

## FILE 3: `/public/aura-og-cornell-vassar.svg` (FOR PHASE 2)

**Path**: `/public/aura-og-cornell-vassar.svg`

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
    <!-- Cornell -->
    <text x="80" y="450" fill="#c5a059" font-family="'Courier New', monospace" font-size="32" font-weight="bold">
      CORNELL: 61%
    </text>
    <text x="80" y="485" fill="#888888" font-family="'Courier New', monospace" font-size="18" letter-spacing="4">
      [REFOCUS]
    </text>
    
    <!-- Vassar -->
    <text x="600" y="450" fill="#00ff41" font-family="'Courier New', monospace" font-size="32" font-weight="bold">
      VASSAR: 81%
    </text>
    <text x="600" y="485" fill="#888888" font-family="'Courier New', monospace" font-size="18" letter-spacing="4">
      [BUILDING]
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

---

## FILE 4: `/src/main.tsx` (REACT ENTRY POINT)

If you don't already have this file, create it:

**Path**: `/src/main.tsx`

```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## DEPLOYMENT STEPS:

### Option A: GitHub Web Interface (Fastest)

1. Go to your GitHub repo
2. Click "Add file" → "Create new file"
3. Name it `index.html`
4. Paste the HTML from FILE 1
5. Commit directly to main
6. Create `public` folder: "Add file" → "Create new file" → Name it `public/aura-og.svg`
7. Paste SVG from FILE 2
8. Commit
9. Repeat for `public/aura-og-cornell-vassar.svg` (FILE 3)
10. If you don't have `src/main.tsx`, create it with FILE 4

### Option B: Command Line

```bash
# In your local repo directory
# Create index.html in root
# Create public folder and SVG files
# Create src/main.tsx if needed

git add index.html public/aura-og.svg public/aura-og-cornell-vassar.svg src/main.tsx
git commit -m "Add brutal Discord OG preview cards for Narcissus Trap"
git push origin main
```

---

## AFTER DEPLOYMENT:

1. **Wait 60 seconds** for Vercel to deploy
2. **Test in Discord**: DM yourself `vectomind.vercel.app/aura`
3. **Verify preview shows**: Black card with green accents, Yale vs UConn stats
4. **If it doesn't appear**: 
   - Clear Discord cache (Ctrl+R to reload)
   - Wait another 60 seconds
   - Test at https://www.opengraph.xyz/

---

## YOUR DISCORD DROP MESSAGES (READY):

```
just got psychologically destroyed by this diagnostic tool

apparently i'm a "high-frequency ghost with synthetic confidence"

brutal but disturbingly accurate

vectomind.vercel.app/aura
```

```
Yale: 40% focus [DISTRACTED]
UConn: 90% focus [IMMUNE]

check which side you're on before you embarrass yourself

vectomind.vercel.app/aura
```

---

## THAT'S IT.

4 files. 5 minutes to upload. Then you're armed for Discord warfare.

**Deploy now and test the preview card before dropping in servers.**
