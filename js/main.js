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

window.onload = function onLoad() {
    var elements = document.getElementsByClassName('project-url');
    removeLinks(elements);
}
