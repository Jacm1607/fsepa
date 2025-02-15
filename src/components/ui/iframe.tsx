
const Iframe = ({
  title,
  src,
  width,
  height,
}: {
  title: string;
  src: string;
  width: string;
  height: string;
}) => {


  return (
      <iframe
        title={title}
        src={src}
        width={width}
        height={height}
        style={{ overflow: "hidden", border: 0 }}
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
  );
};
export { Iframe };
