
function showVideo(videoIndex) {
    const videoPlayer = document.getElementById("video-player");
    const videoSource = document.getElementById("video-source");
    const videoButton = document.getElementById(`topic-${videoIndex}`);
    const tickBox = document.getElementById(`tick-box-${videoIndex}`);

    let videoPath = '';

    // Set the video source based on the index
    if (videoIndex === 1 || videoIndex === 3 || videoIndex === 5) {
        videoPath = "./videos/video1.mp4";  // Path for the first video
    } else if (videoIndex === 2 || videoIndex === 4 || videoIndex === 6 || videoIndex === 7) {
        videoPath = "./videos/video2.mp4";  // Path for the second video
    }

    // Update video source and play it
    videoSource.src = videoPath;
    videoPlayer.load();
    videoPlayer.play();

    // Change background color when clicked
    videoButton.classList.add("completed");

    // When video ends, mark it as completed and show the green checkmark for the specific topic
    videoPlayer.onended = function() {
        tickBox.style.display = "inline";  // Show the checkmark inside the green box
    };
}
