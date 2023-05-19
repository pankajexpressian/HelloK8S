#!/bin/bash
sudo apt-get remove git

sudo apt update

sudo apt upgrade

sudo apt install git

git --version

git config --global user.name "Pankaj"

git config --global user.email "pankajexpressian@gmail.com"