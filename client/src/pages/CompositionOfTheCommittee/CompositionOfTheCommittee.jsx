import { Grid } from "@mui/material";
import AvatarCard from "../../components/avatarCard/avatarCard";

function CompositionOfTheCommittee(){
    return(
        <div>
            <h2>Složení výboru SDH</h2>
            <Grid container>
                <Grid md={4}>
                    <AvatarCard name={"Petrů Jaromír"} role="starosta SDH"/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Špaček Josef"} role="čestný starosta"/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Bárta Roman"}/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Flok Luděk"}/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Podloučka Pavel"} role="velitel JSDH"/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Hajný Radek"}/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Hajný Rostislav"}/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Jeschkeová Nela"}/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Kala Pavel"}/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Livorová Eva"}/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Odehnal Vojtěch"}/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Otava Jiří"}/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Roučka Jan ml."}/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Rumlerová Eliška"}/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Strachoň Bohuslav"}/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Štoudek Daniel"}/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Štoudek Petr"}/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Veselá Soňa"}/>
                </Grid>
                <Grid md={4} style={{margin: "auto"}}>
                    <AvatarCard name={"Zezula Miroslav"}/>
                </Grid>
            </Grid>

            <h2>Revizní rada</h2>
            <Grid container>
                <Grid md={4}>
                    <AvatarCard name={"Sáňka Josef ml."}/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Bartoš Dušan"}/>
                </Grid>
                <Grid md={4}>
                    <AvatarCard name={"Tomášek Radek"}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default CompositionOfTheCommittee;