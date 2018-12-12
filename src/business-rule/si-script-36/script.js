var userIDs = '';
var gr = new GlideRecord('kb_feedback');
gr.addQuery('article',current.sys_id);
gr.addQuery('useful','yes');
gr.query();
while(gr.next()) {
	userIDs += gr.user + ',';
}

gs.log('Favorite articles... ' + userIDs);

var ur = 'https://kochkbspov.service-now.com/kb_view.do?sysparm_article=' + current.number;

//ur = '<a href="' + ur + '">Updated HR Knowledge Article</a>';

if(userIDs){
	gs.eventQueue('kb.favorite', current, userIDs, ur);
}
