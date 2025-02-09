/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `` | `/` | `/(account-pages)` | `/(auth-pages)` | `/(screens)` | `/(tabs)` | `/AccountSecurity` | `/AddNewAddress` | `/AddNewPaymentMethod` | `/AddressDetails` | `/AllProducts` | `/AppApearance` | `/AvailableVouchers` | `/CameraViewPage` | `/CancelSuccessfully` | `/Cart` | `/Checkout` | `/ChooseAddress` | `/ChooseDelivery` | `/DataAnalytics` | `/EmailVerifiedSuccessfully` | `/ForgotPassword` | `/HelpCenter` | `/HelpSupport` | `/Home` | `/Language` | `/LeaveReview` | `/ManageAddress` | `/MyOrder` | `/MyProfile` | `/NotificationSetting` | `/OnBoardingSlider` | `/OrderDetails` | `/PaymentMethods` | `/PlaceOrderSuccessfully` | `/PrivacyPolicy` | `/ProductDetails` | `/Profile` | `/PromosVouchers` | `/RatingReviews` | `/RefrigerantSystemScreen` | `/ResetSuccessfully` | `/ReviewPostedSuccessfully` | `/RoomDetails` | `/Search` | `/SignInPage` | `/SignUpPage` | `/TermsService` | `/TrackOrder` | `/VerifyEmail` | `/VerifyOTP` | `/WishList` | `/_sitemap` | `/exploded_designs/RefrigSystemdesign1` | `/redux/slices/authSlice` | `/redux/store` | `/services/authService` | `/services/roomService`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
