export default ngModule => {
  ngModule.factory('formlyTemplateCache', formlyTemplateCache);

  function formlyTemplateCache(formlyWarn) {
    let cache = {};
    return {
      get: id => cache[id], add, remove, removeAll
    };

    function add(id, template, overrideOk) {
      if (cache[id] && !overrideOk) {
        formlyWarn(
          'attempting-to-override-template-in-cache',
          'Attempting to override template in cache',
          'id:', id,
          'new template:', template,
          'old template:', cache[id]
        );
      }
      cache[id] = template;
      return cache[id];
    }

    function remove(id) {
      cache[id] = null;
    }

    function removeAll() {
      cache = {};
    }
  }
};
