import VideoAnimation from "./VideoAnimation";

export default function InfoVideo() {
  return (
    <div className="relative h-screen">
      <VideoAnimation>
        <div className="relative overflow-hidden h-screen">
          <video
            autoPlay
            muted
            loop
            className="absolute top-0 left-0 h-full w-full object-cover"
          >
            <source src="/videos/ME.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </VideoAnimation>
    </div>
  );
}
