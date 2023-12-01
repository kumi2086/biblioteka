import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class EventService {
    constructor() {
        this.activeShortcuts = new Subject();
        this.setFocus = (control) => {
            if (control) {
                control.instance.focus();
            }
        };
        this.onHiddenPopUp = (unicalGuid) => {
            let object = {
                unicalGuid: unicalGuid,
                value: false,
            };
            setTimeout(() => {
                this.activeShortcuts.next(object);
                // this.removeKeyboardEventListeners();
            }, 500);
        };
        this.onShownPopUp = (unicalGuid) => {
            let object = {
                unicalGuid: unicalGuid,
                value: true,
            };
            this.activeShortcuts.next(object);
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: EventService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: EventService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: EventService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL215LWxpYnJhcnkvc3JjL2xpYi9ldmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLL0IsTUFBTSxPQUFPLFlBQVk7SUFDdkI7UUFFQSxvQkFBZSxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFFckMsYUFBUSxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDckIsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUMxQjtRQUNILENBQUMsQ0FBQztRQUVGLGtCQUFhLEdBQUcsQ0FBQyxVQUFXLEVBQUUsRUFBRTtZQUM5QixJQUFJLE1BQU0sR0FBRztnQkFDWCxVQUFVLEVBQUUsVUFBVTtnQkFDdEIsS0FBSyxFQUFFLEtBQUs7YUFDYixDQUFDO1lBQ0YsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEMsdUNBQXVDO1lBQ3pDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNWLENBQUMsQ0FBQztRQUVGLGlCQUFZLEdBQUcsQ0FBQyxVQUFXLEVBQUUsRUFBRTtZQUM3QixJQUFJLE1BQU0sR0FBRztnQkFDWCxVQUFVLEVBQUUsVUFBVTtnQkFDdEIsS0FBSyxFQUFFLElBQUk7YUFDWixDQUFDO1lBQ0YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDO0lBM0JhLENBQUM7OEdBREwsWUFBWTtrSEFBWixZQUFZLGNBRlgsTUFBTTs7MkZBRVAsWUFBWTtrQkFIeEIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBFdmVudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgYWN0aXZlU2hvcnRjdXRzID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gIHNldEZvY3VzID0gKGNvbnRyb2wpID0+IHtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgY29udHJvbC5pbnN0YW5jZS5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBvbkhpZGRlblBvcFVwID0gKHVuaWNhbEd1aWQ/KSA9PiB7XG4gICAgbGV0IG9iamVjdCA9IHtcbiAgICAgIHVuaWNhbEd1aWQ6IHVuaWNhbEd1aWQsXG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgfTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlU2hvcnRjdXRzLm5leHQob2JqZWN0KTtcbiAgICAgIC8vIHRoaXMucmVtb3ZlS2V5Ym9hcmRFdmVudExpc3RlbmVycygpO1xuICAgIH0sIDUwMCk7XG4gIH07XG5cbiAgb25TaG93blBvcFVwID0gKHVuaWNhbEd1aWQ/KSA9PiB7XG4gICAgbGV0IG9iamVjdCA9IHtcbiAgICAgIHVuaWNhbEd1aWQ6IHVuaWNhbEd1aWQsXG4gICAgICB2YWx1ZTogdHJ1ZSxcbiAgICB9O1xuICAgIHRoaXMuYWN0aXZlU2hvcnRjdXRzLm5leHQob2JqZWN0KTtcbiAgfTtcbn1cbiJdfQ==