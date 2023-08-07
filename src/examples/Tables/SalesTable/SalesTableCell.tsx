import TableCell from "@mui/material/TableCell";

import MDTypography from "src/mui-components/MDTypography";
import MDBox from "src/mui-components/MDBox";

interface Props {
    title: string;
    content?: string | number;
    image?: string;
    noBorder?: boolean;

    [key: string]: unknown;
}

function SalesTableCell({ title, content, image, noBorder, ...rest }: Props): JSX.Element {
    let template;

    if (image) {
        template = (
            <TableCell {...rest} align="left" width="30%" sx={{ ...(noBorder && { border: 0 }) }}>
                <MDBox display="flex" alignItems="center" width="max-content">
                    <MDBox
                        component="img"
                        src={image}
                        alt={content?.toString()}
                        width="1.5rem"
                        height="auto"
                    />{" "}
                    <MDBox display="flex" flexDirection="column" ml={3}>
                        <MDTypography
                            variant="caption"
                            color="text"
                            fontWeight="medium"
                            textTransform="capitalize"
                        >
                            {title}:
                        </MDTypography>
                        <MDTypography variant="button" fontWeight="regular" textTransform="capitalize">
                            {content}
                        </MDTypography>
                    </MDBox>
                </MDBox>
            </TableCell>
        );
    } else {
        template = (
            <TableCell
                {...rest}
                align="center"
                sx={{ ...(noBorder && { border: 0 }) }}
            >
                <MDBox display="flex" flexDirection="column">
                    <MDTypography
                        variant="caption"
                        color="text"
                        fontWeight="medium"
                        textTransform="capitalize"
                    >
                        {title}:
                    </MDTypography>
                    <MDTypography variant="button" fontWeight="regular" textTransform="capitalize">
                        {content}
                    </MDTypography>
                </MDBox>
            </TableCell>
        );
    }

    return template;
}

// Declaring default props for SalesTableCell
SalesTableCell.defaultProps = {
    image: "",
    noBorder: false,
};

export default SalesTableCell;
