import { Grid } from "@mui/material";
import AvatarCard from "../../components/avatarCard/avatarCard";
import "./Contact.css"

const Contact = (props) => {

    return(
        <div className="contact">
            <h1>Kontakt</h1>
            <p>V případě zájmu kontaktujte některého ze členů výboru.</p>
            <Grid container>
                <Grid md={4}>
                    <AvatarCard 
                        name="Petrů Jaromír" 
                        role="Starosta SDH" 
                        //tel="(+420) 774 256 056"
                    />
                </Grid>
                <Grid md={4}>
                    <AvatarCard 
                        name="Bárta Roman" 
                        role="Místostarosta" 
                        //tel="(+420) 724 730 282"
                    />
                </Grid>
                <Grid md={4}>
                    <AvatarCard 
                        name="Podloučka Pavel" 
                        role="Velitel JSDH" 
                        //tel="(+420) 723 940 212"
                    />
                </Grid>
            </Grid>
            
            <p>Bankovní spojení</p>
            <p>213935862/0300</p>

            <p>Kontaktní email</p>
            <a href="mailto:sdhdoubravice@seznam.cz">sdhdoubravice@seznam.cz</a>
        </div>
    )
}

export default Contact;