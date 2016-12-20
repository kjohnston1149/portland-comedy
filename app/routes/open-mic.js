import Ember from 'ember';

export default Ember.Route.extend({
model: function(gapi) {
  var CLIENT_ID = '474937019011-ck824t8cts8ls81hovh552nn10oovlgd.apps.googleusercontent.com';

 var SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

 function checkAuth() {
        gapi.auth.authorize(
          {
            'client_id': CLIENT_ID,
            'scope': SCOPES.join(' '),
            'immediate': true
          }, handleAuthResult);
      }





     function loadCalendarApi() {
       var calendarID = 'jim6kbma2850sds9mcohvbmgbo@group.calendar.google.com';
       checkAuth(CLIENT_ID);
       handleAuthResult(CLIENT_ID);

        var url = "https://www.googleapis.com/calendar/v3/calendars/" + calendarID;
        return Ember.$.getJSON(url).then(function(responseJSON) {
            console.log(responseJSON.results);
           return responseJSON.results;

      });

     }
     function handleAuthResult(authResult) {

      var authorizeDiv = document.getElementById('authorize-div');
      if (authResult && !authResult.error) {
        // Hide auth UI, then load client library.
        authorizeDiv.style.display = 'none';
        loadCalendarApi();
        console.log(responseJSON.results);
      } else {
        // Show auth UI, allowing the user to initiate authorization by
        // clicking authorize button.
        authorizeDiv.style.display = 'inline';
      }
    }



}
});
