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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PatientTable: function() { return /* binding */ PatientTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Table,TableBody,TableCell,TableHead,TableRow!=!@mui/material */ \"__barrel_optimize__?names=Button,Table,TableBody,TableCell,TableHead,TableRow!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _molecules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/molecules */ \"./src/molecules/index.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst PatientTable = (props)=>{\n    _s();\n    const { onDeletePatient, patients } = props;\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedPatientId, setSelectedPatientId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleDeleteOpen = (id)=>{\n        setSelectedPatientId(id);\n        setOpen(true);\n    };\n    const handleDeleteClose = ()=>{\n        setOpen(false);\n    };\n    const handleDelete = ()=>{\n        onDeletePatient(String(selectedPatientId));\n    };\n    const [formattedPatients, setFormattedPatients] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (patients) {\n            const formattedPatients = patients.map((patient)=>{\n                const dateOfBirth = new Date(patient.dateOfBirth);\n                const formattedDateOfBirth = \"\".concat(dateOfBirth.getDate(), \"/\").concat(dateOfBirth.getMonth() + 1, \"/\").concat(dateOfBirth.getFullYear());\n                return {\n                    ...patient,\n                    dateOfBirth: formattedDateOfBirth\n                };\n            });\n            setFormattedPatients(formattedPatients);\n        }\n    }, [\n        patients\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.Table, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableHead, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableRow, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                    children: \"PatientID\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                    children: \"First Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                    children: \"Last Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                    children: \"Date of Birth\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                    children: \"Patient Status\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                    children: \"Actions\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableBody, {\n                        children: formattedPatients.map((patient)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableRow, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                        children: patient.patientID\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                        children: patient.firstName\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                        children: patient.lastName\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                        children: patient.dateOfBirth\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                        children: patient.patientStatus\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            onClick: ()=>handleDeleteOpen(patient.patientID),\n                                            children: \"Delete\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, patient.patientID, true, {\n                                fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_molecules__WEBPACK_IMPORTED_MODULE_2__.ConfirmationAlert, {\n                open: open,\n                onClose: handleDeleteClose,\n                onAction: ()=>handleDelete()\n            }, void 0, false, {\n                fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(PatientTable, \"9q5/2ydJSHr5usb0GLQVKaAPfjk=\");\n_c = PatientTable;\nvar _c;\n$RefreshReg$(_c, \"PatientTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvcGF0aWVudHMvUGF0aWVudFRhYmxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFRNUI7QUFDeUI7QUFRekMsTUFBTVUsZUFBZSxDQUFDQzs7SUFDM0IsTUFBTSxFQUFFQyxlQUFlLEVBQUVDLFFBQVEsRUFBRSxHQUFHRjtJQUN0QyxNQUFNLENBQUNHLE1BQU1DLFFBQVEsR0FBR2IsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDYyxtQkFBbUJDLHFCQUFxQixHQUFHZiwrQ0FBUUEsQ0FBQztJQUUzRCxNQUFNZ0IsbUJBQW1CLENBQUNDO1FBQ3hCRixxQkFBcUJFO1FBQ3JCSixRQUFRO0lBQ1Y7SUFFQSxNQUFNSyxvQkFBb0I7UUFDeEJMLFFBQVE7SUFDVjtJQUVBLE1BQU1NLGVBQWU7UUFDbkJULGdCQUFnQlUsT0FBT047SUFDekI7SUFFQSxNQUFNLENBQUNPLG1CQUFtQkMscUJBQXFCLEdBQUd0QiwrQ0FBUUEsQ0FBWSxFQUFFO0lBRXhFRCxnREFBU0EsQ0FBQztRQUNSLElBQUlZLFVBQVU7WUFDWixNQUFNVSxvQkFBb0JWLFNBQVNZLEdBQUcsQ0FBQyxDQUFDQztnQkFDdEMsTUFBTUMsY0FBYyxJQUFJQyxLQUFLRixRQUFRQyxXQUFXO2dCQUVoRCxNQUFNRSx1QkFBdUIsR0FDM0JGLE9BRDhCQSxZQUFZRyxPQUFPLElBQUcsS0FFbERILE9BREZBLFlBQVlJLFFBQVEsS0FBSyxHQUMxQixLQUE2QixPQUExQkosWUFBWUssV0FBVztnQkFFM0IsT0FBTztvQkFDTCxHQUFHTixPQUFPO29CQUNWQyxhQUFhRTtnQkFDZjtZQUNGO1lBQ0FMLHFCQUFxQkQ7UUFDdkI7SUFDRixHQUFHO1FBQUNWO0tBQVM7SUFDYixxQkFDRTs7MEJBQ0UsOERBQUNWLDBIQUFLQTs7a0NBQ0osOERBQUNDLDhIQUFTQTtrQ0FDUiw0RUFBQ0MsNkhBQVFBOzs4Q0FDUCw4REFBQ0MsOEhBQVNBOzhDQUFDOzs7Ozs7OENBQ1gsOERBQUNBLDhIQUFTQTs4Q0FBQzs7Ozs7OzhDQUNYLDhEQUFDQSw4SEFBU0E7OENBQUM7Ozs7Ozs4Q0FDWCw4REFBQ0EsOEhBQVNBOzhDQUFDOzs7Ozs7OENBQ1gsOERBQUNBLDhIQUFTQTs4Q0FBQzs7Ozs7OzhDQUNYLDhEQUFDQSw4SEFBU0E7OENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdmLDhEQUFDQyw4SEFBU0E7a0NBQ1BnQixrQkFBa0JFLEdBQUcsQ0FBQyxDQUFDQyx3QkFDdEIsOERBQUNyQiw2SEFBUUE7O2tEQUNQLDhEQUFDQyw4SEFBU0E7a0RBQUVvQixRQUFRTyxTQUFTOzs7Ozs7a0RBQzdCLDhEQUFDM0IsOEhBQVNBO2tEQUFFb0IsUUFBUVEsU0FBUzs7Ozs7O2tEQUM3Qiw4REFBQzVCLDhIQUFTQTtrREFBRW9CLFFBQVFTLFFBQVE7Ozs7OztrREFDNUIsOERBQUM3Qiw4SEFBU0E7a0RBQUVvQixRQUFRQyxXQUFXOzs7Ozs7a0RBQy9CLDhEQUFDckIsOEhBQVNBO2tEQUFFb0IsUUFBUVUsYUFBYTs7Ozs7O2tEQUNqQyw4REFBQzlCLDhIQUFTQTtrREFDUiw0RUFBQ0UsMkhBQU1BOzRDQUFDNkIsU0FBUyxJQUFNbkIsaUJBQWlCUSxRQUFRTyxTQUFTO3NEQUFHOzs7Ozs7Ozs7Ozs7K0JBUGpEUCxRQUFRTyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OzBCQWV0Qyw4REFBQ3hCLHlEQUFpQkE7Z0JBQ2hCSyxNQUFNQTtnQkFDTndCLFNBQVNsQjtnQkFDVG1CLFVBQVUsSUFBTWxCOzs7Ozs7OztBQUl4QixFQUFFO0dBMUVXWDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZXMvcGF0aWVudHMvUGF0aWVudFRhYmxlLnRzeD9kYmRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBUYWJsZSxcbiAgVGFibGVIZWFkLFxuICBUYWJsZVJvdyxcbiAgVGFibGVDZWxsLFxuICBUYWJsZUJvZHksXG4gIEJ1dHRvbixcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IENvbmZpcm1hdGlvbkFsZXJ0IH0gZnJvbSBcIkAvbW9sZWN1bGVzXCI7XG5pbXBvcnQgeyBBZGRQYXRpZW50UmVxdWVzdCwgUGF0aWVudCwgVXBkYXRlUGF0aWVudFJlcXVlc3QgfSBmcm9tIFwiLi9tb2RlbFwiO1xuaW50ZXJmYWNlIFByb3BzIHtcbiAgb25EZWxldGVQYXRpZW50OiAocGF0aWVudElkOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG4gIG9uQWRkUGF0aWVudDogKHBhdGllbnQ6IEFkZFBhdGllbnRSZXF1ZXN0KSA9PiBQcm9taXNlPHZvaWQ+O1xuICBvblVwZGF0ZVBhdGllbnQ6IChpZDogc3RyaW5nLCBwYXRpZW50OiBVcGRhdGVQYXRpZW50UmVxdWVzdCkgPT4gUHJvbWlzZTx2b2lkPjtcbiAgcGF0aWVudHM6IFBhdGllbnRbXTtcbn1cbmV4cG9ydCBjb25zdCBQYXRpZW50VGFibGUgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb25EZWxldGVQYXRpZW50LCBwYXRpZW50cyB9ID0gcHJvcHM7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlbGVjdGVkUGF0aWVudElkLCBzZXRTZWxlY3RlZFBhdGllbnRJZF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVPcGVuID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICBzZXRTZWxlY3RlZFBhdGllbnRJZChpZCk7XG4gICAgc2V0T3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoKSA9PiB7XG4gICAgb25EZWxldGVQYXRpZW50KFN0cmluZyhzZWxlY3RlZFBhdGllbnRJZCkpO1xuICB9O1xuXG4gIGNvbnN0IFtmb3JtYXR0ZWRQYXRpZW50cywgc2V0Rm9ybWF0dGVkUGF0aWVudHNdID0gdXNlU3RhdGU8UGF0aWVudFtdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocGF0aWVudHMpIHtcbiAgICAgIGNvbnN0IGZvcm1hdHRlZFBhdGllbnRzID0gcGF0aWVudHMubWFwKChwYXRpZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGVPZkJpcnRoID0gbmV3IERhdGUocGF0aWVudC5kYXRlT2ZCaXJ0aCk7XG5cbiAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZU9mQmlydGggPSBgJHtkYXRlT2ZCaXJ0aC5nZXREYXRlKCl9LyR7XG4gICAgICAgICAgZGF0ZU9mQmlydGguZ2V0TW9udGgoKSArIDFcbiAgICAgICAgfS8ke2RhdGVPZkJpcnRoLmdldEZ1bGxZZWFyKCl9YDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnBhdGllbnQsXG4gICAgICAgICAgZGF0ZU9mQmlydGg6IGZvcm1hdHRlZERhdGVPZkJpcnRoLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBzZXRGb3JtYXR0ZWRQYXRpZW50cyhmb3JtYXR0ZWRQYXRpZW50cyk7XG4gICAgfVxuICB9LCBbcGF0aWVudHNdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRhYmxlPlxuICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+UGF0aWVudElEPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsPkZpcnN0IE5hbWU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+TGFzdCBOYW1lPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsPkRhdGUgb2YgQmlydGg8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+UGF0aWVudCBTdGF0dXM8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+QWN0aW9uczwvVGFibGVDZWxsPlxuICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgIHtmb3JtYXR0ZWRQYXRpZW50cy5tYXAoKHBhdGllbnQpID0+IChcbiAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3BhdGllbnQucGF0aWVudElEfT5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cGF0aWVudC5wYXRpZW50SUR9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3BhdGllbnQuZmlyc3ROYW1lfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsPntwYXRpZW50Lmxhc3ROYW1lfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsPntwYXRpZW50LmRhdGVPZkJpcnRofTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsPntwYXRpZW50LnBhdGllbnRTdGF0dXN9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVPcGVuKHBhdGllbnQucGF0aWVudElEKX0+XG4gICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgIDwvVGFibGU+XG4gICAgICA8Q29uZmlybWF0aW9uQWxlcnRcbiAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgb25DbG9zZT17aGFuZGxlRGVsZXRlQ2xvc2V9XG4gICAgICAgIG9uQWN0aW9uPXsoKSA9PiBoYW5kbGVEZWxldGUoKX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUYWJsZSIsIlRhYmxlSGVhZCIsIlRhYmxlUm93IiwiVGFibGVDZWxsIiwiVGFibGVCb2R5IiwiQnV0dG9uIiwiQ29uZmlybWF0aW9uQWxlcnQiLCJQYXRpZW50VGFibGUiLCJwcm9wcyIsIm9uRGVsZXRlUGF0aWVudCIsInBhdGllbnRzIiwib3BlbiIsInNldE9wZW4iLCJzZWxlY3RlZFBhdGllbnRJZCIsInNldFNlbGVjdGVkUGF0aWVudElkIiwiaGFuZGxlRGVsZXRlT3BlbiIsImlkIiwiaGFuZGxlRGVsZXRlQ2xvc2UiLCJoYW5kbGVEZWxldGUiLCJTdHJpbmciLCJmb3JtYXR0ZWRQYXRpZW50cyIsInNldEZvcm1hdHRlZFBhdGllbnRzIiwibWFwIiwicGF0aWVudCIsImRhdGVPZkJpcnRoIiwiRGF0ZSIsImZvcm1hdHRlZERhdGVPZkJpcnRoIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJwYXRpZW50SUQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInBhdGllbnRTdGF0dXMiLCJvbkNsaWNrIiwib25DbG9zZSIsIm9uQWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/patients/PatientTable.tsx\n"));

/***/ })

});