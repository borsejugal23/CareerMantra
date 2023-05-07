import React, { useState } from 'react'
import { DataGrid } from "@material-ui/data-grid";
// import { productRows } from "../dummyData";
import { Link } from "react-router-dom";
import { DeleteOutline } from '@material-ui/icons';
import styled from 'styled-components';

const AdminProductList = () => {

    const [data, setData] = useState();
    
const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "product",
            headerName: "Product",
            width: 200,
            renderCell: (params) => {
                return (
                    <ListItem>
                        <ListImage src={params.row.img} alt="image" />
                        {params.row.name}
                    </ListItem>
                );
            },
        },
        { field: "stock", headerName: "Stock", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 120,
        },
        {
            field: "price",
            headerName: "Price",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <EditButton>Edit</EditButton>
                        </Link>
                        <MyDeleteOutline
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];
return (
        <TheList>
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </TheList>
    )
}
export default AdminProductList;

export const TheList = styled.div`
    flex: 4;
`
export const ListItem = styled.div`
    display: flex;
    align-items: center;
`
export const ListImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`
export const EditButton = styled.button`
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: ${props => props.primary ? "DarkMagenta" : "SeaGreen"};
    color: white;
    cursor: pointer;
    margin-right: 20px;
`
export const MyDeleteOutline = styled(DeleteOutline)`
    color: red;
    cursor: pointer;
    `