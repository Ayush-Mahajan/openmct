define([
    './Type',
    './View',
    './objects/ObjectAPI',
    './composition/CompositionAPI'
], function (
    Type,
    View,
    ObjectAPI,
    CompositionAPI
) {
    return {
        Type: Type,
        View: View,
        Objects: ObjectAPI,
        Composition: CompositionAPI
    };
});
