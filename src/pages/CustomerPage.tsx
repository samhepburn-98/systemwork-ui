import DashboardLayout from "src/layouts/DashboardLayout.tsx";
import MDBox from "src/mui-components/MDBox";
import DashboardNavbar from "src/examples/Navbars/DashboardNavbar";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import CustomerPrimaryContact from "src/components/customer/CustomerPrimaryContact.tsx";
import CustomerContract from "src/components/customer/CustomerContract.tsx";
import Summary from "src/components/customer/CustomerSummary.tsx";
import CustomerProviders from "src/components/customer/CustomerProviders.tsx";
import CustomerSiteNotes from "src/components/customer/CustomerSiteNotes.tsx";
import CustomerUsers from "src/components/customer/CustomerUsers.tsx";
import CustomerDevices from "src/components/customer/CustomerDevices.tsx";
import backgroundImage from "src/assets/images/bg-profile.jpeg";
import Card from "@mui/material/Card";
import MDAvatar from "src/mui-components/MDAvatar";
import burceMars from "src/assets/images/bruce-mars.jpg";
import MDTypography from "src/mui-components/MDTypography";
import AppBar from "@mui/material/AppBar";
import { Tab, Tabs } from "@mui/material";
import Icon from "@mui/material/Icon";
import { SyntheticEvent, useEffect, useState } from "react";
import breakpoints from "src/theme/breakpoints.ts";
import useCustomerDetails from "src/hooks/query/useCustomerDetails.ts";

const CustomerPage = () => {
    const [tabsOrientation, setTabsOrientation] = useState<"horizontal" | "vertical">("horizontal");
    const [tabValue, setTabValue] = useState(0);

    useEffect(() => {
        // A function that sets the orientation state of the tabs.
        function handleTabsOrientation() {
            return window.innerWidth < breakpoints.values.sm
                ? setTabsOrientation("vertical")
                : setTabsOrientation("horizontal");
        }

        /**
         The event listener that's calling the handleTabsOrientation function when resizing the window.
         */
        window.addEventListener("resize", handleTabsOrientation);

        // Call the handleTabsOrientation function to set the state with the initial value.
        handleTabsOrientation();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleTabsOrientation);
    }, [tabsOrientation]);

    const handleSetTabValue = (_: SyntheticEvent, newValue: number) => setTabValue(newValue);

    const { data: customer } = useCustomerDetails(1);

    return (
        <DashboardLayout>
            <MDBox width="calc(100% - 48px)" position="absolute" top="1.75rem">
                <DashboardNavbar light absolute/>
            </MDBox>
            <MDBox position="relative" mb={5}>
                <MDBox
                    display="flex"
                    alignItems="center"
                    position="relative"
                    minHeight="12.75rem"
                    borderRadius="xl"
                    sx={{
                        backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
                            `${linearGradient(
                                rgba(gradients.info.main, 0.6),
                                rgba(gradients.info.state, 0.6)
                            )}, url(${backgroundImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "50%",
                        overflow: "hidden",
                    }}
                />
                <Card
                    sx={{
                        position: "relative",
                        mt: -8,
                        mx: 3,
                        py: 2,
                        px: 2,
                    }}
                >
                    <Grid container spacing={3} alignItems="center">
                        <Grid item>
                            <MDAvatar src={burceMars} alt="profile-image" size="xl" shadow="sm"/>
                        </Grid>
                        <Grid item>
                            <MDBox height="100%" mt={0.5} lineHeight={1}>
                                <MDTypography variant="h5" fontWeight="medium">
                                    {customer?.name}
                                </MDTypography>
                                <MDTypography variant="button" color="text" fontWeight="regular">
                                    {[customer?.address.addressLine1, customer?.address.addressLine2, customer?.address.city, customer?.address.postcode].join(", ")}
                                </MDTypography>
                            </MDBox>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
                            <AppBar position="static">
                                <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
                                    <Tab
                                        label="Details"
                                        icon={
                                            <Icon fontSize="small" sx={{ mt: -0.25 }}>
                                                home
                                            </Icon>
                                        }
                                    />
                                    <Tab
                                        label="Documents"
                                        icon={
                                            <Icon fontSize="small" sx={{ mt: -0.25 }}>
                                                email
                                            </Icon>
                                        }
                                    />
                                </Tabs>
                            </AppBar>
                        </Grid>
                    </Grid>

                    {
                        tabValue === 0 &&
                        <>
                            <MDBox mt={5}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} md={6} xl={4}>
                                        <CustomerPrimaryContact/>
                                    </Grid>
                                    <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
                                        <Divider orientation="vertical" sx={{ ml: 0, mr: 1 }}/>
                                        <CustomerContract/>
                                        <Divider orientation="vertical" sx={{ mx: 0 }}/>
                                    </Grid>
                                    <Grid item xs={12} xl={4}>
                                        <Summary/>
                                    </Grid>
                                </Grid>
                            </MDBox>

                            <Divider sx={{ my: 2 }}/>

                            <MDBox>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} xl={6} sx={{ display: "flex" }}>
                                        <CustomerProviders/>
                                        <Divider orientation="vertical" sx={{ ml: 1, mr: 0 }}/>
                                    </Grid>
                                    <Grid item xs={12} xl={6}>
                                        <CustomerSiteNotes/>
                                    </Grid>
                                </Grid>
                            </MDBox>

                            <Divider sx={{ my: 2 }}/>

                            <MDBox pb={2}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} md={6} sx={{ display: "flex" }}>
                                        <CustomerUsers/>
                                        <Divider orientation="vertical" sx={{ ml: 1, mr: 0 }}/>
                                    </Grid>
                                    <Grid item xs={12} xl={6}>
                                        <CustomerDevices/>
                                    </Grid>
                                </Grid>
                            </MDBox>
                        </>
                    }
                </Card>
            </MDBox>

        </DashboardLayout>
    );
};

export default CustomerPage;
