import Card from "@mui/material/Card";
import { CardContent, CardHeader } from "@mui/material";
import Stack from "@mui/material/Stack";
import MDTypography from "src/mui-components/MDTypography";
import { Summary } from "src/types/profile";

const TEST_SUMMARY = {
    domainRegistrar: "123 Reg",
    nameServers: "Cloudflare",
    email: "Office 365",
    fileStorage: "Sharepoint",
    securityProvider: "Eset"
};

type SummaryContentProps = {
    summary?: Summary;
}
const SummaryContent = ({ summary = TEST_SUMMARY }: SummaryContentProps) => {
    return (
        <Card sx={{ boxShadow: "none", height: "100%", width: "100%" }}>
            <CardHeader title="Summary"/>
            <CardContent>
                <Stack spacing={1}>
                    {
                        Object.entries(summary).map(([key, value], index) => (
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

export default SummaryContent;
