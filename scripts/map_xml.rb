require 'nokogiri'
require_relative '../config/xml'

class MapXml
  def self.do_map
    @doc = Nokogiri::XML(File.open(Xml::SCRIPT_FILE))
    @scripts = @doc.xpath(Xml::ROOT_NODE)
    @script_data = @scripts.map {|script|
      {
        type: script.xpath("./script_type").text,
        description: script.xpath("./short_description").text,
        details: script.xpath("./details").text,
        script: script.xpath("./script").text
      }
    }
    return @script_data
  end
end
