
import ReactImageGallery from "react-image-gallery";
import skoda_1 from "../../../assets/equipment/cas25/skoda_1.jpg";
import skoda_2 from "../../../assets/equipment/cas25/skoda_2.jpg";
import "../Equipment.css";
import EquipmentTableRow from "../../../components/EquipmentTableRow/EquipmentTableRow";

export default function Cas25(){

    const images = [
        skoda_1,
        skoda_2
    ]
    return(
        <div>
            <h1 className="centered">CAS 25 - Škoda 706 RTHP - „Ejťák Tonda“</h1>

            <div style={{maxWidth: "70%", margin: "auto"}}>
                <ReactImageGallery items={images.map(url => ({original: url, thumbnail: url}))} />
            </div>

            <p>Vozidlo je určeno k přepravě požárního družstva s příslušenstvím potřebnm k provedení požárního 
            zásahu vodou nebo pěnou z vlastních nebo cizích zdrojů hasicích látek. Zejména pak k zásahu při 
            požáru v místech s nedostatkem vody. Stříkačka je postavena na podvozku Škoda 706 RTHP, trambusové karoserie.</p>


            <h3 className="centered">Vysvětlení označení</h3>

            <EquipmentTableRow first="CAS" second="Cisternová automobilová stříkačka" />

            <EquipmentTableRow first="25" second="Čerpadlo s výkonem 2 500 l / min" />

            <EquipmentTableRow first="Škoda 706" second="" />
            
            <EquipmentTableRow first="RTHP" second="RT - typ podvozku, H - hasičský speciál, P - možnost připojení předního náhonu" />

            
            <h3 className="centered">PODVOZEK</h3>

            <EquipmentTableRow first="Typ motoru" second="Vznětový, naftový, čtyřdobý, vodou chlazený šestiválec" />

            <EquipmentTableRow first="Výkon motoru" second="118 kW / 1 900 min" />

            <EquipmentTableRow first="Objem motoru" second={<span>11 781 cm<sup>3</sup></span>} />

            <EquipmentTableRow first="Náhon vozidla" second="4x4 s připojitelným pohonem přední nápravy" />

            <EquipmentTableRow first="Převodovka" second="5 stupňů vpřed, 1 vzad" />

            <EquipmentTableRow first="Napětí el. příslušenství" second="24 V" />

            <EquipmentTableRow first="Objem palivové nádrže" second="175 l" />
        </div>
    )
}