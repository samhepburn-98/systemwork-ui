import Card from "@mui/material/Card";
import { CardContent, CardHeader } from "@mui/material";
import Stack from "@mui/material/Stack";
import MDTypography from "src/mui-components/MDTypography";
import useCustomerSummary from "src/hooks/query/useCustomerSummary.ts";

type SummaryContentProps = {
    customerId?: number;
}
const SummaryContent = ({ customerId = 1 }: SummaryContentProps) => {
    const { data: summary } = useCustomerSummary(customerId);

    return (
        <Card sx={{ boxShadow: "none", height: "100%", width: "100%" }}>
            <CardHeader title="Summary"/>
            <CardContent>
                <Stack spacing={1}>

                    <Stack direction="row" justifyContent="space-between">
                        <MDTypography color="text" textTransform="capitalize">
                            Domain Registrar
                        </MDTypography>
                        <MDTypography fontWeight="medium" textTransform="capitalize">
                            {summary?.domainRegistrar}
                        </MDTypography>
                    </Stack>

                    <Stack direction="row" justifyContent="space-between">
                        <MDTypography color="text" textTransform="capitalize">
                            Name Servers
                        </MDTypography>
                        <MDTypography fontWeight="medium" textTransform="capitalize">
                            {summary?.nameServers}
                        </MDTypography>
                    </Stack>

                    <Stack direction="row" justifyContent="space-between">
                        <MDTypography color="text" textTransform="capitalize">
                            Email
                        </MDTypography>
                        <MDTypography fontWeight="medium" textTransform="capitalize">
                            {summary?.email}
                        </MDTypography>
                    </Stack>

                    <Stack direction="row" justifyContent="space-between">
                        <MDTypography color="text" textTransform="capitalize">
                            File Storage
                        </MDTypography>
                        <MDTypography fontWeight="medium" textTransform="capitalize">
                            {summary?.fileStorage}
                        </MDTypography>
                    </Stack>

                    <Stack direction="row" justifyContent="space-between">
                        <MDTypography color="text" textTransform="capitalize">
                            Security Provider
                        </MDTypography>
                        <MDTypography fontWeight="medium" textTransform="capitalize">
                            {summary?.securityProvider}
                        </MDTypography>
                    </Stack>

                </Stack>
            </CardContent>
        </Card>
    );
};

export default SummaryContent;
