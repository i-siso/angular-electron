import { InjectionToken } from '@angular/core';

export const WINDOW = new
    InjectionToken<Window>('Global window Object', {
        factory: () => window
    });

export interface ElectronWindow extends Window {
    require(module: string): any;
}