#!/bin/bash

source ./scripts/config.sh
source ./scripts/messages.sh

create_base_dir() {
  echo -e "${BLUE}${START_MSG}${RESET}"
  local script_dir="./src/${args[0]}/${PREFIX}-${args[1]}"
  if [ -d $script_dir ]; then
    echo -e "${BLUE}${EXIST_MSG}${RESET}"
  else
    echo -e "${BLUE}${SCAFFOLD_MSG}${RESET}"
    mkdir "./src/${args[0]}/${PREFIX}-${args[1]}"
    curl ${CONFIG_GIST} > ${script_dir}/config.json
    touch ${script_dir}/README.md
    touch ${script_dir}/script.js
  fi
}

main() {
  create_base_dir
}

args=($@)
main
