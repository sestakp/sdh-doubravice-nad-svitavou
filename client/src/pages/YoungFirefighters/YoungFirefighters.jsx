import { Grid } from "@mui/material";
import AvatarCard from "../../components/avatarCard/avatarCard";
import soptikLogo from "../../assets/soptik.png";



const YoungFirefighters = () =>{


    return(
        <div>
            <h1>Mladí hasiči</h1>
            <p>V současné době má náš kroužek čtyři vedoucí, devět mladších žáků, tři starší žáky a dva dorostence.</p>
            <p>V hasičské zbrojnici se každý čtvrtek od 16:00 hod. scházíme na pravidelných schůzkách. Hlavní náplní kroužku je výchova dětí v oblasti požární ochrany a příprava nových řádných členů SDH. Další náplní kolektivu jsou základy zdravovědy a první pomoci, plnění odznaků odborností, výlety, exkurze u profesionálních hasičů, soutěže a různé hry.</p>
            
            <Grid container>
                <Grid md={6}>
                    <p>Soutěžíme v těchto disciplínách:</p>
                    <ul>
                        <li>Štafeta dvojic</li>
                        <li>Štafeta 4x60</li>
                        <li>Štafeta ctif</li>
                        <li>Požární útok</li>
                        <li>Útok ctif</li>
                        <li>Závod požární všestrannosti</li>
                    </ul>
                </Grid>
                <Grid md={6}>
                    <img src={soptikLogo} />
                </Grid>
            </Grid>
            

            <Grid container>
                <Grid md={4}>
                    <AvatarCard name="Havířová Marcela" role="Hlavní vedoucí"/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name="Bárta Roman" role="Zástupce vedoucího" tel="(+420) 724 730 282"/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name="Havířová Petra" role="Pomocní vedoucí"/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name="Jeschkeová Nela" role="Pomocní vedoucí"/>
                </Grid>
            </Grid>
        </div>
    )
}

export default YoungFirefighters;