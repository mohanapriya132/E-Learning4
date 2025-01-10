// Function to download the syllabus as PDF
function downloadSyllabus() {
    const doc = new jsPDF();
    doc.text('Course Syllabus', 10, 10);
    const topics = [
        '1. Python Basics',
        '2. Functions in Python',
        '3. Loops and Conditionals',
        '4. Data Structures',
        '5. OOP Concepts',
        '6. Exception Handling',
        '7. File Handling',
        '8. Python Libraries',
        '9. Web Development',
        '10. Python Projects'
    ];
    topics.forEach((topic, index) => {
        doc.text(topic, 10, 20 + index * 10);
    });
    doc.save('syllabus.pdf');
}

// Function to show and play video when a topic is clicked
function showVideo(topicNumber) {
    const videoPlayer = document.getElementById('video-player');
    const videoSources = {
        1: './videos/video1.mp4',
        2: './videos/video2.mp4',
        3: './videos/video1.mp4',
        4: './videos/video2.mp4',
        5: './videos/video1.mp4',
        6: './videos/video2.mp4',
        7: './videos/video1.mp4',
        8: './videos/video2.mp4',
        9: './videos/video2.mp4',
        10: './videos/video1.mp4',
    };

    // Update video source and play
    videoPlayer.src = videoSources[topicNumber];
    videoPlayer.play();
}
