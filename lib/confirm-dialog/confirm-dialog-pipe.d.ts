import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ReplacePipe implements PipeTransform {
    transform(value: string, strToReplace: string, replacementStr: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReplacePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ReplacePipe, "replace", true>;
}
