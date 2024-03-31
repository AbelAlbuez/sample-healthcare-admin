"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/features/patients/PatientTable.tsx":
/*!************************************************!*\
  !*** ./src/features/patients/PatientTable.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PatientTable: function() { return /* binding */ PatientTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_Grid_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Grid,Table,TableBody,TableCell,TableHead,TableRow!=!@mui/material */ \"__barrel_optimize__?names=Button,Grid,Table,TableBody,TableCell,TableHead,TableRow!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _molecules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/molecules */ \"./src/molecules/index.ts\");\n/* harmony import */ var _AddPatientModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddPatientModal */ \"./src/features/patients/AddPatientModal.tsx\");\n/* harmony import */ var _UpdatePatientModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UpdatePatientModal */ \"./src/features/patients/UpdatePatientModal.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst PatientTable = (props)=>{\n    _s();\n    const { onDeletePatient, patients } = props;\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isOpenAddModal, setIsOpenAddModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isOpenUpdateModal, setIsOpenUpdateModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedPatientId, setSelectedPatientId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleDeleteOpen = (id)=>{\n        setSelectedPatientId(id);\n        setOpen(true);\n    };\n    const handleDeleteClose = ()=>{\n        setOpen(false);\n    };\n    const handleDelete = ()=>{\n        onDeletePatient(String(selectedPatientId));\n    };\n    const handleOpenAddModal = ()=>{\n        setIsOpenAddModal(true);\n    };\n    const handleCloseAddModal = ()=>{\n        setIsOpenAddModal(false);\n    };\n    const handleOpenUpdateModal = ()=>{\n        setIsOpenUpdateModal(true);\n    };\n    const handleCloseUpdateModal = ()=>{\n        setIsOpenUpdateModal(false);\n    };\n    const [formattedPatients, setFormattedPatients] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (patients) {\n            const formattedPatients = patients.map((patient)=>{\n                const dateOfBirth = new Date(patient.dateOfBirth);\n                const formattedDateOfBirth = \"\".concat(dateOfBirth.getDate(), \"/\").concat(dateOfBirth.getMonth() + 1, \"/\").concat(dateOfBirth.getFullYear());\n                return {\n                    ...patient,\n                    dateOfBirth: formattedDateOfBirth\n                };\n            });\n            setFormattedPatients(formattedPatients);\n        }\n    }, [\n        patients\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                item: true,\n                xs: 12,\n                margin: 3,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                    container: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                            item: true,\n                            xs: 12,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                onClick: ()=>handleOpenAddModal(),\n                                children: \"Add Patient\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                            item: true,\n                            xs: 12,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_5__.Table, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableHead, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableRow, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {\n                                                    children: \"PatientID\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {\n                                                    children: \"First Name\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                                    lineNumber: 88,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {\n                                                    children: \"Last Name\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {\n                                                    children: \"Date of Birth\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                                    lineNumber: 90,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {\n                                                    children: \"Patient Status\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {\n                                                    children: \"Actions\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                                    lineNumber: 92,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableBody, {\n                                        children: formattedPatients.map((patient)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableRow, {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {\n                                                        children: patient.patientID\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                                        lineNumber: 98,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {\n                                                        children: patient.firstName\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                                        lineNumber: 99,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {\n                                                        children: patient.lastName\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                                        lineNumber: 100,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {\n                                                        children: patient.dateOfBirth\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                                        lineNumber: 101,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {\n                                                        children: patient.patientStatus\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                                        lineNumber: 102,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                                                onClick: ()=>handleDeleteOpen(patient.patientID),\n                                                                children: \"Delete\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                                                lineNumber: 104,\n                                                                columnNumber: 23\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                                                onClick: ()=>handleOpenUpdateModal(patient.patientID),\n                                                                children: \"Update\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                                                lineNumber: 109,\n                                                                columnNumber: 23\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                                        lineNumber: 103,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                ]\n                                            }, patient.patientID, true, {\n                                                fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                                lineNumber: 97,\n                                                columnNumber: 19\n                                            }, undefined))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_molecules__WEBPACK_IMPORTED_MODULE_2__.ConfirmationAlert, {\n                open: open,\n                onClose: handleDeleteClose,\n                onAction: ()=>handleDelete()\n            }, void 0, false, {\n                fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UpdatePatientModal__WEBPACK_IMPORTED_MODULE_4__.UpdatePatientModal, {\n                isOpen: isOpenUpdateModal,\n                onCloseModal: handleCloseUpdateModal\n            }, void 0, false, {\n                fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AddPatientModal__WEBPACK_IMPORTED_MODULE_3__.AddPatientModal, {\n                isOpen: isOpenAddModal,\n                onCloseModal: handleCloseAddModal\n            }, void 0, false, {\n                fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(PatientTable, \"RoKlQQEG5up5Zgw31ACs94fk0WY=\");\n_c = PatientTable;\nvar _c;\n$RefreshReg$(_c, \"PatientTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVNBO2tFQUFFK0IsUUFBUUMsV0FBVzs7Ozs7O2tFQUMvQiw4REFBQ2hDLG1JQUFTQTtrRUFBRStCLFFBQVFlLGFBQWE7Ozs7OztrRUFDakMsOERBQUM5QyxtSUFBU0E7OzBFQUNSLDhEQUFDRSxnSUFBTUE7Z0VBQ0x3QyxTQUFTLElBQU12QixpQkFBaUJZLFFBQVFZLFNBQVM7MEVBQ2xEOzs7Ozs7MEVBR0QsOERBQUN6QyxnSUFBTUE7Z0VBQ0x3QyxTQUFTLElBQU1oQixzQkFBc0JLLFFBQVFZLFNBQVM7MEVBQ3ZEOzs7Ozs7Ozs7Ozs7OytDQWRVWixRQUFRWSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkEwQjVDLDhEQUFDdkMseURBQWlCQTtnQkFDaEJPLE1BQU1BO2dCQUNOb0MsU0FBUzFCO2dCQUNUMkIsVUFBVSxJQUFNMUI7Ozs7OzswQkFHbEIsOERBQUNoQixtRUFBa0JBO2dCQUFDMkMsUUFBUWxDO2dCQUFtQm1DLGNBQWN2Qjs7Ozs7OzBCQUM3RCw4REFBQ3RCLDZEQUFlQTtnQkFBQzRDLFFBQVFwQztnQkFBZ0JxQyxjQUFjekI7Ozs7Ozs7O0FBSTdELEVBQUU7R0FqSFdsQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZXMvcGF0aWVudHMvUGF0aWVudFRhYmxlLnRzeD9kYmRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBUYWJsZSxcbiAgVGFibGVIZWFkLFxuICBUYWJsZVJvdyxcbiAgVGFibGVDZWxsLFxuICBUYWJsZUJvZHksXG4gIEJ1dHRvbixcbiAgR3JpZCxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IENvbmZpcm1hdGlvbkFsZXJ0IH0gZnJvbSBcIkAvbW9sZWN1bGVzXCI7XG5pbXBvcnQgeyBBZGRQYXRpZW50UmVxdWVzdCwgUGF0aWVudCwgVXBkYXRlUGF0aWVudFJlcXVlc3QgfSBmcm9tIFwiLi9tb2RlbFwiO1xuaW1wb3J0IHsgQWRkUGF0aWVudE1vZGFsIH0gZnJvbSBcIi4vQWRkUGF0aWVudE1vZGFsXCI7XG5pbXBvcnQgeyBVcGRhdGVQYXRpZW50TW9kYWwgfSBmcm9tIFwiLi9VcGRhdGVQYXRpZW50TW9kYWxcIjtcbmludGVyZmFjZSBQcm9wcyB7XG4gIG9uRGVsZXRlUGF0aWVudDogKHBhdGllbnRJZDogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBvbkFkZFBhdGllbnQ6IChwYXRpZW50OiBBZGRQYXRpZW50UmVxdWVzdCkgPT4gUHJvbWlzZTx2b2lkPjtcbiAgb25VcGRhdGVQYXRpZW50OiAoaWQ6IHN0cmluZywgcGF0aWVudDogVXBkYXRlUGF0aWVudFJlcXVlc3QpID0+IFByb21pc2U8dm9pZD47XG4gIHBhdGllbnRzOiBQYXRpZW50W107XG59XG5leHBvcnQgY29uc3QgUGF0aWVudFRhYmxlID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IG9uRGVsZXRlUGF0aWVudCwgcGF0aWVudHMgfSA9IHByb3BzO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc09wZW5BZGRNb2RhbCwgc2V0SXNPcGVuQWRkTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNPcGVuVXBkYXRlTW9kYWwsIHNldElzT3BlblVwZGF0ZU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlbGVjdGVkUGF0aWVudElkLCBzZXRTZWxlY3RlZFBhdGllbnRJZF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVPcGVuID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICBzZXRTZWxlY3RlZFBhdGllbnRJZChpZCk7XG4gICAgc2V0T3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoKSA9PiB7XG4gICAgb25EZWxldGVQYXRpZW50KFN0cmluZyhzZWxlY3RlZFBhdGllbnRJZCkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU9wZW5BZGRNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRJc09wZW5BZGRNb2RhbCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZUFkZE1vZGFsID0gKCkgPT4ge1xuICAgIHNldElzT3BlbkFkZE1vZGFsKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVPcGVuVXBkYXRlTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuVXBkYXRlTW9kYWwodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2VVcGRhdGVNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRJc09wZW5VcGRhdGVNb2RhbChmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgW2Zvcm1hdHRlZFBhdGllbnRzLCBzZXRGb3JtYXR0ZWRQYXRpZW50c10gPSB1c2VTdGF0ZTxQYXRpZW50W10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwYXRpZW50cykge1xuICAgICAgY29uc3QgZm9ybWF0dGVkUGF0aWVudHMgPSBwYXRpZW50cy5tYXAoKHBhdGllbnQpID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZU9mQmlydGggPSBuZXcgRGF0ZShwYXRpZW50LmRhdGVPZkJpcnRoKTtcblxuICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlT2ZCaXJ0aCA9IGAke2RhdGVPZkJpcnRoLmdldERhdGUoKX0vJHtcbiAgICAgICAgICBkYXRlT2ZCaXJ0aC5nZXRNb250aCgpICsgMVxuICAgICAgICB9LyR7ZGF0ZU9mQmlydGguZ2V0RnVsbFllYXIoKX1gO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ucGF0aWVudCxcbiAgICAgICAgICBkYXRlT2ZCaXJ0aDogZm9ybWF0dGVkRGF0ZU9mQmlydGgsXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIHNldEZvcm1hdHRlZFBhdGllbnRzKGZvcm1hdHRlZFBhdGllbnRzKTtcbiAgICB9XG4gIH0sIFtwYXRpZW50c10pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWFyZ2luPXszfT5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlT3BlbkFkZE1vZGFsKCl9PkFkZCBQYXRpZW50PC9CdXR0b24+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgIDxUYWJsZT5cbiAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlBhdGllbnRJRDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5GaXJzdCBOYW1lPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPkxhc3QgTmFtZTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5EYXRlIG9mIEJpcnRoPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlBhdGllbnQgU3RhdHVzPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPkFjdGlvbnM8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICAgICAgICB7Zm9ybWF0dGVkUGF0aWVudHMubWFwKChwYXRpZW50KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtwYXRpZW50LnBhdGllbnRJRH0+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3BhdGllbnQucGF0aWVudElEfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntwYXRpZW50LmZpcnN0TmFtZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cGF0aWVudC5sYXN0TmFtZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cGF0aWVudC5kYXRlT2ZCaXJ0aH08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cGF0aWVudC5wYXRpZW50U3RhdHVzfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZU9wZW4ocGF0aWVudC5wYXRpZW50SUQpfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW5VcGRhdGVNb2RhbChwYXRpZW50LnBhdGllbnRJRCl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuXG4gICAgICA8Q29uZmlybWF0aW9uQWxlcnRcbiAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgb25DbG9zZT17aGFuZGxlRGVsZXRlQ2xvc2V9XG4gICAgICAgIG9uQWN0aW9uPXsoKSA9PiBoYW5kbGVEZWxldGUoKX1cbiAgICAgIC8+XG5cbiAgICAgIDxVcGRhdGVQYXRpZW50TW9kYWwgaXNPcGVuPXtpc09wZW5VcGRhdGVNb2RhbH0gb25DbG9zZU1vZGFsPXtoYW5kbGVDbG9zZVVwZGF0ZU1vZGFsfSAvPlxuICAgICAgPEFkZFBhdGllbnRNb2RhbCBpc09wZW49e2lzT3BlbkFkZE1vZGFsfSBvbkNsb3NlTW9kYWw9e2hhbmRsZUNsb3NlQWRkTW9kYWx9IC8+XG4gIFxuICAgIDwvPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVGFibGUiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIlRhYmxlQ2VsbCIsIlRhYmxlQm9keSIsIkJ1dHRvbiIsIkdyaWQiLCJDb25maXJtYXRpb25BbGVydCIsIkFkZFBhdGllbnRNb2RhbCIsIlVwZGF0ZVBhdGllbnRNb2RhbCIsIlBhdGllbnRUYWJsZSIsInByb3BzIiwib25EZWxldGVQYXRpZW50IiwicGF0aWVudHMiLCJvcGVuIiwic2V0T3BlbiIsImlzT3BlbkFkZE1vZGFsIiwic2V0SXNPcGVuQWRkTW9kYWwiLCJpc09wZW5VcGRhdGVNb2RhbCIsInNldElzT3BlblVwZGF0ZU1vZGFsIiwic2VsZWN0ZWRQYXRpZW50SWQiLCJzZXRTZWxlY3RlZFBhdGllbnRJZCIsImhhbmRsZURlbGV0ZU9wZW4iLCJpZCIsImhhbmRsZURlbGV0ZUNsb3NlIiwiaGFuZGxlRGVsZXRlIiwiU3RyaW5nIiwiaGFuZGxlT3BlbkFkZE1vZGFsIiwiaGFuZGxlQ2xvc2VBZGRNb2RhbCIsImhhbmRsZU9wZW5VcGRhdGVNb2RhbCIsImhhbmRsZUNsb3NlVXBkYXRlTW9kYWwiLCJmb3JtYXR0ZWRQYXRpZW50cyIsInNldEZvcm1hdHRlZFBhdGllbnRzIiwibWFwIiwicGF0aWVudCIsImRhdGVPZkJpcnRoIiwiRGF0ZSIsImZvcm1hdHRlZERhdGVPZkJpcnRoIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJpdGVtIiwieHMiLCJtYXJnaW4iLCJjb250YWluZXIiLCJvbkNsaWNrIiwicGF0aWVudElEIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJwYXRpZW50U3RhdHVzIiwib25DbG9zZSIsIm9uQWN0aW9uIiwiaXNPcGVuIiwib25DbG9zZU1vZGFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/patients/PatientTable.tsx\n"));

/***/ })

});