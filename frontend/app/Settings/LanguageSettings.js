import React from 'react'
export function LanguageSettings(){
    const [{ isOpen  }, setState] = React.useState({ isOpen })
    return (
        <Dialog
        onClose={handleClose}
        open={isOpen || false}
      >
        <DialogTitle> Select your desired language </DialogTitle>
        <DialogContent style={{ display: 'flex', flexDirection: 'column' }}>
        {Object.keys(languages).map((language) => (
          <Button
            color="inherit"
            key={language}
            style={{
              fontWeight:
                "selected_language" === language ? "bold" : "normal",
            }}
            type="submit"
            disabled={ "selected_language" === language}
            onClick={() => handleChangeLanguage(language)}
          >
            {languages[language].nativeName}
          </Button>
        ))}
        </DialogContent>
      </Dialog>
    )
}

export default LanguageSettings