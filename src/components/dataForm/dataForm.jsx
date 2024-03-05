import React, { useEffect } from "react";
import BasicInfo from "./basicInfo/basicInfo";
import WorkExperience from "./workExperience/workExperience";
import EducationForm from "./education/education";
import Projects from "./Projects/projects";
import Skills from "./skills/skills";
import { Box, Typography, Button } from "@mui/material";
import CertificatesForm from "./certification/certification";
import LanguagesForm from "./languages/languages";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";
import AddHomeOutlinedIcon from "@mui/icons-material/AddHomeOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { useSelector, useDispatch } from "react-redux";
import { toggleAccordion } from "../../Redux/slices/accordionSlice/accordionSlice";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import InterestsForm from "./interest/interest";
import AccordionSummary, {
  accordionSummaryClasses,
} from "@mui/joy/AccordionSummary";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";
import LanguageIcon from "@mui/icons-material/Language";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteItem } from "../../Redux/slices/formDataSlice/formDataSlice";
import { usePDFContext } from "../../customHooks/contentHooks";
export default function dataForm() {
  const { accordionOpen, setAccordionOpen } = usePDFContext();
  const reduxStore = useSelector((state) => state.dataForm);
  const [dataForUpdate, setDataForUpdate] = useState("");
  const [localOpen, setLocalOpen] = useState(accordionOpen);
  const accordianData = [
    {
      name: "basicInfo",
      title: "Basic Info",
      Icon: AccountCircleIcon,
      MyComponent: BasicInfo,
      requiredProperty: "name",
      sliceName: "basicInfo",
    },
    {
      name: "education",
      title: "Education",
      Icon: CastForEducationOutlinedIcon,
      MyComponent: EducationForm,
      requiredProperty: "institution",
      sliceName: "education",
    },
    {
      name: "projects",
      title: "Projects",
      Icon: ApartmentOutlinedIcon,
      MyComponent: Projects,
      requiredProperty: "title",
      sliceName: "projects",
    },
    {
      name: "workExperience",
      title: " Work Experience",
      Icon: WorkHistoryIcon,
      MyComponent: WorkExperience,
      requiredProperty: "name",
      sliceName: "workExperience",
    },
    {
      name: "skills",
      title: "Skills",
      Icon: WorkHistoryIcon,
      MyComponent: Skills,
      requiredProperty: "name",
      sliceName: "skills",
    },
    {
      name: "certification",
      title: "Certification",
      Icon: EmojiEventsOutlinedIcon,
      MyComponent: CertificatesForm,
      requiredProperty: "name",
      sliceName: "certification",
    },
    {
      name: "language",
      title: "Language",
      Icon: LanguageIcon,
      MyComponent: LanguagesForm,
      requiredProperty: "language",
      sliceName: "languages",
    },
    {
      name: "interest",
      title: "Interest",
      Icon: SportsEsportsIcon,
      MyComponent: InterestsForm,
      requiredProperty: "name",
      sliceName: "interests",
    },
  ];
  const [accordionState, setAccordionState] = useState(accordianData);
  const dispatch = useDispatch();

  useEffect(() => {
    setLocalOpen(accordionOpen);
  }, [accordionOpen]);
  const handleEdit = (index, name, data) => {
    setAccordionOpen((prev) => ({ ...prev, [name]: true }));
    setDataForUpdate({ index, name, data });
  };
  const handleDelete = (name, index) => {
    dispatch(deleteItem({ key: name, index: index }));
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          px: "10px",
          boxSizing: "border-box",
        }}
      >
        <AccordionGroup
          sx={{
            width: "100%",
            [`& .${accordionSummaryClasses.indicator}`]: {
              transition: "0.2s",
            },
            [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]:
              {
                transform: "rotate(45deg)",
              },
          }}
        >
          {accordionState &&
            accordionState.map((item, index) => {
              const { MyComponent, Icon, title, sliceName, requiredProperty } =
                item;
              const panel = `panel-${index}`;
              return (
                <Accordion key={panel}>
                  <AccordionSummary indicator={<AddIcon />}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 2,
                        py: "10px",
                        boxSizing: "border-box",
                      }}
                    >
                      <Box>
                        <Icon sx={{ transform: "scale(1.5)" }} />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: "700" }}>
                          {title}
                        </Typography>
                      </Box>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    {sliceName != "basicInfo" ? (
                      <>
                        <AccordionGroup
                          sx={{
                            width: "100%",
                            [`& .${accordionSummaryClasses.indicator}`]: {
                              transition: "0.5s",
                            },
                            [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]:
                              {
                                transform: "rotate(45deg)",
                              },
                          }}
                        >
                          <Accordion
                            expanded={localOpen[sliceName]}
                            onChange={() => {
                              setAccordionOpen((prev) => ({
                                ...prev,
                                [sliceName]: !prev[sliceName],
                              }));
                            }}
                          >
                            <AccordionSummary
                              indicator={<DataSaverOnIcon />}
                              sx={{
                                border: "solid",
                                borderWidth: "1px 1px 0px 1px",
                                borderRadius: "5px 5px 0px 0px ",
                              }}
                            >
                              Add Item
                            </AccordionSummary>
                            <AccordionDetails>
                              <Box>
                                {accordionOpen[sliceName]&&<MyComponent
                                  dataForUpdate={dataForUpdate}
                                  setDataForUpdate={setDataForUpdate}
                                />}
                                
                              </Box>
                            </AccordionDetails>
                          </Accordion>
                        </AccordionGroup>
                        {reduxStore[sliceName]?.map((item, index) => {
                          return (
                            <Box
                            key={index}
                              border={1}
                              sx={{
                                width: "100%",
                                borderRadius: "5px",
                                py: 1,
                                mt: 2,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                textAlign: "center",
                                px: 1.5,
                                boxSizing: "border-box",
                              }}
                            >
                              <Box component={"span"} fontWeight={"700"}>
                                {item[requiredProperty]}
                              </Box>
                              <Box sx={{ display: "flex", gap: 2 }}>
                                <EditIcon
                                  sx={{ cursor: "pointer" }}
                                  onClick={() =>
                                    handleEdit(index, sliceName, item)
                                  }
                                />
                                <DeleteForeverIcon
                                  sx={{ cursor: "pointer" }}
                                  onClick={() => handleDelete(sliceName, index)}
                                />
                              </Box>
                            </Box>
                          );
                        })}
                      </>
                    ) : (
                      <Box>
                        <MyComponent dataForUpdate={""} />
                      </Box>
                    )}
                  </AccordionDetails>
                </Accordion>
              );
            })}
        </AccordionGroup>
      </Box>
    </>
  );
}
