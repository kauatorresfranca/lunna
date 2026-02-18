import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.section`
  padding: 80px 20px;
  background: #fff;
  overflow-x: hidden;

  h1 {
    text-align: center;
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 60px;
  }
`;

export const Timeline = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
`;

export const Line = styled.div`
  position: absolute;
  left: 50%;
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, #ff4d6d, #ffccd5);
  transform: translateX(-50%);

  @media (max-width: 768px) {
    left: 20px;
  }
`;

export const TimelineItem = styled(motion.div)<{ $isEven: boolean }>`
  display: flex;
  justify-content: ${props => props.$isEven ? 'flex-start' : 'flex-end'};
  padding-bottom: 50px;
  width: 100%;
  position: relative;

  .dot {
    position: absolute;
    left: 50%;
    top: 20px;
    width: 16px;
    height: 16px;
    background: #ff4d6d;
    border-radius: 50%;
    transform: translateX(-50%);
    z-index: 2;
    box-shadow: 0 0 10px rgba(255, 77, 109, 0.5);
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 45px;
    .dot { left: 20px; }
  }
`;

export const Card = styled.div`
  width: 45%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid #eee;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .date {
    font-weight: bold;
    color: #ff4d6d;
    font-size: 0.85rem;
    display: block;
    margin-bottom: 10px;
  }

  .image-container {
    width: 100%;
    height: 200px;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 15px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: scale 0.5s ease;
    }
  }

  h3 { margin: 10px 0; font-size: 1.2rem; color: #222; }
  p { font-size: 0.9rem; color: #666; line-height: 1.5; }

  @media (max-width: 768px) {
    width: 100%;
  }
`;