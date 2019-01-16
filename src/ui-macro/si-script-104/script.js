// Change:
// <g2:evaluate>
//   kb.query();
// </g2:evaluate>

// To:
// <g2:evaluate>
//  <!-- EH Modification Start - Filter on country below -->
//  kb.addQuery("u_country", gs.getUser().getCountry());
//  kb.addOrCondition('u_country', 'GL');
//  <!-- EH - Modification End - Remove above to restore full functionality -->

//   kb.query();
// </g2:evaluate>
