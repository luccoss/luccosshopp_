LUCCO NETLIFY SITE

Upload the CONTENTS of this folder to Netlify (or upload NETLIFY_SITE.zip).

IMPORTANT:
The paid PDF files are NOT inside this public website folder.
They are in PAYHIP_BUNDLES in the master package.

TO CONNECT PAYMENTS:
1. Create each bundle in Payhip.
2. Upload the matching customer ZIP from PAYHIP_BUNDLES.
3. Copy the Payhip product/checkout URL.
4. Open checkout-links.json.
5. Paste each URL between the quotation marks.
6. Re-upload the site to Netlify.

Example:
{
  "ai": "https://payhip.com/b/xxxxx",
  "money": "https://payhip.com/b/yyyyy"
}
