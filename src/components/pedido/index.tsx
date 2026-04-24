import { useState } from 'react';
import * as S from './styles';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, FileText, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

const Pedido = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [signed, setSigned] = useState(false);

    const Sign = () => {
        setSigned(true);
        // Efeito de Confete de Corações
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const interval: any = setInterval(function() {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);

            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 } });
        }, 250);

        alert("❤️ CONTRATO ASSINADO! Eu te amo, lunna ribeiro!");
    };

    const handleRecuseHover = (e: React.MouseEvent<HTMLButtonElement>) => {
        const btn = e.currentTarget;
        btn.style.position = 'fixed';
        btn.style.top = Math.random() * 80 + '%';
        btn.style.left = Math.random() * 80 + '%';
        btn.style.zIndex = '999';
    };

    const clausulas = [
        "Cláusula 1: A contratante concorda em ficar com Kauã Torres por tempo indeterminado.",
        "Cláusula 2: Fica proibido dormir brigados, sob pena de multa em beijos (50).",
        "Cláusula 3: Se ver pelo menos 2 vezes na semana.",
        "Cláusula 4: Dormir juntos todas as segundas-feiras que possivel.",
        "Cláusula 5: Proibido dormir juntos e não for agarrados.",
        "Cláusula 6: O contratado se compromete em ser paciente aos dramas da TPM.",
        "Cláusula 7: Não esconder quando algo incomodar.",
        "Cláusula 8: Ser fiel e transparente SEMPRE.",
        "Cláusula 9: É proibido dar afeto a outro cachorro sem ser o LUKE TORRES.",
        "Cláusula 10: SEMPRE tentar se resolver, NUNCA sumir.",
        "Cláusula 11: Priorizar sempre o nosso bem-estar e a nossa paz.",
        "Cláusula 12: Apoiar os sonhos e objetivos um do outro incondicionalmente.",
        "Cláusula 13: ter 4 filhos e 2 cachorros",
        "Cláusula 14: ficar GRUDADOS para sempre",
        "Cláusula 15: sempre falar os lugares para onde vai",
        "Cláusula 16: Validade do contrato: Até ficarmos velhinhos.",
        "Cláusula 17: Ao clicar em 'Aceito', não há direito a arrependimento."
    ];

    return (
        <S.Pedido>
            <h2>Bom, se você está lendo isso, é porque logicamente aceitou namorar comigo <b>(você não tinha escolha, vai passar o resto da sua vida comigo)</b>, mas quero saber se você aceita o vigente contrato abaixo:</h2>
            
            <S.ToggleButton onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
                <FileText size={20} />
                <span>{isOpen ? 'Fechar Contrato' : 'Abrir Contrato'}</span>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                    <ChevronDown size={20} />
                </motion.div>
            </S.ToggleButton>

            <AnimatePresence>
                {isOpen && (
                    <S.Contrato
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                    >
                        <div className="content">
                            <h3>CONTRATO DE ADESÃO AFETIVA Nº 003/2026</h3>
                            <ul>
                                {clausulas.map((c, i) => (
                                    <motion.li key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.03 }}>
                                        <CheckCircle size={14} className="icon" /> {c}
                                    </motion.li>
                                ))}
                            </ul>

                            <S.SignatureArea>
                                {!signed ? (
                                    <>
                                        <button className="btn-recusar" onMouseEnter={handleRecuseHover}>RECUSAR</button>
                                        <button className="btn-assinar" onClick={Sign}>ASSINAR</button>
                                    </>
                                ) : (
                                    <S.SignedStamp
                                        initial={{ scale: 2, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ type: 'spring', damping: 10 }}
                                    >
                                        ASSINADO ✅
                                    </S.SignedStamp>
                                )}
                            </S.SignatureArea>
                        </div>
                    </S.Contrato>
                )}
            </AnimatePresence>
        </S.Pedido>
    );
};

export default Pedido;