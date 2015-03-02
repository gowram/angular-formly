export default ngModule => {
  require('./formlyTemplateCache')(ngModule);
  require('./formlyUtil')(ngModule);
  require('./formlyWarn')(ngModule);
};
