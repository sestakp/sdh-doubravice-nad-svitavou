import EquipmentTableRow from "../../../components/EquipmentTableRow/EquipmentTableRow";
import ImageGallery from 'react-image-gallery';
import "../Equipment.css";
import tatra_1 from "../../../assets/equipment/cas20t815/tatra_1.jpg";
import tatra_2 from "../../../assets/equipment/cas20t815/tatra_2.jpg";
import tatra_3 from "../../../assets/equipment/cas20t815/tatra_3.jpg";


export default function Cas20t815(){

    const images = [
        tatra_1,
        tatra_2,
        tatra_3
    ]

    return(
        <div>
            <h1 className="centered">TATRA CAS 20-T815 Terrno1 4x4,2 - „Alenka“</h1>

            <div style={{maxWidth: "70%", margin: "auto"}}>
                <ImageGallery items={images.map(url => ({original: url, thumbnail: url}))} />
            </div>

            <h2 className="centered">Technické údaje</h2>

            <h3 className="centered">Rozměry vozidla</h3>

            <EquipmentTableRow first="Délka (bez lanového navijáku)" second="7 680 mm" />

            <EquipmentTableRow first="Šířka" second="2 550 mm" />
            
            <EquipmentTableRow first="Výška při pohotovostní hmotnosti" second="3 100 mm" />

            <EquipmentTableRow first="Světlá výška při celkové hmotnosti" second="290 mm" />
            
            <h3 className="centered">Hmotnosti vozidla</h3>

            <EquipmentTableRow first="Provozní hmotnost" second="11 800 kg" />

            <EquipmentTableRow first="Celková hmotnost" second="18 000 kg" />

            <h2 className="centered">PODVOZEK</h2>

            <EquipmentTableRow first="Typ" second="TATRA T815-230R55" />

            <EquipmentTableRow first="Typ motoru" second="Naftový, přeplňovaný, chlazený vzduchem" />

            <EquipmentTableRow first="Výkon motoru" second="325 kW / 1 800 min" />

            <EquipmentTableRow first="" second="Motor splňuje emisní normu EURO 4" />

            <EquipmentTableRow first="Náhon vozidla" second="4x4" />

            <EquipmentTableRow first="Převodovka" second="Mechanická, 14 stupňů vpřed, 2 vzad" />

            <EquipmentTableRow first="Brzdový systém" second="4 na sobě nezávislé systémy sABS" />

            <EquipmentTableRow first="Napětí el. systému" second="24 V (2 akumulátory 12 V 180 Ah)" />

            <EquipmentTableRow first="Objem papvové nádrže" second="(nafta/AdBlue) 210 l / 67 l" />

            <EquipmentTableRow first="Maximální rychlost vozidla" second="100 km/h" />

            <h2 className="centered">KABINA</h2>

            <EquipmentTableRow first="Typ" second="Čelní, sklopná" />
            <EquipmentTableRow first="Počet míst k sezení" second="1 + 5" />

            <h2 className="centered">NÁDRŽE</h2>

            <EquipmentTableRow first="Nádrž na vodu" second="3 400 l" />

            <EquipmentTableRow first="Nádrž na pěnidlo" second="210 l" />

            <EquipmentTableRow first="" second="" />

            <h2 className="centered">ČERPACÍ ZAŘÍZENÍ</h2>

            <h3 className="centered">Nízkotlak</h3>

            <EquipmentTableRow first="Jmenovitý průtok vody" second="2 000 l/min" />
            
            <EquipmentTableRow first="Jmenovitý pracovní tlak" second="1,0 MPa" />
            
            <EquipmentTableRow first="Jmenovitá sací výška" second="3,0 m" />
        

            <h3 className="centered">Vysokotlak</h3>

            <EquipmentTableRow first="Jmenovitý průtok vody" second="250 l/min" />
            
            <EquipmentTableRow first="Jmenovitý pracovní tlak" second="4,0 MPa" />

            <h2 className="centered">PRŮTOKOVÝ NAVIJÁK</h2>

            <EquipmentTableRow first="Rozměry hadice" second="DN 25/60 m" />
            
            <EquipmentTableRow first="Proudnice" second="Pistolová s možností regulace průtoku a výstřikového kožele" />
            
            <EquipmentTableRow first="Jmenovitý průtok" second="200 l/min" />

            <h2 className="centered">DALŠÍ VYBAVENÍ</h2>
            <div style={{textAlign: "center"}} > 
                    <p>Plovoucí čerpadlo ZAHAS PPCA 800 motor HONDA GX 120</p>
                    <p>Plovoucí čerpadlo PH 1200 C1</p>
                    <p>Benzínové kalové čerpadlo TRASH PUMP ITC POWER GP80ST</p>
                    <p>2 x el. ponorné kalové čerpadlo PS 15 - 0,75</p>
                    <p>Elektrocentrála GEKO 4400 ED-A / HHBA</p>
                    <p>Výsuvný stativ 4 x 500 W</p>
                    <p>Benzínová motorová pila HUSQVARNA 359</p>
                    <p>Elektrická úhlová bruska</p>
                    <p>6 x dýchací technika SATURN S7 KOMFORT</p>
                    <p>5 x ruční radiostanice MOTOROLA CP 040</p>
                    <p>Automobilová radiostanice MOTOROLA GM 360</p>
                    <p>Vakuová matrace (nosítka)</p>
            </div>
        </div>
    )
}