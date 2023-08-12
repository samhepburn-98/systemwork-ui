import { CardContent, CardHeader } from "@mui/material";
import Stack from "@mui/material/Stack";
import MDTypography from "src/mui-components/MDTypography";
import Card from "@mui/material/Card";
import useCustomerPrimaryContact from "src/hooks/query/useCustomerPrimaryContact.ts";

type PrimaryContactProps = {
    customerId?: number;
};
const CustomerPrimaryContact = ({ customerId = 1 }: PrimaryContactProps) => {
    const { data: contact } = useCustomerPrimaryContact(customerId);

    return (
        <Card sx={{ boxShadow: "none", height: "100%", width: "100%" }}>
            <CardHeader title="Primary Contact"/>
            <CardContent>
                <Stack spacing={1}>

                    <Stack direction="row" justifyContent="space-between">
                        <MDTypography color="text" textTransform="capitalize">
                            Name
                        </MDTypography>
                        <MDTypography fontWeight="medium" textTransform="capitalize">
                            {contact?.name}
                        </MDTypography>
                    </Stack>

                    <Stack direction="row" justifyContent="space-between">
                        <MDTypography color="text" textTransform="capitalize">
                            Email
                        </MDTypography>
                        <MDTypography fontWeight="medium" textTransform="capitalize">
                            {contact?.email}
                        </MDTypography>
                    </Stack>

                    <Stack direction="row" justifyContent="space-between">
                        <MDTypography color="text" textTransform="capitalize">
                            Mobile
                        </MDTypography>
                        <MDTypography fontWeight="medium" textTransform="capitalize">
                            {contact?.mobile}
                        </MDTypography>
                    </Stack>

                    <Stack direction="row" justifyContent="space-between">
                        <MDTypography color="text" textTransform="capitalize">
                            Landline
                        </MDTypography>
                        <MDTypography fontWeight="medium" textTransform="capitalize">
                            {contact?.landline}
                        </MDTypography>
                    </Stack>

                </Stack>
            </CardContent>
        </Card>
    );
};

export default CustomerPrimaryContact;
