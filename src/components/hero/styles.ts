import styled, { keyframes } from 'styled-components';
import { Colors } from '../../../styles';
import heroimage from '../../assets/images/heroimage.jpeg'

const pulsar = keyframes`
  0%   { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.5), 
      rgba(0, 0, 0, 0.5)
    ), 
    url(${heroimage});
  background-size: cover;
  background-position: center;
  gap: 16px;

  img {
    width: 150px;
    animation: ${pulsar} 2.5s ease-in-out infinite;
  }

  h1 {
    color: ${Colors.primary};
    font-size: 48px;
  }

  h3 {
    color: ${Colors.text};

    span {
      color: ${Colors.secondary};
      font-weight: bold;
    }
  }

  p {
    max-width: 600px;
    color: ${Colors.text};
    text-align: center;
  }
`;