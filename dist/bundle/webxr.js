var kr = Object.defineProperty;
var Gr = (i, e, t) => e in i ? kr(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var ye = (i, e, t) => (Gr(i, typeof e != "symbol" ? e + "" : e, t), t);
const vt = Symbol("@@webxr-polyfill/EventTarget");
let ai = class {
  constructor() {
    this[vt] = {
      listeners: /* @__PURE__ */ new Map()
    };
  }
  /**
   * @param {string} type
   * @param {Function} listener
   */
  addEventListener(e, t) {
    if (typeof e != "string")
      throw new Error("`type` must be a string");
    if (typeof t != "function")
      throw new Error("`listener` must be a function");
    const a = this[vt].listeners.get(e) || [];
    a.push(t), this[vt].listeners.set(e, a);
  }
  /**
   * @param {string} type
   * @param {Function} listener
   */
  removeEventListener(e, t) {
    if (typeof e != "string")
      throw new Error("`type` must be a string");
    if (typeof t != "function")
      throw new Error("`listener` must be a function");
    const a = this[vt].listeners.get(e) || [];
    for (let o = a.length; o >= 0; o--)
      a[o] === t && a.pop();
  }
  /**
   * @param {string} type
   * @param {object} event
   */
  dispatchEvent(e, t) {
    const a = this[vt].listeners.get(e) || [], o = [];
    for (let h = 0; h < a.length; h++)
      o[h] = a[h];
    for (let h of o)
      h(t);
    typeof this[`on${e}`] == "function" && this[`on${e}`](t);
  }
};
const Vr = 1e-6;
let xe = typeof Float32Array < "u" ? Float32Array : Array;
function qe() {
  let i = new xe(16);
  return xe != Float32Array && (i[1] = 0, i[2] = 0, i[3] = 0, i[4] = 0, i[6] = 0, i[7] = 0, i[8] = 0, i[9] = 0, i[11] = 0, i[12] = 0, i[13] = 0, i[14] = 0), i[0] = 1, i[5] = 1, i[10] = 1, i[15] = 1, i;
}
function Ur(i, e) {
  return i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3], i[4] = e[4], i[5] = e[5], i[6] = e[6], i[7] = e[7], i[8] = e[8], i[9] = e[9], i[10] = e[10], i[11] = e[11], i[12] = e[12], i[13] = e[13], i[14] = e[14], i[15] = e[15], i;
}
function tt(i) {
  return i[0] = 1, i[1] = 0, i[2] = 0, i[3] = 0, i[4] = 0, i[5] = 1, i[6] = 0, i[7] = 0, i[8] = 0, i[9] = 0, i[10] = 1, i[11] = 0, i[12] = 0, i[13] = 0, i[14] = 0, i[15] = 1, i;
}
function Dt(i, e) {
  let t = e[0], a = e[1], o = e[2], h = e[3], d = e[4], u = e[5], m = e[6], v = e[7], y = e[8], R = e[9], x = e[10], _ = e[11], F = e[12], C = e[13], B = e[14], N = e[15], Q = t * u - a * d, P = t * m - o * d, I = t * v - h * d, G = a * m - o * u, O = a * v - h * u, W = o * v - h * m, z = y * C - R * F, Z = y * B - x * F, K = y * N - _ * F, D = R * B - x * C, V = R * N - _ * C, L = x * N - _ * B, M = Q * L - P * V + I * D + G * K - O * Z + W * z;
  return M ? (M = 1 / M, i[0] = (u * L - m * V + v * D) * M, i[1] = (o * V - a * L - h * D) * M, i[2] = (C * W - B * O + N * G) * M, i[3] = (x * O - R * W - _ * G) * M, i[4] = (m * K - d * L - v * Z) * M, i[5] = (t * L - o * K + h * Z) * M, i[6] = (B * I - F * W - N * P) * M, i[7] = (y * W - x * I + _ * P) * M, i[8] = (d * V - u * K + v * z) * M, i[9] = (a * K - t * V - h * z) * M, i[10] = (F * O - C * I + N * Q) * M, i[11] = (R * I - y * O - _ * Q) * M, i[12] = (u * Z - d * D - m * z) * M, i[13] = (t * D - a * Z + o * z) * M, i[14] = (C * P - F * G - B * Q) * M, i[15] = (y * G - R * P + x * Q) * M, i) : null;
}
function it(i, e, t) {
  let a = e[0], o = e[1], h = e[2], d = e[3], u = e[4], m = e[5], v = e[6], y = e[7], R = e[8], x = e[9], _ = e[10], F = e[11], C = e[12], B = e[13], N = e[14], Q = e[15], P = t[0], I = t[1], G = t[2], O = t[3];
  return i[0] = P * a + I * u + G * R + O * C, i[1] = P * o + I * m + G * x + O * B, i[2] = P * h + I * v + G * _ + O * N, i[3] = P * d + I * y + G * F + O * Q, P = t[4], I = t[5], G = t[6], O = t[7], i[4] = P * a + I * u + G * R + O * C, i[5] = P * o + I * m + G * x + O * B, i[6] = P * h + I * v + G * _ + O * N, i[7] = P * d + I * y + G * F + O * Q, P = t[8], I = t[9], G = t[10], O = t[11], i[8] = P * a + I * u + G * R + O * C, i[9] = P * o + I * m + G * x + O * B, i[10] = P * h + I * v + G * _ + O * N, i[11] = P * d + I * y + G * F + O * Q, P = t[12], I = t[13], G = t[14], O = t[15], i[12] = P * a + I * u + G * R + O * C, i[13] = P * o + I * m + G * x + O * B, i[14] = P * h + I * v + G * _ + O * N, i[15] = P * d + I * y + G * F + O * Q, i;
}
function xt(i, e, t) {
  let a = e[0], o = e[1], h = e[2], d = e[3], u = a + a, m = o + o, v = h + h, y = a * u, R = a * m, x = a * v, _ = o * m, F = o * v, C = h * v, B = d * u, N = d * m, Q = d * v;
  return i[0] = 1 - (_ + C), i[1] = R + Q, i[2] = x - N, i[3] = 0, i[4] = R - Q, i[5] = 1 - (y + C), i[6] = F + B, i[7] = 0, i[8] = x + N, i[9] = F - B, i[10] = 1 - (y + _), i[11] = 0, i[12] = t[0], i[13] = t[1], i[14] = t[2], i[15] = 1, i;
}
function Ui(i, e) {
  return i[0] = e[12], i[1] = e[13], i[2] = e[14], i;
}
function zi(i, e) {
  let t = e[0] + e[5] + e[10], a = 0;
  return t > 0 ? (a = Math.sqrt(t + 1) * 2, i[3] = 0.25 * a, i[0] = (e[6] - e[9]) / a, i[1] = (e[8] - e[2]) / a, i[2] = (e[1] - e[4]) / a) : e[0] > e[5] && e[0] > e[10] ? (a = Math.sqrt(1 + e[0] - e[5] - e[10]) * 2, i[3] = (e[6] - e[9]) / a, i[0] = 0.25 * a, i[1] = (e[1] + e[4]) / a, i[2] = (e[8] + e[2]) / a) : e[5] > e[10] ? (a = Math.sqrt(1 + e[5] - e[0] - e[10]) * 2, i[3] = (e[8] - e[2]) / a, i[0] = (e[1] + e[4]) / a, i[1] = 0.25 * a, i[2] = (e[6] + e[9]) / a) : (a = Math.sqrt(1 + e[10] - e[0] - e[5]) * 2, i[3] = (e[1] - e[4]) / a, i[0] = (e[8] + e[2]) / a, i[1] = (e[6] + e[9]) / a, i[2] = 0.25 * a), i;
}
function Qi(i, e, t, a, o) {
  let h = 1 / Math.tan(e / 2), d;
  return i[0] = h / t, i[1] = 0, i[2] = 0, i[3] = 0, i[4] = 0, i[5] = h, i[6] = 0, i[7] = 0, i[8] = 0, i[9] = 0, i[11] = -1, i[12] = 0, i[13] = 0, i[15] = 0, o != null && o !== 1 / 0 ? (d = 1 / (a - o), i[10] = (o + a) * d, i[14] = 2 * o * a * d) : (i[10] = -1, i[14] = -2 * a), i;
}
function ke() {
  let i = new xe(3);
  return xe != Float32Array && (i[0] = 0, i[1] = 0, i[2] = 0), i;
}
function mi(i) {
  var e = new xe(3);
  return e[0] = i[0], e[1] = i[1], e[2] = i[2], e;
}
function zr(i) {
  let e = i[0], t = i[1], a = i[2];
  return Math.sqrt(e * e + t * t + a * a);
}
function Ie(i, e, t) {
  let a = new xe(3);
  return a[0] = i, a[1] = e, a[2] = t, a;
}
function vi(i, e) {
  return i[0] = e[0], i[1] = e[1], i[2] = e[2], i;
}
function wt(i, e, t) {
  return i[0] = e[0] + t[0], i[1] = e[1] + t[1], i[2] = e[2] + t[2], i;
}
function wi(i, e, t) {
  return i[0] = e[0] * t, i[1] = e[1] * t, i[2] = e[2] * t, i;
}
function ei(i, e) {
  let t = e[0], a = e[1], o = e[2], h = t * t + a * a + o * o;
  return h > 0 && (h = 1 / Math.sqrt(h), i[0] = e[0] * h, i[1] = e[1] * h, i[2] = e[2] * h), i;
}
function oi(i, e) {
  return i[0] * e[0] + i[1] * e[1] + i[2] * e[2];
}
function Xt(i, e, t) {
  let a = e[0], o = e[1], h = e[2], d = t[0], u = t[1], m = t[2];
  return i[0] = o * m - h * u, i[1] = h * d - a * m, i[2] = a * u - o * d, i;
}
function Je(i, e, t) {
  let a = t[0], o = t[1], h = t[2], d = t[3], u = e[0], m = e[1], v = e[2], y = o * v - h * m, R = h * u - a * v, x = a * m - o * u, _ = o * x - h * R, F = h * y - a * x, C = a * R - o * y, B = d * 2;
  return y *= B, R *= B, x *= B, _ *= 2, F *= 2, C *= 2, i[0] = u + y + _, i[1] = m + R + F, i[2] = v + x + C, i;
}
function Qr(i, e) {
  let t = Ie(i[0], i[1], i[2]), a = Ie(e[0], e[1], e[2]);
  ei(t, t), ei(a, a);
  let o = oi(t, a);
  return o > 1 ? 0 : o < -1 ? Math.PI : Math.acos(o);
}
const Xr = zr;
(function() {
  let i = ke();
  return function(e, t, a, o, h, d) {
    let u, m;
    for (t || (t = 3), a || (a = 0), o ? m = Math.min(o * t + a, e.length) : m = e.length, u = a; u < m; u += t)
      i[0] = e[u], i[1] = e[u + 1], i[2] = e[u + 2], h(i, i, d), e[u] = i[0], e[u + 1] = i[1], e[u + 2] = i[2];
    return e;
  };
})();
function Wr() {
  let i = new xe(9);
  return xe != Float32Array && (i[1] = 0, i[2] = 0, i[3] = 0, i[5] = 0, i[6] = 0, i[7] = 0), i[0] = 1, i[4] = 1, i[8] = 1, i;
}
function Hr() {
  let i = new xe(4);
  return xe != Float32Array && (i[0] = 0, i[1] = 0, i[2] = 0, i[3] = 0), i;
}
function Yr(i) {
  let e = new xe(4);
  return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e;
}
function jr(i, e, t, a) {
  let o = new xe(4);
  return o[0] = i, o[1] = e, o[2] = t, o[3] = a, o;
}
function Zr(i, e) {
  return i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3], i;
}
function qr(i, e) {
  let t = e[0], a = e[1], o = e[2], h = e[3], d = t * t + a * a + o * o + h * h;
  return d > 0 && (d = 1 / Math.sqrt(d), i[0] = t * d, i[1] = a * d, i[2] = o * d, i[3] = h * d), i;
}
(function() {
  let i = Hr();
  return function(e, t, a, o, h, d) {
    let u, m;
    for (t || (t = 4), a || (a = 0), o ? m = Math.min(o * t + a, e.length) : m = e.length, u = a; u < m; u += t)
      i[0] = e[u], i[1] = e[u + 1], i[2] = e[u + 2], i[3] = e[u + 3], h(i, i, d), e[u] = i[0], e[u + 1] = i[1], e[u + 2] = i[2], e[u + 3] = i[3];
    return e;
  };
})();
function De() {
  let i = new xe(4);
  return xe != Float32Array && (i[0] = 0, i[1] = 0, i[2] = 0), i[3] = 1, i;
}
function $r(i, e, t) {
  t = t * 0.5;
  let a = Math.sin(t);
  return i[0] = a * e[0], i[1] = a * e[1], i[2] = a * e[2], i[3] = Math.cos(t), i;
}
function yi(i, e, t) {
  let a = e[0], o = e[1], h = e[2], d = e[3], u = t[0], m = t[1], v = t[2], y = t[3];
  return i[0] = a * y + d * u + o * v - h * m, i[1] = o * y + d * m + h * u - a * v, i[2] = h * y + d * v + a * m - o * u, i[3] = d * y - a * u - o * m - h * v, i;
}
function gt(i, e, t, a) {
  let o = e[0], h = e[1], d = e[2], u = e[3], m = t[0], v = t[1], y = t[2], R = t[3], x, _, F, C, B;
  return _ = o * m + h * v + d * y + u * R, _ < 0 && (_ = -_, m = -m, v = -v, y = -y, R = -R), 1 - _ > Vr ? (x = Math.acos(_), F = Math.sin(x), C = Math.sin((1 - a) * x) / F, B = Math.sin(a * x) / F) : (C = 1 - a, B = a), i[0] = C * o + B * m, i[1] = C * h + B * v, i[2] = C * d + B * y, i[3] = C * u + B * R, i;
}
function bi(i, e) {
  let t = e[0], a = e[1], o = e[2], h = e[3], d = t * t + a * a + o * o + h * h, u = d ? 1 / d : 0;
  return i[0] = -t * u, i[1] = -a * u, i[2] = -o * u, i[3] = h * u, i;
}
function Kr(i, e) {
  let t = e[0] + e[4] + e[8], a;
  if (t > 0)
    a = Math.sqrt(t + 1), i[3] = 0.5 * a, a = 0.5 / a, i[0] = (e[5] - e[7]) * a, i[1] = (e[6] - e[2]) * a, i[2] = (e[1] - e[3]) * a;
  else {
    let o = 0;
    e[4] > e[0] && (o = 1), e[8] > e[o * 3 + o] && (o = 2);
    let h = (o + 1) % 3, d = (o + 2) % 3;
    a = Math.sqrt(e[o * 3 + o] - e[h * 3 + h] - e[d * 3 + d] + 1), i[o] = 0.5 * a, a = 0.5 / a, i[3] = (e[h * 3 + d] - e[d * 3 + h]) * a, i[h] = (e[h * 3 + o] + e[o * 3 + h]) * a, i[d] = (e[d * 3 + o] + e[o * 3 + d]) * a;
  }
  return i;
}
function Jr(i, e, t, a) {
  let o = 0.5 * Math.PI / 180;
  e *= o, t *= o, a *= o;
  let h = Math.sin(e), d = Math.cos(e), u = Math.sin(t), m = Math.cos(t), v = Math.sin(a), y = Math.cos(a);
  return i[0] = h * m * y - d * u * v, i[1] = d * u * y + h * m * v, i[2] = d * m * v - h * u * y, i[3] = d * m * y + h * u * v, i;
}
const gi = Yr, en = jr, Wt = Zr, It = qr;
(function() {
  let i = ke(), e = Ie(1, 0, 0), t = Ie(0, 1, 0);
  return function(a, o, h) {
    let d = oi(o, h);
    return d < -0.999999 ? (Xt(i, e, o), Xr(i) < 1e-6 && Xt(i, t, o), ei(i, i), $r(a, i, Math.PI), a) : d > 0.999999 ? (a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 1, a) : (Xt(i, o, h), a[0] = i[0], a[1] = i[1], a[2] = i[2], a[3] = 1 + d, It(a, a));
  };
})();
(function() {
  let i = De(), e = De();
  return function(t, a, o, h, d, u) {
    return gt(i, a, d, u), gt(e, o, h, u), gt(t, i, e, 2 * u * (1 - u)), t;
  };
})();
(function() {
  let i = Wr();
  return function(e, t, a, o) {
    return i[0] = a[0], i[3] = a[1], i[6] = a[2], i[1] = o[0], i[4] = o[1], i[7] = o[2], i[2] = -t[0], i[5] = -t[1], i[8] = -t[2], It(e, Kr(e, i));
  };
})();
const ie = Symbol("@@webxr-polyfill/XRRigidTransform");
let Xi = class Wi {
  // no arguments: identity transform
  // (Float32Array): transform based on matrix
  // (DOMPointReadOnly): transform based on position without any rotation
  // (DOMPointReadOnly, DOMPointReadOnly): transform based on position and
  // orientation quaternion
  constructor() {
    if (this[ie] = {
      matrix: null,
      position: null,
      orientation: null,
      inverse: null
    }, arguments.length === 0)
      this[ie].matrix = tt(new Float32Array(16));
    else if (arguments.length === 1)
      arguments[0] instanceof Float32Array ? this[ie].matrix = arguments[0] : (this[ie].position = this._getPoint(arguments[0]), this[ie].orientation = DOMPointReadOnly.fromPoint({
        x: 0,
        y: 0,
        z: 0,
        w: 1
      }));
    else if (arguments.length === 2)
      this[ie].position = this._getPoint(arguments[0]), this[ie].orientation = this._getPoint(arguments[1]);
    else
      throw new Error("Too many arguments!");
    if (this[ie].matrix) {
      let e = ke();
      Ui(e, this[ie].matrix), this[ie].position = DOMPointReadOnly.fromPoint({
        x: e[0],
        y: e[1],
        z: e[2]
      });
      let t = De();
      zi(t, this[ie].matrix), this[ie].orientation = DOMPointReadOnly.fromPoint({
        x: t[0],
        y: t[1],
        z: t[2],
        w: t[3]
      });
    } else
      this[ie].matrix = tt(new Float32Array(16)), xt(
        this[ie].matrix,
        en(
          this[ie].orientation.x,
          this[ie].orientation.y,
          this[ie].orientation.z,
          this[ie].orientation.w
        ),
        Ie(
          this[ie].position.x,
          this[ie].position.y,
          this[ie].position.z
        )
      );
  }
  /**
   * Try to convert arg to a DOMPointReadOnly if it isn't already one.
   * @param {*} arg
   * @return {DOMPointReadOnly}
   */
  _getPoint(e) {
    return e instanceof DOMPointReadOnly ? e : DOMPointReadOnly.fromPoint(e);
  }
  /**
   * @return {Float32Array}
   */
  get matrix() {
    return this[ie].matrix;
  }
  /**
   * @return {DOMPointReadOnly}
   */
  get position() {
    return this[ie].position;
  }
  /**
   * @return {DOMPointReadOnly}
   */
  get orientation() {
    return this[ie].orientation;
  }
  /**
   * @return {XRRigidTransform}
   */
  get inverse() {
    if (this[ie].inverse === null) {
      let e = tt(new Float32Array(16));
      Dt(e, this[ie].matrix), this[ie].inverse = new Wi(e), this[ie].inverse[ie].inverse = this;
    }
    return this[ie].inverse;
  }
};
const le = Symbol("@@webxr-polyfill/XRSpace");
class rt {
  /**
   * @param {string?} specialType
   * @param {XRInputSource?} inputSource 
   */
  constructor(e = null, t = null) {
    this[le] = {
      specialType: e,
      inputSource: t,
      // The transform for the space in the base space, along with it's inverse
      baseMatrix: null,
      inverseBaseMatrix: null,
      lastFrameId: -1
    };
  }
  /**
   * @return {string?}
   */
  get _specialType() {
    return this[le].specialType;
  }
  /**
   * @return {XRInputSource?}
   */
  get _inputSource() {
    return this[le].inputSource;
  }
  /**
   * NON-STANDARD
   * Trigger an update for this space's base pose if necessary
   * @param {XRDevice} device
   * @param {Number} frameId
   */
  _ensurePoseUpdated(e, t) {
    t != this[le].lastFrameId && (this[le].lastFrameId = t, this._onPoseUpdate(e));
  }
  /**
   * NON-STANDARD
   * Called when this space's base pose needs to be updated
   * @param {XRDevice} device
   */
  _onPoseUpdate(e) {
    this[le].specialType == "viewer" && (this._baseMatrix = e.getBasePoseMatrix());
  }
  /**
   * NON-STANDARD
   * @param {Float32Array(16)} matrix
   */
  set _baseMatrix(e) {
    this[le].baseMatrix = e, this[le].inverseBaseMatrix = null;
  }
  /**
   * NON-STANDARD
   * @return {Float32Array(16)}
   */
  get _baseMatrix() {
    return this[le].baseMatrix || this[le].inverseBaseMatrix && (this[le].baseMatrix = new Float32Array(16), Dt(this[le].baseMatrix, this[le].inverseBaseMatrix)), this[le].baseMatrix;
  }
  /**
   * NON-STANDARD
   * @param {Float32Array(16)} matrix
   */
  set _inverseBaseMatrix(e) {
    this[le].inverseBaseMatrix = e, this[le].baseMatrix = null;
  }
  /**
   * NON-STANDARD
   * @return {Float32Array(16)}
   */
  get _inverseBaseMatrix() {
    return this[le].inverseBaseMatrix || this[le].baseMatrix && (this[le].inverseBaseMatrix = new Float32Array(16), Dt(this[le].inverseBaseMatrix, this[le].baseMatrix)), this[le].inverseBaseMatrix;
  }
  /**
   * NON-STANDARD
   * Gets the transform of the given space in this space
   *
   * @param {XRSpace} space
   * @return {XRRigidTransform}
   */
  _getSpaceRelativeTransform(e) {
    if (!this._inverseBaseMatrix || !e._baseMatrix)
      return null;
    let t = new Float32Array(16);
    return it(t, this._inverseBaseMatrix, e._baseMatrix), new Xi(t);
  }
}
const tn = 1.6, Ve = Symbol("@@webxr-polyfill/XRReferenceSpace"), Bt = [
  "viewer",
  "local",
  "local-floor",
  "bounded-floor",
  "unbounded"
  // TODO: 'unbounded' is not supported by the polyfill.
];
function rn(i) {
  return i === "bounded-floor" || i === "local-floor";
}
class St extends rt {
  /**
   * Optionally takes a `transform` from a device's requestFrameOfReferenceMatrix
   * so device's can provide their own transforms for stage (or if they
   * wanted to override eye-level/head-model).
   *
   * @param {XRReferenceSpaceType} type
   * @param {Float32Array?} transform
   */
  constructor(e, t = null) {
    if (!Bt.includes(e))
      throw new Error(`XRReferenceSpaceType must be one of ${Bt}`);
    if (super(e), e === "bounded-floor" && !t)
      throw new Error("XRReferenceSpace cannot use 'bounded-floor' type if the platform does not provide the floor level");
    rn(e) && !t && (t = tt(new Float32Array(16)), t[13] = tn), this._inverseBaseMatrix = t || tt(new Float32Array(16)), this[Ve] = {
      type: e,
      transform: t,
      originOffset: tt(new Float32Array(16))
    };
  }
  /**
   * NON-STANDARD
   * Takes a base pose model matrix and transforms it by the
   * frame of reference.
   *
   * @param {Float32Array} out
   * @param {Float32Array} pose
   */
  _transformBasePoseMatrix(e, t) {
    it(e, this._inverseBaseMatrix, t);
  }
  /**
   * NON-STANDARD
   * 
   * @return {Float32Array}
   */
  _originOffsetMatrix() {
    return this[Ve].originOffset;
  }
  /**
   * transformMatrix = Inv(OriginOffsetMatrix) * transformMatrix
   * @param {Float32Array} transformMatrix 
   */
  _adjustForOriginOffset(e) {
    let t = new Float32Array(16);
    Dt(t, this[Ve].originOffset), it(e, t, e);
  }
  /**
   * Gets the transform of the given space in this space
   *
   * @param {XRSpace} space
   * @return {XRRigidTransform}
   */
  _getSpaceRelativeTransform(e) {
    let t = super._getSpaceRelativeTransform(e);
    return this._adjustForOriginOffset(t.matrix), new XRRigidTransform(t.matrix);
  }
  /**
   * Doesn't update the bound geometry for bounded reference spaces.
   * @param {XRRigidTransform} additionalOffset
   * @return {XRReferenceSpace}
  */
  getOffsetReferenceSpace(e) {
    let t = new St(
      this[Ve].type,
      this[Ve].transform,
      this[Ve].bounds
    );
    return it(t[Ve].originOffset, this[Ve].originOffset, e.matrix), t;
  }
}
const ge = Symbol("@@webxr-polyfill/XR"), nn = ["inline", "immersive-vr", "immersive-ar"], sn = {
  inline: {
    requiredFeatures: ["viewer"],
    optionalFeatures: []
  },
  "immersive-vr": {
    requiredFeatures: ["viewer", "local"],
    optionalFeatures: []
  },
  "immersive-ar": {
    requiredFeatures: ["viewer", "local"],
    optionalFeatures: []
  }
}, an = `Polyfill Error: Must call navigator.xr.isSessionSupported() with any XRSessionMode
or navigator.xr.requestSession('inline') prior to requesting an immersive
session. This is a limitation specific to the WebXR Polyfill and does not apply
to native implementations of the API.`;
class Hi extends ai {
  /**
   * Receives a promise of an XRDevice, so that the polyfill
   * can pass in some initial checks to asynchronously provide XRDevices
   * if content immediately requests `requestDevice()`.
   *
   * @param {Promise<XRDevice>} devicePromise
   */
  constructor(e) {
    super(), this[ge] = {
      device: null,
      devicePromise: e,
      immersiveSession: null,
      inlineSessions: /* @__PURE__ */ new Set()
    }, e.then((t) => {
      this[ge].device = t;
    });
  }
  /**
   * @param {XRSessionMode} mode
   * @return {Promise<boolean>}
   */
  async isSessionSupported(e) {
    return this[ge].device || await this[ge].devicePromise, e != "inline" ? Promise.resolve(this[ge].device.isSessionSupported(e)) : Promise.resolve(!0);
  }
  /**
   * @param {XRSessionMode} mode
   * @param {XRSessionInit} options
   * @return {Promise<XRSession>}
   */
  async requestSession(e, t) {
    if (!this[ge].device) {
      if (e != "inline")
        throw new Error(an);
      await this[ge].devicePromise;
    }
    if (!nn.includes(e))
      throw new TypeError(
        `The provided value '${e}' is not a valid enum value of type XRSessionMode`
      );
    const a = sn[e], o = a.requiredFeatures.concat(
      t && t.requiredFeatures ? t.requiredFeatures : []
    ), h = a.optionalFeatures.concat(
      t && t.optionalFeatures ? t.optionalFeatures : []
    ), d = /* @__PURE__ */ new Set();
    let u = !1;
    for (let R of o)
      this[ge].device.isFeatureSupported(R) ? d.add(R) : (console.error(`The required feature '${R}' is not supported`), u = !0);
    if (u)
      throw new DOMException("Session does not support some required features", "NotSupportedError");
    for (let R of h)
      this[ge].device.isFeatureSupported(R) ? d.add(R) : console.log(`The optional feature '${R}' is not supported`);
    const m = await this[ge].device.requestSession(e, d), v = new XRSession(this[ge].device, e, m);
    e == "inline" ? this[ge].inlineSessions.add(v) : this[ge].immersiveSession = v;
    const y = () => {
      e == "inline" ? this[ge].inlineSessions.delete(v) : this[ge].immersiveSession = null, v.removeEventListener("end", y);
    };
    return v.addEventListener("end", y), v;
  }
}
const Yi = typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {};
let ti;
if ("performance" in Yi)
  ti = () => performance.now();
