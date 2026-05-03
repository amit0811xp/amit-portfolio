# 🚀 Quick Start - Deploy in 5 Minutes

## Prerequisites
- Node.js installed (v14 or higher)
- GitHub account
- Vercel account (free)

## Step 1: Install Dependencies (30 seconds)
```bash
npm install
```

## Step 2: Test Locally (1 minute)
```bash
npm start
```
Visit `http://localhost:3000` - Your portfolio should load!

## Step 3: Build for Production (1 minute)
```bash
npm run build
```
If successful, you'll see a `build` folder created.

## Step 4: Push to GitHub (1 minute)
```bash
# Initialize git (if not done)
git init
git add .
git commit -m "Initial commit"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

## Step 5: Deploy to Vercel (2 minutes)

### Method 1: Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" → Continue with GitHub
3. Click "Add New Project"
4. Import your repository
5. Click "Deploy" (Vercel auto-configures everything!)
6. Wait 2-3 minutes
7. **Done!** Your site is live! 🎉

### Method 2: Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## 🎉 You're Live!

Your portfolio is now at:
`https://your-project-name.vercel.app`

## Next Steps

1. **Custom Domain** (Optional)
   - Buy a domain
   - Add it in Vercel Dashboard → Settings → Domains

2. **Update Content**
   - Edit your projects in `src/components/Projects.js`
   - Update skills in `src/components/Skills.js`
   - Modify about section in `src/components/About.js`

3. **Share Your Portfolio**
   - LinkedIn
   - Twitter
   - Resume
   - Email signature

## Need Help?

Check these files:
- `DEPLOYMENT.md` - Detailed deployment guide
- `VERCEL_SETUP.md` - Complete Vercel setup
- `README.md` - Project documentation

## Contact
Email: pal298110@gmail.com
Phone: +91 97491 74742

---

**Congratulations! Your portfolio is live! 🚀**
