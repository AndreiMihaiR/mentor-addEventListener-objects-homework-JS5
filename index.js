const movieObject = {
  adult: false,
  backdrop_path: "/jBFxXKCrViA88hhO59fDx0Av4P.jpg",
  belongs_to_collection: {
    id: 10,
    name: "Star Wars Collection",
    poster_path: "/bYbHqvRANCpuRTs0RAu10LhmVKU.jpg",
    backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
  },
  budget: 11000000,
  genres: [
    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 28,
      name: "Action"
    },
    {
      id: 878,
      name: "Science Fiction"
    }
  ],
  homepage: "http://www.starwars.com/films/star-wars-episode-iv-a-new-hope",
  id: 11,
  imdb_id: "tt0076759",
  original_language: "en",
  original_title: "Star Wars",
  overview: "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
  popularity: 109.854,
  poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
  production_companies: [
    {
      id: 1,
      logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
      name: "Lucasfilm Ltd.",
      origin_country: "US"
    },
    {
      id: 25,
      logo_path: "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
      name: "20th Century Fox",
      origin_country: "US"
    }
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America"
    }
  ],
  release_date: "1977-05-25",
  revenue: 775398007,
  runtime: 121,
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English"
    }
  ],
  status: "Released",
  tagline: "A long time ago in a galaxy far, far away...",
  title: "Star Wars",
  video: false,
  vote_average: 8.2,
  vote_count: 17382
}
let submit = document.querySelector('button');
let input = document.querySelector('input');


submit.addEventListener('click', () => {
  console.log(input.value)
  movieObject.movieDirector = input.value;
  console.log(movieObject);
})

// console.log(movieObject)

//      1) Change the budget of the movie to be 0 to verify 
//      console.log(movieObject.budget) //before it was 11000000

movieObject.budget = 0;

// console.log(movieObject.budget);


//      2) Add new property `mustSee` with value true again to test it use console.log()

movieObject.mustSee = true;

// console.log(movieObject);

//      3) Add a new method to that object `getGenres` that will return array with 
//      only the names of the genres should display ['Adventure', 'Action', 'Science Fiction']
//      ****TIP use this keyword remember the right way you can use `this` in a method

movieObject.getGenres = function() {
console.log(this.genres);
}

// movieObject.getGenres();

//      4) Create a new variable that holds the production_companies

let newVariableOfProductionCompanies = movieObject.production_companies;

// console.log(newVariableOfProductionCompanies);

//      5) Create a input in html that will represent a name, and a button. The input value 
//       will be added into the existing object as a property called `movieDirector` when the Submit button will be clicked.

//    


//_____________________________________________________________________________________________

//      SECTION 2. 
//    Create a blog form with 4 inputs. First Name, Last Name, Gender, Message. On the right side the message will be displayed with the name and the message as you will see in the design. Some kind of Twitter application.

//      - First step: create the design nothing complicated.
//      - Second step: get the input elements in JS and get the values.
//      - Third step: when you click on the submit button add them to the right div.


let contentContainer = document.getElementById('blogContainer');
// console.log(contentContainer);

let firstName = document.getElementById('firstName');
// console.log(firstName);
let lastName = document.getElementById("lastName");
// console.log(lastName);
let gender = document.getElementsByClassName('gender');
// console.log(gender);
let message = document.getElementById('messageBox');
// console.log(message);
let submitBtn = document.getElementById("submitBtn");
// console.log(submitBtn);


submitBtn.addEventListener('click', (event) =>{
event.preventDefault();
let firstN = firstName.value;
let lastN = lastName.value;
let messageInput = message.value;
    document.getElementById('firstName').value = "";
    document.getElementById("lastName").value = "";
    document.getElementById('messageBox').value = "";
      
      let newParagraph = document.createElement('p');
      newParagraph.className = "mesage-container"
      contentContainer.appendChild(newParagraph);
      
      
      let finalMessage = document.querySelector('.result');
      finalMessage.appendChild(newParagraph);
      
      let genderSelect = document.querySelector('input[value]:checked');
      let genderSelectValue = genderSelect.value
      // console.log(genderSelect1);
      
      newParagraph.innerText = `${messageInput} by ${firstN} ${lastN}, ${genderSelectValue}`;
      // console.log(firstN, lastN, messageInput, genderSelectValue);
    })
    
    

