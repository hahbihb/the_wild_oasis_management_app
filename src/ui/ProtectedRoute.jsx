import React, { useEffect } from "react";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useUser } from "../features/authentication/useUser";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  //Load auth user
  const { isLoading, isAuthenticated } = useUser();

  //If no auth user, redirect to login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) {
        navigate("/login");
      }
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //If user direct to app
  if (isAuthenticated) return children;
};

export default ProtectedRoute;
