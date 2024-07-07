const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Your JSON data
const data = {
  // 20240708005817
// https://www.swiggy.com/mapi/homepage/getCards?lat=26.77&lng=80.8917353


    "statusCode": 0,
    "data": {
      "tid": "2cc5ebf7-445e-461e-869f-79c917dd8bd0",
      "sid": "eu0af375-8dc2-4fc7-a3ac-66585900da64",
      "success": {
        "cards": [
          {
            "relevance": {
              
            },
            "gridWidget": {
              "header": {
                "action": {
                  
                },
                "headerStyling": {
                  "padding": {
                    
                  }
                }
              },
              "layout": {
                "rows": 1,
                "columns": 2,
                "itemSpacing": 12,
                "widgetPadding": {
                  
                },
                "containerStyle": {
                  "containerPadding": {
                    "left": 16,
                    "top": 16,
                    "right": 16,
                    "bottom": 12
                  }
                },
                "scrollBar": {
                  "scrollStyling": {
                    "padding": {
                      
                    }
                  }
                },
                "autoScrollConfig": {
                  
                },
                "separatorConfig": {
                  
                }
              },
              "imageGridCards": {
                "info": [
                  {
                    "id": "410097",
                    "imageId": "rng/md/carousel/production/ak4f9kufbxgb8fprancy",
                    "action": {
                      "link": "swiggy://restaurantList",
                      "text": "Restaurant",
                      "type": "DEEPLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "RESTAURANT",
                      "altTextCta": "Click to know more about Restaurants."
                    }
                  },
                  {
                    "id": "1696042",
                    "imageId": "rng/md/carousel/production/9887a65f6a7e11c18965c02bbf255e79",
                    "action": {
                      "link": "swiggy://stores/go",
                      "text": "Genie",
                      "type": "DEEPLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "GENIE",
                      "altTextCta": "Click to know more about Restaurants."
                    }
                  }
                ],
                "style": {
                  "width": {
                    "type": "TYPE_RELATIVE",
                    "value": 0.5,
                    "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                  },
                  "height": {
                    "type": "TYPE_RELATIVE",
                    "value": 0.79518074,
                    "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                  }
                }
              },
              "id": "ScrollNavSplitP2_latebinding",
              "gridElements": {
                "infoWithStyle": {
                  "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                  "info": [
                    {
                      "id": "410097",
                      "imageId": "rng/md/carousel/production/ak4f9kufbxgb8fprancy",
                      "action": {
                        "link": "swiggy://restaurantList",
                        "text": "Restaurant",
                        "type": "DEEPLINK"
                      },
                      "entityType": "BANNER",
                      "accessibility": {
                        "altText": "RESTAURANT",
                        "altTextCta": "Click to know more about Restaurants."
                      },
                      "entityId": "swiggy://restaurantList",
                      "frequencyCapping": {
                        
                      },
                      "externalMarketing": {
                        
                      },
                      "description": "Restaurant"
                    },
                    {
                      "id": "1696042",
                      "imageId": "rng/md/carousel/production/9887a65f6a7e11c18965c02bbf255e79",
                      "action": {
                        "link": "swiggy://stores/go",
                        "text": "Genie",
                        "type": "DEEPLINK"
                      },
                      "entityType": "BANNER",
                      "accessibility": {
                        "altText": "GENIE",
                        "altTextCta": "Click to know more about Restaurants."
                      },
                      "entityId": "swiggy://stores/go",
                      "frequencyCapping": {
                        
                      },
                      "externalMarketing": {
                        
                      },
                      "description": "Genie"
                    }
                  ],
                  "style": {
                    "width": {
                      "type": "TYPE_RELATIVE",
                      "value": 0.5,
                      "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                    },
                    "height": {
                      "type": "TYPE_RELATIVE",
                      "value": 0.79518074,
                      "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                    }
                  }
                }
              },
              "footer": {
                "labelWrapper": {
                  
                }
              }
            }
          },
          {
            "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN"
            },
            "gridWidget": {
              "header": {
                "title": "Top Picks For You",
                "action": {
                  
                },
                "imageId": "sl9oogwe7n5dusolt5xe",
                "headerStyling": {
                  "padding": {
                    "left": 16,
                    "top": 15,
                    "bottom": 24
                  }
                }
              },
              "layout": {
                "rows": 1,
                "columns": 16,
                "horizontalScrollEnabled": true,
                "shouldSnap": true,
                "itemSpacing": 12,
                "widgetPadding": {
                  
                },
                "containerStyle": {
                  "containerPadding": {
                    "left": 16,
                    "right": 16,
                    "bottom": 12
                  }
                },
                "scrollBar": {
                  "scrollStyling": {
                    "padding": {
                      
                    }
                  }
                },
                "autoScrollConfig": {
                  
                },
                "separatorConfig": {
                  
                }
              },
              "imageGridCards": {
                "style": {
                  "width": {
                    
                  },
                  "height": {
                    
                  }
                }
              },
              "id": "Updated_4_favourites_SimRestoRelevance",
              "gridElements": {
                "infoWithStyle": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                  "restaurants": [
                    {
                      "info": {
                        "id": "428470",
                        "name": "Krishna and Krishna Foods",
                        "cloudinaryImageId": "rnxiepp7yxbvma9imslp",
                        "locality": "Sector 1 C",
                        "areaName": "Ashiyana",
                        "costForTwo": "₹200 for two",
                        "cuisines": [
                          "Indian"
                        ],
                        "avgRating": 4.2,
                        "veg": true,
                        "parentId": "238904",
                        "avgRatingString": "4.2",
                        "totalRatingsString": "20+",
                        "promoted": true,
                        "adTrackingId": "cid=14989483~p=0~adgrpid=14989483#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=428470~eid=5350cf4e-cb59-483d-938e-941faa0f5e86~srvts=1720380496170~collid=45995",
                        "sla": {
                          "deliveryTime": 32,
                          "lastMileTravel": 3,
                          "serviceability": "SERVICEABLE",
                          "slaString": "30-35 mins",
                          "lastMileTravelString": "3.0 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 07:45:00",
                          "opened": true
                        },
                        "badges": {
                          "imageBadges": [
                            {
                              "imageId": "v1695133679/badges/Pure_Veg111.png",
                              "description": "pureveg"
                            }
                          ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textExtendedBadges": {
                              
                            },
                            "textBased": {
                              
                            },
                            "imageBased": {
                              "badgeObject": [
                                {
                                  "attributes": {
                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                    "description": "pureveg"
                                  }
                                }
                              ]
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "10% OFF",
                          "subHeader": "ABOVE ₹149",
                          "discountTag": "FLAT DEAL"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=428470",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "644666",
                        "name": "Chinese Wok",
                        "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                        "locality": "Shalimar Gateway",
                        "areaName": "Alambagh",
                        "costForTwo": "₹250 for two",
                        "cuisines": [
                          "Chinese",
                          "Asian",
                          "Tibetan",
                          "Desserts"
                        ],
                        "avgRating": 4.2,
                        "parentId": "61955",
                        "avgRatingString": "4.2",
                        "totalRatingsString": "500+",
                        "sla": {
                          "deliveryTime": 38,
                          "lastMileTravel": 7,
                          "serviceability": "SERVICEABLE",
                          "slaString": "35-40 mins",
                          "lastMileTravelString": "7.0 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 01:00:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textBased": {
                              
                            },
                            "imageBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "ITEMS",
                          "subHeader": "AT ₹199"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=644666",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "354998",
                        "name": "Pizza Hut",
                        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                        "locality": "Phoenix United Mall",
                        "areaName": "Alambagh",
                        "costForTwo": "₹350 for two",
                        "cuisines": [
                          "Pizzas"
                        ],
                        "avgRating": 4,
                        "parentId": "721",
                        "avgRatingString": "4.0",
                        "totalRatingsString": "1K+",
                        "sla": {
                          "deliveryTime": 38,
                          "lastMileTravel": 4.5,
                          "serviceability": "SERVICEABLE",
                          "slaString": "35-40 mins",
                          "lastMileTravelString": "4.5 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 03:00:00",
                          "opened": true
                        },
                        "badges": {
                          "imageBadges": [
                            {
                              "imageId": "Rxawards/_CATEGORY-Pizza.png",
                              "description": "Delivery!"
                            }
                          ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textBased": {
                              
                            },
                            "imageBased": {
                              "badgeObject": [
                                {
                                  "attributes": {
                                    "imageId": "Rxawards/_CATEGORY-Pizza.png",
                                    "description": "Delivery!"
                                  }
                                }
                              ]
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "ITEMS",
                          "subHeader": "AT ₹189"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=354998",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "183383",
                        "name": "Burger King",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4c140390-e252-47b2-a5aa-6d199918bb10_183383.JPG",
                        "locality": "Phoenix United Mall",
                        "areaName": "Lda Colony",
                        "costForTwo": "₹350 for two",
                        "cuisines": [
                          "Burgers",
                          "American"
                        ],
                        "avgRating": 4.4,
                        "parentId": "166",
                        "avgRatingString": "4.4",
                        "totalRatingsString": "10K+",
                        "sla": {
                          "deliveryTime": 36,
                          "lastMileTravel": 4.5,
                          "serviceability": "SERVICEABLE",
                          "slaString": "35-40 mins",
                          "lastMileTravelString": "4.5 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 03:00:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textExtendedBadges": {
                              
                            },
                            "textBased": {
                              
                            },
                            "imageBased": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "50% OFF",
                          "subHeader": "UPTO ₹90"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "4.6",
                            "ratingCount": "500+"
                          },
                          "source": "GOOGLE",
                          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=183383",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "801967",
                        "name": "Chinese Winiese",
                        "cloudinaryImageId": "0daf053c6f9018d3bfd278513b6ccf9c",
                        "locality": "RAJAJI PURAM, Nagar Nigam Food Safety Zone-5",
                        "areaName": "RAJAJI PURAM, Nagar Nigam Food Safety Zone-5",
                        "costForTwo": "₹100 for two",
                        "cuisines": [
                          "Chinese",
                          "Continental"
                        ],
                        "avgRating": 3.8,
                        "veg": true,
                        "parentId": "478823",
                        "avgRatingString": "3.8",
                        "totalRatingsString": "50+",
                        "promoted": true,
                        "adTrackingId": "cid=15063286~p=1~adgrpid=15063286#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=801967~eid=46bfd63e-af90-4300-97fd-2f9786d08302~srvts=1720380496170~collid=45995",
                        "sla": {
                          "deliveryTime": 44,
                          "lastMileTravel": 9.7,
                          "serviceability": "SERVICEABLE",
                          "slaString": "40-45 mins",
                          "lastMileTravelString": "9.7 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 04:00:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textBased": {
                              
                            },
                            "imageBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "₹125 OFF",
                          "subHeader": "ABOVE ₹249",
                          "discountTag": "FLAT DEAL"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=801967",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "332950",
                        "name": "La Pino'z Pizza",
                        "cloudinaryImageId": "z6uobobtwq544z096vk4",
                        "locality": "Alambagh",
                        "areaName": "Alambagh",
                        "costForTwo": "₹300 for two",
                        "cuisines": [
                          "Pizzas",
                          "Pastas",
                          "Italian",
                          "Desserts",
                          "Beverages"
                        ],
                        "avgRating": 4.2,
                        "parentId": "4961",
                        "avgRatingString": "4.2",
                        "totalRatingsString": "10K+",
                        "sla": {
                          "deliveryTime": 27,
                          "lastMileTravel": 3.6,
                          "serviceability": "SERVICEABLE",
                          "slaString": "25-30 mins",
                          "lastMileTravelString": "3.6 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 04:00:00",
                          "opened": true
                        },
                        "badges": {
                          "imageBadges": [
                            {
                              "imageId": "Rxawards/_CATEGORY-Pizza.png",
                              "description": "Delivery!"
                            }
                          ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "imageBased": {
                              "badgeObject": [
                                {
                                  "attributes": {
                                    "imageId": "Rxawards/_CATEGORY-Pizza.png",
                                    "description": "Delivery!"
                                  }
                                }
                              ]
                            },
                            "textExtendedBadges": {
                              
                            },
                            "textBased": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "60% OFF",
                          "subHeader": "UPTO ₹120"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "4.1",
                            "ratingCount": "500+"
                          },
                          "source": "GOOGLE",
                          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=332950",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "458203",
                        "name": "KFC",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/3334c8c2-3a17-4531-a91d-fe43776e2df1_458203.JPG",
                        "locality": "Rattan Khand",
                        "areaName": "Aashiana",
                        "costForTwo": "₹400 for two",
                        "cuisines": [
                          "Burgers",
                          "Fast Food",
                          "Rolls & Wraps"
                        ],
                        "avgRating": 4.2,
                        "parentId": "547",
                        "avgRatingString": "4.2",
                        "totalRatingsString": "1K+",
                        "sla": {
                          "deliveryTime": 30,
                          "lastMileTravel": 4.9,
                          "serviceability": "SERVICEABLE",
                          "slaString": "25-30 mins",
                          "lastMileTravelString": "4.9 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 04:00:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "aggregatedDiscountInfoV2": {
                          
                        },
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textBased": {
                              
                            },
                            "imageBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=458203",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "132663",
                        "name": "Shri Balaji Dhaba",
                        "cloudinaryImageId": "mz76cmtw79td4mzk2fvi",
                        "locality": "Alambagh",
                        "areaName": "Alambagh",
                        "costForTwo": "₹200 for two",
                        "cuisines": [
                          "Indian",
                          "Chinese",
                          "Thalis",
                          "Street Food"
                        ],
                        "avgRating": 4.2,
                        "veg": true,
                        "parentId": "12121",
                        "avgRatingString": "4.2",
                        "totalRatingsString": "10K+",
                        "sla": {
                          "deliveryTime": 33,
                          "lastMileTravel": 6.5,
                          "serviceability": "SERVICEABLE",
                          "slaString": "30-35 mins",
                          "lastMileTravelString": "6.5 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 03:00:00",
                          "opened": true
                        },
                        "badges": {
                          "imageBadges": [
                            {
                              "imageId": "v1695133679/badges/Pure_Veg111.png",
                              "description": "pureveg"
                            }
                          ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textBased": {
                              
                            },
                            "imageBased": {
                              "badgeObject": [
                                {
                                  "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                  }
                                }
                              ]
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "₹100 OFF",
                          "subHeader": "ABOVE ₹249",
                          "discountTag": "FLAT DEAL"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "4.1",
                            "ratingCount": "1K+"
                          },
                          "source": "GOOGLE",
                          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=132663",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "364762",
                        "name": "Burger Singh (Big Punjabi Burgers)",
                        "cloudinaryImageId": "972a37599772cdc7df93a0855ad87591",
                        "locality": "Nagar Nigam",
                        "areaName": "Aashiana",
                        "costForTwo": "₹300 for two",
                        "cuisines": [
                          "American",
                          "Fast Food",
                          "Snacks",
                          "Desserts",
                          "Beverages",
                          "Indian"
                        ],
                        "avgRating": 4.4,
                        "parentId": "375065",
                        "avgRatingString": "4.4",
                        "totalRatingsString": "5K+",
                        "sla": {
                          "deliveryTime": 27,
                          "lastMileTravel": 5,
                          "serviceability": "SERVICEABLE",
                          "slaString": "25-30 mins",
                          "lastMileTravelString": "5.0 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 04:30:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textBased": {
                              
                            },
                            "imageBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "50% OFF",
                          "subHeader": "UPTO ₹100"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=364762",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "256772",
                        "name": "Subway",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/6dda9a1d-2baf-486d-9c1b-d3d97c9edd11_256772.JPG",
                        "locality": "Neal Apollo medic hospital",
                        "areaName": "JB Emperor Ashiyana",
                        "costForTwo": "₹350 for two",
                        "cuisines": [
                          "Healthy Food",
                          "Salads",
                          "Snacks",
                          "Desserts",
                          "Beverages"
                        ],
                        "avgRating": 4.1,
                        "parentId": "2",
                        "avgRatingString": "4.1",
                        "totalRatingsString": "1K+",
                        "sla": {
                          "deliveryTime": 34,
                          "lastMileTravel": 5,
                          "serviceability": "SERVICEABLE",
                          "slaString": "30-35 mins",
                          "lastMileTravelString": "5.0 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 04:00:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textExtendedBadges": {
                              
                            },
                            "textBased": {
                              
                            },
                            "imageBased": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "60% OFF",
                          "subHeader": "UPTO ₹120"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=256772",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "782029",
                        "name": "The Belgian Waffle Co.",
                        "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
                        "locality": "KANPUR ROAD",
                        "areaName": "AASHIYANA",
                        "costForTwo": "₹200 for two",
                        "cuisines": [
                          "Waffle",
                          "Desserts",
                          "Ice Cream"
                        ],
                        "avgRating": 4.6,
                        "veg": true,
                        "parentId": "2233",
                        "avgRatingString": "4.6",
                        "totalRatingsString": "100+",
                        "sla": {
                          "deliveryTime": 33,
                          "lastMileTravel": 5,
                          "serviceability": "SERVICEABLE",
                          "slaString": "30-35 mins",
                          "lastMileTravelString": "5.0 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 04:00:00",
                          "opened": true
                        },
                        "badges": {
                          "imageBadges": [
                            {
                              "imageId": "v1695133679/badges/Pure_Veg111.png",
                              "description": "pureveg"
                            }
                          ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textBased": {
                              
                            },
                            "imageBased": {
                              "badgeObject": [
                                {
                                  "attributes": {
                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                    "description": "pureveg"
                                  }
                                }
                              ]
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "40% OFF",
                          "subHeader": "UPTO ₹80"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=782029",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "123473",
                        "name": "Balaji Bhojnalay",
                        "cloudinaryImageId": "t5q9gfehb7heue8qtqmv",
                        "locality": "Charbagh",
                        "areaName": "Charbagh",
                        "costForTwo": "₹200 for two",
                        "cuisines": [
                          "Chinese",
                          "South Indian",
                          "Thalis"
                        ],
                        "avgRating": 4.3,
                        "veg": true,
                        "parentId": "40567",
                        "avgRatingString": "4.3",
                        "totalRatingsString": "5K+",
                        "sla": {
                          "deliveryTime": 36,
                          "lastMileTravel": 9.8,
                          "serviceability": "SERVICEABLE",
                          "slaString": "35-40 mins",
                          "lastMileTravelString": "9.8 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 02:05:00",
                          "opened": true
                        },
                        "badges": {
                          "imageBadges": [
                            {
                              "imageId": "v1695133679/badges/Pure_Veg111.png",
                              "description": "pureveg"
                            }
                          ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textBased": {
                              
                            },
                            "imageBased": {
                              "badgeObject": [
                                {
                                  "attributes": {
                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                    "description": "pureveg"
                                  }
                                }
                              ]
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "₹125 OFF",
                          "subHeader": "ABOVE ₹199",
                          "discountTag": "FLAT DEAL"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "3.9",
                            "ratingCount": "1K+"
                          },
                          "source": "GOOGLE",
                          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=123473",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "209249",
                        "name": "The Oven",
                        "cloudinaryImageId": "w4tdr5zww6d2sxziy5tx",
                        "locality": "Krishna Nagar",
                        "areaName": "Alambagh",
                        "costForTwo": "₹150 for two",
                        "cuisines": [
                          "Italian",
                          "Pizzas",
                          "Pastas"
                        ],
                        "avgRating": 4,
                        "veg": true,
                        "parentId": "11556",
                        "avgRatingString": "4.0",
                        "totalRatingsString": "5K+",
                        "sla": {
                          "deliveryTime": 28,
                          "lastMileTravel": 3,
                          "serviceability": "SERVICEABLE",
                          "slaString": "25-30 mins",
                          "lastMileTravelString": "3.0 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 04:00:00",
                          "opened": true
                        },
                        "badges": {
                          "imageBadges": [
                            {
                              "imageId": "v1695133679/badges/Pure_Veg111.png",
                              "description": "pureveg"
                            }
                          ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textBased": {
                              
                            },
                            "imageBased": {
                              "badgeObject": [
                                {
                                  "attributes": {
                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                    "description": "pureveg"
                                  }
                                }
                              ]
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "₹125 OFF",
                          "subHeader": "ABOVE ₹249",
                          "discountTag": "FLAT DEAL"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=209249",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "339113",
                        "name": "Mr. Brown - Danbro",
                        "cloudinaryImageId": "82db3bd0a7f595c61c7cda9968320d89",
                        "locality": "Ashiyana",
                        "areaName": "Ashiyana",
                        "costForTwo": "₹300 for two",
                        "cuisines": [
                          "Italian",
                          "Bakery",
                          "Beverages",
                          "Pizzas",
                          "Snacks"
                        ],
                        "avgRating": 4.5,
                        "parentId": "2262",
                        "avgRatingString": "4.5",
                        "totalRatingsString": "5K+",
                        "sla": {
                          "deliveryTime": 33,
                          "lastMileTravel": 5,
                          "serviceability": "SERVICEABLE",
                          "slaString": "30-35 mins",
                          "lastMileTravelString": "5.0 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-14 00:00:00",
                          "opened": true
                        },
                        "badges": {
                          "imageBadges": [
                            {
                              "imageId": "Rxawards/_CATEGORY-Desserts.png",
                              "description": "Delivery!"
                            },
                            {
                              "imageId": "newg.png",
                              "description": "Gourmet"
                            },
                            {
                              "imageId": "v1695133679/badges/Pure_Veg111.png",
                              "description": "pureveg"
                            }
                          ]
                        },
                        "isOpen": true,
                        "aggregatedDiscountInfoV2": {
                          
                        },
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textBased": {
                              
                            },
                            "imageBased": {
                              "badgeObject": [
                                {
                                  "attributes": {
                                    "imageId": "Rxawards/_CATEGORY-Desserts.png",
                                    "description": "Delivery!"
                                  }
                                },
                                {
                                  "attributes": {
                                    "imageId": "newg.png",
                                    "description": "Gourmet"
                                  }
                                },
                                {
                                  "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                  }
                                }
                              ]
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "4.7",
                            "ratingCount": "1K+"
                          },
                          "source": "GOOGLE",
                          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=339113",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "63837",
                        "name": "Rollarappaa",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/b90cda1b-69cd-400c-bd1c-f96f50ebcc0b_63837.jpg",
                        "locality": "Alambagh",
                        "areaName": "Alambagh",
                        "costForTwo": "₹200 for two",
                        "cuisines": [
                          "North Indian",
                          "Snacks",
                          "Street Food"
                        ],
                        "avgRating": 4.3,
                        "parentId": "6263",
                        "avgRatingString": "4.3",
                        "totalRatingsString": "1K+",
                        "sla": {
                          "deliveryTime": 35,
                          "lastMileTravel": 4.5,
                          "serviceability": "SERVICEABLE",
                          "slaString": "30-35 mins",
                          "lastMileTravelString": "4.5 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 04:00:00",
                          "opened": true
                        },
                        "badges": {
                          "imageBadges": [
                            {
                              "imageId": "Rxawards/_CATEGORY-Rolls.png",
                              "description": "Delivery!"
                            }
                          ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textExtendedBadges": {
                              
                            },
                            "textBased": {
                              
                            },
                            "imageBased": {
                              "badgeObject": [
                                {
                                  "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Rolls.png"
                                  }
                                }
                              ]
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "50% OFF",
                          "subHeader": "UPTO ₹100"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "4.3",
                            "ratingCount": "10K+"
                          },
                          "source": "GOOGLE",
                          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=63837",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "544671",
                        "name": "Vadilal Ice Creams",
                        "cloudinaryImageId": "5cf8ea1ca105ba02a9e77ecef2bb2603",
                        "locality": "Manasnagar",
                        "areaName": "Ashiyana",
                        "costForTwo": "₹200 for two",
                        "cuisines": [
                          "Ice Cream",
                          "Desserts"
                        ],
                        "avgRating": 4.6,
                        "veg": true,
                        "parentId": "11745",
                        "avgRatingString": "4.6",
                        "totalRatingsString": "500+",
                        "sla": {
                          "deliveryTime": 27,
                          "lastMileTravel": 3.9,
                          "serviceability": "SERVICEABLE",
                          "slaString": "25-30 mins",
                          "lastMileTravelString": "3.9 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 01:00:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "imageBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            },
                            "textBased": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "10% OFF",
                          "subHeader": "UPTO ₹40"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=544671",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    }
                  ],
                  "theme": "RESTAURANT_GROUP_FAVOURITE_THEME",
                  "widgetType": "WIDGET_TYPE_FAVOURITES",
                  "style": {
                    
                  },
                  "collectionId": "45995"
                }
              },
              "footer": {
                "labelWrapper": {
                  
                }
              }
            }
          },
          {
            "relevance": {
              
            },
            "gridWidget": {
              "header": {
                "title": "Offers For You",
                "action": {
                  
                },
                "headerStyling": {
                  "padding": {
                    "left": 16,
                    "top": 24,
                    "bottom": 24
                  }
                }
              },
              "layout": {
                "rows": 1,
                "columns": 5,
                "horizontalScrollEnabled": true,
                "itemSpacing": 4,
                "widgetPadding": {
                  "top": 8
                },
                "containerStyle": {
                  "containerPadding": {
                    "left": 16,
                    "bottom": 24
                  }
                },
                "scrollBar": {
                  "scrollStyling": {
                    "padding": {
                      
                    }
                  }
                },
                "autoScrollConfig": {
                  
                },
                "separatorConfig": {
                  
                }
              },
              "imageGridCards": {
                "info": [
                  {
                    "id": "410105",
                    "imageId": "rng/md/carousel/production/ngjatt8hwriaytmugmqz",
                    "action": {
                      "link": "swiggy://collectionV2?collection_id=54793&tags=layout_ux4,DISCOUNTING_COUPON_DEAL60",
                      "text": "DEAL60",
                      "type": "DEEPLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "DEAL60",
                      "altTextCta": "Tap to grab best deals from best restaurant"
                    }
                  },
                  {
                    "id": "410104",
                    "imageId": "rng/md/carousel/production/dzm1eo2punmiqd1idyzn",
                    "action": {
                      "link": "swiggy://collectionV2?collection_id=54802&tags=DISCOUNTING_COUPON_TRYNEW",
                      "text": "TRYNEW",
                      "type": "DEEPLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "TRYNEW",
                      "altTextCta": "explore Unique tastes from new eateries"
                    }
                  },
                  {
                    "id": "410121",
                    "imageId": "rng/md/carousel/production/skp6dyt64rxasxs3bqse",
                    "action": {
                      "link": "swiggy://collectionV2?collection_id=54908&tags=layout_ux4,DISCOUNTING_COUPON_SWIGGYIT",
                      "text": "TRYNEW",
                      "type": "DEEPLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "SWIGGYIT",
                      "altTextCta": "Offers for 1 Upto 50% off"
                    }
                  },
                  {
                    "id": "410109",
                    "imageId": "rng/md/carousel/production/mbcjw5tiuemimw1pfjli",
                    "action": {
                      "link": "swiggy://collectionV2?collection_id=54797&tags=layout_ux4,DISCOUNTING_COUPON_JUMBO",
                      "text": "JUBO",
                      "type": "DEEPLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "JUMBO",
                      "altTextCta": "DEALS FOR TWO - UPTO Rs.200 OFF"
                    }
                  },
                  {
                    "id": "410114",
                    "imageId": "rng/md/carousel/production/glitfsp43tqn8rsfq23a",
                    "action": {
                      "link": "swiggy://collectionV2?collection_id=50880&tags=layout_ux4,DISCOUNTING_COUPON_PARTY",
                      "text": "PARTY",
                      "type": "DEEPLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "PARTY",
                      "altTextCta": "Party Steals upto 300/- off"
                    }
                  }
                ],
                "style": {
                  "width": {
                    "type": "TYPE_RELATIVE",
                    "value": 0.35714287,
                    "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                  },
                  "height": {
                    "type": "TYPE_RELATIVE",
                    "value": 1.1916667,
                    "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                  }
                }
              },
              "id": "Home_P2_Food_Offerwidget_MainComponent_Scrollcards",
              "gridElements": {
                "infoWithStyle": {
                  "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                  "info": [
                    {
                      "id": "410105",
                      "imageId": "rng/md/carousel/production/ngjatt8hwriaytmugmqz",
                      "action": {
                        "link": "swiggy://collectionV2?collection_id=54793&tags=layout_ux4,DISCOUNTING_COUPON_DEAL60",
                        "text": "DEAL60",
                        "type": "DEEPLINK"
                      },
                      "entityType": "BANNER",
                      "accessibility": {
                        "altText": "DEAL60",
                        "altTextCta": "Tap to grab best deals from best restaurant"
                      },
                      "entityId": "54793",
                      "frequencyCapping": {
                        
                      },
                      "externalMarketing": {
                        
                      },
                      "description": "DEAL60"
                    },
                    {
                      "id": "410104",
                      "imageId": "rng/md/carousel/production/dzm1eo2punmiqd1idyzn",
                      "action": {
                        "link": "swiggy://collectionV2?collection_id=54802&tags=DISCOUNTING_COUPON_TRYNEW",
                        "text": "TRYNEW",
                        "type": "DEEPLINK"
                      },
                      "entityType": "BANNER",
                      "accessibility": {
                        "altText": "TRYNEW",
                        "altTextCta": "explore Unique tastes from new eateries"
                      },
                      "entityId": "54802",
                      "frequencyCapping": {
                        
                      },
                      "externalMarketing": {
                        
                      },
                      "description": "TRYNEW"
                    },
                    {
                      "id": "410121",
                      "imageId": "rng/md/carousel/production/skp6dyt64rxasxs3bqse",
                      "action": {
                        "link": "swiggy://collectionV2?collection_id=54908&tags=layout_ux4,DISCOUNTING_COUPON_SWIGGYIT",
                        "text": "TRYNEW",
                        "type": "DEEPLINK"
                      },
                      "entityType": "BANNER",
                      "accessibility": {
                        "altText": "SWIGGYIT",
                        "altTextCta": "Offers for 1 Upto 50% off"
                      },
                      "entityId": "54908",
                      "frequencyCapping": {
                        
                      },
                      "externalMarketing": {
                        
                      },
                      "description": "TRYNEW"
                    },
                    {
                      "id": "410109",
                      "imageId": "rng/md/carousel/production/mbcjw5tiuemimw1pfjli",
                      "action": {
                        "link": "swiggy://collectionV2?collection_id=54797&tags=layout_ux4,DISCOUNTING_COUPON_JUMBO",
                        "text": "JUBO",
                        "type": "DEEPLINK"
                      },
                      "entityType": "BANNER",
                      "accessibility": {
                        "altText": "JUMBO",
                        "altTextCta": "DEALS FOR TWO - UPTO Rs.200 OFF"
                      },
                      "entityId": "54797",
                      "frequencyCapping": {
                        
                      },
                      "externalMarketing": {
                        
                      },
                      "description": "JUBO"
                    },
                    {
                      "id": "410114",
                      "imageId": "rng/md/carousel/production/glitfsp43tqn8rsfq23a",
                      "action": {
                        "link": "swiggy://collectionV2?collection_id=50880&tags=layout_ux4,DISCOUNTING_COUPON_PARTY",
                        "text": "PARTY",
                        "type": "DEEPLINK"
                      },
                      "entityType": "BANNER",
                      "accessibility": {
                        "altText": "PARTY",
                        "altTextCta": "Party Steals upto 300/- off"
                      },
                      "entityId": "50880",
                      "frequencyCapping": {
                        
                      },
                      "externalMarketing": {
                        
                      },
                      "description": "PARTY"
                    }
                  ],
                  "style": {
                    "width": {
                      "type": "TYPE_RELATIVE",
                      "value": 0.35714287,
                      "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                    },
                    "height": {
                      "type": "TYPE_RELATIVE",
                      "value": 1.1916667,
                      "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                    }
                  }
                }
              },
              "footer": {
                "labelWrapper": {
                  
                }
              }
            }
          },
          {
            "relevance": {
              
            },
            "gridWidget": {
              "header": {
                "title": "All Restaurants Nearby",
                "subtitle": "Discover unique tastes near you",
                "action": {
                  
                },
                "imageId": "rng/md/production/ipai4xhkoy9ovshdnyn6",
                "headerStyling": {
                  "padding": {
                    "left": 16,
                    "top": 24,
                    "bottom": 24
                  }
                }
              },
              "layout": {
                "rows": 25,
                "columns": 1,
                "lineSpacing": 24,
                "widgetPadding": {
                  
                },
                "containerStyle": {
                  "containerPadding": {
                    "right": 12,
                    "bottom": 8
                  }
                },
                "scrollBar": {
                  "scrollStyling": {
                    "padding": {
                      
                    }
                  }
                },
                "autoScrollConfig": {
                  
                },
                "separatorConfig": {
                  
                }
              },
              "imageGridCards": {
                "style": {
                  "width": {
                    
                  },
                  "height": {
                    
                  }
                }
              },
              "id": "restaurantCollectionDeliveringNowTheme",
              "gridElements": {
                "infoWithStyle": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantInfoWithStyle",
                  "restaurants": [
                    {
                      "info": {
                        "id": "428470",
                        "name": "Krishna and Krishna Foods",
                        "cloudinaryImageId": "rnxiepp7yxbvma9imslp",
                        "locality": "Sector 1 C",
                        "areaName": "Ashiyana",
                        "costForTwo": "₹200 for two",
                        "cuisines": [
                          "Indian"
                        ],
                        "avgRating": 4.2,
                        "veg": true,
                        "parentId": "238904",
                        "avgRatingString": "4.2",
                        "totalRatingsString": "20+",
                        "promoted": true,
                        "adTrackingId": "cid=14989483~p=0~adgrpid=14989483#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=428470~eid=bcef6676-fd83-4c6a-95f2-8dcfea3038ce~srvts=1720380496177~collid=45826",
                        "sla": {
                          "deliveryTime": 32,
                          "lastMileTravel": 3,
                          "serviceability": "SERVICEABLE",
                          "slaString": "30-35 mins",
                          "lastMileTravelString": "3.0 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 07:45:00",
                          "opened": true
                        },
                        "badges": {
                          "imageBadges": [
                            {
                              "imageId": "v1695133679/badges/Pure_Veg111.png",
                              "description": "pureveg"
                            }
                          ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textBased": {
                              
                            },
                            "imageBased": {
                              "badgeObject": [
                                {
                                  "attributes": {
                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                    "description": "pureveg"
                                  }
                                }
                              ]
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "10% OFF",
                          "subHeader": "ABOVE ₹149",
                          "discountTag": "FLAT DEAL"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=428470",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "644666",
                        "name": "Chinese Wok",
                        "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                        "locality": "Shalimar Gateway",
                        "areaName": "Alambagh",
                        "costForTwo": "₹250 for two",
                        "cuisines": [
                          "Chinese",
                          "Asian",
                          "Tibetan",
                          "Desserts"
                        ],
                        "avgRating": 4.2,
                        "parentId": "61955",
                        "avgRatingString": "4.2",
                        "totalRatingsString": "500+",
                        "sla": {
                          "deliveryTime": 38,
                          "lastMileTravel": 7,
                          "serviceability": "SERVICEABLE",
                          "slaString": "35-40 mins",
                          "lastMileTravelString": "7.0 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 01:00:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textExtendedBadges": {
                              
                            },
                            "textBased": {
                              
                            },
                            "imageBased": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "ITEMS",
                          "subHeader": "AT ₹199"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=644666",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "354998",
                        "name": "Pizza Hut",
                        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                        "locality": "Phoenix United Mall",
                        "areaName": "Alambagh",
                        "costForTwo": "₹350 for two",
                        "cuisines": [
                          "Pizzas"
                        ],
                        "avgRating": 4,
                        "parentId": "721",
                        "avgRatingString": "4.0",
                        "totalRatingsString": "1K+",
                        "sla": {
                          "deliveryTime": 38,
                          "lastMileTravel": 4.5,
                          "serviceability": "SERVICEABLE",
                          "slaString": "35-40 mins",
                          "lastMileTravelString": "4.5 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 03:00:00",
                          "opened": true
                        },
                        "badges": {
                          "imageBadges": [
                            {
                              "imageId": "Rxawards/_CATEGORY-Pizza.png",
                              "description": "Delivery!"
                            }
                          ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textExtendedBadges": {
                              
                            },
                            "textBased": {
                              
                            },
                            "imageBased": {
                              "badgeObject": [
                                {
                                  "attributes": {
                                    "imageId": "Rxawards/_CATEGORY-Pizza.png",
                                    "description": "Delivery!"
                                  }
                                }
                              ]
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "ITEMS",
                          "subHeader": "AT ₹189"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=354998",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "183383",
                        "name": "Burger King",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4c140390-e252-47b2-a5aa-6d199918bb10_183383.JPG",
                        "locality": "Phoenix United Mall",
                        "areaName": "Lda Colony",
                        "costForTwo": "₹350 for two",
                        "cuisines": [
                          "Burgers",
                          "American"
                        ],
                        "avgRating": 4.4,
                        "parentId": "166",
                        "avgRatingString": "4.4",
                        "totalRatingsString": "10K+",
                        "sla": {
                          "deliveryTime": 36,
                          "lastMileTravel": 4.5,
                          "serviceability": "SERVICEABLE",
                          "slaString": "35-40 mins",
                          "lastMileTravelString": "4.5 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 03:00:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "imageBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            },
                            "textBased": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "50% OFF",
                          "subHeader": "UPTO ₹90"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "4.6",
                            "ratingCount": "500+"
                          },
                          "source": "GOOGLE",
                          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=183383",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "332950",
                        "name": "La Pino'z Pizza",
                        "cloudinaryImageId": "z6uobobtwq544z096vk4",
                        "locality": "Alambagh",
                        "areaName": "Alambagh",
                        "costForTwo": "₹300 for two",
                        "cuisines": [
                          "Pizzas",
                          "Pastas",
                          "Italian",
                          "Desserts",
                          "Beverages"
                        ],
                        "avgRating": 4.2,
                        "parentId": "4961",
                        "avgRatingString": "4.2",
                        "totalRatingsString": "10K+",
                        "sla": {
                          "deliveryTime": 27,
                          "lastMileTravel": 3.6,
                          "serviceability": "SERVICEABLE",
                          "slaString": "25-30 mins",
                          "lastMileTravelString": "3.5 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 04:00:00",
                          "opened": true
                        },
                        "badges": {
                          "imageBadges": [
                            {
                              "imageId": "Rxawards/_CATEGORY-Pizza.png",
                              "description": "Delivery!"
                            }
                          ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textExtendedBadges": {
                              
                            },
                            "textBased": {
                              
                            },
                            "imageBased": {
                              "badgeObject": [
                                {
                                  "attributes": {
                                    "imageId": "Rxawards/_CATEGORY-Pizza.png",
                                    "description": "Delivery!"
                                  }
                                }
                              ]
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "60% OFF",
                          "subHeader": "UPTO ₹120"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "4.1",
                            "ratingCount": "500+"
                          },
                          "source": "GOOGLE",
                          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=332950",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "458203",
                        "name": "KFC",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/3334c8c2-3a17-4531-a91d-fe43776e2df1_458203.JPG",
                        "locality": "Rattan Khand",
                        "areaName": "Aashiana",
                        "costForTwo": "₹400 for two",
                        "cuisines": [
                          "Burgers",
                          "Fast Food",
                          "Rolls & Wraps"
                        ],
                        "avgRating": 4.2,
                        "parentId": "547",
                        "avgRatingString": "4.2",
                        "totalRatingsString": "1K+",
                        "sla": {
                          "deliveryTime": 30,
                          "lastMileTravel": 4.9,
                          "serviceability": "SERVICEABLE",
                          "slaString": "25-30 mins",
                          "lastMileTravelString": "4.9 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 04:00:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "aggregatedDiscountInfoV2": {
                          
                        },
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textBased": {
                              
                            },
                            "imageBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=458203",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "132663",
                        "name": "Shri Balaji Dhaba",
                        "cloudinaryImageId": "mz76cmtw79td4mzk2fvi",
                        "locality": "Alambagh",
                        "areaName": "Alambagh",
                        "costForTwo": "₹200 for two",
                        "cuisines": [
                          "Indian",
                          "Chinese",
                          "Thalis",
                          "Street Food"
                        ],
                        "avgRating": 4.2,
                        "veg": true,
                        "parentId": "12121",
                        "avgRatingString": "4.2",
                        "totalRatingsString": "10K+",
                        "sla": {
                          "deliveryTime": 33,
                          "lastMileTravel": 6.5,
                          "serviceability": "SERVICEABLE",
                          "slaString": "30-35 mins",
                          "lastMileTravelString": "6.5 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 03:00:00",
                          "opened": true
                        },
                        "badges": {
                          "imageBadges": [
                            {
                              "imageId": "v1695133679/badges/Pure_Veg111.png",
                              "description": "pureveg"
                            }
                          ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textExtendedBadges": {
                              
                            },
                            "textBased": {
                              
                            },
                            "imageBased": {
                              "badgeObject": [
                                {
                                  "attributes": {
                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                    "description": "pureveg"
                                  }
                                }
                              ]
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "₹100 OFF",
                          "subHeader": "ABOVE ₹249",
                          "discountTag": "FLAT DEAL"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "4.1",
                            "ratingCount": "1K+"
                          },
                          "source": "GOOGLE",
                          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=132663",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "364762",
                        "name": "Burger Singh (Big Punjabi Burgers)",
                        "cloudinaryImageId": "972a37599772cdc7df93a0855ad87591",
                        "locality": "Nagar Nigam",
                        "areaName": "Aashiana",
                        "costForTwo": "₹300 for two",
                        "cuisines": [
                          "American",
                          "Fast Food",
                          "Snacks",
                          "Desserts",
                          "Beverages",
                          "Indian"
                        ],
                        "avgRating": 4.4,
                        "parentId": "375065",
                        "avgRatingString": "4.4",
                        "totalRatingsString": "5K+",
                        "sla": {
                          "deliveryTime": 27,
                          "lastMileTravel": 5,
                          "serviceability": "SERVICEABLE",
                          "slaString": "25-30 mins",
                          "lastMileTravelString": "5.0 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 04:30:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textBased": {
                              
                            },
                            "imageBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "50% OFF",
                          "subHeader": "UPTO ₹100"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=364762",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "256772",
                        "name": "Subway",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/6dda9a1d-2baf-486d-9c1b-d3d97c9edd11_256772.JPG",
                        "locality": "Neal Apollo medic hospital",
                        "areaName": "JB Emperor Ashiyana",
                        "costForTwo": "₹350 for two",
                        "cuisines": [
                          "Healthy Food",
                          "Salads",
                          "Snacks",
                          "Desserts",
                          "Beverages"
                        ],
                        "avgRating": 4.1,
                        "parentId": "2",
                        "avgRatingString": "4.1",
                        "totalRatingsString": "1K+",
                        "sla": {
                          "deliveryTime": 34,
                          "lastMileTravel": 5,
                          "serviceability": "SERVICEABLE",
                          "slaString": "30-35 mins",
                          "lastMileTravelString": "5.0 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 04:00:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textExtendedBadges": {
                              
                            },
                            "textBased": {
                              
                            },
                            "imageBased": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "60% OFF",
                          "subHeader": "UPTO ₹120"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=256772",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "782029",
                        "name": "The Belgian Waffle Co.",
                        "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
                        "locality": "KANPUR ROAD",
                        "areaName": "AASHIYANA",
                        "costForTwo": "₹200 for two",
                        "cuisines": [
                          "Waffle",
                          "Desserts",
                          "Ice Cream"
                        ],
                        "avgRating": 4.6,
                        "veg": true,
                        "parentId": "2233",
                        "avgRatingString": "4.6",
                        "totalRatingsString": "100+",
                        "sla": {
                          "deliveryTime": 33,
                          "lastMileTravel": 5,
                          "serviceability": "SERVICEABLE",
                          "slaString": "30-35 mins",
                          "lastMileTravelString": "5.0 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 04:00:00",
                          "opened": true
                        },
                        "badges": {
                          "imageBadges": [
                            {
                              "imageId": "v1695133679/badges/Pure_Veg111.png",
                              "description": "pureveg"
                            }
                          ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textBased": {
                              
                            },
                            "imageBased": {
                              "badgeObject": [
                                {
                                  "attributes": {
                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                    "description": "pureveg"
                                  }
                                }
                              ]
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "40% OFF",
                          "subHeader": "UPTO ₹80"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=782029",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "209249",
                        "name": "The Oven",
                        "cloudinaryImageId": "w4tdr5zww6d2sxziy5tx",
                        "locality": "Krishna Nagar",
                        "areaName": "Alambagh",
                        "costForTwo": "₹150 for two",
                        "cuisines": [
                          "Italian",
                          "Pizzas",
                          "Pastas"
                        ],
                        "avgRating": 4,
                        "veg": true,
                        "parentId": "11556",
                        "avgRatingString": "4.0",
                        "totalRatingsString": "5K+",
                        "sla": {
                          "deliveryTime": 28,
                          "lastMileTravel": 3,
                          "serviceability": "SERVICEABLE",
                          "slaString": "25-30 mins",
                          "lastMileTravelString": "3.0 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 04:00:00",
                          "opened": true
                        },
                        "badges": {
                          "imageBadges": [
                            {
                              "imageId": "v1695133679/badges/Pure_Veg111.png",
                              "description": "pureveg"
                            }
                          ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textBased": {
                              
                            },
                            "imageBased": {
                              "badgeObject": [
                                {
                                  "attributes": {
                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                    "description": "pureveg"
                                  }
                                }
                              ]
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "₹125 OFF",
                          "subHeader": "ABOVE ₹249",
                          "discountTag": "FLAT DEAL"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=209249",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "339113",
                        "name": "Mr. Brown - Danbro",
                        "cloudinaryImageId": "82db3bd0a7f595c61c7cda9968320d89",
                        "locality": "Ashiyana",
                        "areaName": "Ashiyana",
                        "costForTwo": "₹300 for two",
                        "cuisines": [
                          "Italian",
                          "Bakery",
                          "Beverages",
                          "Pizzas",
                          "Snacks"
                        ],
                        "avgRating": 4.5,
                        "parentId": "2262",
                        "avgRatingString": "4.5",
                        "totalRatingsString": "5K+",
                        "sla": {
                          "deliveryTime": 33,
                          "lastMileTravel": 5,
                          "serviceability": "SERVICEABLE",
                          "slaString": "30-35 mins",
                          "lastMileTravelString": "5.0 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-14 00:00:00",
                          "opened": true
                        },
                        "badges": {
                          "imageBadges": [
                            {
                              "imageId": "Rxawards/_CATEGORY-Desserts.png",
                              "description": "Delivery!"
                            },
                            {
                              "imageId": "newg.png",
                              "description": "Gourmet"
                            },
                            {
                              "imageId": "v1695133679/badges/Pure_Veg111.png",
                              "description": "pureveg"
                            }
                          ]
                        },
                        "isOpen": true,
                        "aggregatedDiscountInfoV2": {
                          
                        },
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "imageBased": {
                              "badgeObject": [
                                {
                                  "attributes": {
                                    "imageId": "Rxawards/_CATEGORY-Desserts.png",
                                    "description": "Delivery!"
                                  }
                                },
                                {
                                  "attributes": {
                                    "imageId": "newg.png",
                                    "description": "Gourmet"
                                  }
                                },
                                {
                                  "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                  }
                                }
                              ]
                            },
                            "textExtendedBadges": {
                              
                            },
                            "textBased": {
                              
                            }
                          }
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "4.7",
                            "ratingCount": "1K+"
                          },
                          "source": "GOOGLE",
                          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=339113",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "63837",
                        "name": "Rollarappaa",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/b90cda1b-69cd-400c-bd1c-f96f50ebcc0b_63837.jpg",
                        "locality": "Alambagh",
                        "areaName": "Alambagh",
                        "costForTwo": "₹200 for two",
                        "cuisines": [
                          "North Indian",
                          "Snacks",
                          "Street Food"
                        ],
                        "avgRating": 4.3,
                        "parentId": "6263",
                        "avgRatingString": "4.3",
                        "totalRatingsString": "1K+",
                        "sla": {
                          "deliveryTime": 35,
                          "lastMileTravel": 4.5,
                          "serviceability": "SERVICEABLE",
                          "slaString": "30-35 mins",
                          "lastMileTravelString": "4.5 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 04:00:00",
                          "opened": true
                        },
                        "badges": {
                          "imageBadges": [
                            {
                              "imageId": "Rxawards/_CATEGORY-Rolls.png",
                              "description": "Delivery!"
                            }
                          ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textExtendedBadges": {
                              
                            },
                            "textBased": {
                              
                            },
                            "imageBased": {
                              "badgeObject": [
                                {
                                  "attributes": {
                                    "imageId": "Rxawards/_CATEGORY-Rolls.png",
                                    "description": "Delivery!"
                                  }
                                }
                              ]
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "50% OFF",
                          "subHeader": "UPTO ₹100"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "4.3",
                            "ratingCount": "10K+"
                          },
                          "source": "GOOGLE",
                          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=63837",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "544671",
                        "name": "Vadilal Ice Creams",
                        "cloudinaryImageId": "5cf8ea1ca105ba02a9e77ecef2bb2603",
                        "locality": "Manasnagar",
                        "areaName": "Ashiyana",
                        "costForTwo": "₹200 for two",
                        "cuisines": [
                          "Ice Cream",
                          "Desserts"
                        ],
                        "avgRating": 4.6,
                        "veg": true,
                        "parentId": "11745",
                        "avgRatingString": "4.6",
                        "totalRatingsString": "500+",
                        "sla": {
                          "deliveryTime": 27,
                          "lastMileTravel": 3.9,
                          "serviceability": "SERVICEABLE",
                          "slaString": "25-30 mins",
                          "lastMileTravelString": "3.9 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 01:00:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "imageBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            },
                            "textBased": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "10% OFF",
                          "subHeader": "UPTO ₹40"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=544671",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "673429",
                        "name": "Rominus Pizza And Burger",
                        "cloudinaryImageId": "9ec9ffd900c24ef751e2f34ba3d2fd4b",
                        "areaName": "LDA Colony",
                        "costForTwo": "₹400 for two",
                        "cuisines": [
                          "Pizzas",
                          "Burgers",
                          "Fast Food",
                          "Italian"
                        ],
                        "avgRating": 4.4,
                        "parentId": "8387",
                        "avgRatingString": "4.4",
                        "totalRatingsString": "1K+",
                        "sla": {
                          "deliveryTime": 29,
                          "lastMileTravel": 4.5,
                          "serviceability": "SERVICEABLE",
                          "slaString": "25-30 mins",
                          "lastMileTravelString": "4.5 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 03:00:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "imageBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            },
                            "textBased": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "60% OFF",
                          "subHeader": "UPTO ₹120"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "4.5",
                            "ratingCount": "100+"
                          },
                          "source": "GOOGLE",
                          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=673429",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "238111",
                        "name": "Faasos - Wraps, Rolls & Shawarma",
                        "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
                        "locality": "Phoenix mall",
                        "areaName": "Alambagh",
                        "costForTwo": "₹200 for two",
                        "cuisines": [
                          "Kebabs",
                          "Fast Food",
                          "Snacks",
                          "American",
                          "Healthy Food",
                          "Desserts",
                          "Beverages"
                        ],
                        "avgRating": 4.4,
                        "parentId": "21809",
                        "avgRatingString": "4.4",
                        "totalRatingsString": "5K+",
                        "sla": {
                          "deliveryTime": 31,
                          "lastMileTravel": 4.6,
                          "serviceability": "SERVICEABLE",
                          "slaString": "30-35 mins",
                          "lastMileTravelString": "4.5 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 03:00:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textBased": {
                              
                            },
                            "imageBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "₹125 OFF",
                          "subHeader": "ABOVE ₹199",
                          "discountTag": "FLAT DEAL"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=238111",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "800916",
                        "name": "Wat-A-Burger! - India Ka Burger",
                        "cloudinaryImageId": "5328fbc604c769293af7ea570d81a90c",
                        "locality": "Sri Pratap Plaza",
                        "areaName": "Alambagh",
                        "costForTwo": "₹250 for two",
                        "cuisines": [
                          "Burgers",
                          "Snacks"
                        ],
                        "avgRating": 4.3,
                        "parentId": "471020",
                        "avgRatingString": "4.3",
                        "totalRatingsString": "100+",
                        "sla": {
                          "deliveryTime": 28,
                          "lastMileTravel": 4.5,
                          "serviceability": "SERVICEABLE",
                          "slaString": "25-30 mins",
                          "lastMileTravelString": "4.5 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 05:00:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textBased": {
                              
                            },
                            "imageBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "₹125 OFF",
                          "subHeader": "ABOVE ₹249",
                          "discountTag": "FLAT DEAL"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=800916",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "673426",
                        "name": "Burger Lane",
                        "cloudinaryImageId": "59fcf06562729551dd7970d16e1cbde9",
                        "locality": "LDA Colony",
                        "areaName": "Ashiyana",
                        "costForTwo": "₹150 for two",
                        "cuisines": [
                          "Burgers",
                          "American"
                        ],
                        "avgRating": 4.2,
                        "parentId": "403109",
                        "avgRatingString": "4.2",
                        "totalRatingsString": "100+",
                        "sla": {
                          "deliveryTime": 35,
                          "lastMileTravel": 4.5,
                          "serviceability": "SERVICEABLE",
                          "slaString": "30-35 mins",
                          "lastMileTravelString": "4.5 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 03:00:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "imageBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            },
                            "textBased": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "60% OFF",
                          "subHeader": "UPTO ₹120"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=673426",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "792334",
                        "name": "Wendy's Flavor Fresh Burgers",
                        "cloudinaryImageId": "f1aa621021a2826088089b89842d4e7c",
                        "locality": "Phoenix mall",
                        "areaName": "Alambagh",
                        "costForTwo": "₹500 for two",
                        "cuisines": [
                          "Burgers",
                          "American",
                          "Fast Food",
                          "Snacks",
                          "Beverages"
                        ],
                        "avgRating": 4.6,
                        "parentId": "470493",
                        "avgRatingString": "4.6",
                        "totalRatingsString": "4",
                        "sla": {
                          "deliveryTime": 36,
                          "lastMileTravel": 4.5,
                          "serviceability": "SERVICEABLE",
                          "slaString": "35-40 mins",
                          "lastMileTravelString": "4.5 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 03:00:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textBased": {
                              
                            },
                            "imageBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "30% OFF",
                          "subHeader": "UPTO ₹75"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=792334",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "800058",
                        "name": "Vital Bowls - Salads & more",
                        "cloudinaryImageId": "63a3c2a8873eb3e8d5c86f68defd5370",
                        "locality": "Phoenix mall",
                        "areaName": "Alambagh",
                        "costForTwo": "₹500 for two",
                        "cuisines": [
                          "Healthy Food",
                          "Salads",
                          "Beverages",
                          "Keto"
                        ],
                        "veg": true,
                        "parentId": "478149",
                        "avgRatingString": "--",
                        "sla": {
                          "deliveryTime": 36,
                          "lastMileTravel": 4.5,
                          "serviceability": "SERVICEABLE",
                          "slaString": "35-40 mins",
                          "lastMileTravelString": "4.5 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 03:00:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textBased": {
                              
                            },
                            "imageBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "50% OFF",
                          "subHeader": "UPTO ₹100"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=800058",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "616322",
                        "name": "Biryani Badshah",
                        "cloudinaryImageId": "glsrxlfoicyagx5bqwmu",
                        "locality": "Kanpur Road",
                        "areaName": "Aashiana",
                        "costForTwo": "₹350 for two",
                        "cuisines": [
                          "Biryani",
                          "Mughlai",
                          "North Indian"
                        ],
                        "avgRating": 4.1,
                        "parentId": "10703",
                        "avgRatingString": "4.1",
                        "totalRatingsString": "100+",
                        "sla": {
                          "deliveryTime": 29,
                          "lastMileTravel": 5,
                          "serviceability": "SERVICEABLE",
                          "slaString": "25-30 mins",
                          "lastMileTravelString": "5.0 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 01:00:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textBased": {
                              
                            },
                            "imageBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "ITEMS",
                          "subHeader": "AT ₹199"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=616322",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "911452",
                        "name": "The Burger Company",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/19/9e815756-4ebc-4f79-ad0c-87a513fddac5_911452.jpg",
                        "locality": "Ashiyana",
                        "areaName": "Ashiyana",
                        "costForTwo": "₹350 for two",
                        "cuisines": [
                          "Beverages",
                          "Snacks",
                          "Fast Food",
                          "Burgers"
                        ],
                        "avgRating": 4.2,
                        "parentId": "206007",
                        "avgRatingString": "4.2",
                        "totalRatingsString": "2",
                        "sla": {
                          "deliveryTime": 35,
                          "lastMileTravel": 5,
                          "serviceability": "SERVICEABLE",
                          "slaString": "30-35 mins",
                          "lastMileTravelString": "5.0 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 03:00:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textBased": {
                              
                            },
                            "imageBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "50% OFF",
                          "subHeader": "UPTO ₹100"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "isNewlyOnboarded": true,
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=911452",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "566436",
                        "name": "Faasos' Signature Wraps & Rolls",
                        "cloudinaryImageId": "c583ca6ce40b426797a78ae2ac91f2ec",
                        "locality": "LDA Colony",
                        "areaName": "Alambagh",
                        "costForTwo": "₹350 for two",
                        "cuisines": [
                          "Fast Food",
                          "Snacks",
                          "North Indian",
                          "Desserts",
                          "Beverages"
                        ],
                        "avgRating": 4,
                        "parentId": "340366",
                        "avgRatingString": "4.0",
                        "totalRatingsString": "50+",
                        "sla": {
                          "deliveryTime": 33,
                          "lastMileTravel": 4.5,
                          "serviceability": "SERVICEABLE",
                          "slaString": "30-35 mins",
                          "lastMileTravelString": "4.5 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 03:00:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textBased": {
                              
                            },
                            "imageBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "50% OFF",
                          "subHeader": "UPTO ₹90"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=566436",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "861560",
                        "name": "Pastas By Pizza Hut",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/28d9d1f8-9d45-4476-a652-f308aaf36c6b_861560.jpg",
                        "locality": "Phoenix United Mall",
                        "areaName": "Alambagh",
                        "costForTwo": "₹400 for two",
                        "cuisines": [
                          "Pastas"
                        ],
                        "avgRating": 4,
                        "parentId": "306806",
                        "avgRatingString": "4.0",
                        "totalRatingsString": "8",
                        "sla": {
                          "deliveryTime": 34,
                          "lastMileTravel": 4.5,
                          "serviceability": "SERVICEABLE",
                          "slaString": "30-35 mins",
                          "lastMileTravelString": "4.5 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 03:00:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textExtendedBadges": {
                              
                            },
                            "textBased": {
                              
                            },
                            "imageBased": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "₹100 OFF",
                          "subHeader": "ABOVE ₹349",
                          "discountTag": "FLAT DEAL"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "isNewlyOnboarded": true,
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=861560",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    },
                    {
                      "info": {
                        "id": "713998",
                        "name": "Pizza Wings",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/26/d112a6d7-d173-4ca7-a5ee-40f845719d18_713998.JPG",
                        "locality": "Ashiyana",
                        "areaName": "Ashiyana",
                        "costForTwo": "₹200 for two",
                        "cuisines": [
                          "Pizzas",
                          "Fast Food",
                          "Pastas"
                        ],
                        "avgRating": 4.3,
                        "parentId": "159048",
                        "avgRatingString": "4.3",
                        "totalRatingsString": "500+",
                        "sla": {
                          "deliveryTime": 32,
                          "lastMileTravel": 5.6,
                          "serviceability": "SERVICEABLE",
                          "slaString": "30-35 mins",
                          "lastMileTravelString": "5.5 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-07-08 04:00:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "textBased": {
                              
                            },
                            "imageBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "₹125 OFF",
                          "subHeader": "ABOVE ₹199",
                          "discountTag": "FLAT DEAL"
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "4.9",
                            "ratingCount": "1K+"
                          },
                          "source": "GOOGLE",
                          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        
                      },
                      "cta": {
                        "link": "swiggy://menu?restaurant_id=713998",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                      }
                    }
                  ],
                  "theme": "DELIVERING_NOW",
                  "collectionId": "45826",
                  "style": {
                    
                  }
                }
              },
              "footer": {
                "labelWrapper": {
                  "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.Label",
                  "text": "See all restaurants",
                  "textColor": "#ffffff",
                  "fontSize": 17,
                  "fontName": "FONT_NAME_BOLD",
                  "alignment": "ALIGNMENT_CENTER",
                  "borderRadius": 6,
                  "margin": {
                    "left": 16,
                    "top": 16,
                    "right": 16,
                    "bottom": 16
                  },
                  "padding": {
                    "top": 18,
                    "bottom": 18
                  },
                  "backgroundColor": "#e46d47",
                  "cta": {
                    "link": "swiggy://restaurantList",
                    "text": "See all restaurants",
                    "type": "DEEPLINK"
                  },
                  "maxLines": 1
                }
              }
            }
          }
        ],
       
        },
        
      },
     
    };
   
  

// Define a route to serve the JSON data
app.get('/data', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
