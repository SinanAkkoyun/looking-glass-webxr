var oe = Object.defineProperty;
var ue = (i, t, e) => t in i ? oe(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var c = (i, t, e) => (ue(i, typeof t != "symbol" ? t + "" : t, e), e);
import X from "@lookingglass/webxr-polyfill/src/api/index";
import ce from "@lookingglass/webxr-polyfill/src/api/XRSystem";
import le from "@lookingglass/webxr-polyfill/src/WebXRPolyfill";
import * as he from "holoplay-core";
import { Shader as fe } from "holoplay-core";
import de from "@lookingglass/webxr-polyfill/src/devices/XRDevice";
import pe from "@lookingglass/webxr-polyfill/src/api/XRSpace";
import { mat4 as o } from "gl-matrix";
import ve, { PRIVATE as be } from "@lookingglass/webxr-polyfill/src/api/XRWebGLLayer";
const U = 1.6;
var N;
(function(i) {
  i[i.Swizzled = 0] = "Swizzled", i[i.Center = 1] = "Center", i[i.Quilt = 2] = "Quilt";
})(N || (N = {}));
class me extends EventTarget {
  constructor(e) {
    super();
    c(this, "_calibration", {
      configVersion: "1.0",
      pitch: { value: 45 },
      slope: { value: -5 },
      center: { value: -0.5 },
      viewCone: { value: 40 },
      invView: { value: 1 },
      verticalAngle: { value: 0 },
      DPI: { value: 338 },
      screenW: { value: 3840 },
      screenH: { value: 2160 },
      flipImageX: { value: 0 },
      flipImageY: { value: 0 },
      flipSubp: { value: 0 },
      serial: "",
      subpixelCells: [],
      CellPatternMode: { value: 0 }
    });
    c(this, "_viewControls", {
      tileHeight: 512,
      numViews: 48,
      trackballX: 0,
      trackballY: 0,
      targetX: 0,
      targetY: U,
      targetZ: -0.5,
      targetDiam: 2,
      fovy: 14 / 180 * Math.PI,
      depthiness: 1.25,
      inlineView: N.Center,
      capturing: !1,
      quiltResolution: null,
      columns: null,
      rows: null,
      popup: null,
      XRSession: null,
      lkgCanvas: null,
      appCanvas: null,
      subpixelMode: 1,
      filterMode: 1,
      gaussianSigma: 0.01,
      tanAngleOffset: 0,
      tanAngleUpOffset: 0
    });
    c(this, "LookingGlassDetected");
    this._viewControls = { ...this._viewControls, ...e }, this.syncCalibration();
  }
  syncCalibration() {
    new he.Client((e) => {
      if (e.devices.length < 1) {
        console.log("No Looking Glass devices found");
        return;
      }
      e.devices.length > 1 && console.log("More than one Looking Glass device found... using the first one"), this.calibration = e.devices[0].calibration;
    });
  }
  addEventListener(e, r, s) {
    super.addEventListener(e, r, s);
  }
  onConfigChange() {
    this.dispatchEvent(new Event("on-config-changed"));
  }
  get calibration() {
    return this._calibration;
  }
  set calibration(e) {
    this._calibration = {
      ...this._calibration,
      ...e
    }, this.onConfigChange();
  }
  updateViewControls(e) {
    e != null && (this._viewControls = {
      ...this._viewControls,
      ...e
    }, this.onConfigChange());
  }
  get tileHeight() {
    return Math.round(this.framebufferHeight / this.quiltHeight);
  }
  get quiltResolution() {
    if (this._viewControls.quiltResolution != null)
      return { width: this._viewControls.quiltResolution.width, height: this._viewControls.quiltResolution.height };
    {
      const e = this._calibration.serial;
      switch (!0) {
        case e.startsWith("LKG-2K"):
          return { width: 4096, height: 4096 };
        case e.startsWith("LKG-4K"):
          return { width: 4096, height: 4096 };
        case e.startsWith("LKG-8K"):
          return { width: 8192, height: 8192 };
        case e.startsWith("LKG-P"):
          return { width: 3360, height: 3360 };
        case e.startsWith("LKG-A"):
          return { width: 4096, height: 4096 };
        case e.startsWith("LKG-B"):
          return { width: 8192, height: 8192 };
        case e.startsWith("LKG-D"):
          return { width: 8192, height: 8192 };
        case e.startsWith("LKG-F"):
          return { width: 3360, height: 3360 };
        case e.startsWith("LKG-E"):
          return { width: 4092, height: 4092 };
        case e.startsWith("LKG-H"):
          return { width: 5995, height: 6e3 };
        case e.startsWith("LKG-J"):
          return { width: 5999, height: 5999 };
        case e.startsWith("LKG-K"):
          return { width: 8184, height: 8184 };
        case e.startsWith("LKG-L"):
          return { width: 8190, height: 8190 };
        default:
          return { width: 4096, height: 4096 };
      }
    }
  }
  set quiltResolution(e) {
    this.updateViewControls({ quiltResolution: e });
  }
  get numViews() {
    return this.quiltWidth * this.quiltHeight;
  }
  get targetX() {
    return this._viewControls.targetX;
  }
  set targetX(e) {
    this.updateViewControls({ targetX: e });
  }
  get targetY() {
    return this._viewControls.targetY;
  }
  set targetY(e) {
    this.updateViewControls({ targetY: e });
  }
  get targetZ() {
    return this._viewControls.targetZ;
  }
  set targetZ(e) {
    this.updateViewControls({ targetZ: e });
  }
  get trackballX() {
    return this._viewControls.trackballX;
  }
  set trackballX(e) {
    this.updateViewControls({ trackballX: e });
  }
  get trackballY() {
    return this._viewControls.trackballY;
  }
  set trackballY(e) {
    this.updateViewControls({ trackballY: e });
  }
  get targetDiam() {
    return this._viewControls.targetDiam;
  }
  set targetDiam(e) {
    this.updateViewControls({ targetDiam: e });
  }
  get fovy() {
    return this._viewControls.fovy;
  }
  set fovy(e) {
    this.updateViewControls({ fovy: e });
  }
  get depthiness() {
    return this._viewControls.depthiness;
  }
  set depthiness(e) {
    this.updateViewControls({ depthiness: e });
  }
  get inlineView() {
    return this._viewControls.inlineView;
  }
  set inlineView(e) {
    this.updateViewControls({ inlineView: e });
  }
  get tanAngleOffset() {
    return this._viewControls.tanAngleOffset;
  }
  set tanAngleOffset(e) {
    this.updateViewControls({ tanAngleOffset: e });
  }
  get tanAngleUpOffset() {
    return this._viewControls.tanAngleUpOffset;
  }
  set tanAngleUpOffset(e) {
    this.updateViewControls({ tanAngleUpOffset: e });
  }
  get capturing() {
    return this._viewControls.capturing;
  }
  set capturing(e) {
    this.updateViewControls({ capturing: e });
  }
  get subpixelMode() {
    return this._viewControls.subpixelMode;
  }
  set subpixelMode(e) {
    this.updateViewControls({ subpixelMode: e });
  }
  get filterMode() {
    return this._viewControls.filterMode;
  }
  set filterMode(e) {
    this.updateViewControls({ filterMode: e });
  }
  get gaussianSigma() {
    return this._viewControls.gaussianSigma;
  }
  set gaussianSigma(e) {
    this.updateViewControls({ gaussianSigma: e });
  }
  get popup() {
    return this._viewControls.popup;
  }
  set popup(e) {
    this.updateViewControls({ popup: e });
  }
  get XRSession() {
    return this._viewControls.XRSession;
  }
  set XRSession(e) {
    this.updateViewControls({ XRSession: e });
  }
  get lkgCanvas() {
    return this._viewControls.lkgCanvas;
  }
  set lkgCanvas(e) {
    this.updateViewControls({ lkgCanvas: e });
  }
  get appCanvas() {
    return this._viewControls.appCanvas;
  }
  set appCanvas(e) {
    this.updateViewControls({ appCanvas: e });
  }
  get columns() {
    return this._viewControls.columns;
  }
  set columns(e) {
    this.updateViewControls({ columns: e });
  }
  get rows() {
    return this._viewControls.rows;
  }
  set rows(e) {
    this.updateViewControls({ rows: e });
  }
  get aspect() {
    return this._calibration.screenW.value / this._calibration.screenH.value;
  }
  get tileWidth() {
    return Math.round(this.framebufferWidth / this.quiltWidth);
  }
  get framebufferWidth() {
    return this.quiltResolution.width;
  }
  get quiltWidth() {
    if (this._viewControls.columns != null)
      return this._viewControls.columns;
    const e = this._calibration.serial;
    switch (!0) {
      case e.startsWith("LKG-2K"):
        return 5;
      case e.startsWith("LKG-4K"):
        return 5;
      case e.startsWith("LKG-8K"):
        return 5;
      case e.startsWith("LKG-P"):
        return 8;
      case e.startsWith("LKG-A"):
        return 5;
      case e.startsWith("LKG-B"):
        return 5;
      case e.startsWith("LKG-D"):
        return 8;
      case e.startsWith("LKG-F"):
        return 8;
      case e.startsWith("LKG-E"):
        return 11;
      case e.startsWith("LKG-H"):
        return 11;
      case e.startsWith("LKG-J"):
        return 7;
      case e.startsWith("LKG-K"):
        return 11;
      case e.startsWith("LKG-L"):
        return 7;
      default:
        return 1;
    }
  }
  get quiltHeight() {
    if (this._viewControls.rows != null)
      return this._viewControls.rows;
    const e = this._calibration.serial;
    switch (!0) {
      case e.startsWith("LKG-2K"):
        return 9;
      case e.startsWith("LKG-4K"):
        return 9;
      case e.startsWith("LKG-8K"):
        return 9;
      case e.startsWith("LKG-P"):
        return 6;
      case e.startsWith("LKG-A"):
        return 9;
      case e.startsWith("LKG-B"):
        return 9;
      case e.startsWith("LKG-D"):
        return 9;
      case e.startsWith("LKG-F"):
        return 6;
      case e.startsWith("LKG-E"):
        return 6;
      case e.startsWith("LKG-H"):
        return 6;
      case e.startsWith("LKG-J"):
        return 7;
      case e.startsWith("LKG-K"):
        return 6;
      case e.startsWith("LKG-L"):
        return 7;
      default:
        return 1;
    }
  }
  get framebufferHeight() {
    return this.quiltResolution.height;
  }
  get viewCone() {
    return this._calibration.viewCone.value * this.depthiness / 180 * Math.PI;
  }
  get tilt() {
    return this._calibration.screenH.value / (this._calibration.screenW.value * this._calibration.slope.value) * (this._calibration.flipImageX.value ? -1 : 1);
  }
  get subp() {
    return 1 / (this._calibration.screenW.value * 3) * (this._calibration.flipImageX.value ? -1 : 1);
  }
  get pitch() {
    return this._calibration.pitch.value * this._calibration.screenW.value / this._calibration.DPI.value * Math.cos(Math.atan(1 / this._calibration.slope.value));
  }
  get subpixelCells() {
    const e = new Float32Array(6 * this._calibration.subpixelCells.length);
    return this._calibration.subpixelCells.forEach((r, s) => {
      r.ROffsetX /= this.calibration.screenW.value, r.ROffsetY /= this.calibration.screenH.value, r.GOffsetX /= this.calibration.screenW.value, r.GOffsetY /= this.calibration.screenH.value, r.BOffsetX /= this.calibration.screenW.value, r.BOffsetY /= this.calibration.screenH.value, e[s * 6 + 0] = r.ROffsetX, e[s * 6 + 1] = r.ROffsetY, e[s * 6 + 2] = r.GOffsetX, e[s * 6 + 3] = r.GOffsetY, e[s * 6 + 4] = r.BOffsetX, e[s * 6 + 5] = r.BOffsetY;
    }), e;
  }
}
let k = null;
function b() {
  return k == null && (k = new me()), k;
}
function O(i) {
  const t = b();
  i != null && t.updateViewControls(i);
}
function we(i) {
  const t = b();
  t.calibration = i;
}
let Ee;
const Ce = (i, t) => {
  const e = b();
  if (e.lkgCanvas == null) {
    console.warn("window placement called without a valid XR Session!");
    return;
  } else
    i == !1 ? Le(e, Ee) : (e.lkgCanvas.style.position = "fixed", e.lkgCanvas.style.bottom = "0", e.lkgCanvas.style.left = "0", e.lkgCanvas.width = e.calibration.screenW.value, e.lkgCanvas.height = e.calibration.screenH.value, "getScreenDetails" in window ? Re(e.lkgCanvas, e, t) : H(e, e.lkgCanvas, t));
};
async function Re(i, t, e) {
  const s = (await window.getScreenDetails()).screens.filter((a) => a.label.includes("LKG"))[0];
  if (s === void 0) {
    console.log("no Looking Glass monitor detected - manually opening popup window"), H(t, i, e);
    return;
  } else {
    const a = [
      `left=${s.left}`,
      `top=${s.top}`,
      `width=${s.width}`,
      `height=${s.height}`,
      "menubar=no",
      "toolbar=no",
      "location=no",
      "status=no",
      "resizable=yes",
      "scrollbars=no",
      "fullscreenEnabled=true"
    ].join(",");
    t.popup = window.open("", "new", a), t.popup && (t.popup.document.body.style.background = "black", t.popup.document.body.style.transform = "1.0", Y(t), t.popup.document.body.appendChild(i), console.assert(e), t.popup.onbeforeunload = e);
  }
}
function H(i, t, e) {
  i.popup = window.open("", void 0, "width=640,height=360"), i.popup && (i.popup.document.title = "Looking Glass Window (fullscreen me on Looking Glass!)", i.popup.document.body.style.background = "black", i.popup.document.body.style.transform = "1.0", Y(i), i.popup.document.body.appendChild(t), console.assert(e), i.popup.onbeforeunload = e);
}
function Le(i, t) {
  var e;
  (e = t.parentElement) == null || e.removeChild(t), i.popup && (i.popup.onbeforeunload = null, i.popup.close(), i.popup = null);
}
function Y(i) {
  i.popup && i.popup.document.addEventListener("keydown", (t) => {
    t.ctrlKey && (t.key === "=" || t.key === "-" || t.key === "+") && t.preventDefault();
  });
}
const w = Symbol("LookingGlassXRWebGLLayer");
class Te extends ve {
  constructor(t, e, r) {
    super(t, e, r);
    const s = b();
    s.appCanvas = e.canvas, s.lkgCanvas = document.createElement("canvas"), s.lkgCanvas.tabIndex = 0;
    const a = s.lkgCanvas.getContext("2d", { alpha: !1 });
    s.lkgCanvas.addEventListener("dblclick", function() {
      this.requestFullscreen();
    });
    const n = this[be].config, v = e.createTexture();
    let l, d;
    const A = e.createFramebuffer(), C = e.enable.bind(e), R = e.disable.bind(e), L = e.getExtension("OES_vertex_array_object"), S = 34229, h = L ? L.bindVertexArrayOES.bind(L) : e.bindVertexArray.bind(e), T = () => {
      const f = e.getParameter(e.TEXTURE_BINDING_2D);
      if (e.bindTexture(e.TEXTURE_2D, v), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, s.framebufferWidth, s.framebufferHeight, 0, e.RGBA, e.UNSIGNED_BYTE, null), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_BASE_LEVEL, 0), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAX_LEVEL, 0), e.bindTexture(e.TEXTURE_2D, f), l) {
        const g = e.getParameter(e.RENDERBUFFER_BINDING);
        e.bindRenderbuffer(e.RENDERBUFFER, l), e.renderbufferStorage(e.RENDERBUFFER, d.format, s.framebufferWidth, s.framebufferHeight), e.bindRenderbuffer(e.RENDERBUFFER, g);
      }
    };
    (n.depth || n.stencil) && (n.depth && n.stencil ? d = { format: e.DEPTH_STENCIL, attachment: e.DEPTH_STENCIL_ATTACHMENT } : n.depth ? d = { format: e.DEPTH_COMPONENT16, attachment: e.DEPTH_ATTACHMENT } : n.stencil && (d = { format: e.STENCIL_INDEX8, attachment: e.STENCIL_ATTACHMENT }), l = e.createRenderbuffer()), T(), s.addEventListener("on-config-changed", T);
    const F = e.getParameter(e.FRAMEBUFFER_BINDING);
    e.bindFramebuffer(e.FRAMEBUFFER, A), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, v, 0), (n.depth || n.stencil) && e.framebufferRenderbuffer(e.FRAMEBUFFER, d.attachment, e.RENDERBUFFER, l), e.bindFramebuffer(e.FRAMEBUFFER, F);
    const u = e.createProgram();
    if (!u)
      return;
    const E = e.createShader(e.VERTEX_SHADER);
    if (!E)
      return;
    e.attachShader(u, E);
    const m = e.createShader(e.FRAGMENT_SHADER);
    if (!m)
      return;
    e.attachShader(u, m);
    {
      const f = `#version 300 es
			in vec2 a_position;
			out vec2 v_texcoord;
			void main() {
			  gl_Position = vec4(a_position * 2.0 - 1.0, 0.0, 1.0);
			  v_texcoord = a_position;
			}
		  `;
      e.shaderSource(E, f), e.compileShader(E), e.getShaderParameter(E, e.COMPILE_STATUS) || console.warn(e.getShaderInfoLog(E));
    }
    let G, P, _;
    const y = () => {
      const f = fe(s);
      if (f === G || (G = f, !m))
        return;
      if (e.shaderSource(m, f), e.compileShader(m), !e.getShaderParameter(m, e.COMPILE_STATUS)) {
        console.warn(e.getShaderInfoLog(m));
        return;
      }
      if (!u)
        return;
      if (e.linkProgram(u), !e.getProgramParameter(u, e.LINK_STATUS)) {
        console.warn(e.getProgramInfoLog(u));
        return;
      }
      P = e.getAttribLocation(u, "a_position"), _ = e.getUniformLocation(u, "u_viewType");
      const g = e.getUniformLocation(u, "u_texture"), W = e.getUniformLocation(u, "subpixelData"), M = e.getParameter(e.CURRENT_PROGRAM);
      e.useProgram(u), e.uniform1i(g, 0), e.uniform1fv(W, s.subpixelCells), e.useProgram(M);
    };
    s.addEventListener("on-config-changed", y);
    const x = L ? L.createVertexArrayOES() : e.createVertexArray(), j = e.createBuffer(), $ = e.getParameter(e.ARRAY_BUFFER_BINDING), Z = e.getParameter(S);
    h(x), e.bindBuffer(e.ARRAY_BUFFER, j), e.bufferData(e.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]), e.STATIC_DRAW), e.enableVertexAttribArray(P), e.vertexAttribPointer(P, 2, e.FLOAT, !1, 0, 0), h(Z), e.bindBuffer(e.ARRAY_BUFFER, $);
    const z = () => {
      console.assert(this[w].LookingGlassEnabled), e.bindFramebuffer(e.FRAMEBUFFER, A);
      const f = e.getParameter(e.COLOR_CLEAR_VALUE), g = e.getParameter(e.DEPTH_CLEAR_VALUE), W = e.getParameter(e.STENCIL_CLEAR_VALUE);
      e.clearColor(0, 0, 0, 0), e.clearDepth(1), e.clearStencil(0), e.clear(e.DEPTH_BUFFER_BIT | e.COLOR_BUFFER_BIT | e.STENCIL_BUFFER_BIT), e.clearColor(f[0], f[1], f[2], f[3]), e.clearDepth(g), e.clearStencil(W);
    }, p = e.canvas;
    let B, V;
    const J = () => {
      if (!this[w].LookingGlassEnabled)
        return;
      (p.width !== s.calibration.screenW.value || p.height !== s.calibration.screenH.value) && s.capturing === !1 ? (B = p.width, V = p.height, p.width = s.calibration.screenW.value, p.height = s.calibration.screenH.value) : s.capturing === !0 && (B = p.width, V = p.height, p.width = s.framebufferWidth, p.height = s.framebufferHeight);
      const f = e.getParameter(S), g = e.getParameter(e.CULL_FACE), W = e.getParameter(e.BLEND), M = e.getParameter(e.DEPTH_TEST), Q = e.getParameter(e.STENCIL_TEST), ee = e.getParameter(e.SCISSOR_TEST), te = e.getParameter(e.VIEWPORT), se = e.getParameter(e.FRAMEBUFFER_BINDING), ie = e.getParameter(e.RENDERBUFFER_BINDING), re = e.getParameter(e.CURRENT_PROGRAM), ne = e.getParameter(e.ACTIVE_TEXTURE);
      {
        const ae = e.getParameter(e.TEXTURE_BINDING_2D);
        e.bindFramebuffer(e.FRAMEBUFFER, null), e.useProgram(u), h(x), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, v), e.disable(e.BLEND), e.disable(e.CULL_FACE), e.disable(e.DEPTH_TEST), e.disable(e.STENCIL_TEST), e.viewport(0, 0, e.drawingBufferWidth, e.drawingBufferHeight), e.uniform1i(_, 0), e.drawArrays(e.TRIANGLES, 0, 6), a == null || a.clearRect(0, 0, s.calibration.screenW.value, s.calibration.screenH.value), a == null || a.drawImage(p, 0, 0), s.inlineView !== 0 && (e.uniform1i(_, s.inlineView), e.drawArrays(e.TRIANGLES, 0, 6)), e.bindTexture(e.TEXTURE_2D, ae);
      }
      e.activeTexture(ne), e.useProgram(re), e.bindRenderbuffer(e.RENDERBUFFER, ie), e.bindFramebuffer(e.FRAMEBUFFER, se), e.viewport(...te), (ee ? C : R)(e.SCISSOR_TEST), (Q ? C : R)(e.STENCIL_TEST), (M ? C : R)(e.DEPTH_TEST), (W ? C : R)(e.BLEND), (g ? C : R)(e.CULL_FACE), h(f);
    };
    this[w] = {
      LookingGlassEnabled: !1,
      framebuffer: A,
      clearFramebuffer: z,
      blitTextureToDefaultFramebufferIfNeeded: J,
      moveCanvasToWindow: Ce,
      restoreOriginalCanvasDimensions: () => {
        B && V && (p.width = B, p.height = V, B = V = void 0);
      }
    };
  }
  get framebuffer() {
    return this[w].LookingGlassEnabled ? this[w].framebuffer : null;
  }
  get framebufferWidth() {
    return b().framebufferWidth;
  }
  get framebufferHeight() {
    return b().framebufferHeight;
  }
}
const I = class extends de {
  constructor(t) {
    super(t), this.sessions = /* @__PURE__ */ new Map(), this.viewSpaces = [], this.basePoseMatrix = o.create(), this.inlineProjectionMatrix = o.create(), this.inlineInverseViewMatrix = o.create(), this.LookingGlassProjectionMatrices = [], this.LookingGlassInverseViewMatrices = [], this.captureScreenshot = !1, this.screenshotCallback = null, I.instance || (I.instance = this);
  }
  static getInstance() {
    return I.instance;
  }
  onBaseLayerSet(t, e) {
    const r = this.sessions.get(t);
    r.baseLayer = e;
    const s = b(), a = e[w];
    a.LookingGlassEnabled = r.immersive, r.immersive && (s.XRSession = this.sessions.get(t), s.popup == null ? a.moveCanvasToWindow(!0, () => {
      this.endSession(t);
    }) : console.warn("attempted to assign baselayer twice?"));
  }
  isSessionSupported(t) {
    return t === "inline" || t === "immersive-vr";
  }
  isFeatureSupported(t) {
    switch (t) {
      case "viewer":
        return !0;
      case "local":
        return !0;
      case "local-floor":
        return !0;
      case "bounded-floor":
        return !1;
      case "unbounded":
        return !1;
      default:
        return console.warn("LookingGlassXRDevice.isFeatureSupported: feature not understood:", t), !1;
    }
  }
  async requestSession(t, e) {
    if (!this.isSessionSupported(t))
      return Promise.reject();
    const r = t !== "inline", s = new ge(t, e), a = b();
    return this.sessions.set(s.id, s), r && (this.dispatchEvent("@@webxr-polyfill/vr-present-start", s.id), window.addEventListener("unload", () => {
      a.popup && a.popup.close(), a.popup = null;
    })), Promise.resolve(s.id);
  }
  requestAnimationFrame(t) {
    return this.global.requestAnimationFrame(t);
  }
  cancelAnimationFrame(t) {
    this.global.cancelAnimationFrame(t);
  }
  onFrameStart(t, e) {
    const r = this.sessions.get(t), s = b();
    if (r.immersive) {
      const a = Math.tan(0.5 * s.fovy), n = 0.5 * s.targetDiam / a, v = n - s.targetDiam, l = this.basePoseMatrix;
      o.fromTranslation(l, [s.targetX, s.targetY, s.targetZ]), o.rotate(l, l, s.trackballX, [0, 1, 0]), o.rotate(l, l, -s.trackballY, [1, 0, 0]), o.translate(l, l, [0, 0, n]);
      for (let d = 0; d < s.numViews; ++d) {
        const A = (d + 0.5) / s.numViews - 0.5, C = Math.tan(s.viewCone * A) + s.tanAngleOffset, R = n * C, L = n * s.tanAngleUpOffset, S = this.LookingGlassInverseViewMatrices[d] = this.LookingGlassInverseViewMatrices[d] || o.create();
        o.translate(S, l, [R, L, 0]), o.invert(S, S);
        const h = Math.max(v + e.depthNear, 0.01), T = v + e.depthFar, F = h * a, u = h * -s.tanAngleUpOffset, E = u + F, m = u - F, G = h * -C, P = s.aspect * F, _ = G + P, y = G - P, x = this.LookingGlassProjectionMatrices[d] = this.LookingGlassProjectionMatrices[d] || o.create();
        o.set(x, 2 * h / (_ - y), 0, 0, 0, 0, 2 * h / (E - m), 0, 0, (_ + y) / (_ - y), (E + m) / (E - m), -(T + h) / (T - h), -1, 0, 0, -2 * T * h / (T - h), 0);
      }
    } else {
      const a = r.baseLayer.context, n = a.drawingBufferWidth / a.drawingBufferHeight;
      o.perspective(this.inlineProjectionMatrix, e.inlineVerticalFieldOfView, n, e.depthNear, e.depthFar), o.fromTranslation(this.basePoseMatrix, [0, U, 0]), o.invert(this.inlineInverseViewMatrix, this.basePoseMatrix), r.baseLayer[w].clearFramebuffer();
    }
  }
  onFrameEnd(t) {
    this.sessions.get(t).baseLayer[w].blitTextureToDefaultFramebufferIfNeeded(), this.captureScreenshot && this.screenshotCallback && (this.screenshotCallback(), this.captureScreenshot = !1);
  }
  async requestFrameOfReferenceTransform(t, e) {
    const r = o.create();
    switch (t) {
      case "viewer":
      case "local":
        return o.fromTranslation(r, [0, -U, 0]), r;
      case "local-floor":
        return r;
      default:
        throw new Error("XRReferenceSpaceType not understood");
    }
  }
  endSession(t) {
    const e = this.sessions.get(t);
    e.immersive && e.baseLayer && (e.baseLayer[w].moveCanvasToWindow(!1), e.baseLayer[w].LookingGlassEnabled = !1, e.baseLayer[w].restoreOriginalCanvasDimensions(), this.dispatchEvent("@@webxr-polyfill/vr-present-end", t)), e.ended = !0;
  }
  doesSessionSupportReferenceSpace(t, e) {
    const r = this.sessions.get(t);
    return r.ended ? !1 : r.enabledFeatures.has(e);
  }
  getViewSpaces(t) {
    if (t === "immersive-vr") {
      const e = b();
      for (let r = this.viewSpaces.length; r < e.numViews; ++r)
        this.viewSpaces[r] = new Se(r);
      return this.viewSpaces.length = e.numViews, this.viewSpaces;
    }
  }
  getViewport(t, e, r, s, a) {
    if (a === void 0) {
      const v = this.sessions.get(t).baseLayer.context;
      s.x = 0, s.y = 0, s.width = v.drawingBufferWidth, s.height = v.drawingBufferHeight;
    } else {
      const n = b(), v = a % n.quiltWidth, l = Math.floor(a / n.quiltWidth);
      s.x = n.framebufferWidth / n.quiltWidth * v, s.y = n.framebufferHeight / n.quiltHeight * l, s.width = n.framebufferWidth / n.quiltWidth, s.height = n.framebufferHeight / n.quiltHeight;
    }
    return !0;
  }
  getProjectionMatrix(t, e) {
    return e === void 0 ? this.inlineProjectionMatrix : this.LookingGlassProjectionMatrices[e] || o.create();
  }
  getBasePoseMatrix() {
    return this.basePoseMatrix;
  }
  getBaseViewMatrix() {
    return this.inlineInverseViewMatrix;
  }
  _getViewMatrixByIndex(t) {
    return this.LookingGlassInverseViewMatrices[t] = this.LookingGlassInverseViewMatrices[t] || o.create();
  }
  getInputSources() {
    return [];
  }
  getInputPose(t, e, r) {
    return null;
  }
  onWindowResize() {
  }
};
let D = I;
c(D, "instance", null);
let _e = 0;
class ge {
  constructor(t, e) {
    c(this, "mode");
    c(this, "immersive");
    c(this, "id");
    c(this, "baseLayer");
    c(this, "inlineVerticalFieldOfView");
    c(this, "ended");
    c(this, "enabledFeatures");
    this.mode = t, this.immersive = t === "immersive-vr" || t === "immersive-ar", this.id = ++_e, this.baseLayer = null, this.inlineVerticalFieldOfView = Math.PI * 0.5, this.ended = !1, this.enabledFeatures = e;
  }
}
class Se extends pe {
  constructor(e) {
    super();
    c(this, "viewIndex");
    this.viewIndex = e;
  }
  get eye() {
    return "none";
  }
  _onPoseUpdate(e) {
    this._inverseBaseMatrix = e._getViewMatrixByIndex(this.viewIndex);
  }
}
class q extends le {
  constructor(e) {
    super();
    c(this, "vrButton");
    c(this, "device");
    c(this, "isPresenting", !1);
    O(e), this.loadPolyfill();
  }
  static async init(e) {
    new q(e);
  }
  async loadPolyfill() {
    this.overrideDefaultVRButton(), console.warn('Looking Glass WebXR "polyfill" overriding native WebXR API.');
    for (const e in X)
      this.global[e] = X[e];
    this.global.XRWebGLLayer = Te, this.injected = !0, this.device = new D(this.global), this.xr = new ce(Promise.resolve(this.device)), Object.defineProperty(this.global.navigator, "xr", {
      value: this.xr,
      configurable: !0
    });
  }
  async overrideDefaultVRButton() {
    const e = K("VRButton"), r = K("ARButton");
    this.vrButton = await Promise.race([e, r]), this.vrButton && this.device ? (this.device.addEventListener("@@webxr-polyfill/vr-present-start", () => {
      this.isPresenting = !0, this.updateVRButtonUI();
    }), this.device.addEventListener("@@webxr-polyfill/vr-present-end", () => {
      this.isPresenting = !1, this.updateVRButtonUI();
    }), this.vrButton.addEventListener("click", (s) => {
      this.updateVRButtonUI();
    }), this.updateVRButtonUI()) : console.warn("Unable to find VRButton");
  }
  async updateVRButtonUI() {
    if (this.vrButton) {
      await Pe(100), this.isPresenting ? this.vrButton.innerHTML = "EXIT LOOKING GLASS" : this.vrButton.innerHTML = "ENTER LOOKING GLASS";
      const e = 220;
      this.vrButton.style.width = `${e}px`, this.vrButton.style.left = `calc(50% - ${e / 2}px)`;
    }
  }
  update(e) {
    O(e);
  }
  setCalibration(e) {
    we(e);
  }
}
async function K(i) {
  return new Promise((t) => {
    const e = new MutationObserver(function(r) {
      r.forEach(function(s) {
        s.addedNodes.forEach(function(a) {
          const n = a;
          n.id === i && (t(n), e.disconnect());
        });
      });
    });
    e.observe(document.body, { subtree: !1, childList: !0 }), setTimeout(() => {
      e.disconnect(), t(null);
    }, 5e3);
  });
}
function Pe(i) {
  return new Promise((t) => setTimeout(t, i));
}
const De = b();
export {
  De as LookingGlassConfig,
  q as LookingGlassWebXRPolyfill
};
