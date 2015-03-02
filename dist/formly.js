// angular-formly version 4.0.0 built with ♥ by Astrism <astrisms@gmail.com>, Kent C. Dodds <kent@doddsfamily.us> (ó ì_í)=óò=(ì_í ò)

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("apiCheck"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "apiCheck"], factory);
	else if(typeof exports === 'object')
		exports["ngFormly"] = factory(require("angular"), require("apiCheck"));
	else
		root["ngFormly"] = factory(root["angular"], root["apiCheck"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_21__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var ngModuleName = "formly";
	var angular = __webpack_require__(2);
	var ngModule = angular.module(ngModuleName, []);
	
	__webpack_require__(3)(ngModule);
	__webpack_require__(4)(ngModule);
	__webpack_require__(5)(ngModule);
	__webpack_require__(6)(ngModule);
	
	module.exports = ngModuleName;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	// some versions of angular don't export the angular module properly,
	// so we get it from window in this case.
	var angular = __webpack_require__(7);
	if (!angular.version) {
	  angular = window.angular;
	}
	module.exports = angular;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  __webpack_require__(10)(ngModule);
	  __webpack_require__(11)(ngModule);
	  __webpack_require__(12)(ngModule);
	  __webpack_require__(13)(ngModule);
	  __webpack_require__(14)(ngModule);
	  __webpack_require__(15)(ngModule);
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  __webpack_require__(23)(ngModule);
	  __webpack_require__(8)(ngModule);
	  __webpack_require__(9)(ngModule);
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  __webpack_require__(16)(ngModule);
	  __webpack_require__(17)(ngModule);
	  __webpack_require__(18)(ngModule);
	  __webpack_require__(19)(ngModule);
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  __webpack_require__(20)(ngModule);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var utils = __webpack_require__(22);
	
	module.exports = function (ngModule) {
	  ngModule.factory("formlyUtil", formlyUtil);
	
	  formlyUtil.tests = false ? require("./formlyUtil.test")(ngModule) : null;
	
	  function formlyUtil() {
	    return utils;
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _toConsumableArray = function (arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } };
	
	module.exports = function (ngModule) {
	  ngModule.factory("formlyWarn", ["formlyConfig", "formlyErrorAndWarningsUrlPrefix", "$log", function (formlyConfig, formlyErrorAndWarningsUrlPrefix, $log) {
	    return function warn() {
	      if (!formlyConfig.disableWarnings) {
	        var args = Array.prototype.slice.call(arguments);
	        var warnInfoSlug = args.shift();
	        args.unshift("Formly Warning:");
	        args.push("" + formlyErrorAndWarningsUrlPrefix + "" + warnInfoSlug);
	        $log.warn.apply($log, _toConsumableArray(args));
	      }
	    };
	  }]);
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	
	  var apiCheck = __webpack_require__(21)({
	    output: {
	      prefix: "angular-formly:",
	      docsBaseUrl: "https://github.com/formly-js/angular-formly/blob/" + ("4.0.0") + "/other/ERRORS_AND_WARNINGS.md#"
	    }
	  });
	
	  ngModule.constant("formlyApiCheck", apiCheck);
	  if (false) {
	    require("./formlyApiCheck.test")(ngModule);
	  }
	
	  var formlyExpression = apiCheck.oneOfType([apiCheck.string, apiCheck.func]);
	  var wrapperType = apiCheck.oneOfType([apiCheck.oneOf([null]), apiCheck.typeOrArrayOf(apiCheck.string)]);
	
	  var fieldOptionsApiShape = {
	    type: apiCheck.shape.ifNot(["template", "templateUrl"], apiCheck.string).optional,
	    template: apiCheck.shape.ifNot(["type", "templateUrl"], apiCheck.string).optional,
	    templateUrl: apiCheck.shape.ifNot(["type", "template"], apiCheck.string).optional,
	    key: apiCheck.oneOfType([apiCheck.string, apiCheck.number]),
	    model: apiCheck.object.optional,
	    expressionProperties: apiCheck.objectOf(apiCheck.oneOfType([formlyExpression, apiCheck.shape({
	      expression: formlyExpression,
	      message: formlyExpression.optional
	    }).strict])).optional,
	    data: apiCheck.object.optional,
	    templateOptions: apiCheck.object.optional,
	    wrapper: wrapperType.optional,
	    modelOptions: apiCheck.shape({
	      updateOn: apiCheck.string.optional,
	      debounce: apiCheck.oneOfType([apiCheck.object, apiCheck.string]).optional,
	      allowInvalid: apiCheck.bool.optional,
	      getterSetter: apiCheck.bool.optional,
	      timezone: apiCheck.string.optional
	    }).optional,
	    watcher: apiCheck.typeOrArrayOf(apiCheck.shape({
	      expression: formlyExpression.optional,
	      listener: formlyExpression
	    })).optional,
	    validators: apiCheck.objectOf(apiCheck.oneOfType([apiCheck.func, apiCheck.shape({
	      expression: formlyExpression,
	      message: formlyExpression.optional
	    }).strict])).optional,
	    noFormControl: apiCheck.bool.optional,
	    hide: apiCheck.bool.optional,
	    ngModelAttrs: apiCheck.objectOf(apiCheck.shape({
	      expression: apiCheck.shape.ifNot(["value", "attribute", "bound"], apiCheck.any).optional,
	      value: apiCheck.shape.ifNot("expression", apiCheck.any).optional,
	      attribute: apiCheck.shape.ifNot("expression", apiCheck.any).optional,
	      bound: apiCheck.shape.ifNot("expression", apiCheck.any).optional
	    }).strict).optional,
	    optionsTypes: apiCheck.typeOrArrayOf(apiCheck.string).optional,
	    link: apiCheck.func.optional,
	    controller: apiCheck.oneOfType([apiCheck.string, apiCheck.func, apiCheck.array]).optional,
	    validation: apiCheck.shape({
	      show: apiCheck.oneOfType([apiCheck.bool, apiCheck.oneOf([null])]).optional,
	      messages: apiCheck.objectOf(apiCheck.func).optional,
	      errorExistsAndShouldBeVisible: apiCheck.bool.optional
	    }).optional,
	    formControl: apiCheck.object.optional,
	    value: apiCheck.func.optional,
	    runExpressions: apiCheck.func.optional
	  };
	
	  var formlyFieldOptions = apiCheck.shape(fieldOptionsApiShape).strict;
	
	  var typeOptionsDefaultOptions = angular.copy(fieldOptionsApiShape);
	  typeOptionsDefaultOptions.key = apiCheck.string.optional;
	
	  var formlyTypeOptions = apiCheck.shape({
	    name: apiCheck.string,
	    template: apiCheck.shape.ifNot("templateUrl", apiCheck.string).optional,
	    templateUrl: apiCheck.shape.ifNot("template", apiCheck.string).optional,
	    controller: apiCheck.oneOfType([apiCheck.func, apiCheck.string, apiCheck.array]).optional,
	    link: apiCheck.func.optional,
	    defaultOptions: apiCheck.oneOfType([apiCheck.func, apiCheck.shape(typeOptionsDefaultOptions)]).optional,
	    "extends": apiCheck.string.optional,
	    wrapper: wrapperType.optional,
	    data: apiCheck.object.optional,
	    validateOptions: apiCheck.func.optional,
	    overwriteOk: apiCheck.bool.optional
	  }).strict;
	
	  angular.extend(apiCheck, {
	    formlyTypeOptions: formlyTypeOptions, formlyFieldOptions: formlyFieldOptions, formlyExpression: formlyExpression
	  });
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var angular = __webpack_require__(2);
	
	module.exports = function (ngModule) {
	  ngModule.provider("formlyUsability", ["formlyVersion", function (formlyVersion) {
	    var _this = this;
	
	    var errorsAndWarningsUrlPrefix = "https://github.com/formly-js/angular-formly/blob/" + formlyVersion + "/other/ERRORS_AND_WARNINGS.md#";
	    angular.extend(this, {
	      getFormlyError: getFormlyError,
	      getFieldError: getFieldError,
	      checkWrapper: checkWrapper,
	      checkWrapperTemplate: checkWrapperTemplate,
	      checkAllowedProperties: checkAllowedProperties,
	      $get: function () {
	        return _this;
	      }
	    });
	
	    function getFieldError(errorInfoSlug, message, field) {
	      if (arguments.length < 3) {
	        field = message;
	        message = errorInfoSlug;
	        errorInfoSlug = null;
	      }
	      return new Error(getErrorMessage(errorInfoSlug, message) + (" Field definition: " + angular.toJson(field)));
	    }
	
	    function getFormlyError(errorInfoSlug, message) {
	      if (!message) {
	        message = errorInfoSlug;
	        errorInfoSlug = null;
	      }
	      return new Error(getErrorMessage(errorInfoSlug, message));
	    }
	
	    function getErrorMessage(errorInfoSlug, message) {
	      var url = "";
	      if (errorInfoSlug !== null) {
	        url = "" + errorsAndWarningsUrlPrefix + "" + errorInfoSlug;
	      }
	      return "Formly Error: " + message + ". " + url;
	    }
	
	    function checkWrapper(wrapper) {
	      if (wrapper.template && wrapper.templateUrl) {
	        throw getFormlyError("Template wrappers can only have a templateUrl or a template. " + ("This one provided both: " + JSON.stringify(wrapper)));
	      }
	      if (!wrapper.template && !wrapper.templateUrl) {
	        throw getFormlyError("Template wrappers must have one of a templateUrl or a template. " + ("This one provided neither: " + JSON.stringify(wrapper)));
	      }
	    }
	
	    function checkWrapperTemplate(template, additionalInfo) {
	      var formlyTransclude = "<formly-transclude></formly-transclude>";
	      if (template.indexOf(formlyTransclude) === -1) {
	        throw getFormlyError("Template wrapper templates must use \"" + formlyTransclude + "\" somewhere in them. " + ("This one does not have \"<formly-transclude></formly-transclude>\" in it: " + template) + "\n" + ("Additional information: " + JSON.stringify(additionalInfo)));
	      }
	    }
	
	    function checkAllowedProperties(allowedProperties, obj, context) {
	      var extraProps = Object.keys(obj).filter(function (prop) {
	        return allowedProperties.indexOf(prop) === -1;
	      });
	      if (extraProps.length) {
	        var extraPropsJSON = JSON.stringify(extraProps.join(", "));
	        var allowedPropsJSON = JSON.stringify(allowedProperties.join(", "));
	        throw getFieldError("you-have-specified-properties-for-context-that-are-not-allowed", ["You have specified properties for " + context + " that are not allowed: " + extraPropsJSON, "Allowed properties are: " + allowedPropsJSON].join("\n"), obj);
	      }
	    }
	  }]);
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var angular = __webpack_require__(2);
	var utils = __webpack_require__(22);
	
	module.exports = function (ngModule) {
	  ngModule.provider("formlyConfig", formlyConfig);
	
	  formlyConfig.tests = false ? require("./formlyConfig.test")(ngModule) : null;
	
	  function formlyConfig(formlyUsabilityProvider, formlyApiCheck) {
	    var _this2 = this;
	
	    var typeMap = {};
	    var templateWrappersMap = {};
	    var defaultWrapperName = "default";
	    var _this = this;
	    var getError = formlyUsabilityProvider.getFormlyError;
	    var allowedTypeProperties = ["name", "template", "templateUrl", "controller", "link", "defaultOptions", "extends", "wrapper", "data", "validateOptions", "overwriteOk"];
	
	    angular.extend(this, {
	      setType: setType,
	      getType: getType,
	      setWrapper: setWrapper,
	      getWrapper: getWrapper,
	      getWrapperByType: getWrapperByType,
	      removeWrapperByName: removeWrapperByName,
	      removeWrappersForType: removeWrappersForType,
	      disableWarnings: false,
	      extras: {
	        disableNgModelAttrsManipulator: false,
	        ngModelAttrsManipulatorPreferBound: false
	      },
	      templateManipulators: {
	        preWrapper: [],
	        postWrapper: []
	      },
	      $get: function () {
	        return _this2;
	      }
	    });
	
	    function setType(options) {
	      if (angular.isArray(options)) {
	        angular.forEach(options, setType);
	      } else if (angular.isObject(options)) {
	        checkType(options);
	        if (options["extends"]) {
	          extendTypeOptions(options);
	        }
	        typeMap[options.name] = options;
	      } else {
	        throw getError("You must provide an object or array for setType. You provided: " + JSON.stringify(arguments));
	      }
	    }
	
	    function checkType(options) {
	      formlyApiCheck["throw"](formlyApiCheck.formlyTypeOptions, arguments, {
	        prefix: "formlyConfig.setType",
	        url: "settype-validation-failed"
	      });
	      if (!options.overwriteOk) {
	        checkOverwrite(options.name, typeMap, options, "types");
	      } else {
	        options.overwriteOk = undefined;
	      }
	      formlyUsabilityProvider.checkAllowedProperties(allowedTypeProperties, options);
	    }
	
	    function extendTypeOptions(options) {
	      var extendsType = getType(options["extends"], true, options);
	      extendTypeControllerFunction(options, extendsType);
	      extendTypeLinkFunction(options, extendsType);
	      extendTypeValidateOptionsFunction(options, extendsType);
	      extendTypeDefaultOptions(options, extendsType);
	      utils.reverseDeepMerge(options, extendsType);
	    }
	
	    function extendTypeControllerFunction(options, extendsType) {
	      var extendsCtrl = extendsType.controller;
	      if (!angular.isDefined(extendsCtrl)) {
	        return;
	      }
	      var optionsCtrl = options.controller;
	      if (angular.isDefined(optionsCtrl)) {
	        options.controller = function ($scope, $controller) {
	          $controller(extendsCtrl, { $scope: $scope });
	          $controller(optionsCtrl, { $scope: $scope });
	        };
	        options.controller.$inject = ["$scope", "$controller"];
	      } else {
	        options.controller = extendsCtrl;
	      }
	    }
	
	    function extendTypeLinkFunction(options, extendsType) {
	      var extendsFn = extendsType.link;
	      if (!angular.isDefined(extendsFn)) {
	        return;
	      }
	      var optionsFn = options.link;
	      if (angular.isDefined(optionsFn)) {
	        options.link = function () {
	          extendsFn.apply(undefined, arguments);
	          optionsFn.apply(undefined, arguments);
	        };
	      } else {
	        options.link = extendsFn;
	      }
	    }
	
	    function extendTypeValidateOptionsFunction(options, extendsType) {
	      var extendsFn = extendsType.validateOptions;
	      if (!angular.isDefined(extendsFn)) {
	        return;
	      }
	      var optionsFn = options.validateOptions;
	      var originalDefaultOptions = options.defaultOptions;
	      if (angular.isDefined(optionsFn)) {
	        options.validateOptions = function (options) {
	          optionsFn(options);
	          var mergedOptions = angular.copy(options);
	          var defaultOptions = originalDefaultOptions;
	          if (defaultOptions) {
	            if (angular.isFunction(defaultOptions)) {
	              defaultOptions = defaultOptions(mergedOptions);
	            }
	            utils.reverseDeepMerge(mergedOptions, defaultOptions);
	          }
	          extendsFn(mergedOptions);
	        };
	      } else {
	        options.validateOptions = extendsFn;
	      }
	    }
	
	    function extendTypeDefaultOptions(options, extendsType) {
	      var extendsDO = extendsType.defaultOptions;
	      if (!angular.isDefined(extendsDO)) {
	        return;
	      }
	      var optionsDO = options.defaultOptions;
	      var optionsDOIsFn = angular.isFunction(optionsDO);
	      var extendsDOIsFn = angular.isFunction(extendsDO);
	      if (extendsDOIsFn) {
	        options.defaultOptions = function defaultOptions(options) {
	          var extendsDefaultOptions = extendsDO(options);
	          var mergedDefaultOptions = {};
	          utils.reverseDeepMerge(mergedDefaultOptions, options, extendsDefaultOptions);
	          if (optionsDOIsFn) {
	            return optionsDO(mergedDefaultOptions);
	          } else {
	            utils.reverseDeepMerge(extendsDefaultOptions, optionsDO);
	            return extendsDefaultOptions;
	          }
	        };
	      } else if (optionsDOIsFn) {
	        options.defaultOptions = function defaultOptions(options) {
	          var newDefaultOptions = {};
	          utils.reverseDeepMerge(newDefaultOptions, options, extendsDO);
	          return optionsDO(newDefaultOptions);
	        };
	      }
	    }
	
	    function getType(name, throwError, errorContext) {
	      if (!name) {
	        return undefined;
	      }
	      var type = typeMap[name];
	      if (!type && throwError === true) {
	        throw getError("There is no type by the name of \"" + name + "\": " + JSON.stringify(errorContext));
	      } else {
	        return type;
	      }
	    }
	
	    function setWrapper(_x, _x2) {
	      var _again = true;
	
	      _function: while (_again) {
	        _again = false;
	        var options = _x,
	            name = _x2;
	
	        if (angular.isArray(options)) {
	          return options.map(function (wrapperOptions) {
	            return setWrapper(wrapperOptions);
	          });
	        } else if (angular.isObject(options)) {
	          options.types = getOptionsTypes(options);
	          options.name = getOptionsName(options, name);
	          checkWrapperAPI(options);
	          templateWrappersMap[options.name] = options;
	          return options;
	        } else if (angular.isString(options)) {
	          _x = {
	            template: options,
	            name: name
	          };
	          _again = true;
	          continue _function;
	        }
	      }
	    }
	
	    function getOptionsTypes(options) {
	      if (angular.isString(options.types)) {
	        return [options.types];
	      }
	      if (!angular.isDefined(options.types)) {
	        return [];
	      } else {
	        return options.types;
	      }
	    }
	
	    function getOptionsName(options, name) {
	      return options.name || name || options.types.join(" ") || defaultWrapperName;
	    }
	
	    function checkWrapperAPI(options) {
	      formlyUsabilityProvider.checkWrapper(options);
	      if (options.template) {
	        formlyUsabilityProvider.checkWrapperTemplate(options.template, options);
	      }
	      if (!options.overwriteOk) {
	        checkOverwrite(options.name, templateWrappersMap, options, "templateWrappers");
	      } else {
	        delete options.overwriteOk;
	      }
	      checkWrapperTypes(options);
	    }
	
	    function checkWrapperTypes(options) {
	      var shouldThrow = !angular.isArray(options.types) || !options.types.every(angular.isString);
	      if (shouldThrow) {
	        throw getError("Attempted to create a template wrapper with types that is not a string or an array of strings");
	      }
	    }
	
	    function checkOverwrite(property, object, newValue, objectName) {
	      if (object.hasOwnProperty(property)) {
	        warn(["Attempting to overwrite " + property + " on " + objectName + " which is currently", "" + JSON.stringify(object[property]) + " with " + JSON.stringify(newValue), "To supress this warning, specify the property \"overwriteOk: true\""].join(" "));
	      }
	    }
	
	    function getWrapper(name) {
	      return templateWrappersMap[name || defaultWrapperName];
	    }
	
	    function getWrapperByType(type) {
	      /* jshint maxcomplexity:6 */
	      var wrappers = [];
	      for (var name in templateWrappersMap) {
	        if (templateWrappersMap.hasOwnProperty(name)) {
	          if (templateWrappersMap[name].types && templateWrappersMap[name].types.indexOf(type) !== -1) {
	            wrappers.push(templateWrappersMap[name]);
	          }
	        }
	      }
	      return wrappers;
	    }
	
	    function removeWrapperByName(name) {
	      var wrapper = templateWrappersMap[name];
	      delete templateWrappersMap[name];
	      return wrapper;
	    }
	
	    function removeWrappersForType(type) {
	      var wrappers = getWrapperByType(type);
	      if (!wrappers) {
	        return;
	      }
	      if (!angular.isArray(wrappers)) {
	        return removeWrapperByName(wrappers.name);
	      } else {
	        wrappers.forEach(function (wrapper) {
	          return removeWrapperByName(wrapper.name);
	        });
	        return wrappers;
	      }
	    }
	
	    function warn() {
	      if (!_this.disableWarnings) {
	        console.warn.apply(console, arguments);
	      }
	    }
	  }
	  formlyConfig.$inject = ["formlyUsabilityProvider", "formlyApiCheck"];
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  ngModule.constant("formlyVersion", ("4.0.0"));
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  ngModule.constant("formlyErrorAndWarningsUrlPrefix", "https://github.com/formly-js/angular-formly/wiki/Errors-and-Warnings#");
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  ngModule.factory("formlyValidationMessages", function () {
	
	    var formlyValidationMessages = {
	      addTemplateOptionValueMessage: addTemplateOptionValueMessage,
	      addStringMessage: addStringMessage,
	      messages: {}
	    };
	
	    return formlyValidationMessages;
	
	    function addTemplateOptionValueMessage(name, prop, prefix, suffix, alternate) {
	      formlyValidationMessages.messages[name] = templateOptionValue(prop, prefix, suffix, alternate);
	    }
	
	    function addStringMessage(name, string) {
	      formlyValidationMessages.messages[name] = function () {
	        return string;
	      };
	    }
	
	    function templateOptionValue(prop, prefix, suffix, alternate) {
	      return function getValidationMessage(viewValue, modelValue, scope) {
	        if (scope.options.templateOptions[prop]) {
	          return "" + prefix + " " + scope.options.templateOptions[prop] + " " + suffix;
	        } else {
	          return alternate;
	        }
	      };
	    }
	  });
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  ngModule.directive("formlyCustomValidation", formlyCustomValidation);
	
	  formlyCustomValidation.tests = false ? require("./formly-custom-validation.test")(ngModule) : null;
	
	  function formlyCustomValidation(formlyUtil, $q) {
	    return {
	      require: "ngModel",
	      link: function link(scope, el, attrs, ctrl) {
	        var validators = scope.$eval(attrs.formlyCustomValidation);
	        if (!validators) {
	          return;
	        }
	        checkValidators(validators);
	        scope.options.validation.messages = scope.options.validation.messages || {};
	
	        var useNewValidatorsApi = ctrl.hasOwnProperty("$validators") && !attrs.hasOwnProperty("useParsers");
	        angular.forEach(validators, function (validator, name) {
	          var message = validator.message;
	          if (message) {
	            scope.options.validation.messages[name] = function () {
	              return formlyUtil.formlyEval(scope, message, ctrl.$modelValue, ctrl.$viewValue);
	            };
	          }
	          validator = angular.isObject(validator) ? validator.expression : validator;
	          var isPossiblyAsync = !angular.isString(validator);
	          if (useNewValidatorsApi) {
	            setupWithValidators();
	          } else {
	            setupWithParsers();
	          }
	
	          function setupWithValidators() {
	            var validatorCollection = isPossiblyAsync ? "$asyncValidators" : "$validators";
	            ctrl[validatorCollection][name] = function (modelValue, viewValue) {
	              var value = formlyUtil.formlyEval(scope, validator, modelValue, viewValue);
	              if (isPossiblyAsync) {
	                return isPromiseLike(value) ? value : value ? $q.when(value) : $q.reject(value);
	              } else {
	                return value;
	              }
	            };
	          }
	
	          function setupWithParsers() {
	            var inFlightValidator = undefined;
	            ctrl.$parsers.unshift(function (viewValue) {
	              var isValid = formlyUtil.formlyEval(scope, validator, ctrl.$modelValue, viewValue);
	              if (isPromiseLike(isValid)) {
	                ctrl.$pending = ctrl.$pending || {};
	                ctrl.$pending[name] = true;
	                inFlightValidator = isValid;
	                isValid.then(function () {
	                  if (inFlightValidator === isValid) {
	                    ctrl.$setValidity(name, true);
	                  }
	                })["catch"](function () {
	                  if (inFlightValidator === isValid) {
	                    ctrl.$setValidity(name, false);
	                  }
	                })["finally"](function () {
	                  if (Object.keys(ctrl.$pending).length === 1) {
	                    delete ctrl.$pending;
	                  } else {
	                    delete ctrl.$pending[name];
	                  }
	                });
	              } else {
	                ctrl.$setValidity(name, isValid);
	              }
	              return viewValue;
	            });
	          }
	        });
	      }
	    };
	
	    function isPromiseLike(obj) {
	      return obj && angular.isFunction(obj.then);
	    }
	
	    function checkValidators(validators) {
	      var allowedProperties = ["expression", "message"];
	      var validatorsWithExtraProps = {};
	      angular.forEach(validators, function (validator, name) {
	        if (angular.isString(validator)) {
	          return;
	        }
	        var extraProps = [];
	        angular.forEach(validator, function (v, key) {
	          if (allowedProperties.indexOf(key) === -1) {
	            extraProps.push(key);
	          }
	        });
	        if (extraProps.length) {
	          validatorsWithExtraProps[name] = extraProps;
	        }
	      });
	      if (Object.keys(validatorsWithExtraProps).length) {
	        throw new Error(["Validators are only allowed to be functions or objects that have " + allowedProperties.join(", ") + ".", "You provided some extra properties: " + JSON.stringify(validatorsWithExtraProps)].join(" "));
	      }
	    }
	  }
	  formlyCustomValidation.$inject = ["formlyUtil", "$q"];
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var angular = __webpack_require__(2);
	
	module.exports = function (ngModule) {
	  ngModule.directive("formlyField", formlyField);
	
	  formlyField.tests = false ? require("./formly-field.test")(ngModule) : null;
	
	  function formlyField($http, $q, $compile, $templateCache, formlyConfig, formlyValidationMessages, formlyApiCheck, formlyUtil, formlyUsability, formlyWarn, formlyTemplateCache) {
	    return {
	      restrict: "AE",
	      transclude: true,
	      scope: {
	        options: "=",
	        model: "=",
	        formId: "=?",
	        index: "=?",
	        fields: "=?",
	        form: "=?"
	      },
	      controller: ["$scope", "$timeout", "$parse", "$controller", function fieldController($scope, $timeout, $parse, $controller) {
	        var opts = $scope.options;
	        var fieldType = opts.type && formlyConfig.getType(opts.type);
	        simplifyLife(opts);
	        mergeFieldOptionsWithTypeDefaults(opts, fieldType);
	        checkApi(opts);
	        // set field id to link labels and fields
	        $scope.id = formlyUtil.getFieldId($scope.formId, opts, $scope.index);
	
	        // initalization
	        extendOptionsWithDefaults(opts, $scope.index);
	        runExpressions();
	        setFormControl($scope, opts);
	        addModelWatcher($scope, opts);
	        addValidationMessages(opts);
	        // simplify things
	        // create $scope.to so template authors can reference to instead of $scope.options.templateOptions
	        $scope.to = $scope.options.templateOptions;
	        invokeControllers($scope, opts, fieldType);
	
	        // function definitions
	        function runExpressions() {
	          $timeout(function () {
	            // must run on next tick to make sure that the current value is correct.
	            var field = $scope.options;
	            var currentValue = valueGetterSetter();
	            angular.forEach(field.expressionProperties, function runExpression(expression, prop) {
	              var setter = $parse(prop).assign;
	              var promise = $q.when(formlyUtil.formlyEval($scope, expression, currentValue));
	              promise.then(function (value) {
	                setter(field, value);
	              });
	            });
	          });
	        }
	
	        function valueGetterSetter(newVal) {
	          if (!$scope.model || !$scope.options.key) {
	            return;
	          }
	          if (angular.isDefined(newVal)) {
	            $scope.model[$scope.options.key] = newVal;
	          }
	          return $scope.model[$scope.options.key];
	        }
	
	        function simplifyLife(options) {
	          // add a few empty objects (if they don't already exist) so you don't have to undefined check everywhere
	          formlyUtil.reverseDeepMerge(options, {
	            data: {},
	            templateOptions: {},
	            validation: {}
	          });
	        }
	
	        function mergeFieldOptionsWithTypeDefaults(options, type) {
	          if (type) {
	            mergeOptions(options, type.defaultOptions);
	          }
	          var properOrder = arrayify(options.optionsTypes).reverse(); // so the right things are overridden
	          angular.forEach(properOrder, function (typeName) {
	            mergeOptions(options, formlyConfig.getType(typeName, true, options).defaultOptions);
	          });
	        }
	
	        function mergeOptions(options, extraOptions) {
	          if (extraOptions) {
	            if (angular.isFunction(extraOptions)) {
	              extraOptions = extraOptions(options);
	            }
	            formlyUtil.reverseDeepMerge(options, extraOptions);
	          }
	        }
	
	        function extendOptionsWithDefaults(options, index) {
	          angular.extend(options, {
	            // attach the key in case the formly-field directive is used directly
	            key: options.key || index || 0,
	            value: valueGetterSetter,
	            runExpressions: runExpressions
	          });
	        }
	
	        // initialization functions
	        function setFormControl(scope, options) {
	          if (options.noFormControl) {
	            return;
	          }
	          var stopWaitingForDestroy;
	          var maxTime = 22000;
	          var intervalTime = 5;
	          var iterations = 0;
	          var interval = setInterval(function () {
	            iterations++;
	            if (!angular.isDefined(options.key)) {
	              return cleanUp();
	            }
	            var formControl = scope.form && scope.form[scope.id];
	            if (formControl) {
	              options.formControl = formControl;
	              scope.fc = formControl;
	              addShowMessagesWatcher(scope, options);
	              cleanUp();
	            } else if (intervalTime * iterations > maxTime) {
	              formlyWarn("couldnt-set-the-formcontrol-after-timems", "Couldn't set the formControl after " + maxTime + "ms", scope);
	              cleanUp();
	            }
	          }, intervalTime);
	          stopWaitingForDestroy = scope.$on("$destroy", cleanUp);
	
	          function cleanUp() {
	            stopWaitingForDestroy();
	            clearInterval(interval);
	          }
	        }
	
	        function addModelWatcher(scope, options) {
	          if (options.model) {
	            scope.$watch("options.model", runExpressions, true);
	          }
	        }
	
	        function addShowMessagesWatcher(scope, options) {
	          scope.$watch(function () {
	            if (typeof scope.options.validation.show === "boolean") {
	              return scope.fc.$invalid && scope.options.validation.show;
	            } else {
	              return scope.fc.$invalid && scope.fc.$touched;
	            }
	          }, function (show) {
	            options.validation.errorExistsAndShouldBeVisible = show;
	            scope.showError = show;
	          });
	        }
	
	        function addValidationMessages(options) {
	          options.validation.messages = options.validation.messages || {};
	          angular.forEach(formlyValidationMessages.messages, function (expression, name) {
	            if (!options.validation.messages[name]) {
	              options.validation.messages[name] = function (viewValue, modelValue, scope) {
	                return formlyUtil.formlyEval(scope, expression, modelValue, viewValue);
	              };
	            }
	          });
	        }
	
	        function invokeControllers(scope) {
	          var options = arguments[1] === undefined ? {} : arguments[1];
	          var type = arguments[2] === undefined ? {} : arguments[2];
	
	          angular.forEach([type.controller, options.controller], function (controller) {
	            if (controller) {
	              $controller(controller, { $scope: scope });
	            }
	          });
	        }
	      }],
	      link: function fieldLink(scope, el) {
	        var type = scope.options.type && formlyConfig.getType(scope.options.type);
	        var args = arguments;
	        var thusly = this;
	        if (formlyTemplateCache.get(scope.id)) {
	          console.log("using template cache");
	          $q.when(formlyTemplateCache.get(scope.id)).then(setElementTemplate);
	        } else {
	          console.log("not using template cache");
	          getFieldTemplate(scope.options).then(runManipulators(formlyConfig.templateManipulators.preWrapper)).then(transcludeInWrappers(scope.options)).then(runManipulators(formlyConfig.templateManipulators.postWrapper)).then(setElementTemplate).then(addToCache)["catch"](function (error) {
	            formlyWarn("there-was-a-problem-setting-the-template-for-this-field", "There was a problem setting the template for this field ", scope.options, error);
	          });
	        }
	
	        function setElementTemplate(template) {
	          el.replaceWith($compile(template)(scope));
	          if (type && type.link) {
	            type.link.apply(thusly, args);
	          }
	          if (scope.options.link) {
	            scope.options.link.apply(thusly, args);
	          }
	          return template;
	        }
	
	        function addToCache(template) {
	          formlyTemplateCache.add(scope.id, template);
	        }
	
	        function runManipulators(manipulators) {
	          return function runManipulatorsOnTemplate(template) {
	            var chain = $q.when(template);
	            angular.forEach(manipulators, function (manipulator) {
	              chain = chain.then(function (template) {
	                return $q.when(manipulator(template, scope.options, scope)).then(function (newTemplate) {
	                  return angular.isString(newTemplate) ? newTemplate : asHtml(newTemplate);
	                });
	              });
	            });
	            return chain;
	          };
	        }
	      }
	    };
	
	    function asHtml(el) {
	      var wrapper = angular.element("<a></a>");
	      return wrapper.append(el).html();
	    }
	
	    function getFieldTemplate(options) {
	      var type = formlyConfig.getType(options.type, true, options);
	      var template = options.template || type && type.template;
	      var templateUrl = options.templateUrl || type && type.templateUrl;
	      if (!template && !templateUrl) {
	        throw formlyUsability.getFieldError("template-type-type-not-supported", "template type '" + options.type + "' not supported. On element:", options);
	      }
	      return getTemplate(template || templateUrl, !template);
	    }
	
	    function getTemplate(template, isUrl) {
	      if (!isUrl) {
	        return $q.when(template);
	      } else {
	        var httpOptions = { cache: $templateCache };
	        return $http.get(template, httpOptions).then(function (response) {
	          return response.data;
	        })["catch"](function (error) {
	          formlyWarn("problem-loading-template-for-templateurl", "Problem loading template for " + template, error);
	        });
	      }
	    }
	
	    function transcludeInWrappers(options) {
	      var wrapper = getWrapperOption(options);
	
	      return function transcludeTemplate(template) {
	        if (!wrapper.length) {
	          return $q.when(template);
	        }
	
	        wrapper.forEach(formlyUsability.checkWrapper);
	        var promises = wrapper.map(function (w) {
	          return getTemplate(w.template || w.templateUrl, !w.template);
	        });
	        return $q.all(promises).then(function (wrappersTemplates) {
	          wrappersTemplates.forEach(function (wrapperTemplate, index) {
	            formlyUsability.checkWrapperTemplate(wrapperTemplate, wrapper[index]);
	          });
	          wrappersTemplates.reverse(); // wrapper 0 is wrapped in wrapper 1 and so on...
	          var totalWrapper = wrappersTemplates.shift();
	          wrappersTemplates.forEach(function (wrapperTemplate) {
	            totalWrapper = doTransclusion(totalWrapper, wrapperTemplate);
	          });
	          return doTransclusion(totalWrapper, template);
	        });
	      };
	    }
	
	    function doTransclusion(wrapper, template) {
	      var superWrapper = angular.element("<a></a>"); // this allows people not have to have a single root in wrappers
	      superWrapper.append(wrapper);
	      var transcludeEl = superWrapper.find("formly-transclude");
	      transcludeEl.replaceWith(template);
	      return superWrapper.html();
	    }
	
	    function getWrapperOption(options) {
	      var wrapper = options.wrapper;
	      // explicit null means no wrapper
	      if (wrapper === null) {
	        return [];
	      }
	
	      // nothing specified means use the default wrapper for the type
	      if (!wrapper) {
	        // get all wrappers that specify they apply to this type
	        wrapper = arrayify(formlyConfig.getWrapperByType(options.type));
	      } else {
	        wrapper = arrayify(wrapper).map(formlyConfig.getWrapper);
	      }
	
	      // get all wrappers for that this type specified that it uses.
	      var type = formlyConfig.getType(options.type, true, options);
	      if (type && type.wrapper) {
	        var typeWrappers = arrayify(type.wrapper).map(formlyConfig.getWrapper);
	        wrapper = wrapper.concat(typeWrappers);
	      }
	
	      // add the default wrapper last
	      var defaultWrapper = formlyConfig.getWrapper();
	      if (defaultWrapper) {
	        wrapper.push(defaultWrapper);
	      }
	      return wrapper;
	    }
	
	    function checkApi(options) {
	      formlyApiCheck["throw"](formlyApiCheck.formlyFieldOptions, arguments, {
	        prefix: "formly-field directive",
	        url: "formly-field-directive-validation-failed"
	      });
	      // validate with the type
	      var type = options.type && formlyConfig.getType(options.type);
	      if (type && type.validateOptions) {
	        type.validateOptions(options);
	      }
	    }
	  }
	  formlyField.$inject = ["$http", "$q", "$compile", "$templateCache", "formlyConfig", "formlyValidationMessages", "formlyApiCheck", "formlyUtil", "formlyUsability", "formlyWarn", "formlyTemplateCache"];
	
	  function arrayify(obj) {
	    if (obj && !angular.isArray(obj)) {
	      obj = [obj];
	    } else if (!obj) {
	      obj = [];
	    }
	    return obj;
	  }
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _toConsumableArray = function (arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } };
	
	var _slice = Array.prototype.slice;
	var angular = __webpack_require__(2);
	
	module.exports = function (ngModule) {
	  ngModule.directive("formlyForm", formlyForm);
	
	  formlyForm.tests = false ? require("./formly-form.test")(ngModule) : null;
	
	  function formlyForm(formlyUsability) {
	    var currentFormId = 1;
	    return {
	      restrict: "E",
	      template: function template(el, attrs) {
	        /* jshint -W033 */ // this because jshint is broken I guess...
	        var rootEl = attrs.rootEl || "ng-form";
	        return "\n          <" + rootEl + " class=\"formly\"\n                   name=\"form\"\n                   role=\"form\">\n            <div formly-field\n                 ng-repeat=\"field in fields track by $index\"\n                 ng-if=\"!field.hide\"\n                 class=\"formly-field {{field.type ? 'formly-field-' + field.type : ''}}\"\n                 options=\"field\"\n                 model=\"field.model || model\"\n                 fields=\"fields\"\n                 form=\"form\"\n                 form-id=\"formId\"\n                 index=\"$index\">\n            </div>\n            <div ng-transclude></div>\n          </" + rootEl + ">\n        ";
	      },
	      replace: true,
	      transclude: true,
	      scope: {
	        fields: "=",
	        model: "=",
	        form: "=?",
	        options: "=?"
	      },
	      controller: ["$scope", function controller($scope) {
	        $scope.options = $scope.options || {};
	        $scope.formId = "formly_" + ($scope.options.id || currentFormId++);
	
	        angular.forEach($scope.fields, attachKey); // attaches a key based on the index if a key isn't specified
	        angular.forEach($scope.fields, setupWatchers); // setup watchers for all fields
	
	        // watch the model and evaluate watch expressions that depend on it.
	        $scope.$watch("model", function onResultUpdate(newResult) {
	          angular.forEach($scope.fields, function (field) {
	            /*jshint -W030 */
	            field.runExpressions && field.runExpressions(newResult);
	          });
	        }, true);
	
	        function attachKey(field, index) {
	          field.key = field.key || index || 0;
	        }
	
	        function setupWatchers(field, index) {
	          if (!angular.isDefined(field.watcher)) {
	            return;
	          }
	          var watchers = field.watcher;
	          if (!angular.isArray(watchers)) {
	            watchers = [watchers];
	          }
	          angular.forEach(watchers, function (watcher) {
	            if (!angular.isDefined(watcher.listener)) {
	              throw formlyUsability.getFieldError("all-field-watchers-must-have-a-listener", "All field watchers must have a listener", field);
	            }
	            var watchExpression = getWatchExpression(watcher, field, index);
	            var watchListener = getWatchListener(watcher, field, index);
	
	            var type = watcher.type || "$watch";
	            watcher.stopWatching = $scope[type](watchExpression, watchListener, watcher.watchDeep);
	          });
	        }
	
	        function getWatchExpression(watcher, field, index) {
	          var watchExpression = watcher.expression || "model['" + field.key + "']";
	          if (angular.isFunction(watchExpression)) {
	            // wrap the field's watch expression so we can call it with the field as the first arg
	            // and the stop function as the last arg as a helper
	            var originalExpression = watchExpression;
	            watchExpression = function formlyWatchExpression() {
	              var args = modifyArgs.apply(undefined, [watcher, index].concat(_slice.call(arguments)));
	              return originalExpression.apply(undefined, _toConsumableArray(args));
	            };
	            watchExpression.displayName = "Formly Watch Expression for field for " + field.key;
	          }
	          return watchExpression;
	        }
	
	        function getWatchListener(watcher, field, index) {
	          var watchListener = watcher.listener;
	          if (angular.isFunction(watchListener)) {
	            // wrap the field's watch listener so we can call it with the field as the first arg
	            // and the stop function as the last arg as a helper
	            var originalListener = watchListener;
	            watchListener = function formlyWatchListener() {
	              var args = modifyArgs.apply(undefined, [watcher, index].concat(_slice.call(arguments)));
	              return originalListener.apply(undefined, _toConsumableArray(args));
	            };
	            watchListener.displayName = "Formly Watch Listener for field for " + field.key;
	          }
	          return watchListener;
	        }
	
	        function modifyArgs(watcher, index) {
	          for (var _len = arguments.length, originalArgs = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	            originalArgs[_key - 2] = arguments[_key];
	          }
	
	          return [$scope.fields[index]].concat(originalArgs, [watcher.stopWatching]);
	        }
	      }],
	      link: function link(scope, el, attrs) {
	        if (attrs.hasOwnProperty("result")) {
	          throw formlyUsability.getFormlyError("The \"result\" attribute on a formly-form is no longer valid. Use \"model\" instead");
	        }
	        if (attrs.name !== "form") {
	          // then they specified their own name
	          throw formlyUsability.getFormlyError("The \"name\" attribute on a formly-form is no longer valid. Use \"form\" instead");
	        }
	      }
	    };
	  }
	  formlyForm.$inject = ["formlyUsability"];
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  ngModule.directive("formlyFocus", ["$timeout", "$document", function ($timeout, $document) {
	    /* jshint -W052 */
	    return {
	      link: function link(scope, element, attrs) {
	        var previousEl = null;
	        var el = element[0];
	        var doc = $document[0];
	        attrs.$observe("formlyFocus", function (value) {
	          if (value === "true") {
	            $timeout(function () {
	              previousEl = doc.activeElement;
	              el.focus();
	            }, ~ ~attrs.focusWait);
	          } else if (value === "false") {
	            if (doc.activeElement === el) {
	              el.blur();
	              if (attrs.hasOwnProperty("refocus") && previousEl) {
	                previousEl.focus();
	              }
	            }
	          }
	        });
	      }
	    };
	  }]);
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  ngModule.run(addFormlyNgModelAttrsManipulator);
	
	  function addFormlyNgModelAttrsManipulator(formlyConfig) {
	    if (formlyConfig.extras.disableNgModelAttrsManipulator) {
	      return;
	    }
	    formlyConfig.templateManipulators.preWrapper.push(ngModelAttrsManipulator);
	
	    function ngModelAttrsManipulator(template, options, scope) {
	      /* jshint maxcomplexity:7 */
	      var el = angular.element("<a></a>");
	      var data = options.data;
	      if (data.noTouchy) {
	        return template;
	      }
	      el.append(template);
	      var modelEls = angular.element(el[0].querySelectorAll("[ng-model]"));
	      if (!modelEls || !modelEls.length) {
	        return template;
	      }
	
	      addIfNotPresent(modelEls, "id", scope.id);
	      addIfNotPresent(modelEls, "name", scope.id);
	
	      if (angular.isDefined(options.validators)) {
	        addIfNotPresent(modelEls, "formly-custom-validation", "options.validators");
	      }
	      if (angular.isDefined(options.modelOptions)) {
	        addIfNotPresent(modelEls, "ng-model-options", "options.modelOptions");
	        if (options.modelOptions.getterSetter) {
	          modelEls.attr("ng-model", "options.value");
	        }
	      }
	      addTemplateOptionsAttrs();
	
	      return el.html();
	
	      function addTemplateOptionsAttrs() {
	        if (!options.templateOptions && !options.expressionProperties) {
	          // no need to run these if there are no templateOptions or expressionProperties
	          return;
	        }
	        var to = options.templateOptions || {};
	        var ep = options.expressionProperties || {};
	
	        var ngModelAttributes = getBuiltinAttributes();
	
	        // extend with the user's specifications winning
	        angular.extend(ngModelAttributes, options.ngModelAttrs);
	
	        angular.forEach(ngModelAttributes, function (val, name) {
	          /* jshint maxcomplexity:10 */
	          var attrVal = undefined;
	          var attrName = undefined;
	          var ref = "options.templateOptions['" + name + "']";
	          var toVal = to[name];
	          var epVal = getEpValue(ep, name);
	
	          var inTo = angular.isDefined(toVal);
	          var inEp = angular.isDefined(epVal);
	          if (val.value) {
	            // I realize this looks backwards, but it's right, trust me...
	            attrName = val.value;
	            attrVal = name;
	          } else if (val.expression && inTo) {
	            attrName = val.expression;
	            if (angular.isString(to[name])) {
	              attrVal = "$eval(" + ref + ")";
	            } else if (angular.isFunction(to[name])) {
	              attrVal = "" + ref + "(model[options.key], options, this, $event)";
	            } else {
	              throw new Error("options.templateOptions." + name + " must be a string or function: " + JSON.stringify(options));
	            }
	          } else if (val.bound && inEp) {
	            attrName = val.bound;
	            attrVal = ref;
	          } else if (val.attribute && inEp) {
	            attrName = val.attribute;
	            attrVal = "{{" + ref + "}}";
	          } else if (val.attribute && inTo) {
	            attrName = val.attribute;
	            attrVal = toVal;
	          } else if (val.bound && inTo) {
	            attrName = val.bound;
	            attrVal = ref;
	          }
	          if (angular.isDefined(attrName) && angular.isDefined(attrVal)) {
	            addIfNotPresent(modelEls, attrName, attrVal);
	          }
	        });
	      }
	
	      function getBuiltinAttributes() {
	        var ngModelAttributes = {
	          focus: {
	            attribute: "formly-focus"
	          }
	        };
	        var boundOnly = [];
	        var bothAttributeAndBound = ["required", "disabled", "pattern", "minlength"];
	        var expressionOnly = ["change", "keydown", "keyup", "keypress", "click", "focus", "blur"];
	        var attributeOnly = ["placeholder", "min", "max", "tabindex", "type"];
	        if (formlyConfig.extras.ngModelAttrsManipulatorPreferBound) {
	          boundOnly.push("maxlength");
	        } else {
	          bothAttributeAndBound.push("maxlength");
	        }
	
	        angular.forEach(boundOnly, function (item) {
	          ngModelAttributes[item] = { bound: "ng-" + item };
	        });
	
	        angular.forEach(bothAttributeAndBound, function (item) {
	          ngModelAttributes[item] = { attribute: item, bound: "ng-" + item };
	        });
	
	        angular.forEach(expressionOnly, function (item) {
	          var propName = "on" + item.substr(0, 1).toUpperCase() + item.substr(1);
	          ngModelAttributes[propName] = { expression: "ng-" + item };
	        });
	
	        angular.forEach(attributeOnly, function (item) {
	          ngModelAttributes[item] = { attribute: item };
	        });
	        return ngModelAttributes;
	      }
	
	      function getEpValue(ep, name) {
	        return ep["templateOptions." + name] || ep["templateOptions['" + name + "']"] || ep["templateOptions[\"" + name + "\"]"];
	      }
	
	      function addIfNotPresent(el, attr, val) {
	        if (!el.attr(attr)) {
	          el.attr(attr, val);
	        }
	      }
	    }
	  }
	  addFormlyNgModelAttrsManipulator.$inject = ["formlyConfig"];
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_21__;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var angular = __webpack_require__(2);
	
	module.exports = { formlyEval: formlyEval, getFieldId: getFieldId, reverseDeepMerge: reverseDeepMerge };
	
	function formlyEval(scope, expression, modelValue, viewValue) {
	  if (angular.isFunction(expression)) {
	    return expression(viewValue || modelValue, modelValue, scope);
	  } else {
	    return scope.$eval(expression, {
	      $viewValue: viewValue || modelValue,
	      $modelValue: modelValue
	    });
	  }
	}
	
	function getFieldId(formId, options, index) {
	  var type = options.type;
	  if (!type && options.template) {
	    type = "template";
	  } else if (!type && options.templateUrl) {
	    type = "templateUrl";
	  }
	
	  return [formId, type, options.key, index].join("_");
	}
	
	function reverseDeepMerge(dest) {
	  angular.forEach(arguments, function (src, index) {
	    if (!index) {
	      return;
	    }
	    angular.forEach(src, function (val, prop) {
	      if (!angular.isDefined(dest[prop])) {
	        dest[prop] = angular.copy(val);
	      } else if (objAndSameType(dest[prop], val)) {
	        reverseDeepMerge(dest[prop], val);
	      }
	    });
	  });
	}
	
	function objAndSameType(obj1, obj2) {
	  return angular.isObject(obj1) && angular.isObject(obj2) && Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2);
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  ngModule.factory("formlyTemplateCache", formlyTemplateCache);
	
	  function formlyTemplateCache(formlyWarn) {
	    var cache = {};
	    return {
	      get: function (id) {
	        return cache[id];
	      }, add: add, remove: remove, removeAll: removeAll
	    };
	
	    function add(id, template, overrideOk) {
	      if (cache[id] && !overrideOk) {
	        formlyWarn("attempting-to-override-template-in-cache", "Attempting to override template in cache", "id:", id, "new template:", template, "old template:", cache[id]);
	      }
	      cache[id] = template;
	      return cache[id];
	    }
	
	    function remove(id) {
	      cache[id] = null;
	    }
	
	    function removeAll() {
	      cache = {};
	    }
	  }
	  formlyTemplateCache.$inject = ["formlyWarn"];
	};

/***/ }
/******/ ])
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyMTZmNGQzYWFlY2JiY2ZmYjNjYSIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vYW5ndWxhci1maXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcHJvdmlkZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2RpcmVjdGl2ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcnVuL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9mb3JtbHlVdGlsLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2Zvcm1seVdhcm4uanMiLCJ3ZWJwYWNrOi8vLy4vcHJvdmlkZXJzL2Zvcm1seUFwaUNoZWNrLmpzIiwid2VicGFjazovLy8uL3Byb3ZpZGVycy9mb3JtbHlVc2FiaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvdmlkZXJzL2Zvcm1seUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9wcm92aWRlcnMvZm9ybWx5VmVyc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9wcm92aWRlcnMvZm9ybWx5RXJyb3JBbmRXYXJuaW5nc1VybFByZWZpeC5qcyIsIndlYnBhY2s6Ly8vLi9wcm92aWRlcnMvZm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VzLmpzIiwid2VicGFjazovLy8uL2RpcmVjdGl2ZXMvZm9ybWx5LWN1c3RvbS12YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2RpcmVjdGl2ZXMvZm9ybWx5LWZpZWxkLmpzIiwid2VicGFjazovLy8uL2RpcmVjdGl2ZXMvZm9ybWx5LWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vZGlyZWN0aXZlcy9mb3JtbHktZm9jdXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnVuL2Zvcm1seU5nTW9kZWxBdHRyc01hbmlwdWxhdG9yLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwaUNoZWNrXCIiLCJ3ZWJwYWNrOi8vLy4vb3RoZXIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvZm9ybWx5VGVtcGxhdGVDYWNoZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7OztBQ3RDQTs7QUFFQSx5Qzs7Ozs7O0FDRkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCOzs7Ozs7QUNYQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQjs7Ozs7O0FDUkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNUQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ05BOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNQQTs7QUFFQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDSkEsZ0Q7Ozs7OztBQ0FBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDWkE7O0FBRUEsMENBQXlDLDBCQUEwQiwwQ0FBMEMsZ0JBQWdCLHVCQUF1QixhQUFhLEVBQUUsT0FBTyx3QkFBd0IsRUFBRTs7QUFFcE07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHOzs7Ozs7QUNoQkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRzs7Ozs7O0FDMUZBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEc7Ozs7OztBQ3hFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQyxpQkFBaUI7QUFDckQscUNBQW9DLGlCQUFpQjtBQUNyRDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNwU0E7O0FBRUE7QUFDQTtBQUNBLEc7Ozs7OztBQ0pBOztBQUVBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNKQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRzs7Ozs7O0FDakNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxvQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQixnQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQzFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWU7QUFDZixjQUFhO0FBQ2IsWUFBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBb0I7QUFDcEIsZ0NBQStCO0FBQy9CO0FBQ0EsWUFBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXFFO0FBQ3JFO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBLFlBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYOztBQUVBO0FBQ0Esd0RBQXVEO0FBQ3ZELHFEQUFvRDs7QUFFcEQ7QUFDQTtBQUNBLHdDQUF1QyxnQkFBZ0I7QUFDdkQ7QUFDQSxZQUFXO0FBQ1g7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQixnQkFBZTtBQUNmLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1AsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1gsdUNBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EscURBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDalZBOztBQUVBLDBDQUF5QywwQkFBMEIsMENBQTBDLGdCQUFnQix1QkFBdUIsYUFBYSxFQUFFLE9BQU8sd0JBQXdCLEVBQUU7O0FBRXBNO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1UQUFrVCxnREFBZ0Q7QUFDbFcsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQSxtREFBa0Q7QUFDbEQsdURBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYLFVBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxR0FBb0csYUFBYTtBQUNqSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDdEhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsSUFBRztBQUNILEc7Ozs7OztBQzVCQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBLDBCQUF5QixhQUFhO0FBQ3RDLFlBQVc7QUFDWDtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLHNDQUFxQztBQUNyQyxVQUFTOztBQUVUO0FBQ0Esc0NBQXFDO0FBQ3JDLFVBQVM7O0FBRVQ7QUFDQTtBQUNBLDBDQUF5QztBQUN6QyxVQUFTOztBQUVUO0FBQ0Esc0NBQXFDO0FBQ3JDLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDOUlBLGlEOzs7Ozs7QUNBQTs7QUFFQTs7QUFFQSxtQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDN0NBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEciLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJhbmd1bGFyXCIpLCByZXF1aXJlKFwiYXBpQ2hlY2tcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiYW5ndWxhclwiLCBcImFwaUNoZWNrXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5nRm9ybWx5XCJdID0gZmFjdG9yeShyZXF1aXJlKFwiYW5ndWxhclwiKSwgcmVxdWlyZShcImFwaUNoZWNrXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZ0Zvcm1seVwiXSA9IGZhY3Rvcnkocm9vdFtcImFuZ3VsYXJcIl0sIHJvb3RbXCJhcGlDaGVja1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yMV9fKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMjE2ZjRkM2FhZWNiYmNmZmIzY2FcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9pbmRleC5jb21tb25cIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBuZ01vZHVsZU5hbWUgPSBcImZvcm1seVwiO1xudmFyIGFuZ3VsYXIgPSByZXF1aXJlKFwiLi9hbmd1bGFyLWZpeFwiKTtcbnZhciBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKG5nTW9kdWxlTmFtZSwgW10pO1xuXG5yZXF1aXJlKFwiLi9wcm92aWRlcnNcIikobmdNb2R1bGUpO1xucmVxdWlyZShcIi4vc2VydmljZXNcIikobmdNb2R1bGUpO1xucmVxdWlyZShcIi4vZGlyZWN0aXZlc1wiKShuZ01vZHVsZSk7XG5yZXF1aXJlKFwiLi9ydW5cIikobmdNb2R1bGUpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5nTW9kdWxlTmFtZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vaW5kZXguY29tbW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIHNvbWUgdmVyc2lvbnMgb2YgYW5ndWxhciBkb24ndCBleHBvcnQgdGhlIGFuZ3VsYXIgbW9kdWxlIHByb3Blcmx5LFxuLy8gc28gd2UgZ2V0IGl0IGZyb20gd2luZG93IGluIHRoaXMgY2FzZS5cbnZhciBhbmd1bGFyID0gcmVxdWlyZShcImFuZ3VsYXJcIik7XG5pZiAoIWFuZ3VsYXIudmVyc2lvbikge1xuICBhbmd1bGFyID0gd2luZG93LmFuZ3VsYXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FuZ3VsYXItZml4L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG4gIHJlcXVpcmUoXCIuL2Zvcm1seUFwaUNoZWNrXCIpKG5nTW9kdWxlKTtcbiAgcmVxdWlyZShcIi4vZm9ybWx5VXNhYmlsaXR5XCIpKG5nTW9kdWxlKTtcbiAgcmVxdWlyZShcIi4vZm9ybWx5Q29uZmlnXCIpKG5nTW9kdWxlKTtcbiAgcmVxdWlyZShcIi4vZm9ybWx5VmVyc2lvblwiKShuZ01vZHVsZSk7XG4gIHJlcXVpcmUoXCIuL2Zvcm1seUVycm9yQW5kV2FybmluZ3NVcmxQcmVmaXhcIikobmdNb2R1bGUpO1xuICByZXF1aXJlKFwiLi9mb3JtbHlWYWxpZGF0aW9uTWVzc2FnZXNcIikobmdNb2R1bGUpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vcHJvdmlkZXJzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG4gIHJlcXVpcmUoXCIuL2Zvcm1seVRlbXBsYXRlQ2FjaGVcIikobmdNb2R1bGUpO1xuICByZXF1aXJlKFwiLi9mb3JtbHlVdGlsXCIpKG5nTW9kdWxlKTtcbiAgcmVxdWlyZShcIi4vZm9ybWx5V2FyblwiKShuZ01vZHVsZSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zZXJ2aWNlcy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICByZXF1aXJlKFwiLi9mb3JtbHktY3VzdG9tLXZhbGlkYXRpb25cIikobmdNb2R1bGUpO1xuICByZXF1aXJlKFwiLi9mb3JtbHktZmllbGRcIikobmdNb2R1bGUpO1xuICByZXF1aXJlKFwiLi9mb3JtbHktZm9ybVwiKShuZ01vZHVsZSk7XG4gIHJlcXVpcmUoXCIuL2Zvcm1seS1mb2N1c1wiKShuZ01vZHVsZSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9kaXJlY3RpdmVzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG4gIHJlcXVpcmUoXCIuL2Zvcm1seU5nTW9kZWxBdHRyc01hbmlwdWxhdG9yXCIpKG5nTW9kdWxlKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3J1bi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImFuZ3VsYXJcIlxuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKFwiLi4vb3RoZXIvdXRpbHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG4gIG5nTW9kdWxlLmZhY3RvcnkoXCJmb3JtbHlVdGlsXCIsIGZvcm1seVV0aWwpO1xuXG4gIGZvcm1seVV0aWwudGVzdHMgPSBPTl9URVNUID8gcmVxdWlyZShcIi4vZm9ybWx5VXRpbC50ZXN0XCIpKG5nTW9kdWxlKSA6IG51bGw7XG5cbiAgZnVuY3Rpb24gZm9ybWx5VXRpbCgpIHtcbiAgICByZXR1cm4gdXRpbHM7XG4gIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NlcnZpY2VzL2Zvcm1seVV0aWwuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF90b0NvbnN1bWFibGVBcnJheSA9IGZ1bmN0aW9uIChhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSBhcnIyW2ldID0gYXJyW2ldOyByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5mYWN0b3J5KFwiZm9ybWx5V2FyblwiLCBbXCJmb3JtbHlDb25maWdcIiwgXCJmb3JtbHlFcnJvckFuZFdhcm5pbmdzVXJsUHJlZml4XCIsIFwiJGxvZ1wiLCBmdW5jdGlvbiAoZm9ybWx5Q29uZmlnLCBmb3JtbHlFcnJvckFuZFdhcm5pbmdzVXJsUHJlZml4LCAkbG9nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHdhcm4oKSB7XG4gICAgICBpZiAoIWZvcm1seUNvbmZpZy5kaXNhYmxlV2FybmluZ3MpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICB2YXIgd2FybkluZm9TbHVnID0gYXJncy5zaGlmdCgpO1xuICAgICAgICBhcmdzLnVuc2hpZnQoXCJGb3JtbHkgV2FybmluZzpcIik7XG4gICAgICAgIGFyZ3MucHVzaChcIlwiICsgZm9ybWx5RXJyb3JBbmRXYXJuaW5nc1VybFByZWZpeCArIFwiXCIgKyB3YXJuSW5mb1NsdWcpO1xuICAgICAgICAkbG9nLndhcm4uYXBwbHkoJGxvZywgX3RvQ29uc3VtYWJsZUFycmF5KGFyZ3MpKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zZXJ2aWNlcy9mb3JtbHlXYXJuLmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG5cbiAgdmFyIGFwaUNoZWNrID0gcmVxdWlyZShcImFwaS1jaGVja1wiKSh7XG4gICAgb3V0cHV0OiB7XG4gICAgICBwcmVmaXg6IFwiYW5ndWxhci1mb3JtbHk6XCIsXG4gICAgICBkb2NzQmFzZVVybDogXCJodHRwczovL2dpdGh1Yi5jb20vZm9ybWx5LWpzL2FuZ3VsYXItZm9ybWx5L2Jsb2IvXCIgKyBWRVJTSU9OICsgXCIvb3RoZXIvRVJST1JTX0FORF9XQVJOSU5HUy5tZCNcIlxuICAgIH1cbiAgfSk7XG5cbiAgbmdNb2R1bGUuY29uc3RhbnQoXCJmb3JtbHlBcGlDaGVja1wiLCBhcGlDaGVjayk7XG4gIGlmIChPTl9URVNUKSB7XG4gICAgcmVxdWlyZShcIi4vZm9ybWx5QXBpQ2hlY2sudGVzdFwiKShuZ01vZHVsZSk7XG4gIH1cblxuICB2YXIgZm9ybWx5RXhwcmVzc2lvbiA9IGFwaUNoZWNrLm9uZU9mVHlwZShbYXBpQ2hlY2suc3RyaW5nLCBhcGlDaGVjay5mdW5jXSk7XG4gIHZhciB3cmFwcGVyVHlwZSA9IGFwaUNoZWNrLm9uZU9mVHlwZShbYXBpQ2hlY2sub25lT2YoW251bGxdKSwgYXBpQ2hlY2sudHlwZU9yQXJyYXlPZihhcGlDaGVjay5zdHJpbmcpXSk7XG5cbiAgdmFyIGZpZWxkT3B0aW9uc0FwaVNoYXBlID0ge1xuICAgIHR5cGU6IGFwaUNoZWNrLnNoYXBlLmlmTm90KFtcInRlbXBsYXRlXCIsIFwidGVtcGxhdGVVcmxcIl0sIGFwaUNoZWNrLnN0cmluZykub3B0aW9uYWwsXG4gICAgdGVtcGxhdGU6IGFwaUNoZWNrLnNoYXBlLmlmTm90KFtcInR5cGVcIiwgXCJ0ZW1wbGF0ZVVybFwiXSwgYXBpQ2hlY2suc3RyaW5nKS5vcHRpb25hbCxcbiAgICB0ZW1wbGF0ZVVybDogYXBpQ2hlY2suc2hhcGUuaWZOb3QoW1widHlwZVwiLCBcInRlbXBsYXRlXCJdLCBhcGlDaGVjay5zdHJpbmcpLm9wdGlvbmFsLFxuICAgIGtleTogYXBpQ2hlY2sub25lT2ZUeXBlKFthcGlDaGVjay5zdHJpbmcsIGFwaUNoZWNrLm51bWJlcl0pLFxuICAgIG1vZGVsOiBhcGlDaGVjay5vYmplY3Qub3B0aW9uYWwsXG4gICAgZXhwcmVzc2lvblByb3BlcnRpZXM6IGFwaUNoZWNrLm9iamVjdE9mKGFwaUNoZWNrLm9uZU9mVHlwZShbZm9ybWx5RXhwcmVzc2lvbiwgYXBpQ2hlY2suc2hhcGUoe1xuICAgICAgZXhwcmVzc2lvbjogZm9ybWx5RXhwcmVzc2lvbixcbiAgICAgIG1lc3NhZ2U6IGZvcm1seUV4cHJlc3Npb24ub3B0aW9uYWxcbiAgICB9KS5zdHJpY3RdKSkub3B0aW9uYWwsXG4gICAgZGF0YTogYXBpQ2hlY2sub2JqZWN0Lm9wdGlvbmFsLFxuICAgIHRlbXBsYXRlT3B0aW9uczogYXBpQ2hlY2sub2JqZWN0Lm9wdGlvbmFsLFxuICAgIHdyYXBwZXI6IHdyYXBwZXJUeXBlLm9wdGlvbmFsLFxuICAgIG1vZGVsT3B0aW9uczogYXBpQ2hlY2suc2hhcGUoe1xuICAgICAgdXBkYXRlT246IGFwaUNoZWNrLnN0cmluZy5vcHRpb25hbCxcbiAgICAgIGRlYm91bmNlOiBhcGlDaGVjay5vbmVPZlR5cGUoW2FwaUNoZWNrLm9iamVjdCwgYXBpQ2hlY2suc3RyaW5nXSkub3B0aW9uYWwsXG4gICAgICBhbGxvd0ludmFsaWQ6IGFwaUNoZWNrLmJvb2wub3B0aW9uYWwsXG4gICAgICBnZXR0ZXJTZXR0ZXI6IGFwaUNoZWNrLmJvb2wub3B0aW9uYWwsXG4gICAgICB0aW1lem9uZTogYXBpQ2hlY2suc3RyaW5nLm9wdGlvbmFsXG4gICAgfSkub3B0aW9uYWwsXG4gICAgd2F0Y2hlcjogYXBpQ2hlY2sudHlwZU9yQXJyYXlPZihhcGlDaGVjay5zaGFwZSh7XG4gICAgICBleHByZXNzaW9uOiBmb3JtbHlFeHByZXNzaW9uLm9wdGlvbmFsLFxuICAgICAgbGlzdGVuZXI6IGZvcm1seUV4cHJlc3Npb25cbiAgICB9KSkub3B0aW9uYWwsXG4gICAgdmFsaWRhdG9yczogYXBpQ2hlY2sub2JqZWN0T2YoYXBpQ2hlY2sub25lT2ZUeXBlKFthcGlDaGVjay5mdW5jLCBhcGlDaGVjay5zaGFwZSh7XG4gICAgICBleHByZXNzaW9uOiBmb3JtbHlFeHByZXNzaW9uLFxuICAgICAgbWVzc2FnZTogZm9ybWx5RXhwcmVzc2lvbi5vcHRpb25hbFxuICAgIH0pLnN0cmljdF0pKS5vcHRpb25hbCxcbiAgICBub0Zvcm1Db250cm9sOiBhcGlDaGVjay5ib29sLm9wdGlvbmFsLFxuICAgIGhpZGU6IGFwaUNoZWNrLmJvb2wub3B0aW9uYWwsXG4gICAgbmdNb2RlbEF0dHJzOiBhcGlDaGVjay5vYmplY3RPZihhcGlDaGVjay5zaGFwZSh7XG4gICAgICBleHByZXNzaW9uOiBhcGlDaGVjay5zaGFwZS5pZk5vdChbXCJ2YWx1ZVwiLCBcImF0dHJpYnV0ZVwiLCBcImJvdW5kXCJdLCBhcGlDaGVjay5hbnkpLm9wdGlvbmFsLFxuICAgICAgdmFsdWU6IGFwaUNoZWNrLnNoYXBlLmlmTm90KFwiZXhwcmVzc2lvblwiLCBhcGlDaGVjay5hbnkpLm9wdGlvbmFsLFxuICAgICAgYXR0cmlidXRlOiBhcGlDaGVjay5zaGFwZS5pZk5vdChcImV4cHJlc3Npb25cIiwgYXBpQ2hlY2suYW55KS5vcHRpb25hbCxcbiAgICAgIGJvdW5kOiBhcGlDaGVjay5zaGFwZS5pZk5vdChcImV4cHJlc3Npb25cIiwgYXBpQ2hlY2suYW55KS5vcHRpb25hbFxuICAgIH0pLnN0cmljdCkub3B0aW9uYWwsXG4gICAgb3B0aW9uc1R5cGVzOiBhcGlDaGVjay50eXBlT3JBcnJheU9mKGFwaUNoZWNrLnN0cmluZykub3B0aW9uYWwsXG4gICAgbGluazogYXBpQ2hlY2suZnVuYy5vcHRpb25hbCxcbiAgICBjb250cm9sbGVyOiBhcGlDaGVjay5vbmVPZlR5cGUoW2FwaUNoZWNrLnN0cmluZywgYXBpQ2hlY2suZnVuYywgYXBpQ2hlY2suYXJyYXldKS5vcHRpb25hbCxcbiAgICB2YWxpZGF0aW9uOiBhcGlDaGVjay5zaGFwZSh7XG4gICAgICBzaG93OiBhcGlDaGVjay5vbmVPZlR5cGUoW2FwaUNoZWNrLmJvb2wsIGFwaUNoZWNrLm9uZU9mKFtudWxsXSldKS5vcHRpb25hbCxcbiAgICAgIG1lc3NhZ2VzOiBhcGlDaGVjay5vYmplY3RPZihhcGlDaGVjay5mdW5jKS5vcHRpb25hbCxcbiAgICAgIGVycm9yRXhpc3RzQW5kU2hvdWxkQmVWaXNpYmxlOiBhcGlDaGVjay5ib29sLm9wdGlvbmFsXG4gICAgfSkub3B0aW9uYWwsXG4gICAgZm9ybUNvbnRyb2w6IGFwaUNoZWNrLm9iamVjdC5vcHRpb25hbCxcbiAgICB2YWx1ZTogYXBpQ2hlY2suZnVuYy5vcHRpb25hbCxcbiAgICBydW5FeHByZXNzaW9uczogYXBpQ2hlY2suZnVuYy5vcHRpb25hbFxuICB9O1xuXG4gIHZhciBmb3JtbHlGaWVsZE9wdGlvbnMgPSBhcGlDaGVjay5zaGFwZShmaWVsZE9wdGlvbnNBcGlTaGFwZSkuc3RyaWN0O1xuXG4gIHZhciB0eXBlT3B0aW9uc0RlZmF1bHRPcHRpb25zID0gYW5ndWxhci5jb3B5KGZpZWxkT3B0aW9uc0FwaVNoYXBlKTtcbiAgdHlwZU9wdGlvbnNEZWZhdWx0T3B0aW9ucy5rZXkgPSBhcGlDaGVjay5zdHJpbmcub3B0aW9uYWw7XG5cbiAgdmFyIGZvcm1seVR5cGVPcHRpb25zID0gYXBpQ2hlY2suc2hhcGUoe1xuICAgIG5hbWU6IGFwaUNoZWNrLnN0cmluZyxcbiAgICB0ZW1wbGF0ZTogYXBpQ2hlY2suc2hhcGUuaWZOb3QoXCJ0ZW1wbGF0ZVVybFwiLCBhcGlDaGVjay5zdHJpbmcpLm9wdGlvbmFsLFxuICAgIHRlbXBsYXRlVXJsOiBhcGlDaGVjay5zaGFwZS5pZk5vdChcInRlbXBsYXRlXCIsIGFwaUNoZWNrLnN0cmluZykub3B0aW9uYWwsXG4gICAgY29udHJvbGxlcjogYXBpQ2hlY2sub25lT2ZUeXBlKFthcGlDaGVjay5mdW5jLCBhcGlDaGVjay5zdHJpbmcsIGFwaUNoZWNrLmFycmF5XSkub3B0aW9uYWwsXG4gICAgbGluazogYXBpQ2hlY2suZnVuYy5vcHRpb25hbCxcbiAgICBkZWZhdWx0T3B0aW9uczogYXBpQ2hlY2sub25lT2ZUeXBlKFthcGlDaGVjay5mdW5jLCBhcGlDaGVjay5zaGFwZSh0eXBlT3B0aW9uc0RlZmF1bHRPcHRpb25zKV0pLm9wdGlvbmFsLFxuICAgIFwiZXh0ZW5kc1wiOiBhcGlDaGVjay5zdHJpbmcub3B0aW9uYWwsXG4gICAgd3JhcHBlcjogd3JhcHBlclR5cGUub3B0aW9uYWwsXG4gICAgZGF0YTogYXBpQ2hlY2sub2JqZWN0Lm9wdGlvbmFsLFxuICAgIHZhbGlkYXRlT3B0aW9uczogYXBpQ2hlY2suZnVuYy5vcHRpb25hbCxcbiAgICBvdmVyd3JpdGVPazogYXBpQ2hlY2suYm9vbC5vcHRpb25hbFxuICB9KS5zdHJpY3Q7XG5cbiAgYW5ndWxhci5leHRlbmQoYXBpQ2hlY2ssIHtcbiAgICBmb3JtbHlUeXBlT3B0aW9uczogZm9ybWx5VHlwZU9wdGlvbnMsIGZvcm1seUZpZWxkT3B0aW9uczogZm9ybWx5RmllbGRPcHRpb25zLCBmb3JtbHlFeHByZXNzaW9uOiBmb3JtbHlFeHByZXNzaW9uXG4gIH0pO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vcHJvdmlkZXJzL2Zvcm1seUFwaUNoZWNrLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoXCJhbmd1bGFyLWZpeFwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmdNb2R1bGUpIHtcbiAgbmdNb2R1bGUucHJvdmlkZXIoXCJmb3JtbHlVc2FiaWxpdHlcIiwgW1wiZm9ybWx5VmVyc2lvblwiLCBmdW5jdGlvbiAoZm9ybWx5VmVyc2lvbikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgZXJyb3JzQW5kV2FybmluZ3NVcmxQcmVmaXggPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9mb3JtbHktanMvYW5ndWxhci1mb3JtbHkvYmxvYi9cIiArIGZvcm1seVZlcnNpb24gKyBcIi9vdGhlci9FUlJPUlNfQU5EX1dBUk5JTkdTLm1kI1wiO1xuICAgIGFuZ3VsYXIuZXh0ZW5kKHRoaXMsIHtcbiAgICAgIGdldEZvcm1seUVycm9yOiBnZXRGb3JtbHlFcnJvcixcbiAgICAgIGdldEZpZWxkRXJyb3I6IGdldEZpZWxkRXJyb3IsXG4gICAgICBjaGVja1dyYXBwZXI6IGNoZWNrV3JhcHBlcixcbiAgICAgIGNoZWNrV3JhcHBlclRlbXBsYXRlOiBjaGVja1dyYXBwZXJUZW1wbGF0ZSxcbiAgICAgIGNoZWNrQWxsb3dlZFByb3BlcnRpZXM6IGNoZWNrQWxsb3dlZFByb3BlcnRpZXMsXG4gICAgICAkZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGdldEZpZWxkRXJyb3IoZXJyb3JJbmZvU2x1ZywgbWVzc2FnZSwgZmllbGQpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMykge1xuICAgICAgICBmaWVsZCA9IG1lc3NhZ2U7XG4gICAgICAgIG1lc3NhZ2UgPSBlcnJvckluZm9TbHVnO1xuICAgICAgICBlcnJvckluZm9TbHVnID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgRXJyb3IoZ2V0RXJyb3JNZXNzYWdlKGVycm9ySW5mb1NsdWcsIG1lc3NhZ2UpICsgKFwiIEZpZWxkIGRlZmluaXRpb246IFwiICsgYW5ndWxhci50b0pzb24oZmllbGQpKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Rm9ybWx5RXJyb3IoZXJyb3JJbmZvU2x1ZywgbWVzc2FnZSkge1xuICAgICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBlcnJvckluZm9TbHVnO1xuICAgICAgICBlcnJvckluZm9TbHVnID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgRXJyb3IoZ2V0RXJyb3JNZXNzYWdlKGVycm9ySW5mb1NsdWcsIG1lc3NhZ2UpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFcnJvck1lc3NhZ2UoZXJyb3JJbmZvU2x1ZywgbWVzc2FnZSkge1xuICAgICAgdmFyIHVybCA9IFwiXCI7XG4gICAgICBpZiAoZXJyb3JJbmZvU2x1ZyAhPT0gbnVsbCkge1xuICAgICAgICB1cmwgPSBcIlwiICsgZXJyb3JzQW5kV2FybmluZ3NVcmxQcmVmaXggKyBcIlwiICsgZXJyb3JJbmZvU2x1ZztcbiAgICAgIH1cbiAgICAgIHJldHVybiBcIkZvcm1seSBFcnJvcjogXCIgKyBtZXNzYWdlICsgXCIuIFwiICsgdXJsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrV3JhcHBlcih3cmFwcGVyKSB7XG4gICAgICBpZiAod3JhcHBlci50ZW1wbGF0ZSAmJiB3cmFwcGVyLnRlbXBsYXRlVXJsKSB7XG4gICAgICAgIHRocm93IGdldEZvcm1seUVycm9yKFwiVGVtcGxhdGUgd3JhcHBlcnMgY2FuIG9ubHkgaGF2ZSBhIHRlbXBsYXRlVXJsIG9yIGEgdGVtcGxhdGUuIFwiICsgKFwiVGhpcyBvbmUgcHJvdmlkZWQgYm90aDogXCIgKyBKU09OLnN0cmluZ2lmeSh3cmFwcGVyKSkpO1xuICAgICAgfVxuICAgICAgaWYgKCF3cmFwcGVyLnRlbXBsYXRlICYmICF3cmFwcGVyLnRlbXBsYXRlVXJsKSB7XG4gICAgICAgIHRocm93IGdldEZvcm1seUVycm9yKFwiVGVtcGxhdGUgd3JhcHBlcnMgbXVzdCBoYXZlIG9uZSBvZiBhIHRlbXBsYXRlVXJsIG9yIGEgdGVtcGxhdGUuIFwiICsgKFwiVGhpcyBvbmUgcHJvdmlkZWQgbmVpdGhlcjogXCIgKyBKU09OLnN0cmluZ2lmeSh3cmFwcGVyKSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrV3JhcHBlclRlbXBsYXRlKHRlbXBsYXRlLCBhZGRpdGlvbmFsSW5mbykge1xuICAgICAgdmFyIGZvcm1seVRyYW5zY2x1ZGUgPSBcIjxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlwiO1xuICAgICAgaWYgKHRlbXBsYXRlLmluZGV4T2YoZm9ybWx5VHJhbnNjbHVkZSkgPT09IC0xKSB7XG4gICAgICAgIHRocm93IGdldEZvcm1seUVycm9yKFwiVGVtcGxhdGUgd3JhcHBlciB0ZW1wbGF0ZXMgbXVzdCB1c2UgXFxcIlwiICsgZm9ybWx5VHJhbnNjbHVkZSArIFwiXFxcIiBzb21ld2hlcmUgaW4gdGhlbS4gXCIgKyAoXCJUaGlzIG9uZSBkb2VzIG5vdCBoYXZlIFxcXCI8Zm9ybWx5LXRyYW5zY2x1ZGU+PC9mb3JtbHktdHJhbnNjbHVkZT5cXFwiIGluIGl0OiBcIiArIHRlbXBsYXRlKSArIFwiXFxuXCIgKyAoXCJBZGRpdGlvbmFsIGluZm9ybWF0aW9uOiBcIiArIEpTT04uc3RyaW5naWZ5KGFkZGl0aW9uYWxJbmZvKSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrQWxsb3dlZFByb3BlcnRpZXMoYWxsb3dlZFByb3BlcnRpZXMsIG9iaiwgY29udGV4dCkge1xuICAgICAgdmFyIGV4dHJhUHJvcHMgPSBPYmplY3Qua2V5cyhvYmopLmZpbHRlcihmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICByZXR1cm4gYWxsb3dlZFByb3BlcnRpZXMuaW5kZXhPZihwcm9wKSA9PT0gLTE7XG4gICAgICB9KTtcbiAgICAgIGlmIChleHRyYVByb3BzLmxlbmd0aCkge1xuICAgICAgICB2YXIgZXh0cmFQcm9wc0pTT04gPSBKU09OLnN0cmluZ2lmeShleHRyYVByb3BzLmpvaW4oXCIsIFwiKSk7XG4gICAgICAgIHZhciBhbGxvd2VkUHJvcHNKU09OID0gSlNPTi5zdHJpbmdpZnkoYWxsb3dlZFByb3BlcnRpZXMuam9pbihcIiwgXCIpKTtcbiAgICAgICAgdGhyb3cgZ2V0RmllbGRFcnJvcihcInlvdS1oYXZlLXNwZWNpZmllZC1wcm9wZXJ0aWVzLWZvci1jb250ZXh0LXRoYXQtYXJlLW5vdC1hbGxvd2VkXCIsIFtcIllvdSBoYXZlIHNwZWNpZmllZCBwcm9wZXJ0aWVzIGZvciBcIiArIGNvbnRleHQgKyBcIiB0aGF0IGFyZSBub3QgYWxsb3dlZDogXCIgKyBleHRyYVByb3BzSlNPTiwgXCJBbGxvd2VkIHByb3BlcnRpZXMgYXJlOiBcIiArIGFsbG93ZWRQcm9wc0pTT05dLmpvaW4oXCJcXG5cIiksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9wcm92aWRlcnMvZm9ybWx5VXNhYmlsaXR5LmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoXCJhbmd1bGFyLWZpeFwiKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoXCIuLi9vdGhlci91dGlsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmdNb2R1bGUpIHtcbiAgbmdNb2R1bGUucHJvdmlkZXIoXCJmb3JtbHlDb25maWdcIiwgZm9ybWx5Q29uZmlnKTtcblxuICBmb3JtbHlDb25maWcudGVzdHMgPSBPTl9URVNUID8gcmVxdWlyZShcIi4vZm9ybWx5Q29uZmlnLnRlc3RcIikobmdNb2R1bGUpIDogbnVsbDtcblxuICBmdW5jdGlvbiBmb3JtbHlDb25maWcoZm9ybWx5VXNhYmlsaXR5UHJvdmlkZXIsIGZvcm1seUFwaUNoZWNrKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgdHlwZU1hcCA9IHt9O1xuICAgIHZhciB0ZW1wbGF0ZVdyYXBwZXJzTWFwID0ge307XG4gICAgdmFyIGRlZmF1bHRXcmFwcGVyTmFtZSA9IFwiZGVmYXVsdFwiO1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGdldEVycm9yID0gZm9ybWx5VXNhYmlsaXR5UHJvdmlkZXIuZ2V0Rm9ybWx5RXJyb3I7XG4gICAgdmFyIGFsbG93ZWRUeXBlUHJvcGVydGllcyA9IFtcIm5hbWVcIiwgXCJ0ZW1wbGF0ZVwiLCBcInRlbXBsYXRlVXJsXCIsIFwiY29udHJvbGxlclwiLCBcImxpbmtcIiwgXCJkZWZhdWx0T3B0aW9uc1wiLCBcImV4dGVuZHNcIiwgXCJ3cmFwcGVyXCIsIFwiZGF0YVwiLCBcInZhbGlkYXRlT3B0aW9uc1wiLCBcIm92ZXJ3cml0ZU9rXCJdO1xuXG4gICAgYW5ndWxhci5leHRlbmQodGhpcywge1xuICAgICAgc2V0VHlwZTogc2V0VHlwZSxcbiAgICAgIGdldFR5cGU6IGdldFR5cGUsXG4gICAgICBzZXRXcmFwcGVyOiBzZXRXcmFwcGVyLFxuICAgICAgZ2V0V3JhcHBlcjogZ2V0V3JhcHBlcixcbiAgICAgIGdldFdyYXBwZXJCeVR5cGU6IGdldFdyYXBwZXJCeVR5cGUsXG4gICAgICByZW1vdmVXcmFwcGVyQnlOYW1lOiByZW1vdmVXcmFwcGVyQnlOYW1lLFxuICAgICAgcmVtb3ZlV3JhcHBlcnNGb3JUeXBlOiByZW1vdmVXcmFwcGVyc0ZvclR5cGUsXG4gICAgICBkaXNhYmxlV2FybmluZ3M6IGZhbHNlLFxuICAgICAgZXh0cmFzOiB7XG4gICAgICAgIGRpc2FibGVOZ01vZGVsQXR0cnNNYW5pcHVsYXRvcjogZmFsc2UsXG4gICAgICAgIG5nTW9kZWxBdHRyc01hbmlwdWxhdG9yUHJlZmVyQm91bmQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgdGVtcGxhdGVNYW5pcHVsYXRvcnM6IHtcbiAgICAgICAgcHJlV3JhcHBlcjogW10sXG4gICAgICAgIHBvc3RXcmFwcGVyOiBbXVxuICAgICAgfSxcbiAgICAgICRnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHNldFR5cGUob3B0aW9ucykge1xuICAgICAgaWYgKGFuZ3VsYXIuaXNBcnJheShvcHRpb25zKSkge1xuICAgICAgICBhbmd1bGFyLmZvckVhY2gob3B0aW9ucywgc2V0VHlwZSk7XG4gICAgICB9IGVsc2UgaWYgKGFuZ3VsYXIuaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICAgICAgY2hlY2tUeXBlKG9wdGlvbnMpO1xuICAgICAgICBpZiAob3B0aW9uc1tcImV4dGVuZHNcIl0pIHtcbiAgICAgICAgICBleHRlbmRUeXBlT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICB0eXBlTWFwW29wdGlvbnMubmFtZV0gPSBvcHRpb25zO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgZ2V0RXJyb3IoXCJZb3UgbXVzdCBwcm92aWRlIGFuIG9iamVjdCBvciBhcnJheSBmb3Igc2V0VHlwZS4gWW91IHByb3ZpZGVkOiBcIiArIEpTT04uc3RyaW5naWZ5KGFyZ3VtZW50cykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShvcHRpb25zKSB7XG4gICAgICBmb3JtbHlBcGlDaGVja1tcInRocm93XCJdKGZvcm1seUFwaUNoZWNrLmZvcm1seVR5cGVPcHRpb25zLCBhcmd1bWVudHMsIHtcbiAgICAgICAgcHJlZml4OiBcImZvcm1seUNvbmZpZy5zZXRUeXBlXCIsXG4gICAgICAgIHVybDogXCJzZXR0eXBlLXZhbGlkYXRpb24tZmFpbGVkXCJcbiAgICAgIH0pO1xuICAgICAgaWYgKCFvcHRpb25zLm92ZXJ3cml0ZU9rKSB7XG4gICAgICAgIGNoZWNrT3ZlcndyaXRlKG9wdGlvbnMubmFtZSwgdHlwZU1hcCwgb3B0aW9ucywgXCJ0eXBlc1wiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbnMub3ZlcndyaXRlT2sgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBmb3JtbHlVc2FiaWxpdHlQcm92aWRlci5jaGVja0FsbG93ZWRQcm9wZXJ0aWVzKGFsbG93ZWRUeXBlUHJvcGVydGllcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXh0ZW5kVHlwZU9wdGlvbnMob3B0aW9ucykge1xuICAgICAgdmFyIGV4dGVuZHNUeXBlID0gZ2V0VHlwZShvcHRpb25zW1wiZXh0ZW5kc1wiXSwgdHJ1ZSwgb3B0aW9ucyk7XG4gICAgICBleHRlbmRUeXBlQ29udHJvbGxlckZ1bmN0aW9uKG9wdGlvbnMsIGV4dGVuZHNUeXBlKTtcbiAgICAgIGV4dGVuZFR5cGVMaW5rRnVuY3Rpb24ob3B0aW9ucywgZXh0ZW5kc1R5cGUpO1xuICAgICAgZXh0ZW5kVHlwZVZhbGlkYXRlT3B0aW9uc0Z1bmN0aW9uKG9wdGlvbnMsIGV4dGVuZHNUeXBlKTtcbiAgICAgIGV4dGVuZFR5cGVEZWZhdWx0T3B0aW9ucyhvcHRpb25zLCBleHRlbmRzVHlwZSk7XG4gICAgICB1dGlscy5yZXZlcnNlRGVlcE1lcmdlKG9wdGlvbnMsIGV4dGVuZHNUeXBlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleHRlbmRUeXBlQ29udHJvbGxlckZ1bmN0aW9uKG9wdGlvbnMsIGV4dGVuZHNUeXBlKSB7XG4gICAgICB2YXIgZXh0ZW5kc0N0cmwgPSBleHRlbmRzVHlwZS5jb250cm9sbGVyO1xuICAgICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChleHRlbmRzQ3RybCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG9wdGlvbnNDdHJsID0gb3B0aW9ucy5jb250cm9sbGVyO1xuICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKG9wdGlvbnNDdHJsKSkge1xuICAgICAgICBvcHRpb25zLmNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoJHNjb3BlLCAkY29udHJvbGxlcikge1xuICAgICAgICAgICRjb250cm9sbGVyKGV4dGVuZHNDdHJsLCB7ICRzY29wZTogJHNjb3BlIH0pO1xuICAgICAgICAgICRjb250cm9sbGVyKG9wdGlvbnNDdHJsLCB7ICRzY29wZTogJHNjb3BlIH0pO1xuICAgICAgICB9O1xuICAgICAgICBvcHRpb25zLmNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRzY29wZVwiLCBcIiRjb250cm9sbGVyXCJdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9ucy5jb250cm9sbGVyID0gZXh0ZW5kc0N0cmw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXh0ZW5kVHlwZUxpbmtGdW5jdGlvbihvcHRpb25zLCBleHRlbmRzVHlwZSkge1xuICAgICAgdmFyIGV4dGVuZHNGbiA9IGV4dGVuZHNUeXBlLmxpbms7XG4gICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKGV4dGVuZHNGbikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG9wdGlvbnNGbiA9IG9wdGlvbnMubGluaztcbiAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChvcHRpb25zRm4pKSB7XG4gICAgICAgIG9wdGlvbnMubGluayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBleHRlbmRzRm4uYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICAgICAgICAgIG9wdGlvbnNGbi5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb25zLmxpbmsgPSBleHRlbmRzRm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXh0ZW5kVHlwZVZhbGlkYXRlT3B0aW9uc0Z1bmN0aW9uKG9wdGlvbnMsIGV4dGVuZHNUeXBlKSB7XG4gICAgICB2YXIgZXh0ZW5kc0ZuID0gZXh0ZW5kc1R5cGUudmFsaWRhdGVPcHRpb25zO1xuICAgICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChleHRlbmRzRm4pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBvcHRpb25zRm4gPSBvcHRpb25zLnZhbGlkYXRlT3B0aW9ucztcbiAgICAgIHZhciBvcmlnaW5hbERlZmF1bHRPcHRpb25zID0gb3B0aW9ucy5kZWZhdWx0T3B0aW9ucztcbiAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChvcHRpb25zRm4pKSB7XG4gICAgICAgIG9wdGlvbnMudmFsaWRhdGVPcHRpb25zID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICBvcHRpb25zRm4ob3B0aW9ucyk7XG4gICAgICAgICAgdmFyIG1lcmdlZE9wdGlvbnMgPSBhbmd1bGFyLmNvcHkob3B0aW9ucyk7XG4gICAgICAgICAgdmFyIGRlZmF1bHRPcHRpb25zID0gb3JpZ2luYWxEZWZhdWx0T3B0aW9ucztcbiAgICAgICAgICBpZiAoZGVmYXVsdE9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRnVuY3Rpb24oZGVmYXVsdE9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zID0gZGVmYXVsdE9wdGlvbnMobWVyZ2VkT3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1dGlscy5yZXZlcnNlRGVlcE1lcmdlKG1lcmdlZE9wdGlvbnMsIGRlZmF1bHRPcHRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXh0ZW5kc0ZuKG1lcmdlZE9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9ucy52YWxpZGF0ZU9wdGlvbnMgPSBleHRlbmRzRm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXh0ZW5kVHlwZURlZmF1bHRPcHRpb25zKG9wdGlvbnMsIGV4dGVuZHNUeXBlKSB7XG4gICAgICB2YXIgZXh0ZW5kc0RPID0gZXh0ZW5kc1R5cGUuZGVmYXVsdE9wdGlvbnM7XG4gICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKGV4dGVuZHNETykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG9wdGlvbnNETyA9IG9wdGlvbnMuZGVmYXVsdE9wdGlvbnM7XG4gICAgICB2YXIgb3B0aW9uc0RPSXNGbiA9IGFuZ3VsYXIuaXNGdW5jdGlvbihvcHRpb25zRE8pO1xuICAgICAgdmFyIGV4dGVuZHNET0lzRm4gPSBhbmd1bGFyLmlzRnVuY3Rpb24oZXh0ZW5kc0RPKTtcbiAgICAgIGlmIChleHRlbmRzRE9Jc0ZuKSB7XG4gICAgICAgIG9wdGlvbnMuZGVmYXVsdE9wdGlvbnMgPSBmdW5jdGlvbiBkZWZhdWx0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgICAgdmFyIGV4dGVuZHNEZWZhdWx0T3B0aW9ucyA9IGV4dGVuZHNETyhvcHRpb25zKTtcbiAgICAgICAgICB2YXIgbWVyZ2VkRGVmYXVsdE9wdGlvbnMgPSB7fTtcbiAgICAgICAgICB1dGlscy5yZXZlcnNlRGVlcE1lcmdlKG1lcmdlZERlZmF1bHRPcHRpb25zLCBvcHRpb25zLCBleHRlbmRzRGVmYXVsdE9wdGlvbnMpO1xuICAgICAgICAgIGlmIChvcHRpb25zRE9Jc0ZuKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uc0RPKG1lcmdlZERlZmF1bHRPcHRpb25zKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXRpbHMucmV2ZXJzZURlZXBNZXJnZShleHRlbmRzRGVmYXVsdE9wdGlvbnMsIG9wdGlvbnNETyk7XG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5kc0RlZmF1bHRPcHRpb25zO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9uc0RPSXNGbikge1xuICAgICAgICBvcHRpb25zLmRlZmF1bHRPcHRpb25zID0gZnVuY3Rpb24gZGVmYXVsdE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICAgIHZhciBuZXdEZWZhdWx0T3B0aW9ucyA9IHt9O1xuICAgICAgICAgIHV0aWxzLnJldmVyc2VEZWVwTWVyZ2UobmV3RGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMsIGV4dGVuZHNETyk7XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbnNETyhuZXdEZWZhdWx0T3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VHlwZShuYW1lLCB0aHJvd0Vycm9yLCBlcnJvckNvbnRleHQpIHtcbiAgICAgIGlmICghbmFtZSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgdmFyIHR5cGUgPSB0eXBlTWFwW25hbWVdO1xuICAgICAgaWYgKCF0eXBlICYmIHRocm93RXJyb3IgPT09IHRydWUpIHtcbiAgICAgICAgdGhyb3cgZ2V0RXJyb3IoXCJUaGVyZSBpcyBubyB0eXBlIGJ5IHRoZSBuYW1lIG9mIFxcXCJcIiArIG5hbWUgKyBcIlxcXCI6IFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3JDb250ZXh0KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRXcmFwcGVyKF94LCBfeDIpIHtcbiAgICAgIHZhciBfYWdhaW4gPSB0cnVlO1xuXG4gICAgICBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHtcbiAgICAgICAgX2FnYWluID0gZmFsc2U7XG4gICAgICAgIHZhciBvcHRpb25zID0gX3gsXG4gICAgICAgICAgICBuYW1lID0gX3gyO1xuXG4gICAgICAgIGlmIChhbmd1bGFyLmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgICAgICByZXR1cm4gb3B0aW9ucy5tYXAoZnVuY3Rpb24gKHdyYXBwZXJPcHRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gc2V0V3JhcHBlcih3cmFwcGVyT3B0aW9ucyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYW5ndWxhci5pc09iamVjdChvcHRpb25zKSkge1xuICAgICAgICAgIG9wdGlvbnMudHlwZXMgPSBnZXRPcHRpb25zVHlwZXMob3B0aW9ucyk7XG4gICAgICAgICAgb3B0aW9ucy5uYW1lID0gZ2V0T3B0aW9uc05hbWUob3B0aW9ucywgbmFtZSk7XG4gICAgICAgICAgY2hlY2tXcmFwcGVyQVBJKG9wdGlvbnMpO1xuICAgICAgICAgIHRlbXBsYXRlV3JhcHBlcnNNYXBbb3B0aW9ucy5uYW1lXSA9IG9wdGlvbnM7XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgICAgIH0gZWxzZSBpZiAoYW5ndWxhci5pc1N0cmluZyhvcHRpb25zKSkge1xuICAgICAgICAgIF94ID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6IG9wdGlvbnMsXG4gICAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgICAgfTtcbiAgICAgICAgICBfYWdhaW4gPSB0cnVlO1xuICAgICAgICAgIGNvbnRpbnVlIF9mdW5jdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE9wdGlvbnNUeXBlcyhvcHRpb25zKSB7XG4gICAgICBpZiAoYW5ndWxhci5pc1N0cmluZyhvcHRpb25zLnR5cGVzKSkge1xuICAgICAgICByZXR1cm4gW29wdGlvbnMudHlwZXNdO1xuICAgICAgfVxuICAgICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChvcHRpb25zLnR5cGVzKSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy50eXBlcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRPcHRpb25zTmFtZShvcHRpb25zLCBuYW1lKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5uYW1lIHx8IG5hbWUgfHwgb3B0aW9ucy50eXBlcy5qb2luKFwiIFwiKSB8fCBkZWZhdWx0V3JhcHBlck5hbWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tXcmFwcGVyQVBJKG9wdGlvbnMpIHtcbiAgICAgIGZvcm1seVVzYWJpbGl0eVByb3ZpZGVyLmNoZWNrV3JhcHBlcihvcHRpb25zKTtcbiAgICAgIGlmIChvcHRpb25zLnRlbXBsYXRlKSB7XG4gICAgICAgIGZvcm1seVVzYWJpbGl0eVByb3ZpZGVyLmNoZWNrV3JhcHBlclRlbXBsYXRlKG9wdGlvbnMudGVtcGxhdGUsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgaWYgKCFvcHRpb25zLm92ZXJ3cml0ZU9rKSB7XG4gICAgICAgIGNoZWNrT3ZlcndyaXRlKG9wdGlvbnMubmFtZSwgdGVtcGxhdGVXcmFwcGVyc01hcCwgb3B0aW9ucywgXCJ0ZW1wbGF0ZVdyYXBwZXJzXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMub3ZlcndyaXRlT2s7XG4gICAgICB9XG4gICAgICBjaGVja1dyYXBwZXJUeXBlcyhvcHRpb25zKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1dyYXBwZXJUeXBlcyhvcHRpb25zKSB7XG4gICAgICB2YXIgc2hvdWxkVGhyb3cgPSAhYW5ndWxhci5pc0FycmF5KG9wdGlvbnMudHlwZXMpIHx8ICFvcHRpb25zLnR5cGVzLmV2ZXJ5KGFuZ3VsYXIuaXNTdHJpbmcpO1xuICAgICAgaWYgKHNob3VsZFRocm93KSB7XG4gICAgICAgIHRocm93IGdldEVycm9yKFwiQXR0ZW1wdGVkIHRvIGNyZWF0ZSBhIHRlbXBsYXRlIHdyYXBwZXIgd2l0aCB0eXBlcyB0aGF0IGlzIG5vdCBhIHN0cmluZyBvciBhbiBhcnJheSBvZiBzdHJpbmdzXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrT3ZlcndyaXRlKHByb3BlcnR5LCBvYmplY3QsIG5ld1ZhbHVlLCBvYmplY3ROYW1lKSB7XG4gICAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICB3YXJuKFtcIkF0dGVtcHRpbmcgdG8gb3ZlcndyaXRlIFwiICsgcHJvcGVydHkgKyBcIiBvbiBcIiArIG9iamVjdE5hbWUgKyBcIiB3aGljaCBpcyBjdXJyZW50bHlcIiwgXCJcIiArIEpTT04uc3RyaW5naWZ5KG9iamVjdFtwcm9wZXJ0eV0pICsgXCIgd2l0aCBcIiArIEpTT04uc3RyaW5naWZ5KG5ld1ZhbHVlKSwgXCJUbyBzdXByZXNzIHRoaXMgd2FybmluZywgc3BlY2lmeSB0aGUgcHJvcGVydHkgXFxcIm92ZXJ3cml0ZU9rOiB0cnVlXFxcIlwiXS5qb2luKFwiIFwiKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0V3JhcHBlcihuYW1lKSB7XG4gICAgICByZXR1cm4gdGVtcGxhdGVXcmFwcGVyc01hcFtuYW1lIHx8IGRlZmF1bHRXcmFwcGVyTmFtZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0V3JhcHBlckJ5VHlwZSh0eXBlKSB7XG4gICAgICAvKiBqc2hpbnQgbWF4Y29tcGxleGl0eTo2ICovXG4gICAgICB2YXIgd3JhcHBlcnMgPSBbXTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gdGVtcGxhdGVXcmFwcGVyc01hcCkge1xuICAgICAgICBpZiAodGVtcGxhdGVXcmFwcGVyc01hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgIGlmICh0ZW1wbGF0ZVdyYXBwZXJzTWFwW25hbWVdLnR5cGVzICYmIHRlbXBsYXRlV3JhcHBlcnNNYXBbbmFtZV0udHlwZXMuaW5kZXhPZih0eXBlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHdyYXBwZXJzLnB1c2godGVtcGxhdGVXcmFwcGVyc01hcFtuYW1lXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gd3JhcHBlcnM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlV3JhcHBlckJ5TmFtZShuYW1lKSB7XG4gICAgICB2YXIgd3JhcHBlciA9IHRlbXBsYXRlV3JhcHBlcnNNYXBbbmFtZV07XG4gICAgICBkZWxldGUgdGVtcGxhdGVXcmFwcGVyc01hcFtuYW1lXTtcbiAgICAgIHJldHVybiB3cmFwcGVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVdyYXBwZXJzRm9yVHlwZSh0eXBlKSB7XG4gICAgICB2YXIgd3JhcHBlcnMgPSBnZXRXcmFwcGVyQnlUeXBlKHR5cGUpO1xuICAgICAgaWYgKCF3cmFwcGVycykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIWFuZ3VsYXIuaXNBcnJheSh3cmFwcGVycykpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVdyYXBwZXJCeU5hbWUod3JhcHBlcnMubmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3cmFwcGVycy5mb3JFYWNoKGZ1bmN0aW9uICh3cmFwcGVyKSB7XG4gICAgICAgICAgcmV0dXJuIHJlbW92ZVdyYXBwZXJCeU5hbWUod3JhcHBlci5uYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB3cmFwcGVycztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3YXJuKCkge1xuICAgICAgaWYgKCFfdGhpcy5kaXNhYmxlV2FybmluZ3MpIHtcbiAgICAgICAgY29uc29sZS53YXJuLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZvcm1seUNvbmZpZy4kaW5qZWN0ID0gW1wiZm9ybWx5VXNhYmlsaXR5UHJvdmlkZXJcIiwgXCJmb3JtbHlBcGlDaGVja1wiXTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3Byb3ZpZGVycy9mb3JtbHlDb25maWcuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG4gIG5nTW9kdWxlLmNvbnN0YW50KFwiZm9ybWx5VmVyc2lvblwiLCBWRVJTSU9OKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3Byb3ZpZGVycy9mb3JtbHlWZXJzaW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5jb25zdGFudChcImZvcm1seUVycm9yQW5kV2FybmluZ3NVcmxQcmVmaXhcIiwgXCJodHRwczovL2dpdGh1Yi5jb20vZm9ybWx5LWpzL2FuZ3VsYXItZm9ybWx5L3dpa2kvRXJyb3JzLWFuZC1XYXJuaW5ncyNcIik7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9wcm92aWRlcnMvZm9ybWx5RXJyb3JBbmRXYXJuaW5nc1VybFByZWZpeC5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmdNb2R1bGUpIHtcbiAgbmdNb2R1bGUuZmFjdG9yeShcImZvcm1seVZhbGlkYXRpb25NZXNzYWdlc1wiLCBmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgZm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VzID0ge1xuICAgICAgYWRkVGVtcGxhdGVPcHRpb25WYWx1ZU1lc3NhZ2U6IGFkZFRlbXBsYXRlT3B0aW9uVmFsdWVNZXNzYWdlLFxuICAgICAgYWRkU3RyaW5nTWVzc2FnZTogYWRkU3RyaW5nTWVzc2FnZSxcbiAgICAgIG1lc3NhZ2VzOiB7fVxuICAgIH07XG5cbiAgICByZXR1cm4gZm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VzO1xuXG4gICAgZnVuY3Rpb24gYWRkVGVtcGxhdGVPcHRpb25WYWx1ZU1lc3NhZ2UobmFtZSwgcHJvcCwgcHJlZml4LCBzdWZmaXgsIGFsdGVybmF0ZSkge1xuICAgICAgZm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VzLm1lc3NhZ2VzW25hbWVdID0gdGVtcGxhdGVPcHRpb25WYWx1ZShwcm9wLCBwcmVmaXgsIHN1ZmZpeCwgYWx0ZXJuYXRlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRTdHJpbmdNZXNzYWdlKG5hbWUsIHN0cmluZykge1xuICAgICAgZm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VzLm1lc3NhZ2VzW25hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0ZW1wbGF0ZU9wdGlvblZhbHVlKHByb3AsIHByZWZpeCwgc3VmZml4LCBhbHRlcm5hdGUpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBnZXRWYWxpZGF0aW9uTWVzc2FnZSh2aWV3VmFsdWUsIG1vZGVsVmFsdWUsIHNjb3BlKSB7XG4gICAgICAgIGlmIChzY29wZS5vcHRpb25zLnRlbXBsYXRlT3B0aW9uc1twcm9wXSkge1xuICAgICAgICAgIHJldHVybiBcIlwiICsgcHJlZml4ICsgXCIgXCIgKyBzY29wZS5vcHRpb25zLnRlbXBsYXRlT3B0aW9uc1twcm9wXSArIFwiIFwiICsgc3VmZml4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBhbHRlcm5hdGU7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3Byb3ZpZGVycy9mb3JtbHlWYWxpZGF0aW9uTWVzc2FnZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG4gIG5nTW9kdWxlLmRpcmVjdGl2ZShcImZvcm1seUN1c3RvbVZhbGlkYXRpb25cIiwgZm9ybWx5Q3VzdG9tVmFsaWRhdGlvbik7XG5cbiAgZm9ybWx5Q3VzdG9tVmFsaWRhdGlvbi50ZXN0cyA9IE9OX1RFU1QgPyByZXF1aXJlKFwiLi9mb3JtbHktY3VzdG9tLXZhbGlkYXRpb24udGVzdFwiKShuZ01vZHVsZSkgOiBudWxsO1xuXG4gIGZ1bmN0aW9uIGZvcm1seUN1c3RvbVZhbGlkYXRpb24oZm9ybWx5VXRpbCwgJHEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVxdWlyZTogXCJuZ01vZGVsXCIsXG4gICAgICBsaW5rOiBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbCwgYXR0cnMsIGN0cmwpIHtcbiAgICAgICAgdmFyIHZhbGlkYXRvcnMgPSBzY29wZS4kZXZhbChhdHRycy5mb3JtbHlDdXN0b21WYWxpZGF0aW9uKTtcbiAgICAgICAgaWYgKCF2YWxpZGF0b3JzKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNoZWNrVmFsaWRhdG9ycyh2YWxpZGF0b3JzKTtcbiAgICAgICAgc2NvcGUub3B0aW9ucy52YWxpZGF0aW9uLm1lc3NhZ2VzID0gc2NvcGUub3B0aW9ucy52YWxpZGF0aW9uLm1lc3NhZ2VzIHx8IHt9O1xuXG4gICAgICAgIHZhciB1c2VOZXdWYWxpZGF0b3JzQXBpID0gY3RybC5oYXNPd25Qcm9wZXJ0eShcIiR2YWxpZGF0b3JzXCIpICYmICFhdHRycy5oYXNPd25Qcm9wZXJ0eShcInVzZVBhcnNlcnNcIik7XG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaCh2YWxpZGF0b3JzLCBmdW5jdGlvbiAodmFsaWRhdG9yLCBuYW1lKSB7XG4gICAgICAgICAgdmFyIG1lc3NhZ2UgPSB2YWxpZGF0b3IubWVzc2FnZTtcbiAgICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgICAgc2NvcGUub3B0aW9ucy52YWxpZGF0aW9uLm1lc3NhZ2VzW25hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gZm9ybWx5VXRpbC5mb3JtbHlFdmFsKHNjb3BlLCBtZXNzYWdlLCBjdHJsLiRtb2RlbFZhbHVlLCBjdHJsLiR2aWV3VmFsdWUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFsaWRhdG9yID0gYW5ndWxhci5pc09iamVjdCh2YWxpZGF0b3IpID8gdmFsaWRhdG9yLmV4cHJlc3Npb24gOiB2YWxpZGF0b3I7XG4gICAgICAgICAgdmFyIGlzUG9zc2libHlBc3luYyA9ICFhbmd1bGFyLmlzU3RyaW5nKHZhbGlkYXRvcik7XG4gICAgICAgICAgaWYgKHVzZU5ld1ZhbGlkYXRvcnNBcGkpIHtcbiAgICAgICAgICAgIHNldHVwV2l0aFZhbGlkYXRvcnMoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0dXBXaXRoUGFyc2VycygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIHNldHVwV2l0aFZhbGlkYXRvcnMoKSB7XG4gICAgICAgICAgICB2YXIgdmFsaWRhdG9yQ29sbGVjdGlvbiA9IGlzUG9zc2libHlBc3luYyA/IFwiJGFzeW5jVmFsaWRhdG9yc1wiIDogXCIkdmFsaWRhdG9yc1wiO1xuICAgICAgICAgICAgY3RybFt2YWxpZGF0b3JDb2xsZWN0aW9uXVtuYW1lXSA9IGZ1bmN0aW9uIChtb2RlbFZhbHVlLCB2aWV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgdmFyIHZhbHVlID0gZm9ybWx5VXRpbC5mb3JtbHlFdmFsKHNjb3BlLCB2YWxpZGF0b3IsIG1vZGVsVmFsdWUsIHZpZXdWYWx1ZSk7XG4gICAgICAgICAgICAgIGlmIChpc1Bvc3NpYmx5QXN5bmMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNQcm9taXNlTGlrZSh2YWx1ZSkgPyB2YWx1ZSA6IHZhbHVlID8gJHEud2hlbih2YWx1ZSkgOiAkcS5yZWplY3QodmFsdWUpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiBzZXR1cFdpdGhQYXJzZXJzKCkge1xuICAgICAgICAgICAgdmFyIGluRmxpZ2h0VmFsaWRhdG9yID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgY3RybC4kcGFyc2Vycy51bnNoaWZ0KGZ1bmN0aW9uICh2aWV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgdmFyIGlzVmFsaWQgPSBmb3JtbHlVdGlsLmZvcm1seUV2YWwoc2NvcGUsIHZhbGlkYXRvciwgY3RybC4kbW9kZWxWYWx1ZSwgdmlld1ZhbHVlKTtcbiAgICAgICAgICAgICAgaWYgKGlzUHJvbWlzZUxpa2UoaXNWYWxpZCkpIHtcbiAgICAgICAgICAgICAgICBjdHJsLiRwZW5kaW5nID0gY3RybC4kcGVuZGluZyB8fCB7fTtcbiAgICAgICAgICAgICAgICBjdHJsLiRwZW5kaW5nW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpbkZsaWdodFZhbGlkYXRvciA9IGlzVmFsaWQ7XG4gICAgICAgICAgICAgICAgaXNWYWxpZC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChpbkZsaWdodFZhbGlkYXRvciA9PT0gaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBjdHJsLiRzZXRWYWxpZGl0eShuYW1lLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChpbkZsaWdodFZhbGlkYXRvciA9PT0gaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBjdHJsLiRzZXRWYWxpZGl0eShuYW1lLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlbXCJmaW5hbGx5XCJdKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhjdHJsLiRwZW5kaW5nKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGN0cmwuJHBlbmRpbmc7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY3RybC4kcGVuZGluZ1tuYW1lXTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdHJsLiRzZXRWYWxpZGl0eShuYW1lLCBpc1ZhbGlkKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gdmlld1ZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gaXNQcm9taXNlTGlrZShvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgYW5ndWxhci5pc0Z1bmN0aW9uKG9iai50aGVuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1ZhbGlkYXRvcnModmFsaWRhdG9ycykge1xuICAgICAgdmFyIGFsbG93ZWRQcm9wZXJ0aWVzID0gW1wiZXhwcmVzc2lvblwiLCBcIm1lc3NhZ2VcIl07XG4gICAgICB2YXIgdmFsaWRhdG9yc1dpdGhFeHRyYVByb3BzID0ge307XG4gICAgICBhbmd1bGFyLmZvckVhY2godmFsaWRhdG9ycywgZnVuY3Rpb24gKHZhbGlkYXRvciwgbmFtZSkge1xuICAgICAgICBpZiAoYW5ndWxhci5pc1N0cmluZyh2YWxpZGF0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBleHRyYVByb3BzID0gW107XG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaCh2YWxpZGF0b3IsIGZ1bmN0aW9uICh2LCBrZXkpIHtcbiAgICAgICAgICBpZiAoYWxsb3dlZFByb3BlcnRpZXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgZXh0cmFQcm9wcy5wdXNoKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGV4dHJhUHJvcHMubGVuZ3RoKSB7XG4gICAgICAgICAgdmFsaWRhdG9yc1dpdGhFeHRyYVByb3BzW25hbWVdID0gZXh0cmFQcm9wcztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoT2JqZWN0LmtleXModmFsaWRhdG9yc1dpdGhFeHRyYVByb3BzKS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFtcIlZhbGlkYXRvcnMgYXJlIG9ubHkgYWxsb3dlZCB0byBiZSBmdW5jdGlvbnMgb3Igb2JqZWN0cyB0aGF0IGhhdmUgXCIgKyBhbGxvd2VkUHJvcGVydGllcy5qb2luKFwiLCBcIikgKyBcIi5cIiwgXCJZb3UgcHJvdmlkZWQgc29tZSBleHRyYSBwcm9wZXJ0aWVzOiBcIiArIEpTT04uc3RyaW5naWZ5KHZhbGlkYXRvcnNXaXRoRXh0cmFQcm9wcyldLmpvaW4oXCIgXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZm9ybWx5Q3VzdG9tVmFsaWRhdGlvbi4kaW5qZWN0ID0gW1wiZm9ybWx5VXRpbFwiLCBcIiRxXCJdO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZGlyZWN0aXZlcy9mb3JtbHktY3VzdG9tLXZhbGlkYXRpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBhbmd1bGFyID0gcmVxdWlyZShcImFuZ3VsYXItZml4XCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5kaXJlY3RpdmUoXCJmb3JtbHlGaWVsZFwiLCBmb3JtbHlGaWVsZCk7XG5cbiAgZm9ybWx5RmllbGQudGVzdHMgPSBPTl9URVNUID8gcmVxdWlyZShcIi4vZm9ybWx5LWZpZWxkLnRlc3RcIikobmdNb2R1bGUpIDogbnVsbDtcblxuICBmdW5jdGlvbiBmb3JtbHlGaWVsZCgkaHR0cCwgJHEsICRjb21waWxlLCAkdGVtcGxhdGVDYWNoZSwgZm9ybWx5Q29uZmlnLCBmb3JtbHlWYWxpZGF0aW9uTWVzc2FnZXMsIGZvcm1seUFwaUNoZWNrLCBmb3JtbHlVdGlsLCBmb3JtbHlVc2FiaWxpdHksIGZvcm1seVdhcm4sIGZvcm1seVRlbXBsYXRlQ2FjaGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6IFwiQUVcIixcbiAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICBzY29wZToge1xuICAgICAgICBvcHRpb25zOiBcIj1cIixcbiAgICAgICAgbW9kZWw6IFwiPVwiLFxuICAgICAgICBmb3JtSWQ6IFwiPT9cIixcbiAgICAgICAgaW5kZXg6IFwiPT9cIixcbiAgICAgICAgZmllbGRzOiBcIj0/XCIsXG4gICAgICAgIGZvcm06IFwiPT9cIlxuICAgICAgfSxcbiAgICAgIGNvbnRyb2xsZXI6IFtcIiRzY29wZVwiLCBcIiR0aW1lb3V0XCIsIFwiJHBhcnNlXCIsIFwiJGNvbnRyb2xsZXJcIiwgZnVuY3Rpb24gZmllbGRDb250cm9sbGVyKCRzY29wZSwgJHRpbWVvdXQsICRwYXJzZSwgJGNvbnRyb2xsZXIpIHtcbiAgICAgICAgdmFyIG9wdHMgPSAkc2NvcGUub3B0aW9ucztcbiAgICAgICAgdmFyIGZpZWxkVHlwZSA9IG9wdHMudHlwZSAmJiBmb3JtbHlDb25maWcuZ2V0VHlwZShvcHRzLnR5cGUpO1xuICAgICAgICBzaW1wbGlmeUxpZmUob3B0cyk7XG4gICAgICAgIG1lcmdlRmllbGRPcHRpb25zV2l0aFR5cGVEZWZhdWx0cyhvcHRzLCBmaWVsZFR5cGUpO1xuICAgICAgICBjaGVja0FwaShvcHRzKTtcbiAgICAgICAgLy8gc2V0IGZpZWxkIGlkIHRvIGxpbmsgbGFiZWxzIGFuZCBmaWVsZHNcbiAgICAgICAgJHNjb3BlLmlkID0gZm9ybWx5VXRpbC5nZXRGaWVsZElkKCRzY29wZS5mb3JtSWQsIG9wdHMsICRzY29wZS5pbmRleCk7XG5cbiAgICAgICAgLy8gaW5pdGFsaXphdGlvblxuICAgICAgICBleHRlbmRPcHRpb25zV2l0aERlZmF1bHRzKG9wdHMsICRzY29wZS5pbmRleCk7XG4gICAgICAgIHJ1bkV4cHJlc3Npb25zKCk7XG4gICAgICAgIHNldEZvcm1Db250cm9sKCRzY29wZSwgb3B0cyk7XG4gICAgICAgIGFkZE1vZGVsV2F0Y2hlcigkc2NvcGUsIG9wdHMpO1xuICAgICAgICBhZGRWYWxpZGF0aW9uTWVzc2FnZXMob3B0cyk7XG4gICAgICAgIC8vIHNpbXBsaWZ5IHRoaW5nc1xuICAgICAgICAvLyBjcmVhdGUgJHNjb3BlLnRvIHNvIHRlbXBsYXRlIGF1dGhvcnMgY2FuIHJlZmVyZW5jZSB0byBpbnN0ZWFkIG9mICRzY29wZS5vcHRpb25zLnRlbXBsYXRlT3B0aW9uc1xuICAgICAgICAkc2NvcGUudG8gPSAkc2NvcGUub3B0aW9ucy50ZW1wbGF0ZU9wdGlvbnM7XG4gICAgICAgIGludm9rZUNvbnRyb2xsZXJzKCRzY29wZSwgb3B0cywgZmllbGRUeXBlKTtcblxuICAgICAgICAvLyBmdW5jdGlvbiBkZWZpbml0aW9uc1xuICAgICAgICBmdW5jdGlvbiBydW5FeHByZXNzaW9ucygpIHtcbiAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBtdXN0IHJ1biBvbiBuZXh0IHRpY2sgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIGN1cnJlbnQgdmFsdWUgaXMgY29ycmVjdC5cbiAgICAgICAgICAgIHZhciBmaWVsZCA9ICRzY29wZS5vcHRpb25zO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IHZhbHVlR2V0dGVyU2V0dGVyKCk7XG4gICAgICAgICAgICBhbmd1bGFyLmZvckVhY2goZmllbGQuZXhwcmVzc2lvblByb3BlcnRpZXMsIGZ1bmN0aW9uIHJ1bkV4cHJlc3Npb24oZXhwcmVzc2lvbiwgcHJvcCkge1xuICAgICAgICAgICAgICB2YXIgc2V0dGVyID0gJHBhcnNlKHByb3ApLmFzc2lnbjtcbiAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSAkcS53aGVuKGZvcm1seVV0aWwuZm9ybWx5RXZhbCgkc2NvcGUsIGV4cHJlc3Npb24sIGN1cnJlbnRWYWx1ZSkpO1xuICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgc2V0dGVyKGZpZWxkLCB2YWx1ZSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB2YWx1ZUdldHRlclNldHRlcihuZXdWYWwpIHtcbiAgICAgICAgICBpZiAoISRzY29wZS5tb2RlbCB8fCAhJHNjb3BlLm9wdGlvbnMua2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChuZXdWYWwpKSB7XG4gICAgICAgICAgICAkc2NvcGUubW9kZWxbJHNjb3BlLm9wdGlvbnMua2V5XSA9IG5ld1ZhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICRzY29wZS5tb2RlbFskc2NvcGUub3B0aW9ucy5rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2ltcGxpZnlMaWZlKG9wdGlvbnMpIHtcbiAgICAgICAgICAvLyBhZGQgYSBmZXcgZW1wdHkgb2JqZWN0cyAoaWYgdGhleSBkb24ndCBhbHJlYWR5IGV4aXN0KSBzbyB5b3UgZG9uJ3QgaGF2ZSB0byB1bmRlZmluZWQgY2hlY2sgZXZlcnl3aGVyZVxuICAgICAgICAgIGZvcm1seVV0aWwucmV2ZXJzZURlZXBNZXJnZShvcHRpb25zLCB7XG4gICAgICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgICAgIHRlbXBsYXRlT3B0aW9uczoge30sXG4gICAgICAgICAgICB2YWxpZGF0aW9uOiB7fVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbWVyZ2VGaWVsZE9wdGlvbnNXaXRoVHlwZURlZmF1bHRzKG9wdGlvbnMsIHR5cGUpIHtcbiAgICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgICAgbWVyZ2VPcHRpb25zKG9wdGlvbnMsIHR5cGUuZGVmYXVsdE9wdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgcHJvcGVyT3JkZXIgPSBhcnJheWlmeShvcHRpb25zLm9wdGlvbnNUeXBlcykucmV2ZXJzZSgpOyAvLyBzbyB0aGUgcmlnaHQgdGhpbmdzIGFyZSBvdmVycmlkZGVuXG4gICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHByb3Blck9yZGVyLCBmdW5jdGlvbiAodHlwZU5hbWUpIHtcbiAgICAgICAgICAgIG1lcmdlT3B0aW9ucyhvcHRpb25zLCBmb3JtbHlDb25maWcuZ2V0VHlwZSh0eXBlTmFtZSwgdHJ1ZSwgb3B0aW9ucykuZGVmYXVsdE9wdGlvbnMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbWVyZ2VPcHRpb25zKG9wdGlvbnMsIGV4dHJhT3B0aW9ucykge1xuICAgICAgICAgIGlmIChleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRnVuY3Rpb24oZXh0cmFPcHRpb25zKSkge1xuICAgICAgICAgICAgICBleHRyYU9wdGlvbnMgPSBleHRyYU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3JtbHlVdGlsLnJldmVyc2VEZWVwTWVyZ2Uob3B0aW9ucywgZXh0cmFPcHRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBleHRlbmRPcHRpb25zV2l0aERlZmF1bHRzKG9wdGlvbnMsIGluZGV4KSB7XG4gICAgICAgICAgYW5ndWxhci5leHRlbmQob3B0aW9ucywge1xuICAgICAgICAgICAgLy8gYXR0YWNoIHRoZSBrZXkgaW4gY2FzZSB0aGUgZm9ybWx5LWZpZWxkIGRpcmVjdGl2ZSBpcyB1c2VkIGRpcmVjdGx5XG4gICAgICAgICAgICBrZXk6IG9wdGlvbnMua2V5IHx8IGluZGV4IHx8IDAsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVHZXR0ZXJTZXR0ZXIsXG4gICAgICAgICAgICBydW5FeHByZXNzaW9uczogcnVuRXhwcmVzc2lvbnNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGluaXRpYWxpemF0aW9uIGZ1bmN0aW9uc1xuICAgICAgICBmdW5jdGlvbiBzZXRGb3JtQ29udHJvbChzY29wZSwgb3B0aW9ucykge1xuICAgICAgICAgIGlmIChvcHRpb25zLm5vRm9ybUNvbnRyb2wpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHN0b3BXYWl0aW5nRm9yRGVzdHJveTtcbiAgICAgICAgICB2YXIgbWF4VGltZSA9IDIyMDAwO1xuICAgICAgICAgIHZhciBpbnRlcnZhbFRpbWUgPSA1O1xuICAgICAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgICAgICB2YXIgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpdGVyYXRpb25zKys7XG4gICAgICAgICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKG9wdGlvbnMua2V5KSkge1xuICAgICAgICAgICAgICByZXR1cm4gY2xlYW5VcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGZvcm1Db250cm9sID0gc2NvcGUuZm9ybSAmJiBzY29wZS5mb3JtW3Njb3BlLmlkXTtcbiAgICAgICAgICAgIGlmIChmb3JtQ29udHJvbCkge1xuICAgICAgICAgICAgICBvcHRpb25zLmZvcm1Db250cm9sID0gZm9ybUNvbnRyb2w7XG4gICAgICAgICAgICAgIHNjb3BlLmZjID0gZm9ybUNvbnRyb2w7XG4gICAgICAgICAgICAgIGFkZFNob3dNZXNzYWdlc1dhdGNoZXIoc2NvcGUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICBjbGVhblVwKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGludGVydmFsVGltZSAqIGl0ZXJhdGlvbnMgPiBtYXhUaW1lKSB7XG4gICAgICAgICAgICAgIGZvcm1seVdhcm4oXCJjb3VsZG50LXNldC10aGUtZm9ybWNvbnRyb2wtYWZ0ZXItdGltZW1zXCIsIFwiQ291bGRuJ3Qgc2V0IHRoZSBmb3JtQ29udHJvbCBhZnRlciBcIiArIG1heFRpbWUgKyBcIm1zXCIsIHNjb3BlKTtcbiAgICAgICAgICAgICAgY2xlYW5VcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIGludGVydmFsVGltZSk7XG4gICAgICAgICAgc3RvcFdhaXRpbmdGb3JEZXN0cm95ID0gc2NvcGUuJG9uKFwiJGRlc3Ryb3lcIiwgY2xlYW5VcCk7XG5cbiAgICAgICAgICBmdW5jdGlvbiBjbGVhblVwKCkge1xuICAgICAgICAgICAgc3RvcFdhaXRpbmdGb3JEZXN0cm95KCk7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhZGRNb2RlbFdhdGNoZXIoc2NvcGUsIG9wdGlvbnMpIHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5tb2RlbCkge1xuICAgICAgICAgICAgc2NvcGUuJHdhdGNoKFwib3B0aW9ucy5tb2RlbFwiLCBydW5FeHByZXNzaW9ucywgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYWRkU2hvd01lc3NhZ2VzV2F0Y2hlcihzY29wZSwgb3B0aW9ucykge1xuICAgICAgICAgIHNjb3BlLiR3YXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNjb3BlLm9wdGlvbnMudmFsaWRhdGlvbi5zaG93ID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgICByZXR1cm4gc2NvcGUuZmMuJGludmFsaWQgJiYgc2NvcGUub3B0aW9ucy52YWxpZGF0aW9uLnNob3c7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gc2NvcGUuZmMuJGludmFsaWQgJiYgc2NvcGUuZmMuJHRvdWNoZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKHNob3cpIHtcbiAgICAgICAgICAgIG9wdGlvbnMudmFsaWRhdGlvbi5lcnJvckV4aXN0c0FuZFNob3VsZEJlVmlzaWJsZSA9IHNob3c7XG4gICAgICAgICAgICBzY29wZS5zaG93RXJyb3IgPSBzaG93O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYWRkVmFsaWRhdGlvbk1lc3NhZ2VzKG9wdGlvbnMpIHtcbiAgICAgICAgICBvcHRpb25zLnZhbGlkYXRpb24ubWVzc2FnZXMgPSBvcHRpb25zLnZhbGlkYXRpb24ubWVzc2FnZXMgfHwge307XG4gICAgICAgICAgYW5ndWxhci5mb3JFYWNoKGZvcm1seVZhbGlkYXRpb25NZXNzYWdlcy5tZXNzYWdlcywgZnVuY3Rpb24gKGV4cHJlc3Npb24sIG5hbWUpIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy52YWxpZGF0aW9uLm1lc3NhZ2VzW25hbWVdKSB7XG4gICAgICAgICAgICAgIG9wdGlvbnMudmFsaWRhdGlvbi5tZXNzYWdlc1tuYW1lXSA9IGZ1bmN0aW9uICh2aWV3VmFsdWUsIG1vZGVsVmFsdWUsIHNjb3BlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1seVV0aWwuZm9ybWx5RXZhbChzY29wZSwgZXhwcmVzc2lvbiwgbW9kZWxWYWx1ZSwgdmlld1ZhbHVlKTtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGludm9rZUNvbnRyb2xsZXJzKHNjb3BlKSB7XG4gICAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuICAgICAgICAgIHZhciB0eXBlID0gYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1syXTtcblxuICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChbdHlwZS5jb250cm9sbGVyLCBvcHRpb25zLmNvbnRyb2xsZXJdLCBmdW5jdGlvbiAoY29udHJvbGxlcikge1xuICAgICAgICAgICAgaWYgKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgJGNvbnRyb2xsZXIoY29udHJvbGxlciwgeyAkc2NvcGU6IHNjb3BlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XSxcbiAgICAgIGxpbms6IGZ1bmN0aW9uIGZpZWxkTGluayhzY29wZSwgZWwpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBzY29wZS5vcHRpb25zLnR5cGUgJiYgZm9ybWx5Q29uZmlnLmdldFR5cGUoc2NvcGUub3B0aW9ucy50eXBlKTtcbiAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIHZhciB0aHVzbHkgPSB0aGlzO1xuICAgICAgICBpZiAoZm9ybWx5VGVtcGxhdGVDYWNoZS5nZXQoc2NvcGUuaWQpKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJ1c2luZyB0ZW1wbGF0ZSBjYWNoZVwiKTtcbiAgICAgICAgICAkcS53aGVuKGZvcm1seVRlbXBsYXRlQ2FjaGUuZ2V0KHNjb3BlLmlkKSkudGhlbihzZXRFbGVtZW50VGVtcGxhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwibm90IHVzaW5nIHRlbXBsYXRlIGNhY2hlXCIpO1xuICAgICAgICAgIGdldEZpZWxkVGVtcGxhdGUoc2NvcGUub3B0aW9ucykudGhlbihydW5NYW5pcHVsYXRvcnMoZm9ybWx5Q29uZmlnLnRlbXBsYXRlTWFuaXB1bGF0b3JzLnByZVdyYXBwZXIpKS50aGVuKHRyYW5zY2x1ZGVJbldyYXBwZXJzKHNjb3BlLm9wdGlvbnMpKS50aGVuKHJ1bk1hbmlwdWxhdG9ycyhmb3JtbHlDb25maWcudGVtcGxhdGVNYW5pcHVsYXRvcnMucG9zdFdyYXBwZXIpKS50aGVuKHNldEVsZW1lbnRUZW1wbGF0ZSkudGhlbihhZGRUb0NhY2hlKVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgZm9ybWx5V2FybihcInRoZXJlLXdhcy1hLXByb2JsZW0tc2V0dGluZy10aGUtdGVtcGxhdGUtZm9yLXRoaXMtZmllbGRcIiwgXCJUaGVyZSB3YXMgYSBwcm9ibGVtIHNldHRpbmcgdGhlIHRlbXBsYXRlIGZvciB0aGlzIGZpZWxkIFwiLCBzY29wZS5vcHRpb25zLCBlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzZXRFbGVtZW50VGVtcGxhdGUodGVtcGxhdGUpIHtcbiAgICAgICAgICBlbC5yZXBsYWNlV2l0aCgkY29tcGlsZSh0ZW1wbGF0ZSkoc2NvcGUpKTtcbiAgICAgICAgICBpZiAodHlwZSAmJiB0eXBlLmxpbmspIHtcbiAgICAgICAgICAgIHR5cGUubGluay5hcHBseSh0aHVzbHksIGFyZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2NvcGUub3B0aW9ucy5saW5rKSB7XG4gICAgICAgICAgICBzY29wZS5vcHRpb25zLmxpbmsuYXBwbHkodGh1c2x5LCBhcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYWRkVG9DYWNoZSh0ZW1wbGF0ZSkge1xuICAgICAgICAgIGZvcm1seVRlbXBsYXRlQ2FjaGUuYWRkKHNjb3BlLmlkLCB0ZW1wbGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBydW5NYW5pcHVsYXRvcnMobWFuaXB1bGF0b3JzKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHJ1bk1hbmlwdWxhdG9yc09uVGVtcGxhdGUodGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHZhciBjaGFpbiA9ICRxLndoZW4odGVtcGxhdGUpO1xuICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKG1hbmlwdWxhdG9ycywgZnVuY3Rpb24gKG1hbmlwdWxhdG9yKSB7XG4gICAgICAgICAgICAgIGNoYWluID0gY2hhaW4udGhlbihmdW5jdGlvbiAodGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJHEud2hlbihtYW5pcHVsYXRvcih0ZW1wbGF0ZSwgc2NvcGUub3B0aW9ucywgc2NvcGUpKS50aGVuKGZ1bmN0aW9uIChuZXdUZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGFuZ3VsYXIuaXNTdHJpbmcobmV3VGVtcGxhdGUpID8gbmV3VGVtcGxhdGUgOiBhc0h0bWwobmV3VGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGNoYWluO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gYXNIdG1sKGVsKSB7XG4gICAgICB2YXIgd3JhcHBlciA9IGFuZ3VsYXIuZWxlbWVudChcIjxhPjwvYT5cIik7XG4gICAgICByZXR1cm4gd3JhcHBlci5hcHBlbmQoZWwpLmh0bWwoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRGaWVsZFRlbXBsYXRlKG9wdGlvbnMpIHtcbiAgICAgIHZhciB0eXBlID0gZm9ybWx5Q29uZmlnLmdldFR5cGUob3B0aW9ucy50eXBlLCB0cnVlLCBvcHRpb25zKTtcbiAgICAgIHZhciB0ZW1wbGF0ZSA9IG9wdGlvbnMudGVtcGxhdGUgfHwgdHlwZSAmJiB0eXBlLnRlbXBsYXRlO1xuICAgICAgdmFyIHRlbXBsYXRlVXJsID0gb3B0aW9ucy50ZW1wbGF0ZVVybCB8fCB0eXBlICYmIHR5cGUudGVtcGxhdGVVcmw7XG4gICAgICBpZiAoIXRlbXBsYXRlICYmICF0ZW1wbGF0ZVVybCkge1xuICAgICAgICB0aHJvdyBmb3JtbHlVc2FiaWxpdHkuZ2V0RmllbGRFcnJvcihcInRlbXBsYXRlLXR5cGUtdHlwZS1ub3Qtc3VwcG9ydGVkXCIsIFwidGVtcGxhdGUgdHlwZSAnXCIgKyBvcHRpb25zLnR5cGUgKyBcIicgbm90IHN1cHBvcnRlZC4gT24gZWxlbWVudDpcIiwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0VGVtcGxhdGUodGVtcGxhdGUgfHwgdGVtcGxhdGVVcmwsICF0ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VGVtcGxhdGUodGVtcGxhdGUsIGlzVXJsKSB7XG4gICAgICBpZiAoIWlzVXJsKSB7XG4gICAgICAgIHJldHVybiAkcS53aGVuKHRlbXBsYXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBodHRwT3B0aW9ucyA9IHsgY2FjaGU6ICR0ZW1wbGF0ZUNhY2hlIH07XG4gICAgICAgIHJldHVybiAkaHR0cC5nZXQodGVtcGxhdGUsIGh0dHBPcHRpb25zKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIGZvcm1seVdhcm4oXCJwcm9ibGVtLWxvYWRpbmctdGVtcGxhdGUtZm9yLXRlbXBsYXRldXJsXCIsIFwiUHJvYmxlbSBsb2FkaW5nIHRlbXBsYXRlIGZvciBcIiArIHRlbXBsYXRlLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zY2x1ZGVJbldyYXBwZXJzKG9wdGlvbnMpIHtcbiAgICAgIHZhciB3cmFwcGVyID0gZ2V0V3JhcHBlck9wdGlvbihvcHRpb25zKTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHRyYW5zY2x1ZGVUZW1wbGF0ZSh0ZW1wbGF0ZSkge1xuICAgICAgICBpZiAoIXdyYXBwZXIubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuICRxLndoZW4odGVtcGxhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgd3JhcHBlci5mb3JFYWNoKGZvcm1seVVzYWJpbGl0eS5jaGVja1dyYXBwZXIpO1xuICAgICAgICB2YXIgcHJvbWlzZXMgPSB3cmFwcGVyLm1hcChmdW5jdGlvbiAodykge1xuICAgICAgICAgIHJldHVybiBnZXRUZW1wbGF0ZSh3LnRlbXBsYXRlIHx8IHcudGVtcGxhdGVVcmwsICF3LnRlbXBsYXRlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAkcS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24gKHdyYXBwZXJzVGVtcGxhdGVzKSB7XG4gICAgICAgICAgd3JhcHBlcnNUZW1wbGF0ZXMuZm9yRWFjaChmdW5jdGlvbiAod3JhcHBlclRlbXBsYXRlLCBpbmRleCkge1xuICAgICAgICAgICAgZm9ybWx5VXNhYmlsaXR5LmNoZWNrV3JhcHBlclRlbXBsYXRlKHdyYXBwZXJUZW1wbGF0ZSwgd3JhcHBlcltpbmRleF0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHdyYXBwZXJzVGVtcGxhdGVzLnJldmVyc2UoKTsgLy8gd3JhcHBlciAwIGlzIHdyYXBwZWQgaW4gd3JhcHBlciAxIGFuZCBzbyBvbi4uLlxuICAgICAgICAgIHZhciB0b3RhbFdyYXBwZXIgPSB3cmFwcGVyc1RlbXBsYXRlcy5zaGlmdCgpO1xuICAgICAgICAgIHdyYXBwZXJzVGVtcGxhdGVzLmZvckVhY2goZnVuY3Rpb24gKHdyYXBwZXJUZW1wbGF0ZSkge1xuICAgICAgICAgICAgdG90YWxXcmFwcGVyID0gZG9UcmFuc2NsdXNpb24odG90YWxXcmFwcGVyLCB3cmFwcGVyVGVtcGxhdGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBkb1RyYW5zY2x1c2lvbih0b3RhbFdyYXBwZXIsIHRlbXBsYXRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvVHJhbnNjbHVzaW9uKHdyYXBwZXIsIHRlbXBsYXRlKSB7XG4gICAgICB2YXIgc3VwZXJXcmFwcGVyID0gYW5ndWxhci5lbGVtZW50KFwiPGE+PC9hPlwiKTsgLy8gdGhpcyBhbGxvd3MgcGVvcGxlIG5vdCBoYXZlIHRvIGhhdmUgYSBzaW5nbGUgcm9vdCBpbiB3cmFwcGVyc1xuICAgICAgc3VwZXJXcmFwcGVyLmFwcGVuZCh3cmFwcGVyKTtcbiAgICAgIHZhciB0cmFuc2NsdWRlRWwgPSBzdXBlcldyYXBwZXIuZmluZChcImZvcm1seS10cmFuc2NsdWRlXCIpO1xuICAgICAgdHJhbnNjbHVkZUVsLnJlcGxhY2VXaXRoKHRlbXBsYXRlKTtcbiAgICAgIHJldHVybiBzdXBlcldyYXBwZXIuaHRtbCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFdyYXBwZXJPcHRpb24ob3B0aW9ucykge1xuICAgICAgdmFyIHdyYXBwZXIgPSBvcHRpb25zLndyYXBwZXI7XG4gICAgICAvLyBleHBsaWNpdCBudWxsIG1lYW5zIG5vIHdyYXBwZXJcbiAgICAgIGlmICh3cmFwcGVyID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgLy8gbm90aGluZyBzcGVjaWZpZWQgbWVhbnMgdXNlIHRoZSBkZWZhdWx0IHdyYXBwZXIgZm9yIHRoZSB0eXBlXG4gICAgICBpZiAoIXdyYXBwZXIpIHtcbiAgICAgICAgLy8gZ2V0IGFsbCB3cmFwcGVycyB0aGF0IHNwZWNpZnkgdGhleSBhcHBseSB0byB0aGlzIHR5cGVcbiAgICAgICAgd3JhcHBlciA9IGFycmF5aWZ5KGZvcm1seUNvbmZpZy5nZXRXcmFwcGVyQnlUeXBlKG9wdGlvbnMudHlwZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd3JhcHBlciA9IGFycmF5aWZ5KHdyYXBwZXIpLm1hcChmb3JtbHlDb25maWcuZ2V0V3JhcHBlcik7XG4gICAgICB9XG5cbiAgICAgIC8vIGdldCBhbGwgd3JhcHBlcnMgZm9yIHRoYXQgdGhpcyB0eXBlIHNwZWNpZmllZCB0aGF0IGl0IHVzZXMuXG4gICAgICB2YXIgdHlwZSA9IGZvcm1seUNvbmZpZy5nZXRUeXBlKG9wdGlvbnMudHlwZSwgdHJ1ZSwgb3B0aW9ucyk7XG4gICAgICBpZiAodHlwZSAmJiB0eXBlLndyYXBwZXIpIHtcbiAgICAgICAgdmFyIHR5cGVXcmFwcGVycyA9IGFycmF5aWZ5KHR5cGUud3JhcHBlcikubWFwKGZvcm1seUNvbmZpZy5nZXRXcmFwcGVyKTtcbiAgICAgICAgd3JhcHBlciA9IHdyYXBwZXIuY29uY2F0KHR5cGVXcmFwcGVycyk7XG4gICAgICB9XG5cbiAgICAgIC8vIGFkZCB0aGUgZGVmYXVsdCB3cmFwcGVyIGxhc3RcbiAgICAgIHZhciBkZWZhdWx0V3JhcHBlciA9IGZvcm1seUNvbmZpZy5nZXRXcmFwcGVyKCk7XG4gICAgICBpZiAoZGVmYXVsdFdyYXBwZXIpIHtcbiAgICAgICAgd3JhcHBlci5wdXNoKGRlZmF1bHRXcmFwcGVyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB3cmFwcGVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrQXBpKG9wdGlvbnMpIHtcbiAgICAgIGZvcm1seUFwaUNoZWNrW1widGhyb3dcIl0oZm9ybWx5QXBpQ2hlY2suZm9ybWx5RmllbGRPcHRpb25zLCBhcmd1bWVudHMsIHtcbiAgICAgICAgcHJlZml4OiBcImZvcm1seS1maWVsZCBkaXJlY3RpdmVcIixcbiAgICAgICAgdXJsOiBcImZvcm1seS1maWVsZC1kaXJlY3RpdmUtdmFsaWRhdGlvbi1mYWlsZWRcIlxuICAgICAgfSk7XG4gICAgICAvLyB2YWxpZGF0ZSB3aXRoIHRoZSB0eXBlXG4gICAgICB2YXIgdHlwZSA9IG9wdGlvbnMudHlwZSAmJiBmb3JtbHlDb25maWcuZ2V0VHlwZShvcHRpb25zLnR5cGUpO1xuICAgICAgaWYgKHR5cGUgJiYgdHlwZS52YWxpZGF0ZU9wdGlvbnMpIHtcbiAgICAgICAgdHlwZS52YWxpZGF0ZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZvcm1seUZpZWxkLiRpbmplY3QgPSBbXCIkaHR0cFwiLCBcIiRxXCIsIFwiJGNvbXBpbGVcIiwgXCIkdGVtcGxhdGVDYWNoZVwiLCBcImZvcm1seUNvbmZpZ1wiLCBcImZvcm1seVZhbGlkYXRpb25NZXNzYWdlc1wiLCBcImZvcm1seUFwaUNoZWNrXCIsIFwiZm9ybWx5VXRpbFwiLCBcImZvcm1seVVzYWJpbGl0eVwiLCBcImZvcm1seVdhcm5cIiwgXCJmb3JtbHlUZW1wbGF0ZUNhY2hlXCJdO1xuXG4gIGZ1bmN0aW9uIGFycmF5aWZ5KG9iaikge1xuICAgIGlmIChvYmogJiYgIWFuZ3VsYXIuaXNBcnJheShvYmopKSB7XG4gICAgICBvYmogPSBbb2JqXTtcbiAgICB9IGVsc2UgaWYgKCFvYmopIHtcbiAgICAgIG9iaiA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9kaXJlY3RpdmVzL2Zvcm1seS1maWVsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF90b0NvbnN1bWFibGVBcnJheSA9IGZ1bmN0aW9uIChhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSBhcnIyW2ldID0gYXJyW2ldOyByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9O1xuXG52YXIgX3NsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIGFuZ3VsYXIgPSByZXF1aXJlKFwiYW5ndWxhci1maXhcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG4gIG5nTW9kdWxlLmRpcmVjdGl2ZShcImZvcm1seUZvcm1cIiwgZm9ybWx5Rm9ybSk7XG5cbiAgZm9ybWx5Rm9ybS50ZXN0cyA9IE9OX1RFU1QgPyByZXF1aXJlKFwiLi9mb3JtbHktZm9ybS50ZXN0XCIpKG5nTW9kdWxlKSA6IG51bGw7XG5cbiAgZnVuY3Rpb24gZm9ybWx5Rm9ybShmb3JtbHlVc2FiaWxpdHkpIHtcbiAgICB2YXIgY3VycmVudEZvcm1JZCA9IDE7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiBcIkVcIixcbiAgICAgIHRlbXBsYXRlOiBmdW5jdGlvbiB0ZW1wbGF0ZShlbCwgYXR0cnMpIHtcbiAgICAgICAgLyoganNoaW50IC1XMDMzICovIC8vIHRoaXMgYmVjYXVzZSBqc2hpbnQgaXMgYnJva2VuIEkgZ3Vlc3MuLi5cbiAgICAgICAgdmFyIHJvb3RFbCA9IGF0dHJzLnJvb3RFbCB8fCBcIm5nLWZvcm1cIjtcbiAgICAgICAgcmV0dXJuIFwiXFxuICAgICAgICAgIDxcIiArIHJvb3RFbCArIFwiIGNsYXNzPVxcXCJmb3JtbHlcXFwiXFxuICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcImZvcm1cXFwiXFxuICAgICAgICAgICAgICAgICAgIHJvbGU9XFxcImZvcm1cXFwiPlxcbiAgICAgICAgICAgIDxkaXYgZm9ybWx5LWZpZWxkXFxuICAgICAgICAgICAgICAgICBuZy1yZXBlYXQ9XFxcImZpZWxkIGluIGZpZWxkcyB0cmFjayBieSAkaW5kZXhcXFwiXFxuICAgICAgICAgICAgICAgICBuZy1pZj1cXFwiIWZpZWxkLmhpZGVcXFwiXFxuICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybWx5LWZpZWxkIHt7ZmllbGQudHlwZSA/ICdmb3JtbHktZmllbGQtJyArIGZpZWxkLnR5cGUgOiAnJ319XFxcIlxcbiAgICAgICAgICAgICAgICAgb3B0aW9ucz1cXFwiZmllbGRcXFwiXFxuICAgICAgICAgICAgICAgICBtb2RlbD1cXFwiZmllbGQubW9kZWwgfHwgbW9kZWxcXFwiXFxuICAgICAgICAgICAgICAgICBmaWVsZHM9XFxcImZpZWxkc1xcXCJcXG4gICAgICAgICAgICAgICAgIGZvcm09XFxcImZvcm1cXFwiXFxuICAgICAgICAgICAgICAgICBmb3JtLWlkPVxcXCJmb3JtSWRcXFwiXFxuICAgICAgICAgICAgICAgICBpbmRleD1cXFwiJGluZGV4XFxcIj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IG5nLXRyYW5zY2x1ZGU+PC9kaXY+XFxuICAgICAgICAgIDwvXCIgKyByb290RWwgKyBcIj5cXG4gICAgICAgIFwiO1xuICAgICAgfSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgZmllbGRzOiBcIj1cIixcbiAgICAgICAgbW9kZWw6IFwiPVwiLFxuICAgICAgICBmb3JtOiBcIj0/XCIsXG4gICAgICAgIG9wdGlvbnM6IFwiPT9cIlxuICAgICAgfSxcbiAgICAgIGNvbnRyb2xsZXI6IFtcIiRzY29wZVwiLCBmdW5jdGlvbiBjb250cm9sbGVyKCRzY29wZSkge1xuICAgICAgICAkc2NvcGUub3B0aW9ucyA9ICRzY29wZS5vcHRpb25zIHx8IHt9O1xuICAgICAgICAkc2NvcGUuZm9ybUlkID0gXCJmb3JtbHlfXCIgKyAoJHNjb3BlLm9wdGlvbnMuaWQgfHwgY3VycmVudEZvcm1JZCsrKTtcblxuICAgICAgICBhbmd1bGFyLmZvckVhY2goJHNjb3BlLmZpZWxkcywgYXR0YWNoS2V5KTsgLy8gYXR0YWNoZXMgYSBrZXkgYmFzZWQgb24gdGhlIGluZGV4IGlmIGEga2V5IGlzbid0IHNwZWNpZmllZFxuICAgICAgICBhbmd1bGFyLmZvckVhY2goJHNjb3BlLmZpZWxkcywgc2V0dXBXYXRjaGVycyk7IC8vIHNldHVwIHdhdGNoZXJzIGZvciBhbGwgZmllbGRzXG5cbiAgICAgICAgLy8gd2F0Y2ggdGhlIG1vZGVsIGFuZCBldmFsdWF0ZSB3YXRjaCBleHByZXNzaW9ucyB0aGF0IGRlcGVuZCBvbiBpdC5cbiAgICAgICAgJHNjb3BlLiR3YXRjaChcIm1vZGVsXCIsIGZ1bmN0aW9uIG9uUmVzdWx0VXBkYXRlKG5ld1Jlc3VsdCkge1xuICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaCgkc2NvcGUuZmllbGRzLCBmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgICAgIC8qanNoaW50IC1XMDMwICovXG4gICAgICAgICAgICBmaWVsZC5ydW5FeHByZXNzaW9ucyAmJiBmaWVsZC5ydW5FeHByZXNzaW9ucyhuZXdSZXN1bHQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICBmdW5jdGlvbiBhdHRhY2hLZXkoZmllbGQsIGluZGV4KSB7XG4gICAgICAgICAgZmllbGQua2V5ID0gZmllbGQua2V5IHx8IGluZGV4IHx8IDA7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzZXR1cFdhdGNoZXJzKGZpZWxkLCBpbmRleCkge1xuICAgICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQoZmllbGQud2F0Y2hlcikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHdhdGNoZXJzID0gZmllbGQud2F0Y2hlcjtcbiAgICAgICAgICBpZiAoIWFuZ3VsYXIuaXNBcnJheSh3YXRjaGVycykpIHtcbiAgICAgICAgICAgIHdhdGNoZXJzID0gW3dhdGNoZXJzXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHdhdGNoZXJzLCBmdW5jdGlvbiAod2F0Y2hlcikge1xuICAgICAgICAgICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZCh3YXRjaGVyLmxpc3RlbmVyKSkge1xuICAgICAgICAgICAgICB0aHJvdyBmb3JtbHlVc2FiaWxpdHkuZ2V0RmllbGRFcnJvcihcImFsbC1maWVsZC13YXRjaGVycy1tdXN0LWhhdmUtYS1saXN0ZW5lclwiLCBcIkFsbCBmaWVsZCB3YXRjaGVycyBtdXN0IGhhdmUgYSBsaXN0ZW5lclwiLCBmaWVsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgd2F0Y2hFeHByZXNzaW9uID0gZ2V0V2F0Y2hFeHByZXNzaW9uKHdhdGNoZXIsIGZpZWxkLCBpbmRleCk7XG4gICAgICAgICAgICB2YXIgd2F0Y2hMaXN0ZW5lciA9IGdldFdhdGNoTGlzdGVuZXIod2F0Y2hlciwgZmllbGQsIGluZGV4KTtcblxuICAgICAgICAgICAgdmFyIHR5cGUgPSB3YXRjaGVyLnR5cGUgfHwgXCIkd2F0Y2hcIjtcbiAgICAgICAgICAgIHdhdGNoZXIuc3RvcFdhdGNoaW5nID0gJHNjb3BlW3R5cGVdKHdhdGNoRXhwcmVzc2lvbiwgd2F0Y2hMaXN0ZW5lciwgd2F0Y2hlci53YXRjaERlZXApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0V2F0Y2hFeHByZXNzaW9uKHdhdGNoZXIsIGZpZWxkLCBpbmRleCkge1xuICAgICAgICAgIHZhciB3YXRjaEV4cHJlc3Npb24gPSB3YXRjaGVyLmV4cHJlc3Npb24gfHwgXCJtb2RlbFsnXCIgKyBmaWVsZC5rZXkgKyBcIiddXCI7XG4gICAgICAgICAgaWYgKGFuZ3VsYXIuaXNGdW5jdGlvbih3YXRjaEV4cHJlc3Npb24pKSB7XG4gICAgICAgICAgICAvLyB3cmFwIHRoZSBmaWVsZCdzIHdhdGNoIGV4cHJlc3Npb24gc28gd2UgY2FuIGNhbGwgaXQgd2l0aCB0aGUgZmllbGQgYXMgdGhlIGZpcnN0IGFyZ1xuICAgICAgICAgICAgLy8gYW5kIHRoZSBzdG9wIGZ1bmN0aW9uIGFzIHRoZSBsYXN0IGFyZyBhcyBhIGhlbHBlclxuICAgICAgICAgICAgdmFyIG9yaWdpbmFsRXhwcmVzc2lvbiA9IHdhdGNoRXhwcmVzc2lvbjtcbiAgICAgICAgICAgIHdhdGNoRXhwcmVzc2lvbiA9IGZ1bmN0aW9uIGZvcm1seVdhdGNoRXhwcmVzc2lvbigpIHtcbiAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBtb2RpZnlBcmdzLmFwcGx5KHVuZGVmaW5lZCwgW3dhdGNoZXIsIGluZGV4XS5jb25jYXQoX3NsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxFeHByZXNzaW9uLmFwcGx5KHVuZGVmaW5lZCwgX3RvQ29uc3VtYWJsZUFycmF5KGFyZ3MpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3YXRjaEV4cHJlc3Npb24uZGlzcGxheU5hbWUgPSBcIkZvcm1seSBXYXRjaCBFeHByZXNzaW9uIGZvciBmaWVsZCBmb3IgXCIgKyBmaWVsZC5rZXk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB3YXRjaEV4cHJlc3Npb247XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRXYXRjaExpc3RlbmVyKHdhdGNoZXIsIGZpZWxkLCBpbmRleCkge1xuICAgICAgICAgIHZhciB3YXRjaExpc3RlbmVyID0gd2F0Y2hlci5saXN0ZW5lcjtcbiAgICAgICAgICBpZiAoYW5ndWxhci5pc0Z1bmN0aW9uKHdhdGNoTGlzdGVuZXIpKSB7XG4gICAgICAgICAgICAvLyB3cmFwIHRoZSBmaWVsZCdzIHdhdGNoIGxpc3RlbmVyIHNvIHdlIGNhbiBjYWxsIGl0IHdpdGggdGhlIGZpZWxkIGFzIHRoZSBmaXJzdCBhcmdcbiAgICAgICAgICAgIC8vIGFuZCB0aGUgc3RvcCBmdW5jdGlvbiBhcyB0aGUgbGFzdCBhcmcgYXMgYSBoZWxwZXJcbiAgICAgICAgICAgIHZhciBvcmlnaW5hbExpc3RlbmVyID0gd2F0Y2hMaXN0ZW5lcjtcbiAgICAgICAgICAgIHdhdGNoTGlzdGVuZXIgPSBmdW5jdGlvbiBmb3JtbHlXYXRjaExpc3RlbmVyKCkge1xuICAgICAgICAgICAgICB2YXIgYXJncyA9IG1vZGlmeUFyZ3MuYXBwbHkodW5kZWZpbmVkLCBbd2F0Y2hlciwgaW5kZXhdLmNvbmNhdChfc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbExpc3RlbmVyLmFwcGx5KHVuZGVmaW5lZCwgX3RvQ29uc3VtYWJsZUFycmF5KGFyZ3MpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3YXRjaExpc3RlbmVyLmRpc3BsYXlOYW1lID0gXCJGb3JtbHkgV2F0Y2ggTGlzdGVuZXIgZm9yIGZpZWxkIGZvciBcIiArIGZpZWxkLmtleTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHdhdGNoTGlzdGVuZXI7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtb2RpZnlBcmdzKHdhdGNoZXIsIGluZGV4KSB7XG4gICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG9yaWdpbmFsQXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgIG9yaWdpbmFsQXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIFskc2NvcGUuZmllbGRzW2luZGV4XV0uY29uY2F0KG9yaWdpbmFsQXJncywgW3dhdGNoZXIuc3RvcFdhdGNoaW5nXSk7XG4gICAgICAgIH1cbiAgICAgIH1dLFxuICAgICAgbGluazogZnVuY3Rpb24gbGluayhzY29wZSwgZWwsIGF0dHJzKSB7XG4gICAgICAgIGlmIChhdHRycy5oYXNPd25Qcm9wZXJ0eShcInJlc3VsdFwiKSkge1xuICAgICAgICAgIHRocm93IGZvcm1seVVzYWJpbGl0eS5nZXRGb3JtbHlFcnJvcihcIlRoZSBcXFwicmVzdWx0XFxcIiBhdHRyaWJ1dGUgb24gYSBmb3JtbHktZm9ybSBpcyBubyBsb25nZXIgdmFsaWQuIFVzZSBcXFwibW9kZWxcXFwiIGluc3RlYWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF0dHJzLm5hbWUgIT09IFwiZm9ybVwiKSB7XG4gICAgICAgICAgLy8gdGhlbiB0aGV5IHNwZWNpZmllZCB0aGVpciBvd24gbmFtZVxuICAgICAgICAgIHRocm93IGZvcm1seVVzYWJpbGl0eS5nZXRGb3JtbHlFcnJvcihcIlRoZSBcXFwibmFtZVxcXCIgYXR0cmlidXRlIG9uIGEgZm9ybWx5LWZvcm0gaXMgbm8gbG9uZ2VyIHZhbGlkLiBVc2UgXFxcImZvcm1cXFwiIGluc3RlYWRcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGZvcm1seUZvcm0uJGluamVjdCA9IFtcImZvcm1seVVzYWJpbGl0eVwiXTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2RpcmVjdGl2ZXMvZm9ybWx5LWZvcm0uanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG4gIG5nTW9kdWxlLmRpcmVjdGl2ZShcImZvcm1seUZvY3VzXCIsIFtcIiR0aW1lb3V0XCIsIFwiJGRvY3VtZW50XCIsIGZ1bmN0aW9uICgkdGltZW91dCwgJGRvY3VtZW50KSB7XG4gICAgLyoganNoaW50IC1XMDUyICovXG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbms6IGZ1bmN0aW9uIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgIHZhciBwcmV2aW91c0VsID0gbnVsbDtcbiAgICAgICAgdmFyIGVsID0gZWxlbWVudFswXTtcbiAgICAgICAgdmFyIGRvYyA9ICRkb2N1bWVudFswXTtcbiAgICAgICAgYXR0cnMuJG9ic2VydmUoXCJmb3JtbHlGb2N1c1wiLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAodmFsdWUgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHByZXZpb3VzRWwgPSBkb2MuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgICAgICAgZWwuZm9jdXMoKTtcbiAgICAgICAgICAgIH0sIH4gfmF0dHJzLmZvY3VzV2FpdCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICAgICAgICBpZiAoZG9jLmFjdGl2ZUVsZW1lbnQgPT09IGVsKSB7XG4gICAgICAgICAgICAgIGVsLmJsdXIoKTtcbiAgICAgICAgICAgICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KFwicmVmb2N1c1wiKSAmJiBwcmV2aW91c0VsKSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNFbC5mb2N1cygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9kaXJlY3RpdmVzL2Zvcm1seS1mb2N1cy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmdNb2R1bGUpIHtcbiAgbmdNb2R1bGUucnVuKGFkZEZvcm1seU5nTW9kZWxBdHRyc01hbmlwdWxhdG9yKTtcblxuICBmdW5jdGlvbiBhZGRGb3JtbHlOZ01vZGVsQXR0cnNNYW5pcHVsYXRvcihmb3JtbHlDb25maWcpIHtcbiAgICBpZiAoZm9ybWx5Q29uZmlnLmV4dHJhcy5kaXNhYmxlTmdNb2RlbEF0dHJzTWFuaXB1bGF0b3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9ybWx5Q29uZmlnLnRlbXBsYXRlTWFuaXB1bGF0b3JzLnByZVdyYXBwZXIucHVzaChuZ01vZGVsQXR0cnNNYW5pcHVsYXRvcik7XG5cbiAgICBmdW5jdGlvbiBuZ01vZGVsQXR0cnNNYW5pcHVsYXRvcih0ZW1wbGF0ZSwgb3B0aW9ucywgc2NvcGUpIHtcbiAgICAgIC8qIGpzaGludCBtYXhjb21wbGV4aXR5OjcgKi9cbiAgICAgIHZhciBlbCA9IGFuZ3VsYXIuZWxlbWVudChcIjxhPjwvYT5cIik7XG4gICAgICB2YXIgZGF0YSA9IG9wdGlvbnMuZGF0YTtcbiAgICAgIGlmIChkYXRhLm5vVG91Y2h5KSB7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgIH1cbiAgICAgIGVsLmFwcGVuZCh0ZW1wbGF0ZSk7XG4gICAgICB2YXIgbW9kZWxFbHMgPSBhbmd1bGFyLmVsZW1lbnQoZWxbMF0ucXVlcnlTZWxlY3RvckFsbChcIltuZy1tb2RlbF1cIikpO1xuICAgICAgaWYgKCFtb2RlbEVscyB8fCAhbW9kZWxFbHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgIH1cblxuICAgICAgYWRkSWZOb3RQcmVzZW50KG1vZGVsRWxzLCBcImlkXCIsIHNjb3BlLmlkKTtcbiAgICAgIGFkZElmTm90UHJlc2VudChtb2RlbEVscywgXCJuYW1lXCIsIHNjb3BlLmlkKTtcblxuICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKG9wdGlvbnMudmFsaWRhdG9ycykpIHtcbiAgICAgICAgYWRkSWZOb3RQcmVzZW50KG1vZGVsRWxzLCBcImZvcm1seS1jdXN0b20tdmFsaWRhdGlvblwiLCBcIm9wdGlvbnMudmFsaWRhdG9yc1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChvcHRpb25zLm1vZGVsT3B0aW9ucykpIHtcbiAgICAgICAgYWRkSWZOb3RQcmVzZW50KG1vZGVsRWxzLCBcIm5nLW1vZGVsLW9wdGlvbnNcIiwgXCJvcHRpb25zLm1vZGVsT3B0aW9uc1wiKTtcbiAgICAgICAgaWYgKG9wdGlvbnMubW9kZWxPcHRpb25zLmdldHRlclNldHRlcikge1xuICAgICAgICAgIG1vZGVsRWxzLmF0dHIoXCJuZy1tb2RlbFwiLCBcIm9wdGlvbnMudmFsdWVcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGFkZFRlbXBsYXRlT3B0aW9uc0F0dHJzKCk7XG5cbiAgICAgIHJldHVybiBlbC5odG1sKCk7XG5cbiAgICAgIGZ1bmN0aW9uIGFkZFRlbXBsYXRlT3B0aW9uc0F0dHJzKCkge1xuICAgICAgICBpZiAoIW9wdGlvbnMudGVtcGxhdGVPcHRpb25zICYmICFvcHRpb25zLmV4cHJlc3Npb25Qcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgLy8gbm8gbmVlZCB0byBydW4gdGhlc2UgaWYgdGhlcmUgYXJlIG5vIHRlbXBsYXRlT3B0aW9ucyBvciBleHByZXNzaW9uUHJvcGVydGllc1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdG8gPSBvcHRpb25zLnRlbXBsYXRlT3B0aW9ucyB8fCB7fTtcbiAgICAgICAgdmFyIGVwID0gb3B0aW9ucy5leHByZXNzaW9uUHJvcGVydGllcyB8fCB7fTtcblxuICAgICAgICB2YXIgbmdNb2RlbEF0dHJpYnV0ZXMgPSBnZXRCdWlsdGluQXR0cmlidXRlcygpO1xuXG4gICAgICAgIC8vIGV4dGVuZCB3aXRoIHRoZSB1c2VyJ3Mgc3BlY2lmaWNhdGlvbnMgd2lubmluZ1xuICAgICAgICBhbmd1bGFyLmV4dGVuZChuZ01vZGVsQXR0cmlidXRlcywgb3B0aW9ucy5uZ01vZGVsQXR0cnMpO1xuXG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaChuZ01vZGVsQXR0cmlidXRlcywgZnVuY3Rpb24gKHZhbCwgbmFtZSkge1xuICAgICAgICAgIC8qIGpzaGludCBtYXhjb21wbGV4aXR5OjEwICovXG4gICAgICAgICAgdmFyIGF0dHJWYWwgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgdmFyIGF0dHJOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgICAgIHZhciByZWYgPSBcIm9wdGlvbnMudGVtcGxhdGVPcHRpb25zWydcIiArIG5hbWUgKyBcIiddXCI7XG4gICAgICAgICAgdmFyIHRvVmFsID0gdG9bbmFtZV07XG4gICAgICAgICAgdmFyIGVwVmFsID0gZ2V0RXBWYWx1ZShlcCwgbmFtZSk7XG5cbiAgICAgICAgICB2YXIgaW5UbyA9IGFuZ3VsYXIuaXNEZWZpbmVkKHRvVmFsKTtcbiAgICAgICAgICB2YXIgaW5FcCA9IGFuZ3VsYXIuaXNEZWZpbmVkKGVwVmFsKTtcbiAgICAgICAgICBpZiAodmFsLnZhbHVlKSB7XG4gICAgICAgICAgICAvLyBJIHJlYWxpemUgdGhpcyBsb29rcyBiYWNrd2FyZHMsIGJ1dCBpdCdzIHJpZ2h0LCB0cnVzdCBtZS4uLlxuICAgICAgICAgICAgYXR0ck5hbWUgPSB2YWwudmFsdWU7XG4gICAgICAgICAgICBhdHRyVmFsID0gbmFtZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHZhbC5leHByZXNzaW9uICYmIGluVG8pIHtcbiAgICAgICAgICAgIGF0dHJOYW1lID0gdmFsLmV4cHJlc3Npb247XG4gICAgICAgICAgICBpZiAoYW5ndWxhci5pc1N0cmluZyh0b1tuYW1lXSkpIHtcbiAgICAgICAgICAgICAgYXR0clZhbCA9IFwiJGV2YWwoXCIgKyByZWYgKyBcIilcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYW5ndWxhci5pc0Z1bmN0aW9uKHRvW25hbWVdKSkge1xuICAgICAgICAgICAgICBhdHRyVmFsID0gXCJcIiArIHJlZiArIFwiKG1vZGVsW29wdGlvbnMua2V5XSwgb3B0aW9ucywgdGhpcywgJGV2ZW50KVwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwib3B0aW9ucy50ZW1wbGF0ZU9wdGlvbnMuXCIgKyBuYW1lICsgXCIgbXVzdCBiZSBhIHN0cmluZyBvciBmdW5jdGlvbjogXCIgKyBKU09OLnN0cmluZ2lmeShvcHRpb25zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICh2YWwuYm91bmQgJiYgaW5FcCkge1xuICAgICAgICAgICAgYXR0ck5hbWUgPSB2YWwuYm91bmQ7XG4gICAgICAgICAgICBhdHRyVmFsID0gcmVmO1xuICAgICAgICAgIH0gZWxzZSBpZiAodmFsLmF0dHJpYnV0ZSAmJiBpbkVwKSB7XG4gICAgICAgICAgICBhdHRyTmFtZSA9IHZhbC5hdHRyaWJ1dGU7XG4gICAgICAgICAgICBhdHRyVmFsID0gXCJ7e1wiICsgcmVmICsgXCJ9fVwiO1xuICAgICAgICAgIH0gZWxzZSBpZiAodmFsLmF0dHJpYnV0ZSAmJiBpblRvKSB7XG4gICAgICAgICAgICBhdHRyTmFtZSA9IHZhbC5hdHRyaWJ1dGU7XG4gICAgICAgICAgICBhdHRyVmFsID0gdG9WYWw7XG4gICAgICAgICAgfSBlbHNlIGlmICh2YWwuYm91bmQgJiYgaW5Ubykge1xuICAgICAgICAgICAgYXR0ck5hbWUgPSB2YWwuYm91bmQ7XG4gICAgICAgICAgICBhdHRyVmFsID0gcmVmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQoYXR0ck5hbWUpICYmIGFuZ3VsYXIuaXNEZWZpbmVkKGF0dHJWYWwpKSB7XG4gICAgICAgICAgICBhZGRJZk5vdFByZXNlbnQobW9kZWxFbHMsIGF0dHJOYW1lLCBhdHRyVmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBnZXRCdWlsdGluQXR0cmlidXRlcygpIHtcbiAgICAgICAgdmFyIG5nTW9kZWxBdHRyaWJ1dGVzID0ge1xuICAgICAgICAgIGZvY3VzOiB7XG4gICAgICAgICAgICBhdHRyaWJ1dGU6IFwiZm9ybWx5LWZvY3VzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBib3VuZE9ubHkgPSBbXTtcbiAgICAgICAgdmFyIGJvdGhBdHRyaWJ1dGVBbmRCb3VuZCA9IFtcInJlcXVpcmVkXCIsIFwiZGlzYWJsZWRcIiwgXCJwYXR0ZXJuXCIsIFwibWlubGVuZ3RoXCJdO1xuICAgICAgICB2YXIgZXhwcmVzc2lvbk9ubHkgPSBbXCJjaGFuZ2VcIiwgXCJrZXlkb3duXCIsIFwia2V5dXBcIiwgXCJrZXlwcmVzc1wiLCBcImNsaWNrXCIsIFwiZm9jdXNcIiwgXCJibHVyXCJdO1xuICAgICAgICB2YXIgYXR0cmlidXRlT25seSA9IFtcInBsYWNlaG9sZGVyXCIsIFwibWluXCIsIFwibWF4XCIsIFwidGFiaW5kZXhcIiwgXCJ0eXBlXCJdO1xuICAgICAgICBpZiAoZm9ybWx5Q29uZmlnLmV4dHJhcy5uZ01vZGVsQXR0cnNNYW5pcHVsYXRvclByZWZlckJvdW5kKSB7XG4gICAgICAgICAgYm91bmRPbmx5LnB1c2goXCJtYXhsZW5ndGhcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYm90aEF0dHJpYnV0ZUFuZEJvdW5kLnB1c2goXCJtYXhsZW5ndGhcIik7XG4gICAgICAgIH1cblxuICAgICAgICBhbmd1bGFyLmZvckVhY2goYm91bmRPbmx5LCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIG5nTW9kZWxBdHRyaWJ1dGVzW2l0ZW1dID0geyBib3VuZDogXCJuZy1cIiArIGl0ZW0gfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKGJvdGhBdHRyaWJ1dGVBbmRCb3VuZCwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICBuZ01vZGVsQXR0cmlidXRlc1tpdGVtXSA9IHsgYXR0cmlidXRlOiBpdGVtLCBib3VuZDogXCJuZy1cIiArIGl0ZW0gfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKGV4cHJlc3Npb25Pbmx5LCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIHZhciBwcm9wTmFtZSA9IFwib25cIiArIGl0ZW0uc3Vic3RyKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBpdGVtLnN1YnN0cigxKTtcbiAgICAgICAgICBuZ01vZGVsQXR0cmlidXRlc1twcm9wTmFtZV0gPSB7IGV4cHJlc3Npb246IFwibmctXCIgKyBpdGVtIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaChhdHRyaWJ1dGVPbmx5LCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIG5nTW9kZWxBdHRyaWJ1dGVzW2l0ZW1dID0geyBhdHRyaWJ1dGU6IGl0ZW0gfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZ01vZGVsQXR0cmlidXRlcztcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0RXBWYWx1ZShlcCwgbmFtZSkge1xuICAgICAgICByZXR1cm4gZXBbXCJ0ZW1wbGF0ZU9wdGlvbnMuXCIgKyBuYW1lXSB8fCBlcFtcInRlbXBsYXRlT3B0aW9uc1snXCIgKyBuYW1lICsgXCInXVwiXSB8fCBlcFtcInRlbXBsYXRlT3B0aW9uc1tcXFwiXCIgKyBuYW1lICsgXCJcXFwiXVwiXTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gYWRkSWZOb3RQcmVzZW50KGVsLCBhdHRyLCB2YWwpIHtcbiAgICAgICAgaWYgKCFlbC5hdHRyKGF0dHIpKSB7XG4gICAgICAgICAgZWwuYXR0cihhdHRyLCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFkZEZvcm1seU5nTW9kZWxBdHRyc01hbmlwdWxhdG9yLiRpbmplY3QgPSBbXCJmb3JtbHlDb25maWdcIl07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9ydW4vZm9ybWx5TmdNb2RlbEF0dHJzTWFuaXB1bGF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzIxX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImFwaUNoZWNrXCJcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBhbmd1bGFyID0gcmVxdWlyZShcImFuZ3VsYXItZml4XCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgZm9ybWx5RXZhbDogZm9ybWx5RXZhbCwgZ2V0RmllbGRJZDogZ2V0RmllbGRJZCwgcmV2ZXJzZURlZXBNZXJnZTogcmV2ZXJzZURlZXBNZXJnZSB9O1xuXG5mdW5jdGlvbiBmb3JtbHlFdmFsKHNjb3BlLCBleHByZXNzaW9uLCBtb2RlbFZhbHVlLCB2aWV3VmFsdWUpIHtcbiAgaWYgKGFuZ3VsYXIuaXNGdW5jdGlvbihleHByZXNzaW9uKSkge1xuICAgIHJldHVybiBleHByZXNzaW9uKHZpZXdWYWx1ZSB8fCBtb2RlbFZhbHVlLCBtb2RlbFZhbHVlLCBzY29wZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNjb3BlLiRldmFsKGV4cHJlc3Npb24sIHtcbiAgICAgICR2aWV3VmFsdWU6IHZpZXdWYWx1ZSB8fCBtb2RlbFZhbHVlLFxuICAgICAgJG1vZGVsVmFsdWU6IG1vZGVsVmFsdWVcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRGaWVsZElkKGZvcm1JZCwgb3B0aW9ucywgaW5kZXgpIHtcbiAgdmFyIHR5cGUgPSBvcHRpb25zLnR5cGU7XG4gIGlmICghdHlwZSAmJiBvcHRpb25zLnRlbXBsYXRlKSB7XG4gICAgdHlwZSA9IFwidGVtcGxhdGVcIjtcbiAgfSBlbHNlIGlmICghdHlwZSAmJiBvcHRpb25zLnRlbXBsYXRlVXJsKSB7XG4gICAgdHlwZSA9IFwidGVtcGxhdGVVcmxcIjtcbiAgfVxuXG4gIHJldHVybiBbZm9ybUlkLCB0eXBlLCBvcHRpb25zLmtleSwgaW5kZXhdLmpvaW4oXCJfXCIpO1xufVxuXG5mdW5jdGlvbiByZXZlcnNlRGVlcE1lcmdlKGRlc3QpIHtcbiAgYW5ndWxhci5mb3JFYWNoKGFyZ3VtZW50cywgZnVuY3Rpb24gKHNyYywgaW5kZXgpIHtcbiAgICBpZiAoIWluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFuZ3VsYXIuZm9yRWFjaChzcmMsIGZ1bmN0aW9uICh2YWwsIHByb3ApIHtcbiAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQoZGVzdFtwcm9wXSkpIHtcbiAgICAgICAgZGVzdFtwcm9wXSA9IGFuZ3VsYXIuY29weSh2YWwpO1xuICAgICAgfSBlbHNlIGlmIChvYmpBbmRTYW1lVHlwZShkZXN0W3Byb3BdLCB2YWwpKSB7XG4gICAgICAgIHJldmVyc2VEZWVwTWVyZ2UoZGVzdFtwcm9wXSwgdmFsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9iakFuZFNhbWVUeXBlKG9iajEsIG9iajIpIHtcbiAgcmV0dXJuIGFuZ3VsYXIuaXNPYmplY3Qob2JqMSkgJiYgYW5ndWxhci5pc09iamVjdChvYmoyKSAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqMSkgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmoyKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vb3RoZXIvdXRpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG4gIG5nTW9kdWxlLmZhY3RvcnkoXCJmb3JtbHlUZW1wbGF0ZUNhY2hlXCIsIGZvcm1seVRlbXBsYXRlQ2FjaGUpO1xuXG4gIGZ1bmN0aW9uIGZvcm1seVRlbXBsYXRlQ2FjaGUoZm9ybWx5V2Fybikge1xuICAgIHZhciBjYWNoZSA9IHt9O1xuICAgIHJldHVybiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gY2FjaGVbaWRdO1xuICAgICAgfSwgYWRkOiBhZGQsIHJlbW92ZTogcmVtb3ZlLCByZW1vdmVBbGw6IHJlbW92ZUFsbFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBhZGQoaWQsIHRlbXBsYXRlLCBvdmVycmlkZU9rKSB7XG4gICAgICBpZiAoY2FjaGVbaWRdICYmICFvdmVycmlkZU9rKSB7XG4gICAgICAgIGZvcm1seVdhcm4oXCJhdHRlbXB0aW5nLXRvLW92ZXJyaWRlLXRlbXBsYXRlLWluLWNhY2hlXCIsIFwiQXR0ZW1wdGluZyB0byBvdmVycmlkZSB0ZW1wbGF0ZSBpbiBjYWNoZVwiLCBcImlkOlwiLCBpZCwgXCJuZXcgdGVtcGxhdGU6XCIsIHRlbXBsYXRlLCBcIm9sZCB0ZW1wbGF0ZTpcIiwgY2FjaGVbaWRdKTtcbiAgICAgIH1cbiAgICAgIGNhY2hlW2lkXSA9IHRlbXBsYXRlO1xuICAgICAgcmV0dXJuIGNhY2hlW2lkXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmUoaWQpIHtcbiAgICAgIGNhY2hlW2lkXSA9IG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsKCkge1xuICAgICAgY2FjaGUgPSB7fTtcbiAgICB9XG4gIH1cbiAgZm9ybWx5VGVtcGxhdGVDYWNoZS4kaW5qZWN0ID0gW1wiZm9ybWx5V2FyblwiXTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NlcnZpY2VzL2Zvcm1seVRlbXBsYXRlQ2FjaGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoiZm9ybWx5LmpzIn0=