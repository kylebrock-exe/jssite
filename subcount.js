//Get Sub/Vid/View Count

//Vars
const youTubeKey= "AIzaSyDfbHgZRJWm2NBFMDWUKkSWMyskWxoYu_g";
const youTubeUser = "UCZuWNUfPkYY9vcH3r4oFhXA";
const subCount = document.getElementById('subCount');
const videoCount = document.getElementById('videoCount');
const viewCount = document.getElementById('viewCount');

//Get Subscriber Count
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


//Get Video Count
let getVideo = () => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youTubeUser}&key=${youTubeKey}`)
    .then(response => {
            return response.json()
         })
    .then(data => {
        console.log(data);
        videoCount.innerHTML = data["items"][0].statistics.videoCount;
    })
}

getVideo();

//Get Total Views
let getView = () => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youTubeUser}&key=${youTubeKey}`)
    .then(response => {
            return response.json()
         })
    .then(data => {
        console.log(data);
        viewCount.innerHTML = data["items"][0].statistics.viewCount;
    })
}

getView();