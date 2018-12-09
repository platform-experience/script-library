require 'fileutils'
require 'nokogiri'
require_relative 'config'

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
  %x( sed -i '' -e "s/#{arg1}/#{arg2}/g" #{arg3} )
end

def to_slug(category)
  return category.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
end

doc = Nokogiri::XML(File.open("tmp/scripts.xml"))
persons = doc.xpath(Config::XML_NODE)
persons_data = persons.map {|person|
  {
    type: person.xpath("./script_type").text,
    description: person.xpath("./short_description").text,
    details: person.xpath("./details").text,
    script: person.xpath("./script").text
  }
}

count = 1
persons_data.each do |item|
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