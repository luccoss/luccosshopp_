# LUCCO autopublish content format

Use `daily.json` as the publishing feed.

Each item needs:
- category
- title
- summary
- url

A future Git/CMS automation can overwrite this file and redeploy Netlify.
The static site remains valid even if no automation is connected.
