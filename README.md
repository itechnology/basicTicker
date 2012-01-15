**What you get**

* A really simple ticker
* Customize & extend what you like yourself

**Try it**

* [DEMO](http://itechnology.github.com/basicTicker/)

**Signature**

    jQuery(selector).basicTicker(array items, int duration, function callBack) returns jQuery Object


**Sample Usages**

    jQuery("#basicTicker").basicTicker(["Some text 1", "Some text 2", "Some text 3"], 2000, function(ele) {
        alert("All done");
    });


**Subscribe to EvenHandler**

*Instead of using the callBack as shown above, you can also subscribe to the eventHandler*

    jQuery("#basicTicker").basicTicker(["Some text 1", "Some text 2", "Some text 3"], 2000);
    jQuery("#basicTicker").bind("ticker:done", function(e) {
        alert("All done");
    });
