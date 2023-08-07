import Card from "@mui/material/Card";

import MDTypography from "src/mui-components/MDTypography";
import { CardContent, CardHeader } from "@mui/material";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import CardMedia from "@mui/material/CardMedia";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import image from "src/assets/images/GoogleMap.jpg.webp";
import { Address } from "src/types/profile";

const TEST_ADDRESS = {
    addressLine1: "1 Innovation Square",
    addressLine2: "Featherstone",
    city: "Pontefract",
    postcode: "WF7 6NX"
};

type AddressProps = {
    address?: Address;
}
const AddressContent = ({ address = TEST_ADDRESS }: AddressProps) => {

    return (
        <Card sx={{ boxShadow: "none" }}>
            <CardHeader title="Address"/>
            <CardContent>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <Stack spacing={1}>
                            <MDTypography color="text">{address?.addressLine1}</MDTypography>
                            <MDTypography color="text">{address?.addressLine2}</MDTypography>
                            <MDTypography color="text">{address?.city}</MDTypography>
                            <MDTypography color="text">{address?.postcode}</MDTypography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CardMedia
                            src={image}
                            component="img"
                            title={"title"}
                            sx={{
                                maxWidth: "75%",
                                margin: 0,
                                objectFit: "cover",
                                objectPosition: "center",
                            }}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default AddressContent;