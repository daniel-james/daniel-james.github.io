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
    "blurb": "Software developer, living in Edinburgh.",
    "details": "<p>I'm a software developer with principal experience tying together front-end technologies such as typical web stack of Javascript and associated technologies and frameworks such as Ember and JQuery and templating languages like JADE, LESS and HAML with the back-end systems, typically LAMP/PhP, Ruby (on Rails) and Node.</p><p>I live in Edinburgh where I'm passionate about good software principles and design. I'm not satisfied unless I'm learning a new, better way to do something &mdash; that's why I make it my goal to always add at least one new tool to my toolbox with every project that I attempt. Because there's nothing more satisfying than knowing from experience that you're using the best tool for the job.</p><p>I have a proven ability to meet deadlines, I speak plainly and simply, and I'm very, very good at breaking down a complex problem into the kind of simple steps anyone can follow and understand. <a href='https://www.flickr.com/photos/anarcocurious/'>I also have a fairly awesome sideline in photography</a>, though software is my main passion. I like cats, long walks, and nature. I have been described as 'sharp as a pin' on more than one occasion. I'm also passionate about open-source software: what it can do for you, what it can do for me, and why it is so important to all of our lives.</p>",
    "next": {
      "link": "Experience",
      "text": "see my skills and experience"
    }
  },
  "Education": {
    "section": "Academic Qualifications",
    "university": {
      "institution": "University of St Andrews",
      "degree": "B.Sc (Hons), Sustainable Development 2011",
      "details": "With specialization in Computer Science (Internet Computer Science track)"
    },
    "school": {
      "institution": "Strode College",
      "degree": "A-Levels (Politics A., Philosophy A., Computing A.)",
      "details": "AS-Levels (Psychology, Business Studies, Critical Thinking)",
      "degree2": "GNVQ in ICT (Distinction)"
    },
    "blurb": "The University of St Andrews provided an ideal scholastic environment for me to develop my computing skills, something I had always wanted to do. As the University also provided a more 'American'-style liberal arts environment, I also benefited by diversifying my interests at this time and switched to the Sustainable Development programme half-way through my degree. The SD programme is structured like a join degree and students take credits from both that School and a partner School, in my case Computer Science. I was thus able to benefit by skipping modules in Database Design and Software Engineering which I felt I had better covered outside of the course and today I have greatly benefited from the elective modules this choice was able to afford me. The most useful things I learnt were confidence reading manuals and documentation and, from many networking classes, to never, ever trust the network.",
    "next": {
      "link": "Awards",
      "text": "hear about the time I made a battlefield AI and served in the University Senate"
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
        "title": "Freelancer",
        "blurb": "DJCF Design",
        "details": "<p>As a sole trader I am, of course, responsible for orchestrating the technical direction for all new projects, and deciding and then implementing new technologies and practices. I am also responsible for overall technical project design and architecture within the systems I deploy for clients, as well as all development and support. My customers mainly include small businesses and other sole traders.</p>"
      },{
        "title": "Employee Management Application",
        "blurb": "For the Event Safety Alliance",
        "details": "<p>ESA requested a full-stack employee management solution and web portal for their business. The web application kept track of employee data including health records, employment history, dietary requirements, and personal information to print reports for relevant shift supervisors and assist with financial and shift tracking. It did so using best practices recommended for web applications, including notable design patterns such as model-view-controller and active record.</p> <p><em>Technologies used:</em> The LAMP stack, JQuery, and CakePhP.</p>"
      },{
        "title": "Bespoke Desktop Application",
        "blurb": "For the Event Safety Alliance",
        "details": "<p>ESA also requested an electronic logging system to record radio traffic for use in out-of-band locations. Our solution was ad-hoc network-accessible, easy-to-use and deploy, and ran on all common operating systems.</p><p><em>Technologies used</em>: Java, RMI, and the Swing GUI toolkit.</em> "
      }]
    },
    "skills": {
      "title": "Technical Skills",
      "blurb": "Extensive hardware and software experience in networking and information technology.",
      "skills": [{
        "type": "Server-side Programming",
        "details": "I have experience building full-stack applications with PhP (using CakePhP), Java and Node.JS using the Sails/Express framework."
      }, {
        "type": "Client-side Programming",
        "details": "I consider myself proficient in Javascript, JQuery, Ember.js (this SPA was written in Ember), CoffeeScript, SASS/SCSS, HAML, LESS and JADE."
      }, {
        "type": "Common Web Frameworks",
        "details": "Extensive experience developing software for content-management systems and frameworks including Drupal and Wordpress."
      }, {
        "type": "Operating Systems, Administration and Software Suites",
        "details": "I am fully at home using and administering Linux (Ubuntu/Fedora preferable), Mac OSX and Microsoft Windows and I have recent experience administering Linux- and Windows-based network services of many kinds, including file- and print-servers such as Windows Server and Samba, using heterogeneous-client networks. I also have experience administering multi-user web and mail servers (using Debian) scaling to hundreds of users. This includes the full set of common Linux services including Squid and Apache. I can also use Latex, Adobe Photoshop, Microsoft Office, and other common productivity packages for Windows, OS X, and Linux platforms."
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