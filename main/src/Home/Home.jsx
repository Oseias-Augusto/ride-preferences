import { useState } from "react";
import Hero from "../components/inicio/Hero.jsx";
import Form from "../components/Form/Form.jsx";
import Perfumes from "../components/Perfumes/PerfumesHome.jsx";

export default function Home() {
    
    const [telaInicial, setTelaInicial] = useState(1);


    return (
        <>
            {telaInicial == 1 && <Hero telaInicial={telaInicial} setTelaInicial={setTelaInicial}/>}
            {telaInicial == 2 && <Form telaInicial={telaInicial} setTelaInicial={setTelaInicial}/>}
            {telaInicial == 3 && <Perfumes telaInicial={telaInicial} setTelaInicial={setTelaInicial}/>}
        </>
    );
}
