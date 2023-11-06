import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
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
import card2 from '../assets/img/card2.jpg'
import card3 from '../assets/img/card3.webp'
import card4 from '../assets/img/card4.jpeg'
import card5 from '../assets/img/card5.jpg'
import card6 from '../assets/img/card6.webp'
import tb1 from '../assets/img/tb1.jpeg'
import tb2 from '../assets/img/tb2.webp'
import tb3 from '../assets/img/tb3.webp'
import tb4 from '../assets/img/tb4.webp'

export default function Home() {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

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

            <h2 className='text-center my-5'>Busque por categoria:</h2>

            <div className="container row mx-auto g-4">
                <div className="col-4">
                    <Card className="card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={card1} />
                        <Card.Body className='card-header d-flex flex-column align-items-center justify-content-center'>
                            <Card.Title className='text-center'>Figures</Card.Title>
                            <Button variant="secondary">Ver mais</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-4">
                    <Card className="card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={card2} />
                        <Card.Body className='card-header d-flex flex-column align-items-center justify-content-center'>
                            <Card.Title className='text-center'>Mangás</Card.Title>
                            <Button variant="secondary">Ver mais</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-4">
                    <Card className="card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={card3} />
                        <Card.Body className='card-header d-flex flex-column align-items-center justify-content-center'>
                            <Card.Title className='text-center'>Chaveiros</Card.Title>
                            <Button variant="secondary">Ver mais</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-4">
                    <Card className="card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={card4} />
                        <Card.Body className='card-header d-flex flex-column align-items-center justify-content-center'>
                            <Card.Title className='text-center'>Funkos Pop</Card.Title>
                            <Button variant="secondary">Ver mais</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-4">
                    <Card className="card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={card5} />
                        <Card.Body className='card-header d-flex flex-column align-items-center justify-content-center'>
                            <Card.Title className='text-center'>Pelúcias</Card.Title>
                            <Button variant="secondary">Ver mais</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-4">
                    <Card className="card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={card6} />
                        <Card.Body className='card-header d-flex flex-column align-items-center justify-content-center'>
                            <Card.Title className='text-center'>Adesivos</Card.Title>
                            <Button variant="secondary">Ver mais</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div className='d-flex align-items-center justify-content-center my-5'>
                <h2 className="text-center p-4">Confira alguns valores:</h2>
                <Button variant="secondary" onClick={handleOpenModal}>Clique Aqui</Button>
            </div>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Tabela de preços</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Produto</th>
                                <th>Descrição</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src={tb1} alt="img" width={60}/></td>
                                <td>Chaveiro Sailor Moon</td>
                                <td>Chaveiro de borracha de Sailor Moon.</td>
                                <td>R$9,99</td>
                            </tr>
                            <tr>
                                <td><img src={tb2} alt="img" width={60}/></td>
                                <td>Figure Jujutsu Kaisen</td>
                                <td>Figura de 10cm de personagens.</td>
                                <td>R$ 59,99</td>
                            </tr>
                            <tr>
                                <td><img src={tb3} alt="img" width={60}/></td>
                                <td>Camiseta Sukuna</td>
                                <td>Camiseta de algodão com estampa do Sukuna de Jujutsu Kaisen.</td>
                                <td>R$ 49,99</td>
                            </tr>
                            <tr>
                                <td><img src={tb4} alt="img" width={60}/></td>
                                <td>Pelúcia Meu Amigo Totoro</td>
                                <td>Pelúcia 15cm do Totoro.</td>
                                <td>R$34,99</td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Fechar</Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}
