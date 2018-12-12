knowledgeReviewProcess();
knowledgeReviewReminder();

function knowledgeReviewProcess() {

	var kbRec = new GlideRecord('kb_knowledge');
	kbRec.addQuery('workflow_state', 'published');
	kbRec.addQuery('u_needs_review', 'false');
	kbRec.addQuery('u_under_review', 'false');
	kbRec.addQuery('u_reviewed_date', '<=', gs.daysAgo(180));
	kbRec.query();

	while(kbRec.next()) {
		kbRec.u_needs_review = 'true';
		kbRec.u_reminder_count = 0;
		kbRec.u_under_review_date = gs.nowDateTime();
		kbRec.update();
		gs.eventQueue("disney_kb.owner.review", kbRec);
	}
}

function knowledgeReviewReminder() {

	var kbRec = new GlideRecord('kb_knowledge');
	kbRec.addQuery('workflow_state', 'published');
	kbRec.addQuery('u_needs_review', 'true');
	kbRec.addQuery('u_reminder_count', '>=', 0);
	kbRec.addQuery('u_reminder_count', '<', 3);
	kbRec.addQuery('u_under_review_date', '<=', gs.daysAgo(10));
	kbRec.query();

	while(kbRec.next()) {
		if(kbRec.u_reminder_count == 0) {
			gs.eventQueue("disney_kb.owner.reminder", kbRec);
			kbRec.u_under_review_date = gs.nowDateTime();
			kbRec.u_reminder_count++;
		}
		else if(kbRec.u_reminder_count == 1) {
			gs.eventQueue("disney_kb.manager.reminder", kbRec);
			kbRec.u_under_review_date = gs.nowDateTime();
			kbRec.u_reminder_count++;
		}
		else if(kbRec.u_reminder_count == 2) {
			gs.eventQueue("disney_kb.group.reminder", kbRec);
			kbRec.u_under_review_date = gs.nowDateTime();
			kbRec.u_reminder_count++;
		}
		kbRec.update();
	}
}
