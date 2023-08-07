import DashboardLayout from "src/layouts/DashboardLayout.tsx";
import MDBox from "src/mui-components/MDBox";
import DashboardNavbar from "src/examples/Navbars/DashboardNavbar";
import Grid from "@mui/material/Grid";
import Header from "src/components/customer/Header.tsx";
import AddressContent from "src/components/customer/AddressContent.tsx";
import Divider from "@mui/material/Divider";
import PrimaryContactContent from "src/components/customer/PrimaryContactContent.tsx";
import ContractContent from "src/components/customer/ContractContent.tsx";
import Summary from "src/components/customer/Summary.tsx";
import ProvidersContent from "src/components/customer/ProvidersContent.tsx";
import SiteNotesContent from "src/components/customer/SiteNotesContent.tsx";
import UsersContent from "src/components/customer/UsersContent.tsx";
import Devices from "src/components/customer/Devices.tsx";
import Documents from "src/components/customer/Documents.tsx";

const NewPage = () => {
    console.log("HEY");
    return (
        <DashboardLayout>
            <MDBox width="calc(100% - 48px)" position="absolute" top="1.75rem">
                <DashboardNavbar light absolute/>
            </MDBox>
            <Header>
                    <MDBox mt={5}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={6} xl={4}>
                                <AddressContent/>
                            </Grid>
                            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
                                <Divider orientation="vertical" sx={{ ml: 0, mr: 1 }}/>
                                <PrimaryContactContent/>
                                <Divider orientation="vertical" sx={{ mx: 0 }}/>
                            </Grid>
                            <Grid item xs={12} xl={4}>
                                <ContractContent/>
                            </Grid>
                        </Grid>
                    </MDBox>

                    <Divider sx={{ my: 2 }}/>

                    <MDBox>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={6} xl={4}>
                                <Summary/>
                            </Grid>
                            <Grid item xs={12} md={6} xl={8} sx={{ display: "flex" }}>
                                <Divider orientation="vertical" sx={{ ml: 0, mr: 1 }}/>
                                <ProvidersContent/>
                            </Grid>
                        </Grid>
                    </MDBox>

                    <Divider sx={{ my: 2 }}/>

                    <MDBox>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={6} sx={{ display: "flex" }}>
                                <UsersContent/>
                                <Divider orientation="vertical" sx={{ ml: 1, mr: 0 }}/>
                            </Grid>
                            <Grid item xs={12} xl={6}>
                                <Devices/>
                            </Grid>
                        </Grid>
                    </MDBox>

                    <Divider sx={{ my: 2 }}/>

                    <MDBox pb={2}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} xl={4} sx={{ display: "flex" }}>
                                <Documents/>
                                <Divider orientation="vertical" sx={{ ml: 1, mr: 0 }}/>
                            </Grid>
                            <Grid item xs={12} xl={8}>
                                <SiteNotesContent/>
                            </Grid>
                        </Grid>
                    </MDBox>

            </Header>

        </DashboardLayout>
    );
};

export default NewPage;

