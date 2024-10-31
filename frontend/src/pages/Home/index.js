import React from 'react';
import './index.css'; 
import Header from '../../components/Header';
import Footer from '../../components/Footer';


export default function Home() {
  return (
    <>
      <Header />

    <div className="container">
  {/* Seção da primeira imagem com texto */}
  <div className="section">
    <img
      src="images/henna.png"
      alt="Imagem 1: Empreendedora e sua história"
      className="image"
    />
    <div className="textSection">
      <h2 className="tituloh2">Heading</h2>
   
            <p className='vw-plugin-top-wrapper'>
        Excepteur efficient emerging, minim veniam anim aute carefully curated
        Ginza conversation exquisite perfect nostrud nisi intricate Content.
      </p>
      <p>
        Punctual adipiscing, essential lovely queem tempor eiusmod irure. 
        Exclusive izakaya charming Scandinavian impeccable aute quality of 
        life soft power pariatur Melbourne occaecat discerning.
      </p>
    </div>
  </div>

  {/* Seção da segunda imagem com texto */}
  <div className="section">
    <div className="textSection">
      <h2 className="tituloh2">Heading</h2>
     
      <p>
        Body text for your whole article or post. We’ll put in some lorem ipsum
        to show how a filled-out page might look:
      </p>
      <p>
        Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki
        exccepteur Basset hound. Zürich sleepy perfect consectetur.
      </p>
    </div>
    <img
      src="images/henna.png"
      alt="Imagem 2: Destaque de um procedimento"
      className="image"
    />
  </div>
</div>
      
      <Footer/>
    </>
  );
}
