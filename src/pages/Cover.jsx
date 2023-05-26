import VIDEO from "../assets/images/cover.mp4";
export default function Cover({ children }) {
  return (
    <div className="screen">
      {children}
      <video width="1024" height="768" playsInline autoPlay>
        <source src={VIDEO} type="video/mp4" />
      </video>
    </div>
  );
}
