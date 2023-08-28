class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
}

// Instantiate a new Video instance and call the watch() method
const video1 = new Video("Video 1", "User1", 110);
video1.watch();

// Instantiate a second Video instance with different values
const video2 = new Video("Video 2", "User2", 120);
video2.watch();

// Bonus: Use an array to store data for five Video instances
const videData = [
    ["Video 3", "User3", 130],
    ["Video 4", "User4", 140],
    ["Video 5", "User5", 150],
    ["Video 6", "User6", 160],
    ["Video 7", "User7", 170]
];

// Loop through the array to instantiate Video instances
const videoInstances = [];
for (const data of videData) {
    const [title, uploader, time] = data;
    const video = new Video(title, uploader, time);
    videoInstances.push(video);
}

// Testing the instantiated instances
for (const video of videoInstances) {
    video.watch();
}