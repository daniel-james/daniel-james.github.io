var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});
App.fromURL = "https://raw.githubusercontent.com/djcf/djcf.github.io/master/data.json";
//Ember.$.getJSON("data.json").then(function(data) {
//  App.dat = data;
App.fetched = new Date().toUTCString();

App.dat = {
  "Index": {
    "section": "About Me",
    "name": "Daniel JC Fisher",
    "picture": "assets/profilesq.jpg",
    "blurb": "Software engineer, living in Edinburgh but eager to travel.",
    "details": "<p>Passionate about software. Passionate about people. Passsionate about you.</p><p>I've always believed that technology can help bring about lasting social change. But how many activists understand the complexity of today's software development lifecycle? How many engineers can offer bespoke software applications tailored to the needs of emerging grassroots movements? Not many.</p><p>I believe in balancing simplicity and elegance with useful functionality that reflects the values of inclusivity, collaboration, and stakeholdership. I believe in getting things done ahead of time and ahead of budget, and in rapid iteration cycles as your needs develop.</p><p>But what about you? You are innovative, stategic, and dynamic. You need someone who understands those qualities. Someone who doesn't say 'What?' when you ask them about the latest web technology. You need someone who is already using those tools and fully understands their strengths and weaknesses. From PhP to Node.JS, from Wordpress to Drupal, from HAML and SASS to LESS and Jade, and from Virtual Box to Docker, you need a full-stack dev/ops specialist.</p><p>I am that person.</p>",
    "next": {
      "link": "Experience",
      "text": "see my skills and experience"
    }
  },
  "Education": {
    "section": "Academic Qualifications",
    "university": {
      "institution": "<a href='https://www.st-andrews.ac.uk/' target='_top'>University of St Andrews</a>",
      "degree": "<a href='https://www.st-andrews.ac.uk/gsd/courses/ug/sd/' target='_top'>B.Sc (Hons), Sustainable Development 2011</a>",
      "details": "<a href='http://www.cs.st-andrews.ac.uk/prospective-ug/degrees' target='_top'>With specialization in Computer Science (Internet Computer Science track)</a>"
    },
    "school": {
      "institution": "<a href='http://www.strode-college.ac.uk/' target='_top'>Strode College</a>",
      "degree": "A-Levels (Politics A., Philosophy A., Computing A.)",
      "details": "AS-Levels (Psychology, Business Studies, Critical Thinking)",
      "degree2": "GNVQ in ICT (Distinction)"
    },
    "blurb": "For most people, a university degree is nothing but a piece of paper to a better quality of life. I saw it differently. I was passionate&mdash;passionate about making a different, passionate about sustainable change, and passionate about learning. I wanted to be at the fore-front of social change&mdash;and that's why I started the Permaculture Society and the Transition St Andrews group, and chaired OneWorld, the largest and most active student campaigning group in the University at the time. But it was the degree course, a joint honours programme with Computer Science, which taught me the real values which continue to be relevent to me today: values like the holistic approach to integrated systems, stakeholder dialogue, and consensus, all of which are relevent to my work daily.",
    "next": {
      "link": "Awards",
      "text": "Award and Achievements"
    }
  },
  "Awards": {
    "awardSection": {
      "section": "Awards and Achievements",
      "title": "Best Artificial Intelligence",
      "award": "University of St Andrews Robocode Competition",
      "when": "May 2007",
      "details": "<p>The University of St Andrews Robocode Competition was a fun java project to code a software robot to compete directly against other robots in on a 2D simulated surface. Players have no direct influence on the game or their robots, instead the player must write the AI of the robot telling it how to behave and react on events occurring in the battle arena.</p<p>My entry used intelligent strategy patterning which was capable of swapping different strategies when the one it was using seemed to be failing as well as being able to adjust parameters for the chosen strategy on the fly. It used force-differential feedback based on the positions of other robot to decide where to move, and came with a graphical debugging suite.</p>"
    },
    "positionSection": {
      "section": "Positions Held",
      "title": "<a href='http://www.st-andrews.ac.uk/staff/ppd/Newstaffinduction/UnderstandingUniversitystructure/'>Science and Medicine Senate Representative</a>",
      "when": "March 2009 to April 2010",
      "details": "As one of only three students elected to the <i>Senatus Academicus</i>, the highest academic decision-making body in the University, I was responsible for ensuring that matters affecting Science and Medicine students were brought to the attention of both the University and the Student's Association. This experience taught me to work successfully and productively within large organisations, as well as valuable interpersonal skills relating to stakeholder participation and involvement."
    },
    "next": {
      "link": "data",
      "text": "see the raw data (fetched over AJAX) which was used to construct this SPA since you've come this far"
    }
  },
  "Experience": {
    "experience": {
      "title": "Recent Experience",
      "examples": [{
        "title": "Development and Operations Specialist",
        "blurb": "DJCF Design",
        "details": "<p>Dev/Ops. Everyone's talking about it. Some people even claim to offer it. But how many people are actually doing it? From container-based applications to automatic monitoring and deployments, my main expertise lies with helping you understand your systems and deploy them more effectively.</p>"
      },{
        "title": "<a href='https://www.commonspace.scot' target='_top'>CommonSpace Lead Engineer</a>",
        "blurb": "A ground-breakingly innovative, socially-aware media portal",
        "details": "<p>When people have problems, I'm the one they tend to call. That's why when the <a href='https://www.allofusfirst.scot' target='_top'>CommonWeal</a> realised they had been mis-sold a faulty, unlicenced and badly-fit-for-purpose system, they asked me to take on the case. I knew they'd come to the right place.</p><p>Working tirelessly, I lead a small team to re-engineer their systems from the ground up. After refitting their server, saving them money in the process, I set to task working with their stakeholders to design and implement a revolutionary social media and media publishing platform tailored around their unique needs. When we were ready, 12 months later, to finally launch the system, it took Scotland by storm.</p> <p><em>Core technologies used:</em> Drupal, Docker, CiviCRM, and other integrational areas like LDAP, SSO, AJAX and Python.</p>"
      },{
        "title": "Employee Management Application",
        "blurb": "For the Event Safety Alliance",
        "details": "<p>Although I'll always prefer working for the grassroots and the third sector, many of my clients <i>are</i> small businesses and sole traders. When ESA requested a full-stack employee management solution and web portal for their business. The web application kept track of employee data including health records, employment history, dietary requirements, and personal information to print reports for relevant shift supervisors and assist with financial and shift tracking. It did so using best practices recommended for web applications, including notable design patterns such as model-view-controller and active record.</p> <p><em>Core technologies used:</em> The LAMP stack, JQuery, and CakePhP.</p>"
      }]
    },
    "skills": {
      "title": "Technical Skills",
      "blurb": "Extensive hardware and software experience in networking and information technology.",
      "skills": [{
        "type": "Server-side Programming",
        "details": "I have extensive experience building full-stack applications with PhP (assisted by frameworks as diverse as Drupal and Wordpress to CakePhP), Java, Ruby and Node.JS. I'm most at home when facing tough technical challenges calling for innovative and unusual solutions needed in hair-raisingly tight deadlines."
      }, {
        "type": "Client-side Programming",
        "details": "I am extremely proficient with Javascript, including JQuery, Ember.js (this SPA was written in Ember), CoffeeScript, SASS/SCSS, HAML, LESS, JADE and other related technologies."
      }, {
        "type": "Common Web Frameworks",
        "details": "Extensive experience developing software for content-management systems and frameworks including Drupal and Wordpress."
      }, {
        "type": "Operating Systems, Administration.",
        "details": "In my spare time, I help run a community-based grassroots-focused ISP and their fleet of Linux servers which I have helped modernize and update. As a result, I am fully at home with Linux and Unix-like systems as these make up the bulk of computers on the web today. I prefer container-based fully-isolated application infrastructures like Docker, and I love working with the full scope of management tools which allow today's web-scale systems to function effectively."
      }]
    },
    "next": {
      "link": "Education",
      "text": "learn about my academic qualifications"
    }
  }
};

App.Router.map(function() {
  this.route('data');
  for(var key in App.dat) {
    this.route(key);
  }
});

App.DataController = Ember.Controller.extend({
  data: JSON.stringify(App.dat),
  url: App.fromURL,
  section: "Raw data",
  time: App.fetched
});

linksArray = Array();
for(var key in App.dat) {
  linksArray.push(key);
  properties = Array();
  Ember.$.each(eval("App.dat."+key), function(kkey,v) {
    properties.push(kkey + ": " + JSON.stringify(v))
  });
  console.log("App." + key + "Controller = Ember.ObjectController.extend({" + properties + "});");
  eval("App." + key + "Controller = Ember.ObjectController.extend({"+ properties + "});");
}

App.ApplicationController = Ember.Controller.extend({
  links: linksArray,
  year: function() {
    return (new Date()).getFullYear();
  }.property()
});