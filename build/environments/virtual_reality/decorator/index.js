Object.defineProperty(exports,"__esModule",{value:true});var _this=this,_jsxFileName='source_code\\environments\\virtual_reality\\decorator\\index.js';var _react=require('react');var _react2=_interopRequireDefault(_react);

var _Messenger=require('../components/Messenger');var _Messenger2=_interopRequireDefault(_Messenger);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(props){

_this.session='';
_this.messageToAva='';

_this.renderSession=function(){
return _this.session;
};

_this.renderMessenger=function(){
return;
_react2.default.createElement(_Messenger2.default,{
onMessageSentHandler:
avaInstance.prototype.acceptUserInput,
message:_this.messageToAva,__source:{fileName:_jsxFileName,lineNumber:16}});

};

avaInstance.prototype.typeOut=function(phrase){var phraseIntervalDelay=arguments.length>1&&arguments[1]!==undefined?arguments[1]:_this.props.time.medium;
var phraseIndex=0;
var typeInterval=
setInterval(function(){
var typeMe=phrase[phraseIndex];
phraseIndex++;
if(phraseIndex>phrase.length){
clearInterval(typeInterval);
_this.appendToSession('\n');
}else{
_this.appendToSession(typeMe);
}
},phraseIntervalDelay);
};

_this.appendToSession=function(itemToBeAppended){
_this.session=''+_this.session+itemToBeAppended;
};

avaInstance.prototype.acceptUserInput=function(e){
avaInstance.provideResponse();
};

return(
_react2.default.createElement(Text,{
style:{
backgroundColor:'#777879',
fontSize:0.8,
fontWeight:'400',
layoutOrigin:[0.5,0.5],
paddingLeft:0.2,
paddingRight:0.2,
textAlign:'center',
textAlignVertical:'center'},__source:{fileName:_jsxFileName,lineNumber:47}},

_this.renderSession(),
_this.renderMessenger()));



};