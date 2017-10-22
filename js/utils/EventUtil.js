/*
    封装跨游览器的DOM2级事件处理
*/
var EventUtil = {
    addHander: function(ele, type, handler) {
        if (ele.addEventListener) {
            ele.addEventListener(type, handler, false);
        } else if (ele.attachEvent) {
            ele.attachEvent("on" + type, handler);
        } else {
            ele["on" + type] = handler;
        }
    },

    removeHander: function(ele, type, handler) {
        if (ele.removeEventListener) {
            ele.removeEventListener(type, handler, false);
        } else if (ele.detachEvent) {
            ele.detachEvent("on" + type, handler);
        } else {
            ele["on" + type] = null;
        }
    },
    preventDefaul: function(event) {
        if (event.preventDefaul) {
            event.preventDefaul();
        } else {
            event.returnValue = false;
        }
    },
    stopPropagation: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    getEvent: function(event) {
        return event ? event : window.event;
    },

    getTarget: function(event) {
        return event.target || event.srcElement;
    }

};
