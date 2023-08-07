import DashboardLayout from "src/layouts/DashboardLayout.tsx";
import MDBox from "src/mui-components/MDBox";
import DashboardNavbar from "src/examples/Navbars/DashboardNavbar";
import Grid from "@mui/material/Grid";
import AddressCard from "src/components/customer/AddressCard.tsx";
import PrimaryContactCard from "src/components/customer/PrimaryContactCard.tsx";
import ContractCard from "src/components/customer/ContractCard.tsx";
import SummaryCard from "src/components/customer/SummaryCard.tsx";
import ProvidersCard from "src/components/customer/ProvidersCard.tsx";
import DevicesCard from "src/components/customer/DevicesCard.tsx";
import SiteNotesCard from "src/components/customer/SiteNotesCard.tsx";
import DocumentsCard from "src/components/customer/DocumentsCard.tsx";
import UsersCard from "src/components/customer/UsersCard.tsx";
import Header from "src/components/customer/Header.tsx";


const CustomerPage = () => {
    return (
        <DashboardLayout>
            {/*<DashboardNavbar />*/}
            <MDBox width="calc(100% - 48px)" position="absolute" top="1.75rem">
                <DashboardNavbar light absolute/>
            </MDBox>
            <Header/>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={4}>
                    <AddressCard/>
                </Grid>


                <Grid item xs={12} sm={4}>
                    <PrimaryContactCard/>
                </Grid>


                <Grid item xs={12} sm={4}>
                    <ContractCard/>
                </Grid>


                <Grid item xs={12} sm={4}>
                    <SummaryCard/>
                </Grid>


                <Grid item xs={12} sm={8}>
                    <ProvidersCard/>
                </Grid>


                <Grid item xs={12} sm={6}>
                    <DevicesCard/>
                </Grid>


                <Grid item xs={12} sm={6}>
                    <SiteNotesCard/>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <DocumentsCard/>
                </Grid>

                <Grid item xs={12} sm={8}>
                    <UsersCard/>
                </Grid>

            </Grid>
        </DashboardLayout>
    );
};

export default CustomerPage;

