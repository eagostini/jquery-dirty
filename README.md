### Introduction

Struggling trying to determine if any element in a collection has changed its original value? Then your problems are gone! Once you load this plug-in along with **jQuery** you can simply do things like this:

```javascript
$('form').submit(function(event) {
    var that = $(this);

    if (!that.dirty()) {
        event.preventDefault();
    }
});
```

If it's either not enough or you found any bug in this plug-in, please, let me know creating an issue [here](https://github.com/eagostini/jquery-dirty/issues). I appreciate your help!

### Dependencies

+ [jQuery](https://github.com/jquery/jquery)
