#!/bin/bash
set -euo pipefail

REPO="/Users/michaelristoff/Documents/GitHub/spoors"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PATCH="$SCRIPT_DIR/spoors-performance-fix.patch"

if [ ! -d "$REPO/.git" ]; then
  echo "Spoor's repo not found at: $REPO"
  echo "Run git apply manually from the repo root using: $PATCH"
  exit 1
fi

cd "$REPO"

echo "Repo: $REPO"
echo "Branch: $(git branch --show-current)"
echo "HEAD: $(git rev-parse --short HEAD)"
echo

if [ -n "$(git status --porcelain)" ]; then
  echo "STOP: repo has uncommitted changes. Nothing was modified."
  git status --short
  exit 2
fi

git apply --check "$PATCH"
git apply "$PATCH"

echo
echo "Patch applied. Running production build..."
npm run build

echo
echo "Done. Review before committing:"
git status --short
git diff --stat
