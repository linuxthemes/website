#!/bin/bash

template="template.html"
names=(
kde 
gnome 
hyprland
xfce
# waybar
micro
neovim
vscode
bash
eza
ghostty 
alacritty
kitty
)

mkdir -p programs

for index in "${!names[@]}"; do
    name="${names[$index]}"
    cp "$template" "programs/${name}.html"
    new_index=$((index - 1))
    sed -i "s/programData\[0\]/programData\[${index}\]/g" "programs/${name}.html"
done
