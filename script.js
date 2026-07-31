const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");
const current = document.getElementById("current");
const duration = document.getElementById("duration");
const muteBtn = document.getElementById("muteBtn");
const likeBtn = document.getElementById("likeBtn");

if (playBtn) {
    playBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            playBtn.innerHTML = "⏸";
        } else {
            audio.pause();
            playBtn.innerHTML = "▶";
        }
    });
}

audio.addEventListener("loadedmetadata", () => {
    duration.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100 || 0;
    current.textContent = formatTime(audio.currentTime);
});

progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

muteBtn.addEventListener("click", () => {
    audio.muted = !audio.muted;
    muteBtn.textContent = audio.muted ? "🔇" : "🔊";
});

let liked = false;
likeBtn.addEventListener("click", () => {
    liked = !liked;
    likeBtn.style.color = liked ? "#ff3366" : "#ffffff";
});

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}
const songPlayBtn = document.getElementById("songPlayBtn");

songPlayBtn.addEventListener("click", () => {
    audio.play();
    playBtn.innerHTML = "❚❚";
    document.getElementById("home").scrollIntoView({
        behavior: "smooth"
    });
});