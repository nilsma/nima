/**
* A function to set the about.html profile image to colored on mouseenter
* and back to gray-scale on mouseleave
*/
function colorMe() {
    var path;
    $('section#about-me img').mouseenter(function() {
	path = $(this).attr('src');
	path = path.substring(0, path.length - 9);
	path = path.concat('.jpg');
	document.getElementsByTagName('img')[0].src = path;
    }).mouseleave(function() {
	path = $(this).attr('src');
	path = path.substring(0, path.length - 4);
	path = path.concat('_gray.jpg');
	document.getElementsByTagName('img')[0].src = path;
    });
}

/**
* A function to set all other projects' thumbnails to gray-scale pictures
* on mouseenter on a section.project element. Also sets all other projects'
* thumbnails back to colored pictures on mouseleave
*/
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

/**
* A function to get the relative path to a projects thumbnail within
* that projects image element
* @param project HTMLElement - the .project HTML element of which to get the image path
* @return path string - the relative path of the image
*/
function getPath(project) {
    var path = project.getElementsByTagName('img')[0].getAttribute('src');
    return path;
}

/**
* A function to build the new relative path to the given thumbnails
* gray-scale equivalent thumbnail
* @param path string - the relative path to the currently displayed colored thumbnail
* @return appended string - the relative path to the gray-scale equivalent
*/ 
function buildGrayPath(path) {
    var stripped = path.substring(0, path.length - 4);
    var appended = stripped.concat('_gray.png');
    return appended;
}

/**
* A function to build the new relative path to the given thumbnails
* colored equivalent thumbnail
* @param path string - the relative path to the currently displayed gray-scale thumbnail
* @return appended string - the relative path to the colored thumbnail equivalent
*/
function buildColorsPath(string) {
    var stripped = string.substring(0, string.length - 9);
    var appended = stripped.concat('.png');
    return appended;
}

/**
* A function to set the project's image src attribute to point to
* the project's colored thumbnail
* @param project HTMLElement - the HTML element of the given section.project
*/
function setColors(project) {
    var path = getPath(project);
    var colorsPath = buildColorsPath(path);
    project.getElementsByTagName('img')[0].src = colorsPath;
}

/**
* A function to set the project's image src attribute to point to
* the project's gray-scale thumbnail
* @param project HTMLElement - the HTML element of the given section.project
*/
function setGray(project) {
    var path = getPath(project);
    var grayPath = buildGrayPath(path);
    project.getElementsByTagName('img')[0].src = grayPath;
}

window.onload = function onLoad() {
    var elements = document.getElementsByClassName('project-url');
    removeLinks(elements);
    hideProjects();
    colorMe();
}
