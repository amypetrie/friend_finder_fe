// const baseUrl = 'http://localhost:3000/'
const baseUrl = 'https://friend-finder-1808-api.herokuapp.com/'
window.onload = getDailyPet()
window.onload = document.getElementById("search-button").addEventListener('click', searchButtonMethod)

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
function searchButtonMethod(){
  searchPets(populateSearchResults);
}
function searchPets(callback){
  var uri = 'api/v1/search'
  var requestUrl = baseUrl + uri
  var gender = document.querySelector('input[name = "gender"]:checked').value
  var animal = document.querySelector('input[name = "animal"]:checked').value
  var location = document.getElementById("form-location").value
  const requestResponse = $.ajax(
                                {url: `${requestUrl}`,
                                type: 'get',
                                data: {
                                  location: `${location}`,
                                  sex: `${gender}`,
                                  animal: `${animal}`
                                },
                                contentType: 'application/json',
                                dataType: 'json',
                                success: function(res){
                                  let results = res["data"]
                                  // let results = JSON.parse(res.responseText);
                                  callback(results);
                                },
                                error: function(res){
                                   console.log("Error");
                                }
                              });
}

function populateSearchResults(search_data){
  var petResults = document.getElementById("allResults")

  search_data.forEach(function(e){
    var petInfo = document.createElement("li")
    var petLocation = document.createElement("li")
    var petContact = document.createElement("li")
    var petResult = document.createElement("ul")

    petInfo.innerHTML = `Name: ${e["attributes"]["name"]} (${e["attributes"]["animal_type"]} / Sex: ${e["attributes"]["sex"]})`
    petLocation.innerHTML = `Location: ${e["attributes"]["location"]}`
    petContact.innerHTML = `Contact Email: ${e["attributes"]["contact_email"]}`

    petResult.append(petInfo)
    petResult.append(petLocation)
    petResult.append(petContact)

    petResults.append(petResult)
  })
}
