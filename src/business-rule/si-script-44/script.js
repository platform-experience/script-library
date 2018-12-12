Knowledge_query business rule
var RESTRICT_ME_KB = ['kb_view.do', 'kb_home.do', 'kb_find.do', 'kb_list.do', 'textsearch.do', 'view_content.do'];

if (gs.getSession().isInteractive() && shouldRestrict()) {
    //var p = current.addQuery("language", gs.getUser().getLanguage() );
    var p = current.addQuery("u_country", gs.getUser().getCountry() );
        p.addOrCondition('u_country', 'GL');
