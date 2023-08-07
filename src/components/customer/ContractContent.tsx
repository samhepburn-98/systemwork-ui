import Card from "@mui/material/Card";
import { CardContent, CardHeader } from "@mui/material";
import Stack from "@mui/material/Stack";
import MDTypography from "src/mui-components/MDTypography";
import { Contract } from "src/types/profile";

const TEST_CONTRACT = {
    desktopSupport: 1,
    serverSupport: 2,
    switches: 3,
    phones: 4,
    mobile: 5
};

type ContractContentProps = {
    contract?: Contract;
};

const ContractContent = ({ contract = TEST_CONTRACT }: ContractContentProps) => {
    return (
        <Card sx={{ boxShadow: "none", height: "100%", width: "100%" }}>
            <CardHeader title="Contract"/>
            <CardContent>
                <Stack spacing={1}>
                    {
                        Object.entries<number>(contract).map(([key, value], index) => (
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

export default ContractContent;
