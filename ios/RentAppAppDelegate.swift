import ExpoModulesCore
import RNAppsFlyer
import React


public class RentAppAppDelegate : ExpoAppDelegateSubscriber {
    public func application(_ application: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
        RCTLinkingManager.application(app, open: url, options: options)
        RNAppsFlyer.deeplink().handleURLSchemeDeeplink(url)
        return true
    }
}
