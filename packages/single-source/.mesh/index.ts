// @ts-nocheck
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Query = {
  /**
   * Collect and retrieve the list of product render info. This info contains raw prices and formatted prices, product name, stock status, store_id, etc.
   *
   * Equivalent to GET /V1/products-render-info
   */
  catalogDataProductRenderSearchResultsInterface?: Maybe<CatalogDataProductRenderSearchResultsInterface>;
  /**
   * Retrieve Featured Products matching the specified criteria.
   *
   * Equivalent to GET /V1/lof-mobile/randomFeaturedProducts
   */
  catalogDataProductSearchResultsInterface?: Maybe<CatalogDataProductSearchResultsInterface>;
  /**
   * Get payment information
   *
   * Equivalent to GET /V1/guest-carts/{cartId}/payment-information
   */
  checkoutDataPaymentDetailsInterface?: Maybe<CheckoutDataPaymentDetailsInterface>;
  /**
   * Get country and region information for the store.
   *
   * Equivalent to GET /V1/directory/countries/{countryId}
   */
  directoryDataCountryInformationInterface?: Maybe<DirectoryDataCountryInformationInterface>;
  /**
   * Get currency information for the store.
   *
   * Equivalent to GET /V1/directory/currency
   */
  directoryDataCurrencyInformationInterface?: Maybe<DirectoryDataCurrencyInformationInterface>;
  /**
   * Make Full Text Search and return found Documents
   *
   * Equivalent to GET /V1/search
   */
  frameworkSearchSearchResultInterface?: Maybe<FrameworkSearchSearchResultInterface>;
  /**
   * Return the gift message for a specified order.
   *
   * Equivalent to GET /V1/guest-carts/{cartId}/gift-message
   */
  giftMessageDataMessageInterface?: Maybe<GiftMessageDataMessageInterface>;
  /**
   * Return the gift message for a specified item in a specified shopping cart.
   *
   * Equivalent to GET /V1/guest-carts/{cartId}/gift-message/{itemId}
   */
  giftMessageGuestItemRepositoryV1GetGet?: Maybe<GiftMessageDataMessageInterface>;
  /**
   * Get Pickup Locations according to the results of filtration by Search Request.
   *
   * Equivalent to GET /V1/inventory/in-store-pickup/pickup-locations/
   */
  inventoryInStorePickupApiDataSearchResultInterface?: Maybe<InventoryInStorePickupApiDataSearchResultInterface>;
  /**
   * Retrieve Search Result Items matching the specified criteria.
   *
   * Equivalent to GET /V1/lof-autosearch/autosearch/{query_text}/{category_id}/{store_id}/{limit_terms}
   */
  lofAutosearchDataSearchResultInterface?: Maybe<LofAutosearchDataSearchResultInterface>;
  /**
   *
   *
   * Equivalent to GET /V1/lof/bannerslider/banner/loadById/{id}
   */
  lofBannerSliderDataBannerInterface?: Maybe<LofBannerSliderDataBannerInterface>;
  /**
   *
   *
   * Equivalent to GET /V1/lof/banner/getList
   */
  lofBannerSliderDataBannerSearchResultInterface?: Maybe<LofBannerSliderDataBannerSearchResultInterface>;
  /**
   *
   *
   * Equivalent to GET /V1/lof/bannerslider/resource_map/loadById/{id}
   */
  lofBannerSliderDataResourceMapInterface?: Maybe<LofBannerSliderDataResourceMapInterface>;
  /**
   *
   *
   * Equivalent to GET /V1/lof/bannerslider/slider/loadById/{id}
   */
  lofBannerSliderDataSliderInterface?: Maybe<LofBannerSliderDataSliderInterface>;
  /**
   *
   *
   * Equivalent to GET /V1/lof/bannerslider/getList
   */
  lofBannerSliderDataSliderSearchResultInterface?: Maybe<LofBannerSliderDataSliderSearchResultInterface>;
  /**
   * Retrieve chatwoot
   *
   * Equivalent to GET /V1/lof-chatwoot/chatwoot/{chatwootId}
   */
  lofChatWootDataChatwootInterface?: Maybe<LofChatWootDataChatwootInterface>;
  /**
   * Retrieve chatwoot matching the specified criteria.
   *
   * Equivalent to GET /V1/lof-chatwoot/chatwoot/search
   */
  lofChatWootDataChatwootSearchResultsInterface?: Maybe<LofChatWootDataChatwootSearchResultsInterface>;
  /**
   * GET Form form data with design fields by ID, identifier, customer_group_id, stores_id
   *
   * Equivalent to GET /V1/lof-formbuilder/getForm/{formId}
   */
  lofFormbuilderDataFormbuilderDesignInterface?: Maybe<LofFormbuilderDataFormbuilderDesignInterface>;
  /**
   * Retrieve Seller Group matching the specified criteria.
   *
   * Equivalent to GET /V1/seller/groups
   */
  lofMarketPlaceDataGroupSearchResultsInterface?: Maybe<LofMarketPlaceDataGroupSearchResultsInterface>;
  /**
   * Retrieve Seller Ratings matching the specified criteria.
   *
   * Equivalent to GET /V1/seller/ratings/{ratingId}
   */
  lofMarketPlaceDataRatingInterface?: Maybe<LofMarketPlaceDataRatingInterface>;
  /**
   * Retrieve Seller Review matching the specified criteria.
   *
   * Equivalent to GET /V1/seller/{sellerUrl}/ratings
   */
  lofMarketPlaceDataRatingSearchResultsInterface?: Maybe<LofMarketPlaceDataRatingSearchResultsInterface>;
  /**
   * Retrieve Seller Review matching the specified criteria.
   *
   * Equivalent to GET /V1/seller/{sellerUrl}/reviews
   */
  lofMarketPlaceDataReviewSearchResultsInterface?: Maybe<LofMarketPlaceDataReviewSearchResultsInterface>;
  /**
   * get seller by url key
   *
   * Equivalent to GET /V1/seller/{sellerUrl}
   */
  lofMarketPlaceDataSellerInterface?: Maybe<LofMarketPlaceDataSellerInterface>;
  /**
   * Retrieve seller matching the specified criteria.
   *
   * Equivalent to GET /V1/seller/products
   */
  lofMarketPlaceDataSellerProductSearchResultsInterface?: Maybe<LofMarketPlaceDataSellerProductSearchResultsInterface>;
  /**
   * GET seller vacation - the url key of seller. ex: sellerA
   *
   * Equivalent to GET /V1/seller/{sellerUrl}/vacation
   */
  lofMarketPlaceDataSellerVacationInterface?: Maybe<LofMarketPlaceDataSellerVacationInterface>;
  /**
   *
   *
   * Equivalent to GET /V1/seller/search
   */
  lofMarketPlaceDataSellersSearchResultsInterface?: Maybe<LofMarketPlaceDataSellersSearchResultsInterface>;
  /**
   * Retrieve Seller Review matching the specified criteria.
   *
   * Equivalent to GET /V1/seller/{sellerUrl}/summaryRatings
   */
  lofMarketPlaceDataSummaryRatingInterface?: Maybe<LofMarketPlaceDataSummaryRatingInterface>;
  /**
   * GET seller product by seller url key
   *
   * Equivalent to GET /V1/seller/products/{sellerUrl}
   */
  lofMarketPlaceSellerProductsRepositoryV1GetListSellersProductGet?: Maybe<CatalogDataProductSearchResultsInterface>;
  /**
   * get seller info by product sku
   *
   * Equivalent to GET /V1/seller/getSellerInfoBySku/{sku}
   */
  lofMarketPlaceSellersFrontendRepositoryV1GetSellerByProductSkuGet?: Maybe<LofMarketPlaceDataSellerInterface>;
  /**
   * Retrieve getNavSidebarContent
   *
   * Equivalent to GET /V1/lof-mobile/navSidebarContent
   */
  lofMobileDataMobileNavSidebarInterface?: Maybe<LofMobileDataMobileNavSidebarInterface>;
  /**
   *
   *
   * Equivalent to GET /V1/products/{sku}/reviews
   */
  lofProductReviewsDataReviewDataInterface?: Maybe<LofProductReviewsDataReviewDataInterface>;
  /**
   * Retrieve Tag matching the specified criteria.
   *
   * Equivalent to GET /V1/lof-producttags/listtags
   */
  lofProductTagsDataTagSearchResultsInterface?: Maybe<LofProductTagsDataTagSearchResultsInterface>;
  /**
   * Retrieve Comment matching the specified criteria.
   *
   * Equivalent to GET /V1/sellerblog/postcomments/{postId}
   */
  lofmpBlogCommentRepositoryV1GetPostCommentListGet?: Maybe<LofmpBlogDataCommentSearchResultsInterface>;
  /**
   * Retrieve post
   *
   * Equivalent to GET /V1/sellerblog/category/view/{categoryId}/{store_id}
   */
  lofmpBlogDataCategoryInterface?: Maybe<LofmpBlogDataCategoryInterface>;
  /**
   * Retrieve Category matching the specified criteria.
   *
   * Equivalent to GET /V1/sellerblog/category/list
   */
  lofmpBlogDataCategorySearchResultsInterface?: Maybe<LofmpBlogDataCategorySearchResultsInterface>;
  /**
   * Retrieve Comment matching the specified criteria.
   *
   * Equivalent to GET /V1/sellerblog/comment/list
   */
  lofmpBlogDataCommentSearchResultsInterface?: Maybe<LofmpBlogDataCommentSearchResultsInterface>;
  /**
   * Retrieve post
   *
   * Equivalent to GET /V1/sellerblog/post/view/{postUrl}/{store_id}
   */
  lofmpBlogDataPostInterface?: Maybe<LofmpBlogDataPostInterface>;
  /**
   * Retrieve Post matching the specified criteria.
   *
   * Equivalent to GET /V1/sellerblog/post/list
   */
  lofmpBlogDataPostSearchResultsInterface?: Maybe<LofmpBlogDataPostSearchResultsInterface>;
  /**
   * Retrieve tag
   *
   * Equivalent to GET /V1/sellerblog/tag/view/{tagAlias}
   */
  lofmpBlogDataTagInterface?: Maybe<LofmpBlogDataTagInterface>;
  /**
   * Retrieve Public Tag matching the specified criteria.
   *
   * Equivalent to GET /V1/sellerblog/tag/list
   */
  lofmpBlogDataTagSearchResultsInterface?: Maybe<LofmpBlogDataTagSearchResultsInterface>;
  /**
   * Retrieve category list publish posts
   *
   * Equivalent to GET /V1/sellerblog/{categoryId}/categoryPosts
   */
  lofmpBlogPostRepositoryV1CategoryPostsGet?: Maybe<LofmpBlogDataPostSearchResultsInterface>;
  /**
   * Retrieve seller list publish posts
   *
   * Equivalent to GET /V1/sellerblog/{sellerUrl}/sellerPosts
   */
  lofmpBlogPostRepositoryV1SellerPostsGet?: Maybe<LofmpBlogDataPostSearchResultsInterface>;
  /**
   * Retrieve tags list publish posts
   *
   * Equivalent to GET /V1/sellerblog/{tag}/tagPosts
   */
  lofmpBlogPostRepositoryV1TagPostsGet?: Maybe<LofmpBlogDataPostSearchResultsInterface>;
  /**
   * Retrieve Public Coupon matching the specified criteria.
   *
   * Equivalent to GET /V1/lof-couponcode/{sellerUrl}/coupons
   */
  lofmpCouponCodeDataCouponSearchResultsInterface?: Maybe<LofmpCouponCodeDataCouponSearchResultsInterface>;
  /**
   * Retrieve best seller Products matching the specified criteria.
   *
   * Equivalent to GET /V1/seller-productlist/{sellerUrl}/bestseller
   */
  lofmpProductlistProductRepositoryV1GetBestsellerProductsGet?: Maybe<CatalogDataProductSearchResultsInterface>;
  /**
   * Retrieve deals Products matching the specified criteria.
   *
   * Equivalent to GET /V1/seller-productlist/{sellerUrl}/deals
   */
  lofmpProductlistProductRepositoryV1GetDealsProductsGet?: Maybe<CatalogDataProductSearchResultsInterface>;
  /**
   * Retrieve featured Products matching the specified criteria.
   *
   * Equivalent to GET /V1/seller-productlist/{sellerUrl}/featured
   */
  lofmpProductlistProductRepositoryV1GetFeaturedProductsGet?: Maybe<CatalogDataProductSearchResultsInterface>;
  /**
   * Retrieve lastest Products matching the specified criteria.
   *
   * Equivalent to GET /V1/seller-productlist/{sellerUrl}/latest
   */
  lofmpProductlistProductRepositoryV1GetLatestProductsGet?: Maybe<CatalogDataProductSearchResultsInterface>;
  /**
   * Retrieve most viewed Products matching the specified criteria.
   *
   * Equivalent to GET /V1/seller-productlist/{sellerUrl}/mostviewed
   */
  lofmpProductlistProductRepositoryV1GetMostViewedProductsGet?: Maybe<CatalogDataProductSearchResultsInterface>;
  /**
   * Retrieve newarrival Products matching the specified criteria.
   *
   * Equivalent to GET /V1/seller-productlist/{sellerUrl}/newarrival
   */
  lofmpProductlistProductRepositoryV1GetNewarrivalProductsGet?: Maybe<CatalogDataProductSearchResultsInterface>;
  /**
   * Retrieve random Products matching the specified criteria.
   *
   * Equivalent to GET /V1/seller-productlist/{sellerUrl}/random
   */
  lofmpProductlistProductRepositoryV1GetRandomProductsGet?: Maybe<CatalogDataProductSearchResultsInterface>;
  /**
   * Retrieve special Products matching the specified criteria.
   *
   * Equivalent to GET /V1/seller-productlist/{sellerUrl}/specials
   */
  lofmpProductlistProductRepositoryV1GetSpecialProductsGet?: Maybe<CatalogDataProductSearchResultsInterface>;
  /**
   * Retrieve top rated Products matching the specified criteria.
   *
   * Equivalent to GET /V1/seller-productlist/{sellerUrl}/toprated
   */
  lofmpProductlistProductRepositoryV1GetTopratedProductsGet?: Maybe<CatalogDataProductSearchResultsInterface>;
  /**
   * Retrieve address
   *
   * Equivalent to GET /V1/lofmp-returns/address/{addressId}
   */
  lofmpRmaDataAddressInterface?: Maybe<LofmpRmaDataAddressInterface>;
  /**
   * Retrieve address matching the specified criteria.
   *
   * Equivalent to GET /V1/lofmp-returns/address
   */
  lofmpRmaDataAddressSearchResultsInterface?: Maybe<LofmpRmaDataAddressSearchResultsInterface>;
  /**
   * Retrieve condition
   *
   * Equivalent to GET /V1/lofmp-returns/condition/{conditionId}
   */
  lofmpRmaDataConditionInterface?: Maybe<LofmpRmaDataConditionInterface>;
  /**
   * Retrieve condition matching the specified criteria.
   *
   * Equivalent to GET /V1/lofmp-returns/condition
   */
  lofmpRmaDataConditionSearchResultsInterface?: Maybe<LofmpRmaDataConditionSearchResultsInterface>;
  /**
   * Retrieve field
   *
   * Equivalent to GET /V1/lofmp-returns/customfield/{fieldId}
   */
  lofmpRmaDataFieldInterface?: Maybe<LofmpRmaDataFieldInterface>;
  /**
   * Retrieve field matching the specified criteria.
   *
   * Equivalent to GET /V1/lofmp-returns/customfield
   */
  lofmpRmaDataFieldSearchResultsInterface?: Maybe<LofmpRmaDataFieldSearchResultsInterface>;
  /**
   * Retrieve QuickResponse
   *
   * Equivalent to GET /V1/lofmp-returns/quickresponse/{quickresponseId}
   */
  lofmpRmaDataQuickResponseInterface?: Maybe<LofmpRmaDataQuickResponseInterface>;
  /**
   * Retrieve QuickResponse matching the specified criteria.
   *
   * Equivalent to GET /V1/lofmp-returns/quickresponse
   */
  lofmpRmaDataQuickResponseSearchResultsInterface?: Maybe<LofmpRmaDataQuickResponseSearchResultsInterface>;
  /**
   * Retrieve reason
   *
   * Equivalent to GET /V1/lofmp-returns/reason/{reasonId}
   */
  lofmpRmaDataReasonInterface?: Maybe<LofmpRmaDataReasonInterface>;
  /**
   * Retrieve reason matching the specified criteria.
   *
   * Equivalent to GET /V1/lofmp-returns/reason
   */
  lofmpRmaDataReasonSearchResultsInterface?: Maybe<LofmpRmaDataReasonSearchResultsInterface>;
  /**
   * Retrieve resolution
   *
   * Equivalent to GET /V1/lofmp-returns/resolution/{resolutionId}
   */
  lofmpRmaDataResolutionInterface?: Maybe<LofmpRmaDataResolutionInterface>;
  /**
   * Retrieve resolution matching the specified criteria.
   *
   * Equivalent to GET /V1/lofmp-returns/resolution
   */
  lofmpRmaDataResolutionSearchResultsInterface?: Maybe<LofmpRmaDataResolutionSearchResultsInterface>;
  /**
   * Retrieve Status
   *
   * Equivalent to GET /V1/lofmp-returns/status/{statusId}
   */
  lofmpRmaDataStatusInterface?: Maybe<LofmpRmaDataStatusInterface>;
  /**
   * Retrieve Status matching the specified criteria.
   *
   * Equivalent to GET /V1/lofmp-returns/status
   */
  lofmpRmaDataStatusSearchResultsInterface?: Maybe<LofmpRmaDataStatusSearchResultsInterface>;
  /**
   * Returns details required to be able to submit a payment with apple pay.
   *
   * Equivalent to GET /V1/applepay/auth
   */
  payPalBraintreeDataAuthDataInterface?: Maybe<PayPalBraintreeDataAuthDataInterface>;
  /**
   * Return the billing address for a specified quote.
   *
   * Equivalent to GET /V1/guest-carts/{cartId}/billing-address
   */
  quoteDataAddressInterface?: Maybe<QuoteDataAddressInterface>;
  /**
   * Enable a guest user to return information for a specified cart.
   *
   * Equivalent to GET /V1/guest-carts/{cartId}
   */
  quoteDataCartInterface?: Maybe<QuoteDataCartInterface>;
  /**
   * Return the payment method for a specified shopping cart.
   *
   * Equivalent to GET /V1/guest-carts/{cartId}/selected-payment-method
   */
  quoteDataPaymentInterface?: Maybe<QuoteDataPaymentInterface>;
  /**
   * Return quote totals data for a specified cart.
   *
   * Equivalent to GET /V1/guest-carts/{cartId}/totals
   */
  quoteDataTotalsInterface?: Maybe<QuoteDataTotalsInterface>;
  /**
   * get list fields for contact form
   *
   * Equivalent to GET /V1/contact/get/fields
   */
  v1ContactGetFields?: Maybe<Scalars['String']>;
  /**
   * Return empty body response
   *
   * Equivalent to GET /V1/cors/check
   */
  v1CorsCheck?: Maybe<Scalars['String']>;
  /**
   * Check if password reset token is valid.
   *
   * Equivalent to GET /V1/customers/{customerId}/password/resetLinkToken/{resetPasswordLinkToken}
   */
  v1CustomerPasswordResetLinkToken?: Maybe<Scalars['Boolean']>;
  /**
   * Get all countries and regions information for the store.
   *
   * Equivalent to GET /V1/directory/countries
   */
  v1DirectoryCountries?: Maybe<Array<Maybe<DirectoryDataCountryInformationInterface>>>;
  /**
   * Return information for a coupon in a specified cart.
   *
   * Equivalent to GET /V1/guest-carts/{cartId}/coupons
   */
  v1GuestCartCoupons?: Maybe<Scalars['String']>;
  /**
   * List items that are assigned to a specified cart.
   *
   * Equivalent to GET /V1/guest-carts/{cartId}/items
   */
  v1GuestCartItems?: Maybe<Array<Maybe<QuoteDataCartItemInterface>>>;
  /**
   * List available payment methods for a specified shopping cart. This call returns an array of objects, but detailed information about each object’s attributes might not be included.  See https://devdocs.magento.com/codelinks/attributes.html#GuestPaymentMethodManagementInterface to determine which call to use to get detailed information about all attributes for an object.
   *
   * Equivalent to GET /V1/guest-carts/{cartId}/payment-methods
   */
  v1GuestCartPaymentMethods?: Maybe<Array<Maybe<QuoteDataPaymentMethodInterface>>>;
  /**
   * List applicable shipping methods for a specified quote.
   *
   * Equivalent to GET /V1/guest-carts/{cartId}/shipping-methods
   */
  v1GuestCartShippingMethods?: Maybe<Array<Maybe<QuoteDataShippingMethodInterface>>>;
  /**
   * GET Form form field by ID, identifier, customer_group_id, stores_id
   *
   * Equivalent to GET /V1/lof-formbuilder/getformfield/{formId}
   */
  v1LofFormbuilderGetformfield?: Maybe<Scalars['String']>;
  /**
   * Retrieve getCmsPages
   *
   * Equivalent to GET /V1/lof-mobile/availableCmsPages/{storeId}
   */
  v1LofMobileAvailableCmsPage?: Maybe<Array<Maybe<LofMobileDataMobileCmsPageInterface>>>;
  /**
   * Retrieve Search Suggestion Tags
   *
   * Equivalent to GET /V1/lof-mobile/searchSuggestionTags/{keyword}/{storeId}
   */
  v1LofMobileSearchSuggestionTag?: Maybe<Array<Maybe<LofMobileDataMobileSuggestionTagInterface>>>;
  /**
   * Get List Product by Identyfier
   *
   * Equivalent to GET /V1/lof-producttags/products/{tagCode}
   */
  v1LofProducttagsProducts?: Maybe<Array<Maybe<LofProductTagsDataTagProductLinkInterface>>>;
  /**
   * get available rating data by rating code
   *
   * Equivalent to GET /V1/reviews/ratings/{storeId}
   */
  v1ReviewsRating?: Maybe<Array<Maybe<LofProductReviewsDataRatingVoteInterface>>>;
  /**
   * Retrieve releated posts
   *
   * Equivalent to GET /V1/sellerblog/post/relatedPosts/{postId}
   */
  v1SellerblogPostRelatedPost?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /**
   * Retrieve releated products
   *
   * Equivalent to GET /V1/sellerblog/post/relatedProducts/{postId}
   */
  v1SellerblogPostRelatedProduct?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /**
   * Retrieve Menu Item
   *
   * Equivalent to GET /V1/ves-megamenuitem/getMenuItem/{menuItemId}/{storeId}
   */
  vesMegamenuDataItemInterface?: Maybe<VesMegamenuDataItemInterface>;
  /**
   * Get Menu Items by Menu ID
   *
   * Equivalent to GET /V1/ves-megamenuitem/getMenuItems/{menuId}/{storeId}
   */
  vesMegamenuDataItemSearchResultsInterface?: Maybe<VesMegamenuDataItemSearchResultsInterface>;
  /**
   * Load megamenu profile by alias.
   *
   * Equivalent to GET /V1/ves-megamenu/getByAlias/{alias}
   */
  vesMegamenuDataMenuFrontendInterface?: Maybe<VesMegamenuDataMenuFrontendInterface>;
};


export type QuerycatalogDataProductRenderSearchResultsInterfaceArgs = {
  currencyCode: Scalars['String'];
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  storeId: Scalars['Int'];
};


export type QuerycatalogDataProductSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerycheckoutDataPaymentDetailsInterfaceArgs = {
  cartId: Scalars['String'];
};


export type QuerydirectoryDataCountryInformationInterfaceArgs = {
  countryId: Scalars['String'];
};


export type QueryframeworkSearchSearchResultInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaRequestName?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerygiftMessageDataMessageInterfaceArgs = {
  cartId: Scalars['String'];
};


export type QuerygiftMessageGuestItemRepositoryV1GetGetArgs = {
  cartId: Scalars['String'];
  itemId: Scalars['Int'];
};


export type QueryinventoryInStorePickupApiDataSearchResultInterfaceArgs = {
  searchRequestAreaRadius?: InputMaybe<Scalars['Int']>;
  searchRequestAreaSearchTerm?: InputMaybe<Scalars['String']>;
  searchRequestCurrentPage?: InputMaybe<Scalars['Int']>;
  searchRequestExtensionAttributesProductsInfo0Sku?: InputMaybe<Scalars['String']>;
  searchRequestFiltersCityConditionType?: InputMaybe<Scalars['String']>;
  searchRequestFiltersCityValue?: InputMaybe<Scalars['String']>;
  searchRequestFiltersCountryConditionType?: InputMaybe<Scalars['String']>;
  searchRequestFiltersCountryValue?: InputMaybe<Scalars['String']>;
  searchRequestFiltersNameConditionType?: InputMaybe<Scalars['String']>;
  searchRequestFiltersNameValue?: InputMaybe<Scalars['String']>;
  searchRequestFiltersPickupLocationCodeConditionType?: InputMaybe<Scalars['String']>;
  searchRequestFiltersPickupLocationCodeValue?: InputMaybe<Scalars['String']>;
  searchRequestFiltersPostcodeConditionType?: InputMaybe<Scalars['String']>;
  searchRequestFiltersPostcodeValue?: InputMaybe<Scalars['String']>;
  searchRequestFiltersRegionConditionType?: InputMaybe<Scalars['String']>;
  searchRequestFiltersRegionIdConditionType?: InputMaybe<Scalars['String']>;
  searchRequestFiltersRegionIdValue?: InputMaybe<Scalars['String']>;
  searchRequestFiltersRegionValue?: InputMaybe<Scalars['String']>;
  searchRequestFiltersStreetConditionType?: InputMaybe<Scalars['String']>;
  searchRequestFiltersStreetValue?: InputMaybe<Scalars['String']>;
  searchRequestPageSize?: InputMaybe<Scalars['Int']>;
  searchRequestScopeCode?: InputMaybe<Scalars['String']>;
  searchRequestScopeType?: InputMaybe<Scalars['String']>;
  searchRequestSort0Direction?: InputMaybe<Scalars['String']>;
  searchRequestSort0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofAutosearchDataSearchResultInterfaceArgs = {
  categoryId: Scalars['String'];
  limitTerms: Scalars['String'];
  queryText: Scalars['String'];
  storeId: Scalars['String'];
};


export type QuerylofBannerSliderDataBannerInterfaceArgs = {
  id: Scalars['Int'];
  loadFromCache?: InputMaybe<Scalars['Boolean']>;
};


export type QuerylofBannerSliderDataBannerSearchResultInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofBannerSliderDataResourceMapInterfaceArgs = {
  id: Scalars['Int'];
  loadFromCache?: InputMaybe<Scalars['Boolean']>;
};


export type QuerylofBannerSliderDataSliderInterfaceArgs = {
  id: Scalars['Int'];
  loadFromCache?: InputMaybe<Scalars['Boolean']>;
  storeId?: InputMaybe<Scalars['Int']>;
};


export type QuerylofBannerSliderDataSliderSearchResultInterfaceArgs = {
  customerGroupId?: InputMaybe<Scalars['Int']>;
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  storeId?: InputMaybe<Scalars['Int']>;
};


export type QuerylofChatWootDataChatwootInterfaceArgs = {
  chatwootId: Scalars['String'];
};


export type QuerylofChatWootDataChatwootSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofFormbuilderDataFormbuilderDesignInterfaceArgs = {
  customerGroupId?: InputMaybe<Scalars['Int']>;
  formId: Scalars['Int'];
  storeId?: InputMaybe<Scalars['Int']>;
};


export type QuerylofMarketPlaceDataGroupSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofMarketPlaceDataRatingInterfaceArgs = {
  ratingId: Scalars['Int'];
};


export type QuerylofMarketPlaceDataRatingSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  sellerUrl: Scalars['String'];
};


export type QuerylofMarketPlaceDataReviewSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  sellerUrl: Scalars['String'];
};


export type QuerylofMarketPlaceDataSellerInterfaceArgs = {
  getProducts?: InputMaybe<Scalars['Boolean']>;
  sellerUrl: Scalars['String'];
  showOtherInfo?: InputMaybe<Scalars['Boolean']>;
};


export type QuerylofMarketPlaceDataSellerProductSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofMarketPlaceDataSellerVacationInterfaceArgs = {
  sellerUrl: Scalars['String'];
};


export type QuerylofMarketPlaceDataSellersSearchResultsInterfaceArgs = {
  getProducts?: InputMaybe<Scalars['Boolean']>;
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  showOtherInfo?: InputMaybe<Scalars['Boolean']>;
};


export type QuerylofMarketPlaceDataSummaryRatingInterfaceArgs = {
  sellerUrl: Scalars['String'];
};


export type QuerylofMarketPlaceSellerProductsRepositoryV1GetListSellersProductGetArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  sellerUrl: Scalars['String'];
};


export type QuerylofMarketPlaceSellersFrontendRepositoryV1GetSellerByProductSkuGetArgs = {
  sku: Scalars['String'];
  storeId?: InputMaybe<Scalars['Int']>;
};


export type QuerylofMobileDataMobileNavSidebarInterfaceArgs = {
  storeId?: InputMaybe<Scalars['Int']>;
};


export type QuerylofProductReviewsDataReviewDataInterfaceArgs = {
  keyword?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sku: Scalars['String'];
  sortBy?: InputMaybe<Scalars['String']>;
};


export type QuerylofProductTagsDataTagSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofmpBlogCommentRepositoryV1GetPostCommentListGetArgs = {
  postId: Scalars['Int'];
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofmpBlogDataCategoryInterfaceArgs = {
  categoryId: Scalars['Int'];
  storeId: Scalars['Int'];
};


export type QuerylofmpBlogDataCategorySearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofmpBlogDataCommentSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofmpBlogDataPostInterfaceArgs = {
  postUrl: Scalars['String'];
  storeId: Scalars['String'];
};


export type QuerylofmpBlogDataPostSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofmpBlogDataTagInterfaceArgs = {
  tagAlias: Scalars['String'];
};


export type QuerylofmpBlogDataTagSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofmpBlogPostRepositoryV1CategoryPostsGetArgs = {
  categoryId: Scalars['Int'];
  criteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  criteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  criteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  criteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  criteriaPageSize?: InputMaybe<Scalars['Int']>;
  criteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  criteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofmpBlogPostRepositoryV1SellerPostsGetArgs = {
  criteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  criteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  criteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  criteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  criteriaPageSize?: InputMaybe<Scalars['Int']>;
  criteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  criteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  sellerUrl: Scalars['String'];
};


export type QuerylofmpBlogPostRepositoryV1TagPostsGetArgs = {
  criteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  criteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  criteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  criteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  criteriaPageSize?: InputMaybe<Scalars['Int']>;
  criteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  criteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  tag: Scalars['String'];
};


export type QuerylofmpCouponCodeDataCouponSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  sellerUrl: Scalars['String'];
};


export type QuerylofmpProductlistProductRepositoryV1GetBestsellerProductsGetArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  sellerUrl: Scalars['String'];
};


export type QuerylofmpProductlistProductRepositoryV1GetDealsProductsGetArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  sellerUrl: Scalars['String'];
};


export type QuerylofmpProductlistProductRepositoryV1GetFeaturedProductsGetArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  sellerUrl: Scalars['String'];
};


export type QuerylofmpProductlistProductRepositoryV1GetLatestProductsGetArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  sellerUrl: Scalars['String'];
};


export type QuerylofmpProductlistProductRepositoryV1GetMostViewedProductsGetArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  sellerUrl: Scalars['String'];
};


export type QuerylofmpProductlistProductRepositoryV1GetNewarrivalProductsGetArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  sellerUrl: Scalars['String'];
};


export type QuerylofmpProductlistProductRepositoryV1GetRandomProductsGetArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  sellerUrl: Scalars['String'];
};


export type QuerylofmpProductlistProductRepositoryV1GetSpecialProductsGetArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  sellerUrl: Scalars['String'];
};


export type QuerylofmpProductlistProductRepositoryV1GetTopratedProductsGetArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  sellerUrl: Scalars['String'];
};


export type QuerylofmpRmaDataAddressInterfaceArgs = {
  addressId: Scalars['String'];
};


export type QuerylofmpRmaDataAddressSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofmpRmaDataConditionInterfaceArgs = {
  conditionId: Scalars['String'];
};


export type QuerylofmpRmaDataConditionSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofmpRmaDataFieldInterfaceArgs = {
  fieldId: Scalars['String'];
};


export type QuerylofmpRmaDataFieldSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofmpRmaDataQuickResponseInterfaceArgs = {
  quickresponseId: Scalars['String'];
};


export type QuerylofmpRmaDataQuickResponseSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofmpRmaDataReasonInterfaceArgs = {
  reasonId: Scalars['String'];
};


export type QuerylofmpRmaDataReasonSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofmpRmaDataResolutionInterfaceArgs = {
  resolutionId: Scalars['String'];
};


export type QuerylofmpRmaDataResolutionSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofmpRmaDataStatusInterfaceArgs = {
  statusId: Scalars['String'];
};


export type QuerylofmpRmaDataStatusSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QueryquoteDataAddressInterfaceArgs = {
  cartId: Scalars['String'];
};


export type QueryquoteDataCartInterfaceArgs = {
  cartId: Scalars['String'];
};


export type QueryquoteDataPaymentInterfaceArgs = {
  cartId: Scalars['String'];
};


export type QueryquoteDataTotalsInterfaceArgs = {
  cartId: Scalars['String'];
};


export type Queryv1CustomerPasswordResetLinkTokenArgs = {
  customerId: Scalars['Int'];
  resetPasswordLinkToken: Scalars['String'];
};


export type Queryv1DirectoryCountriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type Queryv1GuestCartCouponsArgs = {
  cartId: Scalars['String'];
};


export type Queryv1GuestCartItemsArgs = {
  cartId: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type Queryv1GuestCartPaymentMethodsArgs = {
  cartId: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type Queryv1GuestCartShippingMethodsArgs = {
  cartId: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type Queryv1LofFormbuilderGetformfieldArgs = {
  customerGroupId?: InputMaybe<Scalars['Int']>;
  formId: Scalars['Int'];
  storeId?: InputMaybe<Scalars['Int']>;
};


export type Queryv1LofMobileAvailableCmsPageArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  storeId: Scalars['Int'];
};


export type Queryv1LofMobileSearchSuggestionTagArgs = {
  keyword: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  storeId: Scalars['String'];
};


export type Queryv1LofProducttagsProductsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  tagCode: Scalars['String'];
};


export type Queryv1ReviewsRatingArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  storeId: Scalars['String'];
};


export type Queryv1SellerblogPostRelatedPostArgs = {
  postId: Scalars['Int'];
};


export type Queryv1SellerblogPostRelatedProductArgs = {
  postId: Scalars['Int'];
};


export type QueryvesMegamenuDataItemInterfaceArgs = {
  menuItemId: Scalars['Int'];
  storeId: Scalars['String'];
};


export type QueryvesMegamenuDataItemSearchResultsInterfaceArgs = {
  menuId: Scalars['Int'];
  storeId: Scalars['String'];
};


export type QueryvesMegamenuDataMenuFrontendInterfaceArgs = {
  alias: Scalars['String'];
  customerGroupId?: InputMaybe<Scalars['Int']>;
  isMobileMenu?: InputMaybe<Scalars['Boolean']>;
  storeCode?: InputMaybe<Scalars['String']>;
};

/** Dto that holds render information about products */
export type CatalogDataProductRenderSearchResultsInterface = {
  /** List of products rendered information */
  items: Array<Maybe<CatalogDataProductRenderInterface>>;
};

/** Represents Data Object which holds enough information to render product This information is put into part as Add To Cart or Add to Compare Data or Price Data */
export type CatalogDataProductRenderInterface = {
  /** Button interface. This interface represents all manner of product buttons: add to cart, add to compare, etc... The buttons describes by this interface should have interaction with backend */
  addToCartButton: CatalogDataProductRenderButtonInterface;
  /** Button interface. This interface represents all manner of product buttons: add to cart, add to compare, etc... The buttons describes by this interface should have interaction with backend */
  addToCompareButton: CatalogDataProductRenderButtonInterface;
  /** Current or desired currency code to product */
  currencyCode: Scalars['String'];
  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRenderInterface */
  extensionAttributes: CatalogDataProductRenderExtensionInterface;
  /** Product identifier */
  id: Scalars['Int'];
  /** Enough information, that needed to render image on front */
  images: Array<Maybe<CatalogDataProductRenderImageInterface>>;
  /** Information about product saleability (In Stock) */
  isSalable: Scalars['String'];
  /** Product name */
  name: Scalars['String'];
  /** Price interface. */
  priceInfo: CatalogDataProductRenderPriceInfoInterface;
  /** Information about current store id or requested store id */
  storeId: Scalars['Int'];
  /** Product type. Such as bundle, grouped, simple, etc... */
  type: Scalars['String'];
  /** Product url */
  url: Scalars['String'];
};

/** Button interface. This interface represents all manner of product buttons: add to cart, add to compare, etc... The buttons describes by this interface should have interaction with backend */
export type CatalogDataProductRenderButtonInterface = {
  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRender\ButtonInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Post data */
  postData: Scalars['String'];
  /** Flag whether a product has options or not */
  requiredOptions: Scalars['Boolean'];
  /** Url, needed to add product to cart */
  url: Scalars['String'];
};

/** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRenderInterface */
export type CatalogDataProductRenderExtensionInterface = {
  ddgBrand?: Maybe<Scalars['String']>;
  ddgCategories?: Maybe<Array<Maybe<Scalars['String']>>>;
  ddgDescription?: Maybe<Scalars['String']>;
  ddgImage?: Maybe<Scalars['String']>;
  ddgSku?: Maybe<Scalars['String']>;
  reviewHtml?: Maybe<Scalars['String']>;
  /** Button interface. This interface represents all manner of product buttons: add to cart, add to compare, etc... The buttons describes by this interface should have interaction with backend */
  wishlistButton?: Maybe<CatalogDataProductRenderButtonInterface>;
};

/** Product Render image interface. Represents physical characteristics of image, that can be used in product listing or product view */
export type CatalogDataProductRenderImageInterface = {
  /** Image code */
  code: Scalars['String'];
  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRender\ImageInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Image height */
  height: Scalars['Float'];
  /** Image label */
  label: Scalars['String'];
  /** Resize height */
  resizedHeight: Scalars['Float'];
  /** Resize width */
  resizedWidth: Scalars['Float'];
  /** Image url */
  url: Scalars['String'];
  /** Image width in px */
  width: Scalars['Float'];
};

/** Price interface. */
export type CatalogDataProductRenderPriceInfoInterface = {
  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRender\PriceInfoInterface */
  extensionAttributes?: Maybe<CatalogDataProductRenderPriceInfoExtensionInterface>;
  /** Final price */
  finalPrice: Scalars['Float'];
  /** Formatted Price interface. Aggregate formatted html with price representations. E.g.: <span class="price">$9.00</span> Consider currency, rounding and html */
  formattedPrices: CatalogDataProductRenderFormattedPriceInfoInterface;
  /** Max price of a product */
  maxPrice: Scalars['Float'];
  /** Max regular price */
  maxRegularPrice: Scalars['Float'];
  /** Minimal price */
  minimalPrice: Scalars['Float'];
  /** Minimal regular price */
  minimalRegularPrice: Scalars['Float'];
  /** Regular price */
  regularPrice: Scalars['Float'];
  /** Special price */
  specialPrice: Scalars['Float'];
};

/** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRender\PriceInfoInterface */
export type CatalogDataProductRenderPriceInfoExtensionInterface = {
  /** Price interface. */
  msrp?: Maybe<MsrpDataProductRenderMsrpPriceInfoInterface>;
  /** Price interface. */
  taxAdjustments?: Maybe<CatalogDataProductRenderPriceInfoInterface>;
  weeeAdjustment?: Maybe<Scalars['String']>;
  weeeAttributes?: Maybe<Array<Maybe<WeeeDataProductRenderWeeeAdjustmentAttributeInterface>>>;
};

/** Price interface. */
export type MsrpDataProductRenderMsrpPriceInfoInterface = {
  explanationMessage: Scalars['String'];
  /** ExtensionInterface class for @see \Magento\Msrp\Api\Data\ProductRender\MsrpPriceInfoInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  isApplicable: Scalars['String'];
  isShownPriceOnGesture: Scalars['String'];
  msrpMessage: Scalars['String'];
  msrpPrice: Scalars['String'];
};

/** List of all weee attributes, their amounts, etc.., that product has */
export type WeeeDataProductRenderWeeeAdjustmentAttributeInterface = {
  /** Weee attribute amount */
  amount: Scalars['String'];
  /** Product amount exclude tax */
  amountExclTax: Scalars['String'];
  /** Weee attribute code */
  attributeCode: Scalars['String'];
  /** ExtensionInterface class for @see \Magento\Weee\Api\Data\ProductRender\WeeeAdjustmentAttributeInterface */
  extensionAttributes: Scalars['JSON'];
  /** Tax which is calculated to fixed product tax attribute */
  taxAmount: Scalars['String'];
  /** Tax amount of weee attribute */
  taxAmountInclTax: Scalars['String'];
};

/** Formatted Price interface. Aggregate formatted html with price representations. E.g.: <span class="price">$9.00</span> Consider currency, rounding and html */
export type CatalogDataProductRenderFormattedPriceInfoInterface = {
  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRender\FormattedPriceInfoInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Html with final price */
  finalPrice: Scalars['String'];
  /** Max price of a product */
  maxPrice: Scalars['String'];
  /** Max regular price */
  maxRegularPrice: Scalars['String'];
  /** The minimal price of the product or variation */
  minimalPrice: Scalars['String'];
  /** Minimal regular price */
  minimalRegularPrice: Scalars['String'];
  /** Price - is price of product without discounts and special price with taxes and fixed product tax */
  regularPrice: Scalars['String'];
  /** Special price */
  specialPrice: Scalars['String'];
};

export type CatalogDataProductSearchResultsInterface = {
  /** Attributes list. */
  items: Array<Maybe<CatalogDataProductInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount?: Maybe<Scalars['String']>;
};

export type CatalogDataProductInterface = {
  /** Attribute set id */
  attributeSetId?: Maybe<Scalars['Int']>;
  /** Created date */
  createdAt?: Maybe<Scalars['String']>;
  /** Custom attributes values. */
  customAttributes?: Maybe<Array<Maybe<FrameworkAttributeInterface>>>;
  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductInterface */
  extensionAttributes?: Maybe<CatalogDataProductExtensionInterface>;
  /** Id */
  id?: Maybe<Scalars['Int']>;
  /** Media gallery entries */
  mediaGalleryEntries?: Maybe<Array<Maybe<CatalogDataProductAttributeMediaGalleryEntryInterface>>>;
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** List of product options */
  options?: Maybe<Array<Maybe<CatalogDataProductCustomOptionInterface>>>;
  /** Price */
  price?: Maybe<Scalars['Float']>;
  /** Product links info */
  productLinks?: Maybe<Array<Maybe<CatalogDataProductLinkInterface>>>;
  /** Sku */
  sku: Scalars['String'];
  /** Status */
  status?: Maybe<Scalars['Int']>;
  /** List of product tier prices */
  tierPrices?: Maybe<Array<Maybe<CatalogDataProductTierPriceInterface>>>;
  /** Type id */
  typeId?: Maybe<Scalars['String']>;
  /** Updated date */
  updatedAt?: Maybe<Scalars['String']>;
  /** Visibility */
  visibility?: Maybe<Scalars['Int']>;
  /** Weight */
  weight?: Maybe<Scalars['Float']>;
};

/** Interface for custom attribute value. */
export type FrameworkAttributeInterface = {
  /** Attribute code */
  attributeCode: Scalars['String'];
  /** Attribute value */
  value: Scalars['String'];
};

/** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductInterface */
export type CatalogDataProductExtensionInterface = {
  bundleProductOptions?: Maybe<Array<Maybe<BundleDataOptionInterface>>>;
  categoryLinks?: Maybe<Array<Maybe<CatalogDataCategoryLinkInterface>>>;
  configurableProductLinks?: Maybe<Array<Maybe<Scalars['Int']>>>;
  configurableProductOptions?: Maybe<Array<Maybe<ConfigurableProductDataOptionInterface>>>;
  downloadableProductLinks?: Maybe<Array<Maybe<DownloadableDataLinkInterface>>>;
  downloadableProductSamples?: Maybe<Array<Maybe<DownloadableDataSampleInterface>>>;
  /** Interface StockItem */
  stockItem?: Maybe<CatalogInventoryDataStockItemInterface>;
  /** Data model representing a Commmodity Code */
  vertexCommodityCode?: Maybe<VertexTaxDataCommodityCodeInterface>;
  websiteIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

/** Interface OptionInterface */
export type BundleDataOptionInterface = {
  /** ExtensionInterface class for @see \Magento\Bundle\Api\Data\OptionInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Option id */
  optionId?: Maybe<Scalars['Int']>;
  /** Option position */
  position?: Maybe<Scalars['Int']>;
  /** Product links */
  productLinks?: Maybe<Array<Maybe<BundleDataLinkInterface>>>;
  /** Is required option */
  required?: Maybe<Scalars['Boolean']>;
  /** Product sku */
  sku?: Maybe<Scalars['String']>;
  /** Option title */
  title?: Maybe<Scalars['String']>;
  /** Input type */
  type?: Maybe<Scalars['String']>;
};

/** Interface LinkInterface */
export type BundleDataLinkInterface = {
  /** Whether quantity could be changed */
  canChangeQuantity?: Maybe<Scalars['Int']>;
  /** ExtensionInterface class for @see \Magento\Bundle\Api\Data\LinkInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** The identifier */
  id?: Maybe<Scalars['String']>;
  /** Is default */
  isDefault: Scalars['Boolean'];
  /** Option id */
  optionId?: Maybe<Scalars['Int']>;
  /** Position */
  position?: Maybe<Scalars['Int']>;
  /** Price */
  price: Scalars['Float'];
  /** Price type */
  priceType: Scalars['Int'];
  /** Qty */
  qty?: Maybe<Scalars['Float']>;
  /** Linked product sku */
  sku?: Maybe<Scalars['String']>;
};

export type CatalogDataCategoryLinkInterface = {
  /** Category id */
  categoryId: Scalars['String'];
  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\CategoryLinkInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  position?: Maybe<Scalars['Int']>;
};

/** Interface OptionInterface */
export type ConfigurableProductDataOptionInterface = {
  attributeId?: Maybe<Scalars['String']>;
  /** ExtensionInterface class for @see \Magento\ConfigurableProduct\Api\Data\OptionInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  isUseDefault?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  values?: Maybe<Array<Maybe<ConfigurableProductDataOptionValueInterface>>>;
};

/** Interface OptionValueInterface */
export type ConfigurableProductDataOptionValueInterface = {
  /** ExtensionInterface class for @see \Magento\ConfigurableProduct\Api\Data\OptionValueInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  valueIndex: Scalars['Int'];
};

export type DownloadableDataLinkInterface = {
  /** ExtensionInterface class for @see \Magento\Downloadable\Api\Data\LinkInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Sample(or link) id */
  id?: Maybe<Scalars['Int']>;
  /** Shareable status */
  isShareable: Scalars['Int'];
  /** relative file path */
  linkFile?: Maybe<Scalars['String']>;
  linkFileContent?: Maybe<DownloadableDataFileContentInterface>;
  linkType: Scalars['String'];
  /** Link url or null when type is 'file' */
  linkUrl?: Maybe<Scalars['String']>;
  /** Of downloads per user */
  numberOfDownloads?: Maybe<Scalars['Int']>;
  /** Price */
  price: Scalars['Float'];
  /** relative file path */
  sampleFile?: Maybe<Scalars['String']>;
  sampleFileContent?: Maybe<DownloadableDataFileContentInterface>;
  sampleType: Scalars['String'];
  /** file URL */
  sampleUrl?: Maybe<Scalars['String']>;
  sortOrder: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
};

export type DownloadableDataFileContentInterface = {
  /** ExtensionInterface class for @see \Magento\Downloadable\Api\Data\File\ContentInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Data (base64 encoded content) */
  fileData: Scalars['String'];
  /** File name */
  name: Scalars['String'];
};

export type DownloadableDataSampleInterface = {
  /** ExtensionInterface class for @see \Magento\Downloadable\Api\Data\SampleInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Sample(or link) id */
  id?: Maybe<Scalars['Int']>;
  /** relative file path */
  sampleFile?: Maybe<Scalars['String']>;
  sampleFileContent?: Maybe<DownloadableDataFileContentInterface>;
  sampleType: Scalars['String'];
  /** file URL */
  sampleUrl?: Maybe<Scalars['String']>;
  /** Order index for sample */
  sortOrder: Scalars['Int'];
  /** Title */
  title: Scalars['String'];
};

/** Interface StockItem */
export type CatalogInventoryDataStockItemInterface = {
  /** Backorders status */
  backorders: Scalars['Int'];
  /** Whether Quantity Increments is enabled */
  enableQtyIncrements: Scalars['Boolean'];
  /** ExtensionInterface class for @see \Magento\CatalogInventory\Api\Data\StockItemInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  isDecimalDivided: Scalars['Boolean'];
  /** Stock Availability */
  isInStock: Scalars['Boolean'];
  isQtyDecimal: Scalars['Boolean'];
  itemId?: Maybe<Scalars['Int']>;
  lowStockDate: Scalars['String'];
  /** Can Manage Stock */
  manageStock: Scalars['Boolean'];
  /** Maximum Qty Allowed in Shopping Cart data wrapper */
  maxSaleQty: Scalars['Float'];
  /** Minimal quantity available for item status in stock */
  minQty: Scalars['Float'];
  /** Minimum Qty Allowed in Shopping Cart or NULL when there is no limitation */
  minSaleQty: Scalars['Float'];
  /** Notify for Quantity Below data wrapper */
  notifyStockQty: Scalars['Float'];
  productId?: Maybe<Scalars['Int']>;
  qty: Scalars['Float'];
  /** Quantity Increments data wrapper */
  qtyIncrements: Scalars['Float'];
  showDefaultNotificationMessage: Scalars['Boolean'];
  /** Stock identifier */
  stockId?: Maybe<Scalars['Int']>;
  stockStatusChangedAuto: Scalars['Int'];
  useConfigBackorders: Scalars['Boolean'];
  useConfigEnableQtyInc: Scalars['Boolean'];
  useConfigManageStock: Scalars['Boolean'];
  useConfigMaxSaleQty: Scalars['Boolean'];
  useConfigMinQty: Scalars['Boolean'];
  useConfigMinSaleQty: Scalars['Int'];
  useConfigNotifyStockQty: Scalars['Boolean'];
  useConfigQtyIncrements: Scalars['Boolean'];
};

/** Data model representing a Commmodity Code */
export type VertexTaxDataCommodityCodeInterface = {
  /** Commodity code */
  code?: Maybe<Scalars['String']>;
  /** Commodity code type */
  type?: Maybe<Scalars['String']>;
};

export type CatalogDataProductAttributeMediaGalleryEntryInterface = {
  /** Image Content data interface */
  content?: Maybe<FrameworkDataImageContentInterface>;
  /** If gallery entry is hidden from product page */
  disabled: Scalars['Boolean'];
  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductAttributeMediaGalleryEntryInterface */
  extensionAttributes?: Maybe<CatalogDataProductAttributeMediaGalleryEntryExtensionInterface>;
  /** File path */
  file?: Maybe<Scalars['String']>;
  /** Gallery entry ID */
  id?: Maybe<Scalars['Int']>;
  /** Gallery entry alternative text */
  label: Scalars['String'];
  /** Media type */
  mediaType: Scalars['String'];
  /** Gallery entry position (sort order) */
  position: Scalars['Int'];
  /** Gallery entry image types (thumbnail, image, small_image etc) */
  types: Array<Maybe<Scalars['String']>>;
};

/** Image Content data interface */
export type FrameworkDataImageContentInterface = {
  /** Media data (base64 encoded content) */
  base64EncodedData: Scalars['String'];
  /** Image name */
  name: Scalars['String'];
  /** MIME type */
  type: Scalars['String'];
};

/** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductAttributeMediaGalleryEntryInterface */
export type CatalogDataProductAttributeMediaGalleryEntryExtensionInterface = {
  /** Video Content data interface */
  videoContent?: Maybe<FrameworkDataVideoContentInterface>;
};

/** Video Content data interface */
export type FrameworkDataVideoContentInterface = {
  /** MIME type */
  mediaType: Scalars['String'];
  /** Video Description */
  videoDescription: Scalars['String'];
  /** Metadata */
  videoMetadata: Scalars['String'];
  /** Provider */
  videoProvider: Scalars['String'];
  /** Title */
  videoTitle: Scalars['String'];
  /** Video URL */
  videoUrl: Scalars['String'];
};

export type CatalogDataProductCustomOptionInterface = {
  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductCustomOptionInterface */
  extensionAttributes?: Maybe<CatalogDataProductCustomOptionExtensionInterface>;
  fileExtension?: Maybe<Scalars['String']>;
  imageSizeX?: Maybe<Scalars['Int']>;
  imageSizeY?: Maybe<Scalars['Int']>;
  /** Is require */
  isRequire: Scalars['Boolean'];
  maxCharacters?: Maybe<Scalars['Int']>;
  /** Option id */
  optionId?: Maybe<Scalars['Int']>;
  /** Price */
  price?: Maybe<Scalars['Float']>;
  /** Price type */
  priceType?: Maybe<Scalars['String']>;
  /** Product SKU */
  productSku: Scalars['String'];
  /** Sku */
  sku?: Maybe<Scalars['String']>;
  /** Sort order */
  sortOrder: Scalars['Int'];
  /** Option title */
  title: Scalars['String'];
  /** Option type */
  type: Scalars['String'];
  values?: Maybe<Array<Maybe<CatalogDataProductCustomOptionValuesInterface>>>;
};

/** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductCustomOptionInterface */
export type CatalogDataProductCustomOptionExtensionInterface = {
  vertexFlexField?: Maybe<Scalars['String']>;
};

export type CatalogDataProductCustomOptionValuesInterface = {
  /** Option type id */
  optionTypeId?: Maybe<Scalars['Int']>;
  /** Price */
  price: Scalars['Float'];
  /** Price type */
  priceType: Scalars['String'];
  /** Sku */
  sku?: Maybe<Scalars['String']>;
  /** Sort order */
  sortOrder: Scalars['Int'];
  /** Option title */
  title: Scalars['String'];
};

export type CatalogDataProductLinkInterface = {
  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductLinkInterface */
  extensionAttributes?: Maybe<CatalogDataProductLinkExtensionInterface>;
  /** Link type */
  linkType: Scalars['String'];
  /** Linked product sku */
  linkedProductSku: Scalars['String'];
  /** Linked product type (simple, virtual, etc) */
  linkedProductType: Scalars['String'];
  /** Linked item position */
  position: Scalars['Int'];
  /** SKU */
  sku: Scalars['String'];
};

/** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductLinkInterface */
export type CatalogDataProductLinkExtensionInterface = {
  qty?: Maybe<Scalars['Float']>;
};

export type CatalogDataProductTierPriceInterface = {
  /** Customer group id */
  customerGroupId: Scalars['Int'];
  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductTierPriceInterface */
  extensionAttributes?: Maybe<CatalogDataProductTierPriceExtensionInterface>;
  /** Tier qty */
  qty: Scalars['Float'];
  /** Price value */
  value: Scalars['Float'];
};

/** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductTierPriceInterface */
export type CatalogDataProductTierPriceExtensionInterface = {
  percentageValue?: Maybe<Scalars['Float']>;
  websiteId?: Maybe<Scalars['Int']>;
};

/** Search criteria interface. */
export type FrameworkSearchCriteriaInterface = {
  /** Current page. */
  currentPage?: Maybe<Scalars['Int']>;
  /** A list of filter groups. */
  filterGroups: Array<Maybe<FrameworkSearchFilterGroup>>;
  /** Page size. */
  pageSize?: Maybe<Scalars['Int']>;
  /** Sort order. */
  sortOrders?: Maybe<Array<Maybe<FrameworkSortOrder>>>;
};

/** Groups two or more filters together using a logical OR */
export type FrameworkSearchFilterGroup = {
  /** A list of filters in this group */
  filters?: Maybe<Array<Maybe<FrameworkFilter>>>;
};

/** Filter which can be used by any methods from service layer. */
export type FrameworkFilter = {
  /** Condition type */
  conditionType?: Maybe<Scalars['String']>;
  /** Field */
  field: Scalars['String'];
  /** Value */
  value: Scalars['String'];
};

/** Data object for sort order. */
export type FrameworkSortOrder = {
  /** Sorting direction. */
  direction: Scalars['String'];
  /** Sorting field. */
  field: Scalars['String'];
};

/** Interface PaymentDetailsInterface */
export type CheckoutDataPaymentDetailsInterface = {
  /** ExtensionInterface class for @see \Magento\Checkout\Api\Data\PaymentDetailsInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  paymentMethods: Array<Maybe<QuoteDataPaymentMethodInterface>>;
  /** Interface TotalsInterface */
  totals: QuoteDataTotalsInterface;
};

/** Interface PaymentMethodInterface */
export type QuoteDataPaymentMethodInterface = {
  /** Payment method code */
  code: Scalars['String'];
  /** Payment method title */
  title: Scalars['String'];
};

/** Interface TotalsInterface */
export type QuoteDataTotalsInterface = {
  /** Base currency code */
  baseCurrencyCode?: Maybe<Scalars['String']>;
  /** Discount amount in base currency */
  baseDiscountAmount?: Maybe<Scalars['Float']>;
  /** Grand total in base currency */
  baseGrandTotal?: Maybe<Scalars['Float']>;
  /** Shipping amount in base currency */
  baseShippingAmount?: Maybe<Scalars['Float']>;
  /** Shipping discount amount in base currency */
  baseShippingDiscountAmount?: Maybe<Scalars['Float']>;
  /** Shipping including tax in base currency */
  baseShippingInclTax?: Maybe<Scalars['Float']>;
  /** Shipping tax amount in base currency */
  baseShippingTaxAmount?: Maybe<Scalars['Float']>;
  /** Subtotal in base currency */
  baseSubtotal?: Maybe<Scalars['Float']>;
  /** Subtotal including tax in base currency */
  baseSubtotalInclTax?: Maybe<Scalars['Float']>;
  /** Subtotal in base currency with applied discount */
  baseSubtotalWithDiscount?: Maybe<Scalars['Float']>;
  /** Tax amount in base currency */
  baseTaxAmount?: Maybe<Scalars['Float']>;
  /** Applied coupon code */
  couponCode?: Maybe<Scalars['String']>;
  /** Discount amount in quote currency */
  discountAmount?: Maybe<Scalars['Float']>;
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalsInterface */
  extensionAttributes?: Maybe<QuoteDataTotalsExtensionInterface>;
  /** Grand total in quote currency */
  grandTotal?: Maybe<Scalars['Float']>;
  /** Totals by items */
  items?: Maybe<Array<Maybe<QuoteDataTotalsItemInterface>>>;
  /** Items qty */
  itemsQty?: Maybe<Scalars['Int']>;
  /** Quote currency code */
  quoteCurrencyCode?: Maybe<Scalars['String']>;
  /** Shipping amount in quote currency */
  shippingAmount?: Maybe<Scalars['Float']>;
  /** Shipping discount amount in quote currency */
  shippingDiscountAmount?: Maybe<Scalars['Float']>;
  /** Shipping including tax in quote currency */
  shippingInclTax?: Maybe<Scalars['Float']>;
  /** Shipping tax amount in quote currency */
  shippingTaxAmount?: Maybe<Scalars['Float']>;
  /** Subtotal in quote currency */
  subtotal?: Maybe<Scalars['Float']>;
  /** Subtotal including tax in quote currency */
  subtotalInclTax?: Maybe<Scalars['Float']>;
  /** Subtotal in quote currency with applied discount */
  subtotalWithDiscount?: Maybe<Scalars['Float']>;
  /** Tax amount in quote currency */
  taxAmount?: Maybe<Scalars['Float']>;
  /** Dynamically calculated totals */
  totalSegments: Array<Maybe<QuoteDataTotalSegmentInterface>>;
  /** Item weee tax applied amount in quote currency. */
  weeeTaxAppliedAmount: Scalars['Float'];
};

/** ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalsInterface */
export type QuoteDataTotalsExtensionInterface = {
  couponLabel?: Maybe<Scalars['String']>;
};

/** Interface TotalsItemInterface */
export type QuoteDataTotalsItemInterface = {
  /** Discount amount in base currency. Otherwise, null. */
  baseDiscountAmount?: Maybe<Scalars['Float']>;
  /** Item price in base currency. */
  basePrice: Scalars['Float'];
  /** Price including tax in base currency. Otherwise, null. */
  basePriceInclTax?: Maybe<Scalars['Float']>;
  /** Row total in base currency. */
  baseRowTotal: Scalars['Float'];
  /** Row total including tax in base currency. Otherwise, null. */
  baseRowTotalInclTax?: Maybe<Scalars['Float']>;
  /** Tax amount in base currency. Otherwise, null. */
  baseTaxAmount?: Maybe<Scalars['Float']>;
  /** Discount amount in quote currency. Otherwise, null. */
  discountAmount?: Maybe<Scalars['Float']>;
  /** Discount percent. Otherwise, null. */
  discountPercent?: Maybe<Scalars['Float']>;
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalsItemInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Item id */
  itemId: Scalars['Int'];
  /** Product name. Otherwise, null. */
  name?: Maybe<Scalars['String']>;
  /** Item price in quote currency. */
  options: Scalars['String'];
  /** Item price in quote currency. */
  price: Scalars['Float'];
  /** Price including tax in quote currency. Otherwise, null. */
  priceInclTax?: Maybe<Scalars['Float']>;
  /** Item quantity. */
  qty: Scalars['Float'];
  /** Row total in quote currency. */
  rowTotal: Scalars['Float'];
  /** Row total including tax in quote currency. Otherwise, null. */
  rowTotalInclTax?: Maybe<Scalars['Float']>;
  /** Row total with discount in quote currency. Otherwise, null. */
  rowTotalWithDiscount?: Maybe<Scalars['Float']>;
  /** Tax amount in quote currency. Otherwise, null. */
  taxAmount?: Maybe<Scalars['Float']>;
  /** Tax percent. Otherwise, null. */
  taxPercent?: Maybe<Scalars['Float']>;
  /** Item weee tax applied in quote currency. */
  weeeTaxApplied: Scalars['String'];
  /** Item weee tax applied amount in quote currency. */
  weeeTaxAppliedAmount: Scalars['Float'];
};

/** Interface TotalsInterface */
export type QuoteDataTotalSegmentInterface = {
  /** Display area code. */
  area?: Maybe<Scalars['String']>;
  /** Code */
  code: Scalars['String'];
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalSegmentInterface */
  extensionAttributes?: Maybe<QuoteDataTotalSegmentExtensionInterface>;
  /** Total title */
  title?: Maybe<Scalars['String']>;
  /** Total value */
  value: Scalars['Float'];
};

/** ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalSegmentInterface */
export type QuoteDataTotalSegmentExtensionInterface = {
  taxGrandtotalDetails?: Maybe<Array<Maybe<TaxDataGrandTotalDetailsInterface>>>;
  vertexTaxCalculationMessages?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Interface GrandTotalDetailsInterface */
export type TaxDataGrandTotalDetailsInterface = {
  /** Tax amount value */
  amount: Scalars['Float'];
  /** Group identifier */
  groupId: Scalars['Int'];
  /** Tax rates info */
  rates: Array<Maybe<TaxDataGrandTotalRatesInterface>>;
};

/** Interface GrandTotalRatesInterface */
export type TaxDataGrandTotalRatesInterface = {
  /** Tax percentage value */
  percent: Scalars['String'];
  /** Rate title */
  title: Scalars['String'];
};

/** Country Information interface. */
export type DirectoryDataCountryInformationInterface = {
  /** The available regions for the store. */
  availableRegions?: Maybe<Array<Maybe<DirectoryDataRegionInformationInterface>>>;
  /** ExtensionInterface class for @see \Magento\Directory\Api\Data\CountryInformationInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** The country full name (in English) for the store. */
  fullNameEnglish: Scalars['String'];
  /** The country full name (in store locale) for the store. */
  fullNameLocale: Scalars['String'];
  /** The country id for the store. */
  id: Scalars['String'];
  /** The country 3 letter abbreviation for the store. */
  threeLetterAbbreviation: Scalars['String'];
  /** The country 2 letter abbreviation for the store. */
  twoLetterAbbreviation: Scalars['String'];
};

/** Region Information interface. */
export type DirectoryDataRegionInformationInterface = {
  /** Region code */
  code: Scalars['String'];
  /** ExtensionInterface class for @see \Magento\Directory\Api\Data\RegionInformationInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Region id */
  id: Scalars['String'];
  /** Region name */
  name: Scalars['String'];
};

/** Currency Information interface. */
export type DirectoryDataCurrencyInformationInterface = {
  /** The list of allowed currency codes for the store. */
  availableCurrencyCodes: Array<Maybe<Scalars['String']>>;
  /** The base currency code for the store. */
  baseCurrencyCode: Scalars['String'];
  /** The currency symbol of the base currency for the store. */
  baseCurrencySymbol: Scalars['String'];
  /** The default display currency code for the store. */
  defaultDisplayCurrencyCode: Scalars['String'];
  /** The currency symbol of the default display currency for the store. */
  defaultDisplayCurrencySymbol: Scalars['String'];
  /** The list of exchange rate information for the store. */
  exchangeRates: Array<Maybe<DirectoryDataExchangeRateInterface>>;
  /** ExtensionInterface class for @see \Magento\Directory\Api\Data\CurrencyInformationInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
};

/** Exchange Rate interface. */
export type DirectoryDataExchangeRateInterface = {
  /** The currency code associated with the exchange rate. */
  currencyTo: Scalars['String'];
  /** ExtensionInterface class for @see \Magento\Directory\Api\Data\ExchangeRateInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** The exchange rate for the associated currency and the store's base currency. */
  rate: Scalars['Float'];
};

/** Interface SearchResultInterface */
export type FrameworkSearchSearchResultInterface = {
  /** Faceted data */
  aggregations: FrameworkSearchAggregationInterface;
  items: Array<Maybe<FrameworkSearchDocumentInterface>>;
  /** Interface SearchCriteriaInterface */
  searchCriteria: FrameworkSearchSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

/** Faceted data */
export type FrameworkSearchAggregationInterface = {
  /** Document field names */
  bucketNames: Array<Maybe<Scalars['String']>>;
  /** All Document fields */
  buckets: Array<Maybe<FrameworkSearchBucketInterface>>;
};

/** Facet Bucket */
export type FrameworkSearchBucketInterface = {
  /** Field name */
  name: Scalars['String'];
  /** Field values */
  values: Array<Maybe<FrameworkSearchAggregationValueInterface>>;
};

/** Interface \Magento\Framework\Api\Search\AggregationValueInterface */
export type FrameworkSearchAggregationValueInterface = {
  /** Metrics */
  metrics: Array<Maybe<Scalars['String']>>;
  /** Aggregation */
  value: Scalars['String'];
};

/** Interface \Magento\Framework\Api\Search\DocumentInterface */
export type FrameworkSearchDocumentInterface = {
  /** Custom attributes values. */
  customAttributes?: Maybe<Array<Maybe<FrameworkAttributeInterface>>>;
  id: Scalars['Int'];
};

/** Interface SearchCriteriaInterface */
export type FrameworkSearchSearchCriteriaInterface = {
  /** Current page. */
  currentPage?: Maybe<Scalars['Int']>;
  /** A list of filter groups. */
  filterGroups: Array<Maybe<FrameworkSearchFilterGroup>>;
  /** Page size. */
  pageSize?: Maybe<Scalars['Int']>;
  requestName: Scalars['String'];
  /** Sort order. */
  sortOrders?: Maybe<Array<Maybe<FrameworkSortOrder>>>;
};

/** Interface MessageInterface */
export type GiftMessageDataMessageInterface = {
  /** Customer ID. Otherwise, null. */
  customerId?: Maybe<Scalars['Int']>;
  /** ExtensionInterface class for @see \Magento\GiftMessage\Api\Data\MessageInterface */
  extensionAttributes?: Maybe<GiftMessageDataMessageExtensionInterface>;
  /** Gift message ID. Otherwise, null. */
  giftMessageId?: Maybe<Scalars['Int']>;
  /** Message text. */
  message: Scalars['String'];
  /** Recipient name. */
  recipient: Scalars['String'];
  /** Sender name. */
  sender: Scalars['String'];
};

/** ExtensionInterface class for @see \Magento\GiftMessage\Api\Data\MessageInterface */
export type GiftMessageDataMessageExtensionInterface = {
  entityId?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
};

/** Search results for providing pickup locations. */
export type InventoryInStorePickupApiDataSearchResultInterface = {
  /** Items list. */
  items: Array<Maybe<InventoryInStorePickupApiDataPickupLocationInterface>>;
  /** Endpoint used to search Pickup Locations by different parameters: - by attribute filters fields @see \Magento\InventoryInStorePickupApi\Api\Data\SearchRequest\FiltersInterface - by distance to the address @see \Magento\InventoryInStorePickupApi\Api\Data\SearchRequest\AreaInterface Also, endpoint supports paging and sort orders. */
  searchRequest: InventoryInStorePickupApiDataSearchRequestInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

/** Represents sources projection on In-Store Pickup context. Realisation must follow immutable DTO concept. Partial immutability done according to restriction of current Extension Attributes implementation. */
export type InventoryInStorePickupApiDataPickupLocationInterface = {
  /** Pickup Location city. */
  city?: Maybe<Scalars['String']>;
  /** Pickup Location contact name. */
  contactName?: Maybe<Scalars['String']>;
  /** Pickup Location country ID. */
  countryId?: Maybe<Scalars['String']>;
  /** Pickup Location description. */
  description?: Maybe<Scalars['String']>;
  /** Pickup Location contact email. */
  email?: Maybe<Scalars['String']>;
  /** ExtensionInterface class for @see \Magento\InventoryInStorePickupApi\Api\Data\PickupLocationInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Fax contact info. */
  fax?: Maybe<Scalars['String']>;
  /** Pickup Location latitude. */
  latitude?: Maybe<Scalars['Float']>;
  /** Pickup Location longitude. */
  longitude?: Maybe<Scalars['Float']>;
  /** Pickup Location name. */
  name?: Maybe<Scalars['String']>;
  /** Pickup Location phone. */
  phone?: Maybe<Scalars['String']>;
  /** Source code of Pickup Location. */
  pickupLocationCode: Scalars['String'];
  /** Pickup Location postcode. */
  postcode?: Maybe<Scalars['String']>;
  /** Pickup Location region. */
  region?: Maybe<Scalars['String']>;
  /** Pickup Location region ID. */
  regionId?: Maybe<Scalars['Int']>;
  /** Pickup Location street. */
  street?: Maybe<Scalars['String']>;
};

/** Endpoint used to search Pickup Locations by different parameters: - by attribute filters fields @see \Magento\InventoryInStorePickupApi\Api\Data\SearchRequest\FiltersInterface - by distance to the address @see \Magento\InventoryInStorePickupApi\Api\Data\SearchRequest\AreaInterface Also, endpoint supports paging and sort orders. */
export type InventoryInStorePickupApiDataSearchRequestInterface = {
  /** Filter by Distance to the Address. Pickup Locations will be filtered by distance according to the geo-position of the entered address. Required fields for the address are country and one of the field: region or city or postcode. */
  area?: Maybe<InventoryInStorePickupApiDataSearchRequestAreaInterface>;
  /** Current page. */
  currentPage: Scalars['Int'];
  /** ExtensionInterface class for @see \Magento\InventoryInStorePickupApi\Api\Data\SearchRequestInterface */
  extensionAttributes?: Maybe<InventoryInStorePickupApiDataSearchRequestExtensionInterface>;
  /** Filter to filter by Fields. Each field may be filtered with different condition type. Supported condition types restricted by @see \Magento\Framework\Api\SearchCriteriaInterface */
  filters?: Maybe<InventoryInStorePickupApiDataSearchRequestFiltersInterface>;
  /** Page size. */
  pageSize?: Maybe<Scalars['Int']>;
  /** Sales Channel code. */
  scopeCode: Scalars['String'];
  /** Sales Channel Type. */
  scopeType: Scalars['String'];
  /** Sort Order. */
  sort?: Maybe<Array<Maybe<FrameworkSortOrder>>>;
};

/** Filter by Distance to the Address. Pickup Locations will be filtered by distance according to the geo-position of the entered address. Required fields for the address are country and one of the field: region or city or postcode. */
export type InventoryInStorePickupApiDataSearchRequestAreaInterface = {
  /** Search radius in KM. */
  radius: Scalars['Int'];
  /** Search term string. */
  searchTerm: Scalars['String'];
};

/** ExtensionInterface class for @see \Magento\InventoryInStorePickupApi\Api\Data\SearchRequestInterface */
export type InventoryInStorePickupApiDataSearchRequestExtensionInterface = {
  productsInfo?: Maybe<Array<Maybe<InventoryInStorePickupApiDataSearchRequestProductInfoInterface>>>;
};

/** Product Info Data Transfer Object. */
export type InventoryInStorePickupApiDataSearchRequestProductInfoInterface = {
  /** ExtensionInterface class for @see \Magento\InventoryInStorePickupApi\Api\Data\SearchRequest\ProductInfoInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Product SKU. */
  sku: Scalars['String'];
};

/** Filter to filter by Fields. Each field may be filtered with different condition type. Supported condition types restricted by @see \Magento\Framework\Api\SearchCriteriaInterface */
export type InventoryInStorePickupApiDataSearchRequestFiltersInterface = {
  /** Filter for Pickup Location search. */
  city?: Maybe<InventoryInStorePickupApiDataSearchRequestFilterInterface>;
  /** Filter for Pickup Location search. */
  country?: Maybe<InventoryInStorePickupApiDataSearchRequestFilterInterface>;
  /** Filter for Pickup Location search. */
  name?: Maybe<InventoryInStorePickupApiDataSearchRequestFilterInterface>;
  /** Filter for Pickup Location search. */
  pickupLocationCode?: Maybe<InventoryInStorePickupApiDataSearchRequestFilterInterface>;
  /** Filter for Pickup Location search. */
  postcode?: Maybe<InventoryInStorePickupApiDataSearchRequestFilterInterface>;
  /** Filter for Pickup Location search. */
  region?: Maybe<InventoryInStorePickupApiDataSearchRequestFilterInterface>;
  /** Filter for Pickup Location search. */
  regionId?: Maybe<InventoryInStorePickupApiDataSearchRequestFilterInterface>;
  /** Filter for Pickup Location search. */
  street?: Maybe<InventoryInStorePickupApiDataSearchRequestFilterInterface>;
};

/** Filter for Pickup Location search. */
export type InventoryInStorePickupApiDataSearchRequestFilterInterface = {
  /** Condition Type. */
  conditionType: Scalars['String'];
  /** Value. */
  value: Scalars['String'];
};

export type LofAutosearchDataSearchResultInterface = {
  item: LofAutosearchDataItemInterface;
};

export type LofAutosearchDataItemInterface = {
  /** Blog posts */
  blogPosts?: Maybe<Scalars['String']>;
  /** Product total */
  blogTotal: Scalars['Int'];
  /** Product total */
  brandTotal: Scalars['Int'];
  /** Brands */
  brands?: Maybe<Scalars['String']>;
  /** Categories */
  category?: Maybe<Scalars['String']>;
  /** Catalog Category total */
  categoryTotal: Scalars['Int'];
  /** Cms page */
  cmsPage?: Maybe<Scalars['String']>;
  /** Product total */
  cmsTotal: Scalars['Int'];
  /** Faq */
  faq?: Maybe<Scalars['String']>;
  /** Faq total */
  faqTotal: Scalars['Int'];
  /** Products */
  products?: Maybe<Scalars['String']>;
  /** Suggested */
  suggested?: Maybe<Scalars['String']>;
  /** Product total */
  total: Scalars['Int'];
};

export type LofBannerSliderDataBannerInterface = {
  altText: Scalars['String'];
  createdAt: Scalars['String'];
  entityId: Scalars['Int'];
  isEnabled: Scalars['Int'];
  isFeatured: Scalars['Int'];
  link: Scalars['String'];
  proCatId: Scalars['Int'];
  resourceMap?: Maybe<LofBannerSliderDataResourceMapInterface>;
  resourceMapId: Scalars['Int'];
  resourcePath?: Maybe<Scalars['String']>;
  resourceType?: Maybe<Scalars['String']>;
  showSubTitle: Scalars['Int'];
  sliderId: Scalars['String'];
  sortOrder: Scalars['Int'];
  storeId: Scalars['String'];
  subTitle: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type LofBannerSliderDataResourceMapInterface = {
  createdAt: Scalars['String'];
  entityId: Scalars['Int'];
  maxWidth?: Maybe<Scalars['Int']>;
  minWidth?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type LofBannerSliderDataBannerSearchResultInterface = {
  items: Array<Maybe<LofBannerSliderDataBannerInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofBannerSliderDataSliderInterface = {
  banners: Array<Maybe<LofBannerSliderDataBannerInterface>>;
  createdAt: Scalars['String'];
  customerGroupId?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['String']>;
  entityId: Scalars['Int'];
  isEnabled: Scalars['Int'];
  isFeatured: Scalars['Int'];
  isShowTitle: Scalars['Int'];
  startDate?: Maybe<Scalars['String']>;
  storeId?: Maybe<Scalars['Int']>;
  tags: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type LofBannerSliderDataSliderSearchResultInterface = {
  items: Array<Maybe<LofBannerSliderDataSliderInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofChatWootDataChatwootInterface = {
  /** Agent_availability */
  agentAvailability?: Maybe<Scalars['Int']>;
  /** Agent_away_message */
  agentAwayMessage?: Maybe<Scalars['String']>;
  /** Agent_id */
  agentId?: Maybe<Scalars['Int']>;
  /** Agent_name */
  agentName?: Maybe<Scalars['String']>;
  /** Channel_id */
  channelId?: Maybe<Scalars['Int']>;
  /** Channel_name */
  channelName?: Maybe<Scalars['String']>;
  /** Channel_type */
  channelType?: Maybe<Scalars['String']>;
  /** Chatwoot_id */
  chatwootId?: Maybe<Scalars['Int']>;
  /** Created_at */
  createdAt?: Maybe<Scalars['String']>;
  /** Seller_id */
  sellerId?: Maybe<Scalars['Int']>;
  /** Team_id */
  teamId?: Maybe<Scalars['Int']>;
  /** Team_name */
  teamName?: Maybe<Scalars['String']>;
  /** Updated_at */
  updatedAt?: Maybe<Scalars['String']>;
  /** Website_token */
  websiteToken?: Maybe<Scalars['String']>;
  /** Welcome_tagline */
  welcomeTagline?: Maybe<Scalars['String']>;
  /** Welcome_title */
  welcomeTitle?: Maybe<Scalars['String']>;
  /** Widget_color */
  widgetColor?: Maybe<Scalars['String']>;
};

export type LofChatWootDataChatwootSearchResultsInterface = {
  /** Chatwoot list. */
  items: Array<Maybe<LofChatWootDataChatwootInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofFormbuilderDataFormbuilderDesignInterface = {
  /** List design fields */
  fields: Array<Maybe<LofFormbuilderDataFieldDesignInterface>>;
  form: LofFormbuilderDataFormbuilderInterface;
};

export type LofFormbuilderDataFieldDesignInterface = {
  /** Cid */
  cid: Scalars['String'];
  /** Color_label */
  colorLabel?: Maybe<Scalars['String']>;
  /** Color_text */
  colorText?: Maybe<Scalars['String']>;
  /** Field_id */
  fieldId: Scalars['String'];
  /** Field_options */
  fieldOptions: Scalars['String'];
  /** Field_size */
  fieldSize?: Maybe<Scalars['String']>;
  /** Field_type */
  fieldType?: Maybe<Scalars['String']>;
  /** Fieldcol */
  fieldcol: Scalars['Int'];
  /** Font_size */
  fontSize?: Maybe<Scalars['String']>;
  /** Font_weight */
  fontWeight?: Maybe<Scalars['String']>;
  /** Include_blank_option */
  includeBlankOption?: Maybe<Scalars['String']>;
  /** Inline_css */
  inlineCss?: Maybe<Scalars['String']>;
  /** Label */
  label?: Maybe<Scalars['String']>;
  /** Options */
  options?: Maybe<Array<Maybe<LofFormbuilderDataFieldOptionInterface>>>;
  /** Required */
  required: Scalars['Boolean'];
  /** Validation */
  validation?: Maybe<Scalars['String']>;
  /** Wrappercol */
  wrappercol: Scalars['Int'];
};

export type LofFormbuilderDataFieldOptionInterface = {
  /** Checked */
  checked?: Maybe<Scalars['Boolean']>;
  /** Label */
  label?: Maybe<Scalars['String']>;
};

export type LofFormbuilderDataFormbuilderInterface = {
  /** After_form_content */
  afterFormContent: Scalars['String'];
  /** Before_form_content */
  beforeFormContent: Scalars['String'];
  /** Creation_time */
  creationTime: Scalars['String'];
  /** Custom_template */
  customTemplate?: Maybe<Scalars['String']>;
  /** Customergroups */
  customerGroups?: Maybe<Scalars['String']>;
  /** Design */
  design: Scalars['String'];
  /** Design_fields */
  designFields?: Maybe<Array<Maybe<LofFormbuilderDataFieldDesignInterface>>>;
  /** Email_receive */
  emailReceive: Scalars['String'];
  /** Email_template */
  emailTemplate: Scalars['String'];
  /** Enable_tracklink */
  enableTracklink?: Maybe<Scalars['Int']>;
  /** ID */
  formId?: Maybe<Scalars['Int']>;
  /** Identifier */
  identifier: Scalars['String'];
  /** Input_hover_color */
  inputHoverColor?: Maybe<Scalars['String']>;
  /** Meta_description */
  metaDescription?: Maybe<Scalars['String']>;
  /** Meta_keywords */
  metaKeywords?: Maybe<Scalars['String']>;
  /** Page_layout */
  pageLayout: Scalars['String'];
  /** Page_title */
  pageTitle: Scalars['String'];
  /** Redirect_link */
  redirectLink: Scalars['String'];
  /** Sender_email_field */
  senderEmailField?: Maybe<Scalars['String']>;
  /** Sender_name_field */
  senderNameField?: Maybe<Scalars['String']>;
  /** Show_captcha */
  showCaptcha: Scalars['Int'];
  /** Show_toplink */
  showToplink: Scalars['Int'];
  /** Status */
  status: Scalars['Int'];
  /** Submit_background_color */
  submitBackgroundColor?: Maybe<Scalars['String']>;
  /** Submit_button_text */
  submitButtonText: Scalars['String'];
  /** Submit_hover_color */
  submitHoverColor?: Maybe<Scalars['String']>;
  /** Submit_text_color */
  submitTextColor?: Maybe<Scalars['String']>;
  /** Success_message */
  successMessage: Scalars['String'];
  /** Tags */
  tags?: Maybe<Scalars['String']>;
  /** Thanks_email_template */
  thanksEmailTemplate: Scalars['String'];
  /** Thankyou_email_template */
  thankyouEmailTemplate?: Maybe<Scalars['String']>;
  /** Thankyou_field */
  thankyouField?: Maybe<Scalars['String']>;
  /** Form title */
  title: Scalars['String'];
  /** Update_time */
  updateTime: Scalars['String'];
};

export type LofMarketPlaceDataGroupSearchResultsInterface = {
  /** Seller group list. */
  items: Array<Maybe<LofMarketPlaceDataGroupInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofMarketPlaceDataGroupInterface = {
  /** Can_add_product */
  canAddProduct?: Maybe<Scalars['Int']>;
  /** Can_use_message */
  canUseMessage?: Maybe<Scalars['Int']>;
  /** Can_use_shipping */
  canUseShiping?: Maybe<Scalars['Int']>;
  /** Can_use_vacation */
  canUseVacation?: Maybe<Scalars['Int']>;
  /** Can_use_withdrawal */
  canUseWithdrawal?: Maybe<Scalars['Int']>;
  /** Group_id */
  groupId?: Maybe<Scalars['Int']>;
  /** Id */
  id?: Maybe<Scalars['Int']>;
  /** Limit_product */
  limitProduct?: Maybe<Scalars['Int']>;
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Position */
  position?: Maybe<Scalars['Int']>;
  /** Show_in_sidebar */
  showInSidebar?: Maybe<Scalars['Int']>;
  /** Status */
  status?: Maybe<Scalars['Int']>;
  /** Url_key */
  urlKey?: Maybe<Scalars['String']>;
};

export type LofMarketPlaceDataRatingInterface = {
  /** Admin_note */
  adminNote: Scalars['String'];
  /** Answer */
  answer: Scalars['String'];
  /** Created_at */
  createdAt?: Maybe<Scalars['String']>;
  /** Customer_id */
  customerId?: Maybe<Scalars['Int']>;
  /** Detail */
  detail?: Maybe<Scalars['String']>;
  /** Email */
  email?: Maybe<Scalars['String']>;
  /** Guest_email */
  guestEmail?: Maybe<Scalars['String']>;
  /** Id */
  id?: Maybe<Scalars['Int']>;
  /** Is_recommended */
  isRecommended: Scalars['Boolean'];
  /** Like_about */
  likeAbout: Scalars['String'];
  /** Minus_review */
  minusReview: Scalars['Int'];
  /** Nickname */
  nickname?: Maybe<Scalars['String']>;
  /** Not_like_about */
  notLikeAbout: Scalars['String'];
  /** Plus_review */
  plusReview: Scalars['Int'];
  /** Rate1 */
  rate1?: Maybe<Scalars['Int']>;
  /** Rate2 */
  rate2?: Maybe<Scalars['Int']>;
  /** Rate3 */
  rate3?: Maybe<Scalars['Int']>;
  /** Rating */
  rating?: Maybe<Scalars['Int']>;
  /** Rating_id */
  ratingId?: Maybe<Scalars['Int']>;
  /** Report_abuse */
  reportAbuse?: Maybe<Scalars['Int']>;
  /** Seller_id */
  sellerId?: Maybe<Scalars['Int']>;
  /** Status */
  status?: Maybe<Scalars['String']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
  /** Updated_at */
  updatedAt?: Maybe<Scalars['String']>;
  /** Verified_buyer */
  verifiedBuyer: Scalars['Int'];
};

export type LofMarketPlaceDataRatingSearchResultsInterface = {
  /** Seller rating list. */
  items: Array<Maybe<LofMarketPlaceDataRatingInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofMarketPlaceDataReviewSearchResultsInterface = {
  /** Seller rating list. */
  items: Array<Maybe<LofMarketPlaceDataReviewInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofMarketPlaceDataReviewInterface = {
  /** Created_at */
  createdAt?: Maybe<Scalars['String']>;
  /** Customer_id */
  customerId?: Maybe<Scalars['Int']>;
  /** Detail */
  detail?: Maybe<Scalars['String']>;
  /** Id */
  id?: Maybe<Scalars['Int']>;
  /** Is_public */
  isPublic?: Maybe<Scalars['Int']>;
  /** Nickname */
  nickname?: Maybe<Scalars['String']>;
  /** Order_id */
  orderId?: Maybe<Scalars['Int']>;
  /** Product_id */
  productId?: Maybe<Scalars['Int']>;
  /** Rating */
  rating?: Maybe<Scalars['Int']>;
  /** Review_id */
  reviewId?: Maybe<Scalars['Int']>;
  /** Reviewseller_id */
  reviewsellerId?: Maybe<Scalars['Int']>;
  /** Seller_id */
  sellerId?: Maybe<Scalars['Int']>;
  /** Status */
  status?: Maybe<Scalars['Int']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
  /** Type */
  type?: Maybe<Scalars['Int']>;
};

export type LofMarketPlaceDataSellerInterface = {
  /** Address */
  address?: Maybe<Scalars['String']>;
  /** Attribute_set_id */
  attributeSetId?: Maybe<Scalars['Int']>;
  /** Banner_pic */
  bannerPic?: Maybe<Scalars['String']>;
  /** City */
  city?: Maybe<Scalars['String']>;
  /** Commission_id */
  commissionId?: Maybe<Scalars['Int']>;
  /** Company */
  company?: Maybe<Scalars['String']>;
  /** Company_description */
  companyDescription?: Maybe<Scalars['String']>;
  /** Company_locality */
  companyLocality?: Maybe<Scalars['String']>;
  /** Company_url */
  companyUrl?: Maybe<Scalars['String']>;
  /** Contact_number */
  contactNumber?: Maybe<Scalars['String']>;
  /** Country */
  country?: Maybe<Scalars['String']>;
  /** Country_id */
  countryId?: Maybe<Scalars['String']>;
  /** Custom attributes values. */
  customAttributes?: Maybe<Array<Maybe<FrameworkAttributeInterface>>>;
  /** Customer_id */
  customerId?: Maybe<Scalars['String']>;
  /** Duration_of_vendor */
  durationOfVendor?: Maybe<Scalars['String']>;
  /** Email */
  email?: Maybe<Scalars['String']>;
  /** ExtensionInterface class for @see \Lof\MarketPlace\Api\Data\SellerInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Facebook_id */
  facebookId?: Maybe<Scalars['String']>;
  /** Fb_active */
  fbActive?: Maybe<Scalars['String']>;
  /** Gplus_active */
  gplusActive?: Maybe<Scalars['String']>;
  /** Gplus_id */
  gplusId?: Maybe<Scalars['String']>;
  /** Group */
  group?: Maybe<Scalars['String']>;
  /** Group_id */
  groupId?: Maybe<Scalars['Int']>;
  /** Id */
  id?: Maybe<Scalars['Int']>;
  /** Image */
  image?: Maybe<Scalars['String']>;
  /** Instagram_active */
  instagramActive?: Maybe<Scalars['String']>;
  /** Instagram_id */
  instagramId?: Maybe<Scalars['String']>;
  /** Is_searchable */
  isSearchable?: Maybe<Scalars['Int']>;
  /** Latitude */
  latitude?: Maybe<Scalars['Float']>;
  /** Linkedin_active */
  linkedinActive?: Maybe<Scalars['String']>;
  /** Linkedin_id */
  linkedinId?: Maybe<Scalars['String']>;
  /** Logo_pic */
  logoPic?: Maybe<Scalars['String']>;
  /** Longitude */
  longitude?: Maybe<Scalars['Float']>;
  /** Message */
  message?: Maybe<Scalars['String']>;
  /** Meta_description */
  metaDescription?: Maybe<Scalars['String']>;
  /** Meta_keyword */
  metaKeyword?: Maybe<Scalars['String']>;
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Opening_hours */
  openingHours?: Maybe<Scalars['String']>;
  /** Page_layout */
  pageLayout?: Maybe<Scalars['String']>;
  /** Pinterest_active */
  pinterestActive?: Maybe<Scalars['String']>;
  /** Pinterest_id */
  pinterestId?: Maybe<Scalars['String']>;
  /** Position */
  position?: Maybe<Scalars['Int']>;
  /** Postcode */
  postcode?: Maybe<Scalars['String']>;
  /** Product_count */
  productCount?: Maybe<Scalars['Int']>;
  products?: Maybe<LofMarketPlaceDataSellerProductSearchResultsInterface>;
  /** Region */
  region?: Maybe<Scalars['String']>;
  /** Region_id */
  regionId?: Maybe<Scalars['String']>;
  /** Return_policy */
  returnPolicy?: Maybe<Scalars['String']>;
  /** Sale */
  sale?: Maybe<Scalars['String']>;
  /** Seller_id */
  sellerId?: Maybe<Scalars['Int']>;
  sellerRates?: Maybe<LofMarketPlaceDataRatingSearchResultsInterface>;
  sellerReviews?: Maybe<LofMarketPlaceDataReviewSearchResultsInterface>;
  /** Shipping_policy */
  shippingPolicy?: Maybe<Scalars['String']>;
  /** Shop_title */
  shopTitle?: Maybe<Scalars['String']>;
  /** Shop_url */
  shopUrl?: Maybe<Scalars['String']>;
  /** Special_opening_hours */
  specialOpeningHours?: Maybe<Scalars['String']>;
  /** Status */
  status?: Maybe<Scalars['Int']>;
  /** Store_id */
  storeId?: Maybe<Scalars['String']>;
  /** Street */
  street?: Maybe<Scalars['String']>;
  summaryRates?: Maybe<LofMarketPlaceDataSummaryRatingInterface>;
  /** Taxvat */
  taxvat?: Maybe<Scalars['String']>;
  /** Telephone */
  telephone?: Maybe<Scalars['String']>;
  /** Thumbnail */
  thumbnail?: Maybe<Scalars['String']>;
  /** Total_products */
  totalProducts: Scalars['Int'];
  /** Total_reviews */
  totalReviews: Scalars['Int'];
  /** TotalSales */
  totalSales: Scalars['Int'];
  /** Total_sold */
  totalSold?: Maybe<Scalars['Int']>;
  /** Tw_active */
  twActive?: Maybe<Scalars['String']>;
  /** Twitter_id */
  twitterId?: Maybe<Scalars['String']>;
  /** Url */
  url?: Maybe<Scalars['String']>;
  /** Url_key */
  urlKey?: Maybe<Scalars['String']>;
  vacation?: Maybe<LofMarketPlaceDataSellerVacationInterface>;
  /** Verify_status */
  verifyStatus?: Maybe<Scalars['Int']>;
  /** Vimeo_active */
  vimeoActive?: Maybe<Scalars['String']>;
  /** Vimeo_id */
  vimeoId?: Maybe<Scalars['String']>;
  /** Youtube_id */
  youtubeId?: Maybe<Scalars['String']>;
};

export type LofMarketPlaceDataSellerProductSearchResultsInterface = {
  /** Seller list. */
  items: Array<Maybe<LofMarketPlaceDataProductInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofMarketPlaceDataProductInterface = {
  /** Approval */
  approval?: Maybe<Scalars['String']>;
  /** Price */
  attributeSetId: Scalars['Int'];
  /** Created_at */
  createdAt?: Maybe<Scalars['String']>;
  /** ID */
  entityId?: Maybe<Scalars['Int']>;
  /** Has_options */
  hasOptions?: Maybe<Scalars['String']>;
  /** ID */
  id?: Maybe<Scalars['Int']>;
  /** Is_in_stock */
  isInStock: Scalars['Int'];
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Price */
  price?: Maybe<Scalars['Float']>;
  /** Product_id */
  productId?: Maybe<Scalars['Int']>;
  /** ID */
  qty: Scalars['Int'];
  /** Required_options */
  requiredOptions?: Maybe<Scalars['String']>;
  /** Seller_id */
  sellerId?: Maybe<Scalars['String']>;
  /** SKU */
  sku?: Maybe<Scalars['String']>;
  /** Type_id */
  typeId?: Maybe<Scalars['Int']>;
  /** Updated_at */
  updatedAt?: Maybe<Scalars['String']>;
};

export type LofMarketPlaceDataSummaryRatingInterface = {
  /** Average */
  average?: Maybe<Scalars['Float']>;
  /** Count */
  count?: Maybe<Scalars['Int']>;
  /** ExtensionInterface class for @see \Lof\MarketPlace\Api\Data\SummaryRatingInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** PerRate */
  perRate?: Maybe<Scalars['Float']>;
  /** RateFive */
  rateFive?: Maybe<Scalars['Float']>;
  /** RateFour */
  rateFour?: Maybe<Scalars['Float']>;
  /** RateOne */
  rateOne?: Maybe<Scalars['Float']>;
  /** RateThree */
  rateThree?: Maybe<Scalars['Float']>;
  /** RateTwo */
  rateTwo?: Maybe<Scalars['Float']>;
  /** Total_count */
  totalCount?: Maybe<Scalars['Int']>;
  /** Total_rate */
  totalRate?: Maybe<Scalars['Float']>;
};

export type LofMarketPlaceDataSellerVacationInterface = {
  /** Created_at */
  createdAt?: Maybe<Scalars['String']>;
  /** From_date */
  fromDate?: Maybe<Scalars['String']>;
  /** Seller_id */
  sellerId?: Maybe<Scalars['String']>;
  /** Status */
  status?: Maybe<Scalars['String']>;
  /** Text add cart */
  textAddCart?: Maybe<Scalars['String']>;
  /** Text add cart */
  toDate?: Maybe<Scalars['String']>;
  /** Updated_at */
  updatedAt?: Maybe<Scalars['String']>;
  /** Vacation_id */
  vacationId?: Maybe<Scalars['String']>;
  /** Vacation_message */
  vacationMessage?: Maybe<Scalars['String']>;
};

export type LofMarketPlaceDataSellersSearchResultsInterface = {
  /** Seller list. */
  items: Array<Maybe<LofMarketPlaceDataSellerInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofMobileDataMobileNavSidebarInterface = {
  /** Sidebar_bottom_block */
  sidebarBottomBlock?: Maybe<Scalars['String']>;
  /** Static_bottom_text */
  staticBottomText?: Maybe<Scalars['String']>;
};

/** Represents a Review Data object Used fully qualified namespaces in annotations for proper work of WebApi request parser */
export type LofProductReviewsDataReviewDataInterface = {
  /** Cur_page */
  curPage: Scalars['Float'];
  /** Represents a ReviewVote object Used fully qualified namespaces in annotations for proper work of WebApi request parser */
  detailedSummary?: Maybe<LofProductReviewsDataDetailedSummaryInterface>;
  /** Attributes list. */
  items: Array<Maybe<LofProductReviewsDataReviewInterface>>;
  /** Page_size */
  pageSize: Scalars['Float'];
  /** Rating_summary */
  ratingSummary: Scalars['Float'];
  /** Rating_summary_value */
  ratingSummaryValue: Scalars['Float'];
  /** Recomended_percent */
  recomendedPercent: Scalars['Float'];
  /** Total_found */
  totalFound: Scalars['Float'];
  /** Total_records */
  totalRecords: Scalars['Float'];
};

/** Represents a ReviewVote object Used fully qualified namespaces in annotations for proper work of WebApi request parser */
export type LofProductReviewsDataDetailedSummaryInterface = {
  /** Five */
  five: Scalars['Int'];
  /** Rating four */
  four: Scalars['Int'];
  /** Rating one. */
  one: Scalars['Int'];
  /** Rating_summary */
  ratingSummary: Scalars['Float'];
  /** Reviews_count */
  reviewsCount: Scalars['Int'];
  /** Rating three */
  three: Scalars['Int'];
  /** Rating two */
  two: Scalars['Int'];
};

/** Represents a Review object Used fully qualified namespaces in annotations for proper work of WebApi request parser */
export type LofProductReviewsDataReviewInterface = {
  /** Answer */
  answer: Scalars['String'];
  /** Review comments. */
  comments: Array<Maybe<LofProductReviewsDataReplyInterface>>;
  /** Country */
  country: Scalars['String'];
  /** Posted date */
  createdAt: Scalars['String'];
  /** Customer id. */
  customerId?: Maybe<Scalars['Int']>;
  customize: LofProductReviewsDataCustomizeInterface;
  /** Review detail. */
  detail: Scalars['String'];
  /** Entity ID */
  entityPkValue: Scalars['Int'];
  galleries: LofProductReviewsDataGalleryInterface;
  /** Guest_email */
  guestEmail: Scalars['String'];
  /** Review id */
  id: Scalars['Int'];
  /** Review images. */
  images: Array<Maybe<LofProductReviewsDataImageInterface>>;
  /** Is_recommended */
  isRecommended: Scalars['Boolean'];
  /** Like_about */
  likeAbout: Scalars['String'];
  /** Minus_review */
  minusReview: Scalars['Int'];
  /** Author nickname. */
  nickname: Scalars['String'];
  /** Not_like_about */
  notLikeAbout: Scalars['String'];
  /** Plus_review */
  plusReview: Scalars['Int'];
  /** Review ratings. */
  ratings: Array<Maybe<LofProductReviewsDataRatingVoteInterface>>;
  /** Total replies */
  replyTotal: Scalars['Int'];
  /** Report_abuse */
  reportAbuse?: Maybe<Scalars['Int']>;
  /** Review entity type. */
  reviewEntity: Scalars['String'];
  /** Review status. Possible values: 1 - Approved, 2 - Pending, 3 - Not Approved. */
  reviewStatus: Scalars['Int'];
  /** Reviewer type. Possible values: 1 - Customer, 2 - Guest, 3 - Administrator. */
  reviewType: Scalars['Int'];
  /** Store id in which review was added */
  storeId: Scalars['Int'];
  /** Stores in which review is visible */
  stores: Array<Maybe<Scalars['Int']>>;
  /** Review title */
  title: Scalars['String'];
  /** Verified_buyer */
  verifiedBuyer: Scalars['Int'];
};

/** Represents a ReviewVote object Used fully qualified namespaces in annotations for proper work of WebApi request parser */
export type LofProductReviewsDataReplyInterface = {
  /** Rating admin_user_id. */
  adminUserId?: Maybe<Scalars['Int']>;
  /** Rating avatar_url. */
  avatarUrl: Scalars['String'];
  /** Rating created_at. */
  createdAt: Scalars['String'];
  /** Rating customer_id. */
  customerId?: Maybe<Scalars['Int']>;
  /** Rating email_address. */
  emailAddress: Scalars['String'];
  /** Rating parent_reply_id. */
  parentReplyId?: Maybe<Scalars['Int']>;
  /** Rating reply_comment. */
  replyComment: Scalars['String'];
  /** Rating reply_customer_id id. */
  replyCustomerId?: Maybe<Scalars['Int']>;
  /** Rating reply id. */
  replyId?: Maybe<Scalars['Int']>;
  /** Rating reply_title. */
  replyTitle: Scalars['String'];
  /** Rating review_id. */
  reviewId: Scalars['Int'];
  /** Rating status. */
  status: Scalars['Int'];
  /** Rating updated_at. */
  updatedAt: Scalars['String'];
  /** Rating user_name. */
  userName: Scalars['String'];
  /** Rating website. */
  website: Scalars['String'];
};

export type LofProductReviewsDataCustomizeInterface = {
  /** Advantages */
  advantages?: Maybe<Scalars['String']>;
  /** Answer */
  answer?: Maybe<Scalars['String']>;
  /** Avatar_image */
  avatarImage?: Maybe<Scalars['String']>;
  /** Avatar_url */
  avatarUrl?: Maybe<Scalars['String']>;
  /** Average */
  average?: Maybe<Scalars['String']>;
  /** Count_helpful */
  countHelpful?: Maybe<Scalars['Int']>;
  /** Count_unhelpful */
  countUnhelpful?: Maybe<Scalars['Int']>;
  /** Country */
  country?: Maybe<Scalars['String']>;
  /** Disadvantages */
  disadvantages?: Maybe<Scalars['String']>;
  /** Email_address */
  emailAddress?: Maybe<Scalars['String']>;
  /** Is_recommended */
  isRecommended?: Maybe<Scalars['Int']>;
  /** Report_abuse */
  reportAbuse?: Maybe<Scalars['Int']>;
  /** Review_customize_id */
  reviewCustomizeId?: Maybe<Scalars['Int']>;
  /** Review_id */
  reviewId?: Maybe<Scalars['Int']>;
  /** Total_helpful */
  totalHelpful?: Maybe<Scalars['Int']>;
  /** Verified_buyer */
  verifiedBuyer?: Maybe<Scalars['Int']>;
};

export type LofProductReviewsDataGalleryInterface = {
  /** ID */
  id?: Maybe<Scalars['Int']>;
  /** Images */
  images?: Maybe<Scalars['String']>;
  /** Label */
  label?: Maybe<Scalars['String']>;
  /** Review Id */
  reviewId?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Boolean']>;
  /** Value */
  value?: Maybe<Scalars['String']>;
};

/** Represents a ReviewVote object Used fully qualified namespaces in annotations for proper work of WebApi request parser */
export type LofProductReviewsDataImageInterface = {
  /** Full_path. */
  fullPath: Scalars['String'];
  /** Resized_path. */
  resizedPath: Scalars['String'];
};

/** Represents a ReviewVote object Used fully qualified namespaces in annotations for proper work of WebApi request parser */
export type LofProductReviewsDataRatingVoteInterface = {
  /** Rating option_id. */
  optionId: Scalars['Int'];
  /** Review Vote in percent */
  percent: Scalars['Int'];
  /** Rating code. */
  ratingCode: Scalars['String'];
  /** Rating id */
  ratingId: Scalars['Int'];
  /** Rating code. */
  ratingName: Scalars['String'];
  /** Rating review_id. */
  reviewId: Scalars['Int'];
  /** Rating value. */
  value: Scalars['Int'];
  /** Rating vote id. */
  voteId: Scalars['Int'];
};

export type LofProductTagsDataTagSearchResultsInterface = {
  /** Tag list. */
  items: Array<Maybe<LofProductTagsDataTagInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofProductTagsDataTagInterface = {
  /** Identifier */
  identifier?: Maybe<Scalars['String']>;
  /** Products */
  products?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Status */
  status?: Maybe<Scalars['Boolean']>;
  /** StoreId */
  storeId?: Maybe<Scalars['Int']>;
  /** Tag_description */
  tagDescription?: Maybe<Scalars['String']>;
  /** TagID */
  tagId?: Maybe<Scalars['Int']>;
  /** TagTitle */
  tagTitle?: Maybe<Scalars['String']>;
};

export type LofmpBlogDataCommentSearchResultsInterface = {
  /** Post list. */
  items: Array<Maybe<LofmpBlogDataCommentInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofmpBlogDataCommentInterface = {
  /** Admin_id */
  adminId?: Maybe<Scalars['Int']>;
  /** Author_type */
  authorType?: Maybe<Scalars['Int']>;
  /** Value */
  commentId?: Maybe<Scalars['Int']>;
  /** Value */
  content: Scalars['String'];
  /** Value */
  creationTime: Scalars['String'];
  /** Customer_id */
  customerId?: Maybe<Scalars['Int']>;
  /** ExtensionInterface class for @see \Lofmp\Blog\Api\Data\CommentInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Value */
  hasRead?: Maybe<Scalars['Int']>;
  /** Value */
  isActive: Scalars['Int'];
  /** Value */
  parentId?: Maybe<Scalars['Int']>;
  /** Value */
  position?: Maybe<Scalars['Int']>;
  /** Value */
  postId: Scalars['Int'];
  /** Text */
  text: Scalars['String'];
  /** Update_time */
  updateTime?: Maybe<Scalars['String']>;
  /** Value */
  userEmail: Scalars['String'];
  /** Value */
  userName: Scalars['String'];
};

export type LofmpBlogDataCategoryInterface = {
  /** Value */
  canonicalUrl: Scalars['String'];
  /** Value */
  catPosition: Scalars['Int'];
  /** Value */
  categoryId?: Maybe<Scalars['Int']>;
  /** Value */
  comments: Scalars['String'];
  /** Value */
  creationTime: Scalars['String'];
  /** Value */
  description: Scalars['String'];
  /** ExtensionInterface class for @see \Lofmp\Blog\Api\Data\CategoryInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Value */
  identifier: Scalars['String'];
  /** Value */
  image: Scalars['String'];
  /** Value */
  isActive: Scalars['Int'];
  /** Value */
  itemPerPage?: Maybe<Scalars['Int']>;
  /** Value */
  layoutType: Scalars['String'];
  /** Value */
  layoutUpdateXml: Scalars['String'];
  /** Value */
  lgColumnItem: Scalars['Int'];
  /** Value */
  mdColumnItem: Scalars['Int'];
  /** Value */
  metaDescription: Scalars['String'];
  /** Value */
  metaKeywords: Scalars['String'];
  /** Value */
  name: Scalars['String'];
  /** Value */
  orderby: Scalars['String'];
  /** Value */
  pageLayout: Scalars['String'];
  /** Value */
  pageTitle: Scalars['String'];
  /** Value */
  parentId?: Maybe<Scalars['Int']>;
  /** Path */
  path: Scalars['String'];
  /** Value */
  postTemplate: Scalars['String'];
  /** Value */
  postsStyle: Scalars['String'];
  /** Value */
  postsTemplate: Scalars['String'];
  /** Value */
  smColumnItem: Scalars['Int'];
  /** Value */
  stores: Array<Maybe<Scalars['Int']>>;
  /** Value */
  updateTime: Scalars['String'];
  /** Value */
  xsColumnItem: Scalars['Int'];
};

export type LofmpBlogDataCategorySearchResultsInterface = {
  /** Category list. */
  items: Array<Maybe<LofmpBlogDataCategoryInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofmpBlogDataPostInterface = {
  /** Value */
  canonicalUrl: Scalars['String'];
  /** Value */
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Value */
  categoryIdentifiers?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Value */
  categoryIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Value */
  categoryNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Value */
  commentCount?: Maybe<Scalars['Int']>;
  /** Value */
  content: Scalars['String'];
  /** Value */
  creationTime: Scalars['String'];
  /** Value */
  disklike?: Maybe<Scalars['Int']>;
  /** Value */
  enableComment?: Maybe<Scalars['Int']>;
  /** ExtensionInterface class for @see \Lofmp\Blog\Api\Data\PostInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Value */
  filteredContent: Scalars['String'];
  /** Value */
  hits?: Maybe<Scalars['Int']>;
  /** Value */
  identifier: Scalars['String'];
  /** Value */
  image: Scalars['String'];
  /** Value */
  imageType: Scalars['String'];
  /** Value */
  imageVideoId: Scalars['String'];
  /** Value */
  imageVideoType: Scalars['String'];
  /** Value */
  isActive: Scalars['Int'];
  /** Value */
  isPrivate?: Maybe<Scalars['Int']>;
  /** Value */
  like?: Maybe<Scalars['Int']>;
  /** Value */
  metaDescription: Scalars['String'];
  /** Value */
  metaKeywords: Scalars['String'];
  /** Value */
  metaTitle: Scalars['String'];
  /** Value */
  ogDescription: Scalars['String'];
  /** Value */
  ogImg: Scalars['String'];
  /** Value */
  ogMetadata: Scalars['String'];
  /** Value */
  ogTitle: Scalars['String'];
  /** Value */
  ogType: Scalars['String'];
  /** Value */
  pageLayout: Scalars['String'];
  /** Value */
  pageTitle: Scalars['String'];
  /** Value */
  postId?: Maybe<Scalars['Int']>;
  /** Value */
  postsRelated?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Value */
  productsRelated?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Value */
  realImageUrl: Scalars['String'];
  /** Value */
  realPostUrl: Scalars['String'];
  /** Value */
  realThumbnailUrl: Scalars['String'];
  /** Value */
  shortContent: Scalars['String'];
  /** Store_id */
  storeId?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Value */
  stores?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Tag ids */
  tagIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Tag ids */
  tagList?: Maybe<Array<Maybe<LofmpBlogDataTagInterface>>>;
  /** Value */
  tags?: Maybe<Scalars['String']>;
  /** Value */
  thumbnail: Scalars['String'];
  /** Value */
  thumbnailType: Scalars['String'];
  /** Value */
  thumbnailVideoId: Scalars['String'];
  /** Value */
  thumbnailVideoType: Scalars['String'];
  /** Value */
  title: Scalars['String'];
  /** Value */
  updateTime: Scalars['String'];
  /** Value */
  userId?: Maybe<Scalars['Int']>;
};

export type LofmpBlogDataTagInterface = {
  /** Content */
  content?: Maybe<Scalars['String']>;
  /** Custom_layout */
  customLayout?: Maybe<Scalars['String']>;
  /** Custom_layout_update_xml */
  customLayoutUpdateXml?: Maybe<Scalars['String']>;
  /** Custom_theme */
  customTheme?: Maybe<Scalars['String']>;
  /** Custom_theme_from */
  customThemeFrom?: Maybe<Scalars['String']>;
  /** Custom_theme_to */
  customThemeTo?: Maybe<Scalars['String']>;
  /** Identifier */
  identifier?: Maybe<Scalars['String']>;
  /** Is_active */
  isActive?: Maybe<Scalars['String']>;
  /** Layout_update_xml */
  layoutUpdateXml?: Maybe<Scalars['String']>;
  /** Meta_description */
  metaDescription?: Maybe<Scalars['String']>;
  /** Meta_keywords */
  metaKeywords?: Maybe<Scalars['String']>;
  /** Meta_robots */
  metaRobots?: Maybe<Scalars['String']>;
  /** Meta_title */
  metaTitle?: Maybe<Scalars['String']>;
  /** Page_layout */
  pageLayout?: Maybe<Scalars['String']>;
  /** Posts_list_template */
  postsListTemplate?: Maybe<Scalars['String']>;
  /** Posts_per_page */
  postsPerPage?: Maybe<Scalars['String']>;
  /** Tag_id */
  tagId?: Maybe<Scalars['String']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
};

export type LofmpBlogDataPostSearchResultsInterface = {
  /** Post list. */
  items: Array<Maybe<LofmpBlogDataPostInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofmpBlogDataTagSearchResultsInterface = {
  /** Post list. */
  items: Array<Maybe<LofmpBlogDataTagInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofmpCouponCodeDataCouponSearchResultsInterface = {
  /** Coupon list. */
  items: Array<Maybe<LofmpCouponCodeDataCouponInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofmpCouponCodeDataCouponInterface = {
  /** Actions_serialized */
  actionsSerialized?: Maybe<Scalars['String']>;
  /** Alias */
  alias?: Maybe<Scalars['String']>;
  /** Code */
  code?: Maybe<Scalars['String']>;
  /** Conditions_serialized */
  conditionsSerialized?: Maybe<Scalars['String']>;
  /** Coupon_id */
  couponId?: Maybe<Scalars['Int']>;
  /** Couponcode_id */
  couponcodeId?: Maybe<Scalars['Int']>;
  /** Customer_id */
  customerId?: Maybe<Scalars['Int']>;
  /** Description */
  description?: Maybe<Scalars['String']>;
  /** Discount_amount */
  discountAmount: Scalars['Float'];
  /** Email */
  email?: Maybe<Scalars['String']>;
  /** From_date */
  fromDate?: Maybe<Scalars['String']>;
  /** Is_public */
  isPublic?: Maybe<Scalars['Int']>;
  /** Rule_id */
  ruleId?: Maybe<Scalars['Int']>;
  /** Seller_id */
  sellerId?: Maybe<Scalars['Int']>;
  /** Simple_action */
  simpleAction?: Maybe<Scalars['String']>;
  /** Times_used */
  timesUsed?: Maybe<Scalars['Int']>;
  /** To_date */
  toDate?: Maybe<Scalars['String']>;
  /** Usage_limit */
  usageLimit?: Maybe<Scalars['Int']>;
};

export type LofmpRmaDataAddressInterface = {
  address: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  sellerId: Scalars['Int'];
  sortOrder: Scalars['Int'];
};

/** Interface for return address search results. */
export type LofmpRmaDataAddressSearchResultsInterface = {
  /** Return address list. */
  items: Array<Maybe<LofmpRmaDataAddressInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofmpRmaDataConditionInterface = {
  id?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  sortOrder: Scalars['Int'];
};

export type LofmpRmaDataConditionSearchResultsInterface = {
  /** Rmas list. */
  items: Array<Maybe<LofmpRmaDataConditionInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofmpRmaDataFieldInterface = {
  code: Scalars['String'];
  description: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  isActive: Scalars['Boolean'];
  isEditableCustomer: Scalars['Boolean'];
  isRequiredStaff: Scalars['Boolean'];
  isShowInConfirmShipping: Scalars['Boolean'];
  isVisibleCustomer: Scalars['Boolean'];
  name: Scalars['String'];
  sortOrder: Scalars['Int'];
  type: Scalars['String'];
  values: Scalars['String'];
  visibleCustomerStatus: Scalars['String'];
};

/** Interface for field search results. */
export type LofmpRmaDataFieldSearchResultsInterface = {
  /** Fields list. */
  items: Array<Maybe<LofmpRmaDataFieldInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofmpRmaDataQuickResponseInterface = {
  id?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  template: Scalars['String'];
};

/** Interface for quick response search results. */
export type LofmpRmaDataQuickResponseSearchResultsInterface = {
  /** Quick responses list. */
  items: Array<Maybe<LofmpRmaDataQuickResponseInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofmpRmaDataReasonInterface = {
  id?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  sortOrder: Scalars['Int'];
};

export type LofmpRmaDataReasonSearchResultsInterface = {
  /** Rmas list. */
  items: Array<Maybe<LofmpRmaDataReasonInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofmpRmaDataResolutionInterface = {
  id?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  sortOrder: Scalars['Int'];
};

export type LofmpRmaDataResolutionSearchResultsInterface = {
  /** Rmas list. */
  items: Array<Maybe<LofmpRmaDataResolutionInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofmpRmaDataStatusInterface = {
  adminMessage: Scalars['String'];
  code: Scalars['String'];
  customerMessage: Scalars['String'];
  historyMessage: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isShowShipping?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  sortOrder: Scalars['Int'];
};

/** Interface for status search results. */
export type LofmpRmaDataStatusSearchResultsInterface = {
  /** Rmas list. */
  items: Array<Maybe<LofmpRmaDataStatusInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

/** Interface AuthDataInterface */
export type PayPalBraintreeDataAuthDataInterface = {
  /** To success page */
  actionSuccess: Scalars['String'];
  /** Client token */
  clientToken?: Maybe<Scalars['String']>;
  /** Display name */
  displayName: Scalars['String'];
  loggedIn: Scalars['Boolean'];
  /** Current store code */
  storeCode: Scalars['String'];
};

/** Interface AddressInterface */
export type QuoteDataAddressInterface = {
  /** City name */
  city: Scalars['String'];
  /** Company */
  company?: Maybe<Scalars['String']>;
  /** Country id */
  countryId: Scalars['String'];
  /** Custom attributes values. */
  customAttributes?: Maybe<Array<Maybe<FrameworkAttributeInterface>>>;
  /** Customer address id */
  customerAddressId?: Maybe<Scalars['Int']>;
  /** Customer id */
  customerId?: Maybe<Scalars['Int']>;
  /** Billing/shipping email */
  email: Scalars['String'];
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\AddressInterface */
  extensionAttributes?: Maybe<QuoteDataAddressExtensionInterface>;
  /** Fax number */
  fax?: Maybe<Scalars['String']>;
  /** First name */
  firstname: Scalars['String'];
  /** Id */
  id?: Maybe<Scalars['Int']>;
  /** Last name */
  lastname: Scalars['String'];
  /** Middle name */
  middlename?: Maybe<Scalars['String']>;
  /** Postcode */
  postcode: Scalars['String'];
  /** Prefix */
  prefix?: Maybe<Scalars['String']>;
  /** Region name */
  region: Scalars['String'];
  /** Region code */
  regionCode: Scalars['String'];
  /** Region id */
  regionId: Scalars['Int'];
  /** Same as billing flag */
  sameAsBilling?: Maybe<Scalars['Int']>;
  /** Save in address book flag */
  saveInAddressBook?: Maybe<Scalars['Int']>;
  /** Street */
  street: Array<Maybe<Scalars['String']>>;
  /** Suffix */
  suffix?: Maybe<Scalars['String']>;
  /** Telephone number */
  telephone: Scalars['String'];
  /** Vat id */
  vatId?: Maybe<Scalars['String']>;
};

/** ExtensionInterface class for @see \Magento\Quote\Api\Data\AddressInterface */
export type QuoteDataAddressExtensionInterface = {
  discounts?: Maybe<Array<Maybe<SalesRuleDataRuleDiscountInterface>>>;
  pickupLocationCode?: Maybe<Scalars['String']>;
};

/** Rule discount Interface */
export type SalesRuleDataRuleDiscountInterface = {
  /** Discount Data Interface */
  discountData: SalesRuleDataDiscountDataInterface;
  /** Rule ID */
  ruleId: Scalars['Int'];
  /** Rule Label */
  ruleLabel: Scalars['String'];
};

/** Discount Data Interface */
export type SalesRuleDataDiscountDataInterface = {
  /** Amount */
  amount: Scalars['Float'];
  /** Base Amount */
  baseAmount: Scalars['Float'];
  /** Base Original Amount */
  baseOriginalAmount: Scalars['Float'];
  /** Original Amount */
  originalAmount: Scalars['Float'];
};

/** Interface CartInterface */
export type QuoteDataCartInterface = {
  /** Interface AddressInterface */
  billingAddress?: Maybe<QuoteDataAddressInterface>;
  /** Cart conversion date and time. Otherwise, null. */
  convertedAt?: Maybe<Scalars['String']>;
  /** Cart creation date and time. Otherwise, null. */
  createdAt?: Maybe<Scalars['String']>;
  /** Interface CurrencyInterface */
  currency?: Maybe<QuoteDataCurrencyInterface>;
  /** Customer entity interface for API handling. */
  customer: CustomerDataCustomerInterface;
  /** For guest customers, false for logged in customers */
  customerIsGuest?: Maybe<Scalars['Boolean']>;
  /** Notice text */
  customerNote?: Maybe<Scalars['String']>;
  /** Customer notification flag */
  customerNoteNotify?: Maybe<Scalars['Boolean']>;
  /** Customer tax class ID. */
  customerTaxClassId?: Maybe<Scalars['Int']>;
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\CartInterface */
  extensionAttributes?: Maybe<QuoteDataCartExtensionInterface>;
  /** Cart/quote ID. */
  id: Scalars['Int'];
  /** Active status flag value. Otherwise, null. */
  isActive?: Maybe<Scalars['Boolean']>;
  /** Virtual flag value. Otherwise, null. */
  isVirtual?: Maybe<Scalars['Boolean']>;
  /** Array of items. Otherwise, null. */
  items?: Maybe<Array<Maybe<QuoteDataCartItemInterface>>>;
  /** Number of different items or products in the cart. Otherwise, null. */
  itemsCount?: Maybe<Scalars['Int']>;
  /** Total quantity of all cart items. Otherwise, null. */
  itemsQty?: Maybe<Scalars['Float']>;
  /** Original order ID. Otherwise, null. */
  origOrderId?: Maybe<Scalars['Int']>;
  /** Reserved order ID. Otherwise, null. */
  reservedOrderId?: Maybe<Scalars['String']>;
  /** Store identifier */
  storeId: Scalars['Int'];
  /** Cart last update date and time. Otherwise, null. */
  updatedAt?: Maybe<Scalars['String']>;
};

/** Interface CurrencyInterface */
export type QuoteDataCurrencyInterface = {
  /** Base currency code */
  baseCurrencyCode?: Maybe<Scalars['String']>;
  /** Base currency to global currency rate */
  baseToGlobalRate?: Maybe<Scalars['Float']>;
  /** Base currency to quote currency rate */
  baseToQuoteRate?: Maybe<Scalars['Float']>;
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\CurrencyInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Global currency code */
  globalCurrencyCode?: Maybe<Scalars['String']>;
  /** Quote currency code */
  quoteCurrencyCode?: Maybe<Scalars['String']>;
  /** Store currency code */
  storeCurrencyCode?: Maybe<Scalars['String']>;
  /** Store currency to base currency rate */
  storeToBaseRate?: Maybe<Scalars['Float']>;
  /** Store currency to quote currency rate */
  storeToQuoteRate?: Maybe<Scalars['Float']>;
};

/** Customer entity interface for API handling. */
export type CustomerDataCustomerInterface = {
  /** Customer addresses. */
  addresses?: Maybe<Array<Maybe<CustomerDataAddressInterface>>>;
  /** Confirmation */
  confirmation?: Maybe<Scalars['String']>;
  /** Created at time */
  createdAt?: Maybe<Scalars['String']>;
  /** Created in area */
  createdIn?: Maybe<Scalars['String']>;
  /** Custom attributes values. */
  customAttributes?: Maybe<Array<Maybe<FrameworkAttributeInterface>>>;
  /** Default billing address id */
  defaultBilling?: Maybe<Scalars['String']>;
  /** Default shipping address id */
  defaultShipping?: Maybe<Scalars['String']>;
  /** Disable auto group change flag. */
  disableAutoGroupChange?: Maybe<Scalars['Int']>;
  /** In keeping with current security and privacy best practices, be sure you are aware of any potential legal and security risks associated with the storage of customers’ full date of birth (month, day, year) along with other personal identifiers (e.g., full name) before collecting or processing such data. */
  dob?: Maybe<Scalars['String']>;
  /** Email address */
  email: Scalars['String'];
  /** ExtensionInterface class for @see \Magento\Customer\Api\Data\CustomerInterface */
  extensionAttributes?: Maybe<CustomerDataCustomerExtensionInterface>;
  /** First name */
  firstname: Scalars['String'];
  /** Gender */
  gender?: Maybe<Scalars['Int']>;
  /** Group id */
  groupId?: Maybe<Scalars['Int']>;
  /** Customer id */
  id?: Maybe<Scalars['Int']>;
  /** Last name */
  lastname: Scalars['String'];
  /** Middle name */
  middlename?: Maybe<Scalars['String']>;
  /** Prefix */
  prefix?: Maybe<Scalars['String']>;
  /** Store id */
  storeId?: Maybe<Scalars['Int']>;
  /** Suffix */
  suffix?: Maybe<Scalars['String']>;
  /** Tax Vat */
  taxvat?: Maybe<Scalars['String']>;
  /** Updated at time */
  updatedAt?: Maybe<Scalars['String']>;
  /** Website id */
  websiteId?: Maybe<Scalars['Int']>;
};

/** Customer address interface. */
export type CustomerDataAddressInterface = {
  /** City name */
  city?: Maybe<Scalars['String']>;
  /** Company */
  company?: Maybe<Scalars['String']>;
  /** Country code in ISO_3166-2 format */
  countryId?: Maybe<Scalars['String']>;
  /** Custom attributes values. */
  customAttributes?: Maybe<Array<Maybe<FrameworkAttributeInterface>>>;
  /** Customer ID */
  customerId?: Maybe<Scalars['Int']>;
  /** If this address is default billing address */
  defaultBilling?: Maybe<Scalars['Boolean']>;
  /** If this address is default shipping address. */
  defaultShipping?: Maybe<Scalars['Boolean']>;
  /** ExtensionInterface class for @see \Magento\Customer\Api\Data\AddressInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Fax number */
  fax?: Maybe<Scalars['String']>;
  /** First name */
  firstname?: Maybe<Scalars['String']>;
  /** ID */
  id?: Maybe<Scalars['Int']>;
  /** Last name */
  lastname?: Maybe<Scalars['String']>;
  /** Middle name */
  middlename?: Maybe<Scalars['String']>;
  /** Postcode */
  postcode?: Maybe<Scalars['String']>;
  /** Prefix */
  prefix?: Maybe<Scalars['String']>;
  /** Customer address region interface. */
  region?: Maybe<CustomerDataRegionInterface>;
  /** Region ID */
  regionId?: Maybe<Scalars['Int']>;
  /** Street */
  street?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Suffix */
  suffix?: Maybe<Scalars['String']>;
  /** Telephone number */
  telephone?: Maybe<Scalars['String']>;
  /** Vat id */
  vatId?: Maybe<Scalars['String']>;
};

/** Customer address region interface. */
export type CustomerDataRegionInterface = {
  /** ExtensionInterface class for @see \Magento\Customer\Api\Data\RegionInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Region */
  region: Scalars['String'];
  /** Region code */
  regionCode: Scalars['String'];
  /** Region id */
  regionId: Scalars['Int'];
};

/** ExtensionInterface class for @see \Magento\Customer\Api\Data\CustomerInterface */
export type CustomerDataCustomerExtensionInterface = {
  amazonId?: Maybe<Scalars['String']>;
  assistanceAllowed?: Maybe<Scalars['Int']>;
  isSubscribed?: Maybe<Scalars['Boolean']>;
  /** Extended customer custom attributes interface. */
  sellerAttributes?: Maybe<LofMarketPermissionsDataSellerCustomerInterface>;
  vertexCustomerCode?: Maybe<Scalars['String']>;
  vertexCustomerCountry?: Maybe<Scalars['String']>;
};

/** Extended customer custom attributes interface. */
export type LofMarketPermissionsDataSellerCustomerInterface = {
  /** Customer ID. */
  customerId?: Maybe<Scalars['Int']>;
  /** ExtensionInterface class for @see \Lof\MarketPermissions\Api\Data\SellerCustomerInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Get job title. */
  jobTitle?: Maybe<Scalars['String']>;
  /** Seller ID. */
  sellerId?: Maybe<Scalars['Int']>;
  /** Customer status. */
  status?: Maybe<Scalars['Int']>;
  /** Get telephone. */
  telephone?: Maybe<Scalars['String']>;
};

/** ExtensionInterface class for @see \Magento\Quote\Api\Data\CartInterface */
export type QuoteDataCartExtensionInterface = {
  amazonOrderReferenceId?: Maybe<AmazonPaymentDataQuoteLinkInterface>;
  isReorder?: Maybe<Scalars['Int']>;
  shippingAssignments?: Maybe<Array<Maybe<QuoteDataShippingAssignmentInterface>>>;
};

export type AmazonPaymentDataQuoteLinkInterface = {
  /** Amazon order reference id */
  amazonOrderReferenceId: Scalars['String'];
  /** Quote confirmed with amazon */
  confirmed: Scalars['Boolean'];
  id: Scalars['String'];
  /** Quote id */
  quoteId: Scalars['Int'];
  /** Sandbox simulation reference */
  sandboxSimulationReference: Scalars['String'];
};

/** Interface ShippingAssignmentInterface */
export type QuoteDataShippingAssignmentInterface = {
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\ShippingAssignmentInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  items: Array<Maybe<QuoteDataCartItemInterface>>;
  /** Interface ShippingInterface */
  shipping: QuoteDataShippingInterface;
};

/** Interface CartItemInterface */
export type QuoteDataCartItemInterface = {
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\CartItemInterface */
  extensionAttributes?: Maybe<QuoteDataCartItemExtensionInterface>;
  /** Item ID. Otherwise, null. */
  itemId?: Maybe<Scalars['Int']>;
  /** Product name. Otherwise, null. */
  name?: Maybe<Scalars['String']>;
  /** Product price. Otherwise, null. */
  price?: Maybe<Scalars['Float']>;
  /** Product option interface */
  productOption?: Maybe<QuoteDataProductOptionInterface>;
  /** Product type. Otherwise, null. */
  productType?: Maybe<Scalars['String']>;
  /** Product quantity. */
  qty: Scalars['Float'];
  /** Quote id. */
  quoteId: Scalars['String'];
  /** Product SKU. Otherwise, null. */
  sku?: Maybe<Scalars['String']>;
};

/** ExtensionInterface class for @see \Magento\Quote\Api\Data\CartItemInterface */
export type QuoteDataCartItemExtensionInterface = {
  discounts?: Maybe<Array<Maybe<SalesRuleDataRuleDiscountInterface>>>;
  sellerId?: Maybe<Scalars['Int']>;
  sellerName?: Maybe<Scalars['String']>;
  sellerUrl?: Maybe<Scalars['String']>;
};

/** Product option interface */
export type QuoteDataProductOptionInterface = {
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\ProductOptionInterface */
  extensionAttributes?: Maybe<QuoteDataProductOptionExtensionInterface>;
};

/** ExtensionInterface class for @see \Magento\Quote\Api\Data\ProductOptionInterface */
export type QuoteDataProductOptionExtensionInterface = {
  bundleOptions?: Maybe<Array<Maybe<BundleDataBundleOptionInterface>>>;
  configurableItemOptions?: Maybe<Array<Maybe<ConfigurableProductDataConfigurableItemOptionValueInterface>>>;
  customOptions?: Maybe<Array<Maybe<CatalogDataCustomOptionInterface>>>;
  /** Downloadable Option */
  downloadableOption?: Maybe<DownloadableDataDownloadableOptionInterface>;
  groupedOptions?: Maybe<Array<Maybe<GroupedProductDataGroupedOptionsInterface>>>;
};

/** Interface BundleOptionInterface */
export type BundleDataBundleOptionInterface = {
  /** ExtensionInterface class for @see \Magento\Bundle\Api\Data\BundleOptionInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Bundle option id. */
  optionId: Scalars['Int'];
  /** Bundle option quantity. */
  optionQty: Scalars['Int'];
  /** Bundle option selection ids. */
  optionSelections: Array<Maybe<Scalars['Int']>>;
};

/** Interface ConfigurableItemOptionValueInterface */
export type ConfigurableProductDataConfigurableItemOptionValueInterface = {
  /** ExtensionInterface class for @see \Magento\ConfigurableProduct\Api\Data\ConfigurableItemOptionValueInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Option SKU */
  optionId: Scalars['String'];
  /** Item id */
  optionValue?: Maybe<Scalars['Int']>;
};

/** Interface CustomOptionInterface */
export type CatalogDataCustomOptionInterface = {
  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\CustomOptionInterface */
  extensionAttributes?: Maybe<CatalogDataCustomOptionExtensionInterface>;
  /** Option id */
  optionId: Scalars['String'];
  /** Option value */
  optionValue: Scalars['String'];
};

/** ExtensionInterface class for @see \Magento\Catalog\Api\Data\CustomOptionInterface */
export type CatalogDataCustomOptionExtensionInterface = {
  /** Image Content data interface */
  fileInfo?: Maybe<FrameworkDataImageContentInterface>;
};

/** Downloadable Option */
export type DownloadableDataDownloadableOptionInterface = {
  /** The list of downloadable links */
  downloadableLinks: Array<Maybe<Scalars['Int']>>;
};

/** Represents `product item id with qty` of a grouped product. */
export type GroupedProductDataGroupedOptionsInterface = {
  /** ExtensionInterface class for @see \Magento\GroupedProduct\Api\Data\GroupedOptionsInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Associated product id */
  id?: Maybe<Scalars['Int']>;
  /** Associated product qty */
  qty?: Maybe<Scalars['Int']>;
};

/** Interface ShippingInterface */
export type QuoteDataShippingInterface = {
  /** Interface AddressInterface */
  address: QuoteDataAddressInterface;
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\ShippingInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Shipping method */
  method: Scalars['String'];
};

/** Interface PaymentInterface */
export type QuoteDataPaymentInterface = {
  /** Payment additional details */
  additionalData?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\PaymentInterface */
  extensionAttributes?: Maybe<QuoteDataPaymentExtensionInterface>;
  /** Payment method code */
  method: Scalars['String'];
  /** Purchase order number */
  poNumber?: Maybe<Scalars['String']>;
};

/** ExtensionInterface class for @see \Magento\Quote\Api\Data\PaymentInterface */
export type QuoteDataPaymentExtensionInterface = {
  agreementIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Interface ShippingMethodInterface */
export type QuoteDataShippingMethodInterface = {
  /** Shipping amount in store currency. */
  amount: Scalars['Float'];
  /** The value of the availability flag for the current shipping method. */
  available: Scalars['Boolean'];
  /** Shipping amount in base currency. */
  baseAmount: Scalars['Float'];
  /** Shipping carrier code. */
  carrierCode: Scalars['String'];
  /** Shipping carrier title. Otherwise, null. */
  carrierTitle?: Maybe<Scalars['String']>;
  /** Shipping Error message. */
  errorMessage: Scalars['String'];
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\ShippingMethodInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Shipping method code. */
  methodCode: Scalars['String'];
  /** Shipping method title. Otherwise, null. */
  methodTitle?: Maybe<Scalars['String']>;
  /** Shipping price excl tax. */
  priceExclTax: Scalars['Float'];
  /** Shipping price incl tax. */
  priceInclTax: Scalars['Float'];
};

export type LofMobileDataMobileCmsPageInterface = {
  /** Id */
  id?: Maybe<Scalars['Int']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
};

export type LofMobileDataMobileSuggestionTagInterface = {
  /** Num_of_results */
  numOfResults?: Maybe<Scalars['Int']>;
  /** Term */
  term?: Maybe<Scalars['String']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
};

export type LofProductTagsDataTagProductLinkInterface = {
  /** ExtensionInterface class for @see \Lof\ProductTags\Api\Data\TagProductLinkInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  position?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  /** Tag id */
  tagId: Scalars['String'];
};

export type VesMegamenuDataItemInterface = {
  /** After_html */
  afterHtml?: Maybe<Scalars['String']>;
  /** Update_time */
  align?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  animationIn?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  animationTime?: Maybe<Scalars['String']>;
  /** Before_html */
  beforeHtml?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  bgColor?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  bgHoverColor?: Maybe<Scalars['String']>;
  /** Caret */
  caret?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  category?: Maybe<Scalars['String']>;
  /** Disable_bellow */
  childCol?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  childColType?: Maybe<Scalars['String']>;
  /** Structure */
  classes?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  color?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  contentHtml?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  contentType?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  contentWidth?: Maybe<Scalars['String']>;
  /** Event */
  disableBellow?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  dropdownBgcolor?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  dropdownBgimage?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  dropdownBgimagerepeat?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  dropdownBgpositionx?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  dropdownBgpositiony?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  dropdownInlinecss?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  footerHtml?: Maybe<Scalars['String']>;
  /** Current_version */
  headerHtml?: Maybe<Scalars['String']>;
  /** Hover_caret */
  hoverCaret?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  hoverColor?: Maybe<Scalars['String']>;
  /** Hover_icon */
  hoverIcon?: Maybe<Scalars['String']>;
  /** Width */
  icon?: Maybe<Scalars['String']>;
  /** Design */
  iconClasses?: Maybe<Scalars['String']>;
  /** Desktop_template */
  iconPosition?: Maybe<Scalars['String']>;
  /** Id */
  id?: Maybe<Scalars['String']>;
  /** Inline_css */
  inlinceCss?: Maybe<Scalars['String']>;
  /** Params */
  isGroup?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  isgroupLevel?: Maybe<Scalars['String']>;
  /** Item_id */
  itemId?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  leftSidebarHtml?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  leftSidebarWidth?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  link?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  linkType?: Maybe<Scalars['String']>;
  /** Menu_id */
  menuId?: Maybe<Scalars['String']>;
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  parentcat?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  rightSidebarHtml?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  rightSidebarWidth?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  showContent?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  showFooter?: Maybe<Scalars['String']>;
  /** Scrolltofix */
  showHeader?: Maybe<Scalars['String']>;
  /** Classes */
  showIcon?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  showLeftSidebar?: Maybe<Scalars['String']>;
  /** Show_name */
  showName?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  showRightSidebar?: Maybe<Scalars['String']>;
  /** Disable_iblocks */
  status?: Maybe<Scalars['String']>;
  /** Sub_height */
  subHeight?: Maybe<Scalars['String']>;
  /** Creation_time */
  subWidth?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  submenuSorttype?: Maybe<Scalars['String']>;
  /** Tab_position */
  tabPosition?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  target?: Maybe<Scalars['String']>;
};

export type VesMegamenuDataItemSearchResultsInterface = {
  /** Menu list. */
  items: Array<Maybe<VesMegamenuDataItemInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type VesMegamenuDataMenuFrontendInterface = {
  /** Alias */
  alias?: Maybe<Scalars['String']>;
  /** Classes */
  classes?: Maybe<Scalars['String']>;
  /** Creation_time */
  cretionTime?: Maybe<Scalars['String']>;
  /** Current_version */
  currentVersion?: Maybe<Scalars['String']>;
  /** Customer_group_ids ids */
  customerGroupIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  designStyle?: Maybe<VesMegamenuDataDesignStyleInterface>;
  /** Desktop_template */
  desktopTemplate?: Maybe<Scalars['String']>;
  /** Disable_bellow */
  disableBellow?: Maybe<Scalars['String']>;
  /** Disable_iblocks */
  disableIblocks?: Maybe<Scalars['String']>;
  /** Event */
  event?: Maybe<Scalars['String']>;
  /** Menu_id */
  menuId?: Maybe<Scalars['Int']>;
  /** Mobile_menu_alias */
  mobileMenuAlias?: Maybe<Scalars['String']>;
  /** Mobile_template */
  mobileTemplate?: Maybe<Scalars['String']>;
  /** Nodes */
  nodes?: Maybe<Array<Maybe<VesMegamenuDataMenuTreeItemInterface>>>;
  /** Revert_next */
  revertNext?: Maybe<Scalars['String']>;
  /** Revert_previous */
  revertPrevious?: Maybe<Scalars['String']>;
  /** Scrolltofix */
  scrolltofix?: Maybe<Scalars['String']>;
  /** Scrolltofixed */
  scrolltofixed?: Maybe<Scalars['Int']>;
  /** Store ids */
  storeId?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Update_time */
  updateTime?: Maybe<Scalars['String']>;
  /** Version_id */
  versionId?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Width */
  width?: Maybe<Scalars['String']>;
};

export type VesMegamenuDataDesignStyleInterface = {
  /** Background */
  background?: Maybe<Scalars['String']>;
  /** Border_bottom_left_radius */
  borderBottomLeftRadius?: Maybe<Scalars['String']>;
  /** Border_bottom_right_radius */
  borderBottomRightRadius?: Maybe<Scalars['String']>;
  /** Border_bottom_width */
  borderBottomWidth?: Maybe<Scalars['String']>;
  /** Border_color */
  borderColor?: Maybe<Scalars['String']>;
  /** Border_left_width */
  borderLeftWidth?: Maybe<Scalars['String']>;
  /** Border_style */
  borderStyle?: Maybe<Scalars['String']>;
  /** Border_top_left_radius */
  borderTopLeftRadius?: Maybe<Scalars['String']>;
  /** Border_top_right_radius */
  borderTopRightRadius?: Maybe<Scalars['String']>;
  /** Border_top_width */
  borderTopWidth?: Maybe<Scalars['String']>;
  /** Border_units */
  borderUnits?: Maybe<Scalars['String']>;
  /** Boxshadow_blur */
  boxshadowBlur?: Maybe<Scalars['String']>;
  /** Boxshadow_color */
  boxshadowColor?: Maybe<Scalars['String']>;
  /** Boxshadow_inset */
  boxshadowInset?: Maybe<Scalars['String']>;
  /** Boxshadow_spread */
  boxshadowSpread?: Maybe<Scalars['String']>;
  /** Boxshadow_units */
  boxshadowUnits?: Maybe<Scalars['String']>;
  /** Boxshadow_x */
  boxshadowX?: Maybe<Scalars['String']>;
  /** Boxshadow_y */
  boxshadowY?: Maybe<Scalars['String']>;
  /** ExtensionInterface class for @see \Ves\Megamenu\Api\Data\DesignStyleInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Font_char_subset */
  fontCharSubset?: Maybe<Scalars['String']>;
  /** Font_custom */
  fontCustom?: Maybe<Scalars['String']>;
  /** Font_google */
  fontGoogle?: Maybe<Scalars['String']>;
  /** Font_group */
  fontGroup?: Maybe<Scalars['String']>;
  /** Font_size */
  fontSize?: Maybe<Scalars['String']>;
  /** Font_weight */
  fontWeight?: Maybe<Scalars['String']>;
  /** Margin_bottom */
  marginBottom?: Maybe<Scalars['String']>;
  /** Margin_left */
  marginLeft?: Maybe<Scalars['String']>;
  /** Margin_right */
  marginRight?: Maybe<Scalars['String']>;
  /** Margin_top */
  marginTop?: Maybe<Scalars['String']>;
  /** Margin_units */
  marginUnits?: Maybe<Scalars['String']>;
  /** Padding_bottom */
  paddingBottom?: Maybe<Scalars['String']>;
  /** Padding_left */
  paddingLeft?: Maybe<Scalars['String']>;
  /** Padding_right */
  paddingRight?: Maybe<Scalars['String']>;
  /** Padding_top */
  paddingTop?: Maybe<Scalars['String']>;
  /** Padding_units */
  paddingUnits?: Maybe<Scalars['String']>;
  /** Radius_units */
  radiusUnits?: Maybe<Scalars['String']>;
  /** Width */
  width?: Maybe<Scalars['String']>;
};

export type VesMegamenuDataMenuTreeItemInterface = {
  /** After_html */
  afterHtml?: Maybe<Scalars['String']>;
  /** Update_time */
  align?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  animationIn?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  animationTime?: Maybe<Scalars['String']>;
  /** Before_html */
  beforeHtml?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  bgColor?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  bgHoverColor?: Maybe<Scalars['String']>;
  /** Caret */
  caret?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  category?: Maybe<Scalars['String']>;
  /** Disable_bellow */
  childCol?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  childColType?: Maybe<Scalars['String']>;
  /** Child_nodes */
  childNodes?: Maybe<Array<Maybe<VesMegamenuDataMenuTreeItemInterface>>>;
  /** Structure */
  classes?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  color?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  contentHtml?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  contentType?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  contentWidth?: Maybe<Scalars['String']>;
  /** Event */
  disableBellow?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  dropdownBgcolor?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  dropdownBgimage?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  dropdownBgimagerepeat?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  dropdownBgpositionx?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  dropdownBgpositiony?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  dropdownInlinecss?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  footerHtml?: Maybe<Scalars['String']>;
  /** Current_version */
  headerHtml?: Maybe<Scalars['String']>;
  /** Hover_caret */
  hoverCaret?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  hoverColor?: Maybe<Scalars['String']>;
  /** Hover_icon */
  hoverIcon?: Maybe<Scalars['String']>;
  /** Width */
  icon?: Maybe<Scalars['String']>;
  /** Design */
  iconClasses?: Maybe<Scalars['String']>;
  /** Desktop_template */
  iconPosition?: Maybe<Scalars['String']>;
  /** Inline_css */
  inlinceCss?: Maybe<Scalars['String']>;
  /** Params */
  isGroup?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  isgroupLevel?: Maybe<Scalars['String']>;
  /** Item_id */
  itemId?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  leftSidebarHtml?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  leftSidebarWidth?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  link?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  linkType?: Maybe<Scalars['String']>;
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  parentcat?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  rightSidebarHtml?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  rightSidebarWidth?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  showContent?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  showFooter?: Maybe<Scalars['String']>;
  /** Scrolltofix */
  showHeader?: Maybe<Scalars['String']>;
  /** Classes */
  showIcon?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  showLeftSidebar?: Maybe<Scalars['String']>;
  /** Show_name */
  showName?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  showRightSidebar?: Maybe<Scalars['String']>;
  /** Disable_iblocks */
  status?: Maybe<Scalars['String']>;
  /** Sub_height */
  subHeight?: Maybe<Scalars['String']>;
  /** Creation_time */
  subWidth?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  submenuSorttype?: Maybe<Scalars['String']>;
  /** Tab_position */
  tabPosition?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  target?: Maybe<Scalars['String']>;
};

export type Mutation = {
  /**
   *
   *
   * Equivalent to PUT /V1/amazon-billing-address/{amazonOrderReferenceId}
   */
  amazonPaymentAddressManagementV1GetBillingAddressPut?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to PUT /V1/amazon-shipping-address/{amazonOrderReferenceId}
   */
  amazonPaymentAddressManagementV1GetShippingAddressPut?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to DELETE /V1/amazon/order-ref
   */
  amazonPaymentOrderInformationManagementV1RemoveOrderReferenceDelete?: Maybe<ErrorResponse>;
  /**
   * Set payment information and place order for a specified cart.
   *
   * Equivalent to POST /V1/guest-carts/{cartId}/payment-information
   */
  checkoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost?: Maybe<Scalars['Int']>;
  /**
   * Set payment information for a specified cart.
   *
   * Equivalent to POST /V1/guest-carts/{cartId}/set-payment-information
   */
  checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost?: Maybe<Scalars['Int']>;
  /**
   *
   *
   * Equivalent to POST /V1/guest-carts/{cartId}/shipping-information
   */
  checkoutGuestShippingInformationManagementV1SaveAddressInformationPost?: Maybe<CheckoutDataPaymentDetailsInterface>;
  /**
   * Calculate quote totals based on address and shipping method.
   *
   * Equivalent to POST /V1/guest-carts/{cartId}/totals-information
   */
  checkoutGuestTotalsInformationManagementV1CalculatePost?: Maybe<QuoteDataTotalsInterface>;
  /**
   * Create customer account. Perform necessary business operations like sending email.
   *
   * Equivalent to POST /V1/customers
   */
  customerAccountManagementV1CreateAccountPost?: Maybe<CustomerDataCustomerInterface>;
  /**
   * Send an email to the customer with a password reset link.
   *
   * Equivalent to PUT /V1/customers/password
   */
  customerAccountManagementV1InitiatePasswordResetPut?: Maybe<Scalars['Boolean']>;
  /**
   * Check if given email is associated with a customer account in given website.
   *
   * Equivalent to POST /V1/customers/isEmailAvailable
   */
  customerAccountManagementV1IsEmailAvailablePost?: Maybe<Scalars['Boolean']>;
  /**
   * Reset customer password.
   *
   * Equivalent to POST /V1/customers/resetPassword
   */
  customerAccountManagementV1ResetPasswordPost?: Maybe<Scalars['Boolean']>;
  /**
   * Send And Save request.
   *
   * Equivalent to POST /V1/contact/post
   */
  ecomteckAdvancedContactRequestRepositoryV1SavePost?: Maybe<EcomteckAdvancedContactDataRequestInterface>;
  /**
   * Set the gift message for an entire order.
   *
   * Equivalent to POST /V1/guest-carts/{cartId}/gift-message
   */
  giftMessageGuestCartRepositoryV1SavePost?: Maybe<Scalars['Boolean']>;
  /**
   * Set the gift message for a specified item in a specified shopping cart.
   *
   * Equivalent to POST /V1/guest-carts/{cartId}/gift-message/{itemId}
   */
  giftMessageGuestItemRepositoryV1SavePost?: Maybe<Scalars['Boolean']>;
  /**
   * Create access token for admin given the admin credentials.
   *
   * Equivalent to POST /V1/integration/admin/token
   */
  integrationAdminTokenServiceV1CreateAdminAccessTokenPost?: Maybe<Scalars['String']>;
  /**
   * Create access token for admin given the customer credentials.
   *
   * Equivalent to POST /V1/integration/customer/token
   */
  integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost?: Maybe<Scalars['String']>;
  /**
   * Delete chatwoot by ID
   *
   * Equivalent to DELETE /V1/lof-chatwoot/chatwoot/{chatwootId}
   */
  lofChatWootChatwootRepositoryV1DeleteByIdDelete?: Maybe<Scalars['Boolean']>;
  /**
   * Save chatwoot
   *
   * Equivalent to POST /V1/lof-chatwoot/chatwoot
   */
  lofChatWootChatwootRepositoryV1SavePost?: Maybe<LofChatWootDataChatwootInterface>;
  /**
   * Save chatwoot
   *
   * Equivalent to PUT /V1/lof-chatwoot/chatwoot/{chatwootId}
   */
  lofChatWootChatwootRepositoryV1SavePut?: Maybe<LofChatWootDataChatwootInterface>;
  /**
   * Save chatwoot
   *
   * Equivalent to PUT /V1/lof-chatwoot/chatwoot/{sellerId}
   */
  lofChatWootChatwootRepositoryV1UpdateChatPut?: Maybe<LofChatWootDataChatwootInterface>;
  /**
   * POST create Seller Order
   *
   * Equivalent to POST /V1/seller/createorder/{orderId}
   */
  lofMarketPlaceSalesRepositoryV1CreateSellerOrderPost?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /V1/seller/register
   */
  lofMarketPlaceSellersRepositoryV1RegisterNewSellerPost?: Maybe<LofMarketPlaceDataSellerInterface>;
  /**
   * Save review Reply by guest.
   *
   * Equivalent to POST /V1/reviews/guest/reply
   */
  lofProductReviewsReviewRepositoryV1ReplyByGuestPost?: Maybe<LofProductReviewsDataReplyInterface>;
  /**
   * Apple Login
   *
   * Equivalent to POST /V1/lofmobile/appleLogin
   */
  lofmobileSocialLoginV1AppleLoginPost?: Maybe<Scalars['String']>;
  /**
   * Social Login
   *
   * Equivalent to POST /V1/lofmobile/social_login
   */
  lofmobileSocialLoginV1LoginPost?: Maybe<Scalars['String']>;
  /**
   * Set payment information and place order for a specified cart.
   *
   * Equivalent to POST /V1/splitCartGuest/{cartId}/{sellerUrl}/payment-information
   */
  lofmpSplitCartGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost?: Maybe<Scalars['Int']>;
  /**
   * Init Split cart for guest
   *
   * Equivalent to POST /V1/splitCartGuest/{cartId}/{sellerUrl}/init-checkout
   */
  lofmpSplitCartQuoteRepositoryV1InitSplitOrderGuestPost?: Maybe<LofmpSplitCartDataQuoteInterface>;
  /**
   * Delete split cart for guest, clear split cart for guest
   *
   * Equivalent to DELETE /V1/splitCartGuest/remove/{cartId}
   */
  lofmpSplitCartQuoteRepositoryV1RemoveSplitCartGuestDelete?: Maybe<Scalars['Boolean']>;
  /**
   * Assign a specified billing address to a specified cart.
   *
   * Equivalent to POST /V1/guest-carts/{cartId}/billing-address
   */
  quoteGuestBillingAddressManagementV1AssignPost?: Maybe<Scalars['Int']>;
  /**
   * Remove the specified item from the specified cart.
   *
   * Equivalent to DELETE /V1/guest-carts/{cartId}/items/{itemId}
   */
  quoteGuestCartItemRepositoryV1DeleteByIdDelete?: Maybe<Scalars['Boolean']>;
  /**
   * Add/update the specified cart item.
   *
   * Equivalent to POST /V1/guest-carts/{cartId}/items
   */
  quoteGuestCartItemRepositoryV1SavePost?: Maybe<QuoteDataCartItemInterface>;
  /**
   * Add/update the specified cart item.
   *
   * Equivalent to PUT /V1/guest-carts/{cartId}/items/{itemId}
   */
  quoteGuestCartItemRepositoryV1SavePut?: Maybe<QuoteDataCartItemInterface>;
  /**
   * Enable an customer or guest user to create an empty cart and quote for an anonymous customer.
   *
   * Equivalent to POST /V1/guest-carts
   */
  quoteGuestCartManagementV1CreateEmptyCartPost?: Maybe<Scalars['String']>;
  /**
   * Place an order for a specified cart.
   *
   * Equivalent to PUT /V1/guest-carts/{cartId}/order
   */
  quoteGuestCartManagementV1PlaceOrderPut?: Maybe<Scalars['Int']>;
  /**
   * Set shipping/billing methods and additional data for cart and collect totals for guest.
   *
   * Equivalent to PUT /V1/guest-carts/{cartId}/collect-totals
   */
  quoteGuestCartTotalManagementV1CollectTotalsPut?: Maybe<QuoteDataTotalsInterface>;
  /**
   * Delete a coupon from a specified cart.
   *
   * Equivalent to DELETE /V1/guest-carts/{cartId}/coupons
   */
  quoteGuestCouponManagementV1RemoveDelete?: Maybe<Scalars['Boolean']>;
  /**
   * Add a coupon by code to a specified cart.
   *
   * Equivalent to PUT /V1/guest-carts/{cartId}/coupons/{couponCode}
   */
  quoteGuestCouponManagementV1SetPut?: Maybe<Scalars['Boolean']>;
  /**
   * Add a specified payment method to a specified shopping cart.
   *
   * Equivalent to PUT /V1/guest-carts/{cartId}/selected-payment-method
   */
  quoteGuestPaymentMethodManagementV1SetPut?: Maybe<Scalars['Int']>;
  /**
   * Estimate shipping by address and return list of available shipping methods
   *
   * Equivalent to POST /V1/guest-carts/{cartId}/estimate-shipping-methods
   */
  quoteGuestShipmentEstimationV1EstimateByExtendedAddressPost?: Maybe<Array<Maybe<QuoteDataShippingMethodInterface>>>;
  /**
   * Add a tracked event.
   *
   * Equivalent to POST /V1/elasticsuite-tracker/hit
   */
  smileElasticsuiteTrackerCustomerTrackingServiceV1HitPost?: Maybe<ErrorResponse>;
  /**
   *
   *
   * Equivalent to POST /V1/vertex-address-validation/vertex-address
   */
  vertexAddressValidationAddressManagementV1GetValidAddressPost?: Maybe<QuoteDataAddressInterface>;
  /**
   * Query Vertex to cleanse an address
   *
   * Equivalent to POST /V1/guest-address/cleanse
   */
  vertexAddressValidationApiGuestCleanseAddressV1CleanseAddressPost?: Maybe<VertexAddressValidationApiDataCleansedAddressInterface>;
  /**
   * Send Order Info to email address
   *
   * Equivalent to POST /V1/ves-trackorder/send
   */
  vesTrackorderTrackOrderRepositoryV1SendPost?: Maybe<Scalars['String']>;
  /**
   * Track Order Info
   *
   * Equivalent to POST /V1/ves-trackorder/track
   */
  vesTrackorderTrackOrderRepositoryV1TrackPost?: Maybe<SalesDataOrderInterface>;
};


export type MutationamazonPaymentAddressManagementV1GetBillingAddressPutArgs = {
  amazonOrderReferenceId: Scalars['String'];
  v1AmazonBillingAddressInput?: InputMaybe<V1AmazonBillingAddressInput>;
};


export type MutationamazonPaymentAddressManagementV1GetShippingAddressPutArgs = {
  amazonOrderReferenceId: Scalars['String'];
  v1AmazonShippingAddressInput?: InputMaybe<V1AmazonShippingAddressInput>;
};


export type MutationcheckoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPostArgs = {
  cartId: Scalars['String'];
  v1GuestCartPaymentInformationInput?: InputMaybe<V1GuestCartPaymentInformationInput>;
};


export type MutationcheckoutGuestPaymentInformationManagementV1SavePaymentInformationPostArgs = {
  cartId: Scalars['String'];
  v1GuestCartSetPaymentInformationInput?: InputMaybe<V1GuestCartSetPaymentInformationInput>;
};


export type MutationcheckoutGuestShippingInformationManagementV1SaveAddressInformationPostArgs = {
  cartId: Scalars['String'];
  v1GuestCartShippingInformationInput?: InputMaybe<V1GuestCartShippingInformationInput>;
};


export type MutationcheckoutGuestTotalsInformationManagementV1CalculatePostArgs = {
  cartId: Scalars['String'];
  v1GuestCartTotalsInformationInput?: InputMaybe<V1GuestCartTotalsInformationInput>;
};


export type MutationcustomerAccountManagementV1CreateAccountPostArgs = {
  v1CustomersInput?: InputMaybe<V1CustomersInput>;
};


export type MutationcustomerAccountManagementV1InitiatePasswordResetPutArgs = {
  v1CustomersPasswordInput?: InputMaybe<V1CustomersPasswordInput>;
};


export type MutationcustomerAccountManagementV1IsEmailAvailablePostArgs = {
  v1CustomersIsEmailAvailableInput?: InputMaybe<V1CustomersIsEmailAvailableInput>;
};


export type MutationcustomerAccountManagementV1ResetPasswordPostArgs = {
  v1CustomersResetPasswordInput?: InputMaybe<V1CustomersResetPasswordInput>;
};


export type MutationecomteckAdvancedContactRequestRepositoryV1SavePostArgs = {
  v1ContactPostInput?: InputMaybe<V1ContactPostInput>;
};


export type MutationgiftMessageGuestCartRepositoryV1SavePostArgs = {
  cartId: Scalars['String'];
  v1GuestCartGiftMessageInput?: InputMaybe<V1GuestCartGiftMessageInput>;
};


export type MutationgiftMessageGuestItemRepositoryV1SavePostArgs = {
  cartId: Scalars['String'];
  itemId: Scalars['Int'];
  v1GuestCartGiftMessageInput?: InputMaybe<V1GuestCartGiftMessageInput>;
};


export type MutationintegrationAdminTokenServiceV1CreateAdminAccessTokenPostArgs = {
  v1IntegrationAdminTokenInput?: InputMaybe<V1IntegrationAdminTokenInput>;
};


export type MutationintegrationCustomerTokenServiceV1CreateCustomerAccessTokenPostArgs = {
  v1IntegrationCustomerTokenInput?: InputMaybe<V1IntegrationCustomerTokenInput>;
};


export type MutationlofChatWootChatwootRepositoryV1DeleteByIdDeleteArgs = {
  chatwootId: Scalars['String'];
};


export type MutationlofChatWootChatwootRepositoryV1SavePostArgs = {
  v1LofChatwootChatwootInput?: InputMaybe<V1LofChatwootChatwootInput>;
};


export type MutationlofChatWootChatwootRepositoryV1SavePutArgs = {
  chatwootId: Scalars['String'];
  v1LofChatwootChatwootInput?: InputMaybe<V1LofChatwootChatwootInput>;
};


export type MutationlofChatWootChatwootRepositoryV1UpdateChatPutArgs = {
  sellerId: Scalars['Int'];
  v1LofChatwootChatwootInput?: InputMaybe<V1LofChatwootChatwootInput>;
};


export type MutationlofMarketPlaceSalesRepositoryV1CreateSellerOrderPostArgs = {
  orderId: Scalars['String'];
};


export type MutationlofMarketPlaceSellersRepositoryV1RegisterNewSellerPostArgs = {
  v1SellerRegisterInput?: InputMaybe<V1SellerRegisterInput>;
};


export type MutationlofProductReviewsReviewRepositoryV1ReplyByGuestPostArgs = {
  v1ReviewsGuestReplyInput?: InputMaybe<V1ReviewsGuestReplyInput>;
};


export type MutationlofmobileSocialLoginV1AppleLoginPostArgs = {
  v1LofmobileAppleLoginInput?: InputMaybe<V1LofmobileAppleLoginInput>;
};


export type MutationlofmobileSocialLoginV1LoginPostArgs = {
  v1LofmobileSocialLoginInput?: InputMaybe<V1LofmobileSocialLoginInput>;
};


export type MutationlofmpSplitCartGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPostArgs = {
  cartId: Scalars['String'];
  sellerUrl: Scalars['String'];
  v1SplitCartGuestPaymentInformationInput?: InputMaybe<V1SplitCartGuestPaymentInformationInput>;
};


export type MutationlofmpSplitCartQuoteRepositoryV1InitSplitOrderGuestPostArgs = {
  cartId: Scalars['String'];
  sellerUrl: Scalars['String'];
};


export type MutationlofmpSplitCartQuoteRepositoryV1RemoveSplitCartGuestDeleteArgs = {
  cartId: Scalars['String'];
};


export type MutationquoteGuestBillingAddressManagementV1AssignPostArgs = {
  cartId: Scalars['String'];
  v1GuestCartBillingAddressInput?: InputMaybe<V1GuestCartBillingAddressInput>;
};


export type MutationquoteGuestCartItemRepositoryV1DeleteByIdDeleteArgs = {
  cartId: Scalars['String'];
  itemId: Scalars['Int'];
};


export type MutationquoteGuestCartItemRepositoryV1SavePostArgs = {
  cartId: Scalars['String'];
  v1GuestCartItems2Input?: InputMaybe<V1GuestCartItems2Input>;
};


export type MutationquoteGuestCartItemRepositoryV1SavePutArgs = {
  cartId: Scalars['String'];
  itemId: Scalars['String'];
  v1GuestCartItemInput?: InputMaybe<V1GuestCartItemInput>;
};


export type MutationquoteGuestCartManagementV1PlaceOrderPutArgs = {
  cartId: Scalars['String'];
  v1GuestCartOrderInput?: InputMaybe<V1GuestCartOrderInput>;
};


export type MutationquoteGuestCartTotalManagementV1CollectTotalsPutArgs = {
  cartId: Scalars['String'];
  v1GuestCartCollectTotalsInput?: InputMaybe<V1GuestCartCollectTotalsInput>;
};


export type MutationquoteGuestCouponManagementV1RemoveDeleteArgs = {
  cartId: Scalars['String'];
};


export type MutationquoteGuestCouponManagementV1SetPutArgs = {
  cartId: Scalars['String'];
  couponCode: Scalars['String'];
};


export type MutationquoteGuestPaymentMethodManagementV1SetPutArgs = {
  cartId: Scalars['String'];
  v1GuestCartSelectedPaymentMethodInput?: InputMaybe<V1GuestCartSelectedPaymentMethodInput>;
};


export type MutationquoteGuestShipmentEstimationV1EstimateByExtendedAddressPostArgs = {
  cartId: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  v1GuestCartEstimateShippingMethodsInput?: InputMaybe<V1GuestCartEstimateShippingMethodsInput>;
};


export type MutationsmileElasticsuiteTrackerCustomerTrackingServiceV1HitPostArgs = {
  v1ElasticsuiteTrackerHitInput?: InputMaybe<V1ElasticsuiteTrackerHitInput>;
};


export type MutationvertexAddressValidationAddressManagementV1GetValidAddressPostArgs = {
  v1VertexAddressValidationVertexAddressInput?: InputMaybe<V1VertexAddressValidationVertexAddressInput>;
};


export type MutationvertexAddressValidationApiGuestCleanseAddressV1CleanseAddressPostArgs = {
  v1GuestAddressCleanseInput?: InputMaybe<V1GuestAddressCleanseInput>;
};


export type MutationvesTrackorderTrackOrderRepositoryV1SendPostArgs = {
  v1VesTrackorderSendInput?: InputMaybe<V1VesTrackorderSendInput>;
};


export type MutationvesTrackorderTrackOrderRepositoryV1TrackPostArgs = {
  v1VesTrackorderTrackInput?: InputMaybe<V1VesTrackorderTrackInput>;
};

export type V1AmazonBillingAddressInput = {
  addressConsentToken: Scalars['String'];
};

export type V1AmazonShippingAddressInput = {
  addressConsentToken: Scalars['String'];
};

export type ErrorResponse = {
  /** Error code */
  code?: Maybe<Scalars['Int']>;
  /** Errors list */
  errors?: Maybe<Array<Maybe<ErrorErrorsItem>>>;
  /** Error message */
  message: Scalars['String'];
  /** Error parameters list */
  parameters?: Maybe<Array<Maybe<ErrorParametersItem>>>;
  /** Stack trace */
  trace?: Maybe<Scalars['String']>;
};

/** Error details */
export type ErrorErrorsItem = {
  /** Error message */
  message?: Maybe<Scalars['String']>;
  /** Error parameters list */
  parameters?: Maybe<Array<Maybe<ErrorParametersItem>>>;
};

/** Error parameters item */
export type ErrorParametersItem = {
  /** Missing or invalid field name */
  fieldName?: Maybe<Scalars['String']>;
  /** Incorrect field value */
  fieldValue?: Maybe<Scalars['String']>;
  /** ACL resource */
  resources?: Maybe<Scalars['String']>;
};

export type V1GuestCartPaymentInformationInput = {
  /** Interface AddressInterface */
  billingAddress2?: InputMaybe<QuoteDataAddressInterfaceInput>;
  email: Scalars['String'];
  /** Interface PaymentInterface */
  paymentMethod: QuoteDataPaymentInterfaceInput;
};

/** Interface AddressInterface */
export type QuoteDataAddressInterfaceInput = {
  /** City name */
  city: Scalars['String'];
  /** Company */
  company?: InputMaybe<Scalars['String']>;
  /** Country id */
  countryId: Scalars['String'];
  /** Custom attributes values. */
  customAttributes?: InputMaybe<Array<InputMaybe<FrameworkAttributeInterfaceInput>>>;
  /** Customer address id */
  customerAddressId?: InputMaybe<Scalars['Int']>;
  /** Customer id */
  customerId?: InputMaybe<Scalars['Int']>;
  /** Billing/shipping email */
  email: Scalars['String'];
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\AddressInterface */
  extensionAttributes?: InputMaybe<QuoteDataAddressExtensionInterfaceInput>;
  /** Fax number */
  fax?: InputMaybe<Scalars['String']>;
  /** First name */
  firstname: Scalars['String'];
  /** Id */
  id?: InputMaybe<Scalars['Int']>;
  /** Last name */
  lastname: Scalars['String'];
  /** Middle name */
  middlename?: InputMaybe<Scalars['String']>;
  /** Postcode */
  postcode: Scalars['String'];
  /** Prefix */
  prefix?: InputMaybe<Scalars['String']>;
  /** Region name */
  region: Scalars['String'];
  /** Region code */
  regionCode: Scalars['String'];
  /** Region id */
  regionId: Scalars['Int'];
  /** Same as billing flag */
  sameAsBilling?: InputMaybe<Scalars['Int']>;
  /** Save in address book flag */
  saveInAddressBook?: InputMaybe<Scalars['Int']>;
  /** Street */
  street: Array<InputMaybe<Scalars['String']>>;
  /** Suffix */
  suffix?: InputMaybe<Scalars['String']>;
  /** Telephone number */
  telephone: Scalars['String'];
  /** Vat id */
  vatId?: InputMaybe<Scalars['String']>;
};

/** Interface for custom attribute value. */
export type FrameworkAttributeInterfaceInput = {
  /** Attribute code */
  attributeCode: Scalars['String'];
  /** Attribute value */
  value: Scalars['String'];
};

/** ExtensionInterface class for @see \Magento\Quote\Api\Data\AddressInterface */
export type QuoteDataAddressExtensionInterfaceInput = {
  discounts?: InputMaybe<Array<InputMaybe<SalesRuleDataRuleDiscountInterfaceInput>>>;
  pickupLocationCode?: InputMaybe<Scalars['String']>;
};

/** Rule discount Interface */
export type SalesRuleDataRuleDiscountInterfaceInput = {
  /** Discount Data Interface */
  discountData: SalesRuleDataDiscountDataInterfaceInput;
  /** Rule ID */
  ruleId: Scalars['Int'];
  /** Rule Label */
  ruleLabel: Scalars['String'];
};

/** Discount Data Interface */
export type SalesRuleDataDiscountDataInterfaceInput = {
  /** Amount */
  amount: Scalars['Float'];
  /** Base Amount */
  baseAmount: Scalars['Float'];
  /** Base Original Amount */
  baseOriginalAmount: Scalars['Float'];
  /** Original Amount */
  originalAmount: Scalars['Float'];
};

/** Interface PaymentInterface */
export type QuoteDataPaymentInterfaceInput = {
  /** Payment additional details */
  additionalData?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\PaymentInterface */
  extensionAttributes?: InputMaybe<QuoteDataPaymentExtensionInterfaceInput>;
  /** Payment method code */
  method: Scalars['String'];
  /** Purchase order number */
  poNumber?: InputMaybe<Scalars['String']>;
};

/** ExtensionInterface class for @see \Magento\Quote\Api\Data\PaymentInterface */
export type QuoteDataPaymentExtensionInterfaceInput = {
  agreementIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type V1GuestCartSetPaymentInformationInput = {
  /** Interface AddressInterface */
  billingAddress3?: InputMaybe<QuoteDataAddressInterfaceInput>;
  email: Scalars['String'];
  /** Interface PaymentInterface */
  paymentMethod: QuoteDataPaymentInterfaceInput;
};

export type V1GuestCartShippingInformationInput = {
  /** Interface ShippingInformationInterface */
  addressInformation: CheckoutDataShippingInformationInterfaceInput;
};

/** Interface ShippingInformationInterface */
export type CheckoutDataShippingInformationInterfaceInput = {
  /** Interface AddressInterface */
  billingAddress?: InputMaybe<QuoteDataAddressInterfaceInput>;
  /** Custom attributes values. */
  customAttributes?: InputMaybe<Array<InputMaybe<FrameworkAttributeInterfaceInput>>>;
  /** ExtensionInterface class for @see \Magento\Checkout\Api\Data\ShippingInformationInterface */
  extensionAttributes?: InputMaybe<Scalars['JSON']>;
  /** Interface AddressInterface */
  shippingAddress: QuoteDataAddressInterfaceInput;
  /** Carrier code */
  shippingCarrierCode: Scalars['String'];
  /** Shipping method code */
  shippingMethodCode: Scalars['String'];
};

export type V1GuestCartTotalsInformationInput = {
  /** Interface TotalsInformationInterface */
  addressInformation: CheckoutDataTotalsInformationInterfaceInput;
};

/** Interface TotalsInformationInterface */
export type CheckoutDataTotalsInformationInterfaceInput = {
  /** Interface AddressInterface */
  address: QuoteDataAddressInterfaceInput;
  /** Custom attributes values. */
  customAttributes?: InputMaybe<Array<InputMaybe<FrameworkAttributeInterfaceInput>>>;
  /** ExtensionInterface class for @see \Magento\Checkout\Api\Data\TotalsInformationInterface */
  extensionAttributes?: InputMaybe<Scalars['JSON']>;
  /** Carrier code */
  shippingCarrierCode?: InputMaybe<Scalars['String']>;
  /** Shipping method code */
  shippingMethodCode?: InputMaybe<Scalars['String']>;
};

export type V1CustomersInput = {
  /** Customer entity interface for API handling. */
  customer: CustomerDataCustomerInterfaceInput;
  password?: InputMaybe<Scalars['String']>;
  redirectUrl?: InputMaybe<Scalars['String']>;
};

/** Customer entity interface for API handling. */
export type CustomerDataCustomerInterfaceInput = {
  /** Customer addresses. */
  addresses?: InputMaybe<Array<InputMaybe<CustomerDataAddressInterfaceInput>>>;
  /** Confirmation */
  confirmation?: InputMaybe<Scalars['String']>;
  /** Created at time */
  createdAt?: InputMaybe<Scalars['String']>;
  /** Created in area */
  createdIn?: InputMaybe<Scalars['String']>;
  /** Custom attributes values. */
  customAttributes?: InputMaybe<Array<InputMaybe<FrameworkAttributeInterfaceInput>>>;
  /** Default billing address id */
  defaultBilling?: InputMaybe<Scalars['String']>;
  /** Default shipping address id */
  defaultShipping?: InputMaybe<Scalars['String']>;
  /** Disable auto group change flag. */
  disableAutoGroupChange?: InputMaybe<Scalars['Int']>;
  /** In keeping with current security and privacy best practices, be sure you are aware of any potential legal and security risks associated with the storage of customers’ full date of birth (month, day, year) along with other personal identifiers (e.g., full name) before collecting or processing such data. */
  dob?: InputMaybe<Scalars['String']>;
  /** Email address */
  email: Scalars['String'];
  /** ExtensionInterface class for @see \Magento\Customer\Api\Data\CustomerInterface */
  extensionAttributes?: InputMaybe<CustomerDataCustomerExtensionInterfaceInput>;
  /** First name */
  firstname: Scalars['String'];
  /** Gender */
  gender?: InputMaybe<Scalars['Int']>;
  /** Group id */
  groupId?: InputMaybe<Scalars['Int']>;
  /** Customer id */
  id?: InputMaybe<Scalars['Int']>;
  /** Last name */
  lastname: Scalars['String'];
  /** Middle name */
  middlename?: InputMaybe<Scalars['String']>;
  /** Prefix */
  prefix?: InputMaybe<Scalars['String']>;
  /** Store id */
  storeId?: InputMaybe<Scalars['Int']>;
  /** Suffix */
  suffix?: InputMaybe<Scalars['String']>;
  /** Tax Vat */
  taxvat?: InputMaybe<Scalars['String']>;
  /** Updated at time */
  updatedAt?: InputMaybe<Scalars['String']>;
  /** Website id */
  websiteId?: InputMaybe<Scalars['Int']>;
};

/** Customer address interface. */
export type CustomerDataAddressInterfaceInput = {
  /** City name */
  city?: InputMaybe<Scalars['String']>;
  /** Company */
  company?: InputMaybe<Scalars['String']>;
  /** Country code in ISO_3166-2 format */
  countryId?: InputMaybe<Scalars['String']>;
  /** Custom attributes values. */
  customAttributes?: InputMaybe<Array<InputMaybe<FrameworkAttributeInterfaceInput>>>;
  /** Customer ID */
  customerId?: InputMaybe<Scalars['Int']>;
  /** If this address is default billing address */
  defaultBilling?: InputMaybe<Scalars['Boolean']>;
  /** If this address is default shipping address. */
  defaultShipping?: InputMaybe<Scalars['Boolean']>;
  /** ExtensionInterface class for @see \Magento\Customer\Api\Data\AddressInterface */
  extensionAttributes?: InputMaybe<Scalars['JSON']>;
  /** Fax number */
  fax?: InputMaybe<Scalars['String']>;
  /** First name */
  firstname?: InputMaybe<Scalars['String']>;
  /** ID */
  id?: InputMaybe<Scalars['Int']>;
  /** Last name */
  lastname?: InputMaybe<Scalars['String']>;
  /** Middle name */
  middlename?: InputMaybe<Scalars['String']>;
  /** Postcode */
  postcode?: InputMaybe<Scalars['String']>;
  /** Prefix */
  prefix?: InputMaybe<Scalars['String']>;
  /** Customer address region interface. */
  region?: InputMaybe<CustomerDataRegionInterfaceInput>;
  /** Region ID */
  regionId?: InputMaybe<Scalars['Int']>;
  /** Street */
  street?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Suffix */
  suffix?: InputMaybe<Scalars['String']>;
  /** Telephone number */
  telephone?: InputMaybe<Scalars['String']>;
  /** Vat id */
  vatId?: InputMaybe<Scalars['String']>;
};

/** Customer address region interface. */
export type CustomerDataRegionInterfaceInput = {
  /** ExtensionInterface class for @see \Magento\Customer\Api\Data\RegionInterface */
  extensionAttributes?: InputMaybe<Scalars['JSON']>;
  /** Region */
  region: Scalars['String'];
  /** Region code */
  regionCode: Scalars['String'];
  /** Region id */
  regionId: Scalars['Int'];
};

/** ExtensionInterface class for @see \Magento\Customer\Api\Data\CustomerInterface */
export type CustomerDataCustomerExtensionInterfaceInput = {
  amazonId?: InputMaybe<Scalars['String']>;
  assistanceAllowed?: InputMaybe<Scalars['Int']>;
  isSubscribed?: InputMaybe<Scalars['Boolean']>;
  /** Extended customer custom attributes interface. */
  sellerAttributes?: InputMaybe<LofMarketPermissionsDataSellerCustomerInterfaceInput>;
  vertexCustomerCode?: InputMaybe<Scalars['String']>;
  vertexCustomerCountry?: InputMaybe<Scalars['String']>;
};

/** Extended customer custom attributes interface. */
export type LofMarketPermissionsDataSellerCustomerInterfaceInput = {
  /** Customer ID. */
  customerId?: InputMaybe<Scalars['Int']>;
  /** ExtensionInterface class for @see \Lof\MarketPermissions\Api\Data\SellerCustomerInterface */
  extensionAttributes?: InputMaybe<Scalars['JSON']>;
  /** Get job title. */
  jobTitle?: InputMaybe<Scalars['String']>;
  /** Seller ID. */
  sellerId?: InputMaybe<Scalars['Int']>;
  /** Customer status. */
  status?: InputMaybe<Scalars['Int']>;
  /** Get telephone. */
  telephone?: InputMaybe<Scalars['String']>;
};

export type V1CustomersPasswordInput = {
  email: Scalars['String'];
  template: Scalars['String'];
  websiteId2?: InputMaybe<Scalars['Int']>;
};

export type V1CustomersIsEmailAvailableInput = {
  customerEmail: Scalars['String'];
  /** If not set, will use the current websiteId */
  websiteId3?: InputMaybe<Scalars['Int']>;
};

export type V1CustomersResetPasswordInput = {
  /** If empty value given then the customer will be matched by the RP token. */
  email: Scalars['String'];
  newPassword: Scalars['String'];
  resetToken: Scalars['String'];
};

/** Interface RequestInterface */
export type EcomteckAdvancedContactDataRequestInterface = {
  /** Closed */
  closed?: Maybe<Scalars['Int']>;
  /** Code */
  code: Scalars['String'];
  /** Created */
  created: Scalars['String'];
  /** ID */
  id?: Maybe<Scalars['Int']>;
  /** Info */
  info: Array<Maybe<EcomteckAdvancedContactDataInfoInterface>>;
  /** Message */
  message: Scalars['String'];
  /** Updated */
  updated: Scalars['String'];
};

/** Interface InfoInterface */
export type EcomteckAdvancedContactDataInfoInterface = {
  /** Key */
  key?: Maybe<Scalars['String']>;
  /** Value */
  value?: Maybe<Scalars['String']>;
};

export type V1ContactPostInput = {
  /** Interface RequestInterface */
  request: EcomteckAdvancedContactDataRequestInterfaceInput;
};

/** Interface RequestInterface */
export type EcomteckAdvancedContactDataRequestInterfaceInput = {
  /** Closed */
  closed?: InputMaybe<Scalars['Int']>;
  /** Code */
  code: Scalars['String'];
  /** Created */
  created: Scalars['String'];
  /** ID */
  id?: InputMaybe<Scalars['Int']>;
  /** Info */
  info: Array<InputMaybe<EcomteckAdvancedContactDataInfoInterfaceInput>>;
  /** Message */
  message: Scalars['String'];
  /** Updated */
  updated: Scalars['String'];
};

/** Interface InfoInterface */
export type EcomteckAdvancedContactDataInfoInterfaceInput = {
  /** Key */
  key?: InputMaybe<Scalars['String']>;
  /** Value */
  value?: InputMaybe<Scalars['String']>;
};

export type V1GuestCartGiftMessageInput = {
  /** Interface MessageInterface */
  giftMessage: GiftMessageDataMessageInterfaceInput;
};

/** Interface MessageInterface */
export type GiftMessageDataMessageInterfaceInput = {
  /** Customer ID. Otherwise, null. */
  customerId?: InputMaybe<Scalars['Int']>;
  /** ExtensionInterface class for @see \Magento\GiftMessage\Api\Data\MessageInterface */
  extensionAttributes?: InputMaybe<GiftMessageDataMessageExtensionInterfaceInput>;
  /** Gift message ID. Otherwise, null. */
  giftMessageId?: InputMaybe<Scalars['Int']>;
  /** Message text. */
  message: Scalars['String'];
  /** Recipient name. */
  recipient: Scalars['String'];
  /** Sender name. */
  sender: Scalars['String'];
};

/** ExtensionInterface class for @see \Magento\GiftMessage\Api\Data\MessageInterface */
export type GiftMessageDataMessageExtensionInterfaceInput = {
  entityId?: InputMaybe<Scalars['String']>;
  entityType?: InputMaybe<Scalars['String']>;
};

export type V1IntegrationAdminTokenInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type V1IntegrationCustomerTokenInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type V1LofChatwootChatwootInput = {
  chatwoot: LofChatWootDataChatwootInterfaceInput;
};

export type LofChatWootDataChatwootInterfaceInput = {
  /** Agent_availability */
  agentAvailability?: InputMaybe<Scalars['Int']>;
  /** Agent_away_message */
  agentAwayMessage?: InputMaybe<Scalars['String']>;
  /** Agent_id */
  agentId?: InputMaybe<Scalars['Int']>;
  /** Agent_name */
  agentName?: InputMaybe<Scalars['String']>;
  /** Channel_id */
  channelId?: InputMaybe<Scalars['Int']>;
  /** Channel_name */
  channelName?: InputMaybe<Scalars['String']>;
  /** Channel_type */
  channelType?: InputMaybe<Scalars['String']>;
  /** Chatwoot_id */
  chatwootId?: InputMaybe<Scalars['Int']>;
  /** Created_at */
  createdAt?: InputMaybe<Scalars['String']>;
  /** Seller_id */
  sellerId?: InputMaybe<Scalars['Int']>;
  /** Team_id */
  teamId?: InputMaybe<Scalars['Int']>;
  /** Team_name */
  teamName?: InputMaybe<Scalars['String']>;
  /** Updated_at */
  updatedAt?: InputMaybe<Scalars['String']>;
  /** Website_token */
  websiteToken?: InputMaybe<Scalars['String']>;
  /** Welcome_tagline */
  welcomeTagline?: InputMaybe<Scalars['String']>;
  /** Welcome_title */
  welcomeTitle?: InputMaybe<Scalars['String']>;
  /** Widget_color */
  widgetColor?: InputMaybe<Scalars['String']>;
};

export type V1SellerRegisterInput = {
  /** Customer entity interface for API handling. */
  customer: CustomerDataCustomerInterfaceInput;
  data: LofMarketPlaceDataRegisterSellerInterfaceInput;
  password?: InputMaybe<Scalars['String']>;
};

export type LofMarketPlaceDataRegisterSellerInterfaceInput = {
  /** Address */
  address?: InputMaybe<Scalars['String']>;
  /** City */
  city?: InputMaybe<Scalars['String']>;
  /** Company */
  company?: InputMaybe<Scalars['String']>;
  /** Contact_number */
  contactNumber?: InputMaybe<Scalars['String']>;
  /** Country_id */
  countryId?: InputMaybe<Scalars['String']>;
  /** ExtensionInterface class for @see \Lof\MarketPlace\Api\Data\RegisterSellerInterface */
  extensionAttributes?: InputMaybe<Scalars['JSON']>;
  /** Group_id */
  groupId?: InputMaybe<Scalars['Int']>;
  /** Postcode */
  postcode?: InputMaybe<Scalars['String']>;
  /** Region */
  region?: InputMaybe<Scalars['String']>;
  /** Region_id */
  regionId?: InputMaybe<Scalars['Int']>;
  /** Shop_url */
  shopUrl?: InputMaybe<Scalars['String']>;
  /** Telephone */
  telephone?: InputMaybe<Scalars['String']>;
};

export type V1ReviewsGuestReplyInput = {
  /** Represents a ReviewVote object Used fully qualified namespaces in annotations for proper work of WebApi request parser */
  reply: LofProductReviewsDataReplyInterfaceInput;
};

/** Represents a ReviewVote object Used fully qualified namespaces in annotations for proper work of WebApi request parser */
export type LofProductReviewsDataReplyInterfaceInput = {
  /** Rating admin_user_id. */
  adminUserId?: InputMaybe<Scalars['Int']>;
  /** Rating avatar_url. */
  avatarUrl: Scalars['String'];
  /** Rating created_at. */
  createdAt: Scalars['String'];
  /** Rating customer_id. */
  customerId?: InputMaybe<Scalars['Int']>;
  /** Rating email_address. */
  emailAddress: Scalars['String'];
  /** Rating parent_reply_id. */
  parentReplyId?: InputMaybe<Scalars['Int']>;
  /** Rating reply_comment. */
  replyComment: Scalars['String'];
  /** Rating reply_customer_id id. */
  replyCustomerId?: InputMaybe<Scalars['Int']>;
  /** Rating reply id. */
  replyId?: InputMaybe<Scalars['Int']>;
  /** Rating reply_title. */
  replyTitle: Scalars['String'];
  /** Rating review_id. */
  reviewId: Scalars['Int'];
  /** Rating status. */
  status: Scalars['Int'];
  /** Rating updated_at. */
  updatedAt: Scalars['String'];
  /** Rating user_name. */
  userName: Scalars['String'];
  /** Rating website. */
  website: Scalars['String'];
};

export type V1LofmobileAppleLoginInput = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  token: Scalars['String'];
};

export type V1LofmobileSocialLoginInput = {
  token: Scalars['String'];
  type: Scalars['String'];
};

export type V1SplitCartGuestPaymentInformationInput = {
  /** Interface AddressInterface */
  billingAddress4?: InputMaybe<QuoteDataAddressInterfaceInput>;
  email: Scalars['String'];
  /** Interface PaymentInterface */
  paymentMethod: QuoteDataPaymentInterfaceInput;
};

export type LofmpSplitCartDataQuoteInterface = {
  /** Entity_id */
  entityId?: Maybe<Scalars['String']>;
  /** ExtensionInterface class for @see \Lofmp\SplitCart\Api\Data\QuoteInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Is_active */
  isActive?: Maybe<Scalars['String']>;
  /** Is_ordered */
  isOrdered?: Maybe<Scalars['String']>;
  /** Parent_id */
  parentId?: Maybe<Scalars['String']>;
  /** Quote_id */
  quoteId?: Maybe<Scalars['String']>;
  /** Seller_id */
  sellerId?: Maybe<Scalars['String']>;
};

export type V1GuestCartBillingAddressInput = {
  /** Interface AddressInterface */
  address: QuoteDataAddressInterfaceInput;
  useForShipping?: InputMaybe<Scalars['Boolean']>;
};

export type V1GuestCartItems2Input = {
  /** Interface CartItemInterface */
  cartItem: QuoteDataCartItemInterfaceInput;
};

/** Interface CartItemInterface */
export type QuoteDataCartItemInterfaceInput = {
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\CartItemInterface */
  extensionAttributes?: InputMaybe<QuoteDataCartItemExtensionInterfaceInput>;
  /** Item ID. Otherwise, null. */
  itemId?: InputMaybe<Scalars['Int']>;
  /** Product name. Otherwise, null. */
  name?: InputMaybe<Scalars['String']>;
  /** Product price. Otherwise, null. */
  price?: InputMaybe<Scalars['Float']>;
  /** Product option interface */
  productOption?: InputMaybe<QuoteDataProductOptionInterfaceInput>;
  /** Product type. Otherwise, null. */
  productType?: InputMaybe<Scalars['String']>;
  /** Product quantity. */
  qty: Scalars['Float'];
  /** Quote id. */
  quoteId: Scalars['String'];
  /** Product SKU. Otherwise, null. */
  sku?: InputMaybe<Scalars['String']>;
};

/** ExtensionInterface class for @see \Magento\Quote\Api\Data\CartItemInterface */
export type QuoteDataCartItemExtensionInterfaceInput = {
  discounts?: InputMaybe<Array<InputMaybe<SalesRuleDataRuleDiscountInterfaceInput>>>;
  sellerId?: InputMaybe<Scalars['Int']>;
  sellerName?: InputMaybe<Scalars['String']>;
  sellerUrl?: InputMaybe<Scalars['String']>;
};

/** Product option interface */
export type QuoteDataProductOptionInterfaceInput = {
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\ProductOptionInterface */
  extensionAttributes?: InputMaybe<QuoteDataProductOptionExtensionInterfaceInput>;
};

/** ExtensionInterface class for @see \Magento\Quote\Api\Data\ProductOptionInterface */
export type QuoteDataProductOptionExtensionInterfaceInput = {
  bundleOptions?: InputMaybe<Array<InputMaybe<BundleDataBundleOptionInterfaceInput>>>;
  configurableItemOptions?: InputMaybe<Array<InputMaybe<ConfigurableProductDataConfigurableItemOptionValueInterfaceInput>>>;
  customOptions?: InputMaybe<Array<InputMaybe<CatalogDataCustomOptionInterfaceInput>>>;
  /** Downloadable Option */
  downloadableOption?: InputMaybe<DownloadableDataDownloadableOptionInterfaceInput>;
  groupedOptions?: InputMaybe<Array<InputMaybe<GroupedProductDataGroupedOptionsInterfaceInput>>>;
};

/** Interface BundleOptionInterface */
export type BundleDataBundleOptionInterfaceInput = {
  /** ExtensionInterface class for @see \Magento\Bundle\Api\Data\BundleOptionInterface */
  extensionAttributes?: InputMaybe<Scalars['JSON']>;
  /** Bundle option id. */
  optionId: Scalars['Int'];
  /** Bundle option quantity. */
  optionQty: Scalars['Int'];
  /** Bundle option selection ids. */
  optionSelections: Array<InputMaybe<Scalars['Int']>>;
};

/** Interface ConfigurableItemOptionValueInterface */
export type ConfigurableProductDataConfigurableItemOptionValueInterfaceInput = {
  /** ExtensionInterface class for @see \Magento\ConfigurableProduct\Api\Data\ConfigurableItemOptionValueInterface */
  extensionAttributes?: InputMaybe<Scalars['JSON']>;
  /** Option SKU */
  optionId: Scalars['String'];
  /** Item id */
  optionValue?: InputMaybe<Scalars['Int']>;
};

/** Interface CustomOptionInterface */
export type CatalogDataCustomOptionInterfaceInput = {
  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\CustomOptionInterface */
  extensionAttributes?: InputMaybe<CatalogDataCustomOptionExtensionInterfaceInput>;
  /** Option id */
  optionId: Scalars['String'];
  /** Option value */
  optionValue: Scalars['String'];
};

/** ExtensionInterface class for @see \Magento\Catalog\Api\Data\CustomOptionInterface */
export type CatalogDataCustomOptionExtensionInterfaceInput = {
  /** Image Content data interface */
  fileInfo?: InputMaybe<FrameworkDataImageContentInterfaceInput>;
};

/** Image Content data interface */
export type FrameworkDataImageContentInterfaceInput = {
  /** Media data (base64 encoded content) */
  base64EncodedData: Scalars['String'];
  /** Image name */
  name: Scalars['String'];
  /** MIME type */
  type: Scalars['String'];
};

/** Downloadable Option */
export type DownloadableDataDownloadableOptionInterfaceInput = {
  /** The list of downloadable links */
  downloadableLinks: Array<InputMaybe<Scalars['Int']>>;
};

/** Represents `product item id with qty` of a grouped product. */
export type GroupedProductDataGroupedOptionsInterfaceInput = {
  /** ExtensionInterface class for @see \Magento\GroupedProduct\Api\Data\GroupedOptionsInterface */
  extensionAttributes?: InputMaybe<Scalars['JSON']>;
  /** Associated product id */
  id?: InputMaybe<Scalars['Int']>;
  /** Associated product qty */
  qty?: InputMaybe<Scalars['Int']>;
};

export type V1GuestCartItemInput = {
  /** Interface CartItemInterface */
  cartItem: QuoteDataCartItemInterfaceInput;
};

export type V1GuestCartOrderInput = {
  /** Interface PaymentInterface */
  paymentMethod?: InputMaybe<QuoteDataPaymentInterfaceInput>;
};

export type V1GuestCartCollectTotalsInput = {
  /** Additional data for totals collection. */
  additionalData2?: InputMaybe<QuoteDataTotalsAdditionalDataInterfaceInput>;
  /** Interface PaymentInterface */
  paymentMethod: QuoteDataPaymentInterfaceInput;
  /** The carrier code. */
  shippingCarrierCode2?: InputMaybe<Scalars['String']>;
  /** The shipping method code. */
  shippingMethodCode2?: InputMaybe<Scalars['String']>;
};

/** Additional data for totals collection. */
export type QuoteDataTotalsAdditionalDataInterfaceInput = {
  /** Custom attributes values. */
  customAttributes?: InputMaybe<Array<InputMaybe<FrameworkAttributeInterfaceInput>>>;
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalsAdditionalDataInterface */
  extensionAttributes?: InputMaybe<QuoteDataTotalsAdditionalDataExtensionInterfaceInput>;
};

/** ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalsAdditionalDataInterface */
export type QuoteDataTotalsAdditionalDataExtensionInterfaceInput = {
  giftMessages?: InputMaybe<Array<InputMaybe<GiftMessageDataMessageInterfaceInput>>>;
};

export type V1GuestCartSelectedPaymentMethodInput = {
  /** Interface PaymentInterface */
  method: QuoteDataPaymentInterfaceInput;
};

export type V1GuestCartEstimateShippingMethodsInput = {
  /** Interface AddressInterface */
  address: QuoteDataAddressInterfaceInput;
};

export type V1ElasticsuiteTrackerHitInput = {
  /** Event data. */
  eventData: Scalars['String'];
};

export type V1VertexAddressValidationVertexAddressInput = {
  /** Interface AddressInterface */
  address: QuoteDataAddressInterfaceInput;
};

/** What we want to output to the API contains more data than what we want to bring in.  Chiefly, we want to ensure we're sending Magento data out (instead of Vertex data). That means sending Region IDs, and 2-character ISO country codes. */
export type VertexAddressValidationApiDataCleansedAddressInterface = {
  city?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  countryName?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  regionId?: Maybe<Scalars['Int']>;
  regionName?: Maybe<Scalars['String']>;
  streetAddress: Array<Maybe<Scalars['String']>>;
  /** The regional sub division, such as a county or parish */
  subDivision?: Maybe<Scalars['String']>;
};

export type V1GuestAddressCleanseInput = {
  /** This is the interface for submission to the API.  For ease the API only takes interfaces the same as the SDK, but the SDK model cannot implement the interface.  Since the SDK model technically isn't API, we re-implement a simple DTO to handle the scenario. */
  address: VertexAddressValidationApiDataAddressInterfaceInput;
  /** Guest Cart ID (used for auth) */
  cartId: Scalars['String'];
  scopeCode2?: InputMaybe<Scalars['String']>;
  scopeType2?: InputMaybe<Scalars['String']>;
};

/** This is the interface for submission to the API.  For ease the API only takes interfaces the same as the SDK, but the SDK model cannot implement the interface.  Since the SDK model technically isn't API, we re-implement a simple DTO to handle the scenario. */
export type VertexAddressValidationApiDataAddressInterfaceInput = {
  /** The proper name of the city */
  city?: InputMaybe<Scalars['String']>;
  /** ISO 3166-1 Alpha-3 country code */
  country?: InputMaybe<Scalars['String']>;
  /** The proper name or the postal abbreviation of the state, province, or territory */
  mainDivision?: InputMaybe<Scalars['String']>;
  /** The Postal Code */
  postalCode?: InputMaybe<Scalars['String']>;
  /** The street address */
  streetAddress: Array<InputMaybe<Scalars['String']>>;
  /** The name of the county */
  subDivision?: InputMaybe<Scalars['String']>;
};

export type V1VesTrackorderSendInput = {
  code?: InputMaybe<Scalars['String']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  emailRecipient: Scalars['String'];
  invoiceId: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  orderId?: InputMaybe<Scalars['String']>;
};

/** Order interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer. */
export type SalesDataOrderInterface = {
  /** Negative adjustment value. */
  adjustmentNegative?: Maybe<Scalars['Float']>;
  /** Positive adjustment value. */
  adjustmentPositive?: Maybe<Scalars['Float']>;
  /** Applied rule IDs. */
  appliedRuleIds?: Maybe<Scalars['String']>;
  /** Base negative adjustment value. */
  baseAdjustmentNegative?: Maybe<Scalars['Float']>;
  /** Base positive adjustment value. */
  baseAdjustmentPositive?: Maybe<Scalars['Float']>;
  /** Base currency code. */
  baseCurrencyCode?: Maybe<Scalars['String']>;
  /** Base discount amount. */
  baseDiscountAmount?: Maybe<Scalars['Float']>;
  /** Base discount canceled. */
  baseDiscountCanceled?: Maybe<Scalars['Float']>;
  /** Base discount invoiced. */
  baseDiscountInvoiced?: Maybe<Scalars['Float']>;
  /** Base discount refunded. */
  baseDiscountRefunded?: Maybe<Scalars['Float']>;
  /** Base discount tax compensation amount. */
  baseDiscountTaxCompensationAmount?: Maybe<Scalars['Float']>;
  /** Base discount tax compensation invoiced. */
  baseDiscountTaxCompensationInvoiced?: Maybe<Scalars['Float']>;
  /** Base discount tax compensation refunded. */
  baseDiscountTaxCompensationRefunded?: Maybe<Scalars['Float']>;
  /** Base grand total. */
  baseGrandTotal: Scalars['Float'];
  /** Base shipping amount. */
  baseShippingAmount?: Maybe<Scalars['Float']>;
  /** Base shipping canceled. */
  baseShippingCanceled?: Maybe<Scalars['Float']>;
  /** Base shipping discount amount. */
  baseShippingDiscountAmount?: Maybe<Scalars['Float']>;
  /** Base shipping discount tax compensation amount. */
  baseShippingDiscountTaxCompensationAmnt?: Maybe<Scalars['Float']>;
  /** Base shipping including tax. */
  baseShippingInclTax?: Maybe<Scalars['Float']>;
  /** Base shipping invoiced. */
  baseShippingInvoiced?: Maybe<Scalars['Float']>;
  /** Base shipping refunded. */
  baseShippingRefunded?: Maybe<Scalars['Float']>;
  /** Base shipping tax amount. */
  baseShippingTaxAmount?: Maybe<Scalars['Float']>;
  /** Base shipping tax refunded. */
  baseShippingTaxRefunded?: Maybe<Scalars['Float']>;
  /** Base subtotal. */
  baseSubtotal?: Maybe<Scalars['Float']>;
  /** Base subtotal canceled. */
  baseSubtotalCanceled?: Maybe<Scalars['Float']>;
  /** Base subtotal including tax. */
  baseSubtotalInclTax?: Maybe<Scalars['Float']>;
  /** Base subtotal invoiced. */
  baseSubtotalInvoiced?: Maybe<Scalars['Float']>;
  /** Base subtotal refunded. */
  baseSubtotalRefunded?: Maybe<Scalars['Float']>;
  /** Base tax amount. */
  baseTaxAmount?: Maybe<Scalars['Float']>;
  /** Base tax canceled. */
  baseTaxCanceled?: Maybe<Scalars['Float']>;
  /** Base tax invoiced. */
  baseTaxInvoiced?: Maybe<Scalars['Float']>;
  /** Base tax refunded. */
  baseTaxRefunded?: Maybe<Scalars['Float']>;
  /** Base-to-global rate. */
  baseToGlobalRate?: Maybe<Scalars['Float']>;
  /** Base-to-order rate. */
  baseToOrderRate?: Maybe<Scalars['Float']>;
  /** Base total canceled. */
  baseTotalCanceled?: Maybe<Scalars['Float']>;
  /** Base total due. */
  baseTotalDue?: Maybe<Scalars['Float']>;
  /** Base total invoiced. */
  baseTotalInvoiced?: Maybe<Scalars['Float']>;
  /** Base total invoiced cost. */
  baseTotalInvoicedCost?: Maybe<Scalars['Float']>;
  /** Base total offline refunded. */
  baseTotalOfflineRefunded?: Maybe<Scalars['Float']>;
  /** Base total online refunded. */
  baseTotalOnlineRefunded?: Maybe<Scalars['Float']>;
  /** Base total paid. */
  baseTotalPaid?: Maybe<Scalars['Float']>;
  /** Base total quantity ordered. */
  baseTotalQtyOrdered?: Maybe<Scalars['Float']>;
  /** Base total refunded. */
  baseTotalRefunded?: Maybe<Scalars['Float']>;
  /** Order address interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer. */
  billingAddress?: Maybe<SalesDataOrderAddressInterface>;
  /** Billing address ID. */
  billingAddressId?: Maybe<Scalars['Int']>;
  /** Can-ship-partially flag value. */
  canShipPartially?: Maybe<Scalars['Int']>;
  /** Can-ship-partially-item flag value. */
  canShipPartiallyItem?: Maybe<Scalars['Int']>;
  /** Coupon code. */
  couponCode?: Maybe<Scalars['String']>;
  /** Created-at timestamp. */
  createdAt?: Maybe<Scalars['String']>;
  /** In keeping with current security and privacy best practices, be sure you are aware of any potential legal and security risks associated with the storage of customers’ full date of birth (month, day, year) along with other personal identifiers (e.g., full name) before collecting or processing such data. */
  customerDob?: Maybe<Scalars['String']>;
  /** Customer email address. */
  customerEmail2: Scalars['String'];
  /** Customer first name. */
  customerFirstname?: Maybe<Scalars['String']>;
  /** Customer gender. */
  customerGender?: Maybe<Scalars['Int']>;
  /** Customer group ID. */
  customerGroupId?: Maybe<Scalars['Int']>;
  /** Customer ID. */
  customerId?: Maybe<Scalars['Int']>;
  /** Customer-is-guest flag value. */
  customerIsGuest?: Maybe<Scalars['Int']>;
  /** Customer last name. */
  customerLastname?: Maybe<Scalars['String']>;
  /** Customer middle name. */
  customerMiddlename?: Maybe<Scalars['String']>;
  /** Customer note. */
  customerNote?: Maybe<Scalars['String']>;
  /** Customer-note-notify flag value. */
  customerNoteNotify?: Maybe<Scalars['Int']>;
  /** Customer prefix. */
  customerPrefix?: Maybe<Scalars['String']>;
  /** Customer suffix. */
  customerSuffix?: Maybe<Scalars['String']>;
  /** Customer value-added tax (VAT). */
  customerTaxvat?: Maybe<Scalars['String']>;
  /** Discount amount. */
  discountAmount?: Maybe<Scalars['Float']>;
  /** Discount canceled. */
  discountCanceled?: Maybe<Scalars['Float']>;
  /** Discount description. */
  discountDescription?: Maybe<Scalars['String']>;
  /** Discount invoiced. */
  discountInvoiced?: Maybe<Scalars['Float']>;
  /** Discount refunded amount. */
  discountRefunded?: Maybe<Scalars['Float']>;
  /** Discount tax compensation amount. */
  discountTaxCompensationAmount?: Maybe<Scalars['Float']>;
  /** Discount tax compensation invoiced amount. */
  discountTaxCompensationInvoiced?: Maybe<Scalars['Float']>;
  /** Discount tax compensation refunded amount. */
  discountTaxCompensationRefunded?: Maybe<Scalars['Float']>;
  /** Edit increment value. */
  editIncrement?: Maybe<Scalars['Int']>;
  /** Email-sent flag value. */
  emailSent?: Maybe<Scalars['Int']>;
  /** Order ID. */
  entityId?: Maybe<Scalars['Int']>;
  /** External customer ID. */
  extCustomerId?: Maybe<Scalars['String']>;
  /** External order ID. */
  extOrderId?: Maybe<Scalars['String']>;
  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderInterface */
  extensionAttributes?: Maybe<SalesDataOrderExtensionInterface>;
  /** Forced-shipment-with-invoice flag value. */
  forcedShipmentWithInvoice?: Maybe<Scalars['Int']>;
  /** Global currency code. */
  globalCurrencyCode?: Maybe<Scalars['String']>;
  /** Grand total. */
  grandTotal: Scalars['Float'];
  /** Hold before state. */
  holdBeforeState?: Maybe<Scalars['String']>;
  /** Hold before status. */
  holdBeforeStatus?: Maybe<Scalars['String']>;
  /** Increment ID. */
  incrementId?: Maybe<Scalars['String']>;
  /** Is-virtual flag value. */
  isVirtual?: Maybe<Scalars['Int']>;
  /** Array of items. */
  items: Array<Maybe<SalesDataOrderItemInterface>>;
  /** Order currency code. */
  orderCurrencyCode?: Maybe<Scalars['String']>;
  /** Original increment ID. */
  originalIncrementId?: Maybe<Scalars['String']>;
  /** Order payment interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer. */
  payment?: Maybe<SalesDataOrderPaymentInterface>;
  /** Payment authorization expiration date. */
  paymentAuthExpiration?: Maybe<Scalars['Int']>;
  /** Payment authorization amount. */
  paymentAuthorizationAmount?: Maybe<Scalars['Float']>;
  /** Protect code. */
  protectCode?: Maybe<Scalars['String']>;
  /** Quote address ID. */
  quoteAddressId?: Maybe<Scalars['Int']>;
  /** Quote ID. */
  quoteId?: Maybe<Scalars['Int']>;
  /** Relation child ID. */
  relationChildId?: Maybe<Scalars['String']>;
  /** Relation child real ID. */
  relationChildRealId?: Maybe<Scalars['String']>;
  /** Relation parent ID. */
  relationParentId?: Maybe<Scalars['String']>;
  /** Relation parent real ID. */
  relationParentRealId?: Maybe<Scalars['String']>;
  /** Remote IP address. */
  remoteIp?: Maybe<Scalars['String']>;
  /** Shipping amount. */
  shippingAmount?: Maybe<Scalars['Float']>;
  /** Shipping canceled amount. */
  shippingCanceled?: Maybe<Scalars['Float']>;
  /** Shipping description. */
  shippingDescription?: Maybe<Scalars['String']>;
  /** Shipping discount amount. */
  shippingDiscountAmount?: Maybe<Scalars['Float']>;
  /** Shipping discount tax compensation amount. */
  shippingDiscountTaxCompensationAmount?: Maybe<Scalars['Float']>;
  /** Shipping including tax amount. */
  shippingInclTax?: Maybe<Scalars['Float']>;
  /** Shipping invoiced amount. */
  shippingInvoiced?: Maybe<Scalars['Float']>;
  /** Shipping refunded amount. */
  shippingRefunded?: Maybe<Scalars['Float']>;
  /** Shipping tax amount. */
  shippingTaxAmount?: Maybe<Scalars['Float']>;
  /** Shipping tax refunded amount. */
  shippingTaxRefunded?: Maybe<Scalars['Float']>;
  /** State. */
  state?: Maybe<Scalars['String']>;
  /** Status. */
  status?: Maybe<Scalars['String']>;
  /** Array of status histories. */
  statusHistories?: Maybe<Array<Maybe<SalesDataOrderStatusHistoryInterface>>>;
  /** Store currency code. */
  storeCurrencyCode?: Maybe<Scalars['String']>;
  /** Store ID. */
  storeId?: Maybe<Scalars['Int']>;
  /** Store name. */
  storeName?: Maybe<Scalars['String']>;
  /** Store-to-base rate. */
  storeToBaseRate?: Maybe<Scalars['Float']>;
  /** Store-to-order rate. */
  storeToOrderRate?: Maybe<Scalars['Float']>;
  /** Subtotal. */
  subtotal?: Maybe<Scalars['Float']>;
  /** Subtotal canceled amount. */
  subtotalCanceled?: Maybe<Scalars['Float']>;
  /** Subtotal including tax amount. */
  subtotalInclTax?: Maybe<Scalars['Float']>;
  /** Subtotal invoiced amount. */
  subtotalInvoiced?: Maybe<Scalars['Float']>;
  /** Subtotal refunded amount. */
  subtotalRefunded?: Maybe<Scalars['Float']>;
  /** Tax amount. */
  taxAmount?: Maybe<Scalars['Float']>;
  /** Tax canceled amount. */
  taxCanceled?: Maybe<Scalars['Float']>;
  /** Tax invoiced amount. */
  taxInvoiced?: Maybe<Scalars['Float']>;
  /** Tax refunded amount. */
  taxRefunded?: Maybe<Scalars['Float']>;
  /** Total canceled. */
  totalCanceled?: Maybe<Scalars['Float']>;
  /** Total due. */
  totalDue?: Maybe<Scalars['Float']>;
  /** Total invoiced amount. */
  totalInvoiced?: Maybe<Scalars['Float']>;
  /** Total item count. */
  totalItemCount?: Maybe<Scalars['Int']>;
  /** Total offline refunded amount. */
  totalOfflineRefunded?: Maybe<Scalars['Float']>;
  /** Total online refunded amount. */
  totalOnlineRefunded?: Maybe<Scalars['Float']>;
  /** Total paid. */
  totalPaid?: Maybe<Scalars['Float']>;
  /** Total quantity ordered. */
  totalQtyOrdered?: Maybe<Scalars['Float']>;
  /** Total amount refunded. */
  totalRefunded?: Maybe<Scalars['Float']>;
  /** Updated-at timestamp. */
  updatedAt?: Maybe<Scalars['String']>;
  /** Weight. */
  weight?: Maybe<Scalars['Float']>;
  /** X-Forwarded-For field value. */
  xForwardedFor?: Maybe<Scalars['String']>;
};

/** Order address interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer. */
export type SalesDataOrderAddressInterface = {
  /** Address type. */
  addressType: Scalars['String'];
  /** City. */
  city: Scalars['String'];
  /** Company. */
  company?: Maybe<Scalars['String']>;
  /** Country ID. */
  countryId: Scalars['String'];
  /** Country address ID. */
  customerAddressId?: Maybe<Scalars['Int']>;
  /** Customer ID. */
  customerId?: Maybe<Scalars['Int']>;
  /** Email address. */
  email?: Maybe<Scalars['String']>;
  /** Order address ID. */
  entityId?: Maybe<Scalars['Int']>;
  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderAddressInterface */
  extensionAttributes?: Maybe<SalesDataOrderAddressExtensionInterface>;
  /** Fax number. */
  fax?: Maybe<Scalars['String']>;
  /** First name. */
  firstname: Scalars['String'];
  /** Last name. */
  lastname: Scalars['String'];
  /** Middle name. */
  middlename?: Maybe<Scalars['String']>;
  /** Parent ID. */
  parentId?: Maybe<Scalars['Int']>;
  /** Postal code. */
  postcode: Scalars['String'];
  /** Prefix. */
  prefix?: Maybe<Scalars['String']>;
  /** Region. */
  region?: Maybe<Scalars['String']>;
  /** Region code. */
  regionCode?: Maybe<Scalars['String']>;
  /** Region ID. */
  regionId?: Maybe<Scalars['Int']>;
  /** Array of any street values. Otherwise, null. */
  street?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Suffix. */
  suffix?: Maybe<Scalars['String']>;
  /** Telephone number. */
  telephone: Scalars['String'];
  /** VAT ID. */
  vatId?: Maybe<Scalars['String']>;
  /** VAT-is-valid flag value. */
  vatIsValid?: Maybe<Scalars['Int']>;
  /** VAT request date. */
  vatRequestDate?: Maybe<Scalars['String']>;
  /** VAT request ID. */
  vatRequestId?: Maybe<Scalars['String']>;
  /** VAT-request-success flag value. */
  vatRequestSuccess?: Maybe<Scalars['Int']>;
};

/** ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderAddressInterface */
export type SalesDataOrderAddressExtensionInterface = {
  vertexVatCountryCode?: Maybe<Scalars['String']>;
};

/** ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderInterface */
export type SalesDataOrderExtensionInterface = {
  amazonOrderReferenceId?: Maybe<AmazonPaymentDataOrderLinkInterface>;
  appliedTaxes?: Maybe<Array<Maybe<TaxDataOrderTaxDetailsAppliedTaxInterface>>>;
  convertingFromQuote?: Maybe<Scalars['Boolean']>;
  /** Interface MessageInterface */
  giftMessage2?: Maybe<GiftMessageDataMessageInterface>;
  itemAppliedTaxes?: Maybe<Array<Maybe<TaxDataOrderTaxDetailsItemInterface>>>;
  notificationSent?: Maybe<Scalars['Int']>;
  orderPlacePoint?: Maybe<Scalars['String']>;
  paymentAdditionalInfo?: Maybe<Array<Maybe<PaymentDataPaymentAdditionalInfoInterface>>>;
  pickupLocationCode?: Maybe<Scalars['String']>;
  sendNotification?: Maybe<Scalars['Int']>;
  shippingAssignments?: Maybe<Array<Maybe<SalesDataShippingAssignmentInterface>>>;
};

export type AmazonPaymentDataOrderLinkInterface = {
  /** Amazon order reference id */
  amazonOrderReferenceId: Scalars['String'];
  /** Order id */
  orderId: Scalars['Int'];
};

/** Interface OrderTaxDetailsAppliedTaxInterface */
export type TaxDataOrderTaxDetailsAppliedTaxInterface = {
  /** Tax amount */
  amount: Scalars['Float'];
  /** Tax amount in base currency */
  baseAmount: Scalars['Float'];
  /** Code */
  code?: Maybe<Scalars['String']>;
  /** ExtensionInterface class for @see \Magento\Tax\Api\Data\OrderTaxDetailsAppliedTaxInterface */
  extensionAttributes?: Maybe<TaxDataOrderTaxDetailsAppliedTaxExtensionInterface>;
  /** Tax Percent */
  percent?: Maybe<Scalars['Float']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
};

/** ExtensionInterface class for @see \Magento\Tax\Api\Data\OrderTaxDetailsAppliedTaxInterface */
export type TaxDataOrderTaxDetailsAppliedTaxExtensionInterface = {
  rates?: Maybe<Array<Maybe<TaxDataAppliedTaxRateInterface>>>;
};

/** Applied tax rate interface. */
export type TaxDataAppliedTaxRateInterface = {
  /** Code */
  code?: Maybe<Scalars['String']>;
  /** ExtensionInterface class for @see \Magento\Tax\Api\Data\AppliedTaxRateInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Tax Percent */
  percent?: Maybe<Scalars['Float']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
};

/** Interface OrderTaxDetailsItemInterface */
export type TaxDataOrderTaxDetailsItemInterface = {
  /** Applied taxes */
  appliedTaxes?: Maybe<Array<Maybe<TaxDataOrderTaxDetailsAppliedTaxInterface>>>;
  /** Associated item id if this item is associated with another item, null otherwise */
  associatedItemId?: Maybe<Scalars['Int']>;
  /** ExtensionInterface class for @see \Magento\Tax\Api\Data\OrderTaxDetailsItemInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Item id if this item is a product */
  itemId?: Maybe<Scalars['Int']>;
  /** Type (shipping, product, weee, gift wrapping, etc) */
  type?: Maybe<Scalars['String']>;
};

/** Payment additional info interface. */
export type PaymentDataPaymentAdditionalInfoInterface = {
  /** Object key */
  key: Scalars['String'];
  /** Object value */
  value: Scalars['String'];
};

/** Interface ShippingAssignmentInterface */
export type SalesDataShippingAssignmentInterface = {
  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\ShippingAssignmentInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Order items of shipping assignment */
  items: Array<Maybe<SalesDataOrderItemInterface>>;
  /** Interface ShippingInterface */
  shipping: SalesDataShippingInterface;
  /** Stock id */
  stockId?: Maybe<Scalars['Int']>;
};

/** Order item interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer. */
export type SalesDataOrderItemInterface = {
  /** Additional data. */
  additionalData?: Maybe<Scalars['String']>;
  /** Amount refunded. */
  amountRefunded?: Maybe<Scalars['Float']>;
  /** Applied rule IDs. */
  appliedRuleIds?: Maybe<Scalars['String']>;
  /** Base amount refunded. */
  baseAmountRefunded?: Maybe<Scalars['Float']>;
  /** Base cost. */
  baseCost?: Maybe<Scalars['Float']>;
  /** Base discount amount. */
  baseDiscountAmount?: Maybe<Scalars['Float']>;
  /** Base discount invoiced. */
  baseDiscountInvoiced?: Maybe<Scalars['Float']>;
  /** Base discount refunded. */
  baseDiscountRefunded?: Maybe<Scalars['Float']>;
  /** Base discount tax compensation amount. */
  baseDiscountTaxCompensationAmount?: Maybe<Scalars['Float']>;
  /** Base discount tax compensation invoiced. */
  baseDiscountTaxCompensationInvoiced?: Maybe<Scalars['Float']>;
  /** Base discount tax compensation refunded. */
  baseDiscountTaxCompensationRefunded?: Maybe<Scalars['Float']>;
  /** Base original price. */
  baseOriginalPrice?: Maybe<Scalars['Float']>;
  /** Base price. */
  basePrice?: Maybe<Scalars['Float']>;
  /** Base price including tax. */
  basePriceInclTax?: Maybe<Scalars['Float']>;
  /** Base row invoiced. */
  baseRowInvoiced?: Maybe<Scalars['Float']>;
  /** Base row total. */
  baseRowTotal?: Maybe<Scalars['Float']>;
  /** Base row total including tax. */
  baseRowTotalInclTax?: Maybe<Scalars['Float']>;
  /** Base tax amount. */
  baseTaxAmount?: Maybe<Scalars['Float']>;
  /** Base tax before discount. */
  baseTaxBeforeDiscount?: Maybe<Scalars['Float']>;
  /** Base tax invoiced. */
  baseTaxInvoiced?: Maybe<Scalars['Float']>;
  /** Base tax refunded. */
  baseTaxRefunded?: Maybe<Scalars['Float']>;
  /** Base WEEE tax applied amount. */
  baseWeeeTaxAppliedAmount?: Maybe<Scalars['Float']>;
  /** Base WEEE tax applied row amount. */
  baseWeeeTaxAppliedRowAmnt?: Maybe<Scalars['Float']>;
  /** Base WEEE tax disposition. */
  baseWeeeTaxDisposition?: Maybe<Scalars['Float']>;
  /** Base WEEE tax row disposition. */
  baseWeeeTaxRowDisposition?: Maybe<Scalars['Float']>;
  /** Created-at timestamp. */
  createdAt?: Maybe<Scalars['String']>;
  /** Description. */
  description?: Maybe<Scalars['String']>;
  /** Discount amount. */
  discountAmount?: Maybe<Scalars['Float']>;
  /** Discount invoiced. */
  discountInvoiced?: Maybe<Scalars['Float']>;
  /** Discount percent. */
  discountPercent?: Maybe<Scalars['Float']>;
  /** Discount refunded. */
  discountRefunded?: Maybe<Scalars['Float']>;
  /** Discount tax compensation amount. */
  discountTaxCompensationAmount?: Maybe<Scalars['Float']>;
  /** Discount tax compensation canceled. */
  discountTaxCompensationCanceled?: Maybe<Scalars['Float']>;
  /** Discount tax compensation invoiced. */
  discountTaxCompensationInvoiced?: Maybe<Scalars['Float']>;
  /** Discount tax compensation refunded. */
  discountTaxCompensationRefunded?: Maybe<Scalars['Float']>;
  /** Event ID. */
  eventId?: Maybe<Scalars['Int']>;
  /** External order item ID. */
  extOrderItemId?: Maybe<Scalars['String']>;
  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderItemInterface */
  extensionAttributes?: Maybe<SalesDataOrderItemExtensionInterface>;
  /** Free-shipping flag value. */
  freeShipping?: Maybe<Scalars['Int']>;
  /** GW base price. */
  gwBasePrice?: Maybe<Scalars['Float']>;
  /** GW base price invoiced. */
  gwBasePriceInvoiced?: Maybe<Scalars['Float']>;
  /** GW base price refunded. */
  gwBasePriceRefunded?: Maybe<Scalars['Float']>;
  /** GW base tax amount. */
  gwBaseTaxAmount?: Maybe<Scalars['Float']>;
  /** GW base tax amount invoiced. */
  gwBaseTaxAmountInvoiced?: Maybe<Scalars['Float']>;
  /** GW base tax amount refunded. */
  gwBaseTaxAmountRefunded?: Maybe<Scalars['Float']>;
  /** GW ID. */
  gwId?: Maybe<Scalars['Int']>;
  /** GW price. */
  gwPrice?: Maybe<Scalars['Float']>;
  /** GW price invoiced. */
  gwPriceInvoiced?: Maybe<Scalars['Float']>;
  /** GW price refunded. */
  gwPriceRefunded?: Maybe<Scalars['Float']>;
  /** GW tax amount. */
  gwTaxAmount?: Maybe<Scalars['Float']>;
  /** GW tax amount invoiced. */
  gwTaxAmountInvoiced?: Maybe<Scalars['Float']>;
  /** GW tax amount refunded. */
  gwTaxAmountRefunded?: Maybe<Scalars['Float']>;
  /** Is-quantity-decimal flag value. */
  isQtyDecimal?: Maybe<Scalars['Int']>;
  /** Is-virtual flag value. */
  isVirtual?: Maybe<Scalars['Int']>;
  /** Item ID. */
  itemId?: Maybe<Scalars['Int']>;
  /** Locked DO invoice flag value. */
  lockedDoInvoice?: Maybe<Scalars['Int']>;
  /** Locked DO ship flag value. */
  lockedDoShip?: Maybe<Scalars['Int']>;
  /** Name. */
  name?: Maybe<Scalars['String']>;
  /** No-discount flag value. */
  noDiscount?: Maybe<Scalars['Int']>;
  /** Order ID. */
  orderId?: Maybe<Scalars['Int']>;
  /** Original price. */
  originalPrice?: Maybe<Scalars['Float']>;
  /** Order item interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer. */
  parentItem?: Maybe<SalesDataOrderItemInterface>;
  /** Parent item ID. */
  parentItemId?: Maybe<Scalars['Int']>;
  /** Price. */
  price?: Maybe<Scalars['Float']>;
  /** Price including tax. */
  priceInclTax?: Maybe<Scalars['Float']>;
  /** Product ID. */
  productId?: Maybe<Scalars['Int']>;
  /** Product option interface */
  productOption?: Maybe<CatalogDataProductOptionInterface>;
  /** Product type. */
  productType?: Maybe<Scalars['String']>;
  /** Quantity backordered. */
  qtyBackordered?: Maybe<Scalars['Float']>;
  /** Quantity canceled. */
  qtyCanceled?: Maybe<Scalars['Float']>;
  /** Quantity invoiced. */
  qtyInvoiced?: Maybe<Scalars['Float']>;
  /** Quantity ordered. */
  qtyOrdered?: Maybe<Scalars['Float']>;
  /** Quantity refunded. */
  qtyRefunded?: Maybe<Scalars['Float']>;
  /** Quantity returned. */
  qtyReturned?: Maybe<Scalars['Float']>;
  /** Quantity shipped. */
  qtyShipped?: Maybe<Scalars['Float']>;
  /** Quote item ID. */
  quoteItemId?: Maybe<Scalars['Int']>;
  /** Row invoiced. */
  rowInvoiced?: Maybe<Scalars['Float']>;
  /** Row total. */
  rowTotal?: Maybe<Scalars['Float']>;
  /** Row total including tax. */
  rowTotalInclTax?: Maybe<Scalars['Float']>;
  /** Row weight. */
  rowWeight?: Maybe<Scalars['Float']>;
  /** SKU. */
  sku: Scalars['String'];
  /** Store ID. */
  storeId?: Maybe<Scalars['Int']>;
  /** Tax amount. */
  taxAmount?: Maybe<Scalars['Float']>;
  /** Tax before discount. */
  taxBeforeDiscount?: Maybe<Scalars['Float']>;
  /** Tax canceled. */
  taxCanceled?: Maybe<Scalars['Float']>;
  /** Tax invoiced. */
  taxInvoiced?: Maybe<Scalars['Float']>;
  /** Tax percent. */
  taxPercent?: Maybe<Scalars['Float']>;
  /** Tax refunded. */
  taxRefunded?: Maybe<Scalars['Float']>;
  /** Updated-at timestamp. */
  updatedAt?: Maybe<Scalars['String']>;
  /** WEEE tax applied. */
  weeeTaxApplied?: Maybe<Scalars['String']>;
  /** WEEE tax applied amount. */
  weeeTaxAppliedAmount?: Maybe<Scalars['Float']>;
  /** WEEE tax applied row amount. */
  weeeTaxAppliedRowAmount?: Maybe<Scalars['Float']>;
  /** WEEE tax disposition. */
  weeeTaxDisposition?: Maybe<Scalars['Float']>;
  /** WEEE tax row disposition. */
  weeeTaxRowDisposition?: Maybe<Scalars['Float']>;
  /** Weight. */
  weight?: Maybe<Scalars['Float']>;
};

/** ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderItemInterface */
export type SalesDataOrderItemExtensionInterface = {
  /** Interface MessageInterface */
  giftMessage3?: Maybe<GiftMessageDataMessageInterface>;
  invoiceTextCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  taxCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Data model representing a Commmodity Code */
  vertexCommodityCode?: Maybe<VertexTaxDataCommodityCodeInterface>;
  vertexTaxCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Product option interface */
export type CatalogDataProductOptionInterface = {
  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductOptionInterface */
  extensionAttributes?: Maybe<CatalogDataProductOptionExtensionInterface>;
};

/** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductOptionInterface */
export type CatalogDataProductOptionExtensionInterface = {
  bundleOptions?: Maybe<Array<Maybe<BundleDataBundleOptionInterface>>>;
  configurableItemOptions?: Maybe<Array<Maybe<ConfigurableProductDataConfigurableItemOptionValueInterface>>>;
  customOptions?: Maybe<Array<Maybe<CatalogDataCustomOptionInterface>>>;
  /** Downloadable Option */
  downloadableOption?: Maybe<DownloadableDataDownloadableOptionInterface>;
};

/** Interface ShippingInterface */
export type SalesDataShippingInterface = {
  /** Order address interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer. */
  address?: Maybe<SalesDataOrderAddressInterface>;
  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\ShippingInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Shipping method */
  method?: Maybe<Scalars['String']>;
  /** Interface TotalInterface */
  total?: Maybe<SalesDataTotalInterface>;
};

/** Interface TotalInterface */
export type SalesDataTotalInterface = {
  /** Base shipping amount. */
  baseShippingAmount?: Maybe<Scalars['Float']>;
  /** Base shipping canceled. */
  baseShippingCanceled?: Maybe<Scalars['Float']>;
  /** Base shipping discount amount. */
  baseShippingDiscountAmount?: Maybe<Scalars['Float']>;
  /** Base shipping discount tax compensation amount. */
  baseShippingDiscountTaxCompensationAmnt?: Maybe<Scalars['Float']>;
  /** Base shipping including tax. */
  baseShippingInclTax?: Maybe<Scalars['Float']>;
  /** Base shipping invoiced. */
  baseShippingInvoiced?: Maybe<Scalars['Float']>;
  /** Base shipping refunded. */
  baseShippingRefunded?: Maybe<Scalars['Float']>;
  /** Base shipping tax amount. */
  baseShippingTaxAmount?: Maybe<Scalars['Float']>;
  /** Base shipping tax refunded. */
  baseShippingTaxRefunded?: Maybe<Scalars['Float']>;
  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\TotalInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Shipping amount. */
  shippingAmount?: Maybe<Scalars['Float']>;
  /** Shipping canceled amount. */
  shippingCanceled?: Maybe<Scalars['Float']>;
  /** Shipping discount amount. */
  shippingDiscountAmount?: Maybe<Scalars['Float']>;
  /** Shipping discount tax compensation amount. */
  shippingDiscountTaxCompensationAmount?: Maybe<Scalars['Float']>;
  /** Shipping including tax amount. */
  shippingInclTax?: Maybe<Scalars['Float']>;
  /** Shipping invoiced amount. */
  shippingInvoiced?: Maybe<Scalars['Float']>;
  /** Shipping refunded amount. */
  shippingRefunded?: Maybe<Scalars['Float']>;
  /** Shipping tax amount. */
  shippingTaxAmount?: Maybe<Scalars['Float']>;
  /** Shipping tax refunded amount. */
  shippingTaxRefunded?: Maybe<Scalars['Float']>;
};

/** Order payment interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer. */
export type SalesDataOrderPaymentInterface = {
  /** Account status. */
  accountStatus: Scalars['String'];
  /** Additional data. */
  additionalData?: Maybe<Scalars['String']>;
  /** Array of additional information. */
  additionalInformation: Array<Maybe<Scalars['String']>>;
  /** Address status. */
  addressStatus?: Maybe<Scalars['String']>;
  /** Amount authorized. */
  amountAuthorized?: Maybe<Scalars['Float']>;
  /** Amount canceled. */
  amountCanceled?: Maybe<Scalars['Float']>;
  /** Amount ordered. */
  amountOrdered?: Maybe<Scalars['Float']>;
  /** Amount paid. */
  amountPaid?: Maybe<Scalars['Float']>;
  /** Amount refunded. */
  amountRefunded?: Maybe<Scalars['Float']>;
  /** Anet transaction method. */
  anetTransMethod?: Maybe<Scalars['String']>;
  /** Base amount authorized. */
  baseAmountAuthorized?: Maybe<Scalars['Float']>;
  /** Base amount canceled. */
  baseAmountCanceled?: Maybe<Scalars['Float']>;
  /** Base amount ordered. */
  baseAmountOrdered?: Maybe<Scalars['Float']>;
  /** Base amount paid. */
  baseAmountPaid?: Maybe<Scalars['Float']>;
  /** Base amount paid online. */
  baseAmountPaidOnline?: Maybe<Scalars['Float']>;
  /** Base amount refunded. */
  baseAmountRefunded?: Maybe<Scalars['Float']>;
  /** Base amount refunded online. */
  baseAmountRefundedOnline?: Maybe<Scalars['Float']>;
  /** Base shipping amount. */
  baseShippingAmount?: Maybe<Scalars['Float']>;
  /** Base shipping captured amount. */
  baseShippingCaptured?: Maybe<Scalars['Float']>;
  /** Base shipping refunded amount. */
  baseShippingRefunded?: Maybe<Scalars['Float']>;
  /** Credit card approval. */
  ccApproval?: Maybe<Scalars['String']>;
  /** Credit card avs status. */
  ccAvsStatus?: Maybe<Scalars['String']>;
  /** Credit card CID status. */
  ccCidStatus?: Maybe<Scalars['String']>;
  /** Credit card debug request body. */
  ccDebugRequestBody?: Maybe<Scalars['String']>;
  /** Credit card debug response body. */
  ccDebugResponseBody?: Maybe<Scalars['String']>;
  /** Credit card debug response serialized. */
  ccDebugResponseSerialized?: Maybe<Scalars['String']>;
  /** Credit card expiration month. */
  ccExpMonth?: Maybe<Scalars['String']>;
  /** Credit card expiration year. */
  ccExpYear?: Maybe<Scalars['String']>;
  /** Last four digits of the credit card. */
  ccLast4: Scalars['String'];
  /** Encrypted credit card number. */
  ccNumberEnc?: Maybe<Scalars['String']>;
  /** Credit card number. */
  ccOwner?: Maybe<Scalars['String']>;
  /** Credit card secure verify. */
  ccSecureVerify?: Maybe<Scalars['String']>;
  /** Credit card SS issue. */
  ccSsIssue?: Maybe<Scalars['String']>;
  /** Credit card SS start month. */
  ccSsStartMonth?: Maybe<Scalars['String']>;
  /** Credit card SS start year. */
  ccSsStartYear?: Maybe<Scalars['String']>;
  /** Credit card status. */
  ccStatus?: Maybe<Scalars['String']>;
  /** Credit card status description. */
  ccStatusDescription?: Maybe<Scalars['String']>;
  /** Credit card transaction ID. */
  ccTransId?: Maybe<Scalars['String']>;
  /** Credit card type. */
  ccType?: Maybe<Scalars['String']>;
  /** eCheck account name. */
  echeckAccountName?: Maybe<Scalars['String']>;
  /** eCheck account type. */
  echeckAccountType?: Maybe<Scalars['String']>;
  /** eCheck bank name. */
  echeckBankName?: Maybe<Scalars['String']>;
  /** eCheck routing number. */
  echeckRoutingNumber?: Maybe<Scalars['String']>;
  /** eCheck type. */
  echeckType?: Maybe<Scalars['String']>;
  /** Entity ID. */
  entityId?: Maybe<Scalars['Int']>;
  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderPaymentInterface */
  extensionAttributes?: Maybe<SalesDataOrderPaymentExtensionInterface>;
  /** Last transaction ID. */
  lastTransId?: Maybe<Scalars['String']>;
  /** Method. */
  method: Scalars['String'];
  /** Parent ID. */
  parentId?: Maybe<Scalars['Int']>;
  /** PO number. */
  poNumber?: Maybe<Scalars['String']>;
  /** Protection eligibility. */
  protectionEligibility?: Maybe<Scalars['String']>;
  /** Quote payment ID. */
  quotePaymentId?: Maybe<Scalars['Int']>;
  /** Shipping amount. */
  shippingAmount?: Maybe<Scalars['Float']>;
  /** Shipping captured. */
  shippingCaptured?: Maybe<Scalars['Float']>;
  /** Shipping refunded. */
  shippingRefunded?: Maybe<Scalars['Float']>;
};

/** ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderPaymentInterface */
export type SalesDataOrderPaymentExtensionInterface = {
  notificationMessage?: Maybe<Scalars['String']>;
  /** Gateway vault payment token interface. */
  vaultPaymentToken?: Maybe<VaultDataPaymentTokenInterface>;
};

/** Gateway vault payment token interface. */
export type VaultDataPaymentTokenInterface = {
  /** Token creation timestamp */
  createdAt?: Maybe<Scalars['String']>;
  /** Customer ID. */
  customerId?: Maybe<Scalars['Int']>;
  /** Entity ID. */
  entityId?: Maybe<Scalars['Int']>;
  /** Token expiration timestamp */
  expiresAt?: Maybe<Scalars['String']>;
  /** Gateway token ID */
  gatewayToken: Scalars['String'];
  /** Is active. */
  isActive: Scalars['Boolean'];
  /** Is visible. */
  isVisible: Scalars['Boolean'];
  /** Payment method code */
  paymentMethodCode: Scalars['String'];
  /** Public hash */
  publicHash: Scalars['String'];
  /** Token details */
  tokenDetails: Scalars['String'];
  /** Type */
  type: Scalars['String'];
};

/** Order status history interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer. */
export type SalesDataOrderStatusHistoryInterface = {
  /** Comment. */
  comment: Scalars['String'];
  /** Created-at timestamp. */
  createdAt?: Maybe<Scalars['String']>;
  /** Order status history ID. */
  entityId?: Maybe<Scalars['Int']>;
  /** Entity name. */
  entityName?: Maybe<Scalars['String']>;
  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderStatusHistoryInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Is-customer-notified flag value. */
  isCustomerNotified: Scalars['Int'];
  /** Is-visible-on-storefront flag value. */
  isVisibleOnFront: Scalars['Int'];
  /** Parent ID. */
  parentId: Scalars['Int'];
  /** Status. */
  status?: Maybe<Scalars['String']>;
};

export type V1VesTrackorderTrackInput = {
  code?: InputMaybe<Scalars['String']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  orderId?: InputMaybe<Scalars['String']>;
};

export type newCatalogDataProductSearchResultsInterface = {
  totalCount?: Maybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CatalogDataProductRenderSearchResultsInterface: ResolverTypeWrapper<CatalogDataProductRenderSearchResultsInterface>;
  CatalogDataProductRenderInterface: ResolverTypeWrapper<CatalogDataProductRenderInterface>;
  CatalogDataProductRenderButtonInterface: ResolverTypeWrapper<CatalogDataProductRenderButtonInterface>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  CatalogDataProductRenderExtensionInterface: ResolverTypeWrapper<CatalogDataProductRenderExtensionInterface>;
  CatalogDataProductRenderImageInterface: ResolverTypeWrapper<CatalogDataProductRenderImageInterface>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  CatalogDataProductRenderPriceInfoInterface: ResolverTypeWrapper<CatalogDataProductRenderPriceInfoInterface>;
  CatalogDataProductRenderPriceInfoExtensionInterface: ResolverTypeWrapper<CatalogDataProductRenderPriceInfoExtensionInterface>;
  MsrpDataProductRenderMsrpPriceInfoInterface: ResolverTypeWrapper<MsrpDataProductRenderMsrpPriceInfoInterface>;
  WeeeDataProductRenderWeeeAdjustmentAttributeInterface: ResolverTypeWrapper<WeeeDataProductRenderWeeeAdjustmentAttributeInterface>;
  CatalogDataProductRenderFormattedPriceInfoInterface: ResolverTypeWrapper<CatalogDataProductRenderFormattedPriceInfoInterface>;
  CatalogDataProductSearchResultsInterface: ResolverTypeWrapper<CatalogDataProductSearchResultsInterface>;
  CatalogDataProductInterface: ResolverTypeWrapper<CatalogDataProductInterface>;
  FrameworkAttributeInterface: ResolverTypeWrapper<FrameworkAttributeInterface>;
  CatalogDataProductExtensionInterface: ResolverTypeWrapper<CatalogDataProductExtensionInterface>;
  BundleDataOptionInterface: ResolverTypeWrapper<BundleDataOptionInterface>;
  BundleDataLinkInterface: ResolverTypeWrapper<BundleDataLinkInterface>;
  CatalogDataCategoryLinkInterface: ResolverTypeWrapper<CatalogDataCategoryLinkInterface>;
  ConfigurableProductDataOptionInterface: ResolverTypeWrapper<ConfigurableProductDataOptionInterface>;
  ConfigurableProductDataOptionValueInterface: ResolverTypeWrapper<ConfigurableProductDataOptionValueInterface>;
  DownloadableDataLinkInterface: ResolverTypeWrapper<DownloadableDataLinkInterface>;
  DownloadableDataFileContentInterface: ResolverTypeWrapper<DownloadableDataFileContentInterface>;
  DownloadableDataSampleInterface: ResolverTypeWrapper<DownloadableDataSampleInterface>;
  CatalogInventoryDataStockItemInterface: ResolverTypeWrapper<CatalogInventoryDataStockItemInterface>;
  VertexTaxDataCommodityCodeInterface: ResolverTypeWrapper<VertexTaxDataCommodityCodeInterface>;
  CatalogDataProductAttributeMediaGalleryEntryInterface: ResolverTypeWrapper<CatalogDataProductAttributeMediaGalleryEntryInterface>;
  FrameworkDataImageContentInterface: ResolverTypeWrapper<FrameworkDataImageContentInterface>;
  CatalogDataProductAttributeMediaGalleryEntryExtensionInterface: ResolverTypeWrapper<CatalogDataProductAttributeMediaGalleryEntryExtensionInterface>;
  FrameworkDataVideoContentInterface: ResolverTypeWrapper<FrameworkDataVideoContentInterface>;
  CatalogDataProductCustomOptionInterface: ResolverTypeWrapper<CatalogDataProductCustomOptionInterface>;
  CatalogDataProductCustomOptionExtensionInterface: ResolverTypeWrapper<CatalogDataProductCustomOptionExtensionInterface>;
  CatalogDataProductCustomOptionValuesInterface: ResolverTypeWrapper<CatalogDataProductCustomOptionValuesInterface>;
  CatalogDataProductLinkInterface: ResolverTypeWrapper<CatalogDataProductLinkInterface>;
  CatalogDataProductLinkExtensionInterface: ResolverTypeWrapper<CatalogDataProductLinkExtensionInterface>;
  CatalogDataProductTierPriceInterface: ResolverTypeWrapper<CatalogDataProductTierPriceInterface>;
  CatalogDataProductTierPriceExtensionInterface: ResolverTypeWrapper<CatalogDataProductTierPriceExtensionInterface>;
  FrameworkSearchCriteriaInterface: ResolverTypeWrapper<FrameworkSearchCriteriaInterface>;
  FrameworkSearchFilterGroup: ResolverTypeWrapper<FrameworkSearchFilterGroup>;
  FrameworkFilter: ResolverTypeWrapper<FrameworkFilter>;
  FrameworkSortOrder: ResolverTypeWrapper<FrameworkSortOrder>;
  CheckoutDataPaymentDetailsInterface: ResolverTypeWrapper<CheckoutDataPaymentDetailsInterface>;
  QuoteDataPaymentMethodInterface: ResolverTypeWrapper<QuoteDataPaymentMethodInterface>;
  QuoteDataTotalsInterface: ResolverTypeWrapper<QuoteDataTotalsInterface>;
  QuoteDataTotalsExtensionInterface: ResolverTypeWrapper<QuoteDataTotalsExtensionInterface>;
  QuoteDataTotalsItemInterface: ResolverTypeWrapper<QuoteDataTotalsItemInterface>;
  QuoteDataTotalSegmentInterface: ResolverTypeWrapper<QuoteDataTotalSegmentInterface>;
  QuoteDataTotalSegmentExtensionInterface: ResolverTypeWrapper<QuoteDataTotalSegmentExtensionInterface>;
  TaxDataGrandTotalDetailsInterface: ResolverTypeWrapper<TaxDataGrandTotalDetailsInterface>;
  TaxDataGrandTotalRatesInterface: ResolverTypeWrapper<TaxDataGrandTotalRatesInterface>;
  DirectoryDataCountryInformationInterface: ResolverTypeWrapper<DirectoryDataCountryInformationInterface>;
  DirectoryDataRegionInformationInterface: ResolverTypeWrapper<DirectoryDataRegionInformationInterface>;
  DirectoryDataCurrencyInformationInterface: ResolverTypeWrapper<DirectoryDataCurrencyInformationInterface>;
  DirectoryDataExchangeRateInterface: ResolverTypeWrapper<DirectoryDataExchangeRateInterface>;
  FrameworkSearchSearchResultInterface: ResolverTypeWrapper<FrameworkSearchSearchResultInterface>;
  FrameworkSearchAggregationInterface: ResolverTypeWrapper<FrameworkSearchAggregationInterface>;
  FrameworkSearchBucketInterface: ResolverTypeWrapper<FrameworkSearchBucketInterface>;
  FrameworkSearchAggregationValueInterface: ResolverTypeWrapper<FrameworkSearchAggregationValueInterface>;
  FrameworkSearchDocumentInterface: ResolverTypeWrapper<FrameworkSearchDocumentInterface>;
  FrameworkSearchSearchCriteriaInterface: ResolverTypeWrapper<FrameworkSearchSearchCriteriaInterface>;
  GiftMessageDataMessageInterface: ResolverTypeWrapper<GiftMessageDataMessageInterface>;
  GiftMessageDataMessageExtensionInterface: ResolverTypeWrapper<GiftMessageDataMessageExtensionInterface>;
  InventoryInStorePickupApiDataSearchResultInterface: ResolverTypeWrapper<InventoryInStorePickupApiDataSearchResultInterface>;
  InventoryInStorePickupApiDataPickupLocationInterface: ResolverTypeWrapper<InventoryInStorePickupApiDataPickupLocationInterface>;
  InventoryInStorePickupApiDataSearchRequestInterface: ResolverTypeWrapper<InventoryInStorePickupApiDataSearchRequestInterface>;
  InventoryInStorePickupApiDataSearchRequestAreaInterface: ResolverTypeWrapper<InventoryInStorePickupApiDataSearchRequestAreaInterface>;
  InventoryInStorePickupApiDataSearchRequestExtensionInterface: ResolverTypeWrapper<InventoryInStorePickupApiDataSearchRequestExtensionInterface>;
  InventoryInStorePickupApiDataSearchRequestProductInfoInterface: ResolverTypeWrapper<InventoryInStorePickupApiDataSearchRequestProductInfoInterface>;
  InventoryInStorePickupApiDataSearchRequestFiltersInterface: ResolverTypeWrapper<InventoryInStorePickupApiDataSearchRequestFiltersInterface>;
  InventoryInStorePickupApiDataSearchRequestFilterInterface: ResolverTypeWrapper<InventoryInStorePickupApiDataSearchRequestFilterInterface>;
  LofAutosearchDataSearchResultInterface: ResolverTypeWrapper<LofAutosearchDataSearchResultInterface>;
  LofAutosearchDataItemInterface: ResolverTypeWrapper<LofAutosearchDataItemInterface>;
  LofBannerSliderDataBannerInterface: ResolverTypeWrapper<LofBannerSliderDataBannerInterface>;
  LofBannerSliderDataResourceMapInterface: ResolverTypeWrapper<LofBannerSliderDataResourceMapInterface>;
  LofBannerSliderDataBannerSearchResultInterface: ResolverTypeWrapper<LofBannerSliderDataBannerSearchResultInterface>;
  LofBannerSliderDataSliderInterface: ResolverTypeWrapper<LofBannerSliderDataSliderInterface>;
  LofBannerSliderDataSliderSearchResultInterface: ResolverTypeWrapper<LofBannerSliderDataSliderSearchResultInterface>;
  LofChatWootDataChatwootInterface: ResolverTypeWrapper<LofChatWootDataChatwootInterface>;
  LofChatWootDataChatwootSearchResultsInterface: ResolverTypeWrapper<LofChatWootDataChatwootSearchResultsInterface>;
  LofFormbuilderDataFormbuilderDesignInterface: ResolverTypeWrapper<LofFormbuilderDataFormbuilderDesignInterface>;
  LofFormbuilderDataFieldDesignInterface: ResolverTypeWrapper<LofFormbuilderDataFieldDesignInterface>;
  LofFormbuilderDataFieldOptionInterface: ResolverTypeWrapper<LofFormbuilderDataFieldOptionInterface>;
  LofFormbuilderDataFormbuilderInterface: ResolverTypeWrapper<LofFormbuilderDataFormbuilderInterface>;
  LofMarketPlaceDataGroupSearchResultsInterface: ResolverTypeWrapper<LofMarketPlaceDataGroupSearchResultsInterface>;
  LofMarketPlaceDataGroupInterface: ResolverTypeWrapper<LofMarketPlaceDataGroupInterface>;
  LofMarketPlaceDataRatingInterface: ResolverTypeWrapper<LofMarketPlaceDataRatingInterface>;
  LofMarketPlaceDataRatingSearchResultsInterface: ResolverTypeWrapper<LofMarketPlaceDataRatingSearchResultsInterface>;
  LofMarketPlaceDataReviewSearchResultsInterface: ResolverTypeWrapper<LofMarketPlaceDataReviewSearchResultsInterface>;
  LofMarketPlaceDataReviewInterface: ResolverTypeWrapper<LofMarketPlaceDataReviewInterface>;
  LofMarketPlaceDataSellerInterface: ResolverTypeWrapper<LofMarketPlaceDataSellerInterface>;
  LofMarketPlaceDataSellerProductSearchResultsInterface: ResolverTypeWrapper<LofMarketPlaceDataSellerProductSearchResultsInterface>;
  LofMarketPlaceDataProductInterface: ResolverTypeWrapper<LofMarketPlaceDataProductInterface>;
  LofMarketPlaceDataSummaryRatingInterface: ResolverTypeWrapper<LofMarketPlaceDataSummaryRatingInterface>;
  LofMarketPlaceDataSellerVacationInterface: ResolverTypeWrapper<LofMarketPlaceDataSellerVacationInterface>;
  LofMarketPlaceDataSellersSearchResultsInterface: ResolverTypeWrapper<LofMarketPlaceDataSellersSearchResultsInterface>;
  LofMobileDataMobileNavSidebarInterface: ResolverTypeWrapper<LofMobileDataMobileNavSidebarInterface>;
  LofProductReviewsDataReviewDataInterface: ResolverTypeWrapper<LofProductReviewsDataReviewDataInterface>;
  LofProductReviewsDataDetailedSummaryInterface: ResolverTypeWrapper<LofProductReviewsDataDetailedSummaryInterface>;
  LofProductReviewsDataReviewInterface: ResolverTypeWrapper<LofProductReviewsDataReviewInterface>;
  LofProductReviewsDataReplyInterface: ResolverTypeWrapper<LofProductReviewsDataReplyInterface>;
  LofProductReviewsDataCustomizeInterface: ResolverTypeWrapper<LofProductReviewsDataCustomizeInterface>;
  LofProductReviewsDataGalleryInterface: ResolverTypeWrapper<LofProductReviewsDataGalleryInterface>;
  LofProductReviewsDataImageInterface: ResolverTypeWrapper<LofProductReviewsDataImageInterface>;
  LofProductReviewsDataRatingVoteInterface: ResolverTypeWrapper<LofProductReviewsDataRatingVoteInterface>;
  LofProductTagsDataTagSearchResultsInterface: ResolverTypeWrapper<LofProductTagsDataTagSearchResultsInterface>;
  LofProductTagsDataTagInterface: ResolverTypeWrapper<LofProductTagsDataTagInterface>;
  LofmpBlogDataCommentSearchResultsInterface: ResolverTypeWrapper<LofmpBlogDataCommentSearchResultsInterface>;
  LofmpBlogDataCommentInterface: ResolverTypeWrapper<LofmpBlogDataCommentInterface>;
  LofmpBlogDataCategoryInterface: ResolverTypeWrapper<LofmpBlogDataCategoryInterface>;
  LofmpBlogDataCategorySearchResultsInterface: ResolverTypeWrapper<LofmpBlogDataCategorySearchResultsInterface>;
  LofmpBlogDataPostInterface: ResolverTypeWrapper<LofmpBlogDataPostInterface>;
  LofmpBlogDataTagInterface: ResolverTypeWrapper<LofmpBlogDataTagInterface>;
  LofmpBlogDataPostSearchResultsInterface: ResolverTypeWrapper<LofmpBlogDataPostSearchResultsInterface>;
  LofmpBlogDataTagSearchResultsInterface: ResolverTypeWrapper<LofmpBlogDataTagSearchResultsInterface>;
  LofmpCouponCodeDataCouponSearchResultsInterface: ResolverTypeWrapper<LofmpCouponCodeDataCouponSearchResultsInterface>;
  LofmpCouponCodeDataCouponInterface: ResolverTypeWrapper<LofmpCouponCodeDataCouponInterface>;
  LofmpRmaDataAddressInterface: ResolverTypeWrapper<LofmpRmaDataAddressInterface>;
  LofmpRmaDataAddressSearchResultsInterface: ResolverTypeWrapper<LofmpRmaDataAddressSearchResultsInterface>;
  LofmpRmaDataConditionInterface: ResolverTypeWrapper<LofmpRmaDataConditionInterface>;
  LofmpRmaDataConditionSearchResultsInterface: ResolverTypeWrapper<LofmpRmaDataConditionSearchResultsInterface>;
  LofmpRmaDataFieldInterface: ResolverTypeWrapper<LofmpRmaDataFieldInterface>;
  LofmpRmaDataFieldSearchResultsInterface: ResolverTypeWrapper<LofmpRmaDataFieldSearchResultsInterface>;
  LofmpRmaDataQuickResponseInterface: ResolverTypeWrapper<LofmpRmaDataQuickResponseInterface>;
  LofmpRmaDataQuickResponseSearchResultsInterface: ResolverTypeWrapper<LofmpRmaDataQuickResponseSearchResultsInterface>;
  LofmpRmaDataReasonInterface: ResolverTypeWrapper<LofmpRmaDataReasonInterface>;
  LofmpRmaDataReasonSearchResultsInterface: ResolverTypeWrapper<LofmpRmaDataReasonSearchResultsInterface>;
  LofmpRmaDataResolutionInterface: ResolverTypeWrapper<LofmpRmaDataResolutionInterface>;
  LofmpRmaDataResolutionSearchResultsInterface: ResolverTypeWrapper<LofmpRmaDataResolutionSearchResultsInterface>;
  LofmpRmaDataStatusInterface: ResolverTypeWrapper<LofmpRmaDataStatusInterface>;
  LofmpRmaDataStatusSearchResultsInterface: ResolverTypeWrapper<LofmpRmaDataStatusSearchResultsInterface>;
  PayPalBraintreeDataAuthDataInterface: ResolverTypeWrapper<PayPalBraintreeDataAuthDataInterface>;
  QuoteDataAddressInterface: ResolverTypeWrapper<QuoteDataAddressInterface>;
  QuoteDataAddressExtensionInterface: ResolverTypeWrapper<QuoteDataAddressExtensionInterface>;
  SalesRuleDataRuleDiscountInterface: ResolverTypeWrapper<SalesRuleDataRuleDiscountInterface>;
  SalesRuleDataDiscountDataInterface: ResolverTypeWrapper<SalesRuleDataDiscountDataInterface>;
  QuoteDataCartInterface: ResolverTypeWrapper<QuoteDataCartInterface>;
  QuoteDataCurrencyInterface: ResolverTypeWrapper<QuoteDataCurrencyInterface>;
  CustomerDataCustomerInterface: ResolverTypeWrapper<CustomerDataCustomerInterface>;
  CustomerDataAddressInterface: ResolverTypeWrapper<CustomerDataAddressInterface>;
  CustomerDataRegionInterface: ResolverTypeWrapper<CustomerDataRegionInterface>;
  CustomerDataCustomerExtensionInterface: ResolverTypeWrapper<CustomerDataCustomerExtensionInterface>;
  LofMarketPermissionsDataSellerCustomerInterface: ResolverTypeWrapper<LofMarketPermissionsDataSellerCustomerInterface>;
  QuoteDataCartExtensionInterface: ResolverTypeWrapper<QuoteDataCartExtensionInterface>;
  AmazonPaymentDataQuoteLinkInterface: ResolverTypeWrapper<AmazonPaymentDataQuoteLinkInterface>;
  QuoteDataShippingAssignmentInterface: ResolverTypeWrapper<QuoteDataShippingAssignmentInterface>;
  QuoteDataCartItemInterface: ResolverTypeWrapper<QuoteDataCartItemInterface>;
  QuoteDataCartItemExtensionInterface: ResolverTypeWrapper<QuoteDataCartItemExtensionInterface>;
  QuoteDataProductOptionInterface: ResolverTypeWrapper<QuoteDataProductOptionInterface>;
  QuoteDataProductOptionExtensionInterface: ResolverTypeWrapper<QuoteDataProductOptionExtensionInterface>;
  BundleDataBundleOptionInterface: ResolverTypeWrapper<BundleDataBundleOptionInterface>;
  ConfigurableProductDataConfigurableItemOptionValueInterface: ResolverTypeWrapper<ConfigurableProductDataConfigurableItemOptionValueInterface>;
  CatalogDataCustomOptionInterface: ResolverTypeWrapper<CatalogDataCustomOptionInterface>;
  CatalogDataCustomOptionExtensionInterface: ResolverTypeWrapper<CatalogDataCustomOptionExtensionInterface>;
  DownloadableDataDownloadableOptionInterface: ResolverTypeWrapper<DownloadableDataDownloadableOptionInterface>;
  GroupedProductDataGroupedOptionsInterface: ResolverTypeWrapper<GroupedProductDataGroupedOptionsInterface>;
  QuoteDataShippingInterface: ResolverTypeWrapper<QuoteDataShippingInterface>;
  QuoteDataPaymentInterface: ResolverTypeWrapper<QuoteDataPaymentInterface>;
  QuoteDataPaymentExtensionInterface: ResolverTypeWrapper<QuoteDataPaymentExtensionInterface>;
  QuoteDataShippingMethodInterface: ResolverTypeWrapper<QuoteDataShippingMethodInterface>;
  LofMobileDataMobileCmsPageInterface: ResolverTypeWrapper<LofMobileDataMobileCmsPageInterface>;
  LofMobileDataMobileSuggestionTagInterface: ResolverTypeWrapper<LofMobileDataMobileSuggestionTagInterface>;
  LofProductTagsDataTagProductLinkInterface: ResolverTypeWrapper<LofProductTagsDataTagProductLinkInterface>;
  VesMegamenuDataItemInterface: ResolverTypeWrapper<VesMegamenuDataItemInterface>;
  VesMegamenuDataItemSearchResultsInterface: ResolverTypeWrapper<VesMegamenuDataItemSearchResultsInterface>;
  VesMegamenuDataMenuFrontendInterface: ResolverTypeWrapper<VesMegamenuDataMenuFrontendInterface>;
  VesMegamenuDataDesignStyleInterface: ResolverTypeWrapper<VesMegamenuDataDesignStyleInterface>;
  VesMegamenuDataMenuTreeItemInterface: ResolverTypeWrapper<VesMegamenuDataMenuTreeItemInterface>;
  Mutation: ResolverTypeWrapper<{}>;
  V1AmazonBillingAddressInput: V1AmazonBillingAddressInput;
  V1AmazonShippingAddressInput: V1AmazonShippingAddressInput;
  ErrorResponse: ResolverTypeWrapper<ErrorResponse>;
  ErrorErrorsItem: ResolverTypeWrapper<ErrorErrorsItem>;
  ErrorParametersItem: ResolverTypeWrapper<ErrorParametersItem>;
  V1GuestCartPaymentInformationInput: V1GuestCartPaymentInformationInput;
  QuoteDataAddressInterfaceInput: QuoteDataAddressInterfaceInput;
  FrameworkAttributeInterfaceInput: FrameworkAttributeInterfaceInput;
  QuoteDataAddressExtensionInterfaceInput: QuoteDataAddressExtensionInterfaceInput;
  SalesRuleDataRuleDiscountInterfaceInput: SalesRuleDataRuleDiscountInterfaceInput;
  SalesRuleDataDiscountDataInterfaceInput: SalesRuleDataDiscountDataInterfaceInput;
  QuoteDataPaymentInterfaceInput: QuoteDataPaymentInterfaceInput;
  QuoteDataPaymentExtensionInterfaceInput: QuoteDataPaymentExtensionInterfaceInput;
  V1GuestCartSetPaymentInformationInput: V1GuestCartSetPaymentInformationInput;
  V1GuestCartShippingInformationInput: V1GuestCartShippingInformationInput;
  CheckoutDataShippingInformationInterfaceInput: CheckoutDataShippingInformationInterfaceInput;
  V1GuestCartTotalsInformationInput: V1GuestCartTotalsInformationInput;
  CheckoutDataTotalsInformationInterfaceInput: CheckoutDataTotalsInformationInterfaceInput;
  V1CustomersInput: V1CustomersInput;
  CustomerDataCustomerInterfaceInput: CustomerDataCustomerInterfaceInput;
  CustomerDataAddressInterfaceInput: CustomerDataAddressInterfaceInput;
  CustomerDataRegionInterfaceInput: CustomerDataRegionInterfaceInput;
  CustomerDataCustomerExtensionInterfaceInput: CustomerDataCustomerExtensionInterfaceInput;
  LofMarketPermissionsDataSellerCustomerInterfaceInput: LofMarketPermissionsDataSellerCustomerInterfaceInput;
  V1CustomersPasswordInput: V1CustomersPasswordInput;
  V1CustomersIsEmailAvailableInput: V1CustomersIsEmailAvailableInput;
  V1CustomersResetPasswordInput: V1CustomersResetPasswordInput;
  EcomteckAdvancedContactDataRequestInterface: ResolverTypeWrapper<EcomteckAdvancedContactDataRequestInterface>;
  EcomteckAdvancedContactDataInfoInterface: ResolverTypeWrapper<EcomteckAdvancedContactDataInfoInterface>;
  V1ContactPostInput: V1ContactPostInput;
  EcomteckAdvancedContactDataRequestInterfaceInput: EcomteckAdvancedContactDataRequestInterfaceInput;
  EcomteckAdvancedContactDataInfoInterfaceInput: EcomteckAdvancedContactDataInfoInterfaceInput;
  V1GuestCartGiftMessageInput: V1GuestCartGiftMessageInput;
  GiftMessageDataMessageInterfaceInput: GiftMessageDataMessageInterfaceInput;
  GiftMessageDataMessageExtensionInterfaceInput: GiftMessageDataMessageExtensionInterfaceInput;
  V1IntegrationAdminTokenInput: V1IntegrationAdminTokenInput;
  V1IntegrationCustomerTokenInput: V1IntegrationCustomerTokenInput;
  V1LofChatwootChatwootInput: V1LofChatwootChatwootInput;
  LofChatWootDataChatwootInterfaceInput: LofChatWootDataChatwootInterfaceInput;
  V1SellerRegisterInput: V1SellerRegisterInput;
  LofMarketPlaceDataRegisterSellerInterfaceInput: LofMarketPlaceDataRegisterSellerInterfaceInput;
  V1ReviewsGuestReplyInput: V1ReviewsGuestReplyInput;
  LofProductReviewsDataReplyInterfaceInput: LofProductReviewsDataReplyInterfaceInput;
  V1LofmobileAppleLoginInput: V1LofmobileAppleLoginInput;
  V1LofmobileSocialLoginInput: V1LofmobileSocialLoginInput;
  V1SplitCartGuestPaymentInformationInput: V1SplitCartGuestPaymentInformationInput;
  LofmpSplitCartDataQuoteInterface: ResolverTypeWrapper<LofmpSplitCartDataQuoteInterface>;
  V1GuestCartBillingAddressInput: V1GuestCartBillingAddressInput;
  V1GuestCartItems2Input: V1GuestCartItems2Input;
  QuoteDataCartItemInterfaceInput: QuoteDataCartItemInterfaceInput;
  QuoteDataCartItemExtensionInterfaceInput: QuoteDataCartItemExtensionInterfaceInput;
  QuoteDataProductOptionInterfaceInput: QuoteDataProductOptionInterfaceInput;
  QuoteDataProductOptionExtensionInterfaceInput: QuoteDataProductOptionExtensionInterfaceInput;
  BundleDataBundleOptionInterfaceInput: BundleDataBundleOptionInterfaceInput;
  ConfigurableProductDataConfigurableItemOptionValueInterfaceInput: ConfigurableProductDataConfigurableItemOptionValueInterfaceInput;
  CatalogDataCustomOptionInterfaceInput: CatalogDataCustomOptionInterfaceInput;
  CatalogDataCustomOptionExtensionInterfaceInput: CatalogDataCustomOptionExtensionInterfaceInput;
  FrameworkDataImageContentInterfaceInput: FrameworkDataImageContentInterfaceInput;
  DownloadableDataDownloadableOptionInterfaceInput: DownloadableDataDownloadableOptionInterfaceInput;
  GroupedProductDataGroupedOptionsInterfaceInput: GroupedProductDataGroupedOptionsInterfaceInput;
  V1GuestCartItemInput: V1GuestCartItemInput;
  V1GuestCartOrderInput: V1GuestCartOrderInput;
  V1GuestCartCollectTotalsInput: V1GuestCartCollectTotalsInput;
  QuoteDataTotalsAdditionalDataInterfaceInput: QuoteDataTotalsAdditionalDataInterfaceInput;
  QuoteDataTotalsAdditionalDataExtensionInterfaceInput: QuoteDataTotalsAdditionalDataExtensionInterfaceInput;
  V1GuestCartSelectedPaymentMethodInput: V1GuestCartSelectedPaymentMethodInput;
  V1GuestCartEstimateShippingMethodsInput: V1GuestCartEstimateShippingMethodsInput;
  V1ElasticsuiteTrackerHitInput: V1ElasticsuiteTrackerHitInput;
  V1VertexAddressValidationVertexAddressInput: V1VertexAddressValidationVertexAddressInput;
  VertexAddressValidationApiDataCleansedAddressInterface: ResolverTypeWrapper<VertexAddressValidationApiDataCleansedAddressInterface>;
  V1GuestAddressCleanseInput: V1GuestAddressCleanseInput;
  VertexAddressValidationApiDataAddressInterfaceInput: VertexAddressValidationApiDataAddressInterfaceInput;
  V1VesTrackorderSendInput: V1VesTrackorderSendInput;
  SalesDataOrderInterface: ResolverTypeWrapper<SalesDataOrderInterface>;
  SalesDataOrderAddressInterface: ResolverTypeWrapper<SalesDataOrderAddressInterface>;
  SalesDataOrderAddressExtensionInterface: ResolverTypeWrapper<SalesDataOrderAddressExtensionInterface>;
  SalesDataOrderExtensionInterface: ResolverTypeWrapper<SalesDataOrderExtensionInterface>;
  AmazonPaymentDataOrderLinkInterface: ResolverTypeWrapper<AmazonPaymentDataOrderLinkInterface>;
  TaxDataOrderTaxDetailsAppliedTaxInterface: ResolverTypeWrapper<TaxDataOrderTaxDetailsAppliedTaxInterface>;
  TaxDataOrderTaxDetailsAppliedTaxExtensionInterface: ResolverTypeWrapper<TaxDataOrderTaxDetailsAppliedTaxExtensionInterface>;
  TaxDataAppliedTaxRateInterface: ResolverTypeWrapper<TaxDataAppliedTaxRateInterface>;
  TaxDataOrderTaxDetailsItemInterface: ResolverTypeWrapper<TaxDataOrderTaxDetailsItemInterface>;
  PaymentDataPaymentAdditionalInfoInterface: ResolverTypeWrapper<PaymentDataPaymentAdditionalInfoInterface>;
  SalesDataShippingAssignmentInterface: ResolverTypeWrapper<SalesDataShippingAssignmentInterface>;
  SalesDataOrderItemInterface: ResolverTypeWrapper<SalesDataOrderItemInterface>;
  SalesDataOrderItemExtensionInterface: ResolverTypeWrapper<SalesDataOrderItemExtensionInterface>;
  CatalogDataProductOptionInterface: ResolverTypeWrapper<CatalogDataProductOptionInterface>;
  CatalogDataProductOptionExtensionInterface: ResolverTypeWrapper<CatalogDataProductOptionExtensionInterface>;
  SalesDataShippingInterface: ResolverTypeWrapper<SalesDataShippingInterface>;
  SalesDataTotalInterface: ResolverTypeWrapper<SalesDataTotalInterface>;
  SalesDataOrderPaymentInterface: ResolverTypeWrapper<SalesDataOrderPaymentInterface>;
  SalesDataOrderPaymentExtensionInterface: ResolverTypeWrapper<SalesDataOrderPaymentExtensionInterface>;
  VaultDataPaymentTokenInterface: ResolverTypeWrapper<VaultDataPaymentTokenInterface>;
  SalesDataOrderStatusHistoryInterface: ResolverTypeWrapper<SalesDataOrderStatusHistoryInterface>;
  V1VesTrackorderTrackInput: V1VesTrackorderTrackInput;
  newCatalogDataProductSearchResultsInterface: ResolverTypeWrapper<newCatalogDataProductSearchResultsInterface>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  String: Scalars['String'];
  Int: Scalars['Int'];
  Boolean: Scalars['Boolean'];
  CatalogDataProductRenderSearchResultsInterface: CatalogDataProductRenderSearchResultsInterface;
  CatalogDataProductRenderInterface: CatalogDataProductRenderInterface;
  CatalogDataProductRenderButtonInterface: CatalogDataProductRenderButtonInterface;
  JSON: Scalars['JSON'];
  CatalogDataProductRenderExtensionInterface: CatalogDataProductRenderExtensionInterface;
  CatalogDataProductRenderImageInterface: CatalogDataProductRenderImageInterface;
  Float: Scalars['Float'];
  CatalogDataProductRenderPriceInfoInterface: CatalogDataProductRenderPriceInfoInterface;
  CatalogDataProductRenderPriceInfoExtensionInterface: CatalogDataProductRenderPriceInfoExtensionInterface;
  MsrpDataProductRenderMsrpPriceInfoInterface: MsrpDataProductRenderMsrpPriceInfoInterface;
  WeeeDataProductRenderWeeeAdjustmentAttributeInterface: WeeeDataProductRenderWeeeAdjustmentAttributeInterface;
  CatalogDataProductRenderFormattedPriceInfoInterface: CatalogDataProductRenderFormattedPriceInfoInterface;
  CatalogDataProductSearchResultsInterface: CatalogDataProductSearchResultsInterface;
  CatalogDataProductInterface: CatalogDataProductInterface;
  FrameworkAttributeInterface: FrameworkAttributeInterface;
  CatalogDataProductExtensionInterface: CatalogDataProductExtensionInterface;
  BundleDataOptionInterface: BundleDataOptionInterface;
  BundleDataLinkInterface: BundleDataLinkInterface;
  CatalogDataCategoryLinkInterface: CatalogDataCategoryLinkInterface;
  ConfigurableProductDataOptionInterface: ConfigurableProductDataOptionInterface;
  ConfigurableProductDataOptionValueInterface: ConfigurableProductDataOptionValueInterface;
  DownloadableDataLinkInterface: DownloadableDataLinkInterface;
  DownloadableDataFileContentInterface: DownloadableDataFileContentInterface;
  DownloadableDataSampleInterface: DownloadableDataSampleInterface;
  CatalogInventoryDataStockItemInterface: CatalogInventoryDataStockItemInterface;
  VertexTaxDataCommodityCodeInterface: VertexTaxDataCommodityCodeInterface;
  CatalogDataProductAttributeMediaGalleryEntryInterface: CatalogDataProductAttributeMediaGalleryEntryInterface;
  FrameworkDataImageContentInterface: FrameworkDataImageContentInterface;
  CatalogDataProductAttributeMediaGalleryEntryExtensionInterface: CatalogDataProductAttributeMediaGalleryEntryExtensionInterface;
  FrameworkDataVideoContentInterface: FrameworkDataVideoContentInterface;
  CatalogDataProductCustomOptionInterface: CatalogDataProductCustomOptionInterface;
  CatalogDataProductCustomOptionExtensionInterface: CatalogDataProductCustomOptionExtensionInterface;
  CatalogDataProductCustomOptionValuesInterface: CatalogDataProductCustomOptionValuesInterface;
  CatalogDataProductLinkInterface: CatalogDataProductLinkInterface;
  CatalogDataProductLinkExtensionInterface: CatalogDataProductLinkExtensionInterface;
  CatalogDataProductTierPriceInterface: CatalogDataProductTierPriceInterface;
  CatalogDataProductTierPriceExtensionInterface: CatalogDataProductTierPriceExtensionInterface;
  FrameworkSearchCriteriaInterface: FrameworkSearchCriteriaInterface;
  FrameworkSearchFilterGroup: FrameworkSearchFilterGroup;
  FrameworkFilter: FrameworkFilter;
  FrameworkSortOrder: FrameworkSortOrder;
  CheckoutDataPaymentDetailsInterface: CheckoutDataPaymentDetailsInterface;
  QuoteDataPaymentMethodInterface: QuoteDataPaymentMethodInterface;
  QuoteDataTotalsInterface: QuoteDataTotalsInterface;
  QuoteDataTotalsExtensionInterface: QuoteDataTotalsExtensionInterface;
  QuoteDataTotalsItemInterface: QuoteDataTotalsItemInterface;
  QuoteDataTotalSegmentInterface: QuoteDataTotalSegmentInterface;
  QuoteDataTotalSegmentExtensionInterface: QuoteDataTotalSegmentExtensionInterface;
  TaxDataGrandTotalDetailsInterface: TaxDataGrandTotalDetailsInterface;
  TaxDataGrandTotalRatesInterface: TaxDataGrandTotalRatesInterface;
  DirectoryDataCountryInformationInterface: DirectoryDataCountryInformationInterface;
  DirectoryDataRegionInformationInterface: DirectoryDataRegionInformationInterface;
  DirectoryDataCurrencyInformationInterface: DirectoryDataCurrencyInformationInterface;
  DirectoryDataExchangeRateInterface: DirectoryDataExchangeRateInterface;
  FrameworkSearchSearchResultInterface: FrameworkSearchSearchResultInterface;
  FrameworkSearchAggregationInterface: FrameworkSearchAggregationInterface;
  FrameworkSearchBucketInterface: FrameworkSearchBucketInterface;
  FrameworkSearchAggregationValueInterface: FrameworkSearchAggregationValueInterface;
  FrameworkSearchDocumentInterface: FrameworkSearchDocumentInterface;
  FrameworkSearchSearchCriteriaInterface: FrameworkSearchSearchCriteriaInterface;
  GiftMessageDataMessageInterface: GiftMessageDataMessageInterface;
  GiftMessageDataMessageExtensionInterface: GiftMessageDataMessageExtensionInterface;
  InventoryInStorePickupApiDataSearchResultInterface: InventoryInStorePickupApiDataSearchResultInterface;
  InventoryInStorePickupApiDataPickupLocationInterface: InventoryInStorePickupApiDataPickupLocationInterface;
  InventoryInStorePickupApiDataSearchRequestInterface: InventoryInStorePickupApiDataSearchRequestInterface;
  InventoryInStorePickupApiDataSearchRequestAreaInterface: InventoryInStorePickupApiDataSearchRequestAreaInterface;
  InventoryInStorePickupApiDataSearchRequestExtensionInterface: InventoryInStorePickupApiDataSearchRequestExtensionInterface;
  InventoryInStorePickupApiDataSearchRequestProductInfoInterface: InventoryInStorePickupApiDataSearchRequestProductInfoInterface;
  InventoryInStorePickupApiDataSearchRequestFiltersInterface: InventoryInStorePickupApiDataSearchRequestFiltersInterface;
  InventoryInStorePickupApiDataSearchRequestFilterInterface: InventoryInStorePickupApiDataSearchRequestFilterInterface;
  LofAutosearchDataSearchResultInterface: LofAutosearchDataSearchResultInterface;
  LofAutosearchDataItemInterface: LofAutosearchDataItemInterface;
  LofBannerSliderDataBannerInterface: LofBannerSliderDataBannerInterface;
  LofBannerSliderDataResourceMapInterface: LofBannerSliderDataResourceMapInterface;
  LofBannerSliderDataBannerSearchResultInterface: LofBannerSliderDataBannerSearchResultInterface;
  LofBannerSliderDataSliderInterface: LofBannerSliderDataSliderInterface;
  LofBannerSliderDataSliderSearchResultInterface: LofBannerSliderDataSliderSearchResultInterface;
  LofChatWootDataChatwootInterface: LofChatWootDataChatwootInterface;
  LofChatWootDataChatwootSearchResultsInterface: LofChatWootDataChatwootSearchResultsInterface;
  LofFormbuilderDataFormbuilderDesignInterface: LofFormbuilderDataFormbuilderDesignInterface;
  LofFormbuilderDataFieldDesignInterface: LofFormbuilderDataFieldDesignInterface;
  LofFormbuilderDataFieldOptionInterface: LofFormbuilderDataFieldOptionInterface;
  LofFormbuilderDataFormbuilderInterface: LofFormbuilderDataFormbuilderInterface;
  LofMarketPlaceDataGroupSearchResultsInterface: LofMarketPlaceDataGroupSearchResultsInterface;
  LofMarketPlaceDataGroupInterface: LofMarketPlaceDataGroupInterface;
  LofMarketPlaceDataRatingInterface: LofMarketPlaceDataRatingInterface;
  LofMarketPlaceDataRatingSearchResultsInterface: LofMarketPlaceDataRatingSearchResultsInterface;
  LofMarketPlaceDataReviewSearchResultsInterface: LofMarketPlaceDataReviewSearchResultsInterface;
  LofMarketPlaceDataReviewInterface: LofMarketPlaceDataReviewInterface;
  LofMarketPlaceDataSellerInterface: LofMarketPlaceDataSellerInterface;
  LofMarketPlaceDataSellerProductSearchResultsInterface: LofMarketPlaceDataSellerProductSearchResultsInterface;
  LofMarketPlaceDataProductInterface: LofMarketPlaceDataProductInterface;
  LofMarketPlaceDataSummaryRatingInterface: LofMarketPlaceDataSummaryRatingInterface;
  LofMarketPlaceDataSellerVacationInterface: LofMarketPlaceDataSellerVacationInterface;
  LofMarketPlaceDataSellersSearchResultsInterface: LofMarketPlaceDataSellersSearchResultsInterface;
  LofMobileDataMobileNavSidebarInterface: LofMobileDataMobileNavSidebarInterface;
  LofProductReviewsDataReviewDataInterface: LofProductReviewsDataReviewDataInterface;
  LofProductReviewsDataDetailedSummaryInterface: LofProductReviewsDataDetailedSummaryInterface;
  LofProductReviewsDataReviewInterface: LofProductReviewsDataReviewInterface;
  LofProductReviewsDataReplyInterface: LofProductReviewsDataReplyInterface;
  LofProductReviewsDataCustomizeInterface: LofProductReviewsDataCustomizeInterface;
  LofProductReviewsDataGalleryInterface: LofProductReviewsDataGalleryInterface;
  LofProductReviewsDataImageInterface: LofProductReviewsDataImageInterface;
  LofProductReviewsDataRatingVoteInterface: LofProductReviewsDataRatingVoteInterface;
  LofProductTagsDataTagSearchResultsInterface: LofProductTagsDataTagSearchResultsInterface;
  LofProductTagsDataTagInterface: LofProductTagsDataTagInterface;
  LofmpBlogDataCommentSearchResultsInterface: LofmpBlogDataCommentSearchResultsInterface;
  LofmpBlogDataCommentInterface: LofmpBlogDataCommentInterface;
  LofmpBlogDataCategoryInterface: LofmpBlogDataCategoryInterface;
  LofmpBlogDataCategorySearchResultsInterface: LofmpBlogDataCategorySearchResultsInterface;
  LofmpBlogDataPostInterface: LofmpBlogDataPostInterface;
  LofmpBlogDataTagInterface: LofmpBlogDataTagInterface;
  LofmpBlogDataPostSearchResultsInterface: LofmpBlogDataPostSearchResultsInterface;
  LofmpBlogDataTagSearchResultsInterface: LofmpBlogDataTagSearchResultsInterface;
  LofmpCouponCodeDataCouponSearchResultsInterface: LofmpCouponCodeDataCouponSearchResultsInterface;
  LofmpCouponCodeDataCouponInterface: LofmpCouponCodeDataCouponInterface;
  LofmpRmaDataAddressInterface: LofmpRmaDataAddressInterface;
  LofmpRmaDataAddressSearchResultsInterface: LofmpRmaDataAddressSearchResultsInterface;
  LofmpRmaDataConditionInterface: LofmpRmaDataConditionInterface;
  LofmpRmaDataConditionSearchResultsInterface: LofmpRmaDataConditionSearchResultsInterface;
  LofmpRmaDataFieldInterface: LofmpRmaDataFieldInterface;
  LofmpRmaDataFieldSearchResultsInterface: LofmpRmaDataFieldSearchResultsInterface;
  LofmpRmaDataQuickResponseInterface: LofmpRmaDataQuickResponseInterface;
  LofmpRmaDataQuickResponseSearchResultsInterface: LofmpRmaDataQuickResponseSearchResultsInterface;
  LofmpRmaDataReasonInterface: LofmpRmaDataReasonInterface;
  LofmpRmaDataReasonSearchResultsInterface: LofmpRmaDataReasonSearchResultsInterface;
  LofmpRmaDataResolutionInterface: LofmpRmaDataResolutionInterface;
  LofmpRmaDataResolutionSearchResultsInterface: LofmpRmaDataResolutionSearchResultsInterface;
  LofmpRmaDataStatusInterface: LofmpRmaDataStatusInterface;
  LofmpRmaDataStatusSearchResultsInterface: LofmpRmaDataStatusSearchResultsInterface;
  PayPalBraintreeDataAuthDataInterface: PayPalBraintreeDataAuthDataInterface;
  QuoteDataAddressInterface: QuoteDataAddressInterface;
  QuoteDataAddressExtensionInterface: QuoteDataAddressExtensionInterface;
  SalesRuleDataRuleDiscountInterface: SalesRuleDataRuleDiscountInterface;
  SalesRuleDataDiscountDataInterface: SalesRuleDataDiscountDataInterface;
  QuoteDataCartInterface: QuoteDataCartInterface;
  QuoteDataCurrencyInterface: QuoteDataCurrencyInterface;
  CustomerDataCustomerInterface: CustomerDataCustomerInterface;
  CustomerDataAddressInterface: CustomerDataAddressInterface;
  CustomerDataRegionInterface: CustomerDataRegionInterface;
  CustomerDataCustomerExtensionInterface: CustomerDataCustomerExtensionInterface;
  LofMarketPermissionsDataSellerCustomerInterface: LofMarketPermissionsDataSellerCustomerInterface;
  QuoteDataCartExtensionInterface: QuoteDataCartExtensionInterface;
  AmazonPaymentDataQuoteLinkInterface: AmazonPaymentDataQuoteLinkInterface;
  QuoteDataShippingAssignmentInterface: QuoteDataShippingAssignmentInterface;
  QuoteDataCartItemInterface: QuoteDataCartItemInterface;
  QuoteDataCartItemExtensionInterface: QuoteDataCartItemExtensionInterface;
  QuoteDataProductOptionInterface: QuoteDataProductOptionInterface;
  QuoteDataProductOptionExtensionInterface: QuoteDataProductOptionExtensionInterface;
  BundleDataBundleOptionInterface: BundleDataBundleOptionInterface;
  ConfigurableProductDataConfigurableItemOptionValueInterface: ConfigurableProductDataConfigurableItemOptionValueInterface;
  CatalogDataCustomOptionInterface: CatalogDataCustomOptionInterface;
  CatalogDataCustomOptionExtensionInterface: CatalogDataCustomOptionExtensionInterface;
  DownloadableDataDownloadableOptionInterface: DownloadableDataDownloadableOptionInterface;
  GroupedProductDataGroupedOptionsInterface: GroupedProductDataGroupedOptionsInterface;
  QuoteDataShippingInterface: QuoteDataShippingInterface;
  QuoteDataPaymentInterface: QuoteDataPaymentInterface;
  QuoteDataPaymentExtensionInterface: QuoteDataPaymentExtensionInterface;
  QuoteDataShippingMethodInterface: QuoteDataShippingMethodInterface;
  LofMobileDataMobileCmsPageInterface: LofMobileDataMobileCmsPageInterface;
  LofMobileDataMobileSuggestionTagInterface: LofMobileDataMobileSuggestionTagInterface;
  LofProductTagsDataTagProductLinkInterface: LofProductTagsDataTagProductLinkInterface;
  VesMegamenuDataItemInterface: VesMegamenuDataItemInterface;
  VesMegamenuDataItemSearchResultsInterface: VesMegamenuDataItemSearchResultsInterface;
  VesMegamenuDataMenuFrontendInterface: VesMegamenuDataMenuFrontendInterface;
  VesMegamenuDataDesignStyleInterface: VesMegamenuDataDesignStyleInterface;
  VesMegamenuDataMenuTreeItemInterface: VesMegamenuDataMenuTreeItemInterface;
  Mutation: {};
  V1AmazonBillingAddressInput: V1AmazonBillingAddressInput;
  V1AmazonShippingAddressInput: V1AmazonShippingAddressInput;
  ErrorResponse: ErrorResponse;
  ErrorErrorsItem: ErrorErrorsItem;
  ErrorParametersItem: ErrorParametersItem;
  V1GuestCartPaymentInformationInput: V1GuestCartPaymentInformationInput;
  QuoteDataAddressInterfaceInput: QuoteDataAddressInterfaceInput;
  FrameworkAttributeInterfaceInput: FrameworkAttributeInterfaceInput;
  QuoteDataAddressExtensionInterfaceInput: QuoteDataAddressExtensionInterfaceInput;
  SalesRuleDataRuleDiscountInterfaceInput: SalesRuleDataRuleDiscountInterfaceInput;
  SalesRuleDataDiscountDataInterfaceInput: SalesRuleDataDiscountDataInterfaceInput;
  QuoteDataPaymentInterfaceInput: QuoteDataPaymentInterfaceInput;
  QuoteDataPaymentExtensionInterfaceInput: QuoteDataPaymentExtensionInterfaceInput;
  V1GuestCartSetPaymentInformationInput: V1GuestCartSetPaymentInformationInput;
  V1GuestCartShippingInformationInput: V1GuestCartShippingInformationInput;
  CheckoutDataShippingInformationInterfaceInput: CheckoutDataShippingInformationInterfaceInput;
  V1GuestCartTotalsInformationInput: V1GuestCartTotalsInformationInput;
  CheckoutDataTotalsInformationInterfaceInput: CheckoutDataTotalsInformationInterfaceInput;
  V1CustomersInput: V1CustomersInput;
  CustomerDataCustomerInterfaceInput: CustomerDataCustomerInterfaceInput;
  CustomerDataAddressInterfaceInput: CustomerDataAddressInterfaceInput;
  CustomerDataRegionInterfaceInput: CustomerDataRegionInterfaceInput;
  CustomerDataCustomerExtensionInterfaceInput: CustomerDataCustomerExtensionInterfaceInput;
  LofMarketPermissionsDataSellerCustomerInterfaceInput: LofMarketPermissionsDataSellerCustomerInterfaceInput;
  V1CustomersPasswordInput: V1CustomersPasswordInput;
  V1CustomersIsEmailAvailableInput: V1CustomersIsEmailAvailableInput;
  V1CustomersResetPasswordInput: V1CustomersResetPasswordInput;
  EcomteckAdvancedContactDataRequestInterface: EcomteckAdvancedContactDataRequestInterface;
  EcomteckAdvancedContactDataInfoInterface: EcomteckAdvancedContactDataInfoInterface;
  V1ContactPostInput: V1ContactPostInput;
  EcomteckAdvancedContactDataRequestInterfaceInput: EcomteckAdvancedContactDataRequestInterfaceInput;
  EcomteckAdvancedContactDataInfoInterfaceInput: EcomteckAdvancedContactDataInfoInterfaceInput;
  V1GuestCartGiftMessageInput: V1GuestCartGiftMessageInput;
  GiftMessageDataMessageInterfaceInput: GiftMessageDataMessageInterfaceInput;
  GiftMessageDataMessageExtensionInterfaceInput: GiftMessageDataMessageExtensionInterfaceInput;
  V1IntegrationAdminTokenInput: V1IntegrationAdminTokenInput;
  V1IntegrationCustomerTokenInput: V1IntegrationCustomerTokenInput;
  V1LofChatwootChatwootInput: V1LofChatwootChatwootInput;
  LofChatWootDataChatwootInterfaceInput: LofChatWootDataChatwootInterfaceInput;
  V1SellerRegisterInput: V1SellerRegisterInput;
  LofMarketPlaceDataRegisterSellerInterfaceInput: LofMarketPlaceDataRegisterSellerInterfaceInput;
  V1ReviewsGuestReplyInput: V1ReviewsGuestReplyInput;
  LofProductReviewsDataReplyInterfaceInput: LofProductReviewsDataReplyInterfaceInput;
  V1LofmobileAppleLoginInput: V1LofmobileAppleLoginInput;
  V1LofmobileSocialLoginInput: V1LofmobileSocialLoginInput;
  V1SplitCartGuestPaymentInformationInput: V1SplitCartGuestPaymentInformationInput;
  LofmpSplitCartDataQuoteInterface: LofmpSplitCartDataQuoteInterface;
  V1GuestCartBillingAddressInput: V1GuestCartBillingAddressInput;
  V1GuestCartItems2Input: V1GuestCartItems2Input;
  QuoteDataCartItemInterfaceInput: QuoteDataCartItemInterfaceInput;
  QuoteDataCartItemExtensionInterfaceInput: QuoteDataCartItemExtensionInterfaceInput;
  QuoteDataProductOptionInterfaceInput: QuoteDataProductOptionInterfaceInput;
  QuoteDataProductOptionExtensionInterfaceInput: QuoteDataProductOptionExtensionInterfaceInput;
  BundleDataBundleOptionInterfaceInput: BundleDataBundleOptionInterfaceInput;
  ConfigurableProductDataConfigurableItemOptionValueInterfaceInput: ConfigurableProductDataConfigurableItemOptionValueInterfaceInput;
  CatalogDataCustomOptionInterfaceInput: CatalogDataCustomOptionInterfaceInput;
  CatalogDataCustomOptionExtensionInterfaceInput: CatalogDataCustomOptionExtensionInterfaceInput;
  FrameworkDataImageContentInterfaceInput: FrameworkDataImageContentInterfaceInput;
  DownloadableDataDownloadableOptionInterfaceInput: DownloadableDataDownloadableOptionInterfaceInput;
  GroupedProductDataGroupedOptionsInterfaceInput: GroupedProductDataGroupedOptionsInterfaceInput;
  V1GuestCartItemInput: V1GuestCartItemInput;
  V1GuestCartOrderInput: V1GuestCartOrderInput;
  V1GuestCartCollectTotalsInput: V1GuestCartCollectTotalsInput;
  QuoteDataTotalsAdditionalDataInterfaceInput: QuoteDataTotalsAdditionalDataInterfaceInput;
  QuoteDataTotalsAdditionalDataExtensionInterfaceInput: QuoteDataTotalsAdditionalDataExtensionInterfaceInput;
  V1GuestCartSelectedPaymentMethodInput: V1GuestCartSelectedPaymentMethodInput;
  V1GuestCartEstimateShippingMethodsInput: V1GuestCartEstimateShippingMethodsInput;
  V1ElasticsuiteTrackerHitInput: V1ElasticsuiteTrackerHitInput;
  V1VertexAddressValidationVertexAddressInput: V1VertexAddressValidationVertexAddressInput;
  VertexAddressValidationApiDataCleansedAddressInterface: VertexAddressValidationApiDataCleansedAddressInterface;
  V1GuestAddressCleanseInput: V1GuestAddressCleanseInput;
  VertexAddressValidationApiDataAddressInterfaceInput: VertexAddressValidationApiDataAddressInterfaceInput;
  V1VesTrackorderSendInput: V1VesTrackorderSendInput;
  SalesDataOrderInterface: SalesDataOrderInterface;
  SalesDataOrderAddressInterface: SalesDataOrderAddressInterface;
  SalesDataOrderAddressExtensionInterface: SalesDataOrderAddressExtensionInterface;
  SalesDataOrderExtensionInterface: SalesDataOrderExtensionInterface;
  AmazonPaymentDataOrderLinkInterface: AmazonPaymentDataOrderLinkInterface;
  TaxDataOrderTaxDetailsAppliedTaxInterface: TaxDataOrderTaxDetailsAppliedTaxInterface;
  TaxDataOrderTaxDetailsAppliedTaxExtensionInterface: TaxDataOrderTaxDetailsAppliedTaxExtensionInterface;
  TaxDataAppliedTaxRateInterface: TaxDataAppliedTaxRateInterface;
  TaxDataOrderTaxDetailsItemInterface: TaxDataOrderTaxDetailsItemInterface;
  PaymentDataPaymentAdditionalInfoInterface: PaymentDataPaymentAdditionalInfoInterface;
  SalesDataShippingAssignmentInterface: SalesDataShippingAssignmentInterface;
  SalesDataOrderItemInterface: SalesDataOrderItemInterface;
  SalesDataOrderItemExtensionInterface: SalesDataOrderItemExtensionInterface;
  CatalogDataProductOptionInterface: CatalogDataProductOptionInterface;
  CatalogDataProductOptionExtensionInterface: CatalogDataProductOptionExtensionInterface;
  SalesDataShippingInterface: SalesDataShippingInterface;
  SalesDataTotalInterface: SalesDataTotalInterface;
  SalesDataOrderPaymentInterface: SalesDataOrderPaymentInterface;
  SalesDataOrderPaymentExtensionInterface: SalesDataOrderPaymentExtensionInterface;
  VaultDataPaymentTokenInterface: VaultDataPaymentTokenInterface;
  SalesDataOrderStatusHistoryInterface: SalesDataOrderStatusHistoryInterface;
  V1VesTrackorderTrackInput: V1VesTrackorderTrackInput;
  newCatalogDataProductSearchResultsInterface: newCatalogDataProductSearchResultsInterface;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  catalogDataProductRenderSearchResultsInterface?: Resolver<Maybe<ResolversTypes['CatalogDataProductRenderSearchResultsInterface']>, ParentType, ContextType, RequireFields<QuerycatalogDataProductRenderSearchResultsInterfaceArgs, 'currencyCode' | 'storeId'>>;
  catalogDataProductSearchResultsInterface?: Resolver<Maybe<ResolversTypes['CatalogDataProductSearchResultsInterface']>, ParentType, ContextType, Partial<QuerycatalogDataProductSearchResultsInterfaceArgs>>;
  checkoutDataPaymentDetailsInterface?: Resolver<Maybe<ResolversTypes['CheckoutDataPaymentDetailsInterface']>, ParentType, ContextType, RequireFields<QuerycheckoutDataPaymentDetailsInterfaceArgs, 'cartId'>>;
  directoryDataCountryInformationInterface?: Resolver<Maybe<ResolversTypes['DirectoryDataCountryInformationInterface']>, ParentType, ContextType, RequireFields<QuerydirectoryDataCountryInformationInterfaceArgs, 'countryId'>>;
  directoryDataCurrencyInformationInterface?: Resolver<Maybe<ResolversTypes['DirectoryDataCurrencyInformationInterface']>, ParentType, ContextType>;
  frameworkSearchSearchResultInterface?: Resolver<Maybe<ResolversTypes['FrameworkSearchSearchResultInterface']>, ParentType, ContextType, Partial<QueryframeworkSearchSearchResultInterfaceArgs>>;
  giftMessageDataMessageInterface?: Resolver<Maybe<ResolversTypes['GiftMessageDataMessageInterface']>, ParentType, ContextType, RequireFields<QuerygiftMessageDataMessageInterfaceArgs, 'cartId'>>;
  giftMessageGuestItemRepositoryV1GetGet?: Resolver<Maybe<ResolversTypes['GiftMessageDataMessageInterface']>, ParentType, ContextType, RequireFields<QuerygiftMessageGuestItemRepositoryV1GetGetArgs, 'cartId' | 'itemId'>>;
  inventoryInStorePickupApiDataSearchResultInterface?: Resolver<Maybe<ResolversTypes['InventoryInStorePickupApiDataSearchResultInterface']>, ParentType, ContextType, Partial<QueryinventoryInStorePickupApiDataSearchResultInterfaceArgs>>;
  lofAutosearchDataSearchResultInterface?: Resolver<Maybe<ResolversTypes['LofAutosearchDataSearchResultInterface']>, ParentType, ContextType, RequireFields<QuerylofAutosearchDataSearchResultInterfaceArgs, 'categoryId' | 'limitTerms' | 'queryText' | 'storeId'>>;
  lofBannerSliderDataBannerInterface?: Resolver<Maybe<ResolversTypes['LofBannerSliderDataBannerInterface']>, ParentType, ContextType, RequireFields<QuerylofBannerSliderDataBannerInterfaceArgs, 'id'>>;
  lofBannerSliderDataBannerSearchResultInterface?: Resolver<Maybe<ResolversTypes['LofBannerSliderDataBannerSearchResultInterface']>, ParentType, ContextType, Partial<QuerylofBannerSliderDataBannerSearchResultInterfaceArgs>>;
  lofBannerSliderDataResourceMapInterface?: Resolver<Maybe<ResolversTypes['LofBannerSliderDataResourceMapInterface']>, ParentType, ContextType, RequireFields<QuerylofBannerSliderDataResourceMapInterfaceArgs, 'id'>>;
  lofBannerSliderDataSliderInterface?: Resolver<Maybe<ResolversTypes['LofBannerSliderDataSliderInterface']>, ParentType, ContextType, RequireFields<QuerylofBannerSliderDataSliderInterfaceArgs, 'id'>>;
  lofBannerSliderDataSliderSearchResultInterface?: Resolver<Maybe<ResolversTypes['LofBannerSliderDataSliderSearchResultInterface']>, ParentType, ContextType, Partial<QuerylofBannerSliderDataSliderSearchResultInterfaceArgs>>;
  lofChatWootDataChatwootInterface?: Resolver<Maybe<ResolversTypes['LofChatWootDataChatwootInterface']>, ParentType, ContextType, RequireFields<QuerylofChatWootDataChatwootInterfaceArgs, 'chatwootId'>>;
  lofChatWootDataChatwootSearchResultsInterface?: Resolver<Maybe<ResolversTypes['LofChatWootDataChatwootSearchResultsInterface']>, ParentType, ContextType, Partial<QuerylofChatWootDataChatwootSearchResultsInterfaceArgs>>;
  lofFormbuilderDataFormbuilderDesignInterface?: Resolver<Maybe<ResolversTypes['LofFormbuilderDataFormbuilderDesignInterface']>, ParentType, ContextType, RequireFields<QuerylofFormbuilderDataFormbuilderDesignInterfaceArgs, 'formId'>>;
  lofMarketPlaceDataGroupSearchResultsInterface?: Resolver<Maybe<ResolversTypes['LofMarketPlaceDataGroupSearchResultsInterface']>, ParentType, ContextType, Partial<QuerylofMarketPlaceDataGroupSearchResultsInterfaceArgs>>;
  lofMarketPlaceDataRatingInterface?: Resolver<Maybe<ResolversTypes['LofMarketPlaceDataRatingInterface']>, ParentType, ContextType, RequireFields<QuerylofMarketPlaceDataRatingInterfaceArgs, 'ratingId'>>;
  lofMarketPlaceDataRatingSearchResultsInterface?: Resolver<Maybe<ResolversTypes['LofMarketPlaceDataRatingSearchResultsInterface']>, ParentType, ContextType, RequireFields<QuerylofMarketPlaceDataRatingSearchResultsInterfaceArgs, 'sellerUrl'>>;
  lofMarketPlaceDataReviewSearchResultsInterface?: Resolver<Maybe<ResolversTypes['LofMarketPlaceDataReviewSearchResultsInterface']>, ParentType, ContextType, RequireFields<QuerylofMarketPlaceDataReviewSearchResultsInterfaceArgs, 'sellerUrl'>>;
  lofMarketPlaceDataSellerInterface?: Resolver<Maybe<ResolversTypes['LofMarketPlaceDataSellerInterface']>, ParentType, ContextType, RequireFields<QuerylofMarketPlaceDataSellerInterfaceArgs, 'sellerUrl'>>;
  lofMarketPlaceDataSellerProductSearchResultsInterface?: Resolver<Maybe<ResolversTypes['LofMarketPlaceDataSellerProductSearchResultsInterface']>, ParentType, ContextType, Partial<QuerylofMarketPlaceDataSellerProductSearchResultsInterfaceArgs>>;
  lofMarketPlaceDataSellerVacationInterface?: Resolver<Maybe<ResolversTypes['LofMarketPlaceDataSellerVacationInterface']>, ParentType, ContextType, RequireFields<QuerylofMarketPlaceDataSellerVacationInterfaceArgs, 'sellerUrl'>>;
  lofMarketPlaceDataSellersSearchResultsInterface?: Resolver<Maybe<ResolversTypes['LofMarketPlaceDataSellersSearchResultsInterface']>, ParentType, ContextType, Partial<QuerylofMarketPlaceDataSellersSearchResultsInterfaceArgs>>;
  lofMarketPlaceDataSummaryRatingInterface?: Resolver<Maybe<ResolversTypes['LofMarketPlaceDataSummaryRatingInterface']>, ParentType, ContextType, RequireFields<QuerylofMarketPlaceDataSummaryRatingInterfaceArgs, 'sellerUrl'>>;
  lofMarketPlaceSellerProductsRepositoryV1GetListSellersProductGet?: Resolver<Maybe<ResolversTypes['CatalogDataProductSearchResultsInterface']>, ParentType, ContextType, RequireFields<QuerylofMarketPlaceSellerProductsRepositoryV1GetListSellersProductGetArgs, 'sellerUrl'>>;
  lofMarketPlaceSellersFrontendRepositoryV1GetSellerByProductSkuGet?: Resolver<Maybe<ResolversTypes['LofMarketPlaceDataSellerInterface']>, ParentType, ContextType, RequireFields<QuerylofMarketPlaceSellersFrontendRepositoryV1GetSellerByProductSkuGetArgs, 'sku'>>;
  lofMobileDataMobileNavSidebarInterface?: Resolver<Maybe<ResolversTypes['LofMobileDataMobileNavSidebarInterface']>, ParentType, ContextType, Partial<QuerylofMobileDataMobileNavSidebarInterfaceArgs>>;
  lofProductReviewsDataReviewDataInterface?: Resolver<Maybe<ResolversTypes['LofProductReviewsDataReviewDataInterface']>, ParentType, ContextType, RequireFields<QuerylofProductReviewsDataReviewDataInterfaceArgs, 'sku'>>;
  lofProductTagsDataTagSearchResultsInterface?: Resolver<Maybe<ResolversTypes['LofProductTagsDataTagSearchResultsInterface']>, ParentType, ContextType, Partial<QuerylofProductTagsDataTagSearchResultsInterfaceArgs>>;
  lofmpBlogCommentRepositoryV1GetPostCommentListGet?: Resolver<Maybe<ResolversTypes['LofmpBlogDataCommentSearchResultsInterface']>, ParentType, ContextType, RequireFields<QuerylofmpBlogCommentRepositoryV1GetPostCommentListGetArgs, 'postId'>>;
  lofmpBlogDataCategoryInterface?: Resolver<Maybe<ResolversTypes['LofmpBlogDataCategoryInterface']>, ParentType, ContextType, RequireFields<QuerylofmpBlogDataCategoryInterfaceArgs, 'categoryId' | 'storeId'>>;
  lofmpBlogDataCategorySearchResultsInterface?: Resolver<Maybe<ResolversTypes['LofmpBlogDataCategorySearchResultsInterface']>, ParentType, ContextType, Partial<QuerylofmpBlogDataCategorySearchResultsInterfaceArgs>>;
  lofmpBlogDataCommentSearchResultsInterface?: Resolver<Maybe<ResolversTypes['LofmpBlogDataCommentSearchResultsInterface']>, ParentType, ContextType, Partial<QuerylofmpBlogDataCommentSearchResultsInterfaceArgs>>;
  lofmpBlogDataPostInterface?: Resolver<Maybe<ResolversTypes['LofmpBlogDataPostInterface']>, ParentType, ContextType, RequireFields<QuerylofmpBlogDataPostInterfaceArgs, 'postUrl' | 'storeId'>>;
  lofmpBlogDataPostSearchResultsInterface?: Resolver<Maybe<ResolversTypes['LofmpBlogDataPostSearchResultsInterface']>, ParentType, ContextType, Partial<QuerylofmpBlogDataPostSearchResultsInterfaceArgs>>;
  lofmpBlogDataTagInterface?: Resolver<Maybe<ResolversTypes['LofmpBlogDataTagInterface']>, ParentType, ContextType, RequireFields<QuerylofmpBlogDataTagInterfaceArgs, 'tagAlias'>>;
  lofmpBlogDataTagSearchResultsInterface?: Resolver<Maybe<ResolversTypes['LofmpBlogDataTagSearchResultsInterface']>, ParentType, ContextType, Partial<QuerylofmpBlogDataTagSearchResultsInterfaceArgs>>;
  lofmpBlogPostRepositoryV1CategoryPostsGet?: Resolver<Maybe<ResolversTypes['LofmpBlogDataPostSearchResultsInterface']>, ParentType, ContextType, RequireFields<QuerylofmpBlogPostRepositoryV1CategoryPostsGetArgs, 'categoryId'>>;
  lofmpBlogPostRepositoryV1SellerPostsGet?: Resolver<Maybe<ResolversTypes['LofmpBlogDataPostSearchResultsInterface']>, ParentType, ContextType, RequireFields<QuerylofmpBlogPostRepositoryV1SellerPostsGetArgs, 'sellerUrl'>>;
  lofmpBlogPostRepositoryV1TagPostsGet?: Resolver<Maybe<ResolversTypes['LofmpBlogDataPostSearchResultsInterface']>, ParentType, ContextType, RequireFields<QuerylofmpBlogPostRepositoryV1TagPostsGetArgs, 'tag'>>;
  lofmpCouponCodeDataCouponSearchResultsInterface?: Resolver<Maybe<ResolversTypes['LofmpCouponCodeDataCouponSearchResultsInterface']>, ParentType, ContextType, RequireFields<QuerylofmpCouponCodeDataCouponSearchResultsInterfaceArgs, 'sellerUrl'>>;
  lofmpProductlistProductRepositoryV1GetBestsellerProductsGet?: Resolver<Maybe<ResolversTypes['CatalogDataProductSearchResultsInterface']>, ParentType, ContextType, RequireFields<QuerylofmpProductlistProductRepositoryV1GetBestsellerProductsGetArgs, 'sellerUrl'>>;
  lofmpProductlistProductRepositoryV1GetDealsProductsGet?: Resolver<Maybe<ResolversTypes['CatalogDataProductSearchResultsInterface']>, ParentType, ContextType, RequireFields<QuerylofmpProductlistProductRepositoryV1GetDealsProductsGetArgs, 'sellerUrl'>>;
  lofmpProductlistProductRepositoryV1GetFeaturedProductsGet?: Resolver<Maybe<ResolversTypes['CatalogDataProductSearchResultsInterface']>, ParentType, ContextType, RequireFields<QuerylofmpProductlistProductRepositoryV1GetFeaturedProductsGetArgs, 'sellerUrl'>>;
  lofmpProductlistProductRepositoryV1GetLatestProductsGet?: Resolver<Maybe<ResolversTypes['CatalogDataProductSearchResultsInterface']>, ParentType, ContextType, RequireFields<QuerylofmpProductlistProductRepositoryV1GetLatestProductsGetArgs, 'sellerUrl'>>;
  lofmpProductlistProductRepositoryV1GetMostViewedProductsGet?: Resolver<Maybe<ResolversTypes['CatalogDataProductSearchResultsInterface']>, ParentType, ContextType, RequireFields<QuerylofmpProductlistProductRepositoryV1GetMostViewedProductsGetArgs, 'sellerUrl'>>;
  lofmpProductlistProductRepositoryV1GetNewarrivalProductsGet?: Resolver<Maybe<ResolversTypes['CatalogDataProductSearchResultsInterface']>, ParentType, ContextType, RequireFields<QuerylofmpProductlistProductRepositoryV1GetNewarrivalProductsGetArgs, 'sellerUrl'>>;
  lofmpProductlistProductRepositoryV1GetRandomProductsGet?: Resolver<Maybe<ResolversTypes['CatalogDataProductSearchResultsInterface']>, ParentType, ContextType, RequireFields<QuerylofmpProductlistProductRepositoryV1GetRandomProductsGetArgs, 'sellerUrl'>>;
  lofmpProductlistProductRepositoryV1GetSpecialProductsGet?: Resolver<Maybe<ResolversTypes['CatalogDataProductSearchResultsInterface']>, ParentType, ContextType, RequireFields<QuerylofmpProductlistProductRepositoryV1GetSpecialProductsGetArgs, 'sellerUrl'>>;
  lofmpProductlistProductRepositoryV1GetTopratedProductsGet?: Resolver<Maybe<ResolversTypes['CatalogDataProductSearchResultsInterface']>, ParentType, ContextType, RequireFields<QuerylofmpProductlistProductRepositoryV1GetTopratedProductsGetArgs, 'sellerUrl'>>;
  lofmpRmaDataAddressInterface?: Resolver<Maybe<ResolversTypes['LofmpRmaDataAddressInterface']>, ParentType, ContextType, RequireFields<QuerylofmpRmaDataAddressInterfaceArgs, 'addressId'>>;
  lofmpRmaDataAddressSearchResultsInterface?: Resolver<Maybe<ResolversTypes['LofmpRmaDataAddressSearchResultsInterface']>, ParentType, ContextType, Partial<QuerylofmpRmaDataAddressSearchResultsInterfaceArgs>>;
  lofmpRmaDataConditionInterface?: Resolver<Maybe<ResolversTypes['LofmpRmaDataConditionInterface']>, ParentType, ContextType, RequireFields<QuerylofmpRmaDataConditionInterfaceArgs, 'conditionId'>>;
  lofmpRmaDataConditionSearchResultsInterface?: Resolver<Maybe<ResolversTypes['LofmpRmaDataConditionSearchResultsInterface']>, ParentType, ContextType, Partial<QuerylofmpRmaDataConditionSearchResultsInterfaceArgs>>;
  lofmpRmaDataFieldInterface?: Resolver<Maybe<ResolversTypes['LofmpRmaDataFieldInterface']>, ParentType, ContextType, RequireFields<QuerylofmpRmaDataFieldInterfaceArgs, 'fieldId'>>;
  lofmpRmaDataFieldSearchResultsInterface?: Resolver<Maybe<ResolversTypes['LofmpRmaDataFieldSearchResultsInterface']>, ParentType, ContextType, Partial<QuerylofmpRmaDataFieldSearchResultsInterfaceArgs>>;
  lofmpRmaDataQuickResponseInterface?: Resolver<Maybe<ResolversTypes['LofmpRmaDataQuickResponseInterface']>, ParentType, ContextType, RequireFields<QuerylofmpRmaDataQuickResponseInterfaceArgs, 'quickresponseId'>>;
  lofmpRmaDataQuickResponseSearchResultsInterface?: Resolver<Maybe<ResolversTypes['LofmpRmaDataQuickResponseSearchResultsInterface']>, ParentType, ContextType, Partial<QuerylofmpRmaDataQuickResponseSearchResultsInterfaceArgs>>;
  lofmpRmaDataReasonInterface?: Resolver<Maybe<ResolversTypes['LofmpRmaDataReasonInterface']>, ParentType, ContextType, RequireFields<QuerylofmpRmaDataReasonInterfaceArgs, 'reasonId'>>;
  lofmpRmaDataReasonSearchResultsInterface?: Resolver<Maybe<ResolversTypes['LofmpRmaDataReasonSearchResultsInterface']>, ParentType, ContextType, Partial<QuerylofmpRmaDataReasonSearchResultsInterfaceArgs>>;
  lofmpRmaDataResolutionInterface?: Resolver<Maybe<ResolversTypes['LofmpRmaDataResolutionInterface']>, ParentType, ContextType, RequireFields<QuerylofmpRmaDataResolutionInterfaceArgs, 'resolutionId'>>;
  lofmpRmaDataResolutionSearchResultsInterface?: Resolver<Maybe<ResolversTypes['LofmpRmaDataResolutionSearchResultsInterface']>, ParentType, ContextType, Partial<QuerylofmpRmaDataResolutionSearchResultsInterfaceArgs>>;
  lofmpRmaDataStatusInterface?: Resolver<Maybe<ResolversTypes['LofmpRmaDataStatusInterface']>, ParentType, ContextType, RequireFields<QuerylofmpRmaDataStatusInterfaceArgs, 'statusId'>>;
  lofmpRmaDataStatusSearchResultsInterface?: Resolver<Maybe<ResolversTypes['LofmpRmaDataStatusSearchResultsInterface']>, ParentType, ContextType, Partial<QuerylofmpRmaDataStatusSearchResultsInterfaceArgs>>;
  payPalBraintreeDataAuthDataInterface?: Resolver<Maybe<ResolversTypes['PayPalBraintreeDataAuthDataInterface']>, ParentType, ContextType>;
  quoteDataAddressInterface?: Resolver<Maybe<ResolversTypes['QuoteDataAddressInterface']>, ParentType, ContextType, RequireFields<QueryquoteDataAddressInterfaceArgs, 'cartId'>>;
  quoteDataCartInterface?: Resolver<Maybe<ResolversTypes['QuoteDataCartInterface']>, ParentType, ContextType, RequireFields<QueryquoteDataCartInterfaceArgs, 'cartId'>>;
  quoteDataPaymentInterface?: Resolver<Maybe<ResolversTypes['QuoteDataPaymentInterface']>, ParentType, ContextType, RequireFields<QueryquoteDataPaymentInterfaceArgs, 'cartId'>>;
  quoteDataTotalsInterface?: Resolver<Maybe<ResolversTypes['QuoteDataTotalsInterface']>, ParentType, ContextType, RequireFields<QueryquoteDataTotalsInterfaceArgs, 'cartId'>>;
  v1ContactGetFields?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  v1CorsCheck?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  v1CustomerPasswordResetLinkToken?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<Queryv1CustomerPasswordResetLinkTokenArgs, 'customerId' | 'resetPasswordLinkToken'>>;
  v1DirectoryCountries?: Resolver<Maybe<Array<Maybe<ResolversTypes['DirectoryDataCountryInformationInterface']>>>, ParentType, ContextType, Partial<Queryv1DirectoryCountriesArgs>>;
  v1GuestCartCoupons?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<Queryv1GuestCartCouponsArgs, 'cartId'>>;
  v1GuestCartItems?: Resolver<Maybe<Array<Maybe<ResolversTypes['QuoteDataCartItemInterface']>>>, ParentType, ContextType, RequireFields<Queryv1GuestCartItemsArgs, 'cartId'>>;
  v1GuestCartPaymentMethods?: Resolver<Maybe<Array<Maybe<ResolversTypes['QuoteDataPaymentMethodInterface']>>>, ParentType, ContextType, RequireFields<Queryv1GuestCartPaymentMethodsArgs, 'cartId'>>;
  v1GuestCartShippingMethods?: Resolver<Maybe<Array<Maybe<ResolversTypes['QuoteDataShippingMethodInterface']>>>, ParentType, ContextType, RequireFields<Queryv1GuestCartShippingMethodsArgs, 'cartId'>>;
  v1LofFormbuilderGetformfield?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<Queryv1LofFormbuilderGetformfieldArgs, 'formId'>>;
  v1LofMobileAvailableCmsPage?: Resolver<Maybe<Array<Maybe<ResolversTypes['LofMobileDataMobileCmsPageInterface']>>>, ParentType, ContextType, RequireFields<Queryv1LofMobileAvailableCmsPageArgs, 'storeId'>>;
  v1LofMobileSearchSuggestionTag?: Resolver<Maybe<Array<Maybe<ResolversTypes['LofMobileDataMobileSuggestionTagInterface']>>>, ParentType, ContextType, RequireFields<Queryv1LofMobileSearchSuggestionTagArgs, 'keyword' | 'storeId'>>;
  v1LofProducttagsProducts?: Resolver<Maybe<Array<Maybe<ResolversTypes['LofProductTagsDataTagProductLinkInterface']>>>, ParentType, ContextType, RequireFields<Queryv1LofProducttagsProductsArgs, 'tagCode'>>;
  v1ReviewsRating?: Resolver<Maybe<Array<Maybe<ResolversTypes['LofProductReviewsDataRatingVoteInterface']>>>, ParentType, ContextType, RequireFields<Queryv1ReviewsRatingArgs, 'storeId'>>;
  v1SellerblogPostRelatedPost?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType, RequireFields<Queryv1SellerblogPostRelatedPostArgs, 'postId'>>;
  v1SellerblogPostRelatedProduct?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType, RequireFields<Queryv1SellerblogPostRelatedProductArgs, 'postId'>>;
  vesMegamenuDataItemInterface?: Resolver<Maybe<ResolversTypes['VesMegamenuDataItemInterface']>, ParentType, ContextType, RequireFields<QueryvesMegamenuDataItemInterfaceArgs, 'menuItemId' | 'storeId'>>;
  vesMegamenuDataItemSearchResultsInterface?: Resolver<Maybe<ResolversTypes['VesMegamenuDataItemSearchResultsInterface']>, ParentType, ContextType, RequireFields<QueryvesMegamenuDataItemSearchResultsInterfaceArgs, 'menuId' | 'storeId'>>;
  vesMegamenuDataMenuFrontendInterface?: Resolver<Maybe<ResolversTypes['VesMegamenuDataMenuFrontendInterface']>, ParentType, ContextType, RequireFields<QueryvesMegamenuDataMenuFrontendInterfaceArgs, 'alias'>>;
}>;

export type CatalogDataProductRenderSearchResultsInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogDataProductRenderSearchResultsInterface'] = ResolversParentTypes['CatalogDataProductRenderSearchResultsInterface']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['CatalogDataProductRenderInterface']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogDataProductRenderInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogDataProductRenderInterface'] = ResolversParentTypes['CatalogDataProductRenderInterface']> = ResolversObject<{
  addToCartButton?: Resolver<ResolversTypes['CatalogDataProductRenderButtonInterface'], ParentType, ContextType>;
  addToCompareButton?: Resolver<ResolversTypes['CatalogDataProductRenderButtonInterface'], ParentType, ContextType>;
  currencyCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  extensionAttributes?: Resolver<ResolversTypes['CatalogDataProductRenderExtensionInterface'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  images?: Resolver<Array<Maybe<ResolversTypes['CatalogDataProductRenderImageInterface']>>, ParentType, ContextType>;
  isSalable?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  priceInfo?: Resolver<ResolversTypes['CatalogDataProductRenderPriceInfoInterface'], ParentType, ContextType>;
  storeId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogDataProductRenderButtonInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogDataProductRenderButtonInterface'] = ResolversParentTypes['CatalogDataProductRenderButtonInterface']> = ResolversObject<{
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  postData?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  requiredOptions?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type CatalogDataProductRenderExtensionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogDataProductRenderExtensionInterface'] = ResolversParentTypes['CatalogDataProductRenderExtensionInterface']> = ResolversObject<{
  ddgBrand?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ddgCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  ddgDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ddgImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ddgSku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reviewHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wishlistButton?: Resolver<Maybe<ResolversTypes['CatalogDataProductRenderButtonInterface']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogDataProductRenderImageInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogDataProductRenderImageInterface'] = ResolversParentTypes['CatalogDataProductRenderImageInterface']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  resizedHeight?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  resizedWidth?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogDataProductRenderPriceInfoInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogDataProductRenderPriceInfoInterface'] = ResolversParentTypes['CatalogDataProductRenderPriceInfoInterface']> = ResolversObject<{
  extensionAttributes?: Resolver<Maybe<ResolversTypes['CatalogDataProductRenderPriceInfoExtensionInterface']>, ParentType, ContextType>;
  finalPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  formattedPrices?: Resolver<ResolversTypes['CatalogDataProductRenderFormattedPriceInfoInterface'], ParentType, ContextType>;
  maxPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  maxRegularPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minimalPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minimalRegularPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  regularPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  specialPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogDataProductRenderPriceInfoExtensionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogDataProductRenderPriceInfoExtensionInterface'] = ResolversParentTypes['CatalogDataProductRenderPriceInfoExtensionInterface']> = ResolversObject<{
  msrp?: Resolver<Maybe<ResolversTypes['MsrpDataProductRenderMsrpPriceInfoInterface']>, ParentType, ContextType>;
  taxAdjustments?: Resolver<Maybe<ResolversTypes['CatalogDataProductRenderPriceInfoInterface']>, ParentType, ContextType>;
  weeeAdjustment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weeeAttributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['WeeeDataProductRenderWeeeAdjustmentAttributeInterface']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MsrpDataProductRenderMsrpPriceInfoInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MsrpDataProductRenderMsrpPriceInfoInterface'] = ResolversParentTypes['MsrpDataProductRenderMsrpPriceInfoInterface']> = ResolversObject<{
  explanationMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  isApplicable?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isShownPriceOnGesture?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  msrpMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  msrpPrice?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WeeeDataProductRenderWeeeAdjustmentAttributeInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WeeeDataProductRenderWeeeAdjustmentAttributeInterface'] = ResolversParentTypes['WeeeDataProductRenderWeeeAdjustmentAttributeInterface']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amountExclTax?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  attributeCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  extensionAttributes?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  taxAmount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  taxAmountInclTax?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogDataProductRenderFormattedPriceInfoInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogDataProductRenderFormattedPriceInfoInterface'] = ResolversParentTypes['CatalogDataProductRenderFormattedPriceInfoInterface']> = ResolversObject<{
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  finalPrice?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maxPrice?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maxRegularPrice?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  minimalPrice?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  minimalRegularPrice?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  regularPrice?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  specialPrice?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogDataProductSearchResultsInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogDataProductSearchResultsInterface'] = ResolversParentTypes['CatalogDataProductSearchResultsInterface']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['CatalogDataProductInterface']>>, ParentType, ContextType>;
  searchCriteria?: Resolver<ResolversTypes['FrameworkSearchCriteriaInterface'], ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogDataProductInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogDataProductInterface'] = ResolversParentTypes['CatalogDataProductInterface']> = ResolversObject<{
  attributeSetId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customAttributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['FrameworkAttributeInterface']>>>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['CatalogDataProductExtensionInterface']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mediaGalleryEntries?: Resolver<Maybe<Array<Maybe<ResolversTypes['CatalogDataProductAttributeMediaGalleryEntryInterface']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['CatalogDataProductCustomOptionInterface']>>>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  productLinks?: Resolver<Maybe<Array<Maybe<ResolversTypes['CatalogDataProductLinkInterface']>>>, ParentType, ContextType>;
  sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tierPrices?: Resolver<Maybe<Array<Maybe<ResolversTypes['CatalogDataProductTierPriceInterface']>>>, ParentType, ContextType>;
  typeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  visibility?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FrameworkAttributeInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FrameworkAttributeInterface'] = ResolversParentTypes['FrameworkAttributeInterface']> = ResolversObject<{
  attributeCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogDataProductExtensionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogDataProductExtensionInterface'] = ResolversParentTypes['CatalogDataProductExtensionInterface']> = ResolversObject<{
  bundleProductOptions?: Resolver<Maybe<Array<Maybe<ResolversTypes['BundleDataOptionInterface']>>>, ParentType, ContextType>;
  categoryLinks?: Resolver<Maybe<Array<Maybe<ResolversTypes['CatalogDataCategoryLinkInterface']>>>, ParentType, ContextType>;
  configurableProductLinks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  configurableProductOptions?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConfigurableProductDataOptionInterface']>>>, ParentType, ContextType>;
  downloadableProductLinks?: Resolver<Maybe<Array<Maybe<ResolversTypes['DownloadableDataLinkInterface']>>>, ParentType, ContextType>;
  downloadableProductSamples?: Resolver<Maybe<Array<Maybe<ResolversTypes['DownloadableDataSampleInterface']>>>, ParentType, ContextType>;
  stockItem?: Resolver<Maybe<ResolversTypes['CatalogInventoryDataStockItemInterface']>, ParentType, ContextType>;
  vertexCommodityCode?: Resolver<Maybe<ResolversTypes['VertexTaxDataCommodityCodeInterface']>, ParentType, ContextType>;
  websiteIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BundleDataOptionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BundleDataOptionInterface'] = ResolversParentTypes['BundleDataOptionInterface']> = ResolversObject<{
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  optionId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  productLinks?: Resolver<Maybe<Array<Maybe<ResolversTypes['BundleDataLinkInterface']>>>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BundleDataLinkInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BundleDataLinkInterface'] = ResolversParentTypes['BundleDataLinkInterface']> = ResolversObject<{
  canChangeQuantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isDefault?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  optionId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  priceType?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  qty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogDataCategoryLinkInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogDataCategoryLinkInterface'] = ResolversParentTypes['CatalogDataCategoryLinkInterface']> = ResolversObject<{
  categoryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConfigurableProductDataOptionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConfigurableProductDataOptionInterface'] = ResolversParentTypes['ConfigurableProductDataOptionInterface']> = ResolversObject<{
  attributeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isUseDefault?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConfigurableProductDataOptionValueInterface']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConfigurableProductDataOptionValueInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConfigurableProductDataOptionValueInterface'] = ResolversParentTypes['ConfigurableProductDataOptionValueInterface']> = ResolversObject<{
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  valueIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DownloadableDataLinkInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DownloadableDataLinkInterface'] = ResolversParentTypes['DownloadableDataLinkInterface']> = ResolversObject<{
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isShareable?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  linkFile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkFileContent?: Resolver<Maybe<ResolversTypes['DownloadableDataFileContentInterface']>, ParentType, ContextType>;
  linkType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  linkUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numberOfDownloads?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sampleFile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sampleFileContent?: Resolver<Maybe<ResolversTypes['DownloadableDataFileContentInterface']>, ParentType, ContextType>;
  sampleType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sampleUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sortOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DownloadableDataFileContentInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DownloadableDataFileContentInterface'] = ResolversParentTypes['DownloadableDataFileContentInterface']> = ResolversObject<{
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  fileData?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DownloadableDataSampleInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DownloadableDataSampleInterface'] = ResolversParentTypes['DownloadableDataSampleInterface']> = ResolversObject<{
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sampleFile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sampleFileContent?: Resolver<Maybe<ResolversTypes['DownloadableDataFileContentInterface']>, ParentType, ContextType>;
  sampleType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sampleUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sortOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogInventoryDataStockItemInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogInventoryDataStockItemInterface'] = ResolversParentTypes['CatalogInventoryDataStockItemInterface']> = ResolversObject<{
  backorders?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  enableQtyIncrements?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  isDecimalDivided?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isInStock?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isQtyDecimal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  itemId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lowStockDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  manageStock?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  maxSaleQty?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minQty?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minSaleQty?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  notifyStockQty?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  qty?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  qtyIncrements?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  showDefaultNotificationMessage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  stockId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stockStatusChangedAuto?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  useConfigBackorders?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  useConfigEnableQtyInc?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  useConfigManageStock?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  useConfigMaxSaleQty?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  useConfigMinQty?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  useConfigMinSaleQty?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  useConfigNotifyStockQty?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  useConfigQtyIncrements?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VertexTaxDataCommodityCodeInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VertexTaxDataCommodityCodeInterface'] = ResolversParentTypes['VertexTaxDataCommodityCodeInterface']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogDataProductAttributeMediaGalleryEntryInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogDataProductAttributeMediaGalleryEntryInterface'] = ResolversParentTypes['CatalogDataProductAttributeMediaGalleryEntryInterface']> = ResolversObject<{
  content?: Resolver<Maybe<ResolversTypes['FrameworkDataImageContentInterface']>, ParentType, ContextType>;
  disabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['CatalogDataProductAttributeMediaGalleryEntryExtensionInterface']>, ParentType, ContextType>;
  file?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mediaType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  types?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FrameworkDataImageContentInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FrameworkDataImageContentInterface'] = ResolversParentTypes['FrameworkDataImageContentInterface']> = ResolversObject<{
  base64EncodedData?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogDataProductAttributeMediaGalleryEntryExtensionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogDataProductAttributeMediaGalleryEntryExtensionInterface'] = ResolversParentTypes['CatalogDataProductAttributeMediaGalleryEntryExtensionInterface']> = ResolversObject<{
  videoContent?: Resolver<Maybe<ResolversTypes['FrameworkDataVideoContentInterface']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FrameworkDataVideoContentInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FrameworkDataVideoContentInterface'] = ResolversParentTypes['FrameworkDataVideoContentInterface']> = ResolversObject<{
  mediaType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  videoDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  videoMetadata?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  videoProvider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  videoTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  videoUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogDataProductCustomOptionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogDataProductCustomOptionInterface'] = ResolversParentTypes['CatalogDataProductCustomOptionInterface']> = ResolversObject<{
  extensionAttributes?: Resolver<Maybe<ResolversTypes['CatalogDataProductCustomOptionExtensionInterface']>, ParentType, ContextType>;
  fileExtension?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageSizeX?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  imageSizeY?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isRequire?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  maxCharacters?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  optionId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productSku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sortOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['CatalogDataProductCustomOptionValuesInterface']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogDataProductCustomOptionExtensionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogDataProductCustomOptionExtensionInterface'] = ResolversParentTypes['CatalogDataProductCustomOptionExtensionInterface']> = ResolversObject<{
  vertexFlexField?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogDataProductCustomOptionValuesInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogDataProductCustomOptionValuesInterface'] = ResolversParentTypes['CatalogDataProductCustomOptionValuesInterface']> = ResolversObject<{
  optionTypeId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  priceType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sortOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogDataProductLinkInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogDataProductLinkInterface'] = ResolversParentTypes['CatalogDataProductLinkInterface']> = ResolversObject<{
  extensionAttributes?: Resolver<Maybe<ResolversTypes['CatalogDataProductLinkExtensionInterface']>, ParentType, ContextType>;
  linkType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  linkedProductSku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  linkedProductType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogDataProductLinkExtensionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogDataProductLinkExtensionInterface'] = ResolversParentTypes['CatalogDataProductLinkExtensionInterface']> = ResolversObject<{
  qty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogDataProductTierPriceInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogDataProductTierPriceInterface'] = ResolversParentTypes['CatalogDataProductTierPriceInterface']> = ResolversObject<{
  customerGroupId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['CatalogDataProductTierPriceExtensionInterface']>, ParentType, ContextType>;
  qty?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogDataProductTierPriceExtensionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogDataProductTierPriceExtensionInterface'] = ResolversParentTypes['CatalogDataProductTierPriceExtensionInterface']> = ResolversObject<{
  percentageValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  websiteId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FrameworkSearchCriteriaInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FrameworkSearchCriteriaInterface'] = ResolversParentTypes['FrameworkSearchCriteriaInterface']> = ResolversObject<{
  currentPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  filterGroups?: Resolver<Array<Maybe<ResolversTypes['FrameworkSearchFilterGroup']>>, ParentType, ContextType>;
  pageSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sortOrders?: Resolver<Maybe<Array<Maybe<ResolversTypes['FrameworkSortOrder']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FrameworkSearchFilterGroupResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FrameworkSearchFilterGroup'] = ResolversParentTypes['FrameworkSearchFilterGroup']> = ResolversObject<{
  filters?: Resolver<Maybe<Array<Maybe<ResolversTypes['FrameworkFilter']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FrameworkFilterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FrameworkFilter'] = ResolversParentTypes['FrameworkFilter']> = ResolversObject<{
  conditionType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FrameworkSortOrderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FrameworkSortOrder'] = ResolversParentTypes['FrameworkSortOrder']> = ResolversObject<{
  direction?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CheckoutDataPaymentDetailsInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CheckoutDataPaymentDetailsInterface'] = ResolversParentTypes['CheckoutDataPaymentDetailsInterface']> = ResolversObject<{
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  paymentMethods?: Resolver<Array<Maybe<ResolversTypes['QuoteDataPaymentMethodInterface']>>, ParentType, ContextType>;
  totals?: Resolver<ResolversTypes['QuoteDataTotalsInterface'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuoteDataPaymentMethodInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuoteDataPaymentMethodInterface'] = ResolversParentTypes['QuoteDataPaymentMethodInterface']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuoteDataTotalsInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuoteDataTotalsInterface'] = ResolversParentTypes['QuoteDataTotalsInterface']> = ResolversObject<{
  baseCurrencyCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  baseDiscountAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseGrandTotal?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseShippingAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseShippingDiscountAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseShippingInclTax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseShippingTaxAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseSubtotal?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseSubtotalInclTax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseSubtotalWithDiscount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseTaxAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  couponCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discountAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['QuoteDataTotalsExtensionInterface']>, ParentType, ContextType>;
  grandTotal?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['QuoteDataTotalsItemInterface']>>>, ParentType, ContextType>;
  itemsQty?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  quoteCurrencyCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shippingAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shippingDiscountAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shippingInclTax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shippingTaxAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  subtotal?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  subtotalInclTax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  subtotalWithDiscount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  taxAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalSegments?: Resolver<Array<Maybe<ResolversTypes['QuoteDataTotalSegmentInterface']>>, ParentType, ContextType>;
  weeeTaxAppliedAmount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuoteDataTotalsExtensionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuoteDataTotalsExtensionInterface'] = ResolversParentTypes['QuoteDataTotalsExtensionInterface']> = ResolversObject<{
  couponLabel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuoteDataTotalsItemInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuoteDataTotalsItemInterface'] = ResolversParentTypes['QuoteDataTotalsItemInterface']> = ResolversObject<{
  baseDiscountAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  basePrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  basePriceInclTax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseRowTotal?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  baseRowTotalInclTax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseTaxAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  discountAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  discountPercent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  options?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  priceInclTax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  qty?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rowTotal?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rowTotalInclTax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rowTotalWithDiscount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  taxAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  taxPercent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  weeeTaxApplied?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  weeeTaxAppliedAmount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuoteDataTotalSegmentInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuoteDataTotalSegmentInterface'] = ResolversParentTypes['QuoteDataTotalSegmentInterface']> = ResolversObject<{
  area?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['QuoteDataTotalSegmentExtensionInterface']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuoteDataTotalSegmentExtensionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuoteDataTotalSegmentExtensionInterface'] = ResolversParentTypes['QuoteDataTotalSegmentExtensionInterface']> = ResolversObject<{
  taxGrandtotalDetails?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaxDataGrandTotalDetailsInterface']>>>, ParentType, ContextType>;
  vertexTaxCalculationMessages?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaxDataGrandTotalDetailsInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TaxDataGrandTotalDetailsInterface'] = ResolversParentTypes['TaxDataGrandTotalDetailsInterface']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  groupId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rates?: Resolver<Array<Maybe<ResolversTypes['TaxDataGrandTotalRatesInterface']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaxDataGrandTotalRatesInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TaxDataGrandTotalRatesInterface'] = ResolversParentTypes['TaxDataGrandTotalRatesInterface']> = ResolversObject<{
  percent?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DirectoryDataCountryInformationInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DirectoryDataCountryInformationInterface'] = ResolversParentTypes['DirectoryDataCountryInformationInterface']> = ResolversObject<{
  availableRegions?: Resolver<Maybe<Array<Maybe<ResolversTypes['DirectoryDataRegionInformationInterface']>>>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  fullNameEnglish?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fullNameLocale?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  threeLetterAbbreviation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  twoLetterAbbreviation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DirectoryDataRegionInformationInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DirectoryDataRegionInformationInterface'] = ResolversParentTypes['DirectoryDataRegionInformationInterface']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DirectoryDataCurrencyInformationInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DirectoryDataCurrencyInformationInterface'] = ResolversParentTypes['DirectoryDataCurrencyInformationInterface']> = ResolversObject<{
  availableCurrencyCodes?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  baseCurrencyCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  baseCurrencySymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  defaultDisplayCurrencyCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  defaultDisplayCurrencySymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  exchangeRates?: Resolver<Array<Maybe<ResolversTypes['DirectoryDataExchangeRateInterface']>>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DirectoryDataExchangeRateInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DirectoryDataExchangeRateInterface'] = ResolversParentTypes['DirectoryDataExchangeRateInterface']> = ResolversObject<{
  currencyTo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  rate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FrameworkSearchSearchResultInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FrameworkSearchSearchResultInterface'] = ResolversParentTypes['FrameworkSearchSearchResultInterface']> = ResolversObject<{
  aggregations?: Resolver<ResolversTypes['FrameworkSearchAggregationInterface'], ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['FrameworkSearchDocumentInterface']>>, ParentType, ContextType>;
  searchCriteria?: Resolver<ResolversTypes['FrameworkSearchSearchCriteriaInterface'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FrameworkSearchAggregationInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FrameworkSearchAggregationInterface'] = ResolversParentTypes['FrameworkSearchAggregationInterface']> = ResolversObject<{
  bucketNames?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  buckets?: Resolver<Array<Maybe<ResolversTypes['FrameworkSearchBucketInterface']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FrameworkSearchBucketInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FrameworkSearchBucketInterface'] = ResolversParentTypes['FrameworkSearchBucketInterface']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  values?: Resolver<Array<Maybe<ResolversTypes['FrameworkSearchAggregationValueInterface']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FrameworkSearchAggregationValueInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FrameworkSearchAggregationValueInterface'] = ResolversParentTypes['FrameworkSearchAggregationValueInterface']> = ResolversObject<{
  metrics?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FrameworkSearchDocumentInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FrameworkSearchDocumentInterface'] = ResolversParentTypes['FrameworkSearchDocumentInterface']> = ResolversObject<{
  customAttributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['FrameworkAttributeInterface']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FrameworkSearchSearchCriteriaInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FrameworkSearchSearchCriteriaInterface'] = ResolversParentTypes['FrameworkSearchSearchCriteriaInterface']> = ResolversObject<{
  currentPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  filterGroups?: Resolver<Array<Maybe<ResolversTypes['FrameworkSearchFilterGroup']>>, ParentType, ContextType>;
  pageSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  requestName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sortOrders?: Resolver<Maybe<Array<Maybe<ResolversTypes['FrameworkSortOrder']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GiftMessageDataMessageInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GiftMessageDataMessageInterface'] = ResolversParentTypes['GiftMessageDataMessageInterface']> = ResolversObject<{
  customerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['GiftMessageDataMessageExtensionInterface']>, ParentType, ContextType>;
  giftMessageId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recipient?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GiftMessageDataMessageExtensionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GiftMessageDataMessageExtensionInterface'] = ResolversParentTypes['GiftMessageDataMessageExtensionInterface']> = ResolversObject<{
  entityId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entityType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InventoryInStorePickupApiDataSearchResultInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InventoryInStorePickupApiDataSearchResultInterface'] = ResolversParentTypes['InventoryInStorePickupApiDataSearchResultInterface']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['InventoryInStorePickupApiDataPickupLocationInterface']>>, ParentType, ContextType>;
  searchRequest?: Resolver<ResolversTypes['InventoryInStorePickupApiDataSearchRequestInterface'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InventoryInStorePickupApiDataPickupLocationInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InventoryInStorePickupApiDataPickupLocationInterface'] = ResolversParentTypes['InventoryInStorePickupApiDataPickupLocationInterface']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  fax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pickupLocationCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  regionId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InventoryInStorePickupApiDataSearchRequestInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InventoryInStorePickupApiDataSearchRequestInterface'] = ResolversParentTypes['InventoryInStorePickupApiDataSearchRequestInterface']> = ResolversObject<{
  area?: Resolver<Maybe<ResolversTypes['InventoryInStorePickupApiDataSearchRequestAreaInterface']>, ParentType, ContextType>;
  currentPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['InventoryInStorePickupApiDataSearchRequestExtensionInterface']>, ParentType, ContextType>;
  filters?: Resolver<Maybe<ResolversTypes['InventoryInStorePickupApiDataSearchRequestFiltersInterface']>, ParentType, ContextType>;
  pageSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  scopeCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  scopeType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sort?: Resolver<Maybe<Array<Maybe<ResolversTypes['FrameworkSortOrder']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InventoryInStorePickupApiDataSearchRequestAreaInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InventoryInStorePickupApiDataSearchRequestAreaInterface'] = ResolversParentTypes['InventoryInStorePickupApiDataSearchRequestAreaInterface']> = ResolversObject<{
  radius?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  searchTerm?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InventoryInStorePickupApiDataSearchRequestExtensionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InventoryInStorePickupApiDataSearchRequestExtensionInterface'] = ResolversParentTypes['InventoryInStorePickupApiDataSearchRequestExtensionInterface']> = ResolversObject<{
  productsInfo?: Resolver<Maybe<Array<Maybe<ResolversTypes['InventoryInStorePickupApiDataSearchRequestProductInfoInterface']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InventoryInStorePickupApiDataSearchRequestProductInfoInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InventoryInStorePickupApiDataSearchRequestProductInfoInterface'] = ResolversParentTypes['InventoryInStorePickupApiDataSearchRequestProductInfoInterface']> = ResolversObject<{
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InventoryInStorePickupApiDataSearchRequestFiltersInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InventoryInStorePickupApiDataSearchRequestFiltersInterface'] = ResolversParentTypes['InventoryInStorePickupApiDataSearchRequestFiltersInterface']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['InventoryInStorePickupApiDataSearchRequestFilterInterface']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['InventoryInStorePickupApiDataSearchRequestFilterInterface']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['InventoryInStorePickupApiDataSearchRequestFilterInterface']>, ParentType, ContextType>;
  pickupLocationCode?: Resolver<Maybe<ResolversTypes['InventoryInStorePickupApiDataSearchRequestFilterInterface']>, ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['InventoryInStorePickupApiDataSearchRequestFilterInterface']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['InventoryInStorePickupApiDataSearchRequestFilterInterface']>, ParentType, ContextType>;
  regionId?: Resolver<Maybe<ResolversTypes['InventoryInStorePickupApiDataSearchRequestFilterInterface']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['InventoryInStorePickupApiDataSearchRequestFilterInterface']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InventoryInStorePickupApiDataSearchRequestFilterInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InventoryInStorePickupApiDataSearchRequestFilterInterface'] = ResolversParentTypes['InventoryInStorePickupApiDataSearchRequestFilterInterface']> = ResolversObject<{
  conditionType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofAutosearchDataSearchResultInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofAutosearchDataSearchResultInterface'] = ResolversParentTypes['LofAutosearchDataSearchResultInterface']> = ResolversObject<{
  item?: Resolver<ResolversTypes['LofAutosearchDataItemInterface'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofAutosearchDataItemInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofAutosearchDataItemInterface'] = ResolversParentTypes['LofAutosearchDataItemInterface']> = ResolversObject<{
  blogPosts?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  blogTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  brandTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  brands?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categoryTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cmsPage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cmsTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  faq?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  faqTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  products?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  suggested?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofBannerSliderDataBannerInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofBannerSliderDataBannerInterface'] = ResolversParentTypes['LofBannerSliderDataBannerInterface']> = ResolversObject<{
  altText?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isEnabled?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isFeatured?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  link?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proCatId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  resourceMap?: Resolver<Maybe<ResolversTypes['LofBannerSliderDataResourceMapInterface']>, ParentType, ContextType>;
  resourceMapId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  resourcePath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resourceType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  showSubTitle?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sliderId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sortOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  storeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofBannerSliderDataResourceMapInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofBannerSliderDataResourceMapInterface'] = ResolversParentTypes['LofBannerSliderDataResourceMapInterface']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maxWidth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minWidth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofBannerSliderDataBannerSearchResultInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofBannerSliderDataBannerSearchResultInterface'] = ResolversParentTypes['LofBannerSliderDataBannerSearchResultInterface']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['LofBannerSliderDataBannerInterface']>>, ParentType, ContextType>;
  searchCriteria?: Resolver<ResolversTypes['FrameworkSearchCriteriaInterface'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofBannerSliderDataSliderInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofBannerSliderDataSliderInterface'] = ResolversParentTypes['LofBannerSliderDataSliderInterface']> = ResolversObject<{
  banners?: Resolver<Array<Maybe<ResolversTypes['LofBannerSliderDataBannerInterface']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customerGroupId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isEnabled?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isFeatured?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isShowTitle?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storeId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tags?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofBannerSliderDataSliderSearchResultInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofBannerSliderDataSliderSearchResultInterface'] = ResolversParentTypes['LofBannerSliderDataSliderSearchResultInterface']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['LofBannerSliderDataSliderInterface']>>, ParentType, ContextType>;
  searchCriteria?: Resolver<ResolversTypes['FrameworkSearchCriteriaInterface'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofChatWootDataChatwootInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofChatWootDataChatwootInterface'] = ResolversParentTypes['LofChatWootDataChatwootInterface']> = ResolversObject<{
  agentAvailability?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  agentAwayMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  agentId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  agentName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  channelId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  channelName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  channelType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  chatwootId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sellerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  teamName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  websiteToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  welcomeTagline?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  welcomeTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  widgetColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofChatWootDataChatwootSearchResultsInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofChatWootDataChatwootSearchResultsInterface'] = ResolversParentTypes['LofChatWootDataChatwootSearchResultsInterface']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['LofChatWootDataChatwootInterface']>>, ParentType, ContextType>;
  searchCriteria?: Resolver<ResolversTypes['FrameworkSearchCriteriaInterface'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofFormbuilderDataFormbuilderDesignInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofFormbuilderDataFormbuilderDesignInterface'] = ResolversParentTypes['LofFormbuilderDataFormbuilderDesignInterface']> = ResolversObject<{
  fields?: Resolver<Array<Maybe<ResolversTypes['LofFormbuilderDataFieldDesignInterface']>>, ParentType, ContextType>;
  form?: Resolver<ResolversTypes['LofFormbuilderDataFormbuilderInterface'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofFormbuilderDataFieldDesignInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofFormbuilderDataFieldDesignInterface'] = ResolversParentTypes['LofFormbuilderDataFieldDesignInterface']> = ResolversObject<{
  cid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  colorLabel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  colorText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fieldId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldOptions?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldSize?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fieldType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fieldcol?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  fontSize?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fontWeight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  includeBlankOption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inlineCss?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['LofFormbuilderDataFieldOptionInterface']>>>, ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  validation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wrappercol?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofFormbuilderDataFieldOptionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofFormbuilderDataFieldOptionInterface'] = ResolversParentTypes['LofFormbuilderDataFieldOptionInterface']> = ResolversObject<{
  checked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofFormbuilderDataFormbuilderInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofFormbuilderDataFormbuilderInterface'] = ResolversParentTypes['LofFormbuilderDataFormbuilderInterface']> = ResolversObject<{
  afterFormContent?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  beforeFormContent?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creationTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customTemplate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerGroups?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  design?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  designFields?: Resolver<Maybe<Array<Maybe<ResolversTypes['LofFormbuilderDataFieldDesignInterface']>>>, ParentType, ContextType>;
  emailReceive?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  emailTemplate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  enableTracklink?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  formId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inputHoverColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metaDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metaKeywords?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pageLayout?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pageTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  redirectLink?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  senderEmailField?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  senderNameField?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  showCaptcha?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  showToplink?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  submitBackgroundColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  submitButtonText?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  submitHoverColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  submitTextColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  successMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thanksEmailTemplate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thankyouEmailTemplate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thankyouField?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updateTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofMarketPlaceDataGroupSearchResultsInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofMarketPlaceDataGroupSearchResultsInterface'] = ResolversParentTypes['LofMarketPlaceDataGroupSearchResultsInterface']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['LofMarketPlaceDataGroupInterface']>>, ParentType, ContextType>;
  searchCriteria?: Resolver<ResolversTypes['FrameworkSearchCriteriaInterface'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofMarketPlaceDataGroupInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofMarketPlaceDataGroupInterface'] = ResolversParentTypes['LofMarketPlaceDataGroupInterface']> = ResolversObject<{
  canAddProduct?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  canUseMessage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  canUseShiping?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  canUseVacation?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  canUseWithdrawal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  groupId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  limitProduct?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  showInSidebar?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  urlKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofMarketPlaceDataRatingInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofMarketPlaceDataRatingInterface'] = ResolversParentTypes['LofMarketPlaceDataRatingInterface']> = ResolversObject<{
  adminNote?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  answer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  detail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  guestEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isRecommended?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  likeAbout?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  minusReview?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nickname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notLikeAbout?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  plusReview?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rate1?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rate2?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rate3?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ratingId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reportAbuse?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sellerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  verifiedBuyer?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofMarketPlaceDataRatingSearchResultsInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofMarketPlaceDataRatingSearchResultsInterface'] = ResolversParentTypes['LofMarketPlaceDataRatingSearchResultsInterface']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['LofMarketPlaceDataRatingInterface']>>, ParentType, ContextType>;
  searchCriteria?: Resolver<ResolversTypes['FrameworkSearchCriteriaInterface'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofMarketPlaceDataReviewSearchResultsInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofMarketPlaceDataReviewSearchResultsInterface'] = ResolversParentTypes['LofMarketPlaceDataReviewSearchResultsInterface']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['LofMarketPlaceDataReviewInterface']>>, ParentType, ContextType>;
  searchCriteria?: Resolver<ResolversTypes['FrameworkSearchCriteriaInterface'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofMarketPlaceDataReviewInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofMarketPlaceDataReviewInterface'] = ResolversParentTypes['LofMarketPlaceDataReviewInterface']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  detail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isPublic?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nickname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reviewId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reviewsellerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sellerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofMarketPlaceDataSellerInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofMarketPlaceDataSellerInterface'] = ResolversParentTypes['LofMarketPlaceDataSellerInterface']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributeSetId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  bannerPic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  commissionId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  companyDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  companyLocality?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  companyUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customAttributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['FrameworkAttributeInterface']>>>, ParentType, ContextType>;
  customerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  durationOfVendor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  facebookId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fbActive?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gplusActive?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gplusId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  groupId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instagramActive?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instagramId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isSearchable?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  linkedinActive?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkedinId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logoPic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metaDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metaKeyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  openingHours?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pageLayout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pinterestActive?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pinterestId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  products?: Resolver<Maybe<ResolversTypes['LofMarketPlaceDataSellerProductSearchResultsInterface']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  regionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  returnPolicy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sellerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sellerRates?: Resolver<Maybe<ResolversTypes['LofMarketPlaceDataRatingSearchResultsInterface']>, ParentType, ContextType>;
  sellerReviews?: Resolver<Maybe<ResolversTypes['LofMarketPlaceDataReviewSearchResultsInterface']>, ParentType, ContextType>;
  shippingPolicy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shopTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shopUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  specialOpeningHours?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  storeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summaryRates?: Resolver<Maybe<ResolversTypes['LofMarketPlaceDataSummaryRatingInterface']>, ParentType, ContextType>;
  taxvat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  telephone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalProducts?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalReviews?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalSales?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalSold?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  twActive?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitterId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  urlKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vacation?: Resolver<Maybe<ResolversTypes['LofMarketPlaceDataSellerVacationInterface']>, ParentType, ContextType>;
  verifyStatus?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  vimeoActive?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vimeoId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  youtubeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofMarketPlaceDataSellerProductSearchResultsInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofMarketPlaceDataSellerProductSearchResultsInterface'] = ResolversParentTypes['LofMarketPlaceDataSellerProductSearchResultsInterface']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['LofMarketPlaceDataProductInterface']>>, ParentType, ContextType>;
  searchCriteria?: Resolver<ResolversTypes['FrameworkSearchCriteriaInterface'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofMarketPlaceDataProductInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofMarketPlaceDataProductInterface'] = ResolversParentTypes['LofMarketPlaceDataProductInterface']> = ResolversObject<{
  approval?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributeSetId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entityId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hasOptions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isInStock?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  qty?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  requiredOptions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sellerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  typeId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofMarketPlaceDataSummaryRatingInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofMarketPlaceDataSummaryRatingInterface'] = ResolversParentTypes['LofMarketPlaceDataSummaryRatingInterface']> = ResolversObject<{
  average?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  perRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rateFive?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rateFour?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rateOne?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rateThree?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rateTwo?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofMarketPlaceDataSellerVacationInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofMarketPlaceDataSellerVacationInterface'] = ResolversParentTypes['LofMarketPlaceDataSellerVacationInterface']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fromDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sellerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  textAddCart?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  toDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vacationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vacationMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofMarketPlaceDataSellersSearchResultsInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofMarketPlaceDataSellersSearchResultsInterface'] = ResolversParentTypes['LofMarketPlaceDataSellersSearchResultsInterface']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['LofMarketPlaceDataSellerInterface']>>, ParentType, ContextType>;
  searchCriteria?: Resolver<ResolversTypes['FrameworkSearchCriteriaInterface'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofMobileDataMobileNavSidebarInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofMobileDataMobileNavSidebarInterface'] = ResolversParentTypes['LofMobileDataMobileNavSidebarInterface']> = ResolversObject<{
  sidebarBottomBlock?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staticBottomText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofProductReviewsDataReviewDataInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofProductReviewsDataReviewDataInterface'] = ResolversParentTypes['LofProductReviewsDataReviewDataInterface']> = ResolversObject<{
  curPage?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  detailedSummary?: Resolver<Maybe<ResolversTypes['LofProductReviewsDataDetailedSummaryInterface']>, ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['LofProductReviewsDataReviewInterface']>>, ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  ratingSummary?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  ratingSummaryValue?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  recomendedPercent?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalFound?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalRecords?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofProductReviewsDataDetailedSummaryInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofProductReviewsDataDetailedSummaryInterface'] = ResolversParentTypes['LofProductReviewsDataDetailedSummaryInterface']> = ResolversObject<{
  five?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  four?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  one?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ratingSummary?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  reviewsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  three?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  two?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofProductReviewsDataReviewInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofProductReviewsDataReviewInterface'] = ResolversParentTypes['LofProductReviewsDataReviewInterface']> = ResolversObject<{
  answer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  comments?: Resolver<Array<Maybe<ResolversTypes['LofProductReviewsDataReplyInterface']>>, ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  customize?: Resolver<ResolversTypes['LofProductReviewsDataCustomizeInterface'], ParentType, ContextType>;
  detail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entityPkValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  galleries?: Resolver<ResolversTypes['LofProductReviewsDataGalleryInterface'], ParentType, ContextType>;
  guestEmail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  images?: Resolver<Array<Maybe<ResolversTypes['LofProductReviewsDataImageInterface']>>, ParentType, ContextType>;
  isRecommended?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  likeAbout?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  minusReview?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nickname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  notLikeAbout?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  plusReview?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ratings?: Resolver<Array<Maybe<ResolversTypes['LofProductReviewsDataRatingVoteInterface']>>, ParentType, ContextType>;
  replyTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reportAbuse?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reviewEntity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reviewStatus?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reviewType?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  storeId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stores?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  verifiedBuyer?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofProductReviewsDataReplyInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofProductReviewsDataReplyInterface'] = ResolversParentTypes['LofProductReviewsDataReplyInterface']> = ResolversObject<{
  adminUserId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avatarUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  emailAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parentReplyId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  replyComment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  replyCustomerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  replyId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  replyTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reviewId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  website?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofProductReviewsDataCustomizeInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofProductReviewsDataCustomizeInterface'] = ResolversParentTypes['LofProductReviewsDataCustomizeInterface']> = ResolversObject<{
  advantages?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  answer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatarImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  average?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countHelpful?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  countUnhelpful?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  disadvantages?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isRecommended?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reportAbuse?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reviewCustomizeId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reviewId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalHelpful?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  verifiedBuyer?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofProductReviewsDataGalleryInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofProductReviewsDataGalleryInterface'] = ResolversParentTypes['LofProductReviewsDataGalleryInterface']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  images?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reviewId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofProductReviewsDataImageInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofProductReviewsDataImageInterface'] = ResolversParentTypes['LofProductReviewsDataImageInterface']> = ResolversObject<{
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  resizedPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofProductReviewsDataRatingVoteInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofProductReviewsDataRatingVoteInterface'] = ResolversParentTypes['LofProductReviewsDataRatingVoteInterface']> = ResolversObject<{
  optionId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  percent?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ratingCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ratingId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ratingName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reviewId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  voteId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofProductTagsDataTagSearchResultsInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofProductTagsDataTagSearchResultsInterface'] = ResolversParentTypes['LofProductTagsDataTagSearchResultsInterface']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['LofProductTagsDataTagInterface']>>, ParentType, ContextType>;
  searchCriteria?: Resolver<ResolversTypes['FrameworkSearchCriteriaInterface'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofProductTagsDataTagInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofProductTagsDataTagInterface'] = ResolversParentTypes['LofProductTagsDataTagInterface']> = ResolversObject<{
  identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  storeId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tagDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tagId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tagTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofmpBlogDataCommentSearchResultsInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofmpBlogDataCommentSearchResultsInterface'] = ResolversParentTypes['LofmpBlogDataCommentSearchResultsInterface']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['LofmpBlogDataCommentInterface']>>, ParentType, ContextType>;
  searchCriteria?: Resolver<ResolversTypes['FrameworkSearchCriteriaInterface'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofmpBlogDataCommentInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofmpBlogDataCommentInterface'] = ResolversParentTypes['LofmpBlogDataCommentInterface']> = ResolversObject<{
  adminId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  authorType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  commentId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creationTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  hasRead?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  postId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userEmail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofmpBlogDataCategoryInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofmpBlogDataCategoryInterface'] = ResolversParentTypes['LofmpBlogDataCategoryInterface']> = ResolversObject<{
  canonicalUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  catPosition?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  categoryId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  comments?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creationTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemPerPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  layoutType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  layoutUpdateXml?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lgColumnItem?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mdColumnItem?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  metaDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metaKeywords?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderby?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pageLayout?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pageTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postTemplate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postsStyle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postsTemplate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  smColumnItem?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stores?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  updateTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  xsColumnItem?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofmpBlogDataCategorySearchResultsInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofmpBlogDataCategorySearchResultsInterface'] = ResolversParentTypes['LofmpBlogDataCategorySearchResultsInterface']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['LofmpBlogDataCategoryInterface']>>, ParentType, ContextType>;
  searchCriteria?: Resolver<ResolversTypes['FrameworkSearchCriteriaInterface'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofmpBlogDataPostInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofmpBlogDataPostInterface'] = ResolversParentTypes['LofmpBlogDataPostInterface']> = ResolversObject<{
  canonicalUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  categoryIdentifiers?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  categoryIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  categoryNames?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  commentCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creationTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  disklike?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  enableComment?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  filteredContent?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hits?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageVideoId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageVideoType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isPrivate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  like?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  metaDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metaKeywords?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metaTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ogDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ogImg?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ogMetadata?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ogTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ogType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pageLayout?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pageTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  postsRelated?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  productsRelated?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  realImageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  realPostUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  realThumbnailUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortContent?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  storeId?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  stores?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  tagIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  tagList?: Resolver<Maybe<Array<Maybe<ResolversTypes['LofmpBlogDataTagInterface']>>>, ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnailType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnailVideoId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnailVideoType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updateTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofmpBlogDataTagInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofmpBlogDataTagInterface'] = ResolversParentTypes['LofmpBlogDataTagInterface']> = ResolversObject<{
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customLayout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customLayoutUpdateXml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customTheme?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customThemeFrom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customThemeTo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  layoutUpdateXml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metaDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metaKeywords?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metaRobots?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metaTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pageLayout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postsListTemplate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postsPerPage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tagId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofmpBlogDataPostSearchResultsInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofmpBlogDataPostSearchResultsInterface'] = ResolversParentTypes['LofmpBlogDataPostSearchResultsInterface']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['LofmpBlogDataPostInterface']>>, ParentType, ContextType>;
  searchCriteria?: Resolver<ResolversTypes['FrameworkSearchCriteriaInterface'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofmpBlogDataTagSearchResultsInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofmpBlogDataTagSearchResultsInterface'] = ResolversParentTypes['LofmpBlogDataTagSearchResultsInterface']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['LofmpBlogDataTagInterface']>>, ParentType, ContextType>;
  searchCriteria?: Resolver<ResolversTypes['FrameworkSearchCriteriaInterface'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofmpCouponCodeDataCouponSearchResultsInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofmpCouponCodeDataCouponSearchResultsInterface'] = ResolversParentTypes['LofmpCouponCodeDataCouponSearchResultsInterface']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['LofmpCouponCodeDataCouponInterface']>>, ParentType, ContextType>;
  searchCriteria?: Resolver<ResolversTypes['FrameworkSearchCriteriaInterface'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofmpCouponCodeDataCouponInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofmpCouponCodeDataCouponInterface'] = ResolversParentTypes['LofmpCouponCodeDataCouponInterface']> = ResolversObject<{
  actionsSerialized?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  alias?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conditionsSerialized?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  couponId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  couponcodeId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  customerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discountAmount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fromDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isPublic?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ruleId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sellerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  simpleAction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timesUsed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  toDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  usageLimit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofmpRmaDataAddressInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofmpRmaDataAddressInterface'] = ResolversParentTypes['LofmpRmaDataAddressInterface']> = ResolversObject<{
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sellerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sortOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofmpRmaDataAddressSearchResultsInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofmpRmaDataAddressSearchResultsInterface'] = ResolversParentTypes['LofmpRmaDataAddressSearchResultsInterface']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['LofmpRmaDataAddressInterface']>>, ParentType, ContextType>;
  searchCriteria?: Resolver<ResolversTypes['FrameworkSearchCriteriaInterface'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofmpRmaDataConditionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofmpRmaDataConditionInterface'] = ResolversParentTypes['LofmpRmaDataConditionInterface']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sortOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofmpRmaDataConditionSearchResultsInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofmpRmaDataConditionSearchResultsInterface'] = ResolversParentTypes['LofmpRmaDataConditionSearchResultsInterface']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['LofmpRmaDataConditionInterface']>>, ParentType, ContextType>;
  searchCriteria?: Resolver<ResolversTypes['FrameworkSearchCriteriaInterface'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofmpRmaDataFieldInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofmpRmaDataFieldInterface'] = ResolversParentTypes['LofmpRmaDataFieldInterface']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isEditableCustomer?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isRequiredStaff?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isShowInConfirmShipping?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isVisibleCustomer?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sortOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  values?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  visibleCustomerStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofmpRmaDataFieldSearchResultsInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofmpRmaDataFieldSearchResultsInterface'] = ResolversParentTypes['LofmpRmaDataFieldSearchResultsInterface']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['LofmpRmaDataFieldInterface']>>, ParentType, ContextType>;
  searchCriteria?: Resolver<ResolversTypes['FrameworkSearchCriteriaInterface'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofmpRmaDataQuickResponseInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofmpRmaDataQuickResponseInterface'] = ResolversParentTypes['LofmpRmaDataQuickResponseInterface']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  template?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofmpRmaDataQuickResponseSearchResultsInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofmpRmaDataQuickResponseSearchResultsInterface'] = ResolversParentTypes['LofmpRmaDataQuickResponseSearchResultsInterface']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['LofmpRmaDataQuickResponseInterface']>>, ParentType, ContextType>;
  searchCriteria?: Resolver<ResolversTypes['FrameworkSearchCriteriaInterface'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofmpRmaDataReasonInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofmpRmaDataReasonInterface'] = ResolversParentTypes['LofmpRmaDataReasonInterface']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sortOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofmpRmaDataReasonSearchResultsInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofmpRmaDataReasonSearchResultsInterface'] = ResolversParentTypes['LofmpRmaDataReasonSearchResultsInterface']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['LofmpRmaDataReasonInterface']>>, ParentType, ContextType>;
  searchCriteria?: Resolver<ResolversTypes['FrameworkSearchCriteriaInterface'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofmpRmaDataResolutionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofmpRmaDataResolutionInterface'] = ResolversParentTypes['LofmpRmaDataResolutionInterface']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sortOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofmpRmaDataResolutionSearchResultsInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofmpRmaDataResolutionSearchResultsInterface'] = ResolversParentTypes['LofmpRmaDataResolutionSearchResultsInterface']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['LofmpRmaDataResolutionInterface']>>, ParentType, ContextType>;
  searchCriteria?: Resolver<ResolversTypes['FrameworkSearchCriteriaInterface'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofmpRmaDataStatusInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofmpRmaDataStatusInterface'] = ResolversParentTypes['LofmpRmaDataStatusInterface']> = ResolversObject<{
  adminMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customerMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  historyMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isShowShipping?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sortOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofmpRmaDataStatusSearchResultsInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofmpRmaDataStatusSearchResultsInterface'] = ResolversParentTypes['LofmpRmaDataStatusSearchResultsInterface']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['LofmpRmaDataStatusInterface']>>, ParentType, ContextType>;
  searchCriteria?: Resolver<ResolversTypes['FrameworkSearchCriteriaInterface'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PayPalBraintreeDataAuthDataInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PayPalBraintreeDataAuthDataInterface'] = ResolversParentTypes['PayPalBraintreeDataAuthDataInterface']> = ResolversObject<{
  actionSuccess?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  clientToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  loggedIn?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  storeCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuoteDataAddressInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuoteDataAddressInterface'] = ResolversParentTypes['QuoteDataAddressInterface']> = ResolversObject<{
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customAttributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['FrameworkAttributeInterface']>>>, ParentType, ContextType>;
  customerAddressId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  customerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['QuoteDataAddressExtensionInterface']>, ParentType, ContextType>;
  fax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  middlename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postcode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  regionCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  regionId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sameAsBilling?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  saveInAddressBook?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  street?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  telephone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vatId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuoteDataAddressExtensionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuoteDataAddressExtensionInterface'] = ResolversParentTypes['QuoteDataAddressExtensionInterface']> = ResolversObject<{
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['SalesRuleDataRuleDiscountInterface']>>>, ParentType, ContextType>;
  pickupLocationCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SalesRuleDataRuleDiscountInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SalesRuleDataRuleDiscountInterface'] = ResolversParentTypes['SalesRuleDataRuleDiscountInterface']> = ResolversObject<{
  discountData?: Resolver<ResolversTypes['SalesRuleDataDiscountDataInterface'], ParentType, ContextType>;
  ruleId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ruleLabel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SalesRuleDataDiscountDataInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SalesRuleDataDiscountDataInterface'] = ResolversParentTypes['SalesRuleDataDiscountDataInterface']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  baseAmount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  baseOriginalAmount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  originalAmount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuoteDataCartInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuoteDataCartInterface'] = ResolversParentTypes['QuoteDataCartInterface']> = ResolversObject<{
  billingAddress?: Resolver<Maybe<ResolversTypes['QuoteDataAddressInterface']>, ParentType, ContextType>;
  convertedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['QuoteDataCurrencyInterface']>, ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['CustomerDataCustomerInterface'], ParentType, ContextType>;
  customerIsGuest?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  customerNote?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerNoteNotify?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  customerTaxClassId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['QuoteDataCartExtensionInterface']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isVirtual?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['QuoteDataCartItemInterface']>>>, ParentType, ContextType>;
  itemsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  itemsQty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  origOrderId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reservedOrderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storeId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuoteDataCurrencyInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuoteDataCurrencyInterface'] = ResolversParentTypes['QuoteDataCurrencyInterface']> = ResolversObject<{
  baseCurrencyCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  baseToGlobalRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseToQuoteRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  globalCurrencyCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quoteCurrencyCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storeCurrencyCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storeToBaseRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  storeToQuoteRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerDataCustomerInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomerDataCustomerInterface'] = ResolversParentTypes['CustomerDataCustomerInterface']> = ResolversObject<{
  addresses?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomerDataAddressInterface']>>>, ParentType, ContextType>;
  confirmation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdIn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customAttributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['FrameworkAttributeInterface']>>>, ParentType, ContextType>;
  defaultBilling?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  defaultShipping?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  disableAutoGroupChange?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  dob?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['CustomerDataCustomerExtensionInterface']>, ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  groupId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  middlename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storeId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  taxvat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  websiteId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerDataAddressInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomerDataAddressInterface'] = ResolversParentTypes['CustomerDataAddressInterface']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customAttributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['FrameworkAttributeInterface']>>>, ParentType, ContextType>;
  customerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  defaultBilling?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  defaultShipping?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  fax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  middlename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['CustomerDataRegionInterface']>, ParentType, ContextType>;
  regionId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  street?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  telephone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vatId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerDataRegionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomerDataRegionInterface'] = ResolversParentTypes['CustomerDataRegionInterface']> = ResolversObject<{
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  region?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  regionCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  regionId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerDataCustomerExtensionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomerDataCustomerExtensionInterface'] = ResolversParentTypes['CustomerDataCustomerExtensionInterface']> = ResolversObject<{
  amazonId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  assistanceAllowed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isSubscribed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sellerAttributes?: Resolver<Maybe<ResolversTypes['LofMarketPermissionsDataSellerCustomerInterface']>, ParentType, ContextType>;
  vertexCustomerCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vertexCustomerCountry?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofMarketPermissionsDataSellerCustomerInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofMarketPermissionsDataSellerCustomerInterface'] = ResolversParentTypes['LofMarketPermissionsDataSellerCustomerInterface']> = ResolversObject<{
  customerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  jobTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sellerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  telephone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuoteDataCartExtensionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuoteDataCartExtensionInterface'] = ResolversParentTypes['QuoteDataCartExtensionInterface']> = ResolversObject<{
  amazonOrderReferenceId?: Resolver<Maybe<ResolversTypes['AmazonPaymentDataQuoteLinkInterface']>, ParentType, ContextType>;
  isReorder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  shippingAssignments?: Resolver<Maybe<Array<Maybe<ResolversTypes['QuoteDataShippingAssignmentInterface']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AmazonPaymentDataQuoteLinkInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AmazonPaymentDataQuoteLinkInterface'] = ResolversParentTypes['AmazonPaymentDataQuoteLinkInterface']> = ResolversObject<{
  amazonOrderReferenceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  confirmed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quoteId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sandboxSimulationReference?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuoteDataShippingAssignmentInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuoteDataShippingAssignmentInterface'] = ResolversParentTypes['QuoteDataShippingAssignmentInterface']> = ResolversObject<{
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['QuoteDataCartItemInterface']>>, ParentType, ContextType>;
  shipping?: Resolver<ResolversTypes['QuoteDataShippingInterface'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuoteDataCartItemInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuoteDataCartItemInterface'] = ResolversParentTypes['QuoteDataCartItemInterface']> = ResolversObject<{
  extensionAttributes?: Resolver<Maybe<ResolversTypes['QuoteDataCartItemExtensionInterface']>, ParentType, ContextType>;
  itemId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  productOption?: Resolver<Maybe<ResolversTypes['QuoteDataProductOptionInterface']>, ParentType, ContextType>;
  productType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  qty?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  quoteId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuoteDataCartItemExtensionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuoteDataCartItemExtensionInterface'] = ResolversParentTypes['QuoteDataCartItemExtensionInterface']> = ResolversObject<{
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['SalesRuleDataRuleDiscountInterface']>>>, ParentType, ContextType>;
  sellerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sellerName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sellerUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuoteDataProductOptionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuoteDataProductOptionInterface'] = ResolversParentTypes['QuoteDataProductOptionInterface']> = ResolversObject<{
  extensionAttributes?: Resolver<Maybe<ResolversTypes['QuoteDataProductOptionExtensionInterface']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuoteDataProductOptionExtensionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuoteDataProductOptionExtensionInterface'] = ResolversParentTypes['QuoteDataProductOptionExtensionInterface']> = ResolversObject<{
  bundleOptions?: Resolver<Maybe<Array<Maybe<ResolversTypes['BundleDataBundleOptionInterface']>>>, ParentType, ContextType>;
  configurableItemOptions?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConfigurableProductDataConfigurableItemOptionValueInterface']>>>, ParentType, ContextType>;
  customOptions?: Resolver<Maybe<Array<Maybe<ResolversTypes['CatalogDataCustomOptionInterface']>>>, ParentType, ContextType>;
  downloadableOption?: Resolver<Maybe<ResolversTypes['DownloadableDataDownloadableOptionInterface']>, ParentType, ContextType>;
  groupedOptions?: Resolver<Maybe<Array<Maybe<ResolversTypes['GroupedProductDataGroupedOptionsInterface']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BundleDataBundleOptionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BundleDataBundleOptionInterface'] = ResolversParentTypes['BundleDataBundleOptionInterface']> = ResolversObject<{
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  optionId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  optionQty?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  optionSelections?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConfigurableProductDataConfigurableItemOptionValueInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConfigurableProductDataConfigurableItemOptionValueInterface'] = ResolversParentTypes['ConfigurableProductDataConfigurableItemOptionValueInterface']> = ResolversObject<{
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  optionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  optionValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogDataCustomOptionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogDataCustomOptionInterface'] = ResolversParentTypes['CatalogDataCustomOptionInterface']> = ResolversObject<{
  extensionAttributes?: Resolver<Maybe<ResolversTypes['CatalogDataCustomOptionExtensionInterface']>, ParentType, ContextType>;
  optionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  optionValue?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogDataCustomOptionExtensionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogDataCustomOptionExtensionInterface'] = ResolversParentTypes['CatalogDataCustomOptionExtensionInterface']> = ResolversObject<{
  fileInfo?: Resolver<Maybe<ResolversTypes['FrameworkDataImageContentInterface']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DownloadableDataDownloadableOptionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DownloadableDataDownloadableOptionInterface'] = ResolversParentTypes['DownloadableDataDownloadableOptionInterface']> = ResolversObject<{
  downloadableLinks?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GroupedProductDataGroupedOptionsInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GroupedProductDataGroupedOptionsInterface'] = ResolversParentTypes['GroupedProductDataGroupedOptionsInterface']> = ResolversObject<{
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  qty?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuoteDataShippingInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuoteDataShippingInterface'] = ResolversParentTypes['QuoteDataShippingInterface']> = ResolversObject<{
  address?: Resolver<ResolversTypes['QuoteDataAddressInterface'], ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  method?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuoteDataPaymentInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuoteDataPaymentInterface'] = ResolversParentTypes['QuoteDataPaymentInterface']> = ResolversObject<{
  additionalData?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['QuoteDataPaymentExtensionInterface']>, ParentType, ContextType>;
  method?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  poNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuoteDataPaymentExtensionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuoteDataPaymentExtensionInterface'] = ResolversParentTypes['QuoteDataPaymentExtensionInterface']> = ResolversObject<{
  agreementIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuoteDataShippingMethodInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuoteDataShippingMethodInterface'] = ResolversParentTypes['QuoteDataShippingMethodInterface']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  available?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  baseAmount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  carrierCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  carrierTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errorMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  methodCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  methodTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  priceExclTax?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  priceInclTax?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofMobileDataMobileCmsPageInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofMobileDataMobileCmsPageInterface'] = ResolversParentTypes['LofMobileDataMobileCmsPageInterface']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofMobileDataMobileSuggestionTagInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofMobileDataMobileSuggestionTagInterface'] = ResolversParentTypes['LofMobileDataMobileSuggestionTagInterface']> = ResolversObject<{
  numOfResults?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  term?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofProductTagsDataTagProductLinkInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofProductTagsDataTagProductLinkInterface'] = ResolversParentTypes['LofProductTagsDataTagProductLinkInterface']> = ResolversObject<{
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tagId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VesMegamenuDataItemInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VesMegamenuDataItemInterface'] = ResolversParentTypes['VesMegamenuDataItemInterface']> = ResolversObject<{
  afterHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  align?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  animationIn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  animationTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  beforeHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bgColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bgHoverColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  caret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  childCol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  childColType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  classes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentWidth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  disableBellow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dropdownBgcolor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dropdownBgimage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dropdownBgimagerepeat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dropdownBgpositionx?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dropdownBgpositiony?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dropdownInlinecss?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  footerHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  headerHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hoverCaret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hoverColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hoverIcon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iconClasses?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iconPosition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inlinceCss?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isGroup?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isgroupLevel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itemId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  leftSidebarHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  leftSidebarWidth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  menuId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parentcat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rightSidebarHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rightSidebarWidth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  showContent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  showFooter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  showHeader?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  showIcon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  showLeftSidebar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  showName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  showRightSidebar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subHeight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subWidth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  submenuSorttype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tabPosition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VesMegamenuDataItemSearchResultsInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VesMegamenuDataItemSearchResultsInterface'] = ResolversParentTypes['VesMegamenuDataItemSearchResultsInterface']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['VesMegamenuDataItemInterface']>>, ParentType, ContextType>;
  searchCriteria?: Resolver<ResolversTypes['FrameworkSearchCriteriaInterface'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VesMegamenuDataMenuFrontendInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VesMegamenuDataMenuFrontendInterface'] = ResolversParentTypes['VesMegamenuDataMenuFrontendInterface']> = ResolversObject<{
  alias?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  classes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cretionTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerGroupIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  designStyle?: Resolver<Maybe<ResolversTypes['VesMegamenuDataDesignStyleInterface']>, ParentType, ContextType>;
  desktopTemplate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  disableBellow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  disableIblocks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  menuId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mobileMenuAlias?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mobileTemplate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['VesMegamenuDataMenuTreeItemInterface']>>>, ParentType, ContextType>;
  revertNext?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  revertPrevious?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scrolltofix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scrolltofixed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  storeId?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  versionId?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VesMegamenuDataDesignStyleInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VesMegamenuDataDesignStyleInterface'] = ResolversParentTypes['VesMegamenuDataDesignStyleInterface']> = ResolversObject<{
  background?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  borderBottomLeftRadius?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  borderBottomRightRadius?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  borderBottomWidth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  borderColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  borderLeftWidth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  borderStyle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  borderTopLeftRadius?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  borderTopRightRadius?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  borderTopWidth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  borderUnits?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  boxshadowBlur?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  boxshadowColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  boxshadowInset?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  boxshadowSpread?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  boxshadowUnits?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  boxshadowX?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  boxshadowY?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  fontCharSubset?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fontCustom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fontGoogle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fontGroup?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fontSize?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fontWeight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  marginBottom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  marginLeft?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  marginRight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  marginTop?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  marginUnits?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paddingBottom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paddingLeft?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paddingRight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paddingTop?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paddingUnits?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  radiusUnits?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VesMegamenuDataMenuTreeItemInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VesMegamenuDataMenuTreeItemInterface'] = ResolversParentTypes['VesMegamenuDataMenuTreeItemInterface']> = ResolversObject<{
  afterHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  align?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  animationIn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  animationTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  beforeHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bgColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bgHoverColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  caret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  childCol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  childColType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  childNodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['VesMegamenuDataMenuTreeItemInterface']>>>, ParentType, ContextType>;
  classes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentWidth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  disableBellow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dropdownBgcolor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dropdownBgimage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dropdownBgimagerepeat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dropdownBgpositionx?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dropdownBgpositiony?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dropdownInlinecss?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  footerHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  headerHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hoverCaret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hoverColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hoverIcon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iconClasses?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iconPosition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inlinceCss?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isGroup?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isgroupLevel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itemId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  leftSidebarHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  leftSidebarWidth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parentcat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rightSidebarHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rightSidebarWidth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  showContent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  showFooter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  showHeader?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  showIcon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  showLeftSidebar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  showName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  showRightSidebar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subHeight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subWidth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  submenuSorttype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tabPosition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  amazonPaymentAddressManagementV1GetBillingAddressPut?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationamazonPaymentAddressManagementV1GetBillingAddressPutArgs, 'amazonOrderReferenceId'>>;
  amazonPaymentAddressManagementV1GetShippingAddressPut?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationamazonPaymentAddressManagementV1GetShippingAddressPutArgs, 'amazonOrderReferenceId'>>;
  amazonPaymentOrderInformationManagementV1RemoveOrderReferenceDelete?: Resolver<Maybe<ResolversTypes['ErrorResponse']>, ParentType, ContextType>;
  checkoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationcheckoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPostArgs, 'cartId'>>;
  checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationcheckoutGuestPaymentInformationManagementV1SavePaymentInformationPostArgs, 'cartId'>>;
  checkoutGuestShippingInformationManagementV1SaveAddressInformationPost?: Resolver<Maybe<ResolversTypes['CheckoutDataPaymentDetailsInterface']>, ParentType, ContextType, RequireFields<MutationcheckoutGuestShippingInformationManagementV1SaveAddressInformationPostArgs, 'cartId'>>;
  checkoutGuestTotalsInformationManagementV1CalculatePost?: Resolver<Maybe<ResolversTypes['QuoteDataTotalsInterface']>, ParentType, ContextType, RequireFields<MutationcheckoutGuestTotalsInformationManagementV1CalculatePostArgs, 'cartId'>>;
  customerAccountManagementV1CreateAccountPost?: Resolver<Maybe<ResolversTypes['CustomerDataCustomerInterface']>, ParentType, ContextType, Partial<MutationcustomerAccountManagementV1CreateAccountPostArgs>>;
  customerAccountManagementV1InitiatePasswordResetPut?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationcustomerAccountManagementV1InitiatePasswordResetPutArgs>>;
  customerAccountManagementV1IsEmailAvailablePost?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationcustomerAccountManagementV1IsEmailAvailablePostArgs>>;
  customerAccountManagementV1ResetPasswordPost?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationcustomerAccountManagementV1ResetPasswordPostArgs>>;
  ecomteckAdvancedContactRequestRepositoryV1SavePost?: Resolver<Maybe<ResolversTypes['EcomteckAdvancedContactDataRequestInterface']>, ParentType, ContextType, Partial<MutationecomteckAdvancedContactRequestRepositoryV1SavePostArgs>>;
  giftMessageGuestCartRepositoryV1SavePost?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationgiftMessageGuestCartRepositoryV1SavePostArgs, 'cartId'>>;
  giftMessageGuestItemRepositoryV1SavePost?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationgiftMessageGuestItemRepositoryV1SavePostArgs, 'cartId' | 'itemId'>>;
  integrationAdminTokenServiceV1CreateAdminAccessTokenPost?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationintegrationAdminTokenServiceV1CreateAdminAccessTokenPostArgs>>;
  integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationintegrationCustomerTokenServiceV1CreateCustomerAccessTokenPostArgs>>;
  lofChatWootChatwootRepositoryV1DeleteByIdDelete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationlofChatWootChatwootRepositoryV1DeleteByIdDeleteArgs, 'chatwootId'>>;
  lofChatWootChatwootRepositoryV1SavePost?: Resolver<Maybe<ResolversTypes['LofChatWootDataChatwootInterface']>, ParentType, ContextType, Partial<MutationlofChatWootChatwootRepositoryV1SavePostArgs>>;
  lofChatWootChatwootRepositoryV1SavePut?: Resolver<Maybe<ResolversTypes['LofChatWootDataChatwootInterface']>, ParentType, ContextType, RequireFields<MutationlofChatWootChatwootRepositoryV1SavePutArgs, 'chatwootId'>>;
  lofChatWootChatwootRepositoryV1UpdateChatPut?: Resolver<Maybe<ResolversTypes['LofChatWootDataChatwootInterface']>, ParentType, ContextType, RequireFields<MutationlofChatWootChatwootRepositoryV1UpdateChatPutArgs, 'sellerId'>>;
  lofMarketPlaceSalesRepositoryV1CreateSellerOrderPost?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationlofMarketPlaceSalesRepositoryV1CreateSellerOrderPostArgs, 'orderId'>>;
  lofMarketPlaceSellersRepositoryV1RegisterNewSellerPost?: Resolver<Maybe<ResolversTypes['LofMarketPlaceDataSellerInterface']>, ParentType, ContextType, Partial<MutationlofMarketPlaceSellersRepositoryV1RegisterNewSellerPostArgs>>;
  lofProductReviewsReviewRepositoryV1ReplyByGuestPost?: Resolver<Maybe<ResolversTypes['LofProductReviewsDataReplyInterface']>, ParentType, ContextType, Partial<MutationlofProductReviewsReviewRepositoryV1ReplyByGuestPostArgs>>;
  lofmobileSocialLoginV1AppleLoginPost?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationlofmobileSocialLoginV1AppleLoginPostArgs>>;
  lofmobileSocialLoginV1LoginPost?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationlofmobileSocialLoginV1LoginPostArgs>>;
  lofmpSplitCartGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationlofmpSplitCartGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPostArgs, 'cartId' | 'sellerUrl'>>;
  lofmpSplitCartQuoteRepositoryV1InitSplitOrderGuestPost?: Resolver<Maybe<ResolversTypes['LofmpSplitCartDataQuoteInterface']>, ParentType, ContextType, RequireFields<MutationlofmpSplitCartQuoteRepositoryV1InitSplitOrderGuestPostArgs, 'cartId' | 'sellerUrl'>>;
  lofmpSplitCartQuoteRepositoryV1RemoveSplitCartGuestDelete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationlofmpSplitCartQuoteRepositoryV1RemoveSplitCartGuestDeleteArgs, 'cartId'>>;
  quoteGuestBillingAddressManagementV1AssignPost?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationquoteGuestBillingAddressManagementV1AssignPostArgs, 'cartId'>>;
  quoteGuestCartItemRepositoryV1DeleteByIdDelete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationquoteGuestCartItemRepositoryV1DeleteByIdDeleteArgs, 'cartId' | 'itemId'>>;
  quoteGuestCartItemRepositoryV1SavePost?: Resolver<Maybe<ResolversTypes['QuoteDataCartItemInterface']>, ParentType, ContextType, RequireFields<MutationquoteGuestCartItemRepositoryV1SavePostArgs, 'cartId'>>;
  quoteGuestCartItemRepositoryV1SavePut?: Resolver<Maybe<ResolversTypes['QuoteDataCartItemInterface']>, ParentType, ContextType, RequireFields<MutationquoteGuestCartItemRepositoryV1SavePutArgs, 'cartId' | 'itemId'>>;
  quoteGuestCartManagementV1CreateEmptyCartPost?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quoteGuestCartManagementV1PlaceOrderPut?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationquoteGuestCartManagementV1PlaceOrderPutArgs, 'cartId'>>;
  quoteGuestCartTotalManagementV1CollectTotalsPut?: Resolver<Maybe<ResolversTypes['QuoteDataTotalsInterface']>, ParentType, ContextType, RequireFields<MutationquoteGuestCartTotalManagementV1CollectTotalsPutArgs, 'cartId'>>;
  quoteGuestCouponManagementV1RemoveDelete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationquoteGuestCouponManagementV1RemoveDeleteArgs, 'cartId'>>;
  quoteGuestCouponManagementV1SetPut?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationquoteGuestCouponManagementV1SetPutArgs, 'cartId' | 'couponCode'>>;
  quoteGuestPaymentMethodManagementV1SetPut?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationquoteGuestPaymentMethodManagementV1SetPutArgs, 'cartId'>>;
  quoteGuestShipmentEstimationV1EstimateByExtendedAddressPost?: Resolver<Maybe<Array<Maybe<ResolversTypes['QuoteDataShippingMethodInterface']>>>, ParentType, ContextType, RequireFields<MutationquoteGuestShipmentEstimationV1EstimateByExtendedAddressPostArgs, 'cartId'>>;
  smileElasticsuiteTrackerCustomerTrackingServiceV1HitPost?: Resolver<Maybe<ResolversTypes['ErrorResponse']>, ParentType, ContextType, Partial<MutationsmileElasticsuiteTrackerCustomerTrackingServiceV1HitPostArgs>>;
  vertexAddressValidationAddressManagementV1GetValidAddressPost?: Resolver<Maybe<ResolversTypes['QuoteDataAddressInterface']>, ParentType, ContextType, Partial<MutationvertexAddressValidationAddressManagementV1GetValidAddressPostArgs>>;
  vertexAddressValidationApiGuestCleanseAddressV1CleanseAddressPost?: Resolver<Maybe<ResolversTypes['VertexAddressValidationApiDataCleansedAddressInterface']>, ParentType, ContextType, Partial<MutationvertexAddressValidationApiGuestCleanseAddressV1CleanseAddressPostArgs>>;
  vesTrackorderTrackOrderRepositoryV1SendPost?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationvesTrackorderTrackOrderRepositoryV1SendPostArgs>>;
  vesTrackorderTrackOrderRepositoryV1TrackPost?: Resolver<Maybe<ResolversTypes['SalesDataOrderInterface']>, ParentType, ContextType, Partial<MutationvesTrackorderTrackOrderRepositoryV1TrackPostArgs>>;
}>;

export type ErrorResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ErrorResponse'] = ResolversParentTypes['ErrorResponse']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['ErrorErrorsItem']>>>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parameters?: Resolver<Maybe<Array<Maybe<ResolversTypes['ErrorParametersItem']>>>, ParentType, ContextType>;
  trace?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ErrorErrorsItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ErrorErrorsItem'] = ResolversParentTypes['ErrorErrorsItem']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parameters?: Resolver<Maybe<Array<Maybe<ResolversTypes['ErrorParametersItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ErrorParametersItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ErrorParametersItem'] = ResolversParentTypes['ErrorParametersItem']> = ResolversObject<{
  fieldName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resources?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EcomteckAdvancedContactDataRequestInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EcomteckAdvancedContactDataRequestInterface'] = ResolversParentTypes['EcomteckAdvancedContactDataRequestInterface']> = ResolversObject<{
  closed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  info?: Resolver<Array<Maybe<ResolversTypes['EcomteckAdvancedContactDataInfoInterface']>>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EcomteckAdvancedContactDataInfoInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EcomteckAdvancedContactDataInfoInterface'] = ResolversParentTypes['EcomteckAdvancedContactDataInfoInterface']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LofmpSplitCartDataQuoteInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LofmpSplitCartDataQuoteInterface'] = ResolversParentTypes['LofmpSplitCartDataQuoteInterface']> = ResolversObject<{
  entityId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isOrdered?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quoteId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sellerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VertexAddressValidationApiDataCleansedAddressInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VertexAddressValidationApiDataCleansedAddressInterface'] = ResolversParentTypes['VertexAddressValidationApiDataCleansedAddressInterface']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postalCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  regionId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  regionName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  streetAddress?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  subDivision?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SalesDataOrderInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SalesDataOrderInterface'] = ResolversParentTypes['SalesDataOrderInterface']> = ResolversObject<{
  adjustmentNegative?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  adjustmentPositive?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  appliedRuleIds?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  baseAdjustmentNegative?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseAdjustmentPositive?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseCurrencyCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  baseDiscountAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseDiscountCanceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseDiscountInvoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseDiscountRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseDiscountTaxCompensationAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseDiscountTaxCompensationInvoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseDiscountTaxCompensationRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseGrandTotal?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  baseShippingAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseShippingCanceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseShippingDiscountAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseShippingDiscountTaxCompensationAmnt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseShippingInclTax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseShippingInvoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseShippingRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseShippingTaxAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseShippingTaxRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseSubtotal?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseSubtotalCanceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseSubtotalInclTax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseSubtotalInvoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseSubtotalRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseTaxAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseTaxCanceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseTaxInvoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseTaxRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseToGlobalRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseToOrderRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseTotalCanceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseTotalDue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseTotalInvoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseTotalInvoicedCost?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseTotalOfflineRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseTotalOnlineRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseTotalPaid?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseTotalQtyOrdered?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseTotalRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  billingAddress?: Resolver<Maybe<ResolversTypes['SalesDataOrderAddressInterface']>, ParentType, ContextType>;
  billingAddressId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  canShipPartially?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  canShipPartiallyItem?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  couponCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerDob?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerEmail2?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customerFirstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerGender?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  customerGroupId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  customerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  customerIsGuest?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  customerLastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerMiddlename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerNote?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerNoteNotify?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  customerPrefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerSuffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerTaxvat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discountAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  discountCanceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  discountDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discountInvoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  discountRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  discountTaxCompensationAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  discountTaxCompensationInvoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  discountTaxCompensationRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  editIncrement?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  emailSent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  entityId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  extCustomerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extOrderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['SalesDataOrderExtensionInterface']>, ParentType, ContextType>;
  forcedShipmentWithInvoice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  globalCurrencyCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  grandTotal?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  holdBeforeState?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  holdBeforeStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  incrementId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isVirtual?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['SalesDataOrderItemInterface']>>, ParentType, ContextType>;
  orderCurrencyCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  originalIncrementId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payment?: Resolver<Maybe<ResolversTypes['SalesDataOrderPaymentInterface']>, ParentType, ContextType>;
  paymentAuthExpiration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  paymentAuthorizationAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  protectCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quoteAddressId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  quoteId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  relationChildId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relationChildRealId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relationParentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relationParentRealId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  remoteIp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shippingAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shippingCanceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shippingDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shippingDiscountAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shippingDiscountTaxCompensationAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shippingInclTax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shippingInvoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shippingRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shippingTaxAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shippingTaxRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statusHistories?: Resolver<Maybe<Array<Maybe<ResolversTypes['SalesDataOrderStatusHistoryInterface']>>>, ParentType, ContextType>;
  storeCurrencyCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storeId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  storeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storeToBaseRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  storeToOrderRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  subtotal?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  subtotalCanceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  subtotalInclTax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  subtotalInvoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  subtotalRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  taxAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  taxCanceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  taxInvoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  taxRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalCanceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalDue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalInvoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalItemCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalOfflineRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalOnlineRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalPaid?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalQtyOrdered?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  xForwardedFor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SalesDataOrderAddressInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SalesDataOrderAddressInterface'] = ResolversParentTypes['SalesDataOrderAddressInterface']> = ResolversObject<{
  addressType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customerAddressId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  customerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entityId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['SalesDataOrderAddressExtensionInterface']>, ParentType, ContextType>;
  fax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  middlename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  postcode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  regionCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  regionId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  street?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  telephone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vatId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vatIsValid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  vatRequestDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vatRequestId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vatRequestSuccess?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SalesDataOrderAddressExtensionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SalesDataOrderAddressExtensionInterface'] = ResolversParentTypes['SalesDataOrderAddressExtensionInterface']> = ResolversObject<{
  vertexVatCountryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SalesDataOrderExtensionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SalesDataOrderExtensionInterface'] = ResolversParentTypes['SalesDataOrderExtensionInterface']> = ResolversObject<{
  amazonOrderReferenceId?: Resolver<Maybe<ResolversTypes['AmazonPaymentDataOrderLinkInterface']>, ParentType, ContextType>;
  appliedTaxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaxDataOrderTaxDetailsAppliedTaxInterface']>>>, ParentType, ContextType>;
  convertingFromQuote?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  giftMessage2?: Resolver<Maybe<ResolversTypes['GiftMessageDataMessageInterface']>, ParentType, ContextType>;
  itemAppliedTaxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaxDataOrderTaxDetailsItemInterface']>>>, ParentType, ContextType>;
  notificationSent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  orderPlacePoint?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paymentAdditionalInfo?: Resolver<Maybe<Array<Maybe<ResolversTypes['PaymentDataPaymentAdditionalInfoInterface']>>>, ParentType, ContextType>;
  pickupLocationCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sendNotification?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  shippingAssignments?: Resolver<Maybe<Array<Maybe<ResolversTypes['SalesDataShippingAssignmentInterface']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AmazonPaymentDataOrderLinkInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AmazonPaymentDataOrderLinkInterface'] = ResolversParentTypes['AmazonPaymentDataOrderLinkInterface']> = ResolversObject<{
  amazonOrderReferenceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaxDataOrderTaxDetailsAppliedTaxInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TaxDataOrderTaxDetailsAppliedTaxInterface'] = ResolversParentTypes['TaxDataOrderTaxDetailsAppliedTaxInterface']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  baseAmount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['TaxDataOrderTaxDetailsAppliedTaxExtensionInterface']>, ParentType, ContextType>;
  percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaxDataOrderTaxDetailsAppliedTaxExtensionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TaxDataOrderTaxDetailsAppliedTaxExtensionInterface'] = ResolversParentTypes['TaxDataOrderTaxDetailsAppliedTaxExtensionInterface']> = ResolversObject<{
  rates?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaxDataAppliedTaxRateInterface']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaxDataAppliedTaxRateInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TaxDataAppliedTaxRateInterface'] = ResolversParentTypes['TaxDataAppliedTaxRateInterface']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaxDataOrderTaxDetailsItemInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TaxDataOrderTaxDetailsItemInterface'] = ResolversParentTypes['TaxDataOrderTaxDetailsItemInterface']> = ResolversObject<{
  appliedTaxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaxDataOrderTaxDetailsAppliedTaxInterface']>>>, ParentType, ContextType>;
  associatedItemId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  itemId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaymentDataPaymentAdditionalInfoInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PaymentDataPaymentAdditionalInfoInterface'] = ResolversParentTypes['PaymentDataPaymentAdditionalInfoInterface']> = ResolversObject<{
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SalesDataShippingAssignmentInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SalesDataShippingAssignmentInterface'] = ResolversParentTypes['SalesDataShippingAssignmentInterface']> = ResolversObject<{
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['SalesDataOrderItemInterface']>>, ParentType, ContextType>;
  shipping?: Resolver<ResolversTypes['SalesDataShippingInterface'], ParentType, ContextType>;
  stockId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SalesDataOrderItemInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SalesDataOrderItemInterface'] = ResolversParentTypes['SalesDataOrderItemInterface']> = ResolversObject<{
  additionalData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  amountRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  appliedRuleIds?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  baseAmountRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseCost?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseDiscountAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseDiscountInvoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseDiscountRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseDiscountTaxCompensationAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseDiscountTaxCompensationInvoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseDiscountTaxCompensationRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseOriginalPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  basePrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  basePriceInclTax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseRowInvoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseRowTotal?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseRowTotalInclTax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseTaxAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseTaxBeforeDiscount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseTaxInvoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseTaxRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseWeeeTaxAppliedAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseWeeeTaxAppliedRowAmnt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseWeeeTaxDisposition?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseWeeeTaxRowDisposition?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discountAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  discountInvoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  discountPercent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  discountRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  discountTaxCompensationAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  discountTaxCompensationCanceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  discountTaxCompensationInvoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  discountTaxCompensationRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  eventId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  extOrderItemId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['SalesDataOrderItemExtensionInterface']>, ParentType, ContextType>;
  freeShipping?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gwBasePrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gwBasePriceInvoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gwBasePriceRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gwBaseTaxAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gwBaseTaxAmountInvoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gwBaseTaxAmountRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gwId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gwPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gwPriceInvoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gwPriceRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gwTaxAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gwTaxAmountInvoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gwTaxAmountRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  isQtyDecimal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isVirtual?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  itemId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lockedDoInvoice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lockedDoShip?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  noDiscount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  orderId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  originalPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  parentItem?: Resolver<Maybe<ResolversTypes['SalesDataOrderItemInterface']>, ParentType, ContextType>;
  parentItemId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceInclTax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  productOption?: Resolver<Maybe<ResolversTypes['CatalogDataProductOptionInterface']>, ParentType, ContextType>;
  productType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  qtyBackordered?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  qtyCanceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  qtyInvoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  qtyOrdered?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  qtyRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  qtyReturned?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  qtyShipped?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quoteItemId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rowInvoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rowTotal?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rowTotalInclTax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rowWeight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  storeId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  taxAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  taxBeforeDiscount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  taxCanceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  taxInvoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  taxPercent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  taxRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weeeTaxApplied?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weeeTaxAppliedAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  weeeTaxAppliedRowAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  weeeTaxDisposition?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  weeeTaxRowDisposition?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SalesDataOrderItemExtensionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SalesDataOrderItemExtensionInterface'] = ResolversParentTypes['SalesDataOrderItemExtensionInterface']> = ResolversObject<{
  giftMessage3?: Resolver<Maybe<ResolversTypes['GiftMessageDataMessageInterface']>, ParentType, ContextType>;
  invoiceTextCodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  taxCodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  vertexCommodityCode?: Resolver<Maybe<ResolversTypes['VertexTaxDataCommodityCodeInterface']>, ParentType, ContextType>;
  vertexTaxCodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogDataProductOptionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogDataProductOptionInterface'] = ResolversParentTypes['CatalogDataProductOptionInterface']> = ResolversObject<{
  extensionAttributes?: Resolver<Maybe<ResolversTypes['CatalogDataProductOptionExtensionInterface']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogDataProductOptionExtensionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogDataProductOptionExtensionInterface'] = ResolversParentTypes['CatalogDataProductOptionExtensionInterface']> = ResolversObject<{
  bundleOptions?: Resolver<Maybe<Array<Maybe<ResolversTypes['BundleDataBundleOptionInterface']>>>, ParentType, ContextType>;
  configurableItemOptions?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConfigurableProductDataConfigurableItemOptionValueInterface']>>>, ParentType, ContextType>;
  customOptions?: Resolver<Maybe<Array<Maybe<ResolversTypes['CatalogDataCustomOptionInterface']>>>, ParentType, ContextType>;
  downloadableOption?: Resolver<Maybe<ResolversTypes['DownloadableDataDownloadableOptionInterface']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SalesDataShippingInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SalesDataShippingInterface'] = ResolversParentTypes['SalesDataShippingInterface']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['SalesDataOrderAddressInterface']>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  method?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['SalesDataTotalInterface']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SalesDataTotalInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SalesDataTotalInterface'] = ResolversParentTypes['SalesDataTotalInterface']> = ResolversObject<{
  baseShippingAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseShippingCanceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseShippingDiscountAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseShippingDiscountTaxCompensationAmnt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseShippingInclTax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseShippingInvoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseShippingRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseShippingTaxAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseShippingTaxRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  shippingAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shippingCanceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shippingDiscountAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shippingDiscountTaxCompensationAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shippingInclTax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shippingInvoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shippingRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shippingTaxAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shippingTaxRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SalesDataOrderPaymentInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SalesDataOrderPaymentInterface'] = ResolversParentTypes['SalesDataOrderPaymentInterface']> = ResolversObject<{
  accountStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  additionalData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  additionalInformation?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  addressStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  amountAuthorized?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amountCanceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amountOrdered?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amountPaid?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amountRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  anetTransMethod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  baseAmountAuthorized?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseAmountCanceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseAmountOrdered?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseAmountPaid?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseAmountPaidOnline?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseAmountRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseAmountRefundedOnline?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseShippingAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseShippingCaptured?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  baseShippingRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ccApproval?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ccAvsStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ccCidStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ccDebugRequestBody?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ccDebugResponseBody?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ccDebugResponseSerialized?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ccExpMonth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ccExpYear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ccLast4?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ccNumberEnc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ccOwner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ccSecureVerify?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ccSsIssue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ccSsStartMonth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ccSsStartYear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ccStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ccStatusDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ccTransId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ccType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  echeckAccountName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  echeckAccountType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  echeckBankName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  echeckRoutingNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  echeckType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entityId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['SalesDataOrderPaymentExtensionInterface']>, ParentType, ContextType>;
  lastTransId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  method?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  poNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  protectionEligibility?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quotePaymentId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  shippingAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shippingCaptured?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shippingRefunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SalesDataOrderPaymentExtensionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SalesDataOrderPaymentExtensionInterface'] = ResolversParentTypes['SalesDataOrderPaymentExtensionInterface']> = ResolversObject<{
  notificationMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vaultPaymentToken?: Resolver<Maybe<ResolversTypes['VaultDataPaymentTokenInterface']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VaultDataPaymentTokenInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VaultDataPaymentTokenInterface'] = ResolversParentTypes['VaultDataPaymentTokenInterface']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  entityId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  expiresAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gatewayToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isVisible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  paymentMethodCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  publicHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenDetails?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SalesDataOrderStatusHistoryInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SalesDataOrderStatusHistoryInterface'] = ResolversParentTypes['SalesDataOrderStatusHistoryInterface']> = ResolversObject<{
  comment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entityId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  entityName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extensionAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  isCustomerNotified?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isVisibleOnFront?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  parentId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type newCatalogDataProductSearchResultsInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['newCatalogDataProductSearchResultsInterface'] = ResolversParentTypes['newCatalogDataProductSearchResultsInterface']> = ResolversObject<{
  totalCount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  CatalogDataProductRenderSearchResultsInterface?: CatalogDataProductRenderSearchResultsInterfaceResolvers<ContextType>;
  CatalogDataProductRenderInterface?: CatalogDataProductRenderInterfaceResolvers<ContextType>;
  CatalogDataProductRenderButtonInterface?: CatalogDataProductRenderButtonInterfaceResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  CatalogDataProductRenderExtensionInterface?: CatalogDataProductRenderExtensionInterfaceResolvers<ContextType>;
  CatalogDataProductRenderImageInterface?: CatalogDataProductRenderImageInterfaceResolvers<ContextType>;
  CatalogDataProductRenderPriceInfoInterface?: CatalogDataProductRenderPriceInfoInterfaceResolvers<ContextType>;
  CatalogDataProductRenderPriceInfoExtensionInterface?: CatalogDataProductRenderPriceInfoExtensionInterfaceResolvers<ContextType>;
  MsrpDataProductRenderMsrpPriceInfoInterface?: MsrpDataProductRenderMsrpPriceInfoInterfaceResolvers<ContextType>;
  WeeeDataProductRenderWeeeAdjustmentAttributeInterface?: WeeeDataProductRenderWeeeAdjustmentAttributeInterfaceResolvers<ContextType>;
  CatalogDataProductRenderFormattedPriceInfoInterface?: CatalogDataProductRenderFormattedPriceInfoInterfaceResolvers<ContextType>;
  CatalogDataProductSearchResultsInterface?: CatalogDataProductSearchResultsInterfaceResolvers<ContextType>;
  CatalogDataProductInterface?: CatalogDataProductInterfaceResolvers<ContextType>;
  FrameworkAttributeInterface?: FrameworkAttributeInterfaceResolvers<ContextType>;
  CatalogDataProductExtensionInterface?: CatalogDataProductExtensionInterfaceResolvers<ContextType>;
  BundleDataOptionInterface?: BundleDataOptionInterfaceResolvers<ContextType>;
  BundleDataLinkInterface?: BundleDataLinkInterfaceResolvers<ContextType>;
  CatalogDataCategoryLinkInterface?: CatalogDataCategoryLinkInterfaceResolvers<ContextType>;
  ConfigurableProductDataOptionInterface?: ConfigurableProductDataOptionInterfaceResolvers<ContextType>;
  ConfigurableProductDataOptionValueInterface?: ConfigurableProductDataOptionValueInterfaceResolvers<ContextType>;
  DownloadableDataLinkInterface?: DownloadableDataLinkInterfaceResolvers<ContextType>;
  DownloadableDataFileContentInterface?: DownloadableDataFileContentInterfaceResolvers<ContextType>;
  DownloadableDataSampleInterface?: DownloadableDataSampleInterfaceResolvers<ContextType>;
  CatalogInventoryDataStockItemInterface?: CatalogInventoryDataStockItemInterfaceResolvers<ContextType>;
  VertexTaxDataCommodityCodeInterface?: VertexTaxDataCommodityCodeInterfaceResolvers<ContextType>;
  CatalogDataProductAttributeMediaGalleryEntryInterface?: CatalogDataProductAttributeMediaGalleryEntryInterfaceResolvers<ContextType>;
  FrameworkDataImageContentInterface?: FrameworkDataImageContentInterfaceResolvers<ContextType>;
  CatalogDataProductAttributeMediaGalleryEntryExtensionInterface?: CatalogDataProductAttributeMediaGalleryEntryExtensionInterfaceResolvers<ContextType>;
  FrameworkDataVideoContentInterface?: FrameworkDataVideoContentInterfaceResolvers<ContextType>;
  CatalogDataProductCustomOptionInterface?: CatalogDataProductCustomOptionInterfaceResolvers<ContextType>;
  CatalogDataProductCustomOptionExtensionInterface?: CatalogDataProductCustomOptionExtensionInterfaceResolvers<ContextType>;
  CatalogDataProductCustomOptionValuesInterface?: CatalogDataProductCustomOptionValuesInterfaceResolvers<ContextType>;
  CatalogDataProductLinkInterface?: CatalogDataProductLinkInterfaceResolvers<ContextType>;
  CatalogDataProductLinkExtensionInterface?: CatalogDataProductLinkExtensionInterfaceResolvers<ContextType>;
  CatalogDataProductTierPriceInterface?: CatalogDataProductTierPriceInterfaceResolvers<ContextType>;
  CatalogDataProductTierPriceExtensionInterface?: CatalogDataProductTierPriceExtensionInterfaceResolvers<ContextType>;
  FrameworkSearchCriteriaInterface?: FrameworkSearchCriteriaInterfaceResolvers<ContextType>;
  FrameworkSearchFilterGroup?: FrameworkSearchFilterGroupResolvers<ContextType>;
  FrameworkFilter?: FrameworkFilterResolvers<ContextType>;
  FrameworkSortOrder?: FrameworkSortOrderResolvers<ContextType>;
  CheckoutDataPaymentDetailsInterface?: CheckoutDataPaymentDetailsInterfaceResolvers<ContextType>;
  QuoteDataPaymentMethodInterface?: QuoteDataPaymentMethodInterfaceResolvers<ContextType>;
  QuoteDataTotalsInterface?: QuoteDataTotalsInterfaceResolvers<ContextType>;
  QuoteDataTotalsExtensionInterface?: QuoteDataTotalsExtensionInterfaceResolvers<ContextType>;
  QuoteDataTotalsItemInterface?: QuoteDataTotalsItemInterfaceResolvers<ContextType>;
  QuoteDataTotalSegmentInterface?: QuoteDataTotalSegmentInterfaceResolvers<ContextType>;
  QuoteDataTotalSegmentExtensionInterface?: QuoteDataTotalSegmentExtensionInterfaceResolvers<ContextType>;
  TaxDataGrandTotalDetailsInterface?: TaxDataGrandTotalDetailsInterfaceResolvers<ContextType>;
  TaxDataGrandTotalRatesInterface?: TaxDataGrandTotalRatesInterfaceResolvers<ContextType>;
  DirectoryDataCountryInformationInterface?: DirectoryDataCountryInformationInterfaceResolvers<ContextType>;
  DirectoryDataRegionInformationInterface?: DirectoryDataRegionInformationInterfaceResolvers<ContextType>;
  DirectoryDataCurrencyInformationInterface?: DirectoryDataCurrencyInformationInterfaceResolvers<ContextType>;
  DirectoryDataExchangeRateInterface?: DirectoryDataExchangeRateInterfaceResolvers<ContextType>;
  FrameworkSearchSearchResultInterface?: FrameworkSearchSearchResultInterfaceResolvers<ContextType>;
  FrameworkSearchAggregationInterface?: FrameworkSearchAggregationInterfaceResolvers<ContextType>;
  FrameworkSearchBucketInterface?: FrameworkSearchBucketInterfaceResolvers<ContextType>;
  FrameworkSearchAggregationValueInterface?: FrameworkSearchAggregationValueInterfaceResolvers<ContextType>;
  FrameworkSearchDocumentInterface?: FrameworkSearchDocumentInterfaceResolvers<ContextType>;
  FrameworkSearchSearchCriteriaInterface?: FrameworkSearchSearchCriteriaInterfaceResolvers<ContextType>;
  GiftMessageDataMessageInterface?: GiftMessageDataMessageInterfaceResolvers<ContextType>;
  GiftMessageDataMessageExtensionInterface?: GiftMessageDataMessageExtensionInterfaceResolvers<ContextType>;
  InventoryInStorePickupApiDataSearchResultInterface?: InventoryInStorePickupApiDataSearchResultInterfaceResolvers<ContextType>;
  InventoryInStorePickupApiDataPickupLocationInterface?: InventoryInStorePickupApiDataPickupLocationInterfaceResolvers<ContextType>;
  InventoryInStorePickupApiDataSearchRequestInterface?: InventoryInStorePickupApiDataSearchRequestInterfaceResolvers<ContextType>;
  InventoryInStorePickupApiDataSearchRequestAreaInterface?: InventoryInStorePickupApiDataSearchRequestAreaInterfaceResolvers<ContextType>;
  InventoryInStorePickupApiDataSearchRequestExtensionInterface?: InventoryInStorePickupApiDataSearchRequestExtensionInterfaceResolvers<ContextType>;
  InventoryInStorePickupApiDataSearchRequestProductInfoInterface?: InventoryInStorePickupApiDataSearchRequestProductInfoInterfaceResolvers<ContextType>;
  InventoryInStorePickupApiDataSearchRequestFiltersInterface?: InventoryInStorePickupApiDataSearchRequestFiltersInterfaceResolvers<ContextType>;
  InventoryInStorePickupApiDataSearchRequestFilterInterface?: InventoryInStorePickupApiDataSearchRequestFilterInterfaceResolvers<ContextType>;
  LofAutosearchDataSearchResultInterface?: LofAutosearchDataSearchResultInterfaceResolvers<ContextType>;
  LofAutosearchDataItemInterface?: LofAutosearchDataItemInterfaceResolvers<ContextType>;
  LofBannerSliderDataBannerInterface?: LofBannerSliderDataBannerInterfaceResolvers<ContextType>;
  LofBannerSliderDataResourceMapInterface?: LofBannerSliderDataResourceMapInterfaceResolvers<ContextType>;
  LofBannerSliderDataBannerSearchResultInterface?: LofBannerSliderDataBannerSearchResultInterfaceResolvers<ContextType>;
  LofBannerSliderDataSliderInterface?: LofBannerSliderDataSliderInterfaceResolvers<ContextType>;
  LofBannerSliderDataSliderSearchResultInterface?: LofBannerSliderDataSliderSearchResultInterfaceResolvers<ContextType>;
  LofChatWootDataChatwootInterface?: LofChatWootDataChatwootInterfaceResolvers<ContextType>;
  LofChatWootDataChatwootSearchResultsInterface?: LofChatWootDataChatwootSearchResultsInterfaceResolvers<ContextType>;
  LofFormbuilderDataFormbuilderDesignInterface?: LofFormbuilderDataFormbuilderDesignInterfaceResolvers<ContextType>;
  LofFormbuilderDataFieldDesignInterface?: LofFormbuilderDataFieldDesignInterfaceResolvers<ContextType>;
  LofFormbuilderDataFieldOptionInterface?: LofFormbuilderDataFieldOptionInterfaceResolvers<ContextType>;
  LofFormbuilderDataFormbuilderInterface?: LofFormbuilderDataFormbuilderInterfaceResolvers<ContextType>;
  LofMarketPlaceDataGroupSearchResultsInterface?: LofMarketPlaceDataGroupSearchResultsInterfaceResolvers<ContextType>;
  LofMarketPlaceDataGroupInterface?: LofMarketPlaceDataGroupInterfaceResolvers<ContextType>;
  LofMarketPlaceDataRatingInterface?: LofMarketPlaceDataRatingInterfaceResolvers<ContextType>;
  LofMarketPlaceDataRatingSearchResultsInterface?: LofMarketPlaceDataRatingSearchResultsInterfaceResolvers<ContextType>;
  LofMarketPlaceDataReviewSearchResultsInterface?: LofMarketPlaceDataReviewSearchResultsInterfaceResolvers<ContextType>;
  LofMarketPlaceDataReviewInterface?: LofMarketPlaceDataReviewInterfaceResolvers<ContextType>;
  LofMarketPlaceDataSellerInterface?: LofMarketPlaceDataSellerInterfaceResolvers<ContextType>;
  LofMarketPlaceDataSellerProductSearchResultsInterface?: LofMarketPlaceDataSellerProductSearchResultsInterfaceResolvers<ContextType>;
  LofMarketPlaceDataProductInterface?: LofMarketPlaceDataProductInterfaceResolvers<ContextType>;
  LofMarketPlaceDataSummaryRatingInterface?: LofMarketPlaceDataSummaryRatingInterfaceResolvers<ContextType>;
  LofMarketPlaceDataSellerVacationInterface?: LofMarketPlaceDataSellerVacationInterfaceResolvers<ContextType>;
  LofMarketPlaceDataSellersSearchResultsInterface?: LofMarketPlaceDataSellersSearchResultsInterfaceResolvers<ContextType>;
  LofMobileDataMobileNavSidebarInterface?: LofMobileDataMobileNavSidebarInterfaceResolvers<ContextType>;
  LofProductReviewsDataReviewDataInterface?: LofProductReviewsDataReviewDataInterfaceResolvers<ContextType>;
  LofProductReviewsDataDetailedSummaryInterface?: LofProductReviewsDataDetailedSummaryInterfaceResolvers<ContextType>;
  LofProductReviewsDataReviewInterface?: LofProductReviewsDataReviewInterfaceResolvers<ContextType>;
  LofProductReviewsDataReplyInterface?: LofProductReviewsDataReplyInterfaceResolvers<ContextType>;
  LofProductReviewsDataCustomizeInterface?: LofProductReviewsDataCustomizeInterfaceResolvers<ContextType>;
  LofProductReviewsDataGalleryInterface?: LofProductReviewsDataGalleryInterfaceResolvers<ContextType>;
  LofProductReviewsDataImageInterface?: LofProductReviewsDataImageInterfaceResolvers<ContextType>;
  LofProductReviewsDataRatingVoteInterface?: LofProductReviewsDataRatingVoteInterfaceResolvers<ContextType>;
  LofProductTagsDataTagSearchResultsInterface?: LofProductTagsDataTagSearchResultsInterfaceResolvers<ContextType>;
  LofProductTagsDataTagInterface?: LofProductTagsDataTagInterfaceResolvers<ContextType>;
  LofmpBlogDataCommentSearchResultsInterface?: LofmpBlogDataCommentSearchResultsInterfaceResolvers<ContextType>;
  LofmpBlogDataCommentInterface?: LofmpBlogDataCommentInterfaceResolvers<ContextType>;
  LofmpBlogDataCategoryInterface?: LofmpBlogDataCategoryInterfaceResolvers<ContextType>;
  LofmpBlogDataCategorySearchResultsInterface?: LofmpBlogDataCategorySearchResultsInterfaceResolvers<ContextType>;
  LofmpBlogDataPostInterface?: LofmpBlogDataPostInterfaceResolvers<ContextType>;
  LofmpBlogDataTagInterface?: LofmpBlogDataTagInterfaceResolvers<ContextType>;
  LofmpBlogDataPostSearchResultsInterface?: LofmpBlogDataPostSearchResultsInterfaceResolvers<ContextType>;
  LofmpBlogDataTagSearchResultsInterface?: LofmpBlogDataTagSearchResultsInterfaceResolvers<ContextType>;
  LofmpCouponCodeDataCouponSearchResultsInterface?: LofmpCouponCodeDataCouponSearchResultsInterfaceResolvers<ContextType>;
  LofmpCouponCodeDataCouponInterface?: LofmpCouponCodeDataCouponInterfaceResolvers<ContextType>;
  LofmpRmaDataAddressInterface?: LofmpRmaDataAddressInterfaceResolvers<ContextType>;
  LofmpRmaDataAddressSearchResultsInterface?: LofmpRmaDataAddressSearchResultsInterfaceResolvers<ContextType>;
  LofmpRmaDataConditionInterface?: LofmpRmaDataConditionInterfaceResolvers<ContextType>;
  LofmpRmaDataConditionSearchResultsInterface?: LofmpRmaDataConditionSearchResultsInterfaceResolvers<ContextType>;
  LofmpRmaDataFieldInterface?: LofmpRmaDataFieldInterfaceResolvers<ContextType>;
  LofmpRmaDataFieldSearchResultsInterface?: LofmpRmaDataFieldSearchResultsInterfaceResolvers<ContextType>;
  LofmpRmaDataQuickResponseInterface?: LofmpRmaDataQuickResponseInterfaceResolvers<ContextType>;
  LofmpRmaDataQuickResponseSearchResultsInterface?: LofmpRmaDataQuickResponseSearchResultsInterfaceResolvers<ContextType>;
  LofmpRmaDataReasonInterface?: LofmpRmaDataReasonInterfaceResolvers<ContextType>;
  LofmpRmaDataReasonSearchResultsInterface?: LofmpRmaDataReasonSearchResultsInterfaceResolvers<ContextType>;
  LofmpRmaDataResolutionInterface?: LofmpRmaDataResolutionInterfaceResolvers<ContextType>;
  LofmpRmaDataResolutionSearchResultsInterface?: LofmpRmaDataResolutionSearchResultsInterfaceResolvers<ContextType>;
  LofmpRmaDataStatusInterface?: LofmpRmaDataStatusInterfaceResolvers<ContextType>;
  LofmpRmaDataStatusSearchResultsInterface?: LofmpRmaDataStatusSearchResultsInterfaceResolvers<ContextType>;
  PayPalBraintreeDataAuthDataInterface?: PayPalBraintreeDataAuthDataInterfaceResolvers<ContextType>;
  QuoteDataAddressInterface?: QuoteDataAddressInterfaceResolvers<ContextType>;
  QuoteDataAddressExtensionInterface?: QuoteDataAddressExtensionInterfaceResolvers<ContextType>;
  SalesRuleDataRuleDiscountInterface?: SalesRuleDataRuleDiscountInterfaceResolvers<ContextType>;
  SalesRuleDataDiscountDataInterface?: SalesRuleDataDiscountDataInterfaceResolvers<ContextType>;
  QuoteDataCartInterface?: QuoteDataCartInterfaceResolvers<ContextType>;
  QuoteDataCurrencyInterface?: QuoteDataCurrencyInterfaceResolvers<ContextType>;
  CustomerDataCustomerInterface?: CustomerDataCustomerInterfaceResolvers<ContextType>;
  CustomerDataAddressInterface?: CustomerDataAddressInterfaceResolvers<ContextType>;
  CustomerDataRegionInterface?: CustomerDataRegionInterfaceResolvers<ContextType>;
  CustomerDataCustomerExtensionInterface?: CustomerDataCustomerExtensionInterfaceResolvers<ContextType>;
  LofMarketPermissionsDataSellerCustomerInterface?: LofMarketPermissionsDataSellerCustomerInterfaceResolvers<ContextType>;
  QuoteDataCartExtensionInterface?: QuoteDataCartExtensionInterfaceResolvers<ContextType>;
  AmazonPaymentDataQuoteLinkInterface?: AmazonPaymentDataQuoteLinkInterfaceResolvers<ContextType>;
  QuoteDataShippingAssignmentInterface?: QuoteDataShippingAssignmentInterfaceResolvers<ContextType>;
  QuoteDataCartItemInterface?: QuoteDataCartItemInterfaceResolvers<ContextType>;
  QuoteDataCartItemExtensionInterface?: QuoteDataCartItemExtensionInterfaceResolvers<ContextType>;
  QuoteDataProductOptionInterface?: QuoteDataProductOptionInterfaceResolvers<ContextType>;
  QuoteDataProductOptionExtensionInterface?: QuoteDataProductOptionExtensionInterfaceResolvers<ContextType>;
  BundleDataBundleOptionInterface?: BundleDataBundleOptionInterfaceResolvers<ContextType>;
  ConfigurableProductDataConfigurableItemOptionValueInterface?: ConfigurableProductDataConfigurableItemOptionValueInterfaceResolvers<ContextType>;
  CatalogDataCustomOptionInterface?: CatalogDataCustomOptionInterfaceResolvers<ContextType>;
  CatalogDataCustomOptionExtensionInterface?: CatalogDataCustomOptionExtensionInterfaceResolvers<ContextType>;
  DownloadableDataDownloadableOptionInterface?: DownloadableDataDownloadableOptionInterfaceResolvers<ContextType>;
  GroupedProductDataGroupedOptionsInterface?: GroupedProductDataGroupedOptionsInterfaceResolvers<ContextType>;
  QuoteDataShippingInterface?: QuoteDataShippingInterfaceResolvers<ContextType>;
  QuoteDataPaymentInterface?: QuoteDataPaymentInterfaceResolvers<ContextType>;
  QuoteDataPaymentExtensionInterface?: QuoteDataPaymentExtensionInterfaceResolvers<ContextType>;
  QuoteDataShippingMethodInterface?: QuoteDataShippingMethodInterfaceResolvers<ContextType>;
  LofMobileDataMobileCmsPageInterface?: LofMobileDataMobileCmsPageInterfaceResolvers<ContextType>;
  LofMobileDataMobileSuggestionTagInterface?: LofMobileDataMobileSuggestionTagInterfaceResolvers<ContextType>;
  LofProductTagsDataTagProductLinkInterface?: LofProductTagsDataTagProductLinkInterfaceResolvers<ContextType>;
  VesMegamenuDataItemInterface?: VesMegamenuDataItemInterfaceResolvers<ContextType>;
  VesMegamenuDataItemSearchResultsInterface?: VesMegamenuDataItemSearchResultsInterfaceResolvers<ContextType>;
  VesMegamenuDataMenuFrontendInterface?: VesMegamenuDataMenuFrontendInterfaceResolvers<ContextType>;
  VesMegamenuDataDesignStyleInterface?: VesMegamenuDataDesignStyleInterfaceResolvers<ContextType>;
  VesMegamenuDataMenuTreeItemInterface?: VesMegamenuDataMenuTreeItemInterfaceResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  ErrorResponse?: ErrorResponseResolvers<ContextType>;
  ErrorErrorsItem?: ErrorErrorsItemResolvers<ContextType>;
  ErrorParametersItem?: ErrorParametersItemResolvers<ContextType>;
  EcomteckAdvancedContactDataRequestInterface?: EcomteckAdvancedContactDataRequestInterfaceResolvers<ContextType>;
  EcomteckAdvancedContactDataInfoInterface?: EcomteckAdvancedContactDataInfoInterfaceResolvers<ContextType>;
  LofmpSplitCartDataQuoteInterface?: LofmpSplitCartDataQuoteInterfaceResolvers<ContextType>;
  VertexAddressValidationApiDataCleansedAddressInterface?: VertexAddressValidationApiDataCleansedAddressInterfaceResolvers<ContextType>;
  SalesDataOrderInterface?: SalesDataOrderInterfaceResolvers<ContextType>;
  SalesDataOrderAddressInterface?: SalesDataOrderAddressInterfaceResolvers<ContextType>;
  SalesDataOrderAddressExtensionInterface?: SalesDataOrderAddressExtensionInterfaceResolvers<ContextType>;
  SalesDataOrderExtensionInterface?: SalesDataOrderExtensionInterfaceResolvers<ContextType>;
  AmazonPaymentDataOrderLinkInterface?: AmazonPaymentDataOrderLinkInterfaceResolvers<ContextType>;
  TaxDataOrderTaxDetailsAppliedTaxInterface?: TaxDataOrderTaxDetailsAppliedTaxInterfaceResolvers<ContextType>;
  TaxDataOrderTaxDetailsAppliedTaxExtensionInterface?: TaxDataOrderTaxDetailsAppliedTaxExtensionInterfaceResolvers<ContextType>;
  TaxDataAppliedTaxRateInterface?: TaxDataAppliedTaxRateInterfaceResolvers<ContextType>;
  TaxDataOrderTaxDetailsItemInterface?: TaxDataOrderTaxDetailsItemInterfaceResolvers<ContextType>;
  PaymentDataPaymentAdditionalInfoInterface?: PaymentDataPaymentAdditionalInfoInterfaceResolvers<ContextType>;
  SalesDataShippingAssignmentInterface?: SalesDataShippingAssignmentInterfaceResolvers<ContextType>;
  SalesDataOrderItemInterface?: SalesDataOrderItemInterfaceResolvers<ContextType>;
  SalesDataOrderItemExtensionInterface?: SalesDataOrderItemExtensionInterfaceResolvers<ContextType>;
  CatalogDataProductOptionInterface?: CatalogDataProductOptionInterfaceResolvers<ContextType>;
  CatalogDataProductOptionExtensionInterface?: CatalogDataProductOptionExtensionInterfaceResolvers<ContextType>;
  SalesDataShippingInterface?: SalesDataShippingInterfaceResolvers<ContextType>;
  SalesDataTotalInterface?: SalesDataTotalInterfaceResolvers<ContextType>;
  SalesDataOrderPaymentInterface?: SalesDataOrderPaymentInterfaceResolvers<ContextType>;
  SalesDataOrderPaymentExtensionInterface?: SalesDataOrderPaymentExtensionInterfaceResolvers<ContextType>;
  VaultDataPaymentTokenInterface?: VaultDataPaymentTokenInterfaceResolvers<ContextType>;
  SalesDataOrderStatusHistoryInterface?: SalesDataOrderStatusHistoryInterfaceResolvers<ContextType>;
  newCatalogDataProductSearchResultsInterface?: newCatalogDataProductSearchResultsInterfaceResolvers<ContextType>;
}>;


import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';

import { InContextSdkMethod } from '@graphql-mesh/types';


    export namespace LofGraphqlTypes {
      export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
};

export type Query = {
  /**
   * Collect and retrieve the list of product render info. This info contains raw prices and formatted prices, product name, stock status, store_id, etc.
   *
   * Equivalent to GET /V1/products-render-info
   */
  catalogDataProductRenderSearchResultsInterface?: Maybe<CatalogDataProductRenderSearchResultsInterface>;
  /**
   * Retrieve Featured Products matching the specified criteria.
   *
   * Equivalent to GET /V1/lof-mobile/randomFeaturedProducts
   */
  catalogDataProductSearchResultsInterface?: Maybe<CatalogDataProductSearchResultsInterface>;
  /**
   * Get payment information
   *
   * Equivalent to GET /V1/guest-carts/{cartId}/payment-information
   */
  checkoutDataPaymentDetailsInterface?: Maybe<CheckoutDataPaymentDetailsInterface>;
  /**
   * Get country and region information for the store.
   *
   * Equivalent to GET /V1/directory/countries/{countryId}
   */
  directoryDataCountryInformationInterface?: Maybe<DirectoryDataCountryInformationInterface>;
  /**
   * Get currency information for the store.
   *
   * Equivalent to GET /V1/directory/currency
   */
  directoryDataCurrencyInformationInterface?: Maybe<DirectoryDataCurrencyInformationInterface>;
  /**
   * Make Full Text Search and return found Documents
   *
   * Equivalent to GET /V1/search
   */
  frameworkSearchSearchResultInterface?: Maybe<FrameworkSearchSearchResultInterface>;
  /**
   * Return the gift message for a specified order.
   *
   * Equivalent to GET /V1/guest-carts/{cartId}/gift-message
   */
  giftMessageDataMessageInterface?: Maybe<GiftMessageDataMessageInterface>;
  /**
   * Return the gift message for a specified item in a specified shopping cart.
   *
   * Equivalent to GET /V1/guest-carts/{cartId}/gift-message/{itemId}
   */
  giftMessageGuestItemRepositoryV1GetGet?: Maybe<GiftMessageDataMessageInterface>;
  /**
   * Get Pickup Locations according to the results of filtration by Search Request.
   *
   * Equivalent to GET /V1/inventory/in-store-pickup/pickup-locations/
   */
  inventoryInStorePickupApiDataSearchResultInterface?: Maybe<InventoryInStorePickupApiDataSearchResultInterface>;
  /**
   * Retrieve Search Result Items matching the specified criteria.
   *
   * Equivalent to GET /V1/lof-autosearch/autosearch/{query_text}/{category_id}/{store_id}/{limit_terms}
   */
  lofAutosearchDataSearchResultInterface?: Maybe<LofAutosearchDataSearchResultInterface>;
  /**
   *
   *
   * Equivalent to GET /V1/lof/bannerslider/banner/loadById/{id}
   */
  lofBannerSliderDataBannerInterface?: Maybe<LofBannerSliderDataBannerInterface>;
  /**
   *
   *
   * Equivalent to GET /V1/lof/banner/getList
   */
  lofBannerSliderDataBannerSearchResultInterface?: Maybe<LofBannerSliderDataBannerSearchResultInterface>;
  /**
   *
   *
   * Equivalent to GET /V1/lof/bannerslider/resource_map/loadById/{id}
   */
  lofBannerSliderDataResourceMapInterface?: Maybe<LofBannerSliderDataResourceMapInterface>;
  /**
   *
   *
   * Equivalent to GET /V1/lof/bannerslider/slider/loadById/{id}
   */
  lofBannerSliderDataSliderInterface?: Maybe<LofBannerSliderDataSliderInterface>;
  /**
   *
   *
   * Equivalent to GET /V1/lof/bannerslider/getList
   */
  lofBannerSliderDataSliderSearchResultInterface?: Maybe<LofBannerSliderDataSliderSearchResultInterface>;
  /**
   * Retrieve chatwoot
   *
   * Equivalent to GET /V1/lof-chatwoot/chatwoot/{chatwootId}
   */
  lofChatWootDataChatwootInterface?: Maybe<LofChatWootDataChatwootInterface>;
  /**
   * Retrieve chatwoot matching the specified criteria.
   *
   * Equivalent to GET /V1/lof-chatwoot/chatwoot/search
   */
  lofChatWootDataChatwootSearchResultsInterface?: Maybe<LofChatWootDataChatwootSearchResultsInterface>;
  /**
   * GET Form form data with design fields by ID, identifier, customer_group_id, stores_id
   *
   * Equivalent to GET /V1/lof-formbuilder/getForm/{formId}
   */
  lofFormbuilderDataFormbuilderDesignInterface?: Maybe<LofFormbuilderDataFormbuilderDesignInterface>;
  /**
   * Retrieve Seller Group matching the specified criteria.
   *
   * Equivalent to GET /V1/seller/groups
   */
  lofMarketPlaceDataGroupSearchResultsInterface?: Maybe<LofMarketPlaceDataGroupSearchResultsInterface>;
  /**
   * Retrieve Seller Ratings matching the specified criteria.
   *
   * Equivalent to GET /V1/seller/ratings/{ratingId}
   */
  lofMarketPlaceDataRatingInterface?: Maybe<LofMarketPlaceDataRatingInterface>;
  /**
   * Retrieve Seller Review matching the specified criteria.
   *
   * Equivalent to GET /V1/seller/{sellerUrl}/ratings
   */
  lofMarketPlaceDataRatingSearchResultsInterface?: Maybe<LofMarketPlaceDataRatingSearchResultsInterface>;
  /**
   * Retrieve Seller Review matching the specified criteria.
   *
   * Equivalent to GET /V1/seller/{sellerUrl}/reviews
   */
  lofMarketPlaceDataReviewSearchResultsInterface?: Maybe<LofMarketPlaceDataReviewSearchResultsInterface>;
  /**
   * get seller by url key
   *
   * Equivalent to GET /V1/seller/{sellerUrl}
   */
  lofMarketPlaceDataSellerInterface?: Maybe<LofMarketPlaceDataSellerInterface>;
  /**
   * Retrieve seller matching the specified criteria.
   *
   * Equivalent to GET /V1/seller/products
   */
  lofMarketPlaceDataSellerProductSearchResultsInterface?: Maybe<LofMarketPlaceDataSellerProductSearchResultsInterface>;
  /**
   * GET seller vacation - the url key of seller. ex: sellerA
   *
   * Equivalent to GET /V1/seller/{sellerUrl}/vacation
   */
  lofMarketPlaceDataSellerVacationInterface?: Maybe<LofMarketPlaceDataSellerVacationInterface>;
  /**
   *
   *
   * Equivalent to GET /V1/seller/search
   */
  lofMarketPlaceDataSellersSearchResultsInterface?: Maybe<LofMarketPlaceDataSellersSearchResultsInterface>;
  /**
   * Retrieve Seller Review matching the specified criteria.
   *
   * Equivalent to GET /V1/seller/{sellerUrl}/summaryRatings
   */
  lofMarketPlaceDataSummaryRatingInterface?: Maybe<LofMarketPlaceDataSummaryRatingInterface>;
  /**
   * GET seller product by seller url key
   *
   * Equivalent to GET /V1/seller/products/{sellerUrl}
   */
  lofMarketPlaceSellerProductsRepositoryV1GetListSellersProductGet?: Maybe<CatalogDataProductSearchResultsInterface>;
  /**
   * get seller info by product sku
   *
   * Equivalent to GET /V1/seller/getSellerInfoBySku/{sku}
   */
  lofMarketPlaceSellersFrontendRepositoryV1GetSellerByProductSkuGet?: Maybe<LofMarketPlaceDataSellerInterface>;
  /**
   * Retrieve getNavSidebarContent
   *
   * Equivalent to GET /V1/lof-mobile/navSidebarContent
   */
  lofMobileDataMobileNavSidebarInterface?: Maybe<LofMobileDataMobileNavSidebarInterface>;
  /**
   *
   *
   * Equivalent to GET /V1/products/{sku}/reviews
   */
  lofProductReviewsDataReviewDataInterface?: Maybe<LofProductReviewsDataReviewDataInterface>;
  /**
   * Retrieve Tag matching the specified criteria.
   *
   * Equivalent to GET /V1/lof-producttags/listtags
   */
  lofProductTagsDataTagSearchResultsInterface?: Maybe<LofProductTagsDataTagSearchResultsInterface>;
  /**
   * Retrieve Comment matching the specified criteria.
   *
   * Equivalent to GET /V1/sellerblog/postcomments/{postId}
   */
  lofmpBlogCommentRepositoryV1GetPostCommentListGet?: Maybe<LofmpBlogDataCommentSearchResultsInterface>;
  /**
   * Retrieve post
   *
   * Equivalent to GET /V1/sellerblog/category/view/{categoryId}/{store_id}
   */
  lofmpBlogDataCategoryInterface?: Maybe<LofmpBlogDataCategoryInterface>;
  /**
   * Retrieve Category matching the specified criteria.
   *
   * Equivalent to GET /V1/sellerblog/category/list
   */
  lofmpBlogDataCategorySearchResultsInterface?: Maybe<LofmpBlogDataCategorySearchResultsInterface>;
  /**
   * Retrieve Comment matching the specified criteria.
   *
   * Equivalent to GET /V1/sellerblog/comment/list
   */
  lofmpBlogDataCommentSearchResultsInterface?: Maybe<LofmpBlogDataCommentSearchResultsInterface>;
  /**
   * Retrieve post
   *
   * Equivalent to GET /V1/sellerblog/post/view/{postUrl}/{store_id}
   */
  lofmpBlogDataPostInterface?: Maybe<LofmpBlogDataPostInterface>;
  /**
   * Retrieve Post matching the specified criteria.
   *
   * Equivalent to GET /V1/sellerblog/post/list
   */
  lofmpBlogDataPostSearchResultsInterface?: Maybe<LofmpBlogDataPostSearchResultsInterface>;
  /**
   * Retrieve tag
   *
   * Equivalent to GET /V1/sellerblog/tag/view/{tagAlias}
   */
  lofmpBlogDataTagInterface?: Maybe<LofmpBlogDataTagInterface>;
  /**
   * Retrieve Public Tag matching the specified criteria.
   *
   * Equivalent to GET /V1/sellerblog/tag/list
   */
  lofmpBlogDataTagSearchResultsInterface?: Maybe<LofmpBlogDataTagSearchResultsInterface>;
  /**
   * Retrieve category list publish posts
   *
   * Equivalent to GET /V1/sellerblog/{categoryId}/categoryPosts
   */
  lofmpBlogPostRepositoryV1CategoryPostsGet?: Maybe<LofmpBlogDataPostSearchResultsInterface>;
  /**
   * Retrieve seller list publish posts
   *
   * Equivalent to GET /V1/sellerblog/{sellerUrl}/sellerPosts
   */
  lofmpBlogPostRepositoryV1SellerPostsGet?: Maybe<LofmpBlogDataPostSearchResultsInterface>;
  /**
   * Retrieve tags list publish posts
   *
   * Equivalent to GET /V1/sellerblog/{tag}/tagPosts
   */
  lofmpBlogPostRepositoryV1TagPostsGet?: Maybe<LofmpBlogDataPostSearchResultsInterface>;
  /**
   * Retrieve Public Coupon matching the specified criteria.
   *
   * Equivalent to GET /V1/lof-couponcode/{sellerUrl}/coupons
   */
  lofmpCouponCodeDataCouponSearchResultsInterface?: Maybe<LofmpCouponCodeDataCouponSearchResultsInterface>;
  /**
   * Retrieve best seller Products matching the specified criteria.
   *
   * Equivalent to GET /V1/seller-productlist/{sellerUrl}/bestseller
   */
  lofmpProductlistProductRepositoryV1GetBestsellerProductsGet?: Maybe<CatalogDataProductSearchResultsInterface>;
  /**
   * Retrieve deals Products matching the specified criteria.
   *
   * Equivalent to GET /V1/seller-productlist/{sellerUrl}/deals
   */
  lofmpProductlistProductRepositoryV1GetDealsProductsGet?: Maybe<CatalogDataProductSearchResultsInterface>;
  /**
   * Retrieve featured Products matching the specified criteria.
   *
   * Equivalent to GET /V1/seller-productlist/{sellerUrl}/featured
   */
  lofmpProductlistProductRepositoryV1GetFeaturedProductsGet?: Maybe<CatalogDataProductSearchResultsInterface>;
  /**
   * Retrieve lastest Products matching the specified criteria.
   *
   * Equivalent to GET /V1/seller-productlist/{sellerUrl}/latest
   */
  lofmpProductlistProductRepositoryV1GetLatestProductsGet?: Maybe<CatalogDataProductSearchResultsInterface>;
  /**
   * Retrieve most viewed Products matching the specified criteria.
   *
   * Equivalent to GET /V1/seller-productlist/{sellerUrl}/mostviewed
   */
  lofmpProductlistProductRepositoryV1GetMostViewedProductsGet?: Maybe<CatalogDataProductSearchResultsInterface>;
  /**
   * Retrieve newarrival Products matching the specified criteria.
   *
   * Equivalent to GET /V1/seller-productlist/{sellerUrl}/newarrival
   */
  lofmpProductlistProductRepositoryV1GetNewarrivalProductsGet?: Maybe<CatalogDataProductSearchResultsInterface>;
  /**
   * Retrieve random Products matching the specified criteria.
   *
   * Equivalent to GET /V1/seller-productlist/{sellerUrl}/random
   */
  lofmpProductlistProductRepositoryV1GetRandomProductsGet?: Maybe<CatalogDataProductSearchResultsInterface>;
  /**
   * Retrieve special Products matching the specified criteria.
   *
   * Equivalent to GET /V1/seller-productlist/{sellerUrl}/specials
   */
  lofmpProductlistProductRepositoryV1GetSpecialProductsGet?: Maybe<CatalogDataProductSearchResultsInterface>;
  /**
   * Retrieve top rated Products matching the specified criteria.
   *
   * Equivalent to GET /V1/seller-productlist/{sellerUrl}/toprated
   */
  lofmpProductlistProductRepositoryV1GetTopratedProductsGet?: Maybe<CatalogDataProductSearchResultsInterface>;
  /**
   * Retrieve address
   *
   * Equivalent to GET /V1/lofmp-returns/address/{addressId}
   */
  lofmpRmaDataAddressInterface?: Maybe<LofmpRmaDataAddressInterface>;
  /**
   * Retrieve address matching the specified criteria.
   *
   * Equivalent to GET /V1/lofmp-returns/address
   */
  lofmpRmaDataAddressSearchResultsInterface?: Maybe<LofmpRmaDataAddressSearchResultsInterface>;
  /**
   * Retrieve condition
   *
   * Equivalent to GET /V1/lofmp-returns/condition/{conditionId}
   */
  lofmpRmaDataConditionInterface?: Maybe<LofmpRmaDataConditionInterface>;
  /**
   * Retrieve condition matching the specified criteria.
   *
   * Equivalent to GET /V1/lofmp-returns/condition
   */
  lofmpRmaDataConditionSearchResultsInterface?: Maybe<LofmpRmaDataConditionSearchResultsInterface>;
  /**
   * Retrieve field
   *
   * Equivalent to GET /V1/lofmp-returns/customfield/{fieldId}
   */
  lofmpRmaDataFieldInterface?: Maybe<LofmpRmaDataFieldInterface>;
  /**
   * Retrieve field matching the specified criteria.
   *
   * Equivalent to GET /V1/lofmp-returns/customfield
   */
  lofmpRmaDataFieldSearchResultsInterface?: Maybe<LofmpRmaDataFieldSearchResultsInterface>;
  /**
   * Retrieve QuickResponse
   *
   * Equivalent to GET /V1/lofmp-returns/quickresponse/{quickresponseId}
   */
  lofmpRmaDataQuickResponseInterface?: Maybe<LofmpRmaDataQuickResponseInterface>;
  /**
   * Retrieve QuickResponse matching the specified criteria.
   *
   * Equivalent to GET /V1/lofmp-returns/quickresponse
   */
  lofmpRmaDataQuickResponseSearchResultsInterface?: Maybe<LofmpRmaDataQuickResponseSearchResultsInterface>;
  /**
   * Retrieve reason
   *
   * Equivalent to GET /V1/lofmp-returns/reason/{reasonId}
   */
  lofmpRmaDataReasonInterface?: Maybe<LofmpRmaDataReasonInterface>;
  /**
   * Retrieve reason matching the specified criteria.
   *
   * Equivalent to GET /V1/lofmp-returns/reason
   */
  lofmpRmaDataReasonSearchResultsInterface?: Maybe<LofmpRmaDataReasonSearchResultsInterface>;
  /**
   * Retrieve resolution
   *
   * Equivalent to GET /V1/lofmp-returns/resolution/{resolutionId}
   */
  lofmpRmaDataResolutionInterface?: Maybe<LofmpRmaDataResolutionInterface>;
  /**
   * Retrieve resolution matching the specified criteria.
   *
   * Equivalent to GET /V1/lofmp-returns/resolution
   */
  lofmpRmaDataResolutionSearchResultsInterface?: Maybe<LofmpRmaDataResolutionSearchResultsInterface>;
  /**
   * Retrieve Status
   *
   * Equivalent to GET /V1/lofmp-returns/status/{statusId}
   */
  lofmpRmaDataStatusInterface?: Maybe<LofmpRmaDataStatusInterface>;
  /**
   * Retrieve Status matching the specified criteria.
   *
   * Equivalent to GET /V1/lofmp-returns/status
   */
  lofmpRmaDataStatusSearchResultsInterface?: Maybe<LofmpRmaDataStatusSearchResultsInterface>;
  /**
   * Returns details required to be able to submit a payment with apple pay.
   *
   * Equivalent to GET /V1/applepay/auth
   */
  payPalBraintreeDataAuthDataInterface?: Maybe<PayPalBraintreeDataAuthDataInterface>;
  /**
   * Return the billing address for a specified quote.
   *
   * Equivalent to GET /V1/guest-carts/{cartId}/billing-address
   */
  quoteDataAddressInterface?: Maybe<QuoteDataAddressInterface>;
  /**
   * Enable a guest user to return information for a specified cart.
   *
   * Equivalent to GET /V1/guest-carts/{cartId}
   */
  quoteDataCartInterface?: Maybe<QuoteDataCartInterface>;
  /**
   * Return the payment method for a specified shopping cart.
   *
   * Equivalent to GET /V1/guest-carts/{cartId}/selected-payment-method
   */
  quoteDataPaymentInterface?: Maybe<QuoteDataPaymentInterface>;
  /**
   * Return quote totals data for a specified cart.
   *
   * Equivalent to GET /V1/guest-carts/{cartId}/totals
   */
  quoteDataTotalsInterface?: Maybe<QuoteDataTotalsInterface>;
  /**
   * get list fields for contact form
   *
   * Equivalent to GET /V1/contact/get/fields
   */
  v1ContactGetFields?: Maybe<Scalars['String']>;
  /**
   * Return empty body response
   *
   * Equivalent to GET /V1/cors/check
   */
  v1CorsCheck?: Maybe<Scalars['String']>;
  /**
   * Check if password reset token is valid.
   *
   * Equivalent to GET /V1/customers/{customerId}/password/resetLinkToken/{resetPasswordLinkToken}
   */
  v1CustomerPasswordResetLinkToken?: Maybe<Scalars['Boolean']>;
  /**
   * Get all countries and regions information for the store.
   *
   * Equivalent to GET /V1/directory/countries
   */
  v1DirectoryCountries?: Maybe<Array<Maybe<DirectoryDataCountryInformationInterface>>>;
  /**
   * Return information for a coupon in a specified cart.
   *
   * Equivalent to GET /V1/guest-carts/{cartId}/coupons
   */
  v1GuestCartCoupons?: Maybe<Scalars['String']>;
  /**
   * List items that are assigned to a specified cart.
   *
   * Equivalent to GET /V1/guest-carts/{cartId}/items
   */
  v1GuestCartItems?: Maybe<Array<Maybe<QuoteDataCartItemInterface>>>;
  /**
   * List available payment methods for a specified shopping cart. This call returns an array of objects, but detailed information about each object’s attributes might not be included.  See https://devdocs.magento.com/codelinks/attributes.html#GuestPaymentMethodManagementInterface to determine which call to use to get detailed information about all attributes for an object.
   *
   * Equivalent to GET /V1/guest-carts/{cartId}/payment-methods
   */
  v1GuestCartPaymentMethods?: Maybe<Array<Maybe<QuoteDataPaymentMethodInterface>>>;
  /**
   * List applicable shipping methods for a specified quote.
   *
   * Equivalent to GET /V1/guest-carts/{cartId}/shipping-methods
   */
  v1GuestCartShippingMethods?: Maybe<Array<Maybe<QuoteDataShippingMethodInterface>>>;
  /**
   * GET Form form field by ID, identifier, customer_group_id, stores_id
   *
   * Equivalent to GET /V1/lof-formbuilder/getformfield/{formId}
   */
  v1LofFormbuilderGetformfield?: Maybe<Scalars['String']>;
  /**
   * Retrieve getCmsPages
   *
   * Equivalent to GET /V1/lof-mobile/availableCmsPages/{storeId}
   */
  v1LofMobileAvailableCmsPage?: Maybe<Array<Maybe<LofMobileDataMobileCmsPageInterface>>>;
  /**
   * Retrieve Search Suggestion Tags
   *
   * Equivalent to GET /V1/lof-mobile/searchSuggestionTags/{keyword}/{storeId}
   */
  v1LofMobileSearchSuggestionTag?: Maybe<Array<Maybe<LofMobileDataMobileSuggestionTagInterface>>>;
  /**
   * Get List Product by Identyfier
   *
   * Equivalent to GET /V1/lof-producttags/products/{tagCode}
   */
  v1LofProducttagsProducts?: Maybe<Array<Maybe<LofProductTagsDataTagProductLinkInterface>>>;
  /**
   * get available rating data by rating code
   *
   * Equivalent to GET /V1/reviews/ratings/{storeId}
   */
  v1ReviewsRating?: Maybe<Array<Maybe<LofProductReviewsDataRatingVoteInterface>>>;
  /**
   * Retrieve releated posts
   *
   * Equivalent to GET /V1/sellerblog/post/relatedPosts/{postId}
   */
  v1SellerblogPostRelatedPost?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /**
   * Retrieve releated products
   *
   * Equivalent to GET /V1/sellerblog/post/relatedProducts/{postId}
   */
  v1SellerblogPostRelatedProduct?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /**
   * Retrieve Menu Item
   *
   * Equivalent to GET /V1/ves-megamenuitem/getMenuItem/{menuItemId}/{storeId}
   */
  vesMegamenuDataItemInterface?: Maybe<VesMegamenuDataItemInterface>;
  /**
   * Get Menu Items by Menu ID
   *
   * Equivalent to GET /V1/ves-megamenuitem/getMenuItems/{menuId}/{storeId}
   */
  vesMegamenuDataItemSearchResultsInterface?: Maybe<VesMegamenuDataItemSearchResultsInterface>;
  /**
   * Load megamenu profile by alias.
   *
   * Equivalent to GET /V1/ves-megamenu/getByAlias/{alias}
   */
  vesMegamenuDataMenuFrontendInterface?: Maybe<VesMegamenuDataMenuFrontendInterface>;
};


export type QuerycatalogDataProductRenderSearchResultsInterfaceArgs = {
  currencyCode: Scalars['String'];
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  storeId: Scalars['Int'];
};


export type QuerycatalogDataProductSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerycheckoutDataPaymentDetailsInterfaceArgs = {
  cartId: Scalars['String'];
};


export type QuerydirectoryDataCountryInformationInterfaceArgs = {
  countryId: Scalars['String'];
};


export type QueryframeworkSearchSearchResultInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaRequestName?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerygiftMessageDataMessageInterfaceArgs = {
  cartId: Scalars['String'];
};


export type QuerygiftMessageGuestItemRepositoryV1GetGetArgs = {
  cartId: Scalars['String'];
  itemId: Scalars['Int'];
};


export type QueryinventoryInStorePickupApiDataSearchResultInterfaceArgs = {
  searchRequestAreaRadius?: InputMaybe<Scalars['Int']>;
  searchRequestAreaSearchTerm?: InputMaybe<Scalars['String']>;
  searchRequestCurrentPage?: InputMaybe<Scalars['Int']>;
  searchRequestExtensionAttributesProductsInfo0Sku?: InputMaybe<Scalars['String']>;
  searchRequestFiltersCityConditionType?: InputMaybe<Scalars['String']>;
  searchRequestFiltersCityValue?: InputMaybe<Scalars['String']>;
  searchRequestFiltersCountryConditionType?: InputMaybe<Scalars['String']>;
  searchRequestFiltersCountryValue?: InputMaybe<Scalars['String']>;
  searchRequestFiltersNameConditionType?: InputMaybe<Scalars['String']>;
  searchRequestFiltersNameValue?: InputMaybe<Scalars['String']>;
  searchRequestFiltersPickupLocationCodeConditionType?: InputMaybe<Scalars['String']>;
  searchRequestFiltersPickupLocationCodeValue?: InputMaybe<Scalars['String']>;
  searchRequestFiltersPostcodeConditionType?: InputMaybe<Scalars['String']>;
  searchRequestFiltersPostcodeValue?: InputMaybe<Scalars['String']>;
  searchRequestFiltersRegionConditionType?: InputMaybe<Scalars['String']>;
  searchRequestFiltersRegionIdConditionType?: InputMaybe<Scalars['String']>;
  searchRequestFiltersRegionIdValue?: InputMaybe<Scalars['String']>;
  searchRequestFiltersRegionValue?: InputMaybe<Scalars['String']>;
  searchRequestFiltersStreetConditionType?: InputMaybe<Scalars['String']>;
  searchRequestFiltersStreetValue?: InputMaybe<Scalars['String']>;
  searchRequestPageSize?: InputMaybe<Scalars['Int']>;
  searchRequestScopeCode?: InputMaybe<Scalars['String']>;
  searchRequestScopeType?: InputMaybe<Scalars['String']>;
  searchRequestSort0Direction?: InputMaybe<Scalars['String']>;
  searchRequestSort0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofAutosearchDataSearchResultInterfaceArgs = {
  categoryId: Scalars['String'];
  limitTerms: Scalars['String'];
  queryText: Scalars['String'];
  storeId: Scalars['String'];
};


export type QuerylofBannerSliderDataBannerInterfaceArgs = {
  id: Scalars['Int'];
  loadFromCache?: InputMaybe<Scalars['Boolean']>;
};


export type QuerylofBannerSliderDataBannerSearchResultInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofBannerSliderDataResourceMapInterfaceArgs = {
  id: Scalars['Int'];
  loadFromCache?: InputMaybe<Scalars['Boolean']>;
};


export type QuerylofBannerSliderDataSliderInterfaceArgs = {
  id: Scalars['Int'];
  loadFromCache?: InputMaybe<Scalars['Boolean']>;
  storeId?: InputMaybe<Scalars['Int']>;
};


export type QuerylofBannerSliderDataSliderSearchResultInterfaceArgs = {
  customerGroupId?: InputMaybe<Scalars['Int']>;
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  storeId?: InputMaybe<Scalars['Int']>;
};


export type QuerylofChatWootDataChatwootInterfaceArgs = {
  chatwootId: Scalars['String'];
};


export type QuerylofChatWootDataChatwootSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofFormbuilderDataFormbuilderDesignInterfaceArgs = {
  customerGroupId?: InputMaybe<Scalars['Int']>;
  formId: Scalars['Int'];
  storeId?: InputMaybe<Scalars['Int']>;
};


export type QuerylofMarketPlaceDataGroupSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofMarketPlaceDataRatingInterfaceArgs = {
  ratingId: Scalars['Int'];
};


export type QuerylofMarketPlaceDataRatingSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  sellerUrl: Scalars['String'];
};


export type QuerylofMarketPlaceDataReviewSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  sellerUrl: Scalars['String'];
};


export type QuerylofMarketPlaceDataSellerInterfaceArgs = {
  getProducts?: InputMaybe<Scalars['Boolean']>;
  sellerUrl: Scalars['String'];
  showOtherInfo?: InputMaybe<Scalars['Boolean']>;
};


export type QuerylofMarketPlaceDataSellerProductSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofMarketPlaceDataSellerVacationInterfaceArgs = {
  sellerUrl: Scalars['String'];
};


export type QuerylofMarketPlaceDataSellersSearchResultsInterfaceArgs = {
  getProducts?: InputMaybe<Scalars['Boolean']>;
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  showOtherInfo?: InputMaybe<Scalars['Boolean']>;
};


export type QuerylofMarketPlaceDataSummaryRatingInterfaceArgs = {
  sellerUrl: Scalars['String'];
};


export type QuerylofMarketPlaceSellerProductsRepositoryV1GetListSellersProductGetArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  sellerUrl: Scalars['String'];
};


export type QuerylofMarketPlaceSellersFrontendRepositoryV1GetSellerByProductSkuGetArgs = {
  sku: Scalars['String'];
  storeId?: InputMaybe<Scalars['Int']>;
};


export type QuerylofMobileDataMobileNavSidebarInterfaceArgs = {
  storeId?: InputMaybe<Scalars['Int']>;
};


export type QuerylofProductReviewsDataReviewDataInterfaceArgs = {
  keyword?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sku: Scalars['String'];
  sortBy?: InputMaybe<Scalars['String']>;
};


export type QuerylofProductTagsDataTagSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofmpBlogCommentRepositoryV1GetPostCommentListGetArgs = {
  postId: Scalars['Int'];
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofmpBlogDataCategoryInterfaceArgs = {
  categoryId: Scalars['Int'];
  storeId: Scalars['Int'];
};


export type QuerylofmpBlogDataCategorySearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofmpBlogDataCommentSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofmpBlogDataPostInterfaceArgs = {
  postUrl: Scalars['String'];
  storeId: Scalars['String'];
};


export type QuerylofmpBlogDataPostSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofmpBlogDataTagInterfaceArgs = {
  tagAlias: Scalars['String'];
};


export type QuerylofmpBlogDataTagSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofmpBlogPostRepositoryV1CategoryPostsGetArgs = {
  categoryId: Scalars['Int'];
  criteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  criteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  criteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  criteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  criteriaPageSize?: InputMaybe<Scalars['Int']>;
  criteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  criteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofmpBlogPostRepositoryV1SellerPostsGetArgs = {
  criteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  criteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  criteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  criteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  criteriaPageSize?: InputMaybe<Scalars['Int']>;
  criteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  criteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  sellerUrl: Scalars['String'];
};


export type QuerylofmpBlogPostRepositoryV1TagPostsGetArgs = {
  criteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  criteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  criteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  criteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  criteriaPageSize?: InputMaybe<Scalars['Int']>;
  criteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  criteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  tag: Scalars['String'];
};


export type QuerylofmpCouponCodeDataCouponSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  sellerUrl: Scalars['String'];
};


export type QuerylofmpProductlistProductRepositoryV1GetBestsellerProductsGetArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  sellerUrl: Scalars['String'];
};


export type QuerylofmpProductlistProductRepositoryV1GetDealsProductsGetArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  sellerUrl: Scalars['String'];
};


export type QuerylofmpProductlistProductRepositoryV1GetFeaturedProductsGetArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  sellerUrl: Scalars['String'];
};


export type QuerylofmpProductlistProductRepositoryV1GetLatestProductsGetArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  sellerUrl: Scalars['String'];
};


export type QuerylofmpProductlistProductRepositoryV1GetMostViewedProductsGetArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  sellerUrl: Scalars['String'];
};


export type QuerylofmpProductlistProductRepositoryV1GetNewarrivalProductsGetArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  sellerUrl: Scalars['String'];
};


export type QuerylofmpProductlistProductRepositoryV1GetRandomProductsGetArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  sellerUrl: Scalars['String'];
};


export type QuerylofmpProductlistProductRepositoryV1GetSpecialProductsGetArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  sellerUrl: Scalars['String'];
};


export type QuerylofmpProductlistProductRepositoryV1GetTopratedProductsGetArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
  sellerUrl: Scalars['String'];
};


export type QuerylofmpRmaDataAddressInterfaceArgs = {
  addressId: Scalars['String'];
};


export type QuerylofmpRmaDataAddressSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofmpRmaDataConditionInterfaceArgs = {
  conditionId: Scalars['String'];
};


export type QuerylofmpRmaDataConditionSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofmpRmaDataFieldInterfaceArgs = {
  fieldId: Scalars['String'];
};


export type QuerylofmpRmaDataFieldSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofmpRmaDataQuickResponseInterfaceArgs = {
  quickresponseId: Scalars['String'];
};


export type QuerylofmpRmaDataQuickResponseSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofmpRmaDataReasonInterfaceArgs = {
  reasonId: Scalars['String'];
};


export type QuerylofmpRmaDataReasonSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofmpRmaDataResolutionInterfaceArgs = {
  resolutionId: Scalars['String'];
};


export type QuerylofmpRmaDataResolutionSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QuerylofmpRmaDataStatusInterfaceArgs = {
  statusId: Scalars['String'];
};


export type QuerylofmpRmaDataStatusSearchResultsInterfaceArgs = {
  searchCriteriaCurrentPage?: InputMaybe<Scalars['Int']>;
  searchCriteriaFilterGroups0Filters0ConditionType?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Field?: InputMaybe<Scalars['String']>;
  searchCriteriaFilterGroups0Filters0Value?: InputMaybe<Scalars['String']>;
  searchCriteriaPageSize?: InputMaybe<Scalars['Int']>;
  searchCriteriaSortOrders0Direction?: InputMaybe<Scalars['String']>;
  searchCriteriaSortOrders0Field?: InputMaybe<Scalars['String']>;
};


export type QueryquoteDataAddressInterfaceArgs = {
  cartId: Scalars['String'];
};


export type QueryquoteDataCartInterfaceArgs = {
  cartId: Scalars['String'];
};


export type QueryquoteDataPaymentInterfaceArgs = {
  cartId: Scalars['String'];
};


export type QueryquoteDataTotalsInterfaceArgs = {
  cartId: Scalars['String'];
};


export type Queryv1CustomerPasswordResetLinkTokenArgs = {
  customerId: Scalars['Int'];
  resetPasswordLinkToken: Scalars['String'];
};


export type Queryv1DirectoryCountriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type Queryv1GuestCartCouponsArgs = {
  cartId: Scalars['String'];
};


export type Queryv1GuestCartItemsArgs = {
  cartId: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type Queryv1GuestCartPaymentMethodsArgs = {
  cartId: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type Queryv1GuestCartShippingMethodsArgs = {
  cartId: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type Queryv1LofFormbuilderGetformfieldArgs = {
  customerGroupId?: InputMaybe<Scalars['Int']>;
  formId: Scalars['Int'];
  storeId?: InputMaybe<Scalars['Int']>;
};


export type Queryv1LofMobileAvailableCmsPageArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  storeId: Scalars['Int'];
};


export type Queryv1LofMobileSearchSuggestionTagArgs = {
  keyword: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  storeId: Scalars['String'];
};


export type Queryv1LofProducttagsProductsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  tagCode: Scalars['String'];
};


export type Queryv1ReviewsRatingArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  storeId: Scalars['String'];
};


export type Queryv1SellerblogPostRelatedPostArgs = {
  postId: Scalars['Int'];
};


export type Queryv1SellerblogPostRelatedProductArgs = {
  postId: Scalars['Int'];
};


export type QueryvesMegamenuDataItemInterfaceArgs = {
  menuItemId: Scalars['Int'];
  storeId: Scalars['String'];
};


export type QueryvesMegamenuDataItemSearchResultsInterfaceArgs = {
  menuId: Scalars['Int'];
  storeId: Scalars['String'];
};


export type QueryvesMegamenuDataMenuFrontendInterfaceArgs = {
  alias: Scalars['String'];
  customerGroupId?: InputMaybe<Scalars['Int']>;
  isMobileMenu?: InputMaybe<Scalars['Boolean']>;
  storeCode?: InputMaybe<Scalars['String']>;
};

/** Dto that holds render information about products */
export type CatalogDataProductRenderSearchResultsInterface = {
  /** List of products rendered information */
  items: Array<Maybe<CatalogDataProductRenderInterface>>;
};

/** Represents Data Object which holds enough information to render product This information is put into part as Add To Cart or Add to Compare Data or Price Data */
export type CatalogDataProductRenderInterface = {
  /** Button interface. This interface represents all manner of product buttons: add to cart, add to compare, etc... The buttons describes by this interface should have interaction with backend */
  addToCartButton: CatalogDataProductRenderButtonInterface;
  /** Button interface. This interface represents all manner of product buttons: add to cart, add to compare, etc... The buttons describes by this interface should have interaction with backend */
  addToCompareButton: CatalogDataProductRenderButtonInterface;
  /** Current or desired currency code to product */
  currencyCode: Scalars['String'];
  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRenderInterface */
  extensionAttributes: CatalogDataProductRenderExtensionInterface;
  /** Product identifier */
  id: Scalars['Int'];
  /** Enough information, that needed to render image on front */
  images: Array<Maybe<CatalogDataProductRenderImageInterface>>;
  /** Information about product saleability (In Stock) */
  isSalable: Scalars['String'];
  /** Product name */
  name: Scalars['String'];
  /** Price interface. */
  priceInfo: CatalogDataProductRenderPriceInfoInterface;
  /** Information about current store id or requested store id */
  storeId: Scalars['Int'];
  /** Product type. Such as bundle, grouped, simple, etc... */
  type: Scalars['String'];
  /** Product url */
  url: Scalars['String'];
};

/** Button interface. This interface represents all manner of product buttons: add to cart, add to compare, etc... The buttons describes by this interface should have interaction with backend */
export type CatalogDataProductRenderButtonInterface = {
  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRender\ButtonInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Post data */
  postData: Scalars['String'];
  /** Flag whether a product has options or not */
  requiredOptions: Scalars['Boolean'];
  /** Url, needed to add product to cart */
  url: Scalars['String'];
};

/** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRenderInterface */
export type CatalogDataProductRenderExtensionInterface = {
  ddgBrand?: Maybe<Scalars['String']>;
  ddgCategories?: Maybe<Array<Maybe<Scalars['String']>>>;
  ddgDescription?: Maybe<Scalars['String']>;
  ddgImage?: Maybe<Scalars['String']>;
  ddgSku?: Maybe<Scalars['String']>;
  reviewHtml?: Maybe<Scalars['String']>;
  /** Button interface. This interface represents all manner of product buttons: add to cart, add to compare, etc... The buttons describes by this interface should have interaction with backend */
  wishlistButton?: Maybe<CatalogDataProductRenderButtonInterface>;
};

/** Product Render image interface. Represents physical characteristics of image, that can be used in product listing or product view */
export type CatalogDataProductRenderImageInterface = {
  /** Image code */
  code: Scalars['String'];
  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRender\ImageInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Image height */
  height: Scalars['Float'];
  /** Image label */
  label: Scalars['String'];
  /** Resize height */
  resizedHeight: Scalars['Float'];
  /** Resize width */
  resizedWidth: Scalars['Float'];
  /** Image url */
  url: Scalars['String'];
  /** Image width in px */
  width: Scalars['Float'];
};

/** Price interface. */
export type CatalogDataProductRenderPriceInfoInterface = {
  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRender\PriceInfoInterface */
  extensionAttributes?: Maybe<CatalogDataProductRenderPriceInfoExtensionInterface>;
  /** Final price */
  finalPrice: Scalars['Float'];
  /** Formatted Price interface. Aggregate formatted html with price representations. E.g.: <span class="price">$9.00</span> Consider currency, rounding and html */
  formattedPrices: CatalogDataProductRenderFormattedPriceInfoInterface;
  /** Max price of a product */
  maxPrice: Scalars['Float'];
  /** Max regular price */
  maxRegularPrice: Scalars['Float'];
  /** Minimal price */
  minimalPrice: Scalars['Float'];
  /** Minimal regular price */
  minimalRegularPrice: Scalars['Float'];
  /** Regular price */
  regularPrice: Scalars['Float'];
  /** Special price */
  specialPrice: Scalars['Float'];
};

/** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRender\PriceInfoInterface */
export type CatalogDataProductRenderPriceInfoExtensionInterface = {
  /** Price interface. */
  msrp?: Maybe<MsrpDataProductRenderMsrpPriceInfoInterface>;
  /** Price interface. */
  taxAdjustments?: Maybe<CatalogDataProductRenderPriceInfoInterface>;
  weeeAdjustment?: Maybe<Scalars['String']>;
  weeeAttributes?: Maybe<Array<Maybe<WeeeDataProductRenderWeeeAdjustmentAttributeInterface>>>;
};

/** Price interface. */
export type MsrpDataProductRenderMsrpPriceInfoInterface = {
  explanationMessage: Scalars['String'];
  /** ExtensionInterface class for @see \Magento\Msrp\Api\Data\ProductRender\MsrpPriceInfoInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  isApplicable: Scalars['String'];
  isShownPriceOnGesture: Scalars['String'];
  msrpMessage: Scalars['String'];
  msrpPrice: Scalars['String'];
};

/** List of all weee attributes, their amounts, etc.., that product has */
export type WeeeDataProductRenderWeeeAdjustmentAttributeInterface = {
  /** Weee attribute amount */
  amount: Scalars['String'];
  /** Product amount exclude tax */
  amountExclTax: Scalars['String'];
  /** Weee attribute code */
  attributeCode: Scalars['String'];
  /** ExtensionInterface class for @see \Magento\Weee\Api\Data\ProductRender\WeeeAdjustmentAttributeInterface */
  extensionAttributes: Scalars['JSON'];
  /** Tax which is calculated to fixed product tax attribute */
  taxAmount: Scalars['String'];
  /** Tax amount of weee attribute */
  taxAmountInclTax: Scalars['String'];
};

/** Formatted Price interface. Aggregate formatted html with price representations. E.g.: <span class="price">$9.00</span> Consider currency, rounding and html */
export type CatalogDataProductRenderFormattedPriceInfoInterface = {
  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRender\FormattedPriceInfoInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Html with final price */
  finalPrice: Scalars['String'];
  /** Max price of a product */
  maxPrice: Scalars['String'];
  /** Max regular price */
  maxRegularPrice: Scalars['String'];
  /** The minimal price of the product or variation */
  minimalPrice: Scalars['String'];
  /** Minimal regular price */
  minimalRegularPrice: Scalars['String'];
  /** Price - is price of product without discounts and special price with taxes and fixed product tax */
  regularPrice: Scalars['String'];
  /** Special price */
  specialPrice: Scalars['String'];
};

export type CatalogDataProductSearchResultsInterface = {
  /** Attributes list. */
  items: Array<Maybe<CatalogDataProductInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount?: Maybe<Scalars['String']>;
};

export type CatalogDataProductInterface = {
  /** Attribute set id */
  attributeSetId?: Maybe<Scalars['Int']>;
  /** Created date */
  createdAt?: Maybe<Scalars['String']>;
  /** Custom attributes values. */
  customAttributes?: Maybe<Array<Maybe<FrameworkAttributeInterface>>>;
  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductInterface */
  extensionAttributes?: Maybe<CatalogDataProductExtensionInterface>;
  /** Id */
  id?: Maybe<Scalars['Int']>;
  /** Media gallery entries */
  mediaGalleryEntries?: Maybe<Array<Maybe<CatalogDataProductAttributeMediaGalleryEntryInterface>>>;
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** List of product options */
  options?: Maybe<Array<Maybe<CatalogDataProductCustomOptionInterface>>>;
  /** Price */
  price?: Maybe<Scalars['Float']>;
  /** Product links info */
  productLinks?: Maybe<Array<Maybe<CatalogDataProductLinkInterface>>>;
  /** Sku */
  sku: Scalars['String'];
  /** Status */
  status?: Maybe<Scalars['Int']>;
  /** List of product tier prices */
  tierPrices?: Maybe<Array<Maybe<CatalogDataProductTierPriceInterface>>>;
  /** Type id */
  typeId?: Maybe<Scalars['String']>;
  /** Updated date */
  updatedAt?: Maybe<Scalars['String']>;
  /** Visibility */
  visibility?: Maybe<Scalars['Int']>;
  /** Weight */
  weight?: Maybe<Scalars['Float']>;
};

/** Interface for custom attribute value. */
export type FrameworkAttributeInterface = {
  /** Attribute code */
  attributeCode: Scalars['String'];
  /** Attribute value */
  value: Scalars['String'];
};

/** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductInterface */
export type CatalogDataProductExtensionInterface = {
  bundleProductOptions?: Maybe<Array<Maybe<BundleDataOptionInterface>>>;
  categoryLinks?: Maybe<Array<Maybe<CatalogDataCategoryLinkInterface>>>;
  configurableProductLinks?: Maybe<Array<Maybe<Scalars['Int']>>>;
  configurableProductOptions?: Maybe<Array<Maybe<ConfigurableProductDataOptionInterface>>>;
  downloadableProductLinks?: Maybe<Array<Maybe<DownloadableDataLinkInterface>>>;
  downloadableProductSamples?: Maybe<Array<Maybe<DownloadableDataSampleInterface>>>;
  /** Interface StockItem */
  stockItem?: Maybe<CatalogInventoryDataStockItemInterface>;
  /** Data model representing a Commmodity Code */
  vertexCommodityCode?: Maybe<VertexTaxDataCommodityCodeInterface>;
  websiteIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

/** Interface OptionInterface */
export type BundleDataOptionInterface = {
  /** ExtensionInterface class for @see \Magento\Bundle\Api\Data\OptionInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Option id */
  optionId?: Maybe<Scalars['Int']>;
  /** Option position */
  position?: Maybe<Scalars['Int']>;
  /** Product links */
  productLinks?: Maybe<Array<Maybe<BundleDataLinkInterface>>>;
  /** Is required option */
  required?: Maybe<Scalars['Boolean']>;
  /** Product sku */
  sku?: Maybe<Scalars['String']>;
  /** Option title */
  title?: Maybe<Scalars['String']>;
  /** Input type */
  type?: Maybe<Scalars['String']>;
};

/** Interface LinkInterface */
export type BundleDataLinkInterface = {
  /** Whether quantity could be changed */
  canChangeQuantity?: Maybe<Scalars['Int']>;
  /** ExtensionInterface class for @see \Magento\Bundle\Api\Data\LinkInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** The identifier */
  id?: Maybe<Scalars['String']>;
  /** Is default */
  isDefault: Scalars['Boolean'];
  /** Option id */
  optionId?: Maybe<Scalars['Int']>;
  /** Position */
  position?: Maybe<Scalars['Int']>;
  /** Price */
  price: Scalars['Float'];
  /** Price type */
  priceType: Scalars['Int'];
  /** Qty */
  qty?: Maybe<Scalars['Float']>;
  /** Linked product sku */
  sku?: Maybe<Scalars['String']>;
};

export type CatalogDataCategoryLinkInterface = {
  /** Category id */
  categoryId: Scalars['String'];
  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\CategoryLinkInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  position?: Maybe<Scalars['Int']>;
};

/** Interface OptionInterface */
export type ConfigurableProductDataOptionInterface = {
  attributeId?: Maybe<Scalars['String']>;
  /** ExtensionInterface class for @see \Magento\ConfigurableProduct\Api\Data\OptionInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  isUseDefault?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  values?: Maybe<Array<Maybe<ConfigurableProductDataOptionValueInterface>>>;
};

/** Interface OptionValueInterface */
export type ConfigurableProductDataOptionValueInterface = {
  /** ExtensionInterface class for @see \Magento\ConfigurableProduct\Api\Data\OptionValueInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  valueIndex: Scalars['Int'];
};

export type DownloadableDataLinkInterface = {
  /** ExtensionInterface class for @see \Magento\Downloadable\Api\Data\LinkInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Sample(or link) id */
  id?: Maybe<Scalars['Int']>;
  /** Shareable status */
  isShareable: Scalars['Int'];
  /** relative file path */
  linkFile?: Maybe<Scalars['String']>;
  linkFileContent?: Maybe<DownloadableDataFileContentInterface>;
  linkType: Scalars['String'];
  /** Link url or null when type is 'file' */
  linkUrl?: Maybe<Scalars['String']>;
  /** Of downloads per user */
  numberOfDownloads?: Maybe<Scalars['Int']>;
  /** Price */
  price: Scalars['Float'];
  /** relative file path */
  sampleFile?: Maybe<Scalars['String']>;
  sampleFileContent?: Maybe<DownloadableDataFileContentInterface>;
  sampleType: Scalars['String'];
  /** file URL */
  sampleUrl?: Maybe<Scalars['String']>;
  sortOrder: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
};

export type DownloadableDataFileContentInterface = {
  /** ExtensionInterface class for @see \Magento\Downloadable\Api\Data\File\ContentInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Data (base64 encoded content) */
  fileData: Scalars['String'];
  /** File name */
  name: Scalars['String'];
};

export type DownloadableDataSampleInterface = {
  /** ExtensionInterface class for @see \Magento\Downloadable\Api\Data\SampleInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Sample(or link) id */
  id?: Maybe<Scalars['Int']>;
  /** relative file path */
  sampleFile?: Maybe<Scalars['String']>;
  sampleFileContent?: Maybe<DownloadableDataFileContentInterface>;
  sampleType: Scalars['String'];
  /** file URL */
  sampleUrl?: Maybe<Scalars['String']>;
  /** Order index for sample */
  sortOrder: Scalars['Int'];
  /** Title */
  title: Scalars['String'];
};

/** Interface StockItem */
export type CatalogInventoryDataStockItemInterface = {
  /** Backorders status */
  backorders: Scalars['Int'];
  /** Whether Quantity Increments is enabled */
  enableQtyIncrements: Scalars['Boolean'];
  /** ExtensionInterface class for @see \Magento\CatalogInventory\Api\Data\StockItemInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  isDecimalDivided: Scalars['Boolean'];
  /** Stock Availability */
  isInStock: Scalars['Boolean'];
  isQtyDecimal: Scalars['Boolean'];
  itemId?: Maybe<Scalars['Int']>;
  lowStockDate: Scalars['String'];
  /** Can Manage Stock */
  manageStock: Scalars['Boolean'];
  /** Maximum Qty Allowed in Shopping Cart data wrapper */
  maxSaleQty: Scalars['Float'];
  /** Minimal quantity available for item status in stock */
  minQty: Scalars['Float'];
  /** Minimum Qty Allowed in Shopping Cart or NULL when there is no limitation */
  minSaleQty: Scalars['Float'];
  /** Notify for Quantity Below data wrapper */
  notifyStockQty: Scalars['Float'];
  productId?: Maybe<Scalars['Int']>;
  qty: Scalars['Float'];
  /** Quantity Increments data wrapper */
  qtyIncrements: Scalars['Float'];
  showDefaultNotificationMessage: Scalars['Boolean'];
  /** Stock identifier */
  stockId?: Maybe<Scalars['Int']>;
  stockStatusChangedAuto: Scalars['Int'];
  useConfigBackorders: Scalars['Boolean'];
  useConfigEnableQtyInc: Scalars['Boolean'];
  useConfigManageStock: Scalars['Boolean'];
  useConfigMaxSaleQty: Scalars['Boolean'];
  useConfigMinQty: Scalars['Boolean'];
  useConfigMinSaleQty: Scalars['Int'];
  useConfigNotifyStockQty: Scalars['Boolean'];
  useConfigQtyIncrements: Scalars['Boolean'];
};

/** Data model representing a Commmodity Code */
export type VertexTaxDataCommodityCodeInterface = {
  /** Commodity code */
  code?: Maybe<Scalars['String']>;
  /** Commodity code type */
  type?: Maybe<Scalars['String']>;
};

export type CatalogDataProductAttributeMediaGalleryEntryInterface = {
  /** Image Content data interface */
  content?: Maybe<FrameworkDataImageContentInterface>;
  /** If gallery entry is hidden from product page */
  disabled: Scalars['Boolean'];
  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductAttributeMediaGalleryEntryInterface */
  extensionAttributes?: Maybe<CatalogDataProductAttributeMediaGalleryEntryExtensionInterface>;
  /** File path */
  file?: Maybe<Scalars['String']>;
  /** Gallery entry ID */
  id?: Maybe<Scalars['Int']>;
  /** Gallery entry alternative text */
  label: Scalars['String'];
  /** Media type */
  mediaType: Scalars['String'];
  /** Gallery entry position (sort order) */
  position: Scalars['Int'];
  /** Gallery entry image types (thumbnail, image, small_image etc) */
  types: Array<Maybe<Scalars['String']>>;
};

/** Image Content data interface */
export type FrameworkDataImageContentInterface = {
  /** Media data (base64 encoded content) */
  base64EncodedData: Scalars['String'];
  /** Image name */
  name: Scalars['String'];
  /** MIME type */
  type: Scalars['String'];
};

/** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductAttributeMediaGalleryEntryInterface */
export type CatalogDataProductAttributeMediaGalleryEntryExtensionInterface = {
  /** Video Content data interface */
  videoContent?: Maybe<FrameworkDataVideoContentInterface>;
};

/** Video Content data interface */
export type FrameworkDataVideoContentInterface = {
  /** MIME type */
  mediaType: Scalars['String'];
  /** Video Description */
  videoDescription: Scalars['String'];
  /** Metadata */
  videoMetadata: Scalars['String'];
  /** Provider */
  videoProvider: Scalars['String'];
  /** Title */
  videoTitle: Scalars['String'];
  /** Video URL */
  videoUrl: Scalars['String'];
};

export type CatalogDataProductCustomOptionInterface = {
  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductCustomOptionInterface */
  extensionAttributes?: Maybe<CatalogDataProductCustomOptionExtensionInterface>;
  fileExtension?: Maybe<Scalars['String']>;
  imageSizeX?: Maybe<Scalars['Int']>;
  imageSizeY?: Maybe<Scalars['Int']>;
  /** Is require */
  isRequire: Scalars['Boolean'];
  maxCharacters?: Maybe<Scalars['Int']>;
  /** Option id */
  optionId?: Maybe<Scalars['Int']>;
  /** Price */
  price?: Maybe<Scalars['Float']>;
  /** Price type */
  priceType?: Maybe<Scalars['String']>;
  /** Product SKU */
  productSku: Scalars['String'];
  /** Sku */
  sku?: Maybe<Scalars['String']>;
  /** Sort order */
  sortOrder: Scalars['Int'];
  /** Option title */
  title: Scalars['String'];
  /** Option type */
  type: Scalars['String'];
  values?: Maybe<Array<Maybe<CatalogDataProductCustomOptionValuesInterface>>>;
};

/** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductCustomOptionInterface */
export type CatalogDataProductCustomOptionExtensionInterface = {
  vertexFlexField?: Maybe<Scalars['String']>;
};

export type CatalogDataProductCustomOptionValuesInterface = {
  /** Option type id */
  optionTypeId?: Maybe<Scalars['Int']>;
  /** Price */
  price: Scalars['Float'];
  /** Price type */
  priceType: Scalars['String'];
  /** Sku */
  sku?: Maybe<Scalars['String']>;
  /** Sort order */
  sortOrder: Scalars['Int'];
  /** Option title */
  title: Scalars['String'];
};

export type CatalogDataProductLinkInterface = {
  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductLinkInterface */
  extensionAttributes?: Maybe<CatalogDataProductLinkExtensionInterface>;
  /** Link type */
  linkType: Scalars['String'];
  /** Linked product sku */
  linkedProductSku: Scalars['String'];
  /** Linked product type (simple, virtual, etc) */
  linkedProductType: Scalars['String'];
  /** Linked item position */
  position: Scalars['Int'];
  /** SKU */
  sku: Scalars['String'];
};

/** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductLinkInterface */
export type CatalogDataProductLinkExtensionInterface = {
  qty?: Maybe<Scalars['Float']>;
};

export type CatalogDataProductTierPriceInterface = {
  /** Customer group id */
  customerGroupId: Scalars['Int'];
  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductTierPriceInterface */
  extensionAttributes?: Maybe<CatalogDataProductTierPriceExtensionInterface>;
  /** Tier qty */
  qty: Scalars['Float'];
  /** Price value */
  value: Scalars['Float'];
};

/** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductTierPriceInterface */
export type CatalogDataProductTierPriceExtensionInterface = {
  percentageValue?: Maybe<Scalars['Float']>;
  websiteId?: Maybe<Scalars['Int']>;
};

/** Search criteria interface. */
export type FrameworkSearchCriteriaInterface = {
  /** Current page. */
  currentPage?: Maybe<Scalars['Int']>;
  /** A list of filter groups. */
  filterGroups: Array<Maybe<FrameworkSearchFilterGroup>>;
  /** Page size. */
  pageSize?: Maybe<Scalars['Int']>;
  /** Sort order. */
  sortOrders?: Maybe<Array<Maybe<FrameworkSortOrder>>>;
};

/** Groups two or more filters together using a logical OR */
export type FrameworkSearchFilterGroup = {
  /** A list of filters in this group */
  filters?: Maybe<Array<Maybe<FrameworkFilter>>>;
};

/** Filter which can be used by any methods from service layer. */
export type FrameworkFilter = {
  /** Condition type */
  conditionType?: Maybe<Scalars['String']>;
  /** Field */
  field: Scalars['String'];
  /** Value */
  value: Scalars['String'];
};

/** Data object for sort order. */
export type FrameworkSortOrder = {
  /** Sorting direction. */
  direction: Scalars['String'];
  /** Sorting field. */
  field: Scalars['String'];
};

/** Interface PaymentDetailsInterface */
export type CheckoutDataPaymentDetailsInterface = {
  /** ExtensionInterface class for @see \Magento\Checkout\Api\Data\PaymentDetailsInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  paymentMethods: Array<Maybe<QuoteDataPaymentMethodInterface>>;
  /** Interface TotalsInterface */
  totals: QuoteDataTotalsInterface;
};

/** Interface PaymentMethodInterface */
export type QuoteDataPaymentMethodInterface = {
  /** Payment method code */
  code: Scalars['String'];
  /** Payment method title */
  title: Scalars['String'];
};

/** Interface TotalsInterface */
export type QuoteDataTotalsInterface = {
  /** Base currency code */
  baseCurrencyCode?: Maybe<Scalars['String']>;
  /** Discount amount in base currency */
  baseDiscountAmount?: Maybe<Scalars['Float']>;
  /** Grand total in base currency */
  baseGrandTotal?: Maybe<Scalars['Float']>;
  /** Shipping amount in base currency */
  baseShippingAmount?: Maybe<Scalars['Float']>;
  /** Shipping discount amount in base currency */
  baseShippingDiscountAmount?: Maybe<Scalars['Float']>;
  /** Shipping including tax in base currency */
  baseShippingInclTax?: Maybe<Scalars['Float']>;
  /** Shipping tax amount in base currency */
  baseShippingTaxAmount?: Maybe<Scalars['Float']>;
  /** Subtotal in base currency */
  baseSubtotal?: Maybe<Scalars['Float']>;
  /** Subtotal including tax in base currency */
  baseSubtotalInclTax?: Maybe<Scalars['Float']>;
  /** Subtotal in base currency with applied discount */
  baseSubtotalWithDiscount?: Maybe<Scalars['Float']>;
  /** Tax amount in base currency */
  baseTaxAmount?: Maybe<Scalars['Float']>;
  /** Applied coupon code */
  couponCode?: Maybe<Scalars['String']>;
  /** Discount amount in quote currency */
  discountAmount?: Maybe<Scalars['Float']>;
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalsInterface */
  extensionAttributes?: Maybe<QuoteDataTotalsExtensionInterface>;
  /** Grand total in quote currency */
  grandTotal?: Maybe<Scalars['Float']>;
  /** Totals by items */
  items?: Maybe<Array<Maybe<QuoteDataTotalsItemInterface>>>;
  /** Items qty */
  itemsQty?: Maybe<Scalars['Int']>;
  /** Quote currency code */
  quoteCurrencyCode?: Maybe<Scalars['String']>;
  /** Shipping amount in quote currency */
  shippingAmount?: Maybe<Scalars['Float']>;
  /** Shipping discount amount in quote currency */
  shippingDiscountAmount?: Maybe<Scalars['Float']>;
  /** Shipping including tax in quote currency */
  shippingInclTax?: Maybe<Scalars['Float']>;
  /** Shipping tax amount in quote currency */
  shippingTaxAmount?: Maybe<Scalars['Float']>;
  /** Subtotal in quote currency */
  subtotal?: Maybe<Scalars['Float']>;
  /** Subtotal including tax in quote currency */
  subtotalInclTax?: Maybe<Scalars['Float']>;
  /** Subtotal in quote currency with applied discount */
  subtotalWithDiscount?: Maybe<Scalars['Float']>;
  /** Tax amount in quote currency */
  taxAmount?: Maybe<Scalars['Float']>;
  /** Dynamically calculated totals */
  totalSegments: Array<Maybe<QuoteDataTotalSegmentInterface>>;
  /** Item weee tax applied amount in quote currency. */
  weeeTaxAppliedAmount: Scalars['Float'];
};

/** ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalsInterface */
export type QuoteDataTotalsExtensionInterface = {
  couponLabel?: Maybe<Scalars['String']>;
};

/** Interface TotalsItemInterface */
export type QuoteDataTotalsItemInterface = {
  /** Discount amount in base currency. Otherwise, null. */
  baseDiscountAmount?: Maybe<Scalars['Float']>;
  /** Item price in base currency. */
  basePrice: Scalars['Float'];
  /** Price including tax in base currency. Otherwise, null. */
  basePriceInclTax?: Maybe<Scalars['Float']>;
  /** Row total in base currency. */
  baseRowTotal: Scalars['Float'];
  /** Row total including tax in base currency. Otherwise, null. */
  baseRowTotalInclTax?: Maybe<Scalars['Float']>;
  /** Tax amount in base currency. Otherwise, null. */
  baseTaxAmount?: Maybe<Scalars['Float']>;
  /** Discount amount in quote currency. Otherwise, null. */
  discountAmount?: Maybe<Scalars['Float']>;
  /** Discount percent. Otherwise, null. */
  discountPercent?: Maybe<Scalars['Float']>;
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalsItemInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Item id */
  itemId: Scalars['Int'];
  /** Product name. Otherwise, null. */
  name?: Maybe<Scalars['String']>;
  /** Item price in quote currency. */
  options: Scalars['String'];
  /** Item price in quote currency. */
  price: Scalars['Float'];
  /** Price including tax in quote currency. Otherwise, null. */
  priceInclTax?: Maybe<Scalars['Float']>;
  /** Item quantity. */
  qty: Scalars['Float'];
  /** Row total in quote currency. */
  rowTotal: Scalars['Float'];
  /** Row total including tax in quote currency. Otherwise, null. */
  rowTotalInclTax?: Maybe<Scalars['Float']>;
  /** Row total with discount in quote currency. Otherwise, null. */
  rowTotalWithDiscount?: Maybe<Scalars['Float']>;
  /** Tax amount in quote currency. Otherwise, null. */
  taxAmount?: Maybe<Scalars['Float']>;
  /** Tax percent. Otherwise, null. */
  taxPercent?: Maybe<Scalars['Float']>;
  /** Item weee tax applied in quote currency. */
  weeeTaxApplied: Scalars['String'];
  /** Item weee tax applied amount in quote currency. */
  weeeTaxAppliedAmount: Scalars['Float'];
};

/** Interface TotalsInterface */
export type QuoteDataTotalSegmentInterface = {
  /** Display area code. */
  area?: Maybe<Scalars['String']>;
  /** Code */
  code: Scalars['String'];
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalSegmentInterface */
  extensionAttributes?: Maybe<QuoteDataTotalSegmentExtensionInterface>;
  /** Total title */
  title?: Maybe<Scalars['String']>;
  /** Total value */
  value: Scalars['Float'];
};

/** ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalSegmentInterface */
export type QuoteDataTotalSegmentExtensionInterface = {
  taxGrandtotalDetails?: Maybe<Array<Maybe<TaxDataGrandTotalDetailsInterface>>>;
  vertexTaxCalculationMessages?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Interface GrandTotalDetailsInterface */
export type TaxDataGrandTotalDetailsInterface = {
  /** Tax amount value */
  amount: Scalars['Float'];
  /** Group identifier */
  groupId: Scalars['Int'];
  /** Tax rates info */
  rates: Array<Maybe<TaxDataGrandTotalRatesInterface>>;
};

/** Interface GrandTotalRatesInterface */
export type TaxDataGrandTotalRatesInterface = {
  /** Tax percentage value */
  percent: Scalars['String'];
  /** Rate title */
  title: Scalars['String'];
};

/** Country Information interface. */
export type DirectoryDataCountryInformationInterface = {
  /** The available regions for the store. */
  availableRegions?: Maybe<Array<Maybe<DirectoryDataRegionInformationInterface>>>;
  /** ExtensionInterface class for @see \Magento\Directory\Api\Data\CountryInformationInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** The country full name (in English) for the store. */
  fullNameEnglish: Scalars['String'];
  /** The country full name (in store locale) for the store. */
  fullNameLocale: Scalars['String'];
  /** The country id for the store. */
  id: Scalars['String'];
  /** The country 3 letter abbreviation for the store. */
  threeLetterAbbreviation: Scalars['String'];
  /** The country 2 letter abbreviation for the store. */
  twoLetterAbbreviation: Scalars['String'];
};

/** Region Information interface. */
export type DirectoryDataRegionInformationInterface = {
  /** Region code */
  code: Scalars['String'];
  /** ExtensionInterface class for @see \Magento\Directory\Api\Data\RegionInformationInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Region id */
  id: Scalars['String'];
  /** Region name */
  name: Scalars['String'];
};

/** Currency Information interface. */
export type DirectoryDataCurrencyInformationInterface = {
  /** The list of allowed currency codes for the store. */
  availableCurrencyCodes: Array<Maybe<Scalars['String']>>;
  /** The base currency code for the store. */
  baseCurrencyCode: Scalars['String'];
  /** The currency symbol of the base currency for the store. */
  baseCurrencySymbol: Scalars['String'];
  /** The default display currency code for the store. */
  defaultDisplayCurrencyCode: Scalars['String'];
  /** The currency symbol of the default display currency for the store. */
  defaultDisplayCurrencySymbol: Scalars['String'];
  /** The list of exchange rate information for the store. */
  exchangeRates: Array<Maybe<DirectoryDataExchangeRateInterface>>;
  /** ExtensionInterface class for @see \Magento\Directory\Api\Data\CurrencyInformationInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
};

/** Exchange Rate interface. */
export type DirectoryDataExchangeRateInterface = {
  /** The currency code associated with the exchange rate. */
  currencyTo: Scalars['String'];
  /** ExtensionInterface class for @see \Magento\Directory\Api\Data\ExchangeRateInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** The exchange rate for the associated currency and the store's base currency. */
  rate: Scalars['Float'];
};

/** Interface SearchResultInterface */
export type FrameworkSearchSearchResultInterface = {
  /** Faceted data */
  aggregations: FrameworkSearchAggregationInterface;
  items: Array<Maybe<FrameworkSearchDocumentInterface>>;
  /** Interface SearchCriteriaInterface */
  searchCriteria: FrameworkSearchSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

/** Faceted data */
export type FrameworkSearchAggregationInterface = {
  /** Document field names */
  bucketNames: Array<Maybe<Scalars['String']>>;
  /** All Document fields */
  buckets: Array<Maybe<FrameworkSearchBucketInterface>>;
};

/** Facet Bucket */
export type FrameworkSearchBucketInterface = {
  /** Field name */
  name: Scalars['String'];
  /** Field values */
  values: Array<Maybe<FrameworkSearchAggregationValueInterface>>;
};

/** Interface \Magento\Framework\Api\Search\AggregationValueInterface */
export type FrameworkSearchAggregationValueInterface = {
  /** Metrics */
  metrics: Array<Maybe<Scalars['String']>>;
  /** Aggregation */
  value: Scalars['String'];
};

/** Interface \Magento\Framework\Api\Search\DocumentInterface */
export type FrameworkSearchDocumentInterface = {
  /** Custom attributes values. */
  customAttributes?: Maybe<Array<Maybe<FrameworkAttributeInterface>>>;
  id: Scalars['Int'];
};

/** Interface SearchCriteriaInterface */
export type FrameworkSearchSearchCriteriaInterface = {
  /** Current page. */
  currentPage?: Maybe<Scalars['Int']>;
  /** A list of filter groups. */
  filterGroups: Array<Maybe<FrameworkSearchFilterGroup>>;
  /** Page size. */
  pageSize?: Maybe<Scalars['Int']>;
  requestName: Scalars['String'];
  /** Sort order. */
  sortOrders?: Maybe<Array<Maybe<FrameworkSortOrder>>>;
};

/** Interface MessageInterface */
export type GiftMessageDataMessageInterface = {
  /** Customer ID. Otherwise, null. */
  customerId?: Maybe<Scalars['Int']>;
  /** ExtensionInterface class for @see \Magento\GiftMessage\Api\Data\MessageInterface */
  extensionAttributes?: Maybe<GiftMessageDataMessageExtensionInterface>;
  /** Gift message ID. Otherwise, null. */
  giftMessageId?: Maybe<Scalars['Int']>;
  /** Message text. */
  message: Scalars['String'];
  /** Recipient name. */
  recipient: Scalars['String'];
  /** Sender name. */
  sender: Scalars['String'];
};

/** ExtensionInterface class for @see \Magento\GiftMessage\Api\Data\MessageInterface */
export type GiftMessageDataMessageExtensionInterface = {
  entityId?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
};

/** Search results for providing pickup locations. */
export type InventoryInStorePickupApiDataSearchResultInterface = {
  /** Items list. */
  items: Array<Maybe<InventoryInStorePickupApiDataPickupLocationInterface>>;
  /** Endpoint used to search Pickup Locations by different parameters: - by attribute filters fields @see \Magento\InventoryInStorePickupApi\Api\Data\SearchRequest\FiltersInterface - by distance to the address @see \Magento\InventoryInStorePickupApi\Api\Data\SearchRequest\AreaInterface Also, endpoint supports paging and sort orders. */
  searchRequest: InventoryInStorePickupApiDataSearchRequestInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

/** Represents sources projection on In-Store Pickup context. Realisation must follow immutable DTO concept. Partial immutability done according to restriction of current Extension Attributes implementation. */
export type InventoryInStorePickupApiDataPickupLocationInterface = {
  /** Pickup Location city. */
  city?: Maybe<Scalars['String']>;
  /** Pickup Location contact name. */
  contactName?: Maybe<Scalars['String']>;
  /** Pickup Location country ID. */
  countryId?: Maybe<Scalars['String']>;
  /** Pickup Location description. */
  description?: Maybe<Scalars['String']>;
  /** Pickup Location contact email. */
  email?: Maybe<Scalars['String']>;
  /** ExtensionInterface class for @see \Magento\InventoryInStorePickupApi\Api\Data\PickupLocationInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Fax contact info. */
  fax?: Maybe<Scalars['String']>;
  /** Pickup Location latitude. */
  latitude?: Maybe<Scalars['Float']>;
  /** Pickup Location longitude. */
  longitude?: Maybe<Scalars['Float']>;
  /** Pickup Location name. */
  name?: Maybe<Scalars['String']>;
  /** Pickup Location phone. */
  phone?: Maybe<Scalars['String']>;
  /** Source code of Pickup Location. */
  pickupLocationCode: Scalars['String'];
  /** Pickup Location postcode. */
  postcode?: Maybe<Scalars['String']>;
  /** Pickup Location region. */
  region?: Maybe<Scalars['String']>;
  /** Pickup Location region ID. */
  regionId?: Maybe<Scalars['Int']>;
  /** Pickup Location street. */
  street?: Maybe<Scalars['String']>;
};

/** Endpoint used to search Pickup Locations by different parameters: - by attribute filters fields @see \Magento\InventoryInStorePickupApi\Api\Data\SearchRequest\FiltersInterface - by distance to the address @see \Magento\InventoryInStorePickupApi\Api\Data\SearchRequest\AreaInterface Also, endpoint supports paging and sort orders. */
export type InventoryInStorePickupApiDataSearchRequestInterface = {
  /** Filter by Distance to the Address. Pickup Locations will be filtered by distance according to the geo-position of the entered address. Required fields for the address are country and one of the field: region or city or postcode. */
  area?: Maybe<InventoryInStorePickupApiDataSearchRequestAreaInterface>;
  /** Current page. */
  currentPage: Scalars['Int'];
  /** ExtensionInterface class for @see \Magento\InventoryInStorePickupApi\Api\Data\SearchRequestInterface */
  extensionAttributes?: Maybe<InventoryInStorePickupApiDataSearchRequestExtensionInterface>;
  /** Filter to filter by Fields. Each field may be filtered with different condition type. Supported condition types restricted by @see \Magento\Framework\Api\SearchCriteriaInterface */
  filters?: Maybe<InventoryInStorePickupApiDataSearchRequestFiltersInterface>;
  /** Page size. */
  pageSize?: Maybe<Scalars['Int']>;
  /** Sales Channel code. */
  scopeCode: Scalars['String'];
  /** Sales Channel Type. */
  scopeType: Scalars['String'];
  /** Sort Order. */
  sort?: Maybe<Array<Maybe<FrameworkSortOrder>>>;
};

/** Filter by Distance to the Address. Pickup Locations will be filtered by distance according to the geo-position of the entered address. Required fields for the address are country and one of the field: region or city or postcode. */
export type InventoryInStorePickupApiDataSearchRequestAreaInterface = {
  /** Search radius in KM. */
  radius: Scalars['Int'];
  /** Search term string. */
  searchTerm: Scalars['String'];
};

/** ExtensionInterface class for @see \Magento\InventoryInStorePickupApi\Api\Data\SearchRequestInterface */
export type InventoryInStorePickupApiDataSearchRequestExtensionInterface = {
  productsInfo?: Maybe<Array<Maybe<InventoryInStorePickupApiDataSearchRequestProductInfoInterface>>>;
};

/** Product Info Data Transfer Object. */
export type InventoryInStorePickupApiDataSearchRequestProductInfoInterface = {
  /** ExtensionInterface class for @see \Magento\InventoryInStorePickupApi\Api\Data\SearchRequest\ProductInfoInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Product SKU. */
  sku: Scalars['String'];
};

/** Filter to filter by Fields. Each field may be filtered with different condition type. Supported condition types restricted by @see \Magento\Framework\Api\SearchCriteriaInterface */
export type InventoryInStorePickupApiDataSearchRequestFiltersInterface = {
  /** Filter for Pickup Location search. */
  city?: Maybe<InventoryInStorePickupApiDataSearchRequestFilterInterface>;
  /** Filter for Pickup Location search. */
  country?: Maybe<InventoryInStorePickupApiDataSearchRequestFilterInterface>;
  /** Filter for Pickup Location search. */
  name?: Maybe<InventoryInStorePickupApiDataSearchRequestFilterInterface>;
  /** Filter for Pickup Location search. */
  pickupLocationCode?: Maybe<InventoryInStorePickupApiDataSearchRequestFilterInterface>;
  /** Filter for Pickup Location search. */
  postcode?: Maybe<InventoryInStorePickupApiDataSearchRequestFilterInterface>;
  /** Filter for Pickup Location search. */
  region?: Maybe<InventoryInStorePickupApiDataSearchRequestFilterInterface>;
  /** Filter for Pickup Location search. */
  regionId?: Maybe<InventoryInStorePickupApiDataSearchRequestFilterInterface>;
  /** Filter for Pickup Location search. */
  street?: Maybe<InventoryInStorePickupApiDataSearchRequestFilterInterface>;
};

/** Filter for Pickup Location search. */
export type InventoryInStorePickupApiDataSearchRequestFilterInterface = {
  /** Condition Type. */
  conditionType: Scalars['String'];
  /** Value. */
  value: Scalars['String'];
};

export type LofAutosearchDataSearchResultInterface = {
  item: LofAutosearchDataItemInterface;
};

export type LofAutosearchDataItemInterface = {
  /** Blog posts */
  blogPosts?: Maybe<Scalars['String']>;
  /** Product total */
  blogTotal: Scalars['Int'];
  /** Product total */
  brandTotal: Scalars['Int'];
  /** Brands */
  brands?: Maybe<Scalars['String']>;
  /** Categories */
  category?: Maybe<Scalars['String']>;
  /** Catalog Category total */
  categoryTotal: Scalars['Int'];
  /** Cms page */
  cmsPage?: Maybe<Scalars['String']>;
  /** Product total */
  cmsTotal: Scalars['Int'];
  /** Faq */
  faq?: Maybe<Scalars['String']>;
  /** Faq total */
  faqTotal: Scalars['Int'];
  /** Products */
  products?: Maybe<Scalars['String']>;
  /** Suggested */
  suggested?: Maybe<Scalars['String']>;
  /** Product total */
  total: Scalars['Int'];
};

export type LofBannerSliderDataBannerInterface = {
  altText: Scalars['String'];
  createdAt: Scalars['String'];
  entityId: Scalars['Int'];
  isEnabled: Scalars['Int'];
  isFeatured: Scalars['Int'];
  link: Scalars['String'];
  proCatId: Scalars['Int'];
  resourceMap?: Maybe<LofBannerSliderDataResourceMapInterface>;
  resourceMapId: Scalars['Int'];
  resourcePath?: Maybe<Scalars['String']>;
  resourceType?: Maybe<Scalars['String']>;
  showSubTitle: Scalars['Int'];
  sliderId: Scalars['String'];
  sortOrder: Scalars['Int'];
  storeId: Scalars['String'];
  subTitle: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type LofBannerSliderDataResourceMapInterface = {
  createdAt: Scalars['String'];
  entityId: Scalars['Int'];
  maxWidth?: Maybe<Scalars['Int']>;
  minWidth?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type LofBannerSliderDataBannerSearchResultInterface = {
  items: Array<Maybe<LofBannerSliderDataBannerInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofBannerSliderDataSliderInterface = {
  banners: Array<Maybe<LofBannerSliderDataBannerInterface>>;
  createdAt: Scalars['String'];
  customerGroupId?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['String']>;
  entityId: Scalars['Int'];
  isEnabled: Scalars['Int'];
  isFeatured: Scalars['Int'];
  isShowTitle: Scalars['Int'];
  startDate?: Maybe<Scalars['String']>;
  storeId?: Maybe<Scalars['Int']>;
  tags: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type LofBannerSliderDataSliderSearchResultInterface = {
  items: Array<Maybe<LofBannerSliderDataSliderInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofChatWootDataChatwootInterface = {
  /** Agent_availability */
  agentAvailability?: Maybe<Scalars['Int']>;
  /** Agent_away_message */
  agentAwayMessage?: Maybe<Scalars['String']>;
  /** Agent_id */
  agentId?: Maybe<Scalars['Int']>;
  /** Agent_name */
  agentName?: Maybe<Scalars['String']>;
  /** Channel_id */
  channelId?: Maybe<Scalars['Int']>;
  /** Channel_name */
  channelName?: Maybe<Scalars['String']>;
  /** Channel_type */
  channelType?: Maybe<Scalars['String']>;
  /** Chatwoot_id */
  chatwootId?: Maybe<Scalars['Int']>;
  /** Created_at */
  createdAt?: Maybe<Scalars['String']>;
  /** Seller_id */
  sellerId?: Maybe<Scalars['Int']>;
  /** Team_id */
  teamId?: Maybe<Scalars['Int']>;
  /** Team_name */
  teamName?: Maybe<Scalars['String']>;
  /** Updated_at */
  updatedAt?: Maybe<Scalars['String']>;
  /** Website_token */
  websiteToken?: Maybe<Scalars['String']>;
  /** Welcome_tagline */
  welcomeTagline?: Maybe<Scalars['String']>;
  /** Welcome_title */
  welcomeTitle?: Maybe<Scalars['String']>;
  /** Widget_color */
  widgetColor?: Maybe<Scalars['String']>;
};

export type LofChatWootDataChatwootSearchResultsInterface = {
  /** Chatwoot list. */
  items: Array<Maybe<LofChatWootDataChatwootInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofFormbuilderDataFormbuilderDesignInterface = {
  /** List design fields */
  fields: Array<Maybe<LofFormbuilderDataFieldDesignInterface>>;
  form: LofFormbuilderDataFormbuilderInterface;
};

export type LofFormbuilderDataFieldDesignInterface = {
  /** Cid */
  cid: Scalars['String'];
  /** Color_label */
  colorLabel?: Maybe<Scalars['String']>;
  /** Color_text */
  colorText?: Maybe<Scalars['String']>;
  /** Field_id */
  fieldId: Scalars['String'];
  /** Field_options */
  fieldOptions: Scalars['String'];
  /** Field_size */
  fieldSize?: Maybe<Scalars['String']>;
  /** Field_type */
  fieldType?: Maybe<Scalars['String']>;
  /** Fieldcol */
  fieldcol: Scalars['Int'];
  /** Font_size */
  fontSize?: Maybe<Scalars['String']>;
  /** Font_weight */
  fontWeight?: Maybe<Scalars['String']>;
  /** Include_blank_option */
  includeBlankOption?: Maybe<Scalars['String']>;
  /** Inline_css */
  inlineCss?: Maybe<Scalars['String']>;
  /** Label */
  label?: Maybe<Scalars['String']>;
  /** Options */
  options?: Maybe<Array<Maybe<LofFormbuilderDataFieldOptionInterface>>>;
  /** Required */
  required: Scalars['Boolean'];
  /** Validation */
  validation?: Maybe<Scalars['String']>;
  /** Wrappercol */
  wrappercol: Scalars['Int'];
};

export type LofFormbuilderDataFieldOptionInterface = {
  /** Checked */
  checked?: Maybe<Scalars['Boolean']>;
  /** Label */
  label?: Maybe<Scalars['String']>;
};

export type LofFormbuilderDataFormbuilderInterface = {
  /** After_form_content */
  afterFormContent: Scalars['String'];
  /** Before_form_content */
  beforeFormContent: Scalars['String'];
  /** Creation_time */
  creationTime: Scalars['String'];
  /** Custom_template */
  customTemplate?: Maybe<Scalars['String']>;
  /** Customergroups */
  customerGroups?: Maybe<Scalars['String']>;
  /** Design */
  design: Scalars['String'];
  /** Design_fields */
  designFields?: Maybe<Array<Maybe<LofFormbuilderDataFieldDesignInterface>>>;
  /** Email_receive */
  emailReceive: Scalars['String'];
  /** Email_template */
  emailTemplate: Scalars['String'];
  /** Enable_tracklink */
  enableTracklink?: Maybe<Scalars['Int']>;
  /** ID */
  formId?: Maybe<Scalars['Int']>;
  /** Identifier */
  identifier: Scalars['String'];
  /** Input_hover_color */
  inputHoverColor?: Maybe<Scalars['String']>;
  /** Meta_description */
  metaDescription?: Maybe<Scalars['String']>;
  /** Meta_keywords */
  metaKeywords?: Maybe<Scalars['String']>;
  /** Page_layout */
  pageLayout: Scalars['String'];
  /** Page_title */
  pageTitle: Scalars['String'];
  /** Redirect_link */
  redirectLink: Scalars['String'];
  /** Sender_email_field */
  senderEmailField?: Maybe<Scalars['String']>;
  /** Sender_name_field */
  senderNameField?: Maybe<Scalars['String']>;
  /** Show_captcha */
  showCaptcha: Scalars['Int'];
  /** Show_toplink */
  showToplink: Scalars['Int'];
  /** Status */
  status: Scalars['Int'];
  /** Submit_background_color */
  submitBackgroundColor?: Maybe<Scalars['String']>;
  /** Submit_button_text */
  submitButtonText: Scalars['String'];
  /** Submit_hover_color */
  submitHoverColor?: Maybe<Scalars['String']>;
  /** Submit_text_color */
  submitTextColor?: Maybe<Scalars['String']>;
  /** Success_message */
  successMessage: Scalars['String'];
  /** Tags */
  tags?: Maybe<Scalars['String']>;
  /** Thanks_email_template */
  thanksEmailTemplate: Scalars['String'];
  /** Thankyou_email_template */
  thankyouEmailTemplate?: Maybe<Scalars['String']>;
  /** Thankyou_field */
  thankyouField?: Maybe<Scalars['String']>;
  /** Form title */
  title: Scalars['String'];
  /** Update_time */
  updateTime: Scalars['String'];
};

export type LofMarketPlaceDataGroupSearchResultsInterface = {
  /** Seller group list. */
  items: Array<Maybe<LofMarketPlaceDataGroupInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofMarketPlaceDataGroupInterface = {
  /** Can_add_product */
  canAddProduct?: Maybe<Scalars['Int']>;
  /** Can_use_message */
  canUseMessage?: Maybe<Scalars['Int']>;
  /** Can_use_shipping */
  canUseShiping?: Maybe<Scalars['Int']>;
  /** Can_use_vacation */
  canUseVacation?: Maybe<Scalars['Int']>;
  /** Can_use_withdrawal */
  canUseWithdrawal?: Maybe<Scalars['Int']>;
  /** Group_id */
  groupId?: Maybe<Scalars['Int']>;
  /** Id */
  id?: Maybe<Scalars['Int']>;
  /** Limit_product */
  limitProduct?: Maybe<Scalars['Int']>;
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Position */
  position?: Maybe<Scalars['Int']>;
  /** Show_in_sidebar */
  showInSidebar?: Maybe<Scalars['Int']>;
  /** Status */
  status?: Maybe<Scalars['Int']>;
  /** Url_key */
  urlKey?: Maybe<Scalars['String']>;
};

export type LofMarketPlaceDataRatingInterface = {
  /** Admin_note */
  adminNote: Scalars['String'];
  /** Answer */
  answer: Scalars['String'];
  /** Created_at */
  createdAt?: Maybe<Scalars['String']>;
  /** Customer_id */
  customerId?: Maybe<Scalars['Int']>;
  /** Detail */
  detail?: Maybe<Scalars['String']>;
  /** Email */
  email?: Maybe<Scalars['String']>;
  /** Guest_email */
  guestEmail?: Maybe<Scalars['String']>;
  /** Id */
  id?: Maybe<Scalars['Int']>;
  /** Is_recommended */
  isRecommended: Scalars['Boolean'];
  /** Like_about */
  likeAbout: Scalars['String'];
  /** Minus_review */
  minusReview: Scalars['Int'];
  /** Nickname */
  nickname?: Maybe<Scalars['String']>;
  /** Not_like_about */
  notLikeAbout: Scalars['String'];
  /** Plus_review */
  plusReview: Scalars['Int'];
  /** Rate1 */
  rate1?: Maybe<Scalars['Int']>;
  /** Rate2 */
  rate2?: Maybe<Scalars['Int']>;
  /** Rate3 */
  rate3?: Maybe<Scalars['Int']>;
  /** Rating */
  rating?: Maybe<Scalars['Int']>;
  /** Rating_id */
  ratingId?: Maybe<Scalars['Int']>;
  /** Report_abuse */
  reportAbuse?: Maybe<Scalars['Int']>;
  /** Seller_id */
  sellerId?: Maybe<Scalars['Int']>;
  /** Status */
  status?: Maybe<Scalars['String']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
  /** Updated_at */
  updatedAt?: Maybe<Scalars['String']>;
  /** Verified_buyer */
  verifiedBuyer: Scalars['Int'];
};

export type LofMarketPlaceDataRatingSearchResultsInterface = {
  /** Seller rating list. */
  items: Array<Maybe<LofMarketPlaceDataRatingInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofMarketPlaceDataReviewSearchResultsInterface = {
  /** Seller rating list. */
  items: Array<Maybe<LofMarketPlaceDataReviewInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofMarketPlaceDataReviewInterface = {
  /** Created_at */
  createdAt?: Maybe<Scalars['String']>;
  /** Customer_id */
  customerId?: Maybe<Scalars['Int']>;
  /** Detail */
  detail?: Maybe<Scalars['String']>;
  /** Id */
  id?: Maybe<Scalars['Int']>;
  /** Is_public */
  isPublic?: Maybe<Scalars['Int']>;
  /** Nickname */
  nickname?: Maybe<Scalars['String']>;
  /** Order_id */
  orderId?: Maybe<Scalars['Int']>;
  /** Product_id */
  productId?: Maybe<Scalars['Int']>;
  /** Rating */
  rating?: Maybe<Scalars['Int']>;
  /** Review_id */
  reviewId?: Maybe<Scalars['Int']>;
  /** Reviewseller_id */
  reviewsellerId?: Maybe<Scalars['Int']>;
  /** Seller_id */
  sellerId?: Maybe<Scalars['Int']>;
  /** Status */
  status?: Maybe<Scalars['Int']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
  /** Type */
  type?: Maybe<Scalars['Int']>;
};

export type LofMarketPlaceDataSellerInterface = {
  /** Address */
  address?: Maybe<Scalars['String']>;
  /** Attribute_set_id */
  attributeSetId?: Maybe<Scalars['Int']>;
  /** Banner_pic */
  bannerPic?: Maybe<Scalars['String']>;
  /** City */
  city?: Maybe<Scalars['String']>;
  /** Commission_id */
  commissionId?: Maybe<Scalars['Int']>;
  /** Company */
  company?: Maybe<Scalars['String']>;
  /** Company_description */
  companyDescription?: Maybe<Scalars['String']>;
  /** Company_locality */
  companyLocality?: Maybe<Scalars['String']>;
  /** Company_url */
  companyUrl?: Maybe<Scalars['String']>;
  /** Contact_number */
  contactNumber?: Maybe<Scalars['String']>;
  /** Country */
  country?: Maybe<Scalars['String']>;
  /** Country_id */
  countryId?: Maybe<Scalars['String']>;
  /** Custom attributes values. */
  customAttributes?: Maybe<Array<Maybe<FrameworkAttributeInterface>>>;
  /** Customer_id */
  customerId?: Maybe<Scalars['String']>;
  /** Duration_of_vendor */
  durationOfVendor?: Maybe<Scalars['String']>;
  /** Email */
  email?: Maybe<Scalars['String']>;
  /** ExtensionInterface class for @see \Lof\MarketPlace\Api\Data\SellerInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Facebook_id */
  facebookId?: Maybe<Scalars['String']>;
  /** Fb_active */
  fbActive?: Maybe<Scalars['String']>;
  /** Gplus_active */
  gplusActive?: Maybe<Scalars['String']>;
  /** Gplus_id */
  gplusId?: Maybe<Scalars['String']>;
  /** Group */
  group?: Maybe<Scalars['String']>;
  /** Group_id */
  groupId?: Maybe<Scalars['Int']>;
  /** Id */
  id?: Maybe<Scalars['Int']>;
  /** Image */
  image?: Maybe<Scalars['String']>;
  /** Instagram_active */
  instagramActive?: Maybe<Scalars['String']>;
  /** Instagram_id */
  instagramId?: Maybe<Scalars['String']>;
  /** Is_searchable */
  isSearchable?: Maybe<Scalars['Int']>;
  /** Latitude */
  latitude?: Maybe<Scalars['Float']>;
  /** Linkedin_active */
  linkedinActive?: Maybe<Scalars['String']>;
  /** Linkedin_id */
  linkedinId?: Maybe<Scalars['String']>;
  /** Logo_pic */
  logoPic?: Maybe<Scalars['String']>;
  /** Longitude */
  longitude?: Maybe<Scalars['Float']>;
  /** Message */
  message?: Maybe<Scalars['String']>;
  /** Meta_description */
  metaDescription?: Maybe<Scalars['String']>;
  /** Meta_keyword */
  metaKeyword?: Maybe<Scalars['String']>;
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Opening_hours */
  openingHours?: Maybe<Scalars['String']>;
  /** Page_layout */
  pageLayout?: Maybe<Scalars['String']>;
  /** Pinterest_active */
  pinterestActive?: Maybe<Scalars['String']>;
  /** Pinterest_id */
  pinterestId?: Maybe<Scalars['String']>;
  /** Position */
  position?: Maybe<Scalars['Int']>;
  /** Postcode */
  postcode?: Maybe<Scalars['String']>;
  /** Product_count */
  productCount?: Maybe<Scalars['Int']>;
  products?: Maybe<LofMarketPlaceDataSellerProductSearchResultsInterface>;
  /** Region */
  region?: Maybe<Scalars['String']>;
  /** Region_id */
  regionId?: Maybe<Scalars['String']>;
  /** Return_policy */
  returnPolicy?: Maybe<Scalars['String']>;
  /** Sale */
  sale?: Maybe<Scalars['String']>;
  /** Seller_id */
  sellerId?: Maybe<Scalars['Int']>;
  sellerRates?: Maybe<LofMarketPlaceDataRatingSearchResultsInterface>;
  sellerReviews?: Maybe<LofMarketPlaceDataReviewSearchResultsInterface>;
  /** Shipping_policy */
  shippingPolicy?: Maybe<Scalars['String']>;
  /** Shop_title */
  shopTitle?: Maybe<Scalars['String']>;
  /** Shop_url */
  shopUrl?: Maybe<Scalars['String']>;
  /** Special_opening_hours */
  specialOpeningHours?: Maybe<Scalars['String']>;
  /** Status */
  status?: Maybe<Scalars['Int']>;
  /** Store_id */
  storeId?: Maybe<Scalars['String']>;
  /** Street */
  street?: Maybe<Scalars['String']>;
  summaryRates?: Maybe<LofMarketPlaceDataSummaryRatingInterface>;
  /** Taxvat */
  taxvat?: Maybe<Scalars['String']>;
  /** Telephone */
  telephone?: Maybe<Scalars['String']>;
  /** Thumbnail */
  thumbnail?: Maybe<Scalars['String']>;
  /** Total_products */
  totalProducts: Scalars['Int'];
  /** Total_reviews */
  totalReviews: Scalars['Int'];
  /** TotalSales */
  totalSales: Scalars['Int'];
  /** Total_sold */
  totalSold?: Maybe<Scalars['Int']>;
  /** Tw_active */
  twActive?: Maybe<Scalars['String']>;
  /** Twitter_id */
  twitterId?: Maybe<Scalars['String']>;
  /** Url */
  url?: Maybe<Scalars['String']>;
  /** Url_key */
  urlKey?: Maybe<Scalars['String']>;
  vacation?: Maybe<LofMarketPlaceDataSellerVacationInterface>;
  /** Verify_status */
  verifyStatus?: Maybe<Scalars['Int']>;
  /** Vimeo_active */
  vimeoActive?: Maybe<Scalars['String']>;
  /** Vimeo_id */
  vimeoId?: Maybe<Scalars['String']>;
  /** Youtube_id */
  youtubeId?: Maybe<Scalars['String']>;
};

export type LofMarketPlaceDataSellerProductSearchResultsInterface = {
  /** Seller list. */
  items: Array<Maybe<LofMarketPlaceDataProductInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofMarketPlaceDataProductInterface = {
  /** Approval */
  approval?: Maybe<Scalars['String']>;
  /** Price */
  attributeSetId: Scalars['Int'];
  /** Created_at */
  createdAt?: Maybe<Scalars['String']>;
  /** ID */
  entityId?: Maybe<Scalars['Int']>;
  /** Has_options */
  hasOptions?: Maybe<Scalars['String']>;
  /** ID */
  id?: Maybe<Scalars['Int']>;
  /** Is_in_stock */
  isInStock: Scalars['Int'];
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Price */
  price?: Maybe<Scalars['Float']>;
  /** Product_id */
  productId?: Maybe<Scalars['Int']>;
  /** ID */
  qty: Scalars['Int'];
  /** Required_options */
  requiredOptions?: Maybe<Scalars['String']>;
  /** Seller_id */
  sellerId?: Maybe<Scalars['String']>;
  /** SKU */
  sku?: Maybe<Scalars['String']>;
  /** Type_id */
  typeId?: Maybe<Scalars['Int']>;
  /** Updated_at */
  updatedAt?: Maybe<Scalars['String']>;
};

export type LofMarketPlaceDataSummaryRatingInterface = {
  /** Average */
  average?: Maybe<Scalars['Float']>;
  /** Count */
  count?: Maybe<Scalars['Int']>;
  /** ExtensionInterface class for @see \Lof\MarketPlace\Api\Data\SummaryRatingInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** PerRate */
  perRate?: Maybe<Scalars['Float']>;
  /** RateFive */
  rateFive?: Maybe<Scalars['Float']>;
  /** RateFour */
  rateFour?: Maybe<Scalars['Float']>;
  /** RateOne */
  rateOne?: Maybe<Scalars['Float']>;
  /** RateThree */
  rateThree?: Maybe<Scalars['Float']>;
  /** RateTwo */
  rateTwo?: Maybe<Scalars['Float']>;
  /** Total_count */
  totalCount?: Maybe<Scalars['Int']>;
  /** Total_rate */
  totalRate?: Maybe<Scalars['Float']>;
};

export type LofMarketPlaceDataSellerVacationInterface = {
  /** Created_at */
  createdAt?: Maybe<Scalars['String']>;
  /** From_date */
  fromDate?: Maybe<Scalars['String']>;
  /** Seller_id */
  sellerId?: Maybe<Scalars['String']>;
  /** Status */
  status?: Maybe<Scalars['String']>;
  /** Text add cart */
  textAddCart?: Maybe<Scalars['String']>;
  /** Text add cart */
  toDate?: Maybe<Scalars['String']>;
  /** Updated_at */
  updatedAt?: Maybe<Scalars['String']>;
  /** Vacation_id */
  vacationId?: Maybe<Scalars['String']>;
  /** Vacation_message */
  vacationMessage?: Maybe<Scalars['String']>;
};

export type LofMarketPlaceDataSellersSearchResultsInterface = {
  /** Seller list. */
  items: Array<Maybe<LofMarketPlaceDataSellerInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofMobileDataMobileNavSidebarInterface = {
  /** Sidebar_bottom_block */
  sidebarBottomBlock?: Maybe<Scalars['String']>;
  /** Static_bottom_text */
  staticBottomText?: Maybe<Scalars['String']>;
};

/** Represents a Review Data object Used fully qualified namespaces in annotations for proper work of WebApi request parser */
export type LofProductReviewsDataReviewDataInterface = {
  /** Cur_page */
  curPage: Scalars['Float'];
  /** Represents a ReviewVote object Used fully qualified namespaces in annotations for proper work of WebApi request parser */
  detailedSummary?: Maybe<LofProductReviewsDataDetailedSummaryInterface>;
  /** Attributes list. */
  items: Array<Maybe<LofProductReviewsDataReviewInterface>>;
  /** Page_size */
  pageSize: Scalars['Float'];
  /** Rating_summary */
  ratingSummary: Scalars['Float'];
  /** Rating_summary_value */
  ratingSummaryValue: Scalars['Float'];
  /** Recomended_percent */
  recomendedPercent: Scalars['Float'];
  /** Total_found */
  totalFound: Scalars['Float'];
  /** Total_records */
  totalRecords: Scalars['Float'];
};

/** Represents a ReviewVote object Used fully qualified namespaces in annotations for proper work of WebApi request parser */
export type LofProductReviewsDataDetailedSummaryInterface = {
  /** Five */
  five: Scalars['Int'];
  /** Rating four */
  four: Scalars['Int'];
  /** Rating one. */
  one: Scalars['Int'];
  /** Rating_summary */
  ratingSummary: Scalars['Float'];
  /** Reviews_count */
  reviewsCount: Scalars['Int'];
  /** Rating three */
  three: Scalars['Int'];
  /** Rating two */
  two: Scalars['Int'];
};

/** Represents a Review object Used fully qualified namespaces in annotations for proper work of WebApi request parser */
export type LofProductReviewsDataReviewInterface = {
  /** Answer */
  answer: Scalars['String'];
  /** Review comments. */
  comments: Array<Maybe<LofProductReviewsDataReplyInterface>>;
  /** Country */
  country: Scalars['String'];
  /** Posted date */
  createdAt: Scalars['String'];
  /** Customer id. */
  customerId?: Maybe<Scalars['Int']>;
  customize: LofProductReviewsDataCustomizeInterface;
  /** Review detail. */
  detail: Scalars['String'];
  /** Entity ID */
  entityPkValue: Scalars['Int'];
  galleries: LofProductReviewsDataGalleryInterface;
  /** Guest_email */
  guestEmail: Scalars['String'];
  /** Review id */
  id: Scalars['Int'];
  /** Review images. */
  images: Array<Maybe<LofProductReviewsDataImageInterface>>;
  /** Is_recommended */
  isRecommended: Scalars['Boolean'];
  /** Like_about */
  likeAbout: Scalars['String'];
  /** Minus_review */
  minusReview: Scalars['Int'];
  /** Author nickname. */
  nickname: Scalars['String'];
  /** Not_like_about */
  notLikeAbout: Scalars['String'];
  /** Plus_review */
  plusReview: Scalars['Int'];
  /** Review ratings. */
  ratings: Array<Maybe<LofProductReviewsDataRatingVoteInterface>>;
  /** Total replies */
  replyTotal: Scalars['Int'];
  /** Report_abuse */
  reportAbuse?: Maybe<Scalars['Int']>;
  /** Review entity type. */
  reviewEntity: Scalars['String'];
  /** Review status. Possible values: 1 - Approved, 2 - Pending, 3 - Not Approved. */
  reviewStatus: Scalars['Int'];
  /** Reviewer type. Possible values: 1 - Customer, 2 - Guest, 3 - Administrator. */
  reviewType: Scalars['Int'];
  /** Store id in which review was added */
  storeId: Scalars['Int'];
  /** Stores in which review is visible */
  stores: Array<Maybe<Scalars['Int']>>;
  /** Review title */
  title: Scalars['String'];
  /** Verified_buyer */
  verifiedBuyer: Scalars['Int'];
};

/** Represents a ReviewVote object Used fully qualified namespaces in annotations for proper work of WebApi request parser */
export type LofProductReviewsDataReplyInterface = {
  /** Rating admin_user_id. */
  adminUserId?: Maybe<Scalars['Int']>;
  /** Rating avatar_url. */
  avatarUrl: Scalars['String'];
  /** Rating created_at. */
  createdAt: Scalars['String'];
  /** Rating customer_id. */
  customerId?: Maybe<Scalars['Int']>;
  /** Rating email_address. */
  emailAddress: Scalars['String'];
  /** Rating parent_reply_id. */
  parentReplyId?: Maybe<Scalars['Int']>;
  /** Rating reply_comment. */
  replyComment: Scalars['String'];
  /** Rating reply_customer_id id. */
  replyCustomerId?: Maybe<Scalars['Int']>;
  /** Rating reply id. */
  replyId?: Maybe<Scalars['Int']>;
  /** Rating reply_title. */
  replyTitle: Scalars['String'];
  /** Rating review_id. */
  reviewId: Scalars['Int'];
  /** Rating status. */
  status: Scalars['Int'];
  /** Rating updated_at. */
  updatedAt: Scalars['String'];
  /** Rating user_name. */
  userName: Scalars['String'];
  /** Rating website. */
  website: Scalars['String'];
};

export type LofProductReviewsDataCustomizeInterface = {
  /** Advantages */
  advantages?: Maybe<Scalars['String']>;
  /** Answer */
  answer?: Maybe<Scalars['String']>;
  /** Avatar_image */
  avatarImage?: Maybe<Scalars['String']>;
  /** Avatar_url */
  avatarUrl?: Maybe<Scalars['String']>;
  /** Average */
  average?: Maybe<Scalars['String']>;
  /** Count_helpful */
  countHelpful?: Maybe<Scalars['Int']>;
  /** Count_unhelpful */
  countUnhelpful?: Maybe<Scalars['Int']>;
  /** Country */
  country?: Maybe<Scalars['String']>;
  /** Disadvantages */
  disadvantages?: Maybe<Scalars['String']>;
  /** Email_address */
  emailAddress?: Maybe<Scalars['String']>;
  /** Is_recommended */
  isRecommended?: Maybe<Scalars['Int']>;
  /** Report_abuse */
  reportAbuse?: Maybe<Scalars['Int']>;
  /** Review_customize_id */
  reviewCustomizeId?: Maybe<Scalars['Int']>;
  /** Review_id */
  reviewId?: Maybe<Scalars['Int']>;
  /** Total_helpful */
  totalHelpful?: Maybe<Scalars['Int']>;
  /** Verified_buyer */
  verifiedBuyer?: Maybe<Scalars['Int']>;
};

export type LofProductReviewsDataGalleryInterface = {
  /** ID */
  id?: Maybe<Scalars['Int']>;
  /** Images */
  images?: Maybe<Scalars['String']>;
  /** Label */
  label?: Maybe<Scalars['String']>;
  /** Review Id */
  reviewId?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Boolean']>;
  /** Value */
  value?: Maybe<Scalars['String']>;
};

/** Represents a ReviewVote object Used fully qualified namespaces in annotations for proper work of WebApi request parser */
export type LofProductReviewsDataImageInterface = {
  /** Full_path. */
  fullPath: Scalars['String'];
  /** Resized_path. */
  resizedPath: Scalars['String'];
};

/** Represents a ReviewVote object Used fully qualified namespaces in annotations for proper work of WebApi request parser */
export type LofProductReviewsDataRatingVoteInterface = {
  /** Rating option_id. */
  optionId: Scalars['Int'];
  /** Review Vote in percent */
  percent: Scalars['Int'];
  /** Rating code. */
  ratingCode: Scalars['String'];
  /** Rating id */
  ratingId: Scalars['Int'];
  /** Rating code. */
  ratingName: Scalars['String'];
  /** Rating review_id. */
  reviewId: Scalars['Int'];
  /** Rating value. */
  value: Scalars['Int'];
  /** Rating vote id. */
  voteId: Scalars['Int'];
};

export type LofProductTagsDataTagSearchResultsInterface = {
  /** Tag list. */
  items: Array<Maybe<LofProductTagsDataTagInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofProductTagsDataTagInterface = {
  /** Identifier */
  identifier?: Maybe<Scalars['String']>;
  /** Products */
  products?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Status */
  status?: Maybe<Scalars['Boolean']>;
  /** StoreId */
  storeId?: Maybe<Scalars['Int']>;
  /** Tag_description */
  tagDescription?: Maybe<Scalars['String']>;
  /** TagID */
  tagId?: Maybe<Scalars['Int']>;
  /** TagTitle */
  tagTitle?: Maybe<Scalars['String']>;
};

export type LofmpBlogDataCommentSearchResultsInterface = {
  /** Post list. */
  items: Array<Maybe<LofmpBlogDataCommentInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofmpBlogDataCommentInterface = {
  /** Admin_id */
  adminId?: Maybe<Scalars['Int']>;
  /** Author_type */
  authorType?: Maybe<Scalars['Int']>;
  /** Value */
  commentId?: Maybe<Scalars['Int']>;
  /** Value */
  content: Scalars['String'];
  /** Value */
  creationTime: Scalars['String'];
  /** Customer_id */
  customerId?: Maybe<Scalars['Int']>;
  /** ExtensionInterface class for @see \Lofmp\Blog\Api\Data\CommentInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Value */
  hasRead?: Maybe<Scalars['Int']>;
  /** Value */
  isActive: Scalars['Int'];
  /** Value */
  parentId?: Maybe<Scalars['Int']>;
  /** Value */
  position?: Maybe<Scalars['Int']>;
  /** Value */
  postId: Scalars['Int'];
  /** Text */
  text: Scalars['String'];
  /** Update_time */
  updateTime?: Maybe<Scalars['String']>;
  /** Value */
  userEmail: Scalars['String'];
  /** Value */
  userName: Scalars['String'];
};

export type LofmpBlogDataCategoryInterface = {
  /** Value */
  canonicalUrl: Scalars['String'];
  /** Value */
  catPosition: Scalars['Int'];
  /** Value */
  categoryId?: Maybe<Scalars['Int']>;
  /** Value */
  comments: Scalars['String'];
  /** Value */
  creationTime: Scalars['String'];
  /** Value */
  description: Scalars['String'];
  /** ExtensionInterface class for @see \Lofmp\Blog\Api\Data\CategoryInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Value */
  identifier: Scalars['String'];
  /** Value */
  image: Scalars['String'];
  /** Value */
  isActive: Scalars['Int'];
  /** Value */
  itemPerPage?: Maybe<Scalars['Int']>;
  /** Value */
  layoutType: Scalars['String'];
  /** Value */
  layoutUpdateXml: Scalars['String'];
  /** Value */
  lgColumnItem: Scalars['Int'];
  /** Value */
  mdColumnItem: Scalars['Int'];
  /** Value */
  metaDescription: Scalars['String'];
  /** Value */
  metaKeywords: Scalars['String'];
  /** Value */
  name: Scalars['String'];
  /** Value */
  orderby: Scalars['String'];
  /** Value */
  pageLayout: Scalars['String'];
  /** Value */
  pageTitle: Scalars['String'];
  /** Value */
  parentId?: Maybe<Scalars['Int']>;
  /** Path */
  path: Scalars['String'];
  /** Value */
  postTemplate: Scalars['String'];
  /** Value */
  postsStyle: Scalars['String'];
  /** Value */
  postsTemplate: Scalars['String'];
  /** Value */
  smColumnItem: Scalars['Int'];
  /** Value */
  stores: Array<Maybe<Scalars['Int']>>;
  /** Value */
  updateTime: Scalars['String'];
  /** Value */
  xsColumnItem: Scalars['Int'];
};

export type LofmpBlogDataCategorySearchResultsInterface = {
  /** Category list. */
  items: Array<Maybe<LofmpBlogDataCategoryInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofmpBlogDataPostInterface = {
  /** Value */
  canonicalUrl: Scalars['String'];
  /** Value */
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Value */
  categoryIdentifiers?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Value */
  categoryIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Value */
  categoryNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Value */
  commentCount?: Maybe<Scalars['Int']>;
  /** Value */
  content: Scalars['String'];
  /** Value */
  creationTime: Scalars['String'];
  /** Value */
  disklike?: Maybe<Scalars['Int']>;
  /** Value */
  enableComment?: Maybe<Scalars['Int']>;
  /** ExtensionInterface class for @see \Lofmp\Blog\Api\Data\PostInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Value */
  filteredContent: Scalars['String'];
  /** Value */
  hits?: Maybe<Scalars['Int']>;
  /** Value */
  identifier: Scalars['String'];
  /** Value */
  image: Scalars['String'];
  /** Value */
  imageType: Scalars['String'];
  /** Value */
  imageVideoId: Scalars['String'];
  /** Value */
  imageVideoType: Scalars['String'];
  /** Value */
  isActive: Scalars['Int'];
  /** Value */
  isPrivate?: Maybe<Scalars['Int']>;
  /** Value */
  like?: Maybe<Scalars['Int']>;
  /** Value */
  metaDescription: Scalars['String'];
  /** Value */
  metaKeywords: Scalars['String'];
  /** Value */
  metaTitle: Scalars['String'];
  /** Value */
  ogDescription: Scalars['String'];
  /** Value */
  ogImg: Scalars['String'];
  /** Value */
  ogMetadata: Scalars['String'];
  /** Value */
  ogTitle: Scalars['String'];
  /** Value */
  ogType: Scalars['String'];
  /** Value */
  pageLayout: Scalars['String'];
  /** Value */
  pageTitle: Scalars['String'];
  /** Value */
  postId?: Maybe<Scalars['Int']>;
  /** Value */
  postsRelated?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Value */
  productsRelated?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Value */
  realImageUrl: Scalars['String'];
  /** Value */
  realPostUrl: Scalars['String'];
  /** Value */
  realThumbnailUrl: Scalars['String'];
  /** Value */
  shortContent: Scalars['String'];
  /** Store_id */
  storeId?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Value */
  stores?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Tag ids */
  tagIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Tag ids */
  tagList?: Maybe<Array<Maybe<LofmpBlogDataTagInterface>>>;
  /** Value */
  tags?: Maybe<Scalars['String']>;
  /** Value */
  thumbnail: Scalars['String'];
  /** Value */
  thumbnailType: Scalars['String'];
  /** Value */
  thumbnailVideoId: Scalars['String'];
  /** Value */
  thumbnailVideoType: Scalars['String'];
  /** Value */
  title: Scalars['String'];
  /** Value */
  updateTime: Scalars['String'];
  /** Value */
  userId?: Maybe<Scalars['Int']>;
};

export type LofmpBlogDataTagInterface = {
  /** Content */
  content?: Maybe<Scalars['String']>;
  /** Custom_layout */
  customLayout?: Maybe<Scalars['String']>;
  /** Custom_layout_update_xml */
  customLayoutUpdateXml?: Maybe<Scalars['String']>;
  /** Custom_theme */
  customTheme?: Maybe<Scalars['String']>;
  /** Custom_theme_from */
  customThemeFrom?: Maybe<Scalars['String']>;
  /** Custom_theme_to */
  customThemeTo?: Maybe<Scalars['String']>;
  /** Identifier */
  identifier?: Maybe<Scalars['String']>;
  /** Is_active */
  isActive?: Maybe<Scalars['String']>;
  /** Layout_update_xml */
  layoutUpdateXml?: Maybe<Scalars['String']>;
  /** Meta_description */
  metaDescription?: Maybe<Scalars['String']>;
  /** Meta_keywords */
  metaKeywords?: Maybe<Scalars['String']>;
  /** Meta_robots */
  metaRobots?: Maybe<Scalars['String']>;
  /** Meta_title */
  metaTitle?: Maybe<Scalars['String']>;
  /** Page_layout */
  pageLayout?: Maybe<Scalars['String']>;
  /** Posts_list_template */
  postsListTemplate?: Maybe<Scalars['String']>;
  /** Posts_per_page */
  postsPerPage?: Maybe<Scalars['String']>;
  /** Tag_id */
  tagId?: Maybe<Scalars['String']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
};

export type LofmpBlogDataPostSearchResultsInterface = {
  /** Post list. */
  items: Array<Maybe<LofmpBlogDataPostInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofmpBlogDataTagSearchResultsInterface = {
  /** Post list. */
  items: Array<Maybe<LofmpBlogDataTagInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofmpCouponCodeDataCouponSearchResultsInterface = {
  /** Coupon list. */
  items: Array<Maybe<LofmpCouponCodeDataCouponInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofmpCouponCodeDataCouponInterface = {
  /** Actions_serialized */
  actionsSerialized?: Maybe<Scalars['String']>;
  /** Alias */
  alias?: Maybe<Scalars['String']>;
  /** Code */
  code?: Maybe<Scalars['String']>;
  /** Conditions_serialized */
  conditionsSerialized?: Maybe<Scalars['String']>;
  /** Coupon_id */
  couponId?: Maybe<Scalars['Int']>;
  /** Couponcode_id */
  couponcodeId?: Maybe<Scalars['Int']>;
  /** Customer_id */
  customerId?: Maybe<Scalars['Int']>;
  /** Description */
  description?: Maybe<Scalars['String']>;
  /** Discount_amount */
  discountAmount: Scalars['Float'];
  /** Email */
  email?: Maybe<Scalars['String']>;
  /** From_date */
  fromDate?: Maybe<Scalars['String']>;
  /** Is_public */
  isPublic?: Maybe<Scalars['Int']>;
  /** Rule_id */
  ruleId?: Maybe<Scalars['Int']>;
  /** Seller_id */
  sellerId?: Maybe<Scalars['Int']>;
  /** Simple_action */
  simpleAction?: Maybe<Scalars['String']>;
  /** Times_used */
  timesUsed?: Maybe<Scalars['Int']>;
  /** To_date */
  toDate?: Maybe<Scalars['String']>;
  /** Usage_limit */
  usageLimit?: Maybe<Scalars['Int']>;
};

export type LofmpRmaDataAddressInterface = {
  address: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  sellerId: Scalars['Int'];
  sortOrder: Scalars['Int'];
};

/** Interface for return address search results. */
export type LofmpRmaDataAddressSearchResultsInterface = {
  /** Return address list. */
  items: Array<Maybe<LofmpRmaDataAddressInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofmpRmaDataConditionInterface = {
  id?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  sortOrder: Scalars['Int'];
};

export type LofmpRmaDataConditionSearchResultsInterface = {
  /** Rmas list. */
  items: Array<Maybe<LofmpRmaDataConditionInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofmpRmaDataFieldInterface = {
  code: Scalars['String'];
  description: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  isActive: Scalars['Boolean'];
  isEditableCustomer: Scalars['Boolean'];
  isRequiredStaff: Scalars['Boolean'];
  isShowInConfirmShipping: Scalars['Boolean'];
  isVisibleCustomer: Scalars['Boolean'];
  name: Scalars['String'];
  sortOrder: Scalars['Int'];
  type: Scalars['String'];
  values: Scalars['String'];
  visibleCustomerStatus: Scalars['String'];
};

/** Interface for field search results. */
export type LofmpRmaDataFieldSearchResultsInterface = {
  /** Fields list. */
  items: Array<Maybe<LofmpRmaDataFieldInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofmpRmaDataQuickResponseInterface = {
  id?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  template: Scalars['String'];
};

/** Interface for quick response search results. */
export type LofmpRmaDataQuickResponseSearchResultsInterface = {
  /** Quick responses list. */
  items: Array<Maybe<LofmpRmaDataQuickResponseInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofmpRmaDataReasonInterface = {
  id?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  sortOrder: Scalars['Int'];
};

export type LofmpRmaDataReasonSearchResultsInterface = {
  /** Rmas list. */
  items: Array<Maybe<LofmpRmaDataReasonInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofmpRmaDataResolutionInterface = {
  id?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  sortOrder: Scalars['Int'];
};

export type LofmpRmaDataResolutionSearchResultsInterface = {
  /** Rmas list. */
  items: Array<Maybe<LofmpRmaDataResolutionInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type LofmpRmaDataStatusInterface = {
  adminMessage: Scalars['String'];
  code: Scalars['String'];
  customerMessage: Scalars['String'];
  historyMessage: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isShowShipping?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  sortOrder: Scalars['Int'];
};

/** Interface for status search results. */
export type LofmpRmaDataStatusSearchResultsInterface = {
  /** Rmas list. */
  items: Array<Maybe<LofmpRmaDataStatusInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

/** Interface AuthDataInterface */
export type PayPalBraintreeDataAuthDataInterface = {
  /** To success page */
  actionSuccess: Scalars['String'];
  /** Client token */
  clientToken?: Maybe<Scalars['String']>;
  /** Display name */
  displayName: Scalars['String'];
  loggedIn: Scalars['Boolean'];
  /** Current store code */
  storeCode: Scalars['String'];
};

/** Interface AddressInterface */
export type QuoteDataAddressInterface = {
  /** City name */
  city: Scalars['String'];
  /** Company */
  company?: Maybe<Scalars['String']>;
  /** Country id */
  countryId: Scalars['String'];
  /** Custom attributes values. */
  customAttributes?: Maybe<Array<Maybe<FrameworkAttributeInterface>>>;
  /** Customer address id */
  customerAddressId?: Maybe<Scalars['Int']>;
  /** Customer id */
  customerId?: Maybe<Scalars['Int']>;
  /** Billing/shipping email */
  email: Scalars['String'];
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\AddressInterface */
  extensionAttributes?: Maybe<QuoteDataAddressExtensionInterface>;
  /** Fax number */
  fax?: Maybe<Scalars['String']>;
  /** First name */
  firstname: Scalars['String'];
  /** Id */
  id?: Maybe<Scalars['Int']>;
  /** Last name */
  lastname: Scalars['String'];
  /** Middle name */
  middlename?: Maybe<Scalars['String']>;
  /** Postcode */
  postcode: Scalars['String'];
  /** Prefix */
  prefix?: Maybe<Scalars['String']>;
  /** Region name */
  region: Scalars['String'];
  /** Region code */
  regionCode: Scalars['String'];
  /** Region id */
  regionId: Scalars['Int'];
  /** Same as billing flag */
  sameAsBilling?: Maybe<Scalars['Int']>;
  /** Save in address book flag */
  saveInAddressBook?: Maybe<Scalars['Int']>;
  /** Street */
  street: Array<Maybe<Scalars['String']>>;
  /** Suffix */
  suffix?: Maybe<Scalars['String']>;
  /** Telephone number */
  telephone: Scalars['String'];
  /** Vat id */
  vatId?: Maybe<Scalars['String']>;
};

/** ExtensionInterface class for @see \Magento\Quote\Api\Data\AddressInterface */
export type QuoteDataAddressExtensionInterface = {
  discounts?: Maybe<Array<Maybe<SalesRuleDataRuleDiscountInterface>>>;
  pickupLocationCode?: Maybe<Scalars['String']>;
};

/** Rule discount Interface */
export type SalesRuleDataRuleDiscountInterface = {
  /** Discount Data Interface */
  discountData: SalesRuleDataDiscountDataInterface;
  /** Rule ID */
  ruleId: Scalars['Int'];
  /** Rule Label */
  ruleLabel: Scalars['String'];
};

/** Discount Data Interface */
export type SalesRuleDataDiscountDataInterface = {
  /** Amount */
  amount: Scalars['Float'];
  /** Base Amount */
  baseAmount: Scalars['Float'];
  /** Base Original Amount */
  baseOriginalAmount: Scalars['Float'];
  /** Original Amount */
  originalAmount: Scalars['Float'];
};

/** Interface CartInterface */
export type QuoteDataCartInterface = {
  /** Interface AddressInterface */
  billingAddress?: Maybe<QuoteDataAddressInterface>;
  /** Cart conversion date and time. Otherwise, null. */
  convertedAt?: Maybe<Scalars['String']>;
  /** Cart creation date and time. Otherwise, null. */
  createdAt?: Maybe<Scalars['String']>;
  /** Interface CurrencyInterface */
  currency?: Maybe<QuoteDataCurrencyInterface>;
  /** Customer entity interface for API handling. */
  customer: CustomerDataCustomerInterface;
  /** For guest customers, false for logged in customers */
  customerIsGuest?: Maybe<Scalars['Boolean']>;
  /** Notice text */
  customerNote?: Maybe<Scalars['String']>;
  /** Customer notification flag */
  customerNoteNotify?: Maybe<Scalars['Boolean']>;
  /** Customer tax class ID. */
  customerTaxClassId?: Maybe<Scalars['Int']>;
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\CartInterface */
  extensionAttributes?: Maybe<QuoteDataCartExtensionInterface>;
  /** Cart/quote ID. */
  id: Scalars['Int'];
  /** Active status flag value. Otherwise, null. */
  isActive?: Maybe<Scalars['Boolean']>;
  /** Virtual flag value. Otherwise, null. */
  isVirtual?: Maybe<Scalars['Boolean']>;
  /** Array of items. Otherwise, null. */
  items?: Maybe<Array<Maybe<QuoteDataCartItemInterface>>>;
  /** Number of different items or products in the cart. Otherwise, null. */
  itemsCount?: Maybe<Scalars['Int']>;
  /** Total quantity of all cart items. Otherwise, null. */
  itemsQty?: Maybe<Scalars['Float']>;
  /** Original order ID. Otherwise, null. */
  origOrderId?: Maybe<Scalars['Int']>;
  /** Reserved order ID. Otherwise, null. */
  reservedOrderId?: Maybe<Scalars['String']>;
  /** Store identifier */
  storeId: Scalars['Int'];
  /** Cart last update date and time. Otherwise, null. */
  updatedAt?: Maybe<Scalars['String']>;
};

/** Interface CurrencyInterface */
export type QuoteDataCurrencyInterface = {
  /** Base currency code */
  baseCurrencyCode?: Maybe<Scalars['String']>;
  /** Base currency to global currency rate */
  baseToGlobalRate?: Maybe<Scalars['Float']>;
  /** Base currency to quote currency rate */
  baseToQuoteRate?: Maybe<Scalars['Float']>;
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\CurrencyInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Global currency code */
  globalCurrencyCode?: Maybe<Scalars['String']>;
  /** Quote currency code */
  quoteCurrencyCode?: Maybe<Scalars['String']>;
  /** Store currency code */
  storeCurrencyCode?: Maybe<Scalars['String']>;
  /** Store currency to base currency rate */
  storeToBaseRate?: Maybe<Scalars['Float']>;
  /** Store currency to quote currency rate */
  storeToQuoteRate?: Maybe<Scalars['Float']>;
};

/** Customer entity interface for API handling. */
export type CustomerDataCustomerInterface = {
  /** Customer addresses. */
  addresses?: Maybe<Array<Maybe<CustomerDataAddressInterface>>>;
  /** Confirmation */
  confirmation?: Maybe<Scalars['String']>;
  /** Created at time */
  createdAt?: Maybe<Scalars['String']>;
  /** Created in area */
  createdIn?: Maybe<Scalars['String']>;
  /** Custom attributes values. */
  customAttributes?: Maybe<Array<Maybe<FrameworkAttributeInterface>>>;
  /** Default billing address id */
  defaultBilling?: Maybe<Scalars['String']>;
  /** Default shipping address id */
  defaultShipping?: Maybe<Scalars['String']>;
  /** Disable auto group change flag. */
  disableAutoGroupChange?: Maybe<Scalars['Int']>;
  /** In keeping with current security and privacy best practices, be sure you are aware of any potential legal and security risks associated with the storage of customers’ full date of birth (month, day, year) along with other personal identifiers (e.g., full name) before collecting or processing such data. */
  dob?: Maybe<Scalars['String']>;
  /** Email address */
  email: Scalars['String'];
  /** ExtensionInterface class for @see \Magento\Customer\Api\Data\CustomerInterface */
  extensionAttributes?: Maybe<CustomerDataCustomerExtensionInterface>;
  /** First name */
  firstname: Scalars['String'];
  /** Gender */
  gender?: Maybe<Scalars['Int']>;
  /** Group id */
  groupId?: Maybe<Scalars['Int']>;
  /** Customer id */
  id?: Maybe<Scalars['Int']>;
  /** Last name */
  lastname: Scalars['String'];
  /** Middle name */
  middlename?: Maybe<Scalars['String']>;
  /** Prefix */
  prefix?: Maybe<Scalars['String']>;
  /** Store id */
  storeId?: Maybe<Scalars['Int']>;
  /** Suffix */
  suffix?: Maybe<Scalars['String']>;
  /** Tax Vat */
  taxvat?: Maybe<Scalars['String']>;
  /** Updated at time */
  updatedAt?: Maybe<Scalars['String']>;
  /** Website id */
  websiteId?: Maybe<Scalars['Int']>;
};

/** Customer address interface. */
export type CustomerDataAddressInterface = {
  /** City name */
  city?: Maybe<Scalars['String']>;
  /** Company */
  company?: Maybe<Scalars['String']>;
  /** Country code in ISO_3166-2 format */
  countryId?: Maybe<Scalars['String']>;
  /** Custom attributes values. */
  customAttributes?: Maybe<Array<Maybe<FrameworkAttributeInterface>>>;
  /** Customer ID */
  customerId?: Maybe<Scalars['Int']>;
  /** If this address is default billing address */
  defaultBilling?: Maybe<Scalars['Boolean']>;
  /** If this address is default shipping address. */
  defaultShipping?: Maybe<Scalars['Boolean']>;
  /** ExtensionInterface class for @see \Magento\Customer\Api\Data\AddressInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Fax number */
  fax?: Maybe<Scalars['String']>;
  /** First name */
  firstname?: Maybe<Scalars['String']>;
  /** ID */
  id?: Maybe<Scalars['Int']>;
  /** Last name */
  lastname?: Maybe<Scalars['String']>;
  /** Middle name */
  middlename?: Maybe<Scalars['String']>;
  /** Postcode */
  postcode?: Maybe<Scalars['String']>;
  /** Prefix */
  prefix?: Maybe<Scalars['String']>;
  /** Customer address region interface. */
  region?: Maybe<CustomerDataRegionInterface>;
  /** Region ID */
  regionId?: Maybe<Scalars['Int']>;
  /** Street */
  street?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Suffix */
  suffix?: Maybe<Scalars['String']>;
  /** Telephone number */
  telephone?: Maybe<Scalars['String']>;
  /** Vat id */
  vatId?: Maybe<Scalars['String']>;
};

/** Customer address region interface. */
export type CustomerDataRegionInterface = {
  /** ExtensionInterface class for @see \Magento\Customer\Api\Data\RegionInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Region */
  region: Scalars['String'];
  /** Region code */
  regionCode: Scalars['String'];
  /** Region id */
  regionId: Scalars['Int'];
};

/** ExtensionInterface class for @see \Magento\Customer\Api\Data\CustomerInterface */
export type CustomerDataCustomerExtensionInterface = {
  amazonId?: Maybe<Scalars['String']>;
  assistanceAllowed?: Maybe<Scalars['Int']>;
  isSubscribed?: Maybe<Scalars['Boolean']>;
  /** Extended customer custom attributes interface. */
  sellerAttributes?: Maybe<LofMarketPermissionsDataSellerCustomerInterface>;
  vertexCustomerCode?: Maybe<Scalars['String']>;
  vertexCustomerCountry?: Maybe<Scalars['String']>;
};

/** Extended customer custom attributes interface. */
export type LofMarketPermissionsDataSellerCustomerInterface = {
  /** Customer ID. */
  customerId?: Maybe<Scalars['Int']>;
  /** ExtensionInterface class for @see \Lof\MarketPermissions\Api\Data\SellerCustomerInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Get job title. */
  jobTitle?: Maybe<Scalars['String']>;
  /** Seller ID. */
  sellerId?: Maybe<Scalars['Int']>;
  /** Customer status. */
  status?: Maybe<Scalars['Int']>;
  /** Get telephone. */
  telephone?: Maybe<Scalars['String']>;
};

/** ExtensionInterface class for @see \Magento\Quote\Api\Data\CartInterface */
export type QuoteDataCartExtensionInterface = {
  amazonOrderReferenceId?: Maybe<AmazonPaymentDataQuoteLinkInterface>;
  isReorder?: Maybe<Scalars['Int']>;
  shippingAssignments?: Maybe<Array<Maybe<QuoteDataShippingAssignmentInterface>>>;
};

export type AmazonPaymentDataQuoteLinkInterface = {
  /** Amazon order reference id */
  amazonOrderReferenceId: Scalars['String'];
  /** Quote confirmed with amazon */
  confirmed: Scalars['Boolean'];
  id: Scalars['String'];
  /** Quote id */
  quoteId: Scalars['Int'];
  /** Sandbox simulation reference */
  sandboxSimulationReference: Scalars['String'];
};

/** Interface ShippingAssignmentInterface */
export type QuoteDataShippingAssignmentInterface = {
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\ShippingAssignmentInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  items: Array<Maybe<QuoteDataCartItemInterface>>;
  /** Interface ShippingInterface */
  shipping: QuoteDataShippingInterface;
};

/** Interface CartItemInterface */
export type QuoteDataCartItemInterface = {
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\CartItemInterface */
  extensionAttributes?: Maybe<QuoteDataCartItemExtensionInterface>;
  /** Item ID. Otherwise, null. */
  itemId?: Maybe<Scalars['Int']>;
  /** Product name. Otherwise, null. */
  name?: Maybe<Scalars['String']>;
  /** Product price. Otherwise, null. */
  price?: Maybe<Scalars['Float']>;
  /** Product option interface */
  productOption?: Maybe<QuoteDataProductOptionInterface>;
  /** Product type. Otherwise, null. */
  productType?: Maybe<Scalars['String']>;
  /** Product quantity. */
  qty: Scalars['Float'];
  /** Quote id. */
  quoteId: Scalars['String'];
  /** Product SKU. Otherwise, null. */
  sku?: Maybe<Scalars['String']>;
};

/** ExtensionInterface class for @see \Magento\Quote\Api\Data\CartItemInterface */
export type QuoteDataCartItemExtensionInterface = {
  discounts?: Maybe<Array<Maybe<SalesRuleDataRuleDiscountInterface>>>;
  sellerId?: Maybe<Scalars['Int']>;
  sellerName?: Maybe<Scalars['String']>;
  sellerUrl?: Maybe<Scalars['String']>;
};

/** Product option interface */
export type QuoteDataProductOptionInterface = {
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\ProductOptionInterface */
  extensionAttributes?: Maybe<QuoteDataProductOptionExtensionInterface>;
};

/** ExtensionInterface class for @see \Magento\Quote\Api\Data\ProductOptionInterface */
export type QuoteDataProductOptionExtensionInterface = {
  bundleOptions?: Maybe<Array<Maybe<BundleDataBundleOptionInterface>>>;
  configurableItemOptions?: Maybe<Array<Maybe<ConfigurableProductDataConfigurableItemOptionValueInterface>>>;
  customOptions?: Maybe<Array<Maybe<CatalogDataCustomOptionInterface>>>;
  /** Downloadable Option */
  downloadableOption?: Maybe<DownloadableDataDownloadableOptionInterface>;
  groupedOptions?: Maybe<Array<Maybe<GroupedProductDataGroupedOptionsInterface>>>;
};

/** Interface BundleOptionInterface */
export type BundleDataBundleOptionInterface = {
  /** ExtensionInterface class for @see \Magento\Bundle\Api\Data\BundleOptionInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Bundle option id. */
  optionId: Scalars['Int'];
  /** Bundle option quantity. */
  optionQty: Scalars['Int'];
  /** Bundle option selection ids. */
  optionSelections: Array<Maybe<Scalars['Int']>>;
};

/** Interface ConfigurableItemOptionValueInterface */
export type ConfigurableProductDataConfigurableItemOptionValueInterface = {
  /** ExtensionInterface class for @see \Magento\ConfigurableProduct\Api\Data\ConfigurableItemOptionValueInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Option SKU */
  optionId: Scalars['String'];
  /** Item id */
  optionValue?: Maybe<Scalars['Int']>;
};

/** Interface CustomOptionInterface */
export type CatalogDataCustomOptionInterface = {
  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\CustomOptionInterface */
  extensionAttributes?: Maybe<CatalogDataCustomOptionExtensionInterface>;
  /** Option id */
  optionId: Scalars['String'];
  /** Option value */
  optionValue: Scalars['String'];
};

/** ExtensionInterface class for @see \Magento\Catalog\Api\Data\CustomOptionInterface */
export type CatalogDataCustomOptionExtensionInterface = {
  /** Image Content data interface */
  fileInfo?: Maybe<FrameworkDataImageContentInterface>;
};

/** Downloadable Option */
export type DownloadableDataDownloadableOptionInterface = {
  /** The list of downloadable links */
  downloadableLinks: Array<Maybe<Scalars['Int']>>;
};

/** Represents `product item id with qty` of a grouped product. */
export type GroupedProductDataGroupedOptionsInterface = {
  /** ExtensionInterface class for @see \Magento\GroupedProduct\Api\Data\GroupedOptionsInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Associated product id */
  id?: Maybe<Scalars['Int']>;
  /** Associated product qty */
  qty?: Maybe<Scalars['Int']>;
};

/** Interface ShippingInterface */
export type QuoteDataShippingInterface = {
  /** Interface AddressInterface */
  address: QuoteDataAddressInterface;
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\ShippingInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Shipping method */
  method: Scalars['String'];
};

/** Interface PaymentInterface */
export type QuoteDataPaymentInterface = {
  /** Payment additional details */
  additionalData?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\PaymentInterface */
  extensionAttributes?: Maybe<QuoteDataPaymentExtensionInterface>;
  /** Payment method code */
  method: Scalars['String'];
  /** Purchase order number */
  poNumber?: Maybe<Scalars['String']>;
};

/** ExtensionInterface class for @see \Magento\Quote\Api\Data\PaymentInterface */
export type QuoteDataPaymentExtensionInterface = {
  agreementIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Interface ShippingMethodInterface */
export type QuoteDataShippingMethodInterface = {
  /** Shipping amount in store currency. */
  amount: Scalars['Float'];
  /** The value of the availability flag for the current shipping method. */
  available: Scalars['Boolean'];
  /** Shipping amount in base currency. */
  baseAmount: Scalars['Float'];
  /** Shipping carrier code. */
  carrierCode: Scalars['String'];
  /** Shipping carrier title. Otherwise, null. */
  carrierTitle?: Maybe<Scalars['String']>;
  /** Shipping Error message. */
  errorMessage: Scalars['String'];
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\ShippingMethodInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Shipping method code. */
  methodCode: Scalars['String'];
  /** Shipping method title. Otherwise, null. */
  methodTitle?: Maybe<Scalars['String']>;
  /** Shipping price excl tax. */
  priceExclTax: Scalars['Float'];
  /** Shipping price incl tax. */
  priceInclTax: Scalars['Float'];
};

export type LofMobileDataMobileCmsPageInterface = {
  /** Id */
  id?: Maybe<Scalars['Int']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
};

export type LofMobileDataMobileSuggestionTagInterface = {
  /** Num_of_results */
  numOfResults?: Maybe<Scalars['Int']>;
  /** Term */
  term?: Maybe<Scalars['String']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
};

export type LofProductTagsDataTagProductLinkInterface = {
  /** ExtensionInterface class for @see \Lof\ProductTags\Api\Data\TagProductLinkInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  position?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  /** Tag id */
  tagId: Scalars['String'];
};

export type VesMegamenuDataItemInterface = {
  /** After_html */
  afterHtml?: Maybe<Scalars['String']>;
  /** Update_time */
  align?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  animationIn?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  animationTime?: Maybe<Scalars['String']>;
  /** Before_html */
  beforeHtml?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  bgColor?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  bgHoverColor?: Maybe<Scalars['String']>;
  /** Caret */
  caret?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  category?: Maybe<Scalars['String']>;
  /** Disable_bellow */
  childCol?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  childColType?: Maybe<Scalars['String']>;
  /** Structure */
  classes?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  color?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  contentHtml?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  contentType?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  contentWidth?: Maybe<Scalars['String']>;
  /** Event */
  disableBellow?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  dropdownBgcolor?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  dropdownBgimage?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  dropdownBgimagerepeat?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  dropdownBgpositionx?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  dropdownBgpositiony?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  dropdownInlinecss?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  footerHtml?: Maybe<Scalars['String']>;
  /** Current_version */
  headerHtml?: Maybe<Scalars['String']>;
  /** Hover_caret */
  hoverCaret?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  hoverColor?: Maybe<Scalars['String']>;
  /** Hover_icon */
  hoverIcon?: Maybe<Scalars['String']>;
  /** Width */
  icon?: Maybe<Scalars['String']>;
  /** Design */
  iconClasses?: Maybe<Scalars['String']>;
  /** Desktop_template */
  iconPosition?: Maybe<Scalars['String']>;
  /** Id */
  id?: Maybe<Scalars['String']>;
  /** Inline_css */
  inlinceCss?: Maybe<Scalars['String']>;
  /** Params */
  isGroup?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  isgroupLevel?: Maybe<Scalars['String']>;
  /** Item_id */
  itemId?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  leftSidebarHtml?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  leftSidebarWidth?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  link?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  linkType?: Maybe<Scalars['String']>;
  /** Menu_id */
  menuId?: Maybe<Scalars['String']>;
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  parentcat?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  rightSidebarHtml?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  rightSidebarWidth?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  showContent?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  showFooter?: Maybe<Scalars['String']>;
  /** Scrolltofix */
  showHeader?: Maybe<Scalars['String']>;
  /** Classes */
  showIcon?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  showLeftSidebar?: Maybe<Scalars['String']>;
  /** Show_name */
  showName?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  showRightSidebar?: Maybe<Scalars['String']>;
  /** Disable_iblocks */
  status?: Maybe<Scalars['String']>;
  /** Sub_height */
  subHeight?: Maybe<Scalars['String']>;
  /** Creation_time */
  subWidth?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  submenuSorttype?: Maybe<Scalars['String']>;
  /** Tab_position */
  tabPosition?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  target?: Maybe<Scalars['String']>;
};

export type VesMegamenuDataItemSearchResultsInterface = {
  /** Menu list. */
  items: Array<Maybe<VesMegamenuDataItemInterface>>;
  /** Search criteria interface. */
  searchCriteria: FrameworkSearchCriteriaInterface;
  /** Total count. */
  totalCount: Scalars['Int'];
};

export type VesMegamenuDataMenuFrontendInterface = {
  /** Alias */
  alias?: Maybe<Scalars['String']>;
  /** Classes */
  classes?: Maybe<Scalars['String']>;
  /** Creation_time */
  cretionTime?: Maybe<Scalars['String']>;
  /** Current_version */
  currentVersion?: Maybe<Scalars['String']>;
  /** Customer_group_ids ids */
  customerGroupIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  designStyle?: Maybe<VesMegamenuDataDesignStyleInterface>;
  /** Desktop_template */
  desktopTemplate?: Maybe<Scalars['String']>;
  /** Disable_bellow */
  disableBellow?: Maybe<Scalars['String']>;
  /** Disable_iblocks */
  disableIblocks?: Maybe<Scalars['String']>;
  /** Event */
  event?: Maybe<Scalars['String']>;
  /** Menu_id */
  menuId?: Maybe<Scalars['Int']>;
  /** Mobile_menu_alias */
  mobileMenuAlias?: Maybe<Scalars['String']>;
  /** Mobile_template */
  mobileTemplate?: Maybe<Scalars['String']>;
  /** Nodes */
  nodes?: Maybe<Array<Maybe<VesMegamenuDataMenuTreeItemInterface>>>;
  /** Revert_next */
  revertNext?: Maybe<Scalars['String']>;
  /** Revert_previous */
  revertPrevious?: Maybe<Scalars['String']>;
  /** Scrolltofix */
  scrolltofix?: Maybe<Scalars['String']>;
  /** Scrolltofixed */
  scrolltofixed?: Maybe<Scalars['Int']>;
  /** Store ids */
  storeId?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Update_time */
  updateTime?: Maybe<Scalars['String']>;
  /** Version_id */
  versionId?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Width */
  width?: Maybe<Scalars['String']>;
};

export type VesMegamenuDataDesignStyleInterface = {
  /** Background */
  background?: Maybe<Scalars['String']>;
  /** Border_bottom_left_radius */
  borderBottomLeftRadius?: Maybe<Scalars['String']>;
  /** Border_bottom_right_radius */
  borderBottomRightRadius?: Maybe<Scalars['String']>;
  /** Border_bottom_width */
  borderBottomWidth?: Maybe<Scalars['String']>;
  /** Border_color */
  borderColor?: Maybe<Scalars['String']>;
  /** Border_left_width */
  borderLeftWidth?: Maybe<Scalars['String']>;
  /** Border_style */
  borderStyle?: Maybe<Scalars['String']>;
  /** Border_top_left_radius */
  borderTopLeftRadius?: Maybe<Scalars['String']>;
  /** Border_top_right_radius */
  borderTopRightRadius?: Maybe<Scalars['String']>;
  /** Border_top_width */
  borderTopWidth?: Maybe<Scalars['String']>;
  /** Border_units */
  borderUnits?: Maybe<Scalars['String']>;
  /** Boxshadow_blur */
  boxshadowBlur?: Maybe<Scalars['String']>;
  /** Boxshadow_color */
  boxshadowColor?: Maybe<Scalars['String']>;
  /** Boxshadow_inset */
  boxshadowInset?: Maybe<Scalars['String']>;
  /** Boxshadow_spread */
  boxshadowSpread?: Maybe<Scalars['String']>;
  /** Boxshadow_units */
  boxshadowUnits?: Maybe<Scalars['String']>;
  /** Boxshadow_x */
  boxshadowX?: Maybe<Scalars['String']>;
  /** Boxshadow_y */
  boxshadowY?: Maybe<Scalars['String']>;
  /** ExtensionInterface class for @see \Ves\Megamenu\Api\Data\DesignStyleInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Font_char_subset */
  fontCharSubset?: Maybe<Scalars['String']>;
  /** Font_custom */
  fontCustom?: Maybe<Scalars['String']>;
  /** Font_google */
  fontGoogle?: Maybe<Scalars['String']>;
  /** Font_group */
  fontGroup?: Maybe<Scalars['String']>;
  /** Font_size */
  fontSize?: Maybe<Scalars['String']>;
  /** Font_weight */
  fontWeight?: Maybe<Scalars['String']>;
  /** Margin_bottom */
  marginBottom?: Maybe<Scalars['String']>;
  /** Margin_left */
  marginLeft?: Maybe<Scalars['String']>;
  /** Margin_right */
  marginRight?: Maybe<Scalars['String']>;
  /** Margin_top */
  marginTop?: Maybe<Scalars['String']>;
  /** Margin_units */
  marginUnits?: Maybe<Scalars['String']>;
  /** Padding_bottom */
  paddingBottom?: Maybe<Scalars['String']>;
  /** Padding_left */
  paddingLeft?: Maybe<Scalars['String']>;
  /** Padding_right */
  paddingRight?: Maybe<Scalars['String']>;
  /** Padding_top */
  paddingTop?: Maybe<Scalars['String']>;
  /** Padding_units */
  paddingUnits?: Maybe<Scalars['String']>;
  /** Radius_units */
  radiusUnits?: Maybe<Scalars['String']>;
  /** Width */
  width?: Maybe<Scalars['String']>;
};

export type VesMegamenuDataMenuTreeItemInterface = {
  /** After_html */
  afterHtml?: Maybe<Scalars['String']>;
  /** Update_time */
  align?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  animationIn?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  animationTime?: Maybe<Scalars['String']>;
  /** Before_html */
  beforeHtml?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  bgColor?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  bgHoverColor?: Maybe<Scalars['String']>;
  /** Caret */
  caret?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  category?: Maybe<Scalars['String']>;
  /** Disable_bellow */
  childCol?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  childColType?: Maybe<Scalars['String']>;
  /** Child_nodes */
  childNodes?: Maybe<Array<Maybe<VesMegamenuDataMenuTreeItemInterface>>>;
  /** Structure */
  classes?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  color?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  contentHtml?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  contentType?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  contentWidth?: Maybe<Scalars['String']>;
  /** Event */
  disableBellow?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  dropdownBgcolor?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  dropdownBgimage?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  dropdownBgimagerepeat?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  dropdownBgpositionx?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  dropdownBgpositiony?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  dropdownInlinecss?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  footerHtml?: Maybe<Scalars['String']>;
  /** Current_version */
  headerHtml?: Maybe<Scalars['String']>;
  /** Hover_caret */
  hoverCaret?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  hoverColor?: Maybe<Scalars['String']>;
  /** Hover_icon */
  hoverIcon?: Maybe<Scalars['String']>;
  /** Width */
  icon?: Maybe<Scalars['String']>;
  /** Design */
  iconClasses?: Maybe<Scalars['String']>;
  /** Desktop_template */
  iconPosition?: Maybe<Scalars['String']>;
  /** Inline_css */
  inlinceCss?: Maybe<Scalars['String']>;
  /** Params */
  isGroup?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  isgroupLevel?: Maybe<Scalars['String']>;
  /** Item_id */
  itemId?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  leftSidebarHtml?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  leftSidebarWidth?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  link?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  linkType?: Maybe<Scalars['String']>;
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  parentcat?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  rightSidebarHtml?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  rightSidebarWidth?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  showContent?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  showFooter?: Maybe<Scalars['String']>;
  /** Scrolltofix */
  showHeader?: Maybe<Scalars['String']>;
  /** Classes */
  showIcon?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  showLeftSidebar?: Maybe<Scalars['String']>;
  /** Show_name */
  showName?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  showRightSidebar?: Maybe<Scalars['String']>;
  /** Disable_iblocks */
  status?: Maybe<Scalars['String']>;
  /** Sub_height */
  subHeight?: Maybe<Scalars['String']>;
  /** Creation_time */
  subWidth?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  submenuSorttype?: Maybe<Scalars['String']>;
  /** Tab_position */
  tabPosition?: Maybe<Scalars['String']>;
  /** Mobile_menu_alias */
  target?: Maybe<Scalars['String']>;
};

export type Mutation = {
  /**
   *
   *
   * Equivalent to PUT /V1/amazon-billing-address/{amazonOrderReferenceId}
   */
  amazonPaymentAddressManagementV1GetBillingAddressPut?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to PUT /V1/amazon-shipping-address/{amazonOrderReferenceId}
   */
  amazonPaymentAddressManagementV1GetShippingAddressPut?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to DELETE /V1/amazon/order-ref
   */
  amazonPaymentOrderInformationManagementV1RemoveOrderReferenceDelete?: Maybe<ErrorResponse>;
  /**
   * Set payment information and place order for a specified cart.
   *
   * Equivalent to POST /V1/guest-carts/{cartId}/payment-information
   */
  checkoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost?: Maybe<Scalars['Int']>;
  /**
   * Set payment information for a specified cart.
   *
   * Equivalent to POST /V1/guest-carts/{cartId}/set-payment-information
   */
  checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost?: Maybe<Scalars['Int']>;
  /**
   *
   *
   * Equivalent to POST /V1/guest-carts/{cartId}/shipping-information
   */
  checkoutGuestShippingInformationManagementV1SaveAddressInformationPost?: Maybe<CheckoutDataPaymentDetailsInterface>;
  /**
   * Calculate quote totals based on address and shipping method.
   *
   * Equivalent to POST /V1/guest-carts/{cartId}/totals-information
   */
  checkoutGuestTotalsInformationManagementV1CalculatePost?: Maybe<QuoteDataTotalsInterface>;
  /**
   * Create customer account. Perform necessary business operations like sending email.
   *
   * Equivalent to POST /V1/customers
   */
  customerAccountManagementV1CreateAccountPost?: Maybe<CustomerDataCustomerInterface>;
  /**
   * Send an email to the customer with a password reset link.
   *
   * Equivalent to PUT /V1/customers/password
   */
  customerAccountManagementV1InitiatePasswordResetPut?: Maybe<Scalars['Boolean']>;
  /**
   * Check if given email is associated with a customer account in given website.
   *
   * Equivalent to POST /V1/customers/isEmailAvailable
   */
  customerAccountManagementV1IsEmailAvailablePost?: Maybe<Scalars['Boolean']>;
  /**
   * Reset customer password.
   *
   * Equivalent to POST /V1/customers/resetPassword
   */
  customerAccountManagementV1ResetPasswordPost?: Maybe<Scalars['Boolean']>;
  /**
   * Send And Save request.
   *
   * Equivalent to POST /V1/contact/post
   */
  ecomteckAdvancedContactRequestRepositoryV1SavePost?: Maybe<EcomteckAdvancedContactDataRequestInterface>;
  /**
   * Set the gift message for an entire order.
   *
   * Equivalent to POST /V1/guest-carts/{cartId}/gift-message
   */
  giftMessageGuestCartRepositoryV1SavePost?: Maybe<Scalars['Boolean']>;
  /**
   * Set the gift message for a specified item in a specified shopping cart.
   *
   * Equivalent to POST /V1/guest-carts/{cartId}/gift-message/{itemId}
   */
  giftMessageGuestItemRepositoryV1SavePost?: Maybe<Scalars['Boolean']>;
  /**
   * Create access token for admin given the admin credentials.
   *
   * Equivalent to POST /V1/integration/admin/token
   */
  integrationAdminTokenServiceV1CreateAdminAccessTokenPost?: Maybe<Scalars['String']>;
  /**
   * Create access token for admin given the customer credentials.
   *
   * Equivalent to POST /V1/integration/customer/token
   */
  integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost?: Maybe<Scalars['String']>;
  /**
   * Delete chatwoot by ID
   *
   * Equivalent to DELETE /V1/lof-chatwoot/chatwoot/{chatwootId}
   */
  lofChatWootChatwootRepositoryV1DeleteByIdDelete?: Maybe<Scalars['Boolean']>;
  /**
   * Save chatwoot
   *
   * Equivalent to POST /V1/lof-chatwoot/chatwoot
   */
  lofChatWootChatwootRepositoryV1SavePost?: Maybe<LofChatWootDataChatwootInterface>;
  /**
   * Save chatwoot
   *
   * Equivalent to PUT /V1/lof-chatwoot/chatwoot/{chatwootId}
   */
  lofChatWootChatwootRepositoryV1SavePut?: Maybe<LofChatWootDataChatwootInterface>;
  /**
   * Save chatwoot
   *
   * Equivalent to PUT /V1/lof-chatwoot/chatwoot/{sellerId}
   */
  lofChatWootChatwootRepositoryV1UpdateChatPut?: Maybe<LofChatWootDataChatwootInterface>;
  /**
   * POST create Seller Order
   *
   * Equivalent to POST /V1/seller/createorder/{orderId}
   */
  lofMarketPlaceSalesRepositoryV1CreateSellerOrderPost?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /V1/seller/register
   */
  lofMarketPlaceSellersRepositoryV1RegisterNewSellerPost?: Maybe<LofMarketPlaceDataSellerInterface>;
  /**
   * Save review Reply by guest.
   *
   * Equivalent to POST /V1/reviews/guest/reply
   */
  lofProductReviewsReviewRepositoryV1ReplyByGuestPost?: Maybe<LofProductReviewsDataReplyInterface>;
  /**
   * Apple Login
   *
   * Equivalent to POST /V1/lofmobile/appleLogin
   */
  lofmobileSocialLoginV1AppleLoginPost?: Maybe<Scalars['String']>;
  /**
   * Social Login
   *
   * Equivalent to POST /V1/lofmobile/social_login
   */
  lofmobileSocialLoginV1LoginPost?: Maybe<Scalars['String']>;
  /**
   * Set payment information and place order for a specified cart.
   *
   * Equivalent to POST /V1/splitCartGuest/{cartId}/{sellerUrl}/payment-information
   */
  lofmpSplitCartGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost?: Maybe<Scalars['Int']>;
  /**
   * Init Split cart for guest
   *
   * Equivalent to POST /V1/splitCartGuest/{cartId}/{sellerUrl}/init-checkout
   */
  lofmpSplitCartQuoteRepositoryV1InitSplitOrderGuestPost?: Maybe<LofmpSplitCartDataQuoteInterface>;
  /**
   * Delete split cart for guest, clear split cart for guest
   *
   * Equivalent to DELETE /V1/splitCartGuest/remove/{cartId}
   */
  lofmpSplitCartQuoteRepositoryV1RemoveSplitCartGuestDelete?: Maybe<Scalars['Boolean']>;
  /**
   * Assign a specified billing address to a specified cart.
   *
   * Equivalent to POST /V1/guest-carts/{cartId}/billing-address
   */
  quoteGuestBillingAddressManagementV1AssignPost?: Maybe<Scalars['Int']>;
  /**
   * Remove the specified item from the specified cart.
   *
   * Equivalent to DELETE /V1/guest-carts/{cartId}/items/{itemId}
   */
  quoteGuestCartItemRepositoryV1DeleteByIdDelete?: Maybe<Scalars['Boolean']>;
  /**
   * Add/update the specified cart item.
   *
   * Equivalent to POST /V1/guest-carts/{cartId}/items
   */
  quoteGuestCartItemRepositoryV1SavePost?: Maybe<QuoteDataCartItemInterface>;
  /**
   * Add/update the specified cart item.
   *
   * Equivalent to PUT /V1/guest-carts/{cartId}/items/{itemId}
   */
  quoteGuestCartItemRepositoryV1SavePut?: Maybe<QuoteDataCartItemInterface>;
  /**
   * Enable an customer or guest user to create an empty cart and quote for an anonymous customer.
   *
   * Equivalent to POST /V1/guest-carts
   */
  quoteGuestCartManagementV1CreateEmptyCartPost?: Maybe<Scalars['String']>;
  /**
   * Place an order for a specified cart.
   *
   * Equivalent to PUT /V1/guest-carts/{cartId}/order
   */
  quoteGuestCartManagementV1PlaceOrderPut?: Maybe<Scalars['Int']>;
  /**
   * Set shipping/billing methods and additional data for cart and collect totals for guest.
   *
   * Equivalent to PUT /V1/guest-carts/{cartId}/collect-totals
   */
  quoteGuestCartTotalManagementV1CollectTotalsPut?: Maybe<QuoteDataTotalsInterface>;
  /**
   * Delete a coupon from a specified cart.
   *
   * Equivalent to DELETE /V1/guest-carts/{cartId}/coupons
   */
  quoteGuestCouponManagementV1RemoveDelete?: Maybe<Scalars['Boolean']>;
  /**
   * Add a coupon by code to a specified cart.
   *
   * Equivalent to PUT /V1/guest-carts/{cartId}/coupons/{couponCode}
   */
  quoteGuestCouponManagementV1SetPut?: Maybe<Scalars['Boolean']>;
  /**
   * Add a specified payment method to a specified shopping cart.
   *
   * Equivalent to PUT /V1/guest-carts/{cartId}/selected-payment-method
   */
  quoteGuestPaymentMethodManagementV1SetPut?: Maybe<Scalars['Int']>;
  /**
   * Estimate shipping by address and return list of available shipping methods
   *
   * Equivalent to POST /V1/guest-carts/{cartId}/estimate-shipping-methods
   */
  quoteGuestShipmentEstimationV1EstimateByExtendedAddressPost?: Maybe<Array<Maybe<QuoteDataShippingMethodInterface>>>;
  /**
   * Add a tracked event.
   *
   * Equivalent to POST /V1/elasticsuite-tracker/hit
   */
  smileElasticsuiteTrackerCustomerTrackingServiceV1HitPost?: Maybe<ErrorResponse>;
  /**
   *
   *
   * Equivalent to POST /V1/vertex-address-validation/vertex-address
   */
  vertexAddressValidationAddressManagementV1GetValidAddressPost?: Maybe<QuoteDataAddressInterface>;
  /**
   * Query Vertex to cleanse an address
   *
   * Equivalent to POST /V1/guest-address/cleanse
   */
  vertexAddressValidationApiGuestCleanseAddressV1CleanseAddressPost?: Maybe<VertexAddressValidationApiDataCleansedAddressInterface>;
  /**
   * Send Order Info to email address
   *
   * Equivalent to POST /V1/ves-trackorder/send
   */
  vesTrackorderTrackOrderRepositoryV1SendPost?: Maybe<Scalars['String']>;
  /**
   * Track Order Info
   *
   * Equivalent to POST /V1/ves-trackorder/track
   */
  vesTrackorderTrackOrderRepositoryV1TrackPost?: Maybe<SalesDataOrderInterface>;
};


export type MutationamazonPaymentAddressManagementV1GetBillingAddressPutArgs = {
  amazonOrderReferenceId: Scalars['String'];
  v1AmazonBillingAddressInput?: InputMaybe<V1AmazonBillingAddressInput>;
};


export type MutationamazonPaymentAddressManagementV1GetShippingAddressPutArgs = {
  amazonOrderReferenceId: Scalars['String'];
  v1AmazonShippingAddressInput?: InputMaybe<V1AmazonShippingAddressInput>;
};


export type MutationcheckoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPostArgs = {
  cartId: Scalars['String'];
  v1GuestCartPaymentInformationInput?: InputMaybe<V1GuestCartPaymentInformationInput>;
};


export type MutationcheckoutGuestPaymentInformationManagementV1SavePaymentInformationPostArgs = {
  cartId: Scalars['String'];
  v1GuestCartSetPaymentInformationInput?: InputMaybe<V1GuestCartSetPaymentInformationInput>;
};


export type MutationcheckoutGuestShippingInformationManagementV1SaveAddressInformationPostArgs = {
  cartId: Scalars['String'];
  v1GuestCartShippingInformationInput?: InputMaybe<V1GuestCartShippingInformationInput>;
};


export type MutationcheckoutGuestTotalsInformationManagementV1CalculatePostArgs = {
  cartId: Scalars['String'];
  v1GuestCartTotalsInformationInput?: InputMaybe<V1GuestCartTotalsInformationInput>;
};


export type MutationcustomerAccountManagementV1CreateAccountPostArgs = {
  v1CustomersInput?: InputMaybe<V1CustomersInput>;
};


export type MutationcustomerAccountManagementV1InitiatePasswordResetPutArgs = {
  v1CustomersPasswordInput?: InputMaybe<V1CustomersPasswordInput>;
};


export type MutationcustomerAccountManagementV1IsEmailAvailablePostArgs = {
  v1CustomersIsEmailAvailableInput?: InputMaybe<V1CustomersIsEmailAvailableInput>;
};


export type MutationcustomerAccountManagementV1ResetPasswordPostArgs = {
  v1CustomersResetPasswordInput?: InputMaybe<V1CustomersResetPasswordInput>;
};


export type MutationecomteckAdvancedContactRequestRepositoryV1SavePostArgs = {
  v1ContactPostInput?: InputMaybe<V1ContactPostInput>;
};


export type MutationgiftMessageGuestCartRepositoryV1SavePostArgs = {
  cartId: Scalars['String'];
  v1GuestCartGiftMessageInput?: InputMaybe<V1GuestCartGiftMessageInput>;
};


export type MutationgiftMessageGuestItemRepositoryV1SavePostArgs = {
  cartId: Scalars['String'];
  itemId: Scalars['Int'];
  v1GuestCartGiftMessageInput?: InputMaybe<V1GuestCartGiftMessageInput>;
};


export type MutationintegrationAdminTokenServiceV1CreateAdminAccessTokenPostArgs = {
  v1IntegrationAdminTokenInput?: InputMaybe<V1IntegrationAdminTokenInput>;
};


export type MutationintegrationCustomerTokenServiceV1CreateCustomerAccessTokenPostArgs = {
  v1IntegrationCustomerTokenInput?: InputMaybe<V1IntegrationCustomerTokenInput>;
};


export type MutationlofChatWootChatwootRepositoryV1DeleteByIdDeleteArgs = {
  chatwootId: Scalars['String'];
};


export type MutationlofChatWootChatwootRepositoryV1SavePostArgs = {
  v1LofChatwootChatwootInput?: InputMaybe<V1LofChatwootChatwootInput>;
};


export type MutationlofChatWootChatwootRepositoryV1SavePutArgs = {
  chatwootId: Scalars['String'];
  v1LofChatwootChatwootInput?: InputMaybe<V1LofChatwootChatwootInput>;
};


export type MutationlofChatWootChatwootRepositoryV1UpdateChatPutArgs = {
  sellerId: Scalars['Int'];
  v1LofChatwootChatwootInput?: InputMaybe<V1LofChatwootChatwootInput>;
};


export type MutationlofMarketPlaceSalesRepositoryV1CreateSellerOrderPostArgs = {
  orderId: Scalars['String'];
};


export type MutationlofMarketPlaceSellersRepositoryV1RegisterNewSellerPostArgs = {
  v1SellerRegisterInput?: InputMaybe<V1SellerRegisterInput>;
};


export type MutationlofProductReviewsReviewRepositoryV1ReplyByGuestPostArgs = {
  v1ReviewsGuestReplyInput?: InputMaybe<V1ReviewsGuestReplyInput>;
};


export type MutationlofmobileSocialLoginV1AppleLoginPostArgs = {
  v1LofmobileAppleLoginInput?: InputMaybe<V1LofmobileAppleLoginInput>;
};


export type MutationlofmobileSocialLoginV1LoginPostArgs = {
  v1LofmobileSocialLoginInput?: InputMaybe<V1LofmobileSocialLoginInput>;
};


export type MutationlofmpSplitCartGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPostArgs = {
  cartId: Scalars['String'];
  sellerUrl: Scalars['String'];
  v1SplitCartGuestPaymentInformationInput?: InputMaybe<V1SplitCartGuestPaymentInformationInput>;
};


export type MutationlofmpSplitCartQuoteRepositoryV1InitSplitOrderGuestPostArgs = {
  cartId: Scalars['String'];
  sellerUrl: Scalars['String'];
};


export type MutationlofmpSplitCartQuoteRepositoryV1RemoveSplitCartGuestDeleteArgs = {
  cartId: Scalars['String'];
};


export type MutationquoteGuestBillingAddressManagementV1AssignPostArgs = {
  cartId: Scalars['String'];
  v1GuestCartBillingAddressInput?: InputMaybe<V1GuestCartBillingAddressInput>;
};


export type MutationquoteGuestCartItemRepositoryV1DeleteByIdDeleteArgs = {
  cartId: Scalars['String'];
  itemId: Scalars['Int'];
};


export type MutationquoteGuestCartItemRepositoryV1SavePostArgs = {
  cartId: Scalars['String'];
  v1GuestCartItems2Input?: InputMaybe<V1GuestCartItems2Input>;
};


export type MutationquoteGuestCartItemRepositoryV1SavePutArgs = {
  cartId: Scalars['String'];
  itemId: Scalars['String'];
  v1GuestCartItemInput?: InputMaybe<V1GuestCartItemInput>;
};


export type MutationquoteGuestCartManagementV1PlaceOrderPutArgs = {
  cartId: Scalars['String'];
  v1GuestCartOrderInput?: InputMaybe<V1GuestCartOrderInput>;
};


export type MutationquoteGuestCartTotalManagementV1CollectTotalsPutArgs = {
  cartId: Scalars['String'];
  v1GuestCartCollectTotalsInput?: InputMaybe<V1GuestCartCollectTotalsInput>;
};


export type MutationquoteGuestCouponManagementV1RemoveDeleteArgs = {
  cartId: Scalars['String'];
};


export type MutationquoteGuestCouponManagementV1SetPutArgs = {
  cartId: Scalars['String'];
  couponCode: Scalars['String'];
};


export type MutationquoteGuestPaymentMethodManagementV1SetPutArgs = {
  cartId: Scalars['String'];
  v1GuestCartSelectedPaymentMethodInput?: InputMaybe<V1GuestCartSelectedPaymentMethodInput>;
};


export type MutationquoteGuestShipmentEstimationV1EstimateByExtendedAddressPostArgs = {
  cartId: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  v1GuestCartEstimateShippingMethodsInput?: InputMaybe<V1GuestCartEstimateShippingMethodsInput>;
};


export type MutationsmileElasticsuiteTrackerCustomerTrackingServiceV1HitPostArgs = {
  v1ElasticsuiteTrackerHitInput?: InputMaybe<V1ElasticsuiteTrackerHitInput>;
};


export type MutationvertexAddressValidationAddressManagementV1GetValidAddressPostArgs = {
  v1VertexAddressValidationVertexAddressInput?: InputMaybe<V1VertexAddressValidationVertexAddressInput>;
};


export type MutationvertexAddressValidationApiGuestCleanseAddressV1CleanseAddressPostArgs = {
  v1GuestAddressCleanseInput?: InputMaybe<V1GuestAddressCleanseInput>;
};


export type MutationvesTrackorderTrackOrderRepositoryV1SendPostArgs = {
  v1VesTrackorderSendInput?: InputMaybe<V1VesTrackorderSendInput>;
};


export type MutationvesTrackorderTrackOrderRepositoryV1TrackPostArgs = {
  v1VesTrackorderTrackInput?: InputMaybe<V1VesTrackorderTrackInput>;
};

export type V1AmazonBillingAddressInput = {
  addressConsentToken: Scalars['String'];
};

export type V1AmazonShippingAddressInput = {
  addressConsentToken: Scalars['String'];
};

export type ErrorResponse = {
  /** Error code */
  code?: Maybe<Scalars['Int']>;
  /** Errors list */
  errors?: Maybe<Array<Maybe<ErrorErrorsItem>>>;
  /** Error message */
  message: Scalars['String'];
  /** Error parameters list */
  parameters?: Maybe<Array<Maybe<ErrorParametersItem>>>;
  /** Stack trace */
  trace?: Maybe<Scalars['String']>;
};

/** Error details */
export type ErrorErrorsItem = {
  /** Error message */
  message?: Maybe<Scalars['String']>;
  /** Error parameters list */
  parameters?: Maybe<Array<Maybe<ErrorParametersItem>>>;
};

/** Error parameters item */
export type ErrorParametersItem = {
  /** Missing or invalid field name */
  fieldName?: Maybe<Scalars['String']>;
  /** Incorrect field value */
  fieldValue?: Maybe<Scalars['String']>;
  /** ACL resource */
  resources?: Maybe<Scalars['String']>;
};

export type V1GuestCartPaymentInformationInput = {
  /** Interface AddressInterface */
  billingAddress2?: InputMaybe<QuoteDataAddressInterfaceInput>;
  email: Scalars['String'];
  /** Interface PaymentInterface */
  paymentMethod: QuoteDataPaymentInterfaceInput;
};

/** Interface AddressInterface */
export type QuoteDataAddressInterfaceInput = {
  /** City name */
  city: Scalars['String'];
  /** Company */
  company?: InputMaybe<Scalars['String']>;
  /** Country id */
  countryId: Scalars['String'];
  /** Custom attributes values. */
  customAttributes?: InputMaybe<Array<InputMaybe<FrameworkAttributeInterfaceInput>>>;
  /** Customer address id */
  customerAddressId?: InputMaybe<Scalars['Int']>;
  /** Customer id */
  customerId?: InputMaybe<Scalars['Int']>;
  /** Billing/shipping email */
  email: Scalars['String'];
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\AddressInterface */
  extensionAttributes?: InputMaybe<QuoteDataAddressExtensionInterfaceInput>;
  /** Fax number */
  fax?: InputMaybe<Scalars['String']>;
  /** First name */
  firstname: Scalars['String'];
  /** Id */
  id?: InputMaybe<Scalars['Int']>;
  /** Last name */
  lastname: Scalars['String'];
  /** Middle name */
  middlename?: InputMaybe<Scalars['String']>;
  /** Postcode */
  postcode: Scalars['String'];
  /** Prefix */
  prefix?: InputMaybe<Scalars['String']>;
  /** Region name */
  region: Scalars['String'];
  /** Region code */
  regionCode: Scalars['String'];
  /** Region id */
  regionId: Scalars['Int'];
  /** Same as billing flag */
  sameAsBilling?: InputMaybe<Scalars['Int']>;
  /** Save in address book flag */
  saveInAddressBook?: InputMaybe<Scalars['Int']>;
  /** Street */
  street: Array<InputMaybe<Scalars['String']>>;
  /** Suffix */
  suffix?: InputMaybe<Scalars['String']>;
  /** Telephone number */
  telephone: Scalars['String'];
  /** Vat id */
  vatId?: InputMaybe<Scalars['String']>;
};

/** Interface for custom attribute value. */
export type FrameworkAttributeInterfaceInput = {
  /** Attribute code */
  attributeCode: Scalars['String'];
  /** Attribute value */
  value: Scalars['String'];
};

/** ExtensionInterface class for @see \Magento\Quote\Api\Data\AddressInterface */
export type QuoteDataAddressExtensionInterfaceInput = {
  discounts?: InputMaybe<Array<InputMaybe<SalesRuleDataRuleDiscountInterfaceInput>>>;
  pickupLocationCode?: InputMaybe<Scalars['String']>;
};

/** Rule discount Interface */
export type SalesRuleDataRuleDiscountInterfaceInput = {
  /** Discount Data Interface */
  discountData: SalesRuleDataDiscountDataInterfaceInput;
  /** Rule ID */
  ruleId: Scalars['Int'];
  /** Rule Label */
  ruleLabel: Scalars['String'];
};

/** Discount Data Interface */
export type SalesRuleDataDiscountDataInterfaceInput = {
  /** Amount */
  amount: Scalars['Float'];
  /** Base Amount */
  baseAmount: Scalars['Float'];
  /** Base Original Amount */
  baseOriginalAmount: Scalars['Float'];
  /** Original Amount */
  originalAmount: Scalars['Float'];
};

/** Interface PaymentInterface */
export type QuoteDataPaymentInterfaceInput = {
  /** Payment additional details */
  additionalData?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\PaymentInterface */
  extensionAttributes?: InputMaybe<QuoteDataPaymentExtensionInterfaceInput>;
  /** Payment method code */
  method: Scalars['String'];
  /** Purchase order number */
  poNumber?: InputMaybe<Scalars['String']>;
};

/** ExtensionInterface class for @see \Magento\Quote\Api\Data\PaymentInterface */
export type QuoteDataPaymentExtensionInterfaceInput = {
  agreementIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type V1GuestCartSetPaymentInformationInput = {
  /** Interface AddressInterface */
  billingAddress3?: InputMaybe<QuoteDataAddressInterfaceInput>;
  email: Scalars['String'];
  /** Interface PaymentInterface */
  paymentMethod: QuoteDataPaymentInterfaceInput;
};

export type V1GuestCartShippingInformationInput = {
  /** Interface ShippingInformationInterface */
  addressInformation: CheckoutDataShippingInformationInterfaceInput;
};

/** Interface ShippingInformationInterface */
export type CheckoutDataShippingInformationInterfaceInput = {
  /** Interface AddressInterface */
  billingAddress?: InputMaybe<QuoteDataAddressInterfaceInput>;
  /** Custom attributes values. */
  customAttributes?: InputMaybe<Array<InputMaybe<FrameworkAttributeInterfaceInput>>>;
  /** ExtensionInterface class for @see \Magento\Checkout\Api\Data\ShippingInformationInterface */
  extensionAttributes?: InputMaybe<Scalars['JSON']>;
  /** Interface AddressInterface */
  shippingAddress: QuoteDataAddressInterfaceInput;
  /** Carrier code */
  shippingCarrierCode: Scalars['String'];
  /** Shipping method code */
  shippingMethodCode: Scalars['String'];
};

export type V1GuestCartTotalsInformationInput = {
  /** Interface TotalsInformationInterface */
  addressInformation: CheckoutDataTotalsInformationInterfaceInput;
};

/** Interface TotalsInformationInterface */
export type CheckoutDataTotalsInformationInterfaceInput = {
  /** Interface AddressInterface */
  address: QuoteDataAddressInterfaceInput;
  /** Custom attributes values. */
  customAttributes?: InputMaybe<Array<InputMaybe<FrameworkAttributeInterfaceInput>>>;
  /** ExtensionInterface class for @see \Magento\Checkout\Api\Data\TotalsInformationInterface */
  extensionAttributes?: InputMaybe<Scalars['JSON']>;
  /** Carrier code */
  shippingCarrierCode?: InputMaybe<Scalars['String']>;
  /** Shipping method code */
  shippingMethodCode?: InputMaybe<Scalars['String']>;
};

export type V1CustomersInput = {
  /** Customer entity interface for API handling. */
  customer: CustomerDataCustomerInterfaceInput;
  password?: InputMaybe<Scalars['String']>;
  redirectUrl?: InputMaybe<Scalars['String']>;
};

/** Customer entity interface for API handling. */
export type CustomerDataCustomerInterfaceInput = {
  /** Customer addresses. */
  addresses?: InputMaybe<Array<InputMaybe<CustomerDataAddressInterfaceInput>>>;
  /** Confirmation */
  confirmation?: InputMaybe<Scalars['String']>;
  /** Created at time */
  createdAt?: InputMaybe<Scalars['String']>;
  /** Created in area */
  createdIn?: InputMaybe<Scalars['String']>;
  /** Custom attributes values. */
  customAttributes?: InputMaybe<Array<InputMaybe<FrameworkAttributeInterfaceInput>>>;
  /** Default billing address id */
  defaultBilling?: InputMaybe<Scalars['String']>;
  /** Default shipping address id */
  defaultShipping?: InputMaybe<Scalars['String']>;
  /** Disable auto group change flag. */
  disableAutoGroupChange?: InputMaybe<Scalars['Int']>;
  /** In keeping with current security and privacy best practices, be sure you are aware of any potential legal and security risks associated with the storage of customers’ full date of birth (month, day, year) along with other personal identifiers (e.g., full name) before collecting or processing such data. */
  dob?: InputMaybe<Scalars['String']>;
  /** Email address */
  email: Scalars['String'];
  /** ExtensionInterface class for @see \Magento\Customer\Api\Data\CustomerInterface */
  extensionAttributes?: InputMaybe<CustomerDataCustomerExtensionInterfaceInput>;
  /** First name */
  firstname: Scalars['String'];
  /** Gender */
  gender?: InputMaybe<Scalars['Int']>;
  /** Group id */
  groupId?: InputMaybe<Scalars['Int']>;
  /** Customer id */
  id?: InputMaybe<Scalars['Int']>;
  /** Last name */
  lastname: Scalars['String'];
  /** Middle name */
  middlename?: InputMaybe<Scalars['String']>;
  /** Prefix */
  prefix?: InputMaybe<Scalars['String']>;
  /** Store id */
  storeId?: InputMaybe<Scalars['Int']>;
  /** Suffix */
  suffix?: InputMaybe<Scalars['String']>;
  /** Tax Vat */
  taxvat?: InputMaybe<Scalars['String']>;
  /** Updated at time */
  updatedAt?: InputMaybe<Scalars['String']>;
  /** Website id */
  websiteId?: InputMaybe<Scalars['Int']>;
};

/** Customer address interface. */
export type CustomerDataAddressInterfaceInput = {
  /** City name */
  city?: InputMaybe<Scalars['String']>;
  /** Company */
  company?: InputMaybe<Scalars['String']>;
  /** Country code in ISO_3166-2 format */
  countryId?: InputMaybe<Scalars['String']>;
  /** Custom attributes values. */
  customAttributes?: InputMaybe<Array<InputMaybe<FrameworkAttributeInterfaceInput>>>;
  /** Customer ID */
  customerId?: InputMaybe<Scalars['Int']>;
  /** If this address is default billing address */
  defaultBilling?: InputMaybe<Scalars['Boolean']>;
  /** If this address is default shipping address. */
  defaultShipping?: InputMaybe<Scalars['Boolean']>;
  /** ExtensionInterface class for @see \Magento\Customer\Api\Data\AddressInterface */
  extensionAttributes?: InputMaybe<Scalars['JSON']>;
  /** Fax number */
  fax?: InputMaybe<Scalars['String']>;
  /** First name */
  firstname?: InputMaybe<Scalars['String']>;
  /** ID */
  id?: InputMaybe<Scalars['Int']>;
  /** Last name */
  lastname?: InputMaybe<Scalars['String']>;
  /** Middle name */
  middlename?: InputMaybe<Scalars['String']>;
  /** Postcode */
  postcode?: InputMaybe<Scalars['String']>;
  /** Prefix */
  prefix?: InputMaybe<Scalars['String']>;
  /** Customer address region interface. */
  region?: InputMaybe<CustomerDataRegionInterfaceInput>;
  /** Region ID */
  regionId?: InputMaybe<Scalars['Int']>;
  /** Street */
  street?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Suffix */
  suffix?: InputMaybe<Scalars['String']>;
  /** Telephone number */
  telephone?: InputMaybe<Scalars['String']>;
  /** Vat id */
  vatId?: InputMaybe<Scalars['String']>;
};

/** Customer address region interface. */
export type CustomerDataRegionInterfaceInput = {
  /** ExtensionInterface class for @see \Magento\Customer\Api\Data\RegionInterface */
  extensionAttributes?: InputMaybe<Scalars['JSON']>;
  /** Region */
  region: Scalars['String'];
  /** Region code */
  regionCode: Scalars['String'];
  /** Region id */
  regionId: Scalars['Int'];
};

/** ExtensionInterface class for @see \Magento\Customer\Api\Data\CustomerInterface */
export type CustomerDataCustomerExtensionInterfaceInput = {
  amazonId?: InputMaybe<Scalars['String']>;
  assistanceAllowed?: InputMaybe<Scalars['Int']>;
  isSubscribed?: InputMaybe<Scalars['Boolean']>;
  /** Extended customer custom attributes interface. */
  sellerAttributes?: InputMaybe<LofMarketPermissionsDataSellerCustomerInterfaceInput>;
  vertexCustomerCode?: InputMaybe<Scalars['String']>;
  vertexCustomerCountry?: InputMaybe<Scalars['String']>;
};

/** Extended customer custom attributes interface. */
export type LofMarketPermissionsDataSellerCustomerInterfaceInput = {
  /** Customer ID. */
  customerId?: InputMaybe<Scalars['Int']>;
  /** ExtensionInterface class for @see \Lof\MarketPermissions\Api\Data\SellerCustomerInterface */
  extensionAttributes?: InputMaybe<Scalars['JSON']>;
  /** Get job title. */
  jobTitle?: InputMaybe<Scalars['String']>;
  /** Seller ID. */
  sellerId?: InputMaybe<Scalars['Int']>;
  /** Customer status. */
  status?: InputMaybe<Scalars['Int']>;
  /** Get telephone. */
  telephone?: InputMaybe<Scalars['String']>;
};

export type V1CustomersPasswordInput = {
  email: Scalars['String'];
  template: Scalars['String'];
  websiteId2?: InputMaybe<Scalars['Int']>;
};

export type V1CustomersIsEmailAvailableInput = {
  customerEmail: Scalars['String'];
  /** If not set, will use the current websiteId */
  websiteId3?: InputMaybe<Scalars['Int']>;
};

export type V1CustomersResetPasswordInput = {
  /** If empty value given then the customer will be matched by the RP token. */
  email: Scalars['String'];
  newPassword: Scalars['String'];
  resetToken: Scalars['String'];
};

/** Interface RequestInterface */
export type EcomteckAdvancedContactDataRequestInterface = {
  /** Closed */
  closed?: Maybe<Scalars['Int']>;
  /** Code */
  code: Scalars['String'];
  /** Created */
  created: Scalars['String'];
  /** ID */
  id?: Maybe<Scalars['Int']>;
  /** Info */
  info: Array<Maybe<EcomteckAdvancedContactDataInfoInterface>>;
  /** Message */
  message: Scalars['String'];
  /** Updated */
  updated: Scalars['String'];
};

/** Interface InfoInterface */
export type EcomteckAdvancedContactDataInfoInterface = {
  /** Key */
  key?: Maybe<Scalars['String']>;
  /** Value */
  value?: Maybe<Scalars['String']>;
};

export type V1ContactPostInput = {
  /** Interface RequestInterface */
  request: EcomteckAdvancedContactDataRequestInterfaceInput;
};

/** Interface RequestInterface */
export type EcomteckAdvancedContactDataRequestInterfaceInput = {
  /** Closed */
  closed?: InputMaybe<Scalars['Int']>;
  /** Code */
  code: Scalars['String'];
  /** Created */
  created: Scalars['String'];
  /** ID */
  id?: InputMaybe<Scalars['Int']>;
  /** Info */
  info: Array<InputMaybe<EcomteckAdvancedContactDataInfoInterfaceInput>>;
  /** Message */
  message: Scalars['String'];
  /** Updated */
  updated: Scalars['String'];
};

/** Interface InfoInterface */
export type EcomteckAdvancedContactDataInfoInterfaceInput = {
  /** Key */
  key?: InputMaybe<Scalars['String']>;
  /** Value */
  value?: InputMaybe<Scalars['String']>;
};

export type V1GuestCartGiftMessageInput = {
  /** Interface MessageInterface */
  giftMessage: GiftMessageDataMessageInterfaceInput;
};

/** Interface MessageInterface */
export type GiftMessageDataMessageInterfaceInput = {
  /** Customer ID. Otherwise, null. */
  customerId?: InputMaybe<Scalars['Int']>;
  /** ExtensionInterface class for @see \Magento\GiftMessage\Api\Data\MessageInterface */
  extensionAttributes?: InputMaybe<GiftMessageDataMessageExtensionInterfaceInput>;
  /** Gift message ID. Otherwise, null. */
  giftMessageId?: InputMaybe<Scalars['Int']>;
  /** Message text. */
  message: Scalars['String'];
  /** Recipient name. */
  recipient: Scalars['String'];
  /** Sender name. */
  sender: Scalars['String'];
};

/** ExtensionInterface class for @see \Magento\GiftMessage\Api\Data\MessageInterface */
export type GiftMessageDataMessageExtensionInterfaceInput = {
  entityId?: InputMaybe<Scalars['String']>;
  entityType?: InputMaybe<Scalars['String']>;
};

export type V1IntegrationAdminTokenInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type V1IntegrationCustomerTokenInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type V1LofChatwootChatwootInput = {
  chatwoot: LofChatWootDataChatwootInterfaceInput;
};

export type LofChatWootDataChatwootInterfaceInput = {
  /** Agent_availability */
  agentAvailability?: InputMaybe<Scalars['Int']>;
  /** Agent_away_message */
  agentAwayMessage?: InputMaybe<Scalars['String']>;
  /** Agent_id */
  agentId?: InputMaybe<Scalars['Int']>;
  /** Agent_name */
  agentName?: InputMaybe<Scalars['String']>;
  /** Channel_id */
  channelId?: InputMaybe<Scalars['Int']>;
  /** Channel_name */
  channelName?: InputMaybe<Scalars['String']>;
  /** Channel_type */
  channelType?: InputMaybe<Scalars['String']>;
  /** Chatwoot_id */
  chatwootId?: InputMaybe<Scalars['Int']>;
  /** Created_at */
  createdAt?: InputMaybe<Scalars['String']>;
  /** Seller_id */
  sellerId?: InputMaybe<Scalars['Int']>;
  /** Team_id */
  teamId?: InputMaybe<Scalars['Int']>;
  /** Team_name */
  teamName?: InputMaybe<Scalars['String']>;
  /** Updated_at */
  updatedAt?: InputMaybe<Scalars['String']>;
  /** Website_token */
  websiteToken?: InputMaybe<Scalars['String']>;
  /** Welcome_tagline */
  welcomeTagline?: InputMaybe<Scalars['String']>;
  /** Welcome_title */
  welcomeTitle?: InputMaybe<Scalars['String']>;
  /** Widget_color */
  widgetColor?: InputMaybe<Scalars['String']>;
};

export type V1SellerRegisterInput = {
  /** Customer entity interface for API handling. */
  customer: CustomerDataCustomerInterfaceInput;
  data: LofMarketPlaceDataRegisterSellerInterfaceInput;
  password?: InputMaybe<Scalars['String']>;
};

export type LofMarketPlaceDataRegisterSellerInterfaceInput = {
  /** Address */
  address?: InputMaybe<Scalars['String']>;
  /** City */
  city?: InputMaybe<Scalars['String']>;
  /** Company */
  company?: InputMaybe<Scalars['String']>;
  /** Contact_number */
  contactNumber?: InputMaybe<Scalars['String']>;
  /** Country_id */
  countryId?: InputMaybe<Scalars['String']>;
  /** ExtensionInterface class for @see \Lof\MarketPlace\Api\Data\RegisterSellerInterface */
  extensionAttributes?: InputMaybe<Scalars['JSON']>;
  /** Group_id */
  groupId?: InputMaybe<Scalars['Int']>;
  /** Postcode */
  postcode?: InputMaybe<Scalars['String']>;
  /** Region */
  region?: InputMaybe<Scalars['String']>;
  /** Region_id */
  regionId?: InputMaybe<Scalars['Int']>;
  /** Shop_url */
  shopUrl?: InputMaybe<Scalars['String']>;
  /** Telephone */
  telephone?: InputMaybe<Scalars['String']>;
};

export type V1ReviewsGuestReplyInput = {
  /** Represents a ReviewVote object Used fully qualified namespaces in annotations for proper work of WebApi request parser */
  reply: LofProductReviewsDataReplyInterfaceInput;
};

/** Represents a ReviewVote object Used fully qualified namespaces in annotations for proper work of WebApi request parser */
export type LofProductReviewsDataReplyInterfaceInput = {
  /** Rating admin_user_id. */
  adminUserId?: InputMaybe<Scalars['Int']>;
  /** Rating avatar_url. */
  avatarUrl: Scalars['String'];
  /** Rating created_at. */
  createdAt: Scalars['String'];
  /** Rating customer_id. */
  customerId?: InputMaybe<Scalars['Int']>;
  /** Rating email_address. */
  emailAddress: Scalars['String'];
  /** Rating parent_reply_id. */
  parentReplyId?: InputMaybe<Scalars['Int']>;
  /** Rating reply_comment. */
  replyComment: Scalars['String'];
  /** Rating reply_customer_id id. */
  replyCustomerId?: InputMaybe<Scalars['Int']>;
  /** Rating reply id. */
  replyId?: InputMaybe<Scalars['Int']>;
  /** Rating reply_title. */
  replyTitle: Scalars['String'];
  /** Rating review_id. */
  reviewId: Scalars['Int'];
  /** Rating status. */
  status: Scalars['Int'];
  /** Rating updated_at. */
  updatedAt: Scalars['String'];
  /** Rating user_name. */
  userName: Scalars['String'];
  /** Rating website. */
  website: Scalars['String'];
};

export type V1LofmobileAppleLoginInput = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  token: Scalars['String'];
};

export type V1LofmobileSocialLoginInput = {
  token: Scalars['String'];
  type: Scalars['String'];
};

export type V1SplitCartGuestPaymentInformationInput = {
  /** Interface AddressInterface */
  billingAddress4?: InputMaybe<QuoteDataAddressInterfaceInput>;
  email: Scalars['String'];
  /** Interface PaymentInterface */
  paymentMethod: QuoteDataPaymentInterfaceInput;
};

export type LofmpSplitCartDataQuoteInterface = {
  /** Entity_id */
  entityId?: Maybe<Scalars['String']>;
  /** ExtensionInterface class for @see \Lofmp\SplitCart\Api\Data\QuoteInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Is_active */
  isActive?: Maybe<Scalars['String']>;
  /** Is_ordered */
  isOrdered?: Maybe<Scalars['String']>;
  /** Parent_id */
  parentId?: Maybe<Scalars['String']>;
  /** Quote_id */
  quoteId?: Maybe<Scalars['String']>;
  /** Seller_id */
  sellerId?: Maybe<Scalars['String']>;
};

export type V1GuestCartBillingAddressInput = {
  /** Interface AddressInterface */
  address: QuoteDataAddressInterfaceInput;
  useForShipping?: InputMaybe<Scalars['Boolean']>;
};

export type V1GuestCartItems2Input = {
  /** Interface CartItemInterface */
  cartItem: QuoteDataCartItemInterfaceInput;
};

/** Interface CartItemInterface */
export type QuoteDataCartItemInterfaceInput = {
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\CartItemInterface */
  extensionAttributes?: InputMaybe<QuoteDataCartItemExtensionInterfaceInput>;
  /** Item ID. Otherwise, null. */
  itemId?: InputMaybe<Scalars['Int']>;
  /** Product name. Otherwise, null. */
  name?: InputMaybe<Scalars['String']>;
  /** Product price. Otherwise, null. */
  price?: InputMaybe<Scalars['Float']>;
  /** Product option interface */
  productOption?: InputMaybe<QuoteDataProductOptionInterfaceInput>;
  /** Product type. Otherwise, null. */
  productType?: InputMaybe<Scalars['String']>;
  /** Product quantity. */
  qty: Scalars['Float'];
  /** Quote id. */
  quoteId: Scalars['String'];
  /** Product SKU. Otherwise, null. */
  sku?: InputMaybe<Scalars['String']>;
};

/** ExtensionInterface class for @see \Magento\Quote\Api\Data\CartItemInterface */
export type QuoteDataCartItemExtensionInterfaceInput = {
  discounts?: InputMaybe<Array<InputMaybe<SalesRuleDataRuleDiscountInterfaceInput>>>;
  sellerId?: InputMaybe<Scalars['Int']>;
  sellerName?: InputMaybe<Scalars['String']>;
  sellerUrl?: InputMaybe<Scalars['String']>;
};

/** Product option interface */
export type QuoteDataProductOptionInterfaceInput = {
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\ProductOptionInterface */
  extensionAttributes?: InputMaybe<QuoteDataProductOptionExtensionInterfaceInput>;
};

/** ExtensionInterface class for @see \Magento\Quote\Api\Data\ProductOptionInterface */
export type QuoteDataProductOptionExtensionInterfaceInput = {
  bundleOptions?: InputMaybe<Array<InputMaybe<BundleDataBundleOptionInterfaceInput>>>;
  configurableItemOptions?: InputMaybe<Array<InputMaybe<ConfigurableProductDataConfigurableItemOptionValueInterfaceInput>>>;
  customOptions?: InputMaybe<Array<InputMaybe<CatalogDataCustomOptionInterfaceInput>>>;
  /** Downloadable Option */
  downloadableOption?: InputMaybe<DownloadableDataDownloadableOptionInterfaceInput>;
  groupedOptions?: InputMaybe<Array<InputMaybe<GroupedProductDataGroupedOptionsInterfaceInput>>>;
};

/** Interface BundleOptionInterface */
export type BundleDataBundleOptionInterfaceInput = {
  /** ExtensionInterface class for @see \Magento\Bundle\Api\Data\BundleOptionInterface */
  extensionAttributes?: InputMaybe<Scalars['JSON']>;
  /** Bundle option id. */
  optionId: Scalars['Int'];
  /** Bundle option quantity. */
  optionQty: Scalars['Int'];
  /** Bundle option selection ids. */
  optionSelections: Array<InputMaybe<Scalars['Int']>>;
};

/** Interface ConfigurableItemOptionValueInterface */
export type ConfigurableProductDataConfigurableItemOptionValueInterfaceInput = {
  /** ExtensionInterface class for @see \Magento\ConfigurableProduct\Api\Data\ConfigurableItemOptionValueInterface */
  extensionAttributes?: InputMaybe<Scalars['JSON']>;
  /** Option SKU */
  optionId: Scalars['String'];
  /** Item id */
  optionValue?: InputMaybe<Scalars['Int']>;
};

/** Interface CustomOptionInterface */
export type CatalogDataCustomOptionInterfaceInput = {
  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\CustomOptionInterface */
  extensionAttributes?: InputMaybe<CatalogDataCustomOptionExtensionInterfaceInput>;
  /** Option id */
  optionId: Scalars['String'];
  /** Option value */
  optionValue: Scalars['String'];
};

/** ExtensionInterface class for @see \Magento\Catalog\Api\Data\CustomOptionInterface */
export type CatalogDataCustomOptionExtensionInterfaceInput = {
  /** Image Content data interface */
  fileInfo?: InputMaybe<FrameworkDataImageContentInterfaceInput>;
};

/** Image Content data interface */
export type FrameworkDataImageContentInterfaceInput = {
  /** Media data (base64 encoded content) */
  base64EncodedData: Scalars['String'];
  /** Image name */
  name: Scalars['String'];
  /** MIME type */
  type: Scalars['String'];
};

/** Downloadable Option */
export type DownloadableDataDownloadableOptionInterfaceInput = {
  /** The list of downloadable links */
  downloadableLinks: Array<InputMaybe<Scalars['Int']>>;
};

/** Represents `product item id with qty` of a grouped product. */
export type GroupedProductDataGroupedOptionsInterfaceInput = {
  /** ExtensionInterface class for @see \Magento\GroupedProduct\Api\Data\GroupedOptionsInterface */
  extensionAttributes?: InputMaybe<Scalars['JSON']>;
  /** Associated product id */
  id?: InputMaybe<Scalars['Int']>;
  /** Associated product qty */
  qty?: InputMaybe<Scalars['Int']>;
};

export type V1GuestCartItemInput = {
  /** Interface CartItemInterface */
  cartItem: QuoteDataCartItemInterfaceInput;
};

export type V1GuestCartOrderInput = {
  /** Interface PaymentInterface */
  paymentMethod?: InputMaybe<QuoteDataPaymentInterfaceInput>;
};

export type V1GuestCartCollectTotalsInput = {
  /** Additional data for totals collection. */
  additionalData2?: InputMaybe<QuoteDataTotalsAdditionalDataInterfaceInput>;
  /** Interface PaymentInterface */
  paymentMethod: QuoteDataPaymentInterfaceInput;
  /** The carrier code. */
  shippingCarrierCode2?: InputMaybe<Scalars['String']>;
  /** The shipping method code. */
  shippingMethodCode2?: InputMaybe<Scalars['String']>;
};

/** Additional data for totals collection. */
export type QuoteDataTotalsAdditionalDataInterfaceInput = {
  /** Custom attributes values. */
  customAttributes?: InputMaybe<Array<InputMaybe<FrameworkAttributeInterfaceInput>>>;
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalsAdditionalDataInterface */
  extensionAttributes?: InputMaybe<QuoteDataTotalsAdditionalDataExtensionInterfaceInput>;
};

/** ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalsAdditionalDataInterface */
export type QuoteDataTotalsAdditionalDataExtensionInterfaceInput = {
  giftMessages?: InputMaybe<Array<InputMaybe<GiftMessageDataMessageInterfaceInput>>>;
};

export type V1GuestCartSelectedPaymentMethodInput = {
  /** Interface PaymentInterface */
  method: QuoteDataPaymentInterfaceInput;
};

export type V1GuestCartEstimateShippingMethodsInput = {
  /** Interface AddressInterface */
  address: QuoteDataAddressInterfaceInput;
};

export type V1ElasticsuiteTrackerHitInput = {
  /** Event data. */
  eventData: Scalars['String'];
};

export type V1VertexAddressValidationVertexAddressInput = {
  /** Interface AddressInterface */
  address: QuoteDataAddressInterfaceInput;
};

/** What we want to output to the API contains more data than what we want to bring in.  Chiefly, we want to ensure we're sending Magento data out (instead of Vertex data). That means sending Region IDs, and 2-character ISO country codes. */
export type VertexAddressValidationApiDataCleansedAddressInterface = {
  city?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  countryName?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  regionId?: Maybe<Scalars['Int']>;
  regionName?: Maybe<Scalars['String']>;
  streetAddress: Array<Maybe<Scalars['String']>>;
  /** The regional sub division, such as a county or parish */
  subDivision?: Maybe<Scalars['String']>;
};

export type V1GuestAddressCleanseInput = {
  /** This is the interface for submission to the API.  For ease the API only takes interfaces the same as the SDK, but the SDK model cannot implement the interface.  Since the SDK model technically isn't API, we re-implement a simple DTO to handle the scenario. */
  address: VertexAddressValidationApiDataAddressInterfaceInput;
  /** Guest Cart ID (used for auth) */
  cartId: Scalars['String'];
  scopeCode2?: InputMaybe<Scalars['String']>;
  scopeType2?: InputMaybe<Scalars['String']>;
};

/** This is the interface for submission to the API.  For ease the API only takes interfaces the same as the SDK, but the SDK model cannot implement the interface.  Since the SDK model technically isn't API, we re-implement a simple DTO to handle the scenario. */
export type VertexAddressValidationApiDataAddressInterfaceInput = {
  /** The proper name of the city */
  city?: InputMaybe<Scalars['String']>;
  /** ISO 3166-1 Alpha-3 country code */
  country?: InputMaybe<Scalars['String']>;
  /** The proper name or the postal abbreviation of the state, province, or territory */
  mainDivision?: InputMaybe<Scalars['String']>;
  /** The Postal Code */
  postalCode?: InputMaybe<Scalars['String']>;
  /** The street address */
  streetAddress: Array<InputMaybe<Scalars['String']>>;
  /** The name of the county */
  subDivision?: InputMaybe<Scalars['String']>;
};

export type V1VesTrackorderSendInput = {
  code?: InputMaybe<Scalars['String']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  emailRecipient: Scalars['String'];
  invoiceId: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  orderId?: InputMaybe<Scalars['String']>;
};

/** Order interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer. */
export type SalesDataOrderInterface = {
  /** Negative adjustment value. */
  adjustmentNegative?: Maybe<Scalars['Float']>;
  /** Positive adjustment value. */
  adjustmentPositive?: Maybe<Scalars['Float']>;
  /** Applied rule IDs. */
  appliedRuleIds?: Maybe<Scalars['String']>;
  /** Base negative adjustment value. */
  baseAdjustmentNegative?: Maybe<Scalars['Float']>;
  /** Base positive adjustment value. */
  baseAdjustmentPositive?: Maybe<Scalars['Float']>;
  /** Base currency code. */
  baseCurrencyCode?: Maybe<Scalars['String']>;
  /** Base discount amount. */
  baseDiscountAmount?: Maybe<Scalars['Float']>;
  /** Base discount canceled. */
  baseDiscountCanceled?: Maybe<Scalars['Float']>;
  /** Base discount invoiced. */
  baseDiscountInvoiced?: Maybe<Scalars['Float']>;
  /** Base discount refunded. */
  baseDiscountRefunded?: Maybe<Scalars['Float']>;
  /** Base discount tax compensation amount. */
  baseDiscountTaxCompensationAmount?: Maybe<Scalars['Float']>;
  /** Base discount tax compensation invoiced. */
  baseDiscountTaxCompensationInvoiced?: Maybe<Scalars['Float']>;
  /** Base discount tax compensation refunded. */
  baseDiscountTaxCompensationRefunded?: Maybe<Scalars['Float']>;
  /** Base grand total. */
  baseGrandTotal: Scalars['Float'];
  /** Base shipping amount. */
  baseShippingAmount?: Maybe<Scalars['Float']>;
  /** Base shipping canceled. */
  baseShippingCanceled?: Maybe<Scalars['Float']>;
  /** Base shipping discount amount. */
  baseShippingDiscountAmount?: Maybe<Scalars['Float']>;
  /** Base shipping discount tax compensation amount. */
  baseShippingDiscountTaxCompensationAmnt?: Maybe<Scalars['Float']>;
  /** Base shipping including tax. */
  baseShippingInclTax?: Maybe<Scalars['Float']>;
  /** Base shipping invoiced. */
  baseShippingInvoiced?: Maybe<Scalars['Float']>;
  /** Base shipping refunded. */
  baseShippingRefunded?: Maybe<Scalars['Float']>;
  /** Base shipping tax amount. */
  baseShippingTaxAmount?: Maybe<Scalars['Float']>;
  /** Base shipping tax refunded. */
  baseShippingTaxRefunded?: Maybe<Scalars['Float']>;
  /** Base subtotal. */
  baseSubtotal?: Maybe<Scalars['Float']>;
  /** Base subtotal canceled. */
  baseSubtotalCanceled?: Maybe<Scalars['Float']>;
  /** Base subtotal including tax. */
  baseSubtotalInclTax?: Maybe<Scalars['Float']>;
  /** Base subtotal invoiced. */
  baseSubtotalInvoiced?: Maybe<Scalars['Float']>;
  /** Base subtotal refunded. */
  baseSubtotalRefunded?: Maybe<Scalars['Float']>;
  /** Base tax amount. */
  baseTaxAmount?: Maybe<Scalars['Float']>;
  /** Base tax canceled. */
  baseTaxCanceled?: Maybe<Scalars['Float']>;
  /** Base tax invoiced. */
  baseTaxInvoiced?: Maybe<Scalars['Float']>;
  /** Base tax refunded. */
  baseTaxRefunded?: Maybe<Scalars['Float']>;
  /** Base-to-global rate. */
  baseToGlobalRate?: Maybe<Scalars['Float']>;
  /** Base-to-order rate. */
  baseToOrderRate?: Maybe<Scalars['Float']>;
  /** Base total canceled. */
  baseTotalCanceled?: Maybe<Scalars['Float']>;
  /** Base total due. */
  baseTotalDue?: Maybe<Scalars['Float']>;
  /** Base total invoiced. */
  baseTotalInvoiced?: Maybe<Scalars['Float']>;
  /** Base total invoiced cost. */
  baseTotalInvoicedCost?: Maybe<Scalars['Float']>;
  /** Base total offline refunded. */
  baseTotalOfflineRefunded?: Maybe<Scalars['Float']>;
  /** Base total online refunded. */
  baseTotalOnlineRefunded?: Maybe<Scalars['Float']>;
  /** Base total paid. */
  baseTotalPaid?: Maybe<Scalars['Float']>;
  /** Base total quantity ordered. */
  baseTotalQtyOrdered?: Maybe<Scalars['Float']>;
  /** Base total refunded. */
  baseTotalRefunded?: Maybe<Scalars['Float']>;
  /** Order address interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer. */
  billingAddress?: Maybe<SalesDataOrderAddressInterface>;
  /** Billing address ID. */
  billingAddressId?: Maybe<Scalars['Int']>;
  /** Can-ship-partially flag value. */
  canShipPartially?: Maybe<Scalars['Int']>;
  /** Can-ship-partially-item flag value. */
  canShipPartiallyItem?: Maybe<Scalars['Int']>;
  /** Coupon code. */
  couponCode?: Maybe<Scalars['String']>;
  /** Created-at timestamp. */
  createdAt?: Maybe<Scalars['String']>;
  /** In keeping with current security and privacy best practices, be sure you are aware of any potential legal and security risks associated with the storage of customers’ full date of birth (month, day, year) along with other personal identifiers (e.g., full name) before collecting or processing such data. */
  customerDob?: Maybe<Scalars['String']>;
  /** Customer email address. */
  customerEmail2: Scalars['String'];
  /** Customer first name. */
  customerFirstname?: Maybe<Scalars['String']>;
  /** Customer gender. */
  customerGender?: Maybe<Scalars['Int']>;
  /** Customer group ID. */
  customerGroupId?: Maybe<Scalars['Int']>;
  /** Customer ID. */
  customerId?: Maybe<Scalars['Int']>;
  /** Customer-is-guest flag value. */
  customerIsGuest?: Maybe<Scalars['Int']>;
  /** Customer last name. */
  customerLastname?: Maybe<Scalars['String']>;
  /** Customer middle name. */
  customerMiddlename?: Maybe<Scalars['String']>;
  /** Customer note. */
  customerNote?: Maybe<Scalars['String']>;
  /** Customer-note-notify flag value. */
  customerNoteNotify?: Maybe<Scalars['Int']>;
  /** Customer prefix. */
  customerPrefix?: Maybe<Scalars['String']>;
  /** Customer suffix. */
  customerSuffix?: Maybe<Scalars['String']>;
  /** Customer value-added tax (VAT). */
  customerTaxvat?: Maybe<Scalars['String']>;
  /** Discount amount. */
  discountAmount?: Maybe<Scalars['Float']>;
  /** Discount canceled. */
  discountCanceled?: Maybe<Scalars['Float']>;
  /** Discount description. */
  discountDescription?: Maybe<Scalars['String']>;
  /** Discount invoiced. */
  discountInvoiced?: Maybe<Scalars['Float']>;
  /** Discount refunded amount. */
  discountRefunded?: Maybe<Scalars['Float']>;
  /** Discount tax compensation amount. */
  discountTaxCompensationAmount?: Maybe<Scalars['Float']>;
  /** Discount tax compensation invoiced amount. */
  discountTaxCompensationInvoiced?: Maybe<Scalars['Float']>;
  /** Discount tax compensation refunded amount. */
  discountTaxCompensationRefunded?: Maybe<Scalars['Float']>;
  /** Edit increment value. */
  editIncrement?: Maybe<Scalars['Int']>;
  /** Email-sent flag value. */
  emailSent?: Maybe<Scalars['Int']>;
  /** Order ID. */
  entityId?: Maybe<Scalars['Int']>;
  /** External customer ID. */
  extCustomerId?: Maybe<Scalars['String']>;
  /** External order ID. */
  extOrderId?: Maybe<Scalars['String']>;
  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderInterface */
  extensionAttributes?: Maybe<SalesDataOrderExtensionInterface>;
  /** Forced-shipment-with-invoice flag value. */
  forcedShipmentWithInvoice?: Maybe<Scalars['Int']>;
  /** Global currency code. */
  globalCurrencyCode?: Maybe<Scalars['String']>;
  /** Grand total. */
  grandTotal: Scalars['Float'];
  /** Hold before state. */
  holdBeforeState?: Maybe<Scalars['String']>;
  /** Hold before status. */
  holdBeforeStatus?: Maybe<Scalars['String']>;
  /** Increment ID. */
  incrementId?: Maybe<Scalars['String']>;
  /** Is-virtual flag value. */
  isVirtual?: Maybe<Scalars['Int']>;
  /** Array of items. */
  items: Array<Maybe<SalesDataOrderItemInterface>>;
  /** Order currency code. */
  orderCurrencyCode?: Maybe<Scalars['String']>;
  /** Original increment ID. */
  originalIncrementId?: Maybe<Scalars['String']>;
  /** Order payment interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer. */
  payment?: Maybe<SalesDataOrderPaymentInterface>;
  /** Payment authorization expiration date. */
  paymentAuthExpiration?: Maybe<Scalars['Int']>;
  /** Payment authorization amount. */
  paymentAuthorizationAmount?: Maybe<Scalars['Float']>;
  /** Protect code. */
  protectCode?: Maybe<Scalars['String']>;
  /** Quote address ID. */
  quoteAddressId?: Maybe<Scalars['Int']>;
  /** Quote ID. */
  quoteId?: Maybe<Scalars['Int']>;
  /** Relation child ID. */
  relationChildId?: Maybe<Scalars['String']>;
  /** Relation child real ID. */
  relationChildRealId?: Maybe<Scalars['String']>;
  /** Relation parent ID. */
  relationParentId?: Maybe<Scalars['String']>;
  /** Relation parent real ID. */
  relationParentRealId?: Maybe<Scalars['String']>;
  /** Remote IP address. */
  remoteIp?: Maybe<Scalars['String']>;
  /** Shipping amount. */
  shippingAmount?: Maybe<Scalars['Float']>;
  /** Shipping canceled amount. */
  shippingCanceled?: Maybe<Scalars['Float']>;
  /** Shipping description. */
  shippingDescription?: Maybe<Scalars['String']>;
  /** Shipping discount amount. */
  shippingDiscountAmount?: Maybe<Scalars['Float']>;
  /** Shipping discount tax compensation amount. */
  shippingDiscountTaxCompensationAmount?: Maybe<Scalars['Float']>;
  /** Shipping including tax amount. */
  shippingInclTax?: Maybe<Scalars['Float']>;
  /** Shipping invoiced amount. */
  shippingInvoiced?: Maybe<Scalars['Float']>;
  /** Shipping refunded amount. */
  shippingRefunded?: Maybe<Scalars['Float']>;
  /** Shipping tax amount. */
  shippingTaxAmount?: Maybe<Scalars['Float']>;
  /** Shipping tax refunded amount. */
  shippingTaxRefunded?: Maybe<Scalars['Float']>;
  /** State. */
  state?: Maybe<Scalars['String']>;
  /** Status. */
  status?: Maybe<Scalars['String']>;
  /** Array of status histories. */
  statusHistories?: Maybe<Array<Maybe<SalesDataOrderStatusHistoryInterface>>>;
  /** Store currency code. */
  storeCurrencyCode?: Maybe<Scalars['String']>;
  /** Store ID. */
  storeId?: Maybe<Scalars['Int']>;
  /** Store name. */
  storeName?: Maybe<Scalars['String']>;
  /** Store-to-base rate. */
  storeToBaseRate?: Maybe<Scalars['Float']>;
  /** Store-to-order rate. */
  storeToOrderRate?: Maybe<Scalars['Float']>;
  /** Subtotal. */
  subtotal?: Maybe<Scalars['Float']>;
  /** Subtotal canceled amount. */
  subtotalCanceled?: Maybe<Scalars['Float']>;
  /** Subtotal including tax amount. */
  subtotalInclTax?: Maybe<Scalars['Float']>;
  /** Subtotal invoiced amount. */
  subtotalInvoiced?: Maybe<Scalars['Float']>;
  /** Subtotal refunded amount. */
  subtotalRefunded?: Maybe<Scalars['Float']>;
  /** Tax amount. */
  taxAmount?: Maybe<Scalars['Float']>;
  /** Tax canceled amount. */
  taxCanceled?: Maybe<Scalars['Float']>;
  /** Tax invoiced amount. */
  taxInvoiced?: Maybe<Scalars['Float']>;
  /** Tax refunded amount. */
  taxRefunded?: Maybe<Scalars['Float']>;
  /** Total canceled. */
  totalCanceled?: Maybe<Scalars['Float']>;
  /** Total due. */
  totalDue?: Maybe<Scalars['Float']>;
  /** Total invoiced amount. */
  totalInvoiced?: Maybe<Scalars['Float']>;
  /** Total item count. */
  totalItemCount?: Maybe<Scalars['Int']>;
  /** Total offline refunded amount. */
  totalOfflineRefunded?: Maybe<Scalars['Float']>;
  /** Total online refunded amount. */
  totalOnlineRefunded?: Maybe<Scalars['Float']>;
  /** Total paid. */
  totalPaid?: Maybe<Scalars['Float']>;
  /** Total quantity ordered. */
  totalQtyOrdered?: Maybe<Scalars['Float']>;
  /** Total amount refunded. */
  totalRefunded?: Maybe<Scalars['Float']>;
  /** Updated-at timestamp. */
  updatedAt?: Maybe<Scalars['String']>;
  /** Weight. */
  weight?: Maybe<Scalars['Float']>;
  /** X-Forwarded-For field value. */
  xForwardedFor?: Maybe<Scalars['String']>;
};

/** Order address interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer. */
export type SalesDataOrderAddressInterface = {
  /** Address type. */
  addressType: Scalars['String'];
  /** City. */
  city: Scalars['String'];
  /** Company. */
  company?: Maybe<Scalars['String']>;
  /** Country ID. */
  countryId: Scalars['String'];
  /** Country address ID. */
  customerAddressId?: Maybe<Scalars['Int']>;
  /** Customer ID. */
  customerId?: Maybe<Scalars['Int']>;
  /** Email address. */
  email?: Maybe<Scalars['String']>;
  /** Order address ID. */
  entityId?: Maybe<Scalars['Int']>;
  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderAddressInterface */
  extensionAttributes?: Maybe<SalesDataOrderAddressExtensionInterface>;
  /** Fax number. */
  fax?: Maybe<Scalars['String']>;
  /** First name. */
  firstname: Scalars['String'];
  /** Last name. */
  lastname: Scalars['String'];
  /** Middle name. */
  middlename?: Maybe<Scalars['String']>;
  /** Parent ID. */
  parentId?: Maybe<Scalars['Int']>;
  /** Postal code. */
  postcode: Scalars['String'];
  /** Prefix. */
  prefix?: Maybe<Scalars['String']>;
  /** Region. */
  region?: Maybe<Scalars['String']>;
  /** Region code. */
  regionCode?: Maybe<Scalars['String']>;
  /** Region ID. */
  regionId?: Maybe<Scalars['Int']>;
  /** Array of any street values. Otherwise, null. */
  street?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Suffix. */
  suffix?: Maybe<Scalars['String']>;
  /** Telephone number. */
  telephone: Scalars['String'];
  /** VAT ID. */
  vatId?: Maybe<Scalars['String']>;
  /** VAT-is-valid flag value. */
  vatIsValid?: Maybe<Scalars['Int']>;
  /** VAT request date. */
  vatRequestDate?: Maybe<Scalars['String']>;
  /** VAT request ID. */
  vatRequestId?: Maybe<Scalars['String']>;
  /** VAT-request-success flag value. */
  vatRequestSuccess?: Maybe<Scalars['Int']>;
};

/** ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderAddressInterface */
export type SalesDataOrderAddressExtensionInterface = {
  vertexVatCountryCode?: Maybe<Scalars['String']>;
};

/** ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderInterface */
export type SalesDataOrderExtensionInterface = {
  amazonOrderReferenceId?: Maybe<AmazonPaymentDataOrderLinkInterface>;
  appliedTaxes?: Maybe<Array<Maybe<TaxDataOrderTaxDetailsAppliedTaxInterface>>>;
  convertingFromQuote?: Maybe<Scalars['Boolean']>;
  /** Interface MessageInterface */
  giftMessage2?: Maybe<GiftMessageDataMessageInterface>;
  itemAppliedTaxes?: Maybe<Array<Maybe<TaxDataOrderTaxDetailsItemInterface>>>;
  notificationSent?: Maybe<Scalars['Int']>;
  orderPlacePoint?: Maybe<Scalars['String']>;
  paymentAdditionalInfo?: Maybe<Array<Maybe<PaymentDataPaymentAdditionalInfoInterface>>>;
  pickupLocationCode?: Maybe<Scalars['String']>;
  sendNotification?: Maybe<Scalars['Int']>;
  shippingAssignments?: Maybe<Array<Maybe<SalesDataShippingAssignmentInterface>>>;
};

export type AmazonPaymentDataOrderLinkInterface = {
  /** Amazon order reference id */
  amazonOrderReferenceId: Scalars['String'];
  /** Order id */
  orderId: Scalars['Int'];
};

/** Interface OrderTaxDetailsAppliedTaxInterface */
export type TaxDataOrderTaxDetailsAppliedTaxInterface = {
  /** Tax amount */
  amount: Scalars['Float'];
  /** Tax amount in base currency */
  baseAmount: Scalars['Float'];
  /** Code */
  code?: Maybe<Scalars['String']>;
  /** ExtensionInterface class for @see \Magento\Tax\Api\Data\OrderTaxDetailsAppliedTaxInterface */
  extensionAttributes?: Maybe<TaxDataOrderTaxDetailsAppliedTaxExtensionInterface>;
  /** Tax Percent */
  percent?: Maybe<Scalars['Float']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
};

/** ExtensionInterface class for @see \Magento\Tax\Api\Data\OrderTaxDetailsAppliedTaxInterface */
export type TaxDataOrderTaxDetailsAppliedTaxExtensionInterface = {
  rates?: Maybe<Array<Maybe<TaxDataAppliedTaxRateInterface>>>;
};

/** Applied tax rate interface. */
export type TaxDataAppliedTaxRateInterface = {
  /** Code */
  code?: Maybe<Scalars['String']>;
  /** ExtensionInterface class for @see \Magento\Tax\Api\Data\AppliedTaxRateInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Tax Percent */
  percent?: Maybe<Scalars['Float']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
};

/** Interface OrderTaxDetailsItemInterface */
export type TaxDataOrderTaxDetailsItemInterface = {
  /** Applied taxes */
  appliedTaxes?: Maybe<Array<Maybe<TaxDataOrderTaxDetailsAppliedTaxInterface>>>;
  /** Associated item id if this item is associated with another item, null otherwise */
  associatedItemId?: Maybe<Scalars['Int']>;
  /** ExtensionInterface class for @see \Magento\Tax\Api\Data\OrderTaxDetailsItemInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Item id if this item is a product */
  itemId?: Maybe<Scalars['Int']>;
  /** Type (shipping, product, weee, gift wrapping, etc) */
  type?: Maybe<Scalars['String']>;
};

/** Payment additional info interface. */
export type PaymentDataPaymentAdditionalInfoInterface = {
  /** Object key */
  key: Scalars['String'];
  /** Object value */
  value: Scalars['String'];
};

/** Interface ShippingAssignmentInterface */
export type SalesDataShippingAssignmentInterface = {
  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\ShippingAssignmentInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Order items of shipping assignment */
  items: Array<Maybe<SalesDataOrderItemInterface>>;
  /** Interface ShippingInterface */
  shipping: SalesDataShippingInterface;
  /** Stock id */
  stockId?: Maybe<Scalars['Int']>;
};

/** Order item interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer. */
export type SalesDataOrderItemInterface = {
  /** Additional data. */
  additionalData?: Maybe<Scalars['String']>;
  /** Amount refunded. */
  amountRefunded?: Maybe<Scalars['Float']>;
  /** Applied rule IDs. */
  appliedRuleIds?: Maybe<Scalars['String']>;
  /** Base amount refunded. */
  baseAmountRefunded?: Maybe<Scalars['Float']>;
  /** Base cost. */
  baseCost?: Maybe<Scalars['Float']>;
  /** Base discount amount. */
  baseDiscountAmount?: Maybe<Scalars['Float']>;
  /** Base discount invoiced. */
  baseDiscountInvoiced?: Maybe<Scalars['Float']>;
  /** Base discount refunded. */
  baseDiscountRefunded?: Maybe<Scalars['Float']>;
  /** Base discount tax compensation amount. */
  baseDiscountTaxCompensationAmount?: Maybe<Scalars['Float']>;
  /** Base discount tax compensation invoiced. */
  baseDiscountTaxCompensationInvoiced?: Maybe<Scalars['Float']>;
  /** Base discount tax compensation refunded. */
  baseDiscountTaxCompensationRefunded?: Maybe<Scalars['Float']>;
  /** Base original price. */
  baseOriginalPrice?: Maybe<Scalars['Float']>;
  /** Base price. */
  basePrice?: Maybe<Scalars['Float']>;
  /** Base price including tax. */
  basePriceInclTax?: Maybe<Scalars['Float']>;
  /** Base row invoiced. */
  baseRowInvoiced?: Maybe<Scalars['Float']>;
  /** Base row total. */
  baseRowTotal?: Maybe<Scalars['Float']>;
  /** Base row total including tax. */
  baseRowTotalInclTax?: Maybe<Scalars['Float']>;
  /** Base tax amount. */
  baseTaxAmount?: Maybe<Scalars['Float']>;
  /** Base tax before discount. */
  baseTaxBeforeDiscount?: Maybe<Scalars['Float']>;
  /** Base tax invoiced. */
  baseTaxInvoiced?: Maybe<Scalars['Float']>;
  /** Base tax refunded. */
  baseTaxRefunded?: Maybe<Scalars['Float']>;
  /** Base WEEE tax applied amount. */
  baseWeeeTaxAppliedAmount?: Maybe<Scalars['Float']>;
  /** Base WEEE tax applied row amount. */
  baseWeeeTaxAppliedRowAmnt?: Maybe<Scalars['Float']>;
  /** Base WEEE tax disposition. */
  baseWeeeTaxDisposition?: Maybe<Scalars['Float']>;
  /** Base WEEE tax row disposition. */
  baseWeeeTaxRowDisposition?: Maybe<Scalars['Float']>;
  /** Created-at timestamp. */
  createdAt?: Maybe<Scalars['String']>;
  /** Description. */
  description?: Maybe<Scalars['String']>;
  /** Discount amount. */
  discountAmount?: Maybe<Scalars['Float']>;
  /** Discount invoiced. */
  discountInvoiced?: Maybe<Scalars['Float']>;
  /** Discount percent. */
  discountPercent?: Maybe<Scalars['Float']>;
  /** Discount refunded. */
  discountRefunded?: Maybe<Scalars['Float']>;
  /** Discount tax compensation amount. */
  discountTaxCompensationAmount?: Maybe<Scalars['Float']>;
  /** Discount tax compensation canceled. */
  discountTaxCompensationCanceled?: Maybe<Scalars['Float']>;
  /** Discount tax compensation invoiced. */
  discountTaxCompensationInvoiced?: Maybe<Scalars['Float']>;
  /** Discount tax compensation refunded. */
  discountTaxCompensationRefunded?: Maybe<Scalars['Float']>;
  /** Event ID. */
  eventId?: Maybe<Scalars['Int']>;
  /** External order item ID. */
  extOrderItemId?: Maybe<Scalars['String']>;
  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderItemInterface */
  extensionAttributes?: Maybe<SalesDataOrderItemExtensionInterface>;
  /** Free-shipping flag value. */
  freeShipping?: Maybe<Scalars['Int']>;
  /** GW base price. */
  gwBasePrice?: Maybe<Scalars['Float']>;
  /** GW base price invoiced. */
  gwBasePriceInvoiced?: Maybe<Scalars['Float']>;
  /** GW base price refunded. */
  gwBasePriceRefunded?: Maybe<Scalars['Float']>;
  /** GW base tax amount. */
  gwBaseTaxAmount?: Maybe<Scalars['Float']>;
  /** GW base tax amount invoiced. */
  gwBaseTaxAmountInvoiced?: Maybe<Scalars['Float']>;
  /** GW base tax amount refunded. */
  gwBaseTaxAmountRefunded?: Maybe<Scalars['Float']>;
  /** GW ID. */
  gwId?: Maybe<Scalars['Int']>;
  /** GW price. */
  gwPrice?: Maybe<Scalars['Float']>;
  /** GW price invoiced. */
  gwPriceInvoiced?: Maybe<Scalars['Float']>;
  /** GW price refunded. */
  gwPriceRefunded?: Maybe<Scalars['Float']>;
  /** GW tax amount. */
  gwTaxAmount?: Maybe<Scalars['Float']>;
  /** GW tax amount invoiced. */
  gwTaxAmountInvoiced?: Maybe<Scalars['Float']>;
  /** GW tax amount refunded. */
  gwTaxAmountRefunded?: Maybe<Scalars['Float']>;
  /** Is-quantity-decimal flag value. */
  isQtyDecimal?: Maybe<Scalars['Int']>;
  /** Is-virtual flag value. */
  isVirtual?: Maybe<Scalars['Int']>;
  /** Item ID. */
  itemId?: Maybe<Scalars['Int']>;
  /** Locked DO invoice flag value. */
  lockedDoInvoice?: Maybe<Scalars['Int']>;
  /** Locked DO ship flag value. */
  lockedDoShip?: Maybe<Scalars['Int']>;
  /** Name. */
  name?: Maybe<Scalars['String']>;
  /** No-discount flag value. */
  noDiscount?: Maybe<Scalars['Int']>;
  /** Order ID. */
  orderId?: Maybe<Scalars['Int']>;
  /** Original price. */
  originalPrice?: Maybe<Scalars['Float']>;
  /** Order item interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer. */
  parentItem?: Maybe<SalesDataOrderItemInterface>;
  /** Parent item ID. */
  parentItemId?: Maybe<Scalars['Int']>;
  /** Price. */
  price?: Maybe<Scalars['Float']>;
  /** Price including tax. */
  priceInclTax?: Maybe<Scalars['Float']>;
  /** Product ID. */
  productId?: Maybe<Scalars['Int']>;
  /** Product option interface */
  productOption?: Maybe<CatalogDataProductOptionInterface>;
  /** Product type. */
  productType?: Maybe<Scalars['String']>;
  /** Quantity backordered. */
  qtyBackordered?: Maybe<Scalars['Float']>;
  /** Quantity canceled. */
  qtyCanceled?: Maybe<Scalars['Float']>;
  /** Quantity invoiced. */
  qtyInvoiced?: Maybe<Scalars['Float']>;
  /** Quantity ordered. */
  qtyOrdered?: Maybe<Scalars['Float']>;
  /** Quantity refunded. */
  qtyRefunded?: Maybe<Scalars['Float']>;
  /** Quantity returned. */
  qtyReturned?: Maybe<Scalars['Float']>;
  /** Quantity shipped. */
  qtyShipped?: Maybe<Scalars['Float']>;
  /** Quote item ID. */
  quoteItemId?: Maybe<Scalars['Int']>;
  /** Row invoiced. */
  rowInvoiced?: Maybe<Scalars['Float']>;
  /** Row total. */
  rowTotal?: Maybe<Scalars['Float']>;
  /** Row total including tax. */
  rowTotalInclTax?: Maybe<Scalars['Float']>;
  /** Row weight. */
  rowWeight?: Maybe<Scalars['Float']>;
  /** SKU. */
  sku: Scalars['String'];
  /** Store ID. */
  storeId?: Maybe<Scalars['Int']>;
  /** Tax amount. */
  taxAmount?: Maybe<Scalars['Float']>;
  /** Tax before discount. */
  taxBeforeDiscount?: Maybe<Scalars['Float']>;
  /** Tax canceled. */
  taxCanceled?: Maybe<Scalars['Float']>;
  /** Tax invoiced. */
  taxInvoiced?: Maybe<Scalars['Float']>;
  /** Tax percent. */
  taxPercent?: Maybe<Scalars['Float']>;
  /** Tax refunded. */
  taxRefunded?: Maybe<Scalars['Float']>;
  /** Updated-at timestamp. */
  updatedAt?: Maybe<Scalars['String']>;
  /** WEEE tax applied. */
  weeeTaxApplied?: Maybe<Scalars['String']>;
  /** WEEE tax applied amount. */
  weeeTaxAppliedAmount?: Maybe<Scalars['Float']>;
  /** WEEE tax applied row amount. */
  weeeTaxAppliedRowAmount?: Maybe<Scalars['Float']>;
  /** WEEE tax disposition. */
  weeeTaxDisposition?: Maybe<Scalars['Float']>;
  /** WEEE tax row disposition. */
  weeeTaxRowDisposition?: Maybe<Scalars['Float']>;
  /** Weight. */
  weight?: Maybe<Scalars['Float']>;
};

/** ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderItemInterface */
export type SalesDataOrderItemExtensionInterface = {
  /** Interface MessageInterface */
  giftMessage3?: Maybe<GiftMessageDataMessageInterface>;
  invoiceTextCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  taxCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Data model representing a Commmodity Code */
  vertexCommodityCode?: Maybe<VertexTaxDataCommodityCodeInterface>;
  vertexTaxCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Product option interface */
export type CatalogDataProductOptionInterface = {
  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductOptionInterface */
  extensionAttributes?: Maybe<CatalogDataProductOptionExtensionInterface>;
};

/** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductOptionInterface */
export type CatalogDataProductOptionExtensionInterface = {
  bundleOptions?: Maybe<Array<Maybe<BundleDataBundleOptionInterface>>>;
  configurableItemOptions?: Maybe<Array<Maybe<ConfigurableProductDataConfigurableItemOptionValueInterface>>>;
  customOptions?: Maybe<Array<Maybe<CatalogDataCustomOptionInterface>>>;
  /** Downloadable Option */
  downloadableOption?: Maybe<DownloadableDataDownloadableOptionInterface>;
};

/** Interface ShippingInterface */
export type SalesDataShippingInterface = {
  /** Order address interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer. */
  address?: Maybe<SalesDataOrderAddressInterface>;
  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\ShippingInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Shipping method */
  method?: Maybe<Scalars['String']>;
  /** Interface TotalInterface */
  total?: Maybe<SalesDataTotalInterface>;
};

/** Interface TotalInterface */
export type SalesDataTotalInterface = {
  /** Base shipping amount. */
  baseShippingAmount?: Maybe<Scalars['Float']>;
  /** Base shipping canceled. */
  baseShippingCanceled?: Maybe<Scalars['Float']>;
  /** Base shipping discount amount. */
  baseShippingDiscountAmount?: Maybe<Scalars['Float']>;
  /** Base shipping discount tax compensation amount. */
  baseShippingDiscountTaxCompensationAmnt?: Maybe<Scalars['Float']>;
  /** Base shipping including tax. */
  baseShippingInclTax?: Maybe<Scalars['Float']>;
  /** Base shipping invoiced. */
  baseShippingInvoiced?: Maybe<Scalars['Float']>;
  /** Base shipping refunded. */
  baseShippingRefunded?: Maybe<Scalars['Float']>;
  /** Base shipping tax amount. */
  baseShippingTaxAmount?: Maybe<Scalars['Float']>;
  /** Base shipping tax refunded. */
  baseShippingTaxRefunded?: Maybe<Scalars['Float']>;
  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\TotalInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Shipping amount. */
  shippingAmount?: Maybe<Scalars['Float']>;
  /** Shipping canceled amount. */
  shippingCanceled?: Maybe<Scalars['Float']>;
  /** Shipping discount amount. */
  shippingDiscountAmount?: Maybe<Scalars['Float']>;
  /** Shipping discount tax compensation amount. */
  shippingDiscountTaxCompensationAmount?: Maybe<Scalars['Float']>;
  /** Shipping including tax amount. */
  shippingInclTax?: Maybe<Scalars['Float']>;
  /** Shipping invoiced amount. */
  shippingInvoiced?: Maybe<Scalars['Float']>;
  /** Shipping refunded amount. */
  shippingRefunded?: Maybe<Scalars['Float']>;
  /** Shipping tax amount. */
  shippingTaxAmount?: Maybe<Scalars['Float']>;
  /** Shipping tax refunded amount. */
  shippingTaxRefunded?: Maybe<Scalars['Float']>;
};

/** Order payment interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer. */
export type SalesDataOrderPaymentInterface = {
  /** Account status. */
  accountStatus: Scalars['String'];
  /** Additional data. */
  additionalData?: Maybe<Scalars['String']>;
  /** Array of additional information. */
  additionalInformation: Array<Maybe<Scalars['String']>>;
  /** Address status. */
  addressStatus?: Maybe<Scalars['String']>;
  /** Amount authorized. */
  amountAuthorized?: Maybe<Scalars['Float']>;
  /** Amount canceled. */
  amountCanceled?: Maybe<Scalars['Float']>;
  /** Amount ordered. */
  amountOrdered?: Maybe<Scalars['Float']>;
  /** Amount paid. */
  amountPaid?: Maybe<Scalars['Float']>;
  /** Amount refunded. */
  amountRefunded?: Maybe<Scalars['Float']>;
  /** Anet transaction method. */
  anetTransMethod?: Maybe<Scalars['String']>;
  /** Base amount authorized. */
  baseAmountAuthorized?: Maybe<Scalars['Float']>;
  /** Base amount canceled. */
  baseAmountCanceled?: Maybe<Scalars['Float']>;
  /** Base amount ordered. */
  baseAmountOrdered?: Maybe<Scalars['Float']>;
  /** Base amount paid. */
  baseAmountPaid?: Maybe<Scalars['Float']>;
  /** Base amount paid online. */
  baseAmountPaidOnline?: Maybe<Scalars['Float']>;
  /** Base amount refunded. */
  baseAmountRefunded?: Maybe<Scalars['Float']>;
  /** Base amount refunded online. */
  baseAmountRefundedOnline?: Maybe<Scalars['Float']>;
  /** Base shipping amount. */
  baseShippingAmount?: Maybe<Scalars['Float']>;
  /** Base shipping captured amount. */
  baseShippingCaptured?: Maybe<Scalars['Float']>;
  /** Base shipping refunded amount. */
  baseShippingRefunded?: Maybe<Scalars['Float']>;
  /** Credit card approval. */
  ccApproval?: Maybe<Scalars['String']>;
  /** Credit card avs status. */
  ccAvsStatus?: Maybe<Scalars['String']>;
  /** Credit card CID status. */
  ccCidStatus?: Maybe<Scalars['String']>;
  /** Credit card debug request body. */
  ccDebugRequestBody?: Maybe<Scalars['String']>;
  /** Credit card debug response body. */
  ccDebugResponseBody?: Maybe<Scalars['String']>;
  /** Credit card debug response serialized. */
  ccDebugResponseSerialized?: Maybe<Scalars['String']>;
  /** Credit card expiration month. */
  ccExpMonth?: Maybe<Scalars['String']>;
  /** Credit card expiration year. */
  ccExpYear?: Maybe<Scalars['String']>;
  /** Last four digits of the credit card. */
  ccLast4: Scalars['String'];
  /** Encrypted credit card number. */
  ccNumberEnc?: Maybe<Scalars['String']>;
  /** Credit card number. */
  ccOwner?: Maybe<Scalars['String']>;
  /** Credit card secure verify. */
  ccSecureVerify?: Maybe<Scalars['String']>;
  /** Credit card SS issue. */
  ccSsIssue?: Maybe<Scalars['String']>;
  /** Credit card SS start month. */
  ccSsStartMonth?: Maybe<Scalars['String']>;
  /** Credit card SS start year. */
  ccSsStartYear?: Maybe<Scalars['String']>;
  /** Credit card status. */
  ccStatus?: Maybe<Scalars['String']>;
  /** Credit card status description. */
  ccStatusDescription?: Maybe<Scalars['String']>;
  /** Credit card transaction ID. */
  ccTransId?: Maybe<Scalars['String']>;
  /** Credit card type. */
  ccType?: Maybe<Scalars['String']>;
  /** eCheck account name. */
  echeckAccountName?: Maybe<Scalars['String']>;
  /** eCheck account type. */
  echeckAccountType?: Maybe<Scalars['String']>;
  /** eCheck bank name. */
  echeckBankName?: Maybe<Scalars['String']>;
  /** eCheck routing number. */
  echeckRoutingNumber?: Maybe<Scalars['String']>;
  /** eCheck type. */
  echeckType?: Maybe<Scalars['String']>;
  /** Entity ID. */
  entityId?: Maybe<Scalars['Int']>;
  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderPaymentInterface */
  extensionAttributes?: Maybe<SalesDataOrderPaymentExtensionInterface>;
  /** Last transaction ID. */
  lastTransId?: Maybe<Scalars['String']>;
  /** Method. */
  method: Scalars['String'];
  /** Parent ID. */
  parentId?: Maybe<Scalars['Int']>;
  /** PO number. */
  poNumber?: Maybe<Scalars['String']>;
  /** Protection eligibility. */
  protectionEligibility?: Maybe<Scalars['String']>;
  /** Quote payment ID. */
  quotePaymentId?: Maybe<Scalars['Int']>;
  /** Shipping amount. */
  shippingAmount?: Maybe<Scalars['Float']>;
  /** Shipping captured. */
  shippingCaptured?: Maybe<Scalars['Float']>;
  /** Shipping refunded. */
  shippingRefunded?: Maybe<Scalars['Float']>;
};

/** ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderPaymentInterface */
export type SalesDataOrderPaymentExtensionInterface = {
  notificationMessage?: Maybe<Scalars['String']>;
  /** Gateway vault payment token interface. */
  vaultPaymentToken?: Maybe<VaultDataPaymentTokenInterface>;
};

/** Gateway vault payment token interface. */
export type VaultDataPaymentTokenInterface = {
  /** Token creation timestamp */
  createdAt?: Maybe<Scalars['String']>;
  /** Customer ID. */
  customerId?: Maybe<Scalars['Int']>;
  /** Entity ID. */
  entityId?: Maybe<Scalars['Int']>;
  /** Token expiration timestamp */
  expiresAt?: Maybe<Scalars['String']>;
  /** Gateway token ID */
  gatewayToken: Scalars['String'];
  /** Is active. */
  isActive: Scalars['Boolean'];
  /** Is visible. */
  isVisible: Scalars['Boolean'];
  /** Payment method code */
  paymentMethodCode: Scalars['String'];
  /** Public hash */
  publicHash: Scalars['String'];
  /** Token details */
  tokenDetails: Scalars['String'];
  /** Type */
  type: Scalars['String'];
};

/** Order status history interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer. */
export type SalesDataOrderStatusHistoryInterface = {
  /** Comment. */
  comment: Scalars['String'];
  /** Created-at timestamp. */
  createdAt?: Maybe<Scalars['String']>;
  /** Order status history ID. */
  entityId?: Maybe<Scalars['Int']>;
  /** Entity name. */
  entityName?: Maybe<Scalars['String']>;
  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderStatusHistoryInterface */
  extensionAttributes?: Maybe<Scalars['JSON']>;
  /** Is-customer-notified flag value. */
  isCustomerNotified: Scalars['Int'];
  /** Is-visible-on-storefront flag value. */
  isVisibleOnFront: Scalars['Int'];
  /** Parent ID. */
  parentId: Scalars['Int'];
  /** Status. */
  status?: Maybe<Scalars['String']>;
};

export type V1VesTrackorderTrackInput = {
  code?: InputMaybe<Scalars['String']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  orderId?: InputMaybe<Scalars['String']>;
};

export type newCatalogDataProductSearchResultsInterface = {
  totalCount?: Maybe<Scalars['String']>;
};

    }
    export type QueryLofGraphqlSdk = {
  /** Collect and retrieve the list of product render info. This info contains raw prices and formatted prices, product name, stock status, store_id, etc.

Equivalent to GET /V1/products-render-info **/
  catalogDataProductRenderSearchResultsInterface: InContextSdkMethod<LofGraphqlTypes.Query['catalogDataProductRenderSearchResultsInterface'], LofGraphqlTypes.QuerycatalogDataProductRenderSearchResultsInterfaceArgs, MeshContext>,
  /** Retrieve Featured Products matching the specified criteria.

Equivalent to GET /V1/lof-mobile/randomFeaturedProducts **/
  catalogDataProductSearchResultsInterface: InContextSdkMethod<LofGraphqlTypes.Query['catalogDataProductSearchResultsInterface'], LofGraphqlTypes.QuerycatalogDataProductSearchResultsInterfaceArgs, MeshContext>,
  /** Get payment information

Equivalent to GET /V1/guest-carts/{cartId}/payment-information **/
  checkoutDataPaymentDetailsInterface: InContextSdkMethod<LofGraphqlTypes.Query['checkoutDataPaymentDetailsInterface'], LofGraphqlTypes.QuerycheckoutDataPaymentDetailsInterfaceArgs, MeshContext>,
  /** Get country and region information for the store.

Equivalent to GET /V1/directory/countries/{countryId} **/
  directoryDataCountryInformationInterface: InContextSdkMethod<LofGraphqlTypes.Query['directoryDataCountryInformationInterface'], LofGraphqlTypes.QuerydirectoryDataCountryInformationInterfaceArgs, MeshContext>,
  /** Get currency information for the store.

Equivalent to GET /V1/directory/currency **/
  directoryDataCurrencyInformationInterface: InContextSdkMethod<LofGraphqlTypes.Query['directoryDataCurrencyInformationInterface'], {}, MeshContext>,
  /** Make Full Text Search and return found Documents

Equivalent to GET /V1/search **/
  frameworkSearchSearchResultInterface: InContextSdkMethod<LofGraphqlTypes.Query['frameworkSearchSearchResultInterface'], LofGraphqlTypes.QueryframeworkSearchSearchResultInterfaceArgs, MeshContext>,
  /** Return the gift message for a specified order.

Equivalent to GET /V1/guest-carts/{cartId}/gift-message **/
  giftMessageDataMessageInterface: InContextSdkMethod<LofGraphqlTypes.Query['giftMessageDataMessageInterface'], LofGraphqlTypes.QuerygiftMessageDataMessageInterfaceArgs, MeshContext>,
  /** Return the gift message for a specified item in a specified shopping cart.

Equivalent to GET /V1/guest-carts/{cartId}/gift-message/{itemId} **/
  giftMessageGuestItemRepositoryV1GetGet: InContextSdkMethod<LofGraphqlTypes.Query['giftMessageGuestItemRepositoryV1GetGet'], LofGraphqlTypes.QuerygiftMessageGuestItemRepositoryV1GetGetArgs, MeshContext>,
  /** Get Pickup Locations according to the results of filtration by Search Request.

Equivalent to GET /V1/inventory/in-store-pickup/pickup-locations/ **/
  inventoryInStorePickupApiDataSearchResultInterface: InContextSdkMethod<LofGraphqlTypes.Query['inventoryInStorePickupApiDataSearchResultInterface'], LofGraphqlTypes.QueryinventoryInStorePickupApiDataSearchResultInterfaceArgs, MeshContext>,
  /** Retrieve Search Result Items matching the specified criteria.

Equivalent to GET /V1/lof-autosearch/autosearch/{query_text}/{category_id}/{store_id}/{limit_terms} **/
  lofAutosearchDataSearchResultInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofAutosearchDataSearchResultInterface'], LofGraphqlTypes.QuerylofAutosearchDataSearchResultInterfaceArgs, MeshContext>,
  /** 

Equivalent to GET /V1/lof/bannerslider/banner/loadById/{id} **/
  lofBannerSliderDataBannerInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofBannerSliderDataBannerInterface'], LofGraphqlTypes.QuerylofBannerSliderDataBannerInterfaceArgs, MeshContext>,
  /** 

Equivalent to GET /V1/lof/banner/getList **/
  lofBannerSliderDataBannerSearchResultInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofBannerSliderDataBannerSearchResultInterface'], LofGraphqlTypes.QuerylofBannerSliderDataBannerSearchResultInterfaceArgs, MeshContext>,
  /** 

Equivalent to GET /V1/lof/bannerslider/resource_map/loadById/{id} **/
  lofBannerSliderDataResourceMapInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofBannerSliderDataResourceMapInterface'], LofGraphqlTypes.QuerylofBannerSliderDataResourceMapInterfaceArgs, MeshContext>,
  /** 

Equivalent to GET /V1/lof/bannerslider/slider/loadById/{id} **/
  lofBannerSliderDataSliderInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofBannerSliderDataSliderInterface'], LofGraphqlTypes.QuerylofBannerSliderDataSliderInterfaceArgs, MeshContext>,
  /** 

Equivalent to GET /V1/lof/bannerslider/getList **/
  lofBannerSliderDataSliderSearchResultInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofBannerSliderDataSliderSearchResultInterface'], LofGraphqlTypes.QuerylofBannerSliderDataSliderSearchResultInterfaceArgs, MeshContext>,
  /** Retrieve chatwoot

Equivalent to GET /V1/lof-chatwoot/chatwoot/{chatwootId} **/
  lofChatWootDataChatwootInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofChatWootDataChatwootInterface'], LofGraphqlTypes.QuerylofChatWootDataChatwootInterfaceArgs, MeshContext>,
  /** Retrieve chatwoot matching the specified criteria.

Equivalent to GET /V1/lof-chatwoot/chatwoot/search **/
  lofChatWootDataChatwootSearchResultsInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofChatWootDataChatwootSearchResultsInterface'], LofGraphqlTypes.QuerylofChatWootDataChatwootSearchResultsInterfaceArgs, MeshContext>,
  /** GET Form form data with design fields by ID, identifier, customer_group_id, stores_id

Equivalent to GET /V1/lof-formbuilder/getForm/{formId} **/
  lofFormbuilderDataFormbuilderDesignInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofFormbuilderDataFormbuilderDesignInterface'], LofGraphqlTypes.QuerylofFormbuilderDataFormbuilderDesignInterfaceArgs, MeshContext>,
  /** Retrieve Seller Group matching the specified criteria.

Equivalent to GET /V1/seller/groups **/
  lofMarketPlaceDataGroupSearchResultsInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofMarketPlaceDataGroupSearchResultsInterface'], LofGraphqlTypes.QuerylofMarketPlaceDataGroupSearchResultsInterfaceArgs, MeshContext>,
  /** Retrieve Seller Ratings matching the specified criteria.

Equivalent to GET /V1/seller/ratings/{ratingId} **/
  lofMarketPlaceDataRatingInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofMarketPlaceDataRatingInterface'], LofGraphqlTypes.QuerylofMarketPlaceDataRatingInterfaceArgs, MeshContext>,
  /** Retrieve Seller Review matching the specified criteria.

Equivalent to GET /V1/seller/{sellerUrl}/ratings **/
  lofMarketPlaceDataRatingSearchResultsInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofMarketPlaceDataRatingSearchResultsInterface'], LofGraphqlTypes.QuerylofMarketPlaceDataRatingSearchResultsInterfaceArgs, MeshContext>,
  /** Retrieve Seller Review matching the specified criteria.

Equivalent to GET /V1/seller/{sellerUrl}/reviews **/
  lofMarketPlaceDataReviewSearchResultsInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofMarketPlaceDataReviewSearchResultsInterface'], LofGraphqlTypes.QuerylofMarketPlaceDataReviewSearchResultsInterfaceArgs, MeshContext>,
  /** get seller by url key

Equivalent to GET /V1/seller/{sellerUrl} **/
  lofMarketPlaceDataSellerInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofMarketPlaceDataSellerInterface'], LofGraphqlTypes.QuerylofMarketPlaceDataSellerInterfaceArgs, MeshContext>,
  /** Retrieve seller matching the specified criteria.

Equivalent to GET /V1/seller/products **/
  lofMarketPlaceDataSellerProductSearchResultsInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofMarketPlaceDataSellerProductSearchResultsInterface'], LofGraphqlTypes.QuerylofMarketPlaceDataSellerProductSearchResultsInterfaceArgs, MeshContext>,
  /** GET seller vacation - the url key of seller. ex: sellerA

Equivalent to GET /V1/seller/{sellerUrl}/vacation **/
  lofMarketPlaceDataSellerVacationInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofMarketPlaceDataSellerVacationInterface'], LofGraphqlTypes.QuerylofMarketPlaceDataSellerVacationInterfaceArgs, MeshContext>,
  /** 

Equivalent to GET /V1/seller/search **/
  lofMarketPlaceDataSellersSearchResultsInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofMarketPlaceDataSellersSearchResultsInterface'], LofGraphqlTypes.QuerylofMarketPlaceDataSellersSearchResultsInterfaceArgs, MeshContext>,
  /** Retrieve Seller Review matching the specified criteria.

Equivalent to GET /V1/seller/{sellerUrl}/summaryRatings **/
  lofMarketPlaceDataSummaryRatingInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofMarketPlaceDataSummaryRatingInterface'], LofGraphqlTypes.QuerylofMarketPlaceDataSummaryRatingInterfaceArgs, MeshContext>,
  /** GET seller product by seller url key

Equivalent to GET /V1/seller/products/{sellerUrl} **/
  lofMarketPlaceSellerProductsRepositoryV1GetListSellersProductGet: InContextSdkMethod<LofGraphqlTypes.Query['lofMarketPlaceSellerProductsRepositoryV1GetListSellersProductGet'], LofGraphqlTypes.QuerylofMarketPlaceSellerProductsRepositoryV1GetListSellersProductGetArgs, MeshContext>,
  /** get seller info by product sku

Equivalent to GET /V1/seller/getSellerInfoBySku/{sku} **/
  lofMarketPlaceSellersFrontendRepositoryV1GetSellerByProductSkuGet: InContextSdkMethod<LofGraphqlTypes.Query['lofMarketPlaceSellersFrontendRepositoryV1GetSellerByProductSkuGet'], LofGraphqlTypes.QuerylofMarketPlaceSellersFrontendRepositoryV1GetSellerByProductSkuGetArgs, MeshContext>,
  /** Retrieve getNavSidebarContent

Equivalent to GET /V1/lof-mobile/navSidebarContent **/
  lofMobileDataMobileNavSidebarInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofMobileDataMobileNavSidebarInterface'], LofGraphqlTypes.QuerylofMobileDataMobileNavSidebarInterfaceArgs, MeshContext>,
  /** 

Equivalent to GET /V1/products/{sku}/reviews **/
  lofProductReviewsDataReviewDataInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofProductReviewsDataReviewDataInterface'], LofGraphqlTypes.QuerylofProductReviewsDataReviewDataInterfaceArgs, MeshContext>,
  /** Retrieve Tag matching the specified criteria.

Equivalent to GET /V1/lof-producttags/listtags **/
  lofProductTagsDataTagSearchResultsInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofProductTagsDataTagSearchResultsInterface'], LofGraphqlTypes.QuerylofProductTagsDataTagSearchResultsInterfaceArgs, MeshContext>,
  /** Retrieve Comment matching the specified criteria.

Equivalent to GET /V1/sellerblog/postcomments/{postId} **/
  lofmpBlogCommentRepositoryV1GetPostCommentListGet: InContextSdkMethod<LofGraphqlTypes.Query['lofmpBlogCommentRepositoryV1GetPostCommentListGet'], LofGraphqlTypes.QuerylofmpBlogCommentRepositoryV1GetPostCommentListGetArgs, MeshContext>,
  /** Retrieve post

Equivalent to GET /V1/sellerblog/category/view/{categoryId}/{store_id} **/
  lofmpBlogDataCategoryInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofmpBlogDataCategoryInterface'], LofGraphqlTypes.QuerylofmpBlogDataCategoryInterfaceArgs, MeshContext>,
  /** Retrieve Category matching the specified criteria.

Equivalent to GET /V1/sellerblog/category/list **/
  lofmpBlogDataCategorySearchResultsInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofmpBlogDataCategorySearchResultsInterface'], LofGraphqlTypes.QuerylofmpBlogDataCategorySearchResultsInterfaceArgs, MeshContext>,
  /** Retrieve Comment matching the specified criteria.

Equivalent to GET /V1/sellerblog/comment/list **/
  lofmpBlogDataCommentSearchResultsInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofmpBlogDataCommentSearchResultsInterface'], LofGraphqlTypes.QuerylofmpBlogDataCommentSearchResultsInterfaceArgs, MeshContext>,
  /** Retrieve post

Equivalent to GET /V1/sellerblog/post/view/{postUrl}/{store_id} **/
  lofmpBlogDataPostInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofmpBlogDataPostInterface'], LofGraphqlTypes.QuerylofmpBlogDataPostInterfaceArgs, MeshContext>,
  /** Retrieve Post matching the specified criteria.

Equivalent to GET /V1/sellerblog/post/list **/
  lofmpBlogDataPostSearchResultsInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofmpBlogDataPostSearchResultsInterface'], LofGraphqlTypes.QuerylofmpBlogDataPostSearchResultsInterfaceArgs, MeshContext>,
  /** Retrieve tag

Equivalent to GET /V1/sellerblog/tag/view/{tagAlias} **/
  lofmpBlogDataTagInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofmpBlogDataTagInterface'], LofGraphqlTypes.QuerylofmpBlogDataTagInterfaceArgs, MeshContext>,
  /** Retrieve Public Tag matching the specified criteria.

Equivalent to GET /V1/sellerblog/tag/list **/
  lofmpBlogDataTagSearchResultsInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofmpBlogDataTagSearchResultsInterface'], LofGraphqlTypes.QuerylofmpBlogDataTagSearchResultsInterfaceArgs, MeshContext>,
  /** Retrieve category list publish posts

Equivalent to GET /V1/sellerblog/{categoryId}/categoryPosts **/
  lofmpBlogPostRepositoryV1CategoryPostsGet: InContextSdkMethod<LofGraphqlTypes.Query['lofmpBlogPostRepositoryV1CategoryPostsGet'], LofGraphqlTypes.QuerylofmpBlogPostRepositoryV1CategoryPostsGetArgs, MeshContext>,
  /** Retrieve seller list publish posts

Equivalent to GET /V1/sellerblog/{sellerUrl}/sellerPosts **/
  lofmpBlogPostRepositoryV1SellerPostsGet: InContextSdkMethod<LofGraphqlTypes.Query['lofmpBlogPostRepositoryV1SellerPostsGet'], LofGraphqlTypes.QuerylofmpBlogPostRepositoryV1SellerPostsGetArgs, MeshContext>,
  /** Retrieve tags list publish posts

Equivalent to GET /V1/sellerblog/{tag}/tagPosts **/
  lofmpBlogPostRepositoryV1TagPostsGet: InContextSdkMethod<LofGraphqlTypes.Query['lofmpBlogPostRepositoryV1TagPostsGet'], LofGraphqlTypes.QuerylofmpBlogPostRepositoryV1TagPostsGetArgs, MeshContext>,
  /** Retrieve Public Coupon matching the specified criteria.

Equivalent to GET /V1/lof-couponcode/{sellerUrl}/coupons **/
  lofmpCouponCodeDataCouponSearchResultsInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofmpCouponCodeDataCouponSearchResultsInterface'], LofGraphqlTypes.QuerylofmpCouponCodeDataCouponSearchResultsInterfaceArgs, MeshContext>,
  /** Retrieve best seller Products matching the specified criteria.

Equivalent to GET /V1/seller-productlist/{sellerUrl}/bestseller **/
  lofmpProductlistProductRepositoryV1GetBestsellerProductsGet: InContextSdkMethod<LofGraphqlTypes.Query['lofmpProductlistProductRepositoryV1GetBestsellerProductsGet'], LofGraphqlTypes.QuerylofmpProductlistProductRepositoryV1GetBestsellerProductsGetArgs, MeshContext>,
  /** Retrieve deals Products matching the specified criteria.

Equivalent to GET /V1/seller-productlist/{sellerUrl}/deals **/
  lofmpProductlistProductRepositoryV1GetDealsProductsGet: InContextSdkMethod<LofGraphqlTypes.Query['lofmpProductlistProductRepositoryV1GetDealsProductsGet'], LofGraphqlTypes.QuerylofmpProductlistProductRepositoryV1GetDealsProductsGetArgs, MeshContext>,
  /** Retrieve featured Products matching the specified criteria.

Equivalent to GET /V1/seller-productlist/{sellerUrl}/featured **/
  lofmpProductlistProductRepositoryV1GetFeaturedProductsGet: InContextSdkMethod<LofGraphqlTypes.Query['lofmpProductlistProductRepositoryV1GetFeaturedProductsGet'], LofGraphqlTypes.QuerylofmpProductlistProductRepositoryV1GetFeaturedProductsGetArgs, MeshContext>,
  /** Retrieve lastest Products matching the specified criteria.

Equivalent to GET /V1/seller-productlist/{sellerUrl}/latest **/
  lofmpProductlistProductRepositoryV1GetLatestProductsGet: InContextSdkMethod<LofGraphqlTypes.Query['lofmpProductlistProductRepositoryV1GetLatestProductsGet'], LofGraphqlTypes.QuerylofmpProductlistProductRepositoryV1GetLatestProductsGetArgs, MeshContext>,
  /** Retrieve most viewed Products matching the specified criteria.

Equivalent to GET /V1/seller-productlist/{sellerUrl}/mostviewed **/
  lofmpProductlistProductRepositoryV1GetMostViewedProductsGet: InContextSdkMethod<LofGraphqlTypes.Query['lofmpProductlistProductRepositoryV1GetMostViewedProductsGet'], LofGraphqlTypes.QuerylofmpProductlistProductRepositoryV1GetMostViewedProductsGetArgs, MeshContext>,
  /** Retrieve newarrival Products matching the specified criteria.

Equivalent to GET /V1/seller-productlist/{sellerUrl}/newarrival **/
  lofmpProductlistProductRepositoryV1GetNewarrivalProductsGet: InContextSdkMethod<LofGraphqlTypes.Query['lofmpProductlistProductRepositoryV1GetNewarrivalProductsGet'], LofGraphqlTypes.QuerylofmpProductlistProductRepositoryV1GetNewarrivalProductsGetArgs, MeshContext>,
  /** Retrieve random Products matching the specified criteria.

Equivalent to GET /V1/seller-productlist/{sellerUrl}/random **/
  lofmpProductlistProductRepositoryV1GetRandomProductsGet: InContextSdkMethod<LofGraphqlTypes.Query['lofmpProductlistProductRepositoryV1GetRandomProductsGet'], LofGraphqlTypes.QuerylofmpProductlistProductRepositoryV1GetRandomProductsGetArgs, MeshContext>,
  /** Retrieve special Products matching the specified criteria.

Equivalent to GET /V1/seller-productlist/{sellerUrl}/specials **/
  lofmpProductlistProductRepositoryV1GetSpecialProductsGet: InContextSdkMethod<LofGraphqlTypes.Query['lofmpProductlistProductRepositoryV1GetSpecialProductsGet'], LofGraphqlTypes.QuerylofmpProductlistProductRepositoryV1GetSpecialProductsGetArgs, MeshContext>,
  /** Retrieve top rated Products matching the specified criteria.

Equivalent to GET /V1/seller-productlist/{sellerUrl}/toprated **/
  lofmpProductlistProductRepositoryV1GetTopratedProductsGet: InContextSdkMethod<LofGraphqlTypes.Query['lofmpProductlistProductRepositoryV1GetTopratedProductsGet'], LofGraphqlTypes.QuerylofmpProductlistProductRepositoryV1GetTopratedProductsGetArgs, MeshContext>,
  /** Retrieve address

Equivalent to GET /V1/lofmp-returns/address/{addressId} **/
  lofmpRmaDataAddressInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofmpRmaDataAddressInterface'], LofGraphqlTypes.QuerylofmpRmaDataAddressInterfaceArgs, MeshContext>,
  /** Retrieve address matching the specified criteria.

Equivalent to GET /V1/lofmp-returns/address **/
  lofmpRmaDataAddressSearchResultsInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofmpRmaDataAddressSearchResultsInterface'], LofGraphqlTypes.QuerylofmpRmaDataAddressSearchResultsInterfaceArgs, MeshContext>,
  /** Retrieve condition

Equivalent to GET /V1/lofmp-returns/condition/{conditionId} **/
  lofmpRmaDataConditionInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofmpRmaDataConditionInterface'], LofGraphqlTypes.QuerylofmpRmaDataConditionInterfaceArgs, MeshContext>,
  /** Retrieve condition matching the specified criteria.

Equivalent to GET /V1/lofmp-returns/condition **/
  lofmpRmaDataConditionSearchResultsInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofmpRmaDataConditionSearchResultsInterface'], LofGraphqlTypes.QuerylofmpRmaDataConditionSearchResultsInterfaceArgs, MeshContext>,
  /** Retrieve field

Equivalent to GET /V1/lofmp-returns/customfield/{fieldId} **/
  lofmpRmaDataFieldInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofmpRmaDataFieldInterface'], LofGraphqlTypes.QuerylofmpRmaDataFieldInterfaceArgs, MeshContext>,
  /** Retrieve field matching the specified criteria.

Equivalent to GET /V1/lofmp-returns/customfield **/
  lofmpRmaDataFieldSearchResultsInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofmpRmaDataFieldSearchResultsInterface'], LofGraphqlTypes.QuerylofmpRmaDataFieldSearchResultsInterfaceArgs, MeshContext>,
  /** Retrieve QuickResponse

Equivalent to GET /V1/lofmp-returns/quickresponse/{quickresponseId} **/
  lofmpRmaDataQuickResponseInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofmpRmaDataQuickResponseInterface'], LofGraphqlTypes.QuerylofmpRmaDataQuickResponseInterfaceArgs, MeshContext>,
  /** Retrieve QuickResponse matching the specified criteria.

Equivalent to GET /V1/lofmp-returns/quickresponse **/
  lofmpRmaDataQuickResponseSearchResultsInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofmpRmaDataQuickResponseSearchResultsInterface'], LofGraphqlTypes.QuerylofmpRmaDataQuickResponseSearchResultsInterfaceArgs, MeshContext>,
  /** Retrieve reason

Equivalent to GET /V1/lofmp-returns/reason/{reasonId} **/
  lofmpRmaDataReasonInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofmpRmaDataReasonInterface'], LofGraphqlTypes.QuerylofmpRmaDataReasonInterfaceArgs, MeshContext>,
  /** Retrieve reason matching the specified criteria.

Equivalent to GET /V1/lofmp-returns/reason **/
  lofmpRmaDataReasonSearchResultsInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofmpRmaDataReasonSearchResultsInterface'], LofGraphqlTypes.QuerylofmpRmaDataReasonSearchResultsInterfaceArgs, MeshContext>,
  /** Retrieve resolution

Equivalent to GET /V1/lofmp-returns/resolution/{resolutionId} **/
  lofmpRmaDataResolutionInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofmpRmaDataResolutionInterface'], LofGraphqlTypes.QuerylofmpRmaDataResolutionInterfaceArgs, MeshContext>,
  /** Retrieve resolution matching the specified criteria.

Equivalent to GET /V1/lofmp-returns/resolution **/
  lofmpRmaDataResolutionSearchResultsInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofmpRmaDataResolutionSearchResultsInterface'], LofGraphqlTypes.QuerylofmpRmaDataResolutionSearchResultsInterfaceArgs, MeshContext>,
  /** Retrieve Status

Equivalent to GET /V1/lofmp-returns/status/{statusId} **/
  lofmpRmaDataStatusInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofmpRmaDataStatusInterface'], LofGraphqlTypes.QuerylofmpRmaDataStatusInterfaceArgs, MeshContext>,
  /** Retrieve Status matching the specified criteria.

Equivalent to GET /V1/lofmp-returns/status **/
  lofmpRmaDataStatusSearchResultsInterface: InContextSdkMethod<LofGraphqlTypes.Query['lofmpRmaDataStatusSearchResultsInterface'], LofGraphqlTypes.QuerylofmpRmaDataStatusSearchResultsInterfaceArgs, MeshContext>,
  /** Returns details required to be able to submit a payment with apple pay.

Equivalent to GET /V1/applepay/auth **/
  payPalBraintreeDataAuthDataInterface: InContextSdkMethod<LofGraphqlTypes.Query['payPalBraintreeDataAuthDataInterface'], {}, MeshContext>,
  /** Return the billing address for a specified quote.

Equivalent to GET /V1/guest-carts/{cartId}/billing-address **/
  quoteDataAddressInterface: InContextSdkMethod<LofGraphqlTypes.Query['quoteDataAddressInterface'], LofGraphqlTypes.QueryquoteDataAddressInterfaceArgs, MeshContext>,
  /** Enable a guest user to return information for a specified cart.

Equivalent to GET /V1/guest-carts/{cartId} **/
  quoteDataCartInterface: InContextSdkMethod<LofGraphqlTypes.Query['quoteDataCartInterface'], LofGraphqlTypes.QueryquoteDataCartInterfaceArgs, MeshContext>,
  /** Return the payment method for a specified shopping cart.

Equivalent to GET /V1/guest-carts/{cartId}/selected-payment-method **/
  quoteDataPaymentInterface: InContextSdkMethod<LofGraphqlTypes.Query['quoteDataPaymentInterface'], LofGraphqlTypes.QueryquoteDataPaymentInterfaceArgs, MeshContext>,
  /** Return quote totals data for a specified cart.

Equivalent to GET /V1/guest-carts/{cartId}/totals **/
  quoteDataTotalsInterface: InContextSdkMethod<LofGraphqlTypes.Query['quoteDataTotalsInterface'], LofGraphqlTypes.QueryquoteDataTotalsInterfaceArgs, MeshContext>,
  /** get list fields for contact form

Equivalent to GET /V1/contact/get/fields **/
  v1ContactGetFields: InContextSdkMethod<LofGraphqlTypes.Query['v1ContactGetFields'], {}, MeshContext>,
  /** Return empty body response

Equivalent to GET /V1/cors/check **/
  v1CorsCheck: InContextSdkMethod<LofGraphqlTypes.Query['v1CorsCheck'], {}, MeshContext>,
  /** Check if password reset token is valid.

Equivalent to GET /V1/customers/{customerId}/password/resetLinkToken/{resetPasswordLinkToken} **/
  v1CustomerPasswordResetLinkToken: InContextSdkMethod<LofGraphqlTypes.Query['v1CustomerPasswordResetLinkToken'], LofGraphqlTypes.Queryv1CustomerPasswordResetLinkTokenArgs, MeshContext>,
  /** Get all countries and regions information for the store.

Equivalent to GET /V1/directory/countries **/
  v1DirectoryCountries: InContextSdkMethod<LofGraphqlTypes.Query['v1DirectoryCountries'], LofGraphqlTypes.Queryv1DirectoryCountriesArgs, MeshContext>,
  /** Return information for a coupon in a specified cart.

Equivalent to GET /V1/guest-carts/{cartId}/coupons **/
  v1GuestCartCoupons: InContextSdkMethod<LofGraphqlTypes.Query['v1GuestCartCoupons'], LofGraphqlTypes.Queryv1GuestCartCouponsArgs, MeshContext>,
  /** List items that are assigned to a specified cart.

Equivalent to GET /V1/guest-carts/{cartId}/items **/
  v1GuestCartItems: InContextSdkMethod<LofGraphqlTypes.Query['v1GuestCartItems'], LofGraphqlTypes.Queryv1GuestCartItemsArgs, MeshContext>,
  /** List available payment methods for a specified shopping cart. This call returns an array of objects, but detailed information about each object’s attributes might not be included.  See https://devdocs.magento.com/codelinks/attributes.html#GuestPaymentMethodManagementInterface to determine which call to use to get detailed information about all attributes for an object.

Equivalent to GET /V1/guest-carts/{cartId}/payment-methods **/
  v1GuestCartPaymentMethods: InContextSdkMethod<LofGraphqlTypes.Query['v1GuestCartPaymentMethods'], LofGraphqlTypes.Queryv1GuestCartPaymentMethodsArgs, MeshContext>,
  /** List applicable shipping methods for a specified quote.

Equivalent to GET /V1/guest-carts/{cartId}/shipping-methods **/
  v1GuestCartShippingMethods: InContextSdkMethod<LofGraphqlTypes.Query['v1GuestCartShippingMethods'], LofGraphqlTypes.Queryv1GuestCartShippingMethodsArgs, MeshContext>,
  /** GET Form form field by ID, identifier, customer_group_id, stores_id

Equivalent to GET /V1/lof-formbuilder/getformfield/{formId} **/
  v1LofFormbuilderGetformfield: InContextSdkMethod<LofGraphqlTypes.Query['v1LofFormbuilderGetformfield'], LofGraphqlTypes.Queryv1LofFormbuilderGetformfieldArgs, MeshContext>,
  /** Retrieve getCmsPages

Equivalent to GET /V1/lof-mobile/availableCmsPages/{storeId} **/
  v1LofMobileAvailableCmsPage: InContextSdkMethod<LofGraphqlTypes.Query['v1LofMobileAvailableCmsPage'], LofGraphqlTypes.Queryv1LofMobileAvailableCmsPageArgs, MeshContext>,
  /** Retrieve Search Suggestion Tags

Equivalent to GET /V1/lof-mobile/searchSuggestionTags/{keyword}/{storeId} **/
  v1LofMobileSearchSuggestionTag: InContextSdkMethod<LofGraphqlTypes.Query['v1LofMobileSearchSuggestionTag'], LofGraphqlTypes.Queryv1LofMobileSearchSuggestionTagArgs, MeshContext>,
  /** Get List Product by Identyfier

Equivalent to GET /V1/lof-producttags/products/{tagCode} **/
  v1LofProducttagsProducts: InContextSdkMethod<LofGraphqlTypes.Query['v1LofProducttagsProducts'], LofGraphqlTypes.Queryv1LofProducttagsProductsArgs, MeshContext>,
  /** get available rating data by rating code

Equivalent to GET /V1/reviews/ratings/{storeId} **/
  v1ReviewsRating: InContextSdkMethod<LofGraphqlTypes.Query['v1ReviewsRating'], LofGraphqlTypes.Queryv1ReviewsRatingArgs, MeshContext>,
  /** Retrieve releated posts

Equivalent to GET /V1/sellerblog/post/relatedPosts/{postId} **/
  v1SellerblogPostRelatedPost: InContextSdkMethod<LofGraphqlTypes.Query['v1SellerblogPostRelatedPost'], LofGraphqlTypes.Queryv1SellerblogPostRelatedPostArgs, MeshContext>,
  /** Retrieve releated products

Equivalent to GET /V1/sellerblog/post/relatedProducts/{postId} **/
  v1SellerblogPostRelatedProduct: InContextSdkMethod<LofGraphqlTypes.Query['v1SellerblogPostRelatedProduct'], LofGraphqlTypes.Queryv1SellerblogPostRelatedProductArgs, MeshContext>,
  /** Retrieve Menu Item

Equivalent to GET /V1/ves-megamenuitem/getMenuItem/{menuItemId}/{storeId} **/
  vesMegamenuDataItemInterface: InContextSdkMethod<LofGraphqlTypes.Query['vesMegamenuDataItemInterface'], LofGraphqlTypes.QueryvesMegamenuDataItemInterfaceArgs, MeshContext>,
  /** Get Menu Items by Menu ID

Equivalent to GET /V1/ves-megamenuitem/getMenuItems/{menuId}/{storeId} **/
  vesMegamenuDataItemSearchResultsInterface: InContextSdkMethod<LofGraphqlTypes.Query['vesMegamenuDataItemSearchResultsInterface'], LofGraphqlTypes.QueryvesMegamenuDataItemSearchResultsInterfaceArgs, MeshContext>,
  /** Load megamenu profile by alias.

Equivalent to GET /V1/ves-megamenu/getByAlias/{alias} **/
  vesMegamenuDataMenuFrontendInterface: InContextSdkMethod<LofGraphqlTypes.Query['vesMegamenuDataMenuFrontendInterface'], LofGraphqlTypes.QueryvesMegamenuDataMenuFrontendInterfaceArgs, MeshContext>
};

export type MutationLofGraphqlSdk = {
  /** 

Equivalent to PUT /V1/amazon-billing-address/{amazonOrderReferenceId} **/
  amazonPaymentAddressManagementV1GetBillingAddressPut: InContextSdkMethod<LofGraphqlTypes.Mutation['amazonPaymentAddressManagementV1GetBillingAddressPut'], LofGraphqlTypes.MutationamazonPaymentAddressManagementV1GetBillingAddressPutArgs, MeshContext>,
  /** 

Equivalent to PUT /V1/amazon-shipping-address/{amazonOrderReferenceId} **/
  amazonPaymentAddressManagementV1GetShippingAddressPut: InContextSdkMethod<LofGraphqlTypes.Mutation['amazonPaymentAddressManagementV1GetShippingAddressPut'], LofGraphqlTypes.MutationamazonPaymentAddressManagementV1GetShippingAddressPutArgs, MeshContext>,
  /** 

Equivalent to DELETE /V1/amazon/order-ref **/
  amazonPaymentOrderInformationManagementV1RemoveOrderReferenceDelete: InContextSdkMethod<LofGraphqlTypes.Mutation['amazonPaymentOrderInformationManagementV1RemoveOrderReferenceDelete'], {}, MeshContext>,
  /** Set payment information and place order for a specified cart.

Equivalent to POST /V1/guest-carts/{cartId}/payment-information **/
  checkoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost: InContextSdkMethod<LofGraphqlTypes.Mutation['checkoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost'], LofGraphqlTypes.MutationcheckoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPostArgs, MeshContext>,
  /** Set payment information for a specified cart.

Equivalent to POST /V1/guest-carts/{cartId}/set-payment-information **/
  checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost: InContextSdkMethod<LofGraphqlTypes.Mutation['checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost'], LofGraphqlTypes.MutationcheckoutGuestPaymentInformationManagementV1SavePaymentInformationPostArgs, MeshContext>,
  /** 

Equivalent to POST /V1/guest-carts/{cartId}/shipping-information **/
  checkoutGuestShippingInformationManagementV1SaveAddressInformationPost: InContextSdkMethod<LofGraphqlTypes.Mutation['checkoutGuestShippingInformationManagementV1SaveAddressInformationPost'], LofGraphqlTypes.MutationcheckoutGuestShippingInformationManagementV1SaveAddressInformationPostArgs, MeshContext>,
  /** Calculate quote totals based on address and shipping method.

Equivalent to POST /V1/guest-carts/{cartId}/totals-information **/
  checkoutGuestTotalsInformationManagementV1CalculatePost: InContextSdkMethod<LofGraphqlTypes.Mutation['checkoutGuestTotalsInformationManagementV1CalculatePost'], LofGraphqlTypes.MutationcheckoutGuestTotalsInformationManagementV1CalculatePostArgs, MeshContext>,
  /** Create customer account. Perform necessary business operations like sending email.

Equivalent to POST /V1/customers **/
  customerAccountManagementV1CreateAccountPost: InContextSdkMethod<LofGraphqlTypes.Mutation['customerAccountManagementV1CreateAccountPost'], LofGraphqlTypes.MutationcustomerAccountManagementV1CreateAccountPostArgs, MeshContext>,
  /** Send an email to the customer with a password reset link.

Equivalent to PUT /V1/customers/password **/
  customerAccountManagementV1InitiatePasswordResetPut: InContextSdkMethod<LofGraphqlTypes.Mutation['customerAccountManagementV1InitiatePasswordResetPut'], LofGraphqlTypes.MutationcustomerAccountManagementV1InitiatePasswordResetPutArgs, MeshContext>,
  /** Check if given email is associated with a customer account in given website.

Equivalent to POST /V1/customers/isEmailAvailable **/
  customerAccountManagementV1IsEmailAvailablePost: InContextSdkMethod<LofGraphqlTypes.Mutation['customerAccountManagementV1IsEmailAvailablePost'], LofGraphqlTypes.MutationcustomerAccountManagementV1IsEmailAvailablePostArgs, MeshContext>,
  /** Reset customer password.

Equivalent to POST /V1/customers/resetPassword **/
  customerAccountManagementV1ResetPasswordPost: InContextSdkMethod<LofGraphqlTypes.Mutation['customerAccountManagementV1ResetPasswordPost'], LofGraphqlTypes.MutationcustomerAccountManagementV1ResetPasswordPostArgs, MeshContext>,
  /** Send And Save request.

Equivalent to POST /V1/contact/post **/
  ecomteckAdvancedContactRequestRepositoryV1SavePost: InContextSdkMethod<LofGraphqlTypes.Mutation['ecomteckAdvancedContactRequestRepositoryV1SavePost'], LofGraphqlTypes.MutationecomteckAdvancedContactRequestRepositoryV1SavePostArgs, MeshContext>,
  /** Set the gift message for an entire order.

Equivalent to POST /V1/guest-carts/{cartId}/gift-message **/
  giftMessageGuestCartRepositoryV1SavePost: InContextSdkMethod<LofGraphqlTypes.Mutation['giftMessageGuestCartRepositoryV1SavePost'], LofGraphqlTypes.MutationgiftMessageGuestCartRepositoryV1SavePostArgs, MeshContext>,
  /** Set the gift message for a specified item in a specified shopping cart.

Equivalent to POST /V1/guest-carts/{cartId}/gift-message/{itemId} **/
  giftMessageGuestItemRepositoryV1SavePost: InContextSdkMethod<LofGraphqlTypes.Mutation['giftMessageGuestItemRepositoryV1SavePost'], LofGraphqlTypes.MutationgiftMessageGuestItemRepositoryV1SavePostArgs, MeshContext>,
  /** Create access token for admin given the admin credentials.

Equivalent to POST /V1/integration/admin/token **/
  integrationAdminTokenServiceV1CreateAdminAccessTokenPost: InContextSdkMethod<LofGraphqlTypes.Mutation['integrationAdminTokenServiceV1CreateAdminAccessTokenPost'], LofGraphqlTypes.MutationintegrationAdminTokenServiceV1CreateAdminAccessTokenPostArgs, MeshContext>,
  /** Create access token for admin given the customer credentials.

Equivalent to POST /V1/integration/customer/token **/
  integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost: InContextSdkMethod<LofGraphqlTypes.Mutation['integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost'], LofGraphqlTypes.MutationintegrationCustomerTokenServiceV1CreateCustomerAccessTokenPostArgs, MeshContext>,
  /** Delete chatwoot by ID

Equivalent to DELETE /V1/lof-chatwoot/chatwoot/{chatwootId} **/
  lofChatWootChatwootRepositoryV1DeleteByIdDelete: InContextSdkMethod<LofGraphqlTypes.Mutation['lofChatWootChatwootRepositoryV1DeleteByIdDelete'], LofGraphqlTypes.MutationlofChatWootChatwootRepositoryV1DeleteByIdDeleteArgs, MeshContext>,
  /** Save chatwoot

Equivalent to POST /V1/lof-chatwoot/chatwoot **/
  lofChatWootChatwootRepositoryV1SavePost: InContextSdkMethod<LofGraphqlTypes.Mutation['lofChatWootChatwootRepositoryV1SavePost'], LofGraphqlTypes.MutationlofChatWootChatwootRepositoryV1SavePostArgs, MeshContext>,
  /** Save chatwoot

Equivalent to PUT /V1/lof-chatwoot/chatwoot/{chatwootId} **/
  lofChatWootChatwootRepositoryV1SavePut: InContextSdkMethod<LofGraphqlTypes.Mutation['lofChatWootChatwootRepositoryV1SavePut'], LofGraphqlTypes.MutationlofChatWootChatwootRepositoryV1SavePutArgs, MeshContext>,
  /** Save chatwoot

Equivalent to PUT /V1/lof-chatwoot/chatwoot/{sellerId} **/
  lofChatWootChatwootRepositoryV1UpdateChatPut: InContextSdkMethod<LofGraphqlTypes.Mutation['lofChatWootChatwootRepositoryV1UpdateChatPut'], LofGraphqlTypes.MutationlofChatWootChatwootRepositoryV1UpdateChatPutArgs, MeshContext>,
  /** POST create Seller Order

Equivalent to POST /V1/seller/createorder/{orderId} **/
  lofMarketPlaceSalesRepositoryV1CreateSellerOrderPost: InContextSdkMethod<LofGraphqlTypes.Mutation['lofMarketPlaceSalesRepositoryV1CreateSellerOrderPost'], LofGraphqlTypes.MutationlofMarketPlaceSalesRepositoryV1CreateSellerOrderPostArgs, MeshContext>,
  /** 

Equivalent to POST /V1/seller/register **/
  lofMarketPlaceSellersRepositoryV1RegisterNewSellerPost: InContextSdkMethod<LofGraphqlTypes.Mutation['lofMarketPlaceSellersRepositoryV1RegisterNewSellerPost'], LofGraphqlTypes.MutationlofMarketPlaceSellersRepositoryV1RegisterNewSellerPostArgs, MeshContext>,
  /** Save review Reply by guest.

Equivalent to POST /V1/reviews/guest/reply **/
  lofProductReviewsReviewRepositoryV1ReplyByGuestPost: InContextSdkMethod<LofGraphqlTypes.Mutation['lofProductReviewsReviewRepositoryV1ReplyByGuestPost'], LofGraphqlTypes.MutationlofProductReviewsReviewRepositoryV1ReplyByGuestPostArgs, MeshContext>,
  /** Apple Login

Equivalent to POST /V1/lofmobile/appleLogin **/
  lofmobileSocialLoginV1AppleLoginPost: InContextSdkMethod<LofGraphqlTypes.Mutation['lofmobileSocialLoginV1AppleLoginPost'], LofGraphqlTypes.MutationlofmobileSocialLoginV1AppleLoginPostArgs, MeshContext>,
  /** Social Login

Equivalent to POST /V1/lofmobile/social_login **/
  lofmobileSocialLoginV1LoginPost: InContextSdkMethod<LofGraphqlTypes.Mutation['lofmobileSocialLoginV1LoginPost'], LofGraphqlTypes.MutationlofmobileSocialLoginV1LoginPostArgs, MeshContext>,
  /** Set payment information and place order for a specified cart.

Equivalent to POST /V1/splitCartGuest/{cartId}/{sellerUrl}/payment-information **/
  lofmpSplitCartGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost: InContextSdkMethod<LofGraphqlTypes.Mutation['lofmpSplitCartGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost'], LofGraphqlTypes.MutationlofmpSplitCartGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPostArgs, MeshContext>,
  /** Init Split cart for guest

Equivalent to POST /V1/splitCartGuest/{cartId}/{sellerUrl}/init-checkout **/
  lofmpSplitCartQuoteRepositoryV1InitSplitOrderGuestPost: InContextSdkMethod<LofGraphqlTypes.Mutation['lofmpSplitCartQuoteRepositoryV1InitSplitOrderGuestPost'], LofGraphqlTypes.MutationlofmpSplitCartQuoteRepositoryV1InitSplitOrderGuestPostArgs, MeshContext>,
  /** Delete split cart for guest, clear split cart for guest

Equivalent to DELETE /V1/splitCartGuest/remove/{cartId} **/
  lofmpSplitCartQuoteRepositoryV1RemoveSplitCartGuestDelete: InContextSdkMethod<LofGraphqlTypes.Mutation['lofmpSplitCartQuoteRepositoryV1RemoveSplitCartGuestDelete'], LofGraphqlTypes.MutationlofmpSplitCartQuoteRepositoryV1RemoveSplitCartGuestDeleteArgs, MeshContext>,
  /** Assign a specified billing address to a specified cart.

Equivalent to POST /V1/guest-carts/{cartId}/billing-address **/
  quoteGuestBillingAddressManagementV1AssignPost: InContextSdkMethod<LofGraphqlTypes.Mutation['quoteGuestBillingAddressManagementV1AssignPost'], LofGraphqlTypes.MutationquoteGuestBillingAddressManagementV1AssignPostArgs, MeshContext>,
  /** Remove the specified item from the specified cart.

Equivalent to DELETE /V1/guest-carts/{cartId}/items/{itemId} **/
  quoteGuestCartItemRepositoryV1DeleteByIdDelete: InContextSdkMethod<LofGraphqlTypes.Mutation['quoteGuestCartItemRepositoryV1DeleteByIdDelete'], LofGraphqlTypes.MutationquoteGuestCartItemRepositoryV1DeleteByIdDeleteArgs, MeshContext>,
  /** Add/update the specified cart item.

Equivalent to POST /V1/guest-carts/{cartId}/items **/
  quoteGuestCartItemRepositoryV1SavePost: InContextSdkMethod<LofGraphqlTypes.Mutation['quoteGuestCartItemRepositoryV1SavePost'], LofGraphqlTypes.MutationquoteGuestCartItemRepositoryV1SavePostArgs, MeshContext>,
  /** Add/update the specified cart item.

Equivalent to PUT /V1/guest-carts/{cartId}/items/{itemId} **/
  quoteGuestCartItemRepositoryV1SavePut: InContextSdkMethod<LofGraphqlTypes.Mutation['quoteGuestCartItemRepositoryV1SavePut'], LofGraphqlTypes.MutationquoteGuestCartItemRepositoryV1SavePutArgs, MeshContext>,
  /** Enable an customer or guest user to create an empty cart and quote for an anonymous customer.

Equivalent to POST /V1/guest-carts **/
  quoteGuestCartManagementV1CreateEmptyCartPost: InContextSdkMethod<LofGraphqlTypes.Mutation['quoteGuestCartManagementV1CreateEmptyCartPost'], {}, MeshContext>,
  /** Place an order for a specified cart.

Equivalent to PUT /V1/guest-carts/{cartId}/order **/
  quoteGuestCartManagementV1PlaceOrderPut: InContextSdkMethod<LofGraphqlTypes.Mutation['quoteGuestCartManagementV1PlaceOrderPut'], LofGraphqlTypes.MutationquoteGuestCartManagementV1PlaceOrderPutArgs, MeshContext>,
  /** Set shipping/billing methods and additional data for cart and collect totals for guest.

Equivalent to PUT /V1/guest-carts/{cartId}/collect-totals **/
  quoteGuestCartTotalManagementV1CollectTotalsPut: InContextSdkMethod<LofGraphqlTypes.Mutation['quoteGuestCartTotalManagementV1CollectTotalsPut'], LofGraphqlTypes.MutationquoteGuestCartTotalManagementV1CollectTotalsPutArgs, MeshContext>,
  /** Delete a coupon from a specified cart.

Equivalent to DELETE /V1/guest-carts/{cartId}/coupons **/
  quoteGuestCouponManagementV1RemoveDelete: InContextSdkMethod<LofGraphqlTypes.Mutation['quoteGuestCouponManagementV1RemoveDelete'], LofGraphqlTypes.MutationquoteGuestCouponManagementV1RemoveDeleteArgs, MeshContext>,
  /** Add a coupon by code to a specified cart.

Equivalent to PUT /V1/guest-carts/{cartId}/coupons/{couponCode} **/
  quoteGuestCouponManagementV1SetPut: InContextSdkMethod<LofGraphqlTypes.Mutation['quoteGuestCouponManagementV1SetPut'], LofGraphqlTypes.MutationquoteGuestCouponManagementV1SetPutArgs, MeshContext>,
  /** Add a specified payment method to a specified shopping cart.

Equivalent to PUT /V1/guest-carts/{cartId}/selected-payment-method **/
  quoteGuestPaymentMethodManagementV1SetPut: InContextSdkMethod<LofGraphqlTypes.Mutation['quoteGuestPaymentMethodManagementV1SetPut'], LofGraphqlTypes.MutationquoteGuestPaymentMethodManagementV1SetPutArgs, MeshContext>,
  /** Estimate shipping by address and return list of available shipping methods

Equivalent to POST /V1/guest-carts/{cartId}/estimate-shipping-methods **/
  quoteGuestShipmentEstimationV1EstimateByExtendedAddressPost: InContextSdkMethod<LofGraphqlTypes.Mutation['quoteGuestShipmentEstimationV1EstimateByExtendedAddressPost'], LofGraphqlTypes.MutationquoteGuestShipmentEstimationV1EstimateByExtendedAddressPostArgs, MeshContext>,
  /** Add a tracked event.

Equivalent to POST /V1/elasticsuite-tracker/hit **/
  smileElasticsuiteTrackerCustomerTrackingServiceV1HitPost: InContextSdkMethod<LofGraphqlTypes.Mutation['smileElasticsuiteTrackerCustomerTrackingServiceV1HitPost'], LofGraphqlTypes.MutationsmileElasticsuiteTrackerCustomerTrackingServiceV1HitPostArgs, MeshContext>,
  /** 

Equivalent to POST /V1/vertex-address-validation/vertex-address **/
  vertexAddressValidationAddressManagementV1GetValidAddressPost: InContextSdkMethod<LofGraphqlTypes.Mutation['vertexAddressValidationAddressManagementV1GetValidAddressPost'], LofGraphqlTypes.MutationvertexAddressValidationAddressManagementV1GetValidAddressPostArgs, MeshContext>,
  /** Query Vertex to cleanse an address

Equivalent to POST /V1/guest-address/cleanse **/
  vertexAddressValidationApiGuestCleanseAddressV1CleanseAddressPost: InContextSdkMethod<LofGraphqlTypes.Mutation['vertexAddressValidationApiGuestCleanseAddressV1CleanseAddressPost'], LofGraphqlTypes.MutationvertexAddressValidationApiGuestCleanseAddressV1CleanseAddressPostArgs, MeshContext>,
  /** Send Order Info to email address

Equivalent to POST /V1/ves-trackorder/send **/
  vesTrackorderTrackOrderRepositoryV1SendPost: InContextSdkMethod<LofGraphqlTypes.Mutation['vesTrackorderTrackOrderRepositoryV1SendPost'], LofGraphqlTypes.MutationvesTrackorderTrackOrderRepositoryV1SendPostArgs, MeshContext>,
  /** Track Order Info

Equivalent to POST /V1/ves-trackorder/track **/
  vesTrackorderTrackOrderRepositoryV1TrackPost: InContextSdkMethod<LofGraphqlTypes.Mutation['vesTrackorderTrackOrderRepositoryV1TrackPost'], LofGraphqlTypes.MutationvesTrackorderTrackOrderRepositoryV1TrackPostArgs, MeshContext>
};

export type SubscriptionLofGraphqlSdk = {

};

export type LofGraphqlContext = {
      ["LofGraphql"]: { Query: QueryLofGraphqlSdk, Mutation: MutationLofGraphqlSdk, Subscription: SubscriptionLofGraphqlSdk },
    };

export type MeshContext = LofGraphqlContext & BaseMeshContext;


import { getMesh } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { fileURLToPath } from '@graphql-mesh/utils';

const importedModules: Record<string, any> = {

};

const baseDir = pathModule.join(__dirname, '..');

const importFn = (moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  if (!(relativeModuleId in importedModules)) {
    throw new Error(`Cannot find module '${relativeModuleId}'.`);
  }
  return Promise.resolve(importedModules[relativeModuleId]);
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: 'ts',
}), {
  readonly: true,
  validate: false
});


                import { findAndParseConfig } from '@graphql-mesh/cli';
                function getMeshOptions() {
                  console.warn('WARNING: These artifacts are built for development mode. Please run "mesh build" to build production artifacts');
                  return findAndParseConfig({
                    dir: baseDir,
                    artifactsDir: ".mesh",
                    configName: "mesh",
                  });
                }
              

export const documentsInSDL = /*#__PURE__*/ [];

export async function getBuiltMesh(): Promise<MeshInstance<MeshContext>> {
  const meshConfig = await getMeshOptions();
  return getMesh<MeshContext>(meshConfig);
}

export async function getMeshSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const { sdkRequesterFactory } = await getBuiltMesh();
  return getSdk<TOperationContext>(sdkRequesterFactory(globalContext));
}

export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
export function getSdk<C>(requester: Requester<C>) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;