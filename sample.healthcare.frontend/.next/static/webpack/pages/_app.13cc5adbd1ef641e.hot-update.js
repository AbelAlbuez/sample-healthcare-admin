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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PatientTable: function() { return /* binding */ PatientTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Table,TableBody,TableCell,TableHead,TableRow!=!@mui/material */ \"__barrel_optimize__?names=Button,Table,TableBody,TableCell,TableHead,TableRow!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _molecules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/molecules */ \"./src/molecules/index.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst PatientTable = (props)=>{\n    _s();\n    const { onDelete, patients } = props;\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedPatientId, setSelectedPatientId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleDeleteOpen = (id)=>{\n        setSelectedPatientId(id);\n        setOpen(true);\n    };\n    const handleDeleteClose = ()=>{\n        setOpen(false);\n    };\n    const handleDelete = ()=>{\n        onDelete(String(selectedPatientId));\n    };\n    const [formattedPatients, setFormattedPatients] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (patients) {\n            const formattedPatients = patients.map((patient)=>{\n                const dateOfBirth = new Date(patient.dateOfBirth);\n                const formattedDateOfBirth = \"\".concat(dateOfBirth.getDate(), \"/\").concat(dateOfBirth.getMonth() + 1, \"/\").concat(dateOfBirth.getFullYear());\n                return {\n                    ...patient,\n                    dateOfBirth: formattedDateOfBirth\n                };\n            });\n            setFormattedPatients(formattedPatients);\n        }\n    }, [\n        patients\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.Table, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableHead, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableRow, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                    children: \"PatientID\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                    children: \"First Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                    children: \"Last Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                    children: \"Date of Birth\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                    children: \"Patient Status\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                    children: \"Actions\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableBody, {\n                        children: formattedPatients.map((patient)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableRow, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                        children: patient.patientID\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                        children: patient.firstName\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                        children: patient.lastName\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                        children: patient.dateOfBirth\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                        children: patient.patientStatus\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            onClick: ()=>handleDeleteOpen(patient.patientID),\n                                            children: \"Delete\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, patient.patientID, true, {\n                                fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_molecules__WEBPACK_IMPORTED_MODULE_2__.ConfirmationAlert, {\n                open: open,\n                onClose: handleDeleteClose,\n                onAction: ()=>handleDelete()\n            }, void 0, false, {\n                fileName: \"/Users/abelalbuez/Documents/sample-healthcare-admin/sample.healthcare.frontend/src/features/patients/PatientTable.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(PatientTable, \"9q5/2ydJSHr5usb0GLQVKaAPfjk=\");\n_c = PatientTable;\nvar _c;\n$RefreshReg$(_c, \"PatientTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvcGF0aWVudHMvUGF0aWVudFRhYmxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFRNUI7QUFDeUI7QUFnQnpDLE1BQU1VLGVBQWUsQ0FBQ0M7O0lBQzNCLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUUsR0FBR0Y7SUFDL0IsTUFBTSxDQUFDRyxNQUFNQyxRQUFRLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ2MsbUJBQW1CQyxxQkFBcUIsR0FBR2YsK0NBQVFBLENBQUM7SUFFM0QsTUFBTWdCLG1CQUFtQixDQUFDQztRQUN4QkYscUJBQXFCRTtRQUNyQkosUUFBUTtJQUNWO0lBRUEsTUFBTUssb0JBQW9CO1FBQ3hCTCxRQUFRO0lBQ1Y7SUFFQSxNQUFNTSxlQUFlO1FBQ25CVCxTQUFTVSxPQUFPTjtJQUNsQjtJQUNBLE1BQU0sQ0FBQ08sbUJBQW1CQyxxQkFBcUIsR0FBR3RCLCtDQUFRQSxDQUFZLEVBQUU7SUFFeEVELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVksVUFBVTtZQUNaLE1BQU1VLG9CQUFvQlYsU0FBU1ksR0FBRyxDQUFDLENBQUNDO2dCQUN0QyxNQUFNQyxjQUFjLElBQUlDLEtBQUtGLFFBQVFDLFdBQVc7Z0JBRWhELE1BQU1FLHVCQUF1QixHQUMzQkYsT0FEOEJBLFlBQVlHLE9BQU8sSUFBRyxLQUVsREgsT0FERkEsWUFBWUksUUFBUSxLQUFLLEdBQzFCLEtBQTZCLE9BQTFCSixZQUFZSyxXQUFXO2dCQUUzQixPQUFPO29CQUNMLEdBQUdOLE9BQU87b0JBQ1ZDLGFBQWFFO2dCQUNmO1lBQ0Y7WUFDQUwscUJBQXFCRDtRQUN2QjtJQUNGLEdBQUc7UUFBQ1Y7S0FBUztJQUNiLHFCQUNFOzswQkFDRSw4REFBQ1YsMEhBQUtBOztrQ0FDSiw4REFBQ0MsOEhBQVNBO2tDQUNSLDRFQUFDQyw2SEFBUUE7OzhDQUNQLDhEQUFDQyw4SEFBU0E7OENBQUM7Ozs7Ozs4Q0FDWCw4REFBQ0EsOEhBQVNBOzhDQUFDOzs7Ozs7OENBQ1gsOERBQUNBLDhIQUFTQTs4Q0FBQzs7Ozs7OzhDQUNYLDhEQUFDQSw4SEFBU0E7OENBQUM7Ozs7Ozs4Q0FDWCw4REFBQ0EsOEhBQVNBOzhDQUFDOzs7Ozs7OENBQ1gsOERBQUNBLDhIQUFTQTs4Q0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR2YsOERBQUNDLDhIQUFTQTtrQ0FDUGdCLGtCQUFrQkUsR0FBRyxDQUFDLENBQUNDLHdCQUN0Qiw4REFBQ3JCLDZIQUFRQTs7a0RBQ1AsOERBQUNDLDhIQUFTQTtrREFBRW9CLFFBQVFPLFNBQVM7Ozs7OztrREFDN0IsOERBQUMzQiw4SEFBU0E7a0RBQUVvQixRQUFRUSxTQUFTOzs7Ozs7a0RBQzdCLDhEQUFDNUIsOEhBQVNBO2tEQUFFb0IsUUFBUVMsUUFBUTs7Ozs7O2tEQUM1Qiw4REFBQzdCLDhIQUFTQTtrREFBRW9CLFFBQVFDLFdBQVc7Ozs7OztrREFDL0IsOERBQUNyQiw4SEFBU0E7a0RBQUVvQixRQUFRVSxhQUFhOzs7Ozs7a0RBQ2pDLDhEQUFDOUIsOEhBQVNBO2tEQUNSLDRFQUFDRSwySEFBTUE7NENBQUM2QixTQUFTLElBQU1uQixpQkFBaUJRLFFBQVFPLFNBQVM7c0RBQUc7Ozs7Ozs7Ozs7OzsrQkFQakRQLFFBQVFPLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBZXRDLDhEQUFDeEIseURBQWlCQTtnQkFDaEJLLE1BQU1BO2dCQUNOd0IsU0FBU2xCO2dCQUNUbUIsVUFBVSxJQUFNbEI7Ozs7Ozs7O0FBSXhCLEVBQUU7R0F6RVdYO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlcy9wYXRpZW50cy9QYXRpZW50VGFibGUudHN4P2RiZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIFRhYmxlLFxuICBUYWJsZUhlYWQsXG4gIFRhYmxlUm93LFxuICBUYWJsZUNlbGwsXG4gIFRhYmxlQm9keSxcbiAgQnV0dG9uLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgQ29uZmlybWF0aW9uQWxlcnQgfSBmcm9tIFwiQC9tb2xlY3VsZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBQYXRpZW50IHtcbiAgcGF0aWVudElEOiBudW1iZXI7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogc3RyaW5nO1xuICBwYXRpZW50U3RhdHVzOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG9uRGVsZXRlUGF0aWVudDogKHBhdGllbnRJZDogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBvbkFkZFBhdGllbnQ6IChwYXRpZW50SWQ6IHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcbiAgb25EZWxldGVQYXRpZW50OiAocGF0aWVudElkOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG4gIHBhdGllbnRzOiBQYXRpZW50W107XG59XG5leHBvcnQgY29uc3QgUGF0aWVudFRhYmxlID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IG9uRGVsZXRlLCBwYXRpZW50cyB9ID0gcHJvcHM7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlbGVjdGVkUGF0aWVudElkLCBzZXRTZWxlY3RlZFBhdGllbnRJZF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVPcGVuID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICBzZXRTZWxlY3RlZFBhdGllbnRJZChpZCk7XG4gICAgc2V0T3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoKSA9PiB7XG4gICAgb25EZWxldGUoU3RyaW5nKHNlbGVjdGVkUGF0aWVudElkKSk7XG4gIH07XG4gIGNvbnN0IFtmb3JtYXR0ZWRQYXRpZW50cywgc2V0Rm9ybWF0dGVkUGF0aWVudHNdID0gdXNlU3RhdGU8UGF0aWVudFtdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocGF0aWVudHMpIHtcbiAgICAgIGNvbnN0IGZvcm1hdHRlZFBhdGllbnRzID0gcGF0aWVudHMubWFwKChwYXRpZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGVPZkJpcnRoID0gbmV3IERhdGUocGF0aWVudC5kYXRlT2ZCaXJ0aCk7XG5cbiAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZU9mQmlydGggPSBgJHtkYXRlT2ZCaXJ0aC5nZXREYXRlKCl9LyR7XG4gICAgICAgICAgZGF0ZU9mQmlydGguZ2V0TW9udGgoKSArIDFcbiAgICAgICAgfS8ke2RhdGVPZkJpcnRoLmdldEZ1bGxZZWFyKCl9YDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnBhdGllbnQsXG4gICAgICAgICAgZGF0ZU9mQmlydGg6IGZvcm1hdHRlZERhdGVPZkJpcnRoLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBzZXRGb3JtYXR0ZWRQYXRpZW50cyhmb3JtYXR0ZWRQYXRpZW50cyk7XG4gICAgfVxuICB9LCBbcGF0aWVudHNdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRhYmxlPlxuICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+UGF0aWVudElEPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsPkZpcnN0IE5hbWU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+TGFzdCBOYW1lPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsPkRhdGUgb2YgQmlydGg8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+UGF0aWVudCBTdGF0dXM8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+QWN0aW9uczwvVGFibGVDZWxsPlxuICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgIHtmb3JtYXR0ZWRQYXRpZW50cy5tYXAoKHBhdGllbnQpID0+IChcbiAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3BhdGllbnQucGF0aWVudElEfT5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cGF0aWVudC5wYXRpZW50SUR9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3BhdGllbnQuZmlyc3ROYW1lfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsPntwYXRpZW50Lmxhc3ROYW1lfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsPntwYXRpZW50LmRhdGVPZkJpcnRofTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsPntwYXRpZW50LnBhdGllbnRTdGF0dXN9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVPcGVuKHBhdGllbnQucGF0aWVudElEKX0+XG4gICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgIDwvVGFibGU+XG4gICAgICA8Q29uZmlybWF0aW9uQWxlcnRcbiAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgb25DbG9zZT17aGFuZGxlRGVsZXRlQ2xvc2V9XG4gICAgICAgIG9uQWN0aW9uPXsoKSA9PiBoYW5kbGVEZWxldGUoKX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUYWJsZSIsIlRhYmxlSGVhZCIsIlRhYmxlUm93IiwiVGFibGVDZWxsIiwiVGFibGVCb2R5IiwiQnV0dG9uIiwiQ29uZmlybWF0aW9uQWxlcnQiLCJQYXRpZW50VGFibGUiLCJwcm9wcyIsIm9uRGVsZXRlIiwicGF0aWVudHMiLCJvcGVuIiwic2V0T3BlbiIsInNlbGVjdGVkUGF0aWVudElkIiwic2V0U2VsZWN0ZWRQYXRpZW50SWQiLCJoYW5kbGVEZWxldGVPcGVuIiwiaWQiLCJoYW5kbGVEZWxldGVDbG9zZSIsImhhbmRsZURlbGV0ZSIsIlN0cmluZyIsImZvcm1hdHRlZFBhdGllbnRzIiwic2V0Rm9ybWF0dGVkUGF0aWVudHMiLCJtYXAiLCJwYXRpZW50IiwiZGF0ZU9mQmlydGgiLCJEYXRlIiwiZm9ybWF0dGVkRGF0ZU9mQmlydGgiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsInBhdGllbnRJRCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicGF0aWVudFN0YXR1cyIsIm9uQ2xpY2siLCJvbkNsb3NlIiwib25BY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/features/patients/PatientTable.tsx\n"));

/***/ })

});