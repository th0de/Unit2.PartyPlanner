# Guided Practice - Music

For this guided practice, you will practice using `fetch` to communicate with an API that serves data about music. The goal is to get you comfortable with the process of making a request, parsing the response, and using the data to update state.

View [the artists API](https://fsa-async-await.herokuapp.com/api/guided-practice/artists) to see the data that you will be working with.

Some starter code has been provided for you, so make sure to read through it before you begin working on the prompts.

## Prompts

The answers can be viewed directly below the respective prompt. The `solution` branch contains the final code.

1. Write `getArtists()`; the goal is to make a GET request to the API and update the state with the response data. You can check `state` in the console to see if the data is successfully fetched.

   <details>
   <summary>Show Answer</summary>

   ```js
   async function getArtists() {
     try {
       const response = await fetch(API_URL);
       const artists = await response.json();
       state.artists = artists;
     } catch (error) {
       console.error(error);
     }
   }
   ```

   </details>

1. Complete `renderArtists` so that it renders the artists in state. The page should contain the name, image, and bio of each artist. If state is empty, then a corresponding message should be displayed.

   <details>
   <summary>Show Answer</summary>

   ```js
   function renderArtists() {
     if (!state.artists.length) {
       artistList.innerHTML = "<li>No artists.</li>";
       return;
     }

     const artistCards = state.artists.map((artist) => {
       const li = document.createElement("li");
       li.innerHTML = `
         <h2>${artist.name}</h2>
         <img src="${artist.image_url}" alt="${artist.name}" />
         <p>${artist.bio}</p>
       `;
       return li;
     });

     artistList.replaceChildren(...artistCards);
   }
   ```

   </details>

1. Complete `addArtist()` so that it makes a POST request to the API with data from the form. The page should automatically rerender with the new artist added to the list.

   <details>
   <summary>Show Answer</summary>

   ```js
   async function addArtist(event) {
     event.preventDefault();

     try {
       const response = await fetch(API_URL, {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
           name: addArtistForm.name.value,
           image_url: addArtistForm.image_url.value,
           bio: addArtistForm.bio.value,
         }),
       });

       if (!response.ok) {
         throw new Error("Failed to create artist");
       }

       render();
     } catch (error) {
       console.error(error);
     }
   }
   ```

   </details>

## Extensions

If you're done early, try to implement one or more of the following features:

- Allow users to delete an artist by clicking on a button
- Allow users to submit a form to update an existing artist
- Integrate the `genres` and `songs` endpoints of the API
