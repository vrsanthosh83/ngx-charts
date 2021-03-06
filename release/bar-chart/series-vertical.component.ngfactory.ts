/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/bar-chart/series-vertical.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/animation/animation_transition';
import * as import10 from '@angular/core/src/animation/animation_sequence_player';
import * as import11 from '@angular/core/src/animation/animation_styles';
import * as import12 from '@angular/core/src/animation/animation_style_util';
import * as import13 from '@angular/core/src/animation/animation_keyframe';
import * as import14 from '@angular/core/src/animation/animation_player';
import * as import15 from '@angular/core/src/linker/view_container';
import * as import16 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import17 from '@angular/core/src/linker/template_ref';
import * as import18 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import19 from '@angular/common/src/directives/ng_for';
import * as import20 from '../../../src/bar-chart/bar.component';
import * as import21 from '../common/tooltip/tooltip.directive.ngfactory';
import * as import22 from './bar.component.ngfactory';
import * as import23 from '../../../src/common/tooltip/tooltip.service';
import * as import24 from '@angular/core/src/linker/element_ref';
import * as import25 from '@angular/core/src/zone/ng_zone';
import * as import26 from '../../../src/common/tooltip/tooltip.directive';
export class Wrapper_SeriesVerticalComponent {
  /*private*/ _eventHandler:Function;
  context:import0.SeriesVerticalComponent;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  subscription0:any;
  subscription1:any;
  subscription2:any;
  constructor() {
    this._changed = false;
    this._changes = {};
    this.context = new import0.SeriesVerticalComponent();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
    (this.subscription2 && this.subscription2.unsubscribe());
  }
  check_dims(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.dims = currValue;
      this._changes['dims'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_type(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.type = currValue;
      this._changes['type'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_series(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.series = currValue;
      this._changes['series'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_xScale(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.xScale = currValue;
      this._changes['xScale'] = new import1.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
    }
  }
  check_yScale(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.yScale = currValue;
      this._changes['yScale'] = new import1.SimpleChange(this._expr_4,currValue);
      this._expr_4 = currValue;
    }
  }
  check_colors(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.colors = currValue;
      this._changes['colors'] = new import1.SimpleChange(this._expr_5,currValue);
      this._expr_5 = currValue;
    }
  }
  check_gradient(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.gradient = currValue;
      this._changes['gradient'] = new import1.SimpleChange(this._expr_6,currValue);
      this._expr_6 = currValue;
    }
  }
  check_activeEntries(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_7,currValue))) {
      this._changed = true;
      this.context.activeEntries = currValue;
      this._changes['activeEntries'] = new import1.SimpleChange(this._expr_7,currValue);
      this._expr_7 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if (changed) {
      this.context.ngOnChanges(this._changes);
      this._changes = {};
    } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean,emit1:boolean,emit2:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.select.subscribe(_eventHandler.bind(view,'select'))); }
    if (emit1) { (this.subscription1 = this.context.activate.subscribe(_eventHandler.bind(view,'activate'))); }
    if (emit2) { (this.subscription2 = this.context.deactivate.subscribe(_eventHandler.bind(view,'deactivate'))); }
  }
}
var renderType_SeriesVerticalComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_SeriesVerticalComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.SeriesVerticalComponent>;
  _SeriesVerticalComponent_0_3:Wrapper_SeriesVerticalComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SeriesVerticalComponent_Host0,renderType_SeriesVerticalComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'g',new import3.InlineArray2(2,'ngx-charts-series-vertical',''),rootSelector,(null as any));
    this.compView_0 = new View_SeriesVerticalComponent0(this.viewUtils,this,0,this._el_0);
    this._SeriesVerticalComponent_0_3 = new Wrapper_SeriesVerticalComponent();
    this.compView_0.create(this._SeriesVerticalComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._SeriesVerticalComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.SeriesVerticalComponent) && (0 === requestNodeIndex))) { return this._SeriesVerticalComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._SeriesVerticalComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._SeriesVerticalComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const SeriesVerticalComponentNgFactory:import8.ComponentFactory<import0.SeriesVerticalComponent> = new import8.ComponentFactory<import0.SeriesVerticalComponent>('g[ngx-charts-series-vertical]',View_SeriesVerticalComponent_Host0,import0.SeriesVerticalComponent);
const styles_SeriesVerticalComponent:any[] = ([] as any[]);
var SeriesVerticalComponent_animationState_states:any = {
  '*': {},
  'void': {}
}
;
function SeriesVerticalComponent_animationState_factory(view:import2.AppView<any>,element:any,currentState:any,nextState:any):import9.AnimationTransition {
  var previousPlayers:any = view.animationContext.getAnimationPlayers(element,((nextState == 'void')? (null as any): 'animationState'));
  var collectedStyles:any = {};
  var player:any = (null as any);
  var totalTime:any = 0;
  var defaultStateStyles:any = SeriesVerticalComponent_animationState_states['*'];
  var startStateStyles:any = SeriesVerticalComponent_animationState_states[currentState];
  if ((startStateStyles == (null as any))) { (startStateStyles = defaultStateStyles); }
  var endStateStyles:any = SeriesVerticalComponent_animationState_states[nextState];
  if ((endStateStyles == (null as any))) { (endStateStyles = defaultStateStyles); }
  if (((player == (null as any)) && (true && (nextState == 'void')))) {
      player = new import10.AnimationSequencePlayer([view.renderer.animate(element,new import11.AnimationStyles(import12.collectAndResolveStyles(collectedStyles,[
        startStateStyles,
        {
          'opacity': '1',
          'transform': '*'
        }

      ]
      )),[
          new import13.AnimationKeyframe(0,new import11.AnimationStyles(import12.collectAndResolveStyles(collectedStyles,[{
            'opacity': '1',
            'transform': '*'
          }
        ]))),
          new import13.AnimationKeyframe(1,new import11.AnimationStyles(import12.collectAndResolveStyles(collectedStyles,[{
            'opacity': '0',
            'transform': 'scale(0)'
          }
        ])))
      ]
    ,500,0,(null as any),previousPlayers)]);
    totalTime = 500;
  }
  if ((player == (null as any))) { (player = new import14.NoOpAnimationPlayer()); }
  player.onDone(():void => {
    player.destroy();
    import12.renderStyles(element,view.renderer,import12.prepareFinalAnimationStyles(startStateStyles,endStateStyles));
  });
  new import10.AnimationSequencePlayer(previousPlayers).destroy();
  import12.renderStyles(element,view.renderer,import12.clearStyles(startStateStyles));
  view.animationContext.queueAnimation(element,'animationState',player);
  return new import9.AnimationTransition(player,currentState,nextState,totalTime);
}
var renderType_SeriesVerticalComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_SeriesVerticalComponent,{animationState: SeriesVerticalComponent_animationState_factory});
export class View_SeriesVerticalComponent0 extends import2.AppView<import0.SeriesVerticalComponent> {
  _text_0:any;
  _anchor_1:any;
  /*private*/ _vc_1:import15.ViewContainer;
  _TemplateRef_1_5:any;
  _NgFor_1_6:import16.Wrapper_NgFor;
  _text_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SeriesVerticalComponent0,renderType_SeriesVerticalComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckOnce);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_1 = new import15.ViewContainer(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import17.TemplateRef_(this,1,this._anchor_1);
    this._NgFor_1_6 = new import16.Wrapper_NgFor(this._vc_1.vcRef,this._TemplateRef_1_5,this.parentView.injectorGet(import18.IterableDiffers,this.parentIndex),this.ref);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._anchor_1,
      this._text_2
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import19.NgFor) && (1 === requestNodeIndex))) { return this._NgFor_1_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this.context.bars;
    this._NgFor_1_6.check_ngForOf(currVal_1_0_0,throwOnChange,false);
    const currVal_1_0_1:any = this.context.trackBy;
    this._NgFor_1_6.check_ngForTrackBy(currVal_1_0_1,throwOnChange,false);
    this._NgFor_1_6.ngDoCheck(this,this._anchor_1,throwOnChange);
    this._vc_1.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 1)) { return new View_SeriesVerticalComponent1(this.viewUtils,this,1,this._anchor_1,this._vc_1); }
    return (null as any);
  }
}
class View_SeriesVerticalComponent1 extends import2.AppView<any> {
  _el_0:any;
  /*private*/ _vc_0:import15.ViewContainer;
  compView_0:import2.AppView<import20.BarComponent>;
  _TooltipDirective_0_5:import21.Wrapper_TooltipDirective;
  _BarComponent_0_6:import22.Wrapper_BarComponent;
  _text_1:any;
  _el_2:any;
  /*private*/ _expr_7:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import15.ViewContainer) {
    super(View_SeriesVerticalComponent1,renderType_SeriesVerticalComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_7 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray4(4,'ngx-charts-bar','','ngx-tooltip',''),(null as any));
    this._vc_0 = new import15.ViewContainer(0,(null as any),this,this._el_0);
    this.compView_0 = new import22.View_BarComponent0(this.viewUtils,this,0,this._el_0);
    this._TooltipDirective_0_5 = new import21.Wrapper_TooltipDirective(this.parentView.injectorGet(import23.TooltipService,this.parentIndex),this._vc_0.vcRef,this.renderer,new import24.ElementRef(this._el_0),this.parentView.injectorGet(import25.NgZone,this.parentIndex));
    this._BarComponent_0_6 = new import22.Wrapper_BarComponent(new import24.ElementRef(this._el_0));
    this._text_1 = this.renderer.createText((null as any),'\n    ',(null as any));
    this.compView_0.create(this._BarComponent_0_6.context);
    this._el_2 = this.renderer.createTemplateAnchor((null as any),(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray16(16,'select',(null as any),'activate',(null as any),'deactivate',(null as any),'focusin',(null as any),'blur',(null as any),'mouseenter',(null as any),'mouseleave',(null as any),'click',(null as any)),this.eventHandler(this.handleEvent_0));
    this._BarComponent_0_6.subscribe(this,this.eventHandler(this.handleEvent_0),true,true,true);
    this.init(this._el_2,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import26.TooltipDirective) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._TooltipDirective_0_5.context; }
    if (((token === import20.BarComponent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._BarComponent_0_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_7:any = 'active';
    if (import3.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      var animationTransition_animationState:any = this.componentType.animations['animationState'](this,this._el_0,((this._expr_7 == import1.UNINITIALIZED)? 'void': this._expr_7),((currVal_7 == import1.UNINITIALIZED)? 'void': currVal_7));
      this._expr_7 = currVal_7;
    }
    const currVal_0_0_0:any = this.context.$implicit.tooltipText;
    this._TooltipDirective_0_5.check_tooltipTitle(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = 'top';
    this._TooltipDirective_0_5.check_tooltipPlacement(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = 'tooltip';
    this._TooltipDirective_0_5.check_tooltipType(currVal_0_0_2,throwOnChange,false);
    this._TooltipDirective_0_5.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_0_1_0:any = this.context.$implicit.color;
    this._BarComponent_0_6.check_fill(currVal_0_1_0,throwOnChange,false);
    const currVal_0_1_1:any = this.context.$implicit.data;
    this._BarComponent_0_6.check_data(currVal_0_1_1,throwOnChange,false);
    const currVal_0_1_2:any = this.context.$implicit.width;
    this._BarComponent_0_6.check_width(currVal_0_1_2,throwOnChange,false);
    const currVal_0_1_3:any = this.context.$implicit.height;
    this._BarComponent_0_6.check_height(currVal_0_1_3,throwOnChange,false);
    const currVal_0_1_4:any = this.context.$implicit.x;
    this._BarComponent_0_6.check_x(currVal_0_1_4,throwOnChange,false);
    const currVal_0_1_5:any = this.context.$implicit.y;
    this._BarComponent_0_6.check_y(currVal_0_1_5,throwOnChange,false);
    const currVal_0_1_6:any = 'vertical';
    this._BarComponent_0_6.check_orientation(currVal_0_1_6,throwOnChange,false);
    const currVal_0_1_7:any = this.context.$implicit.roundEdges;
    this._BarComponent_0_6.check_roundEdges(currVal_0_1_7,throwOnChange,false);
    const currVal_0_1_8:any = this.parentView.context.gradient;
    this._BarComponent_0_6.check_gradient(currVal_0_1_8,throwOnChange,false);
    const currVal_0_1_9:any = this.parentView.context.isActive(this.context.$implicit.data);
    this._BarComponent_0_6.check_isActive(currVal_0_1_9,throwOnChange,false);
    const currVal_0_1_10:any = this.context.$implicit.gradientStops;
    this._BarComponent_0_6.check_stops(currVal_0_1_10,throwOnChange,false);
    if (this._BarComponent_0_6.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this._vc_0.detectChangesInNestedViews(throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
    this.compView_0.destroy();
    this._TooltipDirective_0_5.ngOnDestroy();
    this._BarComponent_0_6.ngOnDestroy();
  }
  detachInternal():void {
    var animationTransition_animationState:any = this.componentType.animations['animationState'](this,this._el_0,this._expr_7,'void');
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._vc_0.nativeElement,ctx);
    this._vc_0.visitNestedViewRootNodes(cb,ctx);
    cb(this._el_2,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.compView_0.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._TooltipDirective_0_5.handleEvent(eventName,$event) && result);
    result = (this._BarComponent_0_6.handleEvent(eventName,$event) && result);
    if ((eventName == 'select')) {
      const pd_sub_0:any = ((<any>this.parentView.context.onClick($event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'activate')) {
      const pd_sub_1:any = ((<any>this.parentView.context.activate.emit($event)) !== false);
      result = (pd_sub_1 && result);
    }
    if ((eventName == 'deactivate')) {
      const pd_sub_2:any = ((<any>this.parentView.context.deactivate.emit($event)) !== false);
      result = (pd_sub_2 && result);
    }
    return result;
  }
}