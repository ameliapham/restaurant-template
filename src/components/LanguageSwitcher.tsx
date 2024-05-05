import { useState } from "react";
import { tss } from "tss-react/mui";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import TranslateIcon from '@mui/icons-material/Translate';
import { languages, useLang } from "i18n";

type Props = {
    className?: string;
};

export function LanguageSwitcher(props: Props) {
    const { className } = props;
    const { lang, setLang } = useLang();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = anchorEl !== null;

    const handleClose = () => {
        setAnchorEl(null);
    };

    const { classes } = useStyles();

    return (
        <div className={className}>
            <Button
                className={classes.languageSwitcherButton}
                //id="language-switcher-button"
                //aria-controls={open ? "language-menu" : undefined}
                //aria-haspopup="true"
                //aria-expanded={open ? "true" : undefined}
                onClick={event => setAnchorEl((event as any).currentTarget)}
                startIcon={<TranslateIcon />}
            >
                {
                    (() => {
                        switch (lang) {
                            case "en":
                                return "English";
                            case "fr":
                                return "Français";
                        }
                    })()
                }
            </Button>
            <Menu
                //id="language-switcher-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "language-switcher-button",
                }}
            >
                {languages.map(lang_i => (
                    <MenuItem
                        key={lang_i}
                        selected={lang === lang_i}
                        onClick={() => {
                            setLang(lang_i);
                            handleClose();
                        }}
                    >
                        {(() => {
                            switch (lang_i) {
                                case "en":
                                    return "English";
                                case "fr":
                                    return "Français";
                            }
                        })()}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

const useStyles = tss
    .withName("LanguageSwitcher")
    .create(({ theme }) => ({
        "languageSwitcherButton": {
            "color": theme.palette.text.primary,
            "textTransform": "none",
        },
    }));