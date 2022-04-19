import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 11px 16px;
`;

export const GithubLogo = styled(FaGithub)`
  fill: var(--logo);
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const SearchForm = styled.form`
  padding-left: 16px;
  width: 100%;
  input {
    background: var(--search);
    outline: 0;
    border-radius: 6px;
    padding: 7px 12px;
    width: 99%;
    &:focus {
      width: 318px;
    }
    transition: width 0.2s ease-out, color 0.2s ease-out;
  }
`;

export const Theme = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  width: 60px;
  height: 40px;
  border: 2px solid var(--border);
  cursor: pointer;
  > span {
    display: flex;
    color: white;
    font-size: 12px;
    justify-content: center;
    align-items: center;
  }
`;
