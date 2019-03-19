//#import "AppDelegate.h"
//
//#import <React/RCTBundleURLProvider.h>
//#import <React/RCTRootView.h>
//#import <ReactNativeNavigation/ReactNativeNavigation.h>
//
//
//@implementation AppDelegate
//
//- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
//{
//  NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
//  [ReactNativeNavigation bootstrap:jsCodeLocation launchOptions:launchOptions];
//  
//  return YES;
//}
//
//@end

#import "AppDelegate.h"

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

#import <ReactNativeNavigation/ReactNativeNavigation.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
  
  [ReactNativeNavigation bootstrap:[self sourceURLForBridge: bridge] launchOptions:launchOptions];
  
  return YES;
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
