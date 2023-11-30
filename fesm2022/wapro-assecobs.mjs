import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';

class MyLibraryService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: MyLibraryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: MyLibraryService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: MyLibraryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class MyLibraryComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: MyLibraryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.5", type: MyLibraryComponent, isStandalone: true, selector: "lib-my-library", ngImport: i0, template: `
    <p>
      my-library works!
    </p>
  `, isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: MyLibraryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-my-library', standalone: true, imports: [], template: `
    <p>
      my-library works!
    </p>
  ` }]
        }] });

/*
 * Public API Surface of my-library
 */
// https://lukasz-zielinski.pl/blog/posts/2021-05-16-jak-stworzy%C4%87-swoj%C4%85-w%C5%82asn%C4%85-bibliotek%C4%99-przy-pomocy-angulara/

/**
 * Generated bundle index. Do not edit.
 */

export { MyLibraryComponent, MyLibraryService };
//# sourceMappingURL=wapro-assecobs.mjs.map
