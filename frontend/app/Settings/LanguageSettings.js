"use client";
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Language } from "@mui/icons-material";
import { useLanguage } from "./useLanguage";

export function LanguageSettings() {
  const [isOpen, setIsOpen] = React.useState(false);

  const {
    t,
    language: currentLanguage,
    languages,
    changeLanguage,
  } = useLanguage();

  function handleClose() {
    setIsOpen(false);
  }

  function openLanguageSelection() {
    setIsOpen(true);
  }

  function handleChangeLanguage(language) {
    setIsOpen(false);
    changeLanguage(language);
  }

  return (
    <>
      <IconButton onClick={openLanguageSelection} title="changeLang">
        <Language />
        <Typography>{currentLanguage}</Typography>
      </IconButton>
      <Dialog onClose={handleClose} open={isOpen || false}>
        <DialogTitle> {t("CHANGE_LANGUAGE")} </DialogTitle>
        <DialogContent style={{ display: "flex", flexDirection: "column" }}>
          {Object.keys(languages).map((language) => (
            <Button
              color="inherit"
              key={language}
              style={{
                fontWeight: currentLanguage === language ? "bold" : "normal",
              }}
              type="submit"
              disabled={currentLanguage === language}
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
