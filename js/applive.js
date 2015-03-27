var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});
App.fromURL = "https://raw.githubusercontent.com/djcf/djcf.github.io/master/data.json";

Ember.$.getJSON("data.json").then(function(data) {
App.dat = data;
App.fetched = new Date().toUTCString();

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

});