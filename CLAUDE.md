# Car Sale Broker Website

## About

<!-- What does this project do? -->

## Tech Stack

<!-- What technologies? (e.g. React, TypeScript, Supabase) -->

## Commands

<!-- How to run, build, and test -->

This is a plain static HTML/CSS/JS site. There is no `package.json` and no build step. Preview locally with:

- `npx serve .` or `python -m http.server`, then open the printed local URL
- Note: `vercel.json` sets `cleanUrls: true`, so extensionless routes like `/car-broker-alberta` only resolve on Vercel, not on a bare local file open. Use one of the servers above for local testing of internal links.

## Rules for Claude

### Always:

-

### Never:

- Never use em dashes (the U+2014 character) anywhere in site copy, meta tags, JSON-LD, comments, or code. Rewrite the sentence so it doesn't need one: split into two sentences, use "and" or "with," a colon, a comma, or parentheses, whichever reads most naturally for that spot. For page `<title>`/`og:title` pairs specifically, use the pipe separator (`|`), matching this site's existing house style. Enforced locally by `.githooks/pre-commit`: run `git config core.hooksPath .githooks` once per clone to activate it.

## Lessons Learned

<!-- Add entries when Claude makes a mistake so it won't repeat them -->
