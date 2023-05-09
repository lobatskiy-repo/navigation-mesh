// Descriptions Type Component
// last characters -> GT - group Type Component
// last characters -> ST - setting Type Component

// hiddenProperty - сховані опції потрібні для конфігурації

export type standardComponent =
    | "PorchSidesST"
    | "PorchSidesColorST"
    | "SwitchStandardST"
    | "InputST"
    | "RadioST"
    | "SelectST"
    | "ImgRadioST"
    | "OrientationSidesST"
    | "SideCheckViewSettingST"
    | "GroupCupolaST"
    | "RadioSwitcherST"
    | "ColorSelectionSectionST"
    | "LineParamSelectSide"
    | "LineParamInputText"
    | "OptionsSideGroupWrap"
    | "ImgRadioSideST"
    | "SwitchStandardSideST"
    | "LineParamRadioSideST"
    | "LineParamNumberSideST"
    ;
export type groupComponent =
    | "ListParams"
    | "LineParamInput"
    | "LineParamRadio"
    | "LineParamSelect"
    | "LineParamNumber"
    | "GroupSetting"
    | "TwoLineParams"
    | "ColumnViewParam"
    | "SettingOpening"
    | "GroupSettingBase"
    | "LineParamGT"
    | "HintWrapGroupGT"
    | "OptionsSideGroup"
    | "hiddenProperty"
    | standardComponent;
export type allTypeComponent = standardComponent | groupComponent;

// Descriptions: typeOptions
// groupingOptions - options for groping
// configurationOptions - options for configuration param
// groupingOptionsSwitchingOpening - options for groping ang opening or closing
export type typeOptions =
    | "groupingOptions"
    | "configurationOptions"
    | "groupingOptionsSwitchingOpening";

// Descriptions: flag options
// isVisible - visible or not for (group or settings)
// switchingOptions - opening group or not for (groupingOptionsSwitchingOpening )
//

// Options Type
export type dependencyT =
    | "isVisible"
    | "isInclude"
    | "isIncludeSustemSetting"
    | "";

export type dependencySettingT = {
    dependencyType: dependencyT;
    idParams: string;
    isValue: any;
};
// END

export type TOptions = {
    id: string;
    typeOptions: typeOptions;
    label?: string;
    embeddedView?: IComponent[];
    dependencySettings?: dependencySettingT[];
    isSettingSide?: boolean;
    [key: string]: any;
};

export type TGroupingOptions = TOptions & {
    typeOptions: "groupingOptions";
    isVisible?: boolean;
};
export type TConfigurationOptions = TOptions & {
    typeOptions: "configurationOptions";
    isVisible?: boolean;
};
export type TGroupingOptionsSwitchingOpening = TOptions & {
    switchingOptions: boolean;
    typeOptions: "groupingOptionsSwitchingOpening";
};

export type IComponentData =
    | TGroupingOptions
    | TConfigurationOptions
    | TGroupingOptionsSwitchingOpening;

export type KeysOfIComponentData = keyof IComponentData;


export type IComponent = {
    type: allTypeComponent;
    data: IComponentData;
};