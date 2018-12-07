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
    create_config
    touch ${script_dir}/README.md
    touch ${script_dir}/script.js
  fi
}

create_config() {
  curl ${CONFIG_GIST} > ${script_dir}/config.json
  replace_content "${NAME_TEMP}" "${args[1]}" ${script_dir}/config.json
  map_category ${script_dir}
}

main() {
  create_base_dir
}

map_category() {
  for i in "${args[0]}"; do
    case $i in
    body-html-template)
      replace_content "${CAT_TEMP}" "${CAT_BODY_HTML_TEMPLATE}" ${1}/config.json
      ;;
    business-rule)
      replace_content "${CAT_TEMP}" "${CAT_BUSINESS_RULE}" ${1}/config.json
      ;;
    client-controller)
      replace_content "${CAT_TEMP}" "${CAT_CLIENT_CONTROLLER}" ${1}/config.json
      ;;
    client-script)
      replace_content "${CAT_TEMP}" "${CAT_CLIENT_SCRIPT}" ${1}/config.json
      ;;
    css)
      replace_content "${CAT_TEMP}" "${CAT_CSS}" ${1}/config.json
      ;;
    general)
      replace_content "${CAT_TEMP}" "${CAT_GENERAL}" ${1}/config.json
      ;;
    link)
      replace_content "${CAT_TEMP}" "${CAT_LINK}" ${1}/config.json
      ;;
    script-action)
      replace_content "${CAT_TEMP}" "${CAT_SCRIPT_ACTION}" ${1}/config.json
      ;;
    script-include)
      replace_content "${CAT_TEMP}" "${CAT_SCRIPT_INCLUDE}" ${1}/config.json
      ;;
    server-script)
      replace_content "${CAT_TEMP}" "${CAT_SERVER_SCRIPT}" ${1}/config.json
      ;;
    ui-action)
      replace_content "${CAT_TEMP}" "${CAT_UI_ACTION}" ${1}/config.json
      ;;
    ui-policy)
      replace_content "${CAT_TEMP}" "${CAT_UI_POLICY}" ${1}/config.json
      ;;
    ui-script)
      replace_content "${CAT_TEMP}" "${CAT_UI_SCRIPT}" ${1}/config.json
      ;;
    workflow)
      replace_content "${CAT_TEMP}" "${CAT_WORKFLOW}" ${1}/config.json
      ;;
    esac
  done
}

replace_content() {
  sed -i '' -e "s/${1}/${2}/g" ${3}
}

args=($@)
main
