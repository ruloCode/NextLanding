import Image from "next/image";

export const Img = ({ alt, title, src, ...props }) => {
  return (
    <div {...props}>
      <Image
        alt={alt}
        src={src}
        title={title}
        width="0"
        height="0"
        sizes="100%"
        className="w-full h-auto"
      />
    </div>
  );
};
