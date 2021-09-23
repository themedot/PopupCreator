!(function (e) {
  "use strict";
  function t() {
    this.css({
      left: "50%",
      top: "50%",
      marginLeft: "-" + this.outerWidth() / 2 + "px",
      marginTop: "-" + this.outerHeight() / 2 + "px",
    });
  }
  function o(e, t) {
    var o;
    (t = t || e.data(T)),
      "function" == typeof t.offset &&
        (o = t.offset.call(e)) &&
        e.css({ left: o.left, top: o.top, marginLeft: "", marginTop: "" });
  }
  function n(e, n, l) {
    var i;
    e
      ? "function" == typeof e &&
        (e = (function (e) {
          return function () {
            var o = this;
            return e.call(o, function () {
              t.call(o);
            });
          };
        })(e))
      : (e = t),
      !n ||
        "function" == typeof e ||
        (l &&
          "function" != typeof l.offset &&
          l.offset.left === e.left &&
          l.offset.top === e.top) ||
        ((i = n.jquery ? {} : n),
        (i.left = e.left),
        (i.top = e.top),
        (i.marginLeft = i.marginTop = ""),
        n.jquery && n.css(i)),
      l && ((l.offset = e), n && D && n.get(0) === D.get(0) && o(n, l));
  }
  function l(e, t, o) {
    t &&
      o &&
      o.closeClass &&
      o.closeClass !== e &&
      t.find("." + o.closeClass).off("click", d),
      !t ||
        !e ||
        (o && o.closeClass === e) ||
        t
          .find("." + e)
          .off("click", d)
          .click(d),
      o && (o.closeClass = e);
  }
  function i(e, t, o, n) {
    function l(e) {
      x.css("opacity", ((1 - i.overlay.opacity) / (1 - e)) * -1 + 1);
    }
    var i,
      r = e.length ? e.eq(0) : null;
    return r && (i = r.data(T))
      ? (null == t && (t = !0),
        (o = o || i.duration),
        (b = b || x.clone(!0).appendTo(m)),
        x
          .stop(!0)
          .css({
            backgroundColor: i.overlay.fillColor,
            zIndex: i.overlay.zIndex,
          }),
        b
          .stop(!0)
          .css({ backgroundColor: i.overlay.fillColor, zIndex: i.zIndex })
          .insertAfter(r),
        t
          ? (x.css({ opacity: i.overlay.opacity, display: "block" }),
            b.css({ opacity: 0, display: "block" }).animate(
              { opacity: i.overlay.opacity },
              {
                duration: o,
                step: l,
                complete: function () {
                  x.css("display", "none"), n && n();
                },
              }
            ))
          : (x.css({ opacity: 0, display: "block" }),
            b.css({ opacity: i.overlay.opacity, display: "block" }).animate(
              { opacity: 0 },
              {
                duration: o,
                step: l,
                complete: function () {
                  b.css("display", "none"), n && n();
                },
              }
            )),
        e)
      : s;
  }
  function r(e) {
    return k && y.scrollLeft(k.left).scrollTop(k.top), e.preventDefault(), !1;
  }
  function c(e, t, o) {
    !t || (o && o.zIndex === e) || t.css("zIndex", e), o && (o.zIndex = e);
  }
  function a(t, o, i) {
    function r(e, t, o) {
      var i = e.data(T) || f(e).data(T);
      if (!O.hasOwnProperty(t)) return s;
      if (3 === arguments.length)
        switch (t) {
          case "offset":
            n(o, e, i);
            break;
          case "zIndex":
            c(o, e, i);
            break;
          case "closeClass":
            l(o, e, i);
            break;
          default:
            i[t] = o;
        }
      return i[t];
    }
    return 2 === arguments.length && "string" == typeof o
      ? t.length
        ? r(t.eq(0), o)
        : void 0
      : t.each(
          "string" == typeof o
            ? function () {
                r(e(this), o, i);
              }
            : function () {
                var t = e(this);
                e.each(o, function (e, o) {
                  r(t, e, o);
                });
              }
        );
  }
  var s,
    f,
    u,
    d,
    p,
    v,
    g,
    h,
    y,
    m,
    x,
    b,
    C,
    z,
    I,
    k,
    w,
    T = "plainModal",
    q = T.toLowerCase(),
    E = q + "open",
    j = q + "close",
    L = q + "beforeopen",
    A = q + "beforeclose",
    O = {
      duration: 200,
      effect: { open: e.fn.fadeIn, close: e.fn.fadeOut },
      overlay: { opacity: 0.6, zIndex: 9e3 },
      fixOverlay: !1,
      offset: void 0,
      zIndex: 0,
      closeClass: q + "-close",
      force: !1,
      child: void 0,
    },
    D = null;
  (f = function (t, i) {
    var r = e.extend(!0, {}, O, i);
    return (
      (r.overlay.fillColor = r.overlay.fillColor || r.overlay.color || "#888"),
      (r.zIndex = r.zIndex || r.overlay.zIndex + 1),
      n(r.offset, void 0, r),
      y ||
        ((y = e(window).resize(function () {
          g && g.stop(!0, !0),
            x.stop(!0, !0),
            b && b.stop(!0, !0),
            D && o(D),
            w && o(w.parent);
        })),
        (x = e('<div class="' + q + '-overlay" />')
          .css({
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
            height: "150%",
            display: "none",
          })
          .appendTo((m = e("body")))
          .click(d)
          .on("touchmove", function () {
            return !1;
          })),
        e(document)
          .focusin(function (t) {
            D &&
              !D.has(t.target).length &&
              (z ? z.focus() : e(document.activeElement).blur());
          })
          .keydown(function (e) {
            return D && 27 === e.keyCode ? d(e) : null;
          })),
      t.each(function () {
        var t = e(this),
          o = { position: "fixed", display: "none", zIndex: r.zIndex };
        n(r.offset, o),
          l(r.closeClass, t),
          e.each(
            [
              ["open", E],
              ["close", j],
              ["beforeopen", L],
              ["beforeclose", A],
            ],
            function (e, o) {
              var n = o[0],
                l = o[1];
              "function" == typeof r[n] && t.off(l, r[n]).on(l, r[n]);
            }
          ),
          t
            .css(o)
            .data(T, e.extend(!0, {}, r))
            .appendTo(m)
            .on("touchmove", function () {
              return !1;
            });
      })
    );
  }),
    (u = function (t, n, l) {
      function c() {
        var t;
        R.find("a,input,select,textarea,button,object,area,img,map").each(
          function () {
            var t = e(this);
            return t.focus().get(0) === document.activeElement
              ? ((z = t), !1)
              : !0;
          }
        ),
          q && w.jqActive && w.jqActive.length && w.jqActive.focus(),
          (g = null),
          (D = R),
          (p = !1),
          (t = e.Event(E)),
          q ? ((t.from = w.child), (w = null)) : j && (t.isChild = !0),
          R.trigger(t);
      }
      function a(e) {
        var t = e.data(T);
        return t.child && t.child.index(R) > -1;
      }
      var s,
        u,
        b,
        q,
        j,
        A,
        O,
        B,
        H,
        P,
        R = t.length ? t.eq(0) : void 0;
      if (R) {
        if (
          ((n || !(s = R.data(T))) && (s = f(R, n).data(T)),
          v ||
            w ||
            !g ||
            (h && g.get(0) === R.get(0)) ||
            !s.force ||
            (g.stop(!0, !0), x.stop(!0, !0)),
          p && !l)
        )
          return t;
        if (
          !v &&
          !w &&
          D &&
          D.get(0) !== R.get(0) &&
          (s.force
            ? (O = !0)
            : a(D) &&
              ((w = {
                parent: D,
                child: R.insertAfter(D),
                jqActive: e(document.activeElement).blur(),
              }),
              (O = !0)),
          O)
        )
          return (v = R), d(D), t;
        null === D &&
          ((p = !0),
          w &&
            ((q = R.get(0) === w.parent.get(0)),
            (j = R.get(0) === w.child.get(0))),
          (b = !v && !w),
          (u = e.Event(L, { cancelable: b })),
          q ? (u.from = w.child) : j && (u.isChild = !0),
          R.trigger(u),
          b && u.isDefaultPrevented()
            ? (p = !1)
            : ((A = !v && !w && !s.fixOverlay),
              A &&
                (I ||
                  ((B = m.get(0).style),
                  (I = { overflow: B.overflow }),
                  (H = m.prop("clientWidth")),
                  (P = m.prop("clientHeight")),
                  m.css("overflow", "hidden"),
                  (H -= m.prop("clientWidth")),
                  (P -= m.prop("clientHeight")),
                  (I.marginRight = B.marginRight),
                  (I.marginBottom = B.marginBottom),
                  0 > H && m.css("marginRight", "+=" + -H),
                  0 > P && m.css("marginBottom", "+=" + -P)),
                (C = e(document.activeElement).blur()),
                k ||
                  ((k = { left: y.scrollLeft(), top: y.scrollTop() }),
                  y.scroll(r))),
              (z = null),
              o(R, s),
              window.setTimeout(function () {
                q
                  ? c()
                  : ((h = !0),
                    s.effect.open.call((g = R), s.duration, c),
                    j && i(w.parent, !0, s.duration));
              }, 0),
              A &&
                x
                  .css({
                    backgroundColor: s.overlay.fillColor,
                    zIndex: s.overlay.zIndex,
                  })
                  .fadeTo(s.duration, s.overlay.opacity),
              (D = 0)));
      }
      return t;
    }),
    (d = function (t) {
      function o() {
        var o;
        d &&
          (I && (m.css(I), (I = null)),
          C && C.length && C.focus(),
          k &&
            (y.off("scroll", r).scrollLeft(k.left).scrollTop(k.top),
            (k = null))),
          (g = null),
          (D = null),
          v || f || (p = !1),
          (o = e.Event(j)),
          z ? (o.from = t) : v && (o.from = v),
          f && (o.isChild = !0),
          n.trigger(o),
          v ? (u(v, null, !0), (v = null)) : f && u(w.parent, null, !0);
      }
      var n,
        l,
        c,
        a,
        s,
        f,
        d,
        b,
        z = t instanceof e.Event;
      return (
        !p &&
          D &&
          ((n = z || t.index(D) > -1 ? D : null),
          n &&
            ((p = !0),
            w &&
              ((s = n.get(0) === w.parent.get(0)),
              (f = n.get(0) === w.child.get(0))),
            (a = !0),
            (c = e.Event(A, { cancelable: a })),
            z ? (c.from = t) : v && (c.from = v),
            f && (c.isChild = !0),
            n.trigger(c),
            a && c.isDefaultPrevented()
              ? ((p = !1), (v = null), s && (w = null))
              : ((l = n.data(T)),
                (d = !v && !w && !l.fixOverlay),
                (b = v ? 0 : l.duration),
                window.setTimeout(function () {
                  s
                    ? o()
                    : ((h = !1),
                      l.effect.close.call((g = n), b, o),
                      f && i(w.parent, !1, l.duration));
                }, 0),
                d && x.fadeOut(b),
                (D = 0)))),
        z ? (t.preventDefault(), !1) : t
      );
    }),
    (e.fn[T] = function (e, t, o, n) {
      return "open" === e
        ? u(this, t)
        : "close" === e
        ? d(this)
        : "blur" === e
        ? i(this, t, o, n)
        : "option" === e
        ? arguments.length <= 2
          ? a(this, t)
          : a(this, t, o)
        : f(this, e);
    });
})(jQuery);
