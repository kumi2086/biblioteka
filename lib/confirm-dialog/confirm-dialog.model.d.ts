export interface CheckBoxType {
    text: string;
    modelName: string;
    value: boolean;
    readOnly: boolean;
    disabled?: boolean;
}
export interface RadioBoxType {
    text: string;
    modelName: any;
    items: {
        value: number | string;
        label: string;
    }[];
    value: number | string;
    readOnly: boolean;
    layout: 'vertical' | 'horizontal';
    disabled?: boolean;
}
export type ConfirmButtonConfig = 'close' | 'saveCancel' | 'yesno' | 'yesnocancel' | 'continuegiveup' | 'substitutes' | 'groupedReport' | 'dynamicContent';
export type KindDialog = 'warning' | 'information' | 'question' | 'error';
export interface GroupMessage {
    textInfo: string;
    list: any[];
    checkBoxList?: any;
    radioBoxList?: any;
    questionMsg?: any;
}
export interface ConfirmDialogConfig {
    variant?: string;
    isVisible?: boolean;
    header?: string;
    text?: string;
    type?: KindDialog;
    btnConfig?: ConfirmButtonConfig;
    dynamicBtns?: DynamicButton[];
    title?: string;
    radioBoxList?: RadioBoxType[];
}
export interface DynamicButton {
    type: string;
    text: string;
    action: string;
}
export interface GeniusSummaryGroup {
    items: GeniusSummaryItem[];
}
export interface GeniusSummaryItem {
    description: string;
    value: number | string;
    highlighted?: boolean;
}
