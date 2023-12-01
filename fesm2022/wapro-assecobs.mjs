import * as i0 from '@angular/core';
import { Injectable, Component, forwardRef, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, Output, ViewChild, Pipe, ViewChildren, Input } from '@angular/core';
import * as i2$1 from 'devextreme-angular/ui/date-box';
import { DxDateBoxModule } from 'devextreme-angular/ui/date-box';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i2 from '@angular/common';
import { DatePipe, CommonModule } from '@angular/common';
import { locale, loadMessages } from 'devextreme/localization';
import * as i3 from 'devextreme-angular/ui/nested';
import * as i5 from 'ng-keyboard-shortcuts';
import { AllowIn, KeyboardShortcutsModule } from 'ng-keyboard-shortcuts';
import * as i6 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import * as i3$1 from 'devextreme-angular';
import { DxPopupModule, DxButtonModule, DxRadioGroupModule, DxCheckBoxModule } from 'devextreme-angular';
import { Subject } from 'rxjs';
import * as i4 from 'devextreme-angular/core';

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

var en = {
	Yes: "Yes",
	No: "No",
	Cancel: "Cancel",
	Clear: "Clear",
	Done: "Done",
	Loading: "Loading...",
	Select: "Select...",
	Search: "Search",
	Back: "Back",
	OK: "OK",
	"dxCollectionWidget-noDataText": "No data to display",
	"dxDropDownEditor-selectLabel": "Select",
	"validation-required": "Required",
	"validation-required-formatted": "{0} is required",
	"validation-numeric": "Value must be a number",
	"validation-numeric-formatted": "{0} must be a number",
	"validation-range": "Value is out of range",
	"validation-range-formatted": "{0} is out of range",
	"validation-stringLength": "The length of the value is not correct",
	"validation-stringLength-formatted": "The length of {0} is not correct",
	"validation-custom": "Value is invalid",
	"validation-custom-formatted": "{0} is invalid",
	"validation-async": "Value is invalid",
	"validation-async-formatted": "{0} is invalid",
	"validation-compare": "Values do not match",
	"validation-compare-formatted": "{0} does not match",
	"validation-pattern": "Value does not match pattern",
	"validation-pattern-formatted": "{0} does not match pattern",
	"validation-email": "Email is invalid",
	"validation-email-formatted": "{0} is invalid",
	"validation-mask": "Value is invalid",
	"dxLookup-searchPlaceholder": "Minimum character number: {0}",
	"dxList-pullingDownText": "Pull down to refresh...",
	"dxList-pulledDownText": "Release to refresh...",
	"dxList-refreshingText": "Refreshing...",
	"dxList-pageLoadingText": "Loading...",
	"dxList-nextButtonText": "More",
	"dxList-selectAll": "Select All",
	"dxListEditDecorator-delete": "Delete",
	"dxListEditDecorator-more": "More",
	"dxScrollView-pullingDownText": "Pull down to refresh...",
	"dxScrollView-pulledDownText": "Release to refresh...",
	"dxScrollView-refreshingText": "Refreshing...",
	"dxScrollView-reachBottomText": "Loading...",
	"dxDateBox-simulatedDataPickerTitleTime": "Select time",
	"dxDateBox-simulatedDataPickerTitleDate": "Select date",
	"dxDateBox-simulatedDataPickerTitleDateTime": "Select date and time",
	"dxDateBox-validation-datetime": "Value must be a date or time",
	"dxFileUploader-selectFile": "Select file",
	"dxFileUploader-dropFile": "or Drop file here",
	"dxFileUploader-bytes": "bytes",
	"dxFileUploader-kb": "kb",
	"dxFileUploader-Mb": "Mb",
	"dxFileUploader-Gb": "Gb",
	"dxFileUploader-upload": "Upload",
	"dxFileUploader-uploaded": "Uploaded",
	"dxFileUploader-readyToUpload": "Ready to upload",
	"dxFileUploader-uploadAbortedMessage": "Upload canceled",
	"dxFileUploader-uploadFailedMessage": "Upload failed",
	"dxFileUploader-invalidFileExtension": "File type is not allowed",
	"dxFileUploader-invalidMaxFileSize": "File is too large",
	"dxFileUploader-invalidMinFileSize": "File is too small",
	"dxRangeSlider-ariaFrom": "From",
	"dxRangeSlider-ariaTill": "Till",
	"dxSwitch-switchedOnText": "ON",
	"dxSwitch-switchedOffText": "OFF",
	"dxForm-optionalMark": "optional",
	"dxForm-requiredMessage": "{0} is required",
	"dxNumberBox-invalidValueMessage": "Value must be a number",
	"dxNumberBox-noDataText": "No data",
	"dxDataGrid-columnChooserTitle": "Column Chooser",
	"dxDataGrid-columnChooserEmptyText": "Drag a column here to hide it",
	"dxDataGrid-groupContinuesMessage": "Continues on the next page",
	"dxDataGrid-groupContinuedMessage": "Continued from the previous page",
	"dxDataGrid-groupHeaderText": "Group by This Column",
	"dxDataGrid-ungroupHeaderText": "Ungroup",
	"dxDataGrid-ungroupAllText": "Ungroup All",
	"dxDataGrid-editingEditRow": "Edit",
	"dxDataGrid-editingSaveRowChanges": "Save",
	"dxDataGrid-editingCancelRowChanges": "Cancel",
	"dxDataGrid-editingDeleteRow": "Delete",
	"dxDataGrid-editingUndeleteRow": "Undelete",
	"dxDataGrid-editingConfirmDeleteMessage": "Are you sure you want to delete this record?",
	"dxDataGrid-validationCancelChanges": "Cancel changes",
	"dxDataGrid-groupPanelEmptyText": "Drag a column header here to group by that column",
	"dxDataGrid-noDataText": "No data",
	"dxDataGrid-searchPanelPlaceholder": "Search...",
	"dxDataGrid-filterRowShowAllText": "(All)",
	"dxDataGrid-filterRowResetOperationText": "Reset",
	"dxDataGrid-filterRowOperationEquals": "Equals",
	"dxDataGrid-filterRowOperationNotEquals": "Does not equal",
	"dxDataGrid-filterRowOperationLess": "Less than",
	"dxDataGrid-filterRowOperationLessOrEquals": "Less than or equal to",
	"dxDataGrid-filterRowOperationGreater": "Greater than",
	"dxDataGrid-filterRowOperationGreaterOrEquals": "Greater than or equal to",
	"dxDataGrid-filterRowOperationStartsWith": "Starts with",
	"dxDataGrid-filterRowOperationContains": "Contains",
	"dxDataGrid-filterRowOperationNotContains": "Does not contain",
	"dxDataGrid-filterRowOperationEndsWith": "Ends with",
	"dxDataGrid-filterRowOperationBetween": "Between",
	"dxDataGrid-filterRowOperationBetweenStartText": "Start",
	"dxDataGrid-filterRowOperationBetweenEndText": "End",
	"dxDataGrid-applyFilterText": "Apply filter",
	"dxDataGrid-trueText": "true",
	"dxDataGrid-falseText": "false",
	"dxDataGrid-sortingAscendingText": "Sort Ascending",
	"dxDataGrid-sortingDescendingText": "Sort Descending",
	"dxDataGrid-sortingClearText": "Clear Sorting",
	"dxDataGrid-editingSaveAllChanges": "Save changes",
	"dxDataGrid-editingCancelAllChanges": "Discard changes",
	"dxDataGrid-editingAddRow": "Add a row",
	"dxDataGrid-summaryMin": "Min: {0}",
	"dxDataGrid-summaryMinOtherColumn": "Min of {1} is {0}",
	"dxDataGrid-summaryMax": "Max: {0}",
	"dxDataGrid-summaryMaxOtherColumn": "Max of {1} is {0}",
	"dxDataGrid-summaryAvg": "Avg: {0}",
	"dxDataGrid-summaryAvgOtherColumn": "Avg of {1} is {0}",
	"dxDataGrid-summarySum": "Sum: {0}",
	"dxDataGrid-summarySumOtherColumn": "Sum of {1} is {0}",
	"dxDataGrid-summaryCount": "Count: {0}",
	"dxDataGrid-columnFixingFix": "Fix",
	"dxDataGrid-columnFixingUnfix": "Unfix",
	"dxDataGrid-columnFixingLeftPosition": "To the left",
	"dxDataGrid-columnFixingRightPosition": "To the right",
	"dxDataGrid-exportTo": "Export",
	"dxDataGrid-exportToExcel": "Export to Excel file",
	"dxDataGrid-exporting": "Exporting...",
	"dxDataGrid-excelFormat": "Excel file",
	"dxDataGrid-selectedRows": "Selected rows",
	"dxDataGrid-exportSelectedRows": "Export selected rows",
	"dxDataGrid-exportAll": "Export all data",
	"dxDataGrid-headerFilterEmptyValue": "(Blanks)",
	"dxDataGrid-headerFilterOK": "OK",
	"dxDataGrid-headerFilterCancel": "Cancel",
	"dxDataGrid-ariaColumn": "Column",
	"dxDataGrid-ariaValue": "Value",
	"dxDataGrid-ariaFilterCell": "Filter cell",
	"dxDataGrid-ariaCollapse": "Collapse",
	"dxDataGrid-ariaExpand": "Expand",
	"dxDataGrid-ariaDataGrid": "Data grid",
	"dxDataGrid-ariaSearchInGrid": "Search in data grid",
	"dxDataGrid-ariaSelectAll": "Select all",
	"dxDataGrid-ariaSelectRow": "Select row",
	"dxDataGrid-filterBuilderPopupTitle": "Filter Builder",
	"dxDataGrid-filterPanelCreateFilter": "Create Filter",
	"dxDataGrid-filterPanelClearFilter": "Clear",
	"dxDataGrid-filterPanelFilterEnabledHint": "Enable the filter",
	"dxTreeList-ariaTreeList": "Tree list",
	"dxTreeList-editingAddRowToNode": "Add",
	"dxPager-infoText": "Page {0} of {1} ({2} items)",
	"dxPager-pagesCountText": "of",
	"dxPager-pageSizesAllText": "All",
	"dxPivotGrid-grandTotal": "Grand Total",
	"dxPivotGrid-total": "{0} Total",
	"dxPivotGrid-fieldChooserTitle": "Field Chooser",
	"dxPivotGrid-showFieldChooser": "Show Field Chooser",
	"dxPivotGrid-expandAll": "Expand All",
	"dxPivotGrid-collapseAll": "Collapse All",
	"dxPivotGrid-sortColumnBySummary": "Sort \"{0}\" by This Column",
	"dxPivotGrid-sortRowBySummary": "Sort \"{0}\" by This Row",
	"dxPivotGrid-removeAllSorting": "Remove All Sorting",
	"dxPivotGrid-dataNotAvailable": "N/A",
	"dxPivotGrid-rowFields": "Row Fields",
	"dxPivotGrid-columnFields": "Column Fields",
	"dxPivotGrid-dataFields": "Data Fields",
	"dxPivotGrid-filterFields": "Filter Fields",
	"dxPivotGrid-allFields": "All Fields",
	"dxPivotGrid-columnFieldArea": "Drop Column Fields Here",
	"dxPivotGrid-dataFieldArea": "Drop Data Fields Here",
	"dxPivotGrid-rowFieldArea": "Drop Row Fields Here",
	"dxPivotGrid-filterFieldArea": "Drop Filter Fields Here",
	"dxScheduler-editorLabelTitle": "Subject",
	"dxScheduler-editorLabelStartDate": "Start Date",
	"dxScheduler-editorLabelEndDate": "End Date",
	"dxScheduler-editorLabelDescription": "Description",
	"dxScheduler-editorLabelRecurrence": "Repeat",
	"dxScheduler-openAppointment": "Open appointment",
	"dxScheduler-recurrenceNever": "Never",
	"dxScheduler-recurrenceMinutely": "Every minute",
	"dxScheduler-recurrenceHourly": "Hourly",
	"dxScheduler-recurrenceDaily": "Daily",
	"dxScheduler-recurrenceWeekly": "Weekly",
	"dxScheduler-recurrenceMonthly": "Monthly",
	"dxScheduler-recurrenceYearly": "Yearly",
	"dxScheduler-recurrenceRepeatEvery": "Repeat Every",
	"dxScheduler-recurrenceRepeatOn": "Repeat On",
	"dxScheduler-recurrenceEnd": "End repeat",
	"dxScheduler-recurrenceAfter": "After",
	"dxScheduler-recurrenceOn": "On",
	"dxScheduler-recurrenceRepeatMinutely": "minute(s)",
	"dxScheduler-recurrenceRepeatHourly": "hour(s)",
	"dxScheduler-recurrenceRepeatDaily": "day(s)",
	"dxScheduler-recurrenceRepeatWeekly": "week(s)",
	"dxScheduler-recurrenceRepeatMonthly": "month(s)",
	"dxScheduler-recurrenceRepeatYearly": "year(s)",
	"dxScheduler-switcherDay": "Day",
	"dxScheduler-switcherWeek": "Week",
	"dxScheduler-switcherWorkWeek": "Work Week",
	"dxScheduler-switcherMonth": "Month",
	"dxScheduler-switcherAgenda": "Agenda",
	"dxScheduler-switcherTimelineDay": "Timeline Day",
	"dxScheduler-switcherTimelineWeek": "Timeline Week",
	"dxScheduler-switcherTimelineWorkWeek": "Timeline Work Week",
	"dxScheduler-switcherTimelineMonth": "Timeline Month",
	"dxScheduler-recurrenceRepeatOnDate": "on date",
	"dxScheduler-recurrenceRepeatCount": "occurrence(s)",
	"dxScheduler-allDay": "All day",
	"dxScheduler-confirmRecurrenceEditMessage": "Do you want to edit only this appointment or the whole series?",
	"dxScheduler-confirmRecurrenceDeleteMessage": "Do you want to delete only this appointment or the whole series?",
	"dxScheduler-confirmRecurrenceEditSeries": "Edit series",
	"dxScheduler-confirmRecurrenceDeleteSeries": "Delete series",
	"dxScheduler-confirmRecurrenceEditOccurrence": "Edit appointment",
	"dxScheduler-confirmRecurrenceDeleteOccurrence": "Delete appointment",
	"dxScheduler-noTimezoneTitle": "No timezone",
	"dxScheduler-moreAppointments": "{0} more",
	"dxCalendar-todayButtonText": "Today",
	"dxCalendar-ariaWidgetName": "Calendar",
	"dxColorView-ariaRed": "Red",
	"dxColorView-ariaGreen": "Green",
	"dxColorView-ariaBlue": "Blue",
	"dxColorView-ariaAlpha": "Transparency",
	"dxColorView-ariaHex": "Color code",
	"dxTagBox-selected": "{0} selected",
	"dxTagBox-allSelected": "All selected ({0})",
	"dxTagBox-moreSelected": "{0} more",
	"vizExport-printingButtonText": "Print",
	"vizExport-titleMenuText": "Exporting/Printing",
	"vizExport-exportButtonText": "{0} file",
	"dxFilterBuilder-and": "And",
	"dxFilterBuilder-or": "Or",
	"dxFilterBuilder-notAnd": "Not And",
	"dxFilterBuilder-notOr": "Not Or",
	"dxFilterBuilder-addCondition": "Add Condition",
	"dxFilterBuilder-addGroup": "Add Group",
	"dxFilterBuilder-enterValueText": "<enter a value>",
	"dxFilterBuilder-filterOperationEquals": "Equals",
	"dxFilterBuilder-filterOperationNotEquals": "Does not equal",
	"dxFilterBuilder-filterOperationLess": "Is less than",
	"dxFilterBuilder-filterOperationLessOrEquals": "Is less than or equal to",
	"dxFilterBuilder-filterOperationGreater": "Is greater than",
	"dxFilterBuilder-filterOperationGreaterOrEquals": "Is greater than or equal to",
	"dxFilterBuilder-filterOperationStartsWith": "Starts with",
	"dxFilterBuilder-filterOperationContains": "Contains",
	"dxFilterBuilder-filterOperationNotContains": "Does not contain",
	"dxFilterBuilder-filterOperationEndsWith": "Ends with",
	"dxFilterBuilder-filterOperationIsBlank": "Is blank",
	"dxFilterBuilder-filterOperationIsNotBlank": "Is not blank",
	"dxFilterBuilder-filterOperationBetween": "Is between",
	"dxFilterBuilder-filterOperationAnyOf": "Is any of",
	"dxFilterBuilder-filterOperationNoneOf": "Is none of",
	"dxHtmlEditor-dialogColorCaption": "Change Font Color",
	"dxHtmlEditor-dialogBackgroundCaption": "Change Background Color",
	"dxHtmlEditor-dialogLinkCaption": "Add Link",
	"dxHtmlEditor-dialogLinkUrlField": "URL",
	"dxHtmlEditor-dialogLinkTextField": "Text",
	"dxHtmlEditor-dialogLinkTargetField": "Open link in new window",
	"dxHtmlEditor-dialogImageCaption": "Add Image",
	"dxHtmlEditor-dialogImageUrlField": "URL",
	"dxHtmlEditor-dialogImageAltField": "Alternate text",
	"dxHtmlEditor-dialogImageWidthField": "Width (px)",
	"dxHtmlEditor-dialogImageHeightField": "Height (px)",
	"dxHtmlEditor-dialogInsertTableRowsField": "Rows",
	"dxHtmlEditor-dialogInsertTableColumnsField": "Columns",
	"dxHtmlEditor-dialogInsertTableCaption": "Insert Table",
	"dxHtmlEditor-heading": "Heading",
	"dxHtmlEditor-normalText": "Normal text",
	"dxFileManager-newDirectoryName": "Untitled directory",
	"dxFileManager-rootDirectoryName": "Files",
	"dxFileManager-errorNoAccess": "Access Denied. Operation could not be completed.",
	"dxFileManager-errorDirectoryExistsFormat": "Directory '{0}' already exists.",
	"dxFileManager-errorFileExistsFormat": "File '{0}' already exists.",
	"dxFileManager-errorFileNotFoundFormat": "File '{0}' not found.",
	"dxFileManager-errorDirectoryNotFoundFormat": "Directory '{0}' not found.",
	"dxFileManager-errorWrongFileExtension": "File extension is not allowed.",
	"dxFileManager-errorMaxFileSizeExceeded": "File size exceeds the maximum allowed size.",
	"dxFileManager-errorInvalidSymbols": "This name contains invalid characters.",
	"dxFileManager-errorDefault": "Unspecified error.",
	"dxFileManager-errorDirectoryOpenFailed": "The directory cannot be opened",
	"dxFileManager-commandCreate": "New directory",
	"dxFileManager-commandRename": "Rename",
	"dxFileManager-commandMove": "Move to",
	"dxFileManager-commandCopy": "Copy to",
	"dxFileManager-commandDelete": "Delete",
	"dxFileManager-commandDownload": "Download",
	"dxFileManager-commandUpload": "Upload files",
	"dxFileManager-commandRefresh": "Refresh",
	"dxFileManager-commandThumbnails": "Thumbnails View",
	"dxFileManager-commandDetails": "Details View",
	"dxFileManager-commandClearSelection": "Clear selection",
	"dxFileManager-commandShowNavPane": "Toggle navigation pane",
	"dxFileManager-dialogDirectoryChooserMoveTitle": "Move to",
	"dxFileManager-dialogDirectoryChooserMoveButtonText": "Move",
	"dxFileManager-dialogDirectoryChooserCopyTitle": "Copy to",
	"dxFileManager-dialogDirectoryChooserCopyButtonText": "Copy",
	"dxFileManager-dialogRenameItemTitle": "Rename",
	"dxFileManager-dialogRenameItemButtonText": "Save",
	"dxFileManager-dialogCreateDirectoryTitle": "New directory",
	"dxFileManager-dialogCreateDirectoryButtonText": "Create",
	"dxFileManager-dialogDeleteItemTitle": "Delete",
	"dxFileManager-dialogDeleteItemButtonText": "Delete",
	"dxFileManager-dialogDeleteItemSingleItemConfirmation": "Are you sure you want to delete {0}?",
	"dxFileManager-dialogDeleteItemMultipleItemsConfirmation": "Are you sure you want to delete {0} items?",
	"dxFileManager-dialogButtonCancel": "Cancel",
	"dxFileManager-editingCreateSingleItemProcessingMessage": "Creating a directory inside {0}",
	"dxFileManager-editingCreateSingleItemSuccessMessage": "Created a directory inside {0}",
	"dxFileManager-editingCreateSingleItemErrorMessage": "Directory was not created",
	"dxFileManager-editingCreateCommonErrorMessage": "Directory was not created",
	"dxFileManager-editingRenameSingleItemProcessingMessage": "Renaming an item inside {0}",
	"dxFileManager-editingRenameSingleItemSuccessMessage": "Renamed an item inside {0}",
	"dxFileManager-editingRenameSingleItemErrorMessage": "Item was not renamed",
	"dxFileManager-editingRenameCommonErrorMessage": "Item was not renamed",
	"dxFileManager-editingDeleteSingleItemProcessingMessage": "Deleting an item from {0}",
	"dxFileManager-editingDeleteMultipleItemsProcessingMessage": "Deleting {0} items from {1}",
	"dxFileManager-editingDeleteSingleItemSuccessMessage": "Deleted an item from {0}",
	"dxFileManager-editingDeleteMultipleItemsSuccessMessage": "Deleted {0} items from {1}",
	"dxFileManager-editingDeleteSingleItemErrorMessage": "Item was not deleted",
	"dxFileManager-editingDeleteMultipleItemsErrorMessage": "{0} items were not deleted",
	"dxFileManager-editingDeleteCommonErrorMessage": "Some items were not deleted",
	"dxFileManager-editingMoveSingleItemProcessingMessage": "Moving an item to {0}",
	"dxFileManager-editingMoveMultipleItemsProcessingMessage": "Moving {0} items to {1}",
	"dxFileManager-editingMoveSingleItemSuccessMessage": "Moved an item to {0}",
	"dxFileManager-editingMoveMultipleItemsSuccessMessage": "Moved {0} items to {1}",
	"dxFileManager-editingMoveSingleItemErrorMessage": "Item was not moved",
	"dxFileManager-editingMoveMultipleItemsErrorMessage": "{0} items were not moved",
	"dxFileManager-editingMoveCommonErrorMessage": "Some items were not moved",
	"dxFileManager-editingCopySingleItemProcessingMessage": "Copying an item to {0}",
	"dxFileManager-editingCopyMultipleItemsProcessingMessage": "Copying {0} items to {1}",
	"dxFileManager-editingCopySingleItemSuccessMessage": "Copied an item to {0}",
	"dxFileManager-editingCopyMultipleItemsSuccessMessage": "Copied {0} items to {1}",
	"dxFileManager-editingCopySingleItemErrorMessage": "Item was not copied",
	"dxFileManager-editingCopyMultipleItemsErrorMessage": "{0} items were not copied",
	"dxFileManager-editingCopyCommonErrorMessage": "Some items were not copied",
	"dxFileManager-editingUploadSingleItemProcessingMessage": "Uploading an item to {0}",
	"dxFileManager-editingUploadMultipleItemsProcessingMessage": "Uploading {0} items to {1}",
	"dxFileManager-editingUploadSingleItemSuccessMessage": "Uploaded an item to {0}",
	"dxFileManager-editingUploadMultipleItemsSuccessMessage": "Uploaded {0} items to {1}",
	"dxFileManager-editingUploadSingleItemErrorMessage": "Item was not uploaded",
	"dxFileManager-editingUploadMultipleItemsErrorMessage": "{0} items were not uploaded",
	"dxFileManager-editingUploadCanceledMessage": "Canceled",
	"dxFileManager-listDetailsColumnCaptionName": "Name",
	"dxFileManager-listDetailsColumnCaptionDateModified": "Date Modified",
	"dxFileManager-listDetailsColumnCaptionFileSize": "File Size",
	"dxFileManager-listThumbnailsTooltipTextSize": "Size",
	"dxFileManager-listThumbnailsTooltipTextDateModified": "Date Modified",
	"dxFileManager-notificationProgressPanelTitle": "Progress",
	"dxFileManager-notificationProgressPanelEmptyListText": "No operations",
	"dxFileManager-notificationProgressPanelOperationCanceled": "Canceled",
	"dxDiagram-categoryGeneral": "General",
	"dxDiagram-categoryFlowchart": "Flowchart",
	"dxDiagram-categoryOrgChart": "Org Chart",
	"dxDiagram-categoryContainers": "Containers",
	"dxDiagram-categoryCustom": "Custom",
	"dxDiagram-commandExportToSvg": "Export to SVG",
	"dxDiagram-commandExportToPng": "Export to PNG",
	"dxDiagram-commandExportToJpg": "Export to JPEG",
	"dxDiagram-commandUndo": "Undo",
	"dxDiagram-commandRedo": "Redo",
	"dxDiagram-commandFontName": "Font Name",
	"dxDiagram-commandFontSize": "Font Size",
	"dxDiagram-commandBold": "Bold",
	"dxDiagram-commandItalic": "Italic",
	"dxDiagram-commandUnderline": "Underline",
	"dxDiagram-commandTextColor": "Font Color",
	"dxDiagram-commandLineColor": "Line Color",
	"dxDiagram-commandLineWidth": "Line Width",
	"dxDiagram-commandLineStyle": "Line Style",
	"dxDiagram-commandLineStyleSolid": "Solid",
	"dxDiagram-commandLineStyleDotted": "Dotted",
	"dxDiagram-commandLineStyleDashed": "Dashed",
	"dxDiagram-commandFillColor": "Fill Color",
	"dxDiagram-commandAlignLeft": "Align Left",
	"dxDiagram-commandAlignCenter": "Align Center",
	"dxDiagram-commandAlignRight": "Align Right",
	"dxDiagram-commandConnectorLineType": "Connector Line Type",
	"dxDiagram-commandConnectorLineStraight": "Straight",
	"dxDiagram-commandConnectorLineOrthogonal": "Orthogonal",
	"dxDiagram-commandConnectorLineStart": "Connector Line Start",
	"dxDiagram-commandConnectorLineEnd": "Connector Line End",
	"dxDiagram-commandConnectorLineNone": "None",
	"dxDiagram-commandConnectorLineArrow": "Arrow",
	"dxDiagram-commandFullscreen": "Full Screen",
	"dxDiagram-commandUnits": "Units",
	"dxDiagram-commandPageSize": "Page Size",
	"dxDiagram-commandPageOrientation": "Page Orientation",
	"dxDiagram-commandPageOrientationLandscape": "Landscape",
	"dxDiagram-commandPageOrientationPortrait": "Portrait",
	"dxDiagram-commandPageColor": "Page Color",
	"dxDiagram-commandShowGrid": "Show Grid",
	"dxDiagram-commandSnapToGrid": "Snap to Grid",
	"dxDiagram-commandGridSize": "Grid Size",
	"dxDiagram-commandZoomLevel": "Zoom Level",
	"dxDiagram-commandAutoZoom": "Auto Zoom",
	"dxDiagram-commandFitToContent": "Fit to Content",
	"dxDiagram-commandFitToWidth": "Fit to Width",
	"dxDiagram-commandAutoZoomByContent": "Auto Zoom by Content",
	"dxDiagram-commandAutoZoomByWidth": "Auto Zoom by Width",
	"dxDiagram-commandSimpleView": "Simple View",
	"dxDiagram-commandCut": "Cut",
	"dxDiagram-commandCopy": "Copy",
	"dxDiagram-commandPaste": "Paste",
	"dxDiagram-commandSelectAll": "Select All",
	"dxDiagram-commandDelete": "Delete",
	"dxDiagram-commandBringToFront": "Bring to Front",
	"dxDiagram-commandSendToBack": "Send to Back",
	"dxDiagram-commandLock": "Lock",
	"dxDiagram-commandUnlock": "Unlock",
	"dxDiagram-commandInsertShapeImage": "Insert Image...",
	"dxDiagram-commandEditShapeImage": "Change Image...",
	"dxDiagram-commandDeleteShapeImage": "Delete Image",
	"dxDiagram-commandLayoutLeftToRight": "Left-to-right",
	"dxDiagram-commandLayoutRightToLeft": "Right-to-left",
	"dxDiagram-commandLayoutTopToBottom": "Top-to-bottom",
	"dxDiagram-commandLayoutBottomToTop": "Bottom-to-top",
	"dxDiagram-unitIn": "in",
	"dxDiagram-unitCm": "cm",
	"dxDiagram-unitPx": "px",
	"dxDiagram-dialogButtonOK": "OK",
	"dxDiagram-dialogButtonCancel": "Cancel",
	"dxDiagram-dialogInsertShapeImageTitle": "Insert Image",
	"dxDiagram-dialogEditShapeImageTitle": "Change Image",
	"dxDiagram-dialogEditShapeImageSelectButton": "Select image",
	"dxDiagram-dialogEditShapeImageLabelText": "or drop file here",
	"dxDiagram-uiExport": "Export",
	"dxDiagram-uiProperties": "Properties",
	"dxDiagram-uiSettings": "Settings",
	"dxDiagram-uiShowToolbox": "Show Toolbox",
	"dxDiagram-uiSearch": "Search",
	"dxDiagram-uiStyle": "Style",
	"dxDiagram-uiLayout": "Layout",
	"dxDiagram-uiLayoutTree": "Tree",
	"dxDiagram-uiLayoutLayered": "Layered",
	"dxDiagram-uiDiagram": "Diagram",
	"dxDiagram-uiText": "Text",
	"dxDiagram-uiObject": "Object",
	"dxDiagram-uiConnector": "Connector",
	"dxDiagram-uiPage": "Page",
	"dxDiagram-shapeText": "Text",
	"dxDiagram-shapeRectangle": "Rectangle",
	"dxDiagram-shapeEllipse": "Ellipse",
	"dxDiagram-shapeCross": "Cross",
	"dxDiagram-shapeTriangle": "Triangle",
	"dxDiagram-shapeDiamond": "Diamond",
	"dxDiagram-shapeHeart": "Heart",
	"dxDiagram-shapePentagon": "Pentagon",
	"dxDiagram-shapeHexagon": "Hexagon",
	"dxDiagram-shapeOctagon": "Octagon",
	"dxDiagram-shapeStar": "Star",
	"dxDiagram-shapeArrowLeft": "Left Arrow",
	"dxDiagram-shapeArrowUp": "Up Arrow",
	"dxDiagram-shapeArrowRight": "Right Arrow",
	"dxDiagram-shapeArrowDown": "Down Arrow",
	"dxDiagram-shapeArrowUpDown": "Up Down Arrow",
	"dxDiagram-shapeArrowLeftRight": "Left Right Arrow",
	"dxDiagram-shapeProcess": "Process",
	"dxDiagram-shapeDecision": "Decision",
	"dxDiagram-shapeTerminator": "Terminator",
	"dxDiagram-shapePredefinedProcess": "Predefined Process",
	"dxDiagram-shapeDocument": "Document",
	"dxDiagram-shapeMultipleDocuments": "Multiple Documents",
	"dxDiagram-shapeManualInput": "Manual Input",
	"dxDiagram-shapePreparation": "Preparation",
	"dxDiagram-shapeData": "Data",
	"dxDiagram-shapeDatabase": "Database",
	"dxDiagram-shapeHardDisk": "Hard Disk",
	"dxDiagram-shapeInternalStorage": "Internal Storage",
	"dxDiagram-shapePaperTape": "Paper Tape",
	"dxDiagram-shapeManualOperation": "Manual Operation",
	"dxDiagram-shapeDelay": "Delay",
	"dxDiagram-shapeStoredData": "Stored Data",
	"dxDiagram-shapeDisplay": "Display",
	"dxDiagram-shapeMerge": "Merge",
	"dxDiagram-shapeConnector": "Connector",
	"dxDiagram-shapeOr": "Or",
	"dxDiagram-shapeSummingJunction": "Summing Junction",
	"dxDiagram-shapeContainerDefaultText": "Container",
	"dxDiagram-shapeVerticalContainer": "Vertical Container",
	"dxDiagram-shapeHorizontalContainer": "Horizontal Container",
	"dxDiagram-shapeCardDefaultText": "Person's Name",
	"dxDiagram-shapeCardWithImageOnLeft": "Card with Image on the Left",
	"dxDiagram-shapeCardWithImageOnTop": "Card with Image on the Top",
	"dxDiagram-shapeCardWithImageOnRight": "Card with Image on the Right",
	"dxGantt-dialogTitle": "Title",
	"dxGantt-dialogStartTitle": "Start",
	"dxGantt-dialogEndTitle": "End",
	"dxGantt-dialogProgressTitle": "Progress",
	"dxGantt-dialogResourcesTitle": "Resources",
	"dxGantt-dialogResourceManagerTitle": "Resource Manager",
	"dxGantt-dialogTaskDetailsTitle": "Task Details",
	"dxGantt-dialogEditResourceListHint": "Edit Resource List",
	"dxGantt-dialogEditNoResources": "No resources",
	"dxGantt-dialogButtonAdd": "Add",
	"dxGantt-contextMenuNewTask": "New Task",
	"dxGantt-contextMenuNewSubtask": "New Subtask",
	"dxGantt-contextMenuDeleteTask": "Delete Task",
	"dxGantt-contextMenuDeleteDependency": "Delete Dependency",
	"dxGantt-dialogTaskDeleteConfirmation": "Deleting a task also deletes all its dependencies and subtasks. Are you sure you want to delete this task?",
	"dxGantt-dialogDependencyDeleteConfirmation": "Are you sure you want to delete the dependency from the task?",
	"dxGantt-dialogResourcesDeleteConfirmation": "Deleting a resource also deletes it from tasks to which this resource is assigned. Are you sure you want to delete these resources? Resource: {0}",
	"dxGantt-dialogConstraintCriticalViolationMessage": "The task you are attempting to move is linked to a second task by a dependency relation. This change would conflict with dependency rules. How would you like to proceed?",
	"dxGantt-dialogConstraintViolationMessage": "The task you are attempting to move is linked to a second task by a dependency relation. How would you like to proceed?",
	"dxGantt-dialogCancelOperationMessage": "Cancel the operation",
	"dxGantt-dialogDeleteDependencyMessage": "Delete the dependency",
	"dxGantt-dialogMoveTaskAndKeepDependencyMessage": "Move the task and keep the dependency",
	"dxGantt-undo": "Undo",
	"dxGantt-redo": "Redo",
	"dxGantt-expandAll": "Expand All",
	"dxGantt-collapseAll": "Collapse All",
	"dxGantt-addNewTask": "Add New Task",
	"dxGantt-deleteSelectedTask": "Delete Selected Task",
	"dxGantt-zoomIn": "Zoom In",
	"dxGantt-zoomOut": "Zoom Out",
	"dxGantt-fullScreen": "Full Screen"
};
var enMessages = {
	en: en
};

