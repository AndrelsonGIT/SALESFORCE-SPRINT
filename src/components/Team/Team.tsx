import "./Team.css"
import Header from "../header/Header.tsx";
import fotoandrelson from "./andrelsonFoto.jpeg"
import fotomarcao from "./Marcao2.jpeg"
import kayque from "./kayquao.png"

const Team = ()=>{
    return(

        <>
            <div className="main_container">
                <Header></Header>
                <div className="titulo">
                    <h2>Equipe</h2>
                </div>

                <div className="principal">
                    <section className="principal__container__ideias">
                        <div className="principal__container__ideias__cabecalho__persoA">
                            <img className="foto" src={fotomarcao} alt="Foto integrante marcos"/>
                            <h2>Marco Aurélio Morais Ennes</h2>
                            <h3>Desenvolvedor Back End & IA ChatBot</h3>
                            <h4>RM: 553201</h4>
                        </div>
                    </section>
                    <section className="principal__container__ideias">
                        <div className="principal__container__ideias__cabecalho__persoA">
                            <img id="fotoAndrelson" src={fotoandrelson}
                                 alt="foto integrante André"/>
                            <h2>André Alves da Silva</h2>
                            <h3>Desenvolvedor Full Stack</h3>

                            <h4>RM: 552639</h4>
                        </div>
                    </section>
                    <section className="principal__container__ideias">
                        <div className="principal__container__ideias__cabecalho__persoA">
                            <img className="foto" src={kayque}
                                 alt="Foto integrante Kayque"/>
                            <h2>Kayque Ferreira</h2>
                            <h3>Desenvolvedor Back-end</h3>
                            <h4>RM: 552605</h4>
                        </div>
                    </section>

                </div>

            </div>




        </>
    )
}

export default Team;