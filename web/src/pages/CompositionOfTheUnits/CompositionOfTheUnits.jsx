import { Grid } from "@mui/material";
import AvatarCard from "../../components/avatarCard/avatarCard";

function CompositionOfTheUnits(){
    return(
        <div>
            <h1>Složení jednotky sboru</h1>
            <p>JSDH má dvě výjezdová družstva, jednoho velitele jednotky, dva velitele družstev, čtyři strojníky a šest hasičů.</p>
            
            <Grid container>
                <Grid md={4}>
                    <AvatarCard name={"Podloučka Pavel"} role="Velitel jednotky (NDT)"/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Livora Petr"} role="(NDT)"/>
                </Grid>
            </Grid>

            <h2>1. výjezdové družstvo</h2>
            <Grid container>
                <Grid md={4}>
                    <AvatarCard name={"Flok Luděk"} role="Velitel družstva (NDT)"/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Strachoň Bohuslav"} role="Strojník (NDT)"/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Roučka Jan"} role="Strojník (NDT)"/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Petrů Jaromír"} role="Technik (NDT)"/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Hajný Rostislav"} role="Hasič (NDT)"/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Sobotka Jaroslav"} role="Hasič (NDT)"/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Zezula Miroslav"} role="Hasič"/>
                </Grid>
            </Grid>

            
            <h2>2. výjezdové družstvo</h2>
            <Grid container>
                <Grid md={4}>
                    <AvatarCard name={"Bárta Roman"} role="Velitel družstva (NDT)"/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Kala Pavel"} role="Strojník (NDT)"/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Sáňka Josef"} role="Strojník (NDT)"/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Štoudek Petr"} role="Hasič (NDT)"/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Štěpánek Lukáš"} role="Hasič (NDT)"/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Hajný Radek"} role="Hasič (NDT)"/>
                </Grid>
            </Grid>
        </div>
    )
}

export default CompositionOfTheUnits;