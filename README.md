# AbhayaNewsOnline

> ⚠️ Important: Repository history was rewritten to remove sensitive data from earlier commits. If you previously cloned this repository, please re-clone or reset your local copy to avoid divergence (see instructions below).

## Actions required by collaborators

1. Rotate any secrets that may have been exposed (API keys, database URIs, tokens).
2. Re-clone the repository:

```bash
# Recommended (safe)
rm -rf <local-repo-folder>
 git clone https://github.com/creomindinnovations/AbhayaNewsOnline.git
```

Alternatively, if you must preserve local changes, reset to remote (careful — this will overwrite local changes):

```bash
git fetch origin
git reset --hard origin/main
```

3. If you had previously pushed with the old history, verify remote branches and communicate with the team before force-pushing any new history.

---
