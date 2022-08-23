import ImageEspufiCollage from "./reusables/ImageEspufiCollage";

const EspufiSection = () => {
  return (
    <div className="containerEspufiSection">
      <div className="textEspufiSection">
        <p className="nameEspufiSection">INSTAGRAM</p>
        <h4 className="hastagEspufiSection"># ESPUFI</h4>
      </div>
      <div className="collageEspufiSection">
        <ImageEspufiCollage
          urlImg={
            "https://res.cloudinary.com/dannytorres/image/upload/v1661213167/Pufi/ogtvpl7w0nimygc01ubv.jpg"
          }
        />
        <ImageEspufiCollage
          urlImg={
            "https://res.cloudinary.com/dannytorres/image/upload/v1661266454/Pufi/v4orbtcyhmarhwdbo9as.webp"
          }
        />
        <ImageEspufiCollage
          urlImg={
            "https://res.cloudinary.com/dannytorres/image/upload/v1661213165/Pufi/p1upitfalhygemexli1i.jpg"
          }
        />
        <ImageEspufiCollage
          urlImg={
            "https://res.cloudinary.com/dannytorres/image/upload/v1661212826/Pufi/ewlvvbph0luboit1i5zs.jpg"
          }
        />
        <ImageEspufiCollage
          urlImg={
            "https://res.cloudinary.com/dannytorres/image/upload/v1661212822/Pufi/zbft3kbnw8l0eivvtdug.jpg"
          }
        />
        <ImageEspufiCollage
          urlImg={
            "https://res.cloudinary.com/dannytorres/image/upload/v1661212889/Pufi/yoplnyitrq5no2okkaxz.jpg"
          }
        />
      </div>
    </div>
  );
};

export default EspufiSection;
