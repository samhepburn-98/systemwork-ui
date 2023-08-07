import Card from "@mui/material/Card";
import { CardHeader } from "@mui/material";
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

const SiteNotesContent = () => {
    return (
        <Card sx={{ boxShadow: "none", height: "100%", width: "100%" }}>
            <CardHeader title="Site Notes"/>
            <DataTable table={dataTableData} entriesPerPage={false} showTotalEntries={false}/>
        </Card>
    );
};

export default SiteNotesContent;
