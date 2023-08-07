import Card from "@mui/material/Card";
import { CardContent, CardHeader } from "@mui/material";
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

const ProvidersCard = () => {
    return (
        <Card sx={{ height: "100%" }}>
            <CardHeader title="Providers"/>
            <CardContent sx={{ px: 0, pt: 0 }}>
                <DataTable table={dataTableData} entriesPerPage={false} showTotalEntries={false}/>
            </CardContent>
        </Card>
    );
};

export default ProvidersCard;
