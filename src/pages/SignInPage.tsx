import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

import MDBox from "src/mui-components/MDBox";
import MDTypography from "src/mui-components/MDTypography";
import MDInput from "src/mui-components/MDInput";
import MDButton from "src/mui-components/MDButton";

import BasicLayout from "src/layouts/BasicLayout";

import bgImage from "src/assets/images/bg-sign-in-basic.jpeg";

const SignInPage = () => {
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const handleSetRememberMe = () => setRememberMe(!rememberMe);

    const navigate = useNavigate();
    const onClickSignIn = () => {
        navigate("/customers/1");
    };

    return (
        <BasicLayout image={bgImage}>
            <Card>
                <MDBox
                    variant="gradient"
                    bgColor="info"
                    borderRadius="lg"
                    coloredShadow="info"
                    mx={2}
                    mt={-3}
                    p={2}
                    mb={1}
                    textAlign="center"
                >
                    <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                        Welcome back
                    </MDTypography>
                </MDBox>
                <MDBox pt={4} pb={3} px={3}>
                    <MDBox component="form" role="form">
                        <MDBox mb={2}>
                            <MDInput type="email" label="Email" fullWidth/>
                        </MDBox>
                        <MDBox mb={2}>
                            <MDInput type="password" label="Password" fullWidth/>
                        </MDBox>
                        <MDBox display="flex" alignItems="center" ml={-1}>
                            <Switch checked={rememberMe} onChange={handleSetRememberMe}/>
                            <MDTypography
                                variant="button"
                                fontWeight="regular"
                                onClick={handleSetRememberMe}
                                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                            >
                                &nbsp;&nbsp;Remember me
                            </MDTypography>
                        </MDBox>
                        <MDBox mt={4} mb={1}>
                            <MDButton variant="gradient" color="info" fullWidth onClick={onClickSignIn}>
                                Sign in
                            </MDButton>
                        </MDBox>
                        <MDBox mt={3} mb={1} textAlign="center">
                            <MDTypography variant="button">
                                Don&apos;t have an account?{" "}
                                <MDTypography
                                    component={Link}
                                    to="/authentication/sign-up/cover"
                                    variant="button"
                                    color="info"
                                    fontWeight="medium"
                                    textGradient
                                >
                                    Sign up
                                </MDTypography>
                            </MDTypography>
                        </MDBox>
                    </MDBox>
                </MDBox>
            </Card>
        </BasicLayout>
    );
};

export default SignInPage;
