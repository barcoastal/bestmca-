#!/bin/zsh
# Weekly GSC snapshot: pull data, commit just the snapshot files, push.
# Pushing also triggers a Railway rebuild, which refreshes the site's
# build-stamped freshness signals (dateModified + Updated label).
set -e
cd "$HOME/mca-settlement-reviews"
$HOME/.nvm/versions/node/v20.20.0/bin/node scripts/gsc-snapshot.mjs >> /tmp/mcasr-gsc-snapshot.log 2>&1 || exit 1
git add docs/gsc-snapshots
if ! git diff --cached --quiet; then
  git commit -m "GSC weekly snapshot $(date +%F)" >> /tmp/mcasr-gsc-snapshot.log 2>&1
  git push origin main >> /tmp/mcasr-gsc-snapshot.log 2>&1 || echo "push failed (will ride along with next push)" >> /tmp/mcasr-gsc-snapshot.log
fi
