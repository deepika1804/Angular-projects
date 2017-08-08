'use strict';

// Declare app level module which depends on views, and components
angular.module('mainApp').
controller('homeController',['$scope',function($scope){
	 $scope.profileDetails = {
        name : 'Deepika Chaudhary',
        designation : 'Experience Technologist L2',
        Company : 'Sapient Consulting Private Limited,Gurgaon,India',
        email : 'deepika.chaudhary2010@gmail.com',
        contact: '+91-8800298514',
        address: '70,New Housing Board Colony,Nahan,District Sirmaur,Himachal Pradesh, India',
        about:"Dedicated and highly ambitious to achieve organizational goals. Quick learner, self-motivated, dedicated and highly analytical with good communication and interpersonal skills.",
        totalExperience: "3 years",
        timeline: [{
        	duration: 'ASSOCIATE LEVEL L2/JAN 2016 - JUNE 2017',
        	work : 'Associate Level L2 at Sapient Consulting Limited'
        },
        {
        	duration: 'ASSOCIATE LEVEL L1/ DEC 2014 - JAN 2016',
        	work : 'Associate Level L1 at Sapient Consulting Limited'
        },
        {
        	duration: 'JUNIOR ASSOCIATE/JUNE 2014 - DEC 2014 ',
        	work : 'Junior Associate at Sapient Consulting Limited'
        }
        ],
        eduQual: [
        	{
        		name : "BACHELOR DEGREE / 2010 - 2014 / ELECTRONICS AND COMMUNICATIONS",
        		result : "NATIONAL INSTITUTE OF TECHNOLOGY,HAMIRPUR - 8.47"
        	},
        	{
        		name : "SECONDARY EDUCATION / 2010",
        		result : "ARMY SCHOOL NAHAN - 89.2%"
        	},
        	{
        		name : "HIGH SCHOOL / 2008",
        		result : "CARMEL CONVENT SCHOOL - 89.6%"
        	}
        ],
        profProjects:[{
        	name : 'Feedback Tracker',
        	Role : 'UI Developer',
        	Technology : 'HTML, CSS, Javascript, JQuery',
        	Responsibility : 'Development of responsive web pages, functionality, design according to wireFrames.'
        },
        {
        	name : 'IDEA Engineering Research Lab(Research Lab at Sapient)',
        	Role : 'UI Developer',
        	Technology : 'HTML, CSS, Javascript, JQuery, NodeJS, Websockets, LEGO Mindstorm',
        	Responsibility : 'Development of real time applications using frontEnd technologies(Node JS),sensors,arduino microcontrollers.'
        },
         {
        	name : 'Client JATO(Jet Airways Take Off)',
        	Role : 'UI Developer',
        	Technology : 'HTML, CSS, Javascript, JQuery, NodeJS, AngularJS, RequireJS, Karma, Protactor',
        	Responsibility : 'Development of modules, Performance Enhancements, Test Cases For AngularJS.'
        }],
        hobbies:[{
            hobbyName : "Painting/Sketching",
            hobbyClass : "glyphicon-edit"
        },
        {
            hobbyName : "Games-VolleyBall",
            hobbyClass : "glyphicon-cd"
        },{
            hobbyName : "Trekking",
            hobbyClass : "glyphicon-tent"
        },{
            hobbyName : "Music",
            hobbyClass : "glyphicon-music"
        }
        ],
        internships:[{
            name: 'Indian Institute of Remote Sensing(ISRO)',
            duration: 'May 2013 - June 2013'
        },{
            name: 'Atech Labs',
            duration:'May 2012 - June 2012'
        },{
            name: 'VOIP system using ARM microController',
            duration:'(Major Project)'
        },{
            name: 'Digital Based Lock System',
            duration:'(Minor Project)'
        }

        ]

        

     };
        

}])
