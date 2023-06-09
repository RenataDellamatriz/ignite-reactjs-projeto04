import Link from "next/link";
import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  minHeight: '600px',
  maxHeight: '80vh',
  marginLeft: "auto",
});

export const Product = styled(Link, {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  minWidth: 520,

  
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",
     

    borderRadius: 6,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.3s ease-in-out",

    backgroundColor: "rgba(0,0,0,0.6)",

    strong: {
      fontSize: "$lg",
      color: '$gray100'
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300",
    },
  },

  "&:hover": {
    footer: {
      transform: "translate(0%)",
      opacity: 1,
    },
  },
});
