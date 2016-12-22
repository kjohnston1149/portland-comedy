import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    // Your Client ID can be retrieved from your project in the Google
    // Developer Console, https://console.developers.google.com
    var CLIENT_ID = '474937019011-ck824t8cts8ls81hovh552nn10oovlgd.apps.googleusercontent.com';

    var SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

    var eventsArray = [];

    $.getScript("https://apis.google.com/js/client.js?onload=checkAuth", function() {
    }).then( function handleAuthClick() {
       gapi.auth.authorize(
         {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
         handleAuthResult);
       return false;
    });

    /**
     * Check if current user has authorized this application.
     */
    function checkAuth() {
      gapi.auth.authorize(
        {
          'client_id': CLIENT_ID,
          'scope': SCOPES.join(' '),
          'immediate': true
        }, handleAuthResult);
    }
    /**
     * Handle response from authorization server.
     *
     * @param {Object} authResult Authorization result.
     */
    function handleAuthResult(authResult) {
      var authorizeDiv = document.getElementById('authorize-div');
      if (authResult && !authResult.error) {
        // Hide auth UI, then load client library.
        authorizeDiv.style.display = 'none';
        loadCalendarApi();
      } else {
        // Show auth UI, allowing the user to initiate authorization by
        // clicking authorize button.
        authorizeDiv.style.display = 'inline';
      }
    }

    function loadCalendarApi() {
      gapi.client.load('calendar', 'v3', listUpcomingEvents);
    }
  function listUpcomingEvents(events) {
    var request = gapi.client.calendar.events.list({
      'calendarId': 'jim6kbma2850sds9mcohvbmgbo@group.calendar.google.com',
      'timeMin': (new Date()).toISOString(),
      'showDeleted': false,
      'singleEvents': true,
      'maxResults': 10,
      'orderBy': 'startTime'
    });

    request.execute(function(resp) {
      var events = resp.items;
      console.log(events);

      if (events.length > 0) {
        for (var i = 0; i < events.length; i++) {
          var event = events[i];
          var when = event.start.dateTime;

          var description = event.description;
          console.log(description);
        }
      }
    });

    }
// $.when.apply($, listUpcomingEvents).done(function() {
//   eventsArray.push(events);
// });
return eventsArray;
}
});
