import Card from "@mui/material/Card";
import { CardContent, CardHeader } from "@mui/material";
import DataTable from "src/examples/Tables/DataTable";

const dataTableData = {
    columns: [
        { Header: "user", accessor: "user", width: "20%" },
        { Header: "email", accessor: "email" },
        { Header: "mobile", accessor: "mobile" },
        { Header: "landline", accessor: "landline" },
    ],

    rows: [
        {
            user: "Katie Taylor",
            email: "katie@rli.co.uk",
            mobile: "07888 456987",
            landline: "01924 287456",
        }
    ]
};

const UsersCard = () => {
    return (
        <Card sx={{ height: "100%" }}>
            <CardHeader title="Users"/>
            <CardContent sx={{ px: 0, pt: 0 }}>
                <DataTable table={dataTableData} entriesPerPage={false} showTotalEntries={false}/>
            </CardContent>
        </Card>
    );
};

export default UsersCard;
