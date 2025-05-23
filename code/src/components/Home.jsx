import React from 'react';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';


// Container principale
const Container = styled('div')({
  backgroundColor: '#0E0E0E',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
});

// Linee decorative
const DecoLine = styled('div')(({ top, left, width, height, transform, color }) => ({
  position: 'absolute',
  top,
  left,
  width,
  height,
  background: color,
  transform,
  boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
}));

// Componente per gli angoli decorativi con tre linee
const CornerDecoration = styled('div')(({ top, left, isBottomRight }) => ({
  position: 'absolute',
  top,
  left,
  width: '120px',
  height: '120px',
}));

// Logo e titolo
const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '15px',
  marginBottom: '50px',
  color: '#FFFFFF',
  textShadow: '0 0 10px rgba(138, 43, 226, 0.8), 0 0 20px rgba(138, 43, 226, 0.5)',
  fontSize: '2rem',
  fontWeight: 'bold',
});

const Logo = styled('div')({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  border: '2px solid #8A2BE2',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 0 10px rgba(138, 43, 226, 0.8)',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '20px',
    height: '12px',
    borderRadius: '10px 10px 0 0',
    border: '2px solid #8A2BE2',
    borderBottom: 'none',
    top: '10px',
  },
});

// Pulsanti
const ButtonsContainer = styled('div')({
  display: 'flex',
  gap: '80px',
  marginTop: '60px',
});

// Pulsanti
const Button = styled('button')(({ isRegister }) => ({
  width: '180px',
  height: '50px',
  background: 'rgba(35, 10, 60, 0.4)',
  color: '#FFFFFF',
  border: '2px solid #8A2BE2',
  borderRadius: '5px',
  fontSize: '1.2rem',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  // Ombra esterna più pronunciata con effetto neon
  boxShadow: '0 0 10px 2px rgba(138, 43, 226, 0.7), 0 0 20px rgba(138, 43, 226, 0.5), 0 0 30px rgba(138, 43, 226, 0.3)',
  // Ombra testo più pronunciata
  textShadow: '0 0 6px rgba(255, 255, 255, 0.9), 0 0 10px rgba(138, 43, 226, 0.8)',
  // Effetto ombra interna
  filter: 'drop-shadow(0 0 5px rgba(138, 43, 226, 0.8))',
  backdropFilter: 'blur(3px)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    // Aggiunto un gradiente più luminoso per l'effetto interno
    background: 'linear-gradient(to right, transparent, rgba(138, 43, 226, 0.3), transparent)',
    transform: 'translateX(-100%)',
    transition: 'transform 0.5s',
  },
  // Effetto interno aggiuntivo
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    boxShadow: 'inset 0 0 10px 2px rgba(138, 43, 226, 0.5), inset 0 0 5px rgba(255, 255, 255, 0.2)',
    borderRadius: '3px',
    pointerEvents: 'none',
  },
  '&:hover': {
    boxShadow: '0 0 15px 3px rgba(138, 43, 226, 0.9), 0 0 30px rgba(138, 43, 226, 0.7), 0 0 45px rgba(138, 43, 226, 0.4)',
    '&::before': {
      transform: 'translateX(100%)',
    },
    '&::after': {
      boxShadow: 'inset 0 0 15px 3px rgba(138, 43, 226, 0.7), inset 0 0 10px rgba(255, 255, 255, 0.3)',
    }
  },
  // Posiziona diversamente i pulsanti
  ...(isRegister
    ? { alignSelf: 'flex-start' }
    : { alignSelf: 'flex-end' }),
}));

export default function Home() {
  // Definisci le tre tonalità di viola/rosa
  const purpleColor1 = '#D946EF'; // Rosa acceso
  const purpleColor2 = '#A855F7'; // Viola medio
  const purpleColor3 = '#7E22CE'; // Viola scuro
  const whiteColor = '#FFFFFF'; // Colore bianco per le linee orizzontali

  return (
    <Container>
      {/* Linea bianca orizzontale superiore */}
      <DecoLine
        top="40px"
        left="430px"
        width="60%"
        height="1px"
        color={whiteColor}
      />
      <DecoLine
        top="200px"
        left="80px"
        width="1px"
        height="50%"
        color={whiteColor}
      />

      <DecoLine
        top="200px"
        left="1380px"
        width="1px"
        height="50%"
        color={whiteColor}
      />



      {/* Angolo superiore sinistro - Tre linee con diverse tonalità */}
      <CornerDecoration top="0" left="0">
        {/* Linea orizzontale */}
        <DecoLine
          top="20px"
          left="0"
          width="140px"
          height="3px"
          color={purpleColor1}
        />
        {/* Linea verticale */}
        <DecoLine
          top="0"
          left="20px"
          width="3px"
          height="140px"
          color={purpleColor2}
        />
        {/* Linea obliqua */}
        <DecoLine
          top="30px"
          left="30px"
          width="3px"
          height="100px"
          transform="rotate(45deg)"
          color={purpleColor3}
        />
      </CornerDecoration>

      {/* Angolo inferiore destro - Tre linee con diverse tonalità */}
      <CornerDecoration top="calc(100% - 140px)" left="calc(100% - 140px)">
        {/* Linea orizzontale */}
        <DecoLine
          top="120px"
          left="0"
          width="140px"
          height="3px"
          color={purpleColor1}
        />
        {/* Linea verticale */}
        <DecoLine
          top="0"
          left="120px"
          width="3px"
          height="140px"
          color={purpleColor2}
        />
        {/* Linea obliqua */}
        <DecoLine
          top="40px"
          left="40px"
          width="3px"
          height="100px"
          transform="rotate(-45deg)"
          color={purpleColor3}
        />
      </CornerDecoration>

      {/* Linea bianca orizzontale inferiore */}
      <DecoLine
        top="calc(100% - 40px)"
        left="100px"
        width="60%"
        height="1px"
        color={whiteColor}
      />

      <LogoContainer>
        <Logo />
        <span>RiseHack Community</span>
      </LogoContainer>

      <ButtonsContainer>
        <Link to="/Login">
          <Button isRegister={false}>Log In</Button>
        </Link>
        <Link to="/Register ">
          <Button isRegister={true}>Register</Button>
        </Link>

        
      </ButtonsContainer>
    </Container>
  );
}