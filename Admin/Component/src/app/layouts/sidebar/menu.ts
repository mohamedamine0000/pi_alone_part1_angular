import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.OVERVIEW.TEXT',
        link: '/',
        icon: "bi bi-command",
    },
    {
        id: 3,
        label: 'MENUITEMS.BOOTSTRAPUI.TEXT',
        icon: "bi bi-radioactive",
        subItems: [
            {
                id: 4,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.ALERTS',
                link: '/ui/alerts',
                parentId: 3
            },
            {
                id: 5,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.BADGES',
                link: '/ui/badges',
                parentId: 3
            },
            {
                id: 6,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.BUTTONS',
                link: '/ui/button',
                parentId: 3
            },
            {
                id: 7,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.COLORS',
                link: '/ui/colors',
                parentId: 3
            },
            {
                id: 8,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.CARDS',
                link: '/ui/cards',
                parentId: 3
            },
            // {
            //     id: 9,
            //     label: 'MENUITEMS.BOOTSTRAPUI.LIST.CAROUSEL',
            //     link: '/ui/carousel',
            //     parentId: 3
            // },
            {
                id: 10,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.DROPDOWNS',
                link: '/ui/dropdowns',
                parentId: 3
            },
            {
                id: 11,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.GRID',
                link: '/ui/grid',
                parentId: 3
            },
            {
                id: 12,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.IMAGES',
                link: '/ui/images',
                parentId: 3
            },
            {
                id: 13,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.TABS',
                link: '/ui/tabs',
                parentId: 3
            },
            {
                id: 14,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.ACCORDIAN',
                link: '/ui/accordions',
                parentId: 3
            },
            {
                id: 15,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.MODALS',
                link: '/ui/modals',
                parentId: 3
            },
            {
                id: 16,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.OFFCANVAS',
                link: '/ui/offcanvas',
                parentId: 3
            },

            {
                id: 17,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.PLACEHOLDERS',
                link: '/ui/placeholder',
                parentId: 3
            },
            {
                id: 18,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.PROGRESS',
                link: '/ui/progress',
                parentId: 3
            },
            {
                id: 19,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.NOTIFICATION',
                link: '/ui/notifications',
                parentId: 3
            },
            {
                id: 20,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.MEDIA',
                link: '/ui/media',
                parentId: 3
            },
            {
                id: 21,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.VIDEO',
                link: '/ui/embed-video',
                parentId: 3
            },
            {
                id: 22,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.TYPOGRAPHY',
                link: '/ui/typography',
                parentId: 3
            },
            {
                id: 23,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.LISTS',
                link: '/ui/lists',
                parentId: 3
            },
            {
                id: 24,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.GENERAL',
                link: '/ui/general',
                parentId: 3
            },
            {
                id: 25,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.UTILITIES',
                link: '/ui/utilities',
                parentId: 3
            },
            {
                id: 26,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.TIMELINE',
                link: '/ui/timeline',
                parentId: 3
            },
            {
                id: 27,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.KNOB',
                link: '/ui/knob',
                parentId: 3
            },
            {
                id: 28,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.SPEEDDIAL',
                link: '/ui/speed-dial',
                parentId: 3
            },
            {
                id: 29,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.SPLITTER',
                link: '/ui/splitter',
                parentId: 3
            },
        ]
    },
    {
        id: 30,
        label: 'MENUITEMS.ADVANCEUI.TEXT',
        icon: "bi bi-layers",
        subItems: [
            {
                id: 31,
                label: 'MENUITEMS.ADVANCEUI.LIST.SWEETALERT',
                link: '/advance-ui/sweetalert',
                parentId: 30
            },
            {
                id: 33,
                label: 'MENUITEMS.ADVANCEUI.LIST.SCROLLBAR',
                link: '/advance-ui/scrollbar',
                parentId: 30
            },
            {
                id: 34,
                label: 'MENUITEMS.ADVANCEUI.LIST.SWIPER',
                link: '/advance-ui/swiper',
                parentId: 30
            },
            {
                id: 35,
                label: 'MENUITEMS.ADVANCEUI.LIST.RATINGS',
                link: '/advance-ui/rating',
                parentId: 30
            },
            {
                id: 36,
                label: 'MENUITEMS.ADVANCEUI.LIST.HIGHLIGHT',
                link: '/advance-ui/highlight',
                parentId: 30
            },
            {
                id: 37,
                label: 'MENUITEMS.ADVANCEUI.LIST.SCROLLSPY',
                link: '/advance-ui/scrollspy',
                parentId: 30
            }
        ]
    },
    {
        id: 38,
        label: 'MENUITEMS.CUSTOMUI.TEXT',
        badge: 'MENUITEMS.CUSTOMUI.BADGE',
        icon: "bi bi-tools",
        subItems: [
            {
                id: 39,
                label: 'MENUITEMS.CUSTOMUI.LIST.RIBBONS',
                link: '/custom-ui/ribbons',
                parentId: 38
            },
            {
                id: 40,
                label: 'MENUITEMS.CUSTOMUI.LIST.PROFILE',
                link: '/custom-ui/profile',
                parentId: 38
            },
            {
                id: 41,
                label: 'MENUITEMS.CUSTOMUI.LIST.COUNTER',
                link: '/custom-ui/counter',
                parentId: 38
            }
        ]
    },
    {
        id: 42,
        label: 'MENUITEMS.FORMS.TEXT',
        icon: 'ri-file-list-3-line',
        subItems: [
            {
                id: 43,
                label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
                link: '/forms/elements',
                parentId: 42
            },
            {
                id: 44,
                label: 'MENUITEMS.FORMS.LIST.SELECT',
                link: '/forms/select',
                parentId: 42
            },
            {
                id: 45,
                label: 'MENUITEMS.FORMS.LIST.CHECKBOXES',
                link: '/forms/checkboxs-radios',
                parentId: 42
            },
            {
                id: 46,
                label: 'MENUITEMS.FORMS.LIST.PICKERS',
                link: '/forms/pickers',
                parentId: 42
            },
            {
                id: 47,
                label: 'MENUITEMS.FORMS.LIST.MASK',
                link: '/forms/masks',
                parentId: 42
            },
            {
                id: 48,
                label: 'MENUITEMS.FORMS.LIST.ADVANCED',
                link: '/forms/advance',
                parentId: 42
            },
            {
                id: 49,
                label: 'MENUITEMS.FORMS.LIST.SLIDER',
                link: '/forms/range-slider',
                parentId: 42
            },
            {
                id: 50,
                label: 'MENUITEMS.FORMS.LIST.VALIDATION',
                link: '/forms/validation',
                parentId: 42
            },
            {
                id: 51,
                label: 'MENUITEMS.FORMS.LIST.WIZARD',
                link: '/forms/wizard',
                parentId: 42
            },
            {
                id: 52,
                label: 'MENUITEMS.FORMS.LIST.EDITOR',
                link: '/forms/editors',
                parentId: 42
            },
            {
                id: 53,
                label: 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
                link: '/forms/file-upload',
                parentId: 42
            },
            {
                id: 54,
                label: 'MENUITEMS.FORMS.LIST.LAYOUTS',
                link: '/forms/layouts',
                parentId: 42
            },
            {
                id: 51,
                label: 'MENUITEMS.FORMS.LIST.TOMSELECT',
                link: '/forms/tom-select',
                parentId: 42
            },
        ]
    },
    {
        id: 52,
        label: 'MENUITEMS.TABLES.TEXT',
        icon: 'bi bi-table',
        subItems: [
            {
                id: 53,
                label: 'MENUITEMS.TABLES.LIST.BASIC',
                link: '/tables/basic',
                parentId: 52
            },
            {
                id: 54,
                label: 'MENUITEMS.TABLES.LIST.GRIDJS',
                link: '/tables/gridjs',
                parentId: 52
            },
            {
                id: 55,
                label: 'MENUITEMS.TABLES.LIST.LISTJS',
                link: '/tables/listjs',
                parentId: 52
            }
        ]
    },
    {
        id: 56,
        label: 'MENUITEMS.APEXCHARTS.TEXT',
        icon: 'bi bi-pie-chart',
        subItems: [
            {
                id: 57,
                label: 'MENUITEMS.APEXCHARTS.LIST.LINE',
                link: '/charts/apex-line',
                parentId: 56
            },
            {
                id: 58,
                label: 'MENUITEMS.APEXCHARTS.LIST.AREA',
                link: '/charts/apex-area',
                parentId: 56
            },
            {
                id: 59,
                label: 'MENUITEMS.APEXCHARTS.LIST.COLUMN',
                link: '/charts/apex-column',
                parentId: 56
            },
            {
                id: 60,
                label: 'MENUITEMS.APEXCHARTS.LIST.BAR',
                link: '/charts/apex-bar',
                parentId: 56
            },
            {
                id: 61,
                label: 'MENUITEMS.APEXCHARTS.LIST.MIXED',
                link: '/charts/apex-mixed',
                parentId: 56
            },
            {
                id: 62,
                label: 'MENUITEMS.APEXCHARTS.LIST.TIMELINE',
                link: '/charts/apex-timeline',
                parentId: 56
            },
            {
                id: 63,
                label: 'MENUITEMS.APEXCHARTS.LIST.CANDLESTICK',
                link: '/charts/apex-candlestick',
                parentId: 56
            },
            {
                id: 64,
                label: 'MENUITEMS.APEXCHARTS.LIST.BOXPLOT',
                link: '/charts/apex-boxplot',
                parentId: 56
            },
            {
                id: 65,
                label: 'MENUITEMS.APEXCHARTS.LIST.BUBBLE',
                link: '/charts/apex-bubble',
                parentId: 56
            },
            {
                id: 66,
                label: 'MENUITEMS.APEXCHARTS.LIST.SCATTER',
                link: '/charts/apex-scatter',
                parentId: 56
            },
            {
                id: 67,
                label: 'MENUITEMS.APEXCHARTS.LIST.HEATMAP',
                link: '/charts/apex-heatmap',
                parentId: 56
            },
            {
                id: 68,
                label: 'MENUITEMS.APEXCHARTS.LIST.TREEMAP',
                link: '/charts/apex-treemap',
                parentId: 56
            },
            {
                id: 69,
                label: 'MENUITEMS.APEXCHARTS.LIST.PIE',
                link: '/charts/apex-pie',
                parentId: 56
            },
            {
                id: 70,
                label: 'MENUITEMS.APEXCHARTS.LIST.RADIALBAR',
                link: '/charts/apex-radialbar',
                parentId: 56
            },
            {
                id: 71,
                label: 'MENUITEMS.APEXCHARTS.LIST.RADAR',
                link: '/charts/apex-radar',
                parentId: 56
            },
            {
                id: 72,
                label: 'MENUITEMS.APEXCHARTS.LIST.POLARAREA',
                link: '/charts/apex-polar',
                parentId: 56
            },
        ]
    },
    {
        id: 73,
        label: 'MENUITEMS.ICONS.TEXT',
        icon: 'bi bi-usb-symbol',
        subItems: [
            {
                id: 74,
                label: 'MENUITEMS.ICONS.LIST.REMIX',
                link: '/icons/remix',
                parentId: 73
            },
            {
                id: 75,
                label: 'MENUITEMS.ICONS.LIST.BOXICONS',
                link: '/icons/boxicons',
                parentId: 73
            },
            {
                id: 76,
                label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
                link: '/icons/materialdesign',
                parentId: 73
            },
            {
                id: 77,
                label: 'MENUITEMS.ICONS.LIST.BOOTSTRAP',
                link: '/icons/bootstrap',
                parentId: 73
            },
            {
                id: 78,
                label: 'MENUITEMS.ICONS.LIST.PHOSPHOR',
                link: '/icons/phosphor',
                parentId: 73
            }
        ]
    },
    {
        id: 79,
        label: 'MENUITEMS.MAPS.TEXT',
        icon: 'bi bi-geo-alt',
        subItems: [
            {
                id: 80,
                label: 'MENUITEMS.MAPS.LIST.GOOGLE',
                link: '/maps/google',
                parentId: 79
            },
            {
                id: 81,
                label: 'MENUITEMS.MAPS.LIST.AMCHARTS',
                link: '/maps/amCharts',
                parentId: 79
            },
            {
                id: 82,
                label: 'MENUITEMS.MAPS.LIST.LEAFLET',
                link: '/maps/leaflet',
                parentId: 79
            }
        ]
    },
    {
        id: 83,
        label: 'MENUITEMS.MULTILEVEL.TEXT',
        icon: 'bi bi-share',
        subItems: [
            {
                id: 84,
                label: 'MENUITEMS.MULTILEVEL.LIST.Level1.1',
                parentId: 83
            },
            {
                id: 85,
                label: 'MENUITEMS.MULTILEVEL.LIST.Level2.TEXT',
                parentId: 83,
                subItems: [
                    {
                        id: 86,
                        label: 'MENUITEMS.MULTILEVEL.LIST.Level2.1',
                        parentId: 85
                    },
                    {
                        id: 87,
                        label: 'MENUITEMS.MULTILEVEL.LIST.Level2.2',
                        parentId: 85,
                        subItems: [
                            {
                                id: 76,
                                label: 'MENUITEMS.MULTILEVEL.LIST.Level3.1',
                                parentId: 87
                            },
                            {
                                id: 76,
                                label: 'MENUITEMS.MULTILEVEL.LIST.Level3.2',
                                parentId: 87,

                            }
                        ]
                    }
                ]
            }
        ]
    },
]
