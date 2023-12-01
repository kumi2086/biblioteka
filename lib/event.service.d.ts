import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class EventService {
    constructor();
    activeShortcuts: Subject<any>;
    setFocus: (control: any) => void;
    onHiddenPopUp: (unicalGuid?: any) => void;
    onShownPopUp: (unicalGuid?: any) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EventService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EventService>;
}
