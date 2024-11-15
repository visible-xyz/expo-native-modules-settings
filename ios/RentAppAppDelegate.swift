import ExpoModulesCore
import AppsFlyerLib
import React
import RCTLinkingManager


public class RentAppAppDelegate : ExpoAppDelegateSubscriber {
    public func application(_ application: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
        RCTLinkingManager.application(app, open: url, options: options)
        AppsFlyerLib.shared().handleOpen(url)
        return true
    }
}
