// ========================================================================
// CoreQuery Tests
// ========================================================================

// This file tests additions to CoreQuery.  These should function even if you use 
// jQuery
suite("CoreQuery.within() && within()");

test("should return if passed RAW element that is child", function() {
  var cq = SC.$('<div class="root">\
    <div class="middle">\
      <div class="child1"></div>\
      <div class="child2"></div>\
    </div>\
  </div>') ;
  
  var child = cq.find('.child1');
  equals(cq.within(child.get(0)), true, "cq.within(DOMElement) = true") ;
  
  var notChild = SC.$('<div class="not-child"></div>') ;
  equals(cq.within(notChild.get(0)), false, "cq.hadChild(DOMElement) = false");
  child = notChild = cq = null ;
}) ;

test("should return if passed CQ with element that is child", function() {
  var cq = SC.$('<div class="root">\
    <div class="middle">\
      <div class="child1"></div>\
      <div class="child2"></div>\
    </div>\
  </div>') ;
  
  var child = cq.find('.child1');
  equals(cq.within(child), true, "cq.within(DOMElement) = true") ;
  
  var notChild = SC.$('<div class="not-child"></div>') ;
  equals(cq.within(notChild), false, "cq.hadChild(DOMElement) = false");
  child = notChild = cq = null ;
}) ;

test("should work if matched set has multiple element", function() {
  var cq = SC.$('<div class="wrapper">\
    <div class="root"></div>\
    <div class="root"></div>\
    <div class="root">\
      <div class="middle">\
        <div class="child1"></div>\
        <div class="child2"></div>\
      </div>\
    </div>\
  </div>').find('.root') ;
  equals(cq.length, 3, "should have three element in matched set");
  
  var child = cq.find('.child1');
  equals(cq.within(child), true, "cq.within(DOMElement) = true") ;
  
  var notChild = SC.$('<div class="not-child"></div>') ;
  equals(cq.within(notChild), false, "cq.hadChild(DOMElement) = false");
  child = notChild = cq = null ;
}) ;

test("should return true if matching self", function() {
  var cq = SC.$('<div></div>');
  equals(cq.within(cq), true, "should not match");
});

