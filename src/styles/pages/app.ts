import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh", 
  paddingBottom:"7.5rem", 
});

export const Header = styled("header", {
  padding: "2rem 1rem",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
});
