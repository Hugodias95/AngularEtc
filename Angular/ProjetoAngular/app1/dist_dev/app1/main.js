"use strict";
(self["webpackChunkapp1"] = self["webpackChunkapp1"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _topo_topo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topo/topo.component */ 1793);
/* harmony import */ var _painel_painel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./painel/painel.component */ 8907);




function AppComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "app-painel", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("encerrarJogo", function AppComponent_div_1_Template_app_painel_encerrarJogo_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.encerrarJogo($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function AppComponent_ng_template_2_h3_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Fim de jogo, infelizmente voc\u00EA perdeu :S");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AppComponent_ng_template_2_h3_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Fim de jogo, voc\u00EA ganhou :D");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AppComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AppComponent_ng_template_2_h3_3_Template, 2, 0, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppComponent_ng_template_2_h3_4_Template, 2, 0, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_template_2_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.reiniciarJogo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Jogar novamente");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.tipoEncerramento === "Derrota");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.tipoEncerramento === "Vit\u00F3ria");
  }
}
class AppComponent {
  constructor() {
    this.jogoEmAndamento = true;
    this.tipoEncerramento = '';
  }
  encerrarJogo(tipo) {
    this.jogoEmAndamento = false;
    this.tipoEncerramento = tipo;
  }
  reiniciarJogo() {
    this.jogoEmAndamento = true;
    this.tipoEncerramento = '';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 4,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["fimDeJogo", ""], [3, "encerrarJogo"], [1, "container", 2, "margin-top", "50px"], [1, "row"], [1, "col"], ["style", "color: red", 4, "ngIf"], ["style", "color: green", 4, "ngIf"], [1, "btn", "btn-primary", "my-2", 3, "click"], [2, "color", "red"], [2, "color", "green"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-topo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_ng_template_2_Template, 7, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.jogoEmAndamento)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _topo_topo_component__WEBPACK_IMPORTED_MODULE_0__.TopoComponent, _painel_painel_component__WEBPACK_IMPORTED_MODULE_1__.PainelComponent],
  styles: ["p[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    color: red\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Y7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IHJlZFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _topo_topo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topo/topo.component */ 1793);
/* harmony import */ var _painel_painel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./painel/painel.component */ 8907);
/* harmony import */ var _tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tentativas/tentativas.component */ 6169);
/* harmony import */ var _progresso_progresso_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./progresso/progresso.component */ 4513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);








class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _topo_topo_component__WEBPACK_IMPORTED_MODULE_2__.TopoComponent, _painel_painel_component__WEBPACK_IMPORTED_MODULE_3__.PainelComponent, _tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_4__.TentativasComponent, _progresso_progresso_component__WEBPACK_IMPORTED_MODULE_5__.ProgressoComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();
_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetComponentScope"](_painel_painel_component__WEBPACK_IMPORTED_MODULE_3__.PainelComponent, [_tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_4__.TentativasComponent, _progresso_progresso_component__WEBPACK_IMPORTED_MODULE_5__.ProgressoComponent], []);

/***/ }),

/***/ 3526:
/*!***************************************!*\
  !*** ./src/app/painel/frases-mock.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FRASES": () => (/* binding */ FRASES)
/* harmony export */ });
const FRASES = [{
  fraseEN: 'I like to learn',
  frasePT: 'Eu gosto de aprender'
}, {
  fraseEN: 'I watch TV',
  frasePT: 'Eu assisto TV'
}, {
  fraseEN: 'How are you?',
  frasePT: 'Como está você?'
}, {
  fraseEN: 'The book is on the table',
  frasePT: 'O livro está sobre a mesa'
}];

/***/ }),

/***/ 8907:
/*!********************************************!*\
  !*** ./src/app/painel/painel.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PainelComponent": () => (/* binding */ PainelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _frases_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frases-mock */ 3526);



