import * as S from './styles';
import { motion } from 'framer-motion';
import foto1 from '../../assets/images/primeira_mensagem.jpg'
import foto2 from '../../assets/images/primeira_ligacao.jpg'
import foto3 from '../../assets/images/primeira_vez_se_vendo.jpg'
import foto4 from '../../assets/images/correndo.jpg'
import cleiton from '../../assets/images/cleiton.jpg'
import foto5 from '../../assets/images/cafe.jpg'
import foto6 from '../../assets/images/barra.jpg'
import foto7 from '../../assets/images/primeira_potocada.jpg'
import foto8 from '../../assets/images/bombar.jpg'
import foto9 from '../../assets/images/f1.jpg'
import foto11 from '../../assets/images/barra_bruno.jpg'
import foto12 from '../../assets/images/mais grude.jpg'
import foto13 from '../../assets/images/csa.jpeg'
import foto14 from '../../assets/images/cinema.jpeg'
import foto15 from '../../assets/images/barra.jpeg'
import foto16 from '../../assets/images/grude_carro.jpeg'

interface Evento {
    data: string;
    titulo: string;
    descricao: string;
    foto: string;
}

const Nos = () => {
    const historia: Evento[] = [
        {
            data: "29 Nov 2025",
            titulo: "Onde tudo começou",
            descricao: "Reagi seu stoty e aqui a gente começou a conversar... obrigado flamengo !",
            foto: foto1
        },
        {
            data: "13 Dez 2025",
            titulo: "Nossa primeira ligação",
            descricao: "pela primeira vez a gente fez call, foi ai que descobri que você era minha pata e que joão disse que era minha namorada, e ele estava certo !",
            foto: foto2
        },
        {
            data: "14 Dez 2025",
            titulo: "Primeira vez que nos vimos",
            descricao: "o tal do boreli que nunca rolou e o beijo que você negou (muito bem)",
            foto: foto3
        },
        {
            data: "15 Dez 2025",
            titulo: "Primeira 'corrida' juntos",
            descricao: "logo no outro dia, fomos correr (pausou mais do que corru, mas tudo bem).",
            foto: foto4
        },
        {
            data: "22 Dez 2025",
            titulo: "Nosso primeiro Beijo",
            descricao: "logo no outro dia, fomos correr (pausou mais do que corru, mas tudo bem).",
            foto: cleiton
        },
        {
            data: "28 Dez 2025",
            titulo: "M&K juntos",
            descricao: "SEU ANIVERSARIO ! aqui eu comecei a perceber que você mexia comigo, quando simiu eu já fiquei doidão kkkkkkkk, mas foi muito bom",
            foto: foto5
        },
        {
            data: "2 Jan 2026",
            titulo: "Barra ",
            descricao: "nesse dia a gente foi pra barra pela primeira vez, minha saudade de você só aumentou depois de te ver, mas foi muito bom.",
            foto: foto6
        },
        {
            data: "4 Jan 2026",
            titulo: "Aguiar's house",
            descricao: "nesse dia conversamos sobre a potoca, e eu fiquei doido, mas foi muito bom",
            foto: foto7
        },
        {
            data: "6 Jan 2026",
            titulo: "BomBar",
            descricao: "2 dias sem se ver mas a gente não tava se aguentando de saudade, altas potocagenss.",
            foto: foto8
        },
        {
            data: "10 Jan 2026",
            titulo: "F1",
            descricao: "Fomos ver filme com suas amigas e depois pro f1, e demos uma leve 'fuga' HEHEH",
            foto: foto9
        },
        {
            data: "25 Jan 2026",
            titulo: "Barra de novo",
            descricao: "barra, eu, vc, bruno, laila...",
            foto: foto11
        },
        {
            data: "27 Jan 2026",
            titulo: "mais grude",
            descricao: "for ever.",
            foto: foto12
        },
        {
            data: "6 Fev 2026",
            titulo: "Cineminha + briga",
            descricao: "cineminha + bk + briga",
            foto: foto14
        },
        {
            data: "14 Fev 2026",
            titulo: "Barra para ver meu amor",
            descricao: "cineminha + bk + briga",
            foto: foto15
        },
        {
            data: "21 Fev 2026",
            titulo: "Jogo do csa",
            descricao: "dor, depressão, sofrimnento, mas com você lá foi menos pior",
            foto: foto13
        },
        {
            data: "07 Mar 2026",
            titulo: "Procurando o taxi",
            descricao: '"uma praça cheia de mendigos"',
            foto: foto16
        },
    ];

    return (
        <S.Container>
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Nossa Linha do Tempo
            </motion.h1>

            <S.Timeline>
                <S.Line />
                {historia.map((item, index) => (
                    <S.TimelineItem 
                        key={index}
                        $isEven={index % 2 === 0}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="dot" />
                        <S.Card>
                            <span className="date">{item.data}</span>
                            <div className="image-container">
                                <img src={item.foto} alt={item.titulo} />
                            </div>
                            <h3>{item.titulo}</h3>
                            <p>{item.descricao}</p>
                        </S.Card>
                    </S.TimelineItem>
                ))}
            </S.Timeline>
        </S.Container>
    );
};

export default Nos;