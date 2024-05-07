import { NextRequest } from "next/server";
import * as OneSignal from "@onesignal/node-onesignal";

export const POST = async (req: NextRequest) => {
  const ALL_USERS = "Total Subscriptions";
  const TEST_USERS = "Test Subscription";

  const configuration = OneSignal.createConfiguration({
    userAuthKey: "02e63d11-5675-44bc-9449-54cc27917d61",
    restApiKey: "ZGVlNWEyMDItOTBjYS00ZDI1LWFjOTMtNjVhNWM0YmZmZGU0",
  });

  const client = new OneSignal.DefaultApi(configuration);

  const onesignal = new OneSignal.Notification();
  onesignal.app_id;

  const notification: OneSignal.Notification = {
    app_id: "02e63d11-5675-44bc-9449-54cc27917d61",
    headings: { en: "Hello from Backend" },
    contents: {
      en: "this is a tets essage",
    },
    included_segments: [ALL_USERS],
    large_icon: "@mipmap/ic_launcher",
    android_group_message: "You have $[notif_count] new messages",
    target_channel: "push",
    android_group: "test",
    small_icon: "@mipmap/ic_launcher",
    include_aliases: {
      // Send to users with the following id
      external_id: ["6ca972c1-0365-4d6e-8935-00b2bd6dbc6d"],
    },
    big_picture:
      "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
    buttons: [
      {
        id: "id1",
        text: "button1",
        icon: "ic_menu_share",
      },
      {
        id: "id2",
        text: "button2",
        icon: "ic_menu_send",
      },
    ],
    data: {
      path: "/messages",
      userID: "appl",
    },
  };

  const apples = await client.createNotification(notification);
  console.log(apples);
  return new Response("SUCCESS", {
    status: 200,
  });
};

export const GET = async (_: NextRequest) => {
  return new Response("Hello, World!", { status: 200 });
};
