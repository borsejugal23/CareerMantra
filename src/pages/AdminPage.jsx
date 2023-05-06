import React from "react";
import { AdminSidebar } from "../components/AdminParts/AdminSidebar";
import { AdminList } from "../components/AdminParts/AdminList";
import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export const AdminPage = () => {
  return (
    <Wrapper>
      <Navbar />
      <Main>
        <AdminSidebar />
        <AdminList />
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  padding: 20px;
`;
