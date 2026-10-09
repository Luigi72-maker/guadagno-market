import Image from "next/image";
// CSS viewport over the supplied screenshot, without altering its pixels.
// Original photographs use the same component without the crop property.
export default function StoreImage({
  image,
  className = "",
  priority = false,
}) {
  const crop = image.crop;
  const style = crop
    ? {
        width: `${(crop[0] / crop[4]) * 100}%`,
        maxWidth: "none",
        left: `${(-crop[2] / crop[4]) * 100}%`,
        top: `${(-crop[3] / crop[5]) * 100}%`,
      }
    : undefined;
  return (
    <div
      className={`store-image ${crop ? "is-cropped" : ""} ${className}`}
      style={{ aspectRatio: crop ? `${crop[4]} / ${crop[5]}` : undefined }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={crop ? crop[0] : 1200}
        height={crop ? crop[1] : 480}
        sizes={crop ? "1200px" : "(max-width: 680px) 90vw, 550px"}
        style={style}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
      />
    </div>
  );
}
