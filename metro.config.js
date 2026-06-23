const { getDefaultConfig } = require("@expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);
config.resolver.sourceExts.push("cjs");
config.resolver.unstable_enablePackageExports = true;

// Apply NativeWind first so its resolver changes are the base
const nwConfig = withNativeWind(config, { input: "./global.css" });

// Layer SVG transformer on top — must come after withNativeWind
// so the assetExts/sourceExts changes aren't overwritten
nwConfig.transformer = {
  ...nwConfig.transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
};
nwConfig.resolver = {
  ...nwConfig.resolver,
  assetExts: nwConfig.resolver.assetExts.filter((ext) => ext !== "svg"),
  sourceExts: [...nwConfig.resolver.sourceExts, "svg"],
};

module.exports = nwConfig;
