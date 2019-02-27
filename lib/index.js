// const baseUrl = 'http://localhost:3000/'
const baseUrl = 'https://friend-finder-1808.herokuapp.com/'

function getDailyPet(){
  var uri = 'api/v1/daily_pet'
  var requestUrl = baseUrl + uri
  const requestResponse = $.ajax(
                                {url: `${requestUrl}`,
                                type: 'get',
                                contentType: 'application/json',
                                dataType: 'json',
                                success: function(res){
                                  document.images.namedItem('daily-picture').src = res["data"]["attributes"]["picture_url"];
                                  document.getElementById("daily-name").innerHTML = res["data"]["attributes"]["name"]
                                  document.getElementById("daily-location").innerHTML = res["data"]["attributes"]["location"]
                                  document.getElementById("daily-description").innerHTML = res["data"]["attributes"]["description"]
                                },
                                error: function(res){
                                   console.log("Error");
                                }
                              });
}

window.onload = getDailyPet;
