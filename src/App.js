import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Cabecera() {
  return (
    <header>
      <h1>Muelle de Naves</h1>
      <nav>
        <ul>
          <li>
            {/* <a href="/inicio">Barcos</a> */}
            <Link to="/inicio">Barcos</Link>
          </li>
          <li>
            {/* <a href="/contacto">Contacto</a> */}
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Barco(props) {
  let [guest,setGuest]=useState(0)
  function guests() {
    setGuest(guest+1)
  props.funcion()
  }
  
  return (
    <div>
      <h1>{props.nombre}</h1>
      <p>Eslora: {props.eslora}m</p>
      <p>Tripulantes: {props.tripulantes}</p>
      <p>Tipo: {props.tipo}</p>
      <p>guest: {guest}</p>
    <button onClick={guests}>visitante</button>

    </div>
  );
}

function Barcos(props) {
  const barcos = [
    {
      nombre: 'Bar Quito',
      eslora: 5,
      tripulantes: 4,
      tipo: 'recreativo',
    },
    {
      nombre: 'Imperioso',
      eslora: 25,
      tripulantes: 2,
      tipo: 'recreativo',
    },
    {
      nombre: 'Nautilus',
      eslora: 15,
      tripulantes: 15,
      tipo: 'investigación',
    },
  ];
  let [guest,setGuest]=useState(0)
  function guests() {
    setGuest(guest+1)
  props.sumar()
  }

  return (
    <>
      <section>
        {
          barcos.map((barco) =>
            (
              <Barco
                nombre={barco.nombre}
                eslora={barco.eslora}
                tripulantes={barco.tripulantes}
                tipo={barco.tipo}
                visit={guest}
                funcion={props.sumar}
              />
            ))
        }
      </section>
    </>
  );
}

function Contacto() {
  return (
    <section>
      <p>
        Para contactar preguntar en la nave al lado de la entrada o llamar al
        94.372.28.23
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy;2020</p>
    </footer>
  );
}

function App() {
  let [visitantes, setVisitantes] = useState(0);

  function sumarVisitante() {
    setVisitantes(visitantes + 1);
  }
  return (
    <BrowserRouter>
      <Cabecera />
      <section>
        <p>Hemos tenido {visitantes} visitantes</p>
      </section>
      <Route path="/inicio">
        <Barcos sumar={sumarVisitante} />
      </Route>
      <Route path="/contacto">
        <Contacto />
      </Route>
      <Footer />
    </BrowserRouter>
  );
}

export default App;              