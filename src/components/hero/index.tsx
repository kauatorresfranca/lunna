import * as S from './styles'
import coracao from '../../assets/images/coracao.png'

const Hero = () => {
  return (
    <S.Hero>
      <img src={coracao} alt="" />
        <h1>LUNNA</h1>
        <h3>Você é meu <span>1001% de certeza</span></h3>
        <p>Desde o primeiro momento que te vi, meu coração soube que você não seria qualquer uma para mim. cada segundo ao seu lado é especial, minha autista favorita </p>
    </S.Hero>
  )
}

export default Hero