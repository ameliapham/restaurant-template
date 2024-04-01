
export function getIsDarkModeEnabledByDefault() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}