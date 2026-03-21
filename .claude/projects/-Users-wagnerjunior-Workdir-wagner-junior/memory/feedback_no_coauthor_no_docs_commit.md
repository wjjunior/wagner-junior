---
name: No co-author and no docs commits
description: User does not want Co-Authored-By lines in commits, and docs directory should be gitignored
type: feedback
---

Do not add Co-Authored-By lines to commit messages.
Do not commit docs/ directory — it is gitignored.

**Why:** User explicitly requested both of these preferences.
**How to apply:** Every commit in this project — skip the co-author footer and never stage files from docs/.
