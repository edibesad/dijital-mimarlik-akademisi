import VideoAnimation from "./VideoAnimation";

export default function InfoVideo() {
  return (
    <VideoAnimation>
      <div className="relative">
        <video
          autoPlay
          muted
          loop
          className="fixed top-0 left-0 h-full w-full object-fill z-[-10]"
        >
          <source src="/videos/background_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </VideoAnimation>
  );
}
