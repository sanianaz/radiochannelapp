let cardContainer = document.querySelector(".card-container");
//fetch
async function getRadioData() {
  const response = await fetch(
    "https://api.sr.se/api/v2/channels?format=json&indent=true&pagination=false"
  );

  // waits until the request completes...
  //console.log(response);
  let radioData = await response.json();
  return radioData;
}

getRadioData().then((radioData) => {
  console.log(radioData.channels); // fetched channels
  console.log(radioData.channels[0].image); // fetched images
  console.log(radioData.channels[0].name); // fetched names
  console.log(radioData.channels[0].tagline); // fetched taglines
  console.log(radioData.channels[0].liveaudio.url); // fetched url

  // document.getElementById("img").src = radioData.channels[0].image;
  // document.getElementById("name").textContent = radioData.channels[0].name;
  // document.getElementById("tagline").textContent =
  //   radioData.channels[0].tagline;
  // document.getElementById("url").href = radioData.channels[0].liveaudio.url;

  for (let i = 0; i < radioData.channels.length; i++) {
    let testContainer = `<article>
      <img id="img" src="${radioData.channels[i].image}"  alt="Sample photo" />
      <div class="text">
        <h3 id="name">${radioData.channels[i].name}</h3>
        <p id="tagline">${radioData.channels[i].tagline}</p>
        <a id="url" href="${radioData.channels[i].liveaudio.url}" class="btn btn-primary btn-block">
          <p id="link_name">Live Audio</p></a
        >
      </div>
    </article>`;
    cardContainer.innerHTML += testContainer;
  }
});

// data-id = "${i}"
