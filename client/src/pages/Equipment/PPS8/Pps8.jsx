
import EquipmentTableRow from "../../../components/EquipmentTableRow/EquipmentTableRow";
import "../Equipment.css";

export default function Pps8(){


    return(
        <div>
            <h1 className="centered">Přenosná motorová stříkačka PPS 8</h1>

            <p>Přenosná motorová stříkačka PPS 8 byla určena pro dopravu vody. Výroba těchto stříkaček probíhala až do roku 1964, kdy byla nahrazena typem PPS 12.</p>

            <h2 className="centered">Technické údaje</h2>

            <EquipmentTableRow first="Pohotovostní hmotnost" second="115 kg" />
            
            <EquipmentTableRow first="Typ motoru" second="THZ SM-31" />

            <EquipmentTableRow first="Počet válců" second="2" />
            
            <EquipmentTableRow first="Objem válců" second={<span>635,1 cm<sup>3</sup></span>} />
            
            <EquipmentTableRow first="Objem palivové nádrže" second="22 l" />
            
            <EquipmentTableRow first="Chlazení" second="Vzduchem" />
            
            <EquipmentTableRow first="Čerpadlo" second="Jednostupňové, odstředivé" />
        </div>
    )
}