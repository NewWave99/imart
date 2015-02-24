/*
 * jQuery JavaScript Library v1.8.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Thu Aug 30 2012 17:17:22 GMT-0400 (Eastern Daylight Time)
 */
(function(a2,aB){
    var w,af,o=a2.document,aI=a2.location,d=a2.navigator,bg=a2.jQuery,I=a2.$,am=Array.prototype.push,a4=Array.prototype.slice,aK=Array.prototype.indexOf,z=Object.prototype.toString,V=Object.prototype.hasOwnProperty,aO=String.prototype.trim,bG=function(e,bZ){
        return new bG.fn.init(e,bZ,w)
    },bx=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,aa=/\S/,aV=/\s+/,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,bo=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,a=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,bf=/^[\],:{}\s]*$/,bi=/(?:^|:|,)(?:\s*\[)+/g,bD=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,a0=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,bP=/^-ms-/,aU=/-([\da-z])/gi,N=function(e,bZ){
        return(bZ+"").toUpperCase()
    },aF=function(){
        if(o.addEventListener){
            o.removeEventListener("DOMContentLoaded",aF,false);
            bG.ready()
        }else{
            if(o.readyState==="complete"){
                o.detachEvent("onreadystatechange",aF);
                bG.ready()
            }
        }
    },Z={};

    bG.fn=bG.prototype={
        constructor:bG,
        init:function(e,b2,b1){
            var b0,b3,bZ,b4;
            if(!e){
                return this
            }
            if(e.nodeType){
                this.context=this[0]=e;
                this.length=1;
                return this
            }
            if(typeof e==="string"){
                if(e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3){
                    b0=[null,e,null]
                }else{
                    b0=bo.exec(e)
                }
                if(b0&&(b0[1]||!b2)){
                    if(b0[1]){
                        b2=b2 instanceof bG?b2[0]:b2;
                        b4=(b2&&b2.nodeType?b2.ownerDocument||b2:o);
                        e=bG.parseHTML(b0[1],b4,true);
                        if(a.test(b0[1])&&bG.isPlainObject(b2)){
                            this.attr.call(e,b2,true)
                        }
                        return bG.merge(this,e)
                    }else{
                        b3=o.getElementById(b0[2]);
                        if(b3&&b3.parentNode){
                            if(b3.id!==b0[2]){
                                return b1.find(e)
                            }
                            this.length=1;
                            this[0]=b3
                        }
                        this.context=o;
                        this.selector=e;
                        return this
                    }
                }else{
                    if(!b2||b2.jquery){
                        return(b2||b1).find(e)
                    }else{
                        return this.constructor(b2).find(e)
                    }
                }
            }else{
                if(bG.isFunction(e)){
                    return b1.ready(e)
                }
            }
            if(e.selector!==aB){
                this.selector=e.selector;
                this.context=e.context
            }
            return bG.makeArray(e,this)
        },
        selector:"",
        jquery:"1.8.1",
        length:0,
        size:function(){
            return this.length
        },
        toArray:function(){
            return a4.call(this)
        },
        get:function(e){
            return e==null?this.toArray():(e<0?this[this.length+e]:this[e])
        },
        pushStack:function(bZ,b1,e){
            var b0=bG.merge(this.constructor(),bZ);
            b0.prevObject=this;
            b0.context=this.context;
            if(b1==="find"){
                b0.selector=this.selector+(this.selector?" ":"")+e
            }else{
                if(b1){
                    b0.selector=this.selector+"."+b1+"("+e+")"
                }
            }
            return b0
        },
        each:function(bZ,e){
            return bG.each(this,bZ,e)
        },
        ready:function(e){
            bG.ready.promise().done(e);
            return this
        },
        eq:function(e){
            e=+e;
            return e===-1?this.slice(e):this.slice(e,e+1)
        },
        first:function(){
            return this.eq(0)
        },
        last:function(){
            return this.eq(-1)
        },
        slice:function(){
            return this.pushStack(a4.apply(this,arguments),"slice",a4.call(arguments).join(","))
        },
        map:function(e){
            return this.pushStack(bG.map(this,function(b0,bZ){
                return e.call(b0,bZ,b0)
            }))
        },
        end:function(){
            return this.prevObject||this.constructor(null)
        },
        push:am,
        sort:[].sort,
        splice:[].splice
    };

    bG.fn.init.prototype=bG.fn;
    bG.extend=bG.fn.extend=function(){
        var b7,b0,e,bZ,b4,b5,b3=arguments[0]||{},b2=1,b1=arguments.length,b6=false;
        if(typeof b3==="boolean"){
            b6=b3;
            b3=arguments[1]||{};
        
            b2=2
        }
        if(typeof b3!=="object"&&!bG.isFunction(b3)){
            b3={}
        }
        if(b1===b2){
            b3=this;
            --b2
        }
        for(;b2<b1;b2++){
            if((b7=arguments[b2])!=null){
                for(b0 in b7){
                    e=b3[b0];
                    bZ=b7[b0];
                    if(b3===bZ){
                        continue
                    }
                    if(b6&&bZ&&(bG.isPlainObject(bZ)||(b4=bG.isArray(bZ)))){
                        if(b4){
                            b4=false;
                            b5=e&&bG.isArray(e)?e:[]
                        }else{
                            b5=e&&bG.isPlainObject(e)?e:{}
                        }
                        b3[b0]=bG.extend(b6,b5,bZ)
                    }else{
                        if(bZ!==aB){
                            b3[b0]=bZ
                        }
                    }
                }
            }
        }
        return b3
    };

    bG.extend({
        noConflict:function(e){
            if(a2.$===bG){
                a2.$=I
            }
            if(e&&a2.jQuery===bG){
                a2.jQuery=bg
            }
            return bG
        },
        isReady:false,
        readyWait:1,
        holdReady:function(e){
            if(e){
                bG.readyWait++
            }else{
                bG.ready(true)
            }
        },
        ready:function(e){
            if(e===true?--bG.readyWait:bG.isReady){
                return
            }
            if(!o.body){
                return setTimeout(bG.ready,1)
            }
            bG.isReady=true;
            if(e!==true&&--bG.readyWait>0){
                return
            }
            af.resolveWith(o,[bG]);
            if(bG.fn.trigger){
                bG(o).trigger("ready").off("ready")
            }
        },
        isFunction:function(e){
            return bG.type(e)==="function"
        },
        isArray:Array.isArray||function(e){
            return bG.type(e)==="array"
        },
        isWindow:function(e){
            return e!=null&&e==e.window
        },
        isNumeric:function(e){
            return !isNaN(parseFloat(e))&&isFinite(e)
        },
        type:function(e){
            return e==null?String(e):Z[z.call(e)]||"object"
        },
        isPlainObject:function(b1){
            if(!b1||bG.type(b1)!=="object"||b1.nodeType||bG.isWindow(b1)){
                return false
            }
            try{
                if(b1.constructor&&!V.call(b1,"constructor")&&!V.call(b1.constructor.prototype,"isPrototypeOf")){
                    return false
                }
            }catch(b0){
                return false
            }
            var bZ;
            for(bZ in b1){}
            return bZ===aB||V.call(b1,bZ)
        },
        isEmptyObject:function(bZ){
            var e;
            for(e in bZ){
                return false
            }
            return true
        },
        error:function(e){
            throw new Error(e)
        },
        parseHTML:function(b1,b0,e){
            var bZ;
            if(!b1||typeof b1!=="string"){
                return null
            }
            if(typeof b0==="boolean"){
                e=b0;
                b0=0
            }
            b0=b0||o;
            if((bZ=a.exec(b1))){
                return[b0.createElement(bZ[1])]
            }
            bZ=bG.buildFragment([b1],b0,e?null:[]);
            return bG.merge([],(bZ.cacheable?bG.clone(bZ.fragment):bZ.fragment).childNodes)
        },
        parseJSON:function(e){
            if(!e||typeof e!=="string"){
                return null
            }
            e=bG.trim(e);
            if(a2.JSON&&a2.JSON.parse){
                return a2.JSON.parse(e)
            }
            if(bf.test(e.replace(bD,"@").replace(a0,"]").replace(bi,""))){
                return(new Function("return "+e))()
            }
            bG.error("Invalid JSON: "+e)
        },
        parseXML:function(b1){
            var bZ,b0;
            if(!b1||typeof b1!=="string"){
                return null
            }
            try{
                if(a2.DOMParser){
                    b0=new DOMParser();
                    bZ=b0.parseFromString(b1,"text/xml")
                }else{
                    bZ=new ActiveXObject("Microsoft.XMLDOM");
                    bZ.async="false";
                    bZ.loadXML(b1)
                }
            }catch(b2){
                bZ=aB
            }
            if(!bZ||!bZ.documentElement||bZ.getElementsByTagName("parsererror").length){
                bG.error("Invalid XML: "+b1)
            }
            return bZ
        },
        noop:function(){},
        globalEval:function(e){
            if(e&&aa.test(e)){
                (a2.execScript||function(bZ){
                    a2["eval"].call(a2,bZ)
                })(e)
            }
        },
        camelCase:function(e){
            return e.replace(bP,"ms-").replace(aU,N)
        },
        nodeName:function(bZ,e){
            return bZ.nodeName&&bZ.nodeName.toUpperCase()===e.toUpperCase()
        },
        each:function(b3,b4,b0){
            var bZ,b1=0,b2=b3.length,e=b2===aB||bG.isFunction(b3);
            if(b0){
                if(e){
                    for(bZ in b3){
                        if(b4.apply(b3[bZ],b0)===false){
                            break
                        }
                    }
                }else{
                    for(;b1<b2;){
                        if(b4.apply(b3[b1++],b0)===false){
                            break
                        }
                    }
                }
            }else{
                if(e){
                    for(bZ in b3){
                        if(b4.call(b3[bZ],bZ,b3[bZ])===false){
                            break
                        }
                    }
                }else{
                    for(;b1<b2;){
                        if(b4.call(b3[b1],b1,b3[b1++])===false){
                            break
                        }
                    }
                }
            }
            return b3
        },
        trim:aO&&!aO.call("\uFEFF\xA0")?function(e){
            return e==null?"":aO.call(e)
        }:function(e){
            return e==null?"":e.toString().replace(C,"")
        },
        makeArray:function(e,b0){
            var b1,bZ=b0||[];
            if(e!=null){
                b1=bG.type(e);
                if(e.length==null||b1==="string"||b1==="function"||b1==="regexp"||bG.isWindow(e)){
                    am.call(bZ,e)
                }else{
                    bG.merge(bZ,e)
                }
            }
            return bZ
        },
        inArray:function(b1,bZ,b0){
            var e;
            if(bZ){
                if(aK){
                    return aK.call(bZ,b1,b0)
                }
                e=bZ.length;
                b0=b0?b0<0?Math.max(0,e+b0):b0:0;
                for(;b0<e;b0++){
                    if(b0 in bZ&&bZ[b0]===b1){
                        return b0
                    }
                }
            }
            return -1
        },
        merge:function(b2,b0){
            var e=b0.length,b1=b2.length,bZ=0;
            if(typeof e==="number"){
                for(;bZ<e;bZ++){
                    b2[b1++]=b0[bZ]
                }
            }else{
                while(b0[bZ]!==aB){
                    b2[b1++]=b0[bZ++]
                }
            }
            b2.length=b1;
            return b2
        },
        grep:function(bZ,b4,e){
            var b3,b0=[],b1=0,b2=bZ.length;
            e=!!e;
            for(;b1<b2;b1++){
                b3=!!b4(bZ[b1],b1);
                if(e!==b3){
                    b0.push(bZ[b1])
                }
            }
            return b0
        },
        map:function(e,b5,b6){
            var b3,b4,b2=[],b0=0,bZ=e.length,b1=e instanceof bG||bZ!==aB&&typeof bZ==="number"&&((bZ>0&&e[0]&&e[bZ-1])||bZ===0||bG.isArray(e));
            if(b1){
                for(;b0<bZ;b0++){
                    b3=b5(e[b0],b0,b6);
                    if(b3!=null){
                        b2[b2.length]=b3
                    }
                }
            }else{
                for(b4 in e){
                    b3=b5(e[b4],b4,b6);
                    if(b3!=null){
                        b2[b2.length]=b3
                    }
                }
            }
            return b2.concat.apply([],b2)
        },
        guid:1,
        proxy:function(b2,b1){
            var b0,e,bZ;
            if(typeof b1==="string"){
                b0=b2[b1];
                b1=b2;
                b2=b0
            }
            if(!bG.isFunction(b2)){
                return aB
            }
            e=a4.call(arguments,2);
            bZ=function(){
                return b2.apply(b1,e.concat(a4.call(arguments)))
            };
        
            bZ.guid=b2.guid=b2.guid||bZ.guid||bG.guid++;
            return bZ
        },
        access:function(e,b4,b7,b5,b2,b8,b6){
            var b0,b3=b7==null,b1=0,bZ=e.length;
            if(b7&&typeof b7==="object"){
                for(b1 in b7){
                    bG.access(e,b4,b1,b7[b1],1,b8,b5)
                }
                b2=1
            }else{
                if(b5!==aB){
                    b0=b6===aB&&bG.isFunction(b5);
                    if(b3){
                        if(b0){
                            b0=b4;
                            b4=function(ca,b9,cb){
                                return b0.call(bG(ca),cb)
                            }
                        }else{
                            b4.call(e,b5);
                            b4=null
                        }
                    }
                    if(b4){
                        for(;b1<bZ;b1++){
                            b4(e[b1],b7,b0?b5.call(e[b1],b1,b4(e[b1],b7)):b5,b6)
                        }
                    }
                    b2=1
                }
            }
            return b2?e:b3?b4.call(e):bZ?b4(e[0],b7):b8
        },
        now:function(){
            return(new Date()).getTime()
        }
    });
    bG.ready.promise=function(b2){
        if(!af){
            af=bG.Deferred();
            if(o.readyState==="complete"){
                setTimeout(bG.ready,1)
            }else{
                if(o.addEventListener){
                    o.addEventListener("DOMContentLoaded",aF,false);
                    a2.addEventListener("load",bG.ready,false)
                }else{
                    o.attachEvent("onreadystatechange",aF);
                    a2.attachEvent("onload",bG.ready);
                    var b1=false;
                    try{
                        b1=a2.frameElement==null&&o.documentElement
                    }catch(b0){}
                    if(b1&&b1.doScroll){
                        (function bZ(){
                            if(!bG.isReady){
                                try{
                                    b1.doScroll("left")
                                }catch(b3){
                                    return setTimeout(bZ,50)
                                }
                                bG.ready()
                            }
                        })()
                    }
                }
            }
        }
        return af.promise(b2)
    };

    bG.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(bZ,e){
        Z["[object "+e+"]"]=e.toLowerCase()
    });
    w=bG(o);
    var bU={};

    function ac(bZ){
        var e=bU[bZ]={};
    
        bG.each(bZ.split(aV),function(b1,b0){
            e[b0]=true
        });
        return e
    }
    bG.Callbacks=function(b8){
        b8=typeof b8==="string"?(bU[b8]||ac(b8)):bG.extend({},b8);
        var b1,e,b2,b0,b3,b4,b5=[],b6=!b8.once&&[],bZ=function(b9){
            b1=b8.memory&&b9;
            e=true;
            b4=b0||0;
            b0=0;
            b3=b5.length;
            b2=true;
            for(;b5&&b4<b3;b4++){
                if(b5[b4].apply(b9[0],b9[1])===false&&b8.stopOnFalse){
                    b1=false;
                    break
                }
            }
            b2=false;
            if(b5){
                if(b6){
                    if(b6.length){
                        bZ(b6.shift())
                    }
                }else{
                    if(b1){
                        b5=[]
                    }else{
                        b7.disable()
                    }
                }
            }
        },b7={
            add:function(){
                if(b5){
                    var ca=b5.length;
                    (function b9(cb){
                        bG.each(cb,function(cd,cc){
                            var ce=bG.type(cc);
                            if(ce==="function"&&(!b8.unique||!b7.has(cc))){
                                b5.push(cc)
                            }else{
                                if(cc&&cc.length&&ce!=="string"){
                                    b9(cc)
                                }
                            }
                        })
                    })(arguments);
                    if(b2){
                        b3=b5.length
                    }else{
                        if(b1){
                            b0=ca;
                            bZ(b1)
                        }
                    }
                }
                return this
            },
            remove:function(){
                if(b5){
                    bG.each(arguments,function(cb,b9){
                        var ca;
                        while((ca=bG.inArray(b9,b5,ca))>-1){
                            b5.splice(ca,1);
                            if(b2){
                                if(ca<=b3){
                                    b3--
                                }
                                if(ca<=b4){
                                    b4--
                                }
                            }
                        }
                    })
                }
                return this
            },
            has:function(b9){
                return bG.inArray(b9,b5)>-1
            },
            empty:function(){
                b5=[];
                return this
            },
            disable:function(){
                b5=b6=b1=aB;
                return this
            },
            disabled:function(){
                return !b5
            },
            lock:function(){
                b6=aB;
                if(!b1){
                    b7.disable()
                }
                return this
            },
            locked:function(){
                return !b6
            },
            fireWith:function(ca,b9){
                b9=b9||[];
                b9=[ca,b9.slice?b9.slice():b9];
                if(b5&&(!e||b6)){
                    if(b2){
                        b6.push(b9)
                    }else{
                        bZ(b9)
                    }
                }
                return this
            },
            fire:function(){
                b7.fireWith(this,arguments);
                return this
            },
            fired:function(){
                return !!e
            }
        };

        return b7
    };

    bG.extend({
        Deferred:function(b0){
            var bZ=[["resolve","done",bG.Callbacks("once memory"),"resolved"],["reject","fail",bG.Callbacks("once memory"),"rejected"],["notify","progress",bG.Callbacks("memory")]],b1="pending",b2={
                state:function(){
                    return b1
                },
                always:function(){
                    e.done(arguments).fail(arguments);
                    return this
                },
                then:function(){
                    var b3=arguments;
                    return bG.Deferred(function(b4){
                        bG.each(bZ,function(b6,b5){
                            var b8=b5[0],b7=b3[b6];
                            e[b5[1]](bG.isFunction(b7)?function(){
                                var b9=b7.apply(this,arguments);
                                if(b9&&bG.isFunction(b9.promise)){
                                    b9.promise().done(b4.resolve).fail(b4.reject).progress(b4.notify)
                                }else{
                                    b4[b8+"With"](this===e?b4:this,[b9])
                                }
                            }:b4[b8])
                        });
                        b3=null
                    }).promise()
                },
                promise:function(b3){
                    return typeof b3==="object"?bG.extend(b3,b2):b2
                }
            },e={};

            b2.pipe=b2.then;
            bG.each(bZ,function(b4,b3){
                var b6=b3[2],b5=b3[3];
                b2[b3[1]]=b6.add;
                if(b5){
                    b6.add(function(){
                        b1=b5
                    },bZ[b4^1][2].disable,bZ[2][2].lock)
                }
                e[b3[0]]=b6.fire;
                e[b3[0]+"With"]=b6.fireWith
            });
            b2.promise(e);
            if(b0){
                b0.call(e,e)
            }
            return e
        },
        when:function(b2){
            var b0=0,b4=a4.call(arguments),e=b4.length,bZ=e!==1||(b2&&bG.isFunction(b2.promise))?e:0,b7=bZ===1?b2:bG.Deferred(),b1=function(b9,ca,b8){
                return function(cb){
                    ca[b9]=this;
                    b8[b9]=arguments.length>1?a4.call(arguments):cb;
                    if(b8===b6){
                        b7.notifyWith(ca,b8)
                    }else{
                        if(!(--bZ)){
                            b7.resolveWith(ca,b8)
                        }
                    }
                }
            },b6,b3,b5;
            if(e>1){
                b6=new Array(e);
                b3=new Array(e);
                b5=new Array(e);
                for(;b0<e;b0++){
                    if(b4[b0]&&bG.isFunction(b4[b0].promise)){
                        b4[b0].promise().done(b1(b0,b5,b4)).fail(b7.reject).progress(b1(b0,b3,b6))
                    }else{
                        --bZ
                    }
                }
            }
            if(!bZ){
                b7.resolveWith(b5,b4)
            }
            return b7.promise()
        }
    });
    bG.support=(function(){
        var cb,ca,b8,b9,b2,b7,b6,b4,b3,b1,bZ,b0=o.createElement("div");
        b0.setAttribute("className","t");
        b0.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        ca=b0.getElementsByTagName("*");
        b8=b0.getElementsByTagName("a")[0];
        b8.style.cssText="top:1px;float:left;opacity:.5";
        if(!ca||!ca.length||!b8){
            return{}
        }
        b9=o.createElement("select");
        b2=b9.appendChild(o.createElement("option"));
        b7=b0.getElementsByTagName("input")[0];
        cb={
            leadingWhitespace:(b0.firstChild.nodeType===3),
            tbody:!b0.getElementsByTagName("tbody").length,
            htmlSerialize:!!b0.getElementsByTagName("link").length,
            style:/top/.test(b8.getAttribute("style")),
            hrefNormalized:(b8.getAttribute("href")==="/a"),
            opacity:/^0.5/.test(b8.style.opacity),
            cssFloat:!!b8.style.cssFloat,
            checkOn:(b7.value==="on"),
            optSelected:b2.selected,
            getSetAttribute:b0.className!=="t",
            enctype:!!o.createElement("form").enctype,
            html5Clone:o.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",
            boxModel:(o.compatMode==="CSS1Compat"),
            submitBubbles:true,
            changeBubbles:true,
            focusinBubbles:false,
            deleteExpando:true,
            noCloneEvent:true,
            inlineBlockNeedsLayout:false,
            shrinkWrapBlocks:false,
            reliableMarginRight:true,
            boxSizingReliable:true,
            pixelPosition:false
        };

        b7.checked=true;
        cb.noCloneChecked=b7.cloneNode(true).checked;
        b9.disabled=true;
        cb.optDisabled=!b2.disabled;
        try{
            delete b0.test
        }catch(b5){
            cb.deleteExpando=false
        }
        if(!b0.addEventListener&&b0.attachEvent&&b0.fireEvent){
            b0.attachEvent("onclick",bZ=function(){
                cb.noCloneEvent=false
            });
            b0.cloneNode(true).fireEvent("onclick");
            b0.detachEvent("onclick",bZ)
        }
        b7=o.createElement("input");
        b7.value="t";
        b7.setAttribute("type","radio");
        cb.radioValue=b7.value==="t";
        b7.setAttribute("checked","checked");
        b7.setAttribute("name","t");
        b0.appendChild(b7);
        b6=o.createDocumentFragment();
        b6.appendChild(b0.lastChild);
        cb.checkClone=b6.cloneNode(true).cloneNode(true).lastChild.checked;
        cb.appendChecked=b7.checked;
        b6.removeChild(b7);
        b6.appendChild(b0);
        if(b0.attachEvent){
            for(b3 in {
                submit:true,
                change:true,
                focusin:true
            }){
                b4="on"+b3;
                b1=(b4 in b0);
                if(!b1){
                    b0.setAttribute(b4,"return;");
                    b1=(typeof b0[b4]==="function")
                }
                cb[b3+"Bubbles"]=b1
            }
        }
        bG(function(){
            var cc,cg,ce,cf,cd="padding:0;margin:0;border:0;display:block;overflow:hidden;",e=o.getElementsByTagName("body")[0];
            if(!e){
                return
            }
            cc=o.createElement("div");
            cc.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
            e.insertBefore(cc,e.firstChild);
            cg=o.createElement("div");
            cc.appendChild(cg);
            cg.innerHTML="<table><tr><td></td><td>t</td></tr></table>";
            ce=cg.getElementsByTagName("td");
            ce[0].style.cssText="padding:0;margin:0;border:0;display:none";
            b1=(ce[0].offsetHeight===0);
            ce[0].style.display="";
            ce[1].style.display="none";
            cb.reliableHiddenOffsets=b1&&(ce[0].offsetHeight===0);
            cg.innerHTML="";
            cg.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
            cb.boxSizing=(cg.offsetWidth===4);
            cb.doesNotIncludeMarginInBodyOffset=(e.offsetTop!==1);
            if(a2.getComputedStyle){
                cb.pixelPosition=(a2.getComputedStyle(cg,null)||{}).top!=="1%";
                cb.boxSizingReliable=(a2.getComputedStyle(cg,null)||{
                    width:"4px"
                }).width==="4px";
                cf=o.createElement("div");
                cf.style.cssText=cg.style.cssText=cd;
                cf.style.marginRight=cf.style.width="0";
                cg.style.width="1px";
                cg.appendChild(cf);
                cb.reliableMarginRight=!parseFloat((a2.getComputedStyle(cf,null)||{}).marginRight)
            }
            if(typeof cg.style.zoom!=="undefined"){
                cg.innerHTML="";
                cg.style.cssText=cd+"width:1px;padding:1px;display:inline;zoom:1";
                cb.inlineBlockNeedsLayout=(cg.offsetWidth===3);
                cg.style.display="block";
                cg.style.overflow="visible";
                cg.innerHTML="<div></div>";
                cg.firstChild.style.width="5px";
                cb.shrinkWrapBlocks=(cg.offsetWidth!==3);
                cc.style.zoom=1
            }
            e.removeChild(cc);
            cc=cg=ce=cf=null
        });
        b6.removeChild(b0);
        ca=b8=b9=b2=b7=b6=b0=null;
        return cb
    })();
    var bt=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,aL=/([A-Z])/g;
    bG.extend({
        cache:{},
        deletedIds:[],
        uuid:0,
        expando:"jQuery"+(bG.fn.jquery+Math.random()).replace(/\D/g,""),
        noData:{
            embed:true,
            object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet:true
        },
        hasData:function(e){
            e=e.nodeType?bG.cache[e[bG.expando]]:e[bG.expando];
            return !!e&&!O(e)
        },
        data:function(b1,bZ,b3,b2){
            if(!bG.acceptData(b1)){
                return
            }
            var b4,b6,b7=bG.expando,b5=typeof bZ==="string",b8=b1.nodeType,e=b8?bG.cache:b1,b0=b8?b1[b7]:b1[b7]&&b7;
            if((!b0||!e[b0]||(!b2&&!e[b0].data))&&b5&&b3===aB){
                return
            }
            if(!b0){
                if(b8){
                    b1[b7]=b0=bG.deletedIds.pop()||++bG.uuid
                }else{
                    b0=b7
                }
            }
            if(!e[b0]){
                e[b0]={};
        
                if(!b8){
                    e[b0].toJSON=bG.noop
                }
            }
            if(typeof bZ==="object"||typeof bZ==="function"){
                if(b2){
                    e[b0]=bG.extend(e[b0],bZ)
                }else{
                    e[b0].data=bG.extend(e[b0].data,bZ)
                }
            }
            b4=e[b0];
            if(!b2){
                if(!b4.data){
                    b4.data={}
                }
                b4=b4.data
            }
            if(b3!==aB){
                b4[bG.camelCase(bZ)]=b3
            }
            if(b5){
                b6=b4[bZ];
                if(b6==null){
                    b6=b4[bG.camelCase(bZ)]
                }
            }else{
                b6=b4
            }
            return b6
        },
        removeData:function(b1,bZ,b2){
            if(!bG.acceptData(b1)){
                return
            }
            var b5,b4,b3,b6=b1.nodeType,e=b6?bG.cache:b1,b0=b6?b1[bG.expando]:bG.expando;
            if(!e[b0]){
                return
            }
            if(bZ){
                b5=b2?e[b0]:e[b0].data;
                if(b5){
                    if(!bG.isArray(bZ)){
                        if(bZ in b5){
                            bZ=[bZ]
                        }else{
                            bZ=bG.camelCase(bZ);
                            if(bZ in b5){
                                bZ=[bZ]
                            }else{
                                bZ=bZ.split(" ")
                            }
                        }
                    }
                    for(b4=0,b3=bZ.length;b4<b3;b4++){
                        delete b5[bZ[b4]]
                    }
                    if(!(b2?O:bG.isEmptyObject)(b5)){
                        return
                    }
                }
            }
            if(!b2){
                delete e[b0].data;
                if(!O(e[b0])){
                    return
                }
            }
            if(b6){
                bG.cleanData([b1],true)
            }else{
                if(bG.support.deleteExpando||e!=e.window){
                    delete e[b0]
                }else{
                    e[b0]=null
                }
            }
        },
        _data:function(bZ,e,b0){
            return bG.data(bZ,e,b0,true)
        },
        acceptData:function(bZ){
            var e=bZ.nodeName&&bG.noData[bZ.nodeName.toLowerCase()];
            return !e||e!==true&&bZ.getAttribute("classid")===e
        }
    });
    bG.fn.extend({
        data:function(b7,b6){
            var b2,bZ,b5,e,b1,b0=this[0],b4=0,b3=null;
            if(b7===aB){
                if(this.length){
                    b3=bG.data(b0);
                    if(b0.nodeType===1&&!bG._data(b0,"parsedAttrs")){
                        b5=b0.attributes;
                        for(b1=b5.length;b4<b1;b4++){
                            e=b5[b4].name;
                            if(e.indexOf("data-")===0){
                                e=bG.camelCase(e.substring(5));
                                bv(b0,e,b3[e])
                            }
                        }
                        bG._data(b0,"parsedAttrs",true)
                    }
                }
                return b3
            }
            if(typeof b7==="object"){
                return this.each(function(){
                    bG.data(this,b7)
                })
            }
            b2=b7.split(".",2);
            b2[1]=b2[1]?"."+b2[1]:"";
            bZ=b2[1]+"!";
            return bG.access(this,function(b8){
                if(b8===aB){
                    b3=this.triggerHandler("getData"+bZ,[b2[0]]);
                    if(b3===aB&&b0){
                        b3=bG.data(b0,b7);
                        b3=bv(b0,b7,b3)
                    }
                    return b3===aB&&b2[1]?this.data(b2[0]):b3
                }
                b2[1]=b8;
                this.each(function(){
                    var b9=bG(this);
                    b9.triggerHandler("setData"+bZ,b2);
                    bG.data(this,b7,b8);
                    b9.triggerHandler("changeData"+bZ,b2)
                })
            },null,b6,arguments.length>1,null,false)
        },
        removeData:function(e){
            return this.each(function(){
                bG.removeData(this,e)
            })
        }
    });
    function bv(b1,b0,b2){
        if(b2===aB&&b1.nodeType===1){
            var bZ="data-"+b0.replace(aL,"-$1").toLowerCase();
            b2=b1.getAttribute(bZ);
            if(typeof b2==="string"){
                try{
                    b2=b2==="true"?true:b2==="false"?false:b2==="null"?null:+b2+""===b2?+b2:bt.test(b2)?bG.parseJSON(b2):b2
                }catch(b3){}
                bG.data(b1,b0,b2)
            }else{
                b2=aB
            }
        }
        return b2
    }
    function O(bZ){
        var e;
        for(e in bZ){
            if(e==="data"&&bG.isEmptyObject(bZ[e])){
                continue
            }
            if(e!=="toJSON"){
                return false
            }
        }
        return true
    }
    bG.extend({
        queue:function(b0,bZ,b1){
            var e;
            if(b0){
                bZ=(bZ||"fx")+"queue";
                e=bG._data(b0,bZ);
                if(b1){
                    if(!e||bG.isArray(b1)){
                        e=bG._data(b0,bZ,bG.makeArray(b1))
                    }else{
                        e.push(b1)
                    }
                }
                return e||[]
            }
        },
        dequeue:function(b3,b2){
            b2=b2||"fx";
            var bZ=bG.queue(b3,b2),b4=bZ.length,b1=bZ.shift(),e=bG._queueHooks(b3,b2),b0=function(){
                bG.dequeue(b3,b2)
            };
        
            if(b1==="inprogress"){
                b1=bZ.shift();
                b4--
            }
            if(b1){
                if(b2==="fx"){
                    bZ.unshift("inprogress")
                }
                delete e.stop;
                b1.call(b3,b0,e)
            }
            if(!b4&&e){
                e.empty.fire()
            }
        },
        _queueHooks:function(b0,bZ){
            var e=bZ+"queueHooks";
            return bG._data(b0,e)||bG._data(b0,e,{
                empty:bG.Callbacks("once memory").add(function(){
                    bG.removeData(b0,bZ+"queue",true);
                    bG.removeData(b0,e,true)
                })
            })
        }
    });
    bG.fn.extend({
        queue:function(e,bZ){
            var b0=2;
            if(typeof e!=="string"){
                bZ=e;
                e="fx";
                b0--
            }
            if(arguments.length<b0){
                return bG.queue(this[0],e)
            }
            return bZ===aB?this:this.each(function(){
                var b1=bG.queue(this,e,bZ);
                bG._queueHooks(this,e);
                if(e==="fx"&&b1[0]!=="inprogress"){
                    bG.dequeue(this,e)
                }
            })
        },
        dequeue:function(e){
            return this.each(function(){
                bG.dequeue(this,e)
            })
        },
        delay:function(bZ,e){
            bZ=bG.fx?bG.fx.speeds[bZ]||bZ:bZ;
            e=e||"fx";
            return this.queue(e,function(b1,b0){
                var b2=setTimeout(b1,bZ);
                b0.stop=function(){
                    clearTimeout(b2)
                }
            })
        },
        clearQueue:function(e){
            return this.queue(e||"fx",[])
        },
        promise:function(b0,b4){
            var bZ,b1=1,b5=bG.Deferred(),b3=this,e=this.length,b2=function(){
                if(!(--b1)){
                    b5.resolveWith(b3,[b3])
                }
            };
    
            if(typeof b0!=="string"){
                b4=b0;
                b0=aB
            }
            b0=b0||"fx";
            while(e--){
                bZ=bG._data(b3[e],b0+"queueHooks");
                if(bZ&&bZ.empty){
                    b1++;
                    bZ.empty.add(b2)
                }
            }
            b2();
            return b5.promise(b4)
        }
    });
    var a7,bV,n,bJ=/[\t\r\n]/g,ai=/\r/g,j=/^(?:button|input)$/i,aA=/^(?:button|input|object|select|textarea)$/i,D=/^a(?:rea|)$/i,M=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,bL=bG.support.getSetAttribute;
    bG.fn.extend({
        attr:function(e,bZ){
            return bG.access(this,bG.attr,e,bZ,arguments.length>1)
        },
        removeAttr:function(e){
            return this.each(function(){
                bG.removeAttr(this,e)
            })
        },
        prop:function(e,bZ){
            return bG.access(this,bG.prop,e,bZ,arguments.length>1)
        },
        removeProp:function(e){
            e=bG.propFix[e]||e;
            return this.each(function(){
                try{
                    this[e]=aB;
                    delete this[e]
                }catch(bZ){}
            })
        },
        addClass:function(b2){
            var b4,b0,bZ,b1,b3,b5,e;
            if(bG.isFunction(b2)){
                return this.each(function(b6){
                    bG(this).addClass(b2.call(this,b6,this.className))
                })
            }
            if(b2&&typeof b2==="string"){
                b4=b2.split(aV);
                for(b0=0,bZ=this.length;b0<bZ;b0++){
                    b1=this[b0];
                    if(b1.nodeType===1){
                        if(!b1.className&&b4.length===1){
                            b1.className=b2
                        }else{
                            b3=" "+b1.className+" ";
                            for(b5=0,e=b4.length;b5<e;b5++){
                                if(!~b3.indexOf(" "+b4[b5]+" ")){
                                    b3+=b4[b5]+" "
                                }
                            }
                            b1.className=bG.trim(b3)
                        }
                    }
                }
            }
            return this
        },
        removeClass:function(b4){
            var b1,b2,b3,b5,bZ,b0,e;
            if(bG.isFunction(b4)){
                return this.each(function(b6){
                    bG(this).removeClass(b4.call(this,b6,this.className))
                })
            }
            if((b4&&typeof b4==="string")||b4===aB){
                b1=(b4||"").split(aV);
                for(b0=0,e=this.length;b0<e;b0++){
                    b3=this[b0];
                    if(b3.nodeType===1&&b3.className){
                        b2=(" "+b3.className+" ").replace(bJ," ");
                        for(b5=0,bZ=b1.length;b5<bZ;b5++){
                            while(b2.indexOf(" "+b1[b5]+" ")>-1){
                                b2=b2.replace(" "+b1[b5]+" "," ")
                            }
                        }
                        b3.className=b4?bG.trim(b2):""
                    }
                }
            }
            return this
        },
        toggleClass:function(b1,bZ){
            var b0=typeof b1,e=typeof bZ==="boolean";
            if(bG.isFunction(b1)){
                return this.each(function(b2){
                    bG(this).toggleClass(b1.call(this,b2,this.className,bZ),bZ)
                })
            }
            return this.each(function(){
                if(b0==="string"){
                    var b4,b3=0,b2=bG(this),b5=bZ,b6=b1.split(aV);
                    while((b4=b6[b3++])){
                        b5=e?b5:!b2.hasClass(b4);
                        b2[b5?"addClass":"removeClass"](b4)
                    }
                }else{
                    if(b0==="undefined"||b0==="boolean"){
                        if(this.className){
                            bG._data(this,"__className__",this.className)
                        }
                        this.className=this.className||b1===false?"":bG._data(this,"__className__")||""
                    }
                }
            })
        },
        hasClass:function(e){
            var b1=" "+e+" ",b0=0,bZ=this.length;
            for(;b0<bZ;b0++){
                if(this[b0].nodeType===1&&(" "+this[b0].className+" ").replace(bJ," ").indexOf(b1)>-1){
                    return true
                }
            }
            return false
        },
        val:function(b1){
            var e,bZ,b2,b0=this[0];
            if(!arguments.length){
                if(b0){
                    e=bG.valHooks[b0.type]||bG.valHooks[b0.nodeName.toLowerCase()];
                    if(e&&"get" in e&&(bZ=e.get(b0,"value"))!==aB){
                        return bZ
                    }
                    bZ=b0.value;
                    return typeof bZ==="string"?bZ.replace(ai,""):bZ==null?"":bZ
                }
                return
            }
            b2=bG.isFunction(b1);
            return this.each(function(b4){
                var b5,b3=bG(this);
                if(this.nodeType!==1){
                    return
                }
                if(b2){
                    b5=b1.call(this,b4,b3.val())
                }else{
                    b5=b1
                }
                if(b5==null){
                    b5=""
                }else{
                    if(typeof b5==="number"){
                        b5+=""
                    }else{
                        if(bG.isArray(b5)){
                            b5=bG.map(b5,function(b6){
                                return b6==null?"":b6+""
                            })
                        }
                    }
                }
                e=bG.valHooks[this.type]||bG.valHooks[this.nodeName.toLowerCase()];
                if(!e||!("set" in e)||e.set(this,b5,"value")===aB){
                    this.value=b5
                }
            })
        }
    });
    bG.extend({
        valHooks:{
            option:{
                get:function(e){
                    var bZ=e.attributes.value;
                    return !bZ||bZ.specified?e.value:e.text
                }
            },
            select:{
                get:function(e){
                    var b4,bZ,b3,b1,b2=e.selectedIndex,b5=[],b6=e.options,b0=e.type==="select-one";
                    if(b2<0){
                        return null
                    }
                    bZ=b0?b2:0;
                    b3=b0?b2+1:b6.length;
                    for(;bZ<b3;bZ++){
                        b1=b6[bZ];
                        if(b1.selected&&(bG.support.optDisabled?!b1.disabled:b1.getAttribute("disabled")===null)&&(!b1.parentNode.disabled||!bG.nodeName(b1.parentNode,"optgroup"))){
                            b4=bG(b1).val();
                            if(b0){
                                return b4
                            }
                            b5.push(b4)
                        }
                    }
                    if(b0&&!b5.length&&b6.length){
                        return bG(b6[b2]).val()
                    }
                    return b5
                },
                set:function(bZ,b0){
                    var e=bG.makeArray(b0);
                    bG(bZ).find("option").each(function(){
                        this.selected=bG.inArray(bG(this).val(),e)>=0
                    });
                    if(!e.length){
                        bZ.selectedIndex=-1
                    }
                    return e
                }
            }
        },
        attrFn:{},
        attr:function(b4,b1,b5,b3){
            var b0,e,b2,bZ=b4.nodeType;
            if(!b4||bZ===3||bZ===8||bZ===2){
                return
            }
            if(b3&&bG.isFunction(bG.fn[b1])){
                return bG(b4)[b1](b5)
            }
            if(typeof b4.getAttribute==="undefined"){
                return bG.prop(b4,b1,b5)
            }
            b2=bZ!==1||!bG.isXMLDoc(b4);
            if(b2){
                b1=b1.toLowerCase();
                e=bG.attrHooks[b1]||(M.test(b1)?bV:a7)
            }
            if(b5!==aB){
                if(b5===null){
                    bG.removeAttr(b4,b1);
                    return
                }else{
                    if(e&&"set" in e&&b2&&(b0=e.set(b4,b5,b1))!==aB){
                        return b0
                    }else{
                        b4.setAttribute(b1,""+b5);
                        return b5
                    }
                }
            }else{
                if(e&&"get" in e&&b2&&(b0=e.get(b4,b1))!==null){
                    return b0
                }else{
                    b0=b4.getAttribute(b1);
                    return b0===null?aB:b0
                }
            }
        },
        removeAttr:function(b1,b3){
            var b2,b4,bZ,e,b0=0;
            if(b3&&b1.nodeType===1){
                b4=b3.split(aV);
                for(;b0<b4.length;b0++){
                    bZ=b4[b0];
                    if(bZ){
                        b2=bG.propFix[bZ]||bZ;
                        e=M.test(bZ);
                        if(!e){
                            bG.attr(b1,bZ,"")
                        }
                        b1.removeAttribute(bL?bZ:b2);
                        if(e&&b2 in b1){
                            b1[b2]=false
                        }
                    }
                }
            }
        },
        attrHooks:{
            type:{
                set:function(e,bZ){
                    if(j.test(e.nodeName)&&e.parentNode){
                        bG.error("type property can't be changed")
                    }else{
                        if(!bG.support.radioValue&&bZ==="radio"&&bG.nodeName(e,"input")){
                            var b0=e.value;
                            e.setAttribute("type",bZ);
                            if(b0){
                                e.value=b0
                            }
                            return bZ
                        }
                    }
                }
            },
            value:{
                get:function(bZ,e){
                    if(a7&&bG.nodeName(bZ,"button")){
                        return a7.get(bZ,e)
                    }
                    return e in bZ?bZ.value:null
                },
                set:function(bZ,b0,e){
                    if(a7&&bG.nodeName(bZ,"button")){
                        return a7.set(bZ,b0,e)
                    }
                    bZ.value=b0
                }
            }
        },
        propFix:{
            tabindex:"tabIndex",
            readonly:"readOnly",
            "for":"htmlFor",
            "class":"className",
            maxlength:"maxLength",
            cellspacing:"cellSpacing",
            cellpadding:"cellPadding",
            rowspan:"rowSpan",
            colspan:"colSpan",
            usemap:"useMap",
            frameborder:"frameBorder",
            contenteditable:"contentEditable"
        },
        prop:function(b3,b1,b4){
            var b0,e,b2,bZ=b3.nodeType;
            if(!b3||bZ===3||bZ===8||bZ===2){
                return
            }
            b2=bZ!==1||!bG.isXMLDoc(b3);
            if(b2){
                b1=bG.propFix[b1]||b1;
                e=bG.propHooks[b1]
            }
            if(b4!==aB){
                if(e&&"set" in e&&(b0=e.set(b3,b4,b1))!==aB){
                    return b0
                }else{
                    return(b3[b1]=b4)
                }
            }else{
                if(e&&"get" in e&&(b0=e.get(b3,b1))!==null){
                    return b0
                }else{
                    return b3[b1]
                }
            }
        },
        propHooks:{
            tabIndex:{
                get:function(bZ){
                    var e=bZ.getAttributeNode("tabindex");
                    return e&&e.specified?parseInt(e.value,10):aA.test(bZ.nodeName)||D.test(bZ.nodeName)&&bZ.href?0:aB
                }
            }
        }
    });
    bV={
        get:function(bZ,e){
            var b1,b0=bG.prop(bZ,e);
            return b0===true||typeof b0!=="boolean"&&(b1=bZ.getAttributeNode(e))&&b1.nodeValue!==false?e.toLowerCase():aB
        },
        set:function(bZ,b1,e){
            var b0;
            if(b1===false){
                bG.removeAttr(bZ,e)
            }else{
                b0=bG.propFix[e]||e;
                if(b0 in bZ){
                    bZ[b0]=true
                }
                bZ.setAttribute(e,e.toLowerCase())
            }
            return e
        }
    };

    if(!bL){
        n={
            name:true,
            id:true,
            coords:true
        };
    
        a7=bG.valHooks.button={
            get:function(b0,bZ){
                var e;
                e=b0.getAttributeNode(bZ);
                return e&&(n[bZ]?e.value!=="":e.specified)?e.value:aB
            },
            set:function(b0,b1,bZ){
                var e=b0.getAttributeNode(bZ);
                if(!e){
                    e=o.createAttribute(bZ);
                    b0.setAttributeNode(e)
                }
                return(e.value=b1+"")
            }
        };
    
        bG.each(["width","height"],function(bZ,e){
            bG.attrHooks[e]=bG.extend(bG.attrHooks[e],{
                set:function(b0,b1){
                    if(b1===""){
                        b0.setAttribute(e,"auto");
                        return b1
                    }
                }
            })
        });
        bG.attrHooks.contenteditable={
            get:a7.get,
            set:function(bZ,b0,e){
                if(b0===""){
                    b0="false"
                }
                a7.set(bZ,b0,e)
            }
        }
    }
    if(!bG.support.hrefNormalized){
        bG.each(["href","src","width","height"],function(bZ,e){
            bG.attrHooks[e]=bG.extend(bG.attrHooks[e],{
                get:function(b1){
                    var b0=b1.getAttribute(e,2);
                    return b0===null?aB:b0
                }
            })
        })
    }
    if(!bG.support.style){
        bG.attrHooks.style={
            get:function(e){
                return e.style.cssText.toLowerCase()||aB
            },
            set:function(e,bZ){
                return(e.style.cssText=""+bZ)
            }
        }
    }
    if(!bG.support.optSelected){
        bG.propHooks.selected=bG.extend(bG.propHooks.selected,{
            get:function(bZ){
                var e=bZ.parentNode;
                if(e){
                    e.selectedIndex;
                    if(e.parentNode){
                        e.parentNode.selectedIndex
                    }
                }
                return null
            }
        })
    }
    if(!bG.support.enctype){
        bG.propFix.enctype="encoding"
    }
    if(!bG.support.checkOn){
        bG.each(["radio","checkbox"],function(){
            bG.valHooks[this]={
                get:function(e){
                    return e.getAttribute("value")===null?"on":e.value
                }
            }
        })
    }
    bG.each(["radio","checkbox"],function(){
        bG.valHooks[this]=bG.extend(bG.valHooks[this],{
            set:function(e,bZ){
                if(bG.isArray(bZ)){
                    return(e.checked=bG.inArray(bG(e).val(),bZ)>=0)
                }
            }
        })
    });
    var bE=/^(?:textarea|input|select)$/i,br=/^([^\.]*|)(?:\.(.+)|)$/,ba=/(?:^|\s)hover(\.\S+|)\b/,a3=/^key/,bK=/^(?:mouse|contextmenu)|click/,by=/^(?:focusinfocus|focusoutblur)$/,aq=function(e){
        return bG.event.special.hover?e:e.replace(ba,"mouseenter$1 mouseleave$1")
    };
    
    bG.event={
        add:function(b1,b5,cc,b3,b2){
            var b6,b4,cd,cb,ca,b8,e,b9,bZ,b0,b7;
            if(b1.nodeType===3||b1.nodeType===8||!b5||!cc||!(b6=bG._data(b1))){
                return
            }
            if(cc.handler){
                bZ=cc;
                cc=bZ.handler;
                b2=bZ.selector
            }
            if(!cc.guid){
                cc.guid=bG.guid++
            }
            cd=b6.events;
            if(!cd){
                b6.events=cd={}
            }
            b4=b6.handle;
            if(!b4){
                b6.handle=b4=function(ce){
                    return typeof bG!=="undefined"&&(!ce||bG.event.triggered!==ce.type)?bG.event.dispatch.apply(b4.elem,arguments):aB
                };
            
                b4.elem=b1
            }
            b5=bG.trim(aq(b5)).split(" ");
            for(cb=0;cb<b5.length;cb++){
                ca=br.exec(b5[cb])||[];
                b8=ca[1];
                e=(ca[2]||"").split(".").sort();
                b7=bG.event.special[b8]||{};
        
                b8=(b2?b7.delegateType:b7.bindType)||b8;
                b7=bG.event.special[b8]||{};
        
                b9=bG.extend({
                    type:b8,
                    origType:ca[1],
                    data:b3,
                    handler:cc,
                    guid:cc.guid,
                    selector:b2,
                    namespace:e.join(".")
                },bZ);
                b0=cd[b8];
                if(!b0){
                    b0=cd[b8]=[];
                    b0.delegateCount=0;
                    if(!b7.setup||b7.setup.call(b1,b3,e,b4)===false){
                        if(b1.addEventListener){
                            b1.addEventListener(b8,b4,false)
                        }else{
                            if(b1.attachEvent){
                                b1.attachEvent("on"+b8,b4)
                            }
                        }
                    }
                }
                if(b7.add){
                    b7.add.call(b1,b9);
                    if(!b9.handler.guid){
                        b9.handler.guid=cc.guid
                    }
                }
                if(b2){
                    b0.splice(b0.delegateCount++,0,b9)
                }else{
                    b0.push(b9)
                }
                bG.event.global[b8]=true
            }
            b1=null
        },
        global:{},
        remove:function(b1,b6,cc,b2,b5){
            var cd,ce,b9,b0,bZ,b3,b4,cb,b8,e,ca,b7=bG.hasData(b1)&&bG._data(b1);
            if(!b7||!(cb=b7.events)){
                return
            }
            b6=bG.trim(aq(b6||"")).split(" ");
            for(cd=0;cd<b6.length;cd++){
                ce=br.exec(b6[cd])||[];
                b9=b0=ce[1];
                bZ=ce[2];
                if(!b9){
                    for(b9 in cb){
                        bG.event.remove(b1,b9+b6[cd],cc,b2,true)
                    }
                    continue
                }
                b8=bG.event.special[b9]||{};
        
                b9=(b2?b8.delegateType:b8.bindType)||b9;
                e=cb[b9]||[];
                b3=e.length;
                bZ=bZ?new RegExp("(^|\\.)"+bZ.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
                for(b4=0;b4<e.length;b4++){
                    ca=e[b4];
                    if((b5||b0===ca.origType)&&(!cc||cc.guid===ca.guid)&&(!bZ||bZ.test(ca.namespace))&&(!b2||b2===ca.selector||b2==="**"&&ca.selector)){
                        e.splice(b4--,1);
                        if(ca.selector){
                            e.delegateCount--
                        }
                        if(b8.remove){
                            b8.remove.call(b1,ca)
                        }
                    }
                }
                if(e.length===0&&b3!==e.length){
                    if(!b8.teardown||b8.teardown.call(b1,bZ,b7.handle)===false){
                        bG.removeEvent(b1,b9,b7.handle)
                    }
                    delete cb[b9]
                }
            }
            if(bG.isEmptyObject(cb)){
                delete b7.handle;
                bG.removeData(b1,"events",true)
            }
        },
        customEvent:{
            getData:true,
            setData:true,
            changeData:true
        },
        trigger:function(bZ,b6,b4,cd){
            if(b4&&(b4.nodeType===3||b4.nodeType===8)){
                return
            }
            var e,b1,b7,cb,b3,b2,b9,b8,b5,cc,ca=bZ.type||bZ,b0=[];
            if(by.test(ca+bG.event.triggered)){
                return
            }
            if(ca.indexOf("!")>=0){
                ca=ca.slice(0,-1);
                b1=true
            }
            if(ca.indexOf(".")>=0){
                b0=ca.split(".");
                ca=b0.shift();
                b0.sort()
            }
            if((!b4||bG.event.customEvent[ca])&&!bG.event.global[ca]){
                return
            }
            bZ=typeof bZ==="object"?bZ[bG.expando]?bZ:new bG.Event(ca,bZ):new bG.Event(ca);
            bZ.type=ca;
            bZ.isTrigger=true;
            bZ.exclusive=b1;
            bZ.namespace=b0.join(".");
            bZ.namespace_re=bZ.namespace?new RegExp("(^|\\.)"+b0.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
            b2=ca.indexOf(":")<0?"on"+ca:"";
            if(!b4){
                e=bG.cache;
                for(b7 in e){
                    if(e[b7].events&&e[b7].events[ca]){
                        bG.event.trigger(bZ,b6,e[b7].handle.elem,true)
                    }
                }
                return
            }
            bZ.result=aB;
            if(!bZ.target){
                bZ.target=b4
            }
            b6=b6!=null?bG.makeArray(b6):[];
            b6.unshift(bZ);
            b9=bG.event.special[ca]||{};

            if(b9.trigger&&b9.trigger.apply(b4,b6)===false){
                return
            }
            b5=[[b4,b9.bindType||ca]];
            if(!cd&&!b9.noBubble&&!bG.isWindow(b4)){
                cc=b9.delegateType||ca;
                cb=by.test(cc+ca)?b4:b4.parentNode;
                for(b3=b4;cb;cb=cb.parentNode){
                    b5.push([cb,cc]);
                    b3=cb
                }
                if(b3===(b4.ownerDocument||o)){
                    b5.push([b3.defaultView||b3.parentWindow||a2,cc])
                }
            }
            for(b7=0;b7<b5.length&&!bZ.isPropagationStopped();b7++){
                cb=b5[b7][0];
                bZ.type=b5[b7][1];
                b8=(bG._data(cb,"events")||{})[bZ.type]&&bG._data(cb,"handle");
                if(b8){
                    b8.apply(cb,b6)
                }
                b8=b2&&cb[b2];
                if(b8&&bG.acceptData(cb)&&b8.apply(cb,b6)===false){
                    bZ.preventDefault()
                }
            }
            bZ.type=ca;
            if(!cd&&!bZ.isDefaultPrevented()){
                if((!b9._default||b9._default.apply(b4.ownerDocument,b6)===false)&&!(ca==="click"&&bG.nodeName(b4,"a"))&&bG.acceptData(b4)){
                    if(b2&&b4[ca]&&((ca!=="focus"&&ca!=="blur")||bZ.target.offsetWidth!==0)&&!bG.isWindow(b4)){
                        b3=b4[b2];
                        if(b3){
                            b4[b2]=null
                        }
                        bG.event.triggered=ca;
                        b4[ca]();
                        bG.event.triggered=aB;
                        if(b3){
                            b4[b2]=b3
                        }
                    }
                }
            }
            return bZ.result
        },
        dispatch:function(e){
            e=bG.event.fix(e||a2.event);
            var b5,b4,ce,b8,b7,bZ,b6,cc,b1,cd,b2=((bG._data(this,"events")||{})[e.type]||[]),b3=b2.delegateCount,ca=[].slice.call(arguments),b0=!e.exclusive&&!e.namespace,b9=bG.event.special[e.type]||{},cb=[];
            ca[0]=e;
            e.delegateTarget=this;
            if(b9.preDispatch&&b9.preDispatch.call(this,e)===false){
                return
            }
            if(b3&&!(e.button&&e.type==="click")){
                for(ce=e.target;ce!=this;ce=ce.parentNode||this){
                    if(ce.disabled!==true||e.type!=="click"){
                        b7={};
                
                        b6=[];
                        for(b5=0;b5<b3;b5++){
                            cc=b2[b5];
                            b1=cc.selector;
                            if(b7[b1]===aB){
                                b7[b1]=bG(b1,this).index(ce)>=0
                            }
                            if(b7[b1]){
                                b6.push(cc)
                            }
                        }
                        if(b6.length){
                            cb.push({
                                elem:ce,
                                matches:b6
                            })
                        }
                    }
                }
            }
            if(b2.length>b3){
                cb.push({
                    elem:this,
                    matches:b2.slice(b3)
                })
            }
            for(b5=0;b5<cb.length&&!e.isPropagationStopped();b5++){
                bZ=cb[b5];
                e.currentTarget=bZ.elem;
                for(b4=0;b4<bZ.matches.length&&!e.isImmediatePropagationStopped();b4++){
                    cc=bZ.matches[b4];
                    if(b0||(!e.namespace&&!cc.namespace)||e.namespace_re&&e.namespace_re.test(cc.namespace)){
                        e.data=cc.data;
                        e.handleObj=cc;
                        b8=((bG.event.special[cc.origType]||{}).handle||cc.handler).apply(bZ.elem,ca);
                        if(b8!==aB){
                            e.result=b8;
                            if(b8===false){
                                e.preventDefault();
                                e.stopPropagation()
                            }
                        }
                    }
                }
            }
            if(b9.postDispatch){
                b9.postDispatch.call(this,e)
            }
            return e.result
        },
        props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks:{},
        keyHooks:{
            props:"char charCode key keyCode".split(" "),
            filter:function(bZ,e){
                if(bZ.which==null){
                    bZ.which=e.charCode!=null?e.charCode:e.keyCode
                }
                return bZ
            }
        },
        mouseHooks:{
            props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter:function(b1,b0){
                var b2,b3,e,bZ=b0.button,b4=b0.fromElement;
                if(b1.pageX==null&&b0.clientX!=null){
                    b2=b1.target.ownerDocument||o;
                    b3=b2.documentElement;
                    e=b2.body;
                    b1.pageX=b0.clientX+(b3&&b3.scrollLeft||e&&e.scrollLeft||0)-(b3&&b3.clientLeft||e&&e.clientLeft||0);
                    b1.pageY=b0.clientY+(b3&&b3.scrollTop||e&&e.scrollTop||0)-(b3&&b3.clientTop||e&&e.clientTop||0)
                }
                if(!b1.relatedTarget&&b4){
                    b1.relatedTarget=b4===b1.target?b0.toElement:b4
                }
                if(!b1.which&&bZ!==aB){
                    b1.which=(bZ&1?1:(bZ&2?3:(bZ&4?2:0)))
                }
                return b1
            }
        },
        fix:function(b0){
            if(b0[bG.expando]){
                return b0
            }
            var bZ,b3,e=b0,b1=bG.event.fixHooks[b0.type]||{},b2=b1.props?this.props.concat(b1.props):this.props;
            b0=bG.Event(e);
            for(bZ=b2.length;bZ;){
                b3=b2[--bZ];
                b0[b3]=e[b3]
            }
            if(!b0.target){
                b0.target=e.srcElement||o
            }
            if(b0.target.nodeType===3){
                b0.target=b0.target.parentNode
            }
            b0.metaKey=!!b0.metaKey;
            return b1.filter?b1.filter(b0,e):b0
        },
        special:{
            load:{
                noBubble:true
            },
            focus:{
                delegateType:"focusin"
            },
            blur:{
                delegateType:"focusout"
            },
            beforeunload:{
                setup:function(b0,bZ,e){
                    if(bG.isWindow(this)){
                        this.onbeforeunload=e
                    }
                },
                teardown:function(bZ,e){
                    if(this.onbeforeunload===e){
                        this.onbeforeunload=null
                    }
                }
            }
        },
        simulate:function(b0,b2,b1,bZ){
            var b3=bG.extend(new bG.Event(),b1,{
                type:b0,
                isSimulated:true,
                originalEvent:{}
            });
            if(bZ){
                bG.event.trigger(b3,null,b2)
            }else{
                bG.event.dispatch.call(b2,b3)
            }
            if(b3.isDefaultPrevented()){
                b1.preventDefault()
            }
        }
    };

    bG.event.handle=bG.event.dispatch;
    bG.removeEvent=o.removeEventListener?function(bZ,e,b0){
        if(bZ.removeEventListener){
            bZ.removeEventListener(e,b0,false)
        }
    }:function(b0,bZ,b1){
        var e="on"+bZ;
        if(b0.detachEvent){
            if(typeof b0[e]==="undefined"){
                b0[e]=null
            }
            b0.detachEvent(e,b1)
        }
    };

    bG.Event=function(bZ,e){
        if(!(this instanceof bG.Event)){
            return new bG.Event(bZ,e)
        }
        if(bZ&&bZ.type){
            this.originalEvent=bZ;
            this.type=bZ.type;
            this.isDefaultPrevented=(bZ.defaultPrevented||bZ.returnValue===false||bZ.getPreventDefault&&bZ.getPreventDefault())?R:X
        }else{
            this.type=bZ
        }
        if(e){
            bG.extend(this,e)
        }
        this.timeStamp=bZ&&bZ.timeStamp||bG.now();
        this[bG.expando]=true
    };
    
    function X(){
        return false
    }
    function R(){
        return true
    }
    bG.Event.prototype={
        preventDefault:function(){
            this.isDefaultPrevented=R;
            var bZ=this.originalEvent;
            if(!bZ){
                return
            }
            if(bZ.preventDefault){
                bZ.preventDefault()
            }else{
                bZ.returnValue=false
            }
        },
        stopPropagation:function(){
            this.isPropagationStopped=R;
            var bZ=this.originalEvent;
            if(!bZ){
                return
            }
            if(bZ.stopPropagation){
                bZ.stopPropagation()
            }
            bZ.cancelBubble=true
        },
        stopImmediatePropagation:function(){
            this.isImmediatePropagationStopped=R;
            this.stopPropagation()
        },
        isDefaultPrevented:X,
        isPropagationStopped:X,
        isImmediatePropagationStopped:X
    };

    bG.each({
        mouseenter:"mouseover",
        mouseleave:"mouseout"
    },function(bZ,e){
        bG.event.special[bZ]={
            delegateType:e,
            bindType:e,
            handle:function(b3){
                var b1,b5=this,b4=b3.relatedTarget,b2=b3.handleObj,b0=b2.selector;
                if(!b4||(b4!==b5&&!bG.contains(b5,b4))){
                    b3.type=b2.origType;
                    b1=b2.handler.apply(this,arguments);
                    b3.type=e
                }
                return b1
            }
        }
    });
    if(!bG.support.submitBubbles){
        bG.event.special.submit={
            setup:function(){
                if(bG.nodeName(this,"form")){
                    return false
                }
                bG.event.add(this,"click._submit keypress._submit",function(b1){
                    var b0=b1.target,bZ=bG.nodeName(b0,"input")||bG.nodeName(b0,"button")?b0.form:aB;
                    if(bZ&&!bG._data(bZ,"_submit_attached")){
                        bG.event.add(bZ,"submit._submit",function(e){
                            e._submit_bubble=true
                        });
                        bG._data(bZ,"_submit_attached",true)
                    }
                })
            },
            postDispatch:function(e){
                if(e._submit_bubble){
                    delete e._submit_bubble;
                    if(this.parentNode&&!e.isTrigger){
                        bG.event.simulate("submit",this.parentNode,e,true)
                    }
                }
            },
            teardown:function(){
                if(bG.nodeName(this,"form")){
                    return false
                }
                bG.event.remove(this,"._submit")
            }
        }
    }
    if(!bG.support.changeBubbles){
        bG.event.special.change={
            setup:function(){
                if(bE.test(this.nodeName)){
                    if(this.type==="checkbox"||this.type==="radio"){
                        bG.event.add(this,"propertychange._change",function(e){
                            if(e.originalEvent.propertyName==="checked"){
                                this._just_changed=true
                            }
                        });
                        bG.event.add(this,"click._change",function(e){
                            if(this._just_changed&&!e.isTrigger){
                                this._just_changed=false
                            }
                            bG.event.simulate("change",this,e,true)
                        })
                    }
                    return false
                }
                bG.event.add(this,"beforeactivate._change",function(b0){
                    var bZ=b0.target;
                    if(bE.test(bZ.nodeName)&&!bG._data(bZ,"_change_attached")){
                        bG.event.add(bZ,"change._change",function(e){
                            if(this.parentNode&&!e.isSimulated&&!e.isTrigger){
                                bG.event.simulate("change",this.parentNode,e,true)
                            }
                        });
                        bG._data(bZ,"_change_attached",true)
                    }
                })
            },
            handle:function(bZ){
                var e=bZ.target;
                if(this!==e||bZ.isSimulated||bZ.isTrigger||(e.type!=="radio"&&e.type!=="checkbox")){
                    return bZ.handleObj.handler.apply(this,arguments)
                }
            },
            teardown:function(){
                bG.event.remove(this,"._change");
                return !bE.test(this.nodeName)
            }
        }
    }
    if(!bG.support.focusinBubbles){
        bG.each({
            focus:"focusin",
            blur:"focusout"
        },function(b1,e){
            var bZ=0,b0=function(b2){
                bG.event.simulate(e,b2.target,bG.event.fix(b2),true)
            };
            
            bG.event.special[e]={
                setup:function(){
                    if(bZ++===0){
                        o.addEventListener(b1,b0,true)
                    }
                },
                teardown:function(){
                    if(--bZ===0){
                        o.removeEventListener(b1,b0,true)
                    }
                }
            }
        })
    }
    bG.fn.extend({
        on:function(b0,e,b3,b2,bZ){
            var b4,b1;
            if(typeof b0==="object"){
                if(typeof e!=="string"){
                    b3=b3||e;
                    e=aB
                }
                for(b1 in b0){
                    this.on(b1,e,b3,b0[b1],bZ)
                }
                return this
            }
            if(b3==null&&b2==null){
                b2=e;
                b3=e=aB
            }else{
                if(b2==null){
                    if(typeof e==="string"){
                        b2=b3;
                        b3=aB
                    }else{
                        b2=b3;
                        b3=e;
                        e=aB
                    }
                }
            }
            if(b2===false){
                b2=X
            }else{
                if(!b2){
                    return this
                }
            }
            if(bZ===1){
                b4=b2;
                b2=function(b5){
                    bG().off(b5);
                    return b4.apply(this,arguments)
                };
        
                b2.guid=b4.guid||(b4.guid=bG.guid++)
            }
            return this.each(function(){
                bG.event.add(this,b0,b2,b3,e)
            })
        },
        one:function(bZ,e,b1,b0){
            return this.on(bZ,e,b1,b0,1)
        },
        off:function(b0,e,b2){
            var bZ,b1;
            if(b0&&b0.preventDefault&&b0.handleObj){
                bZ=b0.handleObj;
                bG(b0.delegateTarget).off(bZ.namespace?bZ.origType+"."+bZ.namespace:bZ.origType,bZ.selector,bZ.handler);
                return this
            }
            if(typeof b0==="object"){
                for(b1 in b0){
                    this.off(b1,e,b0[b1])
                }
                return this
            }
            if(e===false||typeof e==="function"){
                b2=e;
                e=aB
            }
            if(b2===false){
                b2=X
            }
            return this.each(function(){
                bG.event.remove(this,b0,b2,e)
            })
        },
        bind:function(e,b0,bZ){
            return this.on(e,null,b0,bZ)
        },
        unbind:function(e,bZ){
            return this.off(e,null,bZ)
        },
        live:function(e,b0,bZ){
            bG(this.context).on(e,this.selector,b0,bZ);
            return this
        },
        die:function(e,bZ){
            bG(this.context).off(e,this.selector||"**",bZ);
            return this
        },
        delegate:function(e,bZ,b1,b0){
            return this.on(bZ,e,b1,b0)
        },
        undelegate:function(e,bZ,b0){
            return arguments.length==1?this.off(e,"**"):this.off(bZ,e||"**",b0)
        },
        trigger:function(e,bZ){
            return this.each(function(){
                bG.event.trigger(e,bZ,this)
            })
        },
        triggerHandler:function(e,bZ){
            if(this[0]){
                return bG.event.trigger(e,bZ,this[0],true)
            }
        },
        toggle:function(b1){
            var bZ=arguments,e=b1.guid||bG.guid++,b0=0,b2=function(b3){
                var b4=(bG._data(this,"lastToggle"+b1.guid)||0)%b0;
                bG._data(this,"lastToggle"+b1.guid,b4+1);
                b3.preventDefault();
                return bZ[b4].apply(this,arguments)||false
            };
        
            b2.guid=e;
            while(b0<bZ.length){
                bZ[b0++].guid=e
            }
            return this.click(b2)
        },
        hover:function(e,bZ){
            return this.mouseenter(e).mouseleave(bZ||e)
        }
    });
    bG.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(bZ,e){
        bG.fn[e]=function(b1,b0){
            if(b0==null){
                b0=b1;
                b1=null
            }
            return arguments.length>0?this.on(e,null,b1,b0):this.trigger(e)
        };
        
        if(a3.test(e)){
            bG.event.fixHooks[e]=bG.event.keyHooks
        }
        if(bK.test(e)){
            bG.event.fixHooks[e]=bG.event.mouseHooks
        }
    });
    /*
 * Sizzle CSS Selector Engine
 *  Copyright 2012 jQuery Foundation and other contributors
 *  Released under the MIT license
 *  http://sizzlejs.com/
 */
    (function(cM,cf){
        var cn,cR,b9,cE,b0,cj,cv,cc,ce,cb,b8=true,cr="undefined",cU=("sizcache"+Math.random()).replace(".",""),b7=cM.document,ca=b7.documentElement,cd=0,ci=[].slice,cQ=[].push,cW=function(e,c1){
            e[cU]=c1||true;
            return e
        },cZ=function(){
            var e={},c1=[];
            return cW(function(c2,c3){
                if(c1.push(c2)>cE.cacheLength){
                    delete e[c1.shift()]
                }
                return(e[c2]=c3)
            },e)
        },cO=cZ(),cP=cZ(),ck=cZ(),cu="[\\x20\\t\\r\\n\\f]",ch="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",cg=ch.replace("w","w#"),cY="([*^$|!~]?=)",cJ="\\["+cu+"*("+ch+")"+cu+"*(?:"+cY+cu+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+cg+")|)|)"+cu+"*\\]",c0=":("+ch+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+cJ+")|[^:]|\\\\.)*|.*))\\)|)",cw=":(nth|eq|gt|lt|first|last|even|odd)(?:\\(((?:-\\d)?\\d*)\\)|)(?=[^-]|$)",cS=new RegExp("^"+cu+"+|((?:^|[^\\\\])(?:\\\\.)*)"+cu+"+$","g"),b4=new RegExp("^"+cu+"*,"+cu+"*"),cB=new RegExp("^"+cu+"*([\\x20\\t\\r\\n\\f>+~])"+cu+"*"),cG=new RegExp(c0),cI=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,cz=/^:not/,cL=/[\x20\t\r\n\f]*[+~]/,cV=/:not\($/,co=/h\d/i,cH=/input|select|textarea|button/i,cp=/\\(?!\\)/g,cA={
            ID:new RegExp("^#("+ch+")"),
            CLASS:new RegExp("^\\.("+ch+")"),
            NAME:new RegExp("^\\[name=['\"]?("+ch+")['\"]?\\]"),
            TAG:new RegExp("^("+ch.replace("w","w*")+")"),
            ATTR:new RegExp("^"+cJ),
            PSEUDO:new RegExp("^"+c0),
            CHILD:new RegExp("^:(only|nth|last|first)-child(?:\\("+cu+"*(even|odd|(([+-]|)(\\d*)n|)"+cu+"*(?:([+-]|)"+cu+"*(\\d+)|))"+cu+"*\\)|)","i"),
            POS:new RegExp(cw,"ig"),
            needsContext:new RegExp("^"+cu+"*[>+~]|"+cw,"i")
        },cD=function(c1){
            var c3=b7.createElement("div");
            try{
                return c1(c3)
            }catch(c2){
                return false
            }finally{
                c3=null
            }
        },b6=cD(function(e){
            e.appendChild(b7.createComment(""));
            return !e.getElementsByTagName("*").length
        }),cy=cD(function(e){
            e.innerHTML="<a href='#'></a>";
            return e.firstChild&&typeof e.firstChild.getAttribute!==cr&&e.firstChild.getAttribute("href")==="#"
        }),cm=cD(function(c1){
            c1.innerHTML="<select></select>";
            var e=typeof c1.lastChild.getAttribute("multiple");
            return e!=="boolean"&&e!=="string"
        }),cx=cD(function(e){
            e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";
            if(!e.getElementsByClassName||!e.getElementsByClassName("e").length){
                return false
            }
            e.lastChild.className="e";
            return e.getElementsByClassName("e").length===2
        }),bZ=cD(function(c1){
            c1.id=cU+0;
            c1.innerHTML="<a name='"+cU+"'></a><div name='"+cU+"'></div>";
            ca.insertBefore(c1,ca.firstChild);
            var e=b7.getElementsByName&&b7.getElementsByName(cU).length===2+b7.getElementsByName(cU+0).length;
            b9=!b7.getElementById(cU);
            ca.removeChild(c1);
            return e
        });
        try{
            ci.call(ca.childNodes,0)[0].nodeType
        }catch(cX){
            ci=function(c1){
                var c2,e=[];
                for(;(c2=this[c1]);c1++){
                    e.push(c2)
                }
                return e
            }
        }
        function cK(c3,e,c5,c8){
            c5=c5||[];
            e=e||b7;
            var c6,c1,c7,c2,c4=e.nodeType;
            if(c4!==1&&c4!==9){
                return[]
            }
            if(!c3||typeof c3!=="string"){
                return c5
            }
            c7=cj(e);
            if(!c7&&!c8){
                if((c6=cI.exec(c3))){
                    if((c2=c6[1])){
                        if(c4===9){
                            c1=e.getElementById(c2);
                            if(c1&&c1.parentNode){
                                if(c1.id===c2){
                                    c5.push(c1);
                                    return c5
                                }
                            }else{
                                return c5
                            }
                        }else{
                            if(e.ownerDocument&&(c1=e.ownerDocument.getElementById(c2))&&cv(e,c1)&&c1.id===c2){
                                c5.push(c1);
                                return c5
                            }
                        }
                    }else{
                        if(c6[2]){
                            cQ.apply(c5,ci.call(e.getElementsByTagName(c3),0));
                            return c5
                        }else{
                            if((c2=c6[3])&&cx&&e.getElementsByClassName){
                                cQ.apply(c5,ci.call(e.getElementsByClassName(c2),0));
                                return c5
                            }
                        }
                    }
                }
            }
            return cT(c3,e,c5,c8,c7)
        }
        cK.matches=function(c1,e){
            return cK(c1,null,null,e)
        };
    
        cK.matchesSelector=function(e,c1){
            return cK(c1,null,null,[e]).length>0
        };
    
        function cC(e){
            return function(c2){
                var c1=c2.nodeName.toLowerCase();
                return c1==="input"&&c2.type===e
            }
        }
        function b3(e){
            return function(c2){
                var c1=c2.nodeName.toLowerCase();
                return(c1==="input"||c1==="button")&&c2.type===e
            }
        }
        b0=cK.getText=function(c4){
            var c3,c1="",c2=0,e=c4.nodeType;
            if(e){
                if(e===1||e===9||e===11){
                    if(typeof c4.textContent==="string"){
                        return c4.textContent
                    }else{
                        for(c4=c4.firstChild;c4;c4=c4.nextSibling){
                            c1+=b0(c4)
                        }
                    }
                }else{
                    if(e===3||e===4){
                        return c4.nodeValue
                    }
                }
            }else{
                for(;(c3=c4[c2]);c2++){
                    c1+=b0(c3)
                }
            }
            return c1
        };

        cj=cK.isXML=function cj(e){
            var c1=e&&(e.ownerDocument||e).documentElement;
            return c1?c1.nodeName!=="HTML":false
        };
    
        cv=cK.contains=ca.contains?function(c1,e){
            var c3=c1.nodeType===9?c1.documentElement:c1,c2=e&&e.parentNode;
            return c1===c2||!!(c2&&c2.nodeType===1&&c3.contains&&c3.contains(c2))
        }:ca.compareDocumentPosition?function(c1,e){
            return e&&!!(c1.compareDocumentPosition(e)&16)
        }:function(c1,e){
            while((e=e.parentNode)){
                if(e===c1){
                    return true
                }
            }
            return false
        };

        cK.attr=function(c3,c2){
            var e,c1=cj(c3);
            if(!c1){
                c2=c2.toLowerCase()
            }
            if(cE.attrHandle[c2]){
                return cE.attrHandle[c2](c3)
            }
            if(cm||c1){
                return c3.getAttribute(c2)
            }
            e=c3.getAttributeNode(c2);
            return e?typeof c3[c2]==="boolean"?c3[c2]?c2:null:e.specified?e.value:null:null
        };
    
        cE=cK.selectors={
            cacheLength:50,
            createPseudo:cW,
            match:cA,
            order:new RegExp("ID|TAG"+(bZ?"|NAME":"")+(cx?"|CLASS":"")),
            attrHandle:cy?{}:{
                href:function(e){
                    return e.getAttribute("href",2)
                },
                type:function(e){
                    return e.getAttribute("type")
                }
            },
            find:{
                ID:b9?function(c3,c2,c1){
                    if(typeof c2.getElementById!==cr&&!c1){
                        var e=c2.getElementById(c3);
                        return e&&e.parentNode?[e]:[]
                    }
                }:function(c3,c2,c1){
                    if(typeof c2.getElementById!==cr&&!c1){
                        var e=c2.getElementById(c3);
                        return e?e.id===c3||typeof e.getAttributeNode!==cr&&e.getAttributeNode("id").value===c3?[e]:cf:[]
                    }
                },
                TAG:b6?function(e,c1){
                    if(typeof c1.getElementsByTagName!==cr){
                        return c1.getElementsByTagName(e)
                    }
                }:function(e,c4){
                    var c3=c4.getElementsByTagName(e);
                    if(e==="*"){
                        var c5,c2=[],c1=0;
                        for(;(c5=c3[c1]);c1++){
                            if(c5.nodeType===1){
                                c2.push(c5)
                            }
                        }
                        return c2
                    }
                    return c3
                },
                NAME:function(e,c1){
                    if(typeof c1.getElementsByName!==cr){
                        return c1.getElementsByName(name)
                    }
                },
                CLASS:function(c2,c1,e){
                    if(typeof c1.getElementsByClassName!==cr&&!e){
                        return c1.getElementsByClassName(c2)
                    }
                }
            },
            relative:{
                ">":{
                    dir:"parentNode",
                    first:true
                },
                " ":{
                    dir:"parentNode"
                },
                "+":{
                    dir:"previousSibling",
                    first:true
                },
                "~":{
                    dir:"previousSibling"
                }
            },
            preFilter:{
                ATTR:function(e){
                    e[1]=e[1].replace(cp,"");
                    e[3]=(e[4]||e[5]||"").replace(cp,"");
                    if(e[2]==="~="){
                        e[3]=" "+e[3]+" "
                    }
                    return e.slice(0,4)
                },
                CHILD:function(e){
                    e[1]=e[1].toLowerCase();
                    if(e[1]==="nth"){
                        if(!e[2]){
                            cK.error(e[0])
                        }
                        e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd"));
                        e[4]=+((e[6]+e[7])||e[2]==="odd")
                    }
                    else{
                        if(e[2]){
                            cK.error(e[0])
                        }
                    }
                    return e
                },
                PSEUDO:function(c2,c3,c1){
                    var c4,e;
                    if(cA.CHILD.test(c2[0])){
                        return null
                    }
                    if(c2[3]){
                        c2[2]=c2[3]
                    }else{
                        if((c4=c2[4])){
                            if(cG.test(c4)&&(e=b1(c4,c3,c1,true))&&(e=c4.indexOf(")",c4.length-e)-c4.length)){
                                c4=c4.slice(0,e);
                                c2[0]=c2[0].slice(0,e)
                            }
                            c2[2]=c4
                        }
                    }
                    return c2.slice(0,3)
                }
            },
            filter:{
                ID:b9?function(e){
                    e=e.replace(cp,"");
                    return function(c1){
                        return c1.getAttribute("id")===e
                    }
                }:function(e){
                    e=e.replace(cp,"");
                    return function(c2){
                        var c1=typeof c2.getAttributeNode!==cr&&c2.getAttributeNode("id");
                        return c1&&c1.value===e
                    }
                },
                TAG:function(e){
                    if(e==="*"){
                        return function(){
                            return true
                        }
                    }
                    e=e.replace(cp,"").toLowerCase();
                    return function(c1){
                        return c1.nodeName&&c1.nodeName.toLowerCase()===e
                    }
                },
                CLASS:function(e){
                    var c1=cO[cU][e];
                    if(!c1){
                        c1=cO(e,new RegExp("(^|"+cu+")"+e+"("+cu+"|$)"))
                    }
                    return function(c2){
                        return c1.test(c2.className||(typeof c2.getAttribute!==cr&&c2.getAttribute("class"))||"")
                    }
                },
                ATTR:function(c2,c1,e){
                    if(!c1){
                        return function(c3){
                            return cK.attr(c3,c2)!=null
                        }
                    }
                    return function(c4){
                        var c3=cK.attr(c4,c2),c5=c3+"";
                        if(c3==null){
                            return c1==="!="
                        }
                        switch(c1){
                            case"=":
                                return c5===e;
                            case"!=":
                                return c5!==e;
                            case"^=":
                                return e&&c5.indexOf(e)===0;
                            case"*=":
                                return e&&c5.indexOf(e)>-1;
                            case"$=":
                                return e&&c5.substr(c5.length-e.length)===e;
                            case"~=":
                                return(" "+c5+" ").indexOf(e)>-1;
                            case"|=":
                                return c5===e||c5.substr(0,e.length+1)===e+"-"
                        }
                    }
                },
                CHILD:function(c1,c3,c4,c2){
                    if(c1==="nth"){
                        var e=cd++;
                        return function(c8){
                            var c5,c9,c7=0,c6=c8;
                            if(c4===1&&c2===0){
                                return true
                            }
                            c5=c8.parentNode;
                            if(c5&&(c5[cU]!==e||!c8.sizset)){
                                for(c6=c5.firstChild;c6;c6=c6.nextSibling){
                                    if(c6.nodeType===1){
                                        c6.sizset=++c7;
                                        if(c6===c8){
                                            break
                                        }
                                    }
                                }
                                c5[cU]=e
                            }
                            c9=c8.sizset-c2;
                            if(c4===0){
                                return c9===0
                            }else{
                                return(c9%c4===0&&c9/c4>=0)
                            }
                        }
                    }
                    return function(c6){
                        var c5=c6;
                        switch(c1){
                            case"only":case"first":
                                while((c5=c5.previousSibling)){
                                    if(c5.nodeType===1){
                                        return false
                                    }
                                }
                                if(c1==="first"){
                                    return true
                                }
                                c5=c6;
                            case"last":
                                while((c5=c5.nextSibling)){
                                    if(c5.nodeType===1){
                                        return false
                                    }
                                }
                                return true
                        }
                    }
                },
                PSEUDO:function(c5,c4,c2,c1){
                    var e,c3=cE.pseudos[c5]||cE.pseudos[c5.toLowerCase()];
                    if(!c3){
                        cK.error("unsupported pseudo: "+c5)
                    }
                    if(!c3[cU]){
                        if(c3.length>1){
                            e=[c5,c5,"",c4];
                            return function(c6){
                                return c3(c6,0,e)
                            }
                        }
                        return c3
                    }
                    return c3(c4,c2,c1)
                }
            },
            pseudos:{
                not:cW(function(e,c2,c1){
                    var c3=cc(e.replace(cS,"$1"),c2,c1);
                    return function(c4){
                        return !c3(c4)
                    }
                }),
                enabled:function(e){
                    return e.disabled===false
                },
                disabled:function(e){
                    return e.disabled===true
                },
                checked:function(e){
                    var c1=e.nodeName.toLowerCase();
                    return(c1==="input"&&!!e.checked)||(c1==="option"&&!!e.selected)
                },
                selected:function(e){
                    if(e.parentNode){
                        e.parentNode.selectedIndex
                    }
                    return e.selected===true
                },
                parent:function(e){
                    return !cE.pseudos.empty(e)
                },
                empty:function(c1){
                    var e;
                    c1=c1.firstChild;
                    while(c1){
                        if(c1.nodeName>"@"||(e=c1.nodeType)===3||e===4){
                            return false
                        }
                        c1=c1.nextSibling
                    }
                    return true
                },
                contains:cW(function(e){
                    return function(c1){
                        return(c1.textContent||c1.innerText||b0(c1)).indexOf(e)>-1
                    }
                }),
                has:cW(function(e){
                    return function(c1){
                        return cK(e,c1).length>0
                    }
                }),
                header:function(e){
                    return co.test(e.nodeName)
                },
                text:function(c2){
                    var c1,e;
                    return c2.nodeName.toLowerCase()==="input"&&(c1=c2.type)==="text"&&((e=c2.getAttribute("type"))==null||e.toLowerCase()===c1)
                },
                radio:cC("radio"),
                checkbox:cC("checkbox"),
                file:cC("file"),
                password:cC("password"),
                image:cC("image"),
                submit:b3("submit"),
                reset:b3("reset"),
                button:function(c1){
                    var e=c1.nodeName.toLowerCase();
                    return e==="input"&&c1.type==="button"||e==="button"
                },
                input:function(e){
                    return cH.test(e.nodeName)
                },
                focus:function(e){
                    var c1=e.ownerDocument;
                    return e===c1.activeElement&&(!c1.hasFocus||c1.hasFocus())&&!!(e.type||e.href)
                },
                active:function(e){
                    return e===e.ownerDocument.activeElement
                }
            },
            setFilters:{
                first:function(c2,c1,e){
                    return e?c2.slice(1):[c2[0]]
                },
                last:function(c3,c2,c1){
                    var e=c3.pop();
                    return c1?c3:[e]
                },
                even:function(c5,c4,c3){
                    var c2=[],c1=c3?1:0,e=c5.length;
                    for(;c1<e;c1=c1+2){
                        c2.push(c5[c1])
                    }
                    return c2
                },
                odd:function(c5,c4,c3){
                    var c2=[],c1=c3?0:1,e=c5.length;
                    for(;c1<e;c1=c1+2){
                        c2.push(c5[c1])
                    }
                    return c2
                },
                lt:function(c2,c1,e){
                    return e?c2.slice(+c1):c2.slice(0,+c1)
                },
                gt:function(c2,c1,e){
                    return e?c2.slice(0,+c1+1):c2.slice(+c1+1)
                },
                eq:function(c3,c2,c1){
                    var e=c3.splice(+c2,1);
                    return c1?c3:e
                }
            }
        };

        function b2(c1,e,c2){
            if(c1===e){
                return c2
            }
            var c3=c1.nextSibling;
            while(c3){
                if(c3===e){
                    return -1
                }
                c3=c3.nextSibling
            }
            return 1
        }
        ce=ca.compareDocumentPosition?function(c1,e){
            if(c1===e){
                cb=true;
                return 0
            }
            return(!c1.compareDocumentPosition||!e.compareDocumentPosition?c1.compareDocumentPosition:c1.compareDocumentPosition(e)&4)?-1:1
        }:function(c8,c7){
            if(c8===c7){
                cb=true;
                return 0
            }else{
                if(c8.sourceIndex&&c7.sourceIndex){
                    return c8.sourceIndex-c7.sourceIndex
                }
            }
            var c5,c1,c2=[],e=[],c4=c8.parentNode,c6=c7.parentNode,c9=c4;
            if(c4===c6){
                return b2(c8,c7)
            }else{
                if(!c4){
                    return -1
                }else{
                    if(!c6){
                        return 1
                    }
                }
            }while(c9){
                c2.unshift(c9);
                c9=c9.parentNode
            }
            c9=c6;
            while(c9){
                e.unshift(c9);
                c9=c9.parentNode
            }
            c5=c2.length;
            c1=e.length;
            for(var c3=0;c3<c5&&c3<c1;c3++){
                if(c2[c3]!==e[c3]){
                    return b2(c2[c3],e[c3])
                }
            }
            return c3===c5?b2(c8,e[c3],-1):b2(c2[c3],c7,1)
        };

        [0,0].sort(ce);
        b8=!cb;
        cK.uniqueSort=function(c1){
            var c2,e=1;
            cb=b8;
            c1.sort(ce);
            if(cb){
                for(;(c2=c1[e]);e++){
                    if(c2===c1[e-1]){
                        c1.splice(e--,1)
                    }
                }
            }
            return c1
        };

        cK.error=function(e){
            throw new Error("Syntax error, unrecognized expression: "+e)
        };
    
        function b1(c7,c1,c9,dg){
            var c2,da,dc,dd,db,c4,df,c8,e,c3,c6=!c9&&c1!==b7,de=(c6?"<s>":"")+c7.replace(cS,"$1<s>"),c5=cP[cU][de];
            if(c5){
                return dg?0:ci.call(c5,0)
            }
            db=c7;
            c4=[];
            c8=0;
            e=cE.preFilter;
            c3=cE.filter;
            while(db){
                if(!c2||(da=b4.exec(db))){
                    if(da){
                        db=db.slice(da[0].length);
                        dc.selector=df
                    }
                    c4.push(dc=[]);
                    df="";
                    if(c6){
                        db=" "+db
                    }
                }
                c2=false;
                if((da=cB.exec(db))){
                    df+=da[0];
                    db=db.slice(da[0].length);
                    c2=dc.push({
                        part:da.pop().replace(cS," "),
                        string:da[0],
                        captures:da
                    })
                }
                for(dd in c3){
                    if((da=cA[dd].exec(db))&&(!e[dd]||(da=e[dd](da,c1,c9)))){
                        df+=da[0];
                        db=db.slice(da[0].length);
                        c2=dc.push({
                            part:dd,
                            string:da.shift(),
                            captures:da
                        })
                    }
                }
                if(!c2){
                    break
                }
            }
            if(df){
                dc.selector=df
            }
            return dg?db.length:db?cK.error(c7):ci.call(cP(de,c4),0)
        }
        function cs(c5,c4,c3,c1){
            var e=c4.dir,c2=cd++;
            if(!c5){
                c5=function(c6){
                    return c6===c3
                }
            }
            return c4.first?function(c6){
                while((c6=c6[e])){
                    if(c6.nodeType===1){
                        return c5(c6)&&c6
                    }
                }
            }:c1?function(c6){
                while((c6=c6[e])){
                    if(c6.nodeType===1){
                        if(c5(c6)){
                            return c6
                        }
                    }
                }
            }:function(c7){
                var c6,c8=c2+"."+cn,c9=c8+"."+cR;
                while((c7=c7[e])){
                    if(c7.nodeType===1){
                        if((c6=c7[cU])===c9){
                            return c7.sizset
                        }else{
                            if(typeof c6==="string"&&c6.indexOf(c8)===0){
                                if(c7.sizset){
                                    return c7
                                }
                            }else{
                                c7[cU]=c9;
                                if(c5(c7)){
                                    c7.sizset=true;
                                    return c7
                                }
                                c7.sizset=false
                            }
                        }
                    }
                }
            }
        }
        function cq(e,c1){
            return e?function(c3){
                var c2=c1(c3);
                return c2&&e(c2===true?c3:c2)
            }:c1
        }
        function ct(c5,c3,e){
            var c2,c4,c1=0;
            for(;(c2=c5[c1]);c1++){
                if(cE.relative[c2.part]){
                    c4=cs(c4,cE.relative[c2.part],c3,e)
                }else{
                    c4=cq(c4,cE.filter[c2.part].apply(null,c2.captures.concat(c3,e)))
                }
            }
            return c4
        }
        function b5(e){
            return function(c2){
                var c3,c1=0;
                for(;(c3=e[c1]);c1++){
                    if(c3(c2)){
                        return true
                    }
                }
                return false
            }
        }
        cc=cK.compile=function(c1,c4,c2){
            var c6,c3,e,c5=ck[cU][c1];
            if(c5&&c5.context===c4){
                return c5
            }
            c6=b1(c1,c4,c2);
            for(c3=0,e=c6.length;c3<e;c3++){
                c6[c3]=ct(c6[c3],c4,c2)
            }
            c5=ck(c1,b5(c6));
            c5.context=c4;
            c5.runs=c5.dirruns=0;
            return c5
        };
    
        function cl(c1,c5,c4,c2){
            var c3=0,e=c5.length;
            for(;c3<e;c3++){
                cK(c1,c5[c3],c4,c2)
            }
        }
        function cF(e,c2,c6,c7,c1,c5){
            var c3,c4=cE.setFilters[c2.toLowerCase()];
            if(!c4){
                cK.error(c2)
            }
            if(e||!(c3=c1)){
                cl(e||"*",c7,(c3=[]),c1)
            }
            return c3.length>0?c4(c3,c6,c5):[]
        }
        function cN(dj,e,dc,c2){
            var c8,dd,de,db,c5,df,c4,da,c6,c9,di,dk,c1,dg=0,dh=dj.length,c3=cA.POS,c7=new RegExp("^"+c3.source+"(?!"+cu+")","i"),dl=function(){
                var dn=1,dm=arguments.length-2;
                for(;dn<dm;dn++){
                    if(arguments[dn]===cf){
                        c6[dn]=cf
                    }
                }
            };
    
            for(;dg<dh;dg++){
                c8=dj[dg];
                dd="";
                da=c2;
                for(de=0,db=c8.length;de<db;de++){
                    c5=c8[de];
                    df=c5.string;
                    if(c5.part==="PSEUDO"){
                        c3.exec("");
                        c4=0;
                        while((c6=c3.exec(df))){
                            c9=true;
                            di=c3.lastIndex=c6.index+c6[0].length;
                            if(di>c4){
                                dd+=df.slice(c4,c6.index);
                                c4=di;
                                dk=[e];
                                if(cB.test(dd)){
                                    if(da){
                                        dk=da
                                    }
                                    da=c2
                                }
                                if((c1=cV.test(dd))){
                                    dd=dd.slice(0,-5).replace(cB,"$&*");
                                    c4++
                                }
                                if(c6.length>1){
                                    c6[0].replace(c7,dl)
                                }
                                da=cF(dd,c6[1],c6[2],dk,da,c1)
                            }
                            dd=""
                        }
                    }
                    if(!c9){
                        dd+=df
                    }
                    c9=false
                }
                if(dd){
                    if(cB.test(dd)){
                        cl(dd,da||[e],dc,c2)
                    }else{
                        cK(dd,e,dc,c2?c2.concat(da):da)
                    }
                }else{
                    cQ.apply(dc,da)
                }
            }
            return dh===1?dc:cK.uniqueSort(dc)
        }
        function cT(c6,c1,c8,db,da){
            c6=c6.replace(cS,"$1");
            var e,dc,c4,c3,c7,de,c5,c2,df,dd,c9=b1(c6,c1,da),dg=c1.nodeType;
            if(cA.POS.test(c6)){
                return cN(c9,c1,c8,db)
            }
            if(db){
                e=ci.call(db,0)
            }else{
                if(c9.length===1){
                    if((de=ci.call(c9[0],0)).length>2&&(c5=de[0]).part==="ID"&&dg===9&&!da&&cE.relative[de[1].part]){
                        c1=cE.find.ID(c5.captures[0].replace(cp,""),c1,da)[0];
                        if(!c1){
                            return c8
                        }
                        c6=c6.slice(de.shift().string.length)
                    }
                    df=((c9=cL.exec(de[0].string))&&!c9.index&&c1.parentNode)||c1;
                    c2="";
                    for(c7=de.length-1;c7>=0;c7--){
                        c5=de[c7];
                        dd=c5.part;
                        c2=c5.string+c2;
                        if(cE.relative[dd]){
                            break
                        }
                        if(cE.order.test(dd)){
                            e=cE.find[dd](c5.captures[0].replace(cp,""),df,da);
                            if(e==null){
                                continue
                            }else{
                                c6=c6.slice(0,c6.length-c2.length)+c2.replace(cA[dd],"");
                                if(!c6){
                                    cQ.apply(c8,ci.call(e,0))
                                }
                                break
                            }
                        }
                    }
                }
            }
            if(c6){
                dc=cc(c6,c1,da);
                cn=dc.dirruns++;
                if(e==null){
                    e=cE.find.TAG("*",(cL.test(c6)&&c1.parentNode)||c1)
                }
                for(c7=0;(c3=e[c7]);c7++){
                    cR=dc.runs++;
                    if(dc(c3)){
                        c8.push(c3)
                    }
                }
            }
            return c8
        }
        if(b7.querySelectorAll){
            (function(){
                var c5,c6=cT,c4=/'|\\/g,c2=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,c1=[],e=[":active"],c3=ca.matchesSelector||ca.mozMatchesSelector||ca.webkitMatchesSelector||ca.oMatchesSelector||ca.msMatchesSelector;
                cD(function(c7){
                    c7.innerHTML="<select><option selected=''></option></select>";
                    if(!c7.querySelectorAll("[selected]").length){
                        c1.push("\\["+cu+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)")
                    }
                    if(!c7.querySelectorAll(":checked").length){
                        c1.push(":checked")
                    }
                });
                cD(function(c7){
                    c7.innerHTML="<p test=''></p>";
                    if(c7.querySelectorAll("[test^='']").length){
                        c1.push("[*^$]="+cu+"*(?:\"\"|'')")
                    }
                    c7.innerHTML="<input type='hidden'/>";
                    if(!c7.querySelectorAll(":enabled").length){
                        c1.push(":enabled",":disabled")
                    }
                });
                c1=c1.length&&new RegExp(c1.join("|"));
                cT=function(dd,c8,de,dh,dg){
                    if(!dh&&!dg&&(!c1||!c1.test(dd))){
                        if(c8.nodeType===9){
                            try{
                                cQ.apply(de,ci.call(c8.querySelectorAll(dd),0));
                                return de
                            }catch(dc){}
                        }else{
                            if(c8.nodeType===1&&c8.nodeName.toLowerCase()!=="object"){
                                var db,df,di,da=c8.getAttribute("id"),c7=da||cU,c9=cL.test(dd)&&c8.parentNode||c8;
                                if(da){
                                    c7=c7.replace(c4,"\\$&")
                                }else{
                                    c8.setAttribute("id",c7)
                                }
                                db=b1(dd,c8,dg);
                                c7="[id='"+c7+"']";
                                for(df=0,di=db.length;df<di;df++){
                                    db[df]=c7+db[df].selector
                                }
                                try{
                                    cQ.apply(de,ci.call(c9.querySelectorAll(db.join(",")),0));
                                    return de
                                }catch(dc){}finally{
                                    if(!da){
                                        c8.removeAttribute("id")
                                    }
                                }
                            }
                        }
                    }
                    return c6(dd,c8,de,dh,dg)
                };

                if(c3){
                    cD(function(c8){
                        c5=c3.call(c8,"div");
                        try{
                            c3.call(c8,"[test!='']:sizzle");
                            e.push(cA.PSEUDO.source,cA.POS.source,"!=")
                        }catch(c7){}
                    });
                    e=new RegExp(e.join("|"));
                    cK.matchesSelector=function(c8,da){
                        da=da.replace(c2,"='$1']");
                        if(!cj(c8)&&!e.test(da)&&(!c1||!c1.test(da))){
                            try{
                                var c7=c3.call(c8,da);
                                if(c7||c5||c8.document&&c8.document.nodeType!==11){
                                    return c7
                                }
                            }catch(c9){}
                        }
                        return cK(da,null,null,[c8]).length>0
                    }
                }
            })()
        }
        cE.setFilters.nth=cE.setFilters.eq;
        cE.filters=cE.pseudos;
        cK.attr=bG.attr;
        bG.find=cK;
        bG.expr=cK.selectors;
        bG.expr[":"]=bG.expr.pseudos;
        bG.unique=cK.uniqueSort;
        bG.text=cK.getText;
        bG.isXMLDoc=cK.isXML;
        bG.contains=cK.contains
    })(a2);
    var ag=/Until$/,bq=/^(?:parents|prev(?:Until|All))/,al=/^.[^:#\[\.,]*$/,y=bG.expr.match.needsContext,bu={
        children:true,
        contents:true,
        next:true,
        prev:true
    };

    bG.fn.extend({
        find:function(e){
            var b2,bZ,b4,b5,b3,b1,b0=this;
            if(typeof e!=="string"){
                return bG(e).filter(function(){
                    for(b2=0,bZ=b0.length;b2<bZ;b2++){
                        if(bG.contains(b0[b2],this)){
                            return true
                        }
                    }
                })
            }
            b1=this.pushStack("","find",e);
            for(b2=0,bZ=this.length;b2<bZ;b2++){
                b4=b1.length;
                bG.find(e,this[b2],b1);
                if(b2>0){
                    for(b5=b4;b5<b1.length;b5++){
                        for(b3=0;b3<b4;b3++){
                            if(b1[b3]===b1[b5]){
                                b1.splice(b5--,1);
                                break
                            }
                        }
                    }
                }
            }
            return b1
        },
        has:function(b1){
            var b0,bZ=bG(b1,this),e=bZ.length;
            return this.filter(function(){
                for(b0=0;b0<e;b0++){
                    if(bG.contains(this,bZ[b0])){
                        return true
                    }
                }
            })
        },
        not:function(e){
            return this.pushStack(aM(this,e,false),"not",e)
        },
        filter:function(e){
            return this.pushStack(aM(this,e,true),"filter",e)
        },
        is:function(e){
            return !!e&&(typeof e==="string"?y.test(e)?bG(e,this.context).index(this[0])>=0:bG.filter(e,this).length>0:this.filter(e).length>0)
        },
        closest:function(b2,b1){
            var b3,b0=0,e=this.length,bZ=[],b4=y.test(b2)||typeof b2!=="string"?bG(b2,b1||this.context):0;
            for(;b0<e;b0++){
                b3=this[b0];
                while(b3&&b3.ownerDocument&&b3!==b1&&b3.nodeType!==11){
                    if(b4?b4.index(b3)>-1:bG.find.matchesSelector(b3,b2)){
                        bZ.push(b3);
                        break
                    }
                    b3=b3.parentNode
                }
            }
            bZ=bZ.length>1?bG.unique(bZ):bZ;
            return this.pushStack(bZ,"closest",b2)
        },
        index:function(e){
            if(!e){
                return(this[0]&&this[0].parentNode)?this.prevAll().length:-1
            }
            if(typeof e==="string"){
                return bG.inArray(this[0],bG(e))
            }
            return bG.inArray(e.jquery?e[0]:e,this)
        },
        add:function(e,bZ){
            var b1=typeof e==="string"?bG(e,bZ):bG.makeArray(e&&e.nodeType?[e]:e),b0=bG.merge(this.get(),b1);
            return this.pushStack(aR(b1[0])||aR(b0[0])?b0:bG.unique(b0))
        },
        addBack:function(e){
            return this.add(e==null?this.prevObject:this.prevObject.filter(e))
        }
    });
    bG.fn.andSelf=bG.fn.addBack;
    function aR(e){
        return !e||!e.parentNode||e.parentNode.nodeType===11
    }
    function aY(bZ,e){
        do{
            bZ=bZ[e]
        }while(bZ&&bZ.nodeType!==1);
        return bZ
    }
    bG.each({
        parent:function(bZ){
            var e=bZ.parentNode;
            return e&&e.nodeType!==11?e:null
        },
        parents:function(e){
            return bG.dir(e,"parentNode")
        },
        parentsUntil:function(bZ,e,b0){
            return bG.dir(bZ,"parentNode",b0)
        },
        next:function(e){
            return aY(e,"nextSibling")
        },
        prev:function(e){
            return aY(e,"previousSibling")
        },
        nextAll:function(e){
            return bG.dir(e,"nextSibling")
        },
        prevAll:function(e){
            return bG.dir(e,"previousSibling")
        },
        nextUntil:function(bZ,e,b0){
            return bG.dir(bZ,"nextSibling",b0)
        },
        prevUntil:function(bZ,e,b0){
            return bG.dir(bZ,"previousSibling",b0)
        },
        siblings:function(e){
            return bG.sibling((e.parentNode||{}).firstChild,e)
        },
        children:function(e){
            return bG.sibling(e.firstChild)
        },
        contents:function(e){
            return bG.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:bG.merge([],e.childNodes)
        }
    },function(e,bZ){
        bG.fn[e]=function(b2,b0){
            var b1=bG.map(this,bZ,b2);
            if(!ag.test(e)){
                b0=b2
            }
            if(b0&&typeof b0==="string"){
                b1=bG.filter(b0,b1)
            }
            b1=this.length>1&&!bu[e]?bG.unique(b1):b1;
            if(this.length>1&&bq.test(e)){
                b1=b1.reverse()
            }
            return this.pushStack(b1,e,a4.call(arguments).join(","))
        }
    });
    bG.extend({
        filter:function(b0,e,bZ){
            if(bZ){
                b0=":not("+b0+")"
            }
            return e.length===1?bG.find.matchesSelector(e[0],b0)?[e[0]]:[]:bG.find.matches(b0,e)
        },
        dir:function(b0,bZ,b2){
            var e=[],b1=b0[bZ];
            while(b1&&b1.nodeType!==9&&(b2===aB||b1.nodeType!==1||!bG(b1).is(b2))){
                if(b1.nodeType===1){
                    e.push(b1)
                }
                b1=b1[bZ]
            }
            return e
        },
        sibling:function(b0,bZ){
            var e=[];
            for(;b0;b0=b0.nextSibling){
                if(b0.nodeType===1&&b0!==bZ){
                    e.push(b0)
                }
            }
            return e
        }
    });
    function aM(b1,b0,e){
        b0=b0||0;
        if(bG.isFunction(b0)){
            return bG.grep(b1,function(b3,b2){
                var b4=!!b0.call(b3,b2,b3);
                return b4===e
            })
        }else{
            if(b0.nodeType){
                return bG.grep(b1,function(b3,b2){
                    return(b3===b0)===e
                })
            }else{
                if(typeof b0==="string"){
                    var bZ=bG.grep(b1,function(b2){
                        return b2.nodeType===1
                    });
                    if(al.test(b0)){
                        return bG.filter(b0,bZ,!e)
                    }else{
                        b0=bG.filter(b0,bZ)
                    }
                }
            }
        }
        return bG.grep(b1,function(b3,b2){
            return(bG.inArray(b3,b0)>=0)===e
        })
    }
    function A(e){
        var b0=c.split("|"),bZ=e.createDocumentFragment();
        if(bZ.createElement){
            while(b0.length){
                bZ.createElement(b0.pop())
            }
        }
        return bZ
    }
    var c="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",av=/ jQuery\d+="(?:null|\d+)"/g,bY=/^\s+/,ay=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,p=/<([\w:]+)/,bT=/<tbody/i,J=/<|&#?\w+;/,aj=/<(?:script|style|link)/i,ap=/<(?:script|object|embed|option|style)/i,K=new RegExp("<(?:"+c+")[\\s/>]","i"),aE=/^(?:checkbox|radio)$/,bR=/checked\s*(?:[^=]|=\s*.checked.)/i,bw=/\/(java|ecma)script/i,aH=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,T={
        option:[1,"<select multiple='multiple'>","</select>"],
        legend:[1,"<fieldset>","</fieldset>"],
        thead:[1,"<table>","</table>"],
        tr:[2,"<table><tbody>","</tbody></table>"],
        td:[3,"<table><tbody><tr>","</tr></tbody></table>"],
        col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],
        area:[1,"<map>","</map>"],
        _default:[0,"",""]
    },aQ=A(o),l=aQ.appendChild(o.createElement("div"));
    T.optgroup=T.option;
    T.tbody=T.tfoot=T.colgroup=T.caption=T.thead;
    T.th=T.td;
    if(!bG.support.htmlSerialize){
        T._default=[1,"X<div>","</div>"]
    }
    bG.fn.extend({
        text:function(e){
            return bG.access(this,function(bZ){
                return bZ===aB?bG.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(bZ))
            },null,e,arguments.length)
        },
        wrapAll:function(e){
            if(bG.isFunction(e)){
                return this.each(function(b0){
                    bG(this).wrapAll(e.call(this,b0))
                })
            }
            if(this[0]){
                var bZ=bG(e,this[0].ownerDocument).eq(0).clone(true);
                if(this[0].parentNode){
                    bZ.insertBefore(this[0])
                }
                bZ.map(function(){
                    var b0=this;
                    while(b0.firstChild&&b0.firstChild.nodeType===1){
                        b0=b0.firstChild
                    }
                    return b0
                }).append(this)
            }
            return this
        },
        wrapInner:function(e){
            if(bG.isFunction(e)){
                return this.each(function(bZ){
                    bG(this).wrapInner(e.call(this,bZ))
                })
            }
            return this.each(function(){
                var bZ=bG(this),b0=bZ.contents();
                if(b0.length){
                    b0.wrapAll(e)
                }else{
                    bZ.append(e)
                }
            })
        },
        wrap:function(e){
            var bZ=bG.isFunction(e);
            return this.each(function(b0){
                bG(this).wrapAll(bZ?e.call(this,b0):e)
            })
        },
        unwrap:function(){
            return this.parent().each(function(){
                if(!bG.nodeName(this,"body")){
                    bG(this).replaceWith(this.childNodes)
                }
            }).end()
        },
        append:function(){
            return this.domManip(arguments,true,function(e){
                if(this.nodeType===1||this.nodeType===11){
                    this.appendChild(e)
                }
            })
        },
        prepend:function(){
            return this.domManip(arguments,true,function(e){
                if(this.nodeType===1||this.nodeType===11){
                    this.insertBefore(e,this.firstChild)
                }
            })
        },
        before:function(){
            if(!aR(this[0])){
                return this.domManip(arguments,false,function(bZ){
                    this.parentNode.insertBefore(bZ,this)
                })
            }
            if(arguments.length){
                var e=bG.clean(arguments);
                return this.pushStack(bG.merge(e,this),"before",this.selector)
            }
        },
        after:function(){
            if(!aR(this[0])){
                return this.domManip(arguments,false,function(bZ){
                    this.parentNode.insertBefore(bZ,this.nextSibling)
                })
            }
            if(arguments.length){
                var e=bG.clean(arguments);
                return this.pushStack(bG.merge(this,e),"after",this.selector)
            }
        },
        remove:function(e,b1){
            var b0,bZ=0;
            for(;(b0=this[bZ])!=null;bZ++){
                if(!e||bG.filter(e,[b0]).length){
                    if(!b1&&b0.nodeType===1){
                        bG.cleanData(b0.getElementsByTagName("*"));
                        bG.cleanData([b0])
                    }
                    if(b0.parentNode){
                        b0.parentNode.removeChild(b0)
                    }
                }
            }
            return this
        },
        empty:function(){
            var bZ,e=0;
            for(;(bZ=this[e])!=null;e++){
                if(bZ.nodeType===1){
                    bG.cleanData(bZ.getElementsByTagName("*"))
                }while(bZ.firstChild){
                    bZ.removeChild(bZ.firstChild)
                }
            }
            return this
        },
        clone:function(bZ,e){
            bZ=bZ==null?false:bZ;
            e=e==null?bZ:e;
            return this.map(function(){
                return bG.clone(this,bZ,e)
            })
        },
        html:function(e){
            return bG.access(this,function(b2){
                var b1=this[0]||{},b0=0,bZ=this.length;
                if(b2===aB){
                    return b1.nodeType===1?b1.innerHTML.replace(av,""):aB
                }
                if(typeof b2==="string"&&!aj.test(b2)&&(bG.support.htmlSerialize||!K.test(b2))&&(bG.support.leadingWhitespace||!bY.test(b2))&&!T[(p.exec(b2)||["",""])[1].toLowerCase()]){
                    b2=b2.replace(ay,"<$1></$2>");
                    try{
                        for(;b0<bZ;b0++){
                            b1=this[b0]||{};
                    
                            if(b1.nodeType===1){
                                bG.cleanData(b1.getElementsByTagName("*"));
                                b1.innerHTML=b2
                            }
                        }
                        b1=0
                    }catch(b3){}
                }
                if(b1){
                    this.empty().append(b2)
                }
            },null,e,arguments.length)
        },
        replaceWith:function(e){
            if(!aR(this[0])){
                if(bG.isFunction(e)){
                    return this.each(function(b1){
                        var b0=bG(this),bZ=b0.html();
                        b0.replaceWith(e.call(this,b1,bZ))
                    })
                }
                if(typeof e!=="string"){
                    e=bG(e).detach()
                }
                return this.each(function(){
                    var b0=this.nextSibling,bZ=this.parentNode;
                    bG(this).remove();
                    if(b0){
                        bG(b0).before(e)
                    }else{
                        bG(bZ).append(e)
                    }
                })
            }
            return this.length?this.pushStack(bG(bG.isFunction(e)?e():e),"replaceWith",e):this
        },
        detach:function(e){
            return this.remove(e,true)
        },
        domManip:function(b4,b8,b7){
            b4=[].concat.apply([],b4);
            var b0,b2,b3,b6,b1=0,b5=b4[0],bZ=[],e=this.length;
            if(!bG.support.checkClone&&e>1&&typeof b5==="string"&&bR.test(b5)){
                return this.each(function(){
                    bG(this).domManip(b4,b8,b7)
                })
            }
            if(bG.isFunction(b5)){
                return this.each(function(ca){
                    var b9=bG(this);
                    b4[0]=b5.call(this,ca,b8?b9.html():aB);
                    b9.domManip(b4,b8,b7)
                })
            }
            if(this[0]){
                b0=bG.buildFragment(b4,this,bZ);
                b3=b0.fragment;
                b2=b3.firstChild;
                if(b3.childNodes.length===1){
                    b3=b2
                }
                if(b2){
                    b8=b8&&bG.nodeName(b2,"tr");
                    for(b6=b0.cacheable||e-1;b1<e;b1++){
                        b7.call(b8&&bG.nodeName(this[b1],"table")?x(this[b1],"tbody"):this[b1],b1===b6?b3:bG.clone(b3,true,true))
                    }
                }
                b3=b2=null;
                if(bZ.length){
                    bG.each(bZ,function(b9,ca){
                        if(ca.src){
                            if(bG.ajax){
                                bG.ajax({
                                    url:ca.src,
                                    type:"GET",
                                    dataType:"script",
                                    async:false,
                                    global:false,
                                    "throws":true
                                })
                            }else{
                                bG.error("no ajax")
                            }
                        }else{
                            bG.globalEval((ca.text||ca.textContent||ca.innerHTML||"").replace(aH,""))
                        }
                        if(ca.parentNode){
                            ca.parentNode.removeChild(ca)
                        }
                    })
                }
            }
            return this
        }
    });
    function x(bZ,e){
        return bZ.getElementsByTagName(e)[0]||bZ.appendChild(bZ.ownerDocument.createElement(e))
    }
    function ao(b5,bZ){
        if(bZ.nodeType!==1||!bG.hasData(b5)){
            return
        }
        var b2,b1,e,b4=bG._data(b5),b3=bG._data(bZ,b4),b0=b4.events;
        if(b0){
            delete b3.handle;
            b3.events={};
        
            for(b2 in b0){
                for(b1=0,e=b0[b2].length;b1<e;b1++){
                    bG.event.add(bZ,b2,b0[b2][b1])
                }
            }
        }
        if(b3.data){
            b3.data=bG.extend({},b3.data)
        }
    }
    function F(bZ,e){
        var b0;
        if(e.nodeType!==1){
            return
        }
        if(e.clearAttributes){
            e.clearAttributes()
        }
        if(e.mergeAttributes){
            e.mergeAttributes(bZ)
        }
        b0=e.nodeName.toLowerCase();
        if(b0==="object"){
            if(e.parentNode){
                e.outerHTML=bZ.outerHTML
            }
            if(bG.support.html5Clone&&(bZ.innerHTML&&!bG.trim(e.innerHTML))){
                e.innerHTML=bZ.innerHTML
            }
        }else{
            if(b0==="input"&&aE.test(bZ.type)){
                e.defaultChecked=e.checked=bZ.checked;
                if(e.value!==bZ.value){
                    e.value=bZ.value
                }
            }else{
                if(b0==="option"){
                    e.selected=bZ.defaultSelected
                }else{
                    if(b0==="input"||b0==="textarea"){
                        e.defaultValue=bZ.defaultValue
                    }else{
                        if(b0==="script"&&e.text!==bZ.text){
                            e.text=bZ.text
                        }
                    }
                }
            }
        }
        e.removeAttribute(bG.expando)
    }
    bG.buildFragment=function(b1,b2,bZ){
        var b0,e,b3,b4=b1[0];
        b2=b2||o;
        b2=!b2.nodeType&&b2[0]||b2;
        b2=b2.ownerDocument||b2;
        if(b1.length===1&&typeof b4==="string"&&b4.length<512&&b2===o&&b4.charAt(0)==="<"&&!ap.test(b4)&&(bG.support.checkClone||!bR.test(b4))&&(bG.support.html5Clone||!K.test(b4))){
            e=true;
            b0=bG.fragments[b4];
            b3=b0!==aB
        }
        if(!b0){
            b0=b2.createDocumentFragment();
            bG.clean(b1,b2,b0,bZ);
            if(e){
                bG.fragments[b4]=b3&&b0
            }
        }
        return{
            fragment:b0,
            cacheable:e
        }
    };

    bG.fragments={};

    bG.each({
        appendTo:"append",
        prependTo:"prepend",
        insertBefore:"before",
        insertAfter:"after",
        replaceAll:"replaceWith"
    },function(e,bZ){
        bG.fn[e]=function(b0){
            var b2,b4=0,b3=[],b6=bG(b0),b1=b6.length,b5=this.length===1&&this[0].parentNode;
            if((b5==null||b5&&b5.nodeType===11&&b5.childNodes.length===1)&&b1===1){
                b6[bZ](this[0]);
                return this
            }else{
                for(;b4<b1;b4++){
                    b2=(b4>0?this.clone(true):this).get();
                    bG(b6[b4])[bZ](b2);
                    b3=b3.concat(b2)
                }
                return this.pushStack(b3,e,b6.selector)
            }
        }
    });
    function m(e){
        if(typeof e.getElementsByTagName!=="undefined"){
            return e.getElementsByTagName("*")
        }else{
            if(typeof e.querySelectorAll!=="undefined"){
                return e.querySelectorAll("*")
            }else{
                return[]
            }
        }
    }
    function bS(e){
        if(aE.test(e.type)){
            e.defaultChecked=e.checked
        }
    }
    bG.extend({
        clone:function(b2,b4,b0){
            var e,bZ,b1,b3;
            if(bG.support.html5Clone||bG.isXMLDoc(b2)||!K.test("<"+b2.nodeName+">")){
                b3=b2.cloneNode(true)
            }else{
                l.innerHTML=b2.outerHTML;
                l.removeChild(b3=l.firstChild)
            }
            if((!bG.support.noCloneEvent||!bG.support.noCloneChecked)&&(b2.nodeType===1||b2.nodeType===11)&&!bG.isXMLDoc(b2)){
                F(b2,b3);
                e=m(b2);
                bZ=m(b3);
                for(b1=0;e[b1];++b1){
                    if(bZ[b1]){
                        F(e[b1],bZ[b1])
                    }
                }
            }
            if(b4){
                ao(b2,b3);
                if(b0){
                    e=m(b2);
                    bZ=m(b3);
                    for(b1=0;e[b1];++b1){
                        ao(e[b1],bZ[b1])
                    }
                }
            }
            e=bZ=null;
            return b3
        },
        clean:function(cb,b0,e,b1){
            var b8,b7,ca,cf,b4,ce,b5,b2,bZ,b9,cd,b6,b3=b0===o&&aQ,cc=[];
            if(!b0||typeof b0.createDocumentFragment==="undefined"){
                b0=o
            }
            for(b8=0;(ca=cb[b8])!=null;b8++){
                if(typeof ca==="number"){
                    ca+=""
                }
                if(!ca){
                    continue
                }
                if(typeof ca==="string"){
                    if(!J.test(ca)){
                        ca=b0.createTextNode(ca)
                    }else{
                        b3=b3||A(b0);
                        b5=b0.createElement("div");
                        b3.appendChild(b5);
                        ca=ca.replace(ay,"<$1></$2>");
                        cf=(p.exec(ca)||["",""])[1].toLowerCase();
                        b4=T[cf]||T._default;
                        ce=b4[0];
                        b5.innerHTML=b4[1]+ca+b4[2];
                        while(ce--){
                            b5=b5.lastChild
                        }
                        if(!bG.support.tbody){
                            b2=bT.test(ca);
                            bZ=cf==="table"&&!b2?b5.firstChild&&b5.firstChild.childNodes:b4[1]==="<table>"&&!b2?b5.childNodes:[];
                            for(b7=bZ.length-1;b7>=0;--b7){
                                if(bG.nodeName(bZ[b7],"tbody")&&!bZ[b7].childNodes.length){
                                    bZ[b7].parentNode.removeChild(bZ[b7])
                                }
                            }
                        }
                        if(!bG.support.leadingWhitespace&&bY.test(ca)){
                            b5.insertBefore(b0.createTextNode(bY.exec(ca)[0]),b5.firstChild)
                        }
                        ca=b5.childNodes;
                        b5.parentNode.removeChild(b5)
                    }
                }
                if(ca.nodeType){
                    cc.push(ca)
                }else{
                    bG.merge(cc,ca)
                }
            }
            if(b5){
                ca=b5=b3=null
            }
            if(!bG.support.appendChecked){
                for(b8=0;(ca=cc[b8])!=null;b8++){
                    if(bG.nodeName(ca,"input")){
                        bS(ca)
                    }else{
                        if(typeof ca.getElementsByTagName!=="undefined"){
                            bG.grep(ca.getElementsByTagName("input"),bS)
                        }
                    }
                }
            }
            if(e){
                cd=function(cg){
                    if(!cg.type||bw.test(cg.type)){
                        return b1?b1.push(cg.parentNode?cg.parentNode.removeChild(cg):cg):e.appendChild(cg)
                    }
                };
    
                for(b8=0;(ca=cc[b8])!=null;b8++){
                    if(!(bG.nodeName(ca,"script")&&cd(ca))){
                        e.appendChild(ca);
                        if(typeof ca.getElementsByTagName!=="undefined"){
                            b6=bG.grep(bG.merge([],ca.getElementsByTagName("script")),cd);
                            cc.splice.apply(cc,[b8+1,0].concat(b6));
                            b8+=b6.length
                        }
                    }
                }
            }
            return cc
        },
        cleanData:function(bZ,b7){
            var b2,b0,b1,b6,b3=0,b8=bG.expando,e=bG.cache,b4=bG.support.deleteExpando,b5=bG.event.special;
            for(;(b1=bZ[b3])!=null;b3++){
                if(b7||bG.acceptData(b1)){
                    b0=b1[b8];
                    b2=b0&&e[b0];
                    if(b2){
                        if(b2.events){
                            for(b6 in b2.events){
                                if(b5[b6]){
                                    bG.event.remove(b1,b6)
                                }else{
                                    bG.removeEvent(b1,b6,b2.handle)
                                }
                            }
                        }
                        if(e[b0]){
                            delete e[b0];
                            if(b4){
                                delete b1[b8]
                            }else{
                                if(b1.removeAttribute){
                                    b1.removeAttribute(b8)
                                }else{
                                    b1[b8]=null
                                }
                            }
                            bG.deletedIds.push(b0)
                        }
                    }
                }
            }
        }
    });
    (function(){
        var e,bZ;
        bG.uaMatch=function(b1){
            b1=b1.toLowerCase();
            var b0=/(chrome)[ \/]([\w.]+)/.exec(b1)||/(webkit)[ \/]([\w.]+)/.exec(b1)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b1)||/(msie) ([\w.]+)/.exec(b1)||b1.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b1)||[];
            return{
                browser:b0[1]||"",
                version:b0[2]||"0"
            }
        };
    
        e=bG.uaMatch(d.userAgent);
        bZ={};
    
        if(e.browser){
            bZ[e.browser]=true;
            bZ.version=e.version
        }
        if(bZ.chrome){
            bZ.webkit=true
        }else{
            if(bZ.webkit){
                bZ.safari=true
            }
        }
        bG.browser=bZ;
        bG.sub=function(){
            function b0(b3,b4){
                return new b0.fn.init(b3,b4)
            }
            bG.extend(true,b0,this);
            b0.superclass=this;
            b0.fn=b0.prototype=this();
            b0.fn.constructor=b0;
            b0.sub=this.sub;
            b0.fn.init=function b2(b3,b4){
                if(b4&&b4 instanceof bG&&!(b4 instanceof b0)){
                    b4=b0(b4)
                }
                return bG.fn.init.call(this,b3,b4,b1)
            };
        
            b0.fn.init.prototype=b0.fn;
            var b1=b0(o);
            return b0
        }
    })();
    var E,az,aW,be=/alpha\([^)]*\)/i,aS=/opacity=([^)]*)/,bk=/^(top|right|bottom|left)$/,G=/^(none|table(?!-c[ea]).+)/,aZ=/^margin/,a8=new RegExp("^("+bx+")(.*)$","i"),W=new RegExp("^("+bx+")(?!px)[a-z%]+$","i"),S=new RegExp("^([-+])=("+bx+")","i"),bh={},a9={
        position:"absolute",
        visibility:"hidden",
        display:"block"
    },bA={
        letterSpacing:0,
        fontWeight:400
    },bQ=["Top","Right","Bottom","Left"],ar=["Webkit","O","Moz","ms"],aJ=bG.fn.toggle;
    function b(b1,bZ){
        if(bZ in b1){
            return bZ
        }
        var b2=bZ.charAt(0).toUpperCase()+bZ.slice(1),e=bZ,b0=ar.length;
        while(b0--){
            bZ=ar[b0]+b2;
            if(bZ in b1){
                return bZ
            }
        }
        return e
    }
    function Q(bZ,e){
        bZ=e||bZ;
        return bG.css(bZ,"display")==="none"||!bG.contains(bZ.ownerDocument,bZ)
    }
    function s(b3,e){
        var b2,b4,bZ=[],b0=0,b1=b3.length;
        for(;b0<b1;b0++){
            b2=b3[b0];
            if(!b2.style){
                continue
            }
            bZ[b0]=bG._data(b2,"olddisplay");
            if(e){
                if(!bZ[b0]&&b2.style.display==="none"){
                    b2.style.display=""
                }
                if(b2.style.display===""&&Q(b2)){
                    bZ[b0]=bG._data(b2,"olddisplay",bC(b2.nodeName))
                }
            }else{
                b4=E(b2,"display");
                if(!bZ[b0]&&b4!=="none"){
                    bG._data(b2,"olddisplay",b4)
                }
            }
        }
        for(b0=0;b0<b1;b0++){
            b2=b3[b0];
            if(!b2.style){
                continue
            }
            if(!e||b2.style.display==="none"||b2.style.display===""){
                b2.style.display=e?bZ[b0]||"":"none"
            }
        }
        return b3
    }
    bG.fn.extend({
        css:function(e,bZ){
            return bG.access(this,function(b1,b0,b2){
                return b2!==aB?bG.style(b1,b0,b2):bG.css(b1,b0)
            },e,bZ,arguments.length>1)
        },
        show:function(){
            return s(this,true)
        },
        hide:function(){
            return s(this)
        },
        toggle:function(b0,bZ){
            var e=typeof b0==="boolean";
            if(bG.isFunction(b0)&&bG.isFunction(bZ)){
                return aJ.apply(this,arguments)
            }
            return this.each(function(){
                if(e?b0:Q(this)){
                    bG(this).show()
                }else{
                    bG(this).hide()
                }
            })
        }
    });
    bG.extend({
        cssHooks:{
            opacity:{
                get:function(b0,bZ){
                    if(bZ){
                        var e=E(b0,"opacity");
                        return e===""?"1":e
                    }
                }
            }
        },
        cssNumber:{
            fillOpacity:true,
            fontWeight:true,
            lineHeight:true,
            opacity:true,
            orphans:true,
            widows:true,
            zIndex:true,
            zoom:true
        },
        cssProps:{
            "float":bG.support.cssFloat?"cssFloat":"styleFloat"
        },
        style:function(b1,b0,b7,b2){
            if(!b1||b1.nodeType===3||b1.nodeType===8||!b1.style){
                return
            }
            var b5,b6,b8,b3=bG.camelCase(b0),bZ=b1.style;
            b0=bG.cssProps[b3]||(bG.cssProps[b3]=b(bZ,b3));
            b8=bG.cssHooks[b0]||bG.cssHooks[b3];
            if(b7!==aB){
                b6=typeof b7;
                if(b6==="string"&&(b5=S.exec(b7))){
                    b7=(b5[1]+1)*b5[2]+parseFloat(bG.css(b1,b0));
                    b6="number"
                }
                if(b7==null||b6==="number"&&isNaN(b7)){
                    return
                }
                if(b6==="number"&&!bG.cssNumber[b3]){
                    b7+="px"
                }
                if(!b8||!("set" in b8)||(b7=b8.set(b1,b7,b2))!==aB){
                    try{
                        bZ[b0]=b7
                    }catch(b4){}
                }
            }else{
                if(b8&&"get" in b8&&(b5=b8.get(b1,false,b2))!==aB){
                    return b5
                }
                return bZ[b0]
            }
        },
        css:function(b4,b2,b3,bZ){
            var b5,b1,e,b0=bG.camelCase(b2);
            b2=bG.cssProps[b0]||(bG.cssProps[b0]=b(b4.style,b0));
            e=bG.cssHooks[b2]||bG.cssHooks[b0];
            if(e&&"get" in e){
                b5=e.get(b4,true,bZ)
            }
            if(b5===aB){
                b5=E(b4,b2)
            }
            if(b5==="normal"&&b2 in bA){
                b5=bA[b2]
            }
            if(b3||bZ!==aB){
                b1=parseFloat(b5);
                return b3||bG.isNumeric(b1)?b1||0:b5
            }
            return b5
        },
        swap:function(b2,b1,b3){
            var b0,bZ,e={};
    
            for(bZ in b1){
                e[bZ]=b2.style[bZ];
                b2.style[bZ]=b1[bZ]
            }
            b0=b3.call(b2);
            for(bZ in b1){
                b2.style[bZ]=e[bZ]
            }
            return b0
        }
    });
    if(a2.getComputedStyle){
        E=function(b5,bZ){
            var e,b2,b1,b4,b3=a2.getComputedStyle(b5,null),b0=b5.style;
            if(b3){
                e=b3[bZ];
                if(e===""&&!bG.contains(b5.ownerDocument,b5)){
                    e=bG.style(b5,bZ)
                }
                if(W.test(e)&&aZ.test(bZ)){
                    b2=b0.width;
                    b1=b0.minWidth;
                    b4=b0.maxWidth;
                    b0.minWidth=b0.maxWidth=b0.width=e;
                    e=b3.width;
                    b0.width=b2;
                    b0.minWidth=b1;
                    b0.maxWidth=b4
                }
            }
            return e
        }
    }else{
        if(o.documentElement.currentStyle){
            E=function(b2,b0){
                var b3,e,bZ=b2.currentStyle&&b2.currentStyle[b0],b1=b2.style;
                if(bZ==null&&b1&&b1[b0]){
                    bZ=b1[b0]
                }
                if(W.test(bZ)&&!bk.test(b0)){
                    b3=b1.left;
                    e=b2.runtimeStyle&&b2.runtimeStyle.left;
                    if(e){
                        b2.runtimeStyle.left=b2.currentStyle.left
                    }
                    b1.left=b0==="fontSize"?"1em":bZ;
                    bZ=b1.pixelLeft+"px";
                    b1.left=b3;
                    if(e){
                        b2.runtimeStyle.left=e
                    }
                }
                return bZ===""?"auto":bZ
            }
        }
    }
    function aG(e,b0,b1){
        var bZ=a8.exec(b0);
        return bZ?Math.max(0,bZ[1]-(b1||0))+(bZ[2]||"px"):b0
    }
    function at(b1,bZ,e,b3){
        var b0=e===(b3?"border":"content")?4:bZ==="width"?1:0,b2=0;
        for(;b0<4;b0+=2){
            if(e==="margin"){
                b2+=bG.css(b1,e+bQ[b0],true)
            }
            if(b3){
                if(e==="content"){
                    b2-=parseFloat(E(b1,"padding"+bQ[b0]))||0
                }
                if(e!=="margin"){
                    b2-=parseFloat(E(b1,"border"+bQ[b0]+"Width"))||0
                }
            }else{
                b2+=parseFloat(E(b1,"padding"+bQ[b0]))||0;
                if(e!=="padding"){
                    b2+=parseFloat(E(b1,"border"+bQ[b0]+"Width"))||0
                }
            }
        }
        return b2
    }
    function u(b1,bZ,e){
        var b2=bZ==="width"?b1.offsetWidth:b1.offsetHeight,b0=true,b3=bG.support.boxSizing&&bG.css(b1,"boxSizing")==="border-box";
        if(b2<=0||b2==null){
            b2=E(b1,bZ);
            if(b2<0||b2==null){
                b2=b1.style[bZ]
            }
            if(W.test(b2)){
                return b2
            }
            b0=b3&&(bG.support.boxSizingReliable||b2===b1.style[bZ]);
            b2=parseFloat(b2)||0
        }
        return(b2+at(b1,bZ,e||(b3?"border":"content"),b0))+"px"
    }
    function bC(b0){
        if(bh[b0]){
            return bh[b0]
        }
        var e=bG("<"+b0+">").appendTo(o.body),bZ=e.css("display");
        e.remove();
        if(bZ==="none"||bZ===""){
            az=o.body.appendChild(az||bG.extend(o.createElement("iframe"),{
                frameBorder:0,
                width:0,
                height:0
            }));
            if(!aW||!az.createElement){
                aW=(az.contentWindow||az.contentDocument).document;
                aW.write("<!doctype html><html><body>");
                aW.close()
            }
            e=aW.body.appendChild(aW.createElement(b0));
            bZ=E(e,"display");
            o.body.removeChild(az)
        }
        bh[b0]=bZ;
        return bZ
    }
    bG.each(["height","width"],function(bZ,e){
        bG.cssHooks[e]={
            get:function(b2,b1,b0){
                if(b1){
                    if(b2.offsetWidth===0&&G.test(E(b2,"display"))){
                        return bG.swap(b2,a9,function(){
                            return u(b2,e,b0)
                        })
                    }else{
                        return u(b2,e,b0)
                    }
                }
            },
            set:function(b1,b2,b0){
                return aG(b1,b2,b0?at(b1,e,b0,bG.support.boxSizing&&bG.css(b1,"boxSizing")==="border-box"):0)
            }
        }
    });
    if(!bG.support.opacity){
        bG.cssHooks.opacity={
            get:function(bZ,e){
                return aS.test((e&&bZ.currentStyle?bZ.currentStyle.filter:bZ.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":e?"1":""
            },
            set:function(b2,b3){
                var b1=b2.style,bZ=b2.currentStyle,e=bG.isNumeric(b3)?"alpha(opacity="+b3*100+")":"",b0=bZ&&bZ.filter||b1.filter||"";
                b1.zoom=1;
                if(b3>=1&&bG.trim(b0.replace(be,""))===""&&b1.removeAttribute){
                    b1.removeAttribute("filter");
                    if(bZ&&!bZ.filter){
                        return
                    }
                }
                b1.filter=be.test(b0)?b0.replace(be,e):b0+" "+e
            }
        }
    }
    bG(function(){
        if(!bG.support.reliableMarginRight){
            bG.cssHooks.marginRight={
                get:function(bZ,e){
                    return bG.swap(bZ,{
                        display:"inline-block"
                    },function(){
                        if(e){
                            return E(bZ,"marginRight")
                        }
                    })
                }
            }
        }
        if(!bG.support.pixelPosition&&bG.fn.position){
            bG.each(["top","left"],function(e,bZ){
                bG.cssHooks[bZ]={
                    get:function(b2,b1){
                        if(b1){
                            var b0=E(b2,bZ);
                            return W.test(b0)?bG(b2).position()[bZ]+"px":b0
                        }
                    }
                }
            })
        }
    });
    if(bG.expr&&bG.expr.filters){
        bG.expr.filters.hidden=function(e){
            return(e.offsetWidth===0&&e.offsetHeight===0)||(!bG.support.reliableHiddenOffsets&&((e.style&&e.style.display)||E(e,"display"))==="none")
        };
        
        bG.expr.filters.visible=function(e){
            return !bG.expr.filters.hidden(e)
        }
    }
    bG.each({
        margin:"",
        padding:"",
        border:"Width"
    },function(e,bZ){
        bG.cssHooks[e+bZ]={
            expand:function(b2){
                var b1,b3=typeof b2==="string"?b2.split(" "):[b2],b0={};
            
                for(b1=0;b1<4;b1++){
                    b0[e+bQ[b1]+bZ]=b3[b1]||b3[b1-2]||b3[0]
                }
                return b0
            }
        };
    
        if(!aZ.test(e)){
            bG.cssHooks[e+bZ].set=aG
        }
    });
    var bs=/%20/g,aP=/\[\]$/,U=/\r?\n/g,bz=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,aD=/^(?:select|textarea)/i;
    bG.fn.extend({
        serialize:function(){
            return bG.param(this.serializeArray())
        },
        serializeArray:function(){
            return this.map(function(){
                return this.elements?bG.makeArray(this.elements):this
            }).filter(function(){
                return this.name&&!this.disabled&&(this.checked||aD.test(this.nodeName)||bz.test(this.type))
            }).map(function(e,bZ){
                var b0=bG(this).val();
                return b0==null?null:bG.isArray(b0)?bG.map(b0,function(b2,b1){
                    return{
                        name:bZ.name,
                        value:b2.replace(U,"\r\n")
                    }
                }):{
                    name:bZ.name,
                    value:b0.replace(U,"\r\n")
                }
            }).get()
        }
    });
    bG.param=function(e,b0){
        var b1,bZ=[],b2=function(b3,b4){
            b4=bG.isFunction(b4)?b4():(b4==null?"":b4);
            bZ[bZ.length]=encodeURIComponent(b3)+"="+encodeURIComponent(b4)
        };
        
        if(b0===aB){
            b0=bG.ajaxSettings&&bG.ajaxSettings.traditional
        }
        if(bG.isArray(e)||(e.jquery&&!bG.isPlainObject(e))){
            bG.each(e,function(){
                b2(this.name,this.value)
            })
        }
        else{
            for(b1 in e){
                k(b1,e[b1],b0,b2)
            }
        }
        return bZ.join("&").replace(bs,"+")
    };

    function k(b0,b2,bZ,b1){
        var e;
        if(bG.isArray(b2)){
            bG.each(b2,function(b4,b3){
                if(bZ||aP.test(b0)){
                    b1(b0,b3)
                }else{
                    k(b0+"["+(typeof b3==="object"?b4:"")+"]",b3,bZ,b1)
                }
            })
        }else{
            if(!bZ&&bG.type(b2)==="object"){
                for(e in b2){
                    k(b0+"["+e+"]",b2[e],bZ,b1)
                }
            }else{
                b1(b0,b2)
            }
        }
    }
    var Y,bX,an=/#.*$/,ad=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,B=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,r=/^(?:GET|HEAD)$/,aC=/^\/\//,bN=/\?/,g=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,P=/([?&])_=[^&]*/,aT=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,bW=bG.fn.load,v={},a6={},aX=["*/"]+["*"];
    try{
        Y=aI.href
    }catch(bd){
        Y=o.createElement("a");
        Y.href="";
        Y=Y.href
    }
    bX=aT.exec(Y.toLowerCase())||[];
    function bI(e){
        return function(b2,b4){
            if(typeof b2!=="string"){
                b4=b2;
                b2="*"
            }
            var bZ,b5,b6,b1=b2.toLowerCase().split(aV),b0=0,b3=b1.length;
            if(bG.isFunction(b4)){
                for(;b0<b3;b0++){
                    bZ=b1[b0];
                    b6=/^\+/.test(bZ);
                    if(b6){
                        bZ=bZ.substr(1)||"*"
                    }
                    b5=e[bZ]=e[bZ]||[];
                    b5[b6?"unshift":"push"](b4)
                }
            }
        }
    }
    function q(bZ,b8,b3,b6,b5,b1){
        b5=b5||b8.dataTypes[0];
        b1=b1||{};
    
        b1[b5]=true;
        var b7,b4=bZ[b5],b0=0,e=b4?b4.length:0,b2=(bZ===v);
        for(;b0<e&&(b2||!b7);b0++){
            b7=b4[b0](b8,b3,b6);
            if(typeof b7==="string"){
                if(!b2||b1[b7]){
                    b7=aB
                }else{
                    b8.dataTypes.unshift(b7);
                    b7=q(bZ,b8,b3,b6,b7,b1)
                }
            }
        }
        if((b2||!b7)&&!b1["*"]){
            b7=q(bZ,b8,b3,b6,"*",b1)
        }
        return b7
    }
    function t(b0,b1){
        var bZ,e,b2=bG.ajaxSettings.flatOptions||{};
    
        for(bZ in b1){
            if(b1[bZ]!==aB){
                (b2[bZ]?b0:(e||(e={})))[bZ]=b1[bZ]
            }
        }
        if(e){
            bG.extend(true,b0,e)
        }
    }
    bG.fn.load=function(b1,b4,b5){
        if(typeof b1!=="string"&&bW){
            return bW.apply(this,arguments)
        }
        if(!this.length){
            return this
        }
        var e,b2,b0,bZ=this,b3=b1.indexOf(" ");
        if(b3>=0){
            e=b1.slice(b3,b1.length);
            b1=b1.slice(0,b3)
        }
        if(bG.isFunction(b4)){
            b5=b4;
            b4=aB
        }else{
            if(b4&&typeof b4==="object"){
                b2="POST"
            }
        }
        bG.ajax({
            url:b1,
            type:b2,
            dataType:"html",
            data:b4,
            complete:function(b7,b6){
                if(b5){
                    bZ.each(b5,b0||[b7.responseText,b6,b7])
                }
            }
        }).done(function(b6){
            b0=arguments;
            bZ.html(e?bG("<div>").append(b6.replace(g,"")).find(e):b6)
        });
        return this
    };

    bG.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,bZ){
        bG.fn[bZ]=function(b0){
            return this.on(bZ,b0)
        }
    });
    bG.each(["get","post"],function(e,bZ){
        bG[bZ]=function(b0,b2,b3,b1){
            if(bG.isFunction(b2)){
                b1=b1||b3;
                b3=b2;
                b2=aB
            }
            return bG.ajax({
                type:bZ,
                url:b0,
                data:b2,
                success:b3,
                dataType:b1
            })
        }
    });
    bG.extend({
        getScript:function(e,bZ){
            return bG.get(e,aB,bZ,"script")
        },
        getJSON:function(e,bZ,b0){
            return bG.get(e,bZ,b0,"json")
        },
        ajaxSetup:function(bZ,e){
            if(e){
                t(bZ,bG.ajaxSettings)
            }else{
                e=bZ;
                bZ=bG.ajaxSettings
            }
            t(bZ,e);
            return bZ
        },
        ajaxSettings:{
            url:Y,
            isLocal:B.test(bX[1]),
            global:true,
            type:"GET",
            contentType:"application/x-www-form-urlencoded; charset=UTF-8",
            processData:true,
            async:true,
            accepts:{
                xml:"application/xml, text/xml",
                html:"text/html",
                text:"text/plain",
                json:"application/json, text/javascript",
                "*":aX
            },
            contents:{
                xml:/xml/,
                html:/html/,
                json:/json/
            },
            responseFields:{
                xml:"responseXML",
                text:"responseText"
            },
            converters:{
                "* text":a2.String,
                "text html":true,
                "text json":bG.parseJSON,
                "text xml":bG.parseXML
            },
            flatOptions:{
                context:true,
                url:true
            }
        },
        ajaxPrefilter:bI(v),
        ajaxTransport:bI(a6),
        ajax:function(b4,b1){
            if(typeof b4==="object"){
                b1=b4;
                b4=aB
            }
            b1=b1||{};
    
            var b7,cl,b2,cg,b9,cd,b0,cf,b8=bG.ajaxSetup({},b1),cn=b8.context||b8,cb=cn!==b8&&(cn.nodeType||cn instanceof bG)?bG(cn):bG.event,cm=bG.Deferred(),ci=bG.Callbacks("once memory"),b5=b8.statusCode||{},cc={},cj={},b3=0,b6="canceled",ce={
                readyState:0,
                setRequestHeader:function(co,cp){
                    if(!b3){
                        var e=co.toLowerCase();
                        co=cj[e]=cj[e]||co;
                        cc[co]=cp
                    }
                    return this
                },
                getAllResponseHeaders:function(){
                    return b3===2?cl:null
                },
                getResponseHeader:function(co){
                    var e;
                    if(b3===2){
                        if(!b2){
                            b2={};
                            while((e=ad.exec(cl))){
                                b2[e[1].toLowerCase()]=e[2]
                            }
                        }
                        e=b2[co.toLowerCase()]
                    }
                    return e===aB?null:e
                },
                overrideMimeType:function(e){
                    if(!b3){
                        b8.mimeType=e
                    }
                    return this
                },
                abort:function(e){
                    e=e||b6;
                    if(cg){
                        cg.abort(e)
                    }
                    ca(0,e);
                    return this
                }
            };

            function ca(cs,co,ct,cq){
                var e,cw,cu,cr,cv,cp=co;
                if(b3===2){
                    return
                }
                b3=2;
                if(b9){
                    clearTimeout(b9)
                }
                cg=aB;
                cl=cq||"";
                ce.readyState=cs>0?4:0;
                if(ct){
                    cr=h(b8,ce,ct)
                }
                if(cs>=200&&cs<300||cs===304){
                    if(b8.ifModified){
                        cv=ce.getResponseHeader("Last-Modified");
                        if(cv){
                            bG.lastModified[b7]=cv
                        }
                        cv=ce.getResponseHeader("Etag");
                        if(cv){
                            bG.etag[b7]=cv
                        }
                    }
                    if(cs===304){
                        cp="notmodified";
                        e=true
                    }else{
                        e=ae(b8,cr);
                        cp=e.state;
                        cw=e.data;
                        cu=e.error;
                        e=!cu
                    }
                }else{
                    cu=cp;
                    if(!cp||cs){
                        cp="error";
                        if(cs<0){
                            cs=0
                        }
                    }
                }
                ce.status=cs;
                ce.statusText=""+(co||cp);
                if(e){
                    cm.resolveWith(cn,[cw,cp,ce])
                }else{
                    cm.rejectWith(cn,[ce,cp,cu])
                }
                ce.statusCode(b5);
                b5=aB;
                if(b0){
                    cb.trigger("ajax"+(e?"Success":"Error"),[ce,b8,e?cw:cu])
                }
                ci.fireWith(cn,[ce,cp]);
                if(b0){
                    cb.trigger("ajaxComplete",[ce,b8]);
                    if(!(--bG.active)){
                        bG.event.trigger("ajaxStop")
                    }
                }
            }
            cm.promise(ce);
            ce.success=ce.done;
            ce.error=ce.fail;
            ce.complete=ci.add;
            ce.statusCode=function(co){
                if(co){
                    var e;
                    if(b3<2){
                        for(e in co){
                            b5[e]=[b5[e],co[e]]
                        }
                    }else{
                        e=co[ce.status];
                        ce.always(e)
                    }
                }
                return this
            };

            b8.url=((b4||b8.url)+"").replace(an,"").replace(aC,bX[1]+"//");
            b8.dataTypes=bG.trim(b8.dataType||"*").toLowerCase().split(aV);
            if(b8.crossDomain==null){
                cd=aT.exec(b8.url.toLowerCase());
                b8.crossDomain=!!(cd&&(cd[1]!=bX[1]||cd[2]!=bX[2]||(cd[3]||(cd[1]==="http:"?80:443))!=(bX[3]||(bX[1]==="http:"?80:443))))
            }
            if(b8.data&&b8.processData&&typeof b8.data!=="string"){
                b8.data=bG.param(b8.data,b8.traditional)
            }
            q(v,b8,b1,ce);
            if(b3===2){
                return ce
            }
            b0=b8.global;
            b8.type=b8.type.toUpperCase();
            b8.hasContent=!r.test(b8.type);
            if(b0&&bG.active++===0){
                bG.event.trigger("ajaxStart")
            }
            if(!b8.hasContent){
                if(b8.data){
                    b8.url+=(bN.test(b8.url)?"&":"?")+b8.data;
                    delete b8.data
                }
                b7=b8.url;
                if(b8.cache===false){
                    var bZ=bG.now(),ck=b8.url.replace(P,"$1_="+bZ);
                    b8.url=ck+((ck===b8.url)?(bN.test(b8.url)?"&":"?")+"_="+bZ:"")
                }
            }
            if(b8.data&&b8.hasContent&&b8.contentType!==false||b1.contentType){
                ce.setRequestHeader("Content-Type",b8.contentType)
            }
            if(b8.ifModified){
                b7=b7||b8.url;
                if(bG.lastModified[b7]){
                    ce.setRequestHeader("If-Modified-Since",bG.lastModified[b7])
                }
                if(bG.etag[b7]){
                    ce.setRequestHeader("If-None-Match",bG.etag[b7])
                }
            }
            ce.setRequestHeader("Accept",b8.dataTypes[0]&&b8.accepts[b8.dataTypes[0]]?b8.accepts[b8.dataTypes[0]]+(b8.dataTypes[0]!=="*"?", "+aX+"; q=0.01":""):b8.accepts["*"]);
            for(cf in b8.headers){
                ce.setRequestHeader(cf,b8.headers[cf])
            }
            if(b8.beforeSend&&(b8.beforeSend.call(cn,ce,b8)===false||b3===2)){
                return ce.abort()
            }
            b6="abort";
            for(cf in {
                success:1,
                error:1,
                complete:1
            }){
                ce[cf](b8[cf])
            }
            cg=q(a6,b8,b1,ce);
            if(!cg){
                ca(-1,"No Transport")
            }else{
                ce.readyState=1;
                if(b0){
                    cb.trigger("ajaxSend",[ce,b8])
                }
                if(b8.async&&b8.timeout>0){
                    b9=setTimeout(function(){
                        ce.abort("timeout")
                    },b8.timeout)
                }
                try{
                    b3=1;
                    cg.send(cc,ca)
                }catch(ch){
                    if(b3<2){
                        ca(-1,ch)
                    }else{
                        throw ch
                    }
                }
            }
            return ce
        },
        active:0,
        lastModified:{},
        etag:{}
    });
    function h(b7,b6,b3){
        var b2,b4,b1,e,bZ=b7.contents,b5=b7.dataTypes,b0=b7.responseFields;
        for(b4 in b0){
            if(b4 in b3){
                b6[b0[b4]]=b3[b4]
            }
        }while(b5[0]==="*"){
            b5.shift();
            if(b2===aB){
                b2=b7.mimeType||b6.getResponseHeader("content-type")
            }
        }
        if(b2){
            for(b4 in bZ){
                if(bZ[b4]&&bZ[b4].test(b2)){
                    b5.unshift(b4);
                    break
                }
            }
        }
        if(b5[0] in b3){
            b1=b5[0]
        }
        else{
            for(b4 in b3){
                if(!b5[0]||b7.converters[b4+" "+b5[0]]){
                    b1=b4;
                    break
                }
                if(!e){
                    e=b4
                }
            }
            b1=b1||e
        }
        if(b1){
            if(b1!==b5[0]){
                b5.unshift(b1)
            }
            return b3[b1]
        }
    }
    function ae(b9,b1){
        var b7,bZ,b5,b3,b6=b9.dataTypes.slice(),b0=b6[0],b8={},b2=0;
        if(b9.dataFilter){
            b1=b9.dataFilter(b1,b9.dataType)
        }
        if(b6[1]){
            for(b7 in b9.converters){
                b8[b7.toLowerCase()]=b9.converters[b7]
            }
        }
        for(;(b5=b6[++b2]);){
            if(b5!=="*"){
                if(b0!=="*"&&b0!==b5){
                    b7=b8[b0+" "+b5]||b8["* "+b5];
                    if(!b7){
                        for(bZ in b8){
                            b3=bZ.split(" ");
                            if(b3[1]===b5){
                                b7=b8[b0+" "+b3[0]]||b8["* "+b3[0]];
                                if(b7){
                                    if(b7===true){
                                        b7=b8[bZ]
                                    }else{
                                        if(b8[bZ]!==true){
                                            b5=b3[0];
                                            b6.splice(b2--,0,b5)
                                        }
                                    }
                                    break
                                }
                            }
                        }
                    }
                    if(b7!==true){
                        if(b7&&b9["throws"]){
                            b1=b7(b1)
                        }else{
                            try{
                                b1=b7(b1)
                            }catch(b4){
                                return{
                                    state:"parsererror",
                                    error:b7?b4:"No conversion from "+b0+" to "+b5
                                }
                            }
                        }
                    }
                }
                b0=b5
            }
        }
        return{
            state:"success",
            data:b1
        }
    }
    var bp=[],aw=/\?/,a5=/(=)\?(?=&|$)|\?\?/,bl=bG.now();
    bG.ajaxSetup({
        jsonp:"callback",
        jsonpCallback:function(){
            var e=bp.pop()||(bG.expando+"_"+(bl++));
            this[e]=true;
            return e
        }
    });
    bG.ajaxPrefilter("json jsonp",function(b8,b3,b7){
        var b6,e,b5,b1=b8.data,bZ=b8.url,b0=b8.jsonp!==false,b4=b0&&a5.test(bZ),b2=b0&&!b4&&typeof b1==="string"&&!(b8.contentType||"").indexOf("application/x-www-form-urlencoded")&&a5.test(b1);
        if(b8.dataTypes[0]==="jsonp"||b4||b2){
            b6=b8.jsonpCallback=bG.isFunction(b8.jsonpCallback)?b8.jsonpCallback():b8.jsonpCallback;
            e=a2[b6];
            if(b4){
                b8.url=bZ.replace(a5,"$1"+b6)
            }else{
                if(b2){
                    b8.data=b1.replace(a5,"$1"+b6)
                }else{
                    if(b0){
                        b8.url+=(aw.test(bZ)?"&":"?")+b8.jsonp+"="+b6
                    }
                }
            }
            b8.converters["script json"]=function(){
                if(!b5){
                    bG.error(b6+" was not called")
                }
                return b5[0]
            };
    
            b8.dataTypes[0]="json";
            a2[b6]=function(){
                b5=arguments
            };
    
            b7.always(function(){
                a2[b6]=e;
                if(b8[b6]){
                    b8.jsonpCallback=b3.jsonpCallback;
                    bp.push(b6)
                }
                if(b5&&bG.isFunction(e)){
                    e(b5[0])
                }
                b5=e=aB
            });
            return"script"
        }
    });
    bG.ajaxSetup({
        accepts:{
            script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents:{
            script:/javascript|ecmascript/
        },
        converters:{
            "text script":function(e){
                bG.globalEval(e);
                return e
            }
        }
    });
    bG.ajaxPrefilter("script",function(e){
        if(e.cache===aB){
            e.cache=false
        }
        if(e.crossDomain){
            e.type="GET";
            e.global=false
        }
    });
    bG.ajaxTransport("script",function(b0){
        if(b0.crossDomain){
            var e,bZ=o.head||o.getElementsByTagName("head")[0]||o.documentElement;
            return{
                send:function(b1,b2){
                    e=o.createElement("script");
                    e.async="async";
                    if(b0.scriptCharset){
                        e.charset=b0.scriptCharset
                    }
                    e.src=b0.url;
                    e.onload=e.onreadystatechange=function(b4,b3){
                        if(b3||!e.readyState||/loaded|complete/.test(e.readyState)){
                            e.onload=e.onreadystatechange=null;
                            if(bZ&&e.parentNode){
                                bZ.removeChild(e)
                            }
                            e=aB;
                            if(!b3){
                                b2(200,"success")
                            }
                        }
                    };
            
                    bZ.insertBefore(e,bZ.firstChild)
                },
                abort:function(){
                    if(e){
                        e.onload(0,1)
                    }
                }
            }
        }
    });
    var ah,aN=a2.ActiveXObject?function(){
        for(var e in ah){
            ah[e](0,1)
        }
    }:false,au=0;
    function bB(){
        try{
            return new a2.XMLHttpRequest()
        }catch(bZ){}
    }
    function bb(){
        try{
            return new a2.ActiveXObject("Microsoft.XMLHTTP")
        }catch(bZ){}
    }
    bG.ajaxSettings.xhr=a2.ActiveXObject?function(){
        return !this.isLocal&&bB()||bb()
    }:bB;
    (function(e){
        bG.extend(bG.support,{
            ajax:!!e,
            cors:!!e&&("withCredentials" in e)
        })
    })(bG.ajaxSettings.xhr());
    if(bG.support.ajax){
        bG.ajaxTransport(function(e){
            if(!e.crossDomain||bG.support.cors){
                var bZ;
                return{
                    send:function(b5,b0){
                        var b3,b2,b4=e.xhr();
                        if(e.username){
                            b4.open(e.type,e.url,e.async,e.username,e.password)
                        }else{
                            b4.open(e.type,e.url,e.async)
                        }
                        if(e.xhrFields){
                            for(b2 in e.xhrFields){
                                b4[b2]=e.xhrFields[b2]
                            }
                        }
                        if(e.mimeType&&b4.overrideMimeType){
                            b4.overrideMimeType(e.mimeType)
                        }
                        if(!e.crossDomain&&!b5["X-Requested-With"]){
                            b5["X-Requested-With"]="XMLHttpRequest"
                        }
                        try{
                            for(b2 in b5){
                                b4.setRequestHeader(b2,b5[b2])
                            }
                        }
                        catch(b1){}
                        b4.send((e.hasContent&&e.data)||null);
                        bZ=function(ce,b8){
                            var b9,b7,b6,cc,cb;
                            try{
                                if(bZ&&(b8||b4.readyState===4)){
                                    bZ=aB;
                                    if(b3){
                                        b4.onreadystatechange=bG.noop;
                                        if(aN){
                                            delete ah[b3]
                                        }
                                    }
                                    if(b8){
                                        if(b4.readyState!==4){
                                            b4.abort()
                                        }
                                    }else{
                                        b9=b4.status;
                                        b6=b4.getAllResponseHeaders();
                                        cc={};
                    
                                        cb=b4.responseXML;
                                        if(cb&&cb.documentElement){
                                            cc.xml=cb
                                        }
                                        try{
                                            cc.text=b4.responseText
                                        }catch(ce){}
                                        try{
                                            b7=b4.statusText
                                        }catch(cd){
                                            b7=""
                                        }
                                        if(!b9&&e.isLocal&&!e.crossDomain){
                                            b9=cc.text?200:404
                                        }else{
                                            if(b9===1223){
                                                b9=204
                                            }
                                        }
                                    }
                                }
                            }catch(ca){
                                if(!b8){
                                    b0(-1,ca)
                                }
                            }
                            if(cc){
                                b0(b9,b7,cc,b6)
                            }
                        };

                        if(!e.async){
                            bZ()
                        }else{
                            if(b4.readyState===4){
                                setTimeout(bZ,0)
                            }else{
                                b3=++au;
                                if(aN){
                                    if(!ah){
                                        ah={};
                
                                        bG(a2).unload(aN)
                                    }
                                    ah[b3]=bZ
                                }
                                b4.onreadystatechange=bZ
                            }
                        }
                    },
                    abort:function(){
                        if(bZ){
                            bZ(0,1)
                        }
                    }
                }
            }
        })
    }
    var L,ab,bO=/^(?:toggle|show|hide)$/,bH=new RegExp("^(?:([-+])=|)("+bx+")([a-z%]*)$","i"),bM=/queueHooks$/,ax=[i],a1={
        "*":[function(bZ,b5){
            var b2,b6,e,b7=this.createTween(bZ,b5),b3=bH.exec(b5),b4=b7.cur(),b0=+b4||0,b1=1;
            if(b3){
                b2=+b3[2];
                b6=b3[3]||(bG.cssNumber[bZ]?"":"px");
                if(b6!=="px"&&b0){
                    b0=bG.css(b7.elem,bZ,true)||b2||1;
                    do{
                        e=b1=b1||".5";
                        b0=b0/b1;
                        bG.style(b7.elem,bZ,b0+b6);
                        b1=b7.cur()/b4
                    }while(b1!==1&&b1!==e)
                }
                b7.unit=b6;
                b7.start=b0;
                b7.end=b3[1]?b0+(b3[1]+1)*b2:b2
            }
            return b7
        }]
    };
    
    function bj(){
        setTimeout(function(){
            L=aB
        },0);
        return(L=bG.now())
    }
    function bc(bZ,e){
        bG.each(e,function(b4,b2){
            var b3=(a1[b4]||[]).concat(a1["*"]),b0=0,b1=b3.length;
            for(;b0<b1;b0++){
                if(b3[b0].call(bZ,b4,b2)){
                    return
                }
            }
        })
    }
    function f(b0,b4,b7){
        var b8,b3=0,e=0,bZ=ax.length,b6=bG.Deferred().always(function(){
            delete b2.elem
        }),b2=function(){
            var cd=L||bj(),ca=Math.max(0,b1.startTime+b1.duration-cd),cc=1-(ca/b1.duration||0),b9=0,cb=b1.tweens.length;
            for(;b9<cb;b9++){
                b1.tweens[b9].run(cc)
            }
            b6.notifyWith(b0,[b1,cc,ca]);
            if(cc<1&&cb){
                return ca
            }else{
                b6.resolveWith(b0,[b1]);
                return false
            }
        },b1=b6.promise({
            elem:b0,
            props:bG.extend({},b4),
            opts:bG.extend(true,{
                specialEasing:{}
            },b7),
            originalProperties:b4,
            originalOptions:b7,
            startTime:L||bj(),
            duration:b7.duration,
            tweens:[],
            createTween:function(cc,b9,cb){
                var ca=bG.Tween(b0,b1.opts,cc,b9,b1.opts.specialEasing[cc]||b1.opts.easing);
                b1.tweens.push(ca);
                return ca
            },
            stop:function(ca){
                var b9=0,cb=ca?b1.tweens.length:0;
                for(;b9<cb;b9++){
                    b1.tweens[b9].run(1)
                }
                if(ca){
                    b6.resolveWith(b0,[b1,ca])
                }else{
                    b6.rejectWith(b0,[b1,ca])
                }
                return this
            }
        }),b5=b1.props;
        ak(b5,b1.opts.specialEasing);
        for(;b3<bZ;b3++){
            b8=ax[b3].call(b1,b0,b5,b1.opts);
            if(b8){
                return b8
            }
        }
        bc(b1,b5);
        if(bG.isFunction(b1.opts.start)){
            b1.opts.start.call(b0,b1)
        }
        bG.fx.timer(bG.extend(b2,{
            anim:b1,
            queue:b1.opts.queue,
            elem:b0
        }));
        return b1.progress(b1.opts.progress).done(b1.opts.done,b1.opts.complete).fail(b1.opts.fail).always(b1.opts.always)
    }
    function ak(b1,b3){
        var b0,bZ,b4,b2,e;
        for(b0 in b1){
            bZ=bG.camelCase(b0);
            b4=b3[bZ];
            b2=b1[b0];
            if(bG.isArray(b2)){
                b4=b2[1];
                b2=b1[b0]=b2[0]
            }
            if(b0!==bZ){
                b1[bZ]=b2;
                delete b1[b0]
            }
            e=bG.cssHooks[bZ];
            if(e&&"expand" in e){
                b2=e.expand(b2);
                delete b1[bZ];
                for(b0 in b2){
                    if(!(b0 in b1)){
                        b1[b0]=b2[b0];
                        b3[b0]=b4
                    }
                }
            }else{
                b3[bZ]=b4
            }
        }
    }
    bG.Animation=bG.extend(f,{
        tweener:function(bZ,b2){
            if(bG.isFunction(bZ)){
                b2=bZ;
                bZ=["*"]
            }else{
                bZ=bZ.split(" ")
            }
            var b1,e=0,b0=bZ.length;
            for(;e<b0;e++){
                b1=bZ[e];
                a1[b1]=a1[b1]||[];
                a1[b1].unshift(b2)
            }
        },
        prefilter:function(bZ,e){
            if(e){
                ax.unshift(bZ)
            }else{
                ax.push(bZ)
            }
        }
    });
    function i(b2,b7,e){
        var b6,b0,b9,b1,cd,cc,cb,ca,b3=this,bZ=b2.style,b8={},b5=[],b4=b2.nodeType&&Q(b2);
        if(!e.queue){
            cb=bG._queueHooks(b2,"fx");
            if(cb.unqueued==null){
                cb.unqueued=0;
                ca=cb.empty.fire;
                cb.empty.fire=function(){
                    if(!cb.unqueued){
                        ca()
                    }
                }
            }
            cb.unqueued++;
            b3.always(function(){
                b3.always(function(){
                    cb.unqueued--;
                    if(!bG.queue(b2,"fx").length){
                        cb.empty.fire()
                    }
                })
            })
        }
        if(b2.nodeType===1&&("height" in b7||"width" in b7)){
            e.overflow=[bZ.overflow,bZ.overflowX,bZ.overflowY];
            if(bG.css(b2,"display")==="inline"&&bG.css(b2,"float")==="none"){
                if(!bG.support.inlineBlockNeedsLayout||bC(b2.nodeName)==="inline"){
                    bZ.display="inline-block"
                }else{
                    bZ.zoom=1
                }
            }
        }
        if(e.overflow){
            bZ.overflow="hidden";
            if(!bG.support.shrinkWrapBlocks){
                b3.done(function(){
                    bZ.overflow=e.overflow[0];
                    bZ.overflowX=e.overflow[1];
                    bZ.overflowY=e.overflow[2]
                })
            }
        }
        for(b6 in b7){
            b9=b7[b6];
            if(bO.exec(b9)){
                delete b7[b6];
                if(b9===(b4?"hide":"show")){
                    continue
                }
                b5.push(b6)
            }
        }
        b1=b5.length;
        if(b1){
            cd=bG._data(b2,"fxshow")||bG._data(b2,"fxshow",{});
            if(b4){
                bG(b2).show()
            }else{
                b3.done(function(){
                    bG(b2).hide()
                })
            }
            b3.done(function(){
                var ce;
                bG.removeData(b2,"fxshow",true);
                for(ce in b8){
                    bG.style(b2,ce,b8[ce])
                }
            });
            for(b6=0;b6<b1;b6++){
                b0=b5[b6];
                cc=b3.createTween(b0,b4?cd[b0]:0);
                b8[b0]=cd[b0]||bG.style(b2,b0);
                if(!(b0 in cd)){
                    cd[b0]=cc.start;
                    if(b4){
                        cc.end=cc.start;
                        cc.start=b0==="width"||b0==="height"?1:0
                    }
                }
            }
        }
    }
    function H(b0,bZ,b2,e,b1){
        return new H.prototype.init(b0,bZ,b2,e,b1)
    }
    bG.Tween=H;
    H.prototype={
        constructor:H,
        init:function(b1,bZ,b3,e,b2,b0){
            this.elem=b1;
            this.prop=b3;
            this.easing=b2||"swing";
            this.options=bZ;
            this.start=this.now=this.cur();
            this.end=e;
            this.unit=b0||(bG.cssNumber[b3]?"":"px")
        },
        cur:function(){
            var e=H.propHooks[this.prop];
            return e&&e.get?e.get(this):H.propHooks._default.get(this)
        },
        run:function(b0){
            var bZ,e=H.propHooks[this.prop];
            if(this.options.duration){
                this.pos=bZ=bG.easing[this.easing](b0,this.options.duration*b0,0,1,this.options.duration)
            }else{
                this.pos=bZ=b0
            }
            this.now=(this.end-this.start)*bZ+this.start;
            if(this.options.step){
                this.options.step.call(this.elem,this.now,this)
            }
            if(e&&e.set){
                e.set(this)
            }else{
                H.propHooks._default.set(this)
            }
            return this
        }
    };

    H.prototype.init.prototype=H.prototype;
    H.propHooks={
        _default:{
            get:function(bZ){
                var e;
                if(bZ.elem[bZ.prop]!=null&&(!bZ.elem.style||bZ.elem.style[bZ.prop]==null)){
                    return bZ.elem[bZ.prop]
                }
                e=bG.css(bZ.elem,bZ.prop,false,"");
                return !e||e==="auto"?0:e
            },
            set:function(e){
                if(bG.fx.step[e.prop]){
                    bG.fx.step[e.prop](e)
                }else{
                    if(e.elem.style&&(e.elem.style[bG.cssProps[e.prop]]!=null||bG.cssHooks[e.prop])){
                        bG.style(e.elem,e.prop,e.now+e.unit)
                    }else{
                        e.elem[e.prop]=e.now
                    }
                }
            }
        }
    };

    H.propHooks.scrollTop=H.propHooks.scrollLeft={
        set:function(e){
            if(e.elem.nodeType&&e.elem.parentNode){
                e.elem[e.prop]=e.now
            }
        }
    };

    bG.each(["toggle","show","hide"],function(bZ,e){
        var b0=bG.fn[e];
        bG.fn[e]=function(b1,b3,b2){
            return b1==null||typeof b1==="boolean"||(!bZ&&bG.isFunction(b1)&&bG.isFunction(b3))?b0.apply(this,arguments):this.animate(bF(e,true),b1,b3,b2)
        }
    });
    bG.fn.extend({
        fadeTo:function(e,b1,b0,bZ){
            return this.filter(Q).css("opacity",0).show().end().animate({
                opacity:b1
            },e,b0,bZ)
        },
        animate:function(b4,b1,b3,b2){
            var b0=bG.isEmptyObject(b4),e=bG.speed(b1,b3,b2),bZ=function(){
                var b5=f(this,bG.extend({},b4),e);
                if(b0){
                    b5.stop(true)
                }
            };
        
            return b0||e.queue===false?this.each(bZ):this.queue(e.queue,bZ)
        },
        stop:function(b0,bZ,e){
            var b1=function(b2){
                var b3=b2.stop;
                delete b2.stop;
                b3(e)
            };
        
            if(typeof b0!=="string"){
                e=bZ;
                bZ=b0;
                b0=aB
            }
            if(bZ&&b0!==false){
                this.queue(b0||"fx",[])
            }
            return this.each(function(){
                var b5=true,b2=b0!=null&&b0+"queueHooks",b4=bG.timers,b3=bG._data(this);
                if(b2){
                    if(b3[b2]&&b3[b2].stop){
                        b1(b3[b2])
                    }
                }else{
                    for(b2 in b3){
                        if(b3[b2]&&b3[b2].stop&&bM.test(b2)){
                            b1(b3[b2])
                        }
                    }
                }
                for(b2=b4.length;b2--;){
                    if(b4[b2].elem===this&&(b0==null||b4[b2].queue===b0)){
                        b4[b2].anim.stop(e);
                        b5=false;
                        b4.splice(b2,1)
                    }
                }
                if(b5||!e){
                    bG.dequeue(this,b0)
                }
            })
        }
    });
    function bF(b0,b2){
        var b1,e={
            height:b0
        },bZ=0;
        b2=b2?1:0;
        for(;bZ<4;bZ+=2-b2){
            b1=bQ[bZ];
            e["margin"+b1]=e["padding"+b1]=b0
        }
        if(b2){
            e.opacity=e.width=b0
        }
        return e
    }
    bG.each({
        slideDown:bF("show"),
        slideUp:bF("hide"),
        slideToggle:bF("toggle"),
        fadeIn:{
            opacity:"show"
        },
        fadeOut:{
            opacity:"hide"
        },
        fadeToggle:{
            opacity:"toggle"
        }
    },function(e,bZ){
        bG.fn[e]=function(b0,b2,b1){
            return this.animate(bZ,b0,b2,b1)
        }
    });
    bG.speed=function(b0,b1,bZ){
        var e=b0&&typeof b0==="object"?bG.extend({},b0):{
            complete:bZ||!bZ&&b1||bG.isFunction(b0)&&b0,
            duration:b0,
            easing:bZ&&b1||b1&&!bG.isFunction(b1)&&b1
        };
        
        e.duration=bG.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in bG.fx.speeds?bG.fx.speeds[e.duration]:bG.fx.speeds._default;
        if(e.queue==null||e.queue===true){
            e.queue="fx"
        }
        e.old=e.complete;
        e.complete=function(){
            if(bG.isFunction(e.old)){
                e.old.call(this)
            }
            if(e.queue){
                bG.dequeue(this,e.queue)
            }
        };
    
        return e
    };

    bG.easing={
        linear:function(e){
            return e
        },
        swing:function(e){
            return 0.5-Math.cos(e*Math.PI)/2
        }
    };

    bG.timers=[];
    bG.fx=H.prototype.init;
    bG.fx.tick=function(){
        var b0,bZ=bG.timers,e=0;
        for(;e<bZ.length;e++){
            b0=bZ[e];
            if(!b0()&&bZ[e]===b0){
                bZ.splice(e--,1)
            }
        }
        if(!bZ.length){
            bG.fx.stop()
        }
    };

    bG.fx.timer=function(e){
        if(e()&&bG.timers.push(e)&&!ab){
            ab=setInterval(bG.fx.tick,bG.fx.interval)
        }
    };

    bG.fx.interval=13;
    bG.fx.stop=function(){
        clearInterval(ab);
        ab=null
    };
    
    bG.fx.speeds={
        slow:600,
        fast:200,
        _default:400
    };

    bG.fx.step={};

    if(bG.expr&&bG.expr.filters){
        bG.expr.filters.animated=function(e){
            return bG.grep(bG.timers,function(bZ){
                return e===bZ.elem
            }).length
        }
    }
    var bm=/^(?:body|html)$/i;
    bG.fn.offset=function(ca){
        if(arguments.length){
            return ca===aB?this:this.each(function(cb){
                bG.offset.setOffset(this,ca,cb)
            })
        }
        var b4,bZ,b5,b6,b3,b7,e,b2,b8,b1,b0=this[0],b9=b0&&b0.ownerDocument;
        if(!b9){
            return
        }
        if((b5=b9.body)===b0){
            return bG.offset.bodyOffset(b0)
        }
        bZ=b9.documentElement;
        if(!bG.contains(bZ,b0)){
            return{
                top:0,
                left:0
            }
        }
        b4=b0.getBoundingClientRect();
        b6=bn(b9);
        b3=bZ.clientTop||b5.clientTop||0;
        b7=bZ.clientLeft||b5.clientLeft||0;
        e=b6.pageYOffset||bZ.scrollTop;
        b2=b6.pageXOffset||bZ.scrollLeft;
        b8=b4.top+e-b3;
        b1=b4.left+b2-b7;
        return{
            top:b8,
            left:b1
        }
    };

    bG.offset={
        bodyOffset:function(e){
            var b0=e.offsetTop,bZ=e.offsetLeft;
            if(bG.support.doesNotIncludeMarginInBodyOffset){
                b0+=parseFloat(bG.css(e,"marginTop"))||0;
                bZ+=parseFloat(bG.css(e,"marginLeft"))||0
            }
            return{
                top:b0,
                left:bZ
            }
        },
        setOffset:function(b1,ca,b4){
            var b5=bG.css(b1,"position");
            if(b5==="static"){
                b1.style.position="relative"
            }
            var b3=bG(b1),bZ=b3.offset(),e=bG.css(b1,"top"),b8=bG.css(b1,"left"),b9=(b5==="absolute"||b5==="fixed")&&bG.inArray("auto",[e,b8])>-1,b7={},b6={},b0,b2;
            if(b9){
                b6=b3.position();
                b0=b6.top;
                b2=b6.left
            }else{
                b0=parseFloat(e)||0;
                b2=parseFloat(b8)||0
            }
            if(bG.isFunction(ca)){
                ca=ca.call(b1,b4,bZ)
            }
            if(ca.top!=null){
                b7.top=(ca.top-bZ.top)+b0
            }
            if(ca.left!=null){
                b7.left=(ca.left-bZ.left)+b2
            }
            if("using" in ca){
                ca.using.call(b1,b7)
            }else{
                b3.css(b7)
            }
        }
    };

    bG.fn.extend({
        position:function(){
            if(!this[0]){
                return
            }
            var b0=this[0],bZ=this.offsetParent(),b1=this.offset(),e=bm.test(bZ[0].nodeName)?{
                top:0,
                left:0
            }:bZ.offset();
            b1.top-=parseFloat(bG.css(b0,"marginTop"))||0;
            b1.left-=parseFloat(bG.css(b0,"marginLeft"))||0;
            e.top+=parseFloat(bG.css(bZ[0],"borderTopWidth"))||0;
            e.left+=parseFloat(bG.css(bZ[0],"borderLeftWidth"))||0;
            return{
                top:b1.top-e.top,
                left:b1.left-e.left
            }
        },
        offsetParent:function(){
            return this.map(function(){
                var e=this.offsetParent||o.body;
                while(e&&(!bm.test(e.nodeName)&&bG.css(e,"position")==="static")){
                    e=e.offsetParent
                }
                return e||o.body
            })
        }
    });
    bG.each({
        scrollLeft:"pageXOffset",
        scrollTop:"pageYOffset"
    },function(b0,bZ){
        var e=/Y/.test(bZ);
        bG.fn[b0]=function(b1){
            return bG.access(this,function(b2,b5,b4){
                var b3=bn(b2);
                if(b4===aB){
                    return b3?(bZ in b3)?b3[bZ]:b3.document.documentElement[b5]:b2[b5]
                }
                if(b3){
                    b3.scrollTo(!e?b4:bG(b3).scrollLeft(),e?b4:bG(b3).scrollTop())
                }else{
                    b2[b5]=b4
                }
            },b0,b1,arguments.length,null)
        }
    });
    function bn(e){
        return bG.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:false
    }
    bG.each({
        Height:"height",
        Width:"width"
    },function(e,bZ){
        bG.each({
            padding:"inner"+e,
            content:bZ,
            "":"outer"+e
        },function(b0,b1){
            bG.fn[b1]=function(b5,b4){
                var b3=arguments.length&&(b0||typeof b5!=="boolean"),b2=b0||(b5===true||b4===true?"margin":"border");
                return bG.access(this,function(b7,b6,b8){
                    var b9;
                    if(bG.isWindow(b7)){
                        return b7.document.documentElement["client"+e]
                    }
                    if(b7.nodeType===9){
                        b9=b7.documentElement;
                        return Math.max(b7.body["scroll"+e],b9["scroll"+e],b7.body["offset"+e],b9["offset"+e],b9["client"+e])
                    }
                    return b8===aB?bG.css(b7,b6,b8,b2):bG.style(b7,b6,b8,b2)
                },bZ,b3?b5:aB,b3,null)
            }
        })
    });
    a2.jQuery=a2.$=bG;
    if(typeof define==="function"&&define.amd&&define.amd.jQuery){
        define("jquery",[],function(){
            return bG
        })
    }
})(window);
/*
 * jQuery UI 1.8.23
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(a,d){
    a.ui=a.ui||{};
    
    if(a.ui.version){
        return
    }
    a.extend(a.ui,{
        version:"1.8.23",
        keyCode:{
            ALT:18,
            BACKSPACE:8,
            CAPS_LOCK:20,
            COMMA:188,
            COMMAND:91,
            COMMAND_LEFT:91,
            COMMAND_RIGHT:93,
            CONTROL:17,
            DELETE:46,
            DOWN:40,
            END:35,
            ENTER:13,
            ESCAPE:27,
            HOME:36,
            INSERT:45,
            LEFT:37,
            MENU:93,
            NUMPAD_ADD:107,
            NUMPAD_DECIMAL:110,
            NUMPAD_DIVIDE:111,
            NUMPAD_ENTER:108,
            NUMPAD_MULTIPLY:106,
            NUMPAD_SUBTRACT:109,
            PAGE_DOWN:34,
            PAGE_UP:33,
            PERIOD:190,
            RIGHT:39,
            SHIFT:16,
            SPACE:32,
            TAB:9,
            UP:38,
            WINDOWS:91
        }
    });
    a.fn.extend({
        propAttr:a.fn.prop||a.fn.attr,
        _focus:a.fn.focus,
        focus:function(e,f){
            return typeof e==="number"?this.each(function(){
                var g=this;
                setTimeout(function(){
                    a(g).focus();
                    if(f){
                        f.call(g)
                    }
                },e)
            }):this._focus.apply(this,arguments)
        },
        scrollParent:function(){
            var e;
            if((a.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){
                e=this.parents().filter(function(){
                    return(/(relative|absolute|fixed)/).test(a.curCSS(this,"position",1))&&(/(auto|scroll)/).test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))
                }).eq(0)
            }else{
                e=this.parents().filter(function(){
                    return(/(auto|scroll)/).test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))
                }).eq(0)
            }
            return(/fixed/).test(this.css("position"))||!e.length?a(document):e
        },
        zIndex:function(h){
            if(h!==d){
                return this.css("zIndex",h)
            }
            if(this.length){
                var f=a(this[0]),e,g;
                while(f.length&&f[0]!==document){
                    e=f.css("position");
                    if(e==="absolute"||e==="relative"||e==="fixed"){
                        g=parseInt(f.css("zIndex"),10);
                        if(!isNaN(g)&&g!==0){
                            return g
                        }
                    }
                    f=f.parent()
                }
            }
            return 0
        },
        disableSelection:function(){
            return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){
                e.preventDefault()
            })
        },
        enableSelection:function(){
            return this.unbind(".ui-disableSelection")
        }
    });
    if(!a("<a>").outerWidth(1).jquery){
        a.each(["Width","Height"],function(g,e){
            var f=e==="Width"?["Left","Right"]:["Top","Bottom"],h=e.toLowerCase(),k={
                innerWidth:a.fn.innerWidth,
                innerHeight:a.fn.innerHeight,
                outerWidth:a.fn.outerWidth,
                outerHeight:a.fn.outerHeight
            };
            
            function j(m,l,i,n){
                a.each(f,function(){
                    l-=parseFloat(a.curCSS(m,"padding"+this,true))||0;
                    if(i){
                        l-=parseFloat(a.curCSS(m,"border"+this+"Width",true))||0
                    }
                    if(n){
                        l-=parseFloat(a.curCSS(m,"margin"+this,true))||0
                    }
                });
                return l
            }
            a.fn["inner"+e]=function(i){
                if(i===d){
                    return k["inner"+e].call(this)
                }
                return this.each(function(){
                    a(this).css(h,j(this,i)+"px")
                })
            };
        
            a.fn["outer"+e]=function(i,l){
                if(typeof i!=="number"){
                    return k["outer"+e].call(this,i)
                }
                return this.each(function(){
                    a(this).css(h,j(this,i,true,l)+"px")
                })
            }
        })
    }
    function c(g,e){
        var j=g.nodeName.toLowerCase();
        if("area"===j){
            var i=g.parentNode,h=i.name,f;
            if(!g.href||!h||i.nodeName.toLowerCase()!=="map"){
                return false
            }
            f=a("img[usemap=#"+h+"]")[0];
            return !!f&&b(f)
        }
        return(/input|select|textarea|button|object/.test(j)?!g.disabled:"a"==j?g.href||e:e)&&b(g)
    }
    function b(e){
        return !a(e).parents().andSelf().filter(function(){
            return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)
        }).length
    }
    a.extend(a.expr[":"],{
        data:a.expr.createPseudo?a.expr.createPseudo(function(e){
            return function(f){
                return !!a.data(f,e)
            }
        }):function(g,f,e){
            return !!a.data(g,e[3])
        },
        focusable:function(e){
            return c(e,!isNaN(a.attr(e,"tabindex")))
        },
        tabbable:function(g){
            var e=a.attr(g,"tabindex"),f=isNaN(e);
            return(f||e>=0)&&c(g,!f)
        }
    });
    a(function(){
        var e=document.body,f=e.appendChild(f=document.createElement("div"));
        f.offsetHeight;
        a.extend(f.style,{
            minHeight:"100px",
            height:"auto",
            padding:0,
            borderWidth:0
        });
        a.support.minHeight=f.offsetHeight===100;
        a.support.selectstart="onselectstart" in f;
        e.removeChild(f).style.display="none"
    });
    if(!a.curCSS){
        a.curCSS=a.css
    }
    a.extend(a.ui,{
        plugin:{
            add:function(f,g,j){
                var h=a.ui[f].prototype;
                for(var e in j){
                    h.plugins[e]=h.plugins[e]||[];
                    h.plugins[e].push([g,j[e]])
                }
            },
            call:function(e,g,f){
                var j=e.plugins[g];
                if(!j||!e.element[0].parentNode){
                    return
                }
                for(var h=0;h<j.length;h++){
                    if(e.options[j[h][0]]){
                        j[h][1].apply(e.element,f)
                    }
                }
            }
        },
        contains:function(f,e){
            return document.compareDocumentPosition?f.compareDocumentPosition(e)&16:f!==e&&f.contains(e)
        },
        hasScroll:function(h,f){
            if(a(h).css("overflow")==="hidden"){
                return false
            }
            var e=(f&&f==="left")?"scrollLeft":"scrollTop",g=false;
            if(h[e]>0){
                return true
            }
            h[e]=1;
            g=(h[e]>0);
            h[e]=0;
            return g
        },
        isOverAxis:function(f,e,g){
            return(f>e)&&(f<(e+g))
        },
        isOver:function(j,f,i,h,e,g){
            return a.ui.isOverAxis(j,i,e)&&a.ui.isOverAxis(f,h,g)
        }
    })
})(jQuery);
/*
 * jQuery UI Widget 1.8.23
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,d){
    if(b.cleanData){
        var c=b.cleanData;
        b.cleanData=function(f){
            for(var g=0,h;(h=f[g])!=null;g++){
                try{
                    b(h).triggerHandler("remove")
                }catch(j){}
            }
            c(f)
        }
    }else{
        var a=b.fn.remove;
        b.fn.remove=function(e,f){
            return this.each(function(){
                if(!f){
                    if(!e||b.filter(e,[this]).length){
                        b("*",this).add([this]).each(function(){
                            try{
                                b(this).triggerHandler("remove")
                            }catch(g){}
                        })
                    }
                }
                return a.call(b(this),e,f)
            })
        }
    }
    b.widget=function(f,h,e){
        var g=f.split(".")[0],j;
        f=f.split(".")[1];
        j=g+"-"+f;
        if(!e){
            e=h;
            h=b.Widget
        }
        b.expr[":"][j]=function(k){
            return !!b.data(k,f)
        };
        
        b[g]=b[g]||{};
    
        b[g][f]=function(k,l){
            if(arguments.length){
                this._createWidget(k,l)
            }
        };
    
        var i=new h();
        i.options=b.extend(true,{},i.options);
        b[g][f].prototype=b.extend(true,i,{
            namespace:g,
            widgetName:f,
            widgetEventPrefix:b[g][f].prototype.widgetEventPrefix||f,
            widgetBaseClass:j
        },e);
        b.widget.bridge(f,b[g][f])
    };

    b.widget.bridge=function(f,e){
        b.fn[f]=function(i){
            var g=typeof i==="string",h=Array.prototype.slice.call(arguments,1),j=this;
            i=!g&&h.length?b.extend.apply(null,[true,i].concat(h)):i;
            if(g&&i.charAt(0)==="_"){
                return j
            }
            if(g){
                this.each(function(){
                    var k=b.data(this,f),l=k&&b.isFunction(k[i])?k[i].apply(k,h):k;
                    if(l!==k&&l!==d){
                        j=l;
                        return false
                    }
                })
            }else{
                this.each(function(){
                    var k=b.data(this,f);
                    if(k){
                        k.option(i||{})._init()
                    }else{
                        b.data(this,f,new e(i,this))
                    }
                })
            }
            return j
        }
    };

    b.Widget=function(e,f){
        if(arguments.length){
            this._createWidget(e,f)
        }
    };

    b.Widget.prototype={
        widgetName:"widget",
        widgetEventPrefix:"",
        options:{
            disabled:false
        },
        _createWidget:function(f,g){
            b.data(g,this.widgetName,this);
            this.element=b(g);
            this.options=b.extend(true,{},this.options,this._getCreateOptions(),f);
            var e=this;
            this.element.bind("remove."+this.widgetName,function(){
                e.destroy()
            });
            this._create();
            this._trigger("create");
            this._init()
        },
        _getCreateOptions:function(){
            return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]
        },
        _create:function(){},
        _init:function(){},
        destroy:function(){
            this.element.unbind("."+this.widgetName).removeData(this.widgetName);
            this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")
        },
        widget:function(){
            return this.element
        },
        option:function(f,g){
            var e=f;
            if(arguments.length===0){
                return b.extend({},this.options)
            }
            if(typeof f==="string"){
                if(g===d){
                    return this.options[f]
                }
                e={};
            
                e[f]=g
            }
            this._setOptions(e);
            return this
        },
        _setOptions:function(f){
            var e=this;
            b.each(f,function(g,h){
                e._setOption(g,h)
            });
            return this
        },
        _setOption:function(e,f){
            this.options[e]=f;
            if(e==="disabled"){
                this.widget()[f?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",f)
            }
            return this
        },
        enable:function(){
            return this._setOption("disabled",false)
        },
        disable:function(){
            return this._setOption("disabled",true)
        },
        _trigger:function(e,f,g){
            var j,i,h=this.options[e];
            g=g||{};
        
            f=b.Event(f);
            f.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase();
            f.target=this.element[0];
            i=f.originalEvent;
            if(i){
                for(j in i){
                    if(!(j in f)){
                        f[j]=i[j]
                    }
                }
            }
            this.element.trigger(f,g);
            return !(b.isFunction(h)&&h.call(this.element[0],f,g)===false||f.isDefaultPrevented())
        }
    }
})(jQuery);
/*
 * jQuery UI Mouse 1.8.23
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(b,c){
    var a=false;
    b(document).mouseup(function(d){
        a=false
    });
    b.widget("ui.mouse",{
        options:{
            cancel:":input,option",
            distance:1,
            delay:0
        },
        _mouseInit:function(){
            var d=this;
            this.element.bind("mousedown."+this.widgetName,function(e){
                return d._mouseDown(e)
            }).bind("click."+this.widgetName,function(e){
                if(true===b.data(e.target,d.widgetName+".preventClickEvent")){
                    b.removeData(e.target,d.widgetName+".preventClickEvent");
                    e.stopImmediatePropagation();
                    return false
                }
            });
            this.started=false
        },
        _mouseDestroy:function(){
            this.element.unbind("."+this.widgetName);
            if(this._mouseMoveDelegate){
                b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
            }
        },
        _mouseDown:function(f){
            if(a){
                return
            }(this._mouseStarted&&this._mouseUp(f));
            this._mouseDownEvent=f;
            var e=this,g=(f.which==1),d=(typeof this.options.cancel=="string"&&f.target.nodeName?b(f.target).closest(this.options.cancel).length:false);
            if(!g||d||!this._mouseCapture(f)){
                return true
            }
            this.mouseDelayMet=!this.options.delay;
            if(!this.mouseDelayMet){
                this._mouseDelayTimer=setTimeout(function(){
                    e.mouseDelayMet=true
                },this.options.delay)
            }
            if(this._mouseDistanceMet(f)&&this._mouseDelayMet(f)){
                this._mouseStarted=(this._mouseStart(f)!==false);
                if(!this._mouseStarted){
                    f.preventDefault();
                    return true
                }
            }
            if(true===b.data(f.target,this.widgetName+".preventClickEvent")){
                b.removeData(f.target,this.widgetName+".preventClickEvent")
            }
            this._mouseMoveDelegate=function(h){
                return e._mouseMove(h)
            };
        
            this._mouseUpDelegate=function(h){
                return e._mouseUp(h)
            };
        
            b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);
            f.preventDefault();
            a=true;
            return true
        },
        _mouseMove:function(d){
            if(b.browser.msie&&!(document.documentMode>=9)&&!d.button){
                return this._mouseUp(d)
            }
            if(this._mouseStarted){
                this._mouseDrag(d);
                return d.preventDefault()
            }
            if(this._mouseDistanceMet(d)&&this._mouseDelayMet(d)){
                this._mouseStarted=(this._mouseStart(this._mouseDownEvent,d)!==false);
                (this._mouseStarted?this._mouseDrag(d):this._mouseUp(d))
            }
            return !this._mouseStarted
        },
        _mouseUp:function(d){
            b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
            if(this._mouseStarted){
                this._mouseStarted=false;
                if(d.target==this._mouseDownEvent.target){
                    b.data(d.target,this.widgetName+".preventClickEvent",true)
                }
                this._mouseStop(d)
            }
            return false
        },
        _mouseDistanceMet:function(d){
            return(Math.max(Math.abs(this._mouseDownEvent.pageX-d.pageX),Math.abs(this._mouseDownEvent.pageY-d.pageY))>=this.options.distance)
        },
        _mouseDelayMet:function(d){
            return this.mouseDelayMet
        },
        _mouseStart:function(d){},
        _mouseDrag:function(d){},
        _mouseStop:function(d){},
        _mouseCapture:function(d){
            return true
        }
    })
})(jQuery);
/*
 * jQuery UI Position 1.8.23
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function(g,h){
    g.ui=g.ui||{};
    
    var d=/left|center|right/,e=/top|center|bottom/,a="center",f={},b=g.fn.position,c=g.fn.offset;
    g.fn.position=function(j){
        if(!j||!j.of){
            return b.apply(this,arguments)
        }
        j=g.extend({},j);
        var n=g(j.of),m=n[0],p=(j.collision||"flip").split(" "),o=j.offset?j.offset.split(" "):[0,0],l,i,k;
        if(m.nodeType===9){
            l=n.width();
            i=n.height();
            k={
                top:0,
                left:0
            }
        }else{
            if(m.setTimeout){
                l=n.width();
                i=n.height();
                k={
                    top:n.scrollTop(),
                    left:n.scrollLeft()
                }
            }else{
                if(m.preventDefault){
                    j.at="left top";
                    l=i=0;
                    k={
                        top:j.of.pageY,
                        left:j.of.pageX
                    }
                }else{
                    l=n.outerWidth();
                    i=n.outerHeight();
                    k=n.offset()
                }
            }
        }
        g.each(["my","at"],function(){
            var q=(j[this]||"").split(" ");
            if(q.length===1){
                q=d.test(q[0])?q.concat([a]):e.test(q[0])?[a].concat(q):[a,a]
            }
            q[0]=d.test(q[0])?q[0]:a;
            q[1]=e.test(q[1])?q[1]:a;
            j[this]=q
        });
        if(p.length===1){
            p[1]=p[0]
        }
        o[0]=parseInt(o[0],10)||0;
        if(o.length===1){
            o[1]=o[0]
        }
        o[1]=parseInt(o[1],10)||0;
        if(j.at[0]==="right"){
            k.left+=l
        }else{
            if(j.at[0]===a){
                k.left+=l/2
            }
        }
        if(j.at[1]==="bottom"){
            k.top+=i
        }else{
            if(j.at[1]===a){
                k.top+=i/2
            }
        }
        k.left+=o[0];
        k.top+=o[1];
        return this.each(function(){
            var t=g(this),v=t.outerWidth(),s=t.outerHeight(),u=parseInt(g.curCSS(this,"marginLeft",true))||0,r=parseInt(g.curCSS(this,"marginTop",true))||0,x=v+u+(parseInt(g.curCSS(this,"marginRight",true))||0),y=s+r+(parseInt(g.curCSS(this,"marginBottom",true))||0),w=g.extend({},k),q;
            if(j.my[0]==="right"){
                w.left-=v
            }else{
                if(j.my[0]===a){
                    w.left-=v/2
                }
            }
            if(j.my[1]==="bottom"){
                w.top-=s
            }else{
                if(j.my[1]===a){
                    w.top-=s/2
                }
            }
            if(!f.fractions){
                w.left=Math.round(w.left);
                w.top=Math.round(w.top)
            }
            q={
                left:w.left-u,
                top:w.top-r
            };
    
            g.each(["left","top"],function(A,z){
                if(g.ui.position[p[A]]){
                    g.ui.position[p[A]][z](w,{
                        targetWidth:l,
                        targetHeight:i,
                        elemWidth:v,
                        elemHeight:s,
                        collisionPosition:q,
                        collisionWidth:x,
                        collisionHeight:y,
                        offset:o,
                        my:j.my,
                        at:j.at
                    })
                }
            });
            if(g.fn.bgiframe){
                t.bgiframe()
            }
            t.offset(g.extend(w,{
                using:j.using
            }))
        })
    };

    g.ui.position={
        fit:{
            left:function(i,j){
                var l=g(window),k=j.collisionPosition.left+j.collisionWidth-l.width()-l.scrollLeft();
                i.left=k>0?i.left-k:Math.max(i.left-j.collisionPosition.left,i.left)
            },
            top:function(i,j){
                var l=g(window),k=j.collisionPosition.top+j.collisionHeight-l.height()-l.scrollTop();
                i.top=k>0?i.top-k:Math.max(i.top-j.collisionPosition.top,i.top)
            }
        },
        flip:{
            left:function(j,l){
                if(l.at[0]===a){
                    return
                }
                var n=g(window),m=l.collisionPosition.left+l.collisionWidth-n.width()-n.scrollLeft(),i=l.my[0]==="left"?-l.elemWidth:l.my[0]==="right"?l.elemWidth:0,k=l.at[0]==="left"?l.targetWidth:-l.targetWidth,o=-2*l.offset[0];
                j.left+=l.collisionPosition.left<0?i+k+o:m>0?i+k+o:0
            },
            top:function(j,l){
                if(l.at[1]===a){
                    return
                }
                var n=g(window),m=l.collisionPosition.top+l.collisionHeight-n.height()-n.scrollTop(),i=l.my[1]==="top"?-l.elemHeight:l.my[1]==="bottom"?l.elemHeight:0,k=l.at[1]==="top"?l.targetHeight:-l.targetHeight,o=-2*l.offset[1];
                j.top+=l.collisionPosition.top<0?i+k+o:m>0?i+k+o:0
            }
        }
    };

    if(!g.offset.setOffset){
        g.offset.setOffset=function(m,j){
            if(/static/.test(g.curCSS(m,"position"))){
                m.style.position="relative"
            }
            var l=g(m),o=l.offset(),i=parseInt(g.curCSS(m,"top",true),10)||0,n=parseInt(g.curCSS(m,"left",true),10)||0,k={
                top:(j.top-o.top)+i,
                left:(j.left-o.left)+n
            };
            
            if("using" in j){
                j.using.call(m,k)
            }else{
                l.css(k)
            }
        };
    
        g.fn.offset=function(i){
            var j=this[0];
            if(!j||!j.ownerDocument){
                return null
            }
            if(i){
                if(g.isFunction(i)){
                    return this.each(function(k){
                        g(this).offset(i.call(this,k,g(this).offset()))
                    })
                }
                return this.each(function(){
                    g.offset.setOffset(this,i)
                })
            }
            return c.call(this)
        }
    }
    if(!g.curCSS){
        g.curCSS=g.css
    }(function(){
        var j=document.getElementsByTagName("body")[0],q=document.createElement("div"),n,p,k,o,m;
        n=document.createElement(j?"div":"body");
        k={
            visibility:"hidden",
            width:0,
            height:0,
            border:0,
            margin:0,
            background:"none"
        };
    
        if(j){
            g.extend(k,{
                position:"absolute",
                left:"-1000px",
                top:"-1000px"
            })
        }
        for(var l in k){
            n.style[l]=k[l]
        }
        n.appendChild(q);
        p=j||document.documentElement;
        p.insertBefore(n,p.firstChild);
        q.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;";
        o=g(q).offset(function(i,r){
            return r
        }).offset();
        n.innerHTML="";
        p.removeChild(n);
        m=o.top+o.left+(j?2000:0);
        f.fractions=m>21&&m<22
    })()
}(jQuery));
/*
 * jQuery UI Draggable 1.8.23
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(a,b){
    a.widget("ui.draggable",a.ui.mouse,{
        widgetEventPrefix:"drag",
        options:{
            addClasses:true,
            appendTo:"parent",
            axis:false,
            connectToSortable:false,
            containment:false,
            cursor:"auto",
            cursorAt:false,
            grid:false,
            handle:false,
            helper:"original",
            iframeFix:false,
            opacity:false,
            refreshPositions:false,
            revert:false,
            revertDuration:500,
            scope:"default",
            scroll:true,
            scrollSensitivity:20,
            scrollSpeed:20,
            snap:false,
            snapMode:"both",
            snapTolerance:20,
            stack:false,
            zIndex:false
        },
        _create:function(){
            if(this.options.helper=="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){
                this.element[0].style.position="relative"
            }(this.options.addClasses&&this.element.addClass("ui-draggable"));
            (this.options.disabled&&this.element.addClass("ui-draggable-disabled"));
            this._mouseInit()
        },
        destroy:function(){
            if(!this.element.data("draggable")){
                return
            }
            this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
            this._mouseDestroy();
            return this
        },
        _mouseCapture:function(c){
            var d=this.options;
            if(this.helper||d.disabled||a(c.target).is(".ui-resizable-handle")){
                return false
            }
            this.handle=this._getHandle(c);
            if(!this.handle){
                return false
            }
            if(d.iframeFix){
                a(d.iframeFix===true?"iframe":d.iframeFix).each(function(){
                    a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                        width:this.offsetWidth+"px",
                        height:this.offsetHeight+"px",
                        position:"absolute",
                        opacity:"0.001",
                        zIndex:1000
                    }).css(a(this).offset()).appendTo("body")
                })
            }
            return true
        },
        _mouseStart:function(c){
            var d=this.options;
            this.helper=this._createHelper(c);
            this.helper.addClass("ui-draggable-dragging");
            this._cacheHelperProportions();
            if(a.ui.ddmanager){
                a.ui.ddmanager.current=this
            }
            this._cacheMargins();
            this.cssPosition=this.helper.css("position");
            this.scrollParent=this.helper.scrollParent();
            this.offset=this.positionAbs=this.element.offset();
            this.offset={
                top:this.offset.top-this.margins.top,
                left:this.offset.left-this.margins.left
            };
                
            a.extend(this.offset,{
                click:{
                    left:c.pageX-this.offset.left,
                    top:c.pageY-this.offset.top
                },
                parent:this._getParentOffset(),
                relative:this._getRelativeOffset()
            });
            this.originalPosition=this.position=this._generatePosition(c);
            this.originalPageX=c.pageX;
            this.originalPageY=c.pageY;
            (d.cursorAt&&this._adjustOffsetFromHelper(d.cursorAt));
            if(d.containment){
                this._setContainment()
            }
            if(this._trigger("start",c)===false){
                this._clear();
                return false
            }
            this._cacheHelperProportions();
            if(a.ui.ddmanager&&!d.dropBehaviour){
                a.ui.ddmanager.prepareOffsets(this,c)
            }
            this._mouseDrag(c,true);
            if(a.ui.ddmanager){
                a.ui.ddmanager.dragStart(this,c)
            }
            return true
        },
        _mouseDrag:function(c,e){
            this.position=this._generatePosition(c);
            this.positionAbs=this._convertPositionTo("absolute");
            if(!e){
                var d=this._uiHash();
                if(this._trigger("drag",c,d)===false){
                    this._mouseUp({});
                    return false
                }
                this.position=d.position
            }
            if(!this.options.axis||this.options.axis!="y"){
                this.helper[0].style.left=this.position.left+"px"
            }
            if(!this.options.axis||this.options.axis!="x"){
                this.helper[0].style.top=this.position.top+"px"
            }
            if(a.ui.ddmanager){
                a.ui.ddmanager.drag(this,c)
            }
            return false
        },
        _mouseStop:function(e){
            var g=false;
            if(a.ui.ddmanager&&!this.options.dropBehaviour){
                g=a.ui.ddmanager.drop(this,e)
            }
            if(this.dropped){
                g=this.dropped;
                this.dropped=false
            }
            var d=this.element[0],f=false;
            while(d&&(d=d.parentNode)){
                if(d==document){
                    f=true
                }
            }
            if(!f&&this.options.helper==="original"){
                return false
            }
            if((this.options.revert=="invalid"&&!g)||(this.options.revert=="valid"&&g)||this.options.revert===true||(a.isFunction(this.options.revert)&&this.options.revert.call(this.element,g))){
                var c=this;
                a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){
                    if(c._trigger("stop",e)!==false){
                        c._clear()
                    }
                })
            }else{
                if(this._trigger("stop",e)!==false){
                    this._clear()
                }
            }
            return false
        },
        _mouseUp:function(c){
            if(this.options.iframeFix===true){
                a("div.ui-draggable-iframeFix").each(function(){
                    this.parentNode.removeChild(this)
                })
            }
            if(a.ui.ddmanager){
                a.ui.ddmanager.dragStop(this,c)
            }
            return a.ui.mouse.prototype._mouseUp.call(this,c)
        },
        cancel:function(){
            if(this.helper.is(".ui-draggable-dragging")){
                this._mouseUp({})
            }else{
                this._clear()
            }
            return this
        },
        _getHandle:function(c){
            var d=!this.options.handle||!a(this.options.handle,this.element).length?true:false;
            a(this.options.handle,this.element).find("*").andSelf().each(function(){
                if(this==c.target){
                    d=true
                }
            });
            return d
        },
        _createHelper:function(d){
            var e=this.options;
            var c=a.isFunction(e.helper)?a(e.helper.apply(this.element[0],[d])):(e.helper=="clone"?this.element.clone().removeAttr("id"):this.element);
            if(!c.parents("body").length){
                c.appendTo((e.appendTo=="parent"?this.element[0].parentNode:e.appendTo))
            }
            if(c[0]!=this.element[0]&&!(/(fixed|absolute)/).test(c.css("position"))){
                c.css("position","absolute")
            }
            return c
        },
        _adjustOffsetFromHelper:function(c){
            if(typeof c=="string"){
                c=c.split(" ")
            }
            if(a.isArray(c)){
                c={
                    left:+c[0],
                    top:+c[1]||0
                }
            }
            if("left" in c){
                this.offset.click.left=c.left+this.margins.left
            }
            if("right" in c){
                this.offset.click.left=this.helperProportions.width-c.right+this.margins.left
            }
            if("top" in c){
                this.offset.click.top=c.top+this.margins.top
            }
            if("bottom" in c){
                this.offset.click.top=this.helperProportions.height-c.bottom+this.margins.top
            }
        },
        _getParentOffset:function(){
            this.offsetParent=this.helper.offsetParent();
            var c=this.offsetParent.offset();
            if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){
                c.left+=this.scrollParent.scrollLeft();
                c.top+=this.scrollParent.scrollTop()
            }
            if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)){
                c={
                    top:0,
                    left:0
                }
            }
            return{
                top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),
                left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)
            }
        },
        _getRelativeOffset:function(){
            if(this.cssPosition=="relative"){
                var c=this.element.position();
                return{
                    top:c.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),
                    left:c.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()
                }
            }else{
                return{
                    top:0,
                    left:0
                }
            }
        },
        _cacheMargins:function(){
            this.margins={
                left:(parseInt(this.element.css("marginLeft"),10)||0),
                top:(parseInt(this.element.css("marginTop"),10)||0),
                right:(parseInt(this.element.css("marginRight"),10)||0),
                bottom:(parseInt(this.element.css("marginBottom"),10)||0)
            }
        },
        _cacheHelperProportions:function(){
            this.helperProportions={
                width:this.helper.outerWidth(),
                height:this.helper.outerHeight()
            }
        },
        _setContainment:function(){
            var g=this.options;
            if(g.containment=="parent"){
                g.containment=this.helper[0].parentNode
            }
            if(g.containment=="document"||g.containment=="window"){
                this.containment=[g.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,g.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(g.containment=="document"?0:a(window).scrollLeft())+a(g.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(g.containment=="document"?0:a(window).scrollTop())+(a(g.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
            }
            if(!(/^(document|window|parent)$/).test(g.containment)&&g.containment.constructor!=Array){
                var h=a(g.containment);
                var e=h[0];
                if(!e){
                    return
                }
                var f=h.offset();
                var d=(a(e).css("overflow")!="hidden");
                this.containment=[(parseInt(a(e).css("borderLeftWidth"),10)||0)+(parseInt(a(e).css("paddingLeft"),10)||0),(parseInt(a(e).css("borderTopWidth"),10)||0)+(parseInt(a(e).css("paddingTop"),10)||0),(d?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(a(e).css("borderLeftWidth"),10)||0)-(parseInt(a(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(d?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(a(e).css("borderTopWidth"),10)||0)-(parseInt(a(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];
                this.relative_container=h
            }else{
                if(g.containment.constructor==Array){
                    this.containment=g.containment
                }
            }
        },
        _convertPositionTo:function(g,i){
            if(!i){
                i=this.position
            }
            var e=g=="absolute"?1:-1;
            var f=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,h=(/(html|body)/i).test(c[0].tagName);
            return{
                top:(i.top+this.offset.relative.top*e+this.offset.parent.top*e-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(h?0:c.scrollTop()))*e)),
                left:(i.left+this.offset.relative.left*e+this.offset.parent.left*e-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():h?0:c.scrollLeft())*e))
            }
        },
        _generatePosition:function(d){
            var e=this.options,l=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,i=(/(html|body)/i).test(l[0].tagName);
            var h=d.pageX;
            var g=d.pageY;
            if(this.originalPosition){
                var c;
                if(this.containment){
                    if(this.relative_container){
                        var k=this.relative_container.offset();
                        c=[this.containment[0]+k.left,this.containment[1]+k.top,this.containment[2]+k.left,this.containment[3]+k.top]
                    }else{
                        c=this.containment
                    }
                    if(d.pageX-this.offset.click.left<c[0]){
                        h=c[0]+this.offset.click.left
                    }
                    if(d.pageY-this.offset.click.top<c[1]){
                        g=c[1]+this.offset.click.top
                    }
                    if(d.pageX-this.offset.click.left>c[2]){
                        h=c[2]+this.offset.click.left
                    }
                    if(d.pageY-this.offset.click.top>c[3]){
                        g=c[3]+this.offset.click.top
                    }
                }
                if(e.grid){
                    var j=e.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/e.grid[1])*e.grid[1]:this.originalPageY;
                    g=c?(!(j-this.offset.click.top<c[1]||j-this.offset.click.top>c[3])?j:(!(j-this.offset.click.top<c[1])?j-e.grid[1]:j+e.grid[1])):j;
                    var f=e.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/e.grid[0])*e.grid[0]:this.originalPageX;
                    h=c?(!(f-this.offset.click.left<c[0]||f-this.offset.click.left>c[2])?f:(!(f-this.offset.click.left<c[0])?f-e.grid[0]:f+e.grid[0])):f
                }
            }
            return{
                top:(g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(i?0:l.scrollTop())))),
                left:(h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:l.scrollLeft())))
            }
        },
        _clear:function(){
            this.helper.removeClass("ui-draggable-dragging");
            if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval){
                this.helper.remove()
            }
            this.helper=null;
            this.cancelHelperRemoval=false
        },
        _trigger:function(c,d,e){
            e=e||this._uiHash();
            a.ui.plugin.call(this,c,[d,e]);
            if(c=="drag"){
                this.positionAbs=this._convertPositionTo("absolute")
            }
            return a.Widget.prototype._trigger.call(this,c,d,e)
        },
        plugins:{},
        _uiHash:function(c){
            return{
                helper:this.helper,
                position:this.position,
                originalPosition:this.originalPosition,
                offset:this.positionAbs
            }
        }
    });
    a.extend(a.ui.draggable,{
        version:"1.8.23"
    });
    a.ui.plugin.add("draggable","connectToSortable",{
        start:function(d,f){
            var e=a(this).data("draggable"),g=e.options,c=a.extend({},f,{
                item:e.element
            });
            e.sortables=[];
            a(g.connectToSortable).each(function(){
                var h=a.data(this,"sortable");
                if(h&&!h.options.disabled){
                    e.sortables.push({
                        instance:h,
                        shouldRevert:h.options.revert
                    });
                    h.refreshPositions();
                    h._trigger("activate",d,c)
                }
            })
        },
        stop:function(d,f){
            var e=a(this).data("draggable"),c=a.extend({},f,{
                item:e.element
            });
            a.each(e.sortables,function(){
                if(this.instance.isOver){
                    this.instance.isOver=0;
                    e.cancelHelperRemoval=true;
                    this.instance.cancelHelperRemoval=false;
                    if(this.shouldRevert){
                        this.instance.options.revert=true
                    }
                    this.instance._mouseStop(d);
                    this.instance.options.helper=this.instance.options._helper;
                    if(e.options.helper=="original"){
                        this.instance.currentItem.css({
                            top:"auto",
                            left:"auto"
                        })
                    }
                }else{
                    this.instance.cancelHelperRemoval=false;
                    this.instance._trigger("deactivate",d,c)
                }
            })
        },
        drag:function(d,g){
            var f=a(this).data("draggable"),c=this;
            var e=function(j){
                var p=this.offset.click.top,n=this.offset.click.left;
                var h=this.positionAbs.top,l=this.positionAbs.left;
                var k=j.height,m=j.width;
                var q=j.top,i=j.left;
                return a.ui.isOver(h+p,l+n,q,i,k,m)
            };
        
            a.each(f.sortables,function(h){
                this.instance.positionAbs=f.positionAbs;
                this.instance.helperProportions=f.helperProportions;
                this.instance.offset.click=f.offset.click;
                if(this.instance._intersectsWith(this.instance.containerCache)){
                    if(!this.instance.isOver){
                        this.instance.isOver=1;
                        this.instance.currentItem=a(c).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true);
                        this.instance.options._helper=this.instance.options.helper;
                        this.instance.options.helper=function(){
                            return g.helper[0]
                        };
                    
                        d.target=this.instance.currentItem[0];
                        this.instance._mouseCapture(d,true);
                        this.instance._mouseStart(d,true,true);
                        this.instance.offset.click.top=f.offset.click.top;
                        this.instance.offset.click.left=f.offset.click.left;
                        this.instance.offset.parent.left-=f.offset.parent.left-this.instance.offset.parent.left;
                        this.instance.offset.parent.top-=f.offset.parent.top-this.instance.offset.parent.top;
                        f._trigger("toSortable",d);
                        f.dropped=this.instance.element;
                        f.currentItem=f.element;
                        this.instance.fromOutside=f
                    }
                    if(this.instance.currentItem){
                        this.instance._mouseDrag(d)
                    }
                }else{
                    if(this.instance.isOver){
                        this.instance.isOver=0;
                        this.instance.cancelHelperRemoval=true;
                        this.instance.options.revert=false;
                        this.instance._trigger("out",d,this.instance._uiHash(this.instance));
                        this.instance._mouseStop(d,true);
                        this.instance.options.helper=this.instance.options._helper;
                        this.instance.currentItem.remove();
                        if(this.instance.placeholder){
                            this.instance.placeholder.remove()
                        }
                        f._trigger("fromSortable",d);
                        f.dropped=false
                    }
                }
            })
        }
    });
    a.ui.plugin.add("draggable","cursor",{
        start:function(d,e){
            var c=a("body"),f=a(this).data("draggable").options;
            if(c.css("cursor")){
                f._cursor=c.css("cursor")
            }
            c.css("cursor",f.cursor)
        },
        stop:function(c,d){
            var e=a(this).data("draggable").options;
            if(e._cursor){
                a("body").css("cursor",e._cursor)
            }
        }
    });
    a.ui.plugin.add("draggable","opacity",{
        start:function(d,e){
            var c=a(e.helper),f=a(this).data("draggable").options;
            if(c.css("opacity")){
                f._opacity=c.css("opacity")
            }
            c.css("opacity",f.opacity)
        },
        stop:function(c,d){
            var e=a(this).data("draggable").options;
            if(e._opacity){
                a(d.helper).css("opacity",e._opacity)
            }
        }
    });
    a.ui.plugin.add("draggable","scroll",{
        start:function(d,e){
            var c=a(this).data("draggable");
            if(c.scrollParent[0]!=document&&c.scrollParent[0].tagName!="HTML"){
                c.overflowOffset=c.scrollParent.offset()
            }
        },
        drag:function(e,f){
            var d=a(this).data("draggable"),g=d.options,c=false;
            if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){
                if(!g.axis||g.axis!="x"){
                    if((d.overflowOffset.top+d.scrollParent[0].offsetHeight)-e.pageY<g.scrollSensitivity){
                        d.scrollParent[0].scrollTop=c=d.scrollParent[0].scrollTop+g.scrollSpeed
                    }else{
                        if(e.pageY-d.overflowOffset.top<g.scrollSensitivity){
                            d.scrollParent[0].scrollTop=c=d.scrollParent[0].scrollTop-g.scrollSpeed
                        }
                    }
                }
                if(!g.axis||g.axis!="y"){
                    if((d.overflowOffset.left+d.scrollParent[0].offsetWidth)-e.pageX<g.scrollSensitivity){
                        d.scrollParent[0].scrollLeft=c=d.scrollParent[0].scrollLeft+g.scrollSpeed
                    }else{
                        if(e.pageX-d.overflowOffset.left<g.scrollSensitivity){
                            d.scrollParent[0].scrollLeft=c=d.scrollParent[0].scrollLeft-g.scrollSpeed
                        }
                    }
                }
            }else{
                if(!g.axis||g.axis!="x"){
                    if(e.pageY-a(document).scrollTop()<g.scrollSensitivity){
                        c=a(document).scrollTop(a(document).scrollTop()-g.scrollSpeed)
                    }else{
                        if(a(window).height()-(e.pageY-a(document).scrollTop())<g.scrollSensitivity){
                            c=a(document).scrollTop(a(document).scrollTop()+g.scrollSpeed)
                        }
                    }
                }
                if(!g.axis||g.axis!="y"){
                    if(e.pageX-a(document).scrollLeft()<g.scrollSensitivity){
                        c=a(document).scrollLeft(a(document).scrollLeft()-g.scrollSpeed)
                    }else{
                        if(a(window).width()-(e.pageX-a(document).scrollLeft())<g.scrollSensitivity){
                            c=a(document).scrollLeft(a(document).scrollLeft()+g.scrollSpeed)
                        }
                    }
                }
            }
            if(c!==false&&a.ui.ddmanager&&!g.dropBehaviour){
                a.ui.ddmanager.prepareOffsets(d,e)
            }
        }
    });
    a.ui.plugin.add("draggable","snap",{
        start:function(d,e){
            var c=a(this).data("draggable"),f=c.options;
            c.snapElements=[];
            a(f.snap.constructor!=String?(f.snap.items||":data(draggable)"):f.snap).each(function(){
                var h=a(this);
                var g=h.offset();
                if(this!=c.element[0]){
                    c.snapElements.push({
                        item:this,
                        width:h.outerWidth(),
                        height:h.outerHeight(),
                        top:g.top,
                        left:g.left
                    })
                }
            })
        },
        drag:function(u,p){
            var g=a(this).data("draggable"),q=g.options;
            var y=q.snapTolerance;
            var x=p.offset.left,w=x+g.helperProportions.width,f=p.offset.top,e=f+g.helperProportions.height;
            for(var v=g.snapElements.length-1;v>=0;v--){
                var s=g.snapElements[v].left,n=s+g.snapElements[v].width,m=g.snapElements[v].top,A=m+g.snapElements[v].height;
                if(!((s-y<x&&x<n+y&&m-y<f&&f<A+y)||(s-y<x&&x<n+y&&m-y<e&&e<A+y)||(s-y<w&&w<n+y&&m-y<f&&f<A+y)||(s-y<w&&w<n+y&&m-y<e&&e<A+y))){
                    if(g.snapElements[v].snapping){
                        (g.options.snap.release&&g.options.snap.release.call(g.element,u,a.extend(g._uiHash(),{
                            snapItem:g.snapElements[v].item
                        })))
                    }
                    g.snapElements[v].snapping=false;
                    continue
                }
                if(q.snapMode!="inner"){
                    var c=Math.abs(m-e)<=y;
                    var z=Math.abs(A-f)<=y;
                    var j=Math.abs(s-w)<=y;
                    var k=Math.abs(n-x)<=y;
                    if(c){
                        p.position.top=g._convertPositionTo("relative",{
                            top:m-g.helperProportions.height,
                            left:0
                        }).top-g.margins.top
                    }
                    if(z){
                        p.position.top=g._convertPositionTo("relative",{
                            top:A,
                            left:0
                        }).top-g.margins.top
                    }
                    if(j){
                        p.position.left=g._convertPositionTo("relative",{
                            top:0,
                            left:s-g.helperProportions.width
                        }).left-g.margins.left
                    }
                    if(k){
                        p.position.left=g._convertPositionTo("relative",{
                            top:0,
                            left:n
                        }).left-g.margins.left
                    }
                }
                var h=(c||z||j||k);
                if(q.snapMode!="outer"){
                    var c=Math.abs(m-f)<=y;
                    var z=Math.abs(A-e)<=y;
                    var j=Math.abs(s-x)<=y;
                    var k=Math.abs(n-w)<=y;
                    if(c){
                        p.position.top=g._convertPositionTo("relative",{
                            top:m,
                            left:0
                        }).top-g.margins.top
                    }
                    if(z){
                        p.position.top=g._convertPositionTo("relative",{
                            top:A-g.helperProportions.height,
                            left:0
                        }).top-g.margins.top
                    }
                    if(j){
                        p.position.left=g._convertPositionTo("relative",{
                            top:0,
                            left:s
                        }).left-g.margins.left
                    }
                    if(k){
                        p.position.left=g._convertPositionTo("relative",{
                            top:0,
                            left:n-g.helperProportions.width
                        }).left-g.margins.left
                    }
                }
                if(!g.snapElements[v].snapping&&(c||z||j||k||h)){
                    (g.options.snap.snap&&g.options.snap.snap.call(g.element,u,a.extend(g._uiHash(),{
                        snapItem:g.snapElements[v].item
                    })))
                }
                g.snapElements[v].snapping=(c||z||j||k||h)
            }
        }
    });
    a.ui.plugin.add("draggable","stack",{
        start:function(d,e){
            var g=a(this).data("draggable").options;
            var f=a.makeArray(a(g.stack)).sort(function(i,h){
                return(parseInt(a(i).css("zIndex"),10)||0)-(parseInt(a(h).css("zIndex"),10)||0)
            });
            if(!f.length){
                return
            }
            var c=parseInt(f[0].style.zIndex)||0;
            a(f).each(function(h){
                this.style.zIndex=c+h
            });
            this[0].style.zIndex=c+f.length
        }
    });
    a.ui.plugin.add("draggable","zIndex",{
        start:function(d,e){
            var c=a(e.helper),f=a(this).data("draggable").options;
            if(c.css("zIndex")){
                f._zIndex=c.css("zIndex")
            }
            c.css("zIndex",f.zIndex)
        },
        stop:function(c,d){
            var e=a(this).data("draggable").options;
            if(e._zIndex){
                a(d.helper).css("zIndex",e._zIndex)
            }
        }
    })
})(jQuery);
/*
 * jQuery UI Droppable 1.8.23
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.mouse.js
 *	jquery.ui.draggable.js
 */
(function(a,b){
    a.widget("ui.droppable",{
        widgetEventPrefix:"drop",
        options:{
            accept:"*",
            activeClass:false,
            addClasses:true,
            greedy:false,
            hoverClass:false,
            scope:"default",
            tolerance:"intersect"
        },
        _create:function(){
            var d=this.options,c=d.accept;
            this.isover=0;
            this.isout=1;
            this.accept=a.isFunction(c)?c:function(e){
                return e.is(c)
            };
                
            this.proportions={
                width:this.element[0].offsetWidth,
                height:this.element[0].offsetHeight
            };
                
            a.ui.ddmanager.droppables[d.scope]=a.ui.ddmanager.droppables[d.scope]||[];
            a.ui.ddmanager.droppables[d.scope].push(this);
            (d.addClasses&&this.element.addClass("ui-droppable"))
        },
        destroy:function(){
            var c=a.ui.ddmanager.droppables[this.options.scope];
            for(var d=0;d<c.length;d++){
                if(c[d]==this){
                    c.splice(d,1)
                }
            }
            this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");
            return this
        },
        _setOption:function(c,d){
            if(c=="accept"){
                this.accept=a.isFunction(d)?d:function(e){
                    return e.is(d)
                }
            }
            a.Widget.prototype._setOption.apply(this,arguments)
        },
        _activate:function(d){
            var c=a.ui.ddmanager.current;
            if(this.options.activeClass){
                this.element.addClass(this.options.activeClass)
            }(c&&this._trigger("activate",d,this.ui(c)))
        },
        _deactivate:function(d){
            var c=a.ui.ddmanager.current;
            if(this.options.activeClass){
                this.element.removeClass(this.options.activeClass)
            }(c&&this._trigger("deactivate",d,this.ui(c)))
        },
        _over:function(d){
            var c=a.ui.ddmanager.current;
            if(!c||(c.currentItem||c.element)[0]==this.element[0]){
                return
            }
            if(this.accept.call(this.element[0],(c.currentItem||c.element))){
                if(this.options.hoverClass){
                    this.element.addClass(this.options.hoverClass)
                }
                this._trigger("over",d,this.ui(c))
            }
        },
        _out:function(d){
            var c=a.ui.ddmanager.current;
            if(!c||(c.currentItem||c.element)[0]==this.element[0]){
                return
            }
            if(this.accept.call(this.element[0],(c.currentItem||c.element))){
                if(this.options.hoverClass){
                    this.element.removeClass(this.options.hoverClass)
                }
                this._trigger("out",d,this.ui(c))
            }
        },
        _drop:function(d,e){
            var c=e||a.ui.ddmanager.current;
            if(!c||(c.currentItem||c.element)[0]==this.element[0]){
                return false
            }
            var f=false;
            this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){
                var g=a.data(this,"droppable");
                if(g.options.greedy&&!g.options.disabled&&g.options.scope==c.options.scope&&g.accept.call(g.element[0],(c.currentItem||c.element))&&a.ui.intersect(c,a.extend(g,{
                    offset:g.element.offset()
                }),g.options.tolerance)){
                    f=true;
                    return false
                }
            });
            if(f){
                return false
            }
            if(this.accept.call(this.element[0],(c.currentItem||c.element))){
                if(this.options.activeClass){
                    this.element.removeClass(this.options.activeClass)
                }
                if(this.options.hoverClass){
                    this.element.removeClass(this.options.hoverClass)
                }
                this._trigger("drop",d,this.ui(c));
                return this.element
            }
            return false
        },
        ui:function(d){
            return{
                draggable:(d.currentItem||d.element),
                helper:d.helper,
                position:d.position,
                offset:d.positionAbs
            }
        }
    });
    a.extend(a.ui.droppable,{
        version:"1.8.23"
    });
    a.ui.intersect=function(q,j,o){
        if(!j.offset){
            return false
        }
        var e=(q.positionAbs||q.position.absolute).left,d=e+q.helperProportions.width,n=(q.positionAbs||q.position.absolute).top,m=n+q.helperProportions.height;
        var g=j.offset.left,c=g+j.proportions.width,p=j.offset.top,k=p+j.proportions.height;
        switch(o){
            case"fit":
                return(g<=e&&d<=c&&p<=n&&m<=k);
                break;
            case"intersect":
                return(g<e+(q.helperProportions.width/2)&&d-(q.helperProportions.width/2)<c&&p<n+(q.helperProportions.height/2)&&m-(q.helperProportions.height/2)<k);
                break;
            case"pointer":
                var h=((q.positionAbs||q.position.absolute).left+(q.clickOffset||q.offset.click).left),i=((q.positionAbs||q.position.absolute).top+(q.clickOffset||q.offset.click).top),f=a.ui.isOver(i,h,p,g,j.proportions.height,j.proportions.width);
                return f;
                break;
            case"touch":
                return((n>=p&&n<=k)||(m>=p&&m<=k)||(n<p&&m>k))&&((e>=g&&e<=c)||(d>=g&&d<=c)||(e<g&&d>c));
                break;
            default:
                return false;
                break
        }
    };

    a.ui.ddmanager={
        current:null,
        droppables:{
            "default":[]
        },
        prepareOffsets:function(f,h){
            var c=a.ui.ddmanager.droppables[f.options.scope]||[];
            var g=h?h.type:null;
            var k=(f.currentItem||f.element).find(":data(droppable)").andSelf();
                droppablesLoop:for(var e=0;e<c.length;e++){
                    if(c[e].options.disabled||(f&&!c[e].accept.call(c[e].element[0],(f.currentItem||f.element)))){
                        continue
                    }
                    for(var d=0;d<k.length;d++){
                        if(k[d]==c[e].element[0]){
                            c[e].proportions.height=0;
                            continue droppablesLoop
                        }
                    }
                    c[e].visible=c[e].element.css("display")!="none";
                    if(!c[e].visible){
                        continue
                    }
                    if(g=="mousedown"){
                        c[e]._activate.call(c[e],h)
                    }
                    c[e].offset=c[e].element.offset();
                    c[e].proportions={
                        width:c[e].element[0].offsetWidth,
                        height:c[e].element[0].offsetHeight
                    }
                }
        },
        drop:function(c,d){
            var e=false;
            a.each(a.ui.ddmanager.droppables[c.options.scope]||[],function(){
                if(!this.options){
                    return
                }
                if(!this.options.disabled&&this.visible&&a.ui.intersect(c,this,this.options.tolerance)){
                    e=this._drop.call(this,d)||e
                }
                if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(c.currentItem||c.element))){
                    this.isout=1;
                    this.isover=0;
                    this._deactivate.call(this,d)
                }
            });
            return e
        },
        dragStart:function(c,d){
            c.element.parents(":not(body,html)").bind("scroll.droppable",function(){
                if(!c.options.refreshPositions){
                    a.ui.ddmanager.prepareOffsets(c,d)
                }
            })
        },
        drag:function(c,d){
            if(c.options.refreshPositions){
                a.ui.ddmanager.prepareOffsets(c,d)
            }
            a.each(a.ui.ddmanager.droppables[c.options.scope]||[],function(){
                if(this.options.disabled||this.greedyChild||!this.visible){
                    return
                }
                var f=a.ui.intersect(c,this,this.options.tolerance);
                var h=!f&&this.isover==1?"isout":(f&&this.isover==0?"isover":null);
                if(!h){
                    return
                }
                var g;
                if(this.options.greedy){
                    var e=this.element.parents(":data(droppable):eq(0)");
                    if(e.length){
                        g=a.data(e[0],"droppable");
                        g.greedyChild=(h=="isover"?1:0)
                    }
                }
                if(g&&h=="isover"){
                    g.isover=0;
                    g.isout=1;
                    g._out.call(g,d)
                }
                this[h]=1;
                this[h=="isout"?"isover":"isout"]=0;
                this[h=="isover"?"_over":"_out"].call(this,d);
                if(g&&h=="isout"){
                    g.isout=0;
                    g.isover=1;
                    g._over.call(g,d)
                }
            })
        },
        dragStop:function(c,d){
            c.element.parents(":not(body,html)").unbind("scroll.droppable");
            if(!c.options.refreshPositions){
                a.ui.ddmanager.prepareOffsets(c,d)
            }
        }
    }
})(jQuery);
/*
 * jQuery UI Resizable 1.8.23
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(c,d){
    c.widget("ui.resizable",c.ui.mouse,{
        widgetEventPrefix:"resize",
        options:{
            alsoResize:false,
            animate:false,
            animateDuration:"slow",
            animateEasing:"swing",
            aspectRatio:false,
            autoHide:false,
            containment:false,
            ghost:false,
            grid:false,
            handles:"e,s,se",
            helper:false,
            maxHeight:null,
            maxWidth:null,
            minHeight:10,
            minWidth:10,
            zIndex:1000
        },
        _create:function(){
            var f=this,k=this.options;
            this.element.addClass("ui-resizable");
            c.extend(this,{
                _aspectRatio:!!(k.aspectRatio),
                aspectRatio:k.aspectRatio,
                originalElement:this.element,
                _proportionallyResizeElements:[],
                _helper:k.helper||k.ghost||k.animate?k.helper||"ui-resizable-helper":null
            });
            if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){
                this.element.wrap(c('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                    position:this.element.css("position"),
                    width:this.element.outerWidth(),
                    height:this.element.outerHeight(),
                    top:this.element.css("top"),
                    left:this.element.css("left")
                }));
                this.element=this.element.parent().data("resizable",this.element.data("resizable"));
                this.elementIsWrapper=true;
                this.element.css({
                    marginLeft:this.originalElement.css("marginLeft"),
                    marginTop:this.originalElement.css("marginTop"),
                    marginRight:this.originalElement.css("marginRight"),
                    marginBottom:this.originalElement.css("marginBottom")
                });
                this.originalElement.css({
                    marginLeft:0,
                    marginTop:0,
                    marginRight:0,
                    marginBottom:0
                });
                this.originalResizeStyle=this.originalElement.css("resize");
                this.originalElement.css("resize","none");
                this._proportionallyResizeElements.push(this.originalElement.css({
                    position:"static",
                    zoom:1,
                    display:"block"
                }));
                this.originalElement.css({
                    margin:this.originalElement.css("margin")
                });
                this._proportionallyResize()
            }
            this.handles=k.handles||(!c(".ui-resizable-handle",this.element).length?"e,s,se":{
                n:".ui-resizable-n",
                e:".ui-resizable-e",
                s:".ui-resizable-s",
                w:".ui-resizable-w",
                se:".ui-resizable-se",
                sw:".ui-resizable-sw",
                ne:".ui-resizable-ne",
                nw:".ui-resizable-nw"
            });
            if(this.handles.constructor==String){
                if(this.handles=="all"){
                    this.handles="n,e,s,w,se,sw,ne,nw"
                }
                var l=this.handles.split(",");
                this.handles={};
                
                for(var g=0;g<l.length;g++){
                    var j=c.trim(l[g]),e="ui-resizable-"+j;
                    var h=c('<div class="ui-resizable-handle '+e+'"></div>');
                    h.css({
                        zIndex:k.zIndex
                    });
                    if("se"==j){
                        h.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
                    }
                    this.handles[j]=".ui-resizable-"+j;
                    this.element.append(h)
                }
            }
            this._renderAxis=function(q){
                q=q||this.element;
                for(var n in this.handles){
                    if(this.handles[n].constructor==String){
                        this.handles[n]=c(this.handles[n],this.element).show()
                    }
                    if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){
                        var o=c(this.handles[n],this.element),p=0;
                        p=/sw|ne|nw|se|n|s/.test(n)?o.outerHeight():o.outerWidth();
                        var m=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join("");
                        q.css(m,p);
                        this._proportionallyResize()
                    }
                    if(!c(this.handles[n]).length){
                        continue
                    }
                }
            };
            
            this._renderAxis(this.element);
            this._handles=c(".ui-resizable-handle",this.element).disableSelection();
            this._handles.mouseover(function(){
                if(!f.resizing){
                    if(this.className){
                        var i=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
                    }
                    f.axis=i&&i[1]?i[1]:"se"
                }
            });
            if(k.autoHide){
                this._handles.hide();
                c(this.element).addClass("ui-resizable-autohide").hover(function(){
                    if(k.disabled){
                        return
                    }
                    c(this).removeClass("ui-resizable-autohide");
                    f._handles.show()
                },function(){
                    if(k.disabled){
                        return
                    }
                    if(!f.resizing){
                        c(this).addClass("ui-resizable-autohide");
                        f._handles.hide()
                    }
                })
            }
            this._mouseInit()
        },
        destroy:function(){
            this._mouseDestroy();
            var e=function(g){
                c(g).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
        
            if(this.elementIsWrapper){
                e(this.element);
                var f=this.element;
                f.after(this.originalElement.css({
                    position:f.css("position"),
                    width:f.outerWidth(),
                    height:f.outerHeight(),
                    top:f.css("top"),
                    left:f.css("left")
                })).remove()
            }
            this.originalElement.css("resize",this.originalResizeStyle);
            e(this.originalElement);
            return this
        },
        _mouseCapture:function(f){
            var g=false;
            for(var e in this.handles){
                if(c(this.handles[e])[0]==f.target){
                    g=true
                }
            }
            return !this.options.disabled&&g
        },
        _mouseStart:function(g){
            var j=this.options,f=this.element.position(),e=this.element;
            this.resizing=true;
            this.documentScroll={
                top:c(document).scrollTop(),
                left:c(document).scrollLeft()
            };
        
            if(e.is(".ui-draggable")||(/absolute/).test(e.css("position"))){
                e.css({
                    position:"absolute",
                    top:f.top,
                    left:f.left
                })
            }
            this._renderProxy();
            var k=b(this.helper.css("left")),h=b(this.helper.css("top"));
            if(j.containment){
                k+=c(j.containment).scrollLeft()||0;
                h+=c(j.containment).scrollTop()||0
            }
            this.offset=this.helper.offset();
            this.position={
                left:k,
                top:h
            };
    
            this.size=this._helper?{
                width:e.outerWidth(),
                height:e.outerHeight()
            }:{
                width:e.width(),
                height:e.height()
            };
        
            this.originalSize=this._helper?{
                width:e.outerWidth(),
                height:e.outerHeight()
            }:{
                width:e.width(),
                height:e.height()
            };
        
            this.originalPosition={
                left:k,
                top:h
            };
    
            this.sizeDiff={
                width:e.outerWidth()-e.width(),
                height:e.outerHeight()-e.height()
            };
        
            this.originalMousePosition={
                left:g.pageX,
                top:g.pageY
            };
        
            this.aspectRatio=(typeof j.aspectRatio=="number")?j.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);
            var i=c(".ui-resizable-"+this.axis).css("cursor");
            c("body").css("cursor",i=="auto"?this.axis+"-resize":i);
            e.addClass("ui-resizable-resizing");
            this._propagate("start",g);
            return true
        },
        _mouseDrag:function(e){
            var h=this.helper,g=this.options,m={},q=this,j=this.originalMousePosition,n=this.axis;
            var r=(e.pageX-j.left)||0,p=(e.pageY-j.top)||0;
            var i=this._change[n];
            if(!i){
                return false
            }
            var l=i.apply(this,[e,r,p]),k=c.browser.msie&&c.browser.version<7,f=this.sizeDiff;
            this._updateVirtualBoundaries(e.shiftKey);
            if(this._aspectRatio||e.shiftKey){
                l=this._updateRatio(l,e)
            }
            l=this._respectSize(l,e);
            this._propagate("resize",e);
            h.css({
                top:this.position.top+"px",
                left:this.position.left+"px",
                width:this.size.width+"px",
                height:this.size.height+"px"
            });
            if(!this._helper&&this._proportionallyResizeElements.length){
                this._proportionallyResize()
            }
            this._updateCache(l);
            this._trigger("resize",e,this.ui());
            return false
        },
        _mouseStop:function(h){
            this.resizing=false;
            var i=this.options,m=this;
            if(this._helper){
                var g=this._proportionallyResizeElements,e=g.length&&(/textarea/i).test(g[0].nodeName),f=e&&c.ui.hasScroll(g[0],"left")?0:m.sizeDiff.height,k=e?0:m.sizeDiff.width;
                var n={
                    width:(m.helper.width()-k),
                    height:(m.helper.height()-f)
                },j=(parseInt(m.element.css("left"),10)+(m.position.left-m.originalPosition.left))||null,l=(parseInt(m.element.css("top"),10)+(m.position.top-m.originalPosition.top))||null;
                if(!i.animate){
                    this.element.css(c.extend(n,{
                        top:l,
                        left:j
                    }))
                }
                m.helper.height(m.size.height);
                m.helper.width(m.size.width);
                if(this._helper&&!i.animate){
                    this._proportionallyResize()
                }
            }
            c("body").css("cursor","auto");
            this.element.removeClass("ui-resizable-resizing");
            this._propagate("stop",h);
            if(this._helper){
                this.helper.remove()
            }
            return false
        },
        _updateVirtualBoundaries:function(g){
            var j=this.options,i,h,f,k,e;
            e={
                minWidth:a(j.minWidth)?j.minWidth:0,
                maxWidth:a(j.maxWidth)?j.maxWidth:Infinity,
                minHeight:a(j.minHeight)?j.minHeight:0,
                maxHeight:a(j.maxHeight)?j.maxHeight:Infinity
            };
        
            if(this._aspectRatio||g){
                i=e.minHeight*this.aspectRatio;
                f=e.minWidth/this.aspectRatio;
                h=e.maxHeight*this.aspectRatio;
                k=e.maxWidth/this.aspectRatio;
                if(i>e.minWidth){
                    e.minWidth=i
                }
                if(f>e.minHeight){
                    e.minHeight=f
                }
                if(h<e.maxWidth){
                    e.maxWidth=h
                }
                if(k<e.maxHeight){
                    e.maxHeight=k
                }
            }
            this._vBoundaries=e
        },
        _updateCache:function(e){
            var f=this.options;
            this.offset=this.helper.offset();
            if(a(e.left)){
                this.position.left=e.left
            }
            if(a(e.top)){
                this.position.top=e.top
            }
            if(a(e.height)){
                this.size.height=e.height
            }
            if(a(e.width)){
                this.size.width=e.width
            }
        },
        _updateRatio:function(h,g){
            var i=this.options,j=this.position,f=this.size,e=this.axis;
            if(a(h.height)){
                h.width=(h.height*this.aspectRatio)
            }else{
                if(a(h.width)){
                    h.height=(h.width/this.aspectRatio)
                }
            }
            if(e=="sw"){
                h.left=j.left+(f.width-h.width);
                h.top=null
            }
            if(e=="nw"){
                h.top=j.top+(f.height-h.height);
                h.left=j.left+(f.width-h.width)
            }
            return h
        },
        _respectSize:function(l,g){
            var j=this.helper,i=this._vBoundaries,r=this._aspectRatio||g.shiftKey,q=this.axis,t=a(l.width)&&i.maxWidth&&(i.maxWidth<l.width),m=a(l.height)&&i.maxHeight&&(i.maxHeight<l.height),h=a(l.width)&&i.minWidth&&(i.minWidth>l.width),s=a(l.height)&&i.minHeight&&(i.minHeight>l.height);
            if(h){
                l.width=i.minWidth
            }
            if(s){
                l.height=i.minHeight
            }
            if(t){
                l.width=i.maxWidth
            }
            if(m){
                l.height=i.maxHeight
            }
            var f=this.originalPosition.left+this.originalSize.width,p=this.position.top+this.size.height;
            var k=/sw|nw|w/.test(q),e=/nw|ne|n/.test(q);
            if(h&&k){
                l.left=f-i.minWidth
            }
            if(t&&k){
                l.left=f-i.maxWidth
            }
            if(s&&e){
                l.top=p-i.minHeight
            }
            if(m&&e){
                l.top=p-i.maxHeight
            }
            var n=!l.width&&!l.height;
            if(n&&!l.left&&l.top){
                l.top=null
            }else{
                if(n&&!l.top&&l.left){
                    l.left=null
                }
            }
            return l
        },
        _proportionallyResize:function(){
            var k=this.options;
            if(!this._proportionallyResizeElements.length){
                return
            }
            var g=this.helper||this.element;
            for(var f=0;f<this._proportionallyResizeElements.length;f++){
                var h=this._proportionallyResizeElements[f];
                if(!this.borderDif){
                    var e=[h.css("borderTopWidth"),h.css("borderRightWidth"),h.css("borderBottomWidth"),h.css("borderLeftWidth")],j=[h.css("paddingTop"),h.css("paddingRight"),h.css("paddingBottom"),h.css("paddingLeft")];
                    this.borderDif=c.map(e,function(l,n){
                        var m=parseInt(l,10)||0,o=parseInt(j[n],10)||0;
                        return m+o
                    })
                }
                if(c.browser.msie&&!(!(c(g).is(":hidden")||c(g).parents(":hidden").length))){
                    continue
                }
                h.css({
                    height:(g.height()-this.borderDif[0]-this.borderDif[2])||0,
                    width:(g.width()-this.borderDif[1]-this.borderDif[3])||0
                })
            }
        },
        _renderProxy:function(){
            var f=this.element,i=this.options;
            this.elementOffset=f.offset();
            if(this._helper){
                this.helper=this.helper||c('<div style="overflow:hidden;"></div>');
                var e=c.browser.msie&&c.browser.version<7,g=(e?1:0),h=(e?2:-1);
                this.helper.addClass(this._helper).css({
                    width:this.element.outerWidth()+h,
                    height:this.element.outerHeight()+h,
                    position:"absolute",
                    left:this.elementOffset.left-g+"px",
                    top:this.elementOffset.top-g+"px",
                    zIndex:++i.zIndex
                });
                this.helper.appendTo("body").disableSelection()
            }else{
                this.helper=this.element
            }
        },
        _change:{
            e:function(g,f,e){
                return{
                    width:this.originalSize.width+f
                }
            },
            w:function(h,f,e){
                var j=this.options,g=this.originalSize,i=this.originalPosition;
                return{
                    left:i.left+f,
                    width:g.width-f
                }
            },
            n:function(h,f,e){
                var j=this.options,g=this.originalSize,i=this.originalPosition;
                return{
                    top:i.top+e,
                    height:g.height-e
                }
            },
            s:function(g,f,e){
                return{
                    height:this.originalSize.height+e
                }
            },
            se:function(g,f,e){
                return c.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[g,f,e]))
            },
            sw:function(g,f,e){
                return c.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[g,f,e]))
            },
            ne:function(g,f,e){
                return c.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[g,f,e]))
            },
            nw:function(g,f,e){
                return c.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[g,f,e]))
            }
        },
        _propagate:function(f,e){
            c.ui.plugin.call(this,f,[e,this.ui()]);
            (f!="resize"&&this._trigger(f,e,this.ui()))
        },
        plugins:{},
        ui:function(){
            return{
                originalElement:this.originalElement,
                element:this.element,
                helper:this.helper,
                position:this.position,
                size:this.size,
                originalSize:this.originalSize,
                originalPosition:this.originalPosition
            }
        }
    });
    c.extend(c.ui.resizable,{
        version:"1.8.23"
    });
    c.ui.plugin.add("resizable","alsoResize",{
        start:function(f,g){
            var e=c(this).data("resizable"),i=e.options;
            var h=function(j){
                c(j).each(function(){
                    var k=c(this);
                    k.data("resizable-alsoresize",{
                        width:parseInt(k.width(),10),
                        height:parseInt(k.height(),10),
                        left:parseInt(k.css("left"),10),
                        top:parseInt(k.css("top"),10)
                    })
                })
            };
            
            if(typeof(i.alsoResize)=="object"&&!i.alsoResize.parentNode){
                if(i.alsoResize.length){
                    i.alsoResize=i.alsoResize[0];
                    h(i.alsoResize)
                }else{
                    c.each(i.alsoResize,function(j){
                        h(j)
                    })
                }
            }else{
                h(i.alsoResize)
            }
        },
        resize:function(g,i){
            var f=c(this).data("resizable"),j=f.options,h=f.originalSize,l=f.originalPosition;
            var k={
                height:(f.size.height-h.height)||0,
                width:(f.size.width-h.width)||0,
                top:(f.position.top-l.top)||0,
                left:(f.position.left-l.left)||0
            },e=function(m,n){
                c(m).each(function(){
                    var q=c(this),r=c(this).data("resizable-alsoresize"),p={},o=n&&n.length?n:q.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];
                    c.each(o,function(s,u){
                        var t=(r[u]||0)+(k[u]||0);
                        if(t&&t>=0){
                            p[u]=t||null
                        }
                    });
                    q.css(p)
                })
            };
    
            if(typeof(j.alsoResize)=="object"&&!j.alsoResize.nodeType){
                c.each(j.alsoResize,function(m,n){
                    e(m,n)
                })
            }else{
                e(j.alsoResize)
            }
        },
        stop:function(e,f){
            c(this).removeData("resizable-alsoresize")
        }
    });
    c.ui.plugin.add("resizable","animate",{
        stop:function(i,n){
            var p=c(this).data("resizable"),j=p.options;
            var h=p._proportionallyResizeElements,e=h.length&&(/textarea/i).test(h[0].nodeName),f=e&&c.ui.hasScroll(h[0],"left")?0:p.sizeDiff.height,l=e?0:p.sizeDiff.width;
            var g={
                width:(p.size.width-l),
                height:(p.size.height-f)
            },k=(parseInt(p.element.css("left"),10)+(p.position.left-p.originalPosition.left))||null,m=(parseInt(p.element.css("top"),10)+(p.position.top-p.originalPosition.top))||null;
            p.element.animate(c.extend(g,m&&k?{
                top:m,
                left:k
            }:{}),{
                duration:j.animateDuration,
                easing:j.animateEasing,
                step:function(){
                    var o={
                        width:parseInt(p.element.css("width"),10),
                        height:parseInt(p.element.css("height"),10),
                        top:parseInt(p.element.css("top"),10),
                        left:parseInt(p.element.css("left"),10)
                    };
                    
                    if(h&&h.length){
                        c(h[0]).css({
                            width:o.width,
                            height:o.height
                        })
                    }
                    p._updateCache(o);
                    p._propagate("resize",i)
                }
            })
        }
    });
    c.ui.plugin.add("resizable","containment",{
        start:function(f,r){
            var t=c(this).data("resizable"),j=t.options,l=t.element;
            var g=j.containment,k=(g instanceof c)?g.get(0):(/parent/.test(g))?l.parent().get(0):g;
            if(!k){
                return
            }
            t.containerElement=c(k);
            if(/document/.test(g)||g==document){
                t.containerOffset={
                    left:0,
                    top:0
                };
            
                t.containerPosition={
                    left:0,
                    top:0
                };
            
                t.parentData={
                    element:c(document),
                    left:0,
                    top:0,
                    width:c(document).width(),
                    height:c(document).height()||document.body.parentNode.scrollHeight
                }
            }else{
                var n=c(k),i=[];
                c(["Top","Right","Left","Bottom"]).each(function(p,o){
                    i[p]=b(n.css("padding"+o))
                });
                t.containerOffset=n.offset();
                t.containerPosition=n.position();
                t.containerSize={
                    height:(n.innerHeight()-i[3]),
                    width:(n.innerWidth()-i[1])
                };
            
                var q=t.containerOffset,e=t.containerSize.height,m=t.containerSize.width,h=(c.ui.hasScroll(k,"left")?k.scrollWidth:m),s=(c.ui.hasScroll(k)?k.scrollHeight:e);
                t.parentData={
                    element:k,
                    left:q.left,
                    top:q.top,
                    width:h,
                    height:s
                }
            }
        },
        resize:function(g,q){
            var t=c(this).data("resizable"),i=t.options,f=t.containerSize,p=t.containerOffset,m=t.size,n=t.position,r=t._aspectRatio||g.shiftKey,e={
                top:0,
                left:0
            },h=t.containerElement;
            if(h[0]!=document&&(/static/).test(h.css("position"))){
                e=p
            }
            if(n.left<(t._helper?p.left:0)){
                t.size.width=t.size.width+(t._helper?(t.position.left-p.left):(t.position.left-e.left));
                if(r){
                    t.size.height=t.size.width/t.aspectRatio
                }
                t.position.left=i.helper?p.left:0
            }
            if(n.top<(t._helper?p.top:0)){
                t.size.height=t.size.height+(t._helper?(t.position.top-p.top):t.position.top);
                if(r){
                    t.size.width=t.size.height*t.aspectRatio
                }
                t.position.top=t._helper?p.top:0
            }
            t.offset.left=t.parentData.left+t.position.left;
            t.offset.top=t.parentData.top+t.position.top;
            var l=Math.abs((t._helper?t.offset.left-e.left:(t.offset.left-e.left))+t.sizeDiff.width),s=Math.abs((t._helper?t.offset.top-e.top:(t.offset.top-p.top))+t.sizeDiff.height);
            var k=t.containerElement.get(0)==t.element.parent().get(0),j=/relative|absolute/.test(t.containerElement.css("position"));
            if(k&&j){
                l-=t.parentData.left
            }
            if(l+t.size.width>=t.parentData.width){
                t.size.width=t.parentData.width-l;
                if(r){
                    t.size.height=t.size.width/t.aspectRatio
                }
            }
            if(s+t.size.height>=t.parentData.height){
                t.size.height=t.parentData.height-s;
                if(r){
                    t.size.width=t.size.height*t.aspectRatio
                }
            }
        },
        stop:function(f,n){
            var q=c(this).data("resizable"),g=q.options,l=q.position,m=q.containerOffset,e=q.containerPosition,i=q.containerElement;
            var j=c(q.helper),r=j.offset(),p=j.outerWidth()-q.sizeDiff.width,k=j.outerHeight()-q.sizeDiff.height;
            if(q._helper&&!g.animate&&(/relative/).test(i.css("position"))){
                c(this).css({
                    left:r.left-e.left-m.left,
                    width:p,
                    height:k
                })
            }
            if(q._helper&&!g.animate&&(/static/).test(i.css("position"))){
                c(this).css({
                    left:r.left-e.left-m.left,
                    width:p,
                    height:k
                })
            }
        }
    });
    c.ui.plugin.add("resizable","ghost",{
        start:function(g,h){
            var e=c(this).data("resizable"),i=e.options,f=e.size;
            e.ghost=e.originalElement.clone();
            e.ghost.css({
                opacity:0.25,
                display:"block",
                position:"relative",
                height:f.height,
                width:f.width,
                margin:0,
                left:0,
                top:0
            }).addClass("ui-resizable-ghost").addClass(typeof i.ghost=="string"?i.ghost:"");
            e.ghost.appendTo(e.helper)
        },
        resize:function(f,g){
            var e=c(this).data("resizable"),h=e.options;
            if(e.ghost){
                e.ghost.css({
                    position:"relative",
                    height:e.size.height,
                    width:e.size.width
                })
            }
        },
        stop:function(f,g){
            var e=c(this).data("resizable"),h=e.options;
            if(e.ghost&&e.helper){
                e.helper.get(0).removeChild(e.ghost.get(0))
            }
        }
    });
    c.ui.plugin.add("resizable","grid",{
        resize:function(e,m){
            var p=c(this).data("resizable"),h=p.options,k=p.size,i=p.originalSize,j=p.originalPosition,n=p.axis,l=h._aspectRatio||e.shiftKey;
            h.grid=typeof h.grid=="number"?[h.grid,h.grid]:h.grid;
            var g=Math.round((k.width-i.width)/(h.grid[0]||1))*(h.grid[0]||1),f=Math.round((k.height-i.height)/(h.grid[1]||1))*(h.grid[1]||1);
            if(/^(se|s|e)$/.test(n)){
                p.size.width=i.width+g;
                p.size.height=i.height+f
            }else{
                if(/^(ne)$/.test(n)){
                    p.size.width=i.width+g;
                    p.size.height=i.height+f;
                    p.position.top=j.top-f
                }else{
                    if(/^(sw)$/.test(n)){
                        p.size.width=i.width+g;
                        p.size.height=i.height+f;
                        p.position.left=j.left-g
                    }else{
                        p.size.width=i.width+g;
                        p.size.height=i.height+f;
                        p.position.top=j.top-f;
                        p.position.left=j.left-g
                    }
                }
            }
        }
    });
    var b=function(e){
        return parseInt(e,10)||0
    };
    
    var a=function(e){
        return !isNaN(parseInt(e,10))
    }
})(jQuery);
/*
 * jQuery UI Selectable 1.8.23
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Selectables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(a,b){
    a.widget("ui.selectable",a.ui.mouse,{
        options:{
            appendTo:"body",
            autoRefresh:true,
            distance:0,
            filter:"*",
            tolerance:"touch"
        },
        _create:function(){
            var c=this;
            this.element.addClass("ui-selectable");
            this.dragged=false;
            var d;
            this.refresh=function(){
                d=a(c.options.filter,c.element[0]);
                d.addClass("ui-selectee");
                d.each(function(){
                    var e=a(this);
                    var f=e.offset();
                    a.data(this,"selectable-item",{
                        element:this,
                        $element:e,
                        left:f.left,
                        top:f.top,
                        right:f.left+e.outerWidth(),
                        bottom:f.top+e.outerHeight(),
                        startselected:false,
                        selected:e.hasClass("ui-selected"),
                        selecting:e.hasClass("ui-selecting"),
                        unselecting:e.hasClass("ui-unselecting")
                    })
                })
            };
                
            this.refresh();
            this.selectees=d.addClass("ui-selectee");
            this._mouseInit();
            this.helper=a("<div class='ui-selectable-helper'></div>")
        },
        destroy:function(){
            this.selectees.removeClass("ui-selectee").removeData("selectable-item");
            this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");
            this._mouseDestroy();
            return this
        },
        _mouseStart:function(e){
            var c=this;
            this.opos=[e.pageX,e.pageY];
            if(this.options.disabled){
                return
            }
            var d=this.options;
            this.selectees=a(d.filter,this.element[0]);
            this._trigger("start",e);
            a(d.appendTo).append(this.helper);
            this.helper.css({
                left:e.clientX,
                top:e.clientY,
                width:0,
                height:0
            });
            if(d.autoRefresh){
                this.refresh()
            }
            this.selectees.filter(".ui-selected").each(function(){
                var f=a.data(this,"selectable-item");
                f.startselected=true;
                if(!e.metaKey&&!e.ctrlKey){
                    f.$element.removeClass("ui-selected");
                    f.selected=false;
                    f.$element.addClass("ui-unselecting");
                    f.unselecting=true;
                    c._trigger("unselecting",e,{
                        unselecting:f.element
                    })
                }
            });
            a(e.target).parents().andSelf().each(function(){
                var g=a.data(this,"selectable-item");
                if(g){
                    var f=(!e.metaKey&&!e.ctrlKey)||!g.$element.hasClass("ui-selected");
                    g.$element.removeClass(f?"ui-unselecting":"ui-selected").addClass(f?"ui-selecting":"ui-unselecting");
                    g.unselecting=!f;
                    g.selecting=f;
                    g.selected=f;
                    if(f){
                        c._trigger("selecting",e,{
                            selecting:g.element
                        })
                    }else{
                        c._trigger("unselecting",e,{
                            unselecting:g.element
                        })
                    }
                    return false
                }
            })
        },
        _mouseDrag:function(j){
            var d=this;
            this.dragged=true;
            if(this.options.disabled){
                return
            }
            var f=this.options;
            var e=this.opos[0],i=this.opos[1],c=j.pageX,h=j.pageY;
            if(e>c){
                var g=c;
                c=e;
                e=g
            }
            if(i>h){
                var g=h;
                h=i;
                i=g
            }
            this.helper.css({
                left:e,
                top:i,
                width:c-e,
                height:h-i
            });
            this.selectees.each(function(){
                var k=a.data(this,"selectable-item");
                if(!k||k.element==d.element[0]){
                    return
                }
                var l=false;
                if(f.tolerance=="touch"){
                    l=(!(k.left>c||k.right<e||k.top>h||k.bottom<i))
                }else{
                    if(f.tolerance=="fit"){
                        l=(k.left>e&&k.right<c&&k.top>i&&k.bottom<h)
                    }
                }
                if(l){
                    if(k.selected){
                        k.$element.removeClass("ui-selected");
                        k.selected=false
                    }
                    if(k.unselecting){
                        k.$element.removeClass("ui-unselecting");
                        k.unselecting=false
                    }
                    if(!k.selecting){
                        k.$element.addClass("ui-selecting");
                        k.selecting=true;
                        d._trigger("selecting",j,{
                            selecting:k.element
                        })
                    }
                }else{
                    if(k.selecting){
                        if((j.metaKey||j.ctrlKey)&&k.startselected){
                            k.$element.removeClass("ui-selecting");
                            k.selecting=false;
                            k.$element.addClass("ui-selected");
                            k.selected=true
                        }else{
                            k.$element.removeClass("ui-selecting");
                            k.selecting=false;
                            if(k.startselected){
                                k.$element.addClass("ui-unselecting");
                                k.unselecting=true
                            }
                            d._trigger("unselecting",j,{
                                unselecting:k.element
                            })
                        }
                    }
                    if(k.selected){
                        if(!j.metaKey&&!j.ctrlKey&&!k.startselected){
                            k.$element.removeClass("ui-selected");
                            k.selected=false;
                            k.$element.addClass("ui-unselecting");
                            k.unselecting=true;
                            d._trigger("unselecting",j,{
                                unselecting:k.element
                            })
                        }
                    }
                }
            });
            return false
        },
        _mouseStop:function(e){
            var c=this;
            this.dragged=false;
            var d=this.options;
            a(".ui-unselecting",this.element[0]).each(function(){
                var f=a.data(this,"selectable-item");
                f.$element.removeClass("ui-unselecting");
                f.unselecting=false;
                f.startselected=false;
                c._trigger("unselected",e,{
                    unselected:f.element
                })
            });
            a(".ui-selecting",this.element[0]).each(function(){
                var f=a.data(this,"selectable-item");
                f.$element.removeClass("ui-selecting").addClass("ui-selected");
                f.selecting=false;
                f.selected=true;
                f.startselected=true;
                c._trigger("selected",e,{
                    selected:f.element
                })
            });
            this._trigger("stop",e);
            this.helper.remove();
            return false
        }
    });
    a.extend(a.ui.selectable,{
        version:"1.8.23"
    })
})(jQuery);
/*
 * jQuery UI Sortable 1.8.23
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(a,b){
    a.widget("ui.sortable",a.ui.mouse,{
        widgetEventPrefix:"sort",
        ready:false,
        options:{
            appendTo:"parent",
            axis:false,
            connectWith:false,
            containment:false,
            cursor:"auto",
            cursorAt:false,
            dropOnEmpty:true,
            forcePlaceholderSize:false,
            forceHelperSize:false,
            grid:false,
            handle:false,
            helper:"original",
            items:"> *",
            opacity:false,
            placeholder:false,
            revert:false,
            scroll:true,
            scrollSensitivity:20,
            scrollSpeed:20,
            scope:"default",
            tolerance:"intersect",
            zIndex:1000
        },
        _create:function(){
            var c=this.options;
            this.containerCache={};
            
            this.element.addClass("ui-sortable");
            this.refresh();
            this.floating=this.items.length?c.axis==="x"||(/left|right/).test(this.items[0].item.css("float"))||(/inline|table-cell/).test(this.items[0].item.css("display")):false;
            this.offset=this.element.offset();
            this._mouseInit();
            this.ready=true
        },
        destroy:function(){
            a.Widget.prototype.destroy.call(this);
            this.element.removeClass("ui-sortable ui-sortable-disabled");
            this._mouseDestroy();
            for(var c=this.items.length-1;c>=0;c--){
                this.items[c].item.removeData(this.widgetName+"-item")
            }
            return this
        },
        _setOption:function(c,d){
            if(c==="disabled"){
                this.options[c]=d;
                this.widget()[d?"addClass":"removeClass"]("ui-sortable-disabled")
            }else{
                a.Widget.prototype._setOption.apply(this,arguments)
            }
        },
        _mouseCapture:function(g,h){
            var f=this;
            if(this.reverting){
                return false
            }
            if(this.options.disabled||this.options.type=="static"){
                return false
            }
            this._refreshItems(g);
            var e=null,d=this,c=a(g.target).parents().each(function(){
                if(a.data(this,f.widgetName+"-item")==d){
                    e=a(this);
                    return false
                }
            });
            if(a.data(g.target,f.widgetName+"-item")==d){
                e=a(g.target)
            }
            if(!e){
                return false
            }
            if(this.options.handle&&!h){
                var i=false;
                a(this.options.handle,e).find("*").andSelf().each(function(){
                    if(this==g.target){
                        i=true
                    }
                });
                if(!i){
                    return false
                }
            }
            this.currentItem=e;
            this._removeCurrentsFromItems();
            return true
        },
        _mouseStart:function(f,g,c){
            var h=this.options,d=this;
            this.currentContainer=this;
            this.refreshPositions();
            this.helper=this._createHelper(f);
            this._cacheHelperProportions();
            this._cacheMargins();
            this.scrollParent=this.helper.scrollParent();
            this.offset=this.currentItem.offset();
            this.offset={
                top:this.offset.top-this.margins.top,
                left:this.offset.left-this.margins.left
            };
        
            a.extend(this.offset,{
                click:{
                    left:f.pageX-this.offset.left,
                    top:f.pageY-this.offset.top
                },
                parent:this._getParentOffset(),
                relative:this._getRelativeOffset()
            });
            this.helper.css("position","absolute");
            this.cssPosition=this.helper.css("position");
            this.originalPosition=this._generatePosition(f);
            this.originalPageX=f.pageX;
            this.originalPageY=f.pageY;
            (h.cursorAt&&this._adjustOffsetFromHelper(h.cursorAt));
            this.domPosition={
                prev:this.currentItem.prev()[0],
                parent:this.currentItem.parent()[0]
            };
        
            if(this.helper[0]!=this.currentItem[0]){
                this.currentItem.hide()
            }
            this._createPlaceholder();
            if(h.containment){
                this._setContainment()
            }
            if(h.cursor){
                if(a("body").css("cursor")){
                    this._storedCursor=a("body").css("cursor")
                }
                a("body").css("cursor",h.cursor)
            }
            if(h.opacity){
                if(this.helper.css("opacity")){
                    this._storedOpacity=this.helper.css("opacity")
                }
                this.helper.css("opacity",h.opacity)
            }
            if(h.zIndex){
                if(this.helper.css("zIndex")){
                    this._storedZIndex=this.helper.css("zIndex")
                }
                this.helper.css("zIndex",h.zIndex)
            }
            if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){
                this.overflowOffset=this.scrollParent.offset()
            }
            this._trigger("start",f,this._uiHash());
            if(!this._preserveHelperProportions){
                this._cacheHelperProportions()
            }
            if(!c){
                for(var e=this.containers.length-1;e>=0;e--){
                    this.containers[e]._trigger("activate",f,d._uiHash(this))
                }
            }
            if(a.ui.ddmanager){
                a.ui.ddmanager.current=this
            }
            if(a.ui.ddmanager&&!h.dropBehaviour){
                a.ui.ddmanager.prepareOffsets(this,f)
            }
            this.dragging=true;
            this.helper.addClass("ui-sortable-helper");
            this._mouseDrag(f);
            return true
        },
        _mouseDrag:function(g){
            this.position=this._generatePosition(g);
            this.positionAbs=this._convertPositionTo("absolute");
            if(!this.lastPositionAbs){
                this.lastPositionAbs=this.positionAbs
            }
            if(this.options.scroll){
                var h=this.options,c=false;
                if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){
                    if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-g.pageY<h.scrollSensitivity){
                        this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop+h.scrollSpeed
                    }else{
                        if(g.pageY-this.overflowOffset.top<h.scrollSensitivity){
                            this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop-h.scrollSpeed
                        }
                    }
                    if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-g.pageX<h.scrollSensitivity){
                        this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft+h.scrollSpeed
                    }else{
                        if(g.pageX-this.overflowOffset.left<h.scrollSensitivity){
                            this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft-h.scrollSpeed
                        }
                    }
                }else{
                    if(g.pageY-a(document).scrollTop()<h.scrollSensitivity){
                        c=a(document).scrollTop(a(document).scrollTop()-h.scrollSpeed)
                    }else{
                        if(a(window).height()-(g.pageY-a(document).scrollTop())<h.scrollSensitivity){
                            c=a(document).scrollTop(a(document).scrollTop()+h.scrollSpeed)
                        }
                    }
                    if(g.pageX-a(document).scrollLeft()<h.scrollSensitivity){
                        c=a(document).scrollLeft(a(document).scrollLeft()-h.scrollSpeed)
                    }else{
                        if(a(window).width()-(g.pageX-a(document).scrollLeft())<h.scrollSensitivity){
                            c=a(document).scrollLeft(a(document).scrollLeft()+h.scrollSpeed)
                        }
                    }
                }
                if(c!==false&&a.ui.ddmanager&&!h.dropBehaviour){
                    a.ui.ddmanager.prepareOffsets(this,g)
                }
            }
            this.positionAbs=this._convertPositionTo("absolute");
            if(!this.options.axis||this.options.axis!="y"){
                this.helper[0].style.left=this.position.left+"px"
            }
            if(!this.options.axis||this.options.axis!="x"){
                this.helper[0].style.top=this.position.top+"px"
            }
            for(var e=this.items.length-1;e>=0;e--){
                var f=this.items[e],d=f.item[0],j=this._intersectsWithPointer(f);
                if(!j){
                    continue
                }
                if(d!=this.currentItem[0]&&this.placeholder[j==1?"next":"prev"]()[0]!=d&&!a.ui.contains(this.placeholder[0],d)&&(this.options.type=="semi-dynamic"?!a.ui.contains(this.element[0],d):true)){
                    this.direction=j==1?"down":"up";
                    if(this.options.tolerance=="pointer"||this._intersectsWithSides(f)){
                        this._rearrange(g,f)
                    }else{
                        break
                    }
                    this._trigger("change",g,this._uiHash());
                    break
                }
            }
            this._contactContainers(g);
            if(a.ui.ddmanager){
                a.ui.ddmanager.drag(this,g)
            }
            this._trigger("sort",g,this._uiHash());
            this.lastPositionAbs=this.positionAbs;
            return false
        },
        _mouseStop:function(d,e){
            if(!d){
                return
            }
            if(a.ui.ddmanager&&!this.options.dropBehaviour){
                a.ui.ddmanager.drop(this,d)
            }
            if(this.options.revert){
                var c=this;
                var f=c.placeholder.offset();
                c.reverting=true;
                a(this.helper).animate({
                    left:f.left-this.offset.parent.left-c.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),
                    top:f.top-this.offset.parent.top-c.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)
                },parseInt(this.options.revert,10)||500,function(){
                    c._clear(d)
                })
            }else{
                this._clear(d,e)
            }
            return false
        },
        cancel:function(){
            var c=this;
            if(this.dragging){
                this._mouseUp({
                    target:null
                });
                if(this.options.helper=="original"){
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                }else{
                    this.currentItem.show()
                }
                for(var d=this.containers.length-1;d>=0;d--){
                    this.containers[d]._trigger("deactivate",null,c._uiHash(this));
                    if(this.containers[d].containerCache.over){
                        this.containers[d]._trigger("out",null,c._uiHash(this));
                        this.containers[d].containerCache.over=0
                    }
                }
            }
            if(this.placeholder){
                if(this.placeholder[0].parentNode){
                    this.placeholder[0].parentNode.removeChild(this.placeholder[0])
                }
                if(this.options.helper!="original"&&this.helper&&this.helper[0].parentNode){
                    this.helper.remove()
                }
                a.extend(this,{
                    helper:null,
                    dragging:false,
                    reverting:false,
                    _noFinalSort:null
                });
                if(this.domPosition.prev){
                    a(this.domPosition.prev).after(this.currentItem)
                }else{
                    a(this.domPosition.parent).prepend(this.currentItem)
                }
            }
            return this
        },
        serialize:function(e){
            var c=this._getItemsAsjQuery(e&&e.connected);
            var d=[];
            e=e||{};
    
            a(c).each(function(){
                var f=(a(e.item||this).attr(e.attribute||"id")||"").match(e.expression||(/(.+)[-=_](.+)/));
                    if(f){
                        d.push((e.key||f[1]+"[]")+"="+(e.key&&e.expression?f[1]:f[2]))
                    }
                });
            if(!d.length&&e.key){
                d.push(e.key+"=")
            }
            return d.join("&")
            },
            toArray:function(e){
                var c=this._getItemsAsjQuery(e&&e.connected);
                var d=[];
                e=e||{};
    
                c.each(function(){
                    d.push(a(e.item||this).attr(e.attribute||"id")||"")
                });
                return d
            },
            _intersectsWith:function(m){
                var e=this.positionAbs.left,d=e+this.helperProportions.width,k=this.positionAbs.top,j=k+this.helperProportions.height;
                var f=m.left,c=f+m.width,n=m.top,i=n+m.height;
                var o=this.offset.click.top,h=this.offset.click.left;
                var g=(k+o)>n&&(k+o)<i&&(e+h)>f&&(e+h)<c;
                if(this.options.tolerance=="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>m[this.floating?"width":"height"])){
                    return g
                }else{
                    return(f<e+(this.helperProportions.width/2)&&d-(this.helperProportions.width/2)<c&&n<k+(this.helperProportions.height/2)&&j-(this.helperProportions.height/2)<i)
                }
            },
            _intersectsWithPointer:function(e){
                var f=(this.options.axis==="x")||a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height),d=(this.options.axis==="y")||a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),h=f&&d,c=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();
                if(!h){
                    return false
                }
                return this.floating?(((g&&g=="right")||c=="down")?2:1):(c&&(c=="down"?2:1))
            },
            _intersectsWithSides:function(f){
                var d=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,f.top+(f.height/2),f.height),e=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,f.left+(f.width/2),f.width),c=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();
                if(this.floating&&g){
                    return((g=="right"&&e)||(g=="left"&&!e))
                }else{
                    return c&&((c=="down"&&d)||(c=="up"&&!d))
                }
            },
            _getDragVerticalDirection:function(){
                var c=this.positionAbs.top-this.lastPositionAbs.top;
                return c!=0&&(c>0?"down":"up")
            },
            _getDragHorizontalDirection:function(){
                var c=this.positionAbs.left-this.lastPositionAbs.left;
                return c!=0&&(c>0?"right":"left")
            },
            refresh:function(c){
                this._refreshItems(c);
                this.refreshPositions();
                return this
            },
            _connectWith:function(){
                var c=this.options;
                return c.connectWith.constructor==String?[c.connectWith]:c.connectWith
            },
            _getItemsAsjQuery:function(c){
                var m=this;
                var h=[];
                var f=[];
                var k=this._connectWith();
                if(k&&c){
                    for(var e=k.length-1;e>=0;e--){
                        var l=a(k[e]);
                        for(var d=l.length-1;d>=0;d--){
                            var g=a.data(l[d],this.widgetName);
                            if(g&&g!=this&&!g.options.disabled){
                                f.push([a.isFunction(g.options.items)?g.options.items.call(g.element):a(g.options.items,g.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),g])
                            }
                        }
                    }
                }
                f.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{
                    options:this.options,
                    item:this.currentItem
                }):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);
                for(var e=f.length-1;e>=0;e--){
                    f[e][0].each(function(){
                        h.push(this)
                    })
                }
                return a(h)
            },
            _removeCurrentsFromItems:function(){
                var e=this.currentItem.find(":data("+this.widgetName+"-item)");
                for(var d=0;d<this.items.length;d++){
                    for(var c=0;c<e.length;c++){
                        if(e[c]==this.items[d].item[0]){
                            this.items.splice(d,1)
                        }
                    }
                }
            },
            _refreshItems:function(c){
                this.items=[];
                this.containers=[this];
                var k=this.items;
                var q=this;
                var g=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],c,{
                    item:this.currentItem
                }):a(this.options.items,this.element),this]];
                var m=this._connectWith();
                if(m&&this.ready){
                    for(var f=m.length-1;f>=0;f--){
                        var n=a(m[f]);
                        for(var e=n.length-1;e>=0;e--){
                            var h=a.data(n[e],this.widgetName);
                            if(h&&h!=this&&!h.options.disabled){
                                g.push([a.isFunction(h.options.items)?h.options.items.call(h.element[0],c,{
                                    item:this.currentItem
                                }):a(h.options.items,h.element),h]);
                                this.containers.push(h)
                            }
                        }
                    }
                }
                for(var f=g.length-1;f>=0;f--){
                    var l=g[f][1];
                    var d=g[f][0];
                    for(var e=0,o=d.length;e<o;e++){
                        var p=a(d[e]);
                        p.data(this.widgetName+"-item",l);
                        k.push({
                            item:p,
                            instance:l,
                            width:0,
                            height:0,
                            left:0,
                            top:0
                        })
                    }
                }
            },
            refreshPositions:function(c){
                if(this.offsetParent&&this.helper){
                    this.offset.parent=this._getParentOffset()
                }
                for(var e=this.items.length-1;e>=0;e--){
                    var f=this.items[e];
                    if(f.instance!=this.currentContainer&&this.currentContainer&&f.item[0]!=this.currentItem[0]){
                        continue
                    }
                    var d=this.options.toleranceElement?a(this.options.toleranceElement,f.item):f.item;
                    if(!c){
                        f.width=d.outerWidth();
                        f.height=d.outerHeight()
                    }
                    var g=d.offset();
                    f.left=g.left;
                    f.top=g.top
                }
                if(this.options.custom&&this.options.custom.refreshContainers){
                    this.options.custom.refreshContainers.call(this)
                }else{
                    for(var e=this.containers.length-1;e>=0;e--){
                        var g=this.containers[e].element.offset();
                        this.containers[e].containerCache.left=g.left;
                        this.containers[e].containerCache.top=g.top;
                        this.containers[e].containerCache.width=this.containers[e].element.outerWidth();
                        this.containers[e].containerCache.height=this.containers[e].element.outerHeight()
                    }
                }
                return this
            },
            _createPlaceholder:function(e){
                var c=e||this,f=c.options;
                if(!f.placeholder||f.placeholder.constructor==String){
                    var d=f.placeholder;
                    f.placeholder={
                        element:function(){
                            var g=a(document.createElement(c.currentItem[0].nodeName)).addClass(d||c.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                            if(!d){
                                g.style.visibility="hidden"
                            }
                            return g
                        },
                        update:function(g,h){
                            if(d&&!f.forcePlaceholderSize){
                                return
                            }
                            if(!h.height()){
                                h.height(c.currentItem.innerHeight()-parseInt(c.currentItem.css("paddingTop")||0,10)-parseInt(c.currentItem.css("paddingBottom")||0,10))
                            }
                            if(!h.width()){
                                h.width(c.currentItem.innerWidth()-parseInt(c.currentItem.css("paddingLeft")||0,10)-parseInt(c.currentItem.css("paddingRight")||0,10))
                            }
                        }
                    }
                }
                c.placeholder=a(f.placeholder.element.call(c.element,c.currentItem));
                c.currentItem.after(c.placeholder);
                f.placeholder.update(c,c.placeholder)
            },
            _contactContainers:function(c){
                var e=null,l=null;
                for(var g=this.containers.length-1;g>=0;g--){
                    if(a.ui.contains(this.currentItem[0],this.containers[g].element[0])){
                        continue
                    }
                    if(this._intersectsWith(this.containers[g].containerCache)){
                        if(e&&a.ui.contains(this.containers[g].element[0],e.element[0])){
                            continue
                        }
                        e=this.containers[g];
                        l=g
                    }else{
                        if(this.containers[g].containerCache.over){
                            this.containers[g]._trigger("out",c,this._uiHash(this));
                            this.containers[g].containerCache.over=0
                        }
                    }
                }
                if(!e){
                    return
                }
                if(this.containers.length===1){
                    this.containers[l]._trigger("over",c,this._uiHash(this));
                    this.containers[l].containerCache.over=1
                }else{
                    if(this.currentContainer!=this.containers[l]){
                        var k=10000;
                        var h=null;
                        var d=this.positionAbs[this.containers[l].floating?"left":"top"];
                        for(var f=this.items.length-1;f>=0;f--){
                            if(!a.ui.contains(this.containers[l].element[0],this.items[f].item[0])){
                                continue
                            }
                            var m=this.containers[l].floating?this.items[f].item.offset().left:this.items[f].item.offset().top;
                            if(Math.abs(m-d)<k){
                                k=Math.abs(m-d);
                                h=this.items[f];
                                this.direction=(m-d>0)?"down":"up"
                            }
                        }
                        if(!h&&!this.options.dropOnEmpty){
                            return
                        }
                        this.currentContainer=this.containers[l];
                        h?this._rearrange(c,h,null,true):this._rearrange(c,null,this.containers[l].element,true);
                        this._trigger("change",c,this._uiHash());
                        this.containers[l]._trigger("change",c,this._uiHash(this));
                        this.options.placeholder.update(this.currentContainer,this.placeholder);
                        this.containers[l]._trigger("over",c,this._uiHash(this));
                        this.containers[l].containerCache.over=1
                    }
                }
            },
            _createHelper:function(d){
                var e=this.options;
                var c=a.isFunction(e.helper)?a(e.helper.apply(this.element[0],[d,this.currentItem])):(e.helper=="clone"?this.currentItem.clone():this.currentItem);
                if(!c.parents("body").length){
                    a(e.appendTo!="parent"?e.appendTo:this.currentItem[0].parentNode)[0].appendChild(c[0])
                }
                if(c[0]==this.currentItem[0]){
                    this._storedCSS={
                        width:this.currentItem[0].style.width,
                        height:this.currentItem[0].style.height,
                        position:this.currentItem.css("position"),
                        top:this.currentItem.css("top"),
                        left:this.currentItem.css("left")
                    }
                }
                if(c[0].style.width==""||e.forceHelperSize){
                    c.width(this.currentItem.width())
                }
                if(c[0].style.height==""||e.forceHelperSize){
                    c.height(this.currentItem.height())
                }
                return c
            },
            _adjustOffsetFromHelper:function(c){
                if(typeof c=="string"){
                    c=c.split(" ")
                }
                if(a.isArray(c)){
                    c={
                        left:+c[0],
                        top:+c[1]||0
                    }
                }
                if("left" in c){
                    this.offset.click.left=c.left+this.margins.left
                }
                if("right" in c){
                    this.offset.click.left=this.helperProportions.width-c.right+this.margins.left
                }
                if("top" in c){
                    this.offset.click.top=c.top+this.margins.top
                }
                if("bottom" in c){
                    this.offset.click.top=this.helperProportions.height-c.bottom+this.margins.top
                }
            },
            _getParentOffset:function(){
                this.offsetParent=this.helper.offsetParent();
                var c=this.offsetParent.offset();
                if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){
                    c.left+=this.scrollParent.scrollLeft();
                    c.top+=this.scrollParent.scrollTop()
                }
                if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)){
                    c={
                        top:0,
                        left:0
                    }
                }
                return{
                    top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),
                    left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)
                }
            },
            _getRelativeOffset:function(){
                if(this.cssPosition=="relative"){
                    var c=this.currentItem.position();
                    return{
                        top:c.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),
                        left:c.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()
                    }
                }else{
                    return{
                        top:0,
                        left:0
                    }
                }
            },
            _cacheMargins:function(){
                this.margins={
                    left:(parseInt(this.currentItem.css("marginLeft"),10)||0),
                    top:(parseInt(this.currentItem.css("marginTop"),10)||0)
                }
            },
            _cacheHelperProportions:function(){
                this.helperProportions={
                    width:this.helper.outerWidth(),
                    height:this.helper.outerHeight()
                }
            },
            _setContainment:function(){
                var f=this.options;
                if(f.containment=="parent"){
                    f.containment=this.helper[0].parentNode
                }
                if(f.containment=="document"||f.containment=="window"){
                    this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(f.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(f.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
                }
                if(!(/^(document|window|parent)$/).test(f.containment)){
                    var d=a(f.containment)[0];
                    var e=a(f.containment).offset();
                    var c=(a(d).css("overflow")!="hidden");
                    this.containment=[e.left+(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0)-this.margins.left,e.top+(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0)-this.margins.top,e.left+(c?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,e.top+(c?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]
                }
            },
            _convertPositionTo:function(g,i){
                if(!i){
                    i=this.position
                }
                var e=g=="absolute"?1:-1;
                var f=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,h=(/(html|body)/i).test(c[0].tagName);
                return{
                    top:(i.top+this.offset.relative.top*e+this.offset.parent.top*e-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(h?0:c.scrollTop()))*e)),
                    left:(i.left+this.offset.relative.left*e+this.offset.parent.left*e-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():h?0:c.scrollLeft())*e))
                }
            },
            _generatePosition:function(f){
                var i=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,j=(/(html|body)/i).test(c[0].tagName);
                if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){
                    this.offset.relative=this._getRelativeOffset()
                }
                var e=f.pageX;
                var d=f.pageY;
                if(this.originalPosition){
                    if(this.containment){
                        if(f.pageX-this.offset.click.left<this.containment[0]){
                            e=this.containment[0]+this.offset.click.left
                        }
                        if(f.pageY-this.offset.click.top<this.containment[1]){
                            d=this.containment[1]+this.offset.click.top
                        }
                        if(f.pageX-this.offset.click.left>this.containment[2]){
                            e=this.containment[2]+this.offset.click.left
                        }
                        if(f.pageY-this.offset.click.top>this.containment[3]){
                            d=this.containment[3]+this.offset.click.top
                        }
                    }
                    if(i.grid){
                        var h=this.originalPageY+Math.round((d-this.originalPageY)/i.grid[1])*i.grid[1];
                        d=this.containment?(!(h-this.offset.click.top<this.containment[1]||h-this.offset.click.top>this.containment[3])?h:(!(h-this.offset.click.top<this.containment[1])?h-i.grid[1]:h+i.grid[1])):h;
                        var g=this.originalPageX+Math.round((e-this.originalPageX)/i.grid[0])*i.grid[0];
                        e=this.containment?(!(g-this.offset.click.left<this.containment[0]||g-this.offset.click.left>this.containment[2])?g:(!(g-this.offset.click.left<this.containment[0])?g-i.grid[0]:g+i.grid[0])):g
                    }
                }
                return{
                    top:(d-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(j?0:c.scrollTop())))),
                    left:(e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():j?0:c.scrollLeft())))
                }
            },
            _rearrange:function(h,g,d,f){
                d?d[0].appendChild(this.placeholder[0]):g.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction=="down"?g.item[0]:g.item[0].nextSibling));
                this.counter=this.counter?++this.counter:1;
                var e=this,c=this.counter;
                window.setTimeout(function(){
                    if(c==e.counter){
                        e.refreshPositions(!f)
                    }
                },0)
            },
            _clear:function(e,f){
                this.reverting=false;
                var g=[],c=this;
                if(!this._noFinalSort&&this.currentItem.parent().length){
                    this.placeholder.before(this.currentItem)
                }
                this._noFinalSort=null;
                if(this.helper[0]==this.currentItem[0]){
                    for(var d in this._storedCSS){
                        if(this._storedCSS[d]=="auto"||this._storedCSS[d]=="static"){
                            this._storedCSS[d]=""
                        }
                    }
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                }else{
                    this.currentItem.show()
                }
                if(this.fromOutside&&!f){
                    g.push(function(h){
                        this._trigger("receive",h,this._uiHash(this.fromOutside))
                    })
                }
                if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!f){
                    g.push(function(h){
                        this._trigger("update",h,this._uiHash())
                    })
                }
                if(!a.ui.contains(this.element[0],this.currentItem[0])){
                    if(!f){
                        g.push(function(h){
                            this._trigger("remove",h,this._uiHash())
                        })
                    }
                    for(var d=this.containers.length-1;d>=0;d--){
                        if(a.ui.contains(this.containers[d].element[0],this.currentItem[0])&&!f){
                            g.push((function(h){
                                return function(i){
                                    h._trigger("receive",i,this._uiHash(this))
                                }
                            }).call(this,this.containers[d]));
                            g.push((function(h){
                                return function(i){
                                    h._trigger("update",i,this._uiHash(this))
                                }
                            }).call(this,this.containers[d]))
                        }
                    }
                }
                for(var d=this.containers.length-1;d>=0;d--){
                    if(!f){
                        g.push((function(h){
                            return function(i){
                                h._trigger("deactivate",i,this._uiHash(this))
                            }
                        }).call(this,this.containers[d]))
                    }
                    if(this.containers[d].containerCache.over){
                        g.push((function(h){
                            return function(i){
                                h._trigger("out",i,this._uiHash(this))
                            }
                        }).call(this,this.containers[d]));
                        this.containers[d].containerCache.over=0
                    }
                }
                if(this._storedCursor){
                    a("body").css("cursor",this._storedCursor)
                }
                if(this._storedOpacity){
                    this.helper.css("opacity",this._storedOpacity)
                }
                if(this._storedZIndex){
                    this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex)
                }
                this.dragging=false;
                if(this.cancelHelperRemoval){
                    if(!f){
                        this._trigger("beforeStop",e,this._uiHash());
                        for(var d=0;d<g.length;d++){
                            g[d].call(this,e)
                        }
                        this._trigger("stop",e,this._uiHash())
                    }
                    this.fromOutside=false;
                    return false
                }
                if(!f){
                    this._trigger("beforeStop",e,this._uiHash())
                }
                this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
                if(this.helper[0]!=this.currentItem[0]){
                    this.helper.remove()
                }
                this.helper=null;
                if(!f){
                    for(var d=0;d<g.length;d++){
                        g[d].call(this,e)
                    }
                    this._trigger("stop",e,this._uiHash())
                }
                this.fromOutside=false;
                return true
            },
            _trigger:function(){
                if(a.Widget.prototype._trigger.apply(this,arguments)===false){
                    this.cancel()
                }
            },
            _uiHash:function(d){
                var c=d||this;
                return{
                    helper:c.helper,
                    placeholder:c.placeholder||a([]),
                    position:c.position,
                    originalPosition:c.originalPosition,
                    offset:c.positionAbs,
                    item:c.currentItem,
                    sender:d?d.element:null
                }
            }
        });
    a.extend(a.ui.sortable,{
        version:"1.8.23"
    })
    })(jQuery);
    /*
 * jQuery UI Slider 1.8.23
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
    (function(b,c){
        var a=5;
        b.widget("ui.slider",b.ui.mouse,{
            widgetEventPrefix:"slide",
            options:{
                animate:false,
                distance:0,
                max:100,
                min:0,
                orientation:"horizontal",
                range:false,
                step:1,
                value:0,
                values:null
            },
            _create:function(){
                var e=this,k=this.options,j=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),h="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",d=(k.values&&k.values.length)||1,g=[];
                this._keySliding=false;
                this._mouseSliding=false;
                this._animateOff=true;
                this._handleIndex=null;
                this._detectOrientation();
                this._mouseInit();
                this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"+(k.disabled?" ui-slider-disabled ui-disabled":""));
                this.range=b([]);
                if(k.range){
                    if(k.range===true){
                        if(!k.values){
                            k.values=[this._valueMin(),this._valueMin()]
                        }
                        if(k.values.length&&k.values.length!==2){
                            k.values=[k.values[0],k.values[0]]
                        }
                    }
                    this.range=b("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+((k.range==="min"||k.range==="max")?" ui-slider-range-"+k.range:""))
                }
                for(var f=j.length;f<d;f+=1){
                    g.push(h)
                }
                this.handles=j.add(b(g.join("")).appendTo(e.element));
                this.handle=this.handles.eq(0);
                this.handles.add(this.range).filter("a").click(function(i){
                    i.preventDefault()
                }).hover(function(){
                    if(!k.disabled){
                        b(this).addClass("ui-state-hover")
                    }
                },function(){
                    b(this).removeClass("ui-state-hover")
                }).focus(function(){
                    if(!k.disabled){
                        b(".ui-slider .ui-state-focus").removeClass("ui-state-focus");
                        b(this).addClass("ui-state-focus")
                    }else{
                        b(this).blur()
                    }
                }).blur(function(){
                    b(this).removeClass("ui-state-focus")
                });
                this.handles.each(function(l){
                    b(this).data("index.ui-slider-handle",l)
                });
                this.handles.keydown(function(o){
                    var l=b(this).data("index.ui-slider-handle"),p,m,i,n;
                    if(e.options.disabled){
                        return
                    }
                    switch(o.keyCode){
                        case b.ui.keyCode.HOME:case b.ui.keyCode.END:case b.ui.keyCode.PAGE_UP:case b.ui.keyCode.PAGE_DOWN:case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:
                            o.preventDefault();
                            if(!e._keySliding){
                                e._keySliding=true;
                                b(this).addClass("ui-state-active");
                                p=e._start(o,l);
                                if(p===false){
                                    return
                                }
                            }
                            break
                    }
                    n=e.options.step;
                    if(e.options.values&&e.options.values.length){
                        m=i=e.values(l)
                    }else{
                        m=i=e.value()
                    }
                    switch(o.keyCode){
                        case b.ui.keyCode.HOME:
                            i=e._valueMin();
                            break;
                        case b.ui.keyCode.END:
                            i=e._valueMax();
                            break;
                        case b.ui.keyCode.PAGE_UP:
                            i=e._trimAlignValue(m+((e._valueMax()-e._valueMin())/a));
                            break;
                        case b.ui.keyCode.PAGE_DOWN:
                            i=e._trimAlignValue(m-((e._valueMax()-e._valueMin())/a));
                            break;
                        case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:
                            if(m===e._valueMax()){
                                return
                            }
                            i=e._trimAlignValue(m+n);
                            break;
                        case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:
                            if(m===e._valueMin()){
                                return
                            }
                            i=e._trimAlignValue(m-n);
                            break
                    }
                    e._slide(o,l,i)
                }).keyup(function(l){
                    var i=b(this).data("index.ui-slider-handle");
                    if(e._keySliding){
                        e._keySliding=false;
                        e._stop(l,i);
                        e._change(l,i);
                        b(this).removeClass("ui-state-active")
                    }
                });
                this._refreshValue();
                this._animateOff=false
            },
            destroy:function(){
                this.handles.remove();
                this.range.remove();
                this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
                this._mouseDestroy();
                return this
            },
            _mouseCapture:function(f){
                var g=this.options,j,l,e,h,n,k,m,i,d;
                if(g.disabled){
                    return false
                }
                this.elementSize={
                    width:this.element.outerWidth(),
                    height:this.element.outerHeight()
                };
        
                this.elementOffset=this.element.offset();
                j={
                    x:f.pageX,
                    y:f.pageY
                };
        
                l=this._normValueFromMouse(j);
                e=this._valueMax()-this._valueMin()+1;
                n=this;
                this.handles.each(function(o){
                    var p=Math.abs(l-n.values(o));
                    if(e>p){
                        e=p;
                        h=b(this);
                        k=o
                    }
                });
                if(g.range===true&&this.values(1)===g.min){
                    k+=1;
                    h=b(this.handles[k])
                }
                m=this._start(f,k);
                if(m===false){
                    return false
                }
                this._mouseSliding=true;
                n._handleIndex=k;
                h.addClass("ui-state-active").focus();
                i=h.offset();
                d=!b(f.target).parents().andSelf().is(".ui-slider-handle");
                this._clickOffset=d?{
                    left:0,
                    top:0
                }:{
                    left:f.pageX-i.left-(h.width()/2),
                    top:f.pageY-i.top-(h.height()/2)-(parseInt(h.css("borderTopWidth"),10)||0)-(parseInt(h.css("borderBottomWidth"),10)||0)+(parseInt(h.css("marginTop"),10)||0)
                };
    
                if(!this.handles.hasClass("ui-state-hover")){
                    this._slide(f,k,l)
                }
                this._animateOff=true;
                return true
            },
            _mouseStart:function(d){
                return true
            },
            _mouseDrag:function(f){
                var d={
                    x:f.pageX,
                    y:f.pageY
                },e=this._normValueFromMouse(d);
                this._slide(f,this._handleIndex,e);
                return false
            },
            _mouseStop:function(d){
                this.handles.removeClass("ui-state-active");
                this._mouseSliding=false;
                this._stop(d,this._handleIndex);
                this._change(d,this._handleIndex);
                this._handleIndex=null;
                this._clickOffset=null;
                this._animateOff=false;
                return false
            },
            _detectOrientation:function(){
                this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"
            },
            _normValueFromMouse:function(e){
                var d,h,g,f,i;
                if(this.orientation==="horizontal"){
                    d=this.elementSize.width;
                    h=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)
                }else{
                    d=this.elementSize.height;
                    h=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)
                }
                g=(h/d);
                if(g>1){
                    g=1
                }
                if(g<0){
                    g=0
                }
                if(this.orientation==="vertical"){
                    g=1-g
                }
                f=this._valueMax()-this._valueMin();
                i=this._valueMin()+g*f;
                return this._trimAlignValue(i)
            },
            _start:function(f,e){
                var d={
                    handle:this.handles[e],
                    value:this.value()
                };
        
                if(this.options.values&&this.options.values.length){
                    d.value=this.values(e);
                    d.values=this.values()
                }
                return this._trigger("start",f,d)
            },
            _slide:function(h,g,f){
                var d,e,i;
                if(this.options.values&&this.options.values.length){
                    d=this.values(g?0:1);
                    if((this.options.values.length===2&&this.options.range===true)&&((g===0&&f>d)||(g===1&&f<d))){
                        f=d
                    }
                    if(f!==this.values(g)){
                        e=this.values();
                        e[g]=f;
                        i=this._trigger("slide",h,{
                            handle:this.handles[g],
                            value:f,
                            values:e
                        });
                        d=this.values(g?0:1);
                        if(i!==false){
                            this.values(g,f,true)
                        }
                    }
                }else{
                    if(f!==this.value()){
                        i=this._trigger("slide",h,{
                            handle:this.handles[g],
                            value:f
                        });
                        if(i!==false){
                            this.value(f)
                        }
                    }
                }
            },
            _stop:function(f,e){
                var d={
                    handle:this.handles[e],
                    value:this.value()
                };
        
                if(this.options.values&&this.options.values.length){
                    d.value=this.values(e);
                    d.values=this.values()
                }
                this._trigger("stop",f,d)
            },
            _change:function(f,e){
                if(!this._keySliding&&!this._mouseSliding){
                    var d={
                        handle:this.handles[e],
                        value:this.value()
                    };
            
                    if(this.options.values&&this.options.values.length){
                        d.value=this.values(e);
                        d.values=this.values()
                    }
                    this._trigger("change",f,d)
                }
            },
            value:function(d){
                if(arguments.length){
                    this.options.value=this._trimAlignValue(d);
                    this._refreshValue();
                    this._change(null,0);
                    return
                }
                return this._value()
            },
            values:function(e,h){
                var g,d,f;
                if(arguments.length>1){
                    this.options.values[e]=this._trimAlignValue(h);
                    this._refreshValue();
                    this._change(null,e);
                    return
                }
                if(arguments.length){
                    if(b.isArray(arguments[0])){
                        g=this.options.values;
                        d=arguments[0];
                        for(f=0;f<g.length;f+=1){
                            g[f]=this._trimAlignValue(d[f]);
                            this._change(null,f)
                        }
                        this._refreshValue()
                    }else{
                        if(this.options.values&&this.options.values.length){
                            return this._values(e)
                        }else{
                            return this.value()
                        }
                    }
                }else{
                    return this._values()
                }
            },
            _setOption:function(e,f){
                var d,g=0;
                if(b.isArray(this.options.values)){
                    g=this.options.values.length
                }
                b.Widget.prototype._setOption.apply(this,arguments);
                switch(e){
                    case"disabled":
                        if(f){
                            this.handles.filter(".ui-state-focus").blur();
                            this.handles.removeClass("ui-state-hover");
                            this.handles.propAttr("disabled",true);
                            this.element.addClass("ui-disabled")
                        }else{
                            this.handles.propAttr("disabled",false);
                            this.element.removeClass("ui-disabled")
                        }
                        break;
                    case"orientation":
                        this._detectOrientation();
                        this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);
                        this._refreshValue();
                        break;
                    case"value":
                        this._animateOff=true;
                        this._refreshValue();
                        this._change(null,0);
                        this._animateOff=false;
                        break;
                    case"values":
                        this._animateOff=true;
                        this._refreshValue();
                        for(d=0;d<g;d+=1){
                            this._change(null,d)
                        }
                        this._animateOff=false;
                        break
                }
            },
            _value:function(){
                var d=this.options.value;
                d=this._trimAlignValue(d);
                return d
            },
            _values:function(d){
                var g,f,e;
                if(arguments.length){
                    g=this.options.values[d];
                    g=this._trimAlignValue(g);
                    return g
                }else{
                    f=this.options.values.slice();
                    for(e=0;e<f.length;e+=1){
                        f[e]=this._trimAlignValue(f[e])
                    }
                    return f
                }
            },
            _trimAlignValue:function(g){
                if(g<=this._valueMin()){
                    return this._valueMin()
                }
                if(g>=this._valueMax()){
                    return this._valueMax()
                }
                var d=(this.options.step>0)?this.options.step:1,f=(g-this._valueMin())%d,e=g-f;
                if(Math.abs(f)*2>=d){
                    e+=(f>0)?d:(-d)
                }
                return parseFloat(e.toFixed(5))
            },
            _valueMin:function(){
                return this.options.min
            },
            _valueMax:function(){
                return this.options.max
            },
            _refreshValue:function(){
                var g=this.options.range,f=this.options,m=this,e=(!this._animateOff)?f.animate:false,h,d={},i,k,j,l;
                if(this.options.values&&this.options.values.length){
                    this.handles.each(function(o,n){
                        h=(m.values(o)-m._valueMin())/(m._valueMax()-m._valueMin())*100;
                        d[m.orientation==="horizontal"?"left":"bottom"]=h+"%";
                        b(this).stop(1,1)[e?"animate":"css"](d,f.animate);
                        if(m.options.range===true){
                            if(m.orientation==="horizontal"){
                                if(o===0){
                                    m.range.stop(1,1)[e?"animate":"css"]({
                                        left:h+"%"
                                    },f.animate)
                                }
                                if(o===1){
                                    m.range[e?"animate":"css"]({
                                        width:(h-i)+"%"
                                    },{
                                        queue:false,
                                        duration:f.animate
                                    })
                                }
                            }else{
                                if(o===0){
                                    m.range.stop(1,1)[e?"animate":"css"]({
                                        bottom:(h)+"%"
                                    },f.animate)
                                }
                                if(o===1){
                                    m.range[e?"animate":"css"]({
                                        height:(h-i)+"%"
                                    },{
                                        queue:false,
                                        duration:f.animate
                                    })
                                }
                            }
                        }
                        i=h
                    })
                }else{
                    k=this.value();
                    j=this._valueMin();
                    l=this._valueMax();
                    h=(l!==j)?(k-j)/(l-j)*100:0;
                    d[m.orientation==="horizontal"?"left":"bottom"]=h+"%";
                    this.handle.stop(1,1)[e?"animate":"css"](d,f.animate);
                    if(g==="min"&&this.orientation==="horizontal"){
                        this.range.stop(1,1)[e?"animate":"css"]({
                            width:h+"%"
                        },f.animate)
                    }
                    if(g==="max"&&this.orientation==="horizontal"){
                        this.range[e?"animate":"css"]({
                            width:(100-h)+"%"
                        },{
                            queue:false,
                            duration:f.animate
                        })
                    }
                    if(g==="min"&&this.orientation==="vertical"){
                        this.range.stop(1,1)[e?"animate":"css"]({
                            height:h+"%"
                        },f.animate)
                    }
                    if(g==="max"&&this.orientation==="vertical"){
                        this.range[e?"animate":"css"]({
                            height:(100-h)+"%"
                        },{
                            queue:false,
                            duration:f.animate
                        })
                    }
                }
            }
        });
        b.extend(b.ui.slider,{
            version:"1.8.23"
        })
    }(jQuery));
    /*
 * jQuery UI Datepicker 1.8.23
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
    (function($,undefined){
        $.extend($.ui,{
            datepicker:{
                version:"1.8.23"
            }
        });
        var PROP_NAME="datepicker";
        var dpuuid=new Date().getTime();
        var instActive;
        function Datepicker(){
            this.debug=false;
            this._curInst=null;
            this._keyEvent=false;
            this._disabledInputs=[];
            this._datepickerShowing=false;
            this._inDialog=false;
            this._mainDivId="ui-datepicker-div";
            this._inlineClass="ui-datepicker-inline";
            this._appendClass="ui-datepicker-append";
            this._triggerClass="ui-datepicker-trigger ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only";
            this._dialogClass="ui-datepicker-dialog";
            this._disableClass="ui-datepicker-disabled";
            this._unselectableClass="ui-datepicker-unselectable";
            this._currentClass="ui-datepicker-current-day";
            this._dayOverClass="ui-datepicker-days-cell-over";
            this.regional=[];
            this.regional[""]={
                closeText:"Done",
                prevText:"Prev",
                nextText:"Next",
                currentText:"Today",
                monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],
                monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
                dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
                dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],
                weekHeader:"Wk",
                dateFormat:"mm/dd/yy",
                firstDay:0,
                isRTL:false,
                showMonthAfterYear:false,
                yearSuffix:"",
                isBuddhist: false
            };
    
            this._defaults={
                showOn:"focus",
                showAnim:"fadeIn",
                showOptions:{},
                defaultDate:null,
                appendText:"",
                buttonText:"...",
                buttonImage:"",
                buttonImageOnly:false,
                hideIfNoPrevNext:false,
                navigationAsDateFormat:false,
                gotoCurrent:false,
                changeMonth:false,
                changeYear:false,
                yearRange:"c-10:c+10",
                showOtherMonths:false,
                selectOtherMonths:false,
                showWeek:false,
                calculateWeek:this.iso8601Week,
                shortYearCutoff:"+10",
                minDate:null,
                maxDate:null,
                duration:"fast",
                beforeShowDay:null,
                beforeShow:null,
                onSelect:null,
                onChangeMonthYear:null,
                onClose:null,
                numberOfMonths:1,
                showCurrentAtPos:0,
                stepMonths:1,
                stepBigMonths:12,
                altField:"",
                altFormat:"",
                constrainInput:true,
                showButtonPanel:false,
                autoSize:false,
                disabled:false
            };
    
            $.extend(this._defaults,this.regional[""]);
            this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
        }
        $.extend(Datepicker.prototype,{
            markerClassName:"hasDatepicker",
            maxRows:4,
            log:function(){
                if(this.debug){
                    console.log.apply("",arguments)
                }
            },
            _widgetDatepicker:function(){
                return this.dpDiv
            },
            setDefaults:function(settings){
                extendRemove(this._defaults,settings||{});
                return this
            },
            _attachDatepicker:function(target,settings){
                var inlineSettings=null;
                for(var attrName in this._defaults){
                    var attrValue=target.getAttribute("date:"+attrName);
                    if(attrValue){
                        inlineSettings=inlineSettings||{};
            
                        try{
                            inlineSettings[attrName]=eval(attrValue)
                        }catch(err){
                            inlineSettings[attrName]=attrValue
                        }
                    }
                }
                var nodeName=target.nodeName.toLowerCase();
                var inline=(nodeName=="div"||nodeName=="span");
                if(!target.id){
                    this.uuid+=1;
                    target.id="dp"+this.uuid
                }
                var inst=this._newInst($(target),inline);
                inst.settings=$.extend({},settings||{},inlineSettings||{});
                if(nodeName=="input"){
                    this._connectDatepicker(target,inst)
                }else{
                    if(inline){
                        this._inlineDatepicker(target,inst)
                    }
                }
            },
            _newInst:function(target,inline){
                var id=target[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");
                return{
                    id:id,
                    input:target,
                    selectedDay:0,
                    selectedMonth:0,
                    selectedYear:0,
                    drawMonth:0,
                    drawYear:0,
                    inline:inline,
                    dpDiv:(!inline?this.dpDiv:bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')))
                }
            },
            _connectDatepicker:function(target,inst){
                var input=$(target);
                inst.append=$([]);
                inst.trigger=$([]);
                if(input.hasClass(this.markerClassName)){
                    return
                }
                this._attachments(input,inst);
                input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(event,key,value){
                    inst.settings[key]=value
                }).bind("getData.datepicker",function(event,key){
                    return this._get(inst,key)
                });
                this._autoSize(inst);
                $.data(target,PROP_NAME,inst);
                if(inst.settings.disabled){
                    this._disableDatepicker(target)
                }
            },
            _attachments:function(input,inst){
                var appendText=this._get(inst,"appendText");
                var isRTL=this._get(inst,"isRTL");
                if(inst.append){
                    inst.append.remove()
                }
                if(appendText){
                    inst.append=$('<span class="'+this._appendClass+'">'+appendText+"</span>");
                    input[isRTL?"before":"after"](inst.append)
                }
                input.unbind("focus",this._showDatepicker);
                if(inst.trigger){
                    inst.trigger.remove()
                }
                var showOn=this._get(inst,"showOn");
                if(showOn=="focus"||showOn=="both"){
                    input.focus(this._showDatepicker)
                }
                if(showOn=="button"||showOn=="both"){
                    var buttonText=this._get(inst,"buttonText");
                    var buttonImage=this._get(inst,"buttonImage");
                    inst.trigger=$(this._get(inst,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({
                        src:buttonImage,
                        alt:buttonText,
                        title:buttonText
                    }):$('<button type="button"></button>').addClass(this._triggerClass).html('<span class="ui-button-icon-left ui-icon ui-icon-calendar"></span><span class="ui-button-text">ui-button</span>'));
                    input[isRTL?"before":"after"](inst.trigger);
                    inst.trigger.click(function(){
                        if($.datepicker._datepickerShowing&&$.datepicker._lastInput==input[0]){
                            $.datepicker._hideDatepicker()
                        }else{
                            if($.datepicker._datepickerShowing&&$.datepicker._lastInput!=input[0]){
                                $.datepicker._hideDatepicker();
                                $.datepicker._showDatepicker(input[0])
                            }else{
                                $.datepicker._showDatepicker(input[0])
                            }
                        }
                        return false
                    })
                }
            },
            _autoSize:function(inst){
                if(this._get(inst,"autoSize")&&!inst.inline){
                    var date=new Date(2009,12-1,20);
                    var dateFormat=this._get(inst,"dateFormat");
                    if(dateFormat.match(/[DM]/)){
                        var findMax=function(names){
                            var max=0;
                            var maxI=0;
                            for(var i=0;i<names.length;i++){
                                if(names[i].length>max){
                                    max=names[i].length;
                                    maxI=i
                                }
                            }
                            return maxI
                        };
            
                        date.setMonth(findMax(this._get(inst,(dateFormat.match(/MM/)?"monthNames":"monthNamesShort"))));
                        date.setDate(findMax(this._get(inst,(dateFormat.match(/DD/)?"dayNames":"dayNamesShort")))+20-date.getDay())
                    }
                    inst.input.attr("size",this._formatDate(inst,date).length)
                }
            },
            _inlineDatepicker:function(target,inst){
                var divSpan=$(target);
                if(divSpan.hasClass(this.markerClassName)){
                    return
                }
                divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker",function(event,key,value){
                    inst.settings[key]=value
                }).bind("getData.datepicker",function(event,key){
                    return this._get(inst,key)
                });
                $.data(target,PROP_NAME,inst);
                this._setDate(inst,this._getDefaultDate(inst),true);
                this._updateDatepicker(inst);
                this._updateAlternate(inst);
                if(inst.settings.disabled){
                    this._disableDatepicker(target)
                }
                inst.dpDiv.css("display","block")
            },
            _dialogDatepicker:function(input,date,onSelect,settings,pos){
                var inst=this._dialogInst;
                if(!inst){
                    this.uuid+=1;
                    var id="dp"+this.uuid;
                    this._dialogInput=$('<input type="text" id="'+id+'" style="position: absolute; top: -100px; width: 0px;"/>');
                    this._dialogInput.keydown(this._doKeyDown);
                    $("body").append(this._dialogInput);
                    inst=this._dialogInst=this._newInst(this._dialogInput,false);
                    inst.settings={};
        
                    $.data(this._dialogInput[0],PROP_NAME,inst)
                }
                extendRemove(inst.settings,settings||{});
                date=(date&&date.constructor==Date?this._formatDate(inst,date):date);
                this._dialogInput.val(date);
                this._pos=(pos?(pos.length?pos:[pos.pageX,pos.pageY]):null);
                if(!this._pos){
                    var browserWidth=document.documentElement.clientWidth;
                    var browserHeight=document.documentElement.clientHeight;
                    var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;
                    var scrollY=document.documentElement.scrollTop||document.body.scrollTop;
                    this._pos=[(browserWidth/2)-100+scrollX,(browserHeight/2)-150+scrollY]
                }
                this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");
                inst.settings.onSelect=onSelect;
                this._inDialog=true;
                this.dpDiv.addClass(this._dialogClass);
                this._showDatepicker(this._dialogInput[0]);
                if($.blockUI){
                    $.blockUI(this.dpDiv)
                }
                $.data(this._dialogInput[0],PROP_NAME,inst);
                return this
            },
            _destroyDatepicker:function(target){
                var $target=$(target);
                var inst=$.data(target,PROP_NAME);
                if(!$target.hasClass(this.markerClassName)){
                    return
                }
                var nodeName=target.nodeName.toLowerCase();
                $.removeData(target,PROP_NAME);
                if(nodeName=="input"){
                    inst.append.remove();
                    inst.trigger.remove();
                    $target.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)
                }else{
                    if(nodeName=="div"||nodeName=="span"){
                        $target.removeClass(this.markerClassName).empty()
                    }
                }
            },
            _enableDatepicker:function(target){
                var $target=$(target);
                var inst=$.data(target,PROP_NAME);
                if(!$target.hasClass(this.markerClassName)){
                    return
                }
                var nodeName=target.nodeName.toLowerCase();
                if(nodeName=="input"){
                    target.disabled=false;
                    inst.trigger.filter("button").each(function(){
                        this.disabled=false
                    }).end().filter("img").css({
                        opacity:"1.0",
                        cursor:""
                    })
                }else{
                    if(nodeName=="div"||nodeName=="span"){
                        var inline=$target.children("."+this._inlineClass);
                        inline.children().removeClass("ui-state-disabled");
                        inline.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")
                    }
                }
                this._disabledInputs=$.map(this._disabledInputs,function(value){
                    return(value==target?null:value)
                })
            },
            _disableDatepicker:function(target){
                var $target=$(target);
                var inst=$.data(target,PROP_NAME);
                if(!$target.hasClass(this.markerClassName)){
                    return
                }
                var nodeName=target.nodeName.toLowerCase();
                if(nodeName=="input"){
                    target.disabled=true;
                    inst.trigger.filter("button").each(function(){
                        this.disabled=true
                    }).end().filter("img").css({
                        opacity:"0.5",
                        cursor:"default"
                    })
                }else{
                    if(nodeName=="div"||nodeName=="span"){
                        var inline=$target.children("."+this._inlineClass);
                        inline.children().addClass("ui-state-disabled");
                        inline.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")
                    }
                }
                this._disabledInputs=$.map(this._disabledInputs,function(value){
                    return(value==target?null:value)
                });
                this._disabledInputs[this._disabledInputs.length]=target
            },
            _isDisabledDatepicker:function(target){
                if(!target){
                    return false
                }
                for(var i=0;i<this._disabledInputs.length;i++){
                    if(this._disabledInputs[i]==target){
                        return true
                    }
                }
                return false
            },
            _getInst:function(target){
                try{
                    return $.data(target,PROP_NAME)
                }catch(err){
                    throw"Missing instance data for this datepicker"
                }
            },
            _optionDatepicker:function(target,name,value){
                var inst=this._getInst(target);
                if(arguments.length==2&&typeof name=="string"){
                    return(name=="defaults"?$.extend({},$.datepicker._defaults):(inst?(name=="all"?$.extend({},inst.settings):this._get(inst,name)):null))
                }
                var settings=name||{};
    
                if(typeof name=="string"){
                    settings={};
        
                    settings[name]=value
                }
                if(inst){
                    if(this._curInst==inst){
                        this._hideDatepicker()
                    }
                    var date=this._getDateDatepicker(target,true);
                    var minDate=this._getMinMaxDate(inst,"min");
                    var maxDate=this._getMinMaxDate(inst,"max");
                    extendRemove(inst.settings,settings);
                    if(minDate!==null&&settings.dateFormat!==undefined&&settings.minDate===undefined){
                        inst.settings.minDate=this._formatDate(inst,minDate)
                    }
                    if(maxDate!==null&&settings.dateFormat!==undefined&&settings.maxDate===undefined){
                        inst.settings.maxDate=this._formatDate(inst,maxDate)
                    }
                    this._attachments($(target),inst);
                    this._autoSize(inst);
                    this._setDate(inst,date);
                    this._updateAlternate(inst);
                    this._updateDatepicker(inst)
                }
            },
            _changeDatepicker:function(target,name,value){
                this._optionDatepicker(target,name,value)
            },
            _refreshDatepicker:function(target){
                var inst=this._getInst(target);
                if(inst){
                    this._updateDatepicker(inst)
                }
            },
            _setDateDatepicker:function(target,date){
                var inst=this._getInst(target);
                if(inst){
                    this._setDate(inst,date);
                    this._updateDatepicker(inst);
                    this._updateAlternate(inst)
                }
            },
            _getDateDatepicker:function(target,noDefault){
                var inst=this._getInst(target);
                if(inst&&!inst.inline){
                    this._setDateFromField(inst,noDefault)
                }
                return(inst?this._getDate(inst):null)
            },
            _doKeyDown:function(event){
                var inst=$.datepicker._getInst(event.target);
                var handled=true;
                var isRTL=inst.dpDiv.is(".ui-datepicker-rtl");
                inst._keyEvent=true;
                if($.datepicker._datepickerShowing){
                    switch(event.keyCode){
                        case 9:
                            $.datepicker._hideDatepicker();
                            handled=false;
                            break;
                        case 13:
                            var sel=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",inst.dpDiv);
                            if(sel[0]){
                                $.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0])
                            }
                            var onSelect=$.datepicker._get(inst,"onSelect");
                            if(onSelect){
                                var dateStr=$.datepicker._formatDate(inst);
                                onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])
                            }else{
                                $.datepicker._hideDatepicker()
                            }
                            return false;
                            break;
                        case 27:
                            $.datepicker._hideDatepicker();
                            break;
                        case 33:
                            $.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M");
                            break;
                        case 34:
                            $.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M");
                            break;
                        case 35:
                            if(event.ctrlKey||event.metaKey){
                                $.datepicker._clearDate(event.target)
                            }
                            handled=event.ctrlKey||event.metaKey;
                            break;
                        case 36:
                            if(event.ctrlKey||event.metaKey){
                                $.datepicker._gotoToday(event.target)
                            }
                            handled=event.ctrlKey||event.metaKey;
                            break;
                        case 37:
                            if(event.ctrlKey||event.metaKey){
                                $.datepicker._adjustDate(event.target,(isRTL?+1:-1),"D")
                            }
                            handled=event.ctrlKey||event.metaKey;
                            if(event.originalEvent.altKey){
                                $.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M")
                            }
                            break;
                        case 38:
                            if(event.ctrlKey||event.metaKey){
                                $.datepicker._adjustDate(event.target,-7,"D")
                            }
                            handled=event.ctrlKey||event.metaKey;
                            break;
                        case 39:
                            if(event.ctrlKey||event.metaKey){
                                $.datepicker._adjustDate(event.target,(isRTL?-1:+1),"D")
                            }
                            handled=event.ctrlKey||event.metaKey;
                            if(event.originalEvent.altKey){
                                $.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M")
                            }
                            break;
                        case 40:
                            if(event.ctrlKey||event.metaKey){
                                $.datepicker._adjustDate(event.target,+7,"D")
                            }
                            handled=event.ctrlKey||event.metaKey;
                            break;
                        default:
                            handled=false
                    }
                }else{
                    if(event.keyCode==36&&event.ctrlKey){
                        $.datepicker._showDatepicker(this)
                    }else{
                        handled=false
                    }
                }
                if(handled){
                    event.preventDefault();
                    event.stopPropagation()
                }
            },
            _doKeyPress:function(event){
                var inst=$.datepicker._getInst(event.target);
                if($.datepicker._get(inst,"constrainInput")){
                    var chars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat"));
                    var chr=String.fromCharCode(event.charCode==undefined?event.keyCode:event.charCode);
                    return event.ctrlKey||event.metaKey||(chr<" "||!chars||chars.indexOf(chr)>-1)
                }
            },
            _doKeyUp:function(event){
                var inst=$.datepicker._getInst(event.target);
                if(inst.input.val()!=inst.lastVal){
                    try{
                        var date=$.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),(inst.input?inst.input.val():null),$.datepicker._getFormatConfig(inst));
                        if(date){
                            $.datepicker._setDateFromField(inst);
                            $.datepicker._updateAlternate(inst);
                            $.datepicker._updateDatepicker(inst)
                        }
                    }catch(err){
                        $.datepicker.log(err)
                    }
                }
                return true
            },
            _showDatepicker:function(input){
                input=input.target||input;
                if(input.nodeName.toLowerCase()!="input"){
                    input=$("input",input.parentNode)[0]
                }
                if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput==input){
                    return
                }
                var inst=$.datepicker._getInst(input);
                if($.datepicker._curInst&&$.datepicker._curInst!=inst){
                    $.datepicker._curInst.dpDiv.stop(true,true);
                    if(inst&&$.datepicker._datepickerShowing){
                        $.datepicker._hideDatepicker($.datepicker._curInst.input[0])
                    }
                }
                var beforeShow=$.datepicker._get(inst,"beforeShow");
                var beforeShowSettings=beforeShow?beforeShow.apply(input,[input,inst]):{};

                if(beforeShowSettings===false){
                    return
                }
                extendRemove(inst.settings,beforeShowSettings);
                inst.lastVal=null;
                $.datepicker._lastInput=input;
                $.datepicker._setDateFromField(inst);
                if($.datepicker._inDialog){
                    input.value=""
                }
                if(!$.datepicker._pos){
                    $.datepicker._pos=$.datepicker._findPos(input);
                    $.datepicker._pos[1]+=input.offsetHeight
                }
                var isFixed=false;
                $(input).parents().each(function(){
                    isFixed|=$(this).css("position")=="fixed";
                    return !isFixed
                });
                if(isFixed&&$.browser.opera){
                    $.datepicker._pos[0]-=document.documentElement.scrollLeft;
                    $.datepicker._pos[1]-=document.documentElement.scrollTop
                }
                var offset={
                    left:$.datepicker._pos[0],
                    top:$.datepicker._pos[1]
                };
    
                $.datepicker._pos=null;
                inst.dpDiv.empty();
                inst.dpDiv.css({
                    position:"absolute",
                    display:"block",
                    top:"-1000px"
                });
                $.datepicker._updateDatepicker(inst);
                offset=$.datepicker._checkOffset(inst,offset,isFixed);
                inst.dpDiv.css({
                    position:($.datepicker._inDialog&&$.blockUI?"static":(isFixed?"fixed":"absolute")),
                    display:"none",
                    left:offset.left+"px",
                    top:offset.top+"px"
                });
                if(!inst.inline){
                    var showAnim=$.datepicker._get(inst,"showAnim");
                    var duration=$.datepicker._get(inst,"duration");
                    var postProcess=function(){
                        var cover=inst.dpDiv.find("iframe.ui-datepicker-cover");
                        if(!!cover.length){
                            var borders=$.datepicker._getBorders(inst.dpDiv);
                            cover.css({
                                left:-borders[0],
                                top:-borders[1],
                                width:inst.dpDiv.outerWidth(),
                                height:inst.dpDiv.outerHeight()
                            })
                        }
                    };
    
                    inst.dpDiv.zIndex($(input).zIndex()+1);
                    $.datepicker._datepickerShowing=true;
                    if($.effects&&$.effects[showAnim]){
                        inst.dpDiv.show(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)
                    }else{
                        inst.dpDiv[showAnim||"show"]((showAnim?duration:null),postProcess)
                    }
                    if(!showAnim||!duration){
                        postProcess()
                    }
                    if(inst.input.is(":visible")&&!inst.input.is(":disabled")){
                        inst.input.focus()
                    }
                    $.datepicker._curInst=inst
                }
            },
            _updateDatepicker:function(inst){
                var self=this;
                self.maxRows=4;
                var borders=$.datepicker._getBorders(inst.dpDiv);
                instActive=inst;
                inst.dpDiv.empty().append(this._generateHTML(inst));
                this._attachHandlers(inst);
                var cover=inst.dpDiv.find("iframe.ui-datepicker-cover");
                if(!!cover.length){
                    cover.css({
                        left:-borders[0],
                        top:-borders[1],
                        width:inst.dpDiv.outerWidth(),
                        height:inst.dpDiv.outerHeight()
                    })
                }
                inst.dpDiv.find("."+this._dayOverClass+" a").mouseover();
                var numMonths=this._getNumberOfMonths(inst);
                var cols=numMonths[1];
                var width=17;
                inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
                if(cols>1){
                    inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width",(width*cols)+"em")
                }
                inst.dpDiv[(numMonths[0]!=1||numMonths[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");
                inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");
                if(inst==$.datepicker._curInst&&$.datepicker._datepickerShowing&&inst.input&&inst.input.is(":visible")&&!inst.input.is(":disabled")&&inst.input[0]!=document.activeElement){
                    inst.input.focus()
                }
                if(inst.yearshtml){
                    var origyearshtml=inst.yearshtml;
                    setTimeout(function(){
                        if(origyearshtml===inst.yearshtml&&inst.yearshtml){
                            inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml)
                        }
                        origyearshtml=inst.yearshtml=null
                    },0)
                }
            },
            _getBorders:function(elem){
                var convert=function(value){
                    return{
                        thin:1,
                        medium:2,
                        thick:3
                    }
                    [value]||value
                };
        
                return[parseFloat(convert(elem.css("border-left-width"))),parseFloat(convert(elem.css("border-top-width")))]
            },
            _checkOffset:function(inst,offset,isFixed){
                var dpWidth=inst.dpDiv.outerWidth();
                var dpHeight=inst.dpDiv.outerHeight();
                var inputWidth=inst.input?inst.input.outerWidth():0;
                var inputHeight=inst.input?inst.input.outerHeight():0;
                var viewWidth=document.documentElement.clientWidth+(isFixed?0:$(document).scrollLeft());
                var viewHeight=document.documentElement.clientHeight+(isFixed?0:$(document).scrollTop());
                offset.left-=(this._get(inst,"isRTL")?(dpWidth-inputWidth):0);
                offset.left-=(isFixed&&offset.left==inst.input.offset().left)?$(document).scrollLeft():0;
                offset.top-=(isFixed&&offset.top==(inst.input.offset().top+inputHeight))?$(document).scrollTop():0;
                offset.left-=Math.min(offset.left,(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?Math.abs(offset.left+dpWidth-viewWidth):0);
                offset.top-=Math.min(offset.top,(offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?Math.abs(dpHeight+inputHeight):0);
                return offset
            },
            _findPos:function(obj){
                var inst=this._getInst(obj);
                var isRTL=this._get(inst,"isRTL");
                while(obj&&(obj.type=="hidden"||obj.nodeType!=1||$.expr.filters.hidden(obj))){
                    obj=obj[isRTL?"previousSibling":"nextSibling"]
                }
                var position=$(obj).offset();
                return[position.left,position.top]
            },
            _hideDatepicker:function(input){
                var inst=this._curInst;
                if(!inst||(input&&inst!=$.data(input,PROP_NAME))){
                    return
                }
                if(this._datepickerShowing){
                    var showAnim=this._get(inst,"showAnim");
                    var duration=this._get(inst,"duration");
                    var postProcess=function(){
                        $.datepicker._tidyDialog(inst)
                    };
            
                    if($.effects&&$.effects[showAnim]){
                        inst.dpDiv.hide(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)
                    }else{
                        inst.dpDiv[(showAnim=="slideDown"?"slideUp":(showAnim=="fadeIn"?"fadeOut":"hide"))]((showAnim?duration:null),postProcess)
                    }
                    if(!showAnim){
                        postProcess()
                    }
                    this._datepickerShowing=false;
                    var onClose=this._get(inst,"onClose");
                    if(onClose){
                        onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():""),inst])
                    }
                    this._lastInput=null;
                    if(this._inDialog){
                        this._dialogInput.css({
                            position:"absolute",
                            left:"0",
                            top:"-100px"
                        });
                        if($.blockUI){
                            $.unblockUI();
                            $("body").append(this.dpDiv)
                        }
                    }
                    this._inDialog=false
                }
            },
            _tidyDialog:function(inst){
                inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick:function(event){
                if(!$.datepicker._curInst){
                    return
                }
                var $target=$(event.target),inst=$.datepicker._getInst($target[0]);
                if((($target[0].id!=$.datepicker._mainDivId&&$target.parents("#"+$.datepicker._mainDivId).length==0&&!$target.hasClass($.datepicker.markerClassName)&&!$target.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)))||($target.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=inst)){
                    $.datepicker._hideDatepicker()
                }
            },
            _adjustDate:function(id,offset,period){
                var target=$(id);
                var inst=this._getInst(target[0]);
                if(this._isDisabledDatepicker(target[0])){
                    return
                }
                this._adjustInstDate(inst,offset+(period=="M"?this._get(inst,"showCurrentAtPos"):0),period);
                this._updateDatepicker(inst)
            },
            _gotoToday:function(id){
                var target=$(id);
                var inst=this._getInst(target[0]);
                if(this._get(inst,"gotoCurrent")&&inst.currentDay){
                    inst.selectedDay=inst.currentDay;
                    inst.drawMonth=inst.selectedMonth=inst.currentMonth;
                    inst.drawYear=inst.selectedYear=inst.currentYear
                }else{
                    var date=new Date();
                    inst.selectedDay=date.getDate();
                    inst.drawMonth=inst.selectedMonth=date.getMonth();
                    inst.drawYear=inst.selectedYear=date.getFullYear()
                }
                this._notifyChange(inst);
                this._adjustDate(target)
            },
            _selectMonthYear:function(id,select,period){
                var target=$(id);
                var inst=this._getInst(target[0]);
                inst["selected"+(period=="M"?"Month":"Year")]=inst["draw"+(period=="M"?"Month":"Year")]=parseInt(select.options[select.selectedIndex].value,10);
                this._notifyChange(inst);
                this._adjustDate(target)
            },
            _selectDay:function(id,month,year,td){
                var target=$(id);
                if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){
                    return
                }
                var inst=this._getInst(target[0]);
                inst.selectedDay=inst.currentDay=$("a",td).html();
                inst.selectedMonth=inst.currentMonth=month;
                inst.selectedYear=inst.currentYear=year;
                this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear))
            },
            _clearDate:function(id){
                var target=$(id);
                var inst=this._getInst(target[0]);
                this._selectDate(target,"")
            },
            _selectDate:function(id,dateStr){
                var target=$(id);
                var inst=this._getInst(target[0]);
                dateStr=(dateStr!=null?dateStr:this._formatDate(inst));
                if(inst.input){
                    inst.input.val(dateStr)
                }
                this._updateAlternate(inst);
                var onSelect=this._get(inst,"onSelect");
                if(onSelect){
                    onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])
                }else{
                    if(inst.input){
                        inst.input.trigger("change")
                    }
                }
                if(inst.inline){
                    this._updateDatepicker(inst)
                }else{
                    this._hideDatepicker();
                    this._lastInput=inst.input[0];
                    if(typeof(inst.input[0])!="object"){
                        inst.input.focus()
                    }
                    this._lastInput=null
                }
            },
            _updateAlternate:function(inst){
                var altField=this._get(inst,"altField");
                if(altField){
                    var altFormat=this._get(inst,"altFormat")||this._get(inst,"dateFormat");
                    var date=this._getDate(inst);
                    var dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));
                    $(altField).each(function(){
                        $(this).val(dateStr)
                    })
                }
            },
            noWeekends:function(date){
                var day=date.getDay();
                return[(day>0&&day<6),""]
            },
            iso8601Week:function(date){
                var checkDate=new Date(date.getTime());
                checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));
                var time=checkDate.getTime();
                checkDate.setMonth(0);
                checkDate.setDate(1);
                return Math.floor(Math.round((time-checkDate)/86400000)/7)+1
            },
            parseDate:function(format,value,settings){
                if(format==null||value==null){
                    throw"Invalid arguments"
                }
                value=(typeof value=="object"?value.toString():value+"");
                if(value==""){
                    return null
                }
                var shortYearCutoff=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff;
                shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));
                var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;
                var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;
                var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;
                var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;
                var year=-1;
                var month=-1;
                var day=-1;
                var doy=-1;
                var literal=false;
                var lookAhead=function(match){
                    var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);
                    if(matches){
                        iFormat++
                    }
                    return matches
                };
        
                var getNumber=function(match){
                    var isDoubled=lookAhead(match);
                    var size=(match=="@"?14:(match=="!"?20:(match=="y"&&isDoubled?4:(match=="o"?3:2))));
                    var digits=new RegExp("^\\d{1,"+size+"}");
                    var num=value.substring(iValue).match(digits);
                    if(!num){
                        throw"Missing number at position "+iValue
                    }
                    iValue+=num[0].length;
                    return parseInt(num[0],10)
                };
        
                var getName=function(match,shortNames,longNames){
                    var names=$.map(lookAhead(match)?longNames:shortNames,function(v,k){
                        return[[k,v]]
                    }).sort(function(a,b){
                        return -(a[1].length-b[1].length)
                    });
                    var index=-1;
                    $.each(names,function(i,pair){
                        var name=pair[1];
                        if(value.substr(iValue,name.length).toLowerCase()==name.toLowerCase()){
                            index=pair[0];
                            iValue+=name.length;
                            return false
                        }
                    });
                    if(index!=-1){
                        return index+1
                    }else{
                        throw"Unknown name at position "+iValue
                    }
                };

                var checkLiteral=function(){
                    if(value.charAt(iValue)!=format.charAt(iFormat)){
                        throw"Unexpected literal at position "+iValue
                    }
                    iValue++
                };

                var iValue=0;
                for(var iFormat=0;iFormat<format.length;iFormat++){
                    if(literal){
                        if(format.charAt(iFormat)=="'"&&!lookAhead("'")){
                            literal=false
                        }else{
                            checkLiteral()
                        }
                    }else{
                        switch(format.charAt(iFormat)){
                            case"d":
                                day=getNumber("d");
                                break;
                            case"D":
                                getName("D",dayNamesShort,dayNames);
                                break;
                            case"o":
                                doy=getNumber("o");
                                break;
                            case"m":
                                month=getNumber("m");
                                break;
                            case"M":
                                month=getName("M",monthNamesShort,monthNames);
                                break;
                            case"y":
                                year=getNumber("y");
                                break;
                            case"@":
                                var date=new Date(getNumber("@"));
                                year=date.getFullYear();
                                month=date.getMonth()+1;
                                day=date.getDate();
                                break;
                            case"!":
                                var date=new Date((getNumber("!")-this._ticksTo1970)/10000);
                                year=date.getFullYear();
                                month=date.getMonth()+1;
                                day=date.getDate();
                                break;
                            case"'":
                                if(lookAhead("'")){
                                    checkLiteral()
                                }else{
                                    literal=true
                                }
                                break;
                            default:
                                checkLiteral()
                        }
                    }
                }
                if(iValue<value.length){
                    throw"Extra/unparsed characters found in date: "+value.substring(iValue)
                }
                if(year==-1){
                    year=new Date().getFullYear()
                }else{
                    if(year<100){
                        year+=new Date().getFullYear()-new Date().getFullYear()%100+(year<=shortYearCutoff?0:-100)
                    }
                    
                    if(settings.isBuddhist){
                        year -=543;
                    }
                }
                
                if(doy>-1){
                    month=1;
                    day=doy;
                    do{
                        var dim=this._getDaysInMonth(year,month-1);
                        if(day<=dim){
                            break
                        }
                        month++;
                        day-=dim
                    }while(true)
                }
                var date=this._daylightSavingAdjust(new Date(year,month-1,day));
                if(date.getFullYear()!=year||date.getMonth()+1!=month||date.getDate()!=day){
                    throw"Invalid date"
                }
                return date
            },
            ATOM:"yy-mm-dd",
            COOKIE:"D, dd M yy",
            ISO_8601:"yy-mm-dd",
            RFC_822:"D, d M y",
            RFC_850:"DD, dd-M-y",
            RFC_1036:"D, d M y",
            RFC_1123:"D, d M yy",
            RFC_2822:"D, d M yy",
            RSS:"D, d M y",
            TICKS:"!",
            TIMESTAMP:"@",
            W3C:"yy-mm-dd",
            _ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),
            formatDate:function(format,date,settings){
                if(!date){
                    return""
                }
                var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;
                var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;
                var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;
                var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;
                var lookAhead=function(match){
                    var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);
                    if(matches){
                        iFormat++
                    }
                    return matches
                };
        
                var formatNumber=function(match,value,len){
                    var num=""+value;
                    if(lookAhead(match)){
                        while(num.length<len){
                            num="0"+num
                        }
                    }
                    return num
                };
    
                var formatName=function(match,value,shortNames,longNames){
                    return(lookAhead(match)?longNames[value]:shortNames[value])
                };
    
                var output="";
                var literal=false;
                if(date){
                    for(var iFormat=0;iFormat<format.length;iFormat++){
                        if(literal){
                            if(format.charAt(iFormat)=="'"&&!lookAhead("'")){
                                literal=false
                            }else{
                                output+=format.charAt(iFormat)
                            }
                        }else{
                            switch(format.charAt(iFormat)){
                                case"d":
                                    output+=formatNumber("d",date.getDate(),2);
                                    break;
                                case"D":
                                    output+=formatName("D",date.getDay(),dayNamesShort,dayNames);
                                    break;
                                case"o":
                                    output+=formatNumber("o",Math.round((new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime()-new Date(date.getFullYear(),0,0).getTime())/86400000),3);
                                    break;
                                case"m":
                                    output+=formatNumber("m",date.getMonth()+1,2);
                                    break;
                                case"M":
                                    output+=formatName("M",date.getMonth(),monthNamesShort,monthNames);
                                    break;
                                case"y":
                                    output+=(lookAhead("y")? settings.isBuddhist ? date.getFullYear()+543 : date.getFullYear():(date.getYear()%100<10?"0":"")+date.getYear()%100);
                                    break;
                                case"@":
                                    output+=date.getTime();
                                    break;
                                case"!":
                                    output+=date.getTime()*10000+this._ticksTo1970;
                                    break;
                                case"'":
                                    if(lookAhead("'")){
                                        output+="'"
                                    }else{
                                        literal=true
                                    }
                                    break;
                                default:
                                    output+=format.charAt(iFormat)
                            }
                        }
                    }
                }
                return output
            },
            _possibleChars:function(format){
                var chars="";
                var literal=false;
                var lookAhead=function(match){
                    var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);
                    if(matches){
                        iFormat++
                    }
                    return matches
                };
        
                for(var iFormat=0;iFormat<format.length;iFormat++){
                    if(literal){
                        if(format.charAt(iFormat)=="'"&&!lookAhead("'")){
                            literal=false
                        }else{
                            chars+=format.charAt(iFormat)
                        }
                    }else{
                        switch(format.charAt(iFormat)){
                            case"d":case"m":case"y":case"@":
                                chars+="0123456789";
                                break;
                            case"D":case"M":
                                return null;
                            case"'":
                                if(lookAhead("'")){
                                    chars+="'"
                                }else{
                                    literal=true
                                }
                                break;
                            default:
                                chars+=format.charAt(iFormat)
                        }
                    }
                }
                return chars
            },
            _get:function(inst,name){
                return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name]
            },
            _setDateFromField:function(inst,noDefault){
                if(inst.input.val()==inst.lastVal){
                    return
                }
                var dateFormat=this._get(inst,"dateFormat");
                var dates=inst.lastVal=inst.input?inst.input.val():null;
                var date,defaultDate;
                date=defaultDate=this._getDefaultDate(inst);
                
                var settings=this._getFormatConfig(inst);
                try{
                    date=this.parseDate(dateFormat,dates,settings)||defaultDate
                }catch(event){
                    this.log(event);
                    dates=(noDefault?"":dates)
                }
                inst.selectedDay=date.getDate();
                inst.drawMonth=inst.selectedMonth=date.getMonth();
                inst.drawYear=inst.selectedYear=date.getFullYear();
                inst.currentDay=(dates?date.getDate():0);
                inst.currentMonth=(dates?date.getMonth():0);
                inst.currentYear=(dates?date.getFullYear():0);
                this._adjustInstDate(inst)
            },
            _getDefaultDate:function(inst){
                return this._restrictMinMax(inst,this._determineDate(inst,this._get(inst,"defaultDate"),new Date()))
            },
            _determineDate:function(inst,date,defaultDate){
                var offsetNumeric=function(offset){
                    var date=new Date();
                    date.setDate(date.getDate()+offset);
                    return date
                };
        
                var offsetString=function(offset){
                    try{
                        return $.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),offset,$.datepicker._getFormatConfig(inst))
                    }catch(e){}
                    var date=(offset.toLowerCase().match(/^c/)?$.datepicker._getDate(inst):null)||new Date();
                    var year=date.getFullYear();
                    var month=date.getMonth();
                    var day=date.getDate();
                    var pattern=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;
                    var matches=pattern.exec(offset);
                    while(matches){
                        switch(matches[2]||"d"){
                            case"d":case"D":
                                day+=parseInt(matches[1],10);
                                break;
                            case"w":case"W":
                                day+=parseInt(matches[1],10)*7;
                                break;
                            case"m":case"M":
                                month+=parseInt(matches[1],10);
                                day=Math.min(day,$.datepicker._getDaysInMonth(year,month));
                                break;
                            case"y":case"Y":
                                year+=parseInt(matches[1],10);
                                day=Math.min(day,$.datepicker._getDaysInMonth(year,month));
                                break
                        }
                        matches=pattern.exec(offset)
                    }
                    return new Date(year,month,day)
                };
        
                var newDate=(date==null||date===""?defaultDate:(typeof date=="string"?offsetString(date):(typeof date=="number"?(isNaN(date)?defaultDate:offsetNumeric(date)):new Date(date.getTime()))));
                newDate=(newDate&&newDate.toString()=="Invalid Date"?defaultDate:newDate);
                if(newDate){
                    newDate.setHours(0);
                    newDate.setMinutes(0);
                    newDate.setSeconds(0);
                    newDate.setMilliseconds(0)
                }
                return this._daylightSavingAdjust(newDate)
            },
            _daylightSavingAdjust:function(date){
                if(!date){
                    return null
                }
                date.setHours(date.getHours()>12?date.getHours()+2:0);
                return date
            },
            _yearOffset: function (a) {
                if (this._get(a, "isBuddhist")){
                    return 543;
                } 
                return 0
            },
            _setDate:function(inst,date,noChange){
                var clear=!date;
                var origMonth=inst.selectedMonth;
                var origYear=inst.selectedYear;
                var newDate=this._restrictMinMax(inst,this._determineDate(inst,date,new Date()));
                inst.selectedDay=inst.currentDay=newDate.getDate();
                inst.drawMonth=inst.selectedMonth=inst.currentMonth=newDate.getMonth();
                inst.drawYear=inst.selectedYear=inst.currentYear=newDate.getFullYear();
                if((origMonth!=inst.selectedMonth||origYear!=inst.selectedYear)&&!noChange){
                    this._notifyChange(inst)
                }
                this._adjustInstDate(inst);
                if(inst.input){
                    inst.input.val(clear?"":this._formatDate(inst))
                }
            },
            _getDate:function(inst){
                var startDate=(!inst.currentYear||(inst.input&&inst.input.val()=="")?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));
                return startDate
            },
            _attachHandlers:function(inst){
                var stepMonths=this._get(inst,"stepMonths");
                var id="#"+inst.id.replace(/\\\\/g,"\\");
                inst.dpDiv.find("[data-handler]").map(function(){
                    var handler={
                        prev:function(){
                            window["DP_jQuery_"+dpuuid].datepicker._adjustDate(id,-stepMonths,"M")
                        },
                        next:function(){
                            window["DP_jQuery_"+dpuuid].datepicker._adjustDate(id,+stepMonths,"M")
                        },
                        hide:function(){
                            window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker()
                        },
                        today:function(){
                            window["DP_jQuery_"+dpuuid].datepicker._gotoToday(id)
                        },
                        selectDay:function(){
                            window["DP_jQuery_"+dpuuid].datepicker._selectDay(id,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);
                            return false
                        },
                        selectMonth:function(){
                            window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(id,this,"M");
                            return false
                        },
                        selectYear:function(){
                            window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(id,this,"Y");
                            return false
                        }
                    };
        
                    $(this).bind(this.getAttribute("data-event"),handler[this.getAttribute("data-handler")])
                })
            },
            _generateHTML:function(inst){
                var today=new Date();
                today=this._daylightSavingAdjust(new Date(today.getFullYear(),today.getMonth(),today.getDate()));
                var isRTL=this._get(inst,"isRTL");
                var showButtonPanel=this._get(inst,"showButtonPanel");
                var hideIfNoPrevNext=this._get(inst,"hideIfNoPrevNext");
                var navigationAsDateFormat=this._get(inst,"navigationAsDateFormat");
                var numMonths=this._getNumberOfMonths(inst);
                var showCurrentAtPos=this._get(inst,"showCurrentAtPos");
                var stepMonths=this._get(inst,"stepMonths");
                var isMultiMonth=(numMonths[0]!=1||numMonths[1]!=1);
                var currentDate=this._daylightSavingAdjust((!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));
                var minDate=this._getMinMaxDate(inst,"min");
                var maxDate=this._getMinMaxDate(inst,"max");
                var drawMonth=inst.drawMonth-showCurrentAtPos;
                var drawYear=inst.drawYear;
                if(drawMonth<0){
                    drawMonth+=12;
                    drawYear--
                }
                if(maxDate){
                    var maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-(numMonths[0]*numMonths[1])+1,maxDate.getDate()));
                    maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);
                    while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){
                        drawMonth--;
                        if(drawMonth<0){
                            drawMonth=11;
                            drawYear--
                        }
                    }
                }
                inst.drawMonth=drawMonth;
                inst.drawYear=drawYear;
                var prevText=this._get(inst,"prevText");
                prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst)));
                var prev=(this._canAdjustMonth(inst,-1,drawYear,drawMonth)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>"));
                var nextText=this._get(inst,"nextText");
                nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst)));
                var next=(this._canAdjustMonth(inst,+1,drawYear,drawMonth)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>"));
                var currentText=this._get(inst,"currentText");
                var gotoDate=(this._get(inst,"gotoCurrent")&&inst.currentDay?currentDate:today);
                currentText=(!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));
                var controls=(!inst.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(inst,"closeText")+"</button>":"");
                var buttonPanel=(showButtonPanel)?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(isRTL?controls:"")+(this._isInRange(inst,gotoDate)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+currentText+"</button>":"")+(isRTL?"":controls)+"</div>":"";
                var firstDay=parseInt(this._get(inst,"firstDay"),10);
                firstDay=(isNaN(firstDay)?0:firstDay);
                var showWeek=this._get(inst,"showWeek");
                var dayNames=this._get(inst,"dayNames");
                var dayNamesShort=this._get(inst,"dayNamesShort");
                var dayNamesMin=this._get(inst,"dayNamesMin");
                var monthNames=this._get(inst,"monthNames");
                var monthNamesShort=this._get(inst,"monthNamesShort");
                var beforeShowDay=this._get(inst,"beforeShowDay");
                var showOtherMonths=this._get(inst,"showOtherMonths");
                var selectOtherMonths=this._get(inst,"selectOtherMonths");
                var calculateWeek=this._get(inst,"calculateWeek")||this.iso8601Week;
                var defaultDate=this._getDefaultDate(inst);
                var html="";
                for(var row=0;row<numMonths[0];row++){
                    var group="";
                    this.maxRows=4;
                    for(var col=0;col<numMonths[1];col++){
                        var selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));
                        var cornerClass=" ui-corner-all";
                        var calender="";
                        if(isMultiMonth){
                            calender+='<div class="ui-datepicker-group';
                            if(numMonths[1]>1){
                                switch(col){
                                    case 0:
                                        calender+=" ui-datepicker-group-first";
                                        cornerClass=" ui-corner-"+(isRTL?"right":"left");
                                        break;
                                    case numMonths[1]-1:
                                        calender+=" ui-datepicker-group-last";
                                        cornerClass=" ui-corner-"+(isRTL?"left":"right");
                                        break;
                                    default:
                                        calender+=" ui-datepicker-group-middle";
                                        cornerClass="";
                                        break
                                }
                            }
                            calender+='">'
                        }
                        calender+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+cornerClass+'">'+(/all|left/.test(cornerClass)&&row==0?(isRTL?next:prev):"")+(/all|right/.test(cornerClass)&&row==0?(isRTL?prev:next):"")+this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,row>0||col>0,monthNames,monthNamesShort)+'</div><table class="ui-datepicker-calendar"><thead><tr>';
                        var thead=(showWeek?'<th class="ui-datepicker-week-col">'+this._get(inst,"weekHeader")+"</th>":"");
                        for(var dow=0;dow<7;dow++){
                            var day=(dow+firstDay)%7;
                            thead+="<th"+((dow+firstDay+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+dayNames[day]+'">'+dayNamesMin[day]+"</span></th>"
                        }
                        calender+=thead+"</tr></thead><tbody>";
                        var daysInMonth=this._getDaysInMonth(drawYear,drawMonth);
                        if(drawYear==inst.selectedYear&&drawMonth==inst.selectedMonth){
                            inst.selectedDay=Math.min(inst.selectedDay,daysInMonth)
                        }
                        var leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;
                        var curRows=Math.ceil((leadDays+daysInMonth)/7);
                        var numRows=(isMultiMonth?this.maxRows>curRows?this.maxRows:curRows:curRows);
                        this.maxRows=numRows;
                        var printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));
                        for(var dRow=0;dRow<numRows;dRow++){
                            calender+="<tr>";
                            var tbody=(!showWeek?"":'<td class="ui-datepicker-week-col">'+this._get(inst,"calculateWeek")(printDate)+"</td>");
                            for(var dow=0;dow<7;dow++){
                                var daySettings=(beforeShowDay?beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[true,""]);
                                var otherMonth=(printDate.getMonth()!=drawMonth);
                                var unselectable=(otherMonth&&!selectOtherMonths)||!daySettings[0]||(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);
                                tbody+='<td class="'+((dow+firstDay+6)%7>=5?" ui-datepicker-week-end":"")+(otherMonth?" ui-datepicker-other-month":"")+((printDate.getTime()==selectedDate.getTime()&&drawMonth==inst.selectedMonth&&inst._keyEvent)||(defaultDate.getTime()==printDate.getTime()&&defaultDate.getTime()==selectedDate.getTime())?" "+this._dayOverClass:"")+(unselectable?" "+this._unselectableClass+" ui-state-disabled":"")+(otherMonth&&!showOtherMonths?"":" "+daySettings[1]+(printDate.getTime()==currentDate.getTime()?" "+this._currentClass:"")+(printDate.getTime()==today.getTime()?" ui-datepicker-today":""))+'"'+((!otherMonth||showOtherMonths)&&daySettings[2]?' title="'+daySettings[2]+'"':"")+(unselectable?"":' data-handler="selectDay" data-event="click" data-month="'+printDate.getMonth()+'" data-year="'+printDate.getFullYear()+'"')+">"+(otherMonth&&!showOtherMonths?"&#xa0;":(unselectable?'<span class="ui-state-default">'+printDate.getDate()+"</span>":'<a class="ui-state-default'+(printDate.getTime()==today.getTime()?" ui-state-highlight":"")+(printDate.getTime()==currentDate.getTime()?" ui-state-active":"")+(otherMonth?" ui-priority-secondary":"")+'" href="#">'+printDate.getDate()+"</a>"))+"</td>";
                                printDate.setDate(printDate.getDate()+1);
                                printDate=this._daylightSavingAdjust(printDate)
                            }
                            calender+=tbody+"</tr>"
                        }
                        drawMonth++;
                        if(drawMonth>11){
                            drawMonth=0;
                            drawYear++
                        }
                        calender+="</tbody></table>"+(isMultiMonth?"</div>"+((numMonths[0]>0&&col==numMonths[1]-1)?'<div class="ui-datepicker-row-break"></div>':""):"");
                        group+=calender
                    }
                    html+=group
                }
                html+=buttonPanel+($.browser.msie&&parseInt($.browser.version,10)<7&&!inst.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");
                inst._keyEvent=false;
                return html
            },
            _generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,secondary,monthNames,monthNamesShort){
                var changeMonth=this._get(inst,"changeMonth");
                var changeYear=this._get(inst,"changeYear");
                var showMonthAfterYear=this._get(inst,"showMonthAfterYear");
                var html='<div class="ui-datepicker-title">';
                var monthHtml="";
                if(secondary||!changeMonth){
                    monthHtml+='<span class="ui-datepicker-month">'+monthNames[drawMonth]+"</span>"
                }else{
                    var inMinYear=(minDate&&minDate.getFullYear()==drawYear);
                    var inMaxYear=(maxDate&&maxDate.getFullYear()==drawYear);
                    monthHtml+='<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
                    for(var month=0;month<12;month++){
                        if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth())){
                            monthHtml+='<option value="'+month+'"'+(month==drawMonth?' selected="selected"':"")+">"+monthNamesShort[month]+"</option>"
                        }
                    }
                    monthHtml+="</select>"
                }
                if(!showMonthAfterYear){
                    html+=monthHtml+(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")
                }
                if(!inst.yearshtml){
                    inst.yearshtml="";
                    if(secondary||!changeYear){
                        html+='<span class="ui-datepicker-year">'+(drawYear+this._yearOffset(inst))+"</span>"
                    }else{
                        var years=this._get(inst,"yearRange").split(":");
                        var thisYear=new Date().getFullYear();
                        var determineYear=function(value){
                            var year=(value.match(/c[+-].*/)?drawYear+parseInt(value.substring(1),10):(value.match(/[+-].*/)?thisYear+parseInt(value,10):parseInt(value,10)));
                            return(isNaN(year)?thisYear:year)
                        };
            
                        var year=determineYear(years[0]);
                        var endYear=Math.max(year,determineYear(years[1]||""));
                        year=(minDate?Math.max(year,minDate.getFullYear()):year);
                        endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);
                        inst.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';
                        for(;year<=endYear;year++){
                            inst.yearshtml+='<option value="'+year+'"'+(year==drawYear?' selected="selected"':"")+">"+(year+this._yearOffset(inst))+"</option>"
                        }
                        inst.yearshtml+="</select>";
                        html+=inst.yearshtml;
                        inst.yearshtml=null
                    }
                }
                html+=this._get(inst,"yearSuffix");
                if(showMonthAfterYear){
                    html+=(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")+monthHtml
                }
                html+="</div>";
                return html
            },
            _adjustInstDate:function(inst,offset,period){
                var year=inst.drawYear+(period=="Y"?offset:0);
                var month=inst.drawMonth+(period=="M"?offset:0);
                var day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+(period=="D"?offset:0);
                var date=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));
                inst.selectedDay=date.getDate();
                inst.drawMonth=inst.selectedMonth=date.getMonth();
                inst.drawYear=inst.selectedYear=date.getFullYear();
                if(period=="M"||period=="Y"){
                    this._notifyChange(inst)
                }
            },
            _restrictMinMax:function(inst,date){
                var minDate=this._getMinMaxDate(inst,"min");
                var maxDate=this._getMinMaxDate(inst,"max");
                var newDate=(minDate&&date<minDate?minDate:date);
                newDate=(maxDate&&newDate>maxDate?maxDate:newDate);
                return newDate
            },
            _notifyChange:function(inst){
                var onChange=this._get(inst,"onChangeMonthYear");
                if(onChange){
                    onChange.apply((inst.input?inst.input[0]:null),[inst.selectedYear,inst.selectedMonth+1,inst])
                }
            },
            _getNumberOfMonths:function(inst){
                var numMonths=this._get(inst,"numberOfMonths");
                return(numMonths==null?[1,1]:(typeof numMonths=="number"?[1,numMonths]:numMonths))
            },
            _getMinMaxDate:function(inst,minMax){
                return this._determineDate(inst,this._get(inst,minMax+"Date"),null)
            },
            _getDaysInMonth:function(year,month){
                return 32-this._daylightSavingAdjust(new Date(year,month,32)).getDate()
            },
            _getFirstDayOfMonth:function(year,month){
                return new Date(year,month,1).getDay()
            },
            _canAdjustMonth:function(inst,offset,curYear,curMonth){
                var numMonths=this._getNumberOfMonths(inst);
                var date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[0]*numMonths[1]),1));
                if(offset<0){
                    date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()))
                }
                return this._isInRange(inst,date)
            },
            _isInRange:function(inst,date){
                var minDate=this._getMinMaxDate(inst,"min");
                var maxDate=this._getMinMaxDate(inst,"max");
                return((!minDate||date.getTime()>=minDate.getTime())&&(!maxDate||date.getTime()<=maxDate.getTime()))
            },
            _getFormatConfig:function(inst){
                var shortYearCutoff=this._get(inst,"shortYearCutoff");
                
                shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));
                return{
                    shortYearCutoff:shortYearCutoff,
                    dayNamesShort:this._get(inst,"dayNamesShort"),
                    dayNames:this._get(inst,"dayNames"),
                    monthNamesShort:this._get(inst,"monthNamesShort"),
                    monthNames:this._get(inst,"monthNames"),
                    isBuddhist:this._get(inst,"isBuddhist")
                }
            },
            _formatDate:function(inst,day,month,year){
                if(!day){
                    inst.currentDay=inst.selectedDay;
                    inst.currentMonth=inst.selectedMonth;
                    inst.currentYear=inst.selectedYear
                }
                var date=(day?(typeof day=="object"?day:this._daylightSavingAdjust(new Date(year,month,day))):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));
                return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst))
            }
        });
        function bindHover(dpDiv){
            var selector="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return dpDiv.bind("mouseout",function(event){
                var elem=$(event.target).closest(selector);
                if(!elem.length){
                    return
                }
                elem.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
            }).bind("mouseover",function(event){
                var elem=$(event.target).closest(selector);
                if($.datepicker._isDisabledDatepicker(instActive.inline?dpDiv.parent()[0]:instActive.input[0])||!elem.length){
                    return
                }
                elem.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
                elem.addClass("ui-state-hover");
                if(elem.hasClass("ui-datepicker-prev")){
                    elem.addClass("ui-datepicker-prev-hover")
                }
                if(elem.hasClass("ui-datepicker-next")){
                    elem.addClass("ui-datepicker-next-hover")
                }
            })
        }
        function extendRemove(target,props){
            $.extend(target,props);
            for(var name in props){
                if(props[name]==null||props[name]==undefined){
                    target[name]=props[name]
                }
            }
            return target
        }
        function isArray(a){
            return(a&&(($.browser.safari&&typeof a=="object"&&a.length)||(a.constructor&&a.constructor.toString().match(/\Array\(\)/))))
        }
        $.fn.datepicker=function(options){
            if(!this.length){
                return this
            }
            if(!$.datepicker.initialized){
                $(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv);
                $.datepicker.initialized=true
            }
            var otherArgs=Array.prototype.slice.call(arguments,1);
            if(typeof options=="string"&&(options=="isDisabled"||options=="getDate"||options=="widget")){
                return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))
            }
            if(options=="option"&&arguments.length==2&&typeof arguments[1]=="string"){
                return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))
            }
            return this.each(function(){
                typeof options=="string"?$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options)
            })
        };
    
        $.datepicker=new Datepicker();
        $.datepicker.initialized=false;
        $.datepicker.uuid=new Date().getTime();
        $.datepicker.version="1.8.23";
        window["DP_jQuery_"+dpuuid]=$
    })(jQuery);
    /*
 * jQuery UI Progressbar 1.8.23
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Progressbar
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 */
    (function(a,b){
        a.widget("ui.progressbar",{
            options:{
                value:0,
                max:100
            },
            min:0,
            _create:function(){
                this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                    role:"progressbar",
                    "aria-valuemin":this.min,
                    "aria-valuemax":this.options.max,
                    "aria-valuenow":this._value()
                });
                this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
                this.oldValue=this._value();
                this._refreshValue()
            },
            destroy:function(){
                this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
                this.valueDiv.remove();
                a.Widget.prototype.destroy.apply(this,arguments)
            },
            value:function(c){
                if(c===b){
                    return this._value()
                }
                this._setOption("value",c);
                return this
            },
            _setOption:function(c,d){
                if(c==="value"){
                    this.options.value=d;
                    this._refreshValue();
                    if(this._value()===this.options.max){
                        this._trigger("complete")
                    }
                }
                a.Widget.prototype._setOption.apply(this,arguments)
            },
            _value:function(){
                var c=this.options.value;
                if(typeof c!=="number"){
                    c=0
                }
                return Math.min(this.options.max,Math.max(this.min,c))
            },
            _percentage:function(){
                return 100*this._value()/this.options.max
            },
            _refreshValue:function(){
                var d=this.value();
                var c=this._percentage();
                if(this.oldValue!==d){
                    this.oldValue=d;
                    this._trigger("change")
                }
                this.valueDiv.toggle(d>this.min).toggleClass("ui-corner-right",d===this.options.max).width(c.toFixed(0)+"%");
                this.element.attr("aria-valuenow",d)
            }
        });
        a.extend(a.ui.progressbar,{
            version:"1.8.23"
        })
    })(jQuery);
    /*
 * jQuery UI Effects 1.8.23
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */
    jQuery.effects||(function(h,e){
        h.effects={};
    
        h.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(o,n){
            h.fx.step[n]=function(p){
                if(!p.colorInit){
                    p.start=m(p.elem,n);
                    p.end=k(p.end);
                    p.colorInit=true
                }
                p.elem.style[n]="rgb("+Math.max(Math.min(parseInt((p.pos*(p.end[0]-p.start[0]))+p.start[0],10),255),0)+","+Math.max(Math.min(parseInt((p.pos*(p.end[1]-p.start[1]))+p.start[1],10),255),0)+","+Math.max(Math.min(parseInt((p.pos*(p.end[2]-p.start[2]))+p.start[2],10),255),0)+")"
            }
        });
        function k(o){
            var n;
            if(o&&o.constructor==Array&&o.length==3){
                return o
            }
            if(n=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(o)){
                return[parseInt(n[1],10),parseInt(n[2],10),parseInt(n[3],10)]
            }
            if(n=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(o)){
                return[parseFloat(n[1])*2.55,parseFloat(n[2])*2.55,parseFloat(n[3])*2.55]
            }
            if(n=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(o)){
                return[parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16)]
            }
            if(n=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(o)){
                return[parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16)]
            }
            if(n=/rgba\(0, 0, 0, 0\)/.exec(o)){
                return a.transparent
            }
            return a[h.trim(o).toLowerCase()]
        }
        function m(p,n){
            var o;
            do{
                o=(h.curCSS||h.css)(p,n);
                if(o!=""&&o!="transparent"||h.nodeName(p,"body")){
                    break
                }
                n="backgroundColor"
            }while(p=p.parentNode);
            return k(o)
        }
        var a={
            aqua:[0,255,255],
            azure:[240,255,255],
            beige:[245,245,220],
            black:[0,0,0],
            blue:[0,0,255],
            brown:[165,42,42],
            cyan:[0,255,255],
            darkblue:[0,0,139],
            darkcyan:[0,139,139],
            darkgrey:[169,169,169],
            darkgreen:[0,100,0],
            darkkhaki:[189,183,107],
            darkmagenta:[139,0,139],
            darkolivegreen:[85,107,47],
            darkorange:[255,140,0],
            darkorchid:[153,50,204],
            darkred:[139,0,0],
            darksalmon:[233,150,122],
            darkviolet:[148,0,211],
            fuchsia:[255,0,255],
            gold:[255,215,0],
            green:[0,128,0],
            indigo:[75,0,130],
            khaki:[240,230,140],
            lightblue:[173,216,230],
            lightcyan:[224,255,255],
            lightgreen:[144,238,144],
            lightgrey:[211,211,211],
            lightpink:[255,182,193],
            lightyellow:[255,255,224],
            lime:[0,255,0],
            magenta:[255,0,255],
            maroon:[128,0,0],
            navy:[0,0,128],
            olive:[128,128,0],
            orange:[255,165,0],
            pink:[255,192,203],
            purple:[128,0,128],
            violet:[128,0,128],
            red:[255,0,0],
            silver:[192,192,192],
            white:[255,255,255],
            yellow:[255,255,0],
            transparent:[255,255,255]
        };
    
        var f=["add","remove","toggle"],c={
            border:1,
            borderBottom:1,
            borderColor:1,
            borderLeft:1,
            borderRight:1,
            borderTop:1,
            borderWidth:1,
            margin:1,
            padding:1
        };

        function g(){
            var q=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,r={},o,p;
            if(q&&q.length&&q[0]&&q[q[0]]){
                var n=q.length;
                while(n--){
                    o=q[n];
                    if(typeof q[o]=="string"){
                        p=o.replace(/\-(\w)/g,function(s,t){
                            return t.toUpperCase()
                        });
                        r[p]=q[o]
                    }
                }
            }else{
                for(o in q){
                    if(typeof q[o]==="string"){
                        r[o]=q[o]
                    }
                }
            }
            return r
        }
        function b(o){
            var n,p;
            for(n in o){
                p=o[n];
                if(p==null||h.isFunction(p)||n in c||(/scrollbar/).test(n)||(!(/color/i).test(n)&&isNaN(parseFloat(p)))){
                    delete o[n]
                }
            }
            return o
        }
        function i(n,p){
            var q={
                _:0
            },o;
            for(o in p){
                if(n[o]!=p[o]){
                    q[o]=p[o]
                }
            }
            return q
        }
        h.effects.animateClass=function(n,o,q,p){
            if(h.isFunction(q)){
                p=q;
                q=null
            }
            return this.queue(function(){
                var u=h(this),r=u.attr("style")||" ",v=b(g.call(this)),t,s=u.attr("class")||"";
                h.each(f,function(w,x){
                    if(n[x]){
                        u[x+"Class"](n[x])
                    }
                });
                t=b(g.call(this));
                u.attr("class",s);
                u.animate(i(v,t),{
                    queue:false,
                    duration:o,
                    easing:q,
                    complete:function(){
                        h.each(f,function(w,x){
                            if(n[x]){
                                u[x+"Class"](n[x])
                            }
                        });
                        if(typeof u.attr("style")=="object"){
                            u.attr("style").cssText="";
                            u.attr("style").cssText=r
                        }else{
                            u.attr("style",r)
                        }
                        if(p){
                            p.apply(this,arguments)
                        }
                        h.dequeue(this)
                    }
                })
            })
        };

        h.fn.extend({
            _addClass:h.fn.addClass,
            addClass:function(o,n,q,p){
                return n?h.effects.animateClass.apply(this,[{
                    add:o
                },n,q,p]):this._addClass(o)
            },
            _removeClass:h.fn.removeClass,
            removeClass:function(o,n,q,p){
                return n?h.effects.animateClass.apply(this,[{
                    remove:o
                },n,q,p]):this._removeClass(o)
            },
            _toggleClass:h.fn.toggleClass,
            toggleClass:function(p,o,n,r,q){
                if(typeof o=="boolean"||o===e){
                    if(!n){
                        return this._toggleClass(p,o)
                    }else{
                        return h.effects.animateClass.apply(this,[(o?{
                            add:p
                        }:{
                            remove:p
                        }),n,r,q])
                    }
                }else{
                    return h.effects.animateClass.apply(this,[{
                        toggle:p
                    },o,n,r])
                }
            },
            switchClass:function(n,p,o,r,q){
                return h.effects.animateClass.apply(this,[{
                    add:p,
                    remove:n
                },o,r,q])
            }
        });
        h.extend(h.effects,{
            version:"1.8.23",
            save:function(o,p){
                for(var n=0;n<p.length;n++){
                    if(p[n]!==null){
                        o.data("ec.storage."+p[n],o[0].style[p[n]])
                    }
                }
            },
            restore:function(o,p){
                for(var n=0;n<p.length;n++){
                    if(p[n]!==null){
                        o.css(p[n],o.data("ec.storage."+p[n]))
                    }
                }
            },
            setMode:function(n,o){
                if(o=="toggle"){
                    o=n.is(":hidden")?"show":"hide"
                }
                return o
            },
            getBaseline:function(o,p){
                var q,n;
                switch(o[0]){
                    case"top":
                        q=0;
                        break;
                    case"middle":
                        q=0.5;
                        break;
                    case"bottom":
                        q=1;
                        break;
                    default:
                        q=o[0]/p.height
                }
                switch(o[1]){
                    case"left":
                        n=0;
                        break;
                    case"center":
                        n=0.5;
                        break;
                    case"right":
                        n=1;
                        break;
                    default:
                        n=o[1]/p.width
                }
                return{
                    x:n,
                    y:q
                }
            },
            createWrapper:function(n){
                if(n.parent().is(".ui-effects-wrapper")){
                    return n.parent()
                }
                var o={
                    width:n.outerWidth(true),
                    height:n.outerHeight(true),
                    "float":n.css("float")
                },r=h("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize:"100%",
                    background:"transparent",
                    border:"none",
                    margin:0,
                    padding:0
                }),q=document.activeElement;
                try{
                    q.id
                }catch(p){
                    q=document.body
                }
                n.wrap(r);
                if(n[0]===q||h.contains(n[0],q)){
                    h(q).focus()
                }
                r=n.parent();
                if(n.css("position")=="static"){
                    r.css({
                        position:"relative"
                    });
                    n.css({
                        position:"relative"
                    })
                }else{
                    h.extend(o,{
                        position:n.css("position"),
                        zIndex:n.css("z-index")
                    });
                    h.each(["top","left","bottom","right"],function(s,t){
                        o[t]=n.css(t);
                        if(isNaN(parseInt(o[t],10))){
                            o[t]="auto"
                        }
                    });
                    n.css({
                        position:"relative",
                        top:0,
                        left:0,
                        right:"auto",
                        bottom:"auto"
                    })
                }
                return r.css(o).show()
            },
            removeWrapper:function(n){
                var o,p=document.activeElement;
                if(n.parent().is(".ui-effects-wrapper")){
                    o=n.parent().replaceWith(n);
                    if(n[0]===p||h.contains(n[0],p)){
                        h(p).focus()
                    }
                    return o
                }
                return n
            },
            setTransition:function(o,q,n,p){
                p=p||{};
    
                h.each(q,function(s,r){
                    var t=o.cssUnit(r);
                    if(t[0]>0){
                        p[r]=t[0]*n+t[1]
                    }
                });
                return p
            }
        });
        function d(o,n,p,q){
            if(typeof o=="object"){
                q=n;
                p=null;
                n=o;
                o=n.effect
            }
            if(h.isFunction(n)){
                q=n;
                p=null;
                n={}
            }
            if(typeof n=="number"||h.fx.speeds[n]){
                q=p;
                p=n;
                n={}
            }
            if(h.isFunction(p)){
                q=p;
                p=null
            }
            n=n||{};

            p=p||n.duration;
            p=h.fx.off?0:typeof p=="number"?p:p in h.fx.speeds?h.fx.speeds[p]:h.fx.speeds._default;
            q=q||n.complete;
            return[o,n,p,q]
        }
        function l(n){
            if(!n||typeof n==="number"||h.fx.speeds[n]){
                return true
            }
            if(typeof n==="string"&&!h.effects[n]){
                return true
            }
            return false
        }
        h.fn.extend({
            effect:function(q,p,s,u){
                var o=d.apply(this,arguments),r={
                    options:o[1],
                    duration:o[2],
                    callback:o[3]
                },t=r.options.mode,n=h.effects[q];
                if(h.fx.off||!n){
                    if(t){
                        return this[t](r.duration,r.callback)
                    }else{
                        return this.each(function(){
                            if(r.callback){
                                r.callback.call(this)
                            }
                        })
                    }
                }
                return n.call(this,r)
            },
            _show:h.fn.show,
            show:function(o){
                if(l(o)){
                    return this._show.apply(this,arguments)
                }else{
                    var n=d.apply(this,arguments);
                    n[1].mode="show";
                    return this.effect.apply(this,n)
                }
            },
            _hide:h.fn.hide,
            hide:function(o){
                if(l(o)){
                    return this._hide.apply(this,arguments)
                }else{
                    var n=d.apply(this,arguments);
                    n[1].mode="hide";
                    return this.effect.apply(this,n)
                }
            },
            __toggle:h.fn.toggle,
            toggle:function(o){
                if(l(o)||typeof o==="boolean"||h.isFunction(o)){
                    return this.__toggle.apply(this,arguments)
                }else{
                    var n=d.apply(this,arguments);
                    n[1].mode="toggle";
                    return this.effect.apply(this,n)
                }
            },
            cssUnit:function(n){
                var o=this.css(n),p=[];
                h.each(["em","px","%","pt"],function(q,r){
                    if(o.indexOf(r)>0){
                        p=[parseFloat(o),r]
                    }
                });
                return p
            }
        });
        var j={};

        h.each(["Quad","Cubic","Quart","Quint","Expo"],function(o,n){
            j[n]=function(q){
                return Math.pow(q,o+2)
            }
        });
        h.extend(j,{
            Sine:function(n){
                return 1-Math.cos(n*Math.PI/2)
            },
            Circ:function(n){
                return 1-Math.sqrt(1-n*n)
            },
            Elastic:function(n){
                return n===0||n===1?n:-Math.pow(2,8*(n-1))*Math.sin(((n-1)*80-7.5)*Math.PI/15)
            },
            Back:function(n){
                return n*n*(3*n-2)
            },
            Bounce:function(q){
                var n,o=4;
                while(q<((n=Math.pow(2,--o))-1)/11){}
                return 1/Math.pow(4,3-o)-7.5625*Math.pow((n*3-2)/22-q,2)
            }
        });
        h.each(j,function(o,n){
            h.easing["easeIn"+o]=n;
            h.easing["easeOut"+o]=function(q){
                return 1-n(1-q)
            };
        
            h.easing["easeInOut"+o]=function(q){
                return q<0.5?n(q*2)/2:n(q*-2+2)/-2+1
            }
        })
    })(jQuery);
    /*
 * jQuery UI Effects Blind 1.8.23
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Blind
 *
 * Depends:
 *	jquery.effects.core.js
 */
    (function(a,b){
        a.effects.blind=function(c){
            return this.queue(function(){
                var e=a(this),d=["position","top","bottom","left","right"];
                var i=a.effects.setMode(e,c.options.mode||"hide");
                var h=c.options.direction||"vertical";
                a.effects.save(e,d);
                e.show();
                var k=a.effects.createWrapper(e).css({
                    overflow:"hidden"
                });
                var f=(h=="vertical")?"height":"width";
                var j=(h=="vertical")?k.height():k.width();
                if(i=="show"){
                    k.css(f,0)
                }
                var g={};
            
                g[f]=i=="show"?j:0;
                k.animate(g,c.duration,c.options.easing,function(){
                    if(i=="hide"){
                        e.hide()
                    }
                    a.effects.restore(e,d);
                    a.effects.removeWrapper(e);
                    if(c.callback){
                        c.callback.apply(e[0],arguments)
                    }
                    e.dequeue()
                })
            })
        }
    })(jQuery);
    /*
 * jQuery UI Effects Bounce 1.8.23
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Bounce
 *
 * Depends:
 *	jquery.effects.core.js
 */
    (function(a,b){
        a.effects.bounce=function(c){
            return this.queue(function(){
                var f=a(this),m=["position","top","bottom","left","right"];
                var l=a.effects.setMode(f,c.options.mode||"effect");
                var o=c.options.direction||"up";
                var d=c.options.distance||20;
                var e=c.options.times||5;
                var h=c.duration||250;
                if(/show|hide/.test(l)){
                    m.push("opacity")
                }
                a.effects.save(f,m);
                f.show();
                a.effects.createWrapper(f);
                var g=(o=="up"||o=="down")?"top":"left";
                var q=(o=="up"||o=="left")?"pos":"neg";
                var d=c.options.distance||(g=="top"?f.outerHeight(true)/3:f.outerWidth(true)/3);
                if(l=="show"){
                    f.css("opacity",0).css(g,q=="pos"?-d:d)
                }
                if(l=="hide"){
                    d=d/(e*2)
                }
                if(l!="hide"){
                    e--
                }
                if(l=="show"){
                    var j={
                        opacity:1
                    };
                
                    j[g]=(q=="pos"?"+=":"-=")+d;
                    f.animate(j,h/2,c.options.easing);
                    d=d/2;
                    e--
                }
                for(var k=0;k<e;k++){
                    var p={},n={};
                
                    p[g]=(q=="pos"?"-=":"+=")+d;
                    n[g]=(q=="pos"?"+=":"-=")+d;
                    f.animate(p,h/2,c.options.easing).animate(n,h/2,c.options.easing);
                    d=(l=="hide")?d*2:d/2
                }
                if(l=="hide"){
                    var j={
                        opacity:0
                    };
                
                    j[g]=(q=="pos"?"-=":"+=")+d;
                    f.animate(j,h/2,c.options.easing,function(){
                        f.hide();
                        a.effects.restore(f,m);
                        a.effects.removeWrapper(f);
                        if(c.callback){
                            c.callback.apply(this,arguments)
                        }
                    })
                }else{
                    var p={},n={};
            
                    p[g]=(q=="pos"?"-=":"+=")+d;
                    n[g]=(q=="pos"?"+=":"-=")+d;
                    f.animate(p,h/2,c.options.easing).animate(n,h/2,c.options.easing,function(){
                        a.effects.restore(f,m);
                        a.effects.removeWrapper(f);
                        if(c.callback){
                            c.callback.apply(this,arguments)
                        }
                    })
                }
                f.queue("fx",function(){
                    f.dequeue()
                });
                f.dequeue()
            })
        }
    })(jQuery);
    /*
 * jQuery UI Effects Clip 1.8.23
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Clip
 *
 * Depends:
 *	jquery.effects.core.js
 */
    (function(a,b){
        a.effects.clip=function(c){
            return this.queue(function(){
                var g=a(this),k=["position","top","bottom","left","right","height","width"];
                var j=a.effects.setMode(g,c.options.mode||"hide");
                var l=c.options.direction||"vertical";
                a.effects.save(g,k);
                g.show();
                var d=a.effects.createWrapper(g).css({
                    overflow:"hidden"
                });
                var f=g[0].tagName=="IMG"?d:g;
                var h={
                    size:(l=="vertical")?"height":"width",
                    position:(l=="vertical")?"top":"left"
                };
                
                var e=(l=="vertical")?f.height():f.width();
                if(j=="show"){
                    f.css(h.size,0);
                    f.css(h.position,e/2)
                }
                var i={};
            
                i[h.size]=j=="show"?e:0;
                i[h.position]=j=="show"?0:e/2;
                f.animate(i,{
                    queue:false,
                    duration:c.duration,
                    easing:c.options.easing,
                    complete:function(){
                        if(j=="hide"){
                            g.hide()
                        }
                        a.effects.restore(g,k);
                        a.effects.removeWrapper(g);
                        if(c.callback){
                            c.callback.apply(g[0],arguments)
                        }
                        g.dequeue()
                    }
                })
            })
        }
    })(jQuery);
    /*
 * jQuery UI Effects Drop 1.8.23
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Drop
 *
 * Depends:
 *	jquery.effects.core.js
 */
    (function(a,b){
        a.effects.drop=function(c){
            return this.queue(function(){
                var f=a(this),e=["position","top","bottom","left","right","opacity"];
                var j=a.effects.setMode(f,c.options.mode||"hide");
                var i=c.options.direction||"left";
                a.effects.save(f,e);
                f.show();
                a.effects.createWrapper(f);
                var g=(i=="up"||i=="down")?"top":"left";
                var d=(i=="up"||i=="left")?"pos":"neg";
                var k=c.options.distance||(g=="top"?f.outerHeight(true)/2:f.outerWidth(true)/2);
                if(j=="show"){
                    f.css("opacity",0).css(g,d=="pos"?-k:k)
                }
                var h={
                    opacity:j=="show"?1:0
                };
                
                h[g]=(j=="show"?(d=="pos"?"+=":"-="):(d=="pos"?"-=":"+="))+k;
                f.animate(h,{
                    queue:false,
                    duration:c.duration,
                    easing:c.options.easing,
                    complete:function(){
                        if(j=="hide"){
                            f.hide()
                        }
                        a.effects.restore(f,e);
                        a.effects.removeWrapper(f);
                        if(c.callback){
                            c.callback.apply(this,arguments)
                        }
                        f.dequeue()
                    }
                })
            })
        }
    })(jQuery);
    /*
 * jQuery UI Effects Explode 1.8.23
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Explode
 *
 * Depends:
 *	jquery.effects.core.js
 */
    (function(a,b){
        a.effects.explode=function(c){
            return this.queue(function(){
                var l=c.options.pieces?Math.round(Math.sqrt(c.options.pieces)):3;
                var f=c.options.pieces?Math.round(Math.sqrt(c.options.pieces)):3;
                c.options.mode=c.options.mode=="toggle"?(a(this).is(":visible")?"hide":"show"):c.options.mode;
                var k=a(this).show().css("visibility","hidden");
                var m=k.offset();
                m.top-=parseInt(k.css("marginTop"),10)||0;
                m.left-=parseInt(k.css("marginLeft"),10)||0;
                var h=k.outerWidth(true);
                var d=k.outerHeight(true);
                for(var g=0;g<l;g++){
                    for(var e=0;e<f;e++){
                        k.clone().appendTo("body").wrap("<div></div>").css({
                            position:"absolute",
                            visibility:"visible",
                            left:-e*(h/f),
                            top:-g*(d/l)
                        }).parent().addClass("ui-effects-explode").css({
                            position:"absolute",
                            overflow:"hidden",
                            width:h/f,
                            height:d/l,
                            left:m.left+e*(h/f)+(c.options.mode=="show"?(e-Math.floor(f/2))*(h/f):0),
                            top:m.top+g*(d/l)+(c.options.mode=="show"?(g-Math.floor(l/2))*(d/l):0),
                            opacity:c.options.mode=="show"?0:1
                        }).animate({
                            left:m.left+e*(h/f)+(c.options.mode=="show"?0:(e-Math.floor(f/2))*(h/f)),
                            top:m.top+g*(d/l)+(c.options.mode=="show"?0:(g-Math.floor(l/2))*(d/l)),
                            opacity:c.options.mode=="show"?1:0
                        },c.duration||500)
                    }
                }
                setTimeout(function(){
                    c.options.mode=="show"?k.css({
                        visibility:"visible"
                    }):k.css({
                        visibility:"visible"
                    }).hide();
                    if(c.callback){
                        c.callback.apply(k[0])
                    }
                    k.dequeue();
                    a("div.ui-effects-explode").remove()
                },c.duration||500)
            })
        }
    })(jQuery);
    /*
 * jQuery UI Effects Fade 1.8.23
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fade
 *
 * Depends:
 *	jquery.effects.core.js
 */
    (function(a,b){
        a.effects.fade=function(c){
            return this.queue(function(){
                var d=a(this),e=a.effects.setMode(d,c.options.mode||"hide");
                d.animate({
                    opacity:e
                },{
                    queue:false,
                    duration:c.duration,
                    easing:c.options.easing,
                    complete:function(){
                        (c.callback&&c.callback.apply(this,arguments));
                        d.dequeue()
                    }
                })
            })
        }
    })(jQuery);
    /*
 * jQuery UI Effects Fold 1.8.23
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fold
 *
 * Depends:
 *	jquery.effects.core.js
 */
    (function(a,b){
        a.effects.fold=function(c){
            return this.queue(function(){
                var f=a(this),l=["position","top","bottom","left","right"];
                var i=a.effects.setMode(f,c.options.mode||"hide");
                var p=c.options.size||15;
                var o=!(!c.options.horizFirst);
                var h=c.duration?c.duration/2:a.fx.speeds._default/2;
                a.effects.save(f,l);
                f.show();
                var e=a.effects.createWrapper(f).css({
                    overflow:"hidden"
                });
                var j=((i=="show")!=o);
                var g=j?["width","height"]:["height","width"];
                var d=j?[e.width(),e.height()]:[e.height(),e.width()];
                var k=/([0-9]+)%/.exec(p);
                if(k){
                    p=parseInt(k[1],10)/100*d[i=="hide"?0:1]
                }
                if(i=="show"){
                    e.css(o?{
                        height:0,
                        width:p
                    }:{
                        height:p,
                        width:0
                    })
                }
                var n={},m={};
            
                n[g[0]]=i=="show"?d[0]:p;
                m[g[1]]=i=="show"?d[1]:0;
                e.animate(n,h,c.options.easing).animate(m,h,c.options.easing,function(){
                    if(i=="hide"){
                        f.hide()
                    }
                    a.effects.restore(f,l);
                    a.effects.removeWrapper(f);
                    if(c.callback){
                        c.callback.apply(f[0],arguments)
                    }
                    f.dequeue()
                })
            })
        }
    })(jQuery);
    /*
 * jQuery UI Effects Highlight 1.8.23
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *	jquery.effects.core.js
 */
    (function(a,b){
        a.effects.highlight=function(c){
            return this.queue(function(){
                var e=a(this),d=["backgroundImage","backgroundColor","opacity"],g=a.effects.setMode(e,c.options.mode||"show"),f={
                    backgroundColor:e.css("backgroundColor")
                };
                
                if(g=="hide"){
                    f.opacity=0
                }
                a.effects.save(e,d);
                e.show().css({
                    backgroundImage:"none",
                    backgroundColor:c.options.color||"#ffff99"
                }).animate(f,{
                    queue:false,
                    duration:c.duration,
                    easing:c.options.easing,
                    complete:function(){
                        (g=="hide"&&e.hide());
                        a.effects.restore(e,d);
                        (g=="show"&&!a.support.opacity&&this.style.removeAttribute("filter"));
                        (c.callback&&c.callback.apply(this,arguments));
                        e.dequeue()
                    }
                })
            })
        }
    })(jQuery);
    /*
 * jQuery UI Effects Pulsate 1.8.23
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Pulsate
 *
 * Depends:
 *	jquery.effects.core.js
 */
    (function(a,b){
        a.effects.pulsate=function(c){
            return this.queue(function(){
                var g=a(this),k=a.effects.setMode(g,c.options.mode||"show"),j=((c.options.times||5)*2)-1,h=c.duration?c.duration/2:a.fx.speeds._default/2,d=g.is(":visible"),e=0;
                if(!d){
                    g.css("opacity",0).show();
                    e=1
                }
                if((k=="hide"&&d)||(k=="show"&&!d)){
                    j--
                }
                for(var f=0;f<j;f++){
                    g.animate({
                        opacity:e
                    },h,c.options.easing);
                    e=(e+1)%2
                }
                g.animate({
                    opacity:e
                },h,c.options.easing,function(){
                    if(e==0){
                        g.hide()
                    }(c.callback&&c.callback.apply(this,arguments))
                });
                g.queue("fx",function(){
                    g.dequeue()
                }).dequeue()
            })
        }
    })(jQuery);
    /*
 * jQuery UI Effects Scale 1.8.23
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Scale
 *
 * Depends:
 *	jquery.effects.core.js
 */
    (function(a,b){
        a.effects.puff=function(c){
            return this.queue(function(){
                var g=a(this),h=a.effects.setMode(g,c.options.mode||"hide"),f=parseInt(c.options.percent,10)||150,e=f/100,d={
                    height:g.height(),
                    width:g.width()
                };
                
                a.extend(c.options,{
                    fade:true,
                    mode:h,
                    percent:h=="hide"?f:100,
                    from:h=="hide"?d:{
                        height:d.height*e,
                        width:d.width*e
                    }
                });
                g.effect("scale",c.options,c.duration,c.callback);
                g.dequeue()
            })
        };
    
        a.effects.scale=function(c){
            return this.queue(function(){
                var h=a(this);
                var e=a.extend(true,{},c.options);
                var k=a.effects.setMode(h,c.options.mode||"effect");
                var i=parseInt(c.options.percent,10)||(parseInt(c.options.percent,10)==0?0:(k=="hide"?0:100));
                var j=c.options.direction||"both";
                var d=c.options.origin;
                if(k!="effect"){
                    e.origin=d||["middle","center"];
                    e.restore=true
                }
                var g={
                    height:h.height(),
                    width:h.width()
                };
            
                h.from=c.options.from||(k=="show"?{
                    height:0,
                    width:0
                }:g);
                var f={
                    y:j!="horizontal"?(i/100):1,
                    x:j!="vertical"?(i/100):1
                };
            
                h.to={
                    height:g.height*f.y,
                    width:g.width*f.x
                };
            
                if(c.options.fade){
                    if(k=="show"){
                        h.from.opacity=0;
                        h.to.opacity=1
                    }
                    if(k=="hide"){
                        h.from.opacity=1;
                        h.to.opacity=0
                    }
                }
                e.from=h.from;
                e.to=h.to;
                e.mode=k;
                h.effect("size",e,c.duration,c.callback);
                h.dequeue()
            })
        };

        a.effects.size=function(c){
            return this.queue(function(){
                var d=a(this),o=["position","top","bottom","left","right","width","height","overflow","opacity"];
                var n=["position","top","bottom","left","right","overflow","opacity"];
                var k=["width","height","overflow"];
                var q=["fontSize"];
                var l=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"];
                var g=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"];
                var h=a.effects.setMode(d,c.options.mode||"effect");
                var j=c.options.restore||false;
                var f=c.options.scale||"both";
                var p=c.options.origin;
                var e={
                    height:d.height(),
                    width:d.width()
                };
            
                d.from=c.options.from||e;
                d.to=c.options.to||e;
                if(p){
                    var i=a.effects.getBaseline(p,e);
                    d.from.top=(e.height-d.from.height)*i.y;
                    d.from.left=(e.width-d.from.width)*i.x;
                    d.to.top=(e.height-d.to.height)*i.y;
                    d.to.left=(e.width-d.to.width)*i.x
                }
                var m={
                    from:{
                        y:d.from.height/e.height,
                        x:d.from.width/e.width
                    },
                    to:{
                        y:d.to.height/e.height,
                        x:d.to.width/e.width
                    }
                };
        
                if(f=="box"||f=="both"){
                    if(m.from.y!=m.to.y){
                        o=o.concat(l);
                        d.from=a.effects.setTransition(d,l,m.from.y,d.from);
                        d.to=a.effects.setTransition(d,l,m.to.y,d.to)
                    }
                    if(m.from.x!=m.to.x){
                        o=o.concat(g);
                        d.from=a.effects.setTransition(d,g,m.from.x,d.from);
                        d.to=a.effects.setTransition(d,g,m.to.x,d.to)
                    }
                }
                if(f=="content"||f=="both"){
                    if(m.from.y!=m.to.y){
                        o=o.concat(q);
                        d.from=a.effects.setTransition(d,q,m.from.y,d.from);
                        d.to=a.effects.setTransition(d,q,m.to.y,d.to)
                    }
                }
                a.effects.save(d,j?o:n);
                d.show();
                a.effects.createWrapper(d);
                d.css("overflow","hidden").css(d.from);
                if(f=="content"||f=="both"){
                    l=l.concat(["marginTop","marginBottom"]).concat(q);
                    g=g.concat(["marginLeft","marginRight"]);
                    k=o.concat(l).concat(g);
                    d.find("*[width]").each(function(){
                        var s=a(this);
                        if(j){
                            a.effects.save(s,k)
                        }
                        var r={
                            height:s.height(),
                            width:s.width()
                        };
            
                        s.from={
                            height:r.height*m.from.y,
                            width:r.width*m.from.x
                        };
            
                        s.to={
                            height:r.height*m.to.y,
                            width:r.width*m.to.x
                        };
            
                        if(m.from.y!=m.to.y){
                            s.from=a.effects.setTransition(s,l,m.from.y,s.from);
                            s.to=a.effects.setTransition(s,l,m.to.y,s.to)
                        }
                        if(m.from.x!=m.to.x){
                            s.from=a.effects.setTransition(s,g,m.from.x,s.from);
                            s.to=a.effects.setTransition(s,g,m.to.x,s.to)
                        }
                        s.css(s.from);
                        s.animate(s.to,c.duration,c.options.easing,function(){
                            if(j){
                                a.effects.restore(s,k)
                            }
                        })
                    })
                }
                d.animate(d.to,{
                    queue:false,
                    duration:c.duration,
                    easing:c.options.easing,
                    complete:function(){
                        if(d.to.opacity===0){
                            d.css("opacity",d.from.opacity)
                        }
                        if(h=="hide"){
                            d.hide()
                        }
                        a.effects.restore(d,j?o:n);
                        a.effects.removeWrapper(d);
                        if(c.callback){
                            c.callback.apply(this,arguments)
                        }
                        d.dequeue()
                    }
                })
            })
        }
    })(jQuery);
    /*
 * jQuery UI Effects Shake 1.8.23
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Shake
 *
 * Depends:
 *	jquery.effects.core.js
 */
    (function(a,b){
        a.effects.shake=function(c){
            return this.queue(function(){
                var f=a(this),m=["position","top","bottom","left","right"];
                var l=a.effects.setMode(f,c.options.mode||"effect");
                var o=c.options.direction||"left";
                var d=c.options.distance||20;
                var e=c.options.times||3;
                var h=c.duration||c.options.duration||140;
                a.effects.save(f,m);
                f.show();
                a.effects.createWrapper(f);
                var g=(o=="up"||o=="down")?"top":"left";
                var q=(o=="up"||o=="left")?"pos":"neg";
                var j={},p={},n={};
            
                j[g]=(q=="pos"?"-=":"+=")+d;
                p[g]=(q=="pos"?"+=":"-=")+d*2;
                n[g]=(q=="pos"?"-=":"+=")+d*2;
                f.animate(j,h,c.options.easing);
                for(var k=1;k<e;k++){
                    f.animate(p,h,c.options.easing).animate(n,h,c.options.easing)
                }
                f.animate(p,h,c.options.easing).animate(j,h/2,c.options.easing,function(){
                    a.effects.restore(f,m);
                    a.effects.removeWrapper(f);
                    if(c.callback){
                        c.callback.apply(this,arguments)
                    }
                });
                f.queue("fx",function(){
                    f.dequeue()
                });
                f.dequeue()
            })
        }
    })(jQuery);
    /*
 * jQuery UI Effects Slide 1.8.23
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 *	jquery.effects.core.js
 */
    (function(a,b){
        a.effects.slide=function(c){
            return this.queue(function(){
                var f=a(this),e=["position","top","bottom","left","right"];
                var j=a.effects.setMode(f,c.options.mode||"show");
                var i=c.options.direction||"left";
                a.effects.save(f,e);
                f.show();
                a.effects.createWrapper(f).css({
                    overflow:"hidden"
                });
                var g=(i=="up"||i=="down")?"top":"left";
                var d=(i=="up"||i=="left")?"pos":"neg";
                var k=c.options.distance||(g=="top"?f.outerHeight(true):f.outerWidth(true));
                if(j=="show"){
                    f.css(g,d=="pos"?(isNaN(k)?"-"+k:-k):k)
                }
                var h={};
            
                h[g]=(j=="show"?(d=="pos"?"+=":"-="):(d=="pos"?"-=":"+="))+k;
                f.animate(h,{
                    queue:false,
                    duration:c.duration,
                    easing:c.options.easing,
                    complete:function(){
                        if(j=="hide"){
                            f.hide()
                        }
                        a.effects.restore(f,e);
                        a.effects.removeWrapper(f);
                        if(c.callback){
                            c.callback.apply(this,arguments)
                        }
                        f.dequeue()
                    }
                })
            })
        }
    })(jQuery);
    /*
 * jQuery UI Effects Transfer 1.8.23
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Transfer
 *
 * Depends:
 *	jquery.effects.core.js
 */
    (function(a,b){
        a.effects.transfer=function(c){
            return this.queue(function(){
                var g=a(this),i=a(c.options.to),f=i.offset(),h={
                    top:f.top,
                    left:f.left,
                    height:i.innerHeight(),
                    width:i.innerWidth()
                },e=g.offset(),d=a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(c.options.className).css({
                    top:e.top,
                    left:e.left,
                    height:g.innerHeight(),
                    width:g.innerWidth(),
                    position:"absolute"
                }).animate(h,c.duration,c.options.easing,function(){
                    d.remove();
                    (c.callback&&c.callback.apply(g[0],arguments));
                    g.dequeue()
                })
            })
        }
    })(jQuery);
    (function($){
        $.ui.timepicker=$.ui.timepicker||{};
    
        if($.ui.timepicker.version){
            return
        }
        $.extend($.ui,{
            timepicker:{
                version:"1.0.1"
            }
        });
        function Timepicker(){
            this.regional=[];
            this.regional[""]={
                currentText:"Now",
                closeText:"Done",
                ampm:false,
                amNames:["AM","A"],
                pmNames:["PM","P"],
                timeFormat:"hh:mm tt",
                timeSuffix:"",
                timeOnlyTitle:"Choose Time",
                timeText:"Time",
                hourText:"Hour",
                minuteText:"Minute",
                secondText:"Second",
                millisecText:"Millisecond",
                timezoneText:"Time Zone"
            };
    
            this._defaults={
                showButtonPanel:true,
                timeOnly:false,
                showHour:true,
                showMinute:true,
                showSecond:false,
                showMillisec:false,
                showTimezone:false,
                showTime:true,
                stepHour:1,
                stepMinute:1,
                stepSecond:1,
                stepMillisec:1,
                hour:0,
                minute:0,
                second:0,
                millisec:0,
                timezone:null,
                useLocalTimezone:false,
                defaultTimezone:"+0000",
                hourMin:0,
                minuteMin:0,
                secondMin:0,
                millisecMin:0,
                hourMax:23,
                minuteMax:59,
                secondMax:59,
                millisecMax:999,
                minDateTime:null,
                maxDateTime:null,
                onSelect:null,
                hourGrid:0,
                minuteGrid:0,
                secondGrid:0,
                millisecGrid:0,
                alwaysSetTime:true,
                separator:" ",
                altFieldTimeOnly:true,
                showTimepicker:true,
                timezoneIso8601:false,
                timezoneList:null,
                addSliderAccess:false,
                sliderAccessArgs:null
            };
    
            $.extend(this._defaults,this.regional[""])
        }
        $.extend(Timepicker.prototype,{
            $input:null,
            $altInput:null,
            $timeObj:null,
            inst:null,
            hour_slider:null,
            minute_slider:null,
            second_slider:null,
            millisec_slider:null,
            timezone_select:null,
            hour:0,
            minute:0,
            second:0,
            millisec:0,
            timezone:null,
            defaultTimezone:"+0000",
            hourMinOriginal:null,
            minuteMinOriginal:null,
            secondMinOriginal:null,
            millisecMinOriginal:null,
            hourMaxOriginal:null,
            minuteMaxOriginal:null,
            secondMaxOriginal:null,
            millisecMaxOriginal:null,
            ampm:"",
            formattedDate:"",
            formattedTime:"",
            formattedDateTime:"",
            timezoneList:null,
            setDefaults:function(settings){
                extendRemove(this._defaults,settings||{});
                return this
            },
            _newInst:function($input,o){
                var tp_inst=new Timepicker(),inlineSettings={};
        
                for(var attrName in this._defaults){
                    var attrValue=$input.attr("time:"+attrName);
                    if(attrValue){
                        try{
                            inlineSettings[attrName]=eval(attrValue)
                        }catch(err){
                            inlineSettings[attrName]=attrValue
                        }
                    }
                }
                tp_inst._defaults=$.extend({},this._defaults,inlineSettings,o,{
                    beforeShow:function(input,dp_inst){
                        if($.isFunction(o.beforeShow)){
                            return o.beforeShow(input,dp_inst,tp_inst)
                        }
                    },
                    onChangeMonthYear:function(year,month,dp_inst){
                        tp_inst._updateDateTime(dp_inst);
                        if($.isFunction(o.onChangeMonthYear)){
                            o.onChangeMonthYear.call($input[0],year,month,dp_inst,tp_inst)
                        }
                    },
                    onClose:function(dateText,dp_inst){
                        if(tp_inst.timeDefined===true&&$input.val()!==""){
                            tp_inst._updateDateTime(dp_inst)
                        }
                        if($.isFunction(o.onClose)){
                            o.onClose.call($input[0],dateText,dp_inst,tp_inst)
                        }
                    },
                    timepicker:tp_inst
                });
                tp_inst.amNames=$.map(tp_inst._defaults.amNames,function(val){
                    return val.toUpperCase()
                });
                tp_inst.pmNames=$.map(tp_inst._defaults.pmNames,function(val){
                    return val.toUpperCase()
                });
                if(tp_inst._defaults.timezoneList===null){
                    var timezoneList=[];
                    for(var i=-11;i<=12;i++){
                        timezoneList.push((i>=0?"+":"-")+("0"+Math.abs(i).toString()).slice(-2)+"00")
                    }
                    if(tp_inst._defaults.timezoneIso8601){
                        timezoneList=$.map(timezoneList,function(val){
                            return val=="+0000"?"Z":(val.substring(0,3)+":"+val.substring(3))
                        })
                    }
                    tp_inst._defaults.timezoneList=timezoneList
                }
                tp_inst.timezone=tp_inst._defaults.timezone;
                tp_inst.hour=tp_inst._defaults.hour;
                tp_inst.minute=tp_inst._defaults.minute;
                tp_inst.second=tp_inst._defaults.second;
                tp_inst.millisec=tp_inst._defaults.millisec;
                tp_inst.ampm="";
                tp_inst.$input=$input;
                if(o.altField){
                    tp_inst.$altInput=$(o.altField).css({
                        cursor:"pointer"
                    }).focus(function(){
                        $input.trigger("focus")
                    })
                }
                if(tp_inst._defaults.minDate===0||tp_inst._defaults.minDateTime===0){
                    tp_inst._defaults.minDate=new Date()
                }
                if(tp_inst._defaults.maxDate===0||tp_inst._defaults.maxDateTime===0){
                    tp_inst._defaults.maxDate=new Date()
                }
                if(tp_inst._defaults.minDate!==undefined&&tp_inst._defaults.minDate instanceof Date){
                    tp_inst._defaults.minDateTime=new Date(tp_inst._defaults.minDate.getTime())
                }
                if(tp_inst._defaults.minDateTime!==undefined&&tp_inst._defaults.minDateTime instanceof Date){
                    tp_inst._defaults.minDate=new Date(tp_inst._defaults.minDateTime.getTime())
                }
                if(tp_inst._defaults.maxDate!==undefined&&tp_inst._defaults.maxDate instanceof Date){
                    tp_inst._defaults.maxDateTime=new Date(tp_inst._defaults.maxDate.getTime())
                }
                if(tp_inst._defaults.maxDateTime!==undefined&&tp_inst._defaults.maxDateTime instanceof Date){
                    tp_inst._defaults.maxDate=new Date(tp_inst._defaults.maxDateTime.getTime())
                }
                return tp_inst
            },
            _addTimePicker:function(dp_inst){
                var currDT=(this.$altInput&&this._defaults.altFieldTimeOnly)?this.$input.val()+" "+this.$altInput.val():this.$input.val();
                this.timeDefined=this._parseTime(currDT);
                this._limitMinMaxDateTime(dp_inst,false);
                this._injectTimePicker()
            },
            _parseTime:function(timeString,withDate){
                if(!this.inst){
                    this.inst=$.datepicker._getInst(this.$input[0])
                }
                if(withDate||!this._defaults.timeOnly){
                    var dp_dateFormat=$.datepicker._get(this.inst,"dateFormat");
                    try{
                        var parseRes=parseDateTimeInternal(dp_dateFormat,this._defaults.timeFormat,timeString,$.datepicker._getFormatConfig(this.inst),this._defaults);
                        if(!parseRes.timeObj){
                            return false
                        }
                        $.extend(this,parseRes.timeObj)
                    }catch(err){
                        return false
                    }
                    return true
                }else{
                    var timeObj=$.datepicker.parseTime(this._defaults.timeFormat,timeString,this._defaults);
                    if(!timeObj){
                        return false
                    }
                    $.extend(this,timeObj);
                    return true
                }
            },
            _injectTimePicker:function(){
                var $dp=this.inst.dpDiv,o=this._defaults,tp_inst=this,hourMax=parseInt((o.hourMax-((o.hourMax-o.hourMin)%o.stepHour)),10),minMax=parseInt((o.minuteMax-((o.minuteMax-o.minuteMin)%o.stepMinute)),10),secMax=parseInt((o.secondMax-((o.secondMax-o.secondMin)%o.stepSecond)),10),millisecMax=parseInt((o.millisecMax-((o.millisecMax-o.millisecMin)%o.stepMillisec)),10),dp_id=this.inst.id.toString().replace(/([^A-Za-z0-9_])/g,"");
                if($dp.find("div#ui-timepicker-div-"+dp_id).length===0&&o.showTimepicker){
                    var noDisplay=' style="display:none;"',html='<div class="ui-timepicker-div" id="ui-timepicker-div-'+dp_id+'"><dl><dt class="ui_tpicker_time_label" id="ui_tpicker_time_label_'+dp_id+'"'+((o.showTime)?"":noDisplay)+">"+o.timeText+'</dt><dd class="ui_tpicker_time" id="ui_tpicker_time_'+dp_id+'"'+((o.showTime)?"":noDisplay)+'></dd><dt class="ui_tpicker_hour_label" id="ui_tpicker_hour_label_'+dp_id+'"'+((o.showHour)?"":noDisplay)+">"+o.hourText+"</dt>",hourGridSize=0,minuteGridSize=0,secondGridSize=0,millisecGridSize=0,size=null;
                    html+='<dd class="ui_tpicker_hour"><div id="ui_tpicker_hour_'+dp_id+'"'+((o.showHour)?"":noDisplay)+"></div>";
                    if(o.showHour&&o.hourGrid>0){
                        html+='<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>';
                        for(var h=o.hourMin;h<=hourMax;h+=parseInt(o.hourGrid,10)){
                            hourGridSize++;
                            var tmph=(o.ampm&&h>12)?h-12:h;
                            if(tmph<10){
                                tmph="0"+tmph
                            }
                            if(o.ampm){
                                if(h===0){
                                    tmph=12+"a"
                                }else{
                                    if(h<12){
                                        tmph+="a"
                                    }else{
                                        tmph+="p"
                                    }
                                }
                            }
                            html+="<td>"+tmph+"</td>"
                        }
                        html+="</tr></table></div>"
                    }
                    html+="</dd>";
                    html+='<dt class="ui_tpicker_minute_label" id="ui_tpicker_minute_label_'+dp_id+'"'+((o.showMinute)?"":noDisplay)+">"+o.minuteText+'</dt><dd class="ui_tpicker_minute"><div id="ui_tpicker_minute_'+dp_id+'"'+((o.showMinute)?"":noDisplay)+"></div>";
                    if(o.showMinute&&o.minuteGrid>0){
                        html+='<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>';
                        for(var m=o.minuteMin;m<=minMax;m+=parseInt(o.minuteGrid,10)){
                            minuteGridSize++;
                            html+="<td>"+((m<10)?"0":"")+m+"</td>"
                        }
                        html+="</tr></table></div>"
                    }
                    html+="</dd>";
                    html+='<dt class="ui_tpicker_second_label" id="ui_tpicker_second_label_'+dp_id+'"'+((o.showSecond)?"":noDisplay)+">"+o.secondText+'</dt><dd class="ui_tpicker_second"><div id="ui_tpicker_second_'+dp_id+'"'+((o.showSecond)?"":noDisplay)+"></div>";
                    if(o.showSecond&&o.secondGrid>0){
                        html+='<div style="padding-left: 1px"><table><tr>';
                        for(var s=o.secondMin;s<=secMax;s+=parseInt(o.secondGrid,10)){
                            secondGridSize++;
                            html+="<td>"+((s<10)?"0":"")+s+"</td>"
                        }
                        html+="</tr></table></div>"
                    }
                    html+="</dd>";
                    html+='<dt class="ui_tpicker_millisec_label" id="ui_tpicker_millisec_label_'+dp_id+'"'+((o.showMillisec)?"":noDisplay)+">"+o.millisecText+'</dt><dd class="ui_tpicker_millisec"><div id="ui_tpicker_millisec_'+dp_id+'"'+((o.showMillisec)?"":noDisplay)+"></div>";
                    if(o.showMillisec&&o.millisecGrid>0){
                        html+='<div style="padding-left: 1px"><table><tr>';
                        for(var l=o.millisecMin;l<=millisecMax;l+=parseInt(o.millisecGrid,10)){
                            millisecGridSize++;
                            html+="<td>"+((l<10)?"0":"")+l+"</td>"
                        }
                        html+="</tr></table></div>"
                    }
                    html+="</dd>";
                    html+='<dt class="ui_tpicker_timezone_label" id="ui_tpicker_timezone_label_'+dp_id+'"'+((o.showTimezone)?"":noDisplay)+">"+o.timezoneText+"</dt>";
                    html+='<dd class="ui_tpicker_timezone" id="ui_tpicker_timezone_'+dp_id+'"'+((o.showTimezone)?"":noDisplay)+"></dd>";
                    html+="</dl></div>";
                    var $tp=$(html);
                    if(o.timeOnly===true){
                        $tp.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all"><div class="ui-datepicker-title">'+o.timeOnlyTitle+"</div></div>");
                        $dp.find(".ui-datepicker-header, .ui-datepicker-calendar").hide()
                    }
                    this.hour_slider=$tp.find("#ui_tpicker_hour_"+dp_id).slider({
                        orientation:"horizontal",
                        value:this.hour,
                        min:o.hourMin,
                        max:hourMax,
                        step:o.stepHour,
                        slide:function(event,ui){
                            tp_inst.hour_slider.slider("option","value",ui.value);
                            tp_inst._onTimeChange()
                        }
                    });
                    this.minute_slider=$tp.find("#ui_tpicker_minute_"+dp_id).slider({
                        orientation:"horizontal",
                        value:this.minute,
                        min:o.minuteMin,
                        max:minMax,
                        step:o.stepMinute,
                        slide:function(event,ui){
                            tp_inst.minute_slider.slider("option","value",ui.value);
                            tp_inst._onTimeChange()
                        }
                    });
                    this.second_slider=$tp.find("#ui_tpicker_second_"+dp_id).slider({
                        orientation:"horizontal",
                        value:this.second,
                        min:o.secondMin,
                        max:secMax,
                        step:o.stepSecond,
                        slide:function(event,ui){
                            tp_inst.second_slider.slider("option","value",ui.value);
                            tp_inst._onTimeChange()
                        }
                    });
                    this.millisec_slider=$tp.find("#ui_tpicker_millisec_"+dp_id).slider({
                        orientation:"horizontal",
                        value:this.millisec,
                        min:o.millisecMin,
                        max:millisecMax,
                        step:o.stepMillisec,
                        slide:function(event,ui){
                            tp_inst.millisec_slider.slider("option","value",ui.value);
                            tp_inst._onTimeChange()
                        }
                    });
                    this.timezone_select=$tp.find("#ui_tpicker_timezone_"+dp_id).append("<select></select>").find("select");
                    $.fn.append.apply(this.timezone_select,$.map(o.timezoneList,function(val,idx){
                        return $("<option />").val(typeof val=="object"?val.value:val).text(typeof val=="object"?val.label:val)
                    }));
                    if(typeof(this.timezone)!="undefined"&&this.timezone!==null&&this.timezone!==""){
                        var local_date=new Date(this.inst.selectedYear,this.inst.selectedMonth,this.inst.selectedDay,12);
                        var local_timezone=timeZoneString(local_date);
                        if(local_timezone==this.timezone){
                            selectLocalTimeZone(tp_inst)
                        }else{
                            this.timezone_select.val(this.timezone)
                        }
                    }else{
                        if(typeof(this.hour)!="undefined"&&this.hour!==null&&this.hour!==""){
                            this.timezone_select.val(o.defaultTimezone)
                        }else{
                            selectLocalTimeZone(tp_inst)
                        }
                    }
                    this.timezone_select.change(function(){
                        tp_inst._defaults.useLocalTimezone=false;
                        tp_inst._onTimeChange()
                    });
                    if(o.showHour&&o.hourGrid>0){
                        size=100*hourGridSize*o.hourGrid/(hourMax-o.hourMin);
                        $tp.find(".ui_tpicker_hour table").css({
                            width:size+"%",
                            marginLeft:(size/(-2*hourGridSize))+"%",
                            borderCollapse:"collapse"
                        }).find("td").each(function(index){
                            $(this).click(function(){
                                var h=$(this).html();
                                if(o.ampm){
                                    var ap=h.substring(2).toLowerCase(),aph=parseInt(h.substring(0,2),10);
                                    if(ap=="a"){
                                        if(aph==12){
                                            h=0
                                        }else{
                                            h=aph
                                        }
                                    }else{
                                        if(aph==12){
                                            h=12
                                        }else{
                                            h=aph+12
                                        }
                                    }
                                }
                                tp_inst.hour_slider.slider("option","value",h);
                                tp_inst._onTimeChange();
                                tp_inst._onSelectHandler()
                            }).css({
                                cursor:"pointer",
                                width:(100/hourGridSize)+"%",
                                textAlign:"center",
                                overflow:"hidden"
                            })
                        })
                    }
                    if(o.showMinute&&o.minuteGrid>0){
                        size=100*minuteGridSize*o.minuteGrid/(minMax-o.minuteMin);
                        $tp.find(".ui_tpicker_minute table").css({
                            width:size+"%",
                            marginLeft:(size/(-2*minuteGridSize))+"%",
                            borderCollapse:"collapse"
                        }).find("td").each(function(index){
                            $(this).click(function(){
                                tp_inst.minute_slider.slider("option","value",$(this).html());
                                tp_inst._onTimeChange();
                                tp_inst._onSelectHandler()
                            }).css({
                                cursor:"pointer",
                                width:(100/minuteGridSize)+"%",
                                textAlign:"center",
                                overflow:"hidden"
                            })
                        })
                    }
                    if(o.showSecond&&o.secondGrid>0){
                        $tp.find(".ui_tpicker_second table").css({
                            width:size+"%",
                            marginLeft:(size/(-2*secondGridSize))+"%",
                            borderCollapse:"collapse"
                        }).find("td").each(function(index){
                            $(this).click(function(){
                                tp_inst.second_slider.slider("option","value",$(this).html());
                                tp_inst._onTimeChange();
                                tp_inst._onSelectHandler()
                            }).css({
                                cursor:"pointer",
                                width:(100/secondGridSize)+"%",
                                textAlign:"center",
                                overflow:"hidden"
                            })
                        })
                    }
                    if(o.showMillisec&&o.millisecGrid>0){
                        $tp.find(".ui_tpicker_millisec table").css({
                            width:size+"%",
                            marginLeft:(size/(-2*millisecGridSize))+"%",
                            borderCollapse:"collapse"
                        }).find("td").each(function(index){
                            $(this).click(function(){
                                tp_inst.millisec_slider.slider("option","value",$(this).html());
                                tp_inst._onTimeChange();
                                tp_inst._onSelectHandler()
                            }).css({
                                cursor:"pointer",
                                width:(100/millisecGridSize)+"%",
                                textAlign:"center",
                                overflow:"hidden"
                            })
                        })
                    }
                    var $buttonPanel=$dp.find(".ui-datepicker-buttonpane");
                    if($buttonPanel.length){
                        $buttonPanel.before($tp)
                    }else{
                        $dp.append($tp)
                    }
                    this.$timeObj=$tp.find("#ui_tpicker_time_"+dp_id);
                    if(this.inst!==null){
                        var timeDefined=this.timeDefined;
                        this._onTimeChange();
                        this.timeDefined=timeDefined
                    }
                    var onSelectDelegate=function(){
                        tp_inst._onSelectHandler()
                    };
    
                    this.hour_slider.bind("slidestop",onSelectDelegate);
                    this.minute_slider.bind("slidestop",onSelectDelegate);
                    this.second_slider.bind("slidestop",onSelectDelegate);
                    this.millisec_slider.bind("slidestop",onSelectDelegate);
                    if(this._defaults.addSliderAccess){
                        var sliderAccessArgs=this._defaults.sliderAccessArgs;
                        setTimeout(function(){
                            if($tp.find(".ui-slider-access").length===0){
                                $tp.find(".ui-slider:visible").sliderAccess(sliderAccessArgs);
                                var sliderAccessWidth=$tp.find(".ui-slider-access:eq(0)").outerWidth(true);
                                if(sliderAccessWidth){
                                    $tp.find("table:visible").each(function(){
                                        var $g=$(this),oldWidth=$g.outerWidth(),oldMarginLeft=$g.css("marginLeft").toString().replace("%",""),newWidth=oldWidth-sliderAccessWidth,newMarginLeft=((oldMarginLeft*newWidth)/oldWidth)+"%";
                                        $g.css({
                                            width:newWidth,
                                            marginLeft:newMarginLeft
                                        })
                                    })
                                }
                            }
                        },0)
                    }
                }
            },
            _limitMinMaxDateTime:function(dp_inst,adjustSliders){
                var o=this._defaults,dp_date=new Date(dp_inst.selectedYear,dp_inst.selectedMonth,dp_inst.selectedDay);
                if(!this._defaults.showTimepicker){
                    return
                }
                if($.datepicker._get(dp_inst,"minDateTime")!==null&&$.datepicker._get(dp_inst,"minDateTime")!==undefined&&dp_date){
                    var minDateTime=$.datepicker._get(dp_inst,"minDateTime"),minDateTimeDate=new Date(minDateTime.getFullYear(),minDateTime.getMonth(),minDateTime.getDate(),0,0,0,0);
                    if(this.hourMinOriginal===null||this.minuteMinOriginal===null||this.secondMinOriginal===null||this.millisecMinOriginal===null){
                        this.hourMinOriginal=o.hourMin;
                        this.minuteMinOriginal=o.minuteMin;
                        this.secondMinOriginal=o.secondMin;
                        this.millisecMinOriginal=o.millisecMin
                    }
                    if(dp_inst.settings.timeOnly||minDateTimeDate.getTime()==dp_date.getTime()){
                        this._defaults.hourMin=minDateTime.getHours();
                        if(this.hour<=this._defaults.hourMin){
                            this.hour=this._defaults.hourMin;
                            this._defaults.minuteMin=minDateTime.getMinutes();
                            if(this.minute<=this._defaults.minuteMin){
                                this.minute=this._defaults.minuteMin;
                                this._defaults.secondMin=minDateTime.getSeconds()
                            }else{
                                if(this.second<=this._defaults.secondMin){
                                    this.second=this._defaults.secondMin;
                                    this._defaults.millisecMin=minDateTime.getMilliseconds()
                                }else{
                                    if(this.millisec<this._defaults.millisecMin){
                                        this.millisec=this._defaults.millisecMin
                                    }
                                    this._defaults.millisecMin=this.millisecMinOriginal
                                }
                            }
                        }else{
                            this._defaults.minuteMin=this.minuteMinOriginal;
                            this._defaults.secondMin=this.secondMinOriginal;
                            this._defaults.millisecMin=this.millisecMinOriginal
                        }
                    }else{
                        this._defaults.hourMin=this.hourMinOriginal;
                        this._defaults.minuteMin=this.minuteMinOriginal;
                        this._defaults.secondMin=this.secondMinOriginal;
                        this._defaults.millisecMin=this.millisecMinOriginal
                    }
                }
                if($.datepicker._get(dp_inst,"maxDateTime")!==null&&$.datepicker._get(dp_inst,"maxDateTime")!==undefined&&dp_date){
                    var maxDateTime=$.datepicker._get(dp_inst,"maxDateTime"),maxDateTimeDate=new Date(maxDateTime.getFullYear(),maxDateTime.getMonth(),maxDateTime.getDate(),0,0,0,0);
                    if(this.hourMaxOriginal===null||this.minuteMaxOriginal===null||this.secondMaxOriginal===null){
                        this.hourMaxOriginal=o.hourMax;
                        this.minuteMaxOriginal=o.minuteMax;
                        this.secondMaxOriginal=o.secondMax;
                        this.millisecMaxOriginal=o.millisecMax
                    }
                    if(dp_inst.settings.timeOnly||maxDateTimeDate.getTime()==dp_date.getTime()){
                        this._defaults.hourMax=maxDateTime.getHours();
                        if(this.hour>=this._defaults.hourMax){
                            this.hour=this._defaults.hourMax;
                            this._defaults.minuteMax=maxDateTime.getMinutes();
                            if(this.minute>=this._defaults.minuteMax){
                                this.minute=this._defaults.minuteMax;
                                this._defaults.secondMax=maxDateTime.getSeconds()
                            }else{
                                if(this.second>=this._defaults.secondMax){
                                    this.second=this._defaults.secondMax;
                                    this._defaults.millisecMax=maxDateTime.getMilliseconds()
                                }else{
                                    if(this.millisec>this._defaults.millisecMax){
                                        this.millisec=this._defaults.millisecMax
                                    }
                                    this._defaults.millisecMax=this.millisecMaxOriginal
                                }
                            }
                        }else{
                            this._defaults.minuteMax=this.minuteMaxOriginal;
                            this._defaults.secondMax=this.secondMaxOriginal;
                            this._defaults.millisecMax=this.millisecMaxOriginal
                        }
                    }else{
                        this._defaults.hourMax=this.hourMaxOriginal;
                        this._defaults.minuteMax=this.minuteMaxOriginal;
                        this._defaults.secondMax=this.secondMaxOriginal;
                        this._defaults.millisecMax=this.millisecMaxOriginal
                    }
                }
                if(adjustSliders!==undefined&&adjustSliders===true){
                    var hourMax=parseInt((this._defaults.hourMax-((this._defaults.hourMax-this._defaults.hourMin)%this._defaults.stepHour)),10),minMax=parseInt((this._defaults.minuteMax-((this._defaults.minuteMax-this._defaults.minuteMin)%this._defaults.stepMinute)),10),secMax=parseInt((this._defaults.secondMax-((this._defaults.secondMax-this._defaults.secondMin)%this._defaults.stepSecond)),10),millisecMax=parseInt((this._defaults.millisecMax-((this._defaults.millisecMax-this._defaults.millisecMin)%this._defaults.stepMillisec)),10);
                    if(this.hour_slider){
                        this.hour_slider.slider("option",{
                            min:this._defaults.hourMin,
                            max:hourMax
                        }).slider("value",this.hour)
                    }
                    if(this.minute_slider){
                        this.minute_slider.slider("option",{
                            min:this._defaults.minuteMin,
                            max:minMax
                        }).slider("value",this.minute)
                    }
                    if(this.second_slider){
                        this.second_slider.slider("option",{
                            min:this._defaults.secondMin,
                            max:secMax
                        }).slider("value",this.second)
                    }
                    if(this.millisec_slider){
                        this.millisec_slider.slider("option",{
                            min:this._defaults.millisecMin,
                            max:millisecMax
                        }).slider("value",this.millisec)
                    }
                }
            },
            _onTimeChange:function(){
                var hour=(this.hour_slider)?this.hour_slider.slider("value"):false,minute=(this.minute_slider)?this.minute_slider.slider("value"):false,second=(this.second_slider)?this.second_slider.slider("value"):false,millisec=(this.millisec_slider)?this.millisec_slider.slider("value"):false,timezone=(this.timezone_select)?this.timezone_select.val():false,o=this._defaults;
                if(typeof(hour)=="object"){
                    hour=false
                }
                if(typeof(minute)=="object"){
                    minute=false
                }
                if(typeof(second)=="object"){
                    second=false
                }
                if(typeof(millisec)=="object"){
                    millisec=false
                }
                if(typeof(timezone)=="object"){
                    timezone=false
                }
                if(hour!==false){
                    hour=parseInt(hour,10)
                }
                if(minute!==false){
                    minute=parseInt(minute,10)
                }
                if(second!==false){
                    second=parseInt(second,10)
                }
                if(millisec!==false){
                    millisec=parseInt(millisec,10)
                }
                var ampm=o[hour<12?"amNames":"pmNames"][0];
                var hasChanged=(hour!=this.hour||minute!=this.minute||second!=this.second||millisec!=this.millisec||(this.ampm.length>0&&(hour<12)!=($.inArray(this.ampm.toUpperCase(),this.amNames)!==-1))||timezone!=this.timezone);
                if(hasChanged){
                    if(hour!==false){
                        this.hour=hour
                    }
                    if(minute!==false){
                        this.minute=minute
                    }
                    if(second!==false){
                        this.second=second
                    }
                    if(millisec!==false){
                        this.millisec=millisec
                    }
                    if(timezone!==false){
                        this.timezone=timezone
                    }
                    if(!this.inst){
                        this.inst=$.datepicker._getInst(this.$input[0])
                    }
                    this._limitMinMaxDateTime(this.inst,true)
                }
                if(o.ampm){
                    this.ampm=ampm
                }
                this.formattedTime=$.datepicker.formatTime(this._defaults.timeFormat,this,this._defaults);
                if(this.$timeObj){
                    this.$timeObj.text(this.formattedTime+o.timeSuffix)
                }
                this.timeDefined=true;
                if(hasChanged){
                    this._updateDateTime()
                }
            },
            _onSelectHandler:function(){
                var onSelect=this._defaults.onSelect;
                var inputEl=this.$input?this.$input[0]:null;
                if(onSelect&&inputEl){
                    onSelect.apply(inputEl,[this.formattedDateTime,this])
                }
            },
            _formatTime:function(time,format){
                time=time||{
                    hour:this.hour,
                    minute:this.minute,
                    second:this.second,
                    millisec:this.millisec,
                    ampm:this.ampm,
                    timezone:this.timezone
                };
        
                var tmptime=(format||this._defaults.timeFormat).toString();
                tmptime=$.datepicker.formatTime(tmptime,time,this._defaults);
                if(arguments.length){
                    return tmptime
                }else{
                    this.formattedTime=tmptime
                }
            },
            _updateDateTime:function(dp_inst){
                dp_inst=this.inst||dp_inst;
                var dt=$.datepicker._daylightSavingAdjust(new Date(dp_inst.selectedYear,dp_inst.selectedMonth,dp_inst.selectedDay)),dateFmt=$.datepicker._get(dp_inst,"dateFormat"),formatCfg=$.datepicker._getFormatConfig(dp_inst),timeAvailable=dt!==null&&this.timeDefined;
                this.formattedDate=$.datepicker.formatDate(dateFmt,(dt===null?new Date():dt),formatCfg);
                var formattedDateTime=this.formattedDate;
                if(this._defaults.timeOnly===true){
                    formattedDateTime=this.formattedTime
                }else{
                    if(this._defaults.timeOnly!==true&&(this._defaults.alwaysSetTime||timeAvailable)){
                        formattedDateTime+=this._defaults.separator+this.formattedTime+this._defaults.timeSuffix
                    }
                }
                this.formattedDateTime=formattedDateTime;
                if(!this._defaults.showTimepicker){
                    this.$input.val(this.formattedDate)
                }else{
                    if(this.$altInput&&this._defaults.altFieldTimeOnly===true){
                        this.$altInput.val(this.formattedTime);
                        this.$input.val(this.formattedDate)
                    }else{
                        if(this.$altInput){
                            this.$altInput.val(formattedDateTime);
                            this.$input.val(formattedDateTime)
                        }else{
                            this.$input.val(formattedDateTime)
                        }
                    }
                }
                this.$input.trigger("change")
            }
        });
        $.fn.extend({
            timepicker:function(o){
                o=o||{};
        
                var tmp_args=arguments;
                if(typeof o=="object"){
                    tmp_args[0]=$.extend(o,{
                        timeOnly:true
                    })
                }
                return $(this).each(function(){
                    $.fn.datetimepicker.apply($(this),tmp_args)
                })
            },
            datetimepicker:function(o){
                o=o||{};
        
                var tmp_args=arguments;
                if(typeof(o)=="string"){
                    if(o=="getDate"){
                        return $.fn.datepicker.apply($(this[0]),tmp_args)
                    }else{
                        return this.each(function(){
                            var $t=$(this);
                            $t.datepicker.apply($t,tmp_args)
                        })
                    }
                }else{
                    return this.each(function(){
                        var $t=$(this);
                        $t.datepicker($.timepicker._newInst($t,o)._defaults)
                    })
                }
            }
        });
        $.datepicker.parseDateTime=function(dateFormat,timeFormat,dateTimeString,dateSettings,timeSettings){
            var parseRes=parseDateTimeInternal(dateFormat,timeFormat,dateTimeString,dateSettings,timeSettings);
            if(parseRes.timeObj){
                var t=parseRes.timeObj;
                parseRes.date.setHours(t.hour,t.minute,t.second,t.millisec)
            }
            return parseRes.date
        };
    
        $.datepicker.parseTime=function(timeFormat,timeString,options){
            var getPatternAmpm=function(amNames,pmNames){
                var markers=[];
                if(amNames){
                    $.merge(markers,amNames)
                }
                if(pmNames){
                    $.merge(markers,pmNames)
                }
                markers=$.map(markers,function(val){
                    return val.replace(/[.*+?|()\[\]{}\\]/g,"\\$&")
                });
                return"("+markers.join("|")+")?"
            };
        
            var getFormatPositions=function(timeFormat){
                var finds=timeFormat.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|t{1,2}|z)/g),orders={
                    h:-1,
                    m:-1,
                    s:-1,
                    l:-1,
                    t:-1,
                    z:-1
                };
        
                if(finds){
                    for(var i=0;i<finds.length;i++){
                        if(orders[finds[i].toString().charAt(0)]==-1){
                            orders[finds[i].toString().charAt(0)]=i+1
                        }
                    }
                }
                return orders
            };

            var o=extendRemove(extendRemove({},$.timepicker._defaults),options||{});
            var regstr="^"+timeFormat.toString().replace(/h{1,2}/ig,"(\\d?\\d)").replace(/m{1,2}/ig,"(\\d?\\d)").replace(/s{1,2}/ig,"(\\d?\\d)").replace(/l{1}/ig,"(\\d?\\d?\\d)").replace(/t{1,2}/ig,getPatternAmpm(o.amNames,o.pmNames)).replace(/z{1}/ig,"(z|[-+]\\d\\d:?\\d\\d)?").replace(/\s/g,"\\s?")+o.timeSuffix+"$",order=getFormatPositions(timeFormat),ampm="",treg;
            treg=timeString.match(new RegExp(regstr,"i"));
            var resTime={
                hour:0,
                minute:0,
                second:0,
                millisec:0
            };

            if(treg){
                if(order.t!==-1){
                    if(treg[order.t]===undefined||treg[order.t].length===0){
                        ampm="";
                        resTime.ampm=""
                    }else{
                        ampm=$.inArray(treg[order.t],o.amNames)!==-1?"AM":"PM";
                        resTime.ampm=o[ampm=="AM"?"amNames":"pmNames"][0]
                    }
                }
                if(order.h!==-1){
                    if(ampm=="AM"&&treg[order.h]=="12"){
                        resTime.hour=0
                    }else{
                        if(ampm=="PM"&&treg[order.h]!="12"){
                            resTime.hour=parseInt(treg[order.h],10)+12
                        }else{
                            resTime.hour=Number(treg[order.h])
                        }
                    }
                }
                if(order.m!==-1){
                    resTime.minute=Number(treg[order.m])
                }
                if(order.s!==-1){
                    resTime.second=Number(treg[order.s])
                }
                if(order.l!==-1){
                    resTime.millisec=Number(treg[order.l])
                }
                if(order.z!==-1&&treg[order.z]!==undefined){
                    var tz=treg[order.z].toUpperCase();
                    switch(tz.length){
                        case 1:
                            tz=o.timezoneIso8601?"Z":"+0000";
                            break;
                        case 5:
                            if(o.timezoneIso8601){
                                tz=tz.substring(1)=="0000"?"Z":tz.substring(0,3)+":"+tz.substring(3)
                            }
                            break;
                        case 6:
                            if(!o.timezoneIso8601){
                                tz=tz=="Z"||tz.substring(1)=="00:00"?"+0000":tz.replace(/:/,"")
                            }else{
                                if(tz.substring(1)=="00:00"){
                                    tz="Z"
                                }
                            }
                            break
                    }
                    resTime.timezone=tz
                }
                return resTime
            }
            return false
        };

        $.datepicker.formatTime=function(format,time,options){
            options=options||{};
    
            options=$.extend($.timepicker._defaults,options);
            time=$.extend({
                hour:0,
                minute:0,
                second:0,
                millisec:0,
                timezone:"+0000"
            },time);
            var tmptime=format;
            var ampmName=options.amNames[0];
            var hour=parseInt(time.hour,10);
            if(options.ampm){
                if(hour>11){
                    ampmName=options.pmNames[0];
                    if(hour>12){
                        hour=hour%12
                    }
                }
                if(hour===0){
                    hour=12
                }
            }
            tmptime=tmptime.replace(/(?:hh?|mm?|ss?|[tT]{1,2}|[lz])/g,function(match){
                switch(match.toLowerCase()){
                    case"hh":
                        return("0"+hour).slice(-2);
                    case"h":
                        return hour;
                    case"mm":
                        return("0"+time.minute).slice(-2);
                    case"m":
                        return time.minute;
                    case"ss":
                        return("0"+time.second).slice(-2);
                    case"s":
                        return time.second;
                    case"l":
                        return("00"+time.millisec).slice(-3);
                    case"z":
                        return time.timezone;
                    case"t":case"tt":
                        if(options.ampm){
                            if(match.length==1){
                                ampmName=ampmName.charAt(0)
                            }
                            return match.charAt(0)=="T"?ampmName.toUpperCase():ampmName.toLowerCase()
                        }
                        return""
                }
            });
            tmptime=$.trim(tmptime);
            return tmptime
        };

        $.datepicker._base_selectDate=$.datepicker._selectDate;
        $.datepicker._selectDate=function(id,dateStr){
            var inst=this._getInst($(id)[0]),tp_inst=this._get(inst,"timepicker");
            if(tp_inst){
                tp_inst._limitMinMaxDateTime(inst,true);
                inst.inline=inst.stay_open=true;
                this._base_selectDate(id,dateStr);
                inst.inline=inst.stay_open=false;
                this._notifyChange(inst);
                this._updateDatepicker(inst)
            }else{
                this._base_selectDate(id,dateStr)
            }
        };

        $.datepicker._base_updateDatepicker=$.datepicker._updateDatepicker;
        $.datepicker._updateDatepicker=function(inst){
            var input=inst.input[0];
            if($.datepicker._curInst&&$.datepicker._curInst!=inst&&$.datepicker._datepickerShowing&&$.datepicker._lastInput!=input){
                return
            }
            if(typeof(inst.stay_open)!=="boolean"||inst.stay_open===false){
                this._base_updateDatepicker(inst);
                var tp_inst=this._get(inst,"timepicker");
                if(tp_inst){
                    tp_inst._addTimePicker(inst);
                    if(tp_inst._defaults.useLocalTimezone){
                        var date=new Date(inst.selectedYear,inst.selectedMonth,inst.selectedDay,12);
                        selectLocalTimeZone(tp_inst,date);
                        tp_inst._onTimeChange()
                    }
                }
            }
        };

        $.datepicker._base_doKeyPress=$.datepicker._doKeyPress;
        $.datepicker._doKeyPress=function(event){
            var inst=$.datepicker._getInst(event.target),tp_inst=$.datepicker._get(inst,"timepicker");
            if(tp_inst){
                if($.datepicker._get(inst,"constrainInput")){
                    var ampm=tp_inst._defaults.ampm,dateChars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat")),datetimeChars=tp_inst._defaults.timeFormat.toString().replace(/[hms]/g,"").replace(/TT/g,ampm?"APM":"").replace(/Tt/g,ampm?"AaPpMm":"").replace(/tT/g,ampm?"AaPpMm":"").replace(/T/g,ampm?"AP":"").replace(/tt/g,ampm?"apm":"").replace(/t/g,ampm?"ap":"")+" "+tp_inst._defaults.separator+tp_inst._defaults.timeSuffix+(tp_inst._defaults.showTimezone?tp_inst._defaults.timezoneList.join(""):"")+(tp_inst._defaults.amNames.join(""))+(tp_inst._defaults.pmNames.join(""))+dateChars,chr=String.fromCharCode(event.charCode===undefined?event.keyCode:event.charCode);
                    return event.ctrlKey||(chr<" "||!dateChars||datetimeChars.indexOf(chr)>-1)
                }
            }
            return $.datepicker._base_doKeyPress(event)
        };

        $.datepicker._base_doKeyUp=$.datepicker._doKeyUp;
        $.datepicker._doKeyUp=function(event){
            var inst=$.datepicker._getInst(event.target),tp_inst=$.datepicker._get(inst,"timepicker");
            if(tp_inst){
                if(tp_inst._defaults.timeOnly&&(inst.input.val()!=inst.lastVal)){
                    try{
                        $.datepicker._updateDatepicker(inst)
                    }catch(err){
                        $.datepicker.log(err)
                    }
                }
            }
            return $.datepicker._base_doKeyUp(event)
        };

        $.datepicker._base_gotoToday=$.datepicker._gotoToday;
        $.datepicker._gotoToday=function(id){
            var inst=this._getInst($(id)[0]),$dp=inst.dpDiv;
            this._base_gotoToday(id);
            var tp_inst=this._get(inst,"timepicker");
            selectLocalTimeZone(tp_inst);
            var now=new Date();
            this._setTime(inst,now);
            $(".ui-datepicker-today",$dp).click()
        };
    
        $.datepicker._disableTimepickerDatepicker=function(target){
            var inst=this._getInst(target);
            if(!inst){
                return
            }
            var tp_inst=this._get(inst,"timepicker");
            $(target).datepicker("getDate");
            if(tp_inst){
                tp_inst._defaults.showTimepicker=false;
                tp_inst._updateDateTime(inst)
            }
        };

        $.datepicker._enableTimepickerDatepicker=function(target){
            var inst=this._getInst(target);
            if(!inst){
                return
            }
            var tp_inst=this._get(inst,"timepicker");
            $(target).datepicker("getDate");
            if(tp_inst){
                tp_inst._defaults.showTimepicker=true;
                tp_inst._addTimePicker(inst);
                tp_inst._updateDateTime(inst)
            }
        };

        $.datepicker._setTime=function(inst,date){
            var tp_inst=this._get(inst,"timepicker");
            if(tp_inst){
                var defaults=tp_inst._defaults,hour=date?date.getHours():defaults.hour,minute=date?date.getMinutes():defaults.minute,second=date?date.getSeconds():defaults.second,millisec=date?date.getMilliseconds():defaults.millisec;
                var hourEq=hour===defaults.hourMin,minuteEq=minute===defaults.minuteMin,secondEq=second===defaults.secondMin;
                var reset=false;
                if(hour<defaults.hourMin||hour>defaults.hourMax){
                    reset=true
                }else{
                    if((minute<defaults.minuteMin||minute>defaults.minuteMax)&&hourEq){
                        reset=true
                    }else{
                        if((second<defaults.secondMin||second>defaults.secondMax)&&hourEq&&minuteEq){
                            reset=true
                        }else{
                            if((millisec<defaults.millisecMin||millisec>defaults.millisecMax)&&hourEq&&minuteEq&&secondEq){
                                reset=true
                            }
                        }
                    }
                }
                if(reset){
                    hour=defaults.hourMin;
                    minute=defaults.minuteMin;
                    second=defaults.secondMin;
                    millisec=defaults.millisecMin
                }
                tp_inst.hour=hour;
                tp_inst.minute=minute;
                tp_inst.second=second;
                tp_inst.millisec=millisec;
                if(tp_inst.hour_slider){
                    tp_inst.hour_slider.slider("value",hour)
                }
                if(tp_inst.minute_slider){
                    tp_inst.minute_slider.slider("value",minute)
                }
                if(tp_inst.second_slider){
                    tp_inst.second_slider.slider("value",second)
                }
                if(tp_inst.millisec_slider){
                    tp_inst.millisec_slider.slider("value",millisec)
                }
                tp_inst._onTimeChange();
                tp_inst._updateDateTime(inst)
            }
        };

        $.datepicker._setTimeDatepicker=function(target,date,withDate){
            var inst=this._getInst(target);

            if(!inst){
                return
            }
            var tp_inst=this._get(inst,"timepicker");
            if(tp_inst){
                this._setDateFromField(inst);
                var tp_date;
                if(date){
                    if(typeof date=="string"){
                        tp_inst._parseTime(date,withDate);
                        tp_date=new Date();
                        tp_date.setHours(tp_inst.hour,tp_inst.minute,tp_inst.second,tp_inst.millisec)
                    }else{
                        tp_date=new Date(date.getTime())
                    }
                    if(tp_date.toString()=="Invalid Date"){
                        tp_date=undefined
                    }
                    this._setTime(inst,tp_date)
                }
            }
        };

        $.datepicker._base_setDateDatepicker=$.datepicker._setDateDatepicker;
        $.datepicker._setDateDatepicker=function(target,date){
            var inst=this._getInst(target);
            if(!inst){
                return
            }
            var tp_date=(date instanceof Date)?new Date(date.getTime()):date;
            this._updateDatepicker(inst);
            this._base_setDateDatepicker.apply(this,arguments);
            this._setTimeDatepicker(target,tp_date,true)
        };
    
        $.datepicker._base_getDateDatepicker=$.datepicker._getDateDatepicker;
        $.datepicker._getDateDatepicker=function(target,noDefault){
            var inst=this._getInst(target);
            if(!inst){
                return
            }
            var tp_inst=this._get(inst,"timepicker");
            if(tp_inst){
                this._setDateFromField(inst,noDefault);
                var date=this._getDate(inst);
                if(date&&tp_inst._parseTime($(target).val(),tp_inst.timeOnly)){
                    date.setHours(tp_inst.hour,tp_inst.minute,tp_inst.second,tp_inst.millisec)
                }
                return date
            }
            return this._base_getDateDatepicker(target,noDefault)
        };
    
        $.datepicker._base_parseDate=$.datepicker.parseDate;
        $.datepicker.parseDate=function(format,value,settings){
            var splitRes=splitDateTime(format,value,settings);
            return $.datepicker._base_parseDate(format,splitRes[0],settings)
        };
    
        $.datepicker._base_formatDate=$.datepicker._formatDate;
        $.datepicker._formatDate=function(inst,day,month,year){
            var tp_inst=this._get(inst,"timepicker");
            if(tp_inst){
                tp_inst._updateDateTime(inst);
                return tp_inst.$input.val()
            }
            return this._base_formatDate(inst)
        };
    
        $.datepicker._base_optionDatepicker=$.datepicker._optionDatepicker;
        $.datepicker._optionDatepicker=function(target,name,value){
            var inst=this._getInst(target);
            if(!inst){
                return null
            }
            var tp_inst=this._get(inst,"timepicker");
            if(tp_inst){
                var min=null,max=null,onselect=null;
                if(typeof name=="string"){
                    if(name==="minDate"||name==="minDateTime"){
                        min=value
                    }else{
                        if(name==="maxDate"||name==="maxDateTime"){
                            max=value
                        }else{
                            if(name==="onSelect"){
                                onselect=value
                            }
                        }
                    }
                }else{
                    if(typeof name=="object"){
                        if(name.minDate){
                            min=name.minDate
                        }else{
                            if(name.minDateTime){
                                min=name.minDateTime
                            }else{
                                if(name.maxDate){
                                    max=name.maxDate
                                }else{
                                    if(name.maxDateTime){
                                        max=name.maxDateTime
                                    }
                                }
                            }
                        }
                    }
                }
                if(min){
                    if(min===0){
                        min=new Date()
                    }else{
                        min=new Date(min)
                    }
                    tp_inst._defaults.minDate=min;
                    tp_inst._defaults.minDateTime=min
                }else{
                    if(max){
                        if(max===0){
                            max=new Date()
                        }else{
                            max=new Date(max)
                        }
                        tp_inst._defaults.maxDate=max;
                        tp_inst._defaults.maxDateTime=max
                    }else{
                        if(onselect){
                            tp_inst._defaults.onSelect=onselect
                        }
                    }
                }
            }
            if(value===undefined){
                return this._base_optionDatepicker(target,name)
            }
            return this._base_optionDatepicker(target,name,value)
        };

        function extendRemove(target,props){
            $.extend(target,props);
            for(var name in props){
                if(props[name]===null||props[name]===undefined){
                    target[name]=props[name]
                }
            }
            return target
        }
        var splitDateTime=function(dateFormat,dateTimeString,dateSettings){
            try{
                var date=$.datepicker._base_parseDate(dateFormat,dateTimeString,dateSettings)
            }catch(err){
                if(err.indexOf(":")>=0){
                    var dateStringLength=dateTimeString.length-(err.length-err.indexOf(":")-2);
                    var timeString=dateTimeString.substring(dateStringLength);
                    return[dateTimeString.substring(0,dateStringLength),dateTimeString.substring(dateStringLength)]
                }else{
                    throw err
                }
            }
            return[dateTimeString,""]
        };

        var parseDateTimeInternal=function(dateFormat,timeFormat,dateTimeString,dateSettings,timeSettings){
            var date;
            var splitRes=splitDateTime(dateFormat,dateTimeString,dateSettings);
            date=$.datepicker._base_parseDate(dateFormat,splitRes[0],dateSettings);
            if(splitRes[1]!==""){
                var timeString=splitRes[1];
                var separator=timeSettings&&timeSettings.separator?timeSettings.separator:$.timepicker._defaults.separator;
                if(timeString.indexOf(separator)!==0){
                    throw"Missing time separator"
                }
                timeString=timeString.substring(separator.length);
                var parsedTime=$.datepicker.parseTime(timeFormat,timeString,timeSettings);
                if(parsedTime===null){
                    throw"Wrong time format"
                }
                return{
                    date:date,
                    timeObj:parsedTime
                }
            }else{
                return{
                    date:date
                }
            }
        };

        var selectLocalTimeZone=function(tp_inst,date){
            if(tp_inst&&tp_inst.timezone_select){
                tp_inst._defaults.useLocalTimezone=true;
                var now=typeof date!=="undefined"?date:new Date();
                var tzoffset=timeZoneString(now);
                if(tp_inst._defaults.timezoneIso8601){
                    tzoffset=tzoffset.substring(0,3)+":"+tzoffset.substring(3)
                }
                tp_inst.timezone_select.val(tzoffset)
            }
        };

        var timeZoneString=function(date){
            var off=date.getTimezoneOffset()*-10100/60;
            var timezone=(off>=0?"+":"-")+Math.abs(off).toString().substr(1);
            return timezone
        };
    
        $.timepicker=new Timepicker();
        $.timepicker.version="1.0.1"
    })(jQuery);
    jQuery.cookie=function(d,e,b){
        if(arguments.length>1&&(e===null||typeof e!=="object")){
            b=jQuery.extend({},b);
            if(e===null){
                b.expires=-1
            }
            if(typeof b.expires==="number"){
                var g=b.expires,c=b.expires=new Date();
                c.setDate(c.getDate()+g)
            }
            return(document.cookie=[encodeURIComponent(d),"=",b.raw?String(e):encodeURIComponent(String(e)),b.expires?"; expires="+b.expires.toUTCString():"",b.path?"; path="+b.path:"",b.domain?"; domain="+b.domain:"",b.secure?"; secure":""].join(""))
        }
        b=e||{};
    
        var a,f=b.raw?function(h){
            return h
        }:decodeURIComponent;
        return(a=new RegExp("(?:^|; )"+encodeURIComponent(d)+"=([^;]*)").exec(document.cookie))?f(a[1]):null
    };
    /* Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
    (function(d){
        var b=["DOMMouseScroll","mousewheel"];
        if(d.event.fixHooks){
            for(var a=b.length;a;){
                d.event.fixHooks[b[--a]]=d.event.mouseHooks
            }
        }
        d.event.special.mousewheel={
            setup:function(){
                if(this.addEventListener){
                    for(var e=b.length;e;){
                        this.addEventListener(b[--e],c,false)
                    }
                }else{
                    this.onmousewheel=c
                }
            },
            teardown:function(){
                if(this.removeEventListener){
                    for(var e=b.length;e;){
                        this.removeEventListener(b[--e],c,false)
                    }
                }else{
                    this.onmousewheel=null
                }
            }
        };

        d.fn.extend({
            mousewheel:function(e){
                return e?this.bind("mousewheel",e):this.trigger("mousewheel")
            },
            unmousewheel:function(e){
                return this.unbind("mousewheel",e)
            }
        });
        function c(j){
            var h=j||window.event,g=[].slice.call(arguments,1),k=0,i=true,f=0,e=0;
            j=d.event.fix(h);
            j.type="mousewheel";
            if(h.wheelDelta){
                k=h.wheelDelta/120
            }
            if(h.detail){
                k=-h.detail/3
            }
            e=k;
            if(h.axis!==undefined&&h.axis===h.HORIZONTAL_AXIS){
                e=0;
                f=-1*k
            }
            if(h.wheelDeltaY!==undefined){
                e=h.wheelDeltaY/120
            }
            if(h.wheelDeltaX!==undefined){
                f=-1*h.wheelDeltaX/120
            }
            g.unshift(j,k,f,e);
            return(d.event.dispatch||d.event.handle).apply(this,g)
        }
    })(jQuery);
    (function(c){
        var a=(c.browser.msie?"paste":"input")+".mask";
        var b=(window.orientation!=undefined);
        c.mask={
            definitions:{
                "9":"[0-9]",
                a:"[A-Za-z]",
                "*":"[A-Za-z0-9]"
            },
            dataName:"rawMaskFn"
        };
    
        c.fn.extend({
            caret:function(f,d){
                if(this.length==0){
                    return
                }
                if(typeof f=="number"){
                    d=(typeof d=="number")?d:f;
                    return this.each(function(){
                        if(this.setSelectionRange){
                            this.setSelectionRange(f,d)
                        }else{
                            if(this.createTextRange){
                                var g=this.createTextRange();
                                g.collapse(true);
                                g.moveEnd("character",d);
                                g.moveStart("character",f);
                                g.select()
                            }
                        }
                    })
                }else{
                    if(this[0].setSelectionRange){
                        f=this[0].selectionStart;
                        d=this[0].selectionEnd
                    }else{
                        if(document.selection&&document.selection.createRange){
                            var e=document.selection.createRange();
                            f=0-e.duplicate().moveStart("character",-100000);
                            d=f+e.text.length
                        }
                    }
                    return{
                        begin:f,
                        end:d
                    }
                }
            },
            unmask:function(){
                return this.trigger("unmask")
            },
            mask:function(f,j){
                if(!f&&this.length>0){
                    var g=c(this[0]);
                    return g.data(c.mask.dataName)()
                }
                j=c.extend({
                    placeholder:"_",
                    completed:null
                },j);
                var e=c.mask.definitions;
                var i=[];
                var k=f.length;
                var h=null;
                var d=f.length;
                c.each(f.split(""),function(l,m){
                    if(m=="?"){
                        d--;
                        k=l
                    }else{
                        if(e[m]){
                            i.push(new RegExp(e[m]));
                            if(h==null){
                                h=i.length-1
                            }
                        }else{
                            i.push(null)
                        }
                    }
                });
                return this.trigger("unmask").each(function(){
                    var u=c(this);
                    var p=c.map(f.split(""),function(y,x){
                        if(y!="?"){
                            return e[y]?j.placeholder:y
                        }
                    });
                    var w=u.val();
                    function t(x){
                        while(++x<=d&&!i[x]){}
                        return x
                    }
                    function q(x){
                        while(--x>=0&&!i[x]){}
                        return x
                    }
                    function o(A,x){
                        if(A<0){
                            return
                        }
                        for(var z=A,y=t(x);z<d;z++){
                            if(i[z]){
                                if(y<d&&i[z].test(p[y])){
                                    p[z]=p[y];
                                    p[y]=j.placeholder
                                }else{
                                    break
                                }
                                y=t(y)
                            }
                        }
                        s();
                        u.caret(Math.max(h,A))
                    }
                    function l(B){
                        for(var z=B,A=j.placeholder;z<d;z++){
                            if(i[z]){
                                var x=t(z);
                                var y=p[z];
                                p[z]=A;
                                if(x<d&&i[x].test(y)){
                                    A=y
                                }else{
                                    break
                                }
                            }
                        }
                    }
                    function r(A){
                        var y=A.which;
                        if(y==8||y==46||(b&&y==127)){
                            var B=u.caret(),z=B.begin,x=B.end;
                            if(x-z==0){
                                z=y!=46?q(z):(x=t(z-1));
                                x=y==46?t(x):x
                            }
                            m(z,x);
                            o(z,x-1);
                            return false
                        }else{
                            if(y==27){
                                u.val(w);
                                u.caret(0,n());
                                return false
                            }
                        }
                    }
                    function v(A){
                        var x=A.which,C=u.caret();
                        if(A.ctrlKey||A.altKey||A.metaKey||x<32){
                            return true
                        }else{
                            if(x){
                                if(C.end-C.begin!=0){
                                    m(C.begin,C.end);
                                    o(C.begin,C.end-1)
                                }
                                var z=t(C.begin-1);
                                if(z<d){
                                    var B=String.fromCharCode(x);
                                    if(i[z].test(B)){
                                        l(z);
                                        p[z]=B;
                                        s();
                                        var y=t(z);
                                        u.caret(y);
                                        if(j.completed&&y>=d){
                                            j.completed.call(u)
                                        }
                                    }
                                }
                                return false
                            }
                        }
                    }
                    function m(z,x){
                        for(var y=z;y<x&&y<d;y++){
                            if(i[y]){
                                p[y]=j.placeholder
                            }
                        }
                    }
                    function s(){
                        return u.val(p.join("")).val()
                    }
                    function n(y){
                        var C=u.val();
                        var B=-1;
                        for(var x=0,A=0;x<d;x++){
                            if(i[x]){
                                p[x]=j.placeholder;
                                while(A++<C.length){
                                    var z=C.charAt(A-1);
                                    if(i[x].test(z)){
                                        p[x]=z;
                                        B=x;
                                        break
                                    }
                                }
                                if(A>C.length){
                                    break
                                }
                            }else{
                                if(p[x]==C.charAt(A)&&x!=k){
                                    A++;
                                    B=x
                                }
                            }
                        }
                        if(!y&&B+1<k){
                            u.val("");
                            m(0,d)
                        }else{
                            if(y||B+1>=k){
                                s();
                                if(!y){
                                    u.val(u.val().substring(0,B+1))
                                }
                            }
                        }
                        return(k?x:h)
                    }
                    u.data(c.mask.dataName,function(){
                        return c.map(p,function(y,x){
                            return i[x]&&y!=j.placeholder?y:null
                        }).join("")
                    });
                    if(!u.attr("readonly")){
                        u.one("unmask",function(){
                            u.unbind(".mask").removeData(c.mask.dataName)
                        }).bind("focus.mask",function(){
                            w=u.val();
                            var y=n();
                            s();
                            var x=function(){
                                if(y==f.length){
                                    u.caret(0,y)
                                }else{
                                    u.caret(y)
                                }
                            };
                            (c.browser.msie?x:function(){
                                setTimeout(x,0)
                            })()
                        }).bind("blur.mask",function(){
                            n();
                            if(u.val()!=w){
                                u.change()
                            }
                        }).bind("keydown.mask",r).bind("keypress.mask",v).bind(a,function(){
                            setTimeout(function(){
                                u.caret(n(true))
                            },0)
                        })
                    }
                    n()
                })
            }
        })
    })(jQuery);
    (function(c){
        var l="undefined";
        var d,g,q,f,b;
        var n,i,m,p;
        function j(s,v){
            var u=typeof s[v];
            return u==="function"||(!!(u=="object"&&s[v]))||u=="unknown"
        }
        function k(s,t){
            return typeof(s[t])!=l
        }
        function e(s,t){
            return !!(typeof(s[t])=="object"&&s[t])
        }
        function h(s){
            if(window.console&&window.console.log){
                window.console.log("TextInputs module for Rangy not supported in your browser. Reason: "+s)
            }
        }
        function o(t,u,s){
            if(u<0){
                u+=t.value.length
            }
            if(typeof s==l){
                s=u
            }
            if(s<0){
                s+=t.value.length
            }
            return{
                start:u,
                end:s
            }
        }
        function a(t,u,s){
            return{
                start:u,
                end:s,
                length:s-u,
                text:t.value.slice(u,s)
            }
        }
        function r(){
            return e(document,"body")?document.body:document.getElementsByTagName("body")[0]
        }
        c(document).ready(function(){
            var t=document.createElement("textarea");
            r().appendChild(t);
            if(k(t,"selectionStart")&&k(t,"selectionEnd")){
                d=function(w){
                    var x=w.selectionStart,v=w.selectionEnd;
                    return a(w,x,v)
                };
            
                g=function(x,v,w){
                    var y=o(x,v,w);
                    x.selectionStart=y.start;
                    x.selectionEnd=y.end
                };
            
                p=function(w,v){
                    if(v){
                        w.selectionEnd=w.selectionStart
                    }else{
                        w.selectionStart=w.selectionEnd
                    }
                }
            }else{
                if(j(t,"createTextRange")&&e(document,"selection")&&j(document.selection,"createRange")){
                    d=function(z){
                        var C=0,x=0,B,w,v,A;
                        var y=document.selection.createRange();
                        if(y&&y.parentElement()==z){
                            v=z.value.length;
                            B=z.value.replace(/\r\n/g,"\n");
                            w=z.createTextRange();
                            w.moveToBookmark(y.getBookmark());
                            A=z.createTextRange();
                            A.collapse(false);
                            if(w.compareEndPoints("StartToEnd",A)>-1){
                                C=x=v
                            }else{
                                C=-w.moveStart("character",-v);
                                C+=B.slice(0,C).split("\n").length-1;
                                if(w.compareEndPoints("EndToEnd",A)>-1){
                                    x=v
                                }else{
                                    x=-w.moveEnd("character",-v);
                                    x+=B.slice(0,x).split("\n").length-1
                                }
                            }
                        }
                        return a(z,C,x)
                    };
    
                    var u=function(v,w){
                        return w-(v.value.slice(0,w).split("\r\n").length-1)
                    };
    
                    g=function(z,v,y){
                        var A=o(z,v,y);
                        var x=z.createTextRange();
                        var w=u(z,A.start);
                        x.collapse(true);
                        if(A.start==A.end){
                            x.move("character",w)
                        }else{
                            x.moveEnd("character",u(z,A.end));
                            x.moveStart("character",w)
                        }
                        x.select()
                    };
    
                    p=function(x,w){
                        var v=document.selection.createRange();
                        v.collapse(w);
                        v.select()
                    }
                }else{
                    r().removeChild(t);
                    h("No means of finding text input caret position");
                    return
                }
            }
            r().removeChild(t);
            f=function(w,z,v,x){
                var y;
                if(z!=v){
                    y=w.value;
                    w.value=y.slice(0,z)+y.slice(v)
                }
                if(x){
                    g(w,z,z)
                }
            };

            q=function(v){
                var w=d(v);
                f(v,w.start,w.end,true)
            };
    
            m=function(v){
                var w=d(v),x;
                if(w.start!=w.end){
                    x=v.value;
                    v.value=x.slice(0,w.start)+x.slice(w.end)
                }
                g(v,w.start,w.start);
                return w.text
            };
    
            b=function(w,z,v,x){
                var y=w.value,A;
                w.value=y.slice(0,v)+z+y.slice(v);
                if(x){
                    A=v+z.length;
                    g(w,A,A)
                }
            };

            n=function(v,y){
                var w=d(v),x=v.value;
                v.value=x.slice(0,w.start)+y+x.slice(w.end);
                var z=w.start+y.length;
                g(v,z,z)
            };
    
            i=function(v,y,B){
                var x=d(v),A=v.value;
                v.value=A.slice(0,x.start)+y+x.text+B+A.slice(x.end);
                var z=x.start+y.length;
                var w=z+x.length;
                g(v,z,w)
            };
    
            function s(v,w){
                return function(){
                    var z=this.jquery?this[0]:this;
                    var A=z.nodeName.toLowerCase();
                    if(z.nodeType==1&&(A=="textarea"||(A=="input"&&z.type=="text"))){
                        var y=[z].concat(Array.prototype.slice.call(arguments));
                        var x=v.apply(this,y);
                        if(!w){
                            return x
                        }
                    }
                    if(w){
                        return this
                    }
                }
            }
            c.fn.extend({
                getSelection:s(d,false),
                setSelection:s(g,true),
                collapseSelection:s(p,true),
                deleteSelectedText:s(q,true),
                deleteText:s(f,true),
                extractSelectedText:s(m,false),
                insertText:s(b,true),
                replaceSelectedText:s(n,true),
                surroundSelectedText:s(i,true)
            })
        })
    })(jQuery);
    $(function(){
        var a={
            primaryStyles:["fontFamily","fontSize","fontWeight","fontVariant","fontStyle","paddingLeft","paddingTop","paddingBottom","paddingRight","marginLeft","marginTop","marginBottom","marginRight","borderLeftColor","borderTopColor","borderBottomColor","borderRightColor","borderLeftStyle","borderTopStyle","borderBottomStyle","borderRightStyle","borderLeftWidth","borderTopWidth","borderBottomWidth","borderRightWidth","line-height","outline"],
            specificStyle:{
                "word-wrap":"break-word",
                "overflow-x":"hidden",
                "overflow-y":"auto"
            },
            simulator:$('<div id="textarea_simulator"/>').css({
                position:"absolute",
                top:0,
                left:0,
                visibility:"hidden"
            }).appendTo(document.body),
            toHtml:function(b){
                return b.replace(/\n/g,"<br>").split(" ").join('<span style="white-space:prev-wrap">&nbsp;</span>')
            },
            getCaretPosition:function(){
                var c=a,n=this,g=n[0],d=n.offset();
                if($.browser.msie){
                    g.focus();
                    var h=document.selection.createRange();
                    $("#hskeywords").val(g.scrollTop);
                    return{
                        left:h.boundingLeft-d.left,
                        top:parseInt(h.boundingTop)-d.top+g.scrollTop+document.documentElement.scrollTop+parseInt(n.getComputedStyle("fontSize"))
                    }
                }
                c.simulator.empty();
                $.each(c.primaryStyles,function(p,q){
                    n.cloneStyle(c.simulator,q)
                });
                c.simulator.css($.extend({
                    width:n.width(),
                    height:n.height()
                },c.specificStyle));
                var l=n.val(),e=n.getCursorPosition();
                var f=l.substring(0,e),m=l.substring(e);
                var j=$('<span class="before"/>').html(c.toHtml(f)),o=$('<span class="focus"/>'),b=$('<span class="after"/>').html(c.toHtml(m));
                c.simulator.append(j).append(o).append(b);
                var i=o.offset(),k=c.simulator.offset();
                return{
                    top:i.top-k.top-g.scrollTop+($.browser.mozilla?0:parseInt(n.getComputedStyle("fontSize"))),
                    left:o[0].offsetLeft-c.simulator[0].offsetLeft-g.scrollLeft
                }
            }
        };

        $.fn.extend({
            getComputedStyle:function(c){
                if(this.length==0){
                    return
                }
                var d=this[0];
                var b=this.css(c);
                b=b||($.browser.msie?d.currentStyle[c]:document.defaultView.getComputedStyle(d,null)[c]);
                return b
            },
            cloneStyle:function(c,b){
                var d=this.getComputedStyle(b);
                if(!!d){
                    $(c).css(b,d)
                }
            },
            cloneAllStyle:function(e,d){
                var c=this[0];
                for(var b in c.style){
                    var f=c.style[b];
                    typeof f=="string"||typeof f=="number"?this.cloneStyle(e,b):NaN
                }
            },
            getCursorPosition:function(){
                var e=this[0],b=0;
                if("selectionStart" in e){
                    b=e.selectionStart
                }else{
                    if("selection" in document){
                        var c=document.selection.createRange();
                        if(parseInt($.browser.version)>6){
                            e.focus();
                            var g=document.selection.createRange().text.length;
                            c.moveStart("character",-e.value.length);
                            b=c.text.length-g
                        }else{
                            var h=document.body.createTextRange();
                            h.moveToElementText(e);
                            for(;h.compareEndPoints("StartToStart",c)<0;b++){
                                h.moveStart("character",1)
                            }
                            for(var d=0;d<=b;d++){
                                if(e.value.charAt(d)=="\n"){
                                    b++
                                }
                            }
                            var f=e.value.split("\n").length-1;
                            b-=f;
                            return b
                        }
                    }
                }
                return b
            },
            getCaretPosition:a.getCaretPosition
        })
    });
    (function(){
        var a=false,b=/xyz/.test(function(){
            xyz
        })?/\b_super\b/:/.*/;
        this.Class=function(){};
    
        Class.extend=function(g){
            var f=this.prototype;
            a=true;
            var e=new this();
            a=false;
            for(var d in g){
                e[d]=typeof g[d]=="function"&&typeof f[d]=="function"&&b.test(g[d])?(function(h,i){
                    return function(){
                        var k=this._super;
                        this._super=f[h];
                        var j=i.apply(this,arguments);
                        this._super=k;
                        return j
                    }
                })(d,g[d]):g[d]
            }
            function c(){
                if(!a&&this.init){
                    this.init.apply(this,arguments)
                }
            }
            c.prototype=e;
            c.prototype.constructor=c;
            c.extend=arguments.callee;
            return c
        }
    })();