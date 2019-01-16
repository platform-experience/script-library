current.u_request_type = 'Artist or Speaker';
current.short_description = 'This is an artist or speaker request';

var contract_language = '';
var indemnity_language = '';
var force_language = '';
var disclosure_language = '';

if (producer.indemnity == 'true') {
  indemnity_language =
    'Indemnity Clause: This is the approved indemnity langauge';
}

if (producer.non_disclosure == 'true') {
  disclosure_language =
    'Non-Disclosure Clause: This is the approved non-disclosure langauge';
}

if (producer.force_majeur == 'true') {
  force_language =
    'Force Majeur Clause: This is the approved force majuer langauge';
}

contract_language =
  indemnity_language + '\n' + disclosure_language + '\n' + force_language;

current.description = 'Required Legal Language:' + '\n' + contract_language;
