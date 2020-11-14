import { default as template } from './gcode.tmLanguage.json'
import { default as scopes } from './scopes.json'

export function getJson(themeName: string) {
    const targetScopes = (scopes as any)[themeName];
    (template as any).themeName = themeName;
    let json = JSON.stringify(template, null, 2);
    Object.keys(targetScopes).forEach(key => {
        const regex = new RegExp('replace.' + key, 'g');
        json = json.replace(regex, targetScopes[key]);
    });
    return json
}

export function isThemeSupported(themeName: string){
    return (themeName in scopes);
}