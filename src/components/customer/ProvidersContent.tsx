import Card from "@mui/material/Card";
import { CardHeader } from "@mui/material";
import DataTable from "src/examples/Tables/DataTable";

const dataTableData = {
    columns: [
        { Header: "company", accessor: "company", width: "20%" },
        { Header: "service", accessor: "service" },
        { Header: "number", accessor: "number" },
        { Header: "email", accessor: "email", width: "20%" },
    ],

    rows: [
        {
            company: "Sage",
            service: "Accounts",
            number: "01133 684 254",
            email: "support@sage.co.uk",
        }
    ]
};

const ProvidersContent = () => {
    return (
        <Card sx={{ boxShadow: "none", height: "100%", width: "100%" }}>
            <CardHeader title="Providers"/>
            <DataTable table={dataTableData} entriesPerPage={false} showTotalEntries={false}/>
        </Card>
    );
};

export default ProvidersContent;
