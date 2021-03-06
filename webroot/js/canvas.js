/*
 CanvasJS HTML5 & JavaScript Charts - v1.9.0 Beta 1 - http://canvasjs.com/ 
 Copyright 2013 fenopix
*/
(function() {
    function S(a, c) {
        a.prototype = Ia(c.prototype);
        a.prototype.constructor = a;
        a.base = c.prototype
    }

    function Ia(a) {
        function c() {}
        c.prototype = a;
        return new c
    }

    function za(a, c, b) {
        "millisecond" === b ? a.setMilliseconds(a.getMilliseconds() + 1 * c) : "second" === b ? a.setSeconds(a.getSeconds() + 1 * c) : "minute" === b ? a.setMinutes(a.getMinutes() + 1 * c) : "hour" === b ? a.setHours(a.getHours() + 1 * c) : "day" === b ? a.setDate(a.getDate() + 1 * c) : "week" === b ? a.setDate(a.getDate() + 7 * c) : "month" === b ? a.setMonth(a.getMonth() + 1 * c) : "year" === b && a.setFullYear(a.getFullYear() +
            1 * c);
        return a
    }

    function P(a, c) {
        var b = !1;
        0 > a && (b = !0, a *= -1);
        a = "" + a;
        for (c = c ? c : 1; a.length < c;) a = "0" + a;
        return b ? "-" + a : a
    }

    function ea(a) {
        if (!a) return a;
        a = a.replace(/^\s\s*/, "");
        for (var c = /\s/, b = a.length; c.test(a.charAt(--b)););
        return a.slice(0, b + 1)
    }

    function Ja(a) {
        a.roundRect = function(a, b, d, e, f, g, h, p) {
            h && (this.fillStyle = h);
            p && (this.strokeStyle = p);
            "undefined" === typeof f && (f = 5);
            this.lineWidth = g;
            this.beginPath();
            this.moveTo(a + f, b);
            this.lineTo(a + d - f, b);
            this.quadraticCurveTo(a + d, b, a + d, b + f);
            this.lineTo(a + d, b + e - f);
            this.quadraticCurveTo(a + d, b + e, a + d - f, b + e);
            this.lineTo(a + f, b + e);
            this.quadraticCurveTo(a, b + e, a, b + e - f);
            this.lineTo(a, b + f);
            this.quadraticCurveTo(a, b, a + f, b);
            this.closePath();
            h && this.fill();
            p && 0 < g && this.stroke()
        }
    }

    function sa(a, c) {
        return a - c
    }

    function Aa(a, c) {
        return a.x - c.x
    }

    function C(a) {
        var c = ((a & 16711680) >> 16).toString(16),
            b = ((a & 65280) >> 8).toString(16);
        a = ((a & 255) >> 0).toString(16);
        c = 2 > c.length ? "0" + c : c;
        b = 2 > b.length ? "0" + b : b;
        a = 2 > a.length ? "0" + a : a;
        return "#" + c + b + a
    }

    function Ka(a, c) {
        var b = this.length >>> 0,
            d = Number(c) ||
            0,
            d = 0 > d ? Math.ceil(d) : Math.floor(d);
        for (0 > d && (d += b); d < b; d++)
            if (d in this && this[d] === a) return d;
        return -1
    }

    function x(a) {
        return null === a || "undefined" === typeof a
    }

    function Ba(a, c, b) {
        b = b || "normal";
        var d = a + "_" + c + "_" + b,
            e = Ca[d];
        if (isNaN(e)) {
            try {
                a = "position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:" + a + "; font-size:" + c + "px; font-weight:" + b + ";";
                if (!X) {
                    var f = document.body;
                    X = document.createElement("span");
                    X.innerHTML = "";
                    var g = document.createTextNode("Mpgyi");
                    X.appendChild(g);
                    f.appendChild(X)
                }
                X.style.display = "";
                X.setAttribute("style", a);
                e = Math.round(X.offsetHeight);
                X.style.display = "none"
            } catch (h) {
                e = Math.ceil(1.1 * c)
            }
            e = Math.max(e, c);
            Ca[d] = e
        }
        return e
    }

    function D(a, c) {
        var b = [];
        if (b = {
                solid: [],
                shortDash: [3, 1],
                shortDot: [1, 1],
                shortDashDot: [3, 1, 1, 1],
                shortDashDotDot: [3, 1, 1, 1, 1, 1],
                dot: [1, 2],
                dash: [4, 2],
                dashDot: [4, 2, 1, 2],
                longDash: [8, 2],
                longDashDot: [8, 2, 1, 2],
                longDashDotDot: [8, 2, 1, 2, 1, 2]
            }[a || "solid"])
            for (var d = 0; d < b.length; d++) b[d] *= c;
        else b = [];
        return b
    }

    function H(a,
        c, b, d) {
        if (a.addEventListener) a.addEventListener(c, b, d || !1);
        else if (a.attachEvent) a.attachEvent("on" + c, function(d) {
            d = d || window.event;
            d.preventDefault = d.preventDefault || function() {
                d.returnValue = !1
            };
            d.stopPropagation = d.stopPropagation || function() {
                d.cancelBubble = !0
            };
            b.call(a, d)
        });
        else return !1
    }

    function Da(a, c, b) {
        a *= N;
        c *= N;
        a = b.getImageData(a, c, 2, 2).data;
        c = !0;
        for (b = 0; 4 > b; b++)
            if (a[b] !== a[b + 4] | a[b] !== a[b + 8] | a[b] !== a[b + 12]) {
                c = !1;
                break
            }
        return c ? a[0] << 16 | a[1] << 8 | a[2] : 0
    }

    function Q(a, c, b) {
        return a in c ? c[a] : b[a]
    }

    function ja(a, c, b) {
        if (t && Ea) {
            var d = a.getContext("2d");
            ka = d.webkitBackingStorePixelRatio || d.mozBackingStorePixelRatio || d.msBackingStorePixelRatio || d.oBackingStorePixelRatio || d.backingStorePixelRatio || 1;
            N = ta / ka;
            a.width = c * N;
            a.height = b * N;
            ta !== ka && (a.style.width = c + "px", a.style.height = b + "px", d.scale(N, N))
        } else a.width = c, a.height = b
    }

    function aa(a, c) {
        var b = document.createElement("canvas");
        b.setAttribute("class", "canvasjs-chart-canvas");
        ja(b, a, c);
        t || "undefined" === typeof G_vmlCanvasManager || G_vmlCanvasManager.initElement(b);
        return b
    }

    function Fa(a, c, b) {
        if (a && c && b) {
            b = b + "." + c;
            var d = "image/" + c;
            a = a.toDataURL(d);
            var e = !1,
                f = document.createElement("a");
            f.download = b;
            f.href = a;
            f.target = "_blank";
            if ("undefined" !== typeof Blob && new Blob) {
                for (var g = a.replace(/^data:[a-z/]*;base64,/, ""), g = atob(g), h = new ArrayBuffer(g.length), h = new Uint8Array(h), p = 0; p < g.length; p++) h[p] = g.charCodeAt(p);
                c = new Blob([h.buffer], {
                    type: "image/" + c
                });
                try {
                    window.navigator.msSaveBlob(c, b), e = !0
                } catch (k) {
                    f.dataset.downloadurl = [d, f.download, f.href].join(":"), f.href =
                        window.URL.createObjectURL(c)
                }
            }
            if (!e) try {
                event = document.createEvent("MouseEvents"), event.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), f.dispatchEvent ? f.dispatchEvent(event) : f.fireEvent && f.fireEvent("onclick")
            } catch (n) {
                c = window.open(), c.document.write("<img src='" + a + "'></img><div>Please right click on the image and save it to your device</div>"), c.document.close()
            }
        }
    }

    function T(a, c, b) {
        c.getAttribute("state") !== b && (c.setAttribute("state", b), c.setAttribute("type", "button"), c.style.position =
            "relative", c.style.margin = "0px 0px 0px 0px", c.style.padding = "3px 4px 0px 4px", c.style.cssFloat = "left", c.setAttribute("title", a._cultureInfo[b + "Text"]), c.innerHTML = "<img style='height:16px;' src='" + La[b].image + "' alt='" + a._cultureInfo[b + "Text"] + "' />")
    }

    function la() {
        for (var a = null, c = 0; c < arguments.length; c++) a = arguments[c], a.style && (a.style.display = "inline")
    }

    function V() {
        for (var a = null, c = 0; c < arguments.length; c++)(a = arguments[c]) && a.style && (a.style.display = "none")
    }

    function K(a, c, b, d) {
        this._defaultsKey =
            a;
        this.parent = d;
        this._eventListeners = [];
        d = {};
        b && (ca[b] && ca[b][a]) && (d = ca[b][a]);
        this._options = c ? c : {};
        this.setOptions(this._options, d)
    }

    function z(a, c, b) {
        this._publicChartReference = b;
        c = c || {};
        z.base.constructor.call(this, "Chart", c, c.theme ? c.theme : "theme1");
        var d = this;
        this._containerId = a;
        this._objectsInitialized = !1;
        this.overlaidCanvasCtx = this.ctx = null;
        this._indexLabels = [];
        this._panTimerId = 0;
        this._lastTouchEventType = "";
        this._lastTouchData = null;
        this.isAnimating = !1;
        this.renderCount = 0;
        this.panEnabled = this.disableToolTip =
            this.animatedRender = !1;
        this._defaultCursor = "default";
        this.plotArea = {
            canvas: null,
            ctx: null,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            width: 0,
            height: 0
        };
        this._dataInRenderedOrder = [];
        (this._container = "string" === typeof this._containerId ? document.getElementById(this._containerId) : this._containerId) ? (this._container.innerHTML = "", c = a = 0, a = this._options.width ? this.width : 0 < this._container.clientWidth ? this._container.clientWidth : this.width, c = this._options.height ? this.height : 0 < this._container.clientHeight ? this._container.clientHeight :
            this.height, this.width = a, this.height = c, this.x1 = this.y1 = 0, this.x2 = this.width, this.y2 = this.height, this._selectedColorSet = "undefined" !== typeof ba[this.colorSet] ? ba[this.colorSet] : ba.colorSet1, this._canvasJSContainer = document.createElement("div"), this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container"), this._canvasJSContainer.style.position = "relative", this._canvasJSContainer.style.textAlign = "left", this._canvasJSContainer.style.cursor = "auto", t || (this._canvasJSContainer.style.height = "0px"),
            this._container.appendChild(this._canvasJSContainer), this.canvas = aa(a, c), this.canvas.style.position = "absolute", this.canvas.getContext && (this._canvasJSContainer.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", Ja(this.ctx), t ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = aa(a, c), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas), this.plotArea.ctx =
                    this.plotArea.canvas.getContext("2d")), this.overlaidCanvas = aa(a, c), this.overlaidCanvas.style.position = "absolute", this._canvasJSContainer.appendChild(this.overlaidCanvas), this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline = "top", this._eventManager = new fa(this), H(window, "resize", function() {
                    d._updateSize() && d.render()
                }), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"), this._toolBar.style.cssText = "position: absolute; right: 1px; top: 1px;",
                this._canvasJSContainer.appendChild(this._toolBar), this.bounds = {
                    x1: 0,
                    y1: 0,
                    x2: this.width,
                    y2: this.height
                }, H(this.overlaidCanvas, "click", function(a) {
                    d._mouseEventHandler(a)
                }), H(this.overlaidCanvas, "mousemove", function(a) {
                    d._mouseEventHandler(a)
                }), H(this.overlaidCanvas, "mouseup", function(a) {
                    d._mouseEventHandler(a)
                }), H(this.overlaidCanvas, "mousedown", function(a) {
                    d._mouseEventHandler(a);
                    V(d._dropdownMenu)
                }), H(this.overlaidCanvas, "mouseout", function(a) {
                    d._mouseEventHandler(a)
                }), H(this.overlaidCanvas, window.navigator.msPointerEnabled ?
                    "MSPointerDown" : "touchstart",
                    function(a) {
                        d._touchEventHandler(a)
                    }), H(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(a) {
                    d._touchEventHandler(a)
                }), H(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function(a) {
                    d._touchEventHandler(a)
                }), H(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(a) {
                    d._touchEventHandler(a)
                }), this._creditLink || (this._creditLink = document.createElement("a"), this._creditLink.setAttribute("class",
                    "canvasjs-chart-credit"), this._creditLink.setAttribute("style", "outline:none;margin:0px;position:absolute;right:3px;top:" + (this.height - 14) + "px;color:dimgrey;text-decoration:none;font-size:10px;font-family:Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"), this._creditLink.setAttribute("tabIndex", -1), this._creditLink.setAttribute("target", "_blank")), this._toolTip = new U(this, this._options.toolTip, this.theme), this.axisY2 = this.axisY = this.axisX = this.data = null, this.sessionVariables = {
                    axisX: {},
                    axisY: {},
                    axisY2: {}
                })) : window.console && window.console.log('CanvasJS Error: Chart Container with id "' + this._containerId + '" was not found')
    }

    function ma(a, c) {
        for (var b = [], d, e = 0; e < a.length; e++)
            if (0 == e) b.push(a[0]);
            else {
                var f, g, h;
                h = e - 1;
                f = 0 === h ? 0 : h - 1;
                g = h === a.length - 1 ? h : h + 1;
                d = Math.abs((a[g].x - a[f].x) / (0 === a[g].x - a[h].x ? 0.01 : a[g].x - a[h].x)) * (c - 1) / 2 + 1;
                var p = (a[g].x - a[f].x) / d;
                d = (a[g].y - a[f].y) / d;
                b[b.length] = a[h].x > a[f].x && 0 < p || a[h].x < a[f].x && 0 > p ? {
                    x: a[h].x + p / 3,
                    y: a[h].y + d / 3
                } : {
                    x: a[h].x,
                    y: a[h].y + d / 9
                };
                h = e;
                f = 0 === h ? 0 : h - 1;
                g = h === a.length - 1 ? h : h + 1;
                d = Math.abs((a[g].x - a[f].x) / (0 === a[h].x - a[f].x ? 0.01 : a[h].x - a[f].x)) * (c - 1) / 2 + 1;
                p = (a[g].x - a[f].x) / d;
                d = (a[g].y - a[f].y) / d;
                b[b.length] = a[h].x > a[f].x && 0 < p || a[h].x < a[f].x && 0 > p ? {
                    x: a[h].x - p / 3,
                    y: a[h].y - d / 3
                } : {
                    x: a[h].x,
                    y: a[h].y - d / 9
                };
                b[b.length] = a[e]
            }
        return b
    }

    function Ga(a, c) {
        if (null === a || "undefined" === typeof a) return c;
        var b = parseFloat(a.toString()) * (0 <= a.toString().indexOf("%") ? c / 100 : 1);
        return !isNaN(b) && b <= c && 0 <= b ? b : c
    }

    function da(a, c, b, d, e) {
        "undefined" === typeof e && (e = 0);
        this._padding = e;
        this._x1 = a;
        this._y1 = c;
        this._x2 = b;
        this._y2 = d;
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding
    }

    function L(a, c) {
        L.base.constructor.call(this, "TextBlock", c);
        this.ctx = a;
        this._isDirty = !0;
        this._wrappedText = null
    }

    function ga(a, c) {
        ga.base.constructor.call(this, "Title", c, a.theme);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx;
        if (x(this._options.margin) && a._options.subtitles)
            for (var b = a._options.subtitles, d = 0; d < b.length; d++)
                if ((x(b[d].horizontalAlign) && "center" ===
                        this.horizontalAlign || b[d].horizontalAlign === this.horizontalAlign) && (x(b[d].verticalAlign) && "top" === this.verticalAlign || b[d].verticalAlign === this.verticalAlign) && !b[d].dockInsidePlotArea === !this.dockInsidePlotArea) {
                    this.margin = 0;
                    break
                }
                "undefined" === typeof this._options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        }
    }

    function na(a, c) {
        na.base.constructor.call(this, "Subtitle", c, a.theme);
        this.chart = a;
        this.canvas =
            a.canvas;
        this.ctx = this.chart.ctx;
        "undefined" === typeof this._options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        }
    }

    function oa(a, c, b) {
        oa.base.constructor.call(this, "Legend", c, b);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx;
        this.ghostCtx = this.chart._eventManager.ghostCtx;
        this.items = [];
        this.height = this.width = 0;
        this.orientation = null;
        this.dataSeries = [];
        this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        };
        "undefined" === typeof this._options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.lineHeight = Ba(this.fontFamily, this.fontSize, this.fontWeight);
        this.horizontalSpacing = this.fontSize
    }

    function ua(a, c) {
        ua.base.constructor.call(this, c);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx
    }

    function W(a, c, b, d, e) {
        W.base.constructor.call(this, "DataSeries", c, b);
        this.chart = a;
        this.canvas = a.canvas;
        this._ctx = a.canvas.ctx;
        this.index = d;
        this.noDataPointsInPlotArea = 0;
        this.id = e;
        this.chart._eventManager.objectMap[e] = {
            id: e,
            objectType: "dataSeries",
            dataSeriesIndex: d
        };
        this.dataPointIds = [];
        this.plotUnit = [];
        this.axisY = this.axisX = null;
        null === this.fillOpacity && (this.type.match(/area/i) ? this.fillOpacity = 0.7 : this.fillOpacity = 1);
        this.axisPlacement = this.getDefaultAxisPlacement();
        "undefined" === typeof this._options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize))
    }

    function B(a, c, b, d) {
        B.base.constructor.call(this, "Axis", c, a.theme);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = a.ctx;
        this.intervalStartPosition = this.maxHeight = this.maxWidth = 0;
        this.labels = [];
        this._stripLineLabels = this._ticks = this._labels = null;
        this.dataInfo = {
            min: Infinity,
            max: -Infinity,
            viewPortMin: Infinity,
            viewPortMax: -Infinity,
            minDiff: Infinity
        };
        "axisX" === b ? (this.sessionVariables = this.chart.sessionVariables[b], this._options.interval || (this.intervalType = null), "theme2" === this.chart.theme && x(this._options.lineThickness) && (this.lineThickness = 2)) : this.sessionVariables = "left" === d || "top" === d ? this.chart.sessionVariables.axisY :
            this.chart.sessionVariables.axisY2;
        "undefined" === typeof this._options.titleFontSize && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
        "undefined" === typeof this._options.labelFontSize && (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize));
        this.type = b;
        "axisX" !== b || c && "undefined" !== typeof c.gridThickness || (this.gridThickness = 0);
        this._position = d;
        this.lineCoordinates = {
            x1: null,
            y1: null,
            x2: null,
            y2: null,
            width: null
        };
        this.labelAngle = (this.labelAngle % 360 + 360) % 360;
        90 < this.labelAngle &&
            270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360);
        if (this._options.stripLines && 0 < this._options.stripLines.length)
            for (this.stripLines = [], c = 0; c < this._options.stripLines.length; c++) this.stripLines.push(new pa(this.chart, this._options.stripLines[c], a.theme, ++this.chart._eventManager.lastObjectId, this));
        this._titleTextBlock = null;
        this.hasOptionChanged("viewportMinimum") && null === this.viewportMinimum && (this._options.viewportMinimum = void 0, this.sessionVariables.viewportMinimum =
            null);
        this.hasOptionChanged("viewportMinimum") || isNaN(this.sessionVariables.newViewportMinimum) || null === this.sessionVariables.newViewportMinimum ? this.sessionVariables.newViewportMinimum = null : this.viewportMinimum = this.sessionVariables.newViewportMinimum;
        this.hasOptionChanged("viewportMaximum") && null === this.viewportMaximum && (this._options.viewportMaximum = void 0, this.sessionVariables.viewportMaximum = null);
        this.hasOptionChanged("viewportMaximum") || isNaN(this.sessionVariables.newViewportMaximum) || null ===
            this.sessionVariables.newViewportMaximum ? this.sessionVariables.newViewportMaximum = null : this.viewportMaximum = this.sessionVariables.newViewportMaximum;
        null !== this.minimum && null !== this.viewportMinimum && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
        null !== this.maximum && null !== this.viewportMaximum && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
        this.trackChanges("viewportMinimum");
        this.trackChanges("viewportMaximum")
    }

    function pa(a, c, b, d, e) {
        pa.base.constructor.call(this,
            "StripLine", c, b, e);
        this.id = d;
        this.chart = a;
        this.ctx = this.chart.ctx;
        this.label = this.label;
        this._thicknessType = "pixel";
        null !== this.startValue && null !== this.endValue && (this.value = e.logarithmic ? Math.sqrt((this.startValue.getTime ? this.startValue.getTime() : this.startValue) * (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) : ((this.startValue.getTime ? this.startValue.getTime() : this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2, this.thickness = e.logarithmic ? Math.log(this.endValue /
            this.startValue) / Math.log(e.logarithmBase) : Math.max(this.endValue - this.startValue), this._thicknessType = "value")
    }

    function U(a, c, b) {
        U.base.constructor.call(this, "ToolTip", c, b);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx;
        this.currentDataPointIndex = this.currentSeriesIndex = -1;
        this._timerId = 0;
        this._prevY = this._prevX = NaN;
        this._initialize()
    }

    function fa(a) {
        this.chart = a;
        this.lastObjectId = 0;
        this.objectMap = [];
        this.rectangularRegionEventSubscriptions = [];
        this.previousDataPointEventObject = null;
        this.ghostCanvas =
            aa(this.chart.width, this.chart.height);
        this.ghostCtx = this.ghostCanvas.getContext("2d");
        this.mouseoveredObjectMaps = []
    }

    function ha(a) {
        var c;
        a && ia[a] && (c = ia[a]);
        ha.base.constructor.call(this, "CultureInfo", c)
    }

    function va(a) {
        this.chart = a;
        this.ctx = this.chart.plotArea.ctx;
        this.animations = [];
        this.animationRequestId = null
    }
    var t = !!document.createElement("canvas").getContext,
        qa = {
            Chart: {
                width: 500,
                height: 400,
                zoomEnabled: !1,
                zoomType: "x",
                backgroundColor: "white",
                theme: "theme1",
                animationEnabled: !1,
                animationDuration: 1200,
                dataPointWidth: null,
                dataPointMinWidth: null,
                dataPointMaxWidth: null,
                colorSet: "colorSet1",
                culture: "en",
                creditText: "",
                interactivityEnabled: !0,
                exportEnabled: !1,
                exportFileName: "Chart",
                rangeChanging: null,
                rangeChanged: null
            },
            Title: {
                padding: 0,
                text: null,
                verticalAlign: "top",
                horizontalAlign: "center",
                fontSize: 20,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "#fff",
                cornerRadius: 0,
                backgroundColor: null,
                margin: 5,
                wrap: !0,
                maxWidth: null,
                dockInsidePlotArea: !1
            },
            Subtitle: {
                padding: 0,
                text: null,
                verticalAlign: "top",
                horizontalAlign: "center",
                fontSize: 14,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "#fff",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                margin: 2,
                wrap: !0,
                maxWidth: null,
                dockInsidePlotArea: !1
            },
            Legend: {
                name: null,
                verticalAlign: "center",
                horizontalAlign: "right",
                fontSize: 14,
                fontFamily: "calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                cursor: null,
                itemmouseover: null,
                itemmouseout: null,
                itemmousemove: null,
                itemclick: null,
                dockInsidePlotArea: !1,
                reversed: !1,
                maxWidth: null,
                maxHeight: null,
                itemMaxWidth: null,
                itemWidth: null,
                itemWrap: !0,
                itemTextFormatter: null
            },
            ToolTip: {
                enabled: !0,
                shared: !1,
                animationEnabled: !0,
                content: null,
                contentFormatter: null,
                reversed: !1,
                backgroundColor: null,
                borderColor: null,
                borderThickness: 2,
                cornerRadius: 5,
                fontSize: 14,
                fontColor: null,
                fontFamily: "Calibri, Arial, Georgia, serif;",
                fontWeight: "normal",
                fontStyle: "italic"
            },
            Axis: {
                minimum: null,
                maximum: null,
                viewportMinimum: null,
                viewportMaximum: null,
                interval: null,
                intervalType: null,
                reversed: !1,
                logarithmic: !1,
                logarithmBase: 10,
                title: null,
                titleFontColor: "black",
                titleFontSize: 20,
                titleFontFamily: "arial",
                titleFontWeight: "normal",
                titleFontStyle: "normal",
                titleWrap: !0,
                titleMaxWidth: null,
                labelAngle: 0,
                labelFontFamily: "arial",
                labelFontColor: "black",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelAutoFit: !0,
                labelWrap: !0,
                labelMaxWidth: null,
                labelFormatter: null,
                prefix: "",
                suffix: "",
                includeZero: !0,
                tickLength: 5,
                tickColor: "black",
                tickThickness: 1,
                lineColor: "black",
                lineThickness: 1,
                lineDashType: "solid",
                gridColor: "A0A0A0",
                gridThickness: 0,
                gridDashType: "solid",
                interlacedColor: null,
                valueFormatString: null,
                margin: 2,
                stripLines: []
            },
            StripLine: {
                value: null,
                startValue: null,
                endValue: null,
                color: "orange",
                opacity: null,
                thickness: 2,
                lineDashType: "solid",
                label: "",
                labelPlacement: "inside",
                labelAlign: "far",
                labelWrap: !0,
                labelMaxWidth: null,
                labelBackgroundColor: "transparent",
                labelFontFamily: "arial",
                labelFontColor: "orange",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelFormatter: null,
                showOnTop: !1
            },
            DataSeries: {
                name: null,
                dataPoints: null,
                label: "",
                bevelEnabled: !1,
                highlightEnabled: !0,
                cursor: null,
                indexLabel: "",
                indexLabelPlacement: "auto",
                indexLabelOrientation: "horizontal",
                indexLabelFontColor: "black",
                indexLabelFontSize: 12,
                indexLabelFontStyle: "normal",
                indexLabelFontFamily: "Arial",
                indexLabelFontWeight: "normal",
                indexLabelBackgroundColor: null,
                indexLabelLineColor: null,
                indexLabelLineThickness: 1,
                indexLabelLineDashType: "solid",
                indexLabelMaxWidth: null,
                indexLabelWrap: !0,
                indexLabelFormatter: null,
                lineThickness: 2,
                lineDashType: "solid",
                connectNullData: !1,
                nullDataLineDashType: "dash",
                color: null,
                lineColor: null,
                risingColor: "white",
                fillOpacity: null,
                startAngle: 0,
                radius: null,
                innerRadius: null,
                type: "column",
                xValueType: "number",
                axisYType: "primary",
                xValueFormatString: null,
                yValueFormatString: null,
                zValueFormatString: null,
                percentFormatString: null,
                showInLegend: null,
                legendMarkerType: null,
                legendMarkerColor: null,
                legendText: null,
                legendMarkerBorderColor: null,
                legendMarkerBorderThickness: null,
                markerType: "circle",
                markerColor: null,
                markerSize: null,
                markerBorderColor: null,
                markerBorderThickness: null,
                mouseover: null,
                mouseout: null,
                mousemove: null,
                click: null,
                toolTipContent: null,
                visible: !0
            },
            TextBlock: {
                x: 0,
                y: 0,
                width: null,
                height: null,
                maxWidth: null,
                maxHeight: null,
                padding: 0,
                angle: 0,
                text: "",
                horizontalAlign: "center",
                fontSize: 12,
                fontFamily: "calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                textBaseline: "top"
            },
            CultureInfo: {
                decimalSeparator: ".",
                digitGroupSeparator: ",",
                zoomText: "Zoom",
                panText: "Pan",
                resetText: "Reset",
                menuText: "More Options",
                saveJPGText: "Save as JPEG",
                savePNGText: "Save as PNG",
                days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                months: "January February March April May June July August September October November December".split(" "),
                shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")
            }
        },
        ia = {
            en: {}
        },
        ba = {
            colorSet1: "#369EAD #C24642 #7F6084 #86B402 #A2D1CF #C8B631 #6DBCEB #52514E #4F81BC #A064A1 #F79647".split(" "),
            colorSet2: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #33558B".split(" "),
            colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")
        },
        ca = {
            theme1: {
                Chart: {
                    colorSet: "colorSet1"
                },
                Title: {
                    fontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    fontSize: 33,
                    fontColor: "#000",
                    fontWeight: "bold",
                    verticalAlign: "top",
                    margin: 5
                },
                Subtitle: {
                    fontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    fontSize: 16,
                    fontColor: "#000",
                    fontWeight: "bold",
                    verticalAlign: "top",
                    margin: 5
                },
                Axis: {
                    titleFontSize: 26,
                    titleFontColor: "#000",
                    titleFontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    labelFontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    labelFontSize: 18,
                    labelFontColor: "grey",
                    tickColor: "#e9e9e9",
                    tickThickness: 1,
                    gridThickness: 1,
                    gridColor: "#e9e9e9",
                    lineThickness: 1,
                    lineColor: "#e9e9e9"
                },
                Legend: {
                    verticalAlign: "bottom",
                    horizontalAlign: "center",
                    fontFamily: t ? "monospace, sans-serif,arial black" : "calibri"
                },
                DataSeries: {
                    indexLabelFontColor: "grey",
                    indexLabelFontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    indexLabelFontSize: 18,
                    indexLabelLineThickness: 1
                }
            },
            theme2: {
                Chart: {
                    colorSet: "colorSet2"
                },
                Title: {
                    fontFamily: "impact, charcoal, arial black, sans-serif",
                    fontSize: 32,
                    fontColor: "#333333",
                    verticalAlign: "top",
                    margin: 5
                },
                Subtitle: {
                    fontFamily: "impact, charcoal, arial black, sans-serif",
                    fontSize: 14,
                    fontColor: "#333333",
                    verticalAlign: "top",
                    margin: 5
                },
                Axis: {
                    titleFontSize: 22,
                    titleFontColor: "rgb(98,98,98)",
                    titleFontFamily: t ? "monospace, sans-serif,arial black" : "arial",
                    titleFontWeight: "bold",
                    labelFontFamily: t ? "monospace, Courier New, Courier" : "arial",
                    labelFontSize: 16,
                    labelFontColor: "grey",
                    labelFontWeight: "bold",
                    tickColor: "grey",
                    tickThickness: 2,
                    gridThickness: 2,
                    gridColor: "grey",
                    lineColor: "grey",
                    lineThickness: 0
                },
                Legend: {
                    verticalAlign: "bottom",
                    horizontalAlign: "center",
                    fontFamily: t ? "monospace, sans-serif,arial black" : "arial"
                },
                DataSeries: {
                    indexLabelFontColor: "grey",
                    indexLabelFontFamily: t ? "Courier New, Courier, monospace" : "arial",
                    indexLabelFontWeight: "bold",
                    indexLabelFontSize: 18,
                    indexLabelLineThickness: 1
                }
            },
            theme3: {
                Chart: {
                    colorSet: "colorSet1"
                },
                Title: {
                    fontFamily: t ? "Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif" : "calibri",
                    fontSize: 32,
                    fontColor: "#3A3A3A",
                    fontWeight: "bold",
                    verticalAlign: "top",
                    margin: 5
                },
                Subtitle: {
                    fontFamily: t ? "Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif" : "calibri",
                    fontSize: 16,
                    fontColor: "#3A3A3A",
                    fontWeight: "bold",
                    verticalAlign: "top",
                    margin: 5
                },
                Axis: {
                    titleFontSize: 22,
                    titleFontColor: "rgb(98,98,98)",
                    titleFontFamily: t ? "Verdana, Geneva, Calibri, sans-serif" : "calibri",
                    labelFontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    labelFontSize: 18,
                    labelFontColor: "grey",
                    tickColor: "grey",
                    tickThickness: 2,
                    gridThickness: 2,
                    gridColor: "grey",
                    lineThickness: 2,
                    lineColor: "grey"
                },
                Legend: {
                    verticalAlign: "bottom",
                    horizontalAlign: "center",
                    fontFamily: t ? "monospace, sans-serif,arial black" : "calibri"
                },
                DataSeries: {
                    bevelEnabled: !0,
                    indexLabelFontColor: "grey",
                    indexLabelFontFamily: t ? "Candara, Optima, Calibri, Verdana, Geneva, sans-serif" : "calibri",
                    indexLabelFontSize: 18,
                    indexLabelLineColor: "lightgrey",
                    indexLabelLineThickness: 2
                }
            }
        },
        E = {
            numberDuration: 1,
            yearDuration: 314496E5,
            monthDuration: 2592E6,
            weekDuration: 6048E5,
            dayDuration: 864E5,
            hourDuration: 36E5,
            minuteDuration: 6E4,
            secondDuration: 1E3,
            millisecondDuration: 1,
            dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
        },
        Ca = {},
        X =
        null,
        wa = function() {
            var a = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,
                c = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                b = "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                d = "January February March April May June July August September October November December".split(" "),
                e = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                f = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                g = /[^-+\dA-Z]/g;
            return function(h, p, k) {
                var n = k ? k.days : c,
                    m = k ? k.months : d,
                    l = k ? k.shortDays : b,
                    q = k ? k.shortMonths : e;
                k = "";
                var r = !1;
                h = h && h.getTime ? h : h ? new Date(h) : new Date;
                if (isNaN(h)) throw SyntaxError("invalid date");
                "UTC:" === p.slice(0, 4) && (p = p.slice(4), r = !0);
                k = r ? "getUTC" : "get";
                var s = h[k + "Date"](),
                    y = h[k + "Day"](),
                    u = h[k + "Month"](),
                    v = h[k + "FullYear"](),
                    w = h[k + "Hours"](),
                    t = h[k + "Minutes"](),
                    R = h[k + "Seconds"](),
                    A = h[k + "Milliseconds"](),
                    x = r ? 0 : h.getTimezoneOffset();
                return k = p.replace(a, function(a) {
                    switch (a) {
                        case "D":
                            return s;
                        case "DD":
                            return P(s, 2);
                        case "DDD":
                            return l[y];
                        case "DDDD":
                            return n[y];
                        case "M":
                            return u + 1;
                        case "MM":
                            return P(u + 1, 2);
                        case "MMM":
                            return q[u];
                        case "MMMM":
                            return m[u];
                        case "Y":
                            return parseInt(String(v).slice(-2));
                        case "YY":
                            return P(String(v).slice(-2), 2);
                        case "YYY":
                            return P(String(v).slice(-3), 3);
                        case "YYYY":
                            return P(v, 4);
                        case "h":
                            return w % 12 || 12;
                        case "hh":
                            return P(w % 12 || 12, 2);
                        case "H":
                            return w;
                        case "HH":
                            return P(w, 2);
                        case "m":
                            return t;
                        case "mm":
                            return P(t, 2);
                        case "s":
                            return R;
                        case "ss":
                            return P(R, 2);
                        case "f":
                            return String(A).slice(0, 1);
                        case "ff":
                            return P(String(A).slice(0, 2), 2);
                        case "fff":
                            return P(String(A).slice(0, 3), 3);
                        case "t":
                            return 12 > w ? "a" : "p";
                        case "tt":
                            return 12 > w ? "am" : "pm";
                        case "T":
                            return 12 > w ? "A" : "P";
                        case "TT":
                            return 12 > w ? "AM" : "PM";
                        case "K":
                            return r ? "UTC" : (String(h).match(f) || [""]).pop().replace(g, "");
                        case "z":
                            return (0 < x ? "-" : "+") + Math.floor(Math.abs(x) / 60);
                        case "zz":
                            return (0 < x ? "-" : "+") + P(Math.floor(Math.abs(x) / 60), 2);
                        case "zzz":
                            return (0 < x ? "-" : "+") + P(Math.floor(Math.abs(x) / 60), 2) + P(Math.abs(x) %
                                60, 2);
                        default:
                            return a.slice(1, a.length - 1)
                    }
                })
            }
        }(),
        Y = function(a, c, b) {
            if (null === a) return "";
            a = Number(a);
            var d = 0 > a ? !0 : !1;
            d && (a *= -1);
            var e = b ? b.decimalSeparator : ".",
                f = b ? b.digitGroupSeparator : ",",
                g = "";
            c = String(c);
            var g = 1,
                h = b = "",
                p = -1,
                k = [],
                n = [],
                m = 0,
                l = 0,
                q = 0,
                r = !1,
                s = 0,
                h = c.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
            c = null;
            for (var y = 0; h && y < h.length; y++)
                if (c = h[y], "." === c && 0 > p) p = y;
                else {
                    if ("%" === c) g *= 100;
                    else if ("\u2030" === c) {
                        g *= 1E3;
                        continue
                    } else if ("," === c[0] && "." === c[c.length - 1]) {
                        g /= Math.pow(1E3, c.length -
                            1);
                        p = y + c.length - 1;
                        continue
                    } else "E" !== c[0] && "e" !== c[0] || "0" !== c[c.length - 1] || (r = !0);
                    0 > p ? (k.push(c), "#" === c || "0" === c ? m++ : "," === c && q++) : (n.push(c), "#" !== c && "0" !== c || l++)
                }
            r && (c = Math.floor(a), s = (0 === c ? "" : String(c)).length - m, g /= Math.pow(10, s));
            0 > p && (p = y);
            g = (a * g).toFixed(l);
            c = g.split(".");
            g = (c[0] + "").split("");
            a = (c[1] + "").split("");
            g && "0" === g[0] && g.shift();
            for (y = r = h = l = p = 0; 0 < k.length;)
                if (c = k.pop(), "#" === c || "0" === c)
                    if (p++, p === m) {
                        var u = g,
                            g = [];
                        if ("0" === c)
                            for (c = m - l - (u ? u.length : 0); 0 < c;) u.unshift("0"), c--;
                        for (; 0 <
                            u.length;) b = u.pop() + b, y++, 0 === y % r && (h === q && 0 < u.length) && (b = f + b);
                        d && (b = "-" + b)
                    } else 0 < g.length ? (b = g.pop() + b, l++, y++) : "0" === c && (b = "0" + b, l++, y++), 0 === y % r && (h === q && 0 < g.length) && (b = f + b);
            else "E" !== c[0] && "e" !== c[0] || "0" !== c[c.length - 1] || !/[eE][+-]*[0]+/.test(c) ? "," === c ? (h++, r = y, y = 0, 0 < g.length && (b = f + b)) : b = 1 < c.length && ('"' === c[0] && '"' === c[c.length - 1] || "'" === c[0] && "'" === c[c.length - 1]) ? c.slice(1, c.length - 1) + b : c + b : (c = 0 > s ? c.replace("+", "").replace("-", "") : c.replace("-", ""), b += c.replace(/[0]+/, function(a) {
                return P(s,
                    a.length)
            }));
            d = "";
            for (f = !1; 0 < n.length;) c = n.shift(), "#" === c || "0" === c ? 0 < a.length && 0 !== Number(a.join("")) ? (d += a.shift(), f = !0) : "0" === c && (d += "0", f = !0) : 1 < c.length && ('"' === c[0] && '"' === c[c.length - 1] || "'" === c[0] && "'" === c[c.length - 1]) ? d += c.slice(1, c.length - 1) : "E" !== c[0] && "e" !== c[0] || "0" !== c[c.length - 1] || !/[eE][+-]*[0]+/.test(c) ? d += c : (c = 0 > s ? c.replace("+", "").replace("-", "") : c.replace("-", ""), d += c.replace(/[0]+/, function(a) {
                return P(s, a.length)
            }));
            return b + ((f ? e : "") + d)
        },
        ra = function(a) {
            var c = 0,
                b = 0;
            a = a || window.event;
            a.offsetX || 0 === a.offsetX ? (c = a.offsetX, b = a.offsetY) : a.layerX || 0 == a.layerX ? (c = a.layerX, b = a.layerY) : (c = a.pageX - a.target.offsetLeft, b = a.pageY - a.target.offsetTop);
            return {
                x: c,
                y: b
            }
        },
        Ea = !0,
        ta = window.devicePixelRatio || 1,
        ka = 1,
        N = Ea ? ta / ka : 1,
        La = {
            reset: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAKRSURBVEiJrdY/iF1FFMfxzwnZrGISUSR/JLGIhoh/QiRNBLWxMLIWEkwbgiAoFgoW2mhlY6dgpY2IlRBRxBSKhSAKIklWJRYuMZKAhiyopAiaTY7FvRtmZ+/ed9/zHRjezLw5v/O9d86cuZGZpmURAfdn5o9DfdZNLXpjz+LziPgyIl6MiG0jPTJzZBuyDrP4BVm0P/AKbljTb4ToY/gGewYA7KyCl+1b3DUYANvwbiHw0gCAGRzBOzjTAXEOu0cC4Ch+r5x/HrpdrcZmvIDFSucMtnYCYC++6HmNDw8FKDT34ETrf639/azOr5vwRk/g5fbeuABtgC04XWk9VQLciMP4EH/3AFzErRNC7MXlQmsesSoHsGPE23hmEoBW+61K66HMXFmIMvN8myilXS36R01ub+KfYvw43ZXwYDX+AHP4BAci4pFJomfmr/ihmNofESsBImJGk7mlncrM45n5JPbhz0kAWpsv+juxaX21YIPmVJS2uNzJMS6ZNexC0d+I7fUWXLFyz2kSZlpWPvASlmqAf/FXNXf3FAF2F/1LuFifAlionB6dRuSI2IwHi6lzmXmp6xR8XY0fiIh7psAwh+3FuDkRHQVjl+a8lkXjo0kLUKH7XaV5oO86PmZ1FTzyP4K/XGl9v/zwfbW7BriiuETGCP5ch9bc9f97HF/vcFzCa5gdEPgWq+t/4v0V63oE1uF4h0DiFJ7HnSWMppDdh1dxtsPvJ2wcBNAKbsJXa0Ck5opdaBPsRNu/usba09i1KsaAVzmLt3sghrRjuK1Tf4xkegInxwy8gKf7dKMVH2QRsV5zXR/Cftyu+aKaKbbkQrsdH+PTzLzcqzkOQAVzM+7FHdiqqe2/YT4zF/t8S/sPmawyvC974vcAAAAASUVORK5CYII="
            },
            pan: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAJVSURBVFiFvZe7a1RBGMV/x2hWI4JpfKCIiSBKOoOCkID/wP4BFqIIFkE02ChIiC8QDKlSiI3YqRBsBVGwUNAUdiIEUgjiAzQIIsuKJsfizsXr5t7d+8jmwLDfzHz3nLOzc7+ZxTZlGyDgZiWOCuJ9wH2gCUyuqQFgF/AGcKJNrYkBYBj40CIet+muGQi/96kM4WS7C/Tm5VUg7whJg8BkEGkCR4BDYfodsADUgP6wErO5iCtswsuJb32hdbXy8qzL5TIdmzJinHdZoZIBZcSFkGlAKs1Z3YCketZcBtouuaQNkrblMiBpBrhme7mAgU4wMCvpcFsDkq4C54DFVRTH9h+i6vlE0r5UA5ImgCuh28jB28iIs7BIVCOeStoZD64P4uPAjUTygKSx2FsK2TIwkugfk9Qkfd/E+yMWHQCeSRqx/R3gOp3LazfaS2C4B5gHDgD7U9x3E3uAH7KNpC3AHHAwTL4FHgM9GQ8vAaPA0dB/Abxqk2/gBLA9MXba9r1k/d4LfA3JtwueBeM58ucS+edXnAW23wP10N3advEi9CXizTnyN4bPS7Zn4sH/dq3t18AY4e1YLYSy3g/csj2VnFshZPuOpOeSKHCodUINuGj7YetE6je1PV9QoNPJ9StNHKodx7nRbiWrGHBGXAi5DUiqtQwtpcWK0Jubt8CltA5MEV1IfwO7+VffPwGfia5m34CT4bXujIIX0Qna1/cGMNqV/wUJE2czxD8CQ4X5Sl7Jz7SILwCDpbjKPBRMHAd+EtX4HWV5Spdc2w8kDQGPbH8py/MXMygM69/FKz4AAAAASUVORK5CYII="
            },
            zoom: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAMqSURBVFiFvdfbj91TFMDxz57U6GUEMS1aYzyMtCSSDhWjCZMInpAI3khE/QHtgzdRkXgSCS8SES9epKLi0oRKNETjRahREq2KS1stdRujtDPtbA97n5zdn9+5zJxTK9k5v3POXmt991p7r71+IcaoGwkhTOIebMRqzOBTvIG3Y4zTXRmqSoyx5cAKbMJOHMFJnMZ8/jyFaXyMR7G6nb1aH22cP4BvcBxziG3GKfyTIR9D6BYg1KUghPBCDveFlb/24Av8iuUYw41YVsz5G7uxKcZ4aMEpwGt5NY3V/YbHsQ6rcAHOw/kYxigewr5CZw4fYGxBKcCLOFEYehXrMdRhr5yLETxVScsOLOkKAPfn1TYMPIvLFrShUlS2FDZm8XRHACzFAWl3R2xbqPMCYhmeLCAOYEMngAczbcTvuHYxzguIy/FesR9e6gSwU/OoPYHBHgHgviIKX2Flq7k34KhmcVnbi/PC8JX4MgMcxb118wZwdz5aISscqx7VRcox7MrPQ7i+btIAJrAkf9+bI9EPmZY2IAxiTSuAldLq4Y9+AcSUh78KP0tbAcwU35cXMD1JCIFUoGiehlqAz6TNB1f1C0DK+0h+nsNPrQC2a4bqGmlD9kOGcWt+Po6pVgDvSxfJaSkFd4UQBvoAsBYbCoB3a2flM7slA0R8iyt6rAFDeDPbm8eOTpVwGD9qVq7nLbIaZnmksPU1JtsCZMXNmpdRxFasWITzh6Xj3LCzra1OxcD2QjHiGVzdpfORnMqZio2PcF23ABdJF1Np4BPptlyPi6WzPYBzpJZtHe7A6xW9cnyP8TqA//SEIYRL8Bxul7rihvwgtVn78WcGGZXa9HGd5TDujDHuOePXNiHdKjWgZX/YbsxLx/ktqbjVzTlcjUSnvI5JrdlUVp6WesZZ6R1hRrpq9+EVTGS9jTjYAuKIouGpbcurEkIYxC051KNSamazsc+xK8b4S0VnEi/j0hqTP+M27O258egQwZuzs7pI7Mf4WQXIEDc5s9sux+5+1Py2EmP8UOq6GvWhIScxfdYjUERiAt9Jd84J6a16zf8JEKT3yCm8g1UxRv8CC4pyRhzR1uUAAAAASUVORK5CYII="
            },
            menu: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDcvMTUvMTTPsvU0AAAAP0lEQVRIie2SMQoAIBDDUvH/X667g8sJJ9KOhYYOkW0qGaU1MPdC0vGSbV19EACo3YMPAFH5BUBUjsqfAPpVXtNgGDfxEDCtAAAAAElFTkSuQmCC"
            }
        };
    K.prototype.setOptions = function(a, c) {
        if (qa[this._defaultsKey]) {
            var b = qa[this._defaultsKey],
                d;
            for (d in b) b.hasOwnProperty(d) && (this[d] = a && d in a ? a[d] : c && d in
                c ? c[d] : b[d])
        }
    };
    K.prototype.updateOption = function(a) {
        var c = qa[this._defaultsKey],
            b = this._options.theme ? this._options.theme : this.chart && this.chart._options.theme ? this.chart._options.theme : "theme1",
            d = {},
            e = this[a];
        b && (ca[b] && ca[b][this._defaultsKey]) && (d = ca[b][this._defaultsKey]);
        a in c && (e = a in this._options ? this._options[a] : d && a in d ? d[a] : c[a]);
        if (e === this[a]) return !1;
        this[a] = e;
        return !0
    };
    K.prototype.trackChanges = function(a) {
        if (!this.sessionVariables) throw "Session Variable Store not set";
        this.sessionVariables[a] =
            this._options[a]
    };
    K.prototype.isBeingTracked = function(a) {
        this._options._oldOptions || (this._options._oldOptions = {});
        return this._options._oldOptions[a] ? !0 : !1
    };
    K.prototype.hasOptionChanged = function(a) {
        if (!this.sessionVariables) throw "Session Variable Store not set";
        return this.sessionVariables[a] !== this._options[a]
    };
    K.prototype.addEventListener = function(a, c, b) {
        a && c && (this._eventListeners[a] = this._eventListeners[a] || [], this._eventListeners[a].push({
            context: b || this,
            eventHandler: c
        }))
    };
    K.prototype.removeEventListener =
        function(a, c) {
            if (a && c && this._eventListeners[a])
                for (var b = this._eventListeners[a], d = 0; d < b.length; d++)
                    if (b[d].eventHandler === c) {
                        b[d].splice(d, 1);
                        break
                    }
        };
    K.prototype.removeAllEventListeners = function() {
        this._eventListeners = []
    };
    K.prototype.dispatchEvent = function(a, c, b) {
        if (a && this._eventListeners[a]) {
            c = c || {};
            for (var d = this._eventListeners[a], e = 0; e < d.length; e++) d[e].eventHandler.call(d[e].context, c)
        }
        "function" === typeof this[a] && this[a].call(b || this.chart._publicChartReference, c)
    };
    S(z, K);
    z.prototype._updateOptions =
        function() {
            var a = this;
            this.updateOption("width");
            this.updateOption("height");
            this.updateOption("dataPointWidth");
            this.updateOption("dataPointMinWidth");
            this.updateOption("dataPointMaxWidth");
            this.updateOption("interactivityEnabled");
            this.updateOption("theme");
            this.updateOption("colorSet") && (this._selectedColorSet = "undefined" !== typeof ba[this.colorSet] ? ba[this.colorSet] : ba.colorSet1);
            this.updateOption("backgroundColor");
            this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
            this.updateOption("culture");
            this._cultureInfo = new ha(this._options.culture);
            this.updateOption("animationEnabled");
            this.animationEnabled = this.animationEnabled && t;
            this.updateOption("animationDuration");
            this.updateOption("rangeChanging");
            this.updateOption("rangeChanged");
            this.updateOption("exportEnabled");
            this.updateOption("exportFileName");
            this.updateOption("zoomType");
            this._options.zoomEnabled ? (this._zoomButton || (V(this._zoomButton = document.createElement("button")), T(this, this._zoomButton, "pan"), this._toolBar.appendChild(this._zoomButton),
                H(this._zoomButton, "click", function() {
                    a.zoomEnabled ? (a.zoomEnabled = !1, a.panEnabled = !0, T(a, a._zoomButton, "zoom")) : (a.zoomEnabled = !0, a.panEnabled = !1, T(a, a._zoomButton, "pan"));
                    a.render()
                })), this._resetButton || (V(this._resetButton = document.createElement("button")), T(this, this._resetButton, "reset"), this._toolBar.appendChild(this._resetButton), H(this._resetButton, "click", function() {
                a._toolTip.hide();
                a.zoomEnabled || a.panEnabled ? (a.zoomEnabled = !0, a.panEnabled = !1, T(a, a._zoomButton, "pan"), a._defaultCursor =
                    "default", a.overlaidCanvas.style.cursor = a._defaultCursor) : (a.zoomEnabled = !1, a.panEnabled = !1);
                a.sessionVariables.axisX && (a.sessionVariables.axisX.newViewportMinimum = null, a.sessionVariables.axisX.newViewportMaximum = null);
                a.sessionVariables.axisY && (a.sessionVariables.axisY.newViewportMinimum = null, a.sessionVariables.axisY.newViewportMaximum = null);
                a.sessionVariables.axisY2 && (a.sessionVariables.axisY2.newViewportMinimum = null, a.sessionVariables.axisY2.newViewportMaximum = null);
                a.resetOverlayedCanvas();
                V(a._zoomButton,
                    a._resetButton);
                a._dispatchRangeEvent("rangeChanging", "reset");
                a.render();
                a._dispatchRangeEvent("rangeChanged", "reset")
            }), this.overlaidCanvas.style.cursor = a._defaultCursor), this.zoomEnabled || this.panEnabled || (this._zoomButton ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText ? (this.panEnabled = !0, this.zoomEnabled = !1) : (this.zoomEnabled = !0, this.panEnabled = !1), la(a._zoomButton, a._resetButton)) : (this.zoomEnabled = !0, this.panEnabled = !1))) : this.panEnabled = this.zoomEnabled = !1;
            this._menuButton ?
                this.exportEnabled ? la(this._menuButton) : V(this._menuButton) : this.exportEnabled && t && (this._menuButton = document.createElement("button"), T(this, this._menuButton, "menu"), this._toolBar.appendChild(this._menuButton), H(this._menuButton, "click", function() {
                    "none" !== a._dropdownMenu.style.display || a._dropDownCloseTime && 500 >= (new Date).getTime() - a._dropDownCloseTime.getTime() || (a._dropdownMenu.style.display = "block", a._menuButton.blur(), a._dropdownMenu.focus())
                }, !0));
            if (!this._dropdownMenu && this.exportEnabled &&
                t) {
                this._dropdownMenu = document.createElement("div");
                this._dropdownMenu.setAttribute("tabindex", -1);
                this._dropdownMenu.style.cssText = "position: absolute; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 1px;top: 25px;min-width: 120px;outline: 0;border: 1px solid silver;font-size: 14px;font-family: Calibri, Verdana, sans-serif;padding: 5px 0px 5px 0px;text-align: left;background-color: #fff;line-height: 20px;box-shadow: 2px 2px 10px #888888;";
                a._dropdownMenu.style.display = "none";
                this._toolBar.appendChild(this._dropdownMenu);
                H(this._dropdownMenu, "blur", function() {
                    V(a._dropdownMenu);
                    a._dropDownCloseTime = new Date
                }, !0);
                var c = document.createElement("div");
                c.style.cssText = "padding: 2px 15px 2px 10px";
                c.innerHTML = this._cultureInfo.saveJPGText;
                this._dropdownMenu.appendChild(c);
                H(c, "mouseover", function() {
                    this.style.backgroundColor = "#EEEEEE"
                }, !0);
                H(c, "mouseout", function() {
                    this.style.backgroundColor = "transparent"
                }, !0);
                H(c, "click", function() {
                    Fa(a.canvas,
                        "jpeg", a.exportFileName);
                    V(a._dropdownMenu)
                }, !0);
                c = document.createElement("div");
                c.style.cssText = "padding: 2px 15px 2px 10px";
                c.innerHTML = this._cultureInfo.savePNGText;
                this._dropdownMenu.appendChild(c);
                H(c, "mouseover", function() {
                    this.style.backgroundColor = "#EEEEEE"
                }, !0);
                H(c, "mouseout", function() {
                    this.style.backgroundColor = "transparent"
                }, !0);
                H(c, "click", function() {
                    Fa(a.canvas, "png", a.exportFileName);
                    V(a._dropdownMenu)
                }, !0)
            }
            "none" !== this._toolBar.style.display && this._zoomButton && (this.panEnabled ? T(a,
                a._zoomButton, "zoom") : T(a, a._zoomButton, "pan"), a._resetButton.getAttribute("state") !== a._cultureInfo.resetText && T(a, a._resetButton, "reset"));
            if ("undefined" === typeof qa.Chart.creditHref) this.creditHref = "http://canvasjs.com/", this.creditText = "";
            else var b = this.updateOption("creditText"),
                d = this.updateOption("creditHref");
            if (0 === this.renderCount || b || d) this._creditLink.setAttribute("href", this.creditHref), this._creditLink.innerHTML = this.creditText;
            this.creditHref && this.creditText ? this._creditLink.parentElement ||
                this._canvasJSContainer.appendChild(this._creditLink) : this._creditLink.parentElement && this._canvasJSContainer.removeChild(this._creditLink);
            this._options.toolTip && this._toolTip._options !== this._options.toolTip && (this._toolTip._options = this._options.toolTip);
            for (var e in this._toolTip._options) this._toolTip._options.hasOwnProperty(e) && this._toolTip.updateOption(e)
        };
    z.prototype._updateSize = function() {
        var a = 0,
            c = 0;
        this._options.width ? a = this.width : this.width = a = 0 < this._container.clientWidth ? this._container.clientWidth :
            this.width;
        this._options.height ? c = this.height : this.height = c = 0 < this._container.clientHeight ? this._container.clientHeight : this.height;
        return this.canvas.width !== a * N || this.canvas.height !== c * N ? (ja(this.canvas, a, c), ja(this.overlaidCanvas, a, c), ja(this._eventManager.ghostCanvas, a, c), !0) : !1
    };
    z.prototype._initialize = function() {
        this._animator ? this._animator.cancelAllAnimations() : this._animator = new va(this);
        this.removeAllEventListeners();
        this.disableToolTip = !1;
        this._axes = [];
        this.pieDoughnutClickHandler = null;
        this.animationRequestId && this.cancelRequestAnimFrame.call(window, this.animationRequestId);
        this._updateOptions();
        this.animatedRender = t && this.animationEnabled && 0 === this.renderCount;
        this._updateSize();
        this._creditLink && (this.creditHref && this.creditText) && (this._creditLink.style.top = this.height - 14 + "px");
        this.clearCanvas();
        this.ctx.beginPath();
        this.axisY2 = this.axisY = this.axisX = null;
        this._indexLabels = [];
        this._dataInRenderedOrder = [];
        this._events = [];
        this._eventManager && this._eventManager.reset();
        this.plotInfo = {
            axisPlacement: null,
            axisXValueType: null,
            plotTypes: []
        };
        this.layoutManager = new da(0, 0, this.width, this.height, 2);
        this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
        this.data = [];
        var a = 0;
        if (this._options.data)
            for (var c = 0; c < this._options.data.length; c++)
                if (a++, !this._options.data[c].type || 0 <= z._supportedChartTypes.indexOf(this._options.data[c].type)) {
                    var b = new W(this, this._options.data[c], this.theme, a - 1, ++this._eventManager.lastObjectId);
                    null === b.name && (b.name = "DataSeries " + a);
                    null === b.color ?
                        1 < this._options.data.length ? (b._colorSet = [this._selectedColorSet[b.index % this._selectedColorSet.length]], b.color = this._selectedColorSet[b.index % this._selectedColorSet.length]) : b._colorSet = "line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "candlestick" === b.type || "ohlc" === b.type ? [this._selectedColorSet[0]] : this._selectedColorSet : b._colorSet = [b.color];
                    null === b.markerSize && (("line" === b.type || "stepLine" === b.type || "spline" === b.type || 0 <= b.type.toLowerCase().indexOf("area")) && b.dataPoints && b.dataPoints.length < this.width / 16 || "scatter" === b.type) && (b.markerSize = 8);
                    "bubble" !== b.type && "scatter" !== b.type || !b.dataPoints || (b.dataPoints.some ? b.dataPoints.some(function(a) {
                        return a.x
                    }) && b.dataPoints.sort(Aa) : b.dataPoints.sort(Aa));
                    this.data.push(b);
                    var d = b.axisPlacement,
                        e;
                    "normal" === d ? "xySwapped" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' +
                        b.type + '" with bar chart' : "none" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "normal") : "xySwapped" === d ? "normal" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + b.type + '" with line, area, column or pie chart' : "none" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "xySwapped") : "none" == d && ("normal" ===
                            this.plotInfo.axisPlacement ? e = 'You cannot combine "' + b.type + '" with line, area, column or bar chart' : "xySwapped" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + b.type + '" with bar chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none"));
                    if (e && window.console) {
                        window.console.log(e);
                        return
                    }
                }
        this._objectsInitialized = !0
    };
    z._supportedChartTypes = function(a) {
        a.indexOf || (a.indexOf = Ka);
        return a
    }("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc rangeColumn rangeBar rangeArea rangeSplineArea pie doughnut funnel".split(" "));
    z.prototype.render = function(a) {
        a && (this._options = a);
        this._initialize();
        var c = [];
        for (a = 0; a < this.data.length; a++)
            if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) this.data[a].axisYType && "primary" !== this.data[a].axisYType ? "secondary" === this.data[a].axisYType && (this.axisY2 || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2 = new B(this, this._options.axisY2, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2 = new B(this,
                this._options.axisY2, "axisY", "top"))), this.data[a].axisY = this.axisY2) : (this.axisY || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY = new B(this, this._options.axisY, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY = new B(this, this._options.axisY, "axisY", "bottom"))), this.data[a].axisY = this.axisY), this.axisX || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX = new B(this, this._options.axisX, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement &&
                this._axes.push(this.axisX = new B(this, this._options.axisX, "axisX", "left"))), this.data[a].axisX = this.axisX;
        this.axisY && this.axisY2 && (0 < this.axisY.gridThickness && "undefined" === typeof this.axisY2._options.gridThickness ? this.axisY2.gridThickness = 0 : 0 < this.axisY2.gridThickness && "undefined" === typeof this.axisY._options.gridThickness && (this.axisY.gridThickness = 0));
        var b = !1;
        if (0 < this._axes.length && (this.zoomEnabled || this.panEnabled))
            for (a = 0; a < this._axes.length; a++)
                if (null !== this._axes[a].viewportMinimum ||
                    null !== this._axes[a].viewportMaximum) {
                    b = !0;
                    break
                }
        b ? la(this._zoomButton, this._resetButton) : (V(this._zoomButton, this._resetButton), this._options.zoomEnabled && (this.zoomEnabled = !0, this.panEnabled = !1));
        this._processData();
        this._options.title && (this._title = new ga(this, this._options.title), this._title.dockInsidePlotArea ? c.push(this._title) : this._title.render());
        if (this._options.subtitles)
            for (a = 0; a < this._options.subtitles.length; a++) this.subtitles = [], b = new na(this, this._options.subtitles[a]), this.subtitles.push(b),
                b.dockInsidePlotArea ? c.push(b) : b.render();
        this.legend = new oa(this, this._options.legend, this.theme);
        for (a = 0; a < this.data.length; a++)(this.data[a].showInLegend || "pie" === this.data[a].type || "doughnut" === this.data[a].type) && this.legend.dataSeries.push(this.data[a]);
        this.legend.dockInsidePlotArea ? c.push(this.legend) : this.legend.render();
        if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) B.setLayoutAndRender(this.axisX, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace());
        else if ("none" === this.plotInfo.axisPlacement) this.preparePlotArea();
        else return;
        for (a = 0; a < c.length; a++) c[a].render();
        var d = [];
        if (this.animatedRender) {
            var e = aa(this.width, this.height);
            e.getContext("2d").drawImage(this.canvas, 0, 0, this.width, this.height)
        }
        for (a = 0; a < this.plotInfo.plotTypes.length; a++)
            for (c = this.plotInfo.plotTypes[a], b = 0; b < c.plotUnits.length; b++) {
                var f = c.plotUnits[b],
                    g = null;
                f.targetCanvas = null;
                this.animatedRender && (f.targetCanvas = aa(this.width, this.height), f.targetCanvasCtx = f.targetCanvas.getContext("2d"));
                "line" === f.type ? g = this.renderLine(f) : "stepLine" === f.type ? g = this.renderStepLine(f) : "spline" === f.type ? g = this.renderSpline(f) : "column" === f.type ? g = this.renderColumn(f) : "bar" === f.type ? g = this.renderBar(f) : "area" === f.type ? g = this.renderArea(f) : "stepArea" === f.type ? g = this.renderStepArea(f) : "splineArea" === f.type ? g = this.renderSplineArea(f) : "stackedColumn" === f.type ? g = this.renderStackedColumn(f) : "stackedColumn100" === f.type ? g = this.renderStackedColumn100(f) : "stackedBar" === f.type ? g = this.renderStackedBar(f) : "stackedBar100" ===
                    f.type ? g = this.renderStackedBar100(f) : "stackedArea" === f.type ? g = this.renderStackedArea(f) : "stackedArea100" === f.type ? g = this.renderStackedArea100(f) : "bubble" === f.type ? g = g = this.renderBubble(f) : "scatter" === f.type ? g = this.renderScatter(f) : "pie" === f.type ? this.renderPie(f) : "doughnut" === f.type ? this.renderPie(f) : "candlestick" === f.type ? g = this.renderCandlestick(f) : "ohlc" === f.type ? g = this.renderCandlestick(f) : "rangeColumn" === f.type ? g = this.renderRangeColumn(f) : "rangeBar" === f.type ? g = this.renderRangeBar(f) : "rangeArea" ===
                    f.type ? g = this.renderRangeArea(f) : "rangeSplineArea" === f.type && (g = this.renderRangeSplineArea(f));
                for (var h = 0; h < f.dataSeriesIndexes.length; h++) this._dataInRenderedOrder.push(this.data[f.dataSeriesIndexes[h]]);
                this.animatedRender && g && d.push(g)
            }
        this.animatedRender && 0 < this._indexLabels.length && (a = aa(this.width, this.height).getContext("2d"), d.push(this.renderIndexLabels(a)));
        var p = this;
        0 < d.length ? (p.disableToolTip = !0, p._animator.animate(200, p.animationDuration, function(a) {
            p.ctx.clearRect(0, 0, p.width, p.height);
            p.ctx.drawImage(e, 0, 0, Math.floor(p.width * N), Math.floor(p.height * N), 0, 0, p.width, p.height);
            for (var b = 0; b < d.length; b++) g = d[b], 1 > a && "undefined" !== typeof g.startTimePercent ? a >= g.startTimePercent && g.animationCallback(g.easingFunction(a - g.startTimePercent, 0, 1, 1 - g.startTimePercent), g) : g.animationCallback(g.easingFunction(a, 0, 1, 1), g);
            p.dispatchEvent("dataAnimationIterationEnd", {
                chart: p
            })
        }, function() {
            d = [];
            for (var a = 0; a < p.plotInfo.plotTypes.length; a++)
                for (var b = p.plotInfo.plotTypes[a], c = 0; c < b.plotUnits.length; c++) b.plotUnits[c].targetCanvas =
                    null;
            e = null;
            p.disableToolTip = !1
        })) : (0 < p._indexLabels.length && p.renderIndexLabels(), p.dispatchEvent("dataAnimationIterationEnd", {
            chart: p
        }));
        this.attachPlotAreaEventHandlers();
        this.zoomEnabled || (this.panEnabled || !this._zoomButton || "none" === this._zoomButton.style.display) || V(this._zoomButton, this._resetButton);
        this._toolTip._updateToolTip();
        this.renderCount++
    };
    z.prototype.attachPlotAreaEventHandlers = function() {
        this.attachEvent({
            context: this,
            chart: this,
            mousedown: this._plotAreaMouseDown,
            mouseup: this._plotAreaMouseUp,
            mousemove: this._plotAreaMouseMove,
            cursor: this.zoomEnabled ? "col-resize" : "move",
            cursor: this.panEnabled ? "move" : "default",
            capture: !0,
            bounds: this.plotArea
        })
    };
    z.prototype.categoriseDataSeries = function() {
        for (var a = "", c = 0; c < this.data.length; c++)
            if (a = this.data[c], a.dataPoints && (0 !== a.dataPoints.length && a.visible) && 0 <= z._supportedChartTypes.indexOf(a.type)) {
                for (var b = null, d = !1, e = null, f = !1, g = 0; g < this.plotInfo.plotTypes.length; g++)
                    if (this.plotInfo.plotTypes[g].type === a.type) {
                        d = !0;
                        b = this.plotInfo.plotTypes[g];
                        break
                    }
                d || (b = {
                    type: a.type,
                    totalDataSeries: 0,
                    plotUnits: []
                }, this.plotInfo.plotTypes.push(b));
                for (g = 0; g < b.plotUnits.length; g++)
                    if (b.plotUnits[g].axisYType === a.axisYType) {
                        f = !0;
                        e = b.plotUnits[g];
                        break
                    }
                f || (e = {
                    type: a.type,
                    previousDataSeriesCount: 0,
                    index: b.plotUnits.length,
                    plotType: b,
                    axisYType: a.axisYType,
                    axisY: "primary" === a.axisYType ? this.axisY : this.axisY2,
                    axisX: this.axisX,
                    dataSeriesIndexes: [],
                    yTotals: []
                }, b.plotUnits.push(e));
                b.totalDataSeries++;
                e.dataSeriesIndexes.push(c);
                a.plotUnit = e
            }
        for (c = 0; c < this.plotInfo.plotTypes.length; c++)
            for (b =
                this.plotInfo.plotTypes[c], g = a = 0; g < b.plotUnits.length; g++) b.plotUnits[g].previousDataSeriesCount = a, a += b.plotUnits[g].dataSeriesIndexes.length
    };
    z.prototype.assignIdToDataPoints = function() {
        for (var a = 0; a < this.data.length; a++) {
            var c = this.data[a];
            if (c.dataPoints)
                for (var b = c.dataPoints.length, d = 0; d < b; d++) c.dataPointIds[d] = ++this._eventManager.lastObjectId
        }
    };
    z.prototype._processData = function() {
        this.assignIdToDataPoints();
        this.categoriseDataSeries();
        for (var a = 0; a < this.plotInfo.plotTypes.length; a++)
            for (var c =
                    this.plotInfo.plotTypes[a], b = 0; b < c.plotUnits.length; b++) {
                var d = c.plotUnits[b];
                "line" === d.type || "stepLine" === d.type || "spline" === d.type || "column" === d.type || "area" === d.type || "stepArea" === d.type || "splineArea" === d.type || "bar" === d.type || "bubble" === d.type || "scatter" === d.type ? this._processMultiseriesPlotUnit(d) : "stackedColumn" === d.type || "stackedBar" === d.type || "stackedArea" === d.type ? this._processStackedPlotUnit(d) : "stackedColumn100" === d.type || "stackedBar100" === d.type || "stackedArea100" === d.type ? this._processStacked100PlotUnit(d) :
                    "candlestick" !== d.type && "ohlc" !== d.type && "rangeColumn" !== d.type && "rangeBar" !== d.type && "rangeArea" !== d.type && "rangeSplineArea" !== d.type || this._processMultiYPlotUnit(d)
            }
    };
    z.prototype._processMultiseriesPlotUnit = function(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
            for (var c = a.axisY.dataInfo, b = a.axisX.dataInfo, d, e, f = !1, g = 0; g < a.dataSeriesIndexes.length; g++) {
                var h = this.data[a.dataSeriesIndexes[g]],
                    p = 0,
                    k = !1,
                    n = !1,
                    m;
                if ("normal" === h.axisPlacement || "xySwapped" === h.axisPlacement) var l = this.sessionVariables.axisX.newViewportMinimum ?
                    this.sessionVariables.axisX.newViewportMinimum : this._options.axisX && this._options.axisX.viewportMinimum ? this._options.axisX.viewportMinimum : this._options.axisX && this._options.axisX.minimum ? this._options.axisX.minimum : a.axisX.logarithmic ? 0 : -Infinity,
                    q = this.sessionVariables.axisX.newViewportMaximum ? this.sessionVariables.axisX.newViewportMaximum : this._options.axisX && this._options.axisX.viewportMaximum ? this._options.axisX.viewportMaximum : this._options.axisX && this._options.axisX.maximum ? this._options.axisX.maximum :
                    Infinity;
                if (h.dataPoints[p].x && h.dataPoints[p].x.getTime || "dateTime" === h.xValueType) f = !0;
                for (p = 0; p < h.dataPoints.length; p++) {
                    "undefined" === typeof h.dataPoints[p].x && (h.dataPoints[p].x = p + (a.axisX.logarithmic ? 1 : 0));
                    h.dataPoints[p].x.getTime ? (f = !0, d = h.dataPoints[p].x.getTime()) : d = h.dataPoints[p].x;
                    e = h.dataPoints[p].y;
                    d < b.min && (b.min = d);
                    d > b.max && (b.max = d);
                    e < c.min && (c.min = e);
                    e > c.max && (c.max = e);
                    if (0 < p) {
                        if (a.axisX.logarithmic) {
                            var r = d / h.dataPoints[p - 1].x;
                            1 > r && (r = 1 / r);
                            b.minDiff > r && 1 !== r && (b.minDiff = r)
                        } else r =
                            d - h.dataPoints[p - 1].x, 0 > r && (r *= -1), b.minDiff > r && 0 !== r && (b.minDiff = r);
                        null !== e && null !== h.dataPoints[p - 1].y && (a.axisY.logarithmic ? (r = e / h.dataPoints[p - 1].y, 1 > r && (r = 1 / r), c.minDiff > r && 1 !== r && (c.minDiff = r)) : (r = e - h.dataPoints[p - 1].y, 0 > r && (r *= -1), c.minDiff > r && 0 !== r && (c.minDiff = r)))
                    }
                    if (d < l && !k) null !== e && (m = d);
                    else {
                        if (!k && (k = !0, 0 < p)) {
                            p -= 2;
                            continue
                        }
                        if (d > q && !n) n = !0;
                        else if (d > q && n) continue;
                        h.dataPoints[p].label && (a.axisX.labels[d] = h.dataPoints[p].label);
                        d < b.viewPortMin && (b.viewPortMin = d);
                        d > b.viewPortMax && (b.viewPortMax =
                            d);
                        null === e ? b.viewPortMin === d && m < d && (b.viewPortMin = m) : (e < c.viewPortMin && (c.viewPortMin = e), e > c.viewPortMax && (c.viewPortMax = e))
                    }
                }
                this.plotInfo.axisXValueType = h.xValueType = f ? "dateTime" : "number"
            }
    };
    z.prototype._processStackedPlotUnit = function(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
            for (var c = a.axisY.dataInfo, b = a.axisX.dataInfo, d, e, f = !1, g = [], h = [], p = Infinity, k = 0; k < a.dataSeriesIndexes.length; k++) {
                var n = this.data[a.dataSeriesIndexes[k]],
                    m = 0,
                    l = !1,
                    q = !1,
                    r;
                if ("normal" === n.axisPlacement || "xySwapped" ===
                    n.axisPlacement) var s = this.sessionVariables.axisX.newViewportMinimum ? this.sessionVariables.axisX.newViewportMinimum : this._options.axisX && this._options.axisX.viewportMinimum ? this._options.axisX.viewportMinimum : this._options.axisX && this._options.axisX.minimum ? this._options.axisX.minimum : -Infinity,
                    y = this.sessionVariables.axisX.newViewportMaximum ? this.sessionVariables.axisX.newViewportMaximum : this._options.axisX && this._options.axisX.viewportMaximum ? this._options.axisX.viewportMaximum : this._options.axisX &&
                    this._options.axisX.maximum ? this._options.axisX.maximum : Infinity;
                if (n.dataPoints[m].x && n.dataPoints[m].x.getTime || "dateTime" === n.xValueType) f = !0;
                for (m = 0; m < n.dataPoints.length; m++) {
                    "undefined" === typeof n.dataPoints[m].x && (n.dataPoints[m].x = m + (a.axisX.logarithmic ? 1 : 0));
                    n.dataPoints[m].x.getTime ? (f = !0, d = n.dataPoints[m].x.getTime()) : d = n.dataPoints[m].x;
                    x(n.dataPoints[m].y) ? e = 0 : (e = n.dataPoints[m].y, 0 === k && (p = Math.min(e, p)));
                    d < b.min && (b.min = d);
                    d > b.max && (b.max = d);
                    if (0 < m) {
                        if (a.axisX.logarithmic) {
                            var u = d /
                                n.dataPoints[m - 1].x;
                            1 > u && (u = 1 / u);
                            b.minDiff > u && 1 !== u && (b.minDiff = u)
                        } else u = d - n.dataPoints[m - 1].x, 0 > u && (u *= -1), b.minDiff > u && 0 !== u && (b.minDiff = u);
                        null !== e && null !== n.dataPoints[m - 1].y && (a.axisY.logarithmic ? 0 < e && (u = e / n.dataPoints[m - 1].y, 1 > u && (u = 1 / u), c.minDiff > u && 1 !== u && (c.minDiff = u)) : (u = e - n.dataPoints[m - 1].y, 0 > u && (u *= -1), c.minDiff > u && 0 !== u && (c.minDiff = u)))
                    }
                    if (d < s && !l) null !== n.dataPoints[m].y && (r = d);
                    else {
                        if (!l && (l = !0, 0 < m)) {
                            m -= 2;
                            continue
                        }
                        if (d > y && !q) q = !0;
                        else if (d > y && q) continue;
                        n.dataPoints[m].label && (a.axisX.labels[d] =
                            n.dataPoints[m].label);
                        d < b.viewPortMin && (b.viewPortMin = d);
                        d > b.viewPortMax && (b.viewPortMax = d);
                        null === n.dataPoints[m].y ? b.viewPortMin === d && r < d && (b.viewPortMin = r) : (a.yTotals[d] = (a.yTotals[d] ? a.yTotals[d] : 0) + Math.abs(e), 0 <= e ? g[d] = g[d] ? g[d] + e : e : h[d] = h[d] ? h[d] + e : e)
                    }
                }
                this.plotInfo.axisXValueType = n.xValueType = f ? "dateTime" : "number"
            }
            for (m in g) g.hasOwnProperty(m) && !isNaN(m) && (a = g[m], a < c.min && (c.min = Math.min(a, p)), a > c.max && (c.max = a), m < b.viewPortMin || m > b.viewPortMax || (a < c.viewPortMin && (c.viewPortMin = Math.min(a,
                p)), a > c.viewPortMax && (c.viewPortMax = a)));
            for (m in h) h.hasOwnProperty(m) && !isNaN(m) && (a = h[m], a < c.min && (c.min = Math.min(a, p)), a > c.max && (c.max = a), m < b.viewPortMin || m > b.viewPortMax || (a < c.viewPortMin && (c.viewPortMin = Math.min(a, p)), a > c.viewPortMax && (c.viewPortMax = a)))
        }
    };
    z.prototype._processStacked100PlotUnit = function(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
            for (var c = a.axisY.dataInfo, b = a.axisX.dataInfo, d, e, f = !1, g = !1, h = !1, p = [], k = 0; k < a.dataSeriesIndexes.length; k++) {
                var n = this.data[a.dataSeriesIndexes[k]],
                    m = 0,
                    l = !1,
                    q = !1,
                    r;
                if ("normal" === n.axisPlacement || "xySwapped" === n.axisPlacement) var s = this.sessionVariables.axisX.newViewportMinimum ? this.sessionVariables.axisX.newViewportMinimum : this._options.axisX && this._options.axisX.viewportMinimum ? this._options.axisX.viewportMinimum : this._options.axisX && this._options.axisX.minimum ? this._options.axisX.minimum : -Infinity,
                    y = this.sessionVariables.axisX.newViewportMaximum ? this.sessionVariables.axisX.newViewportMaximum : this._options.axisX && this._options.axisX.viewportMaximum ?
                    this._options.axisX.viewportMaximum : this._options.axisX && this._options.axisX.maximum ? this._options.axisX.maximum : Infinity;
                if (n.dataPoints[m].x && n.dataPoints[m].x.getTime || "dateTime" === n.xValueType) f = !0;
                for (m = 0; m < n.dataPoints.length; m++) {
                    "undefined" === typeof n.dataPoints[m].x && (n.dataPoints[m].x = m + (a.axisX.logarithmic ? 1 : 0));
                    n.dataPoints[m].x.getTime ? (f = !0, d = n.dataPoints[m].x.getTime()) : d = n.dataPoints[m].x;
                    e = x(n.dataPoints[m].y) ? null : n.dataPoints[m].y;
                    d < b.min && (b.min = d);
                    d > b.max && (b.max = d);
                    if (0 < m) {
                        if (a.axisX.logarithmic) {
                            var u =
                                d / n.dataPoints[m - 1].x;
                            1 > u && (u = 1 / u);
                            b.minDiff > u && 1 !== u && (b.minDiff = u)
                        } else u = d - n.dataPoints[m - 1].x, 0 > u && (u *= -1), b.minDiff > u && 0 !== u && (b.minDiff = u);
                        x(e) || null === n.dataPoints[m - 1].y || (a.axisY.logarithmic ? 0 < e && (u = e / n.dataPoints[m - 1].y, 1 > u && (u = 1 / u), c.minDiff > u && 1 !== u && (c.minDiff = u)) : (u = e - n.dataPoints[m - 1].y, 0 > u && (u *= -1), c.minDiff > u && 0 !== u && (c.minDiff = u)))
                    }
                    if (d < s && !l) null !== e && (r = d);
                    else {
                        if (!l && (l = !0, 0 < m)) {
                            m -= 2;
                            continue
                        }
                        if (d > y && !q) q = !0;
                        else if (d > y && q) continue;
                        n.dataPoints[m].label && (a.axisX.labels[d] = n.dataPoints[m].label);
                        d < b.viewPortMin && (b.viewPortMin = d);
                        d > b.viewPortMax && (b.viewPortMax = d);
                        null === e ? b.viewPortMin === d && r < d && (b.viewPortMin = r) : (a.yTotals[d] = (a.yTotals[d] ? a.yTotals[d] : 0) + Math.abs(e), 0 <= e ? g = !0 : 0 > e && (h = !0), p[d] = p[d] ? p[d] + Math.abs(e) : Math.abs(e))
                    }
                }
                this.plotInfo.axisXValueType = n.xValueType = f ? "dateTime" : "number"
            }
            a.axisY.logarithmic ? (c.max = x(c.viewPortMax) ? 99 * Math.pow(a.axisY.logarithmBase, -0.05) : Math.max(c.viewPortMax, 99 * Math.pow(a.axisY.logarithmBase, -0.05)), c.min = x(c.viewPortMin) ? 1 : Math.min(c.viewPortMin,
                1)) : g && !h ? (c.max = x(c.viewPortMax) ? 99 : Math.max(c.viewPortMax, 99), c.min = x(c.viewPortMin) ? 1 : Math.min(c.viewPortMin, 1)) : g && h ? (c.max = x(c.viewPortMax) ? 99 : Math.max(c.viewPortMax, 99), c.min = x(c.viewPortMin) ? -99 : Math.min(c.viewPortMin, -99)) : !g && h && (c.max = x(c.viewPortMax) ? -1 : Math.max(c.viewPortMax, -1), c.min = x(c.viewPortMin) ? -99 : Math.min(c.viewPortMin, -99));
            c.viewPortMin = c.min;
            c.viewPortMax = c.max;
            a.dataPointYSums = p
        }
    };
    z.prototype._processMultiYPlotUnit = function(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
            for (var c =
                    a.axisY.dataInfo, b = a.axisX.dataInfo, d, e, f, g, h = !1, p = 0; p < a.dataSeriesIndexes.length; p++) {
                var k = this.data[a.dataSeriesIndexes[p]],
                    n = 0,
                    m = !1,
                    l = !1,
                    q, r, s;
                if ("normal" === k.axisPlacement || "xySwapped" === k.axisPlacement) var y = this.sessionVariables.axisX.newViewportMinimum ? this.sessionVariables.axisX.newViewportMinimum : this._options.axisX && this._options.axisX.viewportMinimum ? this._options.axisX.viewportMinimum : this._options.axisX && this._options.axisX.minimum ? this._options.axisX.minimum : -Infinity,
                    u = this.sessionVariables.axisX.newViewportMaximum ?
                    this.sessionVariables.axisX.newViewportMaximum : this._options.axisX && this._options.axisX.viewportMaximum ? this._options.axisX.viewportMaximum : this._options.axisX && this._options.axisX.maximum ? this._options.axisX.maximum : Infinity;
                if (k.dataPoints[n].x && k.dataPoints[n].x.getTime || "dateTime" === k.xValueType) h = !0;
                for (n = 0; n < k.dataPoints.length; n++) {
                    "undefined" === typeof k.dataPoints[n].x && (k.dataPoints[n].x = n + (a.axisX.logarithmic ? 1 : 0));
                    k.dataPoints[n].x.getTime ? (h = !0, d = k.dataPoints[n].x.getTime()) : d = k.dataPoints[n].x;
                    if ((e = k.dataPoints[n].y) && e.length) {
                        f = Math.min.apply(null, e);
                        g = Math.max.apply(null, e);
                        r = !0;
                        for (var v = 0; v < e.length; v++) null === e.k && (r = !1);
                        r && (m || (s = q), q = d)
                    }
                    d < b.min && (b.min = d);
                    d > b.max && (b.max = d);
                    f < c.min && (c.min = f);
                    g > c.max && (c.max = g);
                    0 < n && (a.axisX.logarithmic ? (r = d / k.dataPoints[n - 1].x, 1 > r && (r = 1 / r), b.minDiff > r && 1 !== r && (b.minDiff = r)) : (r = d - k.dataPoints[n - 1].x, 0 > r && (r *= -1), b.minDiff > r && 0 !== r && (b.minDiff = r)), e && (null !== e[0] && k.dataPoints[n - 1].y && null !== k.dataPoints[n - 1].y[0]) && (a.axisY.logarithmic ? (r = e[0] /
                        k.dataPoints[n - 1].y[0], 1 > r && (r = 1 / r), c.minDiff > r && 1 !== r && (c.minDiff = r)) : (r = e[0] - k.dataPoints[n - 1].y[0], 0 > r && (r *= -1), c.minDiff > r && 0 !== r && (c.minDiff = r))));
                    if (!(d < y) || m) {
                        if (!m && (m = !0, 0 < n)) {
                            n -= 2;
                            q = s;
                            continue
                        }
                        if (d > u && !l) l = !0;
                        else if (d > u && l) continue;
                        k.dataPoints[n].label && (a.axisX.labels[d] = k.dataPoints[n].label);
                        d < b.viewPortMin && (b.viewPortMin = d);
                        d > b.viewPortMax && (b.viewPortMax = d);
                        if (b.viewPortMin === d && e)
                            for (v = 0; v < e.length; v++)
                                if (null === e[v] && q < d) {
                                    b.viewPortMin = q;
                                    break
                                }
                        null === e ? b.viewPortMin === d && q < d &&
                            (b.viewPortMin = q) : (f < c.viewPortMin && (c.viewPortMin = f), g > c.viewPortMax && (c.viewPortMax = g))
                    }
                }
                this.plotInfo.axisXValueType = k.xValueType = h ? "dateTime" : "number"
            }
    };
    z.prototype.getDataPointAtXY = function(a, c, b) {
        b = b || !1;
        for (var d = [], e = this._dataInRenderedOrder.length - 1; 0 <= e; e--) {
            var f = null;
            (f = this._dataInRenderedOrder[e].getDataPointAtXY(a, c, b)) && d.push(f)
        }
        a = null;
        c = !1;
        for (b = 0; b < d.length; b++)
            if ("line" === d[b].dataSeries.type || "stepLine" === d[b].dataSeries.type || "area" === d[b].dataSeries.type || "stepArea" === d[b].dataSeries.type)
                if (e =
                    Q("markerSize", d[b].dataPoint, d[b].dataSeries) || 8, d[b].distance <= e / 2) {
                    c = !0;
                    break
                }
        for (b = 0; b < d.length; b++) c && "line" !== d[b].dataSeries.type && "stepLine" !== d[b].dataSeries.type && "area" !== d[b].dataSeries.type && "stepArea" !== d[b].dataSeries.type || (a ? d[b].distance <= a.distance && (a = d[b]) : a = d[b]);
        return a
    };
    z.prototype.getObjectAtXY = function(a, c, b) {
        var d = null;
        if (b = this.getDataPointAtXY(a, c, b || !1)) d = b.dataSeries.dataPointIds[b.dataPointIndex];
        else if (t) d = Da(a, c, this._eventManager.ghostCtx);
        else
            for (b = 0; b < this.legend.items.length; b++) {
                var e =
                    this.legend.items[b];
                a >= e.x1 && (a <= e.x2 && c >= e.y1 && c <= e.y2) && (d = e.id)
            }
        return d
    };
    z.prototype.getAutoFontSize = function(a, c, b) {
        a /= 400;
        return Math.max(10, Math.round(Math.min(this.width, this.height) * a))
    };
    z.prototype.resetOverlayedCanvas = function() {
        this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height)
    };
    z.prototype.clearCanvas = function() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.backgroundColor && (this.ctx.fillStyle = this.backgroundColor, this.ctx.fillRect(0, 0, this.width, this.height))
    };
    z.prototype.attachEvent =
        function(a) {
            this._events.push(a)
        };
    z.prototype._touchEventHandler = function(a) {
        if (a.changedTouches && this.interactivityEnabled) {
            var c = [],
                b = a.changedTouches,
                d = b ? b[0] : a,
                e = null;
            switch (a.type) {
                case "touchstart":
                case "MSPointerDown":
                    c = ["mousemove", "mousedown"];
                    this._lastTouchData = ra(d);
                    this._lastTouchData.time = new Date;
                    break;
                case "touchmove":
                case "MSPointerMove":
                    c = ["mousemove"];
                    break;
                case "touchend":
                case "MSPointerUp":
                    c = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType ? ["mouseup",
                        "click"
                    ] : ["mouseup"];
                    break;
                default:
                    return
            }
            if (!(b && 1 < b.length)) {
                e = ra(d);
                e.time = new Date;
                try {
                    var f = e.y - this._lastTouchData.y,
                        g = e.time - this._lastTouchData.time;
                    if (15 < Math.abs(f) && (this._lastTouchData.scroll || 200 > g)) {
                        this._lastTouchData.scroll = !0;
                        var h = window.parent || window;
                        h && h.scrollBy && h.scrollBy(0, -f)
                    }
                } catch (p) {}
                this._lastTouchEventType = a.type;
                if (this._lastTouchData.scroll && this.zoomEnabled) this.isDrag && this.resetOverlayedCanvas(), this.isDrag = !1;
                else
                    for (b = 0; b < c.length; b++) e = c[b], f = document.createEvent("MouseEvent"),
                        f.initMouseEvent(e, !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), d.target.dispatchEvent(f), a.preventManipulation && a.preventManipulation(), a.preventDefault && a.preventDefault()
            }
        }
    };
    z.prototype._dispatchRangeEvent = function(a, c) {
        var b = {};
        b.chart = this._publicChartReference;
        b.type = a;
        b.trigger = c;
        var d = [];
        this.axisX && d.push("axisX");
        this.axisY && d.push("axisY");
        this.axisY2 && d.push("axisY2");
        for (var e = 0; e < d.length; e++) b[d[e]] = {
            viewportMinimum: this[d[e]].sessionVariables.newViewportMinimum,
            viewportMaximum: this[d[e]].sessionVariables.newViewportMaximum
        };
        this.dispatchEvent(a, b, this._publicChartReference)
    };
    z.prototype._mouseEventHandler = function(a) {
        "undefined" === typeof a.target && a.srcElement && (a.target = a.srcElement);
        var c = ra(a),
            b = a.type,
            d, e;
        a.which ? e = 3 == a.which : a.button && (e = 2 == a.button);
        z.capturedEventParam && (d = z.capturedEventParam, "mouseup" === b && (z.capturedEventParam = null, d.chart.overlaidCanvas.releaseCapture ? d.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup",
            d.chart._mouseEventHandler, !1)), d.hasOwnProperty(b) && ("mouseup" !== b || d.chart.overlaidCanvas.releaseCapture ? a.target === d.chart.overlaidCanvas && d[b].call(d.context, c.x, c.y) : a.target !== d.chart.overlaidCanvas && (d.chart.isDrag = !1)));
        if (this.interactivityEnabled)
            if (this._ignoreNextEvent) this._ignoreNextEvent = !1;
            else if (a.preventManipulation && a.preventManipulation(), a.preventDefault && a.preventDefault(), !e) {
            if (!z.capturedEventParam && this._events) {
                for (var f = 0; f < this._events.length; f++)
                    if (this._events[f].hasOwnProperty(b))
                        if (d =
                            this._events[f], e = d.bounds, c.x >= e.x1 && c.x <= e.x2 && c.y >= e.y1 && c.y <= e.y2) {
                            d[b].call(d.context, c.x, c.y);
                            "mousedown" === b && !0 === d.capture ? (z.capturedEventParam = d, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.documentElement.addEventListener("mouseup", this._mouseEventHandler, !1)) : "mouseup" === b && (d.chart.overlaidCanvas.releaseCapture ? d.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", this._mouseEventHandler, !1));
                            break
                        } else d = null;
                a.target.style.cursor =
                    d && d.cursor ? d.cursor : this._defaultCursor
            }
            b = this.plotArea;
            if (c.x < b.x1 || c.x > b.x2 || c.y < b.y1 || c.y > b.y2) this._toolTip && this._toolTip.enabled ? this._toolTip.hide() : this.resetOverlayedCanvas();
            this.isDrag && this.zoomEnabled || !this._eventManager || this._eventManager.mouseEventHandler(a)
        }
    };
    z.prototype._plotAreaMouseDown = function(a, c) {
        this.isDrag = !0;
        this.dragStartPoint = {
            x: a,
            y: c
        }
    };
    z.prototype._plotAreaMouseUp = function(a, c) {
        if (("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) &&
            this.isDrag) {
            var b = c - this.dragStartPoint.y,
                d = a - this.dragStartPoint.x,
                e = 0 <= this.zoomType.indexOf("x"),
                f = 0 <= this.zoomType.indexOf("y"),
                g = !1;
            this.resetOverlayedCanvas();
            if ("xySwapped" === this.plotInfo.axisPlacement) var h = f,
                f = e,
                e = h;
            if (this.panEnabled || this.zoomEnabled) {
                if (this.panEnabled)
                    for (e = f = 0; e < this._axes.length; e++) b = this._axes[e], b.logarithmic ? b.viewportMinimum < b.minimum ? (f = b.minimum / b.viewportMinimum, b.sessionVariables.newViewportMinimum = b.viewportMinimum * f, b.sessionVariables.newViewportMaximum =
                        b.viewportMaximum * f, g = !0) : b.viewportMaximum > b.maximum && (f = b.viewportMaximum / b.maximum, b.sessionVariables.newViewportMinimum = b.viewportMinimum / f, b.sessionVariables.newViewportMaximum = b.viewportMaximum / f, g = !0) : b.viewportMinimum < b.minimum ? (f = b.minimum - b.viewportMinimum, b.sessionVariables.newViewportMinimum = b.viewportMinimum + f, b.sessionVariables.newViewportMaximum = b.viewportMaximum + f, g = !0) : b.viewportMaximum > b.maximum && (f = b.viewportMaximum - b.maximum, b.sessionVariables.newViewportMinimum = b.viewportMinimum -
                        f, b.sessionVariables.newViewportMaximum = b.viewportMaximum - f, g = !0);
                else if ((!e || 2 < Math.abs(d)) && (!f || 2 < Math.abs(b)) && this.zoomEnabled) {
                    if (!this.dragStartPoint) return;
                    b = e ? this.dragStartPoint.x : this.plotArea.x1;
                    d = f ? this.dragStartPoint.y : this.plotArea.y1;
                    e = e ? a : this.plotArea.x2;
                    f = f ? c : this.plotArea.y2;
                    2 < Math.abs(b - e) && 2 < Math.abs(d - f) && this._zoomPanToSelectedRegion(b, d, e, f) && (g = !0)
                }
                g && (this._ignoreNextEvent = !0, this._dispatchRangeEvent("rangeChanging", "zoom"), this.render(), this._dispatchRangeEvent("rangeChanged",
                    "zoom"), g && (this.zoomEnabled && "none" === this._zoomButton.style.display) && (la(this._zoomButton, this._resetButton), T(this, this._zoomButton, "pan"), T(this, this._resetButton, "reset")))
            }
        }
        this.isDrag = !1
    };
    z.prototype._plotAreaMouseMove = function(a, c) {
        if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
            var b = 0,
                d = 0,
                e = b = null,
                e = 0 <= this.zoomType.indexOf("x"),
                f = 0 <= this.zoomType.indexOf("y");
            "xySwapped" === this.plotInfo.axisPlacement && (b = f, f = e, e = b);
            b = this.dragStartPoint.x - a;
            d = this.dragStartPoint.y - c;
            2 < Math.abs(b) &&
                8 > Math.abs(b) && (this.panEnabled || this.zoomEnabled) ? this._toolTip.hide() : this.panEnabled || this.zoomEnabled || this._toolTip.mouseMoveHandler(a, c);
            if ((!e || 2 < Math.abs(b) || !f || 2 < Math.abs(d)) && (this.panEnabled || this.zoomEnabled))
                if (this.panEnabled) e = {
                    x1: e ? this.plotArea.x1 + b : this.plotArea.x1,
                    y1: f ? this.plotArea.y1 + d : this.plotArea.y1,
                    x2: e ? this.plotArea.x2 + b : this.plotArea.x2,
                    y2: f ? this.plotArea.y2 + d : this.plotArea.y2
                }, this._zoomPanToSelectedRegion(e.x1, e.y1, e.x2, e.y2, !0) && (this._dispatchRangeEvent("rangeChanging",
                    "pan"), this.render(), this._dispatchRangeEvent("rangeChanged", "pan"), this.dragStartPoint.x = a, this.dragStartPoint.y = c);
                else if (this.zoomEnabled) {
                this.resetOverlayedCanvas();
                b = this.overlaidCanvasCtx.globalAlpha;
                this.overlaidCanvasCtx.fillStyle = "#A89896";
                var d = e ? this.dragStartPoint.x : this.plotArea.x1,
                    g = f ? this.dragStartPoint.y : this.plotArea.y1,
                    h = e ? a - this.dragStartPoint.x : this.plotArea.x2 - this.plotArea.x1,
                    p = f ? c - this.dragStartPoint.y : this.plotArea.y2 - this.plotArea.y1;
                this.validateRegion(d, g, e ? a : this.plotArea.x2 -
                    this.plotArea.x1, f ? c : this.plotArea.y2 - this.plotArea.y1, "xy" !== this.zoomType).isValid && (this.resetOverlayedCanvas(), this.overlaidCanvasCtx.fillStyle = "#99B2B5");
                this.overlaidCanvasCtx.globalAlpha = 0.7;
                this.overlaidCanvasCtx.fillRect(d, g, h, p);
                this.overlaidCanvasCtx.globalAlpha = b
            }
        } else this._toolTip.mouseMoveHandler(a, c)
    };
    z.prototype._zoomPanToSelectedRegion = function(a, c, b, d, e) {
        a = this.validateRegion(a, c, b, d, e);
        c = a.axesWithValidRange;
        b = a.axesRanges;
        if (a.isValid)
            for (d = 0; d < c.length; d++) e = b[d], c[d].setViewPortRange(e.val1,
                e.val2);
        return a.isValid
    };
    z.prototype.validateRegion = function(a, c, b, d, e) {
        e = e || !1;
        var f = 0 <= this.zoomType.indexOf("x"),
            g = 0 <= this.zoomType.indexOf("y"),
            h = !1,
            p = [],
            k = [],
            n = [];
        this.axisX && f && k.push(this.axisX);
        this.axisY && g && k.push(this.axisY);
        this.axisY2 && g && k.push(this.axisY2);
        for (f = 0; f < k.length; f++) {
            var g = k[f],
                m = g.convertPixelToValue({
                    x: a,
                    y: c
                }),
                l = g.convertPixelToValue({
                    x: b,
                    y: d
                });
            if (m > l) var q = l,
                l = m,
                m = q;
            if (isFinite(g.dataInfo.minDiff))
                if (!(g.logarithmic && l / m < Math.pow(g.dataInfo.minDiff, 3) || !g.logarithmic &&
                        Math.abs(l - m) < 3 * Math.abs(g.dataInfo.minDiff) || m < g.minimum || l > g.maximum)) p.push(g), n.push({
                    val1: m,
                    val2: l
                }), h = !0;
                else if (!e) {
                h = !1;
                break
            }
        }
        return {
            isValid: h,
            axesWithValidRange: p,
            axesRanges: n
        }
    };
    z.prototype.preparePlotArea = function() {
        var a = this.plotArea,
            c = this.axisY ? this.axisY : this.axisY2;
        !t && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
        this.axisX && c ? (a.x1 = this.axisX.lineCoordinates.x1 < this.axisX.lineCoordinates.x2 ? this.axisX.lineCoordinates.x1 : c.lineCoordinates.x1, a.y1 = this.axisX.lineCoordinates.y1 < c.lineCoordinates.y1 ?
            this.axisX.lineCoordinates.y1 : c.lineCoordinates.y1, a.x2 = this.axisX.lineCoordinates.x2 > c.lineCoordinates.x2 ? this.axisX.lineCoordinates.x2 : c.lineCoordinates.x2, a.y2 = this.axisX.lineCoordinates.y2 > this.axisX.lineCoordinates.y1 ? this.axisX.lineCoordinates.y2 : c.lineCoordinates.y2, a.width = a.x2 - a.x1, a.height = a.y2 - a.y1) : (c = this.layoutManager.getFreeSpace(), a.x1 = c.x1, a.x2 = c.x2, a.y1 = c.y1, a.y2 = c.y2, a.width = c.width, a.height = c.height);
        t || (a.canvas.width = a.width, a.canvas.height = a.height, a.canvas.style.left = a.x1 +
            "px", a.canvas.style.top = a.y1 + "px", (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1));
        a.layoutManager = new da(a.x1, a.y1, a.x2, a.y2, 2)
    };
    z.prototype.getPixelCoordinatesOnPlotArea = function(a, c) {
        return {
            x: this.axisX.getPixelCoordinatesOnAxis(a).x,
            y: this.axisY.getPixelCoordinatesOnAxis(c).y
        }
    };
    z.prototype.renderIndexLabels = function(a) {
        a = a || this.plotArea.ctx;
        for (var c = this.plotArea, b = 0, d = 0, e = 0, f = 0, g = b = f = d = e = 0, h = 0, p = 0; p < this._indexLabels.length; p++) {
            var k = this._indexLabels[p],
                n = k.chartType.toLowerCase(),
                m, l, q = Q("indexLabelFontColor",
                    k.dataPoint, k.dataSeries),
                g = Q("indexLabelFontSize", k.dataPoint, k.dataSeries),
                h = Q("indexLabelFontFamily", k.dataPoint, k.dataSeries);
            m = Q("indexLabelFontStyle", k.dataPoint, k.dataSeries);
            l = Q("indexLabelFontWeight", k.dataPoint, k.dataSeries);
            var f = Q("indexLabelBackgroundColor", k.dataPoint, k.dataSeries),
                d = Q("indexLabelMaxWidth", k.dataPoint, k.dataSeries),
                e = Q("indexLabelWrap", k.dataPoint, k.dataSeries),
                r = Q("indexLabelLineDashType", k.dataPoint, k.dataSeries),
                s = Q("indexLabelLineColor", k.dataPoint, k.dataSeries),
                y = x(k.dataPoint.indexLabelLineThickness) ? x(k.dataSeries._options.indexLabelLineThickness) ? 0 : k.dataSeries._options.indexLabelLineThickness : k.dataPoint.indexLabelLineThickness,
                b = 0 < y ? Math.min(10, ("normal" === this.plotInfo.axisPlacement ? this.plotArea.height : this.plotArea.width) << 0) : 0,
                u = {
                    percent: null,
                    total: null
                },
                v = null;
            if (0 <= k.dataSeries.type.indexOf("stacked") || "pie" === k.dataSeries.type || "doughnut" === k.dataSeries.type) u = this.getPercentAndTotal(k.dataSeries, k.dataPoint);
            if (k.dataSeries.indexLabelFormatter ||
                k.dataPoint.indexLabelFormatter) v = {
                chart: this._publicChartReference,
                dataSeries: k.dataSeries,
                dataPoint: k.dataPoint,
                index: k.indexKeyword,
                total: u.total,
                percent: u.percent
            };
            var w = k.dataPoint.indexLabelFormatter ? k.dataPoint.indexLabelFormatter(v) : k.dataPoint.indexLabel ? this.replaceKeywordsWithValue(k.dataPoint.indexLabel, k.dataPoint, k.dataSeries, null, k.indexKeyword) : k.dataSeries.indexLabelFormatter ? k.dataSeries.indexLabelFormatter(v) : k.dataSeries.indexLabel ? this.replaceKeywordsWithValue(k.dataSeries.indexLabel,
                k.dataPoint, k.dataSeries, null, k.indexKeyword) : null;
            if (null !== w && "" !== w) {
                var u = Q("indexLabelPlacement", k.dataPoint, k.dataSeries),
                    v = Q("indexLabelOrientation", k.dataPoint, k.dataSeries),
                    t = k.direction,
                    R = k.dataSeries.axisX,
                    A = k.dataSeries.axisY,
                    z = !1,
                    q = new L(a, {
                        x: 0,
                        y: 0,
                        maxWidth: d ? d : 0.5 * this.width,
                        maxHeight: e ? 5 * g : 1.5 * g,
                        angle: "horizontal" === v ? 0 : -90,
                        text: w,
                        padding: 0,
                        backgroundColor: f,
                        horizontalAlign: "left",
                        fontSize: g,
                        fontFamily: h,
                        fontWeight: l,
                        fontColor: q,
                        fontStyle: m,
                        textBaseline: "top"
                    });
                q.measureText();
                if (0 <=
                    n.indexOf("line") || 0 <= n.indexOf("area") || 0 <= n.indexOf("bubble") || 0 <= n.indexOf("scatter")) {
                    if (k.dataPoint.x < R.viewportMinimum || k.dataPoint.x > R.viewportMaximum || k.dataPoint.y < A.viewportMinimum || k.dataPoint.y > A.viewportMaximum) continue
                } else if (0 <= n.indexOf("column")) {
                    if (k.dataPoint.x < R.viewportMinimum || k.dataPoint.x > R.viewportMaximum || k.bounds.y1 > c.y2 || k.bounds.y2 < c.y1) continue
                } else if (0 <= n.indexOf("bar")) {
                    if (k.dataPoint.x < R.viewportMinimum || k.dataPoint.x > R.viewportMaximum || k.bounds.x1 > c.x2 || k.bounds.x2 <
                        c.x1) continue
                } else if (k.dataPoint.x < R.viewportMinimum || k.dataPoint.x > R.viewportMaximum) continue;
                d = f = 2;
                "horizontal" === v ? (g = q.width, h = q.height) : (h = q.width, g = q.height);
                if ("normal" === this.plotInfo.axisPlacement) {
                    if (0 <= n.indexOf("line") || 0 <= n.indexOf("area")) u = "auto", f = 4;
                    else if (0 <= n.indexOf("stacked")) "auto" === u && (u = "inside");
                    else if ("bubble" === n || "scatter" === n) u = "inside";
                    m = k.point.x - g / 2;
                    "inside" !== u ? (d = c.y1, e = c.y2, 0 < t ? (l = k.point.y - h - f - b, l < d && (l = "auto" === u ? Math.max(k.point.y, d) + f + b : d + f + b, z = l + h > k.point.y)) :
                        (l = k.point.y + f + b, l > e - h - f - b && (l = "auto" === u ? Math.min(k.point.y, e) - h - f - b : e - h - f - b, z = l < k.point.y))) : (d = Math.max(k.bounds.y1, c.y1), e = Math.min(k.bounds.y2, c.y2), b = 0 <= n.indexOf("range") ? 0 < t ? Math.max(k.bounds.y1, c.y1) + h / 2 + f : Math.min(k.bounds.y2, c.y2) - h / 2 - f : (Math.max(k.bounds.y1, c.y1) + Math.min(k.bounds.y2, c.y2)) / 2, 0 < t ? (l = Math.max(k.point.y, b) - h / 2, l < d && ("bubble" === n || "scatter" === n) && (l = Math.max(k.point.y - h - f, c.y1 + f))) : (l = Math.min(k.point.y, b) - h / 2, l > e - h - f && ("bubble" === n || "scatter" === n) && (l = Math.min(k.point.y +
                        f, c.y2 - h - f))), l = Math.min(l, e - h))
                } else 0 <= n.indexOf("line") || 0 <= n.indexOf("area") || 0 <= n.indexOf("scatter") ? (u = "auto", d = 4) : 0 <= n.indexOf("stacked") ? "auto" === u && (u = "inside") : "bubble" === n && (u = "inside"), l = k.point.y - h / 2, "inside" !== u ? (f = c.x1, e = c.x2, 0 > t ? (m = k.point.x - g - d - b, m < f && (m = "auto" === u ? Math.max(k.point.x, f) + d + b : f + d + b, z = m + g > k.point.x)) : (m = k.point.x + d + b, m > e - g - d - b && (m = "auto" === u ? Math.min(k.point.x, e) - g - d - b : e - g - d - b, z = m < k.point.x))) : (f = Math.max(k.bounds.x1, c.x1), Math.min(k.bounds.x2, c.x2), b = 0 <= n.indexOf("range") ?
                    0 > t ? Math.max(k.bounds.x1, c.x1) + g / 2 + d : Math.min(k.bounds.x2, c.x2) - g / 2 - d : (Math.max(k.bounds.x1, c.x1) + Math.min(k.bounds.x2, c.x2)) / 2, m = 0 > t ? Math.max(k.point.x, b) - g / 2 : Math.min(k.point.x, b) - g / 2, m = Math.max(m, f));
                "vertical" === v && (l += h);
                q.x = m;
                q.y = l;
                q.render(!0);
                y && ("inside" !== u && (0 > n.indexOf("bar") && k.point.x > c.x1 && k.point.x < c.x2 || !z) && (0 > n.indexOf("column") && k.point.y > c.y1 && k.point.y < c.y2 || !z)) && (a.lineWidth = y, a.strokeStyle = s ? s : "gray", a.setLineDash && a.setLineDash(D(r, y)), a.beginPath(), a.moveTo(k.point.x, k.point.y),
                    0 <= n.indexOf("bar") ? a.lineTo(m + (0 < k.direction ? 0 : g), l + ("horizontal" === v ? h : -h) / 2) : 0 <= n.indexOf("column") ? a.lineTo(m + g / 2, l + ((0 < k.direction ? h : -h) + ("horizontal" === v ? h : -h)) / 2) : a.lineTo(m + g / 2, l + ((l < k.point.y ? h : -h) + ("horizontal" === v ? h : -h)) / 2), a.stroke())
            }
        }
        return {
            source: a,
            dest: this.plotArea.ctx,
            animationCallback: F.fadeInAnimation,
            easingFunction: F.easing.easeInQuad,
            animationBase: 0,
            startTimePercent: 0.7
        }
    };
    z.prototype.renderLine = function(a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b =
                this._eventManager.ghostCtx;
            c.save();
            var d = this.plotArea;
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            for (var d = [], e = 0; e < a.dataSeriesIndexes.length; e++) {
                var f = a.dataSeriesIndexes[e],
                    g = this.data[f];
                c.lineWidth = g.lineThickness;
                var h = g.dataPoints,
                    p = "solid";
                if (c.setLineDash) {
                    var k = D(g.nullDataLineDashType, g.lineThickness),
                        p = g.lineDashType,
                        n = D(p, g.lineThickness);
                    c.setLineDash(n)
                }
                var m = g.id;
                this._eventManager.objectMap[m] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: f
                };
                m = C(m);
                b.strokeStyle = m;
                b.lineWidth =
                    0 < g.lineThickness ? Math.max(g.lineThickness, 4) : 0;
                var m = g._colorSet,
                    l = m = g._options.lineColor ? g._options.lineColor : m[0];
                c.strokeStyle = m;
                var q = !0,
                    r = 0,
                    s, y;
                c.beginPath();
                if (0 < h.length) {
                    for (var u = !1, r = 0; r < h.length; r++)
                        if (s = h[r].x.getTime ? h[r].x.getTime() : h[r].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax && (!g.connectNullData || !u)))
                            if ("number" !== typeof h[r].y) 0 < r && !(g.connectNullData || u || q) && (c.stroke(), t && b.stroke()), u = !0;
                            else {
                                s = a.axisX.convertValueToPixel(s);
                                y = a.axisY.convertValueToPixel(h[r].y);
                                var v = g.dataPointIds[r];
                                this._eventManager.objectMap[v] = {
                                    id: v,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: f,
                                    dataPointIndex: r,
                                    x1: s,
                                    y1: y
                                };
                                q || u ? (!q && g.connectNullData ? (c.setLineDash && (g._options.nullDataLineDashType || p === g.lineDashType && g.lineDashType !== g.nullDataLineDashType) && (c.stroke(), p = g.nullDataLineDashType, c.setLineDash(k)), c.lineTo(s, y), t && b.lineTo(s, y)) : (c.beginPath(), c.moveTo(s, y), t && (b.beginPath(), b.moveTo(s, y))), u = q = !1) : (c.lineTo(s, y), t && b.lineTo(s, y), 0 == r % 500 && (c.stroke(), c.beginPath(), c.moveTo(s,
                                    y), t && (b.stroke(), b.beginPath(), b.moveTo(s, y))));
                                r < h.length - 1 && (l !== (h[r].lineColor || m) || p !== (h[r].lineDashType || g.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(s, y), l = h[r].lineColor || m, c.strokeStyle = l, c.setLineDash && (h[r].lineDashType ? (p = h[r].lineDashType, c.setLineDash(D(p, g.lineThickness))) : (p = g.lineDashType, c.setLineDash(n))));
                                if (0 < h[r].markerSize || 0 < g.markerSize) {
                                    var w = g.getMarkerProperties(r, s, y, c);
                                    d.push(w);
                                    v = C(v);
                                    t && d.push({
                                        x: s,
                                        y: y,
                                        ctx: b,
                                        type: w.type,
                                        size: w.size,
                                        color: v,
                                        borderColor: v,
                                        borderThickness: w.borderThickness
                                    })
                                }(h[r].indexLabel ||
                                    g.indexLabel || h[r].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "line",
                                    dataPoint: h[r],
                                    dataSeries: g,
                                    point: {
                                        x: s,
                                        y: y
                                    },
                                    direction: 0 > h[r].y === a.axisY.reversed ? 1 : -1,
                                    color: m
                                })
                            }
                    c.stroke();
                    t && b.stroke()
                }
            }
            O.drawMarkers(d);
            c.restore();
            c.beginPath();
            t && b.beginPath();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: F.xClipAnimation,
                easingFunction: F.easing.linear,
                animationBase: 0
            }
        }
    };
    z.prototype.renderStepLine = function(a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >=
                a.dataSeriesIndexes.length)) {
            var b = this._eventManager.ghostCtx;
            c.save();
            var d = this.plotArea;
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            for (var d = [], e = 0; e < a.dataSeriesIndexes.length; e++) {
                var f = a.dataSeriesIndexes[e],
                    g = this.data[f];
                c.lineWidth = g.lineThickness;
                var h = g.dataPoints,
                    p = "solid";
                if (c.setLineDash) {
                    var k = D(g.nullDataLineDashType, g.lineThickness),
                        p = g.lineDashType,
                        n = D(p, g.lineThickness);
                    c.setLineDash(n)
                }
                var m = g.id;
                this._eventManager.objectMap[m] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: f
                };
                m = C(m);
                b.strokeStyle = m;
                b.lineWidth = 0 < g.lineThickness ? Math.max(g.lineThickness, 4) : 0;
                var m = g._colorSet,
                    l = m = g._options.lineColor ? g._options.lineColor : m[0];
                c.strokeStyle = m;
                var q = !0,
                    r = 0,
                    s, y;
                c.beginPath();
                if (0 < h.length) {
                    for (var u = !1, r = 0; r < h.length; r++)
                        if (s = h[r].getTime ? h[r].x.getTime() : h[r].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax && (!g.connectNullData || !u)))
                            if ("number" !== typeof h[r].y) 0 < r && !(g.connectNullData || u || q) && (c.stroke(), t && b.stroke()), u = !0;
                            else {
                                var v = y;
                                s = a.axisX.convertValueToPixel(s);
                                y = a.axisY.convertValueToPixel(h[r].y);
                                var w = g.dataPointIds[r];
                                this._eventManager.objectMap[w] = {
                                    id: w,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: f,
                                    dataPointIndex: r,
                                    x1: s,
                                    y1: y
                                };
                                q || u ? (!q && g.connectNullData ? (c.setLineDash && (g._options.nullDataLineDashType || p === g.lineDashType && g.lineDashType !== g.nullDataLineDashType) && (c.stroke(), p = g.nullDataLineDashType, c.setLineDash(k)), c.lineTo(s, v), c.lineTo(s, y), t && (b.lineTo(s, v), b.lineTo(s, y))) : (c.beginPath(), c.moveTo(s, y), t && (b.beginPath(), b.moveTo(s, y))), u = q = !1) : (c.lineTo(s,
                                    v), t && b.lineTo(s, v), c.lineTo(s, y), t && b.lineTo(s, y), 0 == r % 500 && (c.stroke(), c.beginPath(), c.moveTo(s, y), t && (b.stroke(), b.beginPath(), b.moveTo(s, y))));
                                r < h.length - 1 && (l !== (h[r].lineColor || m) || p !== (h[r].lineDashType || g.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(s, y), l = h[r].lineColor || m, c.strokeStyle = l, c.setLineDash && (h[r].lineDashType ? (p = h[r].lineDashType, c.setLineDash(D(p, g.lineThickness))) : (p = g.lineDashType, c.setLineDash(n))));
                                if (0 < h[r].markerSize || 0 < g.markerSize) v = g.getMarkerProperties(r, s, y,
                                    c), d.push(v), w = C(w), t && d.push({
                                    x: s,
                                    y: y,
                                    ctx: b,
                                    type: v.type,
                                    size: v.size,
                                    color: w,
                                    borderColor: w,
                                    borderThickness: v.borderThickness
                                });
                                (h[r].indexLabel || g.indexLabel || h[r].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stepLine",
                                    dataPoint: h[r],
                                    dataSeries: g,
                                    point: {
                                        x: s,
                                        y: y
                                    },
                                    direction: 0 > h[r].y === a.axisY.reversed ? 1 : -1,
                                    color: m
                                })
                            }
                    c.stroke();
                    t && b.stroke()
                }
            }
            O.drawMarkers(d);
            c.restore();
            c.beginPath();
            t && b.beginPath();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: F.xClipAnimation,
                easingFunction: F.easing.linear,
                animationBase: 0
            }
        }
    };
    z.prototype.renderSpline = function(a) {
        function c(a) {
            a = ma(a, 2);
            if (0 < a.length) {
                b.beginPath();
                t && d.beginPath();
                b.moveTo(a[0].x, a[0].y);
                a[0].newStrokeStyle && (b.strokeStyle = a[0].newStrokeStyle);
                a[0].newLineDashArray && b.setLineDash(a[0].newLineDashArray);
                t && d.moveTo(a[0].x, a[0].y);
                for (var c = 0; c < a.length - 3; c += 3)
                    if (b.bezierCurveTo(a[c + 1].x, a[c + 1].y, a[c + 2].x, a[c + 2].y, a[c + 3].x, a[c + 3].y), t && d.bezierCurveTo(a[c + 1].x, a[c + 1].y, a[c + 2].x, a[c + 2].y, a[c + 3].x, a[c + 3].y),
                        0 < c && 0 === c % 3E3 || a[c + 3].newStrokeStyle || a[c + 3].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(a[c + 3].x, a[c + 3].y), a[c + 3].newStrokeStyle && (b.strokeStyle = a[c + 3].newStrokeStyle), a[c + 3].newLineDashArray && b.setLineDash(a[c + 3].newLineDashArray), t && (d.stroke(), d.beginPath(), d.moveTo(a[c + 3].x, a[c + 3].y));
                b.stroke();
                t && d.stroke()
            }
        }
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx;
            b.save();
            var e = this.plotArea;
            b.beginPath();
            b.rect(e.x1, e.y1, e.width,
                e.height);
            b.clip();
            for (var e = [], f = 0; f < a.dataSeriesIndexes.length; f++) {
                var g = a.dataSeriesIndexes[f],
                    h = this.data[g];
                b.lineWidth = h.lineThickness;
                var p = h.dataPoints,
                    k = "solid";
                if (b.setLineDash) {
                    var n = D(h.nullDataLineDashType, h.lineThickness),
                        k = h.lineDashType,
                        m = D(k, h.lineThickness);
                    b.setLineDash(m)
                }
                var l = h.id;
                this._eventManager.objectMap[l] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: g
                };
                l = C(l);
                d.strokeStyle = l;
                d.lineWidth = 0 < h.lineThickness ? Math.max(h.lineThickness, 4) : 0;
                var l = h._colorSet,
                    q = l = h._options.lineColor ?
                    h._options.lineColor : l[0];
                b.strokeStyle = l;
                var r = 0,
                    s, y, u = [];
                b.beginPath();
                if (0 < p.length)
                    for (y = !1, r = 0; r < p.length; r++)
                        if (s = p[r].getTime ? p[r].x.getTime() : p[r].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax && (!h.connectNullData || !y)))
                            if ("number" !== typeof p[r].y) 0 < r && !y && (h.connectNullData ? b.setLineDash && (0 < u.length && (h._options.nullDataLineDashType || !p[r - 1].lineDashType)) && (u[u.length - 1].newLineDashArray = n, k = h.nullDataLineDashType) : (c(u), u = [])), y = !0;
                            else {
                                s = a.axisX.convertValueToPixel(s);
                                y = a.axisY.convertValueToPixel(p[r].y);
                                var v = h.dataPointIds[r];
                                this._eventManager.objectMap[v] = {
                                    id: v,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: g,
                                    dataPointIndex: r,
                                    x1: s,
                                    y1: y
                                };
                                u[u.length] = {
                                    x: s,
                                    y: y
                                };
                                r < p.length - 1 && (q !== (p[r].lineColor || l) || k !== (p[r].lineDashType || h.lineDashType)) && (q = p[r].lineColor || l, u[u.length - 1].newStrokeStyle = q, b.setLineDash && (p[r].lineDashType ? (k = p[r].lineDashType, u[u.length - 1].newLineDashArray = D(k, h.lineThickness)) : (k = h.lineDashType, u[u.length - 1].newLineDashArray = m)));
                                if (0 < p[r].markerSize ||
                                    0 < h.markerSize) {
                                    var w = h.getMarkerProperties(r, s, y, b);
                                    e.push(w);
                                    v = C(v);
                                    t && e.push({
                                        x: s,
                                        y: y,
                                        ctx: d,
                                        type: w.type,
                                        size: w.size,
                                        color: v,
                                        borderColor: v,
                                        borderThickness: w.borderThickness
                                    })
                                }(p[r].indexLabel || h.indexLabel || p[r].indexLabelFormatter || h.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "spline",
                                    dataPoint: p[r],
                                    dataSeries: h,
                                    point: {
                                        x: s,
                                        y: y
                                    },
                                    direction: 0 > p[r].y === a.axisY.reversed ? 1 : -1,
                                    color: l
                                });
                                y = !1
                            }
                c(u)
            }
            O.drawMarkers(e);
            b.restore();
            b.beginPath();
            t && d.beginPath();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: F.xClipAnimation,
                easingFunction: F.easing.linear,
                animationBase: 0
            }
        }
    };
    var M = function(a, c, b, d, e, f, g, h, p, k, n, m, l) {
        "undefined" === typeof l && (l = 1);
        g = g || 0;
        h = h || "black";
        var q = 15 < d - c && 15 < e - b ? 8 : 0.35 * Math.min(d - c, e - b);
        a.beginPath();
        a.moveTo(c, b);
        a.save();
        a.fillStyle = f;
        a.globalAlpha = l;
        a.fillRect(c, b, d - c, e - b);
        a.globalAlpha = 1;
        0 < g && (l = 0 === g % 2 ? 0 : 0.5, a.beginPath(), a.lineWidth = g, a.strokeStyle = h, a.moveTo(c, b), a.rect(c - l, b - l, d - c + 2 * l, e - b + 2 * l), a.stroke());
        a.restore();
        !0 === p && (a.save(), a.beginPath(), a.moveTo(c,
            b), a.lineTo(c + q, b + q), a.lineTo(d - q, b + q), a.lineTo(d, b), a.closePath(), g = a.createLinearGradient((d + c) / 2, b + q, (d + c) / 2, b), g.addColorStop(0, f), g.addColorStop(1, "rgba(255, 255, 255, .4)"), a.fillStyle = g, a.fill(), a.restore());
        !0 === k && (a.save(), a.beginPath(), a.moveTo(c, e), a.lineTo(c + q, e - q), a.lineTo(d - q, e - q), a.lineTo(d, e), a.closePath(), g = a.createLinearGradient((d + c) / 2, e - q, (d + c) / 2, e), g.addColorStop(0, f), g.addColorStop(1, "rgba(255, 255, 255, .4)"), a.fillStyle = g, a.fill(), a.restore());
        !0 === n && (a.save(), a.beginPath(),
            a.moveTo(c, b), a.lineTo(c + q, b + q), a.lineTo(c + q, e - q), a.lineTo(c, e), a.closePath(), g = a.createLinearGradient(c + q, (e + b) / 2, c, (e + b) / 2), g.addColorStop(0, f), g.addColorStop(1, "rgba(255, 255, 255, 0.1)"), a.fillStyle = g, a.fill(), a.restore());
        !0 === m && (a.save(), a.beginPath(), a.moveTo(d, b), a.lineTo(d - q, b + q), a.lineTo(d - q, e - q), a.lineTo(d, e), g = a.createLinearGradient(d - q, (e + b) / 2, d, (e + b) / 2), g.addColorStop(0, f), g.addColorStop(1, "rgba(255, 255, 255, 0.1)"), a.fillStyle = g, g.addColorStop(0, f), g.addColorStop(1, "rgba(255, 255, 255, 0.1)"),
            a.fillStyle = g, a.fill(), a.closePath(), a.restore())
    };
    z.prototype.renderColumn = function(a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null,
                d = this.plotArea,
                e = 0,
                f, g, h, p = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                e = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1,
                k = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width /
                    a.plotType.totalDataSeries)) << 0,
                n = a.axisX.dataInfo.minDiff;
            isFinite(n) || (n = 0.3 * (a.axisX.logarithmic ? a.axisX.viewportMaximum / a.axisX.viewportMinimum : Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum)));
            n = this.dataPointWidth ? this.dataPointWidth : 0.9 * (d.width * (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.viewportMaximum / a.axisX.viewportMinimum) : Math.abs(n) / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && e > k && (e = Math.min(this.dataPointWidth ?
                this.dataPointWidth : Infinity, k));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && k < e) && (k = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, e));
            n < e && (n = e);
            n > k && (n = k);
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (d = 0; d < a.dataSeriesIndexes.length; d++) {
                var k = a.dataSeriesIndexes[d],
                    m = this.data[k],
                    l = m.dataPoints;
                if (0 < l.length)
                    for (var q = 5 < n && m.bevelEnabled ? !0 : !1, e = 0; e < l.length; e++)
                        if (l[e].getTime ? h = l[e].x.getTime() : h = l[e].x, !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && "number" === typeof l[e].y) {
                            f = a.axisX.convertValueToPixel(h);
                            g = a.axisY.convertValueToPixel(l[e].y);
                            f = a.axisX.reversed ? f + a.plotType.totalDataSeries * n / 2 - (a.previousDataSeriesCount + d) * n << 0 : f - a.plotType.totalDataSeries * n / 2 + (a.previousDataSeriesCount + d) * n << 0;
                            var r = a.axisX.reversed ? f - n << 0 : f + n << 0,
                                s;
                            0 <= l[e].y ? s = p : (s =
                                g, g = p);
                            g > s && (b = g, g = s, s = b);
                            b = l[e].color ? l[e].color : m._colorSet[e % m._colorSet.length];
                            M(c, f, g, r, s, b, 0, null, q && 0 <= l[e].y, 0 > l[e].y && q, !1, !1, m.fillOpacity);
                            b = m.dataPointIds[e];
                            this._eventManager.objectMap[b] = {
                                id: b,
                                objectType: "dataPoint",
                                dataSeriesIndex: k,
                                dataPointIndex: e,
                                x1: f,
                                y1: g,
                                x2: r,
                                y2: s
                            };
                            b = C(b);
                            t && M(this._eventManager.ghostCtx, f, g, r, s, b, 0, null, !1, !1, !1, !1);
                            (l[e].indexLabel || m.indexLabel || l[e].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "column",
                                dataPoint: l[e],
                                dataSeries: m,
                                point: {
                                    x: f + (r - f) / 2,
                                    y: 0 > l[e].y === a.axisY.reversed ? g : s
                                },
                                direction: 0 > l[e].y === a.axisY.reversed ? 1 : -1,
                                bounds: {
                                    x1: f,
                                    y1: Math.min(g, s),
                                    x2: r,
                                    y2: Math.max(g, s)
                                },
                                color: b
                            })
                        }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            a = Math.min(p, a.axisY.boundingRect.y2);
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: F.yScaleAnimation,
                easingFunction: F.easing.easeOutQuart,
                animationBase: a
            }
        }
    };
    z.prototype.renderStackedColumn = function(a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b =
                null,
                d = this.plotArea,
                e = [],
                f = [],
                g = [],
                h = 0,
                p, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                h = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1,
                n = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0,
                m = a.axisX.dataInfo.minDiff;
            isFinite(m) || (m = 0.3 * (a.axisX.logarithmic ? a.axisX.viewportMaximum / a.axisX.viewportMinimum : Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum)));
            m = this.dataPointWidth ?
                this.dataPointWidth : 0.9 * (d.width * (a.axisX.logarithmic ? Math.log(m) / Math.log(a.axisX.viewportMaximum / a.axisX.viewportMinimum) : Math.abs(m) / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && h > n && (h = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, n));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && n < h) && (n = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, h));
            m < h && (m = h);
            m > n && (m = n);
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (n = 0; n < a.dataSeriesIndexes.length; n++) {
                var l = a.dataSeriesIndexes[n],
                    q = this.data[l],
                    r = q.dataPoints;
                if (0 < r.length) {
                    var s = 5 < m && q.bevelEnabled ? !0 : !1;
                    c.strokeStyle = "#4572A7 ";
                    for (h = 0; h < r.length; h++)
                        if (b = r[h].x.getTime ? r[h].x.getTime() : r[h].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) &&
                            "number" === typeof r[h].y) {
                            var d = a.axisX.convertValueToPixel(b),
                                y = d - a.plotType.plotUnits.length * m / 2 + a.index * m << 0,
                                u = y + m << 0,
                                v;
                            if (a.axisY.logarithmic) g[b] = r[h].y + (g[b] ? g[b] : 0), 0 < g[b] && (p = a.axisY.convertValueToPixel(g[b]), v = e[b] ? e[b] : k, e[b] = p);
                            else if (p = a.axisY.convertValueToPixel(r[h].y), 0 <= r[h].y) {
                                var w = e[b] ? e[b] : 0;
                                p -= w;
                                v = k - w;
                                e[b] = w + (v - p)
                            } else w = f[b] ? f[b] : 0, v = p + w, p = k + w, f[b] = w + (v - p);
                            b = r[h].color ? r[h].color : q._colorSet[h % q._colorSet.length];
                            M(c, y, p, u, v, b, 0, null, s && 0 <= r[h].y, 0 > r[h].y && s, !1, !1, q.fillOpacity);
                            b = q.dataPointIds[h];
                            this._eventManager.objectMap[b] = {
                                id: b,
                                objectType: "dataPoint",
                                dataSeriesIndex: l,
                                dataPointIndex: h,
                                x1: y,
                                y1: p,
                                x2: u,
                                y2: v
                            };
                            b = C(b);
                            t && M(this._eventManager.ghostCtx, y, p, u, v, b, 0, null, !1, !1, !1, !1);
                            (r[h].indexLabel || q.indexLabel || r[h].indexLabelFormatter || q.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "stackedColumn",
                                dataPoint: r[h],
                                dataSeries: q,
                                point: {
                                    x: d,
                                    y: 0 <= r[h].y ? p : v
                                },
                                direction: 0 > r[h].y === a.axisY.reversed ? 1 : -1,
                                bounds: {
                                    x1: y,
                                    y1: Math.min(p, v),
                                    x2: u,
                                    y2: Math.max(p, v)
                                },
                                color: b
                            })
                        }
                }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            a = Math.min(k, a.axisY.boundingRect.y2);
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: F.yScaleAnimation,
                easingFunction: F.easing.easeOutQuart,
                animationBase: a
            }
        }
    };
    z.prototype.renderStackedColumn100 = function(a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null,
                d = this.plotArea,
                e = [],
                f = [],
                g = [],
                h = 0,
                p, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                h = this.dataPointMinWidth ? this.dataPointMinWidth :
                this.dataPointWidth ? this.dataPointWidth : 1,
                n = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0,
                m = a.axisX.dataInfo.minDiff;
            isFinite(m) || (m = 0.3 * (a.axisX.logarithmic ? a.axisX.viewportMaximum / a.axisX.viewportMinimum : Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum)));
            m = this.dataPointWidth ? this.dataPointWidth : 0.9 * (d.width * (a.axisX.logarithmic ? Math.log(m) / Math.log(a.axisX.viewportMaximum / a.axisX.viewportMinimum) : Math.abs(m) / Math.abs(a.axisX.viewportMaximum -
                a.axisX.viewportMinimum)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && h > n && (h = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, n));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && n < h) && (n = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, h));
            m < h && (m = h);
            m > n && (m = n);
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height),
                this._eventManager.ghostCtx.clip());
            for (n = 0; n < a.dataSeriesIndexes.length; n++) {
                var l = a.dataSeriesIndexes[n],
                    q = this.data[l],
                    r = q.dataPoints;
                if (0 < r.length)
                    for (var s = 5 < m && q.bevelEnabled ? !0 : !1, h = 0; h < r.length; h++)
                        if (b = r[h].x.getTime ? r[h].x.getTime() : r[h].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof r[h].y) {
                            d = a.axisX.convertValueToPixel(b);
                            p = 0 !== a.dataPointYSums[b] ? 100 * (r[h].y / a.dataPointYSums[b]) : 0;
                            var y = d - a.plotType.plotUnits.length * m / 2 + a.index * m << 0,
                                u = y + m << 0,
                                v;
                            if (a.axisY.logarithmic) {
                                g[b] = p + (g[b] ? g[b] : 0);
                                if (0 >= g[b]) continue;
                                p = a.axisY.convertValueToPixel(g[b]);
                                v = e[b] ? e[b] : k;
                                e[b] = p
                            } else if (p = a.axisY.convertValueToPixel(p), 0 <= r[h].y) {
                                var w = e[b] ? e[b] : 0;
                                p -= w;
                                v = k - w;
                                e[b] = w + (v - p)
                            } else w = f[b] ? f[b] : 0, v = p + w, p = k + w, f[b] = w + (v - p);
                            b = r[h].color ? r[h].color : q._colorSet[h % q._colorSet.length];
                            M(c, y, p, u, v, b, 0, null, s && 0 <= r[h].y, 0 > r[h].y && s, !1, !1, q.fillOpacity);
                            b = q.dataPointIds[h];
                            this._eventManager.objectMap[b] = {
                                id: b,
                                objectType: "dataPoint",
                                dataSeriesIndex: l,
                                dataPointIndex: h,
                                x1: y,
                                y1: p,
                                x2: u,
                                y2: v
                            };
                            b = C(b);
                            t && M(this._eventManager.ghostCtx, y, p, u, v, b, 0, null, !1, !1, !1, !1);
                            (r[h].indexLabel || q.indexLabel || r[h].indexLabelFormatter || q.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "stackedColumn100",
                                dataPoint: r[h],
                                dataSeries: q,
                                point: {
                                    x: d,
                                    y: 0 <= r[h].y ? p : v
                                },
                                direction: 0 > r[h].y === a.axisY.reversed ? 1 : -1,
                                bounds: {
                                    x1: y,
                                    y1: Math.min(p, v),
                                    x2: u,
                                    y2: Math.max(p, v)
                                },
                                color: b
                            })
                        }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            a = Math.min(k, a.axisY.boundingRect.y2);
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: F.yScaleAnimation,
                easingFunction: F.easing.easeOutQuart,
                animationBase: a
            }
        }
    };
    z.prototype.renderBar = function(a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null,
                d = this.plotArea,
                e = 0,
                f, g, h, p = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                e = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1,
                k = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : Math.min(0.15 *
                    this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0,
                n = a.axisX.dataInfo.minDiff;
            isFinite(n) || (n = 0.3 * (a.axisX.logarithmic ? a.axisX.viewportMaximum / a.axisX.viewportMinimum : Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum)));
            n = this.dataPointWidth ? this.dataPointWidth : 0.9 * (d.height * (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.viewportMaximum / a.axisX.viewportMinimum) : Math.abs(n) / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth &&
                e > k && (e = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, k));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && k < e) && (k = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, e));
            n < e && (n = e);
            n > k && (n = k);
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (d = 0; d < a.dataSeriesIndexes.length; d++) {
                var k =
                    a.dataSeriesIndexes[d],
                    m = this.data[k],
                    l = m.dataPoints;
                if (0 < l.length) {
                    var q = 5 < n && m.bevelEnabled ? !0 : !1;
                    c.strokeStyle = "#4572A7 ";
                    for (e = 0; e < l.length; e++)
                        if (l[e].getTime ? h = l[e].x.getTime() : h = l[e].x, !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && "number" === typeof l[e].y) {
                            g = a.axisX.convertValueToPixel(h);
                            f = a.axisY.convertValueToPixel(l[e].y);
                            g = a.axisX.reversed ? g + a.plotType.totalDataSeries * n / 2 - (a.previousDataSeriesCount + d) * n << 0 : g - a.plotType.totalDataSeries * n / 2 + (a.previousDataSeriesCount +
                                d) * n << 0;
                            var r = a.axisX.reversed ? g - n << 0 : g + n << 0,
                                s;
                            0 <= l[e].y ? s = p : (s = f, f = p);
                            b = l[e].color ? l[e].color : m._colorSet[e % m._colorSet.length];
                            M(c, s, g, f, r, b, 0, null, q, !1, !1, !1, m.fillOpacity);
                            b = m.dataPointIds[e];
                            this._eventManager.objectMap[b] = {
                                id: b,
                                objectType: "dataPoint",
                                dataSeriesIndex: k,
                                dataPointIndex: e,
                                x1: s,
                                y1: g,
                                x2: f,
                                y2: r
                            };
                            b = C(b);
                            t && M(this._eventManager.ghostCtx, s, g, f, r, b, 0, null, !1, !1, !1, !1);
                            (l[e].indexLabel || m.indexLabel || l[e].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "bar",
                                dataPoint: l[e],
                                dataSeries: m,
                                point: {
                                    x: 0 <= l[e].y ? f : s,
                                    y: g + (r - g) / 2
                                },
                                direction: 0 > l[e].y === a.axisY.reversed ? 1 : -1,
                                bounds: {
                                    x1: Math.min(s, f),
                                    y1: g,
                                    x2: Math.max(s, f),
                                    y2: r
                                },
                                color: b
                            })
                        }
                }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            a = Math.max(p, a.axisX.boundingRect.x2);
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: F.xScaleAnimation,
                easingFunction: F.easing.easeOutQuart,
                animationBase: a
            }
        }
    };
    z.prototype.renderStackedBar = function(a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b =
                null,
                d = this.plotArea,
                e = [],
                f = [],
                g = [],
                h = 0,
                p, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                h = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1,
                n = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0,
                m = a.axisX.dataInfo.minDiff;
            isFinite(m) || (m = 0.3 * (a.axisX.logarithmic ? a.axisX.viewportMaximum / a.axisX.viewportMinimum : Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum)));
            m = this.dataPointWidth ?
                this.dataPointWidth : 0.9 * (d.height * (a.axisX.logarithmic ? Math.log(m) / Math.log(a.axisX.viewportMaximum / a.axisX.viewportMinimum) : Math.abs(m) / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && h > n && (h = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, n));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && n < h) && (n = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, h));
            m < h && (m = h);
            m > n && (m = n);
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (n = 0; n < a.dataSeriesIndexes.length; n++) {
                var l = a.dataSeriesIndexes[n],
                    q = this.data[l],
                    r = q.dataPoints;
                if (0 < r.length) {
                    var s = 5 < m && q.bevelEnabled ? !0 : !1;
                    c.strokeStyle = "#4572A7 ";
                    for (h = 0; h < r.length; h++)
                        if (b = r[h].x.getTime ? r[h].x.getTime() : r[h].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) &&
                            "number" === typeof r[h].y) {
                            var d = a.axisX.convertValueToPixel(b),
                                y = d - a.plotType.plotUnits.length * m / 2 + a.index * m << 0,
                                u = y + m << 0,
                                v;
                            if (a.axisY.logarithmic) g[b] = r[h].y + (g[b] ? g[b] : 0), 0 < g[b] && (v = e[b] ? e[b] : k, e[b] = p = a.axisY.convertValueToPixel(g[b]));
                            else if (p = a.axisY.convertValueToPixel(r[h].y), 0 <= r[h].y) {
                                var w = e[b] ? e[b] : 0;
                                v = k + w;
                                p += w;
                                e[b] = w + (p - v)
                            } else w = f[b] ? f[b] : 0, v = p - w, p = k - w, f[b] = w + (p - v);
                            b = r[h].color ? r[h].color : q._colorSet[h % q._colorSet.length];
                            M(c, v, y, p, u, b, 0, null, s, !1, !1, !1, q.fillOpacity);
                            b = q.dataPointIds[h];
                            this._eventManager.objectMap[b] = {
                                id: b,
                                objectType: "dataPoint",
                                dataSeriesIndex: l,
                                dataPointIndex: h,
                                x1: v,
                                y1: y,
                                x2: p,
                                y2: u
                            };
                            b = C(b);
                            t && M(this._eventManager.ghostCtx, v, y, p, u, b, 0, null, !1, !1, !1, !1);
                            (r[h].indexLabel || q.indexLabel || r[h].indexLabelFormatter || q.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "stackedBar",
                                dataPoint: r[h],
                                dataSeries: q,
                                point: {
                                    x: 0 <= r[h].y ? p : v,
                                    y: d
                                },
                                direction: 0 > r[h].y === a.axisY.reversed ? 1 : -1,
                                bounds: {
                                    x1: Math.min(v, p),
                                    y1: y,
                                    x2: Math.max(v, p),
                                    y2: u
                                },
                                color: b
                            })
                        }
                }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            a = Math.max(k, a.axisX.boundingRect.x2);
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: F.xScaleAnimation,
                easingFunction: F.easing.easeOutQuart,
                animationBase: a
            }
        }
    };
    z.prototype.renderStackedBar100 = function(a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null,
                d = this.plotArea,
                e = [],
                f = [],
                g = [],
                h = 0,
                p, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                h = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth :
                1,
                n = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0,
                m = a.axisX.dataInfo.minDiff;
            isFinite(m) || (m = 0.3 * (a.axisX.logarithmic ? a.axisX.viewportMaximum / a.axisX.viewportMinimum : Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum)));
            m = this.dataPointWidth ? this.dataPointWidth : 0.9 * (d.height * (a.axisX.logarithmic ? Math.log(m) / Math.log(a.axisX.viewportMaximum / a.axisX.viewportMinimum) : Math.abs(m) / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum)) /
                a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && h > n && (h = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, n));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && n < h) && (n = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, h));
            m < h && (m = h);
            m > n && (m = n);
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (n = 0; n < a.dataSeriesIndexes.length; n++) {
                var l = a.dataSeriesIndexes[n],
                    q = this.data[l],
                    r = q.dataPoints;
                if (0 < r.length) {
                    var s = 5 < m && q.bevelEnabled ? !0 : !1;
                    c.strokeStyle = "#4572A7 ";
                    for (h = 0; h < r.length; h++)
                        if (b = r[h].x.getTime ? r[h].x.getTime() : r[h].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof r[h].y) {
                            var d = a.axisX.convertValueToPixel(b),
                                y;
                            y = 0 !== a.dataPointYSums[b] ? 100 * (r[h].y / a.dataPointYSums[b]) : 0;
                            var u = d - a.plotType.plotUnits.length * m / 2 + a.index * m << 0,
                                v = u + m << 0;
                            if (a.axisY.logarithmic) {
                                g[b] =
                                    y + (g[b] ? g[b] : 0);
                                if (0 >= g[b]) continue;
                                y = e[b] ? e[b] : k;
                                e[b] = p = a.axisY.convertValueToPixel(g[b])
                            } else if (p = a.axisY.convertValueToPixel(y), 0 <= r[h].y) {
                                var w = e[b] ? e[b] : 0;
                                y = k + w;
                                p += w;
                                e[b] = w + (p - y)
                            } else w = f[b] ? f[b] : 0, y = p - w, p = k - w, f[b] = w + (p - y);
                            b = r[h].color ? r[h].color : q._colorSet[h % q._colorSet.length];
                            M(c, y, u, p, v, b, 0, null, s, !1, !1, !1, q.fillOpacity);
                            b = q.dataPointIds[h];
                            this._eventManager.objectMap[b] = {
                                id: b,
                                objectType: "dataPoint",
                                dataSeriesIndex: l,
                                dataPointIndex: h,
                                x1: y,
                                y1: u,
                                x2: p,
                                y2: v
                            };
                            b = C(b);
                            t && M(this._eventManager.ghostCtx,
                                y, u, p, v, b, 0, null, !1, !1, !1, !1);
                            (r[h].indexLabel || q.indexLabel || r[h].indexLabelFormatter || q.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "stackedBar100",
                                dataPoint: r[h],
                                dataSeries: q,
                                point: {
                                    x: 0 <= r[h].y ? p : y,
                                    y: d
                                },
                                direction: 0 > r[h].y === a.axisY.reversed ? 1 : -1,
                                bounds: {
                                    x1: Math.min(y, p),
                                    y1: u,
                                    x2: Math.max(y, p),
                                    y2: v
                                },
                                color: b
                            })
                        }
                }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            a = Math.max(k, a.axisX.boundingRect.x2);
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: F.xScaleAnimation,
                easingFunction: F.easing.easeOutQuart,
                animationBase: a
            }
        }
    };
    z.prototype.renderArea = function(a) {
        function c() {
            v && (0 < k.lineThickness && b.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? u = y : 0 > a.axisY.viewportMaximum ? u = f.y1 : 0 < a.axisY.viewportMinimum && (u = e.y2), b.lineTo(q, u), b.lineTo(v.x, u), b.closePath(), b.globalAlpha = k.fillOpacity, b.fill(), b.globalAlpha = 1, t && (d.lineTo(q, u), d.lineTo(v.x, u), d.closePath(), d.fill()), b.beginPath(), b.moveTo(q, r), d.beginPath(), d.moveTo(q, r), v = {
                x: q,
                y: r
            })
        }
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx,
                e = a.axisX.lineCoordinates,
                f = a.axisY.lineCoordinates,
                g = [],
                h = this.plotArea;
            b.save();
            t && d.save();
            b.beginPath();
            b.rect(h.x1, h.y1, h.width, h.height);
            b.clip();
            t && (d.beginPath(), d.rect(h.x1, h.y1, h.width, h.height), d.clip());
            for (h = 0; h < a.dataSeriesIndexes.length; h++) {
                var p = a.dataSeriesIndexes[h],
                    k = this.data[p],
                    n = k.dataPoints,
                    g = k.id;
                this._eventManager.objectMap[g] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: p
                };
                g = C(g);
                d.fillStyle = g;
                var g = [],
                    m = !0,
                    l = 0,
                    q, r, s, y = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    u, v = null;
                if (0 < n.length) {
                    var w = k._colorSet[l % k._colorSet.length],
                        x = k._options.lineColor || w,
                        z = x;
                    b.fillStyle = w;
                    b.strokeStyle = x;
                    b.lineWidth = k.lineThickness;
                    var A = "solid";
                    if (b.setLineDash) {
                        var B = D(k.nullDataLineDashType, k.lineThickness),
                            A = k.lineDashType,
                            J = D(A, k.lineThickness);
                        b.setLineDash(J)
                    }
                    for (var I = !0; l < n.length; l++)
                        if (s = n[l].x.getTime ? n[l].x.getTime() : n[l].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax &&
                                (!k.connectNullData || !I)))
                            if ("number" !== typeof n[l].y) k.connectNullData || (I || m) || c(), I = !0;
                            else {
                                q = a.axisX.convertValueToPixel(s);
                                r = a.axisY.convertValueToPixel(n[l].y);
                                m || I ? (!m && k.connectNullData ? (b.setLineDash && (k._options.nullDataLineDashType || A === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (b.stroke(), A = k.nullDataLineDashType, b.setLineDash(B)), b.lineTo(q, r), t && d.lineTo(q, r)) : (b.beginPath(), b.moveTo(q, r), t && (d.beginPath(), d.moveTo(q, r)), v = {
                                    x: q,
                                    y: r
                                }), I = m = !1) : (b.lineTo(q, r), t && d.lineTo(q,
                                    r), 0 == l % 250 && c());
                                l < n.length - 1 && (z !== (n[l].lineColor || x) || A !== (n[l].lineDashType || k.lineDashType)) && (c(), z = n[l].lineColor || x, b.strokeStyle = z, b.setLineDash && (n[l].lineDashType ? (A = n[l].lineDashType, b.setLineDash(D(A, k.lineThickness))) : (A = k.lineDashType, b.setLineDash(J))));
                                var G = k.dataPointIds[l];
                                this._eventManager.objectMap[G] = {
                                    id: G,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: p,
                                    dataPointIndex: l,
                                    x1: q,
                                    y1: r
                                };
                                0 !== n[l].markerSize && (0 < n[l].markerSize || 0 < k.markerSize) && (s = k.getMarkerProperties(l, q, r, b), g.push(s),
                                    G = C(G), t && g.push({
                                        x: q,
                                        y: r,
                                        ctx: d,
                                        type: s.type,
                                        size: s.size,
                                        color: G,
                                        borderColor: G,
                                        borderThickness: s.borderThickness
                                    }));
                                (n[l].indexLabel || k.indexLabel || n[l].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "area",
                                    dataPoint: n[l],
                                    dataSeries: k,
                                    point: {
                                        x: q,
                                        y: r
                                    },
                                    direction: 0 > n[l].y === a.axisY.reversed ? 1 : -1,
                                    color: w
                                })
                            }
                    c();
                    O.drawMarkers(g)
                }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: F.xClipAnimation,
                easingFunction: F.easing.linear,
                animationBase: 0
            }
        }
    };
    z.prototype.renderSplineArea = function(a) {
        function c() {
            var c = ma(u, 2);
            if (0 < c.length) {
                if (0 < k.lineThickness) {
                    b.beginPath();
                    b.moveTo(c[0].x, c[0].y);
                    c[0].newStrokeStyle && (b.strokeStyle = c[0].newStrokeStyle);
                    c[0].newLineDashArray && b.setLineDash(c[0].newLineDashArray);
                    for (var g = 0; g < c.length - 3; g += 3)
                        if (b.bezierCurveTo(c[g + 1].x, c[g + 1].y, c[g + 2].x, c[g + 2].y, c[g + 3].x, c[g + 3].y), t && d.bezierCurveTo(c[g + 1].x, c[g + 1].y, c[g + 2].x, c[g + 2].y, c[g + 3].x, c[g + 3].y), c[g + 3].newStrokeStyle || c[g + 3].newLineDashArray) b.stroke(),
                            b.beginPath(), b.moveTo(c[g + 3].x, c[g + 3].y), c[g + 3].newStrokeStyle && (b.strokeStyle = c[g + 3].newStrokeStyle), c[g + 3].newLineDashArray && b.setLineDash(c[g + 3].newLineDashArray);
                    b.stroke()
                }
                b.beginPath();
                b.moveTo(c[0].x, c[0].y);
                t && (d.beginPath(), d.moveTo(c[0].x, c[0].y));
                for (g = 0; g < c.length - 3; g += 3) b.bezierCurveTo(c[g + 1].x, c[g + 1].y, c[g + 2].x, c[g + 2].y, c[g + 3].x, c[g + 3].y), t && d.bezierCurveTo(c[g + 1].x, c[g + 1].y, c[g + 2].x, c[g + 2].y, c[g + 3].x, c[g + 3].y);
                a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ?
                    s = r : 0 > a.axisY.viewportMaximum ? s = f.y1 : 0 < a.axisY.viewportMinimum && (s = e.y2);
                y = {
                    x: c[0].x,
                    y: c[0].y
                };
                b.lineTo(c[c.length - 1].x, s);
                b.lineTo(y.x, s);
                b.closePath();
                b.globalAlpha = k.fillOpacity;
                b.fill();
                b.globalAlpha = 1;
                t && (d.lineTo(c[c.length - 1].x, s), d.lineTo(y.x, s), d.closePath(), d.fill())
            }
        }
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx,
                e = a.axisX.lineCoordinates,
                f = a.axisY.lineCoordinates,
                g = [],
                h = this.plotArea;
            b.save();
            t && d.save();
            b.beginPath();
            b.rect(h.x1, h.y1, h.width, h.height);
            b.clip();
            t && (d.beginPath(), d.rect(h.x1, h.y1, h.width, h.height), d.clip());
            for (h = 0; h < a.dataSeriesIndexes.length; h++) {
                var p = a.dataSeriesIndexes[h],
                    k = this.data[p],
                    n = k.dataPoints,
                    g = k.id;
                this._eventManager.objectMap[g] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: p
                };
                g = C(g);
                d.fillStyle = g;
                var g = [],
                    m = 0,
                    l, q, r = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    s, y = null,
                    u = [];
                if (0 < n.length) {
                    var v = k._colorSet[m % k._colorSet.length],
                        w = k._options.lineColor || v,
                        x = w;
                    b.fillStyle = v;
                    b.strokeStyle = w;
                    b.lineWidth = k.lineThickness;
                    var z = "solid";
                    if (b.setLineDash) {
                        var A = D(k.nullDataLineDashType, k.lineThickness),
                            z = k.lineDashType,
                            B = D(z, k.lineThickness);
                        b.setLineDash(B)
                    }
                    for (q = !1; m < n.length; m++)
                        if (l = n[m].x.getTime ? n[m].x.getTime() : n[m].x, !(l < a.axisX.dataInfo.viewPortMin || l > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !q)))
                            if ("number" !== typeof n[m].y) 0 < m && !q && (k.connectNullData ? b.setLineDash && (0 < u.length && (k._options.nullDataLineDashType || !n[m - 1].lineDashType)) &&
                                (u[u.length - 1].newLineDashArray = A, z = k.nullDataLineDashType) : (c(), u = [])), q = !0;
                            else {
                                l = a.axisX.convertValueToPixel(l);
                                q = a.axisY.convertValueToPixel(n[m].y);
                                var J = k.dataPointIds[m];
                                this._eventManager.objectMap[J] = {
                                    id: J,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: p,
                                    dataPointIndex: m,
                                    x1: l,
                                    y1: q
                                };
                                u[u.length] = {
                                    x: l,
                                    y: q
                                };
                                m < n.length - 1 && (x !== (n[m].lineColor || w) || z !== (n[m].lineDashType || k.lineDashType)) && (x = n[m].lineColor || w, u[u.length - 1].newStrokeStyle = x, b.setLineDash && (n[m].lineDashType ? (z = n[m].lineDashType, u[u.length -
                                    1].newLineDashArray = D(z, k.lineThickness)) : (z = k.lineDashType, u[u.length - 1].newLineDashArray = B)));
                                if (0 !== n[m].markerSize && (0 < n[m].markerSize || 0 < k.markerSize)) {
                                    var I = k.getMarkerProperties(m, l, q, b);
                                    g.push(I);
                                    J = C(J);
                                    t && g.push({
                                        x: l,
                                        y: q,
                                        ctx: d,
                                        type: I.type,
                                        size: I.size,
                                        color: J,
                                        borderColor: J,
                                        borderThickness: I.borderThickness
                                    })
                                }(n[m].indexLabel || k.indexLabel || n[m].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "splineArea",
                                    dataPoint: n[m],
                                    dataSeries: k,
                                    point: {
                                        x: l,
                                        y: q
                                    },
                                    direction: 0 >
                                        n[m].y === a.axisY.reversed ? 1 : -1,
                                    color: v
                                });
                                q = !1
                            }
                    c();
                    O.drawMarkers(g)
                }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: F.xClipAnimation,
                easingFunction: F.easing.linear,
                animationBase: 0
            }
        }
    };
    z.prototype.renderStepArea = function(a) {
        function c() {
            v && (0 < k.lineThickness && b.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? u = y : 0 > a.axisY.viewportMaximum ? u = f.y1 : 0 < a.axisY.viewportMinimum && (u = e.y2), b.lineTo(q, u), b.lineTo(v.x,
                u), b.closePath(), b.globalAlpha = k.fillOpacity, b.fill(), b.globalAlpha = 1, t && (d.lineTo(q, u), d.lineTo(v.x, u), d.closePath(), d.fill()), b.beginPath(), b.moveTo(q, r), d.beginPath(), d.moveTo(q, r), v = {
                x: q,
                y: r
            })
        }
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx,
                e = a.axisX.lineCoordinates,
                f = a.axisY.lineCoordinates,
                g = [],
                h = this.plotArea;
            b.save();
            t && d.save();
            b.beginPath();
            b.rect(h.x1, h.y1, h.width, h.height);
            b.clip();
            t && (d.beginPath(), d.rect(h.x1, h.y1, h.width,
                h.height), d.clip());
            for (h = 0; h < a.dataSeriesIndexes.length; h++) {
                var p = a.dataSeriesIndexes[h],
                    k = this.data[p],
                    n = k.dataPoints,
                    g = k.id;
                this._eventManager.objectMap[g] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: p
                };
                g = C(g);
                d.fillStyle = g;
                var g = [],
                    m = !0,
                    l = 0,
                    q, r, s, y = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    u, v = null,
                    w = !1;
                if (0 < n.length) {
                    var x = k._colorSet[l % k._colorSet.length],
                        z = k._options.lineColor || x,
                        A = z;
                    b.fillStyle = x;
                    b.strokeStyle = z;
                    b.lineWidth = k.lineThickness;
                    var B = "solid";
                    if (b.setLineDash) {
                        var J =
                            D(k.nullDataLineDashType, k.lineThickness),
                            B = k.lineDashType,
                            I = D(B, k.lineThickness);
                        b.setLineDash(I)
                    }
                    for (; l < n.length; l++)
                        if (s = n[l].x.getTime ? n[l].x.getTime() : n[l].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !w))) {
                            var G = r;
                            "number" !== typeof n[l].y ? (k.connectNullData || (w || m) || c(), w = !0) : (q = a.axisX.convertValueToPixel(s), r = a.axisY.convertValueToPixel(n[l].y), m || w ? (!m && k.connectNullData ? (b.setLineDash && (k._options.nullDataLineDashType || B === k.lineDashType && k.lineDashType !==
                                k.nullDataLineDashType) && (b.stroke(), B = k.nullDataLineDashType, b.setLineDash(J)), b.lineTo(q, G), b.lineTo(q, r), t && (d.lineTo(q, G), d.lineTo(q, r))) : (b.beginPath(), b.moveTo(q, r), t && (d.beginPath(), d.moveTo(q, r)), v = {
                                x: q,
                                y: r
                            }), w = m = !1) : (b.lineTo(q, G), t && d.lineTo(q, G), b.lineTo(q, r), t && d.lineTo(q, r), 0 == l % 250 && c()), l < n.length - 1 && (A !== (n[l].lineColor || z) || B !== (n[l].lineDashType || k.lineDashType)) && (c(), A = n[l].lineColor || z, b.strokeStyle = A, b.setLineDash && (n[l].lineDashType ? (B = n[l].lineDashType, b.setLineDash(D(B, k.lineThickness))) :
                                (B = k.lineDashType, b.setLineDash(I)))), G = k.dataPointIds[l], this._eventManager.objectMap[G] = {
                                id: G,
                                objectType: "dataPoint",
                                dataSeriesIndex: p,
                                dataPointIndex: l,
                                x1: q,
                                y1: r
                            }, 0 !== n[l].markerSize && (0 < n[l].markerSize || 0 < k.markerSize) && (s = k.getMarkerProperties(l, q, r, b), g.push(s), G = C(G), t && g.push({
                                x: q,
                                y: r,
                                ctx: d,
                                type: s.type,
                                size: s.size,
                                color: G,
                                borderColor: G,
                                borderThickness: s.borderThickness
                            })), (n[l].indexLabel || k.indexLabel || n[l].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "stepArea",
                                dataPoint: n[l],
                                dataSeries: k,
                                point: {
                                    x: q,
                                    y: r
                                },
                                direction: 0 > n[l].y === a.axisY.reversed ? 1 : -1,
                                color: x
                            }))
                        }
                    c();
                    O.drawMarkers(g)
                }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: F.xClipAnimation,
                easingFunction: F.easing.linear,
                animationBase: 0
            }
        }
    };
    z.prototype.renderStackedArea = function(a) {
        function c() {
            if (!(1 > h.length)) {
                for (0 < v.lineThickness && b.stroke(); 0 < h.length;) {
                    var a = h.pop();
                    b.lineTo(a.x, a.y);
                    t && s.lineTo(a.x, a.y)
                }
                b.closePath();
                b.globalAlpha = v.fillOpacity;
                b.fill();
                b.globalAlpha = 1;
                b.beginPath();
                t && (s.closePath(), s.fill(), s.beginPath());
                h = []
            }
        }
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = null,
                e = [],
                f = this.plotArea,
                g = [],
                h = [],
                p = [],
                k = [],
                n = 0,
                m, l, q, r = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                s = this._eventManager.ghostCtx;
            t && s.beginPath();
            b.save();
            t && s.save();
            b.beginPath();
            b.rect(f.x1, f.y1, f.width, f.height);
            b.clip();
            t && (s.beginPath(), s.rect(f.x1, f.y1, f.width, f.height), s.clip());
            for (var y = [], f = 0; f < a.dataSeriesIndexes.length; f++) {
                var u = a.dataSeriesIndexes[f],
                    v = this.data[u],
                    w = v.dataPoints;
                v.dataPointIndexes = [];
                for (n = 0; n < w.length; n++) u = w[n].x.getTime ? w[n].x.getTime() : w[n].x, v.dataPointIndexes[u] = n, y[u] || (p.push(u), y[u] = !0);
                p.sort(sa)
            }
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
                u = a.dataSeriesIndexes[f];
                v = this.data[u];
                w = v.dataPoints;
                y = !0;
                h = [];
                n = v.id;
                this._eventManager.objectMap[n] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: u
                };
                n = C(n);
                s.fillStyle = n;
                if (0 < p.length) {
                    var d = v._colorSet[0],
                        x = v._options.lineColor ||
                        d,
                        z = x;
                    b.fillStyle = d;
                    b.strokeStyle = x;
                    b.lineWidth = v.lineThickness;
                    var A = "solid";
                    if (b.setLineDash) {
                        var B = D(v.nullDataLineDashType, v.lineThickness),
                            A = v.lineDashType,
                            J = D(A, v.lineThickness);
                        b.setLineDash(J)
                    }
                    for (var I = !0, n = 0; n < p.length; n++) {
                        q = p[n];
                        var G = null,
                            G = 0 <= v.dataPointIndexes[q] ? w[v.dataPointIndexes[q]] : {
                                x: q,
                                y: null
                            };
                        if (!(q < a.axisX.dataInfo.viewPortMin || q > a.axisX.dataInfo.viewPortMax && (!v.connectNullData || !I)))
                            if ("number" !== typeof G.y) v.connectNullData || (I || y) || c(), I = !0;
                            else {
                                m = a.axisX.convertValueToPixel(q);
                                var Z = g[q] ? g[q] : 0;
                                if (a.axisY.logarithmic) {
                                    k[q] = G.y + (k[q] ? k[q] : 0);
                                    if (0 >= k[q]) continue;
                                    l = a.axisY.convertValueToPixel(k[q])
                                } else l = a.axisY.convertValueToPixel(G.y), l -= Z;
                                h.push({
                                    x: m,
                                    y: r - Z
                                });
                                g[q] = r - l;
                                y || I ? (!y && v.connectNullData ? (b.setLineDash && (v._options.nullDataLineDashType || A === v.lineDashType && v.lineDashType !== v.nullDataLineDashType) && (b.stroke(), A = v.nullDataLineDashType, b.setLineDash(B)), b.lineTo(m, l), t && s.lineTo(m, l)) : (b.beginPath(), b.moveTo(m, l), t && (s.beginPath(), s.moveTo(m, l))), I = y = !1) : (b.lineTo(m,
                                    l), t && s.lineTo(m, l), 0 == n % 250 && (c(), b.moveTo(m, l), t && s.moveTo(m, l), h.push({
                                    x: m,
                                    y: r - Z
                                })));
                                n < w.length - 1 && (z !== (w[n].lineColor || x) || A !== (w[n].lineDashType || v.lineDashType)) && (c(), b.beginPath(), b.moveTo(m, l), h.push({
                                    x: m,
                                    y: r - Z
                                }), z = w[n].lineColor || x, b.strokeStyle = z, b.setLineDash && (w[n].lineDashType ? (A = w[n].lineDashType, b.setLineDash(D(A, v.lineThickness))) : (A = v.lineDashType, b.setLineDash(J))));
                                if (0 <= v.dataPointIndexes[q]) {
                                    var $ = v.dataPointIds[v.dataPointIndexes[q]];
                                    this._eventManager.objectMap[$] = {
                                        id: $,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: u,
                                        dataPointIndex: v.dataPointIndexes[q],
                                        x1: m,
                                        y1: l
                                    }
                                }
                                0 <= v.dataPointIndexes[q] && 0 !== G.markerSize && (0 < G.markerSize || 0 < v.markerSize) && (q = v.getMarkerProperties(n, m, l, b), e.push(q), markerColor = C($), t && e.push({
                                    x: m,
                                    y: l,
                                    ctx: s,
                                    type: q.type,
                                    size: q.size,
                                    color: markerColor,
                                    borderColor: markerColor,
                                    borderThickness: q.borderThickness
                                }));
                                (G.indexLabel || v.indexLabel || G.indexLabelFormatter || v.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedArea",
                                    dataPoint: G,
                                    dataSeries: v,
                                    point: {
                                        x: m,
                                        y: l
                                    },
                                    direction: 0 >
                                        w[n].y === a.axisY.reversed ? 1 : -1,
                                    color: d
                                })
                            }
                    }
                    c();
                    b.moveTo(m, l);
                    t && s.moveTo(m, l)
                }
                delete v.dataPointIndexes
            }
            O.drawMarkers(e);
            b.restore();
            t && s.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: F.xClipAnimation,
                easingFunction: F.easing.linear,
                animationBase: 0
            }
        }
    };
    z.prototype.renderStackedArea100 = function(a) {
        function c() {
            for (0 < v.lineThickness && b.stroke(); 0 < h.length;) {
                var a = h.pop();
                b.lineTo(a.x, a.y);
                t && s.lineTo(a.x, a.y)
            }
            b.closePath();
            b.globalAlpha = v.fillOpacity;
            b.fill();
            b.globalAlpha = 1;
            b.beginPath();
            t && (s.closePath(), s.fill(), s.beginPath());
            h = []
        }
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = null,
                e = this.plotArea,
                f = [],
                g = [],
                h = [],
                p = [],
                k = [],
                n = 0,
                m, l, q, r = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                s = this._eventManager.ghostCtx;
            b.save();
            t && s.save();
            b.beginPath();
            b.rect(e.x1, e.y1, e.width, e.height);
            b.clip();
            t && (s.beginPath(), s.rect(e.x1, e.y1, e.width, e.height), s.clip());
            for (var y = [], e = 0; e < a.dataSeriesIndexes.length; e++) {
                var u = a.dataSeriesIndexes[e],
                    v = this.data[u],
                    w = v.dataPoints;
                v.dataPointIndexes = [];
                for (n = 0; n < w.length; n++) u = w[n].x.getTime ? w[n].x.getTime() : w[n].x, v.dataPointIndexes[u] = n, y[u] || (p.push(u), y[u] = !0);
                p.sort(sa)
            }
            for (e = 0; e < a.dataSeriesIndexes.length; e++) {
                u = a.dataSeriesIndexes[e];
                v = this.data[u];
                w = v.dataPoints;
                y = !0;
                d = v.id;
                this._eventManager.objectMap[d] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: u
                };
                d = C(d);
                s.fillStyle = d;
                h = [];
                if (0 < p.length) {
                    var d = v._colorSet[n % v._colorSet.length],
                        x = v._options.lineColor || d,
                        z = x;
                    b.fillStyle = d;
                    b.strokeStyle =
                        x;
                    b.lineWidth = v.lineThickness;
                    var A = "solid";
                    if (b.setLineDash) {
                        var B = D(v.nullDataLineDashType, v.lineThickness),
                            A = v.lineDashType,
                            J = D(A, v.lineThickness);
                        b.setLineDash(J)
                    }
                    for (var I = !0, n = 0; n < p.length; n++) {
                        q = p[n];
                        var G = null,
                            G = 0 <= v.dataPointIndexes[q] ? w[v.dataPointIndexes[q]] : {
                                x: q,
                                y: null
                            };
                        if (!(q < a.axisX.dataInfo.viewPortMin || q > a.axisX.dataInfo.viewPortMax && (!v.connectNullData || !I)))
                            if ("number" !== typeof G.y) v.connectNullData || (I || y) || c(), I = !0;
                            else {
                                var Z;
                                Z = 0 !== a.dataPointYSums[q] ? 100 * (G.y / a.dataPointYSums[q]) :
                                    0;
                                m = a.axisX.convertValueToPixel(q);
                                var $ = g[q] ? g[q] : 0;
                                if (a.axisY.logarithmic) {
                                    k[q] = Z + (k[q] ? k[q] : 0);
                                    if (0 >= k[q]) continue;
                                    l = a.axisY.convertValueToPixel(k[q])
                                } else l = a.axisY.convertValueToPixel(Z), l -= $;
                                h.push({
                                    x: m,
                                    y: r - $
                                });
                                g[q] = r - l;
                                y || I ? (!y && v.connectNullData ? (b.setLineDash && (v._options.nullDataLineDashType || A === v.lineDashType && v.lineDashType !== v.nullDataLineDashType) && (b.stroke(), A = v.nullDataLineDashType, b.setLineDash(B)), b.lineTo(m, l), t && s.lineTo(m, l)) : (b.beginPath(), b.moveTo(m, l), t && (s.beginPath(), s.moveTo(m,
                                    l))), I = y = !1) : (b.lineTo(m, l), t && s.lineTo(m, l), 0 == n % 250 && (c(), b.moveTo(m, l), t && s.moveTo(m, l), h.push({
                                    x: m,
                                    y: r - $
                                })));
                                n < w.length - 1 && (z !== (w[n].lineColor || x) || A !== (w[n].lineDashType || v.lineDashType)) && (c(), b.beginPath(), b.moveTo(m, l), h.push({
                                    x: m,
                                    y: r - $
                                }), z = w[n].lineColor || x, b.strokeStyle = z, b.setLineDash && (w[n].lineDashType ? (A = w[n].lineDashType, b.setLineDash(D(A, v.lineThickness))) : (A = v.lineDashType, b.setLineDash(J))));
                                if (0 <= v.dataPointIndexes[q]) {
                                    var xa = v.dataPointIds[v.dataPointIndexes[q]];
                                    this._eventManager.objectMap[xa] = {
                                        id: xa,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: u,
                                        dataPointIndex: v.dataPointIndexes[q],
                                        x1: m,
                                        y1: l
                                    }
                                }
                                0 <= v.dataPointIndexes[q] && 0 !== G.markerSize && (0 < G.markerSize || 0 < v.markerSize) && (q = v.getMarkerProperties(n, m, l, b), f.push(q), markerColor = C(xa), t && f.push({
                                    x: m,
                                    y: l,
                                    ctx: s,
                                    type: q.type,
                                    size: q.size,
                                    color: markerColor,
                                    borderColor: markerColor,
                                    borderThickness: q.borderThickness
                                }));
                                (G.indexLabel || v.indexLabel || G.indexLabelFormatter || v.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedArea100",
                                    dataPoint: G,
                                    dataSeries: v,
                                    point: {
                                        x: m,
                                        y: l
                                    },
                                    direction: 0 > w[n].y === a.axisY.reversed ? 1 : -1,
                                    color: d
                                })
                            }
                    }
                    c();
                    b.moveTo(m, l);
                    t && s.moveTo(m, l)
                }
                delete v.dataPointIndexes
            }
            O.drawMarkers(f);
            b.restore();
            t && s.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: F.xClipAnimation,
                easingFunction: F.easing.linear,
                animationBase: 0
            }
        }
    };
    z.prototype.renderBubble = function(a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this.plotArea,
                d = 0,
                e, f;
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(b.x1, b.y1, b.width, b.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.clip());
            for (var g = -Infinity, h = Infinity, p = 0; p < a.dataSeriesIndexes.length; p++)
                for (var k = a.dataSeriesIndexes[p], n = this.data[k], m = n.dataPoints, l = 0, d = 0; d < m.length; d++) e = m[d].getTime ? e = m[d].x.getTime() : e = m[d].x, e < a.axisX.dataInfo.viewPortMin || e > a.axisX.dataInfo.viewPortMax || "undefined" === typeof m[d].z || (l = m[d].z, l >
                    g && (g = l), l < h && (h = l));
            for (var q = 25 * Math.PI, b = Math.max(Math.pow(0.25 * Math.min(b.height, b.width) / 2, 2) * Math.PI, q), p = 0; p < a.dataSeriesIndexes.length; p++)
                if (k = a.dataSeriesIndexes[p], n = this.data[k], m = n.dataPoints, 0 < m.length)
                    for (c.strokeStyle = "#4572A7 ", d = 0; d < m.length; d++)
                        if (e = m[d].getTime ? e = m[d].x.getTime() : e = m[d].x, !(e < a.axisX.dataInfo.viewPortMin || e > a.axisX.dataInfo.viewPortMax) && "number" === typeof m[d].y) {
                            e = a.axisX.convertValueToPixel(e);
                            f = a.axisY.convertValueToPixel(m[d].y);
                            var l = m[d].z,
                                r = 2 * Math.max(Math.sqrt((g ===
                                    h ? b / 2 : q + (b - q) / (g - h) * (l - h)) / Math.PI) << 0, 1),
                                l = n.getMarkerProperties(d, c);
                            l.size = r;
                            c.globalAlpha = n.fillOpacity;
                            O.drawMarker(e, f, c, l.type, l.size, l.color, l.borderColor, l.borderThickness);
                            c.globalAlpha = 1;
                            var s = n.dataPointIds[d];
                            this._eventManager.objectMap[s] = {
                                id: s,
                                objectType: "dataPoint",
                                dataSeriesIndex: k,
                                dataPointIndex: d,
                                x1: e,
                                y1: f,
                                size: r
                            };
                            r = C(s);
                            t && O.drawMarker(e, f, this._eventManager.ghostCtx, l.type, l.size, r, r, l.borderThickness);
                            (m[d].indexLabel || n.indexLabel || m[d].indexLabelFormatter || n.indexLabelFormatter) &&
                            this._indexLabels.push({
                                chartType: "bubble",
                                dataPoint: m[d],
                                dataSeries: n,
                                point: {
                                    x: e,
                                    y: f
                                },
                                direction: 1,
                                bounds: {
                                    x1: e - l.size / 2,
                                    y1: f - l.size / 2,
                                    x2: e + l.size / 2,
                                    y2: f + l.size / 2
                                },
                                color: null
                            })
                        }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: F.fadeInAnimation,
                easingFunction: F.easing.easeInQuad,
                animationBase: 0
            }
        }
    };
    z.prototype.renderScatter = function(a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this.plotArea,
                d = 0,
                e, f;
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(b.x1, b.y1, b.width, b.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.clip());
            for (var g = 0; g < a.dataSeriesIndexes.length; g++) {
                var h = a.dataSeriesIndexes[g],
                    p = this.data[h],
                    k = p.dataPoints;
                if (0 < k.length) {
                    c.strokeStyle = "#4572A7 ";
                    Math.pow(0.3 * Math.min(b.height, b.width) / 2, 2);
                    for (var n = 0, m = 0, d = 0; d < k.length; d++)
                        if (e = k[d].getTime ? e = k[d].x.getTime() :
                            e = k[d].x, !(e < a.axisX.dataInfo.viewPortMin || e > a.axisX.dataInfo.viewPortMax) && "number" === typeof k[d].y) {
                            e = a.axisX.convertValueToPixel(e);
                            f = a.axisY.convertValueToPixel(k[d].y);
                            var l = p.getMarkerProperties(d, e, f, c);
                            c.globalAlpha = p.fillOpacity;
                            O.drawMarker(l.x, l.y, l.ctx, l.type, l.size, l.color, l.borderColor, l.borderThickness);
                            c.globalAlpha = 1;
                            Math.sqrt((n - e) * (n - e) + (m - f) * (m - f)) < Math.min(l.size, 5) && k.length > Math.min(this.plotArea.width, this.plotArea.height) || (n = p.dataPointIds[d], this._eventManager.objectMap[n] = {
                                id: n,
                                objectType: "dataPoint",
                                dataSeriesIndex: h,
                                dataPointIndex: d,
                                x1: e,
                                y1: f
                            }, n = C(n), t && O.drawMarker(l.x, l.y, this._eventManager.ghostCtx, l.type, l.size, n, n, l.borderThickness), (k[d].indexLabel || p.indexLabel || k[d].indexLabelFormatter || p.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "scatter",
                                dataPoint: k[d],
                                dataSeries: p,
                                point: {
                                    x: e,
                                    y: f
                                },
                                direction: 1,
                                bounds: {
                                    x1: e - l.size / 2,
                                    y1: f - l.size / 2,
                                    x2: e + l.size / 2,
                                    y2: f + l.size / 2
                                },
                                color: null
                            }), n = e, m = f)
                        }
                }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: F.fadeInAnimation,
                easingFunction: F.easing.easeInQuad,
                animationBase: 0
            }
        }
    };
    z.prototype.renderCandlestick = function(a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx,
            b = this._eventManager.ghostCtx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = null,
                d = this.plotArea,
                e = 0,
                f, g, h, p, k, n, e = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1;
            f = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.015 * this.width;
            var m = a.axisX.dataInfo.minDiff;
            isFinite(m) || (m = 0.3 * (a.axisX.logarithmic ? a.axisX.viewportMaximum / a.axisX.viewportMinimum : Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum)));
            m = this.dataPointWidth ? this.dataPointWidth : 0.7 * d.width * (a.axisX.logarithmic ? Math.log(m) / Math.log(a.axisX.viewportMaximum / a.axisX.viewportMinimum) : Math.abs(m) / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum)) << 0;
            this.dataPointMaxWidth && e > f && (e = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, f));
            !this.dataPointMaxWidth &&
                (this.dataPointMinWidth && f < e) && (f = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, e));
            m < e && (m = e);
            m > f && (m = f);
            c.save();
            t && b.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            t && (b.beginPath(), b.rect(d.x1, d.y1, d.width, d.height), b.clip());
            for (var l = 0; l < a.dataSeriesIndexes.length; l++) {
                var q = a.dataSeriesIndexes[l],
                    r = this.data[q],
                    s = r.dataPoints;
                if (0 < s.length)
                    for (var y = 5 < m && r.bevelEnabled ? !0 : !1, e = 0; e < s.length; e++)
                        if (s[e].getTime ? n = s[e].x.getTime() : n = s[e].x, !(n < a.axisX.dataInfo.viewPortMin ||
                                n > a.axisX.dataInfo.viewPortMax) && null !== s[e].y && s[e].y.length && "number" === typeof s[e].y[0] && "number" === typeof s[e].y[1] && "number" === typeof s[e].y[2] && "number" === typeof s[e].y[3]) {
                            f = a.axisX.convertValueToPixel(n);
                            g = a.axisY.convertValueToPixel(s[e].y[0]);
                            h = a.axisY.convertValueToPixel(s[e].y[1]);
                            p = a.axisY.convertValueToPixel(s[e].y[2]);
                            k = a.axisY.convertValueToPixel(s[e].y[3]);
                            var u = f - m / 2 << 0,
                                v = u + m << 0,
                                d = s[e].color ? s[e].color : r._colorSet[0],
                                w = Math.round(Math.max(1, 0.15 * m)),
                                x = 0 === w % 2 ? 0 : 0.5,
                                z = r.dataPointIds[e];
                            this._eventManager.objectMap[z] = {
                                id: z,
                                objectType: "dataPoint",
                                dataSeriesIndex: q,
                                dataPointIndex: e,
                                x1: u,
                                y1: g,
                                x2: v,
                                y2: h,
                                x3: f,
                                y3: p,
                                x4: f,
                                y4: k,
                                borderThickness: w,
                                color: d
                            };
                            c.strokeStyle = d;
                            c.beginPath();
                            c.lineWidth = w;
                            b.lineWidth = Math.max(w, 4);
                            "candlestick" === r.type ? (c.moveTo(f - x, h), c.lineTo(f - x, Math.min(g, k)), c.stroke(), c.moveTo(f - x, Math.max(g, k)), c.lineTo(f - x, p), c.stroke(), M(c, u, Math.min(g, k), v, Math.max(g, k), s[e].y[0] <= s[e].y[3] ? r.risingColor : d, w, d, y, y, !1, !1, r.fillOpacity), t && (d = C(z), b.strokeStyle = d, b.moveTo(f -
                                x, h), b.lineTo(f - x, Math.min(g, k)), b.stroke(), b.moveTo(f - x, Math.max(g, k)), b.lineTo(f - x, p), b.stroke(), M(b, u, Math.min(g, k), v, Math.max(g, k), d, 0, null, !1, !1, !1, !1))) : "ohlc" === r.type && (c.moveTo(f - x, h), c.lineTo(f - x, p), c.stroke(), c.beginPath(), c.moveTo(f, g), c.lineTo(u, g), c.stroke(), c.beginPath(), c.moveTo(f, k), c.lineTo(v, k), c.stroke(), t && (d = C(z), b.strokeStyle = d, b.moveTo(f - x, h), b.lineTo(f - x, p), b.stroke(), b.beginPath(), b.moveTo(f, g), b.lineTo(u, g), b.stroke(), b.beginPath(), b.moveTo(f, k), b.lineTo(v, k), b.stroke()));
                            (s[e].indexLabel || r.indexLabel || s[e].indexLabelFormatter || r.indexLabelFormatter) && this._indexLabels.push({
                                chartType: r.type,
                                dataPoint: s[e],
                                dataSeries: r,
                                point: {
                                    x: u + (v - u) / 2,
                                    y: a.axisY.reversed ? p : h
                                },
                                direction: 1,
                                bounds: {
                                    x1: u,
                                    y1: Math.min(h, p),
                                    x2: v,
                                    y2: Math.max(h, p)
                                },
                                color: d
                            })
                        }
            }
            c.restore();
            t && b.restore();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: F.fadeInAnimation,
                easingFunction: F.easing.easeInQuad,
                animationBase: 0
            }
        }
    };
    z.prototype.renderRangeColumn = function(a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null,
                d = this.plotArea,
                e = 0,
                f, g, e = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1;
            f = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.03 * this.width;
            var h = a.axisX.dataInfo.minDiff;
            isFinite(h) || (h = 0.3 * (a.axisY.logarithmic ? a.axisX.viewportMaximum / a.axisX.viewportMinimum : Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum)));
            h = this.dataPointWidth ? this.dataPointWidth : 0.9 * (d.width *
                (a.axisX.logarithmic ? Math.log(h) / Math.log(a.axisX.viewportMaximum / a.axisX.viewportMinimum) : Math.abs(h) / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && e > f && (e = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, f));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && f < e) && (f = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, e));
            h < e && (h = e);
            h > f && (h = f);
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1,
                d.y1, d.width, d.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
                var k = a.dataSeriesIndexes[p],
                    n = this.data[k],
                    m = n.dataPoints;
                if (0 < m.length)
                    for (var l = 5 < h && n.bevelEnabled ? !0 : !1, e = 0; e < m.length; e++)
                        if (m[e].getTime ? g = m[e].x.getTime() : g = m[e].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) && null !== m[e].y && m[e].y.length && "number" === typeof m[e].y[0] &&
                            "number" === typeof m[e].y[1]) {
                            b = a.axisX.convertValueToPixel(g);
                            d = a.axisY.convertValueToPixel(m[e].y[0]);
                            f = a.axisY.convertValueToPixel(m[e].y[1]);
                            var q = a.axisX.reversed ? b + a.plotType.totalDataSeries * h / 2 - (a.previousDataSeriesCount + p) * h << 0 : b - a.plotType.totalDataSeries * h / 2 + (a.previousDataSeriesCount + p) * h << 0,
                                r = a.axisX.reversed ? q - h << 0 : q + h << 0,
                                b = m[e].color ? m[e].color : n._colorSet[e % n._colorSet.length];
                            if (d > f) {
                                var s = d,
                                    d = f;
                                f = s
                            }
                            s = n.dataPointIds[e];
                            this._eventManager.objectMap[s] = {
                                id: s,
                                objectType: "dataPoint",
                                dataSeriesIndex: k,
                                dataPointIndex: e,
                                x1: q,
                                y1: d,
                                x2: r,
                                y2: f
                            };
                            M(c, q, d, r, f, b, 0, b, l, l, !1, !1, n.fillOpacity);
                            b = C(s);
                            t && M(this._eventManager.ghostCtx, q, d, r, f, b, 0, null, !1, !1, !1, !1);
                            if (m[e].indexLabel || n.indexLabel || m[e].indexLabelFormatter || n.indexLabelFormatter) this._indexLabels.push({
                                chartType: "rangeColumn",
                                dataPoint: m[e],
                                dataSeries: n,
                                indexKeyword: 0,
                                point: {
                                    x: q + (r - q) / 2,
                                    y: m[e].y[1] >= m[e].y[0] ? f : d
                                },
                                direction: m[e].y[1] >= m[e].y[0] ? -1 : 1,
                                bounds: {
                                    x1: q,
                                    y1: Math.min(d, f),
                                    x2: r,
                                    y2: Math.max(d, f)
                                },
                                color: b
                            }), this._indexLabels.push({
                                chartType: "rangeColumn",
                                dataPoint: m[e],
                                dataSeries: n,
                                indexKeyword: 1,
                                point: {
                                    x: q + (r - q) / 2,
                                    y: m[e].y[1] >= m[e].y[0] ? d : f
                                },
                                direction: m[e].y[1] >= m[e].y[0] ? 1 : -1,
                                bounds: {
                                    x1: q,
                                    y1: Math.min(d, f),
                                    x2: r,
                                    y2: Math.max(d, f)
                                },
                                color: b
                            })
                        }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: F.fadeInAnimation,
                easingFunction: F.easing.easeInQuad,
                animationBase: 0
            }
        }
    };
    z.prototype.renderRangeBar = function(a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null,
                d = this.plotArea,
                e = 0,
                f, g, h, e = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1;
            f = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0;
            var p = a.axisX.dataInfo.minDiff;
            isFinite(p) || (p = 0.3 * (a.axisX.logarithmic ? a.axisX.viewportMaximum / a.axisX.viewportMinimum : Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum)));
            p = this.dataPointWidth ? this.dataPointWidth :
                0.9 * (d.height * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.viewportMaximum / a.axisX.viewportMinimum) : Math.abs(p) / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && e > f && (e = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, f));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && f < e) && (f = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, e));
            p < e && (p = e);
            p > f && (p = f);
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (var k = 0; k < a.dataSeriesIndexes.length; k++) {
                var n = a.dataSeriesIndexes[k],
                    m = this.data[n],
                    l = m.dataPoints;
                if (0 < l.length) {
                    var q = 5 < p && m.bevelEnabled ? !0 : !1;
                    c.strokeStyle = "#4572A7 ";
                    for (e = 0; e < l.length; e++)
                        if (l[e].getTime ? h = l[e].x.getTime() : h = l[e].x, !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && null !==
                            l[e].y && l[e].y.length && "number" === typeof l[e].y[0] && "number" === typeof l[e].y[1]) {
                            d = a.axisY.convertValueToPixel(l[e].y[0]);
                            f = a.axisY.convertValueToPixel(l[e].y[1]);
                            g = a.axisX.convertValueToPixel(h);
                            g = a.axisX.reversed ? g + a.plotType.totalDataSeries * p / 2 - (a.previousDataSeriesCount + k) * p << 0 : g - a.plotType.totalDataSeries * p / 2 + (a.previousDataSeriesCount + k) * p << 0;
                            var r = a.axisX.reversed ? g - p << 0 : g + p << 0;
                            d > f && (b = d, d = f, f = b);
                            b = l[e].color ? l[e].color : m._colorSet[e % m._colorSet.length];
                            M(c, d, g, f, r, b, 0, null, q, !1, !1, !1, m.fillOpacity);
                            b = m.dataPointIds[e];
                            this._eventManager.objectMap[b] = {
                                id: b,
                                objectType: "dataPoint",
                                dataSeriesIndex: n,
                                dataPointIndex: e,
                                x1: d,
                                y1: g,
                                x2: f,
                                y2: r
                            };
                            b = C(b);
                            t && M(this._eventManager.ghostCtx, d, g, f, r, b, 0, null, !1, !1, !1, !1);
                            if (l[e].indexLabel || m.indexLabel || l[e].indexLabelFormatter || m.indexLabelFormatter) this._indexLabels.push({
                                chartType: "rangeBar",
                                dataPoint: l[e],
                                dataSeries: m,
                                indexKeyword: 0,
                                point: {
                                    x: l[e].y[1] >= l[e].y[0] ? d : f,
                                    y: g + (r - g) / 2
                                },
                                direction: l[e].y[1] >= l[e].y[0] ? -1 : 1,
                                bounds: {
                                    x1: Math.min(d, f),
                                    y1: g,
                                    x2: Math.max(d,
                                        f),
                                    y2: r
                                },
                                color: b
                            }), this._indexLabels.push({
                                chartType: "rangeBar",
                                dataPoint: l[e],
                                dataSeries: m,
                                indexKeyword: 1,
                                point: {
                                    x: l[e].y[1] >= l[e].y[0] ? f : d,
                                    y: g + (r - g) / 2
                                },
                                direction: l[e].y[1] >= l[e].y[0] ? 1 : -1,
                                bounds: {
                                    x1: Math.min(d, f),
                                    y1: g,
                                    x2: Math.max(d, f),
                                    y2: r
                                },
                                color: b
                            })
                        }
                }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: F.fadeInAnimation,
                easingFunction: F.easing.easeInQuad,
                animationBase: 0
            }
        }
    };
    z.prototype.renderRangeArea = function(a) {
        function c() {
            if (y) {
                var a =
                    null;
                0 < p.lineThickness && b.stroke();
                for (var c = g.length - 1; 0 <= c; c--) a = g[c], b.lineTo(a.x, a.y), d.lineTo(a.x, a.y);
                b.closePath();
                b.globalAlpha = p.fillOpacity;
                b.fill();
                b.globalAlpha = 1;
                d.fill();
                if (0 < p.lineThickness) {
                    b.beginPath();
                    b.moveTo(a.x, a.y);
                    for (c = 0; c < g.length; c++) a = g[c], b.lineTo(a.x, a.y);
                    b.stroke()
                }
                b.beginPath();
                b.moveTo(l, q);
                d.beginPath();
                d.moveTo(l, q);
                y = {
                    x: l,
                    y: q
                };
                g = [];
                g.push({
                    x: l,
                    y: r
                })
            }
        }
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx,
                e = [],
                f = this.plotArea;
            b.save();
            t && d.save();
            b.beginPath();
            b.rect(f.x1, f.y1, f.width, f.height);
            b.clip();
            t && (d.beginPath(), d.rect(f.x1, f.y1, f.width, f.height), d.clip());
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
                var g = [],
                    h = a.dataSeriesIndexes[f],
                    p = this.data[h],
                    k = p.dataPoints,
                    e = p.id;
                this._eventManager.objectMap[e] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: h
                };
                e = C(e);
                d.fillStyle = e;
                var e = [],
                    n = !0,
                    m = 0,
                    l, q, r, s, y = null;
                if (0 < k.length) {
                    var u = p._colorSet[m % p._colorSet.length],
                        v = p._options.lineColor || u,
                        w = v;
                    b.fillStyle =
                        u;
                    b.strokeStyle = v;
                    b.lineWidth = p.lineThickness;
                    var x = "solid";
                    if (b.setLineDash) {
                        var z = D(p.nullDataLineDashType, p.lineThickness),
                            x = p.lineDashType,
                            A = D(x, p.lineThickness);
                        b.setLineDash(A)
                    }
                    for (var B = !0; m < k.length; m++)
                        if (s = k[m].x.getTime ? k[m].x.getTime() : k[m].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax && (!p.connectNullData || !B)))
                            if (null !== k[m].y && k[m].y.length && "number" === typeof k[m].y[0] && "number" === typeof k[m].y[1]) {
                                l = a.axisX.convertValueToPixel(s);
                                q = a.axisY.convertValueToPixel(k[m].y[0]);
                                r = a.axisY.convertValueToPixel(k[m].y[1]);
                                n || B ? (p.connectNullData && !n ? (b.setLineDash && (p._options.nullDataLineDashType || x === p.lineDashType && p.lineDashType !== p.nullDataLineDashType) && (g[g.length - 1].newLineDashArray = A, x = p.nullDataLineDashType, b.setLineDash(z)), b.lineTo(l, q), t && d.lineTo(l, q), g.push({
                                    x: l,
                                    y: r
                                })) : (b.beginPath(), b.moveTo(l, q), y = {
                                    x: l,
                                    y: q
                                }, g = [], g.push({
                                    x: l,
                                    y: r
                                }), t && (d.beginPath(), d.moveTo(l, q))), B = n = !1) : (b.lineTo(l, q), g.push({
                                    x: l,
                                    y: r
                                }), t && d.lineTo(l, q), 0 == m % 250 && c());
                                s = p.dataPointIds[m];
                                this._eventManager.objectMap[s] = {
                                    id: s,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: h,
                                    dataPointIndex: m,
                                    x1: l,
                                    y1: q,
                                    y2: r
                                };
                                m < k.length - 1 && (w !== (k[m].lineColor || v) || x !== (k[m].lineDashType || p.lineDashType)) && (c(), w = k[m].lineColor || v, g[g.length - 1].newStrokeStyle = w, b.strokeStyle = w, b.setLineDash && (k[m].lineDashType ? (x = k[m].lineDashType, g[g.length - 1].newLineDashArray = D(x, p.lineThickness), b.setLineDash(g[g.length - 1].newLineDashArray)) : (x = p.lineDashType, g[g.length - 1].newLineDashArray = A, b.setLineDash(A))));
                                if (0 !== k[m].markerSize && (0 < k[m].markerSize ||
                                        0 < p.markerSize)) {
                                    var J = p.getMarkerProperties(m, l, r, b);
                                    e.push(J);
                                    var I = C(s);
                                    t && e.push({
                                        x: l,
                                        y: r,
                                        ctx: d,
                                        type: J.type,
                                        size: J.size,
                                        color: I,
                                        borderColor: I,
                                        borderThickness: J.borderThickness
                                    });
                                    J = p.getMarkerProperties(m, l, q, b);
                                    e.push(J);
                                    I = C(s);
                                    t && e.push({
                                        x: l,
                                        y: q,
                                        ctx: d,
                                        type: J.type,
                                        size: J.size,
                                        color: I,
                                        borderColor: I,
                                        borderThickness: J.borderThickness
                                    })
                                }
                                if (k[m].indexLabel || p.indexLabel || k[m].indexLabelFormatter || p.indexLabelFormatter) this._indexLabels.push({
                                    chartType: "rangeArea",
                                    dataPoint: k[m],
                                    dataSeries: p,
                                    indexKeyword: 0,
                                    point: {
                                        x: l,
                                        y: q
                                    },
                                    direction: k[m].y[0] > k[m].y[1] === a.axisY.reversed ? -1 : 1,
                                    color: u
                                }), this._indexLabels.push({
                                    chartType: "rangeArea",
                                    dataPoint: k[m],
                                    dataSeries: p,
                                    indexKeyword: 1,
                                    point: {
                                        x: l,
                                        y: r
                                    },
                                    direction: k[m].y[0] > k[m].y[1] === a.axisY.reversed ? 1 : -1,
                                    color: u
                                })
                            } else B || n || c(), B = !0;
                    c();
                    O.drawMarkers(e)
                }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: F.xClipAnimation,
                easingFunction: F.easing.linear,
                animationBase: 0
            }
        }
    };
    z.prototype.renderRangeSplineArea =
        function(a) {
            function c(a, c) {
                var e = ma(q, 2);
                if (0 < e.length) {
                    if (0 < h.lineThickness) {
                        b.strokeStyle = c;
                        b.setLineDash && b.setLineDash(a);
                        b.beginPath();
                        b.moveTo(e[0].x, e[0].y);
                        for (var f = 0; f < e.length - 3; f += 3) {
                            if (e[f].newStrokeStyle || e[f].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(e[f].x, e[f].y), e[f].newStrokeStyle && (b.strokeStyle = e[f].newStrokeStyle), e[f].newLineDashArray && b.setLineDash(e[f].newLineDashArray);
                            b.bezierCurveTo(e[f + 1].x, e[f + 1].y, e[f + 2].x, e[f + 2].y, e[f + 3].x, e[f + 3].y)
                        }
                        b.stroke()
                    }
                    b.beginPath();
                    b.moveTo(e[0].x, e[0].y);
                    t && (d.beginPath(), d.moveTo(e[0].x, e[0].y));
                    for (f = 0; f < e.length - 3; f += 3) b.bezierCurveTo(e[f + 1].x, e[f + 1].y, e[f + 2].x, e[f + 2].y, e[f + 3].x, e[f + 3].y), t && d.bezierCurveTo(e[f + 1].x, e[f + 1].y, e[f + 2].x, e[f + 2].y, e[f + 3].x, e[f + 3].y);
                    e = ma(r, 2);
                    b.lineTo(r[r.length - 1].x, r[r.length - 1].y);
                    for (f = e.length - 1; 2 < f; f -= 3) b.bezierCurveTo(e[f - 1].x, e[f - 1].y, e[f - 2].x, e[f - 2].y, e[f - 3].x, e[f - 3].y), t && d.bezierCurveTo(e[f - 1].x, e[f - 1].y, e[f - 2].x, e[f - 2].y, e[f - 3].x, e[f - 3].y);
                    b.closePath();
                    b.globalAlpha = h.fillOpacity;
                    b.fill();
                    t && (d.closePath(), d.fill());
                    b.globalAlpha = 1;
                    if (0 < h.lineThickness) {
                        b.strokeStyle = c;
                        b.setLineDash && b.setLineDash(a);
                        b.beginPath();
                        b.moveTo(e[0].x, e[0].y);
                        for (var g = f = 0; f < e.length - 3; f += 3, g++) {
                            if (q[g].newStrokeStyle || q[g].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(e[f].x, e[f].y), q[g].newStrokeStyle && (b.strokeStyle = q[g].newStrokeStyle), q[g].newLineDashArray && b.setLineDash(q[g].newLineDashArray);
                            b.bezierCurveTo(e[f + 1].x, e[f + 1].y, e[f + 2].x, e[f + 2].y, e[f + 3].x, e[f + 3].y)
                        }
                        b.stroke()
                    }
                    b.beginPath()
                }
            }
            var b = a.targetCanvasCtx || this.plotArea.ctx;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var d = this._eventManager.ghostCtx,
                    e = [],
                    f = this.plotArea;
                b.save();
                t && d.save();
                b.beginPath();
                b.rect(f.x1, f.y1, f.width, f.height);
                b.clip();
                t && (d.beginPath(), d.rect(f.x1, f.y1, f.width, f.height), d.clip());
                for (f = 0; f < a.dataSeriesIndexes.length; f++) {
                    var g = a.dataSeriesIndexes[f],
                        h = this.data[g],
                        p = h.dataPoints,
                        e = h.id;
                    this._eventManager.objectMap[e] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: g
                    };
                    e = C(e);
                    d.fillStyle = e;
                    var e = [],
                        k = 0,
                        n, m, l,
                        q = [],
                        r = [];
                    if (0 < p.length) {
                        var s = h._colorSet[k % h._colorSet.length],
                            y = h._options.lineColor || s,
                            u = y;
                        b.fillStyle = s;
                        b.lineWidth = h.lineThickness;
                        var v = "solid",
                            w;
                        if (b.setLineDash) {
                            var x = D(h.nullDataLineDashType, h.lineThickness),
                                v = h.lineDashType;
                            w = D(v, h.lineThickness)
                        }
                        for (m = !1; k < p.length; k++)
                            if (n = p[k].x.getTime ? p[k].x.getTime() : p[k].x, !(n < a.axisX.dataInfo.viewPortMin || n > a.axisX.dataInfo.viewPortMax && (!h.connectNullData || !m)))
                                if (null !== p[k].y && p[k].y.length && "number" === typeof p[k].y[0] && "number" === typeof p[k].y[1]) {
                                    n =
                                        a.axisX.convertValueToPixel(n);
                                    m = a.axisY.convertValueToPixel(p[k].y[0]);
                                    l = a.axisY.convertValueToPixel(p[k].y[1]);
                                    var z = h.dataPointIds[k];
                                    this._eventManager.objectMap[z] = {
                                        id: z,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: g,
                                        dataPointIndex: k,
                                        x1: n,
                                        y1: m,
                                        y2: l
                                    };
                                    q[q.length] = {
                                        x: n,
                                        y: m
                                    };
                                    r[r.length] = {
                                        x: n,
                                        y: l
                                    };
                                    k < p.length - 1 && (u !== (p[k].lineColor || y) || v !== (p[k].lineDashType || h.lineDashType)) && (u = p[k].lineColor || y, q[q.length - 1].newStrokeStyle = u, b.setLineDash && (p[k].lineDashType ? (v = p[k].lineDashType, q[q.length - 1].newLineDashArray =
                                        D(v, h.lineThickness)) : (v = h.lineDashType, q[q.length - 1].newLineDashArray = w)));
                                    if (0 !== p[k].markerSize && (0 < p[k].markerSize || 0 < h.markerSize)) {
                                        var A = h.getMarkerProperties(k, n, m, b);
                                        e.push(A);
                                        var B = C(z);
                                        t && e.push({
                                            x: n,
                                            y: m,
                                            ctx: d,
                                            type: A.type,
                                            size: A.size,
                                            color: B,
                                            borderColor: B,
                                            borderThickness: A.borderThickness
                                        });
                                        A = h.getMarkerProperties(k, n, l, b);
                                        e.push(A);
                                        B = C(z);
                                        t && e.push({
                                            x: n,
                                            y: l,
                                            ctx: d,
                                            type: A.type,
                                            size: A.size,
                                            color: B,
                                            borderColor: B,
                                            borderThickness: A.borderThickness
                                        })
                                    }
                                    if (p[k].indexLabel || h.indexLabel || p[k].indexLabelFormatter ||
                                        h.indexLabelFormatter) this._indexLabels.push({
                                        chartType: "splineArea",
                                        dataPoint: p[k],
                                        dataSeries: h,
                                        indexKeyword: 0,
                                        point: {
                                            x: n,
                                            y: m
                                        },
                                        direction: p[k].y[0] <= p[k].y[1] ? -1 : 1,
                                        color: s
                                    }), this._indexLabels.push({
                                        chartType: "splineArea",
                                        dataPoint: p[k],
                                        dataSeries: h,
                                        indexKeyword: 1,
                                        point: {
                                            x: n,
                                            y: l
                                        },
                                        direction: p[k].y[0] <= p[k].y[1] ? 1 : -1,
                                        color: s
                                    });
                                    m = !1
                                } else 0 < k && !m && (h.connectNullData ? b.setLineDash && (0 < q.length && (h._options.nullDataLineDashType || !p[k - 1].lineDashType)) && (q[q.length - 1].newLineDashArray = x, v = h.nullDataLineDashType) :
                                    (c(w, y), q = [], r = [])), m = !0;
                        c(w, y);
                        O.drawMarkers(e)
                    }
                }
                b.restore();
                t && this._eventManager.ghostCtx.restore();
                return {
                    source: b,
                    dest: this.plotArea.ctx,
                    animationCallback: F.xClipAnimation,
                    easingFunction: F.easing.linear,
                    animationBase: 0
                }
            }
        };
    var ya = function(a, c, b, d, e, f, g, h, p) {
        if (!(0 > b)) {
            "undefined" === typeof h && (h = 1);
            if (!t) {
                var k = Number((g % (2 * Math.PI)).toFixed(8));
                Number((f % (2 * Math.PI)).toFixed(8)) === k && (g -= 1E-4)
            }
            a.save();
            a.globalAlpha = h;
            "pie" === e ? (a.beginPath(), a.moveTo(c.x, c.y), a.arc(c.x, c.y, b, f, g, !1), a.fillStyle =
                d, a.strokeStyle = "white", a.lineWidth = 2, a.closePath(), a.fill()) : "doughnut" === e && (a.beginPath(), a.arc(c.x, c.y, b, f, g, !1), 0 <= p && a.arc(c.x, c.y, p * b, g, f, !0), a.closePath(), a.fillStyle = d, a.strokeStyle = "white", a.lineWidth = 2, a.fill());
            a.globalAlpha = 1;
            a.restore()
        }
    };
    z.prototype.renderPie = function(a) {
        function c() {
            if (k && n) {
                for (var a = 0, b = 0, c = 0, d = 0, e = 0; e < n.length; e++) {
                    var f = n[e],
                        g = k.dataPointIds[e],
                        h = {
                            id: g,
                            objectType: "dataPoint",
                            dataPointIndex: e,
                            dataSeriesIndex: 0
                        };
                    q.push(h);
                    var m = {
                            percent: null,
                            total: null
                        },
                        r = null,
                        m =
                        p.getPercentAndTotal(k, f);
                    if (k.indexLabelFormatter || f.indexLabelFormatter) r = {
                        chart: p._options,
                        dataSeries: k,
                        dataPoint: f,
                        total: m.total,
                        percent: m.percent
                    };
                    m = f.indexLabelFormatter ? f.indexLabelFormatter(r) : f.indexLabel ? p.replaceKeywordsWithValue(f.indexLabel, f, k, e) : k.indexLabelFormatter ? k.indexLabelFormatter(r) : k.indexLabel ? p.replaceKeywordsWithValue(k.indexLabel, f, k, e) : f.label ? f.label : "";
                    p._eventManager.objectMap[g] = h;
                    h.center = {
                        x: w.x,
                        y: w.y
                    };
                    h.y = f.y;
                    h.radius = A;
                    h.percentInnerRadius = F;
                    h.indexLabelText = m;
                    h.indexLabelPlacement = k.indexLabelPlacement;
                    h.indexLabelLineColor = f.indexLabelLineColor ? f.indexLabelLineColor : k.indexLabelLineColor ? k.indexLabelLineColor : f.color ? f.color : k._colorSet[e % k._colorSet.length];
                    h.indexLabelLineThickness = x(f.indexLabelLineThickness) ? k.indexLabelLineThickness : f.indexLabelLineThickness;
                    h.indexLabelLineDashType = f.indexLabelLineDashType ? f.indexLabelLineDashType : k.indexLabelLineDashType;
                    h.indexLabelFontColor = f.indexLabelFontColor ? f.indexLabelFontColor : k.indexLabelFontColor;
                    h.indexLabelFontStyle =
                        f.indexLabelFontStyle ? f.indexLabelFontStyle : k.indexLabelFontStyle;
                    h.indexLabelFontWeight = f.indexLabelFontWeight ? f.indexLabelFontWeight : k.indexLabelFontWeight;
                    h.indexLabelFontSize = f.indexLabelFontSize ? f.indexLabelFontSize : k.indexLabelFontSize;
                    h.indexLabelFontFamily = f.indexLabelFontFamily ? f.indexLabelFontFamily : k.indexLabelFontFamily;
                    h.indexLabelBackgroundColor = f.indexLabelBackgroundColor ? f.indexLabelBackgroundColor : k.indexLabelBackgroundColor ? k.indexLabelBackgroundColor : null;
                    h.indexLabelMaxWidth = f.indexLabelMaxWidth ?
                        f.indexLabelMaxWidth : k.indexLabelMaxWidth ? k.indexLabelMaxWidth : 0.33 * l.width;
                    h.indexLabelWrap = "undefined" !== typeof f.indexLabelWrap ? f.indexLabelWrap : k.indexLabelWrap;
                    h.startAngle = 0 === e ? k.startAngle ? k.startAngle / 180 * Math.PI : 0 : q[e - 1].endAngle;
                    h.startAngle = (h.startAngle + 2 * Math.PI) % (2 * Math.PI);
                    h.endAngle = h.startAngle + 2 * Math.PI / t * Math.abs(f.y);
                    f = (h.endAngle + h.startAngle) / 2;
                    f = (f + 2 * Math.PI) % (2 * Math.PI);
                    h.midAngle = f;
                    if (h.midAngle > Math.PI / 2 - u && h.midAngle < Math.PI / 2 + u) {
                        if (0 === a || q[c].midAngle > h.midAngle) c = e;
                        a++
                    } else if (h.midAngle > 3 * Math.PI / 2 - u && h.midAngle < 3 * Math.PI / 2 + u) {
                        if (0 === b || q[d].midAngle > h.midAngle) d = e;
                        b++
                    }
                    h.hemisphere = f > Math.PI / 2 && f <= 3 * Math.PI / 2 ? "left" : "right";
                    h.indexLabelTextBlock = new L(p.plotArea.ctx, {
                        fontSize: h.indexLabelFontSize,
                        fontFamily: h.indexLabelFontFamily,
                        fontColor: h.indexLabelFontColor,
                        fontStyle: h.indexLabelFontStyle,
                        fontWeight: h.indexLabelFontWeight,
                        horizontalAlign: "left",
                        backgroundColor: h.indexLabelBackgroundColor,
                        maxWidth: h.indexLabelMaxWidth,
                        maxHeight: h.indexLabelWrap ? 5 * h.indexLabelFontSize : 1.5 * h.indexLabelFontSize,
                        text: h.indexLabelText,
                        padding: 0,
                        textBaseline: "top"
                    });
                    h.indexLabelTextBlock.measureText()
                }
                g = f = 0;
                m = !1;
                for (e = 0; e < n.length; e++) h = q[(c + e) % n.length], 1 < a && (h.midAngle > Math.PI / 2 - u && h.midAngle < Math.PI / 2 + u) && (f <= a / 2 && !m ? (h.hemisphere = "right", f++) : (h.hemisphere = "left", m = !0));
                m = !1;
                for (e = 0; e < n.length; e++) h = q[(d + e) % n.length], 1 < b && (h.midAngle > 3 * Math.PI / 2 - u && h.midAngle < 3 * Math.PI / 2 + u) && (g <= b / 2 && !m ? (h.hemisphere = "left", g++) : (h.hemisphere = "right", m = !0))
            }
        }

        function b(a) {
            var b = p.plotArea.ctx;
            b.clearRect(l.x1,
                l.y1, l.width, l.height);
            b.fillStyle = p.backgroundColor;
            b.fillRect(l.x1, l.y1, l.width, l.height);
            for (b = 0; b < n.length; b++) {
                var c = q[b].startAngle,
                    d = q[b].endAngle;
                if (d > c) {
                    var e = 0.07 * A * Math.cos(q[b].midAngle),
                        f = 0.07 * A * Math.sin(q[b].midAngle),
                        g = !1;
                    if (n[b].exploded) {
                        if (1E-9 < Math.abs(q[b].center.x - (w.x + e)) || 1E-9 < Math.abs(q[b].center.y - (w.y + f))) q[b].center.x = w.x + e * a, q[b].center.y = w.y + f * a, g = !0
                    } else if (0 < Math.abs(q[b].center.x - w.x) || 0 < Math.abs(q[b].center.y - w.y)) q[b].center.x = w.x + e * (1 - a), q[b].center.y = w.y + f * (1 - a),
                        g = !0;
                    g && (e = {}, e.dataSeries = k, e.dataPoint = k.dataPoints[b], e.index = b, p._toolTip.highlightObjects([e]));
                    ya(p.plotArea.ctx, q[b].center, q[b].radius, n[b].color ? n[b].color : k._colorSet[b % k._colorSet.length], k.type, c, d, k.fillOpacity, q[b].percentInnerRadius)
                }
            }
            a = p.plotArea.ctx;
            a.save();
            a.fillStyle = "black";
            a.strokeStyle = "grey";
            a.textBaseline = "middle";
            a.lineJoin = "round";
            for (b = b = 0; b < n.length; b++) c = q[b], c.indexLabelText && (c.indexLabelTextBlock.y -= c.indexLabelTextBlock.height / 2, d = 0, d = "left" === c.hemisphere ? "inside" !==
                k.indexLabelPlacement ? -(c.indexLabelTextBlock.width + m) : -c.indexLabelTextBlock.width / 2 : "inside" !== k.indexLabelPlacement ? m : -c.indexLabelTextBlock.width / 2, c.indexLabelTextBlock.x += d, c.indexLabelTextBlock.render(!0), c.indexLabelTextBlock.x -= d, c.indexLabelTextBlock.y += c.indexLabelTextBlock.height / 2, "inside" !== c.indexLabelPlacement && 0 < c.indexLabelLineThickness && (d = c.center.x + A * Math.cos(c.midAngle), e = c.center.y + A * Math.sin(c.midAngle), a.strokeStyle = c.indexLabelLineColor, a.lineWidth = c.indexLabelLineThickness,
                    a.setLineDash && a.setLineDash(D(c.indexLabelLineDashType, c.indexLabelLineThickness)), a.beginPath(), a.moveTo(d, e), a.lineTo(c.indexLabelTextBlock.x, c.indexLabelTextBlock.y), a.lineTo(c.indexLabelTextBlock.x + ("left" === c.hemisphere ? -m : m), c.indexLabelTextBlock.y), a.stroke()), a.lineJoin = "miter");
            a.save()
        }

        function d(a, b) {
            var c = 0,
                c = a.indexLabelTextBlock.y - a.indexLabelTextBlock.height / 2,
                d = a.indexLabelTextBlock.y + a.indexLabelTextBlock.height / 2,
                e = b.indexLabelTextBlock.y - b.indexLabelTextBlock.height / 2,
                f = b.indexLabelTextBlock.y +
                b.indexLabelTextBlock.height / 2;
            return c = b.indexLabelTextBlock.y > a.indexLabelTextBlock.y ? e - d : c - f
        }

        function e(a) {
            for (var b = null, c = 1; c < n.length; c++)
                if (b = (a + c + q.length) % q.length, q[b].hemisphere !== q[a].hemisphere) {
                    b = null;
                    break
                } else if (q[b].indexLabelText && b !== a && (0 > d(q[b], q[a]) || ("right" === q[a].hemisphere ? q[b].indexLabelTextBlock.y >= q[a].indexLabelTextBlock.y : q[b].indexLabelTextBlock.y <= q[a].indexLabelTextBlock.y))) break;
            else b = null;
            return b
        }

        function f(a, b, c) {
            c = (c || 0) + 1;
            if (1E3 < c) return 0;
            b = b || 0;
            var g = 0,
                h = w.y - 1 * s,
                l = w.y + 1 * s;
            if (0 <= a && a < n.length) {
                var k = q[a];
                if (0 > b && k.indexLabelTextBlock.y < h || 0 < b && k.indexLabelTextBlock.y > l) return 0;
                var m = 0,
                    p = 0,
                    p = m = m = 0;
                0 > b ? k.indexLabelTextBlock.y - k.indexLabelTextBlock.height / 2 > h && k.indexLabelTextBlock.y - k.indexLabelTextBlock.height / 2 + b < h && (b = -(h - (k.indexLabelTextBlock.y - k.indexLabelTextBlock.height / 2 + b))) : k.indexLabelTextBlock.y + k.indexLabelTextBlock.height / 2 < h && k.indexLabelTextBlock.y + k.indexLabelTextBlock.height / 2 + b > l && (b = k.indexLabelTextBlock.y + k.indexLabelTextBlock.height /
                    2 + b - l);
                b = k.indexLabelTextBlock.y + b;
                h = 0;
                h = "right" === k.hemisphere ? w.x + Math.sqrt(Math.pow(s, 2) - Math.pow(b - w.y, 2)) : w.x - Math.sqrt(Math.pow(s, 2) - Math.pow(b - w.y, 2));
                p = w.x + A * Math.cos(k.midAngle);
                m = w.y + A * Math.sin(k.midAngle);
                m = Math.sqrt(Math.pow(h - p, 2) + Math.pow(b - m, 2));
                p = Math.acos(A / s);
                m = Math.acos((s * s + A * A - m * m) / (2 * A * s));
                b = m < p ? b - k.indexLabelTextBlock.y : 0;
                h = null;
                for (l = 1; l < n.length; l++)
                    if (h = (a - l + q.length) % q.length, q[h].hemisphere !== q[a].hemisphere) {
                        h = null;
                        break
                    } else if (q[h].indexLabelText && q[h].hemisphere ===
                    q[a].hemisphere && h !== a && (0 > d(q[h], q[a]) || ("right" === q[a].hemisphere ? q[h].indexLabelTextBlock.y <= q[a].indexLabelTextBlock.y : q[h].indexLabelTextBlock.y >= q[a].indexLabelTextBlock.y))) break;
                else h = null;
                p = h;
                m = e(a);
                l = h = 0;
                0 > b ? (l = "right" === k.hemisphere ? p : m, g = b, null !== l && (p = -b, b = k.indexLabelTextBlock.y - k.indexLabelTextBlock.height / 2 - (q[l].indexLabelTextBlock.y + q[l].indexLabelTextBlock.height / 2), b - p < r && (h = -p, l = f(l, h, c + 1), +l.toFixed(v) > +h.toFixed(v) && (g = b > r ? -(b - r) : -(p - (l - h)))))) : 0 < b && (l = "right" === k.hemisphere ?
                    m : p, g = b, null !== l && (p = b, b = q[l].indexLabelTextBlock.y - q[l].indexLabelTextBlock.height / 2 - (k.indexLabelTextBlock.y + k.indexLabelTextBlock.height / 2), b - p < r && (h = p, l = f(l, h, c + 1), +l.toFixed(v) < +h.toFixed(v) && (g = b > r ? b - r : p - (h - l)))));
                g && (c = k.indexLabelTextBlock.y + g, b = 0, b = "right" === k.hemisphere ? w.x + Math.sqrt(Math.pow(s, 2) - Math.pow(c - w.y, 2)) : w.x - Math.sqrt(Math.pow(s, 2) - Math.pow(c - w.y, 2)), k.midAngle > Math.PI / 2 - u && k.midAngle < Math.PI / 2 + u ? (h = (a - 1 + q.length) % q.length, h = q[h], a = q[(a + 1 + q.length) % q.length], "left" === k.hemisphere &&
                    "right" === h.hemisphere && b > h.indexLabelTextBlock.x ? b = h.indexLabelTextBlock.x - 15 : "right" === k.hemisphere && ("left" === a.hemisphere && b < a.indexLabelTextBlock.x) && (b = a.indexLabelTextBlock.x + 15)) : k.midAngle > 3 * Math.PI / 2 - u && k.midAngle < 3 * Math.PI / 2 + u && (h = (a - 1 + q.length) % q.length, h = q[h], a = q[(a + 1 + q.length) % q.length], "right" === k.hemisphere && "left" === h.hemisphere && b < h.indexLabelTextBlock.x ? b = h.indexLabelTextBlock.x + 15 : "left" === k.hemisphere && ("right" === a.hemisphere && b > a.indexLabelTextBlock.x) && (b = a.indexLabelTextBlock.x -
                    15)), k.indexLabelTextBlock.y = c, k.indexLabelTextBlock.x = b, k.indexLabelAngle = Math.atan2(k.indexLabelTextBlock.y - w.y, k.indexLabelTextBlock.x - w.x))
            }
            return g
        }

        function g() {
            var a = p.plotArea.ctx;
            a.fillStyle = "grey";
            a.strokeStyle = "grey";
            a.font = "16px Arial";
            a.textBaseline = "middle";
            for (var b = a = 0, c = 0, g = !0, b = 0; 10 > b && (1 > b || 0 < c); b++) {
                if (k.radius || !k.radius && "undefined" !== typeof k.innerRadius && null !== k.innerRadius && A - c <= B) g = !1;
                g && (A -= c);
                c = 0;
                if ("inside" !== k.indexLabelPlacement) {
                    s = A * y;
                    for (a = 0; a < n.length; a++) {
                        var h =
                            q[a];
                        h.indexLabelTextBlock.x = w.x + s * Math.cos(h.midAngle);
                        h.indexLabelTextBlock.y = w.y + s * Math.sin(h.midAngle);
                        h.indexLabelAngle = h.midAngle;
                        h.radius = A;
                        h.percentInnerRadius = F
                    }
                    for (var u, t, a = 0; a < n.length; a++) {
                        var h = q[a],
                            x = e(a);
                        if (null !== x) {
                            u = q[a];
                            t = q[x];
                            var z = 0,
                                z = d(u, t) - r;
                            if (0 > z) {
                                for (var C = t = 0, D = 0; D < n.length; D++) D !== a && q[D].hemisphere === h.hemisphere && (q[D].indexLabelTextBlock.y < h.indexLabelTextBlock.y ? t++ : C++);
                                t = z / (t + C || 1) * C;
                                var C = -1 * (z - t),
                                    E = D = 0;
                                "right" === h.hemisphere ? (D = f(a, t), C = -1 * (z - D), E = f(x, C), +E.toFixed(v) <
                                    +C.toFixed(v) && +D.toFixed(v) <= +t.toFixed(v) && f(a, -(C - E))) : (D = f(x, t), C = -1 * (z - D), E = f(a, C), +E.toFixed(v) < +C.toFixed(v) && +D.toFixed(v) <= +t.toFixed(v) && f(x, -(C - E)))
                            }
                        }
                    }
                } else
                    for (a = 0; a < n.length; a++) h = q[a], s = "pie" === k.type ? 0.7 * A : 0.8 * A, x = w.x + s * Math.cos(h.midAngle), t = w.y + s * Math.sin(h.midAngle), h.indexLabelTextBlock.x = x, h.indexLabelTextBlock.y = t;
                for (a = 0; a < n.length; a++)
                    if (h = q[a], x = h.indexLabelTextBlock.measureText(), 0 !== x.height && 0 !== x.width) x = x = 0, "right" === h.hemisphere ? (x = l.x2 - (h.indexLabelTextBlock.x + h.indexLabelTextBlock.width +
                        m), x *= -1) : x = l.x1 - (h.indexLabelTextBlock.x - h.indexLabelTextBlock.width - m), 0 < x && (!g && h.indexLabelText && (t = "right" === h.hemisphere ? l.x2 - h.indexLabelTextBlock.x : h.indexLabelTextBlock.x - l.x1, 0.3 * h.indexLabelTextBlock.maxWidth > t ? h.indexLabelText = "" : h.indexLabelTextBlock.maxWidth = 0.85 * t, 0.3 * h.indexLabelTextBlock.maxWidth < t && (h.indexLabelTextBlock.x -= "right" === h.hemisphere ? 2 : -2)), Math.abs(h.indexLabelTextBlock.y - h.indexLabelTextBlock.height / 2 - w.y) < A || Math.abs(h.indexLabelTextBlock.y + h.indexLabelTextBlock.height /
                        2 - w.y) < A) && (x /= Math.abs(Math.cos(h.indexLabelAngle)), 9 < x && (x *= 0.3), x > c && (c = x)), x = x = 0, 0 < h.indexLabelAngle && h.indexLabelAngle < Math.PI ? (x = l.y2 - (h.indexLabelTextBlock.y + h.indexLabelTextBlock.height / 2 + 5), x *= -1) : x = l.y1 - (h.indexLabelTextBlock.y - h.indexLabelTextBlock.height / 2 - 5), 0 < x && (!g && h.indexLabelText && (t = 0 < h.indexLabelAngle && h.indexLabelAngle < Math.PI ? -1 : 1, 0 === f(a, x * t) && f(a, 2 * t)), Math.abs(h.indexLabelTextBlock.x - w.x) < A && (x /= Math.abs(Math.sin(h.indexLabelAngle)), 9 < x && (x *= 0.3), x > c && (c = x)));
                var R = function(a,
                    b, c) {
                    for (var d = [], e = 0; d.push(q[b]), b !== c; b = (b + 1 + n.length) % n.length);
                    d.sort(function(a, b) {
                        return a.y - b.y
                    });
                    for (b = 0; b < d.length; b++)
                        if (c = d[b], e < 0.7 * a) e += c.indexLabelTextBlock.height, c.indexLabelTextBlock.text = "", c.indexLabelText = "", c.indexLabelTextBlock.measureText();
                        else break
                };
                (function() {
                    for (var a = -1, b = -1, c = 0, f = !1, g = 0; g < n.length; g++)
                        if (f = !1, u = q[g], u.indexLabelText) {
                            var h = e(g);
                            if (null !== h) {
                                var k = q[h];
                                z = 0;
                                z = d(u, k);
                                var l;
                                if (l = 0 > z) {
                                    l = u.indexLabelTextBlock.x;
                                    var p = u.indexLabelTextBlock.y - u.indexLabelTextBlock.height /
                                        2,
                                        r = u.indexLabelTextBlock.y + u.indexLabelTextBlock.height / 2,
                                        s = k.indexLabelTextBlock.y - k.indexLabelTextBlock.height / 2,
                                        v = k.indexLabelTextBlock.x + k.indexLabelTextBlock.width,
                                        t = k.indexLabelTextBlock.y + k.indexLabelTextBlock.height / 2;
                                    l = u.indexLabelTextBlock.x + u.indexLabelTextBlock.width < k.indexLabelTextBlock.x - m || l > v + m || p > t + m || r < s - m ? !1 : !0
                                }
                                l ? (0 > a && (a = g), h !== a && (b = h, c += -z), 0 === g % Math.max(n.length / 10, 3) && (f = !0)) : f = !0;
                                f && (0 < c && 0 <= a && 0 <= b) && (R(c, a, b), b = a = -1, c = 0)
                            }
                        }
                    0 < c && R(c, a, b)
                })()
            }
        }

        function h() {
            p.plotArea.layoutManager.reset();
            p._title && (p._title.dockInsidePlotArea || "center" === p._title.horizontalAlign && "center" === p._title.verticalAlign) && p._title.render();
            if (p.subtitles)
                for (var a = 0; a < p.subtitles.length; a++) {
                    var b = p.subtitles[a];
                    (b.dockInsidePlotArea || "center" === b.horizontalAlign && "center" === b.verticalAlign) && b.render()
                }
            p.legend && (p.legend.dockInsidePlotArea || "center" === p.legend.horizontalAlign && "center" === p.legend.verticalAlign) && p.legend.render()
        }
        var p = this;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var k = this.data[a.dataSeriesIndexes[0]],
                n = k.dataPoints,
                m = 10,
                l = this.plotArea,
                q = [],
                r = 2,
                s, y = 1.3,
                u = 20 / 180 * Math.PI,
                v = 6,
                w = {
                    x: (l.x2 + l.x1) / 2,
                    y: (l.y2 + l.y1) / 2
                },
                t = 0;
            a = !1;
            for (var z = 0; z < n.length; z++) t += Math.abs(n[z].y), !a && ("undefined" !== typeof n[z].indexLabel && null !== n[z].indexLabel && 0 < n[z].indexLabel.toString().length) && (a = !0), !a && ("undefined" !== typeof n[z].label && null !== n[z].label && 0 < n[z].label.toString().length) && (a = !0);
            if (0 !== t) {
                a = a || "undefined" !== typeof k.indexLabel && null !== k.indexLabel && 0 < k.indexLabel.toString().length;
                var A = "inside" !== k.indexLabelPlacement &&
                    a ? 0.75 * Math.min(l.width, l.height) / 2 : 0.92 * Math.min(l.width, l.height) / 2;
                k.radius && (A = Ga(k.radius, A));
                var B = "undefined" !== typeof k.innerRadius && null !== k.innerRadius ? Ga(k.innerRadius, A) : 0.7 * A,
                    F = Math.min(B / A, (A - 1) / A);
                this.pieDoughnutClickHandler = function(a) {
                    p.isAnimating || !x(a.dataSeries.explodeOnClick) && !a.dataSeries.explodeOnClick || (a = a.dataPoint, a.exploded = a.exploded ? !1 : !0, 1 < this.dataPoints.length && p._animator.animate(0, 500, function(a) {
                        b(a);
                        h()
                    }))
                };
                c();
                g();
                g();
                g();
                g();
                this.disableToolTip = !0;
                this._animator.animate(0,
                    this.animatedRender ? this.animationDuration : 0,
                    function(a) {
                        var b = p.plotArea.ctx;
                        b.clearRect(l.x1, l.y1, l.width, l.height);
                        b.fillStyle = p.backgroundColor;
                        b.fillRect(l.x1, l.y1, l.width, l.height);
                        a = q[0].startAngle + 2 * Math.PI * a;
                        for (b = 0; b < n.length; b++) {
                            var c = 0 === b ? q[b].startAngle : d,
                                d = c + (q[b].endAngle - q[b].startAngle),
                                e = !1;
                            d > a && (d = a, e = !0);
                            var f = n[b].color ? n[b].color : k._colorSet[b % k._colorSet.length];
                            d > c && ya(p.plotArea.ctx, q[b].center, q[b].radius, f, k.type, c, d, k.fillOpacity, q[b].percentInnerRadius);
                            if (e) break
                        }
                        h()
                    },
                    function() {
                        p.disableToolTip = !1;
                        p._animator.animate(0, p.animatedRender ? 500 : 0, function(a) {
                            b(a);
                            h()
                        })
                    })
            }
        }
    };
    z.prototype.animationRequestId = null;
    z.prototype.requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
            window.setTimeout(a, 1E3 / 60)
        }
    }();
    z.prototype.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame ||
        window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
    da.prototype.registerSpace = function(a, c) {
        "top" === a ? this._topOccupied += c.height : "bottom" === a ? this._bottomOccupied += c.height : "left" === a ? this._leftOccupied += c.width : "right" === a && (this._rightOccupied += c.width)
    };
    da.prototype.unRegisterSpace = function(a, c) {
        "top" === a ? this._topOccupied -= c.height : "bottom" === a ? this._bottomOccupied -= c.height : "left" === a ? this._leftOccupied -= c.width : "right" === a && (this._rightOccupied -= c.width)
    };
    da.prototype.getFreeSpace = function() {
        return {
            x1: this._x1 + this._leftOccupied,
            y1: this._y1 + this._topOccupied,
            x2: this._x2 - this._rightOccupied,
            y2: this._y2 - this._bottomOccupied,
            width: this._x2 - this._x1 - this._rightOccupied - this._leftOccupied,
            height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied
        }
    };
    da.prototype.reset = function() {
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding
    };
    S(L, K);
    L.prototype.render = function(a) {
        a && this.ctx.save();
        var c = this.ctx.font;
        this.ctx.textBaseline =
            this.textBaseline;
        var b = 0;
        this._isDirty && this.measureText(this.ctx);
        this.ctx.translate(this.x, this.y + b);
        "middle" === this.textBaseline && (b = -this._lineHeight / 2);
        this.ctx.font = this._getFontString();
        this.ctx.rotate(Math.PI / 180 * this.angle);
        var d = 0,
            e = this.padding,
            f = null;
        (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(0, b, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
        this.ctx.fillStyle = this.fontColor;
        for (b = 0; b < this._wrappedText.lines.length; b++) f =
            this._wrappedText.lines[b], "right" === this.horizontalAlign ? d = this.width - f.width - this.padding : "left" === this.horizontalAlign ? d = this.padding : "center" === this.horizontalAlign && (d = (this.width - 2 * this.padding) / 2 - f.width / 2 + this.padding), this.ctx.fillText(f.text, d, e), e += f.height;
        this.ctx.font = c;
        a && this.ctx.restore()
    };
    L.prototype.setText = function(a) {
        this.text = a;
        this._isDirty = !0;
        this._wrappedText = null
    };
    L.prototype.measureText = function() {
        this._lineHeight = Ba(this.fontFamily, this.fontSize, this.fontWeight);
        if (null ===
            this.maxWidth) throw "Please set maxWidth and height for TextBlock";
        this._wrapText(this.ctx);
        this._isDirty = !1;
        return {
            width: this.width,
            height: this.height
        }
    };
    L.prototype._getLineWithWidth = function(a, c, b) {
        a = String(a);
        if (!a) return {
            text: "",
            width: 0
        };
        var d = b = 0,
            e = a.length - 1,
            f = Infinity;
        for (this.ctx.font = this._getFontString(); d <= e;) {
            var f = Math.floor((d + e) / 2),
                g = a.substr(0, f + 1);
            b = this.ctx.measureText(g).width;
            if (b < c) d = f + 1;
            else if (b > c) e = f - 1;
            else break
        }
        b > c && 1 < g.length && (g = g.substr(0, g.length - 1), b = this.ctx.measureText(g).width);
        c = !0;
        if (g.length === a.length || " " === a[g.length]) c = !1;
        c && (a = g.split(" "), 1 < a.length && a.pop(), g = a.join(" "), b = this.ctx.measureText(g).width);
        return {
            text: g,
            width: b
        }
    };
    L.prototype._wrapText = function() {
        var a = new String(ea(String(this.text))),
            c = [],
            b = this.ctx.font,
            d = 0,
            e = 0;
        for (this.ctx.font = this._getFontString(); 0 < a.length;) {
            var f = this.maxHeight - 2 * this.padding,
                g = this._getLineWithWidth(a, this.maxWidth - 2 * this.padding, !1);
            g.height = this._lineHeight;
            c.push(g);
            var h = e,
                e = Math.max(e, g.width),
                d = d + g.height,
                a = ea(a.slice(g.text.length,
                    a.length));
            f && d > f && (g = c.pop(), d -= g.height, e = h)
        }
        this._wrappedText = {
            lines: c,
            width: e,
            height: d
        };
        this.width = e + 2 * this.padding;
        this.height = d + 2 * this.padding;
        this.ctx.font = b
    };
    L.prototype._getFontString = function() {
        var a;
        a = "" + (this.fontStyle ? this.fontStyle + " " : "");
        a += this.fontWeight ? this.fontWeight + " " : "";
        a += this.fontSize ? this.fontSize + "px " : "";
        var c = this.fontFamily ? this.fontFamily + "" : "";
        !t && c && (c = c.split(",")[0], "'" !== c[0] && '"' !== c[0] && (c = "'" + c + "'"));
        return a += c
    };
    S(ga, K);
    ga.prototype.render = function() {
        if (this.text) {
            var a =
                this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
                c = a.layoutManager.getFreeSpace(),
                b = c.x1,
                d = c.y1,
                e = 0,
                f = 0,
                g = this.chart._menuButton && this.chart.exportEnabled && "top" === this.verticalAlign ? 22 : 0,
                h, p;
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (null === this.maxWidth && (this.maxWidth = c.width - 4 - g * ("center" === this.horizontalAlign ? 2 : 1)), f = 0.5 * c.height - this.margin - 2, e = 0) : "center" === this.verticalAlign && ("left" === this.horizontalAlign || "right" === this.horizontalAlign ? (null === this.maxWidth && (this.maxWidth =
                c.height - 4), f = 0.5 * c.width - this.margin - 2) : "center" === this.horizontalAlign && (null === this.maxWidth && (this.maxWidth = c.width - 4), f = 0.5 * c.height - 4));
            this.wrap || (f = Math.min(f, Math.max(1.5 * this.fontSize, this.fontSize + 2.5 * this.padding)));
            var f = new L(this.ctx, {
                    fontSize: this.fontSize,
                    fontFamily: this.fontFamily,
                    fontColor: this.fontColor,
                    fontStyle: this.fontStyle,
                    fontWeight: this.fontWeight,
                    horizontalAlign: this.horizontalAlign,
                    verticalAlign: this.verticalAlign,
                    borderColor: this.borderColor,
                    borderThickness: this.borderThickness,
                    backgroundColor: this.backgroundColor,
                    maxWidth: this.maxWidth,
                    maxHeight: f,
                    cornerRadius: this.cornerRadius,
                    text: this.text,
                    padding: this.padding,
                    textBaseline: "top"
                }),
                k = f.measureText();
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? ("top" === this.verticalAlign ? (d = c.y1 + 2, p = "top") : "bottom" === this.verticalAlign && (d = c.y2 - 2 - k.height, p = "bottom"), "left" === this.horizontalAlign ? b = c.x1 + 2 : "center" === this.horizontalAlign ? b = c.x1 + c.width / 2 - k.width / 2 : "right" === this.horizontalAlign && (b = c.x2 - 2 - k.width - g), h = this.horizontalAlign,
                this.width = k.width, this.height = k.height) : "center" === this.verticalAlign && ("left" === this.horizontalAlign ? (b = c.x1 + 2, d = c.y2 - 2 - (this.maxWidth / 2 - k.width / 2), e = -90, p = "left", this.width = k.height, this.height = k.width) : "right" === this.horizontalAlign ? (b = c.x2 - 2, d = c.y1 + 2 + (this.maxWidth / 2 - k.width / 2), e = 90, p = "right", this.width = k.height, this.height = k.width) : "center" === this.horizontalAlign && (d = a.y1 + (a.height / 2 - k.height / 2), b = a.x1 + (a.width / 2 - k.width / 2), p = "center", this.width = k.width, this.height = k.height), h = "center");
            f.x =
                b;
            f.y = d;
            f.angle = e;
            f.horizontalAlign = h;
            f.render(!0);
            a.layoutManager.registerSpace(p, {
                width: this.width + ("left" === p || "right" === p ? this.margin + 2 : 0),
                height: this.height + ("top" === p || "bottom" === p ? this.margin + 2 : 0)
            });
            this.bounds = {
                x1: b,
                y1: d,
                x2: b + this.width,
                y2: d + this.height
            };
            this.ctx.textBaseline = "top"
        }
    };
    S(na, K);
    na.prototype.render = ga.prototype.render;
    S(oa, K);
    oa.prototype.render = function() {
        var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
            c = a.layoutManager.getFreeSpace(),
            b = null,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = this.chart._options.legend &&
            !x(this.chart._options.legend.markerMargin) ? this.chart._options.legend.markerMargin : 0.3 * this.fontSize;
        this.height = 0;
        var p = [],
            k = [];
        "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (this.orientation = "horizontal", b = this.verticalAlign, f = null !== this.maxWidth ? this.maxWidth : c.width, g = null !== this.maxHeight ? this.maxHeight : 0.5 * c.height) : "center" === this.verticalAlign && (this.orientation = "vertical", b = this.horizontalAlign, f = null !== this.maxWidth ? this.maxWidth : 0.5 * c.width, g = null !== this.maxHeight ? this.maxHeight :
            c.height);
        for (var n = 0; n < this.dataSeries.length; n++) {
            var m = this.dataSeries[n];
            if ("pie" !== m.type && "doughnut" !== m.type && "funnel" !== m.type) {
                var l = m.legendMarkerType ? m.legendMarkerType : "line" !== m.type && "stepLine" !== m.type && "spline" !== m.type && "scatter" !== m.type && "bubble" !== m.type || !m.markerType ? W.getDefaultLegendMarker(m.type) : m.markerType,
                    q = m.legendText ? m.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                        chart: this.chart._publicChartReference,
                        legend: this._options,
                        dataSeries: m,
                        dataPoint: null
                    }) :
                    m.name,
                    r = m.legendMarkerColor ? m.legendMarkerColor : m.markerColor ? m.markerColor : m._colorSet[0],
                    s = m.markerSize || "line" !== m.type && "stepLine" !== m.type && "spline" !== m.type ? 0.75 * this.lineHeight : 0,
                    t = m.legendMarkerBorderColor ? m.legendMarkerBorderColor : m.markerBorderColor,
                    u = m.legendMarkerBorderThickness ? m.legendMarkerBorderThickness : m.markerBorderThickness ? Math.max(1, Math.round(0.2 * s)) : 0,
                    q = this.chart.replaceKeywordsWithValue(q, m.dataPoints[0], m, n),
                    l = {
                        markerType: l,
                        markerColor: r,
                        text: q,
                        textBlock: null,
                        chartType: m.type,
                        markerSize: s,
                        lineColor: m._colorSet[0],
                        dataSeriesIndex: m.index,
                        dataPointIndex: null,
                        markerBorderColor: t,
                        markerBorderThickness: u
                    };
                p.push(l)
            } else
                for (var v = 0; v < m.dataPoints.length; v++) {
                    var w = m.dataPoints[v],
                        l = w.legendMarkerType ? w.legendMarkerType : m.legendMarkerType ? m.legendMarkerType : W.getDefaultLegendMarker(m.type),
                        q = w.legendText ? w.legendText : m.legendText ? m.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                            chart: this.chart._publicChartReference,
                            legend: this._options,
                            dataSeries: m,
                            dataPoint: w
                        }) :
                        w.name ? w.name : "DataPoint: " + (v + 1),
                        r = w.legendMarkerColor ? w.legendMarkerColor : m.legendMarkerColor ? m.legendMarkerColor : w.color ? w.color : m.color ? m.color : m._colorSet[v % m._colorSet.length],
                        s = 0.75 * this.lineHeight,
                        t = w.legendMarkerBorderColor ? w.legendMarkerBorderColor : m.legendMarkerBorderColor ? m.legendMarkerBorderColor : w.markerBorderColor ? w.markerBorderColor : m.markerBorderColor,
                        u = w.legendMarkerBorderThickness ? w.legendMarkerBorderThickness : m.legendMarkerBorderThickness ? m.legendMarkerBorderThickness : w.markerBorderThickness ||
                        m.markerBorderThickness ? Math.max(1, Math.round(0.2 * s)) : 0,
                        q = this.chart.replaceKeywordsWithValue(q, w, m, v),
                        l = {
                            markerType: l,
                            markerColor: r,
                            text: q,
                            textBlock: null,
                            chartType: m.type,
                            markerSize: s,
                            dataSeriesIndex: n,
                            dataPointIndex: v,
                            markerBorderColor: t,
                            markerBorderThickness: u
                        };
                    (w.showInLegend || m.showInLegend && !1 !== w.showInLegend) && p.push(l)
                }
        }!0 === this.reversed && p.reverse();
        if (0 < p.length) {
            m = null;
            v = q = w = 0;
            q = null !== this.itemWidth ? null !== this.itemMaxWidth ? Math.min(this.itemWidth, this.itemMaxWidth, f) : Math.min(this.itemWidth,
                f) : null !== this.itemMaxWidth ? Math.min(this.itemMaxWidth, f) : f;
            s = 0 === s ? 0.75 * this.lineHeight : s;
            q -= s + h;
            for (n = 0; n < p.length; n++) {
                l = p[n];
                if ("line" === l.chartType || "spline" === l.chartType || "stepLine" === l.chartType) q -= 2 * 0.1 * this.lineHeight;
                if (!(0 >= g || "undefined" === typeof g || 0 >= q || "undefined" === typeof q)) {
                    if ("horizontal" === this.orientation) {
                        l.textBlock = new L(this.ctx, {
                            x: 0,
                            y: 0,
                            maxWidth: q,
                            maxHeight: this.itemWrap ? g : this.lineHeight,
                            angle: 0,
                            text: l.text,
                            horizontalAlign: "left",
                            fontSize: this.fontSize,
                            fontFamily: this.fontFamily,
                            fontWeight: this.fontWeight,
                            fontColor: this.fontColor,
                            fontStyle: this.fontStyle,
                            textBaseline: "middle"
                        });
                        l.textBlock.measureText();
                        null !== this.itemWidth && (l.textBlock.width = this.itemWidth - (s + h + ("line" === l.chartType || "spline" === l.chartType || "stepLine" === l.chartType ? 2 * 0.1 * this.lineHeight : 0)));
                        if (!m || m.width + Math.round(l.textBlock.width + s + h + (0 === m.width ? 0 : this.horizontalSpacing) + ("line" === l.chartType || "spline" === l.chartType || "stepLine" === l.chartType ? 2 * 0.1 * this.lineHeight : 0)) > f) m = {
                                items: [],
                                width: 0
                            }, k.push(m),
                            this.height += v, v = 0;
                        v = Math.max(v, l.textBlock.height)
                    } else l.textBlock = new L(this.ctx, {
                        x: 0,
                        y: 0,
                        maxWidth: q,
                        maxHeight: !0 === this.itemWrap ? g : 1.5 * this.fontSize,
                        angle: 0,
                        text: l.text,
                        horizontalAlign: "left",
                        fontSize: this.fontSize,
                        fontFamily: this.fontFamily,
                        fontWeight: this.fontWeight,
                        fontColor: this.fontColor,
                        fontStyle: this.fontStyle,
                        textBaseline: "middle"
                    }), l.textBlock.measureText(), null !== this.itemWidth && (l.textBlock.width = this.itemWidth - (s + h + ("line" === l.chartType || "spline" === l.chartType || "stepLine" === l.chartType ?
                        2 * 0.1 * this.lineHeight : 0))), this.height < g - this.lineHeight ? (m = {
                        items: [],
                        width: 0
                    }, k.push(m)) : (m = k[w], w = (w + 1) % k.length), this.height += l.textBlock.height;
                    l.textBlock.x = m.width;
                    l.textBlock.y = 0;
                    m.width += Math.round(l.textBlock.width + s + h + (0 === m.width ? 0 : this.horizontalSpacing) + ("line" === l.chartType || "spline" === l.chartType || "stepLine" === l.chartType ? 2 * 0.1 * this.lineHeight : 0));
                    m.items.push(l);
                    this.width = Math.max(m.width, this.width)
                }
            }
            this.height = !1 === this.itemWrap ? k.length * this.lineHeight : this.height + v;
            this.height =
                Math.min(g, this.height);
            this.width = Math.min(f, this.width)
        }
        "top" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? c.x1 : "right" === this.horizontalAlign ? c.x2 - this.width : c.x1 + c.width / 2 - this.width / 2, d = c.y1) : "center" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? c.x1 : "right" === this.horizontalAlign ? c.x2 - this.width : c.x1 + c.width / 2 - this.width / 2, d = c.y1 + c.height / 2 - this.height / 2) : "bottom" === this.verticalAlign && (e = "left" === this.horizontalAlign ? c.x1 : "right" === this.horizontalAlign ? c.x2 - this.width : c.x1 +
            c.width / 2 - this.width / 2, d = c.y2 - this.height);
        this.items = p;
        for (n = 0; n < this.items.length; n++) l = p[n], l.id = ++this.chart._eventManager.lastObjectId, this.chart._eventManager.objectMap[l.id] = {
            id: l.id,
            objectType: "legendItem",
            legendItemIndex: n,
            dataSeriesIndex: l.dataSeriesIndex,
            dataPointIndex: l.dataPointIndex
        };
        for (n = c = 0; n < k.length; n++) {
            m = k[n];
            for (w = v = 0; w < m.items.length; w++) {
                l = m.items[w];
                r = l.textBlock.x + e + (0 === w ? 0.2 * s : this.horizontalSpacing);
                t = d + c;
                q = r;
                this.chart.data[l.dataSeriesIndex].visible || (this.ctx.globalAlpha =
                    0.5);
                this.ctx.save();
                this.ctx.beginPath();
                this.ctx.rect(e, d, f, Math.max(g - g % this.lineHeight, 0));
                this.ctx.clip();
                if ("line" === l.chartType || "stepLine" === l.chartType || "spline" === l.chartType) this.ctx.strokeStyle = l.lineColor, this.ctx.lineWidth = Math.ceil(this.lineHeight / 8), this.ctx.beginPath(), this.ctx.moveTo(r - 0.1 * this.lineHeight, t + this.lineHeight / 2), this.ctx.lineTo(r + 0.85 * this.lineHeight, t + this.lineHeight / 2), this.ctx.stroke(), q -= 0.1 * this.lineHeight;
                O.drawMarker(r + s / 2, t + this.lineHeight / 2, this.ctx, l.markerType,
                    l.markerSize, l.markerColor, l.markerBorderColor, l.markerBorderThickness);
                l.textBlock.x = r + h + s;
                if ("line" === l.chartType || "stepLine" === l.chartType || "spline" === l.chartType) l.textBlock.x += 0.1 * this.lineHeight;
                l.textBlock.y = Math.round(t + this.lineHeight / 2);
                l.textBlock.render(!0);
                this.ctx.restore();
                v = 0 < w ? Math.max(v, l.textBlock.height) : l.textBlock.height;
                this.chart.data[l.dataSeriesIndex].visible || (this.ctx.globalAlpha = 1);
                r = C(l.id);
                this.ghostCtx.fillStyle = r;
                this.ghostCtx.beginPath();
                this.ghostCtx.fillRect(q,
                    l.textBlock.y - this.lineHeight / 2, l.textBlock.x + l.textBlock.width - q, l.textBlock.height);
                l.x1 = this.chart._eventManager.objectMap[l.id].x1 = q;
                l.y1 = this.chart._eventManager.objectMap[l.id].y1 = l.textBlock.y - this.lineHeight / 2;
                l.x2 = this.chart._eventManager.objectMap[l.id].x2 = l.textBlock.x + l.textBlock.width;
                l.y2 = this.chart._eventManager.objectMap[l.id].y2 = l.textBlock.y + l.textBlock.height - this.lineHeight / 2
            }
            c += v
        }
        0 < p.length && a.layoutManager.registerSpace(b, {
            width: this.width + 2 + 2,
            height: this.height + 5 + 5
        });
        this.bounds = {
            x1: e,
            y1: d,
            x2: e + this.width,
            y2: d + this.height
        }
    };
    S(ua, K);
    ua.prototype.render = function() {
        var a = this.chart.layoutManager.getFreeSpace();
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(a.x1, a.y1, a.x2, a.y2)
    };
    S(W, K);
    W.prototype.getDefaultAxisPlacement = function() {
        var a = this.type;
        if ("column" === a || "line" === a || "stepLine" === a || "spline" === a || "area" === a || "stepArea" === a || "splineArea" === a || "stackedColumn" === a || "stackedLine" === a || "bubble" === a || "scatter" === a || "stackedArea" === a || "stackedColumn100" === a || "stackedLine100" ===
            a || "stackedArea100" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeArea" === a || "rangeSplineArea" === a) return "normal";
        if ("bar" === a || "stackedBar" === a || "stackedBar100" === a || "rangeBar" === a) return "xySwapped";
        if ("pie" === a || "doughnut" === a || "funnel" === a) return "none";
        window.console.log("Unknown Chart Type: " + a);
        return null
    };
    W.getDefaultLegendMarker = function(a) {
        if ("column" === a || "stackedColumn" === a || "stackedLine" === a || "bar" === a || "stackedBar" === a || "stackedBar100" === a || "bubble" === a || "scatter" === a ||
            "stackedColumn100" === a || "stackedLine100" === a || "stepArea" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeBar" === a || "rangeArea" === a || "rangeSplineArea" === a) return "square";
        if ("line" === a || "stepLine" === a || "spline" === a || "pie" === a || "doughnut" === a || "funnel" === a) return "circle";
        if ("area" === a || "splineArea" === a || "stackedArea" === a || "stackedArea100" === a) return "triangle";
        window.console.log("Unknown Chart Type: " + a);
        return null
    };
    W.prototype.getDataPointAtX = function(a, c) {
        if (!this.dataPoints || 0 === this.dataPoints.length) return null;
        var b = {
                dataPoint: null,
                distance: Infinity,
                index: NaN
            },
            d = null,
            e = 0,
            f = 0,
            g = 1,
            h = Infinity,
            p = 0,
            k = 0,
            n = 0;
        "none" !== this.chart.plotInfo.axisPlacement && (this.axisX.logarithmic ? (n = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), n = 1 < n ? Math.min(Math.max((this.dataPoints.length - 1) / n * Math.log(a / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0) : (n = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, n = 0 < n ? Math.min(Math.max((this.dataPoints.length - 1) / n * (a - this.dataPoints[0].x) >>
            0, 0), this.dataPoints.length) : 0));
        for (;;) {
            f = 0 < g ? n + e : n - e;
            if (0 <= f && f < this.dataPoints.length) {
                var d = this.dataPoints[f],
                    m = this.axisX.logarithmic ? d.x > a ? d.x / a : a / d.x : Math.abs(d.x - a);
                m < b.distance && (b.dataPoint = d, b.distance = m, b.index = f);
                d = m;
                d <= h ? h = d : 0 < g ? p++ : k++;
                if (1E3 < p && 1E3 < k) break
            } else if (0 > n - e && n + e >= this.dataPoints.length) break; - 1 === g ? (e++, g = 1) : g = -1
        }
        return c || b.dataPoint.x !== a ? c && null !== b.dataPoint ? b : null : b
    };
    W.prototype.getDataPointAtXY = function(a, c, b) {
        if (!this.dataPoints || 0 === this.dataPoints.length || a <
            this.chart.plotArea.x1 || a > this.chart.plotArea.x2 || c < this.chart.plotArea.y1 || c > this.chart.plotArea.y2) return null;
        b = b || !1;
        var d = [],
            e = 0,
            f = 0,
            g = 1,
            h = !1,
            p = Infinity,
            k = 0,
            n = 0,
            m = 0;
        "none" !== this.chart.plotInfo.axisPlacement && (m = this.chart.axisX.getXValueAt({
            x: a,
            y: c
        }), this.axisX.logarithmic ? (f = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), m = 1 < f ? Math.min(Math.max((this.dataPoints.length - 1) / f * Math.log(m / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0) : (f = this.dataPoints[this.dataPoints.length -
            1].x - this.dataPoints[0].x, m = 0 < f ? Math.min(Math.max((this.dataPoints.length - 1) / f * (m - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0));
        for (;;) {
            f = 0 < g ? m + e : m - e;
            if (0 <= f && f < this.dataPoints.length) {
                var l = this.chart._eventManager.objectMap[this.dataPointIds[f]],
                    q = this.dataPoints[f],
                    r = null;
                if (l) {
                    switch (this.type) {
                        case "column":
                        case "stackedColumn":
                        case "stackedColumn100":
                        case "bar":
                        case "stackedBar":
                        case "stackedBar100":
                        case "rangeColumn":
                        case "rangeBar":
                            a >= l.x1 && (a <= l.x2 && c >= l.y1 && c <= l.y2) && (d.push({
                                dataPoint: q,
                                dataPointIndex: f,
                                dataSeries: this,
                                distance: Math.min(Math.abs(l.x1 - a), Math.abs(l.x2 - a), Math.abs(l.y1 - c), Math.abs(l.y2 - c))
                            }), h = !0);
                            break;
                        case "line":
                        case "stepLine":
                        case "spline":
                        case "area":
                        case "stepArea":
                        case "stackedArea":
                        case "stackedArea100":
                        case "splineArea":
                        case "scatter":
                            var s = Q("markerSize", q, this) || 4,
                                t = b ? 20 : s,
                                r = Math.sqrt(Math.pow(l.x1 - a, 2) + Math.pow(l.y1 - c, 2));
                            r <= t && d.push({
                                dataPoint: q,
                                dataPointIndex: f,
                                dataSeries: this,
                                distance: r
                            });
                            f = Math.abs(l.x1 - a);
                            f <= p ? p = f : 0 < g ? k++ : n++;
                            r <= s / 2 && (h = !0);
                            break;
                        case "rangeArea":
                        case "rangeSplineArea":
                            s = Q("markerSize", q, this) || 4;
                            t = b ? 20 : s;
                            r = Math.min(Math.sqrt(Math.pow(l.x1 - a, 2) + Math.pow(l.y1 - c, 2)), Math.sqrt(Math.pow(l.x1 - a, 2) + Math.pow(l.y2 - c, 2)));
                            r <= t && d.push({
                                dataPoint: q,
                                dataPointIndex: f,
                                dataSeries: this,
                                distance: r
                            });
                            f = Math.abs(l.x1 - a);
                            f <= p ? p = f : 0 < g ? k++ : n++;
                            r <= s / 2 && (h = !0);
                            break;
                        case "bubble":
                            s = l.size;
                            r = Math.sqrt(Math.pow(l.x1 - a, 2) + Math.pow(l.y1 - c, 2));
                            r <= s / 2 && (d.push({
                                dataPoint: q,
                                dataPointIndex: f,
                                dataSeries: this,
                                distance: r
                            }), h = !0);
                            break;
                        case "pie":
                        case "doughnut":
                            s =
                                l.center;
                            t = "doughnut" === this.type ? l.percentInnerRadius * l.radius : 0;
                            r = Math.sqrt(Math.pow(s.x - a, 2) + Math.pow(s.y - c, 2));
                            r < l.radius && r > t && (r = Math.atan2(c - s.y, a - s.x), 0 > r && (r += 2 * Math.PI), r = Number(((180 * (r / Math.PI) % 360 + 360) % 360).toFixed(12)), s = Number(((180 * (l.startAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), t = Number(((180 * (l.endAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), 0 === t && 1 < l.endAngle && (t = 360), s >= t && 0 !== q.y && (t += 360, r < s && (r += 360)), r > s && r < t && (d.push({
                                    dataPoint: q,
                                    dataPointIndex: f,
                                    dataSeries: this,
                                    distance: 0
                                }),
                                h = !0));
                            break;
                        case "candlestick":
                            if (a >= l.x1 - l.borderThickness / 2 && a <= l.x2 + l.borderThickness / 2 && c >= l.y2 - l.borderThickness / 2 && c <= l.y3 + l.borderThickness / 2 || Math.abs(l.x2 - a + l.x1 - a) < l.borderThickness && c >= l.y1 && c <= l.y4) d.push({
                                dataPoint: q,
                                dataPointIndex: f,
                                dataSeries: this,
                                distance: Math.min(Math.abs(l.x1 - a), Math.abs(l.x2 - a), Math.abs(l.y2 - c), Math.abs(l.y3 - c))
                            }), h = !0;
                            break;
                        case "ohlc":
                            if (Math.abs(l.x2 - a + l.x1 - a) < l.borderThickness && c >= l.y2 && c <= l.y3 || a >= l.x1 && a <= (l.x2 + l.x1) / 2 && c >= l.y1 - l.borderThickness / 2 && c <= l.y1 +
                                l.borderThickness / 2 || a >= (l.x1 + l.x2) / 2 && a <= l.x2 && c >= l.y4 - l.borderThickness / 2 && c <= l.y4 + l.borderThickness / 2) d.push({
                                dataPoint: q,
                                dataPointIndex: f,
                                dataSeries: this,
                                distance: Math.min(Math.abs(l.x1 - a), Math.abs(l.x2 - a), Math.abs(l.y2 - c), Math.abs(l.y3 - c))
                            }), h = !0
                    }
                    if (h || 1E3 < k && 1E3 < n) break
                }
            } else if (0 > m - e && m + e >= this.dataPoints.length) break; - 1 === g ? (e++, g = 1) : g = -1
        }
        a = null;
        for (c = 0; c < d.length; c++) a ? d[c].distance <= a.distance && (a = d[c]) : a = d[c];
        return a
    };
    W.prototype.getMarkerProperties = function(a, c, b, d) {
        var e = this.dataPoints;
        return {
            x: c,
            y: b,
            ctx: d,
            type: e[a].markerType ? e[a].markerType : this.markerType,
            size: e[a].markerSize ? e[a].markerSize : this.markerSize,
            color: e[a].markerColor ? e[a].markerColor : this.markerColor ? this.markerColor : e[a].color ? e[a].color : this.color ? this.color : this._colorSet[a % this._colorSet.length],
            borderColor: e[a].markerBorderColor ? e[a].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null,
            borderThickness: e[a].markerBorderThickness ? e[a].markerBorderThickness : this.markerBorderThickness ? this.markerBorderThickness : null
        }
    };
    S(B, K);
    B.prototype.createExtraLabelsForLog = function(a) {
        a = (a || 0) + 1;
        if (!(5 < a)) {
            var c = this.logLabelValues[0] || this.intervalStartPosition;
            if (Math.log(this.range) / Math.log(c / this.viewportMinimum) < this.noTicks - 1) {
                for (var b = B.getNiceNumber((c - this.viewportMinimum) / Math.min(Math.max(2, this.noTicks - this.logLabelValues.length), 3), !0), d = Math.ceil(this.viewportMinimum / b) * b; d < c; d += b) d < this.viewportMinimum || this.logLabelValues.push(d);
                this.logLabelValues.sort(sa);
                this.createExtraLabelsForLog(a)
            }
        }
    };
    B.prototype.createLabels =
        function() {
            var a, c, b = 0,
                d = 0,
                e, f = 0,
                g = 0,
                d = 0,
                h = this.interval,
                p = 0,
                k, n = 0.6 * this.chart.height;
            if ("axisX" !== this.type || "dateTime" !== this.chart.plotInfo.axisXValueType || this.logarithmic) {
                e = this.viewportMaximum;
                if (this.labels) {
                    a = Math.ceil(h);
                    for (var h = Math.ceil(this.intervalStartPosition), m = !1, b = h; b < this.viewportMaximum; b += a)
                        if (this.labels[b]) m = !0;
                        else {
                            m = !1;
                            break
                        }
                    m && (this.interval = a, this.intervalStartPosition = h)
                }
                if (this.logarithmic && !this.equidistantInterval) {
                    this.logLabelValues || (this.logLabelValues = [], this.createExtraLabelsForLog());
                    for (var l = 0; l < this.logLabelValues.length; l++) b = this.logLabelValues[l], b < this.viewportMinimum || (a = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart._publicChartReference,
                        axis: this._options,
                        value: b,
                        label: this.labels[b] ? this.labels[b] : null
                    }) : "axisX" === this.type && this.labels[b] ? this.labels[b] : Y(b, this.valueFormatString, this.chart._cultureInfo), a = new L(this.ctx, {
                        x: 0,
                        y: 0,
                        maxWidth: f,
                        maxHeight: g,
                        angle: this.labelAngle,
                        text: this.prefix + a + this.suffix,
                        horizontalAlign: "left",
                        fontSize: this.labelFontSize,
                        fontFamily: this.labelFontFamily,
                        fontWeight: this.labelFontWeight,
                        fontColor: this.labelFontColor,
                        fontStyle: this.labelFontStyle,
                        textBaseline: "middle",
                        borderThickness: 0
                    }), this._labels.push({
                        position: b,
                        textBlock: a,
                        effectiveHeight: null
                    }))
                }
                for (b = this.intervalStartPosition; b <= e; b = parseFloat((this.logarithmic && this.equidistantInterval ? b * Math.pow(this.logarithmBase, this.interval) : b + this.interval).toFixed(14))) a = this.labelFormatter ? this.labelFormatter({
                    chart: this.chart._publicChartReference,
                    axis: this._options,
                    value: b,
                    label: this.labels[b] ? this.labels[b] : null
                }) : "axisX" === this.type && this.labels[b] ? this.labels[b] : Y(b, this.valueFormatString, this.chart._cultureInfo), a = new L(this.ctx, {
                    x: 0,
                    y: 0,
                    maxWidth: f,
                    maxHeight: g,
                    angle: this.labelAngle,
                    text: this.prefix + a + this.suffix,
                    horizontalAlign: "left",
                    fontSize: this.labelFontSize,
                    fontFamily: this.labelFontFamily,
                    fontWeight: this.labelFontWeight,
                    fontColor: this.labelFontColor,
                    fontStyle: this.labelFontStyle,
                    textBaseline: "middle",
                    borderThickness: 0
                }), this._labels.push({
                    position: b,
                    textBlock: a,
                    effectiveHeight: null
                })
            } else
                for (this.intervalStartPosition = this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval), e = za(new Date(this.viewportMaximum), this.interval, this.intervalType), b = this.intervalStartPosition; b < e; za(b, h, this.intervalType)) a = b.getTime(), a = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart._publicChartReference,
                        axis: this._options,
                        value: b,
                        label: this.labels[b] ? this.labels[b] : null
                    }) : "axisX" === this.type && this.labels[a] ? this.labels[a] :
                    wa(b, this.valueFormatString, this.chart._cultureInfo), a = new L(this.ctx, {
                        x: 0,
                        y: 0,
                        maxWidth: f,
                        maxHeight: g,
                        angle: this.labelAngle,
                        text: this.prefix + a + this.suffix,
                        horizontalAlign: "left",
                        fontSize: this.labelFontSize,
                        fontFamily: this.labelFontFamily,
                        fontWeight: this.labelFontWeight,
                        fontColor: this.labelFontColor,
                        fontStyle: this.labelFontStyle,
                        textBaseline: "middle"
                    }), this._labels.push({
                        position: b.getTime(),
                        textBlock: a,
                        effectiveHeight: null
                    });
            if ("bottom" === this._position || "top" === this._position) p = this.logarithmic &&
                !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.width * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position, 2.5)) / Math.log(this.range) : this.lineCoordinates.width / (this.logarithmic && this.equidistantInterval ? Math.log(this.viewportMaximum / this.viewportMinimum) / Math.log(this.logarithmBase) : Math.abs(this.viewportMaximum - this.viewportMinimum)) * E[this.intervalType + "Duration"] * this.interval,
                f = "undefined" === typeof this._options.labelMaxWidth ? 0.5 * this.chart.width >> 0 : this._options.labelMaxWidth, this.chart.panEnabled || (g = "undefined" === typeof this._options.labelWrap || this.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize);
            else if ("left" === this._position || "right" === this._position) p = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.height * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position,
                    this._labels[1].position / this._labels[0].position, 2.5)) / Math.log(this.range) : this.lineCoordinates.height / (this.logarithmic && this.equidistantInterval ? Math.log(this.viewportMaximum / this.viewportMinimum) / Math.log(this.logarithmBase) : Math.abs(this.viewportMaximum - this.viewportMinimum)) * E[this.intervalType + "Duration"] * this.interval, this.chart.panEnabled || (f = "undefined" === typeof this._options.labelMaxWidth ? 0.3 * this.chart.width >> 0 : this._options.labelMaxWidth), g = "undefined" === typeof this._options.labelWrap ||
                this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
            for (d = 0; d < this._labels.length; d++) {
                a = this._labels[d].textBlock;
                a.maxWidth = f;
                a.maxHeight = g;
                var q = a.measureText();
                k = q.height
            }
            e = [];
            m = h = 0;
            if (this.labelAutoFit || this._options.labelAutoFit)
                if (x(this.labelAngle) || (this.labelAngle = (this.labelAngle % 360 + 360) % 360, 90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360)), "bottom" === this._position || "top" === this._position)
                    if (f = 0.9 *
                        p >> 0, m = 0, !this.chart.panEnabled && 1 <= this._labels.length) {
                        this.sessionVariables.labelFontSize = this.labelFontSize;
                        this.sessionVariables.labelMaxWidth = f;
                        this.sessionVariables.labelMaxHeight = g;
                        this.sessionVariables.labelAngle = this.labelAngle;
                        this.sessionVariables.labelWrap = this.labelWrap;
                        for (b = 0; b < this._labels.length; b++) {
                            a = this._labels[b].textBlock;
                            for (var r, s = a.text.split(" "), d = 0; d < s.length; d++) l = s[d], this.ctx.font = a.fontStyle + " " + a.fontWeight + " " + a.fontSize + "px " + a.fontFamily, l = this.ctx.measureText(l),
                                l.width > m && (r = b, m = l.width)
                        }
                        b = 0;
                        for (b = this.intervalStartPosition < this.viewportMinimum ? 1 : 0; b < this._labels.length; b++)
                            if (a = this._labels[b].textBlock, q = a.measureText(), b < this._labels.length - 1 && (l = b + 1, c = this._labels[l].textBlock, c = c.measureText()), e.push(a.height), this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e), Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), d = f * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (g - a.fontSize / 2) * Math.cos(Math.PI /
                                    180 * Math.abs(this.labelAngle)), x(this._options.labelAngle) && isNaN(this._options.labelAngle) && 0 !== this._options.labelAngle)
                                if (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? g : Math.min((d - f * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), d), s = (n - (k + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(-25))) / Math.sin(Math.PI / 180 * Math.abs(-25)), !x(this._options.labelWrap)) this.labelWrap ? x(this._options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth =
                                    Math.min(Math.max(f, m), s), this.sessionVariables.labelWrap = this.labelWrap, q.width + c.width >> 0 > 2 * f && (this.sessionVariables.labelAngle = -25)) : (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this._options.labelMaxWidth, this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > f ? -25 : this.sessionVariables.labelAngle) : x(this._options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = g, this.sessionVariables.labelMaxWidth =
                                    f, q.width + c.width >> 0 > 2 * f && (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = s)) : (this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > f ? -25 : this.sessionVariables.labelAngle, this.sessionVariables.labelMaxWidth = this._options.labelMaxWidth, this.sessionVariables.labelMaxHeight = g, this.sessionVariables.labelWrap = this.labelWrap);
                                else {
                                    if (x(this._options.labelWrap))
                                        if (!x(this._options.labelMaxWidth)) this._options.labelMaxWidth < f ? (this.sessionVariables.labelMaxWidth =
                                            this._options.labelMaxWidth, this.sessionVariables.labelMaxHeight = d) : (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = this._options.labelMaxWidth, this.sessionVariables.labelMaxHeight = g);
                                        else if (!x(c))
                                        if (d = q.width + c.width >> 0, l = this.labelFontSize, m < f) d - 2 * f > h && (h = d - 2 * f, d >= 2 * f && d < 2.2 * f ? (this.sessionVariables.labelMaxWidth = f, x(this._options.labelFontSize) && 12 < l && (l = Math.floor(12 / 13 * l), a.measureText()), this.sessionVariables.labelFontSize = x(this._options.labelFontSize) ? l : this._options.labelFontSize,
                                            this.sessionVariables.labelAngle = this.labelAngle) : d >= 2.2 * f && d < 2.8 * f ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = s, this.sessionVariables.labelFontSize = l) : d >= 2.8 * f && d < 3.2 * f ? (this.sessionVariables.labelMaxWidth = Math.max(f, m), this.sessionVariables.labelWrap = !0, x(this._options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = x(this._options.labelFontSize) ? l : this._options.labelFontSize,
                                            this.sessionVariables.labelAngle = this.labelAngle) : d >= 3.2 * f && d < 3.6 * f ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelMaxWidth = s, this.sessionVariables.labelFontSize = this.labelFontSize) : d > 3.6 * f && d < 5 * f ? (x(this._options.labelFontSize) && 12 < l && (l = Math.floor(12 / 13 * l), a.measureText()), this.sessionVariables.labelFontSize = x(this._options.labelFontSize) ? l : this._options.labelFontSize, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth =
                                            s) : d > 5 * f && (this.sessionVariables.labelWrap = !0, this.sessionVariables.labelMaxWidth = f, this.sessionVariables.labelFontSize = l, this.sessionVariables.labelMaxHeight = g, this.sessionVariables.labelAngle = this.labelAngle));
                                        else if (r === b && (0 === r && m + this._labels[r + 1].textBlock.measureText().width - 2 * f > h || r === this._labels.length - 1 && m + this._labels[r - 1].textBlock.measureText().width - 2 * f > h || 0 < r && r < this._labels.length - 1 && m + this._labels[r + 1].textBlock.measureText().width - 2 * f > h && m + this._labels[r - 1].textBlock.measureText().width -
                                            2 * f > h)) h = 0 === r ? m + this._labels[r + 1].textBlock.measureText().width - 2 * f : m + this._labels[r - 1].textBlock.measureText().width - 2 * f, this.sessionVariables.labelFontSize = x(this._options.labelFontSize) ? l : this._options.labelFontSize, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = s;
                                    else if (0 === h)
                                        for (this.sessionVariables.labelFontSize = x(this._options.labelFontSize) ? l : this._options.labelFontSize, this.sessionVariables.labelWrap = !0, d = 0; d < this._labels.length; d++) a =
                                            this._labels[d].textBlock, a.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(f, m), s), q = a.measureText(), d < this._labels.length - 1 && (l = d + 1, c = this._labels[l].textBlock, c.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(f, m), s), c = c.measureText(), q.width + c.width >> 0 > 2 * f && (this.sessionVariables.labelAngle = -25))
                                }
                        else(this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? g : Math.min((d - f * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) /
                            Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), d), s = 0 != this.labelAngle ? (n - (k + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) : f, this.sessionVariables.labelMaxHeight = g = this.labelWrap ? (n - s * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) : 1.5 * this.labelFontSize, x(this._options.labelWrap)) ? x(this._options.labelWrap) && (this.labelWrap && !x(this._options.labelMaxWidth) ? (this.sessionVariables.labelWrap =
                            this.labelWrap, this.sessionVariables.labelMaxWidth = this._options.labelMaxWidth ? this._options.labelMaxWidth : s, this.sessionVariables.labelMaxHeight = g) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = s, this.sessionVariables.labelMaxHeight = d < 0.9 * p ? 0.9 * p : d < this.labelFontSize ? 2.5 * this.labelFontSize : d - this.labelFontSize, this.sessionVariables.labelWrap = this.labelWrap)) : (this._options.labelWrap ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth =
                            this._options.labelMaxWidth ? this._options.labelMaxWidth : s) : (x(this._options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this._options.labelMaxWidth ? this._options.labelMaxWidth : s, this.sessionVariables.labelWrap = this.labelWrap), this.sessionVariables.labelMaxHeight = g);
                        for (d = 0; d < this._labels.length; d++) a = this._labels[d].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle,
                            a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText()
                    } else
                        for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = x(this._options.labelMaxWidth) ? this.sessionVariables.labelMaxWidth : this._options.labelMaxWidth, a.fontSize = this.labelFontSize = x(this._options.labelFontSize) ? this.sessionVariables.labelFontSize : this._options.labelFontSize, a.angle = this.labelAngle = x(this._options.labelAngle) ? this.sessionVariables.labelAngle :
                            this.labelAngle, a.wrap = this.labelWrap = x(this._options.labelWrap) ? this.sessionVariables.labelWrap : this._options.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
            else if ("left" === this._position || "right" === this._position)
                if (f = x(this._options.labelMaxWidth) ? 0.3 * this.chart.width >> 0 : this._options.labelMaxWidth, g = "undefined" === typeof this._options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize, !this.chart.panEnabled && 1 <= this._labels.length) {
                    this.sessionVariables.labelFontSize =
                        this.labelFontSize;
                    this.sessionVariables.labelMaxWidth = f;
                    this.sessionVariables.labelMaxHeight = g;
                    this.sessionVariables.labelAngle = x(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle;
                    this.sessionVariables.labelWrap = this.labelWrap;
                    for (b = 0; b < this._labels.length; b++)(a = this._labels[b].textBlock, q = a.measureText(), b < this._labels.length - 1 && (l = b + 1, c = this._labels[l].textBlock, c = c.measureText()), e.push(a.height), this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e), d = f * Math.sin(Math.PI /
                            180 * Math.abs(this.labelAngle)) + (g - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), x(this._options.labelAngle) && isNaN(this._options.labelAngle) && 0 !== this._options.labelAngle) ? x(this._options.labelWrap) ? x(this._options.labelWrap) && (x(this._options.labelMaxWidth) ? x(c) || (p = q.height + c.height >> 0, p - 2 * g > m && (m = p - 2 * g, p >= 2 * g && p < 2.4 * g ? (x(this._options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize =
                            Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelMaxHeight = g, this.sessionVariables.labelFontSize = x(this._options.labelFontSize) ? this.labelFontSize : this._options.labelFontSize) : p >= 2.4 * g && p < 2.8 * g ? (this.sessionVariables.labelMaxHeight = d, this.sessionVariables.labelFontSize = this.labelFontSize, this.sessionVariables.labelWrap = !0) : p >= 2.8 * g && p < 3.2 * g ? (this.sessionVariables.labelMaxHeight = g, this.sessionVariables.labelWrap = !0, x(this._options.labelFontSize) && 12 < this.labelFontSize &&
                            (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = x(this._options.labelFontSize) ? this.labelFontSize : this._options.labelFontSize, this.sessionVariables.labelAngle = x(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : p >= 3.2 * g && p < 3.6 * g ? (this.sessionVariables.labelMaxHeight = d, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelFontSize = this.labelFontSize) : p > 3.6 * g && p < 10 * g ? (x(this._options.labelFontSize) && 12 < this.labelFontSize &&
                            (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = x(this._options.labelFontSize) ? this.labelFontSize : this._options.labelFontSize, this.sessionVariables.labelMaxWidth = f, this.sessionVariables.labelMaxHeight = g, this.sessionVariables.labelAngle = x(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : p > 10 * g && p < 50 * g && (x(this._options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()),
                            this.sessionVariables.labelFontSize = x(this._options.labelFontSize) ? this.labelFontSize : this._options.labelFontSize, this.sessionVariables.labelMaxHeight = g, this.sessionVariables.labelMaxWidth = f, this.sessionVariables.labelAngle = x(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle))) : (this.sessionVariables.labelMaxHeight = g, this.sessionVariables.labelMaxWidth = this._options.labelMaxWidth ? this._options.labelMaxWidth : this.sessionVariables.labelMaxWidth)) : (this.sessionVariables.labelMaxWidth =
                            this.labelWrap ? this._options.labelMaxWidth ? this._options.labelMaxWidth : this.sessionVariables.labelMaxWidth : this.labelMaxWidth ? this._options.labelMaxWidth ? this._options.labelMaxWidth : this.sessionVariables.labelMaxWidth : f, this.sessionVariables.labelMaxHeight = g) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = 0 === this.labelAngle ? f : Math.min((d - g * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), g), x(this._options.labelWrap)) ?
                        x(this._options.labelWrap) && (this.labelWrap && !x(this._options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = this._options.labelMaxWidth ? this._options.labelMaxWidth > this._options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = d) : (this.sessionVariables.labelMaxWidth = this._options.labelMaxWidth ? this._options.labelMaxWidth : f, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? g : d, x(this._options.labelMaxWidth) &&
                            (this.sessionVariables.labelAngle = this.labelAngle))) : this._options.labelWrap ? (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? g : d, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = f) : (this.sessionVariables.labelMaxHeight = g, x(this._options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this._options.labelMaxWidth ? this._options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap);
                    for (d = 0; d < this._labels.length; d++) a =
                        this._labels[d].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.labelFontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText()
                } else
                    for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = x(this._options.labelMaxWidth) ? this.sessionVariables.labelMaxWidth : this._options.labelMaxWidth,
                        a.fontSize = this.labelFontSize = x(this._options.labelFontSize) ? this.sessionVariables.labelFontSize : this._options.labelFontSize, a.angle = this.labelAngle = x(this._options.labelAngle) ? this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = x(this._options.labelWrap) ? this.sessionVariables.labelWrap : this._options.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
            for (b = 0; b < this.stripLines.length; b++) {
                var f = this.stripLines[b],
                    t;
                if ("outside" === f.labelPlacement) {
                    g = this.sessionVariables.labelMaxWidth;
                    if ("bottom" === this._position || "top" === this._position) t = "undefined" === typeof f._options.labelWrap ? this.sessionVariables.labelMaxHeight : f.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
                    if ("left" === this._position || "right" === this._position) t = "undefined" === typeof f._options.labelWrap ? this.sessionVariables.labelMaxHeight : f.labelWrap ? 0.8 * this.chart.width >> 0 : 1.5 * this.labelFontSize;
                    c = x(f._options.labelBackgroundColor) ? "#EEEEEE" : f._options.labelBackgroundColor
                } else g = "bottom" === this._position || "top" ===
                    this._position ? 0.9 * this.chart.width >> 0 : 0.9 * this.chart.height >> 0, t = "undefined" === typeof f._options.labelWrap || f.labelWrap ? "bottom" === this._position || "top" === this._position ? 0.8 * this.chart.width >> 0 : 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize, c = x(f._options.labelBackgroundColor) ? x(f.startValue) && 0 !== f.startValue ? "transparent" : "#EEEEEE" : f._options.labelBackgroundColor;
                a = new L(this.ctx, {
                    x: 0,
                    y: 0,
                    backgroundColor: c,
                    maxWidth: f._options.labelMaxWidth ? f._options.labelMaxWidth : g,
                    maxHeight: t,
                    angle: this.labelAngle,
                    text: f.labelFormatter ? f.labelFormatter({
                        chart: this.chart._publicChartReference,
                        axis: this,
                        stripLine: f
                    }) : f.label,
                    horizontalAlign: "left",
                    fontSize: "outside" === f.labelPlacement ? f._options.labelFontSize ? f._options.labelFontSize : this.labelFontSize : f.labelFontSize,
                    fontFamily: "outside" === f.labelPlacement ? f._options.labelFontFamily ? f._options.labelFontFamily : this.labelFontFamily : f.labelFontFamily,
                    fontWeight: "outside" === f.labelPlacement ? f._options.fontWeight ? f._options.fontWeight : this.fontWeight : f.fontWeight,
                    fontColor: f._options.labelFontColor || f.color,
                    fontStyle: "outside" === f.labelPlacement ? f._options.fontStyle ? f._options.fontStyle : this.fontWeight : f.fontStyle,
                    textBaseline: "middle",
                    borderThickness: 0
                });
                this._stripLineLabels.push({
                    position: f.value,
                    textBlock: a,
                    effectiveHeight: null,
                    stripLine: f
                })
            }
        };
    B.prototype.createLabelsAndCalculateWidth = function() {
        var a = 0,
            c = 0;
        this._labels = [];
        this._stripLineLabels = [];
        if ("left" === this._position || "right" === this._position) {
            this.createLabels();
            for (c = 0; c < this._labels.length; c++) {
                var b =
                    this._labels[c].textBlock,
                    d = b.measureText(),
                    e = 0,
                    e = 0 === this.labelAngle ? d.width : d.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (d.height - b.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                a < e && (a = e);
                this._labels[c].effectiveWidth = e
            }
            for (c = 0; c < this._stripLineLabels.length; c++) "outside" === this._stripLineLabels[c].stripLine.labelPlacement && (this._stripLineLabels[c].stripLine.value > this.viewportMinimum && this._stripLineLabels[c].stripLine.value < this.viewportMaximum) && (b = this._stripLineLabels[c].textBlock,
                d = b.measureText(), e = 0 === this.labelAngle ? d.width : d.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (d.height - b.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), a < e && (a = e), this._stripLineLabels[c].effectiveWidth = e)
        }
        return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + this.tickLength + 5
    };
    B.prototype.createLabelsAndCalculateHeight = function() {
        var a = 0;
        this._labels = [];
        this._stripLineLabels = [];
        var c, b = 0;
        this.createLabels();
        if ("bottom" === this._position || "top" === this._position) {
            for (b =
                0; b < this._labels.length; b++) {
                c = this._labels[b].textBlock;
                var d = c.measureText(),
                    e = 0,
                    e = 0 === this.labelAngle ? d.height : d.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (d.height - c.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                a < e && (a = e);
                this._labels[b].effectiveHeight = e
            }
            for (b = 0; b < this._stripLineLabels.length; b++) "outside" === this._stripLineLabels[b].stripLine.labelPlacement && (c = this._stripLineLabels[b].textBlock, d = c.measureText(), e = 0 === this.labelAngle ? d.height : d.width * Math.sin(Math.PI /
                180 * Math.abs(this.labelAngle)) + (d.height - c.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), a < e && (a = e), this._stripLineLabels[b].effectiveHeight = e)
        }
        return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + this.tickLength + 5
    };
    B.setLayoutAndRender = function(a, c, b, d, e) {
        var f, g, h, p = a.chart,
            k = p.ctx;
        a.calculateAxisParameters();
        c && c.calculateAxisParameters();
        b && b.calculateAxisParameters();
        var n = c ? c.margin : 0,
            m = b ? b.margin : 0,
            l = 0,
            q = 0,
            r = 0,
            s, t, u, v, w, z, B = 0,
            A = 0,
            C, D, F;
        C = D = F = !1;
        a && a.title && (a._titleTextBlock =
            new L(a.ctx, {
                text: a.title,
                horizontalAlign: "center",
                fontSize: a.titleFontSize,
                fontFamily: a.titleFontFamily,
                fontWeight: a.titleFontWeight,
                fontColor: a.titleFontColor,
                fontStyle: a.titleFontStyle,
                textBaseline: "top"
            }));
        c && c.title && (c._titleTextBlock = new L(c.ctx, {
            text: c.title,
            horizontalAlign: "center",
            fontSize: c.titleFontSize,
            fontFamily: c.titleFontFamily,
            fontWeight: c.titleFontWeight,
            fontColor: c.titleFontColor,
            fontStyle: c.titleFontStyle,
            textBaseline: "top"
        }));
        b && b.title && (b._titleTextBlock = new L(b.ctx, {
            text: b.title,
            horizontalAlign: "center",
            fontSize: b.titleFontSize,
            fontFamily: b.titleFontFamily,
            fontWeight: b.titleFontWeight,
            fontColor: b.titleFontColor,
            fontStyle: b.titleFontStyle,
            textBaseline: "top"
        }));
        if ("normal" === d) {
            var G = [],
                E = [],
                H = [];
            a && a.title && (a._titleTextBlock.maxWidth = a.titleMaxWidth || e.width, a._titleTextBlock.maxHeight = a.titleWrap ? 0.8 * e.height : 1.5 * a.titleFontSize, a._titleTextBlock.angle = 0);
            c && c.title && (c._titleTextBlock.maxWidth = c.titleMaxWidth || e.height, c._titleTextBlock.maxHeight = c.titleWrap ? 0.8 * e.width :
                1.5 * c.titleFontSize, c._titleTextBlock.angle = -90);
            b && b.title && (b._titleTextBlock.maxWidth = b.titleMaxWidth || e.height, b._titleTextBlock.maxHeight = b.titleWrap ? 0.8 * e.width : 1.5 * b.titleFontSize, b._titleTextBlock.angle = 90);
            for (; 4 > l++;) {
                a.lineCoordinates = {};
                t = Math.ceil(c ? c.createLabelsAndCalculateWidth() : 0);
                E.push(t);
                f = Math.round(e.x1 + t + n);
                s = Math.ceil(b ? b.createLabelsAndCalculateWidth() : 0);
                H.push(s);
                g = Math.round(e.x2 - s - m > a.chart.width - 10 ? a.chart.width - 10 : e.x2 - s - m);
                !a.labelAutoFit || (x(w) || x(z)) || (0 < a.labelAngle ?
                    z + r > g && (B += 0 < a.labelAngle ? z + r - g - s : 0) : 0 > a.labelAngle ? w - q < f && w - q < a.viewportMinimum && (A = f - (n + a.tickLength + t + w - q + a.labelFontSize / 2)) : 0 === a.labelAngle && (z + r > g && (B = z + r / 2 - g - s), w - q < f && w - q < a.viewportMinimum && (A = f - n - a.tickLength - t - w + q / 2)), a.viewportMaximum === a.maximum && a.viewportMinimum === a.minimum && 0 < a.labelAngle && 0 < B ? g -= B : a.viewportMaximum === a.maximum && a.viewportMinimum === a.minimum && 0 > a.labelAngle && 0 < A ? f += A : a.viewportMaximum === a.maximum && a.viewportMinimum === a.minimum && 0 === a.labelAngle && (0 < A && (f += A), 0 < B &&
                        (g -= B)));
                a.lineCoordinates.x1 = f;
                a.lineCoordinates.x2 = g;
                a.lineCoordinates.width = Math.abs(g - f);
                a.title && (a._titleTextBlock.maxWidth = 0 < a.titleMaxWidth && a.titleMaxWidth < a.lineCoordinates.width ? a.titleMaxWidth : a.lineCoordinates.width);
                t = Math.ceil(a.createLabelsAndCalculateHeight());
                G.push(t);
                a._labels && 1 < a._labels.length && (d = h = 0, h = a._labels[1], d = "dateTime" === a.chart.plotInfo.axisXValueType ? a._labels[a._labels.length - 2] : a._labels[a._labels.length - 1], q = h.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) +
                    (h.textBlock.height - d.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h.textBlock.angle)), r = d.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(d.textBlock.angle)) + (d.textBlock.height - d.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(d.textBlock.angle)));
                p.panEnabled ? t = p.sessionVariables.axisX.height : p.sessionVariables.axisX.height = t;
                d = Math.round(e.y2 - t - a.margin);
                h = Math.round(e.y2 - a.margin);
                a.lineCoordinates.y1 = d;
                a.lineCoordinates.y2 = d;
                a.boundingRect = {
                    x1: f,
                    y1: d,
                    x2: g,
                    y2: h,
                    width: g - f,
                    height: h - d
                };
                c && (f = Math.round(e.x1 + c.margin), d = Math.round(10 > e.y1 ? 10 : e.y1), g = Math.round(a.lineCoordinates.x1), h = Math.round(e.y2 - t - a.margin), c.lineCoordinates = {
                    x1: g,
                    y1: d,
                    x2: g,
                    y2: h,
                    height: Math.abs(h - d)
                }, c.boundingRect = {
                    x1: f,
                    y1: d,
                    x2: g,
                    y2: h,
                    width: g - f,
                    height: h - d
                }, c.title && (c._titleTextBlock.maxWidth = 0 < c.titleMaxWidth && c.titleMaxWidth < c.lineCoordinates.height ? c.titleMaxWidth : c.lineCoordinates.height));
                b && (f = Math.round(a.lineCoordinates.x2), d = Math.round(10 > e.y1 ? 10 : e.y1), g = Math.round(f + s), h = Math.round(e.y2 - t - a.margin),
                    b.lineCoordinates = {
                        x1: f,
                        y1: d,
                        x2: f,
                        y2: h,
                        height: Math.abs(h - d)
                    }, b.boundingRect = {
                        x1: f,
                        y1: d,
                        x2: g,
                        y2: h,
                        width: g - f,
                        height: h - d
                    }, b.title && (b._titleTextBlock.maxWidth = 0 < b.titleMaxWidth && b.titleMaxWidth < b.lineCoordinates.height ? b.titleMaxWidth : b.lineCoordinates.height));
                a.calculateValueToPixelConversionParameters();
                a._labels && 1 < a._labels.length && (w = (a.logarithmic ? Math.log(a._labels[1].position / a.viewportMinimum) / a.conversionParameters.lnLogarithmBase : a._labels[1].position - a.viewportMinimum) * Math.abs(a.conversionParameters.pixelPerUnit) +
                    a.lineCoordinates.x1, z = "dateTime" === a.chart.plotInfo.axisXValueType ? (a.logarithmic ? Math.log(a._labels[a._labels.length - 2].position / a.viewportMinimum) / a.conversionParameters.lnLogarithmBase : a._labels[a._labels.length - 2].position - a.viewportMinimum) * Math.abs(a.conversionParameters.pixelPerUnit) + a.lineCoordinates.x1 : (a.logarithmic ? Math.log(a._labels[a._labels.length - 1].position / a.viewportMinimum) / a.conversionParameters.lnLogarithmBase : a._labels[a._labels.length - 1].position - a.viewportMinimum) * Math.abs(a.conversionParameters.pixelPerUnit) +
                    a.lineCoordinates.x1);
                c && c.calculateValueToPixelConversionParameters();
                b && b.calculateValueToPixelConversionParameters();
                if (a || c || b) {
                    if (!x(G))
                        for (l = 0; l < G.length; l++)
                            for (j = l + 1; j < G.length; j++) G[l] == G[j] && (C = !0);
                    if (!x(E))
                        for (l = 0; l < E.length; l++)
                            for (j = l + 1; j < E.length; j++) E[l] == E[j] && (D = !0);
                    if (!x(H))
                        for (l = 0; l < H.length; l++)
                            for (j = l + 1; j < H.length; j++) H[l] == H[j] && (F = !0)
                }
                if (C && D && F) break
            }
            k.save();
            k.beginPath();
            k.rect(5, a.boundingRect.y1, a.chart.width - 10, a.boundingRect.height);
            k.clip();
            a.renderLabelsTicksAndTitle();
            k.restore();
            c && c.renderLabelsTicksAndTitle();
            b && b.renderLabelsTicksAndTitle()
        } else {
            m = [];
            w = [];
            z = [];
            a && a.title && (a._titleTextBlock.maxWidth = a.titleMaxWidth || e.height, a._titleTextBlock.maxHeight = a.titleWrap ? 0.8 * e.width : 1.5 * a.titleFontSize, a._titleTextBlock.angle = -90);
            c && c.title && (c._titleTextBlock.maxWidth = c.titleMaxWidth || e.width, c._titleTextBlock.maxHeight = c.titleWrap ? 0.8 * e.height : 1.5 * c.titleFontSize, c._titleTextBlock.angle = 0);
            b && b.title && (b._titleTextBlock.maxWidth = c.titleMaxWidth || e.width, b._titleTextBlock.maxHeight =
                b.titleWrap ? 0.8 * e.height : 1.5 * b.titleFontSize, b._titleTextBlock.angle = 0);
            for (; 4 > l++;) {
                B = Math.ceil(a.createLabelsAndCalculateWidth());
                m.push(B);
                c && (c.lineCoordinates = {}, f = Math.round(e.x1 + B + a.margin), g = Math.round(e.x2 > c.chart.width - 10 ? c.chart.width - 10 : e.x2), c.labelAutoFit && !x(s) && (f = 0 > c.labelAngle ? Math.max(f, s) : 0 === c.labelAngle ? Math.max(f, s / 2) : f, g = 0 < c.labelAngle ? g - t : 0 === c.labelAngle ? g - t / 2 : g), c.lineCoordinates.x1 = f, c.lineCoordinates.x2 = g, c.lineCoordinates.width = Math.abs(g - f), c.title && (c._titleTextBlock.maxWidth =
                    0 < c.titleMaxWidth && c.titleMaxWidth < c.lineCoordinates.width ? c.titleMaxWidth : c.lineCoordinates.width));
                b && (b.lineCoordinates = {}, f = Math.round(e.x1 + B + a.margin), g = Math.round(e.x2 > b.chart.width - 10 ? b.chart.width - 10 : e.x2), c && c.labelAutoFit && !x(u) && (f = 0 < b.labelAngle ? Math.max(f, u) : 0 === b.labelAngle ? Math.max(f, u / 2) : f, g -= v / 2), b.lineCoordinates.x1 = f, b.lineCoordinates.x2 = g, b.lineCoordinates.width = Math.abs(g - f), b.title && (b._titleTextBlock.maxWidth = 0 < b.titleMaxWidth && b.titleMaxWidth < b.lineCoordinates.width ? b.titleMaxWidth :
                    b.lineCoordinates.width));
                A = Math.ceil(c ? c.createLabelsAndCalculateHeight() : 0);
                q = Math.ceil(b ? b.createLabelsAndCalculateHeight() : 0);
                w.push(A);
                z.push(q);
                c && 0 < c._labels.length && (h = c._labels[0], d = c._labels[c._labels.length - 1], s = h.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) + (h.textBlock.height - d.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h.textBlock.angle)), t = d.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(d.textBlock.angle)) + (d.textBlock.height - d.textBlock.fontSize / 2) * Math.sin(Math.PI /
                    180 * Math.abs(d.textBlock.angle)));
                b && 0 < b._labels.length && (h = b._labels[0], d = b._labels[b._labels.length - 1], u = h.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) + (h.textBlock.height - d.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h.textBlock.angle)), v = d.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(d.textBlock.angle)) + (d.textBlock.height - d.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(d.textBlock.angle)));
                p.panEnabled ? A = p.sessionVariables.axisY.height : p.sessionVariables.axisY.height =
                    A;
                c && (d = Math.round(e.y2 - A - c.margin), h = Math.round(e.y2 - n > c.chart.height - 10 ? c.chart.height - 10 : e.y2 - n), c.lineCoordinates.y1 = d, c.lineCoordinates.y2 = d, c.boundingRect = {
                    x1: f,
                    y1: d,
                    x2: g,
                    y2: h,
                    width: g - f,
                    height: A
                }, c.title && (c._titleTextBlock.maxWidth = 0 < c.titleMaxWidth && c.titleMaxWidth < c.lineCoordinates.width ? c.titleMaxWidth : c.lineCoordinates.width));
                b && (d = Math.round(e.y1 + b.margin), h = e.y1 + b.margin + q, b.lineCoordinates.y1 = h, b.lineCoordinates.y2 = h, b.boundingRect = {
                        x1: f,
                        y1: d,
                        x2: g,
                        y2: h,
                        width: g - f,
                        height: q
                    }, b.title &&
                    (b._titleTextBlock.maxWidth = 0 < b.titleMaxWidth && b.titleMaxWidth < b.lineCoordinates.width ? b.titleMaxWidth : b.lineCoordinates.width));
                f = Math.round(e.x1 + a.margin);
                d = Math.round(b ? b.lineCoordinates.y2 : 10 > e.y1 ? 10 : e.y1);
                g = Math.round(e.x1 + B + a.margin);
                h = Math.round(c ? c.lineCoordinates.y1 : e.y2 - n > a.chart.height - 10 ? a.chart.height - 10 : e.y2 - n);
                c && c.labelAutoFit && (g = 0 > c.labelAngle ? Math.max(g, s) : 0 === c.labelAngle ? Math.max(g, s / 2) : g, f = 0 > c.labelAngle || 0 === c.labelAngle ? g - B : f);
                b && b.labelAutoFit && (g = b.lineCoordinates.x1, f = g -
                    B);
                a.lineCoordinates = {
                    x1: g,
                    y1: d,
                    x2: g,
                    y2: h,
                    height: Math.abs(h - d)
                };
                a.boundingRect = {
                    x1: f,
                    y1: d,
                    x2: g,
                    y2: h,
                    width: g - f,
                    height: h - d
                };
                a.title && (a._titleTextBlock.maxWidth = 0 < a.titleMaxWidth && a.titleMaxWidth < a.lineCoordinates.height ? a.titleMaxWidth : a.lineCoordinates.height);
                a.calculateValueToPixelConversionParameters();
                c && c.calculateValueToPixelConversionParameters();
                b && b.calculateValueToPixelConversionParameters();
                if (a || c || b) {
                    if (!x(G))
                        for (l = 0; l < G.length; l++)
                            for (j = l + 1; j < G.length; j++) G[l] == G[j] && (C = !0);
                    if (!x(E))
                        for (l =
                            0; l < E.length; l++)
                            for (j = l + 1; j < E.length; j++) E[l] == E[j] && (D = !0);
                    if (!x(H))
                        for (l = 0; l < H.length; l++)
                            for (j = l + 1; j < H.length; j++) H[l] == H[j] && (F = !0)
                }
                if (C && D && F) break
            }
            c && c.renderLabelsTicksAndTitle();
            b && b.renderLabelsTicksAndTitle();
            a.renderLabelsTicksAndTitle()
        }
        p.preparePlotArea();
        e = a.chart.plotArea;
        k.save();
        k.beginPath();
        k.rect(e.x1, e.y1, Math.abs(e.x2 - e.x1), Math.abs(e.y2 - e.y1));
        k.clip();
        a.renderStripLinesOfThicknessType("value");
        c && c.renderStripLinesOfThicknessType("value");
        b && b.renderStripLinesOfThicknessType("value");
        a.renderInterlacedColors();
        c && c.renderInterlacedColors();
        b && b.renderInterlacedColors();
        k.restore();
        a.renderGrid();
        c && c.renderGrid();
        b && b.renderGrid();
        a.renderAxisLine();
        c && c.renderAxisLine();
        b && b.renderAxisLine();
        a.renderStripLinesOfThicknessType("pixel");
        c && c.renderStripLinesOfThicknessType("pixel");
        b && b.renderStripLinesOfThicknessType("pixel")
    };
    B.prototype.renderLabelsTicksAndTitle = function() {
        var a = !1,
            c = 0,
            b = 0,
            d = 1,
            e = 0;
        0 !== this.labelAngle && 360 !== this.labelAngle && (d = 1.2);
        if ("undefined" === typeof this._options.interval) {
            if ("bottom" ===
                this._position || "top" === this._position)
                if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                    for (var c = [], d = 0 !== this.labelAngle && 360 !== this.labelAngle ? 1 : 1.2, f, g = this.viewportMaximum, h = this.lineCoordinates.width / Math.log(this.range), p = this._labels.length - 1; 0 <= p; p--) {
                        n = this._labels[p];
                        if (n.position < this.viewportMinimum) break;
                        n.position > this.viewportMaximum || !(p === this._labels.length - 1 || f < Math.log(g / n.position) * h / d) || (c.push(n), g = n.position, f = n.textBlock.width * Math.abs(Math.cos(Math.PI /
                            180 * this.labelAngle)) + n.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)))
                    }
                    this._labels = c
                } else {
                    for (p = 0; p < this._labels.length; p++) n = this._labels[p], n.position < this.viewportMinimum || (n = n.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + n.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), c += n);
                    c > this.lineCoordinates.width * d && this.labelAutoFit && (a = !0)
                }
            if ("left" === this._position || "right" === this._position)
                if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                    for (var c = [], k, g = this.viewportMaximum, h = this.lineCoordinates.height / Math.log(this.range), p = this._labels.length - 1; 0 <= p; p--) {
                        n = this._labels[p];
                        if (n.position < this.viewportMinimum) break;
                        n.position > this.viewportMaximum || !(p === this._labels.length - 1 || k < Math.log(g / n.position) * h) || (c.push(n), g = n.position, k = n.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + n.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)))
                    }
                    this._labels = c
                } else {
                    for (p = 0; p < this._labels.length; p++) n = this._labels[p], n.position <
                        this.viewportMinimum || (n = n.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + n.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), b += n);
                    b > this.lineCoordinates.height * d && this.labelAutoFit && (a = !0)
                }
        }
        if ("bottom" === this._position) {
            for (var n, p = 0; p < this._labels.length; p++) n = this._labels[p], n.position < this.viewportMinimum || n.position > this.viewportMaximum || (b = this.getPixelCoordinatesOnAxis(n.position), a && 0 !== e++ % 2 && this.labelAutoFit || (this.tickThickness && (this.ctx.lineWidth = this.tickThickness,
                    this.ctx.strokeStyle = this.tickColor, d = 1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0, this.ctx.beginPath(), this.ctx.moveTo(d, b.y << 0), this.ctx.lineTo(d, b.y + this.tickLength << 0), this.ctx.stroke()), 0 === n.textBlock.angle ? (b.x -= n.textBlock.width / 2, b.y += this.tickLength + n.textBlock.fontSize / 2) : (b.x -= 0 > this.labelAngle ? n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, b.y += this.tickLength + Math.abs(0 > this.labelAngle ? n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5)), n.textBlock.x = b.x, n.textBlock.y =
                b.y, n.textBlock.render(!0)));
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.boundingRect.y2 - this._titleTextBlock.height - 3, this._titleTextBlock.render(!0))
        } else if ("top" === this._position) {
            for (p = 0; p < this._labels.length; p++) n = this._labels[p], n.position < this.viewportMinimum || n.position > this.viewportMaximum || (b = this.getPixelCoordinatesOnAxis(n.position), a && 0 !== e++ % 2 && this.labelAutoFit ||
                (this.tickThickness && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, d = 1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0, this.ctx.beginPath(), this.ctx.moveTo(d, b.y << 0), this.ctx.lineTo(d, b.y - this.tickLength << 0), this.ctx.stroke()), 0 === n.textBlock.angle ? (b.x -= n.textBlock.width / 2, b.y -= this.tickLength + n.textBlock.height) : (b.x += (n.textBlock.height - this.tickLength - this.labelFontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) :
                    0), b.y -= this.tickLength + (n.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0))), n.textBlock.x = b.x, n.textBlock.y = b.y, n.textBlock.render(!0)));
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.boundingRect.y1 + 1, this._titleTextBlock.render(!0))
        } else if ("left" === this._position) {
            for (p = 0; p < this._labels.length; p++) n =
                this._labels[p], n.position < this.viewportMinimum || n.position > this.viewportMaximum || (b = this.getPixelCoordinatesOnAxis(n.position), a && 0 !== e++ % 2 && this.labelAutoFit || (this.tickThickness && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, d = 1 === this.ctx.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0, this.ctx.beginPath(), this.ctx.moveTo(b.x << 0, d), this.ctx.lineTo(b.x - this.tickLength << 0, d), this.ctx.stroke()), 0 === this.labelAngle ? (n.textBlock.y = b.y, n.textBlock.x = b.x - n.textBlock.width * Math.cos(Math.PI /
                    180 * this.labelAngle) - this.tickLength - 5) : (n.textBlock.y = b.y - n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), n.textBlock.x = 0 < this.labelAngle ? b.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : b.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (n.textBlock.height - n.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - this.tickLength), n.textBlock.render(!0)));
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.boundingRect.x1 +
                1, this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this._titleTextBlock.render(!0))
        } else if ("right" === this._position) {
            for (p = 0; p < this._labels.length; p++) n = this._labels[p], n.position < this.viewportMinimum || n.position > this.viewportMaximum || (b = this.getPixelCoordinatesOnAxis(n.position), a && 0 !== e++ % 2 && this.labelAutoFit || (this.tickThickness && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, d = 1 === this.ctx.lineWidth % 2 ? (b.y <<
                0) + 0.5 : b.y << 0, this.ctx.beginPath(), this.ctx.moveTo(b.x << 0, d), this.ctx.lineTo(b.x + this.tickLength << 0, d), this.ctx.stroke()), 0 === this.labelAngle ? (n.textBlock.y = b.y, n.textBlock.x = b.x + this.tickLength + 5) : (n.textBlock.y = 0 > this.labelAngle ? b.y : b.y - (n.textBlock.height - n.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), n.textBlock.x = 0 < this.labelAngle ? b.x + (n.textBlock.height - n.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + this.tickLength : b.x + this.tickLength + 5), n.textBlock.render(!0)));
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.boundingRect.x2 - 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this._titleTextBlock.render(!0))
        }
    };
    B.prototype.renderInterlacedColors = function() {
        var a = this.chart.plotArea.ctx,
            c, b, d = this.chart.plotArea,
            e = 0;
        c = !0;
        if (("bottom" === this._position || "top" === this._position) && this.interlacedColor)
            for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++) c ? (c = this.getPixelCoordinatesOnAxis(this._labels[e].position),
                b = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(Math.min(b.x, c.x), d.y1, Math.abs(b.x - c.x), Math.abs(d.y1 - d.y2)), c = !1) : c = !0;
        else if (("left" === this._position || "right" === this._position) && this.interlacedColor)
            for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++) c ? (b = this.getPixelCoordinatesOnAxis(this._labels[e].position), c = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) :
                this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(d.x1, Math.min(b.y, c.y), Math.abs(d.x1 - d.x2), Math.abs(c.y - b.y)), c = !1) : c = !0;
        a.beginPath()
    };
    B.prototype.renderStripLinesOfThicknessType = function(a) {
        if (this.stripLines && 0 < this.stripLines.length && a) {
            for (var c = this, b, d = 0, e = 0, f = !1, g = !1, h = [], p = [], g = !1, d = 0; d < this.stripLines.length; d++) {
                var k = this.stripLines[d];
                k._thicknessType === a && ("pixel" === a && (k.value < this.viewportMinimum || k.value > this.viewportMaximum) || h.push(k))
            }
            for (d = 0; d < this._stripLineLabels.length; d++)
                if (k =
                    this.stripLines[d], b = this._stripLineLabels[d], !(b.position < this.viewportMinimum || b.position > this.viewportMaximum)) {
                    a = this.getPixelCoordinatesOnAxis(b.position);
                    if ("outside" === b.stripLine.labelPlacement)
                        if (k && (this.ctx.strokeStyle = k.color, "pixel" === k._thicknessType && (this.ctx.lineWidth = k.thickness)), "bottom" === this._position) {
                            var n = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0;
                            this.ctx.beginPath();
                            this.ctx.moveTo(n, a.y << 0);
                            this.ctx.lineTo(n, a.y + this.tickLength << 0);
                            this.ctx.stroke();
                            0 === this.labelAngle ?
                                (a.x -= b.textBlock.width / 2, a.y += this.tickLength + b.textBlock.fontSize / 2) : (a.x -= 0 > this.labelAngle ? b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, a.y += this.tickLength + Math.abs(0 > this.labelAngle ? b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5))
                        } else "top" === this._position ? (n = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, this.ctx.beginPath(), this.ctx.moveTo(n, a.y << 0), this.ctx.lineTo(n, a.y - this.tickLength << 0), this.ctx.stroke(), 0 === this.labelAngle ? (a.x -= b.textBlock.width / 2, a.y -= this.tickLength +
                            b.textBlock.height) : (a.x += (b.textBlock.height - this.tickLength - this.labelFontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), a.y -= this.tickLength + (b.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))) : "left" === this._position ? (n = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, n), this.ctx.lineTo(a.x - this.tickLength <<
                            0, n), this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x - b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : (a.y -= b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), a.x = 0 < this.labelAngle ? a.x - b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : a.x - b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (b.textBlock.height - b.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - this.tickLength)) : "right" === this._position && (n = 1 === this.ctx.lineWidth %
                            2 ? (a.y << 0) + 0.5 : a.y << 0, this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, n), this.ctx.lineTo(a.x + this.tickLength << 0, n), this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x + this.tickLength + 5 : (a.y = 0 > this.labelAngle ? a.y : a.y - (b.textBlock.height - b.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), a.x = 0 < this.labelAngle ? a.x + (b.textBlock.height - b.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + this.tickLength : a.x + this.tickLength + 5));
                    else b.textBlock.angle = -90, "bottom" === this._position ? (b.textBlock.maxWidth =
                            this._options.stripLines[d].labelMaxWidth ? this._options.stripLines[d].labelMaxWidth : this.chart.plotArea.height - 3, b.textBlock.measureText(), a.x - b.textBlock.height > this.chart.plotArea.x1 ? x(k.startValue) ? a.x -= b.textBlock.height - b.textBlock.fontSize / 2 : a.x -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3 : (b.textBlock.angle = 90, x(k.startValue) ? a.x += b.textBlock.height - b.textBlock.fontSize / 2 : a.x += b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3), a.y = -90 === b.textBlock.angle ? "near" === b.stripLine.labelAlign ? this.chart.plotArea.y2 -
                            3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + b.textBlock.width) / 2 : this.chart.plotArea.y1 + b.textBlock.width + 3 : "near" === b.stripLine.labelAlign ? this.chart.plotArea.y2 - b.textBlock.width - 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - b.textBlock.width) / 2 : this.chart.plotArea.y1 + 3) : "top" === this._position ? (b.textBlock.maxWidth = this._options.stripLines[d].labelMaxWidth ? this._options.stripLines[d].labelMaxWidth : this.chart.plotArea.height -
                            3, b.textBlock.measureText(), a.x - b.textBlock.height > this.chart.plotArea.x1 ? x(k.startValue) ? a.x -= b.textBlock.height - b.textBlock.fontSize / 2 : a.x -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3 : (b.textBlock.angle = 90, x(k.startValue) ? a.x += b.textBlock.height - b.textBlock.fontSize / 2 : a.x += b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3), a.y = -90 === b.textBlock.angle ? "near" === b.stripLine.labelAlign ? this.chart.plotArea.y1 + b.textBlock.width + 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 +
                                b.textBlock.width) / 2 : this.chart.plotArea.y2 - 3 : "near" === b.stripLine.labelAlign ? this.chart.plotArea.y1 + 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - b.textBlock.width) / 2 : this.chart.plotArea.y2 - b.textBlock.width - 3) : "left" === this._position ? (b.textBlock.maxWidth = this._options.stripLines[d].labelMaxWidth ? this._options.stripLines[d].labelMaxWidth : this.chart.plotArea.width - 3, b.textBlock.angle = 0, b.textBlock.measureText(), a.y - b.textBlock.height > this.chart.plotArea.y1 ? x(k.startValue) ?
                            a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize + 3 : a.y - b.textBlock.height < this.chart.plotArea.y2 ? a.y += b.textBlock.fontSize / 2 + 3 : x(k.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize + 3, a.x = "near" === b.stripLine.labelAlign ? this.chart.plotArea.x1 + 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - b.textBlock.width / 2 : this.chart.plotArea.x2 - b.textBlock.width - 3) : "right" ===
                        this._position && (b.textBlock.maxWidth = this._options.stripLines[d].labelMaxWidth ? this._options.stripLines[d].labelMaxWidth : this.chart.plotArea.width - 3, b.textBlock.angle = 0, b.textBlock.measureText(), a.y - +b.textBlock.height > this.chart.plotArea.y1 ? x(k.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 - 3 : a.y - b.textBlock.height < this.chart.plotArea.y2 ? a.y += b.textBlock.fontSize / 2 + 3 : x(k.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -=
                            b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3, a.x = "near" === b.stripLine.labelAlign ? this.chart.plotArea.x2 - b.textBlock.width - 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - b.textBlock.width / 2 : this.chart.plotArea.x1 + 3);
                    b.textBlock.x = a.x;
                    b.textBlock.y = a.y;
                    p.push(b)
                }
            if (!g) {
                g = !1;
                this.ctx.save();
                this.ctx.beginPath();
                this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                this.ctx.clip();
                for (d = 0; d < h.length; d++) k =
                    h[d], k.showOnTop ? f || (f = !0, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                        this.ctx.save();
                        this.ctx.beginPath();
                        this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                        this.ctx.clip();
                        for (e = 0; e < h.length; e++) k = h[e], k.showOnTop && k.render();
                        this.ctx.restore()
                    }, k)) : k.render();
                for (d = 0; d < p.length; d++) b = p[d], b.stripLine.showOnTop ? g || (g = !0, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                    for (e = 0; e < p.length; e++) b =
                        p[e], "inside" === b.stripLine.labelPlacement && b.stripLine.showOnTop && (c.ctx.save(), c.ctx.beginPath(), c.ctx.rect(c.chart.plotArea.x1, c.chart.plotArea.y1, c.chart.plotArea.width, c.chart.plotArea.height), c.ctx.clip(), b.textBlock.render(!0), c.ctx.restore())
                }, b.textBlock)) : "inside" === b.stripLine.labelPlacement && b.textBlock.render(!0);
                this.ctx.restore();
                g = !0
            }
            if (g)
                for (g = !1, d = 0; d < p.length; d++) b = p[d], b.stripLine.showOnTop ? g || (g = !0, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                    for (e = 0; e < p.length; e++) b =
                        p[e], "outside" === b.stripLine.labelPlacement && b.stripLine.showOnTop && b.textBlock.render(!0)
                }, b.textBlock)) : "outside" === b.stripLine.labelPlacement && b.textBlock.render(!0)
        }
    };
    B.prototype.renderGrid = function() {
        if (this.gridThickness && 0 < this.gridThickness) {
            var a = this.chart.ctx;
            a.save();
            var c, b = this.chart.plotArea;
            a.lineWidth = this.gridThickness;
            a.strokeStyle = this.gridColor;
            a.setLineDash && a.setLineDash(D(this.gridDashType, this.gridThickness));
            if ("bottom" === this._position || "top" === this._position)
                for (d = 0; d <
                    this._labels.length; d++) this._labels[d].position < this.viewportMinimum || this._labels[d].position > this.viewportMaximum || (a.beginPath(), c = this.getPixelCoordinatesOnAxis(this._labels[d].position), c = 1 === a.lineWidth % 2 ? (c.x << 0) + 0.5 : c.x << 0, a.moveTo(c, b.y1 << 0), a.lineTo(c, b.y2 << 0), a.stroke());
            else if ("left" === this._position || "right" === this._position)
                for (var d = 0; d < this._labels.length; d++) this._labels[d].position < this.viewportMinimum || this._labels[d].position > this.viewportMaximum || (a.beginPath(), c = this.getPixelCoordinatesOnAxis(this._labels[d].position),
                    c = 1 === a.lineWidth % 2 ? (c.y << 0) + 0.5 : c.y << 0, a.moveTo(b.x1 << 0, c), a.lineTo(b.x2 << 0, c), a.stroke());
            a.restore()
        }
    };
    B.prototype.renderAxisLine = function() {
        var a = this.chart.ctx;
        a.save();
        if ("bottom" === this._position || "top" === this._position) {
            if (this.lineThickness) {
                a.lineWidth = this.lineThickness;
                a.strokeStyle = this.lineColor ? this.lineColor : "black";
                a.setLineDash && a.setLineDash(D(this.lineDashType, this.lineThickness));
                var c = 1 === this.lineThickness % 2 ? (this.lineCoordinates.y1 << 0) + 0.5 : this.lineCoordinates.y1 << 0;
                a.beginPath();
                a.moveTo(this.lineCoordinates.x1, c);
                a.lineTo(this.lineCoordinates.x2, c);
                a.stroke()
            }
        } else "left" !== this._position && "right" !== this._position || !this.lineThickness || (a.lineWidth = this.lineThickness, a.strokeStyle = this.lineColor, a.setLineDash && a.setLineDash(D(this.lineDashType, this.lineThickness)), c = 1 === this.lineThickness % 2 ? (this.lineCoordinates.x1 << 0) + 0.5 : this.lineCoordinates.x1 << 0, a.beginPath(), a.moveTo(c, this.lineCoordinates.y1), a.lineTo(c, this.lineCoordinates.y2), a.stroke());
        a.restore()
    };
    B.prototype.getPixelCoordinatesOnAxis =
        function(a) {
            var c = {};
            if ("bottom" === this._position || "top" === this._position) c.x = this.convertValueToPixel(a), c.y = this.lineCoordinates.y1;
            if ("left" === this._position || "right" === this._position) c.y = this.convertValueToPixel(a), c.x = this.lineCoordinates.x2;
            return c
        };
    B.prototype.convertPixelToValue = function(a) {
        if (!a) return null;
        var c = 0;
        a = "left" === this._position || "right" === this._position ? a.y : a.x;
        return c = this.logarithmic ? Math.pow(this.logarithmBase, (a - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit) *
            this.viewportMinimum : this.conversionParameters.minimum + (a - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit
    };
    B.prototype.setViewPortRange = function(a, c) {
        this.sessionVariables.newViewportMinimum = this.viewportMinimum = Math.min(a, c);
        this.sessionVariables.newViewportMaximum = this.viewportMaximum = Math.max(a, c)
    };
    B.prototype.getXValueAt = function(a) {
        if (!a) return null;
        var c = null;
        "left" === this._position ? c = this.convertPixelToValue(a.y) : "bottom" === this._position && (c = this.convertPixelToValue(a.x));
        return c
    };
    B.prototype.calculateValueToPixelConversionParameters = function(a) {
        a = {
            pixelPerUnit: null,
            minimum: null,
            reference: null
        };
        var c = this.lineCoordinates.width,
            b = this.lineCoordinates.height;
        a.minimum = this.viewportMinimum;
        if ("bottom" === this._position || "top" === this._position) this.logarithmic ? (a.lnLogarithmBase = Math.log(this.logarithmBase), a.pixelPerUnit = (this.reversed ? -1 : 1) * c * a.lnLogarithmBase / Math.log(Math.abs(this.viewportMaximum / this.viewportMinimum))) : a.pixelPerUnit = (this.reversed ? -1 : 1) * c / Math.abs(this.viewportMaximum -
            this.viewportMinimum), a.reference = this.reversed ? this.lineCoordinates.x2 : this.lineCoordinates.x1;
        if ("left" === this._position || "right" === this._position) this.logarithmic ? (a.lnLogarithmBase = Math.log(this.logarithmBase), a.pixelPerUnit = (this.reversed ? 1 : -1) * b * a.lnLogarithmBase / Math.log(Math.abs(this.viewportMaximum / this.viewportMinimum))) : a.pixelPerUnit = (this.reversed ? 1 : -1) * b / Math.abs(this.viewportMaximum - this.viewportMinimum), a.reference = this.reversed ? this.lineCoordinates.y1 : this.lineCoordinates.y2;
        this.conversionParameters =
            a
    };
    B.prototype.convertValueToPixel = function(a) {
        return this.logarithmic ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * Math.log(a / this.conversionParameters.minimum) / this.conversionParameters.lnLogarithmBase + 0.5 << 0 : this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5 << 0
    };
    B.prototype.calculateAxisParameters = function() {
        if (this.logarithmic) this.calculateLogarithamicAxisParameters();
        else {
            var a = this.chart.layoutManager.getFreeSpace(),
                c = !1;
            "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
            var a = "axisX" === this.type ? "xySwapped" === this.chart.plotInfo.axisPlacement ? 62 : 70 : "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 : 40,
                b = 4;
            "axisX" === this.type && (b = 100 > this.maxWidth ? 3 : 300 > this.maxWidth ? 6 : 600 > this.maxWidth ? 8 : 6);
            var a = Math.max(b, Math.floor(this.maxWidth / a)),
                d, e, f, b = 0;
            if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum =
                this.minimum;
            if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
            "axisX" === this.type ? (d = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 0 === e - d && (b = "undefined" === typeof this._options.interval ? 0.4 : this._options.interval, e += b, d -= b), Infinity !== this.dataInfo.minDiff ? f = this.dataInfo.minDiff : 1 < e - d ? f = 0.5 * Math.abs(e - d) : (f = 1, "dateTime" === this.chart.plotInfo.axisXValueType &&
                (c = !0))) : "axisY" === this.type && (d = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, isFinite(d) || isFinite(e) ? isFinite(d) ? isFinite(e) || (e = d) : d = e : (e = "undefined" === typeof this._options.interval ? -Infinity : this._options.interval, d = 0), 0 === d && 0 === e ? (e += 9, d = 0) : 0 === e - d ? (b = Math.min(Math.abs(0.01 * Math.abs(e)), 5), e += b, d -= b) : d > e ? (b = Math.min(Math.abs(0.01 * Math.abs(e - d)), 5), 0 <= e ? d = e - b : e = d + b) : (b = Math.min(Math.abs(0.01 *
                Math.abs(e - d)), 0.05), 0 !== e && (e += b), 0 !== d && (d -= b)), f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < e - d ? 0.5 * Math.abs(e - d) : 1, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 0 < d && (d = 0), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 0 > e && (e = 0));
            b = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum) - (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? d : this.viewportMinimum);
            if ("axisX" === this.type &&
                "dateTime" === this.chart.plotInfo.axisXValueType) {
                this.intervalType || (b / 1 <= a ? (this.interval = 1, this.intervalType = "millisecond") : b / 2 <= a ? (this.interval = 2, this.intervalType = "millisecond") : b / 5 <= a ? (this.interval = 5, this.intervalType = "millisecond") : b / 10 <= a ? (this.interval = 10, this.intervalType = "millisecond") : b / 20 <= a ? (this.interval = 20, this.intervalType = "millisecond") : b / 50 <= a ? (this.interval = 50, this.intervalType = "millisecond") : b / 100 <= a ? (this.interval = 100, this.intervalType = "millisecond") : b / 200 <= a ? (this.interval =
                        200, this.intervalType = "millisecond") : b / 250 <= a ? (this.interval = 250, this.intervalType = "millisecond") : b / 300 <= a ? (this.interval = 300, this.intervalType = "millisecond") : b / 400 <= a ? (this.interval = 400, this.intervalType = "millisecond") : b / 500 <= a ? (this.interval = 500, this.intervalType = "millisecond") : b / (1 * E.secondDuration) <= a ? (this.interval = 1, this.intervalType = "second") : b / (2 * E.secondDuration) <= a ? (this.interval = 2, this.intervalType = "second") : b / (5 * E.secondDuration) <= a ? (this.interval = 5, this.intervalType = "second") : b / (10 * E.secondDuration) <=
                    a ? (this.interval = 10, this.intervalType = "second") : b / (15 * E.secondDuration) <= a ? (this.interval = 15, this.intervalType = "second") : b / (20 * E.secondDuration) <= a ? (this.interval = 20, this.intervalType = "second") : b / (30 * E.secondDuration) <= a ? (this.interval = 30, this.intervalType = "second") : b / (1 * E.minuteDuration) <= a ? (this.interval = 1, this.intervalType = "minute") : b / (2 * E.minuteDuration) <= a ? (this.interval = 2, this.intervalType = "minute") : b / (5 * E.minuteDuration) <= a ? (this.interval = 5, this.intervalType = "minute") : b / (10 * E.minuteDuration) <=
                    a ? (this.interval = 10, this.intervalType = "minute") : b / (15 * E.minuteDuration) <= a ? (this.interval = 15, this.intervalType = "minute") : b / (20 * E.minuteDuration) <= a ? (this.interval = 20, this.intervalType = "minute") : b / (30 * E.minuteDuration) <= a ? (this.interval = 30, this.intervalType = "minute") : b / (1 * E.hourDuration) <= a ? (this.interval = 1, this.intervalType = "hour") : b / (2 * E.hourDuration) <= a ? (this.interval = 2, this.intervalType = "hour") : b / (3 * E.hourDuration) <= a ? (this.interval = 3, this.intervalType = "hour") : b / (6 * E.hourDuration) <= a ? (this.interval =
                        6, this.intervalType = "hour") : b / (1 * E.dayDuration) <= a ? (this.interval = 1, this.intervalType = "day") : b / (2 * E.dayDuration) <= a ? (this.interval = 2, this.intervalType = "day") : b / (4 * E.dayDuration) <= a ? (this.interval = 4, this.intervalType = "day") : b / (1 * E.weekDuration) <= a ? (this.interval = 1, this.intervalType = "week") : b / (2 * E.weekDuration) <= a ? (this.interval = 2, this.intervalType = "week") : b / (3 * E.weekDuration) <= a ? (this.interval = 3, this.intervalType = "week") : b / (1 * E.monthDuration) <= a ? (this.interval = 1, this.intervalType = "month") : b / (2 * E.monthDuration) <=
                    a ? (this.interval = 2, this.intervalType = "month") : b / (3 * E.monthDuration) <= a ? (this.interval = 3, this.intervalType = "month") : b / (6 * E.monthDuration) <= a ? (this.interval = 6, this.intervalType = "month") : (this.interval = b / (1 * E.yearDuration) <= a ? 1 : b / (2 * E.yearDuration) <= a ? 2 : b / (4 * E.yearDuration) <= a ? 4 : Math.floor(B.getNiceNumber(b / (a - 1), !0) / E.yearDuration), this.intervalType = "year"));
                if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = d - f / 2;
                if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum =
                    e + f / 2;
                c ? this.autoValueFormatString = "MMM DD YYYY HH:mm" : "year" === this.intervalType ? this.autoValueFormatString = "YYYY" : "month" === this.intervalType ? this.autoValueFormatString = "MMM YYYY" : "week" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "day" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "hour" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "minute" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "second" === this.intervalType ? this.autoValueFormatString =
                    "hh:mm:ss TT" : "millisecond" === this.intervalType && (this.autoValueFormatString = "fff'ms'");
                this.valueFormatString || (this.valueFormatString = this.autoValueFormatString)
            } else {
                this.intervalType = "number";
                b = B.getNiceNumber(b, !1);
                this.interval = this._options && 0 < this._options.interval ? this._options.interval : B.getNiceNumber(b / (a - 1), !0);
                if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? d - f / 2 : Math.floor(d / this.interval) * this.interval;
                if (null === this.viewportMaximum ||
                    isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? e + f / 2 : Math.ceil(e / this.interval) * this.interval;
                0 === this.viewportMaximum && 0 === this.viewportMinimum && (0 === this._options.viewportMinimum ? this.viewportMaximum += 10 : 0 === this._options.viewportMaximum && (this.viewportMinimum -= 10), this._options && "undefined" === typeof this._options.interval && (this.interval = B.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), !0)))
            }
            if (null === this.minimum || null === this.maximum)
                if ("axisX" === this.type ?
                    (d = null !== this.minimum ? this.minimum : this.dataInfo.min, e = null !== this.maximum ? this.maximum : this.dataInfo.max, 0 === e - d && (b = "undefined" === typeof this._options.interval ? 0.4 : this._options.interval, e += b, d -= b), f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < e - d ? 0.5 * Math.abs(e - d) : 1) : "axisY" === this.type && (d = null !== this.minimum ? this.minimum : this.dataInfo.min, e = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(d) || isFinite(e) ? 0 === d && 0 === e ? (e += 9, d = 0) : 0 === e - d ? (b = Math.min(Math.abs(0.01 * Math.abs(e)),
                        5), e += b, d -= b) : d > e ? (b = Math.min(Math.abs(0.01 * Math.abs(e - d)), 5), 0 <= e ? d = e - b : e = d + b) : (b = Math.min(Math.abs(0.01 * Math.abs(e - d)), 0.05), 0 !== e && (e += b), 0 !== d && (d -= b)) : (e = "undefined" === typeof this._options.interval ? -Infinity : this._options.interval, d = 0), f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < e - d ? 0.5 * Math.abs(e - d) : 1, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 0 < d && (d = 0), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 0 > e && (e = 0)), "axisX" === this.type && "dateTime" ===
                    this.chart.plotInfo.axisXValueType) {
                    if (null === this.minimum || isNaN(this.minimum)) this.minimum = d - f / 2;
                    if (null === this.maximum || isNaN(this.maximum)) this.maximum = e + f / 2
                } else this.intervalType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? d - f / 2 : Math.floor(d / this.interval) * this.interval, this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum)), null === this.maximum && (this.maximum =
                    "axisX" === this.type ? e + f / 2 : Math.ceil(e / this.interval) * this.interval, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum)), 0 === this.maximum && 0 === this.minimum && (0 === this._options.minimum ? this.maximum += 10 : 0 === this._options.maximum && (this.minimum -= 10));
            this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
            this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum);
            this.intervalStartPosition =
                "axisX" === this.type && "dateTime" === this.chart.plotInfo.axisXValueType ? this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval) : Math.floor((this.viewportMinimum + 0.2 * this.interval) / this.interval) * this.interval;
            if (!this.valueFormatString && (this.valueFormatString = "#,##0.##", b = Math.abs(this.viewportMaximum - this.viewportMinimum), 1 > b)) {
                c = Math.floor(Math.abs(Math.log(b) / Math.LN10)) + 2;
                if (isNaN(c) || !isFinite(c)) c = 2;
                if (2 < c)
                    for (d = 0; d < c - 2; d++) this.valueFormatString += "#"
            }
        }
    };
    B.prototype.calculateLogarithamicAxisParameters =
        function() {
            var a = this.chart.layoutManager.getFreeSpace(),
                c = Math.log(this.logarithmBase),
                b;
            "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
            var a = "axisX" === this.type ? 500 > this.maxWidth ? 7 : Math.max(7, Math.floor(this.maxWidth / 100)) : Math.max(Math.floor(this.maxWidth / 50), 3),
                d, e, f, g;
            g = 1;
            if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = this.minimum;
            if (null === this.viewportMaximum ||
                isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
            "axisX" === this.type ? (d = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 1 === e / d && (g = Math.pow(this.logarithmBase, "undefined" === typeof this._options.interval ? 0.4 : this._options.interval), e *= g, d /= g), f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / d > this.logarithmBase ? e / d * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" ===
                this.type && (d = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 0 >= d && !isFinite(e) ? (e = "undefined" === typeof this._options.interval ? 0 : this._options.interval, d = 1) : 0 >= d ? d = e : isFinite(e) || (e = d), 1 === d && 1 === e ? (e *= this.logarithmBase - 1 / this.logarithmBase, d = 1) : 1 === e / d ? (g = Math.min(e * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), e *= g, d /= g) : d > e ? (g = Math.min(d / e * Math.pow(this.logarithmBase, 0.01),
                    Math.pow(this.logarithmBase, 5)), 1 <= e ? d = e / g : e = d * g) : (g = Math.min(e / d * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== e && (e *= g), 1 !== d && (d /= g)), f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / d > this.logarithmBase ? e / d * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 1 < d && (d = 1), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 1 > e && (e = 1));
            g = (isNaN(this.viewportMaximum) ||
                null === this.viewportMaximum ? e : this.viewportMaximum) / (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? d : this.viewportMinimum);
            linearRange = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum) - (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? d : this.viewportMinimum);
            this.intervalType = "number";
            g = Math.pow(this.logarithmBase, B.getNiceNumber(Math.abs(Math.log(g) / c), !1));
            this._options && 0 < this._options.interval ? this.interval = this._options.interval : (this.interval =
                B.getNiceExponent(Math.log(g) / c / (a - 1), !0), b = B.getNiceNumber(linearRange / (a - 1), !0));
            if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? d / Math.sqrt(f) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(d) / c / this.interval));
            if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? e * Math.sqrt(f) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / c / this.interval));
            1 === this.viewportMaximum &&
                1 === this.viewportMinimum && (1 === this._options.viewportMinimum ? this.viewportMaximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this._options.viewportMaximum && (this.viewportMinimum /= this.logarithmBase - 1 / this.logarithmBase), this._options && "undefined" === typeof this._options.interval && (this.interval = B.getNiceExponent(Math.ceil(Math.log(g) / c) / (a - 1)), b = B.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), !0)));
            if (null === this.minimum || null === this.maximum) "axisX" === this.type ? (d = null !== this.minimum ?
                    this.minimum : this.dataInfo.min, e = null !== this.maximum ? this.maximum : this.dataInfo.max, 1 === e / d && (g = Math.pow(this.logarithmBase, "undefined" === typeof this._options.interval ? 0.4 : this._options.interval), e *= g, d /= g), f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / d > this.logarithmBase ? e / d * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (d = null !== this.minimum ? this.minimum : this.dataInfo.min, e = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(d) || isFinite(e) ? 1 ===
                    d && 1 === e ? (e *= this.logarithmBase, d /= this.logarithmBase) : 1 === e / d ? (g = Math.pow(this.logarithmBase, this.interval), e *= g, d /= g) : d > e ? (g = Math.min(0.01 * (d / e), 5), 1 <= e ? d = e / g : e = d * g) : (g = Math.min(e / d * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== e && (e *= g), 1 !== d && (d /= g)) : (e = "undefined" === typeof this._options.interval ? 0 : this._options.interval, d = 1), f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / d > this.logarithmBase ? e / d * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero &&
                    (null === this.minimum || isNaN(this.minimum)) && 1 < d && (d = 1), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 1 > e && (e = 1)), this.intervalType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? d / Math.sqrt(f) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(d) / c / this.interval)), this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity :
                    this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum)), null === this.maximum && (this.maximum = "axisX" === this.type ? e * Math.sqrt(f) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / c / this.interval)), this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum)),
                1 === this.maximum && 1 === this.minimum && (1 === this._options.minimum ? this.maximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this._options.maximum && (this.minimum /= this.logarithmBase - 1 / this.logarithmBase));
            this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
            this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum);
            this.viewportMinimum > this.viewportMaximum && (!this._options.viewportMinimum && !this._options.minimum || this._options.viewportMaximum || this._options.maximum ? this._options.viewportMinimum ||
                this._options.minimum || !this._options.viewportMaximum && !this._options.maximum || (this.viewportMinimum = this.minimum = (this._options.viewportMaximum || this._options.maximum) / Math.pow(this.logarithmBase, 2 * Math.ceil(this.interval))) : this.viewportMaximum = this.maximum = this._options.viewportMinimum || this._options.minimum);
            d = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (c * this.interval) + 0.2) * this.interval);
            this.range = this.viewportMaximum / this.viewportMinimum;
            this.noTicks = a;
            if (!this._options.interval &&
                this.range < Math.pow(this.logarithmBase, 8 > this.viewportMaximum || 3 > a ? 2 : 3)) {
                for (c = Math.floor(this.viewportMinimum / b + 0.5) * b; c < this.viewportMinimum;) c += b;
                this.equidistantInterval = !1;
                this.intervalStartPosition = c;
                this.interval = b
            } else this._options.interval || (b = Math.ceil(this.interval), this.range > this.interval && (this.interval = b, d = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (c * this.interval) + 0.2) * this.interval))), this.equidistantInterval = !0, this.intervalStartPosition = d;
            if (!this.valueFormatString &&
                (this.valueFormatString = "#,##0.##", Math.abs(this.viewportMaximum - this.viewportMinimum), 1 > this.viewportMinimum)) {
                c = Math.floor(Math.abs(Math.log(this.viewportMinimum) / Math.LN10)) + 2;
                if (isNaN(c) || !isFinite(c)) c = 2;
                if (2 < c)
                    for (b = 0; b < c - 2; b++) this.valueFormatString += "#"
            }
        };
    B.getNiceExponent = function(a, c) {
        var b = Math.floor(Math.log(a) / Math.LN10),
            d = a / Math.pow(10, b),
            d = 0 > b ? 1 >= d ? 1 : 5 >= d ? 5 : 10 : Math.max(Math.floor(d), 1);
        return Number((d * Math.pow(10, b)).toFixed(20))
    };
    B.getNiceNumber = function(a, c) {
        var b = Math.floor(Math.log(a) /
                Math.LN10),
            d = a / Math.pow(10, b);
        return Number(((c ? 1.5 > d ? 1 : 3 > d ? 2 : 7 > d ? 5 : 10 : 1 >= d ? 1 : 2 >= d ? 2 : 5 >= d ? 5 : 10) * Math.pow(10, b)).toFixed(20))
    };
    B.prototype.getLabelStartPoint = function() {
        var a = E[this.intervalType + "Duration"] * this.interval,
            a = new Date(Math.floor(this.viewportMinimum / a) * a);
        if ("millisecond" !== this.intervalType)
            if ("second" === this.intervalType) 0 < a.getMilliseconds() && (a.setSeconds(a.getSeconds() + 1), a.setMilliseconds(0));
            else if ("minute" === this.intervalType) {
            if (0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMinutes(a.getMinutes() +
                1), a.setSeconds(0), a.setMilliseconds(0)
        } else if ("hour" === this.intervalType) {
            if (0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setHours(a.getHours() + 1), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
        } else if ("day" === this.intervalType) {
            if (0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + 1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
        } else if ("week" === this.intervalType) {
            if (0 < a.getDay() || 0 < a.getHours() || 0 < a.getMinutes() ||
                0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + (7 - a.getDay())), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
        } else if ("month" === this.intervalType) {
            if (1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMonth(a.getMonth() + 1), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
        } else "year" === this.intervalType && (0 < a.getMonth() || 1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) &&
            (a.setFullYear(a.getFullYear() + 1), a.setMonth(0), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0));
        return a
    };
    S(pa, K);
    pa.prototype.render = function() {
        this.ctx.save();
        var a = this.parent.getPixelCoordinatesOnAxis(this.value),
            c = Math.abs("pixel" === this._thicknessType ? this.thickness : this.parent.conversionParameters.pixelPerUnit * this.thickness);
        if (0 < c) {
            var b = null === this.opacity ? 1 : this.opacity;
            this.ctx.strokeStyle = this.color;
            this.ctx.beginPath();
            var d = this.ctx.globalAlpha;
            this.ctx.globalAlpha =
                b;
            C(this.id);
            var e, f, g, h;
            this.ctx.lineWidth = c;
            this.ctx.setLineDash && this.ctx.setLineDash(D(this.lineDashType, c));
            if ("bottom" === this.parent._position || "top" === this.parent._position) e = f = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, g = this.chart.plotArea.y1, h = this.chart.plotArea.y2;
            else if ("left" === this.parent._position || "right" === this.parent._position) g = h = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, e = this.chart.plotArea.x1, f = this.chart.plotArea.x2;
            this.ctx.moveTo(e, g);
            this.ctx.lineTo(f, h);
            this.ctx.stroke();
            this.ctx.globalAlpha = d
        }
        this.ctx.restore()
    };
    S(U, K);
    U.prototype._initialize = function() {
        if (this.enabled) {
            this.container = document.createElement("div");
            this.container.setAttribute("class", "canvasjs-chart-tooltip");
            this.container.style.position = "absolute";
            this.container.style.height = "auto";
            this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
            this.container.style.zIndex = "1000";
            this.container.style.display = "none";
            var a;
            a = '<div style=" width: auto;height: auto;min-width: 50px;';
            a += "line-height: auto;";
            a += "margin: 0px 0px 0px 0px;";
            a += "padding: 5px;";
            a += "font-family: Calibri, Arial, Georgia, serif;";
            a += "font-weight: normal;";
            a += "font-style: " + (t ? "italic;" : "normal;");
            a += "font-size: 14px;";
            a += "color: #000000;";
            a += "text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";
            a += "text-align: left;";
            a += "border: 2px solid gray;";
            a += t ? "background: rgba(255,255,255,.9);" : "background: rgb(255,255,255);";
            a += "text-indent: 0px;";
            a += "white-space: nowrap;";
            a += "border-radius: 5px;";
            a += "-moz-user-select:none;";
            a += "-khtml-user-select: none;";
            a += "-webkit-user-select: none;";
            a += "-ms-user-select: none;";
            a += "user-select: none;";
            t || (a += "filter: alpha(opacity = 90);", a += "filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');");
            a += '} "> Sample Tooltip</div>';
            this.container.innerHTML = a;
            this.contentDiv = this.container.firstChild;
            this.container.style.borderRadius = this.contentDiv.style.borderRadius;
            this.chart._canvasJSContainer.appendChild(this.container)
        }
    };
    U.prototype.mouseMoveHandler = function(a, c) {
        this._lastUpdated &&
            40 > (new Date).getTime() - this._lastUpdated || (this._lastUpdated = (new Date).getTime(), this._updateToolTip(a, c))
    };
    U.prototype._updateToolTip = function(a, c) {
        if (!this.chart.disableToolTip) {
            if ("undefined" === typeof a || "undefined" === typeof c) {
                if (isNaN(this._prevX) || isNaN(this._prevY)) return;
                a = this._prevX;
                c = this._prevY
            } else this._prevX = a, this._prevY = c;
            var b = null,
                d = null,
                e = [],
                f = 0;
            if (this.shared && this.enabled && "none" !== this.chart.plotInfo.axisPlacement) {
                f = "xySwapped" === this.chart.plotInfo.axisPlacement ? this.chart.axisX.convertPixelToValue({
                        y: c
                    }) :
                    this.chart.axisX.convertPixelToValue({
                        x: a
                    });
                d = [];
                for (b = 0; b < this.chart.data.length; b++) {
                    var g = this.chart.data[b].getDataPointAtX(f, !0);
                    g && 0 <= g.index && (g.dataSeries = this.chart.data[b], null !== g.dataPoint.y && d.push(g))
                }
                if (0 === d.length) return;
                d.sort(function(a, b) {
                    return a.distance - b.distance
                });
                f = d[0];
                for (b = 0; b < d.length; b++) d[b].dataPoint.x.valueOf() === f.dataPoint.x.valueOf() && e.push(d[b]);
                d = null
            } else {
                if (g = this.chart.getDataPointAtXY(a, c, !0)) this.currentDataPointIndex = g.dataPointIndex, this.currentSeriesIndex =
                    g.dataSeries.index;
                else if (t)
                    if (g = Da(a, c, this.chart._eventManager.ghostCtx), 0 < g && "undefined" !== typeof this.chart._eventManager.objectMap[g]) {
                        g = this.chart._eventManager.objectMap[g];
                        if ("legendItem" === g.objectType) return;
                        this.currentSeriesIndex = g.dataSeriesIndex;
                        this.currentDataPointIndex = 0 <= g.dataPointIndex ? g.dataPointIndex : -1
                    } else this.currentDataPointIndex = -1;
                else this.currentDataPointIndex = -1;
                if (0 <= this.currentSeriesIndex) {
                    d = this.chart.data[this.currentSeriesIndex];
                    g = {};
                    if (0 <= this.currentDataPointIndex) b =
                        d.dataPoints[this.currentDataPointIndex], g.dataSeries = d, g.dataPoint = b, g.index = this.currentDataPointIndex, g.distance = Math.abs(b.x - f);
                    else {
                        if (!this.enabled || "line" !== d.type && "stepLine" !== d.type && "spline" !== d.type && "area" !== d.type && "stepArea" !== d.type && "splineArea" !== d.type && "stackedArea" !== d.type && "stackedArea100" !== d.type && "rangeArea" !== d.type && "rangeSplineArea" !== d.type && "candlestick" !== d.type && "ohlc" !== d.type) return;
                        f = d.axisX.convertPixelToValue({
                            x: a
                        });
                        g = d.getDataPointAtX(f, !0);
                        g.dataSeries = d;
                        this.currentDataPointIndex =
                            g.index;
                        b = g.dataPoint
                    }
                    if (!x(g.dataPoint.y))
                        if (g.dataSeries.axisY)
                            if (0 < g.dataPoint.y.length) {
                                for (b = f = 0; b < g.dataPoint.y.length; b++) g.dataPoint.y[b] < g.dataSeries.axisY.viewportMinimum ? f-- : g.dataPoint.y[b] > g.dataSeries.axisY.viewportMaximum && f++;
                                f < g.dataPoint.y.length && f > -g.dataPoint.y.length && e.push(g)
                            } else "column" === d.type || "bar" === d.type ? 0 > g.dataPoint.y ? 0 > g.dataSeries.axisY.viewportMinimum && g.dataSeries.axisY.viewportMaximum >= g.dataPoint.y && e.push(g) : g.dataSeries.axisY.viewportMinimum <= g.dataPoint.y &&
                                0 <= g.dataSeries.axisY.viewportMaximum && e.push(g) : "bubble" === d.type ? (f = this.chart._eventManager.objectMap[d.dataPointIds[g.index]].size / 2, g.dataPoint.y >= g.dataSeries.axisY.viewportMinimum - f && g.dataPoint.y <= g.dataSeries.axisY.viewportMaximum + f && e.push(g)) : (0 <= g.dataSeries.type.indexOf("100") || "stackedColumn" === d.type || "stackedBar" === d.type || g.dataPoint.y >= g.dataSeries.axisY.viewportMinimum && g.dataPoint.y <= g.dataSeries.axisY.viewportMaximum) && e.push(g);
                    else e.push(g)
                }
            }
            if (0 < e.length && (this.highlightObjects(e),
                    this.enabled))
                if (f = "", f = this.getToolTipInnerHTML({
                        entries: e
                    }), null !== f) {
                    this.contentDiv.innerHTML = f;
                    this.contentDiv.innerHTML = f;
                    f = !1;
                    "none" === this.container.style.display && (f = !0, this.container.style.display = "block");
                    try {
                        this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : t ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.borderColor ? this.borderColor : e[0].dataPoint.color ?
                            e[0].dataPoint.color : e[0].dataSeries.color ? e[0].dataSeries.color : e[0].dataSeries._colorSet[e[0].index % e[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize +
                            "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : t ? "italic" : "normal"
                    } catch (h) {}
                    "pie" === e[0].dataSeries.type || "doughnut" === e[0].dataSeries.type || "funnel" === e[0].dataSeries.type || "bar" === e[0].dataSeries.type || "rangeBar" === e[0].dataSeries.type ||
                        "stackedBar" === e[0].dataSeries.type || "stackedBar100" === e[0].dataSeries.type ? g = a - 10 - this.container.clientWidth : (g = e[0].dataSeries.axisX.convertValueToPixel(e[0].dataPoint.x) - this.container.clientWidth << 0, g -= 10);
                    0 > g && (g += this.container.clientWidth + 20);
                    g + this.container.clientWidth > Math.max(this.chart._container.clientWidth, this.chart.width) && (g = Math.max(0, Math.max(this.chart._container.clientWidth, this.chart.width) - this.container.clientWidth));
                    g += "px";
                    e = 1 !== e.length || this.shared || "line" !== e[0].dataSeries.type &&
                        "stepLine" !== e[0].dataSeries.type && "spline" !== e[0].dataSeries.type && "area" !== e[0].dataSeries.type && "stepArea" !== e[0].dataSeries.type && "splineArea" !== e[0].dataSeries.type ? "bar" === e[0].dataSeries.type || "rangeBar" === e[0].dataSeries.type || "stackedBar" === e[0].dataSeries.type || "stackedBar100" === e[0].dataSeries.type ? e[0].dataSeries.axisX.convertValueToPixel(e[0].dataPoint.x) : c : e[0].dataSeries.axisY.convertValueToPixel(e[0].dataPoint.y);
                    e = -e + 10;
                    0 < e + this.container.clientHeight + 5 && (e -= e + this.container.clientHeight +
                        5 - 0);
                    this.container.style.left = g;
                    this.container.style.bottom = e + "px";
                    !this.animationEnabled || f ? this.disableAnimation() : this.enableAnimation()
                } else this.hide(!1)
        }
    };
    U.prototype.highlightObjects = function(a) {
        var c = this.chart.overlaidCanvasCtx;
        this.chart.resetOverlayedCanvas();
        c.clearRect(0, 0, this.chart.width, this.chart.height);
        c.save();
        var b = this.chart.plotArea,
            d = 0;
        c.beginPath();
        c.rect(b.x1, b.y1, b.x2 - b.x1, b.y2 - b.y1);
        c.clip();
        for (b = 0; b < a.length; b++) {
            var e = a[b];
            if ((e = this.chart._eventManager.objectMap[e.dataSeries.dataPointIds[e.index]]) &&
                e.objectType && "dataPoint" === e.objectType) {
                var d = this.chart.data[e.dataSeriesIndex],
                    f = d.dataPoints[e.dataPointIndex],
                    g = e.dataPointIndex;
                !1 === f.highlightEnabled || !0 !== d.highlightEnabled && !0 !== f.highlightEnabled || ("line" === d.type || "stepLine" === d.type || "spline" === d.type || "scatter" === d.type || "area" === d.type || "stepArea" === d.type || "splineArea" === d.type || "stackedArea" === d.type || "stackedArea100" === d.type || "rangeArea" === d.type || "rangeSplineArea" === d.type ? (f = d.getMarkerProperties(g, e.x1, e.y1, this.chart.overlaidCanvasCtx),
                    f.size = Math.max(1.5 * f.size << 0, 10), f.borderColor = f.borderColor || "#FFFFFF", f.borderThickness = f.borderThickness || Math.ceil(0.1 * f.size), O.drawMarkers([f]), "undefined" !== typeof e.y2 && (f = d.getMarkerProperties(g, e.x1, e.y2, this.chart.overlaidCanvasCtx), f.size = Math.max(1.5 * f.size << 0, 10), f.borderColor = f.borderColor || "#FFFFFF", f.borderThickness = f.borderThickness || Math.ceil(0.1 * f.size), O.drawMarkers([f]))) : "bubble" === d.type ? (f = d.getMarkerProperties(g, e.x1, e.y1, this.chart.overlaidCanvasCtx), f.size = e.size, f.color =
                    "white", f.borderColor = "white", c.globalAlpha = 0.3, O.drawMarkers([f]), c.globalAlpha = 1) : "column" === d.type || "stackedColumn" === d.type || "stackedColumn100" === d.type || "bar" === d.type || "rangeBar" === d.type || "stackedBar" === d.type || "stackedBar100" === d.type || "rangeColumn" === d.type ? M(c, e.x1, e.y1, e.x2, e.y2, "white", 0, null, !1, !1, !1, !1, 0.3) : "pie" === d.type || "doughnut" === d.type ? ya(c, e.center, e.radius, "white", d.type, e.startAngle, e.endAngle, 0.3, e.percentInnerRadius) : "candlestick" === d.type ? (c.globalAlpha = 1, c.strokeStyle =
                    e.color, c.lineWidth = 2 * e.borderThickness, d = 0 === c.lineWidth % 2 ? 0 : 0.5, c.beginPath(), c.moveTo(e.x3 - d, Math.min(e.y2, e.y3)), c.lineTo(e.x3 - d, Math.min(e.y1, e.y4)), c.stroke(), c.beginPath(), c.moveTo(e.x3 - d, Math.max(e.y1, e.y4)), c.lineTo(e.x3 - d, Math.max(e.y2, e.y3)), c.stroke(), M(c, e.x1, Math.min(e.y1, e.y4), e.x2, Math.max(e.y1, e.y4), "transparent", 2 * e.borderThickness, e.color, !1, !1, !1, !1), c.globalAlpha = 1) : "ohlc" === d.type && (c.globalAlpha = 1, c.strokeStyle = e.color, c.lineWidth = 2 * e.borderThickness, d = 0 === c.lineWidth % 2 ? 0 : 0.5,
                    c.beginPath(), c.moveTo(e.x3 - d, e.y2), c.lineTo(e.x3 - d, e.y3), c.stroke(), c.beginPath(), c.moveTo(e.x3, e.y1), c.lineTo(e.x1, e.y1), c.stroke(), c.beginPath(), c.moveTo(e.x3, e.y4), c.lineTo(e.x2, e.y4), c.stroke(), c.globalAlpha = 1))
            }
        }
        c.restore();
        c.globalAlpha = 1;
        c.beginPath()
    };
    U.prototype.getToolTipInnerHTML = function(a) {
        a = a.entries;
        for (var c = null, b = null, d = null, e = 0, f = "", g = !0, h = 0; h < a.length; h++)
            if (a[h].dataSeries.toolTipContent || a[h].dataPoint.toolTipContent) {
                g = !1;
                break
            }
        if (g && (this.content && "function" === typeof this.content ||
                this.contentFormatter)) a = {
            chart: this.chart._publicChartReference,
            toolTip: this._options,
            entries: a
        }, c = this.contentFormatter ? this.contentFormatter(a) : this.content(a);
        else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
            for (var p = "", h = 0; h < a.length; h++)
                if (b = a[h].dataSeries, d = a[h].dataPoint, e = a[h].index, f = "", 0 === h && (g && !this.content) && (p += "undefined" !== typeof this.chart.axisX.labels[d.x] ? this.chart.axisX.labels[d.x] : "{x}", p += "</br>", p = this.chart.replaceKeywordsWithValue(p, d, b, e)), null !== d.toolTipContent &&
                    ("undefined" !== typeof d.toolTipContent || null !== b._options.toolTipContent)) {
                    if ("line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "column" === b.type || "bar" === b.type || "scatter" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type) f += d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !==
                        typeof this.content ? this.content : "<span style='\"" + (this.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}";
                    else if ("bubble" === b.type) f += d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";
                    else if ("rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type) f += d.toolTipContent ?
                        d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}";
                    else if ("candlestick" === b.type || "ohlc" === b.type) f += d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}";
                    null === c && (c = "");
                    !0 === this.reversed ? (c = this.chart.replaceKeywordsWithValue(f, d, b, e) + c, h < a.length - 1 && (c = "</br>" + c)) : (c += this.chart.replaceKeywordsWithValue(f, d, b, e), h < a.length - 1 && (c += "</br>"))
                }
            null !== c && (c = p + c)
        } else {
            b = a[0].dataSeries;
            d = a[0].dataPoint;
            e = a[0].index;
            if (null === d.toolTipContent || "undefined" === typeof d.toolTipContent && null === b._options.toolTipContent) return null;
            if ("line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "column" ===
                b.type || "bar" === b.type || "scatter" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type) f = d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.fontColor ? "" : "'color:{color};'") + "\"'>" + (d.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}";
            else if ("bubble" === b.type) f = d.toolTipContent ? d.toolTipContent :
                b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.fontColor ? "" : "'color:{color};'") + "\"'>" + (d.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";
            else if ("pie" === b.type || "doughnut" === b.type || "funnel" === b.type) f = d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.fontColor ? "" : "'color:{color};'") + "\"'>" + (d.name ? "{name}:</span>&nbsp;&nbsp;" :
                d.label ? "{label}:</span>&nbsp;&nbsp;" : "</span>") + "{y}";
            else if ("rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type) f = d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.fontColor ? "" : "'color:{color};'") + "\"'>" + (d.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}";
            else if ("candlestick" === b.type || "ohlc" === b.type) f = d.toolTipContent ? d.toolTipContent :
                b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.fontColor ? "" : "'color:{color};'") + "\"'>" + (d.label ? "{label}" : "{x}") + "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}";
            null === c && (c = "");
            c += this.chart.replaceKeywordsWithValue(f, d, b, e)
        }
        return c
    };
    U.prototype.enableAnimation = function() {
        this.container.style.WebkitTransition || (this.container.style.WebkitTransition =
            "left .2s ease-out, bottom .2s ease-out", this.container.style.MozTransition = "left .2s ease-out, bottom .2s ease-out", this.container.style.MsTransition = "left .2s ease-out, bottom .2s ease-out", this.container.style.transition = "left .2s ease-out, bottom .2s ease-out")
    };
    U.prototype.disableAnimation = function() {
        this.container.style.WebkitTransition && (this.container.style.WebkitTransition = "", this.container.style.MozTransition = "", this.container.style.MsTransition = "", this.container.style.transition = "")
    };
    U.prototype.hide =
        function(a) {
            this.enabled && (this.container.style.display = "none", this.currentSeriesIndex = -1, this._prevY = this._prevX = NaN, ("undefined" === typeof a || a) && this.chart.resetOverlayedCanvas())
        };
    z.prototype.getPercentAndTotal = function(a, c) {
        var b = null,
            d = null,
            e = null;
        if (0 <= a.type.indexOf("stacked")) d = 0, b = c.x.getTime ? c.x.getTime() : c.x, b in a.plotUnit.yTotals && (d = a.plotUnit.yTotals[b], e = isNaN(c.y) ? 0 : 0 === d ? 0 : 100 * (c.y / d));
        else if ("pie" === a.type || "doughnut" === a.type) {
            for (i = d = 0; i < a.dataPoints.length; i++) isNaN(a.dataPoints[i].y) ||
                (d += a.dataPoints[i].y);
            e = isNaN(c.y) ? 0 : 100 * (c.y / d)
        }
        return {
            percent: e,
            total: d
        }
    };
    z.prototype.replaceKeywordsWithValue = function(a, c, b, d, e) {
        var f = this;
        e = "undefined" === typeof e ? 0 : e;
        if ((0 <= b.type.indexOf("stacked") || "pie" === b.type || "doughnut" === b.type) && (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))) {
            var g = "#percent",
                h = "#total",
                p = this.getPercentAndTotal(b, c),
                h = isNaN(p.total) ? h : p.total,
                g = isNaN(p.percent) ? g : p.percent;
            do {
                p = "";
                if (b.percentFormatString) p = b.percentFormatString;
                else {
                    var p = "#,##0.",
                        k = Math.max(Math.ceil(Math.log(1 /
                            Math.abs(g)) / Math.LN10), 2);
                    if (isNaN(k) || !isFinite(k)) k = 2;
                    for (var n = 0; n < k; n++) p += "#"
                }
                a = a.replace("#percent", Y(g, p, f._cultureInfo));
                a = a.replace("#total", Y(h, b.yValueFormatString ? b.yValueFormatString : "#,##0.########"))
            } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))
        }
        return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g, function(a) {
            if ('"' === a[0] && '"' === a[a.length - 1] || "'" === a[0] && "'" === a[a.length - 1]) return a.slice(1, a.length - 1);
            a = ea(a.slice(1, a.length - 1));
            a = a.replace("#index", e);
            var g = null;
            try {
                var h = a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
                h && 0 < h.length && (g = ea(h[2]), a = ea(h[1]))
            } catch (k) {}
            h = null;
            if ("color" === a) return c.color ? c.color : b.color ? b.color : b._colorSet[d % b._colorSet.length];
            if (c.hasOwnProperty(a)) h = c;
            else if (b.hasOwnProperty(a)) h = b;
            else return "";
            h = h[a];
            null !== g && (h = h[g]);
            return "x" === a ? !f.plotInfo.plotTypes[0].plotUnits[0].axisX.logarithmic && ("dateTime" === f.plotInfo.axisXValueType || "dateTime" === b.xValueType || c.x && c.x.getTime) ? wa(h, c.xValueFormatString ? c.xValueFormatString : b.xValueFormatString ? b.xValueFormatString : f.axisX && f.axisX.autoValueFormatString ?
                f.axisX.autoValueFormatString : "DD MMM YY", f._cultureInfo) : Y(h, c.xValueFormatString ? c.xValueFormatString : b.xValueFormatString ? b.xValueFormatString : "#,##0.########", f._cultureInfo) : "y" === a ? Y(h, c.yValueFormatString ? c.yValueFormatString : b.yValueFormatString ? b.yValueFormatString : "#,##0.########", f._cultureInfo) : "z" === a ? Y(h, c.zValueFormatString ? c.zValueFormatString : b.zValueFormatString ? b.zValueFormatString : "#,##0.########", f._cultureInfo) : h
        })
    };
    fa.prototype.reset = function() {
        this.lastObjectId = 0;
        this.objectMap = [];
        this.rectangularRegionEventSubscriptions = [];
        this.previousDataPointEventObject = null;
        this.eventObjects = [];
        t && (this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height), this.ghostCtx.beginPath())
    };
    fa.prototype.getNewObjectTrackingId = function() {
        return ++this.lastObjectId
    };
    fa.prototype.mouseEventHandler = function(a) {
        if ("mousemove" === a.type || "click" === a.type) {
            var c = [],
                b = ra(a),
                d = null;
            if ((d = this.chart.getObjectAtXY(b.x, b.y, !1)) && "undefined" !== typeof this.objectMap[d])
                if (d = this.objectMap[d], "dataPoint" ===
                    d.objectType) {
                    var e = this.chart.data[d.dataSeriesIndex],
                        f = e.dataPoints[d.dataPointIndex],
                        g = d.dataPointIndex;
                    d.eventParameter = {
                        x: b.x,
                        y: b.y,
                        dataPoint: f,
                        dataSeries: e._options,
                        dataPointIndex: g,
                        dataSeriesIndex: e.index,
                        chart: this.chart._publicChartReference
                    };
                    d.eventContext = {
                        context: f,
                        userContext: f,
                        mouseover: "mouseover",
                        mousemove: "mousemove",
                        mouseout: "mouseout",
                        click: "click"
                    };
                    c.push(d);
                    d = this.objectMap[e.id];
                    d.eventParameter = {
                        x: b.x,
                        y: b.y,
                        dataPoint: f,
                        dataSeries: e._options,
                        dataPointIndex: g,
                        dataSeriesIndex: e.index,
                        chart: this.chart._publicChartReference
                    };
                    d.eventContext = {
                        context: e,
                        userContext: e._options,
                        mouseover: "mouseover",
                        mousemove: "mousemove",
                        mouseout: "mouseout",
                        click: "click"
                    };
                    c.push(this.objectMap[e.id])
                } else "legendItem" === d.objectType && (e = this.chart.data[d.dataSeriesIndex], f = null !== d.dataPointIndex ? e.dataPoints[d.dataPointIndex] : null, d.eventParameter = {
                    x: b.x,
                    y: b.y,
                    dataSeries: e._options,
                    dataPoint: f,
                    dataPointIndex: d.dataPointIndex,
                    dataSeriesIndex: d.dataSeriesIndex,
                    chart: this.chart._publicChartReference
                }, d.eventContext = {
                    context: this.chart.legend,
                    userContext: this.chart.legend._options,
                    mouseover: "itemmouseover",
                    mousemove: "itemmousemove",
                    mouseout: "itemmouseout",
                    click: "itemclick"
                }, c.push(d));
            e = [];
            for (b = 0; b < this.mouseoveredObjectMaps.length; b++) {
                f = !0;
                for (d = 0; d < c.length; d++)
                    if (c[d].id === this.mouseoveredObjectMaps[b].id) {
                        f = !1;
                        break
                    }
                f ? this.fireEvent(this.mouseoveredObjectMaps[b], "mouseout", a) : e.push(this.mouseoveredObjectMaps[b])
            }
            this.mouseoveredObjectMaps = e;
            for (b = 0; b < c.length; b++) {
                e = !1;
                for (d = 0; d < this.mouseoveredObjectMaps.length; d++)
                    if (c[b].id ===
                        this.mouseoveredObjectMaps[d].id) {
                        e = !0;
                        break
                    }
                e || (this.fireEvent(c[b], "mouseover", a), this.mouseoveredObjectMaps.push(c[b]));
                "click" === a.type ? this.fireEvent(c[b], "click", a) : "mousemove" === a.type && this.fireEvent(c[b], "mousemove", a)
            }
        }
    };
    fa.prototype.fireEvent = function(a, c, b) {
        if (a && c) {
            var d = a.eventParameter,
                e = a.eventContext,
                f = a.eventContext.userContext;
            f && (e && f[e[c]]) && f[e[c]].call(f, d);
            "mouseout" !== c ? f.cursor && f.cursor !== b.target.style.cursor && (b.target.style.cursor = f.cursor) : (b.target.style.cursor = this.chart._defaultCursor,
                delete a.eventParameter, delete a.eventContext);
            "click" === c && ("dataPoint" === a.objectType && this.chart.pieDoughnutClickHandler) && this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex], d)
        }
    };
    S(ha, K);
    va.prototype.animate = function(a, c, b, d, e) {
        var f = this;
        this.chart.isAnimating = !0;
        e = e || F.easing.linear;
        b && this.animations.push({
            startTime: (new Date).getTime() + (a ? a : 0),
            duration: c,
            animationCallback: b,
            onComplete: d
        });
        for (a = []; 0 < this.animations.length;)
            if (c = this.animations.shift(), b = (new Date).getTime(),
                d = 0, c.startTime <= b && (d = e(Math.min(b - c.startTime, c.duration), 0, 1, c.duration), d = Math.min(d, 1), isNaN(d) || !isFinite(d)) && (d = 1), 1 > d && a.push(c), c.animationCallback(d), 1 <= d && c.onComplete) c.onComplete();
        this.animations = a;
        0 < this.animations.length ? this.animationRequestId = this.chart.requestAnimFrame.call(window, function() {
            f.animate.call(f)
        }) : this.chart.isAnimating = !1
    };
    va.prototype.cancelAllAnimations = function() {
        this.animations = [];
        this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
        this.animationRequestId = null;
        this.chart.isAnimating = !1
    };
    var F = {
            yScaleAnimation: function(a, c) {
                if (0 !== a) {
                    var b = c.dest,
                        d = c.source.canvas,
                        e = c.animationBase;
                    b.drawImage(d, 0, 0, d.width, d.height, 0, e - e * a, b.canvas.width / N, a * b.canvas.height / N)
                }
            },
            xScaleAnimation: function(a, c) {
                if (0 !== a) {
                    var b = c.dest,
                        d = c.source.canvas,
                        e = c.animationBase;
                    b.drawImage(d, 0, 0, d.width, d.height, e - e * a, 0, a * b.canvas.width / N, b.canvas.height / N)
                }
            },
            xClipAnimation: function(a, c) {
                if (0 !== a) {
                    var b = c.dest,
                        d = c.source.canvas;
                    b.save();
                    0 < a && b.drawImage(d,
                        0, 0, d.width * a, d.height, 0, 0, d.width * a / N, d.height / N);
                    b.restore()
                }
            },
            fadeInAnimation: function(a, c) {
                if (0 !== a) {
                    var b = c.dest,
                        d = c.source.canvas;
                    b.save();
                    b.globalAlpha = a;
                    b.drawImage(d, 0, 0, d.width, d.height, 0, 0, b.canvas.width / N, b.canvas.height / N);
                    b.restore()
                }
            },
            easing: {
                linear: function(a, c, b, d) {
                    return b * a / d + c
                },
                easeOutQuad: function(a, c, b, d) {
                    return -b * (a /= d) * (a - 2) + c
                },
                easeOutQuart: function(a, c, b, d) {
                    return -b * ((a = a / d - 1) * a * a * a - 1) + c
                },
                easeInQuad: function(a, c, b, d) {
                    return b * (a /= d) * a + c
                },
                easeInQuart: function(a, c, b, d) {
                    return b *
                        (a /= d) * a * a * a + c
                }
            }
        },
        O = {
            drawMarker: function(a, c, b, d, e, f, g, h) {
                if (b) {
                    var p = 1;
                    b.fillStyle = f ? f : "#000000";
                    b.strokeStyle = g ? g : "#000000";
                    b.lineWidth = h ? h : 0;
                    "circle" === d ? (b.moveTo(a, c), b.beginPath(), b.arc(a, c, e / 2, 0, 2 * Math.PI, !1), f && b.fill(), h && (g ? b.stroke() : (p = b.globalAlpha, b.globalAlpha = 0.15, b.strokeStyle = "black", b.stroke(), b.globalAlpha = p))) : "square" === d ? (b.beginPath(), b.rect(a - e / 2, c - e / 2, e, e), f && b.fill(), h && (g ? b.stroke() : (p = b.globalAlpha, b.globalAlpha = 0.15, b.strokeStyle = "black", b.stroke(), b.globalAlpha = p))) :
                        "triangle" === d ? (b.beginPath(), b.moveTo(a - e / 2, c + e / 2), b.lineTo(a + e / 2, c + e / 2), b.lineTo(a, c - e / 2), b.closePath(), f && b.fill(), h && (g ? b.stroke() : (p = b.globalAlpha, b.globalAlpha = 0.15, b.strokeStyle = "black", b.stroke(), b.globalAlpha = p)), b.beginPath()) : "cross" === d && (b.strokeStyle = f, b.lineWidth = e / 4, b.beginPath(), b.moveTo(a - e / 2, c - e / 2), b.lineTo(a + e / 2, c + e / 2), b.stroke(), b.moveTo(a + e / 2, c - e / 2), b.lineTo(a - e / 2, c + e / 2), b.stroke())
                }
            },
            drawMarkers: function(a) {
                for (var c = 0; c < a.length; c++) {
                    var b = a[c];
                    O.drawMarker(b.x, b.y, b.ctx, b.type,
                        b.size, b.color, b.borderColor, b.borderThickness)
                }
            }
        },
        Ha = {
            Chart: function(a, c) {
                var b = new z(a, c, this);
                this.render = function() {
                    b.render(this.options)
                };
                this.options = b._options
            },
            addColorSet: function(a, c) {
                ba[a] = c
            },
            addCultureInfo: function(a, c) {
                ia[a] = c
            },
            formatNumber: function(a, c, b) {
                b = b || "en";
                if (ia[b]) return Y(a, c || "#,##0.##", new ha(b));
                throw "Unknown Culture Name";
            },
            formatDate: function(a, c, b) {
                b = b || "en";
                if (ia[b]) return wa(a, c || "DD MMM YYYY", new ha(b));
                throw "Unknown Culture Name";
            }
        };
    Ha.Chart.version = "v1.9.0 Beta 1";
    window.CanvasJS = Ha
})();
/*
  excanvas is used to support IE678 which do not implement HTML5 Canvas Element. You can safely remove the following excanvas code if you don't need to support older browsers.

  Copyright 2006 Google Inc. https://code.google.com/p/explorercanvas/
  Licensed under the Apache License, Version 2.0
*/
document.createElement("canvas").getContext || function() {
    function V() {
        return this.context_ || (this.context_ = new C(this))
    }

    function W(a, b, c) {
        var g = M.call(arguments, 2);
        return function() {
            return a.apply(b, g.concat(M.call(arguments)))
        }
    }

    function N(a) {
        return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
    }

    function O(a) {
        a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
        a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
        a.styleSheets.ex_canvas_ || (a = a.createStyleSheet(), a.owningElement.id = "ex_canvas_", a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}")
    }

    function X(a) {
        var b = a.srcElement;
        switch (a.propertyName) {
            case "width":
                b.getContext().clearRect();
                b.style.width = b.attributes.width.nodeValue + "px";
                b.firstChild.style.width = b.clientWidth + "px";
                break;
            case "height":
                b.getContext().clearRect(), b.style.height = b.attributes.height.nodeValue + "px", b.firstChild.style.height = b.clientHeight +
                    "px"
        }
    }

    function Y(a) {
        a = a.srcElement;
        a.firstChild && (a.firstChild.style.width = a.clientWidth + "px", a.firstChild.style.height = a.clientHeight + "px")
    }

    function D() {
        return [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ]
    }

    function t(a, b) {
        for (var c = D(), g = 0; 3 > g; g++)
            for (var e = 0; 3 > e; e++) {
                for (var f = 0, d = 0; 3 > d; d++) f += a[g][d] * b[d][e];
                c[g][e] = f
            }
        return c
    }

    function P(a, b) {
        b.fillStyle = a.fillStyle;
        b.lineCap = a.lineCap;
        b.lineJoin = a.lineJoin;
        b.lineWidth = a.lineWidth;
        b.miterLimit = a.miterLimit;
        b.shadowBlur = a.shadowBlur;
        b.shadowColor = a.shadowColor;
        b.shadowOffsetX =
            a.shadowOffsetX;
        b.shadowOffsetY = a.shadowOffsetY;
        b.strokeStyle = a.strokeStyle;
        b.globalAlpha = a.globalAlpha;
        b.font = a.font;
        b.textAlign = a.textAlign;
        b.textBaseline = a.textBaseline;
        b.arcScaleX_ = a.arcScaleX_;
        b.arcScaleY_ = a.arcScaleY_;
        b.lineScale_ = a.lineScale_
    }

    function Q(a) {
        var b = a.indexOf("(", 3),
            c = a.indexOf(")", b + 1),
            b = a.substring(b + 1, c).split(",");
        if (4 != b.length || "a" != a.charAt(3)) b[3] = 1;
        return b
    }

    function E(a, b, c) {
        return Math.min(c, Math.max(b, a))
    }

    function F(a, b, c) {
        0 > c && c++;
        1 < c && c--;
        return 1 > 6 * c ? a + 6 * (b - a) * c :
            1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
    }

    function G(a) {
        if (a in H) return H[a];
        var b, c = 1;
        a = String(a);
        if ("#" == a.charAt(0)) b = a;
        else if (/^rgb/.test(a)) {
            c = Q(a);
            b = "#";
            for (var g, e = 0; 3 > e; e++) g = -1 != c[e].indexOf("%") ? Math.floor(255 * (parseFloat(c[e]) / 100)) : +c[e], b += v[E(g, 0, 255)];
            c = +c[3]
        } else if (/^hsl/.test(a)) {
            e = c = Q(a);
            b = parseFloat(e[0]) / 360 % 360;
            0 > b && b++;
            g = E(parseFloat(e[1]) / 100, 0, 1);
            e = E(parseFloat(e[2]) / 100, 0, 1);
            if (0 == g) g = e = b = e;
            else {
                var f = 0.5 > e ? e * (1 + g) : e + g - e * g,
                    d = 2 * e - f;
                g = F(d, f, b + 1 / 3);
                e = F(d, f, b);
                b = F(d, f, b - 1 / 3)
            }
            b = "#" +
                v[Math.floor(255 * g)] + v[Math.floor(255 * e)] + v[Math.floor(255 * b)];
            c = c[3]
        } else b = Z[a] || a;
        return H[a] = {
            color: b,
            alpha: c
        }
    }

    function C(a) {
        this.m_ = D();
        this.mStack_ = [];
        this.aStack_ = [];
        this.currentPath_ = [];
        this.fillStyle = this.strokeStyle = "#000";
        this.lineWidth = 1;
        this.lineJoin = "miter";
        this.lineCap = "butt";
        this.miterLimit = 1 * q;
        this.globalAlpha = 1;
        this.font = "10px sans-serif";
        this.textAlign = "left";
        this.textBaseline = "alphabetic";
        this.canvas = a;
        var b = "width:" + a.clientWidth + "px;height:" + a.clientHeight + "px;overflow:hidden;position:absolute",
            c = a.ownerDocument.createElement("div");
        c.style.cssText = b;
        a.appendChild(c);
        b = c.cloneNode(!1);
        b.style.backgroundColor = "red";
        b.style.filter = "alpha(opacity=0)";
        a.appendChild(b);
        this.element_ = c;
        this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1
    }

    function R(a, b, c, g) {
        a.currentPath_.push({
            type: "bezierCurveTo",
            cp1x: b.x,
            cp1y: b.y,
            cp2x: c.x,
            cp2y: c.y,
            x: g.x,
            y: g.y
        });
        a.currentX_ = g.x;
        a.currentY_ = g.y
    }

    function S(a, b) {
        var c = G(a.strokeStyle),
            g = c.color,
            c = c.alpha * a.globalAlpha,
            e = a.lineScale_ * a.lineWidth;
        1 > e && (c *= e);
        b.push("<g_vml_:stroke",
            ' opacity="', c, '"', ' joinstyle="', a.lineJoin, '"', ' miterlimit="', a.miterLimit, '"', ' endcap="', $[a.lineCap] || "square", '"', ' weight="', e, 'px"', ' color="', g, '" />')
    }

    function T(a, b, c, g) {
        var e = a.fillStyle,
            f = a.arcScaleX_,
            d = a.arcScaleY_,
            k = g.x - c.x,
            n = g.y - c.y;
        if (e instanceof w) {
            var h = 0,
                l = g = 0,
                u = 0,
                m = 1;
            if ("gradient" == e.type_) {
                h = e.x1_ / f;
                c = e.y1_ / d;
                var p = s(a, e.x0_ / f, e.y0_ / d),
                    h = s(a, h, c),
                    h = 180 * Math.atan2(h.x - p.x, h.y - p.y) / Math.PI;
                0 > h && (h += 360);
                1E-6 > h && (h = 0)
            } else p = s(a, e.x0_, e.y0_), g = (p.x - c.x) / k, l = (p.y - c.y) / n, k /= f * q,
                n /= d * q, m = x.max(k, n), u = 2 * e.r0_ / m, m = 2 * e.r1_ / m - u;
            f = e.colors_;
            f.sort(function(a, b) {
                return a.offset - b.offset
            });
            d = f.length;
            p = f[0].color;
            c = f[d - 1].color;
            k = f[0].alpha * a.globalAlpha;
            a = f[d - 1].alpha * a.globalAlpha;
            for (var n = [], r = 0; r < d; r++) {
                var t = f[r];
                n.push(t.offset * m + u + " " + t.color)
            }
            b.push('<g_vml_:fill type="', e.type_, '"', ' method="none" focus="100%"', ' color="', p, '"', ' color2="', c, '"', ' colors="', n.join(","), '"', ' opacity="', a, '"', ' g_o_:opacity2="', k, '"', ' angle="', h, '"', ' focusposition="', g, ",", l, '" />')
        } else e instanceof
        I ? k && n && b.push("<g_vml_:fill", ' position="', -c.x / k * f * f, ",", -c.y / n * d * d, '"', ' type="tile"', ' src="', e.src_, '" />') : (e = G(a.fillStyle), b.push('<g_vml_:fill color="', e.color, '" opacity="', e.alpha * a.globalAlpha, '" />'))
    }

    function s(a, b, c) {
        a = a.m_;
        return {
            x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r,
            y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r
        }
    }

    function z(a, b, c) {
        isFinite(b[0][0]) && (isFinite(b[0][1]) && isFinite(b[1][0]) && isFinite(b[1][1]) && isFinite(b[2][0]) && isFinite(b[2][1])) && (a.m_ = b, c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] *
            b[1][0]))))
    }

    function w(a) {
        this.type_ = a;
        this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
        this.colors_ = []
    }

    function I(a, b) {
        if (!a || 1 != a.nodeType || "IMG" != a.tagName) throw new A("TYPE_MISMATCH_ERR");
        if ("complete" != a.readyState) throw new A("INVALID_STATE_ERR");
        switch (b) {
            case "repeat":
            case null:
            case "":
                this.repetition_ = "repeat";
                break;
            case "repeat-x":
            case "repeat-y":
            case "no-repeat":
                this.repetition_ = b;
                break;
            default:
                throw new A("SYNTAX_ERR");
        }
        this.src_ = a.src;
        this.width_ = a.width;
        this.height_ = a.height
    }

    function A(a) {
        this.code = this[a];
        this.message = a + ": DOM Exception " + this.code
    }
    var x = Math,
        k = x.round,
        J = x.sin,
        K = x.cos,
        ba = x.abs,
        aa = x.sqrt,
        q = 10,
        r = q / 2;
    navigator.userAgent.match(/MSIE ([\d.]+)?/);
    var M = Array.prototype.slice;
    O(document);
    var U = {
        init: function(a) {
            a = a || document;
            a.createElement("canvas");
            a.attachEvent("onreadystatechange", W(this.init_, this, a))
        },
        init_: function(a) {
            a = a.getElementsByTagName("canvas");
            for (var b = 0; b < a.length; b++) this.initElement(a[b])
        },
        initElement: function(a) {
            if (!a.getContext) {
                a.getContext =
                    V;
                O(a.ownerDocument);
                a.innerHTML = "";
                a.attachEvent("onpropertychange", X);
                a.attachEvent("onresize", Y);
                var b = a.attributes;
                b.width && b.width.specified ? a.style.width = b.width.nodeValue + "px" : a.width = a.clientWidth;
                b.height && b.height.specified ? a.style.height = b.height.nodeValue + "px" : a.height = a.clientHeight
            }
            return a
        }
    };
    U.init();
    for (var v = [], d = 0; 16 > d; d++)
        for (var B = 0; 16 > B; B++) v[16 * d + B] = d.toString(16) + B.toString(16);
    var Z = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            grey: "#808080",
            greenyellow: "#ADFF2F",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            oldlace: "#FDF5E6",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            whitesmoke: "#F5F5F5",
            yellowgreen: "#9ACD32"
        },
        H = {},
        L = {},
        $ = {
            butt: "flat",
            round: "round"
        },
        d = C.prototype;
    d.clearRect = function() {
        this.textMeasureEl_ && (this.textMeasureEl_.removeNode(!0), this.textMeasureEl_ = null);
        this.element_.innerHTML = ""
    };
    d.beginPath = function() {
        this.currentPath_ = []
    };
    d.moveTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({
            type: "moveTo",
            x: c.x,
            y: c.y
        });
        this.currentX_ = c.x;
        this.currentY_ = c.y
    };
    d.lineTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({
            type: "lineTo",
            x: c.x,
            y: c.y
        });
        this.currentX_ = c.x;
        this.currentY_ = c.y
    };
    d.bezierCurveTo =
        function(a, b, c, g, e, f) {
            e = s(this, e, f);
            a = s(this, a, b);
            c = s(this, c, g);
            R(this, a, c, e)
        };
    d.quadraticCurveTo = function(a, b, c, g) {
        a = s(this, a, b);
        c = s(this, c, g);
        g = {
            x: this.currentX_ + 2 / 3 * (a.x - this.currentX_),
            y: this.currentY_ + 2 / 3 * (a.y - this.currentY_)
        };
        R(this, g, {
            x: g.x + (c.x - this.currentX_) / 3,
            y: g.y + (c.y - this.currentY_) / 3
        }, c)
    };
    d.arc = function(a, b, c, g, e, f) {
        c *= q;
        var d = f ? "at" : "wa",
            k = a + K(g) * c - r,
            n = b + J(g) * c - r;
        g = a + K(e) * c - r;
        e = b + J(e) * c - r;
        k != g || f || (k += 0.125);
        a = s(this, a, b);
        k = s(this, k, n);
        g = s(this, g, e);
        this.currentPath_.push({
            type: d,
            x: a.x,
            y: a.y,
            radius: c,
            xStart: k.x,
            yStart: k.y,
            xEnd: g.x,
            yEnd: g.y
        })
    };
    d.rect = function(a, b, c, g) {
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath()
    };
    d.strokeRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.stroke();
        this.currentPath_ = e
    };
    d.fillRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a +
            c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.fill();
        this.currentPath_ = e
    };
    d.createLinearGradient = function(a, b, c, g) {
        var e = new w("gradient");
        e.x0_ = a;
        e.y0_ = b;
        e.x1_ = c;
        e.y1_ = g;
        return e
    };
    d.createRadialGradient = function(a, b, c, g, e, f) {
        var d = new w("gradientradial");
        d.x0_ = a;
        d.y0_ = b;
        d.r0_ = c;
        d.x1_ = g;
        d.y1_ = e;
        d.r1_ = f;
        return d
    };
    d.drawImage = function(a, b) {
        var c, g, e, d, r, y, n, h;
        e = a.runtimeStyle.width;
        d = a.runtimeStyle.height;
        a.runtimeStyle.width = "auto";
        a.runtimeStyle.height = "auto";
        var l = a.width,
            u = a.height;
        a.runtimeStyle.width =
            e;
        a.runtimeStyle.height = d;
        if (3 == arguments.length) c = arguments[1], g = arguments[2], r = y = 0, n = e = l, h = d = u;
        else if (5 == arguments.length) c = arguments[1], g = arguments[2], e = arguments[3], d = arguments[4], r = y = 0, n = l, h = u;
        else if (9 == arguments.length) r = arguments[1], y = arguments[2], n = arguments[3], h = arguments[4], c = arguments[5], g = arguments[6], e = arguments[7], d = arguments[8];
        else throw Error("Invalid number of arguments");
        var m = s(this, c, g),
            p = [];
        p.push(" <g_vml_:group", ' coordsize="', 10 * q, ",", 10 * q, '"', ' coordorigin="0,0"', ' style="width:',
            10, "px;height:", 10, "px;position:absolute;");
        if (1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) {
            var t = [];
            t.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", k(m.x / q), ",", "Dy=", k(m.y / q), "");
            var v = s(this, c + e, g),
                w = s(this, c, g + d);
            c = s(this, c + e, g + d);
            m.x = x.max(m.x, v.x, w.x, c.x);
            m.y = x.max(m.y, v.y, w.y, c.y);
            p.push("padding:0 ", k(m.x / q), "px ", k(m.y / q), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", t.join(""), ", sizingmethod='clip');")
        } else p.push("top:",
            k(m.y / q), "px;left:", k(m.x / q), "px;");
        p.push(' ">', '<g_vml_:image src="', a.src, '"', ' style="width:', q * e, "px;", " height:", q * d, 'px"', ' cropleft="', r / l, '"', ' croptop="', y / u, '"', ' cropright="', (l - r - n) / l, '"', ' cropbottom="', (u - y - h) / u, '"', " />", "</g_vml_:group>");
        this.element_.insertAdjacentHTML("BeforeEnd", p.join(""))
    };
    d.stroke = function(a) {
        var b = [];
        b.push("<g_vml_:shape", ' filled="', !!a, '"', ' style="position:absolute;width:', 10, "px;height:", 10, 'px;"', ' coordorigin="0,0"', ' coordsize="', 10 * q, ",", 10 * q, '"',
            ' stroked="', !a, '"', ' path="');
        for (var c = {
                x: null,
                y: null
            }, d = {
                x: null,
                y: null
            }, e = 0; e < this.currentPath_.length; e++) {
            var f = this.currentPath_[e];
            switch (f.type) {
                case "moveTo":
                    b.push(" m ", k(f.x), ",", k(f.y));
                    break;
                case "lineTo":
                    b.push(" l ", k(f.x), ",", k(f.y));
                    break;
                case "close":
                    b.push(" x ");
                    f = null;
                    break;
                case "bezierCurveTo":
                    b.push(" c ", k(f.cp1x), ",", k(f.cp1y), ",", k(f.cp2x), ",", k(f.cp2y), ",", k(f.x), ",", k(f.y));
                    break;
                case "at":
                case "wa":
                    b.push(" ", f.type, " ", k(f.x - this.arcScaleX_ * f.radius), ",", k(f.y - this.arcScaleY_ *
                        f.radius), " ", k(f.x + this.arcScaleX_ * f.radius), ",", k(f.y + this.arcScaleY_ * f.radius), " ", k(f.xStart), ",", k(f.yStart), " ", k(f.xEnd), ",", k(f.yEnd))
            }
            if (f) {
                if (null == c.x || f.x < c.x) c.x = f.x;
                if (null == d.x || f.x > d.x) d.x = f.x;
                if (null == c.y || f.y < c.y) c.y = f.y;
                if (null == d.y || f.y > d.y) d.y = f.y
            }
        }
        b.push(' ">');
        a ? T(this, b, c, d) : S(this, b);
        b.push("</g_vml_:shape>");
        this.element_.insertAdjacentHTML("beforeEnd", b.join(""))
    };
    d.fill = function() {
        this.stroke(!0)
    };
    d.closePath = function() {
        this.currentPath_.push({
            type: "close"
        })
    };
    d.save = function() {
        var a = {};
        P(this, a);
        this.aStack_.push(a);
        this.mStack_.push(this.m_);
        this.m_ = t(D(), this.m_)
    };
    d.restore = function() {
        this.aStack_.length && (P(this.aStack_.pop(), this), this.m_ = this.mStack_.pop())
    };
    d.translate = function(a, b) {
        z(this, t([
            [1, 0, 0],
            [0, 1, 0],
            [a, b, 1]
        ], this.m_), !1)
    };
    d.rotate = function(a) {
        var b = K(a);
        a = J(a);
        z(this, t([
            [b, a, 0],
            [-a, b, 0],
            [0, 0, 1]
        ], this.m_), !1)
    };
    d.scale = function(a, b) {
        this.arcScaleX_ *= a;
        this.arcScaleY_ *= b;
        z(this, t([
            [a, 0, 0],
            [0, b, 0],
            [0, 0, 1]
        ], this.m_), !0)
    };
    d.transform = function(a, b, c, d, e, f) {
        z(this, t([
            [a,
                b, 0
            ],
            [c, d, 0],
            [e, f, 1]
        ], this.m_), !0)
    };
    d.setTransform = function(a, b, c, d, e, f) {
        z(this, [
            [a, b, 0],
            [c, d, 0],
            [e, f, 1]
        ], !0)
    };
    d.drawText_ = function(a, b, c, d, e) {
        var f = this.m_;
        d = 0;
        var r = 1E3,
            t = 0,
            n = [],
            h;
        h = this.font;
        if (L[h]) h = L[h];
        else {
            var l = document.createElement("div").style;
            try {
                l.font = h
            } catch (u) {}
            h = L[h] = {
                style: l.fontStyle || "normal",
                variant: l.fontVariant || "normal",
                weight: l.fontWeight || "normal",
                size: l.fontSize || 10,
                family: l.fontFamily || "sans-serif"
            }
        }
        var l = h,
            m = this.element_;
        h = {};
        for (var p in l) h[p] = l[p];
        p = parseFloat(m.currentStyle.fontSize);
        m = parseFloat(l.size);
        "number" == typeof l.size ? h.size = l.size : -1 != l.size.indexOf("px") ? h.size = m : -1 != l.size.indexOf("em") ? h.size = p * m : -1 != l.size.indexOf("%") ? h.size = p / 100 * m : -1 != l.size.indexOf("pt") ? h.size = m / 0.75 : h.size = p;
        h.size *= 0.981;
        p = h.style + " " + h.variant + " " + h.weight + " " + h.size + "px " + h.family;
        m = this.element_.currentStyle;
        l = this.textAlign.toLowerCase();
        switch (l) {
            case "left":
            case "center":
            case "right":
                break;
            case "end":
                l = "ltr" == m.direction ? "right" : "left";
                break;
            case "start":
                l = "rtl" == m.direction ? "right" :
                    "left";
                break;
            default:
                l = "left"
        }
        switch (this.textBaseline) {
            case "hanging":
            case "top":
                t = h.size / 1.75;
                break;
            case "middle":
                break;
            default:
            case null:
            case "alphabetic":
            case "ideographic":
            case "bottom":
                t = -h.size / 2.25
        }
        switch (l) {
            case "right":
                d = 1E3;
                r = 0.05;
                break;
            case "center":
                d = r = 500
        }
        b = s(this, b + 0, c + t);
        n.push('<g_vml_:line from="', -d, ' 0" to="', r, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !e, '" stroked="', !!e, '" style="position:absolute;width:1px;height:1px;">');
        e ? S(this, n) : T(this, n, {
            x: -d,
            y: 0
        }, {
            x: r,
            y: h.size
        });
        e = f[0][0].toFixed(3) + "," + f[1][0].toFixed(3) + "," + f[0][1].toFixed(3) + "," + f[1][1].toFixed(3) + ",0,0";
        b = k(b.x / q) + "," + k(b.y / q);
        n.push('<g_vml_:skew on="t" matrix="', e, '" ', ' offset="', b, '" origin="', d, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', N(a), '" style="v-text-align:', l, ";font:", N(p), '" /></g_vml_:line>');
        this.element_.insertAdjacentHTML("beforeEnd", n.join(""))
    };
    d.fillText = function(a, b, c, d) {
        this.drawText_(a, b, c, d, !1)
    };
    d.strokeText = function(a,
        b, c, d) {
        this.drawText_(a, b, c, d, !0)
    };
    d.measureText = function(a) {
        this.textMeasureEl_ || (this.element_.insertAdjacentHTML("beforeEnd", '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'), this.textMeasureEl_ = this.element_.lastChild);
        var b = this.element_.ownerDocument;
        this.textMeasureEl_.innerHTML = "";
        this.textMeasureEl_.style.font = this.font;
        this.textMeasureEl_.appendChild(b.createTextNode(a));
        return {
            width: this.textMeasureEl_.offsetWidth
        }
    };
    d.clip = function() {};
    d.arcTo = function() {};
    d.createPattern = function(a, b) {
        return new I(a, b)
    };
    w.prototype.addColorStop = function(a, b) {
        b = G(b);
        this.colors_.push({
            offset: a,
            color: b.color,
            alpha: b.alpha
        })
    };
    d = A.prototype = Error();
    d.INDEX_SIZE_ERR = 1;
    d.DOMSTRING_SIZE_ERR = 2;
    d.HIERARCHY_REQUEST_ERR = 3;
    d.WRONG_DOCUMENT_ERR = 4;
    d.INVALID_CHARACTER_ERR = 5;
    d.NO_DATA_ALLOWED_ERR = 6;
    d.NO_MODIFICATION_ALLOWED_ERR = 7;
    d.NOT_FOUND_ERR = 8;
    d.NOT_SUPPORTED_ERR = 9;
    d.INUSE_ATTRIBUTE_ERR = 10;
    d.INVALID_STATE_ERR = 11;
    d.SYNTAX_ERR = 12;
    d.INVALID_MODIFICATION_ERR =
        13;
    d.NAMESPACE_ERR = 14;
    d.INVALID_ACCESS_ERR = 15;
    d.VALIDATION_ERR = 16;
    d.TYPE_MISMATCH_ERR = 17;
    G_vmlCanvasManager = U;
    CanvasRenderingContext2D = C;
    CanvasGradient = w;
    CanvasPattern = I;
    DOMException = A
}();