import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./components/ExampleCarouselImage";

export default function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage 
          src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/REF-REF-2658350-bento-apple-sv_DER-4df4ae4c-6322-42ae-ab25-11f1e3ef81ff.jpg?format=webp;maxWidth=1400;maxHeight=996" 
          alt="First slide" 
          text="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage 
          src="https://blogs.windows.com/wp-content/uploads/sites/2/2016/09/Dell-XPS-1.jpg" 
          alt="Second slide" 
          text="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage 
          src="https://m.media-amazon.com/images/G/31/CookwareDining/tdhruvko/SA_CLP/Feb21/Pigeon._SX1242_QL85_FMpng_.png" 
          alt="Third slide" 
          text="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
