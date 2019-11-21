window.onload = function () {

var app = new Vue({
    el:'#app',
    data: {
      dogs: []
    },
    created: function() {
      var self = this;
    
      $.get('https://dog.ceo/api/breeds/image/random/5', function(data) {
        self.dogs = data.message;
      })
    }
  })
}