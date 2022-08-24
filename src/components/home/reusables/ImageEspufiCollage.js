const ImageEspufiCollage = ({ urlImg }) => {
  return (
    <img
      src={urlImg}
      alt="Collage"
      loading="lazy"
      className="imageSpufiCollage"
    />
  );
};

export default ImageEspufiCollage;
