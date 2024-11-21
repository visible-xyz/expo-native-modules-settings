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

    try {
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
        val descriptionText = getString(R.string.channel_description)
        val importance = NotificationManager.IMPORTANCE_HIGH
        val mChannel = NotificationChannel(CHANNEL_ID, channelId, importance)
        mChannel.description = descriptionText
        // Register the channel with the system. You can't change the importance
        // or other notification behaviors after this.
        val notificationManager = getSystemService(NOTIFICATION_SERVICE) as NotificationManager
        notificationManager.createNotificationChannel(mChannel)
      }

    } catch (e: NameNotFoundException) {
      e.printStackTrace()
    }
  }
}
