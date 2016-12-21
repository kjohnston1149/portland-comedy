import Ember from 'ember';

export default Ember.Route.extend({
//   model: function() {
//     debugger;
//     var CLIENT_ID = '474937019011-ck824t8cts8ls81hovh552nn10oovlgd.apps.googleusercontent.com';
//     var SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];
//     var calendarID = 'jim6kbma2850sds9mcohvbmgbo';
//     function checkAuth() {
//         gapi.auth.authorize(
//           {
//             'client_id': CLIENT_ID,
//             'scope': SCOPES.join(' '),
//             'immediate': true
//           });
//       }
//
//      var url = "https://www.googleapis.com/calendar/v3/calendars/" + calendarID;
//      //checkAuth();
//        return Ember.$.getJSON(url).then(function(responseJSON) {
//          console.log(responseJSON);
//          return responseJSON;
//        });
//
// }

// 
// model: function() {
//   var CLIENT_ID = '474937019011-ck824t8cts8ls81hovh552nn10oovlgd.apps.googleusercontent.com';
//
//  var SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];
//
// var calendarID = 'jim6kbma2850sds9mcohvbmgbo@group.calendar.google.com';
// var url = "https://www.googleapis.com/calendar/v3/calendars/" + calendarID;
//
//  function checkAuth() {
//         gapi.auth.authorize(
//           {
//             'client_id': CLIENT_ID,
//             'scope': SCOPES.join(' '),
//             'immediate': true
//           }, handleAuthResult);
//       }
//
//
//       function handleAuthResult(authResult) {
//
//        var authorizeDiv = document.getElementById('authorize-div');
//        if (authResult && !authResult.error) {
//          // Hide auth UI, then load client library.
//          authorizeDiv.style.display = 'none';
//        } else {
//          // Show auth UI, allowing the user to initiate authorization by
//          // clicking authorize button.
//          authorizeDiv.style.display = 'inline';
//        }
//       }
//
//
//      function loadCalendarApi() {
//
//        checkAuth().then(handleAuthResult());
//
//
//
//         return Ember.$.getJSON(url).then(function(responseJSON) {
//             console.log(responseJSON.results);
//            return responseJSON.results;
//
//       });
//
//
//      }
//        loadCalendarApi(CLIENT_ID, SCOPES, url);
//
//
//
//
// }
}
);
