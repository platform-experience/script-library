require 'fileutils'
require_relative 'config'
require_relative 'map_xml'

def create_config(dir_name, category, details)
  config_dir = "#{dir_name}/config.json"
  %x( curl #{Config::CONFIG_GIST} > #{config_dir} )
  replace_content(Config::CAT_TEMP, category, config_dir)
  replace_content(Config::SOLUTION_DETAILS_TEMP, details, config_dir)
end

def create_readme(dir_name, description, details)
  readme_dir = "#{dir_name}/README.md"
  %x( curl #{Config::README_GIST} > #{readme_dir} )
  replace_content(Config::TITLE_TEMP, description, readme_dir)
  replace_content(Config::SOLUTION_DETAILS_TEMP, details, readme_dir)
end

def replace_content(arg1, arg2, arg3)
  return %x( sed -i '' -e "s/#{arg1}/#{arg2}/g" #{arg3} )
end

def to_slug(category)
  return category.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
end

def scaffold_scripts
  count = 1
  MapXml.do_map.each do |item|
    if !item[:script].empty? && !item[:type].empty? && !item[:description].empty?
      category = item[:type]
      description = item[:description]
      details = !item[:details].empty? ? item[:details] : item[:description]
      dir_name = "dist/#{to_slug(category)}/si-script-#{count}"
      FileUtils.mkdir_p(dir_name) unless File.exists?(dir_name)
      File.write("#{dir_name}/script.js", item[:script])
      create_config(dir_name, category, description)
      create_readme(dir_name, description, details)
      count = count + 1
    end
  end
end

scaffold_scripts