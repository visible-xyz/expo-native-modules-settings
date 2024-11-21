package xyz.visible.visiblerentapp

import android.app.NotificationChannel
import android.app.NotificationManager
import android.os.Build
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition


class NativeModulesSettings : Module() {
  override fun definition() = ModuleDefinition {
    Name("NativeModulesSettings")

        Function("getTheme") {
      return@Function "system"
    }

    Function("setChannelId") { channelId: String ->
        val context = appContext.reactContext ?: return@Function "Context not available"

        return@Function try {
          if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val notificationManager =
                    context.getSystemService(NotificationManager::class.java)

            if (notificationManager == null) {
              return@Function "NotificationManager not available"
            }

            // Check if the channel already exists
            val existingChannel = notificationManager.getNotificationChannel(channelId)

            if (existingChannel == null) {
              // Create a new notification channel with default settings
              val channelName = "Default Channel"
              val channelDescription = "Default notification channel"
              val importance = NotificationManager.IMPORTANCE_HIGH
              

              val channel = NotificationChannel(channelId, channelName, importance).apply {
                description = channelDescription
              }
              notificationManager.createNotificationChannel(channel)
              return@Function "Channel created successfully"
            } else {
              return@Function "Channel already exists"
            }
          } else {
            return@Function "Push notification channels are not supported on this Android version"
          }
        } catch (e: Exception) {
          "Error: ${e.message}"
        }
      }
    }
  }