# node-qlight #

Node module to control a Qlight Tower

## Using the module: ##

To use the node-qlight module, require it as with any other node module.

```
var QLight = require(node-qlight);

var qlight = new Qlight();

// To connect and claim the device call this function
qlight.init()
//Returns 0 is device successfully attached and initialized else returns -1

// To change the state of any light
qlight.control(color,state)
Sets the state for a color in light tower
Color - 'red','green','yellow','all'
state - 'on','off','blink'
//Returns 0 on success else returns the error

// To make all light's of the tower blink
qlight.blink()
//Blink the QLight Tower for 0.5 seconds
```

To closed the module and connection to the QLight Tower
```
qlight.close()
Close the interface to the QLight Tower
```
