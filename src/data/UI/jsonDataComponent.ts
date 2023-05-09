import { IComponent } from "../../type/dynamic-rendering.interfaces";



export const settingForSides: Array<IComponent> = [
    {
        type: "SettingOpening",
        data: {
            id: "FO",
            label: "Framed Opening",
            typeOptions: "groupingOptionsSwitchingOpening",
            switchingOptions: false,
            isRemoveSection: true,
            embeddedView: [
                {
                    type: "LineParamNumber",
                    data: {
                        label: "Width in Inches",
                        id: "WallItemWidth",
                        typeOptions: "configurationOptions",
                        isRequired: true,
                        values: 0,
                        additionalProperties: {
                            maxWidth: "252px",
                        },
                    },
                },
                {
                    type: "LineParamNumber",
                    data: {
                        label: "Height in Inches",
                        id: "WallItemHeight",
                        typeOptions: "configurationOptions",
                        isRequired: true,
                        values: 0,
                        additionalProperties: {
                            maxWidth: "252px",
                        },
                    },
                },
                {
                    type: "LineParamNumber",
                    data: {
                        label: "Height from floor in Inches",
                        id: "WallItemFOHeightFromFloor",
                        typeOptions: "configurationOptions",
                        isRequired: true,
                        values: 0,
                        additionalProperties: {
                            maxWidth: "252px",
                        },
                    },
                },
            ],
        },
    },
    {
        type: "SettingOpening",
        data: {
            id: "W",
            label: "Single Window",
            typeOptions: "groupingOptionsSwitchingOpening",
            switchingOptions: false,
            isRemoveSection: true,
            embeddedView: [
                {
                    type: "LineParamGT",
                    data: {
                        label: "Window Style",
                        id: "WallItemStyleWindowGroup",
                        typeOptions: "configurationOptions",
                        isRequired: false,
                        additionalProperties: {
                            groupGap: true,
                            maxWidth: "270px",
                        },
                        embeddedView: [
                            {
                                type: "SwitchStandardST",
                                data: {
                                    label: "Insulated Vinyl Clay",
                                    id: "WallItemStyle[InsVinClay]",
                                    typeOptions: "configurationOptions",
                                    additionalStyles: {
                                        colorText: "#000",
                                        fontSize: "14px",
                                    },
                                },
                            },
                            {
                                type: "SwitchStandardST",
                                data: {
                                    label: "Insulated Vinyl White",
                                    id: "WallItemStyle[InsVinWhite]",
                                    typeOptions: "configurationOptions",
                                    additionalStyles: {
                                        colorText: "#000",
                                        fontSize: "14px",
                                    },
                                },
                            },
                            {
                                type: "SwitchStandardST",
                                data: {
                                    label: "Non-insulated Aluminum White",
                                    id: "WallItemStyle[NonInsAlumWhite]",
                                    typeOptions: "configurationOptions",
                                    additionalStyles: {
                                        colorText: "#000",
                                        fontSize: "14px",
                                    },
                                },
                            },
                            {
                                type: "SwitchStandardST",
                                data: {
                                    label: "Insulated Aluminum Bronze",
                                    id: "WallItemStyle[InsAlumBronze]",
                                    typeOptions: "configurationOptions",
                                    additionalStyles: {
                                        colorText: "#000",
                                        fontSize: "14px",
                                    },
                                },
                            },
                        ],
                    },
                },

                {
                    type: "LineParamSelectSide",
                    data: {
                        label: "Choose Window",
                        id: "WallItemType",
                        typeOptions: "configurationOptions",
                        isRequired: false,
                        values: [
                            {
                                label: "2x3 Window - Ins. Vinyl White - Grid",
                                value: "WIN2X3VWG",
                            },
                            {
                                label: "2x3 Window - Ins. Vinyl White - Grid",
                                value: "WIN2X3VWG",
                            },
                            {
                                label: "3x5 Window - Ins. Vinyl White - No Grid",
                                value: "WIN3X5VWNG",
                            },
                        ],
                        additionalProperties: {
                            maxWidth: "308px",
                        },
                    },
                },
            ],
        },
    },
    {
        type: "SettingOpening",
        data: {
            id: "WW",
            label: "Double Window Bank",
            typeOptions: "groupingOptionsSwitchingOpening",
            switchingOptions: false,
            isRemoveSection: true,
            embeddedView: [
                {
                    type: "LineParamGT",
                    data: {
                        label: "Window Style",
                        id: "WallItemStyleWindowGroup",
                        typeOptions: "configurationOptions",
                        isRequired: false,
                        additionalProperties: {
                            groupGap: true,
                            maxWidth: "270px",
                        },
                        embeddedView: [
                            {
                                type: "SwitchStandardST",
                                data: {
                                    label: "Insulated Vinyl Clay",
                                    id: "WallItemStyle[InsVinClay]",
                                    typeOptions: "configurationOptions",
                                    additionalStyles: {
                                        colorText: "#000",
                                        fontSize: "14px",
                                    },
                                },
                            },
                            {
                                type: "SwitchStandardST",
                                data: {
                                    label: "Insulated Vinyl White",
                                    id: "WallItemStyle[InsVinWhite]",
                                    typeOptions: "configurationOptions",
                                    additionalStyles: {
                                        colorText: "#000",
                                        fontSize: "14px",
                                    },
                                },
                            },
                            {
                                type: "SwitchStandardST",
                                data: {
                                    label: "Non-insulated Aluminum White",
                                    id: "WallItemStyle[NonInsAlumWhite]",
                                    typeOptions: "configurationOptions",
                                    additionalStyles: {
                                        colorText: "#000",
                                        fontSize: "14px",
                                    },
                                },
                            },
                            {
                                type: "SwitchStandardST",
                                data: {
                                    label: "Insulated Aluminum Bronze",
                                    id: "WallItemStyle[InsAlumBronze]",
                                    typeOptions: "configurationOptions",
                                    additionalStyles: {
                                        colorText: "#000",
                                        fontSize: "14px",
                                    },
                                },
                            },
                        ],
                    },
                },

                {
                    type: "LineParamSelectSide",
                    data: {
                        label: "Choose Window",
                        id: "WallItemType",
                        typeOptions: "configurationOptions",
                        isRequired: false,
                        values: [
                            {
                                label: "2x3 Window - Ins. Vinyl White - Grid",
                                value: "WIN2X3VWG",
                            },
                            {
                                label: "2x3 Window - Ins. Vinyl White - Grid",
                                value: "WIN2X3VWG",
                            },
                            {
                                label: "3x5 Window - Ins. Vinyl White - No Grid",
                                value: "WIN3X5VWNG",
                            },
                        ],
                        additionalProperties: {
                            maxWidth: "308px",
                        },
                    },
                },
            ],
        },
    },
    {
        type: "SettingOpening",
        data: {
            id: "WWW",
            label: "Triple Window Bank",
            typeOptions: "groupingOptionsSwitchingOpening",
            switchingOptions: false,
            isRemoveSection: true,
            embeddedView: [
                {
                    type: "LineParamGT",
                    data: {
                        label: "Window Style",
                        id: "WallItemStyleWindowGroup",
                        typeOptions: "configurationOptions",
                        isRequired: false,
                        additionalProperties: {
                            groupGap: true,
                            maxWidth: "270px",
                        },
                        embeddedView: [
                            {
                                type: "SwitchStandardST",
                                data: {
                                    label: "Insulated Vinyl Clay",
                                    id: "WallItemStyle[InsVinClay]",
                                    typeOptions: "configurationOptions",
                                    additionalStyles: {
                                        colorText: "#000",
                                        fontSize: "14px",
                                    },
                                },
                            },
                            {
                                type: "SwitchStandardST",
                                data: {
                                    label: "Insulated Vinyl White",
                                    id: "WallItemStyle[InsVinWhite]",
                                    typeOptions: "configurationOptions",
                                    additionalStyles: {
                                        colorText: "#000",
                                        fontSize: "14px",
                                    },
                                },
                            },
                            {
                                type: "SwitchStandardST",
                                data: {
                                    label: "Non-insulated Aluminum White",
                                    id: "WallItemStyle[NonInsAlumWhite]",
                                    typeOptions: "configurationOptions",
                                    additionalStyles: {
                                        colorText: "#000",
                                        fontSize: "14px",
                                    },
                                },
                            },
                            {
                                type: "SwitchStandardST",
                                data: {
                                    label: "Insulated Aluminum Bronze",
                                    id: "WallItemStyle[InsAlumBronze]",
                                    typeOptions: "configurationOptions",
                                    additionalStyles: {
                                        colorText: "#000",
                                        fontSize: "14px",
                                    },
                                },
                            },
                        ],
                    },
                },

                {
                    type: "LineParamSelectSide",
                    data: {
                        label: "Choose Window",
                        id: "WallItemType",
                        typeOptions: "configurationOptions",
                        isRequired: false,
                        values: [
                            {
                                label: "2x3 Window - Ins. Vinyl White - Grid",
                                value: "WIN2X3VWG",
                            },
                            {
                                label: "2x3 Window - Ins. Vinyl White - Grid",
                                value: "WIN2X3VWG",
                            },
                            {
                                label: "3x5 Window - Ins. Vinyl White - No Grid",
                                value: "WIN3X5VWNG",
                            },
                        ],
                        additionalProperties: {
                            maxWidth: "308px",
                        },
                    },
                },
            ],
        },
    },
    {
        type: "SettingOpening",
        data: {
            id: "SD",
            label: "Shed Door",
            typeOptions: "groupingOptionsSwitchingOpening",
            switchingOptions: false,
            isRemoveSection: true,
            embeddedView: [
                {
                    type: "LineParamGT",
                    data: {
                        label: "Choose Door",
                        id: "ChooseDoorGroup",
                        typeOptions: "configurationOptions",
                        isRequired: false,
                        embeddedView: [
                            {
                                type: "ImgRadioST",
                                data: {
                                    label: "Choose Door",
                                    id: "ChooseDoor",
                                    typeOptions: "configurationOptions",
                                    isRequired: false,
                                    values: [
                                        {
                                            id: "1",
                                            imgUrl: 'SingleDoor',
                                        },
                                        {
                                            id: "2",
                                            imgUrl: 'DoubleDoor',
                                        },
                                        {
                                            id: "3",
                                            imgUrl: 'TripleDoor',
                                        },
                                    ],
                                    defaultValue: "1",
                                },
                            },
                        ],
                    },
                },
                {
                    type: "LineParamSelectSide",
                    data: {
                        label: "Choose Door",
                        id: "WallItemType",
                        typeOptions: "configurationOptions",
                        isRequired: false,
                        values: [
                            {
                                label: '36"x72" Single Dutch Door',
                                value: "DSDD3672",
                            },
                            {
                                label: '36"x72" Single Dutch Door',
                                value: "DSDD3672",
                            },
                            {
                                label: '72"x72" Double Shed Door',
                                value: "DDSD7272",
                            },
                        ],
                        additionalProperties: {
                            maxWidth: "308px",
                        },
                    },
                },
                {
                    type: "LineParamGT",
                    data: {
                        label: "Decorative Trim",
                        id: "WallItemTrimStyleGroup",
                        typeOptions: "configurationOptions",
                        isRequired: false,
                        embeddedView: [
                            {
                                type: "ImgRadioST",
                                data: {
                                    label: "Decorative Trim",
                                    id: "WallItemTrimStyle",
                                    typeOptions: "configurationOptions",
                                    isRequired: false,
                                    values: [

                                    ],
                                    defaultValue: "NA",
                                },
                            },
                        ],
                    },
                },

                {
                    type: "LineParamGT",
                    data: {
                        label: "Window in Door Option",
                        id: "TransomWindowGroup",
                        typeOptions: "configurationOptions",
                        isRequired: false,
                        additionalProperties: {
                            groupGap: true,
                            maxWidth: "270px",
                        },
                        embeddedView: [
                            {
                                type: "SwitchStandardST",
                                data: {
                                    label: "Transom Window",
                                    id: "WallItemWindow",
                                    typeOptions: "configurationOptions",
                                    additionalStyles: {
                                        colorText: "#000",
                                        fontSize: "14px",
                                    },
                                },
                            },
                        ],
                    },
                },
                {
                    type: "LineParamRadio",
                    data: {
                        id: "WallItemDoorSwing",
                        label: "Door Swing",
                        isRequired: true,
                        typeOptions: "configurationOptions",
                        values: [
                            {
                                imgUrl: 'LeftHandOutswing',
                                label: "Left Hand Outswing",
                                value: "LeftHandOutswing",
                            },
                            {
                                imgUrl: 'RightHandOutswing',
                                label: "Right Hand Outswing",
                                value: "RightHandOutswing",
                            },
                            // {
                            //     imgUrl: '/assets/svg/DoorSwing/DoubleDoorOutside.svg',
                            //     label: 'Outswing',
                            //     value: 'Outswing'
                            // },
                            // {
                            //     imgUrl: '/assets/svg/DoorSwing/DoubleDoorInside.svg',
                            //     label: 'Inswing',
                            //     value: 'Inswing'
                            // },
                        ],
                    },
                },
                {
                    type: "LineParamSelectSide",
                    data: {
                        label: "Choose Ramp",
                        id: "Ramp",
                        typeOptions: "configurationOptions",
                        isRequired: false,
                        values: [
                            {
                                label: "5x5 Wood Ramp For Shed Doo",
                                value: "Ramp_5x5",
                            },
                            {
                                label: "8x9 Pressure Treated Garage Ramp",
                                value: "Ramp_8x9",
                            },
                            {
                                label: "7x7 Pressure Treated Garage Ram",
                                value: "Ramp_7x7",
                            },
                            {
                                label: "None",
                                value: "NA",
                            },
                        ],
                        additionalProperties: {
                            maxWidth: "308px",
                        },
                        defaultValue: "NA",
                    },
                },
            ],
        },
    },
    {
        type: "SettingOpening",
        data: {
            id: "RD",
            label: "Residential Door",
            typeOptions: "groupingOptionsSwitchingOpening",
            switchingOptions: false,
            isRemoveSection: true,
            embeddedView: [
                {
                    type: "LineParamGT",
                    data: {
                        label: "Choose Door",
                        id: "ChooseDoorGroup",
                        typeOptions: "configurationOptions",
                        isRequired: false,
                        embeddedView: [
                            {
                                type: "ImgRadioST",
                                data: {
                                    label: "Choose Door",
                                    id: "ChooseDoor",
                                    typeOptions: "configurationOptions",
                                    isRequired: false,
                                    values: [
                                        {
                                            id: "1",
                                            imgUrl: 'SingleDoor',
                                        },
                                        {
                                            id: "2",
                                            imgUrl: 'DoubleDoor',
                                        },
                                    ],
                                    defaultValue: "1",
                                },
                            },
                        ],
                    },
                },
                {
                    type: "LineParamSelectSide",
                    data: {
                        label: "Choose Door",
                        id: "WallItemType",
                        typeOptions: "configurationOptions",
                        isRequired: false,
                        values: [
                            {
                                label: '36"x72" Single Dutch Door',
                                value: "DSDD3672",
                            },
                            {
                                label: '36"x72" Single Dutch Door',
                                value: "DSDD3672",
                            },
                            {
                                label: '72"x72" Double Shed Door',
                                value: "DDSD7272",
                            },
                        ],
                        additionalProperties: {
                            maxWidth: "308px",
                        },
                    },
                },
                {
                    type: "LineParamGT",
                    data: {
                        label: "Decorative Trim",
                        id: "WallItemTrimStyleGroup",
                        typeOptions: "groupingOptions",
                        isRequired: false,
                        embeddedView: [
                            {
                                type: "ImgRadioST",
                                data: {
                                    label: "Decorative Trim",
                                    id: "WallItemTrimStyle",
                                    typeOptions: "configurationOptions",
                                    isRequired: false,
                                    values: [
                                        {
                                            id: "NA",
                                            imgUrl: 'none',
                                        },
                                    ],
                                    defaultValue: "NA",
                                },
                            },
                        ],
                    },
                },

                {
                    type: "LineParamGT",
                    data: {
                        label: "Window in Door Option",
                        id: "TransomWindowGroup",
                        typeOptions: "configurationOptions",
                        isRequired: false,
                        additionalProperties: {
                            groupGap: true,
                            maxWidth: "270px",
                        },
                        embeddedView: [
                            {
                                type: "SwitchStandardST",
                                data: {
                                    label: "Transom Window",
                                    id: "WallItemWindow",
                                    typeOptions: "configurationOptions",
                                    additionalStyles: {
                                        colorText: "#000",
                                        fontSize: "14px",
                                    },
                                },
                            },
                        ],
                    },
                },
                {
                    type: "LineParamRadio",
                    data: {
                        id: "WallItemDoorSwing",
                        label: "Door Swing",
                        isRequired: true,
                        typeOptions: "configurationOptions",
                        values: [
                            {
                                imgUrl: 'LeftHandOutswing',
                                label: "Left Hand Outswing",
                                value: "LeftHandOutswing",
                            },
                            {
                                imgUrl: 'RightHandOutswing',
                                label: "Right Hand Outswing",
                                value: "RightHandOutswing",
                            },
                            {
                                imgUrl: 'LeftHandInswing',
                                label: "Left Hand Inswing",
                                value: "LeftHandInswing",
                            },
                            {
                                imgUrl: 'RightHandInswing',
                                label: "Right Hand Inswing",
                                value: "RightHandInswing",
                            },
                        ],
                    },
                },
                {
                    type: "LineParamSelectSide",
                    data: {
                        label: "Choose Ramp",
                        id: "Ramp",
                        typeOptions: "configurationOptions",
                        isRequired: false,
                        values: [
                            {
                                label: "5x5 Wood Ramp For Shed Doo",
                                value: "Ramp_5x5",
                            },
                            {
                                label: "8x9 Pressure Treated Garage Ramp",
                                value: "Ramp_8x9",
                            },
                            {
                                label: "7x7 Pressure Treated Garage Ram",
                                value: "Ramp_7x7",
                            },
                            {
                                label: "None",
                                value: "NA",
                            },
                        ],
                        additionalProperties: {
                            maxWidth: "308px",
                        },
                        defaultValue: "NA",
                    },
                },
            ],
        },
    },
    {
        type: "SettingOpening",
        data: {
            id: "OHD",
            label: "Overhead Door",
            typeOptions: "groupingOptionsSwitchingOpening",
            switchingOptions: false,
            isRemoveSection: true,
            embeddedView: [
                {
                    type: "LineParamSelectSide",
                    data: {
                        label: "Choose Door",
                        id: "WallItemType",
                        typeOptions: "configurationOptions",
                        isRequired: false,
                        values: [
                            {
                                label: '36"x72" Single Dutch Door',
                                value: "DSDD3672",
                            },
                            {
                                label: '36"x72" Single Dutch Door',
                                value: "DSDD3672",
                            },
                            {
                                label: '72"x72" Double Shed Door',
                                value: "DDSD7272",
                            },
                        ],
                        additionalProperties: {
                            maxWidth: "308px",
                        },
                    },
                },

                {
                    type: "LineParamGT",
                    data: {
                        label: "Decorative Trim",
                        id: "WallItemTrimStyleGroup",
                        typeOptions: "configurationOptions",
                        isRequired: false,
                        embeddedView: [
                            {
                                type: "ImgRadioST",
                                data: {
                                    label: "Decorative Trim",
                                    id: "WallItemTrimStyle",
                                    typeOptions: "configurationOptions",
                                    isRequired: false,
                                    values: [
                                        {
                                            imgUrl: 'AngledFrame',
                                            label: "Angled Frame",
                                            id: "OHDA",
                                        },
                                        {
                                            imgUrl: 'SquareFrame',
                                            label: "Square Frame",
                                            id: "OHDS",
                                        },
                                    ],
                                    defaultValue: "OHDS",
                                },
                            },
                        ],
                    },
                },
                {
                    type: "LineParamGT",
                    data: {
                        label: "Window in Door Option",
                        id: "TransomWindowGroup",
                        typeOptions: "configurationOptions",
                        isRequired: false,
                        additionalProperties: {
                            groupGap: true,
                            maxWidth: "270px",
                        },
                        embeddedView: [
                            {
                                type: "SwitchStandardST",
                                data: {
                                    label: "Transom Window",
                                    id: "WallItemWindow",
                                    typeOptions: "configurationOptions",
                                    additionalStyles: {
                                        colorText: "#000",
                                        fontSize: "14px",
                                    },
                                },
                            },
                        ],
                    },
                },
                {
                    type: "LineParamSelectSide",
                    data: {
                        label: "Choose Ramp",
                        id: "Ramp",
                        typeOptions: "configurationOptions",
                        isRequired: false,
                        values: [
                            {
                                label: "5x5 Wood Ramp For Shed Doo",
                                value: "Ramp_5x5",
                            },
                            {
                                label: "8x9 Pressure Treated Garage Ramp",
                                value: "Ramp_8x9",
                            },
                            {
                                label: "7x7 Pressure Treated Garage Ram",
                                value: "Ramp_7x7",
                            },
                            {
                                label: "None",
                                value: "NA",
                            },
                        ],
                        additionalProperties: {
                            maxWidth: "308px",
                        },
                        defaultValue: "NA",
                    },
                },
            ],
        },
    },
    {
        type: "SettingOpening",
        data: {
            id: "DormerItems",
            label: "Shed Dormer",
            typeOptions: "groupingOptionsSwitchingOpening",
            switchingOptions: false,
            isRemoveSection: true,

            embeddedView: [
                {
                    type: "hiddenProperty",
                    data: {
                        id: "DormerEnabled",
                        typeOptions: "configurationOptions",
                    },
                },
                {
                    type: "LineParamSelectSide",
                    data: {
                        label: "Dormer Window",
                        id: "DormerWindow",
                        typeOptions: "configurationOptions",
                        isRequired: false,
                        values: [
                            {
                                label: "35x10 Window - Ins. Vinyl Clay - No Grid",
                                state: "visible",
                                value: "WIN36X10VCNG",
                                imageUrl: null,
                                orderNumber: 0,
                            },
                            {
                                label: "35x10 Window - Ins. Vinyl White - No Grid",
                                state: "visible",
                                value: "WIN36X10VWNG",
                                imageUrl: null,
                                orderNumber: 1,
                            },
                            {
                                label: "35x10 Window - Non-insulated Aluminum White - Grid",
                                state: "visible",
                                value: "WIN36X10AWG",
                                imageUrl: null,
                                orderNumber: 2,
                            },
                            {
                                label: "35x10 Window - Ins. Vinyl White - Grid",
                                state: "visible",
                                value: "WIN36X10VWG",
                                imageUrl: null,
                                orderNumber: 3,
                            },
                            {
                                label: "35x10 Window - Ins. Vinyl Clay - Grid",
                                state: "visible",
                                value: "WIN36X10VCG",
                                imageUrl: null,
                                orderNumber: 4,
                            },
                        ],
                        additionalProperties: {
                            maxWidth: "279px",
                        },
                        defaultValue: "WIN36X10VWNG",
                    },
                },
                {
                    type: "LineParamSelectSide",
                    data: {
                        label: "Number Dormer Windows",
                        id: "DormerDim",
                        typeOptions: "configurationOptions",
                        isRequired: false,
                        values: [
                            {
                                label: "2 Window",
                                state: "visible",
                                value: "80.5",
                                imageUrl: null,
                                orderNumber: 0,
                            },
                        ],
                        additionalProperties: {
                            maxWidth: "279px",
                        },
                        defaultValue: "80.5",
                    },
                },
            ],
        },
    },
    {
        type: "SettingOpening",
        data: {
            id: "gableDormer",
            label: "Gable Dormer",
            typeOptions: "groupingOptionsSwitchingOpening",
            switchingOptions: false,
            isRemoveSection: true,
            embeddedView: [
                {
                    type: "hiddenProperty",
                    data: {
                        id: "DormerEnabled",
                        typeOptions: "configurationOptions",
                    },
                },
                {
                    type: "hiddenProperty",
                    data: {
                        id: "UPG_GableDormer",
                        typeOptions: "configurationOptions",
                    },
                },
                {
                    type: "hiddenProperty",
                    data: {
                        id: "UPG_GableDormerQuan",
                        typeOptions: "configurationOptions",
                    },
                },
            ],
        },
    },
    {
        type: "SettingOpening",
        data: {
            id: "reverseDormer",
            label: "Reverse Gable",
            typeOptions: "groupingOptionsSwitchingOpening",
            switchingOptions: false,
            isRemoveSection: true,

            embeddedView: [
                {
                    type: "hiddenProperty",
                    data: {
                        id: "DormerEnabled",
                        typeOptions: "configurationOptions",
                    },
                },
                {
                    type: "hiddenProperty",
                    data: {
                        id: "UPG_ReverseGable",
                        typeOptions: "configurationOptions",
                    },
                },
                {
                    type: "hiddenProperty",
                    data: {
                        id: "UPG_ReverseGableQuan",
                        typeOptions: "configurationOptions",
                    },
                },
                {
                    type: "hiddenProperty",
                    data: {
                        id: "UPG_ReverseGableWindowQuan",
                        typeOptions: "configurationOptions",
                    },
                },

                {
                    type: "LineParamSelect",
                    data: {
                        label: "Dormer Window",
                        id: "UPG_ReverseGableWindow",
                        typeOptions: "configurationOptions",
                        isRequired: false,
                        values: [
                            {
                                label: "35x10 Window - Ins. Vinyl White - No Grid",
                                state: "visible",
                                value: "WIN36X10VWNG",
                                imageUrl: null,
                                orderNumber: 1,
                            },
                        ],
                        additionalProperties: {
                            maxWidth: "279px",
                        },
                        defaultValue: "WIN36X10VWNG",
                    },
                },
            ],
        },
    },
    {
        type: "SettingOpening",
        data: {
            id: "windowStrip",
            label: "Window Strip in Upper Wall ",
            typeOptions: "groupingOptionsSwitchingOpening",
            switchingOptions: false,
            isRemoveSection: true,
            embeddedView: [
                {
                    type: "LineParamSelect",
                    data: {
                        label: "Window Strip",
                        id: "ModernUpperWallWindow",
                        typeOptions: "configurationOptions",
                        isRequired: false,

                        values: [],
                        additionalProperties: {
                            maxWidth: "279px",
                        },
                    },
                },
            ],
        },
    },
];