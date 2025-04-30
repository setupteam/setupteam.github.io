import { DOCUMENT } from "@angular/common";
import { FactoryProvider, InjectionToken } from "@angular/core";

export const WINDOW = new InjectionToken<Window>('WINDOW');

function getWindowProvider(document: Document) {
    return document.defaultView;
}

export const windowProvider : FactoryProvider = {
    provide: WINDOW,
    useFactory: (document:Document) => getWindowProvider(document),
    deps: [DOCUMENT]
}