class PainelComponent {
  //cria um atributo associado à instância da classe event emitter e decore esse atributo para que ele possa ser exponto para componentes pai
  constructor() {
    this.frases = _frases_mock__WEBPACK_IMPORTED_MODULE_0__.FRASES;
    //String Interpolation
    this.instrucao = 'Traduza a frase';
    this.resposta = '';
    this.rodada = 0;
    this.rodadaFrase = this.frases[this.rodada];
    //Pega a frase baseada na posição do array frases, populado pelo mock de frases. No caso, ele começa com a posição da rodada, 0
    this.progresso = 0;
    this.tentativas = 3;
    this.encerrarJogo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.atualizaRodada();
  }
  ngOnDestroy() {}
  atualizaResposta(resposta) {
    this.resposta = resposta.target.value;
  }
  verificarResposta() {
    if (this.rodadaFrase.frasePT == this.resposta) {
      //Verificar se rodada é idêntico a 4
      if (this.rodada === 4) {
        this.encerrarJogo.emit('Vitória');
      }
      //trocar pergunta da rodada e atualiza a rodada
      this.atualizaRodada();
      //progresso
      this.progresso += 100 / this.frases.length;
    } else {
      alert('A tradução está incorreta');
      //diminuir a variável tentativas
      this.tentativas--;
      if (this.tentativas === -1) {
        this.encerrarJogo.emit('Derrota');
      }
    }
  }
  atualizaRodada() {
    this.rodadaFrase = this.frases[this.rodada];
    this.rodada++;
    //limpar resposta
    this.resposta = '';
  }
}
PainelComponent.ɵfac = function PainelComponent_Factory(t) {
  return new (t || PainelComponent)();
};
PainelComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PainelComponent,
  selectors: [["app-painel"]],
  outputs: {
    encerrarJogo: "encerrarJogo"
  },
  decls: 20,
  vars: 5,
  consts: [[1, "container", "py-3", "px-3", "my-3", "rounded", 2, "background", "#E9ECEF"], [1, "row"], [1, "col-sm-6"], [3, "progresso"], [3, "tentativas"], [1, "col"], [1, "form-group"], ["rows", "3", 1, "form-control", 3, "value", "input"], [1, "d-flex", "justify-content-end", "botaoVerificar"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
  template: function PainelComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "div", 1)(3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-progresso", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-tentativas", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1)(8, "div", 5)(9, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6)(14, "textarea", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function PainelComponent_Template_textarea_input_14_listener($event) {
        return ctx.atualizaResposta($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 1)(16, "div", 5)(17, "div", 8)(18, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PainelComponent_Template_button_click_18_listener() {
        return ctx.verificarResposta();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Verificar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("progresso", ctx.progresso);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tentativas", ctx.tentativas);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.instrucao);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.rodadaFrase.fraseEN);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.resposta);
    }
  },
  styles: [".botaoVerificar[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFpbmVsL3BhaW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLmJvdGFvVmVyaWZpY2FyIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4513:
/*!**************************************************!*\
  !*** ./src/app/progresso/progresso.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressoComponent": () => (/* binding */ ProgressoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ProgressoComponent {
  constructor() {
    this.progresso = 25;
  }
  //coloca o mesmo nome do atributo no html como variável
  ngOnInit() {}
}
ProgressoComponent.ɵfac = function ProgressoComponent_Factory(t) {
  return new (t || ProgressoComponent)();
};
ProgressoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProgressoComponent,
  selectors: [["app-progresso"]],
  inputs: {
    progresso: "progresso"
  },
  decls: 2,
  vars: 3,
  consts: [[1, "progress"]],
  template: function ProgressoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("progress-bar w-", ctx.progresso, "");
    }
  },
  styles: [".progress[_ngcontent-%COMP%] {\r\n    background: #EEF8DA;\r\n    border: solid 1px #99CE28;\r\n}\r\n\r\n.progress-bar[_ngcontent-%COMP%] {\r\n    background: #99CE28;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZ3Jlc3NvL3Byb2dyZXNzby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUVGOERBO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzk5Q0UyODtcclxufVxyXG5cclxuLnByb2dyZXNzLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTlDRTI4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2100:
/*!*****************************************!*\
  !*** ./src/app/shared/coracao.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Coracao": () => (/* binding */ Coracao)
/* harmony export */ });
class Coracao {
  constructor(cheio, urlCoracaoCheio = '<../../assets/coracao_cheio.png', urlCoracaoVazio = '<../../assets/coracao_vazio.png') {
    this.cheio = cheio;
    this.urlCoracaoCheio = urlCoracaoCheio;
    this.urlCoracaoVazio = urlCoracaoVazio;
  }
  exibeCoracao() {
    if (this.cheio) {
      return this.urlCoracaoCheio;
    } else {
      return this.urlCoracaoVazio;
    }
  }
}

