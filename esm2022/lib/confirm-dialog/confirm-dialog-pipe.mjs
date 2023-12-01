import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class ReplacePipe {
    transform(value, strToReplace, replacementStr) {
        if (!value || !strToReplace || !replacementStr) {
            return value;
        }
        return value.replace(new RegExp(strToReplace, 'g'), replacementStr);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: ReplacePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.0.5", ngImport: i0, type: ReplacePipe, isStandalone: true, name: "replace" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: ReplacePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'replace', standalone: true }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1kaWFsb2ctcGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL215LWxpYnJhcnkvc3JjL2xpYi9jb25maXJtLWRpYWxvZy9jb25maXJtLWRpYWxvZy1waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUdwRCxNQUFNLE9BQU8sV0FBVztJQUN0QixTQUFTLENBQ1AsS0FBYSxFQUNiLFlBQW9CLEVBQ3BCLGNBQXNCO1FBRXRCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDOUMsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDdEUsQ0FBQzs4R0FYVSxXQUFXOzRHQUFYLFdBQVc7OzJGQUFYLFdBQVc7a0JBRHZCLElBQUk7bUJBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdyZXBsYWNlJywgc3RhbmRhbG9uZTogdHJ1ZSB9KVxyXG5leHBvcnQgY2xhc3MgUmVwbGFjZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0oXHJcbiAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgc3RyVG9SZXBsYWNlOiBzdHJpbmcsXHJcbiAgICByZXBsYWNlbWVudFN0cjogc3RyaW5nXHJcbiAgKTogc3RyaW5nIHtcclxuICAgIGlmICghdmFsdWUgfHwgIXN0clRvUmVwbGFjZSB8fCAhcmVwbGFjZW1lbnRTdHIpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoc3RyVG9SZXBsYWNlLCAnZycpLCByZXBsYWNlbWVudFN0cik7XHJcbiAgfVxyXG59XHJcbiJdfQ==