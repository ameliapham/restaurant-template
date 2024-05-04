import { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import TranslateIcon from '@mui/icons-material/Translate';
import type { Language } from "i18n";

export function LanguageSwitcher() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = anchorEl !== null;

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLanguageChange = (language: Language) => {
        console.log(`Language changed to ${language}`);
        handleClose();
    };

    return (
        <div>
            <Button
                id="language-switcher-button"
                aria-controls={open ? "language-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={event => setAnchorEl((event as any).currentTarget)}
                startIcon={<TranslateIcon />}
            >
                Language
            </Button>
            <Menu
                id="language-switcher-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "language-switcher-button",
                }}
            >
                <MenuItem onClick={() => handleLanguageChange("en")}>English</MenuItem>
                <MenuItem onClick={() => handleLanguageChange("fr")}>Français</MenuItem>
            </Menu>
        </div>
    );
}