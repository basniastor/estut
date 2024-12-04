function processSpec(spec, scope, input, facet) {
    return facet ? parseFacet(spec, scope, input) : someOtherFunction(spec, scope, input);
}
