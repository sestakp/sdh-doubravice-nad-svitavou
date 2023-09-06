
import EquipmentTableRow from "../../../components/EquipmentTableRow/EquipmentTableRow";
import "../Equipment.css";

export default function Pps12(){


    return(
        <div>
            <h1  className="centered">Přenosná motorová stříkačka PPS 8</h1>

            <p>Přenosná motorová stříkačka PPS 12 je určená pro čerpání vody při hašení požárů, 
                při likvidaci záplav a povodní apod. Vyniká jednoduchou obsluhou a je dobře přenosná 
                čtyřmi osobami. Stříkačka je dobře použitelná i v terénu nepřístupném pro těžkou požární techniku.</p>

            <h2  className="centered">Technické údaje</h2>

            <EquipmentTableRow first="Pohotovostní hmotnost" second="185 kg" />
            
            <EquipmentTableRow first="Typ motoru" second="Škoda 981" />

            <EquipmentTableRow first="Počet válců" second="4" />
            
            <EquipmentTableRow first="Objem válců" second={<span>1 221 cm<sup>3</sup></span>} />
            
            <EquipmentTableRow first="Objem palivové nádrže" second="23 l" />
            
            <EquipmentTableRow first="Spotřeba při jmenovitém výkonu" second="11,5 l/h" />
            
            <EquipmentTableRow first="Čerpadlo" second="Jednostupňové, odstředivé" />
            
        </div>
    )
}