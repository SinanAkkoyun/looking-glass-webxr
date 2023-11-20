(function(b,I){typeof exports=="object"&&typeof module<"u"?I(exports,require("@lookingglass/webxr-polyfill/src/api/index"),require("@lookingglass/webxr-polyfill/src/api/XRSystem"),require("@lookingglass/webxr-polyfill/src/WebXRPolyfill"),require("holoplay-core"),require("@lookingglass/webxr-polyfill/src/devices/XRDevice"),require("@lookingglass/webxr-polyfill/src/api/XRSpace"),require("gl-matrix"),require("@lookingglass/webxr-polyfill/src/api/XRWebGLLayer")):typeof define=="function"&&define.amd?define(["exports","@lookingglass/webxr-polyfill/src/api/index","@lookingglass/webxr-polyfill/src/api/XRSystem","@lookingglass/webxr-polyfill/src/WebXRPolyfill","holoplay-core","@lookingglass/webxr-polyfill/src/devices/XRDevice","@lookingglass/webxr-polyfill/src/api/XRSpace","gl-matrix","@lookingglass/webxr-polyfill/src/api/XRWebGLLayer"],I):(b=typeof globalThis<"u"?globalThis:b||self,I(b["Looking Glass WebXR"]={},b["@lookingglass/webxr-polyfill/src/api/index"],b["@lookingglass/webxr-polyfill/src/api/XRSystem"],b["@lookingglass/webxr-polyfill/src/WebXRPolyfill"],b.holoPlayCore,b["@lookingglass/webxr-polyfill/src/devices/XRDevice"],b["@lookingglass/webxr-polyfill/src/api/XRSpace"],b.glMatrix,b["@lookingglass/webxr-polyfill/src/api/XRWebGLLayer"]))})(this,function(b,I,O,we,z,Ce,xe,v,ce){"use strict";var Ct=Object.defineProperty;var xt=(b,I,O)=>I in b?Ct(b,I,{enumerable:!0,configurable:!0,writable:!0,value:O}):b[I]=O;var L=(b,I,O)=>(xt(b,typeof I!="symbol"?I+"":I,O),O);const Y=n=>n&&typeof n=="object"&&"default"in n?n:{default:n};function ye(n){if(n&&n.__esModule)return n;const i=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(n){for(const e in n)if(e!=="default"){const r=Object.getOwnPropertyDescriptor(n,e);Object.defineProperty(i,e,r.get?r:{enumerable:!0,get:()=>n[e]})}}return i.default=n,Object.freeze(i)}const ue=Y(I),Ee=Y(O),Re=Y(we),Te=ye(z),Le=Y(Ce),ke=Y(xe),Se=Y(ce),te=1.6;var ne;(function(n){n[n.Swizzled=0]="Swizzled",n[n.Center=1]="Center",n[n.Quilt=2]="Quilt"})(ne||(ne={}));class Fe extends EventTarget{constructor(e){super();L(this,"_calibration",{configVersion:"1.0",pitch:{value:45},slope:{value:-5},center:{value:-.5},viewCone:{value:40},invView:{value:1},verticalAngle:{value:0},DPI:{value:338},screenW:{value:250},screenH:{value:250},flipImageX:{value:0},flipImageY:{value:0},flipSubp:{value:0},serial:"LKG-DEFAULT-#####"});L(this,"_viewControls",{tileHeight:512,numViews:this.quiltHeight*this.quiltWidth,trackballX:0,trackballY:0,targetX:0,targetY:te,targetZ:-.5,targetDiam:2,fovy:13/180*Math.PI,depthiness:1.25,inlineView:ne.Center,capturing:!1,quiltResolution:3840,popup:null,XRSession:null,lkgCanvas:null,appCanvas:null});L(this,"LookingGlassDetected");this._viewControls={...this._viewControls,...e},this.syncCalibration()}syncCalibration(){new Te.Client(e=>{if(e.devices.length<1){console.log("No Looking Glass devices found");return}e.devices.length>1&&console.log("More than one Looking Glass device found... using the first one"),this.calibration=e.devices[0].calibration})}addEventListener(e,r,t){super.addEventListener(e,r,t)}onConfigChange(){this.dispatchEvent(new Event("on-config-changed"))}get calibration(){return this._calibration}set calibration(e){this._calibration={...this._calibration,...e},this.onConfigChange()}updateViewControls(e){e!=null&&(this._viewControls={...this._viewControls,...e},this.onConfigChange())}get tileHeight(){return Math.round(this.framebufferHeight/this.quiltHeight)}get quiltResolution(){return this._viewControls.quiltResolution}set quiltResolution(e){this.updateViewControls({quiltResolution:e})}get numViews(){return this._viewControls.numViews}set numViews(e){this.updateViewControls({numViews:e})}get targetX(){return this._viewControls.targetX}set targetX(e){this.updateViewControls({targetX:e})}get targetY(){return this._viewControls.targetY}set targetY(e){this.updateViewControls({targetY:e})}get targetZ(){return this._viewControls.targetZ}set targetZ(e){this.updateViewControls({targetZ:e})}get trackballX(){return this._viewControls.trackballX}set trackballX(e){this.updateViewControls({trackballX:e})}get trackballY(){return this._viewControls.trackballY}set trackballY(e){this.updateViewControls({trackballY:e})}get targetDiam(){return this._viewControls.targetDiam}set targetDiam(e){this.updateViewControls({targetDiam:e})}get fovy(){return this._viewControls.fovy}set fovy(e){this.updateViewControls({fovy:e})}get depthiness(){return this._viewControls.depthiness}set depthiness(e){this.updateViewControls({depthiness:e})}get inlineView(){return this._viewControls.inlineView}set inlineView(e){this.updateViewControls({inlineView:e})}get capturing(){return this._viewControls.capturing}set capturing(e){this.updateViewControls({capturing:e})}get popup(){return this._viewControls.popup}set popup(e){this.updateViewControls({popup:e})}get XRSession(){return this._viewControls.XRSession}set XRSession(e){this.updateViewControls({XRSession:e})}get lkgCanvas(){return this._viewControls.lkgCanvas}set lkgCanvas(e){this.updateViewControls({lkgCanvas:e})}get appCanvas(){return this._viewControls.appCanvas}set appCanvas(e){this.updateViewControls({appCanvas:e})}get aspect(){return this._calibration.screenW.value/this._calibration.screenH.value}get tileWidth(){return Math.round(this.framebufferWidth/this.quiltWidth)}get framebufferWidth(){return this._calibration.screenW.value<7e3?this._viewControls.quiltResolution:7680}get quiltWidth(){return this.calibration.screenW.value==1536?8:this.calibration.screenW.value==3840||this.calibration.screenW.value>7e3?5:8}get quiltHeight(){return this.calibration.screenW.value==1536?6:this.calibration.screenW.value==3840||this.calibration.screenW.value>7e3?9:6}get framebufferHeight(){return this._calibration.screenW.value<7e3?this._viewControls.quiltResolution:4320}get viewCone(){return this._calibration.viewCone.value*this.depthiness/180*Math.PI}get tilt(){return this._calibration.screenH.value/(this._calibration.screenW.value*this._calibration.slope.value)*(this._calibration.flipImageX.value?-1:1)}set tilt(e){}get subp(){return 1/(this._calibration.screenW.value*3)}get pitch(){const e=this._calibration.screenW.value/this._calibration.DPI.value;return this._calibration.pitch.value*e*Math.cos(Math.atan(1/this._calibration.slope.value))}}let ie=null;function V(){return ie==null&&(ie=new Fe),ie}function de(n){const i=V();n!=null&&i.updateViewControls(n)}async function _e(n){const i=V();let e=2;function r(){if(i.appCanvas!=null)try{let t=i.appCanvas.toDataURL();const o=document.createElement("a");o.style.display="none",o.href=t,o.download=`hologram_qs${i.quiltWidth}x${i.quiltHeight}a${i.aspect}.png`,document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(t)}catch(t){console.error("Error while capturing canvas data:",t)}finally{i.inlineView=e}}n&&n.addEventListener("click",()=>{e=i.inlineView;const t=j.getInstance();if(!t){console.warn("LookingGlassXRDevice not initialized");return}i.inlineView=2,t.captureScreenshot=!0,setTimeout(()=>{t.screenshotCallback=r},100)})}function Ie(){let n=document.createElement("style");document.head.appendChild(n);let i=`
	/* Basic thumb styling for WebKit browsers */
	.looking-glass-input::-webkit-slider-thumb {
		background: radial-gradient(76.09% 1304.32% at 87.24% 100%, #A055FA 0%, #5F15E8 100%);
		border: 2px solid #FFFFFF;
		border-radius: 22px;
		-webkit-appearance: none; /* This is important to override browser defaults */
		width: 24px; /* Set a width and height for the thumb */
		height: 24px;
		cursor: pointer;
		box-shadow: -6px 8px 8px -4.5px rgba(0, 0, 0, 0.16), 0px 0px 12px 1px rgba(0, 0, 0, 0.14);
        border-radius: 22px;
	}
	
	.looking-glass-input::-moz-range-thumb {
		background: radial-gradient(76.09% 1304.32% at 87.24% 100%, #A055FA 0%, #5F15E8 100%);
		border: 2px solid #FFFFFF;
		border-radius: 22px;
		-webkit-appearance: none; /* This is important to override browser defaults */
		width: 20px; /* Set a width and height for the thumb */
		height: 20px;
		cursor: pointer;
		box-shadow: -6px 8px 8px -4.5px rgba(0, 0, 0, 0.16), 0px 0px 12px 1px rgba(0, 0, 0, 0.14);
        border-radius: 22px;
	}
	
	/* Override the default appearance of the range input */
	input[type="range"].looking-glass-input {
		-webkit-appearance: none;
		width: 100%;
		height: 8px;
		margin-top: 16px;
		background: rgba(255, 255, 255, 0.40);
		outline: none;
		opacity: 1;
		border-radius: 8px;
		-webkit-transition: 0.2s;
		transition: opacity 0.2s;
	}
    `;n.appendChild(document.createTextNode(i))}const Pe={backgroundColor:"rgba(40, 39, 63, 0.90)",borderColor:"#FFFFFF1A",borderWidth:1,position:"fixed",zIndex:"1000",paddingRight:"24px",paddingLeft:"24px",padding:"15px",width:"360px",height:"504px",maxWidth:"calc(100vw - 18px)",whiteSpace:"nowrap",color:"white",borderRadius:"10px",right:"15px",bottom:"15px",flex:"row"},pe={width:"100%",display:"flex",justifyContent:"start",alignItems:"center",textAlign:"left",fontWeight:"bold",marginBottom:"8px"},Ae={display:"block",fontFamily:"Helvetica Neue",fontStyle:"normal",fontWeight:"700",fontSize:"14px",lineHeight:"20px",alignItems:"center",letterSpacing:"-0.2px"},Ve={display:"flex",flexDirection:"column",alignItems:"left",padding:"0px",gap:"16px",paddingRight:"16px",paddingLeft:"16px"},De={order:2,flexGrow:0,width:"100%",height:"91px"},he={display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%"},fe={display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%",gap:"8px"},Be={border:"none",background:"none",cursor:"pointer",opacity:"40%",hover:"opacity: 100%"},Me={border:"none",cursor:"pointer",background:"radial-gradient(76.09% 1304.32% at 87.24% 100%, #A055FA 0%, #5F15E8 100%)",width:"100%",height:"48px",left:"0px",top:"308px",borderRadius:"8px",color:"white",fontFamily:"Helvetica Neue",fontStyle:"normal",fontWeight:"700",fontSize:"18px",lineHeight:"24px",outline:"none",boxShadow:"none"},He={border:"none",cursor:"pointer",width:"100%",background:"none",height:"48px",left:"0px",top:"308px",borderRadius:"8px",color:"white",fontFamily:"Helvetica Neue",fontStyle:"normal",fontWeight:"700",fontSize:"18px",lineHeight:"24px",outline:"none",boxShadow:"none"},Xe={display:"flex",flexDirection:"row",background:"#28273F",padding:"4px",borderRadius:"8px"},$={border:"none",cursor:"pointer",background:"radial-gradient(76.09% 1304.32% at 87.24% 100%, #A055FA 0%, #5F15E8 100%)",flexGrow:1,height:"48px",borderRadius:"8px",color:"white",fontFamily:"Helvetica Neue",fontStyle:"normal",fontWeight:"700",fontSize:"18px",lineHeight:"24px",outline:"none",boxShadow:"none"},K={border:"none",cursor:"pointer",background:"rgba(40, 39, 63, 0.90)",height:"48px",flexGrow:1,borderRadius:"8px",color:"white",fontFamily:"Helvetica Neue",fontStyle:"normal",fontWeight:"700",fontSize:"18px",lineHeight:"24px",outline:"none",boxShadow:"none"},Ne={cursor:"pointer",left:"calc(50% - 50px)",width:"280px",background:"radial-gradient(76.09% 1304.32% at 87.24% 100%, #403E6C 0%, #1F1E37 100%)",borderRadius:"8px",position:"absolute",fontFamily:"Helvetica Neue",fontStyle:"normal",fontWeight:"700",fontSize:"18px",lineHeight:"24px",bottom:"20px",padding:"12px 6px",color:"#fff",textAlign:"center",outline:"none",zIndex:"9999"};function m(n,i){Object.assign(n.style,i)}function Q(n,i,e,r){const t=document.createElementNS("http://www.w3.org/2000/svg","svg");return t.setAttribute("width",`${r}px`),t.setAttribute("height",`${r}px`),t.setAttribute("viewBox",`0 0 ${r} ${r}`),t.setAttribute("fill","none"),t.setAttribute("xmlns","http://www.w3.org/2000/svg"),We(t,i),t}function We(n,i,e){for(let r=0;r<i.length;r++){const t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("fill-rule","evenodd"),t.setAttribute("clip-rule","evenodd"),t.setAttribute("d",i[r]),t.setAttribute("fill","white"),n.appendChild(t)}}const be={fillRule:"evenodd",clipRule:"evenodd",fill:"white",width:"16px",height:"20px",display:"block"},me={fillRule:"evenodd",clipRule:"evenodd",fill:"white",width:"24px",height:"24px",display:"block",opacity:"40%"},Ge=["M29 16.2743V23.6543C29 24.58 28.5114 25.4286 27.7143 25.8786L21.2857 29.5814C20.8871 29.8129 20.45 29.9286 20 29.9286C19.55 29.9286 19.1129 29.8129 18.7143 29.5814L18.0018 29.171C18.0022 29.0134 17.9894 28.8522 17.9624 28.6882C17.801 27.6951 17.4588 26.7641 16.9708 25.9295L19.11 27.21V20.6971L13.17 17.3V22.5773C12.5794 22.3251 11.9526 22.1412 11.2996 22.0352L11.2879 22.0333L11.2761 22.0316C11.1832 22.0176 11.0911 22.0082 11 22.0032V16.2743C11 15.3486 11.4886 14.5 12.2857 14.0371L18.7143 10.3471C19.1129 10.1157 19.55 10 20 10C20.45 10 20.8871 10.1157 21.2857 10.3471L27.7143 14.05C28.5114 14.5 29 15.3486 29 16.2743ZM15.6704 27.8281L12.2857 25.8786C11.5941 25.4881 11.1347 24.7977 11.0253 24.0171L11.0323 24.0183C11.2863 24.0618 11.5349 24.121 11.7771 24.195C13.5676 24.7418 15.0071 26.0923 15.6704 27.8281ZM14.31 15.5029L20 18.87L25.69 15.5029L20 12.07L14.31 15.5029ZM20.89 27.21L26.83 23.6543V17.3L20.89 20.6971V27.21Z","M10 30L10 27.3992C11.4387 27.3992 12.6 28.5609 12.6 30L10 30ZM15.122 30C14.6974 30 14.342 29.6879 14.2727 29.2631C13.9607 27.4599 12.5394 26.0381 10.7367 25.726C10.312 25.6566 10 25.3012 10 24.8764C10 24.3475 10.4593 23.9314 10.9793 24.0094C13.5447 24.4256 15.5727 26.4455 15.9887 29.0117C16.0754 29.5319 15.6507 30 15.122 30Z"],Ue=["M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM11.94 18.43C12.6138 18.43 13.16 17.8838 13.16 17.21C13.16 16.5362 12.6138 15.99 11.94 15.99C11.2662 15.99 10.72 16.5362 10.72 17.21C10.72 17.8838 11.2662 18.43 11.94 18.43ZM13.3319 13.415C13.342 13.3946 13.3522 13.3742 13.3624 13.364C13.6395 12.9577 14.0255 12.6192 14.4168 12.2761C15.3197 11.4846 16.2508 10.6682 15.9383 8.93513C15.643 7.21448 14.2685 5.79926 12.5479 5.54472C10.4505 5.23928 8.5975 6.53232 8.03752 8.38534C7.86444 8.97586 8.31242 9.57656 8.92331 9.57656H9.12693C9.54437 9.57656 9.88036 9.2813 10.0229 8.91477C10.3487 8.00863 11.3058 7.38756 12.3646 7.61155C13.342 7.81518 14.0547 8.78241 13.9631 9.78019C13.8941 10.5576 13.3388 10.9875 12.7225 11.4647C12.3379 11.7624 11.9296 12.0785 11.601 12.5088L11.5908 12.4986C11.5732 12.5163 11.5589 12.5407 11.5442 12.5661C11.5334 12.5846 11.5223 12.6036 11.5094 12.6208C11.4941 12.6463 11.4763 12.6717 11.4585 12.6972C11.4407 12.7226 11.4228 12.7481 11.4076 12.7735C11.3159 12.9161 11.2447 13.0586 11.1836 13.2215C11.1785 13.2419 11.1683 13.2571 11.1581 13.2724C11.1479 13.2877 11.1378 13.303 11.1327 13.3233C11.1225 13.3335 11.1225 13.3437 11.1225 13.3539C11.0003 13.7204 10.9189 14.1582 10.9189 14.6775H12.9653C12.9653 14.4229 12.9959 14.1989 13.0671 13.9851C13.0875 13.9138 13.118 13.8426 13.1486 13.7713C13.1588 13.7306 13.169 13.6899 13.1893 13.6593C13.23 13.5779 13.2809 13.4964 13.3318 13.415L13.3319 13.415Z"],Oe=["M17.09 9.83203H15.5V4.83203C15.5 4.28203 15.05 3.83203 14.5 3.83203H10.5C9.95 3.83203 9.5 4.28203 9.5 4.83203V9.83203H7.91C7.02 9.83203 6.57 10.912 7.2 11.542L11.79 16.132C12.18 16.522 12.81 16.522 13.2 16.132L17.79 11.542C18.42 10.912 17.98 9.83203 17.09 9.83203ZM5.5 19.832C5.5 20.382 5.95 20.832 6.5 20.832H18.5C19.05 20.832 19.5 20.382 19.5 19.832C19.5 19.282 19.05 18.832 18.5 18.832H6.5C5.95 18.832 5.5 19.282 5.5 19.832Z"],qe=["M9.5 2.33203C8.39543 2.33203 7.5 3.22746 7.5 4.33203H6.5C5.39543 4.33203 4.5 5.22746 4.5 6.33203V11.332H6.5V6.33203H7.5C7.5 7.4366 8.39543 8.33203 9.5 8.33203H15.5C16.6046 8.33203 17.5 7.4366 17.5 6.33203H18.5V20.332H6.5V17.332H4.5V20.332C4.5 21.4366 5.39543 22.332 6.5 22.332H18.5C19.6046 22.332 20.5 21.4366 20.5 20.332V6.33203C20.5 5.22746 19.6046 4.33203 18.5 4.33203H17.5C17.5 3.22746 16.6046 2.33203 15.5 2.33203H9.5ZM9.5 4.33203H15.5V6.33203H9.5V4.33203ZM4.5 15.332H13.0871L10.7933 17.6248L12.2072 19.0393L16.2072 15.0411C16.3948 14.8536 16.5002 14.5993 16.5002 14.3341C16.5003 14.0689 16.395 13.8145 16.2075 13.6269L12.2075 9.62508L10.793 11.039L13.085 13.332H4.5V15.332Z"],ae={width:"24px",height:"24px",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ye={width:"40px",height:"40px",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function je(){return Q(ae,Oe,be,24)}function Ze(){return Q(ae,Ue,me,24)}function ze(){return Q(Ye,Ge,be,40)}function $e(){return Q(ae,qe,me,24)}function Ke(){const n=[];for(let i=0;i<=10*12;i+=12)n.push(`${i+"\xB0"}`);return n}function Qe(n){const i=document.createElement("div");m(i,he),n.appendChild(i);const e=Ke();return e.forEach(r=>{const t=document.createElement("p");t.style.fontSize="12px",t.style.lineHeight="16px",t.style.color="rgba(255, 255, 255, 0.40)",t.textContent=r,i.appendChild(t)}),e}function Je(){const n=[];for(let i=0;i<=10*.2;i+=.2){const e=i.toFixed(1);n.push(e)}return n}function et(n){const i=document.createElement("div");m(i,he),n.appendChild(i);const e=Je();return e.forEach(r=>{const t=document.createElement("p");t.style.fontSize="12px",t.style.lineHeight="16px",t.style.color="rgba(255, 255, 255, 0.40)",t.textContent=r,i.appendChild(t)}),e}function tt(){var i;const n=V();if(n.lkgCanvas==null)console.warn("window placement called without a valid XR Session!");else{let e=function(s){const c=document.createElement("div");c.style.marginBottom="8px",m(c,Xe),A.appendChild(c);const u=document.createElement("button");u.innerText="Center",m(u,n.inlineView===1?$:K),c.appendChild(u);const d=document.createElement("button");d.innerText="Quilt",m(d,n.inlineView===2?$:K),c.appendChild(d);const E=N=>{n[s]=N};return d.onclick=()=>{d.classList.add("active"),m(d,$),u.classList.remove("active"),m(u,K),E("2")},u.onclick=()=>{u.classList.add("active"),m(u,$),d.classList.remove("active"),m(d,K),E("1")},c},r=function(){let s=w.d-w.a,c=w.w-w.s;s&&c&&(s*=Math.sqrt(.5),c*=Math.sqrt(.5));const u=n.trackballX,d=n.trackballY,E=Math.cos(u)*s-Math.sin(u)*Math.cos(d)*c,N=-Math.sin(d)*c,k=-Math.sin(u)*s-Math.cos(u)*Math.cos(d)*c;n.targetX=n.targetX+E*n.targetDiam*.03,n.targetY=n.targetY+N*n.targetDiam*.03,n.targetZ=n.targetZ+k*n.targetDiam*.03,requestAnimationFrame(r)};const t=document.createElement("style");document.head.appendChild(t),(i=t.sheet)==null||i.insertRule("#LookingGlassWebXRControls * { font-family: sans-serif }");const o=document.createElement("div");o.id="LookingGlassWebXRControls",o.className="controlsBackground",m(o,Pe);const l=document.createElement("div");o.appendChild(l),m(l,Ve);const g=document.createElement("div");m(g,pe),l.appendChild(g);const f=document.createElement("div");m(f,pe),g.appendChild(f);const D=document.createElement("span");D.innerText="Casting to Looking Glass",f.appendChild(ze()),f.appendChild(D);const x=document.createElement("button");g.appendChild(x),m(x,Be),x.appendChild(Ze()),x.onclick=()=>{window.open("https://docs.lookingglassfactory.com/developer-tools/webxr","_blank")};const P=document.createElement("button");m(P,Me),P.id="screenshotbutton";const H=document.createElement("div");m(H,fe),P.appendChild(H);const G=je();H.appendChild(G);const X=document.createElement("span");X.innerText="Save Hologram",H.appendChild(X);const y=document.createElement("button");y.id="copybutton",m(y,He);const B=document.createElement("div");m(B,fe),y.appendChild(B);const q=$e();B.appendChild(q);const M=document.createElement("span");M.innerText="Copy Config",B.appendChild(M),y.addEventListener("click",()=>{M.innerText="Copied!",nt(n),setTimeout(()=>{M.innerText="Copy Config"},300)});const A=document.createElement("div");A.style.display="inline-flex",A.style.flexDirection="column",A.style.gap="16px",A.style.alignContent="start",l.appendChild(A);const U=(s,c,u)=>{const d=document.createElement("div");d.style.marginBottom="8px",A.appendChild(d),m(d,De);const E=s,N=n[s],k=document.createElement("label");d.appendChild(k),k.innerText=u.label,k.setAttribute("for",E),m(k,Ae),k.title=u.title,E==="fovy"?Qe(d):E==="depthiness"&&et(d);const p=document.createElement("input");if(d.appendChild(p),Object.assign(p,c),p.id=E,p.className="looking-glass-input",p.title=u.title,p.value=c.value!==void 0?c.value:N,c.type==="range"){const S=(parseFloat(p.value)-parseFloat(p.min))/(parseFloat(p.max)-parseFloat(p.min))*100,F=`linear-gradient(90deg, #ffffff ${S}%, rgba(255, 255, 255, 0.20) ${S}%)`;p.style.backgroundImage=F}const ee=S=>{n[s]=S};p.oninput=()=>{if(c.type==="range"){const S=(parseFloat(p.value)-parseFloat(p.min))/(parseFloat(p.max)-parseFloat(p.min))*100,F=`linear-gradient(90deg, #ffffff ${S}%, rgba(255, 255, 255, 0.08) ${S}%)`;p.style.backgroundImage=F;const se=c.type==="range"?parseFloat(p.value):c.type==="checkbox"?p.checked:p.value;ee(se)}};const oe=S=>{let F=S(n[s]);u.fixRange&&(F=u.fixRange(F),p.max=Math.max(parseFloat(p.max),F).toString(),p.min=Math.min(parseFloat(p.min),F).toString()),p.value=F,ee(F)};return c.type==="range"&&(p.onwheel=S=>{oe(F=>F+Math.sign(S.deltaX-S.deltaY)*c.step)}),d};e("inlineView"),U("fovy",{type:"range",min:1/180*Math.PI,max:120.1/180*Math.PI,step:1/180*Math.PI},{label:"Field of view",title:"perspective fov (degrades stereo effect)",fixRange:s=>Math.max(1/180*Math.PI,Math.min(s,120.1/180*Math.PI))}),U("depthiness",{type:"range",min:0,max:2,step:.01},{label:"Depthiness",title:"exaggerates depth by multiplying the width of the view cone",fixRange:s=>Math.max(0,s),stringify:s=>`${s.toFixed(2)}x`}),l.appendChild(P),l.appendChild(y),n.lkgCanvas.oncontextmenu=s=>{s.preventDefault()},n.lkgCanvas.addEventListener("wheel",s=>{const c=n.targetDiam,u=1.1,d=Math.log(c)/Math.log(u);return n.targetDiam=Math.pow(u,d+s.deltaY*.01)}),n.lkgCanvas.addEventListener("mousemove",s=>{const c=s.movementX,u=-s.movementY;if(s.buttons&2||s.buttons&1&&(s.shiftKey||s.ctrlKey)){const d=n.trackballX,E=n.trackballY,N=-Math.cos(d)*c+Math.sin(d)*Math.sin(E)*u,k=-Math.cos(E)*u,p=Math.sin(d)*c+Math.cos(d)*Math.sin(E)*u;n.targetX=n.targetX+N*n.targetDiam*.001,n.targetY=n.targetY+k*n.targetDiam*.001,n.targetZ=n.targetZ+p*n.targetDiam*.001}else s.buttons&1&&(n.trackballX=n.trackballX-c*.01,n.trackballY=n.trackballY-u*.01)});const w={w:0,a:0,s:0,d:0};return n.lkgCanvas.addEventListener("keydown",s=>{switch(s.code){case"KeyW":w.w=1;break;case"KeyA":w.a=1;break;case"KeyS":w.s=1;break;case"KeyD":w.d=1;break}}),n.lkgCanvas.addEventListener("keyup",s=>{switch(s.code){case"KeyW":w.w=0;break;case"KeyA":w.a=0;break;case"KeyS":w.s=0;break;case"KeyD":w.d=0;break}}),requestAnimationFrame(r),setTimeout(()=>{_e(P)},1e3),o}}function nt(n){let i=n.targetX,e=n.targetY,r=n.targetZ,t=`${Math.round(n.fovy/Math.PI*180)} * Math.PI / 180`,o=n.targetDiam,l=n.trackballX,g=n.trackballY,f=n.depthiness;const D={targetX:i,targetY:e,targetZ:r,fovy:t,targetDiam:o,trackballX:l,trackballY:g,depthiness:f};let x=JSON.stringify(D,null,4);navigator.clipboard.writeText(x)}let J;const it=(n,i)=>{const e=V();if(e.lkgCanvas==null){console.warn("window placement called without a valid XR Session!");return}else if(n==!1)rt(e,J);else{J==null&&(J=tt()),e.lkgCanvas.style.position="fixed",e.lkgCanvas.style.bottom="0",e.lkgCanvas.style.left="0",e.lkgCanvas.width=e.calibration.screenW.value,e.lkgCanvas.height=e.calibration.screenH.value,document.body.appendChild(J);try{const r="getScreenDetails"in window;if(console.log(r,"Screen placement API exists"),!r)throw new Error("Screen Placement API not supported");at(e.lkgCanvas,e,i)}catch{console.log("user did not allow window placement, using normal popup instead"),ve(e,e.lkgCanvas,i)}}};async function at(n,i,e){const r=await window.getScreenDetails();console.log(r);const t=r.screens.filter(o=>o.label.includes("LKG"))[0];if(console.log(t,"monitors"),t===void 0){console.log("no Looking Glass monitor detected - manually opening popup window"),ve(i,n,e);return}else{console.log("monitor ID",t.label,"serial number",i.calibration);const o=[`left=${t.left}`,`top=${t.top}`,`width=${t.width}`,`height=${t.height}`,"menubar=no","toolbar=no","location=no","status=no","resizable=yes","scrollbars=no","fullscreenEnabled=true"].join(",");i.popup=window.open("","new",o),i.popup&&(i.popup.document.body.style.background="black",i.popup.document.body.style.transform="1.0",ge(i),i.popup.document.body.appendChild(n),console.assert(e),i.popup.onbeforeunload=e)}}function ve(n,i,e){n.popup=window.open("",void 0,"width=640,height=360"),n.popup&&(n.popup.document.title="Looking Glass Window (fullscreen me on Looking Glass!)",n.popup.document.body.style.background="black",n.popup.document.body.style.transform="1.0",ge(n),n.popup.document.body.appendChild(i),console.assert(e),n.popup.onbeforeunload=e)}function rt(n,i){var e;(e=i.parentElement)==null||e.removeChild(i),n.popup&&(n.popup.onbeforeunload=null,n.popup.close(),n.popup=null)}function ge(n){n.popup&&n.popup.document.addEventListener("keydown",i=>{i.ctrlKey&&(i.key==="="||i.key==="-"||i.key==="+")&&i.preventDefault()})}const W=Symbol("LookingGlassXRWebGLLayer");class ot extends Se.default{constructor(i,e,r){super(i,e,r);const t=V();t.appCanvas=e.canvas,t.lkgCanvas=document.createElement("canvas"),t.lkgCanvas.tabIndex=0;const o=t.lkgCanvas.getContext("2d",{alpha:!1});t.lkgCanvas.addEventListener("dblclick",function(){this.requestFullscreen()});const l=this[ce.PRIVATE].config,g=e.createTexture();let f,D;const x=e.createFramebuffer(),P=e.getExtension("OES_vertex_array_object"),H=34229,G=P?P.bindVertexArrayOES.bind(P):e.bindVertexArray.bind(e);(l.depth||l.stencil)&&(l.depth&&l.stencil?D={format:e.DEPTH_STENCIL,attachment:e.DEPTH_STENCIL_ATTACHMENT}:l.depth?D={format:e.DEPTH_COMPONENT16,attachment:e.DEPTH_ATTACHMENT}:l.stencil&&(D={format:e.STENCIL_INDEX8,attachment:e.STENCIL_ATTACHMENT}),f=e.createRenderbuffer());let X=NaN,y=NaN;const B=(a,R,T,h,C)=>{X=C.framebufferWidth,y=C.framebufferHeight,q(a,R,C.framebufferWidth,C.framebufferHeight),T&&M(a,T,h,C.framebufferWidth,C.framebufferHeight)},q=(a,R,T,h)=>{const C=a.getParameter(a.TEXTURE_BINDING_2D);a.bindTexture(a.TEXTURE_2D,R),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,T,h,0,a.RGBA,a.UNSIGNED_BYTE,null),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.bindTexture(a.TEXTURE_2D,C)},M=(a,R,T,h,C)=>{const _=a.getParameter(a.RENDERBUFFER_BINDING);a.bindRenderbuffer(a.RENDERBUFFER,R),a.renderbufferStorage(a.RENDERBUFFER,T.format,h,C),a.bindRenderbuffer(a.RENDERBUFFER,_)},A=(a,R,T,h,C,_)=>{const le=a.getParameter(a.FRAMEBUFFER_BINDING);a.bindFramebuffer(a.FRAMEBUFFER,R),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,T,0),(_.depth||_.stencil)&&a.framebufferRenderbuffer(a.FRAMEBUFFER,h.attachment,a.RENDERBUFFER,C),a.bindFramebuffer(a.FRAMEBUFFER,le)};B(e,g,f,D,t),t.addEventListener("on-config-changed",()=>{(t.framebufferWidth!==X||t.framebufferHeight!==y)&&B(e,g,f,D,t)}),A(e,x,g,D,f,l);const U=`
		attribute vec2 a_position;
		varying vec2 v_texcoord;
		void main() {
		  gl_Position = vec4(a_position * 2.0 - 1.0, 0.0, 1.0);
		  v_texcoord = a_position;
		}
	  `;function w(a,R,T){const h=a.createShader(R);return a.shaderSource(h,T),a.compileShader(h),a.getShaderParameter(h,a.COMPILE_STATUS)?h:(console.warn(a.getShaderInfoLog(h)),null)}function s(a,R,T){let h=a.createProgram();const C=w(a,a.VERTEX_SHADER,R),_=w(a,a.FRAGMENT_SHADER,T);return C===null||_===null?(console.error("There was a problem with shader construction"),null):(a.attachShader(h,C),a.attachShader(h,_),a.linkProgram(h),a.getProgramParameter(h,a.LINK_STATUS)?h:(console.warn(a.getProgramInfoLog(h)),null))}let c,u,d,E;const N=(a,R,T)=>{const h=T(R);if(h===u)return;u=h;const C=w(a,a.FRAGMENT_SHADER,h);if(C===null)return;c&&a.deleteShader(c),c=C;const _=s(a,U,h);if(_===null){console.warn("There was a problem with shader construction");return}d=a.getAttribLocation(_,"a_position"),E=a.getUniformLocation(_,"u_viewType");const le=a.getUniformLocation(_,"u_texture"),wt=a.getParameter(a.CURRENT_PROGRAM);a.useProgram(_),a.uniform1i(le,0),a.useProgram(wt),k&&a.deleteProgram(k),k=_};console.log(z.Shader(t));let k=s(e,U,z.Shader(t));k===null&&console.warn("There was a problem with shader construction"),t.addEventListener("on-config-changed",()=>{N(e,t,z.Shader)});const p=P?P.createVertexArrayOES():e.createVertexArray(),ee=e.createBuffer(),oe=e.getParameter(e.ARRAY_BUFFER_BINDING),S=e.getParameter(H);G(p),e.bindBuffer(e.ARRAY_BUFFER,ee),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(d),e.vertexAttribPointer(d,2,e.FLOAT,!1,0,0),G(S),e.bindBuffer(e.ARRAY_BUFFER,oe);const F=()=>{console.assert(this[W].LookingGlassEnabled),e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer);const a=e.getParameter(e.COLOR_CLEAR_VALUE),R=e.getParameter(e.DEPTH_CLEAR_VALUE),T=e.getParameter(e.STENCIL_CLEAR_VALUE);e.clearColor(0,0,0,0),e.clearDepth(1),e.clearStencil(0),e.clear(e.DEPTH_BUFFER_BIT|e.COLOR_BUFFER_BIT|e.STENCIL_BUFFER_BIT),e.clearColor(a[0],a[1],a[2],a[3]),e.clearDepth(R),e.clearStencil(T)};function se(){if(!t.appCanvas||!t.lkgCanvas)return;(t.appCanvas.width!==t.framebufferWidth||t.appCanvas.height!==t.framebufferHeight)&&(t.appCanvas.width,t.appCanvas.height,t.appCanvas.width=t.framebufferWidth,t.appCanvas.height=t.framebufferHeight);const a=ft();bt(),mt(),vt(),gt(),ht(a)}function ht(a){e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,a.texture0Binding),e.activeTexture(a.activeTexture),e.useProgram(a.program),e.bindRenderbuffer(e.RENDERBUFFER,a.renderbufferBinding),e.bindFramebuffer(e.FRAMEBUFFER,a.framebufferBinding),a.scissorTest?e.enable(e.SCISSOR_TEST):e.disable(e.SCISSOR_TEST),a.stencilTest?e.enable(e.STENCIL_TEST):e.disable(e.STENCIL_TEST),a.depthTest?e.enable(e.DEPTH_TEST):e.disable(e.DEPTH_TEST),a.blend?e.enable(e.BLEND):e.disable(e.BLEND),a.cullFace?e.enable(e.CULL_FACE):e.disable(e.CULL_FACE),G(a.VAO)}function ft(){let a=e.getParameter(e.ACTIVE_TEXTURE);e.activeTexture(e.TEXTURE0);let R=e.getParameter(e.TEXTURE_BINDING_2D);return{VAO:e.getParameter(e.VERTEX_ARRAY_BINDING),cullFace:e.getParameter(e.CULL_FACE),blend:e.getParameter(e.BLEND),depthTest:e.getParameter(e.DEPTH_TEST),stencilTest:e.getParameter(e.STENCIL_TEST),scissorTest:e.getParameter(e.SCISSOR_TEST),viewport:e.getParameter(e.VIEWPORT),framebufferBinding:e.getParameter(e.FRAMEBUFFER_BINDING),renderbufferBinding:e.getParameter(e.RENDERBUFFER_BINDING),program:e.getParameter(e.CURRENT_PROGRAM),activeTexture:a,texture0Binding:R}}function bt(){e.bindFramebuffer(e.FRAMEBUFFER,null),e.useProgram(k),G(p),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,g),e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.STENCIL_TEST),e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight)}function mt(){e.uniform1i(E,0),e.drawArrays(e.TRIANGLES,0,6)}function vt(){if(!t.lkgCanvas||!t.appCanvas){console.warn("Looking Glass Canvas is not defined");return}o==null||o.clearRect(0,0,t.lkgCanvas.width,t.lkgCanvas.height),o==null||o.drawImage(t.appCanvas,0,0,t.framebufferWidth,t.framebufferHeight,0,0,t.calibration.screenW.value,t.calibration.screenH.value)}function gt(){if(!t.appCanvas){console.warn("Looking Glass Canvas is not defined");return}t.inlineView!==0&&(t.capturing&&t.appCanvas.width!==t.framebufferWidth&&(t.appCanvas.width=t.framebufferWidth,t.appCanvas.height=t.framebufferHeight,e.viewport(0,0,t.framebufferHeight,t.framebufferWidth)),e.uniform1i(E,t.inlineView),e.drawArrays(e.TRIANGLES,0,6))}window.addEventListener("unload",()=>{t.popup&&t.popup.close(),t.popup=null}),this[W]={LookingGlassEnabled:!1,framebuffer:x,clearFramebuffer:F,blitTextureToDefaultFramebufferIfNeeded:se,moveCanvasToWindow:it}}get framebuffer(){return this[W].LookingGlassEnabled?this[W].framebuffer:null}get framebufferWidth(){return V().framebufferWidth}get framebufferHeight(){return V().framebufferHeight}}const Z=class extends Le.default{constructor(i){super(i),this.sessions=new Map,this.viewSpaces=[],this.basePoseMatrix=v.mat4.create(),this.inlineProjectionMatrix=v.mat4.create(),this.inlineInverseViewMatrix=v.mat4.create(),this.LookingGlassProjectionMatrices=[],this.LookingGlassInverseViewMatrices=[],this.captureScreenshot=!1,this.screenshotCallback=null,Z.instance||(Z.instance=this)}static getInstance(){return Z.instance}onBaseLayerSet(i,e){const r=this.sessions.get(i);r.baseLayer=e;const t=V(),o=e[W];o.LookingGlassEnabled=r.immersive,r.immersive&&(t.XRSession=this.sessions.get(i),t.popup==null?o.moveCanvasToWindow(!0,()=>{this.endSession(i)}):console.warn("attempted to assign baselayer twice?"))}isSessionSupported(i){return i==="inline"||i==="immersive-vr"}isFeatureSupported(i){switch(i){case"viewer":return!0;case"local":return!0;case"local-floor":return!0;case"bounded-floor":return!1;case"unbounded":return!1;default:return console.warn("LookingGlassXRDevice.isFeatureSupported: feature not understood:",i),!1}}async requestSession(i,e){if(!this.isSessionSupported(i))return Promise.reject();const r=i!=="inline",t=new lt(i,e);return this.sessions.set(t.id,t),r&&this.dispatchEvent("@@webxr-polyfill/vr-present-start",t.id),Promise.resolve(t.id)}requestAnimationFrame(i){return this.global.requestAnimationFrame(i)}cancelAnimationFrame(i){this.global.cancelAnimationFrame(i)}onFrameStart(i,e){const r=this.sessions.get(i),t=V();if(r.immersive){const o=Math.tan(.5*t.fovy),l=.5*t.targetDiam/o,g=l-t.targetDiam,f=this.basePoseMatrix;v.mat4.fromTranslation(f,[t.targetX,t.targetY,t.targetZ]),v.mat4.rotate(f,f,t.trackballX,[0,1,0]),v.mat4.rotate(f,f,-t.trackballY,[1,0,0]),v.mat4.translate(f,f,[0,0,l]);for(let x=0;x<t.numViews;++x){const P=(x+.5)/t.numViews-.5,H=Math.tan(t.viewCone*P),G=l*H,X=this.LookingGlassInverseViewMatrices[x]=this.LookingGlassInverseViewMatrices[x]||v.mat4.create();v.mat4.translate(X,f,[G,0,0]),v.mat4.invert(X,X);const y=Math.max(g+e.depthNear,.01),B=g+e.depthFar,q=y*o,M=q,A=-q,U=y*-H,w=t.aspect*q,s=U+w,c=U-w,u=this.LookingGlassProjectionMatrices[x]=this.LookingGlassProjectionMatrices[x]||v.mat4.create();v.mat4.set(u,2*y/(s-c),0,0,0,0,2*y/(M-A),0,0,(s+c)/(s-c),(M+A)/(M-A),-(B+y)/(B-y),-1,0,0,-2*B*y/(B-y),0)}r.baseLayer[W].clearFramebuffer()}else{const o=r.baseLayer.context,l=o.drawingBufferWidth/o.drawingBufferHeight;v.mat4.perspective(this.inlineProjectionMatrix,e.inlineVerticalFieldOfView,l,e.depthNear,e.depthFar),v.mat4.fromTranslation(this.basePoseMatrix,[0,te,0]),v.mat4.invert(this.inlineInverseViewMatrix,this.basePoseMatrix)}}onFrameEnd(i){this.sessions.get(i).baseLayer[W].blitTextureToDefaultFramebufferIfNeeded(),this.captureScreenshot&&this.screenshotCallback&&(this.screenshotCallback(),this.captureScreenshot=!1)}async requestFrameOfReferenceTransform(i,e){const r=v.mat4.create();switch(i){case"viewer":case"local":return v.mat4.fromTranslation(r,[0,-te,0]),r;case"local-floor":return r;default:throw new Error("XRReferenceSpaceType not understood")}}endSession(i){const e=this.sessions.get(i);e.immersive&&e.baseLayer&&(e.baseLayer[W].moveCanvasToWindow(!1),this.dispatchEvent("@@webxr-polyfill/vr-present-end",i)),e.ended=!0}doesSessionSupportReferenceSpace(i,e){const r=this.sessions.get(i);return r.ended?!1:r.enabledFeatures.has(e)}getViewSpaces(i){if(i==="immersive-vr"){const e=V();for(let r=this.viewSpaces.length;r<e.numViews;++r)this.viewSpaces[r]=new ct(r);return this.viewSpaces.length=e.numViews,this.viewSpaces}}getViewport(i,e,r,t,o){if(o===void 0){const g=this.sessions.get(i).baseLayer.context;t.x=0,t.y=0,t.width=g.drawingBufferWidth,t.height=g.drawingBufferHeight}else{const l=V(),g=o%l.quiltWidth,f=Math.floor(o/l.quiltWidth);t.x=l.framebufferWidth/l.quiltWidth*g,t.y=l.framebufferHeight/l.quiltHeight*f,t.width=l.framebufferWidth/l.quiltWidth,t.height=l.framebufferHeight/l.quiltHeight}return!0}getProjectionMatrix(i,e){return e===void 0?this.inlineProjectionMatrix:this.LookingGlassProjectionMatrices[e]||v.mat4.create()}getBasePoseMatrix(){return this.basePoseMatrix}getBaseViewMatrix(){return this.inlineInverseViewMatrix}_getViewMatrixByIndex(i){return this.LookingGlassInverseViewMatrices[i]=this.LookingGlassInverseViewMatrices[i]||v.mat4.create()}getInputSources(){return[]}getInputPose(i,e,r){return null}onWindowResize(){}};let j=Z;L(j,"instance",null);let st=0;class lt{constructor(i,e){L(this,"mode");L(this,"immersive");L(this,"id");L(this,"baseLayer");L(this,"inlineVerticalFieldOfView");L(this,"ended");L(this,"enabledFeatures");this.mode=i,this.immersive=i==="immersive-vr"||i==="immersive-ar",this.id=++st,this.baseLayer=null,this.inlineVerticalFieldOfView=Math.PI*.5,this.ended=!1,this.enabledFeatures=e}}class ct extends ke.default{constructor(e){super();L(this,"viewIndex");this.viewIndex=e}get eye(){return"none"}_onPoseUpdate(e){this._inverseBaseMatrix=e._getViewMatrixByIndex(this.viewIndex)}}class re extends Re.default{constructor(e){super();L(this,"vrButton");L(this,"device");L(this,"isPresenting",!1);Ie(),de(e),this.loadPolyfill()}static async init(e){new re(e)}async loadPolyfill(){this.overrideDefaultVRButton(),console.warn('Looking Glass WebXR "polyfill" overriding native WebXR API.');for(const e in ue.default)this.global[e]=ue.default[e];this.global.XRWebGLLayer=ot,this.injected=!0,this.device=new j(this.global),this.xr=new Ee.default(Promise.resolve(this.device)),Object.defineProperty(this.global.navigator,"xr",{value:this.xr,configurable:!0})}async overrideDefaultVRButton(){this.vrButton=await ut("xrbutton"),this.vrButton&&this.device?(this.device.addEventListener("@@webxr-polyfill/vr-present-start",()=>{this.isPresenting=!0,this.updateVRButtonUI()}),this.device.addEventListener("@@webxr-polyfill/vr-present-end",()=>{this.isPresenting=!1,this.updateVRButtonUI()}),this.vrButton.addEventListener("click",e=>{this.updateVRButtonUI()}),this.updateVRButtonUI()):console.warn("Unable to find VRButton")}async updateVRButtonUI(){if(this.vrButton){await dt(100),m(this.vrButton,Ne),this.isPresenting?this.vrButton.innerHTML="EXIT LOOKING GLASS":this.vrButton.innerHTML="ENTER LOOKING GLASS";const e=220;this.vrButton.style.width=`${e}px`,this.vrButton.style.left=`calc(50% - ${e/2}px)`}}update(e){de(e)}}async function ut(n){return new Promise(i=>{const e=new MutationObserver(function(r){r.forEach(function(t){t.addedNodes.forEach(function(o){const l=o;l.id===n&&(i(l),e.disconnect())})})});e.observe(document.body,{subtree:!1,childList:!0}),setTimeout(()=>{e.disconnect(),i(null)},5e3)})}function dt(n){return new Promise(i=>setTimeout(i,n))}const pt=V();b.LookingGlassConfig=pt,b.LookingGlassWebXRPolyfill=re,Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
