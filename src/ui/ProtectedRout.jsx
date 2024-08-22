import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRout({ children }) {
  const navigate = useNavigate();
  //1. LOAD THE AUTHENTICATION USER

  const { isLoading, isAuthenticated } = useUser();
  //2. IF THE USER IS NO AUTHENTICATED, REDIRECT TO THE /LOGIN

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  //3. WHILE LOAD, SHOW A SPINNER
  if (isLoading) return;
  <FullPage>
    <Spinner />;
  </FullPage>;

  //4. IF THERE IS A USER, RENDER THE APP
  if (isAuthenticated) return children;
}

export default ProtectedRout;
