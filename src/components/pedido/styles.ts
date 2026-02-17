import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Pedido = styled.section`
  max-width: 600px;
  margin: 2rem auto;
  padding: 20px;
  text-align: center;

  h2 {
    font-size: 1.1rem;
    color: #444;
    font-weight: 400;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

export const ToggleButton = styled.button<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  background: ${props => props.$isOpen ? '#333' : '#ff4d6d'};
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
`;

export const Contrato = styled(motion.div)`
  margin-top: 20px;
  text-align: left;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);

  .content {
    padding: 25px;

    h3 {
      text-align: center;
      font-size: 0.8rem;
      letter-spacing: 1px;
      color: #999;
      margin-bottom: 20px;
      text-transform: uppercase;
    }

    ul {
      list-style: none;
      padding: 0;
      li {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 12px;
        font-size: 0.9rem;
        color: #444;
        .icon { color: #27ae60; flex-shrink: 0; }
      }
    }
  }
`;

export const ExtraSection = styled.div`
  margin: 20px 0;
  border-top: 1px solid #eee;
  padding-top: 15px;

  .toggle-extra {
    background: none;
    border: none;
    color: #ff4d6d;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
    margin-bottom: 10px;
    
    .alert-icon { animation: pulse 1.5s infinite; }
  }

  ul {
    background: #fff5f7;
    border-radius: 8px;
    padding: 15px !important;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
`;

export const SignatureArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 2px solid #333;
  position: relative;
  min-height: 80px;

  button {
    padding: 12px 30px;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
  }

  .btn-assinar {
    background: #27ae60;
    color: white;
    border: none;
    box-shadow: 0 4px 0 #1e8449;
    &:active { transform: translateY(2px); box-shadow: 0 2px 0 #1e8449; }
  }

  .btn-recusar {
    background: #e74c3c;
    color: white;
    border: none;
    box-shadow: 0 4px 0 #c0392b;
    transition: all 0.2s ease;
  }
`;

export const SignedStamp = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 900;
  color: #27ae60;
  border: 4px solid #27ae60;
  padding: 10px 20px;
  transform: rotate(-15deg);
  text-transform: uppercase;
  border-radius: 4px;
`;