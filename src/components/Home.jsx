import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from '../assets/img/img1.webp'
import img2 from '../assets/img/img2.webp'
import img3 from '../assets/img/img3.webp'
import img4 from '../assets/img/img4.webp'
import img5 from '../assets/img/img5.webp'
import img6 from '../assets/img/img6.webp'
import img7 from '../assets/img/img7.webp'
import img8 from '../assets/img/img8.webp'
import card1 from '../assets/img/card1.jpg'
import card2 from '../assets/img/card2.jpeg'
import card3 from '../assets/img/card3.webp'
import card4 from '../assets/img/card4.jpeg'
import card5 from '../assets/img/card5.jpg'
import card6 from '../assets/img/card6.webp'

export default function Home(){
    return (
        <>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={img1}
          alt="Camiseta"
        />
        <Carousel.Caption>
          <h5>Camiseta "Be Yourself"</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={img2}
          alt="Camiseta"
        />
        <Carousel.Caption>
          <h5>Camiseta Goku Deus Super Sayajin: Dragon Ball</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={img3}
          alt="Camiseta"
        />
        <Carousel.Caption>
          <h5>Camiseta Power Rangers</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={img4}
          alt="Camiseta"
        />
        <Carousel.Caption>
          <h5>Camiseta Logo De Volta Para o Futuro</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={img5}
          alt="Camiseta"
        />
        <Carousel.Caption>
          <h5>Camiseta He-Man</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={img6}
          alt="Camiseta"
        />
        <Carousel.Caption>
          <h5>Camiseta DeLorean Time Machine: De Volta Para o Futuro</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={img7}
          alt="Camiseta"
        />
        <Carousel.Caption>
          <h5>Camiseta Mortal Kombat 3</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={img8}
          alt="Camiseta"
        />
        <Carousel.Caption>
          <h5>Camiseta The Last Of Us Part II</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card1} />
      <Card.Body>
        <Card.Title> <a href="#">Figure</a> </Card.Title>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card2} />
      <Card.Body>
        <Card.Title> <a href="#">Figure</a> </Card.Title>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card3} />
      <Card.Body>
        <Card.Title> <a href="#">Figure</a> </Card.Title>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card4} />
      <Card.Body>
        <Card.Title> <a href="#">Figure</a> </Card.Title>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card5} />
      <Card.Body>
        <Card.Title> <a href="#">Figure</a> </Card.Title>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card6} />
      <Card.Body>
        <Card.Title> <a href="#">Figure</a> </Card.Title>
      </Card.Body>
    </Card>
        </>
    );
}
