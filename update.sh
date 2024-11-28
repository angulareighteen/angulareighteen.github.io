#!/bin/bash

# Record the start date and time
date

source ~/.nvm/nvm.sh

# Navigate to the project directory
cd ~/source/angulareighteen/

# Check and install Node Version Manager (NVM)
nvm --version
nvm install --lts

# Check versions of Node and NPM
node --version
npm --version

# Install Yarn globally
npm install --global yarn

# Record the date and time
date

# Remove yarn.lock file
rm yarn.lock

# Record the date and time
date

# Install dependencies using Yarn
time yarn

# Record the date and time
date

# Fetch the latest changes from the remote repository
git fetch

# Check the status of the repository
git status

# Add all changes to staging
git add .

# Commit the changes with a message
git commit --message "add all files" --message "update from terminal"

# Pull the latest changes and rebase
git pull --rebase origin master

# Push the changes to the remote repository
git push origin master

# Run Yarn
yarn

# Update Angular packages
yarn run ng update

# Build the Angular project
yarn run ng build

# Fetch the latest changes from the remote repository
git fetch

# Check the status of the repository
git status

# Add all changes to staging
git add .

# Commit the changes with a message
git commit --message "add all files" --message "update from terminal"

# Pull the latest changes and rebase
git pull --rebase origin master

# Push the changes to the remote repository
git push origin master

# Run tests
yarn run ng test

# Update specific Angular packages
yarn run ng update @angular/core @angular/cli @angular/material

# Add all changes to staging
git add .

# Commit the changes with a message
git commit --message "add all files" --message "update from terminal"

# Pull the latest changes and rebase
git pull --rebase origin master

# Push the changes to the remote repository
git push origin master

# Update browserslist database
echo y | npx update-browserslist-db@latest

# Fetch the latest changes from the remote repository
git fetch

# Check the status of the repository
git status

# Add all changes to staging
git add .

# Commit the changes with a message
git commit --message "add all files" --message "update from terminal"

# Pull the latest changes and rebase
git pull --rebase origin master

# Push the changes to the remote repository
git push origin master

# Show the remote repository details
git remote show origin

# Record the end date and time
date