else {
  let i = Date.now();
  ti = () => Date.now() - i;
}
const ji = ti, Ht = Symbol("@@webxr-polyfill/XRPose");
let Zi = class {
  /**
   * @param {XRRigidTransform} transform 
   * @param {boolean} emulatedPosition 
   */
  constructor(e, t) {
    this[Ht] = {
      transform: e,
      emulatedPosition: t
    };
  }
  /**
   * @return {XRRigidTransform}
   */
  get transform() {
    return this[Ht].transform;
  }
  /**
   * @return {bool}
   */
  get emulatedPosition() {
    return this[Ht].emulatedPosition;
  }
};
const Ei = Symbol("@@webxr-polyfill/XRViewerPose");
class qi extends Zi {
  /**
   * @param {XRDevice} device
   */
  constructor(e, t, a = !1) {
    super(e, a), this[Ei] = {
      views: t
    };
  }
  /**
   * @return {Array<XRView>}
   */
  get views() {
    return this[Ei].views;
  }
}
const yt = Symbol("@@webxr-polyfill/XRViewport");
class $i {
  /**
   * Takes a proxy object that this viewport's XRView
   * updates and we serve here to match API.
   *
   * @param {Object} target
   */
  constructor(e) {
    this[yt] = { target: e };
  }
  /**
   * @return {number}
   */
  get x() {
    return this[yt].target.x;
  }
  /**
   * @return {number}
   */
  get y() {
    return this[yt].target.y;
  }
  /**
   * @return {number}
   */
  get width() {
    return this[yt].target.width;
  }
  /**
   * @return {number}
   */
  get height() {
    return this[yt].target.height;
  }
}
const xi = ["left", "right", "none"], Ne = Symbol("@@webxr-polyfill/XRView");
class Ki {
  /**
   * @param {XRDevice} device
   * @param {XREye} eye
   * @param {number} sessionId
   * @param {number} viewIndex
   */
  constructor(e, t, a, o, h) {
    if (!xi.includes(a))
      throw new Error(`XREye must be one of: ${xi}`);
    const d = /* @__PURE__ */ Object.create(null), u = new $i(d);
    this[Ne] = {
      device: e,
      eye: a,
      viewport: u,
      temp: d,
      sessionId: o,
      transform: t,
      viewIndex: h
    };
  }
  /**
   * @return {XREye}
   */
  get eye() {
    return this[Ne].eye;
  }
  /**
   * @return {Float32Array}
   */
  get projectionMatrix() {
    return this[Ne].device.getProjectionMatrix(this.eye, this[Ne].viewIndex);
  }
  /**
   * @return {XRRigidTransform}
   */
  get transform() {
    return this[Ne].transform;
  }
  /**
   * NON-STANDARD
   *
   * `getViewport` is now exposed via XRWebGLLayer instead of XRView.
   * XRWebGLLayer delegates all the actual work to this function.
   *
   * @param {XRWebGLLayer} layer
   * @return {XRViewport?}
   */
  _getViewport(e) {
    if (this[Ne].device.getViewport(
      this[Ne].sessionId,
      this.eye,
      e,
      this[Ne].temp,
      this[Ne].viewIndex
    ))
      return this[Ne].viewport;
  }
}
const pe = Symbol("@@webxr-polyfill/XRFrame"), Si = "XRFrame access outside the callback that produced it is invalid.", on = "getViewerPose can only be called on XRFrame objects passed to XRSession.requestAnimationFrame callbacks.";
let ln = 0;
class ii {
  /**
   * @param {XRDevice} device
   * @param {XRSession} session
   * @param {number} sessionId
   */
  constructor(e, t, a) {
    this[pe] = {
      id: ++ln,
      active: !1,
      animationFrame: !1,
      device: e,
      session: t,
      sessionId: a
    };
  }
  /**
   * @return {XRSession} session
   */
  get session() {
    return this[pe].session;
  }
  /**
   * @param {XRReferenceSpace} referenceSpace
   * @return {XRViewerPose?}
   */
  getViewerPose(e) {
    if (!this[pe].animationFrame)
      throw new DOMException(on, "InvalidStateError");
    if (!this[pe].active)
      throw new DOMException(Si, "InvalidStateError");
    const t = this[pe].device, a = this[pe].session;
    a[b].viewerSpace._ensurePoseUpdated(t, this[pe].id), e._ensurePoseUpdated(t, this[pe].id);
    let o = e._getSpaceRelativeTransform(a[b].viewerSpace);
    const h = [];
    for (const u of a[b].viewSpaces) {
      u._ensurePoseUpdated(t, this[pe].id);
      let m = e._getSpaceRelativeTransform(u), v = new Ki(t, m, u.eye, this[pe].sessionId, u.viewIndex);
      h.push(v);
    }
    return new qi(
      o,
      h,
      !1
      /* TODO: emulatedPosition */
    );
  }
  /**
   * @param {XRSpace} space
   * @param {XRSpace} baseSpace
   * @return {XRPose?} pose
   */
  getPose(e, t) {
    if (!this[pe].active)
      throw new DOMException(Si, "InvalidStateError");
    const a = this[pe].device;
    if (e._specialType === "target-ray" || e._specialType === "grip")
      return a.getInputPose(
        e._inputSource,
        t,
        e._specialType
      );
    {
      e._ensurePoseUpdated(a, this[pe].id), t._ensurePoseUpdated(a, this[pe].id);
      let o = t._getSpaceRelativeTransform(e);
      return o ? new XRPose(
        o,
        !1
        /* TODO: emulatedPosition */
      ) : null;
    }
  }
}
const bt = Symbol("@@webxr-polyfill/XRRenderState"), cn = Object.freeze({
  depthNear: 0.1,
  depthFar: 1e3,
  inlineVerticalFieldOfView: null,
  baseLayer: null
});
class ri {
  /**
   * @param {Object?} stateInit
   */
  constructor(e = {}) {
    const t = Object.assign({}, cn, e);
    this[bt] = { config: t };
  }
  /**
   * @return {number}
   */
  get depthNear() {
    return this[bt].config.depthNear;
  }
  /**
   * @return {number}
   */
  get depthFar() {
    return this[bt].config.depthFar;
  }
  /**
   * @return {number?}
   */
  get inlineVerticalFieldOfView() {
    return this[bt].config.inlineVerticalFieldOfView;
  }
  /**
   * @return {XRWebGLLayer}
   */
  get baseLayer() {
    return this[bt].config.baseLayer;
  }
}
const Yt = Symbol("@@webxr-polyfill/XRInputSourceEvent");
class Ot extends Event {
  /**
   * @param {string} type
   * @param {Object} eventInitDict
   */
  constructor(e, t) {
    super(e, t), this[Yt] = {
      frame: t.frame,
      inputSource: t.inputSource
    }, Object.setPrototypeOf(this, Ot.prototype);
  }
  /**
   * @return {XRFrame}
   */
  get frame() {
    return this[Yt].frame;
  }
  /**
   * @return {XRInputSource}
   */
  get inputSource() {
    return this[Yt].inputSource;
  }
}
const Ri = Symbol("@@webxr-polyfill/XRSessionEvent");
class Rt extends Event {
  /**
   * @param {string} type
   * @param {Object} eventInitDict
   */
  constructor(e, t) {
    super(e, t), this[Ri] = {
      session: t.session
    }, Object.setPrototypeOf(this, Rt.prototype);
  }
  /**
   * @return {XRSession}
   */
  get session() {
    return this[Ri].session;
  }
}
const Ft = Symbol("@@webxr-polyfill/XRInputSourcesChangeEvent");
class Nt extends Event {
  /**
   * @param {string} type
   * @param {Object} eventInitDict
   */
  constructor(e, t) {
    super(e, t), this[Ft] = {
      session: t.session,
      added: t.added,
      removed: t.removed
    }, Object.setPrototypeOf(this, Nt.prototype);
  }
  /**
   * @return {XRSession}
   */
  get session() {
    return this[Ft].session;
  }
  /**
   * @return {Array<XRInputSource>}
   */
  get added() {
    return this[Ft].added;
  }
  /**
   * @return {Array<XRInputSource>}
   */
  get removed() {
    return this[Ft].removed;
  }
}
const b = Symbol("@@webxr-polyfill/XRSession");
class jt extends rt {
  constructor(e) {
    super(e);
  }
  get eye() {
    return this._specialType;
  }
  /**
   * Called when this space's base pose needs to be updated
   * @param {XRDevice} device
   */
  _onPoseUpdate(e) {
    this._inverseBaseMatrix = e.getBaseViewMatrix(this._specialType);
  }
}
let Ji = class extends ai {
  /**
   * @param {XRDevice} device
   * @param {XRSessionMode} mode
   * @param {number} id
   */
  constructor(e, t, a) {
    super();
    let o = t != "inline", h = new ri({
      inlineVerticalFieldOfView: o ? null : Math.PI * 0.5
    });
    const d = o ? [new jt("left"), new jt("right")] : [new jt("none")];
    Object.freeze(d), this[b] = {
      device: e,
      mode: t,
      immersive: o,
      ended: !1,
      suspended: !1,
      frameCallbacks: [],
      currentFrameCallbacks: null,
      frameHandle: 0,
      deviceFrameHandle: null,
      id: a,
      activeRenderState: h,
      pendingRenderState: null,
      viewerSpace: new St("viewer"),
      get viewSpaces() {
        return e.getViewSpaces(t) || d;
      },
      currentInputSources: []
    }, this[b].onDeviceFrame = () => {
      if (this[b].ended || this[b].suspended || (this[b].deviceFrameHandle = null, this[b].startDeviceFrameLoop(), this[b].pendingRenderState !== null && (this[b].activeRenderState = new ri(this[b].pendingRenderState), this[b].pendingRenderState = null, this[b].activeRenderState.baseLayer && this[b].device.onBaseLayerSet(
        this[b].id,
        this[b].activeRenderState.baseLayer
      )), this[b].activeRenderState.baseLayer === null))
        return;
      const u = new ii(e, this, this[b].id), m = this[b].currentFrameCallbacks = this[b].frameCallbacks;
      this[b].frameCallbacks = [], u[pe].active = !0, u[pe].animationFrame = !0, this[b].device.onFrameStart(this[b].id, this[b].activeRenderState), this._checkInputSourcesChange();
      const v = ji();
      for (let y = 0; y < m.length; y++)
        try {
          !m[y].cancelled && typeof m[y].callback == "function" && m[y].callback(v, u);
        } catch (R) {
          console.error(R);
        }
      this[b].currentFrameCallbacks = null, u[pe].active = !1, this[b].device.onFrameEnd(this[b].id);
    }, this[b].startDeviceFrameLoop = () => {
      this[b].deviceFrameHandle === null && (this[b].deviceFrameHandle = this[b].device.requestAnimationFrame(
        this[b].onDeviceFrame
      ));
    }, this[b].stopDeviceFrameLoop = () => {
      const u = this[b].deviceFrameHandle;
      u !== null && (this[b].device.cancelAnimationFrame(u), this[b].deviceFrameHandle = null);
    }, this[b].onPresentationEnd = (u) => {
      if (u !== this[b].id) {
        this[b].suspended = !1, this[b].startDeviceFrameLoop(), this.dispatchEvent("focus", { session: this });
        return;
      }
      this[b].ended = !0, this[b].stopDeviceFrameLoop(), e.removeEventListener("@@webxr-polyfill/vr-present-end", this[b].onPresentationEnd), e.removeEventListener("@@webxr-polyfill/vr-present-start", this[b].onPresentationStart), e.removeEventListener("@@webxr-polyfill/input-select-start", this[b].onSelectStart), e.removeEventListener("@@webxr-polyfill/input-select-end", this[b].onSelectEnd), this.dispatchEvent("end", new Rt("end", { session: this }));
    }, e.addEventListener("@@webxr-polyfill/vr-present-end", this[b].onPresentationEnd), this[b].onPresentationStart = (u) => {
      u !== this[b].id && (this[b].suspended = !0, this[b].stopDeviceFrameLoop(), this.dispatchEvent("blur", { session: this }));
    }, e.addEventListener("@@webxr-polyfill/vr-present-start", this[b].onPresentationStart), this[b].onSelectStart = (u) => {
      u.sessionId === this[b].id && this[b].dispatchInputSourceEvent("selectstart", u.inputSource);
    }, e.addEventListener("@@webxr-polyfill/input-select-start", this[b].onSelectStart), this[b].onSelectEnd = (u) => {
      u.sessionId === this[b].id && (this[b].dispatchInputSourceEvent("selectend", u.inputSource), this[b].dispatchInputSourceEvent("select", u.inputSource));
    }, e.addEventListener("@@webxr-polyfill/input-select-end", this[b].onSelectEnd), this[b].onSqueezeStart = (u) => {
      u.sessionId === this[b].id && this[b].dispatchInputSourceEvent("squeezestart", u.inputSource);
    }, e.addEventListener("@@webxr-polyfill/input-squeeze-start", this[b].onSqueezeStart), this[b].onSqueezeEnd = (u) => {
      u.sessionId === this[b].id && (this[b].dispatchInputSourceEvent("squeezeend", u.inputSource), this[b].dispatchInputSourceEvent("squeeze", u.inputSource));
    }, e.addEventListener("@@webxr-polyfill/input-squeeze-end", this[b].onSqueezeEnd), this[b].dispatchInputSourceEvent = (u, m) => {
      const v = new ii(e, this, this[b].id), y = new Ot(u, { frame: v, inputSource: m });
      v[pe].active = !0, this.dispatchEvent(u, y), v[pe].active = !1;
    }, this[b].startDeviceFrameLoop(), this.onblur = void 0, this.onfocus = void 0, this.onresetpose = void 0, this.onend = void 0, this.onselect = void 0, this.onselectstart = void 0, this.onselectend = void 0;
  }
  /**
   * @return {XRRenderState}
   */
  get renderState() {
    return this[b].activeRenderState;
  }
  /**
   * @return {XREnvironmentBlendMode}
   */
  get environmentBlendMode() {
    return this[b].device.environmentBlendMode || "opaque";
  }
  /**
   * @param {string} type
   * @return {XRReferenceSpace}
   */
  async requestReferenceSpace(e) {
    if (this[b].ended)
      return;
    if (!Bt.includes(e))
      throw new TypeError(`XRReferenceSpaceType must be one of ${Bt}`);
    if (!this[b].device.doesSessionSupportReferenceSpace(this[b].id, e))
      throw new DOMException(`The ${e} reference space is not supported by this session.`, "NotSupportedError");
    if (e === "viewer")
      return this[b].viewerSpace;
    let t = await this[b].device.requestFrameOfReferenceTransform(e);
    if (e === "bounded-floor")
      throw t ? this[b].device.requestStageBounds() ? new DOMException(`The WebXR polyfill does not support the ${e} reference space yet.`, "NotSupportedError") : new DOMException(`${e} XRReferenceSpace not supported by this device.`, "NotSupportedError") : new DOMException(`${e} XRReferenceSpace not supported by this device.`, "NotSupportedError");
    return new St(e, t);
  }
  /**
   * @param {Function} callback
   * @return {number}
   */
  requestAnimationFrame(e) {
    if (this[b].ended)
      return;
    const t = ++this[b].frameHandle;
    return this[b].frameCallbacks.push({
      handle: t,
      callback: e,
      cancelled: !1
    }), t;
  }
  /**
   * @param {number} handle
   */
  cancelAnimationFrame(e) {
    let t = this[b].frameCallbacks, a = t.findIndex((o) => o && o.handle === e);
    a > -1 && (t[a].cancelled = !0, t.splice(a, 1)), t = this[b].currentFrameCallbacks, t && (a = t.findIndex((o) => o && o.handle === e), a > -1 && (t[a].cancelled = !0));
  }
  /**
   * @return {Array<XRInputSource>} input sources
   */
  get inputSources() {
    return this[b].device.getInputSources();
  }
  /**
   * @return {Promise<void>}
   */
  async end() {
    if (!this[b].ended)
      return this[b].immersive && (this[b].ended = !0, this[b].device.removeEventListener(
        "@@webxr-polyfill/vr-present-start",
        this[b].onPresentationStart
      ), this[b].device.removeEventListener(
        "@@webxr-polyfill/vr-present-end",
        this[b].onPresentationEnd
      ), this[b].device.removeEventListener(
        "@@webxr-polyfill/input-select-start",
        this[b].onSelectStart
      ), this[b].device.removeEventListener(
        "@@webxr-polyfill/input-select-end",
        this[b].onSelectEnd
      ), this.dispatchEvent("end", new Rt("end", { session: this }))), this[b].stopDeviceFrameLoop(), this[b].device.endSession(this[b].id);
  }
  /**
   * Queues an update to the active render state to be applied on the next
   * frame. Unset fields of newState will not be changed.
   * 
   * @param {XRRenderStateInit?} newState 
   */
  updateRenderState(e) {
    if (this[b].ended) {
      const a = "Can't call updateRenderState on an XRSession that has already ended.";
      throw new Error(a);
    }
    if (e.baseLayer && e.baseLayer._session !== this) {
      const a = "Called updateRenderState with a base layer that was created by a different session.";
      throw new Error(a);
    }
    if (e.inlineVerticalFieldOfView !== null && e.inlineVerticalFieldOfView !== void 0)
      if (this[b].immersive) {
        const a = "inlineVerticalFieldOfView must not be set for an XRRenderState passed to updateRenderState for an immersive session.";
        throw new Error(a);
      } else
        e.inlineVerticalFieldOfView = Math.min(
          3.13,
          Math.max(0.01, e.inlineVerticalFieldOfView)
        );
    if (this[b].pendingRenderState === null) {
      const a = this[b].activeRenderState;
      this[b].pendingRenderState = {
        depthNear: a.depthNear,
        depthFar: a.depthFar,
        inlineVerticalFieldOfView: a.inlineVerticalFieldOfView,
        baseLayer: a.baseLayer
      };
    }
    Object.assign(this[b].pendingRenderState, e);
  }
  /**
   * Compares the inputSources with the ones in the previous frame.
   * Fires imputsourceschange event if any added or removed
   * inputSource is found.
   */
  _checkInputSourcesChange() {
    const e = [], t = [], a = this.inputSources, o = this[b].currentInputSources;
    for (const h of a)
      o.includes(h) || e.push(h);
    for (const h of o)
      a.includes(h) || t.push(h);
    (e.length > 0 || t.length > 0) && this.dispatchEvent("inputsourceschange", new Nt("inputsourceschange", {
      session: this,
      added: e,
      removed: t
    })), this[b].currentInputSources.length = 0;
    for (const h of a)
      this[b].currentInputSources.push(h);
  }
};
const Ue = Symbol("@@webxr-polyfill/XRInputSource");
class er {
  /**
   * @param {GamepadXRInputSource} impl 
   */
  constructor(e) {
    this[Ue] = {
      impl: e,
      gripSpace: new rt("grip", this),
      targetRaySpace: new rt("target-ray", this)
    };
  }
  /**
   * @return {XRHandedness}
   */
  get handedness() {
    return this[Ue].impl.handedness;
  }
  /**
   * @return {XRTargetRayMode}
   */
  get targetRayMode() {
    return this[Ue].impl.targetRayMode;
  }
  /**
   * @return {XRSpace}
   */
  get gripSpace() {
    let e = this[Ue].impl.targetRayMode;
    return e === "gaze" || e === "screen" ? null : this[Ue].gripSpace;
  }
  /**
   * @return {XRSpace}
   */
  get targetRaySpace() {
    return this[Ue].targetRaySpace;
  }
  /**
   * @return {Array<String>}
   */
  get profiles() {
    return this[Ue].impl.profiles;
  }
  /**
   * @return {Gamepad}
   */
  get gamepad() {
    return this[Ue].impl.gamepad;
  }
}
const tr = Symbol("@@webxr-polyfill/polyfilled-xr-compatible"), li = Symbol("@@webxr-polyfill/xr-compatible"), Ze = Symbol("@@webxr-polyfill/XRWebGLLayer"), hn = Object.freeze({
  antialias: !0,
  depth: !0,
  stencil: !1,
  alpha: !0,
  multiview: !1,
  ignoreDepthValues: !1,
  framebufferScaleFactor: 1
});
class ir {
  /**
   * @param {XRSession} session 
   * @param {XRWebGLRenderingContext} context 
   * @param {Object?} layerInit 
   */
  constructor(e, t, a = {}) {
    const o = Object.assign({}, hn, a);
    if (!(e instanceof Ji))
      throw new Error("session must be a XRSession");
    if (e.ended)
      throw new Error("InvalidStateError");
    if (t[tr] && t[li] !== !0)
      throw new Error("InvalidStateError");
    this[Ze] = {
      context: t,
      config: o,
      session: e
    };
  }
  /**
   * @return {WebGLRenderingContext}
   */
  get context() {
    return this[Ze].context;
  }
  /**
   * @return {boolean}
   */
  get antialias() {
    return this[Ze].config.antialias;
  }
  /**
   * The polyfill will always ignore depth values.
   *
   * @return {boolean}
   */
  get ignoreDepthValues() {
    return !0;
  }
  /**
   * @return {WebGLFramebuffer}
   */
  get framebuffer() {
    return null;
  }
  /**
   * @return {number}
   */
  get framebufferWidth() {
    return this[Ze].context.drawingBufferWidth;
  }
  /**
   * @return {number}
   */
  get framebufferHeight() {
    return this[Ze].context.drawingBufferHeight;
  }
  /**
   * @return {XRSession}
   */
  get _session() {
    return this[Ze].session;
  }
  /**
   * @TODO No mention in spec on not reusing the XRViewport on every frame.
   * 
   * @TODO In the future maybe all this logic should be handled here instead of
   * delegated to the XRView?
   *
   * @param {XRView} view
   * @return {XRViewport?}
   */
  getViewport(e) {
    return e._getViewport(this);
  }
  /**
   * Gets the scale factor to be requested if you want to match the device
   * resolution at the center of the user's vision. The polyfill will always
   * report 1.0.
   * 
   * @param {XRSession} session 
   * @return {number}
   */
  static getNativeFramebufferScaleFactor(e) {
    if (!e)
      throw new TypeError("getNativeFramebufferScaleFactor must be passed a session.");
    return e[b].ended ? 0 : 1;
  }
}
const Zt = Symbol("@@webxr-polyfill/XRReferenceSpaceEvent");
class ci extends Event {
  /**
   * @param {string} type
   * @param {Object} eventInitDict
   */
  constructor(e, t) {
    super(e, t), this[Zt] = {
      referenceSpace: t.referenceSpace,
      transform: t.transform || null
    }, Object.setPrototypeOf(this, ci.prototype);
  }
  /**
   * @return {XRFrame}
   */
  get referenceSpace() {
    return this[Zt].referenceSpace;
  }
  /**
   * @return {XRInputSource}
   */
  get transform() {
    return this[Zt].transform;
  }
}
const Et = {
  XRSystem: Hi,
  XRSession: Ji,
  XRSessionEvent: Rt,
  XRFrame: ii,
  XRView: Ki,
  XRViewport: $i,
  XRViewerPose: qi,
  XRWebGLLayer: ir,
  XRSpace: rt,
  XRReferenceSpace: St,
  XRReferenceSpaceEvent: ci,
  XRInputSource: er,
  XRInputSourceEvent: Ot,
  XRInputSourcesChangeEvent: Nt,
  XRRenderState: ri,
  XRRigidTransform: Xi,
  XRPose: Zi
}, _i = (i) => (i.prototype.makeXRCompatible, i.prototype.makeXRCompatible = function() {
  return this[li] = !0, Promise.resolve();
}, !0), Mi = (i) => {
  const e = i.prototype.getContext;
  i.prototype.getContext = function(t, a) {
    const o = e.call(this, t, a);
    return o && (o[tr] = !0, a && "xrCompatible" in a && (o[li] = a.xrCompatible)), o;
  };
}, dn = (i) => !!(i.ImageBitmapRenderingContext && i.createImageBitmap), An = (i) => {
  var e = !1;
  return function(t) {
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0);
  }(i.navigator.userAgent || i.navigator.vendor || i.opera), e;
}, un = (i) => {
  i.style.display = "block", i.style.position = "absolute", i.style.width = i.style.height = "1px", i.style.top = i.style.left = "0px";
};
var qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function fn(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var rr = { exports: {} };
/**
 * @license
 * cardboard-vr-display
 * Copyright (c) 2015-2017 Google
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function(i, e) {
  /**
   * @license
   * gl-preserve-state
   * Copyright (c) 2016, Brandon Jones.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  /**
   * @license
   * webvr-polyfill-dpdb
   * Copyright (c) 2015-2017 Google
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * @license
   * nosleep.js
   * Copyright (c) 2017, Rich Tibbett
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  (function(t, a) {
    i.exports = a();
  })(qt, function() {
    var t = function(r, n) {
      if (!(r instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }, a = function() {
      function r(n, s) {
        for (var l = 0; l < s.length; l++) {
          var c = s[l];
          c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(n, c.key, c);
        }
      }
      return function(n, s, l) {
        return s && r(n.prototype, s), l && r(n, l), n;
      };
    }(), o = function() {
      function r(n, s) {
        var l = [], c = !0, A = !1, f = void 0;
        try {
          for (var S = n[Symbol.iterator](), E; !(c = (E = S.next()).done) && (l.push(E.value), !(s && l.length === s)); c = !0)
            ;
        } catch (p) {
          A = !0, f = p;
        } finally {
          try {
            !c && S.return && S.return();
          } finally {
            if (A)
              throw f;
          }
        }
        return l;
      }
      return function(n, s) {
        if (Array.isArray(n))
          return n;
        if (Symbol.iterator in Object(n))
          return r(n, s);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(), h = 1e-3, d = 1, u = function(n, s) {
      return "data:" + n + "," + encodeURIComponent(s);
    }, m = function(n, s, l) {
      return n + (s - n) * l;
    }, v = function() {
      var r = /iPad|iPhone|iPod/.test(navigator.platform);
      return function() {
        return r;
      };
    }(), y = function() {
      var r = navigator.userAgent.indexOf("Version") !== -1 && navigator.userAgent.indexOf("Android") !== -1 && navigator.userAgent.indexOf("Chrome") !== -1;
      return function() {
        return r;
      };
    }(), R = function() {
      var r = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      return function() {
        return r;
      };
    }(), x = function() {
      var r = navigator.userAgent.indexOf("Firefox") !== -1 && navigator.userAgent.indexOf("Android") !== -1;
      return function() {
        return r;
      };
    }(), _ = function() {
      var r = navigator.userAgent.match(/.*Chrome\/([0-9]+)/), n = r ? parseInt(r[1], 10) : null;
      return function() {
        return n;
      };
    }(), F = function() {
      var r = !1;
      return r = v() && R() && navigator.userAgent.indexOf("13_4") !== -1, function() {
        return r;
      };
    }(), C = function() {
      var r = !1;
      if (_() === 65) {
        var n = navigator.userAgent.match(/.*Chrome\/([0-9\.]*)/);
        if (n) {
          var s = n[1].split("."), l = o(s, 4);
          l[0], l[1];
          var c = l[2], A = l[3];
          r = parseInt(c, 10) === 3325 && parseInt(A, 10) < 148;
        }
      }
      return function() {
        return r;
      };
    }(), B = function() {
      var r = navigator.userAgent.indexOf("R7 Build") !== -1;
      return function() {
        return r;
      };
    }(), N = function() {
      var n = window.orientation == 90 || window.orientation == -90;
      return B() ? !n : n;
    }, Q = function(n) {
      return !(isNaN(n) || n <= h || n > d);
    }, P = function() {
      return Math.max(window.screen.width, window.screen.height) * window.devicePixelRatio;
    }, I = function() {
      return Math.min(window.screen.width, window.screen.height) * window.devicePixelRatio;
    }, G = function(n) {
      if (y())
        return !1;
      if (n.requestFullscreen)
        n.requestFullscreen();
      else if (n.webkitRequestFullscreen)
        n.webkitRequestFullscreen();
      else if (n.mozRequestFullScreen)
        n.mozRequestFullScreen();
      else if (n.msRequestFullscreen)
        n.msRequestFullscreen();
      else
        return !1;
      return !0;
    }, O = function() {
      if (document.exitFullscreen)
        document.exitFullscreen();
      else if (document.webkitExitFullscreen)
        document.webkitExitFullscreen();
      else if (document.mozCancelFullScreen)
        document.mozCancelFullScreen();
      else if (document.msExitFullscreen)
        document.msExitFullscreen();
      else
        return !1;
      return !0;
    }, W = function() {
      return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    }, z = function(n, s, l, c) {
      var A = n.createShader(n.VERTEX_SHADER);
      n.shaderSource(A, s), n.compileShader(A);
      var f = n.createShader(n.FRAGMENT_SHADER);
      n.shaderSource(f, l), n.compileShader(f);
      var S = n.createProgram();
      n.attachShader(S, A), n.attachShader(S, f);
      for (var E in c)
        n.bindAttribLocation(S, c[E], E);
      return n.linkProgram(S), n.deleteShader(A), n.deleteShader(f), S;
    }, Z = function(n, s) {
      for (var l = {}, c = n.getProgramParameter(s, n.ACTIVE_UNIFORMS), A = "", f = 0; f < c; f++) {
        var S = n.getActiveUniform(s, f);
        A = S.name.replace("[0]", ""), l[A] = n.getUniformLocation(s, A);
      }
      return l;
    }, K = function(n, s, l, c, A, f, S) {
      var E = 1 / (s - l), p = 1 / (c - A), w = 1 / (f - S);
      return n[0] = -2 * E, n[1] = 0, n[2] = 0, n[3] = 0, n[4] = 0, n[5] = -2 * p, n[6] = 0, n[7] = 0, n[8] = 0, n[9] = 0, n[10] = 2 * w, n[11] = 0, n[12] = (s + l) * E, n[13] = (A + c) * p, n[14] = (S + f) * w, n[15] = 1, n;
    }, D = function() {
      var n = !1;
      return function(s) {
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(s) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(s.substr(0, 4))) && (n = !0);
      }(navigator.userAgent || navigator.vendor || window.opera), n;
    }, V = function(n, s) {
      for (var l in s)
        s.hasOwnProperty(l) && (n[l] = s[l]);
      return n;
    }, L = function(n) {
      if (v()) {
        var s = n.style.width, l = n.style.height;
        n.style.width = parseInt(s) + 1 + "px", n.style.height = parseInt(l) + "px", setTimeout(function() {
          n.style.width = s, n.style.height = l;
        }, 100);
      }
      window.canvas = n;
    }, M = function() {
      var r = Math.PI / 180, n = Math.PI * 0.25;
      function s(p, w, T, k) {
        var U = Math.tan(w ? w.upDegrees * r : n), X = Math.tan(w ? w.downDegrees * r : n), q = Math.tan(w ? w.leftDegrees * r : n), j = Math.tan(w ? w.rightDegrees * r : n), Y = 2 / (q + j), ne = 2 / (U + X);
        return p[0] = Y, p[1] = 0, p[2] = 0, p[3] = 0, p[4] = 0, p[5] = ne, p[6] = 0, p[7] = 0, p[8] = -((q - j) * Y * 0.5), p[9] = (U - X) * ne * 0.5, p[10] = k / (T - k), p[11] = -1, p[12] = 0, p[13] = 0, p[14] = k * T / (T - k), p[15] = 0, p;
      }
      function l(p, w, T) {
        var k = w[0], U = w[1], X = w[2], q = w[3], j = k + k, Y = U + U, ne = X + X, he = k * j, ve = k * Y, oe = k * ne, we = U * Y, Se = U * ne, Re = X * ne, _e = q * j, Me = q * Y, Ge = q * ne;
        return p[0] = 1 - (we + Re), p[1] = ve + Ge, p[2] = oe - Me, p[3] = 0, p[4] = ve - Ge, p[5] = 1 - (he + Re), p[6] = Se + _e, p[7] = 0, p[8] = oe + Me, p[9] = Se - _e, p[10] = 1 - (he + we), p[11] = 0, p[12] = T[0], p[13] = T[1], p[14] = T[2], p[15] = 1, p;
      }
      function c(p, w, T) {
        var k = T[0], U = T[1], X = T[2], q, j, Y, ne, he, ve, oe, we, Se, Re, _e, Me;
        return w === p ? (p[12] = w[0] * k + w[4] * U + w[8] * X + w[12], p[13] = w[1] * k + w[5] * U + w[9] * X + w[13], p[14] = w[2] * k + w[6] * U + w[10] * X + w[14], p[15] = w[3] * k + w[7] * U + w[11] * X + w[15]) : (q = w[0], j = w[1], Y = w[2], ne = w[3], he = w[4], ve = w[5], oe = w[6], we = w[7], Se = w[8], Re = w[9], _e = w[10], Me = w[11], p[0] = q, p[1] = j, p[2] = Y, p[3] = ne, p[4] = he, p[5] = ve, p[6] = oe, p[7] = we, p[8] = Se, p[9] = Re, p[10] = _e, p[11] = Me, p[12] = q * k + he * U + Se * X + w[12], p[13] = j * k + ve * U + Re * X + w[13], p[14] = Y * k + oe * U + _e * X + w[14], p[15] = ne * k + we * U + Me * X + w[15]), p;
      }
      function A(p, w) {
        var T = w[0], k = w[1], U = w[2], X = w[3], q = w[4], j = w[5], Y = w[6], ne = w[7], he = w[8], ve = w[9], oe = w[10], we = w[11], Se = w[12], Re = w[13], _e = w[14], Me = w[15], Ge = T * j - k * q, at = T * Y - U * q, ot = T * ne - X * q, lt = k * Y - U * j, ct = k * ne - X * j, ht = U * ne - X * Y, dt = he * Re - ve * Se, At = he * _e - oe * Se, ut = he * Me - we * Se, ft = ve * _e - oe * Re, pt = ve * Me - we * Re, mt = oe * Me - we * _e, fe = Ge * mt - at * pt + ot * ft + lt * ut - ct * At + ht * dt;
        return fe ? (fe = 1 / fe, p[0] = (j * mt - Y * pt + ne * ft) * fe, p[1] = (U * pt - k * mt - X * ft) * fe, p[2] = (Re * ht - _e * ct + Me * lt) * fe, p[3] = (oe * ct - ve * ht - we * lt) * fe, p[4] = (Y * ut - q * mt - ne * At) * fe, p[5] = (T * mt - U * ut + X * At) * fe, p[6] = (_e * ot - Se * ht - Me * at) * fe, p[7] = (he * ht - oe * ot + we * at) * fe, p[8] = (q * pt - j * ut + ne * dt) * fe, p[9] = (k * ut - T * pt - X * dt) * fe, p[10] = (Se * ct - Re * ot + Me * Ge) * fe, p[11] = (ve * ot - he * ct - we * Ge) * fe, p[12] = (j * At - q * ft - Y * dt) * fe, p[13] = (T * ft - k * At + U * dt) * fe, p[14] = (Re * at - Se * lt - _e * Ge) * fe, p[15] = (he * lt - ve * at + oe * Ge) * fe, p) : null;
      }
      var f = new Float32Array([0, 0, 0, 1]), S = new Float32Array([0, 0, 0]);
      function E(p, w, T, k, U, X) {
        s(p, k || null, X.depthNear, X.depthFar);
        var q = T.orientation || f, j = T.position || S;
        l(w, q, j), U && c(w, w, U), A(w, w);
      }
      return function(p, w, T) {
        return !p || !w ? !1 : (p.pose = w, p.timestamp = w.timestamp, E(p.leftProjectionMatrix, p.leftViewMatrix, w, T._getFieldOfView("left"), T._getEyeOffset("left"), T), E(p.rightProjectionMatrix, p.rightViewMatrix, w, T._getFieldOfView("right"), T._getEyeOffset("right"), T), !0);
      };
    }(), J = function() {
      var n = window.self !== window.top, s = H(document.referrer), l = H(window.location.href);
      return n && s !== l;
    }, H = function(n) {
      var s, l = n.indexOf("://");
      l !== -1 ? s = l + 3 : s = 0;
      var c = n.indexOf("/", s);
      return c === -1 && (c = n.length), n.substring(0, c);
    }, $ = function(n) {
      if (n.w > 1)
        return console.warn("getQuaternionAngle: w > 1"), 0;
      var s = 2 * Math.acos(n.w);
      return s;
    }, Ee = function() {
      var r = {};
      return function(n, s) {
        r[n] === void 0 && (console.warn("webvr-polyfill: " + s), r[n] = !0);
      };
    }(), Te = function(n, s) {
      var l = s ? "Please use " + s + " instead." : "";
      Ee(n, n + " has been deprecated. This may not work on native WebVR displays. " + l);
    };
    function $e(r, n, s) {
      if (!n) {
        s(r);
        return;
      }
      for (var l = [], c = null, A = 0; A < n.length; ++A) {
        var f = n[A];
        switch (f) {
          case r.TEXTURE_BINDING_2D:
          case r.TEXTURE_BINDING_CUBE_MAP:
            var S = n[++A];
            if (S < r.TEXTURE0 || S > r.TEXTURE31) {
              console.error("TEXTURE_BINDING_2D or TEXTURE_BINDING_CUBE_MAP must be followed by a valid texture unit"), l.push(null, null);
              break;
            }
            c || (c = r.getParameter(r.ACTIVE_TEXTURE)), r.activeTexture(S), l.push(r.getParameter(f), null);
            break;
          case r.ACTIVE_TEXTURE:
            c = r.getParameter(r.ACTIVE_TEXTURE), l.push(null);
            break;
          default:
            l.push(r.getParameter(f));
            break;
        }
      }
      s(r);
      for (var A = 0; A < n.length; ++A) {
        var f = n[A], E = l[A];
        switch (f) {
          case r.ACTIVE_TEXTURE:
            break;
          case r.ARRAY_BUFFER_BINDING:
            r.bindBuffer(r.ARRAY_BUFFER, E);
            break;
          case r.COLOR_CLEAR_VALUE:
            r.clearColor(E[0], E[1], E[2], E[3]);
            break;
          case r.COLOR_WRITEMASK:
            r.colorMask(E[0], E[1], E[2], E[3]);
            break;
          case r.CURRENT_PROGRAM:
            r.useProgram(E);
            break;
          case r.ELEMENT_ARRAY_BUFFER_BINDING:
            r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, E);
            break;
          case r.FRAMEBUFFER_BINDING:
            r.bindFramebuffer(r.FRAMEBUFFER, E);
            break;
          case r.RENDERBUFFER_BINDING:
            r.bindRenderbuffer(r.RENDERBUFFER, E);
            break;
          case r.TEXTURE_BINDING_2D:
            var S = n[++A];
            if (S < r.TEXTURE0 || S > r.TEXTURE31)
              break;
            r.activeTexture(S), r.bindTexture(r.TEXTURE_2D, E);
            break;
          case r.TEXTURE_BINDING_CUBE_MAP:
            var S = n[++A];
            if (S < r.TEXTURE0 || S > r.TEXTURE31)
              break;
            r.activeTexture(S), r.bindTexture(r.TEXTURE_CUBE_MAP, E);
            break;
          case r.VIEWPORT:
            r.viewport(E[0], E[1], E[2], E[3]);
            break;
          case r.BLEND:
          case r.CULL_FACE:
          case r.DEPTH_TEST:
          case r.SCISSOR_TEST:
          case r.STENCIL_TEST:
            E ? r.enable(f) : r.disable(f);
            break;
          default:
            console.log("No GL restore behavior for 0x" + f.toString(16));
            break;
        }
        c && r.activeTexture(c);
      }
    }
    var Be = $e, Xe = ["attribute vec2 position;", "attribute vec3 texCoord;", "varying vec2 vTexCoord;", "uniform vec4 viewportOffsetScale[2];", "void main() {", "  vec4 viewport = viewportOffsetScale[int(texCoord.z)];", "  vTexCoord = (texCoord.xy * viewport.zw) + viewport.xy;", "  gl_Position = vec4( position, 1.0, 1.0 );", "}"].join(`
`), g = ["precision mediump float;", "uniform sampler2D diffuse;", "varying vec2 vTexCoord;", "void main() {", "  gl_FragColor = texture2D(diffuse, vTexCoord);", "}"].join(`
`);
    function ee(r, n, s, l) {
      this.gl = r, this.cardboardUI = n, this.bufferScale = s, this.dirtySubmitFrameBindings = l, this.ctxAttribs = r.getContextAttributes(), this.instanceExt = r.getExtension("ANGLE_instanced_arrays"), this.meshWidth = 20, this.meshHeight = 20, this.bufferWidth = r.drawingBufferWidth, this.bufferHeight = r.drawingBufferHeight, this.realBindFramebuffer = r.bindFramebuffer, this.realEnable = r.enable, this.realDisable = r.disable, this.realColorMask = r.colorMask, this.realClearColor = r.clearColor, this.realViewport = r.viewport, v() || (this.realCanvasWidth = Object.getOwnPropertyDescriptor(r.canvas.__proto__, "width"), this.realCanvasHeight = Object.getOwnPropertyDescriptor(r.canvas.__proto__, "height")), this.isPatched = !1, this.lastBoundFramebuffer = null, this.cullFace = !1, this.depthTest = !1, this.blend = !1, this.scissorTest = !1, this.stencilTest = !1, this.viewport = [0, 0, 0, 0], this.colorMask = [!0, !0, !0, !0], this.clearColor = [0, 0, 0, 0], this.attribs = {
        position: 0,
        texCoord: 1
      }, this.program = z(r, Xe, g, this.attribs), this.uniforms = Z(r, this.program), this.viewportOffsetScale = new Float32Array(8), this.setTextureBounds(), this.vertexBuffer = r.createBuffer(), this.indexBuffer = r.createBuffer(), this.indexCount = 0, this.renderTarget = r.createTexture(), this.framebuffer = r.createFramebuffer(), this.depthStencilBuffer = null, this.depthBuffer = null, this.stencilBuffer = null, this.ctxAttribs.depth && this.ctxAttribs.stencil ? this.depthStencilBuffer = r.createRenderbuffer() : this.ctxAttribs.depth ? this.depthBuffer = r.createRenderbuffer() : this.ctxAttribs.stencil && (this.stencilBuffer = r.createRenderbuffer()), this.patch(), this.onResize();
    }
    ee.prototype.destroy = function() {
      var r = this.gl;
      this.unpatch(), r.deleteProgram(this.program), r.deleteBuffer(this.vertexBuffer), r.deleteBuffer(this.indexBuffer), r.deleteTexture(this.renderTarget), r.deleteFramebuffer(this.framebuffer), this.depthStencilBuffer && r.deleteRenderbuffer(this.depthStencilBuffer), this.depthBuffer && r.deleteRenderbuffer(this.depthBuffer), this.stencilBuffer && r.deleteRenderbuffer(this.stencilBuffer), this.cardboardUI && this.cardboardUI.destroy();
    }, ee.prototype.onResize = function() {
      var r = this.gl, n = this, s = [r.RENDERBUFFER_BINDING, r.TEXTURE_BINDING_2D, r.TEXTURE0];
      Be(r, s, function(l) {
        n.realBindFramebuffer.call(l, l.FRAMEBUFFER, null), n.scissorTest && n.realDisable.call(l, l.SCISSOR_TEST), n.realColorMask.call(l, !0, !0, !0, !0), n.realViewport.call(l, 0, 0, l.drawingBufferWidth, l.drawingBufferHeight), n.realClearColor.call(l, 0, 0, 0, 1), l.clear(l.COLOR_BUFFER_BIT), n.realBindFramebuffer.call(l, l.FRAMEBUFFER, n.framebuffer), l.bindTexture(l.TEXTURE_2D, n.renderTarget), l.texImage2D(l.TEXTURE_2D, 0, n.ctxAttribs.alpha ? l.RGBA : l.RGB, n.bufferWidth, n.bufferHeight, 0, n.ctxAttribs.alpha ? l.RGBA : l.RGB, l.UNSIGNED_BYTE, null), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MAG_FILTER, l.LINEAR), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.LINEAR), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.CLAMP_TO_EDGE), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.CLAMP_TO_EDGE), l.framebufferTexture2D(l.FRAMEBUFFER, l.COLOR_ATTACHMENT0, l.TEXTURE_2D, n.renderTarget, 0), n.ctxAttribs.depth && n.ctxAttribs.stencil ? (l.bindRenderbuffer(l.RENDERBUFFER, n.depthStencilBuffer), l.renderbufferStorage(l.RENDERBUFFER, l.DEPTH_STENCIL, n.bufferWidth, n.bufferHeight), l.framebufferRenderbuffer(l.FRAMEBUFFER, l.DEPTH_STENCIL_ATTACHMENT, l.RENDERBUFFER, n.depthStencilBuffer)) : n.ctxAttribs.depth ? (l.bindRenderbuffer(l.RENDERBUFFER, n.depthBuffer), l.renderbufferStorage(l.RENDERBUFFER, l.DEPTH_COMPONENT16, n.bufferWidth, n.bufferHeight), l.framebufferRenderbuffer(l.FRAMEBUFFER, l.DEPTH_ATTACHMENT, l.RENDERBUFFER, n.depthBuffer)) : n.ctxAttribs.stencil && (l.bindRenderbuffer(l.RENDERBUFFER, n.stencilBuffer), l.renderbufferStorage(l.RENDERBUFFER, l.STENCIL_INDEX8, n.bufferWidth, n.bufferHeight), l.framebufferRenderbuffer(l.FRAMEBUFFER, l.STENCIL_ATTACHMENT, l.RENDERBUFFER, n.stencilBuffer)), !l.checkFramebufferStatus(l.FRAMEBUFFER) === l.FRAMEBUFFER_COMPLETE && console.error("Framebuffer incomplete!"), n.realBindFramebuffer.call(l, l.FRAMEBUFFER, n.lastBoundFramebuffer), n.scissorTest && n.realEnable.call(l, l.SCISSOR_TEST), n.realColorMask.apply(l, n.colorMask), n.realViewport.apply(l, n.viewport), n.realClearColor.apply(l, n.clearColor);
      }), this.cardboardUI && this.cardboardUI.onResize();
    }, ee.prototype.patch = function() {
      if (!this.isPatched) {
        var r = this, n = this.gl.canvas, s = this.gl;
        v() || (n.width = P() * this.bufferScale, n.height = I() * this.bufferScale, Object.defineProperty(n, "width", {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return r.bufferWidth;
          },
          set: function(c) {
            r.bufferWidth = c, r.realCanvasWidth.set.call(n, c), r.onResize();
          }
        }), Object.defineProperty(n, "height", {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return r.bufferHeight;
          },
          set: function(c) {
            r.bufferHeight = c, r.realCanvasHeight.set.call(n, c), r.onResize();
          }
        })), this.lastBoundFramebuffer = s.getParameter(s.FRAMEBUFFER_BINDING), this.lastBoundFramebuffer == null && (this.lastBoundFramebuffer = this.framebuffer, this.gl.bindFramebuffer(s.FRAMEBUFFER, this.framebuffer)), this.gl.bindFramebuffer = function(l, c) {
          r.lastBoundFramebuffer = c || r.framebuffer, r.realBindFramebuffer.call(s, l, r.lastBoundFramebuffer);
        }, this.cullFace = s.getParameter(s.CULL_FACE), this.depthTest = s.getParameter(s.DEPTH_TEST), this.blend = s.getParameter(s.BLEND), this.scissorTest = s.getParameter(s.SCISSOR_TEST), this.stencilTest = s.getParameter(s.STENCIL_TEST), s.enable = function(l) {
          switch (l) {
            case s.CULL_FACE:
              r.cullFace = !0;
              break;
            case s.DEPTH_TEST:
              r.depthTest = !0;
              break;
            case s.BLEND:
              r.blend = !0;
              break;
            case s.SCISSOR_TEST:
              r.scissorTest = !0;
              break;
            case s.STENCIL_TEST:
              r.stencilTest = !0;
              break;
          }
          r.realEnable.call(s, l);
        }, s.disable = function(l) {
          switch (l) {
            case s.CULL_FACE:
              r.cullFace = !1;
              break;
            case s.DEPTH_TEST:
              r.depthTest = !1;
              break;
            case s.BLEND:
              r.blend = !1;
              break;
            case s.SCISSOR_TEST:
              r.scissorTest = !1;
              break;
            case s.STENCIL_TEST:
              r.stencilTest = !1;
              break;
          }
          r.realDisable.call(s, l);
        }, this.colorMask = s.getParameter(s.COLOR_WRITEMASK), s.colorMask = function(l, c, A, f) {
          r.colorMask[0] = l, r.colorMask[1] = c, r.colorMask[2] = A, r.colorMask[3] = f, r.realColorMask.call(s, l, c, A, f);
        }, this.clearColor = s.getParameter(s.COLOR_CLEAR_VALUE), s.clearColor = function(l, c, A, f) {
          r.clearColor[0] = l, r.clearColor[1] = c, r.clearColor[2] = A, r.clearColor[3] = f, r.realClearColor.call(s, l, c, A, f);
        }, this.viewport = s.getParameter(s.VIEWPORT), s.viewport = function(l, c, A, f) {
          r.viewport[0] = l, r.viewport[1] = c, r.viewport[2] = A, r.viewport[3] = f, r.realViewport.call(s, l, c, A, f);
        }, this.isPatched = !0, L(n);
      }
    }, ee.prototype.unpatch = function() {
      if (this.isPatched) {
        var r = this.gl, n = this.gl.canvas;
        v() || (Object.defineProperty(n, "width", this.realCanvasWidth), Object.defineProperty(n, "height", this.realCanvasHeight)), n.width = this.bufferWidth, n.height = this.bufferHeight, r.bindFramebuffer = this.realBindFramebuffer, r.enable = this.realEnable, r.disable = this.realDisable, r.colorMask = this.realColorMask, r.clearColor = this.realClearColor, r.viewport = this.realViewport, this.lastBoundFramebuffer == this.framebuffer && r.bindFramebuffer(r.FRAMEBUFFER, null), this.isPatched = !1, setTimeout(function() {
          L(n);
        }, 1);
      }
    }, ee.prototype.setTextureBounds = function(r, n) {
      r || (r = [0, 0, 0.5, 1]), n || (n = [0.5, 0, 0.5, 1]), this.viewportOffsetScale[0] = r[0], this.viewportOffsetScale[1] = r[1], this.viewportOffsetScale[2] = r[2], this.viewportOffsetScale[3] = r[3], this.viewportOffsetScale[4] = n[0], this.viewportOffsetScale[5] = n[1], this.viewportOffsetScale[6] = n[2], this.viewportOffsetScale[7] = n[3];
    }, ee.prototype.submitFrame = function() {
      var r = this.gl, n = this, s = [];
      if (this.dirtySubmitFrameBindings || s.push(r.CURRENT_PROGRAM, r.ARRAY_BUFFER_BINDING, r.ELEMENT_ARRAY_BUFFER_BINDING, r.TEXTURE_BINDING_2D, r.TEXTURE0), Be(r, s, function(c) {
        n.realBindFramebuffer.call(c, c.FRAMEBUFFER, null);
        var A = 0, f = 0;
        n.instanceExt && (A = c.getVertexAttrib(n.attribs.position, n.instanceExt.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE), f = c.getVertexAttrib(n.attribs.texCoord, n.instanceExt.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE)), n.cullFace && n.realDisable.call(c, c.CULL_FACE), n.depthTest && n.realDisable.call(c, c.DEPTH_TEST), n.blend && n.realDisable.call(c, c.BLEND), n.scissorTest && n.realDisable.call(c, c.SCISSOR_TEST), n.stencilTest && n.realDisable.call(c, c.STENCIL_TEST), n.realColorMask.call(c, !0, !0, !0, !0), n.realViewport.call(c, 0, 0, c.drawingBufferWidth, c.drawingBufferHeight), (n.ctxAttribs.alpha || v()) && (n.realClearColor.call(c, 0, 0, 0, 1), c.clear(c.COLOR_BUFFER_BIT)), c.useProgram(n.program), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, n.indexBuffer), c.bindBuffer(c.ARRAY_BUFFER, n.vertexBuffer), c.enableVertexAttribArray(n.attribs.position), c.enableVertexAttribArray(n.attribs.texCoord), c.vertexAttribPointer(n.attribs.position, 2, c.FLOAT, !1, 20, 0), c.vertexAttribPointer(n.attribs.texCoord, 3, c.FLOAT, !1, 20, 8), n.instanceExt && (A != 0 && n.instanceExt.vertexAttribDivisorANGLE(n.attribs.position, 0), f != 0 && n.instanceExt.vertexAttribDivisorANGLE(n.attribs.texCoord, 0)), c.activeTexture(c.TEXTURE0), c.uniform1i(n.uniforms.diffuse, 0), c.bindTexture(c.TEXTURE_2D, n.renderTarget), c.uniform4fv(n.uniforms.viewportOffsetScale, n.viewportOffsetScale), c.drawElements(c.TRIANGLES, n.indexCount, c.UNSIGNED_SHORT, 0), n.cardboardUI && n.cardboardUI.renderNoState(), n.realBindFramebuffer.call(n.gl, c.FRAMEBUFFER, n.framebuffer), n.ctxAttribs.preserveDrawingBuffer || (n.realClearColor.call(c, 0, 0, 0, 0), c.clear(c.COLOR_BUFFER_BIT)), n.dirtySubmitFrameBindings || n.realBindFramebuffer.call(c, c.FRAMEBUFFER, n.lastBoundFramebuffer), n.cullFace && n.realEnable.call(c, c.CULL_FACE), n.depthTest && n.realEnable.call(c, c.DEPTH_TEST), n.blend && n.realEnable.call(c, c.BLEND), n.scissorTest && n.realEnable.call(c, c.SCISSOR_TEST), n.stencilTest && n.realEnable.call(c, c.STENCIL_TEST), n.realColorMask.apply(c, n.colorMask), n.realViewport.apply(c, n.viewport), (n.ctxAttribs.alpha || !n.ctxAttribs.preserveDrawingBuffer) && n.realClearColor.apply(c, n.clearColor), n.instanceExt && (A != 0 && n.instanceExt.vertexAttribDivisorANGLE(n.attribs.position, A), f != 0 && n.instanceExt.vertexAttribDivisorANGLE(n.attribs.texCoord, f));
      }), v()) {
        var l = r.canvas;
        (l.width != n.bufferWidth || l.height != n.bufferHeight) && (n.bufferWidth = l.width, n.bufferHeight = l.height, n.onResize());
      }
    }, ee.prototype.updateDeviceInfo = function(r) {
      var n = this.gl, s = this, l = [n.ARRAY_BUFFER_BINDING, n.ELEMENT_ARRAY_BUFFER_BINDING];
      Be(n, l, function(c) {
        var A = s.computeMeshVertices_(s.meshWidth, s.meshHeight, r);
        if (c.bindBuffer(c.ARRAY_BUFFER, s.vertexBuffer), c.bufferData(c.ARRAY_BUFFER, A, c.STATIC_DRAW), !s.indexCount) {
          var f = s.computeMeshIndices_(s.meshWidth, s.meshHeight);
          c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, s.indexBuffer), c.bufferData(c.ELEMENT_ARRAY_BUFFER, f, c.STATIC_DRAW), s.indexCount = f.length;
        }
      });
    }, ee.prototype.computeMeshVertices_ = function(r, n, s) {
      for (var l = new Float32Array(2 * r * n * 5), c = s.getLeftEyeVisibleTanAngles(), A = s.getLeftEyeNoLensTanAngles(), f = s.getLeftEyeVisibleScreenRect(A), S = 0, E = 0; E < 2; E++) {
        for (var p = 0; p < n; p++)
          for (var w = 0; w < r; w++, S++) {
            var T = w / (r - 1), k = p / (n - 1), U = T, X = k, q = m(c[0], c[2], T), j = m(c[3], c[1], k), Y = Math.sqrt(q * q + j * j), ne = s.distortion.distortInverse(Y), he = q * ne / Y, ve = j * ne / Y;
            T = (he - A[0]) / (A[2] - A[0]), k = (ve - A[3]) / (A[1] - A[3]), T = (f.x + T * f.width - 0.5) * 2, k = (f.y + k * f.height - 0.5) * 2, l[S * 5 + 0] = T, l[S * 5 + 1] = k, l[S * 5 + 2] = U, l[S * 5 + 3] = X, l[S * 5 + 4] = E;
          }
        var oe = c[2] - c[0];
        c[0] = -(oe + c[0]), c[2] = oe - c[2], oe = A[2] - A[0], A[0] = -(oe + A[0]), A[2] = oe - A[2], f.x = 1 - (f.x + f.width);
      }
      return l;
    }, ee.prototype.computeMeshIndices_ = function(r, n) {
      for (var s = new Uint16Array(2 * (r - 1) * (n - 1) * 6), l = r / 2, c = n / 2, A = 0, f = 0, S = 0; S < 2; S++)
        for (var E = 0; E < n; E++)
          for (var p = 0; p < r; p++, A++)
            p == 0 || E == 0 || (p <= l == E <= c ? (s[f++] = A, s[f++] = A - r - 1, s[f++] = A - r, s[f++] = A - r - 1, s[f++] = A, s[f++] = A - 1) : (s[f++] = A - 1, s[f++] = A - r, s[f++] = A, s[f++] = A - r, s[f++] = A - 1, s[f++] = A - r - 1));
      return s;
    }, ee.prototype.getOwnPropertyDescriptor_ = function(r, n) {
      var s = Object.getOwnPropertyDescriptor(r, n);
      return (s.get === void 0 || s.set === void 0) && (s.configurable = !0, s.enumerable = !0, s.get = function() {
        return this.getAttribute(n);
      }, s.set = function(l) {
        this.setAttribute(n, l);
      }), s;
    };
    var ce = ["attribute vec2 position;", "uniform mat4 projectionMat;", "void main() {", "  gl_Position = projectionMat * vec4( position, -1.0, 1.0 );", "}"].join(`
`), re = ["precision mediump float;", "uniform vec4 color;", "void main() {", "  gl_FragColor = color;", "}"].join(`
`), de = Math.PI / 180, me = 60, Ke = 12, _t = 20, kt = 1, di = 0.75, Ai = 0.3125, dr = 4, We = 28, Gt = 1.5;
    function He(r) {
      this.gl = r, this.attribs = {
        position: 0
      }, this.program = z(r, ce, re, this.attribs), this.uniforms = Z(r, this.program), this.vertexBuffer = r.createBuffer(), this.gearOffset = 0, this.gearVertexCount = 0, this.arrowOffset = 0, this.arrowVertexCount = 0, this.projMat = new Float32Array(16), this.listener = null, this.onResize();
    }
    He.prototype.destroy = function() {
      var r = this.gl;
      this.listener && r.canvas.removeEventListener("click", this.listener, !1), r.deleteProgram(this.program), r.deleteBuffer(this.vertexBuffer);
    }, He.prototype.listen = function(r, n) {
      var s = this.gl.canvas;
      this.listener = function(l) {
        var c = s.clientWidth / 2, A = We * Gt;
        l.clientX > c - A && l.clientX < c + A && l.clientY > s.clientHeight - A ? r(l) : l.clientX < A && l.clientY < A && n(l);
      }, s.addEventListener("click", this.listener, !1);
    }, He.prototype.onResize = function() {
      var r = this.gl, n = this, s = [r.ARRAY_BUFFER_BINDING];
      Be(r, s, function(l) {
        var c = [], A = l.drawingBufferWidth / 2, f = Math.max(screen.width, screen.height) * window.devicePixelRatio, S = l.drawingBufferWidth / f, E = S * window.devicePixelRatio, p = dr * E / 2, w = We * Gt * E, T = We * E / 2, k = (We * Gt - We) * E;
        c.push(A - p, w), c.push(A - p, l.drawingBufferHeight), c.push(A + p, w), c.push(A + p, l.drawingBufferHeight), n.gearOffset = c.length / 2;
        function U(ne, he) {
          var ve = (90 - ne) * de, oe = Math.cos(ve), we = Math.sin(ve);
          c.push(Ai * oe * T + A, Ai * we * T + T), c.push(he * oe * T + A, he * we * T + T);
        }
        for (var X = 0; X <= 6; X++) {
          var q = X * me;
          U(q, kt), U(q + Ke, kt), U(q + _t, di), U(q + (me - _t), di), U(q + (me - Ke), kt);
        }
        n.gearVertexCount = c.length / 2 - n.gearOffset, n.arrowOffset = c.length / 2;
        function j(ne, he) {
          c.push(k + ne, l.drawingBufferHeight - k - he);
        }
        var Y = p / Math.sin(45 * de);
        j(0, T), j(T, 0), j(T + Y, Y), j(Y, T + Y), j(Y, T - Y), j(0, T), j(T, T * 2), j(T + Y, T * 2 - Y), j(Y, T - Y), j(0, T), j(Y, T - p), j(We * E, T - p), j(Y, T + p), j(We * E, T + p), n.arrowVertexCount = c.length / 2 - n.arrowOffset, l.bindBuffer(l.ARRAY_BUFFER, n.vertexBuffer), l.bufferData(l.ARRAY_BUFFER, new Float32Array(c), l.STATIC_DRAW);
      });
    }, He.prototype.render = function() {
      var r = this.gl, n = this, s = [r.CULL_FACE, r.DEPTH_TEST, r.BLEND, r.SCISSOR_TEST, r.STENCIL_TEST, r.COLOR_WRITEMASK, r.VIEWPORT, r.CURRENT_PROGRAM, r.ARRAY_BUFFER_BINDING];
      Be(r, s, function(l) {
        l.disable(l.CULL_FACE), l.disable(l.DEPTH_TEST), l.disable(l.BLEND), l.disable(l.SCISSOR_TEST), l.disable(l.STENCIL_TEST), l.colorMask(!0, !0, !0, !0), l.viewport(0, 0, l.drawingBufferWidth, l.drawingBufferHeight), n.renderNoState();
      });
    }, He.prototype.renderNoState = function() {
      var r = this.gl;
      r.useProgram(this.program), r.bindBuffer(r.ARRAY_BUFFER, this.vertexBuffer), r.enableVertexAttribArray(this.attribs.position), r.vertexAttribPointer(this.attribs.position, 2, r.FLOAT, !1, 8, 0), r.uniform4f(this.uniforms.color, 1, 1, 1, 1), K(this.projMat, 0, r.drawingBufferWidth, 0, r.drawingBufferHeight, 0.1, 1024), r.uniformMatrix4fv(this.uniforms.projectionMat, !1, this.projMat), r.drawArrays(r.TRIANGLE_STRIP, 0, 4), r.drawArrays(r.TRIANGLE_STRIP, this.gearOffset, this.gearVertexCount), r.drawArrays(r.TRIANGLE_STRIP, this.arrowOffset, this.arrowVertexCount);
    };
    function Mt(r) {
      this.coefficients = r;
    }
    Mt.prototype.distortInverse = function(r) {
      for (var n = 0, s = 1, l = r - this.distort(n); Math.abs(s - n) > 1e-4; ) {
        var c = r - this.distort(s), A = s - c * ((s - n) / (c - l));
        n = s, s = A, l = c;
      }
      return s;
    }, Mt.prototype.distort = function(r) {
      for (var n = r * r, s = 0, l = 0; l < this.coefficients.length; l++)
        s = n * (s + this.coefficients[l]);
      return (s + 1) * r;
    };
    var Le = Math.PI / 180, Oe = 180 / Math.PI, ae = function(n, s, l) {
      this.x = n || 0, this.y = s || 0, this.z = l || 0;
    };
    ae.prototype = {
      constructor: ae,
      set: function(n, s, l) {
        return this.x = n, this.y = s, this.z = l, this;
      },
      copy: function(n) {
        return this.x = n.x, this.y = n.y, this.z = n.z, this;
      },
      length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
      },
      normalize: function() {
        var n = this.length();
        if (n !== 0) {
          var s = 1 / n;
          this.multiplyScalar(s);
        } else
          this.x = 0, this.y = 0, this.z = 0;
        return this;
      },
      multiplyScalar: function(n) {
        this.x *= n, this.y *= n, this.z *= n;
      },
      applyQuaternion: function(n) {
        var s = this.x, l = this.y, c = this.z, A = n.x, f = n.y, S = n.z, E = n.w, p = E * s + f * c - S * l, w = E * l + S * s - A * c, T = E * c + A * l - f * s, k = -A * s - f * l - S * c;
        return this.x = p * E + k * -A + w * -S - T * -f, this.y = w * E + k * -f + T * -A - p * -S, this.z = T * E + k * -S + p * -f - w * -A, this;
      },
      dot: function(n) {
        return this.x * n.x + this.y * n.y + this.z * n.z;
      },
      crossVectors: function(n, s) {
        var l = n.x, c = n.y, A = n.z, f = s.x, S = s.y, E = s.z;
        return this.x = c * E - A * S, this.y = A * f - l * E, this.z = l * S - c * f, this;
      }
    };
    var te = function(n, s, l, c) {
      this.x = n || 0, this.y = s || 0, this.z = l || 0, this.w = c !== void 0 ? c : 1;
    };
    te.prototype = {
      constructor: te,
      set: function(n, s, l, c) {
        return this.x = n, this.y = s, this.z = l, this.w = c, this;
      },
      copy: function(n) {
        return this.x = n.x, this.y = n.y, this.z = n.z, this.w = n.w, this;
      },
      setFromEulerXYZ: function(n, s, l) {
        var c = Math.cos(n / 2), A = Math.cos(s / 2), f = Math.cos(l / 2), S = Math.sin(n / 2), E = Math.sin(s / 2), p = Math.sin(l / 2);
        return this.x = S * A * f + c * E * p, this.y = c * E * f - S * A * p, this.z = c * A * p + S * E * f, this.w = c * A * f - S * E * p, this;
      },
      setFromEulerYXZ: function(n, s, l) {
        var c = Math.cos(n / 2), A = Math.cos(s / 2), f = Math.cos(l / 2), S = Math.sin(n / 2), E = Math.sin(s / 2), p = Math.sin(l / 2);
        return this.x = S * A * f + c * E * p, this.y = c * E * f - S * A * p, this.z = c * A * p - S * E * f, this.w = c * A * f + S * E * p, this;
      },
      setFromAxisAngle: function(n, s) {
        var l = s / 2, c = Math.sin(l);
        return this.x = n.x * c, this.y = n.y * c, this.z = n.z * c, this.w = Math.cos(l), this;
      },
      multiply: function(n) {
        return this.multiplyQuaternions(this, n);
      },
      multiplyQuaternions: function(n, s) {
        var l = n.x, c = n.y, A = n.z, f = n.w, S = s.x, E = s.y, p = s.z, w = s.w;
        return this.x = l * w + f * S + c * p - A * E, this.y = c * w + f * E + A * S - l * p, this.z = A * w + f * p + l * E - c * S, this.w = f * w - l * S - c * E - A * p, this;
      },
      inverse: function() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.normalize(), this;
      },
      normalize: function() {
        var n = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        return n === 0 ? (this.x = 0, this.y = 0, this.z = 0, this.w = 1) : (n = 1 / n, this.x = this.x * n, this.y = this.y * n, this.z = this.z * n, this.w = this.w * n), this;
      },
      slerp: function(n, s) {
        if (s === 0)
          return this;
        if (s === 1)
          return this.copy(n);
        var l = this.x, c = this.y, A = this.z, f = this.w, S = f * n.w + l * n.x + c * n.y + A * n.z;
        if (S < 0 ? (this.w = -n.w, this.x = -n.x, this.y = -n.y, this.z = -n.z, S = -S) : this.copy(n), S >= 1)
          return this.w = f, this.x = l, this.y = c, this.z = A, this;
        var E = Math.acos(S), p = Math.sqrt(1 - S * S);
        if (Math.abs(p) < 1e-3)
          return this.w = 0.5 * (f + this.w), this.x = 0.5 * (l + this.x), this.y = 0.5 * (c + this.y), this.z = 0.5 * (A + this.z), this;
        var w = Math.sin((1 - s) * E) / p, T = Math.sin(s * E) / p;
        return this.w = f * w + this.w * T, this.x = l * w + this.x * T, this.y = c * w + this.y * T, this.z = A * w + this.z * T, this;
      },
      setFromUnitVectors: function() {
        var r, n, s = 1e-6;
        return function(l, c) {
          return r === void 0 && (r = new ae()), n = l.dot(c) + 1, n < s ? (n = 0, Math.abs(l.x) > Math.abs(l.z) ? r.set(-l.y, l.x, 0) : r.set(0, -l.z, l.y)) : r.crossVectors(l, c), this.x = r.x, this.y = r.y, this.z = r.z, this.w = n, this.normalize(), this;
        };
      }()
    };
    function Vt(r) {
      this.width = r.width || P(), this.height = r.height || I(), this.widthMeters = r.widthMeters, this.heightMeters = r.heightMeters, this.bevelMeters = r.bevelMeters;
    }
    var Ar = new Vt({
      widthMeters: 0.11,
      heightMeters: 0.062,
      bevelMeters: 4e-3
    }), ur = new Vt({
      widthMeters: 0.1038,
      heightMeters: 0.0584,
      bevelMeters: 4e-3
    }), Ut = {
      CardboardV1: new zt({
        id: "CardboardV1",
        label: "Cardboard I/O 2014",
        fov: 40,
        interLensDistance: 0.06,
        baselineLensDistance: 0.035,
        screenLensDistance: 0.042,
        distortionCoefficients: [0.441, 0.156],
        inverseCoefficients: [-0.4410035, 0.42756155, -0.4804439, 0.5460139, -0.58821183, 0.5733938, -0.48303202, 0.33299083, -0.17573841, 0.0651772, -0.01488963, 1559834e-9]
      }),
      CardboardV2: new zt({
        id: "CardboardV2",
        label: "Cardboard I/O 2015",
        fov: 60,
        interLensDistance: 0.064,
        baselineLensDistance: 0.035,
        screenLensDistance: 0.039,
        distortionCoefficients: [0.34, 0.55],
        inverseCoefficients: [-0.33836704, -0.18162185, 0.862655, -1.2462051, 1.0560602, -0.58208317, 0.21609078, -0.05444823, 9177956e-9, -9904169e-10, 6183535e-11, -16981803e-13]
      })
    };
    function Ae(r, n) {
      this.viewer = Ut.CardboardV2, this.updateDeviceParams(r), this.distortion = new Mt(this.viewer.distortionCoefficients);
      for (var s = 0; s < n.length; s++) {
        var l = n[s];
        Ut[l.id] = new zt(l);
      }
    }
    Ae.prototype.updateDeviceParams = function(r) {
      this.device = this.determineDevice_(r) || this.device;
    }, Ae.prototype.getDevice = function() {
      return this.device;
    }, Ae.prototype.setViewer = function(r) {
      this.viewer = r, this.distortion = new Mt(this.viewer.distortionCoefficients);
    }, Ae.prototype.determineDevice_ = function(r) {
      if (!r)
        return v() ? (console.warn("Using fallback iOS device measurements."), ur) : (console.warn("Using fallback Android device measurements."), Ar);
      var n = 0.0254, s = n / r.xdpi, l = n / r.ydpi, c = P(), A = I();
      return new Vt({
        widthMeters: s * c,
        heightMeters: l * A,
        bevelMeters: r.bevelMm * 1e-3
      });
    }, Ae.prototype.getDistortedFieldOfViewLeftEye = function() {
      var r = this.viewer, n = this.device, s = this.distortion, l = r.screenLensDistance, c = (n.widthMeters - r.interLensDistance) / 2, A = r.interLensDistance / 2, f = r.baselineLensDistance - n.bevelMeters, S = n.heightMeters - f, E = Oe * Math.atan(s.distort(c / l)), p = Oe * Math.atan(s.distort(A / l)), w = Oe * Math.atan(s.distort(f / l)), T = Oe * Math.atan(s.distort(S / l));
      return {
        leftDegrees: Math.min(E, r.fov),
        rightDegrees: Math.min(p, r.fov),
        downDegrees: Math.min(w, r.fov),
        upDegrees: Math.min(T, r.fov)
      };
    }, Ae.prototype.getLeftEyeVisibleTanAngles = function() {
      var r = this.viewer, n = this.device, s = this.distortion, l = Math.tan(-Le * r.fov), c = Math.tan(Le * r.fov), A = Math.tan(Le * r.fov), f = Math.tan(-Le * r.fov), S = n.widthMeters / 4, E = n.heightMeters / 2, p = r.baselineLensDistance - n.bevelMeters - E, w = r.interLensDistance / 2 - S, T = -p, k = r.screenLensDistance, U = s.distort((w - S) / k), X = s.distort((T + E) / k), q = s.distort((w + S) / k), j = s.distort((T - E) / k), Y = new Float32Array(4);
      return Y[0] = Math.max(l, U), Y[1] = Math.min(c, X), Y[2] = Math.min(A, q), Y[3] = Math.max(f, j), Y;
    }, Ae.prototype.getLeftEyeNoLensTanAngles = function() {
      var r = this.viewer, n = this.device, s = this.distortion, l = new Float32Array(4), c = s.distortInverse(Math.tan(-Le * r.fov)), A = s.distortInverse(Math.tan(Le * r.fov)), f = s.distortInverse(Math.tan(Le * r.fov)), S = s.distortInverse(Math.tan(-Le * r.fov)), E = n.widthMeters / 4, p = n.heightMeters / 2, w = r.baselineLensDistance - n.bevelMeters - p, T = r.interLensDistance / 2 - E, k = -w, U = r.screenLensDistance, X = (T - E) / U, q = (k + p) / U, j = (T + E) / U, Y = (k - p) / U;
      return l[0] = Math.max(c, X), l[1] = Math.min(A, q), l[2] = Math.min(f, j), l[3] = Math.max(S, Y), l;
    }, Ae.prototype.getLeftEyeVisibleScreenRect = function(r) {
      var n = this.viewer, s = this.device, l = n.screenLensDistance, c = (s.widthMeters - n.interLensDistance) / 2, A = n.baselineLensDistance - s.bevelMeters, f = (r[0] * l + c) / s.widthMeters, S = (r[1] * l + A) / s.heightMeters, E = (r[2] * l + c) / s.widthMeters, p = (r[3] * l + A) / s.heightMeters;
      return {
        x: f,
        y: p,
        width: E - f,
        height: S - p
      };
    }, Ae.prototype.getFieldOfViewLeftEye = function(r) {
      return r ? this.getUndistortedFieldOfViewLeftEye() : this.getDistortedFieldOfViewLeftEye();
    }, Ae.prototype.getFieldOfViewRightEye = function(r) {
      var n = this.getFieldOfViewLeftEye(r);
      return {
        leftDegrees: n.rightDegrees,
        rightDegrees: n.leftDegrees,
        upDegrees: n.upDegrees,
        downDegrees: n.downDegrees
      };
    }, Ae.prototype.getUndistortedFieldOfViewLeftEye = function() {
      var r = this.getUndistortedParams_();
      return {
        leftDegrees: Oe * Math.atan(r.outerDist),
        rightDegrees: Oe * Math.atan(r.innerDist),
        downDegrees: Oe * Math.atan(r.bottomDist),
        upDegrees: Oe * Math.atan(r.topDist)
      };
    }, Ae.prototype.getUndistortedViewportLeftEye = function() {
      var r = this.getUndistortedParams_(), n = this.viewer, s = this.device, l = n.screenLensDistance, c = s.widthMeters / l, A = s.heightMeters / l, f = s.width / c, S = s.height / A, E = Math.round((r.eyePosX - r.outerDist) * f), p = Math.round((r.eyePosY - r.bottomDist) * S);
      return {
        x: E,
        y: p,
        width: Math.round((r.eyePosX + r.innerDist) * f) - E,
        height: Math.round((r.eyePosY + r.topDist) * S) - p
      };
    }, Ae.prototype.getUndistortedParams_ = function() {
      var r = this.viewer, n = this.device, s = this.distortion, l = r.screenLensDistance, c = r.interLensDistance / 2 / l, A = n.widthMeters / l, f = n.heightMeters / l, S = A / 2 - c, E = (r.baselineLensDistance - n.bevelMeters) / l, p = r.fov, w = s.distortInverse(Math.tan(Le * p)), T = Math.min(S, w), k = Math.min(c, w), U = Math.min(E, w), X = Math.min(f - E, w);
      return {
        outerDist: T,
        innerDist: k,
        topDist: X,
        bottomDist: U,
        eyePosX: S,
        eyePosY: E
      };
    };
    function zt(r) {
      this.id = r.id, this.label = r.label, this.fov = r.fov, this.interLensDistance = r.interLensDistance, this.baselineLensDistance = r.baselineLensDistance, this.screenLensDistance = r.screenLensDistance, this.distortionCoefficients = r.distortionCoefficients, this.inverseCoefficients = r.inverseCoefficients;
    }
    Ae.Viewers = Ut;
    var fr = 1, pr = "2019-11-09T17:36:14Z", mr = [{ type: "android", rules: [{ mdmh: "asus/*/Nexus 7/*" }, { ua: "Nexus 7" }], dpi: [320.8, 323], bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "asus/*/ASUS_X00PD/*" }, { ua: "ASUS_X00PD" }], dpi: 245, bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "asus/*/ASUS_X008D/*" }, { ua: "ASUS_X008D" }], dpi: 282, bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "asus/*/ASUS_Z00AD/*" }, { ua: "ASUS_Z00AD" }], dpi: [403, 404.6], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "Google/*/Pixel 2 XL/*" }, { ua: "Pixel 2 XL" }], dpi: 537.9, bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "Google/*/Pixel 3 XL/*" }, { ua: "Pixel 3 XL" }], dpi: [558.5, 553.8], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "Google/*/Pixel XL/*" }, { ua: "Pixel XL" }], dpi: [537.9, 533], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "Google/*/Pixel 3/*" }, { ua: "Pixel 3" }], dpi: 442.4, bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "Google/*/Pixel 2/*" }, { ua: "Pixel 2" }], dpi: 441, bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "Google/*/Pixel/*" }, { ua: "Pixel" }], dpi: [432.6, 436.7], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "HTC/*/HTC6435LVW/*" }, { ua: "HTC6435LVW" }], dpi: [449.7, 443.3], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "HTC/*/HTC One XL/*" }, { ua: "HTC One XL" }], dpi: [315.3, 314.6], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "htc/*/Nexus 9/*" }, { ua: "Nexus 9" }], dpi: 289, bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "HTC/*/HTC One M9/*" }, { ua: "HTC One M9" }], dpi: [442.5, 443.3], bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "HTC/*/HTC One_M8/*" }, { ua: "HTC One_M8" }], dpi: [449.7, 447.4], bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "HTC/*/HTC One/*" }, { ua: "HTC One" }], dpi: 472.8, bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "Huawei/*/Nexus 6P/*" }, { ua: "Nexus 6P" }], dpi: [515.1, 518], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "Huawei/*/BLN-L24/*" }, { ua: "HONORBLN-L24" }], dpi: 480, bw: 4, ac: 500 }, { type: "android", rules: [{ mdmh: "Huawei/*/BKL-L09/*" }, { ua: "BKL-L09" }], dpi: 403, bw: 3.47, ac: 500 }, { type: "android", rules: [{ mdmh: "LENOVO/*/Lenovo PB2-690Y/*" }, { ua: "Lenovo PB2-690Y" }], dpi: [457.2, 454.713], bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "LGE/*/Nexus 5X/*" }, { ua: "Nexus 5X" }], dpi: [422, 419.9], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "LGE/*/LGMS345/*" }, { ua: "LGMS345" }], dpi: [221.7, 219.1], bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "LGE/*/LG-D800/*" }, { ua: "LG-D800" }], dpi: [422, 424.1], bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "LGE/*/LG-D850/*" }, { ua: "LG-D850" }], dpi: [537.9, 541.9], bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "LGE/*/VS985 4G/*" }, { ua: "VS985 4G" }], dpi: [537.9, 535.6], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "LGE/*/Nexus 5/*" }, { ua: "Nexus 5 B" }], dpi: [442.4, 444.8], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "LGE/*/Nexus 4/*" }, { ua: "Nexus 4" }], dpi: [319.8, 318.4], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "LGE/*/LG-P769/*" }, { ua: "LG-P769" }], dpi: [240.6, 247.5], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "LGE/*/LGMS323/*" }, { ua: "LGMS323" }], dpi: [206.6, 204.6], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "LGE/*/LGLS996/*" }, { ua: "LGLS996" }], dpi: [403.4, 401.5], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "Micromax/*/4560MMX/*" }, { ua: "4560MMX" }], dpi: [240, 219.4], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "Micromax/*/A250/*" }, { ua: "Micromax A250" }], dpi: [480, 446.4], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "Micromax/*/Micromax AQ4501/*" }, { ua: "Micromax AQ4501" }], dpi: 240, bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "motorola/*/G5/*" }, { ua: "Moto G (5) Plus" }], dpi: [403.4, 403], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "motorola/*/DROID RAZR/*" }, { ua: "DROID RAZR" }], dpi: [368.1, 256.7], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "motorola/*/XT830C/*" }, { ua: "XT830C" }], dpi: [254, 255.9], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "motorola/*/XT1021/*" }, { ua: "XT1021" }], dpi: [254, 256.7], bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "motorola/*/XT1023/*" }, { ua: "XT1023" }], dpi: [254, 256.7], bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "motorola/*/XT1028/*" }, { ua: "XT1028" }], dpi: [326.6, 327.6], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "motorola/*/XT1034/*" }, { ua: "XT1034" }], dpi: [326.6, 328.4], bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "motorola/*/XT1053/*" }, { ua: "XT1053" }], dpi: [315.3, 316.1], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "motorola/*/XT1562/*" }, { ua: "XT1562" }], dpi: [403.4, 402.7], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "motorola/*/Nexus 6/*" }, { ua: "Nexus 6 B" }], dpi: [494.3, 489.7], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "motorola/*/XT1063/*" }, { ua: "XT1063" }], dpi: [295, 296.6], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "motorola/*/XT1064/*" }, { ua: "XT1064" }], dpi: [295, 295.6], bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "motorola/*/XT1092/*" }, { ua: "XT1092" }], dpi: [422, 424.1], bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "motorola/*/XT1095/*" }, { ua: "XT1095" }], dpi: [422, 423.4], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "motorola/*/G4/*" }, { ua: "Moto G (4)" }], dpi: 401, bw: 4, ac: 1e3 }, { type: "android", rules: [{ mdmh: "OnePlus/*/A0001/*" }, { ua: "A0001" }], dpi: [403.4, 401], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "OnePlus/*/ONE E1001/*" }, { ua: "ONE E1001" }], dpi: [442.4, 441.4], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "OnePlus/*/ONE E1003/*" }, { ua: "ONE E1003" }], dpi: [442.4, 441.4], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "OnePlus/*/ONE E1005/*" }, { ua: "ONE E1005" }], dpi: [442.4, 441.4], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "OnePlus/*/ONE A2001/*" }, { ua: "ONE A2001" }], dpi: [391.9, 405.4], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "OnePlus/*/ONE A2003/*" }, { ua: "ONE A2003" }], dpi: [391.9, 405.4], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "OnePlus/*/ONE A2005/*" }, { ua: "ONE A2005" }], dpi: [391.9, 405.4], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "OnePlus/*/ONEPLUS A3000/*" }, { ua: "ONEPLUS A3000" }], dpi: 401, bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "OnePlus/*/ONEPLUS A3003/*" }, { ua: "ONEPLUS A3003" }], dpi: 401, bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "OnePlus/*/ONEPLUS A3010/*" }, { ua: "ONEPLUS A3010" }], dpi: 401, bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "OnePlus/*/ONEPLUS A5000/*" }, { ua: "ONEPLUS A5000 " }], dpi: [403.411, 399.737], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "OnePlus/*/ONE A5010/*" }, { ua: "ONEPLUS A5010" }], dpi: [403, 400], bw: 2, ac: 1e3 }, { type: "android", rules: [{ mdmh: "OnePlus/*/ONEPLUS A6000/*" }, { ua: "ONEPLUS A6000" }], dpi: 401, bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "OnePlus/*/ONEPLUS A6003/*" }, { ua: "ONEPLUS A6003" }], dpi: 401, bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "OnePlus/*/ONEPLUS A6010/*" }, { ua: "ONEPLUS A6010" }], dpi: 401, bw: 2, ac: 500 }, { type: "android", rules: [{ mdmh: "OnePlus/*/ONEPLUS A6013/*" }, { ua: "ONEPLUS A6013" }], dpi: 401, bw: 2, ac: 500 }, { type: "android", rules: [{ mdmh: "OPPO/*/X909/*" }, { ua: "X909" }], dpi: [442.4, 444.1], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/GT-I9082/*" }, { ua: "GT-I9082" }], dpi: [184.7, 185.4], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G360P/*" }, { ua: "SM-G360P" }], dpi: [196.7, 205.4], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/Nexus S/*" }, { ua: "Nexus S" }], dpi: [234.5, 229.8], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/GT-I9300/*" }, { ua: "GT-I9300" }], dpi: [304.8, 303.9], bw: 5, ac: 500 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-T230NU/*" }, { ua: "SM-T230NU" }], dpi: 216, bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "samsung/*/SGH-T399/*" }, { ua: "SGH-T399" }], dpi: [217.7, 231.4], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/SGH-M919/*" }, { ua: "SGH-M919" }], dpi: [440.8, 437.7], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-N9005/*" }, { ua: "SM-N9005" }], dpi: [386.4, 387], bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "samsung/*/SAMSUNG-SM-N900A/*" }, { ua: "SAMSUNG-SM-N900A" }], dpi: [386.4, 387.7], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/GT-I9500/*" }, { ua: "GT-I9500" }], dpi: [442.5, 443.3], bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "samsung/*/GT-I9505/*" }, { ua: "GT-I9505" }], dpi: 439.4, bw: 4, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G900F/*" }, { ua: "SM-G900F" }], dpi: [415.6, 431.6], bw: 5, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G900M/*" }, { ua: "SM-G900M" }], dpi: [415.6, 431.6], bw: 5, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G800F/*" }, { ua: "SM-G800F" }], dpi: 326.8, bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G906S/*" }, { ua: "SM-G906S" }], dpi: [562.7, 572.4], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/GT-I9300/*" }, { ua: "GT-I9300" }], dpi: [306.7, 304.8], bw: 5, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-T535/*" }, { ua: "SM-T535" }], dpi: [142.6, 136.4], bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-N920C/*" }, { ua: "SM-N920C" }], dpi: [515.1, 518.4], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-N920P/*" }, { ua: "SM-N920P" }], dpi: [386.3655, 390.144], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-N920W8/*" }, { ua: "SM-N920W8" }], dpi: [515.1, 518.4], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/GT-I9300I/*" }, { ua: "GT-I9300I" }], dpi: [304.8, 305.8], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/GT-I9195/*" }, { ua: "GT-I9195" }], dpi: [249.4, 256.7], bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "samsung/*/SPH-L520/*" }, { ua: "SPH-L520" }], dpi: [249.4, 255.9], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/SAMSUNG-SGH-I717/*" }, { ua: "SAMSUNG-SGH-I717" }], dpi: 285.8, bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/SPH-D710/*" }, { ua: "SPH-D710" }], dpi: [217.7, 204.2], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/GT-N7100/*" }, { ua: "GT-N7100" }], dpi: 265.1, bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/SCH-I605/*" }, { ua: "SCH-I605" }], dpi: 265.1, bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/Galaxy Nexus/*" }, { ua: "Galaxy Nexus" }], dpi: [315.3, 314.2], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-N910H/*" }, { ua: "SM-N910H" }], dpi: [515.1, 518], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-N910C/*" }, { ua: "SM-N910C" }], dpi: [515.2, 520.2], bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G130M/*" }, { ua: "SM-G130M" }], dpi: [165.9, 164.8], bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G928I/*" }, { ua: "SM-G928I" }], dpi: [515.1, 518.4], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G920F/*" }, { ua: "SM-G920F" }], dpi: 580.6, bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G920P/*" }, { ua: "SM-G920P" }], dpi: [522.5, 577], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G925F/*" }, { ua: "SM-G925F" }], dpi: 580.6, bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G925V/*" }, { ua: "SM-G925V" }], dpi: [522.5, 576.6], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G930F/*" }, { ua: "SM-G930F" }], dpi: 576.6, bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G935F/*" }, { ua: "SM-G935F" }], dpi: 533, bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G950F/*" }, { ua: "SM-G950F" }], dpi: [562.707, 565.293], bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G955U/*" }, { ua: "SM-G955U" }], dpi: [522.514, 525.762], bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G955F/*" }, { ua: "SM-G955F" }], dpi: [522.514, 525.762], bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G960F/*" }, { ua: "SM-G960F" }], dpi: [569.575, 571.5], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G9600/*" }, { ua: "SM-G9600" }], dpi: [569.575, 571.5], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G960T/*" }, { ua: "SM-G960T" }], dpi: [569.575, 571.5], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G960N/*" }, { ua: "SM-G960N" }], dpi: [569.575, 571.5], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G960U/*" }, { ua: "SM-G960U" }], dpi: [569.575, 571.5], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G9608/*" }, { ua: "SM-G9608" }], dpi: [569.575, 571.5], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G960FD/*" }, { ua: "SM-G960FD" }], dpi: [569.575, 571.5], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G960W/*" }, { ua: "SM-G960W" }], dpi: [569.575, 571.5], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G965F/*" }, { ua: "SM-G965F" }], dpi: 529, bw: 2, ac: 1e3 }, { type: "android", rules: [{ mdmh: "Sony/*/C6903/*" }, { ua: "C6903" }], dpi: [442.5, 443.3], bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "Sony/*/D6653/*" }, { ua: "D6653" }], dpi: [428.6, 427.6], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "Sony/*/E6653/*" }, { ua: "E6653" }], dpi: [428.6, 425.7], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "Sony/*/E6853/*" }, { ua: "E6853" }], dpi: [403.4, 401.9], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "Sony/*/SGP321/*" }, { ua: "SGP321" }], dpi: [224.7, 224.1], bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "TCT/*/ALCATEL ONE TOUCH Fierce/*" }, { ua: "ALCATEL ONE TOUCH Fierce" }], dpi: [240, 247.5], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "THL/*/thl 5000/*" }, { ua: "thl 5000" }], dpi: [480, 443.3], bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "Fly/*/IQ4412/*" }, { ua: "IQ4412" }], dpi: 307.9, bw: 3, ac: 1e3 }, { type: "android", rules: [{ mdmh: "ZTE/*/ZTE Blade L2/*" }, { ua: "ZTE Blade L2" }], dpi: 240, bw: 3, ac: 500 }, { type: "android", rules: [{ mdmh: "BENEVE/*/VR518/*" }, { ua: "VR518" }], dpi: 480, bw: 3, ac: 500 }, { type: "ios", rules: [{ res: [640, 960] }], dpi: [325.1, 328.4], bw: 4, ac: 1e3 }, { type: "ios", rules: [{ res: [640, 1136] }], dpi: [317.1, 320.2], bw: 3, ac: 1e3 }, { type: "ios", rules: [{ res: [750, 1334] }], dpi: 326.4, bw: 4, ac: 1e3 }, { type: "ios", rules: [{ res: [1242, 2208] }], dpi: [453.6, 458.4], bw: 4, ac: 1e3 }, { type: "ios", rules: [{ res: [1125, 2001] }], dpi: [410.9, 415.4], bw: 4, ac: 1e3 }, { type: "ios", rules: [{ res: [1125, 2436] }], dpi: 458, bw: 4, ac: 1e3 }, { type: "android", rules: [{ mdmh: "Huawei/*/EML-L29/*" }, { ua: "EML-L29" }], dpi: 428, bw: 3.45, ac: 500 }, { type: "android", rules: [{ mdmh: "Nokia/*/Nokia 7.1/*" }, { ua: "Nokia 7.1" }], dpi: [432, 431.9], bw: 3, ac: 500 }, { type: "ios", rules: [{ res: [1242, 2688] }], dpi: 458, bw: 4, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G570M/*" }, { ua: "SM-G570M" }], dpi: 320, bw: 3.684, ac: 1e3 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G970F/*" }, { ua: "SM-G970F" }], dpi: 438, bw: 2.281, ac: 500 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G973F/*" }, { ua: "SM-G973F" }], dpi: 550, bw: 2.002, ac: 500 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G975F/*" }, { ua: "SM-G975F" }], dpi: 522, bw: 2.054, ac: 500 }, { type: "android", rules: [{ mdmh: "samsung/*/SM-G977F/*" }, { ua: "SM-G977F" }], dpi: 505, bw: 2.334, ac: 500 }, { type: "ios", rules: [{ res: [828, 1792] }], dpi: 326, bw: 5, ac: 500 }], vr = {
      format: fr,
      last_updated: pr,
      devices: mr
    };
    function nt(r, n) {
      if (this.dpdb = vr, this.recalculateDeviceParams_(), r) {
        this.onDeviceParamsUpdated = n;
        var s = new XMLHttpRequest(), l = this;
        s.open("GET", r, !0), s.addEventListener("load", function() {
          l.loading = !1, s.status >= 200 && s.status <= 299 ? (l.dpdb = JSON.parse(s.response), l.recalculateDeviceParams_()) : console.error("Error loading online DPDB!");
        }), s.send();
      }
    }
    nt.prototype.getDeviceParams = function() {
      return this.deviceParams;
    }, nt.prototype.recalculateDeviceParams_ = function() {
      var r = this.calcDeviceParams_();
      r ? (this.deviceParams = r, this.onDeviceParamsUpdated && this.onDeviceParamsUpdated(this.deviceParams)) : console.error("Failed to recalculate device parameters.");
    }, nt.prototype.calcDeviceParams_ = function() {
      var r = this.dpdb;
      if (!r)
        return console.error("DPDB not available."), null;
      if (r.format != 1)
        return console.error("DPDB has unexpected format version."), null;
      if (!r.devices || !r.devices.length)
        return console.error("DPDB does not have a devices section."), null;
      var n = navigator.userAgent || navigator.vendor || window.opera, s = P(), l = I();
      if (!r.devices)
        return console.error("DPDB has no devices section."), null;
      for (var c = 0; c < r.devices.length; c++) {
        var A = r.devices[c];
        if (!A.rules) {
          console.warn("Device[" + c + "] has no rules section.");
          continue;
        }
        if (A.type != "ios" && A.type != "android") {
          console.warn("Device[" + c + "] has invalid type.");
          continue;
        }
        if (v() == (A.type == "ios")) {
          for (var f = !1, S = 0; S < A.rules.length; S++) {
            var E = A.rules[S];
            if (this.ruleMatches_(E, n, s, l)) {
              f = !0;
              break;
            }
          }
          if (f) {
            var p = A.dpi[0] || A.dpi, w = A.dpi[1] || A.dpi;
            return new wr({ xdpi: p, ydpi: w, bevelMm: A.bw });
          }
        }
      }
      return console.warn("No DPDB device match."), null;
    }, nt.prototype.ruleMatches_ = function(r, n, s, l) {
      if (!r.ua && !r.res || (r.ua && r.ua.substring(0, 2) === "SM" && (r.ua = r.ua.substring(0, 7)), r.ua && n.indexOf(r.ua) < 0))
        return !1;
      if (r.res) {
        if (!r.res[0] || !r.res[1])
          return !1;
        var c = r.res[0], A = r.res[1];
        if (Math.min(s, l) != Math.min(c, A) || Math.max(s, l) != Math.max(c, A))
          return !1;
      }
      return !0;
    };
    function wr(r) {
      this.xdpi = r.xdpi, this.ydpi = r.ydpi, this.bevelMm = r.bevelMm;
    }
    function st(r, n) {
      this.set(r, n);
    }
    st.prototype.set = function(r, n) {
      this.sample = r, this.timestampS = n;
    }, st.prototype.copy = function(r) {
      this.set(r.sample, r.timestampS);
    };
    function Ye(r, n) {
      this.kFilter = r, this.isDebug = n, this.currentAccelMeasurement = new st(), this.currentGyroMeasurement = new st(), this.previousGyroMeasurement = new st(), v() ? this.filterQ = new te(-1, 0, 0, 1) : this.filterQ = new te(1, 0, 0, 1), this.previousFilterQ = new te(), this.previousFilterQ.copy(this.filterQ), this.accelQ = new te(), this.isOrientationInitialized = !1, this.estimatedGravity = new ae(), this.measuredGravity = new ae(), this.gyroIntegralQ = new te();
    }
    Ye.prototype.addAccelMeasurement = function(r, n) {
      this.currentAccelMeasurement.set(r, n);
    }, Ye.prototype.addGyroMeasurement = function(r, n) {
      this.currentGyroMeasurement.set(r, n);
      var s = n - this.previousGyroMeasurement.timestampS;
      Q(s) && this.run_(), this.previousGyroMeasurement.copy(this.currentGyroMeasurement);
    }, Ye.prototype.run_ = function() {
      if (!this.isOrientationInitialized) {
        this.accelQ = this.accelToQuaternion_(this.currentAccelMeasurement.sample), this.previousFilterQ.copy(this.accelQ), this.isOrientationInitialized = !0;
        return;
      }
      var r = this.currentGyroMeasurement.timestampS - this.previousGyroMeasurement.timestampS, n = this.gyroToQuaternionDelta_(this.currentGyroMeasurement.sample, r);
      this.gyroIntegralQ.multiply(n), this.filterQ.copy(this.previousFilterQ), this.filterQ.multiply(n);
      var s = new te();
      s.copy(this.filterQ), s.inverse(), this.estimatedGravity.set(0, 0, -1), this.estimatedGravity.applyQuaternion(s), this.estimatedGravity.normalize(), this.measuredGravity.copy(this.currentAccelMeasurement.sample), this.measuredGravity.normalize();
      var l = new te();
      l.setFromUnitVectors(this.estimatedGravity, this.measuredGravity), l.inverse(), this.isDebug && console.log("Delta: %d deg, G_est: (%s, %s, %s), G_meas: (%s, %s, %s)", Oe * $(l), this.estimatedGravity.x.toFixed(1), this.estimatedGravity.y.toFixed(1), this.estimatedGravity.z.toFixed(1), this.measuredGravity.x.toFixed(1), this.measuredGravity.y.toFixed(1), this.measuredGravity.z.toFixed(1));
      var c = new te();
      c.copy(this.filterQ), c.multiply(l), this.filterQ.slerp(c, 1 - this.kFilter), this.previousFilterQ.copy(this.filterQ);
    }, Ye.prototype.getOrientation = function() {
      return this.filterQ;
    }, Ye.prototype.accelToQuaternion_ = function(r) {
      var n = new ae();
      n.copy(r), n.normalize();
      var s = new te();
      return s.setFromUnitVectors(new ae(0, 0, -1), n), s.inverse(), s;
    }, Ye.prototype.gyroToQuaternionDelta_ = function(r, n) {
      var s = new te(), l = new ae();
      return l.copy(r), l.normalize(), s.setFromAxisAngle(l, r.length() * n), s;
    };
    function ui(r, n) {
      this.predictionTimeS = r, this.isDebug = n, this.previousQ = new te(), this.previousTimestampS = null, this.deltaQ = new te(), this.outQ = new te();
    }
    ui.prototype.getPrediction = function(r, n, s) {
      if (!this.previousTimestampS)
        return this.previousQ.copy(r), this.previousTimestampS = s, r;
      var l = new ae();
      l.copy(n), l.normalize();
      var c = n.length();
      if (c < Le * 20)
        return this.isDebug && console.log("Moving slowly, at %s deg/s: no prediction", (Oe * c).toFixed(1)), this.outQ.copy(r), this.previousQ.copy(r), this.outQ;
      var A = c * this.predictionTimeS;
      return this.deltaQ.setFromAxisAngle(l, A), this.outQ.copy(this.previousQ), this.outQ.multiply(this.deltaQ), this.previousQ.copy(r), this.previousTimestampS = s, this.outQ;
    };
    function Fe(r, n, s, l) {
      this.yawOnly = s, this.accelerometer = new ae(), this.gyroscope = new ae(), this.filter = new Ye(r, l), this.posePredictor = new ui(n, l), this.isFirefoxAndroid = x(), this.isIOS = v();
      var c = _();
      this.isDeviceMotionInRadians = !this.isIOS && c && c < 66, this.isWithoutDeviceMotion = C() || F(), this.filterToWorldQ = new te(), v() ? this.filterToWorldQ.setFromAxisAngle(new ae(1, 0, 0), Math.PI / 2) : this.filterToWorldQ.setFromAxisAngle(new ae(1, 0, 0), -Math.PI / 2), this.inverseWorldToScreenQ = new te(), this.worldToScreenQ = new te(), this.originalPoseAdjustQ = new te(), this.originalPoseAdjustQ.setFromAxisAngle(new ae(0, 0, 1), -window.orientation * Math.PI / 180), this.setScreenTransform_(), N() && this.filterToWorldQ.multiply(this.inverseWorldToScreenQ), this.resetQ = new te(), this.orientationOut_ = new Float32Array(4), this.start();
    }
    Fe.prototype.getPosition = function() {
      return null;
    }, Fe.prototype.getOrientation = function() {
      var r = void 0;
      if (this.isWithoutDeviceMotion && this._deviceOrientationQ) {
        this.deviceOrientationFixQ = this.deviceOrientationFixQ || function() {
          var c = new te().setFromAxisAngle(new ae(0, 0, -1), 0), A = new te();
          return window.orientation === -90 ? A.setFromAxisAngle(new ae(0, 1, 0), Math.PI / -2) : A.setFromAxisAngle(new ae(0, 1, 0), Math.PI / 2), c.multiply(A);
        }(), this.deviceOrientationFilterToWorldQ = this.deviceOrientationFilterToWorldQ || function() {
          var c = new te();
          return c.setFromAxisAngle(new ae(1, 0, 0), -Math.PI / 2), c;
        }(), r = this._deviceOrientationQ;
        var s = new te();
        return s.copy(r), s.multiply(this.deviceOrientationFilterToWorldQ), s.multiply(this.resetQ), s.multiply(this.worldToScreenQ), s.multiplyQuaternions(this.deviceOrientationFixQ, s), this.yawOnly && (s.x = 0, s.z = 0, s.normalize()), this.orientationOut_[0] = s.x, this.orientationOut_[1] = s.y, this.orientationOut_[2] = s.z, this.orientationOut_[3] = s.w, this.orientationOut_;
      } else {
        var n = this.filter.getOrientation();
        r = this.posePredictor.getPrediction(n, this.gyroscope, this.previousTimestampS);
      }
      var s = new te();
      return s.copy(this.filterToWorldQ), s.multiply(this.resetQ), s.multiply(r), s.multiply(this.worldToScreenQ), this.yawOnly && (s.x = 0, s.z = 0, s.normalize()), this.orientationOut_[0] = s.x, this.orientationOut_[1] = s.y, this.orientationOut_[2] = s.z, this.orientationOut_[3] = s.w, this.orientationOut_;
    }, Fe.prototype.resetPose = function() {
      this.resetQ.copy(this.filter.getOrientation()), this.resetQ.x = 0, this.resetQ.y = 0, this.resetQ.z *= -1, this.resetQ.normalize(), N() && this.resetQ.multiply(this.inverseWorldToScreenQ), this.resetQ.multiply(this.originalPoseAdjustQ);
    }, Fe.prototype.onDeviceOrientation_ = function(r) {
      this._deviceOrientationQ = this._deviceOrientationQ || new te();
      var n = r.alpha, s = r.beta, l = r.gamma;
      n = (n || 0) * Math.PI / 180, s = (s || 0) * Math.PI / 180, l = (l || 0) * Math.PI / 180, this._deviceOrientationQ.setFromEulerYXZ(s, n, -l);
    }, Fe.prototype.onDeviceMotion_ = function(r) {
      this.updateDeviceMotion_(r);
    }, Fe.prototype.updateDeviceMotion_ = function(r) {
      var n = r.accelerationIncludingGravity, s = r.rotationRate, l = r.timeStamp / 1e3, c = l - this.previousTimestampS;
      if (c < 0) {
        Ee("fusion-pose-sensor:invalid:non-monotonic", "Invalid timestamps detected: non-monotonic timestamp from devicemotion"), this.previousTimestampS = l;
        return;
      } else if (c <= h || c > d) {
        Ee("fusion-pose-sensor:invalid:outside-threshold", "Invalid timestamps detected: Timestamp from devicemotion outside expected range."), this.previousTimestampS = l;
        return;
      }
      this.accelerometer.set(-n.x, -n.y, -n.z), s && (B() ? this.gyroscope.set(-s.beta, s.alpha, s.gamma) : this.gyroscope.set(s.alpha, s.beta, s.gamma), this.isDeviceMotionInRadians || this.gyroscope.multiplyScalar(Math.PI / 180), this.filter.addGyroMeasurement(this.gyroscope, l)), this.filter.addAccelMeasurement(this.accelerometer, l), this.previousTimestampS = l;
    }, Fe.prototype.onOrientationChange_ = function(r) {
      this.setScreenTransform_();
    }, Fe.prototype.onMessage_ = function(r) {
      var n = r.data;
      if (!(!n || !n.type)) {
        var s = n.type.toLowerCase();
        s === "devicemotion" && this.updateDeviceMotion_(n.deviceMotionEvent);
      }
    }, Fe.prototype.setScreenTransform_ = function() {
      switch (this.worldToScreenQ.set(0, 0, 0, 1), window.orientation) {
        case 0:
          break;
        case 90:
          this.worldToScreenQ.setFromAxisAngle(new ae(0, 0, 1), -Math.PI / 2);
          break;
        case -90:
          this.worldToScreenQ.setFromAxisAngle(new ae(0, 0, 1), Math.PI / 2);
          break;
      }
      this.inverseWorldToScreenQ.copy(this.worldToScreenQ), this.inverseWorldToScreenQ.inverse();
    }, Fe.prototype.start = function() {
      this.onDeviceMotionCallback_ = this.onDeviceMotion_.bind(this), this.onOrientationChangeCallback_ = this.onOrientationChange_.bind(this), this.onMessageCallback_ = this.onMessage_.bind(this), this.onDeviceOrientationCallback_ = this.onDeviceOrientation_.bind(this), v() && J() && window.addEventListener("message", this.onMessageCallback_), window.addEventListener("orientationchange", this.onOrientationChangeCallback_), this.isWithoutDeviceMotion ? window.addEventListener("deviceorientation", this.onDeviceOrientationCallback_) : window.addEventListener("devicemotion", this.onDeviceMotionCallback_);
    }, Fe.prototype.stop = function() {
      window.removeEventListener("devicemotion", this.onDeviceMotionCallback_), window.removeEventListener("deviceorientation", this.onDeviceOrientationCallback_), window.removeEventListener("orientationchange", this.onOrientationChangeCallback_), window.removeEventListener("message", this.onMessageCallback_);
    };
    var yr = 60, br = new ae(1, 0, 0), gr = new ae(0, 0, 1), Qt = new te();
    Qt.setFromAxisAngle(br, -Math.PI / 2), Qt.multiply(new te().setFromAxisAngle(gr, Math.PI / 2));
    var Er = function() {
      function r(n) {
        t(this, r), this.config = n, this.sensor = null, this.fusionSensor = null, this._out = new Float32Array(4), this.api = null, this.errors = [], this._sensorQ = new te(), this._outQ = new te(), this._onSensorRead = this._onSensorRead.bind(this), this._onSensorError = this._onSensorError.bind(this), this.init();
      }
      return a(r, [{
        key: "init",
        value: function() {
          var s = null;
          try {
            s = new RelativeOrientationSensor({
              frequency: yr,
              referenceFrame: "screen"
            }), s.addEventListener("error", this._onSensorError);
          } catch (l) {
            this.errors.push(l), l.name === "SecurityError" ? (console.error("Cannot construct sensors due to the Feature Policy"), console.warn('Attempting to fall back using "devicemotion"; however this will fail in the future without correct permissions.'), this.useDeviceMotion()) : l.name === "ReferenceError" ? this.useDeviceMotion() : console.error(l);
          }
          s && (this.api = "sensor", this.sensor = s, this.sensor.addEventListener("reading", this._onSensorRead), this.sensor.start());
        }
      }, {
        key: "useDeviceMotion",
        value: function() {
          this.api = "devicemotion", this.fusionSensor = new Fe(this.config.K_FILTER, this.config.PREDICTION_TIME_S, this.config.YAW_ONLY, this.config.DEBUG), this.sensor && (this.sensor.removeEventListener("reading", this._onSensorRead), this.sensor.removeEventListener("error", this._onSensorError), this.sensor = null);
        }
      }, {
        key: "getOrientation",
        value: function() {
          if (this.fusionSensor)
            return this.fusionSensor.getOrientation();
          if (!this.sensor || !this.sensor.quaternion)
            return this._out[0] = this._out[1] = this._out[2] = 0, this._out[3] = 1, this._out;
          var s = this.sensor.quaternion;
          this._sensorQ.set(s[0], s[1], s[2], s[3]);
          var l = this._outQ;
          return l.copy(Qt), l.multiply(this._sensorQ), this.config.YAW_ONLY && (l.x = l.z = 0, l.normalize()), this._out[0] = l.x, this._out[1] = l.y, this._out[2] = l.z, this._out[3] = l.w, this._out;
        }
      }, {
        key: "_onSensorError",
        value: function(s) {
          this.errors.push(s.error), s.error.name === "NotAllowedError" ? console.error("Permission to access sensor was denied") : s.error.name === "NotReadableError" ? console.error("Sensor could not be read") : console.error(s.error), this.useDeviceMotion();
        }
      }, {
        key: "_onSensorRead",
        value: function() {
        }
      }]), r;
    }(), xr = "<svg width='198' height='240' viewBox='0 0 198 240' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><path d='M149.625 109.527l6.737 3.891v.886c0 .177.013.36.038.549.01.081.02.162.027.242.14 1.415.974 2.998 2.105 3.999l5.72 5.062.081-.09s4.382-2.53 5.235-3.024l25.97 14.993v54.001c0 .771-.386 1.217-.948 1.217-.233 0-.495-.076-.772-.236l-23.967-13.838-.014.024-27.322 15.775-.85-1.323c-4.731-1.529-9.748-2.74-14.951-3.61a.27.27 0 0 0-.007.024l-5.067 16.961-7.891 4.556-.037-.063v27.59c0 .772-.386 1.217-.948 1.217-.232 0-.495-.076-.772-.236l-42.473-24.522c-.95-.549-1.72-1.877-1.72-2.967v-1.035l-.021.047a5.111 5.111 0 0 0-1.816-.399 5.682 5.682 0 0 0-.546.001 13.724 13.724 0 0 1-1.918-.041c-1.655-.153-3.2-.6-4.404-1.296l-46.576-26.89.005.012-10.278-18.75c-1.001-1.827-.241-4.216 1.698-5.336l56.011-32.345a4.194 4.194 0 0 1 2.099-.572c1.326 0 2.572.659 3.227 1.853l.005-.003.227.413-.006.004a9.63 9.63 0 0 0 1.477 2.018l.277.27c1.914 1.85 4.468 2.801 7.113 2.801 1.949 0 3.948-.517 5.775-1.572.013 0 7.319-4.219 7.319-4.219a4.194 4.194 0 0 1 2.099-.572c1.326 0 2.572.658 3.226 1.853l3.25 5.928.022-.018 6.785 3.917-.105-.182 46.881-26.965m0-1.635c-.282 0-.563.073-.815.218l-46.169 26.556-5.41-3.124-3.005-5.481c-.913-1.667-2.699-2.702-4.66-2.703-1.011 0-2.02.274-2.917.792a3825 3825 0 0 1-7.275 4.195l-.044.024a9.937 9.937 0 0 1-4.957 1.353c-2.292 0-4.414-.832-5.976-2.342l-.252-.245a7.992 7.992 0 0 1-1.139-1.534 1.379 1.379 0 0 0-.06-.122l-.227-.414a1.718 1.718 0 0 0-.095-.154c-.938-1.574-2.673-2.545-4.571-2.545-1.011 0-2.02.274-2.917.792L3.125 155.502c-2.699 1.559-3.738 4.94-2.314 7.538l10.278 18.75c.177.323.448.563.761.704l46.426 26.804c1.403.81 3.157 1.332 5.072 1.508a15.661 15.661 0 0 0 2.146.046 4.766 4.766 0 0 1 .396 0c.096.004.19.011.283.022.109 1.593 1.159 3.323 2.529 4.114l42.472 24.522c.524.302 1.058.455 1.59.455 1.497 0 2.583-1.2 2.583-2.852v-26.562l7.111-4.105a1.64 1.64 0 0 0 .749-.948l4.658-15.593c4.414.797 8.692 1.848 12.742 3.128l.533.829a1.634 1.634 0 0 0 2.193.531l26.532-15.317L193 192.433c.523.302 1.058.455 1.59.455 1.497 0 2.583-1.199 2.583-2.852v-54.001c0-.584-.312-1.124-.818-1.416l-25.97-14.993a1.633 1.633 0 0 0-1.636.001c-.606.351-2.993 1.73-4.325 2.498l-4.809-4.255c-.819-.725-1.461-1.933-1.561-2.936a7.776 7.776 0 0 0-.033-.294 2.487 2.487 0 0 1-.023-.336v-.886c0-.584-.312-1.123-.817-1.416l-6.739-3.891a1.633 1.633 0 0 0-.817-.219' fill='#455A64'/><path d='M96.027 132.636l46.576 26.891c1.204.695 1.979 1.587 2.242 2.541l-.01.007-81.374 46.982h-.001c-1.654-.152-3.199-.6-4.403-1.295l-46.576-26.891 83.546-48.235' fill='#FAFAFA'/><path d='M63.461 209.174c-.008 0-.015 0-.022-.002-1.693-.156-3.228-.609-4.441-1.309l-46.576-26.89a.118.118 0 0 1 0-.203l83.546-48.235a.117.117 0 0 1 .117 0l46.576 26.891c1.227.708 2.021 1.612 2.296 2.611a.116.116 0 0 1-.042.124l-.021.016-81.375 46.981a.11.11 0 0 1-.058.016zm-50.747-28.303l46.401 26.79c1.178.68 2.671 1.121 4.32 1.276l81.272-46.922c-.279-.907-1.025-1.73-2.163-2.387l-46.517-26.857-83.313 48.1z' fill='#607D8B'/><path d='M148.327 165.471a5.85 5.85 0 0 1-.546.001c-1.894-.083-3.302-1.038-3.145-2.132a2.693 2.693 0 0 0-.072-1.105l-81.103 46.822c.628.058 1.272.073 1.918.042.182-.009.364-.009.546-.001 1.894.083 3.302 1.038 3.145 2.132l79.257-45.759' fill='#FFF'/><path d='M69.07 211.347a.118.118 0 0 1-.115-.134c.045-.317-.057-.637-.297-.925-.505-.61-1.555-1.022-2.738-1.074a5.966 5.966 0 0 0-.535.001 14.03 14.03 0 0 1-1.935-.041.117.117 0 0 1-.103-.092.116.116 0 0 1 .055-.126l81.104-46.822a.117.117 0 0 1 .171.07c.104.381.129.768.074 1.153-.045.316.057.637.296.925.506.61 1.555 1.021 2.739 1.073.178.008.357.008.535-.001a.117.117 0 0 1 .064.218l-79.256 45.759a.114.114 0 0 1-.059.016zm-3.405-2.372c.089 0 .177.002.265.006 1.266.056 2.353.488 2.908 1.158.227.274.35.575.36.882l78.685-45.429c-.036 0-.072-.001-.107-.003-1.267-.056-2.354-.489-2.909-1.158-.282-.34-.402-.724-.347-1.107a2.604 2.604 0 0 0-.032-.91L63.846 208.97a13.91 13.91 0 0 0 1.528.012c.097-.005.194-.007.291-.007z' fill='#607D8B'/><path d='M2.208 162.134c-1.001-1.827-.241-4.217 1.698-5.337l56.011-32.344c1.939-1.12 4.324-.546 5.326 1.281l.232.41a9.344 9.344 0 0 0 1.47 2.021l.278.27c3.325 3.214 8.583 3.716 12.888 1.23l7.319-4.22c1.94-1.119 4.324-.546 5.325 1.282l3.25 5.928-83.519 48.229-10.278-18.75z' fill='#FAFAFA'/><path d='M12.486 181.001a.112.112 0 0 1-.031-.005.114.114 0 0 1-.071-.056L2.106 162.19c-1.031-1.88-.249-4.345 1.742-5.494l56.01-32.344a4.328 4.328 0 0 1 2.158-.588c1.415 0 2.65.702 3.311 1.882.01.008.018.017.024.028l.227.414a.122.122 0 0 1 .013.038 9.508 9.508 0 0 0 1.439 1.959l.275.266c1.846 1.786 4.344 2.769 7.031 2.769 1.977 0 3.954-.538 5.717-1.557a.148.148 0 0 1 .035-.013l7.284-4.206a4.321 4.321 0 0 1 2.157-.588c1.427 0 2.672.716 3.329 1.914l3.249 5.929a.116.116 0 0 1-.044.157l-83.518 48.229a.116.116 0 0 1-.059.016zm49.53-57.004c-.704 0-1.41.193-2.041.557l-56.01 32.345c-1.882 1.086-2.624 3.409-1.655 5.179l10.221 18.645 83.317-48.112-3.195-5.829c-.615-1.122-1.783-1.792-3.124-1.792a4.08 4.08 0 0 0-2.04.557l-7.317 4.225a.148.148 0 0 1-.035.013 11.7 11.7 0 0 1-5.801 1.569c-2.748 0-5.303-1.007-7.194-2.835l-.278-.27a9.716 9.716 0 0 1-1.497-2.046.096.096 0 0 1-.013-.037l-.191-.347a.11.11 0 0 1-.023-.029c-.615-1.123-1.783-1.793-3.124-1.793z' fill='#607D8B'/><path d='M42.434 155.808c-2.51-.001-4.697-1.258-5.852-3.365-1.811-3.304-.438-7.634 3.059-9.654l12.291-7.098a7.599 7.599 0 0 1 3.789-1.033c2.51 0 4.697 1.258 5.852 3.365 1.811 3.304.439 7.634-3.059 9.654l-12.291 7.098a7.606 7.606 0 0 1-3.789 1.033zm13.287-20.683a7.128 7.128 0 0 0-3.555.971l-12.291 7.098c-3.279 1.893-4.573 5.942-2.883 9.024 1.071 1.955 3.106 3.122 5.442 3.122a7.13 7.13 0 0 0 3.556-.97l12.291-7.098c3.279-1.893 4.572-5.942 2.883-9.024-1.072-1.955-3.106-3.123-5.443-3.123z' fill='#607D8B'/><path d='M149.588 109.407l6.737 3.89v.887c0 .176.013.36.037.549.011.081.02.161.028.242.14 1.415.973 2.998 2.105 3.999l7.396 6.545c.177.156.358.295.541.415 1.579 1.04 2.95.466 3.062-1.282.049-.784.057-1.595.023-2.429l-.003-.16v-1.151l25.987 15.003v54c0 1.09-.77 1.53-1.72.982l-42.473-24.523c-.95-.548-1.72-1.877-1.72-2.966v-34.033' fill='#FAFAFA'/><path d='M194.553 191.25c-.257 0-.54-.085-.831-.253l-42.472-24.521c-.981-.567-1.779-1.943-1.779-3.068v-34.033h.234v34.033c0 1.051.745 2.336 1.661 2.866l42.473 24.521c.424.245.816.288 1.103.122.285-.164.442-.52.442-1.002v-53.933l-25.753-14.868.003 1.106c.034.832.026 1.654-.024 2.439-.054.844-.396 1.464-.963 1.746-.619.309-1.45.173-2.28-.373a5.023 5.023 0 0 1-.553-.426l-7.397-6.544c-1.158-1.026-1.999-2.625-2.143-4.076a9.624 9.624 0 0 0-.027-.238 4.241 4.241 0 0 1-.038-.564v-.82l-6.68-3.856.117-.202 6.738 3.89.058.034v.954c0 .171.012.351.036.533.011.083.021.165.029.246.138 1.395.948 2.935 2.065 3.923l7.397 6.545c.173.153.35.289.527.406.758.499 1.504.63 2.047.359.49-.243.786-.795.834-1.551.05-.778.057-1.591.024-2.417l-.004-.163v-1.355l.175.1 25.987 15.004.059.033v54.068c0 .569-.198.996-.559 1.204a1.002 1.002 0 0 1-.506.131' fill='#607D8B'/><path d='M145.685 163.161l24.115 13.922-25.978 14.998-1.462-.307c-6.534-2.17-13.628-3.728-21.019-4.616-4.365-.524-8.663 1.096-9.598 3.62a2.746 2.746 0 0 0-.011 1.928c1.538 4.267 4.236 8.363 7.995 12.135l.532.845-25.977 14.997-24.115-13.922 75.518-43.6' fill='#FFF'/><path d='M94.282 220.818l-.059-.033-24.29-14.024.175-.101 75.577-43.634.058.033 24.29 14.024-26.191 15.122-.045-.01-1.461-.307c-6.549-2.174-13.613-3.725-21.009-4.614a13.744 13.744 0 0 0-1.638-.097c-3.758 0-7.054 1.531-7.837 3.642a2.62 2.62 0 0 0-.01 1.848c1.535 4.258 4.216 8.326 7.968 12.091l.016.021.526.835.006.01.064.102-.105.061-25.977 14.998-.058.033zm-23.881-14.057l23.881 13.788 24.802-14.32c.546-.315.846-.489 1.017-.575l-.466-.74c-3.771-3.787-6.467-7.881-8.013-12.168a2.851 2.851 0 0 1 .011-2.008c.815-2.199 4.203-3.795 8.056-3.795.557 0 1.117.033 1.666.099 7.412.891 14.491 2.445 21.041 4.621.836.175 1.215.254 1.39.304l25.78-14.884-23.881-13.788-75.284 43.466z' fill='#607D8B'/><path d='M167.23 125.979v50.871l-27.321 15.773-6.461-14.167c-.91-1.996-3.428-1.738-5.624.574a10.238 10.238 0 0 0-2.33 4.018l-6.46 21.628-27.322 15.774v-50.871l75.518-43.6' fill='#FFF'/><path d='M91.712 220.567a.127.127 0 0 1-.059-.016.118.118 0 0 1-.058-.101v-50.871c0-.042.023-.08.058-.101l75.519-43.6a.117.117 0 0 1 .175.101v50.871c0 .041-.023.08-.059.1l-27.321 15.775a.118.118 0 0 1-.094.01.12.12 0 0 1-.071-.063l-6.46-14.168c-.375-.822-1.062-1.275-1.934-1.275-1.089 0-2.364.686-3.5 1.881a10.206 10.206 0 0 0-2.302 3.972l-6.46 21.627a.118.118 0 0 1-.054.068L91.77 220.551a.12.12 0 0 1-.058.016zm.117-50.92v50.601l27.106-15.65 6.447-21.583a10.286 10.286 0 0 1 2.357-4.065c1.18-1.242 2.517-1.954 3.669-1.954.969 0 1.731.501 2.146 1.411l6.407 14.051 27.152-15.676v-50.601l-75.284 43.466z' fill='#607D8B'/><path d='M168.543 126.213v50.87l-27.322 15.774-6.46-14.168c-.91-1.995-3.428-1.738-5.624.574a10.248 10.248 0 0 0-2.33 4.019l-6.461 21.627-27.321 15.774v-50.87l75.518-43.6' fill='#FFF'/><path d='M93.025 220.8a.123.123 0 0 1-.059-.015.12.12 0 0 1-.058-.101v-50.871c0-.042.023-.08.058-.101l75.518-43.6a.112.112 0 0 1 .117 0c.036.02.059.059.059.1v50.871a.116.116 0 0 1-.059.101l-27.321 15.774a.111.111 0 0 1-.094.01.115.115 0 0 1-.071-.062l-6.46-14.168c-.375-.823-1.062-1.275-1.935-1.275-1.088 0-2.363.685-3.499 1.881a10.19 10.19 0 0 0-2.302 3.971l-6.461 21.628a.108.108 0 0 1-.053.067l-27.322 15.775a.12.12 0 0 1-.058.015zm.117-50.919v50.6l27.106-15.649 6.447-21.584a10.293 10.293 0 0 1 2.357-4.065c1.179-1.241 2.516-1.954 3.668-1.954.969 0 1.732.502 2.147 1.412l6.407 14.051 27.152-15.676v-50.601l-75.284 43.466z' fill='#607D8B'/><path d='M169.8 177.083l-27.322 15.774-6.46-14.168c-.91-1.995-3.428-1.738-5.625.574a10.246 10.246 0 0 0-2.329 4.019l-6.461 21.627-27.321 15.774v-50.87l75.518-43.6v50.87z' fill='#FAFAFA'/><path d='M94.282 220.917a.234.234 0 0 1-.234-.233v-50.871c0-.083.045-.161.117-.202l75.518-43.601a.234.234 0 1 1 .35.202v50.871a.233.233 0 0 1-.116.202l-27.322 15.775a.232.232 0 0 1-.329-.106l-6.461-14.168c-.36-.789-.992-1.206-1.828-1.206-1.056 0-2.301.672-3.415 1.844a10.099 10.099 0 0 0-2.275 3.924l-6.46 21.628a.235.235 0 0 1-.107.136l-27.322 15.774a.23.23 0 0 1-.116.031zm.233-50.969v50.331l26.891-15.525 6.434-21.539a10.41 10.41 0 0 1 2.384-4.112c1.201-1.265 2.569-1.991 3.753-1.991 1.018 0 1.818.526 2.253 1.48l6.354 13.934 26.982-15.578v-50.331l-75.051 43.331z' fill='#607D8B'/><path d='M109.894 199.943c-1.774 0-3.241-.725-4.244-2.12a.224.224 0 0 1 .023-.294.233.233 0 0 1 .301-.023c.78.547 1.705.827 2.75.827 1.323 0 2.754-.439 4.256-1.306 5.311-3.067 9.631-10.518 9.631-16.611 0-1.927-.442-3.56-1.278-4.724a.232.232 0 0 1 .323-.327c1.671 1.172 2.591 3.381 2.591 6.219 0 6.242-4.426 13.863-9.865 17.003-1.574.908-3.084 1.356-4.488 1.356zm-2.969-1.542c.813.651 1.82.877 2.968.877h.001c1.321 0 2.753-.327 4.254-1.194 5.311-3.067 9.632-10.463 9.632-16.556 0-1.979-.463-3.599-1.326-4.761.411 1.035.625 2.275.625 3.635 0 6.243-4.426 13.883-9.865 17.023-1.574.909-3.084 1.317-4.49 1.317-.641 0-1.243-.149-1.799-.341z' fill='#607D8B'/><path d='M113.097 197.23c5.384-3.108 9.748-10.636 9.748-16.814 0-2.051-.483-3.692-1.323-4.86-1.784-1.252-4.374-1.194-7.257.47-5.384 3.108-9.748 10.636-9.748 16.814 0 2.051.483 3.692 1.323 4.86 1.784 1.252 4.374 1.194 7.257-.47' fill='#FAFAFA'/><path d='M108.724 198.614c-1.142 0-2.158-.213-3.019-.817-.021-.014-.04.014-.055-.007-.894-1.244-1.367-2.948-1.367-4.973 0-6.242 4.426-13.864 9.865-17.005 1.574-.908 3.084-1.363 4.49-1.363 1.142 0 2.158.309 3.018.913a.23.23 0 0 1 .056.056c.894 1.244 1.367 2.972 1.367 4.997 0 6.243-4.426 13.783-9.865 16.923-1.574.909-3.084 1.276-4.49 1.276zm-2.718-1.109c.774.532 1.688.776 2.718.776 1.323 0 2.754-.413 4.256-1.28 5.311-3.066 9.631-10.505 9.631-16.598 0-1.909-.434-3.523-1.255-4.685-.774-.533-1.688-.799-2.718-.799-1.323 0-2.755.441-4.256 1.308-5.311 3.066-9.631 10.506-9.631 16.599 0 1.909.434 3.517 1.255 4.679z' fill='#607D8B'/><path d='M149.318 114.262l-9.984 8.878 15.893 11.031 5.589-6.112-11.498-13.797' fill='#FAFAFA'/><path d='M169.676 120.84l-9.748 5.627c-3.642 2.103-9.528 2.113-13.147.024-3.62-2.089-3.601-5.488.041-7.591l9.495-5.608-6.729-3.885-81.836 47.071 45.923 26.514 3.081-1.779c.631-.365.869-.898.618-1.39-2.357-4.632-2.593-9.546-.683-14.262 5.638-13.92 24.509-24.815 48.618-28.07 8.169-1.103 16.68-.967 24.704.394.852.145 1.776.008 2.407-.357l3.081-1.778-25.825-14.91' fill='#FAFAFA'/><path d='M113.675 183.459a.47.47 0 0 1-.233-.062l-45.924-26.515a.468.468 0 0 1 .001-.809l81.836-47.071a.467.467 0 0 1 .466 0l6.729 3.885a.467.467 0 0 1-.467.809l-6.496-3.75-80.9 46.533 44.988 25.973 2.848-1.644c.192-.111.62-.409.435-.773-2.416-4.748-2.658-9.814-.7-14.65 2.806-6.927 8.885-13.242 17.582-18.263 8.657-4.998 19.518-8.489 31.407-10.094 8.198-1.107 16.79-.97 24.844.397.739.125 1.561.007 2.095-.301l2.381-1.374-25.125-14.506a.467.467 0 0 1 .467-.809l25.825 14.91a.467.467 0 0 1 0 .809l-3.081 1.779c-.721.417-1.763.575-2.718.413-7.963-1.351-16.457-1.486-24.563-.392-11.77 1.589-22.512 5.039-31.065 9.977-8.514 4.916-14.456 11.073-17.183 17.805-1.854 4.578-1.623 9.376.666 13.875.37.725.055 1.513-.8 2.006l-3.081 1.78a.476.476 0 0 1-.234.062' fill='#455A64'/><path d='M153.316 128.279c-2.413 0-4.821-.528-6.652-1.586-1.818-1.049-2.82-2.461-2.82-3.975 0-1.527 1.016-2.955 2.861-4.02l9.493-5.607a.233.233 0 1 1 .238.402l-9.496 5.609c-1.696.979-2.628 2.263-2.628 3.616 0 1.34.918 2.608 2.585 3.571 3.549 2.049 9.343 2.038 12.914-.024l9.748-5.628a.234.234 0 0 1 .234.405l-9.748 5.628c-1.858 1.072-4.296 1.609-6.729 1.609' fill='#607D8B'/><path d='M113.675 182.992l-45.913-26.508M113.675 183.342a.346.346 0 0 1-.175-.047l-45.913-26.508a.35.35 0 1 1 .35-.607l45.913 26.508a.35.35 0 0 1-.175.654' fill='#455A64'/><path d='M67.762 156.484v54.001c0 1.09.77 2.418 1.72 2.967l42.473 24.521c.95.549 1.72.11 1.72-.98v-54.001' fill='#FAFAFA'/><path d='M112.727 238.561c-.297 0-.62-.095-.947-.285l-42.473-24.521c-1.063-.613-1.895-2.05-1.895-3.27v-54.001a.35.35 0 1 1 .701 0v54.001c0 .96.707 2.18 1.544 2.663l42.473 24.522c.344.198.661.243.87.122.206-.119.325-.411.325-.799v-54.001a.35.35 0 1 1 .7 0v54.001c0 .655-.239 1.154-.675 1.406a1.235 1.235 0 0 1-.623.162' fill='#455A64'/><path d='M112.86 147.512h-.001c-2.318 0-4.499-.522-6.142-1.471-1.705-.984-2.643-2.315-2.643-3.749 0-1.445.952-2.791 2.68-3.788l12.041-6.953c1.668-.962 3.874-1.493 6.212-1.493 2.318 0 4.499.523 6.143 1.472 1.704.984 2.643 2.315 2.643 3.748 0 1.446-.952 2.791-2.68 3.789l-12.042 6.952c-1.668.963-3.874 1.493-6.211 1.493zm12.147-16.753c-2.217 0-4.298.497-5.861 1.399l-12.042 6.952c-1.502.868-2.33 1.998-2.33 3.182 0 1.173.815 2.289 2.293 3.142 1.538.889 3.596 1.378 5.792 1.378h.001c2.216 0 4.298-.497 5.861-1.399l12.041-6.953c1.502-.867 2.33-1.997 2.33-3.182 0-1.172-.814-2.288-2.292-3.142-1.539-.888-3.596-1.377-5.793-1.377z' fill='#607D8B'/><path d='M165.63 123.219l-5.734 3.311c-3.167 1.828-8.286 1.837-11.433.02-3.147-1.817-3.131-4.772.036-6.601l5.734-3.31 11.397 6.58' fill='#FAFAFA'/><path d='M154.233 117.448l9.995 5.771-4.682 2.704c-1.434.827-3.352 1.283-5.399 1.283-2.029 0-3.923-.449-5.333-1.263-1.29-.744-2-1.694-2-2.674 0-.991.723-1.955 2.036-2.713l5.383-3.108m0-.809l-5.734 3.31c-3.167 1.829-3.183 4.784-.036 6.601 1.568.905 3.623 1.357 5.684 1.357 2.077 0 4.159-.46 5.749-1.377l5.734-3.311-11.397-6.58M145.445 179.667c-1.773 0-3.241-.85-4.243-2.245-.067-.092-.057-.275.023-.356.08-.081.207-.12.3-.055.781.548 1.706.812 2.751.811 1.322 0 2.754-.446 4.256-1.313 5.31-3.066 9.631-10.522 9.631-16.615 0-1.927-.442-3.562-1.279-4.726a.235.235 0 0 1 .024-.301.232.232 0 0 1 .3-.027c1.67 1.172 2.59 3.38 2.59 6.219 0 6.242-4.425 13.987-9.865 17.127-1.573.908-3.083 1.481-4.488 1.481zM142.476 178c.814.651 1.82 1.002 2.969 1.002 1.322 0 2.753-.452 4.255-1.32 5.31-3.065 9.631-10.523 9.631-16.617 0-1.98-.463-3.63-1.325-4.793.411 1.035.624 2.26.624 3.62 0 6.242-4.425 13.875-9.865 17.015-1.573.909-3.084 1.376-4.489 1.376a5.49 5.49 0 0 1-1.8-.283z' fill='#607D8B'/><path d='M148.648 176.704c5.384-3.108 9.748-10.636 9.748-16.813 0-2.052-.483-3.693-1.322-4.861-1.785-1.252-4.375-1.194-7.258.471-5.383 3.108-9.748 10.636-9.748 16.813 0 2.051.484 3.692 1.323 4.86 1.785 1.253 4.374 1.195 7.257-.47' fill='#FAFAFA'/><path d='M144.276 178.276c-1.143 0-2.158-.307-3.019-.911a.217.217 0 0 1-.055-.054c-.895-1.244-1.367-2.972-1.367-4.997 0-6.241 4.425-13.875 9.865-17.016 1.573-.908 3.084-1.369 4.489-1.369 1.143 0 2.158.307 3.019.91a.24.24 0 0 1 .055.055c.894 1.244 1.367 2.971 1.367 4.997 0 6.241-4.425 13.875-9.865 17.016-1.573.908-3.084 1.369-4.489 1.369zm-2.718-1.172c.773.533 1.687.901 2.718.901 1.322 0 2.754-.538 4.256-1.405 5.31-3.066 9.631-10.567 9.631-16.661 0-1.908-.434-3.554-1.256-4.716-.774-.532-1.688-.814-2.718-.814-1.322 0-2.754.433-4.256 1.3-5.31 3.066-9.631 10.564-9.631 16.657 0 1.91.434 3.576 1.256 4.738z' fill='#607D8B'/><path d='M150.72 172.361l-.363-.295a24.105 24.105 0 0 0 2.148-3.128 24.05 24.05 0 0 0 1.977-4.375l.443.149a24.54 24.54 0 0 1-2.015 4.46 24.61 24.61 0 0 1-2.19 3.189M115.917 191.514l-.363-.294a24.174 24.174 0 0 0 2.148-3.128 24.038 24.038 0 0 0 1.976-4.375l.443.148a24.48 24.48 0 0 1-2.015 4.461 24.662 24.662 0 0 1-2.189 3.188M114 237.476V182.584 237.476' fill='#607D8B'/><g><path d='M81.822 37.474c.017-.135-.075-.28-.267-.392-.327-.188-.826-.21-1.109-.045l-6.012 3.471c-.131.076-.194.178-.191.285.002.132.002.461.002.578v.043l-.007.128-6.591 3.779c-.001 0-2.077 1.046-2.787 5.192 0 0-.912 6.961-.898 19.745.015 12.57.606 17.07 1.167 21.351.22 1.684 3.001 2.125 3.001 2.125.331.04.698-.027 1.08-.248l75.273-43.551c1.808-1.069 2.667-3.719 3.056-6.284 1.213-7.99 1.675-32.978-.275-39.878-.196-.693-.51-1.083-.868-1.282l-2.086-.79c-.727.028-1.416.467-1.534.535L82.032 37.072l-.21.402' fill='#FFF'/><path d='M144.311 1.701l2.085.79c.358.199.672.589.868 1.282 1.949 6.9 1.487 31.887.275 39.878-.39 2.565-1.249 5.215-3.056 6.284L69.21 93.486a1.78 1.78 0 0 1-.896.258l-.183-.011c0 .001-2.782-.44-3.003-2.124-.56-4.282-1.151-8.781-1.165-21.351-.015-12.784.897-19.745.897-19.745.71-4.146 2.787-5.192 2.787-5.192l6.591-3.779.007-.128v-.043c0-.117 0-.446-.002-.578-.003-.107.059-.21.191-.285l6.012-3.472a.98.98 0 0 1 .481-.11c.218 0 .449.053.627.156.193.112.285.258.268.392l.211-.402 60.744-34.836c.117-.068.806-.507 1.534-.535m0-.997l-.039.001c-.618.023-1.283.244-1.974.656l-.021.012-60.519 34.706a2.358 2.358 0 0 0-.831-.15c-.365 0-.704.084-.98.244l-6.012 3.471c-.442.255-.699.69-.689 1.166l.001.15-6.08 3.487c-.373.199-2.542 1.531-3.29 5.898l-.006.039c-.009.07-.92 7.173-.906 19.875.014 12.62.603 17.116 1.172 21.465l.002.015c.308 2.355 3.475 2.923 3.836 2.98l.034.004c.101.013.204.019.305.019a2.77 2.77 0 0 0 1.396-.392l75.273-43.552c1.811-1.071 2.999-3.423 3.542-6.997 1.186-7.814 1.734-33.096-.301-40.299-.253-.893-.704-1.527-1.343-1.882l-.132-.062-2.085-.789a.973.973 0 0 0-.353-.065' fill='#455A64'/><path d='M128.267 11.565l1.495.434-56.339 32.326' fill='#FFF'/><path d='M74.202 90.545a.5.5 0 0 1-.25-.931l18.437-10.645a.499.499 0 1 1 .499.864L74.451 90.478l-.249.067M75.764 42.654l-.108-.062.046-.171 5.135-2.964.17.045-.045.171-5.135 2.964-.063.017M70.52 90.375V46.421l.063-.036L137.84 7.554v43.954l-.062.036L70.52 90.375zm.25-43.811v43.38l66.821-38.579V7.985L70.77 46.564z' fill='#607D8B'/><path d='M86.986 83.182c-.23.149-.612.384-.849.523l-11.505 6.701c-.237.139-.206.252.068.252h.565c.275 0 .693-.113.93-.252L87.7 83.705c.237-.139.428-.253.425-.256a11.29 11.29 0 0 1-.006-.503c0-.274-.188-.377-.418-.227l-.715.463' fill='#607D8B'/><path d='M75.266 90.782H74.7c-.2 0-.316-.056-.346-.166-.03-.11.043-.217.215-.317l11.505-6.702c.236-.138.615-.371.844-.519l.715-.464a.488.488 0 0 1 .266-.089c.172 0 .345.13.345.421 0 .214.001.363.003.437l.006.004-.004.069c-.003.075-.003.075-.486.356l-11.505 6.702a2.282 2.282 0 0 1-.992.268zm-.6-.25l.034.001h.566c.252 0 .649-.108.866-.234l11.505-6.702c.168-.098.294-.173.361-.214-.004-.084-.004-.218-.004-.437l-.095-.171-.131.049-.714.463c-.232.15-.616.386-.854.525l-11.505 6.702-.029.018z' fill='#607D8B'/><path d='M75.266 89.871H74.7c-.2 0-.316-.056-.346-.166-.03-.11.043-.217.215-.317l11.505-6.702c.258-.151.694-.268.993-.268h.565c.2 0 .316.056.346.166.03.11-.043.217-.215.317l-11.505 6.702a2.282 2.282 0 0 1-.992.268zm-.6-.25l.034.001h.566c.252 0 .649-.107.866-.234l11.505-6.702.03-.018-.035-.001h-.565c-.252 0-.649.108-.867.234l-11.505 6.702-.029.018zM74.37 90.801v-1.247 1.247' fill='#607D8B'/><path d='M68.13 93.901c-.751-.093-1.314-.737-1.439-1.376-.831-4.238-1.151-8.782-1.165-21.352-.015-12.784.897-19.745.897-19.745.711-4.146 2.787-5.192 2.787-5.192l74.859-43.219c.223-.129 2.487-1.584 3.195.923 1.95 6.9 1.488 31.887.275 39.878-.389 2.565-1.248 5.215-3.056 6.283L69.21 93.653c-.382.221-.749.288-1.08.248 0 0-2.781-.441-3.001-2.125-.561-4.281-1.152-8.781-1.167-21.351-.014-12.784.898-19.745.898-19.745.71-4.146 2.787-5.191 2.787-5.191l6.598-3.81.871-.119 6.599-3.83.046-.461L68.13 93.901' fill='#FAFAFA'/><path d='M68.317 94.161l-.215-.013h-.001l-.244-.047c-.719-.156-2.772-.736-2.976-2.292-.568-4.34-1.154-8.813-1.168-21.384-.014-12.654.891-19.707.9-19.777.725-4.231 2.832-5.338 2.922-5.382l6.628-3.827.87-.119 6.446-3.742.034-.334a.248.248 0 0 1 .273-.223.248.248 0 0 1 .223.272l-.059.589-6.752 3.919-.87.118-6.556 3.785c-.031.016-1.99 1.068-2.666 5.018-.007.06-.908 7.086-.894 19.702.014 12.539.597 16.996 1.161 21.305.091.691.689 1.154 1.309 1.452a1.95 1.95 0 0 1-.236-.609c-.781-3.984-1.155-8.202-1.17-21.399-.014-12.653.891-19.707.9-19.777.725-4.231 2.832-5.337 2.922-5.382-.004.001 74.444-42.98 74.846-43.212l.028-.017c.904-.538 1.72-.688 2.36-.433.555.221.949.733 1.172 1.52 2.014 7.128 1.46 32.219.281 39.983-.507 3.341-1.575 5.515-3.175 6.462L69.335 93.869a2.023 2.023 0 0 1-1.018.292zm-.147-.507c.293.036.604-.037.915-.217l75.273-43.551c1.823-1.078 2.602-3.915 2.934-6.106 1.174-7.731 1.731-32.695-.268-39.772-.178-.631-.473-1.032-.876-1.192-.484-.193-1.166-.052-1.921.397l-.034.021-74.858 43.218c-.031.017-1.989 1.069-2.666 5.019-.007.059-.908 7.085-.894 19.702.015 13.155.386 17.351 1.161 21.303.09.461.476.983 1.037 1.139.114.025.185.037.196.039h.001z' fill='#455A64'/><path d='M69.317 68.982c.489-.281.885-.056.885.505 0 .56-.396 1.243-.885 1.525-.488.282-.884.057-.884-.504 0-.56.396-1.243.884-1.526' fill='#FFF'/><path d='M68.92 71.133c-.289 0-.487-.228-.487-.625 0-.56.396-1.243.884-1.526a.812.812 0 0 1 .397-.121c.289 0 .488.229.488.626 0 .56-.396 1.243-.885 1.525a.812.812 0 0 1-.397.121m.794-2.459a.976.976 0 0 0-.49.147c-.548.317-.978 1.058-.978 1.687 0 .486.271.812.674.812a.985.985 0 0 0 .491-.146c.548-.317.978-1.057.978-1.687 0-.486-.272-.813-.675-.813' fill='#8097A2'/><path d='M68.92 70.947c-.271 0-.299-.307-.299-.439 0-.491.361-1.116.79-1.363a.632.632 0 0 1 .303-.096c.272 0 .301.306.301.438 0 .491-.363 1.116-.791 1.364a.629.629 0 0 1-.304.096m.794-2.086a.812.812 0 0 0-.397.121c-.488.283-.884.966-.884 1.526 0 .397.198.625.487.625a.812.812 0 0 0 .397-.121c.489-.282.885-.965.885-1.525 0-.397-.199-.626-.488-.626' fill='#8097A2'/><path d='M69.444 85.35c.264-.152.477-.031.477.272 0 .303-.213.67-.477.822-.263.153-.477.031-.477-.271 0-.302.214-.671.477-.823' fill='#FFF'/><path d='M69.23 86.51c-.156 0-.263-.123-.263-.337 0-.302.214-.671.477-.823a.431.431 0 0 1 .214-.066c.156 0 .263.124.263.338 0 .303-.213.67-.477.822a.431.431 0 0 1-.214.066m.428-1.412c-.1 0-.203.029-.307.09-.32.185-.57.618-.57.985 0 .309.185.524.449.524a.63.63 0 0 0 .308-.09c.32-.185.57-.618.57-.985 0-.309-.185-.524-.45-.524' fill='#8097A2'/><path d='M69.23 86.322l-.076-.149c0-.235.179-.544.384-.661l.12-.041.076.151c0 .234-.179.542-.383.66l-.121.04m.428-1.038a.431.431 0 0 0-.214.066c-.263.152-.477.521-.477.823 0 .214.107.337.263.337a.431.431 0 0 0 .214-.066c.264-.152.477-.519.477-.822 0-.214-.107-.338-.263-.338' fill='#8097A2'/><path d='M139.278 7.769v43.667L72.208 90.16V46.493l67.07-38.724' fill='#455A64'/><path d='M72.083 90.375V46.421l.063-.036 67.257-38.831v43.954l-.062.036-67.258 38.831zm.25-43.811v43.38l66.821-38.579V7.985L72.333 46.564z' fill='#607D8B'/></g><path d='M125.737 88.647l-7.639 3.334V84l-11.459 4.713v8.269L99 100.315l13.369 3.646 13.368-15.314' fill='#455A64'/></g></svg>";
    function je() {
      this.loadIcon_();
      var r = document.createElement("div"), f = r.style;
      f.position = "fixed", f.top = 0, f.right = 0, f.bottom = 0, f.left = 0, f.backgroundColor = "gray", f.fontFamily = "sans-serif", f.zIndex = 1e6;
      var n = document.createElement("img");
      n.src = this.icon;
      var f = n.style;
      f.marginLeft = "25%", f.marginTop = "25%", f.width = "50%", r.appendChild(n);
      var s = document.createElement("div"), f = s.style;
      f.textAlign = "center", f.fontSize = "16px", f.lineHeight = "24px", f.margin = "24px 25%", f.width = "50%", s.innerHTML = "Place your phone into your Cardboard viewer.", r.appendChild(s);
      var l = document.createElement("div"), f = l.style;
      f.backgroundColor = "#CFD8DC", f.position = "fixed", f.bottom = 0, f.width = "100%", f.height = "48px", f.padding = "14px 24px", f.boxSizing = "border-box", f.color = "#656A6B", r.appendChild(l);
      var c = document.createElement("div");
      c.style.float = "left", c.innerHTML = "No Cardboard viewer?";
      var A = document.createElement("a");
      A.href = "https://www.google.com/get/cardboard/get-cardboard/", A.innerHTML = "get one", A.target = "_blank";
      var f = A.style;
      f.float = "right", f.fontWeight = 600, f.textTransform = "uppercase", f.borderLeft = "1px solid gray", f.paddingLeft = "24px", f.textDecoration = "none", f.color = "#656A6B", l.appendChild(c), l.appendChild(A), this.overlay = r, this.text = s, this.hide();
    }
    je.prototype.show = function(r) {
      !r && !this.overlay.parentElement ? document.body.appendChild(this.overlay) : r && (this.overlay.parentElement && this.overlay.parentElement != r && this.overlay.parentElement.removeChild(this.overlay), r.appendChild(this.overlay)), this.overlay.style.display = "block";
      var n = this.overlay.querySelector("img"), s = n.style;
      N() ? (s.width = "20%", s.marginLeft = "40%", s.marginTop = "3%") : (s.width = "50%", s.marginLeft = "25%", s.marginTop = "25%");
    }, je.prototype.hide = function() {
      this.overlay.style.display = "none";
    }, je.prototype.showTemporarily = function(r, n) {
      this.show(n), this.timer = setTimeout(this.hide.bind(this), r);
    }, je.prototype.disableShowTemporarily = function() {
      clearTimeout(this.timer);
    }, je.prototype.update = function() {
      this.disableShowTemporarily(), !N() && D() ? this.show() : this.hide();
    }, je.prototype.loadIcon_ = function() {
      this.icon = u("image/svg+xml", xr);
    };
    var Sr = "CardboardV1", fi = "WEBVR_CARDBOARD_VIEWER", Rr = "webvr-polyfill-viewer-selector";
    function Ce(r) {
      try {
        this.selectedKey = localStorage.getItem(fi);
      } catch (n) {
        console.error("Failed to load viewer profile: %s", n);
      }
      this.selectedKey || (this.selectedKey = r || Sr), this.dialog = this.createDialog_(Ae.Viewers), this.root = null, this.onChangeCallbacks_ = [];
    }
    Ce.prototype.show = function(r) {
      this.root = r, r.appendChild(this.dialog);
      var n = this.dialog.querySelector("#" + this.selectedKey);
      n.checked = !0, this.dialog.style.display = "block";
    }, Ce.prototype.hide = function() {
      this.root && this.root.contains(this.dialog) && this.root.removeChild(this.dialog), this.dialog.style.display = "none";
    }, Ce.prototype.getCurrentViewer = function() {
      return Ae.Viewers[this.selectedKey];
    }, Ce.prototype.getSelectedKey_ = function() {
      var r = this.dialog.querySelector("input[name=field]:checked");
      return r ? r.id : null;
    }, Ce.prototype.onChange = function(r) {
      this.onChangeCallbacks_.push(r);
    }, Ce.prototype.fireOnChange_ = function(r) {
      for (var n = 0; n < this.onChangeCallbacks_.length; n++)
        this.onChangeCallbacks_[n](r);
    }, Ce.prototype.onSave_ = function() {
      if (this.selectedKey = this.getSelectedKey_(), !this.selectedKey || !Ae.Viewers[this.selectedKey]) {
        console.error("ViewerSelector.onSave_: this should never happen!");
        return;
      }
      this.fireOnChange_(Ae.Viewers[this.selectedKey]);
      try {
        localStorage.setItem(fi, this.selectedKey);
      } catch (r) {
        console.error("Failed to save viewer profile: %s", r);
      }
      this.hide();
    }, Ce.prototype.createDialog_ = function(r) {
      var n = document.createElement("div");
      n.classList.add(Rr), n.style.display = "none";
      var s = document.createElement("div"), A = s.style;
      A.position = "fixed", A.left = 0, A.top = 0, A.width = "100%", A.height = "100%", A.background = "rgba(0, 0, 0, 0.3)", s.addEventListener("click", this.hide.bind(this));
      var l = 280, c = document.createElement("div"), A = c.style;
      A.boxSizing = "border-box", A.position = "fixed", A.top = "24px", A.left = "50%", A.marginLeft = -l / 2 + "px", A.width = l + "px", A.padding = "24px", A.overflow = "hidden", A.background = "#fafafa", A.fontFamily = "'Roboto', sans-serif", A.boxShadow = "0px 5px 20px #666", c.appendChild(this.createH1_("Select your viewer"));
      for (var f in r)
        c.appendChild(this.createChoice_(f, r[f].label));
      return c.appendChild(this.createButton_("Save", this.onSave_.bind(this))), n.appendChild(s), n.appendChild(c), n;
    }, Ce.prototype.createH1_ = function(r) {
      var n = document.createElement("h1"), s = n.style;
      return s.color = "black", s.fontSize = "20px", s.fontWeight = "bold", s.marginTop = 0, s.marginBottom = "24px", n.innerHTML = r, n;
    }, Ce.prototype.createChoice_ = function(r, n) {
      var s = document.createElement("div");
      s.style.marginTop = "8px", s.style.color = "black";
      var l = document.createElement("input");
      l.style.fontSize = "30px", l.setAttribute("id", r), l.setAttribute("type", "radio"), l.setAttribute("value", r), l.setAttribute("name", "field");
      var c = document.createElement("label");
      return c.style.marginLeft = "4px", c.setAttribute("for", r), c.innerHTML = n, s.appendChild(l), s.appendChild(c), s;
    }, Ce.prototype.createButton_ = function(r, n) {
      var s = document.createElement("button");
      s.innerHTML = r;
      var l = s.style;
      return l.float = "right", l.textTransform = "uppercase", l.color = "#1094f7", l.fontSize = "14px", l.letterSpacing = 0, l.border = 0, l.background = "none", l.marginTop = "16px", s.addEventListener("click", n), s;
    };
    var _r = typeof window < "u" ? window : typeof qt < "u" ? qt : typeof self < "u" ? self : {};
    function Mr(r) {
      return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
    }
    function Tr(r, n) {
      return n = { exports: {} }, r(n, n.exports), n.exports;
    }
    var Fr = Tr(function(r, n) {
      (function(l, c) {
        r.exports = c();
      })(_r, function() {
        return function(s) {
          var l = {};
          function c(A) {
            if (l[A])
              return l[A].exports;
            var f = l[A] = {
              i: A,
              l: !1,
              exports: {}
            };
            return s[A].call(f.exports, f, f.exports, c), f.l = !0, f.exports;
          }
          return c.m = s, c.c = l, c.d = function(A, f, S) {
            c.o(A, f) || Object.defineProperty(A, f, {
              configurable: !1,
              enumerable: !0,
              get: S
            });
          }, c.n = function(A) {
            var f = A && A.__esModule ? function() {
              return A.default;
            } : function() {
              return A;
            };
            return c.d(f, "a", f), f;
          }, c.o = function(A, f) {
            return Object.prototype.hasOwnProperty.call(A, f);
          }, c.p = "", c(c.s = 0);
        }([
          function(s, l, c) {
            var A = function() {
              function w(T, k) {
                for (var U = 0; U < k.length; U++) {
                  var X = k[U];
                  X.enumerable = X.enumerable || !1, X.configurable = !0, "value" in X && (X.writable = !0), Object.defineProperty(T, X.key, X);
                }
              }
              return function(T, k, U) {
                return k && w(T.prototype, k), U && w(T, U), T;
              };
            }();
            function f(w, T) {
              if (!(w instanceof T))
                throw new TypeError("Cannot call a class as a function");
            }
            var S = c(1), E = typeof navigator < "u" && parseFloat(("" + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) < 10 && !window.MSStream, p = function() {
              function w() {
                f(this, w), E ? this.noSleepTimer = null : (this.noSleepVideo = document.createElement("video"), this.noSleepVideo.setAttribute("playsinline", ""), this.noSleepVideo.setAttribute("src", S), this.noSleepVideo.addEventListener("timeupdate", (function(T) {
                  this.noSleepVideo.currentTime > 0.5 && (this.noSleepVideo.currentTime = Math.random());
                }).bind(this)));
              }
              return A(w, [{
                key: "enable",
                value: function() {
                  E ? (this.disable(), this.noSleepTimer = window.setInterval(function() {
                    window.location.href = "/", window.setTimeout(window.stop, 0);
                  }, 15e3)) : this.noSleepVideo.play();
                }
              }, {
                key: "disable",
                value: function() {
                  E ? this.noSleepTimer && (window.clearInterval(this.noSleepTimer), this.noSleepTimer = null) : this.noSleepVideo.pause();
                }
              }]), w;
            }();
            s.exports = p;
          },
          function(s, l, c) {
            s.exports = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC8wYF///v3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0MiByMjQ3OSBkZDc5YTYxIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTEgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MToweDExMSBtZT1oZXggc3VibWU9MiBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0wIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MCA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0wIHRocmVhZHM9NiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MSBrZXlpbnQ9MzAwIGtleWludF9taW49MzAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD0xMCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIwLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IHZidl9tYXhyYXRlPTIwMDAwIHZidl9idWZzaXplPTI1MDAwIGNyZl9tYXg9MC4wIG5hbF9ocmQ9bm9uZSBmaWxsZXI9MCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAOWWIhAA3//p+C7v8tDDSTjf97w55i3SbRPO4ZY+hkjD5hbkAkL3zpJ6h/LR1CAABzgB1kqqzUorlhQAAAAxBmiQYhn/+qZYADLgAAAAJQZ5CQhX/AAj5IQADQGgcIQADQGgcAAAACQGeYUQn/wALKCEAA0BoHAAAAAkBnmNEJ/8ACykhAANAaBwhAANAaBwAAAANQZpoNExDP/6plgAMuSEAA0BoHAAAAAtBnoZFESwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBnqVEJ/8ACykhAANAaBwAAAAJAZ6nRCf/AAsoIQADQGgcIQADQGgcAAAADUGarDRMQz/+qZYADLghAANAaBwAAAALQZ7KRRUsK/8ACPkhAANAaBwAAAAJAZ7pRCf/AAsoIQADQGgcIQADQGgcAAAACQGe60Qn/wALKCEAA0BoHAAAAA1BmvA0TEM//qmWAAy5IQADQGgcIQADQGgcAAAAC0GfDkUVLCv/AAj5IQADQGgcAAAACQGfLUQn/wALKSEAA0BoHCEAA0BoHAAAAAkBny9EJ/8ACyghAANAaBwAAAANQZs0NExDP/6plgAMuCEAA0BoHAAAAAtBn1JFFSwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBn3FEJ/8ACyghAANAaBwAAAAJAZ9zRCf/AAsoIQADQGgcIQADQGgcAAAADUGbeDRMQz/+qZYADLkhAANAaBwAAAALQZ+WRRUsK/8ACPghAANAaBwhAANAaBwAAAAJAZ+1RCf/AAspIQADQGgcAAAACQGft0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bm7w0TEM//qmWAAy4IQADQGgcAAAAC0Gf2kUVLCv/AAj5IQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHAAAAAkBn/tEJ/8ACykhAANAaBwAAAANQZvgNExDP/6plgAMuSEAA0BoHCEAA0BoHAAAAAtBnh5FFSwr/wAI+CEAA0BoHAAAAAkBnj1EJ/8ACyghAANAaBwhAANAaBwAAAAJAZ4/RCf/AAspIQADQGgcAAAADUGaJDRMQz/+qZYADLghAANAaBwAAAALQZ5CRRUsK/8ACPkhAANAaBwhAANAaBwAAAAJAZ5hRCf/AAsoIQADQGgcAAAACQGeY0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bmmg0TEM//qmWAAy5IQADQGgcAAAAC0GehkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGepUQn/wALKSEAA0BoHAAAAAkBnqdEJ/8ACyghAANAaBwAAAANQZqsNExDP/6plgAMuCEAA0BoHCEAA0BoHAAAAAtBnspFFSwr/wAI+SEAA0BoHAAAAAkBnulEJ/8ACyghAANAaBwhAANAaBwAAAAJAZ7rRCf/AAsoIQADQGgcAAAADUGa8DRMQz/+qZYADLkhAANAaBwhAANAaBwAAAALQZ8ORRUsK/8ACPkhAANAaBwAAAAJAZ8tRCf/AAspIQADQGgcIQADQGgcAAAACQGfL0Qn/wALKCEAA0BoHAAAAA1BmzQ0TEM//qmWAAy4IQADQGgcAAAAC0GfUkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGfcUQn/wALKCEAA0BoHAAAAAkBn3NEJ/8ACyghAANAaBwhAANAaBwAAAANQZt4NExC//6plgAMuSEAA0BoHAAAAAtBn5ZFFSwr/wAI+CEAA0BoHCEAA0BoHAAAAAkBn7VEJ/8ACykhAANAaBwAAAAJAZ+3RCf/AAspIQADQGgcAAAADUGbuzRMQn/+nhAAYsAhAANAaBwhAANAaBwAAAAJQZ/aQhP/AAspIQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHAAACiFtb292AAAAbG12aGQAAAAA1YCCX9WAgl8AAAPoAAAH/AABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAGGlvZHMAAAAAEICAgAcAT////v7/AAAF+XRyYWsAAABcdGtoZAAAAAPVgIJf1YCCXwAAAAEAAAAAAAAH0AAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAygAAAMoAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAB9AAABdwAAEAAAAABXFtZGlhAAAAIG1kaGQAAAAA1YCCX9WAgl8AAV+QAAK/IFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAUcbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAE3HN0YmwAAACYc3RzZAAAAAAAAAABAAAAiGF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAygDKAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAyYXZjQwFNQCj/4QAbZ01AKOyho3ySTUBAQFAAAAMAEAAr8gDxgxlgAQAEaO+G8gAAABhzdHRzAAAAAAAAAAEAAAA8AAALuAAAABRzdHNzAAAAAAAAAAEAAAABAAAB8GN0dHMAAAAAAAAAPAAAAAEAABdwAAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAAC7gAAAAAQAAF3AAAAABAAAAAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAEEc3RzegAAAAAAAAAAAAAAPAAAAzQAAAAQAAAADQAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAANAAAADQAAAQBzdGNvAAAAAAAAADwAAAAwAAADZAAAA3QAAAONAAADoAAAA7kAAAPQAAAD6wAAA/4AAAQXAAAELgAABEMAAARcAAAEbwAABIwAAAShAAAEugAABM0AAATkAAAE/wAABRIAAAUrAAAFQgAABV0AAAVwAAAFiQAABaAAAAW1AAAFzgAABeEAAAX+AAAGEwAABiwAAAY/AAAGVgAABnEAAAaEAAAGnQAABrQAAAbPAAAG4gAABvUAAAcSAAAHJwAAB0AAAAdTAAAHcAAAB4UAAAeeAAAHsQAAB8gAAAfjAAAH9gAACA8AAAgmAAAIQQAACFQAAAhnAAAIhAAACJcAAAMsdHJhawAAAFx0a2hkAAAAA9WAgl/VgIJfAAAAAgAAAAAAAAf8AAAAAAAAAAAAAAABAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAACsm1kaWEAAAAgbWRoZAAAAADVgIJf1YCCXwAArEQAAWAAVcQAAAAAACdoZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU3RlcmVvAAAAAmNtaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAidzdGJsAAAAZ3N0c2QAAAAAAAAAAQAAAFdtcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAADNlc2RzAAAAAAOAgIAiAAIABICAgBRAFQAAAAADDUAAAAAABYCAgAISEAaAgIABAgAAABhzdHRzAAAAAAAAAAEAAABYAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAGAAAAWAAAAXBzdGNvAAAAAAAAAFgAAAOBAAADhwAAA5oAAAOtAAADswAAA8oAAAPfAAAD5QAAA/gAAAQLAAAEEQAABCgAAAQ9AAAEUAAABFYAAARpAAAEgAAABIYAAASbAAAErgAABLQAAATHAAAE3gAABPMAAAT5AAAFDAAABR8AAAUlAAAFPAAABVEAAAVXAAAFagAABX0AAAWDAAAFmgAABa8AAAXCAAAFyAAABdsAAAXyAAAF+AAABg0AAAYgAAAGJgAABjkAAAZQAAAGZQAABmsAAAZ+AAAGkQAABpcAAAauAAAGwwAABskAAAbcAAAG7wAABwYAAAcMAAAHIQAABzQAAAc6AAAHTQAAB2QAAAdqAAAHfwAAB5IAAAeYAAAHqwAAB8IAAAfXAAAH3QAAB/AAAAgDAAAICQAACCAAAAg1AAAIOwAACE4AAAhhAAAIeAAACH4AAAiRAAAIpAAACKoAAAiwAAAItgAACLwAAAjCAAAAFnVkdGEAAAAObmFtZVN0ZXJlbwAAAHB1ZHRhAAAAaG1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAAO2lsc3QAAAAzqXRvbwAAACtkYXRhAAAAAQAAAABIYW5kQnJha2UgMC4xMC4yIDIwMTUwNjExMDA=";
          }
        ]);
      });
    }), Cr = Mr(Fr), Pr = 1e3, Dr = [0, 0, 0.5, 1], Ir = [0.5, 0, 0.5, 1], Br = window.requestAnimationFrame, Lr = window.cancelAnimationFrame;
    function Or() {
      this.leftProjectionMatrix = new Float32Array(16), this.leftViewMatrix = new Float32Array(16), this.rightProjectionMatrix = new Float32Array(16), this.rightViewMatrix = new Float32Array(16), this.pose = null;
    }
    function pi(r) {
      Object.defineProperties(this, {
        hasPosition: {
          writable: !1,
          enumerable: !0,
          value: r.hasPosition
        },
        hasExternalDisplay: {
          writable: !1,
          enumerable: !0,
          value: r.hasExternalDisplay
        },
        canPresent: {
          writable: !1,
          enumerable: !0,
          value: r.canPresent
        },
        maxLayers: {
          writable: !1,
          enumerable: !0,
          value: r.maxLayers
        },
        hasOrientation: {
          enumerable: !0,
          get: function() {
            return Te("VRDisplayCapabilities.prototype.hasOrientation", "VRDisplay.prototype.getFrameData"), r.hasOrientation;
          }
        }
      });
    }
    function se(r) {
      r = r || {};
      var n = "wakelock" in r ? r.wakelock : !0;
      this.isPolyfilled = !0, this.displayId = Pr++, this.displayName = "", this.depthNear = 0.01, this.depthFar = 1e4, this.isPresenting = !1, Object.defineProperty(this, "isConnected", {
        get: function() {
          return Te("VRDisplay.prototype.isConnected", "VRDisplayCapabilities.prototype.hasExternalDisplay"), !1;
        }
      }), this.capabilities = new pi({
        hasPosition: !1,
        hasOrientation: !1,
        hasExternalDisplay: !1,
        canPresent: !1,
        maxLayers: 1
      }), this.stageParameters = null, this.waitingForPresent_ = !1, this.layer_ = null, this.originalParent_ = null, this.fullscreenElement_ = null, this.fullscreenWrapper_ = null, this.fullscreenElementCachedStyle_ = null, this.fullscreenEventTarget_ = null, this.fullscreenChangeHandler_ = null, this.fullscreenErrorHandler_ = null, n && D() && (this.wakelock_ = new Cr());
    }
    se.prototype.getFrameData = function(r) {
      return M(r, this._getPose(), this);
    }, se.prototype.getPose = function() {
      return Te("VRDisplay.prototype.getPose", "VRDisplay.prototype.getFrameData"), this._getPose();
    }, se.prototype.resetPose = function() {
      return Te("VRDisplay.prototype.resetPose"), this._resetPose();
    }, se.prototype.getImmediatePose = function() {
      return Te("VRDisplay.prototype.getImmediatePose", "VRDisplay.prototype.getFrameData"), this._getPose();
    }, se.prototype.requestAnimationFrame = function(r) {
      return Br(r);
    }, se.prototype.cancelAnimationFrame = function(r) {
      return Lr(r);
    }, se.prototype.wrapForFullscreen = function(r) {
      if (v())
        return r;
      if (!this.fullscreenWrapper_) {
        this.fullscreenWrapper_ = document.createElement("div");
        var n = ["height: " + Math.min(screen.height, screen.width) + "px !important", "top: 0 !important", "left: 0 !important", "right: 0 !important", "border: 0", "margin: 0", "padding: 0", "z-index: 999999 !important", "position: fixed"];
        this.fullscreenWrapper_.setAttribute("style", n.join("; ") + ";"), this.fullscreenWrapper_.classList.add("webvr-polyfill-fullscreen-wrapper");
      }
      if (this.fullscreenElement_ == r)
        return this.fullscreenWrapper_;
      if (this.fullscreenElement_ && (this.originalParent_ ? this.originalParent_.appendChild(this.fullscreenElement_) : this.fullscreenElement_.parentElement.removeChild(this.fullscreenElement_)), this.fullscreenElement_ = r, this.originalParent_ = r.parentElement, this.originalParent_ || document.body.appendChild(r), !this.fullscreenWrapper_.parentElement) {
        var s = this.fullscreenElement_.parentElement;
        s.insertBefore(this.fullscreenWrapper_, this.fullscreenElement_), s.removeChild(this.fullscreenElement_);
      }
      this.fullscreenWrapper_.insertBefore(this.fullscreenElement_, this.fullscreenWrapper_.firstChild), this.fullscreenElementCachedStyle_ = this.fullscreenElement_.getAttribute("style");
      var l = this;
      function c() {
        if (l.fullscreenElement_) {
          var A = ["position: absolute", "top: 0", "left: 0", "width: " + Math.max(screen.width, screen.height) + "px", "height: " + Math.min(screen.height, screen.width) + "px", "border: 0", "margin: 0", "padding: 0"];
          l.fullscreenElement_.setAttribute("style", A.join("; ") + ";");
        }
      }
      return c(), this.fullscreenWrapper_;
    }, se.prototype.removeFullscreenWrapper = function() {
      if (this.fullscreenElement_) {
        var r = this.fullscreenElement_;
        this.fullscreenElementCachedStyle_ ? r.setAttribute("style", this.fullscreenElementCachedStyle_) : r.removeAttribute("style"), this.fullscreenElement_ = null, this.fullscreenElementCachedStyle_ = null;
        var n = this.fullscreenWrapper_.parentElement;
        return this.fullscreenWrapper_.removeChild(r), this.originalParent_ === n ? n.insertBefore(r, this.fullscreenWrapper_) : this.originalParent_ && this.originalParent_.appendChild(r), n.removeChild(this.fullscreenWrapper_), r;
      }
    }, se.prototype.requestPresent = function(r) {
      var n = this.isPresenting, s = this;
      return r instanceof Array || (Te("VRDisplay.prototype.requestPresent with non-array argument", "an array of VRLayers as the first argument"), r = [r]), new Promise(function(l, c) {
        if (!s.capabilities.canPresent) {
          c(new Error("VRDisplay is not capable of presenting."));
          return;
        }
        if (r.length == 0 || r.length > s.capabilities.maxLayers) {
          c(new Error("Invalid number of layers."));
          return;
        }
        var A = r[0];
        if (!A.source) {
          l();
          return;
        }
        var f = A.leftBounds || Dr, S = A.rightBounds || Ir;
        if (n) {
          var E = s.layer_;
          E.source !== A.source && (E.source = A.source);
          for (var p = 0; p < 4; p++)
            E.leftBounds[p] = f[p], E.rightBounds[p] = S[p];
          s.wrapForFullscreen(s.layer_.source), s.updatePresent_(), l();
          return;
        }
        if (s.layer_ = {
          predistorted: A.predistorted,
          source: A.source,
          leftBounds: f.slice(0),
          rightBounds: S.slice(0)
        }, s.waitingForPresent_ = !1, s.layer_ && s.layer_.source) {
          var w = s.wrapForFullscreen(s.layer_.source), T = function() {
            var X = W();
            s.isPresenting = w === X, s.isPresenting ? (screen.orientation && screen.orientation.lock && screen.orientation.lock("landscape-primary").catch(function(q) {
              console.error("screen.orientation.lock() failed due to", q.message);
            }), s.waitingForPresent_ = !1, s.beginPresent_(), l()) : (screen.orientation && screen.orientation.unlock && screen.orientation.unlock(), s.removeFullscreenWrapper(), s.disableWakeLock(), s.endPresent_(), s.removeFullscreenListeners_()), s.fireVRDisplayPresentChange_();
          }, k = function() {
            s.waitingForPresent_ && (s.removeFullscreenWrapper(), s.removeFullscreenListeners_(), s.disableWakeLock(), s.waitingForPresent_ = !1, s.isPresenting = !1, c(new Error("Unable to present.")));
          };
          s.addFullscreenListeners_(w, T, k), G(w) ? (s.enableWakeLock(), s.waitingForPresent_ = !0) : (v() || y()) && (s.enableWakeLock(), s.isPresenting = !0, s.beginPresent_(), s.fireVRDisplayPresentChange_(), l());
        }
        !s.waitingForPresent_ && !v() && (O(), c(new Error("Unable to present.")));
      });
    }, se.prototype.exitPresent = function() {
      var r = this.isPresenting, n = this;
      return this.isPresenting = !1, this.layer_ = null, this.disableWakeLock(), new Promise(function(s, l) {
        r ? (!O() && v() && (n.endPresent_(), n.fireVRDisplayPresentChange_()), y() && (n.removeFullscreenWrapper(), n.removeFullscreenListeners_(), n.endPresent_(), n.fireVRDisplayPresentChange_()), s()) : l(new Error("Was not presenting to VRDisplay."));
      });
    }, se.prototype.getLayers = function() {
      return this.layer_ ? [this.layer_] : [];
    }, se.prototype.fireVRDisplayPresentChange_ = function() {
      var r = new CustomEvent("vrdisplaypresentchange", { detail: { display: this } });
      window.dispatchEvent(r);
    }, se.prototype.fireVRDisplayConnect_ = function() {
      var r = new CustomEvent("vrdisplayconnect", { detail: { display: this } });
      window.dispatchEvent(r);
    }, se.prototype.addFullscreenListeners_ = function(r, n, s) {
      this.removeFullscreenListeners_(), this.fullscreenEventTarget_ = r, this.fullscreenChangeHandler_ = n, this.fullscreenErrorHandler_ = s, n && (document.fullscreenEnabled ? r.addEventListener("fullscreenchange", n, !1) : document.webkitFullscreenEnabled ? r.addEventListener("webkitfullscreenchange", n, !1) : document.mozFullScreenEnabled ? document.addEventListener("mozfullscreenchange", n, !1) : document.msFullscreenEnabled && r.addEventListener("msfullscreenchange", n, !1)), s && (document.fullscreenEnabled ? r.addEventListener("fullscreenerror", s, !1) : document.webkitFullscreenEnabled ? r.addEventListener("webkitfullscreenerror", s, !1) : document.mozFullScreenEnabled ? document.addEventListener("mozfullscreenerror", s, !1) : document.msFullscreenEnabled && r.addEventListener("msfullscreenerror", s, !1));
    }, se.prototype.removeFullscreenListeners_ = function() {
      if (this.fullscreenEventTarget_) {
        var r = this.fullscreenEventTarget_;
        if (this.fullscreenChangeHandler_) {
          var n = this.fullscreenChangeHandler_;
          r.removeEventListener("fullscreenchange", n, !1), r.removeEventListener("webkitfullscreenchange", n, !1), document.removeEventListener("mozfullscreenchange", n, !1), r.removeEventListener("msfullscreenchange", n, !1);
        }
        if (this.fullscreenErrorHandler_) {
          var s = this.fullscreenErrorHandler_;
          r.removeEventListener("fullscreenerror", s, !1), r.removeEventListener("webkitfullscreenerror", s, !1), document.removeEventListener("mozfullscreenerror", s, !1), r.removeEventListener("msfullscreenerror", s, !1);
        }
        this.fullscreenEventTarget_ = null, this.fullscreenChangeHandler_ = null, this.fullscreenErrorHandler_ = null;
      }
    }, se.prototype.enableWakeLock = function() {
      this.wakelock_ && this.wakelock_.enable();
    }, se.prototype.disableWakeLock = function() {
      this.wakelock_ && this.wakelock_.disable();
    }, se.prototype.beginPresent_ = function() {
    }, se.prototype.endPresent_ = function() {
    }, se.prototype.submitFrame = function(r) {
    }, se.prototype.getEyeParameters = function(r) {
      return null;
    };
    var Nr = {
      ADDITIONAL_VIEWERS: [],
      DEFAULT_VIEWER: "",
      MOBILE_WAKE_LOCK: !0,
      DEBUG: !1,
      DPDB_URL: "https://dpdb.webvr.rocks/dpdb.json",
      K_FILTER: 0.98,
      PREDICTION_TIME_S: 0.04,
      CARDBOARD_UI_DISABLED: !1,
      ROTATE_INSTRUCTIONS_DISABLED: !1,
      YAW_ONLY: !1,
      BUFFER_SCALE: 0.5,
      DIRTY_SUBMIT_FRAME_BINDINGS: !1
    }, Tt = {
      LEFT: "left",
      RIGHT: "right"
    };
    function ue(r) {
      var n = V({}, Nr);
      r = V(n, r || {}), se.call(this, {
        wakelock: r.MOBILE_WAKE_LOCK
      }), this.config = r, this.displayName = "Cardboard VRDisplay", this.capabilities = new pi({
        hasPosition: !1,
        hasOrientation: !0,
        hasExternalDisplay: !1,
        canPresent: !0,
        maxLayers: 1
      }), this.stageParameters = null, this.bufferScale_ = this.config.BUFFER_SCALE, this.poseSensor_ = new Er(this.config), this.distorter_ = null, this.cardboardUI_ = null, this.dpdb_ = new nt(this.config.DPDB_URL, this.onDeviceParamsUpdated_.bind(this)), this.deviceInfo_ = new Ae(this.dpdb_.getDeviceParams(), r.ADDITIONAL_VIEWERS), this.viewerSelector_ = new Ce(r.DEFAULT_VIEWER), this.viewerSelector_.onChange(this.onViewerChanged_.bind(this)), this.deviceInfo_.setViewer(this.viewerSelector_.getCurrentViewer()), this.config.ROTATE_INSTRUCTIONS_DISABLED || (this.rotateInstructions_ = new je()), v() && window.addEventListener("resize", this.onResize_.bind(this));
    }
    return ue.prototype = Object.create(se.prototype), ue.prototype._getPose = function() {
      return {
        position: null,
        orientation: this.poseSensor_.getOrientation(),
        linearVelocity: null,
        linearAcceleration: null,
        angularVelocity: null,
        angularAcceleration: null
      };
    }, ue.prototype._resetPose = function() {
      this.poseSensor_.resetPose && this.poseSensor_.resetPose();
    }, ue.prototype._getFieldOfView = function(r) {
      var n;
      if (r == Tt.LEFT)
        n = this.deviceInfo_.getFieldOfViewLeftEye();
      else if (r == Tt.RIGHT)
        n = this.deviceInfo_.getFieldOfViewRightEye();
      else
        return console.error("Invalid eye provided: %s", r), null;
      return n;
    }, ue.prototype._getEyeOffset = function(r) {
      var n;
      if (r == Tt.LEFT)
        n = [-this.deviceInfo_.viewer.interLensDistance * 0.5, 0, 0];
      else if (r == Tt.RIGHT)
        n = [this.deviceInfo_.viewer.interLensDistance * 0.5, 0, 0];
      else
        return console.error("Invalid eye provided: %s", r), null;
      return n;
    }, ue.prototype.getEyeParameters = function(r) {
      var n = this._getEyeOffset(r), s = this._getFieldOfView(r), l = {
        offset: n,
        renderWidth: this.deviceInfo_.device.width * 0.5 * this.bufferScale_,
        renderHeight: this.deviceInfo_.device.height * this.bufferScale_
      };
      return Object.defineProperty(l, "fieldOfView", {
        enumerable: !0,
        get: function() {
          return Te("VRFieldOfView", "VRFrameData's projection matrices"), s;
        }
      }), l;
    }, ue.prototype.onDeviceParamsUpdated_ = function(r) {
      this.config.DEBUG && console.log("DPDB reported that device params were updated."), this.deviceInfo_.updateDeviceParams(r), this.distorter_ && this.distorter_.updateDeviceInfo(this.deviceInfo_);
    }, ue.prototype.updateBounds_ = function() {
      this.layer_ && this.distorter_ && (this.layer_.leftBounds || this.layer_.rightBounds) && this.distorter_.setTextureBounds(this.layer_.leftBounds, this.layer_.rightBounds);
    }, ue.prototype.beginPresent_ = function() {
      var r = this.layer_.source.getContext("webgl");
      r || (r = this.layer_.source.getContext("experimental-webgl")), r || (r = this.layer_.source.getContext("webgl2")), r && (this.layer_.predistorted ? this.config.CARDBOARD_UI_DISABLED || (r.canvas.width = P() * this.bufferScale_, r.canvas.height = I() * this.bufferScale_, this.cardboardUI_ = new He(r)) : (this.config.CARDBOARD_UI_DISABLED || (this.cardboardUI_ = new He(r)), this.distorter_ = new ee(r, this.cardboardUI_, this.config.BUFFER_SCALE, this.config.DIRTY_SUBMIT_FRAME_BINDINGS), this.distorter_.updateDeviceInfo(this.deviceInfo_)), this.cardboardUI_ && this.cardboardUI_.listen((function(n) {
        this.viewerSelector_.show(this.layer_.source.parentElement), n.stopPropagation(), n.preventDefault();
      }).bind(this), (function(n) {
        this.exitPresent(), n.stopPropagation(), n.preventDefault();
      }).bind(this)), this.rotateInstructions_ && (N() && D() ? this.rotateInstructions_.showTemporarily(3e3, this.layer_.source.parentElement) : this.rotateInstructions_.update()), this.orientationHandler = this.onOrientationChange_.bind(this), window.addEventListener("orientationchange", this.orientationHandler), this.vrdisplaypresentchangeHandler = this.updateBounds_.bind(this), window.addEventListener("vrdisplaypresentchange", this.vrdisplaypresentchangeHandler), this.fireVRDisplayDeviceParamsChange_());
    }, ue.prototype.endPresent_ = function() {
      this.distorter_ && (this.distorter_.destroy(), this.distorter_ = null), this.cardboardUI_ && (this.cardboardUI_.destroy(), this.cardboardUI_ = null), this.rotateInstructions_ && this.rotateInstructions_.hide(), this.viewerSelector_.hide(), window.removeEventListener("orientationchange", this.orientationHandler), window.removeEventListener("vrdisplaypresentchange", this.vrdisplaypresentchangeHandler);
    }, ue.prototype.updatePresent_ = function() {
      this.endPresent_(), this.beginPresent_();
    }, ue.prototype.submitFrame = function(r) {
      if (this.distorter_)
        this.updateBounds_(), this.distorter_.submitFrame();
      else if (this.cardboardUI_ && this.layer_) {
        var n = this.layer_.source.getContext("webgl");
        n || (n = this.layer_.source.getContext("experimental-webgl")), n || (n = this.layer_.source.getContext("webgl2"));
        var s = n.canvas;
        (s.width != this.lastWidth || s.height != this.lastHeight) && this.cardboardUI_.onResize(), this.lastWidth = s.width, this.lastHeight = s.height, this.cardboardUI_.render();
      }
    }, ue.prototype.onOrientationChange_ = function(r) {
      this.viewerSelector_.hide(), this.rotateInstructions_ && this.rotateInstructions_.update(), this.onResize_();
    }, ue.prototype.onResize_ = function(r) {
      if (this.layer_) {
        var n = this.layer_.source.getContext("webgl");
        n || (n = this.layer_.source.getContext("experimental-webgl")), n || (n = this.layer_.source.getContext("webgl2"));
        var s = [
          "position: absolute",
          "top: 0",
          "left: 0",
          "width: 100vw",
          "height: 100vh",
          "border: 0",
          "margin: 0",
          "padding: 0px",
          "box-sizing: content-box"
        ];
        n.canvas.setAttribute("style", s.join("; ") + ";"), L(n.canvas);
      }
    }, ue.prototype.onViewerChanged_ = function(r) {
      this.deviceInfo_.setViewer(r), this.distorter_ && this.distorter_.updateDeviceInfo(this.deviceInfo_), this.fireVRDisplayDeviceParamsChange_();
    }, ue.prototype.fireVRDisplayDeviceParamsChange_ = function() {
      var r = new CustomEvent("vrdisplaydeviceparamschange", {
        detail: {
          vrdisplay: this,
          deviceInfo: this.deviceInfo_
        }
      });
      window.dispatchEvent(r);
    }, ue.VRFrameData = Or, ue.VRDisplay = se, ue;
  });
})(rr);
var pn = rr.exports;
const mn = /* @__PURE__ */ fn(pn);
class hi extends ai {
  /**
   * Takes a VRDisplay object from the WebVR 1.1 spec.
   *
   * @param {Object} global
   */
  constructor(e) {
    super(), this.global = e, this.onWindowResize = this.onWindowResize.bind(this), this.global.window.addEventListener("resize", this.onWindowResize), this.environmentBlendMode = "opaque";
  }
  /**
   * Called when a XRSession has a `baseLayer` property set.
   *
   * @param {number} sessionId
   * @param {XRWebGLLayer} layer
   */
  onBaseLayerSet(e, t) {
    throw new Error("Not implemented");
  }
  /**
   * @param {XRSessionMode} mode
   * @return {boolean}
   */
  isSessionSupported(e) {
    throw new Error("Not implemented");
  }
  /**
   * @param {string} featureDescriptor
   * @return {boolean}
   */
  isFeatureSupported(e) {
    throw new Error("Not implemented");
  }
  /**
   * Returns a promise if creating a session is successful.
   * Usually used to set up presentation in the device.
   *
   * @param {XRSessionMode} mode
   * @param {Set<string>} enabledFeatures
   * @return {Promise<number>}
   */
  async requestSession(e, t) {
    throw new Error("Not implemented");
  }
  /**
   * @return {Function}
   */
  requestAnimationFrame(e) {
    throw new Error("Not implemented");
  }
  /**
   * @param {number} sessionId
   */
  onFrameStart(e) {
    throw new Error("Not implemented");
  }
  /**
   * @param {number} sessionId
   */
  onFrameEnd(e) {
    throw new Error("Not implemented");
  }
  /**
   * @param {number} sessionId
   * @param {XRReferenceSpaceType} type
   * @return {boolean}
   */
  doesSessionSupportReferenceSpace(e, t) {
    throw new Error("Not implemented");
  }
  /**
   * @return {Object?}
   */
  requestStageBounds() {
    throw new Error("Not implemented");
  }
  /**
   * Returns a promise resolving to a transform if XRDevice
   * can support frame of reference and provides its own values.
   * Can resolve to `undefined` if the polyfilled API can provide
   * a default. Rejects if this XRDevice cannot
   * support the frame of reference.
   *
   * @param {XRFrameOfReferenceType} type
   * @param {XRFrameOfReferenceOptions} options
   * @return {Promise<XRFrameOfReference>}
   */
  async requestFrameOfReferenceTransform(e, t) {
  }
  /**
   * @param {number} handle
   */
  cancelAnimationFrame(e) {
    throw new Error("Not implemented");
  }
  /**
   * @param {number} sessionId
   */
  endSession(e) {
    throw new Error("Not implemented");
  }
  /**
   * Allows the XRDevice to override the XRSession's view spaces.
   *
   * @param {XRSessionMode} mode
   * @return {Array<XRSpace> | undefined}
   */
  getViewSpaces(e) {
  }
  /**
   * Takes a XREye and a target to apply properties of
   * `x`, `y`, `width` and `height` on. Returns a boolean
   * indicating if it successfully was able to populate
   * target's values.
   *
   * @param {number} sessionId
   * @param {XREye} eye
   * @param {XRWebGLLayer} layer
   * @param {Object?} target
   * @param {number} viewIndex
   * @return {boolean}
   */
  getViewport(e, t, a, o, h) {
    throw new Error("Not implemented");
  }
  /**
   * @param {XREye} eye
   * @param {number} viewIndex
   * @return {Float32Array}
   */
  getProjectionMatrix(e, t) {
    throw new Error("Not implemented");
  }
  /**
   * Get model matrix unaffected by frame of reference.
   *
   * @return {Float32Array}
   */
  getBasePoseMatrix() {
    throw new Error("Not implemented");
  }
  /**
   * Get view matrix unaffected by frame of reference.
   *
   * @param {XREye} eye
   * @return {Float32Array}
   */
  getBaseViewMatrix(e) {
    throw new Error("Not implemented");
  }
  /**
   * Get a list of input sources.
   *
   * @return {Array<XRInputSource>}
   */
  getInputSources() {
    throw new Error("Not implemented");
  }
  /**
   * Get the current pose of an input source.
   *
   * @param {XRInputSource} inputSource
   * @param {XRCoordinateSystem} coordinateSystem
   * @param {String} poseType
   * @return {XRPose}
   */
  getInputPose(e, t, a) {
    throw new Error("Not implemented");
  }
  /**
   * Called on window resize.
   */
  onWindowResize() {
    this.onWindowResize();
  }
}
let vn = {
  mapping: "",
  profiles: ["google-daydream", "generic-trigger-touchpad"],
  buttons: {
    length: 3,
    0: null,
    1: null,
    2: 0
  }
}, wn = {
  mapping: "xr-standard",
  profiles: ["htc-vive-focus", "generic-trigger-touchpad"],
  buttons: {
    length: 3,
    0: 1,
    1: null,
    2: 0
  }
}, yn = {
  mapping: "xr-standard",
  profiles: ["oculus-go", "generic-trigger-touchpad"],
  buttons: {
    length: 3,
    0: 1,
    1: null,
    2: 0
  },
  // Grip adjustments determined experimentally.
  gripTransform: {
    orientation: [Math.PI * 0.11, 0, 0, 1]
  }
}, Ti = {
  mapping: "xr-standard",
  displayProfiles: {
    "Oculus Quest": ["oculus-touch-v2", "oculus-touch", "generic-trigger-squeeze-thumbstick"]
  },
  profiles: ["oculus-touch", "generic-trigger-squeeze-thumbstick"],
  axes: {
    length: 4,
    0: null,
    1: null,
    2: 0,
    3: 1
  },
  buttons: {
    length: 7,
    0: 1,
    1: 2,
    2: null,
    3: 0,
    4: 3,
    5: 4,
    6: null
  },
  // Grip adjustments determined experimentally.
  gripTransform: {
    position: [0, -0.02, 0.04, 1],
    orientation: [Math.PI * 0.11, 0, 0, 1]
  }
}, bn = {
  mapping: "xr-standard",
  profiles: ["htc-vive", "generic-trigger-squeeze-touchpad"],
  displayProfiles: {
    "HTC Vive": ["htc-vive", "generic-trigger-squeeze-touchpad"],
    "HTC Vive DVT": ["htc-vive", "generic-trigger-squeeze-touchpad"],
    "Valve Index": ["valve-index", "generic-trigger-squeeze-touchpad-thumbstick"]
  },
  buttons: {
    length: 3,
    0: 1,
    1: 2,
    2: 0
  },
  // Transform adjustments determined experimentally.
  gripTransform: {
    position: [0, 0, 0.05, 1]
  },
  targetRayTransform: {
    orientation: [Math.PI * -0.08, 0, 0, 1]
  },
  userAgentOverrides: {
    Firefox: {
      axes: {
        invert: [1, 3]
      }
    }
  }
}, gn = {
  mapping: "xr-standard",
  profiles: ["samsung-gearvr", "generic-trigger-touchpad"],
  buttons: {
    length: 3,
    0: 1,
    1: null,
    2: 0
  },
  gripTransform: {
    orientation: [Math.PI * 0.11, 0, 0, 1]
  }
}, En = {
  mapping: "xr-standard",
  profiles: ["samsung-odyssey", "microsoft-mixed-reality", "generic-trigger-squeeze-touchpad-thumbstick"],
  buttons: {
    length: 4,
    0: 1,
    // index finger trigger
    1: 0,
    // pressable joystick
    2: 2,
    // grip trigger
    3: 4
    // pressable touchpad
  },
  // Grip adjustments determined experimentally.
  gripTransform: {
    position: [0, -0.02, 0.04, 1],
    orientation: [Math.PI * 0.11, 0, 0, 1]
  }
}, $t = {
  mapping: "xr-standard",
  profiles: ["microsoft-mixed-reality", "generic-trigger-squeeze-touchpad-thumbstick"],
  buttons: {
    length: 4,
    0: 1,
    // index finger trigger
    1: 0,
    // pressable joystick
    2: 2,
    // grip trigger
    3: 4
    // pressable touchpad
  },
  // Grip adjustments determined experimentally.
  gripTransform: {
    position: [0, -0.02, 0.04, 1],
    orientation: [Math.PI * 0.11, 0, 0, 1]
  }
}, xn = {
  "Daydream Controller": vn,
  "Gear VR Controller": gn,
  "HTC Vive Focus Controller": wn,
  "Oculus Go Controller": yn,
  "Oculus Touch (Right)": Ti,
  "Oculus Touch (Left)": Ti,
  "OpenVR Gamepad": bn,
  "Spatial Controller (Spatial Interaction Source) 045E-065A": $t,
  "Spatial Controller (Spatial Interaction Source) 045E-065D": En,
  "Windows Mixed Reality (Right)": $t,
  "Windows Mixed Reality (Left)": $t
};
const Fi = Ie(0.155, -0.465, -0.15), Sn = Ie(-0.155, -0.465, -0.15), Rn = Ie(0, 0, -0.25), _n = Ie(0, 0, 0.05), Ci = Ie(-0.08, 0.14, 0.08), Pi = 0.4, Mn = 0.4, Tn = 0.61, Fn = 0.175, Cn = 0.12, Pn = 0.87, Di = 180 / Math.PI;
function Dn(i, e, t) {
  function a(m, v, y) {
    return m < v ? v : m > y ? y : m;
  }
  var o = e[0] * e[0], h = e[1] * e[1], d = e[2] * e[2], u = e[3] * e[3];
  if (t === "XYZ")
    i[0] = Math.atan2(2 * (e[0] * e[3] - e[1] * e[2]), u - o - h + d), i[1] = Math.asin(a(2 * (e[0] * e[2] + e[1] * e[3]), -1, 1)), i[2] = Math.atan2(2 * (e[2] * e[3] - e[0] * e[1]), u + o - h - d);
  else if (t === "YXZ")
    i[0] = Math.asin(a(2 * (e[0] * e[3] - e[1] * e[2]), -1, 1)), i[1] = Math.atan2(2 * (e[0] * e[2] + e[1] * e[3]), u - o - h + d), i[2] = Math.atan2(2 * (e[0] * e[1] + e[2] * e[3]), u - o + h - d);
  else if (t === "ZXY")
    i[0] = Math.asin(a(2 * (e[0] * e[3] + e[1] * e[2]), -1, 1)), i[1] = Math.atan2(2 * (e[1] * e[3] - e[2] * e[0]), u - o - h + d), i[2] = Math.atan2(2 * (e[2] * e[3] - e[0] * e[1]), u - o + h - d);
  else if (t === "ZYX")
    i[0] = Math.atan2(2 * (e[0] * e[3] + e[2] * e[1]), u - o - h + d), i[1] = Math.asin(a(2 * (e[1] * e[3] - e[0] * e[2]), -1, 1)), i[2] = Math.atan2(2 * (e[0] * e[1] + e[2] * e[3]), u + o - h - d);
  else if (t === "YZX")
    i[0] = Math.atan2(2 * (e[0] * e[3] - e[2] * e[1]), u - o + h - d), i[1] = Math.atan2(2 * (e[1] * e[3] - e[0] * e[2]), u + o - h - d), i[2] = Math.asin(a(2 * (e[0] * e[1] + e[2] * e[3]), -1, 1));
  else if (t === "XZY")
    i[0] = Math.atan2(2 * (e[0] * e[3] + e[1] * e[2]), u - o + h - d), i[1] = Math.atan2(2 * (e[0] * e[2] + e[1] * e[3]), u + o - h - d), i[2] = Math.asin(a(2 * (e[2] * e[3] - e[0] * e[1]), -1, 1));
  else {
    console.log("No order given for quaternion to euler conversion.");
    return;
  }
}
class In {
  constructor() {
    this.hand = "right", this.headElbowOffset = Fi, this.controllerQ = De(), this.lastControllerQ = De(), this.headQ = De(), this.headPos = ke(), this.elbowPos = ke(), this.wristPos = ke(), this.time = null, this.lastTime = null, this.rootQ = De(), this.position = ke();
  }
  setHandedness(e) {
    this.hand != e && (this.hand = e, this.hand == "left" ? this.headElbowOffset = Sn : this.headElbowOffset = Fi);
  }
  /**
   * Called on a RAF.
   */
  update(e, t) {
    this.time = ji(), e && (Wt(this.lastControllerQ, this.controllerQ), Wt(this.controllerQ, e)), t && (Ui(this.headPos, t), zi(this.headQ, t));
    let a = this.getHeadYawOrientation_(), o = this.quatAngle_(this.lastControllerQ, this.controllerQ), h = (this.time - this.lastTime) / 1e3;
    o / h > Tn ? gt(
      this.rootQ,
      this.rootQ,
      a,
      Math.min(o / Fn, 1)
    ) : Wt(this.rootQ, a);
    let u = Ie(0, 0, -1);
    Je(u, u, this.controllerQ);
    let m = oi(u, [0, 1, 0]), v = this.clamp_(
      (m - Cn) / Pn,
      0,
      1
    ), y = gi(this.rootQ);
    bi(y, y), yi(y, y, this.controllerQ);
    let R = this.elbowPos;
    vi(R, this.headPos), wt(R, R, this.headElbowOffset);
    let x = mi(Ci);
    wi(x, x, v), wt(R, R, x);
    let F = this.quatAngle_(y, De()) * Di, C = 1 - Math.pow(F / 180, 4);
    sssss;
    let B = Pi, N = 1 - Pi, Q = C * (B + N * v * Mn), P = De();
    gt(P, P, y, Q);
    let I = bi(De(), P), G = gi(y);
    yi(G, G, I);
    let O = this.wristPos;
    vi(O, _n), Je(O, O, P), wt(O, O, Rn), Je(O, O, G), wt(O, O, R);
    let W = mi(Ci);
    wi(W, W, v), wt(this.position, this.wristPos, W), Je(this.position, this.position, this.rootQ), this.lastTime = this.time;
  }
  /**
   * Returns the position calculated by the model.
   */
  getPosition() {
    return this.position;
  }
  getHeadYawOrientation_() {
    let e = ke();
    return Dn(e, this.headQ, "YXZ"), Jr(De(), 0, e[1] * Di, 0);
  }
  clamp_(e, t, a) {
    return Math.min(Math.max(e, t), a);
  }
  quatAngle_(e, t) {
    let a = [0, 0, -1], o = [0, 0, -1];
    return Je(a, a, e), Je(o, o, t), Qr(a, o);
  }
}
const be = Symbol("@@webxr-polyfill/XRRemappedGamepad"), nr = { pressed: !1, touched: !1, value: 0 };
Object.freeze(nr);
class Bn {
  constructor(e, t, a) {
    if (a || (a = {}), a.userAgentOverrides) {
      for (let v in a.userAgentOverrides)
        if (navigator.userAgent.includes(v)) {
          let y = a.userAgentOverrides[v];
          for (let R in y)
            R in a ? Object.assign(a[R], y[R]) : a[R] = y[R];
          break;
        }
    }
    let o = new Array(a.axes && a.axes.length ? a.axes.length : e.axes.length), h = new Array(a.buttons && a.buttons.length ? a.buttons.length : e.buttons.length), d = null;
    if (a.gripTransform) {
      let v = a.gripTransform.orientation || [0, 0, 0, 1];
      d = qe(), xt(
        d,
        It(v, v),
        a.gripTransform.position || [0, 0, 0]
      );
    }
    let u = null;
    if (a.targetRayTransform) {
      let v = a.targetRayTransform.orientation || [0, 0, 0, 1];
      u = qe(), xt(
        u,
        It(v, v),
        a.targetRayTransform.position || [0, 0, 0]
      );
    }
    let m = a.profiles;
    a.displayProfiles && t.displayName in a.displayProfiles && (m = a.displayProfiles[t.displayName]), this[be] = {
      gamepad: e,
      map: a,
      profiles: m || [e.id],
      mapping: a.mapping || e.mapping,
      axes: o,
      buttons: h,
      gripTransform: d,
      targetRayTransform: u
    }, this._update();
  }
  _update() {
    let e = this[be].gamepad, t = this[be].map, a = this[be].axes;
    for (let h = 0; h < a.length; ++h)
      t.axes && h in t.axes ? t.axes[h] === null ? a[h] = 0 : a[h] = e.axes[t.axes[h]] : a[h] = e.axes[h];
    if (t.axes && t.axes.invert)
      for (let h of t.axes.invert)
        h < a.length && (a[h] *= -1);
    let o = this[be].buttons;
    for (let h = 0; h < o.length; ++h)
      t.buttons && h in t.buttons ? t.buttons[h] === null ? o[h] = nr : o[h] = e.buttons[t.buttons[h]] : o[h] = e.buttons[h];
  }
  get id() {
    return "";
  }
  get _profiles() {
    return this[be].profiles;
  }
  get index() {
    return -1;
  }
  get connected() {
    return this[be].gamepad.connected;
  }
  get timestamp() {
    return this[be].gamepad.timestamp;
  }
  get mapping() {
    return this[be].mapping;
  }
  get axes() {
    return this[be].axes;
  }
  get buttons() {
    return this[be].buttons;
  }
  // Non-standard extension
  get hapticActuators() {
    return this[be].gamepad.hapticActuators;
  }
}
class Ln {
  constructor(e, t, a = 0, o = -1) {
    this.polyfill = e, this.display = t, this.nativeGamepad = null, this.gamepad = null, this.inputSource = new er(this), this.lastPosition = ke(), this.emulatedPosition = !1, this.basePoseMatrix = qe(), this.outputMatrix = qe(), this.primaryButtonIndex = a, this.primaryActionPressed = !1, this.primarySqueezeButtonIndex = o, this.primarySqueezeActionPressed = !1, this.handedness = "", this.targetRayMode = "gaze", this.armModel = null;
  }
  get profiles() {
    return this.gamepad ? this.gamepad._profiles : [];
  }
  updateFromGamepad(e) {
    this.nativeGamepad !== e && (this.nativeGamepad = e, e ? this.gamepad = new Bn(e, this.display, xn[e.id]) : this.gamepad = null), this.handedness = e.hand === "" ? "none" : e.hand, this.gamepad && this.gamepad._update(), e.pose ? (this.targetRayMode = "tracked-pointer", this.emulatedPosition = !e.pose.hasPosition) : e.hand === "" && (this.targetRayMode = "gaze", this.emulatedPosition = !1);
  }
  updateBasePoseMatrix() {
    if (this.nativeGamepad && this.nativeGamepad.pose) {
      let e = this.nativeGamepad.pose, t = e.position, a = e.orientation;
      if (!t && !a)
        return;
      t ? (this.lastPosition[0] = t[0], this.lastPosition[1] = t[1], this.lastPosition[2] = t[2]) : e.hasPosition ? t = this.lastPosition : (this.armModel || (this.armModel = new In()), this.armModel.setHandedness(this.nativeGamepad.hand), this.armModel.update(a, this.polyfill.getBasePoseMatrix()), t = this.armModel.getPosition()), xt(this.basePoseMatrix, a, t);
    } else
      Ur(this.basePoseMatrix, this.polyfill.getBasePoseMatrix());
    return this.basePoseMatrix;
  }
  /**
   * @param {XRReferenceSpace} coordinateSystem
   * @param {string} poseType
   * @return {XRPose?}
   */
  getXRPose(e, t) {
    switch (this.updateBasePoseMatrix(), t) {
      case "target-ray":
        e._transformBasePoseMatrix(this.outputMatrix, this.basePoseMatrix), this.gamepad && this.gamepad[be].targetRayTransform && it(this.outputMatrix, this.outputMatrix, this.gamepad[be].targetRayTransform);
        break;
      case "grip":
        if (!this.nativeGamepad || !this.nativeGamepad.pose)
          return null;
        e._transformBasePoseMatrix(this.outputMatrix, this.basePoseMatrix), this.gamepad && this.gamepad[be].gripTransform && it(this.outputMatrix, this.outputMatrix, this.gamepad[be].gripTransform);
        break;
      default:
        return null;
    }
    return e._adjustForOriginOffset(this.outputMatrix), new XRPose(new XRRigidTransform(this.outputMatrix), this.emulatedPosition);
  }
}
const On = !1, Ii = {
  // Non-standard attribute to enable running at the native device refresh rate
  // on the Oculus Go.
  highRefreshRate: !0
}, Bi = {
  oculus: 1,
  openvr: 1,
  "spatial controller (spatial interaction source)": 1
};
let Nn = 0, kn = class {
  constructor(e, t, a = {}) {
    if (this.mode = e, this.enabledFeatures = t, this.outputContext = null, this.immersive = e == "immersive-vr" || e == "immersive-ar", this.ended = null, this.baseLayer = null, this.id = ++Nn, this.modifiedCanvasLayer = !1, this.outputContext && !On) {
      const o = a.renderContextType || "2d";
      this.renderContext = this.outputContext.canvas.getContext(o);
    }
  }
};
class sr extends hi {
  /**
   * Takes a VRDisplay instance and a VRFrameData
   * constructor from the WebVR 1.1 spec.
   *
   * @param {VRDisplay} display
   * @param {VRFrameData} VRFrameData
   */
  constructor(e, t) {
    const { canPresent: a } = t.capabilities;
    super(e), this.display = t, this.frame = new e.VRFrameData(), this.sessions = /* @__PURE__ */ new Map(), this.immersiveSession = null, this.canPresent = a, this.baseModelMatrix = qe(), this.gamepadInputSources = {}, this.tempVec3 = new Float32Array(3), this.onVRDisplayPresentChange = this.onVRDisplayPresentChange.bind(this), e.window.addEventListener("vrdisplaypresentchange", this.onVRDisplayPresentChange), this.CAN_USE_GAMEPAD = e.navigator && "getGamepads" in e.navigator, this.HAS_BITMAP_SUPPORT = dn(e);
  }
  /**
   * @return {number}
   */
  get depthNear() {
    return this.display.depthNear;
  }
  /**
   * @param {number}
   */
  set depthNear(e) {
    this.display.depthNear = e;
  }
  /**
   * @return {number}
   */
  get depthFar() {
    return this.display.depthFar;
  }
  /**
   * @param {number}
   */
  set depthFar(e) {
    this.display.depthFar = e;
  }
  /**
   * Called when a XRSession has a `baseLayer` property set.
   *
   * @param {number} sessionId
   * @param {XRWebGLLayer} layer
   */
  onBaseLayerSet(e, t) {
    const a = this.sessions.get(e), o = t.context.canvas;
    if (a.immersive) {
      const h = this.display.getEyeParameters("left"), d = this.display.getEyeParameters("right");
      o.width = Math.max(h.renderWidth, d.renderWidth) * 2, o.height = Math.max(h.renderHeight, d.renderHeight), this.display.requestPresent([{
        source: o,
        attributes: Ii
      }]).then(() => {
        this.global.document.body.contains(o) || (a.modifiedCanvasLayer = !0, this.global.document.body.appendChild(o), un(o)), a.baseLayer = t;
      });
    } else
      a.baseLayer = t;
  }
  /**
   * If a 1.1 VRDisplay cannot present, it could be a 6DOF device
   * that doesn't have its own way to present, but used in magic
   * window mode. So in WebXR lingo, this cannot support an
   * "immersive" session.
   *
   * @param {XRSessionMode} mode
   * @return {boolean}
   */
  isSessionSupported(e) {
    return !(e == "immersive-ar" || e == "immersive-vr" && this.canPresent === !1);
  }
  /**
   * @param {string} featureDescriptor
   * @return {boolean}
   */
  isFeatureSupported(e) {
    switch (e) {
      case "viewer":
        return !0;
      case "local":
        return !0;
      case "local-floor":
        return !0;
      case "bounded":
        return !1;
      case "unbounded":
        return !1;
      default:
        return !1;
    }
  }
  /**
   * Returns a promise of a session ID if creating a session is successful.
   * Usually used to set up presentation in the device.
   * We can't start presenting in a 1.1 device until we have a canvas
   * layer, so use a dummy layer until `onBaseLayerSet` is called.
   * May reject if session is not supported, or if an error is thrown
   * when calling `requestPresent`.
   *
   * @param {XRSessionMode} mode
   * @param {Set<string>} enabledFeatures
   * @return {Promise<number>}
   */
  async requestSession(e, t) {
    if (!this.isSessionSupported(e))
      return Promise.reject();
    let a = e == "immersive-vr";
    if (a) {
      const h = this.global.document.createElement("canvas");
      h.getContext("webgl"), await this.display.requestPresent([{
        source: h,
        attributes: Ii
      }]);
    }
    const o = new kn(e, t, {
      renderContextType: this.HAS_BITMAP_SUPPORT ? "bitmaprenderer" : "2d"
    });
    return this.sessions.set(o.id, o), a && (this.immersiveSession = o, this.dispatchEvent("@@webxr-polyfill/vr-present-start", o.id)), Promise.resolve(o.id);
  }
  /**
   * @return {Function}
   */
  requestAnimationFrame(e) {
    return this.display.requestAnimationFrame(e);
  }
  getPrimaryButtonIndex(e) {
    let t = 0, a = e.id.toLowerCase();
    for (let o in Bi)
      if (a.includes(o)) {
        t = Bi[o];
        break;
      }
    return Math.min(t, e.buttons.length - 1);
  }
  onFrameStart(e, t) {
    this.display.depthNear = t.depthNear, this.display.depthFar = t.depthFar, this.display.getFrameData(this.frame);
    const a = this.sessions.get(e);
    if (a.immersive && this.CAN_USE_GAMEPAD) {
      let o = this.gamepadInputSources;
      this.gamepadInputSources = {};
      let h = this.global.navigator.getGamepads();
      for (let d = 0; d < h.length; ++d) {
        let u = h[d];
        if (u && u.displayId > 0) {
          let m = o[d];
          if (m || (m = new Ln(this, this.display, this.getPrimaryButtonIndex(u))), m.updateFromGamepad(u), this.gamepadInputSources[d] = m, m.primaryButtonIndex != -1) {
            let v = u.buttons[m.primaryButtonIndex].pressed;
            v && !m.primaryActionPressed ? this.dispatchEvent("@@webxr-polyfill/input-select-start", { sessionId: a.id, inputSource: m.inputSource }) : !v && m.primaryActionPressed && this.dispatchEvent("@@webxr-polyfill/input-select-end", { sessionId: a.id, inputSource: m.inputSource }), m.primaryActionPressed = v;
          }
          if (m.primarySqueezeButtonIndex != -1) {
            let v = u.buttons[m.primarySqueezeButtonIndex].pressed;
            v && !m.primarySqueezeActionPressed ? this.dispatchEvent("@@webxr-polyfill/input-squeeze-start", { sessionId: a.id, inputSource: m.inputSource }) : !v && m.primarySqueezeActionPressed && this.dispatchEvent("@@webxr-polyfill/input-squeeze-end", { sessionId: a.id, inputSource: m.inputSource }), m.primarySqueezeActionPressed = v;
          }
        }
      }
    }
    if (!a.immersive && a.baseLayer) {
      const o = a.baseLayer.context.canvas;
      Qi(
        this.frame.leftProjectionMatrix,
        t.inlineVerticalFieldOfView,
        o.width / o.height,
        t.depthNear,
        t.depthFar
      );
    }
  }
  onFrameEnd(e) {
    const t = this.sessions.get(e);
    if (!(t.ended || !t.baseLayer)) {
      if (t.outputContext && !(t.immersive && !this.display.capabilities.hasExternalDisplay)) {
        const a = t.immersive && this.display.capabilities.hasExternalDisplay, o = t.baseLayer.context.canvas, h = a ? o.width / 2 : o.width, d = o.height;
        {
          const u = t.outputContext.canvas, m = u.width, v = u.height, y = t.renderContext;
          this.HAS_BITMAP_SUPPORT ? o.transferToImageBitmap ? y.transferFromImageBitmap(o.transferToImageBitmap()) : this.global.createImageBitmap(o, 0, 0, h, d, {
            resizeWidth: m,
            resizeHeight: v
          }).then((R) => y.transferFromImageBitmap(R)) : y.drawImage(
            o,
            0,
            0,
            h,
            d,
            0,
            0,
            m,
            v
          );
        }
      }
      t.immersive && t.baseLayer && this.display.submitFrame();
    }
  }
  /**
   * @param {number} handle
   */
  cancelAnimationFrame(e) {
    this.display.cancelAnimationFrame(e);
  }
  /**
   * @TODO Spec
   */
  async endSession(e) {
    const t = this.sessions.get(e);
    if (!t.ended) {
      if (t.immersive)
        return this.display.exitPresent();
      t.ended = !0;
    }
  }
  /**
   * @param {number} sessionId
   * @param {XRReferenceSpaceType} type
   * @return {boolean}
   */
  doesSessionSupportReferenceSpace(e, t) {
    const a = this.sessions.get(e);
    return a.ended ? !1 : a.enabledFeatures.has(t);
  }
  /**
   * If the VRDisplay has stage parameters, convert them
   * to an array of X, Z pairings.
   *
   * @return {Object?}
   */
  requestStageBounds() {
    if (this.display.stageParameters) {
      const e = this.display.stageParameters.sizeX, t = this.display.stageParameters.sizeZ, a = [];
      return a.push(-e / 2), a.push(-t / 2), a.push(e / 2), a.push(-t / 2), a.push(e / 2), a.push(t / 2), a.push(-e / 2), a.push(t / 2), a;
    }
    return null;
  }
  /**
   * Returns a promise resolving to a transform if XRDevice
   * can support frame of reference and provides its own values.
   * Can resolve to `undefined` if the polyfilled API can provide
   * a default. Rejects if this XRDevice cannot
   * support the frame of reference.
   *
   * @param {XRFrameOfReferenceType} type
   * @param {XRFrameOfReferenceOptions} options
   * @return {Promise<float32rray>}
   */
  async requestFrameOfReferenceTransform(e, t) {
    return (e === "local-floor" || e === "bounded-floor") && this.display.stageParameters && this.display.stageParameters.sittingToStandingTransform ? this.display.stageParameters.sittingToStandingTransform : null;
  }
  /**
   * @param {XREye} eye
   * @return {Float32Array}
   */
  getProjectionMatrix(e) {
    if (e === "left")
      return this.frame.leftProjectionMatrix;
    if (e === "right")
      return this.frame.rightProjectionMatrix;
    if (e === "none")
      return this.frame.leftProjectionMatrix;
    throw new Error("eye must be of type 'left' or 'right'");
  }
  /**
   * Takes a XREye and a target to apply properties of
   * `x`, `y`, `width` and `height` on. Returns a boolean
   * indicating if it successfully was able to populate
   * target's values.
   *
   * @param {number} sessionId
   * @param {XREye} eye
   * @param {XRWebGLLayer} layer
   * @param {Object?} target
   * @return {boolean}
   */
  getViewport(e, t, a, o) {
    const h = this.sessions.get(e), { width: d, height: u } = a.context.canvas;
    if (!h.immersive)
      return o.x = o.y = 0, o.width = d, o.height = u, !0;
    if (t === "left" || t === "none")
      o.x = 0;
    else if (t === "right")
      o.x = d / 2;
    else
      return !1;
    return o.y = 0, o.width = d / 2, o.height = u, !0;
  }
  /**
   * Get model matrix unaffected by frame of reference.
   *
   * @return {Float32Array}
   */
  getBasePoseMatrix() {
    let { position: e, orientation: t } = this.frame.pose;
    return !e && !t ? this.baseModelMatrix : (e || (e = this.tempVec3, e[0] = e[1] = e[2] = 0), xt(this.baseModelMatrix, t, e), this.baseModelMatrix);
  }
  /**
   * Get view matrix unaffected by frame of reference.
   *
   * @param {XREye} eye
   * @return {Float32Array}
   */
  getBaseViewMatrix(e) {
    if (e === "left" || e === "none")
      return this.frame.leftViewMatrix;
    if (e === "right")
      return this.frame.rightViewMatrix;
    throw new Error("eye must be of type 'left' or 'right'");
  }
  getInputSources() {
    let e = [];
    for (let t in this.gamepadInputSources)
      e.push(this.gamepadInputSources[t].inputSource);
    return e;
  }
  getInputPose(e, t, a) {
    if (!t)
      return null;
    for (let o in this.gamepadInputSources) {
      let h = this.gamepadInputSources[o];
      if (h.inputSource === e)
        return h.getXRPose(t, a);
    }
    return null;
  }
  /**
   * Triggered on window resize.
   *
   */
  onWindowResize() {
  }
  /**
   * Listens to the Native 1.1 `window.addEventListener('vrdisplaypresentchange')`
   * event.
   *
   * @param {Event} event
   */
  onVRDisplayPresentChange(e) {
    this.display.isPresenting || this.sessions.forEach((t) => {
      if (t.immersive && !t.ended) {
        if (t.modifiedCanvasLayer) {
          const a = t.baseLayer.context.canvas;
          document.body.removeChild(a), a.setAttribute("style", "");
        }
        this.immersiveSession === t && (this.immersiveSession = null), this.dispatchEvent("@@webxr-polyfill/vr-present-end", t.id);
      }
    });
  }
}
class Gn extends sr {
  /**
   * Takes a VRDisplay instance and a VRFrameData
   * constructor from the WebVR 1.1 spec.
   *
   * @param {VRDisplay} display
   * @param {Object?} cardboardConfig
   */
  constructor(e, t) {
    const a = new mn(t || {});
    super(e, a), this.display = a, this.frame = {
      rightViewMatrix: new Float32Array(16),
      leftViewMatrix: new Float32Array(16),
      rightProjectionMatrix: new Float32Array(16),
      leftProjectionMatrix: new Float32Array(16),
      pose: null,
      timestamp: null
    };
  }
}
let Vn = 0, Un = class {
  constructor(e, t) {
    this.mode = e, this.enabledFeatures = t, this.ended = null, this.baseLayer = null, this.id = ++Vn;
  }
};
class zn extends hi {
  /**
   * Constructs an inline-only XRDevice
   */
  constructor(e) {
    super(e), this.sessions = /* @__PURE__ */ new Map(), this.projectionMatrix = qe(), this.identityMatrix = qe();
  }
  /**
   * Called when a XRSession has a `baseLayer` property set.
   *
   * @param {number} sessionId
   * @param {XRWebGLLayer} layer
   */
  onBaseLayerSet(e, t) {
    const a = this.sessions.get(e);
    a.baseLayer = t;
  }
  /**
   * Returns true if the requested mode is inline
   *
   * @param {XRSessionMode} mode
   * @return {boolean}
   */
  isSessionSupported(e) {
    return e == "inline";
  }
  /**
   * @param {string} featureDescriptor
   * @return {boolean}
   */
  isFeatureSupported(e) {
    switch (e) {
      case "viewer":
        return !0;
      default:
        return !1;
    }
  }
  /**
   * Returns a promise of a session ID if creating a session is successful.
   *
   * @param {XRSessionMode} mode
   * @param {Set<string>} enabledFeatures
   * @return {Promise<number>}
   */
  async requestSession(e, t) {
    if (!this.isSessionSupported(e))
      return Promise.reject();
    const a = new Un(e, t);
    return this.sessions.set(a.id, a), Promise.resolve(a.id);
  }
  /**
   * @return {Function}
   */
  requestAnimationFrame(e) {
    return window.requestAnimationFrame(e);
  }
  /**
   * @param {number} handle
   */
  cancelAnimationFrame(e) {
    window.cancelAnimationFrame(e);
  }
  onFrameStart(e, t) {
    const a = this.sessions.get(e);
    if (a.baseLayer) {
      const o = a.baseLayer.context.canvas;
      Qi(
        this.projectionMatrix,
        t.inlineVerticalFieldOfView,
        o.width / o.height,
        t.depthNear,
        t.depthFar
      );
    }
  }
  onFrameEnd(e) {
  }
  /**
   * @TODO Spec
   */
  async endSession(e) {
    const t = this.sessions.get(e);
    t.ended = !0;
  }
  /**
   * @param {number} sessionId
   * @param {XRReferenceSpaceType} type
   * @return {boolean}
   */
  doesSessionSupportReferenceSpace(e, t) {
    const a = this.sessions.get(e);
    return a.ended ? !1 : a.enabledFeatures.has(t);
  }
  /**
   * Inline sessions don't have stage bounds
   *
   * @return {Object?}
   */
  requestStageBounds() {
    return null;
  }
  /**
   * Inline sessions don't have multiple frames of reference
   *
   * @param {XRFrameOfReferenceType} type
   * @param {XRFrameOfReferenceOptions} options
   * @return {Promise<Float32Array>}
   */
  async requestFrameOfReferenceTransform(e, t) {
    return null;
  }
  /**
   * @param {XREye} eye
   * @return {Float32Array}
   */
  getProjectionMatrix(e) {
    return this.projectionMatrix;
  }
  /**
   * Takes a XREye and a target to apply properties of
   * `x`, `y`, `width` and `height` on. Returns a boolean
   * indicating if it successfully was able to populate
   * target's values.
   *
   * @param {number} sessionId
   * @param {XREye} eye
   * @param {XRWebGLLayer} layer
   * @param {Object?} target
   * @return {boolean}
   */
  getViewport(e, t, a, o) {
    this.sessions.get(e);
    const { width: h, height: d } = a.context.canvas;
    return o.x = o.y = 0, o.width = h, o.height = d, !0;
  }
  /**
   * Get model matrix unaffected by frame of reference.
   *
   * @return {Float32Array}
   */
  getBasePoseMatrix() {
    return this.identityMatrix;
  }
  /**
   * Get view matrix unaffected by frame of reference.
   *
   * @param {XREye} eye
   * @return {Float32Array}
   */
  getBaseViewMatrix(e) {
    return this.identityMatrix;
  }
  /**
   * No persistent input sources for the inline session
   */
  getInputSources() {
    return [];
  }
  getInputPose(e, t, a) {
    return null;
  }
  /**
   * Triggered on window resize.
   */
  onWindowResize() {
  }
}
const Qn = async function(i) {
  let e = null;
  if ("getVRDisplays" in i.navigator)
    try {
      const t = await i.navigator.getVRDisplays();
      t && t.length && (e = new sr(i, t[0]));
    } catch {
    }
  return e;
}, Xn = async function(i, e) {
  if (e.webvr) {
    let a = await Qn(i);
    if (a)
      return a;
  }
  let t = An(i);
  return t && e.cardboard || !t && e.allowCardboardOnDesktop ? (i.VRFrameData || (i.VRFrameData = function() {
    this.rightViewMatrix = new Float32Array(16), this.leftViewMatrix = new Float32Array(16), this.rightProjectionMatrix = new Float32Array(16), this.leftProjectionMatrix = new Float32Array(16), this.pose = null;
  }), new Gn(i, e.cardboardConfig)) : new zn(i);
}, Wn = {
  // The default global to use for needed APIs.
  global: Yi,
  // Whether support for a browser implementing WebVR 1.1 is enabled.
  // If enabled, XR support is powered by native WebVR 1.1 VRDisplays,
  // exposed as XRDevices.
  webvr: !0,
  // Whether a CardboardXRDevice should be discoverable if on
  // a mobile device, and no other native (1.1 VRDisplay if `webvr` on,
  // or XRDevice) found.
  cardboard: !0,
  // The configuration to be used for CardboardVRDisplay when used.
  // Has no effect if `cardboard: false` or another XRDevice is used.
  // Configuration can be found: https://github.com/immersive-web/cardboard-vr-display/blob/master/src/options.js
  cardboardConfig: null,
  // Whether a CardboardXRDevice should be created if no WebXR API found
  // on desktop or not. Stereoscopic rendering with a gyro often does not make sense on desktop, and probably only useful for debugging.
  allowCardboardOnDesktop: !1
}, Ct = ["navigator", "HTMLCanvasElement", "WebGLRenderingContext"];
class Hn {
  /**
   * @param {object?} config
   */
  constructor(e = {}) {
    this.config = Object.freeze(Object.assign({}, Wn, e)), this.global = this.config.global, this.nativeWebXR = "xr" in this.global.navigator, this.injected = !1, this._injectPolyfill(this.global);
  }
  _injectPolyfill(e) {
    if (!Ct.every((t) => !!e[t]))
      throw new Error(`Global must have the following attributes : ${Ct}`);
    for (const t of Object.keys(Et))
      e[t] !== void 0 ? console.warn(`${t} already defined on global.`) : e[t] = Et[t];
    _i(e.WebGLRenderingContext), Mi(e.HTMLCanvasElement), e.OffscreenCanvas && Mi(e.OffscreenCanvas), e.WebGL2RenderingContext && _i(e.WebGL2RenderingContext), window.isSecureContext || console.warn(`WebXR Polyfill Warning:
This page is not running in a secure context (https:// or localhost)!
This means that although the page may be able to use the WebXR Polyfill it will
not be able to use native WebXR implementations, and as such will not be able to
access dedicated VR or AR hardware, and will not be able to take advantage of
any performance improvements a native WebXR implementation may offer. Please
host this content on a secure origin for the best user experience.
`), this.injected = !0, this._patchNavigatorXR();
  }
  _patchNavigatorXR() {
    let e = Xn(this.global, this.config);
    this.xr = new Et.XRSystem(e), Object.defineProperty(this.global.navigator, "xr", {
      value: this.xr,
      configurable: !0
    });
  }
  _injectCompatibilityShims(e) {
    if (!Ct.every((t) => !!e[t]))
      throw new Error(`Global must have the following attributes : ${Ct}`);
    if (e.navigator.xr && "supportsSession" in e.navigator.xr && !("isSessionSupported" in e.navigator.xr)) {
      let t = e.navigator.xr.supportsSession;
      e.navigator.xr.isSessionSupported = function(a) {
        return t.call(this, a).then(() => !0).catch(() => !1);
      }, e.navigator.xr.supportsSession = function(a) {
        return console.warn("navigator.xr.supportsSession() is deprecated. Please call navigator.xr.isSessionSupported() instead and check the boolean value returned when the promise resolves."), t.call(this, a);
      };
    }
  }
}
var Yn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function jn(i, e) {
  return e = { exports: {} }, i(e, e.exports), e.exports;
}
var ar = jn(function(i) {
  (function(e, t) {
    var a = Math.pow(2, -24), o = Math.pow(2, 32), h = Math.pow(2, 53);
    function d(v) {
      var y = new ArrayBuffer(256), R = new DataView(y), x, _ = 0;
      function F(D) {
        for (var V = y.byteLength, L = _ + D; V < L; )
          V *= 2;
        if (V !== y.byteLength) {
          var M = R;
          y = new ArrayBuffer(V), R = new DataView(y);
          for (var J = _ + 3 >> 2, H = 0; H < J; ++H)
            R.setUint32(H * 4, M.getUint32(H * 4));
        }
        return x = D, R;
      }
      function C() {
        _ += x;
      }
      function B(D) {
        C(F(8).setFloat64(_, D));
      }
      function N(D) {
        C(F(1).setUint8(_, D));
      }
      function Q(D) {
        for (var V = F(D.length), L = 0; L < D.length; ++L)
          V.setUint8(_ + L, D[L]);
        C();
      }
      function P(D) {
        C(F(2).setUint16(_, D));
      }
      function I(D) {
        C(F(4).setUint32(_, D));
      }
      function G(D) {
        var V = D % o, L = (D - V) / o, M = F(8);
        M.setUint32(_, L), M.setUint32(_ + 4, V), C();
      }
      function O(D, V) {
        V < 24 ? N(D << 5 | V) : V < 256 ? (N(D << 5 | 24), N(V)) : V < 65536 ? (N(D << 5 | 25), P(V)) : V < 4294967296 ? (N(D << 5 | 26), I(V)) : (N(D << 5 | 27), G(V));
      }
      function W(D) {
        var V;
        if (D === !1)
          return N(244);
        if (D === !0)
          return N(245);
        if (D === null)
          return N(246);
        if (D === t)
          return N(247);
        switch (typeof D) {
          case "number":
            if (Math.floor(D) === D) {
              if (0 <= D && D <= h)
                return O(0, D);
              if (-h <= D && D < 0)
                return O(1, -(D + 1));
            }
            return N(251), B(D);
          case "string":
            var L = [];
            for (V = 0; V < D.length; ++V) {
              var M = D.charCodeAt(V);
              M < 128 ? L.push(M) : M < 2048 ? (L.push(192 | M >> 6), L.push(128 | M & 63)) : M < 55296 ? (L.push(224 | M >> 12), L.push(128 | M >> 6 & 63), L.push(128 | M & 63)) : (M = (M & 1023) << 10, M |= D.charCodeAt(++V) & 1023, M += 65536, L.push(240 | M >> 18), L.push(128 | M >> 12 & 63), L.push(128 | M >> 6 & 63), L.push(128 | M & 63));
            }
            return O(3, L.length), Q(L);
          default:
            var J;
            if (Array.isArray(D))
              for (J = D.length, O(4, J), V = 0; V < J; ++V)
                W(D[V]);
            else if (D instanceof Uint8Array)
              O(2, D.length), Q(D);
            else {
              var H = Object.keys(D);
              for (J = H.length, O(5, J), V = 0; V < J; ++V) {
                var $ = H[V];
                W($), W(D[$]);
              }
            }
        }
      }
      if (W(v), "slice" in y)
        return y.slice(0, _);
      for (var z = new ArrayBuffer(_), Z = new DataView(z), K = 0; K < _; ++K)
        Z.setUint8(K, R.getUint8(K));
      return z;
    }
    function u(v, y, R) {
      var x = new DataView(v), _ = 0;
      typeof y != "function" && (y = function(L) {
        return L;
      }), typeof R != "function" && (R = function() {
        return t;
      });
      function F(L, M) {
        return _ += M, L;
      }
      function C(L) {
        return F(new Uint8Array(v, _, L), L);
      }
      function B() {
        var L = new ArrayBuffer(4), M = new DataView(L), J = I(), H = J & 32768, $ = J & 31744, Ee = J & 1023;
        if ($ === 31744)
          $ = 261120;
        else if ($ !== 0)
          $ += 127 - 15 << 10;
        else if (Ee !== 0)
          return Ee * a;
        return M.setUint32(0, H << 16 | $ << 13 | Ee << 13), M.getFloat32(0);
      }
      function N() {
        return F(x.getFloat32(_), 4);
      }
      function Q() {
        return F(x.getFloat64(_), 8);
      }
      function P() {
        return F(x.getUint8(_), 1);
      }
      function I() {
        return F(x.getUint16(_), 2);
      }
      function G() {
        return F(x.getUint32(_), 4);
      }
      function O() {
        return G() * o + G();
      }
      function W() {
        return x.getUint8(_) !== 255 ? !1 : (_ += 1, !0);
      }
      function z(L) {
        if (L < 24)
          return L;
        if (L === 24)
          return P();
        if (L === 25)
          return I();
        if (L === 26)
          return G();
        if (L === 27)
          return O();
        if (L === 31)
          return -1;
        throw "Invalid length encoding";
      }
      function Z(L) {
        var M = P();
        if (M === 255)
          return -1;
        var J = z(M & 31);
        if (J < 0 || M >> 5 !== L)
          throw "Invalid indefinite length element";
        return J;
      }
      function K(L, M) {
        for (var J = 0; J < M; ++J) {
          var H = P();
          H & 128 && (H < 224 ? (H = (H & 31) << 6 | P() & 63, M -= 1) : H < 240 ? (H = (H & 15) << 12 | (P() & 63) << 6 | P() & 63, M -= 2) : (H = (H & 15) << 18 | (P() & 63) << 12 | (P() & 63) << 6 | P() & 63, M -= 3)), H < 65536 ? L.push(H) : (H -= 65536, L.push(55296 | H >> 10), L.push(56320 | H & 1023));
        }
      }
      function D() {
        var L = P(), M = L >> 5, J = L & 31, H, $;
        if (M === 7)
          switch (J) {
            case 25:
              return B();
            case 26:
              return N();
            case 27:
              return Q();
          }
        if ($ = z(J), $ < 0 && (M < 2 || 6 < M))
          throw "Invalid length";
        switch (M) {
          case 0:
            return $;
          case 1:
            return -1 - $;
          case 2:
            if ($ < 0) {
              for (var Ee = [], Te = 0; ($ = Z(M)) >= 0; )
                Te += $, Ee.push(C($));
              var $e = new Uint8Array(Te), Be = 0;
              for (H = 0; H < Ee.length; ++H)
                $e.set(Ee[H], Be), Be += Ee[H].length;
              return $e;
            }
            return C($);
          case 3:
            var Xe = [];
            if ($ < 0)
              for (; ($ = Z(M)) >= 0; )
                K(Xe, $);
            else
              K(Xe, $);
            return String.fromCharCode.apply(null, Xe);
          case 4:
            var g;
            if ($ < 0)
              for (g = []; !W(); )
                g.push(D());
            else
              for (g = new Array($), H = 0; H < $; ++H)
                g[H] = D();
            return g;
          case 5:
            var ee = {};
            for (H = 0; H < $ || $ < 0 && !W(); ++H) {
              var ce = D();
              ee[ce] = D();
            }
            return ee;
          case 6:
            return y(D(), $);
          case 7:
            switch ($) {
              case 20:
                return !1;
              case 21:
                return !0;
              case 22:
                return null;
              case 23:
                return t;
              default:
                return R($);
            }
        }
      }
      var V = D();
      if (_ !== v.byteLength)
        throw "Remaining bytes";
      return V;
    }
    var m = { encode: d, decode: u };
    typeof t == "function" && t.amd ? t("cbor/cbor", m) : i.exports ? i.exports = m : e.CBOR || (e.CBOR = m);
  })(Yn);
});
/**
 * This files defines the HoloPlayClient class and Message class.
 *
 * Copyright (c) [2019] [Looking Glass Factory]
 *
 * @link    https://lookingglassfactory.com/
 * @file    This files defines the HoloPlayClient class and Message class.
 * @author  Looking Glass Factory.
 * @version 0.0.8
 * @license SEE LICENSE IN LICENSE.md
 */
const Zn = typeof window > "u" ? require("ws") : window.WebSocket;
class qn {
  /**
   * Establish a client to talk to HoloPlayService.
   * @constructor
   * @param {function} initCallback - optional; a function to trigger when
   *     response is received
   * @param {function} errCallback - optional; a function to trigger when there
   *     is a connection error
   * @param {function} closeCallback - optional; a function to trigger when the
   *     socket is closed
   * @param {boolean} debug - optional; default is false
   * @param {string}  appId - optional
   * @param {boolean} isGreedy - optional
   * @param {string}  oncloseBehavior - optional, can be 'wipe', 'hide', 'none'
   */
  constructor(e, t, a, o = !1, h, d, u) {
    this.reqs = [], this.reps = [], this.requestId = this.getRequestId(), this.debug = o, this.isGreedy = d, this.errCallback = t, this.closeCallback = a, this.alwaysdebug = !1, this.isConnected = !1;
    let m = null;
    h || d || u ? m = new $n(h, d, u, this.debug) : (o && (this.alwaysdebug = !0), typeof e == "function" && (m = new Kn())), this.openWebsocket(m, e);
  }
  /**
   * Send a message over the websocket to HoloPlayService.
   * @public
   * @param {Message} msg - message object
   * @param {integer} timeoutSecs - optional, default is 60 seconds
   */
  sendMessage(e, t = 60) {
    this.alwaysdebug && (e.cmd.debug = !0);
    let a = e.toCbor();
    return this.sendRequestObj(a, t);
  }
  /**
   * Disconnects from the web socket.
   * @public
   */
  disconnect() {
    this.ws.close();
  }
  /**
   * Open a websocket and set handlers
   * @private
   */
  openWebsocket(e = null, t = null) {
    this.ws = new Zn("ws://localhost:11222/driver", ["rep.sp.nanomsg.org"]), this.ws.parent = this, this.ws.binaryType = "arraybuffer", this.ws.onmessage = this.messageHandler, this.ws.onopen = () => {
      this.isConnected = !0, this.debug && console.log("socket open"), e != null && this.sendMessage(e).then(t);
    }, this.ws.onerror = this.onSocketError, this.ws.onclose = this.onClose;
  }
  /**
   * Send a request object over websocket
   * @private
   */
  sendRequestObj(e, t) {
    return new Promise((a, o) => {
      let h = {
        id: this.requestId++,
        parent: this,
        payload: e,
        success: a,
        error: o,
        send: function() {
          this.debug && console.log("attemtping to send request with ID " + this.id), this.timeout = setTimeout(h.send.bind(this), t * 1e3);
          let d = new Uint8Array(e.byteLength + 4);
          new DataView(d.buffer).setUint32(0, this.id), d.set(new Uint8Array(this.payload), 4), this.parent.ws.send(d.buffer);
        }
      };
      this.reqs.push(h), h.send();
    });
  }
  /**
   * Handles a message when received
   * @private
   */
  messageHandler(e) {
    console.log("message");
    let t = e.data;
    if (t.byteLength < 4)
      return;
    let o = new DataView(t).getUint32(0);
    if (o < 2147483648) {
      this.parent.err("bad nng header");
      return;
    }
    let h = this.parent.findReqIndex(o);
    if (h == -1) {
      this.parent.err("got reply that doesn't match known request!");
      return;
    }
    let d = { id: o, payload: ar.decode(t.slice(4)) };
    d.payload.error == 0 ? this.parent.reqs[h].success(d.payload) : this.parent.reqs[h].error(d.payload), clearTimeout(this.parent.reqs[h].timeout), this.parent.reqs.splice(h, 1), this.parent.reps.push(d), this.debug && console.log(d.payload);
  }
  getRequestId() {
    return Math.floor(this.prng() * 2147483647) + 2147483648;
  }
  onClose(e) {
    this.parent.isConnected = !1, this.parent.debug && console.log("socket closed"), typeof this.parent.closeCallback == "function" && this.parent.closeCallback(e);
  }
  onSocketError(e) {
    this.parent.debug && console.log(e), typeof this.parent.errCallback == "function" && this.parent.errCallback(e);
  }
  err(e) {
    this.debug && console.log("[DRIVER ERROR]" + e);
  }
  findReqIndex(e) {
    let t = 0;
    for (; t < this.reqs.length; t++)
      if (this.reqs[t].id == e)
        return t;
    return -1;
  }
  prng() {
    return this.rng == null && (this.rng = Jn()), this.rng();
  }
}
class or {
  /**
   * Construct a barebone message.
   * @constructor
   */
  constructor(e, t) {
    this.cmd = e, this.bin = t;
  }
  /**
   * Convert the class instance to the CBOR format
   * @public
   * @returns {CBOR} - cbor object of the message
   */
  toCbor() {
    return ar.encode(this);
  }
}
class $n extends or {
  /**
   * @constructor
   * @param {string}  appId - a unique id for app
   * @param {boolean} isGreedy - will it take over screen
   * @param {string}  oncloseBehavior - can be 'wipe', 'hide', 'none'
   */
  constructor(e = "", t = !1, a = "", o = !1) {
    let h = { init: {} };
    e != "" && (h.init.appid = e), a != "" && (h.init.onclose = a), t && (h.init.greedy = !0), o && (h.init.debug = !0), super(h, null);
  }
}
class Kn extends or {
  /**
   * @constructor
   */
  constructor() {
    let e = { info: {} };
    super(e, null);
  }
}
function Jn() {
  function i(o) {
    for (var h = 0, d = 1779033703 ^ o.length; h < o.length; h++)
      d = Math.imul(d ^ o.charCodeAt(h), 3432918353), d = d << 13 | d >>> 19;
    return function() {
      return d = Math.imul(d ^ d >>> 16, 2246822507), d = Math.imul(d ^ d >>> 13, 3266489909), (d ^= d >>> 16) >>> 0;
    };
  }
  function e(o, h, d, u) {
    return () => {
      var m = h << 9, v = o * 5;
      return v = (v << 7 | v >>> 25) * 9, d ^= o, u ^= h, h ^= d, o ^= u, d ^= m, u = u << 11 | u >>> 21, (v >>> 0) / 4294967296;
    };
  }
  var t = Date.now(), a = i(t.toString());
  return e(a(), a(), a(), a());
}
function es(i, ...e) {
  let t = i[0];
  for (let a = 1; a < i.length; ++a) {
    const o = e[a - 1];
    t += typeof o == "number" ? o.toPrecision(10) : o, t += i[a];
  }
  return t;
}
function Li(i) {
  return es`
  precision mediump float;
  uniform int u_viewType;
  uniform sampler2D u_texture;
  varying vec2 v_texcoord;
  const float pitch    = ${i.pitch};
  const float tilt     = ${i.tilt};
  const float center   = ${i.calibration.center.value};
  const float invView  = ${i.calibration.invView.value};
  const float flipX    = ${i.calibration.flipImageX.value};
  const float flipY    = ${i.calibration.flipImageY.value};
  const float subp     = ${i.subp};
  const float numViews = ${i.numViews};
  const float tilesX   = ${i.quiltWidth};
  const float tilesY   = ${i.quiltHeight};
  const vec2 quiltViewPortion = vec2(
    ${i.quiltWidth * i.tileWidth / i.framebufferWidth},
    ${i.quiltHeight * i.tileHeight / i.framebufferHeight});
  vec2 texArr(vec3 uvz) {
    float z = floor(uvz.z * numViews);
    float x = (mod(z, tilesX) + uvz.x) / tilesX;
    float y = (floor(z / tilesX) + uvz.y) / tilesY;
    return vec2(x, y) * quiltViewPortion;
  }
  float remap(float value, float from1, float to1, float from2, float to2) {
    return (value - from1) / (to1 - from1) * (to2 - from2) + from2;
  }
  void main() {
    if (u_viewType == 2) { // "quilt" view
      gl_FragColor = texture2D(u_texture, v_texcoord);
      return;
    }
    if (u_viewType == 1) { // middle view
      gl_FragColor = texture2D(u_texture, texArr(vec3(v_texcoord.x, v_texcoord.y, 0.5)));
      return;
    }
    vec4 rgb[3];
    vec3 nuv = vec3(v_texcoord.xy, 0.0);
    // Flip UVs if necessary
    nuv.x = (1.0 - flipX) * nuv.x + flipX * (1.0 - nuv.x);
    nuv.y = (1.0 - flipY) * nuv.y + flipY * (1.0 - nuv.y);
    for (int i = 0; i < 3; i++) {
      nuv.z = (v_texcoord.x + float(i) * subp + v_texcoord.y * tilt) * pitch - center;
      nuv.z = mod(nuv.z + ceil(abs(nuv.z)), 1.0);
      nuv.z = (1.0 - invView) * nuv.z + invView * (1.0 - nuv.z);
      rgb[i] = texture2D(u_texture, texArr(vec3(v_texcoord.x, v_texcoord.y, nuv.z)));
    }
    gl_FragColor = vec4(rgb[0].r, rgb[1].g, rgb[2].b, 1);
  }
`;
}
const ni = 1.6;
var si;
(function(i) {
  i[i.Swizzled = 0] = "Swizzled", i[i.Center = 1] = "Center", i[i.Quilt = 2] = "Quilt";
})(si || (si = {}));
let ts = class extends EventTarget {
  constructor(t) {
    super();
    // Calibration defaults
    ye(this, "_calibration", {
      configVersion: "1.0",
      pitch: { value: 45 },
      slope: { value: -5 },
      center: { value: -0.5 },
      viewCone: { value: 40 },
      invView: { value: 1 },
      verticalAngle: { value: 0 },
      DPI: { value: 338 },
      screenW: { value: 250 },
      screenH: { value: 250 },
      flipImageX: { value: 0 },
      flipImageY: { value: 0 },
      flipSubp: { value: 0 },
      serial: "LKG-DEFAULT-#####"
    });
    // Config defaults
    ye(this, "_viewControls", {
      tileHeight: 512,
      numViews: 48,
      trackballX: 0,
      trackballY: 0,
      targetX: 0,
      targetY: ni,
      targetZ: -0.5,
      targetDiam: 2,
      fovy: 13 / 180 * Math.PI,
      depthiness: 1.25,
      inlineView: si.Center,
      capturing: !1,
      quiltResolution: 3840,
      popup: null,
      XRSession: null,
      lkgCanvas: null,
      appCanvas: null
    });
    ye(this, "LookingGlassDetected");
    this._viewControls = { ...this._viewControls, ...t }, this.syncCalibration();
  }
  syncCalibration() {
    new qn((t) => {
      if (t.devices.length < 1) {
        console.log("No Looking Glass devices found");
        return;
      }
      t.devices.length > 1 && console.log("More than one Looking Glass device found... using the first one"), this.calibration = t.devices[0].calibration;
    });
  }
  addEventListener(t, a, o) {
    super.addEventListener(t, a, o);
  }
  onConfigChange() {
    this.dispatchEvent(new Event("on-config-changed"));
  }
  get calibration() {
    return this._calibration;
  }
  set calibration(t) {
    this._calibration = {
      ...this._calibration,
      ...t
    }, this.onConfigChange();
  }
  updateViewControls(t) {
    t != null && (this._viewControls = {
      ...this._viewControls,
      ...t
    }, this.onConfigChange());
  }
  // configurable
  /**
   * @deprecated defines the height of the individual quilt view, the width is then set based on the aspect ratio of the connected device.
   */
  get tileHeight() {
    return Math.round(this.framebufferHeight / this.quiltHeight);
  }
  /**
   * defines the quilt resolution, only change this at start, do not change this after an XRSession has started
   */
  get quiltResolution() {
    return this._viewControls.quiltResolution;
  }
  set quiltResolution(t) {
    this.updateViewControls({ quiltResolution: t });
  }
  /**
   * defines the number of views to be rendered
   */
  get numViews() {
    return this.quiltWidth * this.quiltHeight;
  }
  /**
   * defines the position of the camera on the X-axis
   */
  get targetX() {
    return this._viewControls.targetX;
  }
  set targetX(t) {
    this.updateViewControls({ targetX: t });
  }
  /**
   * defines the position of the camera on the Y-axis
   */
  get targetY() {
    return this._viewControls.targetY;
  }
  set targetY(t) {
    this.updateViewControls({ targetY: t });
  }
  /**
   * defines the position of the camera on the X-axis
   */
  get targetZ() {
    return this._viewControls.targetZ;
  }
  set targetZ(t) {
    this.updateViewControls({ targetZ: t });
  }
  /**
   * defines the rotation of the camera on the X-axis
   */
  get trackballX() {
    return this._viewControls.trackballX;
  }
  set trackballX(t) {
    this.updateViewControls({ trackballX: t });
  }
  /**
   * defines the rotation of the camera on the Y-axis
   */
  get trackballY() {
    return this._viewControls.trackballY;
  }
  set trackballY(t) {
    this.updateViewControls({ trackballY: t });
  }
  /**
   * defines the size of the camera, this makes your scene bigger or smaller without changing the focus.
   */
  get targetDiam() {
    return this._viewControls.targetDiam;
  }
  set targetDiam(t) {
    this.updateViewControls({ targetDiam: t });
  }
  /**
   * defines the vertical FOV of your camera (defined in radians)
   */
  get fovy() {
    return this._viewControls.fovy;
  }
  set fovy(t) {
    this.updateViewControls({ fovy: t });
  }
  /**
   * modifies to the view frustum to increase or decrease the perceived depth of the scene.
   */
  get depthiness() {
    return this._viewControls.depthiness;
  }
  set depthiness(t) {
    this.updateViewControls({ depthiness: t });
  }
  /**
   * changes how the original canvas on your main web page is displayed, can show the encoded subpixel matrix, a single centered view, or a quilt view.
   */
  get inlineView() {
    return this._viewControls.inlineView;
  }
  set inlineView(t) {
    this.updateViewControls({ inlineView: t });
  }
  get capturing() {
    return this._viewControls.capturing;
  }
  set capturing(t) {
    this.updateViewControls({ capturing: t });
  }
  get popup() {
    return this._viewControls.popup;
  }
  set popup(t) {
    this.updateViewControls({ popup: t });
  }
  get XRSession() {
    return this._viewControls.XRSession;
  }
  set XRSession(t) {
    this.updateViewControls({ XRSession: t });
  }
  get lkgCanvas() {
    return this._viewControls.lkgCanvas;
  }
  set lkgCanvas(t) {
    this.updateViewControls({ lkgCanvas: t });
  }
  get appCanvas() {
    return this._viewControls.appCanvas;
  }
  set appCanvas(t) {
    this.updateViewControls({ appCanvas: t });
  }
  // Computed
  get aspect() {
    return this._calibration.screenW.value / this._calibration.screenH.value;
  }
  get tileWidth() {
    return Math.round(this.framebufferWidth / this.quiltWidth);
  }
  get framebufferWidth() {
    return this._calibration.screenW.value < 7e3 ? this._viewControls.quiltResolution : 7680;
  }
  // number of columns
  get quiltWidth() {
    return this.calibration.screenW.value == 1536 ? 8 : this.calibration.screenW.value == 3840 || this.calibration.screenW.value > 7e3 ? 5 : 8;
  }
  get quiltHeight() {
    return this.calibration.screenW.value == 1536 ? 6 : this.calibration.screenW.value == 3840 || this.calibration.screenW.value > 7e3 ? 9 : 6;
  }
  get framebufferHeight() {
    return this._calibration.screenW.value < 7e3 ? this._viewControls.quiltResolution : 4320;
  }
  get viewCone() {
    return this._calibration.viewCone.value * this.depthiness / 180 * Math.PI;
  }
  get tilt() {
    return this._calibration.screenH.value / (this._calibration.screenW.value * this._calibration.slope.value) * (this._calibration.flipImageX.value ? -1 : 1);
  }
  set tilt(t) {
  }
  get subp() {
    return 1 / (this._calibration.screenW.value * 3);
  }
  get pitch() {
    const t = this._calibration.screenW.value / this._calibration.DPI.value;
    return this._calibration.pitch.value * t * Math.cos(Math.atan(1 / this._calibration.slope.value));
  }
}, Kt = null;
function Pe() {
  return Kt == null && (Kt = new ts()), Kt;
}
function Oi(i) {
  const e = Pe();
  i != null && e.updateViewControls(i);
}
var is = 1e-6, Ni = typeof Float32Array < "u" ? Float32Array : Array;
function ze() {
  var i = new Ni(16);
  return Ni != Float32Array && (i[1] = 0, i[2] = 0, i[3] = 0, i[4] = 0, i[6] = 0, i[7] = 0, i[8] = 0, i[9] = 0, i[11] = 0, i[12] = 0, i[13] = 0, i[14] = 0), i[0] = 1, i[5] = 1, i[10] = 1, i[15] = 1, i;
}
function rs(i, e, t, a, o, h, d, u, m, v, y, R, x, _, F, C, B) {
  return i[0] = e, i[1] = t, i[2] = a, i[3] = o, i[4] = h, i[5] = d, i[6] = u, i[7] = m, i[8] = v, i[9] = y, i[10] = R, i[11] = x, i[12] = _, i[13] = F, i[14] = C, i[15] = B, i;
}
function ki(i, e) {
  var t = e[0], a = e[1], o = e[2], h = e[3], d = e[4], u = e[5], m = e[6], v = e[7], y = e[8], R = e[9], x = e[10], _ = e[11], F = e[12], C = e[13], B = e[14], N = e[15], Q = t * u - a * d, P = t * m - o * d, I = t * v - h * d, G = a * m - o * u, O = a * v - h * u, W = o * v - h * m, z = y * C - R * F, Z = y * B - x * F, K = y * N - _ * F, D = R * B - x * C, V = R * N - _ * C, L = x * N - _ * B, M = Q * L - P * V + I * D + G * K - O * Z + W * z;
  return M ? (M = 1 / M, i[0] = (u * L - m * V + v * D) * M, i[1] = (o * V - a * L - h * D) * M, i[2] = (C * W - B * O + N * G) * M, i[3] = (x * O - R * W - _ * G) * M, i[4] = (m * K - d * L - v * Z) * M, i[5] = (t * L - o * K + h * Z) * M, i[6] = (B * I - F * W - N * P) * M, i[7] = (y * W - x * I + _ * P) * M, i[8] = (d * V - u * K + v * z) * M, i[9] = (a * K - t * V - h * z) * M, i[10] = (F * O - C * I + N * Q) * M, i[11] = (R * I - y * O - _ * Q) * M, i[12] = (u * Z - d * D - m * z) * M, i[13] = (t * D - a * Z + o * z) * M, i[14] = (C * P - F * G - B * Q) * M, i[15] = (y * G - R * P + x * Q) * M, i) : null;
}
function Gi(i, e, t) {
  var a = t[0], o = t[1], h = t[2], d = void 0, u = void 0, m = void 0, v = void 0, y = void 0, R = void 0, x = void 0, _ = void 0, F = void 0, C = void 0, B = void 0, N = void 0;
  return e === i ? (i[12] = e[0] * a + e[4] * o + e[8] * h + e[12], i[13] = e[1] * a + e[5] * o + e[9] * h + e[13], i[14] = e[2] * a + e[6] * o + e[10] * h + e[14], i[15] = e[3] * a + e[7] * o + e[11] * h + e[15]) : (d = e[0], u = e[1], m = e[2], v = e[3], y = e[4], R = e[5], x = e[6], _ = e[7], F = e[8], C = e[9], B = e[10], N = e[11], i[0] = d, i[1] = u, i[2] = m, i[3] = v, i[4] = y, i[5] = R, i[6] = x, i[7] = _, i[8] = F, i[9] = C, i[10] = B, i[11] = N, i[12] = d * a + y * o + F * h + e[12], i[13] = u * a + R * o + C * h + e[13], i[14] = m * a + x * o + B * h + e[14], i[15] = v * a + _ * o + N * h + e[15]), i;
}
function Vi(i, e, t, a) {
  var o = a[0], h = a[1], d = a[2], u = Math.sqrt(o * o + h * h + d * d), m = void 0, v = void 0, y = void 0, R = void 0, x = void 0, _ = void 0, F = void 0, C = void 0, B = void 0, N = void 0, Q = void 0, P = void 0, I = void 0, G = void 0, O = void 0, W = void 0, z = void 0, Z = void 0, K = void 0, D = void 0, V = void 0, L = void 0, M = void 0, J = void 0;
  return u < is ? null : (u = 1 / u, o *= u, h *= u, d *= u, m = Math.sin(t), v = Math.cos(t), y = 1 - v, R = e[0], x = e[1], _ = e[2], F = e[3], C = e[4], B = e[5], N = e[6], Q = e[7], P = e[8], I = e[9], G = e[10], O = e[11], W = o * o * y + v, z = h * o * y + d * m, Z = d * o * y - h * m, K = o * h * y - d * m, D = h * h * y + v, V = d * h * y + o * m, L = o * d * y + h * m, M = h * d * y - o * m, J = d * d * y + v, i[0] = R * W + C * z + P * Z, i[1] = x * W + B * z + I * Z, i[2] = _ * W + N * z + G * Z, i[3] = F * W + Q * z + O * Z, i[4] = R * K + C * D + P * V, i[5] = x * K + B * D + I * V, i[6] = _ * K + N * D + G * V, i[7] = F * K + Q * D + O * V, i[8] = R * L + C * M + P * J, i[9] = x * L + B * M + I * J, i[10] = _ * L + N * M + G * J, i[11] = F * L + Q * M + O * J, e !== i && (i[12] = e[12], i[13] = e[13], i[14] = e[14], i[15] = e[15]), i);
}
function Jt(i, e) {
  return i[0] = 1, i[1] = 0, i[2] = 0, i[3] = 0, i[4] = 0, i[5] = 1, i[6] = 0, i[7] = 0, i[8] = 0, i[9] = 0, i[10] = 1, i[11] = 0, i[12] = e[0], i[13] = e[1], i[14] = e[2], i[15] = 1, i;
}
function ns(i, e, t, a, o) {
  var h = 1 / Math.tan(e / 2), d = void 0;
  return i[0] = h / t, i[1] = 0, i[2] = 0, i[3] = 0, i[4] = 0, i[5] = h, i[6] = 0, i[7] = 0, i[8] = 0, i[9] = 0, i[11] = -1, i[12] = 0, i[13] = 0, i[15] = 0, o != null && o !== 1 / 0 ? (d = 1 / (a - o), i[10] = (o + a) * d, i[14] = 2 * o * a * d) : (i[10] = -1, i[14] = -2 * a), i;
}
async function ss() {
  const i = Pe();
  let e = 2;
  function t() {
    if (console.log("Downloading image"), i.appCanvas != null)
      try {
        let o = i.appCanvas.toDataURL();
        const h = document.createElement("a");
        h.style.display = "none", h.href = o, h.download = `hologram_qs${i.quiltWidth}x${i.quiltHeight}a${i.aspect}.png`, document.body.appendChild(h), h.click(), document.body.removeChild(h), window.URL.revokeObjectURL(o);
      } catch (o) {
        console.error("Error while capturing canvas data:", o);
      } finally {
        i.inlineView = e;
      }
  }
  const a = document.getElementById("screenshotbutton");
  a && a.addEventListener("click", () => {
    console.log("Taking screenshot"), e = i.inlineView;
    const o = Lt.getInstance();
    if (!o) {
      console.warn("LookingGlassXRDevice not initialized");
      return;
    }
    i.inlineView = 2, o.captureScreenshot = !0, setTimeout(() => {
      o.screenshotCallback = t;
    }, 100);
  });
}
function as() {
  var e;
  const i = Pe();
  if (i.lkgCanvas == null)
    console.warn("window placement called without a valid XR Session!");
  else {
    let t = function() {
      let x = R.d - R.a, _ = R.w - R.s;
      x && _ && (x *= Math.sqrt(0.5), _ *= Math.sqrt(0.5));
      const F = i.trackballX, C = i.trackballY, B = Math.cos(F) * x - Math.sin(F) * Math.cos(C) * _, N = -Math.sin(C) * _, Q = -Math.sin(F) * x - Math.cos(F) * Math.cos(C) * _;
      i.targetX = i.targetX + B * i.targetDiam * 0.03, i.targetY = i.targetY + N * i.targetDiam * 0.03, i.targetZ = i.targetZ + Q * i.targetDiam * 0.03, requestAnimationFrame(t);
    };
    const a = document.createElement("style");
    document.head.appendChild(a), (e = a.sheet) == null || e.insertRule("#LookingGlassWebXRControls * { all: revert; font-family: sans-serif }");
    const o = document.createElement("div");
    o.id = "LookingGlassWebXRControls", o.style.position = "fixed", o.style.zIndex = "1000", o.style.padding = "15px", o.style.width = "320px", o.style.maxWidth = "calc(100vw - 18px)", o.style.maxHeight = "calc(100vh - 18px)", o.style.whiteSpace = "nowrap", o.style.background = "rgba(0, 0, 0, 0.6)", o.style.color = "white", o.style.borderRadius = "10px", o.style.right = "15px", o.style.bottom = "15px", o.style.flex = "row";
    const h = document.createElement("div");
    o.appendChild(h), h.style.width = "100%", h.style.textAlign = "center", h.style.fontWeight = "bold", h.style.marginBottom = "8px", h.innerText = "Looking Glass Controls";
    const d = document.createElement("button");
    d.style.display = "block", d.style.margin = "auto", d.style.width = "100%", d.style.height = "35px", d.style.padding = "4px", d.style.marginBottom = "8px", d.style.borderRadius = "8px", d.id = "screenshotbutton", o.appendChild(d), d.innerText = "Save Hologram";
    const u = document.createElement("button");
    u.style.display = "block", u.style.margin = "auto", u.style.width = "100%", u.style.height = "35px", u.style.padding = "4px", u.style.marginBottom = "8px", u.style.borderRadius = "8px", u.id = "copybutton", o.appendChild(u), u.innerText = "Copy Config", u.addEventListener("click", () => {
      os(i);
    });
    const m = document.createElement("div");
    o.appendChild(m), m.style.width = "290px", m.style.whiteSpace = "normal", m.style.color = "rgba(255,255,255,0.7)", m.style.fontSize = "14px", m.style.margin = "5px 0", m.innerHTML = "Click the popup and use WASD, mouse left/right drag, and scroll.";
    const v = document.createElement("div");
    o.appendChild(v);
    const y = (x, _, F) => {
      const C = F.stringify, B = document.createElement("div");
      B.style.marginBottom = "8px", v.appendChild(B);
      const N = x, Q = i[x], P = document.createElement("label");
      B.appendChild(P), P.innerText = F.label, P.setAttribute("for", N), P.style.width = "100px", P.style.display = "inline-block", P.style.textDecoration = "dotted underline 1px", P.style.fontFamily = '"Courier New"', P.style.fontSize = "13px", P.style.fontWeight = "bold", P.title = F.title;
      const I = document.createElement("input");
      B.appendChild(I), Object.assign(I, _), I.id = N, I.title = F.title, I.value = _.value !== void 0 ? _.value : Q;
      const G = (z) => {
        i[x] = z, W(z);
      };
      I.oninput = () => {
        const z = _.type === "range" ? parseFloat(I.value) : _.type === "checkbox" ? I.checked : I.value;
        G(z);
      };
      const O = (z) => {
        let Z = z(i[x]);
        F.fixRange && (Z = F.fixRange(Z), I.max = Math.max(parseFloat(I.max), Z).toString(), I.min = Math.min(parseFloat(I.min), Z).toString()), I.value = Z, G(Z);
      };
      _.type === "range" && (I.style.width = "110px", I.style.height = "8px", I.onwheel = (z) => {
        O((Z) => Z + Math.sign(z.deltaX - z.deltaY) * _.step);
      });
      let W = (z) => {
      };
      if (C) {
        const z = document.createElement("span");
        z.style.fontFamily = '"Courier New"', z.style.fontSize = "13px", z.style.marginLeft = "3px", B.appendChild(z), W = (Z) => {
          z.innerHTML = C(Z);
        }, W(Q);
      }
      return O;
    };
    y("fovy", {
      type: "range",
      min: 1 / 180 * Math.PI,
      max: 120.1 / 180 * Math.PI,
      step: 1 / 180 * Math.PI
    }, {
      label: "fov",
      title: "perspective fov (degrades stereo effect)",
      fixRange: (x) => Math.max(1 / 180 * Math.PI, Math.min(x, 120.1 / 180 * Math.PI)),
      stringify: (x) => {
        const _ = x / Math.PI * 180, F = Math.atan(Math.tan(x / 2) * i.aspect) * 2 / Math.PI * 180;
        return `${_.toFixed()}&deg;&times;${F.toFixed()}&deg;`;
      }
    }), y("depthiness", { type: "range", min: 0, max: 2, step: 0.01 }, {
      label: "depthiness",
      title: "exaggerates depth by multiplying the width of the view cone (as reported by the firmware) - can somewhat compensate for depthiness lost using higher fov.",
      fixRange: (x) => Math.max(0, x),
      stringify: (x) => `${x.toFixed(2)}x`
    }), y("inlineView", { type: "range", min: 0, max: 2, step: 1 }, {
      label: "inline view",
      title: "what to show inline on the original canvas (swizzled = no overwrite)",
      fixRange: (x) => Math.max(0, Math.min(x, 2)),
      stringify: (x) => x === 0 ? "swizzled" : x === 1 ? "center" : x === 2 ? "quilt" : "?"
    }), i.lkgCanvas.oncontextmenu = (x) => {
      x.preventDefault();
    }, i.lkgCanvas.addEventListener("wheel", (x) => {
      const _ = i.targetDiam, F = 1.1, C = Math.log(_) / Math.log(F);
      return i.targetDiam = Math.pow(F, C + x.deltaY * 0.01);
    }), i.lkgCanvas.addEventListener("mousemove", (x) => {
      const _ = x.movementX, F = -x.movementY;
      if (x.buttons & 2 || x.buttons & 1 && (x.shiftKey || x.ctrlKey)) {
        const C = i.trackballX, B = i.trackballY, N = -Math.cos(C) * _ + Math.sin(C) * Math.sin(B) * F, Q = -Math.cos(B) * F, P = Math.sin(C) * _ + Math.cos(C) * Math.sin(B) * F;
        i.targetX = i.targetX + N * i.targetDiam * 1e-3, i.targetY = i.targetY + Q * i.targetDiam * 1e-3, i.targetZ = i.targetZ + P * i.targetDiam * 1e-3;
      } else
        x.buttons & 1 && (i.trackballX = i.trackballX - _ * 0.01, i.trackballY = i.trackballY - F * 0.01);
    });
    const R = { w: 0, a: 0, s: 0, d: 0 };
    return i.lkgCanvas.addEventListener("keydown", (x) => {
      switch (x.code) {
        case "KeyW":
          R.w = 1;
          break;
        case "KeyA":
          R.a = 1;
          break;
        case "KeyS":
          R.s = 1;
          break;
        case "KeyD":
          R.d = 1;
          break;
      }
    }), i.lkgCanvas.addEventListener("keyup", (x) => {
      switch (x.code) {
        case "KeyW":
          R.w = 0;
          break;
        case "KeyA":
          R.a = 0;
          break;
        case "KeyS":
          R.s = 0;
          break;
        case "KeyD":
          R.d = 0;
          break;
      }
    }), requestAnimationFrame(t), setTimeout(() => {
      ss();
    }, 1e3), o;
  }
}
function os(i) {
  const e = {
    targetX: i.targetX,
    targetY: i.targetY,
    targetZ: i.targetZ,
    fovy: `${Math.round(i.fovy / Math.PI * 180)} * Math.PI / 180`,
    targetDiam: i.targetDiam,
    trackballX: i.trackballX,
    trackballY: i.trackballY,
    depthiness: i.depthiness
  };
  let t = JSON.stringify(e, null, 4).replace(/"/g, "").replace(/{/g, "").replace(/}/g, "");
  navigator.clipboard.writeText(t);
}
let Pt;
const ls = (i, e) => {
  const t = Pe();
  if (t.lkgCanvas == null) {
    console.warn("window placement called without a valid XR Session!");
    return;
  } else
    i == !1 ? hs(t, Pt) : (Pt == null && (Pt = as()), t.lkgCanvas.style.position = "fixed", t.lkgCanvas.style.bottom = "0", t.lkgCanvas.style.left = "0", t.lkgCanvas.width = t.calibration.screenW.value, t.lkgCanvas.height = t.calibration.screenH.value, document.body.appendChild(Pt), "getScreenDetails" in window ? cs(t.lkgCanvas, t, e) : lr(t, t.lkgCanvas, e));
};
async function cs(i, e, t) {
  const o = (await window.getScreenDetails()).screens.filter((h) => h.label.includes("LKG"))[0];
  if (o === void 0) {
    console.warn("no Looking Glass display detected - manually opening popup window"), lr(e, i, t);
    return;
  } else {
    console.log("monitor ID", o.label, "serial number", e.calibration);
    const h = [
      `left=${o.left}`,
      `top=${o.top}`,
      `width=${o.width}`,
      `height=${o.height}`,
      "menubar=no",
      "toolbar=no",
      "location=no",
      "status=no",
      "resizable=yes",
      "scrollbars=no",
      "fullscreenEnabled=true"
    ].join(",");
    e.popup = window.open("", "new", h), e.popup && (e.popup.document.body.style.background = "black", e.popup.document.body.style.transform = "1.0", cr(e), e.popup.document.body.appendChild(i), console.assert(t), e.popup.onbeforeunload = t);
  }
}
function lr(i, e, t) {
  i.popup = window.open("", void 0, "width=640,height=360"), i.popup && (i.popup.document.title = "Looking Glass Window (fullscreen me on Looking Glass!)", i.popup.document.body.style.background = "black", i.popup.document.body.style.transform = "1.0", cr(i), i.popup.document.body.appendChild(e), console.assert(t), i.popup.onbeforeunload = t);
}
function hs(i, e) {
  var t;
  (t = e.parentElement) == null || t.removeChild(e), i.popup && (i.popup.onbeforeunload = null, i.popup.close(), i.popup = null);
}
function cr(i) {
  i.popup && i.popup.document.addEventListener("keydown", (e) => {
    e.ctrlKey && (e.key === "=" || e.key === "-" || e.key === "+") && e.preventDefault();
  });
}
const Qe = Symbol("LookingGlassXRWebGLLayer");
class ds extends ir {
  constructor(e, t, a) {
    super(e, t, a);
    const o = Pe();
    o.appCanvas = t.canvas, o.lkgCanvas = document.createElement("canvas"), o.lkgCanvas.tabIndex = 0;
    const h = o.lkgCanvas.getContext("2d", { alpha: !1 });
    o.lkgCanvas.addEventListener("dblclick", function() {
      this.requestFullscreen();
    });
    const d = this[Ze].config, u = t.createTexture();
    let m, v;
    const y = t.createFramebuffer(), R = t.getExtension("OES_vertex_array_object"), x = 34229, _ = R ? R.bindVertexArrayOES.bind(R) : t.bindVertexArray.bind(t);
    (d.depth || d.stencil) && (d.depth && d.stencil ? v = {
      format: t.DEPTH_STENCIL,
      attachment: t.DEPTH_STENCIL_ATTACHMENT
    } : d.depth ? v = {
      format: t.DEPTH_COMPONENT16,
      attachment: t.DEPTH_ATTACHMENT
    } : d.stencil && (v = {
      format: t.STENCIL_INDEX8,
      attachment: t.STENCIL_ATTACHMENT
    }), m = t.createRenderbuffer());
    const F = (g, ee, ce, re, de) => {
      C(g, ee, de.framebufferWidth, de.framebufferHeight), ce && B(g, ce, re, de.framebufferWidth, de.framebufferHeight);
    }, C = (g, ee, ce, re) => {
      const de = g.getParameter(g.TEXTURE_BINDING_2D);
      g.bindTexture(g.TEXTURE_2D, ee), g.texImage2D(g.TEXTURE_2D, 0, g.RGBA, ce, re, 0, g.RGBA, g.UNSIGNED_BYTE, null), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.LINEAR), g.bindTexture(g.TEXTURE_2D, de);
    }, B = (g, ee, ce, re, de) => {
      const me = g.getParameter(g.RENDERBUFFER_BINDING);
      g.bindRenderbuffer(g.RENDERBUFFER, ee), g.renderbufferStorage(g.RENDERBUFFER, ce.format, re, de), g.bindRenderbuffer(g.RENDERBUFFER, me);
    }, N = (g, ee, ce, re, de, me) => {
      const Ke = g.getParameter(g.FRAMEBUFFER_BINDING);
      g.bindFramebuffer(g.FRAMEBUFFER, ee), g.framebufferTexture2D(g.FRAMEBUFFER, g.COLOR_ATTACHMENT0, g.TEXTURE_2D, ce, 0), (me.depth || me.stencil) && g.framebufferRenderbuffer(g.FRAMEBUFFER, re.attachment, g.RENDERBUFFER, de), g.bindFramebuffer(g.FRAMEBUFFER, Ke);
    };
    F(t, u, m, v, o), o.addEventListener("on-config-changed", () => F(t, u, m, v, o)), N(t, y, u, v, m, d);
    const Q = `
		attribute vec2 a_position;
		varying vec2 v_texcoord;
		void main() {
		  gl_Position = vec4(a_position * 2.0 - 1.0, 0.0, 1.0);
		  v_texcoord = a_position;
		}
	  `;
    function P(g, ee, ce) {
      const re = g.createShader(ee);
      return g.shaderSource(re, ce), g.compileShader(re), g.getShaderParameter(re, g.COMPILE_STATUS) ? re : (console.warn(g.getShaderInfoLog(re)), null);
    }
    function I(g, ee, ce) {
      let re = g.createProgram();
      const de = P(g, g.VERTEX_SHADER, ee), me = P(g, g.FRAGMENT_SHADER, ce);
      return de === null || me === null ? (console.error("There was a problem with shader construction"), null) : (g.attachShader(re, de), g.attachShader(re, me), g.linkProgram(re), g.getProgramParameter(re, g.LINK_STATUS) ? re : (console.warn(g.getProgramInfoLog(re)), null));
    }
    let G, O, W, z;
    const Z = (g, ee, ce) => {
      const re = ce(ee);
      if (re === O)
        return;
      O = re;
      const de = P(g, g.FRAGMENT_SHADER, re);
      if (de === null)
        return;
      G && g.deleteShader(G), G = de;
      const me = I(g, Q, re);
      if (me === null) {
        console.warn("There was a problem with shader construction");
        return;
      }
      W = g.getAttribLocation(me, "a_position"), z = g.getUniformLocation(me, "u_viewType");
      const Ke = g.getUniformLocation(me, "u_texture"), _t = g.getParameter(g.CURRENT_PROGRAM);
      g.useProgram(me), g.uniform1i(Ke, 0), g.useProgram(_t), K && g.deleteProgram(K), K = me;
    };
    let K = I(t, Q, Li(o));
    K === null && console.warn("There was a problem with shader construction"), o.addEventListener("on-config-changed", () => {
      Z(t, o, Li);
    });
    const D = R ? R.createVertexArrayOES() : t.createVertexArray(), V = t.createBuffer(), L = t.getParameter(t.ARRAY_BUFFER_BINDING), M = t.getParameter(x);
    _(D), t.bindBuffer(t.ARRAY_BUFFER, V), t.bufferData(t.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]), t.STATIC_DRAW), t.enableVertexAttribArray(W), t.vertexAttribPointer(W, 2, t.FLOAT, !1, 0, 0), _(M), t.bindBuffer(t.ARRAY_BUFFER, L);
    const J = () => {
      console.assert(this[Qe].LookingGlassEnabled), t.bindFramebuffer(t.FRAMEBUFFER, this.framebuffer);
      const g = t.getParameter(t.COLOR_CLEAR_VALUE), ee = t.getParameter(t.DEPTH_CLEAR_VALUE), ce = t.getParameter(t.STENCIL_CLEAR_VALUE);
      t.clearColor(0, 0, 0, 0), t.clearDepth(1), t.clearStencil(0), t.clear(t.DEPTH_BUFFER_BIT | t.COLOR_BUFFER_BIT | t.STENCIL_BUFFER_BIT), t.clearColor(g[0], g[1], g[2], g[3]), t.clearDepth(ee), t.clearStencil(ce);
    };
    function H() {
      if (!o.appCanvas || !o.lkgCanvas)
        return;
      const g = Ee();
      (o.appCanvas.width !== o.framebufferWidth || o.appCanvas.height !== o.framebufferHeight) && (o.appCanvas.width, o.appCanvas.height, o.appCanvas.width = o.framebufferWidth, o.appCanvas.height = o.framebufferHeight), Te(), $e(), Be(), Xe(), $(g);
    }
    function $(g) {
      t.activeTexture(g.activeTexture), t.bindTexture(t.TEXTURE_2D, g.textureBinding), t.useProgram(g.program), t.bindRenderbuffer(t.RENDERBUFFER, g.renderbufferBinding), t.bindFramebuffer(t.FRAMEBUFFER, g.framebufferBinding), g.scissorTest ? t.enable(t.SCISSOR_TEST) : t.disable(t.SCISSOR_TEST), g.stencilTest ? t.enable(t.STENCIL_TEST) : t.disable(t.STENCIL_TEST), g.depthTest ? t.enable(t.DEPTH_TEST) : t.disable(t.DEPTH_TEST), g.blend ? t.enable(t.BLEND) : t.disable(t.BLEND), g.cullFace ? t.enable(t.CULL_FACE) : t.disable(t.CULL_FACE), g.scissorTest ? t.enable(t.SCISSOR_TEST) : t.disable(t.SCISSOR_TEST), t.scissor(g.scissorBox[0], g.scissorBox[1], g.scissorBox[2], g.scissorBox[3]), _(g.VAO);
    }
    function Ee() {
      return {
        VAO: t.getParameter(t.VERTEX_ARRAY_BINDING),
        cullFace: t.getParameter(t.CULL_FACE),
        blend: t.getParameter(t.BLEND),
        depthTest: t.getParameter(t.DEPTH_TEST),
        stencilTest: t.getParameter(t.STENCIL_TEST),
        scissorTest: t.getParameter(t.SCISSOR_TEST),
        viewport: t.getParameter(t.VIEWPORT),
        framebufferBinding: t.getParameter(t.FRAMEBUFFER_BINDING),
        renderbufferBinding: t.getParameter(t.RENDERBUFFER_BINDING),
        program: t.getParameter(t.CURRENT_PROGRAM),
        activeTexture: t.getParameter(t.ACTIVE_TEXTURE),
        textureBinding: t.getParameter(t.TEXTURE_BINDING_2D),
        scissorBox: t.getParameter(t.SCISSOR_BOX)
      };
    }
    function Te() {
      t.bindFramebuffer(t.FRAMEBUFFER, null), t.useProgram(K), _(D), t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, u), t.disable(t.BLEND), t.disable(t.CULL_FACE), t.disable(t.DEPTH_TEST), t.disable(t.STENCIL_TEST), t.viewport(0, 0, t.drawingBufferWidth, t.drawingBufferHeight);
    }
    function $e() {
      t.uniform1i(z, 0), t.drawArrays(t.TRIANGLES, 0, 6);
    }
    function Be() {
      if (!o.lkgCanvas || !o.appCanvas) {
        console.warn("Looking Glass Canvas is not defined");
        return;
      }
      h == null || h.clearRect(0, 0, o.lkgCanvas.width, o.lkgCanvas.height), h == null || h.drawImage(o.appCanvas, 0, 0, o.framebufferWidth, o.framebufferHeight, 0, 0, o.calibration.screenW.value, o.calibration.screenH.value);
    }
    function Xe() {
      if (!o.appCanvas) {
        console.warn("Looking Glass Canvas is not defined");
        return;
      }
      o.inlineView !== 0 && (o.capturing && o.appCanvas.width !== o.framebufferWidth && (o.appCanvas.width = o.framebufferWidth, o.appCanvas.height = o.framebufferHeight, t.viewport(0, 0, o.framebufferHeight, o.framebufferWidth)), t.uniform1i(z, o.inlineView), t.drawArrays(t.TRIANGLES, 0, 6));
    }
    window.addEventListener("unload", () => {
      o.popup && o.popup.close(), o.popup = null;
    }), this[Qe] = {
      LookingGlassEnabled: !1,
      framebuffer: y,
      clearFramebuffer: J,
      blitTextureToDefaultFramebufferIfNeeded: H,
      moveCanvasToWindow: ls
    };
  }
  get framebuffer() {
    return this[Qe].LookingGlassEnabled ? this[Qe].framebuffer : null;
  }
  get framebufferWidth() {
    return Pe().framebufferWidth;
  }
  get framebufferHeight() {
    return Pe().framebufferHeight;
  }
}
const et = class et extends hi {
  constructor(e) {
    super(e), this.sessions = /* @__PURE__ */ new Map(), this.viewSpaces = [], this.basePoseMatrix = ze(), this.inlineProjectionMatrix = ze(), this.inlineInverseViewMatrix = ze(), this.LookingGlassProjectionMatrices = [], this.LookingGlassInverseViewMatrices = [], this.captureScreenshot = !1, this.screenshotCallback = null, et.instance || (et.instance = this);
  }
  static getInstance() {
    return et.instance;
  }
  onBaseLayerSet(e, t) {
    const a = this.sessions.get(e);
    a.baseLayer = t;
    const o = Pe(), h = t[Qe];
    h.LookingGlassEnabled = a.immersive, a.immersive && (o.XRSession = this.sessions.get(e), o.popup == null ? h.moveCanvasToWindow(!0, () => {
      this.endSession(e);
    }) : console.warn("attempted to assign baselayer twice?"));
  }
  isSessionSupported(e) {
    return e === "inline" || e === "immersive-vr";
  }
  isFeatureSupported(e) {
    switch (e) {
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
        return console.warn("LookingGlassXRDevice.isFeatureSupported: feature not understood:", e), !1;
    }
  }
  async requestSession(e, t) {
    if (!this.isSessionSupported(e))
      return Promise.reject();
    const a = e !== "inline", o = new us(e, t);
    return this.sessions.set(o.id, o), a && this.dispatchEvent("@@webxr-polyfill/vr-present-start", o.id), Promise.resolve(o.id);
  }
  requestAnimationFrame(e) {
    return this.global.requestAnimationFrame(e);
  }
  cancelAnimationFrame(e) {
    this.global.cancelAnimationFrame(e);
  }
  onFrameStart(e, t) {
    const a = this.sessions.get(e), o = Pe();
    if (a.immersive) {
      const h = Math.tan(0.5 * o.fovy), d = 0.5 * o.targetDiam / h, u = d - o.targetDiam, m = this.basePoseMatrix;
      Jt(m, [o.targetX, o.targetY, o.targetZ]), Vi(m, m, o.trackballX, [0, 1, 0]), Vi(m, m, -o.trackballY, [1, 0, 0]), Gi(m, m, [0, 0, d]);
      for (let y = 0; y < o.numViews; ++y) {
        const R = (y + 0.5) / o.numViews - 0.5, x = Math.tan(o.viewCone * R), _ = d * x, F = this.LookingGlassInverseViewMatrices[y] = this.LookingGlassInverseViewMatrices[y] || ze();
        Gi(F, m, [_, 0, 0]), ki(F, F);
        const C = Math.max(u + t.depthNear, 0.01), B = u + t.depthFar, N = C * h, Q = N, P = -N, I = C * -x, G = o.aspect * N, O = I + G, W = I - G, z = this.LookingGlassProjectionMatrices[y] = this.LookingGlassProjectionMatrices[y] || ze();
        rs(z, 2 * C / (O - W), 0, 0, 0, 0, 2 * C / (Q - P), 0, 0, (O + W) / (O - W), (Q + P) / (Q - P), -(B + C) / (B - C), -1, 0, 0, -2 * B * C / (B - C), 0);
      }
      a.baseLayer[Qe].clearFramebuffer();
    } else {
      const h = a.baseLayer.context, d = h.drawingBufferWidth / h.drawingBufferHeight;
      ns(this.inlineProjectionMatrix, t.inlineVerticalFieldOfView, d, t.depthNear, t.depthFar), Jt(this.basePoseMatrix, [0, ni, 0]), ki(this.inlineInverseViewMatrix, this.basePoseMatrix);
    }
  }
  onFrameEnd(e) {
    this.sessions.get(e).baseLayer[Qe].blitTextureToDefaultFramebufferIfNeeded(), this.captureScreenshot && this.screenshotCallback && (this.screenshotCallback(), this.captureScreenshot = !1);
  }
  // Looking Glass WebXR Library requires local to be set when requesting an XR session.
  async requestFrameOfReferenceTransform(e, t) {
    const a = ze();
    switch (e) {
      case "viewer":
      case "local":
        return Jt(a, [0, -ni, 0]), a;
      case "local-floor":
        return a;
      default:
        throw new Error("XRReferenceSpaceType not understood");
    }
  }
  endSession(e) {
    const t = this.sessions.get(e);
    t.immersive && t.baseLayer && (t.baseLayer[Qe].moveCanvasToWindow(!1), this.dispatchEvent("@@webxr-polyfill/vr-present-end", e)), t.ended = !0;
  }
  doesSessionSupportReferenceSpace(e, t) {
    const a = this.sessions.get(e);
    return a.ended ? !1 : a.enabledFeatures.has(t);
  }
  getViewSpaces(e) {
    if (e === "immersive-vr") {
      const t = Pe();
      for (let a = this.viewSpaces.length; a < t.numViews; ++a)
        this.viewSpaces[a] = new fs(a);
      return this.viewSpaces.length = t.numViews, this.viewSpaces;
    }
  }
  // get the current view and determine where on the quilt to render it. 
  getViewport(e, t, a, o, h) {
    if (h === void 0) {
      const u = this.sessions.get(e).baseLayer.context;
      o.x = 0, o.y = 0, o.width = u.drawingBufferWidth, o.height = u.drawingBufferHeight;
    } else {
      const d = Pe(), u = h % d.quiltWidth, m = Math.floor(h / d.quiltWidth);
      o.x = d.framebufferWidth / d.quiltWidth * u, o.y = d.framebufferHeight / d.quiltHeight * m, o.width = d.framebufferWidth / d.quiltWidth, o.height = d.framebufferHeight / d.quiltHeight;
    }
    return !0;
  }
  getProjectionMatrix(e, t) {
    return t === void 0 ? this.inlineProjectionMatrix : this.LookingGlassProjectionMatrices[t] || ze();
  }
  getBasePoseMatrix() {
    return this.basePoseMatrix;
  }
  getBaseViewMatrix() {
    return this.inlineInverseViewMatrix;
  }
  _getViewMatrixByIndex(e) {
    return this.LookingGlassInverseViewMatrices[e] = this.LookingGlassInverseViewMatrices[e] || ze();
  }
  getInputSources() {
    return [];
  }
  getInputPose(e, t, a) {
    return null;
  }
  onWindowResize() {
  }
};
ye(et, "instance", null);
let Lt = et, As = 0;
class us {
  constructor(e, t) {
    ye(this, "mode");
    ye(this, "immersive");
    ye(this, "id");
    ye(this, "baseLayer");
    ye(this, "inlineVerticalFieldOfView");
    ye(this, "ended");
    ye(this, "enabledFeatures");
    this.mode = e, this.immersive = e === "immersive-vr" || e === "immersive-ar", this.id = ++As, this.baseLayer = null, this.inlineVerticalFieldOfView = Math.PI * 0.5, this.ended = !1, this.enabledFeatures = t;
  }
}
class fs extends rt {
  constructor(t) {
    super();
    ye(this, "viewIndex");
    this.viewIndex = t;
  }
  get eye() {
    return "none";
  }
  _onPoseUpdate(t) {
    this._inverseBaseMatrix = t._getViewMatrixByIndex(this.viewIndex);
  }
}
class hr extends Hn {
  constructor(t) {
    super();
    ye(this, "vrButton");
    ye(this, "device");
    /** true when previewing on Looking Glass */
    ye(this, "isPresenting", !1);
    Oi(t), this.loadPolyfill();
  }
  static async init(t) {
    new hr(t);
  }
  /**Load  the polyfill*/
  async loadPolyfill() {
    this.overrideDefaultVRButton(), console.warn('Looking Glass WebXR "polyfill" overriding native WebXR API.');
    for (const t in Et)
      this.global[t] = Et[t];
    this.global.XRWebGLLayer = ds, this.injected = !0, this.device = new Lt(this.global), this.xr = new Hi(Promise.resolve(this.device)), Object.defineProperty(this.global.navigator, "xr", {
      value: this.xr,
      configurable: !0
    });
  }
  /** If a "Enter VR" button exists, let's override it with our own copy */
  async overrideDefaultVRButton() {
    this.vrButton = await ps("VRButton"), this.vrButton && this.device ? (this.device.addEventListener("@@webxr-polyfill/vr-present-start", () => {
      this.isPresenting = !0, this.updateVRButtonUI();
    }), this.device.addEventListener("@@webxr-polyfill/vr-present-end", () => {
      this.isPresenting = !1, this.updateVRButtonUI();
    }), this.vrButton.addEventListener("click", (t) => {
      this.updateVRButtonUI();
    }), this.updateVRButtonUI()) : console.warn("Unable to find VRButton");
  }
  /** Refresh the current state of the VRButton */
  async updateVRButtonUI() {
    if (this.vrButton) {
      await ms(100), this.isPresenting ? this.vrButton.innerHTML = "EXIT LOOKING GLASS" : this.vrButton.innerHTML = "CAST TO LOOKING GLASS";
      const t = 220;
      this.vrButton.style.width = `${t}px`, this.vrButton.style.left = `calc(50% - ${t / 2}px)`;
    }
  }
  update(t) {
    Oi(t);
  }
}
async function ps(i) {
  return new Promise((e) => {
    const t = new MutationObserver(function(a) {
      a.forEach(function(o) {
        o.addedNodes.forEach(function(h) {
          const d = h;
          d.id === i && (e(d), t.disconnect());
        });
      });
    });
    t.observe(document.body, { subtree: !1, childList: !0 }), setTimeout(() => {
      t.disconnect(), e(null);
    }, 5e3);
  });
}
function ms(i) {
  return new Promise((e) => setTimeout(e, i));
}
const Ss = Pe();
export {
  Ss as LookingGlassConfig,
  hr as LookingGlassWebXRPolyfill
};
