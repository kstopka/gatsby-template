import wrapRootElement from "./src/AllContextsWrapper";

function onPreRouteUpdate({ location, prevLocation }) {}

function onRouteUpdate({ location, prevLocation }) {}

function onClientEntry() {}

export function onServiceWorkerUpdateReady() {
  window.location.reload(true);
}

export { wrapRootElement, onRouteUpdate, onPreRouteUpdate, onClientEntry };
