import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Language } from "@mui/icons-material";
import { APP_SUPPORTED_LANGUAGES } from "../constants";

export function LanguageSettings() {
  const [{ isOpen }, setState] = React.useState({ isOpen: false });
  const [language, setLanguage] = React.useState("en");
  const languages = APP_SUPPORTED_LANGUAGES;

  function handleClose() {
    setState(() => ({ isOpen: !isOpen }))
  }

  function openLanguageSelection(){
    setState(() => ({ isOpen: true}))
  }

  function handleChangeLanguage(language){
    setState(() => ({ isOpen: !isOpen }))
    setLanguage(language)
  }

  return (
    <>
      <IconButton onClick={openLanguageSelection} title="changeLang">
        <Language />
        <Typography>{language}</Typography>
      </IconButton>
      <Dialog onClose={handleClose} open={isOpen || false}>
        <DialogTitle> Select your desired language </DialogTitle>
        <DialogContent style={{ display: "flex", flexDirection: "column" }}>
          {Object.keys(languages).map((language) => (
            <Button
              color="inherit"
              key={language}
              style={{
                fontWeight:
                  "selected_language" === language ? "bold" : "normal",
              }}
              type="submit"
              disabled={"selected_language" === language}
              onClick={() => handleChangeLanguage(language)}
            >
              {languages[language].nativeName}
            </Button>
          ))}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default LanguageSettings;
