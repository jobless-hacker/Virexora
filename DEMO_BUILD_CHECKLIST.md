# Demo Build Checklist (No-Step-Missed)

Use this checklist before publishing any new industry demo page.

## 1) Strategy and Positioning
- [ ] Define target industry and buyer type.
- [ ] Identify top 3 buyer intents (what they search before contacting).
- [ ] Define primary conversion goal (call, WhatsApp, form, consultation).
- [ ] Confirm page is a **demo** (not pretending to be a real business).
- [ ] Confirm demo naming style and tone match the industry.

## 2) Content Architecture
- [ ] Hero section is industry-specific (not generic template copy).
- [ ] Service/offer blocks reflect real industry workflows.
- [ ] Proof section exists (stats, trust indicators, sample clients/case style).
- [ ] Process section exists (clear delivery or customer journey steps).
- [ ] FAQ addresses real pre-sales objections for that industry.
- [ ] CTA section includes email + WhatsApp + social profile links.

## 3) Conversion and UX
- [ ] Primary CTA appears above the fold.
- [ ] Secondary CTA exists for low-intent visitors.
- [ ] Buttons/links are clear and action-oriented.
- [ ] Contact options are visible on desktop and mobile.
- [ ] Navigation anchors work correctly.
- [ ] Page remains readable and usable on mobile widths.

## 4) SEO On-Page
- [ ] Unique `<title>` (rough target: 35-60 chars).
- [ ] Unique meta description (rough target: 110-155 chars).
- [ ] Exactly one `<h1>`.
- [ ] Semantic heading flow (`h1` -> `h2` -> `h3`).
- [ ] Canonical URL matches the live demo URL.
- [ ] Open Graph tags present (`og:title`, `og:description`, `og:url`, `og:image`).
- [ ] Twitter tags present (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`).

## 5) Demo SEO Safety Rules
- [ ] Demo page uses `noindex,follow,max-image-preview:large`.
- [ ] Schema uses safe demo type (`WebPage`) instead of fake local-business entities.
- [ ] Demo page is **not** added to sitemap if demo noindex policy is active.
- [ ] Demo hub follows same noindex policy if required.

## 6) Structured Data
- [ ] JSON-LD is valid JSON.
- [ ] JSON-LD URLs point to correct canonical URL.
- [ ] Creator/organization details are consistent across demos.
- [ ] No fake claims in schema (licenses, awards, addresses, etc.).

## 7) Design Quality (Industry Realism)
- [ ] Visual direction matches industry expectations.
- [ ] Typography is intentional and readable.
- [ ] Color system is coherent and accessible.
- [ ] Card/section styles are not obvious boilerplate duplicates.
- [ ] Hero and section hierarchy feel premium and sales-ready.

## 8) Accessibility
- [ ] Skip link present and focusable.
- [ ] Interactive elements are keyboard reachable.
- [ ] Color contrast is readable.
- [ ] Form controls (if any) have labels.
- [ ] Link text is descriptive (not vague like "click here").

## 9) Technical Quality
- [ ] No broken internal links.
- [ ] All referenced CSS/JS/assets load successfully.
- [ ] No placeholder tokens left (`__PLACEHOLDER__` style markers).
- [ ] Files are UTF-8 and valid text.
- [ ] No accidental BOM in `robots.txt` or `sitemap.xml`.

## 10) Contact Consistency
- [ ] Phone: `7036958163` (and formatted `+91 70369 58163` where needed).
- [ ] Email: `santoshtukaramfrds@gmail.com`.
- [ ] LinkedIn: `https://www.linkedin.com/feed/` (replace with profile URL when available).
- [ ] Instagram: `https://www.instagram.com/eh_santhosh_goud/`.
- [ ] WhatsApp link uses `https://wa.me/917036958163`.

## 11) Pre-Publish QA Commands (Local)
- [ ] `rg -n \"__[A-Z]+__\" demos index.html`
- [ ] `rg -n \"hello@virexora.com|98765|linkedin.com/company|instagram.com/virexora\" -S`
- [ ] `rg -n \"[^\\x00-\\x7F]\" -g \"*.html\" demos index.html`
- [ ] `git status --short` (review only intended changes)

## 12) Publish and Verification
- [ ] Commit message clearly describes industry + standard upgrade.
- [ ] Push to `main`.
- [ ] Wait for GitHub Pages status to reach `built`.
- [ ] Verify live URL returns HTTP 200.
- [ ] Verify key content appears on live page (new heading/section markers).
- [ ] Re-check robots/sitemap state after deployment.

## 13) Sign-Off (Definition of Done)
- [ ] Industry-specific design quality passed.
- [ ] SEO safety and metadata checks passed.
- [ ] Contact and CTA links verified live.
- [ ] Demo is presentation-ready for client proposals.

---

## Monthly Portfolio Maintenance (Quick)
- [ ] Re-check all demo URLs for HTTP 200.
- [ ] Re-check main site metadata and canonical.
- [ ] Review contact links for changes.
- [ ] Review noindex strategy for demos.
- [ ] Add or retire demos based on target industries.

