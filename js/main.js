function removeLinks(nodelist) {
    var elements = nodelist;
    for(var i = 0; i < elements.length; ++i) {
	var element = elements[i];
	element.style.display="none";
    }
}

function openProject(element) {
    var nodes = element.childNodes;
    for(var i = 0; i < nodes.length; i++) {
	var node = nodes[i];
	if(node.className == 'text-holder') {
	    var nodeChildren = node.childNodes;
	    for(var j = 0; j < nodeChildren.length; j++) {
		var child = nodeChildren[j];
		if(child.className == 'project-url') {
		    var url = child.getAttribute('href');
		    window.open(url);
		    break;
		}
	    }
	}
    }
}

function hideProjects() {
    jQuery('.project').mouseenter(function() {
	var projects = document.getElementsByClassName('project');
	for(var i = 0; i < projects.length; i++) {
	    if(projects[i] != this) {
		setGray(projects[i]);
	    }
	}
    }).mouseleave(function() {
	var projects = document.getElementsByClassName('project');
	for(var i = 0; i < projects.length; i++) {
	    if(projects[i] != this) {
		setColors(projects[i]);
	    }
	}
    });
}

function getPath(project) {
    var path = project.getElementsByTagName('img')[0].getAttribute('src');
    return path;
}

function buildGrayPath(string) {
    var stripped = string.substring(0, string.length - 4);
    var appended = stripped.concat('_gray.png');
    return appended;
}

function buildColorsPath(string) {
    var stripped = string.substring(0, string.length - 9);
    var appended = stripped.concat('.png');
    return appended;
}

function setColors(project) {
    var path = getPath(project);
    var colorsPath = buildColorsPath(path);
    project.getElementsByTagName('img')[0].src = colorsPath;
}

function setGray(project) {
    var path = getPath(project);
    var grayPath = buildGrayPath(path);
    project.getElementsByTagName('img')[0].src = grayPath;
}

window.onload = function onLoad() {
    var elements = document.getElementsByClassName('project-url');
    removeLinks(elements);
    hideProjects();
}
