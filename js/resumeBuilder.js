//--> Bio
var skills = ["dinamic","proActive"];
var bio = {
	"name": "Daniel Velazco ",
	"role": "webDeveloper",
	"contacts": {
		"mobile": "+584146328017",
		"email": "da27ve09@hotmail.com",
		"twitter": "@Daniel_Velazco_",
		"gitHub": "danielvelazco",
		"blog": "danielvelazco",
		"location": "Maracaibo, Venezuela"
	},
	"pictureUrl": "images/fry.jpg",
	"welcomeMessage": "Let's go yankees",
	"skills": skills,
	"display": function(){
		$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
		$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
		$("#header").append(HTMLbioPic.replace("%data%",bio.pictureUrl));
		$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
		$("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
		$("#topContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
		$("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
		$("#footerContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
		$("#footerContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
		$("#footerContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
		$("#footerContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
	}
};

bio.display();
//--> End of bio

//--> Works
var work = {
	"jobs": [{
		"workEmployer": "4told Ventures",
		"workTitle": "Business Analyst",
		"location": "Maracaibo, Venezuela",
		"workDescription": "Developing Business Rules",
		"workDates": "01-03-2016"
	}, {
		"workEmployer": "Giga IT",
		"workTitle": "QA Analyst",
		"location": "San Cristobal, Venezuela",
		"workDescription": "Testing automation ",
		"workDates": "01-10-2015"
	}, {
		"workEmployer": "BOD",
		"workTitle": "Testing Lead",
		"location": "Caracas, Venezuela",
		"workDescription": "Developing testing process",
		"workDates": "01-07-2008"
	}],
	"display": function(){
			for (jobs in work.jobs){
			var workStart = HTMLworkStart;
			$("#workExperience").append(workStart);
			var workEmployer = HTMLworkEmployer.replace("%data%",work.jobs[jobs].workEmployer);
			var workTitle = HTMLworkTitle.replace("%data%",work.jobs[jobs].workTitle);
			var workEmployerTitle = workEmployer + workTitle;
			$(".work-entry:last").append(workEmployerTitle);
			var workLocation = HTMLworkLocation.replace("%data%",work.jobs[jobs].location);
			var workDescription = HTMLworkDescription.replace("%data%",work.jobs[jobs].workDescription);
			var workDates = HTMLworkDates.replace("%data%",work.jobs[jobs].workDates);
			$(".work-entry:last").append(workDates);	
			$(".work-entry:last").append(workLocation);
			$(".work-entry:last").append(workDescription);	
	}
}
};

work.display();
//--> End of works

//--> Educations
var education = {
	"schools": [{
		"name": "URBE",
		"degree": "Engineering",
		"dates": "15/07/2005",
		"location": "Maracaibo, Venezuela",
		"major": "Software Engineer"
	}, {
		"name": "UESC",
		"degree": "Bachiller",
		"dates": "15/07/1998",
		"location": "Falcon, Venezuela",
		"major": "Bachiller en ciencias"
	}],
	"display": function(){
		for (edu in education.schools){
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLschoolName.replace("%data%",education.schools[edu].name));
			$(".education-entry:last").append(HTMLschoolDegree.replace("%data%",education.schools[edu].degree));
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[edu].dates));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[edu].location));
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[edu].major));
		}		
	}

};
education.display();
//--> End of educactions

//--> Projects
var projects = {
	"pro": [{
		"title": "Mi prestamito",
		"dates": "01/03/2016",
		"description": "Mobile app to make loans",
		"image": "images/loan.jpg"
	}, {
		"title": "TransGaitan",
		"dates": "01/10/2015",
		"description": "Web app to find a taxi",
		"image": "images/loan.jpg"
	}],
	"display": function(){
		for (pro in projects.pro){
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.pro[pro].title));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.pro[pro].dates));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.pro[pro].description));
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.pro[pro].image));
		}		
	}
};
projects.display();
//--> End of projects


if (bio.skills.length > 0){
	var skillsStart = HTMLskillsStart;
	$("#header").append(skillsStart);
	var skills = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(skills);
	var skills = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(skills);
};


$(document).click(function(loc) {
  // your code goes here!
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y)

});


function inName(name){
	name = name.trim().split(" ");
  	name[1] = name[1].toUpperCase();
  	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1]; 
};

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

