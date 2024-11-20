package xyz.visible.visiblerentapp

import android.content.Context
import android.content.pm.PackageManager
import android.content.pm.PackageManager.NameNotFoundException
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition


class NativeModulesSettings : Module() {
  override fun definition() = ModuleDefinition {
    Name("NativeModulesSettings")

    Function("setChannelId") { packageName: String, channelId: String ->
      setNotificationChannelId(packageName, channelId)
    }
  }

  private fun setNotificationChannelId(packageName: String, channelId: String) {
    val context: Context = appContext.reactContext.applicationContext
    val packageManager: PackageManager = context.packageManager

    try {
      val appInfo = packageManager.getApplicationInfo(context.packageName, PackageManager.GET_META_DATA)
      val metaData = appInfo.metaData
      if (metaData != null) {
        metaData.putString("$packageName.CHANNEL_ID", channelId)
      }

    } catch (e: NameNotFoundException) {
      e.printStackTrace()
    }
  }
}