var pl = {
	Yes: "Tak",
	No: "Nie",
	Cancel: "Anuluj",
	Clear: "Czyść",
	Done: "Gotowe",
	Loading: "Ładowanie danych...",
	Select: "Wybierz...",
	Search: "Szukaj",
	Back: "Wstecz",
	OK: "OK",
	"dxCollectionWidget-noDataText": "Brak danych do wyświetlenia",
	"dxDropDownEditor-selectLabel": "Wybierz",
	"validation-required": "Required",
	"validation-required-formatted": "{0} jest wymagane",
	"validation-numeric": "Wartość musi być liczbą",
	"validation-numeric-formatted": "{0} musi być liczbą",
	"validation-range": "Wartość poza zakresem",
	"validation-range-formatted": "{0} jest poza zakresem",
	"validation-stringLength": "The length of the value is not correct",
	"validation-stringLength-formatted": "The length of {0} is not correct",
	"validation-custom": "Wartość jest niepoprawna",
	"validation-custom-formatted": "{0} is invalid",
	"validation-async": "Wartość jest niepoprawna",
	"validation-async-formatted": "{0} is invalid",
	"validation-compare": "Values do not match",
	"validation-compare-formatted": "{0} does not match",
	"validation-pattern": "Value does not match pattern",
	"validation-pattern-formatted": "{0} does not match pattern",
	"validation-email": "Email is invalid",
	"validation-email-formatted": "{0} is invalid",
	"validation-mask": "Wartość jest niepoprawna",
	"dxLookup-searchPlaceholder": "Minimum character number: {0}",
	"dxList-pullingDownText": "Pull down to refresh...",
	"dxList-pulledDownText": "Release to refresh...",
	"dxList-refreshingText": "Ładowanie...",
	"dxList-pageLoadingText": "Ładowanie danych...",
	"dxList-nextButtonText": "Pokaż więcej...",
	"dxList-selectAll": "Zaznacz wszystko",
	"dxListEditDecorator-delete": "Usuń",
	"dxListEditDecorator-more": "Więcej",
	"dxScrollView-pullingDownText": "Pull down to refresh...",
	"dxScrollView-pulledDownText": "Release to refresh...",
	"dxScrollView-refreshingText": "Ładowanie...",
	"dxScrollView-reachBottomText": "Ładowanie danych...",
	"dxDateBox-simulatedDataPickerTitleTime": "Wybierz godzinę",
	"dxDateBox-simulatedDataPickerTitleDate": "Wybierz datę",
	"dxDateBox-simulatedDataPickerTitleDateTime": "Wybierz datę i godzinę",
	"dxDateBox-validation-datetime": "Podaj poprawną datę i godzinę",
	"dxFileUploader-selectFile": "Wybierz plik",
	"dxFileUploader-dropFile": "lub przeciągnij plik tutaj",
	"dxFileUploader-bytes": "bytes",
	"dxFileUploader-kb": "kb",
	"dxFileUploader-Mb": "Mb",
	"dxFileUploader-Gb": "Gb",
	"dxFileUploader-upload": "Upload",
	"dxFileUploader-uploaded": "Uploaded",
	"dxFileUploader-readyToUpload": "Ready to upload",
	"dxFileUploader-uploadFailedMessage": "Upload failed",
	"dxFileUploader-invalidFileExtension": "File type is not allowed",
	"dxFileUploader-invalidMaxFileSize": "File is too large",
	"dxFileUploader-invalidMinFileSize": "File is too small",
	"dxRangeSlider-ariaFrom": "From",
	"dxRangeSlider-ariaTill": "Till",
	"dxSwitch-switchedOnText": "ON",
	"dxSwitch-switchedOffText": "OFF",
	"dxForm-optionalMark": "optional",
	"dxForm-requiredMessage": "{0} is required",
	"dxNumberBox-invalidValueMessage": "Value must be a number",
	"dxNumberBox-noDataText": "No data",
	"dxDataGrid-columnChooserTitle": "Wybór kolumny",
	"dxDataGrid-columnChooserEmptyText": "Przeciągnij kolumnę tutaj, aby ją ukryć",
	"dxDataGrid-groupContinuesMessage": "Kontynuuje na następnej stronie",
	"dxDataGrid-groupContinuedMessage": "Kontynuuje na poprzedniej stronie",
	"dxDataGrid-groupHeaderText": "Grupuj według tej kolumny",
	"dxDataGrid-ungroupHeaderText": "Rozgrupuj",
	"dxDataGrid-ungroupAllText": "Rozgrupuj wszystkie",
	"dxDataGrid-editingEditRow": "Edytuj",
	"dxDataGrid-editingSaveRowChanges": "Zapisz",
	"dxDataGrid-editingCancelRowChanges": "Anuluj",
	"dxDataGrid-editingDeleteRow": "Usuń",
	"dxDataGrid-editingUndeleteRow": "Cofnij usuń",
	"dxDataGrid-editingConfirmDeleteMessage": "Czy na pewno chcesz usunąć ten rekord?",
	"dxDataGrid-validationCancelChanges": "Anuluj zmiany",
	"dxDataGrid-groupPanelEmptyText": "Przeciągnij tutaj nagłówek kolumny, aby pogrupować wyniki",
	"dxDataGrid-noDataText": "Brak danych do wyświetlenia",
	"dxDataGrid-searchPanelPlaceholder": "Szukaj...",
	"dxDataGrid-filterRowShowAllText": "(Wszystkie)",
	"dxDataGrid-filterRowResetOperationText": "Reset",
	"dxDataGrid-filterRowOperationEquals": "Równa się",
	"dxDataGrid-filterRowOperationNotEquals": "Nie równa się",
	"dxDataGrid-filterRowOperationLess": "Mniej niż",
	"dxDataGrid-filterRowOperationLessOrEquals": "Mniejszy lub równy",
	"dxDataGrid-filterRowOperationGreater": "Wiekszy niż",
	"dxDataGrid-filterRowOperationGreaterOrEquals": "Większy lub równy",
	"dxDataGrid-filterRowOperationStartsWith": "Zaczyna na",
	"dxDataGrid-filterRowOperationContains": "Zawiera",
	"dxDataGrid-filterRowOperationNotContains": "Nie zawiera",
	"dxDataGrid-filterRowOperationEndsWith": "Kończy na",
	"dxDataGrid-filterRowOperationBetween": "Pomiędzy",
	"dxDataGrid-filterRowOperationBetweenStartText": "Start",
	"dxDataGrid-filterRowOperationBetweenEndText": "Koniec",
	"dxDataGrid-applyFilterText": "Nałóż filtr",
	"dxDataGrid-trueText": "prawda",
	"dxDataGrid-falseText": "fałsz",
	"dxDataGrid-sortingAscendingText": "Sortuj rosnąco",
	"dxDataGrid-sortingDescendingText": "Sortuj malejąco",
	"dxDataGrid-sortingClearText": "Wyczyść sortowanie",
	"dxDataGrid-editingSaveAllChanges": "Zapisz zmiany",
	"dxDataGrid-editingCancelAllChanges": "Porzuć zmiany",
	"dxDataGrid-editingAddRow": "Dodaj wiersz",
	"dxDataGrid-summaryMin": "Min: {0}",
	"dxDataGrid-summaryMinOtherColumn": "Min to {1} jest {0}",
	"dxDataGrid-summaryMax": "Max: {0}",
	"dxDataGrid-summaryMaxOtherColumn": "Max to {1} jest {0}",
	"dxDataGrid-summaryAvg": "Avg: {0}",
	"dxDataGrid-summaryAvgOtherColumn": "Avg of {1} is {0}",
	"dxDataGrid-summarySum": "Suma: {0}",
	"dxDataGrid-summarySumOtherColumn": "Sum of {1} is {0}",
	"dxDataGrid-summaryCount": "Łącznie: {0}",
	"dxDataGrid-columnFixingFix": "Fix",
	"dxDataGrid-columnFixingUnfix": "Unfix",
	"dxDataGrid-columnFixingLeftPosition": "W lewo",
	"dxDataGrid-columnFixingRightPosition": "W prawo",
	"dxDataGrid-exportTo": "Export",
	"dxDataGrid-exportToExcel": "Export do Excel",
	"dxDataGrid-excelFormat": "plik Excel",
	"dxDataGrid-selectedRows": "Wybrane wiersze",
	"dxDataGrid-exportSelectedRows": "Exportuj wybrane wiersze",
	"dxDataGrid-exportAll": "Exportuj wszystkie dane",
	"dxDataGrid-headerFilterEmptyValue": "(Puste)",
	"dxDataGrid-headerFilterOK": "Zapisz",
	"dxDataGrid-headerFilterCancel": "Anuluj",
	"dxDataGrid-ariaColumn": "Kolumna",
	"dxDataGrid-ariaValue": "Wartość",
	"dxDataGrid-ariaFilterCell": "Filtruj kolimnę",
	"dxDataGrid-ariaCollapse": "Collapse",
	"dxDataGrid-ariaExpand": "Rozszerz",
	"dxDataGrid-ariaDataGrid": "Data grid",
	"dxDataGrid-ariaSearchInGrid": "Szukaj w danych",
	"dxDataGrid-ariaSelectAll": "Zaznacz wszystko",
	"dxDataGrid-ariaSelectRow": "Zaznacz wiersz",
	"dxDataGrid-filterBuilderPopupTitle": "Konstruktor filtrów",
	"dxDataGrid-filterPanelCreateFilter": "Twórz filtr",
	"dxDataGrid-filterPanelClearFilter": "Wyczyśc",
	"dxDataGrid-filterPanelFilterEnabledHint": "Włącz filtr",
	"dxTreeList-ariaTreeList": "Lista",
	"dxTreeList-editingAddRowToNode": "Dodaj",
	"dxPager-infoText": "Strona {0} z {1} ({2} rekordów)",
	"dxPager-pagesCountText": "z",
	"dxPivotGrid-grandTotal": "Grand Total",
	"dxPivotGrid-total": "{0} Total",
	"dxPivotGrid-fieldChooserTitle": "Field Chooser",
	"dxPivotGrid-showFieldChooser": "Show Field Chooser",
	"dxPivotGrid-expandAll": "Expand All",
	"dxPivotGrid-collapseAll": "Collapse All",
	"dxPivotGrid-sortColumnBySummary": "Sort \"{0}\" by This Column",
	"dxPivotGrid-sortRowBySummary": "Sort \"{0}\" by This Row",
	"dxPivotGrid-removeAllSorting": "Remove All Sorting",
	"dxPivotGrid-dataNotAvailable": "N/A",
	"dxPivotGrid-rowFields": "Row Fields",
	"dxPivotGrid-columnFields": "Column Fields",
	"dxPivotGrid-dataFields": "Data Fields",
	"dxPivotGrid-filterFields": "Filter Fields",
	"dxPivotGrid-allFields": "All Fields",
	"dxPivotGrid-columnFieldArea": "Drop Column Fields Here",
	"dxPivotGrid-dataFieldArea": "Drop Data Fields Here",
	"dxPivotGrid-rowFieldArea": "Drop Row Fields Here",
	"dxPivotGrid-filterFieldArea": "Drop Filter Fields Here",
	"dxScheduler-editorLabelTitle": "Temat",
	"dxScheduler-editorLabelStartDate": "Data startu",
	"dxScheduler-editorLabelEndDate": "Data końca",
	"dxScheduler-editorLabelDescription": "Opis",
	"dxScheduler-editorLabelRecurrence": "Powtórz",
	"dxScheduler-openAppointment": "Open appointment",
	"dxScheduler-recurrenceNever": "Nigdy",
	"dxScheduler-recurrenceDaily": "Codziennie",
	"dxScheduler-recurrenceWeekly": "Co tydzień",
	"dxScheduler-recurrenceMonthly": "Co miesiąc",
	"dxScheduler-recurrenceYearly": "Co rok",
	"dxScheduler-recurrenceRepeatEvery": "Repeat Every",
	"dxScheduler-recurrenceRepeatOn": "Repeat On",
	"dxScheduler-recurrenceEnd": "End repeat",
	"dxScheduler-recurrenceAfter": "After",
	"dxScheduler-recurrenceOn": "On",
	"dxScheduler-recurrenceRepeatDaily": "day(s)",
	"dxScheduler-recurrenceRepeatWeekly": "week(s)",
	"dxScheduler-recurrenceRepeatMonthly": "month(s)",
	"dxScheduler-recurrenceRepeatYearly": "year(s)",
	"dxScheduler-switcherDay": "Dzień",
	"dxScheduler-switcherWeek": "Tydzień",
	"dxScheduler-switcherWorkWeek": "Tydzień roboczy",
	"dxScheduler-switcherMonth": "Miesiąc",
	"dxScheduler-switcherAgenda": "Agenda",
	"dxScheduler-switcherTimelineDay": "Linia dnia",
	"dxScheduler-switcherTimelineWeek": "Linia tygodnia",
	"dxScheduler-switcherTimelineWorkWeek": "Linia tygodnia roboczego",
	"dxScheduler-switcherTimelineMonth": "Linia miesiąca",
	"dxScheduler-recurrenceRepeatOnDate": "on date",
	"dxScheduler-recurrenceRepeatCount": "occurrence(s)",
	"dxScheduler-allDay": "Cały dzień",
	"dxScheduler-confirmRecurrenceEditMessage": "Do you want to edit only this appointment or the whole series?",
	"dxScheduler-confirmRecurrenceDeleteMessage": "Do you want to delete only this appointment or the whole series?",
	"dxScheduler-confirmRecurrenceEditSeries": "Edit series",
	"dxScheduler-confirmRecurrenceDeleteSeries": "Delete series",
	"dxScheduler-confirmRecurrenceEditOccurrence": "Edit appointment",
	"dxScheduler-confirmRecurrenceDeleteOccurrence": "Delete appointment",
	"dxScheduler-noTimezoneTitle": "No timezone",
	"dxScheduler-moreAppointments": "Jeszcze {0}",
	"dxCalendar-todayButtonText": "Dzisiaj",
	"dxCalendar-ariaWidgetName": "Kalendarz",
	"dxColorView-ariaRed": "Czerwony",
	"dxColorView-ariaGreen": "Zielony",
	"dxColorView-ariaBlue": "Niebieski",
	"dxColorView-ariaAlpha": "Przezroczystość",
	"dxColorView-ariaHex": "Kod koloru",
	"dxTagBox-selected": "{0} selected",
	"dxTagBox-allSelected": "All selected ({0})",
	"dxTagBox-moreSelected": "Jeszcze {0}",
	"vizExport-printingButtonText": "Drukuj",
	"vizExport-titleMenuText": "Eksportuj/drukuj",
	"vizExport-exportButtonText": "{0} plik",
	"dxFilterBuilder-and": "And",
	"dxFilterBuilder-or": "Or",
	"dxFilterBuilder-notAnd": "Not And",
	"dxFilterBuilder-notOr": "Not Or",
	"dxFilterBuilder-addCondition": "Add Condition",
	"dxFilterBuilder-addGroup": "Add Group",
	"dxFilterBuilder-enterValueText": "<enter a value>",
	"dxFilterBuilder-filterOperationEquals": "Equals",
	"dxFilterBuilder-filterOperationNotEquals": "Does not equal",
	"dxFilterBuilder-filterOperationLess": "Is less than",
	"dxFilterBuilder-filterOperationLessOrEquals": "Is less than or equal to",
	"dxFilterBuilder-filterOperationGreater": "Is greater than",
	"dxFilterBuilder-filterOperationGreaterOrEquals": "Is greater than or equal to",
	"dxFilterBuilder-filterOperationStartsWith": "Starts with",
	"dxFilterBuilder-filterOperationContains": "Contains",
	"dxFilterBuilder-filterOperationNotContains": "Does not contain",
	"dxFilterBuilder-filterOperationEndsWith": "Ends with",
	"dxFilterBuilder-filterOperationIsBlank": "Is blank",
	"dxFilterBuilder-filterOperationIsNotBlank": "Is not blank",
	"dxFilterBuilder-filterOperationBetween": "Is between",
	"dxFilterBuilder-filterOperationAnyOf": "Is any of",
	"dxFilterBuilder-filterOperationNoneOf": "Is none of",
	"dxHtmlEditor-dialogColorCaption": "Change Font Color",
	"dxHtmlEditor-dialogBackgroundCaption": "Change Background Color",
	"dxHtmlEditor-dialogLinkCaption": "Add Link",
	"dxHtmlEditor-dialogLinkUrlField": "URL",
	"dxHtmlEditor-dialogLinkTextField": "Text",
	"dxHtmlEditor-dialogLinkTargetField": "Open link in new window",
	"dxHtmlEditor-dialogImageCaption": "Add Image",
	"dxHtmlEditor-dialogImageUrlField": "URL",
	"dxHtmlEditor-dialogImageAltField": "Alternate text",
	"dxHtmlEditor-dialogImageWidthField": "Width (px)",
	"dxHtmlEditor-dialogImageHeightField": "Height (px)",
	"dxHtmlEditor-heading": "Heading",
	"dxHtmlEditor-normalText": "Normal text",
	"dxFileManager-newDirectoryName": "Untitled directory",
	"dxFileManager-rootDirectoryName": "Files",
	"dxFileManager-errorNoAccess": "Access denied. The operation cannot be completed.",
	"dxFileManager-errorDirectoryExistsFormat": "Directory '{0}' already exists.",
	"dxFileManager-errorFileExistsFormat": "File '{0}' already exists.",
	"dxFileManager-errorFileNotFoundFormat": "File '{0}' not found.",
	"dxFileManager-errorDirectoryNotFoundFormat": "Directory '{0}' not found.",
	"dxFileManager-errorWrongFileExtension": "File extension is not allowed.",
	"dxFileManager-errorMaxFileSizeExceeded": "File size exceeds the maximum allowed size.",
	"dxFileManager-errorInvalidSymbols": "This name contains invalid characters.",
	"dxFileManager-errorDefault": "Unspecified error.",
	"dxFileManager-commandCreate": "New directory",
	"dxFileManager-commandRename": "Rename",
	"dxFileManager-commandMove": "Move",
	"dxFileManager-commandCopy": "Copy",
	"dxFileManager-commandDelete": "Delete",
	"dxFileManager-commandDownload": "Download",
	"dxFileManager-commandUpload": "Upload files",
	"dxFileManager-commandRefresh": "Refresh",
	"dxFileManager-commandThumbnails": "Thumbnails View",
	"dxFileManager-commandDetails": "Details View",
	"dxFileManager-commandClear": "Clear selection",
	"dxFileManager-dialogDirectoryChooserTitle": "Select Destination Directory",
	"dxFileManager-dialogDirectoryChooserButtonText": "Select",
	"dxFileManager-dialogRenameItemTitle": "Rename",
	"dxFileManager-dialogRenameItemButtonText": "Save",
	"dxFileManager-dialogCreateDirectoryTitle": "New directory",
	"dxFileManager-dialogCreateDirectoryButtonText": "Create",
	"dxFileManager-editingCreateSingleItemProcessingMessage": "Creating a directory inside {0}",
	"dxFileManager-editingCreateSingleItemSuccessMessage": "Created a directory inside {0}",
	"dxFileManager-editingCreateSingleItemErrorMessage": "Directory wasn't created",
	"dxFileManager-editingCreateCommonErrorMessage": "Directory wasn't created",
	"dxFileManager-editingRenameSingleItemProcessingMessage": "Renaming an item inside {0}",
	"dxFileManager-editingRenameSingleItemSuccessMessage": "Renamed an item inside {0}",
	"dxFileManager-editingRenameSingleItemErrorMessage": "Item wasn't renamed",
	"dxFileManager-editingRenameCommonErrorMessage": "Item wasn't renamed",
	"dxFileManager-editingDeleteSingleItemProcessingMessage": "Deleting an item from {0}",
	"dxFileManager-editingDeleteMultipleItemsProcessingMessage": "Deleting {0} items from {1}",
	"dxFileManager-editingDeleteSingleItemSuccessMessage": "Deleted an item from {0}",
	"dxFileManager-editingDeleteMultipleItemsSuccessMessage": "Deleted {0} items from {1}",
	"dxFileManager-editingDeleteSingleItemErrorMessage": "Item wasn't deleted",
	"dxFileManager-editingDeleteMultipleItemsErrorMessage": "{0} items weren't deleted",
	"dxFileManager-editingDeleteCommonErrorMessage": "Some items weren't deleted",
	"dxFileManager-editingMoveSingleItemProcessingMessage": "Moving an item to {0}",
	"dxFileManager-editingMoveMultipleItemsProcessingMessage": "Moving {0} items to {1}",
	"dxFileManager-editingMoveSingleItemSuccessMessage": "Moved an item to {0}",
	"dxFileManager-editingMoveMultipleItemsSuccessMessage": "Moved {0} items to {1}",
	"dxFileManager-editingMoveSingleItemErrorMessage": "Item wasn't moved",
	"dxFileManager-editingMoveMultipleItemsErrorMessage": "{0} items weren't moved",
	"dxFileManager-editingMoveCommonErrorMessage": "Some items weren't moved",
	"dxFileManager-editingCopySingleItemProcessingMessage": "Copying an item to {0}",
	"dxFileManager-editingCopyMultipleItemsProcessingMessage": "Copying {0} items to {1}",
	"dxFileManager-editingCopySingleItemSuccessMessage": "Copied an item to {0}",
	"dxFileManager-editingCopyMultipleItemsSuccessMessage": "Copied {0} items to {1}",
	"dxFileManager-editingCopySingleItemErrorMessage": "Item wasn't copied",
	"dxFileManager-editingCopyMultipleItemsErrorMessage": "{0} items weren't copied",
	"dxFileManager-editingCopyCommonErrorMessage": "Some items weren't copied",
	"dxFileManager-editingUploadSingleItemProcessingMessage": "Uploading an item to {0}",
	"dxFileManager-editingUploadMultipleItemsProcessingMessage": "Uploading {0} items to {1}",
	"dxFileManager-editingUploadSingleItemSuccessMessage": "Uploaded an item to {0}",
	"dxFileManager-editingUploadMultipleItemsSuccessMessage": "Uploaded {0} items to {1}",
	"dxFileManager-editingUploadSingleItemErrorMessage": "Item wasn't uploaded",
	"dxFileManager-editingUploadMultipleItemsErrorMessage": "{0} items weren't uploaded",
	"dxFileManager-editingUploadCanceledMessage": "Anulowano",
	"dxFileManager-listDetailsColumnCaptionName": "Name",
	"dxFileManager-listDetailsColumnCaptionDateModified": "Date Modified",
	"dxFileManager-listDetailsColumnCaptionFileSize": "File Size",
	"dxFileManager-listThumbnailsTooltipTextSize": "Size",
	"dxFileManager-listThumbnailsTooltipTextDateModified": "Date Modified",
	"dxFileManager-notificationProgressPanelTitle": "Progress",
	"dxFileManager-notificationProgressPanelEmptyListText": "No operations",
	"dxFileManager-notificationProgressPanelOperationCanceled": "Anulowano",
	"dxDiagram-categoryGeneral": "Główny",
	"dxDiagram-categoryFlowchart": "Flowchart",
	"dxDiagram-categoryOrgChart": "Organizational Chart",
	"dxDiagram-categoryContainers": "Kontener",
	"dxDiagram-categoryCustom": "Custom",
	"dxDiagram-commandProperties": "Właściwości",
	"dxDiagram-commandExport": "Eksport",
	"dxDiagram-commandExportToSvg": "Eksportuj do SVG",
	"dxDiagram-commandExportToPng": "Eksportuj do PNG",
	"dxDiagram-commandExportToJpg": "Eksportuj do JPEG",
	"dxDiagram-commandUndo": "Cofnij",
	"dxDiagram-commandRedo": "Powtórz",
	"dxDiagram-commandFontName": "Nazwa czcionki",
	"dxDiagram-commandFontSize": "Rozmiar czcionki",
	"dxDiagram-commandBold": "Pogrubione",
	"dxDiagram-commandItalic": "Kursywa",
	"dxDiagram-commandUnderline": "Podkreślenie",
	"dxDiagram-commandTextColor": "Kolor tekstu",
	"dxDiagram-commandLineColor": "Kolor lini",
	"dxDiagram-commandFillColor": "Kolor wypełnienia",
	"dxDiagram-commandAlignLeft": "Wyrównanie do lewej",
	"dxDiagram-commandAlignCenter": "Wyśrodkowanie",
	"dxDiagram-commandAlignRight": "Wyrównanie do prawej",
	"dxDiagram-commandConnectorLineType": "Connector Line Type",
	"dxDiagram-commandConnectorLineStraight": "Straight",
	"dxDiagram-commandConnectorLineOrthogonal": "Orthogonal",
	"dxDiagram-commandConnectorLineStart": "Connector Line Start",
	"dxDiagram-commandConnectorLineEnd": "Connector Line End",
	"dxDiagram-commandConnectorLineNone": "None",
	"dxDiagram-commandConnectorLineArrow": "Arrow",
	"dxDiagram-commandAutoLayout": "Auto Layout",
	"dxDiagram-commandAutoLayoutTree": "Tree",
	"dxDiagram-commandAutoLayoutLayered": "Layered",
	"dxDiagram-commandAutoLayoutHorizontal": "Horizontal",
	"dxDiagram-commandAutoLayoutVertical": "Vertical",
	"dxDiagram-commandFullscreen": "Full Screen",
	"dxDiagram-commandUnits": "Units",
	"dxDiagram-commandPageSize": "Page Size",
	"dxDiagram-commandPageOrientation": "Page Orientation",
	"dxDiagram-commandPageOrientationLandscape": "Landscape",
	"dxDiagram-commandPageOrientationPortrait": "Portrait",
	"dxDiagram-commandPageColor": "Page Color",
	"dxDiagram-commandShowGrid": "Show Grid",
	"dxDiagram-commandSnapToGrid": "Snap to Grid",
	"dxDiagram-commandGridSize": "Grid Size",
	"dxDiagram-commandZoomLevel": "Zoom Level",
	"dxDiagram-commandAutoZoom": "Auto Zoom",
	"dxDiagram-commandSimpleView": "Simple View",
	"dxDiagram-commandCut": "Wytnij",
	"dxDiagram-commandCopy": "Kopiuj",
	"dxDiagram-commandPaste": "Wklej",
	"dxDiagram-commandSelectAll": "Zaznacz wszystko",
	"dxDiagram-commandDelete": "Usuń",
	"dxDiagram-commandBringToFront": "Przesuń na wierzch",
	"dxDiagram-commandSendToBack": "Wyślij wstecz",
	"dxDiagram-commandLock": "Zablokowany",
	"dxDiagram-commandUnlock": "Odblokowany",
	"dxDiagram-commandInsertShapeImage": "Wstaw zdjęcie...",
	"dxDiagram-commandEditShapeImage": "Zmień zdjęcie...",
	"dxDiagram-commandDeleteShapeImage": "Usuń zdjęcie",
	"dxDiagram-unitIn": "in",
	"dxDiagram-unitCm": "cm",
	"dxDiagram-unitPx": "px",
	"dxDiagram-dialogButtonOK": "OK",
	"dxDiagram-dialogButtonCancel": "Anuluj",
	"dxDiagram-dialogInsertShapeImageTitle": "Wstaw zdjęcie",
	"dxDiagram-dialogEditShapeImageTitle": "Zmień zdjęcie",
	"dxDiagram-dialogEditShapeImageSelectButton": "Wybierz zdjęcie",
	"dxDiagram-dialogEditShapeImageLabelText": "lub upuść plik tutaj"
};
var plMessages = {
	pl: pl
};

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => WaproDateBoxComponent),
    multi: true,
};
class WaproDateBoxComponent {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.5", type: WaproDateBoxComponent, isStandalone: true, selector: "wapro-date-box", inputs: { displayFormat: "displayFormat", readOnly: "readOnly", type: "type", disabled: "disabled", errorClass: "errorClass", width: "width", noMaxWidth: "noMaxWidth" }, outputs: { onValueChanged: "onValueChanged", focusedOut: "focusedOut", focusedIn: "focusedIn" }, providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR], viewQueries: [{ propertyName: "dateBox", first: true, predicate: ["dateBox"], descendants: true }], ngImport: i0, template: "<dx-date-box\r\n  [(value)]=\"myValue\"\r\n  [type]=\"type\"\r\n  [displayFormat]=\"displayFormat\"\r\n  [width]=\"width || 276\"\r\n  class=\"wapro-date-box\"\r\n  [readOnly]=\"readOnly\"\r\n  [disabled]=\"disabled\"\r\n  (mouseover)=\"mouseover()\"\r\n  (mouseout)=\"mouseout()\"\r\n  (onFocusIn)=\"onFocusIn()\"\r\n  (onFocusOut)=\"onFocusOut()\"\r\n  (onValueChanged)=\"onValueChangedDate($event)\"\r\n  (onEnterKey)=\"openBox()\"\r\n  (onOpened)=\"onOpened()\"\r\n  (onClosed)=\"onClosed()\"\r\n  [(opened)]=\"opened\"\r\n  [ngClass]=\"{\r\n    'input-required': errorClass,\r\n    'date-hover': isHover,\r\n    'no-max-width': noMaxWidth\r\n  }\"\r\n  #dateBox\r\n  (onKeyDown)=\"keydown($event)\"\r\n  (onBlur)=\"onBlur($event)\"\r\n  applyValueMode=\"useButtons\"\r\n  valueChangeEvent=\"change\"\r\n  [calendarOptions]=\"calendarOptions\"\r\n>\r\n  <dxi-button\r\n    name=\"calendar\"\r\n    location=\"before\"\r\n    [options]=\"calendarBtn\"\r\n  ></dxi-button>\r\n  <dxi-button\r\n    name=\"minus\"\r\n    location=\"after\"\r\n    cssClass=\"myClass\"\r\n    [options]=\"minusBtn\"\r\n    class=\"wapro-btn-date\"\r\n    *ngIf=\"type != 'time'\"\r\n  ></dxi-button>\r\n  <dxi-button\r\n    name=\"plus\"\r\n    location=\"after\"\r\n    [options]=\"plusBtn\"\r\n    style=\"border-radius: 6px; height: 21px\"\r\n    *ngIf=\"type != 'time'\"\r\n  ></dxi-button>\r\n</dx-date-box>\r\n", styles: [".btn-box{width:49px;height:28px;padding-top:1.5px;padding-bottom:1.5px;box-sizing:border-box;border:1px solid #b3b3b3;border-left:none;border-radius:0 6px 6px 0;display:inline-block}.dx-calendar-cell.dx-calendar-contoured-date span{box-shadow:0 0 0 2px #bc1a22}.dx-calendar-cell.dx-state-hover span{background-color:#ededed;color:#000}.dx-calendar-cell.dx-calendar-selected-date span{color:#fff;background-color:#bc1a22}.dx-calendar-cell.dx-calendar-today span{border:2px solid #bc1a22}.dx-calendar-cell.dx-calendar-selected-date,.dx-calendar-cell.dx-calendar-selected-date.dx-calendar-today{color:#fff;box-shadow:inset 0 0 0 1000px transparent!important;font-weight:400}.date-hover{border:1px solid #4c4c4c!important}.btn-box-hover{width:49px;height:28px;padding-top:1.5px;padding-bottom:1.5px;box-sizing:border-box;border:1px solid #4c4c4c;border-left:none;border-radius:0 6px 6px 0;display:inline-block}.on-focus{box-shadow:0 0 8px #58636a4d;border-radius:4px}.seperator{width:1px;height:20px;background:#e5e5e5;position:absolute;margin-top:1.5px}.dx-popup-content .title-pop-up .seperator{margin-top:4px!important}.plus-btn{box-sizing:border-box;padding:3px;height:21px;position:relative;width:22px;top:1px;cursor:pointer;float:left;margin-left:2px}.plus-btn:hover{background:#ededed;border-radius:4px}.minus-btn{box-sizing:border-box;padding:3px;height:21px;position:relative;width:22px;top:1px;cursor:pointer;float:left}.minus-btn:hover{background:#ededed;border-radius:4px}.absui-icon--calendar-month-unselect:before{content:\"\\eb0d\";font-size:16px;line-height:16px;color:#4c4c4c;position:absolute;top:5px;left:4px}.absui-icon--add:before{content:\"\\e145\";font-size:16px;line-height:16px;color:#4c4c4c;position:absolute;top:5px;right:5px}.absui-icon--remove:before{content:\"\\e15b\";font-size:16px;line-height:16px;color:#4c4c4c;position:absolute;top:5px;right:26px}.wapro-date-box{display:inline-block;position:relative;padding-left:2px}.wapro-date-box.dx-widget input,.dx-widget textarea{font-family:Roboto;padding-top:9px;padding-left:2px;font-size:.75rem;line-height:16px;color:#4c4c4c}.wapro-date-box .dx-texteditor-buttons-container>.dx-button.dx-button-has-icon:not(.dx-button-has-text)>.dx-button-content{padding:6px;height:20px;width:18px}.dx-button-mode-text.dx-state-hover,.dx-button-mode-text.dx-state-focused{background-color:#ededed;border-radius:4px}.dx-button-content{margin-left:1px}.no-max-width{max-width:none!important}.disabledBtn{display:none!important}:host ::ng-deep .dx-texteditor-buttons-container>.dx-button{margin:1px 3.5px 1px 1px;border-radius:6px;height:21px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: DxDateBoxModule }, { kind: "component", type: i2$1.DxDateBoxComponent, selector: "dx-date-box", inputs: ["acceptCustomValue", "accessKey", "activeStateEnabled", "adaptivityEnabled", "applyButtonText", "applyValueMode", "buttons", "calendarOptions", "cancelButtonText", "dateOutOfRangeMessage", "dateSerializationFormat", "deferRendering", "disabled", "disabledDates", "displayFormat", "dropDownButtonTemplate", "dropDownOptions", "elementAttr", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "inputAttr", "interval", "invalidDateMessage", "isValid", "label", "labelMode", "max", "maxLength", "min", "name", "opened", "openOnFieldClick", "pickerType", "placeholder", "readOnly", "rtlEnabled", "showAnalogClock", "showClearButton", "showDropDownButton", "spellcheck", "stylingMode", "tabIndex", "text", "todayButtonText", "type", "useMaskBehavior", "validationError", "validationErrors", "validationMessageMode", "validationMessagePosition", "validationStatus", "value", "valueChangeEvent", "visible", "width"], outputs: ["onChange", "onClosed", "onContentReady", "onCopy", "onCut", "onDisposing", "onEnterKey", "onFocusIn", "onFocusOut", "onInitialized", "onInput", "onKeyDown", "onKeyUp", "onOpened", "onOptionChanged", "onPaste", "onValueChanged", "acceptCustomValueChange", "accessKeyChange", "activeStateEnabledChange", "adaptivityEnabledChange", "applyButtonTextChange", "applyValueModeChange", "buttonsChange", "calendarOptionsChange", "cancelButtonTextChange", "dateOutOfRangeMessageChange", "dateSerializationFormatChange", "deferRenderingChange", "disabledChange", "disabledDatesChange", "displayFormatChange", "dropDownButtonTemplateChange", "dropDownOptionsChange", "elementAttrChange", "focusStateEnabledChange", "heightChange", "hintChange", "hoverStateEnabledChange", "inputAttrChange", "intervalChange", "invalidDateMessageChange", "isValidChange", "labelChange", "labelModeChange", "maxChange", "maxLengthChange", "minChange", "nameChange", "openedChange", "openOnFieldClickChange", "pickerTypeChange", "placeholderChange", "readOnlyChange", "rtlEnabledChange", "showAnalogClockChange", "showClearButtonChange", "showDropDownButtonChange", "spellcheckChange", "stylingModeChange", "tabIndexChange", "textChange", "todayButtonTextChange", "typeChange", "useMaskBehaviorChange", "validationErrorChange", "validationErrorsChange", "validationMessageModeChange", "validationMessagePositionChange", "validationStatusChange", "valueChange", "valueChangeEventChange", "visibleChange", "widthChange", "onBlur"] }, { kind: "component", type: i3.DxiButtonComponent, selector: "dxi-button", inputs: ["location", "name", "options", "cssClass", "disabled", "hint", "icon", "onClick", "template", "text", "visible"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
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

class ReplacePipe {
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

class EventService {
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

class ConfirmDialogComponent {
    constructor(event, cd) {
        this.event = event;
        this.cd = cd;
        this.onRemoving = new EventEmitter();
        this.onClosing = new EventEmitter();
        this.onCanceling = new EventEmitter();
        this.onDynamicBtnClicked = new EventEmitter();
        this.nobtn = {};
        this.yesbtn = {};
        this.cancelbtn = {};
        this.dynamicButtons = {};
        this.group = null;
        this.btnConfig = 'yesno';
        this.checkBoxList = []; // lista checkboxów
        this.confirmHeader = '';
        this.confirmText = 'confirmDelete';
        this.disableRefreshShortcut = false;
        this.dynamicBtns = [];
        this.genius = [];
        this.groupMsg = {};
        this.isVisible = false;
        this.kindDialog = 'question';
        this.paramsMsg = {};
        this.radioBoxList = []; // lista radiobuttonow
        this.showIcon = true;
        this.textAligne = '';
        this.title = '';
        this.width = 420;
        this.shortcuts = [];
        this.unicalGuid = new Date().getTime() + Math.round(Math.random() * 10000);
        this.onCancel = () => {
            setTimeout(() => {
                try {
                    this.isVisible = false;
                    this.onCanceling.emit(true);
                }
                catch { }
            }, 0);
        };
        this.onClose = (e) => {
            setTimeout(() => {
                try {
                    this.nobtn.element.nativeElement.blur();
                    this.isVisible = false;
                    this.onClosing.emit(e || true);
                }
                catch { }
            }, 0);
        };
        this.onRemove = () => {
            let ret;
            if (!this.checkBoxList && !this.radioBoxList)
                ret = true;
            if (this.checkBoxList && !this.radioBoxList)
                ret = this.checkBoxList;
            if (!this.checkBoxList && this.radioBoxList)
                ret = this.radioBoxList;
            if (this.checkBoxList && this.radioBoxList)
                ret = {
                    checkBoxList: this.checkBoxList,
                    radioBoxList: this.radioBoxList,
                };
            if (this.groupMsg)
                ret = this.groupMsg;
            this.isVisible = false;
            this.onRemoving.emit(ret);
        };
    }
    ngOnInit() {
        if (!this.width)
            this.width = 420;
        if (!this.title)
            this.title = 'information';
        if (this.kindDialog == 'question')
            this.title = 'nests.types.question';
        if (this.kindDialog == 'error')
            this.title = 'error';
        if (this.kindDialog == 'warning')
            this.title = 'warning';
    }
    setFocus() {
        setTimeout(() => {
            if (this.cancelbtn) {
                this.event.setFocus(this.cancelbtn);
            }
            else {
                this.event.setFocus(this.nobtn);
            }
        }, 300);
    }
    onInit(e) {
        e.component.registerKeyHandler('escape', function () { });
    }
    ngAfterViewInit() {
        this.shortcuts.push({
            key: 'escape',
            allowIn: [AllowIn.Input, AllowIn.Select, AllowIn.Textarea],
            command: () => {
                this.btnConfig == 'yesnocancel' ? this.onCancel() : this.onClose();
            },
            preventDefault: true,
        });
    }
    ngModelChange() {
        if (!this.isVisible)
            this.cd.detectChanges();
        if (this.isVisible && this.dynamicBtns) {
            setTimeout(() => {
                this.dynamicButtons?.last?.nativeElement?.firstElementChild?.focus();
            }, 600);
        }
    }
    ngOnDestroy() {
        this.event.onHiddenPopUp(this.unicalGuid);
    }
    onDynamicBtnClick(e) {
        switch (e.action) {
            case 'defaultConfirm':
                this.onRemove();
                break;
            case 'defaultClose':
                this.onClose();
                break;
            case 'defaultCancel':
                this.onCancel();
                break;
            default:
                this.onDynamicBtnClicked.emit(e.action);
                break;
        }
    }
    disabledButton(check) {
        return check.disabled;
    }
    checkValue(check) {
        return check.value;
    }
    onDynamicBtnArrowLeft(i) {
        if (i > 0) {
            let btnToFocus = document.getElementById('btn' + (i - 1) + this.unicalGuid);
            if (btnToFocus) {
                btnToFocus.focus();
            }
        }
    }
    onDynamicBtnArrowRight(i) {
        if (i < this.dynamicBtns.length - 1) {
            let btnToFocus = document.getElementById('btn' + (i + 1) + this.unicalGuid);
            if (btnToFocus) {
                btnToFocus.focus();
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: ConfirmDialogComponent, deps: [{ token: EventService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.5", type: ConfirmDialogComponent, isStandalone: true, selector: "app-confirm-dialog", inputs: { btnConfig: "btnConfig", checkBoxList: "checkBoxList", confirmHeader: "confirmHeader", confirmText: "confirmText", disableRefreshShortcut: "disableRefreshShortcut", dynamicBtns: "dynamicBtns", genius: "genius", groupMsg: "groupMsg", isVisible: "isVisible", kindDialog: "kindDialog", paramsMsg: "paramsMsg", radioBoxList: "radioBoxList", showIcon: "showIcon", textAligne: "textAligne", title: "title", width: "width" }, outputs: { onRemoving: "onRemoving", onClosing: "onClosing", onCanceling: "onCanceling", onDynamicBtnClicked: "onDynamicBtnClicked" }, viewQueries: [{ propertyName: "nobtn", first: true, predicate: ["nobtn"], descendants: true }, { propertyName: "yesbtn", first: true, predicate: ["yesbtn"], descendants: true }, { propertyName: "cancelbtn", first: true, predicate: ["cancelbtn"], descendants: true }, { propertyName: "dynamicButtons", predicate: ["dynamicButtons"], descendants: true }], ngImport: i0, template: "<dx-popup\n  [width]=\"width\"\n  height=\"auto\"\n  position=\"center\"\n  [animation]=\"{\n    show: { type: 'slideIn', direction: 'bottom' },\n    hide: { type: 'slideOut', direction: 'bottom' }\n  }\"\n  [showTitle]=\"false\"\n  [title]=\"title | translate\"\n  [(visible)]=\"isVisible\"\n  (visibleChange)=\"ngModelChange()\"\n  (onShowing)=\"event.onShownPopUp(unicalGuid)\"\n  (onShown)=\"setFocus()\"\n  (onHiding)=\"event.onHiddenPopUp(unicalGuid)\"\n  [wrapperAttr]=\"{ id: unicalGuid, class: 'confirm-dialog-wapro' }\"\n  (onInitialized)=\"onInit($event)\"\n  [minWidth]=\"420\"\n>\n  <div *dxTemplate=\"let content of 'content'\">\n    <div class=\"dialog-body\">\n      <div\n        class=\"dialog-icon\"\n        [ngClass]=\"{\n          'confirme-warning': kindDialog == 'warning',\n          'confirme-information': kindDialog == 'information',\n          'confirme-question': kindDialog == 'question',\n          'confirme-delete': kindDialog == 'error' || showIcon,\n          'no-width': !showIcon && !kindDialog\n        }\"\n        *ngIf=\"!groupMsg && confirmText\"\n      ></div>\n      <div\n        class=\"dialog-main-text\"\n        [ngClass]=\"{ 'width-all': !showIcon && !kindDialog }\"\n      >\n        <p\n          class=\"confirmHeader confirm-dialog-header\"\n          *ngIf=\"confirmHeader\"\n          [innerHTML]=\"confirmHeader | translate | replace : '[|]' : '<br>'\"\n        ></p>\n        <p\n          class=\"confirmMsg\"\n          [innerHTML]=\"\n            confirmText | translate : paramsMsg | replace : '[|]' : '<br>'\n          \"\n          *ngIf=\"!genius\"\n        ></p>\n\n        <ng-container *ngIf=\"groupMsg\">\n          <p\n            *ngIf=\"groupMsg.textInfo\"\n            [innerHTML]=\"groupMsg.textInfo | translate\"\n            style=\"margin-bottom: 10px\"\n          ></p>\n          <div\n            *ngFor=\"let group of groupMsg.list; let i = index\"\n            style=\"display: table\"\n          >\n            <div style=\"float: left; width: 30px\">\n              <i\n                class=\"icon\"\n                [ngClass]=\"{\n                  'number-1': i == 0,\n                  'number-2': i == 1,\n                  'number-3': i == 2,\n                  'number-4': i == 3,\n                  'number-5': i == 4,\n                  'number-6': i == 5,\n                  'number-7': i == 6,\n                  'number-8': i == 7,\n                  'number-9': i == 8\n                }\"\n              ></i>\n            </div>\n            <div\n              style=\"\n                display: table-cell;\n                vertical-align: middle;\n                width: calc(100% - 30px);\n                box-sizing: border-box;\n                padding-left: 10px;\n              \"\n            >\n              <p\n                [innerHTML]=\"group.textMsg | translate\"\n                style=\"margin-bottom: 0px\"\n              ></p>\n              <div *ngIf=\"group.readMore\" class=\"readMoreClose\">\n                <p *ngIf=\"group.isOpen\" style=\"margin-top: 15px\">\n                  {{ group.readMore.textMsg | translate }}\n                </p>\n\n                <div *ngIf=\"group.isOpen\" style=\"margin-top: 15px\">\n                  <div *ngFor=\"let check of group.readMore.checkBoxList\">\n                    <dx-check-box\n                      text=\"{{ check.text | translate }}\"\n                      width=\"100%\"\n                      [value]=\"checkValue(check)\"\n                      [readOnly]=\"check.readOnly\"\n                      [disabled]=\"disabledButton(check)\"\n                    >\n                    </dx-check-box\n                    ><br />\n                  </div>\n                  <div\n                    *ngFor=\"let radio of group.readMore.radioBoxList\"\n                    style=\"margin-top: 15px\"\n                  >\n                    <div class=\"c-frame-row\">\n                      <h5>{{ radio.text | translate }}</h5>\n                    </div>\n                    <dx-radio-group\n                      [items]=\"radio.items\"\n                      [layout]=\"radio.layout\"\n                      [readOnly]=\"radio.readOnly\"\n                      [disabled]=\"disabledButton(radio)\"\n                      [(value)]=\"radio.value\"\n                      displayExpr=\"label\"\n                      valueExpr=\"value\"\n                      style=\"margin-left: -5px\"\n                    >\n                    </dx-radio-group>\n                  </div>\n                </div>\n\n                <p class=\"readMore\" (click)=\"group.isOpen = !group.isOpen\">\n                  <i\n                    class=\"icon\"\n                    style=\"position: relative; top: 4px\"\n                    [ngClass]=\"{\n                      'absui-icon--arrow-drop-down-box': !group.isOpen,\n                      'dx-icon-spinup': group.isOpen\n                    }\"\n                  ></i>\n                  {{ \"inventory.readMore\" | translate }}\n                </p>\n              </div>\n            </div>\n          </div>\n\n          <div\n            *ngIf=\"\n              (groupMsg && groupMsg.checkBoxList) ||\n              (group && group.radioBoxList)\n            \"\n            style=\"\n              float: left;\n              width: 100%;\n              padding-left: 37px;\n              margin-top: 5px;\n              margin-bottom: 20px;\n            \"\n          >\n            <div *ngFor=\"let check of groupMsg.checkBoxList\">\n              <dx-check-box\n                text=\"{{ check.text | translate }}\"\n                width=\"100%\"\n                [value]=\"checkValue(check)\"\n                [readOnly]=\"check.readOnly\"\n                [disabled]=\"disabledButton(check)\"\n              >\n              </dx-check-box\n              ><br />\n            </div>\n\n            <div\n              *ngFor=\"let radio of groupMsg.radioBoxList\"\n              style=\"margin-top: 15px\"\n            >\n              <div class=\"c-frame-row\">\n                <h5>{{ radio.text | translate }}</h5>\n              </div>\n              <dx-radio-group\n                [items]=\"radio.items\"\n                [layout]=\"radio.layout\"\n                [readOnly]=\"radio.readOnly\"\n                [(value)]=\"radio.value\"\n                displayExpr=\"label\"\n                valueExpr=\"value\"\n                style=\"margin-left: -5px\"\n                [disabled]=\"disabledButton(radio)\"\n              >\n              </dx-radio-group>\n            </div>\n          </div>\n\n          <p class=\"confirmMsg\" *ngIf=\"groupMsg.questionMsg\">\n            {{ groupMsg.questionMsg | translate }}\n          </p>\n        </ng-container>\n\n        <ng-container *ngIf=\"checkBoxList || radioBoxList\">\n          <div *ngFor=\"let check of checkBoxList\">\n            <dx-check-box\n              text=\"{{ check.text | translate }}\"\n              width=\"100%\"\n              [value]=\"checkValue(check)\"\n              [readOnly]=\"check.readOnly\"\n              [disabled]=\"disabledButton(check)\"\n            >\n            </dx-check-box\n            ><br />\n          </div>\n\n          <div\n            *ngFor=\"let radio of radioBoxList; let index = index\"\n            [ngStyle]=\"{ 'margin-top': index > 0 ? '15px' : 0 }\"\n          >\n            <div class=\"c-frame-row\">\n              <h5 *ngIf=\"radio.text\">{{ radio.text | translate }}</h5>\n            </div>\n            <dx-radio-group\n              [items]=\"radio.items\"\n              [layout]=\"radio.layout\"\n              [readOnly]=\"radio.readOnly\"\n              [(value)]=\"radio.value\"\n              displayExpr=\"label\"\n              valueExpr=\"value\"\n              style=\"margin-left: -5px\"\n              [disabled]=\"disabledButton(radio)\"\n            >\n            </dx-radio-group>\n          </div>\n        </ng-container>\n\n        <div *ngIf=\"genius\">\n          <div class=\"genius-group\" *ngFor=\"let group of genius\">\n            <div class=\"genius-item\" *ngFor=\"let item of group.items\">\n              <div class=\"genius-description\">\n                {{ item.description | translate }}:\n              </div>\n              <div\n                class=\"genius-value\"\n                [ngClass]=\"{ highlighted: item?.highlighted }\"\n              >\n                {{ item.value }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"dialog-footer\">\n      <ng-container *ngIf=\"genius\">\n        <img\n          src=\"../../../assets/img/powered_by-dark.svg\"\n          alt=\"Powered by Genius\"\n          height=\"26\"\n          style=\"margin: 0 auto auto 44px\"\n        />\n      </ng-container>\n      <ng-container *ngIf=\"!btnConfig\">\n        <dx-button\n          type=\"success\"\n          stylingMode=\"contained\"\n          [text]=\"'yes' | translate\"\n          (onClick)=\"onRemove()\"\n          [id]=\"'confirm' + unicalGuid\"\n          #yesbtn\n          (keydown.arrowright)=\"event.setFocus(nobtn)\"\n        >\n        </dx-button>\n        <dx-button\n          type=\"danger\"\n          stylingMode=\"contained\"\n          [text]=\"'no' | translate\"\n          (onClick)=\"onClose()\"\n          #nobtn\n          (keydown.arrowleft)=\"event.setFocus(yesbtn)\"\n        ></dx-button>\n      </ng-container>\n      <ng-container *ngIf=\"btnConfig == 'close'\">\n        <dx-button\n          type=\"danger\"\n          stylingMode=\"contained\"\n          [text]=\"'buttons.close' | translate\"\n          (onClick)=\"onClose()\"\n          #nobtn\n        >\n        </dx-button>\n      </ng-container>\n      <ng-container *ngIf=\"btnConfig == 'saveCancel'\">\n        <dx-button\n          type=\"success\"\n          stylingMode=\"contained\"\n          [text]=\"'buttons.save' | translate\"\n          (onClick)=\"onRemove()\"\n          [id]=\"'save' + unicalGuid\"\n          (keydown.arrowright)=\"event.setFocus(nobtn)\"\n          #yesbtn\n        >\n        </dx-button>\n        <dx-button\n          type=\"danger\"\n          stylingMode=\"contained\"\n          [text]=\"'buttons.cancel' | translate\"\n          (onClick)=\"onClose()\"\n          #nobtn\n          (keydown.arrowleft)=\"event.setFocus(yesbtn)\"\n        ></dx-button>\n      </ng-container>\n      <ng-container *ngIf=\"btnConfig == 'yesnocancel' || btnConfig == 'yesno'\">\n        <dx-button\n          type=\"success\"\n          stylingMode=\"contained\"\n          [text]=\"'yes' | translate\"\n          (onClick)=\"onRemove()\"\n          [id]=\"'confirm' + unicalGuid\"\n          #yesbtn\n          (keydown.arrowright)=\"event.setFocus(nobtn)\"\n        >\n        </dx-button>\n        <dx-button\n          [text]=\"'no' | translate\"\n          type=\"danger\"\n          stylingMode=\"contained\"\n          (onClick)=\"onClose()\"\n          #nobtn\n          (keydown.arrowleft)=\"event.setFocus(yesbtn)\"\n          (keydown.arrowright)=\"event.setFocus(cancelbtn)\"\n        >\n        </dx-button>\n        <dx-button\n          type=\"danger\"\n          stylingMode=\"contained\"\n          [text]=\"'buttons.cancel' | translate\"\n          (onClick)=\"onCancel()\"\n          #cancelbtn\n          (keydown.arrowleft)=\"event.setFocus(nobtn)\"\n          *ngIf=\"btnConfig == 'yesnocancel'\"\n        >\n        </dx-button>\n      </ng-container>\n      <ng-container *ngIf=\"btnConfig == 'continuegiveup'\">\n        <dx-button\n          type=\"success\"\n          stylingMode=\"contained\"\n          [text]=\"'buttons.continue' | translate\"\n          (onClick)=\"onRemove()\"\n          [id]=\"'confirm' + unicalGuid\"\n          #yesbtn\n          (keydown.arrowright)=\"event.setFocus(nobtn)\"\n        >\n        </dx-button>\n        <dx-button\n          type=\"danger\"\n          stylingMode=\"contained\"\n          [text]=\"'buttons.giveup' | translate\"\n          (onClick)=\"onClose()\"\n          #nobtn\n          (keydown.arrowleft)=\"event.setFocus(yesbtn)\"\n        >\n        </dx-button>\n      </ng-container>\n      <ng-container *ngIf=\"btnConfig == 'substitutes'\">\n        <dx-button\n          type=\"success\"\n          stylingMode=\"contained\"\n          [text]=\"'substitutes.checkSubstitutes' | translate\"\n          (onClick)=\"onRemove()\"\n          [id]=\"'confirm' + unicalGuid\"\n          #yesbtn\n          (keydown.arrowright)=\"event.setFocus(nobtn)\"\n        >\n        </dx-button>\n        <dx-button\n          type=\"danger\"\n          stylingMode=\"contained\"\n          [text]=\"'buttons.cancel' | translate\"\n          (onClick)=\"onClose()\"\n          #nobtn\n          (keydown.arrowleft)=\"event.setFocus(yesbtn)\"\n        >\n        </dx-button>\n      </ng-container>\n      <ng-container *ngIf=\"btnConfig == 'groupedReport'\">\n        <dx-button\n          type=\"success\"\n          stylingMode=\"contained\"\n          [text]=\"'print' | translate\"\n          (onClick)=\"onClose('print')\"\n          [id]=\"'confirm' + unicalGuid\"\n          #printbtn\n          (keydown.arrowright)=\"event.setFocus(emailbtn)\"\n        >\n        </dx-button>\n        <dx-button\n          type=\"danger\"\n          stylingMode=\"contained\"\n          [text]=\"'sendEmail' | translate\"\n          (onClick)=\"onClose('email')\"\n          #emailbtn\n          (keydown.arrowleft)=\"event.setFocus(printbtn)\"\n          (keydown.arrowright)=\"event.setFocus(pdfbtn)\"\n        >\n        </dx-button>\n        <dx-button\n          type=\"danger\"\n          stylingMode=\"contained\"\n          [text]=\"'savePdf' | translate\"\n          (onClick)=\"onClose('savePdf')\"\n          #pdfbtn\n          (keydown.arrowleft)=\"event.setFocus(emailbtn)\"\n          (keydown.arrowright)=\"event.setFocus(edocsbtn)\"\n        >\n        </dx-button>\n        <dx-button\n          type=\"danger\"\n          stylingMode=\"contained\"\n          [text]=\"'toEdocuments' | translate\"\n          (onClick)=\"onClose('eDocuments')\"\n          #edocsbtn\n          (keydown.arrowleft)=\"event.setFocus(pdfbtn)\"\n          (keydown.arrowright)=\"event.setFocus(nobtn)\"\n        >\n        </dx-button>\n        <dx-button\n          type=\"danger\"\n          stylingMode=\"contained\"\n          [text]=\"'buttons.cancel' | translate\"\n          (onClick)=\"onClose('cancel')\"\n          #nobtn\n          (keydown.arrowleft)=\"event.setFocus(edocsbtn)\"\n        >\n        </dx-button>\n      </ng-container>\n      <ng-container *ngIf=\"btnConfig == 'dynamicContent'\">\n        <div *ngFor=\"let btn of dynamicBtns; let i = index\" #dynamicButtons>\n          <dx-button\n            [type]=\"btn.type\"\n            stylingMode=\"contained\"\n            [text]=\"btn.text\"\n            (onClick)=\"onDynamicBtnClick(btn)\"\n            [id]=\"'btn' + i + unicalGuid\"\n            (keydown.arrowleft)=\"onDynamicBtnArrowLeft(i)\"\n            (keydown.arrowright)=\"onDynamicBtnArrowRight(i)\"\n          >\n          </dx-button>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</dx-popup>\n\n<!-- [unicalGuid]=\"unicalGuid\" -->\n<ng-keyboard-shortcuts [shortcuts]=\"shortcuts\" [disabled]=\"!isVisible\">\n</ng-keyboard-shortcuts>\n", styles: [".confirme-warning,.confirme-delete,.confirme-question,.confirme-information{font-family:Lumen;font-size:1.875rem;line-height:30px;vertical-align:middle}.confirme-delete:before{color:#bc1a22;content:\"\\e888\"}.confirme-warning:before{color:#a86800;content:\"\\e002\"}.confirme-information:before{color:#0074ad;content:\"\\e88f\"}.confirme-question:before{color:#4c4c4c;content:\"\\e8fd\"}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "ngmodule", type: DxPopupModule }, { kind: "component", type: i3$1.DxPopupComponent, selector: "dx-popup", inputs: ["accessKey", "animation", "closeOnOutsideClick", "container", "contentTemplate", "copyRootClassesToWrapper", "deferRendering", "disabled", "dragAndResizeArea", "dragEnabled", "dragOutsideBoundary", "elementAttr", "enableBodyScroll", "focusStateEnabled", "fullScreen", "height", "hideOnOutsideClick", "hideOnParentScroll", "hint", "hoverStateEnabled", "maxHeight", "maxWidth", "minHeight", "minWidth", "position", "resizeEnabled", "restorePosition", "rtlEnabled", "shading", "shadingColor", "showCloseButton", "showTitle", "tabIndex", "title", "titleTemplate", "toolbarItems", "visible", "width", "wrapperAttr"], outputs: ["onContentReady", "onDisposing", "onHidden", "onHiding", "onInitialized", "onOptionChanged", "onResize", "onResizeEnd", "onResizeStart", "onShowing", "onShown", "onTitleRendered", "accessKeyChange", "animationChange", "closeOnOutsideClickChange", "containerChange", "contentTemplateChange", "copyRootClassesToWrapperChange", "deferRenderingChange", "disabledChange", "dragAndResizeAreaChange", "dragEnabledChange", "dragOutsideBoundaryChange", "elementAttrChange", "enableBodyScrollChange", "focusStateEnabledChange", "fullScreenChange", "heightChange", "hideOnOutsideClickChange", "hideOnParentScrollChange", "hintChange", "hoverStateEnabledChange", "maxHeightChange", "maxWidthChange", "minHeightChange", "minWidthChange", "positionChange", "resizeEnabledChange", "restorePositionChange", "rtlEnabledChange", "shadingChange", "shadingColorChange", "showCloseButtonChange", "showTitleChange", "tabIndexChange", "titleChange", "titleTemplateChange", "toolbarItemsChange", "visibleChange", "widthChange", "wrapperAttrChange"] }, { kind: "directive", type: i4.DxTemplateDirective, selector: "[dxTemplate]", inputs: ["dxTemplateOf"] }, { kind: "ngmodule", type: DxButtonModule }, { kind: "component", type: i3$1.DxButtonComponent, selector: "dx-button", inputs: ["accessKey", "activeStateEnabled", "disabled", "elementAttr", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "icon", "rtlEnabled", "stylingMode", "tabIndex", "template", "text", "type", "useSubmitBehavior", "validationGroup", "visible", "width"], outputs: ["onClick", "onContentReady", "onDisposing", "onInitialized", "onOptionChanged", "accessKeyChange", "activeStateEnabledChange", "disabledChange", "elementAttrChange", "focusStateEnabledChange", "heightChange", "hintChange", "hoverStateEnabledChange", "iconChange", "rtlEnabledChange", "stylingModeChange", "tabIndexChange", "templateChange", "textChange", "typeChange", "useSubmitBehaviorChange", "validationGroupChange", "visibleChange", "widthChange"] }, { kind: "ngmodule", type: DxRadioGroupModule }, { kind: "component", type: i3$1.DxRadioGroupComponent, selector: "dx-radio-group", inputs: ["accessKey", "activeStateEnabled", "dataSource", "disabled", "displayExpr", "elementAttr", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "isValid", "items", "itemTemplate", "layout", "name", "readOnly", "rtlEnabled", "tabIndex", "validationError", "validationErrors", "validationMessageMode", "validationMessagePosition", "validationStatus", "value", "valueExpr", "visible", "width"], outputs: ["onContentReady", "onDisposing", "onInitialized", "onOptionChanged", "onValueChanged", "accessKeyChange", "activeStateEnabledChange", "dataSourceChange", "disabledChange", "displayExprChange", "elementAttrChange", "focusStateEnabledChange", "heightChange", "hintChange", "hoverStateEnabledChange", "isValidChange", "itemsChange", "itemTemplateChange", "layoutChange", "nameChange", "readOnlyChange", "rtlEnabledChange", "tabIndexChange", "validationErrorChange", "validationErrorsChange", "validationMessageModeChange", "validationMessagePositionChange", "validationStatusChange", "valueChange", "valueExprChange", "visibleChange", "widthChange", "onBlur"] }, { kind: "ngmodule", type: DxCheckBoxModule }, { kind: "component", type: i3$1.DxCheckBoxComponent, selector: "dx-check-box", inputs: ["accessKey", "activeStateEnabled", "disabled", "elementAttr", "enableThreeStateBehavior", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "iconSize", "isValid", "name", "readOnly", "rtlEnabled", "tabIndex", "text", "validationError", "validationErrors", "validationMessageMode", "validationMessagePosition", "validationStatus", "value", "visible", "width"], outputs: ["onContentReady", "onDisposing", "onInitialized", "onOptionChanged", "onValueChanged", "accessKeyChange", "activeStateEnabledChange", "disabledChange", "elementAttrChange", "enableThreeStateBehaviorChange", "focusStateEnabledChange", "heightChange", "hintChange", "hoverStateEnabledChange", "iconSizeChange", "isValidChange", "nameChange", "readOnlyChange", "rtlEnabledChange", "tabIndexChange", "textChange", "validationErrorChange", "validationErrorsChange", "validationMessageModeChange", "validationMessagePositionChange", "validationStatusChange", "valueChange", "visibleChange", "widthChange", "onBlur"] }, { kind: "pipe", type: ReplacePipe, name: "replace" }, { kind: "ngmodule", type: KeyboardShortcutsModule }, { kind: "component", type: i5.KeyboardShortcutsComponent, selector: "ng-keyboard-shortcuts", inputs: ["shortcuts", "disabled"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i6.TranslatePipe, name: "translate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: ConfirmDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-confirm-dialog', standalone: true, imports: [
                        CommonModule,
                        DxPopupModule,
                        DxButtonModule,
                        DxRadioGroupModule,
                        DxCheckBoxModule,
                        ReplacePipe,
                        KeyboardShortcutsModule,
                        TranslateModule,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<dx-popup\n  [width]=\"width\"\n  height=\"auto\"\n  position=\"center\"\n  [animation]=\"{\n    show: { type: 'slideIn', direction: 'bottom' },\n    hide: { type: 'slideOut', direction: 'bottom' }\n  }\"\n  [showTitle]=\"false\"\n  [title]=\"title | translate\"\n  [(visible)]=\"isVisible\"\n  (visibleChange)=\"ngModelChange()\"\n  (onShowing)=\"event.onShownPopUp(unicalGuid)\"\n  (onShown)=\"setFocus()\"\n  (onHiding)=\"event.onHiddenPopUp(unicalGuid)\"\n  [wrapperAttr]=\"{ id: unicalGuid, class: 'confirm-dialog-wapro' }\"\n  (onInitialized)=\"onInit($event)\"\n  [minWidth]=\"420\"\n>\n  <div *dxTemplate=\"let content of 'content'\">\n    <div class=\"dialog-body\">\n      <div\n        class=\"dialog-icon\"\n        [ngClass]=\"{\n          'confirme-warning': kindDialog == 'warning',\n          'confirme-information': kindDialog == 'information',\n          'confirme-question': kindDialog == 'question',\n          'confirme-delete': kindDialog == 'error' || showIcon,\n          'no-width': !showIcon && !kindDialog\n        }\"\n        *ngIf=\"!groupMsg && confirmText\"\n      ></div>\n      <div\n        class=\"dialog-main-text\"\n        [ngClass]=\"{ 'width-all': !showIcon && !kindDialog }\"\n      >\n        <p\n          class=\"confirmHeader confirm-dialog-header\"\n          *ngIf=\"confirmHeader\"\n          [innerHTML]=\"confirmHeader | translate | replace : '[|]' : '<br>'\"\n        ></p>\n        <p\n          class=\"confirmMsg\"\n          [innerHTML]=\"\n            confirmText | translate : paramsMsg | replace : '[|]' : '<br>'\n          \"\n          *ngIf=\"!genius\"\n        ></p>\n\n        <ng-container *ngIf=\"groupMsg\">\n          <p\n            *ngIf=\"groupMsg.textInfo\"\n            [innerHTML]=\"groupMsg.textInfo | translate\"\n            style=\"margin-bottom: 10px\"\n          ></p>\n          <div\n            *ngFor=\"let group of groupMsg.list; let i = index\"\n            style=\"display: table\"\n          >\n            <div style=\"float: left; width: 30px\">\n              <i\n                class=\"icon\"\n                [ngClass]=\"{\n                  'number-1': i == 0,\n                  'number-2': i == 1,\n                  'number-3': i == 2,\n                  'number-4': i == 3,\n                  'number-5': i == 4,\n                  'number-6': i == 5,\n                  'number-7': i == 6,\n                  'number-8': i == 7,\n                  'number-9': i == 8\n                }\"\n              ></i>\n            </div>\n            <div\n              style=\"\n                display: table-cell;\n                vertical-align: middle;\n                width: calc(100% - 30px);\n                box-sizing: border-box;\n                padding-left: 10px;\n              \"\n            >\n              <p\n                [innerHTML]=\"group.textMsg | translate\"\n                style=\"margin-bottom: 0px\"\n              ></p>\n              <div *ngIf=\"group.readMore\" class=\"readMoreClose\">\n                <p *ngIf=\"group.isOpen\" style=\"margin-top: 15px\">\n                  {{ group.readMore.textMsg | translate }}\n                </p>\n\n                <div *ngIf=\"group.isOpen\" style=\"margin-top: 15px\">\n                  <div *ngFor=\"let check of group.readMore.checkBoxList\">\n                    <dx-check-box\n                      text=\"{{ check.text | translate }}\"\n                      width=\"100%\"\n                      [value]=\"checkValue(check)\"\n                      [readOnly]=\"check.readOnly\"\n                      [disabled]=\"disabledButton(check)\"\n                    >\n                    </dx-check-box\n                    ><br />\n                  </div>\n                  <div\n                    *ngFor=\"let radio of group.readMore.radioBoxList\"\n                    style=\"margin-top: 15px\"\n                  >\n                    <div class=\"c-frame-row\">\n                      <h5>{{ radio.text | translate }}</h5>\n                    </div>\n                    <dx-radio-group\n                      [items]=\"radio.items\"\n                      [layout]=\"radio.layout\"\n                      [readOnly]=\"radio.readOnly\"\n                      [disabled]=\"disabledButton(radio)\"\n                      [(value)]=\"radio.value\"\n                      displayExpr=\"label\"\n                      valueExpr=\"value\"\n                      style=\"margin-left: -5px\"\n                    >\n                    </dx-radio-group>\n                  </div>\n                </div>\n\n                <p class=\"readMore\" (click)=\"group.isOpen = !group.isOpen\">\n                  <i\n                    class=\"icon\"\n                    style=\"position: relative; top: 4px\"\n                    [ngClass]=\"{\n                      'absui-icon--arrow-drop-down-box': !group.isOpen,\n                      'dx-icon-spinup': group.isOpen\n                    }\"\n                  ></i>\n                  {{ \"inventory.readMore\" | translate }}\n                </p>\n              </div>\n            </div>\n          </div>\n\n          <div\n            *ngIf=\"\n              (groupMsg && groupMsg.checkBoxList) ||\n              (group && group.radioBoxList)\n            \"\n            style=\"\n              float: left;\n              width: 100%;\n              padding-left: 37px;\n              margin-top: 5px;\n              margin-bottom: 20px;\n            \"\n          >\n            <div *ngFor=\"let check of groupMsg.checkBoxList\">\n              <dx-check-box\n                text=\"{{ check.text | translate }}\"\n                width=\"100%\"\n                [value]=\"checkValue(check)\"\n                [readOnly]=\"check.readOnly\"\n                [disabled]=\"disabledButton(check)\"\n              >\n              </dx-check-box\n              ><br />\n            </div>\n\n            <div\n              *ngFor=\"let radio of groupMsg.radioBoxList\"\n              style=\"margin-top: 15px\"\n            >\n              <div class=\"c-frame-row\">\n                <h5>{{ radio.text | translate }}</h5>\n              </div>\n              <dx-radio-group\n                [items]=\"radio.items\"\n                [layout]=\"radio.layout\"\n                [readOnly]=\"radio.readOnly\"\n                [(value)]=\"radio.value\"\n                displayExpr=\"label\"\n                valueExpr=\"value\"\n                style=\"margin-left: -5px\"\n                [disabled]=\"disabledButton(radio)\"\n              >\n              </dx-radio-group>\n            </div>\n          </div>\n\n          <p class=\"confirmMsg\" *ngIf=\"groupMsg.questionMsg\">\n            {{ groupMsg.questionMsg | translate }}\n          </p>\n        </ng-container>\n\n        <ng-container *ngIf=\"checkBoxList || radioBoxList\">\n          <div *ngFor=\"let check of checkBoxList\">\n            <dx-check-box\n              text=\"{{ check.text | translate }}\"\n              width=\"100%\"\n              [value]=\"checkValue(check)\"\n              [readOnly]=\"check.readOnly\"\n              [disabled]=\"disabledButton(check)\"\n            >\n            </dx-check-box\n            ><br />\n          </div>\n\n          <div\n            *ngFor=\"let radio of radioBoxList; let index = index\"\n            [ngStyle]=\"{ 'margin-top': index > 0 ? '15px' : 0 }\"\n          >\n            <div class=\"c-frame-row\">\n              <h5 *ngIf=\"radio.text\">{{ radio.text | translate }}</h5>\n            </div>\n            <dx-radio-group\n              [items]=\"radio.items\"\n              [layout]=\"radio.layout\"\n              [readOnly]=\"radio.readOnly\"\n              [(value)]=\"radio.value\"\n              displayExpr=\"label\"\n              valueExpr=\"value\"\n              style=\"margin-left: -5px\"\n              [disabled]=\"disabledButton(radio)\"\n            >\n            </dx-radio-group>\n          </div>\n        </ng-container>\n\n        <div *ngIf=\"genius\">\n          <div class=\"genius-group\" *ngFor=\"let group of genius\">\n            <div class=\"genius-item\" *ngFor=\"let item of group.items\">\n              <div class=\"genius-description\">\n                {{ item.description | translate }}:\n              </div>\n              <div\n                class=\"genius-value\"\n                [ngClass]=\"{ highlighted: item?.highlighted }\"\n              >\n                {{ item.value }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"dialog-footer\">\n      <ng-container *ngIf=\"genius\">\n        <img\n          src=\"../../../assets/img/powered_by-dark.svg\"\n          alt=\"Powered by Genius\"\n          height=\"26\"\n          style=\"margin: 0 auto auto 44px\"\n        />\n      </ng-container>\n      <ng-container *ngIf=\"!btnConfig\">\n        <dx-button\n          type=\"success\"\n          stylingMode=\"contained\"\n          [text]=\"'yes' | translate\"\n          (onClick)=\"onRemove()\"\n          [id]=\"'confirm' + unicalGuid\"\n          #yesbtn\n          (keydown.arrowright)=\"event.setFocus(nobtn)\"\n        >\n        </dx-button>\n        <dx-button\n          type=\"danger\"\n          stylingMode=\"contained\"\n          [text]=\"'no' | translate\"\n          (onClick)=\"onClose()\"\n          #nobtn\n          (keydown.arrowleft)=\"event.setFocus(yesbtn)\"\n        ></dx-button>\n      </ng-container>\n      <ng-container *ngIf=\"btnConfig == 'close'\">\n        <dx-button\n          type=\"danger\"\n          stylingMode=\"contained\"\n          [text]=\"'buttons.close' | translate\"\n          (onClick)=\"onClose()\"\n          #nobtn\n        >\n        </dx-button>\n      </ng-container>\n      <ng-container *ngIf=\"btnConfig == 'saveCancel'\">\n        <dx-button\n          type=\"success\"\n          stylingMode=\"contained\"\n          [text]=\"'buttons.save' | translate\"\n          (onClick)=\"onRemove()\"\n          [id]=\"'save' + unicalGuid\"\n          (keydown.arrowright)=\"event.setFocus(nobtn)\"\n          #yesbtn\n        >\n        </dx-button>\n        <dx-button\n          type=\"danger\"\n          stylingMode=\"contained\"\n          [text]=\"'buttons.cancel' | translate\"\n          (onClick)=\"onClose()\"\n          #nobtn\n          (keydown.arrowleft)=\"event.setFocus(yesbtn)\"\n        ></dx-button>\n      </ng-container>\n      <ng-container *ngIf=\"btnConfig == 'yesnocancel' || btnConfig == 'yesno'\">\n        <dx-button\n          type=\"success\"\n          stylingMode=\"contained\"\n          [text]=\"'yes' | translate\"\n          (onClick)=\"onRemove()\"\n          [id]=\"'confirm' + unicalGuid\"\n          #yesbtn\n          (keydown.arrowright)=\"event.setFocus(nobtn)\"\n        >\n        </dx-button>\n        <dx-button\n          [text]=\"'no' | translate\"\n          type=\"danger\"\n          stylingMode=\"contained\"\n          (onClick)=\"onClose()\"\n          #nobtn\n          (keydown.arrowleft)=\"event.setFocus(yesbtn)\"\n          (keydown.arrowright)=\"event.setFocus(cancelbtn)\"\n        >\n        </dx-button>\n        <dx-button\n          type=\"danger\"\n          stylingMode=\"contained\"\n          [text]=\"'buttons.cancel' | translate\"\n          (onClick)=\"onCancel()\"\n          #cancelbtn\n          (keydown.arrowleft)=\"event.setFocus(nobtn)\"\n          *ngIf=\"btnConfig == 'yesnocancel'\"\n        >\n        </dx-button>\n      </ng-container>\n      <ng-container *ngIf=\"btnConfig == 'continuegiveup'\">\n        <dx-button\n          type=\"success\"\n          stylingMode=\"contained\"\n          [text]=\"'buttons.continue' | translate\"\n          (onClick)=\"onRemove()\"\n          [id]=\"'confirm' + unicalGuid\"\n          #yesbtn\n          (keydown.arrowright)=\"event.setFocus(nobtn)\"\n        >\n        </dx-button>\n        <dx-button\n          type=\"danger\"\n          stylingMode=\"contained\"\n          [text]=\"'buttons.giveup' | translate\"\n          (onClick)=\"onClose()\"\n          #nobtn\n          (keydown.arrowleft)=\"event.setFocus(yesbtn)\"\n        >\n        </dx-button>\n      </ng-container>\n      <ng-container *ngIf=\"btnConfig == 'substitutes'\">\n        <dx-button\n          type=\"success\"\n          stylingMode=\"contained\"\n          [text]=\"'substitutes.checkSubstitutes' | translate\"\n          (onClick)=\"onRemove()\"\n          [id]=\"'confirm' + unicalGuid\"\n          #yesbtn\n          (keydown.arrowright)=\"event.setFocus(nobtn)\"\n        >\n        </dx-button>\n        <dx-button\n          type=\"danger\"\n          stylingMode=\"contained\"\n          [text]=\"'buttons.cancel' | translate\"\n          (onClick)=\"onClose()\"\n          #nobtn\n          (keydown.arrowleft)=\"event.setFocus(yesbtn)\"\n        >\n        </dx-button>\n      </ng-container>\n      <ng-container *ngIf=\"btnConfig == 'groupedReport'\">\n        <dx-button\n          type=\"success\"\n          stylingMode=\"contained\"\n          [text]=\"'print' | translate\"\n          (onClick)=\"onClose('print')\"\n          [id]=\"'confirm' + unicalGuid\"\n          #printbtn\n          (keydown.arrowright)=\"event.setFocus(emailbtn)\"\n        >\n        </dx-button>\n        <dx-button\n          type=\"danger\"\n          stylingMode=\"contained\"\n          [text]=\"'sendEmail' | translate\"\n          (onClick)=\"onClose('email')\"\n          #emailbtn\n          (keydown.arrowleft)=\"event.setFocus(printbtn)\"\n          (keydown.arrowright)=\"event.setFocus(pdfbtn)\"\n        >\n        </dx-button>\n        <dx-button\n          type=\"danger\"\n          stylingMode=\"contained\"\n          [text]=\"'savePdf' | translate\"\n          (onClick)=\"onClose('savePdf')\"\n          #pdfbtn\n          (keydown.arrowleft)=\"event.setFocus(emailbtn)\"\n          (keydown.arrowright)=\"event.setFocus(edocsbtn)\"\n        >\n        </dx-button>\n        <dx-button\n          type=\"danger\"\n          stylingMode=\"contained\"\n          [text]=\"'toEdocuments' | translate\"\n          (onClick)=\"onClose('eDocuments')\"\n          #edocsbtn\n          (keydown.arrowleft)=\"event.setFocus(pdfbtn)\"\n          (keydown.arrowright)=\"event.setFocus(nobtn)\"\n        >\n        </dx-button>\n        <dx-button\n          type=\"danger\"\n          stylingMode=\"contained\"\n          [text]=\"'buttons.cancel' | translate\"\n          (onClick)=\"onClose('cancel')\"\n          #nobtn\n          (keydown.arrowleft)=\"event.setFocus(edocsbtn)\"\n        >\n        </dx-button>\n      </ng-container>\n      <ng-container *ngIf=\"btnConfig == 'dynamicContent'\">\n        <div *ngFor=\"let btn of dynamicBtns; let i = index\" #dynamicButtons>\n          <dx-button\n            [type]=\"btn.type\"\n            stylingMode=\"contained\"\n            [text]=\"btn.text\"\n            (onClick)=\"onDynamicBtnClick(btn)\"\n            [id]=\"'btn' + i + unicalGuid\"\n            (keydown.arrowleft)=\"onDynamicBtnArrowLeft(i)\"\n            (keydown.arrowright)=\"onDynamicBtnArrowRight(i)\"\n          >\n          </dx-button>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</dx-popup>\n\n<!-- [unicalGuid]=\"unicalGuid\" -->\n<ng-keyboard-shortcuts [shortcuts]=\"shortcuts\" [disabled]=\"!isVisible\">\n</ng-keyboard-shortcuts>\n", styles: [".confirme-warning,.confirme-delete,.confirme-question,.confirme-information{font-family:Lumen;font-size:1.875rem;line-height:30px;vertical-align:middle}.confirme-delete:before{color:#bc1a22;content:\"\\e888\"}.confirme-warning:before{color:#a86800;content:\"\\e002\"}.confirme-information:before{color:#0074ad;content:\"\\e88f\"}.confirme-question:before{color:#4c4c4c;content:\"\\e8fd\"}\n"] }]
        }], ctorParameters: () => [{ type: EventService }, { type: i0.ChangeDetectorRef }], propDecorators: { onRemoving: [{
                type: Output
            }], onClosing: [{
                type: Output
            }], onCanceling: [{
                type: Output
            }], onDynamicBtnClicked: [{
                type: Output
            }], nobtn: [{
                type: ViewChild,
                args: ['nobtn']
            }], yesbtn: [{
                type: ViewChild,
                args: ['yesbtn']
            }], cancelbtn: [{
                type: ViewChild,
                args: ['cancelbtn']
            }], dynamicButtons: [{
                type: ViewChildren,
                args: ['dynamicButtons']
            }], btnConfig: [{
                type: Input
            }], checkBoxList: [{
                type: Input
            }], confirmHeader: [{
                type: Input
            }], confirmText: [{
                type: Input
            }], disableRefreshShortcut: [{
                type: Input
            }], dynamicBtns: [{
                type: Input
            }], genius: [{
                type: Input
            }], groupMsg: [{
                type: Input
            }], isVisible: [{
                type: Input
            }], kindDialog: [{
                type: Input
            }], paramsMsg: [{
                type: Input
            }], radioBoxList: [{
                type: Input
            }], showIcon: [{
                type: Input
            }], textAligne: [{
                type: Input
            }], title: [{
                type: Input
            }], width: [{
                type: Input
            }] } });

/*
 * Public API Surface of my-library
 */
// https://lukasz-zielinski.pl/blog/posts/2021-05-16-jak-stworzy%C4%87-swoj%C4%85-w%C5%82asn%C4%85-bibliotek%C4%99-przy-pomocy-angulara/

/**
 * Generated bundle index. Do not edit.
 */

export { CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, ConfirmDialogComponent, MyLibraryComponent, MyLibraryService, WaproDateBoxComponent };
//# sourceMappingURL=wapro-assecobs.mjs.map
