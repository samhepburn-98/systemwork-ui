import Card from "@mui/material/Card";
import { CardContent, CardHeader } from "@mui/material";
import DataTable from "src/examples/Tables/DataTable";

const dataTableData = {
    columns: [
        { Header: "note", accessor: "note", width: "20%" },
        { Header: "description", accessor: "description" },
        { Header: "detail", accessor: "detail" }
    ],

    rows: [
        {
            note: "Server",
            description: "Server Location",
            detail: "Server is situation in meter room behind the kitchen",
        }
    ]
};

const SiteNotesCard = () => {
    return (
        <Card sx={{ height: "100%" }}>
            <CardHeader title="Site Notes"/>
            <CardContent sx={{ px: 0, pt: 0 }}>
                <DataTable table={dataTableData} entriesPerPage={false} showTotalEntries={false}/>
            </CardContent>
        </Card>
    );
};

export default SiteNotesCard;
