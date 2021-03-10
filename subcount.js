//Get Subs
const youTubeKey= "AIzaSyDfbHgZRJWm2NBFMDWUKkSWMyskWxoYu_g";
const youTubeUser = "UCZuWNUfPkYY9vcH3r4oFhXA";
const subCount = document.getElementById('subCount');

let getSubscribers = () => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youTubeUser}&key=${youTubeKey}`)
    .then(response => {
            return response.json()
         })
    .then(data => {
        console.log(data);
        subCount.innerHTML = data["items"][0].statistics.subscriberCount;
    })
}

getSubscribers();