function generatePostTOC(insertBefore, startLv, dep) {
    var container = jQuery("<div id='postTOC'></div>");
    var div = jQuery("<ul id='mytoc'></ul>");
    var content = jQuery(insertBefore).first();

    if (startLv == undefined) { startLv = 2;}
    if (dep == undefined) { dep = 2;}

    container.append('<span class="tocHeading">' + 'Contents' + '</span>');

    div.tableOfContents(content, { startLevel: startLv , depth: dep });
    container.append(div);
    container.insertBefore(insertBefore);
}

function generateWikiTOC(insertBefore, appendPlace, startLv, dep) {
    var container = jQuery("<div id='wikiTOC' class='sidebar'></div>");
    var div = jQuery("<ul id='mytoc' class='nav sidenav' data-spy='affix' data-offset-top='150'></ul>");
    var content = jQuery(insertBefore).first();

    if (startLv == undefined) { startLv = 2;}
    if (dep == undefined) { dep = 2;}	

    div.tableOfContents(content, { startLevel: startLv , depth:dep });
    container.append(div);
    $(appendPlace).append(container);
}
