(() = > {function e(e, t)
{
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function t(t) {
    for (var n = 1; n < arguments.length; n++) {
        var i = null != arguments[n] ? arguments[n] : {};
        n % 2 ? e(Object(i), !0).forEach((function (e) {
            r(t, e, i[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : e(Object(i)).forEach((function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
        }))
    }
    return t
}

function r(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

jQuery(document).ready((function () {
    window.fluentFormrecaptchaSuccessCallback = function (e) {
        if (window.innerWidth < 768 && /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
            var t = jQuery(".g-recaptcha").filter((function (t, r) {
                return grecaptcha.getResponse(t) == e
            }));
            t.length && jQuery("html, body").animate({scrollTop: t.first().offset().top - jQuery(window).height() / 2}, 0)
        }
    }, window.ffValidationError = function () {
        var e = function () {
        };
        return (e.prototype = Object.create(Error.prototype)).constructor = e, e
    }(), window.ff_helper = {
        numericVal: function (e) {
            if (e.hasClass("ff_numeric")) {
                var t = JSON.parse(e.attr("data-formatter"));
                return currency(e.val(), t).value
            }
            return e.val() || 0
        }, formatCurrency: function (e, t) {
            if (e.hasClass("ff_numeric")) {
                var r = JSON.parse(e.attr("data-formatter"));
                return currency(t, r).format()
            }
            return t
        }
    }, function (e, r) {
        e || (e = {}), e.stepAnimationDuration = parseInt(e.stepAnimationDuration);
        var n = {};
        window.fluentFormApp = function (t) {
            var i = t.attr("data-form_instance"), o = window["fluent_form_" + i];
            if (!o) return console.log("No Fluent form JS vars found!"), !1;
            if (n[i]) return n[i];
            var s, f, c, l, u, d, m, p, h, v, g, _, w, y, b, k, C, x, j, S, O, T, F, A, N = o.form_id_selector,
                I = "." + i;
            return s = a, f = {}, c = function () {
                return r("body").find("form" + I)
            }, u = function (e, r) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "next";
                t.trigger("update_slider", {goBackToStep: e, animDuration: r, isScrollTop: n, actionType: i})
            }, d = function (e) {
                try {
                    var t = e.find(":input").filter((function (e, t) {
                        return !r(t).closest(".has-conditions").hasClass("ff_excluded")
                    }));
                    C(t);
                    var n = {data: t.serialize(), action: "fluentform_submit", form_id: e.data("form_id")};
                    if (r.each(e.find("[type=file]"), (function (e, t) {
                        var i = {}, a = t.name + "[]";
                        i[a] = [], r(t).closest("div").find(".ff-uploaded-list").find(".ff-upload-preview[data-src]").each((function (e, t) {
                            i[a][e] = r(this).data("src")
                        })), r.each(i, (function (e, t) {
                            if (t.length) {
                                var i = {};
                                i[e] = t, n.data += "&" + r.param(i)
                            }
                        }))
                    })), e.find(".ff_uploading").length) {
                        var i = r("<div/>", {class: "error text-danger"}), a = r("<span/>", {
                            class: "error-clear", html: "&times;", click: function (e) {
                                return r(I + "_errors").html("")
                            }
                        }), o = r("<span/>", {class: "error-text", text: "File upload in progress. Please wait..."});
                        return r(I + "_errors").html(i.append(o, a)).show()
                    }
                    if (e.find(".ff-el-recaptcha.g-recaptcha").length) {
                        var s = g(n.form_id);
                        s && (n.data += "&" + r.param({"g-recaptcha-response": grecaptcha.getResponse(s)}))
                    }
                    if (e.find(".ff-el-hcaptcha.h-captcha").length) {
                        var c = _(n.form_id);
                        c && (n.data += "&" + r.param({"h-captcha-response": hcaptcha.getResponse(c)}))
                    }
                    if (e.find(".ff-el-turnstile.cf-turnstile").length) {
                        var l = w(n.form_id);
                        l && (n.data += "&" + r.param({"cf-turnstile-response": l.getResponse(l)}))
                    }
                    r(I + "_success").remove(), r(I + "_errors").html(""), e.find(".error").html(""), e.parent().find(".ff-errors-in-stack").hide(), function (e, t) {
                        var r = [], n = f;
                        return e.hasClass("ff_has_v3_recptcha") && (n.ff_v3_recptcha = function (e, t) {
                            var r = jQuery.Deferred(), n = e.data("recptcha_key");
                            return grecaptcha.execute(n, {action: "submit"}).then((function (e) {
                                t.data += "&" + jQuery.param({"g-recaptcha-response": e}), r.resolve()
                            })), r.promise()
                        }), jQuery.each(n, (function (n, i) {
                            r.push(i(e, t))
                        })), jQuery.when.apply(jQuery, r)
                    }(e, n).then((function () {
                        p(e), m(e, n)
                    }))
                } catch (e) {
                    if (!(e instanceof ffValidationError)) throw e;
                    x(e.messages), b(350)
                }
            }, m = function (t, n) {
                var i, a, s = (i = "t=" + Date.now(), a = e.ajaxUrl, a += (a.split("?")[1] ? "&" : "?") + i);
                if (!this.isSending) {
                    var f = this;
                    this.isSending = !0, r.post(s, n).then((function (n) {
                        if (!n || !n.data || !n.data.result) return t.trigger("fluentform_submission_failed", {
                            form: t,
                            response: n
                        }), void x(n);
                        if (n.data.append_data && F(n.data.append_data), n.data.nextAction) t.trigger("fluentform_next_action_" + n.data.nextAction, {
                            form: t,
                            response: n
                        }); else {
                            if (t.triggerHandler("fluentform_submission_success", {
                                form: t,
                                config: o,
                                response: n
                            }), jQuery(document.body).trigger("fluentform_submission_success", {
                                form: t,
                                config: o,
                                response: n
                            }), "redirectUrl" in n.data.result) return n.data.result.message && (r("<div/>", {
                                id: N + "_success",
                                class: "ff-message-success"
                            }).html(n.data.result.message).insertAfter(t), t.find(".ff-el-is-error").removeClass("ff-el-is-error")), void (location.href = n.data.result.redirectUrl);
                            var i = N + "_success", a = "#" + i;
                            r(a).length && r(a).slideUp("fast"), r("<div/>", {
                                id: i,
                                class: "ff-message-success"
                            }).html(n.data.result.message).insertAfter(t), t.find(".ff-el-is-error").removeClass("ff-el-is-error"), "hide_form" == n.data.result.action ? (t.hide().addClass("ff_force_hide"), t[0].reset()) : (jQuery(document.body).trigger("fluentform_reset", [t, o]), t[0].reset());
                            var s = r(a);
                            s.length && !k(s[0]) && r("html, body").animate({scrollTop: s.offset().top - (r("#wpadminbar") ? 32 : 0) - 20}, e.stepAnimationDuration)
                        }
                    })).fail((function (r) {
                        if (t.trigger("fluentform_submission_failed", {
                            form: t,
                            response: r
                        }), r && r.responseJSON && r.responseJSON && r.responseJSON.errors) {
                            if (r.responseJSON.append_data && F(r.responseJSON.append_data), x(r.responseJSON.errors), b(350), t.find(".fluentform-step").length) {
                                var n = t.find(".error").not(":empty:first").closest(".fluentform-step");
                                if (n.length) {
                                    var i = n.index();
                                    u(i, e.stepAnimationDuration, !1)
                                }
                            }
                        } else x(r.responseText)
                    })).always((function (e) {
                        if (f.isSending = !1, h(t), window.grecaptcha) {
                            var r = g(n.form_id);
                            r && grecaptcha.reset(r)
                        }
                        if (window.hcaptcha && hcaptcha.reset(), window.turnstile) {
                            var i = w(n.form_id);
                            i && i.reset(i)
                        }
                    }))
                }
            }, v = function () {
                "yes" != t.attr("data-ff_reinit") && (r(document).on("submit", I, (function (e) {
                    e.preventDefault(), window.ff_sumitting_form || (window.ff_sumitting_form = !0, setTimeout((function () {
                        window.ff_sumitting_form = !1
                    }), 1500), d(r(this)))
                })), r(document).on("reset", I, (function (n) {
                    !function (n) {
                        r(".ff-step-body", t).length && u(0, e.stepAnimationDuration, !1), n.find(".ff-el-repeat .ff-t-cell").each((function () {
                            r(this).find("input").not(":first").remove()
                        })), n.find(".ff-el-repeat .ff-el-repeat-buttons-list").find(".ff-el-repeat-buttons").not(":first").remove();
                        var i = n.find("input[type=checkbox],input[type=radio]");
                        i.length && i.each((function (e, t) {
                            (t = r(t)).prop("defaultChecked") ? t.closest(".ff-el-form-check").addClass("ff_item_selected") : t.closest(".ff-el-form-check.ff_item_selected").removeClass("ff_item_selected")
                        })), n.find("input[type=file]").closest("div").find(".ff-uploaded-list").html("").end().closest("div").find(".ff-upload-progress").addClass("ff-hidden").find(".ff-el-progress-bar").css("width", "0%");
                        var a = n.find('input[type="range"]');
                        a.length && a.each((function (e, t) {
                            (t = r(t)).val(t.data("calc_value")).change()
                        })), r.each(o.conditionals, (function (e, t) {
                            r.each(t.conditions, (function (e, t) {
                                y(T(t.field))
                            }))
                        }))
                    }(r(this))
                })))
            }, g = function (e) {
                var t;
                return r("form").has(".g-recaptcha").each((function (n, i) {
                    r(this).attr("data-form_id") == e && (t = n)
                })), t
            }, _ = function (e) {
                var t;
                return r("form").has(".h-captcha").each((function (n, i) {
                    r(this).attr("data-form_id") == e && (t = n)
                })), t
            }, w = function (e) {
                var t;
                return r("form").has(".cf-turnstile").each((function (n, i) {
                    r(this).attr("data-form_id") == e && (t = n)
                })), t
            }, y = function (e) {
                var t = e.prop("type");
                null != t && ("checkbox" == t || "radio" == t ? e.each((function (e, t) {
                    var n = r(this);
                    n.prop("checked", n.prop("defaultChecked"))
                })) : t.startsWith("select") ? e.find("option").each((function (e, t) {
                    var n = r(this);
                    n.prop("selected", n.prop("defaultSelected"))
                })) : e.val(e.prop("defaultValue")), e.trigger("change"))
            }, b = function (e) {
                var n = o.settings.layout.errorMessagePlacement;
                if (n && "stackToBottom" != n) {
                    var i = t.find(".ff-el-is-error").first();
                    i.length && !k(i[0]) && r("html, body").delay(e).animate({scrollTop: i.offset().top - (r("#wpadminbar") ? 32 : 0) - 20}, e)
                }
            }, k = function (e) {
                if (!e) return !0;
                var t = e.getBoundingClientRect();
                return t.top >= 0 && t.left >= 0 && t.bottom <= r(window).height() && t.right <= r(window).width()
            }, x = function (e) {
                if (t.parent().find(".ff-errors-in-stack").empty(), e) if ("string" != typeof e) {
                    var n = o.settings.layout.errorMessagePlacement;
                    if (!n || "stackToBottom" == n) return j(e), !1;
                    t.find(".error").empty(), t.find(".ff-el-group").removeClass("ff-el-is-error"), r.each(e, (function (e, t) {
                        "string" == typeof t && (t = [t]), r.each(t, (function (t, r) {
                            S(e, r)
                        }))
                    }))
                } else j({error: [e]})
            }, j = function (e) {
                var t = c().parent().find(".ff-errors-in-stack");
                e && (r.isEmptyObject(e) || (r.each(e, (function (e, n) {
                    "string" == typeof n && (n = [n]), r.each(n, (function (n, i) {
                        var a = r("<div/>", {class: "error text-danger"}),
                            o = r("<span/>", {class: "error-clear", html: "&times;"}),
                            s = r("<span/>", {class: "error-text", "data-name": T(e).attr("name"), html: i});
                        a.attr("role", "alert"), a.append(s, o), t.append(a).show()
                    }));
                    var i = T(e);
                    if (i) {
                        var a = i.attr("name");
                        i.attr("aria-invalid", "true");
                        var o = r("[name='" + a + "']").first();
                        o && o.closest(".ff-el-group").addClass("ff-el-is-error")
                    }
                })), k(t[0]) || r("html, body").animate({scrollTop: t.offset().top - 100}, 350), t.on("click", ".error-clear", (function () {
                    r(this).closest("div").remove(), t.hide()
                })).on("click", ".error-text", (function () {
                    var e = r("[name='".concat(r(this).data("name"), "']")).first();
                    r("html, body").animate({scrollTop: e.offset() && e.offset().top - 100}, 350, (function (t) {
                        return e.focus()
                    }))
                }))))
            }, S = function (e, t) {
                var n, i;
                (n = T(e)).length ? (n.attr("aria-invalid", "true"), (i = r("<div/>", {class: "error text-danger"})).attr("role", "alert"), n.closest(".ff-el-group").addClass("ff-el-is-error"), n.closest(".ff-el-input--content").find("div.error").remove(), n.closest(".ff-el-input--content").append(i.text(t))) : j([t])
            }, O = function () {
                t.find(".ff-el-group,.ff_repeater_table").on("change", "input,select,textarea", (function () {
                    if (!window.ff_disable_error_clear) {
                        r(this).attr("aria-invalid", "false");
                        var e = o.settings.layout.errorMessagePlacement;
                        if (e || "stackToBottom" != e) {
                            var t = r(this).closest(".ff-el-group");
                            t.hasClass("ff-el-is-error") && t.removeClass("ff-el-is-error").find(".error.text-danger").remove()
                        }
                    }
                }))
            }, T = function (e) {
                var t = c(), n = r("[data-name='" + e + "']", t);
                return (n = n.length ? n : r("[name='" + e + "']", t)).length ? n : r("[name='" + e + "[]']", t)
            }, F = function (e) {
                jQuery.each(e, (function (e, n) {
                    if (n) {
                        var i = t.find("input[name=" + e + "]");
                        i.length ? i.attr("value", n) : r("<input>").attr({
                            type: "hidden",
                            name: e,
                            value: n
                        }).appendTo(t)
                    }
                }))
            }, A = {
                initFormHandlers: function () {
                    v(), l(), O(), t.removeClass("ff-form-loading").addClass("ff-form-loaded"), t.on("show_element_error", (function (e, t) {
                        S(t.element, t.message)
                    }))
                },
                registerFormSubmissionHandler: v,
                maybeInlineForm: l = function () {
                    t.hasClass("ff-form-inline") && t.find("button.ff-btn-submit").css("height", "50px")
                },
                reinitExtras: function () {
                    if (t.find(".ff-el-recaptcha.g-recaptcha").length) {
                        var e = (n = t.find(".ff-el-recaptcha.g-recaptcha")).data("sitekey"), r = n.attr("id");
                        grecaptcha.render(document.getElementById(r), {sitekey: e})
                    }
                    var n;
                    t.find(".ff-el-turnstile.cf-turnstile").length && (e = (n = t.find(".ff-el-turnstile.cf-turnstile")).data("sitekey"), r = n.attr("id"), console.log(r), turnstile.render(document.getElementById(r), {sitekey: e}))
                },
                initTriggers: function () {
                    t = c(), jQuery(document.body).trigger("fluentform_init", [t, o]), jQuery(document.body).trigger("fluentform_init_" + o.id, [t, o]), t.trigger("fluentform_init_single", [this, o]), t.find("input.ff-el-form-control").on("keypress", (function (e) {
                        return 13 !== e.which
                    })), t.data("is_initialized", "yes"), t.find(".ff-el-tooltip").on("mouseenter", (function (e) {
                        var n = r(this).data("content"), i = r(".ff-el-pop-content");
                        i.length || (r("<div/>", {class: "ff-el-pop-content"}).appendTo(document.body), i = r(".ff-el-pop-content")), i.html(n);
                        var a = t.innerWidth() - 20;
                        i.css("max-width", a);
                        var o = r(this).offset().left, s = i.outerWidth(), f = i.outerHeight(), c = o - s / 2 + 10;
                        c < 15 && (c = 15), i.css("top", r(this).offset().top - f - 5), i.css("left", c)
                    })), t.find(".ff-el-tooltip").on("mouseleave", (function () {
                        r(".ff-el-pop-content").remove()
                    }))
                },
                validate: C = function (e) {
                    e.length || (e = r(".frm-fluent-form").find(":input").not(":button").filter((function (e, t) {
                        return !r(t).closest(".has-conditions").hasClass("ff_excluded")
                    }))), e.each((function (e, t) {
                        r(t).closest(".ff-el-group").removeClass("ff-el-is-error").find(".error").remove()
                    })), s().validate(e, o.rules)
                },
                showErrorMessages: x,
                scrollToFirstError: b,
                settings: o,
                formSelector: I,
                sendData: m,
                addGlobalValidator: function (e, t) {
                    f[e] = t
                },
                config: o,
                showFormSubmissionProgress: p = function (e) {
                    e.addClass("ff_submitting"), e.find(".ff-btn-submit").addClass("disabled").addClass("ff-working").prop("disabled", !0)
                },
                hideFormSubmissionProgress: h = function (e) {
                    e.removeClass("ff_submitting"), e.find(".ff-btn-submit").removeClass("disabled").removeClass("ff-working").attr("disabled", !1), t.parent().find(".ff_msg_temp").remove()
                }
            }, n[i] = A, A
        };
        var i = {
            init: function () {
                var e = this;
                setTimeout((function () {
                    e.initMultiSelect()
                }), 100), this.initMask(), this.initNumericFormat(), this.initCheckableActive()
            }, initMultiSelect: function () {
                r.isFunction(window.Choices) && r(".ff_has_multi_select").length && r(".ff_has_multi_select").each((function (e, n) {
                    var i = t(t({}, {
                        removeItemButton: !0,
                        silent: !0,
                        shouldSort: !1,
                        searchEnabled: !0,
                        searchResultLimit: 50
                    }), window.fluentFormVars.choice_js_vars), a = r(n).attr("data-max_selected_options");
                    parseInt(a) && (i.maxItemCount = parseInt(a), i.maxItemText = function (e) {
                        var t = window.fluentFormVars.choice_js_vars.maxItemText;
                        return t = t.replace("%%maxItemCount%%", e)
                    }), i.callbackOnCreateTemplates = function () {
                        r(this.passedElement.element);
                        return {
                            option: function (e) {
                                var t = Choices.defaults.templates.option.call(this, e);
                                return e.customProperties && (t.dataset.calc_value = e.customProperties), t
                            }
                        }
                    }, r(n).data("choicesjs", new Choices(n, i))
                }))
            }, initMask: function () {
                if (null != jQuery.fn.mask) {
                    var e = {
                        clearIfNotMatch: window.fluentFormVars.input_mask_vars.clearIfNotMatch,
                        translation: {
                            "*": {pattern: /[0-9a-zA-Z]/},
                            0: {pattern: /\d/},
                            9: {pattern: /\d/, optional: !0},
                            "#": {pattern: /\d/, recursive: !0},
                            A: {pattern: /[a-zA-Z0-9]/},
                            S: {pattern: /[a-zA-Z]/}
                        }
                    };
                    r("input[data-mask]").each((function (t, n) {
                        var i = (n = r(n)).data("mask").mask, a = e;
                        n.attr("data-mask-reverse") && (a.reverse = !0), n.attr("data-clear-if-not-match") && (a.clearIfNotMatch = !0), n.mask(i, a)
                    }))
                }
            }, initCheckableActive: function () {
                r(document).on("change", ".ff-el-form-check input[type=radio]", (function () {
                    r(this).is(":checked") && (r(this).closest(".ff-el-input--content").find(".ff-el-form-check").removeClass("ff_item_selected"), r(this).closest(".ff-el-form-check").addClass("ff_item_selected"))
                })), r(document).on("change", ".ff-el-form-check input[type=checkbox]", (function () {
                    r(this).is(":checked") ? r(this).closest(".ff-el-form-check").addClass("ff_item_selected") : r(this).closest(".ff-el-form-check").removeClass("ff_item_selected")
                }))
            }, initNumericFormat: function () {
                var e = r(".frm-fluent-form .ff_numeric");
                r.each(e, (function (e, t) {
                    var n = r(t), i = JSON.parse(n.attr("data-formatter"));
                    n.val() && n.val(window.ff_helper.formatCurrency(n, n.val())), n.on("blur change", (function () {
                        var e = currency(r(this).val(), i).format();
                        r(this).val(e)
                    }))
                }))
            }
        }, a = function () {
            return new function () {
                this.errors = {}, this.validate = function (e, t) {
                    var n, i, a = this, o = !0;
                    e.each((function (e, s) {
                        n = r(s), i = n.prop("name").replace("[]", ""), "repeater_item" === n.data("type") && (i = n.attr("data-name"), t[i] = t[n.data("error_index")]), t[i] && r.each(t[i], (function (e, t) {
                            e in a && (a[e](n, t) || (o = !1, i in a.errors || (a.errors[i] = {}), a.errors[i][e] = t.message))
                        }))
                    })), !o && this.throwValidationException()
                }, this.throwValidationException = function () {
                    var e = new ffValidationError("Validation Error!");
                    throw e.messages = this.errors, e
                }, this.required = function (e, t) {
                    if (!t.value) return !0;
                    var n = e.prop("type");
                    if ("checkbox" == n || "radio" == n) return e.parents(".ff-el-group").attr("data-name") && !t.per_row ? e.parents(".ff-el-group").find("input:checked").length : r('[name="' + e.prop("name") + '"]:checked').length;
                    if (n.startsWith("select")) {
                        var i = e.find(":selected");
                        return !(!i.length || !i.val().length)
                    }
                    return "file" == n ? e.closest("div").find(".ff-uploaded-list").find(".ff-upload-preview[data-src]").length : "false" == e.attr("is-changed") ? "" : String(r.trim(e.val())).length
                }, this.url = function (e, t) {
                    var r = e.val();
                    if (!t.value || !r.length) return !0;
                    return /^(ftp|http|https):\/\/[^ "]+$/.test(r)
                }, this.email = function (e, t) {
                    var r = e.val();
                    if (!t.value || !r.length) return !0;
                    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(r.toLowerCase())
                }, this.numeric = function (e, t) {
                    var n = window.ff_helper.numericVal(e);
                    return n = n.toString(), !t.value || !n || r.isNumeric(n)
                }, this.min = function (e, t) {
                    var r = window.ff_helper.numericVal(e);
                    return r = r.toString(), !t.value || !r.length || (this.numeric(e, t) ? Number(r) >= Number(t.value) : void 0)
                }, this.max = function (e, t) {
                    var r = window.ff_helper.numericVal(e);
                    return r = r.toString(), !t.value || !r.length || (this.numeric(e, t) ? Number(r) <= Number(t.value) : void 0)
                }, this.digits = function (e, t) {
                    var r = window.ff_helper.numericVal(e);
                    return r = r.toString(), !t.value || !r.length || this.numeric(e, t) && r.length == t.value
                }, this.max_file_size = function () {
                    return !0
                }, this.max_file_count = function () {
                    return !0
                }, this.allowed_file_types = function () {
                    return !0
                }, this.allowed_image_types = function () {
                    return !0
                }, this.valid_phone_number = function (e, t) {
                    if (!e.val()) return !0;
                    if (void 0 === window.intlTelInputGlobals) return !0;
                    if (e && e[0]) {
                        var r = window.intlTelInputGlobals.getInstance(e[0]);
                        if (!r) return !0;
                        if (e.hasClass("ff_el_with_extended_validation")) return !!r.isValidNumber() && (e.val(r.getNumber()), !0);
                        var n = r.getSelectedCountryData(), i = e.val();
                        return !e.attr("data-original_val") && i && n && n.dialCode && (e.val("+" + n.dialCode + i), e.attr("data-original_val", i)), !0
                    }
                }
            }
        }, o = r(".frm-fluent-form");

        function s(e) {
            var t = fluentFormApp(e);
            if (t) t.initFormHandlers(), t.initTriggers(); else var r = 0, n = setInterval((function () {
                (t = fluentFormApp(e)) && (clearInterval(n), t.initFormHandlers(), t.initTriggers()), ++r > 10 && (clearInterval(n), console.log("Form could not be loaded"))
            }), 1e3)
        }

        r.each(o, (function (e, t) {
            s(r(t))
        })), r(document).on("ff_reinit", (function (e, t) {
            var n = r(t), a = fluentFormApp(n);
            if (!a) return !1;
            a.reinitExtras(), window.hcaptcha && hcaptcha.reset(), s(n), i.init(), n.attr("data-ff_reinit", "yes")
        })), i.init()
    }(window.fluentFormVars, jQuery), jQuery(".fluentform").on("submit", ".ff-form-loading", (function (e) {
        e.preventDefault(), jQuery(this).parent().find(".ff_msg_temp").remove(), jQuery("<div/>", {class: "error text-danger ff_msg_temp"}).html("Javascript handler could not be loaded. Form submission has been failed. Reload the page and try again").insertAfter(jQuery(this))
    }))
}))
})
();