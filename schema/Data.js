var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://subscription-service-api.azurewebsites.net/subscribers', true);
xhr.onreadystatechange = function() {
  if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

    // Parse JSON response
    var data = JSON.parse(xhr.responseText);

    // Use the object however you wish
    console.log(data);
  }
  else{
      console.log(xhr.status)
  }
}



xhr.send();