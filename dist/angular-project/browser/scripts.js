/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a, b) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, true) : function(a2) {
    if (!a2.document)
      throw new Error("jQuery requires a window with a document");
    return b(a2);
  } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
  "use strict";
  var c = [], d = a.document, e = Object.getPrototypeOf, f = c.slice, g = c.concat, h = c.push, i = c.indexOf, j = {}, k = j.toString, l = j.hasOwnProperty, m = l.toString, n = m.call(Object), o = {};
  function p(a2, b2) {
    b2 = b2 || d;
    var c2 = b2.createElement("script");
    c2.text = a2, b2.head.appendChild(c2).parentNode.removeChild(c2);
  }
  var q = "3.2.1", r = function(a2, b2) {
    return new r.fn.init(a2, b2);
  }, s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, t = /^-ms-/, u = /-([a-z])/g, v = function(a2, b2) {
    return b2.toUpperCase();
  };
  r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function() {
    return f.call(this);
  }, get: function(a2) {
    return null == a2 ? f.call(this) : a2 < 0 ? this[a2 + this.length] : this[a2];
  }, pushStack: function(a2) {
    var b2 = r.merge(this.constructor(), a2);
    return b2.prevObject = this, b2;
  }, each: function(a2) {
    return r.each(this, a2);
  }, map: function(a2) {
    return this.pushStack(r.map(this, function(b2, c2) {
      return a2.call(b2, c2, b2);
    }));
  }, slice: function() {
    return this.pushStack(f.apply(this, arguments));
  }, first: function() {
    return this.eq(0);
  }, last: function() {
    return this.eq(-1);
  }, eq: function(a2) {
    var b2 = this.length, c2 = +a2 + (a2 < 0 ? b2 : 0);
    return this.pushStack(c2 >= 0 && c2 < b2 ? [this[c2]] : []);
  }, end: function() {
    return this.prevObject || this.constructor();
  }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function() {
    var a2, b2, c2, d2, e2, f2, g2 = arguments[0] || {}, h2 = 1, i2 = arguments.length, j2 = false;
    for ("boolean" == typeof g2 && (j2 = g2, g2 = arguments[h2] || {}, h2++), "object" == typeof g2 || r.isFunction(g2) || (g2 = {}), h2 === i2 && (g2 = this, h2--); h2 < i2; h2++)
      if (null != (a2 = arguments[h2]))
        for (b2 in a2)
          c2 = g2[b2], d2 = a2[b2], g2 !== d2 && (j2 && d2 && (r.isPlainObject(d2) || (e2 = Array.isArray(d2))) ? (e2 ? (e2 = false, f2 = c2 && Array.isArray(c2) ? c2 : []) : f2 = c2 && r.isPlainObject(c2) ? c2 : {}, g2[b2] = r.extend(j2, f2, d2)) : void 0 !== d2 && (g2[b2] = d2));
    return g2;
  }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: true, error: function(a2) {
    throw new Error(a2);
  }, noop: function() {
  }, isFunction: function(a2) {
    return "function" === r.type(a2);
  }, isWindow: function(a2) {
    return null != a2 && a2 === a2.window;
  }, isNumeric: function(a2) {
    var b2 = r.type(a2);
    return ("number" === b2 || "string" === b2) && !isNaN(a2 - parseFloat(a2));
  }, isPlainObject: function(a2) {
    var b2, c2;
    return !(!a2 || "[object Object]" !== k.call(a2)) && (!(b2 = e(a2)) || (c2 = l.call(b2, "constructor") && b2.constructor, "function" == typeof c2 && m.call(c2) === n));
  }, isEmptyObject: function(a2) {
    var b2;
    for (b2 in a2)
      return false;
    return true;
  }, type: function(a2) {
    return null == a2 ? a2 + "" : "object" == typeof a2 || "function" == typeof a2 ? j[k.call(a2)] || "object" : typeof a2;
  }, globalEval: function(a2) {
    p(a2);
  }, camelCase: function(a2) {
    return a2.replace(t, "ms-").replace(u, v);
  }, each: function(a2, b2) {
    var c2, d2 = 0;
    if (w(a2)) {
      for (c2 = a2.length; d2 < c2; d2++)
        if (b2.call(a2[d2], d2, a2[d2]) === false)
          break;
    } else
      for (d2 in a2)
        if (b2.call(a2[d2], d2, a2[d2]) === false)
          break;
    return a2;
  }, trim: function(a2) {
    return null == a2 ? "" : (a2 + "").replace(s, "");
  }, makeArray: function(a2, b2) {
    var c2 = b2 || [];
    return null != a2 && (w(Object(a2)) ? r.merge(c2, "string" == typeof a2 ? [a2] : a2) : h.call(c2, a2)), c2;
  }, inArray: function(a2, b2, c2) {
    return null == b2 ? -1 : i.call(b2, a2, c2);
  }, merge: function(a2, b2) {
    for (var c2 = +b2.length, d2 = 0, e2 = a2.length; d2 < c2; d2++)
      a2[e2++] = b2[d2];
    return a2.length = e2, a2;
  }, grep: function(a2, b2, c2) {
    for (var d2, e2 = [], f2 = 0, g2 = a2.length, h2 = !c2; f2 < g2; f2++)
      d2 = !b2(a2[f2], f2), d2 !== h2 && e2.push(a2[f2]);
    return e2;
  }, map: function(a2, b2, c2) {
    var d2, e2, f2 = 0, h2 = [];
    if (w(a2))
      for (d2 = a2.length; f2 < d2; f2++)
        e2 = b2(a2[f2], f2, c2), null != e2 && h2.push(e2);
    else
      for (f2 in a2)
        e2 = b2(a2[f2], f2, c2), null != e2 && h2.push(e2);
    return g.apply([], h2);
  }, guid: 1, proxy: function(a2, b2) {
    var c2, d2, e2;
    if ("string" == typeof b2 && (c2 = a2[b2], b2 = a2, a2 = c2), r.isFunction(a2))
      return d2 = f.call(arguments, 2), e2 = function() {
        return a2.apply(b2 || this, d2.concat(f.call(arguments)));
      }, e2.guid = a2.guid = a2.guid || r.guid++, e2;
  }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a2, b2) {
    j["[object " + b2 + "]"] = b2.toLowerCase();
  });
  function w(a2) {
    var b2 = !!a2 && "length" in a2 && a2.length, c2 = r.type(a2);
    return "function" !== c2 && !r.isWindow(a2) && ("array" === c2 || 0 === b2 || "number" == typeof b2 && b2 > 0 && b2 - 1 in a2);
  }
  var x = function(a2) {
    var b2, c2, d2, e2, f2, g2, h2, i2, j2, k2, l2, m2, n2, o2, p2, q2, r2, s2, t2, u2 = "sizzle" + 1 * /* @__PURE__ */ new Date(), v2 = a2.document, w2 = 0, x2 = 0, y2 = ha2(), z2 = ha2(), A2 = ha2(), B2 = function(a3, b3) {
      return a3 === b3 && (l2 = true), 0;
    }, C2 = {}.hasOwnProperty, D2 = [], E2 = D2.pop, F2 = D2.push, G2 = D2.push, H2 = D2.slice, I2 = function(a3, b3) {
      for (var c3 = 0, d3 = a3.length; c3 < d3; c3++)
        if (a3[c3] === b3)
          return c3;
      return -1;
    }, J2 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", K2 = "[\\x20\\t\\r\\n\\f]", L2 = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", M2 = "\\[" + K2 + "*(" + L2 + ")(?:" + K2 + "*([*^$|!~]?=)" + K2 + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + L2 + "))|)" + K2 + "*\\]", N2 = ":(" + L2 + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + M2 + ")*)|.*)\\)|)", O2 = new RegExp(K2 + "+", "g"), P2 = new RegExp("^" + K2 + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K2 + "+$", "g"), Q2 = new RegExp("^" + K2 + "*," + K2 + "*"), R2 = new RegExp("^" + K2 + "*([>+~]|" + K2 + ")" + K2 + "*"), S2 = new RegExp("=" + K2 + `*([^\\]'"]*?)` + K2 + "*\\]", "g"), T2 = new RegExp(N2), U2 = new RegExp("^" + L2 + "$"), V2 = { ID: new RegExp("^#(" + L2 + ")"), CLASS: new RegExp("^\\.(" + L2 + ")"), TAG: new RegExp("^(" + L2 + "|[*])"), ATTR: new RegExp("^" + M2), PSEUDO: new RegExp("^" + N2), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K2 + "*(even|odd|(([+-]|)(\\d*)n|)" + K2 + "*(?:([+-]|)" + K2 + "*(\\d+)|))" + K2 + "*\\)|)", "i"), bool: new RegExp("^(?:" + J2 + ")$", "i"), needsContext: new RegExp("^" + K2 + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K2 + "*((?:-\\d)?\\d*)" + K2 + "*\\)|)(?=[^-]|$)", "i") }, W2 = /^(?:input|select|textarea|button)$/i, X2 = /^h\d$/i, Y2 = /^[^{]+\{\s*\[native \w/, Z2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $2 = /[+~]/, _2 = new RegExp("\\\\([\\da-f]{1,6}" + K2 + "?|(" + K2 + ")|.)", "ig"), aa2 = function(a3, b3, c3) {
      var d3 = "0x" + b3 - 65536;
      return d3 !== d3 || c3 ? b3 : d3 < 0 ? String.fromCharCode(d3 + 65536) : String.fromCharCode(d3 >> 10 | 55296, 1023 & d3 | 56320);
    }, ba2 = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ca2 = function(a3, b3) {
      return b3 ? "\0" === a3 ? "\uFFFD" : a3.slice(0, -1) + "\\" + a3.charCodeAt(a3.length - 1).toString(16) + " " : "\\" + a3;
    }, da2 = function() {
      m2();
    }, ea2 = ta2(function(a3) {
      return a3.disabled === true && ("form" in a3 || "label" in a3);
    }, { dir: "parentNode", next: "legend" });
    try {
      G2.apply(D2 = H2.call(v2.childNodes), v2.childNodes), D2[v2.childNodes.length].nodeType;
    } catch (fa2) {
      G2 = { apply: D2.length ? function(a3, b3) {
        F2.apply(a3, H2.call(b3));
      } : function(a3, b3) {
        var c3 = a3.length, d3 = 0;
        while (a3[c3++] = b3[d3++])
          ;
        a3.length = c3 - 1;
      } };
    }
    function ga2(a3, b3, d3, e3) {
      var f3, h3, j3, k3, l3, o3, r3, s3 = b3 && b3.ownerDocument, w3 = b3 ? b3.nodeType : 9;
      if (d3 = d3 || [], "string" != typeof a3 || !a3 || 1 !== w3 && 9 !== w3 && 11 !== w3)
        return d3;
      if (!e3 && ((b3 ? b3.ownerDocument || b3 : v2) !== n2 && m2(b3), b3 = b3 || n2, p2)) {
        if (11 !== w3 && (l3 = Z2.exec(a3)))
          if (f3 = l3[1]) {
            if (9 === w3) {
              if (!(j3 = b3.getElementById(f3)))
                return d3;
              if (j3.id === f3)
                return d3.push(j3), d3;
            } else if (s3 && (j3 = s3.getElementById(f3)) && t2(b3, j3) && j3.id === f3)
              return d3.push(j3), d3;
          } else {
            if (l3[2])
              return G2.apply(d3, b3.getElementsByTagName(a3)), d3;
            if ((f3 = l3[3]) && c2.getElementsByClassName && b3.getElementsByClassName)
              return G2.apply(d3, b3.getElementsByClassName(f3)), d3;
          }
        if (c2.qsa && !A2[a3 + " "] && (!q2 || !q2.test(a3))) {
          if (1 !== w3)
            s3 = b3, r3 = a3;
          else if ("object" !== b3.nodeName.toLowerCase()) {
            (k3 = b3.getAttribute("id")) ? k3 = k3.replace(ba2, ca2) : b3.setAttribute("id", k3 = u2), o3 = g2(a3), h3 = o3.length;
            while (h3--)
              o3[h3] = "#" + k3 + " " + sa2(o3[h3]);
            r3 = o3.join(","), s3 = $2.test(a3) && qa2(b3.parentNode) || b3;
          }
          if (r3)
            try {
              return G2.apply(d3, s3.querySelectorAll(r3)), d3;
            } catch (x3) {
            } finally {
              k3 === u2 && b3.removeAttribute("id");
            }
        }
      }
      return i2(a3.replace(P2, "$1"), b3, d3, e3);
    }
    function ha2() {
      var a3 = [];
      function b3(c3, e3) {
        return a3.push(c3 + " ") > d2.cacheLength && delete b3[a3.shift()], b3[c3 + " "] = e3;
      }
      return b3;
    }
    function ia2(a3) {
      return a3[u2] = true, a3;
    }
    function ja2(a3) {
      var b3 = n2.createElement("fieldset");
      try {
        return !!a3(b3);
      } catch (c3) {
        return false;
      } finally {
        b3.parentNode && b3.parentNode.removeChild(b3), b3 = null;
      }
    }
    function ka2(a3, b3) {
      var c3 = a3.split("|"), e3 = c3.length;
      while (e3--)
        d2.attrHandle[c3[e3]] = b3;
    }
    function la2(a3, b3) {
      var c3 = b3 && a3, d3 = c3 && 1 === a3.nodeType && 1 === b3.nodeType && a3.sourceIndex - b3.sourceIndex;
      if (d3)
        return d3;
      if (c3) {
        while (c3 = c3.nextSibling)
          if (c3 === b3)
            return -1;
      }
      return a3 ? 1 : -1;
    }
    function ma2(a3) {
      return function(b3) {
        var c3 = b3.nodeName.toLowerCase();
        return "input" === c3 && b3.type === a3;
      };
    }
    function na2(a3) {
      return function(b3) {
        var c3 = b3.nodeName.toLowerCase();
        return ("input" === c3 || "button" === c3) && b3.type === a3;
      };
    }
    function oa2(a3) {
      return function(b3) {
        return "form" in b3 ? b3.parentNode && b3.disabled === false ? "label" in b3 ? "label" in b3.parentNode ? b3.parentNode.disabled === a3 : b3.disabled === a3 : b3.isDisabled === a3 || b3.isDisabled !== !a3 && ea2(b3) === a3 : b3.disabled === a3 : "label" in b3 && b3.disabled === a3;
      };
    }
    function pa2(a3) {
      return ia2(function(b3) {
        return b3 = +b3, ia2(function(c3, d3) {
          var e3, f3 = a3([], c3.length, b3), g3 = f3.length;
          while (g3--)
            c3[e3 = f3[g3]] && (c3[e3] = !(d3[e3] = c3[e3]));
        });
      });
    }
    function qa2(a3) {
      return a3 && "undefined" != typeof a3.getElementsByTagName && a3;
    }
    c2 = ga2.support = {}, f2 = ga2.isXML = function(a3) {
      var b3 = a3 && (a3.ownerDocument || a3).documentElement;
      return !!b3 && "HTML" !== b3.nodeName;
    }, m2 = ga2.setDocument = function(a3) {
      var b3, e3, g3 = a3 ? a3.ownerDocument || a3 : v2;
      return g3 !== n2 && 9 === g3.nodeType && g3.documentElement ? (n2 = g3, o2 = n2.documentElement, p2 = !f2(n2), v2 !== n2 && (e3 = n2.defaultView) && e3.top !== e3 && (e3.addEventListener ? e3.addEventListener("unload", da2, false) : e3.attachEvent && e3.attachEvent("onunload", da2)), c2.attributes = ja2(function(a4) {
        return a4.className = "i", !a4.getAttribute("className");
      }), c2.getElementsByTagName = ja2(function(a4) {
        return a4.appendChild(n2.createComment("")), !a4.getElementsByTagName("*").length;
      }), c2.getElementsByClassName = Y2.test(n2.getElementsByClassName), c2.getById = ja2(function(a4) {
        return o2.appendChild(a4).id = u2, !n2.getElementsByName || !n2.getElementsByName(u2).length;
      }), c2.getById ? (d2.filter.ID = function(a4) {
        var b4 = a4.replace(_2, aa2);
        return function(a5) {
          return a5.getAttribute("id") === b4;
        };
      }, d2.find.ID = function(a4, b4) {
        if ("undefined" != typeof b4.getElementById && p2) {
          var c3 = b4.getElementById(a4);
          return c3 ? [c3] : [];
        }
      }) : (d2.filter.ID = function(a4) {
        var b4 = a4.replace(_2, aa2);
        return function(a5) {
          var c3 = "undefined" != typeof a5.getAttributeNode && a5.getAttributeNode("id");
          return c3 && c3.value === b4;
        };
      }, d2.find.ID = function(a4, b4) {
        if ("undefined" != typeof b4.getElementById && p2) {
          var c3, d3, e4, f3 = b4.getElementById(a4);
          if (f3) {
            if (c3 = f3.getAttributeNode("id"), c3 && c3.value === a4)
              return [f3];
            e4 = b4.getElementsByName(a4), d3 = 0;
            while (f3 = e4[d3++])
              if (c3 = f3.getAttributeNode("id"), c3 && c3.value === a4)
                return [f3];
          }
          return [];
        }
      }), d2.find.TAG = c2.getElementsByTagName ? function(a4, b4) {
        return "undefined" != typeof b4.getElementsByTagName ? b4.getElementsByTagName(a4) : c2.qsa ? b4.querySelectorAll(a4) : void 0;
      } : function(a4, b4) {
        var c3, d3 = [], e4 = 0, f3 = b4.getElementsByTagName(a4);
        if ("*" === a4) {
          while (c3 = f3[e4++])
            1 === c3.nodeType && d3.push(c3);
          return d3;
        }
        return f3;
      }, d2.find.CLASS = c2.getElementsByClassName && function(a4, b4) {
        if ("undefined" != typeof b4.getElementsByClassName && p2)
          return b4.getElementsByClassName(a4);
      }, r2 = [], q2 = [], (c2.qsa = Y2.test(n2.querySelectorAll)) && (ja2(function(a4) {
        o2.appendChild(a4).innerHTML = "<a id='" + u2 + "'></a><select id='" + u2 + "-\r\\' msallowcapture=''><option selected=''></option></select>", a4.querySelectorAll("[msallowcapture^='']").length && q2.push("[*^$]=" + K2 + `*(?:''|"")`), a4.querySelectorAll("[selected]").length || q2.push("\\[" + K2 + "*(?:value|" + J2 + ")"), a4.querySelectorAll("[id~=" + u2 + "-]").length || q2.push("~="), a4.querySelectorAll(":checked").length || q2.push(":checked"), a4.querySelectorAll("a#" + u2 + "+*").length || q2.push(".#.+[+~]");
      }), ja2(function(a4) {
        a4.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var b4 = n2.createElement("input");
        b4.setAttribute("type", "hidden"), a4.appendChild(b4).setAttribute("name", "D"), a4.querySelectorAll("[name=d]").length && q2.push("name" + K2 + "*[*^$|!~]?="), 2 !== a4.querySelectorAll(":enabled").length && q2.push(":enabled", ":disabled"), o2.appendChild(a4).disabled = true, 2 !== a4.querySelectorAll(":disabled").length && q2.push(":enabled", ":disabled"), a4.querySelectorAll("*,:x"), q2.push(",.*:");
      })), (c2.matchesSelector = Y2.test(s2 = o2.matches || o2.webkitMatchesSelector || o2.mozMatchesSelector || o2.oMatchesSelector || o2.msMatchesSelector)) && ja2(function(a4) {
        c2.disconnectedMatch = s2.call(a4, "*"), s2.call(a4, "[s!='']:x"), r2.push("!=", N2);
      }), q2 = q2.length && new RegExp(q2.join("|")), r2 = r2.length && new RegExp(r2.join("|")), b3 = Y2.test(o2.compareDocumentPosition), t2 = b3 || Y2.test(o2.contains) ? function(a4, b4) {
        var c3 = 9 === a4.nodeType ? a4.documentElement : a4, d3 = b4 && b4.parentNode;
        return a4 === d3 || !(!d3 || 1 !== d3.nodeType || !(c3.contains ? c3.contains(d3) : a4.compareDocumentPosition && 16 & a4.compareDocumentPosition(d3)));
      } : function(a4, b4) {
        if (b4) {
          while (b4 = b4.parentNode)
            if (b4 === a4)
              return true;
        }
        return false;
      }, B2 = b3 ? function(a4, b4) {
        if (a4 === b4)
          return l2 = true, 0;
        var d3 = !a4.compareDocumentPosition - !b4.compareDocumentPosition;
        return d3 ? d3 : (d3 = (a4.ownerDocument || a4) === (b4.ownerDocument || b4) ? a4.compareDocumentPosition(b4) : 1, 1 & d3 || !c2.sortDetached && b4.compareDocumentPosition(a4) === d3 ? a4 === n2 || a4.ownerDocument === v2 && t2(v2, a4) ? -1 : b4 === n2 || b4.ownerDocument === v2 && t2(v2, b4) ? 1 : k2 ? I2(k2, a4) - I2(k2, b4) : 0 : 4 & d3 ? -1 : 1);
      } : function(a4, b4) {
        if (a4 === b4)
          return l2 = true, 0;
        var c3, d3 = 0, e4 = a4.parentNode, f3 = b4.parentNode, g4 = [a4], h3 = [b4];
        if (!e4 || !f3)
          return a4 === n2 ? -1 : b4 === n2 ? 1 : e4 ? -1 : f3 ? 1 : k2 ? I2(k2, a4) - I2(k2, b4) : 0;
        if (e4 === f3)
          return la2(a4, b4);
        c3 = a4;
        while (c3 = c3.parentNode)
          g4.unshift(c3);
        c3 = b4;
        while (c3 = c3.parentNode)
          h3.unshift(c3);
        while (g4[d3] === h3[d3])
          d3++;
        return d3 ? la2(g4[d3], h3[d3]) : g4[d3] === v2 ? -1 : h3[d3] === v2 ? 1 : 0;
      }, n2) : n2;
    }, ga2.matches = function(a3, b3) {
      return ga2(a3, null, null, b3);
    }, ga2.matchesSelector = function(a3, b3) {
      if ((a3.ownerDocument || a3) !== n2 && m2(a3), b3 = b3.replace(S2, "='$1']"), c2.matchesSelector && p2 && !A2[b3 + " "] && (!r2 || !r2.test(b3)) && (!q2 || !q2.test(b3)))
        try {
          var d3 = s2.call(a3, b3);
          if (d3 || c2.disconnectedMatch || a3.document && 11 !== a3.document.nodeType)
            return d3;
        } catch (e3) {
        }
      return ga2(b3, n2, null, [a3]).length > 0;
    }, ga2.contains = function(a3, b3) {
      return (a3.ownerDocument || a3) !== n2 && m2(a3), t2(a3, b3);
    }, ga2.attr = function(a3, b3) {
      (a3.ownerDocument || a3) !== n2 && m2(a3);
      var e3 = d2.attrHandle[b3.toLowerCase()], f3 = e3 && C2.call(d2.attrHandle, b3.toLowerCase()) ? e3(a3, b3, !p2) : void 0;
      return void 0 !== f3 ? f3 : c2.attributes || !p2 ? a3.getAttribute(b3) : (f3 = a3.getAttributeNode(b3)) && f3.specified ? f3.value : null;
    }, ga2.escape = function(a3) {
      return (a3 + "").replace(ba2, ca2);
    }, ga2.error = function(a3) {
      throw new Error("Syntax error, unrecognized expression: " + a3);
    }, ga2.uniqueSort = function(a3) {
      var b3, d3 = [], e3 = 0, f3 = 0;
      if (l2 = !c2.detectDuplicates, k2 = !c2.sortStable && a3.slice(0), a3.sort(B2), l2) {
        while (b3 = a3[f3++])
          b3 === a3[f3] && (e3 = d3.push(f3));
        while (e3--)
          a3.splice(d3[e3], 1);
      }
      return k2 = null, a3;
    }, e2 = ga2.getText = function(a3) {
      var b3, c3 = "", d3 = 0, f3 = a3.nodeType;
      if (f3) {
        if (1 === f3 || 9 === f3 || 11 === f3) {
          if ("string" == typeof a3.textContent)
            return a3.textContent;
          for (a3 = a3.firstChild; a3; a3 = a3.nextSibling)
            c3 += e2(a3);
        } else if (3 === f3 || 4 === f3)
          return a3.nodeValue;
      } else
        while (b3 = a3[d3++])
          c3 += e2(b3);
      return c3;
    }, d2 = ga2.selectors = { cacheLength: 50, createPseudo: ia2, match: V2, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(a3) {
      return a3[1] = a3[1].replace(_2, aa2), a3[3] = (a3[3] || a3[4] || a3[5] || "").replace(_2, aa2), "~=" === a3[2] && (a3[3] = " " + a3[3] + " "), a3.slice(0, 4);
    }, CHILD: function(a3) {
      return a3[1] = a3[1].toLowerCase(), "nth" === a3[1].slice(0, 3) ? (a3[3] || ga2.error(a3[0]), a3[4] = +(a3[4] ? a3[5] + (a3[6] || 1) : 2 * ("even" === a3[3] || "odd" === a3[3])), a3[5] = +(a3[7] + a3[8] || "odd" === a3[3])) : a3[3] && ga2.error(a3[0]), a3;
    }, PSEUDO: function(a3) {
      var b3, c3 = !a3[6] && a3[2];
      return V2.CHILD.test(a3[0]) ? null : (a3[3] ? a3[2] = a3[4] || a3[5] || "" : c3 && T2.test(c3) && (b3 = g2(c3, true)) && (b3 = c3.indexOf(")", c3.length - b3) - c3.length) && (a3[0] = a3[0].slice(0, b3), a3[2] = c3.slice(0, b3)), a3.slice(0, 3));
    } }, filter: { TAG: function(a3) {
      var b3 = a3.replace(_2, aa2).toLowerCase();
      return "*" === a3 ? function() {
        return true;
      } : function(a4) {
        return a4.nodeName && a4.nodeName.toLowerCase() === b3;
      };
    }, CLASS: function(a3) {
      var b3 = y2[a3 + " "];
      return b3 || (b3 = new RegExp("(^|" + K2 + ")" + a3 + "(" + K2 + "|$)")) && y2(a3, function(a4) {
        return b3.test("string" == typeof a4.className && a4.className || "undefined" != typeof a4.getAttribute && a4.getAttribute("class") || "");
      });
    }, ATTR: function(a3, b3, c3) {
      return function(d3) {
        var e3 = ga2.attr(d3, a3);
        return null == e3 ? "!=" === b3 : !b3 || (e3 += "", "=" === b3 ? e3 === c3 : "!=" === b3 ? e3 !== c3 : "^=" === b3 ? c3 && 0 === e3.indexOf(c3) : "*=" === b3 ? c3 && e3.indexOf(c3) > -1 : "$=" === b3 ? c3 && e3.slice(-c3.length) === c3 : "~=" === b3 ? (" " + e3.replace(O2, " ") + " ").indexOf(c3) > -1 : "|=" === b3 && (e3 === c3 || e3.slice(0, c3.length + 1) === c3 + "-"));
      };
    }, CHILD: function(a3, b3, c3, d3, e3) {
      var f3 = "nth" !== a3.slice(0, 3), g3 = "last" !== a3.slice(-4), h3 = "of-type" === b3;
      return 1 === d3 && 0 === e3 ? function(a4) {
        return !!a4.parentNode;
      } : function(b4, c4, i3) {
        var j3, k3, l3, m3, n3, o3, p3 = f3 !== g3 ? "nextSibling" : "previousSibling", q3 = b4.parentNode, r3 = h3 && b4.nodeName.toLowerCase(), s3 = !i3 && !h3, t3 = false;
        if (q3) {
          if (f3) {
            while (p3) {
              m3 = b4;
              while (m3 = m3[p3])
                if (h3 ? m3.nodeName.toLowerCase() === r3 : 1 === m3.nodeType)
                  return false;
              o3 = p3 = "only" === a3 && !o3 && "nextSibling";
            }
            return true;
          }
          if (o3 = [g3 ? q3.firstChild : q3.lastChild], g3 && s3) {
            m3 = q3, l3 = m3[u2] || (m3[u2] = {}), k3 = l3[m3.uniqueID] || (l3[m3.uniqueID] = {}), j3 = k3[a3] || [], n3 = j3[0] === w2 && j3[1], t3 = n3 && j3[2], m3 = n3 && q3.childNodes[n3];
            while (m3 = ++n3 && m3 && m3[p3] || (t3 = n3 = 0) || o3.pop())
              if (1 === m3.nodeType && ++t3 && m3 === b4) {
                k3[a3] = [w2, n3, t3];
                break;
              }
          } else if (s3 && (m3 = b4, l3 = m3[u2] || (m3[u2] = {}), k3 = l3[m3.uniqueID] || (l3[m3.uniqueID] = {}), j3 = k3[a3] || [], n3 = j3[0] === w2 && j3[1], t3 = n3), t3 === false) {
            while (m3 = ++n3 && m3 && m3[p3] || (t3 = n3 = 0) || o3.pop())
              if ((h3 ? m3.nodeName.toLowerCase() === r3 : 1 === m3.nodeType) && ++t3 && (s3 && (l3 = m3[u2] || (m3[u2] = {}), k3 = l3[m3.uniqueID] || (l3[m3.uniqueID] = {}), k3[a3] = [w2, t3]), m3 === b4))
                break;
          }
          return t3 -= e3, t3 === d3 || t3 % d3 === 0 && t3 / d3 >= 0;
        }
      };
    }, PSEUDO: function(a3, b3) {
      var c3, e3 = d2.pseudos[a3] || d2.setFilters[a3.toLowerCase()] || ga2.error("unsupported pseudo: " + a3);
      return e3[u2] ? e3(b3) : e3.length > 1 ? (c3 = [a3, a3, "", b3], d2.setFilters.hasOwnProperty(a3.toLowerCase()) ? ia2(function(a4, c4) {
        var d3, f3 = e3(a4, b3), g3 = f3.length;
        while (g3--)
          d3 = I2(a4, f3[g3]), a4[d3] = !(c4[d3] = f3[g3]);
      }) : function(a4) {
        return e3(a4, 0, c3);
      }) : e3;
    } }, pseudos: { not: ia2(function(a3) {
      var b3 = [], c3 = [], d3 = h2(a3.replace(P2, "$1"));
      return d3[u2] ? ia2(function(a4, b4, c4, e3) {
        var f3, g3 = d3(a4, null, e3, []), h3 = a4.length;
        while (h3--)
          (f3 = g3[h3]) && (a4[h3] = !(b4[h3] = f3));
      }) : function(a4, e3, f3) {
        return b3[0] = a4, d3(b3, null, f3, c3), b3[0] = null, !c3.pop();
      };
    }), has: ia2(function(a3) {
      return function(b3) {
        return ga2(a3, b3).length > 0;
      };
    }), contains: ia2(function(a3) {
      return a3 = a3.replace(_2, aa2), function(b3) {
        return (b3.textContent || b3.innerText || e2(b3)).indexOf(a3) > -1;
      };
    }), lang: ia2(function(a3) {
      return U2.test(a3 || "") || ga2.error("unsupported lang: " + a3), a3 = a3.replace(_2, aa2).toLowerCase(), function(b3) {
        var c3;
        do
          if (c3 = p2 ? b3.lang : b3.getAttribute("xml:lang") || b3.getAttribute("lang"))
            return c3 = c3.toLowerCase(), c3 === a3 || 0 === c3.indexOf(a3 + "-");
        while ((b3 = b3.parentNode) && 1 === b3.nodeType);
        return false;
      };
    }), target: function(b3) {
      var c3 = a2.location && a2.location.hash;
      return c3 && c3.slice(1) === b3.id;
    }, root: function(a3) {
      return a3 === o2;
    }, focus: function(a3) {
      return a3 === n2.activeElement && (!n2.hasFocus || n2.hasFocus()) && !!(a3.type || a3.href || ~a3.tabIndex);
    }, enabled: oa2(false), disabled: oa2(true), checked: function(a3) {
      var b3 = a3.nodeName.toLowerCase();
      return "input" === b3 && !!a3.checked || "option" === b3 && !!a3.selected;
    }, selected: function(a3) {
      return a3.parentNode && a3.parentNode.selectedIndex, a3.selected === true;
    }, empty: function(a3) {
      for (a3 = a3.firstChild; a3; a3 = a3.nextSibling)
        if (a3.nodeType < 6)
          return false;
      return true;
    }, parent: function(a3) {
      return !d2.pseudos.empty(a3);
    }, header: function(a3) {
      return X2.test(a3.nodeName);
    }, input: function(a3) {
      return W2.test(a3.nodeName);
    }, button: function(a3) {
      var b3 = a3.nodeName.toLowerCase();
      return "input" === b3 && "button" === a3.type || "button" === b3;
    }, text: function(a3) {
      var b3;
      return "input" === a3.nodeName.toLowerCase() && "text" === a3.type && (null == (b3 = a3.getAttribute("type")) || "text" === b3.toLowerCase());
    }, first: pa2(function() {
      return [0];
    }), last: pa2(function(a3, b3) {
      return [b3 - 1];
    }), eq: pa2(function(a3, b3, c3) {
      return [c3 < 0 ? c3 + b3 : c3];
    }), even: pa2(function(a3, b3) {
      for (var c3 = 0; c3 < b3; c3 += 2)
        a3.push(c3);
      return a3;
    }), odd: pa2(function(a3, b3) {
      for (var c3 = 1; c3 < b3; c3 += 2)
        a3.push(c3);
      return a3;
    }), lt: pa2(function(a3, b3, c3) {
      for (var d3 = c3 < 0 ? c3 + b3 : c3; --d3 >= 0; )
        a3.push(d3);
      return a3;
    }), gt: pa2(function(a3, b3, c3) {
      for (var d3 = c3 < 0 ? c3 + b3 : c3; ++d3 < b3; )
        a3.push(d3);
      return a3;
    }) } }, d2.pseudos.nth = d2.pseudos.eq;
    for (b2 in { radio: true, checkbox: true, file: true, password: true, image: true })
      d2.pseudos[b2] = ma2(b2);
    for (b2 in { submit: true, reset: true })
      d2.pseudos[b2] = na2(b2);
    function ra2() {
    }
    ra2.prototype = d2.filters = d2.pseudos, d2.setFilters = new ra2(), g2 = ga2.tokenize = function(a3, b3) {
      var c3, e3, f3, g3, h3, i3, j3, k3 = z2[a3 + " "];
      if (k3)
        return b3 ? 0 : k3.slice(0);
      h3 = a3, i3 = [], j3 = d2.preFilter;
      while (h3) {
        c3 && !(e3 = Q2.exec(h3)) || (e3 && (h3 = h3.slice(e3[0].length) || h3), i3.push(f3 = [])), c3 = false, (e3 = R2.exec(h3)) && (c3 = e3.shift(), f3.push({ value: c3, type: e3[0].replace(P2, " ") }), h3 = h3.slice(c3.length));
        for (g3 in d2.filter)
          !(e3 = V2[g3].exec(h3)) || j3[g3] && !(e3 = j3[g3](e3)) || (c3 = e3.shift(), f3.push({ value: c3, type: g3, matches: e3 }), h3 = h3.slice(c3.length));
        if (!c3)
          break;
      }
      return b3 ? h3.length : h3 ? ga2.error(a3) : z2(a3, i3).slice(0);
    };
    function sa2(a3) {
      for (var b3 = 0, c3 = a3.length, d3 = ""; b3 < c3; b3++)
        d3 += a3[b3].value;
      return d3;
    }
    function ta2(a3, b3, c3) {
      var d3 = b3.dir, e3 = b3.next, f3 = e3 || d3, g3 = c3 && "parentNode" === f3, h3 = x2++;
      return b3.first ? function(b4, c4, e4) {
        while (b4 = b4[d3])
          if (1 === b4.nodeType || g3)
            return a3(b4, c4, e4);
        return false;
      } : function(b4, c4, i3) {
        var j3, k3, l3, m3 = [w2, h3];
        if (i3) {
          while (b4 = b4[d3])
            if ((1 === b4.nodeType || g3) && a3(b4, c4, i3))
              return true;
        } else
          while (b4 = b4[d3])
            if (1 === b4.nodeType || g3)
              if (l3 = b4[u2] || (b4[u2] = {}), k3 = l3[b4.uniqueID] || (l3[b4.uniqueID] = {}), e3 && e3 === b4.nodeName.toLowerCase())
                b4 = b4[d3] || b4;
              else {
                if ((j3 = k3[f3]) && j3[0] === w2 && j3[1] === h3)
                  return m3[2] = j3[2];
                if (k3[f3] = m3, m3[2] = a3(b4, c4, i3))
                  return true;
              }
        return false;
      };
    }
    function ua2(a3) {
      return a3.length > 1 ? function(b3, c3, d3) {
        var e3 = a3.length;
        while (e3--)
          if (!a3[e3](b3, c3, d3))
            return false;
        return true;
      } : a3[0];
    }
    function va2(a3, b3, c3) {
      for (var d3 = 0, e3 = b3.length; d3 < e3; d3++)
        ga2(a3, b3[d3], c3);
      return c3;
    }
    function wa2(a3, b3, c3, d3, e3) {
      for (var f3, g3 = [], h3 = 0, i3 = a3.length, j3 = null != b3; h3 < i3; h3++)
        (f3 = a3[h3]) && (c3 && !c3(f3, d3, e3) || (g3.push(f3), j3 && b3.push(h3)));
      return g3;
    }
    function xa2(a3, b3, c3, d3, e3, f3) {
      return d3 && !d3[u2] && (d3 = xa2(d3)), e3 && !e3[u2] && (e3 = xa2(e3, f3)), ia2(function(f4, g3, h3, i3) {
        var j3, k3, l3, m3 = [], n3 = [], o3 = g3.length, p3 = f4 || va2(b3 || "*", h3.nodeType ? [h3] : h3, []), q3 = !a3 || !f4 && b3 ? p3 : wa2(p3, m3, a3, h3, i3), r3 = c3 ? e3 || (f4 ? a3 : o3 || d3) ? [] : g3 : q3;
        if (c3 && c3(q3, r3, h3, i3), d3) {
          j3 = wa2(r3, n3), d3(j3, [], h3, i3), k3 = j3.length;
          while (k3--)
            (l3 = j3[k3]) && (r3[n3[k3]] = !(q3[n3[k3]] = l3));
        }
        if (f4) {
          if (e3 || a3) {
            if (e3) {
              j3 = [], k3 = r3.length;
              while (k3--)
                (l3 = r3[k3]) && j3.push(q3[k3] = l3);
              e3(null, r3 = [], j3, i3);
            }
            k3 = r3.length;
            while (k3--)
              (l3 = r3[k3]) && (j3 = e3 ? I2(f4, l3) : m3[k3]) > -1 && (f4[j3] = !(g3[j3] = l3));
          }
        } else
          r3 = wa2(r3 === g3 ? r3.splice(o3, r3.length) : r3), e3 ? e3(null, g3, r3, i3) : G2.apply(g3, r3);
      });
    }
    function ya2(a3) {
      for (var b3, c3, e3, f3 = a3.length, g3 = d2.relative[a3[0].type], h3 = g3 || d2.relative[" "], i3 = g3 ? 1 : 0, k3 = ta2(function(a4) {
        return a4 === b3;
      }, h3, true), l3 = ta2(function(a4) {
        return I2(b3, a4) > -1;
      }, h3, true), m3 = [function(a4, c4, d3) {
        var e4 = !g3 && (d3 || c4 !== j2) || ((b3 = c4).nodeType ? k3(a4, c4, d3) : l3(a4, c4, d3));
        return b3 = null, e4;
      }]; i3 < f3; i3++)
        if (c3 = d2.relative[a3[i3].type])
          m3 = [ta2(ua2(m3), c3)];
        else {
          if (c3 = d2.filter[a3[i3].type].apply(null, a3[i3].matches), c3[u2]) {
            for (e3 = ++i3; e3 < f3; e3++)
              if (d2.relative[a3[e3].type])
                break;
            return xa2(i3 > 1 && ua2(m3), i3 > 1 && sa2(a3.slice(0, i3 - 1).concat({ value: " " === a3[i3 - 2].type ? "*" : "" })).replace(P2, "$1"), c3, i3 < e3 && ya2(a3.slice(i3, e3)), e3 < f3 && ya2(a3 = a3.slice(e3)), e3 < f3 && sa2(a3));
          }
          m3.push(c3);
        }
      return ua2(m3);
    }
    function za2(a3, b3) {
      var c3 = b3.length > 0, e3 = a3.length > 0, f3 = function(f4, g3, h3, i3, k3) {
        var l3, o3, q3, r3 = 0, s3 = "0", t3 = f4 && [], u3 = [], v3 = j2, x3 = f4 || e3 && d2.find.TAG("*", k3), y3 = w2 += null == v3 ? 1 : Math.random() || 0.1, z3 = x3.length;
        for (k3 && (j2 = g3 === n2 || g3 || k3); s3 !== z3 && null != (l3 = x3[s3]); s3++) {
          if (e3 && l3) {
            o3 = 0, g3 || l3.ownerDocument === n2 || (m2(l3), h3 = !p2);
            while (q3 = a3[o3++])
              if (q3(l3, g3 || n2, h3)) {
                i3.push(l3);
                break;
              }
            k3 && (w2 = y3);
          }
          c3 && ((l3 = !q3 && l3) && r3--, f4 && t3.push(l3));
        }
        if (r3 += s3, c3 && s3 !== r3) {
          o3 = 0;
          while (q3 = b3[o3++])
            q3(t3, u3, g3, h3);
          if (f4) {
            if (r3 > 0)
              while (s3--)
                t3[s3] || u3[s3] || (u3[s3] = E2.call(i3));
            u3 = wa2(u3);
          }
          G2.apply(i3, u3), k3 && !f4 && u3.length > 0 && r3 + b3.length > 1 && ga2.uniqueSort(i3);
        }
        return k3 && (w2 = y3, j2 = v3), t3;
      };
      return c3 ? ia2(f3) : f3;
    }
    return h2 = ga2.compile = function(a3, b3) {
      var c3, d3 = [], e3 = [], f3 = A2[a3 + " "];
      if (!f3) {
        b3 || (b3 = g2(a3)), c3 = b3.length;
        while (c3--)
          f3 = ya2(b3[c3]), f3[u2] ? d3.push(f3) : e3.push(f3);
        f3 = A2(a3, za2(e3, d3)), f3.selector = a3;
      }
      return f3;
    }, i2 = ga2.select = function(a3, b3, c3, e3) {
      var f3, i3, j3, k3, l3, m3 = "function" == typeof a3 && a3, n3 = !e3 && g2(a3 = m3.selector || a3);
      if (c3 = c3 || [], 1 === n3.length) {
        if (i3 = n3[0] = n3[0].slice(0), i3.length > 2 && "ID" === (j3 = i3[0]).type && 9 === b3.nodeType && p2 && d2.relative[i3[1].type]) {
          if (b3 = (d2.find.ID(j3.matches[0].replace(_2, aa2), b3) || [])[0], !b3)
            return c3;
          m3 && (b3 = b3.parentNode), a3 = a3.slice(i3.shift().value.length);
        }
        f3 = V2.needsContext.test(a3) ? 0 : i3.length;
        while (f3--) {
          if (j3 = i3[f3], d2.relative[k3 = j3.type])
            break;
          if ((l3 = d2.find[k3]) && (e3 = l3(j3.matches[0].replace(_2, aa2), $2.test(i3[0].type) && qa2(b3.parentNode) || b3))) {
            if (i3.splice(f3, 1), a3 = e3.length && sa2(i3), !a3)
              return G2.apply(c3, e3), c3;
            break;
          }
        }
      }
      return (m3 || h2(a3, n3))(e3, b3, !p2, c3, !b3 || $2.test(a3) && qa2(b3.parentNode) || b3), c3;
    }, c2.sortStable = u2.split("").sort(B2).join("") === u2, c2.detectDuplicates = !!l2, m2(), c2.sortDetached = ja2(function(a3) {
      return 1 & a3.compareDocumentPosition(n2.createElement("fieldset"));
    }), ja2(function(a3) {
      return a3.innerHTML = "<a href='#'></a>", "#" === a3.firstChild.getAttribute("href");
    }) || ka2("type|href|height|width", function(a3, b3, c3) {
      if (!c3)
        return a3.getAttribute(b3, "type" === b3.toLowerCase() ? 1 : 2);
    }), c2.attributes && ja2(function(a3) {
      return a3.innerHTML = "<input/>", a3.firstChild.setAttribute("value", ""), "" === a3.firstChild.getAttribute("value");
    }) || ka2("value", function(a3, b3, c3) {
      if (!c3 && "input" === a3.nodeName.toLowerCase())
        return a3.defaultValue;
    }), ja2(function(a3) {
      return null == a3.getAttribute("disabled");
    }) || ka2(J2, function(a3, b3, c3) {
      var d3;
      if (!c3)
        return a3[b3] === true ? b3.toLowerCase() : (d3 = a3.getAttributeNode(b3)) && d3.specified ? d3.value : null;
    }), ga2;
  }(a);
  r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
  var y = function(a2, b2, c2) {
    var d2 = [], e2 = void 0 !== c2;
    while ((a2 = a2[b2]) && 9 !== a2.nodeType)
      if (1 === a2.nodeType) {
        if (e2 && r(a2).is(c2))
          break;
        d2.push(a2);
      }
    return d2;
  }, z = function(a2, b2) {
    for (var c2 = []; a2; a2 = a2.nextSibling)
      1 === a2.nodeType && a2 !== b2 && c2.push(a2);
    return c2;
  }, A = r.expr.match.needsContext;
  function B(a2, b2) {
    return a2.nodeName && a2.nodeName.toLowerCase() === b2.toLowerCase();
  }
  var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, D = /^.[^:#\[\.,]*$/;
  function E(a2, b2, c2) {
    return r.isFunction(b2) ? r.grep(a2, function(a3, d2) {
      return !!b2.call(a3, d2, a3) !== c2;
    }) : b2.nodeType ? r.grep(a2, function(a3) {
      return a3 === b2 !== c2;
    }) : "string" != typeof b2 ? r.grep(a2, function(a3) {
      return i.call(b2, a3) > -1 !== c2;
    }) : D.test(b2) ? r.filter(b2, a2, c2) : (b2 = r.filter(b2, a2), r.grep(a2, function(a3) {
      return i.call(b2, a3) > -1 !== c2 && 1 === a3.nodeType;
    }));
  }
  r.filter = function(a2, b2, c2) {
    var d2 = b2[0];
    return c2 && (a2 = ":not(" + a2 + ")"), 1 === b2.length && 1 === d2.nodeType ? r.find.matchesSelector(d2, a2) ? [d2] : [] : r.find.matches(a2, r.grep(b2, function(a3) {
      return 1 === a3.nodeType;
    }));
  }, r.fn.extend({ find: function(a2) {
    var b2, c2, d2 = this.length, e2 = this;
    if ("string" != typeof a2)
      return this.pushStack(r(a2).filter(function() {
        for (b2 = 0; b2 < d2; b2++)
          if (r.contains(e2[b2], this))
            return true;
      }));
    for (c2 = this.pushStack([]), b2 = 0; b2 < d2; b2++)
      r.find(a2, e2[b2], c2);
    return d2 > 1 ? r.uniqueSort(c2) : c2;
  }, filter: function(a2) {
    return this.pushStack(E(this, a2 || [], false));
  }, not: function(a2) {
    return this.pushStack(E(this, a2 || [], true));
  }, is: function(a2) {
    return !!E(this, "string" == typeof a2 && A.test(a2) ? r(a2) : a2 || [], false).length;
  } });
  var F, G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, H = r.fn.init = function(a2, b2, c2) {
    var e2, f2;
    if (!a2)
      return this;
    if (c2 = c2 || F, "string" == typeof a2) {
      if (e2 = "<" === a2[0] && ">" === a2[a2.length - 1] && a2.length >= 3 ? [null, a2, null] : G.exec(a2), !e2 || !e2[1] && b2)
        return !b2 || b2.jquery ? (b2 || c2).find(a2) : this.constructor(b2).find(a2);
      if (e2[1]) {
        if (b2 = b2 instanceof r ? b2[0] : b2, r.merge(this, r.parseHTML(e2[1], b2 && b2.nodeType ? b2.ownerDocument || b2 : d, true)), C.test(e2[1]) && r.isPlainObject(b2))
          for (e2 in b2)
            r.isFunction(this[e2]) ? this[e2](b2[e2]) : this.attr(e2, b2[e2]);
        return this;
      }
      return f2 = d.getElementById(e2[2]), f2 && (this[0] = f2, this.length = 1), this;
    }
    return a2.nodeType ? (this[0] = a2, this.length = 1, this) : r.isFunction(a2) ? void 0 !== c2.ready ? c2.ready(a2) : a2(r) : r.makeArray(a2, this);
  };
  H.prototype = r.fn, F = r(d);
  var I = /^(?:parents|prev(?:Until|All))/, J = { children: true, contents: true, next: true, prev: true };
  r.fn.extend({ has: function(a2) {
    var b2 = r(a2, this), c2 = b2.length;
    return this.filter(function() {
      for (var a3 = 0; a3 < c2; a3++)
        if (r.contains(this, b2[a3]))
          return true;
    });
  }, closest: function(a2, b2) {
    var c2, d2 = 0, e2 = this.length, f2 = [], g2 = "string" != typeof a2 && r(a2);
    if (!A.test(a2)) {
      for (; d2 < e2; d2++)
        for (c2 = this[d2]; c2 && c2 !== b2; c2 = c2.parentNode)
          if (c2.nodeType < 11 && (g2 ? g2.index(c2) > -1 : 1 === c2.nodeType && r.find.matchesSelector(c2, a2))) {
            f2.push(c2);
            break;
          }
    }
    return this.pushStack(f2.length > 1 ? r.uniqueSort(f2) : f2);
  }, index: function(a2) {
    return a2 ? "string" == typeof a2 ? i.call(r(a2), this[0]) : i.call(this, a2.jquery ? a2[0] : a2) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
  }, add: function(a2, b2) {
    return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a2, b2))));
  }, addBack: function(a2) {
    return this.add(null == a2 ? this.prevObject : this.prevObject.filter(a2));
  } });
  function K(a2, b2) {
    while ((a2 = a2[b2]) && 1 !== a2.nodeType)
      ;
    return a2;
  }
  r.each({ parent: function(a2) {
    var b2 = a2.parentNode;
    return b2 && 11 !== b2.nodeType ? b2 : null;
  }, parents: function(a2) {
    return y(a2, "parentNode");
  }, parentsUntil: function(a2, b2, c2) {
    return y(a2, "parentNode", c2);
  }, next: function(a2) {
    return K(a2, "nextSibling");
  }, prev: function(a2) {
    return K(a2, "previousSibling");
  }, nextAll: function(a2) {
    return y(a2, "nextSibling");
  }, prevAll: function(a2) {
    return y(a2, "previousSibling");
  }, nextUntil: function(a2, b2, c2) {
    return y(a2, "nextSibling", c2);
  }, prevUntil: function(a2, b2, c2) {
    return y(a2, "previousSibling", c2);
  }, siblings: function(a2) {
    return z((a2.parentNode || {}).firstChild, a2);
  }, children: function(a2) {
    return z(a2.firstChild);
  }, contents: function(a2) {
    return B(a2, "iframe") ? a2.contentDocument : (B(a2, "template") && (a2 = a2.content || a2), r.merge([], a2.childNodes));
  } }, function(a2, b2) {
    r.fn[a2] = function(c2, d2) {
      var e2 = r.map(this, b2, c2);
      return "Until" !== a2.slice(-5) && (d2 = c2), d2 && "string" == typeof d2 && (e2 = r.filter(d2, e2)), this.length > 1 && (J[a2] || r.uniqueSort(e2), I.test(a2) && e2.reverse()), this.pushStack(e2);
    };
  });
  var L = /[^\x20\t\r\n\f]+/g;
  function M(a2) {
    var b2 = {};
    return r.each(a2.match(L) || [], function(a3, c2) {
      b2[c2] = true;
    }), b2;
  }
  r.Callbacks = function(a2) {
    a2 = "string" == typeof a2 ? M(a2) : r.extend({}, a2);
    var b2, c2, d2, e2, f2 = [], g2 = [], h2 = -1, i2 = function() {
      for (e2 = e2 || a2.once, d2 = b2 = true; g2.length; h2 = -1) {
        c2 = g2.shift();
        while (++h2 < f2.length)
          f2[h2].apply(c2[0], c2[1]) === false && a2.stopOnFalse && (h2 = f2.length, c2 = false);
      }
      a2.memory || (c2 = false), b2 = false, e2 && (f2 = c2 ? [] : "");
    }, j2 = { add: function() {
      return f2 && (c2 && !b2 && (h2 = f2.length - 1, g2.push(c2)), function d3(b3) {
        r.each(b3, function(b4, c3) {
          r.isFunction(c3) ? a2.unique && j2.has(c3) || f2.push(c3) : c3 && c3.length && "string" !== r.type(c3) && d3(c3);
        });
      }(arguments), c2 && !b2 && i2()), this;
    }, remove: function() {
      return r.each(arguments, function(a3, b3) {
        var c3;
        while ((c3 = r.inArray(b3, f2, c3)) > -1)
          f2.splice(c3, 1), c3 <= h2 && h2--;
      }), this;
    }, has: function(a3) {
      return a3 ? r.inArray(a3, f2) > -1 : f2.length > 0;
    }, empty: function() {
      return f2 && (f2 = []), this;
    }, disable: function() {
      return e2 = g2 = [], f2 = c2 = "", this;
    }, disabled: function() {
      return !f2;
    }, lock: function() {
      return e2 = g2 = [], c2 || b2 || (f2 = c2 = ""), this;
    }, locked: function() {
      return !!e2;
    }, fireWith: function(a3, c3) {
      return e2 || (c3 = c3 || [], c3 = [a3, c3.slice ? c3.slice() : c3], g2.push(c3), b2 || i2()), this;
    }, fire: function() {
      return j2.fireWith(this, arguments), this;
    }, fired: function() {
      return !!d2;
    } };
    return j2;
  };
  function N(a2) {
    return a2;
  }
  function O(a2) {
    throw a2;
  }
  function P(a2, b2, c2, d2) {
    var e2;
    try {
      a2 && r.isFunction(e2 = a2.promise) ? e2.call(a2).done(b2).fail(c2) : a2 && r.isFunction(e2 = a2.then) ? e2.call(a2, b2, c2) : b2.apply(void 0, [a2].slice(d2));
    } catch (a3) {
      c2.apply(void 0, [a3]);
    }
  }
  r.extend({ Deferred: function(b2) {
    var c2 = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]], d2 = "pending", e2 = { state: function() {
      return d2;
    }, always: function() {
      return f2.done(arguments).fail(arguments), this;
    }, "catch": function(a2) {
      return e2.then(null, a2);
    }, pipe: function() {
      var a2 = arguments;
      return r.Deferred(function(b3) {
        r.each(c2, function(c3, d3) {
          var e3 = r.isFunction(a2[d3[4]]) && a2[d3[4]];
          f2[d3[1]](function() {
            var a3 = e3 && e3.apply(this, arguments);
            a3 && r.isFunction(a3.promise) ? a3.promise().progress(b3.notify).done(b3.resolve).fail(b3.reject) : b3[d3[0] + "With"](this, e3 ? [a3] : arguments);
          });
        }), a2 = null;
      }).promise();
    }, then: function(b3, d3, e3) {
      var f3 = 0;
      function g2(b4, c3, d4, e4) {
        return function() {
          var h2 = this, i2 = arguments, j2 = function() {
            var a2, j3;
            if (!(b4 < f3)) {
              if (a2 = d4.apply(h2, i2), a2 === c3.promise())
                throw new TypeError("Thenable self-resolution");
              j3 = a2 && ("object" == typeof a2 || "function" == typeof a2) && a2.then, r.isFunction(j3) ? e4 ? j3.call(a2, g2(f3, c3, N, e4), g2(f3, c3, O, e4)) : (f3++, j3.call(a2, g2(f3, c3, N, e4), g2(f3, c3, O, e4), g2(f3, c3, N, c3.notifyWith))) : (d4 !== N && (h2 = void 0, i2 = [a2]), (e4 || c3.resolveWith)(h2, i2));
            }
          }, k2 = e4 ? j2 : function() {
            try {
              j2();
            } catch (a2) {
              r.Deferred.exceptionHook && r.Deferred.exceptionHook(a2, k2.stackTrace), b4 + 1 >= f3 && (d4 !== O && (h2 = void 0, i2 = [a2]), c3.rejectWith(h2, i2));
            }
          };
          b4 ? k2() : (r.Deferred.getStackHook && (k2.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k2));
        };
      }
      return r.Deferred(function(a2) {
        c2[0][3].add(g2(0, a2, r.isFunction(e3) ? e3 : N, a2.notifyWith)), c2[1][3].add(g2(0, a2, r.isFunction(b3) ? b3 : N)), c2[2][3].add(g2(0, a2, r.isFunction(d3) ? d3 : O));
      }).promise();
    }, promise: function(a2) {
      return null != a2 ? r.extend(a2, e2) : e2;
    } }, f2 = {};
    return r.each(c2, function(a2, b3) {
      var g2 = b3[2], h2 = b3[5];
      e2[b3[1]] = g2.add, h2 && g2.add(function() {
        d2 = h2;
      }, c2[3 - a2][2].disable, c2[0][2].lock), g2.add(b3[3].fire), f2[b3[0]] = function() {
        return f2[b3[0] + "With"](this === f2 ? void 0 : this, arguments), this;
      }, f2[b3[0] + "With"] = g2.fireWith;
    }), e2.promise(f2), b2 && b2.call(f2, f2), f2;
  }, when: function(a2) {
    var b2 = arguments.length, c2 = b2, d2 = Array(c2), e2 = f.call(arguments), g2 = r.Deferred(), h2 = function(a3) {
      return function(c3) {
        d2[a3] = this, e2[a3] = arguments.length > 1 ? f.call(arguments) : c3, --b2 || g2.resolveWith(d2, e2);
      };
    };
    if (b2 <= 1 && (P(a2, g2.done(h2(c2)).resolve, g2.reject, !b2), "pending" === g2.state() || r.isFunction(e2[c2] && e2[c2].then)))
      return g2.then();
    while (c2--)
      P(e2[c2], h2(c2), g2.reject);
    return g2.promise();
  } });
  var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  r.Deferred.exceptionHook = function(b2, c2) {
    a.console && a.console.warn && b2 && Q.test(b2.name) && a.console.warn("jQuery.Deferred exception: " + b2.message, b2.stack, c2);
  }, r.readyException = function(b2) {
    a.setTimeout(function() {
      throw b2;
    });
  };
  var R = r.Deferred();
  r.fn.ready = function(a2) {
    return R.then(a2)["catch"](function(a3) {
      r.readyException(a3);
    }), this;
  }, r.extend({ isReady: false, readyWait: 1, ready: function(a2) {
    (a2 === true ? --r.readyWait : r.isReady) || (r.isReady = true, a2 !== true && --r.readyWait > 0 || R.resolveWith(d, [r]));
  } }), r.ready.then = R.then;
  function S() {
    d.removeEventListener("DOMContentLoaded", S), a.removeEventListener("load", S), r.ready();
  }
  "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));
  var T = function(a2, b2, c2, d2, e2, f2, g2) {
    var h2 = 0, i2 = a2.length, j2 = null == c2;
    if ("object" === r.type(c2)) {
      e2 = true;
      for (h2 in c2)
        T(a2, b2, h2, c2[h2], true, f2, g2);
    } else if (void 0 !== d2 && (e2 = true, r.isFunction(d2) || (g2 = true), j2 && (g2 ? (b2.call(a2, d2), b2 = null) : (j2 = b2, b2 = function(a3, b3, c3) {
      return j2.call(r(a3), c3);
    })), b2))
      for (; h2 < i2; h2++)
        b2(a2[h2], c2, g2 ? d2 : d2.call(a2[h2], h2, b2(a2[h2], c2)));
    return e2 ? a2 : j2 ? b2.call(a2) : i2 ? b2(a2[0], c2) : f2;
  }, U = function(a2) {
    return 1 === a2.nodeType || 9 === a2.nodeType || !+a2.nodeType;
  };
  function V() {
    this.expando = r.expando + V.uid++;
  }
  V.uid = 1, V.prototype = { cache: function(a2) {
    var b2 = a2[this.expando];
    return b2 || (b2 = {}, U(a2) && (a2.nodeType ? a2[this.expando] = b2 : Object.defineProperty(a2, this.expando, { value: b2, configurable: true }))), b2;
  }, set: function(a2, b2, c2) {
    var d2, e2 = this.cache(a2);
    if ("string" == typeof b2)
      e2[r.camelCase(b2)] = c2;
    else
      for (d2 in b2)
        e2[r.camelCase(d2)] = b2[d2];
    return e2;
  }, get: function(a2, b2) {
    return void 0 === b2 ? this.cache(a2) : a2[this.expando] && a2[this.expando][r.camelCase(b2)];
  }, access: function(a2, b2, c2) {
    return void 0 === b2 || b2 && "string" == typeof b2 && void 0 === c2 ? this.get(a2, b2) : (this.set(a2, b2, c2), void 0 !== c2 ? c2 : b2);
  }, remove: function(a2, b2) {
    var c2, d2 = a2[this.expando];
    if (void 0 !== d2) {
      if (void 0 !== b2) {
        Array.isArray(b2) ? b2 = b2.map(r.camelCase) : (b2 = r.camelCase(b2), b2 = b2 in d2 ? [b2] : b2.match(L) || []), c2 = b2.length;
        while (c2--)
          delete d2[b2[c2]];
      }
      (void 0 === b2 || r.isEmptyObject(d2)) && (a2.nodeType ? a2[this.expando] = void 0 : delete a2[this.expando]);
    }
  }, hasData: function(a2) {
    var b2 = a2[this.expando];
    return void 0 !== b2 && !r.isEmptyObject(b2);
  } };
  var W = new V(), X = new V(), Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Z = /[A-Z]/g;
  function $(a2) {
    return "true" === a2 || "false" !== a2 && ("null" === a2 ? null : a2 === +a2 + "" ? +a2 : Y.test(a2) ? JSON.parse(a2) : a2);
  }
  function _(a2, b2, c2) {
    var d2;
    if (void 0 === c2 && 1 === a2.nodeType)
      if (d2 = "data-" + b2.replace(Z, "-$&").toLowerCase(), c2 = a2.getAttribute(d2), "string" == typeof c2) {
        try {
          c2 = $(c2);
        } catch (e2) {
        }
        X.set(a2, b2, c2);
      } else
        c2 = void 0;
    return c2;
  }
  r.extend({ hasData: function(a2) {
    return X.hasData(a2) || W.hasData(a2);
  }, data: function(a2, b2, c2) {
    return X.access(a2, b2, c2);
  }, removeData: function(a2, b2) {
    X.remove(a2, b2);
  }, _data: function(a2, b2, c2) {
    return W.access(a2, b2, c2);
  }, _removeData: function(a2, b2) {
    W.remove(a2, b2);
  } }), r.fn.extend({ data: function(a2, b2) {
    var c2, d2, e2, f2 = this[0], g2 = f2 && f2.attributes;
    if (void 0 === a2) {
      if (this.length && (e2 = X.get(f2), 1 === f2.nodeType && !W.get(f2, "hasDataAttrs"))) {
        c2 = g2.length;
        while (c2--)
          g2[c2] && (d2 = g2[c2].name, 0 === d2.indexOf("data-") && (d2 = r.camelCase(d2.slice(5)), _(f2, d2, e2[d2])));
        W.set(f2, "hasDataAttrs", true);
      }
      return e2;
    }
    return "object" == typeof a2 ? this.each(function() {
      X.set(this, a2);
    }) : T(this, function(b3) {
      var c3;
      if (f2 && void 0 === b3) {
        if (c3 = X.get(f2, a2), void 0 !== c3)
          return c3;
        if (c3 = _(f2, a2), void 0 !== c3)
          return c3;
      } else
        this.each(function() {
          X.set(this, a2, b3);
        });
    }, null, b2, arguments.length > 1, null, true);
  }, removeData: function(a2) {
    return this.each(function() {
      X.remove(this, a2);
    });
  } }), r.extend({ queue: function(a2, b2, c2) {
    var d2;
    if (a2)
      return b2 = (b2 || "fx") + "queue", d2 = W.get(a2, b2), c2 && (!d2 || Array.isArray(c2) ? d2 = W.access(a2, b2, r.makeArray(c2)) : d2.push(c2)), d2 || [];
  }, dequeue: function(a2, b2) {
    b2 = b2 || "fx";
    var c2 = r.queue(a2, b2), d2 = c2.length, e2 = c2.shift(), f2 = r._queueHooks(a2, b2), g2 = function() {
      r.dequeue(a2, b2);
    };
    "inprogress" === e2 && (e2 = c2.shift(), d2--), e2 && ("fx" === b2 && c2.unshift("inprogress"), delete f2.stop, e2.call(a2, g2, f2)), !d2 && f2 && f2.empty.fire();
  }, _queueHooks: function(a2, b2) {
    var c2 = b2 + "queueHooks";
    return W.get(a2, c2) || W.access(a2, c2, { empty: r.Callbacks("once memory").add(function() {
      W.remove(a2, [b2 + "queue", c2]);
    }) });
  } }), r.fn.extend({ queue: function(a2, b2) {
    var c2 = 2;
    return "string" != typeof a2 && (b2 = a2, a2 = "fx", c2--), arguments.length < c2 ? r.queue(this[0], a2) : void 0 === b2 ? this : this.each(function() {
      var c3 = r.queue(this, a2, b2);
      r._queueHooks(this, a2), "fx" === a2 && "inprogress" !== c3[0] && r.dequeue(this, a2);
    });
  }, dequeue: function(a2) {
    return this.each(function() {
      r.dequeue(this, a2);
    });
  }, clearQueue: function(a2) {
    return this.queue(a2 || "fx", []);
  }, promise: function(a2, b2) {
    var c2, d2 = 1, e2 = r.Deferred(), f2 = this, g2 = this.length, h2 = function() {
      --d2 || e2.resolveWith(f2, [f2]);
    };
    "string" != typeof a2 && (b2 = a2, a2 = void 0), a2 = a2 || "fx";
    while (g2--)
      c2 = W.get(f2[g2], a2 + "queueHooks"), c2 && c2.empty && (d2++, c2.empty.add(h2));
    return h2(), e2.promise(b2);
  } });
  var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"), ca = ["Top", "Right", "Bottom", "Left"], da = function(a2, b2) {
    return a2 = b2 || a2, "none" === a2.style.display || "" === a2.style.display && r.contains(a2.ownerDocument, a2) && "none" === r.css(a2, "display");
  }, ea = function(a2, b2, c2, d2) {
    var e2, f2, g2 = {};
    for (f2 in b2)
      g2[f2] = a2.style[f2], a2.style[f2] = b2[f2];
    e2 = c2.apply(a2, d2 || []);
    for (f2 in b2)
      a2.style[f2] = g2[f2];
    return e2;
  };
  function fa(a2, b2, c2, d2) {
    var e2, f2 = 1, g2 = 20, h2 = d2 ? function() {
      return d2.cur();
    } : function() {
      return r.css(a2, b2, "");
    }, i2 = h2(), j2 = c2 && c2[3] || (r.cssNumber[b2] ? "" : "px"), k2 = (r.cssNumber[b2] || "px" !== j2 && +i2) && ba.exec(r.css(a2, b2));
    if (k2 && k2[3] !== j2) {
      j2 = j2 || k2[3], c2 = c2 || [], k2 = +i2 || 1;
      do
        f2 = f2 || ".5", k2 /= f2, r.style(a2, b2, k2 + j2);
      while (f2 !== (f2 = h2() / i2) && 1 !== f2 && --g2);
    }
    return c2 && (k2 = +k2 || +i2 || 0, e2 = c2[1] ? k2 + (c2[1] + 1) * c2[2] : +c2[2], d2 && (d2.unit = j2, d2.start = k2, d2.end = e2)), e2;
  }
  var ga = {};
  function ha(a2) {
    var b2, c2 = a2.ownerDocument, d2 = a2.nodeName, e2 = ga[d2];
    return e2 ? e2 : (b2 = c2.body.appendChild(c2.createElement(d2)), e2 = r.css(b2, "display"), b2.parentNode.removeChild(b2), "none" === e2 && (e2 = "block"), ga[d2] = e2, e2);
  }
  function ia(a2, b2) {
    for (var c2, d2, e2 = [], f2 = 0, g2 = a2.length; f2 < g2; f2++)
      d2 = a2[f2], d2.style && (c2 = d2.style.display, b2 ? ("none" === c2 && (e2[f2] = W.get(d2, "display") || null, e2[f2] || (d2.style.display = "")), "" === d2.style.display && da(d2) && (e2[f2] = ha(d2))) : "none" !== c2 && (e2[f2] = "none", W.set(d2, "display", c2)));
    for (f2 = 0; f2 < g2; f2++)
      null != e2[f2] && (a2[f2].style.display = e2[f2]);
    return a2;
  }
  r.fn.extend({ show: function() {
    return ia(this, true);
  }, hide: function() {
    return ia(this);
  }, toggle: function(a2) {
    return "boolean" == typeof a2 ? a2 ? this.show() : this.hide() : this.each(function() {
      da(this) ? r(this).show() : r(this).hide();
    });
  } });
  var ja = /^(?:checkbox|radio)$/i, ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, la = /^$|\/(?:java|ecma)script/i, ma = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
  ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;
  function na(a2, b2) {
    var c2;
    return c2 = "undefined" != typeof a2.getElementsByTagName ? a2.getElementsByTagName(b2 || "*") : "undefined" != typeof a2.querySelectorAll ? a2.querySelectorAll(b2 || "*") : [], void 0 === b2 || b2 && B(a2, b2) ? r.merge([a2], c2) : c2;
  }
  function oa(a2, b2) {
    for (var c2 = 0, d2 = a2.length; c2 < d2; c2++)
      W.set(a2[c2], "globalEval", !b2 || W.get(b2[c2], "globalEval"));
  }
  var pa = /<|&#?\w+;/;
  function qa(a2, b2, c2, d2, e2) {
    for (var f2, g2, h2, i2, j2, k2, l2 = b2.createDocumentFragment(), m2 = [], n2 = 0, o2 = a2.length; n2 < o2; n2++)
      if (f2 = a2[n2], f2 || 0 === f2)
        if ("object" === r.type(f2))
          r.merge(m2, f2.nodeType ? [f2] : f2);
        else if (pa.test(f2)) {
          g2 = g2 || l2.appendChild(b2.createElement("div")), h2 = (ka.exec(f2) || ["", ""])[1].toLowerCase(), i2 = ma[h2] || ma._default, g2.innerHTML = i2[1] + r.htmlPrefilter(f2) + i2[2], k2 = i2[0];
          while (k2--)
            g2 = g2.lastChild;
          r.merge(m2, g2.childNodes), g2 = l2.firstChild, g2.textContent = "";
        } else
          m2.push(b2.createTextNode(f2));
    l2.textContent = "", n2 = 0;
    while (f2 = m2[n2++])
      if (d2 && r.inArray(f2, d2) > -1)
        e2 && e2.push(f2);
      else if (j2 = r.contains(f2.ownerDocument, f2), g2 = na(l2.appendChild(f2), "script"), j2 && oa(g2), c2) {
        k2 = 0;
        while (f2 = g2[k2++])
          la.test(f2.type || "") && c2.push(f2);
      }
    return l2;
  }
  !function() {
    var a2 = d.createDocumentFragment(), b2 = a2.appendChild(d.createElement("div")), c2 = d.createElement("input");
    c2.setAttribute("type", "radio"), c2.setAttribute("checked", "checked"), c2.setAttribute("name", "t"), b2.appendChild(c2), o.checkClone = b2.cloneNode(true).cloneNode(true).lastChild.checked, b2.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b2.cloneNode(true).lastChild.defaultValue;
  }();
  var ra = d.documentElement, sa = /^key/, ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, ua = /^([^.]*)(?:\.(.+)|)/;
  function va() {
    return true;
  }
  function wa() {
    return false;
  }
  function xa() {
    try {
      return d.activeElement;
    } catch (a2) {
    }
  }
  function ya(a2, b2, c2, d2, e2, f2) {
    var g2, h2;
    if ("object" == typeof b2) {
      "string" != typeof c2 && (d2 = d2 || c2, c2 = void 0);
      for (h2 in b2)
        ya(a2, h2, c2, d2, b2[h2], f2);
      return a2;
    }
    if (null == d2 && null == e2 ? (e2 = c2, d2 = c2 = void 0) : null == e2 && ("string" == typeof c2 ? (e2 = d2, d2 = void 0) : (e2 = d2, d2 = c2, c2 = void 0)), e2 === false)
      e2 = wa;
    else if (!e2)
      return a2;
    return 1 === f2 && (g2 = e2, e2 = function(a3) {
      return r().off(a3), g2.apply(this, arguments);
    }, e2.guid = g2.guid || (g2.guid = r.guid++)), a2.each(function() {
      r.event.add(this, b2, e2, d2, c2);
    });
  }
  r.event = { global: {}, add: function(a2, b2, c2, d2, e2) {
    var f2, g2, h2, i2, j2, k2, l2, m2, n2, o2, p2, q2 = W.get(a2);
    if (q2) {
      c2.handler && (f2 = c2, c2 = f2.handler, e2 = f2.selector), e2 && r.find.matchesSelector(ra, e2), c2.guid || (c2.guid = r.guid++), (i2 = q2.events) || (i2 = q2.events = {}), (g2 = q2.handle) || (g2 = q2.handle = function(b3) {
        return "undefined" != typeof r && r.event.triggered !== b3.type ? r.event.dispatch.apply(a2, arguments) : void 0;
      }), b2 = (b2 || "").match(L) || [""], j2 = b2.length;
      while (j2--)
        h2 = ua.exec(b2[j2]) || [], n2 = p2 = h2[1], o2 = (h2[2] || "").split(".").sort(), n2 && (l2 = r.event.special[n2] || {}, n2 = (e2 ? l2.delegateType : l2.bindType) || n2, l2 = r.event.special[n2] || {}, k2 = r.extend({ type: n2, origType: p2, data: d2, handler: c2, guid: c2.guid, selector: e2, needsContext: e2 && r.expr.match.needsContext.test(e2), namespace: o2.join(".") }, f2), (m2 = i2[n2]) || (m2 = i2[n2] = [], m2.delegateCount = 0, l2.setup && l2.setup.call(a2, d2, o2, g2) !== false || a2.addEventListener && a2.addEventListener(n2, g2)), l2.add && (l2.add.call(a2, k2), k2.handler.guid || (k2.handler.guid = c2.guid)), e2 ? m2.splice(m2.delegateCount++, 0, k2) : m2.push(k2), r.event.global[n2] = true);
    }
  }, remove: function(a2, b2, c2, d2, e2) {
    var f2, g2, h2, i2, j2, k2, l2, m2, n2, o2, p2, q2 = W.hasData(a2) && W.get(a2);
    if (q2 && (i2 = q2.events)) {
      b2 = (b2 || "").match(L) || [""], j2 = b2.length;
      while (j2--)
        if (h2 = ua.exec(b2[j2]) || [], n2 = p2 = h2[1], o2 = (h2[2] || "").split(".").sort(), n2) {
          l2 = r.event.special[n2] || {}, n2 = (d2 ? l2.delegateType : l2.bindType) || n2, m2 = i2[n2] || [], h2 = h2[2] && new RegExp("(^|\\.)" + o2.join("\\.(?:.*\\.|)") + "(\\.|$)"), g2 = f2 = m2.length;
          while (f2--)
            k2 = m2[f2], !e2 && p2 !== k2.origType || c2 && c2.guid !== k2.guid || h2 && !h2.test(k2.namespace) || d2 && d2 !== k2.selector && ("**" !== d2 || !k2.selector) || (m2.splice(f2, 1), k2.selector && m2.delegateCount--, l2.remove && l2.remove.call(a2, k2));
          g2 && !m2.length && (l2.teardown && l2.teardown.call(a2, o2, q2.handle) !== false || r.removeEvent(a2, n2, q2.handle), delete i2[n2]);
        } else
          for (n2 in i2)
            r.event.remove(a2, n2 + b2[j2], c2, d2, true);
      r.isEmptyObject(i2) && W.remove(a2, "handle events");
    }
  }, dispatch: function(a2) {
    var b2 = r.event.fix(a2), c2, d2, e2, f2, g2, h2, i2 = new Array(arguments.length), j2 = (W.get(this, "events") || {})[b2.type] || [], k2 = r.event.special[b2.type] || {};
    for (i2[0] = b2, c2 = 1; c2 < arguments.length; c2++)
      i2[c2] = arguments[c2];
    if (b2.delegateTarget = this, !k2.preDispatch || k2.preDispatch.call(this, b2) !== false) {
      h2 = r.event.handlers.call(this, b2, j2), c2 = 0;
      while ((f2 = h2[c2++]) && !b2.isPropagationStopped()) {
        b2.currentTarget = f2.elem, d2 = 0;
        while ((g2 = f2.handlers[d2++]) && !b2.isImmediatePropagationStopped())
          b2.rnamespace && !b2.rnamespace.test(g2.namespace) || (b2.handleObj = g2, b2.data = g2.data, e2 = ((r.event.special[g2.origType] || {}).handle || g2.handler).apply(f2.elem, i2), void 0 !== e2 && (b2.result = e2) === false && (b2.preventDefault(), b2.stopPropagation()));
      }
      return k2.postDispatch && k2.postDispatch.call(this, b2), b2.result;
    }
  }, handlers: function(a2, b2) {
    var c2, d2, e2, f2, g2, h2 = [], i2 = b2.delegateCount, j2 = a2.target;
    if (i2 && j2.nodeType && !("click" === a2.type && a2.button >= 1)) {
      for (; j2 !== this; j2 = j2.parentNode || this)
        if (1 === j2.nodeType && ("click" !== a2.type || j2.disabled !== true)) {
          for (f2 = [], g2 = {}, c2 = 0; c2 < i2; c2++)
            d2 = b2[c2], e2 = d2.selector + " ", void 0 === g2[e2] && (g2[e2] = d2.needsContext ? r(e2, this).index(j2) > -1 : r.find(e2, this, null, [j2]).length), g2[e2] && f2.push(d2);
          f2.length && h2.push({ elem: j2, handlers: f2 });
        }
    }
    return j2 = this, i2 < b2.length && h2.push({ elem: j2, handlers: b2.slice(i2) }), h2;
  }, addProp: function(a2, b2) {
    Object.defineProperty(r.Event.prototype, a2, { enumerable: true, configurable: true, get: r.isFunction(b2) ? function() {
      if (this.originalEvent)
        return b2(this.originalEvent);
    } : function() {
      if (this.originalEvent)
        return this.originalEvent[a2];
    }, set: function(b3) {
      Object.defineProperty(this, a2, { enumerable: true, configurable: true, writable: true, value: b3 });
    } });
  }, fix: function(a2) {
    return a2[r.expando] ? a2 : new r.Event(a2);
  }, special: { load: { noBubble: true }, focus: { trigger: function() {
    if (this !== xa() && this.focus)
      return this.focus(), false;
  }, delegateType: "focusin" }, blur: { trigger: function() {
    if (this === xa() && this.blur)
      return this.blur(), false;
  }, delegateType: "focusout" }, click: { trigger: function() {
    if ("checkbox" === this.type && this.click && B(this, "input"))
      return this.click(), false;
  }, _default: function(a2) {
    return B(a2.target, "a");
  } }, beforeunload: { postDispatch: function(a2) {
    void 0 !== a2.result && a2.originalEvent && (a2.originalEvent.returnValue = a2.result);
  } } } }, r.removeEvent = function(a2, b2, c2) {
    a2.removeEventListener && a2.removeEventListener(b2, c2);
  }, r.Event = function(a2, b2) {
    return this instanceof r.Event ? (a2 && a2.type ? (this.originalEvent = a2, this.type = a2.type, this.isDefaultPrevented = a2.defaultPrevented || void 0 === a2.defaultPrevented && a2.returnValue === false ? va : wa, this.target = a2.target && 3 === a2.target.nodeType ? a2.target.parentNode : a2.target, this.currentTarget = a2.currentTarget, this.relatedTarget = a2.relatedTarget) : this.type = a2, b2 && r.extend(this, b2), this.timeStamp = a2 && a2.timeStamp || r.now(), void (this[r.expando] = true)) : new r.Event(a2, b2);
  }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: wa, isPropagationStopped: wa, isImmediatePropagationStopped: wa, isSimulated: false, preventDefault: function() {
    var a2 = this.originalEvent;
    this.isDefaultPrevented = va, a2 && !this.isSimulated && a2.preventDefault();
  }, stopPropagation: function() {
    var a2 = this.originalEvent;
    this.isPropagationStopped = va, a2 && !this.isSimulated && a2.stopPropagation();
  }, stopImmediatePropagation: function() {
    var a2 = this.originalEvent;
    this.isImmediatePropagationStopped = va, a2 && !this.isSimulated && a2.stopImmediatePropagation(), this.stopPropagation();
  } }, r.each({ altKey: true, bubbles: true, cancelable: true, changedTouches: true, ctrlKey: true, detail: true, eventPhase: true, metaKey: true, pageX: true, pageY: true, shiftKey: true, view: true, "char": true, charCode: true, key: true, keyCode: true, button: true, buttons: true, clientX: true, clientY: true, offsetX: true, offsetY: true, pointerId: true, pointerType: true, screenX: true, screenY: true, targetTouches: true, toElement: true, touches: true, which: function(a2) {
    var b2 = a2.button;
    return null == a2.which && sa.test(a2.type) ? null != a2.charCode ? a2.charCode : a2.keyCode : !a2.which && void 0 !== b2 && ta.test(a2.type) ? 1 & b2 ? 1 : 2 & b2 ? 3 : 4 & b2 ? 2 : 0 : a2.which;
  } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a2, b2) {
    r.event.special[a2] = { delegateType: b2, bindType: b2, handle: function(a3) {
      var c2, d2 = this, e2 = a3.relatedTarget, f2 = a3.handleObj;
      return e2 && (e2 === d2 || r.contains(d2, e2)) || (a3.type = f2.origType, c2 = f2.handler.apply(this, arguments), a3.type = b2), c2;
    } };
  }), r.fn.extend({ on: function(a2, b2, c2, d2) {
    return ya(this, a2, b2, c2, d2);
  }, one: function(a2, b2, c2, d2) {
    return ya(this, a2, b2, c2, d2, 1);
  }, off: function(a2, b2, c2) {
    var d2, e2;
    if (a2 && a2.preventDefault && a2.handleObj)
      return d2 = a2.handleObj, r(a2.delegateTarget).off(d2.namespace ? d2.origType + "." + d2.namespace : d2.origType, d2.selector, d2.handler), this;
    if ("object" == typeof a2) {
      for (e2 in a2)
        this.off(e2, b2, a2[e2]);
      return this;
    }
    return b2 !== false && "function" != typeof b2 || (c2 = b2, b2 = void 0), c2 === false && (c2 = wa), this.each(function() {
      r.event.remove(this, a2, c2, b2);
    });
  } });
  var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Aa = /<script|<style|<link/i, Ba = /checked\s*(?:[^=]|=\s*.checked.)/i, Ca = /^true\/(.*)/, Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Ea(a2, b2) {
    return B(a2, "table") && B(11 !== b2.nodeType ? b2 : b2.firstChild, "tr") ? r(">tbody", a2)[0] || a2 : a2;
  }
  function Fa(a2) {
    return a2.type = (null !== a2.getAttribute("type")) + "/" + a2.type, a2;
  }
  function Ga(a2) {
    var b2 = Ca.exec(a2.type);
    return b2 ? a2.type = b2[1] : a2.removeAttribute("type"), a2;
  }
  function Ha(a2, b2) {
    var c2, d2, e2, f2, g2, h2, i2, j2;
    if (1 === b2.nodeType) {
      if (W.hasData(a2) && (f2 = W.access(a2), g2 = W.set(b2, f2), j2 = f2.events)) {
        delete g2.handle, g2.events = {};
        for (e2 in j2)
          for (c2 = 0, d2 = j2[e2].length; c2 < d2; c2++)
            r.event.add(b2, e2, j2[e2][c2]);
      }
      X.hasData(a2) && (h2 = X.access(a2), i2 = r.extend({}, h2), X.set(b2, i2));
    }
  }
  function Ia(a2, b2) {
    var c2 = b2.nodeName.toLowerCase();
    "input" === c2 && ja.test(a2.type) ? b2.checked = a2.checked : "input" !== c2 && "textarea" !== c2 || (b2.defaultValue = a2.defaultValue);
  }
  function Ja(a2, b2, c2, d2) {
    b2 = g.apply([], b2);
    var e2, f2, h2, i2, j2, k2, l2 = 0, m2 = a2.length, n2 = m2 - 1, q2 = b2[0], s2 = r.isFunction(q2);
    if (s2 || m2 > 1 && "string" == typeof q2 && !o.checkClone && Ba.test(q2))
      return a2.each(function(e3) {
        var f3 = a2.eq(e3);
        s2 && (b2[0] = q2.call(this, e3, f3.html())), Ja(f3, b2, c2, d2);
      });
    if (m2 && (e2 = qa(b2, a2[0].ownerDocument, false, a2, d2), f2 = e2.firstChild, 1 === e2.childNodes.length && (e2 = f2), f2 || d2)) {
      for (h2 = r.map(na(e2, "script"), Fa), i2 = h2.length; l2 < m2; l2++)
        j2 = e2, l2 !== n2 && (j2 = r.clone(j2, true, true), i2 && r.merge(h2, na(j2, "script"))), c2.call(a2[l2], j2, l2);
      if (i2)
        for (k2 = h2[h2.length - 1].ownerDocument, r.map(h2, Ga), l2 = 0; l2 < i2; l2++)
          j2 = h2[l2], la.test(j2.type || "") && !W.access(j2, "globalEval") && r.contains(k2, j2) && (j2.src ? r._evalUrl && r._evalUrl(j2.src) : p(j2.textContent.replace(Da, ""), k2));
    }
    return a2;
  }
  function Ka(a2, b2, c2) {
    for (var d2, e2 = b2 ? r.filter(b2, a2) : a2, f2 = 0; null != (d2 = e2[f2]); f2++)
      c2 || 1 !== d2.nodeType || r.cleanData(na(d2)), d2.parentNode && (c2 && r.contains(d2.ownerDocument, d2) && oa(na(d2, "script")), d2.parentNode.removeChild(d2));
    return a2;
  }
  r.extend({ htmlPrefilter: function(a2) {
    return a2.replace(za, "<$1></$2>");
  }, clone: function(a2, b2, c2) {
    var d2, e2, f2, g2, h2 = a2.cloneNode(true), i2 = r.contains(a2.ownerDocument, a2);
    if (!(o.noCloneChecked || 1 !== a2.nodeType && 11 !== a2.nodeType || r.isXMLDoc(a2)))
      for (g2 = na(h2), f2 = na(a2), d2 = 0, e2 = f2.length; d2 < e2; d2++)
        Ia(f2[d2], g2[d2]);
    if (b2)
      if (c2)
        for (f2 = f2 || na(a2), g2 = g2 || na(h2), d2 = 0, e2 = f2.length; d2 < e2; d2++)
          Ha(f2[d2], g2[d2]);
      else
        Ha(a2, h2);
    return g2 = na(h2, "script"), g2.length > 0 && oa(g2, !i2 && na(a2, "script")), h2;
  }, cleanData: function(a2) {
    for (var b2, c2, d2, e2 = r.event.special, f2 = 0; void 0 !== (c2 = a2[f2]); f2++)
      if (U(c2)) {
        if (b2 = c2[W.expando]) {
          if (b2.events)
            for (d2 in b2.events)
              e2[d2] ? r.event.remove(c2, d2) : r.removeEvent(c2, d2, b2.handle);
          c2[W.expando] = void 0;
        }
        c2[X.expando] && (c2[X.expando] = void 0);
      }
  } }), r.fn.extend({ detach: function(a2) {
    return Ka(this, a2, true);
  }, remove: function(a2) {
    return Ka(this, a2);
  }, text: function(a2) {
    return T(this, function(a3) {
      return void 0 === a3 ? r.text(this) : this.empty().each(function() {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a3);
      });
    }, null, a2, arguments.length);
  }, append: function() {
    return Ja(this, arguments, function(a2) {
      if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
        var b2 = Ea(this, a2);
        b2.appendChild(a2);
      }
    });
  }, prepend: function() {
    return Ja(this, arguments, function(a2) {
      if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
        var b2 = Ea(this, a2);
        b2.insertBefore(a2, b2.firstChild);
      }
    });
  }, before: function() {
    return Ja(this, arguments, function(a2) {
      this.parentNode && this.parentNode.insertBefore(a2, this);
    });
  }, after: function() {
    return Ja(this, arguments, function(a2) {
      this.parentNode && this.parentNode.insertBefore(a2, this.nextSibling);
    });
  }, empty: function() {
    for (var a2, b2 = 0; null != (a2 = this[b2]); b2++)
      1 === a2.nodeType && (r.cleanData(na(a2, false)), a2.textContent = "");
    return this;
  }, clone: function(a2, b2) {
    return a2 = null != a2 && a2, b2 = null == b2 ? a2 : b2, this.map(function() {
      return r.clone(this, a2, b2);
    });
  }, html: function(a2) {
    return T(this, function(a3) {
      var b2 = this[0] || {}, c2 = 0, d2 = this.length;
      if (void 0 === a3 && 1 === b2.nodeType)
        return b2.innerHTML;
      if ("string" == typeof a3 && !Aa.test(a3) && !ma[(ka.exec(a3) || ["", ""])[1].toLowerCase()]) {
        a3 = r.htmlPrefilter(a3);
        try {
          for (; c2 < d2; c2++)
            b2 = this[c2] || {}, 1 === b2.nodeType && (r.cleanData(na(b2, false)), b2.innerHTML = a3);
          b2 = 0;
        } catch (e2) {
        }
      }
      b2 && this.empty().append(a3);
    }, null, a2, arguments.length);
  }, replaceWith: function() {
    var a2 = [];
    return Ja(this, arguments, function(b2) {
      var c2 = this.parentNode;
      r.inArray(this, a2) < 0 && (r.cleanData(na(this)), c2 && c2.replaceChild(b2, this));
    }, a2);
  } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a2, b2) {
    r.fn[a2] = function(a3) {
      for (var c2, d2 = [], e2 = r(a3), f2 = e2.length - 1, g2 = 0; g2 <= f2; g2++)
        c2 = g2 === f2 ? this : this.clone(true), r(e2[g2])[b2](c2), h.apply(d2, c2.get());
      return this.pushStack(d2);
    };
  });
  var La = /^margin/, Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"), Na = function(b2) {
    var c2 = b2.ownerDocument.defaultView;
    return c2 && c2.opener || (c2 = a), c2.getComputedStyle(b2);
  };
  !function() {
    function b2() {
      if (i2) {
        i2.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i2.innerHTML = "", ra.appendChild(h2);
        var b3 = a.getComputedStyle(i2);
        c2 = "1%" !== b3.top, g2 = "2px" === b3.marginLeft, e2 = "4px" === b3.width, i2.style.marginRight = "50%", f2 = "4px" === b3.marginRight, ra.removeChild(h2), i2 = null;
      }
    }
    var c2, e2, f2, g2, h2 = d.createElement("div"), i2 = d.createElement("div");
    i2.style && (i2.style.backgroundClip = "content-box", i2.cloneNode(true).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i2.style.backgroundClip, h2.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h2.appendChild(i2), r.extend(o, { pixelPosition: function() {
      return b2(), c2;
    }, boxSizingReliable: function() {
      return b2(), e2;
    }, pixelMarginRight: function() {
      return b2(), f2;
    }, reliableMarginLeft: function() {
      return b2(), g2;
    } }));
  }();
  function Oa(a2, b2, c2) {
    var d2, e2, f2, g2, h2 = a2.style;
    return c2 = c2 || Na(a2), c2 && (g2 = c2.getPropertyValue(b2) || c2[b2], "" !== g2 || r.contains(a2.ownerDocument, a2) || (g2 = r.style(a2, b2)), !o.pixelMarginRight() && Ma.test(g2) && La.test(b2) && (d2 = h2.width, e2 = h2.minWidth, f2 = h2.maxWidth, h2.minWidth = h2.maxWidth = h2.width = g2, g2 = c2.width, h2.width = d2, h2.minWidth = e2, h2.maxWidth = f2)), void 0 !== g2 ? g2 + "" : g2;
  }
  function Pa(a2, b2) {
    return { get: function() {
      return a2() ? void delete this.get : (this.get = b2).apply(this, arguments);
    } };
  }
  var Qa = /^(none|table(?!-c[ea]).+)/, Ra = /^--/, Sa = { position: "absolute", visibility: "hidden", display: "block" }, Ta = { letterSpacing: "0", fontWeight: "400" }, Ua = ["Webkit", "Moz", "ms"], Va = d.createElement("div").style;
  function Wa(a2) {
    if (a2 in Va)
      return a2;
    var b2 = a2[0].toUpperCase() + a2.slice(1), c2 = Ua.length;
    while (c2--)
      if (a2 = Ua[c2] + b2, a2 in Va)
        return a2;
  }
  function Xa(a2) {
    var b2 = r.cssProps[a2];
    return b2 || (b2 = r.cssProps[a2] = Wa(a2) || a2), b2;
  }
  function Ya(a2, b2, c2) {
    var d2 = ba.exec(b2);
    return d2 ? Math.max(0, d2[2] - (c2 || 0)) + (d2[3] || "px") : b2;
  }
  function Za(a2, b2, c2, d2, e2) {
    var f2, g2 = 0;
    for (f2 = c2 === (d2 ? "border" : "content") ? 4 : "width" === b2 ? 1 : 0; f2 < 4; f2 += 2)
      "margin" === c2 && (g2 += r.css(a2, c2 + ca[f2], true, e2)), d2 ? ("content" === c2 && (g2 -= r.css(a2, "padding" + ca[f2], true, e2)), "margin" !== c2 && (g2 -= r.css(a2, "border" + ca[f2] + "Width", true, e2))) : (g2 += r.css(a2, "padding" + ca[f2], true, e2), "padding" !== c2 && (g2 += r.css(a2, "border" + ca[f2] + "Width", true, e2)));
    return g2;
  }
  function $a(a2, b2, c2) {
    var d2, e2 = Na(a2), f2 = Oa(a2, b2, e2), g2 = "border-box" === r.css(a2, "boxSizing", false, e2);
    return Ma.test(f2) ? f2 : (d2 = g2 && (o.boxSizingReliable() || f2 === a2.style[b2]), "auto" === f2 && (f2 = a2["offset" + b2[0].toUpperCase() + b2.slice(1)]), f2 = parseFloat(f2) || 0, f2 + Za(a2, b2, c2 || (g2 ? "border" : "content"), d2, e2) + "px");
  }
  r.extend({ cssHooks: { opacity: { get: function(a2, b2) {
    if (b2) {
      var c2 = Oa(a2, "opacity");
      return "" === c2 ? "1" : c2;
    }
  } } }, cssNumber: { animationIterationCount: true, columnCount: true, fillOpacity: true, flexGrow: true, flexShrink: true, fontWeight: true, lineHeight: true, opacity: true, order: true, orphans: true, widows: true, zIndex: true, zoom: true }, cssProps: { "float": "cssFloat" }, style: function(a2, b2, c2, d2) {
    if (a2 && 3 !== a2.nodeType && 8 !== a2.nodeType && a2.style) {
      var e2, f2, g2, h2 = r.camelCase(b2), i2 = Ra.test(b2), j2 = a2.style;
      return i2 || (b2 = Xa(h2)), g2 = r.cssHooks[b2] || r.cssHooks[h2], void 0 === c2 ? g2 && "get" in g2 && void 0 !== (e2 = g2.get(a2, false, d2)) ? e2 : j2[b2] : (f2 = typeof c2, "string" === f2 && (e2 = ba.exec(c2)) && e2[1] && (c2 = fa(a2, b2, e2), f2 = "number"), null != c2 && c2 === c2 && ("number" === f2 && (c2 += e2 && e2[3] || (r.cssNumber[h2] ? "" : "px")), o.clearCloneStyle || "" !== c2 || 0 !== b2.indexOf("background") || (j2[b2] = "inherit"), g2 && "set" in g2 && void 0 === (c2 = g2.set(a2, c2, d2)) || (i2 ? j2.setProperty(b2, c2) : j2[b2] = c2)), void 0);
    }
  }, css: function(a2, b2, c2, d2) {
    var e2, f2, g2, h2 = r.camelCase(b2), i2 = Ra.test(b2);
    return i2 || (b2 = Xa(h2)), g2 = r.cssHooks[b2] || r.cssHooks[h2], g2 && "get" in g2 && (e2 = g2.get(a2, true, c2)), void 0 === e2 && (e2 = Oa(a2, b2, d2)), "normal" === e2 && b2 in Ta && (e2 = Ta[b2]), "" === c2 || c2 ? (f2 = parseFloat(e2), c2 === true || isFinite(f2) ? f2 || 0 : e2) : e2;
  } }), r.each(["height", "width"], function(a2, b2) {
    r.cssHooks[b2] = { get: function(a3, c2, d2) {
      if (c2)
        return !Qa.test(r.css(a3, "display")) || a3.getClientRects().length && a3.getBoundingClientRect().width ? $a(a3, b2, d2) : ea(a3, Sa, function() {
          return $a(a3, b2, d2);
        });
    }, set: function(a3, c2, d2) {
      var e2, f2 = d2 && Na(a3), g2 = d2 && Za(a3, b2, d2, "border-box" === r.css(a3, "boxSizing", false, f2), f2);
      return g2 && (e2 = ba.exec(c2)) && "px" !== (e2[3] || "px") && (a3.style[b2] = c2, c2 = r.css(a3, b2)), Ya(a3, c2, g2);
    } };
  }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function(a2, b2) {
    if (b2)
      return (parseFloat(Oa(a2, "marginLeft")) || a2.getBoundingClientRect().left - ea(a2, { marginLeft: 0 }, function() {
        return a2.getBoundingClientRect().left;
      })) + "px";
  }), r.each({ margin: "", padding: "", border: "Width" }, function(a2, b2) {
    r.cssHooks[a2 + b2] = { expand: function(c2) {
      for (var d2 = 0, e2 = {}, f2 = "string" == typeof c2 ? c2.split(" ") : [c2]; d2 < 4; d2++)
        e2[a2 + ca[d2] + b2] = f2[d2] || f2[d2 - 2] || f2[0];
      return e2;
    } }, La.test(a2) || (r.cssHooks[a2 + b2].set = Ya);
  }), r.fn.extend({ css: function(a2, b2) {
    return T(this, function(a3, b3, c2) {
      var d2, e2, f2 = {}, g2 = 0;
      if (Array.isArray(b3)) {
        for (d2 = Na(a3), e2 = b3.length; g2 < e2; g2++)
          f2[b3[g2]] = r.css(a3, b3[g2], false, d2);
        return f2;
      }
      return void 0 !== c2 ? r.style(a3, b3, c2) : r.css(a3, b3);
    }, a2, b2, arguments.length > 1);
  } });
  function _a(a2, b2, c2, d2, e2) {
    return new _a.prototype.init(a2, b2, c2, d2, e2);
  }
  r.Tween = _a, _a.prototype = { constructor: _a, init: function(a2, b2, c2, d2, e2, f2) {
    this.elem = a2, this.prop = c2, this.easing = e2 || r.easing._default, this.options = b2, this.start = this.now = this.cur(), this.end = d2, this.unit = f2 || (r.cssNumber[c2] ? "" : "px");
  }, cur: function() {
    var a2 = _a.propHooks[this.prop];
    return a2 && a2.get ? a2.get(this) : _a.propHooks._default.get(this);
  }, run: function(a2) {
    var b2, c2 = _a.propHooks[this.prop];
    return this.options.duration ? this.pos = b2 = r.easing[this.easing](a2, this.options.duration * a2, 0, 1, this.options.duration) : this.pos = b2 = a2, this.now = (this.end - this.start) * b2 + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c2 && c2.set ? c2.set(this) : _a.propHooks._default.set(this), this;
  } }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = { _default: { get: function(a2) {
    var b2;
    return 1 !== a2.elem.nodeType || null != a2.elem[a2.prop] && null == a2.elem.style[a2.prop] ? a2.elem[a2.prop] : (b2 = r.css(a2.elem, a2.prop, ""), b2 && "auto" !== b2 ? b2 : 0);
  }, set: function(a2) {
    r.fx.step[a2.prop] ? r.fx.step[a2.prop](a2) : 1 !== a2.elem.nodeType || null == a2.elem.style[r.cssProps[a2.prop]] && !r.cssHooks[a2.prop] ? a2.elem[a2.prop] = a2.now : r.style(a2.elem, a2.prop, a2.now + a2.unit);
  } } }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = { set: function(a2) {
    a2.elem.nodeType && a2.elem.parentNode && (a2.elem[a2.prop] = a2.now);
  } }, r.easing = { linear: function(a2) {
    return a2;
  }, swing: function(a2) {
    return 0.5 - Math.cos(a2 * Math.PI) / 2;
  }, _default: "swing" }, r.fx = _a.prototype.init, r.fx.step = {};
  var ab, bb, cb = /^(?:toggle|show|hide)$/, db = /queueHooks$/;
  function eb() {
    bb && (d.hidden === false && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick());
  }
  function fb() {
    return a.setTimeout(function() {
      ab = void 0;
    }), ab = r.now();
  }
  function gb(a2, b2) {
    var c2, d2 = 0, e2 = { height: a2 };
    for (b2 = b2 ? 1 : 0; d2 < 4; d2 += 2 - b2)
      c2 = ca[d2], e2["margin" + c2] = e2["padding" + c2] = a2;
    return b2 && (e2.opacity = e2.width = a2), e2;
  }
  function hb(a2, b2, c2) {
    for (var d2, e2 = (kb.tweeners[b2] || []).concat(kb.tweeners["*"]), f2 = 0, g2 = e2.length; f2 < g2; f2++)
      if (d2 = e2[f2].call(c2, b2, a2))
        return d2;
  }
  function ib(a2, b2, c2) {
    var d2, e2, f2, g2, h2, i2, j2, k2, l2 = "width" in b2 || "height" in b2, m2 = this, n2 = {}, o2 = a2.style, p2 = a2.nodeType && da(a2), q2 = W.get(a2, "fxshow");
    c2.queue || (g2 = r._queueHooks(a2, "fx"), null == g2.unqueued && (g2.unqueued = 0, h2 = g2.empty.fire, g2.empty.fire = function() {
      g2.unqueued || h2();
    }), g2.unqueued++, m2.always(function() {
      m2.always(function() {
        g2.unqueued--, r.queue(a2, "fx").length || g2.empty.fire();
      });
    }));
    for (d2 in b2)
      if (e2 = b2[d2], cb.test(e2)) {
        if (delete b2[d2], f2 = f2 || "toggle" === e2, e2 === (p2 ? "hide" : "show")) {
          if ("show" !== e2 || !q2 || void 0 === q2[d2])
            continue;
          p2 = true;
        }
        n2[d2] = q2 && q2[d2] || r.style(a2, d2);
      }
    if (i2 = !r.isEmptyObject(b2), i2 || !r.isEmptyObject(n2)) {
      l2 && 1 === a2.nodeType && (c2.overflow = [o2.overflow, o2.overflowX, o2.overflowY], j2 = q2 && q2.display, null == j2 && (j2 = W.get(a2, "display")), k2 = r.css(a2, "display"), "none" === k2 && (j2 ? k2 = j2 : (ia([a2], true), j2 = a2.style.display || j2, k2 = r.css(a2, "display"), ia([a2]))), ("inline" === k2 || "inline-block" === k2 && null != j2) && "none" === r.css(a2, "float") && (i2 || (m2.done(function() {
        o2.display = j2;
      }), null == j2 && (k2 = o2.display, j2 = "none" === k2 ? "" : k2)), o2.display = "inline-block")), c2.overflow && (o2.overflow = "hidden", m2.always(function() {
        o2.overflow = c2.overflow[0], o2.overflowX = c2.overflow[1], o2.overflowY = c2.overflow[2];
      })), i2 = false;
      for (d2 in n2)
        i2 || (q2 ? "hidden" in q2 && (p2 = q2.hidden) : q2 = W.access(a2, "fxshow", { display: j2 }), f2 && (q2.hidden = !p2), p2 && ia([a2], true), m2.done(function() {
          p2 || ia([a2]), W.remove(a2, "fxshow");
          for (d2 in n2)
            r.style(a2, d2, n2[d2]);
        })), i2 = hb(p2 ? q2[d2] : 0, d2, m2), d2 in q2 || (q2[d2] = i2.start, p2 && (i2.end = i2.start, i2.start = 0));
    }
  }
  function jb(a2, b2) {
    var c2, d2, e2, f2, g2;
    for (c2 in a2)
      if (d2 = r.camelCase(c2), e2 = b2[d2], f2 = a2[c2], Array.isArray(f2) && (e2 = f2[1], f2 = a2[c2] = f2[0]), c2 !== d2 && (a2[d2] = f2, delete a2[c2]), g2 = r.cssHooks[d2], g2 && "expand" in g2) {
        f2 = g2.expand(f2), delete a2[d2];
        for (c2 in f2)
          c2 in a2 || (a2[c2] = f2[c2], b2[c2] = e2);
      } else
        b2[d2] = e2;
  }
  function kb(a2, b2, c2) {
    var d2, e2, f2 = 0, g2 = kb.prefilters.length, h2 = r.Deferred().always(function() {
      delete i2.elem;
    }), i2 = function() {
      if (e2)
        return false;
      for (var b3 = ab || fb(), c3 = Math.max(0, j2.startTime + j2.duration - b3), d3 = c3 / j2.duration || 0, f3 = 1 - d3, g3 = 0, i3 = j2.tweens.length; g3 < i3; g3++)
        j2.tweens[g3].run(f3);
      return h2.notifyWith(a2, [j2, f3, c3]), f3 < 1 && i3 ? c3 : (i3 || h2.notifyWith(a2, [j2, 1, 0]), h2.resolveWith(a2, [j2]), false);
    }, j2 = h2.promise({ elem: a2, props: r.extend({}, b2), opts: r.extend(true, { specialEasing: {}, easing: r.easing._default }, c2), originalProperties: b2, originalOptions: c2, startTime: ab || fb(), duration: c2.duration, tweens: [], createTween: function(b3, c3) {
      var d3 = r.Tween(a2, j2.opts, b3, c3, j2.opts.specialEasing[b3] || j2.opts.easing);
      return j2.tweens.push(d3), d3;
    }, stop: function(b3) {
      var c3 = 0, d3 = b3 ? j2.tweens.length : 0;
      if (e2)
        return this;
      for (e2 = true; c3 < d3; c3++)
        j2.tweens[c3].run(1);
      return b3 ? (h2.notifyWith(a2, [j2, 1, 0]), h2.resolveWith(a2, [j2, b3])) : h2.rejectWith(a2, [j2, b3]), this;
    } }), k2 = j2.props;
    for (jb(k2, j2.opts.specialEasing); f2 < g2; f2++)
      if (d2 = kb.prefilters[f2].call(j2, a2, k2, j2.opts))
        return r.isFunction(d2.stop) && (r._queueHooks(j2.elem, j2.opts.queue).stop = r.proxy(d2.stop, d2)), d2;
    return r.map(k2, hb, j2), r.isFunction(j2.opts.start) && j2.opts.start.call(a2, j2), j2.progress(j2.opts.progress).done(j2.opts.done, j2.opts.complete).fail(j2.opts.fail).always(j2.opts.always), r.fx.timer(r.extend(i2, { elem: a2, anim: j2, queue: j2.opts.queue })), j2;
  }
  r.Animation = r.extend(kb, { tweeners: { "*": [function(a2, b2) {
    var c2 = this.createTween(a2, b2);
    return fa(c2.elem, a2, ba.exec(b2), c2), c2;
  }] }, tweener: function(a2, b2) {
    r.isFunction(a2) ? (b2 = a2, a2 = ["*"]) : a2 = a2.match(L);
    for (var c2, d2 = 0, e2 = a2.length; d2 < e2; d2++)
      c2 = a2[d2], kb.tweeners[c2] = kb.tweeners[c2] || [], kb.tweeners[c2].unshift(b2);
  }, prefilters: [ib], prefilter: function(a2, b2) {
    b2 ? kb.prefilters.unshift(a2) : kb.prefilters.push(a2);
  } }), r.speed = function(a2, b2, c2) {
    var d2 = a2 && "object" == typeof a2 ? r.extend({}, a2) : { complete: c2 || !c2 && b2 || r.isFunction(a2) && a2, duration: a2, easing: c2 && b2 || b2 && !r.isFunction(b2) && b2 };
    return r.fx.off ? d2.duration = 0 : "number" != typeof d2.duration && (d2.duration in r.fx.speeds ? d2.duration = r.fx.speeds[d2.duration] : d2.duration = r.fx.speeds._default), null != d2.queue && d2.queue !== true || (d2.queue = "fx"), d2.old = d2.complete, d2.complete = function() {
      r.isFunction(d2.old) && d2.old.call(this), d2.queue && r.dequeue(this, d2.queue);
    }, d2;
  }, r.fn.extend({ fadeTo: function(a2, b2, c2, d2) {
    return this.filter(da).css("opacity", 0).show().end().animate({ opacity: b2 }, a2, c2, d2);
  }, animate: function(a2, b2, c2, d2) {
    var e2 = r.isEmptyObject(a2), f2 = r.speed(b2, c2, d2), g2 = function() {
      var b3 = kb(this, r.extend({}, a2), f2);
      (e2 || W.get(this, "finish")) && b3.stop(true);
    };
    return g2.finish = g2, e2 || f2.queue === false ? this.each(g2) : this.queue(f2.queue, g2);
  }, stop: function(a2, b2, c2) {
    var d2 = function(a3) {
      var b3 = a3.stop;
      delete a3.stop, b3(c2);
    };
    return "string" != typeof a2 && (c2 = b2, b2 = a2, a2 = void 0), b2 && a2 !== false && this.queue(a2 || "fx", []), this.each(function() {
      var b3 = true, e2 = null != a2 && a2 + "queueHooks", f2 = r.timers, g2 = W.get(this);
      if (e2)
        g2[e2] && g2[e2].stop && d2(g2[e2]);
      else
        for (e2 in g2)
          g2[e2] && g2[e2].stop && db.test(e2) && d2(g2[e2]);
      for (e2 = f2.length; e2--; )
        f2[e2].elem !== this || null != a2 && f2[e2].queue !== a2 || (f2[e2].anim.stop(c2), b3 = false, f2.splice(e2, 1));
      !b3 && c2 || r.dequeue(this, a2);
    });
  }, finish: function(a2) {
    return a2 !== false && (a2 = a2 || "fx"), this.each(function() {
      var b2, c2 = W.get(this), d2 = c2[a2 + "queue"], e2 = c2[a2 + "queueHooks"], f2 = r.timers, g2 = d2 ? d2.length : 0;
      for (c2.finish = true, r.queue(this, a2, []), e2 && e2.stop && e2.stop.call(this, true), b2 = f2.length; b2--; )
        f2[b2].elem === this && f2[b2].queue === a2 && (f2[b2].anim.stop(true), f2.splice(b2, 1));
      for (b2 = 0; b2 < g2; b2++)
        d2[b2] && d2[b2].finish && d2[b2].finish.call(this);
      delete c2.finish;
    });
  } }), r.each(["toggle", "show", "hide"], function(a2, b2) {
    var c2 = r.fn[b2];
    r.fn[b2] = function(a3, d2, e2) {
      return null == a3 || "boolean" == typeof a3 ? c2.apply(this, arguments) : this.animate(gb(b2, true), a3, d2, e2);
    };
  }), r.each({ slideDown: gb("show"), slideUp: gb("hide"), slideToggle: gb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a2, b2) {
    r.fn[a2] = function(a3, c2, d2) {
      return this.animate(b2, a3, c2, d2);
    };
  }), r.timers = [], r.fx.tick = function() {
    var a2, b2 = 0, c2 = r.timers;
    for (ab = r.now(); b2 < c2.length; b2++)
      a2 = c2[b2], a2() || c2[b2] !== a2 || c2.splice(b2--, 1);
    c2.length || r.fx.stop(), ab = void 0;
  }, r.fx.timer = function(a2) {
    r.timers.push(a2), r.fx.start();
  }, r.fx.interval = 13, r.fx.start = function() {
    bb || (bb = true, eb());
  }, r.fx.stop = function() {
    bb = null;
  }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function(b2, c2) {
    return b2 = r.fx ? r.fx.speeds[b2] || b2 : b2, c2 = c2 || "fx", this.queue(c2, function(c3, d2) {
      var e2 = a.setTimeout(c3, b2);
      d2.stop = function() {
        a.clearTimeout(e2);
      };
    });
  }, function() {
    var a2 = d.createElement("input"), b2 = d.createElement("select"), c2 = b2.appendChild(d.createElement("option"));
    a2.type = "checkbox", o.checkOn = "" !== a2.value, o.optSelected = c2.selected, a2 = d.createElement("input"), a2.value = "t", a2.type = "radio", o.radioValue = "t" === a2.value;
  }();
  var lb, mb = r.expr.attrHandle;
  r.fn.extend({ attr: function(a2, b2) {
    return T(this, r.attr, a2, b2, arguments.length > 1);
  }, removeAttr: function(a2) {
    return this.each(function() {
      r.removeAttr(this, a2);
    });
  } }), r.extend({ attr: function(a2, b2, c2) {
    var d2, e2, f2 = a2.nodeType;
    if (3 !== f2 && 8 !== f2 && 2 !== f2)
      return "undefined" == typeof a2.getAttribute ? r.prop(a2, b2, c2) : (1 === f2 && r.isXMLDoc(a2) || (e2 = r.attrHooks[b2.toLowerCase()] || (r.expr.match.bool.test(b2) ? lb : void 0)), void 0 !== c2 ? null === c2 ? void r.removeAttr(a2, b2) : e2 && "set" in e2 && void 0 !== (d2 = e2.set(a2, c2, b2)) ? d2 : (a2.setAttribute(b2, c2 + ""), c2) : e2 && "get" in e2 && null !== (d2 = e2.get(a2, b2)) ? d2 : (d2 = r.find.attr(a2, b2), null == d2 ? void 0 : d2));
  }, attrHooks: { type: { set: function(a2, b2) {
    if (!o.radioValue && "radio" === b2 && B(a2, "input")) {
      var c2 = a2.value;
      return a2.setAttribute("type", b2), c2 && (a2.value = c2), b2;
    }
  } } }, removeAttr: function(a2, b2) {
    var c2, d2 = 0, e2 = b2 && b2.match(L);
    if (e2 && 1 === a2.nodeType)
      while (c2 = e2[d2++])
        a2.removeAttribute(c2);
  } }), lb = { set: function(a2, b2, c2) {
    return b2 === false ? r.removeAttr(a2, c2) : a2.setAttribute(c2, c2), c2;
  } }, r.each(r.expr.match.bool.source.match(/\w+/g), function(a2, b2) {
    var c2 = mb[b2] || r.find.attr;
    mb[b2] = function(a3, b3, d2) {
      var e2, f2, g2 = b3.toLowerCase();
      return d2 || (f2 = mb[g2], mb[g2] = e2, e2 = null != c2(a3, b3, d2) ? g2 : null, mb[g2] = f2), e2;
    };
  });
  var nb = /^(?:input|select|textarea|button)$/i, ob = /^(?:a|area)$/i;
  r.fn.extend({ prop: function(a2, b2) {
    return T(this, r.prop, a2, b2, arguments.length > 1);
  }, removeProp: function(a2) {
    return this.each(function() {
      delete this[r.propFix[a2] || a2];
    });
  } }), r.extend({ prop: function(a2, b2, c2) {
    var d2, e2, f2 = a2.nodeType;
    if (3 !== f2 && 8 !== f2 && 2 !== f2)
      return 1 === f2 && r.isXMLDoc(a2) || (b2 = r.propFix[b2] || b2, e2 = r.propHooks[b2]), void 0 !== c2 ? e2 && "set" in e2 && void 0 !== (d2 = e2.set(a2, c2, b2)) ? d2 : a2[b2] = c2 : e2 && "get" in e2 && null !== (d2 = e2.get(a2, b2)) ? d2 : a2[b2];
  }, propHooks: { tabIndex: { get: function(a2) {
    var b2 = r.find.attr(a2, "tabindex");
    return b2 ? parseInt(b2, 10) : nb.test(a2.nodeName) || ob.test(a2.nodeName) && a2.href ? 0 : -1;
  } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function(a2) {
    var b2 = a2.parentNode;
    return b2 && b2.parentNode && b2.parentNode.selectedIndex, null;
  }, set: function(a2) {
    var b2 = a2.parentNode;
    b2 && (b2.selectedIndex, b2.parentNode && b2.parentNode.selectedIndex);
  } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    r.propFix[this.toLowerCase()] = this;
  });
  function pb(a2) {
    var b2 = a2.match(L) || [];
    return b2.join(" ");
  }
  function qb(a2) {
    return a2.getAttribute && a2.getAttribute("class") || "";
  }
  r.fn.extend({ addClass: function(a2) {
    var b2, c2, d2, e2, f2, g2, h2, i2 = 0;
    if (r.isFunction(a2))
      return this.each(function(b3) {
        r(this).addClass(a2.call(this, b3, qb(this)));
      });
    if ("string" == typeof a2 && a2) {
      b2 = a2.match(L) || [];
      while (c2 = this[i2++])
        if (e2 = qb(c2), d2 = 1 === c2.nodeType && " " + pb(e2) + " ") {
          g2 = 0;
          while (f2 = b2[g2++])
            d2.indexOf(" " + f2 + " ") < 0 && (d2 += f2 + " ");
          h2 = pb(d2), e2 !== h2 && c2.setAttribute("class", h2);
        }
    }
    return this;
  }, removeClass: function(a2) {
    var b2, c2, d2, e2, f2, g2, h2, i2 = 0;
    if (r.isFunction(a2))
      return this.each(function(b3) {
        r(this).removeClass(a2.call(this, b3, qb(this)));
      });
    if (!arguments.length)
      return this.attr("class", "");
    if ("string" == typeof a2 && a2) {
      b2 = a2.match(L) || [];
      while (c2 = this[i2++])
        if (e2 = qb(c2), d2 = 1 === c2.nodeType && " " + pb(e2) + " ") {
          g2 = 0;
          while (f2 = b2[g2++])
            while (d2.indexOf(" " + f2 + " ") > -1)
              d2 = d2.replace(" " + f2 + " ", " ");
          h2 = pb(d2), e2 !== h2 && c2.setAttribute("class", h2);
        }
    }
    return this;
  }, toggleClass: function(a2, b2) {
    var c2 = typeof a2;
    return "boolean" == typeof b2 && "string" === c2 ? b2 ? this.addClass(a2) : this.removeClass(a2) : r.isFunction(a2) ? this.each(function(c3) {
      r(this).toggleClass(a2.call(this, c3, qb(this), b2), b2);
    }) : this.each(function() {
      var b3, d2, e2, f2;
      if ("string" === c2) {
        d2 = 0, e2 = r(this), f2 = a2.match(L) || [];
        while (b3 = f2[d2++])
          e2.hasClass(b3) ? e2.removeClass(b3) : e2.addClass(b3);
      } else
        void 0 !== a2 && "boolean" !== c2 || (b3 = qb(this), b3 && W.set(this, "__className__", b3), this.setAttribute && this.setAttribute("class", b3 || a2 === false ? "" : W.get(this, "__className__") || ""));
    });
  }, hasClass: function(a2) {
    var b2, c2, d2 = 0;
    b2 = " " + a2 + " ";
    while (c2 = this[d2++])
      if (1 === c2.nodeType && (" " + pb(qb(c2)) + " ").indexOf(b2) > -1)
        return true;
    return false;
  } });
  var rb = /\r/g;
  r.fn.extend({ val: function(a2) {
    var b2, c2, d2, e2 = this[0];
    {
      if (arguments.length)
        return d2 = r.isFunction(a2), this.each(function(c3) {
          var e3;
          1 === this.nodeType && (e3 = d2 ? a2.call(this, c3, r(this).val()) : a2, null == e3 ? e3 = "" : "number" == typeof e3 ? e3 += "" : Array.isArray(e3) && (e3 = r.map(e3, function(a3) {
            return null == a3 ? "" : a3 + "";
          })), b2 = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b2 && "set" in b2 && void 0 !== b2.set(this, e3, "value") || (this.value = e3));
        });
      if (e2)
        return b2 = r.valHooks[e2.type] || r.valHooks[e2.nodeName.toLowerCase()], b2 && "get" in b2 && void 0 !== (c2 = b2.get(e2, "value")) ? c2 : (c2 = e2.value, "string" == typeof c2 ? c2.replace(rb, "") : null == c2 ? "" : c2);
    }
  } }), r.extend({ valHooks: { option: { get: function(a2) {
    var b2 = r.find.attr(a2, "value");
    return null != b2 ? b2 : pb(r.text(a2));
  } }, select: { get: function(a2) {
    var b2, c2, d2, e2 = a2.options, f2 = a2.selectedIndex, g2 = "select-one" === a2.type, h2 = g2 ? null : [], i2 = g2 ? f2 + 1 : e2.length;
    for (d2 = f2 < 0 ? i2 : g2 ? f2 : 0; d2 < i2; d2++)
      if (c2 = e2[d2], (c2.selected || d2 === f2) && !c2.disabled && (!c2.parentNode.disabled || !B(c2.parentNode, "optgroup"))) {
        if (b2 = r(c2).val(), g2)
          return b2;
        h2.push(b2);
      }
    return h2;
  }, set: function(a2, b2) {
    var c2, d2, e2 = a2.options, f2 = r.makeArray(b2), g2 = e2.length;
    while (g2--)
      d2 = e2[g2], (d2.selected = r.inArray(r.valHooks.option.get(d2), f2) > -1) && (c2 = true);
    return c2 || (a2.selectedIndex = -1), f2;
  } } } }), r.each(["radio", "checkbox"], function() {
    r.valHooks[this] = { set: function(a2, b2) {
      if (Array.isArray(b2))
        return a2.checked = r.inArray(r(a2).val(), b2) > -1;
    } }, o.checkOn || (r.valHooks[this].get = function(a2) {
      return null === a2.getAttribute("value") ? "on" : a2.value;
    });
  });
  var sb = /^(?:focusinfocus|focusoutblur)$/;
  r.extend(r.event, { trigger: function(b2, c2, e2, f2) {
    var g2, h2, i2, j2, k2, m2, n2, o2 = [e2 || d], p2 = l.call(b2, "type") ? b2.type : b2, q2 = l.call(b2, "namespace") ? b2.namespace.split(".") : [];
    if (h2 = i2 = e2 = e2 || d, 3 !== e2.nodeType && 8 !== e2.nodeType && !sb.test(p2 + r.event.triggered) && (p2.indexOf(".") > -1 && (q2 = p2.split("."), p2 = q2.shift(), q2.sort()), k2 = p2.indexOf(":") < 0 && "on" + p2, b2 = b2[r.expando] ? b2 : new r.Event(p2, "object" == typeof b2 && b2), b2.isTrigger = f2 ? 2 : 3, b2.namespace = q2.join("."), b2.rnamespace = b2.namespace ? new RegExp("(^|\\.)" + q2.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b2.result = void 0, b2.target || (b2.target = e2), c2 = null == c2 ? [b2] : r.makeArray(c2, [b2]), n2 = r.event.special[p2] || {}, f2 || !n2.trigger || n2.trigger.apply(e2, c2) !== false)) {
      if (!f2 && !n2.noBubble && !r.isWindow(e2)) {
        for (j2 = n2.delegateType || p2, sb.test(j2 + p2) || (h2 = h2.parentNode); h2; h2 = h2.parentNode)
          o2.push(h2), i2 = h2;
        i2 === (e2.ownerDocument || d) && o2.push(i2.defaultView || i2.parentWindow || a);
      }
      g2 = 0;
      while ((h2 = o2[g2++]) && !b2.isPropagationStopped())
        b2.type = g2 > 1 ? j2 : n2.bindType || p2, m2 = (W.get(h2, "events") || {})[b2.type] && W.get(h2, "handle"), m2 && m2.apply(h2, c2), m2 = k2 && h2[k2], m2 && m2.apply && U(h2) && (b2.result = m2.apply(h2, c2), b2.result === false && b2.preventDefault());
      return b2.type = p2, f2 || b2.isDefaultPrevented() || n2._default && n2._default.apply(o2.pop(), c2) !== false || !U(e2) || k2 && r.isFunction(e2[p2]) && !r.isWindow(e2) && (i2 = e2[k2], i2 && (e2[k2] = null), r.event.triggered = p2, e2[p2](), r.event.triggered = void 0, i2 && (e2[k2] = i2)), b2.result;
    }
  }, simulate: function(a2, b2, c2) {
    var d2 = r.extend(new r.Event(), c2, { type: a2, isSimulated: true });
    r.event.trigger(d2, null, b2);
  } }), r.fn.extend({ trigger: function(a2, b2) {
    return this.each(function() {
      r.event.trigger(a2, b2, this);
    });
  }, triggerHandler: function(a2, b2) {
    var c2 = this[0];
    if (c2)
      return r.event.trigger(a2, b2, c2, true);
  } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a2, b2) {
    r.fn[b2] = function(a3, c2) {
      return arguments.length > 0 ? this.on(b2, null, a3, c2) : this.trigger(b2);
    };
  }), r.fn.extend({ hover: function(a2, b2) {
    return this.mouseenter(a2).mouseleave(b2 || a2);
  } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function(a2, b2) {
    var c2 = function(a3) {
      r.event.simulate(b2, a3.target, r.event.fix(a3));
    };
    r.event.special[b2] = { setup: function() {
      var d2 = this.ownerDocument || this, e2 = W.access(d2, b2);
      e2 || d2.addEventListener(a2, c2, true), W.access(d2, b2, (e2 || 0) + 1);
    }, teardown: function() {
      var d2 = this.ownerDocument || this, e2 = W.access(d2, b2) - 1;
      e2 ? W.access(d2, b2, e2) : (d2.removeEventListener(a2, c2, true), W.remove(d2, b2));
    } };
  });
  var tb = a.location, ub = r.now(), vb = /\?/;
  r.parseXML = function(b2) {
    var c2;
    if (!b2 || "string" != typeof b2)
      return null;
    try {
      c2 = new a.DOMParser().parseFromString(b2, "text/xml");
    } catch (d2) {
      c2 = void 0;
    }
    return c2 && !c2.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b2), c2;
  };
  var wb = /\[\]$/, xb = /\r?\n/g, yb = /^(?:submit|button|image|reset|file)$/i, zb = /^(?:input|select|textarea|keygen)/i;
  function Ab(a2, b2, c2, d2) {
    var e2;
    if (Array.isArray(b2))
      r.each(b2, function(b3, e3) {
        c2 || wb.test(a2) ? d2(a2, e3) : Ab(a2 + "[" + ("object" == typeof e3 && null != e3 ? b3 : "") + "]", e3, c2, d2);
      });
    else if (c2 || "object" !== r.type(b2))
      d2(a2, b2);
    else
      for (e2 in b2)
        Ab(a2 + "[" + e2 + "]", b2[e2], c2, d2);
  }
  r.param = function(a2, b2) {
    var c2, d2 = [], e2 = function(a3, b3) {
      var c3 = r.isFunction(b3) ? b3() : b3;
      d2[d2.length] = encodeURIComponent(a3) + "=" + encodeURIComponent(null == c3 ? "" : c3);
    };
    if (Array.isArray(a2) || a2.jquery && !r.isPlainObject(a2))
      r.each(a2, function() {
        e2(this.name, this.value);
      });
    else
      for (c2 in a2)
        Ab(c2, a2[c2], b2, e2);
    return d2.join("&");
  }, r.fn.extend({ serialize: function() {
    return r.param(this.serializeArray());
  }, serializeArray: function() {
    return this.map(function() {
      var a2 = r.prop(this, "elements");
      return a2 ? r.makeArray(a2) : this;
    }).filter(function() {
      var a2 = this.type;
      return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a2) && (this.checked || !ja.test(a2));
    }).map(function(a2, b2) {
      var c2 = r(this).val();
      return null == c2 ? null : Array.isArray(c2) ? r.map(c2, function(a3) {
        return { name: b2.name, value: a3.replace(xb, "\r\n") };
      }) : { name: b2.name, value: c2.replace(xb, "\r\n") };
    }).get();
  } });
  var Bb = /%20/g, Cb = /#.*$/, Db = /([?&])_=[^&]*/, Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm, Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Gb = /^(?:GET|HEAD)$/, Hb = /^\/\//, Ib = {}, Jb = {}, Kb = "*/".concat("*"), Lb = d.createElement("a");
  Lb.href = tb.href;
  function Mb(a2) {
    return function(b2, c2) {
      "string" != typeof b2 && (c2 = b2, b2 = "*");
      var d2, e2 = 0, f2 = b2.toLowerCase().match(L) || [];
      if (r.isFunction(c2))
        while (d2 = f2[e2++])
          "+" === d2[0] ? (d2 = d2.slice(1) || "*", (a2[d2] = a2[d2] || []).unshift(c2)) : (a2[d2] = a2[d2] || []).push(c2);
    };
  }
  function Nb(a2, b2, c2, d2) {
    var e2 = {}, f2 = a2 === Jb;
    function g2(h2) {
      var i2;
      return e2[h2] = true, r.each(a2[h2] || [], function(a3, h3) {
        var j2 = h3(b2, c2, d2);
        return "string" != typeof j2 || f2 || e2[j2] ? f2 ? !(i2 = j2) : void 0 : (b2.dataTypes.unshift(j2), g2(j2), false);
      }), i2;
    }
    return g2(b2.dataTypes[0]) || !e2["*"] && g2("*");
  }
  function Ob(a2, b2) {
    var c2, d2, e2 = r.ajaxSettings.flatOptions || {};
    for (c2 in b2)
      void 0 !== b2[c2] && ((e2[c2] ? a2 : d2 || (d2 = {}))[c2] = b2[c2]);
    return d2 && r.extend(true, a2, d2), a2;
  }
  function Pb(a2, b2, c2) {
    var d2, e2, f2, g2, h2 = a2.contents, i2 = a2.dataTypes;
    while ("*" === i2[0])
      i2.shift(), void 0 === d2 && (d2 = a2.mimeType || b2.getResponseHeader("Content-Type"));
    if (d2) {
      for (e2 in h2)
        if (h2[e2] && h2[e2].test(d2)) {
          i2.unshift(e2);
          break;
        }
    }
    if (i2[0] in c2)
      f2 = i2[0];
    else {
      for (e2 in c2) {
        if (!i2[0] || a2.converters[e2 + " " + i2[0]]) {
          f2 = e2;
          break;
        }
        g2 || (g2 = e2);
      }
      f2 = f2 || g2;
    }
    if (f2)
      return f2 !== i2[0] && i2.unshift(f2), c2[f2];
  }
  function Qb(a2, b2, c2, d2) {
    var e2, f2, g2, h2, i2, j2 = {}, k2 = a2.dataTypes.slice();
    if (k2[1])
      for (g2 in a2.converters)
        j2[g2.toLowerCase()] = a2.converters[g2];
    f2 = k2.shift();
    while (f2)
      if (a2.responseFields[f2] && (c2[a2.responseFields[f2]] = b2), !i2 && d2 && a2.dataFilter && (b2 = a2.dataFilter(b2, a2.dataType)), i2 = f2, f2 = k2.shift()) {
        if ("*" === f2)
          f2 = i2;
        else if ("*" !== i2 && i2 !== f2) {
          if (g2 = j2[i2 + " " + f2] || j2["* " + f2], !g2) {
            for (e2 in j2)
              if (h2 = e2.split(" "), h2[1] === f2 && (g2 = j2[i2 + " " + h2[0]] || j2["* " + h2[0]])) {
                g2 === true ? g2 = j2[e2] : j2[e2] !== true && (f2 = h2[0], k2.unshift(h2[1]));
                break;
              }
          }
          if (g2 !== true)
            if (g2 && a2["throws"])
              b2 = g2(b2);
            else
              try {
                b2 = g2(b2);
              } catch (l2) {
                return { state: "parsererror", error: g2 ? l2 : "No conversion from " + i2 + " to " + f2 };
              }
        }
      }
    return { state: "success", data: b2 };
  }
  r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: tb.href, type: "GET", isLocal: Fb.test(tb.protocol), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Kb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": true, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: true, context: true } }, ajaxSetup: function(a2, b2) {
    return b2 ? Ob(Ob(a2, r.ajaxSettings), b2) : Ob(r.ajaxSettings, a2);
  }, ajaxPrefilter: Mb(Ib), ajaxTransport: Mb(Jb), ajax: function(b2, c2) {
    "object" == typeof b2 && (c2 = b2, b2 = void 0), c2 = c2 || {};
    var e2, f2, g2, h2, i2, j2, k2, l2, m2, n2, o2 = r.ajaxSetup({}, c2), p2 = o2.context || o2, q2 = o2.context && (p2.nodeType || p2.jquery) ? r(p2) : r.event, s2 = r.Deferred(), t2 = r.Callbacks("once memory"), u2 = o2.statusCode || {}, v2 = {}, w2 = {}, x2 = "canceled", y2 = { readyState: 0, getResponseHeader: function(a2) {
      var b3;
      if (k2) {
        if (!h2) {
          h2 = {};
          while (b3 = Eb.exec(g2))
            h2[b3[1].toLowerCase()] = b3[2];
        }
        b3 = h2[a2.toLowerCase()];
      }
      return null == b3 ? null : b3;
    }, getAllResponseHeaders: function() {
      return k2 ? g2 : null;
    }, setRequestHeader: function(a2, b3) {
      return null == k2 && (a2 = w2[a2.toLowerCase()] = w2[a2.toLowerCase()] || a2, v2[a2] = b3), this;
    }, overrideMimeType: function(a2) {
      return null == k2 && (o2.mimeType = a2), this;
    }, statusCode: function(a2) {
      var b3;
      if (a2)
        if (k2)
          y2.always(a2[y2.status]);
        else
          for (b3 in a2)
            u2[b3] = [u2[b3], a2[b3]];
      return this;
    }, abort: function(a2) {
      var b3 = a2 || x2;
      return e2 && e2.abort(b3), A2(0, b3), this;
    } };
    if (s2.promise(y2), o2.url = ((b2 || o2.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o2.type = c2.method || c2.type || o2.method || o2.type, o2.dataTypes = (o2.dataType || "*").toLowerCase().match(L) || [""], null == o2.crossDomain) {
      j2 = d.createElement("a");
      try {
        j2.href = o2.url, j2.href = j2.href, o2.crossDomain = Lb.protocol + "//" + Lb.host != j2.protocol + "//" + j2.host;
      } catch (z2) {
        o2.crossDomain = true;
      }
    }
    if (o2.data && o2.processData && "string" != typeof o2.data && (o2.data = r.param(o2.data, o2.traditional)), Nb(Ib, o2, c2, y2), k2)
      return y2;
    l2 = r.event && o2.global, l2 && 0 === r.active++ && r.event.trigger("ajaxStart"), o2.type = o2.type.toUpperCase(), o2.hasContent = !Gb.test(o2.type), f2 = o2.url.replace(Cb, ""), o2.hasContent ? o2.data && o2.processData && 0 === (o2.contentType || "").indexOf("application/x-www-form-urlencoded") && (o2.data = o2.data.replace(Bb, "+")) : (n2 = o2.url.slice(f2.length), o2.data && (f2 += (vb.test(f2) ? "&" : "?") + o2.data, delete o2.data), o2.cache === false && (f2 = f2.replace(Db, "$1"), n2 = (vb.test(f2) ? "&" : "?") + "_=" + ub++ + n2), o2.url = f2 + n2), o2.ifModified && (r.lastModified[f2] && y2.setRequestHeader("If-Modified-Since", r.lastModified[f2]), r.etag[f2] && y2.setRequestHeader("If-None-Match", r.etag[f2])), (o2.data && o2.hasContent && o2.contentType !== false || c2.contentType) && y2.setRequestHeader("Content-Type", o2.contentType), y2.setRequestHeader("Accept", o2.dataTypes[0] && o2.accepts[o2.dataTypes[0]] ? o2.accepts[o2.dataTypes[0]] + ("*" !== o2.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o2.accepts["*"]);
    for (m2 in o2.headers)
      y2.setRequestHeader(m2, o2.headers[m2]);
    if (o2.beforeSend && (o2.beforeSend.call(p2, y2, o2) === false || k2))
      return y2.abort();
    if (x2 = "abort", t2.add(o2.complete), y2.done(o2.success), y2.fail(o2.error), e2 = Nb(Jb, o2, c2, y2)) {
      if (y2.readyState = 1, l2 && q2.trigger("ajaxSend", [y2, o2]), k2)
        return y2;
      o2.async && o2.timeout > 0 && (i2 = a.setTimeout(function() {
        y2.abort("timeout");
      }, o2.timeout));
      try {
        k2 = false, e2.send(v2, A2);
      } catch (z2) {
        if (k2)
          throw z2;
        A2(-1, z2);
      }
    } else
      A2(-1, "No Transport");
    function A2(b3, c3, d2, h3) {
      var j3, m3, n3, v3, w3, x3 = c3;
      k2 || (k2 = true, i2 && a.clearTimeout(i2), e2 = void 0, g2 = h3 || "", y2.readyState = b3 > 0 ? 4 : 0, j3 = b3 >= 200 && b3 < 300 || 304 === b3, d2 && (v3 = Pb(o2, y2, d2)), v3 = Qb(o2, v3, y2, j3), j3 ? (o2.ifModified && (w3 = y2.getResponseHeader("Last-Modified"), w3 && (r.lastModified[f2] = w3), w3 = y2.getResponseHeader("etag"), w3 && (r.etag[f2] = w3)), 204 === b3 || "HEAD" === o2.type ? x3 = "nocontent" : 304 === b3 ? x3 = "notmodified" : (x3 = v3.state, m3 = v3.data, n3 = v3.error, j3 = !n3)) : (n3 = x3, !b3 && x3 || (x3 = "error", b3 < 0 && (b3 = 0))), y2.status = b3, y2.statusText = (c3 || x3) + "", j3 ? s2.resolveWith(p2, [m3, x3, y2]) : s2.rejectWith(p2, [y2, x3, n3]), y2.statusCode(u2), u2 = void 0, l2 && q2.trigger(j3 ? "ajaxSuccess" : "ajaxError", [y2, o2, j3 ? m3 : n3]), t2.fireWith(p2, [y2, x3]), l2 && (q2.trigger("ajaxComplete", [y2, o2]), --r.active || r.event.trigger("ajaxStop")));
    }
    return y2;
  }, getJSON: function(a2, b2, c2) {
    return r.get(a2, b2, c2, "json");
  }, getScript: function(a2, b2) {
    return r.get(a2, void 0, b2, "script");
  } }), r.each(["get", "post"], function(a2, b2) {
    r[b2] = function(a3, c2, d2, e2) {
      return r.isFunction(c2) && (e2 = e2 || d2, d2 = c2, c2 = void 0), r.ajax(r.extend({ url: a3, type: b2, dataType: e2, data: c2, success: d2 }, r.isPlainObject(a3) && a3));
    };
  }), r._evalUrl = function(a2) {
    return r.ajax({ url: a2, type: "GET", dataType: "script", cache: true, async: false, global: false, "throws": true });
  }, r.fn.extend({ wrapAll: function(a2) {
    var b2;
    return this[0] && (r.isFunction(a2) && (a2 = a2.call(this[0])), b2 = r(a2, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && b2.insertBefore(this[0]), b2.map(function() {
      var a3 = this;
      while (a3.firstElementChild)
        a3 = a3.firstElementChild;
      return a3;
    }).append(this)), this;
  }, wrapInner: function(a2) {
    return r.isFunction(a2) ? this.each(function(b2) {
      r(this).wrapInner(a2.call(this, b2));
    }) : this.each(function() {
      var b2 = r(this), c2 = b2.contents();
      c2.length ? c2.wrapAll(a2) : b2.append(a2);
    });
  }, wrap: function(a2) {
    var b2 = r.isFunction(a2);
    return this.each(function(c2) {
      r(this).wrapAll(b2 ? a2.call(this, c2) : a2);
    });
  }, unwrap: function(a2) {
    return this.parent(a2).not("body").each(function() {
      r(this).replaceWith(this.childNodes);
    }), this;
  } }), r.expr.pseudos.hidden = function(a2) {
    return !r.expr.pseudos.visible(a2);
  }, r.expr.pseudos.visible = function(a2) {
    return !!(a2.offsetWidth || a2.offsetHeight || a2.getClientRects().length);
  }, r.ajaxSettings.xhr = function() {
    try {
      return new a.XMLHttpRequest();
    } catch (b2) {
    }
  };
  var Rb = { 0: 200, 1223: 204 }, Sb = r.ajaxSettings.xhr();
  o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function(b2) {
    var c2, d2;
    if (o.cors || Sb && !b2.crossDomain)
      return { send: function(e2, f2) {
        var g2, h2 = b2.xhr();
        if (h2.open(b2.type, b2.url, b2.async, b2.username, b2.password), b2.xhrFields)
          for (g2 in b2.xhrFields)
            h2[g2] = b2.xhrFields[g2];
        b2.mimeType && h2.overrideMimeType && h2.overrideMimeType(b2.mimeType), b2.crossDomain || e2["X-Requested-With"] || (e2["X-Requested-With"] = "XMLHttpRequest");
        for (g2 in e2)
          h2.setRequestHeader(g2, e2[g2]);
        c2 = function(a2) {
          return function() {
            c2 && (c2 = d2 = h2.onload = h2.onerror = h2.onabort = h2.onreadystatechange = null, "abort" === a2 ? h2.abort() : "error" === a2 ? "number" != typeof h2.status ? f2(0, "error") : f2(h2.status, h2.statusText) : f2(Rb[h2.status] || h2.status, h2.statusText, "text" !== (h2.responseType || "text") || "string" != typeof h2.responseText ? { binary: h2.response } : { text: h2.responseText }, h2.getAllResponseHeaders()));
          };
        }, h2.onload = c2(), d2 = h2.onerror = c2("error"), void 0 !== h2.onabort ? h2.onabort = d2 : h2.onreadystatechange = function() {
          4 === h2.readyState && a.setTimeout(function() {
            c2 && d2();
          });
        }, c2 = c2("abort");
        try {
          h2.send(b2.hasContent && b2.data || null);
        } catch (i2) {
          if (c2)
            throw i2;
        }
      }, abort: function() {
        c2 && c2();
      } };
  }), r.ajaxPrefilter(function(a2) {
    a2.crossDomain && (a2.contents.script = false);
  }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(a2) {
    return r.globalEval(a2), a2;
  } } }), r.ajaxPrefilter("script", function(a2) {
    void 0 === a2.cache && (a2.cache = false), a2.crossDomain && (a2.type = "GET");
  }), r.ajaxTransport("script", function(a2) {
    if (a2.crossDomain) {
      var b2, c2;
      return { send: function(e2, f2) {
        b2 = r("<script>").prop({ charset: a2.scriptCharset, src: a2.url }).on("load error", c2 = function(a3) {
          b2.remove(), c2 = null, a3 && f2("error" === a3.type ? 404 : 200, a3.type);
        }), d.head.appendChild(b2[0]);
      }, abort: function() {
        c2 && c2();
      } };
    }
  });
  var Tb = [], Ub = /(=)\?(?=&|$)|\?\?/;
  r.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
    var a2 = Tb.pop() || r.expando + "_" + ub++;
    return this[a2] = true, a2;
  } }), r.ajaxPrefilter("json jsonp", function(b2, c2, d2) {
    var e2, f2, g2, h2 = b2.jsonp !== false && (Ub.test(b2.url) ? "url" : "string" == typeof b2.data && 0 === (b2.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b2.data) && "data");
    if (h2 || "jsonp" === b2.dataTypes[0])
      return e2 = b2.jsonpCallback = r.isFunction(b2.jsonpCallback) ? b2.jsonpCallback() : b2.jsonpCallback, h2 ? b2[h2] = b2[h2].replace(Ub, "$1" + e2) : b2.jsonp !== false && (b2.url += (vb.test(b2.url) ? "&" : "?") + b2.jsonp + "=" + e2), b2.converters["script json"] = function() {
        return g2 || r.error(e2 + " was not called"), g2[0];
      }, b2.dataTypes[0] = "json", f2 = a[e2], a[e2] = function() {
        g2 = arguments;
      }, d2.always(function() {
        void 0 === f2 ? r(a).removeProp(e2) : a[e2] = f2, b2[e2] && (b2.jsonpCallback = c2.jsonpCallback, Tb.push(e2)), g2 && r.isFunction(f2) && f2(g2[0]), g2 = f2 = void 0;
      }), "script";
  }), o.createHTMLDocument = function() {
    var a2 = d.implementation.createHTMLDocument("").body;
    return a2.innerHTML = "<form></form><form></form>", 2 === a2.childNodes.length;
  }(), r.parseHTML = function(a2, b2, c2) {
    if ("string" != typeof a2)
      return [];
    "boolean" == typeof b2 && (c2 = b2, b2 = false);
    var e2, f2, g2;
    return b2 || (o.createHTMLDocument ? (b2 = d.implementation.createHTMLDocument(""), e2 = b2.createElement("base"), e2.href = d.location.href, b2.head.appendChild(e2)) : b2 = d), f2 = C.exec(a2), g2 = !c2 && [], f2 ? [b2.createElement(f2[1])] : (f2 = qa([a2], b2, g2), g2 && g2.length && r(g2).remove(), r.merge([], f2.childNodes));
  }, r.fn.load = function(a2, b2, c2) {
    var d2, e2, f2, g2 = this, h2 = a2.indexOf(" ");
    return h2 > -1 && (d2 = pb(a2.slice(h2)), a2 = a2.slice(0, h2)), r.isFunction(b2) ? (c2 = b2, b2 = void 0) : b2 && "object" == typeof b2 && (e2 = "POST"), g2.length > 0 && r.ajax({ url: a2, type: e2 || "GET", dataType: "html", data: b2 }).done(function(a3) {
      f2 = arguments, g2.html(d2 ? r("<div>").append(r.parseHTML(a3)).find(d2) : a3);
    }).always(c2 && function(a3, b3) {
      g2.each(function() {
        c2.apply(this, f2 || [a3.responseText, b3, a3]);
      });
    }), this;
  }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a2, b2) {
    r.fn[b2] = function(a3) {
      return this.on(b2, a3);
    };
  }), r.expr.pseudos.animated = function(a2) {
    return r.grep(r.timers, function(b2) {
      return a2 === b2.elem;
    }).length;
  }, r.offset = { setOffset: function(a2, b2, c2) {
    var d2, e2, f2, g2, h2, i2, j2, k2 = r.css(a2, "position"), l2 = r(a2), m2 = {};
    "static" === k2 && (a2.style.position = "relative"), h2 = l2.offset(), f2 = r.css(a2, "top"), i2 = r.css(a2, "left"), j2 = ("absolute" === k2 || "fixed" === k2) && (f2 + i2).indexOf("auto") > -1, j2 ? (d2 = l2.position(), g2 = d2.top, e2 = d2.left) : (g2 = parseFloat(f2) || 0, e2 = parseFloat(i2) || 0), r.isFunction(b2) && (b2 = b2.call(a2, c2, r.extend({}, h2))), null != b2.top && (m2.top = b2.top - h2.top + g2), null != b2.left && (m2.left = b2.left - h2.left + e2), "using" in b2 ? b2.using.call(a2, m2) : l2.css(m2);
  } }, r.fn.extend({ offset: function(a2) {
    if (arguments.length)
      return void 0 === a2 ? this : this.each(function(b3) {
        r.offset.setOffset(this, a2, b3);
      });
    var b2, c2, d2, e2, f2 = this[0];
    if (f2)
      return f2.getClientRects().length ? (d2 = f2.getBoundingClientRect(), b2 = f2.ownerDocument, c2 = b2.documentElement, e2 = b2.defaultView, { top: d2.top + e2.pageYOffset - c2.clientTop, left: d2.left + e2.pageXOffset - c2.clientLeft }) : { top: 0, left: 0 };
  }, position: function() {
    if (this[0]) {
      var a2, b2, c2 = this[0], d2 = { top: 0, left: 0 };
      return "fixed" === r.css(c2, "position") ? b2 = c2.getBoundingClientRect() : (a2 = this.offsetParent(), b2 = this.offset(), B(a2[0], "html") || (d2 = a2.offset()), d2 = { top: d2.top + r.css(a2[0], "borderTopWidth", true), left: d2.left + r.css(a2[0], "borderLeftWidth", true) }), { top: b2.top - d2.top - r.css(c2, "marginTop", true), left: b2.left - d2.left - r.css(c2, "marginLeft", true) };
    }
  }, offsetParent: function() {
    return this.map(function() {
      var a2 = this.offsetParent;
      while (a2 && "static" === r.css(a2, "position"))
        a2 = a2.offsetParent;
      return a2 || ra;
    });
  } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a2, b2) {
    var c2 = "pageYOffset" === b2;
    r.fn[a2] = function(d2) {
      return T(this, function(a3, d3, e2) {
        var f2;
        return r.isWindow(a3) ? f2 = a3 : 9 === a3.nodeType && (f2 = a3.defaultView), void 0 === e2 ? f2 ? f2[b2] : a3[d3] : void (f2 ? f2.scrollTo(c2 ? f2.pageXOffset : e2, c2 ? e2 : f2.pageYOffset) : a3[d3] = e2);
      }, a2, d2, arguments.length);
    };
  }), r.each(["top", "left"], function(a2, b2) {
    r.cssHooks[b2] = Pa(o.pixelPosition, function(a3, c2) {
      if (c2)
        return c2 = Oa(a3, b2), Ma.test(c2) ? r(a3).position()[b2] + "px" : c2;
    });
  }), r.each({ Height: "height", Width: "width" }, function(a2, b2) {
    r.each({ padding: "inner" + a2, content: b2, "": "outer" + a2 }, function(c2, d2) {
      r.fn[d2] = function(e2, f2) {
        var g2 = arguments.length && (c2 || "boolean" != typeof e2), h2 = c2 || (e2 === true || f2 === true ? "margin" : "border");
        return T(this, function(b3, c3, e3) {
          var f3;
          return r.isWindow(b3) ? 0 === d2.indexOf("outer") ? b3["inner" + a2] : b3.document.documentElement["client" + a2] : 9 === b3.nodeType ? (f3 = b3.documentElement, Math.max(b3.body["scroll" + a2], f3["scroll" + a2], b3.body["offset" + a2], f3["offset" + a2], f3["client" + a2])) : void 0 === e3 ? r.css(b3, c3, h2) : r.style(b3, c3, e3, h2);
        }, b2, g2 ? e2 : void 0, g2);
      };
    });
  }), r.fn.extend({ bind: function(a2, b2, c2) {
    return this.on(a2, null, b2, c2);
  }, unbind: function(a2, b2) {
    return this.off(a2, null, b2);
  }, delegate: function(a2, b2, c2, d2) {
    return this.on(b2, a2, c2, d2);
  }, undelegate: function(a2, b2, c2) {
    return 1 === arguments.length ? this.off(a2, "**") : this.off(b2, a2 || "**", c2);
  } }), r.holdReady = function(a2) {
    a2 ? r.readyWait++ : r.ready(true);
  }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == typeof define && define.amd && define("jquery", [], function() {
    return r;
  });
  var Vb = a.jQuery, Wb = a.$;
  return r.noConflict = function(b2) {
    return a.$ === r && (a.$ = Wb), b2 && a.jQuery === r && (a.jQuery = Vb), r;
  }, b || (a.jQuery = a.$ = r), r;
});
(function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t();
})(this, function() {
  "use strict";
  function e(e2) {
    return e2 && "[object Function]" === {}.toString.call(e2);
  }
  function t(e2, t2) {
    if (1 !== e2.nodeType)
      return [];
    var o2 = window.getComputedStyle(e2, null);
    return t2 ? o2[t2] : o2;
  }
  function o(e2) {
    return "HTML" === e2.nodeName ? e2 : e2.parentNode || e2.host;
  }
  function n(e2) {
    if (!e2 || -1 !== ["HTML", "BODY", "#document"].indexOf(e2.nodeName))
      return window.document.body;
    var i2 = t(e2), r2 = i2.overflow, p2 = i2.overflowX, s2 = i2.overflowY;
    return /(auto|scroll)/.test(r2 + s2 + p2) ? e2 : n(o(e2));
  }
  function r(e2) {
    var o2 = e2 && e2.offsetParent, i2 = o2 && o2.nodeName;
    return i2 && "BODY" !== i2 && "HTML" !== i2 ? -1 !== ["TD", "TABLE"].indexOf(o2.nodeName) && "static" === t(o2, "position") ? r(o2) : o2 : window.document.documentElement;
  }
  function p(e2) {
    var t2 = e2.nodeName;
    return "BODY" !== t2 && ("HTML" === t2 || r(e2.firstElementChild) === e2);
  }
  function s(e2) {
    return null === e2.parentNode ? e2 : s(e2.parentNode);
  }
  function d(e2, t2) {
    if (!e2 || !e2.nodeType || !t2 || !t2.nodeType)
      return window.document.documentElement;
    var o2 = e2.compareDocumentPosition(t2) & Node.DOCUMENT_POSITION_FOLLOWING, i2 = o2 ? e2 : t2, n2 = o2 ? t2 : e2, a2 = document.createRange();
    a2.setStart(i2, 0), a2.setEnd(n2, 0);
    var l2 = a2.commonAncestorContainer;
    if (e2 !== l2 && t2 !== l2 || i2.contains(n2))
      return p(l2) ? l2 : r(l2);
    var f2 = s(e2);
    return f2.host ? d(f2.host, t2) : d(e2, s(t2).host);
  }
  function a(e2) {
    var t2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top", o2 = "top" === t2 ? "scrollTop" : "scrollLeft", i2 = e2.nodeName;
    if ("BODY" === i2 || "HTML" === i2) {
      var n2 = window.document.documentElement, r2 = window.document.scrollingElement || n2;
      return r2[o2];
    }
    return e2[o2];
  }
  function l(e2, t2) {
    var o2 = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], i2 = a(t2, "top"), n2 = a(t2, "left"), r2 = o2 ? -1 : 1;
    return e2.top += i2 * r2, e2.bottom += i2 * r2, e2.left += n2 * r2, e2.right += n2 * r2, e2;
  }
  function f(e2, t2) {
    var o2 = "x" === t2 ? "Left" : "Top", i2 = "Left" == o2 ? "Right" : "Bottom";
    return +e2["border" + o2 + "Width"].split("px")[0] + +e2["border" + i2 + "Width"].split("px")[0];
  }
  function m(e2, t2, o2, i2) {
    return X(t2["offset" + e2], t2["scroll" + e2], o2["client" + e2], o2["offset" + e2], o2["scroll" + e2], ne() ? o2["offset" + e2] + i2["margin" + ("Height" === e2 ? "Top" : "Left")] + i2["margin" + ("Height" === e2 ? "Bottom" : "Right")] : 0);
  }
  function c() {
    var e2 = window.document.body, t2 = window.document.documentElement, o2 = ne() && window.getComputedStyle(t2);
    return { height: m("Height", e2, t2, o2), width: m("Width", e2, t2, o2) };
  }
  function h(e2) {
    return de({}, e2, { right: e2.left + e2.width, bottom: e2.top + e2.height });
  }
  function g(e2) {
    var o2 = {};
    if (ne())
      try {
        o2 = e2.getBoundingClientRect();
        var i2 = a(e2, "top"), n2 = a(e2, "left");
        o2.top += i2, o2.left += n2, o2.bottom += i2, o2.right += n2;
      } catch (e3) {
      }
    else
      o2 = e2.getBoundingClientRect();
    var r2 = { left: o2.left, top: o2.top, width: o2.right - o2.left, height: o2.bottom - o2.top }, p2 = "HTML" === e2.nodeName ? c() : {}, s2 = p2.width || e2.clientWidth || r2.right - r2.left, d2 = p2.height || e2.clientHeight || r2.bottom - r2.top, l2 = e2.offsetWidth - s2, m2 = e2.offsetHeight - d2;
    if (l2 || m2) {
      var g2 = t(e2);
      l2 -= f(g2, "x"), m2 -= f(g2, "y"), r2.width -= l2, r2.height -= m2;
    }
    return h(r2);
  }
  function u(e2, o2) {
    var i2 = ne(), r2 = "HTML" === o2.nodeName, p2 = g(e2), s2 = g(o2), d2 = n(e2), a2 = t(o2), f2 = +a2.borderTopWidth.split("px")[0], m2 = +a2.borderLeftWidth.split("px")[0], c2 = h({ top: p2.top - s2.top - f2, left: p2.left - s2.left - m2, width: p2.width, height: p2.height });
    if (c2.marginTop = 0, c2.marginLeft = 0, !i2 && r2) {
      var u2 = +a2.marginTop.split("px")[0], b2 = +a2.marginLeft.split("px")[0];
      c2.top -= f2 - u2, c2.bottom -= f2 - u2, c2.left -= m2 - b2, c2.right -= m2 - b2, c2.marginTop = u2, c2.marginLeft = b2;
    }
    return (i2 ? o2.contains(d2) : o2 === d2 && "BODY" !== d2.nodeName) && (c2 = l(c2, o2)), c2;
  }
  function b(e2) {
    var t2 = window.document.documentElement, o2 = u(e2, t2), i2 = X(t2.clientWidth, window.innerWidth || 0), n2 = X(t2.clientHeight, window.innerHeight || 0), r2 = a(t2), p2 = a(t2, "left"), s2 = { top: r2 - o2.top + o2.marginTop, left: p2 - o2.left + o2.marginLeft, width: i2, height: n2 };
    return h(s2);
  }
  function y(e2) {
    var i2 = e2.nodeName;
    return "BODY" === i2 || "HTML" === i2 ? false : "fixed" === t(e2, "position") || y(o(e2));
  }
  function w(e2, t2, i2, r2) {
    var p2 = { top: 0, left: 0 }, s2 = d(e2, t2);
    if ("viewport" === r2)
      p2 = b(s2);
    else {
      var a2;
      "scrollParent" === r2 ? (a2 = n(o(e2)), "BODY" === a2.nodeName && (a2 = window.document.documentElement)) : "window" === r2 ? a2 = window.document.documentElement : a2 = r2;
      var l2 = u(a2, s2);
      if ("HTML" === a2.nodeName && !y(s2)) {
        var f2 = c(), m2 = f2.height, h2 = f2.width;
        p2.top += l2.top - l2.marginTop, p2.bottom = m2 + l2.top, p2.left += l2.left - l2.marginLeft, p2.right = h2 + l2.left;
      } else
        p2 = l2;
    }
    return p2.left += i2, p2.top += i2, p2.right -= i2, p2.bottom -= i2, p2;
  }
  function E(e2) {
    var t2 = e2.width, o2 = e2.height;
    return t2 * o2;
  }
  function v(e2, t2, o2, i2, n2) {
    var r2 = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e2.indexOf("auto"))
      return e2;
    var p2 = w(o2, i2, r2, n2), s2 = { top: { width: p2.width, height: t2.top - p2.top }, right: { width: p2.right - t2.right, height: p2.height }, bottom: { width: p2.width, height: p2.bottom - t2.bottom }, left: { width: t2.left - p2.left, height: p2.height } }, d2 = Object.keys(s2).map(function(e3) {
      return de({ key: e3 }, s2[e3], { area: E(s2[e3]) });
    }).sort(function(e3, t3) {
      return t3.area - e3.area;
    }), a2 = d2.filter(function(e3) {
      var t3 = e3.width, i3 = e3.height;
      return t3 >= o2.clientWidth && i3 >= o2.clientHeight;
    }), l2 = 0 < a2.length ? a2[0].key : d2[0].key, f2 = e2.split("-")[1];
    return l2 + (f2 ? "-" + f2 : "");
  }
  function x(e2, t2, o2) {
    var i2 = d(t2, o2);
    return u(o2, i2);
  }
  function O(e2) {
    var t2 = window.getComputedStyle(e2), o2 = parseFloat(t2.marginTop) + parseFloat(t2.marginBottom), i2 = parseFloat(t2.marginLeft) + parseFloat(t2.marginRight), n2 = { width: e2.offsetWidth + i2, height: e2.offsetHeight + o2 };
    return n2;
  }
  function L(e2) {
    var t2 = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return e2.replace(/left|right|bottom|top/g, function(e3) {
      return t2[e3];
    });
  }
  function S(e2, t2, o2) {
    o2 = o2.split("-")[0];
    var i2 = O(e2), n2 = { width: i2.width, height: i2.height }, r2 = -1 !== ["right", "left"].indexOf(o2), p2 = r2 ? "top" : "left", s2 = r2 ? "left" : "top", d2 = r2 ? "height" : "width", a2 = r2 ? "width" : "height";
    return n2[p2] = t2[p2] + t2[d2] / 2 - i2[d2] / 2, n2[s2] = o2 === s2 ? t2[s2] - i2[a2] : t2[L(s2)], n2;
  }
  function T(e2, t2) {
    return Array.prototype.find ? e2.find(t2) : e2.filter(t2)[0];
  }
  function C(e2, t2, o2) {
    if (Array.prototype.findIndex)
      return e2.findIndex(function(e3) {
        return e3[t2] === o2;
      });
    var i2 = T(e2, function(e3) {
      return e3[t2] === o2;
    });
    return e2.indexOf(i2);
  }
  function N(t2, o2, i2) {
    var n2 = void 0 === i2 ? t2 : t2.slice(0, C(t2, "name", i2));
    return n2.forEach(function(t3) {
      t3.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
      var i3 = t3.function || t3.fn;
      t3.enabled && e(i3) && (o2.offsets.popper = h(o2.offsets.popper), o2.offsets.reference = h(o2.offsets.reference), o2 = i3(o2, t3));
    }), o2;
  }
  function k() {
    if (!this.state.isDestroyed) {
      var e2 = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: false, offsets: {} };
      e2.offsets.reference = x(this.state, this.popper, this.reference), e2.placement = v(this.options.placement, e2.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e2.originalPlacement = e2.placement, e2.offsets.popper = S(this.popper, e2.offsets.reference, e2.placement), e2.offsets.popper.position = "absolute", e2 = N(this.modifiers, e2), this.state.isCreated ? this.options.onUpdate(e2) : (this.state.isCreated = true, this.options.onCreate(e2));
    }
  }
  function W(e2, t2) {
    return e2.some(function(e3) {
      var o2 = e3.name, i2 = e3.enabled;
      return i2 && o2 === t2;
    });
  }
  function B(e2) {
    for (var t2 = [false, "ms", "Webkit", "Moz", "O"], o2 = e2.charAt(0).toUpperCase() + e2.slice(1), n2 = 0; n2 < t2.length - 1; n2++) {
      var i2 = t2[n2], r2 = i2 ? "" + i2 + o2 : e2;
      if ("undefined" != typeof window.document.body.style[r2])
        return r2;
    }
    return null;
  }
  function P() {
    return this.state.isDestroyed = true, W(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[B("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
  }
  function D(e2, t2, o2, i2) {
    var r2 = "BODY" === e2.nodeName, p2 = r2 ? window : e2;
    p2.addEventListener(t2, o2, { passive: true }), r2 || D(n(p2.parentNode), t2, o2, i2), i2.push(p2);
  }
  function H(e2, t2, o2, i2) {
    o2.updateBound = i2, window.addEventListener("resize", o2.updateBound, { passive: true });
    var r2 = n(e2);
    return D(r2, "scroll", o2.updateBound, o2.scrollParents), o2.scrollElement = r2, o2.eventsEnabled = true, o2;
  }
  function A() {
    this.state.eventsEnabled || (this.state = H(this.reference, this.options, this.state, this.scheduleUpdate));
  }
  function M(e2, t2) {
    return window.removeEventListener("resize", t2.updateBound), t2.scrollParents.forEach(function(e3) {
      e3.removeEventListener("scroll", t2.updateBound);
    }), t2.updateBound = null, t2.scrollParents = [], t2.scrollElement = null, t2.eventsEnabled = false, t2;
  }
  function I() {
    this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state));
  }
  function R(e2) {
    return "" !== e2 && !isNaN(parseFloat(e2)) && isFinite(e2);
  }
  function U(e2, t2) {
    Object.keys(t2).forEach(function(o2) {
      var i2 = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(o2) && R(t2[o2]) && (i2 = "px"), e2.style[o2] = t2[o2] + i2;
    });
  }
  function Y(e2, t2) {
    Object.keys(t2).forEach(function(o2) {
      var i2 = t2[o2];
      false === i2 ? e2.removeAttribute(o2) : e2.setAttribute(o2, t2[o2]);
    });
  }
  function F(e2, t2, o2) {
    var i2 = T(e2, function(e3) {
      var o3 = e3.name;
      return o3 === t2;
    }), n2 = !!i2 && e2.some(function(e3) {
      return e3.name === o2 && e3.enabled && e3.order < i2.order;
    });
    if (!n2) {
      var r2 = "`" + t2 + "`";
      console.warn("`" + o2 + "` modifier is required by " + r2 + " modifier in order to work, be sure to include it before " + r2 + "!");
    }
    return n2;
  }
  function j(e2) {
    return "end" === e2 ? "start" : "start" === e2 ? "end" : e2;
  }
  function K(e2) {
    var t2 = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o2 = le.indexOf(e2), i2 = le.slice(o2 + 1).concat(le.slice(0, o2));
    return t2 ? i2.reverse() : i2;
  }
  function q(e2, t2, o2, i2) {
    var n2 = e2.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r2 = +n2[1], p2 = n2[2];
    if (!r2)
      return e2;
    if (0 === p2.indexOf("%")) {
      var s2;
      switch (p2) {
        case "%p":
          s2 = o2;
          break;
        case "%":
        case "%r":
        default:
          s2 = i2;
      }
      var d2 = h(s2);
      return d2[t2] / 100 * r2;
    }
    if ("vh" === p2 || "vw" === p2) {
      var a2;
      return a2 = "vh" === p2 ? X(document.documentElement.clientHeight, window.innerHeight || 0) : X(document.documentElement.clientWidth, window.innerWidth || 0), a2 / 100 * r2;
    }
    return r2;
  }
  function G(e2, t2, o2, i2) {
    var n2 = [0, 0], r2 = -1 !== ["right", "left"].indexOf(i2), p2 = e2.split(/(\+|\-)/).map(function(e3) {
      return e3.trim();
    }), s2 = p2.indexOf(T(p2, function(e3) {
      return -1 !== e3.search(/,|\s/);
    }));
    p2[s2] && -1 === p2[s2].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
    var d2 = /\s*,\s*|\s+/, a2 = -1 === s2 ? [p2] : [p2.slice(0, s2).concat([p2[s2].split(d2)[0]]), [p2[s2].split(d2)[1]].concat(p2.slice(s2 + 1))];
    return a2 = a2.map(function(e3, i3) {
      var n3 = (1 === i3 ? !r2 : r2) ? "height" : "width", p3 = false;
      return e3.reduce(function(e4, t3) {
        return "" === e4[e4.length - 1] && -1 !== ["+", "-"].indexOf(t3) ? (e4[e4.length - 1] = t3, p3 = true, e4) : p3 ? (e4[e4.length - 1] += t3, p3 = false, e4) : e4.concat(t3);
      }, []).map(function(e4) {
        return q(e4, n3, t2, o2);
      });
    }), a2.forEach(function(e3, t3) {
      e3.forEach(function(o3, i3) {
        R(o3) && (n2[t3] += o3 * ("-" === e3[i3 - 1] ? -1 : 1));
      });
    }), n2;
  }
  function z(e2, t2) {
    var o2, i2 = t2.offset, n2 = e2.placement, r2 = e2.offsets, p2 = r2.popper, s2 = r2.reference, d2 = n2.split("-")[0];
    return o2 = R(+i2) ? [+i2, 0] : G(i2, p2, s2, d2), "left" === d2 ? (p2.top += o2[0], p2.left -= o2[1]) : "right" === d2 ? (p2.top += o2[0], p2.left += o2[1]) : "top" === d2 ? (p2.left += o2[0], p2.top -= o2[1]) : "bottom" === d2 && (p2.left += o2[0], p2.top += o2[1]), e2.popper = p2, e2;
  }
  for (var V = Math.min, _ = Math.floor, X = Math.max, Q = ["native code", "[object MutationObserverConstructor]"], J = function(e2) {
    return Q.some(function(t2) {
      return -1 < (e2 || "").toString().indexOf(t2);
    });
  }, Z = "undefined" != typeof window, $ = ["Edge", "Trident", "Firefox"], ee = 0, te = 0; te < $.length; te += 1)
    if (Z && 0 <= navigator.userAgent.indexOf($[te])) {
      ee = 1;
      break;
    }
  var i, oe = Z && J(window.MutationObserver), ie = oe ? function(e2) {
    var t2 = false, o2 = 0, i2 = document.createElement("span"), n2 = new MutationObserver(function() {
      e2(), t2 = false;
    });
    return n2.observe(i2, { attributes: true }), function() {
      t2 || (t2 = true, i2.setAttribute("x-index", o2), ++o2);
    };
  } : function(e2) {
    var t2 = false;
    return function() {
      t2 || (t2 = true, setTimeout(function() {
        t2 = false, e2();
      }, ee));
    };
  }, ne = function() {
    return void 0 == i && (i = -1 !== navigator.appVersion.indexOf("MSIE 10")), i;
  }, re = function(e2, t2) {
    if (!(e2 instanceof t2))
      throw new TypeError("Cannot call a class as a function");
  }, pe = /* @__PURE__ */ function() {
    function e2(e3, t2) {
      for (var o2, n2 = 0; n2 < t2.length; n2++)
        o2 = t2[n2], o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, o2.key, o2);
    }
    return function(t2, o2, i2) {
      return o2 && e2(t2.prototype, o2), i2 && e2(t2, i2), t2;
    };
  }(), se = function(e2, t2, o2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: o2, enumerable: true, configurable: true, writable: true }) : e2[t2] = o2, e2;
  }, de = Object.assign || function(e2) {
    for (var t2, o2 = 1; o2 < arguments.length; o2++)
      for (var i2 in t2 = arguments[o2], t2)
        Object.prototype.hasOwnProperty.call(t2, i2) && (e2[i2] = t2[i2]);
    return e2;
  }, ae = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], le = ae.slice(3), fe = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" }, me = function() {
    function t2(o2, i2) {
      var n2 = this, r2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
      re(this, t2), this.scheduleUpdate = function() {
        return requestAnimationFrame(n2.update);
      }, this.update = ie(this.update.bind(this)), this.options = de({}, t2.Defaults, r2), this.state = { isDestroyed: false, isCreated: false, scrollParents: [] }, this.reference = o2.jquery ? o2[0] : o2, this.popper = i2.jquery ? i2[0] : i2, this.options.modifiers = {}, Object.keys(de({}, t2.Defaults.modifiers, r2.modifiers)).forEach(function(e2) {
        n2.options.modifiers[e2] = de({}, t2.Defaults.modifiers[e2] || {}, r2.modifiers ? r2.modifiers[e2] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function(e2) {
        return de({ name: e2 }, n2.options.modifiers[e2]);
      }).sort(function(e2, t3) {
        return e2.order - t3.order;
      }), this.modifiers.forEach(function(t3) {
        t3.enabled && e(t3.onLoad) && t3.onLoad(n2.reference, n2.popper, n2.options, t3, n2.state);
      }), this.update();
      var p2 = this.options.eventsEnabled;
      p2 && this.enableEventListeners(), this.state.eventsEnabled = p2;
    }
    return pe(t2, [{ key: "update", value: function() {
      return k.call(this);
    } }, { key: "destroy", value: function() {
      return P.call(this);
    } }, { key: "enableEventListeners", value: function() {
      return A.call(this);
    } }, { key: "disableEventListeners", value: function() {
      return I.call(this);
    } }]), t2;
  }();
  return me.Utils = ("undefined" == typeof window ? global : window).PopperUtils, me.placements = ae, me.Defaults = { placement: "bottom", eventsEnabled: true, removeOnDestroy: false, onCreate: function() {
  }, onUpdate: function() {
  }, modifiers: { shift: { order: 100, enabled: true, fn: function(e2) {
    var t2 = e2.placement, o2 = t2.split("-")[0], i2 = t2.split("-")[1];
    if (i2) {
      var n2 = e2.offsets, r2 = n2.reference, p2 = n2.popper, s2 = -1 !== ["bottom", "top"].indexOf(o2), d2 = s2 ? "left" : "top", a2 = s2 ? "width" : "height", l2 = { start: se({}, d2, r2[d2]), end: se({}, d2, r2[d2] + r2[a2] - p2[a2]) };
      e2.offsets.popper = de({}, p2, l2[i2]);
    }
    return e2;
  } }, offset: { order: 200, enabled: true, fn: z, offset: 0 }, preventOverflow: { order: 300, enabled: true, fn: function(e2, t2) {
    var o2 = t2.boundariesElement || r(e2.instance.popper);
    e2.instance.reference === o2 && (o2 = r(o2));
    var i2 = w(e2.instance.popper, e2.instance.reference, t2.padding, o2);
    t2.boundaries = i2;
    var n2 = t2.priority, p2 = e2.offsets.popper, s2 = { primary: function(e3) {
      var o3 = p2[e3];
      return p2[e3] < i2[e3] && !t2.escapeWithReference && (o3 = X(p2[e3], i2[e3])), se({}, e3, o3);
    }, secondary: function(e3) {
      var o3 = "right" === e3 ? "left" : "top", n3 = p2[o3];
      return p2[e3] > i2[e3] && !t2.escapeWithReference && (n3 = V(p2[o3], i2[e3] - ("right" === e3 ? p2.width : p2.height))), se({}, o3, n3);
    } };
    return n2.forEach(function(e3) {
      var t3 = -1 === ["left", "top"].indexOf(e3) ? "secondary" : "primary";
      p2 = de({}, p2, s2[t3](e3));
    }), e2.offsets.popper = p2, e2;
  }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: true, fn: function(e2) {
    var t2 = e2.offsets, o2 = t2.popper, i2 = t2.reference, n2 = e2.placement.split("-")[0], r2 = _, p2 = -1 !== ["top", "bottom"].indexOf(n2), s2 = p2 ? "right" : "bottom", d2 = p2 ? "left" : "top", a2 = p2 ? "width" : "height";
    return o2[s2] < r2(i2[d2]) && (e2.offsets.popper[d2] = r2(i2[d2]) - o2[a2]), o2[d2] > r2(i2[s2]) && (e2.offsets.popper[d2] = r2(i2[s2])), e2;
  } }, arrow: { order: 500, enabled: true, fn: function(e2, o2) {
    if (!F(e2.instance.modifiers, "arrow", "keepTogether"))
      return e2;
    var i2 = o2.element;
    if ("string" == typeof i2) {
      if (i2 = e2.instance.popper.querySelector(i2), !i2)
        return e2;
    } else if (!e2.instance.popper.contains(i2))
      return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e2;
    var n2 = e2.placement.split("-")[0], r2 = e2.offsets, p2 = r2.popper, s2 = r2.reference, d2 = -1 !== ["left", "right"].indexOf(n2), a2 = d2 ? "height" : "width", l2 = d2 ? "Top" : "Left", f2 = l2.toLowerCase(), m2 = d2 ? "left" : "top", c2 = d2 ? "bottom" : "right", g2 = O(i2)[a2];
    s2[c2] - g2 < p2[f2] && (e2.offsets.popper[f2] -= p2[f2] - (s2[c2] - g2)), s2[f2] + g2 > p2[c2] && (e2.offsets.popper[f2] += s2[f2] + g2 - p2[c2]);
    var u2 = s2[f2] + s2[a2] / 2 - g2 / 2, b2 = t(e2.instance.popper, "margin" + l2).replace("px", ""), y2 = u2 - h(e2.offsets.popper)[f2] - b2;
    return y2 = X(V(p2[a2] - g2, y2), 0), e2.arrowElement = i2, e2.offsets.arrow = {}, e2.offsets.arrow[f2] = Math.round(y2), e2.offsets.arrow[m2] = "", e2;
  }, element: "[x-arrow]" }, flip: { order: 600, enabled: true, fn: function(e2, t2) {
    if (W(e2.instance.modifiers, "inner"))
      return e2;
    if (e2.flipped && e2.placement === e2.originalPlacement)
      return e2;
    var o2 = w(e2.instance.popper, e2.instance.reference, t2.padding, t2.boundariesElement), i2 = e2.placement.split("-")[0], n2 = L(i2), r2 = e2.placement.split("-")[1] || "", p2 = [];
    switch (t2.behavior) {
      case fe.FLIP:
        p2 = [i2, n2];
        break;
      case fe.CLOCKWISE:
        p2 = K(i2);
        break;
      case fe.COUNTERCLOCKWISE:
        p2 = K(i2, true);
        break;
      default:
        p2 = t2.behavior;
    }
    return p2.forEach(function(s2, d2) {
      if (i2 !== s2 || p2.length === d2 + 1)
        return e2;
      i2 = e2.placement.split("-")[0], n2 = L(i2);
      var a2 = e2.offsets.popper, l2 = e2.offsets.reference, f2 = _, m2 = "left" === i2 && f2(a2.right) > f2(l2.left) || "right" === i2 && f2(a2.left) < f2(l2.right) || "top" === i2 && f2(a2.bottom) > f2(l2.top) || "bottom" === i2 && f2(a2.top) < f2(l2.bottom), c2 = f2(a2.left) < f2(o2.left), h2 = f2(a2.right) > f2(o2.right), g2 = f2(a2.top) < f2(o2.top), u2 = f2(a2.bottom) > f2(o2.bottom), b2 = "left" === i2 && c2 || "right" === i2 && h2 || "top" === i2 && g2 || "bottom" === i2 && u2, y2 = -1 !== ["top", "bottom"].indexOf(i2), w2 = !!t2.flipVariations && (y2 && "start" === r2 && c2 || y2 && "end" === r2 && h2 || !y2 && "start" === r2 && g2 || !y2 && "end" === r2 && u2);
      (m2 || b2 || w2) && (e2.flipped = true, (m2 || b2) && (i2 = p2[d2 + 1]), w2 && (r2 = j(r2)), e2.placement = i2 + (r2 ? "-" + r2 : ""), e2.offsets.popper = de({}, e2.offsets.popper, S(e2.instance.popper, e2.offsets.reference, e2.placement)), e2 = N(e2.instance.modifiers, e2, "flip"));
    }), e2;
  }, behavior: "flip", padding: 5, boundariesElement: "viewport" }, inner: { order: 700, enabled: false, fn: function(e2) {
    var t2 = e2.placement, o2 = t2.split("-")[0], i2 = e2.offsets, n2 = i2.popper, r2 = i2.reference, p2 = -1 !== ["left", "right"].indexOf(o2), s2 = -1 === ["top", "left"].indexOf(o2);
    return n2[p2 ? "left" : "top"] = r2[o2] - (s2 ? n2[p2 ? "width" : "height"] : 0), e2.placement = L(t2), e2.offsets.popper = h(n2), e2;
  } }, hide: { order: 800, enabled: true, fn: function(e2) {
    if (!F(e2.instance.modifiers, "hide", "preventOverflow"))
      return e2;
    var t2 = e2.offsets.reference, o2 = T(e2.instance.modifiers, function(e3) {
      return "preventOverflow" === e3.name;
    }).boundaries;
    if (t2.bottom < o2.top || t2.left > o2.right || t2.top > o2.bottom || t2.right < o2.left) {
      if (true === e2.hide)
        return e2;
      e2.hide = true, e2.attributes["x-out-of-boundaries"] = "";
    } else {
      if (false === e2.hide)
        return e2;
      e2.hide = false, e2.attributes["x-out-of-boundaries"] = false;
    }
    return e2;
  } }, computeStyle: { order: 850, enabled: true, fn: function(e2, t2) {
    var o2 = t2.x, i2 = t2.y, n2 = e2.offsets.popper, p2 = T(e2.instance.modifiers, function(e3) {
      return "applyStyle" === e3.name;
    }).gpuAcceleration;
    void 0 !== p2 && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
    var s2, d2, a2 = void 0 === p2 ? t2.gpuAcceleration : p2, l2 = r(e2.instance.popper), f2 = g(l2), m2 = { position: n2.position }, c2 = { left: _(n2.left), top: _(n2.top), bottom: _(n2.bottom), right: _(n2.right) }, h2 = "bottom" === o2 ? "top" : "bottom", u2 = "right" === i2 ? "left" : "right", b2 = B("transform");
    if (d2 = "bottom" == h2 ? -f2.height + c2.bottom : c2.top, s2 = "right" == u2 ? -f2.width + c2.right : c2.left, a2 && b2)
      m2[b2] = "translate3d(" + s2 + "px, " + d2 + "px, 0)", m2[h2] = 0, m2[u2] = 0, m2.willChange = "transform";
    else {
      var y2 = "bottom" == h2 ? -1 : 1, w2 = "right" == u2 ? -1 : 1;
      m2[h2] = d2 * y2, m2[u2] = s2 * w2, m2.willChange = h2 + ", " + u2;
    }
    var E2 = { "x-placement": e2.placement };
    return e2.attributes = de({}, E2, e2.attributes), e2.styles = de({}, m2, e2.styles), e2.arrowStyles = de({}, e2.offsets.arrow, e2.arrowStyles), e2;
  }, gpuAcceleration: true, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: true, fn: function(e2) {
    return U(e2.instance.popper, e2.styles), Y(e2.instance.popper, e2.attributes), e2.arrowElement && Object.keys(e2.arrowStyles).length && U(e2.arrowElement, e2.arrowStyles), e2;
  }, onLoad: function(e2, t2, o2, i2, n2) {
    var r2 = x(n2, t2, e2), p2 = v(o2.placement, r2, t2, e2, o2.modifiers.flip.boundariesElement, o2.modifiers.flip.padding);
    return t2.setAttribute("x-placement", p2), U(t2, { position: "absolute" }), o2;
  }, gpuAcceleration: void 0 } } }, me;
});
/*!
  * Bootstrap v4.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("./popper")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "./popper"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper);
}(this, function(t, e, h) {
  "use strict";
  function i(t2, e2) {
    for (var n2 = 0; n2 < e2.length; n2++) {
      var i2 = e2[n2];
      i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(t2, i2.key, i2);
    }
  }
  function s(t2, e2, n2) {
    return e2 && i(t2.prototype, e2), n2 && i(t2, n2), t2;
  }
  function l(r2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var o2 = null != arguments[t2] ? arguments[t2] : {}, e2 = Object.keys(o2);
      "function" == typeof Object.getOwnPropertySymbols && (e2 = e2.concat(Object.getOwnPropertySymbols(o2).filter(function(t3) {
        return Object.getOwnPropertyDescriptor(o2, t3).enumerable;
      }))), e2.forEach(function(t3) {
        var e3, n2, i2;
        e3 = r2, i2 = o2[n2 = t3], n2 in e3 ? Object.defineProperty(e3, n2, { value: i2, enumerable: true, configurable: true, writable: true }) : e3[n2] = i2;
      });
    }
    return r2;
  }
  e = e && e.hasOwnProperty("default") ? e.default : e, h = h && h.hasOwnProperty("default") ? h.default : h;
  var r, n, o, a, c, u, f, d, g, _, m, p, v, y, E, C, T, b, S, I, A, D, w, N, O, k, P, j, H, L, R, x, W, U, q, F, K, M, Q, B, V, Y, z, J, Z, G, $, X, tt, et, nt, it, rt, ot, st, at, lt, ct, ht, ut, ft, dt, gt, _t, mt, pt, vt, yt, Et, Ct, Tt, bt, St, It, At, Dt, wt, Nt, Ot, kt, Pt, jt, Ht, Lt, Rt, xt, Wt, Ut, qt, Ft, Kt, Mt, Qt, Bt, Vt, Yt, zt, Jt, Zt, Gt, $t, Xt, te, ee, ne, ie, re, oe, se, ae, le, ce, he, ue, fe, de, ge, _e, me, pe, ve, ye, Ee, Ce, Te, be, Se, Ie, Ae, De, we, Ne, Oe, ke, Pe, je, He, Le, Re, xe, We, Ue, qe, Fe, Ke, Me, Qe, Be, Ve, Ye, ze, Je, Ze, Ge, $e, Xe, tn, en, nn, rn, on, sn, an, ln, cn, hn, un, fn, dn, gn, _n, mn, pn, vn, yn, En, Cn, Tn, bn, Sn, In, An, Dn, wn, Nn, On, kn, Pn, jn, Hn, Ln, Rn, xn, Wn, Un, qn, Fn = function(i2) {
    var e2 = "transitionend";
    function t2(t3) {
      var e3 = this, n2 = false;
      return i2(this).one(l2.TRANSITION_END, function() {
        n2 = true;
      }), setTimeout(function() {
        n2 || l2.triggerTransitionEnd(e3);
      }, t3), this;
    }
    var l2 = { TRANSITION_END: "bsTransitionEnd", getUID: function(t3) {
      for (; t3 += ~~(1e6 * Math.random()), document.getElementById(t3); )
        ;
      return t3;
    }, getSelectorFromElement: function(t3) {
      var e3 = t3.getAttribute("data-target");
      e3 && "#" !== e3 || (e3 = t3.getAttribute("href") || "");
      try {
        return document.querySelector(e3) ? e3 : null;
      } catch (t4) {
        return null;
      }
    }, getTransitionDurationFromElement: function(t3) {
      if (!t3)
        return 0;
      var e3 = i2(t3).css("transition-duration");
      return parseFloat(e3) ? (e3 = e3.split(",")[0], 1e3 * parseFloat(e3)) : 0;
    }, reflow: function(t3) {
      return t3.offsetHeight;
    }, triggerTransitionEnd: function(t3) {
      i2(t3).trigger(e2);
    }, supportsTransitionEnd: function() {
      return Boolean(e2);
    }, isElement: function(t3) {
      return (t3[0] || t3).nodeType;
    }, typeCheckConfig: function(t3, e3, n2) {
      for (var i3 in n2)
        if (Object.prototype.hasOwnProperty.call(n2, i3)) {
          var r2 = n2[i3], o2 = e3[i3], s2 = o2 && l2.isElement(o2) ? "element" : (a2 = o2, {}.toString.call(a2).match(/\s([a-z]+)/i)[1].toLowerCase());
          if (!new RegExp(r2).test(s2))
            throw new Error(t3.toUpperCase() + ': Option "' + i3 + '" provided type "' + s2 + '" but expected type "' + r2 + '".');
        }
      var a2;
    } };
    return i2.fn.emulateTransitionEnd = t2, i2.event.special[l2.TRANSITION_END] = { bindType: e2, delegateType: e2, handle: function(t3) {
      if (i2(t3.target).is(this))
        return t3.handleObj.handler.apply(this, arguments);
    } }, l2;
  }(e), Kn = (n = "alert", a = "." + (o = "bs.alert"), c = (r = e).fn[n], u = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api" }, f = "alert", d = "fade", g = "show", _ = function() {
    function i2(t3) {
      this._element = t3;
    }
    var t2 = i2.prototype;
    return t2.close = function(t3) {
      var e2 = this._element;
      t3 && (e2 = this._getRootElement(t3)), this._triggerCloseEvent(e2).isDefaultPrevented() || this._removeElement(e2);
    }, t2.dispose = function() {
      r.removeData(this._element, o), this._element = null;
    }, t2._getRootElement = function(t3) {
      var e2 = Fn.getSelectorFromElement(t3), n2 = false;
      return e2 && (n2 = document.querySelector(e2)), n2 || (n2 = r(t3).closest("." + f)[0]), n2;
    }, t2._triggerCloseEvent = function(t3) {
      var e2 = r.Event(u.CLOSE);
      return r(t3).trigger(e2), e2;
    }, t2._removeElement = function(e2) {
      var n2 = this;
      if (r(e2).removeClass(g), r(e2).hasClass(d)) {
        var t3 = Fn.getTransitionDurationFromElement(e2);
        r(e2).one(Fn.TRANSITION_END, function(t4) {
          return n2._destroyElement(e2, t4);
        }).emulateTransitionEnd(t3);
      } else
        this._destroyElement(e2);
    }, t2._destroyElement = function(t3) {
      r(t3).detach().trigger(u.CLOSED).remove();
    }, i2._jQueryInterface = function(n2) {
      return this.each(function() {
        var t3 = r(this), e2 = t3.data(o);
        e2 || (e2 = new i2(this), t3.data(o, e2)), "close" === n2 && e2[n2](this);
      });
    }, i2._handleDismiss = function(e2) {
      return function(t3) {
        t3 && t3.preventDefault(), e2.close(this);
      };
    }, s(i2, null, [{ key: "VERSION", get: function() {
      return "4.1.3";
    } }]), i2;
  }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', _._handleDismiss(new _())), r.fn[n] = _._jQueryInterface, r.fn[n].Constructor = _, r.fn[n].noConflict = function() {
    return r.fn[n] = c, _._jQueryInterface;
  }, _), Mn = (p = "button", y = "." + (v = "bs.button"), E = ".data-api", C = (m = e).fn[p], T = "active", b = "btn", I = '[data-toggle^="button"]', A = '[data-toggle="buttons"]', D = "input", w = ".active", N = ".btn", O = { CLICK_DATA_API: "click" + y + E, FOCUS_BLUR_DATA_API: (S = "focus") + y + E + " blur" + y + E }, k = function() {
    function n2(t3) {
      this._element = t3;
    }
    var t2 = n2.prototype;
    return t2.toggle = function() {
      var t3 = true, e2 = true, n3 = m(this._element).closest(A)[0];
      if (n3) {
        var i2 = this._element.querySelector(D);
        if (i2) {
          if ("radio" === i2.type)
            if (i2.checked && this._element.classList.contains(T))
              t3 = false;
            else {
              var r2 = n3.querySelector(w);
              r2 && m(r2).removeClass(T);
            }
          if (t3) {
            if (i2.hasAttribute("disabled") || n3.hasAttribute("disabled") || i2.classList.contains("disabled") || n3.classList.contains("disabled"))
              return;
            i2.checked = !this._element.classList.contains(T), m(i2).trigger("change");
          }
          i2.focus(), e2 = false;
        }
      }
      e2 && this._element.setAttribute("aria-pressed", !this._element.classList.contains(T)), t3 && m(this._element).toggleClass(T);
    }, t2.dispose = function() {
      m.removeData(this._element, v), this._element = null;
    }, n2._jQueryInterface = function(e2) {
      return this.each(function() {
        var t3 = m(this).data(v);
        t3 || (t3 = new n2(this), m(this).data(v, t3)), "toggle" === e2 && t3[e2]();
      });
    }, s(n2, null, [{ key: "VERSION", get: function() {
      return "4.1.3";
    } }]), n2;
  }(), m(document).on(O.CLICK_DATA_API, I, function(t2) {
    t2.preventDefault();
    var e2 = t2.target;
    m(e2).hasClass(b) || (e2 = m(e2).closest(N)), k._jQueryInterface.call(m(e2), "toggle");
  }).on(O.FOCUS_BLUR_DATA_API, I, function(t2) {
    var e2 = m(t2.target).closest(N)[0];
    m(e2).toggleClass(S, /^focus(in)?$/.test(t2.type));
  }), m.fn[p] = k._jQueryInterface, m.fn[p].Constructor = k, m.fn[p].noConflict = function() {
    return m.fn[p] = C, k._jQueryInterface;
  }, k), Qn = (j = "carousel", L = "." + (H = "bs.carousel"), R = ".data-api", x = (P = e).fn[j], W = { interval: 5e3, keyboard: true, slide: false, pause: "hover", wrap: true }, U = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" }, q = "next", F = "prev", K = "left", M = "right", Q = { SLIDE: "slide" + L, SLID: "slid" + L, KEYDOWN: "keydown" + L, MOUSEENTER: "mouseenter" + L, MOUSELEAVE: "mouseleave" + L, TOUCHEND: "touchend" + L, LOAD_DATA_API: "load" + L + R, CLICK_DATA_API: "click" + L + R }, B = "carousel", V = "active", Y = "slide", z = "carousel-item-right", J = "carousel-item-left", Z = "carousel-item-next", G = "carousel-item-prev", $ = ".active", X = ".active.carousel-item", tt = ".carousel-item", et = ".carousel-item-next, .carousel-item-prev", nt = ".carousel-indicators", it = "[data-slide], [data-slide-to]", rt = '[data-ride="carousel"]', ot = function() {
    function o2(t3, e2) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = false, this._isSliding = false, this.touchTimeout = null, this._config = this._getConfig(e2), this._element = P(t3)[0], this._indicatorsElement = this._element.querySelector(nt), this._addEventListeners();
    }
    var t2 = o2.prototype;
    return t2.next = function() {
      this._isSliding || this._slide(q);
    }, t2.nextWhenVisible = function() {
      !document.hidden && P(this._element).is(":visible") && "hidden" !== P(this._element).css("visibility") && this.next();
    }, t2.prev = function() {
      this._isSliding || this._slide(F);
    }, t2.pause = function(t3) {
      t3 || (this._isPaused = true), this._element.querySelector(et) && (Fn.triggerTransitionEnd(this._element), this.cycle(true)), clearInterval(this._interval), this._interval = null;
    }, t2.cycle = function(t3) {
      t3 || (this._isPaused = false), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, t2.to = function(t3) {
      var e2 = this;
      this._activeElement = this._element.querySelector(X);
      var n2 = this._getItemIndex(this._activeElement);
      if (!(t3 > this._items.length - 1 || t3 < 0))
        if (this._isSliding)
          P(this._element).one(Q.SLID, function() {
            return e2.to(t3);
          });
        else {
          if (n2 === t3)
            return this.pause(), void this.cycle();
          var i2 = n2 < t3 ? q : F;
          this._slide(i2, this._items[t3]);
        }
    }, t2.dispose = function() {
      P(this._element).off(L), P.removeData(this._element, H), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, t2._getConfig = function(t3) {
      return t3 = l({}, W, t3), Fn.typeCheckConfig(j, t3, U), t3;
    }, t2._addEventListeners = function() {
      var e2 = this;
      this._config.keyboard && P(this._element).on(Q.KEYDOWN, function(t3) {
        return e2._keydown(t3);
      }), "hover" === this._config.pause && (P(this._element).on(Q.MOUSEENTER, function(t3) {
        return e2.pause(t3);
      }).on(Q.MOUSELEAVE, function(t3) {
        return e2.cycle(t3);
      }), "ontouchstart" in document.documentElement && P(this._element).on(Q.TOUCHEND, function() {
        e2.pause(), e2.touchTimeout && clearTimeout(e2.touchTimeout), e2.touchTimeout = setTimeout(function(t3) {
          return e2.cycle(t3);
        }, 500 + e2._config.interval);
      }));
    }, t2._keydown = function(t3) {
      if (!/input|textarea/i.test(t3.target.tagName))
        switch (t3.which) {
          case 37:
            t3.preventDefault(), this.prev();
            break;
          case 39:
            t3.preventDefault(), this.next();
        }
    }, t2._getItemIndex = function(t3) {
      return this._items = t3 && t3.parentNode ? [].slice.call(t3.parentNode.querySelectorAll(tt)) : [], this._items.indexOf(t3);
    }, t2._getItemByDirection = function(t3, e2) {
      var n2 = t3 === q, i2 = t3 === F, r2 = this._getItemIndex(e2), o3 = this._items.length - 1;
      if ((i2 && 0 === r2 || n2 && r2 === o3) && !this._config.wrap)
        return e2;
      var s2 = (r2 + (t3 === F ? -1 : 1)) % this._items.length;
      return -1 === s2 ? this._items[this._items.length - 1] : this._items[s2];
    }, t2._triggerSlideEvent = function(t3, e2) {
      var n2 = this._getItemIndex(t3), i2 = this._getItemIndex(this._element.querySelector(X)), r2 = P.Event(Q.SLIDE, { relatedTarget: t3, direction: e2, from: i2, to: n2 });
      return P(this._element).trigger(r2), r2;
    }, t2._setActiveIndicatorElement = function(t3) {
      if (this._indicatorsElement) {
        var e2 = [].slice.call(this._indicatorsElement.querySelectorAll($));
        P(e2).removeClass(V);
        var n2 = this._indicatorsElement.children[this._getItemIndex(t3)];
        n2 && P(n2).addClass(V);
      }
    }, t2._slide = function(t3, e2) {
      var n2, i2, r2, o3 = this, s2 = this._element.querySelector(X), a2 = this._getItemIndex(s2), l2 = e2 || s2 && this._getItemByDirection(t3, s2), c2 = this._getItemIndex(l2), h2 = Boolean(this._interval);
      if (t3 === q ? (n2 = J, i2 = Z, r2 = K) : (n2 = z, i2 = G, r2 = M), l2 && P(l2).hasClass(V))
        this._isSliding = false;
      else if (!this._triggerSlideEvent(l2, r2).isDefaultPrevented() && s2 && l2) {
        this._isSliding = true, h2 && this.pause(), this._setActiveIndicatorElement(l2);
        var u2 = P.Event(Q.SLID, { relatedTarget: l2, direction: r2, from: a2, to: c2 });
        if (P(this._element).hasClass(Y)) {
          P(l2).addClass(i2), Fn.reflow(l2), P(s2).addClass(n2), P(l2).addClass(n2);
          var f2 = Fn.getTransitionDurationFromElement(s2);
          P(s2).one(Fn.TRANSITION_END, function() {
            P(l2).removeClass(n2 + " " + i2).addClass(V), P(s2).removeClass(V + " " + i2 + " " + n2), o3._isSliding = false, setTimeout(function() {
              return P(o3._element).trigger(u2);
            }, 0);
          }).emulateTransitionEnd(f2);
        } else
          P(s2).removeClass(V), P(l2).addClass(V), this._isSliding = false, P(this._element).trigger(u2);
        h2 && this.cycle();
      }
    }, o2._jQueryInterface = function(i2) {
      return this.each(function() {
        var t3 = P(this).data(H), e2 = l({}, W, P(this).data());
        "object" == typeof i2 && (e2 = l({}, e2, i2));
        var n2 = "string" == typeof i2 ? i2 : e2.slide;
        if (t3 || (t3 = new o2(this, e2), P(this).data(H, t3)), "number" == typeof i2)
          t3.to(i2);
        else if ("string" == typeof n2) {
          if ("undefined" == typeof t3[n2])
            throw new TypeError('No method named "' + n2 + '"');
          t3[n2]();
        } else
          e2.interval && (t3.pause(), t3.cycle());
      });
    }, o2._dataApiClickHandler = function(t3) {
      var e2 = Fn.getSelectorFromElement(this);
      if (e2) {
        var n2 = P(e2)[0];
        if (n2 && P(n2).hasClass(B)) {
          var i2 = l({}, P(n2).data(), P(this).data()), r2 = this.getAttribute("data-slide-to");
          r2 && (i2.interval = false), o2._jQueryInterface.call(P(n2), i2), r2 && P(n2).data(H).to(r2), t3.preventDefault();
        }
      }
    }, s(o2, null, [{ key: "VERSION", get: function() {
      return "4.1.3";
    } }, { key: "Default", get: function() {
      return W;
    } }]), o2;
  }(), P(document).on(Q.CLICK_DATA_API, it, ot._dataApiClickHandler), P(window).on(Q.LOAD_DATA_API, function() {
    for (var t2 = [].slice.call(document.querySelectorAll(rt)), e2 = 0, n2 = t2.length; e2 < n2; e2++) {
      var i2 = P(t2[e2]);
      ot._jQueryInterface.call(i2, i2.data());
    }
  }), P.fn[j] = ot._jQueryInterface, P.fn[j].Constructor = ot, P.fn[j].noConflict = function() {
    return P.fn[j] = x, ot._jQueryInterface;
  }, ot), Bn = (at = "collapse", ct = "." + (lt = "bs.collapse"), ht = (st = e).fn[at], ut = { toggle: true, parent: "" }, ft = { toggle: "boolean", parent: "(string|element)" }, dt = { SHOW: "show" + ct, SHOWN: "shown" + ct, HIDE: "hide" + ct, HIDDEN: "hidden" + ct, CLICK_DATA_API: "click" + ct + ".data-api" }, gt = "show", _t = "collapse", mt = "collapsing", pt = "collapsed", vt = "width", yt = "height", Et = ".show, .collapsing", Ct = '[data-toggle="collapse"]', Tt = function() {
    function a2(e2, t3) {
      this._isTransitioning = false, this._element = e2, this._config = this._getConfig(t3), this._triggerArray = st.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + e2.id + '"],[data-toggle="collapse"][data-target="#' + e2.id + '"]'));
      for (var n2 = [].slice.call(document.querySelectorAll(Ct)), i2 = 0, r2 = n2.length; i2 < r2; i2++) {
        var o2 = n2[i2], s2 = Fn.getSelectorFromElement(o2), a3 = [].slice.call(document.querySelectorAll(s2)).filter(function(t4) {
          return t4 === e2;
        });
        null !== s2 && 0 < a3.length && (this._selector = s2, this._triggerArray.push(o2));
      }
      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }
    var t2 = a2.prototype;
    return t2.toggle = function() {
      st(this._element).hasClass(gt) ? this.hide() : this.show();
    }, t2.show = function() {
      var t3, e2, n2 = this;
      if (!this._isTransitioning && !st(this._element).hasClass(gt) && (this._parent && 0 === (t3 = [].slice.call(this._parent.querySelectorAll(Et)).filter(function(t4) {
        return t4.getAttribute("data-parent") === n2._config.parent;
      })).length && (t3 = null), !(t3 && (e2 = st(t3).not(this._selector).data(lt)) && e2._isTransitioning))) {
        var i2 = st.Event(dt.SHOW);
        if (st(this._element).trigger(i2), !i2.isDefaultPrevented()) {
          t3 && (a2._jQueryInterface.call(st(t3).not(this._selector), "hide"), e2 || st(t3).data(lt, null));
          var r2 = this._getDimension();
          st(this._element).removeClass(_t).addClass(mt), this._element.style[r2] = 0, this._triggerArray.length && st(this._triggerArray).removeClass(pt).attr("aria-expanded", true), this.setTransitioning(true);
          var o2 = "scroll" + (r2[0].toUpperCase() + r2.slice(1)), s2 = Fn.getTransitionDurationFromElement(this._element);
          st(this._element).one(Fn.TRANSITION_END, function() {
            st(n2._element).removeClass(mt).addClass(_t).addClass(gt), n2._element.style[r2] = "", n2.setTransitioning(false), st(n2._element).trigger(dt.SHOWN);
          }).emulateTransitionEnd(s2), this._element.style[r2] = this._element[o2] + "px";
        }
      }
    }, t2.hide = function() {
      var t3 = this;
      if (!this._isTransitioning && st(this._element).hasClass(gt)) {
        var e2 = st.Event(dt.HIDE);
        if (st(this._element).trigger(e2), !e2.isDefaultPrevented()) {
          var n2 = this._getDimension();
          this._element.style[n2] = this._element.getBoundingClientRect()[n2] + "px", Fn.reflow(this._element), st(this._element).addClass(mt).removeClass(_t).removeClass(gt);
          var i2 = this._triggerArray.length;
          if (0 < i2)
            for (var r2 = 0; r2 < i2; r2++) {
              var o2 = this._triggerArray[r2], s2 = Fn.getSelectorFromElement(o2);
              if (null !== s2)
                st([].slice.call(document.querySelectorAll(s2))).hasClass(gt) || st(o2).addClass(pt).attr("aria-expanded", false);
            }
          this.setTransitioning(true);
          this._element.style[n2] = "";
          var a3 = Fn.getTransitionDurationFromElement(this._element);
          st(this._element).one(Fn.TRANSITION_END, function() {
            t3.setTransitioning(false), st(t3._element).removeClass(mt).addClass(_t).trigger(dt.HIDDEN);
          }).emulateTransitionEnd(a3);
        }
      }
    }, t2.setTransitioning = function(t3) {
      this._isTransitioning = t3;
    }, t2.dispose = function() {
      st.removeData(this._element, lt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, t2._getConfig = function(t3) {
      return (t3 = l({}, ut, t3)).toggle = Boolean(t3.toggle), Fn.typeCheckConfig(at, t3, ft), t3;
    }, t2._getDimension = function() {
      return st(this._element).hasClass(vt) ? vt : yt;
    }, t2._getParent = function() {
      var n2 = this, t3 = null;
      Fn.isElement(this._config.parent) ? (t3 = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t3 = this._config.parent[0])) : t3 = document.querySelector(this._config.parent);
      var e2 = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]', i2 = [].slice.call(t3.querySelectorAll(e2));
      return st(i2).each(function(t4, e3) {
        n2._addAriaAndCollapsedClass(a2._getTargetFromElement(e3), [e3]);
      }), t3;
    }, t2._addAriaAndCollapsedClass = function(t3, e2) {
      if (t3) {
        var n2 = st(t3).hasClass(gt);
        e2.length && st(e2).toggleClass(pt, !n2).attr("aria-expanded", n2);
      }
    }, a2._getTargetFromElement = function(t3) {
      var e2 = Fn.getSelectorFromElement(t3);
      return e2 ? document.querySelector(e2) : null;
    }, a2._jQueryInterface = function(i2) {
      return this.each(function() {
        var t3 = st(this), e2 = t3.data(lt), n2 = l({}, ut, t3.data(), "object" == typeof i2 && i2 ? i2 : {});
        if (!e2 && n2.toggle && /show|hide/.test(i2) && (n2.toggle = false), e2 || (e2 = new a2(this, n2), t3.data(lt, e2)), "string" == typeof i2) {
          if ("undefined" == typeof e2[i2])
            throw new TypeError('No method named "' + i2 + '"');
          e2[i2]();
        }
      });
    }, s(a2, null, [{ key: "VERSION", get: function() {
      return "4.1.3";
    } }, { key: "Default", get: function() {
      return ut;
    } }]), a2;
  }(), st(document).on(dt.CLICK_DATA_API, Ct, function(t2) {
    "A" === t2.currentTarget.tagName && t2.preventDefault();
    var n2 = st(this), e2 = Fn.getSelectorFromElement(this), i2 = [].slice.call(document.querySelectorAll(e2));
    st(i2).each(function() {
      var t3 = st(this), e3 = t3.data(lt) ? "toggle" : n2.data();
      Tt._jQueryInterface.call(t3, e3);
    });
  }), st.fn[at] = Tt._jQueryInterface, st.fn[at].Constructor = Tt, st.fn[at].noConflict = function() {
    return st.fn[at] = ht, Tt._jQueryInterface;
  }, Tt), Vn = (St = "dropdown", At = "." + (It = "bs.dropdown"), Dt = ".data-api", wt = (bt = e).fn[St], Nt = new RegExp("38|40|27"), Ot = { HIDE: "hide" + At, HIDDEN: "hidden" + At, SHOW: "show" + At, SHOWN: "shown" + At, CLICK: "click" + At, CLICK_DATA_API: "click" + At + Dt, KEYDOWN_DATA_API: "keydown" + At + Dt, KEYUP_DATA_API: "keyup" + At + Dt }, kt = "disabled", Pt = "show", jt = "dropup", Ht = "dropright", Lt = "dropleft", Rt = "dropdown-menu-right", xt = "position-static", Wt = '[data-toggle="dropdown"]', Ut = ".dropdown form", qt = ".dropdown-menu", Ft = ".navbar-nav", Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Mt = "top-start", Qt = "top-end", Bt = "bottom-start", Vt = "bottom-end", Yt = "right-start", zt = "left-start", Jt = { offset: 0, flip: true, boundary: "scrollParent", reference: "toggle", display: "dynamic" }, Zt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" }, Gt = function() {
    function c2(t3, e2) {
      this._element = t3, this._popper = null, this._config = this._getConfig(e2), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }
    var t2 = c2.prototype;
    return t2.toggle = function() {
      if (!this._element.disabled && !bt(this._element).hasClass(kt)) {
        var t3 = c2._getParentFromElement(this._element), e2 = bt(this._menu).hasClass(Pt);
        if (c2._clearMenus(), !e2) {
          var n2 = { relatedTarget: this._element }, i2 = bt.Event(Ot.SHOW, n2);
          if (bt(t3).trigger(i2), !i2.isDefaultPrevented()) {
            if (!this._inNavbar) {
              if ("undefined" == typeof h)
                throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
              var r2 = this._element;
              "parent" === this._config.reference ? r2 = t3 : Fn.isElement(this._config.reference) && (r2 = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r2 = this._config.reference[0])), "scrollParent" !== this._config.boundary && bt(t3).addClass(xt), this._popper = new h(r2, this._menu, this._getPopperConfig());
            }
            "ontouchstart" in document.documentElement && 0 === bt(t3).closest(Ft).length && bt(document.body).children().on("mouseover", null, bt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", true), bt(this._menu).toggleClass(Pt), bt(t3).toggleClass(Pt).trigger(bt.Event(Ot.SHOWN, n2));
          }
        }
      }
    }, t2.dispose = function() {
      bt.removeData(this._element, It), bt(this._element).off(At), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
    }, t2.update = function() {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, t2._addEventListeners = function() {
      var e2 = this;
      bt(this._element).on(Ot.CLICK, function(t3) {
        t3.preventDefault(), t3.stopPropagation(), e2.toggle();
      });
    }, t2._getConfig = function(t3) {
      return t3 = l({}, this.constructor.Default, bt(this._element).data(), t3), Fn.typeCheckConfig(St, t3, this.constructor.DefaultType), t3;
    }, t2._getMenuElement = function() {
      if (!this._menu) {
        var t3 = c2._getParentFromElement(this._element);
        t3 && (this._menu = t3.querySelector(qt));
      }
      return this._menu;
    }, t2._getPlacement = function() {
      var t3 = bt(this._element.parentNode), e2 = Bt;
      return t3.hasClass(jt) ? (e2 = Mt, bt(this._menu).hasClass(Rt) && (e2 = Qt)) : t3.hasClass(Ht) ? e2 = Yt : t3.hasClass(Lt) ? e2 = zt : bt(this._menu).hasClass(Rt) && (e2 = Vt), e2;
    }, t2._detectNavbar = function() {
      return 0 < bt(this._element).closest(".navbar").length;
    }, t2._getPopperConfig = function() {
      var e2 = this, t3 = {};
      "function" == typeof this._config.offset ? t3.fn = function(t4) {
        return t4.offsets = l({}, t4.offsets, e2._config.offset(t4.offsets) || {}), t4;
      } : t3.offset = this._config.offset;
      var n2 = { placement: this._getPlacement(), modifiers: { offset: t3, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
      return "static" === this._config.display && (n2.modifiers.applyStyle = { enabled: false }), n2;
    }, c2._jQueryInterface = function(e2) {
      return this.each(function() {
        var t3 = bt(this).data(It);
        if (t3 || (t3 = new c2(this, "object" == typeof e2 ? e2 : null), bt(this).data(It, t3)), "string" == typeof e2) {
          if ("undefined" == typeof t3[e2])
            throw new TypeError('No method named "' + e2 + '"');
          t3[e2]();
        }
      });
    }, c2._clearMenus = function(t3) {
      if (!t3 || 3 !== t3.which && ("keyup" !== t3.type || 9 === t3.which))
        for (var e2 = [].slice.call(document.querySelectorAll(Wt)), n2 = 0, i2 = e2.length; n2 < i2; n2++) {
          var r2 = c2._getParentFromElement(e2[n2]), o2 = bt(e2[n2]).data(It), s2 = { relatedTarget: e2[n2] };
          if (t3 && "click" === t3.type && (s2.clickEvent = t3), o2) {
            var a2 = o2._menu;
            if (bt(r2).hasClass(Pt) && !(t3 && ("click" === t3.type && /input|textarea/i.test(t3.target.tagName) || "keyup" === t3.type && 9 === t3.which) && bt.contains(r2, t3.target))) {
              var l2 = bt.Event(Ot.HIDE, s2);
              bt(r2).trigger(l2), l2.isDefaultPrevented() || ("ontouchstart" in document.documentElement && bt(document.body).children().off("mouseover", null, bt.noop), e2[n2].setAttribute("aria-expanded", "false"), bt(a2).removeClass(Pt), bt(r2).removeClass(Pt).trigger(bt.Event(Ot.HIDDEN, s2)));
            }
          }
        }
    }, c2._getParentFromElement = function(t3) {
      var e2, n2 = Fn.getSelectorFromElement(t3);
      return n2 && (e2 = document.querySelector(n2)), e2 || t3.parentNode;
    }, c2._dataApiKeydownHandler = function(t3) {
      if ((/input|textarea/i.test(t3.target.tagName) ? !(32 === t3.which || 27 !== t3.which && (40 !== t3.which && 38 !== t3.which || bt(t3.target).closest(qt).length)) : Nt.test(t3.which)) && (t3.preventDefault(), t3.stopPropagation(), !this.disabled && !bt(this).hasClass(kt))) {
        var e2 = c2._getParentFromElement(this), n2 = bt(e2).hasClass(Pt);
        if ((n2 || 27 === t3.which && 32 === t3.which) && (!n2 || 27 !== t3.which && 32 !== t3.which)) {
          var i2 = [].slice.call(e2.querySelectorAll(Kt));
          if (0 !== i2.length) {
            var r2 = i2.indexOf(t3.target);
            38 === t3.which && 0 < r2 && r2--, 40 === t3.which && r2 < i2.length - 1 && r2++, r2 < 0 && (r2 = 0), i2[r2].focus();
          }
        } else {
          if (27 === t3.which) {
            var o2 = e2.querySelector(Wt);
            bt(o2).trigger("focus");
          }
          bt(this).trigger("click");
        }
      }
    }, s(c2, null, [{ key: "VERSION", get: function() {
      return "4.1.3";
    } }, { key: "Default", get: function() {
      return Jt;
    } }, { key: "DefaultType", get: function() {
      return Zt;
    } }]), c2;
  }(), bt(document).on(Ot.KEYDOWN_DATA_API, Wt, Gt._dataApiKeydownHandler).on(Ot.KEYDOWN_DATA_API, qt, Gt._dataApiKeydownHandler).on(Ot.CLICK_DATA_API + " " + Ot.KEYUP_DATA_API, Gt._clearMenus).on(Ot.CLICK_DATA_API, Wt, function(t2) {
    t2.preventDefault(), t2.stopPropagation(), Gt._jQueryInterface.call(bt(this), "toggle");
  }).on(Ot.CLICK_DATA_API, Ut, function(t2) {
    t2.stopPropagation();
  }), bt.fn[St] = Gt._jQueryInterface, bt.fn[St].Constructor = Gt, bt.fn[St].noConflict = function() {
    return bt.fn[St] = wt, Gt._jQueryInterface;
  }, Gt), Yn = (Xt = "modal", ee = "." + (te = "bs.modal"), ne = ($t = e).fn[Xt], ie = { backdrop: true, keyboard: true, focus: true, show: true }, re = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }, oe = { HIDE: "hide" + ee, HIDDEN: "hidden" + ee, SHOW: "show" + ee, SHOWN: "shown" + ee, FOCUSIN: "focusin" + ee, RESIZE: "resize" + ee, CLICK_DISMISS: "click.dismiss" + ee, KEYDOWN_DISMISS: "keydown.dismiss" + ee, MOUSEUP_DISMISS: "mouseup.dismiss" + ee, MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee, CLICK_DATA_API: "click" + ee + ".data-api" }, se = "modal-scrollbar-measure", ae = "modal-backdrop", le = "modal-open", ce = "fade", he = "show", ue = ".modal-dialog", fe = '[data-toggle="modal"]', de = '[data-dismiss="modal"]', ge = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", _e = ".sticky-top", me = function() {
    function r2(t3, e2) {
      this._config = this._getConfig(e2), this._element = t3, this._dialog = t3.querySelector(ue), this._backdrop = null, this._isShown = false, this._isBodyOverflowing = false, this._ignoreBackdropClick = false, this._scrollbarWidth = 0;
    }
    var t2 = r2.prototype;
    return t2.toggle = function(t3) {
      return this._isShown ? this.hide() : this.show(t3);
    }, t2.show = function(t3) {
      var e2 = this;
      if (!this._isTransitioning && !this._isShown) {
        $t(this._element).hasClass(ce) && (this._isTransitioning = true);
        var n2 = $t.Event(oe.SHOW, { relatedTarget: t3 });
        $t(this._element).trigger(n2), this._isShown || n2.isDefaultPrevented() || (this._isShown = true, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), $t(document.body).addClass(le), this._setEscapeEvent(), this._setResizeEvent(), $t(this._element).on(oe.CLICK_DISMISS, de, function(t4) {
          return e2.hide(t4);
        }), $t(this._dialog).on(oe.MOUSEDOWN_DISMISS, function() {
          $t(e2._element).one(oe.MOUSEUP_DISMISS, function(t4) {
            $t(t4.target).is(e2._element) && (e2._ignoreBackdropClick = true);
          });
        }), this._showBackdrop(function() {
          return e2._showElement(t3);
        }));
      }
    }, t2.hide = function(t3) {
      var e2 = this;
      if (t3 && t3.preventDefault(), !this._isTransitioning && this._isShown) {
        var n2 = $t.Event(oe.HIDE);
        if ($t(this._element).trigger(n2), this._isShown && !n2.isDefaultPrevented()) {
          this._isShown = false;
          var i2 = $t(this._element).hasClass(ce);
          if (i2 && (this._isTransitioning = true), this._setEscapeEvent(), this._setResizeEvent(), $t(document).off(oe.FOCUSIN), $t(this._element).removeClass(he), $t(this._element).off(oe.CLICK_DISMISS), $t(this._dialog).off(oe.MOUSEDOWN_DISMISS), i2) {
            var r3 = Fn.getTransitionDurationFromElement(this._element);
            $t(this._element).one(Fn.TRANSITION_END, function(t4) {
              return e2._hideModal(t4);
            }).emulateTransitionEnd(r3);
          } else
            this._hideModal();
        }
      }
    }, t2.dispose = function() {
      $t.removeData(this._element, te), $t(window, document, this._element, this._backdrop).off(ee), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
    }, t2.handleUpdate = function() {
      this._adjustDialog();
    }, t2._getConfig = function(t3) {
      return t3 = l({}, ie, t3), Fn.typeCheckConfig(Xt, t3, re), t3;
    }, t2._showElement = function(t3) {
      var e2 = this, n2 = $t(this._element).hasClass(ce);
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n2 && Fn.reflow(this._element), $t(this._element).addClass(he), this._config.focus && this._enforceFocus();
      var i2 = $t.Event(oe.SHOWN, { relatedTarget: t3 }), r3 = function() {
        e2._config.focus && e2._element.focus(), e2._isTransitioning = false, $t(e2._element).trigger(i2);
      };
      if (n2) {
        var o2 = Fn.getTransitionDurationFromElement(this._element);
        $t(this._dialog).one(Fn.TRANSITION_END, r3).emulateTransitionEnd(o2);
      } else
        r3();
    }, t2._enforceFocus = function() {
      var e2 = this;
      $t(document).off(oe.FOCUSIN).on(oe.FOCUSIN, function(t3) {
        document !== t3.target && e2._element !== t3.target && 0 === $t(e2._element).has(t3.target).length && e2._element.focus();
      });
    }, t2._setEscapeEvent = function() {
      var e2 = this;
      this._isShown && this._config.keyboard ? $t(this._element).on(oe.KEYDOWN_DISMISS, function(t3) {
        27 === t3.which && (t3.preventDefault(), e2.hide());
      }) : this._isShown || $t(this._element).off(oe.KEYDOWN_DISMISS);
    }, t2._setResizeEvent = function() {
      var e2 = this;
      this._isShown ? $t(window).on(oe.RESIZE, function(t3) {
        return e2.handleUpdate(t3);
      }) : $t(window).off(oe.RESIZE);
    }, t2._hideModal = function() {
      var t3 = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._isTransitioning = false, this._showBackdrop(function() {
        $t(document.body).removeClass(le), t3._resetAdjustments(), t3._resetScrollbar(), $t(t3._element).trigger(oe.HIDDEN);
      });
    }, t2._removeBackdrop = function() {
      this._backdrop && ($t(this._backdrop).remove(), this._backdrop = null);
    }, t2._showBackdrop = function(t3) {
      var e2 = this, n2 = $t(this._element).hasClass(ce) ? ce : "";
      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = ae, n2 && this._backdrop.classList.add(n2), $t(this._backdrop).appendTo(document.body), $t(this._element).on(oe.CLICK_DISMISS, function(t4) {
          e2._ignoreBackdropClick ? e2._ignoreBackdropClick = false : t4.target === t4.currentTarget && ("static" === e2._config.backdrop ? e2._element.focus() : e2.hide());
        }), n2 && Fn.reflow(this._backdrop), $t(this._backdrop).addClass(he), !t3)
          return;
        if (!n2)
          return void t3();
        var i2 = Fn.getTransitionDurationFromElement(this._backdrop);
        $t(this._backdrop).one(Fn.TRANSITION_END, t3).emulateTransitionEnd(i2);
      } else if (!this._isShown && this._backdrop) {
        $t(this._backdrop).removeClass(he);
        var r3 = function() {
          e2._removeBackdrop(), t3 && t3();
        };
        if ($t(this._element).hasClass(ce)) {
          var o2 = Fn.getTransitionDurationFromElement(this._backdrop);
          $t(this._backdrop).one(Fn.TRANSITION_END, r3).emulateTransitionEnd(o2);
        } else
          r3();
      } else
        t3 && t3();
    }, t2._adjustDialog = function() {
      var t3 = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && t3 && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t3 && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, t2._resetAdjustments = function() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, t2._checkScrollbar = function() {
      var t3 = document.body.getBoundingClientRect();
      this._isBodyOverflowing = t3.left + t3.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, t2._setScrollbar = function() {
      var r3 = this;
      if (this._isBodyOverflowing) {
        var t3 = [].slice.call(document.querySelectorAll(ge)), e2 = [].slice.call(document.querySelectorAll(_e));
        $t(t3).each(function(t4, e3) {
          var n3 = e3.style.paddingRight, i3 = $t(e3).css("padding-right");
          $t(e3).data("padding-right", n3).css("padding-right", parseFloat(i3) + r3._scrollbarWidth + "px");
        }), $t(e2).each(function(t4, e3) {
          var n3 = e3.style.marginRight, i3 = $t(e3).css("margin-right");
          $t(e3).data("margin-right", n3).css("margin-right", parseFloat(i3) - r3._scrollbarWidth + "px");
        });
        var n2 = document.body.style.paddingRight, i2 = $t(document.body).css("padding-right");
        $t(document.body).data("padding-right", n2).css("padding-right", parseFloat(i2) + this._scrollbarWidth + "px");
      }
    }, t2._resetScrollbar = function() {
      var t3 = [].slice.call(document.querySelectorAll(ge));
      $t(t3).each(function(t4, e3) {
        var n3 = $t(e3).data("padding-right");
        $t(e3).removeData("padding-right"), e3.style.paddingRight = n3 || "";
      });
      var e2 = [].slice.call(document.querySelectorAll("" + _e));
      $t(e2).each(function(t4, e3) {
        var n3 = $t(e3).data("margin-right");
        "undefined" != typeof n3 && $t(e3).css("margin-right", n3).removeData("margin-right");
      });
      var n2 = $t(document.body).data("padding-right");
      $t(document.body).removeData("padding-right"), document.body.style.paddingRight = n2 || "";
    }, t2._getScrollbarWidth = function() {
      var t3 = document.createElement("div");
      t3.className = se, document.body.appendChild(t3);
      var e2 = t3.getBoundingClientRect().width - t3.clientWidth;
      return document.body.removeChild(t3), e2;
    }, r2._jQueryInterface = function(n2, i2) {
      return this.each(function() {
        var t3 = $t(this).data(te), e2 = l({}, ie, $t(this).data(), "object" == typeof n2 && n2 ? n2 : {});
        if (t3 || (t3 = new r2(this, e2), $t(this).data(te, t3)), "string" == typeof n2) {
          if ("undefined" == typeof t3[n2])
            throw new TypeError('No method named "' + n2 + '"');
          t3[n2](i2);
        } else
          e2.show && t3.show(i2);
      });
    }, s(r2, null, [{ key: "VERSION", get: function() {
      return "4.1.3";
    } }, { key: "Default", get: function() {
      return ie;
    } }]), r2;
  }(), $t(document).on(oe.CLICK_DATA_API, fe, function(t2) {
    var e2, n2 = this, i2 = Fn.getSelectorFromElement(this);
    i2 && (e2 = document.querySelector(i2));
    var r2 = $t(e2).data(te) ? "toggle" : l({}, $t(e2).data(), $t(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || t2.preventDefault();
    var o2 = $t(e2).one(oe.SHOW, function(t3) {
      t3.isDefaultPrevented() || o2.one(oe.HIDDEN, function() {
        $t(n2).is(":visible") && n2.focus();
      });
    });
    me._jQueryInterface.call($t(e2), r2, this);
  }), $t.fn[Xt] = me._jQueryInterface, $t.fn[Xt].Constructor = me, $t.fn[Xt].noConflict = function() {
    return $t.fn[Xt] = ne, me._jQueryInterface;
  }, me), zn = (ve = "tooltip", Ee = "." + (ye = "bs.tooltip"), Ce = (pe = e).fn[ve], Te = "bs-tooltip", be = new RegExp("(^|\\s)" + Te + "\\S+", "g"), Ae = { animation: true, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !(Ie = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }), selector: !(Se = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)" }), placement: "top", offset: 0, container: false, fallbackPlacement: "flip", boundary: "scrollParent" }, we = "out", Ne = { HIDE: "hide" + Ee, HIDDEN: "hidden" + Ee, SHOW: (De = "show") + Ee, SHOWN: "shown" + Ee, INSERTED: "inserted" + Ee, CLICK: "click" + Ee, FOCUSIN: "focusin" + Ee, FOCUSOUT: "focusout" + Ee, MOUSEENTER: "mouseenter" + Ee, MOUSELEAVE: "mouseleave" + Ee }, Oe = "fade", ke = "show", Pe = ".tooltip-inner", je = ".arrow", He = "hover", Le = "focus", Re = "click", xe = "manual", We = function() {
    function i2(t3, e2) {
      if ("undefined" == typeof h)
        throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
      this._isEnabled = true, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t3, this.config = this._getConfig(e2), this.tip = null, this._setListeners();
    }
    var t2 = i2.prototype;
    return t2.enable = function() {
      this._isEnabled = true;
    }, t2.disable = function() {
      this._isEnabled = false;
    }, t2.toggleEnabled = function() {
      this._isEnabled = !this._isEnabled;
    }, t2.toggle = function(t3) {
      if (this._isEnabled)
        if (t3) {
          var e2 = this.constructor.DATA_KEY, n2 = pe(t3.currentTarget).data(e2);
          n2 || (n2 = new this.constructor(t3.currentTarget, this._getDelegateConfig()), pe(t3.currentTarget).data(e2, n2)), n2._activeTrigger.click = !n2._activeTrigger.click, n2._isWithActiveTrigger() ? n2._enter(null, n2) : n2._leave(null, n2);
        } else {
          if (pe(this.getTipElement()).hasClass(ke))
            return void this._leave(null, this);
          this._enter(null, this);
        }
    }, t2.dispose = function() {
      clearTimeout(this._timeout), pe.removeData(this.element, this.constructor.DATA_KEY), pe(this.element).off(this.constructor.EVENT_KEY), pe(this.element).closest(".modal").off("hide.bs.modal"), this.tip && pe(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, t2.show = function() {
      var e2 = this;
      if ("none" === pe(this.element).css("display"))
        throw new Error("Please use show on visible elements");
      var t3 = pe.Event(this.constructor.Event.SHOW);
      if (this.isWithContent() && this._isEnabled) {
        pe(this.element).trigger(t3);
        var n2 = pe.contains(this.element.ownerDocument.documentElement, this.element);
        if (t3.isDefaultPrevented() || !n2)
          return;
        var i3 = this.getTipElement(), r2 = Fn.getUID(this.constructor.NAME);
        i3.setAttribute("id", r2), this.element.setAttribute("aria-describedby", r2), this.setContent(), this.config.animation && pe(i3).addClass(Oe);
        var o2 = "function" == typeof this.config.placement ? this.config.placement.call(this, i3, this.element) : this.config.placement, s2 = this._getAttachment(o2);
        this.addAttachmentClass(s2);
        var a2 = false === this.config.container ? document.body : pe(document).find(this.config.container);
        pe(i3).data(this.constructor.DATA_KEY, this), pe.contains(this.element.ownerDocument.documentElement, this.tip) || pe(i3).appendTo(a2), pe(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new h(this.element, i3, { placement: s2, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: je }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(t4) {
          t4.originalPlacement !== t4.placement && e2._handlePopperPlacementChange(t4);
        }, onUpdate: function(t4) {
          e2._handlePopperPlacementChange(t4);
        } }), pe(i3).addClass(ke), "ontouchstart" in document.documentElement && pe(document.body).children().on("mouseover", null, pe.noop);
        var l2 = function() {
          e2.config.animation && e2._fixTransition();
          var t4 = e2._hoverState;
          e2._hoverState = null, pe(e2.element).trigger(e2.constructor.Event.SHOWN), t4 === we && e2._leave(null, e2);
        };
        if (pe(this.tip).hasClass(Oe)) {
          var c2 = Fn.getTransitionDurationFromElement(this.tip);
          pe(this.tip).one(Fn.TRANSITION_END, l2).emulateTransitionEnd(c2);
        } else
          l2();
      }
    }, t2.hide = function(t3) {
      var e2 = this, n2 = this.getTipElement(), i3 = pe.Event(this.constructor.Event.HIDE), r2 = function() {
        e2._hoverState !== De && n2.parentNode && n2.parentNode.removeChild(n2), e2._cleanTipClass(), e2.element.removeAttribute("aria-describedby"), pe(e2.element).trigger(e2.constructor.Event.HIDDEN), null !== e2._popper && e2._popper.destroy(), t3 && t3();
      };
      if (pe(this.element).trigger(i3), !i3.isDefaultPrevented()) {
        if (pe(n2).removeClass(ke), "ontouchstart" in document.documentElement && pe(document.body).children().off("mouseover", null, pe.noop), this._activeTrigger[Re] = false, this._activeTrigger[Le] = false, this._activeTrigger[He] = false, pe(this.tip).hasClass(Oe)) {
          var o2 = Fn.getTransitionDurationFromElement(n2);
          pe(n2).one(Fn.TRANSITION_END, r2).emulateTransitionEnd(o2);
        } else
          r2();
        this._hoverState = "";
      }
    }, t2.update = function() {
      null !== this._popper && this._popper.scheduleUpdate();
    }, t2.isWithContent = function() {
      return Boolean(this.getTitle());
    }, t2.addAttachmentClass = function(t3) {
      pe(this.getTipElement()).addClass(Te + "-" + t3);
    }, t2.getTipElement = function() {
      return this.tip = this.tip || pe(this.config.template)[0], this.tip;
    }, t2.setContent = function() {
      var t3 = this.getTipElement();
      this.setElementContent(pe(t3.querySelectorAll(Pe)), this.getTitle()), pe(t3).removeClass(Oe + " " + ke);
    }, t2.setElementContent = function(t3, e2) {
      var n2 = this.config.html;
      "object" == typeof e2 && (e2.nodeType || e2.jquery) ? n2 ? pe(e2).parent().is(t3) || t3.empty().append(e2) : t3.text(pe(e2).text()) : t3[n2 ? "html" : "text"](e2);
    }, t2.getTitle = function() {
      var t3 = this.element.getAttribute("data-original-title");
      return t3 || (t3 = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t3;
    }, t2._getAttachment = function(t3) {
      return Ie[t3.toUpperCase()];
    }, t2._setListeners = function() {
      var i3 = this;
      this.config.trigger.split(" ").forEach(function(t3) {
        if ("click" === t3)
          pe(i3.element).on(i3.constructor.Event.CLICK, i3.config.selector, function(t4) {
            return i3.toggle(t4);
          });
        else if (t3 !== xe) {
          var e2 = t3 === He ? i3.constructor.Event.MOUSEENTER : i3.constructor.Event.FOCUSIN, n2 = t3 === He ? i3.constructor.Event.MOUSELEAVE : i3.constructor.Event.FOCUSOUT;
          pe(i3.element).on(e2, i3.config.selector, function(t4) {
            return i3._enter(t4);
          }).on(n2, i3.config.selector, function(t4) {
            return i3._leave(t4);
          });
        }
        pe(i3.element).closest(".modal").on("hide.bs.modal", function() {
          return i3.hide();
        });
      }), this.config.selector ? this.config = l({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
    }, t2._fixTitle = function() {
      var t3 = typeof this.element.getAttribute("data-original-title");
      (this.element.getAttribute("title") || "string" !== t3) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, t2._enter = function(t3, e2) {
      var n2 = this.constructor.DATA_KEY;
      (e2 = e2 || pe(t3.currentTarget).data(n2)) || (e2 = new this.constructor(t3.currentTarget, this._getDelegateConfig()), pe(t3.currentTarget).data(n2, e2)), t3 && (e2._activeTrigger["focusin" === t3.type ? Le : He] = true), pe(e2.getTipElement()).hasClass(ke) || e2._hoverState === De ? e2._hoverState = De : (clearTimeout(e2._timeout), e2._hoverState = De, e2.config.delay && e2.config.delay.show ? e2._timeout = setTimeout(function() {
        e2._hoverState === De && e2.show();
      }, e2.config.delay.show) : e2.show());
    }, t2._leave = function(t3, e2) {
      var n2 = this.constructor.DATA_KEY;
      (e2 = e2 || pe(t3.currentTarget).data(n2)) || (e2 = new this.constructor(t3.currentTarget, this._getDelegateConfig()), pe(t3.currentTarget).data(n2, e2)), t3 && (e2._activeTrigger["focusout" === t3.type ? Le : He] = false), e2._isWithActiveTrigger() || (clearTimeout(e2._timeout), e2._hoverState = we, e2.config.delay && e2.config.delay.hide ? e2._timeout = setTimeout(function() {
        e2._hoverState === we && e2.hide();
      }, e2.config.delay.hide) : e2.hide());
    }, t2._isWithActiveTrigger = function() {
      for (var t3 in this._activeTrigger)
        if (this._activeTrigger[t3])
          return true;
      return false;
    }, t2._getConfig = function(t3) {
      return "number" == typeof (t3 = l({}, this.constructor.Default, pe(this.element).data(), "object" == typeof t3 && t3 ? t3 : {})).delay && (t3.delay = { show: t3.delay, hide: t3.delay }), "number" == typeof t3.title && (t3.title = t3.title.toString()), "number" == typeof t3.content && (t3.content = t3.content.toString()), Fn.typeCheckConfig(ve, t3, this.constructor.DefaultType), t3;
    }, t2._getDelegateConfig = function() {
      var t3 = {};
      if (this.config)
        for (var e2 in this.config)
          this.constructor.Default[e2] !== this.config[e2] && (t3[e2] = this.config[e2]);
      return t3;
    }, t2._cleanTipClass = function() {
      var t3 = pe(this.getTipElement()), e2 = t3.attr("class").match(be);
      null !== e2 && e2.length && t3.removeClass(e2.join(""));
    }, t2._handlePopperPlacementChange = function(t3) {
      var e2 = t3.instance;
      this.tip = e2.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t3.placement));
    }, t2._fixTransition = function() {
      var t3 = this.getTipElement(), e2 = this.config.animation;
      null === t3.getAttribute("x-placement") && (pe(t3).removeClass(Oe), this.config.animation = false, this.hide(), this.show(), this.config.animation = e2);
    }, i2._jQueryInterface = function(n2) {
      return this.each(function() {
        var t3 = pe(this).data(ye), e2 = "object" == typeof n2 && n2;
        if ((t3 || !/dispose|hide/.test(n2)) && (t3 || (t3 = new i2(this, e2), pe(this).data(ye, t3)), "string" == typeof n2)) {
          if ("undefined" == typeof t3[n2])
            throw new TypeError('No method named "' + n2 + '"');
          t3[n2]();
        }
      });
    }, s(i2, null, [{ key: "VERSION", get: function() {
      return "4.1.3";
    } }, { key: "Default", get: function() {
      return Ae;
    } }, { key: "NAME", get: function() {
      return ve;
    } }, { key: "DATA_KEY", get: function() {
      return ye;
    } }, { key: "Event", get: function() {
      return Ne;
    } }, { key: "EVENT_KEY", get: function() {
      return Ee;
    } }, { key: "DefaultType", get: function() {
      return Se;
    } }]), i2;
  }(), pe.fn[ve] = We._jQueryInterface, pe.fn[ve].Constructor = We, pe.fn[ve].noConflict = function() {
    return pe.fn[ve] = Ce, We._jQueryInterface;
  }, We), Jn = (qe = "popover", Ke = "." + (Fe = "bs.popover"), Me = (Ue = e).fn[qe], Qe = "bs-popover", Be = new RegExp("(^|\\s)" + Qe + "\\S+", "g"), Ve = l({}, zn.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }), Ye = l({}, zn.DefaultType, { content: "(string|element|function)" }), ze = "fade", Ze = ".popover-header", Ge = ".popover-body", $e = { HIDE: "hide" + Ke, HIDDEN: "hidden" + Ke, SHOW: (Je = "show") + Ke, SHOWN: "shown" + Ke, INSERTED: "inserted" + Ke, CLICK: "click" + Ke, FOCUSIN: "focusin" + Ke, FOCUSOUT: "focusout" + Ke, MOUSEENTER: "mouseenter" + Ke, MOUSELEAVE: "mouseleave" + Ke }, Xe = function(t2) {
    var e2, n2;
    function i2() {
      return t2.apply(this, arguments) || this;
    }
    n2 = t2, (e2 = i2).prototype = Object.create(n2.prototype), (e2.prototype.constructor = e2).__proto__ = n2;
    var r2 = i2.prototype;
    return r2.isWithContent = function() {
      return this.getTitle() || this._getContent();
    }, r2.addAttachmentClass = function(t3) {
      Ue(this.getTipElement()).addClass(Qe + "-" + t3);
    }, r2.getTipElement = function() {
      return this.tip = this.tip || Ue(this.config.template)[0], this.tip;
    }, r2.setContent = function() {
      var t3 = Ue(this.getTipElement());
      this.setElementContent(t3.find(Ze), this.getTitle());
      var e3 = this._getContent();
      "function" == typeof e3 && (e3 = e3.call(this.element)), this.setElementContent(t3.find(Ge), e3), t3.removeClass(ze + " " + Je);
    }, r2._getContent = function() {
      return this.element.getAttribute("data-content") || this.config.content;
    }, r2._cleanTipClass = function() {
      var t3 = Ue(this.getTipElement()), e3 = t3.attr("class").match(Be);
      null !== e3 && 0 < e3.length && t3.removeClass(e3.join(""));
    }, i2._jQueryInterface = function(n3) {
      return this.each(function() {
        var t3 = Ue(this).data(Fe), e3 = "object" == typeof n3 ? n3 : null;
        if ((t3 || !/destroy|hide/.test(n3)) && (t3 || (t3 = new i2(this, e3), Ue(this).data(Fe, t3)), "string" == typeof n3)) {
          if ("undefined" == typeof t3[n3])
            throw new TypeError('No method named "' + n3 + '"');
          t3[n3]();
        }
      });
    }, s(i2, null, [{ key: "VERSION", get: function() {
      return "4.1.3";
    } }, { key: "Default", get: function() {
      return Ve;
    } }, { key: "NAME", get: function() {
      return qe;
    } }, { key: "DATA_KEY", get: function() {
      return Fe;
    } }, { key: "Event", get: function() {
      return $e;
    } }, { key: "EVENT_KEY", get: function() {
      return Ke;
    } }, { key: "DefaultType", get: function() {
      return Ye;
    } }]), i2;
  }(zn), Ue.fn[qe] = Xe._jQueryInterface, Ue.fn[qe].Constructor = Xe, Ue.fn[qe].noConflict = function() {
    return Ue.fn[qe] = Me, Xe._jQueryInterface;
  }, Xe), Zn = (en = "scrollspy", rn = "." + (nn = "bs.scrollspy"), on = (tn = e).fn[en], sn = { offset: 10, method: "auto", target: "" }, an = { offset: "number", method: "string", target: "(string|element)" }, ln = { ACTIVATE: "activate" + rn, SCROLL: "scroll" + rn, LOAD_DATA_API: "load" + rn + ".data-api" }, cn = "dropdown-item", hn = "active", un = '[data-spy="scroll"]', fn = ".active", dn = ".nav, .list-group", gn = ".nav-link", _n = ".nav-item", mn = ".list-group-item", pn = ".dropdown", vn = ".dropdown-item", yn = ".dropdown-toggle", En = "offset", Cn = "position", Tn = function() {
    function n2(t3, e2) {
      var n3 = this;
      this._element = t3, this._scrollElement = "BODY" === t3.tagName ? window : t3, this._config = this._getConfig(e2), this._selector = this._config.target + " " + gn + "," + this._config.target + " " + mn + "," + this._config.target + " " + vn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, tn(this._scrollElement).on(ln.SCROLL, function(t4) {
        return n3._process(t4);
      }), this.refresh(), this._process();
    }
    var t2 = n2.prototype;
    return t2.refresh = function() {
      var e2 = this, t3 = this._scrollElement === this._scrollElement.window ? En : Cn, r2 = "auto" === this._config.method ? t3 : this._config.method, o2 = r2 === Cn ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(t4) {
        var e3, n3 = Fn.getSelectorFromElement(t4);
        if (n3 && (e3 = document.querySelector(n3)), e3) {
          var i2 = e3.getBoundingClientRect();
          if (i2.width || i2.height)
            return [tn(e3)[r2]().top + o2, n3];
        }
        return null;
      }).filter(function(t4) {
        return t4;
      }).sort(function(t4, e3) {
        return t4[0] - e3[0];
      }).forEach(function(t4) {
        e2._offsets.push(t4[0]), e2._targets.push(t4[1]);
      });
    }, t2.dispose = function() {
      tn.removeData(this._element, nn), tn(this._scrollElement).off(rn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, t2._getConfig = function(t3) {
      if ("string" != typeof (t3 = l({}, sn, "object" == typeof t3 && t3 ? t3 : {})).target) {
        var e2 = tn(t3.target).attr("id");
        e2 || (e2 = Fn.getUID(en), tn(t3.target).attr("id", e2)), t3.target = "#" + e2;
      }
      return Fn.typeCheckConfig(en, t3, an), t3;
    }, t2._getScrollTop = function() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, t2._getScrollHeight = function() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, t2._getOffsetHeight = function() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, t2._process = function() {
      var t3 = this._getScrollTop() + this._config.offset, e2 = this._getScrollHeight(), n3 = this._config.offset + e2 - this._getOffsetHeight();
      if (this._scrollHeight !== e2 && this.refresh(), n3 <= t3) {
        var i2 = this._targets[this._targets.length - 1];
        this._activeTarget !== i2 && this._activate(i2);
      } else {
        if (this._activeTarget && t3 < this._offsets[0] && 0 < this._offsets[0])
          return this._activeTarget = null, void this._clear();
        for (var r2 = this._offsets.length; r2--; ) {
          this._activeTarget !== this._targets[r2] && t3 >= this._offsets[r2] && ("undefined" == typeof this._offsets[r2 + 1] || t3 < this._offsets[r2 + 1]) && this._activate(this._targets[r2]);
        }
      }
    }, t2._activate = function(e2) {
      this._activeTarget = e2, this._clear();
      var t3 = this._selector.split(",");
      t3 = t3.map(function(t4) {
        return t4 + '[data-target="' + e2 + '"],' + t4 + '[href="' + e2 + '"]';
      });
      var n3 = tn([].slice.call(document.querySelectorAll(t3.join(","))));
      n3.hasClass(cn) ? (n3.closest(pn).find(yn).addClass(hn), n3.addClass(hn)) : (n3.addClass(hn), n3.parents(dn).prev(gn + ", " + mn).addClass(hn), n3.parents(dn).prev(_n).children(gn).addClass(hn)), tn(this._scrollElement).trigger(ln.ACTIVATE, { relatedTarget: e2 });
    }, t2._clear = function() {
      var t3 = [].slice.call(document.querySelectorAll(this._selector));
      tn(t3).filter(fn).removeClass(hn);
    }, n2._jQueryInterface = function(e2) {
      return this.each(function() {
        var t3 = tn(this).data(nn);
        if (t3 || (t3 = new n2(this, "object" == typeof e2 && e2), tn(this).data(nn, t3)), "string" == typeof e2) {
          if ("undefined" == typeof t3[e2])
            throw new TypeError('No method named "' + e2 + '"');
          t3[e2]();
        }
      });
    }, s(n2, null, [{ key: "VERSION", get: function() {
      return "4.1.3";
    } }, { key: "Default", get: function() {
      return sn;
    } }]), n2;
  }(), tn(window).on(ln.LOAD_DATA_API, function() {
    for (var t2 = [].slice.call(document.querySelectorAll(un)), e2 = t2.length; e2--; ) {
      var n2 = tn(t2[e2]);
      Tn._jQueryInterface.call(n2, n2.data());
    }
  }), tn.fn[en] = Tn._jQueryInterface, tn.fn[en].Constructor = Tn, tn.fn[en].noConflict = function() {
    return tn.fn[en] = on, Tn._jQueryInterface;
  }, Tn), Gn = (In = "." + (Sn = "bs.tab"), An = (bn = e).fn.tab, Dn = { HIDE: "hide" + In, HIDDEN: "hidden" + In, SHOW: "show" + In, SHOWN: "shown" + In, CLICK_DATA_API: "click" + In + ".data-api" }, wn = "dropdown-menu", Nn = "active", On = "disabled", kn = "fade", Pn = "show", jn = ".dropdown", Hn = ".nav, .list-group", Ln = ".active", Rn = "> li > .active", xn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Wn = ".dropdown-toggle", Un = "> .dropdown-menu .active", qn = function() {
    function i2(t3) {
      this._element = t3;
    }
    var t2 = i2.prototype;
    return t2.show = function() {
      var n2 = this;
      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && bn(this._element).hasClass(Nn) || bn(this._element).hasClass(On))) {
        var t3, i3, e2 = bn(this._element).closest(Hn)[0], r2 = Fn.getSelectorFromElement(this._element);
        if (e2) {
          var o2 = "UL" === e2.nodeName ? Rn : Ln;
          i3 = (i3 = bn.makeArray(bn(e2).find(o2)))[i3.length - 1];
        }
        var s2 = bn.Event(Dn.HIDE, { relatedTarget: this._element }), a2 = bn.Event(Dn.SHOW, { relatedTarget: i3 });
        if (i3 && bn(i3).trigger(s2), bn(this._element).trigger(a2), !a2.isDefaultPrevented() && !s2.isDefaultPrevented()) {
          r2 && (t3 = document.querySelector(r2)), this._activate(this._element, e2);
          var l2 = function() {
            var t4 = bn.Event(Dn.HIDDEN, { relatedTarget: n2._element }), e3 = bn.Event(Dn.SHOWN, { relatedTarget: i3 });
            bn(i3).trigger(t4), bn(n2._element).trigger(e3);
          };
          t3 ? this._activate(t3, t3.parentNode, l2) : l2();
        }
      }
    }, t2.dispose = function() {
      bn.removeData(this._element, Sn), this._element = null;
    }, t2._activate = function(t3, e2, n2) {
      var i3 = this, r2 = ("UL" === e2.nodeName ? bn(e2).find(Rn) : bn(e2).children(Ln))[0], o2 = n2 && r2 && bn(r2).hasClass(kn), s2 = function() {
        return i3._transitionComplete(t3, r2, n2);
      };
      if (r2 && o2) {
        var a2 = Fn.getTransitionDurationFromElement(r2);
        bn(r2).one(Fn.TRANSITION_END, s2).emulateTransitionEnd(a2);
      } else
        s2();
    }, t2._transitionComplete = function(t3, e2, n2) {
      if (e2) {
        bn(e2).removeClass(Pn + " " + Nn);
        var i3 = bn(e2.parentNode).find(Un)[0];
        i3 && bn(i3).removeClass(Nn), "tab" === e2.getAttribute("role") && e2.setAttribute("aria-selected", false);
      }
      if (bn(t3).addClass(Nn), "tab" === t3.getAttribute("role") && t3.setAttribute("aria-selected", true), Fn.reflow(t3), bn(t3).addClass(Pn), t3.parentNode && bn(t3.parentNode).hasClass(wn)) {
        var r2 = bn(t3).closest(jn)[0];
        if (r2) {
          var o2 = [].slice.call(r2.querySelectorAll(Wn));
          bn(o2).addClass(Nn);
        }
        t3.setAttribute("aria-expanded", true);
      }
      n2 && n2();
    }, i2._jQueryInterface = function(n2) {
      return this.each(function() {
        var t3 = bn(this), e2 = t3.data(Sn);
        if (e2 || (e2 = new i2(this), t3.data(Sn, e2)), "string" == typeof n2) {
          if ("undefined" == typeof e2[n2])
            throw new TypeError('No method named "' + n2 + '"');
          e2[n2]();
        }
      });
    }, s(i2, null, [{ key: "VERSION", get: function() {
      return "4.1.3";
    } }]), i2;
  }(), bn(document).on(Dn.CLICK_DATA_API, xn, function(t2) {
    t2.preventDefault(), qn._jQueryInterface.call(bn(this), "show");
  }), bn.fn.tab = qn._jQueryInterface, bn.fn.tab.Constructor = qn, bn.fn.tab.noConflict = function() {
    return bn.fn.tab = An, qn._jQueryInterface;
  }, qn);
  !function(t2) {
    if ("undefined" == typeof t2)
      throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var e2 = t2.fn.jquery.split(" ")[0].split(".");
    if (e2[0] < 2 && e2[1] < 9 || 1 === e2[0] && 9 === e2[1] && e2[2] < 1 || 4 <= e2[0])
      throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(e), t.Util = Fn, t.Alert = Kn, t.Button = Mn, t.Carousel = Qn, t.Collapse = Bn, t.Dropdown = Vn, t.Modal = Yn, t.Popover = Jn, t.Scrollspy = Zn, t.Tab = Gn, t.Tooltip = zn, Object.defineProperty(t, "__esModule", { value: true });
});
!function(e) {
  e.fn.niceSelect = function(t) {
    function s(t2) {
      t2.after(e("<div></div>").addClass("nice-select").addClass(t2.attr("class") || "").addClass(t2.attr("disabled") ? "disabled" : "").attr("tabindex", t2.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
      var s2 = t2.next(), n2 = t2.find("option"), i = t2.find("option:selected");
      s2.find(".current").html(i.data("display") || i.text()), n2.each(function(t3) {
        var n3 = e(this), i2 = n3.data("display");
        s2.find("ul").append(e("<li></li>").attr("data-value", n3.val()).attr("data-display", i2 || null).addClass("option" + (n3.is(":selected") ? " selected" : "") + (n3.is(":disabled") ? " disabled" : "")).html(n3.text()));
      });
    }
    if ("string" == typeof t)
      return "update" == t ? this.each(function() {
        var t2 = e(this), n2 = e(this).next(".nice-select"), i = n2.hasClass("open");
        n2.length && (n2.remove(), s(t2), i && t2.next().trigger("click"));
      }) : "destroy" == t ? (this.each(function() {
        var t2 = e(this), s2 = e(this).next(".nice-select");
        s2.length && (s2.remove(), t2.css("display", ""));
      }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this;
    this.hide(), this.each(function() {
      var t2 = e(this);
      t2.next().hasClass("nice-select") || s(t2);
    }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function(t2) {
      var s2 = e(this);
      e(".nice-select").not(s2).removeClass("open"), s2.toggleClass("open"), s2.hasClass("open") ? (s2.find(".option"), s2.find(".focus").removeClass("focus"), s2.find(".selected").addClass("focus")) : s2.focus();
    }), e(document).on("click.nice_select", function(t2) {
      0 === e(t2.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option");
    }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function(t2) {
      var s2 = e(this), n2 = s2.closest(".nice-select");
      n2.find(".selected").removeClass("selected"), s2.addClass("selected");
      var i = s2.data("display") || s2.text();
      n2.find(".current").text(i), n2.prev("select").val(s2.data("value")).trigger("change");
    }), e(document).on("keydown.nice_select", ".nice-select", function(t2) {
      var s2 = e(this), n2 = e(s2.find(".focus") || s2.find(".list .option.selected"));
      if (32 == t2.keyCode || 13 == t2.keyCode)
        return s2.hasClass("open") ? n2.trigger("click") : s2.trigger("click"), false;
      if (40 == t2.keyCode) {
        if (s2.hasClass("open")) {
          var i = n2.nextAll(".option:not(.disabled)").first();
          i.length > 0 && (s2.find(".focus").removeClass("focus"), i.addClass("focus"));
        } else
          s2.trigger("click");
        return false;
      }
      if (38 == t2.keyCode) {
        if (s2.hasClass("open")) {
          var l = n2.prevAll(".option:not(.disabled)").first();
          l.length > 0 && (s2.find(".focus").removeClass("focus"), l.addClass("focus"));
        } else
          s2.trigger("click");
        return false;
      }
      if (27 == t2.keyCode)
        s2.hasClass("open") && s2.trigger("click");
      else if (9 == t2.keyCode && s2.hasClass("open"))
        return false;
    });
    var n = document.createElement("a").style;
    return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this;
  };
}(jQuery);
!function(a, b, c, d) {
  function e(b2, c2) {
    this.settings = null, this.options = a.extend({}, e.Defaults, c2), this.$element = a(b2), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }, this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }, a.each(["onResize", "onThrottledResize"], a.proxy(function(b3, c3) {
      this._handlers[c3] = a.proxy(this[c3], this);
    }, this)), a.each(e.Plugins, a.proxy(function(a2, b3) {
      this._plugins[a2.charAt(0).toLowerCase() + a2.slice(1)] = new b3(this);
    }, this)), a.each(e.Workers, a.proxy(function(b3, c3) {
      this._pipe.push({ filter: c3.filter, run: a.proxy(c3.run, this) });
    }, this)), this.setup(), this.initialize();
  }
  e.Defaults = { items: 3, loop: false, center: false, rewind: false, mouseDrag: true, touchDrag: true, pullDrag: true, freeDrag: false, margin: 0, stagePadding: 0, merge: false, mergeFit: true, autoWidth: false, startPosition: 0, rtl: false, smartSpeed: 250, fluidSpeed: false, dragEndSpeed: false, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, fallbackEasing: "swing", info: false, nestedItemSelector: false, itemElement: "div", stageElement: "div", refreshClass: "owl-refresh", loadedClass: "owl-loaded", loadingClass: "owl-loading", rtlClass: "owl-rtl", responsiveClass: "owl-responsive", dragClass: "owl-drag", itemClass: "owl-item", stageClass: "owl-stage", stageOuterClass: "owl-stage-outer", grabClass: "owl-grab" }, e.Width = { Default: "default", Inner: "inner", Outer: "outer" }, e.Type = { Event: "event", State: "state" }, e.Plugins = {}, e.Workers = [{ filter: ["width", "settings"], run: function() {
    this._width = this.$element.width();
  } }, { filter: ["width", "items", "settings"], run: function(a2) {
    a2.current = this._items && this._items[this.relative(this._current)];
  } }, { filter: ["items", "settings"], run: function() {
    this.$stage.children(".cloned").remove();
  } }, { filter: ["width", "items", "settings"], run: function(a2) {
    var b2 = this.settings.margin || "", c2 = !this.settings.autoWidth, d2 = this.settings.rtl, e2 = { width: "auto", "margin-left": d2 ? b2 : "", "margin-right": d2 ? "" : b2 };
    !c2 && this.$stage.children().css(e2), a2.css = e2;
  } }, { filter: ["width", "items", "settings"], run: function(a2) {
    var b2 = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, c2 = null, d2 = this._items.length, e2 = !this.settings.autoWidth, f = [];
    for (a2.items = { merge: false, width: b2 }; d2--; )
      c2 = this._mergers[d2], c2 = this.settings.mergeFit && Math.min(c2, this.settings.items) || c2, a2.items.merge = c2 > 1 || a2.items.merge, f[d2] = e2 ? b2 * c2 : this._items[d2].width();
    this._widths = f;
  } }, { filter: ["items", "settings"], run: function() {
    var b2 = [], c2 = this._items, d2 = this.settings, e2 = Math.max(2 * d2.items, 4), f = 2 * Math.ceil(c2.length / 2), g = d2.loop && c2.length ? d2.rewind ? e2 : Math.max(e2, f) : 0, h = "", i = "";
    for (g /= 2; g--; )
      b2.push(this.normalize(b2.length / 2, true)), h += c2[b2[b2.length - 1]][0].outerHTML, b2.push(this.normalize(c2.length - 1 - (b2.length - 1) / 2, true)), i = c2[b2[b2.length - 1]][0].outerHTML + i;
    this._clones = b2, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage);
  } }, { filter: ["width", "items", "settings"], run: function() {
    for (var a2 = this.settings.rtl ? 1 : -1, b2 = this._clones.length + this._items.length, c2 = -1, d2 = 0, e2 = 0, f = []; ++c2 < b2; )
      d2 = f[c2 - 1] || 0, e2 = this._widths[this.relative(c2)] + this.settings.margin, f.push(d2 + e2 * a2);
    this._coordinates = f;
  } }, { filter: ["width", "items", "settings"], run: function() {
    var a2 = this.settings.stagePadding, b2 = this._coordinates, c2 = { width: Math.ceil(Math.abs(b2[b2.length - 1])) + 2 * a2, "padding-left": a2 || "", "padding-right": a2 || "" };
    this.$stage.css(c2);
  } }, { filter: ["width", "items", "settings"], run: function(a2) {
    var b2 = this._coordinates.length, c2 = !this.settings.autoWidth, d2 = this.$stage.children();
    if (c2 && a2.items.merge)
      for (; b2--; )
        a2.css.width = this._widths[this.relative(b2)], d2.eq(b2).css(a2.css);
    else
      c2 && (a2.css.width = a2.items.width, d2.css(a2.css));
  } }, { filter: ["items"], run: function() {
    this._coordinates.length < 1 && this.$stage.removeAttr("style");
  } }, { filter: ["width", "items", "settings"], run: function(a2) {
    a2.current = a2.current ? this.$stage.children().index(a2.current) : 0, a2.current = Math.max(this.minimum(), Math.min(this.maximum(), a2.current)), this.reset(a2.current);
  } }, { filter: ["position"], run: function() {
    this.animate(this.coordinates(this._current));
  } }, { filter: ["width", "position", "items", "settings"], run: function() {
    var a2, b2, c2, d2, e2 = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding, g = this.coordinates(this.current()) + f, h = g + this.width() * e2, i = [];
    for (c2 = 0, d2 = this._coordinates.length; c2 < d2; c2++)
      a2 = this._coordinates[c2 - 1] || 0, b2 = Math.abs(this._coordinates[c2]) + f * e2, (this.op(a2, "<=", g) && this.op(a2, ">", h) || this.op(b2, "<", g) && this.op(b2, ">", h)) && i.push(c2);
    this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"));
  } }], e.prototype.initialize = function() {
    if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
      var b2, c2, e2;
      b2 = this.$element.find("img"), c2 = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e2 = this.$element.children(c2).width(), b2.length && e2 <= 0 && this.preloadAutoWidthImages(b2);
    }
    this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
  }, e.prototype.setup = function() {
    var b2 = this.viewport(), c2 = this.options.responsive, d2 = -1, e2 = null;
    c2 ? (a.each(c2, function(a2) {
      a2 <= b2 && a2 > d2 && (d2 = Number(a2));
    }), e2 = a.extend({}, this.options, c2[d2]), "function" == typeof e2.stagePadding && (e2.stagePadding = e2.stagePadding()), delete e2.responsive, e2.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d2))) : e2 = a.extend({}, this.options), this.trigger("change", { property: { name: "settings", value: e2 } }), this._breakpoint = d2, this.settings = e2, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } });
  }, e.prototype.optionsLogic = function() {
    this.settings.autoWidth && (this.settings.stagePadding = false, this.settings.merge = false);
  }, e.prototype.prepare = function(b2) {
    var c2 = this.trigger("prepare", { content: b2 });
    return c2.data || (c2.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b2)), this.trigger("prepared", { content: c2.data }), c2.data;
  }, e.prototype.update = function() {
    for (var b2 = 0, c2 = this._pipe.length, d2 = a.proxy(function(a2) {
      return this[a2];
    }, this._invalidated), e2 = {}; b2 < c2; )
      (this._invalidated.all || a.grep(this._pipe[b2].filter, d2).length > 0) && this._pipe[b2].run(e2), b2++;
    this._invalidated = {}, !this.is("valid") && this.enter("valid");
  }, e.prototype.width = function(a2) {
    switch (a2 = a2 || e.Width.Default) {
      case e.Width.Inner:
      case e.Width.Outer:
        return this._width;
      default:
        return this._width - 2 * this.settings.stagePadding + this.settings.margin;
    }
  }, e.prototype.refresh = function() {
    this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed");
  }, e.prototype.onThrottledResize = function() {
    b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
  }, e.prototype.onResize = function() {
    return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), false) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))));
  }, e.prototype.registerEventHandlers = function() {
    a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== false && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
      return false;
    })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
  }, e.prototype.onDragStart = function(b2) {
    var d2 = null;
    3 !== b2.which && (a.support.transform ? (d2 = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d2 = { x: d2[16 === d2.length ? 12 : 4], y: d2[16 === d2.length ? 13 : 5] }) : (d2 = this.$stage.position(), d2 = { x: this.settings.rtl ? d2.left + this.$stage.width() - this.width() + this.settings.margin : d2.left, y: d2.top }), this.is("animating") && (a.support.transform ? this.animate(d2.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b2.type), this.speed(0), this._drag.time = (/* @__PURE__ */ new Date()).getTime(), this._drag.target = a(b2.target), this._drag.stage.start = d2, this._drag.stage.current = d2, this._drag.pointer = this.pointer(b2), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b3) {
      var d3 = this.difference(this._drag.pointer, this.pointer(b3));
      a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d3.x) < Math.abs(d3.y) && this.is("valid") || (b3.preventDefault(), this.enter("dragging"), this.trigger("drag"));
    }, this)));
  }, e.prototype.onDragMove = function(a2) {
    var b2 = null, c2 = null, d2 = null, e2 = this.difference(this._drag.pointer, this.pointer(a2)), f = this.difference(this._drag.stage.start, e2);
    this.is("dragging") && (a2.preventDefault(), this.settings.loop ? (b2 = this.coordinates(this.minimum()), c2 = this.coordinates(this.maximum() + 1) - b2, f.x = ((f.x - b2) % c2 + c2) % c2 + b2) : (b2 = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c2 = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d2 = this.settings.pullDrag ? -1 * e2.x / 5 : 0, f.x = Math.max(Math.min(f.x, b2 + d2), c2 + d2)), this._drag.stage.current = f, this.animate(f.x));
  }, e.prototype.onDragEnd = function(b2) {
    var d2 = this.difference(this._drag.pointer, this.pointer(b2)), e2 = this._drag.stage.current, f = d2.x > 0 ^ this.settings.rtl ? "left" : "right";
    a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d2.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e2.x, 0 !== d2.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d2.x) > 3 || (/* @__PURE__ */ new Date()).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
      return false;
    })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
  }, e.prototype.closest = function(b2, c2) {
    var d2 = -1, e2 = 30, f = this.width(), g = this.coordinates();
    return this.settings.freeDrag || a.each(g, a.proxy(function(a2, h) {
      return "left" === c2 && b2 > h - e2 && b2 < h + e2 ? d2 = a2 : "right" === c2 && b2 > h - f - e2 && b2 < h - f + e2 ? d2 = a2 + 1 : this.op(b2, "<", h) && this.op(b2, ">", g[a2 + 1] || h - f) && (d2 = "left" === c2 ? a2 + 1 : a2), d2 === -1;
    }, this)), this.settings.loop || (this.op(b2, ">", g[this.minimum()]) ? d2 = b2 = this.minimum() : this.op(b2, "<", g[this.maximum()]) && (d2 = b2 = this.maximum())), d2;
  }, e.prototype.animate = function(b2) {
    var c2 = this.speed() > 0;
    this.is("animating") && this.onTransitionEnd(), c2 && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({ transform: "translate3d(" + b2 + "px,0px,0px)", transition: this.speed() / 1e3 + "s" }) : c2 ? this.$stage.animate({ left: b2 + "px" }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({ left: b2 + "px" });
  }, e.prototype.is = function(a2) {
    return this._states.current[a2] && this._states.current[a2] > 0;
  }, e.prototype.current = function(a2) {
    if (a2 === d)
      return this._current;
    if (0 === this._items.length)
      return d;
    if (a2 = this.normalize(a2), this._current !== a2) {
      var b2 = this.trigger("change", { property: { name: "position", value: a2 } });
      b2.data !== d && (a2 = this.normalize(b2.data)), this._current = a2, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } });
    }
    return this._current;
  }, e.prototype.invalidate = function(b2) {
    return "string" === a.type(b2) && (this._invalidated[b2] = true, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a2, b3) {
      return b3;
    });
  }, e.prototype.reset = function(a2) {
    a2 = this.normalize(a2), a2 !== d && (this._speed = 0, this._current = a2, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a2)), this.release(["translate", "translated"]));
  }, e.prototype.normalize = function(a2, b2) {
    var c2 = this._items.length, e2 = b2 ? 0 : this._clones.length;
    return !this.isNumeric(a2) || c2 < 1 ? a2 = d : (a2 < 0 || a2 >= c2 + e2) && (a2 = ((a2 - e2 / 2) % c2 + c2) % c2 + e2 / 2), a2;
  }, e.prototype.relative = function(a2) {
    return a2 -= this._clones.length / 2, this.normalize(a2, true);
  }, e.prototype.maximum = function(a2) {
    var b2, c2, d2, e2 = this.settings, f = this._coordinates.length;
    if (e2.loop)
      f = this._clones.length / 2 + this._items.length - 1;
    else if (e2.autoWidth || e2.merge) {
      for (b2 = this._items.length, c2 = this._items[--b2].width(), d2 = this.$element.width(); b2-- && (c2 += this._items[b2].width() + this.settings.margin, !(c2 > d2)); )
        ;
      f = b2 + 1;
    } else
      f = e2.center ? this._items.length - 1 : this._items.length - e2.items;
    return a2 && (f -= this._clones.length / 2), Math.max(f, 0);
  }, e.prototype.minimum = function(a2) {
    return a2 ? 0 : this._clones.length / 2;
  }, e.prototype.items = function(a2) {
    return a2 === d ? this._items.slice() : (a2 = this.normalize(a2, true), this._items[a2]);
  }, e.prototype.mergers = function(a2) {
    return a2 === d ? this._mergers.slice() : (a2 = this.normalize(a2, true), this._mergers[a2]);
  }, e.prototype.clones = function(b2) {
    var c2 = this._clones.length / 2, e2 = c2 + this._items.length, f = function(a2) {
      return a2 % 2 === 0 ? e2 + a2 / 2 : c2 - (a2 + 1) / 2;
    };
    return b2 === d ? a.map(this._clones, function(a2, b3) {
      return f(b3);
    }) : a.map(this._clones, function(a2, c3) {
      return a2 === b2 ? f(c3) : null;
    });
  }, e.prototype.speed = function(a2) {
    return a2 !== d && (this._speed = a2), this._speed;
  }, e.prototype.coordinates = function(b2) {
    var c2, e2 = 1, f = b2 - 1;
    return b2 === d ? a.map(this._coordinates, a.proxy(function(a2, b3) {
      return this.coordinates(b3);
    }, this)) : (this.settings.center ? (this.settings.rtl && (e2 = -1, f = b2 + 1), c2 = this._coordinates[b2], c2 += (this.width() - c2 + (this._coordinates[f] || 0)) / 2 * e2) : c2 = this._coordinates[f] || 0, c2 = Math.ceil(c2));
  }, e.prototype.duration = function(a2, b2, c2) {
    return 0 === c2 ? 0 : Math.min(Math.max(Math.abs(b2 - a2), 1), 6) * Math.abs(c2 || this.settings.smartSpeed);
  }, e.prototype.to = function(a2, b2) {
    var c2 = this.current(), d2 = null, e2 = a2 - this.relative(c2), f = (e2 > 0) - (e2 < 0), g = this._items.length, h = this.minimum(), i = this.maximum();
    this.settings.loop ? (!this.settings.rewind && Math.abs(e2) > g / 2 && (e2 += f * -1 * g), a2 = c2 + e2, d2 = ((a2 - h) % g + g) % g + h, d2 !== a2 && d2 - e2 <= i && d2 - e2 > 0 && (c2 = d2 - e2, a2 = d2, this.reset(c2))) : this.settings.rewind ? (i += 1, a2 = (a2 % i + i) % i) : a2 = Math.max(h, Math.min(i, a2)), this.speed(this.duration(c2, a2, b2)), this.current(a2), this.$element.is(":visible") && this.update();
  }, e.prototype.next = function(a2) {
    a2 = a2 || false, this.to(this.relative(this.current()) + 1, a2);
  }, e.prototype.prev = function(a2) {
    a2 = a2 || false, this.to(this.relative(this.current()) - 1, a2);
  }, e.prototype.onTransitionEnd = function(a2) {
    if (a2 !== d && (a2.stopPropagation(), (a2.target || a2.srcElement || a2.originalTarget) !== this.$stage.get(0)))
      return false;
    this.leave("animating"), this.trigger("translated");
  }, e.prototype.viewport = function() {
    var d2;
    return this.options.responsiveBaseElement !== b ? d2 = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d2 = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d2 = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d2;
  }, e.prototype.replace = function(b2) {
    this.$stage.empty(), this._items = [], b2 && (b2 = b2 instanceof jQuery ? b2 : a(b2)), this.settings.nestedItemSelector && (b2 = b2.find("." + this.settings.nestedItemSelector)), b2.filter(function() {
      return 1 === this.nodeType;
    }).each(a.proxy(function(a2, b3) {
      b3 = this.prepare(b3), this.$stage.append(b3), this._items.push(b3), this._mergers.push(1 * b3.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
    }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items");
  }, e.prototype.add = function(b2, c2) {
    var e2 = this.relative(this._current);
    c2 = c2 === d ? this._items.length : this.normalize(c2, true), b2 = b2 instanceof jQuery ? b2 : a(b2), this.trigger("add", { content: b2, position: c2 }), b2 = this.prepare(b2), 0 === this._items.length || c2 === this._items.length ? (0 === this._items.length && this.$stage.append(b2), 0 !== this._items.length && this._items[c2 - 1].after(b2), this._items.push(b2), this._mergers.push(1 * b2.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c2].before(b2), this._items.splice(c2, 0, b2), this._mergers.splice(c2, 0, 1 * b2.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e2] && this.reset(this._items[e2].index()), this.invalidate("items"), this.trigger("added", { content: b2, position: c2 });
  }, e.prototype.remove = function(a2) {
    a2 = this.normalize(a2, true), a2 !== d && (this.trigger("remove", { content: this._items[a2], position: a2 }), this._items[a2].remove(), this._items.splice(a2, 1), this._mergers.splice(a2, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: a2 }));
  }, e.prototype.preloadAutoWidthImages = function(b2) {
    b2.each(a.proxy(function(b3, c2) {
      this.enter("pre-loading"), c2 = a(c2), a(new Image()).one("load", a.proxy(function(a2) {
        c2.attr("src", a2.target.src), c2.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
      }, this)).attr("src", c2.attr("src") || c2.attr("data-src") || c2.attr("data-src-retina"));
    }, this));
  }, e.prototype.destroy = function() {
    this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== false && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
    for (var d2 in this._plugins)
      this._plugins[d2].destroy();
    this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel");
  }, e.prototype.op = function(a2, b2, c2) {
    var d2 = this.settings.rtl;
    switch (b2) {
      case "<":
        return d2 ? a2 > c2 : a2 < c2;
      case ">":
        return d2 ? a2 < c2 : a2 > c2;
      case ">=":
        return d2 ? a2 <= c2 : a2 >= c2;
      case "<=":
        return d2 ? a2 >= c2 : a2 <= c2;
    }
  }, e.prototype.on = function(a2, b2, c2, d2) {
    a2.addEventListener ? a2.addEventListener(b2, c2, d2) : a2.attachEvent && a2.attachEvent("on" + b2, c2);
  }, e.prototype.off = function(a2, b2, c2, d2) {
    a2.removeEventListener ? a2.removeEventListener(b2, c2, d2) : a2.detachEvent && a2.detachEvent("on" + b2, c2);
  }, e.prototype.trigger = function(b2, c2, d2, f, g) {
    var h = { item: { count: this._items.length, index: this.current() } }, i = a.camelCase(a.grep(["on", b2, d2], function(a2) {
      return a2;
    }).join("-").toLowerCase()), j = a.Event([b2, "owl", d2 || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, h, c2));
    return this._supress[b2] || (a.each(this._plugins, function(a2, b3) {
      b3.onTrigger && b3.onTrigger(j);
    }), this.register({ type: e.Type.Event, name: b2 }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j;
  }, e.prototype.enter = function(b2) {
    a.each([b2].concat(this._states.tags[b2] || []), a.proxy(function(a2, b3) {
      this._states.current[b3] === d && (this._states.current[b3] = 0), this._states.current[b3]++;
    }, this));
  }, e.prototype.leave = function(b2) {
    a.each([b2].concat(this._states.tags[b2] || []), a.proxy(function(a2, b3) {
      this._states.current[b3]--;
    }, this));
  }, e.prototype.register = function(b2) {
    if (b2.type === e.Type.Event) {
      if (a.event.special[b2.name] || (a.event.special[b2.name] = {}), !a.event.special[b2.name].owl) {
        var c2 = a.event.special[b2.name]._default;
        a.event.special[b2.name]._default = function(a2) {
          return !c2 || !c2.apply || a2.namespace && a2.namespace.indexOf("owl") !== -1 ? a2.namespace && a2.namespace.indexOf("owl") > -1 : c2.apply(this, arguments);
        }, a.event.special[b2.name].owl = true;
      }
    } else
      b2.type === e.Type.State && (this._states.tags[b2.name] ? this._states.tags[b2.name] = this._states.tags[b2.name].concat(b2.tags) : this._states.tags[b2.name] = b2.tags, this._states.tags[b2.name] = a.grep(this._states.tags[b2.name], a.proxy(function(c3, d2) {
        return a.inArray(c3, this._states.tags[b2.name]) === d2;
      }, this)));
  }, e.prototype.suppress = function(b2) {
    a.each(b2, a.proxy(function(a2, b3) {
      this._supress[b3] = true;
    }, this));
  }, e.prototype.release = function(b2) {
    a.each(b2, a.proxy(function(a2, b3) {
      delete this._supress[b3];
    }, this));
  }, e.prototype.pointer = function(a2) {
    var c2 = { x: null, y: null };
    return a2 = a2.originalEvent || a2 || b.event, a2 = a2.touches && a2.touches.length ? a2.touches[0] : a2.changedTouches && a2.changedTouches.length ? a2.changedTouches[0] : a2, a2.pageX ? (c2.x = a2.pageX, c2.y = a2.pageY) : (c2.x = a2.clientX, c2.y = a2.clientY), c2;
  }, e.prototype.isNumeric = function(a2) {
    return !isNaN(parseFloat(a2));
  }, e.prototype.difference = function(a2, b2) {
    return { x: a2.x - b2.x, y: a2.y - b2.y };
  }, a.fn.owlCarousel = function(b2) {
    var c2 = Array.prototype.slice.call(arguments, 1);
    return this.each(function() {
      var d2 = a(this), f = d2.data("owl.carousel");
      f || (f = new e(this, "object" == typeof b2 && b2), d2.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b3, c3) {
        f.register({ type: e.Type.Event, name: c3 }), f.$element.on(c3 + ".owl.carousel.core", a.proxy(function(a2) {
          a2.namespace && a2.relatedTarget !== this && (this.suppress([c3]), f[c3].apply(this, [].slice.call(arguments, 1)), this.release([c3]));
        }, f));
      })), "string" == typeof b2 && "_" !== b2.charAt(0) && f[b2].apply(f, c2);
    });
  }, a.fn.owlCarousel.Constructor = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
  var e = function(b2) {
    this._core = b2, this._interval = null, this._visible = null, this._handlers = { "initialized.owl.carousel": a.proxy(function(a2) {
      a2.namespace && this._core.settings.autoRefresh && this.watch();
    }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };
  e.Defaults = { autoRefresh: true, autoRefreshInterval: 500 }, e.prototype.watch = function() {
    this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval));
  }, e.prototype.refresh = function() {
    this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
  }, e.prototype.destroy = function() {
    var a2, c2;
    b.clearInterval(this._interval);
    for (a2 in this._handlers)
      this._core.$element.off(a2, this._handlers[a2]);
    for (c2 in Object.getOwnPropertyNames(this))
      "function" != typeof this[c2] && (this[c2] = null);
  }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
  var e = function(b2) {
    this._core = b2, this._loaded = [], this._handlers = { "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b3) {
      if (b3.namespace && this._core.settings && this._core.settings.lazyLoad && (b3.property && "position" == b3.property.name || "initialized" == b3.type))
        for (var c2 = this._core.settings, e2 = c2.center && Math.ceil(c2.items / 2) || c2.items, f = c2.center && e2 * -1 || 0, g = (b3.property && b3.property.value !== d ? b3.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function(a2, b4) {
          this.load(b4);
        }, this); f++ < e2; )
          this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++;
    }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };
  e.Defaults = { lazyLoad: false }, e.prototype.load = function(c2) {
    var d2 = this._core.$stage.children().eq(c2), e2 = d2 && d2.find(".owl-lazy");
    !e2 || a.inArray(d2.get(0), this._loaded) > -1 || (e2.each(a.proxy(function(c3, d3) {
      var e3, f = a(d3), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
      this._core.trigger("load", { element: f, url: g }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
        f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy");
      }, this)).attr("src", g) : (e3 = new Image(), e3.onload = a.proxy(function() {
        f.css({ "background-image": 'url("' + g + '")', opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy");
      }, this), e3.src = g);
    }, this)), this._loaded.push(d2.get(0)));
  }, e.prototype.destroy = function() {
    var a2, b2;
    for (a2 in this.handlers)
      this._core.$element.off(a2, this.handlers[a2]);
    for (b2 in Object.getOwnPropertyNames(this))
      "function" != typeof this[b2] && (this[b2] = null);
  }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
  var e = function(b2) {
    this._core = b2, this._handlers = { "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a2) {
      a2.namespace && this._core.settings.autoHeight && this.update();
    }, this), "changed.owl.carousel": a.proxy(function(a2) {
      a2.namespace && this._core.settings.autoHeight && "position" == a2.property.name && this.update();
    }, this), "loaded.owl.lazy": a.proxy(function(a2) {
      a2.namespace && this._core.settings.autoHeight && a2.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
    }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };
  e.Defaults = { autoHeight: false, autoHeightClass: "owl-height" }, e.prototype.update = function() {
    var b2 = this._core._current, c2 = b2 + this._core.settings.items, d2 = this._core.$stage.children().toArray().slice(b2, c2), e2 = [], f = 0;
    a.each(d2, function(b3, c3) {
      e2.push(a(c3).height());
    }), f = Math.max.apply(null, e2), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass);
  }, e.prototype.destroy = function() {
    var a2, b2;
    for (a2 in this._handlers)
      this._core.$element.off(a2, this._handlers[a2]);
    for (b2 in Object.getOwnPropertyNames(this))
      "function" != typeof this[b2] && (this[b2] = null);
  }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
  var e = function(b2) {
    this._core = b2, this._videos = {}, this._playing = null, this._handlers = { "initialized.owl.carousel": a.proxy(function(a2) {
      a2.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] });
    }, this), "resize.owl.carousel": a.proxy(function(a2) {
      a2.namespace && this._core.settings.video && this.isInFullScreen() && a2.preventDefault();
    }, this), "refreshed.owl.carousel": a.proxy(function(a2) {
      a2.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
    }, this), "changed.owl.carousel": a.proxy(function(a2) {
      a2.namespace && "position" === a2.property.name && this._playing && this.stop();
    }, this), "prepared.owl.carousel": a.proxy(function(b3) {
      if (b3.namespace) {
        var c2 = a(b3.content).find(".owl-video");
        c2.length && (c2.css("display", "none"), this.fetch(c2, a(b3.content)));
      }
    }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a2) {
      this.play(a2);
    }, this));
  };
  e.Defaults = { video: false, videoHeight: false, videoWidth: false }, e.prototype.fetch = function(a2, b2) {
    var c2 = function() {
      return a2.attr("data-vimeo-id") ? "vimeo" : a2.attr("data-vzaar-id") ? "vzaar" : "youtube";
    }(), d2 = a2.attr("data-vimeo-id") || a2.attr("data-youtube-id") || a2.attr("data-vzaar-id"), e2 = a2.attr("data-width") || this._core.settings.videoWidth, f = a2.attr("data-height") || this._core.settings.videoHeight, g = a2.attr("href");
    if (!g)
      throw new Error("Missing video URL.");
    if (d2 = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d2[3].indexOf("youtu") > -1)
      c2 = "youtube";
    else if (d2[3].indexOf("vimeo") > -1)
      c2 = "vimeo";
    else {
      if (!(d2[3].indexOf("vzaar") > -1))
        throw new Error("Video URL not supported.");
      c2 = "vzaar";
    }
    d2 = d2[6], this._videos[g] = { type: c2, id: d2, width: e2, height: f }, b2.attr("data-video", g), this.thumbnail(a2, this._videos[g]);
  }, e.prototype.thumbnail = function(b2, c2) {
    var d2, e2, f, g = c2.width && c2.height ? 'style="width:' + c2.width + "px;height:" + c2.height + 'px;"' : "", h = b2.find("img"), i = "src", j = "", k = this._core.settings, l = function(a2) {
      e2 = '<div class="owl-video-play-icon"></div>', d2 = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a2 + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a2 + ')"></div>', b2.after(d2), b2.after(e2);
    };
    if (b2.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length)
      return l(h.attr(i)), h.remove(), false;
    "youtube" === c2.type ? (f = "//img.youtube.com/vi/" + c2.id + "/hqdefault.jpg", l(f)) : "vimeo" === c2.type ? a.ajax({ type: "GET", url: "//vimeo.com/api/v2/video/" + c2.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(a2) {
      f = a2[0].thumbnail_large, l(f);
    } }) : "vzaar" === c2.type && a.ajax({ type: "GET", url: "//vzaar.com/api/videos/" + c2.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(a2) {
      f = a2.framegrab_url, l(f);
    } });
  }, e.prototype.stop = function() {
    this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video");
  }, e.prototype.play = function(b2) {
    var c2, d2 = a(b2.target), e2 = d2.closest("." + this._core.settings.itemClass), f = this._videos[e2.attr("data-video")], g = f.width || "100%", h = f.height || this._core.$stage.height();
    this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e2 = this._core.items(this._core.relative(e2.index())), this._core.reset(e2.index()), "youtube" === f.type ? c2 = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c2 = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c2 = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c2 + "</div>").insertAfter(e2.find(".owl-video")), this._playing = e2.addClass("owl-video-playing"));
  }, e.prototype.isInFullScreen = function() {
    var b2 = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
    return b2 && a(b2).parent().hasClass("owl-video-frame");
  }, e.prototype.destroy = function() {
    var a2, b2;
    this._core.$element.off("click.owl.video");
    for (a2 in this._handlers)
      this._core.$element.off(a2, this._handlers[a2]);
    for (b2 in Object.getOwnPropertyNames(this))
      "function" != typeof this[b2] && (this[b2] = null);
  }, a.fn.owlCarousel.Constructor.Plugins.Video = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
  var e = function(b2) {
    this.core = b2, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = true, this.previous = d, this.next = d, this.handlers = { "change.owl.carousel": a.proxy(function(a2) {
      a2.namespace && "position" == a2.property.name && (this.previous = this.core.current(), this.next = a2.property.value);
    }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a2) {
      a2.namespace && (this.swapping = "translated" == a2.type);
    }, this), "translate.owl.carousel": a.proxy(function(a2) {
      a2.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
    }, this) }, this.core.$element.on(this.handlers);
  };
  e.Defaults = { animateOut: false, animateIn: false }, e.prototype.swap = function() {
    if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
      this.core.speed(0);
      var b2, c2 = a.proxy(this.clear, this), d2 = this.core.$stage.children().eq(this.previous), e2 = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn, g = this.core.settings.animateOut;
      this.core.current() !== this.previous && (g && (b2 = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d2.one(a.support.animation.end, c2).css({ left: b2 + "px" }).addClass("animated owl-animated-out").addClass(g)), f && e2.one(a.support.animation.end, c2).addClass("animated owl-animated-in").addClass(f));
    }
  }, e.prototype.clear = function(b2) {
    a(b2.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
  }, e.prototype.destroy = function() {
    var a2, b2;
    for (a2 in this.handlers)
      this.core.$element.off(a2, this.handlers[a2]);
    for (b2 in Object.getOwnPropertyNames(this))
      "function" != typeof this[b2] && (this[b2] = null);
  }, a.fn.owlCarousel.Constructor.Plugins.Animate = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
  var e = function(b2) {
    this._core = b2, this._timeout = null, this._paused = false, this._handlers = { "changed.owl.carousel": a.proxy(function(a2) {
      a2.namespace && "settings" === a2.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a2.namespace && "position" === a2.property.name && this._core.settings.autoplay && this._setAutoPlayInterval();
    }, this), "initialized.owl.carousel": a.proxy(function(a2) {
      a2.namespace && this._core.settings.autoplay && this.play();
    }, this), "play.owl.autoplay": a.proxy(function(a2, b3, c2) {
      a2.namespace && this.play(b3, c2);
    }, this), "stop.owl.autoplay": a.proxy(function(a2) {
      a2.namespace && this.stop();
    }, this), "mouseover.owl.autoplay": a.proxy(function() {
      this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
    }, this), "mouseleave.owl.autoplay": a.proxy(function() {
      this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
    }, this), "touchstart.owl.core": a.proxy(function() {
      this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
    }, this), "touchend.owl.core": a.proxy(function() {
      this._core.settings.autoplayHoverPause && this.play();
    }, this) }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options);
  };
  e.Defaults = { autoplay: false, autoplayTimeout: 5e3, autoplayHoverPause: false, autoplaySpeed: false }, e.prototype.play = function(a2, b2) {
    this._paused = false, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval());
  }, e.prototype._getNextTimeout = function(d2, e2) {
    return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function() {
      this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e2 || this._core.settings.autoplaySpeed);
    }, this), d2 || this._core.settings.autoplayTimeout);
  }, e.prototype._setAutoPlayInterval = function() {
    this._timeout = this._getNextTimeout();
  }, e.prototype.stop = function() {
    this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"));
  }, e.prototype.pause = function() {
    this._core.is("rotating") && (this._paused = true);
  }, e.prototype.destroy = function() {
    var a2, b2;
    this.stop();
    for (a2 in this._handlers)
      this._core.$element.off(a2, this._handlers[a2]);
    for (b2 in Object.getOwnPropertyNames(this))
      "function" != typeof this[b2] && (this[b2] = null);
  }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
  "use strict";
  var e = function(b2) {
    this._core = b2, this._initialized = false, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": a.proxy(function(b3) {
      b3.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b3.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
    }, this), "added.owl.carousel": a.proxy(function(a2) {
      a2.namespace && this._core.settings.dotsData && this._templates.splice(a2.position, 0, this._templates.pop());
    }, this), "remove.owl.carousel": a.proxy(function(a2) {
      a2.namespace && this._core.settings.dotsData && this._templates.splice(a2.position, 1);
    }, this), "changed.owl.carousel": a.proxy(function(a2) {
      a2.namespace && "position" == a2.property.name && this.draw();
    }, this), "initialized.owl.carousel": a.proxy(function(a2) {
      a2.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = true, this._core.trigger("initialized", null, "navigation"));
    }, this), "refreshed.owl.carousel": a.proxy(function(a2) {
      a2.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
    }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers);
  };
  e.Defaults = { nav: false, navText: ["prev", "next"], navSpeed: false, navElement: "div", navContainer: false, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: true, dotsEach: false, dotsData: false, dotsSpeed: false, dotsContainer: false }, e.prototype.initialize = function() {
    var b2, c2 = this._core.settings;
    this._controls.$relative = (c2.navContainer ? a(c2.navContainer) : a("<div>").addClass(c2.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c2.navElement + ">").addClass(c2.navClass[0]).html(c2.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a2) {
      this.prev(c2.navSpeed);
    }, this)), this._controls.$next = a("<" + c2.navElement + ">").addClass(c2.navClass[1]).html(c2.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a2) {
      this.next(c2.navSpeed);
    }, this)), c2.dotsData || (this._templates = [a("<div>").addClass(c2.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c2.dotsContainer ? a(c2.dotsContainer) : a("<div>").addClass(c2.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function(b3) {
      var d2 = a(b3.target).parent().is(this._controls.$absolute) ? a(b3.target).index() : a(b3.target).parent().index();
      b3.preventDefault(), this.to(d2, c2.dotsSpeed);
    }, this));
    for (b2 in this._overrides)
      this._core[b2] = a.proxy(this[b2], this);
  }, e.prototype.destroy = function() {
    var a2, b2, c2, d2;
    for (a2 in this._handlers)
      this.$element.off(a2, this._handlers[a2]);
    for (b2 in this._controls)
      this._controls[b2].remove();
    for (d2 in this.overides)
      this._core[d2] = this._overrides[d2];
    for (c2 in Object.getOwnPropertyNames(this))
      "function" != typeof this[c2] && (this[c2] = null);
  }, e.prototype.update = function() {
    var a2, b2, c2, d2 = this._core.clones().length / 2, e2 = d2 + this._core.items().length, f = this._core.maximum(true), g = this._core.settings, h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
    if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
      for (this._pages = [], a2 = d2, b2 = 0, c2 = 0; a2 < e2; a2++) {
        if (b2 >= h || 0 === b2) {
          if (this._pages.push({ start: Math.min(f, a2 - d2), end: a2 - d2 + h - 1 }), Math.min(f, a2 - d2) === f)
            break;
          b2 = 0, ++c2;
        }
        b2 += this._core.mergers(this._core.relative(a2));
      }
  }, e.prototype.draw = function() {
    var b2, c2 = this._core.settings, d2 = this._core.items().length <= c2.items, e2 = this._core.relative(this._core.current()), f = c2.loop || c2.rewind;
    this._controls.$relative.toggleClass("disabled", !c2.nav || d2), c2.nav && (this._controls.$previous.toggleClass("disabled", !f && e2 <= this._core.minimum(true)), this._controls.$next.toggleClass("disabled", !f && e2 >= this._core.maximum(true))), this._controls.$absolute.toggleClass("disabled", !c2.dots || d2), c2.dots && (b2 = this._pages.length - this._controls.$absolute.children().length, c2.dotsData && 0 !== b2 ? this._controls.$absolute.html(this._templates.join("")) : b2 > 0 ? this._controls.$absolute.append(new Array(b2 + 1).join(this._templates[0])) : b2 < 0 && this._controls.$absolute.children().slice(b2).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
  }, e.prototype.onTrigger = function(b2) {
    var c2 = this._core.settings;
    b2.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c2 && (c2.center || c2.autoWidth || c2.dotsData ? 1 : c2.dotsEach || c2.items) };
  }, e.prototype.current = function() {
    var b2 = this._core.relative(this._core.current());
    return a.grep(this._pages, a.proxy(function(a2, c2) {
      return a2.start <= b2 && a2.end >= b2;
    }, this)).pop();
  }, e.prototype.getPosition = function(b2) {
    var c2, d2, e2 = this._core.settings;
    return "page" == e2.slideBy ? (c2 = a.inArray(this.current(), this._pages), d2 = this._pages.length, b2 ? ++c2 : --c2, c2 = this._pages[(c2 % d2 + d2) % d2].start) : (c2 = this._core.relative(this._core.current()), d2 = this._core.items().length, b2 ? c2 += e2.slideBy : c2 -= e2.slideBy), c2;
  }, e.prototype.next = function(b2) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(true), b2);
  }, e.prototype.prev = function(b2) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(false), b2);
  }, e.prototype.to = function(b2, c2, d2) {
    var e2;
    !d2 && this._pages.length ? (e2 = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b2 % e2 + e2) % e2].start, c2)) : a.proxy(this._overrides.to, this._core)(b2, c2);
  }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
  "use strict";
  var e = function(c2) {
    this._core = c2, this._hashes = {}, this.$element = this._core.$element, this._handlers = { "initialized.owl.carousel": a.proxy(function(c3) {
      c3.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
    }, this), "prepared.owl.carousel": a.proxy(function(b2) {
      if (b2.namespace) {
        var c3 = a(b2.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
        if (!c3)
          return;
        this._hashes[c3] = b2.content;
      }
    }, this), "changed.owl.carousel": a.proxy(function(c3) {
      if (c3.namespace && "position" === c3.property.name) {
        var d2 = this._core.items(this._core.relative(this._core.current())), e2 = a.map(this._hashes, function(a2, b2) {
          return a2 === d2 ? b2 : null;
        }).join();
        if (!e2 || b.location.hash.slice(1) === e2)
          return;
        b.location.hash = e2;
      }
    }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function(a2) {
      var c3 = b.location.hash.substring(1), e2 = this._core.$stage.children(), f = this._hashes[c3] && e2.index(this._hashes[c3]);
      f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), false, true);
    }, this));
  };
  e.Defaults = { URLhashListener: false }, e.prototype.destroy = function() {
    var c2, d2;
    a(b).off("hashchange.owl.navigation");
    for (c2 in this._handlers)
      this._core.$element.off(c2, this._handlers[c2]);
    for (d2 in Object.getOwnPropertyNames(this))
      "function" != typeof this[d2] && (this[d2] = null);
  }, a.fn.owlCarousel.Constructor.Plugins.Hash = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
  function e(b2, c2) {
    var e2 = false, f2 = b2.charAt(0).toUpperCase() + b2.slice(1);
    return a.each((b2 + " " + h.join(f2 + " ") + f2).split(" "), function(a2, b3) {
      if (g[b3] !== d)
        return e2 = !c2 || b3, false;
    }), e2;
  }
  function f(a2) {
    return e(a2, true);
  }
  var g = a("<support>").get(0).style, h = "Webkit Moz O ms".split(" "), i = { transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } }, animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } } }, j = { csstransforms: function() {
    return !!e("transform");
  }, csstransforms3d: function() {
    return !!e("perspective");
  }, csstransitions: function() {
    return !!e("transition");
  }, cssanimations: function() {
    return !!e("animation");
  } };
  j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d());
}(window.Zepto || window.jQuery, window, document);
//# sourceMappingURL=scripts.js.map