/***/ }),

/***/ 6169:
/*!****************************************************!*\
  !*** ./src/app/tentativas/tentativas.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TentativasComponent": () => (/* binding */ TentativasComponent)
/* harmony export */ });
/* harmony import */ var _shared_coracao_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/coracao.model */ 2100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function TentativasComponent_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 2);
  }
  if (rf & 2) {
    const coracao_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", coracao_r1.exibeCoracao(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
class TentativasComponent {
  constructor() {
    //public coracaoVazio: string = '<../../assets/coracao_vazio.png'
    //public coracaoCheio: string = '<../../assets/coracao_cheio.png'
    //Property bind, atributo de um determinado elemento HTML seja estabelecido em uma variável do componente
    this.tentativas = 3;
    //Vai ser decorada com o valor recebido no momento da instância do componente tentativas no painel
    this.coracoes = [new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_0__.Coracao(true), new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_0__.Coracao(true), new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_0__.Coracao(true)];
    console.log(this.coracoes);
  }
  ngOnChanges() {
    //this.tentativas
    //compara com
    //this.coracoes.lenght
    if (this.tentativas !== this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas;
      this.coracoes[indice - 1].cheio = false;
    }
    console.log('tentativas recebidas do painel', this.tentativas);
  }
  ngOnInit() {}
}
TentativasComponent.ɵfac = function TentativasComponent_Factory(t) {
  return new (t || TentativasComponent)();
};
TentativasComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TentativasComponent,
  selectors: [["app-tentativas"]],
  inputs: {
    tentativas: "tentativas"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 1,
  consts: [[1, "d-flex", "justify-content-end"], ["class", "coracao", 3, "src", 4, "ngFor", "ngForOf"], [1, "coracao", 3, "src"]],
  template: function TentativasComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TentativasComponent_img_1_Template, 1, 1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.coracoes);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
  styles: [".coracao[_ngcontent-%COMP%] {\r\n    max-width:25px;\r\n    max-height:25px;\r\n    width: auto;\r\n    height: auto;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGVudGF0aXZhcy90ZW50YXRpdmFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiLmNvcmFjYW8ge1xyXG4gICAgbWF4LXdpZHRoOjI1cHg7XHJcbiAgICBtYXgtaGVpZ2h0OjI1cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1793:
/*!****************************************!*\
  !*** ./src/app/topo/topo.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopoComponent": () => (/* binding */ TopoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TopoComponent {
  constructor() {
    this.titulo = 'Aprendendo Inglês';
  }
}
TopoComponent.ɵfac = function TopoComponent_Factory(t) {
  return new (t || TopoComponent)();
};
TopoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TopoComponent,
  selectors: [["app-topo"]],
  decls: 4,
  vars: 1,
  consts: [[1, "navbar", "navbar-dark", "bg-inverse"], [1, "container-fluid"], [1, "navbar-brand", "mb-0", "h1"]],
  template: function TopoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
    }
  },
  styles: [".navbar[_ngcontent-%COMP%] {\r\n    background: #1cb0f6\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdG9wby90b3BvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMWNiMGY2XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map