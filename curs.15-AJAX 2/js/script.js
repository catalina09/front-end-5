// //ARATA  SERIALELE CE CONTIN GIRL!!!!!!!!!!!!!!!!!!!!!!!!!1
// $(domLoaded)

// function domLoaded() {
//   console.log('Dom loaded')
  
//   var getShowsData = function () {
//   $.ajax({  // metoda prin care facem call la un http
//     url: "http://api.tvmaze.com/search/shows?q=girls",
//     method: "GET",
//     success: manageData
//     })
//   }
  
//    $('#invoke-ajax-test-call').on('click', function() {
//     getShowsData()
//   })
  
//   function manageData (data, textStatus, jqXHR) {   // nu putem schimba ordinea parametrilor la request
//     $(".container").html(renderHtml(data))

//   }
  
//   function renderHtml(data) {
//     var html = `<ul>`
//      for (i = 0; i < data.length; i++) {
// //         console.log("Title: ", data.show[i].show.name);
//        html += `<li>` + data[i].show.name + `</li>`
//       }
//        html += `</ul>`
//        return html;
        
//   }
//}
  
  
  
  
 //ARATA  SCORE SI URL!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

// $(domLoaded)

// function domLoaded() {
//   console.log('Dom loaded')
  
//   var getShowsData = function () {
//   $.ajax({  // metoda prin care facem call la un http
//     url: "http://api.tvmaze.com/search/shows?q=girls",
//     method: "GET",
//     success: manageData
//     })
//   }
  
//    $('#invoke-ajax-test-call').on('click', function() {
//     getShowsData()
//   })
  
//   function manageData (data, textStatus, jqXHR) {   // nu putem schimba ordinea parametrilor la request
//     $(".container").html(renderHtml(data))

//   }
  
//   function renderHtml(data) {
//     var html = `<ul>`
   
//      for (i = 0; i < data.length; i++) {
//         var score = data[i].score;
//         var url = data[i].show.url;
//         var name = data[i].show.name;
// //         html += `<li>` + name + url + score + `</li>`;
//        html += `<li>` + name + " - " + score + " - " + `<a href=` + url + `>` + url + `</a>` + `</li>`
//       }
      
//        return html;
//   }
   
// }


///CREAREA UNUI INPUT DE CAUTARE INAINTE DE A APASA BUTONUL "APASA"

$(domLoaded)

function domLoaded() {
  console.log('Dom loaded')
  
  var getShowsData = function (dynamicValue) {
  $.ajax({  // metoda prin care facem call la un http
    url: "http://api.tvmaze.com/search/shows?q=" + dynamicValue,
    method: "GET",
    success: manageData
    })
  }

   $('#invoke-ajax-test-call').on('click', function() {
      var query = $('#value').val()
    getShowsData(query)
  })
  
  function manageData (data, textStatus, jqXHR) {   // nu putem schimba ordinea parametrilor la request
    $(".container").html(renderHtml(data))

  }
  
  function renderHtml(data) {
    var html = `<ul>`
   
     for (i = 0; i < data.length; i++) {
        var score = data[i].score;
        var url = data[i].show.url;
        var name = data[i].show.name;
//         html += `<li>` + name + url + score + `</li>`;
       html += `<li>` + name + " - " + score + " - " + `<a href=` + url + `>` + url + `</a>` + `</li>`
      }
      
       return html;
  }
   
}


