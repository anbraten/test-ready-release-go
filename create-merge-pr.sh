#! /bin/bash

# This script is used to create a PR for merging a branch into master.

NOW=$(date "+%Y-%m-%d-%H-%M-%S")
NAME="change: $NOW"

echo $NAME > test.txt

git checkout -b test-$NOW

git commit -am "Awesome $NAME"

git push

gh pr create --fill

gh pr merge

git checkout main
git pull