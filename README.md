Skrulle
=======
Adds class "up" or "down" based on which way the user is scrolling.

##jQuery Plugin
```
$(window).skrulle();
```

###Options
```
$(window).skrulle({
  selector: 'body', // The jQuery selector of the element that should get the classes.
  up: 'up',         // The class added when a user scrolls up.
  down: 'down'      // The class added when a user scrolls down.
});
```

##Vanilla
For modern browsers.

Just include the file.

When a user scrolls up 'up' is added as a class to the document element.

When a user scrolls down 'down' is added as a class to the document element.

NB! The vanilla version uses
- _.addEventListener_
- _.classList_
- _.documentElement_
- _.scrollY_
