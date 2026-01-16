# Executive Aura-Check Deployment Guide

## The Narcissus Trap - Deployment Instructions

### Current Setup
The app now supports two modes:
1. **Main Landing** - vectomind.vercel.app (VectomindLanding)
2. **Aura Check** - aura.vectomind.vercel.app (AuraCheck)

### Deployment Options

#### Option A: Subdomain (Recommended)
1. Push this code to your GitHub repo
2. In Vercel dashboard:
   - Go to your project settings
   - Add a new domain: `aura.vectomind.vercel.app`
   - Vercel will auto-configure the subdomain
3. The app automatically detects the subdomain and shows AuraCheck

#### Option B: Path-based
- Access via `vectomind.vercel.app/aura`
- The app detects `/aura` path and shows AuraCheck

### Key Features

#### Deterministic Scoring Algorithm
- Same name = same score (always)
- Uses character codes, vowels, consonants, unique chars
- Generates consistent scores across: Magnitude, Gravitas, Lethality, Grit
- Overall score 1-10 determines archetype

#### Three Archetypes
1. **Apex Operator** (7.5-10): High performers, ego liability, burnout risk
2. **High-Frequency Ghost** (5.0-7.4): Presentable but hollow, context-switching addicts
3. **Distracted Dilettante** (1.0-4.9): Critical failure, TikTok dopamine loops

#### Psychological Hooks
- 3-second scanning animation builds anticipation
- Radar chart visualization (recharts)
- Brutal, surgical copy that roasts then sells
- Social share pre-filled with tweet
- CTA routes to vectomind-engine.vercel.app?ref=aura_check

### The Funnel
1. Student enters name (zero friction)
2. 3-second "scanning" creates stakes
3. Brutal verdict hits ego
4. Share button → viral distribution
5. "ENHANCE YOUR MAGNITUDE" CTA → Vectomind beta

### UTM Tracking
All CTAs include `?ref=aura_check` so you can track conversions from the honey trap.

### Dark Psychology Elements
- "IDENTIFY AGENT" military language
- "PSYCHOLOGICAL AUDIT – IDENTITY FLAGGED" 
- Terminal/classified aesthetic
- Quasi-technical jargon (Neural Redline Threshold, Somatic Executive Presence)
- University rivalry weaponization ("You're the reason Yale is at 40%")
- Status-based color coding (green APEX, gold GHOST, red DILETTANTE)

### Deployment Command
```bash
git add .
git commit -m "Add Executive Aura-Check honey trap"
git push origin main
```

Vercel will auto-deploy. Then configure the subdomain in Vercel dashboard.

### Testing
Test with different names to see deterministic scoring:
- "Alex" → should always give same score
- "Alexander" → different score (longer name)
- "Jo" → different score (short name)

The algorithm ensures consistency for viral sharing ("Check yours! I got 8.7/10")

---

**The Bait is Set. Now Deploy and Watch the Stallions Come.**
