import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-FCJCITDM.js";
import "./chunk-3FSK25MS.js";
import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  computed,
  input,
  model,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-TEGFJIDD.js";
import "./chunk-XZO76R2V.js";
import "./chunk-WZZJOV5G.js";
import "./chunk-DHFOCCO5.js";

// node_modules/ngx-countries-dropdown/fesm2022/ngx-countries-dropdown.mjs
var _c0 = ["search"];
var _c1 = ["dropdownList"];
var _forTrack0 = ($index, $item) => $item.code;
function CountryListComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div");
  }
  if (rf & 2) {
    const countryValue_r2 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("ipv_flag ipv_", countryValue_r2.code.toLowerCase(), "");
  }
}
function CountryListComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const countryValue_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(countryValue_r2.code);
  }
}
function CountryListComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const countryValue_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(countryValue_r2.name);
  }
}
function CountryListComponent_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const countryValue_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(countryValue_r2.dialling_code);
  }
}
function CountryListComponent_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const countryValue_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(countryValue_r2.currency == null ? null : countryValue_r2.currency.symbol);
  }
}
function CountryListComponent_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const countryValue_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(countryValue_r2.currency == null ? null : countryValue_r2.currency.code);
  }
}
function CountryListComponent_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const countryValue_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(countryValue_r2.currency == null ? null : countryValue_r2.currency.name);
  }
}
function CountryListComponent_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const countryValue_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(countryValue_r2.language == null ? null : countryValue_r2.language.code == null ? null : countryValue_r2.language.code.toUpperCase());
  }
}
function CountryListComponent_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const countryValue_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(countryValue_r2.language == null ? null : countryValue_r2.language.name);
  }
}
function CountryListComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CountryListComponent_Conditional_2_Conditional_0_Template, 1, 3, "div", 11);
    ɵɵelementStart(1, "div", 4);
    ɵɵtemplate(2, CountryListComponent_Conditional_2_Conditional_2_Template, 2, 1, "span", 12)(3, CountryListComponent_Conditional_2_Conditional_3_Template, 2, 1, "span", 13)(4, CountryListComponent_Conditional_2_Conditional_4_Template, 2, 1, "span", 13)(5, CountryListComponent_Conditional_2_Conditional_5_Template, 2, 1, "span", 13)(6, CountryListComponent_Conditional_2_Conditional_6_Template, 2, 1, "span", 13)(7, CountryListComponent_Conditional_2_Conditional_7_Template, 2, 1, "span", 13)(8, CountryListComponent_Conditional_2_Conditional_8_Template, 2, 1, "span", 13)(9, CountryListComponent_Conditional_2_Conditional_9_Template, 2, 1, "span", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵconditional(!ctx_r2.selectedCountryConfig().hideFlag ? 0 : -1);
    ɵɵadvance(2);
    ɵɵconditional(!ctx_r2.selectedCountryConfig().hideCode ? 2 : -1);
    ɵɵadvance();
    ɵɵconditional(!ctx_r2.selectedCountryConfig().hideName ? 3 : -1);
    ɵɵadvance();
    ɵɵconditional(!ctx_r2.selectedCountryConfig().hideDialCode ? 4 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.selectedCountryConfig().displayCurrencySymbol ? 5 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.selectedCountryConfig().displayCurrencyCode ? 6 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.selectedCountryConfig().displayCurrencyName ? 7 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.selectedCountryConfig().displayLanguageCode ? 8 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.selectedCountryConfig().displayLanguageName ? 9 : -1);
  }
}
function CountryListComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r2.placeholderText());
  }
}
function CountryListComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 14, 1);
    ɵɵlistener("keydown", function CountryListComponent_Conditional_5_Template_input_keydown_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onKeydown($event));
    })("ngModelChange", function CountryListComponent_Conditional_5_Template_input_ngModelChange_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onSearchTextChange());
    });
    ɵɵtwoWayListener("ngModelChange", function CountryListComponent_Conditional_5_Template_input_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r2.searchText, $event) || (ctx_r2.searchText = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("filtered", ctx_r2.searchText().length > 0);
    ɵɵtwoWayProperty("ngModel", ctx_r2.searchText);
  }
}
function CountryListComponent_For_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵelement(1, "div");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const prefCountry_r6 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵclassMapInterpolate1("ipv_flag ipv_", prefCountry_r6.code.toLowerCase(), "");
  }
}
function CountryListComponent_For_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const prefCountry_r6 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(prefCountry_r6 == null ? null : prefCountry_r6.code);
  }
}
function CountryListComponent_For_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const prefCountry_r6 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(prefCountry_r6.name);
  }
}
function CountryListComponent_For_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 17);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const prefCountry_r6 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(prefCountry_r6.dialling_code);
  }
}
function CountryListComponent_For_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const prefCountry_r6 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(prefCountry_r6.currency == null ? null : prefCountry_r6.currency.symbol);
  }
}
function CountryListComponent_For_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const prefCountry_r6 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(prefCountry_r6.currency == null ? null : prefCountry_r6.currency.code);
  }
}
function CountryListComponent_For_10_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const prefCountry_r6 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(prefCountry_r6.currency == null ? null : prefCountry_r6.currency.name);
  }
}
function CountryListComponent_For_10_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const prefCountry_r6 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(prefCountry_r6.language == null ? null : prefCountry_r6.language.code == null ? null : prefCountry_r6.language.code.toUpperCase());
  }
}
function CountryListComponent_For_10_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const prefCountry_r6 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(prefCountry_r6.language == null ? null : prefCountry_r6.language.name);
  }
}
function CountryListComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 15);
    ɵɵlistener("click", function CountryListComponent_For_10_Template_li_click_0_listener() {
      const prefCountry_r6 = ɵɵrestoreView(_r5).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.changeCountry(prefCountry_r6));
    });
    ɵɵtemplate(1, CountryListComponent_For_10_Conditional_1_Template, 2, 3, "div", 16)(2, CountryListComponent_For_10_Conditional_2_Template, 2, 1, "span", 12)(3, CountryListComponent_For_10_Conditional_3_Template, 2, 1, "span", 13)(4, CountryListComponent_For_10_Conditional_4_Template, 2, 1, "span", 17)(5, CountryListComponent_For_10_Conditional_5_Template, 2, 1, "span", 13)(6, CountryListComponent_For_10_Conditional_6_Template, 2, 1, "span", 13)(7, CountryListComponent_For_10_Conditional_7_Template, 2, 1, "span", 13)(8, CountryListComponent_For_10_Conditional_8_Template, 2, 1, "span", 13)(9, CountryListComponent_For_10_Conditional_9_Template, 2, 1, "span", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const prefCountry_r6 = ctx.$implicit;
    const ɵ$index_58_r7 = ctx.$index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("ipv_highlight", prefCountry_r6.code === ((tmp_12_0 = ctx_r2.selectedCountry()) == null ? null : tmp_12_0.code) || ɵ$index_58_r7 === ctx_r2.focusedIndex());
    ɵɵadvance();
    ɵɵconditional(!ctx_r2.countryListConfig().hideFlag ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(!ctx_r2.countryListConfig().hideCode ? 2 : -1);
    ɵɵadvance();
    ɵɵconditional(!ctx_r2.countryListConfig().hideName ? 3 : -1);
    ɵɵadvance();
    ɵɵconditional(!ctx_r2.countryListConfig().hideDialCode ? 4 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.countryListConfig().displayCurrencySymbol ? 5 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.countryListConfig().displayCurrencyCode ? 6 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.countryListConfig().displayCurrencyName ? 7 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.countryListConfig().displayLanguageCode ? 8 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.countryListConfig().displayLanguageName ? 9 : -1);
  }
}
function CountryListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 9);
  }
}
function CountryListComponent_For_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵelement(1, "div");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const country_r9 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵclassMapInterpolate1("ipv_flag ipv_", country_r9.code.toLowerCase(), "");
  }
}
function CountryListComponent_For_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const country_r9 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(country_r9 == null ? null : country_r9.code);
  }
}
function CountryListComponent_For_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const country_r9 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(country_r9.name);
  }
}
function CountryListComponent_For_13_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 17);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const country_r9 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(country_r9.dialling_code);
  }
}
function CountryListComponent_For_13_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const country_r9 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(country_r9.currency == null ? null : country_r9.currency.symbol);
  }
}
function CountryListComponent_For_13_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const country_r9 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(country_r9.currency == null ? null : country_r9.currency.code);
  }
}
function CountryListComponent_For_13_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const country_r9 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(country_r9.currency == null ? null : country_r9.currency.name);
  }
}
function CountryListComponent_For_13_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const country_r9 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(country_r9.language == null ? null : country_r9.language.code == null ? null : country_r9.language.code.toUpperCase());
  }
}
function CountryListComponent_For_13_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const country_r9 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(country_r9.language == null ? null : country_r9.language.name);
  }
}
function CountryListComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 15);
    ɵɵlistener("click", function CountryListComponent_For_13_Template_li_click_0_listener() {
      const country_r9 = ɵɵrestoreView(_r8).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.changeCountry(country_r9));
    });
    ɵɵtemplate(1, CountryListComponent_For_13_Conditional_1_Template, 2, 3, "div", 16)(2, CountryListComponent_For_13_Conditional_2_Template, 2, 1, "span", 12)(3, CountryListComponent_For_13_Conditional_3_Template, 2, 1, "span", 13)(4, CountryListComponent_For_13_Conditional_4_Template, 2, 1, "span", 17)(5, CountryListComponent_For_13_Conditional_5_Template, 2, 1, "span", 13)(6, CountryListComponent_For_13_Conditional_6_Template, 2, 1, "span", 13)(7, CountryListComponent_For_13_Conditional_7_Template, 2, 1, "span", 13)(8, CountryListComponent_For_13_Conditional_8_Template, 2, 1, "span", 13)(9, CountryListComponent_For_13_Conditional_9_Template, 2, 1, "span", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const country_r9 = ctx.$implicit;
    const ɵ$index_101_r10 = ctx.$index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("ipv_highlight", country_r9.code === ((tmp_12_0 = ctx_r2.selectedCountry()) == null ? null : tmp_12_0.code) || ɵ$index_101_r10 + ctx_r2.preferredCountryList().length === ctx_r2.focusedIndex());
    ɵɵadvance();
    ɵɵconditional(!ctx_r2.countryListConfig().hideFlag ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(!ctx_r2.countryListConfig().hideCode ? 2 : -1);
    ɵɵadvance();
    ɵɵconditional(!ctx_r2.countryListConfig().hideName ? 3 : -1);
    ɵɵadvance();
    ɵɵconditional(!ctx_r2.countryListConfig().hideDialCode ? 4 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.countryListConfig().displayCurrencySymbol ? 5 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.countryListConfig().displayCurrencyCode ? 6 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.countryListConfig().displayCurrencyName ? 7 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.countryListConfig().displayLanguageCode ? 8 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.countryListConfig().displayLanguageName ? 9 : -1);
  }
}
function CountryListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 10);
    ɵɵtext(1, "No results found.");
    ɵɵelementEnd();
  }
}
var COUNTRIES_LIST = [{
  name: "Afghanistan (‫افغانستان‬‎)",
  code: "AF",
  capital: "Kabul",
  region: "AS",
  currency: {
    code: "AFN",
    name: "Afghan afghani",
    symbol: "؋"
  },
  language: {
    code: "ps",
    name: "Pashto"
  },
  dialling_code: "+93",
  isoCode: "004"
}, {
  name: "Albania (Shqipëri)",
  code: "AL",
  capital: "Tirana",
  region: "EU",
  currency: {
    code: "ALL",
    name: "Albanian lek",
    symbol: "L"
  },
  language: {
    code: "sq",
    name: "Albanian"
  },
  dialling_code: "+355",
  isoCode: "008"
}, {
  name: "Algeria (‫الجزائر‬‎)",
  code: "DZ",
  capital: "Algiers",
  region: "AF",
  currency: {
    code: "DZD",
    name: "Algerian dinar",
    symbol: "د.ج"
  },
  language: {
    code: "ar",
    name: "Arabic"
  },
  dialling_code: "+213",
  isoCode: "012"
}, {
  name: "American Samoa",
  code: "AS",
  capital: "Pago Pago",
  region: "OC",
  currency: {
    code: "USD",
    name: "United State Dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+1",
  isoCode: "016"
}, {
  name: "Andorra",
  code: "AD",
  capital: "Andorra la Vella",
  region: "EU",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "ca",
    name: "Catalan"
  },
  dialling_code: "+376",
  isoCode: "020"
}, {
  name: "Angola",
  code: "AO",
  capital: "Luanda",
  region: "AF",
  currency: {
    code: "AOA",
    name: "Angolan kwanza",
    symbol: "Kz"
  },
  language: {
    code: "pt",
    name: "Portuguese"
  },
  dialling_code: "+244",
  isoCode: "024"
}, {
  name: "Anguilla",
  code: "AI",
  capital: "The Valley",
  region: "NA",
  currency: {
    code: "XCD",
    name: "East Caribbean dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+43",
  isoCode: "660"
}, {
  name: "Antigua and Barbuda",
  code: "AG",
  capital: "Saint John's",
  region: "NA",
  currency: {
    code: "XCD",
    name: "East Caribbean dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+1",
  isoCode: "028"
}, {
  name: "Argentina",
  code: "AR",
  capital: "Buenos Aires",
  region: "SA",
  currency: {
    code: "ARS",
    name: "Argentine peso",
    symbol: "$"
  },
  language: {
    code: "es",
    name: "Spanish"
  },
  dialling_code: "+54",
  isoCode: "032"
}, {
  name: "Armenia (Հայաստան)",
  code: "AM",
  capital: "Yerevan",
  region: "AS",
  currency: {
    code: "AMD",
    name: "Armenian dram",
    symbol: null
  },
  language: {
    code: "hy",
    name: "Armenian"
  },
  dialling_code: "+374",
  isoCode: "051"
}, {
  name: "Aruba",
  code: "AW",
  capital: "Oranjestad",
  region: "SA",
  currency: {
    code: "AWG",
    name: "Aruban florin",
    symbol: "ƒ"
  },
  language: {
    code: "nl",
    name: "Dutch"
  },
  dialling_code: "+297",
  isoCode: "533"
}, {
  name: "Australia",
  code: "AU",
  capital: "Canberra",
  region: "OC",
  currency: {
    code: "AUD",
    name: "Australian dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+61",
  isoCode: "036"
}, {
  name: "Austria (Österreich)",
  code: "AT",
  capital: "Vienna",
  region: "EU",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "de",
    name: "German"
  },
  dialling_code: "+43",
  isoCode: "040"
}, {
  name: "Azerbaijan (Azərbaycan)",
  code: "AZ",
  capital: "Baku",
  region: "AS",
  currency: {
    code: "AZN",
    name: "Azerbaijani manat",
    symbol: null
  },
  language: {
    code: "az",
    name: "Azerbaijani"
  },
  dialling_code: "+994",
  isoCode: "031"
}, {
  name: "Bahamas",
  code: "BS",
  capital: "Nassau",
  region: "NA",
  currency: {
    code: "BSD",
    name: "Bahamian dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+1",
  isoCode: "044"
}, {
  name: "Bahrain (‫البحرين‬‎)",
  code: "BH",
  capital: "Manama",
  region: "AS",
  currency: {
    code: "BHD",
    name: "Bahraini dinar",
    symbol: ".د.ب"
  },
  language: {
    code: "ar",
    name: "Arabic"
  },
  dialling_code: "+973",
  isoCode: "048"
}, {
  name: "Bangladesh (বাংলাদেশ)",
  code: "BD",
  capital: "Dhaka",
  region: "AS",
  currency: {
    code: "BDT",
    name: "Bangladeshi taka",
    symbol: "৳"
  },
  language: {
    code: "bn",
    name: "Bengali"
  },
  dialling_code: "+880",
  isoCode: "050"
}, {
  name: "Barbados",
  code: "BB",
  capital: "Bridgetown",
  region: "NA",
  currency: {
    code: "BBD",
    name: "Barbadian dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+1",
  isoCode: "052"
}, {
  name: "Belarus (Беларусь)",
  code: "BY",
  capital: "Minsk",
  region: "EU",
  currency: {
    code: "BYN",
    name: "New Belarusian ruble",
    symbol: "Br"
  },
  language: {
    code: "be",
    name: "Belarusian"
  },
  dialling_code: "+375",
  isoCode: "112"
}, {
  name: "Belgium (België)",
  code: "BE",
  capital: "Brussels",
  region: "EU",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "nl",
    name: "Dutch"
  },
  dialling_code: "+32",
  isoCode: "056"
}, {
  name: "Belize",
  code: "BZ",
  capital: "Belmopan",
  region: "NA",
  currency: {
    code: "BZD",
    name: "Belize dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+501",
  isoCode: "084"
}, {
  name: "Benin (Bénin)",
  code: "BJ",
  capital: "Porto-Novo",
  region: "AF",
  currency: {
    code: "XOF",
    name: "West African CFA franc",
    symbol: "Fr"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+229",
  isoCode: "204"
}, {
  name: "Bermuda",
  code: "BM",
  capital: "Hamilton",
  region: "NA",
  currency: {
    code: "BMD",
    name: "Bermudian dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+1",
  isoCode: "060"
}, {
  name: "Bhutan (འབྲུག)",
  code: "BT",
  capital: "Thimphu",
  region: "AS",
  currency: {
    code: "BTN",
    name: "Bhutanese ngultrum",
    symbol: "Nu."
  },
  language: {
    code: "dz",
    name: "Dzongkha"
  },
  dialling_code: "+975",
  isoCode: "064"
}, {
  name: "Bolivia (Plurinational State of)",
  code: "BO",
  capital: "Sucre",
  region: "SA",
  currency: {
    code: "BOB",
    name: "Bolivian boliviano",
    symbol: "Bs."
  },
  language: {
    code: "es",
    name: "Spanish"
  },
  dialling_code: "+591",
  isoCode: "068"
}, {
  name: "Bosnia and Herzegovina (Босна и Херцеговина)",
  code: "BA",
  capital: "Sarajevo",
  region: "EU",
  currency: {
    code: "BAM",
    name: "Bosnia and Herzegovina convertible mark",
    symbol: null
  },
  language: {
    code: "bs",
    name: "Bosnian"
  },
  dialling_code: "+387",
  isoCode: "070"
}, {
  name: "Botswana",
  code: "BW",
  capital: "Gaborone",
  region: "AF",
  currency: {
    code: "BWP",
    name: "Botswana pula",
    symbol: "P"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+267",
  isoCode: "072"
}, {
  name: "Brazil (Brasil)",
  code: "BR",
  capital: "Brasília",
  region: "SA",
  currency: {
    code: "BRL",
    name: "Brazilian real",
    symbol: "R$"
  },
  language: {
    code: "pt",
    name: "Portuguese"
  },
  dialling_code: "+55",
  isoCode: "076"
}, {
  name: "British Indian Ocean Territory",
  code: "IO",
  capital: "Diego Garcia",
  region: "AF",
  currency: {
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+246",
  isoCode: "086"
}, {
  name: "Virgin Islands (British)",
  code: "VG",
  capital: "Road Town",
  region: "NA",
  currency: {
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+1",
  isoCode: "092"
}, {
  name: "Virgin Islands (U.S.)",
  code: "VI",
  capital: "Charlotte Amalie",
  region: "NA",
  currency: {
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+1",
  isoCode: "850"
}, {
  name: "Brunei Darussalam",
  code: "BN",
  capital: "Bandar Seri Begawan",
  region: "AS",
  currency: {
    code: "BND",
    name: "Brunei dollar",
    symbol: "$"
  },
  language: {
    code: "ms",
    name: "Malay"
  },
  dialling_code: "+673",
  isoCode: "096"
}, {
  name: "Bulgaria (България)",
  code: "BG",
  capital: "Sofia",
  region: "EU",
  currency: {
    code: "BGN",
    name: "Bulgarian lev",
    symbol: "лв"
  },
  language: {
    code: "bg",
    name: "Bulgarian"
  },
  dialling_code: "+359",
  isoCode: "100"
}, {
  name: "Burkina Faso",
  code: "BF",
  capital: "Ouagadougou",
  region: "AF",
  currency: {
    code: "XOF",
    name: "West African CFA franc",
    symbol: "Fr"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+226",
  isoCode: "854"
}, {
  name: "Burundi (Uburundi)",
  code: "BI",
  capital: "Bujumbura",
  region: "AF",
  currency: {
    code: "BIF",
    name: "Burundian franc",
    symbol: "Fr"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+257",
  isoCode: "108"
}, {
  name: "Cambodia (កម្ពុជា)",
  code: "KH",
  capital: "Phnom Penh",
  region: "AS",
  currency: {
    code: "KHR",
    name: "Cambodian riel",
    symbol: "៛"
  },
  language: {
    code: "km",
    name: "Khmer"
  },
  dialling_code: "+855",
  isoCode: "116"
}, {
  name: "Cameroon (Cameroun)",
  code: "CM",
  capital: "Yaoundé",
  region: "AF",
  currency: {
    code: "XAF",
    name: "Central African CFA franc",
    symbol: "Fr"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+237",
  isoCode: "120"
}, {
  name: "Canada",
  code: "CA",
  capital: "Ottawa",
  region: "NA",
  currency: {
    code: "CAD",
    name: "Canadian dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+1",
  isoCode: "124"
}, {
  name: "Cape Verde (Kabu Verdi)",
  code: "CV",
  capital: "Praia",
  region: "AF",
  currency: {
    code: "CVE",
    name: "Cape Verdean escudo",
    symbol: "Esc"
  },
  language: {
    code: "pt",
    iso639_2: "por",
    name: "Portuguese",
    nativeName: "Português"
  },
  dialling_code: "+238",
  isoCode: "132"
}, {
  name: "Cayman Islands",
  code: "KY",
  capital: "George Town",
  region: "NA",
  demonym: "Caymanian",
  currency: {
    code: "KYD",
    name: "Cayman Islands dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+1",
  isoCode: "136"
}, {
  name: "Central African Republic (République centrafricaine)",
  code: "CF",
  capital: "Bangui",
  region: "AF",
  currency: {
    code: "XAF",
    name: "Central African CFA franc",
    symbol: "Fr"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+236",
  isoCode: "140"
}, {
  name: "Chile",
  code: "CL",
  capital: "Santiago",
  region: "SA",
  currency: {
    code: "CLP",
    name: "Chilean peso",
    symbol: "$"
  },
  language: {
    code: "es",
    iso639_2: "spa",
    name: "Spanish",
    nativeName: "Español"
  },
  dialling_code: "+56",
  isoCode: "152"
}, {
  name: "China (中国)",
  code: "CN",
  capital: "Beijing",
  region: "AS",
  currency: {
    code: "CNY",
    name: "Chinese yuan",
    symbol: "¥"
  },
  language: {
    code: "zh",
    name: "Chinese"
  },
  dialling_code: "+86",
  isoCode: "156"
}, {
  name: "Colombia",
  code: "CO",
  capital: "Bogotá",
  region: "SA",
  currency: {
    code: "COP",
    name: "Colombian peso",
    symbol: "$"
  },
  language: {
    code: "es",
    name: "Spanish"
  },
  dialling_code: "+57",
  isoCode: "170"
}, {
  name: "Comoros (‫جزر القمر‬‎)",
  code: "KM",
  capital: "Moroni",
  region: "AF",
  currency: {
    code: "KMF",
    name: "Comorian franc",
    symbol: "Fr"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+269",
  isoCode: "174"
}, {
  name: "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)",
  code: "CG",
  capital: "Brazzaville",
  region: "AF",
  currency: {
    code: "XAF",
    name: "Central African CFA franc",
    symbol: "Fr"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+242",
  isoCode: "178"
}, {
  name: "Congo (Republic) (Congo-Brazzaville)",
  code: "CD",
  capital: "Kinshasa",
  region: "AF",
  currency: {
    code: "CDF",
    name: "Congolese franc",
    symbol: "Fr"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+243",
  isoCode: "180"
}, {
  name: "Cook Islands",
  code: "CK",
  capital: "Avarua",
  region: "OC",
  currency: {
    code: "NZD",
    name: "New Zealand dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+682",
  isoCode: "184"
}, {
  name: "Costa Rica",
  code: "CR",
  capital: "San José",
  region: "NA",
  currency: {
    code: "CRC",
    name: "Costa Rican colón",
    symbol: "₡"
  },
  language: {
    code: "es",
    name: "Spanish"
  },
  dialling_code: "+506",
  isoCode: "188"
}, {
  name: "Croatia (Hrvatska)",
  code: "HR",
  capital: "Zagreb",
  region: "EU",
  currency: {
    code: "HRK",
    name: "Croatian kuna",
    symbol: "kn"
  },
  language: {
    code: "hr",
    name: "Croatian"
  },
  dialling_code: "+385",
  isoCode: "191"
}, {
  name: "Cuba",
  code: "CU",
  capital: "Havana",
  region: "NA",
  currency: {
    code: "CUC",
    name: "Cuban convertible peso",
    symbol: "$"
  },
  language: {
    code: "es",
    name: "Spanish"
  },
  dialling_code: "+53",
  isoCode: "192"
}, {
  name: "Cyprus (Κύπρος)",
  code: "CY",
  capital: "Nicosia",
  region: "EU",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "tr",
    name: "Turkish"
  },
  dialling_code: "+357",
  isoCode: "196"
}, {
  name: "Czech Republic (Česká republika)",
  code: "CZ",
  capital: "Prague",
  region: "EU",
  currency: {
    code: "CZK",
    name: "Czech koruna",
    symbol: "Kč"
  },
  language: {
    code: "cs",
    name: "Czech"
  },
  dialling_code: "+420",
  isoCode: "203"
}, {
  name: "Denmark (Danmark)",
  code: "DK",
  capital: "Copenhagen",
  region: "EU",
  currency: {
    code: "DKK",
    name: "Danish krone",
    symbol: "kr"
  },
  language: {
    code: "da",
    name: "Danish"
  },
  dialling_code: "+45",
  isoCode: "208"
}, {
  name: "Djibouti",
  code: "DJ",
  capital: "Djibouti",
  region: "AF",
  currency: {
    code: "DJF",
    name: "Djiboutian franc",
    symbol: "Fr"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+253",
  isoCode: "262"
}, {
  name: "Dominica",
  code: "DM",
  capital: "Roseau",
  region: "NA",
  currency: {
    code: "XCD",
    name: "East Caribbean dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+1",
  isoCode: "212"
}, {
  name: "Dominican Republic (República Dominicana)",
  code: "DO",
  capital: "Santo Domingo",
  region: "NA",
  currency: {
    code: "DOP",
    name: "Dominican peso",
    symbol: "$"
  },
  language: {
    code: "es",
    name: "Spanish"
  },
  dialling_code: "+1",
  isoCode: "214"
}, {
  name: "Ecuador",
  code: "EC",
  capital: "Quito",
  region: "SA",
  currency: {
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  },
  language: {
    code: "es",
    name: "Spanish"
  },
  dialling_code: "+593",
  isoCode: "218"
}, {
  name: "Egypt (‫مصر‬‎)",
  code: "EG",
  capital: "Cairo",
  region: "AF",
  currency: {
    code: "EGP",
    name: "Egyptian pound",
    symbol: "£"
  },
  language: {
    code: "ar",
    name: "Arabic"
  },
  dialling_code: "+20",
  isoCode: "818"
}, {
  name: "El Salvador",
  code: "SV",
  capital: "San Salvador",
  region: "NA",
  currency: {
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  },
  language: {
    code: "es",
    name: "Spanish"
  },
  dialling_code: "+503",
  isoCode: "222"
}, {
  name: "Equatorial Guinea (Guinea Ecuatorial)",
  code: "GQ",
  capital: "Malabo",
  region: "AF",
  currency: {
    code: "XAF",
    name: "Central African CFA franc",
    symbol: "Fr"
  },
  language: {
    code: "es",
    iso639_2: "spa",
    name: "Spanish",
    nativeName: "Español"
  },
  dialling_code: "+240",
  isoCode: "226"
}, {
  name: "Eritrea",
  code: "ER",
  capital: "Asmara",
  region: "AF",
  currency: {
    code: "ERN",
    name: "Eritrean nakfa",
    symbol: "Nfk"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+291",
  isoCode: "232"
}, {
  name: "Estonia (Eesti)",
  code: "EE",
  capital: "Tallinn",
  region: "EU",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "et",
    name: "Estonian"
  },
  dialling_code: "+372",
  isoCode: "233"
}, {
  name: "Ethiopia",
  code: "ET",
  capital: "Addis Ababa",
  region: "AF",
  currency: {
    code: "ETB",
    name: "Ethiopian birr",
    symbol: "Br"
  },
  language: {
    code: "am",
    name: "Amharic"
  },
  dialling_code: "+251",
  isoCode: "231"
}, {
  name: "Falkland Islands (Islas Malvinas)",
  code: "FK",
  capital: "Stanley",
  region: "SA",
  currency: {
    code: "FKP",
    name: "Falkland Islands pound",
    symbol: "£"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+500",
  isoCode: "238"
}, {
  name: "Faroe Islands (Føroyar)",
  code: "FO",
  capital: "Tórshavn",
  region: "EU",
  currency: {
    code: "DKK",
    name: "Danish krone",
    symbol: "kr"
  },
  language: {
    code: "fo",
    name: "Faroese"
  },
  dialling_code: "+298",
  isoCode: "234"
}, {
  name: "Fiji",
  code: "FJ",
  capital: "Suva",
  region: "OC",
  currency: {
    code: "FJD",
    name: "Fijian dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+679",
  isoCode: "242"
}, {
  name: "Finland (Suomi)",
  code: "FI",
  capital: "Helsinki",
  region: "EU",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "fi",
    iso639_2: "fin",
    name: "Finnish",
    nativeName: "suomi"
  },
  dialling_code: "+358",
  isoCode: "246"
}, {
  name: "France",
  code: "FR",
  capital: "Paris",
  region: "EU",
  demonym: "French",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+33",
  isoCode: "250"
}, {
  name: "French Guiana (Guyane française)",
  code: "GF",
  capital: "Cayenne",
  region: "SA",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+594",
  isoCode: "254"
}, {
  name: "French Polynesia (Polynésie française)",
  code: "PF",
  capital: "Papeetē",
  region: "OC",
  currency: {
    code: "XPF",
    name: "CFP franc",
    symbol: "Fr"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+689",
  isoCode: "258"
}, {
  name: "Gabon",
  code: "GA",
  capital: "Libreville",
  region: "AF",
  currency: {
    code: "XAF",
    name: "Central African CFA franc",
    symbol: "Fr"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+241",
  isoCode: "266"
}, {
  name: "Gambia",
  code: "GM",
  capital: "Banjul",
  region: "AF",
  currency: {
    code: "GMD",
    name: "Gambian dalasi",
    symbol: "D"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+220",
  isoCode: "270"
}, {
  name: "Georgia (საქართველო)",
  code: "GE",
  capital: "Tbilisi",
  region: "AS",
  currency: {
    code: "GEL",
    name: "Georgian Lari",
    symbol: "ლ"
  },
  language: {
    code: "ka",
    name: "Georgian"
  },
  dialling_code: "+995",
  isoCode: "268"
}, {
  name: "Germany (Deutschland)",
  code: "DE",
  capital: "Berlin",
  region: "EU",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "de",
    name: "German"
  },
  dialling_code: "+49",
  isoCode: "276"
}, {
  name: "Ghana (Gaana)",
  code: "GH",
  capital: "Accra",
  region: "AF",
  currency: {
    code: "GHS",
    name: "Ghanaian cedi",
    symbol: "₵"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+233",
  isoCode: "288"
}, {
  name: "Gibraltar",
  code: "GI",
  capital: "Gibraltar",
  region: "EU",
  currency: {
    code: "GIP",
    name: "Gibraltar pound",
    symbol: "£"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+350",
  isoCode: "292"
}, {
  name: "Greece (Ελλάδα)",
  code: "GR",
  capital: "Athens",
  region: "EU",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "el",
    name: "Greek (modern)"
  },
  dialling_code: "+30",
  isoCode: "300"
}, {
  name: "Greenland (Kalaallit Nunaat)",
  code: "GL",
  capital: "Nuuk",
  region: "NA",
  currency: {
    code: "DKK",
    name: "Danish krone",
    symbol: "kr"
  },
  language: {
    code: "kl",
    name: "Kalaallisut"
  },
  dialling_code: "+299",
  isoCode: "304"
}, {
  name: "Grenada",
  code: "GD",
  capital: "St. George's",
  region: "NA",
  currency: {
    code: "XCD",
    name: "East Caribbean dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+1",
  isoCode: "308"
}, {
  name: "Guadeloupe",
  code: "GP",
  capital: "Basse-Terre",
  region: "NA",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+590",
  isoCode: "312"
}, {
  name: "Guam",
  code: "GU",
  capital: "Hagåtña",
  region: "OC",
  currency: {
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+1",
  isoCode: "316"
}, {
  name: "Guatemala",
  code: "GT",
  capital: "Guatemala City",
  region: "NA",
  currency: {
    code: "GTQ",
    name: "Guatemalan quetzal",
    symbol: "Q"
  },
  language: {
    code: "es",
    name: "Spanish"
  },
  dialling_code: "+502",
  isoCode: "320"
}, {
  name: "Guinea (Guinée)",
  code: "GN",
  capital: "Conakry",
  region: "AF",
  currency: {
    code: "GNF",
    name: "Guinean franc",
    symbol: "Fr"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+224",
  isoCode: "324"
}, {
  name: "Guinea-Bissau (Guiné Bissau)",
  code: "GW",
  capital: "Bissau",
  region: "AF",
  currency: {
    code: "XOF",
    name: "West African CFA franc",
    symbol: "Fr"
  },
  language: {
    code: "pt",
    name: "Portuguese"
  },
  dialling_code: "+245",
  isoCode: "624"
}, {
  name: "Guyana",
  code: "GY",
  capital: "Georgetown",
  region: "SA",
  currency: {
    code: "GYD",
    name: "Guyanese dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+592",
  isoCode: "328"
}, {
  name: "Haiti",
  code: "HT",
  capital: "Port-au-Prince",
  region: "Americas",
  currency: {
    code: "HTG",
    name: "Haitian gourde",
    symbol: "G"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+509",
  isoCode: "332"
}, {
  name: "Holy See",
  code: "VA",
  capital: "Rome",
  region: "EU",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+39",
  isoCode: "336"
}, {
  name: "Honduras",
  code: "HN",
  capital: "Tegucigalpa",
  region: "NA",
  currency: {
    code: "HNL",
    name: "Honduran lempira",
    symbol: "L"
  },
  language: {
    code: "es",
    name: "Spanish"
  },
  dialling_code: "+504",
  isoCode: "340"
}, {
  name: "Hong Kong (香港)",
  code: "HK",
  capital: "City of Victoria",
  region: "AS",
  currency: {
    code: "HKD",
    name: "Hong Kong dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+852",
  isoCode: "344"
}, {
  name: "Hungary (Magyarország)",
  code: "HU",
  capital: "Budapest",
  region: "EU",
  currency: {
    code: "HUF",
    name: "Hungarian forint",
    symbol: "Ft"
  },
  language: {
    code: "hu",
    name: "Hungarian"
  },
  dialling_code: "+36",
  isoCode: "348"
}, {
  name: "Iceland (Ísland)",
  code: "IS",
  capital: "Reykjavík",
  region: "EU",
  currency: {
    code: "ISK",
    name: "Icelandic króna",
    symbol: "kr"
  },
  language: {
    code: "is",
    name: "Icelandic"
  },
  dialling_code: "+354",
  isoCode: "352"
}, {
  name: "India (भारत)",
  code: "IN",
  capital: "New Delhi",
  region: "AS",
  currency: {
    code: "INR",
    name: "Indian rupee",
    symbol: "₹"
  },
  language: {
    code: "hi",
    name: "Hindi"
  },
  dialling_code: "+91",
  isoCode: "356"
}, {
  name: "Indonesia",
  code: "ID",
  capital: "Jakarta",
  region: "AS",
  currency: {
    code: "IDR",
    name: "Indonesian rupiah",
    symbol: "Rp"
  },
  language: {
    code: "id",
    name: "Indonesian"
  },
  dialling_code: "+62",
  isoCode: "360"
}, {
  name: "Côte d'Ivoire",
  code: "CI",
  capital: "Yamoussoukro",
  region: "AF",
  currency: {
    code: "XOF",
    name: "West African CFA franc",
    symbol: "Fr"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+225",
  isoCode: "384"
}, {
  name: "Iran (‫ایران‬‎)",
  code: "IR",
  capital: "Tehran",
  region: "AS",
  currency: {
    code: "IRR",
    name: "Iranian rial",
    symbol: "﷼"
  },
  language: {
    code: "fa",
    name: "Persian (Farsi)"
  },
  dialling_code: "+98",
  isoCode: "364"
}, {
  name: "Iraq (‫العراق‬‎)",
  code: "IQ",
  capital: "Baghdad",
  region: "AS",
  currency: {
    code: "IQD",
    name: "Iraqi dinar",
    symbol: "ع.د"
  },
  language: {
    code: "ar",
    name: "Arabic"
  },
  dialling_code: "+964",
  isoCode: "368"
}, {
  name: "Ireland",
  code: "IE",
  capital: "Dublin",
  region: "EU",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "ga",
    name: "Irish"
  },
  dialling_code: "+353",
  isoCode: "372"
}, {
  name: "Israel (‫ישראל‬‎)",
  code: "IL",
  capital: "Jerusalem",
  region: "AS",
  currency: {
    code: "ILS",
    name: "Israeli new shekel",
    symbol: "₪"
  },
  language: {
    code: "he",
    name: "Hebrew (modern)"
  },
  dialling_code: "+972",
  isoCode: "376"
}, {
  name: "Italy (Italia)",
  code: "IT",
  capital: "Rome",
  region: "EU",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "it",
    name: "Italian"
  },
  dialling_code: "+39",
  isoCode: "380"
}, {
  name: "Jamaica",
  code: "JM",
  capital: "Kingston",
  region: "NA",
  currency: {
    code: "JMD",
    name: "Jamaican dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+1",
  isoCode: "388"
}, {
  name: "Japan (日本)",
  code: "JP",
  capital: "Tokyo",
  region: "AS",
  currency: {
    code: "JPY",
    name: "Japanese yen",
    symbol: "¥"
  },
  language: {
    code: "ja",
    name: "Japanese"
  },
  dialling_code: "+81",
  isoCode: "392"
}, {
  name: "Jordan (‫الأردن‬‎)",
  code: "JO",
  capital: "Amman",
  region: "AS",
  currency: {
    code: "JOD",
    name: "Jordanian dinar",
    symbol: "د.ا"
  },
  language: {
    code: "ar",
    name: "Arabic"
  },
  dialling_code: "+962",
  isoCode: "400"
}, {
  name: "Kazakhstan (Казахстан)",
  code: "KZ",
  capital: "Astana",
  region: "AS",
  currency: {
    code: "KZT",
    name: "Kazakhstani tenge",
    symbol: null
  },
  language: {
    code: "kk",
    name: "Kazakh"
  },
  dialling_code: "+7",
  isoCode: "398"
}, {
  name: "Kenya",
  code: "KE",
  capital: "Nairobi",
  region: "AF",
  currency: {
    code: "KES",
    name: "Kenyan shilling",
    symbol: "Sh"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+254",
  isoCode: "404"
}, {
  name: "Kiribati",
  code: "KI",
  capital: "South Tarawa",
  region: "OC",
  currency: {
    code: "AUD",
    name: "Australian dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+686",
  isoCode: "296"
}, {
  name: "Kuwait (‫الكويت‬‎)",
  code: "KW",
  capital: "Kuwait City",
  region: "AS",
  currency: {
    code: "KWD",
    name: "Kuwaiti dinar",
    symbol: "د.ك"
  },
  language: {
    code: "ar",
    name: "Arabic"
  },
  dialling_code: "+965",
  isoCode: "414"
}, {
  name: "Kyrgyzstan (Кыргызстан)",
  code: "KG",
  capital: "Bishkek",
  region: "AS",
  currency: {
    code: "KGS",
    name: "Kyrgyzstani som",
    symbol: "с"
  },
  language: {
    code: "ky",
    name: "Kyrgyz"
  },
  dialling_code: "+996",
  isoCode: "417"
}, {
  name: "Laos (ລາວ)",
  code: "LA",
  capital: "Vientiane",
  region: "AS",
  currency: {
    code: "LAK",
    name: "Lao kip",
    symbol: "₭"
  },
  language: {
    code: "lo",
    name: "Lao"
  },
  dialling_code: "+856",
  isoCode: "418"
}, {
  name: "Latvia (Latvija)",
  code: "LV",
  capital: "Riga",
  region: "EU",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "lv",
    name: "Latvian"
  },
  dialling_code: "+371",
  isoCode: "428"
}, {
  name: "Lebanon (‫لبنان‬‎)",
  code: "LB",
  capital: "Beirut",
  region: "AS",
  currency: {
    code: "LBP",
    name: "Lebanese pound",
    symbol: "ل.ل"
  },
  language: {
    code: "ar",
    name: "Arabic"
  },
  dialling_code: "+961",
  isoCode: "422"
}, {
  name: "Lesotho",
  code: "LS",
  capital: "Maseru",
  region: "AF",
  currency: {
    code: "LSL",
    name: "Lesotho loti",
    symbol: "L"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+266",
  isoCode: "426"
}, {
  name: "Liberia",
  code: "LR",
  capital: "Monrovia",
  region: "AF",
  currency: {
    code: "LRD",
    name: "Liberian dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+231",
  isoCode: "430"
}, {
  name: "Libya (‫ليبيا‬‎)",
  code: "LY",
  capital: "Tripoli",
  region: "AF",
  currency: {
    code: "LYD",
    name: "Libyan dinar",
    symbol: "ل.د"
  },
  language: {
    code: "ar",
    name: "Arabic"
  },
  dialling_code: "+218",
  isoCode: "434"
}, {
  name: "Liechtenstein",
  code: "LI",
  capital: "Vaduz",
  region: "EU",
  currency: {
    code: "CHF",
    name: "Swiss franc",
    symbol: "Fr"
  },
  language: {
    code: "de",
    name: "German"
  },
  dialling_code: "+423",
  isoCode: "438"
}, {
  name: "Lithuania (Lietuva)",
  code: "LT",
  capital: "Vilnius",
  region: "EU",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "lt",
    name: "Lithuanian"
  },
  dialling_code: "+370",
  isoCode: "440"
}, {
  name: "Luxembourg",
  code: "LU",
  capital: "Luxembourg",
  region: "EU",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+352",
  isoCode: "442"
}, {
  name: "Macau (澳門)",
  code: "MO",
  capital: "",
  region: "AS",
  currency: {
    code: "MOP",
    name: "Macanese pataca",
    symbol: "P"
  },
  language: {
    code: "zh",
    name: "Chinese"
  },
  dialling_code: "+853",
  isoCode: "446"
}, {
  name: "Macedonia (the former Yugoslav Republic of)",
  code: "MK",
  capital: "Skopje",
  region: "EU",
  currency: {
    code: "MKD",
    name: "Macedonian denar",
    symbol: "ден"
  },
  language: {
    code: "mk",
    name: "Macedonian"
  },
  dialling_code: "+389",
  isoCode: "807"
}, {
  name: "Madagascar (Madagasikara)",
  code: "MG",
  capital: "Antananarivo",
  region: "AF",
  currency: {
    code: "MGA",
    name: "Malagasy ariary",
    symbol: "Ar"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+261",
  isoCode: "450"
}, {
  name: "Malawi",
  code: "MW",
  capital: "Lilongwe",
  region: "AF",
  currency: {
    code: "MWK",
    name: "Malawian kwacha",
    symbol: "MK"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+265",
  isoCode: "454"
}, {
  name: "Malaysia",
  code: "MY",
  capital: "Kuala Lumpur",
  region: "AS",
  currency: {
    code: "MYR",
    name: "Malaysian ringgit",
    symbol: "RM"
  },
  language: {
    code: "MY",
    name: "Malaysian"
  },
  dialling_code: "+60",
  isoCode: "458"
}, {
  name: "Maldives",
  code: "MV",
  capital: "Malé",
  region: "AS",
  currency: {
    code: "MVR",
    name: "Maldivian rufiyaa",
    symbol: ".ރ"
  },
  language: {
    code: "dv",
    name: "Divehi"
  },
  dialling_code: "+960",
  isoCode: "462"
}, {
  name: "Mali",
  code: "ML",
  capital: "Bamako",
  region: "AF",
  currency: {
    code: "XOF",
    name: "West African CFA franc",
    symbol: "Fr"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+223",
  isoCode: "466"
}, {
  name: "Malta",
  code: "MT",
  capital: "Valletta",
  region: "EU",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "mt",
    name: "Maltese"
  },
  dialling_code: "+356",
  isoCode: "470"
}, {
  name: "Marshall Islands",
  code: "MH",
  capital: "Majuro",
  region: "OC",
  currency: {
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+692",
  isoCode: "584"
}, {
  name: "Martinique",
  code: "MQ",
  capital: "Fort-de-France",
  region: "Americas",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+596",
  isoCode: "474"
}, {
  name: "Mauritania (‫موريتانيا‬‎)",
  code: "MR",
  capital: "Nouakchott",
  region: "AF",
  currency: {
    code: "MRO",
    name: "Mauritanian ouguiya",
    symbol: "UM"
  },
  language: {
    code: "ar",
    name: "Arabic"
  },
  dialling_code: "+222",
  isoCode: "478"
}, {
  name: "Mauritius (Moris)",
  code: "MU",
  capital: "Port Louis",
  region: "AF",
  currency: {
    code: "MUR",
    name: "Mauritian rupee",
    symbol: "₨"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+230",
  isoCode: "480"
}, {
  name: "Mayotte",
  code: "YT",
  capital: "Mamoudzou",
  region: "AF",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+262",
  isoCode: "175"
}, {
  name: "Mexico (México)",
  code: "MX",
  capital: "Mexico City",
  region: "NA",
  currency: {
    code: "MXN",
    name: "Mexican peso",
    symbol: "$"
  },
  language: {
    code: "es",
    name: "Spanish"
  },
  dialling_code: "+52",
  isoCode: "484"
}, {
  name: "Micronesia (Federated States of)",
  code: "FM",
  capital: "Palikir",
  region: "OC",
  currency: {
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+691",
  isoCode: "583"
}, {
  name: "Moldova (Republica Moldova)",
  code: "MD",
  capital: "Chișinău",
  region: "EU",
  currency: {
    code: "MDL",
    name: "Moldovan leu",
    symbol: "L"
  },
  language: {
    code: "ro",
    name: "Romanian"
  },
  dialling_code: "+373",
  isoCode: "498"
}, {
  name: "Monaco",
  code: "MC",
  capital: "Monaco",
  region: "EU",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+377",
  isoCode: "492"
}, {
  name: "Mongolia (Монгол)",
  code: "MN",
  capital: "Ulan Bator",
  region: "AS",
  currency: {
    code: "MNT",
    name: "Mongolian tögrög",
    symbol: "₮"
  },
  language: {
    code: "mn",
    name: "Mongolian"
  },
  dialling_code: "+976",
  isoCode: "496"
}, {
  name: "Montenegro (Crna Gora)",
  code: "ME",
  capital: "Podgorica",
  region: "EU",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "sr",
    name: "Serbian"
  },
  dialling_code: "+382",
  isoCode: "499"
}, {
  name: "Montserrat",
  code: "MS",
  capital: "Plymouth",
  region: "NA",
  currency: {
    code: "XCD",
    name: "East Caribbean dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+1",
  isoCode: "500"
}, {
  name: "Morocco (‫المغرب‬‎)",
  code: "MA",
  capital: "Rabat",
  region: "AF",
  currency: {
    code: "MAD",
    name: "Moroccan dirham",
    symbol: "د.م."
  },
  language: {
    code: "ar",
    name: "Arabic"
  },
  dialling_code: "+212",
  isoCode: "504"
}, {
  name: "Mozambique (Moçambique)",
  code: "MZ",
  capital: "Maputo",
  region: "AF",
  currency: {
    code: "MZN",
    name: "Mozambican metical",
    symbol: "MT"
  },
  language: {
    code: "pt",
    name: "Portuguese"
  },
  dialling_code: "+258",
  isoCode: "508"
}, {
  name: "Myanmar (Burma) (မြန်မာ)",
  code: "MM",
  capital: "Naypyidaw",
  region: "AS",
  currency: {
    code: "MMK",
    name: "Burmese kyat",
    symbol: "Ks"
  },
  language: {
    code: "my",
    name: "Burmese"
  },
  dialling_code: "+95",
  isoCode: "104"
}, {
  name: "Namibia (Namibië)",
  code: "NA",
  capital: "Windhoek",
  region: "AF",
  currency: {
    code: "NAD",
    name: "Namibian dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+264",
  isoCode: "516"
}, {
  name: "Nauru",
  code: "NR",
  capital: "Yaren",
  region: "OC",
  currency: {
    code: "AUD",
    name: "Australian dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+674",
  isoCode: "520"
}, {
  name: "Nepal (नेपाल)",
  code: "NP",
  capital: "Kathmandu",
  region: "AS",
  currency: {
    code: "NPR",
    name: "Nepalese rupee",
    symbol: "₨"
  },
  language: {
    code: "ne",
    name: "Nepali"
  },
  dialling_code: "+977",
  isoCode: "524"
}, {
  name: "Netherlands (Nederland)",
  code: "NL",
  capital: "Amsterdam",
  region: "EU",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "nl",
    name: "Dutch"
  },
  dialling_code: "+31",
  isoCode: "528"
}, {
  name: "New Caledonia (Nouvelle-Calédonie)",
  code: "NC",
  capital: "Nouméa",
  region: "OC",
  currency: {
    code: "XPF",
    name: "CFP franc",
    symbol: "Fr"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+687",
  isoCode: "540"
}, {
  name: "New Zealand",
  code: "NZ",
  capital: "Wellington",
  region: "OC",
  currency: {
    code: "NZD",
    name: "New Zealand dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+64",
  isoCode: "554"
}, {
  name: "Nicaragua",
  code: "NI",
  capital: "Managua",
  region: "NA",
  currency: {
    code: "NIO",
    name: "Nicaraguan córdoba",
    symbol: "C$"
  },
  language: {
    code: "es",
    name: "Spanish"
  },
  dialling_code: "+505",
  isoCode: "558"
}, {
  name: "Niger (Nijar)",
  code: "NE",
  capital: "Niamey",
  region: "AF",
  currency: {
    code: "XOF",
    name: "West African CFA franc",
    symbol: "Fr"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+227",
  isoCode: "562"
}, {
  name: "Nigeria",
  code: "NG",
  capital: "Abuja",
  region: "AF",
  currency: {
    code: "NGN",
    name: "Nigerian naira",
    symbol: "₦"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+234",
  isoCode: "566"
}, {
  name: "Niue",
  code: "NU",
  capital: "Alofi",
  region: "OC",
  currency: {
    code: "NZD",
    name: "New Zealand dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+683",
  isoCode: "570"
}, {
  name: "Norfolk Island",
  code: "NF",
  capital: "Kingston",
  region: "OC",
  currency: {
    code: "AUD",
    name: "Australian dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+672",
  isoCode: "574"
}, {
  name: "North Korea (조선 민주주의 인민 공화국)",
  code: "KP",
  capital: "Pyongyang",
  region: "AS",
  currency: {
    code: "KPW",
    name: "North Korean won",
    symbol: "₩"
  },
  language: {
    code: "ko",
    name: "Korean"
  },
  dialling_code: "+850",
  isoCode: "408"
}, {
  name: "Northern Mariana Islands",
  code: "MP",
  capital: "Saipan",
  region: "OC",
  currency: {
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+1",
  isoCode: "580"
}, {
  name: "Norway (Norge)",
  code: "NO",
  capital: "Oslo",
  region: "EU",
  currency: {
    code: "NOK",
    name: "Norwegian krone",
    symbol: "kr"
  },
  language: {
    code: "no",
    name: "Norwegian"
  },
  dialling_code: "+47",
  isoCode: "578"
}, {
  name: "Oman (‫عُمان‬‎)",
  code: "OM",
  capital: "Muscat",
  region: "AS",
  currency: {
    code: "OMR",
    name: "Omani rial",
    symbol: "ر.ع."
  },
  language: {
    code: "ar",
    name: "Arabic"
  },
  dialling_code: "+968",
  isoCode: "512"
}, {
  name: "Pakistan (‫پاکستان‬‎)",
  code: "PK",
  capital: "Islamabad",
  region: "AS",
  currency: {
    code: "PKR",
    name: "Pakistani rupee",
    symbol: "₨"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+92",
  isoCode: "586"
}, {
  name: "Palau",
  code: "PW",
  capital: "Ngerulmud",
  region: "OC",
  currency: {
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+680",
  isoCode: "585"
}, {
  name: "Palestine (‫فلسطين‬‎)",
  code: "PS",
  capital: "Ramallah",
  region: "AS",
  currency: {
    code: "ILS",
    name: "Israeli new sheqel",
    symbol: "₪"
  },
  language: {
    code: "ar",
    name: "Arabic"
  },
  dialling_code: "+970",
  isoCode: "275"
}, {
  name: "Panama (Panamá)",
  code: "PA",
  capital: "Panama City",
  region: "NA",
  currency: {
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  },
  language: {
    code: "es",
    name: "Spanish"
  },
  dialling_code: "+507",
  isoCode: "591"
}, {
  name: "Papua New Guinea",
  code: "PG",
  capital: "Port Moresby",
  region: "OC",
  currency: {
    code: "PGK",
    name: "Papua New Guinean kina",
    symbol: "K"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+675",
  isoCode: "598"
}, {
  name: "Paraguay",
  code: "PY",
  capital: "Asunción",
  region: "SA",
  currency: {
    code: "PYG",
    name: "Paraguayan guaraní",
    symbol: "₲"
  },
  language: {
    code: "es",
    name: "Spanish"
  },
  dialling_code: "+595",
  isoCode: "600"
}, {
  name: "Peru (Perú)",
  code: "PE",
  capital: "Lima",
  region: "SA",
  currency: {
    code: "PEN",
    name: "Peruvian sol",
    symbol: "S/."
  },
  language: {
    code: "es",
    name: "Spanish"
  },
  dialling_code: "+51",
  isoCode: "604"
}, {
  name: "Philippines",
  code: "PH",
  capital: "Manila",
  region: "AS",
  currency: {
    code: "PHP",
    name: "Philippine peso",
    symbol: "₱"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+63",
  isoCode: "608"
}, {
  name: "Poland (Polska)",
  code: "PL",
  capital: "Warsaw",
  region: "EU",
  currency: {
    code: "PLN",
    name: "Polish złoty",
    symbol: "zł"
  },
  language: {
    code: "pl",
    name: "Polish"
  },
  dialling_code: "+48",
  isoCode: "616"
}, {
  name: "Portugal",
  code: "PT",
  capital: "Lisbon",
  region: "EU",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "pt",
    name: "Portuguese"
  },
  dialling_code: "+351",
  isoCode: "620"
}, {
  name: "Puerto Rico",
  code: "PR",
  capital: "San Juan",
  region: "NA",
  currency: {
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  },
  language: {
    code: "es",
    name: "Spanish"
  },
  dialling_code: "+1",
  isoCode: "630"
}, {
  name: "Qatar (‫قطر‬‎)",
  code: "QA",
  capital: "Doha",
  region: "AS",
  currency: {
    code: "QAR",
    name: "Qatari riyal",
    symbol: "ر.ق"
  },
  language: {
    code: "ar",
    name: "Arabic"
  },
  dialling_code: "+974",
  isoCode: "634"
}, {
  name: "Republic of Kosovo",
  code: "XK",
  capital: "Pristina",
  region: "EU",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "sq",
    name: "Albanian"
  },
  dialling_code: "+381",
  isoCode: "383"
}, {
  name: "Réunion (La Réunion)",
  code: "RE",
  capital: "Saint-Denis",
  region: "AF",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+262",
  isoCode: "638"
}, {
  name: "Romania (România)",
  code: "RO",
  capital: "Bucharest",
  region: "EU",
  currency: {
    code: "RON",
    name: "Romanian leu",
    symbol: "lei"
  },
  language: {
    code: "ro",
    name: "Romanian"
  },
  dialling_code: "+40",
  isoCode: "642"
}, {
  name: "Russia (Россия)",
  code: "RU",
  capital: "Moscow",
  region: "EU",
  currency: {
    code: "RUB",
    name: "Russian ruble",
    symbol: "₽"
  },
  language: {
    code: "ru",
    name: "Russian"
  },
  dialling_code: "+7",
  isoCode: "643"
}, {
  name: "Rwanda",
  code: "RW",
  capital: "Kigali",
  region: "AF",
  currency: {
    code: "RWF",
    name: "Rwandan franc",
    symbol: "Fr"
  },
  language: {
    code: "rw",
    name: "Kinyarwanda"
  },
  dialling_code: "+250",
  isoCode: "646"
}, {
  name: "Saint Martin (Saint-Martin (partie française))",
  code: "BL",
  capital: "Gustavia",
  region: "NA",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+590",
  isoCode: "652"
}, {
  name: "Saint Helena, Ascension and Tristan da Cunha",
  code: "SH",
  capital: "Jamestown",
  region: "AF",
  currency: {
    code: "SHP",
    name: "Saint Helena pound",
    symbol: "£"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+290",
  isoCode: "654"
}, {
  name: "Saint Kitts and Nevis",
  code: "KN",
  capital: "Basseterre",
  region: "NA",
  currency: {
    code: "XCD",
    name: "East Caribbean dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+1",
  isoCode: "659"
}, {
  name: "Saint Lucia",
  code: "LC",
  capital: "Castries",
  region: "NA",
  currency: {
    code: "XCD",
    name: "East Caribbean dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+1",
  isoCode: "662"
}, {
  name: "Saint Martin (French part)",
  code: "MF",
  capital: "Marigot",
  region: "NA",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+590",
  isoCode: "663"
}, {
  name: "Saint Pierre and Miquelon",
  code: "PM",
  capital: "Saint-Pierre",
  region: "NA",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+508",
  isoCode: "666"
}, {
  name: "Saint Vincent and the Grenadines",
  code: "VC",
  capital: "Kingstown",
  region: "NA",
  currency: {
    code: "XCD",
    name: "East Caribbean dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+1",
  isoCode: "670"
}, {
  name: "Samoa",
  code: "WS",
  capital: "Apia",
  region: "OC",
  currency: {
    code: "WST",
    name: "Samoan tālā",
    symbol: "T"
  },
  language: {
    code: "sm",
    name: "Samoan"
  },
  dialling_code: "+685",
  isoCode: "882"
}, {
  name: "San Marino",
  code: "SM",
  capital: "City of San Marino",
  region: "EU",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "it",
    name: "Italian"
  },
  dialling_code: "+378",
  isoCode: "674"
}, {
  name: "São Tomé and Príncipe (São Tomé e Príncipe)",
  code: "ST",
  capital: "São Tomé",
  region: "AF",
  currency: {
    code: "STD",
    name: "São Tomé and Príncipe dobra",
    symbol: "Db"
  },
  language: {
    code: "pt",
    name: "Portuguese"
  },
  dialling_code: "+239",
  isoCode: "678"
}, {
  name: "Saudi Arabia (‫المملكة العربية السعودية‬‎)",
  code: "SA",
  capital: "Riyadh",
  region: "AS",
  currency: {
    code: "SAR",
    name: "Saudi riyal",
    symbol: "ر.س"
  },
  language: {
    code: "ar",
    name: "Arabic"
  },
  dialling_code: "+966",
  isoCode: "682"
}, {
  name: "Senegal (Sénégal)",
  code: "SN",
  capital: "Dakar",
  region: "AF",
  currency: {
    code: "XOF",
    name: "West African CFA franc",
    symbol: "Fr"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+221",
  isoCode: "686"
}, {
  name: "Serbia (Србија)",
  code: "RS",
  capital: "Belgrade",
  region: "EU",
  currency: {
    code: "RSD",
    name: "Serbian dinar",
    symbol: "дин."
  },
  language: {
    code: "sr",
    name: "Serbian"
  },
  dialling_code: "+381",
  isoCode: "688"
}, {
  name: "Seychelles",
  code: "SC",
  capital: "Victoria",
  region: "AF",
  currency: {
    code: "SCR",
    name: "Seychellois rupee",
    symbol: "₨"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+248",
  isoCode: "690"
}, {
  name: "Sierra Leone",
  code: "SL",
  capital: "Freetown",
  region: "AF",
  currency: {
    code: "SLL",
    name: "Sierra Leonean leone",
    symbol: "Le"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+232",
  isoCode: "694"
}, {
  name: "Singapore",
  code: "SG",
  capital: "Singapore",
  region: "AS",
  currency: {
    code: "SGD",
    name: "Singapore dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+65",
  isoCode: "702"
}, {
  name: "Slovakia (Slovensko)",
  code: "SK",
  capital: "Bratislava",
  region: "EU",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "sk",
    name: "Slovak"
  },
  dialling_code: "+421",
  isoCode: "703"
}, {
  name: "Slovenia (Slovenija)",
  code: "SI",
  capital: "Ljubljana",
  region: "EU",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "sl",
    name: "Slovene"
  },
  dialling_code: "+386",
  isoCode: "705"
}, {
  name: "Solomon Islands",
  code: "SB",
  capital: "Honiara",
  region: "OC",
  currency: {
    code: "SBD",
    name: "Solomon Islands dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+677",
  isoCode: "090"
}, {
  name: "Somalia (Soomaaliya)",
  code: "SO",
  capital: "Mogadishu",
  region: "AF",
  currency: {
    code: "SOS",
    name: "Somali shilling",
    symbol: "Sh"
  },
  language: {
    code: "ar",
    name: "Arabic"
  },
  dialling_code: "+252",
  isoCode: "706"
}, {
  name: "South Africa",
  code: "ZA",
  capital: "Pretoria",
  region: "AF",
  currency: {
    code: "ZAR",
    name: "South African rand",
    symbol: "R"
  },
  language: {
    code: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  },
  dialling_code: "+27",
  isoCode: "710"
}, {
  name: "South Korea (대한민국)",
  code: "KR",
  capital: "Seoul",
  region: "AS",
  currency: {
    code: "KRW",
    name: "South Korean won",
    symbol: "₩"
  },
  language: {
    code: "ko",
    name: "Korean"
  },
  dialling_code: "+82",
  isoCode: "410"
}, {
  name: "Spain",
  code: "ES",
  capital: "Madrid",
  region: "EU",
  currency: {
    code: "EUR",
    name: "Euro",
    symbol: "€"
  },
  language: {
    code: "es",
    name: "Spanish"
  },
  dialling_code: "+34",
  isoCode: "724"
}, {
  name: "Sri Lanka (ශ්‍රී ලංකාව)",
  code: "LK",
  capital: "Colombo",
  region: "AS",
  currency: {
    code: "LKR",
    name: "Sri Lankan rupee",
    symbol: "Rs"
  },
  language: {
    code: "si",
    iso639_2: "sin",
    name: "Sinhalese",
    nativeName: "සිංහල"
  },
  dialling_code: "+94",
  isoCode: "144"
}, {
  name: "Sudan (‫السودان‬‎)",
  code: "SD",
  capital: "Khartoum",
  region: "AF",
  currency: {
    code: "SDG",
    name: "Sudanese pound",
    symbol: "ج.س."
  },
  language: {
    code: "ar",
    name: "Arabic"
  },
  dialling_code: "+249",
  isoCode: "729"
}, {
  name: "Suriname",
  code: "SR",
  capital: "Paramaribo",
  region: "SA",
  currency: {
    code: "SRD",
    name: "Surinamese dollar",
    symbol: "$"
  },
  language: {
    code: "nl",
    name: "Dutch"
  },
  dialling_code: "+597",
  isoCode: "740"
}, {
  name: "Swaziland",
  code: "SZ",
  capital: "Lobamba",
  region: "AF",
  currency: {
    code: "SZL",
    name: "Swazi lilangeni",
    symbol: "L"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+268",
  isoCode: "748"
}, {
  name: "Sweden (Sverige)",
  code: "SE",
  capital: "Stockholm",
  region: "EU",
  currency: {
    code: "SEK",
    name: "Swedish krona",
    symbol: "kr"
  },
  language: {
    code: "sv",
    name: "Swedish"
  },
  dialling_code: "+46",
  isoCode: "752"
}, {
  name: "Switzerland (Schweiz)",
  code: "CH",
  capital: "Bern",
  region: "EU",
  currency: {
    code: "CHF",
    name: "Swiss franc",
    symbol: "Fr"
  },
  language: {
    code: "de",
    name: "German"
  },
  dialling_code: "+41",
  isoCode: "756"
}, {
  name: "Syria (‫سوريا‬‎)",
  code: "SY",
  capital: "Damascus",
  region: "AS",
  currency: {
    code: "SYP",
    name: "Syrian pound",
    symbol: "£"
  },
  language: {
    code: "ar",
    name: "Arabic"
  },
  dialling_code: "+963",
  isoCode: "760"
}, {
  name: "Taiwan (台灣)",
  code: "TW",
  capital: "Taipei",
  region: "AS",
  currency: {
    code: "TWD",
    name: "New Taiwan dollar",
    symbol: "$"
  },
  language: {
    code: "zh",
    name: "Chinese"
  },
  dialling_code: "+886",
  isoCode: "158"
}, {
  name: "Tajikistan",
  code: "TJ",
  capital: "Dushanbe",
  region: "AS",
  currency: {
    code: "TJS",
    name: "Tajikistani somoni",
    symbol: "ЅМ"
  },
  language: {
    code: "tg",
    name: "Tajik"
  },
  dialling_code: "+992",
  isoCode: "762"
}, {
  name: "Tanzania, United Republic of",
  code: "TZ",
  capital: "Dodoma",
  region: "AF",
  currency: {
    code: "TZS",
    name: "Tanzanian shilling",
    symbol: "Sh"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+255",
  isoCode: "834"
}, {
  name: "Thailand",
  code: "TH",
  capital: "Bangkok",
  region: "AS",
  currency: {
    code: "THB",
    name: "Thai baht",
    symbol: "฿"
  },
  language: {
    code: "th",
    name: "Thai"
  },
  dialling_code: "+66",
  isoCode: "764"
}, {
  name: "Timor-Leste",
  code: "TL",
  capital: "Dili",
  region: "AS",
  currency: {
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  },
  language: {
    code: "pt",
    name: "Portuguese"
  },
  dialling_code: "+670",
  isoCode: "626"
}, {
  name: "Togo",
  code: "TG",
  capital: "Lomé",
  region: "AF",
  currency: {
    code: "XOF",
    name: "West African CFA franc",
    symbol: "Fr"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+228",
  isoCode: "768"
}, {
  name: "Tokelau",
  code: "TK",
  capital: "Fakaofo",
  region: "OC",
  currency: {
    code: "NZD",
    name: "New Zealand dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+690",
  isoCode: "772"
}, {
  name: "Tonga",
  code: "TO",
  capital: "Nuku'alofa",
  region: "OC",
  currency: {
    code: "TOP",
    name: "Tongan paʻanga",
    symbol: "T$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+676",
  isoCode: "776"
}, {
  name: "Trinidad and Tobago",
  code: "TT",
  capital: "Port of Spain",
  region: "SA",
  currency: {
    code: "TTD",
    name: "Trinidad and Tobago dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+1",
  isoCode: "780"
}, {
  name: "Tunisia (‫تونس‬‎)",
  code: "TN",
  capital: "Tunis",
  region: "AF",
  currency: {
    code: "TND",
    name: "Tunisian dinar",
    symbol: "د.ت"
  },
  language: {
    code: "ar",
    name: "Arabic"
  },
  dialling_code: "+216",
  isoCode: "788"
}, {
  name: "Turkey (Türkiye)",
  code: "TR",
  capital: "Ankara",
  region: "AS",
  currency: {
    code: "TRY",
    name: "Turkish lira",
    symbol: null
  },
  language: {
    code: "tr",
    name: "Turkish"
  },
  dialling_code: "+90",
  isoCode: "792"
}, {
  name: "Turkmenistan",
  code: "TM",
  capital: "Ashgabat",
  region: "AS",
  currency: {
    code: "TMT",
    name: "Turkmenistan manat",
    symbol: "m"
  },
  language: {
    code: "tk",
    name: "Turkmen"
  },
  dialling_code: "+993",
  isoCode: "795"
}, {
  name: "Turks and Caicos Islands",
  code: "TC",
  capital: "Cockburn Town",
  region: "NA",
  currency: {
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+1",
  isoCode: "796"
}, {
  name: "Tuvalu",
  code: "TV",
  capital: "Funafuti",
  region: "OC",
  currency: {
    code: "AUD",
    name: "Australian dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+688",
  isoCode: "798"
}, {
  name: "Uganda",
  code: "UG",
  capital: "Kampala",
  region: "AF",
  currency: {
    code: "UGX",
    name: "Ugandan shilling",
    symbol: "Sh"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+256",
  isoCode: "800"
}, {
  name: "Ukraine (Україна)",
  code: "UA",
  capital: "Kyiv",
  region: "EU",
  currency: {
    code: "UAH",
    name: "Ukrainian hryvnia",
    symbol: "₴"
  },
  language: {
    code: "uk",
    name: "Ukrainian"
  },
  dialling_code: "+380",
  isoCode: "804"
}, {
  name: "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)",
  code: "AE",
  capital: "Abu Dhabi",
  region: "AS",
  currency: {
    code: "AED",
    name: "United Arab Emirates dirham",
    symbol: "د.إ"
  },
  language: {
    code: "ar",
    name: "Arabic"
  },
  dialling_code: "+971",
  isoCode: "784"
}, {
  name: "United Kingdom of Great Britain and Northern Ireland",
  code: "GB",
  capital: "London",
  region: "EU",
  currency: {
    code: "GBP",
    name: "British pound",
    symbol: "£"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+44",
  isoCode: "826"
}, {
  name: "United States of America",
  code: "US",
  capital: "Washington, D.C.",
  region: "NA",
  currency: {
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  },
  language: {
    code: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  },
  dialling_code: "+1",
  isoCode: "840"
}, {
  name: "Uruguay",
  code: "UY",
  capital: "Montevideo",
  region: "SA",
  currency: {
    code: "UYU",
    name: "Uruguayan peso",
    symbol: "$"
  },
  language: {
    code: "es",
    name: "Spanish"
  },
  dialling_code: "+598",
  isoCode: "858"
}, {
  name: "Uzbekistan (Oʻzbekiston)",
  code: "UZ",
  capital: "Tashkent",
  region: "AS",
  currency: {
    code: "UZS",
    name: "Uzbekistani so'm",
    symbol: null
  },
  language: {
    code: "uz",
    name: "Uzbek"
  },
  dialling_code: "+998",
  isoCode: "860"
}, {
  name: "Vanuatu",
  code: "VU",
  capital: "Port Vila",
  region: "OC",
  currency: {
    code: "VUV",
    name: "Vanuatu vatu",
    symbol: "Vt"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+678",
  isoCode: "548"
}, {
  name: "Venezuela (Bolivarian Republic of)",
  code: "VE",
  capital: "Caracas",
  region: "SA",
  currency: {
    code: "VEF",
    name: "Venezuelan bolívar",
    symbol: "Bs F"
  },
  language: {
    code: "es",
    name: "Spanish"
  },
  dialling_code: "+58",
  isoCode: "862"
}, {
  name: "Vietnam (Việt Nam)",
  code: "VN",
  capital: "Hanoi",
  region: "AS",
  currency: {
    code: "VND",
    name: "Vietnamese đồng",
    symbol: "₫"
  },
  language: {
    code: "vi",
    name: "Vietnamese"
  },
  dialling_code: "+84",
  isoCode: "704"
}, {
  name: "Wallis and Futuna (Wallis-et-Futuna)",
  code: "WF",
  capital: "Mata-Utu",
  region: "OC",
  currency: {
    code: "XPF",
    name: "CFP franc",
    symbol: "Fr"
  },
  language: {
    code: "fr",
    name: "French"
  },
  dialling_code: "+681",
  isoCode: "876"
}, {
  name: "Yemen (‫اليمن‬‎)",
  code: "YE",
  capital: "Sana'a",
  region: "AS",
  currency: {
    code: "YER",
    name: "Yemeni rial",
    symbol: "﷼"
  },
  language: {
    code: "ar",
    name: "Arabic"
  },
  dialling_code: "+967",
  isoCode: "887"
}, {
  name: "Zambia",
  code: "ZM",
  capital: "Lusaka",
  region: "AF",
  currency: {
    code: "ZMW",
    name: "Zambian kwacha",
    symbol: "ZK"
  },
  language: {
    code: "en",
    name: "English"
  },
  dialling_code: "+260",
  isoCode: "894"
}, {
  name: "Zimbabwe",
  code: "ZW",
  capital: "Harare",
  region: "AF",
  currency: {
    code: "BWP",
    name: "Botswana pula",
    symbol: "P"
  },
  language: {
    code: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  },
  dialling_code: "+263",
  isoCode: "716"
}];
var getAllowedCountries = (allowedCountryCodes) => {
  if (allowedCountryCodes.length > 0) {
    return COUNTRIES_LIST.filter((x) => allowedCountryCodes.includes(x.code?.toLowerCase()));
  }
  return COUNTRIES_LIST;
};
var getPreferredCountries = (countriesToFilter, preferredCountryCodes) => {
  if (preferredCountryCodes.length > 0) {
    return countriesToFilter.filter((x) => preferredCountryCodes.includes(x.code?.toLowerCase()));
  }
  return [];
};
var getFilteredCountries = (countriesToFilter, countryCodes) => {
  if (countryCodes.length > 0) {
    return countriesToFilter.filter((x) => !countryCodes.includes(x.code?.toLowerCase()));
  }
  return countriesToFilter;
};
var getCountriesBasedOnSearch = (countriesToSearch, searchText) => {
  return countriesToSearch.filter((x) => x.name?.toLowerCase()?.includes(searchText?.toLowerCase()) || x.dialling_code?.toLowerCase()?.includes(searchText?.toLowerCase()) || x.code?.toLowerCase()?.includes(searchText?.toLowerCase()));
};
var CountryListComponent = class _CountryListComponent {
  constructor() {
    this.search = viewChild("search");
    this.dropdownList = viewChild("dropdownList");
    this.searchText = model("");
    this.standardCountries = computed(() => getFilteredCountries(this.countriesExpectBlocked(), this.preferredCountryCodes()));
    this.filteredCountries = computed(() => getCountriesBasedOnSearch(this.standardCountries(), this.searchText()));
    this.selectedCountry = signal(null);
    this.displayList = signal(false);
    this.displaySearch = signal(false);
    this.focusedIndex = signal(0);
    this.selectedCountryCode = input("");
    this.placeholderText = input("Select country");
    this.preferredCountryCodes = input([]);
    this.allowedCountryCodes = input([]);
    this.blockedCountryCodes = input([]);
    this.selectedCountryConfig = input({});
    this.countryListConfig = input({});
    this.countryList = computed(() => getAllowedCountries(this.allowedCountryCodes()));
    this.countriesExpectBlocked = computed(() => getFilteredCountries(this.countryList(), this.blockedCountryCodes()));
    this.preferredCountryList = computed(() => {
      const result = getPreferredCountries(this.countriesExpectBlocked(), this.preferredCountryCodes());
      return getCountriesBasedOnSearch(result, this.searchText());
    });
    this.onCountryChange = output();
  }
  ngOnInit() {
    const selectedCountryCode = this.selectedCountryCode();
    if (selectedCountryCode) {
      const country = this.countriesExpectBlocked().find((x) => x.code === selectedCountryCode.toUpperCase());
      if (country) {
        this.selectedCountry.set(country);
        this.onCountryChange.emit(country);
      }
    }
  }
  changeCountry(country) {
    this.selectedCountry.set(country);
    this.displayList.set(false);
    this.onCountryChange.emit(country);
    this.displaySearch.set(false);
    this.searchText.set("");
    this.scrollToFocusedItem();
  }
  toggleList() {
    this.displayList.update((isDisplayed) => !isDisplayed);
    if (this.displayList() === true) {
      this.displaySearch.set(true);
      this.setFocusedIndex();
      this.scrollToFocusedItem();
      setTimeout(() => {
        this.search()?.nativeElement.focus();
      }, 10);
    }
  }
  onDocumentClick() {
    this.displayList.set(false);
    this.displaySearch.set(false);
    this.searchText.set("");
  }
  onKeydown(event) {
    const filteredCountriesLength = this.preferredCountryList().length + this.filteredCountries().length;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      this.focusedIndex.set((this.focusedIndex() + 1) % filteredCountriesLength);
      this.scrollToFocusedItem();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      this.focusedIndex.set((this.focusedIndex() - 1 + filteredCountriesLength) % filteredCountriesLength);
      this.scrollToFocusedItem();
    } else if (event.key === "Enter" && this.focusedIndex() !== -1) {
      event.preventDefault();
      this.changeCountry([...this.preferredCountryList(), ...this.filteredCountries()][this.focusedIndex()]);
    }
  }
  scrollToFocusedItem() {
    if (this.focusedIndex() >= 0 && this.dropdownList()) {
      const dropdownElement = this.dropdownList()?.nativeElement;
      const focusedItemElement = dropdownElement.children[this.focusedIndex()];
      const listItemOffsetTop = focusedItemElement.offsetTop;
      const listItemOffsetHeight = focusedItemElement.offsetHeight;
      const dropdownScrollTop = dropdownElement.scrollTop;
      const dropdownOffsetHeight = dropdownElement.offsetHeight;
      if (listItemOffsetTop < dropdownScrollTop) {
        dropdownElement.scrollTop = listItemOffsetTop;
      } else if (listItemOffsetTop + listItemOffsetHeight > dropdownScrollTop + dropdownOffsetHeight) {
        dropdownElement.scrollTop = listItemOffsetTop + listItemOffsetHeight - (dropdownOffsetHeight - 40);
      }
    }
  }
  onSearchTextChange() {
    this.focusedIndex.set(0);
  }
  setFocusedIndex() {
    if (this.selectedCountry()) {
      const selectedIndex = [...this.preferredCountryList(), ...this.filteredCountries()].findIndex((country) => country.code === this.selectedCountry()?.code);
      this.focusedIndex.set(selectedIndex);
    }
  }
  static {
    this.ɵfac = function CountryListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CountryListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CountryListComponent,
      selectors: [["lib-country-list"]],
      viewQuery: function CountryListComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx.search, _c0, 5);
          ɵɵviewQuerySignal(ctx.dropdownList, _c1, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(2);
        }
      },
      hostBindings: function CountryListComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function CountryListComponent_click_HostBindingHandler() {
            return ctx.onDocumentClick();
          }, false, ɵɵresolveDocument);
        }
      },
      inputs: {
        searchText: [1, "searchText"],
        selectedCountryCode: [1, "selectedCountryCode"],
        placeholderText: [1, "placeholderText"],
        preferredCountryCodes: [1, "preferredCountryCodes"],
        allowedCountryCodes: [1, "allowedCountryCodes"],
        blockedCountryCodes: [1, "blockedCountryCodes"],
        selectedCountryConfig: [1, "selectedCountryConfig"],
        countryListConfig: [1, "countryListConfig"]
      },
      outputs: {
        searchText: "searchTextChange",
        onCountryChange: "onCountryChange"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 15,
      vars: 7,
      consts: [["dropdownList", ""], ["search", ""], [1, "ipv_dropdown", 3, "click"], ["role", "combobox", "tabindex", "0", 1, "ipv_selected-item", 3, "click"], [2, "padding-right", "10px"], [1, "ipv_arrow"], ["autocomplete", "off", "tabindex", "0", 1, "ipv_search_box", 3, "filtered", "ngModel"], ["role", "listbox", "aria-label", "List of countries", 1, "ipv_country-list"], ["tabindex", "0", "role", "option", 1, "ipv_country", 3, "ipv_highlight"], ["role", "separator", "aria-disabled", "true", 1, "ipv_divider"], [1, "ipv_country"], [3, "class"], [1, "ipv_code-box"], [1, "ipv_country-name"], ["autocomplete", "off", "tabindex", "0", 1, "ipv_search_box", 3, "keydown", "ngModelChange", "ngModel"], ["tabindex", "0", "role", "option", 1, "ipv_country", 3, "click"], [1, "ipv_flag-box"], [1, "ipv_dial-code"]],
      template: function CountryListComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "div", 2);
          ɵɵlistener("click", function CountryListComponent_Template_div_click_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView($event.stopPropagation());
          });
          ɵɵelementStart(1, "div", 3);
          ɵɵlistener("click", function CountryListComponent_Template_div_click_1_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.toggleList());
          });
          ɵɵtemplate(2, CountryListComponent_Conditional_2_Template, 10, 9, "div", 4)(3, CountryListComponent_Conditional_3_Template, 3, 1, "div");
          ɵɵelement(4, "div", 5);
          ɵɵelementEnd();
          ɵɵtemplate(5, CountryListComponent_Conditional_5_Template, 2, 3, "input", 6);
          ɵɵelementStart(6, "div")(7, "ul", 7, 0);
          ɵɵrepeaterCreate(9, CountryListComponent_For_10_Template, 10, 11, "li", 8, _forTrack0);
          ɵɵtemplate(11, CountryListComponent_Conditional_11_Template, 1, 0, "li", 9);
          ɵɵrepeaterCreate(12, CountryListComponent_For_13_Template, 10, 11, "li", 8, _forTrack0);
          ɵɵtemplate(14, CountryListComponent_Conditional_14_Template, 2, 0, "li", 10);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          ɵɵadvance();
          ɵɵattribute("title", (tmp_1_0 = ctx.selectedCountry()) == null ? null : tmp_1_0.name);
          ɵɵadvance();
          ɵɵconditional((tmp_2_0 = ctx.selectedCountry()) ? 2 : 3, tmp_2_0);
          ɵɵadvance(3);
          ɵɵconditional(ctx.displaySearch() ? 5 : -1);
          ɵɵadvance();
          ɵɵclassProp("ipv_hide", !ctx.displayList());
          ɵɵadvance(3);
          ɵɵrepeater(ctx.preferredCountryList());
          ɵɵadvance(2);
          ɵɵconditional(ctx.preferredCountryList().length > 0 && ctx.filteredCountries().length > 0 ? 11 : -1);
          ɵɵadvance();
          ɵɵrepeater(ctx.filteredCountries());
          ɵɵadvance(2);
          ɵɵconditional(ctx.preferredCountryList().length === 0 && ctx.filteredCountries().length === 0 ? 14 : -1);
        }
      },
      dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CountryListComponent, [{
    type: Component,
    args: [{
      selector: "lib-country-list",
      imports: [FormsModule],
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "(document:click)": "onDocumentClick()"
      },
      template: '<div class="ipv_dropdown" (click)="$event.stopPropagation()">\r\n  <div\r\n    class="ipv_selected-item"\r\n    role="combobox"\r\n    tabindex="0"\r\n    [attr.title]="selectedCountry()?.name"\r\n    (click)="toggleList()">\r\n    @if (selectedCountry(); as countryValue) {\r\n      @if (!selectedCountryConfig().hideFlag) {\r\n        <div class="ipv_flag ipv_{{ countryValue.code.toLowerCase() }}"></div>\r\n      }\r\n      <div style="padding-right: 10px">\r\n        @if (!selectedCountryConfig().hideCode) {\r\n          <span class="ipv_code-box">{{ countryValue.code }}</span>\r\n        }\r\n        @if (!selectedCountryConfig().hideName) {\r\n          <span class="ipv_country-name">{{ countryValue.name }}</span>\r\n        }\r\n        @if (!selectedCountryConfig().hideDialCode) {\r\n          <span class="ipv_country-name">{{ countryValue.dialling_code }}</span>\r\n        }\r\n        @if (selectedCountryConfig().displayCurrencySymbol) {\r\n          <span class="ipv_country-name">{{\r\n            countryValue.currency?.symbol\r\n          }}</span>\r\n        }\r\n        @if (selectedCountryConfig().displayCurrencyCode) {\r\n          <span class="ipv_country-name">{{\r\n            countryValue.currency?.code\r\n          }}</span>\r\n        }\r\n        @if (selectedCountryConfig().displayCurrencyName) {\r\n          <span class="ipv_country-name">{{\r\n            countryValue.currency?.name\r\n          }}</span>\r\n        }\r\n        @if (selectedCountryConfig().displayLanguageCode) {\r\n          <span class="ipv_country-name">{{\r\n            countryValue.language?.code?.toUpperCase()\r\n          }}</span>\r\n        }\r\n        @if (selectedCountryConfig().displayLanguageName) {\r\n          <span class="ipv_country-name">{{\r\n            countryValue.language?.name\r\n          }}</span>\r\n        }\r\n      </div>\r\n    } @else {\r\n      <div><span>{{placeholderText()}}</span></div>\r\n    }\r\n\r\n    <div class="ipv_arrow"></div>\r\n  </div>\r\n  @if (displaySearch()) {\r\n    <input\r\n      class="ipv_search_box"\r\n      (keydown)="onKeydown($event)"\r\n      (ngModelChange)="onSearchTextChange()"\r\n      [class.filtered]="searchText().length > 0"\r\n      #search\r\n      autocomplete="off"\r\n      tabindex="0"\r\n      [(ngModel)]="searchText" />\r\n  }\r\n  <div [class.ipv_hide]="!displayList()">\r\n    <ul\r\n      class="ipv_country-list"\r\n      role="listbox"\r\n      aria-label="List of countries"\r\n      #dropdownList>\r\n      @for (\r\n        prefCountry of preferredCountryList();\r\n        track prefCountry.code;\r\n        let idx = $index\r\n      ) {\r\n        <li\r\n          class="ipv_country"\r\n          [class.ipv_highlight]="\r\n            prefCountry.code === selectedCountry()?.code ||\r\n            idx === focusedIndex()\r\n          "\r\n          tabindex="0"\r\n          role="option"\r\n          (click)="changeCountry(prefCountry)">\r\n          @if (!countryListConfig().hideFlag) {\r\n            <div class="ipv_flag-box">\r\n              <div\r\n                class="ipv_flag ipv_{{ prefCountry.code.toLowerCase() }}"></div>\r\n            </div>\r\n          }\r\n          @if (!countryListConfig().hideCode) {\r\n            <span class="ipv_code-box">{{ prefCountry?.code }}</span>\r\n          }\r\n          @if (!countryListConfig().hideName) {\r\n            <span class="ipv_country-name">{{ prefCountry.name }}</span>\r\n          }\r\n          @if (!countryListConfig().hideDialCode) {\r\n            <span class="ipv_dial-code">{{ prefCountry.dialling_code }}</span>\r\n          }\r\n          @if (countryListConfig().displayCurrencySymbol) {\r\n            <span class="ipv_country-name">{{\r\n              prefCountry.currency?.symbol\r\n            }}</span>\r\n          }\r\n          @if (countryListConfig().displayCurrencyCode) {\r\n            <span class="ipv_country-name">{{\r\n              prefCountry.currency?.code\r\n            }}</span>\r\n          }\r\n          @if (countryListConfig().displayCurrencyName) {\r\n            <span class="ipv_country-name">{{\r\n              prefCountry.currency?.name\r\n            }}</span>\r\n          }\r\n          @if (countryListConfig().displayLanguageCode) {\r\n            <span class="ipv_country-name">{{\r\n              prefCountry.language?.code?.toUpperCase()\r\n            }}</span>\r\n          }\r\n          @if (countryListConfig().displayLanguageName) {\r\n            <span class="ipv_country-name">{{\r\n              prefCountry.language?.name\r\n            }}</span>\r\n          }\r\n        </li>\r\n      }\r\n      @if (\r\n        preferredCountryList().length > 0 && filteredCountries().length > 0\r\n      ) {\r\n        <li class="ipv_divider" role="separator" aria-disabled="true"></li>\r\n      }\r\n      @for (\r\n        country of filteredCountries();\r\n        track country.code;\r\n        let idx = $index\r\n      ) {\r\n        <li\r\n          class="ipv_country"\r\n          [class.ipv_highlight]="\r\n            country.code === selectedCountry()?.code ||\r\n            idx + preferredCountryList().length === focusedIndex()\r\n          "\r\n          tabindex="0"\r\n          role="option"\r\n          (click)="changeCountry(country)">\r\n          @if (!countryListConfig().hideFlag) {\r\n            <div class="ipv_flag-box">\r\n              <div class="ipv_flag ipv_{{ country.code.toLowerCase() }}"></div>\r\n            </div>\r\n          }\r\n          @if (!countryListConfig().hideCode) {\r\n            <span class="ipv_code-box">{{ country?.code }}</span>\r\n          }\r\n          @if (!countryListConfig().hideName) {\r\n            <span class="ipv_country-name">{{ country.name }}</span>\r\n          }\r\n          @if (!countryListConfig().hideDialCode) {\r\n            <span class="ipv_dial-code">{{ country.dialling_code }}</span>\r\n          }\r\n          @if (countryListConfig().displayCurrencySymbol) {\r\n            <span class="ipv_country-name">{{ country.currency?.symbol }}</span>\r\n          }\r\n          @if (countryListConfig().displayCurrencyCode) {\r\n            <span class="ipv_country-name">{{ country.currency?.code }}</span>\r\n          }\r\n          @if (countryListConfig().displayCurrencyName) {\r\n            <span class="ipv_country-name">{{ country.currency?.name }}</span>\r\n          }\r\n          @if (countryListConfig().displayLanguageCode) {\r\n            <span class="ipv_country-name">{{\r\n              country.language?.code?.toUpperCase()\r\n            }}</span>\r\n          }\r\n          @if (countryListConfig().displayLanguageName) {\r\n            <span class="ipv_country-name">{{ country.language?.name }}</span>\r\n          }\r\n        </li>\r\n      }\r\n      @if (\r\n        preferredCountryList().length === 0 && filteredCountries().length === 0\r\n      ) {\r\n        <li class="ipv_country">No results found.</li>\r\n      }\r\n    </ul>\r\n  </div>\r\n</div>\r\n'
    }]
  }], null, null);
})();
var NgxCountriesDropdownModule = class _NgxCountriesDropdownModule {
  static {
    this.ɵfac = function NgxCountriesDropdownModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxCountriesDropdownModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgxCountriesDropdownModule,
      imports: [CountryListComponent],
      exports: [CountryListComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CountryListComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxCountriesDropdownModule, [{
    type: NgModule,
    args: [{
      imports: [CountryListComponent],
      exports: [CountryListComponent]
    }]
  }], null, null);
})();
export {
  CountryListComponent,
  NgxCountriesDropdownModule
};
//# sourceMappingURL=ngx-countries-dropdown.js.map
