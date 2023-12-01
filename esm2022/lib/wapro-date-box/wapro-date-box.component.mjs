import { Component } from '@angular/core';
import { DxDateBoxModule } from 'devextreme-angular/ui/date-box';
import { forwardRef, Output, ViewEncapsulation, ViewChild, EventEmitter, ChangeDetectionStrategy, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { locale, loadMessages } from 'devextreme/localization';
import enMessages from '../../assets/devextreme/localization/messages/en.json';
import plMessages from '../../assets/devextreme/localization/messages/pl.json';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "devextreme-angular/ui/date-box";
import * as i3 from "devextreme-angular/ui/nested";
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => WaproDateBoxComponent),
    multi: true,
};
export class WaproDateBoxComponent {
    get myValue() {
        return this._value;
    }
    set myValue(v) {
        if (v !== this._value) {
            this._value = v;
            try {
                this.onChange(v);
            }
            catch { }
        }
    }
    constructor(cd) {
        this.cd = cd;
        this.onValueChanged = new EventEmitter();
        this.focusedOut = new EventEmitter();
        this.focusedIn = new EventEmitter();
        this.locale = 'pl';
        this.noMaxWidth = false;
        this.width = null;
        this.displayFormat = 'yyyy-MM-dd';
        this.readOnly = false;
        this.type = 'date';
        this.disabled = false;
        this.errorClass = false;
        this.isHover = false;
        this.isFocus = false;
        this.plusBtn = {
            icon: 'icon absui-icon--add',
            stylingMode: 'text',
            onClick: () => {
                this.addDay();
            },
        };
        this.minusBtn = {
            icon: 'icon absui-icon--remove',
            stylingMode: 'text',
            onClick: () => {
                this.subtractDay();
            },
        };
        this.opened = false;
        this.notOpen = false;
        this.calendarBtn = {
            icon: 'icon absui-icon--calendar-month-unselect',
            stylingMode: 'text',
            tabIndex: -1,
            onClick: () => {
                this.opened = !this.opened;
                this.cd.detectChanges();
                if (this.opened)
                    this.dateBox.instance.focus();
            },
        };
        this.changeByUser = false;
        this.addDay = () => {
            if (this.myValue == null ||
                this.myValue == undefined ||
                this.myValue == '') {
                this.myValue = new DatePipe('en-US').transform(new Date(), 'yyyy-MM-ddTHH:mm:ss');
            }
            let newDate = new DatePipe('en-US').transform(new Date(this.myValue).getTime() + 1 * 1000 * 60 * 60 * 24, 'yyyy-MM-ddTHH:mm:ss');
            this.changeByUser = true;
            this.myValue = newDate;
            this.cd.detectChanges();
        };
        this.openBox = () => {
            if (!this.notOpen) {
                this.opened = !this.opened;
            }
        };
        this.onOpened = () => {
            this.notOpen = true;
        };
        this.onClosed = () => {
            setTimeout(() => {
                this.notOpen = false;
            }, 500);
        };
        this.onValueChangedDate = (e) => {
            if (this.type != 'datetime') {
                this.opened = false;
                this.cd.detectChanges();
            }
            const event = { ...e };
            if (!event.event) {
                event.event = {};
            }
            this.onValueChanged.emit(event);
            this.changeByUser = false;
        };
        this.onBlur = (e) => {
            e.element.classList.remove('dx-state-focused');
        };
        this.subtractDay = () => {
            if (this.myValue == null ||
                this.myValue == undefined ||
                this.myValue == '') {
                this.myValue = new DatePipe('en-US').transform(new Date(), 'yyyy-MM-ddTHH:mm:ss');
            }
            let newDate = new DatePipe('en-US').transform(new Date(this.myValue).getTime() - 1 * 1000 * 60 * 60 * 24, 'yyyy-MM-ddTHH:mm:ss');
            this.changeByUser = true;
            this.myValue = newDate;
            this.cd.detectChanges();
        };
        this.keydown = (e) => {
            if (!this.readOnly) {
                const originalEvent = e.event.originalEvent;
                if (originalEvent.code == 'ArrowDown' && originalEvent.shiftKey)
                    this.subtractDay();
                if (originalEvent.code == 'ArrowUp' && originalEvent.shiftKey)
                    this.addDay();
                this.cd.detectChanges();
            }
        };
        this.mouseover = () => {
            this.isHover = true;
        };
        this.mouseout = () => {
            this.isHover = false;
        };
        this.onFocusIn = () => {
            this.isFocus = true;
            this.focusedIn.emit(true);
        };
        this.onFocusOut = () => {
            this.isFocus = false;
            this.focusedOut.emit(true);
        };
        this.onChange = (_) => { };
        this.onTouched = () => { };
        if (!this.displayFormat)
            this.displayFormat = 'yyyy-MM-dd';
        if (!this.type)
            this.type = 'date';
        if (!this.disabled)
            this.disabled = false;
        this.calendarOptions = {
            onContentReady: (e) => {
                setTimeout(function () {
                    e.component.option('inputAttr', { readonly: true });
                }, 500);
                let todayBtn = this.dateBox.element.nativeElement.getElementsByClassName('dx-button-today')[0];
                if (this.type != 'datetime') {
                    let buttonDone = document.getElementsByClassName('dx-widget dx-button dx-button-mode-contained dx-button-normal dx-button-has-text dx-popup-done');
                    let buttonCancel = document.getElementsByClassName('dx-widget dx-button dx-button-mode-contained dx-button-normal dx-button-has-text dx-popup-cancel');
                    for (let i = 0; i < buttonDone.length; i++) {
                        buttonDone[i].classList.add('disabledBtn');
                    }
                    for (let i = 0; i < buttonCancel.length; i++) {
                        buttonCancel[i].classList.add('disabledBtn');
                    }
                    e.element.onclick = () => {
                        let newDate = new DatePipe('en-US').transform(e.component.option('value'), 'yyyy-MM-ddTHH:mm:ss');
                        this.changeByUser = true;
                        this.myValue = newDate;
                        this.cd.detectChanges();
                    };
                }
                todayBtn.onclick = () => {
                    let newDate = new DatePipe('en-US').transform(new Date(), 'yyyy-MM-ddTHH:mm:ss');
                    this.changeByUser = true;
                    this.myValue = newDate;
                    this.opened = false;
                    this.cd.detectChanges();
                };
            },
        };
    }
    ngOnInit() {
        this.initMessages();
        this.locale = this.getLocale();
        locale(this.locale);
    }
    initMessages() {
        loadMessages(plMessages);
        loadMessages(enMessages);
    }
    getLocale() {
        var locale;
        if (typeof window !== 'undefined') {
            locale = window.localStorage.getItem('lang');
            return locale != null ? locale : 'pl';
        }
    }
    writeValue(value) {
        this.myValue = value;
        this.cd.detectChanges();
    }
    registerOnChange(fn) {
        this.onChange = fn;
        this.cd.detectChanges();
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
        this.cd.detectChanges();
    }
    setDisabledState(_isDisabled) {
        //throw new Error('Method not implemented.');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: WaproDateBoxComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.5", type: WaproDateBoxComponent, isStandalone: true, selector: "wapro-date-box", inputs: { displayFormat: "displayFormat", readOnly: "readOnly", type: "type", disabled: "disabled", errorClass: "errorClass", width: "width", noMaxWidth: "noMaxWidth" }, outputs: { onValueChanged: "onValueChanged", focusedOut: "focusedOut", focusedIn: "focusedIn" }, providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR], viewQueries: [{ propertyName: "dateBox", first: true, predicate: ["dateBox"], descendants: true }], ngImport: i0, template: "<dx-date-box\r\n  [(value)]=\"myValue\"\r\n  [type]=\"type\"\r\n  [displayFormat]=\"displayFormat\"\r\n  [width]=\"width || 276\"\r\n  class=\"wapro-date-box\"\r\n  [readOnly]=\"readOnly\"\r\n  [disabled]=\"disabled\"\r\n  (mouseover)=\"mouseover()\"\r\n  (mouseout)=\"mouseout()\"\r\n  (onFocusIn)=\"onFocusIn()\"\r\n  (onFocusOut)=\"onFocusOut()\"\r\n  (onValueChanged)=\"onValueChangedDate($event)\"\r\n  (onEnterKey)=\"openBox()\"\r\n  (onOpened)=\"onOpened()\"\r\n  (onClosed)=\"onClosed()\"\r\n  [(opened)]=\"opened\"\r\n  [ngClass]=\"{\r\n    'input-required': errorClass,\r\n    'date-hover': isHover,\r\n    'no-max-width': noMaxWidth\r\n  }\"\r\n  #dateBox\r\n  (onKeyDown)=\"keydown($event)\"\r\n  (onBlur)=\"onBlur($event)\"\r\n  applyValueMode=\"useButtons\"\r\n  valueChangeEvent=\"change\"\r\n  [calendarOptions]=\"calendarOptions\"\r\n>\r\n  <dxi-button\r\n    name=\"calendar\"\r\n    location=\"before\"\r\n    [options]=\"calendarBtn\"\r\n  ></dxi-button>\r\n  <dxi-button\r\n    name=\"minus\"\r\n    location=\"after\"\r\n    cssClass=\"myClass\"\r\n    [options]=\"minusBtn\"\r\n    class=\"wapro-btn-date\"\r\n    *ngIf=\"type != 'time'\"\r\n  ></dxi-button>\r\n  <dxi-button\r\n    name=\"plus\"\r\n    location=\"after\"\r\n    [options]=\"plusBtn\"\r\n    style=\"border-radius: 6px; height: 21px\"\r\n    *ngIf=\"type != 'time'\"\r\n  ></dxi-button>\r\n</dx-date-box>\r\n", styles: [".btn-box{width:49px;height:28px;padding-top:1.5px;padding-bottom:1.5px;box-sizing:border-box;border:1px solid #b3b3b3;border-left:none;border-radius:0 6px 6px 0;display:inline-block}.dx-calendar-cell.dx-calendar-contoured-date span{box-shadow:0 0 0 2px #bc1a22}.dx-calendar-cell.dx-state-hover span{background-color:#ededed;color:#000}.dx-calendar-cell.dx-calendar-selected-date span{color:#fff;background-color:#bc1a22}.dx-calendar-cell.dx-calendar-today span{border:2px solid #bc1a22}.dx-calendar-cell.dx-calendar-selected-date,.dx-calendar-cell.dx-calendar-selected-date.dx-calendar-today{color:#fff;box-shadow:inset 0 0 0 1000px transparent!important;font-weight:400}.date-hover{border:1px solid #4c4c4c!important}.btn-box-hover{width:49px;height:28px;padding-top:1.5px;padding-bottom:1.5px;box-sizing:border-box;border:1px solid #4c4c4c;border-left:none;border-radius:0 6px 6px 0;display:inline-block}.on-focus{box-shadow:0 0 8px #58636a4d;border-radius:4px}.seperator{width:1px;height:20px;background:#e5e5e5;position:absolute;margin-top:1.5px}.dx-popup-content .title-pop-up .seperator{margin-top:4px!important}.plus-btn{box-sizing:border-box;padding:3px;height:21px;position:relative;width:22px;top:1px;cursor:pointer;float:left;margin-left:2px}.plus-btn:hover{background:#ededed;border-radius:4px}.minus-btn{box-sizing:border-box;padding:3px;height:21px;position:relative;width:22px;top:1px;cursor:pointer;float:left}.minus-btn:hover{background:#ededed;border-radius:4px}.absui-icon--calendar-month-unselect:before{content:\"\\eb0d\";font-size:16px;line-height:16px;color:#4c4c4c;position:absolute;top:5px;left:4px}.absui-icon--add:before{content:\"\\e145\";font-size:16px;line-height:16px;color:#4c4c4c;position:absolute;top:5px;right:5px}.absui-icon--remove:before{content:\"\\e15b\";font-size:16px;line-height:16px;color:#4c4c4c;position:absolute;top:5px;right:26px}.wapro-date-box{display:inline-block;position:relative;padding-left:2px}.wapro-date-box.dx-widget input,.dx-widget textarea{font-family:Roboto;padding-top:9px;padding-left:2px;font-size:.75rem;line-height:16px;color:#4c4c4c}.wapro-date-box .dx-texteditor-buttons-container>.dx-button.dx-button-has-icon:not(.dx-button-has-text)>.dx-button-content{padding:6px;height:20px;width:18px}.dx-button-mode-text.dx-state-hover,.dx-button-mode-text.dx-state-focused{background-color:#ededed;border-radius:4px}.dx-button-content{margin-left:1px}.no-max-width{max-width:none!important}.disabledBtn{display:none!important}:host ::ng-deep .dx-texteditor-buttons-container>.dx-button{margin:1px 3.5px 1px 1px;border-radius:6px;height:21px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: DxDateBoxModule }, { kind: "component", type: i2.DxDateBoxComponent, selector: "dx-date-box", inputs: ["acceptCustomValue", "accessKey", "activeStateEnabled", "adaptivityEnabled", "applyButtonText", "applyValueMode", "buttons", "calendarOptions", "cancelButtonText", "dateOutOfRangeMessage", "dateSerializationFormat", "deferRendering", "disabled", "disabledDates", "displayFormat", "dropDownButtonTemplate", "dropDownOptions", "elementAttr", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "inputAttr", "interval", "invalidDateMessage", "isValid", "label", "labelMode", "max", "maxLength", "min", "name", "opened", "openOnFieldClick", "pickerType", "placeholder", "readOnly", "rtlEnabled", "showAnalogClock", "showClearButton", "showDropDownButton", "spellcheck", "stylingMode", "tabIndex", "text", "todayButtonText", "type", "useMaskBehavior", "validationError", "validationErrors", "validationMessageMode", "validationMessagePosition", "validationStatus", "value", "valueChangeEvent", "visible", "width"], outputs: ["onChange", "onClosed", "onContentReady", "onCopy", "onCut", "onDisposing", "onEnterKey", "onFocusIn", "onFocusOut", "onInitialized", "onInput", "onKeyDown", "onKeyUp", "onOpened", "onOptionChanged", "onPaste", "onValueChanged", "acceptCustomValueChange", "accessKeyChange", "activeStateEnabledChange", "adaptivityEnabledChange", "applyButtonTextChange", "applyValueModeChange", "buttonsChange", "calendarOptionsChange", "cancelButtonTextChange", "dateOutOfRangeMessageChange", "dateSerializationFormatChange", "deferRenderingChange", "disabledChange", "disabledDatesChange", "displayFormatChange", "dropDownButtonTemplateChange", "dropDownOptionsChange", "elementAttrChange", "focusStateEnabledChange", "heightChange", "hintChange", "hoverStateEnabledChange", "inputAttrChange", "intervalChange", "invalidDateMessageChange", "isValidChange", "labelChange", "labelModeChange", "maxChange", "maxLengthChange", "minChange", "nameChange", "openedChange", "openOnFieldClickChange", "pickerTypeChange", "placeholderChange", "readOnlyChange", "rtlEnabledChange", "showAnalogClockChange", "showClearButtonChange", "showDropDownButtonChange", "spellcheckChange", "stylingModeChange", "tabIndexChange", "textChange", "todayButtonTextChange", "typeChange", "useMaskBehaviorChange", "validationErrorChange", "validationErrorsChange", "validationMessageModeChange", "validationMessagePositionChange", "validationStatusChange", "valueChange", "valueChangeEventChange", "visibleChange", "widthChange", "onBlur"] }, { kind: "component", type: i3.DxiButtonComponent, selector: "dxi-button", inputs: ["location", "name", "options", "cssClass", "disabled", "hint", "icon", "onClick", "template", "text", "visible"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: WaproDateBoxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'wapro-date-box', inputs: [
                        'displayFormat',
                        'readOnly',
                        'type',
                        'disabled',
                        'errorClass',
                        'width',
                        'noMaxWidth',
                    ], standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR], imports: [CommonModule, DxDateBoxModule], template: "<dx-date-box\r\n  [(value)]=\"myValue\"\r\n  [type]=\"type\"\r\n  [displayFormat]=\"displayFormat\"\r\n  [width]=\"width || 276\"\r\n  class=\"wapro-date-box\"\r\n  [readOnly]=\"readOnly\"\r\n  [disabled]=\"disabled\"\r\n  (mouseover)=\"mouseover()\"\r\n  (mouseout)=\"mouseout()\"\r\n  (onFocusIn)=\"onFocusIn()\"\r\n  (onFocusOut)=\"onFocusOut()\"\r\n  (onValueChanged)=\"onValueChangedDate($event)\"\r\n  (onEnterKey)=\"openBox()\"\r\n  (onOpened)=\"onOpened()\"\r\n  (onClosed)=\"onClosed()\"\r\n  [(opened)]=\"opened\"\r\n  [ngClass]=\"{\r\n    'input-required': errorClass,\r\n    'date-hover': isHover,\r\n    'no-max-width': noMaxWidth\r\n  }\"\r\n  #dateBox\r\n  (onKeyDown)=\"keydown($event)\"\r\n  (onBlur)=\"onBlur($event)\"\r\n  applyValueMode=\"useButtons\"\r\n  valueChangeEvent=\"change\"\r\n  [calendarOptions]=\"calendarOptions\"\r\n>\r\n  <dxi-button\r\n    name=\"calendar\"\r\n    location=\"before\"\r\n    [options]=\"calendarBtn\"\r\n  ></dxi-button>\r\n  <dxi-button\r\n    name=\"minus\"\r\n    location=\"after\"\r\n    cssClass=\"myClass\"\r\n    [options]=\"minusBtn\"\r\n    class=\"wapro-btn-date\"\r\n    *ngIf=\"type != 'time'\"\r\n  ></dxi-button>\r\n  <dxi-button\r\n    name=\"plus\"\r\n    location=\"after\"\r\n    [options]=\"plusBtn\"\r\n    style=\"border-radius: 6px; height: 21px\"\r\n    *ngIf=\"type != 'time'\"\r\n  ></dxi-button>\r\n</dx-date-box>\r\n", styles: [".btn-box{width:49px;height:28px;padding-top:1.5px;padding-bottom:1.5px;box-sizing:border-box;border:1px solid #b3b3b3;border-left:none;border-radius:0 6px 6px 0;display:inline-block}.dx-calendar-cell.dx-calendar-contoured-date span{box-shadow:0 0 0 2px #bc1a22}.dx-calendar-cell.dx-state-hover span{background-color:#ededed;color:#000}.dx-calendar-cell.dx-calendar-selected-date span{color:#fff;background-color:#bc1a22}.dx-calendar-cell.dx-calendar-today span{border:2px solid #bc1a22}.dx-calendar-cell.dx-calendar-selected-date,.dx-calendar-cell.dx-calendar-selected-date.dx-calendar-today{color:#fff;box-shadow:inset 0 0 0 1000px transparent!important;font-weight:400}.date-hover{border:1px solid #4c4c4c!important}.btn-box-hover{width:49px;height:28px;padding-top:1.5px;padding-bottom:1.5px;box-sizing:border-box;border:1px solid #4c4c4c;border-left:none;border-radius:0 6px 6px 0;display:inline-block}.on-focus{box-shadow:0 0 8px #58636a4d;border-radius:4px}.seperator{width:1px;height:20px;background:#e5e5e5;position:absolute;margin-top:1.5px}.dx-popup-content .title-pop-up .seperator{margin-top:4px!important}.plus-btn{box-sizing:border-box;padding:3px;height:21px;position:relative;width:22px;top:1px;cursor:pointer;float:left;margin-left:2px}.plus-btn:hover{background:#ededed;border-radius:4px}.minus-btn{box-sizing:border-box;padding:3px;height:21px;position:relative;width:22px;top:1px;cursor:pointer;float:left}.minus-btn:hover{background:#ededed;border-radius:4px}.absui-icon--calendar-month-unselect:before{content:\"\\eb0d\";font-size:16px;line-height:16px;color:#4c4c4c;position:absolute;top:5px;left:4px}.absui-icon--add:before{content:\"\\e145\";font-size:16px;line-height:16px;color:#4c4c4c;position:absolute;top:5px;right:5px}.absui-icon--remove:before{content:\"\\e15b\";font-size:16px;line-height:16px;color:#4c4c4c;position:absolute;top:5px;right:26px}.wapro-date-box{display:inline-block;position:relative;padding-left:2px}.wapro-date-box.dx-widget input,.dx-widget textarea{font-family:Roboto;padding-top:9px;padding-left:2px;font-size:.75rem;line-height:16px;color:#4c4c4c}.wapro-date-box .dx-texteditor-buttons-container>.dx-button.dx-button-has-icon:not(.dx-button-has-text)>.dx-button-content{padding:6px;height:20px;width:18px}.dx-button-mode-text.dx-state-hover,.dx-button-mode-text.dx-state-focused{background-color:#ededed;border-radius:4px}.dx-button-content{margin-left:1px}.no-max-width{max-width:none!important}.disabledBtn{display:none!important}:host ::ng-deep .dx-texteditor-buttons-container>.dx-button{margin:1px 3.5px 1px 1px;border-radius:6px;height:21px}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { onValueChanged: [{
                type: Output
            }], dateBox: [{
                type: ViewChild,
                args: ['dateBox']
            }], focusedOut: [{
                type: Output
            }], focusedIn: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Fwcm8tZGF0ZS1ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktbGlicmFyeS9zcmMvbGliL3dhcHJvLWRhdGUtYm94L3dhcHJvLWRhdGUtYm94LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL215LWxpYnJhcnkvc3JjL2xpYi93YXByby1kYXRlLWJveC93YXByby1kYXRlLWJveC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVqRSxPQUFPLEVBQ0wsVUFBVSxFQUVWLE1BQU0sRUFDTixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFFWix1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFTekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWlCLE1BQU0seUJBQXlCLENBQUM7QUFDOUUsT0FBTyxVQUFVLE1BQU0sdURBQXVELENBQUM7QUFDL0UsT0FBTyxVQUFVLE1BQU0sdURBQXVELENBQUM7Ozs7O0FBUi9FLE1BQU0sQ0FBQyxNQUFNLG1DQUFtQyxHQUFRO0lBQ3RELE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztJQUNwRCxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUF5QkYsTUFBTSxPQUFPLHFCQUFxQjtJQStDaEMsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixD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QUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0QsaUJBQWlCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCxnQkFBZ0IsQ0FBRSxXQUFvQjtRQUNwQyw2Q0FBNkM7SUFDL0MsQ0FBQzs4R0E5UFUscUJBQXFCO2tHQUFyQixxQkFBcUIsd1VBSHJCLENBQUMsbUNBQW1DLENBQUMsOEhDNUNsRCx3M0NBa0RBLHFtRkRMWSxZQUFZLGdPQUFFLGVBQWU7OzJGQUU1QixxQkFBcUI7a0JBbkJqQyxTQUFTOytCQUNFLGdCQUFnQixVQUdsQjt3QkFDTixlQUFlO3dCQUNmLFVBQVU7d0JBQ1YsTUFBTTt3QkFDTixVQUFVO3dCQUNWLFlBQVk7d0JBQ1osT0FBTzt3QkFDUCxZQUFZO3FCQUNiLGNBQ1csSUFBSSxtQkFDQyx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLGFBQzFCLENBQUMsbUNBQW1DLENBQUMsV0FDdkMsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDO3NGQUc5QixjQUFjO3NCQUF2QixNQUFNO2dCQUNlLE9BQU87c0JBQTVCLFNBQVM7dUJBQUMsU0FBUztnQkFFVixVQUFVO3NCQUFuQixNQUFNO2dCQUNHLFNBQVM7c0JBQWxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IER4RGF0ZUJveE1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhci91aS9kYXRlLWJveCc7XG5cbmltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgVmlld0NoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgS2V5RG93bkV2ZW50LCBWYWx1ZUNoYW5nZWRFdmVudCB9IGZyb20gJ2RldmV4dHJlbWUvdWkvZGF0ZV9ib3gnO1xuXG5leHBvcnQgY29uc3QgQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFdhcHJvRGF0ZUJveENvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuaW1wb3J0IHsgbG9jYWxlLCBsb2FkTWVzc2FnZXMsIGZvcm1hdE1lc3NhZ2UgfSBmcm9tICdkZXZleHRyZW1lL2xvY2FsaXphdGlvbic7XG5pbXBvcnQgZW5NZXNzYWdlcyBmcm9tICcuLi8uLi9hc3NldHMvZGV2ZXh0cmVtZS9sb2NhbGl6YXRpb24vbWVzc2FnZXMvZW4uanNvbic7XG5pbXBvcnQgcGxNZXNzYWdlcyBmcm9tICcuLi8uLi9hc3NldHMvZGV2ZXh0cmVtZS9sb2NhbGl6YXRpb24vbWVzc2FnZXMvcGwuanNvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dhcHJvLWRhdGUtYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dhcHJvLWRhdGUtYm94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vd2Fwcm8tZGF0ZS1ib3guY29tcG9uZW50LnNjc3MnXSxcbiAgaW5wdXRzOiBbXG4gICAgJ2Rpc3BsYXlGb3JtYXQnLFxuICAgICdyZWFkT25seScsXG4gICAgJ3R5cGUnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Vycm9yQ2xhc3MnLFxuICAgICd3aWR0aCcsXG4gICAgJ25vTWF4V2lkdGgnLFxuICBdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEeERhdGVCb3hNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBXYXByb0RhdGVCb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQE91dHB1dCgpIG9uVmFsdWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAVmlld0NoaWxkKCdkYXRlQm94JykgZGF0ZUJveDtcblxuICBAT3V0cHV0KCkgZm9jdXNlZE91dCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGZvY3VzZWRJbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgbG9jYWxlOiBzdHJpbmcgPSAncGwnO1xuICBub01heFdpZHRoOiBib29sZWFuID0gZmFsc2U7XG4gIHdpZHRoOiBudW1iZXIgfCBzdHJpbmcgfCBhbnkgPSBudWxsO1xuICBwcml2YXRlIF92YWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgRGF0ZSB8IGFueTtcbiAgZGlzcGxheUZvcm1hdDogc3RyaW5nID0gJ3l5eXktTU0tZGQnO1xuICByZWFkT25seSA9IGZhbHNlO1xuICB0eXBlOiAnZGF0ZScgfCAnZGF0ZXRpbWUnIHwgJ3RpbWUnID0gJ2RhdGUnO1xuICBkaXNhYmxlZCA9IGZhbHNlO1xuICBlcnJvckNsYXNzID0gZmFsc2U7XG5cbiAgaXNIb3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBpc0ZvY3VzOiBib29sZWFuID0gZmFsc2U7XG4gIHBsdXNCdG4gPSB7XG4gICAgaWNvbjogJ2ljb24gYWJzdWktaWNvbi0tYWRkJyxcbiAgICBzdHlsaW5nTW9kZTogJ3RleHQnLFxuICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgIHRoaXMuYWRkRGF5KCk7XG4gICAgfSxcbiAgfTtcbiAgbWludXNCdG4gPSB7XG4gICAgaWNvbjogJ2ljb24gYWJzdWktaWNvbi0tcmVtb3ZlJyxcbiAgICBzdHlsaW5nTW9kZTogJ3RleHQnLFxuICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgIHRoaXMuc3VidHJhY3REYXkoKTtcbiAgICB9LFxuICB9O1xuICBvcGVuZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgbm90T3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBjYWxlbmRhckJ0biA9IHtcbiAgICBpY29uOiAnaWNvbiBhYnN1aS1pY29uLS1jYWxlbmRhci1tb250aC11bnNlbGVjdCcsXG4gICAgc3R5bGluZ01vZGU6ICd0ZXh0JyxcbiAgICB0YWJJbmRleDogLTEsXG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgdGhpcy5vcGVuZWQgPSAhdGhpcy5vcGVuZWQ7XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIGlmICh0aGlzLm9wZW5lZCkgdGhpcy5kYXRlQm94Lmluc3RhbmNlLmZvY3VzKCk7XG4gICAgfSxcbiAgfTtcbiAgY2FsZW5kYXJPcHRpb25zOiBhbnk7XG4gIGNoYW5nZUJ5VXNlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyBnZXQgbXlWYWx1ZSgpOiBzdHJpbmcgfCBudW1iZXIgfCBEYXRlIHwgYW55IHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgcHVibGljIHNldCBteVZhbHVlKHY6IHN0cmluZyB8IG51bWJlciB8IERhdGUgfCBhbnkpIHtcbiAgICBpZiAodiAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2Uodik7XG4gICAgICB9IGNhdGNoIHt9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIGlmICghdGhpcy5kaXNwbGF5Rm9ybWF0KSB0aGlzLmRpc3BsYXlGb3JtYXQgPSAneXl5eS1NTS1kZCc7XG4gICAgaWYgKCF0aGlzLnR5cGUpIHRoaXMudHlwZSA9ICdkYXRlJztcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuY2FsZW5kYXJPcHRpb25zID0ge1xuICAgICAgb25Db250ZW50UmVhZHk6IChlKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGUuY29tcG9uZW50Lm9wdGlvbignaW5wdXRBdHRyJywgeyByZWFkb25seTogdHJ1ZSB9KTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgbGV0IHRvZGF5QnRuID1cbiAgICAgICAgICB0aGlzLmRhdGVCb3guZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAgICAgICAnZHgtYnV0dG9uLXRvZGF5J1xuICAgICAgICAgIClbMF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGlmICh0aGlzLnR5cGUgIT0gJ2RhdGV0aW1lJykge1xuICAgICAgICAgIGxldCBidXR0b25Eb25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgICAgICdkeC13aWRnZXQgZHgtYnV0dG9uIGR4LWJ1dHRvbi1tb2RlLWNvbnRhaW5lZCBkeC1idXR0b24tbm9ybWFsIGR4LWJ1dHRvbi1oYXMtdGV4dCBkeC1wb3B1cC1kb25lJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgbGV0IGJ1dHRvbkNhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAgICAgICAnZHgtd2lkZ2V0IGR4LWJ1dHRvbiBkeC1idXR0b24tbW9kZS1jb250YWluZWQgZHgtYnV0dG9uLW5vcm1hbCBkeC1idXR0b24taGFzLXRleHQgZHgtcG9wdXAtY2FuY2VsJ1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbkRvbmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJ1dHRvbkRvbmVbaV0uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWRCdG4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbkNhbmNlbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYnV0dG9uQ2FuY2VsW2ldLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkQnRuJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZS5lbGVtZW50Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlUGlwZSgnZW4tVVMnKS50cmFuc2Zvcm0oXG4gICAgICAgICAgICAgIGUuY29tcG9uZW50Lm9wdGlvbigndmFsdWUnKSxcbiAgICAgICAgICAgICAgJ3l5eXktTU0tZGRUSEg6bW06c3MnXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VCeVVzZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5teVZhbHVlID0gbmV3RGF0ZTtcbiAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICB0b2RheUJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgIGxldCBuZXdEYXRlID0gbmV3IERhdGVQaXBlKCdlbi1VUycpLnRyYW5zZm9ybShcbiAgICAgICAgICAgIG5ldyBEYXRlKCksXG4gICAgICAgICAgICAneXl5eS1NTS1kZFRISDptbTpzcydcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuY2hhbmdlQnlVc2VyID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLm15VmFsdWUgPSBuZXdEYXRlO1xuICAgICAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH07XG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRNZXNzYWdlcygpO1xuICAgIHRoaXMubG9jYWxlID0gdGhpcy5nZXRMb2NhbGUoKTtcbiAgICBsb2NhbGUodGhpcy5sb2NhbGUpO1xuICB9XG5cbiAgaW5pdE1lc3NhZ2VzKCkge1xuICAgIGxvYWRNZXNzYWdlcyhwbE1lc3NhZ2VzKTtcbiAgICBsb2FkTWVzc2FnZXMoZW5NZXNzYWdlcyk7XG4gIH1cblxuICBnZXRMb2NhbGUoKSB7XG4gICAgdmFyIGxvY2FsZTtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGxvY2FsZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZycpO1xuICAgICAgcmV0dXJuIGxvY2FsZSAhPSBudWxsID8gbG9jYWxlIDogJ3BsJztcbiAgICB9XG4gIH1cblxuICBhZGREYXkgPSAoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5teVZhbHVlID09IG51bGwgfHxcbiAgICAgIHRoaXMubXlWYWx1ZSA9PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMubXlWYWx1ZSA9PSAnJ1xuICAgICkge1xuICAgICAgdGhpcy5teVZhbHVlID0gbmV3IERhdGVQaXBlKCdlbi1VUycpLnRyYW5zZm9ybShcbiAgICAgICAgbmV3IERhdGUoKSxcbiAgICAgICAgJ3l5eXktTU0tZGRUSEg6bW06c3MnXG4gICAgICApO1xuICAgIH1cblxuICAgIGxldCBuZXdEYXRlID0gbmV3IERhdGVQaXBlKCdlbi1VUycpLnRyYW5zZm9ybShcbiAgICAgIG5ldyBEYXRlKHRoaXMubXlWYWx1ZSkuZ2V0VGltZSgpICsgMSAqIDEwMDAgKiA2MCAqIDYwICogMjQsXG4gICAgICAneXl5eS1NTS1kZFRISDptbTpzcydcbiAgICApO1xuICAgIHRoaXMuY2hhbmdlQnlVc2VyID0gdHJ1ZTtcbiAgICB0aGlzLm15VmFsdWUgPSBuZXdEYXRlO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9O1xuXG4gIG9wZW5Cb3ggPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLm5vdE9wZW4pIHtcbiAgICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1xuICAgIH1cbiAgfTtcblxuICBvbk9wZW5lZCA9ICgpID0+IHtcbiAgICB0aGlzLm5vdE9wZW4gPSB0cnVlO1xuICB9O1xuXG4gIG9uQ2xvc2VkID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5ub3RPcGVuID0gZmFsc2U7XG4gICAgfSwgNTAwKTtcbiAgfTtcblxuICBvblZhbHVlQ2hhbmdlZERhdGUgPSAoZTogVmFsdWVDaGFuZ2VkRXZlbnQpID0+IHtcbiAgICBpZiAodGhpcy50eXBlICE9ICdkYXRldGltZScpIHtcbiAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gICAgY29uc3QgZXZlbnQgPSB7IC4uLmUgfTtcbiAgICBpZiAoIWV2ZW50LmV2ZW50KSB7XG4gICAgICBldmVudC5ldmVudCA9IHt9IGFzIGFueTtcbiAgICB9XG4gICAgdGhpcy5vblZhbHVlQ2hhbmdlZC5lbWl0KGV2ZW50KTtcbiAgICB0aGlzLmNoYW5nZUJ5VXNlciA9IGZhbHNlO1xuICB9O1xuXG4gIG9uQmx1ciA9IChlKSA9PiB7XG4gICAgZS5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2R4LXN0YXRlLWZvY3VzZWQnKTtcbiAgfTtcblxuICBzdWJ0cmFjdERheSA9ICgpID0+IHtcbiAgICBpZiAoXG4gICAgICB0aGlzLm15VmFsdWUgPT0gbnVsbCB8fFxuICAgICAgdGhpcy5teVZhbHVlID09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5teVZhbHVlID09ICcnXG4gICAgKSB7XG4gICAgICB0aGlzLm15VmFsdWUgPSBuZXcgRGF0ZVBpcGUoJ2VuLVVTJykudHJhbnNmb3JtKFxuICAgICAgICBuZXcgRGF0ZSgpLFxuICAgICAgICAneXl5eS1NTS1kZFRISDptbTpzcydcbiAgICAgICk7XG4gICAgfVxuXG4gICAgbGV0IG5ld0RhdGUgPSBuZXcgRGF0ZVBpcGUoJ2VuLVVTJykudHJhbnNmb3JtKFxuICAgICAgbmV3IERhdGUodGhpcy5teVZhbHVlKS5nZXRUaW1lKCkgLSAxICogMTAwMCAqIDYwICogNjAgKiAyNCxcbiAgICAgICd5eXl5LU1NLWRkVEhIOm1tOnNzJ1xuICAgICk7XG4gICAgdGhpcy5jaGFuZ2VCeVVzZXIgPSB0cnVlO1xuICAgIHRoaXMubXlWYWx1ZSA9IG5ld0RhdGU7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH07XG5cbiAga2V5ZG93biA9IChlOiBLZXlEb3duRXZlbnQpID0+IHtcbiAgICBpZiAoIXRoaXMucmVhZE9ubHkpIHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsRXZlbnQgPSAoZS5ldmVudCBhcyBhbnkpLm9yaWdpbmFsRXZlbnQ7XG4gICAgICBpZiAob3JpZ2luYWxFdmVudC5jb2RlID09ICdBcnJvd0Rvd24nICYmIG9yaWdpbmFsRXZlbnQuc2hpZnRLZXkpXG4gICAgICAgIHRoaXMuc3VidHJhY3REYXkoKTtcbiAgICAgIGlmIChvcmlnaW5hbEV2ZW50LmNvZGUgPT0gJ0Fycm93VXAnICYmIG9yaWdpbmFsRXZlbnQuc2hpZnRLZXkpXG4gICAgICAgIHRoaXMuYWRkRGF5KCk7XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH07XG5cbiAgbW91c2VvdmVyID0gKCkgPT4ge1xuICAgIHRoaXMuaXNIb3ZlciA9IHRydWU7XG4gIH07XG5cbiAgbW91c2VvdXQgPSAoKSA9PiB7XG4gICAgdGhpcy5pc0hvdmVyID0gZmFsc2U7XG4gIH07XG5cbiAgb25Gb2N1c0luID0gKCkgPT4ge1xuICAgIHRoaXMuaXNGb2N1cyA9IHRydWU7XG4gICAgdGhpcy5mb2N1c2VkSW4uZW1pdCh0cnVlKTtcbiAgfTtcblxuICBvbkZvY3VzT3V0ID0gKCkgPT4ge1xuICAgIHRoaXMuaXNGb2N1cyA9IGZhbHNlO1xuICAgIHRoaXMuZm9jdXNlZE91dC5lbWl0KHRydWUpO1xuICB9O1xuXG4gIG9uQ2hhbmdlID0gKF8pID0+IHt9O1xuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm15VmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbiAgc2V0RGlzYWJsZWRTdGF0ZT8oX2lzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAvL3Rocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxufVxuIiwiPGR4LWRhdGUtYm94XHJcbiAgWyh2YWx1ZSldPVwibXlWYWx1ZVwiXHJcbiAgW3R5cGVdPVwidHlwZVwiXHJcbiAgW2Rpc3BsYXlGb3JtYXRdPVwiZGlzcGxheUZvcm1hdFwiXHJcbiAgW3dpZHRoXT1cIndpZHRoIHx8IDI3NlwiXHJcbiAgY2xhc3M9XCJ3YXByby1kYXRlLWJveFwiXHJcbiAgW3JlYWRPbmx5XT1cInJlYWRPbmx5XCJcclxuICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gIChtb3VzZW92ZXIpPVwibW91c2VvdmVyKClcIlxyXG4gIChtb3VzZW91dCk9XCJtb3VzZW91dCgpXCJcclxuICAob25Gb2N1c0luKT1cIm9uRm9jdXNJbigpXCJcclxuICAob25Gb2N1c091dCk9XCJvbkZvY3VzT3V0KClcIlxyXG4gIChvblZhbHVlQ2hhbmdlZCk9XCJvblZhbHVlQ2hhbmdlZERhdGUoJGV2ZW50KVwiXHJcbiAgKG9uRW50ZXJLZXkpPVwib3BlbkJveCgpXCJcclxuICAob25PcGVuZWQpPVwib25PcGVuZWQoKVwiXHJcbiAgKG9uQ2xvc2VkKT1cIm9uQ2xvc2VkKClcIlxyXG4gIFsob3BlbmVkKV09XCJvcGVuZWRcIlxyXG4gIFtuZ0NsYXNzXT1cIntcclxuICAgICdpbnB1dC1yZXF1aXJlZCc6IGVycm9yQ2xhc3MsXHJcbiAgICAnZGF0ZS1ob3Zlcic6IGlzSG92ZXIsXHJcbiAgICAnbm8tbWF4LXdpZHRoJzogbm9NYXhXaWR0aFxyXG4gIH1cIlxyXG4gICNkYXRlQm94XHJcbiAgKG9uS2V5RG93bik9XCJrZXlkb3duKCRldmVudClcIlxyXG4gIChvbkJsdXIpPVwib25CbHVyKCRldmVudClcIlxyXG4gIGFwcGx5VmFsdWVNb2RlPVwidXNlQnV0dG9uc1wiXHJcbiAgdmFsdWVDaGFuZ2VFdmVudD1cImNoYW5nZVwiXHJcbiAgW2NhbGVuZGFyT3B0aW9uc109XCJjYWxlbmRhck9wdGlvbnNcIlxyXG4+XHJcbiAgPGR4aS1idXR0b25cclxuICAgIG5hbWU9XCJjYWxlbmRhclwiXHJcbiAgICBsb2NhdGlvbj1cImJlZm9yZVwiXHJcbiAgICBbb3B0aW9uc109XCJjYWxlbmRhckJ0blwiXHJcbiAgPjwvZHhpLWJ1dHRvbj5cclxuICA8ZHhpLWJ1dHRvblxyXG4gICAgbmFtZT1cIm1pbnVzXCJcclxuICAgIGxvY2F0aW9uPVwiYWZ0ZXJcIlxyXG4gICAgY3NzQ2xhc3M9XCJteUNsYXNzXCJcclxuICAgIFtvcHRpb25zXT1cIm1pbnVzQnRuXCJcclxuICAgIGNsYXNzPVwid2Fwcm8tYnRuLWRhdGVcIlxyXG4gICAgKm5nSWY9XCJ0eXBlICE9ICd0aW1lJ1wiXHJcbiAgPjwvZHhpLWJ1dHRvbj5cclxuICA8ZHhpLWJ1dHRvblxyXG4gICAgbmFtZT1cInBsdXNcIlxyXG4gICAgbG9jYXRpb249XCJhZnRlclwiXHJcbiAgICBbb3B0aW9uc109XCJwbHVzQnRuXCJcclxuICAgIHN0eWxlPVwiYm9yZGVyLXJhZGl1czogNnB4OyBoZWlnaHQ6IDIxcHhcIlxyXG4gICAgKm5nSWY9XCJ0eXBlICE9ICd0aW1lJ1wiXHJcbiAgPjwvZHhpLWJ1dHRvbj5cclxuPC9keC1kYXRlLWJveD5cclxuIl19