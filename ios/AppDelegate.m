#import "AppDelegate.h"
#import <React/RCTLinkingManager.h>
#import <AppsflyerLib/AppsflyerLib.h>

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  // Initialize Appsflyer
  [AppsFlyerLib shared].appsFlyerDevKey = @"cjRb7kBLTComLkBK8yU96V";
  [AppsFlyerLib shared].appleAppID = @"6467019616";
  [AppsFlyerLib shared].isDebug = YES; // Set to NO for production
  
  // Track app launch
  [[AppsFlyerLib shared] start];
  
  // Regular React Native initialization
  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:@"RentApp"
                                            initialProperties:nil];

  rootView.backgroundColor = [UIColor whiteColor];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

// Handle URL schemes (e.g., myapp://)
- (BOOL)application:(UIApplication *)application
            openURL:(NSURL *)url
            options:(NSDictionary<UIApplicationOpenURLOptionsKey, id> *)options
{
  // Let Appsflyer handle the URL
  [[AppsFlyerLib shared] handleOpenUrl:url options:options];
  
  // Let React Native handle the URL as well
  return [RCTLinkingManager application:application openURL:url options:options];
}

// Handle Universal Links (e.g., https://example.com)
- (BOOL)application:(UIApplication *)application
continueUserActivity:(NSUserActivity *)userActivity
 restorationHandler:(void (^)(NSArray * _Nullable))restorationHandler
{
  // Let Appsflyer handle the Universal Link
  [[AppsFlyerLib shared] continueUserActivity:userActivity restorationHandler:restorationHandler];
  
  // Let React Native handle the Universal Link as well
  return [RCTLinkingManager application:application
                   continueUserActivity:userActivity
                     restorationHandler:restorationHandler];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end

