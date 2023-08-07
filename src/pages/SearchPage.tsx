import DashboardNavbar from "src/examples/Navbars/DashboardNavbar";
import DashboardLayout from "src/layouts/DashboardLayout.tsx";
import Grid from "@mui/material/Grid";
import CustomerCard from "src/components/search/CustomerCard.tsx";
import MDInput from "src/mui-components/MDInput";
import MDBox from "src/mui-components/MDBox";
import MDTypography from "src/mui-components/MDTypography";

const SearchPage = () => {
    return (
        <DashboardLayout>
            <DashboardNavbar/>
            <MDBox py={5}>

                <MDBox mb={2}>
                    <MDTypography variant="h2">Customer Search</MDTypography>
                </MDBox>
                <MDInput label="Search here"/>

                <Grid container spacing={2} rowSpacing={5} mt={2}>

                    {
                        [...Array(10)].map((_, index) =>
                            <Grid item xs={12} sm={4} key={index}>
                                <CustomerCard
                                    description="Hello world"
                                    image={undefined}
                                    title="Customer 1"
                                    users={10}
                                    devices={10}
                                    dateTime={new Date().toDateString()}
                                />
                            </Grid>
                        )
                    }

                </Grid>
            </MDBox>

        </DashboardLayout>
    );
};

export default SearchPage;
