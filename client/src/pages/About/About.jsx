import React from "react";
import About1 from "./assets/About-1.jpg";
import About2 from "./assets/About-2.jpg";
import "./About.css";

function About(){
    return(
        <div className="About">
            <h1>Úvodní slovo</h1>
            <div className="row p-2">
                <div className="col-md-9">
                <p>
                Říká se, že oheň je dobrý sluha, ale zlý pán. Toto přísloví platí po celou existenci lidstva. Požáry sužovaly obyvatele měst a vesnic od nepaměti. Vznikaly většinou z nedbalosti a nepozornosti. Stávalo se tak i v naší obci. Svědčí o tom zápisy v kronikách, kde máme možnost se dočíst, že Doubravice za dobu své existence několikrát vyhořela. S dalším rozvojem měst a obcí bylo potřeba požárům předcházet, proto byl v roce 1751 vydán Řád o hašení ohně, v němž se nařizovalo, aby každý občan přispěl svojí pomocí k likvidaci požárů. Dále v roce 1787 Požární řád Josefa II., který platil až do vydání zákona o požární policii v 70 letech 19.století. Ani to však nestačilo, a tak v druhé polovině 19.století začaly být zakládány první hasičské sbory. Jejich členové se začali pro likvidaci ohně cvičit a také náležitě vybavovat hasičským nářadím a technikou.
                </p>
                </div>
                <div className="col-md-3">
                    <img src={About1} alt="Image 1"/>   
                </div>
            </div>
            <div className="row p-2">
                <div className="col-md-3">
                    <img src={About2} alt="Image 2"/>
                </div>
                <div className="col-md-9">
                    <p>
                        V naší obci byl sbor založen v roce 1888. V žádosti o jeho schválení na Vysoké c.k. místodržitelství se píše: „V městysi Doubravice, obci čítající přes 150 domovních čísel nestává dosavade obecního sboru hasičského, jehož jest velmi zapotřebí. Aby se odpomohlo tomuto nedostatku utvořil se tam dobrovolný hasičský spolek, čítající dosud 28 členů, jehož stanovy byly obecním výborem schváleny. V hluboké úctě podepsaní, co sami zástupci spolku předkládajíce ujednané stanovy tohoto hasičského spolku v pěti opysech staví uctivou žádost, aby vysoké c.k.místodržitelství je schváliti a potvrditi ráčilo.“ Tolik doslovný přepis původního dokumentu. Současně se vydává Služební řád a Stanovy dobrovolné jednoty hasičské v obci Doubravice. Všechny tyto dokumenty byly c.k.místodržitelstvím v Brně potvrzeny 8.října 1888. Tím se začíná odvíjet historie našeho sboru.
                    </p>
                </div>
            </div>
            <strong>Milan Hubený</strong>
            
        </div>
    )
}

export default About;