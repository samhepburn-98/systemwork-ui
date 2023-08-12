import Card from "@mui/material/Card";
import { CardContent, CardHeader } from "@mui/material";
import Stack from "@mui/material/Stack";
import MDTypography from "src/mui-components/MDTypography";
import useCustomerContractDetails from "src/hooks/query/useCustomerContractDetails.ts";

type ContractContentProps = {
    customerId?: number;
};

const CustomerContract = ({ customerId = 1 }: ContractContentProps) => {
    const {data: contract} = useCustomerContractDetails(customerId);
    return (
        <Card sx={{ boxShadow: "none", height: "100%", width: "100%" }}>
            <CardHeader title="Contract"/>
            <CardContent>
                <Stack spacing={1}>
                    <Stack direction="row" justifyContent="space-between">
                        <MDTypography color="text" textTransform="capitalize">
                            Desktop Support
                        </MDTypography>
                        <MDTypography fontWeight="medium" textTransform="capitalize">
                            {contract?.desktopSupport}
                        </MDTypography>
                    </Stack>

                    <Stack direction="row" justifyContent="space-between">
                        <MDTypography color="text" textTransform="capitalize">
                            Server Support
                        </MDTypography>
                        <MDTypography fontWeight="medium" textTransform="capitalize">
                            {contract?.serverSupport}
                        </MDTypography>
                    </Stack>

                    <Stack direction="row" justifyContent="space-between">
                        <MDTypography color="text" textTransform="capitalize">
                            Switches
                        </MDTypography>
                        <MDTypography fontWeight="medium" textTransform="capitalize">
                            {contract?.switches}
                        </MDTypography>
                    </Stack>

                    <Stack direction="row" justifyContent="space-between">
                        <MDTypography color="text" textTransform="capitalize">
                            Phones
                        </MDTypography>
                        <MDTypography fontWeight="medium" textTransform="capitalize">
                            {contract?.phones}
                        </MDTypography>
                    </Stack>

                    <Stack direction="row" justifyContent="space-between">
                        <MDTypography color="text" textTransform="capitalize">
                            Mobile
                        </MDTypography>
                        <MDTypography fontWeight="medium" textTransform="capitalize">
                            {contract?.mobile}
                        </MDTypography>
                    </Stack>

                </Stack>
            </CardContent>
        </Card>
    );
};

export default CustomerContract;
