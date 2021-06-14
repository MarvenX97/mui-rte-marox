"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),React__default=_interopDefault(React),Immutable=_interopDefault(require("immutable")),classNames=_interopDefault(require("classnames")),styles$6=require("@material-ui/core/styles"),Paper=_interopDefault(require("@material-ui/core/Paper")),draftJs=require("draft-js"),FormatBoldIcon=_interopDefault(require("@material-ui/icons/FormatBold")),FormatItalicIcon=_interopDefault(require("@material-ui/icons/FormatItalic")),FormatUnderlinedIcon=_interopDefault(require("@material-ui/icons/FormatUnderlined")),StrikethroughIcon=_interopDefault(require("@material-ui/icons/StrikethroughS")),HighlightIcon=_interopDefault(require("@material-ui/icons/Highlight")),TitleIcon=_interopDefault(require("@material-ui/icons/Title")),InsertLinkIcon=_interopDefault(require("@material-ui/icons/InsertLink")),PhotoLibraryIcon=_interopDefault(require("@material-ui/icons/PhotoLibrary")),FormatListNumberedIcon=_interopDefault(require("@material-ui/icons/FormatListNumbered")),FormatListBulletedIcon=_interopDefault(require("@material-ui/icons/FormatListBulleted")),FormatQuoteIcon=_interopDefault(require("@material-ui/icons/FormatQuote")),CodeIcon=_interopDefault(require("@material-ui/icons/Code")),FormatClearIcon=_interopDefault(require("@material-ui/icons/FormatClear")),SaveIcon=_interopDefault(require("@material-ui/icons/Save")),UndoIcon=_interopDefault(require("@material-ui/icons/Undo")),RedoIcon=_interopDefault(require("@material-ui/icons/Redo")),IconButton=_interopDefault(require("@material-ui/core/IconButton")),MuiLink=_interopDefault(require("@material-ui/core/Link")),CreateIcon=_interopDefault(require("@material-ui/icons/Create")),Button=_interopDefault(require("@material-ui/core/Button")),Grid=_interopDefault(require("@material-ui/core/Grid")),Popover=_interopDefault(require("@material-ui/core/Popover")),TextField=_interopDefault(require("@material-ui/core/TextField")),ButtonGroup=_interopDefault(require("@material-ui/core/ButtonGroup")),InsertPhotoIcon=_interopDefault(require("@material-ui/icons/InsertPhoto")),MovieIcon=_interopDefault(require("@material-ui/icons/Movie")),YouTubeIcon=_interopDefault(require("@material-ui/icons/YouTube")),CheckIcon=_interopDefault(require("@material-ui/icons/Check")),DeleteIcon=_interopDefault(require("@material-ui/icons/DeleteOutline")),FormatAlignCenter=_interopDefault(require("@material-ui/icons/FormatAlignCenter")),FormatAlignLeft=_interopDefault(require("@material-ui/icons/FormatAlignLeft")),FormatAlignRight=_interopDefault(require("@material-ui/icons/FormatAlignRight")),CloseIcon=_interopDefault(require("@material-ui/icons/Close")),LibraryBooksIcon=_interopDefault(require("@material-ui/icons/LibraryBooks")),List=_interopDefault(require("@material-ui/core/List")),ListItem=_interopDefault(require("@material-ui/core/ListItem")),__assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},ToolbarButton=function(t){var e=t.inlineMode?"small":t.size||"medium",n=t.inlineMode?"-toolbar":"",r=(t.editorId||"mui-rte-marox")+"-"+(t.id||t.label)+"-button"+n,n={id:r,onMouseDown:function(e){e.preventDefault(),t.onClick&&t.onClick(t.style,t.type,r,t.inlineMode)},disabled:t.disabled||!1};return t.icon?React__default.createElement(IconButton,__assign({},n,{"aria-label":t.label,color:t.active?"primary":"default",size:e}),t.icon):t.component?React__default.createElement(t.component,__assign({},n,{active:t.active||!1})):null},getSelectionInfo=function(e){var t=e.getSelection(),n=t.getStartOffset(),r=e.getCurrentContent(),o=r.getBlockForKey(t.getStartKey()),t=e.getCurrentInlineStyle(),e=o.getEntityAt(n),n="";return e&&(n=r.getEntity(e).getType()),{inlineStyle:t,blockType:o.getType(),entityType:n,linkKey:e,block:o}},removeBlockFromMap=function(e,t){var n=e.getCurrentContent(),e=draftJs.Modifier.removeRange(n,new draftJs.SelectionState({anchorKey:t.getKey(),anchorOffset:0,focusKey:t.getKey(),focusOffset:t.getLength()}),"backward"),t=e.getBlockMap().delete(t.getKey());return e.merge({blockMap:t,selectionAfter:n.getSelectionAfter()})},atomicBlockExists=function(t,e){if(e)return e.find(function(e){return"atomic"===e.type&&e.name===t&&void 0!==e.atomicComponent})},isGreaterThan=function(e,t){return!!t&&t<e},clearInlineStyles=function(n,e){var t=["BOLD","ITALIC","UNDERLINE"];return(t=e?t.concat(Object.getOwnPropertyNames(e)):t).reduce(function(e,t){return draftJs.Modifier.removeInlineStyle(e,n.getSelection(),t)},n.getCurrentContent())},getEditorBounds=function(e){var t=draftJs.getVisibleSelectionRect(window);return{selectionRect:t?{top:null==t?void 0:t.top,left:null==t?void 0:t.left}:null,editorRect:e.getBoundingClientRect()}},getLineNumber=function(e){var t=e.getSelection().getStartKey();return e.getCurrentContent().getBlockMap().keySeq().findIndex(function(e){return e===t})},STYLE_TYPES=[{label:"H2",name:"title",style:"header-two",icon:React__default.createElement(TitleIcon,null),type:"block"},{label:"Bold",name:"bold",style:"BOLD",icon:React__default.createElement(FormatBoldIcon,null),type:"inline"},{label:"Italic",name:"italic",style:"ITALIC",icon:React__default.createElement(FormatItalicIcon,null),type:"inline"},{label:"Underline",name:"underline",style:"UNDERLINE",icon:React__default.createElement(FormatUnderlinedIcon,null),type:"inline"},{label:"Strikethrough",name:"strikethrough",style:"STRIKETHROUGH",icon:React__default.createElement(StrikethroughIcon,null),type:"inline"},{label:"Highlight",name:"highlight",style:"HIGHLIGHT",icon:React__default.createElement(HighlightIcon,null),type:"inline"},{label:"Undo",name:"undo",style:"UNDO",icon:React__default.createElement(UndoIcon,null),type:"callback"},{label:"Redo",name:"redo",style:"REDO",icon:React__default.createElement(RedoIcon,null),type:"callback"},{label:"Link",name:"link",style:"LINK",icon:React__default.createElement(InsertLinkIcon,null),type:"callback",id:"link-control"},{label:"Media",name:"media",style:"IMAGE",icon:React__default.createElement(PhotoLibraryIcon,null),type:"callback",id:"media-control"},{label:"UL",name:"bulletList",style:"unordered-list-item",icon:React__default.createElement(FormatListBulletedIcon,null),type:"block"},{label:"OL",name:"numberList",style:"ordered-list-item",icon:React__default.createElement(FormatListNumberedIcon,null),type:"block"},{label:"Blockquote",name:"quote",style:"blockquote",icon:React__default.createElement(FormatQuoteIcon,null),type:"block"},{label:"Code Block",name:"code",style:"code-block",icon:React__default.createElement(CodeIcon,null),type:"block"},{label:"Clear",name:"clear",style:"clear",icon:React__default.createElement(FormatClearIcon,null),type:"callback"},{label:"Save",name:"save",style:"save",icon:React__default.createElement(SaveIcon,null),type:"callback"}],Toolbar=function(o){function e(){i.current&&c(i.current.getBoundingClientRect().top<=0)}var t=React.useState(o.controls?[]:STYLE_TYPES),n=t[0],r=t[1],a=o.editorState,i=o.editorRef,l=React.useState(!1),t=l[0],c=l[1];React.useEffect(function(){return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",function(){return e})}},[]);l=o.inlineMode?"-inline-toolbar":"-toolbar";return React.useEffect(function(){var n;o.controls&&(n=[],o.controls.filter(function(e,t){return o.controls.indexOf(e)>=t}).forEach(function(t){var e=STYLE_TYPES.find(function(e){return e.name===t});e?n.push(e):!o.customControls||(e=o.customControls.find(function(e){return e.name===t}))&&"atomic"!==e.type&&(e.icon||e.component)&&n.push({id:e.id||e.name+"Id",name:e.name,label:e.name,style:e.name.toUpperCase(),icon:e.icon,component:e.component,type:e.type,clickFnName:"onCustomClick"})}),r(n))},[o.controls,o.customControls]),console.log("Toolbar class Names=",o.className),console.log("Toolbar class is STicky=",t),React__default.createElement("div",{id:o.id+l,className:o.className,style:{position:t?"sticky":"relative"}},n.map(function(e){if(o.inlineMode&&"inline"!==e.type&&"link"!==e.name&&"clear"!==e.name)return null;var t,n=!1,r=o.onClick;return o.isActive?"inline"===e.type?n=a.getCurrentInlineStyle().has(e.style):"block"===e.type?(t=a.getSelection(),(t=a.getCurrentContent().getBlockForKey(t.getStartKey()))&&(n=e.style===t.getType())):"IMAGE"!==e.style&&"LINK"!==e.style||(n=e.style===getSelectionInfo(a).entityType):n=!1,React__default.createElement(ToolbarButton,{id:e.id,editorId:o.id,key:"key-"+e.label,active:n,label:e.label,onClick:r,style:e.style,type:e.type,icon:e.icon,component:e.component,inlineMode:o.inlineMode,disabled:o.disabled,size:o.size})}))},Link=function(e){var t=e.contentState.getEntity(e.entityKey).getData(),n=t.url,t=t.className;return React__default.createElement(MuiLink,{href:n,className:t+" editor-anchor",target:"_blank"},e.children)},styles=function(e){e=e.shadows;return styles$6.createStyles({root:{margin:"5px 0 1px",outline:"none"},editable:{cursor:"pointer","&:hover":{boxShadow:e[3]}},focused:{boxShadow:e[3]},centered:{textAlign:"center"},leftAligned:{textAlign:"left"},rightAligned:{textAlign:"right"}})},Media=function(o){var e=o.contentState.getEntity(o.block.getEntityAt(0)).getData(),a=e.url,i=e.width,l=e.height,t=e.alignment,c=e.type,e=o.blockProps,u=e.onClick,s=e.readOnly,d=e.focusKey;return React__default.createElement("div",{className:classNames(((e={})[o.classes.centered]="center"===t,e[o.classes.leftAligned]="left"===t,e[o.classes.rightAligned]="right"===t,e))},function(){var e={src:a,className:classNames(o.classes.root,((r={})[o.classes.editable]=!s,r[o.classes.focused]=!s&&d===o.block.getKey(),r)),width:i,height:"video"===c?"auto":l,onClick:function(){s||(console.log("Youtube Props block???",o.block),u(o.block))}};if(!c||"image"===c)return React__default.createElement("img",__assign({},e));if("video"===c)return React__default.createElement("video",__assign({},e,{autoPlay:!1}));if("youtube"!==c)return null;var t=e.width||560,n=e.height||315,r=e.src.split("/")[3].split("v=")[1];return console.log("Youtube Props update??? v2",e),React__default.createElement("div",{className:"relative border p-4 my-4 border-light-blue-800 "},React__default.createElement("iframe",{width:t,height:n,src:"https://www.youtube.com/embed/"+r,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),s?null:React__default.createElement("div",{className:"absolute -top-2.5 right-0 flex"},React__default.createElement(CreateIcon,{onClick:e.onClick,className:"h-6 w-6 p-0.5 text-blue-500 rounded-full flex items-center justify-center bg-white hover:bg-opacity-25 hover:bg-gray-600 hover:text-white"})))}())},Media$1=styles$6.withStyles(styles,{withTheme:!0})(Media),styles$1=function(e){e=e.palette;return styles$6.createStyles({root:{fontStyle:"italic",color:e.grey[800],borderLeft:"4px solid "+e.grey.A100}})},Blockquote=function(e){return React__default.createElement("div",{className:e.classes.root},e.children)},Blockquote$1=styles$6.withStyles(styles$1,{withTheme:!0})(Blockquote),styles$2=function(e){var t=e.spacing,e=e.palette;return styles$6.createStyles({root:{backgroundColor:e.grey[200],padding:t(1,2,1,2)}})},CodeBlock=function(e){return React__default.createElement("div",{className:e.classes.root},e.children)},CodeBlock$1=styles$6.withStyles(styles$2,{withTheme:!0})(CodeBlock),styles$3=function(e){e=e.spacing;return styles$6.createStyles({linkPopover:{padding:e(2,2,2,2),maxWidth:250},linkTextField:{width:"100%"}})},UrlPopover=function(e){function t(e,t){var n;""!==e?(e=parseInt(e,10),isNaN(e)||i(__assign(__assign({},a),((n={})[t]=e,n)))):i(__assign(__assign({},a),((n={})[t]=void 0,n)))}var n=React.useState(!1),r=n[0],o=n[1],n=React.useState(e.data||{url:void 0,width:void 0,height:void 0,alignment:void 0,type:void 0}),a=n[0],i=n[1],n=e.classes;return React__default.createElement(Popover,{open:void 0!==e.anchor,anchorEl:e.anchor,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},React__default.createElement("div",{className:n.linkPopover},React__default.createElement(Grid,{container:!0,spacing:1},React__default.createElement(Grid,{container:!0,item:!0,xs:!0,spacing:1},React__default.createElement(Grid,{item:!0,xs:12},React__default.createElement(TextField,{className:n.linkTextField,onChange:function(e){return i(__assign(__assign({},a),{url:e.target.value}))},label:"URL",defaultValue:e.data&&e.data.url,autoFocus:!0,InputLabelProps:{shrink:!0}})),e.isMedia?React__default.createElement(React__default.Fragment,null,React__default.createElement(Grid,{item:!0,xs:12},React__default.createElement(ButtonGroup,{fullWidth:!0},React__default.createElement(Button,{color:a.type&&"image"!==a.type?"default":"primary",size:"small",onClick:function(){return i(__assign(__assign({},a),{type:"image"}))}},React__default.createElement(InsertPhotoIcon,null)),React__default.createElement(Button,{color:"video"===a.type?"primary":"default",size:"small",onClick:function(){return i(__assign(__assign({},a),{type:"video"}))}},React__default.createElement(MovieIcon,null)),React__default.createElement(Button,{color:"youtube"===a.type?"primary":"default",size:"small",onClick:function(){return i(__assign(__assign({},a),{type:"youtube"}))}},React__default.createElement(YouTubeIcon,null)),React__default.createElement(Button,{color:r?"primary":"default",size:"small",onClick:function(){o(!r)}},React__default.createElement(LibraryBooksIcon,null)))),React__default.createElement(Grid,{item:!0,xs:6},React__default.createElement(TextField,{onChange:function(e){return t(e.target.value,"width")},value:a.width||"",label:"Width",InputLabelProps:{shrink:!0}})),React__default.createElement(Grid,{item:!0,xs:6},React__default.createElement(TextField,{onChange:function(e){return t(e.target.value,"height")},value:a.height||"",label:"Height",InputLabelProps:{shrink:!0}})),React__default.createElement(Grid,{item:!0,xs:12},React__default.createElement(ButtonGroup,{fullWidth:!0},React__default.createElement(Button,{color:"left"===a.alignment?"primary":"default",size:"small",onClick:function(){return i(__assign(__assign({},a),{alignment:"left"}))}},React__default.createElement(FormatAlignLeft,null)),React__default.createElement(Button,{color:"center"===a.alignment?"primary":"default",size:"small",onClick:function(){return i(__assign(__assign({},a),{alignment:"center"}))}},React__default.createElement(FormatAlignCenter,null)),React__default.createElement(Button,{color:"right"===a.alignment?"primary":"default",size:"small",onClick:function(){return i(__assign(__assign({},a),{alignment:"right"}))}},React__default.createElement(FormatAlignRight,null))))):null),React__default.createElement(Grid,{container:!0,item:!0,xs:12,direction:"row",justify:"flex-end"},React__default.createElement(Button,{onClick:function(){return e.onConfirm(e.isMedia,"")}},React__default.createElement(CloseIcon,null)),e.data&&e.data.url?React__default.createElement(Button,{onClick:function(){return e.onConfirm(e.isMedia,"")}},React__default.createElement(DeleteIcon,null)):null,React__default.createElement(Button,{onClick:function(){return e.onConfirm(e.isMedia,a.url,a.width,a.height,a.alignment,a.type)}},React__default.createElement(CheckIcon,null))))))},UrlPopover$1=styles$6.withStyles(styles$3,{withTheme:!0})(UrlPopover),styles$4=function(){return styles$6.createStyles({container:{minWidth:"200px",position:"absolute",zIndex:10},item:{cursor:"pointer"}})},Autocomplete=function(n){if(!n.items.length)return null;var r=n.classes;return React__default.createElement(Paper,{className:r.container,style:{top:n.top,left:n.left}},React__default.createElement(List,{dense:!0},n.items.map(function(e,t){return React__default.createElement(ListItem,{key:t,className:r.item,selected:t===n.selectedIndex,onClick:function(){return n.onClick(t)}},e.content)})))},Autocomplete$1=styles$6.withStyles(styles$4,{withTheme:!0})(Autocomplete),styles$5=function(e){var t=e.spacing,n=e.typography,e=e.palette;return styles$6.createStyles({root:{},container:{margin:t(1,0,0,0),position:"relative",fontFamily:n.body1.fontFamily,fontSize:n.body1.fontSize,"& figure":{margin:0}},inheritFontSize:{fontSize:"inherit"},editor:{},editorContainer:{margin:t(1,0,0,0),cursor:"text",width:"100%",padding:t(0,0,1,0)},editorReadOnly:{borderBottom:"none"},error:{borderBottom:"2px solid red"},hidePlaceholder:{display:"none"},placeHolder:{color:e.grey[600],position:"absolute",outline:"none"},linkPopover:{padding:t(2,2,2,2)},linkTextField:{width:"100%"},anchorLink:{},toolbar:{},inlineToolbar:{maxWidth:"180px",position:"absolute",padding:"5px",zIndex:10}})},blockRenderMap=Immutable.Map({blockquote:{element:"blockquote",wrapper:React__default.createElement(Blockquote$1,null)},"code-block":{element:"pre",wrapper:React__default.createElement(CodeBlock$1,null)}}),styleRenderMap={STRIKETHROUGH:{textDecoration:"line-through"},HIGHLIGHT:{backgroundColor:"yellow"}},hasCommandModifier=draftJs.KeyBindingUtil.hasCommandModifier,autocompleteMinSearchCharCount=2,lineHeight=26,defaultInlineToolbarControls=["bold","italic","underline","clear"],findLinkEntities=function(e,t,n){e.findEntityRanges(function(e){e=e.getEntity();return null!==e&&"LINK"===n.getEntity(e).getType()},t)},findDecoWithRegex=function(e,t,n){for(var r,o,a=t.getText();null!==(r=e.exec(a));)n(o=r.index,o+r[0].length)},useEditorState=function(e){var t=[{strategy:findLinkEntities,component:Link}];e.decorators&&e.decorators.forEach(function(n){return t.push({strategy:function(e,t){findDecoWithRegex(n.regex,e,t)},component:n.component})});var n=new draftJs.CompositeDecorator(t),e=e.defaultValue||e.value;return e?draftJs.EditorState.createWithContent(draftJs.convertFromRaw(JSON.parse(e)),n):draftJs.EditorState.createEmpty(n)},MUIRichTextEditor=function(i,e){var t,o=i.classes,n=i.controls,r=i.customControls;console.log("MUIRichTextEditor.JS ===version==",React__default.version);var a=React.useState({}),l=a[0],c=a[1],u=React.useState(!1),s=u[0],d=u[1],f=React.useState(""),m=f[0],g=f[1],p=React.useState(0),_=p[0],y=p[1],h=React.useState(function(){return useEditorState(i)}),v=h[0],E=h[1],a=React.useState(""),b=a[0],R=a[1],C=React.useRef(null),k=i.id||"mui-rte-marox",S=React.useRef(void 0),I=React.useRef(v),T=React.useRef(void 0),B=React.useRef(void 0),L=React.useRef(void 0),M=i.autocomplete&&i.autocomplete.suggestLimit||5,D=React.useRef(!0),x=React.useRef(void 0),w=React.useRef(void 0),F=React.useRef(!1),A=React.useRef({start:0,end:0});React.useImperativeHandle(e,function(){return{focus:function(){G()},save:function(){H()},insertAtomicBlock:function(e,t){Y(e,t)},insertAtomicBlockSync:function(e,t){Y(e,t)},insertAtomicBlockAsync:function(e,t,n){W(e,t,n)}}}),React.useEffect(function(){var e=useEditorState(i);return E(e),Q(!0),function(){Q()}},[i.value,i.defaultValue]),React.useEffect(function(){i.onChange&&i.onChange(v),I.current=v},[v]),React.useEffect(function(){S.current=l.toolbarPosition},[l.toolbarPosition]),React.useEffect(function(){m.length<autocompleteMinSearchCharCount&&y(0)},[m]);function N(){g(""),L.current=void 0,B.current=void 0}function P(e){e=e.target.nodeName,N(),"IMG"!==e&&"VIDEO"!==e&&setTimeout(function(){var e=I.current.getSelection();if(e.isCollapsed()||void 0!==S&&A.current.start===e.getStartOffset()&&A.current.end===e.getEndOffset()){var t=getSelectionInfo(I.current);return"IMAGE"===t.entityType?void ae(t.block):void c(__assign(__assign({},l),{toolbarPosition:void 0}))}A.current={start:e.getStartOffset(),end:e.getEndOffset()};var n,t=null===(n=C.current)||void 0===n?void 0:n.editor;t&&(n=(e=getEditorBounds(t)).editorRect,(e=e.selectionRect)&&(n={top:t.offsetTop-48+(e.top-n.top),left:t.offsetLeft+(e.left-n.left)},c(__assign(__assign({},l),{toolbarPosition:n}))))},1)}function q(e){var t,n,r,o=e||_;(r=K()).length>o&&(t=r[o],r=(e=B.current).getFocusOffset()+m.length+1,o=e.merge({focusOffset:r}),T.current.atomicBlockName?(e=T.current.atomicBlockName,r=e,n=o,e=t.value,atomicBlockExists(r,i.customControls)&&(n=draftJs.Modifier.removeRange(I.current.getCurrentContent(),n,"forward"),n=draftJs.EditorState.push(I.current,n,"remove-range"),n=ce(n,r.toUpperCase(),{value:e},{selection:n.getCurrentContent().getSelectionAfter()}),$(n))):(n=o,o=t.value,t=v.getCurrentContent().createEntity("AC_ITEM","IMMUTABLE").getLastCreatedEntityKey(),o=draftJs.Modifier.replaceText(I.current.getCurrentContent(),n,o,I.current.getCurrentInlineStyle(),t),t=draftJs.EditorState.push(I.current,o,"insert-characters"),!1===T.current.insertSpaceAfter?$(t):(o=draftJs.Modifier.insertText(t.getCurrentContent(),t.getSelection()," ",t.getCurrentInlineStyle()),$(draftJs.EditorState.push(t,o,"insert-characters"))))),O()}function J(e,t,n){var r=getSelectionInfo(e),o=e.getCurrentContent(),e=r.linkKey,r=void 0;e&&(r=o.getEntity(e).getData()),c({urlData:r,urlKey:e,toolbarPosition:n?l.toolbarPosition:void 0,anchorUrlPopover:n?document.getElementById(k+"-"+t+"-control-button-toolbar"):document.getElementById(k+"-"+t+"-control-button"),urlIsMedia:"media"===t||void 0})}function U(e,t){J(t||v,"media",e)}var O=function(){N(),y(0),ne()},K=function(){return m.length<autocompleteMinSearchCharCount?[]:T.current.items.filter(function(e){return 0<e.keys.filter(function(e){return e.includes(m)}).length}).splice(0,M)},$=function(e){E(e)},G=function(){z(),i.onFocus&&i.onFocus()},z=function(){d(!0),setTimeout(function(){var e;return null===(e=C.current)||void 0===e?void 0:e.focus()},0)},H=function(){i.onSave&&i.onSave(JSON.stringify(draftJs.convertToRaw(v.getCurrentContent())))},Y=function(e,t){e=atomicBlockExists(e,i.customControls);e&&(t=ce(v,e.name.toUpperCase(),t,{selection:v.getCurrentContent().getSelectionAfter()}),ee(t))},W=function(t,e,n){var r=j(t,n),n=r.getFocusOffset()+1,o=r.merge({focusOffset:n});e.then(function(e){e=ce(I.current,t,e.data,{selection:o});$(e)}).catch(function(e){e||(e=draftJs.Modifier.removeRange(I.current.getCurrentContent(),o,"forward"),$(draftJs.EditorState.push(I.current,e,"remove-range")))})},j=function(e,t){var n=t||e+"...",t=I.current.getCurrentContent(),e=t.createEntity("ASYNC_ATOMICBLOCK","IMMUTABLE").getLastCreatedEntityKey(),e=draftJs.Modifier.insertText(I.current.getCurrentContent(),t.getSelectionAfter(),n,void 0,e),t=t.getSelectionAfter(),e=draftJs.EditorState.push(I.current,e,"insert-characters");return $(e),t},u=function(e,t,n,r){if("inline"===t)return oe(e);if("block"===t)return re(e);switch(e){case"UNDO":E(draftJs.EditorState.undo(v));break;case"REDO":E(draftJs.EditorState.redo(v));break;case"LINK":a=r,v.getSelection().isCollapsed()||J(v,"link",a);break;case"IMAGE":U(r);break;case"clear":void 0!==w.current&&(o=clearInlineStyles(v,w.current),a=getSelectionInfo(v),o=draftJs.EditorState.push(v,o,"change-inline-style"),E(draftJs.RichUtils.toggleBlockType(o,a.blockType)));break;case"save":H();break;default:!function(e,t){if(i.customControls)for(var n=0,r=i.customControls;n<r.length;n++){var o=r[n];if(o.name.toUpperCase()===e){o.onClick&&(setTimeout(function(){var e;return null===(e=C.current)||void 0===e?void 0:e.blur()},0),(o=o.onClick(v,o.name,document.getElementById(t)))?(o.getSelection().isCollapsed()?E:ee)(o):v.getSelection().isCollapsed()||ne());break}}}(e,n)}var o,a},V=function(e,t){e=e.getCurrentContent().getPlainText("").length;return isGreaterThan(e+t,i.maxLength)?"handled":"not-handled"},Q=function(e){void 0===e&&(e=!1);var t=null===(t=C.current)||void 0===t?void 0:t.editor;t&&(t.removeEventListener("mouseup",P),e&&t.addEventListener("mouseup",P))},X=function(e){var t=l.urlKey;if(!e)return t&&(r=v.getSelection(),E(draftJs.RichUtils.toggleLink(v,r,null))),void te();var n=v.getCurrentContent(),r=v,e={url:e,className:o.anchorLink};r=t?(n.replaceEntityData(t,e),draftJs.EditorState.push(v,n,"apply-entity")):(e=(n=n.createEntity("LINK","MUTABLE",e)).getLastCreatedEntityKey(),n=draftJs.EditorState.set(v,{currentContent:n}),draftJs.RichUtils.toggleLink(n,n.getSelection(),e)),ee(r)},Z=function(e,t,n,r,o){var a=l.urlKey;if(!e)return a&&(i=v.getSelection().getStartKey(),i=v.getCurrentContent().getBlockForKey(i),i=removeBlockFromMap(v,i),i=draftJs.EditorState.push(v,i,"remove-range"),E(i)),void te();var i=v.getCurrentContent(),o={url:e,width:t,height:n,alignment:r,type:o};o=a?(i.replaceEntityData(a,o),draftJs.EditorState.push(v,i,"apply-entity")):ce(v,"IMAGE",o),ee(draftJs.EditorState.forceSelection(o,o.getCurrentContent().getSelectionAfter())),R("")},ee=function(e){E(e),te()},te=function(){ne(),c(__assign(__assign({},l),{anchorUrlPopover:void 0,urlKey:void 0,urlIsMedia:void 0,urlData:void 0}))},ne=function(){setTimeout(function(){var e;return null===(e=C.current)||void 0===e?void 0:e.blur()},0),setTimeout(function(){var e;return null===(e=C.current)||void 0===e?void 0:e.focus()},1)},re=function(e){E(draftJs.RichUtils.toggleBlockType(v,e))},oe=function(e){E(draftJs.RichUtils.toggleInlineStyle(v,e))},ae=function(e){var t=draftJs.SelectionState.createEmpty(e.getKey()),t=draftJs.EditorState.forceSelection(I.current,t);I.current=t,R(e.getKey()),E(t),U(!1,t)},ie=function(){var e,t=JSON.parse(JSON.stringify(styleRenderMap));null!==(e=i.customControls)&&void 0!==e&&e.filter(function(e){return"inline"===e.type&&e.inlineStyle}).forEach(function(e){t[e.name.toUpperCase()]=e.inlineStyle}),w.current=t},le=function(){var e,t={};null!==(e=i.customControls)&&void 0!==e&&e.filter(function(e){return"block"===e.type&&e.blockWrapper}).forEach(function(e){t[e.name.toUpperCase()]={element:"div",wrapper:e.blockWrapper}}),x.current=draftJs.DefaultDraftBlockRenderMap.merge(blockRenderMap,Immutable.Map(t))},ce=function(e,t,n,r){t=e.getCurrentContent().createEntity(t,"IMMUTABLE",n),n=t.getLastCreatedEntityKey(),r=draftJs.EditorState.set(e,__assign({currentContent:t},r));return draftJs.AtomicBlockUtils.insertAtomicBlock(r,n," ")},f=void 0===i.toolbar||i.toolbar,p=i.inlineToolbarControls||defaultInlineToolbarControls,h=void 0===i.readOnly||!i.readOnly,a="",e=null;return s||v.getCurrentContent().hasText()||(e=React__default.createElement("div",{className:classNames(o.editorContainer,o.placeHolder,((t={})[o.error]=i.error,t)),tabIndex:0,onFocus:function(){!1!==D.current?(G(),D.current=!1):z()}},i.label||""),a=o.hidePlaceholder),React__default.createElement("div",{id:k+"-root",className:o.root},React__default.createElement("div",{id:k+"-container",className:classNames(o.container,((t={})[o.inheritFontSize]=i.inheritFontSize,t))},i.autocomplete&&L.current?React__default.createElement(Autocomplete$1,{items:K(),top:L.current.top,left:L.current.left,onClick:q,selectedIndex:_}):null,i.inlineToolbar&&h&&l.toolbarPosition?React__default.createElement(Paper,{className:o.inlineToolbar,style:{top:l.toolbarPosition.top,left:l.toolbarPosition.left}},React__default.createElement(Toolbar,{id:k,editorState:v,onClick:u,controls:p,customControls:r,inlineMode:!0,isActive:!0,editorRef:C})):null,f?React__default.createElement(Toolbar,{id:k,editorState:v,onClick:u,controls:n,customControls:r,className:o.toolbar,disabled:!h,size:i.toolbarButtonSize,isActive:s}):null,e,React__default.createElement("div",{id:k+"-editor",className:o.editor},React__default.createElement("div",{id:k+"-editor-container",className:classNames(a,o.editorContainer,((a={})[o.editorReadOnly]=!h,a[o.error]=i.error,a)),onMouseDown:function(){F.current=!0},onBlur:function(){F.current=!1,d(!1),i.onBlur&&i.onBlur(),l.anchorUrlPopover||c(__assign(__assign({},l),{toolbarPosition:void 0}))}},React__default.createElement(draftJs.Editor,__assign({blockRenderMap:(void 0===x.current&&le(),x.current),blockRendererFn:function(e){if("atomic"===e.getType()){var t=v.getCurrentContent(),n=e.getEntityAt(0);if(n){n=t.getEntity(n).getType();if("IMAGE"===n)return{component:Media$1,editable:!1,props:{onClick:ae,readOnly:i.readOnly,focusKey:b}};n=atomicBlockExists(n.toLowerCase(),i.customControls);if(n)return{component:n.atomicComponent,editable:!1,props:t.getEntity(e.getEntityAt(0)).getData()}}}return null},customStyleFn:function(e){var n=(void 0===w.current&&ie(),w.current);return e.toJS().reduce(function(e,t){return n[t]},{})},editorState:v,onChange:$,onFocus:function(){var e;G(),!0!==F.current?(e=draftJs.EditorState.forceSelection(v,v.getSelection()),setTimeout(function(){return E(draftJs.EditorState.moveFocusToEnd(e))},0)):F.current=!1},readOnly:i.readOnly,handleKeyCommand:function(t,e){var n=draftJs.RichUtils.handleKeyCommand(e,t);if(n)return $(n),"handled";if(t.includes("mui-autocomplete"))return"mui-autocomplete-insert"===t&&q(),"mui-autocomplete-end"===t&&O(),"handled";if(i.keyCommands){n=i.keyCommands.find(function(e){return e.name===t});if(n){e=n.callback(e);return $(e),"handled"}}return"not-handled"},handleBeforeInput:function(e,t){var n,r,o;return" "===e&&m.length?N():B.current?g(m+e):(r=function(t){if(i.autocomplete){var e=i.autocomplete.strategies.filter(function(e){return e.triggerChar===t});return e.length?e[0]:void 0}}(e))&&(T.current=r,(o=null===(n=C.current)||void 0===n?void 0:n.editor)&&(r=(e=getEditorBounds(o)).editorRect,n=e.selectionRect,e=getLineNumber(v),e=n?n.top:r.top+lineHeight*e,n=(n||r).left,r={top:o.offsetTop+(e-r.top)+lineHeight,left:o.offsetLeft+(n-r.left)},B.current||(B.current=I.current.getSelection()),L.current=r)),V(t,1)},handlePastedText:function(e,t,n){return V(n,e.length)},handleReturn:function(e,t){return V(t,1)},keyBindingFn:function(t){if(hasCommandModifier(t)&&i.keyCommands){var e=i.keyCommands.find(function(e){return e.key===t.keyCode});if(e)return e.name}if(m){var n=function(e){var t=K().length,n=t<M?t:M;switch(e.key){case"ArrowDown":return y(0===_&&1===t||_+1===n?0:_+1<n?_+1:_),"mui-autocomplete-navigate";case"ArrowUp":return y(_?_-1:n-1),"mui-autocomplete-navigate";case"Enter":return"mui-autocomplete-insert";case"Escape":return"mui-autocomplete-end";default:return null}}(t);if(n)return n}var r=draftJs.getDefaultKeyBinding(t);return e=r,n=I.current.getCurrentContent().getLastBlock().getText(),"backspace"===e&&T.current&&n.substr(n.length-1)===T.current.triggerChar?N():L.current&&"backspace"===e&&m.length?g(m.substr(0,m.length-1)):L.current||"backspace"!==e&&"split-block"!==e||N(),r},ref:C},i.draftEditorProps)))),l.anchorUrlPopover?React__default.createElement(UrlPopover$1,{data:l.urlData,anchor:l.anchorUrlPopover,onConfirm:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];(e?Z:X).apply(void 0,t)},isMedia:l.urlIsMedia}):null))},MUIRichTextEditor$1=styles$6.withStyles(styles$5,{withTheme:!0,name:"MUIRichTextEditor"})(React.forwardRef(MUIRichTextEditor));exports.default=MUIRichTextEditor$1;
