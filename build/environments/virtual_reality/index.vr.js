Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='source_code\\environments\\virtual_reality\\index.vr.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactVr=require('react-vr');







var _=require('');var _2=_interopRequireDefault(_);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


virtual_reality=function(_React$Component){_inherits(virtual_reality,_React$Component);function virtual_reality(){_classCallCheck(this,virtual_reality);return _possibleConstructorReturn(this,(virtual_reality.__proto__||Object.getPrototypeOf(virtual_reality)).apply(this,arguments));}_createClass(virtual_reality,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_reactVr.View,{__source:{fileName:_jsxFileName,lineNumber:16}},
_react2.default.createElement(_reactVr.Pano,{source:(0,_reactVr.asset)('chess-world.jpg'),__source:{fileName:_jsxFileName,lineNumber:17}})));



}}]);return virtual_reality;}(_react2.default.Component);exports.default=virtual_reality;
;

_reactVr.AppRegistry.registerComponent('virtual_reality',function(){return virtual_reality;});