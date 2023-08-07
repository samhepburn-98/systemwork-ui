import { CardContent, CardHeader } from "@mui/material";
import Stack from "@mui/material/Stack";
import MDTypography from "src/mui-components/MDTypography";
import Card from "@mui/material/Card";
import { PrimaryContact } from "src/types/profile";

const TEST_CONTACT = {
    name: "Matthew Pert",
    landline: "01924 287456",
    mobile: "07889 654987",
    email: "matthew@r1i.co.uk"
};

type PrimaryContactProps = {
    contact?: PrimaryContact;
};
const PrimaryContactContent = ({ contact = TEST_CONTACT }: PrimaryContactProps) => {
    return (
        <Card sx={{ boxShadow: "none", height: "100%", width: "100%" }}>
            <CardHeader title="Primary Contact"/>
            <CardContent>
                <Stack spacing={1}>
                    {
                        Object.entries<string>(contact).map(([key, value], index) => (
                            <Stack direction="row" justifyContent="space-between" key={index}>
                                <MDTypography color="text" textTransform="capitalize">
                                    {key}
                                </MDTypography>
                                <MDTypography fontWeight="medium" textTransform="capitalize">
                                    {value}
                                </MDTypography>
                            </Stack>
                        ))
                    }
                </Stack>
            </CardContent>
        </Card>
    );
};

export default PrimaryContactContent;
