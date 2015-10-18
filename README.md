# Website

Personal Website

## OpenShift Cartridge

The OpenShift `nodejs` cartridge documentation can be found at:

https://github.com/openshift/origin-server/tree/master/cartridges/openshift-origin-cartridge-nodejs/README.md

## Adding a new page (Incomplete)
 1. Add a new plugin for that route family
   1. If it has a browser component, build route file structure under the shared directory
   1. If it does not, implement within server layer directories
 1. Add a new view for rendering
 1. Add new route for the plugin
 1. Add route paths to the shared view layer

## TODO
 [ ] Refactor LESS structure based on feedback
 [ ] Shared React view transpilation
 [ ] Move microdata into head if at all possible
 [ ] Rework layout schema to have a layout and page be different and configurable
 [ ] Add a dependency injector for various module services and views
 [ ] Separate out view rendering transpilation from server logic transpilation