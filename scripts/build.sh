#!/bin/bash

source ./config/scaffold.sh
source ./config/messages.sh

create_base_dir() {
  echo -e "${BLUE}${START_MSG}${RESET}"
  local script_dir="./src/${category}/${PREFIX}-${name}"
  if [ -d $script_dir ]; then
    echo -e "${BLUE}${EXIST_MSG}${RESET}"
  else
    echo -e "${BLUE}${SCAFFOLD_MSG}${RESET}"
    mkdir -p "./src/${category}/${PREFIX}-${name}"
    create_config
    create_readme
    touch ${script_dir}/script.js
  fi
}

create_config() {
  curl ${CONFIG_GIST} > ${script_dir}/config.json
  map_category ${script_dir}
  replace_content "${NAME_TEMP}" "${name}" ${script_dir}/config.json
  if [ -z ${common_name} ]; then
    replace_content "${COMMON_NAME_TEMP}" "${name}" ${script_dir}/config.json
  else
    replace_content "${COMMON_NAME_TEMP}" "${common_name}" ${script_dir}/config.json
  fi
  replace_content "${SOLUTION_DETAILS_TEMP}" "${solution_details}" ${script_dir}/config.json
}

create_readme() {
  curl ${README_GIST} > ${script_dir}/README.md
  if [ -z ${common_name} ]; then
    replace_content "${TITLE_TEMP}" "${name}" ${script_dir}/README.md
  else
    replace_content "${TITLE_TEMP}" "${common_name}" ${script_dir}/README.md
  fi
  replace_content "${DETAILS_TEMP}" "${solution_details}" ${script_dir}/README.md
}

main() {
  create_base_dir
}

map_category() {
  for i in "${category}"; do
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
category=$1
name=$2
common_name=$3
solution_details=$4
main
