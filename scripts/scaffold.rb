require 'fileutils'
require_relative '../config/gist'
require_relative '../config/temp'
require_relative 'map_xml'

class Scaffold
  def self.create_config(dir_name, category, details)
    config_dir = "#{dir_name}/config.json"
    %x( curl #{Gist::CONFIG} > #{config_dir} )
    replace_content(Temp::CATEGORY, category, config_dir)
    replace_content(Temp::SOLUTION_DETAILS, details, config_dir)
  end

  def self.create_readme(dir_name, description, details)
    readme_dir = "#{dir_name}/README.md"
    %x( curl #{Gist::README} > #{readme_dir} )
    replace_content(Temp::TITLE, description, readme_dir)
    replace_content(Temp::SOLUTION_DETAILS, details, readme_dir)
  end

  def self.generate_scripts
    count = 1
    MapXml.do_map.each do |item|
      if !item[:script].empty? && !item[:type].empty? && !item[:description].empty?
        category = item[:type]
        description = item[:description]
        details = !item[:details].empty? ? item[:details] : item[:description]
        script = item[:script]
        dir_name = "dist/#{to_slug(category)}/si-script-#{count}"
        FileUtils.mkdir_p(dir_name) unless File.exists?(dir_name)
        File.write("#{dir_name}/script.js", script)
        create_config(dir_name, category, description)
        create_readme(dir_name, description, details)
        count = count + 1
      end
    end
  end

  def self.replace_content(arg1, arg2, arg3)
    return %x( sed -i '' -e "s/#{arg1}/#{arg2}/g" #{arg3} )
  end

  def self.to_slug(category)
    return category.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
  end
end
