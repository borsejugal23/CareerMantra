import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DeleteOutline } from '@material-ui/icons';
import axios from 'axios';

const AdminUserList = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get('https://mu9umx-8080.csb.app/admin');
      // console.log("res",response.data)
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
 
  const handleDelete = (id) => {
    axios
      .delete(`https://mu9umx-8080.csb.app/admin/${id}`)
      .then(() => {
        setData(data.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'user',
      headerName: 'User',
      width: 300,
      renderCell: (params) => {
        return (
          <ListItem>
            <ListImage src={params.row.images} alt="image" />
            {params.row.name}
          </ListItem>
        );
      }
    },
    { field: 'country', headerName: 'Country', width: 200 },
    {
      field: 'students',
      headerName: 'Students',
      width: 120
    },
    {
      field: 'rating',
      headerName: 'Rating',
      width: 160
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <EditButton primary>Edit</EditButton>
            </Link>
            <MyDeleteOutline onClick={() => handleDelete(params.row.id)} />
          </>
        );
      }
    }
  ];

  return (
    <TheList>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </TheList>
  );
};

export default AdminUserList;

export const TheList = styled.div`
  flex: 4;
`;
export const ListItem = styled.div`
  display: flex;
  align-items: center;
`;
export const ListImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
export const EditButton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: ${(props) => (props.primary ? 'DarkMagenta' : 'SeaGreen')};
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;
export const MyDeleteOutline = styled(DeleteOutline)`
  color: red;
  cursor: pointer;
`;
