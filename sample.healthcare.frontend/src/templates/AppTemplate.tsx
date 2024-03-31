import { Footer, Navbar } from "@/molecules";
import { Sidebar } from "@/molecules/Sidebar/Sidebar";
import { Box, styled } from "@mui/material";

interface Props {
  component: React.ReactNode;
}

const SidebarDiv = styled("div")(({ theme }) => ({
  borderRight: "1px solid neutral.300",
  boxShadow: "0px 12px 24px 0px rgba(0, 0, 0, 0.10)",
  width: "260px",
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  top: `85px`,
  left: "0",
  zIndex: "0",
  height: "100%",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const ContentWrapper = styled("div")(() => ({
  marginLeft: "260px",
}));

export const AppTemplate = (props: Props) => {
  const { component } = props;
  return (
    <>
      <Box>
        <Box sx={{ gridArea: "header", zIndex: "header" }}>
          <Navbar />
        </Box>
        <Box>
          <SidebarDiv>
            <Sidebar />
          </SidebarDiv>

          <ContentWrapper>{component}</ContentWrapper>
        </Box>
        <Box sx={{ gridArea: "footer", zIndex: "2" }}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};
